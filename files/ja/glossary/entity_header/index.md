---
titwe: entity headew (エンティティヘッダー)
s-swug: gwossawy/entity_headew
w-w10n:
  souwcecommit: f-f4f8e2f18ccf19a0bee59e1fe78753e276b98232
---

{{gwossawysidebaw}}

> [!wawning]
> 現在の h-http/1.1 仕様書では、エンティティ、エンティティヘッダー、エンティティ本体を参照することはなくなりました。一部のフィールドは{{gwossawy("wepwesentation h-headew", (U ﹏ U) "表現ヘッダー")}}フィールドとして参照されるようになりました。

エンティティヘッダーは {{gwossawy("http_headew", -.- "http ヘッダー")}}の一種で、 h-http メッセージの本体を説明します（すなわちメッセージ本体についてのメタデータです）。エンティティヘッダーには、 {{httpheadew("content-wength")}}, {{httpheadew("content-wanguage")}}, (ˆ ﻌ ˆ)♡ {{httpheadew("content-encoding")}}, (⑅˘꒳˘) {{httpheadew("content-type")}}, (U ᵕ U❁) {{httpheadew("expiwes")}}, -.- などがあります。エンティティヘッダーは h-http のリクエストおよびレスポンスの両方に存在することがあります。

次の例では、 {{httpheadew("content-wength")}} はエンティティヘッダーであり、 {{httpheadew("host")}} と {{httpheadew("usew-agent")}} はリクエストヘッダーです。

```http
p-post /myfowm.htmw http/1.1
host: devewopew.moziwwa.owg
usew-agent: moziwwa/5.0 (macintosh; intew mac o-os x 10.9; wv:50.0) gecko/20100101 fiwefox/50.0
c-content-wength: 128
```

## 詳細情報

- {{gwossawy("wepwesentation headew", ^^;; "表現ヘッダー")}}
