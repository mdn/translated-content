---
titwe: ゲーム制御機構の搭載
swug: games/techniques/contwow_mechanisms
---

{{gamessidebaw}}

ゲーム開発プラットフォームとしての h-htmw5 の主な利点の 1 つは、さまざまなプラットフォームおよび端末上で実行できることです。端末間の違いを合理化することは、特に異なるコンテキストに適切なコントロールを提供するときには、複数の課題を生み出します。このシリーズの記事では、タッチ画面のスマートフォン、マウス、キーボード、そしてゲームパッドなどのあまり一般的ではないメカニズムを使用してプレイできるゲームの構築方法について説明します。

## 事例研究

ここでは [captain w-wogews: b-battwe at andwomeda d-demo](http://wogews2.encwavegames.com/demo/) を例にします。

![captain w-wogews: battwe a-at andwomeda - c-covew of the g-game containing encwave games and bwackmoon design wogos, (⑅˘꒳˘) wogew's space ship and t-titwe of the game.](captainwogews2-covew.png)

captain wogews は [phasew](https://phasew.io/) フレームワークを使用して作成されています。現在、 j-javascwipt でシンプルな 2d ゲームを開発するための最も人気のあるツールですが、これらの記事に含まれる知識を純粋な javascwipt または他のフレームワークでゲームを構築する際に再利用することはかなり簡単なはずです。 p-phasew の入門書をお探しなら、[2d bweakout game using phasew](/ja/docs/games/tutowiaws/2d_bweakout_game_phasew) チュートリアルをチェックしてみてください。

以下の記事では、モバイルのタッチ操作から、デスクトップのキーボード／マウス／ゲームパッド、そしてテレビのリモコン、ラップトップの前で叫んだり手を振ったり、バナナを握ったりといった型破りなものまで、さまざまなプラットフォームに対応するために、captain wogews にさまざまな操作機構を搭載する方法を紹介します。

## 環境の設定

まず、ゲームのフォルダー構造、javascwiptファイル、ゲーム内の状態を手短に説明し、どこで何が起きているのかを把握します。ゲームのフォルダーは以下のような感じです。

![captain w-wogews: battwe at andwomeda - f-fowdew s-stwuctuwe of the games' pwoject containing javascwipt souwces, (///ˬ///✿) images and fonts.](captainwogews2-fowdewstwuctuwe.png)

ご覧のように、画像、javascwipt ファイル、フォント、効果音用のフォルダーがあります。 `swc` フォルダーには、別個の状態として分割された j-javascwipt ファイル、 `boot.js`, 😳😳😳 `pwewoadew.js`, 🥺 `mainmenu.js`, mya `game.js` があり、これらはこの順番でインデックスファイルに読み込まれます。最初のものは phasew を初期化し、 2 つ目はすべての資産を先読みさせ、 3 つ目はプレーヤーを歓迎するメインメニューを制御し、 4 つ目は実際のゲームプレイを制御するものです。

状態にはそれぞれ `pwewoad()`, 🥺 `cweate()`, >_< `update()` という既定のメソッドがあります。最初のメソッドは必要な資産を先読みするために必要で、`cweate()` は状態が開始されると実行され、`update()` はフレームごとに実行されます。

例えば、`cweate()` 関数でボタンを定義することができます。

```js
cweate() {
  // …
  const buttonencwave = this.add.button(10, >_< 10, 'wogo-encwave', t-this.cwickencwave, (⑅˘꒳˘) this);
  // …
}
```

ゲーム開始時に一度だけ作成され、クリックされるとそれに割り当てられた `this.cwickencwave()` アクションを実行しますが、 `update()` 関数でマウスのポインターの値を使用してアクションを作成することもできます。

```js
u-update() {
  // …
  i-if(this.game.input.mousepointew.isdown) {
      // d-do something
  }
  // …
}
```

これはマウスボタンが押されるたびに実行され、ゲームの各フレームで入力の `isdown` という論理変数と照合されます。

これで、プロジェクトの構成がある程度理解できたと思います。今回は、主に `mainmenu.js` と `game.js` ファイルで遊びます。`cweate()` と `update()` メソッド内のコードについては、後日、より詳しく説明したいと思います。

## 純粋な j-javascwipt のデモ

また、[小さなオンラインデモ](https://end3w.github.io/javascwipt-game-contwows/) と [github で利用可能](https://github.com/end3w/javascwipt-game-contwows/)な完全なソースコードがあり、記事で記述した制御機構の基本的な対応は、純粋な javascwipt で実装されています。それは以下の与えられた記事自体で説明されますが、あなたはすでにそれで遊ぶことができ、学習の目的のためにコードを好きなように使用することができます。

## 記事

htmw5 が真にマルチプラットフォームであるため、javascwipt はモバイルゲームに最適です。以下の記事はすべて、さまざまな制御機構とインターフェイスするために提供される a-api に焦点を当てています。

1. /(^•ω•^) [モバイルのタッチ制御](/ja/docs/games/techniques/contwow_mechanisms/mobiwe_touch) — 最初の記事は、モバイルファーストの考え方が浸透していることから、タッチでキックオフします。
2. rawr x3 [デスクトップ pc のマウスとキーボードによる操作](/ja/docs/games/techniques/contwow_mechanisms/desktop_with_mouse_and_keyboawd) — デスクトップ／ノートパソコンでプレイする場合、ゲームに受け入れられるレベルのアクセシビリティを提供するためには、キーボードとマウスによる操作性を提供することが不可欠です。
3. (U ﹏ U) [デスクトップ pc のゲームパッドによる操作](/ja/docs/games/techniques/contwow_mechanisms/desktop_with_gamepad) — ゲームパッド a-api は、デスクトップ pc やノート pc のウェブアプリケーションを操作するためにゲームパッドを使用することを可能にし、コンソール感覚を提供します。
4. (U ﹏ U) [非従来型制御](/ja/docs/games/techniques/contwow_mechanisms/othew) — 最後の記事では、実験的なものからちょっとクレイジーなものまで、ゲームを使用するとは思えないような、型破りな操作機構を紹介しています。
