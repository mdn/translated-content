---
title: "InputDeviceCapabilities: firesTouchEvents プロパティ"
short-title: firesTouchEvents
slug: Web/API/InputDeviceCapabilities/firesTouchEvents
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef}}{{SeeCompatTable}}

**`InputDeviceCapabilities.firesTouchEvents`** は読み取り専用プロパティで、機器がタッチイベントを配信されるかどうかを示す論理値を返します。

このプロパティを使用して、すでにタッチイベントハンドラーによって処理されている可能性のあるアクションを表すマウスイベントを検出することができます。これは必ずしも機器がタッチ画面であることを意味しているわけではありません。例えば、スタイラスやマウス機器は通常、モバイルブラウザー上でタッチイベントを生成します。

## 構文

```js-nolint
const boolean = InputDeviceCapabilities.firesTouchEvents
```

### 返値

論理値 ({{jsxref('Boolean')}}) です。

## 例

```js
myButton.addEventListener("mousedown", (e) => {
  if (!e.sourceCapabilities.firesTouchEvents) myButton.classList.add("pressed");
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
