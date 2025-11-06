---
title: 管理屏幕方向
slug: Web/API/CSS_Object_Model/Managing_screen_orientation
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{DefaultAPISidebar("Screen Orientation API")}}

术语*屏幕方向*指的是浏览器[视口](/zh-CN/docs/Glossary/Viewport)是处于横向模式（即视口的宽度大于其高度），还是纵向模式（视口的高度大于其宽度）。

CSS 提供了 [`orientation`](/zh-CN/docs/Web/CSS/Reference/At-rules/@media/orientation) 媒体特性，允许根据屏幕方向调整布局。

[屏幕方向 API](/zh-CN/docs/Web/API/Screen_Orientation_API) 提供了一个用于处理屏幕方向的 JavaScript 编程接口——包括将视口锁定到特定方向的能力。

## 根据方向调整布局

屏幕方向变化最常见的情况之一是根据设备方向调整内容布局。例如，你可能希望按钮栏沿设备显示屏的最长维度延伸。通过使用媒体查询，你可以轻松且自动地实现这一点。

以下是一个示例 HTML 代码：

```html
<ul id="toolbar">
  <li>A</li>
  <li>B</li>
  <li>C</li>
</ul>

<p>
  照顾病人、跟随病人很重要，但会发生在这样的时候，有很多工作和痛苦。细究起来，任何人都不应该从事任何一种工作，除非他能从中得到一些好处。不要在愤怒中在痛苦中在斥责中在快乐中他想要成为一根头发，从痛苦中希望没有滋生。除非被情欲蒙蔽，否则他们就没有过错；那些放弃职责、软化灵魂的人，即劳动者。
</p>
```

CSS 使用 orientation 媒体查询根据屏幕方向处理特定样式：

```css
/* 首先定义一些通用样式 */

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

定义通用样式后，我们可以开始为不同方向定义特殊样式：

```css
/* 对于纵向模式，我们希望工具栏位于顶部 */

@media screen and (orientation: portrait) {
  #toolbar {
    width: 100%;
  }
}

/* 对于横向模式，我们希望工具栏固定在左侧 */

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

以下是结果：

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">纵向模式</th>
      <th scope="col">横向模式</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <div>
          {{ EmbedLiveSample('根据方向调整布局', 180, 350) }}
        </div>
      </td>
      <td>
        <div>
          {{ EmbedLiveSample('根据方向调整布局', 350, 180) }}
        </div>
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> orientation 媒体查询实际上是根据浏览器窗口（或 iframe）的方向应用的，而不是设备的方向。

## 锁定屏幕方向

某些设备（主要是移动设备）可以根据自身方向动态改变屏幕方向，确保用户始终能够阅读屏幕上的内容。虽然这种行为非常适合文本内容，但某些内容可能会因方向变化而受到负面影响。例如，基于设备方向的游戏可能会因方向变化而出现问题。

屏幕方向 API 用于防止或处理这种方向变化。

### 监听方向变化

每次屏幕方向发生变化时，{{domxref("ScreenOrientation.change_event", "change")}} 事件会在 {{domxref("ScreenOrientation")}} 接口上触发：

```js
screen.orientation.addEventListener("change", () => {
  console.log(`屏幕的方向是：${screen.orientation}`);
});
```

### 防止方向变化

任何 Web 应用程序都可以根据自身需求锁定屏幕方向。屏幕方向通过 {{domxref("ScreenOrientation.lock()", "screen.orientation.lock()")}} 方法锁定，并通过 {{domxref("ScreenOrientation.unlock()", "screen.orientation.unlock()")}} 方法解锁。

{{domxref("ScreenOrientation.lock()", "screen.orientation.lock()")}} 方法接受以下值之一来定义要应用的锁定类型：`any`、`natural`、`portrait-primary`、`portrait-secondary`、`landscape-primary`、`landscape-secondary`、`portrait` 和 `landscape`：

```js
screen.orientation.lock();
```

它返回一个 [Promise](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，在锁定成功后兑现。

> [!NOTE]
> 屏幕锁定是 Web 应用程序相关的。如果应用程序 A 锁定为 `landscape`，而应用程序 B 锁定为 `portrait`，从应用程序 A 切换到 B 或从 B 切换到 A 不会触发 `ScreenOrientation` 上的 `change` 事件，因为两个应用程序都会保持它们的方向。
>
> 然而，如果为了满足锁定要求而必须更改方向，则可能会触发 `change` 事件。

## 参见

- {{domxref("Screen.orientation", "screen.orientation")}}
- {{domxref("ScreenOrientation")}}
- {{DOMxRef("ScreenOrientation.change_event", "change")}} 事件的 {{domxref("ScreenOrientation")}}
- [orientation 媒体查询](/zh-CN/docs/Web/CSS/Reference/At-rules/@media/orientation)
