---
title: Screen.orientation
slug: Web/API/Screen/orientation
---

{{APIRef("CSSOM View")}}{{SeeCompatTable}}

`Screen.orientation` 屬性可以取得螢幕目前的方向。

## 語法

```plain
var orientation = window.screen.orientation.type;
```

## 回傳值

回傳值為一個代表螢幕方向的字串，可能是 `portrait-primary`、`portrait-secondary`、`landscape-primary` 或 `landscape-secondary`（請參考 {{domxref("window.screen.lockOrientation","lockOrientation")}} 以瞭解更多資訊）。

## 範例

```js
var orientation =
  screen.orientation || screen.mozOrientation || screen.msOrientation;

if (orientation.type === "landscape-primary") {
  console.log("That looks good.");
} else if (orientation.type === "landscape-secondary") {
  console.log("Mmmh... the screen is upside down!");
} else if (
  orientation.type === "portrait-secondary" ||
  orientation.type === "portrait-primary"
) {
  console.log("Mmmh... you should rotate your device to landscape");
}
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{domxref("Screen.orientation")}}
- {{domxref("Screen.unlockOrientation()")}}
- {{domxref("Screen.onorientationchange")}}
- [控制畫面方向](/zh-TW/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
