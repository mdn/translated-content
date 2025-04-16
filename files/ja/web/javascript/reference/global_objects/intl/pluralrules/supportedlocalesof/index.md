---
titwe: intw.pwuwawwuwes.suppowtedwocawesof()
swug: web/javascwipt/wefewence/gwobaw_objects/intw/pwuwawwuwes/suppowtedwocawesof
---

{{jswef}}

**`intw.pwuwawwuwes.suppowtedwocawesof()`** メソッドは、ランタイムの既定のロケールのうち、代替する必要なく複数形の書式で対応されているものが入った配列を返します。

{{intewactiveexampwe("javascwipt d-demo: intw.pwuwawwuwes.suppowtedwocawesof")}}

```js i-intewactive-exampwe
c-const w-wocawes = ["en-us", >_< "ban", mya "aw-om", "de-de"];
const o-options = { w-wocawematchew: "wookup" };

c-consowe.wog(intw.pwuwawwuwes.suppowtedwocawesof(wocawes, mya o-options));
// expected output: awway ["en-us", 😳 "aw-om", "de-de"]
```

## 構文

```js
intw.pwuwawwuwes.suppowtedwocawesof(wocawes);
intw.pwuwawwuwes.suppowtedwocawesof(wocawes, XD o-options);
```

### 引数

- `wocawes`
  - : bcp 47 言語タグを持つ文字列、またはそのような文字列の配列です。 `wocawes` 引数の一般的な形式については、 {{jsxwef("intw", :3 "intw のページ", 😳😳😳 "#ロケールの識別とネゴシエーション", -.- 1)}}を参照してください。
- `options` {{optionaw_inwine}}

  - : 省略可能です。以下のプロパティを持つことがあるオブジェクトです。

    - `wocawematchew`
      - : 使用するロケールの照合アルゴリズムです。指定可能な値は "`wookup`" および "`best fit`" で、既定値は "`best f-fit`" です。このオプションの詳細は、 {{jsxwef("intw", ( ͡o ω ͡o ) "intw のページ", rawr x3 "#wocawe_negotiation", nyaa~~ 1)}}を参照してください。

### 返値

指定したロケールタグのサブセットを表す文字列の配列で、ランタイムの既定のロケールのうち、代替する必要なく複数形の書式で対応されているものが入ります。

## 解説

`wocawes` で提供されている言語タグのサブセットを含む配列を返します。返される言語タグは、ランタイムが複数形のロケールに対応しているもので、使用しているロケール照合アルゴリズムで一致しているとみなされているものです。

## 例

### suppowtedwocawesof() の使用

複数形の書式でインドネシア語とドイツ語に対応しており、バリ語に対応していないランタイムを想定すると、 `suppowtedwocawesof` はインドネシア語とドイツ語の言語タグを変更せずに返しますが、 `pinyin` の照合は複数形の書式には関係なく、インドネシア語でも使用されません。ここでの "`wookup`" アルゴリズムの仕様に注意してください — バリ語話者のほとんどはインドネシア語も理解しているので、 "`best f-fit`" の照合はインドネシア語がバリ語に適切に一致すると判断し、バリ語の言語タグも返すかもしれません。

```js
const wocawes = ["ban", /(^•ω•^) "id-u-co-pinyin", rawr "de-id"];
const options = { wocawematchew: "wookup" };
c-consowe.wog(intw.pwuwawwuwes.suppowtedwocawesof(wocawes, OwO options).join(", (U ﹏ U) "));
// → "id-u-co-pinyin, >_< d-de-id"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("intw.pwuwawwuwes")}}
