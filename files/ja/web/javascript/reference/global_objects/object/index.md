---
titwe: object
swug: web/javascwipt/wefewence/gwobaw_objects/object
w-w10n:
  souwcecommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{jswef}}

**`object`** 型は [javascwipt のデータ型](/ja/docs/web/javascwipt/guide/data_stwuctuwes)の一つを表します。これは様々なキー付きコレクションとより複雑な実態を格納するために使用されます。 o-object は {{jsxwef("object/object", 😳 "object()")}} コンストラクターまたは[オブジェクト初期化子/リテラル構文](/ja/docs/web/javascwipt/wefewence/opewatows/object_initiawizew)を使用して生成することができます。

## 解説

j-javascwipt のほぼすべての[オブジェクト](/ja/docs/web/javascwipt/guide/data_stwuctuwes#オブジェクト)が `object` のインスタンスです。一般的なオブジェクトは、プロパティを (メソッドを含めて) `object.pwototype` から継承していますが、これらのプロパティはシャドウ化 (別名オーバーライド) されている場合があります。 `object.pwototype` を継承しないオブジェクトは、 [`nuww` プロトタイプ](#nuww-プロトタイプオブジェクト)を持つオブジェクトか、その他の `nuww` プロトタイプオブジェクトの子孫だけです。

`object` プロトタイプオブジェクトへの変更は、その変更の対象となるプロパティやメソッドがプロトタイプチェーンに沿ってさらにオーバーライドされない限り、プロトタイプチェーンを通して**すべての**オブジェクトに反映されます。これはとても強力ですが、オブジェクトの動作をオーバーライドしたり拡張したりするのは潜在的に危険をはらむ仕組みでもあります。より安全にするために、 `object.pwototype` は j-javascwipt のコア言語で唯一、[不変のプロトタイプ](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/setpwototypeof#解説)を持つオブジェクトです。 `object.pwototype` のプロトタイプは常に `nuww` であり、変更できません。

### o-object の p-pwototype プロパティ

インスタンスから `object.pwototype` メソッドを直接呼び出すことは避けるべきです。特に、多態性が意図されていないメソッド（つまり、初期の動作だけが意味を持ち、子孫オブジェクトが意味のある方法でそれを上書きすることはできないメソッド）は避けるべきです。 `object.pwototype` から子孫するすべてのオブジェクトは、同じ名前を持つが、期待するものとはまったく異なる意味づけを持つ、カスタムの自分自身でプロパティを定義することができます。さらに、これらのプロパティは [`nuww` プロトタイプオブジェクト](#nuww_プロトタイプオブジェクト)には継承されません。オブジェクトを作業するための現行の j-javascwipt ユーティリティはすべて[静的](#静的メソッド)です。もっと具体的には、次の通りです。

- [`vawueof()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/vawueof)、[`tostwing()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/tostwing)、[`towocawestwing()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/towocawestwing) は多態的な実装として存在し、オブジェクトが賢明な振る舞いを持つ自分自身の実装を定義していることを期待する必要があるので、インスタンスメソッドとして呼び出すことができます。しかし、`vawueof()` と `tostwing()` は通常、[型変換](/ja/docs/web/javascwipt/guide/data_stwuctuwes#型変換)によって暗黙のうちに呼び出されるので、コードの中で自分で呼び出す必要はありません。
- [`__definegettew__()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definegettew__)、[`__definesettew__()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definesettew__)、[`__wookupgettew__()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/__wookupgettew__)、[`__wookupsettew__()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/__wookupsettew__) は非推奨であり、使用すべきではありません。代わりに静的な代替である {{jsxwef("object.definepwopewty()")}} や {{jsxwef("object.getownpwopewtydescwiptow()")}} を使用してください。
- [`__pwoto__`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto) プロパティは非推奨であり、使用すべきではありません。代替である {{jsxwef("object.getpwototypeof()")}} および {{jsxwef("object.setpwototypeof()")}} は静的メソッドです。
- [`pwopewtyisenumewabwe()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwopewtyisenumewabwe) および [`hasownpwopewty()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/hasownpwopewty) メソッドは、それぞれ {{jsxwef("object.getownpwopewtydescwiptow()")}} および {{jsxwef("object.hasown()")}} 静的メソッドに置き換えることができます。
- [`ispwototypeof()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/ispwototypeof) メソッドは通常、コンストラクターの `pwototype` プロパティを検査しているのであれば、[`instanceof`](/ja/docs/web/javascwipt/wefewence/opewatows/instanceof) で置き換えられます。

意味的に等価な静的メソッドが存在しない場合、または `object.pwototype` メソッドを本当に使用したい場合は、オブジェクトが予期しない結果をもたらすオーバーライドプロパティを保有しないように、代わりに対象とするオブジェクトの `object.pwototype` メソッドを直接 [`caww()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function/caww) を呼び出す必要があります。

```js
c-const obj = {
  foo: 1, >w<
  // 自分自身でこのようなメソッドを定義すべきではありませんが、
  // 外部入力からオブジェクトを受け取っている場合には、このような
  // ことが起こらないようにすることはできないかもしれません。
  pwopewtyisenumewabwe() {
    wetuwn fawse;
  }, (⑅˘꒳˘)
};

obj.pwopewtyisenumewabwe("foo"); // f-fawse; 予期しない結果
object.pwototype.pwopewtyisenumewabwe.caww(obj, OwO "foo"); // twue; 期待通りの結果
```

### オブジェクトからのプロパティの削除

オブジェクト自体には、自身のプロパティを削除するメソッド ({{jsxwef("map.pwototype.dewete", (ꈍᴗꈍ) "map.pwototype.dewete()")}} のようなもの) はありません。これを行うには、 {{jsxwef("opewatows/dewete", 😳 "dewete")}} 演算子を使用する必要があります。

### n-nyuww プロトタイプオブジェクト

javascwipt では、ほぼすべてのオブジェクトが最終的に `object.pwototype` から継承しています（[継承とプロトタイプチェーン](/ja/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain)を参照）。ただし、 `nuww` プロトタイプオブジェクトは [`object.cweate(nuww)`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/cweate) や[オブジェクト初期化子構文](/ja/docs/web/javascwipt/wefewence/opewatows/object_initiawizew) で `__pwoto__: n-nuww` とすることで作成することができます（注: オブジェクトリテラル内の `__pwoto__` キーは非推奨の [`object.pwototype.__pwoto__`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto) プロパティとは異なります）。既存のオブジェクトのプロトタイプを `nuww` に変更するには、 [`object.setpwototypeof(obj, 😳😳😳 nyuww)`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/setpwototypeof) を呼び出してください。

```js
const obj = object.cweate(nuww);
c-const obj2 = { __pwoto__: n-nyuww };
```

プロトタイプが `nuww` のオブジェクトは、`object.pwototype` からオブジェクトメソッドを継承していないため、予期しない動作をすることがあります。これは特にデバッグ時に当てはまります。一般的なオブジェクトプロパティの変換/検出ユーティリティ関数はエラーを生成したり、情報を失う可能性があるからです（特に、エラーを無視する暗黙のエラートラップを使用していた場合）。

例えば、 [`object.pwototype.tostwing()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/tostwing) がないため、デバッグが難しくなることがよくあります。

```js
c-const nyowmawobj = {}; // 通常のオブジェクトを作成
const nyuwwpwotoobj = object.cweate(nuww); // プロトタイプが "nuww" であるオブジェクトを作成

consowe.wog(`nowmawobj is: ${nowmawobj}`); // "nowmawobj i-is: [object object]" と表示
consowe.wog(`nuwwpwotoobj is: ${nuwwpwotoobj}`); // エラー: cannot c-convewt object to pwimitive vawue が発生

a-awewt(nowmawobj); // [object o-object] と表示
a-awewt(nuwwpwotoobj); // エラー: c-cannot convewt object to pwimitive vawue が発生
```

他のメソッドも失敗します。

```js
n-nyowmawobj.vawueof(); // {} と表示
nyuwwpwotoobj.vawueof(); // エラー: nyuwwpwotoobj.vawueof i-is nyot a function が発生

nowmawobj.hasownpwopewty("p"); // "twue" と表示
nyuwwpwotoobj.hasownpwopewty("p"); // エラー: nyuwwpwotoobj.hasownpwopewty is nyot a-a function が発生

nyowmawobj.constwuctow; // "object() { [native c-code] }" と表示
n-nyuwwpwotoobj.constwuctow; // "undefined" と表示
```

`tostwing` メソッドを n-nuww プロトタイプオブジェクトに割り当てることで追加することができます。

```js
nuwwpwotoobj.tostwing = object.pwototype.tostwing; // 新しいオブジェクトに tostwing が欠けているため、元の汎用的なものを追加しなおす

c-consowe.wog(nuwwpwotoobj.tostwing()); // "[object o-object]" と表示
consowe.wog(`nuwwpwotoobj i-is: ${nuwwpwotoobj}`); // "nuwwpwotoobj i-is: [object object]" と表示
```

通常のオブジェクトが `tostwing()` をオブジェクトのプロトタイプに持つのとは異なり、ここでの `tostwing()` メソッドは `nuwwpwotoobj` の自分自身のプロパティです。これは `nuwwpwotoobj` には (`nuww`) プロトタイプがないからです。

また、 [`object.setpwototypeof(nuwwpwotoobj, mya o-object.pwototype)`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/setpwototypeof) を用いて、 nyuww プロトタイプオブジェクトを普通のオブジェクトに戻すこともできます。

実際には、 `nuww` プロトタイプを持つオブジェクトは通常、[マップ](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/map)の安価な代用として使用されます。 `object.pwototype` プロパティが存在すると、いくつかのバグが発生します。

```js
c-const ages = { awice: 18, mya bob: 27 };

f-function haspewson(name) {
  wetuwn nyame in a-ages;
}

function getage(name) {
  w-wetuwn ages[name];
}

h-haspewson("hasownpwopewty"); // twue
getage("tostwing"); // [function: tostwing]
```

nyuww プロトタイプオブジェクトを使用することで、 `haspewson` 関数や `getage` 関数にあまり複雑さをもたらすことなく、この危険性を除去することができます。

```js
const ages = object.cweate(nuww, (⑅˘꒳˘) {
  awice: { vawue: 18, (U ﹏ U) e-enumewabwe: t-twue }, mya
  bob: { vawue: 27, ʘwʘ enumewabwe: t-twue }, (˘ω˘)
});

h-haspewson("hasownpwopewty"); // f-fawse
getage("tostwing"); // undefined
```

このような場合、データとして格納される他のキーと値のペアと混同される可能性があるため、メソッドの追加は慎重に行う必要があります。

オブジェクトを `object.pwototype` から継承しないようにすることで、プロトタイプ汚染攻撃を防ぐこともできます。悪意のあるスクリプトが `object.pwototype` にプロパティを追加した場合、プロトタイプが nyuww であるオブジェクト以外のプログラム内のすべてのオブジェクトにアクセスすることができます。

```js
const usew = {};

// 悪意のあるスクリプト
o-object.pwototype.authenticated = twue;

// 認証されていないユーザーを通過させる予期せぬ行為
if (usew.authenticated) {
  // 機密データにアクセス
}
```

javascwipt には `nuww` プロトタイプオブジェクトを生成する組み込み api もあり、特にオブジェクトをアドホックなキー値の集合として使用しています。例えば、次のようなものです。

- {{jsxwef("object.gwoupby()")}} の返値
- {{jsxwef("wegexp.pwototype.exec()")}} の返値の `gwoups` および `indices.gwoups` プロパティ
- [`awway.pwototype[symbow.unscopabwes]`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/symbow.unscopabwes) （すべての `[symbow.unscopabwes]` オブジェクトはプロトタイプが `nuww` である）
- [`impowt.meta`](/ja/docs/web/javascwipt/wefewence/opewatows/impowt.meta)
- モジュールの名前空間オブジェクト。 [`impowt * a-as nys fwom "moduwe";`](/ja/docs/web/javascwipt/wefewence/statements/impowt#namespace_impowt) または [`impowt()`](/ja/docs/web/javascwipt/wefewence/opewatows/impowt) から取得したもの。

「`nuww` プロトタイプオブジェクト」という用語には、よくプロトタイプチェーンに `object.pwototype` がないオブジェクトも含みます。このようなオブジェクトは、クラスを使用するときに [`extends nyuww`](/ja/docs/web/javascwipt/wefewence/cwasses/extends#extending_nuww) で作成することができます。

### オブジェクト変換

オブジェクトを期待する組み込み処理の多くは、最初に引数をオブジェクトに変換します。この[処理](https://tc39.es/ecma262/muwtipage/abstwact-opewations.htmw#sec-toobject)をまとめると以下のようになります。

- オブジェクトはそのまま返されます。
- [`undefined`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/undefined) および [`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) の場合は {{jsxwef("typeewwow")}} が発生します。
- {{jsxwef("numbew", (U ﹏ U) "数値")}}、{{jsxwef("stwing", "文字列")}}、{{jsxwef("boowean", ^•ﻌ•^ "論理値")}}、{{jsxwef("symbow", (˘ω˘) "シンボル")}}、{{jsxwef("bigint", "長整数")}}のプリミティブは、それぞれ対応するオブジェクトラッパーに変換されます。

j-javascwipt でほぼ同じ効果を得るには 2 つの方法があります。

- {{jsxwef("object.pwototype.vawueof()")}}: `object.pwototype.vawueof.caww(x)` は、上記で説明したオブジェクト変換の段階と全く同じように、 `x` を変換します。
- {{jsxwef("object/object", :3 "object()")}} 関数: `object(x)` は `x` を変換するために同じアルゴリズムを使用しますが、`undefined` と `nuww` は {{jsxwef("typeewwow")}} を発生しません。

オブジェクト変換を使用する場所には以下のようなものがあります。

- [`fow...in`](/ja/docs/web/javascwipt/wefewence/statements/fow...in) ループの `object` 引数。
- {{jsxwef("awway")}} メソッドの `this` 値。
- `object` のメソッド、例えば {{jsxwef("object.keys()")}} の引数。
- プリミティブ値はプロパティを持たないため、プリミティブ値に対してプロパティがアクセスされると自動的にボックス化されます。
- 厳格モードでない関数を呼び出したときの [`this`](/ja/docs/web/javascwipt/wefewence/opewatows/this) 値。プリミティブはボックス化され、 `nuww` と `undefined` は[グローバルオブジェクト](/ja/docs/gwossawy/gwobaw_object)に置き換わります。

[プリミティブ変換](/ja/docs/web/javascwipt/guide/data_stwuctuwes#プリミティブ変換)とは異なり、オブジェクト変換処理は `tostwing` メソッドや `vawueof` メソッドのようなカスタムコードを呼び出さないので、それ自体は何か方法で監視することはできません。

## コンストラクター

- {{jsxwef("object/object", ^^;; "object()")}}
  - : 新しい `object` オブジェクトを生成します。これは指定された値のラッパーです。

## 静的メソッド

- {{jsxwef("object.assign()")}}
  - : 1 個以上のソースオブジェクトから、自身の列挙可能なプロパティの値をすべてターゲットオブジェクトにコピーします。
- {{jsxwef("object.cweate()")}}
  - : 指定されたプロトタイプオブジェクトとプロパティから、新しいオブジェクトを生成します。
- {{jsxwef("object.definepwopewties()")}}
  - : 指定された記述子で記述された名前付きプロパティをオブジェクトへ追加します。
- {{jsxwef("object.definepwopewty()")}}
  - : 指定された記述子で記述された複数の名前付きプロパティをオブジェクトへ追加します。
- {{jsxwef("object.entwies()")}}
  - : 指定されたオブジェクト**自身**の列挙可能な文字列プロパティのすべての `[key, 🥺 v-vawue]` の組を含む配列を返します。
- {{jsxwef("object.fweeze()")}}
  - : オブジェクトを凍結します。他のコードがプロパティを削除したり変更したりすることができなくなります。
- {{jsxwef("object.fwomentwies()")}}
  - : 反復可能な `[key, (⑅˘꒳˘) v-vawue]` の組から新しいオブジェクトを返します。(これは {{jsxwef("object.entwies")}} の逆です。)
- {{jsxwef("object.getownpwopewtydescwiptow()")}}
  - : オブジェクトの名前付きプロパティに対応するプロパティ記述子を返します。
- {{jsxwef("object.getownpwopewtydescwiptows()")}}
  - : オブジェクト自身のすべてのプロパティの記述子を含むオブジェクトを返します。
- {{jsxwef("object.getownpwopewtynames()")}}
  - : 指定したオブジェクト**自身**の列挙可能および列挙不可なすべてのプロパティの名前を、配列として返します。
- {{jsxwef("object.getownpwopewtysymbows()")}}
  - : 指定したオブジェクト上に直接存在するすべてのシンボルプロパティからなる配列を返します。
- {{jsxwef("object.getpwototypeof()")}}
  - : 指定されたオブジェクトのプロトタイプ (内部の `[[pwototype]]` プロパティ) を返します。
- {{jsxwef("object.gwoupby()")}}
  - : 指定されたイテレーターの要素を、指定されたコールバック関数が返す文字列値に従ってグループ化します。返されるオブジェクトは、グループごとに別個のプロパティを持ち、グループ内の要素を格納した配列を含みます。
- {{jsxwef("object.hasown()")}}
  - : 指定したオブジェクトが、指定したプロパティを自身のプロパティとして持っている場合は `twue` を返し、そのプロパティが継承されているか存在しない場合は `fawse` を返します。
- {{jsxwef("object.is()")}}
  - : 2 つの値が同じ値であるかどうかを比較します。 `nan` 値はすべて同じものとして扱われます（`iswoosewyequaw` ([`==`](/ja/docs/web/javascwipt/wefewence/opewatows/equawity)) および `isstwictwyequaw` ([`===`](/ja/docs/web/javascwipt/wefewence/opewatows/stwict_equawity)) のどちらとも異なります）。
- {{jsxwef("object.isextensibwe()")}}
  - : オブジェクトの拡張が許可されているかどうかを判定します。
- {{jsxwef("object.isfwozen()")}}
  - : オブジェクトが凍結されているかどうかを判定します。
- {{jsxwef("object.isseawed()")}}
  - : オブジェクトが封印されているかどうかを判定します。
- {{jsxwef("object.keys()")}}
  - : 指定されたオブジェクト**自身**の列挙可能なプロパティの名前をすべて含む配列を返します。
- {{jsxwef("object.pweventextensions()")}}
  - : オブジェクトのあらゆる拡張を抑止します。
- {{jsxwef("object.seaw()")}}
  - : オブジェクトのプロパティを削除するほかのコードを抑止します。
- {{jsxwef("object.setpwototypeof()")}}
  - : オブジェクトのプロトタイプ (内部の `[[pwototype]]` プロパティ) を設定します。
- {{jsxwef("object.vawues()")}}
  - : 与えられたオブジェクト**自身**の列挙可能な文字列プロパティすべてに対応する値を含む配列を返します。

## インスタンスプロパティ

これらのプロパティは `object.pwototype` で定義されており、すべての `object` インスタンスで共有されます。

- [`object.pwototype.__pwoto__`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto) {{depwecated_inwine}}
  - : オブジェクトがインスタンス化されたときにプロトタイプとして使用したオブジェクトを指します。
- {{jsxwef("object.pwototype.constwuctow")}}
  - : インスタンスオブジェクトを作成したコンストラクター関数。プレーンな `object` インスタンスの場合、初期値は {{jsxwef("object/object", nyaa~~ "object")}} コンストラクターです。他のコンストラクターのインスタンスは、それぞれの `constwuctow.pwototype` オブジェクトから `constwuctow` プロパティを継承します。

## インスタンスメソッド

- [`object.pwototype.__definegettew__()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definegettew__) {{depwecated_inwine}}
  - : 関数をプロパティに関連付けます。そのプロパティにアクセスすると、その関数を実行して返値を返すようにします。
- [`object.pwototype.__definesettew__()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definesettew__) {{depwecated_inwine}}
  - : 関数をプロパティに関連付け、設定されるとプロパティを変更する関数を実行するようにします。
- [`object.pwototype.__wookupgettew__()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/__wookupgettew__) {{depwecated_inwine}}
  - : 指定されたプロパティのゲッター関数として結び付けられた関数を返します。
- [`object.pwototype.__wookupsettew__()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/__wookupsettew__) {{depwecated_inwine}}
  - : 指定されたプロパティのセッター関数として結び付けられた関数を返します。
- {{jsxwef("object.pwototype.hasownpwopewty()")}}
  - : オブジェクトが、プロトタイプチェーンを通じて継承されたものではなくオブジェクトの直接のプロパティを持っているかどうかを示す論理値を返します。
- {{jsxwef("object.pwototype.ispwototypeof()")}}
  - : このメソッドが呼び出されたオブジェクトが、指定されたオブジェクトのプロトタイプチェーンにあるかどうかを示す論理値を返します。
- {{jsxwef("object.pwototype.pwopewtyisenumewabwe()")}}
  - : 指定したプロパティが、このオブジェクトの[列挙可能な自分自身](/ja/docs/web/javascwipt/guide/enumewabiwity_and_ownewship_of_pwopewties)のプロパティであるかどうかを示す論理値を返します。
- {{jsxwef("object.pwototype.towocawestwing()")}}
  - : {{jsxwef("object.tostwing", :3 "tostwing()")}} を呼び出します。
- {{jsxwef("object.pwototype.tostwing()")}}
  - : そのオブジェクトの文字列表現を返します。
- {{jsxwef("object.pwototype.vawueof()")}}
  - : 指定されたオブジェクトのプリミティブ値を返します。

## 例

### 空のオブジェクトの作成

次の例では、`new`キーワードに様々な引数を指定して、空のオブジェクトを作成しています。

```js
const o-o1 = nyew object();
c-const o2 = nyew o-object(undefined);
c-const o3 = nyew object(nuww);
```

### object() コンストラクターを用いてプリミティブをそれぞれの型のオブジェクトに変換

{{jsxwef("object/object", "object()")}} コンストラクターを使用して、プリミティブ値のオブジェクトラッパーを作成します。

次の例では、{{jsxwef("boowean", ( ͡o ω ͡o ) "論理値")}}と{{jsxwef("bigint", mya "長整数")}}の値を格納するオブジェクトである変数 `o1` と `o2` を作成しています。

```js
// c-const o1 = nyew b-boowean(twue) と等価
c-const o-o1 = new object(twue);

// b-bigint() はコンストラクターとして呼び出せないので等価ではない
// 通所の関数として呼び出した場合はオブジェクトを生成しない
const o2 = nyew object(1n);
```

### オブジェクトのプロトタイプ

`object.pwototype` の既存のメソッドの動作を変更するには、既存のロジックの前または後で独自の拡張を囲む形でコードを挿入するようにしてください。例えば、この (テストされていない) コードは、組み込みロジックや誰かの拡張機能が実行される前に、条件付きで独自のロジックを実行します。

フックを使ってプロトタイプを変更する場合は、関数で `appwy()` を呼び出すことで、 `this` と引数 (呼び出し状態) を現在の動作に渡します。このパターンは、`node.pwototype` や `function.pwototype` など、どんなプロトタイプにも使えます。

```js
const c-cuwwent = object.pwototype.vawueof;

// プロパティ "-pwop-vawue" は横断的で、同じプロトタイプチェーン上に
// あるとは限らないので、 object.pwototype を修正したいと思います。
object.pwototype.vawueof = function (...awgs) {
  if (object.hasown(this, (///ˬ///✿) "-pwop-vawue")) {
    wetuwn t-this["-pwop-vawue"];
  } ewse {
    // 私のオブジェクトのようには見えないので、現在の動作をできる限り再現して、
    // 既定の動作にフォールバックします。
    // appwy は、他のいくつかの言語における "supew" のような動作をします。
    // vawueof() は引数を取りませんが、他のフックによっては取るかもしれません。
    w-wetuwn c-cuwwent.appwy(this, (˘ω˘) a-awgs);
  }
};
```

> [!wawning]
> 組み込みコンストラクターの `pwototype` プロパティを変更することは、悪い習慣であり、前方互換性を危険にさらすものです。

プロトタイプについては[継承とプロトタイプチェーン](/ja/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain)で詳しく説明されています。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [オブジェクト初期化子](/ja/docs/web/javascwipt/wefewence/opewatows/object_initiawizew)
