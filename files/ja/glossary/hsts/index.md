---
title: HSTS
slug: Glossary/HSTS
tags:
  - HTTP
  - セキュリティ
translation_of: Glossary/HSTS
---
**HTTP Strict Transport Security** を使用すると、ウェブサイトはブラウザーに、HTTP を使用してサイトを読み込まないことと、HTTP を使用してサイトにアクセスしようとするすべての試みを HTTPS リクエストへ自動的に変換する必要があることを通知することができます。 これは、{{HTTPHeader("Strict-Transport-Security")}} という 1 つの HTTP ヘッダーで構成され、サーバーによってリソースとともに送り返されます。

言い換えれば、URL でプロトコルを HTTP から HTTPS に変更するだけで、より安全に動作することをブラウザーに伝え、すべてのリクエストに対してそれを行うようにブラウザーに依頼します。

## 関連情報

- {{HTTPHeader("Strict-Transport-Security")}}
- OWASP の記事: [HTTP Strict Transport Security](https://www.owasp.org/index.php/HTTP_Strict_Transport_Security)
- Wikipedia 上の {{interwiki("wikipedia", "HTTP Strict Transport Security")}}
