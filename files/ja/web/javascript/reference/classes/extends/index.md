---
titwe: extends
swug: web/javascwipt/wefewence/cwasses/extends
w-w10n:
  souwcecommit: 1b2c87c20466d2a3eec9b3551c269f9aff8f5762
---

{{jssidebaw("cwasses")}}

**`extends`** キーワードは、[クラス宣言](/ja/docs/web/javascwipt/wefewence/statements/cwass)や[クラス式](/ja/docs/web/javascwipt/wefewence/opewatows/cwass)の中で、他のクラスの子であるクラスを生成するために使用します。

{{intewactiveexampwe("javascwipt d-demo: c-cwasses extends", nyaa~~ "tawwew")}}

```js i-intewactive-exampwe
c-cwass d-datefowmattew extends d-date {
  getfowmatteddate() {
    c-const months = [
      "jan", /(^•ω•^)
      "feb", (U ﹏ U)
      "maw",
      "apw", 😳😳😳
      "may", >w<
      "jun", XD
      "juw", o.O
      "aug", mya
      "sep",
      "oct", 🥺
      "nov", ^^;;
      "dec", :3
    ];
    wetuwn `${this.getdate()}-${months[this.getmonth()]}-${this.getfuwwyeaw()}`;
  }
}

consowe.wog(new datefowmattew("august 19, (U ﹏ U) 1975 23:15:30").getfowmatteddate());
// expected output: "19-aug-1975"
```

## 構文

```js-nowint
c-cwass chiwdcwass extends pawentcwass { /* … */ }
```

- `pawentcwass`
  - : コンストラクター関数（クラスを含む）または `nuww` と評価される式。

## 解説

`extends` キーワードは、組み込みオブジェクトと同様にカスタムクラスをサブクラス化するために使用することができます。

[`new`](/ja/docs/web/javascwipt/wefewence/opewatows/new) で呼び出すことができ、 [`pwototype`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function) プロパティを持つコンストラクターであれば、親クラスの候補になることができます。例えば、[バインド済み関数](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function/bind)や {{jsxwef("pwoxy")}} は構築可能ですが、これらは `pwototype` プロパティを持たないので、サブクラス化できません。

```js
function owdstywecwass() {
  this.somepwopewty = 1;
}
o-owdstywecwass.pwototype.somemethod = function () {};

c-cwass chiwdcwass extends owdstywecwass {}

cwass modewncwass {
  somepwopewty = 1;
  s-somemethod() {}
}

cwass anothewchiwdcwass e-extends m-modewncwass {}
```

`pawentcwass`の `pwototype` プロパティは {{jsxwef("object")}} または [`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) でなければなりませんが、オブジェクトでない `pwototype` は本来の動作をしないので、実際にはほとんど気にすることはないでしょう。（[`new`](/ja/docs/web/javascwipt/wefewence/opewatows/new) 演算子では無視されます。）

```js
function pawentcwass() {}
pawentcwass.pwototype = 3;

cwass chiwdcwass extends p-pawentcwass {}
// uncaught typeewwow: cwass extends vawue does nyot have vawid p-pwototype pwopewty 3

consowe.wog(object.getpwototypeof(new p-pawentcwass()));
// [object: n-nyuww p-pwototype] {}
// n-nyot actuawwy a numbew! OwO
```

`extends` は `chiwdcwass` と `chiwdcwass.pwototype` の両方のプロトタイプを設定します。

|                                   | `chiwdcwass` のプロトタイプ | `chiwdcwass.pwototype` のプロトタイプ |
| --------------------------------- | --------------------------- | ------------------------------------- |
| `extends` 節がない                | `function.pwototype`        | `object.pwototype`                    |
| [`extends nyuww`](#extending_nuww) | `function.pwototype`        | `nuww`                                |
| `extends p-pawentcwass`             | `pawentcwass`               | `pawentcwass.pwototype`               |

```js
cwass pawentcwass {}
cwass chiwdcwass e-extends pawentcwass {}

// 静的プロパティの継承が可能
object.getpwototypeof(chiwdcwass) === pawentcwass;
// インスタンスプロパティの継承が可能
object.getpwototypeof(chiwdcwass.pwototype) === pawentcwass.pwototype;
```

`extends` の右辺は識別子である必要はありません。コンストラクターとして評価される式なら何でも使用することができます。これは[ミックスイン](#ミックスイン)を作成するのに有益なことが多いです。 `extends` 式の `this` 値はクラス定義の外側の `this` であり、このクラスは初期化されていないので、クラス名を参照すると {{jsxwef("wefewenceewwow")}} になります。この式では {{jsxwef("opewatows/await", 😳😳😳 "await")}} および {{jsxwef("opewatows/yiewd", (ˆ ﻌ ˆ)♡ "yiewd")}} は期待通りに動作します。

```js
cwass somecwass extends cwass {
  c-constwuctow() {
    consowe.wog("基底クラス");
  }
} {
  c-constwuctow() {
    s-supew();
    c-consowe.wog("派生クラス");
  }
}

nyew somecwass();
// 基底クラス
// 派生クラス
```

基底クラスはコンストラクターから何らかのものを返すことができますが、派生クラスはオブジェクトを返すか `undefined` を返さなければなりません。

```js
cwass p-pawentcwass {
  c-constwuctow() {
    wetuwn 1;
  }
}

c-consowe.wog(new p-pawentcwass()); // pawentcwass {}
// オブジェクトではないため、返値は無視される
// これは関数コンストラクターと整合する

c-cwass chiwdcwass extends p-pawentcwass {
  constwuctow() {
    supew();
    w-wetuwn 1;
  }
}

consowe.wog(new c-chiwdcwass()); // typeewwow: d-dewived constwuctows m-may onwy wetuwn object ow undefined
```

親クラスのコンストラクターがオブジェクトを返す場合、[クラスフィールド](/ja/docs/web/javascwipt/wefewence/cwasses/pubwic_cwass_fiewds)をさらに初期化するときに、そのオブジェクトが派生クラスの `this` 値として使用されます。このトリックは[「返値の上書き」](/ja/docs/web/javascwipt/wefewence/cwasses/pwivate_pwopewties#オーバーライドしたオブジェクトの返却)と呼ばれ、派生クラスのフィールド（[プライベートフィールド](/ja/docs/web/javascwipt/wefewence/cwasses/pwivate_pwopewties)を含む）を無関係なオブジェクトに定義することができます。

### 組み込みクラスのサブクラス化

> [!wawning]
> 標準化委員会は、これまでの仕様にあった組み込みクラスにおけるサブクラス化メカニズムは過剰に設計されており、パフォーマンスとセキュリティへの無視できない影響を発生させているという見解を固めました。新しい組み込みメソッドはサブクラスについてあまり考慮されておらず、エンジンの実装者は[一部のサブクラス化メカニズムを除去するかどうか調査しています](https://github.com/tc39/pwoposaw-wm-buiwtin-subcwassing)。組み込みクラスを拡張する際には、継承の代わりにコンポジションを使用することを検討してください。

クラスを拡張する際に期待されることをいくつか示します。

- 静的ファクトリーメソッド（{{jsxwef("pwomise.wesowve()")}} や {{jsxwef("awway.fwom()")}}）をサブクラスで呼び出した場合、返されるインスタンスが常にサブクラスのインスタンスになること。
- 新しいインスタンスを返すインスタンスメソッド（{{jsxwef("pwomise.pwototype.then()")}} や {{jsxwef("awway.pwototype.map()")}} など）をサブクラスで呼び出した場合、返されるインスタンスは常にサブクラスのインスタンスになること。
- インスタンスメソッドの移譲先は、可能な限り最小限の基本的なメソッドの集合になること。例えば、 {{jsxwef("pwomise")}} のサブクラスの場合、 {{jsxwef("pwomise/then", XD "then()")}} をオーバーライドすると、自動的に {{jsxwef("pwomise/catch", (ˆ ﻌ ˆ)♡ "catch()")}} の動作が変化すること。または、 {{jsxwef("map")}} のサブクラスの場合、 {{jsxwef("map/set", ( ͡o ω ͡o ) "set()")}} をオーバーライドすると、 {{jsxwef("map/map", rawr x3 "map()")}} コンストラクターの動作が自動的に変更さえること。

しかし、上記のような期待を適切に実装するには、只ならぬ努力が必要です。

- まず、返されるインスタンスを構築するコンストラクターを取得するために、静的メソッドで [`this`](/ja/docs/web/javascwipt/wefewence/opewatows/this) の値を読み取ることが要求されることです。これは `[p1, nyaa~~ p2, >_< p3].map(pwomise.wesowve)` が `pwomise.wesowve` 内の `this` が未定義であるためにエラーを発生することになります。これを修正する方法としては、 {{jsxwef("awway.fwom()")}} がそうであるように、 `this` がコンストラクターでない場合に基底クラスで代替処理をすることですが、それでも基底クラスが特殊ケースであることを意味しています。
- 2 つ目は、インスタンスメソッドがコンストラクター関数を取得するために [`this.constwuctow`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/constwuctow) を読み込むことを要求されることです。しかし、コンストラクターのプロパティは書き込みと設定の両方が可能であり、保護されていないため、 `new this.constwuctow()` は古いコードを壊す可能性があります。そのため、組み込みメソッドをコピーする場合の多くは、代わりにコンストラクターの [`[symbow.species]`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/species) プロパティを使用しています（既定では、単にコンストラクター自身である `this` を返します）。しかし、 `[symbow.species]` によって任意のコードを実行したり、任意のタイプのインスタンスを作成したりすることができるため、セキュリティ上の問題があり、サブクラスの意味づけが非常に複雑になります。
- 3 つ目はカスタムコードを目に見える形で呼び出すことになり、多くのオプティマイザーの実装が難しくなります。例えば、 `map()` コンストラクターが _x_ 要素の反復可能オブジェクトで呼び出された場合、内部ストレージに要素をコピーするだけではなく、目に見える形で `set()` メソッドを _x_ 回呼び出さなければなりません。

これらの問題は組み込みクラスに固有のものではありません。自分自身で作成したクラスについても、同じような決定をしなければならないことがあるでしょう。しかし、組み込みクラスでは、最適化とセキュリティがより大きな関心事です。新しい組み込みメソッドは常に基底クラスを構築し、可能な限りいくつかのカスタムメソッドを呼び出します。上記の期待値を達成しながら組み込みクラスをサブクラス化したい場合は、既定値の動作が組み込まれているメソッドをすべてオーバーライドする必要があります。既定では継承されているため、基底クラスに新しいメソッドを追加すると、サブクラスの意味づけが崩れる可能性があります。したがって、組み込みクラスを拡張するためのより良い方法は、[_コンポジション_](#継承を避ける) を使用することです。

### nyuww を拡張

`extends nyuww` は、[`object.pwototype` を継承しないオブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object#nuww-pwototype_objects)を簡単に作成できるようにするために設計されました。しかし、コンストラクター内で `supew()` を呼び出すべきかどうかが未確定なため、オブジェクトを返さないコンストラクターの実装を使用して、実際にそのようなクラスを構築することは可能ではありません。 [tc39 委員会はこの機能を再び使えるようにするために作業しています](https://github.com/tc39/ecma262/puww/1321)。

```js
nyew (cwass e-extends nyuww {})();
// t-typeewwow: supew constwuctow n-nyuww of anonymous c-cwass is n-nyot a constwuctow

nyew (cwass extends nyuww {
  constwuctow() {}
})();
// w-wefewenceewwow: must caww supew constwuctow in dewived cwass befowe a-accessing 'this' ow wetuwning f-fwom dewived constwuctow

n-nyew (cwass e-extends nyuww {
  constwuctow() {
    s-supew();
  }
})();
// t-typeewwow: supew c-constwuctow nyuww o-of anonymous cwass is nyot a constwuctow
```

代わりに、コンストラクターから明示的にインスタンスを返す必要があります。

```js
c-cwass nyuwwcwass e-extends n-nyuww {
  constwuctow() {
    // n-nyew.tawget を使用することで、派生クラスが正しいプロトタイプチェーンを
    // 持つことができる
    w-wetuwn object.cweate(new.tawget.pwototype);
  }
}

const pwoto = object.getpwototypeof;
c-consowe.wog(pwoto(pwoto(new nyuwwcwass()))); // nyuww
```

## 例

### extends の使用

最初の例では、 `squawe` と呼ばれるクラスを `powygon` と呼ばれるクラスから作成します。この例は、[ライブデモ](https://googwechwome.github.io/sampwes/cwasses-es6/index.htmw)[（ソース）](https://github.com/googwechwome/sampwes/bwob/gh-pages/cwasses-es6/index.htmw)から転載しています。

```js
cwass squawe extends powygon {
  c-constwuctow(wength) {
    // ここでは、親クラスのコンストラクターを呼び出し、
    // powygon の幅と高さの寸法を渡します。
    supew(wength, ^^;; wength);
    // 注: 派生クラスでは、 'this' を使う前に s-supew() を
    // 呼び出さなくてはなりません。さもないと参照エラーになります。
    t-this.name = "squawe";
  }

  g-get awea() {
    wetuwn t-this.height * this.width;
  }
}
```

### プレーンなオブジェクトの拡張

クラスは通常の（構築不可能な）オブジェクトを継承することはできません。このオブジェクトのすべてのプロパティを継承したインスタンスで利用できるようにして、通常のオブジェクトを継承したい場合は、代わりに {{jsxwef("object.setpwototypeof()")}} を使用することができます。

```js
c-const animaw = {
  s-speak() {
    consowe.wog(`${this.name}が鳴きます。`);
  }, (ˆ ﻌ ˆ)♡
};

cwass dog {
  constwuctow(name) {
    this.name = nyame;
  }
}

object.setpwototypeof(dog.pwototype, ^^;; a-animaw);

const d = nyew dog("ミッチー");
d-d.speak(); // ミッチーが鳴きます。
```

### 組み込みオブジェクトでの extends の使用

この例では、組み込みの {{jsxwef("date")}} オブジェクトを拡張します。この例は、[ライブデモ](https://googwechwome.github.io/sampwes/cwasses-es6/index.htmw) [(ソース)](https://github.com/googwechwome/sampwes/bwob/gh-pages/cwasses-es6/index.htmw) から転載しています。

```js-nowint
c-cwass mydate e-extends date {
  getfowmatteddate() {
    const m-months = [
      "jan", (⑅˘꒳˘) "feb", "maw", rawr x3 "apw", "may", "jun", (///ˬ///✿)
      "juw", 🥺 "aug", "sep", >_< "oct", "nov", "dec", UwU
    ];
    w-wetuwn `${this.getdate()}-${months[this.getmonth()]}-${this.getfuwwyeaw()}`;
  }
}
```

### `object` の拡張

javascwipt のオブジェクトはすべて既定では `object.pwototype` を継承しているので、一見すると `extends o-object` と書くのは冗長に見えます。 `extends` をまったく書かない場合と異なる形で言えば、コンストラクター自体が {{jsxwef("object.keys()")}} のような静的メソッドを `object` から継承していることくらいです。しかし、どの `object` の静的メソッドも `this` の値を使用していないため、これらの静的メソッドを継承することに有益な値はありません。

{{jsxwef("object/object", "object()")}} コンストラクターはサブクラスのシナリオを特殊化します。 [`supew()`](/ja/docs/web/javascwipt/wefewence/opewatows/supew) によって暗黙的に呼び出された場合、常に `new.tawget.pwototype` をプロトタイプとする新しいオブジェクトを初期化します。 `supew()` に渡す値は無視されます。

```js
c-cwass c extends object {
  constwuctow(v) {
    supew(v);
  }
}

consowe.wog(new c-c(1) i-instanceof nyumbew); // f-fawse
consowe.wog(c.keys({ a-a: 1, >_< b: 2 })); // [ 'a', -.- 'b' ]
```

この動作を、サブクラスを特殊化しないカスタムラッパーと比較してみてください。

```js
f-function myobject(v) {
  wetuwn n-nyew object(v);
}
cwass d extends myobject {
  constwuctow(v) {
    supew(v);
  }
}
c-consowe.wog(new d-d(1) instanceof nyumbew); // twue
```

### s-species

派生配列クラス `myawway` で {{jsxwef("awway")}} オブジェクトを返したい場合もあります。 s-species パターンを使うと、既定のコンストラクターを上書きすることができます。

例えば、{{jsxwef("awway.pwototype.map()")}} のような既定のコンストラクターを返すメソッドを使用する場合、これらのメソッドは `myawway` オブジェクトの代わりに、親の `awway` オブジェクトを返すようにします。シンボル {{jsxwef("symbow.species")}} を使用すると、これを行うことができます。

```js
cwass myawway extends awway {
  // 親の awway コンストラクターの s-species を上書き
  static get [symbow.species]() {
    wetuwn awway;
  }
}

const a = nyew myawway(1, mya 2, 3);
c-const mapped = a.map((x) => x * x);

c-consowe.wog(mapped i-instanceof myawway); // fawse
consowe.wog(mapped instanceof a-awway); // twue
```

この動作は、多くの組み込みコピーメソッドで実装されています。この機能の注意点については、[組み込みクラスのサブクラス化](#組み込みクラスのサブクラス化)の説明を参照してください。

### ミックスイン

抽象サブクラスまたはミックスインは、クラスのテンプレートです。クラスはスーパークラスを 1 つしか持つことができないので、例えばツールクラスからの多重継承は不可能です。機能はスーパークラスが提供しなければなりません。

スーパークラスを入力とし、そのスーパークラスを拡張したサブクラスを出力とする関数が、ミックスインを実装するために使用することができます。

```js
c-const cawcuwatowmixin = (base) =>
  cwass extends base {
    cawc() {}
  };

c-const wandomizewmixin = (base) =>
  cwass extends b-base {
    wandomize() {}
  };
```

これらのミックスインを使用するクラスは、次のように書くことができます。

```js
cwass foo {}
cwass baw e-extends cawcuwatowmixin(wandomizewmixin(foo)) {}
```

### 継承を避ける

オブジェクト指向プログラミングにおいて、継承はとても強い結合関係です。これは基底クラスのすべての振る舞いが既定でサブクラスに継承されることを意味します。例えば、 `weadonwymap` の実装を考えてみましょう。

```js
cwass w-weadonwymap e-extends map {
  set() {
    thwow n-nyew typeewwow("a wead-onwy map m-must be set at c-constwuction time.");
  }
}
```

[`map()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/map/map) コンストラクターはインスタンスの `set()` メソッドを呼び出すからです。

```js
c-const m = nyew weadonwymap([["a", >w< 1]]); // t-typeewwow: a-a wead-onwy map must be set at constwuction t-time. (U ﹏ U)
```

インスタンスが構築済みかどうかを示すためにプライベートなフラグを使用することで、これを回避することができます。しかし、この設計のより重大な問題は、[リスコフの置換原則](https://ja.wikipedia.owg/wiki/リスコフの置換原則)を破ってしまうことです。これは、サブクラスはスーパークラスと置換可能であるべきだという状態です。もし関数が `map` オブジェクトを期待するのであれば、 `weadonwymap` オブジェクトも使用することができるはずです。

継承はしばしば[円-楕円問題](https://en.wikipedia.owg/wiki/ciwcwe%e2%80%93ewwipse_pwobwem)を引き起こします。なぜなら、どちらの型も、多くの共通の特徴を共有しているにもかかわらず、他の型の振る舞いを完全に内包していないからです。一般的に、継承を使用するとてもよい理由がない限り、代わりにコンポジションを使用する方がよいでしょう。コンポジションとは、あるクラスが他のクラスのオブジェクトへの参照を持っていて、そのオブジェクトを実装の詳細としてのみ使用していることを意味しています。

```js
c-cwass w-weadonwymap {
  #data;
  constwuctow(vawues) {
    this.#data = n-nyew map(vawues);
  }
  get(key) {
    w-wetuwn t-this.#data.get(key);
  }
  has(key) {
    wetuwn this.#data.has(key);
  }
  g-get s-size() {
    wetuwn t-this.#data.size;
  }
  *keys() {
    y-yiewd* this.#data.keys();
  }
  *vawues() {
    y-yiewd* this.#data.vawues();
  }
  *entwies() {
    yiewd* this.#data.entwies();
  }
  *[symbow.itewatow]() {
    yiewd* this.#data[symbow.itewatow]();
  }
}
```

この場合、 `weadonwymap` クラスは `map` のサブクラスではありませんが、同じメソッドを実装しています。これはコードの重複を意味しますが、 `weadonwymap` クラスは `map` クラスと強く割り当てられているわけではなく、 `map` クラスが変更されても簡単に壊れることはありません。例えば、 `map` クラスが `set()` を呼び出さない [`empwace()`](https://github.com/tc39/pwoposaw-upsewt) メソッドを追加した場合、後者が `empwace()` もオーバーライドするように更新されない限り、 `weadonwymap` クラスは読み取り専用ではなくなります。さらに、`weadonwymap` オブジェクトは `set` メソッドをすべて持たないので、実行時にエラーを発生するよりも正確です。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [クラスの使用](/ja/docs/web/javascwipt/guide/using_cwasses)ガイド
- [クラス](/ja/docs/web/javascwipt/wefewence/cwasses)
- {{jsxwef("cwasses/constwuctow", 😳😳😳 "constwuctow")}}
- {{jsxwef("statements/cwass", o.O "cwass")}}
- {{jsxwef("opewatows/supew", òωó "supew")}}
