---
title: HTMLMediaElement.readyState
slug: Web/API/HTMLMediaElement/readyState
---

{{APIRef("HTML DOM")}}

**`HTMLMediaElement.readyState`** 屬性回傳目前媒體的就緒狀態。

## 語法

```plain
var readyState = audioOrVideo.readyState;
```

### 值

一個 `unsigned short`，可能的值有：

| 常數              | 值  | 描述                                                                                                 |
| ----------------- | --- | ---------------------------------------------------------------------------------------------------- |
| HAVE_NOTHING      | 0   | 沒有可用的媒體資源。                                                                                 |
| HAVE_METADATA     | 1   | 已經取得足夠的媒體資源並已初始化元資料。繼續取得媒體資源不會導致例外。                               |
| HAVE_CURRENT_DATA | 2   | 媒體資料已經足夠播放目前的時間，但沒有足夠的資料再播放一幀。                                         |
| HAVE_FUTURE_DATA  | 3   | 資料已經足夠播放目前的時間，而且有至少一點點資料可以播放未來的時間（換句話說，可能只多了一到兩幀）。 |
| HAVE_ENOUGH_DATA  | 4   | 資料足夠，且下載率夠高。媒體可以播放到結束而不被中斷。                                               |

## 範例

下面這個例子會監聽 \`example\` 這個元素，並檢查是否已載入足夠的媒體資源。如果是的話，它會繼續播放。

```html
<audio id="example" preload="auto">
  <source src="sound.ogg" type="audio/ogg" />
</audio>
```

```js
var obj = document.getElementById("example");

obj.addEventListener("loadeddata", function () {
  if (obj.readyState >= 2) {
    obj.play();
  }
});
```

## 標準

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 也參考看看

- The interface defining it, {{domxref("HTMLMediaElement")}}.
