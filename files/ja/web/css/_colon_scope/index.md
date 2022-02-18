---
title: ':scope'
slug: Web/CSS/:scope
tags:
  - ':scope'
  - CSS
  - レイアウト
  - 擬似クラス
  - リファレンス
  - スコープ付き要素
  - セレクター
  - ウェブ
browser-compat: css.selectors.scope
translation_of: Web/CSS/:scope
---
{{CSSRef}}

**`:scope`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)で、セレクターが選択する対象の参照点である要素を表します。

```css
/* スコープとなる要素を選択 */
:scope {
  background-color: lime;
}
```

現在、スタイルシートで使用したときは、現時点ではスコープ付きの要素を明確に確立する方法がないため、 `:scope` は {{cssxref(":root")}} と同じです。 DOM API ({{domxref("Element.querySelector", "querySelector()")}}, {{domxref("Element.querySelectorAll", "querySelectorAll()")}}, {{domxref("Element.matches", "matches()")}}, {{domxref("Element.closest()")}} など) で使用したときは、 `:scope` はメソッドを呼び出した要素を選択します。

## 構文

{{csssyntax}}

## 例

### ID の一致

この例では、 {{domxref("Element.matches()")}} メソッドから `:scope` を使用して呼び出される要素を選択する方法を紹介します。

#### JavaScript

```js
let paragraph = document.getElementById("para");
let output = document.getElementById("output");

if (paragraph.matches(":scope")) {
  output.innerText = "はい、この要素は自分自身のスコープ内にあります！";
}
```

#### HTML

```html
<p id="para">
  これは段落です。面白い段落ではありません。すみません。
</p>
<p id="output"></p>
```

#### 結果

{{ EmbedLiveSample('Identity_match') }}

### 直接の子

`:scope` 擬似クラスが有用だと示されるのは、すでに受け取っている {{domxref("Element")}} の直接の子を取得する必要がある場合です。

#### JavaScript

```js
var context = document.getElementById('context');
var selected = context.querySelectorAll(':scope > div');

document.getElementById('results').innerHTML = Array.prototype.map.call(selected, function (element) {
    return '#' + element.getAttribute('id');
}).join(', ');
```

#### HTML

```html
<div id="context">
    <div id="element-1">
        <div id="element-1.1"></div>
        <div id="element-1.2"></div>
    </div>
    <div id="element-2">
        <div id="element-2.1"></div>
    </div>
</div>
<p>
    Selected elements ids :
    <span id="results"></span>
</p>
```

#### 結果

{{ EmbedLiveSample('Direct_children') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref(":root")}} [擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)
- [セレクターを使用した DOM 要素の特定](/ja/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
- {{domxref("Element.querySelector()")}} および {{domxref("Element.querySelectorAll()")}}
- {{domxref("Document.querySelector()")}} および {{domxref("Document.querySelectorAll()")}}
- {{domxref("DocumentFragment.querySelector()")}} および {{domxref("DocumentFragment.querySelectorAll()")}}
