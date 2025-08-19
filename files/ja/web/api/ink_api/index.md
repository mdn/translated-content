---
title: インク API
slug: Web/API/Ink_API
l10n:
  sourceCommit: bcc977bc3e79a87edd64cd9ef977b515f63daa2c
---

{{DefaultAPISidebar("Ink API")}}{{SeeCompatTable}}

インク API を使用すると、ブラウザーは、インクアプリ機能でペンのストロークを描画する際に、利用可能な OS レベルのコンポジターを直接使用することができるため、応答遅延が短縮され、パフォーマンスが向上します。

## 概要と使用法

ウェブ上のインクは、[ポインターイベント](/ja/docs/Web/API/Pointer_events)を使用して滑らかなペンのストロークを描画するアプリ機能（例えば、描画アプリや文書への署名機能）を指します。

ポインターイベントは通常、最初にブラウザープロセスに送信され、ブラウザープロセスはこれらのイベントを JavaScript イベントループに転送して、関連付けられたハンドラー関数を実行し、結果をアプリにレンダリングします。このプロセスの開始と終了の間にかなりの時間差が生じ、ユーザーが描画を開始（例えば、スタイラスやマウスを使用）してから、ストロークが画面に表示されるまでに遅延が生じる場合があります。

インク API は、ブラウザーが JavaScript イベントループを完全にバイパスできるようにすることで、この遅延を大幅に削減します。可能であれば、ブラウザーはこのような描画指示を OS レベルのコンポジターに直接渡します。基盤となるオペレーティングシステムに、この目的のために使用する専用の OS レベルのコンポジターがない場合、ブラウザーは自分自身で最適化された描画コードを使用します。これはコンポジターほど強力ではありませんが、それでもいくらかの改善が見られます。

> [!NOTE]
> コンポジターは、ブラウザーやオペレーティングシステムで UI を画面に描画するレンダリング機構の 1 つです。ウェブブラウザー内でコンポジターがどのように機能するかについて、興味深い解説は [Inside look at modern web browser (part 3)](https://developer.chrome.com/blog/inside-browser-part3/) をご覧ください。

エントリーポイントは {{domxref("Navigator.ink")}} プロパティで、これは現在の文書に対する {{domxref("Ink")}} オブジェクトを返します。{{domxref("Ink.requestPresenter","Ink.requestPresenter()")}} メソッドは、{{domxref("DelegatedInkTrailPresenter")}} オブジェクトインスタンスで履行されるプロミス ({{jsxref("Promise")}}) を返します。これにより、OS レベルのコンポジターは、それぞれのケースで、次に利用できるフレームでポインターイベントの配信の間にインク軌跡を描画するよう指示されます。

## インターフェイス

- {{domxref("Ink")}} {{Experimental_Inline}}
  - : アプリケーションが軌跡をレンダリングするために使用する {{domxref("DelegatedInkTrailPresenter")}} オブジェクトへのアクセスを提供します。
- {{domxref("DelegatedInkTrailPresenter")}} {{Experimental_Inline}}
  - : OS レベルのコンポジターに、ポインターイベントの配信の間にインクキセキを描画するように指示します。

### その他のインターフェイスへの拡張

- {{domxref("Navigator.ink")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 現在の文書の {{domxref("Ink")}} オブジェクトを返します。

## 例

### インクの軌跡の描画

この例では、2D キャンバスに軌跡を描きます。コードの先頭近くで、{{domxref("Ink.requestPresenter()")}} を呼び出し、その処理対象となるキャンバスをプレゼンテーション領域として渡し、返されるプロミスを `presenter` 変数に格納します。

その後、`pointermove` イベントリスナーで、イベントが発生するたびに、軌跡の始点の新しい位置がキャンバスに描画されます。さらに、`presenter` プロミスが履行されたときに返される {{domxref("DelegatedInkTrailPresenter")}} オブジェクトは、その {{domxref("DelegatedInkTrailPresenter.updateInkTrailStartPoint", "updateInkTrailStartPoint()")}} メソッドを呼び出します。これは、次のように渡されます。

- 現在のフレームのレンダリング点を表す最後の信頼済みポインターイベント。
- 色と直径の設定を含む `style` オブジェクト。

その結果、次の `pointermove` イベントを受信するまで、指定したスタイルで、アプリに代わって、ブラウザーの既定のレンダリングの前に、代理インクの軌跡が描画されます。

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
  (await presenter).updateInkTrailStartPoint(evt, style);
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
