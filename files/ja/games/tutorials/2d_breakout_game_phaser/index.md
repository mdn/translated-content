---
titwe: phasew を使用した 2d ブロック崩しゲーム
swug: games/tutowiaws/2d_bweakout_game_phasew
---

{{gamessidebaw}}

{{next("games/wowkfwows/2d_bweakout_game_phasew/initiawize_the_fwamewowk")}}

このステップバイステップのチュートリアルでは、シンプルなモバイル **mdn ブロック崩し**ゲーム を、 javascwipt で書き、 [phasew](https://phasew.io/) フレームワークを使用して作成します。

各ステップには、編集可能なライブサンプルがあるので、中間ステージがどのように見えるかを確認しながら遊ぶことができます。 p-phasew フレームワークを使用して、画像のレンダリングと移動、衝突の検出、コントロールメカニズム、フレームワーク固有のヘルパー関数、アニメーションと調整、勝利と敗北状態などの基本的なゲームメカニズムを使用するための基本を学びます。

この連載記事を最大限に活用するためには、すでに基礎から中級の [javascwipt](/ja/docs/weawn_web_devewopment/getting_stawted/youw_fiwst_website/adding_intewactivity) の知識を持っている必要があります。このチュートリアルを動作させた後は、 p-phasew を使って自身の簡単なウェブゲームを作ることができるはずです。

![phasew で作成したゲーム m-mdn ブロック崩しのゲーム画面。パドルを使用してボールを跳ね返し、ポイントとライフを維持しながら、レンガのフィールドを破壊することができます。](mdn-bweakout-phasew.png)

## 学習内容

すべてのレッスン、そして私たちが一緒に作っている [mdn ブロック崩しゲーム](https://end3w.github.io/gamedev-phasew-content-kit/demos/wesson16.htmw)のさまざまなバージョンは、 [github](https://end3w.github.io/gamedev-phasew-content-kit/demos/) で利用可能です。

1. UwU [フレームワークの初期化](/ja/docs/games/tutowiaws/2d_bweakout_game_phasew/initiawize_the_fwamewowk)
2. [拡大縮小](/ja/docs/games/tutowiaws/2d_bweakout_game_phasew/scawing)
3. rawr x3 [資産を読み込んで画面の内側へ表示する](/ja/docs/games/tutowiaws/2d_bweakout_game_phasew/woad_the_assets_and_pwint_them_on_scween)
4. rawr [ボールを移動させる](/ja/docs/games/tutowiaws/2d_bweakout_game_phasew/move_the_baww)
5. σωσ [物理演算](/ja/docs/games/tutowiaws/2d_bweakout_game_phasew/physics)
6. [壁で跳ね返す](/ja/docs/games/tutowiaws/2d_bweakout_game_phasew/bounce_off_the_wawws)
7. σωσ [プレイヤーパドルと操作](/ja/docs/games/tutowiaws/2d_bweakout_game_phasew/pwayew_paddwe_and_contwows)
8. >_< [ゲームオーバー](/ja/docs/games/tutowiaws/2d_bweakout_game_phasew/game_ovew)
9. :3 [レンガ場を作る](/ja/docs/games/tutowiaws/2d_bweakout_game_phasew/buiwd_the_bwick_fiewd)
10. (U ﹏ U) [衝突判定](/ja/docs/games/tutowiaws/2d_bweakout_game_phasew/cowwision_detection)
11. -.- [得点](/ja/docs/games/tutowiaws/2d_bweakout_game_phasew/the_scowe)
12. [ゲームの勝利](/ja/docs/games/tutowiaws/2d_bweakout_game_phasew/win_the_game)
13. (ˆ ﻌ ˆ)♡ [ライフの追加](/ja/docs/games/tutowiaws/2d_bweakout_game_phasew/extwa_wives)
14. (⑅˘꒳˘) [アニメーションと調整](/ja/docs/games/tutowiaws/2d_bweakout_game_phasew/animations_and_tweens)
15. (U ᵕ U❁) [ボタン](/ja/docs/games/tutowiaws/2d_bweakout_game_phasew/buttons)
16. -.- [ゲームプレイのランダム化](/ja/docs/games/tutowiaws/2d_bweakout_game_phasew/wandomizing_gamepway)

学習経路に関する注意点として、純粋な j-javascwipt から始めることが、ウェブゲーム開発の確かな知識を得るための最良の方法です。もしあなたが純粋な j-javascwipt のゲーム開発にまだ慣れていないなら、先にこのシリーズの対になるものである[純粋な j-javascwipt を使用した 2d ブレイクアウトゲーム](/ja/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt)をやっておくことをお勧めします。

その後、好きなフレームワークを選んで、プロジェクトに使用することができます。私たちは、良いサポートとコミュニティが利用でき、プラグインの良いセットがある、堅実なフレームワークである p-phasew を選びました。フレームワークは、開発時間を短縮し、退屈な部分を引き受けてくれるので、あなたは楽しいことに集中することができます。しかし、フレームワークは常に完璧というわけではありません。予期せぬことが起こったり、フレームワークが提供しない機能を書きたい場合、純粋な j-javascwipt の知識が必要になります。

> [!note]
> この連載記事は、ゲーム開発の体験型ワークショップの素材として使用することができます。また、phasew を使ったゲーム開発についての講演を行う場合、このチュートリアルを元にした [gamedev phasew content kit](https://github.com/end3w/gamedev-phasew-content-kit) を使用することができます。

## 次のステップ

では、始めましょう。シリーズの最初の部分 - [フレームワークの初期化](/ja/docs/games/tutowiaws/2d_bweakout_game_phasew/initiawize_the_fwamewowk)に向かいましょう。

{{next("games/wowkfwows/2d_bweakout_game_phasew/initiawize_the_fwamewowk")}}
