---
title: HTTP
slug: Glossary/HTTP
l10n:
  sourceCommit: 9584088475846ff014dadddf8f6eff25c0796bbb
---

**HTTP** (HyperText Transfer Protocol、ハイパーテキスト転送プロトコル) は、{{glossary("World Wide Web","Web")}}上のハイパーメディア文書の転送を可能にする、基盤となるネットワーク{{glossary("protocol", "プロトコル")}}です。一般にブラウザーとサーバーの間で用いられ、人間が読むことができます。現行の HTTP 仕様のバージョンは {{glossary("HTTP_2", "HTTP/2")}} と呼ばれています。

{{glossary("URI")}} の一部としては、 "http\://example.com/" の中の "http" は「スキーム」と呼ばれ、これを使ったリソースは、通常 HTTP プロトコルを用いた非暗号化コネクションで転送されます。（"https\://developer.mozilla.org" にあるような） "https" スキームでは、リソースは HTTP プロトコルで転送されますが、保護された {{glossary("TLS")}} チャンネルを経由します。

HTTP はテキストであり（すべての通信はプレーンテキストで行われます）、ステートレスです（前の通信を気にせずに通信されます）。この特性は人間がワールドワイドウェブ上の文書（ウェブサイト）を読むのに理想的です。しかし HTTP は、サーバーからサーバーへの {{glossary("REST")}} ウェブサービスや、ウェブサイトをより動的にするためにその内部で用いられる {{glossary("AJAX")}} リクエストの基礎としても使用できます。

## 関連情報

- [MDN 上の HTTP](/ja/docs/Web/HTTP)
- [HTTP](https://ja.wikipedia.org/wiki/Hypertext_Transfer_Protocol) - ウィキペディア
