---
title: "CredentialsContainer: store() メソッド"
short-title: store()
slug: Web/API/CredentialsContainer/store
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("Credential Management API")}}{{SecureContext_Header}}

**`store()`** は {{domxref("CredentialsContainer")}} のメソッドで、ユーザーの一連の資格情報を {{domxref("Credential")}} インスタンス内に保存し、これを {{jsxref("Promise")}} で返します。

> [!NOTE]
> このメソッドは最上位のコンテキストに限定されます。`<iframe>` 要素で呼び出された場合、効果なく解決されます。

## 構文

```js-nolint
store(credentials)
```

### 引数

- `credentials`
  - : 有効な {{domxref("Credential")}} インスタンスです。

### 返値

{{jsxref("Promise")}} で、 `undefined` に解決します。

### 例外

- `NotAllowedError` {{domxref("DOMException")}}
  - : 操作対象の現在の資格情報と同じ種類の資格情報が存在する場合に発生します。

## 例

### 認証成功時のパスワード資格情報の保存

このコードは、ユーザーがサインアップまたはログインした後、サーバーが資格情報を確認して正しいことを確認した後に実行されます。

```js-nolint
// ブラウザーがパスワード資格情報（および資格情報管理 API）に対応しているか調べる
if ("PasswordCredential" in window) {
  let credential = new PasswordCredential({
    id: "example-username",
    name: "Carina Anand", // ログインの場合、名前はサーバーによって決まる
    password: "correct horse battery staple",
  });

  navigator.credentials.store(credential).then(
    () => {
      console.info("ユーザーエージェントの資格情報マネージャーに保存される資格情報。");
    },
    (err) => {
      console.error("資格情報の保存中にエラーが発生しました: ", err);
    },
  );
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
