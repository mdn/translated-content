---
title: "DelegatedInkTrailPresenter: updateInkTrailStartPoint() メソッド"
short-title: updateInkTrailStartPoint()
slug: Web/API/DelegatedInkTrailPresenter/updateInkTrailStartPoint
l10n:
  sourceCommit: bcc977bc3e79a87edd64cd9ef977b515f63daa2c
---

{{APIRef("Ink API")}}{{SeeCompatTable}}

**`updateInkTrailStartPoint()`** は {{domxref("DelegatedInkTrailPresenter")}} インターフェイスのメソッドで、現在のフレームの最後の描画ポイントとして使用された {{domxref("PointerEvent")}} を示し、OS レベルのコンポジターが、次のポインターイベントが配信される前に、代理インクの軌跡を描画できるようにします。

## 構文

```js-nolint
updateInkTrailStartPoint(event, style)
```

### 引数

- `event` {{optional_inline}}
  - : {{domxref("PointerEvent")}} です。
- `style`
  - : トレイルスタイルを定義するオブジェクトで、次のプロパティが含まれています。
    - `color`
      - : 有効な CSS カラーコードを含む文字列 ({{jsxref("String")}}) で、プレゼンターがインクの軌跡のレンダリングに使用する色を示します。
    - `diameter`
      - : プレゼンターがインクの軌跡をレンダリングする際に使用する直径を表す数値です。

### 返値

`undefined` です。

### 例外

- `Error` {{domxref("DOMException")}}
  - : 次の場合、エラーが発生し、操作は中止されます。
    - `color` プロパティには、有効な CSS カラーコードが含まれていない。
    - `diameter` プロパティが数値ではないか、1 未満である。
    - {{domxref("DelegatedInkTrailPresenter.presentationArea", "presentationArea")}} 要素が、レンダリング前またはレンダリング中に文書から除去されている。

## 例

### インクの軌跡の描画

この例では、2D キャンバスに軌跡を描きます。コードの先頭近くで、{{domxref("Ink.requestPresenter()")}} を呼び出し、それを処理する表示領域としてキャンバスを渡して、返されるプロミスを `presenter` 変数に格納します。

その後、`pointermove` イベントリスナーで、イベントが発行されるたびに、軌跡の始点の新位置がキャンバスに描画されます。さらに、`presenter` プロミスが履行されたときに返される {{domxref("DelegatedInkTrailPresenter")}} オブジェクトの `updateInkTrailStartPoint()` メソッドが呼び出されます。これは、次のように渡されます。

- 現在のフレームのレンダリング点を表す最後の信頼済みポインターイベント。
- 色と直径の設定が含まれている `style` オブジェクト。

その結果、次の `pointermove` イベントを受信するまで、指定したスタイルで、アプリに代わって、既定のブラウザーの描画よりも先に、代理インクの軌跡が描画されます。

#### HTML

```html
<canvas id="canvas"></canvas>
<div id="div">代理インクの軌跡は、この div の色と一致します。</div>
```

#### CSS

```css
div {
  background-color: rgb(0 255 0 / 100%);
  position: fixed;
  top: 1rem;
  left: 1rem;
}
```

#### JavaScript

```js
const ctx = canvas.getContext("2d");
const presenter = navigator.ink.requestPresenter({ presentationArea: canvas });
let move_cnt = 0;
let style = { color: "rgb(0 255 0 / 100%)", diameter: 10 };

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

canvas.addEventListener("pointermove", async (evt) => {
  const pointSize = 10;
  ctx.fillStyle = style.color;
  ctx.fillRect(evt.pageX, evt.pageY, pointSize, pointSize);
  if (move_cnt === 20) {
    const r = getRandomInt(0, 255);
    const g = getRandomInt(0, 255);
    const b = getRandomInt(0, 255);

    style = { color: `rgb(${r} ${g} ${b} / 100%)`, diameter: 10 };
    move_cnt = 0;
    document.getElementById("div").style.backgroundColor =
      `rgb(${r} ${g} ${b} / 60%)`;
  }
  move_cnt += 1;
  await presenter.updateInkTrailStartPoint(evt, style);
});

window.addEventListener("pointerdown", () => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
});

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
```

#### 結果

{{EmbedLiveSample("Drawing an ink trail")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
