---
title: "TypeError: cyclic object value"
slug: Web/JavaScript/Reference/Errors/Cyclic_object_value
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

JavaScript の例外 "cyclic object value" は、 [JSON](https://www.json.org/) の中にオブジェクトの参照が見つかったときに発生します。 {{jsxref("JSON.stringify()")}} はこれを解決しようとせず、これによって失敗します。

## エラーメッセージ

```plain
TypeError: Converting circular structure to JSON (V8-based)
TypeError: cyclic object value (Firefox)
TypeError: JSON.stringify cannot serialize cyclic structures. (Safari)
```

## エラーの種類

{{jsxref("TypeError")}}

## エラーの原因

[JSON 形式](https://www.json.org/)はオブジェクト参照に対応していません ([IETF の草案はありますが](https://datatracker.ietf.org/doc/html/draft-pbryan-zyp-json-ref-03))。したがって {{jsxref("JSON.stringify()")}} はこれを解決しようとせず、これによって失敗します。

## 例

### 循環参照

次のような循環構造体では、

```js
const circularReference = { otherData: 123 };
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
function getCircularReplacer() {
  const ancestors = [];
  return function (key, value) {
    if (typeof value !== "object" || value === null) {
      return value;
    }
    // `this` は、その値が含まれているオブジェクトです。
    // すなわち、直接の親です。
    while (ancestors.length > 0 && ancestors.at(-1) !== this) {
      ancestors.pop();
    }
    if (ancestors.includes(value)) {
      return "[Circular]";
    }
    ancestors.push(value);
    return value;
  };
}

JSON.stringify(circularReference, getCircularReplacer());
// {"otherData":123,"myself":"[Circular]"}

const o = {};
const notCircularReference = [o, o];
JSON.stringify(notCircularReference, getCircularReplacer());
// [{},{}]
```

## 関連情報

- {{jsxref("JSON.stringify()")}}
- [cycle.js](https://github.com/douglascrockford/JSON-js/blob/master/cycle.js) – GitHub 上
