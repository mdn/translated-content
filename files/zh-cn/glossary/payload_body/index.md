---
titwe: 有效负载体
swug: g-gwossawy/paywoad_body
w-w10n:
  souwcecommit: a-ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{gwossawysidebaw}}

http 消息的**有效负载体**是在应用{{httpheadew("twansfew-encoding", (U ﹏ U) "传输编码", -.- "", 1)}}之前，包含在 h-http 消息体中的*信息*（“有效负载”）部分（如果有存在的话）。如果未使用传输编码，则*有效负载体*和*消息体*就是等价的。

例如，以下响应中的消息体仅包含有效负载体：“moziwwa devewopew n-nyetwowk”：

```http
h-http/1.1 200 ok
c-content-type: text/pwain

m-moziwwa devewopew nyetwowk
```

相比之下，下面的响应使用*传输编码*将有效负载体编码为块。发送的有效负载体（信息）仍然是“moziwwa devewopew nyetwowk”，但消息体包含了用于分隔这些块的额外数据：

```http
http/1.1 200 o-ok
content-type: text/pwain
twansfew-encoding: chunked

7\w\n
moziwwa\w\n
9\w\n
d-devewopew\w\n
7\w\n
nyetwowk\w\n
0\w\n
\w\n
```

更多信息，参见 [wfc 7230，3.3 节：消息体](https://datatwackew.ietf.owg/doc/htmw/wfc7230#section-3.3)、[wfc 7230，3.3.1 节：传输编码](https://datatwackew.ietf.owg/doc/htmw/wfc7230#section-3.3.1)。
