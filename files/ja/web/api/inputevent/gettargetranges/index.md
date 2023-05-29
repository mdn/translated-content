---
title: InputEvent.getTargetRanges()
slug: Web/API/InputEvent/getTargetRanges
l10n:
  sourceCommit: b7556b71e1fc3e89057671b372871e9f33d3f0b8
---

{{APIRef("UI Events")}}

**`getTargetRanges()`** は {{domxref("InputEvent")}} インターフェイスのメソッドで、入力イベントが取り消されない限り DOM の変更に影響される静的範囲を配列で返します。

これにより、ウェブアプリケーションは、ブラウザーが DOM ツリーを変更する前にテキスト編集の動作を上書きすることができ、パフォーマンスを向上させるために入力イベントの制御をより強化することができます。

## 構文

```js-nolint
getTargetRanges()
```

### 引数

なし。

### 返値

{{domxref("StaticRange")}} オブジェクトの配列です。

## 例

### 機能検出

以下の関数は、`beforeinput`、つまり `getTargetRanges` に対応している場合に true を返します。

```js
function isBeforeInputEventAvailable() {
  return window.InputEvent && typeof InputEvent.prototype.getTargetRanges === "function";
}
```

### 基本的な使い方

以下の例では、 `contentitable` 要素を選択して、 [`beforeinput`](/ja/docs/Web/API/HTMLElement/beforeinput_event) イベントを利用して `getTargetRanges()` の結果をログ出力しています。

```js
const editableElem = document.querySelector('[contenteditable="true"]');

editableElem.addEventListener('beforeinput', (e) => {
    const targetRanges = e.getTargetRanges();
    console.log(targetRanges);
})
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
