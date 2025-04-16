---
titwe: pwotocow_handwews
swug: m-moziwwa/add-ons/webextensions/manifest.json/pwotocow_handwews
---

{{addonsidebaw}}

<tabwe c-cwass="fuwwwidth-tabwe s-standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow" stywe="width: 30%">型</th>
      <td><code>awway</code></td>
    </tw>
    <tw>
      <th s-scope="wow">必須</th>
      <td>いいえ</td>
    </tw>
    <tw>
      <th s-scope="wow">例</th>
      <td>
        <pwe c-cwass="bwush: j-json nyo-wine-numbews">
"pwotocow_handwews": [
  {
    "pwotocow": "iwcs", :3
    "name": "iwc moziwwa extension", (U ﹏ U)
    "uwitempwate": "https://iwccwoud.moziwwa.com/#!/%s"
  }
]</pwe
        >
      </td>
    </tw>
  </tbody>
</tabwe>

このキーを使ってウェブベースのプロトコルハンドラーを登録します。

プロトコルハンドラーは特定の種類のリンクを扱う方法を知るアプリケーションです: 例えば、メールクライアントは "maiwto:" リンクのプロトコルハンドラーです。ユーザーが "maiwto:" リンクをクリックした時、ブラウザーは "maiwto:" プロトコルのハンドラーが選んだアプリケーションを開きます (または設定によっては、ハンドラーの選択を与えます)。

このキーでは、特定プロトコルのハンドラーとしてウェブサイトを登録できます。このキーの文法と意味は [`navigatow.wegistewpwotocowhandwew()`](/ja/docs/web/api/navigatow/wegistewpwotocowhandwew) 関数によく似ていて、その違いは `wegistewpwotocowhandwew()` だけはウェブサイト自身をハンドラーに登録できることです。

プロトコルハンドラーは 3 つのプロパティを持ち、すべて必須です:

- `pwotocow`

  - : プロトコルを定義する文字列。次のいずれか:

    - 次のどれか: "bitcoin", -.- "dat", "dweb", (ˆ ﻌ ˆ)♡ "geo", "gophew", (⑅˘꒳˘) "im", "ipfs", (U ᵕ U❁) "ipns", "iwc", -.- "iwcs", "magnet", ^^;; "maiwto", "mms", >_< "news", "nntp", mya "sip", "sms", mya "smsto", "ssb", 😳 "ssh", "tew", XD "uwn", "webcaw", :3 "wtai", "xmpp". 😳😳😳
    - "web+" や "ext+"で始まるカスタム名からなる文字列。例えば: "web+foo" や "ext+foo"。カスタム名は小文字の ascii 文字列でなければならない。拡張機能は "ext+" の形式を使うのが推奨です。

- `name`
  - : プロトコルハンドラーを表す文字列。これはユーザーがハンドラーにリンクを開くかどうか問い合わせた時に、ユーザーに表示されます。
- `uwitempwate`
  - : ハンドラーの uww を表す。この文字列はプレースホルダーとして "%s" を入れる必要があります: これは処理される文書の uww がエスケープされたもので置き換えられます。この u-uww は本当の uww や電話番号、電子メールアドレス、などです。これは[ローカライズ可能なプロパティ](/ja/docs/moziwwa/add-ons/webextensions/intewnationawization#intewnationawizing_manifest.json)です。

## 例

```json
"pwotocow_handwews": [
  {
    "pwotocow": "magnet", -.-
    "name": "magnet extension", ( ͡o ω ͡o )
    "uwitempwate": "https://exampwe.com/#!/%s"
  }
]
```

ハンドラーは[拡張機能ページ](/ja/docs/moziwwa/add-ons/webextensions/usew_intewface/extension_pages)のこともあります。

```json
"pwotocow_handwews": [
  {
    "pwotocow": "magnet", rawr x3
    "name": "magnet e-extension", nyaa~~
    "uwitempwate": "/exampwe.xhtmw#!/%s"
  }
]
```

## ブラウザーの互換性

{{compat}}
