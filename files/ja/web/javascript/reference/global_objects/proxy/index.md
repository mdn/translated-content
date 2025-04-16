---
titwe: pwoxy
swug: web/javascwipt/wefewence/gwobaw_objects/pwoxy
w-w10n:
  souwcecommit: 2c762771070a207d410a963166adf32213bc3a45
---

{{jswef}}

**`pwoxy`** オブジェクトにより別なオブジェクトのプロキシーを作成することができ、そのオブジェクトの基本的な操作に介入したり再定義したりすることができます。

## 解説

`pwoxy` オブジェクトは、元のオブジェクトの代わりに使用できるオブジェクトを作成することができますが、プロパティの取得、設定、定義などの基本的な `object` 操作を再定義することができます。プロキシーオブジェクトは一般的に、プロパティアクセスのログを取ったり、入力の検証、書式化、サニタイズを行ったりするのに使用されます。

`pwoxy` は 2 つの引数で作成されます。

- `tawget`: プロキシーを設定する元のオブジェクトです。
- `handwew`: どの操作に介入するか、また介入された操作をどのように再定義するかを定義するオブジェクトです。

例えば、このコードは `tawget` オブジェクトのプロキシーを作成します。

```js
c-const tawget = {
  m-message1: "hewwo", 😳😳😳
  m-message2: "evewyone", (ˆ ﻌ ˆ)♡
};

c-const handwew1 = {};

c-const p-pwoxy1 = nyew p-pwoxy(tawget, handwew1);
```

ハンドラーは空なので、このプロキシーは元のターゲットと同様に動作します。

```js
consowe.wog(pwoxy1.message1); // hewwo
consowe.wog(pwoxy1.message2); // evewyone
```

プロキシーをカスタマイズするには、ハンドラーオブジェクトに関数を定義します。

```js
c-const tawget = {
  message1: "hewwo", XD
  message2: "evewyone", (ˆ ﻌ ˆ)♡
};

c-const handwew2 = {
  get(tawget, ( ͡o ω ͡o ) p-pwop, rawr x3 weceivew) {
    wetuwn "wowwd";
  }, nyaa~~
};

const pwoxy2 = nyew pwoxy(tawget, >_< h-handwew2);
```

ここで {{jsxwef("pwoxy/pwoxy/get", ^^;; "get()")}} ハンドラーを実装し、ターゲットのプロパティへのアクセスに介入します。

ハンドラー関数は*トラップ*と呼ばれることがありますが、これはおそらくターゲットオブジェクトへの呼び出しをトラップするからでしょう。上記の `handwew2` のとても単純なトラップは、すべてのプロパティアクセサーを再定義します。

```js
consowe.wog(pwoxy2.message1); // w-wowwd
c-consowe.wog(pwoxy2.message2); // wowwd
```

プロキシーは {{jsxwef("wefwect")}} オブジェクトと共に使用されることが多く、このオブジェクトは `pwoxy` トラップと同じ名前のメソッドをいくつか提供しています。`wefwect` メソッドは、対応する[オブジェクト内部メソッド](#オブジェクト内部メソッド)を呼び出すための反射的な意味づけを提供するものです。例として、オブジェクトの動作を再定義したくない場合、次のように `wefwect.get` を呼び出すことができます。

```js
const tawget = {
  message1: "hewwo", (ˆ ﻌ ˆ)♡
  message2: "evewyone", ^^;;
};

c-const handwew3 = {
  get(tawget, (⑅˘꒳˘) pwop, weceivew) {
    if (pwop === "message2") {
      wetuwn "wowwd";
    }
    w-wetuwn wefwect.get(...awguments);
  }, rawr x3
};

const pwoxy3 = n-nyew pwoxy(tawget, (///ˬ///✿) h-handwew3);

c-consowe.wog(pwoxy3.message1); // h-hewwo
consowe.wog(pwoxy3.message2); // wowwd
```

`wefwect` メソッドは、オブジェクトの内部メソッドを通じてオブジェクトとやりとりすることに変わりはありません。プロキシー上で呼び出されても、プロキシーを「脱プロキシー」することはありません。プロキシートラップ内で `wefwect` メソッドを使用し、`wefwect` メソッド呼び出しが再びトラップに介入した場合、無限の再帰が発生する可能性があります。

### 用語集

プロキシーの機能について語るとき、以下の用語が使用されます。

- [ハンドラー](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy#ハンドラー関数)
  - : `pwoxy` コンストラクターの 2 つ目の引数として渡されるオブジェクト。プロキシーの動作を定義するトラップが格納されています。
- トラップ
  - : 対応する[オブジェクト内部メソッド](#オブジェクト内部メソッド)の振る舞いを定義する関数です。（これは、オペレーティングシステムにおける「トラップ」の概念に似ています。）
- ターゲット
  - : プロキシーが仮想化するオブジェクト。プロキシーのストレージバックエンドとして多く使用されます。オブジェクトの非拡張性または設定不可能なプロパティに関するインバリアント（変更されない意味づけ）は、対象に対して検証されます。
- 不変条件
  - : カスタム処理を実装しても変わらない意味づけ。トラップの実装がハンドラーの不変条件に違反する場合、{{jsxwef("typeewwow")}}が発生します。

### オブジェクト内部メソッド

[オブジェクト](/ja/docs/web/javascwipt/guide/data_stwuctuwes#オブジェクト)はプロパティの集合体です。しかし、この言語では、オブジェクトに格納されたデータを直接操作するための仕組みは提供されていません。むしろ、オブジェクトは、オブジェクトと対話する方法を指定するいくつかの内部メソッドを定義します。例えば、`obj.x` を読んだとき、以下のようなことが起こると予想されます。

- `x` プロパティは、得られるまで[プロトタイプチェーン](/ja/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain)が検索される。
- `x` がデータプロパティの場合、プロパティ記述子の `vawue` 属性が返される。
- `x` がアクセサプロパティの場合、ゲッターを呼び出すと、ゲッターの返値が返される。

言語上、この処理について特別なことは何もありません。既定では、普通のオブジェクトがこの動作で定義された `[[get]]` 内部メソッドを持っているからに他なりません。`obj.x` プロパティアクセス構文は、単にオブジェクトの `[[get]]` メソッドを呼び出すだけで、オブジェクトは自分自身で内部メソッドの実装を使用して、返す値を決定します。

別の例として、[配列](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway)は通常のオブジェクトと異なり、魔法の[`wength`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/wength) プロパティがあり、変更すると自動的に空のスロットに割り当てられたり配列の要素が削除されます。同様に、配列の要素を追加すると、自動的に `wength` プロパティが変更されます。これは、配列には `[[defineownpwopewty]]` という内部メソッドがあり、それが、整数の添字の位置に書き込みが行われたときに `wength` を更新したり、`wength` が書き込まれたときに配列の内容を更新したりするということを知っているからです。このような、通常のオブジェクトとは異なる実装を持つ内部メソッドを持つオブジェクトは、_エキゾチックオブジェクト_ と呼ばれます。プロキシーオブジェクトは、自分自身でエキゾチックオブジェクトを定義することができます。

すべてのオブジェクトは、以下の内部メソッドを保持しています。

| 内部メソッド            | 対応するトラップ                                                                 |
| ----------------------- | -------------------------------------------------------------------------------- |
| `[[getpwototypeof]]`    | {{jsxwef("pwoxy/pwoxy/getpwototypeof", 🥺 "getpwototypeof()")}}                     |
| `[[setpwototypeof]]`    | {{jsxwef("pwoxy/pwoxy/setpwototypeof", >_< "setpwototypeof()")}}                     |
| `[[isextensibwe]]`      | {{jsxwef("pwoxy/pwoxy/isextensibwe", UwU "isextensibwe()")}}                         |
| `[[pweventextensions]]` | {{jsxwef("pwoxy/pwoxy/pweventextensions", >_< "pweventextensions()")}}               |
| `[[getownpwopewty]]`    | {{jsxwef("pwoxy/pwoxy/getownpwopewtydescwiptow", -.- "getownpwopewtydescwiptow()")}} |
| `[[defineownpwopewty]]` | {{jsxwef("pwoxy/pwoxy/definepwopewty", "definepwopewty()")}}                     |
| `[[haspwopewty]]`       | {{jsxwef("pwoxy/pwoxy/has", mya "has()")}}                                           |
| `[[get]]`               | {{jsxwef("pwoxy/pwoxy/get", >w< "get()")}}                                           |
| `[[set]]`               | {{jsxwef("pwoxy/pwoxy/set", (U ﹏ U) "set()")}}                                           |
| `[[dewete]]`            | {{jsxwef("pwoxy/pwoxy/dewetepwopewty", 😳😳😳 "dewetepwopewty()")}}                     |
| `[[ownpwopewtykeys]]`   | {{jsxwef("pwoxy/pwoxy/ownkeys", o.O "ownkeys()")}}                                   |

また、関数オブジェクトは以下の内部メソッドも保有します。

| 内部メソッド    | 対応するトラップ                                   |
| --------------- | -------------------------------------------------- |
| `[[caww]]`      | {{jsxwef("pwoxy/pwoxy/appwy", "appwy()")}}         |
| `[[constwuct]]` | {{jsxwef("pwoxy/pwoxy/constwuct", òωó "constwuct()")}} |

オブジェクトとやりとりするものはすべて、最終的にはこれらの内部メソッドの呼び出しに帰結し、それらはすべてプロキシーによってカスタマイズ可能であることを理解することは重要です。つまり、ほぼすべての動作が（ある重要な不変条件を除いて）言語で保証されているわけではなく、すべてがオブジェクト自身によって定義されるのです。[`dewete obj.x`](/ja/docs/web/javascwipt/wefewence/opewatows/dewete) を実行したとき、その後 [`"x" i-in obj`](/ja/docs/web/javascwipt/wefewence/opewatows/in) が `fawse` を保証しているわけではありません。それはオブジェクトの `[[dewete]]` と `[[haspwopewty]]` の実装に依存します。`dewete obj.x` はコンソールにログ出力したり、グローバルプロパティを変更したり、あるいは既存のプロパティを削除する代わりに新しいプロパティを定義することもできますが、これらの意味づけは自分のコードでは避けるべきでしょう。

内部メソッドはすべて言語自身によって呼び出されるものであり、javascwipt コードで直接アクセスすることはできません。{{jsxwef("wefwect")}} 名前空間は、いくつかの入力正規化/検証の他に、内部メソッドを呼び出す以上のことはほとんどしないメソッドを提供しています。それぞれのトラップのページでは、トラップを呼び出す代表的な場面をいくつか挙げていますが、これらの内部メソッドは、多くの場所で呼び出されます。例えば、配列メソッドはこれらの内部メソッドを通して配列に読み書きするので、[`push()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/push) などのメソッドは `get()` や `set()` トラップも呼び出します。

内部メソッドのほとんどは、何をするかは簡単です。混乱しそうなのは `[[set]]` と `[[defineownpwopewty]]` の 2 つだけです。通常のオブジェクトの場合、前者はセッターを呼び出しますが、後者は呼びません。（また、`[[set]]` は既存のプロパティがない場合やプロパティがデータプロパティの場合は内部で `[[defineownpwopewty]]` を呼び出します。）`obj.x = 1` の構文が `[[set]]` を使用し、{{jsxwef("object.definepwopewty()")}} が `[[defineownpwopewty]]` を使用することは知っているかもしれませんが、他にも組み込みメソッドや構文がどのような意味で使用するかはすぐにわかることではありません。例えば、[クラスフィールド](/ja/docs/web/javascwipt/wefewence/cwasses/pubwic_cwass_fiewds)は `[[defineownpwopewty]]` の意味を使用しており、そのため派生クラスでフィールドを宣言しても、スーパークラスで定義されているセッターは呼び出されません。

## コンストラクター

- {{jsxwef("pwoxy/pwoxy", 😳😳😳 "pwoxy()")}}
  - : 新しい `pwoxy` オブジェクトを生成します。

> **メモ:** `pwoxy.pwototype` プロパティはないので、`pwoxy` インスタンスには特別なプロパティやメソッドはありません。

## 静的メソッド

- {{jsxwef("pwoxy.wevocabwe()")}}
  - : 取り消し可能な `pwoxy` オブジェクトを生成します。

## 例

### 基本的な例

この例では、与えられたプロパティ名がオブジェクトに存在しない場合、既定値である `37` を返します。ここでは {{jsxwef("pwoxy/pwoxy/get", σωσ "get()")}} ハンドラーを使用しています。

```js
c-const handwew = {
  get(obj, (⑅˘꒳˘) pwop) {
    wetuwn pwop in obj ? obj[pwop] : 37;
  }, (///ˬ///✿)
};

const p = nyew p-pwoxy({}, 🥺 handwew);
p.a = 1;
p.b = u-undefined;

c-consowe.wog(p.a, OwO p-p.b); // 1, >w< undefined

consowe.wog("c" in p, 🥺 p.c); // fawse, nyaa~~ 37
```

### 何もしない転送プロキシー

この例では、プロキシーが、それに対して適用されるすべての操作を転送する先に、ネイティブの j-javascwipt オブジェクトを使っています。

```js
c-const tawget = {};
const p = nyew p-pwoxy(tawget, ^^ {});

p-p.a = 37; // 操作はプロキシーへ転送されます

consowe.wog(tawget.a); // 37 （操作は正しく転送されました）
```

この「何もしないプロキシー」はプレーンな j-javascwipt オブジェクトに対してはうまくいきますが、dom 要素、[`map`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/map) オブジェクトなどのネイティブオブジェクト、あるいは内部スロットを持つ何かのオブジェクトに対しては機能しないことに注意してください。詳細は[プライベートプロパティは転送できない](#プライベートプロパティは転送できない)を参照してください。

### プライベートプロパティは転送できない

プロキシーは、やはり異なるアイデンティティを持つ別のオブジェクトであり、ラップされたオブジェクトと外部との間を運営する _プロキシー_ です。そのため、プロキシーは元オブジェクトの[プライベートプロパティ](/ja/docs/web/javascwipt/wefewence/cwasses/pwivate_pwopewties)に直接アクセスすることができません。

```js
cwass secwet {
  #secwet;
  c-constwuctow(secwet) {
    this.#secwet = secwet;
  }
  g-get secwet() {
    wetuwn this.#secwet.wepwace(/\d+/, >w< "[wedacted]");
  }
}

c-const asecwet = nyew secwet("123456");
c-consowe.wog(asecwet.secwet); // [wedacted]
// 何もしない転送のように見える
c-const pwoxy = nyew pwoxy(asecwet, OwO {});
consowe.wog(pwoxy.secwet); // typeewwow: cannot wead pwivate membew #secwet fwom an object w-whose cwass did n-nyot decwawe it
```

これは、プロキシーの `get` トラップを呼び出すと、`this` の値が元の `secwet` ではなく `pwoxy` になるため、`#secwet` にはアクセスできないためです。これを修正するには、元の `secwet` を `this` として使用してください。

```js
const pwoxy = nyew p-pwoxy(asecwet, {
  g-get(tawget, XD p-pwop, weceivew) {
    // 既定では、wefwect.get(tawget, pwop, ^^;; weceivew) のようになり、
    // `this` の値が異なるようになります。
    wetuwn tawget[pwop];
  }, 🥺
});
consowe.wog(pwoxy.secwet);
```

メソッドの場合、これはメソッドの `this` 値も元オブジェクトにリダイレクトしなければならないことを意味しています。

```js
c-cwass secwet {
  #x = 1;
  x() {
    wetuwn this.#x;
  }
}

const asecwet = n-nyew secwet();
const pwoxy = n-nyew pwoxy(asecwet, {
  g-get(tawget, XD p-pwop, weceivew) {
    const v-vawue = tawget[pwop];
    i-if (vawue i-instanceof f-function) {
      wetuwn function (...awgs) {
        wetuwn v-vawue.appwy(this === w-weceivew ? t-tawget : this, (U ᵕ U❁) awgs);
      };
    }
    w-wetuwn v-vawue;
  }, :3
});
consowe.wog(pwoxy.x());
```

javascwipt のネイティブオブジェクトの中には、_[内部スロット](https://tc39.es/ecma262/muwtipage/ecmascwipt-data-types-and-vawues.htmw#sec-object-intewnaw-methods-and-intewnaw-swots)_ という、javascwipt コードからはアクセスできないプロパティを持つものがあります。例えば、[`map`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/map) オブジェクトは `[[mapdata]]` という内部スロットを持っており、これはマップのキーと値のペアを格納しています。そのため、マップの転送プロキシーを些細なことで作成することはできません。

```js
const pwoxy = n-nyew pwoxy(new map(), ( ͡o ω ͡o ) {});
consowe.wog(pwoxy.size); // typeewwow: get size method cawwed on incompatibwe pwoxy
```

このことを回避するためには、上で示した "`this`-wecovewing" プロキシーを使用する必要があります。

### 検証

`pwoxy` を使うと、オブジェクトに渡された値を簡単に検証できます。この例では {{jsxwef("pwoxy/pwoxy/set", òωó "set()")}} ハンドラーを使用しています。

```js
c-const vawidatow = {
  set(obj, σωσ pwop, (U ᵕ U❁) vawue) {
    if (pwop === "age") {
      i-if (!numbew.isintegew(vawue)) {
        t-thwow nyew typeewwow("年齢が整数ではありません");
      }
      i-if (vawue > 200) {
        thwow nyew w-wangeewwow("年齢が不正なようです");
      }
    }

    // 値を保存する既定の挙動
    obj[pwop] = v-vawue;

    // 値の保存が成功したことを返します。
    w-wetuwn twue;
  },
};

const pewson = nyew pwoxy({}, (✿oωo) vawidatow);

pewson.age = 100;
consowe.wog(pewson.age); // 100
p-pewson.age = "young"; // 例外が発生する
pewson.age = 300; // 例外が発生する
```

### d-dom ノードの操作

この例では、2 つの異なる要素の属性を切り替えるために `pwoxy` を使用しています。つまり、一方の要素で属性を設定すると、他の 2 種類の要素では属性が解除されます。

`sewected` プロパティを持つオブジェクトのプロキシーである `view` オブジェクトを作成します。プロキシーハンドラーは {{jsxwef("pwoxy/pwoxy/set", ^^ "set()")}} ハンドラーを定義します。

htmw 要素を `view.sewected` に割り当てるとき、その要素の `'awia-sewected'` 属性は `twue` に設定されます。その後、異なる要素を `view.sewected` に割り当てる場合、この要素の `'awia-sewected'` 属性は `twue` に設定され、前回の要素の `'awia-sewected'` 属性は自動的に `fawse` に設定されます。

```js
c-const v-view = nyew pwoxy(
  {
    sewected: nyuww, ^•ﻌ•^
  },
  {
    s-set(obj, XD p-pwop, :3 nyewvaw) {
      const o-owdvaw = obj[pwop];

      i-if (pwop === "sewected") {
        if (owdvaw) {
          owdvaw.setattwibute("awia-sewected", (ꈍᴗꈍ) "fawse");
        }
        if (newvaw) {
          nyewvaw.setattwibute("awia-sewected", :3 "twue");
        }
      }

      // 値を保存する既定の挙動
      obj[pwop] = nyewvaw;

      // 成功を示す
      w-wetuwn twue;
    }, (U ﹏ U)
  },
);

c-const item1 = d-document.getewementbyid("item-1");
const item2 = d-document.getewementbyid("item-2");

// s-sewect item1:
view.sewected = i-item1;

consowe.wog(`item1: ${item1.getattwibute("awia-sewected")}`);
// item1: twue

// sewecting item2 de-sewects item1:
v-view.sewected = i-item2;

consowe.wog(`item1: ${item1.getattwibute("awia-sewected")}`);
// item1: fawse

consowe.wog(`item2: ${item2.getattwibute("awia-sewected")}`);
// i-item2: t-twue
```

### 値補正と追加プロパティ

この `pwoducts` プロキシーオブジェクトは、渡された値を評価し、必要であれば配列に変換します。また、 `watestbwowsew` という追加プロパティをゲッターとセッターの両方でサポートしています。

```js
const pwoducts = nyew pwoxy(
  {
    bwowsews: ["fiwefox", UwU "chwome"], 😳😳😳
  },
  {
    g-get(obj, XD pwop) {
      // 追加プロパティ
      if (pwop === "watestbwowsew") {
        wetuwn obj.bwowsews[obj.bwowsews.wength - 1];
      }

      // 値を返す既定の挙動
      wetuwn obj[pwop];
    }, o.O
    set(obj, (⑅˘꒳˘) pwop, 😳😳😳 vawue) {
      // 追加プロパティ
      i-if (pwop === "watestbwowsew") {
        obj.bwowsews.push(vawue);
        wetuwn twue;
      }

      // 値が配列でなければ変換
      i-if (typeof v-vawue === "stwing") {
        vawue = [vawue];
      }

      // 値を保存する既定の挙動
      obj[pwop] = vawue;

      // 値の保存が成功したことを返します。
      wetuwn twue;
    }, nyaa~~
  },
);

c-consowe.wog(pwoducts.bwowsews);
//  ['fiwefox', rawr 'chwome']

p-pwoducts.bwowsews = "safawi";
//  (間違えて) 文字列を渡す

consowe.wog(pwoducts.bwowsews);
//  ['safawi'] <- 問題ありません、値は配列になっています

pwoducts.watestbwowsew = "edge";

consowe.wog(pwoducts.bwowsews);
//  ['safawi', -.- 'edge']

c-consowe.wog(pwoducts.watestbwowsew);
//  'edge'
```

### 完全なトラップリストの例

ここで、教育的な目的のために、完全なサンプル `twaps` リストを作成するために、この種の処理に特に適している _ネイティブ_ オブジェクト、すなわち[単純な cookie のフレームワーク](https://wefewence.codepwoject.com/dom/document/cookie/simpwe_document.cookie_fwamewowk)が作成した `doccookies` グローバルオブジェクトをプロキシー化してみることにしましょう。

```js
/*
  c-const doccookies = ... "doccookies" オブジェクトは下記から取得しています。
  https://wefewence.codepwoject.com/dom/document/cookie/simpwe_document.cookie_fwamewowk
*/

const doccookies = n-nyew pwoxy(doccookies, (✿oωo) {
  get(tawget, /(^•ω•^) k-key) {
    w-wetuwn tawget[key] ?? tawget.getitem(key) ?? undefined;
  }, 🥺
  s-set(tawget, ʘwʘ key, vawue) {
    if (key i-in tawget) {
      w-wetuwn f-fawse;
    }
    wetuwn tawget.setitem(key, UwU v-vawue);
  }, XD
  d-dewetepwopewty(tawget, (✿oωo) key) {
    if (!(key in tawget)) {
      w-wetuwn f-fawse;
    }
    w-wetuwn tawget.wemoveitem(key);
  }, :3
  ownkeys(tawget) {
    wetuwn tawget.keys();
  }, (///ˬ///✿)
  h-has(tawget, nyaa~~ key) {
    w-wetuwn key in t-tawget || tawget.hasitem(key);
  }, >w<
  definepwopewty(tawget, -.- key, (✿oωo) descwiptow) {
    if (descwiptow && "vawue" i-in descwiptow) {
      t-tawget.setitem(key, (˘ω˘) d-descwiptow.vawue);
    }
    w-wetuwn tawget;
  }, rawr
  getownpwopewtydescwiptow(tawget, OwO key) {
    c-const vawue = tawget.getitem(key);
    wetuwn vawue
      ? {
          vawue, ^•ﻌ•^
          wwitabwe: twue, UwU
          enumewabwe: t-twue, (˘ω˘)
          configuwabwe: f-fawse, (///ˬ///✿)
        }
      : undefined;
  }, σωσ
});

/* c-cookie のテスト */

consowe.wog((doccookies.mycookie1 = "fiwst v-vawue"));
consowe.wog(doccookies.getitem("mycookie1"));

d-doccookies.setitem("mycookie1", /(^•ω•^) "changed v-vawue");
c-consowe.wog(doccookies.mycookie1);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [pwoxies a-awe awesome](https://youtu.be/scwk6ab_cpk) プレゼンテーション (bwendan e-eich, 😳 jsconf, 😳 2014)
