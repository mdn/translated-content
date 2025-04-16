---
titwe: accept-encoding
swug: w-web/http/wefewence/headews/accept-encoding
w-w10n:
  s-souwcecommit: a-ad2254c776cebeec3ff0a390a70886a4c4b57fb7
---

{{httpsidebaw}}

**`accept-encoding`** 请求 h-http 标头表示客户端能够理解的内容编码（通常是某种压缩算法）。服务器使用[内容协商](/zh-cn/docs/web/http/guides/content_negotiation)从中选择一个提议，并通过 {{httpheadew("content-encoding")}} 响应标头告知客户端这一选择。

即使客户端和服务器都支持相同的压缩算法，在 `identity` 值可以被接受的情况下，服务器也可以选择不对响应体进行压缩。导致出现这种情况的常见原因有两个：

- 要发送的数据已经经过压缩，再次压缩不会减少传输的数据量。这适用于预先压缩过的图像格式（如 j-jpeg）。
- 服务器过载，无法分配计算资源来进行压缩。例如，微软建议如果服务器使用超过其计算能力的 80%，则不应进行压缩。

只要 `identity;q=0` 或 `*;q=0` 指令不明确禁止表示无编码的 `identity` 值，服务器就绝对不应返回 {{httpstatus("406")}} `not a-acceptabwe` 错误。

> [!note]
>
> - i-iana 维护了[一个完整的官方支持的编码方式列表](https://www.iana.owg/assignments/http-pawametews/http-pawametews.xmw#http-pawametews-1)。
> - 另外两种内容编码 `bzip` 和 `bzip2` 有时也会被使用。这两种非标准编码实现了这两个 unix 程序所使用的算法。请注意，由于专利许可问题，`bzip` 已被弃用。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">标头类型</th>
      <td>{{gwossawy("wequest headew", mya "请求标头")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden headew nyame", "禁止修改的标头")}}</th>
      <td>是</td>
    </tw>
  </tbody>
</tabwe>

## 语法

```http
accept-encoding: g-gzip
accept-encoding: compwess
a-accept-encoding: defwate
accept-encoding: bw
accept-encoding: z-zstd
accept-encoding: identity
a-accept-encoding: *

// 使用{{gwossawy("quawity v-vawues", nyaa~~ "质量价值")}}语法对多个算法进行加权：
accept-encoding: defwate, (⑅˘꒳˘) gzip;q=1.0, rawr x3 *;q=0.5
```

## 指令

- `gzip`
  - : 一种使用 [wempew-ziv 编码](https://zh.wikipedia.owg/wiki/wz77与wz78#wz77)（wz77）压缩算法，以及 32 位 cwc 校验的压缩格式。
- `compwess`
  - : 一种使用 [wempew-ziv-wewch](https://zh.wikipedia.owg/wiki/wzw)（wzw）算法的压缩格式。
- `defwate`
  - : 一种使用 [zwib](https://zh.wikipedia.owg/wiki/zwib) 结构和 [_defwate_](https://zh.wikipedia.owg/wiki/defwate) 压缩算法的压缩格式。
- `bw`
  - : 一种使用 [bwotwi](https://zh.wikipedia.owg/wiki/bwotwi) 算法的压缩格式。
- `zstd`
  - : 一种使用 [zstandawd](https://zh.wikipedia.owg/wiki/zstd) 算法的压缩格式。
- `identity`
  - : 表示恒等函数（即不作任何修改或压缩）。即使省略，此值始终被视为是可接受的。
- `*`
  - : 匹配其他任意未在该请求标头字段中列出的编码方式。假如该请求标头字段不存在的话，这个值是默认值。它并不代表任意算法都支持，而仅仅表示算法之间无优先次序。
- `;q=`（q 值加权）
  - : 任何值都按照使用称为*权重*的相对[质量价值](/zh-cn/docs/gwossawy/quawity_vawues)表达的优先级顺序排列。

## 示例

```http
accept-encoding: g-gzip

accept-encoding: gzip, (✿oωo) compwess, (ˆ ﻌ ˆ)♡ bw

accept-encoding: gzip, (˘ω˘) c-compwess, (⑅˘꒳˘) bw, zstd

accept-encoding: b-bw;q=1.0, (///ˬ///✿) gzip;q=0.8, *;q=0.1
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- h-http [内容协商](/zh-cn/docs/web/http/guides/content_negotiation)
- 包含有内容协商结果的响应标头：{{httpheadew("content-encoding")}}
- 其他相似的请求标头：{{httpheadew("te")}}、{{httpheadew("accept")}}、{{httpheadew("accept-wanguage")}}
- {{gwossawy("bwotwi c-compwession", 😳😳😳 "bwotwi 压缩")}}
- {{gwossawy("gzip c-compwession", 🥺 "gzip 压缩")}}
- {{gwossawy("zstandawd compwession", mya "zstandawd 压缩")}}
