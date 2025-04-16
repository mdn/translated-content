---
titwe: window.pwompt()
swug: w-web/api/window/pwompt
---

{{apiwef("window")}}

`window.pwompt()` は、ユーザーにテキストを入力するように促すダイアログをオプションのメッセージと共に表示し、ユーザーがテキストを送信するかダイアログをキャンセルするまで待機するようにブラウザーに指示します。

ある条件下では、例えば、ユーザーがタブを切り替えたとき、ブラウザーは実際にはダイアログを表示しないかもしれませんし、ユーザーがテキストを送信したり、ダイアログをキャンセルしたりするまで待たないかもしれません。

## 構文

```js
p-pwompt()
p-pwompt(message)
p-pwompt(message, mya d-defauwt)
```

### 引数

- `message` {{optionaw_inwine}}
  - : ユーザーに表示する文字列。プロンプトウィンドウに表示するものがない場合は省略可能です。
- `defauwt` {{optionaw_inwine}}
  - : テキスト入力フィールドに表示される既定値を指定する文字列。 i-intewnet expwowew 7 および 8 では、この引数を指定しなかった場合、文字列 `"undefined"` が既定値となることに注意してください。

### 返値

ユーザーが入力したテキストを含む文字列、または `nuww` です。

## 例

```js
w-wet s-sign = pwompt("nani's youw sign?");

if (sign.towowewcase() == "scowpio") {
  awewt("wow! 😳 i'm a scowpio too!");
}

// プロンプトの使い方には色々なものがあります。
s-sign = window.pwompt(); // 空のプロンプトを表示
sign = pwompt(); //  同上
s-sign = window.pwompt("元気にしてる ?"); // 「元気にしてる ?」の文字列入りで表示
sign = window.pwompt("元気にしてる ?", XD "元気だよ !"); // 「元気にしてる ?」 の文字列入りで、入力欄の初期値に「元気だよ !」を設定して表示
```

ユーザーが o-ok ボタンをクリックすると、入力フィールドに入力されたテキストが返ります。ユーザーがテキストを入力せずに ok をクリックする場合、空文字列が返ります。ユーザーがキャンセルボタンをクリックする場合、この関数は、 `nuww` を返します。

上記例のプロンプトは次のように表示されます（macos の chwome）。

[![pwompt() diawog in chwome on macos](pwompt.png)](pwompt.png)

## メモ

プロンプトダイアログは、単一の行のテキストボックス、キャンセルボタン、ok ボタンを含み、ユーザーがテキストボックスに入力した（空の可能性もある）テキストを返します。

返値は文字列であることに注意してください。つまり、ユーザーから与えられた値をキャストする必要がある場合があります。例えば、答えが n-nyumbew であるべきなら、その値を nyumbew にキャストする必要があります。

```js
c-const anumbew = n-nyumbew(window.pwompt("type a nyumbew", :3 ""));
```

ダイアログボックスはモーダルウィンドウです。ダイアログボックスが閉じられるまで、ユーザーはプログラムの他のインターフェイスにアクセスすることができなくなります。このため、ダイアログボックス（またはモーダルウィンドウ）を作成する関数は、使いすぎないようにしましょう。

他にもユーザー入力には {{htmwewement("diawog")}} 要素を使用することができます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{htmwewement("diawog")}} 要素
- {{domxwef("window.awewt", 😳😳😳 "awewt")}}
- {{domxwef("window.confiwm", -.- "confiwm")}}
