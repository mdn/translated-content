---
title: protocol_handlers
slug: Mozilla/Add-ons/WebExtensions/manifest.json/protocol_handlers
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row" style="width: 30%">型</th>
      <td><code>Array</code></td>
    </tr>
    <tr>
      <th scope="row">必須</th>
      <td>いいえ</td>
    </tr>
    <tr>
      <th scope="row">例</th>
      <td>
        <pre class="brush: json no-line-numbers">
"protocol_handlers": [
  {
    "protocol": "ircs",
    "name": "IRC Mozilla Extension",
    "uriTemplate": "https://irccloud.mozilla.com/#!/%s"
  }
]</pre
        >
      </td>
    </tr>
  </tbody>
</table>

このキーを使ってウェブベースのプロトコルハンドラーを登録します。

プロトコルハンドラーは特定の種類のリンクを扱う方法を知るアプリケーションです: 例えば、メールクライアントは "mailto:" リンクのプロトコルハンドラーです。ユーザーが "mailto:" リンクをクリックした時、ブラウザーは "mailto:" プロトコルのハンドラーが選んだアプリケーションを開きます (または設定によっては、ハンドラーの選択を与えます)。

このキーでは、特定プロトコルのハンドラーとしてウェブサイトを登録できます。このキーの文法と意味は [`Navigator.registerProtocolHandler()`](/ja/docs/Web/API/Navigator/registerProtocolHandler) 関数によく似ていて、その違いは `registerProtocolHandler()` だけはウェブサイト自身をハンドラーに登録できることです。

プロトコルハンドラーは 3 つのプロパティを持ち、すべて必須です:

- `protocol`

  - : プロトコルを定義する文字列。次のいずれか:

    - 次のどれか: "bitcoin", "dat", "dweb", "geo", "gopher", "im", "ipfs", "ipns", "irc", "ircs", "magnet", "mailto", "mms", "news", "nntp", "sip", "sms", "smsto", "ssb", "ssh", "tel", "urn", "webcal", "wtai", "xmpp".
    - "web+" や "ext+"で始まるカスタム名からなる文字列。例えば: "web+foo" や "ext+foo"。カスタム名は小文字の ASCII 文字列でなければならない。拡張機能は "ext+" の形式を使うのが推奨です。

- `name`
  - : プロトコルハンドラーを表す文字列。これはユーザーがハンドラーにリンクを開くかどうか問い合わせた時に、ユーザーに表示されます。
- `uriTemplate`
  - : ハンドラーの URL を表す。この文字列はプレースホルダーとして "%s" を入れる必要があります: これは処理される文書の URL がエスケープされたもので置き換えられます。この URL は本当の URL や電話番号、電子メールアドレス、などです。これは[ローカライズ可能なプロパティ](/ja/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json)です。

## 例

```json
"protocol_handlers": [
  {
    "protocol": "magnet",
    "name": "Magnet Extension",
    "uriTemplate": "https://example.com/#!/%s"
  }
]
```

ハンドラーは[拡張機能ページ](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages)のこともあります。

```json
"protocol_handlers": [
  {
    "protocol": "magnet",
    "name": "Magnet Extension",
    "uriTemplate": "/example.xhtml#!/%s"
  }
]
```

## ブラウザーの互換性

{{Compat}}
