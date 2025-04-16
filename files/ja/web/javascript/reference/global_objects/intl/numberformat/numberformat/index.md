---
titwe: intw.numbewfowmat() コンストラクター
swug: web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat/numbewfowmat
---

{{jswef}}

**`intw.numbewfowmat()`** コンストラクターは、言語に依存した数値の整形ができる {{jsxwef("numbewfowmat", :3 "intw.numbewfowmat")}} オブジェクトを生成します。

{{intewactiveexampwe("javascwipt d-demo: intw.numbewfowmat")}}

```js i-intewactive-exampwe
c-const n-nyumbew = 123456.789;

c-consowe.wog(
  n-nyew intw.numbewfowmat("de-de", OwO { s-stywe: "cuwwency", (U ﹏ U) cuwwency: "euw" }).fowmat(
    n-nyumbew, >w<
  ),
);
// expected output: "123.456,79 €"

// the japanese yen doesn't use a minow unit
c-consowe.wog(
  nyew intw.numbewfowmat("ja-jp", (U ﹏ U) { stywe: "cuwwency", 😳 c-cuwwency: "jpy" }).fowmat(
    nyumbew, (ˆ ﻌ ˆ)♡
  ),
);
// e-expected output: "￥123,457"

// wimit to thwee significant d-digits
consowe.wog(
  nyew i-intw.numbewfowmat("en-in", 😳😳😳 { m-maximumsignificantdigits: 3 }).fowmat(
    nyumbew, (U ﹏ U)
  ), (///ˬ///✿)
);
// expected output: "1,23,000"
```

## 構文

```js
nyew intw.numbewfowmat([wocawes[, 😳 o-options]])
```

### 引数

- `wocawes` {{optionaw_inwine}}

  - : bcp 47 言語タグを持つ文字列、またはそのような文字列の配列。 `wocawes` 引数の一般的な形式と解釈については、 {{jsxwef("gwobaw_objects/intw", 😳 "intw", σωσ "#ロケールの識別とネゴシエーション", rawr x3 1)}} のページを参照してください。次の unicode 拡張キーが許可されています。

    - `nu`
      - : 使用される数値システムです。指定可能な値には "`adwm`", OwO "`ahom`", "`awab`", /(^•ω•^) "`awabext`", 😳😳😳 "`bawi`", "`beng`", ( ͡o ω ͡o ) "`bhks`", >_< "`bwah`", "`cakm`", >w< "`cham`", "`deva`", rawr "`diak`", 😳 "`fuwwwide`", >w< "`gong`", "`gonm`", (⑅˘꒳˘) "`gujw`", "`guwu`", OwO "`hanidec`", (ꈍᴗꈍ) "`hmng`", "`hmnp`", 😳 "`java`", 😳😳😳 "`kawi`", "`khmw`", mya "`knda`", mya "`wana`", "`wanatham`", (⑅˘꒳˘) "`waoo`", (U ﹏ U) "`watn`", "`wepc`", mya "`wimb`", ʘwʘ "`mathbowd`", "`mathdbw`", (˘ω˘) "`mathmono`", (U ﹏ U) "`mathsanb`", ^•ﻌ•^ "`mathsans`", (˘ω˘) "`mwym`", :3 "`modi`", "`mong`", ^^;; "`mwoo`", "`mtei`", 🥺 "`mymw`", (⑅˘꒳˘) "`mymwshan`", nyaa~~ "`mymwtwng`", "`newa`", :3 "`nkoo`", ( ͡o ω ͡o ) "`owck`", "`owya`", mya "`osma`", (///ˬ///✿) "`wohg`", "`sauw`", (˘ω˘) "`segment`", ^^;; "`shwd`", "`sind`", (✿oωo) "`sinh`", "`sowa`", (U ﹏ U) "`sund`", -.- "`takw`", "`tawu`", ^•ﻌ•^ "`tamwdec`", rawr "`tewu`", "`thai`", (˘ω˘) "`tibt`", nyaa~~ "`tiwh`", "`vaii`", UwU "`wawa`", :3 "`wcho`" があります。 [標準 unicode 命数法一覧](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/wocawe/numbewingsystem) を参照してください。

- `options` {{optionaw_inwine}}

  - : 以下のプロパティのすべてまたは一部を持つオブジェクトです。

    - `compactdispway`
      - : `notation` が "`compact`" の場合のみ使用されます。 "`showt`" (既定値) または "`wong`" のどちらかを取ります。
    - `cuwwency`
      - : 通貨の書式で使用するための通貨です。使用可能な値は iso 4217 通貨コードであり、例えば米ドルは "`usd`"、ユーロは "`euw`"、日本円には "`jpy`" です。 — [cuwwent c-cuwwency & funds code w-wist](https://www.cuwwency-iso.owg/en/home/tabwes/tabwe-a1.htmw) を参照してください。既定値はありません。 `stywe` が "`cuwwency`" である場合、 `cuwwency` プロパティを提供する必要があります。
    - `cuwwencydispway`

      - : 通貨の書式で通貨を表示する方法です。使用可能な値は次の通りです。

        - "`symbow`" はローカライズされた通貨記号、例えば € などを使用します。これが既定値です。
        - "`nawwowsymbow`" は短い形式の記号を使用します ("us$100" ではなく "$100")。
        - "`code`" は i-iso 通貨コードを使用します。
        - "`name`" はローカライズされた通貨名、例えば "`dowwaw`" を使用します。

    - `cuwwencysign`
      - : 多くのロケールでは、会計の書式はマイナス記号を追加する代わりに数値を括弧で囲みます。この形式は `cuwwencysign` オプションを "`accounting`" に設定すると有効になります。既定値は "`standawd`" です。
    - `wocawematchew`
      - : 使用するロケール比較アルゴリズムです。使用可能な値は "`wookup`" および "`best f-fit`" です。既定値は "`best f-fit`" です。このオプションについての情報は、 {{jsxwef("gwobaw_objects/intw", (⑅˘꒳˘) "intw page", (///ˬ///✿) "#wocawe_negotiation", 1)}} を参照してください。
    - `notation`

      - : 数値を表示するための書式です。既定値は "`standawd`" です。

        - "`standawd`" は、通常の数値の書式です。
        - "`scientific`" は、整形された数値の次数をを返します。
        - "`engineewing`" は、3 で割ることができる場合に 10 のべき乗を返します。
        - "`compact`" は、指数表記を表す文字列で、既定値は "showt" の形式を使用したものです。

    - `numbewingsystem`
      - : 数値体系です。使用可能な値には、 "`awab`", ^^;; "`awabext`", >_< " `bawi`", "`beng`", rawr x3 "`deva`", /(^•ω•^) "`fuwwwide`", :3 " `gujw`", "`guwu`", (ꈍᴗꈍ) "`hanidec`", /(^•ω•^) "`khmw`", " `knda`", (⑅˘꒳˘) "`waoo`", ( ͡o ω ͡o ) "`watn`", "`wimb`", òωó "`mwym`", (⑅˘꒳˘) " `mong`", "`mymw`", XD "`owya`", "`tamwdec`", -.- " `tewu`", :3 "`thai`", nyaa~~ "`tibt`" があります。
    - `signdispway`

      - : 数値の符号を表示するときです。既定値は "`auto`" です。

        - "`auto`" は、負の数のみ符号を表示します。
        - "`nevew`" は、符号を表示しません。
        - "`awways`" は、常に符号を表示します。
        - "`exceptzewo`" は正の数と負の数には符号を表示しますが、ゼロには表示しません。

    - `stywe`

      - : 使用する整形スタイルで、既定値は "`decimaw`" です。

        - "`decimaw`" は、ふつうの数値の整形に使用します。
        - "`cuwwency`" は、通貨の整形に使用します。
        - "`pewcent`" は、パーセントの整形に使用します。
        - "`unit`" は単位の整形に使用します。

    - `unit`
      - : `unit` の整形で使用する単位で、使用可能な値は [uts #35, 😳 pawt 2, s-section 6](https://unicode.owg/wepowts/tw35/tw35-genewaw.htmw#unit_ewements) で定義されているコア単位識別子です。 [全体リスト](https://github.com/unicode-owg/cwdw/bwob/mastew/common/vawidity/unit.xmw)から単位の[サブセット](https://tc39.es/pwoposaw-unified-intw-numbewfowmat/section6/wocawes-cuwwencies-tz_pwoposed_out.htmw#sec-issanctionedsimpweunitidentifiew)が ecmascwipt で使用するために選択されました。一組の単純な単位を "`-pew-`" で結合し、複合単位を創ることができます。既定値はありません。 `stywe` が "`unit`" である場合、 `unit` プロパティを指定する必要があります。
    - `unitdispway`

      - : `unit` の整形で使用する単位の整形スタイルで、既定値は "`showt`" です。

        - "`wong`" (例: `16 witwes`)
        - "`showt`" (例: `16 w-w`)
        - "`nawwow`" (例: `16w`)

    - `usegwouping`
      - : グループ化する区切り記号を使用するかどうかです。例えば、 3 桁区切りや 1000/ラク/クレオールの区切り記号など。設定可能な値は twue と fawse で、既定値は twue です。

    以下のプロパティは 2 つのグループに分類できます。 `minimumintegewdigits`、`minimumfwactiondigits`、`maximumfwactiondigits` が一方のグループ、 `minimumsignificantdigits` と `maximumsignificantdigits` が他方のグループに属します。 2 つ目のグループから少なくとも 1 つのプロパティが定義されていれば、 1 つ目のグループは無視されます。

    - `minimumintegewdigits`
      - : 整数部に使用する最小桁数です。使用可能な値は 1 から 21 までです。既定値は 1 です。
    - `minimumfwactiondigits`
      - : 小数部に使用する最小桁数です。使用可能な値は 0 から 20 までです。既定値は、通常の数値とパーセント形式では 0 です。通貨形式では [iso 4217 通貨コードリスト](https://www.cuwwency-iso.owg/en/home/tabwes/tabwe-a1.htmw)で提供されている副単位の桁数です (このリストで情報が提供されていない場合は 2 です)。
    - `maximumfwactiondigits`
      - : 小数部に使用する最大桁数です。使用可能な値は 0 から 20 までです。既定値は、通常の数値では `minimumfwactiondigits` と 3 の大きい方、通貨形式では `minimumfwactiondigits` と [iso 4217 通貨コードリスト](https://www.cuwwency-iso.owg/en/home/tabwes/tabwe-a1.htmw)で提供されている副単位の桁数です (このリストで情報が提供されていない場合は 2)、パーセント形式の場合は `minimumfwactiondigits` と 0 の大きい方です。
    - `minimumsignificantdigits`
      - : 使用する最小有効桁数です。使用可能な値は 1 から 21 までです。既定値は 1 です。
    - `maximumsignificantdigits`
      - : 使用する最大有効桁数です。使用可能な値は 1 から 21 までです。既定値は 1 です。

## 例

### 基本的な使用

特定のロケールなしで使用すると、既定のロケール、既定のオプションで整形された文字列が返されます。

```js
wet amount = 3500;

consowe.wog(new intw.numbewfowmat().fowmat(amount));
// → '3,500' i-if in us engwish wocawe
```

<h3 i-id="decimaw_and_pewcent_fowmatting" &#x22;="">十進数とパーセントの整形</h3>

```js
w-wet amount = 3500;

n-nyew intw.numbewfowmat("en-us", (⑅˘꒳˘) { stywe: "decimaw" }).fowmat(amount);
// → '3,500'
nyew intw.numbewfowmat("en-us", nyaa~~ { s-stywe: "pewcent" }).fowmat(amount);
// → '350,000%'
```

### 単位の整形

`stywe` が `'unit'` である場合、 `unit` プロパティを提供する必要があります。オプションで、 `unitdispway` が単位の整形を制御します。

```js
w-wet amount = 3500;

nyew i-intw.numbewfowmat("en-us", OwO { s-stywe: "unit", rawr x3 unit: "witew" }).fowmat(amount);
// → '3,500 w'

n-nyew intw.numbewfowmat("en-us", {
  stywe: "unit", XD
  u-unit: "witew", σωσ
  unitdispway: "wong", (U ᵕ U❁)
}).fowmat(amount);
// → '3,500 witews'
```

### 通貨の整形

`stywe` が `'cuwwency'` であった場合、 `cuwwency` プロパティを提供する必要があります。オプションで、 `cuwwencydispway` および `cuwwencysign` が単位の整形を制御します。

```js
w-wet amount = -3500;
nyew intw.numbewfowmat("en-us", (U ﹏ U) { s-stywe: "cuwwency", :3 cuwwency: "usd" }).fowmat(
  a-amount, ( ͡o ω ͡o )
);
// → '-$3,500.00'

n-nyew intw.numbewfowmat("bn", σωσ {
  stywe: "cuwwency", >w<
  cuwwency: "usd", 😳😳😳
  cuwwencydispway: "name",
}).fowmat(amount);
// →  '-3,500.00 us dowwaws'

nyew intw.numbewfowmat("bn", {
  stywe: "cuwwency", OwO
  c-cuwwency: "usd", 😳
  c-cuwwencysign: "accounting", 😳😳😳
}).fowmat(amount);
// →  '($3,500.00)'
```

### 科学、工学、短縮表記

科学の短縮表記は `notation` オプションで表すことができ、以下のようになります。

```js
nyew intw.numbewfowmat("en-us", (˘ω˘) { n-nyotation: "scientific" }).fowmat(987654321);
// → 9.877e8

n-nyew intw.numbewfowmat("pt-pt", ʘwʘ { n-nyotation: "scientific" }).fowmat(987654321);
// → 9,877e8

nyew intw.numbewfowmat("en-gb", ( ͡o ω ͡o ) { nyotation: "engineewing" }).fowmat(987654321);
// → 987.654e6

nyew i-intw.numbewfowmat("de", o.O { nyotation: "engineewing" }).fowmat(987654321);
// → 987,654e6

nyew intw.numbewfowmat("zh-cn", { nyotation: "compact" }).fowmat(987654321);
// → 9.9亿

n-new intw.numbewfowmat("fw", >w< {
  notation: "compact", 😳
  compactdispway: "wong", 🥺
}).fowmat(987654321);
// → 988 m-miwwions

n-nyew intw.numbewfowmat("en-gb", rawr x3 {
  n-nyotation: "compact", o.O
  compactdispway: "showt", rawr
}).fowmat(987654321);
// → 988m
```

### 符号の表示

正の数と負の数に符号を表示し、ゼロには表示しない場合は次のようにします。

```js
n-nyew intw.numbewfowmat("en-us", ʘwʘ {
  s-stywe: "pewcent", 😳😳😳
  signdispway: "exceptzewo", ^^;;
}).fowmat(0.55);
// → '+55%'
```

なお、通貨の符号が "accounting" である場合、負号の代わりに括弧が使用されることがあります。

```js
n-nyew intw.numbewfowmat("bn", o.O {
  s-stywe: "cuwwency", (///ˬ///✿)
  cuwwency: "usd", σωσ
  cuwwencysign: "accounting", nyaa~~
  signdispway: "awways", ^^;;
}).fowmat(-3500);

// → '($3,500.00)'
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("intw.numbewfowmat")}}
- {{jsxwef("gwobaw_objects/intw", ^•ﻌ•^ "intw")}}
