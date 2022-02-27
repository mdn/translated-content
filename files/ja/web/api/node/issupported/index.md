---
title: Node.isSupported()
slug: Web/API/Node/isSupported
tags:
  - メソッド
  - 非推奨
  - リファレンス
browser-compat: api.Node.isSupported
translation_of: Web/API/Node/isSupported
---
{{APIRef("DOM")}}{{deprecated_header}}

**`isSupported()`** は {{domxref("Node")}} インターフェイスのメソッドで、この DOM の実装が指定された機能を実装しており、このノードがこの機能に対応しているかどうかを検査した結果を論理値で返します。

## 構文

```js
isSupported(feature, version);
```

### 引数

- `feature`
  - : 文字列で、検査する機能の名前を指定します。
    これは [DOMImplementation](/ja/docs/Web/API/Document/implementation) の `hasFeature` メソッドに渡すものと同じ名前です。有効な値については、 [Conformance の章](https://www.w3.org/TR/DOM-Level-2-Core/introduction.html#ID-Conformance)にあります。
- `version`
  - : 文字列で、検査する機能のバージョン番号を指定します。
    DOM Level 2 第 1 版では、これは `2.0` という文字列です。このバージョンが指定されなかった場合、何れかの版のメソッドが対応していれば、このメソッドは true を返します。

## 例

```html
<div id="doc">
</div>

<script>
 // 要素を取得して DOM2 HTML Module に対応しているかどうかを検査します。
 const main = document.getElementById('doc');
 const output = main.isSupported('HTML', '2.0');
</script>
```

## 仕様書

この機能は仕様書に含まれていません。標準化路線から外れました。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Node.isEqualNode()")}}
