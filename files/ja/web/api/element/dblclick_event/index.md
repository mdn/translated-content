---
title: 'Element: dblclick イベント'
slug: Web/API/Element/dblclick_event
tags:
  - API
  - DOM
  - Double Click
  - ダブルクリック
  - Element
  - イベント
  - Input
  - インターフェイス
  - MouseEvent
  - リファレンス
  - ボタン
  - dblclick
  - mouse
translation_of: Web/API/Element/dblclick_event
---
{{APIRef}}

**`dblclick`** イベントは、ポインティングデバイスのボタン (マウスの第一ボタンなど) がダブルクリックされたとき、つまり、単一の要素上でとても短い時間内に素早く 2 回クリックされたときに発行されます。

`dblclick` は 2 回の {{domxref("Element/click_event", "click")}} イベントの後 (展開すると、2 組の {{domxref("Element.mousedown_event", "mousedown")}} および {{domxref("Element.mouseup_event", "mouseup")}} の後) に発生します。

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
      <td>{{domxref("MouseEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>
        {{domxref("GlobalEventHandlers.ondblclick", "ondblclick")}}
      </td>
    </tr>
  </tbody>
</table>

<h2 id="Examples">例</h2>

この例では、カードをダブルクリックするたびに寸法が切り替わります。

### JavaScript

```js
const card = document.querySelector('aside');

card.addEventListener('dblclick', function (e) {
  card.classList.toggle('large');
});
```

### HTML

```html
<aside>
  <h3>My Card</h3>
  <p>Double click to resize this object.</p>
</aside>
```

### CSS

```css
aside {
  background: #fe9;
  border-radius: 1em;
  display: inline-block;
  padding: 1em;
  transform: scale(.9);
  transform-origin: 0 0;
  transition: transform .6s;
  user-select: none;
}

.large {
  transform: scale(1.3);
}
```

### 結果

{{EmbedLiveSample("Examples", 700, 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [イベントの紹介](/ja/docs/Learn/JavaScript/Building_blocks/Events)
- {{domxref("Element/auxclick_event", "auxclick")}}
- {{domxref("Element/click_event", "click")}}
- {{domxref("Element/contextmenu_event", "contextmenu")}}
- {{domxref("Element/mousedown_event", "mousedown")}}
- {{domxref("Element/mouseup_event", "mouseup")}}
- {{domxref("HTMLElement/pointerdown_event", "pointerdown")}}
- {{domxref("HTMLElement/pointerup_event", "pointerup")}}
