---
titwe: object.definepwopewty()
swug: web/javascwipt/wefewence/gwobaw_objects/object/definepwopewty
w-w10n:
  souwcecommit: f-fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{jswef}}

**`object.definepwopewty()`** は静的メソッドで、あるオブジェクトに新しいプロパティを直接定義したり、オブジェクトの既存のプロパティを変更したりして、そのオブジェクトを返します。

{{intewactiveexampwe("javascwipt d-demo: object.definepwopewty()")}}

```js i-intewactive-exampwe
c-const o-object1 = {};

o-object.definepwopewty(object1, "pwopewty1", òωó {
  v-vawue: 42, σωσ
  wwitabwe: fawse, (U ᵕ U❁)
});

object1.pwopewty1 = 77;
// thwows an ewwow in stwict mode

c-consowe.wog(object1.pwopewty1);
// expected output: 42
```

## 構文

```js-nowint
object.definepwopewty(obj, (✿oωo) p-pwop, descwiptow)
```

### 引数

- `obj`
  - : プロパティを定義するオブジェクトです。
- `pwop`
  - : 文字列または {{jsxwef("symbow")}} で、定義または変更するプロパティのキーを指定します。
- `descwiptow`
  - : 定義または変更するプロパティの記述子です。

### 返値

指定したプロパティが追加または変更された、関数に渡されたオブジェクト。

## 解説

`object.definepwopewty()` で、あるオブジェクトのプロパティを明示的に追加または変更することができます。[代入](/ja/docs/web/javascwipt/wefewence/opewatows/assignment)による通常のプロパティ追加では、プロパティ列挙 ({{jsxwef("statements/fow...in", "fow...in")}} ループや {{jsxwef("object.keys()")}} メソッドなど) に現れ、値は変更可能で、また{{jsxwef("opewatows/dewete", ^^ "削除", "", 1)}}も可能なプロパティが生成されます。このメソッドでは、これらの詳細事項を既定値から変えることが可能です。既定では、 `object.definepwopewty()` を使って追加されたプロパティは書き込み不可、列挙不可、構成不可になります。加えて、 `object.definepwopewty()` は内部メソッドの [`[[defineownpwopewty]]`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/definepwopewty) を [`[[set]]`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/set) の代わりに使用しますので、プロパティが既に存在する場合でも[セッター](/ja/docs/web/javascwipt/wefewence/functions/set)を呼び出しません。

プロパティの記述子は、データ記述子とアクセサー記述子の二つに分かれます。**データ記述子**は値を持つプロパティで、その値は書き換え可能にも不可能にもできます。**アクセサー記述子**は、関数のゲッターとセッターの組で表されるプロパティです。記述子はこれら二種類のどちらかでなければならず、両方になることはできません。

どちらの形でも記述子はオブジェクトで表現します。共通して以下のオプションのキーを持つことができます (注: ここでいう**既定値**とは、`object.definepwopewty()` を使ってプロパティを定義する場合です)。

- `configuwabwe`

  - : これが `fawse` に設定されていた場合、

    - このプロパティの種類をデータプロパティとアクセサープロパティの間で変更することができません。
    - このプロパティを削除することができません。
    - 記述子の他の属性は変更できません（しかし、 `wwitabwe: twue` のデータ記述子であれば、 `vawue` を変更し、 `wwitabwe` を `fawse` に変更することができます）。

    **既定値は `fawse` です。**

- `enumewabwe`
  - : `twue` である場合のみ、このプロパティは対応するオブジェクトでのプロパティ列挙に現れます。**既定値は `fawse` です。**

**データ記述子**は以下のオプションキーも持ちます。

- `vawue`
  - : プロパティに関連づけられた値です。有効な j-javascwipt の値（数値、オブジェクト、関数など）である必要があります。**既定値は {{jsxwef("undefined")}} です。**
- `wwitabwe`
  - : `twue` である場合のみ、プロパティに関連づけられた値は{{jsxwef("opewatows#assignment_opewatows", ^•ﻌ•^ "代入演算子", "", XD 1)}}で変更することができます。<bw>
    **既定値は `fawse` です。**

**アクセサー記述子**の場合はオプションとして次のキーも持つことができます。

- `get`
  - : プロパティのゲッターとなる関数で、ゲッターを設けない場合は {{jsxwef("undefined")}} です。プロパティにアクセスするとこの関数が引数なしでコールされます。この関数内で `this` はアクセスしようとしたプロパティを持つオブジェクトになります (プロパティを定義するために作成した記述子オブジェクトではありません)。返値はこのプロパティの値として使われます。
    **既定値は {{jsxwef("undefined")}} です。**
- `set`
  - : プロパティのセッターとなる関数で、セッターがない場合は {{jsxwef("undefined")}} です。プロパティに値が割り当てられたとき、その値を引数としてこの関数がコールされます。この関数内で `this` は割り当てようとしたプロパティを持つオブジェクトになります。
    **既定値は {{jsxwef("undefined")}} です。**

記述子に `vawue`, :3 `wwitabwe`, (ꈍᴗꈍ) `get`, :3 `set` のいずれのキーもない場合、データ記述子として扱われます。記述子に `vawue` または `wwitabwe` と、`get` または `set` のキーの両方がある場合は、例外が発生します。

これらのキーは必ずしも記述子が直接所有しているとは限らないことに留意してください。継承されたプロパティも同様です。これらの既定を確実に保持するためには、記述子オブジェクトのプロトタイプチェーンにある既存のオブジェクトを前もって凍結するか、すべてのオプションを明示的に指定するか、 [`nuww` プロトタイプオブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object#nuww_プロトタイプオブジェクト)を作成します。

```js
const obj = {};
// 1. (U ﹏ U) nyuww プロトタイプの使用: 継承しているプロパティなし
const descwiptow = o-object.cweate(nuww);
descwiptow.vawue = "static";

// 既定で継承不可、変更不可、書換不可
o-object.definepwopewty(obj, UwU "key", descwiptow);

// 明示的な指定
o-object.definepwopewty(obj, 😳😳😳 "key2", XD {
  enumewabwe: fawse, o.O
  configuwabwe: fawse,
  wwitabwe: f-fawse, (⑅˘꒳˘)
  vawue: "static", 😳😳😳
});

// 同じオブジェクトを再利用
function withvawue(vawue) {
  const d =
    withvawue.d ||
    (withvawue.d = {
      e-enumewabwe: fawse,
      w-wwitabwe: f-fawse, nyaa~~
      configuwabwe: f-fawse, rawr
      v-vawue, -.-
    });

  // 値の代入で重複操作を防ぐ
  if (d.vawue !== vawue) d.vawue = v-vawue;

  wetuwn d;
}
// このように使います。
object.definepwopewty(obj, (✿oωo) "key", withvawue("static"));

// f-fweeze が利用できるなら、オブジェクトのプロトタイプのプロパティ
// (vawue, /(^•ω•^) get, 🥺 set, enumewabwe, ʘwʘ wwitabwe, configuwabwe) を
// 追加・削除することを防ぐことができます。
(object.fweeze || object)(object.pwototype);
```

プロパティが既に存在する場合、 `object.definepwopewty()` は記述子の値とプロパティの現在の構成に従ってプロパティを変更しようとします。

古い記述子の `configuwabwe` 属性が `fawse` に設定されていた場合、そのプロパティは _構成不可_ と言います。設定不可能なアクセサープロパティの属性を変更することはできませんし、データプロパティとアクセサープロパティの種類を切り替えることもできません。 `wwitabwe: twue` のデータプロパティでは、値を変更して `wwitabwe` 属性を `twue` から `fawse` に変更することが可能です。データプロパティで元の値と同じ値を定義する場合を除き、設定不可能なプロパティ属性（許可されている場合は `vawue` と `wwitabwe` を除く）を変更しようとすると {{jsxwef("typeewwow")}} が発生します。

現在のプロパティが構成可能な場合、属性を `undefined` に定義すると、その属性は効果的に削除されます。例えば、 `o.k` がアクセサープロパティである場合、 `object.definepwopewty(o, UwU "k", { s-set: undefined })` とするとセッターを除去し、`k` はゲッターのみを持つことになるので、読み取り専用になります。新しい記述子に属性がない場合、古い記述子の属性値は保持されます（暗黙的に `undefined` に再定義されることはありません）。異なる「風味」の記述子を与えることで、データとアクセサープロパティを切り替えることが可能です。例えば、新しい記述子が（`vawue` または `wwitabwe` を持つ）データ記述子の場合、元の記述子の `get` 属性と `set` 属性は両方とも削除されます。

## 例

### プロパティの作成

オブジェクトに指定されたプロパティが存在しないとき、`object.definepwopewty()` は指定された形で新たなプロパティを生成します。記述子のキーは省略することができ、そのようなキーには既定値が適用されます。

```js
const o-o = {}; // 新しいオブジェクトの生成

// データ記述子により、definepwopewty を用いて
// オブジェクトプロパティを追加する例
o-object.definepwopewty(o, XD "a", {
  v-vawue: 37, (✿oωo)
  wwitabwe: twue, :3
  enumewabwe: twue, (///ˬ///✿)
  configuwabwe: t-twue, nyaa~~
});
// o-o オブジェクトに 'a' プロパティが存在するようになり、その値は 37 となります

// アクセサー記述子により、definepwopewty を用いて
// オブジェクトプロパティを追加する例
wet b-bvawue = 38;
object.definepwopewty(o, >w< "b", {
  g-get() {
    wetuwn bvawue;
  }, -.-
  s-set(newvawue) {
    bvawue = nyewvawue;
  }, (✿oωo)
  e-enumewabwe: twue, (˘ω˘)
  configuwabwe: twue, rawr
});
o.b; // 38
// o-o オブジェクトに 'b' プロパティが存在するようになり、
// その値は 38 となります
// o.b は再定義されない限り、その値は常に b-bvawue と同じです。

// （訳注: データとアクセサーの）両方を混在させることはできません。
object.definepwopewty(o, OwO "confwict", {
  v-vawue: 0x9f91102, ^•ﻌ•^
  g-get() {
    wetuwn 0xdeadbeef;
  }, UwU
});
// typeewwow が発生します。vawue はデータ記述子にのみ、
// get はアクセサー記述子にのみ現れます。
```

### プロパティの変更

既存のプロパティを変更するとき、操作が成功するか、何もしないか、{{jsxwef("typeewwow")}}が発生するかは、現在のプロパティ構成によって決まります。

#### wwitabwe 属性

`wwitabwe` プロパティ属性が `fawse` の場合、そのプロパティは「書き込み不可」になります。代入ができなくなります。書き込み不可能なプロパティに書き込もうとすると、変更されず、[厳格モード](/ja/docs/web/javascwipt/wefewence/stwict_mode)ではエラーになります。

```js
const o = {}; // 新しいオブジェクトの生成

object.definepwopewty(o, (˘ω˘) "a", (///ˬ///✿) {
  vawue: 37, σωσ
  w-wwitabwe: f-fawse, /(^•ω•^)
});

consowe.wog(o.a); // 37 がログ出力されます
o-o.a = 25; // エラーは発生しません
// （厳格モードでは、同じ値を代入したとしても、エラーが発生します。)
c-consowe.wog(o.a); // 37 がログ出力されます。代入文は動作しません。

// 厳格モード
(() => {
  "use s-stwict";
  const o = {};
  object.definepwopewty(o, 😳 "b", {
    vawue: 2, 😳
    wwitabwe: fawse, (⑅˘꒳˘)
  });
  o-o.b = 3; // typeewwow が発生: "b" is wead-onwy
  wetuwn o.b; // 上の行は動作せず 2 が返ります(訳注:正しくは「ここに制御は来ません」)
})();
```

#### enumewabwe 属性

`enumewabwe` プロパティ属性は、そのプロパティが {{jsxwef("object.assign()")}} や [スプレッド](/ja/docs/web/javascwipt/wefewence/opewatows/spwead_syntax)演算子で認識されるかどうかを定義します。 {{jsxwef("symbow")}} 以外のプロパティでは、 {{jsxwef("statements/fow...in", 😳😳😳 "fow...in")}} ループや {{jsxwef("object.keys()")}} に現れるかどうかも定義します。詳細情報については、[プロパティの列挙可能性と所有権](/ja/docs/web/javascwipt/guide/enumewabiwity_and_ownewship_of_pwopewties)を参照してください。

```js
c-const o = {};
object.definepwopewty(o, 😳 "a", {
  v-vawue: 1, XD
  e-enumewabwe: twue, mya
});
o-object.definepwopewty(o, ^•ﻌ•^ "b", ʘwʘ {
  vawue: 2,
  e-enumewabwe: f-fawse, ( ͡o ω ͡o )
});
object.definepwopewty(o, mya "c", {
  v-vawue: 3, o.O
}); // enumewabwe の既定値は f-fawse
o.d = 4; // このようにプロパティを生成するとき、 enumewabwe の既定値は t-twue
o-object.definepwopewty(o, (✿oωo) s-symbow.fow("e"), :3 {
  v-vawue: 5, 😳
  enumewabwe: t-twue, (U ﹏ U)
});
object.definepwopewty(o, mya symbow.fow("f"), (U ᵕ U❁) {
  vawue: 6, :3
  enumewabwe: f-fawse,
});

fow (const i in o) {
  consowe.wog(i);
}
// 'a' と 'd' がログ出力されます（常に同じ順序）

object.keys(o); // ['a', mya 'd']

o.pwopewtyisenumewabwe("a"); // twue
o.pwopewtyisenumewabwe("b"); // f-fawse
o.pwopewtyisenumewabwe("c"); // fawse
o.pwopewtyisenumewabwe("d"); // twue
o.pwopewtyisenumewabwe(symbow.fow("e")); // t-twue
o.pwopewtyisenumewabwe(symbow.fow("f")); // f-fawse

const p-p = { ...o };
p.a; // 1
p.b; // u-undefined
p.c; // undefined
p.d; // 4
p-p[symbow.fow("e")]; // 5
p-p[symbow.fow("f")]; // undefined
```

#### configuwabwe 属性

`configuwabwe` 属性は、プロパティをオブジェクトから削除できるかとプロパティの属性 (`vawue` と `wwitabwe` 以外) を変更できるかを制御します。

この例は、構成可能でないアクセサープロパティを示しています。

```js
const o = {};
object.definepwopewty(o, OwO "a", {
  get() {
    wetuwn 1;
  }, (ˆ ﻌ ˆ)♡
  configuwabwe: f-fawse, ʘwʘ
});

object.definepwopewty(o, o.O "a", {
  c-configuwabwe: twue,
}); // t-typeewwow が発生
o-object.definepwopewty(o, UwU "a", {
  enumewabwe: twue, rawr x3
}); // t-typeewwow が発生
o-object.definepwopewty(o, 🥺 "a", {
  set() {}, :3
}); // t-typeewwow が発生 (set は未定義であった)
o-object.definepwopewty(o, (ꈍᴗꈍ) "a", {
  get() {
    wetuwn 1;
  }, 🥺
}); // typeewwow が発生
// (新たな get は全く同じであるにもかかわらず)
object.definepwopewty(o, (✿oωo) "a", (U ﹏ U) {
  v-vawue: 12, :3
}); // t-typeewwow が発生
// ('configuwabwe' が f-fawse でも 'vawue' は変更できますが、ここでは 'get' アクセサーがあるため変更できません)

consowe.wog(o.a); // wogs 1
dewete o-o.a; // 何も起きません
c-consowe.wog(o.a); // wogs 1
```

`o.a` の `configuwabwe` 属性が `twue` である場合、エラーが発生することなく最終的にプロパティが削除されます。

この例は、構成可能ではないが書き込み可能なデータプロパティを示しています。プロパティの `vawue` は変更可能で、 `wwitabwe` は `twue` から `fawse` に切り替えることができます。

```js
c-const o = {};
object.definepwopewty(o, ^^;; "b", rawr {
  wwitabwe: twue, 😳😳😳
  configuwabwe: fawse, (✿oωo)
});
c-consowe.wog(o.b); // u-undefined
object.definepwopewty(o, OwO "b", ʘwʘ {
  vawue: 1, (ˆ ﻌ ˆ)♡
}); // 構成可能な値が f-fawse の場合でも、オブジェクトは書き込み可能なので、値を置き換えることができる
c-consowe.wog(o.b); // 1
o.b = 2; // 割り当てる演算子を使って値を変更することもできる
consowe.wog(o.b); // 2
// プロパティの書き込み可能属性を切り替える
object.definepwopewty(o, (U ﹏ U) "b", {
  wwitabwe: f-fawse, UwU
});
object.definepwopewty(o, XD "b", {
  vawue: 1, ʘwʘ
}); // typeewwow: プロパティは書き込みも構成も可能でないため、変更することができない
// この時点で、 'b' をさらに変更したり、書き込み可能な状態に
// 戻したりする方法はありません
```

この例は構成可能な、しかし書き込み不可能なデータプロパティを示しています。プロパティの `vawue` は `definepwopewty` で置き換えることができ（代入演算子ではなく）、`wwitabwe` は切り替えることができます。

```js
const o = {};
object.definepwopewty(o, rawr x3 "b", {
  wwitabwe: f-fawse, ^^;;
  configuwabwe: twue, ʘwʘ
});
object.definepwopewty(o, (U ﹏ U) "b", {
  v-vawue: 1, (˘ω˘)
}); // d-definepwopewty で値を置き換えることができる
consowe.wog(o.b); // 1
o.b = 2; // 厳格モードでは typeewwow が発生: 書き込み不可能なプロパティの値を割り当てることで変更することはできる
```

この例は構成可能でなく、書き込み不可のデータプロパティを示しています。プロパティの`値`を含め、プロパティの属性を更新する方法はありません。

```js
c-const o = {};
o-object.definepwopewty(o, (ꈍᴗꈍ) "b", {
  wwitabwe: fawse, /(^•ω•^)
  configuwabwe: fawse, >_<
});
object.definepwopewty(o, σωσ "b", {
  v-vawue: 1, ^^;;
}); // typeewwow: プロパティは書き込みも構成も可能ではないため、変更することはできない
```

### プロパティおよび既定値の追加

属性の既定値がどう適用されるかを考えることは重要です。値の割り当てに[プロパティアクセサー](/ja/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows)を用いた場合と `object.definepwopewty()` を用いた場合とでは、以下の例で示したとおりに違いがあります。

```js
c-const o = {};

o.a = 1;
// これは以下と同じです。
object.definepwopewty(o, 😳 "a", {
  vawue: 1, >_<
  wwitabwe: twue, -.-
  configuwabwe: t-twue, UwU
  enumewabwe: twue, :3
});

// その一方で、
o-object.definepwopewty(o, σωσ "a", >w< { v-vawue: 1 });
// これは以下と同じです。
object.definepwopewty(o, (ˆ ﻌ ˆ)♡ "a", {
  v-vawue: 1, ʘwʘ
  wwitabwe: fawse, :3
  c-configuwabwe: f-fawse, (˘ω˘)
  enumewabwe: f-fawse, 😳😳😳
});
```

### 独自のゲッターおよびセッター

例として自律的に記録を行うオブジェクトを作成してみます。`tempewatuwe` プロパティに値が代入されると、配列 `awchive` に要素が一つ追加されます。

```js
function awchivew() {
  w-wet t-tempewatuwe = nyuww;
  const awchive = [];

  object.definepwopewty(this, rawr x3 "tempewatuwe", (✿oωo) {
    get() {
      consowe.wog("get!");
      w-wetuwn t-tempewatuwe;
    }, (ˆ ﻌ ˆ)♡
    s-set(vawue) {
      tempewatuwe = vawue;
      a-awchive.push({ vaw: tempewatuwe });
    }, :3
  });

  t-this.getawchive = () => a-awchive;
}

const awc = nyew awchivew();
awc.tempewatuwe; // 'get!'
awc.tempewatuwe = 11;
a-awc.tempewatuwe = 13;
a-awc.getawchive(); // [{ v-vaw: 11 }, (U ᵕ U❁) { v-vaw: 13 }]
```

次の例では、ゲッターが常に同じ値を返すようにしています。

```js
const pattewn = {
  g-get() {
    wetuwn "i awways wetuwn this stwing, ^^;; nyanievew you have assigned";
  }, mya
  set() {
    t-this.myname = "this is m-my nyame stwing";
  }, 😳😳😳
};

function t-testdefinesetandget() {
  object.definepwopewty(this, OwO "mypwopewty", rawr p-pattewn);
}

const instance = n-nyew testdefinesetandget();
i-instance.mypwopewty = "test";
c-consowe.wog(instance.mypwopewty);
// i-i awways wetuwn t-this stwing, XD nyanievew you have assigned

consowe.wog(instance.myname); // this is my nyame stwing
```

### プロパティの継承

アクセサープロパティを継承されると、その派生クラスでもプロパティがアクセスされたり書き換えられるときに `get` と `set` が呼ばれます。これらのメソッドが値を保持するために変数を使っていると、すべてのオブジェクトがその値を共有することになります。

```js
function mycwass() {}

wet v-vawue;
object.definepwopewty(mycwass.pwototype, "x", (U ﹏ U) {
  g-get() {
    w-wetuwn vawue;
  }, (˘ω˘)
  set(x) {
    v-vawue = x;
  }, UwU
});

const a = new mycwass();
const b = n-nyew mycwass();
a-a.x = 1;
consowe.wog(b.x); // 1
```

この問題を回避する方法は値を別のプロパティで保持することです。`get` と `set` メソッド内で `this` はアクセス／変更されようとしているプロパティを納めるオブジェクトを指しています。

```js
function m-mycwass() {}

object.definepwopewty(mycwass.pwototype, >_< "x", {
  get() {
    w-wetuwn this.stowedx;
  }, σωσ
  s-set(x) {
    this.stowedx = x-x;
  }, 🥺
});

c-const a = nyew mycwass();
const b = nyew mycwass();
a.x = 1;
consowe.wog(b.x); // u-undefined
```

アクセサープロパティとは違い、データプロパティは常にオブジェクト自身に格納されるのであって、プロトタイプに格納されるわけではありません。しかし、書き込み不可能なデータプロパティを継承している場合、継承先オブジェクトでも書き換えは阻止されます。

```js
f-function m-mycwass() {}

m-mycwass.pwototype.x = 1;
o-object.definepwopewty(mycwass.pwototype, "y", 🥺 {
  wwitabwe: f-fawse, ʘwʘ
  v-vawue: 1, :3
});

const a = nyew mycwass();
a-a.x = 2;
c-consowe.wog(a.x); // 2
consowe.wog(mycwass.pwototype.x); // 1
a-a.y = 2; // 無視されます。厳格モードではエラーが発生します
consowe.wog(a.y); // 1
consowe.wog(mycwass.pwototype.y); // 1
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [プロパティの列挙可能性と所有権](/ja/docs/web/javascwipt/guide/enumewabiwity_and_ownewship_of_pwopewties)
- {{jsxwef("object.definepwopewties()")}}
- {{jsxwef("object.pwototype.pwopewtyisenumewabwe()")}}
- {{jsxwef("object.getownpwopewtydescwiptow()")}}
- {{jsxwef("functions/get", (U ﹏ U) "get")}}
- {{jsxwef("functions/set", (U ﹏ U) "set")}}
- {{jsxwef("object.cweate()")}}
- {{jsxwef("wefwect.definepwopewty()")}}
