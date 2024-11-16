---
title: "Document: getElementsByName() メソッド"
short-title: getElementsByName()
slug: Web/API/Document/getElementsByName
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("DOM")}}

**`getElementsByName()`** は {{domxref("Document")}} オブジェクトのメソッドで、文書内で指定した `name` を持つ要素の {{domxref("NodeList")}} コレクションを返します。

## 構文

```js-nolint
getElementsByName(name)
```

### 引数

- `name`
  - : 探している要素の `name` 属性の値です。

### 返値

生きた {{domxref("NodeList")}} コレクション、つまり文書内で同じ `name` を持った新しい要素が追加されたり削除されたりすると自動的に更新されるものです。

## 例

```html
<!doctype html>
<html lang="ja">
  <head>
    <title>document.getElementsByName の使用例</title>
  </head>
  <body>
    <input type="hidden" name="up" />
    <input type="hidden" name="down" />
  </body>
</html>
```

```js
const up_names = document.getElementsByName("up");
console.log(up_names[0].tagName); // "INPUT" と表示
```

## メモ

`name` 属性は、(X)HTML 文書にのみ適用可能です。

返却された {{domxref("NodeList")}} コレクションには、 {{htmlelement("meta")}} や {{htmlelement("object")}} など、それに `name` 属性にまったく対応していない要素も含め、指定された `name` を持つ*すべての*要素が含まれます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("document.getElementById()")}} : 固有の `id` を持つ要素への参照を返す
- {{domxref("document.getElementsByTagName()")}} : 同じ[タグ名](/ja/docs/Web/API/Element/tagName)の要素への参照を返す
- {{domxref("document.querySelector()")}}: `'div.myclass'` のような CSS セレクターによって要素への参照を返す
