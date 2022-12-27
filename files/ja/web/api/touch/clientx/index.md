---
title: Touch.clientX
slug: Web/API/Touch/clientX
---

{{ APIRef("Touch Events") }}

**`Touch.clientY`** は読み取り専用プロパティで、タッチ点のビューポートからのスクロールオフセットは含まない相対 Y 座標を返します。

## 構文

```
touchItem.clientY;
```

### 返値

`long` 値で、タッチ点のビューポートからのスクロールオフセットは含まない相対 Y 座標を表します。

## 例

この例では、 {{domxref("Touch")}} オブジェクトの {{domxref("Touch.clientX")}} および {{domxref("Touch.clientY")}} プロパティを使用しています。 {{domxref("Touch.clientX")}} プロパティは、ブラウザーのビューポートを基準としたタッチ点の水平座標で、スクロールオフセットを除きます。 {{domxref("Touch.clientY")}} プロパティは、ブラウザーのビューポートを基準としたタッチポイントの垂直座標で、スクロールオフセットを除きます。

この例では、 `source` という id の要素にタッチを開始し、要素内または要素外に移動した後、タッチ面から指を離したと仮定します。 {{domxref("Element/touchend_event", "touchend")}} のイベントハンドラーが呼び出されると、タッチ開始点から終了点までの {{domxref("Touch.clientX")}} 座標と {{domxref("Touch.clientY")}} 座標の変化が計算されます。

```js
// Register touchstart and touchend listeners for element 'source'
var src = document.getElementById("source");
var clientX, clientY;

src.addEventListener('touchstart', function(e) {
  // Cache the client X/Y coordinates
  clientX = e.touches[0].clientX;
  clientY = e.touches[0].clientY;
}, false);

src.addEventListener('touchend', function(e) {
  var deltaX, deltaY;

  // Compute the change in X and Y coordinates.
  // The first touch point in the changedTouches
  // list is the touch point that was just removed from the surface.
  deltaX = e.changedTouches[0].clientX - clientX;
  deltaY = e.changedTouches[0].clientY - clientY;

  // Process the data ...
}, false);
```

## 仕様書

| 仕様書                                                               | 状態                                 | 備考                 |
| -------------------------------------------------------------------- | ------------------------------------ | -------------------- |
| {{SpecName('Touch Events 2','#dom-touch-clienty')}} | {{Spec2('Touch Events 2')}} | 前の版から変更なし。 |
| {{SpecName('Touch Events', '#widl-Touch-clientY')}} | {{Spec2('Touch Events')}}     | 初回定義             |

## ブラウザーの互換性

{{Compat("api.Touch.clientY")}}
