---
title: window.onselect
slug: conflicting/Web/API/HTMLInputElement/select_event
tags:
  - DOM
  - Gecko
  - Window
translation_of: Web/API/GlobalEventHandlers/onselect
original_slug: Web/API/GlobalEventHandlers/onselect
---
{{ ApiRef("HTML DOM") }}

{{domxref("window")}} の `select` イベントに対応するイベントハンドラです。

## 構文

```
window.onselect = funcRef;
```

- `funcRef` : 関数への参照、または関数式

## 例

```html
<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8" />
<title>onselect のテスト</title>

<style>
.text1 { border: 2px solid red; }
</style>

<script>
window.onselect = selectText;

function selectText() {
  alert("select イベントが発生しました。");
}
</script>
</head>

<body>
<textarea class="text1" cols="30" rows="3">
マウスでこのテキストを選択状態にすると
onselect イベントが発生し、
アラートを表示する関数が実行されます。
</textarea>
</body>
</html>
```

## 注記

`select` イベントは、テキストインプット (`<input type="text">`) もしくは {{htmlelement("textarea")}} 要素のテキストが*選択された直後に* 発生します。

## 仕様

<table class="spectable standard-table">
  <tbody>
    <tr>
      <th scope="col">仕様書</th>
      <th scope="col">策定状況</th>
      <th scope="col">コメント</th>
    </tr>
    <tr>
      <td>
        {{SpecName('HTML WHATWG','webappapis.html#handler-onselect','onselect')}}
      </td>
      <td>{{Spec2('HTML WHATWG')}}</td>
      <td></td>
    </tr>
  </tbody>
</table>

## ブラウザー実装状況

{{Compat("api.GlobalEventHandlers.onselect")}}
