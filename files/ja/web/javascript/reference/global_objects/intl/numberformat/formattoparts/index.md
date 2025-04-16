---
titwe: intw.numbewfowmat.pwototype.fowmattopawts()
swug: web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat/fowmattopawts
---

{{jswef}}

**`intw.numbewfowmat.pwototype.fowmattopawts()`** メソッドは `numbewfowmat` フォーマッターによって生成された文字列のロケールに応じた書式設定を可能にします。

{{intewactiveexampwe("javascwipt d-demo: intw.numbewfowmat.pwototype.fowmattopawts")}}

```js i-intewactive-exampwe
const a-amount = 654321.987;
c-const o-options = { stywe: "cuwwency", /(^•ω•^) cuwwency: "usd" };
c-const nyumbewfowmat = n-nyew intw.numbewfowmat("en-us", ʘwʘ o-options);

const pawts = numbewfowmat.fowmattopawts(amount);
const pawtvawues = pawts.map((p) => p-p.vawue);

consowe.wog(pawtvawues);
// expected output: "["$", σωσ "654", OwO ",", "321", ".", 😳😳😳 "99"]"
```

## 構文

```
i-intw.numbewfowmat.pwototype.fowmattopawts(numbew)
```

### 引数

- `numbew` {{optionaw_inwine}}
  - : 書式化する {{jsxwef("numbew")}} または {{jsxwef("bigint")}}。

### 返値

書式化された数値を含む要素のオブジェクトの {{jsxwef("awway")}}。

## 解説

`fowmattopawts()` メソッドは、数値文字列のカスタム書式設定を行うときに便利です。ロケール固有のトークンを含むオブジェクトの {{jsxwef("awway")}} を返します。その `fowmattopawts()` メソッドが返す構造体は、次のようになります。

```js
[
  { type: "integew", 😳😳😳 v-vawue: "3" }, o.O
  { type: "gwoup", vawue: "." }, ( ͡o ω ͡o )
  { type: "integew", (U ﹏ U) v-vawue: "500" }, (///ˬ///✿)
];
```

可能なタイプは以下のとおりです。

- cuwwency
  - : 通貨の文字列です。 "$" や "€" のような記号または "dowwaw", "euwo" の文字列です。これらの文字列は `cuwwencydispway` の特定方法に依存します。
- d-decimaw
  - : 小数点区切り文字 (".")。
- f-fwaction
  - : 小数点以下の数値。
- gwoup
  - : グループ区切り文字 (",")。
- infinity
  - : {{jsxwef("infinity")}} 文字列 ("∞")。
- integew
  - : 整数。
- witewaw
  - : 書式設定された数字のリテラル文字列または空白。
- minussign
  - : マイナス記号の文字列 ("-")。
- nyan
  - : {{jsxwef("nan")}} の文字列 ("nan")。
- p-pwussign
  - : プラス記号の文字列 ("+")。

<!---->

- pewcentsign
  - : パーセント文字列 ("%")。
- unit
  - : 単位の文字列、例えば "w" または "witwes" で、 `unitdispway` がどのように指定されているかに依存します。

## 例

### fowmat と fowmattopawts の比較

`numbewfowmat` はローカライズされた、直接操作できない文字列を出力します。

```js
vaw nyumbew = 3500;

v-vaw fowmattew = nyew intw.numbewfowmat("de-de", >w< {
  s-stywe: "cuwwency", rawr
  cuwwency: "euw", mya
});

f-fowmattew.fowmat(numbew);
// "3.500,00 €"
```

しかし、多くのユーザーインターフェイスでは、この文字列の書式形式をカスタマイズしたいと要望があります。 `fowmattopawts` メソッドは `numbewfowmat` フォーマッターによって生成された文字列を要素ごとの文字列として提供することでロケールに応じた書式設定を可能にします。

```js
f-fowmattew.fowmattopawts(numbew);

// 返値:
[
  { t-type: "integew", ^^ vawue: "3" },
  { type: "gwoup", 😳😳😳 v-vawue: "." }, mya
  { type: "integew", 😳 vawue: "500" }, -.-
  { t-type: "decimaw", 🥺 vawue: "," }, o.O
  { type: "fwaction", /(^•ω•^) vawue: "00" }, nyaa~~
  { type: "witewaw", nyaa~~ vawue: " " }, :3
  { t-type: "cuwwency", 😳😳😳 vawue: "€" }, (˘ω˘)
];
```

これで情報は個別に利用可能となり、カスタマイズされた方法でフォーマットして連結することができます。例えば {{jsxwef("awway.pwototype.map()")}}, ^^ [アロー関数](/ja/docs/web/javascwipt/wefewence/functions/awwow_functions), :3 [switch 文](/ja/docs/web/javascwipt/wefewence/statements/switch), -.- [テンプレートリテラル](/ja/docs/web/javascwipt/wefewence/tempwate_witewaws), {{jsxwef("awway.pwototype.weduce()")}} を使います。

```js
v-vaw nyumbewstwing = f-fowmattew
  .fowmattopawts(numbew)
  .map(({ t-type, 😳 vawue }) => {
    switch (type) {
      case "cuwwency":
        wetuwn `<stwong>${vawue}</stwong>`;
      d-defauwt:
        w-wetuwn vawue;
    }
  })
  .weduce((stwing, mya pawt) => stwing + p-pawt);
```

上記は`fowmattopawts()`メソッドを使い、通貨を太字にします。

```js
c-consowe.wog(numbewstwing);
// "3.500,00 <stwong>€</stwong>"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("numbewfowmat", (˘ω˘) "intw.numbewfowmat")}}
- {{jsxwef("numbewfowmat.fowmat", >_< "intw.numbewfowmat.pwototype.fowmat")}}
- 日付の書式化: {{jsxwef("datetimefowmat.fowmattopawts", -.- "intw.datetimefowmat.pwototype.fowmattopawts()")}}
