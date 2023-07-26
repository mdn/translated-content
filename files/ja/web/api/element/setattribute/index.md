---
title: "Element: setAttribute() メソッド"
short-title: setAttribute()
slug: Web/API/Element/setAttribute
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef("DOM")}}

指定された要素の属性の値を設定します。属性が既に存在する場合は値が更新され、そうでない場合は指定された名前と値で新しい属性が追加されます。

属性の現在の値を取得するには {{domxref("Element.getAttribute", "getAttribute()")}} を、属性を削除するには {{domxref("Element.removeAttribute", "removeAttribute()")}} を呼び出します。

## 構文

```js-nolint
setAttribute(name, value)
```

### 引数

- `name`
  - : 値を設定する属性名を指定する文字列です。HTML 文書内の HTML 要素で `setAttribute()` を呼び出すと、属性名は自動的にすべて小文字に変換されます。
- `value`
  - : 属性に割り当てる値を含む文字列です。文字列以外の値が指定された場合は、自動的に文字列に変換されます。

論理属性は要素に存在すれば `true` とみなされます。`value` には、空文字列または属性名を、前後にホワイトスペースを置かずに指定してください。実践的ななデモは以下の[例](#例)を参照してください。

指定された `value` は文字列に変換されるため、`null` を指定しても必ずしも期待通りになるとは限りません。属性を削除したり、その値を [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) に設定する代わりに、属性の値を文字列 `"null"` に設定します。属性を削除したい場合は、{{domxref("Element.removeAttribute", "removeAttribute()")}}を呼び出してください。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `InvalidCharacterError` {{domxref("DOMException")}}
  - : 指定された属性 `name` に、属性名として無効な文字が 1 文字以上含まれています。

## 例

次の例では、`setAttribute()` を使用して {{HTMLElement("button")}} に属性を設定しています。

### HTML

```html
<button>Hello World</button>
```

```css hidden
button {
  height: 30px;
  width: 100px;
  margin: 1em;
}
```

### JavaScript

```js
const button = document.querySelector("button");

button.setAttribute("name", "helloButton");
button.setAttribute("disabled", "");
```

### 結果

{{ EmbedLiveSample('Examples', '300', '50') }}

これは 2 つのことを示しています。

- 最初の `setAttribute()` の呼び出しでは、`name` 属性の値を "helloButton" に変更しています。
  これはブラウザーのページインスペクター ([Chrome](https://developer.chrome.com/docs/devtools/dom/properties/), [Edge](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/css/inspect),
  [Firefox](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/open_the_inspector/index.html), [Safari](https://support.apple.com/en-us/guide/safari-developer/welcome/mac)) を使用すると確認することができます。
- `disabled` のような論理属性の値を設定するには、任意の値を指定することができます。
  推奨される値は空の文字列か属性名です。
  重要なことは、属性が存在する場合、実際の値に関係なく、その値は `true` とみなされるということです。
  属性が存在しない場合、その値は `false` となります。`disabled` 属性の値を空文字列 (`""`) に設定することで、`disabled` を `true` に設定することになり、その結果ボタンは無効になります。

{{DOMAttributeMethods}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

### Gecko のメモ

特定の属性、特に XUL の `value` を変更するために `setAttribute()` を使用すると、属性が既定値を指定するため、矛盾した動作をします。現在の値にアクセスしたり変更したりするには、プロパティを使用する必要があります。例えば、`Element.value` を `Element.setAttribute()` の代わりに使用してください。
