---
title: HTMLFormElement.reset()
slug: Web/API/HTMLFormElement/reset
l10n:
  sourceCommit: 8573240024adc1eef906b4b2df35567144fd733e
---

{{APIRef("HTML DOM")}}

**`HTMLFormElement.reset()`** メソッドは、フォーム要素の既定値を復元します。このメソッドはフォームの [`<input type="reset">`](/ja/docs/Web/HTML/Element/input/reset) コントロールをクリックするのと同じことを行います。

もしあるフォームコントロール（リセットボタンなど）が _reset_ という形の名前か ID を持っていると、フォームの reset メソッドを隠してしまいます。これは `disabled` のような、入力の他の属性をリセットするものではありません。

もし {{domxref("Element.setAttribute", "setAttribute()")}} を呼び出して特定の属性の値を設定した場合、その後に `reset()` を呼び出してもその属性は既定値にリセットされず、代わりに {{domxref("Element.setAttribute", "setAttribute()")}} を呼び出して設定した値を維持することに注意ください。

## 構文

```js-nolint
reset()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
document.getElementById('myform').reset();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
