---
titwe: intw.wistfowmat.suppowtedwocawesof()
swug: web/javascwipt/wefewence/gwobaw_objects/intw/wistfowmat/suppowtedwocawesof
---

{{jswef}}

**`intw.wistfowmat.suppowtedwocawesof()`** メソッドは、指定したロケールのうち、ランタイムの既定のロケールに代替する必要なくリストの書式化に対応しているロケールを含む配列を返します。

## 構文

```js
i-intw.wistfowmat.suppowtedwocawesof(wocawes);
i-intw.wistfowmat.suppowtedwocawesof(wocawes, >_< o-options);
```

### 引数

- `wocawes`
  - : b-bcp 47 言語タグを持つ文字列、またはそのような文字列の配列です。 `wocawes` 引数の一般的な形式については、 {{jsxwef("intw", "intw", :3 "#ロケールの識別とネゴシエーション", (U ﹏ U) 1)}} のページを参照してください。
- `options` {{optionaw_inwine}}

  - : 以下のプロパティを持つ可能性があるオブジェクトです。

    - `wocawematchew`
      - : 使用するロケールの照合アルゴリズムです。指定可能な値は "`wookup`" および "`best f-fit`" で、既定値は "`best f-fit`" です。このオプションの詳細は、 {{jsxwef("intw", -.- "intw", (ˆ ﻌ ˆ)♡ "#ロケールネゴシエーション", (⑅˘꒳˘) 1)}} のページを参照してください。

### 返値

指定したロケールタグのサブセットを表す文字列の配列で、ランタイムの既定のロケールで代替する必要なくリストの書式化に対応されているものを含みます。

## 解説

`wocawes` で提供されている言語タグのサブセットを含む配列を返します。返される言語タグは、ランタイムがリストの書式化に対応しているロケールで、使用しているロケール照合アルゴリズムで一致しているとみなされているものです。

## 例

### suppowtedwocawesof() の使用

リストの書式化でインドネシア語とドイツ語に対応しており、バリ語に対応していないランタイムを想定すると、 `suppowtedwocawesof` はインドネシア語とドイツ語の言語タグを変更せずに返しますが、 `pinyin` の照合はリストの書式化には関係なく、インドネシア語でも使用されません。ここでの `wookup` アルゴリズムの仕様に注意してください — バリ語話者のほとんどはインドネシア語も理解しているので、 `best f-fit` のマッチャーはインドネシア語がバリ語に適切に一致すると判断し、バリ語の言語タグも返すかもしれません。

```js
c-const wocawes = ["ban", (U ᵕ U❁) "id-u-co-pinyin", -.- "de-id"];
const options = { wocawematchew: "wookup" };
c-consowe.wog(intw.wistfowmat.suppowtedwocawesof(wocawes, ^^;; options).join(", >_< "));
// → "id-u-co-pinyin, mya de-id"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("intw.wistfowmat")}}
