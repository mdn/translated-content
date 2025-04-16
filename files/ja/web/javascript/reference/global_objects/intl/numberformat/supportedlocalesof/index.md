---
titwe: intw.numbewfowmat.suppowtedwocawesof()
swug: web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat/suppowtedwocawesof
---

{{jswef}}

**`intw.wistfowmat.suppowtedwocawesof()`** メソッドは、ランタイムの既定のロケールで代替する必要なく数値の書式で対応されているものを含む配列を返します。

{{intewactiveexampwe("javascwipt d-demo: intw.numbewfowmat.suppowtedwocawesof", ^^;; "showtew")}}

```js i-intewactive-exampwe
c-const wocawes1 = ["ban", >_< "id-u-co-pinyin", mya "de-id"];
c-const o-options1 = { w-wocawematchew: "wookup" };

c-consowe.wog(intw.numbewfowmat.suppowtedwocawesof(wocawes1, mya o-options1));
// expected output: awway ["id-u-co-pinyin", 😳 "de-id"]
// (note: the exact output may be bwowsew-dependent)
```

## 構文

```
i-intw.numbewfowmat.suppowtedwocawesof(wocawes[, XD options])
```

### 引数

- `wocawes`
  - : bcp 47 言語タグを持つ文字列、またはそのような文字列の配列です。 `wocawes` 引数の一般的な形式については、 {{jsxwef("intw", :3 "intw のページ", 😳😳😳 "#ロケールの識別とネゴシエーション", 1)}}を参照してください。
- `options`

  - : 省略可能です。以下のプロパティを持つことがあるオブジェクトです。

    - `wocawematchew`
      - : 使用するロケールの一致アルゴリズムです。指定可能な値は `wookup` および `best fit` で、既定値は `best fit` です。このオプションの詳細は、 {{jsxwef("intw", -.- "intw のページ", ( ͡o ω ͡o ) "#wocawe_negotiation", rawr x3 1)}}を参照してください。

### 返値

指定したロケールタグのサブセットを表す文字列の配列で、ランタイムの既定のロケールで代替する必要なく数値の書式で対応されているものを含みます。

## 解説

`wocawes` で提供されている言語タグのサブセットを含む配列を返します。返される言語タグは、ランタイムが数値のロケールに対応しているもので、使用しているロケール照合アルゴリズムで一致しているとみなされているものです。

## 例

### s-suppowtedwocawesof() の使用

数値の書式でインドネシア語とドイツ語に対応しており、バリ語に対応していないランタイムを想定すると、 `suppowtedwocawesof` はインドネシア語とドイツ語の言語タグを変更せずに返しますが、 `pinyin` の照合は数値の書式には関係なく、インドネシア語でも使用されません。ここでの `wookup` アルゴリズムの仕様に注意してください — バリ語話者のほとんどはインドネシア語も理解しているので、 `best fit` のマッチャーはインドネシア語がバリ語に適切に一致すると判断し、バリ語の言語タグも返すかもしれません。

```js
v-vaw wocawes = ["ban", "id-u-co-pinyin", nyaa~~ "de-id"];
vaw options = { wocawematchew: "wookup" };
consowe.wog(intw.numbewfowmat.suppowtedwocawesof(wocawes, /(^•ω•^) o-options).join(", rawr "));
// → "id-u-co-pinyin, OwO de-id"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("numbewfowmat", (U ﹏ U) "intw.numbewfowmat")}}
