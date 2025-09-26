---
title: 使用 Phaser 开发 2D breakout game
slug: Games/Tutorials/2D_breakout_game_Phaser
---

{{Next("Games/Workflows/2D_Breakout_game_Phaser/Initialize_the_framework")}}

在这个手把手的教程中，我们将使用 Phaser 框架制作一个使用 JavaScript 构建简单的 MDN 消除游戏。

教程的每一步骤都会有可供修改的样品来玩，所以你可以看到开发的每一步中间步骤。你将学到如何使用 Phaser 框架来实现基础游戏机制的基本知识，诸如渲染和移动图像，碰撞检测，控制机制，框架特定的帮助器功能，动画和补间，以及获胜和失败状态等。

为了充分理解这一系列的文章，你应该确保已有基本的中级 JavaScript 知识。学完本教程，你将有能力用 Phaser 构建简单的 Web 游戏。

![Gameplay screen from the game MDN Breakout created with Phaser where you can use your paddle to bounce the ball and destroy the brick field, with keeping the points and lives.](mdn-breakout-phaser.png)

## 教学清单

所有的课程 — 以及我们接下来将一起做的各个版本的 [MDN Breakout game](https://end3r.github.io/Gamedev-Phaser-Content-Kit/demos/lesson16.html) 都能在 [GitHub](https://end3r.github.io/Gamedev-Phaser-Content-Kit/demos/)上找到

1. [初始化框架](/zh-CN/docs/Games/Tutorials/2D_breakout_game_Phaser/Initialize_the_framework)
2. [缩放](/zh-CN/docs/Games/Tutorials/2D_breakout_game_Phaser/Scaling)
3. [加载资源并在屏幕上打印](/zh-CN/docs/Games/Tutorials/2D_breakout_game_Phaser/Load_the_assets_and_print_them_on_screen)
4. [移动小球](/zh-CN/docs/Games/Tutorials/2D_breakout_game_Phaser/Move_the_ball)
5. [物理](/zh-CN/docs/Games/Tutorials/2D_breakout_game_Phaser/Physics)
6. [从墙上弹开](/zh-CN/docs/Games/Tutorials/2D_breakout_game_Phaser/Bounce_off_the_walls)
7. [弹块和控制](/zh-CN/docs/Games/Tutorials/2D_breakout_game_Phaser/Player_paddle_and_controls)
8. [游戏结束](/zh-CN/docs/Games/Tutorials/2D_breakout_game_Phaser/Game_over)
9. [建立砖块](/zh-CN/docs/Games/Tutorials/2D_breakout_game_Phaser/Build_the_brick_field)
10. [碰撞检测](/zh-CN/docs/Games/Tutorials/2D_breakout_game_Phaser/Collision_detection)
11. [得分](/zh-CN/docs/Games/Tutorials/2D_breakout_game_Phaser/The_score)
12. [胜利](/zh-CN/docs/Games/Tutorials/2D_breakout_game_Phaser/Win_the_game)
13. [额外生命](/zh-CN/docs/Games/Tutorials/2D_breakout_game_Phaser/Extra_lives)
14. [动画与补间](/zh-CN/docs/Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens)
15. [按钮](/zh-CN/docs/Games/Tutorials/2D_breakout_game_Phaser/Buttons)
16. [随机游戏](/zh-CN/docs/Games/Tutorials/2D_breakout_game_Phaser/Randomizing_gameplay)

学习路线的小提示 — 最好先熟悉使用原生 JavaScript 进行网页游戏开发，这样可以打下坚实的基础。如果你还不熟悉原生 javascript 开发，我们建议你先过一遍这个系列，[使用原生 Javascript 开发 MDN 消除游戏](/zh-CN/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript).

在那之后，你就能随意挑选框架并用在你的项目中;我们选择了 Phaser 这个稳定优越的框架，它有着好的支持和社区环境以及大量优秀的插件。框架加速了开发并能帮你管理无趣的部分，让你专注于有意思的事务。然而，框架也有不好的地方，所以当一些意想不到的事情发生了或者想实现一些框架没有提供的功能时，你就将需要原生的 JavaScript 知识了。

> [!NOTE]
> 本系列文章可用作实际游戏开发的材料。如果你想要使用 Phaser 讨论游戏开发，你还可以使用基于本教程的 [Gamedev Phaser 内容套件](https://github.com/end3r/Gamedev-Phaser-Content-Kit).

## Next steps

好了，那我们就开始吧！前往系列第一部分 — [初始化框架](/zh-CN/docs/Games/Tutorials/2D_breakout_game_Phaser/Initialize_the_framework).

{{Next("Games/Workflows/2D_Breakout_game_Phaser/Initialize_the_framework")}}
