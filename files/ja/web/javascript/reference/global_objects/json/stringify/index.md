---
title: JSON.stringify()
slug: Web/JavaScript/Reference/Global_Objects/JSON/stringify
---

{{JSRef}}

**`JSON.stringify()`** メソッドは、ある JavaScript のオブジェクトや値を JSON 文字列に変換します。置き換え関数を指定して値を置き換えたり、置き換え配列を指定して指定されたプロパティのみを含むようにしたりすることもできます。

{{EmbedInteractiveExample("pages/js/json-stringify.html")}}

## 構文

```js-nolint
JSON.stringify(value)
JSON.stringify(value, replacer)
JSON.stringify(value, replacer, space)
```

### 引数

- `value`
  - : JSON 文字列に変換する値です。
- `replacer` {{optional_inline}}
  - : 文字列化の手順の挙動を変更する関数、または `value` のプロパティのうち出力に含めるものを指定する {{JSxRef("String")}} と {{JSxRef("Number")}} の配列です。この値が配列である場合は、文字列でも数値でもない要素 ({{JSxRef("Symbol")}} など) は完全に無視されます。文字列や数値としては、プリミティブもラッパーオブジェクトも使用可能です。この値が関数でも配列でもない場合 ({{JSxRef("null")}} の場合や、指定しない場合など) は、結果の JSON 文字列にオブジェクトの文字列をキーとするすべてのプロパティが含まれます。
- `space` {{optional_inline}}

  - : 出力する JSON 文字列に可読性を目的に空白 (インデントや改行など) を挿入するために使う {{JSxRef("String")}} または {{JSxRef("Number")}} オブジェクトです。

    これが `Number` のときは、インデントとして使う空白文字の数を示します。この数の上限は 10 です (それより大きい数値は、単に `10` となります)。 1 より小さい値は空白を使わないことを示します。

    これが `String` のときは、その文字列 (10 文字より長い場合はその最初の 10 文字) がネストされたそれぞれのオブジェクトや配列の前に挿入されます。

    これが文字列でも数値でもない (文字列や数値としては、プリミティブもラッパーオブジェクトも使用可能) 場合、たとえば {{JSxRef("null")}} や指定しない場合は、空白は使用されません。

### 返値

与えられた値を表現する JSON 文字列。

### 例外

- {{JSxRef("TypeError")}} ("cyclic object value") 例外は、循環参照が見つかった時に発生します。
- {{JSxRef("TypeError")}} ("BigInt value can't be serialized in JSON") 例外は、 {{JSxRef("BigInt")}} 値を文字列化しようとしたときに発生します。

## 説明

`JSON.stringify()` は値をそれを表す JSON 表記に変換します。値は以下のように変換されます。

- {{JSxRef("Boolean")}}、 {{JSxRef("Number")}}、 {{JSxRef("String")}}、および ([`Object()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/Object) により得られる) {{JSxRef("BigInt")}} の各オブジェクトは、文字列化の際に慣習的な変換セマンティクスに従い、対応するプリミティブ値に変換されます。([`Object()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/Object) により得られる) {{jsxref("Symbol")}} のオブジェクトは、プレーンオブジェクトとして扱われます。
- {{JSxRef("BigInt")}} の値を文字列化しようとすると、例外が発生します。しかし、`BigInt` が (モンキーパッチ `BigInt.prototype.toJSON = ...` により) `toJSON()` メソッドを持っている場合、このメソッドにより文字列化できます。この制約により、適切な文字列化の方法 (そして、ほとんどの場合、対応する逆変換の方法) が常にユーザーによって明示されるようにします。
- {{JSxRef("undefined")}}、関数 ({{JSxRef("Function")}})、シンボル ({{JSxRef("Symbol")}}) は有効な JSON 値ではありません。変換中にそのような値に遭遇した場合は、(オブジェクトの中で発見された場合は) 省略されたり、(配列の中で見つかった場合は) {{JSxRef("null")}} に変換されたりします。 `JSON.stringify()` は `JSON.stringify(() => {})` や `JSON.stringify(undefined)` のように「純粋」な値を渡した場合に `undefined` を返すことがあります。
- {{JSxRef("Infinity")}} および {{JSxRef("NaN")}} の数値は、 {{JSxRef("null")}} の値と同様に、すべて `null` と見なされます。(ただし、前述の値と違って、省略されることはありません)
- 配列は配列として文字列化されます。(角括弧で囲まれます) 0 から `length - 1` までの添字 (両端を含みます) が文字列化され、他のプロパティは無視されます。
- その他のオブジェクトについては:
  - シンボル ({{JSxRef("Symbol")}}) がキーとなっているプロパティはすべて、引数 [`replacer`](#replacer_%E5%BC%95%E6%95%B0) を使用する場合でも完全に無視されます。
  - 値が [`toJSON()`](#tojson_%E3%81%AE%E6%8C%99%E5%8B%95) メソッドを持っている場合は、それがデータをどう文字列化するかを決定します。オブジェクトを文字列化するかわりに、`toJSON()` メソッドが返す値が文字列化されます。`JSON.stringify()` は `toJSON` を 1 個の引数 `key` を指定して呼び出します。この引数は、[`replacer`](#replacer_%E5%BC%95%E6%95%B0) 関数と同じ以下の仕様です:
    - オブジェクトがプロパティの値の場合は、プロパティ名
    - 配列の要素の場合は、配列の添字を表す文字列
    - `JSON.stringify()` がこのオブジェクトについて直接呼ばれた場合は、空文字列
  - {{JSxRef("Date")}} のインスタンスは文字列を返す `toJSON()` を実装しています ([`date.toISOString()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString) と同じです)。そのため、これは文字列に変換されます。
  - [列挙可能なプロパティ](/ja/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)のみが文字列化されます。そのため、{{JSxRef("Map")}}、{{JSxRef("Set")}}、{{JSxRef("WeakMap")}}、{{JSxRef("WeakSet")}} などは `"{}"` に変換されます。引数 [`replacer`](#replacer_%E5%BC%95%E6%95%B0) を用いることで、これらをより実用的なものに変換できます。プロパティは、[`Object.keys()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) と同じアルゴリズムで走査されます。このアルゴリズムは、完全に定義された順番を用い、実装間で一貫性があります。例えば、`JSON.stringify` を同じオブジェクトに対して用いると、常に同じ文字列を生成します。また、`JSON.parse(JSON.stringify(obj))` は (オブジェクトが完全に JSON に変換可能であると仮定すると) もとのオブジェクトと同じキーの順番を持つオブジェクトを生成します。

### replacer 引数

`replacer` 引数は関数または配列です。

配列の場合、その要素は結果の JSON 文字列に含めるオブジェクトのプロパティの名前を表します。文字列と数値である値のみが処理に用いられ、シンボルのキーは無視されます。

関数の場合、`key` と文字列化される `value` の 2 つの引数を取ります。キーをもつオブジェクトが `replacer` のコンテキストで `this` として提供されます。

`replacer` 関数は、まず文字列化されるオブジェクトについて呼び出され、このときの `key` は空文字列 (`""`) です。その後、文字列化されるオブジェクトや配列のそれぞれのプロパティについて呼び出されます。配列の添字は、文字列として `key` に入ります。処理中のプロパティの値は、文字列化において `replacer` の返値に置き換えられます。すなわち:

- 数値 ({{JSxRef("Number")}})、文字列 ({{JSxRef("String")}})、論理値 ({{JSxRef("Boolean")}})、{{JSxRef("null")}} を返すと、その値を直接文字列化したものがプロパティの値として使用されます。({{JSxRef("BigInt")}} を返すと、例外が発生します)
- 関数 ({{JSxRef("Function")}})、シンボル ({{JSxRef("Symbol")}})、{{JSxRef("undefined")}} を返すと、出力にはそのプロパティが含まれなくなります。
- その他のオブジェクトを返した場合、そのオブジェクトのそれぞれのプロパティに `replacer` 関数を呼び出して再帰的に文字列化します。

> **メモ:** `replacer` 関数を使用して配列から値を削除することはできません。`undefined` や関数を返すと、代わりに `null` が使用されます。

> **メモ:** `replacer` が、オブジェクトが初期状態であるか、空文字列のキーを持つプロパティであるかを判別するには (どちらの場合もキーが空文字列になり、オブジェクトが値になる可能性があるので)、繰り返し回数を追跡しておく必要があります (繰り返しが 1 回を超えた場合、空文字列のキーであることが分かります)。

> **メモ:** `replacer` 関数を用いて生成した JSON をパースする際は、逆変換のために引数 [`reviver`](/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#reviver_%E5%BC%95%E6%95%B0%E3%81%AE%E4%BD%BF%E7%94%A8) を用いたくなる可能性が高いでしょう。

通常、配列の要素の添字はずれません (要素が関数などの無効な値である場合も、省略されるのではなく `null` になります)。`replacer` 関数を用いると、別の配列を返すことで、配列の要素の順番を制御できます。

### space 引数

`space` 引数で最終的な文字列での空白の数を調整できます。

- 数値であれば、レベルの階層がそれぞれその数の空白文字 (最大 10 文字) でインデントされます。
- 文字列であれば、レベルの階層がそれぞれこの文字列 (またはその最初の 10 文字) でインデントされます。

インデントの階層が 10 より長くなることはありません。`space` の値が数値の場合は最大 10 となり、文字列の場合は 10 文字に切り詰められます。

## 例

### JSON.stringify の使用

```js
JSON.stringify({}); // '{}'
JSON.stringify(true); // 'true'
JSON.stringify("foo"); // '"foo"'
JSON.stringify([1, "false", false]); // '[1,"false",false]'
JSON.stringify([NaN, null, Infinity]); // '[null,null,null]'
JSON.stringify({ x: 5 }); // '{"x":5}'

JSON.stringify(new Date(2006, 0, 2, 15, 4, 5));
// '"2006-01-02T15:04:05.000Z"'

JSON.stringify({ x: 5, y: 6 });
// '{"x":5,"y":6}'
JSON.stringify([new Number(3), new String("false"), new Boolean(false)]);
// '[3,"false",false]'

// 文字列がキーとなった配列要素は列挙可能ではなく、JSON では意味をなさない
let a = ["foo", "bar"];
a["baz"] = "quux"; // a: [ 0: 'foo', 1: 'bar', baz: 'quux' ]
JSON.stringify(a);
// '["foo","bar"]'

JSON.stringify({ x: [10, undefined, function () {}, Symbol("")] });
// '{"x":[10,null,null,null]}'

// 標準データ構造
JSON.stringify([
  new Set([1]),
  new Map([[1, 2]]),
  new WeakSet([{ a: 1 }]),
  new WeakMap([[{ a: 1 }, 2]]),
]);
// '[{},{},{},{}]'

// 型付き配列
JSON.stringify([new Int8Array([1]), new Int16Array([1]), new Int32Array([1])]);
// '[{"0":1},{"0":1},{"0":1}]'
JSON.stringify([
  new Uint8Array([1]),
  new Uint8ClampedArray([1]),
  new Uint16Array([1]),
  new Uint32Array([1]),
]);
// '[{"0":1},{"0":1},{"0":1},{"0":1}]'
JSON.stringify([new Float32Array([1]), new Float64Array([1])]);
// '[{"0":1},{"0":1}]'

// toJSON()
JSON.stringify({
  x: 5,
  y: 6,
  toJSON() {
    return this.x + this.y;
  },
});
// '11'

// シンボル:
JSON.stringify({ x: undefined, y: Object, z: Symbol("") });
// '{}'
JSON.stringify({ [Symbol("foo")]: "foo" });
// '{}'
JSON.stringify({ [Symbol.for("foo")]: "foo" }, [Symbol.for("foo")]);
// '{}'
JSON.stringify({ [Symbol.for("foo")]: "foo" }, (k, v) => {
  if (typeof k === "symbol") {
    return "a symbol";
  }
});
// undefined

// 列挙可能でないプロパティ:
JSON.stringify(
  Object.create(null, {
    x: { value: "x", enumerable: false },
    y: { value: "y", enumerable: true },
  }),
);
// '{"y":"y"}'

// BigInt の値は例外が発生
JSON.stringify({ x: 2n });
// TypeError: BigInt value can't be serialized in JSON
```

### replacer として関数を用いる例

```js
function replacer(key, value) {
  // プロパティをフィルターする
  if (typeof value === "string") {
    return undefined;
  }
  return value;
}

var foo = {
  foundation: "Mozilla",
  model: "box",
  week: 45,
  transport: "car",
  month: 7,
};
JSON.stringify(foo, replacer);
// '{"week":45,"month":7}'
```

`replacer` で最初のオブジェクトと空文字列をキーとするプロパティを区別したい場合は、(両方の場合において `key` は空文字列となり、`value` はオブジェクトを取りうるので) 繰り返しの回数の記録が必要になるでしょう。(最初の繰り返しより後の場合、本当に空文字列のキーです)

```js
function makeReplacer() {
  let isInitial = true;

  return (key, value) => {
    if (isInitial) {
      isInitial = false;
      return value;
    }
    if (key === "") {
      // (最初のオブジェクト以外の) 名前が "" であるプロパティをすべて取り除く
      return undefined;
    }
    return value;
  };
}

const replacer = makeReplacer();
console.log(JSON.stringify({ "": 1, b: 2 }, replacer)); // "{"b":2}"
```

### replacer として配列を用いる例

`replacer` が配列である場合、その配列の値は結果の JSON 文字列に含めるプロパティの名前を示します。

```js
JSON.stringify(foo, ["week", "month"]);
// '{"week":45,"month":7}', "week" と "month" プロパティだけが保持される
```

### 引数 space の使用

出力をスペース 1 個でインデントします。

```js
console.log(JSON.stringify({ a: 2 }, null, " "));
/*
'{
 "a": 2
}'
*/
```

タブ文字を使うと、標準的な表示の整形と同様になります。

<!-- markdownlint-disable MD010 -->

```js
console.log(JSON.stringify({ uno: 1, dos: 2 }, null, "\t"));
// 以下の文字列を返します:
/*
{
	"uno": 1,
	"dos": 2
}
*/
```

### toJSON() の挙動

オブジェクトに `toJSON()` を定義することで、シリアライズの挙動をオーバーライドできます。

文字列化されるオブジェクトに `toJSON` という名前の値に関数を持ったプロパティがある場合、その `toJSON()` メソッドで JSON の文字列化の挙動をカスタマイズできます。シリアライズされるオブジェクトの代わりに、その `toJSON()` メソッドが呼び出されたときの返値がシリアライズされます。 `JSON.stringify()` は `toJSON` に以下のどれか 1 つの引数をつけて呼び出します。

- このオブジェクトがプロパティの値であった場合は、プロパティ名
- 配列内の値であった場合は、文字列化した配列のインデックス
- `JSON.stringify()` がこのオブジェクトに対して直接呼び出された場合は、空文字列

例

```js
var obj = {
  data: "data",

  toJSON(key) {
    if (key) return `Now I am a nested object under key '${key}'`;
    else return this;
  },
};

JSON.stringify(obj);
// '{"data":"data"}'

JSON.stringify({ obj }); // Shorthand property names (ES2015).
// '{"obj":"Now I am a nested object under key 'obj'"}'

JSON.stringify([obj]);
// '["Now I am a nested object under key '0'"]'
```

### 循環参照をシリアライズした場合の JSON.stringify() に関する問題

[JSON 形式](https://www.json.org/)はオブジェクト参照に対応していないため ([IETF 草稿](http://tools.ietf.org/html/draft-pbryan-zyp-json-ref-03)はありますが)、循環参照のあるオブジェクトをエンコードしようとすると {{JSxRef("TypeError")}} が発生します。

```js example-bad
const circularReference = {};
circularReference.myself = circularReference;

// 循環参照をシリアライズすると "TypeError: cyclic object value" が発生
JSON.stringify(circularReference);
```

循環参照をシリアライズするためには、これに対応したライブラリを使用したり (Douglas Crockford による [cycle.js](https://github.com/douglascrockford/JSON-js/blob/master/cycle.js) など)、自分自身で解決策を実装したりする方法があります。循環参照を探索してシリアライズされた値に置き換える (または削除する) 必要があるでしょう。

`JSON.stringify()` をオブジェクトをディープコピーするために使っている場合は、かわりに [`structuredClone()`](/ja/docs/Web/API/structuredClone) を使いたくなるかもしれません。この関数は循環参照に対応しています。[`v8.serialize()`](https://nodejs.org/api/v8.html#v8serializevalue) などのバイナリシリアライズを行う JavaScript エンジンの API も、循環参照に対応しています。

### JSON.stringify をそのまま JavaScript として使用する際の問題

従来、JSON は [JavaScript の完全に厳密なサブセットではありません](http://timelessrepo.com/json-isnt-a-javascript-subset)でした。文字コードポイント U+2028 LINE SEPARATOR (改行) と U+2029 PARAGRAPH SEPARATOR (改段落) は JSON テキスト内の文字列リテラルやプロパティ名に使用することができます。しかし、JavsScript のテキスト内で同様の文脈では使用することができず、Unicode エスケープを使用した `\u2028` および `\u2029` しか使うことができません。これは最近変更され、どちらのコードポイントも JSON と JavaScript の両方の文字列で使用することができるようになりました。

したがって、古い JavaScript エンジンとの互換性が必要な場合は、`JSON.stringify` から返された文字列を JavaScript の文字列に代入するために、直接 `eval` や `new Function` に渡したり、[JSONP](https://ja.wikipedia.org/wiki/JSONP) URL の一部として用いたりするのは危険です。次のユーティリティを使用することができます。

```js
function jsFriendlyJSONStringify(s) {
  return JSON.stringify(s)
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}

var s = {
  a: String.fromCharCode(0x2028),
  b: String.fromCharCode(0x2029),
};
try {
  eval("(" + JSON.stringify(s) + ")");
} catch (e) {
  console.log(e); // "SyntaxError: unterminated string literal"
}

// catch する必要はない
eval("(" + jsFriendlyJSONStringify(s) + ")");

// Firefox での console.log はコンソールにログ出力をする場合
//   Unicode エスケープを解除するので、alert を使う
alert(jsFriendlyJSONStringify(s)); // {"a":"\u2028","b":"\u2029"}
```

> **メモ:** 配列以外のオブジェクトのプロパティでは、特定の順番で文字列化されることは保証されていません。文字列化された同じオブジェクトの中でプロパティの順番に依存しないようにしてください。

```js
var a = JSON.stringify({ foo: "bar", baz: "quux" });
//'{"foo":"bar","baz":"quux"}'
var b = JSON.stringify({ baz: "quux", foo: "bar" });
//'{"baz":"quux","foo":"bar"}'
console.log(a !== b); // true

// 一部の記憶関数は JSON.stringify を使用して引数をシリアライズしており、
// 上記のような同じオブジェクトに出会った時にキャッチし損ねることがあります
```

### localStorage で JSON.stringify() を使った例

ユーザーが作成したオブジェクトを格納し、ブラウザーが閉じた後に復元できるようにしたい場合は以下の例が `JSON.stringify()` を適用した模範例です。

```js
// JSON の一例を作成
var session = {
  screens: [],
  state: true,
};
session.screens.push({ name: "screenA", width: 450, height: 250 });
session.screens.push({ name: "screenB", width: 650, height: 350 });
session.screens.push({ name: "screenC", width: 750, height: 120 });
session.screens.push({ name: "screenD", width: 250, height: 60 });
session.screens.push({ name: "screenE", width: 390, height: 120 });
session.screens.push({ name: "screenF", width: 1240, height: 650 });

// JSON.stringify() で JSON 文字列に変換してから
// session の名前で localStorage に保存
localStorage.setItem("session", JSON.stringify(session));

// JSON.stringify() で生成されて localStorage に保存された文字列を
// 再び JSON オブジェクトに変換する方法の例
var restoredSession = JSON.parse(localStorage.getItem("session"));

// ここで変数 restoredSession には localStorage に保存されていた
// オブジェクトが入っている
console.log(restoredSession);
```

### Well-formed JSON.stringify()

[well-formed JSON.stringify 仕様](https://github.com/tc39/proposal-well-formed-stringify)を実装しているエンジンは、サロゲート文字、U+D800 から U+DFFF までのすべてのコードポイントを、リテラルではなく Unicode エスケープシーケンスを使用して文字列化します。この変更前は、入力にサロゲート文字が含まれている場合、`JSON.stringify` はサロゲート文字をそのまま出力していました。このような文字列は妥当な UTF-8 または UTF-16 でエンコードされていませんでした。

```js
JSON.stringify("\uD800"); // '"�"'
```

しかし、この変更で `JSON.stringify` は lone surrogates を JSON エスケープシーケンスによって表すようになり、妥当な UTF-8 または UTF-16 でエンコードすることができるようになりました。

```js
JSON.stringify("\uD800"); // '"\\ud800"'
```

この変更では、サロゲート文字の Unicode エスケープをサロゲート文字と同一のものとして扱うため、 `JSON.stringify` の結果を、JSON テキストを妥当である限りどのようなものでも受け付ける `JSON.parse` のような API に渡したときに後方互換性があります。`JSON.stringify` の結果を直接解析する場合*のみ*、`JSON.stringify` がこれらのコードポイントに対して 2 通りのエンコーディングをする可能性があることに注意して扱う必要があります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.JSON.stringify")}}

## 関連情報

- [`core-js` による現在の `JSON.stringify` の挙動 (シンボルおよび well-formed unicode) のポリフィル](https://github.com/zloirock/core-js#ecmascript-json)
- {{JSxRef("JSON.parse()")}}
- [cycle.js](https://github.com/douglascrockford/JSON-js/blob/master/cycle.js) – `JSON.decycle` と `JSON.retrocycle` の 2 つの関数を導入します。これらは循環的な構造と DAG を、拡張されたレトロ互換性のある JSON 形式にエンコードおよびデコードすることができます。
