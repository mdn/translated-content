---
title: Window.prompt()
slug: Web/API/Window/prompt
tags:
  - API
  - HTML DOM
  - MakeBrowserAgnostic
  - メソッド
  - リファレンス
  - Window
  - prompt
browser-compat: api.Window.prompt
translation_of: Web/API/Window/prompt
---
{{ApiRef("Window")}}

`window.prompt()` は、ユーザーにテキストを入力するように促すダイアログをオプションのメッセージと共に表示し、ユーザーがテキストを送信するかダイアログをキャンセルするまで待機するようにブラウザーに指示します。

ある条件下では、例えば、ユーザーがタブを切り替えたとき、ブラウザーは実際にはダイアログを表示しないかもしれませんし、ユーザーがテキストを送信したり、ダイアログをキャンセルしたりするまで待たないかもしれません。

## 構文

```js
prompt()
prompt(message)
prompt(message, default)
```

### 引数

- `message` {{optional_inline}}
  - : ユーザーに表示する文字列。プロンプトウィンドウに表示するものがない場合は省略可能です。
- `default` {{optional_inline}}
  - : テキスト入力フィールドに表示される既定値を指定する文字列。 Internet Explorer 7 および 8 では、この引数を指定しなかった場合、文字列 `"undefined"` が既定値となることに注意してください。

### 返値

ユーザーが入力したテキストを含む文字列、または `null` です。

## 例

```js
let sign = prompt("What's your sign?");

if (sign.toLowerCase() == "scorpio") {
  alert("Wow! I'm a Scorpio too!");
}

// プロンプトの使い方には色々なものがあります。
sign = window.prompt(); // 空のプロンプトを表示
sign = prompt();       //  同上
sign = window.prompt("元気にしてる ?"); // 「元気にしてる ?」の文字列入りで表示
sign = window.prompt("元気にしてる ?", "元気だよ !"); // 「元気にしてる ?」 の文字列入りで、入力欄の初期値に「元気だよ !」を設定して表示
```

ユーザーが OK ボタンをクリックすると、入力フィールドに入力されたテキストが返ります。ユーザーがテキストを入力せずに OK をクリックする場合、空文字列が返ります。ユーザーがキャンセルボタンをクリックする場合、この関数は、 `null` を返します。

上記例のプロンプトは次のように表示されます（macOS の Chrome）。

[![prompt() dialog in Chrome on macOS](prompt.png)](prompt.png)

## メモ

プロンプトダイアログは、単一の行のテキストボックス、キャンセルボタン、OK ボタンを含み、ユーザーがテキストボックスに入力した（空の可能性もある）テキストを返します。

返値は文字列であることに注意してください。つまり、ユーザーから与えられた値をキャストする必要がある場合があります。例えば、答えが Number であるべきなら、その値を Number にキャストする必要があります。

```js
const aNumber = Number(window.prompt("Type a number", ""));
```

ダイアログボックスはモーダルウィンドウです。ダイアログボックスが閉じられるまで、ユーザーはプログラムの他のインターフェイスにアクセスすることができなくなります。このため、ダイアログボックス（またはモーダルウィンドウ）を作成する関数は、使いすぎないようにしましょう。

他にもユーザー入力には {{HTMLElement("dialog")}} 要素を使用することができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("dialog")}} 要素
- {{domxref("window.alert", "alert")}}
- {{domxref("window.confirm", "confirm")}}
