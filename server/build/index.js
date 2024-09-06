"use strict";

var _express = _interopRequireDefault(require("express"));
var routes = _interopRequireWildcard(require("./routes"));
var _types = require("./types");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
(async () => {
  const app = (0, _express.default)();
  const port = process.env.PORT || 8080;
  for (const route of Object.values(routes)) {
    switch (route.request) {
      case _types.Request.GET:
        app.get(`/api/${route.route}`, route.callback);
        break;
      case _types.Request.POST:
        app.post(`/api/${route.route}`, route.callback);
        break;
    }
  }
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZXhwcmVzcyIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwicm91dGVzIiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJfdHlwZXMiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJlIiwiV2Vha01hcCIsInIiLCJ0IiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJoYXMiLCJnZXQiLCJuIiwiX19wcm90b19fIiwiYSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwidSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImkiLCJzZXQiLCJhcHAiLCJleHByZXNzIiwicG9ydCIsInByb2Nlc3MiLCJlbnYiLCJQT1JUIiwicm91dGUiLCJ2YWx1ZXMiLCJyZXF1ZXN0IiwiUmVxdWVzdCIsIkdFVCIsImNhbGxiYWNrIiwiUE9TVCIsInBvc3QiLCJsaXN0ZW4iLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZXMiOlsiLi4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCJcbmltcG9ydCAqIGFzIHJvdXRlcyBmcm9tIFwiLi9yb3V0ZXNcIlxuaW1wb3J0IHsgUmVxdWVzdCB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbihhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgYXBwID0gZXhwcmVzcygpXG4gICAgY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgODA4MDtcblxuICAgIGZvciAoY29uc3Qgcm91dGUgb2YgT2JqZWN0LnZhbHVlcyhyb3V0ZXMpKSB7XG4gICAgICAgIHN3aXRjaCAocm91dGUucmVxdWVzdCkge1xuICAgICAgICAgICAgY2FzZSBSZXF1ZXN0LkdFVDpcbiAgICAgICAgICAgICAgICBhcHAuZ2V0KGAvYXBpLyR7cm91dGUucm91dGV9YCwgcm91dGUuY2FsbGJhY2spXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFJlcXVlc3QuUE9TVDpcbiAgICAgICAgICAgICAgICBhcHAucG9zdChgL2FwaS8ke3JvdXRlLnJvdXRlfWAsIHJvdXRlLmNhbGxiYWNrKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBMaXN0ZW5pbmcgb24gcG9ydCAke3BvcnR9YClcbiAgICB9KVxuXG59KSgpXG4iXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBQUEsUUFBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUMsTUFBQSxHQUFBQyx1QkFBQSxDQUFBRixPQUFBO0FBQ0EsSUFBQUcsTUFBQSxHQUFBSCxPQUFBO0FBQWtDLFNBQUFJLHlCQUFBQyxDQUFBLDZCQUFBQyxPQUFBLG1CQUFBQyxDQUFBLE9BQUFELE9BQUEsSUFBQUUsQ0FBQSxPQUFBRixPQUFBLFlBQUFGLHdCQUFBLFlBQUFBLENBQUFDLENBQUEsV0FBQUEsQ0FBQSxHQUFBRyxDQUFBLEdBQUFELENBQUEsS0FBQUYsQ0FBQTtBQUFBLFNBQUFILHdCQUFBRyxDQUFBLEVBQUFFLENBQUEsU0FBQUEsQ0FBQSxJQUFBRixDQUFBLElBQUFBLENBQUEsQ0FBQUksVUFBQSxTQUFBSixDQUFBLGVBQUFBLENBQUEsdUJBQUFBLENBQUEseUJBQUFBLENBQUEsV0FBQUssT0FBQSxFQUFBTCxDQUFBLFFBQUFHLENBQUEsR0FBQUosd0JBQUEsQ0FBQUcsQ0FBQSxPQUFBQyxDQUFBLElBQUFBLENBQUEsQ0FBQUcsR0FBQSxDQUFBTixDQUFBLFVBQUFHLENBQUEsQ0FBQUksR0FBQSxDQUFBUCxDQUFBLE9BQUFRLENBQUEsS0FBQUMsU0FBQSxVQUFBQyxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsY0FBQSxJQUFBRCxNQUFBLENBQUFFLHdCQUFBLFdBQUFDLENBQUEsSUFBQWQsQ0FBQSxvQkFBQWMsQ0FBQSxPQUFBQyxjQUFBLENBQUFDLElBQUEsQ0FBQWhCLENBQUEsRUFBQWMsQ0FBQSxTQUFBRyxDQUFBLEdBQUFQLENBQUEsR0FBQUMsTUFBQSxDQUFBRSx3QkFBQSxDQUFBYixDQUFBLEVBQUFjLENBQUEsVUFBQUcsQ0FBQSxLQUFBQSxDQUFBLENBQUFWLEdBQUEsSUFBQVUsQ0FBQSxDQUFBQyxHQUFBLElBQUFQLE1BQUEsQ0FBQUMsY0FBQSxDQUFBSixDQUFBLEVBQUFNLENBQUEsRUFBQUcsQ0FBQSxJQUFBVCxDQUFBLENBQUFNLENBQUEsSUFBQWQsQ0FBQSxDQUFBYyxDQUFBLFlBQUFOLENBQUEsQ0FBQUgsT0FBQSxHQUFBTCxDQUFBLEVBQUFHLENBQUEsSUFBQUEsQ0FBQSxDQUFBZSxHQUFBLENBQUFsQixDQUFBLEVBQUFRLENBQUEsR0FBQUEsQ0FBQTtBQUFBLFNBQUFkLHVCQUFBTSxDQUFBLFdBQUFBLENBQUEsSUFBQUEsQ0FBQSxDQUFBSSxVQUFBLEdBQUFKLENBQUEsS0FBQUssT0FBQSxFQUFBTCxDQUFBO0FBRWxDLENBQUMsWUFBWTtFQUNULE1BQU1tQixHQUFHLEdBQUcsSUFBQUMsZ0JBQU8sRUFBQyxDQUFDO0VBQ3JCLE1BQU1DLElBQUksR0FBR0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLElBQUksSUFBSSxJQUFJO0VBRXJDLEtBQUssTUFBTUMsS0FBSyxJQUFJZCxNQUFNLENBQUNlLE1BQU0sQ0FBQzlCLE1BQU0sQ0FBQyxFQUFFO0lBQ3ZDLFFBQVE2QixLQUFLLENBQUNFLE9BQU87TUFDakIsS0FBS0MsY0FBTyxDQUFDQyxHQUFHO1FBQ1pWLEdBQUcsQ0FBQ1osR0FBRyxDQUFDLFFBQVFrQixLQUFLLENBQUNBLEtBQUssRUFBRSxFQUFFQSxLQUFLLENBQUNLLFFBQVEsQ0FBQztRQUM5QztNQUNKLEtBQUtGLGNBQU8sQ0FBQ0csSUFBSTtRQUNiWixHQUFHLENBQUNhLElBQUksQ0FBQyxRQUFRUCxLQUFLLENBQUNBLEtBQUssRUFBRSxFQUFFQSxLQUFLLENBQUNLLFFBQVEsQ0FBQztRQUMvQztJQUNSO0VBQ0o7RUFFQVgsR0FBRyxDQUFDYyxNQUFNLENBQUNaLElBQUksRUFBRSxNQUFNO0lBQ25CYSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxxQkFBcUJkLElBQUksRUFBRSxDQUFDO0VBQzVDLENBQUMsQ0FBQztBQUVOLENBQUMsRUFBRSxDQUFDIiwiaWdub3JlTGlzdCI6W119