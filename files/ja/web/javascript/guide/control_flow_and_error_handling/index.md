---
title: 制御フローとエラー処理
slug: Web/JavaScript/Guide/Control_flow_and_error_handling
l10n:
  sourceCommit: f0d7ee3bc3a398612c75063fe227a5dcc515f40b
---

{{jsSidebar("JavaScript Guide")}}
{{PreviousNext("Web/JavaScript/Guide/Grammar_and_types", "Web/JavaScript/Guide/Loops_and_iteration")}}

JavaScript は、特に制御フロー文についてはコンパクトな文のセットに対応しており、アプリケーションに多様な対話的機能を組み込むために利用することができます。この節ではこれらの文の概要を説明します。

[JavaScript リファレンス](/ja/docs/Web/JavaScript/Reference/Statements)には、この章で紹介する文についての完全な詳細が載っています。また、JavaScript のコードではセミコロン (`;`) 文字で文を区切ります。

あらゆる JavaScript の式は、文でもあります。
式に関する詳細については[式と演算子](/ja/docs/Web/JavaScript/Guide/Expressions_and_operators)を参照してください。

## ブロック文

最も基本的な文は「ブロック文」で、文のグループ化に使います。ブロックは、一組の波括弧で区切られます。

```js
{
  statement1;
  statement2;
  // …
  statementN;
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

> **メモ:** [`var`](/ja/docs/Web/JavaScript/Reference/Statements/var) で宣言された変数は、ブロックスコープではなく、それを含む関数やスクリプトのスコープとなり、それらの変数を設定した影響は、そのブロックを越えて持続します。次の例を参照してください。
>
> ```js
> var x = 1;
> {
>   var x = 2;
> }
> console.log(x); // 2 を出力
> ```
>
> ここで `2` が出力されるのは、ブロック内の `var x` 文がブロックの前の `var x` 文と同じスコープ内にあるためです。（C や Java では、同様のコードで `1` が出力されます。）
>
> このスコープの問題は、 {{jsxref("Statements/let", "let")}} や {{jsxref("Statements/const", "const")}} を使用すると改善されます。

## 条件文

条件文は、指定した条件が真の場合に実行する命令の集まりです。JavaScript は `if...else` と `switch` の 2 つの条件文に対応しています。

### if...else 文

`if` を使用すると、論理条件が `true` の場合に文を実行することができます。任意の `else` 節を使用すると、条件が `false` の場合にも文を実行することができます。

`if` 文は次のように使用します。

```js
if (condition) {
  statement1;
} else {
  statement2;
}
```

ここで `condition` は、`true` または `false` と評価される任意の式にすることができます。（`true` と `false` の評価の説明については、 [Boolean](/ja/docs/Web/JavaScript/Reference/Global_Objects/Boolean#解説) を参照してください。）

条件が `true` と評価された場合、`statement1` が実行されます。そうでなければ、`statement2` が実行されます。`statement1` と `statement2` は、入れ子になった `if` 文も含めて、任意の文にすることができます。

以下のように、 `else if` を使用した文を組み合わせて、複数の条件を順番に検査することもできます。

```js
if (condition1) {
  statement1;
} else if (condition2) {
  statement2;
} else if (conditionN) {
  statementN;
} else {
  statementLast;
}
```

複数の条件がある場合、`true` と評価された最初の論理条件のみが実行されます。複数の文を実行するには、ブロック文 (`{ /* … */ }`) 内にグループ化します。

#### ベストプラクティス

一般的に、常にブロック文を使用するのが優れた方法です。_特に_ `if` 文を入れ子にしたコードで有効です。

```js
if (condition) {
  // 条件が true のときに実行される文
  // …
} else {
  // 条件が false のときに実行される文
  // …
}
```

一般的に、 `if...else` の条件に `x = y` のような代入文を使用しないのがベストプラクティスです。

```js-nolint example-bad
if (x = y) {
  /* ここに文が来る */
}
```

しかし、たまにそのような書き方をしたくなるような場合もあるでしょう。例えば、 [`while`](/ja/docs/Web/JavaScript/Reference/Statements/while) のドキュメントには[代入を条件として使用](/ja/docs/Web/JavaScript/Reference/Statements/while#代入を条件として使用)という節があり、知っておくべき、従うべき一般的なベストプラクティスの構文の案内があります。

#### 偽値

以下の値は `false` と評価されます（また、[偽値](/ja/docs/Glossary/Falsy)とも呼ばれます）。

- `false`
- `undefined`
- `null`
- `0`
- `NaN`
- 空の文字列 (`""`)

上記以外の—オブジェクトを含む—すべての値は、条件文に渡されると `true` と評価されます。

> [!NOTE]
> プリミティブな論理値の `true` と `false` を、{{jsxref("Boolean")}} オブジェクトの true や false という値と混同しないでください。
>
> 例:
>
> ```js
> const b = new Boolean(false);
> if (b) {
>   // この条件は true に評価される
> }
> if (b == true) {
>   // この条件は false に評価される
> }
> ```

#### 例

次の例で、関数 `checkData` は `Text` オブジェクトに含まれている文字数が 3 である場合に `true` を返し、そうでない場合はアラートを表示して `false` を返します。

```js
function checkData() {
  if (document.form1.threeChar.value.length === 3) {
    return true;
  } else {
    alert(
      `Enter exactly three characters. ${document.form1.threeChar.value} is not valid.`,
    );
    return false;
  }
}
```

### switch 文

`switch` 文を使うと、プログラムは式を評価し、その式の値を `case` ラベルと照合します。一致すると、プログラムはそのラベルに関連付けられた文を実行します。

`switch` 文は次のようになります。

```js
switch (expression) {
  case label1:
    statements1;
    break;
  case label2:
    statements2;
    break;
  // …
  default:
    statementsDefault;
}
```

JavaScript は上記の switch 文を次のように評価します。

- プログラムは最初に、式の値に一致するラベルを持つ `case` 節を探し、その節に制御を移して、関連付けられた文を実行します。
- 一致するラベルがない場合、プログラムは省略可能な `default` 節を探します。

  - 存在する場合は `default` 節に制御を移し、関連付けられた文を実行します。
  - `default` 節が見つからない場合、プログラムは `switch` 文の末尾の後に続く文から実行を再開します。
  - （慣例により、`default` 節は最後の節に置きますが、そうしなければいけないわけではありません。）

#### break 文

`break` 文はオプションで、それぞれの `case` 節と関連付けられ、該当する文が実行されるとプログラムが `switch` から抜け出し、`switch` の次の文から実行が継続されることを保証します。`break` が省略されると、プログラムは `switch` 文の内部の実行を続けます（そして、次の `case` を順番に評価します）。

##### 例

次の例では、`fruitType` が `"Bananas"` と評価された場合、プログラムでは `case "Bananas"` と値が一致するので、それに関連付けられた文を実行します。 `break` 文に出くわすと、プログラムは `switch` から抜けて、 `switch` の後に続く文を実行します。`break` を省略すると、 `case "Cherries"` の文も実行されます。

```js
switch (fruitType) {
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
    console.log("Papayas are $2.79 a pound.");
    break;
  default:
    console.log(`Sorry, we are out of ${fruitType}.`);
}
console.log("Is there anything else you'd like?");
```

## 例外処理文

`throw` 文を使用して例外を発生させ、`try...catch` 文を使用して例外を処理することができます。

- [`throw` 文](#throw_文)
- [`try...catch` 文](#try...catch_文)

### 例外の型

JavaScript では、ほぼどのようなオブジェクトでも例外として投げることができます。とはいえ、必ずしも投げられるオブジェクトすべてが同等に作られているわけではありません。数値や文字列をエラーとして投げる方法がよく用いられますが、こうした用途のために特別に作られた例外データ型を使用した方がより効率的な場合が多いです。

- [ECMAScript 例外](/ja/docs/Web/JavaScript/Reference/Global_Objects/Error#エラー型)
- [`DOMException`](/ja/docs/Web/API/DOMException)

### throw 文

`throw` 文は、例外を投げる（発生させる）ために使用します。例外を発生させるには、投げたい値を含む式を指定してください。

```js
throw expression;
```

特定の型の式だけではなく、あらゆる式を投げることができます。下記のコードでは、さまざまな型の例外を発生させています。

```js
throw "Error2"; // 文字列型
throw 42; // 数値型
throw true; // 論理型
throw {
  toString() {
    return "これはオブジェクトです！";
  },
};
```

### try...catch 文

`try...catch` 文は検査したい文のブロックを指定し、さらに発生した例外に対する 1 つ以上の対処方法を指定します。例外が発生すると、 `try...catch` 文がそれを受け取ります。

`try...catch` 文は 1 つの `try` ブロックと、 `try` ブロック内で例外が発生した場合に何をするかを指定する分を含む `catch` ブロックから成ります。

要するに、成功した場合に実行したい `try` ブロックと、失敗した場合に制御を移行させたい `catch` ブロックで構成されています。`try` ブロック内（もしくは `try` ブロック内から呼び出された関数内）のいずれかの文が例外を投げると、制御は*すぐに* `catch` ブロックに移ります。`try` ブロックで例外が発生しなかった場合、`catch` ブロックはスキップされます。`finally` ブロックは `try` および `catch` ブロックを実行した後に実行しますが、`try...catch` 文の後に続く文より先に実行されます。

次の例では `try...catch` 文を使用しています。この例では渡された値に基づいて、配列から月の名前を取り出す関数を実行します。値に対応する月の数字 (`1`–`12`) がない場合は `'InvalidMonthNo'` という値を持つ例外が発生し、`catch` ブロックの中の文は `monthName` という変数に `'unknown'` という値を設定します。

```js-nolint
function getMonthName(mo) {
  mo--; // 月の数字を配列のインデックスに合わせる (0 = Jan, 11 = Dec)
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  if (months[mo]) {
    return months[mo];
  } else {
    throw "InvalidMonthNo"; // ここで throw キーワードが使われている
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

#### catch ブロック

`catch` ブロックを用いることで、`try` ブロックで発生しうるすべての例外を扱うことができます。

```js-nolint
catch (exception) {
  statements
}
```

`catch` ブロックには識別子 (上記の構文における `exception`) を指定し、これが `throw` 文で指定された値を保持します。この識別子は、発生した例外についての情報を得るために使います。

JavaScript は `catch` ブロックに入るときにこの識別子を作成します。識別子は `catch` ブロックの区間だけ存続します。つまり、`catch` ブロックの実行が終わると、その識別子はもう使えなくなります。

例えば、次のコードは例外を投げます。例外が生じると、制御が `catch` ブロックに移ります。

```js
try {
  throw "myException"; // 例外を生成
} catch (err) {
  // ここには例外を扱う文が入る
  logMyErrors(err); // 例外オブジェクトをエラーハンドラーに渡す
}
```

> **メモ:** `catch` ブロック内でコンソールにエラーをログ出力する場合は、`console.log()` よりも `console.error()` がデバッグ目的では推奨されています。これはメッセージをエラーとして書式化し、ページによって生成されたエラーメッセージの一覧に追加します。

#### finally ブロック

`finally` ブロックは、`try` および `catch` ブロックの実行「後」に実行される文が入ります。また、`finally` ブロックの中のコードは `try…catch…finally` に続く文が実行される「前」に実行されます。

また、 `finally` ブロックは例外が発生するかどうかにかかわらず、実行されるということに注意することも大切です。また、例外が発生したら、`finally` ブロック内の文は発生した例外が `catch` ブロックで処理されなくても実行されます。

`finally` ブロックを使用することで、例外発生時に適切にスクリプトを停止させることができます。例えば、スクリプトで使用していたリソースを解放しなければならない場合などです。

次の例ではファイルを開き、そのファイルを使用する文を実行します（サーバー側 JavaScript ではファイルにアクセスできます）。ファイルを開いている間に発生すると、スクリプトが停止する前に `finally` ブロックでそのファイルを閉じます。ここで `finally` を使用することで、エラーが発生した場合であってもファイルが開かれたままにならないことを保証します。

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
    // この返値は、finally ブロックが
    // 完了するまで保留となる
    return true;
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

`finally` ブロックによる返値の上書きは、 `catch` ブロック内で発生した、または再発生した例外にも適用されます。

```js
function f() {
  try {
    throw "bogus";
  } catch (e) {
    console.log('caught inner "bogus"');
    // この throw 文は finally ブロックが
    // 完了するまで保留になる
    throw e;
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

// Logs:
// caught inner "bogus"
// false
```

#### 入れ子の try...catch 文

1 つ以上の `try...catch` 文を入れ子にすることができます。

内側の `try` ブロックに `catch` ブロックがない場合は次のようになります。

1. `finally` ブロックを置く必要があります。そして、
2. 外側の `try...catch` 文の `catch` ブロックがエラーの照合先としてチェックされます。

詳しくは、[`try...catch`](/ja/docs/Web/JavaScript/Reference/Statements/try...catch) の中の[入れ子になった try ブロック](/ja/docs/Web/JavaScript/Reference/Statements/try...catch#入れ子になった_try_ブロック)を参照してください。

### Error オブジェクトの活用

エラーの種類に応じて、 `name` や `message` プロパティを使ってより詳細なメッセージが得られるようにすることができます。

`name` は `Error` のクラス全般 (例えば `DOMException` や `Error`) を表し、一方 `message` は通常、エラーオブジェクトを文字列に変換したものより簡潔なメッセージを表します。

独自の例外を発生させて、これらのプロパティを有効に活用したい場合 (`catch` ブロックで独自の例外とシステムの例外とを区別したくない場合など)、`Error` コンストラクターが使えます。

例えば、次のようにします。

```js
function doSomethingErrorProne() {
  if (ourCodeMakesAMistake()) {
    throw new Error("メッセージ");
  } else {
    doSomethingToGetAJavaScriptError();
  }
}

try {
  doSomethingErrorProne();
} catch (e) {
  // `console.error()` を実際に使ってログを出力してみます
  console.error(e.name); // 'Error'
  console.error(e.message); // 'メッセージ'、または JavaScript のエラーメッセージをログ出力
}
```

{{PreviousNext("Web/JavaScript/Guide/Grammar_and_types", "Web/JavaScript/Guide/Loops_and_iteration")}}
