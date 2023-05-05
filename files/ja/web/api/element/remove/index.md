---
title: Element.remove()
slug: Web/API/Element/remove
---

{{APIRef("DOM")}}

**`Element.remove()`** は所属するツリーから要素を削除します。

## 構文

```js
remove()
```

## 例

### `remove()` の使用

```html
<div id="div-01">Here is div-01</div>
<div id="div-02">Here is div-02</div>
<div id="div-03">Here is div-03</div>
```

```js
var el = document.getElementById('div-02');
el.remove(); // 'div-02' の id を持った div を削除
```

### `Element.remove()` はスコープ化に非対応

`remove()` メソッドは `with` 文によるスコープ化に対応していません。 詳細は {{jsxref("Symbol.unscopables")}} を参照してください。

```js
with(node) {
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
