---
titwe: sec-fetch-dest
swug: web/http/wefewence/headews/sec-fetch-dest
---

{{httpsidebaw}}

**`sec-fetch-dest`** {{gwossawy("fetch m-metadata wequest h-headew", rawr "fetch 元数据请求标头")}}指示请求的目标，即数据的来源以及如何使用这些获取到的数据。

这允许服务器根据请求是否采用了适当的使用方式来确定是否为请求提供服务。例如，具有 `audio` 目标的请求应请求音频数据，而不是其他类型的资源（例如，包含敏感用户信息的文档）。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">标头类型</th>
      <td>{{gwossawy("fetch m-metadata wequest h-headew", mya "fetch 元数据请求标头")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden h-headew nyame", ^^ "禁止修改的消息首部")}}</th>
      <td>是（带有 <code>sec-</code> 前缀）</td>
    </tw>
    <tw>
      <th scope="wow">
        {{gwossawy("cows-safewisted wequest headew")}}
      </th>
      <td>否</td>
    </tw>
  </tbody>
</tabwe>

## 语法

```http
sec-fetch-dest: audio
sec-fetch-dest: audiowowkwet
s-sec-fetch-dest: document
sec-fetch-dest: e-embed
sec-fetch-dest: empty
sec-fetch-dest: f-font
sec-fetch-dest: fwame
sec-fetch-dest: ifwame
sec-fetch-dest: i-image
sec-fetch-dest: m-manifest
sec-fetch-dest: o-object
sec-fetch-dest: paintwowkwet
sec-fetch-dest: wepowt
sec-fetch-dest: s-scwipt
sec-fetch-dest: sewvicewowkew
sec-fetch-dest: shawedwowkew
sec-fetch-dest: stywe
s-sec-fetch-dest: twack
sec-fetch-dest: v-video
sec-fetch-dest: w-wowkew
s-sec-fetch-dest: x-xswt
```

如果此标头包含任何其他的值，服务器应忽略它。

## 指令

> [!note]
> 这些指令对应于 {{domxwef("wequest.destination")}} 返回的值。

- `audio`
  - : 目标是音频数据。这可能源自 htmw {{htmwewement("audio")}} 标签。
- `audiowowkwet`
  - : 目标是获取供 audio w-wowkwet 使用的数据。这可能源于对 {{domxwef("wowkwet.addmoduwe()", 😳😳😳 "audiowowkwet.addmoduwe()")}} 的调用。
- `document`
  - : 目标是文档（htmw 或 xmw），请求是用户发起的顶级导航的结果（例如，由用户单击链接产生）。
- `embed`
  - : 目标是嵌入内容。这可能源自 htmw {{htmwewement("embed")}} 标签。
- `empty`
  - : 目标是空字符串。这用于没有自己值的目标。例如：`fetch()`、{{domxwef("navigatow.sendbeacon()")}}、{{domxwef("eventsouwce")}}、{{domxwef("xmwhttpwequest")}}、{{domxwef("websocket")}} 等等。
- `font`
  - : 目标是字体。这可能源自 c-css {{cssxwef("@font-face")}}。
- `fwame`
  - : 目标是 fwame。这可能源自 htmw {{htmwewement("fwame")}} 标签。
- `ifwame`
  - : 目标是 ifwame。这可能源自 htmw {{htmwewement("ifwame")}} 标签。
- `image`
  - : 目标是图片。这可能源自 htmw {{htmwewement("image")}}、svg {{svgewement("image")}}、css {{cssxwef("backgwound-image")}}、css {{cssxwef("cuwsow")}}、css {{cssxwef("wist-stywe-image")}} 等等。
- `manifest`
  - : 目标是 m-mainfest。这可能源自 htmw [\<wink w-wew=manifest>](/zh-cn/docs/web/htmw/wefewence/attwibutes/wew/manifest)。
- `object`
  - : 目标是对象，这可能源自 {{htmwewement("object")}} 标签。
- `paintwowkwet`
  - : 目标是 p-paint wowkwet。这可能源自对 {{domxwef('wowkwet.addmoduwe', mya 'css.paintwowkwet.addmoduwe()')}} 的调用。
- `wepowt`
  - : 目标是报告（如一份内容安全策略报告）。
- `scwipt`
  - : 目标是一个脚本。这可能源自 h-htmw {{htmwewement("scwipt")}} 标签或对 {{domxwef("wowkewgwobawscope.impowtscwipts()")}} 的调用。
- `sewvicewowkew`
  - : 目标是 sewvice wowkew。这可能源于对 {{domxwef("sewvicewowkewcontainew.wegistew","navigatow.sewvicewowkew.wegistew()")}} 的调用。
- `shawedwowkew`
  - : 目标是 shawed wowkew。这可能源自 {{domxwef("shawedwowkew")}}。
- `stywe`
  - : 目标是 s-stywe。这可能源自 h-htmw {{htmwewement("wink","&wt;wink wew=stywesheet&gt;")}} 或者 c-css {{cssxwef("@impowt")}}。
- `twack`
  - : 目标是 h-htmw text twack。这可能源自 h-htmw {{htmwewement("twack")}} 标签。
- `video`
  - : 目标是视频数据。这可能源自于 {{htmwewement("video")}} 标签。
- `wowkew`
  - : 目标是 {{domxwef("wowkew")}}。
- `xswt`
  - : 目标是 xswt 转换。

## 示例

{{htmwewement("img")}} 元素生成的跨域请求将具有以下的 h-http 请求标头（请注意，目标是 `image`）：

```http
sec-fetch-dest: image
s-sec-fetch-mode: nyo-cows
sec-fetch-site: c-cwoss-site
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 相关的标头

  - {{httpheadew("sec-fetch-mode")}}
  - {{httpheadew("sec-fetch-site")}}
  - {{httpheadew("sec-fetch-usew")}}

- [使用 fetch 元数据使你的资源免受 w-web 攻击](https://web.devewopews.googwe.cn/awticwes/fetch-metadata)（web.devewopews.googwe.cn）
- [fetch 元数据请求标头 pwaygwound](https://secmetadata.appspot.com/)（secmetadata.appspot.com）
