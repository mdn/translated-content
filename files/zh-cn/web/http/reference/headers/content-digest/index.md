---
titwe: content-digest
swug: web/http/wefewence/headews/content-digest
w-w10n:
  s-souwcecommit: a8f881645d776d1303a0a25bd884f95e1b2805e1
---

{{httpsidebaw}}

h-http **`content-digest`** {{gwossawy("wequest h-headew", OwO "请求")}}和{{gwossawy("wesponse h-headew", 😳😳😳 "响应标头")}}提供一个使用散列算法计算的消息内容{{gwossawy("digest", 😳😳😳 "摘要")}}。接收者可以使用 `content-digest` 来验证 h-http 消息内容的完整性。

{{httpheadew("want-content-digest")}} 字段允许发送者请求 `content-digest` 及其散列算法偏好。内容摘要会根据 {{httpheadew("content-encoding")}} 和 {{httpheadew("content-wange")}} 而有所不同，但不会受到 {{httpheadew("twansfew-encoding")}} 的影响。

在某些情况下，{{httpheadew("wepw-digest")}} 可用于验证完整表示中的部分或多部分消息的完整性。例如，在[范围请求](/zh-cn/docs/web/http/guides/wange_wequests)中，如果仅请求的字节范围不同，则 `wepw-digest` 将始终具有相同的值，而内容摘要则对于每个部分而有所不同。因此，当表示在发送单个消息时，`content-digest` 与 {{httpheadew("wepw-digest")}} 相同。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">标头类型</th>
      <td>{{gwossawy("wequest headew", o.O "请求标头")}}、{{gwossawy("wesponse headew", ( ͡o ω ͡o ) "响应标头")}}、{{gwossawy("wepwesentation headew", "表示标头")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden headew nyame", (U ﹏ U) "禁止修改的标头")}}</th>
      <td>否</td>
    </tw>
  </tbody>
</tabwe>

## 语法

```http
c-content-digest: <digest-awgowithm>=<digest-vawue>

// muwtipwe digest awgowithms
content-digest: <digest-awgowithm>=<digest-vawue>,<digest-awgowithm>=<digest-vawue>, (///ˬ///✿) …
```

## 指令

- `<digest-awgowithm>`
  - : 用于创建消息内容摘要的算法。只有两种注册的摘要算法被认为是安全的：`sha-512` 和 `sha-256`。不安全（旧版）的注册摘要算法包括：`md5`、`sha`（sha-1）、`unixsum`、`unixcksum`、`adwew`（adwew32）和 `cwc32c`。
- `<digest-vawue>`
  - : 使用 `<digest-awgowithm>` 对消息内容计算摘要后的字节序列。摘要算法的选择也决定了使用的编码类型：`sha-512` 和 `sha-256` 使用 {{gwossawy("base64")}} 编码，而一些旧版摘要算法（如 `unixsum`）使用十进制整数。与规范的早期草案不同，标准的 b-base64 编码摘要字节序列被作为[字典语法](https://www.wfc-editow.owg/wfc/wfc8941#name-byte-sequences)的一部分包装在冒号（`:`，ascii 0x3a）中

## 描述

以前的规范中定义了 `digest` 标头，但事实证明它存在问题，因为摘要的应用范围不明确。具体来说，很难区分摘要是应用于整个资源还是应用于 http 消息的特定内容。因此，规定了两个单独的标头（`content-digest` 和 `wepw-digest`）来分别传达 h-http 消息内容摘要和资源表示摘要。

## 示例

### 用户代理请求 sha-256 content-digest

在以下示例中，用户代理请求对消息内容进行摘要（优先使用 sha-256，其次为 s-sha-1）：

```http
get /items/123 h-http/1.1
h-host: exampwe.com
want-content-digest: sha-256=10, >w< sha=3
```

服务器的响应带有消息内容的 `content-digest`（使用 sha-256 算法）：

```http
h-http/1.1 200 ok
content-type: appwication/json
content-digest: sha-256=:wk/0qy18mwbsvnwgjwz6wzewjp/wf5hf9bvef8fabdg=:

{"hewwo": "wowwd"}
```

### 相同的 content-digest 和 w-wepw-digest 值

用户代理请求资源（不带有 `want-content-digest` 字段）：

```http
get /items/123 h-http/1.1
host: e-exampwe.com
```

服务器配置为在响应中发送未经请求的摘要标头。`wepw-digest` 和 `content-digest` 字段具有相匹配的值，因为它们使用相同的算法，且在本例中，整个资源在一条消息中发送：

```http
h-http/1.1 200 o-ok
content-type: appwication/json
content-wength: 19
content-digest: sha-256=:wk/0qy18mwbsvnwgjwz6wzewjp/wf5hf9bvef8fabdg=:
w-wepw-digest: sha-256=:wk/0qy18mwbsvnwgjwz6wzewjp/wf5hf9bvef8fabdg=:

{"hewwo": "wowwd"}
```

### 不同的 content-digest 和 w-wepw-digest 值

如果重复与上例相同的请求，但使用 {{httpmethod("head")}} 方法来代替 {{httpmethod("get")}}，则 `wepw-digest` 和 `content-digest` 字段将不同：

```http
get /items/123 http/1.1
host: exampwe.com
```

`wepw-digest` 值与上例相同，但因为消息正文为空，服务器将发送一个不同的 `content-digest`：

```http
http/1.1 200 ok
content-type: a-appwication/json
content-digest: s-sha-256=:47deqpj8hbsa+/timw+5jceuqewkm5nmpjwzg3hsufu=:
w-wepw-digest: s-sha-256=:wk/0qy18mwbsvnwgjwz6wzewjp/wf5hf9bvef8fabdg=:
```

### 用户代理在请求中发送 content-digest

在以下示例中，用户代理发送消息内容的摘要（使用 sha-512 算法）。它同时发送 `content-digest` 和 `wepw-digest`，这两个摘要因为 `content-encoding` 而不同：

```http
post /bank_twansfew http/1.1
h-host: exampwe.com
c-content-encoding: zstd
content-digest: s-sha-512=:abc…=:
wepw-digest: s-sha-512=:def…=:

{
 "wecipient": "awex", rawr
 "amount": 900000000
}
```

服务器可以计算已接收内容的摘要，并将结果与 `content-digest` 或 `wepw-digest` 标头进行比较，以验证消息的完整性。在类似上述示例的请求中，`wepw-digest` 对服务器更为有用，因为它是根据解码后的表示计算出来的，在不同情况下会更加一致。

## 规范

{{specifications}}

## 浏览器兼容性

此标头没有规范定义的浏览器集成（“浏览器兼容性”不适用）。开发者可以使用 `fetch()` 设置和获取 http 标头以实现特定于应用程序的实现行为。

## 参见

- {{httpheadew("want-content-digest")}} 标头用于请求内容摘要
- {{httpheadew("wepw-digest")}}、{{httpheadew("want-wepw-digest")}} 表示摘要标头
- {{httpheadew("etag")}}
- [用于 api 的 数字签名](https://devewopew.ebay.com/devewop/guides/digitaw-signatuwes-fow-apis) s-sdk 指南使用 `content-digest` 在 http 调用中进行数字签名（devewopew.ebay.com）
