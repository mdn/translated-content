---
title: 管理螢幕方向
slug: Web/API/CSS_Object_Model/Managing_screen_orientation
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{DefaultAPISidebar("Screen Orientation API")}}

*螢幕方向*這個術語是指瀏覽器[視區](/zh-TW/docs/Glossary/Viewport)是處於橫向模式（也就是視區的寬度大於高度），還是直向模式（視區的高度大於寬度）。

CSS 提供了 [`orientation`](/zh-TW/docs/Web/CSS/Reference/At-rules/@media/orientation) 媒體功能，允許根據螢幕方向調整版面配置。

[Screen Orientation API](/zh-TW/docs/Web/API/Screen_Orientation_API) 提供了一個程式化的 JavaScript API，用於處理螢幕方向，包括將視區鎖定為特定方向的功能。

## 根據方向調整版面配置

最常見的方向變更案例之一是當你希望根據裝置的方向調整內容的版面配置。例如，你可能希望按鈕列沿著裝置顯示器的最長的方向延伸。透過使用媒體查詢，你可以輕鬆且自動地實現這一點。

以下是一個包含 HTML 程式碼的範例：

```html
<ul id="toolbar">
  <li>A</li>
  <li>B</li>
  <li>C</li>
</ul>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacinia nisi nec
  sem viverra vitae fringilla nulla ultricies. In ac est dolor, quis tincidunt
  leo. Cras commodo quam non tortor consectetur eget rutrum dolor ultricies. Ut
  interdum tristique dapibus. Nullam quis malesuada est.
</p>
```

CSS 依賴方向媒體查詢來根據螢幕方向處理特定樣式：

```css
/* 首先定義一些通用樣式 */

html,
body {
  width: 100%;
  height: 100%;
}

body {
  border: 1px solid black;

  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

p {
  font: 1em sans-serif;
  margin: 0;
  padding: 0.5em;
}

ul {
  list-style: none;

  font: 1em monospace;
  margin: 0;
  padding: 0.5em;

  -moz-box-sizing: border-box;
  box-sizing: border-box;

  background: black;
}

li {
  display: inline-block;
  margin: 0;
  padding: 0.5em;
  background: white;
}
```

一旦我們有了一些通用樣式，就可以開始為特定方向定義特殊情況：

```css
/* 對於直向模式，我們希望工具列位於頂部 */

@media screen and (orientation: portrait) {
  #toolbar {
    width: 100%;
  }
}

/* 對於橫向模式，我們希望工具列固定在左側 */

@media screen and (orientation: landscape) {
  #toolbar {
    position: fixed;
    width: 2.65em;
    height: 100%;
  }

  p {
    margin-left: 2em;
  }

  li + li {
    margin-top: 0.5em;
  }
}
```

以下是結果：

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">直向模式</th>
      <th scope="col">橫向模式</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <div>
          {{ EmbedLiveSample('根據方向調整版面配置', 180, 350) }}
        </div>
      </td>
      <td>
        <div>
          {{ EmbedLiveSample('根據方向調整版面配置', 350, 180) }}
        </div>
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> 方向媒體查詢實際上是根據瀏覽器視窗（或內嵌框架）的方向，而不是裝置的方向來應用。

## 鎖定螢幕方向

某些裝置（主要是行動裝置）可以根據其本身的方向動態改變螢幕的方向，確保使用者始終能夠閱讀螢幕上的內容。雖然這種行為很適合文字內容，但某些內容可能會受到方向變更的負面影響。例如，基於裝置方向的遊戲可能會因為方向變更而出現問題。

螢幕方向 API 是為了防止或處理這種變更而設計的。

### 監聽方向變更

每當螢幕方向改變時，{{domxref("ScreenOrientation")}} 介面的 {{domxref("ScreenOrientation.change_event", "change")}} 事件就會被觸發：

```js
screen.orientation.addEventListener("change", () => {
  console.log(`螢幕的方向是：${screen.orientation}`);
});
```

### 防止方向變更

任何網頁應用程式都可以根據自身需求鎖定螢幕方向。螢幕方向是透過 {{domxref("ScreenOrientation.lock()", "screen.orientation.lock()")}} 方法鎖定的，並可透過 {{domxref("ScreenOrientation.unlock()", "screen.orientation.unlock()")}} 方法解鎖。

{{domxref("ScreenOrientation.lock()", "screen.orientation.lock()")}} 方法接受以下值之一來定義要應用的鎖定類型：`any`、`natural`、`portrait-primary`、`portrait-secondary`、`landscape-primary`、`landscape-secondary`、`portrait` 和 `landscape`：

```js
screen.orientation.lock();
```

此方法會回傳一個 [Promise](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Promise)，在鎖定成功後解析。

> [!NOTE]
> 螢幕鎖定是以網頁應用程式為基準的。如果應用程式 A 鎖定為 `landscape` 模式，而應用程式 B 鎖定為 `portrait` 模式，在兩個應用程式間切換時不會觸發 `ScreenOrientation` 的 `change` 事件，因為兩個應用程式各自保持其原有的方向。
>
> 然而，如果為了滿足鎖定要求而必須改變方向，則可能會觸發 `change` 事件。

## 參見

- {{domxref("Screen.orientation", "screen.orientation")}}
- {{domxref("ScreenOrientation")}}
- {{domxref("ScreenOrientation")}} 的 {{DOMxRef("ScreenOrientation.change_event", "change")}} 事件
- [方向媒體查詢](/zh-TW/docs/Web/CSS/Reference/At-rules/@media/orientation)
