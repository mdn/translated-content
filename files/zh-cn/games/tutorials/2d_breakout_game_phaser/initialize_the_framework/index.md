---
title: Initialize the framework
slug: Games/Tutorials/2D_breakout_game_Phaser/Initialize_the_framework
---

{{GamesSidebar}}

{{PreviousNext("Games/Tutorials/2D_Breakout_game_Phaser", "Games/Tutorials/2D_Breakout_game_Phaser/Scaling")}}

这是[Gamedev Phaser 教程](/zh-CN/docs/Games/Workflows/2D_Breakout_game_Phaser)系列的第一课。在课程完成之后，你可以在[Gamedev-Phaser-Content-Kit/demos/lesson01.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson01.html)找到源码。

在我们开始写游戏的功能之前，我们需要创建一个用来内部渲染游戏的基础架构。使用 HTML 就能做到 — Parser 框架将生成所需的 {{htmlelement("canvas")}} 元素。

## 游戏的 HTML

HTML 文档结构非常的简单，这个游戏将整个被渲染在框架生成的{{htmlelement("canvas")}} 元素上。拿起你最爱的编辑器，挑一个好目录，创建一个 HTML 文档，存成 index.html，然后写下下面的代码：

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Gamedev Phaser Workshop - lesson 01: Initialize the framework</title>
    <style>
      * {
        padding: 0;
        margin: 0;
      }
    </style>
    <script src="js/phaser.min.js"></script>
  </head>
  <body>
    <script>
      var game = new Phaser.Game(480, 320, Phaser.AUTO, null, {
        preload: preload,
        create: create,
        update: update,
      });
      function preload() {}
      function create() {}
      function update() {}
    </script>
  </body>
</html>
```

## 下载 Phaser

下面我们将下载 Phaser 的代码，并应用到我们的 HTML 文档中。

1. 进入 [Phaser 下载页面](http://phaser.io/download/stable).
2. 选择最适合你的下载项 — 我们建议选择 min.js，因为它最小，而且你不太可能想去看它的源码
3. 将 Phaser 的源码存到一个和 index.html 同级的 /js 的目录下
4. 在上面第一个 {{htmlelement("script")}} 标签里写下 phaser 的路径。

## 捋一捋我们干了些啥

这个时候我们在 {{htmlelement("header")}} 里定义了 `charset`、{{htmlelement("title")}} 和一些基础的 css 来重置默认的 margin 和 padding。我们也用 {{htmlelement("script")}} 标签向页面引入了 Phaser 源码。{{htmlelement("body ")}} 里也有一个 {{htmlelement("script")}} 标签，我们将在里面写 JavaScript 代码来渲染和控制游戏。

{{htmlelement("canvas")}} 元素是由框架自动生成的。我们是通过 `Phaser.Game` 创建一个对象并赋给了 game 变量来完成初始化的。参数的含义是：

- width 和 height 设置了 {{htmlelement("canvas")}} 宽高。
- 渲染方式。有三个选项分别是 `AUTO`，`CANVAS` 和 `WEBGL`。我们可以指定使用 Canvas 还是 WebGL 来渲染，如果使用了 Auto 则优先使用 WebGL，如果浏览器不支持则会选择 Canvas。
- {{htmlelement("canvas")}} 的 id。如果该参数有值，则使用该值作为 canvas 标签的 id，我们传入 null，则 phaser 会决定 canvas 的 id 值。
- 第四个参数指定了 phaser 的三个生命周期所对应的函数。我们使用相同的名字来让程序更清晰

  - `preload` 进行资源的加载。
  - `create` 会在资源加载完成后执行一次。
  - `update` 会一直循环执行来处理每一帧动画。

## 完整示例

以下是第一章的完整代码，可以直接在 JSFiddle 中运行：

{{JSFiddleEmbed("https://jsfiddle.net/end3r/h6cwzv2b/","","400")}}

## 下一步

现在我们已经完成了一个简单的 HTML 页面，并且学习了如何安装 Phaser，让我们继续学习第二章： [scaling](/zh-CN/docs/Games/Workflows/2D_Breakout_game_Phaser/Scaling).

{{PreviousNext("Games/Tutorials/2D_Breakout_game_Phaser", "Games/Tutorials/2D_Breakout_game_Phaser/Scaling")}}
