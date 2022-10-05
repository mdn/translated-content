---
title: 'Element: wheel イベント'
slug: Web/API/Element/wheel_event
---

{{APIRef}}

**`wheel`** イベントは、ユーザーがポインティングデバイス (通常はマウス) のホイールボタンを回転させたときに発行されます。

このイベントは標準外、非推奨の {{domxref("Element/mousewheel_event", "mousewheel")}} イベントを置き換えるものです。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">バブリング</th>
      <td>あり</td>
    </tr>
    <tr>
      <th scope="row">キャンセル</th>
      <td>可</td>
    </tr>
    <tr>
      <th scope="row">インターフェイス</th>
      <td>{{domxref("WheelEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>
        {{domxref("GlobalEventHandlers.onwheel", "onwheel")}}
      </td>
    </tr>
  </tbody>
</table>

> **メモ:** `wheel` イベントと {{domxref("Element/scroll_event", "scroll")}} イベントを混同しないでください。 `wheel` イベントの既定のアクションは実装固有のものであり、必ずしも `scroll` イベントを発行するわけではありません。その場合でも、ホイールイベントの `delta*` 値は必ずしもコンテンツのスクロール方向を反映しているとは限りません。したがって、スクロールの方向を取得するために、 `wheel` イベントの `delta*` プロパティに頼らないようにしてください。代わりに、 `scroll` イベント内のターゲットの {{domxref("Element.scrollLeft", "scrollLeft")}} や {{domxref("Element.scrollTop", "scrollTop")}} の値の変化を検出するようにしてください。

## 例

### ホイールで要素を拡大縮小

この例は、マウス (またはその他のポインティングデバイスの) ホイールを使用して要素を拡大縮小する方法を示します。

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
  scale = Math.min(Math.max(.125, scale), 4);

  // Apply scale transform
  el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector('div');
el.onwheel = zoom;
```

{{EmbedLiveSample("Scaling_an_element_via_the_wheel", 700, 300)}}

### addEventListener による同等のもの

イベントハンドラーは {{domxref("EventTarget/addEventListener", "addEventListener()")}} メソッドを使用して設定することもできます。

```js
el.addEventListener('wheel', zoom);
```

## 仕様書

| 仕様書                                                                   | 状態                         | 備考 |
| ------------------------------------------------------------------------ | ---------------------------- | ---- |
| {{SpecName('UI Events','#event-type-wheel','wheel')}} | {{Spec2('UI Events')}} |      |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("WheelEvent")}}
- [Document: `wheel` イベント](/ja/docs/Web/API/Document/wheel_event)
