---
title: "HTMLGeolocationElement: promptdismiss イベント"
short-title: promptdismiss
slug: Web/API/HTMLGeolocationElement/promptdismiss_event
l10n:
  sourceCommit: fce59e0706ab0114d9968c23722dccfacaebf998
---

{{APIRef("HTML DOM")}}

**`promptdismiss`** は {{domxref("HTMLGeolocationElement")}} インターフェイスのイベントで、ユーザーが `<geolocation>` 要素をアクティブ化し、結果として表示されるダイアログを「閉じる」ボタンまたは <kbd>Esc</kbd> キーを押すことで閉じたときに発生します。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js-nolint
addEventListener("promptdismiss", (event) => { })

onpromptdismiss = (event) => { }
```

## イベント型

{{domxref("Event")}} です。

## 例

### `promptdismiss` を使用して、ユーザーが許可を閉じたことに応答

[埋め込み地図](https://mdn.github.io/dom-examples/geolocation-element/embedded-map/)の例（[ソースコード](https://github.com/mdn/dom-examples/tree/main/geolocation-element/embedded-map)）では、`promptdismiss` イベントハンドラーを使用して、ユーザーが `<geolocation>` の権限プロンプトを閉じたことに応答します。

```js
geo.addEventListener("promptdismiss", notifyUserRetrySelection);
```

`notifyUserRetrySelection()` 関数では、ユーザーに再度ボタンを押して位置情報の許可を依頼します。

```js
function notifyUserRetrySelection() {
  statusElem.textContent =
    "再度「位置情報を使用」ボタンを押して、このサイトへの位置情報の許可を行うことができるようにしてください。";
}
```

この例の完全な手順を追った解説については、{{domxref("HTMLGeolocationElement")}} のメインページを参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{htmlelement("geolocation")}} 要素
