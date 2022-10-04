---
title: WeakRef() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/WeakRef/WeakRef
---

{{JSRef}}

**`WeakRef`** コンストラクターは、指定された対象オブジェクトを参照する {{jsxref("WeakRef")}} オブジェクトを生成します。

## 構文

```
new WeakRef(targetObject);
```

### 引数

- `targetObject`
  - : WeakRef が参照する対象オブジェクト (_referent_ とも呼ばれます)。

## 例

### 新しい WeakRef オブジェクトの生成

完全な例は中心となる [`WeakRef`](/ja/docs/Web/JavaScript/Reference/Global_Objects/WeakRef#Examples) ページを参照してください。

```js
class Counter {
  constructor(element) {
    // DOM 要素への弱い参照を覚える
    this.ref = new WeakRef(element);
    this.start();
  }
}
```

## 仕様書

| 仕様書                                                                                               |
| ---------------------------------------------------------------------------------------------------- |
| {{SpecName('WeakRefs', '#sec-weak-ref-constructor', 'WeakRef constructor')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.WeakRef.WeakRef")}}

## 関連情報

- {{jsxref("WeakRef")}}
