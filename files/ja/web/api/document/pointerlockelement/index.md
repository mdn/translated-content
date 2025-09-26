---
title: "Document: pointerLockElement プロパティ"
short-title: pointerLockElement
slug: Web/API/Document/pointerLockElement
l10n:
  sourceCommit: c99ff93a1b71e7d664509fdd3e0c168920be967a
---

{{APIRef("Pointer Lock API")}}

**`pointerLockElement`** は {{domxref("Document")}} インターフェイスの読み取り専用プロパティで、この要素をポインターがロックされている間のマウスイベントの対象として設定します。ロック待ち状態の場合、ポインターがロックされていない場合、対象が他の文書にある場合は `null` になります。

## 値

{{domxref("Element")}} または `null`。

## 例

### ポインターロック状態をチェック

この例には {{htmlelement("div")}} 要素があり、その中に {{htmlelement("button")}} があります。ボタンをクリックすると `<div>` のポインターロックをリクエストします。

この例では {{domxref("Document/pointerlockchange_event", "pointerlockchange")}} イベントも待ち受けます。このイベントが発行されると、イベントハンドラーは文書内の要素がポインターロックを保有している場合は "Lock" ボタンを無効化し、そうでない場合はボタンを有効化します。

この例では、"Lock" ボタンをクリックするとポインターがロックされ、ボタンは無効になります。（例えば <kbd>Escape</kbd> キーを押して）ポインターロックを解除すると、ボタンは再び有効になります。

#### HTML

```html
<div id="container">
  <button id="lock">Lock</button>
</div>
```

#### CSS

```css
div {
  height: 100px;
  width: 200px;
  border: 2px solid blue;
}
```

#### JavaScript

```js
const lock = document.querySelector("#lock");
const container = document.querySelector("#container");

lock.addEventListener("click", () => {
  container.requestPointerLock();
});

document.addEventListener("pointerlockchange", () => {
  const locked = document.pointerLockElement;
  lock.disabled = Boolean(locked);
});
```

#### 結果

{{EmbedLiveSample("Checking pointer lock status")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{ domxref("Document.exitPointerLock()") }}
- {{ domxref("Element.requestPointerLock()") }}
- [ポインターロック](/ja/docs/Web/API/Pointer_Lock_API)
