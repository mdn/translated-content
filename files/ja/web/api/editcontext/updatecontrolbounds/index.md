---
title: "EditContext: updateControlBounds() メソッド"
slug: Web/API/EditContext/updateControlBounds
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

{{domxref("EditContext")}} インターフェイスの **`EditContext.updateControlBounds()`** メソッドは、オペレーティングシステムに `EditContext` オブジェクトの編集可能なテキスト領域の位置と大きさを知らせるために使われます。

オペレーティングシステムに現在の編集可能な領域の境界を知らせるため、このメソッドを呼びます。`EditContext` を初期化する時と、ウェブページがリサイズされた時など編集可能な領域の境界が変わった時に毎回、このメソッドを呼ぶべきです。この境界は、{{glossary("Input Method Editor", "インプットメソッドエディター")}} (IME) ウィンドウなどのプラットフォーム固有の編集関係の UI を配置するために使用されます。

## 構文

```js-nolint
updateControlBounds(controlBounds)
```

### 引数

- `controlBounds`
  - : 新しいコントロール境界を表す {{domxref("DOMRect")}} オブジェクトです。

### 例外

- 引数が渡されない場合、`TypeError` {{domxref("DOMException")}} が投げられます。
- 渡された引数が {{domxref("DOMRect")}} でない場合、`TypeError` {{domxref("DOMException")}} が投げられます。

## 例

### エディターの初期化時とウィンドウのリサイズ時にコントロール境界を更新する

この例では、`updateControlBounds()` を用いてプラットフォームに編集可能な領域の位置を伝え続ける方法を示します。

```css
#editor {
  border: 1px solid black;
  height: 50vw;
  width: 50vh;
}
```

```html
<div id="editor"></div>
```

```js
const editorEl = document.getElementById("editor");
const editContext = new EditContext();
editorEl.editContext = editContext;

function updateControlBounds() {
  const editorBounds = editorEl.getBoundingClientRect();
  editContext.updateControlBounds(editorBounds);
  console.log(
    `Updated control bounds to ${editorBounds.x}, ${editorBounds.y}, ${editorBounds.width}, ${editorBounds.height}`,
  );
}

// コントロール領域を今更新します。
updateControlBounds();
// ページがリサイズされた時にも更新します。
window.addEventListener("resize", updateControlBounds);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 属する {{DOMxRef("EditContext")}} インターフェイス
