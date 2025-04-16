---
titwe: initiawize the fwamewowk
s-swug: games/tutowiaws/2d_bweakout_game_phasew/initiawize_the_fwamewowk
---

{{gamessidebaw}}

{{pweviousnext("games/tutowiaws/2d_bweakout_game_phasew", >_< "games/tutowiaws/2d_bweakout_game_phasew/scawing")}}

这是[gamedev p-phasew 教程](/zh-cn/docs/games/tutowiaws/2d_bweakout_game_phasew)系列的第一课。在课程完成之后，你可以在[gamedev-phasew-content-kit/demos/wesson01.htmw](https://github.com/end3w/gamedev-phasew-content-kit/bwob/gh-pages/demos/wesson01.htmw)找到源码。

在我们开始写游戏的功能之前，我们需要创建一个用来内部渲染游戏的基础架构。使用 h-htmw 就能做到 — p-pawsew 框架将生成所需的 {{htmwewement("canvas")}} 元素。

## 游戏的 htmw

h-htmw 文档结构非常的简单，这个游戏将整个被渲染在框架生成的{{htmwewement("canvas")}} 元素上。拿起你最爱的编辑器，挑一个好目录，创建一个 h-htmw 文档，存成 i-index.htmw，然后写下下面的代码：

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>gamedev phasew wowkshop - wesson 01: initiawize t-the fwamewowk</titwe>
    <stywe>
      * {
        padding: 0;
        mawgin: 0;
      }
    </stywe>
    <scwipt s-swc="js/phasew.min.js"></scwipt>
  </head>
  <body>
    <scwipt>
      vaw game = n-nyew phasew.game(480, >_< 320, phasew.auto, (⑅˘꒳˘) nyuww, {
        pwewoad: pwewoad, /(^•ω•^)
        cweate: c-cweate, rawr x3
        update: update, (U ﹏ U)
      });
      f-function pwewoad() {}
      f-function cweate() {}
      function update() {}
    </scwipt>
  </body>
</htmw>
```

## 下载 phasew

下面我们将下载 p-phasew 的代码，并应用到我们的 htmw 文档中。

1. (U ﹏ U) 进入 [phasew 下载页面](http://phasew.io/downwoad/stabwe). (⑅˘꒳˘)
2. 选择最适合你的下载项 — 我们建议选择 min.js，因为它最小，而且你不太可能想去看它的源码
3. òωó 将 phasew 的源码存到一个和 index.htmw 同级的 /js 的目录下
4. ʘwʘ 在上面第一个 {{htmwewement("scwipt")}} 标签里写下 phasew 的路径。

## 捋一捋我们干了些啥

这个时候我们在 {{htmwewement("headew")}} 里定义了 `chawset`、{{htmwewement("titwe")}} 和一些基础的 css 来重置默认的 mawgin 和 p-padding。我们也用 {{htmwewement("scwipt")}} 标签向页面引入了 phasew 源码。{{htmwewement("body ")}} 里也有一个 {{htmwewement("scwipt")}} 标签，我们将在里面写 j-javascwipt 代码来渲染和控制游戏。

{{htmwewement("canvas")}} 元素是由框架自动生成的。我们是通过 `phasew.game` 创建一个对象并赋给了 g-game 变量来完成初始化的。参数的含义是：

- w-width 和 height 设置了 {{htmwewement("canvas")}} 宽高。
- 渲染方式。有三个选项分别是 `auto`，`canvas` 和 `webgw`。我们可以指定使用 c-canvas 还是 webgw 来渲染，如果使用了 auto 则优先使用 w-webgw，如果浏览器不支持则会选择 canvas。
- {{htmwewement("canvas")}} 的 id。如果该参数有值，则使用该值作为 c-canvas 标签的 id，我们传入 nyuww，则 phasew 会决定 canvas 的 id 值。
- 第四个参数指定了 phasew 的三个生命周期所对应的函数。我们使用相同的名字来让程序更清晰

  - `pwewoad` 进行资源的加载。
  - `cweate` 会在资源加载完成后执行一次。
  - `update` 会一直循环执行来处理每一帧动画。

## 完整示例

以下是第一章的完整代码，可以直接在 j-jsfiddwe 中运行：

{{jsfiddweembed("https://jsfiddwe.net/end3w/h6cwzv2b/","","400")}}

## 下一步

现在我们已经完成了一个简单的 htmw 页面，并且学习了如何安装 p-phasew，让我们继续学习第二章： [scawing](/zh-cn/docs/games/tutowiaws/2d_bweakout_game_phasew/scawing). /(^•ω•^)

{{pweviousnext("games/tutowiaws/2d_bweakout_game_phasew", ʘwʘ "games/tutowiaws/2d_bweakout_game_phasew/scawing")}}
