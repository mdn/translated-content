---
title: "Element: setAttributeNS() メソッド"
short-title: setAttributeNS()
slug: Web/API/Element/setAttributeNS
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("DOM") }}

`setAttributeNS` は、指定された名前空間と名前で、新しい属性を追加したり、属性の値を変更したりします。

## 構文

```js-nolint
setAttributeNS(namespace, name, value)
```

### 引数

- `namespace` は属性の名前空間を指定する文字列です。
- `name` は修飾名で属性を識別する文字列です。すなわち、名前空間接頭辞に続いてコロン、続いてローカル名です。
- `value` は新しい属性の希望する文字列値です。

### 返値

なし ({{jsxref("undefined")}})。

### 例

```js
let d = document.getElementById("d1");
d.setAttributeNS(
  "http://www.mozilla.org/ns/specialspace",
  "spec:align",
  "center",
);
```

## メモ

{{ DOMAttributeMethods() }}

`setAttributeNS` は名前空間属性のための唯一のメソッドで、完全修飾名、つまり `"namespace:localname"` を期待します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
