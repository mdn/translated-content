---
title: 使用純 JavaScript 製作 2D 打磚塊遊戲
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{Next("Games/Workflows/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it")}}

在這個逐步教學中，我們將創建一個完全使用純 JavaScript 編寫並在 HTML {{htmlelement("canvas")}} 上渲染的 **MDN 打磚塊**遊戲。

每一步都有可編輯的即時範例可供試玩，讓你可以看到中間階段應該是什麼樣子。你將學習使用 {{htmlelement("canvas")}} 元素來實現基本的遊戲機制，如渲染和移動圖像、碰撞檢測、控制機制以及勝負狀態。

為了從這系列文章中獲得最大收益，你應該已經具備基本到中級的 [JavaScript](/zh-TW/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity) 知識。完成這個教學後，你應該能夠構建自己的網頁遊戲。

![MDN 打磚塊遊戲的遊戲畫面，你可以使用球拍反彈球並摧毀磚塊區域，同時保持分數和生命值。](mdn-breakout-gameplay.png)

## 課程詳情

所有課程——以及我們一起構建的不同版本的 [MDN 打磚塊遊戲](https://breakout.enclavegames.com/lesson10.html)——都在 [GitHub 上提供](https://github.com/end3r/Gamedev-Canvas-workshop)：

1. [創建 Canvas 並在其上繪圖](/zh-TW/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it)
2. [移動球](/zh-TW/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball)
3. [從牆壁反彈](/zh-TW/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls)
4. [球拍和鍵盤控制](/zh-TW/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls)
5. [遊戲結束](/zh-TW/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over)
6. [構建磚塊區域](/zh-TW/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Build_the_brick_field)
7. [碰撞檢測](/zh-TW/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection)
8. [追蹤分數和勝利](/zh-TW/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win)
9. [滑鼠控制](/zh-TW/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Mouse_controls)
10. [完成](/zh-TW/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Finishing_up)

從純 JavaScript 開始是獲得網頁遊戲開發扎實知識的最佳方式。之後，你可以選擇任何你喜歡的框架並將其用於你的項目。框架只是用 JavaScript 語言構建的工具；所以即使你計劃使用它們，也最好先了解語言本身，以便知道底層發生了什麼。框架加快了開發時間，並幫助處理遊戲中無聊的部分，但如果某些東西沒有按預期工作，你可以嘗試調試它或僅用純 JavaScript 編寫自己的解決方案。

> [!NOTE]
> 這系列文章可以用作動手遊戲開發工作坊的材料。如果你想要進行有關遊戲開發的一般演講，也可以利用基於此教學的 [Gamedev Canvas Content Kit](https://github.com/end3r/Gamedev-Canvas-Content-Kit)。
>
> 如果你有興趣使用遊戲庫來學習 2D 網頁遊戲開發，請參見這系列的對應文章，[使用 Phaser 製作 2D 打磚塊遊戲](/zh-TW/docs/Games/Tutorials/2D_breakout_game_Phaser)。

## 下一步

好的，讓我們開始吧！前往第一章[創建 Canvas 並在其上繪圖](/zh-TW/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it)。

{{Next("Games/Workflows/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it")}}
