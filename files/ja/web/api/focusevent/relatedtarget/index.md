---
title: FocusEvent.relatedTarget
slug: Web/API/FocusEvent/relatedTarget
l10n:
  sourceCommit: 1511e914c6b1ce6f88056bfefd48a6aa585cebce
---

{{APIRef("UI Events")}}

**`FocusEvent.relatedTarget`** は読み取り専用プロパティで、イベントの種類に応じた副ターゲットを表します。

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">イベント名</th>
      <th scope="col"><code>target</code></th>
      <th scope="col"><code>relatedTarget</code></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{domxref("Element/blur_event", "blur")}}</td>
      <td>フォーカスを失う {{domxref("EventTarget")}}</td>
      <td>
        フォーカスを受け取る {{domxref("EventTarget")}} （存在する場合）
      </td>
    </tr>
    <tr>
      <td>{{domxref("Element/focus_event", "focus")}}</td>
      <td>フォーカスを受け取る {{domxref("EventTarget")}}</td>
      <td>フォーカスを失う {{domxref("EventTarget")}} （存在する場合）</td>
    </tr>
    <tr>
      <td>{{domxref("Element/focusin_event", "focusin")}}</td>
      <td>フォーカスを受け取る {{domxref("EventTarget")}}</td>
      <td>フォーカスを失う {{domxref("EventTarget")}} （存在する場合）</td>
    </tr>
    <tr>
      <td>{{domxref("Element/focusout_event", "focusout")}}</td>
      <td>フォーカスを失う {{domxref("EventTarget")}}</td>
      <td>フォーカスを受け取る {{domxref("EventTarget")}} （存在する場合）</td>
    </tr>
  </tbody>
</table>

なお、[多くの要素はフォーカスを受け取ることができない](https://stackoverflow.com/questions/42764494/blur-event-relatedtarget-returns-null/42764495)ことが、 `relatedTarget` が `null` になる良くある理由です。 `relatedTarget` はタブ移動でページをでたり入ったりする場合など、セキュリティ上の理由で `null` になることもあります。

{{domxref("MouseEvent.relatedTarget")}} はマウスイベントにおける同様のプロパティです。

## 値

{{domxref("EventTarget")}} のインスタンスです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属する {{domxref("FocusEvent")}} インターフェイス
