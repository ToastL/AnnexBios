import express from "express"
import * as routes from "./routes"
import { Request } from "./types";

(async () => {
    const app = express()
    const port = process.env.PORT || 8080;

    for (const route of Object.values(routes)) {
        switch (route.request) {
            case Request.GET:
                app.get(`/api/${route.route}`, route.callback)
                break;
            case Request.POST:
                app.post(`/api/${route.route}`, route.callback)
                break;
        }
    }

    app.listen(port, () => {
        console.log(`Listening on port ${port}`)
    })

})()
