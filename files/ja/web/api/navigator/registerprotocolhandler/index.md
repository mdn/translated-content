---
title: "Navigator: registerProtocolHandler() メソッド"
short-title: registerProtocolHandler()
slug: Web/API/Navigator/registerProtocolHandler
l10n:
  sourceCommit: f98675af9d0a80f33d7875c48cfdb41f71ed1de9
---

{{APIRef("HTML DOM")}}{{securecontext_header}}

**{{domxref("Navigator")}}** の **`registerProtocolHandler()`** メソッドで、ウェブサイトが特定の URL スキーム（プロトコルとも呼ばれる）を開いたり処理したりする機能を登録することを可能にします。

例えば、この API はウェブメールサイトで `mailto:` の URL を開かせたり、 VoIP サイトで `tel:` の URL を開かせたりします。

プロトコルハンドラーを登録するには、ウェブサイトが `registerProtocolHandler()` を呼び出し、登録するプロトコルとテンプレート URL を渡します。

ユーザーが登録されたプロトコルを使用するリンクを起動すると、ブラウザーはハンドラー登録時に指定された URL テンプレートに起動したリンクの [`href`](/ja/docs/Web/HTML/Element/a#href) を挿入し、現在のページを生成された URL に移動します。

ブラウザーは、プロトコルが登録されたとき、またはユーザーがリンクを起動したときに、ページがプロトコルを処理することを許可するかどうかを確認するようユーザーに要求することがあります。

## 構文

```js-nolint
registerProtocolHandler(scheme, url)
```

### 引数

- `scheme`

  - : サイトが扱いたいプロトコルのスキームが入った文字列です。

    次のようなスキーム名のカスタムスキームにすることができます。

    - `web+` で始まる
    - `web+` 接頭辞の後に 1 文字以上ある
    - 小文字の {{Glossary("ASCII")}} 文字のみが含まれている

    それ以外の場合はスキームは以下のいずれかでなければなりません。

    - `bitcoin`
    - `ftp`
    - `ftps`
    - `geo`
    - `im`
    - `irc`
    - `ircs`
    - `magnet`
    - `mailto`
    - `matrix`
    - `mms`
    - `news`
    - `nntp`
    - `openpgp4fpr`
    - `sftp`
    - `sip`
    - `sms`
    - `smsto`
    - `ssh`
    - `tel`
    - `urn`
    - `webcal`
    - `wtai`
    - `xmpp`

    <!-- これは https://html.spec.whatwg.org/multipage/system-state.html#safelisted-scheme と同じものです -->

- `url`

  - : ハンドラーの URL を指定する文字列。
    この URL には `%s` を含める必要があり、これは取り扱う URL を[エスケープした](/ja/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)もので置き換得られるプレイスホルダーとして扱われます。

    ハンドラーの URL は `https` スキームを使用する必要があり、ハンドラーを登録しようとするウェブページと同じ{{glossary("origin", "オリジン")}}でなければなりません。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `SecurityError` {{domxref("DOMException")}}

  - : ユーザーエージェントが登録をブロックしました。
    以下のような場合に起こる可能性があります。

    - ブラウザーが自身が処理するスキーム（`https:`, `about:`, など）であるなど、登録されているスキーム（プロトコル）が無効である場合。
    - ハンドラーの URL の{{Glossary("origin", "オリジン")}}が、本 API を呼び出すページのオリジンと一致しない場合。
    - ブラウザーが、この関数を安全なコンテキストから呼び出すことを要求している場合。
    - ブラウザーが、ハンドラーの URL が HTTPS であることを要求している場合。

- `SyntaxError` {{domxref("DOMException")}}
  - : `%s` が指定されたハンドラー URL に含まれていない場合。

## 例

### mailto プロトコルのハンドラーを登録する

ウェブページが、`https` 以外のプロトコルを使用してリソースにリンクすることはよくあります。例えば、`mailto:` プロトコルなどです。ウェブ制作者は、ユーザーがウェブページから直接電子メールを送信できる便利な方法を提供したい場合に、`mailto` リンクを使用することができます。

```html
<a href="mailto:webmaster@example.com">ウェブマスター</a>
```

リンクが有効になると、ブラウザーが既定のデスクトップアプリケーションを起動してメールを処理します。この処理を、デスクトップベースのプロトコルハンドラーと考えることができます。

ウェブベースのプロトコルハンドラーを使用すると、ウェブベースのアプリケーションも処理に参加できます。例えば、`mail.example.org` のウェブメールアプリは、次のようなコードで `mailto` リンクを処理するように登録できます。

```js
navigator.registerProtocolHandler("mailto", "https://mail.example.org/?to=%s");
```

この後、ユーザーが任意のウェブサイト上の `mailto` リンクをクリックすると、ブラウザーは(確認を依頼するメッセージを表示するなどして) `https://mail.example.org/?to=mailto:webmaster@example.com` に移動します。このページでは、URL の引数を解釈してアドレスを抽出し、それをメールの初期化に使用することができます。

### カスタムプロトコルのハンドラーを登録する

この例では、ページが `web+burger` プロトコルのハンドラーを次のようなコードで登録します。

```js
navigator.registerProtocolHandler(
  "web+burger",
  "https://burgers.example.org/?burger=%s",
);
```

その後、ユーザーはこのようなリンクが格納されたページにアクセスします。

```html
<a href="web+burger:cheeseburger">cheeseburger</a>
```

ユーザーが `web+burger` リンクを起動すると、ブラウザーは（ユーザーに確認を要求した後） `https://burgers.example.org/?burger=web+burger:cheeseburger` に移動します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
