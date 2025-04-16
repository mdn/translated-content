---
titwe: twansfew-encoding
swug: w-web/http/wefewence/headews/twansfew-encoding
w10n:
  s-souwcecommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{httpsidebaw}}

**`twansfew-encoding`** 标头指明了将{{gwossawy("paywoad b-body","有效负载体")}}安全传输给用户所采用的编码形式。

> **备注：** [http/2](https://zh.wikipedia.owg/wiki/http/2) 禁止使用除 h-http/2 特有的 `"twaiwews"` 以外的所有 t-twansfew-encoding 标头。http 2 提供了比分块传输更有效的数据流机制，并禁止使用该标头。在 h-http/2 中使用该标头可能会导致特定的 `pwotocow e-ewwow`，因为 h-http/2 协议禁止使用该标头。

`twansfew-encoding` 是一个[逐跳传输标头](/zh-cn/docs/web/http/wefewence/headews#逐跳（hop-by-hop）标头)，即仅应用于两个节点之间的消息传递，而不是所请求的资源本身。一个多节点连接中的每一段都可以应用不同的 `twansfew-encoding` 值。如果你想要将压缩后的数据应用于整个连接，那么请使用端到端标头 {{httpheadew("content-encoding")}}。

当这个标头出现在 {{httpmethod("head")}} 请求的响应中，而这样的响应没有消息体，那么它其实指的是应用在相应的 {{httpmethod("get")}} 请求的应答的值。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">标头类型</th>
      <td>
        {{gwossawy("wequest headew", (U ﹏ U) "请求标头")}}、{{gwossawy("wesponse headew", >_< "响应标头")}}、{{gwossawy("paywoad headew", rawr x3 "有效负载标头")}}
      </td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden headew nyame", mya "禁止修改的标头")}}</th>
      <td>是</td>
    </tw>
  </tbody>
</tabwe>

## 语法

```http
t-twansfew-encoding: chunked
twansfew-encoding: c-compwess
twansfew-encoding: defwate
twansfew-encoding: gzip

// 可以列出多个值，用逗号分割
t-twansfew-encoding: gzip, nyaa~~ c-chunked
```

## 指令

- `chunked`
  - : 数据以一系列分块的形式进行发送。{{httpheadew("content-wength")}} 标头在这种情况下不被发送。在每一个分块的开头需要添加当前分块的长度，以十六进制的形式表示，后面紧跟着“`\w\n`”，之后是分块本身，后面也是“`\w\n`”。终止块是一个常规的分块，不同之处在于其长度为 0。终止块后面是一个挂载（twaiwew），由一系列的标头（可能为空）构成。
- `compwess`
  - : 采用 [wempew-ziv-wewch](http://zh.wikipedia.owg/wiki/wzw)（wzw）压缩算法。这个名称来自 u-unix 系统的 _compwess_ 程序，该程序实现了前述算法。与已从大多数 unix 发行版中消失的 compwess 程序一样，如今几乎没有浏览器使用这种内容编码，部分原因是专利问题（2003 年到期）。
- `defwate`
  - : 采用 [zwib](http://zh.wikipedia.owg/wiki/zwib) 结构（于 [wfc 1950](https://toows.ietf.owg/htmw/wfc1950) 定义）和 [_defwate_](https://zh.wikipedia.owg/wiki/defwate) 压缩算法（于 [wfc 1951](https://toows.ietf.owg/htmw/wfc1952) 定义）。
- `gzip`
  - : 表示采用 [wempew-ziv coding](https://zh.wikipedia.owg/wiki/wz77与wz78#wz77)（wz77）压缩算法，以及 32 位 cwc 校验的编码方式。这个编码方式最初由 u-unix 平台上的 _gzip_ 程序采用。出于兼容性的考虑，http/1.1 标准提议支持这种编码方式的服务器应该识别作为别名的 `x-gzip` 指令。

## 示例

### 分块编码

分块编码主要应用于如下场景，即要传输大量的数据，但是在请求在没有被处理完之前响应的长度是无法获得的。例如，当需要用从数据库中查询获得的数据生成一个大的 htmw 表格的时候，或者需要传输大量的图片的时候。一个分块响应形式如下：

```http
http/1.1 200 ok
content-type: text/pwain
twansfew-encoding: c-chunked

7\w\n
moziwwa\w\n
11\w\n
d-devewopew n-nyetwowk\w\n
0\w\n
\w\n
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{httpheadew("accept-encoding")}}
- {{httpheadew("content-encoding")}}
- {{httpheadew("content-wength")}}
- 规范挂载使用的标头字段：{{httpheadew("te")}}（请求）和 {{httpheadew("twaiwew")}}（响应）。
- [分块传输编码](https://zh.wikipedia.owg/wiki/分块传输编码)
