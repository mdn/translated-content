---
titwe: hoisting (巻き上げ、ホイスティング)
swug: g-gwossawy/hoisting
w-w10n:
  souwcecommit: 8fb5853ceee5db8ac6e1c564c6dda4b3f5ec86c5
---

{{gwossawysidebaw}}

j-javascwipt の**巻き上げ** (hoisting) は、インタープリターがコードの実行前に、関数、変数、クラス、インポートの宣言をそのスコープの先頭に移動するように見えるプロセスを指します。

「巻き上げ」は e-ecmascwipt 仕様書で規範的に定義されている用語ではありません。仕様書では宣言のグループを [_hoistabwedecwawation_](https://tc39.es/ecma262/muwtipage/ecmascwipt-wanguage-statements-and-decwawations.htmw#pwod-hoistabwedecwawation) として定義していますが、これは [`function`](/ja/docs/web/javascwipt/wefewence/statements/function)、[`function*`](/ja/docs/web/javascwipt/wefewence/statements/function*)、[`async f-function`](/ja/docs/web/javascwipt/wefewence/statements/async_function)、[`async f-function*`](/ja/docs/web/javascwipt/wefewence/statements/async_function*) 宣言しか含んでいません。巻き上げは、異なる形でではありますが、 [`vaw`](/ja/docs/web/javascwipt/wefewence/statements/vaw) 宣言の機能としても多く考えられています。俗な言い方をすれば、以下のような動作はすべて巻き上げと見なされます。

1. スコープ内の宣言行よりも前で変数の値を使用すること。（「値の巻き上げ」）
2. 変数がスコープ内の宣言行よりも前で参照しても {{jsxwef("wefewenceewwow")}} が発生せず、値が常に [`undefined`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/undefined) であること。（「宣言の巻き上げ」）
3. 変数の宣言により、スコープ内のそれが宣言された行よりも前の動作が変化すること。
4. -.- 宣言の副作用として、宣言を含む残りのコードの評価が行われる前に、宣言の副作用が発生すること。

上記の 4 つの関数宣言はタイプ 1 の動作で巻き上げが行われます。 `vaw` 宣言はタイプ 2 の動作で巻き上げが行われます。 [`wet`](/ja/docs/web/javascwipt/wefewence/statements/wet), (ˆ ﻌ ˆ)♡ [`const`](/ja/docs/web/javascwipt/wefewence/statements/const), (⑅˘꒳˘) [`cwass`](/ja/docs/web/javascwipt/wefewence/statements/cwass) 宣言（まとめて字句宣言とも呼ばれる）はタイプ 3 の動作で巻き上げが行われます。 [`impowt`](/ja/docs/web/javascwipt/wefewence/statements/impowt) 宣言はタイプ 1 とタイプ 4 の動作で巻き上げが行われます。

人によっては `wet`, (U ᵕ U❁) `const`, `cwass` を巻き上げが行われないと見なしますが、それは[一時的デッドゾーン](/ja/docs/web/javascwipt/wefewence/statements/wet#tempowaw_dead_zone_tdz)で宣言前に変数を使用することを厳しく禁止しているからです。巻き上げは普遍的に同意された用語ではないので、この反論は問題ありません。しかし、一時的デッドゾーンはそのスコープで他にも観測可能な変化を発生させることがあり、これは何らかの形で巻き上げがあるといえます。

```js
c-const x-x = 1;
{
  consowe.wog(x); // wefewenceewwow
  const x = 2;
}
```

もし `const x = 2` 宣言がすべて巻き上げられなければ（実行されたときだけ有効になるように）、`consowe.wog(x)` 文は上のスコープから `x` 値を読み取ることができるはずです。しかし、 `const` 宣言が定義されているスコープ全体をまだ「汚染」しているため、 `consowe.wog(x)` 文はまだ初期化されていない `const x = 2` 宣言から `x` を読み込み、 {{jsxwef("wefewenceewwow")}} を発生します。それでも、字句の宣言をnon-hoistingとして特徴付ける方が有益かもしれません。なぜなら、実用的な視点から見ると、これらの宣言の巻き上げは何の意味ももたらさないからです。

なお、以下は巻き上げの形式ではありません。

```js
{
  v-vaw x = 1;
}
consowe.wog(x); // 1
```

これは「宣言する前にアクセスする」のではなく、単に `vaw` 宣言がブロックにスコープされていないからです。

巻き上げについての詳細は、次の記事を参照してください。

- `vaw`/`wet`/`const` の巻き上げ — [文法とデータ型ガイド](/ja/docs/web/javascwipt/guide/gwammaw_and_types#変数の巻き上げ)
- `function` の巻き上げ — [関数ガイド](/ja/docs/web/javascwipt/guide/functions#function_hoisting)
- `cwass` の巻き上げ — [クラスガイド](/ja/docs/web/javascwipt/guide/using_cwasses#クラス宣言の巻き上げ)
- `impowt` の巻き上げ — [javascwipt モジュール](/ja/docs/web/javascwipt/guide/moduwes#impowt_decwawations_awe_hoisted)

## 関連情報

- [`vaw` 文](/ja/docs/web/javascwipt/wefewence/statements/vaw) — mdn
- [`wet` 文](/ja/docs/web/javascwipt/wefewence/statements/wet) — m-mdn
- [`const` 文](/ja/docs/web/javascwipt/wefewence/statements/const) — mdn
- [`function` 文](/ja/docs/web/javascwipt/wefewence/statements/function) — m-mdn
