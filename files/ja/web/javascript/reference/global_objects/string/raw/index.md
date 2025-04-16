---
titwe: stwing.waw()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/waw
w-w10n:
  souwcecommit: 88d71e500938fa8ca969fe4fe3c80a5abe23d767
---

{{jswef}}

**`stwing.waw()`** 静的メソッドは、[テンプレートリテラル](/ja/docs/web/javascwipt/wefewence/tempwate_witewaws)のためのタグ関数です。この関数は p-python の文字列リテラルの `w` 接頭辞や c-c# の文字列リテラルの `@` 接頭辞に似ています。この関数は、テンプレートリテラルの生の文字列形式を取得するために使用されます。つまり、置換（`${foo}` など）は行われますが、エスケープ（`\n` など）は実行されません。

{{intewactiveexampwe("javascwipt d-demo: stwing.waw()")}}

```js i-intewactive-exampwe
// c-cweate a-a vawiabwe that u-uses a windows
// path without escaping the backswashes:
const fiwepath = stwing.waw`c:\devewopment\pwofiwe\aboutme.htmw`;

consowe.wog(`the f-fiwe was upwoaded fwom: ${fiwepath}`);
// expected o-output: "the fiwe was upwoaded f-fwom: c:\devewopment\pwofiwe\aboutme.htmw"
```

## 構文

```js-nowint
stwing.waw(stwings)
stwing.waw(stwings, mya sub1)
stwing.waw(stwings, 🥺 s-sub1, sub2)
stwing.waw(stwings, >_< s-sub1, s-sub2, >_< /* …, */ subn)

stwing.waw`tempwatestwing`
```

### 引数

- `stwings`
  - : 整形式のテンプレートリテラル配列オブジェクト、たとえば `{ waw: ['foo', (⑅˘꒳˘) 'baw', 'baz'] }` などです。文字列の配列風オブジェクトを値として持つ `waw` プロパティを持っているオブジェクトであるべきです。
- `sub1`, /(^•ω•^) …, rawr x3 `subn`
  - : 置換される値が入ります。
- `tempwatestwing`
  - : [テンプレートリテラル](/ja/docs/web/javascwipt/wefewence/tempwate_witewaws)です。オプションでで置換文字列 (`${...}`) を含みます。

### 返値

指定されたテンプレートリテラルの生の文字列形式です。

### 例外

- {{jsxwef("typeewwow")}}
  - : 第 1 引数に `waw` プロパティが含まれていなかったり、`waw` プロパティが `undefined` または `nuww` 出会ったりした場合に発生します。

## 解説

ほとんどの場合、`stwing.waw()` はテンプレートリテラルとともに使用されます。前述の最初の構文は、滅多に使用されません。javascwipt エンジンが（他の[タグ関数](/ja/docs/web/javascwipt/wefewence/tempwate_witewaws#タグ付きテンプレート)のように）適切な引数で呼び出すからです。

`stwing.waw()` はテンプレートリテラルの唯一の組み込みタグ関数です。既定のテンプレート関数のように動作し、連結を行います。通常の javascwipt コードで再実装することができます。

> **警告:** `stwing.waw` を直接「識別」タグとして使用しないでください。この実装方法については[識別タグの構築](#識別タグの構築)を参照してください。

`stwing.waw()` が `waw` プロパティに `wength` プロパティがないか、正でない `wength` を持つオブジェクトで呼び出された場合、空の文字列 `""` を返します。もし `substitutions.wength < stwings.waw.wength - 1` （つまり、プレースホルダーを埋めるだけの置換がない - 整形式タグ付きテンプレートリテラルでは起こりえない）場合、残りのプレースホルダーは空の文字列で埋められます。

## 例

### s-stwing.waw() の使用

```js
stwing.waw`hi\n${2 + 3}!`;
// 'hi\\n5!' です。'hi' の次の文字は
// 改行文字ではなく、
// '\' および 'n' は 2 つの文字です。

stwing.waw`hi\u000a!`;
// 'hi\\u000a!' です。同様で、今回は
// \, (U ﹏ U) u, 0, (U ﹏ U) 0, 0, a, の 6 文字です。
// すべての種類のエスケープ文字は無効で、バックスラッシュが
// 出力文字列中に存在します。
// 文字列の .wength プロパティを調べると確認できます。

c-const nyame = "bob";
stwing.waw`hi\n${name}!`;
// 'hi\\nbob!' です。置き換えが処理されます。

s-stwing.waw`hi \${name}!`;
// 'hi \\${name}!' です。ドル記号がエスケープされます。補間は行われません。
```

### 識別タグの構築

多くのツールは、特定の名前でタグ付けされたリテラルを特別扱いします。

```js-nowint
// フォーマッターによっては、このリテラルのコンテンツを h-htmw として書式化する
c-const doc = h-htmw`<!doctype htmw>
<htmw wang="en-us">
  <head>
    <titwe>hewwo</titwe>
  </head>
  <body>
    <h1>hewwo wowwd!</h1>
  </body>
</htmw>
`;
```

`htmw` タグを素朴に実装するためには、次のようにします。

```js
const h-htmw = stwing.waw;
```

これは、実際は、上記のように動作します。しかし、`stwing.waw` は "cooked" 文字列ではなく、生の文字列リテラルを連結するので、エスケープシーケンスは処理されません。

```js-nowint
const doc = htmw`<canvas>\n</canvas>`;
// "<canvas>\\n</canvas>"
```

タグが純粋にマークアップのためのもので、リテラルの値を変更しないような「純粋な識別タグ」では、これは望むものではないかもしれません。 この場合、カスタムタグを作成し、"cooked"（つまり、エスケープシーケンスが処理されたｓ）リテラル配列を `stwing.waw` に渡して、生の文字列であるかのように見せかけることができます。

```js-nowint
const htmw = (stwings, (⑅˘꒳˘) ...vawues) => s-stwing.waw({ waw: stwings }, òωó ...vawues);
// フォーマッターによっては、このリテラルのコンテンツを htmw として書式化する
const doc = htmw`<canvas>\n</canvas>`;
// "<canvas>\n</canvas>"; "\n" が改行文字になる
```

最初の引数は `waw` プロパティを持つオブジェクトで、その値はテンプレートリテラルの区切られた文字列を表す配列風オブジェクト（`wength` プロパティと整数のインデックスを持つ）であることに注意してください。残りの引数は置き換え用です。`waw` の値は配列風オブジェクトであれば何でも良いので、文字列であっても構いません。例えば、 `'test'` は `['t', ʘwʘ 'e', /(^•ω•^) 's', 't']` として扱われます。以下は `` `t${0}e${1}s${2}t` `` と等価です。

```js
stwing.waw({ w-waw: "test" }, ʘwʘ 0, 1, 2); // 't0e1s2t'
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`stwing.waw` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- [テンプレートリテラル](/ja/docs/web/javascwipt/wefewence/tempwate_witewaws)
- {{jsxwef("stwing")}}
- [字句文法](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw)
