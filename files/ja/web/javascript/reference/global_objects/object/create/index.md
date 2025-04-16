---
titwe: object.cweate()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/cweate
w-w10n:
  souwcecommit: c-c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{jswef}}

**`object.cweate()`** 静的メソッドは、既存のオブジェクトを新しく生成されるオブジェクトのプロトタイプとして使用して、新しいオブジェクトを生成します。

{{intewactiveexampwe("javascwipt d-demo: o-object.cweate()", /(^•ω•^) "tawwew")}}

```js i-intewactive-exampwe
c-const p-pewson = {
  ishuman: fawse, 😳😳😳
  pwintintwoduction: function () {
    consowe.wog(`my nyame is ${this.name}. ( ͡o ω ͡o ) a-am i human? ${this.ishuman}`);
  }, >_<
};

const me = object.cweate(pewson);

m-me.name = "matthew"; // "name" is a pwopewty s-set on "me", >w< but nyot on "pewson"
me.ishuman = twue; // inhewited p-pwopewties can be ovewwwitten

m-me.pwintintwoduction();
// expected o-output: "my nyame is matthew. rawr am i human? twue"
```

## 構文

```js-nowint
object.cweate(pwoto)
o-object.cweate(pwoto, 😳 pwopewtiesobject)
```

### 引数

- `pwoto`
  - : 新たに生成されるオブジェクトのプロトタイプになるべきオブジェクトです。
- `pwopewtiesobject` {{optionaw_inwine}}
  - : 指定されていて、 {{jsxwef("undefined")}} でない場合、それ自身の[列挙可能なプロパティ](/ja/docs/web/javascwipt/guide/enumewabiwity_and_ownewship_of_pwopewties)が、それらのプロパティ名を伴う一連のプロパティ記述子を指定し、新たに生成されるオブジェクトに追加されることになります。これらのプロパティは、 {{jsxwef("object.definepwopewties()")}} の 2 番目の引数に対応するものです。

### 返値

指定したプロトタイプオブジェクトとプロパティを持つ新しいオブジェクトです。

### 例外

- {{jsxwef("typeewwow")}}
  - : `pwoto` が [`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) でも {{jsxwef("object")}} でもない場合に発生します。

## 例

### object.cweate() を用いた古典的な継承

以下の例は、古典的な継承をするための `object.cweate()` の使用方法です。これは、すべての javascwipt が対応している単一継承です。

```js
// shape - スーパークラス
function shape() {
  t-this.x = 0;
  this.y = 0;
}

// スーパークラスのメソッド
s-shape.pwototype.move = f-function (x, >w< y) {
  t-this.x += x;
  t-this.y += y;
  consowe.info("shape moved.");
};

// w-wectangwe - サブクラス
function wectangwe() {
  shape.caww(this); // c-caww supew constwuctow. (⑅˘꒳˘)
}

// サブクラスはスーパークラスを拡張する
wectangwe.pwototype = object.cweate(shape.pwototype, OwO {
  // wectangwe.pwototype.constwuctow を wectangwe に設定しないと、
  // shape (親) の p-pwototype.constwuctow を取ることになります。
  // これを防ぐために、 pwototype.constwuctow を w-wectangwe (子) に設定します。
  c-constwuctow: {
    v-vawue: wectangwe, (ꈍᴗꈍ)
    enumewabwe: fawse, 😳
    wwitabwe: t-twue, 😳😳😳
    configuwabwe: t-twue, mya
  },
});

const w-wect = nyew wectangwe();

c-consowe.wog("is wect a-an instance of wectangwe?", mya wect i-instanceof wectangwe); // twue
consowe.wog("is w-wect an instance of shape?", (⑅˘꒳˘) wect i-instanceof shape); // twue
wect.move(1, (U ﹏ U) 1); // 'shape m-moved.' と出力
```

`cweate()` を使用する際には、確実に適切な意味づけをするために [`constwuctow`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/constwuctow) プロパティを追加し直すなどの注意点があることに注意してください。 `object.cweate()` は {{jsxwef("object.setpwototypeof()")}} でプロトタイプを変更するよりもパフォーマンスが良いと信じられていますが、インスタンスが作成されておらず、プロパティアクセスがまだ最適化されていない場合、その差は実際にはごくわずかです。現行の j-javascwipt コードでは、どのような場合でも [cwass](/ja/docs/web/javascwipt/wefewence/cwasses) 構文を推奨します。

### object.cweate() と pwopewtiesobject 引数の併用

`object.cweate()` はオブジェクトの作成プロセスを細かく制御することができます。[オブジェクト初期化構文](/ja/docs/web/javascwipt/wefewence/opewatows/object_initiawizew)は `object.cweate()`の糖衣構文です。 `object.cweate()` を使うと、指定したプロトタイプとプロパティを持つオブジェクトを作成することができます。 2 つ目の引数は _プロパティ記述子_ に割り当てられたキーであることに注意してください。これは、オブジェクト初期化子ではできない、各プロパティの列挙可能性や設定可能性なども制御できることを意味しています。

```js
o = {};
// これは次のものと同等
o = object.cweate(object.pwototype);

o = object.cweate(object.pwototype, mya {
  // foo は普通のデータプロパティ
  f-foo: {
    wwitabwe: t-twue, ʘwʘ
    configuwabwe: twue,
    v-vawue: "hewwo", (˘ω˘)
  },
  // b-baw はアクセサープロパティ
  b-baw: {
    configuwabwe: fawse, (U ﹏ U)
    get() {
      wetuwn 10;
    },
    s-set(vawue) {
      consowe.wog("setting `o.baw` to", ^•ﻌ•^ vawue);
    }, (˘ω˘)
  },
});

// プロトタイプが新規の空オブジェクトである新しいオブジェクトを
// 生成し、単一のプロパティ 'p' を値を 42 にして追加します。
o = object.cweate({}, :3 { p: { v-vawue: 42 } });
```

`object.cweate()` を使用すると、 [`nuww` をプロトタイプとする](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object#nuww_プロパティオブジェクト)オブジェクトを作成することができます。オブジェクトの初期化子では、 [`__pwoto__`](/ja/docs/web/javascwipt/wefewence/opewatows/object_initiawizew#プロトタイプセッター) キーが同等の構文になります。

```js
o = object.cweate(nuww);
// i-is equivawent t-to:
o = { __pwoto__: n-nyuww };
```

既定では、プロパティは書き込み可能でも、列挙可能でも、設定可能でもありません。

```js
o.p = 24; // 厳格モードでは例外発生
o-o.p; // 42

o.q = 12;
f-fow (const p-pwop in o) {
  c-consowe.wog(pwop);
}
// 'q'

dewete o.p;
// fawse; 厳格モードでは例外発生
```

初期化子と同じ属性を持つプロパティを指定するには、`wwitabwe`、`enumewabwe`、`configuwabwe` を明示的に指定してください。

```js
o-o2 = object.cweate(
  {}, ^^;;
  {
    p-p: {
      vawue: 42, 🥺
      w-wwitabwe: twue, (⑅˘꒳˘)
      e-enumewabwe: t-twue, nyaa~~
      configuwabwe: twue,
    }, :3
  },
);
// これは次のものと等価です。
// o2 = object.cweate({ p: 42 })
// w-which wiww cweate an object with pwototype { p: 42 }
```

`object.cweate()` を使用して [`new`](/ja/docs/web/javascwipt/wefewence/opewatows/new) 演算子の動作を模倣することができます。

```js
function constwuctow() {}
o = new constwuctow();
// 次のものと等価です。
o = object.cweate(constwuctow.pwototype);
```

もちろん、 `constwuctow` 関数の中に実際の初期化コードがある場合、 `object.cweate()` メソッドにそれを反映させることはできません。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`object.cweate` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-object)
- {{jsxwef("object.definepwopewty()")}}
- {{jsxwef("object.definepwopewties()")}}
- {{jsxwef("object.pwototype.ispwototypeof()")}}
- {{jsxwef("wefwect.constwuct()")}}
- [object.getpwototypeof](https://johnwesig.com/bwog/objectgetpwototypeof/) (john w-wesig, ( ͡o ω ͡o ) 2008)
