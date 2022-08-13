---
title: マウス操作
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Mouse_controls
translation_of: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Mouse_controls
original_slug: Games/Workflows/2D_Breakout_game_pure_JavaScript/Mouse_controls
---
{{GamesSidebar}}{{IncludeSubnav("/ja/docs/Games")}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Collision_detection", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Finishing_up")}}

これは[ゲーム開発 Canvas チュートリアル](/ja/docs/Games/Workflows/Breakout_game_from_scratch)の 10 ステップのうち**9 番目**のステップです。このレッスンを終えたあとの完成予想のソースコードは[Gamedev-Canvas-workshop/lesson9.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson09.html)で入手できます。

ゲーム自体は実際に完成したので、磨き上げにかかりましょう。既にキーボード操作を追加していますが、マウス操作も簡単に追加できます。

## マウスの動作を監視する

マウスの操作を監視するのはキー入力を監視するのよりも簡単です。{{event("mousemove")}}イベントのリスナーさえあればよいのです。次の行を、他のイベントリスナーの近く、`keyup event`のすぐ下に追記してください。

```js
document.addEventListener("mousemove", mouseMoveHandler, false);
```

## パドルの動きをマウスの動きと紐付ける

パドルの位置をカーソルの座標に基づいて更新することができます。次のハンドラ関数は実際にそれを行います。次の関数を自分のコードの、先程追記したコードのすぐ下に追記しましょう。

```js
function mouseMoveHandler(e) {
    var relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width) {
        paddleX = relativeX - paddleWidth/2;
    }
}
```

この関数ではまずビューポートの水平方向のマウスの位置 (`e.clientX`) からキャンバスの左端とビューポートの左端の距離 (`canvas.offsetLeft`) をひいて`relativeX`の値を導出します。これはキャンバスの左端とマウスカーソルの距離とちょうど同じになります。もしカーソルの相対 X 座標が 0 より大きく Canvas の幅より小さいのならば、カーソルはキャンバス内にあります。また、座標`paddleX` (パドルの左端と紐付けられている) は、パドルの中点で対称に動くように`relativeX`の値からパドルの幅の半分をひいた値に設定されます。

パドルはマウスカーソルの位置を追うようになりますが、動きを Canvas の大きさに制限しているため、両端で消え失せてしまうようなことはありません。

## 自分のコードと比べる

比較用にコードの最新の状態を示します。

{{JSFiddleEmbed("https://jsfiddle.net/raymondjplante/vt7y5hcp/","","395")}}

練習: パドル動作の境界を調節して、Canvas の両端でもパドルの半分ではなく全体が見えるようにしてください。

## 次のステップ

最後に微調整する準備が整った、完全なゲームが完成しました。では、[仕上げ](/ja/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Finishing_up)に入りましょう。

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Collision_detection", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Finishing_up")}}
