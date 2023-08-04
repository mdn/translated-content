---
title: "Element: remove() メソッド"
short-title: remove()
slug: Web/API/Element/remove
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef("DOM")}}

**`Element.remove()`** は DOM から要素を削除します。

## 構文

```js-nolint
remove()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

### `remove()` の使用

```html
<div id="div-01">Here is div-01</div>
<div id="div-02">Here is div-02</div>
<div id="div-03">Here is div-03</div>
```

```js
const element = document.getElementById("div-02");
element.remove(); // 'div-02' の id を持った div を削除
```

### `Element.remove()` はスコープ化に非対応

`remove()` メソッドは `with` 文によるスコープ化に対応していません。 詳細は {{jsxref("Symbol.unscopables")}} を参照してください。

```js
with (node) {
  remove();
}
// ReferenceError: remove is not defined
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ポリフィル](https://github.com/chenzhenxi/element-remove)
