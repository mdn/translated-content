---
title: "HTMLGeolocationElement: validationstatuschange イベント"
short-title: validationstatuschange
slug: Web/API/HTMLGeolocationElement/validationstatuschange_event
l10n:
  sourceCommit: fce59e0706ab0114d9968c23722dccfacaebf998
---

{{APIRef("HTML DOM")}}

**`validationstatuschange`** は {{domxref("HTMLGeolocationElement")}} インターフェイスのイベントで、{{htmlelement("geolocation")}} 要素の {{domxref("HTMLGeolocationElement.isValid", "isValid")}} 値が変更されるたびに発生します。

これは、`<geolocation>` 要素に[ブロッカー](/ja/docs/Web/HTML/Reference/Elements/geolocation#geolocation_のブロック)が追加または除去された結果として発生します。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js-nolint
addEventListener("validationstatuschange", (event) => { })

onvalidationstatuschange = (event) => { }
```

## イベント型

{{domxref("Event")}} です。

## 例

### `validationstatuschange` を使用して無効な理由を報告

[埋め込み地図](https://mdn.github.io/dom-examples/geolocation-element/embedded-map/)の例（[ソースコード](https://github.com/mdn/dom-examples/tree/main/geolocation-element/embedded-map)）では、`validationstatuschange` イベントハンドラーを使用して、`<geolocation>` 要素が有効になったことを報告し、また無効にになった際はその無効の理由を報告します。

```js
geo.addEventListener("validationstatuschange", () => {
  if (geo.isValid) {
    reasonElem.textContent = `<geolocation> は有効です`;
  } else {
    reasonElem.textContent = `無効な理由: ${geo.invalidReason}`;
  }
});
```

有効性の状態が変化するたび、`<geolocation>` 要素が有効かどうかを {{domxref("HTMLGeolocationElement.isValid")}} を使用して調べ、有効の場合、その旨を確認するメッセージを `<p>` 要素のコンテンツテキストに表示します。`<geolocation>` 要素が無効な場合、{{domxref("HTMLGeolocationElement.invalidReason")}} を `<p>` 要素のコンテンツテキストに表示します。

この例の完全な手順を追った解説については、{{domxref("HTMLGeolocationElement")}} のメインページを参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{htmlelement("geolocation")}} 要素
