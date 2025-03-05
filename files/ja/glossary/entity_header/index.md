---
title: Entity header (エンティティヘッダー)
slug: Glossary/Entity_header
l10n:
  sourceCommit: f4f8e2f18ccf19a0bee59e1fe78753e276b98232
---

{{GlossarySidebar}}

> [!WARNING]
> 現在の HTTP/1.1 仕様書では、エンティティ、エンティティヘッダー、エンティティ本体を参照することはなくなりました。一部のフィールドは{{glossary("Representation header", "表現ヘッダー")}}フィールドとして参照されるようになりました。

エンティティヘッダーは {{glossary("HTTP_header", "HTTP ヘッダー")}}の一種で、 HTTP メッセージの本体を説明します（すなわちメッセージ本体についてのメタデータです）。エンティティヘッダーには、 {{HTTPHeader("Content-Length")}}, {{HTTPHeader("Content-Language")}}, {{HTTPHeader("Content-Encoding")}}, {{HTTPHeader("Content-Type")}}, {{HTTPHeader("Expires")}}, などがあります。エンティティヘッダーは HTTP のリクエストおよびレスポンスの両方に存在することがあります。

次の例では、 {{HTTPHeader("Content-Length")}} はエンティティヘッダーであり、 {{HTTPHeader("Host")}} と {{HTTPHeader("User-Agent")}} はリクエストヘッダーです。

```http
POST /myform.html HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Content-Length: 128
```

## 詳細情報

- {{Glossary("Representation header", "表現ヘッダー")}}
