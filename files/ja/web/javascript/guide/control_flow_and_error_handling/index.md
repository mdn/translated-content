---
title: 制御フローとエラー処理
slug: Web/JavaScript/Guide/Control_flow_and_error_handling
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Grammar_and_types", "Web/JavaScript/Guide/Loops_and_iteration")}}

JavaScript は、特に制御フロー文についてはコンパクトな文のセットに対応しており、アプリケーションに多様な対話的機能を組み込むために利用することができます。この節ではこれらの文の概要を説明します。

[JavaScript リファレンス](/ja/docs/Web/JavaScript/Reference/Statements)には、この章で紹介する文についての完全な詳細が載っています。また、JavaScript のコードではセミコロン (`;`) 文字で文を区切ります。

あらゆる JavaScript の式は、文でもあります。式に関する詳細については[式と演算子](/ja/docs/Web/JavaScript/Guide/Expressions_and_Operators)を参照ください。

## ブロック文

最も基本的な文は*ブロック文*で、文のグループ化に使います。ブロックは、一組の波括弧で区切られます。

```
{
  statement_1;
  statement_2;
  ⋮
  statement_n;
}
```

### 例

ブロック文は一般に制御フロー文 (`if`, `for`, `while`) で用いられます。

```js
while (x < 10) {
  x++;
}
```

ここでは `{ x++; }` がブロック文となります。

> **メモ:** ECMAScript 2015 (6th edition) より前の JavaScript にはブロックスコープが**ありません**。古い JavaScript では、ブロック内で導入された変数のスコープは、そのブロックがある関数やスクリプトになり、それらの変数を設定した影響は、そのブロックを越えて持続します。つまり、*ブロック文はスコープを定義しない*ということです。
>
> 「単独の」ブロックも正しい構文ですが、C や Java のブロックで提供されるものとは異なる結果をもたらします。例えば、
>
> ```js
> var x = 1;
> {
>   var x = 2;
> }
> console.log(x); // 2 を出力
> ```
>
> ここで `2` が出力されるのは、ブロック内の `var x` 文がブロックの前の `var x` 文と同じスコープ内にあるためです。(C や Java では、同様のコードで `1` が出力されます。)
>
> **ECMAScript 2015 から**は、`let` 文や `const` による変数宣言はブロックスコープとなります。詳しくは {{jsxref("Statements/let", "let")}} 文や {{jsxref("Statements/const", "const")}} のリファレンスページをご覧ください。

## 条件文

条件文は、指定した条件が true の場合に実行する命令の集まりです。JavaScript は `if...else` と `switch` の 2 つの条件文に対応しています。

### `if...else` 文

`if` を使用すると、論理条件が `true` の場合に文を実行することができます。任意の `else` 節を使用すると、条件が `false` の場合にも文を実行することができます。

`if` 文は次のように使用します。

```
if (condition) {
  statement_1;
} else {
  statement_2;
}
```

条件は、`true` または `false` と評価される任意の式にすることができます。（`true` と `false` の評価の説明については、[Boolean](/ja/docs/Web/JavaScript/Reference/Global_Objects/Boolean#Description) を参照してください。）

条件が `true` と評価された場合、`statement_1` が実行されます。そうでなければ、`statement_2` が実行されます。`statement_1` と `statement_2` は、入れ子になった `if` 文も含めて、任意の文にすることができます。

以下のように、`else if` を使用した文を組み合わせて、複数の条件を順番にテストすることもできます。

```
if (condition_1) {
  statement_1;
} else if (condition_2) {
  statement_2;
} else if (condition_n) {
  statement_n;
} else {
  statement_last;
}
```

複数の条件がある場合、`true` と評価された最初の論理条件のみが実行されます。複数の文を実行するには、ブロックステートメント (`{ … }`) 内にグループ化します。

#### ベストプラクティス

一般的に、常にブロック文を使用するのが優れた方法です。_特に_ `if` 文を入れ子にしたコードで有効です。

```
if (condition) {
  statement_1_runs_if_condition_is_true;
  statement_2_runs_if_condition_is_true;
} else {
  statement_3_runs_if_condition_is_false;
  statement_4_runs_if_condition_is_false;
}
```

条件式内で単純な代入を行わないでください。コードを一見した際に、代入を等値条件と見間違えるおそれがあるためです。

例えば、このようにはコードを*書かない*でください。

```js-nolint example-bad
// "x == y" と読み間違えるおそれがある。
if (x = y) {
  /* ここに文が来る */
}
```

条件式で代入を行う必要がある場合、一般的な方法は次のように、代入式をさらに丸括弧でくくることです。

```js example-good
if ((x = y)) {
  /* ここに文が来る */
}
```

#### false と評価される値

以下の値は `false` と評価されます (また、{{Glossary("Falsy")}} な値と呼ばれています)。

- `false`
- `undefined`
- `null`
- `0`
- `NaN`
- 空の文字列 (`""`)

上記以外の—オブジェクトを含む—すべての値は、条件文に渡されると `true` と評価されます。

> **メモ:** プリミティブな真偽値の `true` と `false` を、{{jsxref("Boolean")}} オブジェクトの true や false という値と混同しないでください。
>
> 例:
>
> ```js
> var b = new Boolean(false);
> if (b)         // この条件は true に評価される
> if (b == true) // この条件は false に評価される
> ```

#### 例

次の例で、関数 `checkData` は `Text` オブジェクトに含まれている文字数が 3 である場合に `true` を返し、そうでない場合はアラートを表示して `false` を返します。

```js
function checkData() {
  if (document.form1.threeChar.value.length == 3) {
    return true;
  } else {
    alert(
      "Enter exactly three characters. " +
        `${document.form1.threeChar.value} is not valid.`,
    );
    return false;
  }
}
```

### `switch` 文

`switch` 文を使うと、プログラムは式を評価し、その式の値を `case` ラベルと照合します。一致すると、プログラムはそのラベルに関連付けられた文を実行します。

`switch` 文は次のようになります。

```
switch (expression) {
  case label_1:
    statements_1
    [break;]
  case label_2:
    statements_2
    [break;]
    …
  default:
    statements_def
    [break;]
}
```

JavaScript は上記の switch 文を次のように評価します。

- プログラムは最初に、式の値に一致するラベルを持つ `case` 節を探し、関連付けられた文を実行します。
- 一致するラベルがない場合、プログラムはオプションの `default` 節を探します。

  - 存在する場合は `default` 節に制御を移し、関連付けられた文を実行します。
  - `default` 節が見つからない場合、プログラムは `switch` 文の末尾の後に続く文から実行を再開します。
  - (慣例により、`default` 節は最後の節に置きますが、そうしなければいけないわけではありません。)

#### break 文

オプションの `break` 文は、それぞれの `case` 節と関連付けられ、該当する文が実行されるとプログラムが `switch` から抜け出し、`switch` の次の文から実行が継続されることを保証します。`break` が省略されると、プログラムは `switch` 文の内部の実行を続けます (そして、次の `case` を順番に評価します)。

#### 例

次の例では、`fruittype` が '`Bananas`' と評価された場合、case '`Bananas`' に一致して、それに関連付けら cv れた文を実行します。`break` 文に出くわすとプログラムは `switch` から抜けて、`switch` の後に続く文を実行します。`break` を省略すると、`case 'Cherries'` の文も実行されます。

```js
switch (fruittype) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Apples":
    console.log("Apples are $0.32 a pound.");
    break;
  case "Bananas":
    console.log("Bananas are $0.48 a pound.");
    break;
  case "Cherries":
    console.log("Cherries are $3.00 a pound.");
    break;
  case "Mangoes":
    console.log("Mangoes are $0.56 a pound.");
    break;
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    break;
  default:
    console.log(`Sorry, we are out of ${fruittype}.`);
}
console.log("Is there anything else you'd like?");
```

## 例外処理文

`throw` 文を使用して例外を発生させ、`try...catch` 文を使用して例外を処理することができます。

- [`throw` 文](#throw_statement)
- [`try...catch` 文](#try...catch_statement)

### 例外の型

JavaScript では、ほぼどのようなオブジェクトでも例外として投げることができます。とはいえ、必ずしも投げられるオブジェクトすべてが同等に作られているわけではありません。数値や文字列をエラーとして投げる方法がよく用いられますが、こうした用途のために特別に作られた例外データ型を使用した方がより効率的な場合もあります。

- [ECMAScript 例外](/ja/docs/Web/JavaScript/Reference/Global_Objects#Fundamental_objects)
- {{domxref("DOMException")}} と {{domxref("DOMError")}}

### `throw` 文

`throw` 文は、例外を投げるために使用します。例外を投げるには、投げたい値を含む式を指定してください。

```
throw expression;
```

特定の型の式だけではなく、あらゆる式を投げることができます。下記のコードでは、さまざまな型の例外を投げています。

```js
throw "Error2"; // 文字列型
throw 42; // 数値型
throw true; // 論理型
throw {
  toString: function () {
    return "これはオブジェクトです！";
  },
};
```

> **メモ:** 例外を投げる際にオブジェクトを指定することができます。そして、`catch` ブロックでそのオブジェクトのプロパティを参照することができます。

```js
// UserException というオブジェクト型を作成
function UserException(message) {
  this.message = message;
  this.name = "UserException";
}

// 文字列として使用されるとき（例 : エラーコンソール上）に
// 例外を整形する
UserException.prototype.toString = function () {
  return `${this.name}: "${this.message}"`;
};

// UserException のインスタンスを作成し、それを投げる
throw new UserException("Value too high");
```

### `try...catch` 文

`try...catch` 文はテストしたい文のブロックを指定し、さらに投げられる例外に対する 1 つ以上の対処方法を指定します。例外が投げられると、`try...catch` 文がそれを受け取ります。

`try...catch` 文は 1 つの `try` ブロックと 0 個以上の `catch` ブロックで構成されます。`try` ブロックは 1 つ以上の文を含み、`catch` ブロックは `try` ブロックで例外が投げられた場合の処理を指定する文が含まれます。

要するに、成功した場合に実行したい `try` ブロックと、失敗した場合に制御を移行させたい `catch` ブロックで構成されています。`try` ブロック内（もしくは `try` ブロック内から呼び出された関数内）のいずれかの文が例外を投げると、制御は*すぐに* `catch` ブロックに移ります。`try` ブロックで例外が投げられなかった場合、`catch` ブロックはスキップされます。`finally` ブロックは `try` および `catch` ブロックを実行した後に実行しますが、`try...catch` 文の後に続く文より先に実行されます。

次の例では `try...catch` 文を使用しています。この例では渡された値に基づいて、配列から月の名前を取り出す関数を実行します。値に対応する月の数字 (`1`–`12`) が無い場合は `"InvalidMonthNo"` という値を持つ例外が投げられ、`catch` ブロックの中の文は `monthName` という変数に `'unknown'` という値をセットします。

```js
function getMonthName(mo) {
  mo = mo - 1; // 月の数字を配列のインデックスに合わせる (1 = Jan, 12 = Dec)
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  if (months[mo]) {
    return months[mo];
  } else {
    throw "InvalidMonthNo"; // throw キーワードが使われている
  }
}

try {
  // 実行を試みる文
  monthName = getMonthName(myMonth); // この関数が例外を投げる場合がある
} catch (e) {
  monthName = "unknown";
  logMyErrors(e); // 例外オブジェクトをエラーハンドラーに渡す
}
```

#### `catch` ブロック

`catch` ブロックを用いることで、`try` ブロックで生じうるすべての例外を扱うことができます。

```
catch (catchID) {
  statements
}
```

`catch` ブロックには、`throw` 文で指定される値を保持しておく識別子 (上記の構文における `catchID`) を指定します。投げられた例外についての情報を得るのに、この識別子を使います。

JavaScript は `catch` ブロックに入るときにこの識別子を作成します。識別子は `catch` ブロックの区間だけ存続します。つまり、`catch` ブロックの実行が終わると、その識別子はもう使えなくなります。

例えば、次のコードは例外を投げます。例外が生じると、制御が `catch` ブロックに移ります。

```js
try {
  throw "myException"; // 例外を生成
} catch (err) {
  // ここには例外を扱う文が入る
  logMyErrors(err); // 例外オブジェクトをエラーハンドラに渡す
}
```

> **メモ:** **ベストプラクティス:** `catch` ブロック内でコンソールにエラーをログ出力する場合は、`console.log()` よりも `console.error()` がデバッグ目的では推奨されています。これはメッセージをエラーとして書式化し、ページによって生成されたエラーメッセージの一覧に追加します。

#### `finally` ブロック

`finally` ブロックは、`try` および `catch` ブロックの実行*後*に実行される文が入ります。また、`finally` ブロックの中のコードは `try…catch…finally` に続く分が実行される*前*に実行されます。

また、`finally` ブロックは例外が発生する*かどうかにかかわらず*実行されるということに注意することも大切です。また、例外が発生したら、`finally` ブロック内の文は発生した例外が `catch` ブロックで処理されなくても実行されます。

`finally` ブロックを使用することで、例外発生時に適切にスクリプトを停止させることができます。例えば、スクリプトで使用していたリソースを解放しなければならない場合などです。

次の例ではファイルを開き、そのファイルを使用する文を実行します (サーバー側 JavaScript ではファイルにアクセスできます)。ファイルを開いている間に発生すると、スクリプトが停止する前に `finally` ブロックでそのファイルを閉じます。ここで `finally` を使用することで、エラーが発生した場合であってもファイルが開かれたままにならないことを*保証*します。

```js
openMyFile();
try {
  writeMyFile(theData); // ここでエラーが投げられる可能性がある
} catch (e) {
  handleError(e); // エラーを受け取り、それを処理する
} finally {
  closeMyFile(); // 常にリソースが閉じられる
}
```

`finally` ブロックが値を返す場合、その値は `try` および `catch` ブロックの `return` 文にかかわらず `try…catch…finally` 全体が生成する返値になります。

```js
function f() {
  try {
    console.log(0);
    throw "bogus";
  } catch (e) {
    console.log(1);
    return true; // この返値は、finally ブロックが
    // 完了するまで保留となる
    console.log(2); // ここまで到達しない
  } finally {
    console.log(3);
    return false; // 直前の "return" が上書きされる
    console.log(4); // ここまで到達しない
  }
  // ここで "return false" が実行される
  console.log(5); // ここまで到達しない
}
console.log(f()); // 0, 1, 3, false
```

`finally` ブロックによる返値の上書きは、`catch` ブロック内で発生した、または再発生した例外にも適用されます。

```js
function f() {
  try {
    throw "bogus";
  } catch (e) {
    console.log('caught inner "bogus"');
    throw e; // この throw 文は finally ブロックが
    // 完了するまで保留になる
  } finally {
    return false; // 直前の "throw" が上書きされる
  }
  // ここで "return false" が実行される
}

try {
  console.log(f());
} catch (e) {
  // ここには到達しない
  // f() を実行した際、`finally` ブロックが false を返し、
  // 上記の `catch` の中にある `throw` を上書する
  console.log('caught outer "bogus"');
}

// OUTPUT
// caught inner "bogus"
// false
```

#### try...catch 文の入れ子

1 つ以上の `try...catch` 文を入れ子にすることができます。

内側の `try...catch` 文に `catch` ブロックが*ない*場合は次のようになります。

1. `finally` ブロックを含む必要があります。そして、
2. 囲んでいる `try...catch` 文の `catch` ブロックがエラーの照合先としてチェックされます。

詳しくは、[`try...catch`](/ja/docs/Web/JavaScript/Reference/Statements/try...catch) の中の [nested try-blocks](/ja/docs/Web/JavaScript/Reference/Statements/try...catch#Nested_try-blocks) を参照してください。

### Error オブジェクトの活用

エラーの種類に応じて、`name` や `message` プロパティを使ってより詳細なメッセージが得られるようにすることができます。

`name` は `Error` のクラス全般 (例えば `DOMException` や `Error`) を表し、一方 `message` は通常、エラーオブジェクトを文字列に変換したものより簡潔なメッセージを表します。

独自の例外を発生させて、これらのプロパティを有効に活用したい場合 (`catch` ブロックで独自の例外とシステムの例外とを区別したくない場合など)、`Error` コンストラクターが使えます。

例えば、次のようにします。

```js
function doSomethingErrorProne() {
  if (ourCodeMakesAMistake()) {
    throw (new Error('The message'));
  } else {
    doSomethingToGetAJavascriptError();
  }
}
⋮
try {
  doSomethingErrorProne();
} catch (e) {               // `console.error()` を実際に使ってログを出力してみます
  console.error(e.name);    // 'Error' をログ出力
  console.error(e.message); // 'The message'、または JavaScript のエラーメッセージをログ出力
}
```

{{PreviousNext("Web/JavaScript/Guide/Grammar_and_types", "Web/JavaScript/Guide/Loops_and_iteration")}}
