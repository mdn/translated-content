---
title: FocusEvent.relatedTarget
slug: Web/API/FocusEvent/relatedTarget
tags:
  - API
  - イベント
  - 実験的
  - FocusEvent
  - プロパティ
  - リファレンス
browser-compat: api.FocusEvent.relatedTarget
translation_of: Web/API/FocusEvent/relatedTarget
---
{{ apiref("DOM Events") }}

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
      <td>{{Event("blur")}}</td>
      <td>フォーカスを失う {{domxref("EventTarget")}}</td>
      <td>
        フォーカスを受け取る {{domxref("EventTarget")}} （存在する場合）
      </td>
    </tr>
    <tr>
      <td>{{Event("focus")}}</td>
      <td>フォーカスを受け取る {{domxref("EventTarget")}}</td>
      <td>フォーカスを失う {{domxref("EventTarget")}} （存在する場合）</td>
    </tr>
    <tr>
      <td>{{Event("focusin")}}</td>
      <td>フォーカスを受け取る {{domxref("EventTarget")}}</td>
      <td>フォーカスを失う {{domxref("EventTarget")}} （存在する場合）</td>
    </tr>
    <tr>
      <td>{{Event("focusout")}}</td>
      <td>フォーカスを失う {{domxref("EventTarget")}}</td>
      <td>フォーカスを受け取る {{domxref("EventTarget")}} （存在する場合）</td>
    </tr>
  </tbody>
</table>

なお、[多くの要素はフォーカスを受け取ることができない](https://stackoverflow.com/a/42764495/1026)ことが、 `relatedTarget` が `null` になる良くある理由です。 `relatedTarget` はタブ移動でページをでたり入ったりする場合など、セキュリティ上の理由で `null` になることもあります。

{{domxref("MouseEvent.relatedTarget")}} はマウスイベントにおける同様のプロパティです。

## 構文

```js
secondTarget = focusEvent.relatedTarget
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属する {{domxref("FocusEvent")}} インターフェイス
