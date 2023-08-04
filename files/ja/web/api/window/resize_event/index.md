---
title: "Window: resize イベント"
slug: Web/API/Window/resize_event
---

{{APIRef}}

**`resize`** イベントは、この文書のビュー (ウィンドウ) の大きさが変更されたときに発行されます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">バブリング</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">キャンセル</th>
      <td>不可</td>
    </tr>
    <tr>
      <th scope="row">インターフェイス</th>
      <td>{{domxref("UIEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>
        {{domxref("GlobalEventHandlers.onresize", "onresize")}}
      </td>
    </tr>
  </tbody>
</table>

一部の初期のブラウザーでは、 `resize` イベントのハンドラーをすべての HTML 要素に設定することができました。現在でも `onresize` 属性や {{domxref("EventTarget.addEventListener", "addEventListener()")}} を使用して、どの要素にもハンドラーを設定することができます。しかし、 `resize` イベントは {{domxref("Window", "window")}} オブジェクト (すなわち {{domxref("document.defaultView")}} で返されるもの) でのみ発行されます。 `window` オブジェクトに登録されたハンドラーのみが、 `resize` イベントを受け取ります。

すべての要素が大きさの変更を通知できるようにする提案があります。 [Resize Observer](https://wicg.github.io/ResizeObserver/) で草稿のドキュメントを、 [GitHub issue](https://github.com/WICG/ResizeObserver/issues) で進行中の議論を読むことができます。

## 例

### ウィンドウの大きさのログ出力

以下の例では、ウィンドウの大きさが変更されるたびに報告を出力します。この例は `<iframe>` 内で実行されているので、効果を見る前に実際に `<iframe>` の大きさを変更する必要があることを覚えておいてください。

```html
<p>ブラウザーウィンドウを変更すると <code>resize</code> イベントを発行します。</p>
<p>ウィンドウの高さ: <span id="height"></span></p>
<p>ウィンドウの幅: <span id="width"></span></p>
```

```js
const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');

function reportWindowSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}

window.onresize = reportWindowSize;
```

{{EmbedLiveSample("Window_size_logger")}}

### addEventListener による同等の実装

イベントハンドラーを設定するために [`addEventListener()`](/ja/docs/Web/API/EventTarget/addEventListener) メソッドを使用することもできます。

```js
window.addEventListener('resize', reportWindowSize);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("GlobalEventHandlers.onresize")}}
