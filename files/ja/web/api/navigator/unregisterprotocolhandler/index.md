---
title: "Navigator: unregisterProtocolHandler() メソッド"
short-title: unregisterProtocolHandler()
slug: Web/API/Navigator/unregisterProtocolHandler
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("HTML DOM")}}{{securecontext_header}}

**{{domxref("Navigator")}}** の **`unregisterProtocolHandler()`** は、指定された URL [スキーム](#許可されているスキーム)からプロトコルハンドラーを取り除きます。

このメソッドは **`registerProtocolHandler()`** の逆です。

## 構文

```js-nolint
unregisterProtocolHandler(scheme, url)
```

### 引数

- `scheme`
  - : このプロトコルハンドラーで登録解除する[許可されているスキーム](#許可されているスキーム)の入った文字列。
    例えば、`"sms"` スキームを渡すと、SMSテキストメッセージリンク用のハンドラーを登録解除できます。
- `url`
  - : ハンドラーの URL の入った文字列。
    **この URL は、ハンドラーを登録する際に使用したものと一致させる必要があります（例えば、`%s` を記載する必要があります）**。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `SecurityError` {{domxref("DOMException")}}
  - : ユーザーエージェントが登録解除をブロックしました。
    以下の可能性があります。
    - スキーム（プロトコル）が不正な場合、例えばブラウザーが自身で処理するスキームなど（`https:`、`about:`、など）。
    - このハンドラーの URL の{{Glossary("origin", "オリジン")}}が、この API を呼び出したページのオリジンと一致していません。
    - この関数は、保護されたコンテキストから呼び出されることがブラウザーによって要求されます。
    - ブラウザーでは、ハンドラーの URL が HTTPS であることが要求されます。
- `SyntaxError` {{domxref("DOMException")}}
  - : ハンドラー URL から `%s` プレースホルダーが欠落しています。

## 許可されているスキーム

セキュリティ上の理由から、`unregisterProtocolHandler()` は登録解除できるスキームを制限しています。

**カスタムスキーム**は、以下の条件を満たす限り、登録解除が可能です。

- カスタムスキームの名前が `web+` で始まる
- カスタムスキームの名前の `web+` 接頭辞の後に 1 文字以上ある
- カスタムスキームの名前に小文字の ASCII 文字のみが含まれている

例えば、`web+burger`（下記の[例](#例)にあるとおり）。

それ以外の場合、スキームは以下のいずれかである必要があります。

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

## 例

例えば、自分のウェブサイトが `burgers.example.com` で、`web+burger:` スキームがある場合、そのハンドラーを次のようにして登録解除することができます。

```js
navigator.unregisterProtocolHandler(
  "web+burger",
  "https://burgers.example.com/?burger=%s",
);
```

このスクリプトは、ハンドラー URL と同じオリジン（例えば、`https://burgers.example.com` の何れかのページ）から実行する必要があり、ハンドラーの URL は `http` または `https` でなければなりません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
