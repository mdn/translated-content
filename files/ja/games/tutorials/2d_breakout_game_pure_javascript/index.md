---
title: 純粋な JavaScript を使ったブロック崩しゲーム
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript
---

{{GamesSidebar}}

{{Next("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it")}}

このステップバイステップのチュートリアルでは、すべて JavaScript だけで書かれた、 HTML5 の {{htmlelement("canvas")}} で表示できる簡単な **MDN ブロック崩し**ゲームを作ります。</p>

各ステップには編集可能なライブサンプルがあるので、中間ステージがどのように見えるかを確認しながらプレイすることができます。画像のレンダリングと移動、衝突検出、制御機構、勝敗状態などの基本的なゲーム メカニックを使用するための {{htmlelement("canvas")}} 要素の基本的な使用方法を学びます。

このシリーズのほとんどの記事は理解するために初歩または中級レベルの [JavaScript](/ja/docs/Learn/Getting_started_with_the_web/JavaScript_basics) の知識を必要とします。このチュートリアルを一通りこなすことで簡単なウェブゲームを作れるようになるでしょう。

![パドルを使用してボールを弾き、スコアとライフをキープしながらレンガのフィールドを破壊していくゲーム「MDN Breakout」のゲーム画面。](mdn-breakout-gameplay.png)

## レッスン詳細

全てのレッスンは以下の通りです。そしてこれから一緒に作る [MDN ブロック崩しゲーム](https://breakout.enclavegames.com/lesson10.html)の各バージョンは [GitHub 上で入手可能](https://github.com/end3r/Gamedev-Canvas-workshop)です。

1. [キャンバスを作ってその上に描画する](/ja/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it)
2. [ボールを動かす](/ja/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball)
3. [ボールを壁で反射させる](/ja/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls)
4. [パドルとキーボード操作](/ja/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls)
5. [ゲームオーバー](/ja/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over)
6. [ブロックのかたまりを作る](/ja/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Build_the_brick_field)
7. [衝突検出](/ja/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection)
8. [スコアと勝ち負けを記録する](/ja/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win)
9. [マウス操作](/ja/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Mouse_controls)
10. [仕上げ](/ja/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Finishing_up)

まずは JavaScript だけで始めるのがウェブゲーム開発の確実な知識を手に入れる一番良い方法です。そのあと、自分のプロジェクトで使うフレームワークを選びましょう。フレームワークは JavaScript 言語で書かれた単なるツールです。ですから、たとえフレームワークを用いて開発しようとしていてもまずはその言語を学び、手元で実際に何が起こっているか理解すると良いでしょう。フレームワークは開発速度を上げ、ゲームのとるに足らない部分を処理してくれますが、もし何かが思ったように動かないなんてことがあったらいつでもデバッグしたり、あるいは単に JavaScript で自分なりの解を出すということもできるのです。

> **メモ:** ゲームライブラリを用いた 2D ウェブゲーム開発に興味があるのであれば、このシリーズに対応する [Phaser を使ったブロック崩しゲーム](/ja/docs/Games/Tutorials/2D_breakout_game_Phaser)も参照してください。

> **メモ:** このシリーズはゲーム開発ワークショップのハンズオンの資料として使えます。ゲーム開発全般について話すつもりならこのチュートリアルに基づいた [Gamedev Canvas Content Kit](https://github.com/end3r/Gamedev-Canvas-Content-Kit) も利用できます。

## 次のステップ

それでは始めましょう! 最初の章、 [キャンバスを作ってその上に描画する](/ja/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it)に進みます。

{{Next("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it")}}
