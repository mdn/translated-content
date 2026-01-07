---
title: try...catch
slug: Web/JavaScript/Reference/Statements/try...catch
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**`try...catch`** 文は `try` ブロックと、`catch` ブロックか `finally` ブロックか、その両方から構成されます。まず `try` ブロック内のコードが実行され、そこで例外が発生すると、`catch` ブロック内のコードが実行されます。`finally` ブロック内のコードは、制御する流れが構造全体を抜ける前に、常に実行されます。

{{InteractiveExample("JavaScript デモ: try...catch 文")}}

```js interactive-example
try {
  nonExistentFunction();
} catch (error) {
  console.error(error);
  // 予想される結果: ReferenceError: nonExistentFunction is not defined
  // （注：正確な出力はブラウザーによって異なる場合があります）
}
```

## 構文

```js-nolint
try {
  tryStatements
} catch (exceptionVar) {
  catchStatements
} finally {
  finallyStatements
}
```

- `tryStatements`
  - : 実行される文です。
- `catchStatements`
  - : `try` ブロックの中で例外が発生した場合に実行される文です。
- `exceptionVar` {{optional_inline}}
  - : 関連する `catch` ブロックが捕捉した例外を保持するためのオプションの識別子です。もし `catch` ブロックが例外の値を利用しない場合は、 `exceptionVar` とその周りの括弧を省略して `catch {...}` のようにすることができます。
- `finallyStatements`
  - : `try...catch...finally` 構造から制御フローが脱出する前に実行される文です。これらの文は、例外が発生されたり捕捉されたりしたかどうかに関係なく実行されます。

## 解説

`try` 文は、常に `try` ブロックから始まります。それから、`catch` ブロックまたは `finally` ブロックが存在する必要があります。`catch` および `finally` ブロックが両方存在しても構いません。すなわち、`try` 文には 3 つの形態があります。

- `try...catch`
- `try...finally`
- `try...catch...finally`

[`if`](/ja/docs/Web/JavaScript/Reference/Statements/if...else) や [`for`](/ja/docs/Web/JavaScript/Reference/Statements/for) などの他の構造とは異なり、`try`、`catch`、`finally` の各ブロックは単一の文ではなく、ブロックでなければなりません。

```js-nolint example-bad
try doSomething(); // SyntaxError
catch (e) console.log(e);
```

`catch` ブロックは、例外が `try` ブロックの中で発生した場合に何をするかを指定する文を含みます。`try` ブロック内（または `try` ブロック内から呼び出された関数の中）のいずれかの文で例外が発生した場合は、制御は即座に `catch` ブロックへ移ります。`try` ブロックの中で例外が発生しなかった場合は、`catch` ブロックは飛ばされます。

`finally` ブロックは、制御フローが `try...catch...finally` 構造から脱出する前に常に実行されます。これは常に実行され、例外が発生したかどうか、捕捉されたかどうかには関係ありません。

1 つ以上の `try` 文を入れ子にする事ができます。内側の `try` 文が `catch` ブロックを持っていない場合、それを囲んでいる `try` 文の `catch` ブロックに入ります。

`try` を使用して JavaScript の例外を処理することもできます。 JavaScript の例外に関する情報は [JavaScript ガイド](/ja/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#exception_handling_statements)を参照してください。

### catch のバインド

`try` ブロック内で例外が発生した場合、`exceptionVar`（つまり `catch (e)` の `e`）が例外値を保持します。この{{Glossary("binding", "バインド")}}を使用して、発生した例外に関する情報を取得できます。この{{Glossary("binding", "バインド")}}は `catch` ブロックの{{Glossary("Scope", "スコープ")}}内でのみ利用可能です。

単一の識別子である必要はありません。複数の識別子を一度に代入するには、[構造分解パターン](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring)が使用できます。

```js
try {
  throw new TypeError("oops");
} catch ({ name, message }) {
  console.log(name); // "TypeError"
  console.log(message); // "oops"
}
```

`catch` 節によって作成されるバインドは `catch` ブロックと同じスコープに存在するため、`catch` ブロック内で宣言される変数は `catch` 節によって作成されるバインドと同じ名前を持つことはできません。（この規則には [1 つの例外があります](/ja/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#文)、ただしこれは非推奨の構文です。）

```js-nolint example-bad
try {
  throw new TypeError("oops");
} catch ({ name, message }) {
  var name; // SyntaxError: Identifier 'name' has already been declared
  let message; // SyntaxError: Identifier 'message' has already been declared
}
```

例外バインドは書き込み可能です。例えば、例外値を正規化して、それが {{jsxref("Error")}} オブジェクトであることを保証したい場合があります。

```js
try {
  throw "おっと、これは Error オブジェクトではありません";
} catch (e) {
  if (!(e instanceof Error)) {
    e = new Error(e);
  }
  console.error(e.message);
}
```

例外値が必要ない場合は、囲む括弧とともに省略できます。

```js
function isValidJSON(text) {
  try {
    JSON.parse(text);
    return true;
  } catch {
    return false;
  }
}
```

### finally ブロック

`finally` ブロックには、`try` ブロックおよび `catch` ブロックを実行した後で、`try...catch...finally` の次の文が実行される前に実行される文が入ります。制御フローは以下のいずれかの場面で、常に `finally` ブロックに入ります。

- `try` ブロックが正常に（例外が発生せずに）終了した直後
- `catch` ブロックの実行が正常に終了した直後
- ブロックを出る制御フロー文（`return`、`throw`、`break`、`continue`）が `try` ブロックや `catch` ブロックの中で実行される直前

なお、`finally` ブロックは例外が発生するかどうかにかかわらず実行されます。また、例外が発生した場合、`finally` ブロックは例外を処理する `catch` ブロックがなくても実行されます。

次の例では `finally` ブロックの一つの使用例を示します。このコードはファイルを開き、それからファイルを使用する分を実行します。`finally` ブロックは、例外が発生したとしてもその後で確実にファイルを閉じるよう保証します。

```js
openMyFile();
try {
  // リソースを結び付けます
  writeMyFile(theData);
} finally {
  closeMyFile(); // リソースを常に閉じます
}
```

制御フロー文（`return`, `throw`, `break`, `continue`）を `finally` ブロック内で使うと、`try` ブロックや `catch` ブロックの完了値を「マスク」します。この例では、`try` ブロックは 1 を返そうとしますが、返す前にまず `finally` ブロックに制御を委ねるので、代わりに `finally` ブロックの返値が返されます。

```js
function doIt() {
  try {
    return 1;
  } finally {
    return 2;
  }
}

doIt(); // returns 2
```

一般に、`finally` ブロックの中に制御フロー文を置くのは悪い考えです。クリーンアップのためのコードのみを使用してください。

## 例

### 条件なし catch ブロック

`catch` ブロックが使われている場合、`try` ブロックの中から任意の例外が発生すると、`catch` ブロックが実行されます。例えば、以下のコードで例外が発生すると、制御は `catch` ブロックへ移動します。

```js
try {
  throw new Error("My exception"); // 例外を生成
} catch (e) {
  // 任意の例外を操作するための文
  logMyErrors(e); // エラーハンドラーに例外オブジェクトを渡します
}
```

`catch` ブロックは例外の値を保持する識別子（上記の例では `e`）を指定します。この値は `catch` ブロックの{{Glossary("Scope", "スコープ")}}内でのみ利用できます。

### 条件付き catch ブロック

「条件付き `catch` ブロック」は、下記のように `try...catch` ブロックを `if...else if...else` 構造と組み合わせることで作成することができます。

```js
try {
  myroutine(); // 3 つの例外が発生する可能性があります
} catch (e) {
  if (e instanceof TypeError) {
    // TypeError 例外を処理するための文
  } else if (e instanceof RangeError) {
    // RangeError 例外を処理するための文
  } else if (e instanceof EvalError) {
    // EvalError 例外を処理するための文
  } else {
    // 任意の指定されていない例外を操作するための文
    logMyErrors(e); // エラーハンドラーに例外オブジェクトを渡す
  }
}
```

よくある使用例としては、次のように想定済みの一部のエラーのみを捕捉（および無視）し、それ以外の場合はエラーを送出し直す場合です。

```js
try {
  myRoutine();
} catch (e) {
  if (e instanceof RangeError) {
    // 頻発する想定済みのエラーを処理する文
  } else {
    throw e; // エラーを変更しないまま送出し直す
  }
}
```

これは Java などの他の言語の構文を模倣しているのかもしれません。

```java
try {
  myRoutine();
} catch (RangeError e) {
  // 頻発する想定済みのエラーを処理する文
}
// その他のエラーは暗黙的に投げ直される
```

### 入れ子になった try ブロック

最初に、次のもので何が起きるか見てみましょう。

```js
try {
  try {
    throw new Error("oops");
  } finally {
    console.log("finally");
  }
} catch (ex) {
  console.error("outer", ex.message);
}

// ログ:
// "finally"
// "outer" "oops"
```

ここで、既に内部の `try` ブロックに `catch` ブロックを追加しているので、既に例外を捕捉しています。

```js
try {
  try {
    throw new Error("oops");
  } catch (ex) {
    console.error("inner", ex.message);
  } finally {
    console.log("finally");
  }
} catch (ex) {
  console.error("outer", ex.message);
}

// ログ:
// "inner" "oops"
// "finally"
```

そして、エラーを送りなおします。

```js
try {
  try {
    throw new Error("oops");
  } catch (ex) {
    console.error("inner", ex.message);
    throw ex;
  } finally {
    console.log("finally");
  }
} catch (ex) {
  console.error("outer", ex.message);
}

// ログ:
// "inner" "oops"
// "finally"
// "outer" "oops"
```

送り直されない限り、例外はどれでも最も内側の `catch` ブロックで一度だけ捕捉されます。もちろん、何らかの例外が「内側の」のブロックで発生した場合（`catch` ブロックのコードで例外が発生することを行った場合）、「外側の」ブロックで捕捉されます。

### finally ブロックからの return

`finally` ブロックが値を返した場合、 `try` ブロックや `catch` ブロックの `return` 文に関係なく、その値が `try-catch-finally` 全体の返値になります。
これは `catch` ブロック内で例外が発生した場合も含まれます。

```js
(() => {
  try {
    try {
      throw new Error("oops");
    } catch (ex) {
      console.error("inner", ex.message);
      throw ex;
    } finally {
      console.log("finally");
      return;
    }
  } catch (ex) {
    console.error("outer", ex.message);
  }
})();

// ログ:
// "inner" "oops"
// "finally"
```

外側の "oops" は `finally` ブロックに return があるため送出されません。同じことが、`catch` ブロックから返されているその他の値にも適用されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Error")}}
- {{jsxref("Statements/throw", "throw")}}
