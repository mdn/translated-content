---
title: try...catch
slug: Web/JavaScript/Reference/Statements/try...catch
tags:
  - 例外
  - JavaScript
  - 言語機能
  - 文
browser-compat: javascript.statements.try_catch
translation_of: Web/JavaScript/Reference/Statements/try...catch
---
{{jsSidebar("Statements")}}

**`try...catch`** 文は、試す文のブロックをマークし、例外が発生したときの応答を指定します。

{{EmbedInteractiveExample("pages/js/statement-trycatch.html")}}

## 構文

```js
try {
  try_statements
}
catch (exception_var) {
  catch_statements
}
finally {
  finally_statements
}
```

- `try_statements`
  - : 実行される文です。
- `catch_statements`
  - : `try` ブロックの中で例外が発生した場合に実行される文です。
- `exception_var`
  - : 関連する `catch` 節に対して例外オブジェクトを保持する識別子です。
- `finally_statements`
  - : `try` 文が完了した後に実行される文です。これらの文は、例外が発生されたり捕捉されたりしたかどうかに関係なく実行されます。

## 解説

`try` 文は、1 つ以上の文を含む `try` ブロックにより構成されます。文が 1 つであっても、常に `{}` を使用する必要があります。1 つ以上の `catch` ブロック、または `finally` ブロックが存在する必要があります。すなわち、`try` 文には 3 つの形態があります。

- `try...catch`
- `try...finally`
- `try...catch...finally`

`catch` ブロックは、例外が `try` ブロックの中で発生した場合に何をするかを指定する文を含みます。`try` ブロック内 (または `try` ブロック内から呼び出された関数の中) のいずれかの文で例外が発生した場合は、制御は即座に `catch` ブロックへ移ります。`try` ブロックの中で例外が発生しなかった場合は、`catch` ブロックは飛ばされます。

`finally` ブロックは、`try` ブロックおよび `catch` ブロックの実行が完了した後で実行されます。これは常に実行され、例外が発生したかどうか、捕捉されたかどうかには関係ありません。

1 つ以上の `try` 文を入れ子にする事ができます。内側の `try` 文が `catch` ブロックを持っていない場合、それを囲んでいる `try` 文の `catch` ブロックに入ります。

`try` を使用して JavaScript の例外を処理することもできます。 JavaScript の例外に関する情報は [JavaScript ガイド](/ja/docs/Web/JavaScript/Guide)を参照してください。

### 無条件の catch ブロック

`catch` ブロックが使われている場合、`try` ブロックの中から任意の例外が発生すると、`catch` ブロックが実行されます。例えば、以下のコードで例外が発生すると、制御は `catch` ブロックへ移動します。

```js
try {
  throw 'myException'; // 例外を生成
} catch (e) {
  // 任意の例外を操作するための文
  logMyErrors(e); // エラーハンドラーに例外オブジェクトを渡します
}
```

`catch` ブロックは例外の値を保持する識別子 (上記の例では `e`) を指定します。この値は `catch` ブロックの{{Glossary("Scope", "スコープ")}}内でのみ利用できます。

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

よくある使用例としては、次のように想定済みの一部のエラーのみを捕捉 (および無視) し、それ以外の場合はエラーを送出し直す場合です。

```js
try {
  myRoutine();
} catch (e) {
  if (e instanceof RangeError) {
    // 頻発する想定済みのエラーを処理する文
  } else {
    throw e;  // エラーを変更しないまま送出し直す
  }
}
```

### 例外識別子

例外が `try` ブロックの中で発生したときは、_`exception_var`_ (たとえば、`catch (e)` における `e`) が例外の値を保持します。この識別子を使用して、発生した例外についての情報を取得することができます。この識別子は `catch` ブロックの{{Glossary("Scope", "スコープ")}}でのみ利用できます。例外の値が必要ない場合にはこれは省略できます。

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

`finally` ブロックには、`try` ブロックおよび `catch` ブロックを実行した後で、`try...catch...finally` の次の文が実行される前に実行される文が入ります。なお、`finally` ブロックは例外が発生するかどうかにかかわらず実行されます。また、例外が発生した場合、`finally` ブロックは例外を処理する `catch` ブロックがなくても実行されます。

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

## 例

### 入れ子になった try ブロック

最初に、次のもので何が起きるか見てみましょう。

```js
try {
  try {
    throw new Error('oops');
  } finally {
    console.log('finally');
  }
} catch (ex) {
  console.error('outer', ex.message);
}

// Output:
// "finally"
// "outer" "oops"
```

ここで、既に内部の `try` ブロックに `catch` ブロックを追加しているので、既に例外を捕捉しています。

```js
try {
  try {
    throw new Error('oops');
  } catch (ex) {
    console.error('inner', ex.message);
  } finally {
    console.log('finally');
  }
} catch (ex) {
  console.error('outer', ex.message);
}

// Output:
// "inner" "oops"
// "finally"
```

そして、エラーを送りなおします。

```js
try {
  try {
    throw new Error('oops');
  } catch (ex) {
    console.error('inner', ex.message);
    throw ex;
  } finally {
    console.log('finally');
  }
} catch (ex) {
  console.error('outer', ex.message);
}

// Output:
// "inner" "oops"
// "finally"
// "outer" "oops"
```

送り直されない限り、例外はどれでも最も内側の `catch` ブロックで一度だけ捕捉されます。もちろん、何らかの例外が「内側の」のブロックで発生した場合 (`catch` ブロックのコードで例外が発生することを行った場合)、「外側の」ブロックで捕捉されます。

### finally ブロックからの return

`finally` ブロックが値を返す場合、その値が `try-catch-finally` 全体の返値になり、 `try` ブロックや `catch` ブロックの `return` 文に関係なくなります。
これは `catch` ブロック内で例外が発生した場合も含まれます。

```js
(function() {
  try {
    try {
      throw new Error('oops');
    } catch (ex) {
      console.error('inner', ex.message);
      throw ex;
    } finally {
      console.log('finally');
      return;
    }
  } catch (ex) {
    console.error('outer', ex.message);
  }
})();

// 出力結果:
// "inner" "oops"
// "finally"
```

外側の "oops" は `finally` ブロックに return があるため送出されません。同じことが、`catch` ブロックから返されているそのほかの値にも適用されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Error")}}
- {{jsxref("Statements/throw", "throw")}}
