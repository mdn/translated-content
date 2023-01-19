---
title: 只使用 JavaScript 的 2D 打磚塊遊戲
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript
---

{{GamesSidebar}}

{{Next("Games/Workflows/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it")}}

本文將帶你逐步做出簡單的 MDN 打磚塊遊戲。除了只用 JavaScript 寫成之外，也透過 HTML5 的 {{htmlelement("canvas")}} 繪製。

每個步驟均提供可測試修改的實際範例，讓你能看到各個步驟所產生的影響。你將了解該如何使用 {{htmlelement("canvas")}} 元件完成基礎的遊戲機制，例如繪製 (Render)、移動圖形、碰撞偵測、操控機制、輸贏狀態等。

若要能充分了解此一系列文章，你應具備基礎至中等的 [JavaScript](/zh-TW/Learn/Getting_started_with_the_web/JavaScript_basics) 知識。結束此教學之後即可寫出自己的簡易網頁遊戲。

![Gameplay screen from the game MDN Breakout where you can use your paddle to bounce the ball and destroy the brick field, with keeping the score and lives.](mdn-breakout-gameplay.png)

## 課程細節

所有課程和其他不同版本的 [MDN 打磚塊遊戲](http://breakout.enclavegames.com/lesson10.html)，均可至 [GitHub 找到：](https://github.com/end3r/Canvas-gamedev-workshop)

1. [建立 Canvas 並繪製](/zh-TW/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it)
2. [讓球移動](/zh-TW/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Move_the_ball)
3. [讓球反彈](/zh-TW/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls)
4. [搖桿和鍵盤控制](/zh-TW/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls)
5. [判斷遊戲結束](/zh-TW/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Game_over)
6. [建立磚塊場地](/zh-TW/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Build_the_brick_field)
7. [碰撞偵測](/zh-TW/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Collision_detection)
8. [更新分數並判斷輸贏](/zh-TW/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win)
9. [滑鼠控制](/zh-TW/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Mouse_controls)
10. [結束](/zh-TW/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Finishing_up)

若一開始就單純使用 JavaScript，將能學到紮實的網頁遊戲開發知識。往後則可自由選擇你自己愛用的框架 (Framework) 來完成專案。
框架同樣是由 JavaScript 寫成的工具。因此在用框架開發之前，能先了解程式語言本身將有助於了解框架內部所發生的事。框架可加快開發速度並代勞遊戲中某些無聊的部份，但若遊戲運作得不如預期，你都可試著除錯或撰寫純 JavaScript 的解決方案。

> **備註：** 如果你對 2D 網頁遊戲開發的遊戲函式庫有興趣，可參考此〈[使用剖析器 (Phaser) 的打磚塊遊戲](/zh-TW/docs/Games/Workflows/2D_breakout_game_Phaser)〉系列相關文章 。

> **備註：** 此系列文章也能當做行動遊戲開發工作坊的教材。如果你想講解一般的遊戲開發，則可利用此教學為基礎的〈[Gamedev Canvas Content Kit](https://github.com/end3r/Gamedev-Canvas-Content-Kit)〉。

## 下一步

好吧！讓我們開始第一章 — [建立 Canvas 並繪製。](/zh-TW/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it)

{{Next("Games/Workflows/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it")}}
