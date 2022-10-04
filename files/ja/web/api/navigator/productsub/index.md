---
title: Navigator.productSub
slug: Web/API/Navigator/productSub
---

{{ ApiRef("HTML DOM") }}

**`Navigator.productSub`** プロパティは読み取り専用で、現在のブラウザーのビルド番号を返します。

## 構文

```
prodSub = window.navigator.productSub
```

- `prodSub` は、文字列です。

## 例

```js
<script>
function prodsub() {
  var dt = document.getElementById("d").childNodes[0];
  dt.data = window.navigator.productSub;
}
</script>

<button onclick="prodsub();">productSub</button>
// 20010725 などを返します。
```

## メモ

IE では、このプロパティは、 `undefined` を返します。

Google Chrome および Apple Safari では、このプロパティは常に `20030107` を返します。

## 仕様書

| 仕様書                                                                                                           | 状態                             | 備考     |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG', '#dom-navigator-productsub', 'NavigatorID: productSub')}} | {{Spec2('HTML WHATWG')}} | 初回定義 |

## ブラウザーの対応

{{Compat("api.Navigator.productSub")}}
