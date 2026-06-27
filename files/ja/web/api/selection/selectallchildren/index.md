---
title: "Selection: selectAllChildren() メソッド"
short-title: selectAllChildren()
slug: Web/API/Selection/selectAllChildren
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{ ApiRef("DOM") }}

**`Selection.selectAllChildren()`** メソッドは、指定されたノードのすべての子ノードを選択範囲に追加します。それまでの選択範囲は失われます。

## 構文

```js-nolint
selectAllChildren(parentNode)
```

### 引数

- `parentNode`
  - : `parentNode` のすべての子要素が選択されます。`parentNode` 自体は選択対象には含まれません。

### 返値

なし ({{jsxref("undefined")}})。

## 例

### HTML

```html
<main>
  <button>フッターを選択</button>
  <p>私のウェブサイトへようこそ。</p>
  <p>ご来訪をお楽しみいただければ幸いです。</p>
</main>
<footer>
  <address>webmaster@example.com</address>
  <p>© 2019</p>
</footer>
```

### JavaScript

```js
const button = document.querySelector("button");
const footer = document.querySelector("footer");

button.addEventListener("click", (e) => {
  window.getSelection().selectAllChildren(footer);
});
```

### 結果

{{EmbedLiveSample("Examples", 700, 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先のインターフェイスである {{domxref("Selection")}}
