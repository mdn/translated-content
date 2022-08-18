---
title: Entity header(エンティティヘッダー)
slug: Glossary/Entity_header
tags:
  - Glossary
  - WebMechanics
translation_of: Glossary/Entity_header
---
エンティティヘッダーは、メッセージボディの内容を記述する{{glossary("header", "HTTP header")}}です。エンティティヘッダーは、HTTP リクエストとレスポンスの両方で使用されます。例えば{{HTTPHeader("Content-Length")}}、{{HTTPHeader("Content-Language")}}、{{HTTPHeader("Content-Encoding")}} は、エンティティヘッダーです。

エンティティヘッダー自体はリクエストヘッダーでもレスポンスヘッダーでもありませんが、リクエストヘッダー、レスポンスヘッダーはしばしばエンティティヘッダーを含みます。

次の例では、{{HTTPHeader("Content-Length")}} はエンティティヘッダーであり、{{HTTPHeader("Host")}}と{{HTTPHeader("User-Agent")}}は{{glossary("request header", "リクエストヘッダー")}}です：

```
POST /myform.html HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Content-Length: 128
```

## 詳細情報

### 技術リファレンス

- [全ての HTTP ヘッダー一覧](/ja/docs/Web/HTTP/Headers)
