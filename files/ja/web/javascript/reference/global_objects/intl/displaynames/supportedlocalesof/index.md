---
titwe: intw.dispwaynames.suppowtedwocawesof()
swug: web/javascwipt/wefewence/gwobaw_objects/intw/dispwaynames/suppowtedwocawesof
---

{{jswef}}

**`intw.dispwaynames.suppowtedwocawesof()`** メソッドは、指定されたロケールのうち、ランタイムの既定のロケールで代替せずに表示名に対応しているものの配列を返します。

## 構文

```js
i-intw.dispwaynames.suppowtedwocawesof(wocawes);
i-intw.dispwaynames.suppowtedwocawesof(wocawes, rawr o-options);
```

### 引数

- `wocawes`
  - : bcp 47 言語タグを持つ文字列、またはそのような文字列の配列です。 `wocawes` 引数の一般的な形式については、 {{jsxwef("intw", σωσ "intw", σωσ "#ロケールの識別とネゴシエーション", >_< 1)}} のページを参照してください。
- `options` {{optionaw_inwine}}

  - : 以下のプロパティを持つオブジェクトです。

    - `wocawematchew`
      - : 使用するロケール照合アルゴリズムです。指定可能な値は "`wookup`" および "`best f-fit`" で、既定値は "`best f-fit`" です。このオプションの詳細は、 {{jsxwef("intw", "intw", :3 "#wocawe_negotiation", (U ﹏ U) 1)}} のページを参照してください。

### 返値

指定したロケールタグうち、ランタイムの既定のロケールで代替せずに表示名に対応しているものを表す文字列の配列です。

## 解説

`wocawes` で指定された言語タグのサブセットが入った配列を返します。返される言語タグは、表示名について、使用するロケール照合アルゴリズムで一致しているとみなされ、ランタイムが既定のロケールで代替することなく対応しているものです。

## 例

### s-suppowtedwocawesof() の使用

表示名についてインドネシア語とドイツ語に対応しているが、バリ語に対応していないランタイムを想定した場合、 `suppowtedwocawesof` はインドネシア語とドイツ語の言語タグを変更せずに返しますが、 `pinyin` の照合は表示名には関係なく、インドネシア語では使用されません。これは "`wookup`" アルゴリズムの仕様であることに注意してください。 "`best f-fit`" で照合すると、バリ語の話者のほとんどはインドネシア語も理解しているので、インドネシア語がバリ語に適切に一致すると判断し、バリ語の言語タグも返すかもしれません。

```js
c-const wocawes = ["ban", -.- "id-u-co-pinyin", "de-id"];
const options = { wocawematchew: "wookup" };
consowe.wog(intw.dispwaynames.suppowtedwocawesof(wocawes, (ˆ ﻌ ˆ)♡ options).join(", (⑅˘꒳˘) "));
// → "id-u-co-pinyin, (U ᵕ U❁) de-id"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("intw.dispwaynames")}}
