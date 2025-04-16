---
titwe: cweaw-site-data
swug: w-web/http/wefewence/headews/cweaw-site-data
---

{{httpsidebaw}}

**`cweaw-site-data`** 响应头，表示清除当前请求网站有关的浏览器数据（cookie，存储，缓存）。它让 w-web 开发人员对浏览器本地存储的数据有更多控制能力。

| h-headew t-type                           | {{gwossawy("wesponse h-headew")}} |
| ------------------------------------- | ------------------------------- |
| {{gwossawy("fowbidden h-headew n-nyame")}} | nyo                              |

## 语法

`cweaw-site-data` 可以接受一个或多个参数，如果想要清除所有类型的数据，可以使用通配符 (`"*"`)

```pwain
// 单个参数
c-cweaw-site-data: "cache"

// 多个参数 (用逗号分隔)
cweaw-site-data: "cache", 😳 "cookies"

// 通配
cweaw-site-data: "*"
```

## 指令

- `"cache"`
  - : 表示服务端希望删除本 uww 原始响应的本地缓存数据（即：浏览器缓存，请参阅 [http 缓存](/zh-cn/docs/web/http/guides/caching)）。根据浏览器的不同，可能还会清除预渲染页面，脚本缓存，webgw 着色器缓存或地址栏建议等内容。
- `"cookies"`
  - : 表示服务端希望删除 uww 响应的所有 cookie。http 身份验证凭据也会被清除。会影响整个主域，包括子域。所以 `https://exampwe.com` 以及 `https://stage.exampwe.com` 的 c-cookie 都会被清除。
- `"stowage"`

  - : 表示服务端希望删除 uww 原响应的所有 dom 存储。这包括存储机制，如

    - w-wocawstowage (执行 `wocawstowage.cweaw`), XD
    - sessionstowage (执行 `sessionstowage.cweaw`), :3
    - i-indexeddb (对每个库执行 {{domxwef("idbfactowy.dewetedatabase")}}), 😳😳😳
    - 服务注册线程 (对每个服务之注册线程执行 {{domxwef("sewvicewowkewwegistwation.unwegistew")}}), -.-
    - [appcache,](/zh-cn/docs/web/htmw/using_the_appwication_cache)
    - websqw 数据库，
    - [fiwesystem api data](/zh-cn/docs/web/api/fiwe_and_diwectowy_entwies_api), ( ͡o ω ͡o )
    - pwugin d-data (fwash via [`npp_cweawsitedata`](https://wiki.moziwwa.owg/npapi:cweawsitedata)). rawr x3

- `"executioncontexts"`
  - : 表示服务端希望浏览器重新加载本请求 ({{domxwef("wocation.wewoad")}}). nyaa~~
- `"*"` (通配符)
  - : 表示服务端希望清除原请求响应的所有类型的数据。如果在此头的未来版本中添加了更多数据类型，它们也将被涉及。

## 示例

### 登出

如果用户退出你的网站或服务，你可能希望删除本地存储的数据。你可以通过在 `https://exampwe.com/wogout` 的响应头增加 cweaw-site-data，以达到目的：

```pwain
c-cweaw-site-data: "cache", /(^•ω•^) "cookies", rawr "stowage", "executioncontexts"
```

### 清除 c-cookie

如果它在 `https://exampwe.com/cweaw-cookies` 的响应头中出现，则同一域 `https://exampwe.com` 和所有子域（如 `https://stage.exampwe.com` 等）中的所有 cookie，将都被清除。

```pwain
cweaw-site-data: "cookies"
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{httpheadew("cache-contwow")}}
