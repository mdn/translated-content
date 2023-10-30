---
title: Function.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Function/toString
---

{{JSRef}}

**`toString()`** メソッドは、関数のソースコードを表す文字列を返します。

{{EmbedInteractiveExample("pages/js/function-tostring.html")}}

## 構文

```
function.toString()
```

### 返値

関数のソースコードを表す文字列です。

## 解説

{{jsxref("Function")}} オブジェクトは、 {{jsxref("Object")}} から継承した {{jsxref("Object.prototype.toString", "toString")}} メソッドをオーバーライドします。つまり、 {{jsxref("Object.prototype.toString")}} を継承しません。 {{jsxref("Function")}} オブジェクトについて、 `toString` メソッドは関数宣言を表現するオブジェクトを表す文字列を返します。

{{jsxref("Function")}} を文字列値として表現するとき、JavaScript は自動的に `toString` メソッドを呼び出します。例えば、関数が文字列と連結されるときです。

`this` 値のオブジェクトが `Function` オブジェクトでない場合、 `toString()` メソッドは {{jsxref("TypeError")}} 例外 ("Function.prototype.toString called on incompatible object") を発生します。

```js example-bad
Function.prototype.toString.call("foo"); // TypeError
```

`toString()` メソッドが組込み関数オブジェクトや `Function.prototype.bind` 作成された関数に対して呼び出されると、 `toString()` は、次のような*ネイティブ関数文字列*を返します。

```js
"function () {\n    [native code]\n}";
```

`toString()` メソッドが `Function` コンストラクターで生成された関数に対して呼び出されると、 `toString()` は "anonymous" という名前の関数宣言に、提供された引数と関数の本体を合成したソースコードを返します。

`+` 演算子を使用して、関数の文字列表現を明示的に取得することもできます。

```js
function foo() {
  return "bar";
}
console.log(foo + ""); // "function foo() { return 'bar' }"
```

## 例

### 実際のソースコードと toString の結果との比較

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Function</th>
      <th scope="col">Function.prototype.toString の結果</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><pre class="notranslate">function f(){}</pre></td>
      <td><pre class="notranslate">"function f(){}"</pre></td>
    </tr>
    <tr>
      <td><pre class="notranslate">class A { a(){} }</pre></td>
      <td><pre class="notranslate">"class A { a(){} }"</pre></td>
    </tr>
    <tr>
      <td><pre class="notranslate">function* g(){}</pre></td>
      <td><pre class="notranslate">"function* g(){}"</pre></td>
    </tr>
    <tr>
      <td><pre class="notranslate">a => a</pre></td>
      <td><pre class="notranslate">"a => a"</pre></td>
    </tr>
    <tr>
      <td><pre class="notranslate">({ a(){} }.a)</pre></td>
      <td><pre class="notranslate">"a(){}"</pre></td>
    </tr>
    <tr>
      <td><pre class="notranslate">({ *a(){} }.a)</pre></td>
      <td><pre class="notranslate">"*a(){}"</pre></td>
    </tr>
    <tr>
      <td><pre class="notranslate">({ [0](){} }[0])</pre></td>
      <td><pre class="notranslate">"[0](){}"</pre></td>
    </tr>
    <tr>
      <td>
        <pre class="notranslate">
Object.getOwnPropertyDescriptor({
    get a(){}
}, "a").get</pre
        >
      </td>
      <td><pre class="notranslate">"get a(){}"</pre></td>
    </tr>
    <tr>
      <td>
        <pre class="notranslate">
Object.getOwnPropertyDescriptor({
    set a(x){}
}, "a").set</pre
        >
      </td>
      <td><pre class="notranslate">"set a(x){}"</pre></td>
    </tr>
    <tr>
      <td><pre class="notranslate">Function.prototype.toString</pre></td>
      <td>
        <pre class="notranslate">"function toString() { [native code] }"</pre>
      </td>
    </tr>
    <tr>
      <td><pre class="notranslate">(function f(){}.bind(0))</pre></td>
      <td><pre class="notranslate">"function () { [native code] }"</pre></td>
    </tr>
    <tr>
      <td><pre class="notranslate">Function("a", "b")</pre></td>
      <td><pre class="notranslate">"function anonymous(a\n) {\nb\n}"</pre></td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Function.toString")}}

## 関連情報

- {{jsxref("Object.prototype.toString()")}}
