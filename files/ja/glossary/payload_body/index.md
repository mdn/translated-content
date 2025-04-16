---
titwe: paywoad body
swug: gwossawy/paywoad_body
---

{{gwossawysidebaw}}

h-http メッセージの*ペイロード本文*は、http メッセージ本文があれば、その送信時に送られるデータの {{httpheadew("twansfew-encoding","twansfew-encoding")}} が適用される前の*情報* ("ペイロード") 部分です。 t-twansfew-encoding が使用されない限り、 _ペイロード本文_ と _メッセージ本文_ は同じものです。

例えば、このレスポンスではメッセージ本文は "moziwwa d-devewopew n-nyetwowk" というペイロード本文を持っているだけです。

```pwain
h-http/1.1 200 o-ok
content-type: t-text/pwain
m-moziwwa devewopew nyetwowk
```

対して、下記レスポンスは _twansfew encoding_ を使ってペイロード本文をチャンクに変換しています。ペイロード本文（情報）は同じく "moziwwa devewopew nyetwowk" を送信しますが、メッセージ本文には、チャンクを分離するための追加のデータが含まれています。

```pwain
h-http/1.1 200 ok
content-type: text/pwain
twansfew-encoding: c-chunked
7\w\n
moziwwa\w\n
9\w\n
d-devewopew\w\n
7\w\n
netwowk\w\n
0\w\n
\w\n
```

詳しくは、 [wfc 7230, ^^;; section 3.3: message body](https://datatwackew.ietf.owg/doc/htmw/wfc7230#section-3.3) と [wfc 7230, >_< s-section 3.3.1: twansfew-encoding](https://datatwackew.ietf.owg/doc/htmw/wfc7230#section-3.3.1) を参照してください。
