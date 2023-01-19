---
title: Response.redirected
slug: Web/API/Response/redirected
l10n:
  sourceCommit: e0e09b1df51489867f2e74c18586d168ba5e00d1
---

{{APIRef("Fetch")}}

**`redirected`** は {{domxref("Response")}} インターフェイスの読み取り専用プロパティで、このレスポンスがリダイレクトされたリクエストの結果であるかどうかを示します。

> **メモ:** redirected に頼ってリダイレクトをフィルタリングしていると、偽造されたリダイレクトによって、コンテンツが期待通りに動作しなくなることが簡単に起こります。
> その代わり、 {{domxref("fetch()")}} を呼び出すときにフィルタリングを行うべきです。
> これを行う例を示した[リダイレクトの禁止](#リダイレクトの禁止)を参照してください。

## 値

論理値で、レスポンスがリクエストがリダイレクトされたことを示す場合は `true` となります。

## 例

### リダイレクトの検出

レスポンスがリダイレクトされたものであるかどうかを調べるには、 {{domxref("Response")}} オブジェクトのこのフラグをチェックするだけです。
下記のコードでは、取得処理中にリダイレクトが発生した場合、要素にテキストメッセージが挿入されます。
ただし、下記の[リダイレクトの禁止](#リダイレクトの禁止)で記述しているように、予想外のリダイレクトが発生した場合に完全に拒否するほど安全ではないことに注意してください。

```js
fetch("awesome-picture.jpg")
  .then((response) => {
    const elem = document.getElementById("warning-message-box");
    elem.textContent = response.redirected ? "Unexpected redirect" : "";
    return response.blob();
  })
  .then((imageBlob) => {
    const imgObjectURL = URL.createObjectURL(imageBlob);
    document.getElementById("img-element-id").src = imgObjectURL;
  });
```

### リダイレクトの禁止

redirected を使用して手動でリダイレクトをフィルタリングすると、リダイレクトの偽造が可能になるため、代わりに {{domxref("fetch()")}} を呼び出す際に `init` 引数でリダイレクトモードを `"error"` に設定する必要があります、例えば次のようにします。

```js
fetch("awesome-picture.jpg", { redirect: "error" })
  .then((response) => response.blob())
  .then((imageBlob) => {
    const imgObjectURL = URL.createObjectURL(imageBlob);
    document.getElementById("img-element-id").src = imgObjectURL;
  });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [フェッチ API](/ja/docs/Web/API/Fetch_API)
- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/CORS)
- [HTTP](/ja/docs/Web/HTTP)
