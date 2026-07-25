---
title: 純粋な JavaScript を使った二次元ブロック崩しゲーム
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript
l10n:
  sourceCommit: 4483da6501d1c735a0e1ac1e95775e2fe1766dc3
---

{{Next("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it")}}

このステップバイステップのチュートリアルでは **MDN ブロック崩し**ゲームを作ります。これは完全に純粋な JavaScript だけで書かれ、 HTML の {{htmlelement("canvas")}} で表示されます。

各ステップには編集可能なライブサンプルがあるので、中間ステージがどのように見えるかを確認しながらプレイすることができます。画像のレンダリングと移動、衝突検出、制御機構、勝敗状態などの基本的なゲーム メカニックを使用するための {{htmlelement("canvas")}} 要素の基本的な使用方法を学びます。

このシリーズのほとんどの記事は理解するために初歩または中級レベルの [JavaScript](/ja/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity) の知識を必要とします。このチュートリアルを一通りこなすことで簡単なウェブゲームを作れるようになるでしょう。

![パドルを使用してボールを弾き、スコアとライフをキープしながらレンガのフィールドを破壊していくゲーム MDN Breakout のゲーム画面。](mdn-breakout-gameplay.png)

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

純粋な JavaScript から始めることが、ウェブゲーム開発の確かな知識を身につける最良の方法です。その後、好きなフレームワークを選んで、自分のプロジェクトに使用することができます。フレームワークとは、単に JavaScript 言語で構築されたツールに過ぎません。したがって、フレームワークを使用する予定であっても、まず言語そのものを学び、内部で何が起きているのかを正確に理解しておくことが重要です。フレームワークは開発期間を短縮し、ゲームの退屈な部分を処理するのに役立つのですが、もし何かが期待通りに動作しない場合は、常にデバッグを試みたり、純粋な JavaScript で独自の解決策を実装したりすることも可能です。

> [!NOTE]
> このシリーズはゲーム開発ワークショップのハンズオンの資料として使えます。ゲーム開発全般について話すつもりならこのチュートリアルに基づいた [Gamedev Canvas Content Kit](https://github.com/end3r/Gamedev-Canvas-Content-Kit) も利用できます。
>
> ゲームライブラリーを用いた二次元ウェブゲーム開発に興味があるのであれば、このシリーズに対応する [Phaser を使ったブロック崩しゲーム](/ja/docs/Games/Tutorials/2D_breakout_game_Phaser)も参照してください。

## 次のステップ

それでは始めましょう! 最初の章、 [キャンバスを作ってその上に描画する](/ja/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it)に進みます。

{{Next("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it")}}
