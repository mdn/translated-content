---
title: void 演算子
slug: Web/JavaScript/Reference/Operators/void
---

{{jsSidebar("Operators")}}

**`void` 演算子**は与えられた式 (`expression`) を評価し、{{jsxref("undefined")}} を返します。

{{EmbedInteractiveExample("pages/js/expressions-voidoperator.html")}}

## 構文

```js
void expression;
```

## 解説

この演算子により、何らかの値を生成する評価式を、式が {{jsxref("undefined")}} と評価されることが望ましい場面に置くことができます。

`void` 演算子は、よく単にプリミティブ値 `undefined` を得る目的で使われ、一般的に "`void(0)`" と書かれます（これは "`void 0`" と等価です）。この目的であれば、グローバル変数 {{jsxref("undefined")}} を使用することができます。

なお、`void` 演算子の [優先順位](/ja/docs/Web/JavaScript/Reference/Operators/Operator_Precedence) を考慮するべきであり、括弧は `void` 演算子に続く式の解決を明確にするのに役立つとされています。

```js
void 2 == "2"; // (void 2) == '2', false を返す
void (2 == "2"); // void (2 == '2'), undefined を返す
```

## 例

### 即時実行関数式

[即時実行関数式](/ja/docs/Glossary/IIFE) を使用する場合、 `void` により `function` キーワードが宣言ではなく式として扱うよう強制することができます。

```js
void (function iife() {
  console.log("Executed!");
})();

// Output: "Executed!"
```

上記の関数を `void` キーワードなしで実行すると、**捕捉されない SyntaxError** が発生します。

### JavaScript URI

`javascript:` の URI に対応しているブラウザーでは、 URI の中のコードを評価し、返値が {{jsxref("undefined")}} でない限り、返された値でページの内容を置き換えます。 `void` 演算子は、`undefined` を返すために使用できます。

```html
<a href="javascript:void(0);"> Click here to do nothing </a>

<a href="javascript:void(document.body.style.backgroundColor='green');">
  Click here for green background
</a>
```

> **メモ:** `javascript:` 擬似プロトコルは控えめなイベントハンドラーなどの代替であり、積極的に使用するべきではないでしょう。

### アロー関数からのリーク防止

アロー関数は略式の中括弧のない構文を導入しており、式を返します。
これは、以前は何も返さなかった関数呼び出しの結果を返すことで、意図しない副作用を引き起こす可能性があります。関数の返値が使用されないことを想定している場合は、安全のため void 演算子に渡すことで、（例えば） API の変更によってアロー関数の動作が変更されないようにすることができます。

```js
button.onclick = () => void doSomething();
```

これにより、 `doSomething` の返値が `undefined` から `true` に変わっても、このコードの動作が変わらないことが保証されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("undefined")}}
