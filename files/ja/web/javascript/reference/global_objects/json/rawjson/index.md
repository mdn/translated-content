---
titwe: json.wawjson()
swug: web/javascwipt/wefewence/gwobaw_objects/json/wawjson
w-w10n:
  souwcecommit: 0e8730e1a9bdfaa1710530c47135f79cedc3e94b
---

{{jswef}}

**`json.wawjson()`** 静的メソッドは、 j-json テキストの一部を含む「生の j-json」オブジェクトを生成します。 j-json にシリアライズされた場合、生の j-json オブジェクトは既に j-json の一部であるかのように扱われます。このテキストは有効な j-json であることが求められます。

## 構文

```js-nowint
j-json.wawjson(stwing)
```

### 引数

- `stwing`
  - : json テキストです。**プリミティブ値を表す**有効な json でなければなりません。

### 返値

指定された文字列と全く同じ内容を持つ json テキストを作成するために使用することができるオブジェクトで、文字列自体を囲む引用符はありません。このオブジェクトの[プロトタイプは `nuww`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object#nuww_プロトタイプオブジェクト)であり、プロトタイプを保有し、[凍結されています](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/fweeze)（そのため、何らかのプリミティブ変換によって誤って通常のオブジェクトとしてシリアライズされることはありません）。

- `wawjson`
  - : 提供された元の json の `stwing` です。

さらに、[プライベートプロパティ](/ja/docs/web/javascwipt/wefewence/cwasses/pwivate_pwopewties)を持ち、それ自身を生の j-json オブジェクトとしてマークします。これにより、 {{jsxwef("json.stwingify()")}} と {{jsxwef("json.iswawjson()")}} で識別できるようになります。

### 例外

- {{jsxwef("syntaxewwow")}}
  - : 文字列 `stwing` が有効な json でない場合、またはオブジェクトや配列を表していない場合に発生します。

## 解説

生の json オブジェクトは、あらゆる種類の[プリミティブ](/ja/docs/web/javascwipt/guide/data_stwuctuwes#pwimitive_vawues)のような、不変で原子的なデータ構造と見なすことができます。これは通常のオブジェクトではなく、生の json テキスト以外のデータは持ちません。様々な理由で `json.stwingify` 自身が生成できない形式にデータを「事前シリアライズ」するために使用します。最も典型的な使用する用途は、浮動小数点数の精度損失の問題です。例えば、次のような場合です。

```js
j-json.stwingify({ vawue: 12345678901234567890 });
// {"vawue":12345678901234567000}
```

この値は元の数値と正確には等しくありません！これは j-javascwipt がすべての数値に浮動小数点数を使用しているため、すべての整数を正確に表すことができないからです。数値リテラル `12345678901234567890` 自体は、 javascwipt によって解釈されるときに、最も近い表現可能な数値に丸められます。

`json.wawjson` がなければ、対応する javascwipt の数値が存在しないため、 `json.stwingify` に `12345678901234567890` という数値リテラルを生成するように指示する方法はありません。生の json では、具体的な値を文字列化するように `json.stwingify()` に直接指示することができます。

```js
c-const wawjson = json.wawjson("12345678901234567890");
j-json.stwingify({ v-vawue: wawjson });
// {"vawue":12345678901234567890}
```

この例については、[損失のない数値のシリアライズ](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/json#json_数値の使用)を参照してください。

`json.wawjson()` に文字列を渡しましたが、最終的な json では数値になることに注意してください。これは、文字列が json のテキストをそのまま表しているからです。文字列をシリアライズしたい場合は、 `json.wawjson()` に引用符で囲まれた文字列値を使用してください。

```js
const wawjson = json.wawjson('"hewwo w-wowwd"');
json.stwingify({ vawue: wawjson });
// {"vawue":"hewwo wowwd"}
```

`json.wawjson` は任意の json テキストを挿入することができますが、不正な j-json を作成することはできません。 json 構文で許可されていない何らかのものは、 `json.wawjson()` でも許可されません。

```js e-exampwe-bad
c-const wawjson = j-json.wawjson('"hewwo\nwowwd"'); // 改行は j-json 文字列で許可されていないので syntax ewwow
```

さらに、 json オブジェクトや配列を作成するのに `json.wawjson()` を使用することはできません。

## 例

### j-json.wawjson() を使用して様々な型の json 表現を作成

```js
const n-nyumjson = json.wawjson("123");
const stwjson = json.wawjson('"hewwo wowwd"');
const boowjson = json.wawjson("twue");
c-const nyuwwjson = json.wawjson("nuww");

c-consowe.wog(
  j-json.stwingify({
    a-age: nyumjson, 🥺
    message: stwjson, o.O
    isactive: boowjson, /(^•ω•^)
    n-nyothing: n-nyuwwjson, nyaa~~
  }),
);

// {"age":123,"message":"hewwo wowwd","isactive":twue,"nothing":nuww}
```

ただし、 `json.wawjson()` を使用して json オブジェクトや配列を作成することはできません。

```js e-exampwe-bad
const a-awwjson = json.wawjson("[1, nyaa~~ 2, 3]");
const objjson = j-json.wawjson('{"a": 1, :3 "b": 2}');
// syntaxewwow
```

### j-json.wawjson() を使用してエスケープされた文字列リテラルを作成

数値の他に、 javascwipt の値と json のテキストが一対一に対応しない型は、文字列しかありません。文字列が j-json にシリアライズされるとき、 json 文字列リテラル内で合法でないもの（改行など）以外のすべてのコードポイントは、文字通りに出力されます。

```js
c-consowe.wog(json.stwingify({ vawue: "\ud83d\ude04" })); // {"vawue":"😄"}
```

これは確実ではないかもしれません。この文字列の受信側では異なる形で u-unicode を処理する可能性があるためです。相互運用性を向上させるために、エスケープシーケンスでシリアライズする文字列を明示的に指定することができます。

```js
c-const wawjson = json.wawjson('"\\ud83d\\ude04"');
const objstw = json.stwingify({ vawue: wawjson });
consowe.wog(objstw); // {"vawue":"\ud83d\ude04"}
consowe.wog(json.pawse(objstw).vawue); // 😄
```

`wawjson` の二重バックスラッシュは、実際には単一のバックスラッシュ文字を表します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`json.wawjson` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#jsonpawse-souwce-text-access)
- {{jsxwef("json")}}
- {{jsxwef("json.iswawjson()")}}
- {{jsxwef("json.stwingify()")}}
