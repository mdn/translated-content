---
title: <input type="button">
slug: Web/HTML/Element/input/button
---

{{HTMLRef("Input_types")}}

{{HTMLElement("input")}} 要素の **`button`** 型は、単純なプッシュボタンとして描画され、イベントハンドラー関数 (ふつうは {{event("click")}} イベント) を割り当てることで、ウェブページのあらゆる場所でカスタム機能を制御するようにプログラムすることができます。

{{EmbedInteractiveExample("pages/tabbed/input-button.html", "tabbed-shorter")}}

> **メモ:** `<input>` 要素の `button` 型は完全に妥当な HTML ですが、より新しい {{HTMLElement("button")}} 要素が、ボタンの作成にはより好まれるようになりました。 {{HTMLElement("button")}} のラベル文字列は開始タグと終了タグの間に挿入され、ラベルに画像を含む HTML を含めることができます。

<table class="properties">
  <tbody>
    <tr>
      <td>
        <strong><a href="#value">値</a></strong>
      </td>
      <td>ボタンのラベルとして使われる {{domxref("DOMString")}}</td>
    </tr>
    <tr>
      <td><strong>イベント</strong></td>
      <td>{{domxref("Element/click_event", "click")}}</td>
    </tr>
    <tr>
      <td><strong>対応している共通属性</strong></td>
      <td>
        {{htmlattrxref("type", "input")}},
        {{htmlattrxref("value", "input")}}
      </td>
    </tr>
    <tr>
      <td><strong>IDL 属性</strong></td>
      <td><code>value</code></td>
    </tr>
    <tr>
      <td><strong>メソッド</strong></td>
      <td>なし</td>
    </tr>
  </tbody>
</table>

## 値

`<input type="button">` 要素の {{htmlattrxref("value", "input")}} 属性には、ボタンのラベルとして使われる {{domxref("DOMString")}} を設定します。

```html
<input type="button" value="クリックしてね">
```

{{EmbedLiveSample("summary-example3", 650, 30)}}

`value` を指定しなかった場合は、無印のボタンになります。

```html
<input type="button">
```

{{EmbedLiveSample("summary-example1", 650, 30)}}

## ボタンの使用

`<input type="button">` 要素には既定の動作がありません (親戚である [`<input type="submit">`](/ja/docs/Web/HTML/Element/input/submit) や [`<input type="reset">`](/ja/docs/Web/HTML/Element/input/reset) は、それぞれフォームの送信とリセットに使用されます)。ボタンに何かをさせる場合は、処理を行うための JavaScript コードを書く必要があります。

### 単純なボタン

単純なボタンに {{event("click")}} イベントハンドラーを設定し、マシンを起動させましょう (つまり、ボタンの `value` と続く段落の文字列コンテンツを切り替えます)。

```html
<form>
  <input type="button" value="マシンを起動">
</form>
<p>マシンが停止しています。</p>
```

```js
const button = document.querySelector('input');
const paragraph = document.querySelector('p');

button.addEventListener('click', updateButton);

function updateButton() {
  if (button.value === 'マシンを起動') {
    button.value = 'マシンを停止';
    paragraph.textContent = 'マシンが起動しています！';
  } else {
    button.value = 'マシンを起動';
    paragraph.textContent = 'マシンが停止しています。';
  }
}
```

このスクリプトは DOM で `<input>` を表す {{domxref("HTMLInputElement")}} オブジェクトの参照を受け取り、この参照を変数 `button` に保存します。{{domxref("EventTarget.addEventListener", "addEventListener()")}} は、ボタンに {{event("click")}} イベントが発生したときに実行される関数を設定します。

{{EmbedLiveSample("A_simple_button", 650, 100)}}

### ボタンへのショートカットキーの追加

ショートカットキーは、アクセスキーやキーボードショートカットとも呼ばれますが、ユーザーがキーボード上のキーまたはキーの組み合わせを使用してボタンを操作できるものです。ボタンにショートカットキーを追加するには、どの {{HTMLElement("input")}} でも同じですが、 {{htmlattrxref("accesskey")}} グローバル属性を使用します。

この例では、 <kbd>s</kbd> がアクセスキーとして指定されています (ブラウザーと OS の組み合わせによっては、 <kbd>s</kbd> と特定の修飾キーの組み合わせが必要です。その一覧については [accesskey](/ja/docs/Web/HTML/Global_attributes/accesskey) を参照してください)。

```html
<form>
  <input type="button" value="マシンを起動" accesskey="s">
</form>
<p>マシンが停止しています。</p>
```

```js hidden
const button = document.querySelector('input');
const paragraph = document.querySelector('p');

button.addEventListener('click', updateButton);

function updateButton() {
  if (button.value === 'マシンを起動') {
    button.value = 'マシンを停止';
    paragraph.textContent = 'マシンが起動しています！';
  } else {
    button.value = 'マシンを起動';
    paragraph.textContent = 'マシンが停止しています。';
  }
}
```

{{EmbedLiveSample("Adding_keyboard_shortcuts_to_buttons", 650, 100)}}

> **メモ:** 上記の例では、ユーザーがアクセスキーが何であるかを知ることができないという問題があります。実際のサイトでは、この情報を、サイトのデザインに干渉しない方法で提供する必要があります (たとえば、簡単にアクセスできるリンクを設置して、サイトのアクセスキーに関する情報を指すなど)。

### ボタンの無効化と有効化

ボタンを無効にするには、次のように {{htmlattrxref("disabled")}} グローバル属性を指定するだけです。

```html
<input type="button" value="Disable me" disabled>
```

実行時に `disabled` に `true` または `false` を設定するだけで、ボタンを有効化したり無効化したりすることができます。この例では、ボタンは有効の状態で始まりますが、押すと `button.disabled = true` を使用して無効化されます。それから {{domxref("WindowTimers.setTimeout","setTimeout()")}} 関数を使用して、2 秒後にボタンの状態を有効の状態にリセットしています。

```html hidden
<input type="button" value="Enabled">
```

```js hidden
const button = document.querySelector('input');

button.addEventListener('click', disableButton);

function disableButton() {
  button.disabled = true;
  button.value = 'Disabled';
  window.setTimeout(function() {
    button.disabled = false;
    button.value = 'Enabled';
  }, 2000);
}
```

{{EmbedLiveSample("Hidden_code_1", 650, 60)}}

`disabled` 属性が指定されなかった場合、ボタンは `disabled` の状態を親要素から継承します。これによって、複数の要素を {{HTMLElement("fieldset")}} 要素のようなコンテナーの中に入れ、コンテナーに `disabled` を設定することで、一括で有効化したり無効化したりすることができます。

以下の例はこの操作を表しています。これは一つ前の例ととても似ていますが、最初のボタンが押されたときに `disabled` 属性が `<fieldset>` に設定され、2 秒経過するまで 3 つのボタンがすべて無効になります。

```html hidden
<fieldset>
  <legend>Button group</legend>
  <input type="button" value="Button 1">
  <input type="button" value="Button 2">
  <input type="button" value="Button 3">
</fieldset>
```

```js hidden
const button = document.querySelector('input');
const fieldset = document.querySelector('fieldset');

button.addEventListener('click', disableButton);

function disableButton() {
  fieldset.disabled = true;
  window.setTimeout(function() {
    fieldset.disabled = false;
  }, 2000);
}
```

{{EmbedLiveSample("Hidden_code_2", 650, 60)}}

> **メモ:** Firefox は他のブラウザーとは異なり、ページのロード中は既定で {{HTMLElement("button")}} に[動的な無効状態を維持](http://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing)します。この機能を制御するには {{htmlattrxref("autocomplete","button")}} 属性を使用してください。

## 検証

ボタンに対して制約検証は行われません。制約するべき値はありません。

## 例

以下の例では、 {{htmlelement("canvas")}} 要素といくらかの単純な CSS と JavaScript を使用して作成した、とても簡単なお絵かきアプリを紹介します。 (簡略化のため CSS を省略します)。上部の 2 つのコントロールで、色と描画するペンの大きさを選択できます。ボタンは、クリックすると、キャンバスを消去する関数を呼び出します。

```html
<div class="toolbar">
  <input type="color" aria-label="select pen color">
  <input type="range" min="2" max="50" value="30" aria-label="select pen size"><span class="output">30</span>
  <input type="button" value="Clear canvas">
</div>

<canvas class="myCanvas">
  <p>Add suitable fallback here.</p>
</canvas>
```

```css hidden
body {
  background: #ccc;
  margin: 0;
  overflow: hidden;
}

.toolbar {
  background: #ccc;
  width: 150px;
  height: 75px;
  padding: 5px;
}

input[type="color"], input[type="button"] {
  width: 90%;
  margin: 0 auto;
  display: block;
}

input[type="range"] {
  width: 70%;
}

span {
  position: relative;
  bottom: 5px;
}
```

```js
var canvas = document.querySelector('.myCanvas');
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight-85;
var ctx = canvas.getContext('2d');

ctx.fillStyle = 'rgb(0,0,0)';
ctx.fillRect(0,0,width,height);

var colorPicker = document.querySelector('input[type="color"]');
var sizePicker = document.querySelector('input[type="range"]');
var output = document.querySelector('.output');
var clearBtn = document.querySelector('input[type="button"]');

// 角度をラジアンに変換する
function degToRad(degrees) {
  return degrees * Math.PI / 180;
};

// 選択した大きさの値を反映

sizePicker.oninput = function() {
  output.textContent = sizePicker.value;
}

// マウスポインターと、ボタンが押されているかどうかを格納
var curX;
var curY;
var pressed = false;

// マウスポインターの座標を更新
document.onmousemove = function(e) {
  curX = (window.Event) ? e.pageX : e.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
  curY = (window.Event) ? e.pageY : e.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
}

canvas.onmousedown = function() {
  pressed = true;
};

canvas.onmouseup = function() {
  pressed = false;
}

clearBtn.onclick = function() {
  ctx.fillStyle = 'rgb(0,0,0)';
  ctx.fillRect(0,0,width,height);
}

function draw() {
  if(pressed) {
    ctx.fillStyle = colorPicker.value;
    ctx.beginPath();
    ctx.arc(curX, curY-85, sizePicker.value, degToRad(0), degToRad(360), false);
    ctx.fill();
  }

  requestAnimationFrame(draw);
}

draw();
```

{{EmbedLiveSample("Examples", '100%', 600)}}

## 仕様書

| 仕様書                                                                                                                               | 状態                             | 備考 |
| ------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ---- |
| {{SpecName('HTML WHATWG', 'forms.html#button-state-(type=button)', '&lt;input type="button"&gt;')}} | {{Spec2('HTML WHATWG')}} |      |
| {{SpecName('HTML5 W3C', 'forms.html#button-state-(type=button)', '&lt;input type="button"&gt;')}}     | {{Spec2('HTML5 W3C')}}     |      |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("input")}} およびそれに実装されている {{domxref("HTMLInputElement")}} インターフェイス。
- より新しい {{HTMLElement("button")}} 要素。
- [CSS プロパティの互換性](/ja/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
