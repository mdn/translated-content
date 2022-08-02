---
title: Element.toggleAttribute()
slug: Web/API/Element/toggleAttribute
tags:
  - API
  - Element
  - メソッド
  - リファレンス
browser-compat: api.Element.toggleAttribute
translation_of: Web/API/Element/toggleAttribute
---
{{APIRef("DOM")}}

**`toggleAttribute()`** は {{domxref("Element")}} インターフェイスのメソッドで、この要素に対して論理属性をトグル切り替えします（存在する場合は取り除き、存在しない場合は追加します）。

## 構文

```js
toggleAttribute(name);
toggleAttribute(name, force);
```

### 引数

- `name`
  - : {{domxref("DOMString")}} で、トグル切り替えしたい属性の名前を指定します。 HTML 文書内の HTML 要素に対して `toggleAttribute()` が呼び出されるとばれると、属性名は自動的に全て小文字に変換されます。
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
<input value="text">
<button>toggleAttribute("disabled")</button>
```

### JavaScript

```js
var button = document.querySelector("button");
var input = document.querySelector("input");

button.addEventListener("click", function(){
  input.toggleAttribute("disabled");
});
```

### 結果

{{ EmbedLiveSample('Example', '300', '50') }}

{{DOMAttributeMethods}}

## ポリフィル

```js
if (!Element.prototype.toggleAttribute) {
  Element.prototype.toggleAttribute = function(name, force) {
    if(force !== void 0) force = !!force

    if (this.hasAttribute(name)) {
      if (force) return true;

      this.removeAttribute(name);
      return false;
    }
    if (force === false) return false;

    this.setAttribute(name, "");
    return true;
  };
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
