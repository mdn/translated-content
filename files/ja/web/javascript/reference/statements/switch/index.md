---
title: switch
slug: Web/JavaScript/Reference/Statements/switch
---

{{jsSidebar("Statements")}}

**`switch` 文**は[式](/ja/docs/Web/JavaScript/Guide/Expressions_and_Operators)を評価し、その式の値が `case` 節と一致した場合は、その `case` に関連付けられた[文](/ja/docs/Web/JavaScript/Reference/Statements)を実行し、一致した `case` の後にある文も同様に実行します。

{{EmbedInteractiveExample("pages/js/statement-switch.html", "taller")}}

## 構文

```
switch (expression) {
  case value1:
    // 式の結果が value1 に一致する場合に実行する文
    [break;]
  case value2:
    // 式の結果が value2 に一致する場合に実行する文
    [break;]
  ...
  case valueN:
    // 式の結果が valueN に一致する場合に実行する文
    [break;]
  [default:
    // 式の値に一致するものが存在しない場合に実行する文
    [break;]]
}
```

- `expression`
  - : 結果が各 `case` 節と一致するか調べる式。
- `case valueN` {{optional_inline}}
  - : `expression` との照合に使用される `case` 節。 `expression` が特定の `valueN` と一致する場合、 `case` 節の中の処理は、 `switch` 文の末尾または `break` のいずれかに達するまで実行されます。
- `default` {{optional_inline}}
  - : `default` 節。 `expression` の値が `case` 節のいずれとも一致しない場合、この節が実行されます。

## 解説

`switch` 文はまず始めに式を評価します。次に、式が入力式の結果と評価される値が等しい最初の `case` 節を ([厳密等価演算子](/ja/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) `===` を使用して) 探し、その節に制御を移して、関連する処理を実行します。 (複数の `case` 節の値が指定された値と一致する場合、 `case` 節が互いに等しくなくても、最初に一致した `case` 節が選択されます。)

一致する `case` 節が見つからない場合、プログラムは省略可能な `default` 節を探し、見つかればその節に制御を移し、関連する文を実行します。`default` 節が見つからない場合、プログラムは `switch` の終了に続く文で実行を続けます。慣習では、`default` 節は最後の節ですが、そうである必要はありません。

省略可能な [`break`](/ja/docs/Web/JavaScript/Reference/Statements/break) 文は、各 `case` 節のラベルに関連付けられれており、一致した文を一回実行した後で `switch` を抜け出し、 `switch` に続く文から実行を継続することを保証します。もし `break` が省略されたら、プログラムは `switch` 文の中の次の文から実行を継続します。

## 例

### `switch` の使用

次の例では、 `expr` が `Bananas` と評価された場合、プログラムは `case 'Bananas'` で値に一致し、関連付けられた文を実行します。 `break` と遭遇したとき、プログラムは `switch` から抜け出し、 `switch` に続く文を実行します。 `break` が省略された場合は、 `case 'Cherries'` に対する文も実行されます。

```js
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Apples':
    console.log('Apples are $0.32 a pound.');
    break;
  case 'Bananas':
    console.log('Bananas are $0.48 a pound.');
    break;
  case 'Cherries':
    console.log('Cherries are $3.00 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    break;
  default:
    console.log('Sorry, we are out of ' + expr + '.');
}

console.log("Is there anything else you'd like?");
```

### `break` を置かないとどうなるか

`break` を置かなかった場合、スクリプトは基準を満たす `case` から実行され、その後の `case` も条件に合うかに関係なく実行されます。

こちらの例をご覧ください。

```js
var foo = 0;
switch (foo) {
  case -1:
    console.log('negative 1');
    break;
  case 0: // foo は 0 であり、基準を満たすためでこのブロックを実行する
    console.log(0);
    // メモ: ここに break を置くのを忘れている
  case 1: // 'case 0:' に break 文がないため、この case も実行される
    console.log(1);
    break; // この break に当たるため、'case 2:' には続かない
  case 2:
    console.log(2);
    break;
  default:
    console.log('default');
}
```

### case の間に `default` を置くことはできるか

はい、できます！ 一致するものが見つからない場合、 JavaScript は `default` に戻ります。

```js
var foo = 5;
switch (foo) {
  case 2:
    console.log(2);
    break; // この break に当たれば 'default:' に継続されることはない
  default:
    console.log('default')
    // 落下
  case 1:
    console.log('1');
}
```

他のすべての `case` の前に `default` を設定した場合にも機能します。

### 複数基準の `case` の使用法

この技法の出典はこちらです:

[Switch statement multiple cases in JavaScript (Stack Overflow)](http://stackoverflow.com/questions/13207927/switch-statement-multiple-cases-in-javascript)

#### 複数の `case` とひとつの操作の対応付け

この方法は、 `case` 節の配下に `break` がない場合に、次の `case` も基準を満たすかに関係なく実行されるという事実を活用します。 ([`break` を置かないとどうなるか](What_happens_if_I_forgot_a_break)の節をご覧ください。)

これは連続した `case` 文でひとつの操作を行う例であり、4 つの異なる値でまったく同じ操作を行います。

```js
var Animal = 'Giraffe';
switch (Animal) {
  case 'Cow':
  case 'Giraffe':
  case 'Dog':
  case 'Pig':
    console.log('This animal will go on Noah\'s Ark.');
    break;
  case 'Dinosaur':
  default:
    console.log('This animal will not.');
}
```

#### 複数の `case` と一連の操作

これは一連の `case` 節と複数の操作の例であり、与えられた整数によって、異なる出力を行います。ここから実行されるのが `case` 節を置いた順であり、数値の順とは限らないことが分かります。 JavaScript では、これらの `case` 文の中に文字列の定義を混入することもできます。

```js
var foo = 1;
var output = 'Output: ';
switch (foo) {
  case 0:
    output += 'So ';
  case 1:
    output += 'What ';
    output += 'Is ';
  case 2:
    output += 'Your ';
  case 3:
    output += 'Name';
  case 4:
    output += '?';
    console.log(output);
    break;
  case 5:
    output += '!';
    console.log(output);
    break;
  default:
    console.log('Please pick a number from 0 to 5!');
}
```

この例の出力は以下のとおりです:

| 値                                                                      | 出力するテキスト                  |
| ----------------------------------------------------------------------- | --------------------------------- |
| `foo` が `NaN` であるか、 `1`, `2`, `3`, `4`, `5`, `0` のいずれでもない | Please pick a number from 0 to 5! |
| `0`                                                                     | Output: So What Is Your Name?     |
| `1`                                                                     | Output: What Is Your Name?        |
| `2`                                                                     | Output: Your Name?                |
| `3`                                                                     | Output: Name?                     |
| `4`                                                                     | Output: ?                         |
| `5`                                                                     | Output: !                         |

### `switch` 文の中のブロックスコープの変数

ECMAScript 2015 (ES6) に対応している最近のブラウザーでは、 {{jsxref("Statements/let", "let")}} および {{jsxref("Statements/const", "const")}} 文を使用してブロックスコープを持つ変数を宣言したい場合があるでしょう。

この例を見てみてください。

```js
const action = 'say_hello';
switch (action) {
  case 'say_hello':
    let message = 'hello';
    console.log(message);
    break;
  case 'say_hi':
    let message = 'hi';
    console.log(message);
    break;
  default:
    console.log('Empty action received.');
    break;
}
```

この例では、おそらく予想していなかった `Uncaught SyntaxError: Identifier 'message' has already been declared` エラーを出力します。

これは、最初の `let message = 'hello';` と次の let 文 `let message = 'hi';` が競合しているためで、それぞれ別々な case 節である `case 'say_hello':` と `case 'say_hi':` に含まれていても発生します。つまるところ、これは両方の `let` 文が同じブロックスコープ内で同じ変数名の宣言を重複して行ったと解釈されます。

これは、 `case` 節を中括弧で囲むことで簡単に修正することができます。

```js
const action = 'say_hello';
switch (action) {
  case 'say_hello': { // 中括弧を追加
    let message = 'hello';
    console.log(message);
    break;
  } // 中括弧を追加
  case 'say_hi': { // 中括弧を追加
    let message = 'hi';
    console.log(message);
    break;
  } // 中括弧を追加
  default: { // 中括弧を追加
    console.log('Empty action received.');
    break;
  } // 中括弧を追加
}
```

このコードは仕様通り `hello` をコンソールに出力し、エラーは全く発生しません。

## 仕様書

| 仕様書                                                                                       |
| -------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-switch-statement', 'switch statement')}} |

## ブラウザーの互換性

{{Compat("javascript.statements.switch")}}

## 関連情報

- {{jsxref("Statements/if...else", "if...else")}}
