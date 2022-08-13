---
title: そのままのJavaScriptを使ったブロックくずしゲーム
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript
translation_of: Games/Tutorials/2D_Breakout_game_pure_JavaScript
original_slug: Games/Workflows/2D_Breakout_game_pure_JavaScript
---
{{GamesSidebar}}{{IncludeSubnav("/ja/docs/Games")}}

{{Next("Games/Workflows/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it")}}

このステップ・バイ・ステップのチュートリアルでは全て JavaScript だけで書かれた、HTML5 {{htmlelement("canvas")}}で表示できる簡単な**MDN ブロックくずし**ゲームを作ります。

全てのステップには編集可能かつすぐに実行できるサンプルがあり、どのような過程で作るべきか確認できます。映像の描画、移動、当たり判定、操作機構、勝ち負けの状態といった基礎的なゲームの仕組みを{{htmlelement("canvas")}}要素を使って実装する基本を学びましょう。

このシリーズのほとんどの記事は理解するために初歩または中級レベルの[JavaScript](/ja/Learn/Getting_started_with_the_web/JavaScript_basics)の知識を必要とします。このチュートリアルを一通りこなすことで簡単な Web ゲームを作れるようになるでしょう。

![Gameplay screen from the game MDN Breakout where you can use your paddle to bounce the ball and destroy the brick field, with keeping the score and lives.](https://mdn.mozillademos.org/files/10383/mdn-breakout-gameplay.png)

## レッスン詳細

全てのレッスン、そしてこれから一緒に作る[MDN ブロック崩しゲーム](http://breakout.enclavegames.com/lesson10.html)の各バージョンは[GitHub 上で入手可能](https://github.com/end3r/Canvas-gamedev-workshop)です:

1.  [Canvas を作ってその上に描画する](/ja/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it)
2.  [ボールを動かす](/ja/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Move_the_ball)
3.  [ボールを壁で弾ませる](/ja/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls)
4.  [パドルとキーボード操作](/ja/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls)
5.  [ゲームオーバー](/ja/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Game_over)
6.  [ブロックのかたまりを作る](/ja/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Build_the_brick_field)
7.  [衝突検出](/ja/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Collision_detection)
8.  [スコアと勝ち負けを記録する](/ja/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win)
9.  [マウス操作](/ja/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Mouse_controls)
10. [仕上げ](/ja/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Finishing_up)

まずは JavaScript だけで始めるのが Web ゲーム開発の確実な知識を手に入れる一番良い方法です。そのあと、自分のプロジェクトで使うフレームワークを選びましょう。フレームワークは JavaScript 言語で書かれた単なるツールです。ですから、たとえフレームワークを用いて開発しようとしていてもまずはその言語を学び、手元で実際に何が起こっているか理解すると良いでしょう。フレームワークは開発速度を上げ、ゲームのとるに足らない部分を処理してくれますが、もし何かが思ったように動かないなんてことがあったらいつでもデバッグしたり、あるいは単に JavaScript で自分なりの解を出すということもできるのです。

> **Note:** **ノート**: ゲームライブラリを用いた 2D Web ゲーム開発に興味があるのであれば、このシリーズに対応する[Phaser を使ったブロックくずしゲーム](/ja/docs/Games/Workflows/2D_breakout_game_Phaser)も参照してください。

> **Note:** **ノート**: このシリーズはゲーム開発ワークショップのハンズオンの資料として使えます。ゲーム開発全般について話すつもりならこのチュートリアルに基づいた[Gamedev Canvas Content Kit](https://github.com/end3r/Gamedev-Canvas-Content-Kit)も利用できます。

## 次のステップ

それでは始めましょう! 最初の章、[『Canvas を作ってその上に描画する』](/ja/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it)に進みます。

{{Next("Games/Workflows/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it")}}
