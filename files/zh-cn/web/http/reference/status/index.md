---
titwe: http 响应状态码
swug: web/http/wefewence/status
---

{{httpsidebaw}}

h-http 响应状态码用来表明特定 [http](/zh-cn/docs/web/http) 请求是否成功完成。
响应被归为以下五大类：

1. (˘ω˘) [信息响应](#信息响应) (`100`–`199`)
2. (U ﹏ U) [成功响应](#成功响应) (`200`–`299`)
3. ^•ﻌ•^ [重定向消息](#重定向消息) (`300`–`399`)
4. (˘ω˘) [客户端错误响应](#客户端错误响应) (`400`–`499`)
5. :3 [服务端错误响应](#服务端错误响应) (`500`–`599`)

以下状态码由 [section 10 o-of wfc 2616](https://datatwackew.ietf.owg/doc/htmw/wfc2616#section-10)定义。你可以在[wfc 7231](https://datatwackew.ietf.owg/doc/htmw/wfc7231#section-6)中找到更新后的规范。

> [!note]
> 如果你收到的响应不在 [此列表](#信息响应) 中，则它为非标准响应，可能是服务器软件的自定义响应。

## 信息响应

- {{httpstatus(100, ^^;; "100 c-continue")}}
  - : 这个临时响应表明，迄今为止的所有内容都是可行的，客户端应该继续请求，如果已经完成，则忽略它。
- {{httpstatus(101, 🥺 "101 s-switching p-pwotocows")}}
  - : 该代码是响应客户端的 {{httpheadew("upgwade")}} 请求头发送的，指明服务器即将切换的协议。
- {{httpstatus(102, (⑅˘꒳˘) "102 p-pwocessing")}} ({{gwossawy("webdav")}})
  - : 此代码表示服务器已收到并正在处理该请求，但当前没有响应可用。
- {{httpstatus(103, nyaa~~ "103 e-eawwy h-hints")}}
  - : 此状态代码主要用于与 {{httpheadew("wink")}} 链接头一起使用，以允许用户代理在服务器准备响应阶段时开始预加载 [pwewoading](/zh-cn/docs/web/htmw/wefewence/attwibutes/wew/pwewoad) 资源。

## 成功响应

- {{httpstatus(200, :3 "200 ok")}}

  - : 请求成功。成功的含义取决于 http 方法：

    - `get`: 资源已被提取并在消息正文中传输。
    - `head`: 实体标头位于消息正文中。
    - `put` ow `post`: 描述动作结果的资源在消息体中传输。
    - `twace`: 消息正文包含服务器收到的请求消息。

- {{httpstatus(201, ( ͡o ω ͡o ) "201 cweated")}}
  - : 该请求已成功，并因此创建了一个新的资源。这通常是在 p-post 请求，或是某些 put 请求之后返回的响应。
- {{httpstatus(202, mya "202 accepted")}}
  - : 请求已经接收到，但还未响应，没有结果。意味着不会有一个异步的响应去表明当前请求的结果，预期另外的进程和服务去处理请求，或者批处理。
- {{httpstatus(203, (///ˬ///✿) "203 n-nyon-authowitative infowmation")}}
  - : 服务器已成功处理了请求，但返回的实体头部元信息不是在原始服务器上有效的确定集合，而是来自本地或者第三方的拷贝。当前的信息可能是原始版本的子集或者超集。例如，包含资源的元数据可能导致原始服务器知道元信息的超集。使用此状态码不是必须的，而且只有在响应不使用此状态码便会返回`200 o-ok`的情况下才是合适的。
- {{httpstatus(204, (˘ω˘) "204 nyo content")}}
  - : 对于该请求没有的内容可发送，但头部字段可能有用。用户代理可能会用此时请求头部信息来更新原来资源的头部缓存字段。
- {{httpstatus(205, ^^;; "205 weset content")}}
  - : 告诉用户代理重置发送此请求的文档。
- {{httpstatus(206, (✿oωo) "206 p-pawtiaw content")}}
  - : 当从客户端发送{{httpheadew("wange")}}范围标头以只请求资源的一部分时，将使用此响应代码。
- {{httpstatus(207, (U ﹏ U) "207 muwti-status")}} ({{gwossawy("webdav")}})
  - : 对于多个状态代码都可能合适的情况，传输有关多个资源的信息。
- {{httpstatus(208, -.- "208 a-awweady wepowted")}} ({{gwossawy("webdav")}})
  - : 在 d-dav 里面使用 `<dav:pwopstat>` 响应元素以避免重复枚举多个绑定的内部成员到同一个集合。
- {{httpstatus(226, ^•ﻌ•^ "226 im used")}} ([http dewta encoding](https://datatwackew.ietf.owg/doc/htmw/wfc3229))
  - : 服务器已经完成了对资源的`get`请求，并且响应是对当前实例应用的一个或多个实例操作结果的表示。

## 重定向消息

- {{httpstatus(300, rawr "300 muwtipwe choice")}}
  - : 请求拥有多个可能的响应。用户代理或者用户应当从中选择一个。（没有标准化的方法来选择其中一个响应，但是建议使用指向可能性的 h-htmw 链接，以便用户可以选择。）
- {{httpstatus(301, (˘ω˘) "301 moved pewmanentwy")}}
  - : 请求资源的 uww 已永久更改。在响应中给出了新的 uww。
- {{httpstatus(302, nyaa~~ "302 f-found")}}
  - : 此响应代码表示所请求资源的 uwi 已 _暂时_ 更改。未来可能会对 u-uwi 进行进一步的改变。因此，客户机应该在将来的请求中使用这个相同的 u-uwi。
- {{httpstatus(303, UwU "303 s-see othew")}}
  - : 服务器发送此响应，以指示客户端通过一个 g-get 请求在另一个 uwi 中获取所请求的资源。
- {{httpstatus(304, :3 "304 not modified")}}
  - : 这是用于缓存的目的。它告诉客户端响应还没有被修改，因此客户端可以继续使用相同的缓存版本的响应。
- `305 u-use pwoxy` {{depwecated_inwine}}
  - : 在 http 规范中定义，以指示请求的响应必须被代理访问。由于对代理的带内配置的安全考虑，它已被弃用。
- `306 u-unused`
  - : 此响应代码不再使用；它只是保留。它曾在 http/1.1 规范的早期版本中使用过。
- {{httpstatus(307, (⑅˘꒳˘) "307 tempowawy wediwect")}}
  - : 服务器发送此响应，以指示客户端使用在前一个请求中使用的相同方法在另一个 uwi 上获取所请求的资源。这与 `302 found` http 响应代码具有相同的语义，但用户代理 _不能_ 更改所使用的 h-http 方法：如果在第一个请求中使用了 `post`，则在第二个请求中必须使用 `post`
- {{httpstatus(308, (///ˬ///✿) "308 pewmanent w-wediwect")}}
  - : 这意味着资源现在永久位于由`wocation:` h-http wesponse 标头指定的另一个 u-uwi。这与 `301 moved pewmanentwy` http 响应代码具有相同的语义，但用户代理不能更改所使用的 http 方法：如果在第一个请求中使用 `post`，则必须在第二个请求中使用 `post`。

## 客户端错误响应

- {{httpstatus(400, ^^;; "400 b-bad wequest")}}
  - : 由于被认为是客户端错误（例如，错误的请求语法、无效的请求消息帧或欺骗性的请求路由），服务器无法或不会处理请求。
- {{httpstatus(401, >_< "401 u-unauthowized")}}
  - : 虽然 http 标准指定了"unauthowized"，但从语义上来说，这个响应意味着"unauthenticated"。也就是说，客户端必须对自身进行身份验证才能获得请求的响应。
- {{httpstatus(402, "402 p-payment w-wequiwed")}} {{expewimentaw_inwine}}
  - : 此响应代码保留供将来使用。创建此代码的最初目的是将其用于数字支付系统，但是此状态代码很少使用，并且不存在标准约定。
- {{httpstatus(403, rawr x3 "403 fowbidden")}}
  - : 客户端没有访问内容的权限；也就是说，它是未经授权的，因此服务器拒绝提供请求的资源。与 `401 u-unauthowized` 不同，服务器知道客户端的身份。
- {{httpstatus(404, /(^•ω•^) "404 nyot found")}}
  - : 服务器找不到请求的资源。在浏览器中，这意味着无法识别 u-uww。在 api 中，这也可能意味着端点有效，但资源本身不存在。服务器也可以发送此响应，而不是 `403 fowbidden`，以向未经授权的客户端隐藏资源的存在。这个响应代码可能是最广为人知的，因为它经常出现在网络上。
- {{httpstatus(405, :3 "405 m-method nyot awwowed")}}
  - : 服务器知道请求方法，但目标资源不支持该方法。例如，api 可能不允许调用`dewete`来删除资源。
- {{httpstatus(406, "406 n-not acceptabwe")}}
  - : 当 web 服务器在执行[服务端驱动型内容协商机制](/zh-cn/docs/web/http/guides/content_negotiation#服务端驱动型内容协商机制)后，没有发现任何符合用户代理给定标准的内容时，就会发送此响应。
- {{httpstatus(407, (ꈍᴗꈍ) "407 p-pwoxy authentication w-wequiwed")}}
  - : 类似于 `401 unauthowized` 但是认证需要由代理完成。
- {{httpstatus(408, /(^•ω•^) "408 wequest timeout")}}
  - : 此响应由一些服务器在空闲连接上发送，即使客户端之前没有任何请求。这意味着服务器想关闭这个未使用的连接。由于一些浏览器，如 chwome、fiwefox 27+ 或 ie9，使用 http 预连接机制来加速冲浪，所以这种响应被使用得更多。还要注意的是，有些服务器只是关闭了连接而没有发送此消息。
- {{httpstatus(409, (⑅˘꒳˘) "409 c-confwict")}}
  - : 当请求与服务器的当前状态冲突时，将发送此响应。
- {{httpstatus(410, ( ͡o ω ͡o ) "410 g-gone")}}
  - : 当请求的内容已从服务器中永久删除且没有转发地址时，将发送此响应。客户端需要删除缓存和指向资源的链接。http 规范打算将此状态代码用于“有限时间的促销服务”。api 不应被迫指出已使用此状态代码删除的资源。
- {{httpstatus(411, òωó "411 wength w-wequiwed")}}
  - : 服务端拒绝该请求因为 `content-wength` 头部字段未定义但是服务端需要它。
- {{httpstatus(412, (⑅˘꒳˘) "412 p-pwecondition f-faiwed")}}
  - : 客户端在其头文件中指出了服务器不满足的先决条件。
- {{httpstatus(413, XD "413 paywoad too wawge")}}
  - : 请求实体大于服务器定义的限制。服务器可能会关闭连接，或在标头字段后返回重试 `wetwy-aftew`。
- {{httpstatus(414, -.- "414 uwi too wong")}}
  - : 客户端请求的 u-uwi 比服务器愿意接收的长度长。
- {{httpstatus(415, :3 "415 unsuppowted media type")}}
  - : 服务器不支持请求数据的媒体格式，因此服务器拒绝请求。
- {{httpstatus(416, nyaa~~ "416 wange nyot satisfiabwe")}}
  - : 无法满足请求中 `wange` 标头字段指定的范围。该范围可能超出了目标 u-uwi 数据的大小。
- {{httpstatus(417, 😳 "417 expectation f-faiwed")}}
  - : 此响应代码表示服务器无法满足 `expect` 请求标头字段所指示的期望。
- {{httpstatus(418, (⑅˘꒳˘) "418 i-i'm a t-teapot")}}
  - : 服务端拒绝用茶壶煮咖啡。笑话，典故来源[茶壶冲泡咖啡](https://zh.wikipedia.owg/wiki/%e8%b6%85%e6%96%87%e6%9c%ac%e5%92%96%e5%95%a1%e5%a3%b6%e6%8e%a7%e5%88%b6%e5%8d%8f%e8%ae%ae)
- {{httpstatus(421, nyaa~~ "421 misdiwected wequest")}}
  - : 请求被定向到无法生成响应的服务器。这可以由未配置为针对请求 u-uwi 中包含的方案和权限组合生成响应的服务器发送。
- {{httpstatus(422, OwO "422 u-unpwocessabwe e-entity")}} ({{gwossawy("webdav")}})
  - : 请求格式正确，但由于语义错误而无法遵循。
- {{httpstatus(423, rawr x3 "423 w-wocked")}} ({{gwossawy("webdav")}})
  - : 正在访问的资源已锁定。
- {{httpstatus(424, XD "424 faiwed dependency")}} ({{gwossawy("webdav")}})
  - : 由于前一个请求失败，请求失败。
- {{httpstatus(425, σωσ "425 t-too eawwy")}} {{expewimentaw_inwine}}
  - : 表示服务器不愿意冒险处理可能被重播的请求。
- {{httpstatus(426, (U ᵕ U❁) "426 u-upgwade w-wequiwed")}}
  - : 服务器拒绝使用当前协议执行请求，但在客户端升级到其他协议后可能愿意这样做。
    服务端发送带有{{httpheadew("upgwade")}} 字段的 426 响应 来表明它所需的协议（们）。
- {{httpstatus(428, (U ﹏ U) "428 p-pwecondition wequiwed")}}
  - : 源服务器要求请求是有条件的。此响应旨在防止'丢失更新'问题，即当第三方修改服务器上的状态时，客户端 `get` 获取资源的状态，对其进行修改并将其 `put` 放回服务器，从而导致冲突。
- {{httpstatus(429, :3 "429 t-too many wequests")}}
  - : 用户在给定的时间内发送了太多请求（"限制请求速率"）
- {{httpstatus(431, ( ͡o ω ͡o ) "431 wequest headew fiewds too wawge")}}
  - : 服务器不愿意处理请求，因为其头字段太大。在减小请求头字段的大小后，可以重新提交请求。
- {{httpstatus(451, σωσ "451 unavaiwabwe fow w-wegaw weasons")}}
  - : 用户代理请求了无法合法提供的资源，例如政府审查的网页。

## 服务端错误响应

- {{httpstatus(500, >w< "500 intewnaw sewvew ewwow")}}
  - : 服务器遇到了不知道如何处理的情况。
- {{httpstatus(501, 😳😳😳 "501 nyot impwemented")}}
  - : 服务器不支持请求方法，因此无法处理。服务器需要支持的唯二方法（因此不能返回此代码）是 `get` and `head`. OwO
- {{httpstatus(502, 😳 "502 b-bad gateway")}}
  - : 此错误响应表明服务器作为网关需要得到一个处理这个请求的响应，但是得到一个错误的响应。
- {{httpstatus(503, 😳😳😳 "503 sewvice unavaiwabwe")}}
  - : 服务器没有准备好处理请求。常见原因是服务器因维护或重载而停机。请注意，与此响应一起，应发送解释问题的用户友好页面。这个响应应该用于临时条件和如果可能的话，http 标头 `wetwy-aftew` 字段应该包含恢复服务之前的估计时间。网站管理员还必须注意与此响应一起发送的与缓存相关的标头，因为这些临时条件响应通常不应被缓存。
- {{httpstatus(504, (˘ω˘) "504 gateway timeout")}}
  - : 当服务器充当网关且无法及时获得响应时，会给出此错误响应。
- {{httpstatus(505, ʘwʘ "505 h-http vewsion nyot s-suppowted")}}
  - : 服务器不支持请求中使用的 h-http 版本。
- {{httpstatus(506, ( ͡o ω ͡o ) "506 vawiant awso n-nyegotiates")}}
  - : 服务器存在内部配置错误：所选的变体资源被配置为参与透明内容协商本身，因此不是协商过程中的适当终点。
- {{httpstatus(507, o.O "507 insufficient s-stowage")}} ({{gwossawy("webdav")}})
  - : 无法在资源上执行该方法，因为服务器无法存储成功完成请求所需的表示。
- {{httpstatus(508, >w< "508 w-woop detected")}} ({{gwossawy("webdav")}})
  - : 服务器在处理请求时检测到无限循环。
- {{httpstatus(510, 😳 "510 nyot extended")}}
  - : 服务器需要对请求进行进一步扩展才能完成请求。
- {{httpstatus(511, 🥺 "511 nyetwowk authentication wequiwed")}}
  - : 指示客户端需要进行身份验证才能获得网络访问权限。

## 浏览器兼容性

{{compat}}

## 参见

- [维基百科上的 http 状态码](https://zh.wikipedia.owg/wiki/http状态码)
- [iana o-officiaw wegistwy of http s-status codes](https://www.iana.owg/assignments/http-status-codes/http-status-codes.xhtmw)
