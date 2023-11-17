---
title: Navigator.registerProtocolHandler()
slug: Web/API/Navigator/registerProtocolHandler
---

{{APIRef("HTML DOM")}}{{securecontext_header}}

**{{domxref("Navigator")}}** の **`registerProtocolHandler()`** メソッドで、ウェブサイトが特定の URL スキーム（別名プロトコル）を開いたり処理したりする機能を登録することを可能にします。

例えば、この API はウェブメールサイトで `mailto:` の URL を開かせたり、 VoIP サイトで `tel:` の URL を開かせたりします。

## 構文

```js
registerProtocolHandler(scheme, url);
registerProtocolHandler(scheme, url, title);
```

> **メモ:** 非推奨の `title` 引数が付いたものは、互換性のために推奨されます（下記の引数情報を参照してください）。

### 引数

- `scheme`

  - : サイトが扱いたいプロトコルの[許可されているスキーム](#許可されているスキーム)が入った文字列です。
    例えば、 `"sms"` スキームを渡すことで、SMS テキストメッセージリンクを扱うように登録することができます。

- `url`

  - : ハンドラーの URL を指定する文字列。
    **この URL には `%s` を含める必要があり**、これは取り扱う URL を[エスケープした](/ja/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)もので置き換得られるプレイスホルダーとして扱われます。

    > **メモ:** ハンドラーの URL は `https` スキームを使用する必要があります。古いブラウザーは `http` にも対応しています。

- `title` {{deprecated_inline}}

  - : ハンドラーを表す人間が読めるタイトル文字列です。
    **これはユーザーに表示されます**。例えば、「このサイトで [スキーム] のリンクを扱うことを許可しますか？」と尋ねたり、ブラウザーの設定で登録されたハンドラーの一覧に表示されたりします。

    > **メモ:** タイトルはなりすましの懸念から仕様から削除されました。
    > しかし `title` は一部のブラウザーが**まだ必要としている**ため、設定する必要があります（[下記の互換性一覧表](#ブラウザーの互換性)をご覧ください）。
    > 更新された仕様に対応しているブラウザーはほとんどの場合、タイトルを受け付けますが、無視します。

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

- `SyntaxError`{{domxref("DOMException")}}
  - : `%s` が指定されたハンドラー URL に含まれていない場合。

## 許可されているスキーム

セキュリティ上の理由により `registerProtocolHandler()` は登録可能なスキームに制限を設けています。

**カスタムスキーム**は次のような場合に登録されます。

- カスタムスキームの名前が `web+` で始まる
- カスタムスキームの名前が `web+` 接頭辞の後に 1 文字以上ある
- カスタムスキームの名前に小文字の ASCII 文字のみが含まれている

例えば下の [例](#例) で使われている `web+burger` などが挙げられます。

もしくは、以下のホワイトリストに挙げられているスキームでなければなりません。

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

## 例

ウェブアプリケーションが `burgers.example.com` にある場合、次のようにして `web+burger:` リンクを処理するプロトコルハンドラーを登録することができます。

```js
navigator.registerProtocolHandler(
  "web+burger",
  "https://burgers.example.com/?burger=%s",
  "Burger handler",
); // 最後の title 引数は互換性のために入れている
```

これは、 `web+burger:` リンクがアクセスしたバーガーの URL を `%s` プレースホルダーに挿入し、ユーザーをサイトに誘導するハンドラーを作成します。

このスクリプトはハンドラーの URL と同じオリジン (すなわち、 `https://burgers.example.com` にあるページのいずれか) から実行する必要があり、ハンドラーの URL は `http` または `https` である必要があります。

コードがプロトコルハンドラーを登録しようとしていることはユーザーに通知され、ユーザーは登録を許可するかどうか決めることができます。以下のスクリーンショットは `google.co.uk` での例です。

![ブラウザーの通知には、 "Add Burger handler (www.google.co.uk) as application for burger links?" と表示され、「アプリケーションの追加」ボタンとハンドラー要求を無視するクローズボタンが提供されます。](protocolregister.png)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブベースのプロトコルハンドラー](/ja/docs/Web/API/Navigator/registerProtocolHandler/Web-based_protocol_handlers)
- [RegisterProtocolHandler Enhancing the Federated Web](https://blog.mozilla.org/webdev/2010/07/26/registerprotocolhandler-enhancing-the-federated-web/) (Mozilla Webdev)
