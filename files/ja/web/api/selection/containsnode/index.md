---
title: "Selection: containsNode() メソッド"
short-title: containsNode()
slug: Web/API/Selection/containsNode
l10n:
  sourceCommit: 7cd51a73ad94df604db79ccacbbe0513d0967650
---

{{ ApiRef("DOM") }}

**`Selection.containsNode()`** メソッドは、指定されたノードが選択範囲に含まれているかどうかを示します。

## 構文

```js-nolint
containsNode(node)
containsNode(node)
containsNode(node, partialContainment)
```

### 引数

- `node`
  - : 選択範囲内で検索対象となっているノード。
- `partialContainment` {{optional_inline}}
  - : `true` に設定されている場合、ノードの一部が選択範囲に含まれていると、`containsNode()` は `true` を返します。`false` に設定されている場合、ノード全体が選択範囲に含まれている場合にのみ、`containsNode()` は `true` を返します。指定がない場合は、デフォルト値の `false` が使用されます。

### 返値

指定されたノードが選択範囲に含まれている場合は `true` を返し、そうでない場合は `false` を返します。

## 例

### 選択範囲の検査

このスニペットは、body 要素内の要素が何か選択されているかを確認します。

```js
console.log(window.getSelection().containsNode(document.body, true));
```

### 隠された単語を見つける

この例では、秘密の単語を選択するとメッセージが表示されます。ここでは、{{domxref("EventTarget/addEventListener", "addEventListener()")}} を使用して、{{domxref("Document/selectionchange_event", "selectionchange")}} イベントが発生したかどうかを確認しています。

#### HTML

```html
<p>Can you find the secret word?</p>
<p>Hmm, where <span id="secret">SECRET</span> could it be?</p>
<p id="win" hidden>You found it!</p>
```

#### CSS

```css
#secret {
  color: transparent;
}
```

#### JavaScript

```js
const secret = document.getElementById("secret");
const win = document.getElementById("win");

// 選択の変更を待ち受け
document.addEventListener("selectionchange", () => {
  const selection = window.getSelection();
  const found = selection.containsNode(secret);

  win.toggleAttribute("hidden", !found);
});
```

#### 結果

{{EmbedLiveSample("Find_the_hidden_word")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先のインターフェイスである {{domxref("Selection")}}
