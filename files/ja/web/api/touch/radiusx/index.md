---
title: "Touch: radiusX プロパティ"
short-title: radiusX
slug: Web/API/Touch/radiusX
l10n:
  sourceCommit: 7613b203a298214e9ba1a290e9e39a141fd9a9d8
---

{{ APIRef("Touch Events") }}

**`radiusX`** は {{domxref("Touch")}} インターフェイスの読み取り専用プロパティで、タッチ面の連絡先を最も近く囲む楕円の X 半径を返します。値は {{ domxref("Touch.screenX") }} と同じ倍率の CSS のピクセル値です。

この値と {{ domxref("Touch.radiusY") }} および {{ domxref("Touch.rotationAngle") }} の組み合わせにより、ユーザーと画面の接触領域のサイズと図形を近似した楕円が構成されます。これは、例えば、指先と画面の間の接触を表す比較的大きな楕円であったり、スタイラスの先端を表す小さな領域であったりします。

## 値

数値です。

## 例

この例では、 {{domxref("Touch")}} インターフェイスの {{domxref("Touch.radiusX")}}、{{domxref("Touch.radiusX")}}、{{domxref("Touch.rotationAngle")}} プロパティを使用する例を示します。 {{domxref("Touch.radiusX")}} プロパティは、タッチ領域（指やスタイラスなど）を最も近く囲む楕円の、タッチ点の {{domxref("Touch.rotationAngle")}} が**示す**軸上の半径です。同様に {{domxref("Touch.radiusY")}} プロパティは、タッチ領域（指やスタイラスなど）を最も近く囲む楕円の、 {{domxref("Touch.rotationAngle")}} で示される線に**直交する**軸の半径です。 {{domxref("Touch.rotationAngle")}} は、 `radiusX` と `radiusY` で記述されている楕円を、その中心に対して時計回りに回転させたときの角度（度）です。

以下の単純なコードでは、 {{domxref("Element/touchstart_event", "touchstart")}}、{{domxref("Element/touchmove_event", "touchmove")}}、{{domxref("Element/touchend_event", "touchend")}} イベントに対して単一のハンドラーを登録しています。 `src` 要素がタッチされると、タッチ点の `radiusX` と `radiusY` の値に基づいて要素の幅と高さが計算され、タッチ点の `rotationAngle` を使用して要素が回転します。

```html
<div id="src">…</div>
```

```js
const src = document.getElementById("src");

src.addEventListener("touchstart", rotate);
src.addEventListener("touchmove", rotate);
src.addEventListener("touchend", rotate);

function rotate(e) {
  const touch = e.changedTouches.item(0);

  // 既定のイベント処理を無効にする
  e.preventDefault();

  // 'src' 要素を回転する
  src.style.width = `${touch.radiusX * 2}px`;
  src.style.height = `${touch.radiusY * 2}px`;
  src.style.transform = `rotate(${touch.rotationAngle}deg)`;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
