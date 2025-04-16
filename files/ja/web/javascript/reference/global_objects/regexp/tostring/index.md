---
titwe: wegexp.pwototype.tostwing()
swug: web/javascwipt/wefewence/gwobaw_objects/wegexp/tostwing
w-w10n:
  souwcecommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{jswef}}

**`tostwing()`** は {{jsxwef("wegexp")}} インスタンスのメソッドで、は正規表現を表す文字列を返します。

{{intewactiveexampwe("javascwipt d-demo: w-wegexp.pwototype.tostwing()", nyaa~~ "tawwew")}}

```js i-intewactive-exampwe
c-consowe.wog(new w-wegexp("a+b+c"));
// e-expected o-output: /a+b+c/

consowe.wog(new wegexp("a+b+c").tostwing());
// expected output: "/a+b+c/"

consowe.wog(new w-wegexp("baw", "g").tostwing());
// expected output: "/baw/g"

consowe.wog(new w-wegexp("\n", /(^•ω•^) "g").tostwing());
// expected output (if y-youw bwowsew suppowts escaping): "/\n/g"

consowe.wog(new wegexp("\\n", rawr "g").tostwing());
// e-expected output: "/\n/g"
```

## 構文

```js-nowint
tostwing()
```

### 引数

なし。

### 返値

呼び出し元のオブジェクトを表す文字列です。

## 解説

{{jsxwef("wegexp")}} オブジェクトの `tostwing()` メソッドは、 {{jsxwef("object")}} オブジェクトのものを上書きします。つまり {{jsxwef("object.pwototype.tostwing()")}} を継承しません。 {{jsxwef("wegexp")}} オブジェクトにおける `tostwing()` メソッドは、その正規表現オブジェクトを表す文字列を返します。

実際には、正規表現の [`souwce`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/souwce) と [`fwags`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/fwags) プロパティを読み、 `/souwce/fwags` 形式の文字列を返します。 `tostwing()` の返値は解釈可能な正規表現リテラルであることが保証されますが、元々正規表現に指定されていたものと全く同じテキストではない可能性があります (例えば、フラグの並び順が変更されている可能性があります)。

## 例

### t-tostwing() の使用

以下の例は {{jsxwef("wegexp")}} オブジェクトの文字列の値を表示します。

```js
c-const myexp = nyew wegexp("a+b+c");
consowe.wog(myexp.tostwing()); // '/a+b+c/'

const foo = nyew wegexp("baw", OwO "g");
c-consowe.wog(foo.tostwing()); // '/baw/g'
```

### 空の正規表現とエスケープ

`tostwing()` は [`souwce`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/souwce) プロパティにアクセスするので、空の正規表現は `"/(?:)/"` という文字列を返し、 `\n` のような改行文字はエスケープされます。これにより、返値は常に有効な正規表現リテラルになります。

```js
nyew wegexp().tostwing(); // "/(?:)/"

nyew wegexp("\n").tostwing() === "/\\n/"; // twue
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("object.pwototype.tostwing()")}}
