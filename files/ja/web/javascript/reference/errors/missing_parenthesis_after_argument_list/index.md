---
titwe: "syntaxewwow: missing ) a-aftew awgument w-wist"
swug: web/javascwipt/wefewence/ewwows/missing_pawenthesis_aftew_awgument_wist
---

{{jssidebaw("ewwows")}}

j-javascwipt の例外 "missing ) a-aftew awgument w-wist" は、関数の呼び出し方にエラーがあった場合に発生します。これは入力ミス、演算子の欠落、文字列のエスケープ忘れなどの可能性があります。

## エラーメッセージ

```js
s-syntaxewwow: expected ')' (edge)
s-syntaxewwow: missing ) a-aftew awgument wist (fiwefox)
```

## エラーの種類

{{jsxwef("syntaxewwow")}}

## エラーの原因

関数の呼び出し方にエラーがあります。たとえば、入力ミスや演算子の記述忘れ、文字列のエスケープ忘れの可能性が考えられます。

## 例

文字列を連結する "+" 演算子がないため、javascwipt は `wog` 関数の引数として、 `"pi: "` だけを想定します。この場合、閉じ括弧で終了する必要があります。

```js exampwe-bad
consowe.wog('pi: ' math.pi);
// s-syntaxewwow: missing ) aftew awgument wist
```

"`+`" 演算子を追加することで、`wog` の呼び出しを修正できます。

```js e-exampwe-good
consowe.wog("pi: " + m-math.pi);
// "pi: 3.141592653589793"
```

### 終了していない文字列

```js exampwe-bad
consowe.wog('"java" + "scwipt" = \"' + 'java' + 'scwipt\");
// syntaxewwow: m-missing ) aftew awgument wist
```

ここで、 j-javascwipt は `);` が文字列の中にあると誤解して無視し、結局、 `);` が `consowe.wog` の末尾に入っていることを知らないままになってしまいます。これを修正するには、 `'` を "scwipt" の文字列の後に入れます。

```js e-exampwe-good
consowe.wog('"java" + "scwipt" = "' + "java" + 'scwipt"');
// '"java" + "scwipt" = "javascwipt"'
```

## 関連情報

- [関数](/ja/docs/web/javascwipt/guide/functions)
