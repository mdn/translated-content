---
title: Document.readyState
slug: Web/API/Document/readyState
---

{{APIRef("DOM")}}

**`Document.readyState`** プロパティは {{domxref("document")}} の読み込み状態を記述します。

このプロパティの値が変化すると、 {{domxref("Document/readystatechange_event", "readystatechange")}} イベントが {{domxref("document")}} オブジェクトに発行されます。

### 値

文書の `readyState` は次のうちのいずれかになります。

- `loading`
  - : この文書 ({{domxref("document")}}) はまだ読み込み中です。
- `interactive`
  - : 文書の読み込みが完了し、文書の解釈はできたが、スクリプト、画像、スタイルシート、フレームなどのサブリソースはまだ読み込み中である。
- `complete`
  - : 文書とすべてのサブリソースの読み込みが完了しました。この状態は {{domxref("Window/load_event", "load")}} イベントが発行されようとしていることを示しています。

## 例

### さまざまな準備状態

```js
switch (document.readyState) {
  case "loading":
    // この文書はまだ読み込み中。
    break;
  case "interactive":
    // この文書は読み込みが終了した。 DOM 要素にアクセスできるようになった。
    // しかし、画像、スタイルシート、フレームなどの副リソースはまだ読み込み中。
    const span = document.createElement("span");
    span.textContent = "A <span> element.";
    document.body.appendChild(span);
    break;
  case "complete":
    // ページが完全に読み込み完了。
    console.log(
      `最初の CSS ルール: ${document.styleSheets[0].cssRules[0].cssText}`,
    );
    break;
}
```

### readystatechange を DOMContentLoaded イベントの代替とする

```js
// DOMContentLoaded イベントの代替
document.onreadystatechange = function () {
  if (document.readyState === "interactive") {
    initApplication();
  }
};
```

### readystatechange を load イベントの代替とする

```js
// load イベントの代替
document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    initApplication();
  }
};
```

### readystatechange を DOM の挿入や変更のイベントリスナーとして DOMContentLoaded の前に使用

```js
document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "interactive") {
    initLoader();
  } else if (event.target.readyState === "complete") {
    initApp();
  }
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Document/readystatechange_event", "readystatechange")}} イベント
- {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}} イベント
- {{domxref("Window/load_event", "load")}} イベント
