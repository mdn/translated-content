---
title: 使用纯 JavaScript 开发 2D 打砖块游戏
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript
l10n:
  sourceCommit: 4483da6501d1c735a0e1ac1e95775e2fe1766dc3
---

{{Next("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it")}}

在这里我们完全将使用纯 JavaScript 语言和用于渲染的 HTML {{htmlelement("canvas")}} 标签，一步一步的绘制一个 **MDN 打砖块**游戏。

过程中的每一步都会有例子可供体验，让你更清晰的了解他的制作过程。你将学习到如何使用 {{htmlelement("canvas")}} 标签的基本语法去实现简单游戏的渲染、动画、碰撞、控制胜负。

为了更快速高效的学习本系列教程，你需要掌握 [JavaScript](/zh-CN/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity) 的一些基础知识。学习完本教程之后你就可以创建自己的 Web 游戏了。

![MDN 打砖块游戏的游戏画面，你可以使用球拍击打小球以摧毁砖块阵列，同时屏幕上会显示得分和剩余生命次数](mdn-breakout-gameplay.png)

## 教程详情

全部教程——[MDN 打砖块游戏](http://breakout.enclavegames.com/lesson10.html) 的各个版本我们正一起管理并托管到 [GitHub](https://github.com/end3r/Canvas-gamedev-workshop) 上：

1. [创建、绘制画布](/zh-CN/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it)
2. [让球动起来](/zh-CN/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball)
3. [反弹的墙](/zh-CN/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls)
4. [键盘操作](/zh-CN/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls)
5. [游戏结束](/zh-CN/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over)
6. [创建砖块](/zh-CN/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Build_the_brick_field)
7. [撞击处理](/zh-CN/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection)
8. [统计得分、获得胜利](/zh-CN/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win)
9. [鼠标控制](/zh-CN/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Mouse_controls)
10. [完成](/zh-CN/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Finishing_up)

对于 Web 游戏开发，最好的方式是从纯 JavaScirpt 着手，那样可以让我们建立更坚实的基础。之后你可以在你的项目中选择你喜欢的框架。框架也只是用 JavaScript 语言实现的工具；如果你想要在项目中使用框架，你必须先了解语言本身。框架可以帮你提高开发效率并生成一些基础的内容；但是如果没有达到你的预期，你只能慢慢调试或者使用原生 JavaScript 去实现解决方案。

> [!NOTE]
> 本系列教程可以用作游戏开发工作室的素材资源。如果你想探讨普通的游戏开发，你可以利用 [Gamedev Canvas 内容套件](https://github.com/end3r/Gamedev-Canvas-Content-Kit)以及本教程的内容。
>
> 如果你对使用第三方游戏资源库开发 2d 网页游戏感兴趣，可以参考本系列教程的[使用 Phaser 开发 2D 打砖块游戏](/zh-CN/docs/Games/Tutorials/2D_breakout_game_Phaser)。

## 下一步

好，让我们开始吧。第一步——[创建、绘制画布](/zh-CN/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it)

{{Next("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it")}}
