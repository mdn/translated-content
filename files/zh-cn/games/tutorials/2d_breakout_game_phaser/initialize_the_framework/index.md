---
title: 初始化框架
slug: Games/Tutorials/2D_breakout_game_Phaser/Initialize_the_framework
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser", "Games/Tutorials/2D_breakout_game_Phaser/Scaling")}}

这是 [Gamedev Phaser 教程](/zh-CN/docs/Games/Tutorials/2D_breakout_game_Phaser)系列的第一步。在开始编写游戏功能之前，我们需要创建一个用于渲染游戏的基本结构。这可以通过 HTML 来实现——Phaser 框架会生成所需的 {{htmlelement("canvas")}} 元素。

## 游戏的 HTML

HTML 文档结构非常简单，这个游戏将整个被渲染在框架生成的{{htmlelement("canvas")}} 元素上。使用你喜欢的文本编辑器，创建一个新的 HTML 文档，将其保存为 `index.html`，放在一个合适的位置，并在其中添加以下代码：

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <title>游戏开发 Phaser 工作坊——第 01 课：初始化框架</title>
    <style>
      * {
        padding: 0;
        margin: 0;
      }
    </style>
    <script src="js/phaser.min.js"></script>
    <script src="js/script.js" defer></script>
  </head>
  <body></body>
</html>
```

然后在与 `index.html` 文件位于同一目录下创建一个新的 `js` 目录，并在其中创建一个名为 `script.js` 的新文件。我们将在此处编写控制游戏的 JavaScript 代码。初始时，该文件应包含以下内容：

```js
class ExampleScene extends Phaser.Scene {
  preload() {}
  create() {}
  update() {}
}

const config = {
  type: Phaser.CANVAS,
  width: 480,
  height: 320,
  scene: ExampleScene,
};

const game = new Phaser.Game(config);
```

## 下载 Phaser 代码

接下来，我们需要下载 Phaser 源代码并将其应用到我们的 HTML 文档中。本教程使用的是 Phaser v3（截至撰写本文时为 v3.90.0，但较新的次要版本应该也能正常工作）。

1. 访问 [Phaser 下载页面](https://phaser.io/download/stable)。
2. 选择最适合你的选项——我们推荐选择 _phaser.min.js_ 选项，因为它能使源代码更小，而且你通常也不会去查看源代码。
3. 将 Phaser 代码保存到 `js` 目录中。如果你使用了其他文件名，请务必相应地更新 HTML 中第一个 {{htmlelement("script")}} 元素的 `src` 属性值。

## 回顾我们目前取得的进展

这个时候我们在 {{htmlelement("header")}} 里定义了 `charset`、{{htmlelement("title")}} 和一些基础的 CSS 来重置默认的 `margin` 和 `padding`。我们也用 {{htmlelement("script")}} 标签向页面引入了 Phaser 源码。{{htmlelement("body")}} 里也有一个 {{htmlelement("script")}} 标签，我们将在里面写 JavaScript 代码来渲染和控制游戏。

{{htmlelement("canvas")}} 元素由框架自动生成。我们通过创建一个新的 `Phaser.Game` 对象并将其赋值给 `game` 变量来初始化它。参数如下：

- 渲染方式。可选选项包括 `AUTO`、`CANVAS`、`WEBGL` 和 `HEADLESS`。我们可以显式设置 `CANVAS` 或 `WEBGL`，也可以使用 `AUTO` 让 Phaser 自动决定使用哪一种。通常，如果浏览器支持 WebGL，它会优先使用 WebGL；如果不支持，则回退到 Canvas 2D。最后一个选项 `HEADLESS` 用于服务器端渲染或测试，与本教程无关。
- width 和 height 用于设置 {{htmlelement("canvas")}} 宽高。
- 要添加到游戏中的场景。在此示例中，我们将创建一个名为 `ExampleScene` 的新类，该类继承自 `Phaser.Scene`。该类实现了 Phaser 在游戏生命周期不同阶段调用的方法。我们稍后将实现以下方法：
  - `preload` 负责预加载资源。
  - `create` 在所有内容加载完毕并准备就绪时执行一次。
  - `update` 在每一帧执行一次。

## 运行应用程序

要运行该应用程序，不能直接打开 `index.html` 文件，因为后续我们会加载外部资源，而这些资源会被浏览器的[同源策略](/zh-CN/docs/Web/Security/Defenses/Same-origin_policy)阻止。

要解决这个问题，你需要运行一个本地 Web 服务器来提供 HTML 文件和图片文件。[正如 Phaser 的官方文档所建议的那样](https://docs.phaser.io/phaser/getting-started/set-up-dev-environment#installing-a-web-server)，我们有很多选择来运行本地 Web 服务器。我们还提供了[关于设置本地服务器的教程](/zh-CN/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server)——可以选择任何喜欢的方案。例如，如果选择使用 Python HTTP 服务器，请打开终端，导航至 `index.html` 文件所在的目录，并运行以下命令：

```bash
python3 -m http.server
```

这将在 8000 端口上启动一个简单的 HTTP 服务器。随后，打开网页浏览器并访问 `http://localhost:8000/index.html`。

## 比较你的代码

以下是你目前应该得到的结果，可以实时运行。若要查看其源代码，请点击“运行”按钮。

```html hidden
<script src="https://cdnjs.cloudflare.com/ajax/libs/phaser/3.90.0/phaser.js"></script>
```

```css hidden
* {
  padding: 0;
  margin: 0;
}
```

```js hidden
class ExampleScene extends Phaser.Scene {
  preload() {}
  create() {}
  update() {}
}

const config = {
  type: Phaser.CANVAS,
  width: 480,
  height: 320,
  scene: ExampleScene,
};

const game = new Phaser.Game(config);
```

{{EmbedLiveSample("比较你的代码", "", 480, , , , , "allow-modals")}}

## 下一步

现在我们已经设置好了基本的 HTML 代码，并简单了解了 Phaser 的初始化，接下来让我们进入第二课，学习[缩放](/zh-CN/docs/Games/Tutorials/2D_breakout_game_Phaser/Scaling)。

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser", "Games/Tutorials/2D_breakout_game_Phaser/Scaling")}}
