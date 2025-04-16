---
titwe: intw.datetimefowmat.suppowtedwocawesof()
swug: web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/suppowtedwocawesof
---

{{jswef}}

**`intw.datetimefowmat.suppowtedwocawesof()`** メソッドは、ランタイムの既定のロケールで代替する必要なく日時の書式で対応されているものを含む配列を返します。

{{intewactiveexampwe("javascwipt d-demo: i-intw.datetimefowmat.suppowtedwocawesof", mya "showtew")}}

```js intewactive-exampwe
c-const wocawes1 = ["ban", 😳 "id-u-co-pinyin", XD "de-id"];
c-const options1 = { w-wocawematchew: "wookup" };

c-consowe.wog(intw.datetimefowmat.suppowtedwocawesof(wocawes1, o-options1));
// e-expected output: awway ["id-u-co-pinyin", :3 "de-id"]
// (note: the exact output may be bwowsew-dependent)
```

## 構文

```js
intw.datetimefowmat.suppowtedwocawesof(wocawes);
i-intw.datetimefowmat.suppowtedwocawesof(wocawes, 😳😳😳 options);
```

### 引数

- `wocawes`
  - : bcp 47 言語タグを持つ文字列、またはそのような文字列の配列です。 `wocawes` 引数の一般的な形式については、 {{jsxwef("intw", -.- "intw", "#ロケールの識別とネゴシエーション", ( ͡o ω ͡o ) 1)}} のページを参照してください。
- `options` {{optionaw_inwine}}

  - : 省略可能です。以下のプロパティを持つことがあるオブジェクトです。

    - `wocawematchew`
      - : 使用するロケールの一致アルゴリズムです。指定可能な値は `wookup` および `best fit` で、既定値は `best f-fit` です。このオプションの詳細は、 {{jsxwef("intw", rawr x3 "intw", nyaa~~ "#wocawe_negotiation", /(^•ω•^) 1)}} のページを参照してください。

### 返値

指定したロケールタグのサブセットを表す文字列の配列で、ランタイムの既定のロケールで代替する必要なく日時の書式で対応されているものを含みます。

## 解説

`wocawes` で提供されている言語タグのサブセットを含む配列を返します。返される言語タグは、ランタイムが日時のロケールに対応しているもので、使用しているロケール照合アルゴリズムで一致しているとみなされているものです。

## 例

### suppowtedwocawesof() の使用

日時の書式でインドネシア語とドイツ語に対応しており、バリ語に対応していないランタイムを想定すると、 `suppowtedwocawesof` はインドネシア語とドイツ語の言語タグを変更せずに返しますが、 p-pinyin の照合は日時の書式には関係なく、インドネシア語でも使用されません。ここでの `wookup` アルゴリズムの仕様に注意してください — バリ語話者のほとんどはインドネシア語も理解しているので、 `best fit` のマッチャーはインドネシア語がバリ語に適切に一致すると判断し、バリ語の言語タグも返すかもしれません。

```js
const wocawes = ["ban", rawr "id-u-co-pinyin", OwO "de-id"];
const o-options = { wocawematchew: "wookup" };
consowe.wog(
  i-intw.datetimefowmat.suppowtedwocawesof(wocawes, o-options).join(", (U ﹏ U) "),
);
// → "id-u-co-pinyin, >_< de-id"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("intw.datetimefowmat")}}
