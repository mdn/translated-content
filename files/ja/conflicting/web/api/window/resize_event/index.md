---
title: window.onresize
slug: conflicting/Web/API/Window/resize_event
tags:
  - DOM
  - Gecko
  - Property
  - Window
translation_of: Web/API/GlobalEventHandlers/onresize
original_slug: Web/API/GlobalEventHandlers/onresize
---
{{ ApiRef() }}

**`GlobalEventHandlers.onresize`** プロパティは、{{event("resize")}} イベントを受信するとトリガーされる {{event("Event_handlers", "event handler")}} を含みます。

## 構文

```
window.onresize = funcRef;
```

### 引数

- `funcRef`: 関数への参照

## 例

```
window.onresize = doFunc;
```

```
<html>
<head>

<title>onresize test</title>

</head>

<body>
<p>Resize the browser window to fire the resize event.</p>

<p>Window height: <span id="height"></span></p>
<p>Window width: <span id="width"></span></p>

<script type="text/javascript">
  var heightOutput = document.querySelector('#height');
  var widthOutput = document.querySelector('#width');

  function resize() {
    heightOutput.textContent = window.innerHeight;
    widthOutput.textContent = window.innerWidth;
  }

  window.onresize = resize;
</script>
</body>
</html>
```

## 注記

ブラウザウィンドウのサイズが変更された後に `resize` イベントが発生します。

## 仕様

<table class="spectable standard-table">
  <tbody>
    <tr>
      <th scope="col">使用</th>
      <th scope="col">ステータス</th>
      <th scope="col">コメント</th>
    </tr>
    <tr>
      <td>
        {{SpecName('HTML WHATWG','webappapis.html#handler-onresize','onresize')}}
      </td>
      <td>{{Spec2('HTML WHATWG')}}</td>
      <td></td>
    </tr>
  </tbody>
</table>
