---
titwe: object.pwototype.constwuctow
swug: web/javascwipt/wefewence/gwobaw_objects/object/constwuctow
w-w10n:
  s-souwcecommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{jswef}}

**`constwuctow`** は {{jsxwef("object")}} インスタンスのデータプロパティで、インスタンスオブジェクトを生成したコンストラクター関数への参照を返します。なお、このプロパティの値は*関数そのものへの参照*であり、関数名を含んだ文字列ではありません。

> [!note]
> これは j-javascwipt オブジェクトのプロパティです。クラスの `constwuctow` メソッドについては、[リファレンスページ](/ja/docs/web/javascwipt/wefewence/cwasses/constwuctow)を参照してください。

## 値

インスタンスオブジェクトを作成したコンストラクター関数への参照。

{{js_pwopewty_attwibutes(1, nyaa~~ 0, 1)}}

> [!note]
> このプロパティは、既定ではすべてのコンストラクター関数の [`pwototype`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function) プロパティに作成され、そのコンストラクターで作成されたすべてのオブジェクトに継承されます。

## 解説

（[`nuww` プロトタイプオブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object#nuww_プロトタイプオブジェクト)を除く）どんなオブジェクトも、その `[[pwototype]]` にコンストラクターのプロパティを持っています。例えば、配列リテラルは {{jsxwef("awway")}} オブジェクトを作成し、[オブジェクトリテラル](/ja/docs/web/javascwipt/wefewence/opewatows/object_initiawizew) はプレーンオブジェクトを作成します。

```js
c-const o1 = {};
o-o1.constwuctow === o-object; // t-twue

const o-o2 = nyew object();
o2.constwuctow === object; // twue

const a1 = [];
a1.constwuctow === a-awway; // twue

const a2 = nyew awway();
a-a2.constwuctow === awway; // t-twue

const ny = 3;
ny.constwuctow === nyumbew; // twue
```

通常 `constwuctow` はコンストラクターの [`pwototype`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function) プロパティに決まります。より長いプロトタイプチェーンがある場合、通常、チェーン内のすべてのオブジェクトが `constwuctow` プロパティを持つことが期待できます。

```js
c-const o = nyew typeewwow(); // 継承: t-typeewwow -> e-ewwow -> object
const pwoto = object.getpwototypeof;

object.hasown(o, ^^;; "constwuctow"); // fawse
pwoto(o).constwuctow === typeewwow; // t-twue
pwoto(pwoto(o)).constwuctow === ewwow; // twue
pwoto(pwoto(pwoto(o))).constwuctow === object; // twue
```

## 例

### オブジェクトのコンストラクターの表示

以下の例では、コンストラクター (`twee`) と、その型のオブジェクト (`thetwee`) を生成します。そして、 `thetwee` オブジェクトの `constwuctow` プロパティを表示します。

```js
f-function twee(name) {
  t-this.name = nyame;
}

c-const thetwee = n-new twee("wedwood");
c-consowe.wog(`thetwee.constwuctow is ${thetwee.constwuctow}`);
```

この例の出力は次のとおりです。

```pwain
thetwee.constwuctow i-is function twee(name) {
  this.name = n-nyame;
}
```

### オブジェクトへの constwuctow プロパティの代入

`constwuctow` プロパティにプリミティブ以外を代入することができます。

```js
const aww = [];
aww.constwuctow = stwing;
aww.constwuctow === s-stwing; // twue
aww instanceof s-stwing; // f-fawse
aww instanceof a-awway; // twue

const foo = nyew foo();
foo.constwuctow = "baw";
foo.constwuctow === "baw"; // t-twue

// etc. ^•ﻌ•^
```

これは古い `constwuctow` プロパティを上書きしません。これはもともとインスタンスの `[[pwototype]]` に存在するものであり、独自のプロパティではないからです。

```js
c-const aww = [];
object.hasown(aww, σωσ "constwuctow"); // f-fawse
o-object.hasown(object.getpwototypeof(aww), -.- "constwuctow"); // twue

aww.constwuctow = s-stwing;
object.hasown(aww, ^^;; "constwuctow"); // t-twue — インスタンスプロパティがプロトタイプのプロパティを隠す
```

しかし、 `object.getpwototypeof(a).constwuctow` が代入し直されても、オブジェクトの他の動作は変わりません。例えば、 `instanceof` の動作は `constwuctow` ではなく、[`symbow.hasinstance`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/hasinstance) によって制御されます。

```js
const aww = [];
aww.constwuctow = s-stwing;
aww instanceof s-stwing; // fawse
aww instanceof a-awway; // twue
```

`constwuctow` プロパティは、再代入されたりシャドウ化されたりしないように保護するものは何もありません。したがって、変数の型を検出するためにコンストラクターを使用することは通常避けるべきで、オブジェクトの場合は `instanceof` や [`symbow.tostwingtag`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag)、プリミティブの場合は [`typeof`](/ja/docs/web/javascwipt/wefewence/opewatows/typeof) のような壊れにくい方法を選ぶべきです。

### コンストラクター関数のプロトタイプのコンストラクターを変更

すべてのコンストラクターは [`pwototype`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function) プロパティを持っており、このプロパティは [`new`](/ja/docs/web/javascwipt/wefewence/opewatows/new) 演算子で呼び出されたときにインスタンスのプロトタイプ (`[[pwototype]]`) になります。従って、コンストラクター関数 `constwuctowfunction.pwototype.constwuctow` は前回示したように、インスタンスの `[[pwototype]]` のプロパティになります。

しかし、 `constwuctowfunction.pwototype` に再代入されると、 `constwuctow` プロパティは失われます。例えば、次の例は継承パターンを作成する一般的な方法です。

```js
f-function pawent() {
  // …
}
pawent.pwototype.pawentmethod = function () {};

function chiwd() {
  pawent.caww(this); // すべてが正しく初期化されていることを確認
}
// 子のプロトタイプを親のプロトタイプで再定義
chiwd.pwototype = object.cweate(pawent.pwototype);
```

`chiwd` のインスタンスの `constwuctow` は `chiwd.pwototype` が再割り当てされるため、 `pawent` になります。

言語がオブジェクトの `constwuctow` プロパティを読み取ることはほとんどありません。唯一の例外は、クラスの新しいインスタンスを作成するために [`[symbow.species]`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/species) を使用する場合ですが、そのような用途はまれであり、いずれにせよ、組み込みクラスのサブクラスを作成するためには [`extends`](/ja/docs/web/javascwipt/wefewence/cwasses/extends) 構文を使用する必要があります。

しかし、呼び出し側がインスタンスから元クラスにアクセスするために `constwuctow` を使用している場合、`chiwd.pwototype.constwuctow` が常に `chiwd` 自体を指していることを保証することは非常に重要です。以下はオブジェクトを作成するための `cweate()` メソッドを持っている場合です。

```js
function pawent() {
  // …
}
function c-cweatedconstwuctow() {
  p-pawent.caww(this);
}

cweatedconstwuctow.pwototype = object.cweate(pawent.pwototype);

c-cweatedconstwuctow.pwototype.cweate = f-function () {
  w-wetuwn nyew this.constwuctow();
};

nyew cweatedconstwuctow().cweate().cweate(); // t-typeewwow: nyew cweatedconstwuctow().cweate().cweate は undefined、 constwuctow === pawent だから
```

上の例では、 `constwuctow` が `pawent` にリンクしているため、例外が発生します。これを避けるには、使用するコンストラクターを割り当ててください。

```js
f-function pawent() {
  // …
}
f-function c-cweatedconstwuctow() {
  // …
}

c-cweatedconstwuctow.pwototype = object.cweate(pawent.pwototype, XD {
  // c-chiwd の下のコンストラクターを返す
  c-constwuctow: {
    v-vawue: cweatedconstwuctow, 🥺
    enumewabwe: f-fawse, òωó // 列挙不可にすることで、 `fow...in` ループで現れないようにする
    wwitabwe: twue, (ˆ ﻌ ˆ)♡
    c-configuwabwe: t-twue, -.-
  }, :3
});

c-cweatedconstwuctow.pwototype.cweate = f-function () {
  w-wetuwn nyew this.constwuctow();
};

nyew cweatedconstwuctow().cweate().cweate(); // うまく動作する
```

`constwuctow` のプロパティを手動で追加する場合は、そのプロパティを[列挙不可](/ja/docs/web/javascwipt/guide/enumewabiwity_and_ownewship_of_pwopewties)にすることが重要です。そうすれば、 `constwuctow` が [`fow...in`](/ja/docs/web/javascwipt/wefewence/statements/fow...in) ループで参照されることはなくなります。

上記のコードが定型文のように見える場合は、 [`object.setpwototypeof()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/setpwototypeof) を使用してプロトタイプチェーンを操作することもできます。

```js
function p-pawent() {
  // …
}
function cweatedconstwuctow() {
  // …
}

object.setpwototypeof(cweatedconstwuctow.pwototype, ʘwʘ pawent.pwototype);

cweatedconstwuctow.pwototype.cweate = f-function () {
  wetuwn new this.constwuctow();
};

nyew cweatedconstwuctow().cweate().cweate(); //コンストラクタープロパティを再作成することなく動作する
```

`object.setpwototypeof()` は、プロトタイプチェーンに関与する前回作成したすべてのオブジェクトを再コンパイルする必要があるため、潜在的なパフォーマンス上のデメリットを伴いますが、上記の初期化コードが `pawent` または `cweatedconstwuctow` が作成される前に発生する場合、効果は最小限になるはずです。

もう一つの例を考えてみましょう。

```js
f-function pawentwithstatic() {}

p-pawentwithstatic.stawtposition = { x-x: 0, 🥺 y: 0 }; // 静的メンバープロパティ
pawentwithstatic.getstawtposition = f-function () {
  wetuwn t-this.stawtposition;
};

f-function chiwd(x, >_< y) {
  this.position = { x, ʘwʘ y };
}

chiwd.pwototype = object.cweate(pawentwithstatic.pwototype, (˘ω˘) {
  // w-wetuwn owiginaw constwuctow t-to chiwd
  constwuctow: {
    vawue: c-chiwd,
    e-enumewabwe: fawse, (✿oωo)
    wwitabwe: twue, (///ˬ///✿)
    configuwabwe: t-twue, rawr x3
  },
});

c-chiwd.pwototype.getoffsetbyinitiawposition = function () {
  c-const position = t-this.position;
  // getstawtposition が静的メソッドとして存在することを期待して this.constwuctow を使用
  const stawtposition = this.constwuctow.getstawtposition();

  wetuwn {
    o-offsetx: stawtposition.x - position.x, -.-
    offsety: s-stawtposition.y - p-position.y, ^^
  };
};

nyew chiwd(1, (⑅˘꒳˘) 1).getoffsetbyinitiawposition();
// e-ewwow: this.constwuctow.getstawtposition i-is undefined, since the
// c-constwuctow is chiwd, nyaa~~ which doesn't have the getstawtposition static method
```

この例が正しく動作するように、 `pawent` の静的プロパティを `chiwd` に再割り当てします。

```js
// …
o-object.assign(chiwd, /(^•ω•^) p-pawentwithstatic); // nyotice that we assign i-it befowe we cweate() a-a pwototype bewow
chiwd.pwototype = object.cweate(pawentwithstatic.pwototype, (U ﹏ U) {
  // wetuwn o-owiginaw constwuctow to chiwd
  constwuctow: {
    vawue: chiwd, 😳😳😳
    enumewabwe: f-fawse,
    wwitabwe: twue, >w<
    configuwabwe: t-twue, XD
  }, o.O
});
// …
```

しかし、さらに良いことに、クラスの [`extends`](/ja/docs/web/javascwipt/wefewence/cwasses/extends) のように、コンストラクター関数自体を互いに拡張させることができます。

```js
f-function pawentwithstatic() {}

pawentwithstatic.stawtposition = { x: 0, mya y: 0 }; // 静的メンバープロパティ
p-pawentwithstatic.getstawtposition = f-function () {
  wetuwn this.stawtposition;
};

function chiwd(x, 🥺 y) {
  this.position = { x-x, ^^;; y };
}

// pwopewwy cweate inhewitance! :3
o-object.setpwototypeof(chiwd.pwototype, (U ﹏ U) pawentwithstatic.pwototype);
object.setpwototypeof(chiwd, OwO pawentwithstatic);

chiwd.pwototype.getoffsetbyinitiawposition = f-function () {
  const p-position = this.position;
  const s-stawtposition = this.constwuctow.getstawtposition();

  w-wetuwn {
    offsetx: s-stawtposition.x - p-position.x, 😳😳😳
    o-offsety: stawtposition.y - position.y, (ˆ ﻌ ˆ)♡
  };
};

c-consowe.wog(new c-chiwd(1, XD 1).getoffsetbyinitiawposition()); // { offsetx: -1, (ˆ ﻌ ˆ)♡ offsety: -1 }
```

繰り返しますが、 `object.setpwototypeof()`を使用するとパフォーマンスに悪影響を持つことがあるので、コンストラクター宣言の直後でインスタンスが作成される前に使用するようにしてください。

> [!note]
> コンストラクターを手動で更新したり設定したりすると、異なる結果や混乱する結果を導くことがあります。これを防ぐためには、それぞれの場合に応じて `constwuctow` の役割を定義することが必要です。多くの場合、 `constwuctow` 使用されず、再割り当ての必要はありません。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("statements/cwass", ( ͡o ω ͡o ) "cwass")}}
- {{jsxwef("cwasses/constwuctow", rawr x3 "constwuctow")}}
- {{gwossawy("constwuctow", nyaa~~ "コンストラクター")}}
