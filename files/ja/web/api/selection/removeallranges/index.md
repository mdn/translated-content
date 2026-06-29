---
title: "Selection: removeAllRanges() メソッド"
short-title: removeAllRanges()
slug: Web/API/Selection/removeAllRanges
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{ ApiRef("DOM") }}

**`Selection.removeAllRanges()`** メソッドは、選択範囲からすべての範囲を削除し、{{domxref("Selection.anchorNode", "anchorNode")}} および {{domxref("Selection.focusNode","focusNode")}} プロパティの値を `null` に設定し、何も選択されていない状態にします。このメソッドが呼び出されると、文書で {{domxref("Document/selectionchange_event", "selectionchange")}} イベントが発生します。

> [!NOTE]
> このメソッドは、{{domxref("Selection.empty()")}} メソッドの別名です。

## 構文

```js-nolint
removeAllRanges()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

この例では、ページ上で何かが選択されたとき、あるいは選択されていないときにメッセージを表示します。これは、文書上で {{domxref("Document/selectionchange_event", "selectionchange")}} イベントを待ち受けることで実現されます。また、`Selection.removeAllRanges()` を呼び出して選択範囲をすべてクリアするボタンもあります。これが実行されると、選択状態が変更され、メッセージが更新されます。

```html
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet
  urna eget sapien venenatis, eget facilisis diam mattis.
</p>
<button>選択を解除</button>
<pre id="log"></pre>
```

```js
const log = document.getElementById("log");

// 選択オブジェクトは、文書に紐づけられたシングルトン
const selection = document.getSelection();

// 選択があるかどうかをログ出力
function newSelectionHandler() {
  if (selection.rangeCount !== 0) {
    log.textContent = "テキストが選択されました。";
  } else {
    log.textContent = "この文書では選択範囲がありません。";
  }
}

document.addEventListener("selectionchange", () => {
  newSelectionHandler();
});

newSelectionHandler();

// 「選択範囲を解除」ボタン
const button = document.querySelector("button");
button.addEventListener("click", () => {
  selection.removeAllRanges();
});
```

{{EmbedLiveSample("Examples", "100%", "200px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Selection.empty()")}}
- {{domxref("Document/selectionchange_event", "selectionchange")}}
