---
title: マウス操作
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Mouse_controls
---

{{GamesSidebar}}

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Finishing_up")}}

これは、[ゲーム開発キャンバスチュートリアル](/ja/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript) の 10 ステップ中 **9 ステップ目**になります。このレッスンを終えた後のソースコードは、[Gamedev-Canvas-workshop/lesson9.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson09.html)で見ることができます。

ゲーム自体は実際に完成したので、磨き上げにかかりましょう。既にキーボード操作を追加していますが、マウス操作も簡単に追加できます。

## マウスの動作を監視する

マウスの操作を監視するのはキー入力を監視するのよりも簡単です。 {{domxref("Element/mousemove_event", "mousemove")}} イベントのリスナーさえあればよいのです。次の行を、他のイベントリスナーの近く、 `keyup event` のすぐ下に追記してください。

```js
document.addEventListener("mousemove", mouseMoveHandler, false);
```

## パドルの動きをマウスの動きと紐付ける

ポインターの座標に基づいてパドルの位置を更新することができます。以下のハンドラー関数がまさにそれを行うものです。以下の関数を、前に追加した行の下に、あなたのコードに追加してください。

```js
function mouseMoveHandler(e) {
  const relativeX = e.clientX - canvas.offsetLeft;
  if (relativeX > 0 && relativeX < canvas.width) {
    paddleX = relativeX - paddleWidth / 2;
  }
}
```

この値は、ビューポート内のマウスの水平位置 (`e.clientX`) からキャンバスの左端とビューポートの左端間の距離 (`canvas.offsetLeft`) を引いたもので、実質的にこれはキャンバス左端からマウスポインターまでの距離と等しくなっています。ポインタの相対 X 位置が 0 より大きく、キャンバスの幅よりも小さい場合、ポインタはキャンバスの境界内にあり、`paddleX` 位置（パドルの左端に固定）は `relativeX` 値からパドルの幅の半分を引いた値に設定され、実際の移動はパドルの中央に対して相対的に行われることになります。

パドルはマウスカーソルの位置を追うようになりますが、動きをキャンバスの大きさに制限しているため、両端で消え失せてしまうようなことはありません。

## 自分のコードと比べる

比較用にコードの最新の状態を示します。

{{JSFiddleEmbed("https://jsfiddle.net/raymondjplante/vt7y5hcp/","","395")}}

> **メモ:** パドル動作の境界を調節して、Canvasの両端でもパドルの半分ではなく全体が見えるようにしてください。

## 次のステップ

最後に微調整する準備が整った、完全なゲームが完成しました。では、[仕上げ](/ja/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Finishing_up)に入りましょう。

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Finishing_up")}}
