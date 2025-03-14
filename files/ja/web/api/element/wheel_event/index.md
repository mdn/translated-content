---
title: "Element: wheel イベント"
short-title: wheel
slug: Web/API/Element/wheel_event
l10n:
  sourceCommit: 63ffc2df0ceb061f6197b30c39080b57c7d52920
---

{{APIRef}}

**`wheel`** イベントは、ユーザーがポインティングデバイス（通常はマウス）のホイールボタンを回転させたときに発行されます。トラックパッドやマウスボールなど、ホイール操作をシミュレートする関連機器でも使用されます。

このイベントは標準外、非推奨の {{domxref("Element/mousewheel_event", "mousewheel")}} イベントを置き換えるものです。

`wheel` イベントと {{domxref("Element/scroll_event", "scroll")}} イベントを混同しないでください。

- `wheel` イベントは、必ずしも `scroll` イベントを送信するわけではありません。例えば、要素がまったくスクロールできない場合もあります。ホイールやトラックパッドを使用したズーム操作も、 `wheel` イベントを送信します。
- `scroll`イベントは、必ずしも`wheel`イベントによって引き起こされるわけではありません。 要素は、キーボードや、スクロールバーのドラッグ、 JavaScript を使用することでもスクロールすることができます。
- `wheel` イベントの `delta*` 値は必ずしもコンテンツのスクロール方向を反映しているとは限りません。

したがって、スクロールの方向を取得するために、 `wheel` イベントの `delta*` プロパティに頼らないようにしてください。代わりに、 `scroll` イベント内のターゲットの {{domxref("Element.scrollLeft", "scrollLeft")}} や {{domxref("Element.scrollTop", "scrollTop")}} の値の変化を検出するようにしてください。

`wheel` イベントはキャンセル可能です。イベントがキャンセルされた場合、スクロールやズームは実行されません。このため、実際にコンテンツのスクロールを実行する前に、ブラウザーがすべてのホイールイベントの処理を待機する必要が生じ、パフォーマンス上の問題が発生する可能性があります。これを回避するには、 `passive: true` を設定して {{domxref("EventTarget.addEventListener", "addEventListener()")}} を呼び出します。こうすると、ブラウザーがキャンセル不可能な `wheel` イベントを生成する可能性があります。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("wheel", (event) => {});

onwheel = (event) => {};
```

## イベント型

{{domxref("WheelEvent")}} です。 {{domxref("MouseEvent")}}、{{domxref("UIEvent")}}、{{domxref("Event")}} を継承しています。

{{InheritanceDiagram("WheelEvent")}}

## イベントプロパティ

_このインターフェイスには、祖先である {{DOMxRef("MouseEvent")}}, {{DOMxRef("UIEvent")}}, {{DOMxRef("Event")}} から継承したプロパティがあります。_

- {{DOMxRef("WheelEvent.deltaX")}} {{ReadOnlyInline}}
  - : 水平スクロール量を表す `double` を返します。
- {{DOMxRef("WheelEvent.deltaY")}} {{ReadOnlyInline}}
  - : 垂直方向のスクロール量を表す `double` を返します。
- {{DOMxRef("WheelEvent.deltaZ")}} {{ReadOnlyInline}}
  - : z 軸のスクロール量を表す `double` を返します。
- {{DOMxRef("WheelEvent.deltaMode")}} {{ReadOnlyInline}}

  - : `delta*` 値のスクロール量の単位を表す `unsigned long` を返します。指定可能な値は次の通りです。

    | 定数                         | 値     | 説明                                                                                            |
    | ---------------------------- | ------ | ----------------------------------------------------------------------------------------------- |
    | `WheelEvent.DOM_DELTA_PIXEL` | `0x00` | `delta*` の値はピクセル単位で指定します。                                                       |
    | `WheelEvent.DOM_DELTA_LINE`  | `0x01` | `delta*` 値は行単位で指定します。行の高さを計算するために使用する方法はブラウザーに依存します。 |
    | `WheelEvent.DOM_DELTA_PAGE`  | `0x02` | `delta*` 値はページ単位で指定します。各マウスクリックはコンテンツのページをスクロールします。   |

- {{DOMxRef("WheelEvent.wheelDelta")}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : ピクセル単位で距離を表す整数（32 ビット）を返します。
- {{DOMxRef("WheelEvent.wheelDeltaX")}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : 水平スクロール量を表す整数を返します。
- {{DOMxRef("WheelEvent.wheelDeltaY")}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : 垂直スクロール量を表す整数を返します。

## 例

### ホイールで要素を拡大縮小

この例は、マウス（またはその他のポインティングデバイスの）ホイールを使用して要素を拡大縮小する方法を示します。

```html
<div>Scale me with your mouse wheel.</div>
```

```css
body {
  min-height: 100vh;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

div {
  width: 105px;
  height: 105px;
  background: #cdf;
  padding: 5px;
}
```

```js
function zoom(event) {
  event.preventDefault();

  scale += event.deltaY * -0.01;

  // Restrict scale
  scale = Math.min(Math.max(0.125, scale), 4);

  // Apply scale transform
  el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector("div");
el.onwheel = zoom;
```

{{EmbedLiveSample("Scaling_an_element_via_the_wheel", 700, 300)}}

### addEventListener による同等のもの

イベントハンドラーは {{domxref("EventTarget/addEventListener", "addEventListener()")}} メソッドを使用して設定することもできます。

```js
el.addEventListener("wheel", zoom, { passive: false });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("WheelEvent")}}
