---
title: KeyboardEvent.code
slug: Web/API/KeyboardEvent/code
tags:
  - API
  - Code
  - DOM
  - DOM Events
  - KeyboardEvent
  - Property
  - Read-only
  - Reference
  - UI Events
  - プロパティ
  - 読取専用
translation_of: Web/API/KeyboardEvent/code
---
<div>{{APIRef("DOM Events")}}</div>

<p><span class="seoSummary"><code>KeyboardEvent.code</code> プロパティは、 (キー入力によって入力された文字ではなく) キーボード上の物理的なキーを表します。つまり、このプロパティはキーボードレイアウトや修飾キーの状態によって変更される前の値を返します。</span></p>

<p>入力機器が物理キーボードではなく、仮想キーボードやアクセシビリティデバイスである場合、返値は物理キーボードから入力された場合にできるだけ近づくよう、物理キーボードと仮想入力機器との互換性を最大にするよう、ブラウザーによって設定されます。</p>

<p>このプロパティは、キーに関連付けられている文字ではなく、入力デバイス上の物理的な位置に基づいてキー入力を扱いたいときに役立ちます。これは特に、キーボードをゲームパッドのように使いたい場合などに有用です。ただし、 <code>KeyboardEvent.code</code> で報告された値を用いてキー入力で生成される文字を判断するべきではありません。キーコード名がキー上に印刷されている実際の文字や、キーが押されたときにコンピューターが生成する文字と一致するとは限らないからです。</p>

<p>例えば、返ってきた <code>code</code> が "<code>KeyQ</code>" は QWERTY レイアウトのキーボードでは <kbd>Q</kbd> キーですが、同じ Dvorak キーボードでは同じ <code>code</code> の値が <kbd>'</kbd> キーを表し、 AZERTY キーボードでは <kbd>A</kbd> キーを表すものでもあります。したがって、すべてのユーザーが特定のキーボードレイアウトを使用しているわけではないため、 <code>code</code> の値を用いてユーザーが認識しているキーの名前が何であるかを特定することはできません。</p>

<p>キーイベントに対応する文字が何であるかを判別するには、、代わりに{{domxref("KeyboardEvent.key")}} プロパティを使用してください。</p>

<h2 id="Code_values" name="Code_values">コードの値</h2>

<p>Windows, Linux, macOS におけるコード値は、 <a href="/ja/docs/Web/API/KeyboardEvent/code/code_values">KeyboardEvent: コード値</a>ページにあります。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Exercising_KeyboardEvent" name="Exercising_KeyboardEvent">KeyboardEvent の使用例</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html notranslate">&lt;p&gt;Press keys on the keyboard to see what the KeyboardEvent's key and code
   values are for each one.&lt;/p&gt;
&lt;div id="output"&gt;
&lt;/div&gt;
</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css notranslate">#output {
  font-family: Arial, Helvetica, sans-serif;
  border: 1px solid black;
}</pre>

<h4 id="JavaScript">JavaScript</h4>

<pre class="brush: js notranslate">window.addEventListener("keydown", function(event) {
  let str = "KeyboardEvent: key='" + event.key + "' | code='" +
            event.code + "'";
  let el = document.createElement("span");
  el.innerHTML = str + "&lt;br/&gt;";

  document.getElementById("output").appendChild(el);
}, true);</pre>

<h4 id="Try_it_out" name="Try_it_out">試してみよう</h4>

<p>キー入力をサンプルコードに取得させるために、キーを入力する前に output ボックスをクリックしてください。</p>

<p>{{ EmbedLiveSample('Exercising_KeyboardEvent', 600, 300) }}</p>

<h3 id="Handle_keyboard_events_in_a_game" name="Handle_keyboard_events_in_a_game">ゲームでのキーボードイベントの扱い</h3>

<p>This example establishes an event listener for {{event("keydown")}} events which handles keyboard input for a game which uses the typical "WASD" keyboard layout for steering forward, left, backward, and right. This will use the same four keys physically regardless of what the actual corresponding characters are, such as if the user is using an AZERTY keyboard.</p>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html notranslate">&lt;p&gt;Use the WASD (ZQSD on AZERTY) keys to move and steer.&lt;/p&gt;
&lt;svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="world"&gt;
  &lt;polygon id="spaceship" points="15,0 0,30 30,30"/&gt;
&lt;/svg&gt;
&lt;script&gt;refresh();&lt;/script&gt;
</pre>

<h4 id="CSS_2">CSS</h4>

<pre class="brush: css notranslate">.world {
  margin: 0px;
  padding: 0px;
  background-color: black;
  width: 400px;
  height: 400px;
}

#spaceship {
  fill: orange;
  stroke: red;
  stroke-width: 2px;
}</pre>

<h4 id="JavaScript_2">JavaScript</h4>

<p>The first section of the JavaScript code establishes some variables we'll be using. <code>shipSize</code> contains the size of the ship the player is moving around, for convenience. <code>position</code> is used to track the position of the ship within the play field. <code>moveRate</code> and <code>turnRate</code> are the number of pixels forward and backward each keystroke moves the ship and how many degrees of rotation the left and right steering controls apply per keystroke. angle is the current amount of rotation applied to the ship, in degrees; it starts at 0° (pointing straight up). Finally, <code>spaceship</code> is set to refer to the element with the ID <code>"spaceship"</code>, which is the SVG polygon representing the ship the player controls.</p>

<pre class="brush: js notranslate">let shipSize = {
  width: 30,
  height: 30
};

let position = {
  x: 200,
  y: 200
};

let moveRate = 9;
let turnRate = 5;

let angle = 0;

let spaceship = document.getElementById("spaceship");
</pre>

<p>Next comes the function <code>updatePosition()</code>. This function takes as input the distance the ship is to be moved, where positive is a forward movement and negative is a backward movement. This function computes the new position of the ship given the distance moved and the current direction the ship is facing. It also handles ensuring that the ship wraps across the boundaries of the play field instead of vanishing.</p>

<pre class="brush: js notranslate">function updatePosition(offset) {
  let rad = angle * (Math.PI/180);
  position.x += (Math.sin(rad) * offset);
  position.y -= (Math.cos(rad) * offset);

  if (position.x &lt; 0) {
    position.x = 399;
  } else if (position.x &gt; 399) {
    position.x = 0;
  }

  if (position.y &lt; 0) {
    position.y = 399;
  } else if (position.y &gt; 399) {
    position.y = 0;
  }
}
</pre>

<p>The <code>refresh()</code> function handles applying the rotation and position by using an <a href="/ja/docs/Web/SVG/Attribute/transform">SVG transform</a>.</p>

<pre class="brush: js notranslate">function refresh() {
  let x = position.x - (shipSize.width/2);
  let y = position.y - (shipSize.height/2);
  let transform = "translate(" + x + " " + y + ") rotate(" + angle + " 15 15) ";

  spaceship.setAttribute("transform", transform);
}
</pre>

<p>Finally, the <code>addEventListener()</code> method is used to start listening for {{event("keydown")}} events, acting on each key by updating the ship position and rotation angle, then calling <code>refresh()</code> to draw the ship at its new position and angle.</p>

<pre class="brush: js notranslate">window.addEventListener("keydown", function(event) {
  if (event.defaultPrevented) {
    return; // Do nothing if event already handled
  }

  switch(event.code) {
    case "KeyS":
    case "ArrowDown":
      // Handle "back"
      updatePosition(-moveRate);
      break;
    case "KeyW":
    case "ArrowUp":
      // Handle "forward"
      updatePosition(moveRate);
      break;
    case "KeyA":
    case "ArrowLeft":
      // Handle "turn left"
      angle -= turnRate;
      break;
    case "KeyD":
    case "ArrowRight":
      // Handle "turn right"
      angle += turnRate;
      break;
  }

  refresh();

  // Consume the event so it doesn't get handled twice
  event.preventDefault();
}, true);</pre>

<h4 id="Try_it_out_2">Try it out</h4>

<p>To ensure that keystrokes go to the sample code, click inside the black game play field below before pressing keys.</p>

<p>{{EmbedLiveSample("Handle_keyboard_events_in_a_game", 420, 460)}}</p>

<p>There are several ways this code can be made better. Most real games would watch for {{event("keydown")}} events, start motion when that happens, and stop the motion when the corresponding {{event("keyup")}} occurs, instead of relying on key repeats. That would allow both smoother and faster movement, but would also allow the player to be moving and steering at the same time. Transitions or animations could be used to make the ship's movement smoother, too.</p>

<h2 id="Specification" name="Specification">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('UI Events', '#dom-keyboardevent-code', 'KeyboardEvent.code')}}</td>
   <td>{{Spec2('UI Events')}}</td>
   <td>初回定義、<a href="https://dvcs.w3.org/hg/dom3events/raw-file/tip/html/DOM3Events-code.html">コード値</a>を含む。</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.KeyboardEvent.code")}}</p>
