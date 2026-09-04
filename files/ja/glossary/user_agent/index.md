---
title: User agent (ユーザーエージェント)
slug: Glossary/User_agent
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

ユーザーエージェントは人を代表するコンピューターのプログラムで、例えば{{Glossary("World Wide Web", "ウェブ")}}における{{Glossary("Browser","ブラウザー")}}に当たるものです。

ブラウザーのほかに、ウェブページをスクレイピングするボット、ダウンロードマネージャー、その他のウェブにアクセスするアプリがユーザーエージェントになる可能性もあります。ブラウザーはサーバーに対してリクエストを行う際に毎回、 {{Glossary("HTTP")}} の {{HTTPHeader("User-Agent")}} ヘッダーに、ユーザーエージェント (UA) 文字列と呼ばれる自分自身を識別する文字列を含めます。この文字列はブラウザー、バージョン番号、ホストのオペレーティングシステムなどを識別します。

スパムボット、ダウンロードマネージャー、一部のブラウザーは、異なるクライアントであると見せかけるために偽の UA 文字列を送ることがあります。これは _user agent spoofing_ と呼ばれています。

ユーザーエージェント文字列は、クライアント側の {{Glossary("JavaScript")}} で {{domxref("navigator.userAgent")}} を使用することでアクセスできます。

ユーザーエージェント文字列は、 `"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:35.0) Gecko/20100101 Firefox/35.0"` のようなものが一般的です。

## 関連情報

- [ユーザーエージェント](https://ja.wikipedia.org/wiki/ユーザーエージェント) - ウィキペディア
- {{domxref("navigator.userAgent")}}
- [User Agent を用いたブラウザーの判定](/ja/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent)
- {{RFC(2616, "", "14.43")}}: `User-Agent` ヘッダー

- 関連用語:
  - {{Glossary("Browser", "ブラウザー")}}
- HTTP ヘッダー
  - {{HTTPHeader("User-agent")}}
