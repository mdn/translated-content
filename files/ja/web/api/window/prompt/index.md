---
title: Window.prompt() メソッド
slug: Web/API/Window/prompt
---

{{ApiRef("Window")}}

`window.prompt()` は、ユーザーにテキストを入力するように促すダイアログをオプションのメッセージと共に表示し、ユーザーがテキストを送信するかダイアログをキャンセルするまで待機するようにブラウザーに指示します。

ある条件下では、例えば、ユーザーがタブを切り替えたとき、ブラウザーは実際にはダイアログを表示しないかもしれませんし、ユーザーがテキストを送信したり、ダイアログをキャンセルしたりするまで待たないかもしれません。

## 構文

```js-nolint
prompt()
prompt(message)
prompt(message, defaultValue)
```

### 引数

- `message` {{optional_inline}}
  - : ユーザーに表示する文字列です。プロンプトウィンドウに表示するものがない場合は省略可能です。
- `defaultValue` {{optional_inline}}
  - : テキスト入力フィールドに表示される既定値を指定する文字列です。

### 返値

ユーザーが入力したテキストを含む文字列、または `null` です。

## 例

### メッセージと初期値を指定してプロンプトダイアログを使う

以下の例では、プロンプトの返値をチェックする方法を示します。
ユーザーが OK ボタンをクリックすると、入力フィールドに入力されたテキストが返ります。ユーザーがテキストを入力せずに OK をクリックする場合、空文字列が返ります。ユーザーがキャンセルボタンをクリックする場合、この関数は `null` を返します。

```html live-sample___prompt
<button id="signButton">Check star sign</button>
<pre id="log"></pre>
```

```js live-sample___prompt
const signButton = document.querySelector("#signButton");
const log = document.querySelector("#log");

signButton.addEventListener("click", () => {
  let sign = prompt("What's your sign?");

  if (sign === null) {
    log.innerText = "OK, maybe next time.";
  } else if (sign.toLowerCase() === "") {
    log.innerText = "Don't be shy, enter your sign!";
  } else if (sign.toLowerCase() === "scorpio") {
    log.innerText = "Wow! I'm a Scorpio too!";
  } else {
    log.innerText = `${sign} is my favorite!`;
  }
});
```

{{EmbedLiveSample('prompt', , , , , , , 'allow-modals')}}

### プロンプトメッセージと初期値

プロンプトの使い方には色々なものがあります。`prompt` を使ったり、`window.prompt` を使ったり、メッセージと初期値を指定したりできます。

```js
// 空のプロンプトを表示
sign = prompt();
// 同上
sign = window.prompt();
// 「元気にしてる ?」の文字列入りで表示
sign = window.prompt("元気にしてる ?");
// 「元気にしてる ?」 の文字列入りで、入力欄の初期値に「元気だよ !」を設定して表示
sign = window.prompt("元気にしてる ?", "元気だよ !");
```

## メモ

ダイアログボックスはモーダルウィンドウです。ダイアログボックスが閉じられるまで、ユーザーはプログラムの他のインターフェイスにアクセスすることができなくなります。このため、ダイアログボックス（またはモーダルウィンドウ）を作成する関数は、使いすぎないようにしましょう。

他にもユーザー入力には {{HTMLElement("dialog")}} 要素を使用することができます。

プロンプトダイアログは、単一の行のテキストボックス、キャンセルボタン、OK ボタンを含み、ユーザーがテキストボックスに入力した（空の可能性もある）テキストを返します。

返値は文字列であることに注意してください。つまり、ユーザーから与えられた値をキャストする必要がある場合があります。例えば、答えが Number であるべきなら、その値を Number にキャストする必要があります。

```js
const number = Number(window.prompt("Type a number", ""));
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("dialog")}} 要素
- {{domxref("window.alert", "alert")}}
- {{domxref("window.confirm", "confirm")}}
- [Never Use a Warning When you Mean Undo](https://alistapart.com/article/neveruseawarning/) on A List Apart (2017)
