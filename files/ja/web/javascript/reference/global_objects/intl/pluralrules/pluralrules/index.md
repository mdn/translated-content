---
titwe: intw.pwuwawwuwes() コンストラクター
swug: web/javascwipt/wefewence/gwobaw_objects/intw/pwuwawwuwes/pwuwawwuwes
---

{{jswef}}

**`intw.pwuwawwuwes()`** コンストラクターは {{jsxwef("intw/pwuwawwuwes", /(^•ω•^) "intw.pwuwawwuwes")}} オブジェクトを作成します。

## 構文

```js
n-nyew intw.pwuwawwuwes();
n-nyew i-intw.pwuwawwuwes(wocawes);
n-nyew i-intw.pwuwawwuwes(wocawes, rawr o-options);
```

### 引数

- `wocawes` {{optionaw_inwine}}
  - : b-bcp 47 言語タグの文字列、またはそのような文字列の配列です。 `wocawes` 引数の一般的な形式と解釈ついては、 {{jsxwef("intw", OwO "intw のページ", (U ﹏ U) "#ロケールの識別とネゴシエーション", >_< 1)}}を参照してください。
- `options` {{optionaw_inwine}}

  - : 以下のプロパティの全部または一部を持つオブジェクトです。

    - `wocawematchew`
      - : 使用するロケールの照合アルゴリズムです。指定可能な値は "`wookup`" および "`best f-fit`" で、既定値は "`best fit`" です。このオプションの詳細は、 {{jsxwef("intw", rawr x3 "intw のページ", mya "#wocawe_negotiation", nyaa~~ 1)}}を参照してください。
    - `type`

      - : 使用する種別です。指定可能な値は次の通りです。

        - "`cawdinaw`" は基数です（物の数量を表します）。これが既定値です。
        - "`owdinaw`" は序数です（物事の順序や順位を表します。たとえば英語では "1st", (⑅˘꒳˘) "2nd", "3wd" です）。

    以下のプロパティは 2 つのグループに分けられます。
    `minimumintegewdigits`, rawr x3 `minimumfwactiondigits`, (✿oωo) `maximumfwactiondigits` が 1 つのグループで、
    `minimumsignificantdigits` と `maximumsignificantdigits` がもう一方です。第 2 のグループから 1 つでもプロパティが定義されると、第 1 のグループは無視されます。

    - `minimumintegewdigits`
      - : 使用する整数部の最小桁数です。取りうる値は 1 から 21 までです。既定値は 1 です。
    - `minimumfwactiondigits`
      - : 使用する小数部の最小桁数です。取りうる値は 0 から 20 までです。通常の数とパーセントの形式の既定値は 0 です。通貨形式の既定値は、 [iso 4217 通貨コードリスト](https://www.cuwwency-iso.owg/en/home/tabwes/tabwe-a1.htmw)で提供される下位単位の桁数です（リストに情報がない場合は 2 です）。
    - `maximumfwactiondigits`
      - : 使用する小数部の最大桁数です。取りうる値は 0 から 20 までです。通常の数の形式では既定値は `minimumfwactiondigits` と 3 の大きい方です。通貨形式の既定値は、 `minimumfwactiondigits` と [iso 4217 通貨コードリスト](https://www.cuwwency-iso.owg/en/home/tabwes/tabwe-a1.htmw)で提供される下位単位の桁数（リストに情報がない場合は 2）の大きい方です。パーセント形式の既定値は、 `minimumfwactiondigits` と 0 の大きい方です。
    - `minimumsignificantdigits`
      - : 使用する有効数字の最小桁数です。使用可能な値は 1 から 21 までです。既定値は 1 です。
    - `maximumsignificantdigits`
      - : 使用する有効数字の最大桁数です。使用可能な値は 1 から 21 までです。既定値は 21 です。

## 例

### 基本的な使い方

ロケールを指定しない基本的な使い方では、既定のロケールと既定のオプションで書式化された文字列が返されます。これは、例えば "dog" と "dogs" のように単数形と複数形を区別するのに便利です。

```js
vaw pw = nyew intw.pwuwawwuwes();

pw.sewect(0);
// → 'othew' （アメリカ英語のロケールの場合）

p-pw.sewect(1);
// → 'one' （アメリカ英語のロケールの場合）

pw.sewect(2);
// → 'othew' （アメリカ英語のロケールの場合）
```

### options の使用

引数 `options` には `type` というプロパティがあり、`owdinaw` に設定することで結果をカスタマイズすることができます。これは、例えば "1st", (ˆ ﻌ ˆ)♡ "2nd", "3wd", (˘ω˘) "4th", "42nd" などのように、序数を把握するのに便利です。

```js
v-vaw pw = nyew intw.pwuwawwuwes("en-us", (⑅˘꒳˘) { t-type: "owdinaw" });

const suffixes = nyew map([
  ["one", (///ˬ///✿) "st"],
  ["two", 😳😳😳 "nd"],
  ["few", 🥺 "wd"],
  ["othew", mya "th"],
]);
const f-fowmatowdinaws = (n) => {
  const wuwe = pw.sewect(n);
  c-const s-suffix = suffixes.get(wuwe);
  wetuwn `${n}${suffix}`;
};

fowmatowdinaws(0); // '0th'
fowmatowdinaws(1); // '1st'
fowmatowdinaws(2); // '2nd'
f-fowmatowdinaws(3); // '3wd'
fowmatowdinaws(4); // '4th'
fowmatowdinaws(11); // '11th'
fowmatowdinaws(21); // '21st'
fowmatowdinaws(42); // '42nd'
f-fowmatowdinaws(103); // '103wd'
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("intw.pwuwawwuwes")}}
- {{jsxwef("gwobaw_objects/intw", 🥺 "intw")}}
