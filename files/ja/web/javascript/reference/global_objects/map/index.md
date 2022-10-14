---
title: Map
slug: Web/JavaScript/Reference/Global_Objects/Map
---

{{JSRef}}

**`Map`** オブジェクトはキーと値のペアを保持し、キーが最初に挿入された順序を覚えています。キーや値には任意の値 (オブジェクトと{{glossary("Primitive", "プリミティブ値")}})を使用することができます。

## 解説

`Map` オブジェクトは、その要素について挿入順で反復処理を行うことができます。 {{jsxref("Statements/for...of", "for...of")}} ループは各反復で `[キー, 値]` の配列を返します。

### キーの等価性

- キーの等価性は [`sameValueZero`](/ja/docs/Web/JavaScript/Equality_comparisons_and_sameness#Same-value-zero_equality) アルゴリズムに基づきます。
- {{jsxref("NaN")}} は `NaN` と同じとみなされ (`NaN !== NaN` であっても)、他の値はすべて `===` 演算子の意味に従って等価性が考慮されます。
- 現在の ECMAScript 仕様書では、 `-0` と `+0` は等しいと考えられています。但し、以前の草稿ではそのようになっていませんでした。詳細は _"Value equality for -0 and 0"_ を[ブラウザーの互換性](#Browser_compatibility)一覧で確認してください。

### Object と Map の比較

{{jsxref("Object")}} と `Map` は似ています。 — どちらもキーを値に設定したり、それらの値を受け取ったり、キーを削除したり、キーに何かが格納されているかどうかを判定したりすることができます。この意味で (そして他の内蔵オブジェクトがなかったため)、従来 `Object` は `Map` として使われてきました。

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
      <th scope="row">思いがけないキー</th>
      <td>
        <code>Map</code>
        は既定では何もキーを持っていません。明示的に設定したものだけを含みます。
      </td>
      <td>
        <p>
          <code>Object</code>
          にはプロトタイプがあります。よって既定のキーを含んでいるので、注意しないと自分のキーと衝突する可能性があります。
        </p>
        <div class="blockIndicator note">
          <p>
            <strong>注:</strong> ES5 では、
            {{jsxref("Object.create", "Object.create(null)")}}
            を使用すると回避できますが、これはめったに行われていません。
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">キーの型</th>
      <td>
        <code>Map</code> のキーはあらゆる値がなることができます
        (関数、オブジェクト、あらゆるプリミティブなど)。
      </td>
      <td>
        <code>Object</code> のキーは {{jsxref("String")}} または
        {{jsxref("Symbol")}} でなければなりません。
      </td>
    </tr>
    <tr>
      <th scope="row">キーの順序</th>
      <td>
        <p>
          <code>Map</code>
          のキーは、単純で直感的な方法で順序付けられます。すなわち、反復処理を行うと、
          <code>Map</code> オブジェクトは挿入順でキーを返します。
        </p>
      </td>
      <td>
        <p>
          通常の
          <code>Object</code>
          のキーは現在では順序付けされていますが、以前はそうではなかったので、順序は複雑です。結果として、プロパティの順序に頼らない方が良いでしょう。
        </p>
        <p>
          この順序は ECMAScript 2015
          で初めて自身のプロパティに対してのみ定義されましたが、 ECMAScript 2020
          では継承されたプロパティに対しても同様に順序が定義されています。
          <a href="https://tc39.es/ecma262/#sec-ordinaryownpropertykeys"
            >OrdinaryOwnPropertyKeys</a
          >
          と
          <a href="https://tc39.es/ecma262/#sec-enumerate-object-properties"
            >EnumerateObjectProperties</a
          >
          の抽象指定操作を参照してください。しかし、オブジェクトのプロパティが<strong>すべて</strong>反復処理される単一の単一のメカニズムはないことに注意してください。
          ({{jsxref("Statements/for...in", "for-in")}}
          は列挙可能な文字列キーのプロパティのみを含む、
          {{jsxref("Object.keys")}}
          は自分自身の列挙可能な文字列キーのプロパティのみを含む、
          {{jsxref("Object.getOwnPropertyNames")}}
          は列挙不可能な場合でも自分自身の文字列キーのプロパティを含む、
          {{jsxref("Object.getOwnPropertySymbols")}} は、
          <code>Symbol</code>
          キーを持つプロパティに対しても同じことを行う、など。)
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row"><p>大きさ</p></th>
      <td>
        <code>Map</code> の中の項目数は、
        {{jsxref("Map.prototype.size", "size")}}
        プロパティで簡単に得ることができます。 property.
      </td>
      <td><code>Object</code> の中の項目数は、手動で数える必要があります。</td>
    </tr>
    <tr>
      <th scope="row">反復処理</th>
      <td>
        <code>Map</code> は
        <a href="/ja/docs/Web/JavaScript/Guide/iterable">iterable</a>
        ですので、直接反復処理を行うことができます。
      </td>
      <td>
        <code>Object</code>
        では反復処理を行うのに、いくつかの形でキーの一覧を取得して、そのうえで反復処理を行う必要があります。
      </td>
    </tr>
    <tr>
      <th scope="row">性能</th>
      <td>
        <p>
          キーと値の組を頻繁に追加したり削除したりすることが求められるシナリオでは、性能がより良くなります。
        </p>
      </td>
      <td>
        <p>
          キーと値の組を頻繁に追加したり削除したりすることに最適化されていません。
        </p>
      </td>
    </tr>
  </tbody>
</table>

### オブジェクトプロパティの設定

Map オブジェクトに対してオブジェクトプロパティを設定すると正しく動作しますが、混乱を催すことが考えられます。

たとえば、次の例は一応動作するように見えます。

<pre class="syntaxbox example-bad brush js notranslate">let wrongMap = new Map()
wrongMap['bla'] = 'blaa'
wrongMap['bla2'] = 'blaaa2'

console.log(wrongMap)  // Map { bla: 'blaa', bla2: 'blaaa2' }
</pre>

しかし、このようにプロパティを設定すると、 Map データ構造に符合しません。一般的なオブジェクトの機能を使用します。 'bla' の値はクエリを行うための Map に格納されません。データにその他の操作を行うと失敗します。

<pre class="syntaxbox example-bad brush js notranslate">wrongMap.has('bla')    // false
wrongMap.delete('bla') // false
console.log(wrongMap)  // Map { bla: 'blaa', bla2: 'blaaa2' }</pre>

Map にデータを格納する正しい方法は、 `set(key, value)` メソッドを使用する方法です。

<pre class="syntaxbox brush js example-good notranslate">let contacts = new Map()
contacts.set('Jessie', {phone: "213-555-1234", address: "123 N 1st Ave"})
contacts.has('Jessie') // true
contacts.get('Hilary') // undefined
contacts.set('Hilary', {phone: "617-555-4321", address: "321 S 2nd St"})
contacts.get('Jessie') // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete('Raymond') // false
contacts.delete('Jessie') // true
console.log(contacts.size) // 1

</pre>

## コンストラクター

- {{jsxref("Map/Map", "Map()")}}
  - : 新しい `Map` オブジェクトを生成します。

## 静的プロパティ

- {{jsxref("Map.@@species", "get Map[@@species]")}}
  - : 派生クラスを生成するためのコンストラクター関数です。

## インスタンスプロパティ

- {{jsxref("Map.prototype.size")}}
  - : `Map` オブジェクトの中のキーと値の組の数を返します。

## インスタンスメソッド

- {{jsxref("Map.prototype.clear()")}}
  - : `Map`オブジェクトからすべてのキーと値の組を削除します。
- {{jsxref("Map.delete", "Map.prototype.delete(<var>key</var>)")}}
  - : `Map` オブジェクトに要素が存在し、削除された場合は `true` を返します、要素が存在しなければ `false` を返します。その後では `Map.prototype.has(key)` が `false` を返すようになります。
- {{jsxref("Map.get", "Map.prototype.get(<var>key</var>)")}}
  - : `key` で指定されたキーに結び付けられた値を返します。存在しない場合は `undefined` を返します。
- {{jsxref("Map.has", "Map.prototype.has(<var>key</var>)")}}
  - : `key` で指定されたキーに結び付けられた要素が `Map` オブジェクト内に存在するかどうかを示す boolean を返します。
- {{jsxref("Map.set", "Map.prototype.set(<var>key</var>, <var>value</var>)")}}
  - : `Map` オブジェクト内の `key` で指定されたキーの値を `value` に設定します。その `Map` オブジェクトを返します。

### 反復処理メソッド

- {{jsxref("Map.@@iterator", "Map.prototype[@@iterator]()")}}
  - : 新しい**イテレーター**オブジェクトを返し、これには `Map`オブジェクト内の各要素の **`[key, value] の配列`**が挿入順で含まれます。
- {{jsxref("Map.prototype.keys()")}}
  - : 新しい**イテレーター**オブジェクトを返し、これには `Map`オブジェクト内の各要素の**キー**が挿入順で含まれます。
- {{jsxref("Map.prototype.values()")}}
  - : 新しい**イテレーター**オブジェクトを返し、これには `Map`オブジェクト内の各要素の**値**が挿入順で含まれます。
- {{jsxref("Map.prototype.entries()")}}
  - : `Map`オブジェクト内の要素に対して挿入順にすべての要素の `[key, value]` の配列を含む、新しい**イテレーター**オブジェクトを返します。
- {{jsxref("Map.forEach", "Map.prototype.forEach(<var>callbackFn</var>[, <var>thisArg</var>])")}}
  - : `callbackFn` を、 `Map` オブジェクトに存在するそれぞれのキーと値の組に対して 1 回ずつ、挿入順に呼び出します。 `thisArg` 引数が `forEach` に与えられた場合は、それぞれのコールバックでこれを `this` の値として使用します。

## 例

### Map オブジェクトの使用

```js
let myMap = new Map()

let keyString = '文字列'
let keyObj    = {}
let keyFunc   = function() {}

// 値を設定する
myMap.set(keyString, "'文字列' と結び付けられた値")
myMap.set(keyObj, "keyObj と結び付けられた値")
myMap.set(keyFunc, "keyFunc と結び付けられた値")

myMap.size              // 3

// 値を取得する
myMap.get(keyString)    // "'文字列' と結び付けられた値"
myMap.get(keyObj)       // "keyObj と結び付けられた値"
myMap.get(keyFunc)      // "keyFunc と結び付けられた値"

myMap.get('文字列')     // "'文字列' と結び付けられた値"
                        // keyString === '文字列' であるため
myMap.get({})           // undefined, keyObj !== {} であるため
myMap.get(function() {}) // undefined, keyFunc !== function () {} であるため
```

### NaN を Map のキーとして使用

{{jsxref("NaN")}} もまたキーとして使うことができます。すべての `NaN` は自身と等しくない (`NaN !== NaN` は真) にもかかわらず、以下の例は動作します。これは `NaN` が互いに区別できないためです。

```js
let myMap = new Map()
myMap.set(NaN, 'not a number')

myMap.get(NaN)
// "not a number"

let otherNaN = Number('foo')
myMap.get(otherNaN)
// "not a number"
```

### for..of を使用した Map の反復処理

Map は `for..of` ループを使用して反復処理を行うことができます。

```js
let myMap = new Map()
myMap.set(0, 'zero')
myMap.set(1, 'one')

for (let [key, value] of myMap) {
  console.log(key + ' = ' + value)
}
// 0 = zero
// 1 = one

for (let key of myMap.keys()) {
  console.log(key)
}
// 0
// 1

for (let value of myMap.values()) {
  console.log(value)
}
// zero
// one

for (let [key, value] of myMap.entries()) {
  console.log(key + ' = ' + value)
}
// 0 = zero
// 1 = one
```

### forEach() で Map を反復処理

Map は {{jsxref("Map.prototype.forEach", "forEach()")}} メソッドを使用して反復できます。

```js
myMap.forEach(function(value, key) {
  console.log(key + ' = ' + value)
})
// 0 = zero
// 1 = one
```

### Array オブジェクトとの関係

```js
let kvArray = [["キー1", "値1"], ["キー2", "値2"]];

// 通常の Map コンストラクターを使って、キー・値の 2 次元配列をマップに変換する
let myMap = new Map(kvArray)

myMap.get("キー1") // "値1" を返す

// 展開演算子を使って、マップをキー・値の 2 次元配列に変換する
console.log(Array.from(myMap)) // kvArray とまったく同じ Array を表示する

// あるいは展開演算子をキーまたは値のイテレーターに使って、キーまたは値のみの配列を得る
console.log([...myMap])

// または keys() や values() のイテレーターを使用して配列に変換する
console.log(Array.from(myMap.keys())) // ["key1", "key2"] が出力される
```

### Map の複製と混合

`Array` と同様に、 `Map` は複製することができます。

```js
let original = new Map([
  [1, 'one']
])

let clone = new Map(original)

console.log(clone.get(1))       // one
console.log(original === clone) // false (useful for shallow comparison)
```

> **メモ:** *データ自身*は複製されないことに注意しておいてください。

Map はキーの固有性を保持しながら混合可能です。

```js
let first = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
])

let second = new Map([
  [1, 'uno'],
  [2, 'dos']
])

// 2つのマップを混合します。重複するキーは後勝ちになります。
// スプレッド演算子は基本的に Map を Array に変換します。
let merged = new Map([...first, ...second])

console.log(merged.get(1)) // uno
console.log(merged.get(2)) // dos
console.log(merged.get(3)) // three
```

Map は Array と混合することもできます。

```js
let first = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
])

let second = new Map([
  [1, 'uno'],
  [2, 'dos']
])

// マップと配列を混合します。重複するキーは後勝ちになります。
let merged = new Map([...first, ...second, [1, 'eins']])

console.log(merged.get(1)) // eins
console.log(merged.get(2)) // dos
console.log(merged.get(3)) // three
```

## 仕様書

| 仕様書                                                               |
| -------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-map-objects', 'Map')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Map")}}

## 関連情報

- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
- {{jsxref("WeakSet")}}
