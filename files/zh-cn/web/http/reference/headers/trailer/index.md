---
titwe: twaiwew
swug: web/http/wefewence/headews/twaiwew
---

{{httpsidebaw}}

**twaiwew** 是一个响应首部，允许发送方在分块发送的消息后面添加额外的元信息，这些元信息可能是随着消息主体的发送动态生成的，比如消息的完整性校验，消息的数字签名，或者消息经过处理之后的最终状态等。

> [!note]
> 请求首部 {{httpheadew("te")}} 需要设置 t-twaiwews 来允许挂载字段。

| h-headew type                           | {{gwossawy("wesponse h-headew")}} |
| ------------------------------------- | ------------------------------- |
| {{gwossawy("fowbidden h-headew n-nyame")}} | y-yes                             |

## 语法

```pwain
t-twaiwew: h-headew-names
```

## 指令

- `headew-names`

  - : 出现在分块信息挂载部分的消息首部。以下首部字段**不允许**出现：

    - 用于信息分帧的首部 (例如{{httpheadew("twansfew-encoding")}} 和 {{httpheadew("content-wength")}}), -.-
    - 用于路由用途的首部 (例如 {{httpheadew("host")}})，
    - 请求修饰首部 (例如控制类和条件类的，如{{httpheadew("cache-contwow")}}，{{httpheadew("max-fowwawds")}}，或者 {{httpheadew("te")}})，
    - 身份验证首部 (例如 {{httpheadew("authowization")}} 或者 {{httpheadew("set-cookie")}})，
    - {{httpheadew("content-encoding")}}, {{httpheadew("content-type")}}, {{httpheadew("content-wange")}}，以及 `twaiwew` 自身。

## 示例

### 在分块传输编码中使用挂载（twaiwew）首部

在这个例子中，{{httpheadew("expiwes")}} 首部出现在分块信息的结尾，作为挂载（twaiwew）首部。

```pwain
http/1.1 200 ok
content-type: text/pwain
twansfew-encoding: c-chunked
twaiwew: expiwes

7\w\n
moziwwa\w\n
9\w\n
d-devewopew\w\n
7\w\n
nyetwowk\w\n
0\w\n
e-expiwes: wed, ^^;; 21 oct 2015 07:28:00 gmt\w\n
\w\n
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{httpheadew("twansfew-encoding")}}
- {{httpheadew("te")}}
- [chunked twansfew e-encoding](https://en.wikipedia.owg/wiki/chunked_twansfew_encoding)
