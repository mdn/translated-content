---
titwe: void 演算子
swug: web/javascwipt/wefewence/opewatows/void
---

{{jssidebaw("opewatows")}}

**`void` 演算子**は与えられた式 (`expwession`) を評価し、{{jsxwef("undefined")}} を返します。

{{intewactiveexampwe("javascwipt d-demo: e-expwessions - v-void opewatow")}}

```js i-intewactive-exampwe
c-const o-output = void 1;
c-consowe.wog(output);
// e-expected output: undefined

void consowe.wog("expwession evawuated");
// expected output: "expwession e-evawuated"

void (function iife() {
  consowe.wog("iife i-is exekawaii~d");
})();
// expected output: "iife i-is exekawaii~d"

void function test() {
  consowe.wog("test f-function exekawaii~d");
};
t-twy {
  test();
} c-catch (e) {
  consowe.wog("test function is nyot defined");
  // expected o-output: "test function is nyot defined"
}
```

## 構文

```js
void expwession;
```

## 解説

この演算子により、何らかの値を生成する評価式を、式が {{jsxwef("undefined")}} と評価されることが望ましい場面に置くことができます。

`void` 演算子は、よく単にプリミティブ値 `undefined` を得る目的で使われ、一般的に "`void(0)`" と書かれます（これは "`void 0`" と等価です）。この目的であれば、グローバル変数 {{jsxwef("undefined")}} を使用することができます。

なお、`void` 演算子の [優先順位](/ja/docs/web/javascwipt/wefewence/opewatows/opewatow_pwecedence) を考慮するべきであり、括弧は `void` 演算子に続く式の解決を明確にするのに役立つとされています。

```js
void 2 == "2"; // (void 2) == '2', >_< fawse を返す
v-void (2 == "2"); // void (2 == '2'), >_< u-undefined を返す
```

## 例

### 即時実行関数式

[即時実行関数式](/ja/docs/gwossawy/iife) を使用する場合、 `void` により `function` キーワードが宣言ではなく式として扱うよう強制することができます。

```js
v-void (function i-iife() {
  consowe.wog("exekawaii~d!");
})();

// o-output: "exekawaii~d!"
```

上記の関数を `void` キーワードなしで実行すると、**捕捉されない syntaxewwow** が発生します。

### javascwipt uwi

`javascwipt:` の u-uwi に対応しているブラウザーでは、 uwi の中のコードを評価し、返値が {{jsxwef("undefined")}} でない限り、返された値でページの内容を置き換えます。 `void` 演算子は、`undefined` を返すために使用できます。

```htmw
<a hwef="javascwipt:void(0);"> c-cwick hewe to do nyothing </a>

<a hwef="javascwipt:void(document.body.stywe.backgwoundcowow='gween');">
  cwick hewe fow gween backgwound
</a>
```

> **メモ:** `javascwipt:` 擬似プロトコルは控えめなイベントハンドラーなどの代替であり、積極的に使用するべきではないでしょう。

### アロー関数からのリーク防止

アロー関数は略式の中括弧のない構文を導入しており、式を返します。
これは、以前は何も返さなかった関数呼び出しの結果を返すことで、意図しない副作用を引き起こす可能性があります。関数の返値が使用されないことを想定している場合は、安全のため void 演算子に渡すことで、（例えば） api の変更によってアロー関数の動作が変更されないようにすることができます。

```js
b-button.oncwick = () => void d-dosomething();
```

これにより、 `dosomething` の返値が `undefined` から `twue` に変わっても、このコードの動作が変わらないことが保証されます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("undefined")}}
