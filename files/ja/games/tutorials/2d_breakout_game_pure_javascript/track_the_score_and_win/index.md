---
title: スコアと勝ち負けを記録する
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win
translation_of: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win
original_slug: Games/Workflows/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win
---
{{GamesSidebar}}{{IncludeSubnav("/ja/docs/Games")}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Collision_detection", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Mouse_controls")}}

これは[ゲーム開発 Canvas チュートリアル](/ja/docs/Games/Workflows/Breakout_game_from_scratch)の 10 ステップのうち**8 番目**のステップです。このレッスンを終えたあとの完成予想のソースコードは[Gamedev-Canvas-workshop/lesson8.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson08.html)で入手できます。

ブロックを崩せるのは最高ですが、より素晴らしいものにするためにユーザーが壊した全てのブロックに対してポイントを与え、合計スコアのカウントを更新し続けましょう。

## スコアを数える

ゲームを通してスコアを見せることができればあとで友達に自慢することができます。スコアを記録する変数が必要です。次の行を自分の JavaScript の他の変数のあとに追記してください。

```js
var score = 0;
```

スコア表示を作成し更新するために`drawScore()`関数も必要です。次のコードを`collisionDetection()`関数のあとに追加してください。

```js
function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: "+score, 8, 20);
}
```

文字をキャンバス上に描画するのは図形を描画するのと似ています。フォント定義は CSS 出するものとちょうど同じように描きます。大きさとフォントの種類は{{domxref("CanvasRenderingContext2D.font","font()")}}メソッドで設定できます。それからフォントの色を設定するには{{domxref("CanvasRenderingContext2D.fillStyle()","fillStyle()")}}を、キャンバス上に配置される実際の文章を設定するには{{domxref("CanvasRenderingContext2D.fillText","fillText()")}}を使用してください。最初のパラメーターは文章自体です。上記のコードは現在のポイントの数を表示します。最後の 2 つのパラメーターは文章がキャンバス上に置かれる座標です。

ブロックに当たるたびにスコアを与えるには、衝突が検出されるたびにスコア変数を増加させる 1 行を`collisionDetection()`関数に追加します。次のハイライトされた行を自分のコードに追加してください。

```js
function collisionDetection() {
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            var b = bricks[c][r];
            if(b.status == 1) {
                if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                    dy = -dy;
                    b.status = 0;
                    score++;
                }
            }
        }
    }
}
```

`draw()`関数から`drawScore()`を呼び続けることで新しいフレームごとにスコアは最新の状態に保たれます。次の行を`draw()`の中、ちょうど`drawPaddle()`の呼び出しの下に追加してください。

```js
drawScore();
```

## 全てのブロックが崩されたときに勝利を伝えるメッセージを表示する

ポイントを集め続けるという動作はうまく働きますが、永久に増やし続けることは出来ません。全てのブロックが崩されたらどうなるのでしょうか。何においてもそれこそがゲームの主目標なのですから、得られる全てのポイントが集まったときには勝利を伝えるメッセージを表示すべきです。次のハイライトされた部分を自分の`collisionDetection()`関数に追記してください。

```js
function collisionDetection() {
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            var b = bricks[c][r];
            if(b.status == 1) {
                if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                    dy = -dy;
                    b.status = 0;
                    score++;
                    if(score == brickRowCount*brickColumnCount) {
                        alert("YOU WIN, CONGRATULATIONS!");
                        document.location.reload();
                    }
                }
            }
        }
    }
}
```

これのおかげで、全てのブロックが崩されたときにユーザーは実際にゲームに勝つことができます。ゲームにおいてはこれは非常に重要です。アラートのボタンがクリックされたら`document.location.reload()`関数はページを再読込しゲームをもう一度始めます。

## 自分のコードと比べる

自分のものと比べたいときのために最新のコードをいかに示します。このように見え、そして動くはずです。

{{JSFiddleEmbed("https://jsfiddle.net/raymondjplante/b3z2Lpu9/","","395")}}

> **Note:** **練習**: ブロックに当たるたびにより多くのポイントを追加し、ゲームの終わりに集めたポイントの数を表示するようにしましょう。

## 次のステップ

この時点でもこのゲームはかなりよく見えます。次のレッスンでは[マウス操作](/ja/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Mouse_controls)を追加することでゲームの魅力を広げます。

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Collision_detection", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Mouse_controls")}}
