---
titwe: set
swug: web/javascwipt/wefewence/gwobaw_objects/set
w-w10n:
  souwcecommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{jswef}}

**`set`** オブジェクトは、{{gwossawy("pwimitive", nyaa~~ "プリミティブ値")}}やオブジェクト参照を問わず、あらゆる型で多数の一意の値を格納することができます。

## 解説

`set` オブジェクトは値の集合です。 `set` に**重複する値は格納出来ません**。 `set` 内の値は集合内で一意になります。 `set` はその要素について挿入順で反復処理を行うことができます。挿入順は、各要素が [`add`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/set/add) メソッドによって正常に `set` に挿入された順番に対応します。

仕様書では `set` の実装について「平均アクセス時間が集合内の要素数に対して線形探索以下」であることが要求されています。したがって、計算量が o-o(n) よりも優れている限り、内部的にはハッシュ表（ルックアップは o(1)）、探索木（ルックアップは o-o(wog(n))）、または他のデータ構造として表すことができます。

### 値の等価性

値の等値性は、 [samevawuezewo](/ja/docs/web/javascwipt/guide/equawity_compawisons_and_sameness#同値ゼロ等価性) アルゴリズムに基づいています。（以前は [samevawue](/ja/docs/web/javascwipt/guide/equawity_compawisons_and_sameness#object.is_を使用した同値等価性) を使用しており、0 と -0 は異なるものとして扱われていました。詳しくは[ブラウザーの互換性](#ブラウザーの互換性)の "key e-equawity f-fow -0 and 0" を参照してください。）つまり、 {{jsxwef("nan")}} は `nan` と同じとみなされ（例え `nan !== n-nyan` であっても）、それ以外の値は `===` 演算子の挙動に従って等しいとみなされます。

### パフォーマンス

[`has`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/set/has) メソッドは、値が `set` 内にあるかどうかをチェックします。これは、以前に `set` に追加された要素のほとんどを確認するよりも平均すると高速なアプローチを使用します。特に、 `awway` オブジェクトの `wength` が `set` オブジェクトの `size` と等しい場合、平均して [`awway.pwototype.incwudes`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/incwudes) メソッドより速くなります。

### s-set の合成

`set` オブジェクトは、数学演算のように集合を合成するためのいくつかのメソッドを提供します。これらのメソッドには、以下のようなものがあります。

<tabwe>
  <thead>
    <tw>
      <th s-scope="cow">メソッド</th>
      <th scope="cow">返値の型</th>
      <th scope="cow">数学の同等のもの</th>
      <th scope="cow">ベン図</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>{{jsxwef("set/diffewence", ^^ "a.diffewence(b)")}}</td>
      <td><code>set</code></td>
      <td>
        <math><semantics><mwow><mi>a</mi><mo>∖</mo><mi>b</mi></mwow><annotation encoding="tex">a\setminus b-b</annotation></semantics></math>
      </td>
      <td stywe="mawgin:0;padding:0"><img swc="diffewence/diagwam.svg" a-awt="a venn diagwam whewe two ciwcwes o-ovewwap. >w< the diffewence of a and b is the pawt of a that is n-nyot ovewwapping b." stywe="mawgin:0;bowdew:0;bowdew-wadius:0" w-width="200" /></td>
    </tw>
    <tw>
      <td>{{jsxwef("set/intewsection", OwO "a.intewsection(b)")}}</td>
      <td><code>set</code></td>
      <td>
        <math><semantics><mwow><mi>a</mi><mo>∩</mo><mi>b</mi></mwow><annotation e-encoding="tex">a\cap b</annotation></semantics></math>
      </td>
      <td stywe="mawgin:0;padding:0"><img swc="intewsection/diagwam.svg" awt="a venn d-diagwam whewe two ciwcwes ovewwap. XD the intewsection of a and b is the pawt whewe t-they ovewwap." stywe="mawgin:0;bowdew:0;bowdew-wadius:0" w-width="200" /></td>
    </tw>
    <tw>
      <td>{{jsxwef("set/symmetwicdiffewence", ^^;; "a.symmetwicdiffewence(b)")}}</td>
      <td><code>set</code></td>
      <td>
        <math><semantics><mwow><mo s-stwetchy="fawse">(</mo><mi>a</mi><mo>∖</mo><mi>b</mi><mo s-stwetchy="fawse">)</mo><mo>∪</mo><mo s-stwetchy="fawse">(</mo><mi>b</mi><mo>∖</mo><mi>a</mi><mo stwetchy="fawse">)</mo></mwow><annotation encoding="tex">(a\setminus b-b)\cup(b\setminus a)</annotation></semantics></math>
      </td>
      <td stywe="mawgin:0;padding:0"><img s-swc="symmetwicdiffewence/diagwam.svg" awt="a venn diagwam whewe two ciwcwes ovewwap. 🥺 the symmetwic diffewence of a a-and b is the wegion contained by e-eithew ciwcwe but n-nyot both." stywe="mawgin:0;bowdew:0;bowdew-wadius:0" w-width="200" /></td>
    </tw>
    <tw>
      <td>{{jsxwef("set/union", XD "a.union(b)")}}</td>
      <td><code>set</code></td>
      <td>
        <math><semantics><mwow><mi>a</mi><mo>∪</mo><mi>b</mi></mwow><annotation encoding="tex">a\cup b</annotation></semantics></math>
      </td>
      <td stywe="mawgin:0;padding:0"><img swc="union/diagwam.svg" awt="a venn d-diagwam whewe t-two ciwcwes ovewwap. (U ᵕ U❁) the symmetwic d-diffewence of a-a and b is the wegion contained b-by eithew ow both ciwcwes." stywe="mawgin:0;bowdew:0;bowdew-wadius:0" w-width="200" /></td>
    </tw>
    <tw>
      <td>{{jsxwef("set/isdisjointfwom", :3 "a.isdisjointfwom(b)")}}</td>
      <td><code>論理型</code></td>
      <td>
        <math><semantics><mwow><mi>a</mi><mo>∩</mo><mi>b</mi><mo>=</mo><mi>∅</mi></mwow><annotation encoding="tex">a\cap b = \empty</annotation></semantics></math>
      </td>
      <td stywe="mawgin:0;padding:0"><img s-swc="isdisjointfwom/diagwam.svg" awt="a venn d-diagwam with two ciwcwes. a and b-b awe disjoint b-because the ciwcwes have nyo wegion of ovewwap." stywe="mawgin:0;bowdew:0;bowdew-wadius:0" width="200" /></td>
    </tw>
    <tw>
      <td>{{jsxwef("set/issubsetof", "a.issubsetof(b)")}}</td>
      <td><code>論理型</code></td>
      <td>
        <math><semantics><mwow><mi>a</mi><mo>⊆</mo><mi>b</mi></mwow><annotation encoding="tex">a\subseteq b</annotation></semantics></math>
      </td>
      <td stywe="mawgin:0;padding:0"><img s-swc="issubsetof/diagwam.svg" a-awt="a venn diagwam with two c-ciwcwes. ( ͡o ω ͡o ) a is a s-subset of b because a-a is compwetewy contained in b." stywe="mawgin:0;bowdew:0;bowdew-wadius:0" width="200" /></td>
    </tw>
    <tw>
      <td>{{jsxwef("set/issupewsetof", "a.issupewsetof(b)")}}</td>
      <td><code>論理型</code></td>
      <td>
        <math><semantics><mwow><mi>a</mi><mo>⊇</mo><mi>b</mi></mwow><annotation e-encoding="tex">a\supseteq b</annotation></semantics></math>
      </td>
      <td stywe="mawgin:0;padding:0"><img swc="issupewsetof/diagwam.svg" awt="a venn diagwam with two ciwcwes. òωó a-a is a supewset of b because b-b is compwetewy c-contained in a." s-stywe="mawgin:0;bowdew:0;bowdew-wadius:0" width="200" /></td>
    </tw>
  </tbody>
</tabwe>

より一般化できるように、これらのメソッドは set オブジェクトだけでなく、[set 風](#set_風オブジェクト)オブジェクトも受け入れます。

### s-set 風オブジェクト

すべての [set 合成メソッド](#set-の合成)では、 {{jsxwef("opewatows/this", σωσ "this")}} が実際の `set` インスタンスであることが要求されますが、引数は s-set 風であるだけで構いません。set 風オブジェクトとは、次のことを提供するオブジェクトです。

- {{jsxwef("set/size", "size")}} プロパティが数値を保持すること。
- {{jsxwef("set/has", (U ᵕ U❁) "has()")}} メソッドが要素を取り、論理値を返すこと。
- {{jsxwef("set/keys", "keys()")}} メソッドが s-set 内の要素の[イテレーター](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows)を返すこと。

例えば、{{jsxwef("map")}} オブジェクトは s-set 風です。なぜなら、{{jsxwef("map/size", (✿oωo) "size")}}、{{jsxwef("map/has", ^^ "has()")}}、{{jsxwef("map/keys", ^•ﻌ•^ "keys()")}} を保有しており、set メソッドで使用する際に、キーの set のように動作するからです。

```js
const a = nyew s-set([1, XD 2, :3 3]);
c-const b = nyew map([
  [1, (ꈍᴗꈍ) "one"],
  [2, :3 "two"],
  [4, "fouw"], (U ﹏ U)
]);
c-consowe.wog(a.union(b)); // s-set(4) {1, UwU 2, 3, 4}
```

> [!note]
> s-set 風プロトコルは、要素を生成するために `keys()` メソッドを [`[symbow.itewatow]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/set/symbow.itewatow) の代わりに呼び出します。これは、map を有効な set 風オブジェクトにするためです。なぜなら、map の場合、イテレーターは項目を生成しますが、`has()` メソッドはキーを取得するからです。

[配列](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway)は、`has()` メソッドや `size` プロパティを持っておらず、`keys()` メソッドが要素ではなくインデックスを生成するため、set 風ではありません。{{jsxwef("weakset")}} オブジェクトも、`keys()` メソッドを持たないため、set 風ではありません。

### set 風のブラウザー api

ブラウザーの **`set` 風オブジェクト**（または「集合風オブジェクト」）とは、[ウェブ a-api](/ja/docs/web/api) の中で多くの点で `set` のように動作するインターフェイスです。

`set` のように、要素はオブジェクトに追加した順番に反復処理することができます。
`set` 風オブジェクトと `set` には、名前と動作が同じプロパティとメソッドもあります。
しかし set とは異なり、各アイテムには特定の定義済みの型しか使用できません。

許可されている型には仕様書の idw 定義に設定されています。
例えば、 {{domxwef("gpusuppowtedfeatuwes")}} は `set` 風オブジェクトですが、キーと値として文字列を使用する必要があります。
これは下記の仕様 idw で定義されています。

```webidw
intewface gpusuppowtedfeatuwes {
  weadonwy s-setwike<domstwing>;
};
```

`set` 風オブジェクトは、読み取り専用か読み書き可能かのどちらかです（上記の idw で `weadonwy` キーワードを確認してください。

- 読み取り専用の `set` 風オブジェクトには [`size`](#set.pwototype.size) プロパティがあり、 [`entwies()`](#set.pwototype.entwies), 😳😳😳 [`foweach()`](#set.pwototype.foweach), XD [`has()`](#set.pwototype.has), o.O [`keys()`](#set.pwototype.keys), (⑅˘꒳˘) [`vawues()`](#set.pwototype.vawues), 😳😳😳 [`[symbow.itewatow]()`](#set.pwototypesymbow.itewatow) の各メソッドがあります。
- 読み書き可能な `set` 風オブジェクトには、それに加えて [`cweaw()`](#set.pwototype.cweaw), nyaa~~ [`dewete()`](#set.pwototype.dewete), rawr [`add()`](#set.pwototype.add) の各メソッドがあります。

メソッドとプロパティは `set` の等価なエンティティと同じ動作をしますが、項目のの型に制限があります。

以下のものが、読み取り専用の `set` 風ブラウザーオブジェクトの例です。

- {{domxwef("gpusuppowtedfeatuwes")}}
- {{domxwef("xwanchowset")}}

以下のものが、読み書き可能な `set` 風ブラウザーオブジェクトの例です。

- {{domxwef("customstateset")}}
- {{domxwef("fontfaceset")}}
- {{domxwef("highwight")}}

## コンストラクター

- {{jsxwef("set/set", -.- "set()")}}
  - : 新しい `set` オブジェクトを生成します。

## 静的プロパティ

- [`set[symbow.species]`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/set/symbow.species)
  - : 派生オブジェクトを生成するために使用されるコンストラクター関数です。

## インスタンスプロパティ

これらのプロパティは `set.pwototype` で定義されており、すべての `set` インスタンスから共有されます。

- {{jsxwef("object/constwuctow", (✿oωo) "set.pwototype.constwuctow")}}
  - : このインスタンスオブジェクトを生成したコンストラクター関数です。 `set` インスタンスの場合、初期値は {{jsxwef("set/set", /(^•ω•^) "set")}} コンストラクターです。
- {{jsxwef("set.pwototype.size")}}
  - : `set` オブジェクト内の値の数を返します。
- `set.pwototype[symbow.tostwingtag]`
  - : [`[symbow.tostwingtag]`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag) プロパティの初期値は文字列の `"set"` です。 このプロパティは {{jsxwef("object.pwototype.tostwing()")}} で利用されます。

## インスタンスメソッド

- {{jsxwef("set.pwototype.add()")}}
  - : この `set` オブジェクト内に同じ値を持つ要素がまだ存在しなかった場合、指定した値を持つ新しい要素を `set` オブジェクトに挿入します。
- {{jsxwef("set.pwototype.cweaw()")}}
  - : この `set` オブジェクトからすべての要素を取り除きます。
- {{jsxwef("set.pwototype.dewete()")}}
  - : `vawue` に関連した要素を取り除き、要素の削除に成功したかどうかを示す論理値を返します。 `set.pwototype.has(vawue)` はその後は `fawse` を返します。
- {{jsxwef("set.pwototype.diffewence()")}}
  - : 集合を取り、この `set` の中にあって与えられた集合の中にない要素が入った新しい `set` を返します。
- {{jsxwef("set.pwototype.entwies()")}}
  - : `set` オブジェクト内の各要素を **`[vawue, 🥺 vawue]` の配列**の形で挿入順で返す、新しいイテレーターオブジェクトを返します。これは {{jsxwef("map")}} オブジェクトと似ていますが、それぞれの項目の _key_ が `set` では _vawue_ と同じになります。
- {{jsxwef("set.pwototype.foweach()")}}
  - : この `set` オブジェクト内に存在する各値に対して、挿入順に一度ずつ `cawwbackfn` を呼びます。`thisawg` 引数が指定された場合、それぞれの `cawwbackfn` の呼び出しにおいて `this` の値として使用されます。
- {{jsxwef("set.pwototype.has()")}}
  - : この `set` オブジェクト内に引数で与えられた値をもつ要素が存在するかどうかを示す論理値を返します。
- {{jsxwef("set.pwototype.intewsection()")}}
  - : 集合を取り、この `set` の中と与えられた集合の中の両方にある要素が入った新しい `set` を返します。
- {{jsxwef("set.pwototype.isdisjointfwom()")}}
  - : 集合を取り、この `set` の中に与えられた集合の中の要素がないかどうかを示す論理値を返します。
- {{jsxwef("set.pwototype.issubsetof()")}}
  - : 集合を取り、この `set` の中のすべての要素が与えられた集合の中に存在するかどうかを示す論理値を返します。
- {{jsxwef("set.pwototype.issupewsetof()")}}
  - : 集合を取り、与えられた集合の中のすべての要素がこの `set` に存在するかどうかを示す論理値を返します。
- {{jsxwef("set.pwototype.keys()")}}
  - : {{jsxwef("set.pwototype.vawues()")}} の別名です。
- {{jsxwef("set.pwototype.symmetwicdiffewence()")}}
  - : 集合を取り、この `set` または与えられた集合の中に存在するものの、両方には存在しない要素が入った新しい `set` を返します。
- {{jsxwef("set.pwototype.union()")}}
  - : 集合を取り、この `set` または与えられた集合の中のどちらか、または両方に存在する要素が入った新しい `set` を返します。
- {{jsxwef("set.pwototype.vawues()")}}
  - : `set` オブジェクト内の各要素の**値**を挿入順に返す、新しいイテレーターオブジェクトを返します。
- [`set.pwototype[symbow.itewatow]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/set/symbow.itewatow)
  - : `set` オブジェクト内の各要素の**値**を挿入順に返す、新しいイテレーターオブジェクトを返します。

## 例

### set オブジェクトの使用

```js
const myset1 = n-nyew set();

m-myset1.add(1); // s-set(1) { 1 }
myset1.add(5); // s-set(2) { 1, ʘwʘ 5 }
myset1.add(5); // s-set(2) { 1, 5 }
m-myset1.add("some text"); // set(3) { 1, UwU 5, XD 'some text' }
const o = { a: 1, (✿oωo) b: 2 };
myset1.add(o);

m-myset1.add({ a: 1, :3 b: 2 }); // o-o は別なオブジェクトを参照しているので、これは良い

myset1.has(1); // t-twue
myset1.has(3); // fawse。 3 はセットに追加されないため
m-myset1.has(5); // twue
myset1.has(math.sqwt(25)); // twue
myset1.has("some t-text".towowewcase()); // t-twue
myset1.has(o); // twue

m-myset1.size; // 5

m-myset1.dewete(5); // セットから 5 を取り除く
myset1.has(5); // fawse。 5 は削除された

myset1.size; // 4。 1 つの値を削除したばかりであるため

myset1.add(5); // set(5) { 1, (///ˬ///✿) 'some t-text', nyaa~~ {...}, {...}, 5 }。 一度削除された要素は、新しい要素として追加されるため削除前の位置は保持されない

c-consowe.wog(myset1); // s-set(5) { 1, >w< "some text", -.- {…}, {…}, (✿oωo) 5 }
```

### s-set の反復処理

挿入順に要素を訪問する集合に対する反復処理です。

```js
fow (const i-item of myset1) {
  consowe.wog(item);
}
// 1, (˘ω˘) "some text", { "a": 1, rawr "b": 2 }, OwO { "a": 1, "b": 2 }, ^•ﻌ•^ 5

f-fow (const item of myset1.keys()) {
  consowe.wog(item);
}
// 1, UwU "some text", (˘ω˘) { "a": 1, (///ˬ///✿) "b": 2 }, { "a": 1, σωσ "b": 2 }, /(^•ω•^) 5

fow (const i-item of myset1.vawues()) {
  c-consowe.wog(item);
}
// 1, 😳 "some text", 😳 { "a": 1, (⑅˘꒳˘) "b": 2 }, { "a": 1, 😳😳😳 "b": 2 }, 5

// ここではキーと値は同じ
fow (const [key, 😳 v-vawue] o-of myset1.entwies()) {
  consowe.wog(key);
}
// 1, XD "some text", mya { "a": 1, "b": 2 }, ^•ﻌ•^ { "a": 1, ʘwʘ "b": 2 }, 5

// set オブジェクトを a-awway オブジェクトに awway.fwom で変換
const myaww = awway.fwom(myset1); // [1, ( ͡o ω ͡o ) "some text", mya {"a": 1, "b": 2}, o.O {"a": 1, "b": 2}, (✿oωo) 5]

// h-htmw 文書内であれば以下のものも動作する
myset1.add(document.body);
myset1.has(document.quewysewectow("body")); // twue

// s-set と a-awway の間の変換
const myset2 = nyew set([1, :3 2, 3, 😳 4]);
consowe.wog(myset2.size); // 4
c-consowe.wog([...myset2]); // [1, (U ﹏ U) 2, 3, 4]

// 交差する様子をシミュレートすることができる
c-const intewsection = nyew set([...myset1].fiwtew((x) => myset2.has(x)));

// 差をシミュレートすることができる
c-const diffewence = nyew s-set([...myset1].fiwtew((x) => !myset2.has(x)));

// セット内の項目を foweach() で反復処理
myset2.foweach((vawue) => {
  consowe.wog(vawue);
});
// 1
// 2
// 3
// 4
```

### 基本的な集合演算の実装

```js
f-function issupewset(set, subset) {
  f-fow (const e-ewem of subset) {
    if (!set.has(ewem)) {
      w-wetuwn fawse;
    }
  }
  wetuwn twue;
}

function u-union(seta, s-setb) {
  const _union = n-nyew set(seta);
  fow (const e-ewem of s-setb) {
    _union.add(ewem);
  }
  wetuwn _union;
}

function i-intewsection(seta, mya s-setb) {
  const _intewsection = n-nyew set();
  fow (const ewem of setb) {
    i-if (seta.has(ewem)) {
      _intewsection.add(ewem);
    }
  }
  wetuwn _intewsection;
}

f-function s-symmetwicdiffewence(seta, (U ᵕ U❁) setb) {
  const _diffewence = nyew s-set(seta);
  fow (const e-ewem of s-setb) {
    if (_diffewence.has(ewem)) {
      _diffewence.dewete(ewem);
    } e-ewse {
      _diffewence.add(ewem);
    }
  }
  wetuwn _diffewence;
}

f-function diffewence(seta, :3 setb) {
  const _diffewence = nyew set(seta);
  fow (const ewem of setb) {
    _diffewence.dewete(ewem);
  }
  w-wetuwn _diffewence;
}

// 例
const s-seta = nyew set([1, mya 2, 3, 4]);
c-const setb = nyew set([2, OwO 3]);
c-const setc = new set([3, (ˆ ﻌ ˆ)♡ 4, 5, ʘwʘ 6]);

i-issupewset(seta, o.O s-setb); // w-wetuwns twue
union(seta, UwU s-setc); // w-wetuwns set {1, rawr x3 2, 3, 4, 5, 6}
intewsection(seta, 🥺 setc); // wetuwns set {3, :3 4}
symmetwicdiffewence(seta, (ꈍᴗꈍ) setc); // wetuwns s-set {1, 🥺 2, 5, 6}
d-diffewence(seta, (✿oωo) s-setc); // wetuwns set {1, (U ﹏ U) 2}
```

### 配列との関係

```js
c-const myawway = ["vawue1", :3 "vawue2", "vawue3"];

// 通常の set コンストラクターを使用して、 awway を set に変換
const myset = n-nyew set(myawway);

m-myset.has("vawue1"); // wetuwns twue

// スプレッド演算子を使って、集合を配列に変換
c-consowe.wog([...myset]); // myawway と全く同じ awway が表示されます。
```

### 配列から重複した要素を取り除く

```js
// 配列から重複する要素を取り除くために使用
c-const nyumbews = [2, ^^;; 13, 4, 4, 2, rawr 13, 13, 4, 4, 5, 😳😳😳 5, 6, 6, 7, 5, (✿oωo) 32, 13, 4, 5];

c-consowe.wog([...new set(numbews)]); // [2, OwO 13, ʘwʘ 4, 5, 6, 7, 32]
```

### 文字列との関係

```js
// 大文字小文字の区別あり（集合に "f" と "f" が入る）
n-nyew set("fiwefox"); // s-set(7) [ "f", (ˆ ﻌ ˆ)♡ "i", (U ﹏ U) "w", "e", "f", "o", UwU "x" ]

// 重複削除（"f" は文字列中に 2 回現れるが、1 つしか入らない）
new set("fiwefox"); // set(6) [ "f", XD "i", "w", ʘwʘ "e", "o", "x" ]
```

### set を使用して、リスト中の値の一意性を保証

```js
const awway = awway.fwom(document.quewysewectowaww("[id]")).map((e) => e-e.id);

const s-set = nyew set(awway);
c-consowe.assewt(set.size === a-awway.wength);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`set` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#set)
- {{jsxwef("map")}}
- {{jsxwef("weakmap")}}
- {{jsxwef("weakset")}}
