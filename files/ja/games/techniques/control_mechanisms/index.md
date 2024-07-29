---
title: ゲーム制御機構の搭載
slug: Games/Techniques/Control_mechanisms
---

{{GamesSidebar}}

ゲーム開発プラットフォームとしての HTML5 の主な利点の 1 つは、さまざまなプラットフォームおよび端末上で実行できることです。端末間の違いを合理化することは、特に異なるコンテキストに適切なコントロールを提供するときには、複数の課題を生み出します。このシリーズの記事では、タッチ画面のスマートフォン、マウス、キーボード、そしてゲームパッドなどのあまり一般的ではないメカニズムを使用してプレイできるゲームの構築方法について説明します。

## 事例研究

ここでは [Captain Rogers: Battle at Andromeda demo](http://rogers2.enclavegames.com/demo/) を例にします。

![Captain Rogers: Battle at Andromeda - cover of the game containing Enclave Games and Blackmoon Design logos, Roger's space ship and title of the game.](captainrogers2-cover.png)

Captain Rogers は [Phaser](https://phaser.io/) フレームワークを使用して作成されています。現在、 JavaScript でシンプルな 2D ゲームを開発するための最も人気のあるツールですが、これらの記事に含まれる知識を純粋な JavaScript または他のフレームワークでゲームを構築する際に再利用することはかなり簡単なはずです。 Phaser の入門書をお探しなら、[2D breakout game using Phaser](/ja/docs/Games/Tutorials/2D_breakout_game_Phaser) チュートリアルをチェックしてみてください。

以下の記事では、モバイルのタッチ操作から、デスクトップのキーボード／マウス／ゲームパッド、そしてテレビのリモコン、ラップトップの前で叫んだり手を振ったり、バナナを握ったりといった型破りなものまで、さまざまなプラットフォームに対応するために、Captain Rogers にさまざまな操作機構を搭載する方法を紹介します。

## 環境の設定

まず、ゲームのフォルダー構造、JavaScriptファイル、ゲーム内の状態を手短に説明し、どこで何が起きているのかを把握します。ゲームのフォルダーは以下のような感じです。

![Captain Rogers: Battle at Andromeda - folder structure of the games' project containing JavaScript sources, images and fonts.](captainrogers2-folderstructure.png)

ご覧のように、画像、JavaScript ファイル、フォント、効果音用のフォルダーがあります。 `src` フォルダーには、別個の状態として分割された JavaScript ファイル、 `Boot.js`, `Preloader.js`, `MainMenu.js`, `Game.js` があり、これらはこの順番でインデックスファイルに読み込まれます。最初のものは Phaser を初期化し、 2 つ目はすべての資産を先読みさせ、 3 つ目はプレーヤーを歓迎するメインメニューを制御し、 4 つ目は実際のゲームプレイを制御するものです。

状態にはそれぞれ `preload()`, `create()`, `update()` という既定のメソッドがあります。最初のメソッドは必要な資産を先読みするために必要で、`create()` は状態が開始されると実行され、`update()` はフレームごとに実行されます。

例えば、`create()` 関数でボタンを定義することができます。

```js
create() {
  // …
  const buttonEnclave = this.add.button(10, 10, 'logo-enclave', this.clickEnclave, this);
  // …
}
```

ゲーム開始時に一度だけ作成され、クリックされるとそれに割り当てられた `this.clickEnclave()` アクションを実行しますが、 `update()` 関数でマウスのポインターの値を使用してアクションを作成することもできます。

```js
update() {
  // …
  if(this.game.input.mousePointer.isDown) {
      // do something
  }
  // …
}
```

これはマウスボタンが押されるたびに実行され、ゲームの各フレームで入力の `isDown` という論理変数と照合されます。

これで、プロジェクトの構成がある程度理解できたと思います。今回は、主に `MainMenu.js` と `Game.js` ファイルで遊びます。`create()` と `update()` メソッド内のコードについては、後日、より詳しく説明したいと思います。

## 純粋な JavaScript のデモ

また、[小さなオンラインデモ](https://end3r.github.io/JavaScript-Game-Controls/) と [GitHub で利用可能](https://github.com/end3r/JavaScript-Game-Controls/)な完全なソースコードがあり、記事で記述した制御機構の基本的な対応は、純粋な JavaScript で実装されています。それは以下の与えられた記事自体で説明されますが、あなたはすでにそれで遊ぶことができ、学習の目的のためにコードを好きなように使用することができます。

## 記事

HTML5 が真にマルチプラットフォームであるため、JavaScript はモバイルゲームに最適です。以下の記事はすべて、さまざまな制御機構とインターフェイスするために提供される API に焦点を当てています。

1. [モバイルのタッチ制御](/ja/docs/Games/Techniques/Control_mechanisms/Mobile_touch) — 最初の記事は、モバイルファーストの考え方が浸透していることから、タッチでキックオフします。
2. [デスクトップ PC のマウスとキーボードによる操作](/ja/docs/Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard) — デスクトップ／ノートパソコンでプレイする場合、ゲームに受け入れられるレベルのアクセシビリティを提供するためには、キーボードとマウスによる操作性を提供することが不可欠です。
3. [デスクトップ PC のゲームパッドによる操作](/ja/docs/Games/Techniques/Control_mechanisms/Desktop_with_gamepad) — ゲームパッド API は、デスクトップ PC やノート PC のウェブアプリケーションを操作するためにゲームパッドを使用することを可能にし、コンソール感覚を提供します。
4. [非従来型制御](/ja/docs/Games/Techniques/Control_mechanisms/Other) — 最後の記事では、実験的なものからちょっとクレイジーなものまで、ゲームを使用するとは思えないような、型破りな操作機構を紹介しています。
