---
title: "Sanitizer: setDataAttributes() メソッド"
short-title: setDataAttributes()
slug: Web/API/Sanitizer/setDataAttributes
l10n:
  sourceCommit: ba886c384e385689ce8feffacf4f7ce1d8c5e736
---

{{APIRef("HTML Sanitizer API")}}

**`setDataAttributes()`** メソッドは、{{domxref("Sanitizer")}} インターフェイスのメソッドで、すべての [`data-*` 属性](/ja/docs/Web/HTML/Reference/Global_attributes/data-*)を無害化オブジェクトで許可するか、個別に指定する必要があるかを設定します。

これを `true` に設定すると、データ属性は自動的に許可されるため、{{domxref('Sanitizer.allowAttribute()')}} を使用して個別に追加してはいけません（局所属性については {{domxref('Sanitizer.allowElement()')}} も同様です）。

このメソッドは、許可したい `data-*` 属性が多数ある[許可設定](/ja/docs/Web/API/HTML_Sanitizer_API#許可設定)で役立つことに注意してください。
除去設定で使用した場合、このメソッドは `false` を返します。除去設定では、`data-*` 属性を省略するだけですべて許可できるためです。

## 構文

```js-nolint
setDataAttributes(allow);
```

### 引数

- `allow`
  - : すべての `data-*` 属性を許可する場合は `true`、明示的に指定する必要がある場合は `false` です。

### 返値

操作によって構成が変更された場合は `true` を返し、構成の [`dataAttributes`](/ja/docs/Web/API/SanitizerConfig#dataattributes) がすでに指定した値に設定されている場合、またはこの無害化オブジェクトが除去設定を持つため `dataAttributes` を `true` に設定できない場合は `false` を返します。

## 例

### 基本的な使い方

以下のコードは、`setDataAttributes()` メソッドの基本的な使い方を示します。

```js
// 無害化オブジェクトを作成（ここではデフォルト）
const sanitizer = new Sanitizer();

// すべての data-* 属性を許可
sanitizer.setDataAttributes(true);

// data-* 属性を attributes 配列に追加して許可
sanitizer.setDataAttributes(false);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
