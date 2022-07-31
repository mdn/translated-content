---
title: スコアと勝ち負けを記録する
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win
translation_of: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win
original_slug: Games/Workflows/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win
---
<div>{{GamesSidebar}}</div>

<div>{{IncludeSubnav("/ja/docs/Games")}}</div>

<p>{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Collision_detection", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Mouse_controls")}}</p>

<div class="summary">
<p>これは<a href="/ja/docs/Games/Workflows/Breakout_game_from_scratch">ゲーム開発Canvasチュートリアル</a>の10ステップのうち<strong>8番目</strong>のステップです。このレッスンを終えたあとの完成予想のソースコードは<a class="external external-icon" href="https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson08.html" rel="noopener">Gamedev-Canvas-workshop/lesson8.html</a>で入手できます。</p>
</div>

<p><span class="seoSummary">ブロックを崩せるのは最高ですが、より素晴らしいものにするためにユーザーが壊した全てのブロックに対してポイントを与え、合計スコアのカウントを更新し続けましょう。</span></p>

<h2 id="スコアを数える">スコアを数える</h2>

<p>ゲームを通してスコアを見せることができればあとで友達に自慢することができます。スコアを記録する変数が必要です。次の行を自分のJavaScriptの他の変数のあとに追記してください。</p>

<pre class="brush: js">var score = 0;</pre>

<p>スコア表示を作成し更新するために<code>drawScore()</code>関数も必要です。次のコードを<code>collisionDetection()</code>関数のあとに追加してください。</p>

<pre class="brush: js">function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: "+score, 8, 20);
}</pre>

<p>文字をキャンバス上に描画するのは図形を描画するのと似ています。フォント定義はCSS出するものとちょうど同じように描きます。大きさとフォントの種類は{{domxref("CanvasRenderingContext2D.font","font()")}}メソッドで設定できます。それからフォントの色を設定するには{{domxref("CanvasRenderingContext2D.fillStyle()","fillStyle()")}}を、キャンバス上に配置される実際の文章を設定するには{{domxref("CanvasRenderingContext2D.fillText","fillText()")}}を使用してください。最初のパラメーターは文章自体です。上記のコードは現在のポイントの数を表示します。最後の2つのパラメーターは文章がキャンバス上に置かれる座標です。</p>

<p>ブロックに当たるたびにスコアを与えるには、衝突が検出されるたびにスコア変数を増加させる1行を<code>collisionDetection()</code>関数に追加します。次のハイライトされた行を自分のコードに追加してください。</p>

<pre class="brush: js; highlight:[9]">function collisionDetection() {
    for(var c=0; c&lt;brickColumnCount; c++) {
        for(var r=0; r&lt;brickRowCount; r++) {
            var b = bricks[c][r];
            if(b.status == 1) {
                if(x &gt; b.x &amp;&amp; x &lt; b.x+brickWidth &amp;&amp; y &gt; b.y &amp;&amp; y &lt; b.y+brickHeight) {
                    dy = -dy;
                    b.status = 0;
                    score++;
                }
            }
        }
    }
}</pre>

<p><code>draw()</code>関数から<code>drawScore()</code>を呼び続けることで新しいフレームごとにスコアは最新の状態に保たれます。次の行を<code>draw()</code>の中、ちょうど<code>drawPaddle()</code>の呼び出しの下に追加してください。</p>

<pre class="brush: js">drawScore();</pre>

<h2 id="全てのブロックが崩されたときに勝利を伝えるメッセージを表示する">全てのブロックが崩されたときに勝利を伝えるメッセージを表示する</h2>

<p>ポイントを集め続けるという動作はうまく働きますが、永久に増やし続けることは出来ません。全てのブロックが崩されたらどうなるのでしょうか。何においてもそれこそがゲームの主目標なのですから、得られる全てのポイントが集まったときには勝利を伝えるメッセージを表示すべきです。次のハイライトされた部分を自分の<code>collisionDetection()</code>関数に追記してください。</p>

<pre class="brush: js; highlight:[10,11,12,13]">function collisionDetection() {
    for(var c=0; c&lt;brickColumnCount; c++) {
        for(var r=0; r&lt;brickRowCount; r++) {
            var b = bricks[c][r];
            if(b.status == 1) {
                if(x &gt; b.x &amp;&amp; x &lt; b.x+brickWidth &amp;&amp; y &gt; b.y &amp;&amp; y &lt; b.y+brickHeight) {
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
}</pre>

<p>これのおかげで、全てのブロックが崩されたときにユーザーは実際にゲームに勝つことができます。ゲームにおいてはこれは非常に重要です。アラートのボタンがクリックされたら<code>document.location.reload()</code>関数はページを再読込しゲームをもう一度始めます。</p>

<h2 id="自分のコードと比べる">自分のコードと比べる</h2>

<p>自分のものと比べたいときのために最新のコードをいかに示します。このように見え、そして動くはずです。</p>

<p>{{JSFiddleEmbed("https://jsfiddle.net/raymondjplante/b3z2Lpu9/","","395")}}</p>

<div class="note">
<p><strong>練習</strong>: ブロックに当たるたびにより多くのポイントを追加し、ゲームの終わりに集めたポイントの数を表示するようにしましょう。</p>
</div>

<h2 id="次のステップ">次のステップ</h2>

<p>この時点でもこのゲームはかなりよく見えます。次のレッスンでは<a href="/ja/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Mouse_controls">マウス操作</a>を追加することでゲームの魅力を広げます。</p>

<p>{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Collision_detection", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Mouse_controls")}}</p>
