---
title: end
slug: Web/SVG/Attribute/end
---

{{SVGRef}}

**`end`** 属性は、アクティブな期間を制限できるアニメーションの終了値を定義します。

5 つの要素がこの属性を使用しています。 {{SVGElement("animate")}}, {{SVGElement("animateColor")}}, {{SVGElement("animateMotion")}}, {{SVGElement("animateTransform")}}, {{SVGElement("set")}} です。

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">既定値</th>
      <td><em>なし</em></td>
    </tr>
    <tr>
      <th scope="row">値</th>
      <td><code>&#x3C;end-value-list></code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>不可</td>
    </tr>
  </tbody>
</table>

`<end-value-list>` は値のセミコロン区切りのリストです。それぞれの値は以下のうちの 1 つです。

- `<offset-value>`
  - : この値は時点を表す [clock-value](/ja/docs/Web/SVG/Content_type#Clock-value) を、 SVG 文書の始まり (通常は {{domxref("SVGElement/load_event", "load")}} または {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}} イベント) からの相対で定義します。負の数も有効です。
- `<syncbase-value>`
  - : この値は _syncbase_ と、任意でその _syncbase_ からのオフセットを定義します。要素のアニメーションの終了時刻は、他のアニメーションの開始またはアクティブ状態の終了からの相対で定義します。
    有効な syncbase-value は、他のアニメーション要素への ID による参照にドット、そして `begin` または `end` が続き、参照先のアニメーション要素の開始とアクティブ状態の終了のどちらと同期するかを識別します。 `<offset-value>` で定義される任意のオフセット値を追加することができます。
- `<event-value>`
  - : この値はイベントと任意のオフセットで定義し、要素のアニメーションが終了する時刻を特定します。アニメーションの終了時刻は、指定されたイベントが発生した時刻からの相対で定義します。
    有効な event-value は、要素 ID の後にドットと、その要素の対応しているイベントのうちの一つが続きます。すべての有効なイベントは (すべての要素で対応しているとは限りません) DOM および HTML の仕様書で定義されています。これらは、 {{domxref("Element/focus_event", "focus")}}, {{domxref("Element/blur_event", "blur")}}, {{domxref("Element/focusin_event", "focusin")}}, {{domxref("Element/focusout_event", "focusout")}}, {{domxref("Element/activate_event", "activate")}}, {{domxref("Element/auxclick_event", "auxclick")}}, {{domxref("Element/click_event", "click")}}, {{domxref("Element/dblclick_event", "dblclick")}}, {{domxref("Element/mousedown_event", "mousedown")}}, {{domxref("Element/mouseenter_event", "mouseenter")}}, {{domxref("Element/mouseleave_event", "mouseleave")}}, {{domxref("Element/mousemove_event", "mousemove")}}, {{domxref("Element/mouseout_event", "mouseout")}}, {{domxref("Element/mouseover_event", "mouseover")}}, {{domxref("Element/mouseup_event", "mouseup")}}, {{domxref("Element/wheel_event", "wheel")}}, {{domxref("Element/beforeinput_event", "beforeinput")}}, {{domxref("Element/input_event", "input")}}, {{domxref("Element/keydown_event", "keydown")}}, {{domxref("Element/keyup_event", "keyup")}}, {{domxref("Element/compositionstart_event", "compositionstart")}}, {{domxref("Element/compositionupdate_event", "compositionupdate")}}, {{domxref("Element/compositionend_event", "compositionend")}}, {{domxref("SVGElement/load_event", "load")}}, {{domxref("SVGElement/unload_event", "unload")}}, {{domxref("SVGElement/abort_event", "abort")}}, {{domxref("Element/error_event", "error")}}, {{domxref("Element/select_event", "select")}}, {{domxref("Window/resize_event", "resize")}}, {{domxref("Element/scroll_event", "scroll")}}, {{domxref("SVGAnimationElement/beginEvent_event", "beginEvent")}}, {{domxref("SVGAnimationElement/endEvent_event", "endEvent")}}, {{domxref("SVGAnimationElement/repeatEvent_event", "repeatEvent")}} です。 `<offset-value>` で定義される任意のオフセット値を追加することができます。
- `<repeat-value>`
  - : この値は修飾された repeat イベントを定義します。この要素のアニメーション終了時刻は指定された回数の repeat イベントが発生したときからの相対で定義されます。
    有効な event-value は、要素 ID の後にドットと `repeat()` 関数に繰り返し回数を指定する整数値を引数として指定したものです。 `<offset-value>` で定義される任意のオフセット値を追加することができます。
- `<accessKey-value>`
  - : この値はアニメーションの終了のきっかけとなるアクセスキーを定義します。要素のアニメーションはユーザーが指定されたキーを押したときに終了します。
    有効な accessKey-value は、 `accessKey()` 関数に入力される文字を引数として渡したものです。 `<offset-value>` で定義される任意のオフセット値を追加することができます。
- `<wallclock-sync-value>`
  - : この値はアニメーションの終了時刻を現実世界の時刻で定義します。
    有効な wallclock-sync-value は `wallclock()` 関数に時刻を引数として渡したものです。時刻の構文は [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) で定義された構文に基づいたものです。
- `indefinite`
  - : アニメーションの終了は、 {{domxref("SVGAnimationElement.endElement()")}} メソッド呼び出しで指定されます。

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
      end="8s"
      fill="freeze" />
  </rect>

  <rect x="10" y="60" height="15" width="0">
    <animate
      attributeType="XML"
      attributeName="width"
      to="75"
      begin="0s"
      end="6s"
      fill="freeze" />
  </rect>

  <rect x="10" y="85" height="15" width="0">
    <animate
      attributeType="XML"
      attributeName="width"
      to="50"
      begin="0s"
      end="4s"
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

### イベントの例

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
      begin="0s"
      end="endButton.click"
      dur="8s"
      repeatCount="indefinite"
      fill="freeze" />
  </rect>

  <!-- trigger -->
  <rect
    id="endButton"
    style="cursor:pointer;"
    x="19.5"
    y="62.5"
    rx="5"
    height="25"
    width="80"
    fill="#EFEFEF"
    stroke="black"
    stroke-width="1" />

  <text x="60" y="80" text-anchor="middle" style="pointer-events:none;">
    Click me.
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
      begin="0s"
      end="accessKey(e)"
      dur="8s"
      repeatCount="indefinite"
      fill="freeze" />
  </rect>

  <!-- trigger -->
  <text x="60" y="80" text-anchor="middle" style="pointer-events:none;">
    Hit the "s" key
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

_この例は iFrame に埋め込まれています。キーイベントを有効化したい場合は、まずクリックする必要があります。_

## 仕様書

{{Specifications}}
