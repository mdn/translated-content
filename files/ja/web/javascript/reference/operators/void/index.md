---
title: void
slug: Web/JavaScript/Reference/Operators/void
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

**`void` 演算子**は与えられた式 (`expression`) を評価し、{{jsxref("undefined")}} を返します。

{{InteractiveExample("JavaScript デモ: void 演算子")}}

```js interactive-example
const output = void 1;
console.log(output);
// 予想される結果: undefined

void console.log("式が評価されました");
// 予想される結果: "式が評価されました"

void (function iife() {
  console.log("IIFE が実行されました");
})();
// 予想される結果: "IIFE が実行されました"

void function test() {
  console.log("test 関数が実行されました");
};
try {
  test();
} catch (e) {
  console.log("test 関数が定義されていません");
  // 予想される結果: "test 関数が定義されていません"
}
```

## 構文

```js-nolint
void expression
```

### 引数

- `expression`
  - : [優先順位](/ja/docs/Web/JavaScript/Reference/Operators/Operator_precedence#一覧表)が 14（前置演算子）以上の式です。

### 返値

{{jsxref("undefined")}} です。

## 解説

この演算子により、何らかの値を生成する評価式を、式が {{jsxref("undefined")}} と評価されることが望ましい場面に置くことができます。

`void` 演算子は、よく単にプリミティブ値 `undefined` を得る目的で使われ、一般的に "`void(0)`" と書かれます（これは "`void 0`" と等価です）。この目的であれば、グローバル変数 {{jsxref("undefined")}} を使用することができます。

なお、`void` 演算子の[優先順位](/ja/docs/Web/JavaScript/Reference/Operators/Operator_precedence)を考慮するべきであり、括弧は `void` 演算子に続く式の解決を明確にするのに役立つとされています。

```js
void 2 === "2"; // (void 2) === '2', false を返す
void (2 === "2"); // void (2 === '2'), undefined を返す
```

## 例

### 即時実行関数式

[即時実行関数式](/ja/docs/Glossary/IIFE)を使用する場合、`function` キーワードを[文](/ja/docs/Web/JavaScript/Reference/Statements/Expression_statement)の先頭に置くことはできません。そうすると[関数宣言](/ja/docs/Web/JavaScript/Reference/Statements/function)として構文解析され、呼び出しを表す括弧に到達した時点で構文エラーになります。名前のない関数を宣言として構文解析すると、直ちに構文エラーになります。

```js-nolint example-bad
function iife() {
  console.log("実行されました！");
}(); // SyntaxError: Unexpected token ')'

function () {
  console.log("実行されました！");
}(); // SyntaxError: Function statements require a function name
```

関数を[式](/ja/docs/Web/JavaScript/Reference/Operators/function)として構文解析するためには、 `function` キーワードが、文ではなく式のみを受け入れる位置に現れる必要があります。これは、キーワードの前に[単項演算子](/ja/docs/Web/JavaScript/Guide/Expressions_and_operators#単項演算子)を付けることで実現することができます。単項演算子はオペランドとして式のみを受け入れます。関数呼び出しは単項演算子よりも優先順位が高いため、最初の（すなわち最も重要な）操作として実行されます。その返値（ほとんどの場合 `undefined`）は単項演算子に渡すと、直ちに破棄されます。

単項演算子の中で、 `void` が最もよい意味づけを提供します。関数呼び出しの返値を破棄すべきことを明確に示すからです。

```js-nolint
void function () {
  console.log("実行されました！");
}();

// Logs "実行されました！"
```

これは関数式を括弧で囲むよりも少し長いですが、同じ効果が得られます。つまり、 `function` キーワードが文の開始ではなく式の開始として解析されるように強制するのです。

```js
(function () {
  console.log("実行されました！");
})();
```

ただし、このテクニックは `function` キーワードで定義されたIIFEにのみ適用されます。アロー関数で括弧を避けるために `void` 演算子を使用しようとすると、構文エラーが発生します。アロー関数式は呼び出される際に常に括弧で囲む必要があります。

```js example-bad
void () => { console.log("iife!"); }(); // SyntaxError: Malformed arrow function parameter list
```

### JavaScript URI

[`javascript:` URI](/ja/docs/Web/URI/Reference/Schemes/javascript) に対応しているブラウザーでは、URI 内のコードを評価し、返値が文字列の場合、その返値でページの内容を置き換えます。`void` 演算子は、{{jsxref("undefined")}} を返すために使用できます。例えば、次のように使います。

```html
<a href="javascript:void(0);">ここをクリックしても何もしません</a>

<a href="javascript:void(document.body.style.backgroundColor='green');">
  ここをクリックすると背景が緑色になります
</a>
```

> [!NOTE]
> `javascript:` 擬似プロトコルは控えめなイベントハンドラーなどの代替であり、積極的に使用するべきではないでしょう。

### アロー関数からのリーク防止

アロー関数は略式の中括弧のない構文を導入しており、式を返します。
これは、式が関数呼び出しであり、返値が `undefined` から他の値に変更された場合に、意図しない副作用が発生する可能性があります。

例えば、下記コードで `doSomething()` が `false` を返す場合、チェックボックスをクリックしてもチェック状態が更新できなくなりました （ハンドラーから `false` を返すことで既定の措置が無効化されるため）。

```js example-bad
checkbox.onclick = () => doSomething();
```

これは望ましくない動作です。
安全のため、関数の返値が使用されない場合は、 `void` 演算子に渡すと、（例えば） API の変更によってアロー関数の動作が変わらないように保証できます。

```js example-good
checkbox.onclick = () => void doSomething();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("undefined")}}
