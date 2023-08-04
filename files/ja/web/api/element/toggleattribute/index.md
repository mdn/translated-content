---
title: "Element: toggleAttribute() メソッド"
short-title: toggleAttribute()
slug: Web/API/Element/toggleAttribute
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef("DOM")}}

**`toggleAttribute()`** は {{domxref("Element")}} インターフェイスのメソッドで、この要素に対して論理属性をトグル切り替えします（存在する場合は取り除き、存在しない場合は追加します）。

## 構文

```js-nolint
toggleAttribute(name)
toggleAttribute(name, force)
```

### 引数

- `name`
  - : 文字列で、トグル切り替えしたい属性の名前を指定します。HTML 文書内の HTML 要素に対して `toggleAttribute()` が呼び出されるとばれると、属性名は自動的に全て小文字に変換されます。
- `force` {{optional_inline}}
  - : 論理値で、以下の効果があります。
    - 指定されなかった場合、 `toggleAttribute` メソッドは `name` という名前の属性を「トグル切り替え」します。 — 存在すれば取り除き、存在しなければ追加します。
    - true であった場合、 `toggleAttribute` メソッドは、 `name` という名前の属性を追加します。
    - false であった場合、 `toggleAttribute` メソッドは `name` という名前の属性を取り除きます。

### 返値

**`name`** という属性が存在する状態になれば `true`、そうでなければ `false` となります。

### 例外

- `InvalidCharacterError` {{domxref("DOMException")}}
  - : 指定された属性 `name` に、属性名として無効な文字が 1 文字以上含まれています。

## 例

次の例では、 `toggleAttribute()` を使って {{HTMLElement("input")}} の `disabled` 属性をトグル切り替えしています。

### HTML

```html
<input value="text" /> <button>toggleAttribute("disabled")</button>
```

### JavaScript

```js
const button = document.querySelector("button");
const input = document.querySelector("input");

button.addEventListener("click", () => {
  input.toggleAttribute("disabled");
});
```

### 結果

{{ EmbedLiveSample('Examples', '300', '50') }}

{{DOMAttributeMethods}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
