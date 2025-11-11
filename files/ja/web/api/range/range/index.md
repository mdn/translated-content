---
title: "Range: Range() コンストラクター"
short-title: Range()
slug: Web/API/Range/Range
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ APIRef("DOM") }}

**`Range()`** コンストラクターは、グローバルな {{domxref("Document")}} オブジェクトを始点および終点とする、新しく作成された {{domxref("Range")}} オブジェクトを返します。

## 構文

```js-nolint
new Range()
```

### 引数

なし。

## 例

この例では、 `Range()` コンストラクターで新しい範囲を作成し、 {{domxref("Range.setStartBefore()")}} メソッドと {{domxref("Range.setEndAfter()")}} メソッドを使用してその開始位置と終了位置を設定します。そして、 {{domxref("window.getSelection()")}} と {{domxref("Selection.addRange()")}} を使用して範囲を選択します。

### HTML

```html
<p>First paragraph.</p>
<p>Second paragraph.</p>
<p>Third paragraph.</p>
<p>Fourth paragraph.</p>
```

### JavaScript

```js
const paragraphs = document.querySelectorAll("p");

// 新しい範囲を作成
const range = new Range();

// 範囲を 2 つ目の段落から開始
range.setStartBefore(paragraphs[1]);

// 範囲を 3 つ目の段落で終了
range.setEndAfter(paragraphs[2]);

// window の選択範囲を取得
const selection = window.getSelection();

// window の選択範囲に範囲を追加
selection.addRange(range);
```

### 結果

{{EmbedLiveSample("Examples", 400, 210)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [DOM インターフェイス索引](/ja/docs/Web/API/Document_Object_Model)
- {{domxref("Document.createRange()")}}
