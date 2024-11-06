---
title: Event.timeStamp
slug: Web/API/Event/timeStamp
---

{{ApiRef("DOM")}}

## 說明

回傳事件建立的時間（單位是毫秒；從 epoch 開始計算）。

## Syntax

```plain
event.timeStamp
```

## 範例

```plain
var number = event.timeStamp;
```

下面是一個較為完整的範例：

```html
<html>
  <head>
    <title>timeStamp example</title>

    <script type="text/javascript">
      function getTime(event) {
        document.getElementById("time").firstChild.nodeValue = event.timeStamp;
      }
    </script>
  </head>

  <body onkeypress="getTime(event)">
    <p>Press any key to get the current timestamp for the onkeypress event.</p>
    <p>timeStamp: <span id="time">-</span></p>
  </body>
</html>
```

## 注意

這個 property 僅在瀏覽器支持該事件才會有用。

## 詳細資料

- [timestamp](https://www.w3.org/TR/2000/REC-DOM-Level-2-Events-20001113/events.html#Events-Event-timeStamp)
