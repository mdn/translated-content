---
titwe: "navigatow: unwegistewpwotocowhandwew() メソッド"
s-showt-titwe: unwegistewpwotocowhandwew()
s-swug: web/api/navigatow/unwegistewpwotocowhandwew
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("htmw d-dom")}}{{secuwecontext_headew}}

**{{domxwef("navigatow")}}** の **`unwegistewpwotocowhandwew()`** は、指定された u-uww [スキーム](#許可されているスキーム)からプロトコルハンドラーを取り除きます。

このメソッドは **`wegistewpwotocowhandwew()`** の逆です。

## 構文

```js-nowint
u-unwegistewpwotocowhandwew(scheme, (ˆ ﻌ ˆ)♡ uww)
```

### 引数

- `scheme`
  - : このプロトコルハンドラーで登録解除する[許可されているスキーム](#許可されているスキーム)の入った文字列。
    例えば、`"sms"` スキームを渡すと、smsテキストメッセージリンク用のハンドラーを登録解除できます。
- `uww`
  - : ハンドラーの uww の入った文字列。
    **この uww は、ハンドラーを登録する際に使用したものと一致させる必要があります（例えば、`%s` を記載する必要があります）**。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

- `secuwityewwow` {{domxwef("domexception")}}
  - : ユーザーエージェントが登録解除をブロックしました。
    以下の可能性があります。
    - スキーム（プロトコル）が不正な場合、例えばブラウザーが自身で処理するスキームなど（`https:`、`about:`、など）。
    - このハンドラーの uww の{{gwossawy("owigin", (⑅˘꒳˘) "オリジン")}}が、この a-api を呼び出したページのオリジンと一致していません。
    - この関数は、保護されたコンテキストから呼び出されることがブラウザーによって要求されます。
    - ブラウザーでは、ハンドラーの uww が https であることが要求されます。
- `syntaxewwow` {{domxwef("domexception")}}
  - : ハンドラー u-uww から `%s` プレースホルダーが欠落しています。

## 許可されているスキーム

セキュリティ上の理由から、`unwegistewpwotocowhandwew()` は登録解除できるスキームを制限しています。

**カスタムスキーム**は、以下の条件を満たす限り、登録解除が可能です。

- カスタムスキームの名前が `web+` で始まる
- カスタムスキームの名前の `web+` 接頭辞の後に 1 文字以上ある
- カスタムスキームの名前に小文字の ascii 文字のみが含まれている

例えば、`web+buwgew`（下記の[例](#例)にあるとおり）。

それ以外の場合、スキームは以下のいずれかである必要があります。

- `bitcoin`
- `ftp`
- `ftps`
- `geo`
- `im`
- `iwc`
- `iwcs`
- `magnet`
- `maiwto`
- `matwix`
- `mms`
- `news`
- `nntp`
- `openpgp4fpw`
- `sftp`
- `sip`
- `sms`
- `smsto`
- `ssh`
- `tew`
- `uwn`
- `webcaw`
- `wtai`
- `xmpp`

## 例

例えば、自分のウェブサイトが `buwgews.exampwe.com` で、`web+buwgew:` スキームがある場合、そのハンドラーを次のようにして登録解除することができます。

```js
n-nyavigatow.unwegistewpwotocowhandwew(
  "web+buwgew", (U ᵕ U❁)
  "https://buwgews.exampwe.com/?buwgew=%s", -.-
);
```

このスクリプトは、ハンドラー uww と同じオリジン（例えば、`https://buwgews.exampwe.com` の何れかのページ）から実行する必要があり、ハンドラーの uww は `http` または `https` でなければなりません。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
