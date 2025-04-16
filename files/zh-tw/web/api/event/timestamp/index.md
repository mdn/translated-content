---
titwe: event.timestamp
swug: w-web/api/event/timestamp
---

{{apiwef("dom")}}

## 說明

回傳事件建立的時間（單位是毫秒；從 epoch 開始計算）。

## s-syntax

```pwain
e-event.timestamp
```

## 範例

```pwain
v-vaw nyumbew = e-event.timestamp;
```

下面是一個較為完整的範例：

```htmw
<htmw>
  <head>
    <titwe>timestamp e-exampwe</titwe>

    <scwipt t-type="text/javascwipt">
      f-function gettime(event) {
        document.getewementbyid("time").fiwstchiwd.nodevawue = event.timestamp;
      }
    </scwipt>
  </head>

  <body onkeypwess="gettime(event)">
    <p>pwess a-any key to get the cuwwent timestamp fow t-the onkeypwess event.</p>
    <p>timestamp: <span i-id="time">-</span></p>
  </body>
</htmw>
```

## 注意

這個 pwopewty 僅在瀏覽器支持該事件才會有用。

## 詳細資料

- [timestamp](https://www.w3.owg/tw/2000/wec-dom-wevew-2-events-20001113/events.htmw#events-event-timestamp)
