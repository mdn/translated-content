---
title: Window.captureEvents()
slug: Web/API/Window/captureEvents
---

{{ ApiRef() }} {{Deprecated_Header}} {{Non-standard_header}}

**`Window.captureEvents()`** メソッドは、指定した種類のすべてのイベントをキャプチャするように、そのウィンドウを登録します。

## 構文

```js
window.captureEvents(eventType);
```

`eventType` は、 `Event.ABORT`, `Event.BLUR`, `Event.CLICK`, `Event.CHANGE`, `Event.DBLCLICK`, `Event.DRAGDDROP`, `Event.ERROR`, `Event.FOCUS`, `Event.KEYDOWN`, `Event.KEYPRESS`, `Event.KEYUP`, `Event.LOAD`, `Event.MOUSEDOWN`, `Event.MOUSEMOVE`, `Event.MOUSEOUT`, `Event.MOUSEOVER`, `Event.MOUSEUP`, `Event.MOVE`, `Event.RESET`, `Event.RESIZE`, `Event.SELECT`, `Event.SUBMIT`, `Event.UNLOAD` の値の組み合わせを取ります。

## 例

```html
<!doctype html>
<html lang="en">
  <head>
    <!-- ... -->
    <script>
      function reg() {
        window.captureEvents(Event.CLICK);
        window.onclick = page_click;
      }

      function page_click() {
        alert("ページクリックイベントが検出されました！");
      }
    </script>
  </head>

  <body onload="reg();">
    <p>click anywhere on this page.</p>
  </body>
</html>
```

### 注

ユーザーの操作によって DOM 内で発生したイベント (ボタンのクリックや現在の文書からのフォーカス移動など) は、通常、イベントを開始したオブジェクトに到達する前に、まず高レベルの [`window`](/ja/docs/Web/API/Window) や [`document`](/ja/docs/Web/API/Document) オブジェクトを通過します。

[`window`](/ja/docs/Web/API/Window) の `captureEvents()` メソッドを呼び出すと、指定した種類のイベント (例えば `Event.CLICK`) は、階層内の「下位」オブジェクトに通過しなくなります。イベントを通常のように「バブルアップ」させるためには、 [`window.releaseEvents()`](/ja/docs/Web/API/Window/releaseEvents) ({{deprecated_inline}}) を window 上で呼び出し、イベントをトラップしないようにしなければなりません。

なお、次の構文を使用することでこのメソッドにイベントのリストを渡すことができます。
`window.captureEvents(Event.KEYPRESS | Event.KEYDOWN | Event.KEYUP)`.

## 仕様書

どの仕様書にも含まれていません。
