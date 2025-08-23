---
title: <input type="button">
slug: Web/HTML/Reference/Elements/input/button
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

{{HTMLElement("input")}} 要素の **`button`** 型は、プッシュボタンとして描画され、イベントハンドラー関数 (ふつうは {{domxref("Element/click_event", "click")}} イベント) を割り当てることで、ウェブページのあらゆる場所でカスタム機能を制御するようにプログラムすることができます。

{{InteractiveExample("HTML デモ: &lt;input type=&quot;button&quot;&gt;", "tabbed-shorter")}}

```html interactive-example
<input class="styled" type="button" value="Add to favorites" />
```

```css interactive-example
.styled {
  border: 0;
  line-height: 2.5;
  padding: 0 20px;
  font-size: 1rem;
  text-align: center;
  color: #fff;
  text-shadow: 1px 1px 1px #000;
  border-radius: 10px;
  background-color: rgb(220 0 0 / 100%);
  background-image: linear-gradient(
    to top left,
    rgb(0 0 0 / 20%),
    rgb(0 0 0 / 20%) 30%,
    rgb(0 0 0 / 0%)
  );
  box-shadow:
    inset 2px 2px 3px rgb(255 255 255 / 60%),
    inset -2px -2px 3px rgb(0 0 0 / 60%);
}

.styled:hover {
  background-color: rgb(255 0 0 / 100%);
}

.styled:active {
  box-shadow:
    inset -2px -2px 3px rgb(255 255 255 / 60%),
    inset 2px 2px 3px rgb(0 0 0 / 60%);
}
```

> [!NOTE]
> `<input>` 要素の `button` 型は完全に妥当な HTML ですが、より新しい {{HTMLElement("button")}} 要素が、ボタンの作成にはより好まれるようになりました。 {{HTMLElement("button")}} のラベル文字列は開始タグと終了タグの間に挿入され、ラベルに画像を含む HTML を含めることができます。

## 値

### value ありのボタン

`<input type="button">` 要素の [`value`](/ja/docs/Web/HTML/Reference/Elements/input#value) 属性には、ボタンのラベルとして使われる文字列を設定します。 `value` はボタンの{{glossary("Accessible description", "アクセシブル説明")}}を指定します。

```html
<input type="button" value="クリックしてね" />
```

{{EmbedLiveSample("Button_with_a_value", 650, 30)}}

### value なしのボタン

`value` を指定しなかった場合は、無印のボタンになります。

```html
<input type="button" />
```

{{EmbedLiveSample("Button_without_a_value", 650, 30)}}

## ボタンの使用

`<input type="button">` 要素には既定の動作がありません（親戚である `<input type="submit">` や [`<input type="reset">`](/ja/docs/Web/HTML/Reference/Elements/input/reset) は、それぞれフォームの送信とリセットに使用されます）。ボタンに何かをさせる場合は、処理を行うための JavaScript コードを書く必要があります。

### 基本的なボタン

基本的なボタンに {{domxref("Element/click_event", "click")}} イベントハンドラーを設定し、マシンを起動させましょう（つまり、ボタンの `value` と続く段落の文字列コンテンツを切り替えます）。

```html
<form>
  <input type="button" value="マシンを起動" />
</form>
<p>マシンが停止しています。</p>
```

```js
const button = document.querySelector("input");
const paragraph = document.querySelector("p");

button.addEventListener("click", updateButton);

function updateButton() {
  if (button.value === "マシンを起動") {
    button.value = "マシンを停止";
    paragraph.textContent = "マシンが起動しています！";
  } else {
    button.value = "マシンを起動";
    paragraph.textContent = "マシンが停止しています。";
  }
}
```

このスクリプトは DOM で `<input>` を表す {{domxref("HTMLInputElement")}} オブジェクトの参照を受け取り、この参照を変数 `button` に保存します。{{domxref("EventTarget.addEventListener", "addEventListener()")}} は、ボタンに {{domxref("Element/click_event", "click")}} イベントが発生したときに実行される関数を設定します。

{{EmbedLiveSample("A_basic_button", 650, 100)}}

### ボタンへのショートカットキーの追加

ショートカットキーは、アクセスキーやキーボードショートカットとも呼ばれますが、ユーザーがキーボード上のキーまたはキーの組み合わせを使用してボタンを操作できるものです。ボタンにショートカットキーを追加するには、どの {{HTMLElement("input")}} でも同じですが、 [`accesskey`](/ja/docs/Web/HTML/Reference/Global_attributes/accesskey) グローバル属性を使用します。

この例では、 <kbd>s</kbd> がアクセスキーとして指定されています (ブラウザーと OS の組み合わせによっては、 <kbd>s</kbd> と特定の修飾キーの組み合わせが必要です。その一覧については [accesskey](/ja/docs/Web/HTML/Reference/Global_attributes/accesskey) を参照してください)。

```html
<form>
  <input type="button" value="マシンを起動" accesskey="s" />
</form>
<p>マシンが停止しています。</p>
```

```js hidden
const button = document.querySelector("input");
const paragraph = document.querySelector("p");

button.addEventListener("click", updateButton);

function updateButton() {
  if (button.value === "マシンを起動") {
    button.value = "マシンを停止";
    paragraph.textContent = "マシンが起動しています！";
  } else {
    button.value = "マシンを起動";
    paragraph.textContent = "マシンが停止しています。";
  }
}
```

{{EmbedLiveSample("Adding_keyboard_shortcuts_to_buttons", 650, 100)}}

> [!NOTE]
> 上記の例では、ユーザーがアクセスキーが何であるかを知ることができないという問題があります。実際のサイトでは、この情報を、サイトのデザインに干渉しない方法で提供する必要があります (たとえば、簡単にアクセスできるリンクを設置して、サイトのアクセスキーに関する情報を指すなど)。

### ボタンの無効化と有効化

ボタンを無効にするには、次のように [`disabled`](/ja/docs/Web/HTML/Reference/Attributes/disabled) グローバル属性を指定するだけです。

```html
<input type="button" value="Disable me" disabled />
```

#### disabled 属性の設定

実行時に `disabled` に `true` または `false` を設定するだけで、ボタンを有効化したり無効化したりすることができます。この例では、ボタンは有効の状態で始まりますが、押すと `button.disabled = true` を使用して無効化されます。それから {{domxref("Window.setTimeout", "setTimeout()")}} 関数を使用して、2 秒後にボタンの状態を有効の状態にリセットしています。

```html
<input type="button" value="Enabled" />
```

```js
const button = document.querySelector("input");

button.addEventListener("click", disableButton);

function disableButton() {
  button.disabled = true;
  button.value = "Disabled";
  setTimeout(() => {
    button.disabled = false;
    button.value = "Enabled";
  }, 2000);
}
```

{{EmbedLiveSample("Setting_the_disabled_attribute", 650, 60)}}

#### disabled 状態の継承

`disabled` 属性が指定されなかった場合、ボタンは `disabled` の状態を親要素から継承します。これによって、複数の要素を {{HTMLElement("fieldset")}} 要素のようなコンテナーの中に入れ、コンテナーに `disabled` を設定することで、一括で有効化したり無効化したりすることができます。

以下の例はこの操作を表しています。これは一つ前の例ととても似ていますが、最初のボタンが押されたときに `disabled` 属性が `<fieldset>` に設定され、2 秒経過するまで 3 つのボタンがすべて無効になります。

```html
<fieldset>
  <legend>Button group</legend>
  <input type="button" value="Button 1" />
  <input type="button" value="Button 2" />
  <input type="button" value="Button 3" />
</fieldset>
```

```js
const button = document.querySelector("input");
const fieldset = document.querySelector("fieldset");

button.addEventListener("click", disableButton);

function disableButton() {
  fieldset.disabled = true;
  setTimeout(() => {
    fieldset.disabled = false;
  }, 2000);
}
```

{{EmbedLiveSample("Inheriting_the_disabled_state", 650, 100)}}

> [!NOTE]
> Firefox は他のブラウザーと異なり、ページが再読み込みされた後でも `<input>` 要素の `disabled` 状態を維持します。回避するには、 `<input>` 要素の [`autocomplete`](/ja/docs/Web/HTML/Reference/Elements/input#autocomplete) 属性を `off` に設定します。（詳しくは [Firefox バグ 654072](https://bugzil.la/654072) を参照してください。）

## 検証

ボタンに対して制約検証は行われません。制約すべき値はありません。

## 例

以下の例では、 {{htmlelement("canvas")}} 要素といくらかの CSS と JavaScript を使用して作成した、とても基本的なお絵かきアプリを紹介します。 (簡略化のため CSS を省略します)。上部の 2 つのコントロールで、色と描画するペンの大きさを選択できます。ボタンは、クリックすると、キャンバスを消去する関数を呼び出します。

```html
<div class="toolbar">
  <input type="color" aria-label="select pen color" />
  <input
    type="range"
    min="2"
    max="50"
    value="30"
    aria-label="select pen size" /><span class="output">30</span>
  <input type="button" value="Clear canvas" />
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

input[type="color"],
input[type="button"] {
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
const canvas = document.querySelector(".myCanvas");
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight - 85);
const ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(0 0 0)";
ctx.fillRect(0, 0, width, height);

const colorPicker = document.querySelector('input[type="color"]');
const sizePicker = document.querySelector('input[type="range"]');
const output = document.querySelector(".output");
const clearBtn = document.querySelector('input[type="button"]');

// 角度をラジアンに変換する
function degToRad(degrees) {
  return (degrees * Math.PI) / 180;
}

// 選択した大きさの値を反映

sizePicker.oninput = () => {
  output.textContent = sizePicker.value;
};

// マウスポインターと、ボタンが押されているかどうかを格納
let curX;
let curY;
let pressed = false;

// マウスポインターの座標を更新
document.onmousemove = (e) => {
  curX = e.pageX;
  curY = e.pageY;
};

canvas.onmousedown = () => {
  pressed = true;
};

canvas.onmouseup = () => {
  pressed = false;
};

clearBtn.onclick = () => {
  ctx.fillStyle = "rgb(0 0 0)";
  ctx.fillRect(0, 0, width, height);
};

function draw() {
  if (pressed) {
    ctx.fillStyle = colorPicker.value;
    ctx.beginPath();
    ctx.arc(
      curX,
      curY - 85,
      sizePicker.value,
      degToRad(0),
      degToRad(360),
      false,
    );
    ctx.fill();
  }

  requestAnimationFrame(draw);
}

draw();
```

{{EmbedLiveSample("Examples", '100%', 600)}}

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">値</a></strong></td>
      <td>ボタンのラベルとして使われる文字列</td>
    </tr>
    <tr>
      <td><strong>イベント</strong></td>
      <td>{{domxref("Element/click_event", "click")}}</td>
    </tr>
    <tr>
      <td><strong>対応している共通属性</strong></td>
      <td>
        <a href="/ja/docs/Web/HTML/Reference/Elements/input#type"><code>type</code></a> および
        <a href="/ja/docs/Web/HTML/Reference/Elements/input#value"><code>value</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL 属性</strong></td>
      <td><code>value</code></td>
    </tr>
    <tr>
      <td><strong>DOM インターフェイス</strong></td>
      <td><p>{{domxref("HTMLInputElement")}}</p></td>
    </tr>
    <tr>
      <td><strong>メソッド</strong></td>
      <td>なし</td>
    </tr>
    <tr>
      <td><strong>暗黙の ARIA ロール</strong></td>
      <td><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/button_role"><code>button</code></a></td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("input")}} およびそれに実装されている {{domxref("HTMLInputElement")}} インターフェイス。
- より新しい {{HTMLElement("button")}} 要素。
