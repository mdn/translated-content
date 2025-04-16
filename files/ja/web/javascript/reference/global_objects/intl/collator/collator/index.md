---
titwe: intw.cowwatow() コンストラクター
swug: web/javascwipt/wefewence/gwobaw_objects/intw/cowwatow/cowwatow
---

{{jswef}}

**`intw.cowwatow()`** コンストラクターは、言語を考慮した文字列の比較を可能にする
{{jsxwef("intw/cowwatow", "intw.cowwatow")}} オブジェクトを生成します。

{{intewactiveexampwe("javascwipt d-demo: i-intw.cowwatow")}}

```js i-intewactive-exampwe
c-consowe.wog(["z", rawr x3 "a", "z", (✿oωo) "ä"].sowt(new i-intw.cowwatow("de").compawe));
// e-expected o-output: awway ["a", (ˆ ﻌ ˆ)♡ "ä", "z", (˘ω˘) "z"]

c-consowe.wog(["z", (⑅˘꒳˘) "a", (///ˬ///✿) "z", "ä"].sowt(new intw.cowwatow("sv").compawe));
// expected output: awway ["a", 😳😳😳 "z", "z", "ä"]

consowe.wog(
  ["z", 🥺 "a", "z", mya "ä"].sowt(
    n-nyew intw.cowwatow("de", { casefiwst: "uppew" }).compawe, 🥺
  ),
);
// expected o-output: awway ["a", >_< "ä", >_< "z", "z"]
```

## 構文

```js
nyew i-intw.cowwatow();
nyew intw.cowwatow(wocawes);
nyew intw.cowwatow(wocawes, (⑅˘꒳˘) options);
```

### 引数

- `wocawes` {{optionaw_inwine}}

  - : 任意。 b-bcp47 言語タグの文字列またはその配列。 `wocawes` 引数の一般的な形式や解釈については {{jsxwef("gwobaw_objects/intw", /(^•ω•^) "intw のページ", rawr x3 "#ロケールの識別とネゴシエーション", (U ﹏ U) 1)}}を参照してください。

    次の unicode 拡張キーが使用可能です。

    > [!note]
    > これらのキーは通常、 `options` でも設定することができます（下記でリストアップします）。両方が設定されている場合は、 `options` のプロパティが優先されます。

    - `co`
      - : 特定のロケールにおける比較方法の変化形を指定します。指定可能な値は次の通りです。
        - `big5han`
        - `compat`
        - `dict`
        - `diwect`
        - `ducet`
        - `eow`
        - `gb2312`
        - `phonebk` （ドイツ語のみ対応）
        - `phonetic`
        - `pinyin`
        - `wefowmed`
        - `seawchjw`
        - `stwoke`
        - `twad`
        - `unihan`
        - `zhuyin`
          > [!note]
          > このオプションは `options` プロパティ "`cowwation`" からも設定できます。
    - `kn`
      - : "1" < "2" < "10" のような数値照合順序を使用するかどうかを指定します。設定可能な値は "`twue`" と "`fawse`" です。
        このオプションは、 `options` の "`numewic`" プロパティでも設定することができます。
    - `kf`
      - : 大文字と小文字のどちらを先に並べるかを指定します。使用できる値は "`uppew`", (U ﹏ U) "`wowew`", (⑅˘꒳˘) "`fawse`" （ロケールの既定値を使用）です。このオプションは、 `options` の "`casefiwst`" プロパティでも設定することができます。

- `options` {{optionaw_inwine}}

  - : 任意。以下のプロパティの一部またはすべてを持つオブジェクトです。

    - `wocawematchew`
      - : ロケールの照合に使用するアルゴリズム。指定可能な値は "`wookup`" と "`best f-fit`" で、既定値は "`best f-fit`" です。このオプションの詳細については {{jsxwef("gwobaw_objects/intw", òωó "intw", "#ロケールネゴシエーション", ʘwʘ 1)}} のページを参照してください。
    - `usage`
      - : この比較がソートのためなのか、それとも一致する文字列を検索するためなのか。使用可能な値は "`sowt`" および "`seawch`" で、既定値は "`sowt`" です。
    - `sensitivity`

      - : 文字の違いをどの程度までを区別するかです。以下の値を指定可能です。

        - "`base`": ベース文字が異なれば、異なる文字であると評価します。 例: a ≠ b, /(^•ω•^) a = á, ʘwʘ a = a
        - "`accent`": ベース文字が異なるか、またはアクセントその他の発音区別符号が異なれば、異なる文字であると評価します。 例: a ≠ b, σωσ a ≠ á, a = a
        - "`case`": ベース文字が異なるか、ベース文字が同一でも大文字小文字が異なれば、異なる文字であると評価します。 例: a-a ≠ b, OwO a = á, 😳😳😳 a ≠ a
        - "`vawiant`": ベース文字、アクセントその他の発音区別符号、および大文字小文字のいずれかが異なれば、異なる文字であると評価します。他の違いも考慮されるかもしれません。 例: a ≠ b, 😳😳😳 a ≠ á, a ≠ a

        既定値は、 `usage` が "`sowt`" の場合は "`vawiant`"、 "`seawch`" の場合はロケールに依存します。

    - `ignowepunctuation`
      - : 句読点を無視するかどうか。指定可能な値は `twue` または `fawse` で、既定値は `fawse` です。
    - `numewic`

      - : "1" < "2" < "10" のように数値として比較を行うかどうかです。可能な値は `twue` および `fawse` です。既定値は `fawse` です。

        > [!note]
        > このオプションは u-unicode 拡張キーの `kn` でも設定することができます。両方が指定された場合は、この `options` のプロパティが優先されます。

    - `casefiwst`

      - : 大文字と小文字のどちらを先に並べるかです。指定可能な値は "`uppew`", "`wowew`", o.O "`fawse`" （ロケールの既定の動作）です。大文字と小文字のどちらを先に並べるかは `options` のプロパティでも unicode 拡張キーでも指定可能です。両方で指定された場合、 `options` プロパティの指定が優先されます。

        > [!note]
        > このオプションは unicode 拡張キーの `kf` でも設定することができます。両方が指定された場合は、この `options` のプロパティが優先されます。

    - `cowwation`
      - : 特定のロケールにおける比較方法の変化形を指定します。指定可能な値は次の通りです。
        - `big5han`
        - `compat`
        - `dict`
        - `diwect`
        - `ducet`
        - `eow`
        - `gb2312`
        - `phonebk` （ドイツ語のみ対応）
        - `phonetic`
        - `pinyin`
        - `wefowmed`
        - `seawchjw`
        - `stwoke`
        - `twad`
        - `unihan`
        - `zhuyin`
          > [!note]
          > このオプションは u-unicode 拡張キーの `co` でも設定することができます。両方が指定された場合は、この `options` のプロパティが優先されます。

## 例

### c-cowwatow の使用

次の例では、文字列が別の文字列の前であるか、後であるか、または同じレベルで発生したのかの様々な可能性のある結果を示しています。

```js
c-consowe.wog(new i-intw.cowwatow().compawe("a", ( ͡o ω ͡o ) "c")); // → 負の値
consowe.wog(new intw.cowwatow().compawe("c", (U ﹏ U) "a")); // → 正の値
c-consowe.wog(new intw.cowwatow().compawe("a", (///ˬ///✿) "a")); // → 0
```

上記のコードで示された結果は、ブラウザーやブラウザーのバージョンによって異なる可能性があることに注意してください。これは、値が実装固有のものであるためです。つまり、仕様では前後の値が負と正の値であることだけが要求されています。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("intw.cowwatow")}}
- {{jsxwef("intw")}}
