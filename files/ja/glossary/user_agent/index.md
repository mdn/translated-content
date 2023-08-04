---
title: User agent (ユーザーエージェント)
slug: Glossary/User_agent
---

ユーザーエージェントは個人を表すコンピューターのプログラムで、例えば{{Glossary("World Wide Web", "ウェブ")}}における{{Glossary("Browser","ブラウザー")}}に当たるものです。

ブラウザーのほかに、ウェブページをスクレイピングするボット、ダウンロードマネージャー、その他のウェブにアクセスするアプリがユーザーエージェントになる可能性もあります。ブラウザーはサーバーに対してリクエストを行う際に毎回、 {{Glossary("HTTP")}} の {{HTTPHeader("User-Agent")}} ヘッダーに、ユーザーエージェント (UA) 文字列と呼ばれる自分自身を識別する文字列を含めます。この文字列はブラウザー、バージョン番号、ホストのオペレーティングシステムなどを識別します。

スパムボット、ダウンロードマネージャー、一部のブラウザーは、異なるクライアントであると見せかけるために偽の UA 文字列を送ることがあります。これは _user agent spoofing_ と呼ばれています。

ユーザーエージェント文字列は、クライアント側の {{Glossary("JavaScript")}} で {{domxref("navigator.userAgent")}} を使用することでアクセスできます。

ユーザーエージェント文字列は、 `"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:35.0) Gecko/20100101 Firefox/35.0"` のようなものが一般的です。

## 関連情報

### 一般知識

- Wikipedia の[ユーザーエージェント](https://ja.wikipedia.org/wiki/ユーザーエージェント)

### 技術リファレンス

- {{domxref("navigator.userAgent")}}
- [User Agent を用いたブラウザーの判定](/ja/docs/Web/HTTP/Browser_detection_using_the_user_agent)
- {{RFC(2616, "14.43")}}: The `User-Agent` header

1. [MDN Web Docs 用語集](/ja/docs/Glossary)

   1. {{Glossary("Browser", "ブラウザー")}}

2. HTTP ヘッダー

   1. {{HTTPHeader("User-agent")}}
