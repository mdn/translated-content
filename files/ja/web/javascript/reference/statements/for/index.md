---
title: for
slug: Web/JavaScript/Reference/Statements/for
---

{{jsSidebar("Statements")}}

**for 文**は、括弧で囲みセミコロンで区切った 3 つの引数と、続いてループ内で実行される文 (ふつうは[ブロック文](/ja/docs/Web/JavaScript/Reference/Statements/block)) から成るループを構成します。

{{EmbedInteractiveExample("pages/js/statement-for.html")}}

## 構文

```
for ([initialization]; [condition]; [final-expression])
   statement
```

- `initialization`

  - :ループが始まる前に一度だけ評価される (代入式を含む) 式または変数宣言。ふつうはカウンター変数を初期化するために使われます。この式では任意で、 `var` キーワードを用いて新しい変数を宣言することもできます。 `var` で宣言された変数はループ内のローカル変数にはなりません。すなわち、 `for` ループが属するスコープと同じスコープになります。 `let` で宣言された変数は文内のローカル変数になります。

   この式の結果は捨て去られます。
- `condition`

  - :ループのそれぞれの反復処理が行われる前に評価される式です。この式が true と評価された場合は、 `statement` が実行されます。この条件テストは省略可能です。省略された場合は、条件は常に true に評価されます。もしこの式が false と評価された場合は、実行は `for` 構造に続く最初の式に飛びます。
- `final-expression`

  - :ループのそれぞれの反復処理の最後に評価される式です。これは、次の `condition` の評価前に行われます。一般的には、カウンター変数を更新または増加するために使われます。
- `statement`

  - :条件が true と評価された場合に限り実行される文です。ループ内で複数の文を実行するには、{{jsxref("Statements/block", "ブロック", "", 0)}}文 (`{ ... }`) を使用して文をグループ化してください。ループ内で文を実行しないようにするには、{{jsxref("Statements/empty", "空文", "", 0)}} (`;`) を使用してください。

## 例

### for の使用

次の `for` 文は、変数 `i` を宣言し、それを `0` に初期化することから始まります。`i` が 9 より小さいことをチェックし、続く 2 つの文を実行し、ループを通過した後ごとに `i` を 1 増加します。

```js
for (let i = 0; i < 9; i++) {
   console.log(i);
   // その他の文
}
```

### 省略可能な for の式

`for` ループの先頭にある 3 つの式は、省略可能です。

例えば、 `initialization` ブロックで変数を初期化する必要はありません。

```js
var i = 0;
for (; i < 9; i++) {
    console.log(i);
    // その他の文
}
```

`initialization` ブロックと同様に、 `condition` ブロックも省略可能です。この式を省略した場合は、本体の中でループを脱出できるようにして、無限ループにならないようにしなければなりません。

```js
for (let i = 0;; i++) {
   console.log(i);
   if (i > 3) break;
   // その他の文
}
```

3 つのブロックをすべて省略することもできます。繰り返しますが、 {{jsxref("Statements/break", "break")}} 文を使用してループを終了させ、また break 文の条件がある時点で true になるように、変数を変更 (増加) させていることを確認してください。

```js
var i = 0;

for (;;) {
  if (i > 3) break;
  console.log(i);
  i++;
}
```

### 文を持たない for の使用

以下の `for` の繰り返しでは、 `final-expression` 句の中でにおけるノードのオフセット位置を検索しています。 `statement` 節を使用する必要がない場合は、代わりにセミコロンを使用してください。

```js
function showOffsetPos(sId) {

  var nLeft = 0, nTop = 0;

  for (

    var oItNode = document.getElementById(sId); /* initialization */

    oItNode; /* condition */

    nLeft += oItNode.offsetLeft, nTop += oItNode.offsetTop, oItNode = oItNode.offsetParent /* final-expression */

  ); /* semicolon */

  console.log('Offset position of \'' + sId + '\' element:\n left: ' + nLeft + 'px;\n top: ' + nTop + 'px;');

}

/* 呼び出しの例 */

showOffsetPos('content');

// Output:
// "Offset position of "content" element:
// left: 0px;
// top: 153px;"
```

> **メモ:** これは、**セミコロンが必須**となる JavaScript の数少ないケースの 1 つです。セミコロンがないと、繰り返し宣言の次の行が繰り返す文と見なされます。

## 仕様書

| 仕様書                                                                               |
| ------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-for-statement', 'for statement')}} |

## ブラウザーの互換性

{{Compat("javascript.statements.for")}}

## 関連情報

- {{jsxref("Statements/empty", "空文", "", 0)}}
- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/continue", "continue")}}
- {{jsxref("Statements/while", "while")}}
- {{jsxref("Statements/do...while", "do...while")}}
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Statements/for...of", "for...of")}}
