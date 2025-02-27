---
title: Phaser を使用した 2D ブロック崩しゲーム
slug: Games/Tutorials/2D_breakout_game_Phaser
---

{{GamesSidebar}}

{{Next("Games/Workflows/2D_Breakout_game_Phaser/Initialize_the_framework")}}

このステップバイステップのチュートリアルでは、シンプルなモバイル **MDN ブロック崩し**ゲーム を、 JavaScript で書き、 [Phaser](https://phaser.io/) フレームワークを使用して作成します。

各ステップには、編集可能なライブサンプルがあるので、中間ステージがどのように見えるかを確認しながら遊ぶことができます。 Phaser フレームワークを使用して、画像のレンダリングと移動、衝突の検出、コントロールメカニズム、フレームワーク固有のヘルパー関数、アニメーションと調整、勝利と敗北状態などの基本的なゲームメカニズムを使用するための基本を学びます。

この連載記事を最大限に活用するためには、すでに基礎から中級の [JavaScript](/ja/docs/Learn/Getting_started_with_the_web/JavaScript_basics) の知識を持っている必要があります。このチュートリアルを動作させた後は、 Phaser を使って自身の簡単なウェブゲームを作ることができるはずです。

![Phaser で作成したゲーム MDN ブロック崩しのゲーム画面。パドルを使用してボールを跳ね返し、ポイントとライフを維持しながら、レンガのフィールドを破壊することができます。](mdn-breakout-phaser.png)

## 学習内容

すべてのレッスン、そして私たちが一緒に作っている [MDN ブロック崩しゲーム](https://end3r.github.io/Gamedev-Phaser-Content-Kit/demos/lesson16.html)のさまざまなバージョンは、 [GitHub](https://end3r.github.io/Gamedev-Phaser-Content-Kit/demos/) で利用可能です。

1. [フレームワークの初期化](/ja/docs/Games/Tutorials/2D_breakout_game_Phaser/Initialize_the_framework)
2. [拡大縮小](/ja/docs/Games/Tutorials/2D_breakout_game_Phaser/Scaling)
3. [資産を読み込んで画面の内側へ表示する](/ja/docs/Games/Tutorials/2D_breakout_game_Phaser/Load_the_assets_and_print_them_on_screen)
4. [ボールを移動させる](/ja/docs/Games/Tutorials/2D_breakout_game_Phaser/Move_the_ball)
5. [物理演算](/ja/docs/Games/Tutorials/2D_breakout_game_Phaser/Physics)
6. [壁で跳ね返す](/ja/docs/Games/Tutorials/2D_breakout_game_Phaser/Bounce_off_the_walls)
7. [プレイヤーパドルと操作](/ja/docs/Games/Tutorials/2D_breakout_game_Phaser/Player_paddle_and_controls)
8. [ゲームオーバー](/ja/docs/Games/Tutorials/2D_breakout_game_Phaser/Game_over)
9. [レンガ場を作る](/ja/docs/Games/Tutorials/2D_breakout_game_Phaser/Build_the_brick_field)
10. [衝突判定](/ja/docs/Games/Tutorials/2D_breakout_game_Phaser/Collision_detection)
11. [得点](/ja/docs/Games/Tutorials/2D_breakout_game_Phaser/The_score)
12. [ゲームの勝利](/ja/docs/Games/Tutorials/2D_breakout_game_Phaser/Win_the_game)
13. [ライフの追加](/ja/docs/Games/Tutorials/2D_breakout_game_Phaser/Extra_lives)
14. [アニメーションと調整](/ja/docs/Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens)
15. [ボタン](/ja/docs/Games/Tutorials/2D_breakout_game_Phaser/Buttons)
16. [ゲームプレイのランダム化](/ja/docs/Games/Tutorials/2D_breakout_game_Phaser/Randomizing_gameplay)

学習経路に関する注意点として、純粋な JavaScript から始めることが、ウェブゲーム開発の確かな知識を得るための最良の方法です。もしあなたが純粋な JavaScript のゲーム開発にまだ慣れていないなら、先にこのシリーズの対になるものである[純粋な JavaScript を使用した 2D ブレイクアウトゲーム](/ja/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript)をやっておくことをお勧めします。

その後、好きなフレームワークを選んで、プロジェクトに使用することができます。私たちは、良いサポートとコミュニティが利用でき、プラグインの良いセットがある、堅実なフレームワークである Phaser を選びました。フレームワークは、開発時間を短縮し、退屈な部分を引き受けてくれるので、あなたは楽しいことに集中することができます。しかし、フレームワークは常に完璧というわけではありません。予期せぬことが起こったり、フレームワークが提供しない機能を書きたい場合、純粋な JavaScript の知識が必要になります。

> [!NOTE]
> この連載記事は、ゲーム開発の体験型ワークショップの素材として使用することができます。また、Phaser を使ったゲーム開発についての講演を行う場合、このチュートリアルを元にした [Gamedev Phaser Content Kit](https://github.com/end3r/Gamedev-Phaser-Content-Kit) を使用することができます。

## 次のステップ

では、始めましょう。シリーズの最初の部分 - [フレームワークの初期化](/ja/docs/Games/Tutorials/2D_breakout_game_Phaser/Initialize_the_framework)に向かいましょう。

{{Next("Games/Workflows/2D_Breakout_game_Phaser/Initialize_the_framework")}}
