---
title: Pointer Lock API
slug: Web/API/Pointer_Lock_API
tags:
  - API
  - Advanced
  - Games
  - Reference
  - mouse lock
  - pointer lock
translation_of: Web/API/Pointer_Lock_API
---
<div>{{DefaultAPISidebar("Pointer Lock API")}}</div>

<p><span class="seoSummary"><strong>Pointer Lock API</strong> (以前は <em>Mouse Lock API</em> と呼ばれていました) は、ビューポート内のマウスカーソルの絶対位置だけでなく、時間の経過に伴うマウスの動き (すなわち、デルタ) に基づく入力方法を提供します。これにより、マウスの動きそのものを知る、マウスイベントのターゲットをひとつの要素にロックする、マウスが一方向へどれだけ移動できるかの制限を除去する、視野からカーソルを取り除くことができます。</span>これらは、本人視点の 3D ゲームなどで理想的です。</p>

<p>さらにこの API は、動きのコントロールやオブジェクトの回転、エントリーの変更にかなりのマウス操作が必要になるアプリケーションで役立ちます。例えばなんらかのボタンをクリックすることなく、マウスを動かすだけで視野角を制御できます。ボタンは他の操作のために使用できます。また、地図や衛星画像を見るアプリでも役に立ちます。</p>

<p>Pointer Lock では、カーソルがブラウザーやスクリーンの境界を通り過ぎるときでもマウスイベントにアクセスできます。例えばユーザーは限りなくマウスを動かすことで、3D モデルの回転や操作を続けることができます。Pointer Lock がなければ、ポインターがブラウザーまたはスクリーンの端に達したときに回転や操作が止まります。ゲームのプレイヤーはマウスカーソルがゲームのプレイ領域から外れて、別のアプリケーションを意図せずクリックしてゲームからマウスのフォーカスが外れてしまうことを心配せずに、熱中してボタンのクリックやマウスカーソルをあちこちに動かすことができるようになります。</p>

<h2 id="basics" name="basics">基本概念</h2>

<p>Pointer Lock は <a href="/ja/docs/Web/API/Element/setCapture" title="element.setCapture">マウスキャプチャ</a> と関係があります。マウスキャプチャはマウスのドラッグ中にターゲットの要素へ継続的にイベントを提供しますが、マウスのボタンを離すとイベントが停止します。Pointer Lock とマウスキャプチャの違いは以下のとおりです:</p>

<ul>
 <li>Pointer Lock は永続的です。明示的に API が呼び出されるかユーザーが特定の解放ジェスチャを行うまで、マウスを解放しません。</li>
 <li>Pointer Lock はブラウザーまたはスクリーンの境界に制限されません。</li>
 <li>Pointer Lock はマウスボタンの状態に関係なく、イベントが発生し続けます。</li>
 <li>Pointer Lock はカーソルを隠します。</li>
</ul>

<h2 id="method_overview" name="method_overview">メソッド/プロパティの概要</h2>

<p>ここでは、Pointer Lock 仕様に関係するプロパティやメソッドを簡単に説明します。</p>

<h3 id="requestPointerLock()" name="requestPointerLock()">requestPointerLock()</h3>

<p>Pointer Lock API は <a href="/ja/docs/Web/Guide/API/DOM/Using_full_screen_mode">Fullscreen API</a> と同様に、新たなメソッド {{domxref("Element.requestPointerLock","requestPointerLock()")}} を追加することで DOM 要素を拡張しています。なお現在は、ベンダー接頭辞を付加しています。接頭辞が最近削除されましたので、例えば <code>canvas</code> 要素で Pointer Lock を要求したい場合は、現在は以下のように宣言します:</p>

<pre class="brush: js">canvas.requestPointerLock = canvas.requestPointerLock ||
                            canvas.mozRequestPointerLock;

canvas.requestPointerLock()
</pre>

<h3 id="pointerLockElement_and_exitPointerLock()" name="pointerLockElement_and_exitPointerLock()">pointerLockElement と exitPointerLock()</h3>

<p>Pointer Lock API は {{domxref("Document")}} インターフェイスも拡張しており、新たなプロパティやメソッドを追加しています。新たなプロパティ {{domxref("Document.pointerLockElement","pointerLockElement")}} は、現在ロックしている要素がある場合に、その要素へアクセスするために使用します。また、{{domxref("Document")}} 新たなメソッドである {{domxref("Document.exitPointerLock","exitPointerLock()")}} は、名前がほのめかすとおり Pointer Lock を終えるために使用します。</p>

<p>{{domxref("Document.pointerLockElement","pointerLockElement")}} プロパティは要素が現在 Pointer Locked 状態であるかを判断する (例えば真偽チェックを行う) ために、またはロックされた要素があればその要素への参照を得るために有用です。</p>

<p><code>pointerLockElement</code> の使用例を示します:</p>

<pre class="brush: js">if(document.pointerLockElement === canvas ||
  document.mozPointerLockElement === canvas) {
    console.log('The pointer lock status is now locked');
} else {
    console.log('The pointer lock status is now unlocked');
}</pre>

<p>{{domxref("Document.exitPointerLock()")}} メソッドは Pointer Lock を終えるために使用され、{{domxref("Element.requestPointerLock","requestPointerLock")}} と同様に {{event("pointerlockchange")}} イベントや {{event("pointerlockerror")}} イベントを用いて非同期的に動作します。使用例は以下のとおりです。</p>

<pre class="brush: js">document.exitPointerLock = document.exitPointerLock    ||
                           document.mozExitPointerLock;

// ロック解除を試みる
document.exitPointerLock();
</pre>

<h2 id="mouselocklostevent" name="mouselocklostevent">pointerlockchange イベント</h2>

<p>Pointer Lock の状態が変化したとき、例えば {{domxref("Element.requestPointerLock","requestPointerLock()")}} や {{domxref("Document.exitPointerLock","exitPointerLock()")}} を呼び出したときや、ユーザーが ESC キーを押下したときなどに、{{event("pointerlockchange")}} イベントが <code>document</code> に発生します。これはシンプルなイベントであり、付加的なデータは含まれません。</p>

<pre class="brush: js">if ("onpointerlockchange" in document) {
  document.addEventListener('pointerlockchange', lockChangeAlert, false);
} else if ("onmozpointerlockchange" in document) {
  document.addEventListener('mozpointerlockchange', lockChangeAlert, false);
}

function lockChangeAlert() {
  if(document.pointerLockElement === canvas ||
  document.mozPointerLockElement === canvas) {
    console.log('The pointer lock status is now locked');
    // 応答として役に立つ処理
  } else {
    console.log('The pointer lock status is now unlocked');
    // 応答として役に立つ処理
  }
}</pre>

<h2 id="mouselocklostevent" name="mouselocklostevent">pointerlockerror イベント</h2>

<p>{{domxref("Element.requestPointerLock","requestPointerLock()")}} または {{domxref("Document.exitPointerLock","exitPointerLock()")}} の呼び出しによりエラーが発生したときは、{{event("pointerlockerror")}} イベントが <code>document</code> に発生します。これはシンプルなイベントであり、付加的なデータは含まれません。</p>

<pre class="brush: js">document.addEventListener('pointerlockerror', lockError, false);
document.addEventListener('mozpointerlock<span style="font-size: 1rem;">error</span><span style="font-size: 1rem;">', lockError, false);</span>

function lockError(e) {
  alert("Pointer lock failed");
}</pre>

<div class="note"><strong>注記</strong>: Firefox 50 まで、上記のイベントは <code>moz</code> 接頭辞を付加していました。</div>

<h2 id="extensions" name="extensions">Mouse イベントの拡張</h2>

<p>Pointer Lock API は通常の {{domxref("MouseEvent")}} インターフェイスを、movement 属性で拡張します。新たな 2 つの属性 {{domxref("MouseEvent.movementX","movementX")}} および {{domxref("MouseEvent.movementY","movementY")}} が、マウスポインタの位置の変化を提供します。パラメーターの値は {{domxref("MouseEvent")}} のプロパティである {{domxref("MouseEvent.screenX","screenX")}} および {{domxref("MouseEvent.screenY","screenY")}} の値同士の差と同じであり、それらのプロパティは 2 つ続いて発生する {{event("mousemove")}} イベント <code>eNow</code> および <code>ePrevious</code> に保存されます。言い換えると、Pointer Lock のパラメーター <code>movementX</code> は、<code>eNow.screenX - ePrevious.screenX</code> になります。</p>

<h3 id="locked_state" name="locked_state">ロックされた状態</h3>

<p>Pointer Lock が有効であるとき、標準 {{domxref("MouseEvent")}} のプロパティである {{domxref("MouseEvent.clientX","clientX")}}、{{domxref("MouseEvent.clientY","clientY")}}、{{domxref("MouseEvent.screenX","screenX")}}、{{domxref("MouseEvent.screenY","screenY")}} は、マウスが動いていないかのように値が固定されます。{{domxref("MouseEvent.movementX","movementX")}} プロパティおよび {{domxref("MouseEvent.movementY","movementY")}} プロパティが、マウスの位置の変化を提供し続けます。マウスが一方向へ連続的に移動するとしても、{{domxref("MouseEvent.movementX","movementX")}} および {{domxref("MouseEvent.movementY","movementY")}} の値に制限はありません。マウスカーソルは存在せず、ウィンドウから外れたりスクリーンの端で止まったりしないという考え方です。</p>

<h3 id="unlocked_state" name="unlocked_state">ロックが解除された状態</h3>

<p>パラメーター {{domxref("MouseEvent.movementX","movementX")}} および {{domxref("MouseEvent.movementY","movementY")}} はマウスのロック状態にかかわらず有効であり、ロックされていない状態でも利便性のために使用できます。</p>

<p>マウスのロックが解除されると、システムカーソルが存在するようになり、ブラウザーがウィンドウ表示に戻ります。このとき、{{domxref("MouseEvent.movementX","movementX")}} および {{domxref("MouseEvent.movementY","movementY")}} は 0 に設定されるかもしれません。</p>

<h2 id="example" name="example">シンプルな例のウォークスルー</h2>

<p>Pointer Lock の使用方法やシンプルな制御システムの設定方法を示すため、<a href="https://mdn.github.io/dom-examples/pointer-lock/">シンプルな Pointer Lock のデモ</a> を作成しました (<a href="https://github.com/mdn/dom-examples/tree/master/pointer-lock">ソースコードを確認する</a>)。デモは以下のようなものです:</p>

<p><img alt="A red circle on top of a black background." src="https://mdn.mozillademos.org/files/7953/pointer-lock.png" style="display: block; height: 362px; margin: 0px auto; width: 640px;"></p>

<p>このデモでは、JavaScript を使用して {{htmlelement("canvas")}} 要素上にボールを描画します。canvas をクリックすると Pointer Lock がマウスポインターを取り除いて、マウスを使用してボールを直接動かすことができます。このデモの仕組みを見ていきましょう。</p>

<p>canvas 内の、x および y の初期位置を設定します:</p>

<pre class="brush: js">var x = 50;
var y = 50;</pre>

<p>現在は Pointer Lock のメソッドに接頭辞がついていますので、ブラウザー実装ごとに処理を分けています。</p>

<pre class="brush: js">canvas.requestPointerLock = canvas.requestPointerLock ||
                            canvas.mozRequestPointerLock;

document.exitPointerLock = document.exitPointerLock ||
                           document.mozExitPointerLock;</pre>

<p>canvas がクリックされたときに、canvas で <code>requestPointerLock()</code> メソッドを実行するイベントリスナーを設定します。これは、Pointer Lock を開始します。</p>

<pre class="brush: js">canvas.onclick = function() {
  canvas.requestPointerLock();
}</pre>

<p>Pointer Lock イベント <code>pointerlockchange</code> のイベントリスナーを設定します。イベントが発生したら、Pointer Lock の変更を制御するために <code>lockChangeAlert()</code> という名前の関数を実行します。</p>

<pre class="brush: js">// Pointer Lock のイベントリスナー

// さまざまなブラウザ向けに、Pointer Lock の状態変化イベントをフックする
document.addEventListener('pointerlockchange', lockChangeAlert, false);
document.addEventListener('mozpointerlockchange', lockChangeAlert, false);</pre>

<p>この関数は、pointLockElement プロパティが canvas を示しているかを確認します。示している場合は、マウスの移動を扱うためにイベントリスナーへ <code>updatePosition()</code> 関数を設定します。示していない場合は、イベントリスナーを再び削除します。</p>

<pre class="brush: js">function lockChangeAlert() {
  if (document.pointerLockElement === canvas ||
      document.mozPointerLockElement === canvas) {
    console.log('The pointer lock status is now locked');
    document.addEventListener("mousemove", updatePosition, false);
  } else {
    console.log('The pointer lock status is now unlocked');
    document.removeEventListener("mousemove", updatePosition, false);
  }
}</pre>

<p>updatePosition() 関数が、canvas 内のボールの位置 (<code>x</code> および <code>y</code>) を更新します。また、ボールが canvas の端からはみ出すかをチェックする <code>if()</code> 文が含まれています。ボールがはみ出す場合は、反対側の端にボールを描画します。また、<code><a href="/ja/docs/Web/API/window/requestAnimationFrame">requestAnimationFrame()</a></code> がすでに呼び出されたかを確認しており、呼び出された場合は必要に応じて再び呼び出して、canvas のシーンを更新するために <code>canvasDraw()</code> 関数を呼び出します。さらに、参照用に X および Y の位置を表示するための tracker も設定します。</p>

<pre class="brush: js">var tracker = document.getElementById('tracker');

var animation;
function updatePosition(e) {
  x += e.movementX;
  y += e.movementY;
  if (x &gt; canvas.width + RADIUS) {
    x = -RADIUS;
  }
  if (y &gt; canvas.height + RADIUS) {
    y = -RADIUS;
  }
  if (x &lt; -RADIUS) {
    x = canvas.width + RADIUS;
  }
  if (y &lt; -RADIUS) {
    y = canvas.height + RADIUS;
  }
  tracker.textContent = "X position: " + x + ", Y position: " + y;

  if (!animation) {
    animation = requestAnimationFrame(function() {
      animation = null;
      canvasDraw();
    });
  }
}</pre>

<p><code>canvasDraw()</code> 関数は、現在の <code>x</code> および <code>y</code> の位置にボールを描画します:</p>

<pre class="brush: js">function canvasDraw() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#f00";
  ctx.beginPath();
  ctx.arc(x, y, RADIUS, 0, degToRad(360), true);
  ctx.fill();
}</pre>

<h2 id="iframe_limitations" name="iframe_limitations">iframe の制限</h2>

<p>Pointer Lock は一度に 1 つだけの iframe をロックできます。iframe をひとつロックすると、別の iframe をロックしてターゲットを切り替えようとすることはできません。Pointer Lock はエラーになります。この制限を避けるため、始めにロックされた iframe のロックを解除してから別の iframe をロックしてください。</p>

<p>iframe の既定の動作では、"サンドボックス化された" iframe が Pointer Lock をブロックします。<code>&lt;iframe sandbox="allow-pointer-lock"&gt;</code> という属性/値の組み合わせによってこの制限を避けられることが、Chrome でまもなく可能になる予定です。</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">策定状況</th>
   <th scope="col">コメント</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('Pointer Lock')}}</td>
   <td>{{Spec2('Pointer Lock')}}</td>
   <td>最初の仕様</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>

<p>{{Compat("api.Element.requestPointerLock")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("MouseEvent")}}</li>
</ul>
