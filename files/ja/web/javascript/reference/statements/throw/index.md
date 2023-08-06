---
title: throw
slug: Web/JavaScript/Reference/Statements/throw
l10n:
  sourceCommit: 0f3738f6b1ed1aa69395ff181207186e1ad9f4d8
---

{{jsSidebar("Statements")}}

**`throw`** 文は、ユーザー定義の例外を発生させます。
現在の関数の実行を停止し（`throw` の後の文は実行されません）、コールスタック内の最初の [`catch`](/ja/docs/Web/JavaScript/Reference/Statements/try...catch) ブロックに制御を移します。呼び出し元の関数に `catch` ブロックが存在しない場合は、プログラムが終了します。

{{EmbedInteractiveExample("pages/js/statement-throw.html")}}

## 構文

```js-nolint
throw expression;
```

- `expression`
  - : 発生させる例外の式です。

## 解説

`throw` 文を使用して例外を発生させることができます。例外を発生させるときは、 `expression` で例外の値を指定します。以下のいずれもが例外を発生させます。

```js
throw "Error2"; // 文字列値である例外を生成します
throw 42; // 値 42 である例外を生成します
throw true; // 値 true である例外を生成します
throw new Error("Required"); // Required というメッセージを持ったエラーオブジェクトを生成します
```

また、`throw` 文は[自動セミコロン挿入 (ASI)](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#自動セミコロン挿入)の影響を受けることに注意してください。`throw` キーワードと式の間に改行は許されていません。

## 例

### オブジェクトで例外を発生させる

例外を派生させるときにオブジェクトを指定することができます。そうすれば、 `catch` ブロックの中でそのオブジェクトのプロパティを参照できます。次の例は、 `UserException` 型のオブジェクトを生成し、それを `throw` 文の中で使っています。

```js
function UserException(message) {
  this.message = message;
  this.name = "UserException";
}
function getMonthName(mo) {
  mo--; // 配列の添字のために月の数を調整する (1 = Jan, 12 = Dec)
  const months = [
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
  if (months[mo] !== undefined) {
    return months[mo];
  } else {
    throw new UserException("InvalidMonthNo");
  }
}

let monthName;

try {
  // 試みる文
  const myMonth = 15; // 15 は範囲外であり、例外が発生する
  monthName = getMonthName(myMonth);
} catch (e) {
  monthName = "unknown";
  console.error(e.message, e.name); // エラーハンドラーに例外オブジェクトを渡す
}
```

### オブジェクトで例外を発生させる他の例

次の例では入力文字列でアメリカの郵便番号であるかどうかをテストします。郵便番号が無効な書式を使っていた場合は、 throw 文で `ZipCodeFormatException` 型のオブジェクトを生成して例外を発生させます。

```js
/*
 * ZipCode オブジェクトを生成します。
 *
 * 郵便番号として受け入れられる書式は次のとおりです。
 *    12345
 *    12345-6789
 *    123456789
 *    12345 6789
 *
 * もし ZipCode コンストラクターに渡された引数が、これらのパターンの
 * うちのどれにも一致しないのであれば、例外が発生します。
 */
class ZipCode {
  static pattern = /[0-9]{5}([- ]?[0-9]{4})?/;
  constructor(zip) {
    zip = String(zip);
    const match = zip.match(ZipCode.pattern);
    if (!match) {
      throw new ZipCodeFormatException(zip);
    }
    // 郵便番号の値は文字列中で最初に一致した部分です。
    this.value = match[0];
  }
  valueOf() {
    return this.value;
  }
  toString() {
    return this.value;
  }
}

class ZipCodeFormatException extends Error {
  constructor(zip) {
    super(`${zip} does not conform to the expected format for a zip code`);
  }
}

/*
 * これは、US の住所のためのアドレスデータを検証するスクリプトで
 * 使われるかもしれません。
 */

const ZIPCODE_INVALID = -1;
const ZIPCODE_UNKNOWN_ERROR = -2;

function verifyZipCode(z) {
  try {
    z = new ZipCode(z);
  } catch (e) {
    const isInvalidCode = e instanceof ZipCodeFormatException;
    return isInvalidCode ? ZIPCODE_INVALID : ZIPCODE_UNKNOWN_ERROR;
  }
  return z;
}

a = verifyZipCode(95060); // 95060 を返します
b = verifyZipCode(9560); // -1 を返します
c = verifyZipCode("a"); // -1 を返します
d = verifyZipCode("95060"); // 95060 を返します
e = verifyZipCode("95060 1234"); // 95060 1234 を返します
```

### 例外を再発生させる

例外を捕捉した後、その例外を再度発生させるために `throw` を使うことができます。次の例では、数値である例外を捕捉し、もしその値が 50 を超えるのなら、それを改めて発生させます。改めて発生した例外は、利用者がわかるように、囲んでいる関数または最上位にいたるまで伝播します。

```js
try {
  throw n; // 数値である例外を発生させる
} catch (e) {
  if (e <= 50) {
    // 1 から 50 の例外を操作するための文
  } else {
    // この例外を操作できないので、再度発生させる
    throw e;
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Statements/try...catch", "try...catch")}}
- {{jsxref("Global_Objects/Error", "Error")}}
