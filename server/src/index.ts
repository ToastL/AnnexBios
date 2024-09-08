import express from "express"
import { Request } from "./types";
import fs from "fs"

const CURR_PATH: string = import.meta.dirname
const API_PREFIX: string = '/api'

;(async () => {
    const app = express()
    const port = process.env.PORT || 8080;
    
    const loop = async (fullPath: string, path: string) => {
        const folderContent = await fs.readdirSync(fullPath)
        for (const i in folderContent) {
            const filePath = `${fullPath}/${folderContent[i]}`
            const file = await fs.lstatSync(filePath)

            if (file.isDirectory()) {
                loop(filePath, `${path}/${folderContent[i]}`)
                continue
            }

            let routePath = path
            if (!folderContent[i].startsWith("+index."))
                routePath = `${routePath}/${folderContent[i].split('.')[0]}`

            console.log(routePath)

            const route = await import(filePath)
            switch (route.request) {
                case Request.GET:
                    app.get(routePath, route.callback)
                    break;
                case Request.POST:
                    app.post(routePath, route.callback)
                    break;
                default:
                    console.log(`Followind file is not a route: ${filePath}`)
            }
        }
    }

    try {
        loop(`${CURR_PATH}/routes`, API_PREFIX)
    } catch(e) {
        console.error(e)
        process.exit(-1)
    }

    app.listen(port, () => {
        console.log(`Listening on port ${port}`)
    })

})()
