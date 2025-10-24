---
title: begin
slug: Web/SVG/Reference/Attribute/begin
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

**`begin`** 属性は、関連する要素がいつアクティブになるかを定義します。
アニメーション要素では、これはアニメーションが開始される時点です。

この属性の値は、セミコロン区切りの値のリストです。開始時刻のリストの補間方法は、 SMIL 仕様書の ["Evaluation of begin and end time lists"](https://www.w3.org/TR/smil-animation/#Timing-EvaluationOfBeginEndTimeLists) にあります。それぞれの個別値は、 `<offset-value>`, `<syncbase-value>`, `<event-value>`, `<repeat-value>`, `<accessKey-value>`, `<wallclock-sync-value>` またはキーワード `indefinite` のいずれかです。

この属性は、以下の SVG 要素で使用することができます。

- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}
- {{SVGElement("set")}}

## animate, animateMotion, animateTransform, set

{{SVGElement("animate")}}, {{SVGElement("animateMotion")}}, {{SVGElement("animateTransform")}}, {{SVGElement("set")}} では、 `begin` はいつ要素が開始するか、すなわちアクティブになるかです。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td><code>&#x3C;begin-value-list></code></td>
    </tr>
    <tr>
      <th scope="row">既定の値</th>
      <td><code>0s</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>不可</td>
    </tr>
  </tbody>
</table>

`<begin-value-list>` は、セミコロンで区切られた値のリストです。それぞれの値は以下のいずれかです。

- `<offset-value>`
  - : この値は、SVG 文書の開始時点 （通常は {{domxref("Window/load_event", "load")}} または {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}} イベント） に対する相対的な時点を表す [clock-value](/ja/docs/Web/SVG/Guides/Content_type#clock-value) を定義します。負の値も有効です。
- `<syncbase-value>`
  - : この値は、同期ベースと、その同期ベースからのオプションのオフセットを定義します。要素のアニメーションの開始時刻は、別のアニメーションの開始時刻またはアクティブな終了時刻を基準として相対的に定義されます。

    有効な syncbase-value は、別のアニメーション要素への ID 参照と、その後にドットと、参照するアニメーション要素の開始点または終了点との同期を識別するための `begin` または `end` で構成されます。 `<offset-value>` で定義されたオプションのオフセット値を付加することができます。

- `<event-value>`
  - : この値は、イベントと、要素のアニメーションを始める時点を決定するオプションのオフセットを定義します。アニメーションの開始時刻は、指定したイベントが発生する時点を基準として相対的に定義されます。

    有効なイベント値は、要素 ID にドットと、その要素で対応しているイベントのいずれかを続けたものです。有効なイベント（必ずしもすべての要素に対応しているわけではありません）はすべて、 DOM および HTML 仕様で定義されています。次のとおりです。
    - {{domxref("Element/focus_event", "focus")}}
    - {{domxref("Element/blur_event", "blur")}}
    - {{domxref("Element/focusin_event", "focusin")}}
    - {{domxref("Element/focusout_event", "focusout")}}
    - {{domxref("Element/DOMActivate_event", "DOMActivate")}}
    - {{domxref("Element/auxclick_event", "auxclick")}}
    - {{domxref("Element/click_event", "click")}}
    - {{domxref("Element/dblclick_event", "dblclick")}}
    - {{domxref("Element/mousedown_event", "mousedown")}}
    - {{domxref("Element/mouseenter_event", "mouseenter")}}
    - {{domxref("Element/mouseleave_event", "mouseleave")}}
    - {{domxref("Element/mousemove_event", "mousemove")}}
    - {{domxref("Element/mouseout_event", "mouseout")}}
    - {{domxref("Element/mouseover_event", "mouseover")}}
    - {{domxref("Element/mouseup_event", "mouseup")}}
    - {{domxref("Element/wheel_event","wheel")}}
    - {{domxref("Element/beforeinput_event", "beforeinput")}}
    - {{domxref("Element/input_event", "input")}}
    - {{domxref("Element/keydown_event", "keydown")}}
    - {{domxref("Element/keyup_event", "keyup")}}
    - {{domxref("Element/compositionstart_event", "compositionstart")}}
    - {{domxref("Element/compositionupdate_event", "compositionupdate")}}
    - {{domxref("Element/compositionend_event", "compositionend")}}
    - {{domxref("Window/load_event", "load")}}
    - {{domxref("Window/unload_event", "unload")}}
    - {{domxref("HTMLMediaElement/abort_event", "abort")}}
    - {{domxref("HTMLElement/error_event", "error")}}
    - {{domxref("HTMLInputElement/select_event", "select")}}
    - {{domxref("Window/resize_event", "resize")}}
    - {{domxref("Element/scroll_event", "scroll")}}
    - {{domxref("SVGAnimationElement/beginEvent_event", "beginEvent")}}
    - {{domxref("SVGAnimationElement/endEvent_event", "endEvent")}}
    - {{domxref("SVGAnimationElement/repeatEvent_event", "repeatEvent")}}

    `<offset-value>` で定義されたオプションのオフセット値を付加することができます。

- `<repeat-value>`
  - : この値は、修飾された繰り返しイベントを定義します。要素のアニメーションの開始時刻は、指定された反復処理回数で繰り返しイベントが発生した時点を基準として定義されます。

    有効な繰り返し値は、要素 ID にドット、そして繰り返し回数を指定する整数値を引数とする関数 `repeat()` で構成されます。 `<offset-value>` で定義されたオプションのオフセット値を付加することができます。

- `<accessKey-value>`
  - : この値は、アニメーションを開始するアクセスキーを定義します。ユーザーが指定したキーを押すと、要素のアニメーションが始まります。

    有効な accessKey 値は、引数として入力する文字を含む関数 `accessKey()` で構成されます。 `<offset-value>` で定義されたオプションのオフセット値を付加することができます。

- `<wallclock-sync-value>`
  - : この値は、アニメーションの開始時点を実際の世界の時刻として定義します。

    有効な wallclock-sync-value は、引数として時刻値を持つ関数 `wallclock()` で構成されます。時刻の構文は、[ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) で定義されている構文に基づいています。

- `indefinite`
  - : アニメーションの開始は、`beginElement()` メソッドの呼び出し、またはその要素を対象とするハイパーリンクによって決定されます。

## 例

### オフセットの例

```html
<svg
  width="120"
  height="120"
  viewBox="0 0 120 120"
  xmlns="http://www.w3.org/2000/svg"
  version="1.1">
  <!-- animated rectangles -->
  <rect x="10" y="35" height="15" width="0">
    <animate
      attributeType="XML"
      attributeName="width"
      to="100"
      begin="0s"
      dur="8s"
      fill="freeze" />
  </rect>

  <rect x="35" y="60" height="15" width="0">
    <animate
      attributeType="XML"
      attributeName="width"
      to="75"
      begin="2s"
      dur="6s"
      fill="freeze" />
  </rect>

  <rect x="60" y="85" height="15" width="0">
    <animate
      attributeType="XML"
      attributeName="width"
      to="50"
      begin="4s"
      dur="4s"
      fill="freeze" />
  </rect>

  <!-- grid -->
  <text x="10" y="20" text-anchor="middle">0s</text>
  <line x1="10" y1="25" x2="10" y2="105" stroke="grey" stroke-width=".5" />
  <text x="35" y="20" text-anchor="middle">2s</text>
  <line x1="35" y1="25" x2="35" y2="105" stroke="grey" stroke-width=".5" />
  <text x="60" y="20" text-anchor="middle">4s</text>
  <line x1="60" y1="25" x2="60" y2="105" stroke="grey" stroke-width=".5" />
  <text x="85" y="20" text-anchor="middle">6s</text>
  <line x1="85" y1="25" x2="85" y2="105" stroke="grey" stroke-width=".5" />
  <text x="110" y="20" text-anchor="middle">8s</text>
  <line x1="110" y1="25" x2="110" y2="105" stroke="grey" stroke-width=".5" />

  <line x1="10" y1="30" x2="110" y2="30" stroke="grey" stroke-width=".5" />
  <line x1="10" y1="105" x2="110" y2="105" stroke="grey" stroke-width=".5" />
</svg>
```

{{EmbedLiveSample('Offset_example', '100%', 130)}}

### 同期ベースの例

```html
<svg
  width="120"
  height="120"
  viewBox="0 0 120 120"
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <!-- animated rectangles -->
  <rect x="10" y="35" height="15" width="0">
    <animate
      attributeType="XML"
      attributeName="width"
      to="50"
      id="first"
      begin="0s;third.end"
      dur="4s" />
  </rect>

  <rect x="60" y="60" height="15" width="0">
    <animate
      attributeType="XML"
      attributeName="width"
      to="25"
      id="second"
      begin="first.end"
      dur="2s" />
  </rect>

  <rect x="85" y="85" height="15" width="0">
    <animate
      attributeType="XML"
      attributeName="width"
      to="25"
      id="third"
      begin="second.end"
      dur="2s" />
  </rect>

  <!-- grid -->
  <text x="10" y="20" text-anchor="middle">0s</text>
  <line x1="10" y1="25" x2="10" y2="105" stroke="grey" stroke-width=".5" />
  <text x="35" y="20" text-anchor="middle">2s</text>
  <line x1="35" y1="25" x2="35" y2="105" stroke="grey" stroke-width=".5" />
  <text x="60" y="20" text-anchor="middle">4s</text>
  <line x1="60" y1="25" x2="60" y2="105" stroke="grey" stroke-width=".5" />
  <text x="85" y="20" text-anchor="middle">6s</text>
  <line x1="85" y1="25" x2="85" y2="105" stroke="grey" stroke-width=".5" />
  <text x="110" y="20" text-anchor="middle">8s</text>
  <line x1="110" y1="25" x2="110" y2="105" stroke="grey" stroke-width=".5" />

  <line x1="10" y1="30" x2="110" y2="30" stroke="grey" stroke-width=".5" />
  <line x1="10" y1="105" x2="110" y2="105" stroke="grey" stroke-width=".5" />
</svg>
```

{{EmbedLiveSample('Syncbase_example', '100%', 130)}}

### イベントの例

```html-nolint
<svg
  width="120"
  height="120"
  viewBox="0 0 120 120"
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <!-- animated rectangle -->
  <rect x="10" y="35" height="15" width="0">
    <animate
      attributeType="XML"
      attributeName="width"
      from="0"
      to="100"
      begin="startButton.click"
      dur="8s"
      fill="freeze" />
  </rect>

  <!-- trigger -->
  <rect
    id="startButton"
    cursor="pointer"
    x="19.5"
    y="62.5"
    rx="5"
    height="25"
    width="80"
    fill="#EFEFEF"
    stroke="black"
    stroke-width="1" />

  <text x="60" y="80" text-anchor="middle" pointer-events="none">
    クリック
  </text>

  <!-- grid -->
  <text x="10" y="20" text-anchor="middle">0s</text>
  <line x1="10" y1="25" x2="10" y2="55" stroke="grey" stroke-width=".5" />
  <text x="35" y="20" text-anchor="middle">2s</text>
  <line x1="35" y1="25" x2="35" y2="55" stroke="grey" stroke-width=".5" />
  <text x="60" y="20" text-anchor="middle">4s</text>
  <line x1="60" y1="25" x2="60" y2="55" stroke="grey" stroke-width=".5" />
  <text x="85" y="20" text-anchor="middle">6s</text>
  <line x1="85" y1="25" x2="85" y2="55" stroke="grey" stroke-width=".5" />
  <text x="110" y="20" text-anchor="middle">8s</text>
  <line x1="110" y1="25" x2="110" y2="55" stroke="grey" stroke-width=".5" />

  <line x1="10" y1="30" x2="110" y2="30" stroke="grey" stroke-width=".5" />
  <line x1="10" y1="55" x2="110" y2="55" stroke="grey" stroke-width=".5" />
</svg>
```

{{EmbedLiveSample('Event_example', '100%', 130)}}

### 反復の例

```html
<svg
  width="120"
  height="120"
  viewBox="0 0 120 120"
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <!-- animated rectangle -->
  <rect x="10" y="35" height="15" width="0">
    <animate
      attributeType="XML"
      attributeName="width"
      from="0"
      to="100"
      id="myLoop"
      begin="0s;myLoop.end"
      dur="4s"
      repeatCount="3" />

    <set
      attributeType="CSS"
      attributeName="fill"
      to="green"
      begin="myLoop.begin" />

    <set
      attributeType="CSS"
      attributeName="fill"
      to="gold"
      begin="myLoop.repeat(1)" />

    <set
      attributeType="CSS"
      attributeName="fill"
      to="red"
      begin="myLoop.repeat(2)" />
  </rect>

  <!-- grid -->
  <text x="10" y="20" text-anchor="middle">0s</text>
  <line x1="10" y1="25" x2="10" y2="55" stroke="grey" stroke-width=".5" />
  <text x="35" y="20" text-anchor="middle">1s</text>
  <line x1="35" y1="25" x2="35" y2="55" stroke="grey" stroke-width=".5" />
  <text x="60" y="20" text-anchor="middle">2s</text>
  <line x1="60" y1="25" x2="60" y2="55" stroke="grey" stroke-width=".5" />
  <text x="85" y="20" text-anchor="middle">3s</text>
  <line x1="85" y1="25" x2="85" y2="55" stroke="grey" stroke-width=".5" />
  <text x="110" y="20" text-anchor="middle">4s</text>
  <line x1="110" y1="25" x2="110" y2="55" stroke="grey" stroke-width=".5" />

  <line x1="10" y1="30" x2="110" y2="30" stroke="grey" stroke-width=".5" />
  <line x1="10" y1="55" x2="110" y2="55" stroke="grey" stroke-width=".5" />
</svg>
```

{{EmbedLiveSample('Repeat_example', '100%', 130)}}

### アクセスキーの例

```html
<svg
  width="120"
  height="120"
  viewBox="0 0 120 120"
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <!-- animated rectangles -->
  <rect x="10" y="35" height="15" width="0">
    <animate
      attributeType="XML"
      attributeName="width"
      from="0"
      to="100"
      begin="accessKey(s)"
      dur="8s"
      fill="freeze" />
  </rect>

  <!-- trigger -->
  <text x="60" y="80" text-anchor="middle" pointer-events="none">
    "s" キーを押す
  </text>

  <!-- grid -->
  <text x="10" y="20" text-anchor="middle">0s</text>
  <line x1="10" y1="25" x2="10" y2="55" stroke="grey" stroke-width=".5" />
  <text x="35" y="20" text-anchor="middle">2s</text>
  <line x1="35" y1="25" x2="35" y2="55" stroke="grey" stroke-width=".5" />
  <text x="60" y="20" text-anchor="middle">4s</text>
  <line x1="60" y1="25" x2="60" y2="55" stroke="grey" stroke-width=".5" />
  <text x="85" y="20" text-anchor="middle">6s</text>
  <line x1="85" y1="25" x2="85" y2="55" stroke="grey" stroke-width=".5" />
  <text x="110" y="20" text-anchor="middle">8s</text>
  <line x1="110" y1="25" x2="110" y2="55" stroke="grey" stroke-width=".5" />

  <line x1="10" y1="30" x2="110" y2="30" stroke="grey" stroke-width=".5" />
  <line x1="10" y1="55" x2="110" y2="55" stroke="grey" stroke-width=".5" />
</svg>
```

{{EmbedLiveSample('Accesskey_example', '100%', 130)}}

_この例は iFrame に埋め込まれています。キーイベントを有効にするには、最初に中をクリックする必要があります。_

## 仕様書

{{Specifications}}

## 関連情報

- [SMIL による SVG アニメーション](/ja/docs/Web/SVG/Guides/SVG_animation_with_SMIL)
