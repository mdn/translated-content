---
title: 使用全螢幕模式
slug: Web/API/Fullscreen_API
---

{{DefaultAPISidebar("Fullscreen API")}}

全螢幕 API 提供一個簡便的方式使網頁可以使用佔用使用者的整個螢幕的方式來顯示內容。該 API 讓你能夠容易地指示瀏覽器使某個元素及其子系（如有）佔用整個螢幕，並隱藏螢幕上所有瀏覽器使用者介面及其他應用程式。

> [!NOTE]
> 目前並非所有瀏覽器均使用 API 的沒有前綴的版本。請查閱有關前綴以及名稱差異的表格（你也可以使用 Fscreen 來提供跨瀏覽器 API 存取）。

## 啟動全螢幕模式

如果你有一個元素打算以全螢幕模式展示（例如 {{ HTMLElement("video") }}），你可以呼叫該元素之 {{ domxref("Element.requestFullscreen()") }} 方法使之以全螢幕模式顯示。

考慮此 {{ HTMLElement("video") }} 元素：

```html
<video controls id="myvideo">
  <source src="somevideo.webm"></source>
  <source src="somevideo.mp4"></source>
</video>
```

我們可以使用指令碼將此影片全螢幕顯示：

```js
var elem = document.getElementById("myvideo");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
} else if (elem.msRequestFullscreen) {
  elem.msRequestFullscreen();
} else if (elem.mozRequestFullScreen) {
  elem.mozRequestFullScreen();
} else if (elem.webkitRequestFullscreen) {
  elem.webkitRequestFullscreen();
}
```

### 呈現差異

值得留意的是，Gecko 及 WebKit 的實作有關鍵分別：Gecko 會增加 CSS 規則讓全螢幕的元素展延至填滿整個螢幕："`width: 100%; height: 100%`"。WebKit 則不會執行此動作，取而代之的是把該元素置中，並以原先的大小顯示。要取得同樣的全螢幕行為，你需要為該元素自行添加 "`width: 100%; height: 100%;`" 的 CSS 規則：

```css
#myvideo:-webkit-full-screen {
  width: 100%;
  height: 100%;
}
```

另一方面，如果你嘗試在 Gecko 上模擬 WebKit 的行為，你需要把呈現的元素放置在另一個實際調整為全螢幕的元素裡面，再使用 CSS 規則來調整內部元素至你想要的外觀。

### 通知

如果成功進入全螢幕模式，包含該元素的文件將會接收到 [`fullscreenchange`](/zh-TW/docs/Web/API/Document/fullscreenchange_event) 事件。當離開全螢幕模式時，則會收到 [`fullscreenchange`](/zh-TW/docs/Web/API/Document/fullscreenchange_event) 事件。注意 [`fullscreenchange`](/zh-TW/docs/Web/API/Document/fullscreenchange_event) 事件並不提供任何資訊指示進入或離開全螢幕模式，但如果文件的 {{ domxref("document.fullscreenElement", "fullscreenElement") }} 屬性的值不為 null，則表示你正在處於全螢幕模式。

### 全螢幕要求失敗

並不是所有情況下都保證可以進入全螢幕模式。例如，{{ HTMLElement("iframe") }} 元素含有 [`allowfullscreen`](/zh-TW/docs/Web/HTML/Element/iframe#allowfullscreen) 屬性來選擇是否容許其內容能以全螢幕方式呈現。而且，例如視窗式外掛程式等的某些內容並不可以在全螢幕模式中顯示。把無法呈現為全螢幕的元素設定為全螢幕模式的嘗試都沒有作用，而要求顯示為全螢幕的元素會接收到 `mozfullscreenerror` 事件。當全螢幕要求失敗時，Firefox 會在網頁主控台上紀錄一則錯誤訊息，解釋要求失敗的原因。但在 Chrome 以及新版的 Opera 上，則不會產生這些錯誤訊息。

> [!NOTE]
> 全螢幕要求必須在事件處理常式中呼叫，否則將會被拒絕。

## 離開全螢幕模式

使用者永遠可以自行離開全螢幕模式，詳見 [Things your users want to know](#things_your_users_want_to_know)。你也可以呼叫 {{domxref("Document.exitFullscreen()")}} 方法來達到相同效果。

## 其他資訊

{{ domxref("document") }} 提供一些附加資訊，對於開發全螢幕網頁應用程式的時候非常有用：

- {{ domxref("document.fullscreenElement", "fullscreenElement") }}
  - : `fullscreenElement` 屬性傳回正在顯示為全螢幕模式的 {{ domxref("element") }}。如其為非 null 值，表示文件目前在全螢幕模式。如其為 null，表示文件目前不在全螢幕模式。
- {{ domxref("document.fullscreenEnabled", "fullscreenEnabled") }}
  - : `fullscreenEnabled` 屬性傳回文件是否容許你要求進入全螢幕訊息。

## 使用者可能想了解的訊息

你可能會讓使用者知道他們可以按 <kbd>ESC</kbd> 或 <kbd>F11</kbd> 鍵來離開全螢幕模式。

此外，瀏覽其他頁面、切換分頁、或切換到其他應用程式（例如按 鍵）亦會離開全螢幕模式。

## 範例

In this example, a video is presented in a web page. Pressing the Return or Enter key lets the user toggle between windowed and fullscreen presentation of the video.

[查看示例](/samples/domref/fullscreen.html)

### 監視 Enter 鍵

When the page is loaded, this code is run to set up an event listener to watch for the 'enter' key.

```js
document.addEventListener(
  "keydown",
  function (e) {
    if (e.keyCode == 13) {
      toggleFullScreen();
    }
  },
  false,
);
```

### Toggling fullscreen mode

This code is called when the user hits the Enter key, as seen above.

```js
function toggleFullScreen() {
  if (
    !document.fullscreenElement && // alternative standard method
    !document.mozFullScreenElement &&
    !document.webkitFullscreenElement &&
    !document.msFullscreenElement
  ) {
    // current working methods
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(
        Element.ALLOW_KEYBOARD_INPUT,
      );
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}
```

This starts by looking at the value of the `fullscreenElement` attribute on the {{ domxref("document") }} (checking it prefixed with both `moz`, `ms`, and `webkit`). If it's `null`, the document is currently in windowed mode, so we need to switch to fullscreen mode. Switching to fullscreen mode is done by calling either {{ domxref("element.mozRequestFullScreen()") }} `msRequestFullscreen()`or `webkitRequestFullscreen()`, depending on which is available.

If fullscreen mode is already active (`fullscreenElement` is non-`null`), we call {{ domxref("document.mozCancelFullScreen()") }}, `msExitFullscreen` or `webkitExitFullscreen()`, again depending on which browser is in use.

## 規範

{{Specifications}}

## 瀏覽器兼容性

{{Compat}}

## 非標準方法

These are some of the methods that browsers implemented before the standard was drafted. Having the standard methods described above it's better to avoid using the following ones:

- [`window.fullScreen`](/zh-TW/docs/DOM/window.fullScreen) (Firefox)
- `HTMLMediaElement.webkitDisplayingFullscreen`
- `HTMLMediaElement.webkitEnterFullscreen`
- `HTMLMediaElement.webkitExitFullscreen`
- `HTMLMediaElement.webkitSupportsFullscreen`

## 參見

- {{ domxref("element.mozRequestFullScreen()") }}
- {{ domxref("element.mozCancelFullScreen()") }}
- {{ domxref("document.mozFullScreen") }}
- {{ domxref("document.mozFullScreenElement") }}
- {{ domxref("document.mozFullScreenEnabled") }}
- {{ cssxref(":-moz-full-screen") }}
- {{ cssxref(":-moz-full-screen-ancestor") }}
- [`allowfullscreen`](/zh-TW/docs/Web/HTML/Element/iframe#allowfullscreen)
- [Blog post: Firefox's HTML full-screen API enabled in Nightly builds](https://blog.pearce.org.nz/2011/11/firefoxs-html-full-screen-api-enabled.html)
