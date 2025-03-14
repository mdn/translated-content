---
title: "EditContext: updateCharacterBounds() メソッド"
slug: Web/API/EditContext/updateCharacterBounds
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

{{domxref("EditContext")}} インターフェイスの **`EditContext.updateCharacterBounds()`** メソッドは、オペレーティングシステムに `EditContext` オブジェクト内の各文字の位置と大きさを知らせるため、 {{domxref("EditContext.characterboundsupdate_event", "characterboundsupdate")}} イベントへの応答として呼び出すべきです。

`updateCharacterBounds()` メソッドを呼び出す必要があるのは、`characterboundsupdate` イベントのみです。

文字の境界の情報は、{{glossary("Input Method Editor", "インプットメソッドエディター")}} (IME) を正しく配置するため、オペレーティングシステムが必要に応じて使用します。これは、`<canvas>` 要素にテキストを描画するときなど、オペレーティングシステムが文字の位置と大きさを自動的に認識できない状況で、特に重要です。

### IME ウィンドウの位置が急に飛ばないようにする

`characterboundsupdate` イベント内で同期的に文字の境界を計算して `updateCharacterBounds` を呼ぶことで、オペレーティングシステムが IME ウィンドウを表示する際に必要な情報を確実に持っているようにします。イベントハンドラー内で `updateCharacterBounds()` を同期的に呼ばない場合、ユーザーは IME ウィンドウが正しい場所に移動する前に間違った場所に表示される様子を見る可能性があります。

### どの文字を含めるか

`updateCharacterBounds()` メソッドはオペレーティングシステムが情報を必要としていることを知らせてきた時にのみ、そして現在の IME による変換に含まれている文字についてのみ呼び出すべきです。

`characterboundsupdate` イベントハンドラーに渡されるイベントオブジェクトには、現在変換されている文字の範囲を表す `rangeStart` および `rangeEnd` プロパティがあります。`updateCharacterBounds()` はこの範囲内の文字についてのみ呼び出すべきです。

## 構文

```js-nolint
updateCharacterBounds(rangeStart, characterBounds)
```

### 引数

- `rangeStart`
  - : 文字の境界を提供するテキストの範囲の始点を表す数値です。
- `characterBounds`
  - : 各文字の境界を表す {{domxref("DOMRect")}} オブジェクトが格納された {{jsxref("Array")}} です。

### 例外

- 渡された引数が 2 個未満の場合、`TypeError` {{domxref("DOMException")}} が投げられます。
- `rangeStart` が数値でないか、`characterBounds` が反復可能でない場合、`TypeError` {{domxref("DOMException")}} が投げられます。

## 例

### 必要に応じて文字の境界を更新する

この例は、`updateCharacterBounds` メソッドを用いて、オペレーティングシステムが情報を必要としていることを知らせてきた時、`<canvas>` 要素の `EditContext` 内の各文字の境界を更新する方法を示します。この例における `characterboundsupdate` イベントリスナーコールバックは、IME ウィンドウやその他のプラットフォーム固有の UI を用いてテキストを変換しているときのみ呼ばれることに注意してください。

```html
<canvas id="editor-canvas"></canvas>
```

```js
const FONT_SIZE = 40;
const FONT = `${FONT_SIZE}px Arial`;

const canvas = document.getElementById("editor-canvas");
const ctx = canvas.getContext("2d");
ctx.font = FONT;

const editContext = new EditContext();
canvas.editContext = editContext;

function computeCharacterBound(offset) {
  // 文字列の先頭から対象の文字までの幅を測定します。
  const widthBeforeChar = ctx.measureText(
    editContext.text.substring(0, offset),
  ).width;

  // 対象の文字の幅を測定します。
  const charWidth = ctx.measureText(editContext.text[offset]).width;

  const charX = canvas.offsetLeft + widthBeforeChar;
  const charY = canvas.offsetTop;

  // 文字の境界を表す DOMRect を返します。
  return DOMRect.fromRect({
    x: charX,
    y: charY - FONT_SIZE,
    width: charWidth,
    height: FONT_SIZE,
  });
}

editContext.addEventListener("characterboundsupdate", (e) => {
  const charBounds = [];
  for (let offset = e.rangeStart; offset < e.rangeEnd; offset++) {
    charBounds.push(computeCharacterBound(offset));
  }

  editContext.updateCharacterBounds(e.rangeStart, charBounds);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 属する {{DOMxRef("EditContext")}} インターフェイス
