---
title: 'Element: show イベント'
slug: Web/API/Element/show_event
---

{{APIRef}}{{deprecated_header}}

**`show`** イベントは、 {{domxref("Element/contextmenu_event", "contextmenu")}} イベントが [`contextmenu` 属性](/ja/docs/Web/HTML/Global_attributes/contextmenu)を持つ要素に発生またはバブリングしたときに発生します。

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
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>
        {{domxref("GlobalEventHandlers.onshow", "onshow")}}
      </td>
    </tr>
  </tbody>
</table>

## 例

```html
<div contextmenu="test"></div>
<menu type="context" id="test">
  <menuitem label="alert" onclick="alert('the alert label has been clicked')" />
</menu>

<script>
  document.getElementById("test").addEventListener("show", function(e){
    alert("the context menu will be displayed");
  }, false);
</script>
```

## 仕様書

| 仕様書                                                                                           | 状態                         |
| ------------------------------------------------------------------------------------------------ | ---------------------------- |
| {{SpecName("HTML5 W3C", "webappapis.html#handler-onshow", "show event")}} | {{Spec2('HTML5 W3C')}} |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("GlobalEventHandlers.onshow", "onshow")}}
