---
title: Hoisting (巻き上げ、ホイスティング)
slug: Glossary/Hoisting
l10n:
  sourceCommit: 8fb5853ceee5db8ac6e1c564c6dda4b3f5ec86c5
---

{{GlossarySidebar}}

JavaScript の**巻き上げ** (Hoisting) は、インタープリターがコードの実行前に、関数、変数、クラス、インポートの宣言をそのスコープの先頭に移動するように見えるプロセスを指します。

「巻き上げ」は ECMAScript 仕様書で規範的に定義されている用語ではありません。仕様書では宣言のグループを [_HoistableDeclaration_](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#prod-HoistableDeclaration) として定義していますが、これは [`function`](/ja/docs/Web/JavaScript/Reference/Statements/function)、[`function*`](/ja/docs/Web/JavaScript/Reference/Statements/function*)、[`async function`](/ja/docs/Web/JavaScript/Reference/Statements/async_function)、[`async function*`](/ja/docs/Web/JavaScript/Reference/Statements/async_function*) 宣言しか含んでいません。巻き上げは、異なる形でではありますが、 [`var`](/ja/docs/Web/JavaScript/Reference/Statements/var) 宣言の機能としても多く考えられています。俗な言い方をすれば、以下のような動作はすべて巻き上げと見なされます。

1. スコープ内の宣言行よりも前で変数の値を使用すること。（「値の巻き上げ」）
2. 変数がスコープ内の宣言行よりも前で参照しても {{jsxref("ReferenceError")}} が発生せず、値が常に [`undefined`](/ja/docs/Web/JavaScript/Reference/Global_Objects/undefined) であること。（「宣言の巻き上げ」）
3. 変数の宣言により、スコープ内のそれが宣言された行よりも前の動作が変化すること。
4. 宣言の副作用として、宣言を含む残りのコードの評価が行われる前に、宣言の副作用が発生すること。

上記の 4 つの関数宣言はタイプ 1 の動作で巻き上げが行われます。 `var` 宣言はタイプ 2 の動作で巻き上げが行われます。 [`let`](/ja/docs/Web/JavaScript/Reference/Statements/let), [`const`](/ja/docs/Web/JavaScript/Reference/Statements/const), [`class`](/ja/docs/Web/JavaScript/Reference/Statements/class) 宣言（まとめて字句宣言とも呼ばれる）はタイプ 3 の動作で巻き上げが行われます。 [`import`](/ja/docs/Web/JavaScript/Reference/Statements/import) 宣言はタイプ 1 とタイプ 4 の動作で巻き上げが行われます。

人によっては `let`, `const`, `class` を巻き上げが行われないと見なしますが、それは[一時的デッドゾーン](/ja/docs/Web/JavaScript/Reference/Statements/let#一時的なデッドゾーン_tdz)で宣言前に変数を使用することを厳しく禁止しているからです。巻き上げは普遍的に同意された用語ではないので、この反論は問題ありません。しかし、一時的デッドゾーンはそのスコープで他にも観測可能な変化を発生させることがあり、これは何らかの形で巻き上げがあるといえます。

```js
const x = 1;
{
  console.log(x); // ReferenceError
  const x = 2;
}
```

もし `const x = 2` 宣言がすべて巻き上げられなければ（実行されたときだけ有効になるように）、`console.log(x)` 文は上のスコープから `x` 値を読み取ることができるはずです。しかし、 `const` 宣言が定義されているスコープ全体をまだ「汚染」しているため、 `console.log(x)` 文はまだ初期化されていない `const x = 2` 宣言から `x` を読み込み、 {{jsxref("ReferenceError")}} を発生します。それでも、字句の宣言をnon-hoistingとして特徴付ける方が有益かもしれません。なぜなら、実用的な視点から見ると、これらの宣言の巻き上げは何の意味ももたらさないからです。

なお、以下は巻き上げの形式ではありません。

```js
{
  var x = 1;
}
console.log(x); // 1
```

これは「宣言する前にアクセスする」のではなく、単に `var` 宣言がブロックにスコープされていないからです。

巻き上げについての詳細は、次の記事を参照してください。

- `var`/`let`/`const` の巻き上げ — [文法とデータ型ガイド](/ja/docs/Web/JavaScript/Guide/Grammar_and_types#変数の巻き上げ)
- `function` の巻き上げ — [関数ガイド](/ja/docs/Web/JavaScript/Guide/Functions#関数の巻き上げ)
- `class` の巻き上げ — [クラスガイド](/ja/docs/Web/JavaScript/Guide/Using_classes#クラス宣言の巻き上げ)
- `import` の巻き上げ — [JavaScript モジュール](/ja/docs/Web/JavaScript/Guide/Modules#インポート宣言は巻き上げされる)

## 関連情報

- [`var` 文](/ja/docs/Web/JavaScript/Reference/Statements/var) — MDN
- [`let` 文](/ja/docs/Web/JavaScript/Reference/Statements/let) — MDN
- [`const` 文](/ja/docs/Web/JavaScript/Reference/Statements/const) — MDN
- [`function` 文](/ja/docs/Web/JavaScript/Reference/Statements/function) — MDN
