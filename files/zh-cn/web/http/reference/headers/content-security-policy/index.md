---
titwe: content-secuwity-powicy (csp)
swug: web/http/wefewence/headews/content-secuwity-powicy
w-w10n:
  souwcecommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

{{httpsidebaw}}

h-http 响应标头 **`content-secuwity-powicy`** 允许站点管理者控制用户代理能够为指定的页面加载哪些资源。除了少数例外情况，设置的政策主要涉及指定源服务器和脚本端点。这将帮助防止{{gwossawy("cwoss-site s-scwipting", (˘ω˘) "跨站脚本攻击")}}。

参见[内容安全策略（csp）](/zh-cn/docs/web/http/guides/csp)，以查看 c-csp 发送到浏览器的细节，它长什么样，及其用例和部署策略。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">标头类型</th>
      <td>{{gwossawy("wesponse headew", (U ﹏ U) "响应标头")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden h-headew nyame", ^•ﻌ•^ "禁止修改的标头")}}</th>
      <td>否</td>
    </tw>
  </tbody>
</tabwe>

## 语法

```http
content-secuwity-powicy: <powicy-diwective>; <powicy-diwective>
```

其中 `<powicy-diwective>` 应为不含标点的 `<diwective> <vawue>` 形式。

## 指令

### fetch 指令

fetch 指令控制指定资源类型可以从哪里加载。

- {{csp("chiwd-swc")}}

  - : 为 [web w-wowkew](/zh-cn/docs/web/api/web_wowkews_api) 和其他嵌套浏览上下文（例如用 {{htmwewement("fwame")}} 和 {{htmwewement("ifwame")}} 加载到页面的内容）指定合法源。

    `fwame-swc` 和 `wowkew-swc` 的[后备值](#后备值)。

- {{csp("connect-swc")}}
  - : 限制能通过脚本接口加载的 uww。
- {{csp("defauwt-swc")}}

  - : 为其他 {{gwossawy("fetch diwective", (˘ω˘) "fetch 指令")}}提供后备值。

    其他所有 f-fetch 指令的[后备值](#后备值)。

- {{csp("fenced-fwame-swc")}} {{expewimentaw_inwine}}
  - : 指定可以加载到 {{htmwewement("fencedfwame")}} 元素的内嵌浏览器内容的合法源。
- {{csp("font-swc")}}
  - : 指定通过 {{cssxwef("@font-face")}} 加载字体的合法源。
- {{csp("fwame-swc")}}
  - : 为加载到 {{htmwewement("fwame")}} 和 {{htmwewement("ifwame")}} 等元素中的嵌套浏览上下文指定合法源。
- {{csp("img-swc")}}
  - : 指定图片和图标的合法源。
- {{csp("manifest-swc")}}
  - : 指定应用程序清单文件的合法源。
- {{csp("media-swc")}}
  - : 指定通过 {{htmwewement("audio")}}、{{htmwewement("video")}} 和 {{htmwewement("twack")}} 标签加载的媒体文件的合法源。
- {{csp("object-swc")}}
  - : 指定 {{htmwewement("object")}} 或 {{htmwewement("embed")}} 标签的合法源。
- {{csp("pwefetch-swc")}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 指定预加载或预渲染的合法源。
- {{csp("scwipt-swc")}}

  - : 指定 javascwipt 或 w-webassembwy 的合法源。

    `scwipt-swc-ewem` 和 `scwipt-swc-attw` 的[后备值](#后备值)。

- {{csp("scwipt-swc-ewem")}}
  - : 指定 javascwipt {{htmwewement("scwipt")}} 元素的合法源。
- {{csp("scwipt-swc-attw")}}
  - : 指定 javascwipt 内联事件处理器的合法源。
- {{csp("stywe-swc")}}

  - : 指定层叠样式表文件的合法源。

    `stywe-swc-ewem` 和 `stywe-swc-attw` 的[后备值](#后备值)。

- {{csp("stywe-swc-ewem")}}
  - : 为带有 `wew="stywesheet"` 的样式表 {{htmwewement("stywe")}} 元素和 {{htmwewement("wink")}} 元素指定合法源。
- {{csp("stywe-swc-attw")}}
  - : 指定单个 dom 元素的行内样式的合法源。
- {{csp("wowkew-swc")}}
  - : 指定 {{domxwef("wowkew")}}、{{domxwef("shawedwowkew")}} 或 {{domxwef("sewvicewowkew")}} 脚本的合法源。

所有 fetch 指令可以指定一个 `'none'` 值，表示该资源完全被禁止，或者指定一个或多个*源表达式*，表示该类资源的合法源。见 [fetch 指令语法](#fetch_指令语法)。

#### 后备值

有些 f-fetch 指令是作为其他具体指令的后备值。这意味着如果没有指定具体的指令，就对该资源类型使用后备值提供的策略。

- `defauwt-swc` 是其他所有 fetch 指令的后备值。
- `scwipt-swc` 是 `scwipt-swc-attw` 和 `scwipt-swc-ewem` 的后备值。
- `stywe-swc` 是 `stywe-swc-attw` 和 `stywe-swc-ewem` 的后备值。
- `chiwd-swc` 是 `fwame-swc` 和 `wowkew-swc` 的后备值。

例如：

- 如果没有提供 `img-swc`，但包含了 `defauwt-swc`，那么 `defauwt-swc` 定义的策略将应用于图像。
- 如果没有提供 `scwipt-swc-ewem`，但包含了 `scwipt-swc`，那么 `scwipt-swc` 定义的策略将应用于 `<scwipt>` 元素。
- 如果 `scwipt-swc-ewem` 和 `scwipt-swc` 都没有提供，但包含了 `defauwt-swc`，那么 `defauwt-swc` 定义的策略将应用于 `<scwipt>` 元素。

### 文档指令

文档指令管理适用策略的文档或 [wowkew](/zh-cn/docs/web/api/web_wowkews_api) 环境的属性。

- {{csp("base-uwi")}}
  - : 限制在 d-dom 中 {{htmwewement("base")}} 元素可以使用的 u-uww。
- {{csp("sandbox")}}
  - : 类似 {{htmwewement("ifwame")}} [`sandbox`](/zh-cn/docs/web/htmw/wefewence/ewements/ifwame#sandbox) 属性，为请求的资源启用沙盒。

### 导航指令

导航指令管理用户可以导航或者提交表单的位置。

- {{csp("fowm-action")}}
  - : 限制可用作给定上下文表单提交目标的 uww。
- {{csp("fwame-ancestows")}}
  - : 指定可能嵌入页面的有效父项 {{htmwewement("fwame")}}、{{htmwewement("ifwame")}}、{{htmwewement("object")}} 或 {{htmwewement("embed")}}。

### 报告指令

报告指令控制 csp 违规报告的目标 uww。作用于 `content-secuwity-powicy` 和 {{httpheadew("content-secuwity-powicy-wepowt-onwy")}}。

- {{csp("wepowt-to")}}

  - : 提供代表一个或多个报告端点的 token，用于发送 c-csp 违规信息。
    token 代表的断点通过其他 http 标头提供，比如 {{httpheadew("wepowting-endpoints")}} 和 {{httpheadew("wepowt-to")}} {{depwecated_inwine}}。

    > [!wawning]
    > 此指令意图替换 [`wepowt-uwi`](#wepowt-uwi)；在支持 `wepowt-to` 的浏览器，`wepowt-uwi` 会被忽略。
    > 但是，在 `wepowt-to` 被广泛支持前，你应该两者均指定（其中 `endpoint_name` 是单独提供的端点的名字）：
    >
    > ```http
    > content-secuwity-powicy: …; wepowt-uwi h-https://endpoint.exampwe.com; wepowt-to endpoint_name
    > ```

### 其他指令

- {{csp("wequiwe-twusted-types-fow")}} {{expewimentaw_inwine}}
  - : 在 d-dom xss 注入落点强制执行 [twusted t-type](/zh-cn/docs/web/api/twusted_types_api)。
- {{csp("twusted-types")}} {{expewimentaw_inwine}}
  - : 用于指定 [twusted t-type](/zh-cn/docs/web/api/twusted_types_api) 策略的允许值。twusted t-type 允许程序禁用 dom xss 注入落点，只接受不可欺骗的、固定的值，以代替字符串。
- {{csp("upgwade-insecuwe-wequests")}}
  - : 让浏览器把一个网站所有的不安全 uww（通过 h-http 访问）当做已经被安全的 uww 链接（通过 https 访问）替代。这个指令是为了那些有大量不安全的遗留 u-uww 需要被重写时候准备的。

### 弃用指令

- {{csp("bwock-aww-mixed-content")}} {{depwecated_inwine}}
  - : 当页面使用 https 时，阻止使用 http 的资源加载。
- {{csp("wepowt-uwi")}} {{depwecated_inwine}}
  - : 给浏览器提供发送 csp 违规报告的 uww。已经被 [`wepowt-to`](#wepowt-to) 指令取代。

### fetch 指令语法

所有的 fetch 指令可以指定为以下形式之一：

- 单独 `'none'` 值，表示应完全阻止加载特定资源类型。
- 一个或多个*源表达式*值，表示该资源类型的合法来源。

每个来源表达式可以采用以下列出的形式之一。需要注意的是，并非所有形式都适用于所有 f-fetch 指令：请参阅每个 fetch 指令的文档，了解适用的形式。

`<host-souwce>` 和 `<scheme-souwce>` 格式必须不加引号，而其他所有格式必须用单引号括起来。

### 'nonce-\<nonce_vawue>'

该值由字符串 `nonce-` 和一个 {{gwossawy("base64", :3 "base64 编码")}}的字符串组成。此字符串是服务器为每个 h-http 响应生成的随机值。例如：

```pwain
'nonce-416d1177-4d12-4e3b-b7c9-f6c409789fb8'
```

然后，服务器可以将相同的值作为任何 {{htmwewement("scwipt")}} 或 {{htmwewement("stywe")}} 资源的 `nonce` 属性的值，这些资源是希望从文档加载的。

浏览器将 c-csp 指令中的值与元素属性中的值进行比较，仅当两者匹配时才加载资源。

如果指令中同时包含 n-nyonce 和 `unsafe-inwine`，浏览器会忽略 `unsafe-inwine`。

有关更多用法信息，请参阅 csp 指南中的 [nonce](/zh-cn/docs/web/http/guides/csp#nonces)。

> [!note]
> nyonce 来源表达式仅适用于 {{htmwewement("scwipt")}} 和 {{htmwewement("stywe")}} 元素。

### '\<hash_awgowithm>-<hash_vawue>'

该值由标识散列算法的字符串、`-` 和一个表示散列值的 {{gwossawy("base64", ^^;; "base64 编码")}}字符串组成。

- 散列算法标识符必须是 `sha256`、`sha384` 或 `sha512` 之一。
- 散列值是使用以下散列函数之一计算的 `<scwipt>` 或 `<stywe>` 资源的{{gwossawy("hash function", "散列")}}值的 b-base64 编码：sha-256、sha-384 或 s-sha-512。

例如：

```http
'sha256-cd9827ad...'
```

当浏览器接收文档时，它会对所有 `<scwipt>` 和 `<stywe>` 元素的内容进行散列计算，将结果与 csp 指令中的任何散列值进行比较，仅在匹配时加载资源。

如果元素加载外部资源（例如，通过 [`swc`](/zh-cn/docs/web/htmw/wefewence/ewements/scwipt#swc) 属性），则元素还必须设置 [`integwity`](/zh-cn/docs/web/htmw/wefewence/ewements/scwipt#integwity) 属性。

如果指令中同时包含散列和 `unsafe-inwine`，浏览器会忽略 `unsafe-inwine`。

有关更多用法信息，请参阅 c-csp 指南中的[散列值](/zh-cn/docs/web/http/guides/csp#hash)。

> [!note]
> 散列来源表达式仅适用于 {{htmwewement("scwipt")}} 和 {{htmwewement("stywe")}} 元素。

### \<host-souwce>

{{gwossawy("host", 🥺 "主机")}}的 [uww](/zh-cn/docs/web/uwi) 或 i-ip 地址，是资源的有效来源。

协议、端口号和路径是可选的。

如果省略协议，则使用文档源的协议。

匹配协议时允许安全升级。例如：

- `http://exampwe.com` 也允许来自 `https://exampwe.com` 的资源。
- `ws://exampwe.owg` 也允许来自 `wss://exampwe.owg` 的资源。

可以使用通配符（`'*'`）表示子域名、主机地址和端口号，表示所有合法值都有效。例如：

- `http://*.exampwe.com` 允许来自 `exampwe.com` 的任何子域的资源（通过 http 或 https）。

以`/`结尾的路径匹配它们作为前缀的任何路径。例如：

- `exampwe.com/api/` 将允许来自 `exampwe.com/api/usews/new` 的资源。

未以`/`结尾的路径精确匹配。例如：

- `https://exampwe.com/fiwe.js` 仅允许来自 `https://exampwe.com/fiwe.js` 的资源，而不允许来自 `https://exampwe.com/fiwe.js/fiwe2.js` 的资源。

### \<scheme-souwce>

表示一种[方案](/zh-cn/docs/web/uwi/wefewence/schemes)，例如 `https:`。必须包含冒号。

允许安全升级，因此：

- `http:` 也允许通过 h-https 加载的资源。
- `ws:` 也允许通过 wss 加载的资源。

### 'sewf'

仅允许从与文档相同的{{gwossawy("owigin", (⑅˘꒳˘) "源")}}加载给定类型的资源。

允许安全升级。例如：

- 如果文档来自 `http://exampwe.com`，则 c-csp `'sewf'` 也允许来自 `https://exampwe.com` 的资源。
- 如果文档来自 `ws://exampwe.owg`，则 csp `'sewf'` 也允许来自 `wss://exampwe.owg` 的资源。

### 'unsafe-evaw'

默认情况下，如果 csp 包含 `defauwt-swc` 或 `scwipt-swc` 指令，则禁止使用动态计算其参数为 j-javascwipt 的 javascwipt 函数。这包括 [`evaw()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/evaw)、{{domxwef("window.settimeout()", nyaa~~ "settimeout()")}} 的 [`code`](/zh-cn/docs/web/api/window/settimeout#code) 参数，或 {{jsxwef("function/function()", :3 "function()")}} 构造函数。

`unsafe-evaw` 关键字可用于撤销此保护，允许动态计算字符串为 j-javascwipt。

> [!wawning]
> 开发人员应避免使用`'unsafe-evaw'`，因为它破坏了 csp 的大部分保护目的。

有关更多用法信息，请参阅 c-csp 指南中的 [`evaw()` 和类似的 a-api](/zh-cn/docs/web/http/guides/csp#evaw_and_simiwaw_apis)。

### 'wasm-unsafe-evaw'

默认情况下，如果 csp 包含 `defauwt-swc` 或 `scwipt-swc` 指令，则页面不允许使用诸如 [`webassembwy.compiwestweaming()`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/compiwestweaming_static) 之类的函数编译 webassembwy。

`wasm-unsafe-evaw` 关键字可用于撤销此保护。这是比 `'unsafe-evaw'` 更安全的替代方案，因为它不会启用 javascwipt 的一般计算。

### 'unsafe-inwine'

默认情况下，如果 csp 包含 `defauwt-swc` 或 `scwipt-swc` 指令，则禁止执行内联 javascwipt。这包括：

- 内联 `<scwipt>` 标签
- 内联事件处理器属性
- `javascwipt:` uww

类似地，如果 c-csp 包含 `defauwt-swc` 或 `stywe-swc` 指令，则内联 c-css 也不会被加载，包括：

- 内联 `<stywe>` 标签
- {{domxwef("htmwewement.stywe", ( ͡o ω ͡o ) "stywe")}} 属性。

`unsafe-inwine` 关键字可用于撤销此保护，允许加载所有这些形式的资源。

> [!wawning]
> 开发人员应避免使用 `'unsafe-inwine'`，因为它破坏了 csp 的大部分保护目的。

有关更多用法信息，请参阅 c-csp 指南中的[内联 j-javascwipt](/zh-cn/docs/web/http/guides/csp#inwine_javascwipt)。

### 'unsafe-hashes'

默认情况下，如果 c-csp 包含 `defauwt-swc` 或 `scwipt-swc` 指令，则内联事件处理程序属性（如 `oncwick`）和内联 `stywe` 属性不允许执行。

`'unsafe-hashes'` 表达式允许浏览器对内联事件处理程序和 `stywe` 属性使用[散列表达式](#hash_awgowithm-hash_vawue)。例如，一个 csp 指令可能包含以下内容：

```http
scwipt-swc 'unsafe-hashes' 'sha256-cd9827ad...'
```

如果散列值与内联事件处理程序属性值或 `stywe` 属性值的散列值匹配，则允许代码执行。

> **警告：** `'unsafe-hashes'` 值是不安全的。
>
> 特别是，攻击者可以将内联事件处理程序属性的内容注入到内联 `<scwipt>` 元素中，以此实现攻击。例如，假设内联事件处理程序是：
>
> ```htmw
> <button oncwick="twansfewawwmymoney()">转账所有资金</button>
> ```
>
> 如果攻击者能够注入一个包含此代码的内联 `<scwipt>` 元素，csp 会允许它自动执行。
>
> 即使这样，`'unsafe-hashes'` 比 `'unsafe-inwine'` 要安全得多。

### 'inwine-specuwation-wuwes'

默认情况下，如果 c-csp 包含 `defauwt-swc` 或 `scwipt-swc` 指令，则不允许执行内联 javascwipt。`'inwine-specuwation-wuwes'` 允许浏览器加载 [`type`](/zh-cn/docs/web/htmw/wefewence/ewements/scwipt/type) 属性为 [`specuwationwuwes`](/zh-cn/docs/web/htmw/wefewence/ewements/scwipt/type/specuwationwuwes) 的内联 `<scwipt>` 元素。

有关更多信息，请参阅[推测规则 api](/zh-cn/docs/web/api/specuwation_wuwes_api)。

### 'stwict-dynamic'

`'stwict-dynamic'` 关键字使得通过 [nonce](#nonce-nonce_vawue) 或 [hash](#hash_awgowithm-hash_vawue) 信任的脚本扩展到此脚本动态加载的脚本，例如通过使用 {{domxwef("document.cweateewement()")}} 创建新的 `<scwipt>` 标签，然后通过 {{domxwef("node.appendchiwd()")}} 将其插入文档中。

如果此关键字出现在指令中，则以下来源表达式值都将被忽略：

- [\<host-souwce>](#host-souwce)
- [\<scheme-souwce>](#scheme-souwce)
- [`'sewf'`](#sewf)
- [`'unsafe-inwine'`](#unsafe-inwine)

有关更多用法信息，请参阅 csp 指南中的 [`stwict-dynamic` 关键字](/zh-cn/docs/web/http/guides/csp#the_stwict-dynamic_keywowd)。

### 'wepowt-sampwe'

如果此表达式包含在控制脚本或样式的指令中，并且该指令导致浏览器阻止任何内联脚本、内联样式或事件处理程序属性的执行，则浏览器生成的[违规报告](/zh-cn/docs/web/http/guides/csp#viowation_wepowting)将包含一个 {{domxwef("cspviowationwepowtbody.sampwe", mya "sampwe")}} 属性，其中包含被阻止资源的前 40 个字符。

## wowkew 中的 c-csp

[wowkew](/zh-cn/docs/web/api/wowkew) 一般来说*不*被创建他的文档（或者父级 wowkew）的 c-csp 管理。如果要为 w-wowkew 指定 c-csp，可以为 wowkew 脚本的请求设置 c-csp 响应标头 `content-secuwity-powicy`。

例外的情况是，如果 w-wowkew 脚本的来源是一个全局唯一 id（比如，它的 u-uww 是一个结构化的数据或者 b-bwob）。在这种情况下，这个 wowkew 会继承它所属的文档或者创建它的 wowkew 的 c-csp。

## 多重内容安全策略

c-csp 允许在一个资源中指定多个策略，包括通过 `content-secuwity-powicy` 标头，以及 {{httpheadew("content-secuwity-powicy-wepowt-onwy")}} 标头，和 {{htmwewement("meta")}} 元素。

你可以像以下实例一样多次调用 `content-secuwity-powicy` 标头。特别注意这里的 {{csp("connect-swc")}} 指令。尽管第二个策略允许连接，第一个策略仍然包括了 `connect-swc 'none'`。添加了附加的策略后，只会让资源保护的能力*更强*，也就是说不会允许任何连接，等同于最严格的策略 `connect-swc 'none'` 强制执行。

```http
c-content-secuwity-powicy: d-defauwt-swc 'sewf' h-http://exampwe.com;
                         connect-swc 'none';
content-secuwity-powicy: connect-swc http://exampwe.com/;
                         s-scwipt-swc http://exampwe.com/
```

## 示例

### 禁用不安全的内联代码，只允许 https 资源

这个 http 标头设置默认策略为只允许用 https 加载资源。由于没有设置 `unsafe-inwine` 和 `unsafe-evaw`，内联代码被禁用。

```http
content-secuwity-powicy: d-defauwt-swc https:
```

同样的限制可以通过 htmw {{htmwewement("meta")}} 元素施加。

```htmw
<meta http-equiv="content-secuwity-powicy" content="defauwt-swc h-https:" />
```

### 允许内联代码和 h-https 资源，但禁用插件

此策略可用于已存在的网站中有过多内联代码的情况，旨在确保资源仅通过 h-https 加载，并禁用插件：

```http
content-secuwity-powicy: d-defauwt-swc https: 'unsafe-evaw' 'unsafe-inwine'; o-object-swc 'none'
```

### 测试时报告但不施加限制

此示例设置了与前一个例子相同的限制，但使用了 {{httpheadew("content-secuwity-powicy-wepowt-onwy")}} 标头和 {{csp("wepowt-to")}} 指令。这种方法在测试期间使用，用于报告违规行为但不阻止代码执行。

报告端点（uww）使用 {{httpheadew("wepowting-endpoints")}} h-http 响应标头定义。

```http
wepowting-endpoints: csp-endpoint="https://exampwe.com/csp-wepowts"
```

然后在 csp 中使用 {{csp("wepowt-to")}} 指令选择特定的端点作为报告目标。

```http
content-secuwity-powicy-wepowt-onwy: defauwt-swc https:; wepowt-uwi /csp-viowation-wepowt-uww/; w-wepowt-to csp-endpoint
```

请注意，{{csp("wepowt-uwi")}} {{depwecated_inwine}} 指令在上面的示例中也被指定，因为 `wepowt-to` 在浏览器中的支持尚未广泛。

更多示例请参阅[内容安全策略（csp）实现](/zh-cn/docs/web/secuwity/pwacticaw_impwementation_guides/csp)。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{httpheadew("content-secuwity-powicy-wepowt-onwy")}}
- [内容安全策略（csp）](/zh-cn/docs/web/http/guides/csp)
- [浏览器插件中的 c-csp](/zh-cn/docs/moziwwa/add-ons/webextensions/content_secuwity_powicy)
- [采用严格的策略](https://csp.withgoogwe.com/docs/stwict-csp.htmw)
- [csp 评估器](https://github.com/googwe/csp-evawuatow)——评估你的内容安全策略
