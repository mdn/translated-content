---
title: "HTMLGeolocationElement: promptaction イベント"
short-title: promptaction
slug: Web/API/HTMLGeolocationElement/promptaction_event
l10n:
  sourceCommit: fce59e0706ab0114d9968c23722dccfacaebf998
---

{{APIRef("HTML DOM")}}

**`promptaction`** は {{domxref("HTMLGeolocationElement")}} インターフェイスのイベントで、ユーザーが `<geolocation>` 要素をアクティブにし、表示されるダイアログから `geolocation` 権限を許可または拒否するオプションを選択するたびに発生します。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js-nolint
addEventListener("promptaction", (event) => { })

onpromptaction = (event) => { }
```

## イベント型

{{domxref("Event")}} です。

## 例

### `promptaction` を使用してユーザーの許可の選択に応答

[埋め込み地図](https://mdn.github.io/dom-examples/geolocation-element/embedded-map/)の例（[ソースコード](https://github.com/mdn/dom-examples/tree/main/geolocation-element/embedded-map)）では、`promptaction` イベントハンドラーを使用して、`<geolocation>` 権限プロンプトでユーザーが選択を行った際の応答を行います。

```js
geo.addEventListener("promptaction", notifyUserGrantPermission);
```

`notifyUserGrantPermission()` 関数では、{{domxref("HTMLGeolocationElement.permissionStatus")}} プロパティを使用して、権限の状態が `denied` または `prompt` かどうかを調べます。該当する場合は、ユーザーに再度ボタンを押して位置情報の許可を求めるよう促します。既に許可が与えられている場合は、この確認は必要ありません。

```js
function notifyUserGrantPermission() {
  if (geo.permissionStatus === "denied" || geo.permissionStatus === "prompt") {
    statusElem.textContent =
      "再度「位置情報を使用」ボタンを押して、このサイトへの位置情報の許可を行うことができるようにしてください。";
  }
}
```

この例の完全な手順を追った解説については、{{domxref("HTMLGeolocationElement")}} のメインページを参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{htmlelement("geolocation")}} 要素
