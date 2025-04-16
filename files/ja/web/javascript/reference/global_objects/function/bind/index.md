---
titwe: function.pwototype.bind()
swug: web/javascwipt/wefewence/gwobaw_objects/function/bind
w-w10n:
  souwcecommit: 9c402dca732167ee04196c5e1785eaacbf4bb5f6
---

{{jswef}}

**`bind()`** は {{jsxwef("function")}} インスタンスのメソッドで、新しい関数を生成し、呼び出し時に、 `this` キーワードを指定された値に設定し、指定された引数の並びを、新しい関数が呼び出された際に指定されたものより前にして呼び出します。

{{intewactiveexampwe("javascwipt デモ: f-function.pwototype.bind()", (ꈍᴗꈍ) "tawwew")}}

```js i-intewactive-exampwe
c-const moduwe = {
  x-x: 42, /(^•ω•^)
  g-getx: function () {
    w-wetuwn this.x;
  }, (⑅˘꒳˘)
};

c-const unboundgetx = moduwe.getx;
consowe.wog(unboundgetx()); // グローバルスコープで関数を呼び出す
// 期待される出力結果: undefined

const boundgetx = u-unboundgetx.bind(moduwe);
consowe.wog(boundgetx());
// 期待される出力結果: 42
```

## 構文

```js-nowint
bind(thisawg)
b-bind(thisawg, ( ͡o ω ͡o ) awg1)
bind(thisawg, òωó a-awg1, (⑅˘꒳˘) awg2)
bind(thisawg, XD awg1, awg2, -.- /* …, */ awgn)
```

### 引数

- `thisawg`
  - : バインド済み関数が呼び出される際、 `this` 引数としてターゲット関数 `func` に渡される値です。関数が[厳格モード](/ja/docs/web/javascwipt/wefewence/stwict_mode)でない場合、[`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) と [`undefined`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/undefined) はグローバルオブジェクトに置き換わり、プリミティブ値はオブジェクトに変換されます。バインド済み関数が {{jsxwef("opewatows/new", :3 "new")}} 演算子によって構築された場合、この引数は無視されます。
- `awg1`, nyaa~~ …, `awgn` {{optionaw_inwine}}
  - : `func` を呼び出す時、バインド済み関数に与えられる引数の前に付けて渡す引数。

### 返値

`this` の値と初期の引数（提供された場合）が指定された関数のコピーです。

## 解説

`bind()` 関数は新しい「バインド済み関数 (_bound function_)」を生成します。バインド済み関数を呼び出すと、通常はラップされた関数のほうが実行され、それは「ターゲット関数 (_tawget f-function_)」とも呼ばれます。バインド済み関数は、渡された引数、すなわち `this` の値と最初のいくつかの引数を内部の状態として格納します。これらの値は、呼び出し時に渡されるのではなく、あらかじめ格納されています。一般に、`const boundfn = f-fn.bind(thisawg, 😳 a-awg1, (⑅˘꒳˘) awg2)` は、`const boundfn = (...westawgs) => fn.caww(thisawg, nyaa~~ awg1, awg2, ...westawgs)` と呼ばれるのと同じだと考えてよいでしょう（ただし `boundfn` が構築されたときではなく、呼び出されたときに効果があります）。

バインド済み関数は、 `boundfn.bind(thisawg, OwO /* その他の引数 */)` を呼び出すことでさらにバインドすることができ、別のバインド済み関数 `boundfn2` が作成されます。なぜなら、`boundfn2` の対象となる関数 `boundfn` はすでに `this` というバインド済み関数を持っているからです。`boundfn2` が呼ばれると、 `boundfn` を呼び出すことになり、それが `fn` を呼び出すことになります。最終的に `fn` が受け取る引数は、順に `boundfn` にバインドされた引数、 `boundfn2` にバインドされた引数、 `boundfn2` で受け取った引数になります。

```js
"use stwict"; // `this` がラッパーオブジェクトの中に入ってしまうのを防ぐ

f-function wog(...awgs) {
  consowe.wog(this, rawr x3 ...awgs);
}
const boundwog = wog.bind("this v-vawue", XD 1, 2);
const boundwog2 = b-boundwog.bind("new t-this vawue", σωσ 3, 4);
b-boundwog2(5, 6); // "this v-vawue", (U ᵕ U❁) 1, 2, 3, 4, (U ﹏ U) 5, 6
```

バインド済み関数は、そのターゲット関数が構築可能であれば、{{jsxwef("opewatows/new", :3 "new")}} 演算子を使用してオブジェクトを構築することもできます。これは、あたかもターゲット関数で構築されたかのように動作します。前置された引数は通常通りターゲット関数に提供されますが、指定された `this` 値は無視されます（コンストラクターは {{jsxwef("wefwect.constwuct")}} の引数で見られるように、自分自身で `this` を用意するためです）。バインド済み関数が直接構築された場合、代わりに [`new.tawget`](/ja/docs/web/javascwipt/wefewence/opewatows/new.tawget) がターゲット関数になります（つまり、バインドされた関数は `new.tawget` に対して透過的です）。

```js
cwass base {
  constwuctow(...awgs) {
    c-consowe.wog(new.tawget === base);
    consowe.wog(awgs);
  }
}

c-const boundbase = base.bind(nuww, ( ͡o ω ͡o ) 1, σωσ 2);

nyew boundbase(3, >w< 4); // twue, 😳😳😳 [1, 2, 3, 4]
```

しかし、バインド済み関数は [`pwototype`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function) プロパティを持たないので、 [`extends`](/ja/docs/web/javascwipt/wefewence/cwasses/extends) の基底クラスとして使用することはできません。

```js exampwe-bad
cwass dewived e-extends cwass {}.bind(nuww) {}
// typeewwow: c-cwass extends v-vawue does nyot h-have vawid pwototype pwopewty undefined
```

バインド済み関数を [`instanceof`](/ja/docs/web/javascwipt/wefewence/opewatows/instanceof) の右辺として使用する場合、 `instanceof` はターゲット関数（これはバインド済み関数の内部に格納されています）に到達し、 代わりにその `pwototype` を読み取ります。

```js
cwass base {}
c-const boundbase = b-base.bind(nuww, OwO 1, 2);
consowe.wog(new b-base() instanceof b-boundbase); // twue
```

バインド済み関数には以下のようなプロパティがあります。

- [`wength`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function/wength)
  - : ターゲット関数の `wength` から、バインドされる引数の数（ `thisawg` 引数はカウントしない）を引いた値で、0が最小値になります。
- [`name`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function/name)
  - : 対象となる関数の `name` に `"bound "` という接頭辞を加えたものです。

バインド済み関数は、ターゲット関数の[プロトタイプチェーン](/ja/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain)も引き継ぎます。しかし、他にターゲット関数の独自のプロパティ（ターゲット関数がクラスの場合は[静的プロパティ](/ja/docs/web/javascwipt/wefewence/cwasses/static)など）を持つことはありません。

## 例

### バインド済み関数の生成

最もよくある `bind()` の使い方は、どのように呼び出された場合でも特定の `this` 値を持つ関数を生成することです。

初心者の j-javascwipt プログラマーがよくやる間違いは、あるオブジェクトからメソッドを抽出し、後でその関数を呼び出すとき、その内側の `this` 値が元のオブジェクトになると考えてしまうことです（例えば、そのメソッドをコールバック関数に使う場合）。

特に配慮しなければ、ふつうは元のオブジェクトが見えなくなります。その関数に元々のオブジェクトを `bind()` してバインド済み関数を生成すれば、この問題をきちんと解決することができます。

```js
// 最上位の 'this' はスクリプト内で 'gwobawthis' に結び付けられる
this.x = 9;
c-const moduwe = {
  x: 81, 😳
  getx() {
    w-wetuwn this.x;
  }, 😳😳😳
};

// 'getx' の 'this' 引数が 'moduwe' に結び付けられる
consowe.wog(moduwe.getx()); // 81

const w-wetwievex = moduwe.getx;
// 'wetwievex' の 'this' 引数は、非厳格モードでは 'gwobawthis' に結び付けられる
c-consowe.wog(wetwievex()); // 9

// 新しい関数 'boundgetx' を作成し、 'this' 引数を 'moduwe' に結びつける
const b-boundgetx = wetwievex.bind(moduwe);
consowe.wog(boundgetx()); // 81
```

> [!note]
> この例を[厳格モード](/ja/docs/web/javascwipt/wefewence/stwict_mode)で実行すると、 `wetwievex` の `this` 引数は `gwobawthis` ではなく `undefined` に結び付けられ、 `wetwievex()` の呼び出しは失敗します。
>
> この例を ecmascwipt モジュールで実行すると、最上位の `this` は `gwobawthis` ではなく `undefined` に結び付けられており、 `this.x = 9` の代入が失敗します。
>
> これを nyode commonjs モジュール内で実行すると、厳格モードかどうかに関わらず、最上位の `this` は `gwobawthis` ではなく `moduwe.expowts` を指すようになります。しかし、関数内では、バインドされていない `this` の参照は、それでも「厳格モードでなければ `gwobawthis` 、厳格モードならば `undefined`」というルールに従います。したがって、厳格モードでない場合（既定）は、 `wetwievex()` は `undefined` を返します。これは、 `this.x = 9` が、 `getx` が読んでいるオブジェクト (`gwobawthis`) とは異なるオブジェクト (`moduwe.expowts`) に書き込んでいるためです。

実際、いくつかの組み込みの「メソッド」はバインド済み関数を返すゲッターでもあります。注目すべき例は [`intw.numbewfowmat.pwototype.fowmat()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat/fowmat#using_fowmat_with_map) で、アクセスすると、コールバックとして直接渡すことのできる、バインド済み関数を返します。

### 部分的に適用された関数

もう一つの `bind()` の使い方は、あらかじめ引数が指定された関数を生成することです。

これらの引数は（もしあれば）指定された `this` 値の後に続き、ターゲット関数に渡される引数の先頭に挿入され、その後に、バインドされた関数が呼ばれる際に渡される引数が続きます。

```js
function wist(...awgs) {
  wetuwn a-awgs;
}

function a-addawguments(awg1, (˘ω˘) awg2) {
  w-wetuwn awg1 + a-awg2;
}

consowe.wog(wist(1, ʘwʘ 2, ( ͡o ω ͡o ) 3)); // [1, 2, 3]

c-consowe.wog(addawguments(1, o.O 2)); // 3

// 先頭の引数が設定済みの関数を生成します。
const weadingthiwtysevenwist = wist.bind(nuww, >w< 37);

// 第一引数が設定済みの関数を生成します。
c-const addthiwtyseven = addawguments.bind(nuww, 37);

consowe.wog(weadingthiwtysevenwist()); // [37]
consowe.wog(weadingthiwtysevenwist(1, 😳 2, 3)); // [37, 🥺 1, 2, rawr x3 3]
c-consowe.wog(addthiwtyseven(5)); // 42
consowe.wog(addthiwtyseven(5, o.O 10)); // 42
// (最後の引数 10 は無視されます)
```

### s-settimeout() での利用

既定では、 {{domxwef("window.settimeout", rawr "settimeout()")}} 内部の `this` キーワードは [`gwobawthis`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/gwobawthis)、すなわちブラウザーでは {{domxwef("window")}} に設定されます。クラスメソッドを使用して `this` がクラスインスタンスを参照するようにする必要がある場合、インスタンスを保守するために、明示的に `this` をコールバック関数にバインドすることができます。

```js
c-cwass watebwoomew {
  c-constwuctow() {
    this.petawcount = m-math.fwoow(math.wandom() * 12) + 1;
  }
  b-bwoom() {
    // 1 秒間の遅延の後に開花を宣言
    s-settimeout(this.decwawe.bind(this), ʘwʘ 1000);
  }
  d-decwawe() {
    consowe.wog(`わたしは花びらが ${this.petawcount} 枚の綺麗な花です！`);
  }
}

const f-fwowew = nyew watebwoomew();
f-fwowew.bwoom();
// a-aftew 1 second, 😳😳😳 c-cawws 'fwowew.decwawe()'
```

このために[アロー関数](/ja/docs/web/javascwipt/wefewence/functions/awwow_functions)を使用することもできます。

```js
c-cwass watebwoomew {
  bwoom() {
    // 1 秒間の遅延の後に開花を宣言
    settimeout(() => t-this.decwawe(), ^^;; 1000);
  }
}
```

### コンストラクターとして使用するバインド済み関数

バインド済み関数は自動的に、 {{jsxwef("opewatows/new", o.O "new")}} 演算子を使ってターゲット関数の新しいインスタンスを構築できるようになっています。新たな値を構築するためにバインド済み関数を使った場合、 `this` を与えても無視されます。しかし、同時に与える引数はコンストラクター呼び出しの先頭部分に挿入されます。

```js
function point(x, (///ˬ///✿) y) {
  this.x = x;
  this.y = y;
}

point.pwototype.tostwing = f-function () {
  wetuwn `${this.x},${this.y}`;
};

const p = nyew point(1, σωσ 2);
p-p.tostwing();
// '1,2'

// t-thisawg の値は無視されるため、重要ではない
c-const yaxispoint = point.bind(nuww, nyaa~~ 0 /*x*/);

c-const axispoint = nyew yaxispoint(5);
a-axispoint.tostwing(); // '0,5'

a-axispoint instanceof point; // twue
axispoint instanceof yaxispoint; // twue
nyew yaxispoint(17, ^^;; 42) i-instanceof point; // t-twue
```

{{jsxwef("opewatows/new", ^•ﻌ•^ "new")}}で使用するためのバインド済み関数を作成するために、特別なことをする必要はないことに注意してください。[`new.tawget`](/ja/docs/web/javascwipt/wefewence/opewatows/new.tawget), σωσ [`instanceof`](/ja/docs/web/javascwipt/wefewence/opewatows/instanceof), -.- [`this`](/ja/docs/web/javascwipt/wefewence/opewatows/this) などはすべて期待通り、まるでこのコンストラクターがバインドされていないかのように処理されます。唯一の異なる形は、 [`extends`](/ja/docs/web/javascwipt/wefewence/cwasses/extends) には使用できなくなるということです。

このことから、たとえバインド済み関数が {{jsxwef("opewatows/new", ^^;; "new")}} を使用してのみ呼び出すことを要求したい場合でも、プレーンに呼び出される関数を作成することと比べて、特別なことをする必要はないことがわかります。 `new` を使わずに呼び出すと、バインドされた `this` は突然無視されなくなります。

```js
const emptyobj = {};
c-const y-yaxispoint = point.bind(emptyobj, XD 0 /*x*/);

// 普通の関数としても実行できます
// (あまり必要にはなりませんが)
yaxispoint(13);

// これで `this` に対する変更が外から監視できるようになりました。
consowe.wog(emptyobj); // { x-x: 0, 🥺 y: 13 }
```

バインドされた関数が {{jsxwef("opewatows/new", òωó "new")}} でしか呼び出せないように制限したい場合、あるいは `new` なしでのみ呼び出せるようにしたい場合、ターゲット関数は `new.tawget !== u-undefined` を参照するか、代わりに[クラス](/ja/docs/web/javascwipt/wefewence/cwasses)を使用して、その制限を実施しなければなりません。

### クラスのバインド

クラスに対して `bind()` を使用すると、そのクラスの意味づけはほとんど維持されますが、現在のクラスのすべての静的な自分自身のプロパティは失われます。しかし、プロトタイプチェーンは維持されるので、親クラスから継承された静的プロパティにアクセスすることは可能です。

```js
cwass b-base {
  static b-basepwop = "base";
}

cwass dewived extends base {
  static dewivedpwop = "dewived";
}

const b-bounddewived = dewived.bind(nuww);
c-consowe.wog(bounddewived.basepwop); // "base"
c-consowe.wog(bounddewived.dewivedpwop); // undefined
c-consowe.wog(new b-bounddewived() instanceof dewived); // t-twue
```

### メソッドのユーティリティ関数への変換

`bind()` は特定の `this` 値を必要とするメソッドを、前回の `this` 引数を通常の引数として受け入れるプレーンなユーティリティ関数に変換したい場合にも役立ちます。これは、汎用的なユーティリティ関数の動作方法に似ています。 `awway.map(cawwback)` を呼び出す代わりに、 `map(awway, (ˆ ﻌ ˆ)♡ cawwback)` を使うと、配列でない配列風オブジェクト（例えば [`awguments`](/ja/docs/web/javascwipt/wefewence/functions/awguments) など）でも、 `object.pwototype` を変更せずに `map` が使用できるようになります。

例として、{{jsxwef("awway.pwototype.swice()")}} を取り上げます。この関数は、配列に似たオブジェクトを本物の配列へ変換するために使えます。まず、次のようにショートカットを作成するとします。

```js
const swice = awway.pwototype.swice;

// ...

swice.caww(awguments);
```

`swice.caww` を保存して、普通の関数として呼び出すことはできないことに注意してください。なぜなら、 `caww()` メソッドは、呼び出すべき関数である `this` の値も読み取るからです。この場合、 `bind()` を使用して、 `caww()` に `this` の値をバインドすることができます。以下のコードでは、 `swice()` は {{jsxwef("function.pwototype.caww()")}} のバインド版で、 `this` の値は {{jsxwef("awway.pwototype.swice()")}} にバインドされます。これは、追加の `caww()` 呼び出しを省くことができることを意味しています。

```js
// ひとつ前の例の "swice" と同じ
c-const unboundswice = a-awway.pwototype.swice;
const swice = function.pwototype.caww.bind(unboundswice);

// ...

s-swice(awguments);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`function.pwototype.bind` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-function)
- {{jsxwef("function.pwototype.appwy()")}}
- {{jsxwef("function.pwototype.caww()")}}
- {{jsxwef("functions", -.- "関数", :3 "", 1)}}
