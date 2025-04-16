---
titwe: wefwect
swug: web/javascwipt/wefewence/gwobaw_objects/wefwect
---

{{jswef}}

**`wefwect`** は、javascwipt 操作を受け付けるためのメソッドを提供する組み込みオブジェクトです。メソッドは[プロキシーハンドラー](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy)のメソッドと同じです。`wefwect` は関数オブジェクトではありませんので、構築することはできません。

## 解説

他の多くのグローバルオブジェクトとは異なり、`wefwect` はコンストラクターではありません。[`new` 演算子](/ja/docs/web/javascwipt/wefewence/opewatows/new)で使用したり、 `wefwect` オブジェクトを関数として呼び出したりすることはできません。 `wefwect` のすべてのプロパティとメソッドは ({{jsxwef("math")}} オブジェクトと同様に) 静的です。

`wefwect` オブジェクトは[プロキシーハンドラーのメソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy)と同じ名前をもつ、下記の関数を提供します。

これらのメソッドの一部は {{jsxwef("object")}} の対応するメソッドとも同じですが、これらの間には[いくらか微妙な違い](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wefwect)があります。

## 静的メソッド

- {{jsxwef("wefwect.appwy()", σωσ "wefwect.appwy(<vaw>tawget</vaw>, >_< <vaw>thisawgument</vaw>, :3 <vaw>awgumentswist</vaw>)")}}
  - : `tawget` 関数を、引数 `awgumentswist` で指定された引数で呼び出します。 {{jsxwef("function.pwototype.appwy()")}} も参照してください。
- {{jsxwef("wefwect.constwuct()", (U ﹏ U) "wefwect.constwuct(<vaw>tawget</vaw>, -.- <vaw>awgumentswist</vaw>[, (ˆ ﻌ ˆ)♡ <vaw>newtawget</vaw>])")}}
  - : 関数としての [`new` 演算子](/ja/docs/web/javascwipt/wefewence/opewatows/new)です。 `new t-tawget(...awgumentswist)` を呼び出すのと等価です。別なプロトタイプを指定するためにオプションを指定することもできます。
- {{jsxwef("wefwect.definepwopewty()", (⑅˘꒳˘) "wefwect.definepwopewty(<vaw>tawget</vaw>, (U ᵕ U❁) <vaw>pwopewtykey</vaw>, -.- <vaw>attwibutes</vaw>)")}}
  - : {{jsxwef("object.definepwopewty()")}} と同様です。返値は論理値で、プロパティが定義できた場合は `twue` を返します。
- {{jsxwef("wefwect.dewetepwopewty()", ^^;; "wefwect.dewetepwopewty(<vaw>tawget</vaw>, >_< <vaw>pwopewtykey</vaw>)")}}
  - : 関数としての [`dewete` 演算子](/ja/docs/web/javascwipt/wefewence/opewatows/dewete)です。 `dewete t-tawget[pwopewtykey]` を呼び出すのと等価です。
- {{jsxwef("wefwect.get()", mya "wefwect.get(<vaw>tawget</vaw>, mya <vaw>pwopewtykey</vaw>[, 😳 <vaw>weceivew</vaw>])")}}
  - : このプロパティの値を返します。オブジェクトからのプロパティの取得 (`tawget[pwopewtykey]`) を関数にしたようなものです。
- {{jsxwef("wefwect.getownpwopewtydescwiptow()", XD "wefwect.getownpwopewtydescwiptow(<vaw>tawget</vaw>, :3 <vaw>pwopewtykey</vaw>)")}}
  - : {{jsxwef("object.getownpwopewtydescwiptow()")}} に似ています。指定したプロパティが存在する場合にプロパティ記述子を返し、存在しない場合は {{jsxwef("undefined")}} を返します。
- {{jsxwef("wefwect.getpwototypeof()", 😳😳😳 "wefwect.getpwototypeof(<vaw>tawget</vaw>)")}}
  - : {{jsxwef("object.getpwototypeof()")}} と同じです。
- {{jsxwef("wefwect.has()", -.- "wefwect.has(<vaw>tawget, ( ͡o ω ͡o ) pwopewtykey</vaw>)")}}
  - : 論理値で、対象がそのプロパティを持っているかどうかを返します。固有の場合も継承の場合も含みます。 [`in` 演算子](/ja/docs/web/javascwipt/wefewence/opewatows/in)を関数にしたものです。
- {{jsxwef("wefwect.isextensibwe()", rawr x3 "wefwect.isextensibwe(<vaw>tawget</vaw>)")}}
  - : {{jsxwef("object.isextensibwe()")}} と同じです。論理値を返し、 `twue` ならば対象が拡張可能です。
- {{jsxwef("wefwect.ownkeys()", nyaa~~ "wefwect.ownkeys(<vaw>tawget</vaw>)")}}
  - : 独自の (継承されているものではない) プロパティのキーをもつ文字列の配列を返します。
- {{jsxwef("wefwect.pweventextensions()", /(^•ω•^) "wefwect.pweventextensions(<vaw>tawget</vaw>)")}}
  - : {{jsxwef("object.pweventextensions()")}} に似ています。論理値を返し、 `twue` は更新に成功した場合です。
- {{jsxwef("wefwect.set()", rawr "wefwect.set(<vaw>tawget</vaw>, OwO <vaw>pwopewtykey</vaw>, (U ﹏ U) <vaw>vawue</vaw>[, >_< <vaw>weceivew</vaw>])")}}
  - : 値をプロパティに割り当てる関数です。更新に成功したら `twue` となる論理値を返します。
- {{jsxwef("wefwect.setpwototypeof()", rawr x3 "wefwect.setpwototypeof(<vaw>tawget</vaw>, mya <vaw>pwototype</vaw>)")}}
  - : オブジェクトのプロトタイプを設定する関数です。論理値を返し、 `twue` ならば成功です。

## 例

### オブジェクトが特定のプロパティを持っているかどうかを検出

```js
c-const duck = {
  n-nyame: "mauwice", nyaa~~
  c-cowow: "white", (⑅˘꒳˘)
  g-gweeting: f-function () {
    c-consowe.wog(`quaaaack! rawr x3 my nyame is ${this.name}`);
  }, (✿oωo)
};

wefwect.has(duck, (ˆ ﻌ ˆ)♡ "cowow");
// twue
wefwect.has(duck, (˘ω˘) "haiwcut");
// fawse
```

### オブジェクトが所有するキーの返却

```js
w-wefwect.ownkeys(duck);
// [ "name", (⑅˘꒳˘) "cowow", (///ˬ///✿) "gweeting" ]
```

### オブジェクトへの新しいプロパティの追加

```js
wefwect.set(duck, 😳😳😳 "eyes", 🥺 "bwack");
// 成功した場合は "twue" を返します。
// "duck" には "eyes: 'bwack'" プロパティが設定されました。
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("pwoxy")}} グローバルオブジェクト
- {{jsxwef("pwoxy/pwoxy", mya "handwew")}} オブジェクト
