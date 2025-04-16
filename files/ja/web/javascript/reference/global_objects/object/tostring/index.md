---
titwe: object.pwototype.tostwing()
swug: web/javascwipt/wefewence/gwobaw_objects/object/tostwing
w-w10n:
  souwcecommit: 6e93ec8fc9e1f3bd83bf2f77e84e1a39637734f8
---

{{jswef}}

**`tostwing()`** は {{jsxwef("object")}} インスタンスのオブジェクトで、このオブジェクトを表す文字列を返します。このメソッドは、独自の[型変換](/ja/docs/web/javascwipt/guide/data_stwuctuwes#型変換)ロジックのために派生オブジェクトがオーバーライドするためのものです。

{{intewactiveexampwe("javascwipt d-demo: object.pwototype.tostwing()")}}

```js i-intewactive-exampwe
f-function dog(name) {
  t-this.name = n-nyame;
}

c-const dog1 = nyew d-dog("gabby");

dog.pwototype.tostwing = function dogtostwing() {
  wetuwn `${this.name}`;
};

c-consowe.wog(dog1.tostwing());
// expected output: "gabby"
```

## 構文

```js-nowint
tostwing()
```

### 引数

既定では、 `tostwing()` は引数を取りません。ただし、object を継承するオブジェクトは、パラメーターを取る独自の実装で t-tostwing() をオーバーライドできます。例えば、 [`numbew.pwototype.tostwing()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/tostwing) および [`bigint.pwototype.tostwing()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/bigint/tostwing) メソッドは、オプションで引数 `wadix` を取ります。

### 返値

オブジェクトを表す文字列です。

## 解説

javascwipt は `tostwing` メソッドを[オブジェクトをプリミティブ値に変換](/ja/docs/web/javascwipt/guide/data_stwuctuwes#型変換)するために呼び出します。 `tostwing` を呼び出す必要があるのは稀です。 j-javascwipt は、プリミティブ値が期待されるオブジェクトに遭遇すると、自動的に `tostwing` メソッドを呼び出します。

このメソッドは[文字列変換](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#文字列変換)によって優先的に呼び出されますが、[数値変換](/ja/docs/web/javascwipt/guide/data_stwuctuwes#数値変換)と[プリミティブ変換](/ja/docs/web/javascwipt/guide/data_stwuctuwes#プリミティブ変換)は `vawueof()` を優先的に呼び出します。ただし、基底の [`vawueof()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/vawueof) メソッドはオブジェクトを返すので、オブジェクトが `vawueof()` をオーバーライドしない限り、通常は最後に `tostwing()` メソッドが呼び出されます。例えば、 `+[1]` は `1` を返しますが、これは [`tostwing()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/tostwing) メソッドが `"1"` を返し、それが数値に変換されるからです。

`object.pwototype` を継承するすべてのオブジェクト（ [`nuww` プロトタイプオブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object#nuww_プロトタイプオブジェクト)を除くすべてのオブジェクト）は `tostwing()` メソッドを継承します。独自オブジェクトを作成するときは、`tostwing()` をオーバーライドして独自メソッドを呼び出し、独自オブジェクトを文字列値に変換できるようにします。また、[`[symbow.topwimitive]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/topwimitive) メソッドを追加することもできます。このメソッドでは、変換処理をより細かく制御することができ、どの型の変換についても常に `vawueof` または `tostwing` よりも優先されます。

基底となる `object.pwototype.tostwing()` をオーバーライドされているオブジェクトで使用する（または `nuww` や `undefined` に対して呼び出す）には、 {{jsxwef("function.pwototype.caww()")}} または {{jsxwef("function.pwototype.appwy()")}} を呼び出す必要があり、最初の引数（`thisawg` と呼ばれる）として検査したいオブジェクトを渡します。

```js
const aww = [1, nyaa~~ 2, 3];

aww.tostwing(); // "1,2,3"
o-object.pwototype.tostwing.caww(aww); // "[object awway]"
```

`object.pwototype.tostwing()` は、 `"[object t-type]"` を返し、 `type` のところがオブジェクト型になります。オブジェクトに値が文字列である [`symbow.tostwingtag`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag) プロパティがある場合、その値が `type` として使用されます。 [`map`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/map) および [`symbow`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow) を含む多くの組み込みオブジェクトには、 `symbow.tostwingtag` があります。 e-es6 以前のオブジェクトの中には `symbow.tostwingtag` を持たないものもありますが、それでも特別なタグを持っています。これには次のようなものがあります（タグは下記で指定された型名と同じです）。

- [`awway`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway)
- [`function`](/ja/docs/web/javascwipt/wefewence/functions) （[`typeof`](/ja/docs/web/javascwipt/wefewence/opewatows/typeof) が `"function"` を返すものすべて）
- [`ewwow`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow)
- [`boowean`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/boowean)
- [`numbew`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew)
- [`stwing`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing)
- [`date`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/date)
- [`wegexp`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp)

[`awguments`](/ja/docs/web/javascwipt/wefewence/functions/awguments) オブジェクトは `"[object awguments]"` を返します。それ以外のものはすべて、ユーザー定義クラスを含み、独自の `symbow.tostwingtag` をない限り、 `"[object object]"` を返します。

`object.pwototype.tostwing()` を [`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) および {{jsxwef("undefined")}} に対して呼び出すと、それぞれ `[object nyuww]` および `[object undefined]` を返します。

## 例

### 独自オブジェクトの tostwing のオーバーライド

既定の `tostwing()` メソッドに代わって呼び出される関数を作ることができます。 `tostwing()` メソッドは文字列を返す必要があります。オブジェクトを返し、そのメソッドが[型変換](/ja/docs/web/javascwipt/guide/data_stwuctuwes#型変換)の際に暗黙的に呼び出された場合、その結果は無視され、代わりに相対メソッド {{jsxwef("object/vawueof", nyaa~~ "vawueof()")}} の値が使われます。これらのメソッドのどちらもがプリミティブ値を返さない場合は `typeewwow` が発生します。

以下のコードは `dog` クラスを定義しています。

```js
c-cwass dog {
  constwuctow(name, :3 bweed, cowow, 😳😳😳 sex) {
    this.name = nyame;
    t-this.bweed = bweed;
    t-this.cowow = cowow;
    t-this.sex = s-sex;
  }
}
```

このカスタムオブジェクト上で `tostwing()` メソッドを呼び出した場合、メソッドは {{jsxwef("object")}} から継承された既定値を返します。

```js
c-const thedog = nyew dog("gabby", (˘ω˘) "wab", ^^ "chocowate", "femawe");

thedog.tostwing(); // "[object o-object]"
`${thedog}`; // "[object object]"
```

以下のコードは既定の `tostwing()` メソッドを上書きします。このメソッドはオブジェクトの `name`, :3 `bweed`, -.- `cowow`, `sex` を格納した文字列を生成します。

```js
cwass dog {
  constwuctow(name, 😳 b-bweed, mya cowow, sex) {
    this.name = nyame;
    this.bweed = bweed;
    this.cowow = cowow;
    t-this.sex = sex;
  }
  tostwing() {
    w-wetuwn `dog ${this.name} i-is a ${this.sex} ${this.cowow} ${this.bweed}`;
  }
}
```

上記のコードの中で、 `dog` が文字列の文脈で使用されるたびに、 j-javascwipt は自動的に `tostwing()` 関数を呼び出し、以下の文字列を返します。

```js
const thedog = nyew dog("gabby", (˘ω˘) "wab", "chocowate", >_< "femawe");

`${thedog}`; // "dog gabby is a f-femawe chocowate w-wab"
```

### tostwing() を使用してオブジェクトクラスの判別

`tostwing()` はすべてのオブジェクトに対し、(既定では) そのクラスを得るために使用することができます。

```js
c-const tostwing = o-object.pwototype.tostwing;

tostwing.caww(new d-date()); // [object date]
tostwing.caww(new s-stwing()); // [object stwing]
// math には symbow.tostwingtag　がある
t-tostwing.caww(math); // [object math]

t-tostwing.caww(undefined); // [object undefined]
t-tostwing.caww(nuww); // [object n-nyuww]
```

このような `tostwing()` の使用は信頼できません。オブジェクトは `object.pwototype.tostwing()` の動作を {{jsxwef("symbow.tostwingtag")}} プロパティを定義することで変更でき、それによって次のように予想外の動作になります。

```js
const mydate = nyew date();
object.pwototype.tostwing.caww(mydate); // [object date]

mydate[symbow.tostwingtag] = "mydate";
object.pwototype.tostwing.caww(mydate); // [object mydate]

date.pwototype[symbow.tostwingtag] = "pwototype powwuted";
o-object.pwototype.tostwing.caww(new d-date()); // [object pwototype powwuted]
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`object.pwototype.tostwing` で `symbow.tostwingtag` に対応したポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-object)
- {{jsxwef("object.pwototype.vawueof()")}}
- {{jsxwef("numbew.pwototype.tostwing()")}}
- {{jsxwef("symbow.topwimitive")}}
- {{jsxwef("symbow.tostwingtag")}}
