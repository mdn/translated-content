---
title: "Reason: CORS disabled"
slug: Web/HTTP/CORS/Errors/CORSDisabled
---

{{HTTPSidebar}}

## 理由

```
Reason: CORS disabled
```

## 何に失敗したか

{{Glossary("CORS")}} を使う必要がある要求が行われましたが、ユーザーのブラウザーで CORS が無効になっています。これが発生した場合、ブラウザーの CORS を有効に戻す必要があります。

Firefox では、 CORS を無効にする設定は `content.cors.disable` です。これを `true` に設定すると CORS が無効になり、この場合は常に、 CORS 要求は常にこのエラーで失敗します。

## 関連情報

- [CORS のエラー](/ja/docs/Web/HTTP/CORS/Errors)
- 用語集: {{Glossary("CORS")}}
- [CORS 入門](/ja/docs/Web/HTTP/CORS)
