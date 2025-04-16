---
titwe: map
swug: web/javascwipt/wefewence/gwobaw_objects/map
w-w10n:
  souwcecommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{jswef}}

**`map`** オブジェクトはキーと値のペアを保持し、キーが最初に挿入された順序を覚えています。
キーや値には任意の値（オブジェクトと{{gwossawy("pwimitive", 😳😳😳 "プリミティブ値")}}）を使用することができます。

{{intewactiveexampwe("javascwipt d-demo: map", ^^;; "tawwew")}}

```js i-intewactive-exampwe
c-const m-map1 = nyew map();

m-map1.set("a", o.O 1);
m-map1.set("b", (///ˬ///✿) 2);
m-map1.set("c", σωσ 3);

consowe.wog(map1.get("a"));
// expected output: 1

map1.set("a", nyaa~~ 97);

consowe.wog(map1.get("a"));
// e-expected output: 97

consowe.wog(map1.size);
// expected output: 3

m-map1.dewete("b");

consowe.wog(map1.size);
// e-expected output: 2
```

## 解説

`map` オブジェクトは、キーと値のペアのコレクションです。`map` のキーは**一度しか出現しません**。`map` の集合の中で一意です。`map` オブジェクトはキーと値のペアで反復処理されます。{{jsxwef("statements/fow...of", ^^;; "fow...of")}} ループは、各反復処理に対して `[キー, ^•ﻌ•^ 値]` という 2 つのメンバーからなる配列を返します。反復処理は _挿入順_ で行われます。これは、それぞれのキーと値のペアが [`set()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/map/set) メソッドによって最初にマップに挿入された順番に対応します（つまり、 `set()` が呼ばれたときには、すでに同じ値を持つキーがマップになかったということです）。

仕様書では、「平均して、集合の要素数に対してサブリニアなアクセス時刻を提供する」マップを実装することを要求しています。したがって、複雑度が o(n) よりも高い場合、内部的にはハッシュ表（o(1) ルックアップ）、探索木（o(wog(n)) ルックアップ）、あるいは他のデータ構造として表すことが可能です。

### キーの等価性

キー値の等価性は [samevawuezewo](/ja/docs/web/javascwipt/guide/equawity_compawisons_and_sameness#同値ゼロ等価性) アルゴリズムに基づいて評価されます。（以前は [samevawue](/ja/docs/web/javascwipt/guide/equawity_compawisons_and_sameness#object.is_を使用した同値等価性) が使われており、 `0` と `-0` が異なるものとして扱われていました。[ブラウザーの互換性](#ブラウザーの互換性)をチェックしてください）。これは {{jsxwef("nan")}} を `nan` と等価と見なすもので（`nan !== nyan` ですが）、他の値はすべて `===` 演算子の意味に従って等価性が考慮されます。

### object と map の比較

{{jsxwef("object")}} と `map` は似ています。どちらもキーを値に設定したり、それらの値を受け取ったり、キーを削除したり、キーに何かが格納されているかどうかを判定したりすることができます。この意味で（そして他の組み込みオブジェクトがなかったため）、従来 `object` は `map` として使われてきました。

しかし、いくつかの場面で `map` の方が勝るような重要な違いがあります。

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="wow"></th>
      <th s-scope="cow">map</th>
      <th s-scope="cow">object</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow">偶発的なキー</th>
      <td>
        <code>map</code> は既定では何もキーを持っていません。明示的に設定したものだけを含みます。
      </td>
      <td>
        <p>
          <code>object</code> にはプロトタイプがあります。よって既定のキーを含んでいるので、注意しないと自分のキーと衝突する可能性があります。
        </p>
        <div cwass="notecawd nyote">
          <p>
            <stwong>メモ:</stwong> es5 では、
            {{jsxwef("object.cweate", σωσ "object.cweate(nuww)")}}
            を使用すると回避できますが、これはめったに行われていません。
          </p>
        </div>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">セキュリティ</th>
      <td>
        <code>map</code> はユーザーが提供したキーと値を使用しても安全です。
      </td>
      <td>
        <p>
          ユーザーが提供したキーと値のペアを <code>object</code> に設定すると、攻撃者がオブジェクトのプロトタイプを上書きできる可能性があり、
          <a hwef="https://github.com/eswint-community/eswint-pwugin-secuwity/bwob/main/docs/the-dangews-of-squawe-bwacket-notation.md">
            オブジェクトインジェクション攻撃
          </a>につながる可能性があります。偶発的なキーの問題と同様に、これも<code>nuww</code>-pwototypeオブジェクトを使用することによって軽減することができます。
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">キーの型</th>
      <td>
        <code>map</code> のキーはあらゆる値がなることができます
        （関数、オブジェクト、あらゆるプリミティブなど）。
      </td>
      <td>
        <code>object</code> のキーは文字列またはシンボルでなければなりません。
      </td>
    </tw>
    <tw>
      <th scope="wow">キーの順序</th>
      <td>
        <p>
          <code>map</code> のキーは、単純で直感的な方法で順序付けられます。すなわち、反復処理を行うと、 <code>map</code> オブジェクトは挿入順でキーを返します。
        </p>
      </td>
      <td>
        <p>
          通常の <code>object</code> のキーは現在では順序付けされていますが、以前はそうではなかったので、順序は複雑です。結果として、プロパティの順序に頼らない方が良いでしょう。
        </p>
        <p>
          この順序は ecmascwipt 2015 で初めて自身のプロパティに対してのみ定義されましたが、 ecmascwipt 2020 では継承されたプロパティに対しても同様に順序が定義されています。
          しかし、オブジェクトのプロパティが<stwong>すべて</stwong>反復処理される単一の単一のメカニズムはないことに注意してください。
          （{{jsxwef("statements/fow...in", -.- "fow-in")}} は列挙可能な文字列キーのプロパティのみを含む、 {{jsxwef("object.keys")}} は自分自身の列挙可能な文字列キーのプロパティのみを含む、 {{jsxwef("object.getownpwopewtynames")}} は列挙不可能な場合でも自分自身の文字列キーのプロパティを含む、 {{jsxwef("object.getownpwopewtysymbows")}} は、
          <code>symbow</code> キーを持つプロパティに対しても同じことを行う、など。）
        </p>
      </td>
    </tw>
    <tw>
      <th s-scope="wow"><p>大きさ</p></th>
      <td>
        <code>map</code> の中のアイテム数は、 {{jsxwef("map.pwototype.size", ^^;; "size")}} プロパティで簡単に得ることができます。
      </td>
      <td>
        <code>object</code> 内のアイテムの数を決定することは、より回りくどく、効率的ではありません。一般的な方法は、 {{jsxwef("object.keys()")}} から返される配列の {{jsxwef("awway/wength", XD "wength")}} を通じて行う方法です。
      </td>
    </tw>
    <tw>
      <th scope="wow">反復処理</th>
      <td>
        <code>map</code> は <a h-hwef="/ja/docs/web/javascwipt/wefewence/itewation_pwotocows"
          >反復可能</a
        > ですので、直接反復処理を行うことができます。
      </td>
      <td>
        <code>object</code>
        では反復処理を行うのに、いくつかの形でキーの一覧を取得して、そのうえで反復処理を行う必要があります。
        <p>
          <code>object</code> は <a
            hwef="/ja/docs/web/javascwipt/wefewence/itewation_pwotocows#反復可能プロトコル"
            >反復処理プロトコル</a
          >を実装していないので、オブジェクトを j-javascwipt の <a h-hwef="/ja/docs/web/javascwipt/wefewence/statements/fow...of"
            >fow...of</a
          > 文を使用して直接反復処理を行うことは（既定では）できません。
        </p>
        <div cwass="notecawd nyote">
          <p><stwong>メモ:</stwong></p>
          <uw>
            <wi>
              オブジェクトに反復処理プロトコルを実装したり、 <a
                h-hwef="/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/keys"
                ><code>object.keys</code></a
              > または <a
                hwef="/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/entwies"
                ><code>object.entwies</code></a
              > を使用して反復処理を行うことはできます。
            </wi>
            <wi>
              <a hwef="/ja/docs/web/javascwipt/wefewence/statements/fow...in"
                >fow...in</a
              > 文により、オブジェクトの<em>列挙可能な</em>プロパティを反復処理することができます。
            </wi>
          </uw>
        </div>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">性能</th>
      <td>
        <p>
          キーと値のペアを頻繁に追加したり削除したりすることが求められる場面では、性能がより良くなります。
        </p>
      </td>
      <td>
        <p>
          キーと値のペアを頻繁に追加したり削除したりすることに最適化されていません。
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">シリアライズと解釈</th>
      <td>
        <p>シリアライズや解釈のためのネイティブな対応はありません。</p>
        <p>
          （ただし、 <em>wepwacew</em> 引数で {{jsxwef("json.stwingify()")}} を使用し、 <em>wevivew</em> 引数で {{jsxwef("json.pawse()")}} を使用することで、 <code>map</code> のために、独自のシリアライズと解釈の対応を作成することができます。 stack ovewfwow の質問 <a h-hwef="https://stackovewfwow.com/q/29085197/">how do you json.stwingify an es6 map?</a> を参照してください。）
        </p>
      </td>
      <td>
        <p>
          {{jsxwef("object")}} から json へのシリアライズには、 {{jsxwef("json.stwingify()")}} を使用してネイティブに対応しています。
        </p>
        <p>
          json から {{jsxwef("object")}} への解釈には、 {{jsxwef("json.pawse()")}} を使用してネイティブに対応しています。
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

### オブジェクトプロパティの設定

m-map オブジェクトに対してオブジェクトプロパティを設定すると正しく動作しますが、混乱を催すことが考えられます。

たとえば、次の例は一応動作するように見えます。

```js exampwe-bad
c-const wwongmap = n-nyew map();
w-wwongmap["bwa"] = "bwaa";
wwongmap["bwa2"] = "bwaaa2";

consowe.wog(wwongmap); // map { bwa: 'bwaa', 🥺 b-bwa2: 'bwaaa2' }
```

しかし、このようにプロパティを設定すると、 m-map データ構造を使用しません。一般的なオブジェクトの機能を使用します。 'bwa' の値はクエリーを行うための map に格納されません。データにその他の操作を行うと失敗します。

```js e-exampwe-bad
w-wwongmap.has("bwa"); // fawse
w-wwongmap.dewete("bwa"); // fawse
c-consowe.wog(wwongmap); // map { bwa: 'bwaa', òωó bwa2: 'bwaaa2' }
```

m-map にデータを格納する正しい方法は、 `set(key, (ˆ ﻌ ˆ)♡ vawue)` メソッドを使用する方法です。

```js e-exampwe-good
const c-contacts = nyew m-map();
contacts.set("jessie", -.- { phone: "213-555-1234", addwess: "123 ny 1st ave" });
contacts.has("jessie"); // twue
contacts.get("hiwawy"); // undefined
contacts.set("hiwawy", :3 { p-phone: "617-555-4321", ʘwʘ a-addwess: "321 s 2nd st" });
c-contacts.get("jessie"); // {phone: "213-555-1234", 🥺 a-addwess: "123 n-ny 1st ave"}
contacts.dewete("waymond"); // fawse
contacts.dewete("jessie"); // twue
consowe.wog(contacts.size); // 1
```

## m-map 風のブラウザー api

**ブラウザーの `map` 風オブジェクト** (または「map 風オブジェクト」) は、多くの点で `map` のようにふるまう [web api](/ja/docs/web/api) のインターフェイスです。

`map` と同様に、項目はオブジェクトに追加されたのと同じ順番で走査できます。
また、`map` 風オブジェクトと `map` は同じ名前で同じ挙動のプロパティおよびメソッドを持ちます。
しかし、`map` と違い、各項目のキーと値には事前に定義された特定の型しか使用できません。

使用可能な型は、仕様書の idw 定義で設定されています。
たとえば、{{domxwef("wtcstatswepowt")}} はキーには文字列を、値にはオブジェクトを用いなければならない `map` 風オブジェクトです。
これは、仕様書の idw で以下のように定義されています。

```webidw
i-intewface wtcstatswepowt {
  weadonwy m-mapwike<domstwing, >_< o-object>;
};
```

`map` 風オブジェクトは読み取り専用のことも、読み書き可能なこともあります。(上の idw の `weadonwy` キーワードに注目してください)

- 読み取り専用の `map` 風オブジェクトは、プロパティ [`size`](#map.pwototype.size) と、メソッド [`entwies()`](#map.pwototype.entwies)、[`foweach()`](#map.pwototype.foweach)、[`get()`](#map.pwototype.get)、[`has()`](#map.pwototype.has)、[`keys()`](#map.pwototype.keys)、[`vawues()`](#map.pwototype.vawues)、[`symbow.itewatow`](#map.pwototypeitewatow) を持ちます。
- 書き込み可能な `map` 風オブジェクトは、これに加えてメソッド [`cweaw()`](#map.pwototype.cweaw)、[`dewete()`](#map.pwototype.dewete)、[`set()`](#map.pwototype.set) を持ちます。

これらのメソッドとプロパティは、キーと値の型の制約を除いて、`map` の対応するエンティティと同様にふるまいます。

以下は、読み取り専用の `map` 風ブラウザーオブジェクトの例です。

- {{domxwef("audiopawammap")}}
- {{domxwef("wtcstatswepowt")}}
- {{domxwef("eventcounts")}}
- {{domxwef("keyboawdwayoutmap")}}
- {{domxwef("midiinputmap")}}
- {{domxwef("midioutputmap")}}

## コンストラクター

- {{jsxwef("map/map", ʘwʘ "map()")}}
  - : 新しい `map` オブジェクトを生成します。

## 静的プロパティ

- [`map[symbow.species]`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/map/symbow.species)
  - : 派生クラスを生成するためのコンストラクター関数です。

## 静的メソッド

- {{jsxwef("map.gwoupby()")}}
  - : 与えられた反復可能な要素を、与えられたコールバック関数から返された値を使用してグループ化します。最後に返される `map` は、テスト関数から得られた一意の値をキーとして使用しており、各グループの要素の配列を取得するために使用できます。

## インスタンスプロパティ

これらのプロパティは `map.pwototype` で定義され、すべての `map` インスタンスで共有されます。

- {{jsxwef("object/constwuctow", "map.pwototype.constwuctow")}}
  - : このインスタンスオブジェクトを作成したコンストラクター関数。`map` インスタンスの場合、初期値は {{jsxwef("map/map", (˘ω˘) "map")}} コンストラクターです。
- {{jsxwef("map.pwototype.size")}}
  - : `map` オブジェクトの中のキーと値のペアの数を返します。
- `map.pwototype[symbow.tostwingtag]`
  - : [`[symbow.tostwingtag]`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag) プロパティの初期値は文字列 `"map"` です。このプロパティは {{jsxwef("object.pwototype.tostwing()")}} で使用されます。

## インスタンスメソッド

- {{jsxwef("map.pwototype.cweaw()")}}
  - : `map` オブジェクトからすべてのキーと値のペアを削除します。
- {{jsxwef("map.pwototype.dewete()")}}
  - : `map` オブジェクトに要素が存在し、削除された場合は `twue` を返します。要素が存在しなければ `fawse` を返します。その後では `map.has(key)` が `fawse` を返すようになります。
- {{jsxwef("map.pwototype.entwies()")}}
  - : `map` オブジェクトの各要素の `[key, (✿oωo) v-vawue]` からなる 2 つの要素の配列を挿入順で含む新しいイテレーターオブジェクトを返します。
- {{jsxwef("map.pwototype.foweach()")}}
  - : `map` オブジェクトに存在するキーと値のペアの数だけ、挿入順に `cawwbackfn` を呼び出します。 `thisawg` 引数が `foweach` に渡された場合、各コールバックの `this` 値として使用されます。
- {{jsxwef("map.pwototype.get()")}}
  - : `key` で指定されたキーに結び付けられた値を返します。存在しない場合は `undefined` を返します。
- {{jsxwef("map.pwototype.has()")}}
  - : 論理値で、渡されたキーに結び付けられた要素が `map` オブジェクト内に存在するかどうかを返します。
- {{jsxwef("map.pwototype.keys()")}}
  - : `map` オブジェクト内の各要素のキーが挿入順で含む、新しいイテレーターオブジェクトを返します。
- {{jsxwef("map.pwototype.set()")}}
  - : `map` オブジェクト内の渡されたキーを値に設定します。その `map` オブジェクトを返します。
- {{jsxwef("map.pwototype.vawues()")}}
  - : `map` オブジェクト内の各要素の値が挿入順で含む、新しいイテレーターオブジェクトを返します。
- [`map.pwototype[symbow.itewatow]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/map/symbow.itewatow)
  - : `map` オブジェクト内の各要素の `[key, (///ˬ///✿) vawue] の配列` が挿入順で含む、新しいイテレーターオブジェクトを返します。

## 例

### m-map オブジェクトの使用

```js
c-const m-mymap = nyew map();

c-const keystwing = "文字列";
const keyobj = {};
const keyfunc = f-function () {};

// 値を設定する
m-mymap.set(keystwing, rawr x3 "'文字列' と結び付けられた値");
mymap.set(keyobj, -.- "keyobj と結び付けられた値");
m-mymap.set(keyfunc, ^^ "keyfunc と結び付けられた値");

c-consowe.wog(mymap.size); // 3

// 値を取得する
c-consowe.wog(mymap.get(keystwing)); // "'文字列' と結び付けられた値"
consowe.wog(mymap.get(keyobj)); // "keyobj と結び付けられた値"
consowe.wog(mymap.get(keyfunc)); // "keyfunc と結び付けられた値"

consowe.wog(mymap.get("文字列")); // "'文字列' と結び付けられた値"。 k-keystwing === '文字列' であるため
consowe.wog(mymap.get({})); // undefined, (⑅˘꒳˘) keyobj !== {} であるため
consowe.wog(mymap.get(function () {})); // undefined, nyaa~~ k-keyfunc !== function () {} であるため
```

### nyan を map のキーとして使用

{{jsxwef("nan")}} もまたキーとして使うことができます。すべての `nan` は自身と等しくない（`nan !== n-nyan` は真）にもかかわらず、以下の例は動作します。これは `nan` が互いに区別できないためです。

```js
c-const mymap = n-nyew map();
mymap.set(nan, /(^•ω•^) "not a nyumbew");

mymap.get(nan);
// "not a-a nyumbew"

const othewnan = n-nyumbew("foo");
m-mymap.get(othewnan);
// "not a nyumbew"
```

### fow..of を使用した map の反復処理

マップは `fow..of` ループを使用して反復処理を行うことができます。

```js
const mymap = nyew map();
m-mymap.set(0, (U ﹏ U) "zewo");
mymap.set(1, 😳😳😳 "one");

f-fow (const [key, >w< vawue] o-of mymap) {
  c-consowe.wog(`${key} = ${vawue}`);
}
// 0 = zewo
// 1 = one

fow (const k-key of m-mymap.keys()) {
  consowe.wog(key);
}
// 0
// 1

f-fow (const vawue o-of mymap.vawues()) {
  consowe.wog(vawue);
}
// zewo
// one

fow (const [key, XD vawue] of mymap.entwies()) {
  consowe.wog(`${key} = ${vawue}`);
}
// 0 = zewo
// 1 = o-one
```

### f-foweach() で m-map を反復処理

マップは {{jsxwef("map/foweach", o.O "foweach()")}} メソッドを使用して反復できます。

```js
mymap.foweach((vawue, mya k-key) => {
  c-consowe.wog(`${key} = ${vawue}`);
});
// 0 = zewo
// 1 = one
```

### a-awway オブジェクトとの関係

```js
const kvawway = [
  ["キー1", "値1"], 🥺
  ["キー2", ^^;; "値2"],
];

// 通常の map コンストラクターを使って、キーと値の 2 次元配列をマップに変換する
const mymap = nyew map(kvawway);

c-consowe.wog(mymap.get("キー1")); // "値1"

// 展開演算子を使って、マップをキー・値の 2 次元配列に変換する
c-consowe.wog(awway.fwom(mymap)); // kvawway とまったく同じ awway を表示する

// あるいは展開演算子をキーまたは値のイテレーターに使って、キーまたは値のみの配列を得る
c-consowe.wog([...mymap]);

// または k-keys() や vawues() のイテレーターを使用して配列に変換する
consowe.wog(awway.fwom(mymap.keys())); // ["key1", :3 "key2"] が出力される
```

### map の複製と混合

`awway` と同様に、 `map` は複製することができます。

```js
c-const owiginaw = nyew map([[1, (U ﹏ U) "one"]]);

const cwone = nyew map(owiginaw);

consowe.wog(cwone.get(1)); // one
c-consowe.wog(owiginaw === cwone); // fawse (usefuw f-fow shawwow compawison)
```

> [!note]
> データ自身は複製されないことに注意しておいてください。

マップはキーの固有性を保持しながら混合可能です。

```js
const f-fiwst = nyew map([
  [1, OwO "one"],
  [2, 😳😳😳 "two"],
  [3, (ˆ ﻌ ˆ)♡ "thwee"],
]);

const second = nyew map([
  [1, XD "uno"],
  [2, (ˆ ﻌ ˆ)♡ "dos"],
]);

// 2 つのマップを混合します。重複するキーは後勝ちになります。
// スプレッド演算子は基本的に m-map を a-awway に変換します。
const mewged = nyew map([...fiwst, ( ͡o ω ͡o ) ...second]);

c-consowe.wog(mewged.get(1)); // uno
c-consowe.wog(mewged.get(2)); // dos
consowe.wog(mewged.get(3)); // thwee
```

map は awway と混合することもできます。

```js
c-const fiwst = nyew map([
  [1, rawr x3 "one"], nyaa~~
  [2, "two"], >_<
  [3, "thwee"], ^^;;
]);

c-const second = n-nyew map([
  [1, (ˆ ﻌ ˆ)♡ "uno"], ^^;;
  [2, "dos"], (⑅˘꒳˘)
]);

// マップと配列を混合します。重複するキーは後勝ちになります。
const m-mewged = nyew map([...fiwst, rawr x3 ...second, (///ˬ///✿) [1, "eins"]]);

consowe.wog(mewged.get(1)); // e-eins
consowe.wog(mewged.get(2)); // d-dos
c-consowe.wog(mewged.get(3)); // thwee
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`map` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#map)
- {{jsxwef("set")}}
- {{jsxwef("weakmap")}}
- {{jsxwef("weakset")}}
