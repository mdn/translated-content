---
title: 測試媒體查詢
slug: Web/CSS/CSS_media_queries/Testing_media_queries
---

{{CSSRef}}{{SeeCompatTable}}

DOM 提供了一個用程式去測試 media query 的方法：那就是透過 {{domxref("MediaQueryList") }} 物件；透過 {{domxref("MediaQueryList") }} 物件上的屬性和方法，我們可以得知、觀察目前 media query 的狀態。

## 創建 media query list 物件

透過傳入目標 medai query 到 {{domxref("window.matchMedia") }} 方法，我們將可以取得相對應的 MediaQueryList 物件。

以下範例將取得偵測螢幕方向的 MediaQueryList 物件：

```plain
var mql = window.matchMedia("(orientation: portrait)");
```

## 檢查 media query 結果

讀取 MediaQueryList 物件 的 matches 屬性就可以得知測試結果：

```js
if (mql.matches) {
  /* The device is currently in portrait orientation */
} else {
  /* The device is currently in landscape orientation */
}
```

## 接收測試結果通知

當我們想要動態依據 media query 測試狀況執行對應處理，除了持續定期偵測外，還有一個更有效率的途徑：那就是註冊 media query 的事件處理器 (listener)。只要呼叫 MediaQueryList 物件上 addListener 方法，傳入符合 {{domxref("MediaQueryListListener") }} 介面的 listener 便完成事件註冊：

```js
var mql = window.matchMedia("(orientation: portrait)");
mql.addListener(handleOrientationChange);
handleOrientationChange(mql);
```

上面我們替螢幕方向 media query 註冊了一個 listener。請注意，在第一次註冊後，listener 會立刻被呼叫一次，這是為了初始化準備，因為我們可能預設 UI 是針對 'portait' 模式，但目前卻是 'landscape' 模式，所以這個第一次呼叫將給予我們作初始化調整的空間。

`下面handleOrientationChange()` 方法便是我們針對螢幕方向變化的 listener：

```js
function handleOrientationChange(mql) {
  if (mql.matches) {
    /* The device is currently in portrait orientation */
  } else {
    /* The device is currently in landscape orientation */
  }
}
```

## 停止接收測試結果通知

當我們不需要接受通知時，只需要呼叫 removeListener 方法，然後傳入欲移除的 listener 即可：

```plain
mql.removeListener(handleOrientationChange);
```

## 瀏覽器相容性

{{Compat}}

## 延伸閱讀

- [Media queries](/zh-TW/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- {{domxref("window.matchMedia()") }}
- {{domxref("MediaQueryList") }}
- {{domxref("MediaQueryListListener") }}
