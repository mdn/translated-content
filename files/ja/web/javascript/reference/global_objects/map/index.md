---
title: Map
slug: Web/JavaScript/Reference/Global_Objects/Map
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**`Map`** オブジェクトはキーと値のペアを保持し、キーが最初に挿入された順序を覚えています。
キーや値には任意の値（オブジェクトと{{Glossary("Primitive", "プリミティブ値")}}）を使用することができます。

{{InteractiveExample("JavaScript デモ: Map", "taller")}}

```js interactive-example
const map = new Map();

map.set("a", 1);
map.set("b", 2);
map.set("c", 3);

console.log(map.get("a"));
// 予想される結果: 1

map.set("a", 97);

console.log(map.get("a"));
// 予想される結果: 97

console.log(map.size);
// 予想される結果: 3

map.delete("b");

console.log(map.size);
// 予想される結果: 2
```

## 解説

`Map` オブジェクトは、キーと値のペアのコレクションです。`Map` のキーは**一度しか出現しません**。`Map` の集合の中で一意です。`Map` オブジェクトはキーと値のペアで反復処理されます。{{jsxref("Statements/for...of", "for...of")}} ループは、各反復処理に対して `[キー, 値]` という 2 つのメンバーからなる配列を返します。反復処理は _挿入順_ で行われます。これは、それぞれのキーと値のペアが [`set()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Map/set) メソッドによって最初にマップに挿入された順番に対応します（つまり、 `set()` が呼ばれたときには、すでに同じ値を持つキーがマップになかったということです）。

仕様書では、「平均して、集合の要素数に対してサブリニアなアクセス時刻を提供する」マップを実装することを要求しています。したがって、複雑度が O(N) よりも高い場合、内部的にはハッシュ表（O(1) ルックアップ）、探索木（O(log(N)) ルックアップ）、あるいは他のデータ構造として表すことが可能です。

### キーの等価性

キー値の等価性は [SameValueZero](/ja/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#同値ゼロ等価性) アルゴリズムに基づいて評価されます。（以前は [SameValue](/ja/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#object.is_を使用した同値等価性) が使われており、 `0` と `-0` が異なるものとして扱われていました。[ブラウザーの互換性](#ブラウザーの互換性)をチェックしてください）。これは {{jsxref("NaN")}} を `NaN` と等価と見なすもので（`NaN !== NaN` ですが）、他の値はすべて `===` 演算子の意味に従って等価性が考慮されます。

### Object と Map の比較

{{jsxref("Object")}} と `Map` は似ています。どちらもキーを値に設定したり、それらの値を受け取ったり、キーを削除したり、キーに何かが格納されているかどうかを判定したりすることができます。この意味で（そして他の組み込みオブジェクトがなかったため）、従来 `Object` は `Map` として使われてきました。

しかし、いくつかの場面で `Map` の方が勝るような重要な違いがあります。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row"></th>
      <th scope="col">Map</th>
      <th scope="col">Object</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">偶発的なキー</th>
      <td>
        <code>Map</code> は既定では何もキーを持っていません。明示的に設定したものだけを含みます。
      </td>
      <td>
        <p>
          <code>Object</code> にはプロトタイプがあります。よって既定のキーを含んでいるので、注意しないと自分のキーと衝突する可能性があります。
        </p>
        <div class="notecard note">
          <p>
            <strong>メモ:</strong> ES5 では、
            {{jsxref("Object.create", "Object.create(null)")}}
            を使用すると回避できますが、これはめったに行われていません。
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">セキュリティ</th>
      <td>
        <code>Map</code> はユーザーが提供したキーと値を使用しても安全です。
      </td>
      <td>
        <p>
          ユーザーが提供したキーと値のペアを <code>Object</code> に設定すると、攻撃者がオブジェクトのプロトタイプを上書きできる可能性があり、
          <a href="https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md">
            オブジェクトインジェクション攻撃
          </a>につながる可能性があります。偶発的なキーの問題と同様に、これも<code>null</code>-prototypeオブジェクトを使用することによって軽減することができます。
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">キーの型</th>
      <td>
        <code>Map</code> のキーはあらゆる値がなることができます
        （関数、オブジェクト、あらゆるプリミティブなど）。
      </td>
      <td>
        <code>Object</code> のキーは文字列またはシンボルでなければなりません。
      </td>
    </tr>
    <tr>
      <th scope="row">キーの順序</th>
      <td>
        <p>
          <code>Map</code> のキーは、直感的な方法で順序付けられます。すなわち、反復処理を行うと、 <code>Map</code> オブジェクトは挿入順でキーを返します。
        </p>
      </td>
      <td>
        <p>
          通常の <code>Object</code> のキーは現在では順序付けされていますが、以前はそうではなかったので、順序は複雑です。結果として、プロパティの順序に頼らない方が良いでしょう。
        </p>
        <p>
          この順序は ECMAScript 2015 で初めて自身のプロパティに対してのみ定義されましたが、 ECMAScript 2020 では継承されたプロパティに対しても同様に順序が定義されています。
          しかし、オブジェクトのプロパティが<strong>すべて</strong>反復処理される単一の単一のメカニズムはないことに注意してください。
          （{{jsxref("Statements/for...in", "for-in")}} は列挙可能な文字列キーのプロパティのみを含む、 {{jsxref("Object.keys")}} は自分自身の列挙可能な文字列キーのプロパティのみを含む、 {{jsxref("Object.getOwnPropertyNames")}} は列挙不可能な場合でも自分自身の文字列キーのプロパティを含む、 {{jsxref("Object.getOwnPropertySymbols")}} は、
          <code>Symbol</code> キーを持つプロパティに対しても同じことを行う、など。）
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row"><p>大きさ</p></th>
      <td>
        <code>Map</code> の中のアイテム数は、 {{jsxref("Map.prototype.size", "size")}} プロパティで簡単に得ることができます。
      </td>
      <td>
        <code>Object</code> 内のアイテムの数を決定することは、より回りくどく、効率的ではありません。一般的な方法は、 {{jsxref("Object.keys()")}} から返される配列の {{jsxref("Array/length", "length")}} を通じて行う方法です。
      </td>
    </tr>
    <tr>
      <th scope="row">反復処理</th>
      <td>
        <code>Map</code> は <a href="/ja/docs/Web/JavaScript/Reference/Iteration_protocols"
          >反復可能</a
        > ですので、直接反復処理を行うことができます。
      </td>
      <td>
        <code>Object</code>
        では反復処理を行うのに、いくつかの形でキーの一覧を取得して、そのうえで反復処理を行う必要があります。
        <p>
          <code>Object</code> は <a
            href="/ja/docs/Web/JavaScript/Reference/Iteration_protocols#反復可能プロトコル"
            >反復処理プロトコル</a
          >を実装していないので、オブジェクトを JavaScript の <a href="/ja/docs/Web/JavaScript/Reference/Statements/for...of"
            >for...of</a
          > 文を使用して直接反復処理を行うことは（既定では）できません。
        </p>
        <div class="notecard note">
          <p><strong>メモ:</strong></p>
          <ul>
            <li>
              オブジェクトに反復処理プロトコルを実装したり、 <a
                href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/keys"
                ><code>Object.keys</code></a
              > または <a
                href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/entries"
                ><code>Object.entries</code></a
              > を使用して反復処理を行うことはできます。
            </li>
            <li>
              <a href="/ja/docs/Web/JavaScript/Reference/Statements/for...in"
                >for...in</a
              > 文により、オブジェクトの<em>列挙可能な</em>プロパティを反復処理することができます。
            </li>
          </ul>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">性能</th>
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
    </tr>
    <tr>
      <th scope="row">シリアライズと解釈</th>
      <td>
        <p>シリアライズや解釈のためのネイティブな対応はありません。</p>
        <p>
          （ただし、 <em>replacer</em> 引数で {{jsxref("JSON.stringify()")}} を使用し、 <em>reviver</em> 引数で {{jsxref("JSON.parse()")}} を使用することで、 <code>Map</code> のために、独自のシリアライズと解釈の対応を作成することができます。 Stack Overflow の質問 <a href="https://stackoverflow.com/q/29085197/">How do you JSON.stringify an ES6 Map?</a> を参照してください。）
        </p>
      </td>
      <td>
        <p>
          {{jsxref("Object")}} から JSON へのシリアライズには、 {{jsxref("JSON.stringify()")}} を使用してネイティブに対応しています。
        </p>
        <p>
          JSON から {{jsxref("Object")}} への解釈には、 {{jsxref("JSON.parse()")}} を使用してネイティブに対応しています。
        </p>
      </td>
    </tr>
  </tbody>
</table>

### オブジェクトプロパティの設定

Map オブジェクトに対してオブジェクトプロパティを設定すると正しく動作しますが、混乱を催すことが考えられます。

たとえば、次の例は一応動作するように見えます。

```js example-bad
const wrongMap = new Map();
wrongMap["bla"] = "blaa";
wrongMap["bla2"] = "blaaa2";

console.log(wrongMap); // Map { bla: 'blaa', bla2: 'blaaa2' }
```

しかし、このようにプロパティを設定すると、 Map データ構造を使用しません。一般的なオブジェクトの機能を使用します。 'bla' の値はクエリーを行うための Map に格納されません。データにその他の操作を行うと失敗します。

```js example-bad
wrongMap.has("bla"); // false
wrongMap.delete("bla"); // false
console.log(wrongMap); // Map { bla: 'blaa', bla2: 'blaaa2' }
```

Map にデータを格納する正しい方法は、 `set(key, value)` メソッドを使用する方法です。

```js example-good
const contacts = new Map();
contacts.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });
contacts.has("Jessie"); // true
contacts.get("Hilary"); // undefined
contacts.set("Hilary", { phone: "617-555-4321", address: "321 S 2nd St" });
contacts.get("Jessie"); // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete("Raymond"); // false
contacts.delete("Jessie"); // true
console.log(contacts.size); // 1
```

## Map 風のブラウザー API

**ブラウザーの `Map` 風オブジェクト** (または「Map 風オブジェクト」) は、多くの点で `Map` のようにふるまう [Web API](/ja/docs/Web/API) のインターフェイスです。

`Map` と同様に、項目はオブジェクトに追加されたのと同じ順番で走査できます。
また、`Map` 風オブジェクトと `Map` は同じ名前で同じ挙動のプロパティおよびメソッドを持ちます。
しかし、`Map` と違い、各項目のキーと値には事前に定義された特定の型しか使用できません。

使用可能な型は、仕様書の IDL 定義で設定されています。
たとえば、{{domxref("RTCStatsReport")}} はキーには文字列を、値にはオブジェクトを用いなければならない `Map` 風オブジェクトです。
これは、仕様書の IDL で以下のように定義されています。

```webidl
interface RTCStatsReport {
  readonly maplike<DOMString, object>;
};
```

`Map` 風オブジェクトは読み取り専用のことも、読み書き可能なこともあります。(上の IDL の `readonly` キーワードに注目してください)

- 読み取り専用の `Map` 風オブジェクトは、プロパティ {{jsxref("Map/size", "size")}} と、メソッド {{jsxref("Map/entries", "entries()")}}, {{jsxref("Map/forEach", "forEach()")}}, {{jsxref("Map/get", "get()")}}, {{jsxref("Map/has", "has()")}}, {{jsxref("Map/keys", "keys()")}}, {{jsxref("Map/values", "values()")}}, [`Symbol.iterator()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator) を持ちます。
- 書き込み可能な `Map` 風オブジェクトは、これに加えてメソッド {{jsxref("Map/clear", "clear()")}}, {{jsxref("Map/delete", "delete()")}}, {{jsxref("Map/set", "set()")}} を持ちます。

これらのメソッドとプロパティは、キーと値の型の制約を除いて、`Map` の対応するエンティティと同様にふるまいます。

以下は、読み取り専用の `Map` 風ブラウザーオブジェクトの例です。

- {{domxref("AudioParamMap")}}
- {{domxref("RTCStatsReport")}}
- {{domxref("EventCounts")}}
- {{domxref("KeyboardLayoutMap")}}
- {{domxref("MIDIInputMap")}}
- {{domxref("MIDIOutputMap")}}

## コンストラクター

- {{jsxref("Map/Map", "Map()")}}
  - : 新しい `Map` オブジェクトを生成します。

## 静的プロパティ

- [`Map[Symbol.species]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.species)
  - : 派生クラスを生成するためのコンストラクター関数です。

## 静的メソッド

- {{jsxref("Map.groupBy()")}}
  - : 与えられた反復可能な要素を、与えられたコールバック関数から返された値を使用してグループ化します。最後に返される `Map` は、テスト関数から得られた一意の値をキーとして使用しており、各グループの要素の配列を取得するために使用できます。

## インスタンスプロパティ

これらのプロパティは `Map.prototype` で定義され、すべての `Map` インスタンスで共有されます。

- {{jsxref("Object/constructor", "Map.prototype.constructor")}}
  - : このインスタンスオブジェクトを作成したコンストラクター関数。`Map` インスタンスの場合、初期値は {{jsxref("Map/Map", "Map")}} コンストラクターです。
- {{jsxref("Map.prototype.size")}}
  - : `Map` オブジェクトの中のキーと値のペアの数を返します。
- `Map.prototype[Symbol.toStringTag]`
  - : [`[Symbol.toStringTag]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) プロパティの初期値は文字列 `"Map"` です。このプロパティは {{jsxref("Object.prototype.toString()")}} で使用されます。

## インスタンスメソッド

- {{jsxref("Map.prototype.clear()")}}
  - : `Map` オブジェクトからすべてのキーと値のペアを削除します。
- {{jsxref("Map.prototype.delete()")}}
  - : `Map` オブジェクトに要素が存在し、削除された場合は `true` を返します。要素が存在しなければ `false` を返します。その後では `Map.has(key)` が `false` を返すようになります。
- {{jsxref("Map.prototype.entries()")}}
  - : `Map` オブジェクトの各要素の `[key, value]` からなる 2 つの要素の配列を挿入順で含む新しいイテレーターオブジェクトを返します。
- {{jsxref("Map.prototype.forEach()")}}
  - : `Map` オブジェクトに存在するキーと値のペアの数だけ、挿入順に `callbackFn` を呼び出します。 `thisArg` 引数が `forEach` に渡された場合、各コールバックの `this` 値として使用されます。
- {{jsxref("Map.prototype.get()")}}
  - : `key` で指定されたキーに結び付けられた値を返します。存在しない場合は `undefined` を返します。
- {{jsxref("Map.prototype.has()")}}
  - : 論理値で、渡されたキーに結び付けられた要素が `Map` オブジェクト内に存在するかどうかを返します。
- {{jsxref("Map.prototype.keys()")}}
  - : `Map` オブジェクト内の各要素のキーが挿入順で含む、新しいイテレーターオブジェクトを返します。
- {{jsxref("Map.prototype.set()")}}
  - : `Map` オブジェクト内の渡されたキーを値に設定します。その `Map` オブジェクトを返します。
- {{jsxref("Map.prototype.values()")}}
  - : `Map` オブジェクト内の各要素の値が挿入順で含む、新しいイテレーターオブジェクトを返します。
- [`Map.prototype[Symbol.iterator]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator)
  - : `Map` オブジェクト内の各要素の `[key, value] の配列` が挿入順で含む、新しいイテレーターオブジェクトを返します。

## 例

### Map オブジェクトの使用

```js
const myMap = new Map();

const keyString = "文字列";
const keyObj = {};
const keyFunc = () => {};

// 値を設定する
myMap.set(keyString, "'文字列' と結び付けられた値");
myMap.set(keyObj, "keyObj と結び付けられた値");
myMap.set(keyFunc, "keyFunc と結び付けられた値");

console.log(myMap.size); // 3

// 値を取得する
console.log(myMap.get(keyString)); // "'文字列' と結び付けられた値"
console.log(myMap.get(keyObj)); // "keyObj と結び付けられた値"
console.log(myMap.get(keyFunc)); // "keyFunc と結び付けられた値"

console.log(myMap.get("文字列")); // "'文字列' と結び付けられた値"。 keyString === '文字列' であるため
console.log(myMap.get({})); // undefined, keyObj !== {} であるため
console.log(myMap.get(() => {})); // undefined, keyFunc !== () => {} であるため
```

### NaN を Map のキーとして使用

{{jsxref("NaN")}} もまたキーとして使うことができます。すべての `NaN` は自身と等しくない（`NaN !== NaN` は真）にもかかわらず、以下の例は動作します。これは `NaN` が互いに区別できないためです。

```js
const myMap = new Map();
myMap.set(NaN, "not a number");

myMap.get(NaN);
// "not a number"

const otherNaN = Number("foo");
myMap.get(otherNaN);
// "not a number"
```

### for..of を使用した Map の反復処理

マップは `for..of` ループを使用して反復処理を行うことができます。

```js
const myMap = new Map();
myMap.set(0, "zero");
myMap.set(1, "one");

for (const [key, value] of myMap) {
  console.log(`${key} = ${value}`);
}
// 0 = zero
// 1 = one

for (const key of myMap.keys()) {
  console.log(key);
}
// 0
// 1

for (const value of myMap.values()) {
  console.log(value);
}
// zero
// one

for (const [key, value] of myMap.entries()) {
  console.log(`${key} = ${value}`);
}
// 0 = zero
// 1 = one
```

### forEach() で Map を反復処理

マップは {{jsxref("Map/forEach", "forEach()")}} メソッドを使用して反復できます。

```js
myMap.forEach((value, key) => {
  console.log(`${key} = ${value}`);
});
// 0 = zero
// 1 = one
```

### Array オブジェクトとの関係

```js
const kvArray = [
  ["キー1", "値1"],
  ["キー2", "値2"],
];

// 通常の Map コンストラクターを使って、キーと値の 2 次元配列をマップに変換する
const myMap = new Map(kvArray);

console.log(myMap.get("キー1")); // "値1"

// 展開演算子を使って、マップをキー・値の 2 次元配列に変換する
console.log(Array.from(myMap)); // kvArray とまったく同じ Array を表示する

// あるいは展開演算子をキーまたは値のイテレーターに使って、キーまたは値のみの配列を得る
console.log([...myMap]);

// または keys() や values() のイテレーターを使用して配列に変換する
console.log(Array.from(myMap.keys())); // ["key1", "key2"] が出力される
```

### Map の複製と混合

`Array` と同様に、 `Map` は複製することができます。

```js
const original = new Map([[1, "one"]]);

const clone = new Map(original);

console.log(clone.get(1)); // one
console.log(original === clone); // false （シャロー比較に便利）
```

> [!NOTE]
> データ自身は複製されないことに注意しておいてください。言い換えれば、これは `Map` の[シャローコピー](/ja/docs/Glossary/Shallow_copy)にすぎません。

マップはキーの固有性を保持しながら混合可能です。

```js
const first = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);

const second = new Map([
  [1, "uno"],
  [2, "dos"],
]);

// 2 つのマップを混合します。重複するキーは後勝ちになります。
// スプレッド演算子は基本的に Map を Array に変換します。
const merged = new Map([...first, ...second]);

console.log(merged.get(1)); // uno
console.log(merged.get(2)); // dos
console.log(merged.get(3)); // three
```

Map は Array と混合することもできます。

```js
const first = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);

const second = new Map([
  [1, "uno"],
  [2, "dos"],
]);

// マップと配列を混合します。重複するキーは後勝ちになります。
const merged = new Map([...first, ...second, [1, "un"]]);

console.log(merged.get(1)); // un
console.log(merged.get(2)); // dos
console.log(merged.get(3)); // three
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Map` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#map)
- [es-shims による `Map` のポリフィル](https://www.npmjs.com/package/es-map)
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
- {{jsxref("WeakSet")}}
