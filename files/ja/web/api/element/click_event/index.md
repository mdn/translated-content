---
title: 'Element: click イベント'
slug: Web/API/Element/click_event
tags:
  - API
  - DOM
  - Element
  - イベント
  - インターフェイス
  - MouseEvent
  - NeedsBrowserCompatibility
  - NeedsMobileBrowserCompatibility
  - リファレンス
  - UI
  - click
  - マウス
translation_of: Web/API/Element/click_event
---
{{APIRef}}

**`click`** イベントは、ポインターが要素の中にある状態で、ポインティングデバイスのボタン (マウスの第一ボタンなど) が押されて離されたときに要素に送られます。

<table class="properties">
  <tbody>
    <tr>
      <th>バブリング</th>
      <td>あり</td>
    </tr>
    <tr>
      <th>キャンセル</th>
      <td>可</td>
    </tr>
    <tr>
      <th>インターフェイス</th>
      <td>{{domxref("MouseEvent")}}</td>
    </tr>
    <tr>
      <th>イベントハンドラープロパティ</th>
      <td>
        {{domxref("GlobalEventHandlers.onclick", "onclick")}}
      </td>
    </tr>
  </tbody>
</table>

ある要素でボタンが押され、ボタンが離される前にポインタが要素の外に移動した場合、イベントは両方の要素を含む最も具体的な祖先の要素で発生します。

`click` は {{domxref("Element/mousedown_event", "mousedown")}} および {{domxref("Element/mouseup_event", "mouseup")}} イベントの後、順番通りに発生します。

## 使用上の注意

`click` のイベントハンドラーに渡される {{domxref("MouseEvent")}} オブジェクトの {{domxref("UIEvent/detail", "detail")}} プロパティには、 {{domxref("Event.target", "target")}} がクリックされた回数が設定されています。言い換えれば、ダブルクリックの場合は `detail` が 2 になり、トリプルクリックの場合は 3 になります。このカウンターは、クリックが発生しない短い間隔の後にリセットされます。この間隔の長さの詳細は、ブラウザーやプラットフォームによって異なります。この間隔は、ユーザーの設定によっても影響を受ける可能性があります。例えば、アクセシビリティのオプションは、適応性のあるインターフェイスで複数回のクリックを簡単に実行できるように、この間隔を延長することができます。

### Internet Explorer

Internet Explorer 8 と 9 は、 {{cssxref("background-color")}} の計算値が [`transparent`](/ja/docs/Web/CSS/color_value#transparent_keyword) である要素が他の要素の上に重なった時、 `click` イベントを受け取らないというバグに悩まされていました。すべての `click` イベントはその下にある要素で発生していました。[このライブサンプル](http://jsfiddle.net/YUKma/show/)を参照してください。

このバグの知られている回避方法は以下の通りです。

- IE9 のみの場合:

  - {{cssxref("background-color")}}`: rgba(0,0,0,0)` に設定する
  - {{cssxref("opacity")}}`: 0` に設定し、{{cssxref("background-color")}} を明示的に [`transparent`](/ja/docs/Web/CSS/color_value#transparent_keyword) 以外に設定する

- IE8 および IE9 の場合: filter: alpha(opacity=0);` に設定し、 {{cssxref("background-color")}} を明示的に [`transparent`](/ja/docs/Web/CSS/color_value#transparent_keyword) 以外に設定する

## Safari Mobile

Safari Mobile 7.0 以降では (おそらくそれ以前のバージョンも) [悩ましいバグ](https://bugs.webkit.org/show_bug.cgi?id=153887)があり、通常は対話型ではない要素 ({{HTMLElement("div")}} など) で、イベントリスナーが要素自身に直接設定されていない場合 (つまり、 [イベントの委譲](https://davidwalsh.name/event-delegate)が使用されている場合) は `click` イベントが発生しません。デモは[このライブ例](https://jsfiddle.net/cvrhulu/k9t0sdnf/show/)を参照してください。 [Safari's docs on making elements clickable](https://developer.apple.com/library/safari/documentation/appleapplications/reference/safariwebcontent/HandlingEvents/HandlingEvents.html#//apple_ref/doc/uid/TP40006511-SW6) および [definition of "clickable element"](https://developer.apple.com/library/safari/documentation/appleapplications/reference/safariwebcontent/HandlingEvents/HandlingEvents.html#//apple_ref/doc/uid/TP40006511-SW7) も参照してください。

このバグの知られている回避策は以下のとおりです。

- その要素およびそのすべての祖先に {{cssxref("cursor")}}`: pointer;` を設定する。
- ダミーの `onclick="void(0)"` 属性を、その要素または {{HTMLElement("body")}} 以外の祖先のいずれかに設定する。
- 通常は対話型になる要素 (例えば {{HTMLElement("a")}}) を、通常は対話型でない要素 (例えば {{HTMLElement("div")}}) の代わりに使用する。
- `click` [イベントの委譲](https://davidwalsh.name/event-delegate)の使用をやめる。

Safari Mobile は以下の要素を通常対話型であるとみなします (したがって、このバグの影響を受けません)。

- {{HTMLElement("a")}} (ただし `href` があるものに限る)
- {{HTMLElement("area")}} (ただし `href` があるものに限る)
- {{HTMLElement("button")}}
- {{HTMLElement("img")}}
- {{HTMLElement("input")}}
- {{HTMLElement("label")}} (ただしフォームコントロールに関連付けられているものに限る)
- {{HTMLElement("textarea")}}
- _このリストは不完全です。試験や調査を行って展開することで MDN にご協力ください。_

<h2 id="Examples">例</h2>

この例は {{HtmlElement("button")}} を連続してクリックした数を表示します。

### HTML

```html
<button>Click</button>
```

### JavaScript

```js
const button = document.querySelector('button');

button.addEventListener('click', event => {
  button.textContent = `Click count: ${event.detail}`;
});
```

### 結果

ボタンを素早く何度もクリックしてみて、クリックカウントを増やしましょう。クリックの間に休憩を挟むと、カウントがリセットされます。

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [イベントの紹介](/ja/docs/Learn/JavaScript/Building_blocks/Events)
- {{domxref("Element/auxclick_event", "auxclick")}}
- {{domxref("Element/contextmenu_event", "contextmenu")}}
- {{domxref("Element/dblclick_event", "dblclick")}}
- {{domxref("Element/mousedown_event", "mousedown")}}
- {{domxref("Element/mouseup_event", "mouseup")}}
- {{domxref("Element/pointerdown_event", "pointerdown")}}
- {{domxref("Element/pointerup_event", "pointerup")}}
