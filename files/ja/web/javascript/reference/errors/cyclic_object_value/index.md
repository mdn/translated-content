---
title: "TypeError: cyclic object value"
slug: Web/JavaScript/Reference/Errors/Cyclic_object_value
---

{{jsSidebar("Errors")}}

JavaScript の例外 "cyclic object value" は、 [JSON](https://www.json.org/) の中にオブジェクトの参照が見つかったときに発生します。 {{jsxref("JSON.stringify()")}} はこれを解決しようとせず、これによって失敗します。

## メッセージ

```
TypeError: cyclic object value (Firefox)
TypeError: Converting circular structure to JSON (Chrome and Opera)
TypeError: Circular reference in value argument not supported (Edge)
```

## エラーの種類

{{jsxref("TypeError")}}

## エラーの原因

[JSON 形式](https://www.json.org/)はオブジェクト参照に対応していません ([IETF の草案はありますが](http://tools.ietf.org/html/draft-pbryan-zyp-json-ref-03))。したがって {{jsxref("JSON.stringify()")}} はこれを解決しようとせず、これによって失敗します。

## 例

### 循環参照

次のような循環構造体では、

```js
var circularReference = { otherData: 123 };
circularReference.myself = circularReference;
```

{{jsxref("JSON.stringify()")}} は失敗します。

```js example-bad
JSON.stringify(circularReference);
// TypeError: cyclic object value
```

循環参照をシリアライズするには、それに対応したライブラリ (例えば [cycle.js](https://github.com/douglascrockford/JSON-js/blob/master/cycle.js)) を使用したり、自分自身で循環参照を探してシリアライズ可能な値に置き換える (または削除する) ことを求める解決策を実装することもできます。

次のスニペットは、 {{jsxref("JSON.stringify()")}} の `replacer` 引数を使用して循環参照を検索してフィルタリングする方法を示しています (これによりデータ損失が発生します)。

```js
const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};

JSON.stringify(circularReference, getCircularReplacer());
// {"otherData":123}
```

## 関連情報

- {{jsxref("JSON.stringify")}}
- [cycle.js](https://github.com/douglascrockford/JSON-js/blob/master/cycle.js) – `JSON.decycle` と `JSON.retrocycle` という 2 つの関数を導入し、循環構造と dag を JSON でエンコードしてからリカバリーできます。
