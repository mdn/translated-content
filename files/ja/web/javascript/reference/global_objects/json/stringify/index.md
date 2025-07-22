---
title: JSON.stringify()
slug: Web/JavaScript/Reference/Global_Objects/JSON/stringify
l10n:
  sourceCommit: e7fab5265b54dc9faeff7e8cf4972cc171ec856b
---

{{JSRef}}

**`JSON.stringify()`** メソッドは、ある JavaScript のオブジェクトや値を JSON 文字列に変換します。置き換え関数を指定して値を置き換えたり、置き換え配列を指定して指定されたプロパティのみを含むようにしたりすることもできます。

{{InteractiveExample("JavaScript デモ: JSON.stringify()", "taller")}}

```js interactive-example
console.log(JSON.stringify({ x: 5, y: 6 }));
// Expected output: '{"x":5,"y":6}'

console.log(
  JSON.stringify([new Number(3), new String("false"), new Boolean(false)]),
);
// Expected output: '[3,"false",false]'

console.log(JSON.stringify({ x: [10, undefined, function () {}, Symbol("")] }));
// Expected output: '{"x":[10,null,null,null]}'

console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)));
// Expected output: '"2006-01-02T15:04:05.000Z"'
```

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
  - : 文字列化の手順の挙動を変更する関数、または `value` のプロパティのうち出力に含めるものを指定する文字列と数値の配列です。この値が配列である場合は、文字列でも数値でもない要素（{{jsxref("Symbol")}} など）は完全に無視されます。文字列や数値としては、プリミティブでもラッパーオブジェクトでも使用可能です。この値が関数でも配列でもない場合（[`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) の場合や、指定しない場合など）は、結果の JSON 文字列にオブジェクトの文字列をキーとするすべてのプロパティが含まれます。
- `space` {{optional_inline}}
  - : 文字列または数値で、出力する JSON 文字列に可読性を目的に空白 (インデントや改行など) を挿入するために使用します。

    これが数値のときは、インデントとして使う空白文字の数を示します。この数の上限は 10 です（それより大きい数値は、単に `10` となります）。 1 より小さい値は空白を使わないことを示します。

    これが文字列のときは、その文字列（10 文字より長い場合はその最初の 10 文字）がネストされたそれぞれのオブジェクトや配列の前に挿入されます。

    これが文字列でも数値でもない場合（文字列や数値としては、プリミティブでもラッパーオブジェクトでも使用可能）、たとえば [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) や指定しない場合は、空白は使用されません。

### 返値

与えられた値を表現する JSON 文字列。

### 例外

- {{jsxref("TypeError")}}
  - : 以下のいずれかの場合に発生します。
    - `value` が循環参照を含む場合。
    - {{jsxref("BigInt", "長整数")}}値に遭遇した場合

## 解説

`JSON.stringify()` は値をそれを表す JSON 表記に変換します。値は以下のように変換されます。

- {{jsxref("Boolean")}}、 {{jsxref("Number")}}、 {{jsxref("String")}}、および ([`Object()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/Object) により得られる) {{jsxref("BigInt")}} の各オブジェクトは、文字列化の際に慣習的な変換セマンティクスに従い、対応するプリミティブ値に変換されます。([`Object()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/Object) により得られる) {{jsxref("Symbol")}} のオブジェクトは、プレーンオブジェクトとして扱われます。
- {{jsxref("BigInt")}} の値を文字列化しようとすると、例外が発生します。しかし、`BigInt` が (モンキーパッチ `BigInt.prototype.toJSON = ...` により) `toJSON()` メソッドを持っている場合、このメソッドにより文字列化できます。この制約により、適切な文字列化の方法（そして、ほとんどの場合、対応する逆変換の方法）が常にユーザーによって明示されるようにします。
- {{jsxref("undefined")}}、関数 ({{jsxref("Function")}})、シンボル ({{jsxref("Symbol")}}) は有効な JSON 値ではありません。変換中にそのような値に遭遇した場合は、(オブジェクトの中で発見された場合は) 省略されたり、（配列の中で見つかった場合は） [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) に変換されたりします。 `JSON.stringify()` は `JSON.stringify(() => {})` や `JSON.stringify(undefined)` のように「純粋」な値を渡した場合に `undefined` を返すことがあります。
- {{jsxref("Infinity")}} および {{jsxref("NaN")}} の数値は、 [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) の値と同様に、すべて `null` と見なされます。(ただし、前述の値と違って、省略されることはありません)
- 配列は配列として（角括弧で囲まれ）文字列化されます。 0 から `length - 1` までの添字 (両端を含みます) が文字列化され、他のプロパティは無視されます。
- {{jsxref("JSON.rawJSON()")}} で作成した特殊な生の JSON オブジェクトは、（その `rawJSON` プロパティにアクセスすることで）それを含む生の JSON テキストとしてシリアライズされます。
- その他のオブジェクトについては、以下の通りです。
  - シンボル ({{jsxref("Symbol")}}) がキーとなっているプロパティはすべて、引数 [`replacer`](#replacer_引数) を使用する場合でも完全に無視されます。

  - 値が [`toJSON()`](#tojson_%E3%81%AE%E6%8C%99%E5%8B%95) メソッドを持っている場合は、それがデータをどう文字列化するかを決定します。オブジェクトを文字列化するかわりに、`toJSON()` メソッドが返す値が文字列化されます。`JSON.stringify()` は `toJSON` を 1 個の引数 `key` を指定して呼び出します。この引数は、[`replacer`](#replacer_引数) 関数と同じ以下の仕様です。
    - オブジェクトがプロパティの値の場合は、プロパティ名
    - 配列の要素の場合は、配列の添字を表す文字列
    - `JSON.stringify()` がこのオブジェクトについて直接呼ばれた場合は、空文字列

    {{jsxref("Date")}} のインスタンスは文字列を返す `toJSON()` を実装しています ([`date.toISOString()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString) と同じです)。そのため、これは文字列に変換されます。

  - [列挙可能なプロパティ](/ja/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)のみが文字列化されます。そのため、{{jsxref("Map")}}、{{jsxref("Set")}}、{{jsxref("WeakMap")}}、{{jsxref("WeakSet")}} などは `"{}"` に変換されます。引数 [`replacer`](#replacer_引数) を用いることで、これらをより実用的なものに変換できます。

  プロパティは、[`Object.keys()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) と同じアルゴリズムで走査されます。このアルゴリズムは、完全に定義された順番を用い、実装間で一貫性があります。例えば、`JSON.stringify()` を同じオブジェクトに対して用いると、常に同じ文字列を生成します。また、`JSON.parse(JSON.stringify(obj))` は (オブジェクトが完全に JSON に変換可能であると仮定すると) もとのオブジェクトと同じキーの順番を持つオブジェクトを生成します。

### replacer 引数

`replacer` 引数は関数または配列です。

配列の場合、その要素は結果の JSON 文字列に含めるオブジェクトのプロパティの名前を表します。文字列と数値である値のみが処理に用いられ、シンボルのキーは無視されます。

関数の場合、 `key` と文字列化される `value` の 2 つの引数を取ります。キーをもつオブジェクトが `replacer` のコンテキストで `this` として提供されます。

`replacer` 関数は、まず文字列化されるオブジェクトについて呼び出され、このときの `key` は空文字列 (`""`) です。その後、文字列化されるオブジェクトや配列のそれぞれのプロパティについて呼び出されます。配列の添字は、文字列として `key` に入ります。処理中のプロパティの値は、文字列化において `replacer` の返値に置き換えられます。すなわち:

- 数値、文字列、論理値、`null` を返すと、その値を直接文字列化したものがプロパティの値として使用されます。（長整数を返すと、例外が発生します。）
- 関数 ({{jsxref("Function")}})、シンボル ({{jsxref("Symbol")}})、{{jsxref("undefined")}} を返すと、出力にはそのプロパティが含まれなくなります。
- それ以外のオブジェクトを返した場合、そのオブジェクトのそれぞれのプロパティに `replacer` 関数を呼び出して再帰的に文字列化します。

> [!NOTE]
> `replacer` 関数を用いて生成した JSON を解釈する際は、逆変換のために引数 [`reviver`](/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#reviver_%E5%BC%95%E6%95%B0%E3%81%AE%E4%BD%BF%E7%94%A8) を用いたくなる可能性が高いでしょう。

通常、配列の要素の添字はずれません（要素が関数などの無効な値である場合も、省略されるのではなく `null` になります）。`replacer` 関数を用いると、別の配列を返すことで、配列の要素の順番を制御できます。

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

JSON.stringify(new Date(1906, 0, 2, 15, 4, 5));
// '"1906-01-02T15:04:05.000Z"'

JSON.stringify({ x: 5, y: 6 });
// '{"x":5,"y":6}'
JSON.stringify([new Number(3), new String("false"), new Boolean(false)]);
// '[3,"false",false]'

// 文字列がキーとなった配列要素は列挙可能ではなく、JSON では意味をなさない
const a = ["foo", "bar"];
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

### リプレイサーとして関数を用いる例

```js
function replacer(key, value) {
  // プロパティをフィルターする
  if (typeof value === "string") {
    return undefined;
  }
  return value;
}

const foo = {
  foundation: "Mozilla",
  model: "box",
  week: 45,
  transport: "car",
  month: 7,
};
JSON.stringify(foo, replacer);
// '{"week":45,"month":7}'
```

`replacer` で最初のオブジェクトと空文字列をキーとするプロパティを区別したい場合は、(両方の場合において `key` は空文字列となり、`value` はオブジェクトを取りうるので) 繰り返しの回数の記録が必要になるでしょう（最初の繰り返しより後の場合、本当に空文字列のキーです）。

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

### リプレイサーとして配列を使用

```js
const foo = {
  foundation: "Mozilla",
  model: "box",
  week: 45,
  transport: "car",
  month: 7,
};

JSON.stringify(foo, ["week", "month"]);
// '{"week":45,"month":7}', "week" と "month" プロパティだけが保持される
```

### 引数 space の使用

出力を空白 1 つでインデントします。

```js
console.log(JSON.stringify({ a: 2 }, null, " "));
/*
{
 "a": 2
}
*/
```

タブ文字を使うと、標準的な表示の整形と同様になります。

<!-- markdownlint-disable MD010 -->

```js
console.log(JSON.stringify({ uno: 1, dos: 2 }, null, "\t"));
/*
{
	"uno": 1,
	"dos": 2
}
*/
```

<!-- markdownlint-enable MD010 -->

### toJSON() の挙動

オブジェクトに `toJSON()` を定義することで、シリアライズの挙動をオーバーライドできます。

```js
const obj = {
  data: "data",

  toJSON(key) {
    return key ? `Now I am a nested object under key '${key}'` : this;
  },
};

JSON.stringify(obj);
// '{"data":"data"}'

JSON.stringify({ obj });
// '{"obj":"Now I am a nested object under key 'obj'"}'

JSON.stringify([obj]);
// '["Now I am a nested object under key '0'"]'
```

### 循環参照をシリアライズした場合の JSON.stringify() に関する問題

[JSON 形式](https://www.json.org/)はオブジェクト参照に対応していないため（[IETF 草稿](https://tools.ietf.org/html/draft-pbryan-zyp-json-ref-03)はありますが）、循環参照のあるオブジェクトをエンコードしようとすると {{jsxref("TypeError")}} が発生します。

```js example-bad
const circularReference = {};
circularReference.myself = circularReference;

// 循環参照をシリアライズすると "TypeError: cyclic object value" が発生
JSON.stringify(circularReference);
```

循環参照をシリアライズするためには、これに対応したライブラリを使用したり (Douglas Crockford による [cycle.js](https://github.com/douglascrockford/JSON-js/blob/master/cycle.js) など)、自分自身で解決策を実装したりする方法があります。循環参照を探索してシリアライズされた値に置き換える (または削除する) 必要があるでしょう。

`JSON.stringify()` をオブジェクトをディープコピーするために使っている場合は、かわりに [`structuredClone()`](/ja/docs/Web/API/Window/structuredClone) を使いたくなるかもしれません。この関数は循環参照に対応しています。[`v8.serialize()`](https://nodejs.org/api/v8.html#v8serializevalue) などのバイナリシリアライズを行う JavaScript エンジンの API も、循環参照に対応しています。

### localStorage で JSON.stringify() を使った例

ユーザーが作成したオブジェクトを格納し、ブラウザーが閉じた後に復元できるようにしたい場合は以下の例が `JSON.stringify()` を適用した模範例です。

```js
// JSON の一例を作成
const session = {
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
const restoredSession = JSON.parse(localStorage.getItem("session"));

// ここで変数 restoredSession には localStorage に保存されていた
// オブジェクトが入っている
console.log(restoredSession);
```

### Well-formed JSON.stringify()

[well-formed JSON.stringify 仕様](https://github.com/tc39/proposal-well-formed-stringify)を実装しているエンジンは、サロゲート文字、U+D800 から U+DFFF までのすべてのコードポイントを、リテラルではなく Unicode エスケープシーケンスを使用して文字列化します。この変更前は、このような文字列は妥当な UTF-8 または UTF-16 でエンコードされていませんでした。

```js
JSON.stringify("\uD800"); // '"�"'
```

しかし、この変更で `JSON.stringify()` は孤立サロゲートを JSON エスケープシーケンスによって表すようになり、妥当な UTF-8 または UTF-16 でエンコードすることができるようになりました。

```js
JSON.stringify("\uD800"); // '"\\ud800"'
```

この変更では、サロゲート文字の Unicode エスケープをサロゲート文字と同一のものとして扱うため、 `JSON.stringify()` の結果を、JSON テキストを妥当である限りどのようなものでも受け付ける `JSON.parse()` のような API に渡したときに後方互換性があります。`JSON.stringify()` の結果を直接解析する場合*のみ*、`JSON.stringify()` がこれらのコードポイントに対して 2 通りのエンコーディングをする可能性があることに注意して扱う必要があります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [現在の `JSON.stringify` の挙動 (シンボルおよび well-formed unicode) のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-json)
- {{jsxref("JSON.parse()")}}
- {{jsxref("JSON.rawJSON()")}}
