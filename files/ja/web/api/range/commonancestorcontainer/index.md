---
title: "Range: commonAncestorContainer プロパティ"
short-title: commonAncestorContainer
slug: Web/API/Range/commonAncestorContainer
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

**`Range.commonAncestorContainer`** は読み取り専用のプロパティで、この {{domxref("Range")}} の両方の[境界点](https://www.w3.org/TR/DOM-Level-2-Traversal-Range/ranges.html#Level-2-Range-Position-h3)を含む、最も深い — または文書ツリー内で最も遠い — ノード ({{domxref("Node")}}) を返します。つまり、{{domxref("Range.startContainer")}} と {{domxref("Range.endContainer")}} 両方が同じノードを参照する場合は、このノードは**共通の祖先コンテナー**です。

`Range` は連続している必要はなく、ノードを部分的に選択する場合もあり、これは `Range` を囲っている `Node` を見つけるときに便利な方法です。

このプロパティは読み取り専用です。 `Node` の共通の祖先コンテナーを変更するには、 `Range` の開始位置と終了位置を設定するために利用できるメソッド、例えば {{domxref("Range.setStart()")}} と {{domxref("Range.setEnd()")}} を使用することを検討してください。

## 値

{{domxref("Node")}} オブジェクトです。

## 例

この例では、リスト上の {{domxref("Element/pointerup_event", "pointerup")}} イベントを取り扱うためイベントリスナーを作ります。このリスナーは選択したテキストの共通の祖先を取得して、それらを強調するアニメーションを起動します。

### HTML

```html
<ul>
  <li>
    Strings
    <ul>
      <li>Cello</li>
      <li>
        Violin
        <ul>
          <li>First Chair</li>
          <li>Second Chair</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>
    Woodwinds
    <ul>
      <li>Clarinet</li>
      <li>Oboe</li>
    </ul>
  </li>
</ul>
```

### CSS

以下で作成した `.highlight` クラスは、フェードするアウトラインを動かすために一連の {{cssxref("@keyframes")}} を使用します。

```css
.highlight {
  animation: highlight linear 1s;
}

@keyframes highlight {
  from {
    outline: 1px solid #f00f;
  }
  to {
    outline: 1px solid #f000;
  }
}
```

```css hidden
body {
  padding: 1px;
}
```

### JavaScript

```js
document.addEventListener("pointerup", (e) => {
  const selection = window.getSelection();

  if (selection.type === "Range") {
    for (let i = 0; i < selection.rangeCount; i++) {
      const range = selection.getRangeAt(i);
      playAnimation(range.commonAncestorContainer);
    }
  }
});

function playAnimation(el) {
  if (el.nodeType === Node.TEXT_NODE) {
    el = el.parentNode;
  }

  el.classList.remove("highlight");
  setTimeout(() => {
    el.classList.add("highlight");
  }, 0);
}
```

### 結果

{{EmbedLiveSample("Examples", 700, 190)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [DOM インターフェイス索引](/ja/docs/Web/API/Document_Object_Model)
