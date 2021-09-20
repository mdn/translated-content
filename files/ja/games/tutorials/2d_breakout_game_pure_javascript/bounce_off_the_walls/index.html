---
title: ボールを壁で弾ませる
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls
translation_of: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls
original_slug: Games/Workflows/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls
---
<div>{{GamesSidebar}}</div>

<div>{{IncludeSubnav("/en-US/docs/Games")}}</div>

<p>{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Move_the_ball", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls")}}</p>

<div class="summary">
<p>これは<a href="/ja/docs/Games/Workflows/Breakout_game_from_scratch">ゲーム開発Canvasチュートリアル</a>の10ステップのうち<strong>3番目</strong>のステップです。このレッスンを終えたあとの完成予想のソースコードは<a class="external external-icon" href="https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson03.html" rel="noopener">Gamedev-Canvas-workshop/lesson3.html</a>で入手できます。</p>
</div>

<p><span class="seoSummary">ボールが動くのを見られたのは良いことですが、画面からすぐ消えてしまっては面白くないじゃありませんか! これを解決するためにとても簡単な衝突検知 (<a href="/ja/docs/Games/Workflows/Breakout_game_from_scratch/Collision_detection">後ほど</a>詳しく説明します) を導入し、Canvasの四辺でボールを弾ませます。</span></p>

<h2 id="簡単な衝突検知">簡単な衝突検知</h2>

<p>衝突を検知するためにボールが壁に触っている (衝突している) か確かめ、もし触っている場合には動く方向をそれに従って変更します。</p>

<p>計算を簡単にするために、描画される円の半径をもつ<code>ballRadius</code>という変数を定義しましょう。次のコードを既にどこかにある変数定義の後に追記しましょう。</p>

<pre class="brush: js">var ballRadius = 10;</pre>

<p>あわせて<code>drawBall()</code>関数内のボールを描画している行も次のように更新しましょう。</p>

<pre class="brush: js">ctx.arc(x, y, ballRadius, 0, Math.PI*2);</pre>

<h3 id="上端と下端で弾ませる">上端と下端で弾ませる</h3>

<p>ボールを弾ませる壁は4つあります。まずは上端に注目しましょう。毎フレーム、ボールがCanvasの上端に触っているかどうか確認する必要があります。もし触っているなら、ボールの動きを反転させ、ボールが反対方向に動き、視界の範囲内に留まるようにしましす。座標系は左上端から始まることを思い出しながら考えてみれば、次のようなコードが思いつくでしょう。</p>

<pre class="brush: js">if(y + dy &lt; 0) {
    dy = -dy;
}</pre>

<p>もしボールの位置の<code>y</code>の値が0未満だったら、符号反転させた値を設定することでy軸方向の動きの向きを変えます。もしボールが上に向かって毎フレーム2ピクセルの速さで動いていたら、今度は「上」に向かって毎フレーム-2ピクセルの速さで動く、つまり下に向かって毎フレーム2ピクセルの速さで動きます。</p>

<p>上記のコードは上端でボールを弾ませていました。では今度は下端について考えてみましょう。</p>

<pre class="brush: js">if(y + dy &gt; canvas.height) {
    dy = -dy;
}</pre>

<p><code>y</code>座標がCanvasの高さより高かったら(左上端から<code>y</code>の値を数えているため、上端は0で始まり下端はCanvasの高さである480ピクセルとなることを思い出してください) 、先程のように<code>y</code>軸方向の動きを反転させます。</p>

<p>これら2つの文を合わせればコードの冗長さを減らせます。</p>

<pre class="brush: js">if(y + dy &gt; canvas.height || y + dy &lt; 0) {
    dy = -dy;
}</pre>

<p>2つの文のどちらかが<code>true</code>だったら、ボールの動きを反転させます。</p>

<h3 id="左端と右端で弾ませる">左端と右端で弾ませる</h3>

<p>上端と下端を対処したところで、左端と右端を考えてみましょう。実のところとても良く似ていて、<code>y</code>を<code>x</code>で置き換えて文を繰り返すだけでよいのです。</p>

<pre class="brush: js">if(x + dx &gt; canvas.width || x + dx &lt; 0) {
    dx = -dx;
}

if(y + dy &gt; canvas.height || y + dy &lt; 0) {
    dy = -dy;
}</pre>

<p>ここで上記のコードをdraw()関数の、ちょうど閉じ波括弧の前に挿入しておいてください。</p>

<h3 id="まだボールが壁に隠れる!">まだボールが壁に隠れる!</h3>

<p>ここであなたのコードを試してみましょう。驚くはずです。Canvasの四辺全てでボールが弾んでいます! でも別の問題がありました。ボールが壁にぶつかるとき、位置を変える少し前に壁に沈んでしまいます。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/10432/ball-in-wall.png" style="display: block; height: 320px; margin: 0px auto; width: 480px;"></p>

<p>壁と円周の衝突地点を計算すべきところで、壁と円の中心の衝突地点を計算しているのがこの理由です。ボールは壁に触ったときに弾むべきで、壁に半分のめり込んだときに弾んでも仕方ありません。そこで円周を含めるために文を少し調節します。最後に追加したコードを次のように書き換えます。</p>

<pre class="brush: js">if(x + dx &gt; canvas.width-ballRadius || x + dx &lt; ballRadius) {
    dx = -dx;
}
if(y + dy &gt; canvas.height-ballRadius || y + dy &lt; ballRadius) {
    dy = -dy;
}</pre>

<p>ボールの中心と辺の距離がボールの半径とちょうど等しくなったときに動く向きを変えます。半径を辺の長さから引き、もう一方では足すことで衝突検知が正しく行われたような印象が出ます。思ったとおり、壁にぶつかった時点でボールが弾むようになります。</p>

<h2 id="自分のコードと比べる">自分のコードと比べる</h2>

<p>もう一度、このパートを終えた後にできたコードと比べてみて、それからコードで遊んでみてください。</p>



<p>{{JSFiddleEmbed("https://jsfiddle.net/end3r/redj37dc/","","395")}}</p>



<div class="note">
<p><strong>練習</strong>: 壁に当たるたびにボールの色をランダムに変えてみてください。</p>
</div>

<h2 id="次のステップ">次のステップ</h2>

<p>ボールが動き、かつゲームボードに留まるようになることまでこぎつけました。第4章では操作できるパドルを実装してみます。 <a href="/ja/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls">パドルとキーボード操作</a>を見てみましょう。</p>

<p>{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Move_the_ball", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls")}}</p>
