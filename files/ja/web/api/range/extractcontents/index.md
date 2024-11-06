---
title: "Range: extractContents() メソッド"
short-title: extractContents()
slug: Web/API/Range/extractContents
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

**`Range.extractContents()`** は {{ domxref("Range") }} の内容をこの文書ツリーから {{ domxref("DocumentFragment") }} へ移動させます。

DOM Events を使用して追加したイベントリスナーは、抽出時に維持されません。HTML 属性のイベントは、{{domxref("Node.cloneNode()")}} メソッドの場合と同様に維持または複製されます。HTML の `id` 属性も複製されるため、部分的に選択されたノードが抽出され文書に追加された場合、無効な文書になる可能性があります。

部分的に選択されたノードは、文書フラグメントを有効にするために必要な親タグを含めて複製されます。

## 構文

```js-nolint
extractContents()
```

### 引数

なし。

### 返値

{{ domxref("DocumentFragment") }} オブジェクトです。

## 例

### 基本的な例

```js
const range = document.createRange();
range.selectNode(document.getElementsByTagName("div").item(0));
const documentFragment = range.extractContents();
document.body.appendChild(documentFragment);
```

### コンテナー間でアイテムを移動

この例では、 2 つのコンテナー間でアイテムを移動させます。 1 つ以上のアイテムを選択し
をクリックすると、反対側のコンテナーに移動されます。

#### HTML

```html
<p id="list1">123456</p>
<button id="swap">選択されたアイテムを入れ替え</button>
<p id="list2">abcdef</p>
```

#### CSS

```css
body {
  pointer-events: none;
}

p {
  border: 1px solid;
  font-size: 2em;
  padding: 0.3em;
}

button {
  font-size: 1.2em;
  padding: 0.5em;
  pointer-events: auto;
}
```

#### JavaScript

```js
const list1 = document.getElementById("list1");
const list2 = document.getElementById("list2");
const button = document.getElementById("swap");

button.addEventListener("click", (e) => {
  selection = window.getSelection();

  for (let i = 0; i < selection.rangeCount; i++) {
    const range = selection.getRangeAt(i);

    if (
      range.commonAncestorContainer === list1 ||
      range.commonAncestorContainer.parentNode === list1
    ) {
      const documentFragment = range.extractContents();
      list2.appendChild(documentFragment);
    } else if (
      range.commonAncestorContainer === list2 ||
      range.commonAncestorContainer.parentNode === list2
    ) {
      const documentFragment = range.extractContents();
      list1.appendChild(documentFragment);
    }
  }
});
```

#### 結果

{{EmbedLiveSample("Moving_items_between_containers", 700, 300)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [DOM インターフェイス索引](/ja/docs/Web/API/Document_Object_Model)
