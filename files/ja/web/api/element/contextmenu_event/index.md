---
title: "Element: contextmenu イベント"
short-title: contextmenu
slug: Web/API/Element/contextmenu_event
l10n:
  sourceCommit: ab65140829d7c4df540fd859c0a97a78b3b1fd33
---

{{APIRef}}

**`contextmenu`** イベントは、ユーザーがコンテキストメニューを開こうとしたときに発行されます。このイベントは、通常、マウスの右ボタンをクリックするか、コンテキストメニューキーを押すことで発行されます。

後者の場合、コンテキストメニューは、フォーカスされた要素の左下に表示されます。ただし、要素がツリーの場合は、現在の行の左下に表示されます。

右クリックイベントが（イベントの {{domxref("Event.preventDefault", "preventDefault()")}} メソッドを呼び出して）無効化されていない場合は、対象となる要素で `contextmenu` イベントが発行されます。

> [!NOTE]
> Firefox における例外: <kbd>Shift</kbd> キーを押しながら右クリックすると、`contextmenu` イベントが発生せずにコンテキストメニューが表示されます。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("contextmenu", (event) => {});

oncontextmenu = (event) => {};
```

## イベント型

{{domxref("PointerEvent")}} です。 {{domxref("MouseEvent")}} を継承しています。

{{InheritanceDiagram("PointerEvent")}}

> [!NOTE]
> この仕様書の以前のバージョンでは、このイベントのイベント型は {{domxref("MouseEvent")}} でした。 Firefox と Safari では今でもこの型で渡されます。

## イベントプロパティ

_このインターフェイスは、{{domxref("MouseEvent")}} および {{domxref("Event")}} からプロパティを継承しています。_

- {{domxref('PointerEvent.altitudeAngle')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : トランスデューサー（ポインターまたはスタイラス）の軸と機器の画面の X-Y 平面のなす角度を表します。
- {{domxref('PointerEvent.azimuthAngle')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Y-Z 平面と、トランスデューサー（ポインターまたはスタイラス）の軸と Y 軸の両方を格納する平面との間の角度を表します。
- {{domxref('PointerEvent.pointerId')}} {{ReadOnlyInline}}
  - : イベントの原因となっているポインターの一意の識別子。
- {{domxref('PointerEvent.width')}} {{ReadOnlyInline}}
  - : ポインターの接触形状の幅（X 軸上の大きさ、CSS ピクセル単位）。
- {{domxref('PointerEvent.height')}} {{ReadOnlyInline}}
  - : ポインターの接触形状の高さ（Y 軸上の大きさ、CSS ピクセル単位）。
- {{domxref('PointerEvent.pressure')}} {{ReadOnlyInline}}
  - : 0 から 1 の範囲のポインター入力の正規化された圧力。 ここで、0 と 1 は、それぞれハードウェアが検出できる最小圧力と最大圧力を表します。
- {{domxref('PointerEvent.tangentialPressure')}} {{ReadOnlyInline}}
  - : ポインター入力の正規化された接線圧力（バレル圧力またはシリンダー応力（[cylinder stress](https://en.wikipedia.org/wiki/Cylinder_stress)）とも呼ばれます）は `-1` から `1` の範囲で、 `0` はコントロールの中立位置です。
- {{domxref('PointerEvent.tiltX')}} {{ReadOnlyInline}}
  - : Y-Z 平面と、ポインター（ペン/スタイラスなど）軸と Y 軸の両方を含む平面との間の平面角度（度単位、`-90` から `90` の範囲）。
- {{domxref('PointerEvent.tiltY')}} {{ReadOnlyInline}}
  - : X-Z 平面と、ポインター（ペン/スタイラスなど）軸と X 軸の両方を含む平面との間の平面角度（度単位、`-90` から `90` の範囲）。
- {{domxref('PointerEvent.twist')}} {{ReadOnlyInline}}
  - : ポインター（ペン/スタイラスなど）の長軸を中心とした時計回りの回転の度数（`0` から `359` の範囲の値）。
- {{domxref('PointerEvent.pointerType')}} {{ReadOnlyInline}}
  - : イベントの原因となった機器の種類（マウス、ペン、タッチなど）を示します。
- {{domxref('PointerEvent.isPrimary')}} {{ReadOnlyInline}}
  - : ポインターがこのポインターの種類の主ポインターを表しているかどうかを示します。

## 例

### `contextmenu` イベントのキャンセル

この例では、最初の段落で `contextmenu` イベントが発行されたときに、`preventDefault()` を使って `contextmenu` イベントの既定のアクションをキャンセルしています。その結果、第 1 段落は右クリックしても何も起こらず、第 2 段落にはブラウザーが提供する標準的なコンテキストメニューが表示されることになります。

> [!NOTE]
> Firefox では、<kbd>Shift</kbd> キーを押しながら右クリックすると、`contextmenu` イベントが発生せずにコンテキストメニューが表示されます。そのため、イベントをキャンセルしてもコンテキストメニューの表示を止めることはできません。

### HTML

```html
<p id="noContextMenu">この段落ではコンテキストメニューが無効になっています。</p>
<p>しかし、この段落では無効になっていません。</p>
```

### JavaScript

```js
const noContext = document.getElementById("noContextMenu");

noContext.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});
```

### 結果

{{EmbedLiveSample("Canceling the contextmenu event")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [学習: イベント入門](/ja/docs/Learn_web_development/Core/Scripting/Events)
- {{domxref("Element/auxclick_event", "auxclick")}}
- {{domxref("Element/click_event", "click")}}
- {{domxref("Element/dblclick_event", "dblclick")}}
- {{domxref("Element/mousedown_event", "mousedown")}}
- {{domxref("Element/mouseup_event", "mouseup")}}
- {{domxref("Element/pointerdown_event", "pointerdown")}}
- {{domxref("Element/pointerup_event", "pointerup")}}
