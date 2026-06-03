---
title: DelegatedInkTrailPresenter
slug: Web/API/DelegatedInkTrailPresenter
l10n:
  sourceCommit: bcc977bc3e79a87edd64cd9ef977b515f63daa2c
---

{{APIRef("Ink API")}}{{SeeCompatTable}}

**`DelegatedInkTrailPresenter`** は[インク API](/ja/docs/Web/API/Ink_API) のインターフェイスで、ポインターイベントの配信の間にインクストロークをレンダリングするよう OS レベルのコンポジターに指示する機能を提供します。

{{InheritanceDiagram}}

## インスタンスプロパティ

- {{domxref("DelegatedInkTrailPresenter.expectedImprovement", "expectedImprovement")}} {{Deprecated_Inline}} {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : このプレゼンターを使用して期待できる遅延の改善を、ミリ秒単位で返します。
- {{domxref("DelegatedInkTrailPresenter.presentationArea", "presentationArea")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : インクストロークの描画の範囲となる {{domxref("Element")}} を返します。

## インスタンスメソッド

- {{domxref("DelegatedInkTrailPresenter.updateInkTrailStartPoint", "updateInkTrailStartPoint()")}} {{Experimental_Inline}}
  - : 現在のフレームの最後のレンダリングポイントとして使用された {{domxref("PointerEvent")}} を渡し、OS レベルのコンポジターが、次のポインターイベントが配信される前に、代理インクの軌跡をレンダリングできるようにします。

## 例

この例では、2D キャンバスに軌跡を描きます。コードの先頭近くで、{{domxref("Ink.requestPresenter()")}} を呼び出し、それを処理する表示領域としてキャンバスを渡して、返されるプロミスを `presenter` 変数に格納します。

その後、`pointermove` イベントリスナーで、イベントが発生するたびに、トレイルの始点の新しい位置がキャンバスに描画されます。さらに、`presenter` プロミスが履行されたときに返される `DelegatedInkTrailPresenter` オブジェクトは、その {{domxref("DelegatedInkTrailPresenter.updateInkTrailStartPoint", "updateInkTrailStartPoint()")}} メソッドを呼び出します。これは渡されます。

- 現在のフレームのレンダリング点を表す最後の信頼済みポインターイベント。
- 色と直径の設定が含まれている `style` オブジェクトです。

その結果、次の `pointermove` イベントを受信するまで、指定したスタイルで、アプリに代わって、ブラウザーの既定のレンダリングの前に、代理インクの軌跡が描画されます。

```js
const ctx = canvas.getContext("2d");
let presenter = navigator.ink.requestPresenter({ presentationArea: canvas });
let move_cnt = 0;
let style = { color: "rgb(0 0 255 / 100%)", diameter: 10 };

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

canvas.addEventListener("pointermove", (evt) => {
  const pointSize = 10;
  ctx.fillStyle = "#000000";
  ctx.fillRect(evt.pageX, evt.pageY, pointSize, pointSize);
  if (move_cnt === 50) {
    let r = getRandomInt(0, 255);
    let g = getRandomInt(0, 255);
    let b = getRandomInt(0, 255);
    style = {
      color: `rgb(${r} ${g} ${b} / 100%)`,
      diameter: 10,
    };
    move_cnt = 0;
    document.getElementById("div").style.backgroundColor =
      `rgb(${r} ${g} ${b} / 100%)`;
  }
  move_cnt += 1;
  presenter.then((v) => {
    v.updateInkTrailStartPoint(evt, style);
  });
});

window.addEventListener("pointerdown", (evt) => {
  evt.pointerId;
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
});

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
```

> [!NOTE]
> この例をライブの [Delegated ink trail](https://mabian-ms.github.io/delegated-ink-trail.html) で参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
