---
title: Document.getElementsByName()
slug: Web/API/Document/getElementsByName
---

{{APIRef("DOM")}}

{{domxref("Document")}} オブジェクトの **`getElementsByName()`** メソッドは、文書内で指定した {{domxref("element.name","name")}} を持つ要素の {{domxref("NodeList")}} コレクションを返します。

## 構文

```
var elements = document.getElementsByName(name);
```

- _elements_ は、生きた {{domxref("NodeList")}} コレクション、つまり文書内で同じ `name` を持った新しい要素が追加されたり削除されたりすると自動的に更新されるものです。
- `name` は、要素の `name` 属性の値です。

## 例

```html
<!doctype html>
<html lang="en">
  <title>document.getElementsByName の使用例</title>

  <input type="hidden" name="up" />
  <input type="hidden" name="down" />

  <script>
    var up_names = document.getElementsByName("up");
    console.log(up_names[0].tagName); // "INPUT" と表示
  </script>
</html>
```

## メモ

{{domxref("element.name","name")}} 属性は、(X)HTML 文書にのみ適用可能です。

返却された {{domxref("NodeList")}} コレクションには、 {{htmlelement("meta")}} や {{htmlelement("object")}} など、それに `name` 属性にまったく対応していない要素も含め、指定された `name` を持つ*すべての*要素が含まれます。

> **警告:** **getElementsByName** メソッドは、 IE10 以前では動作が異なります。この場合、 `getElementsByName()` は指定された [`id` 属性](/ja/docs/Web/HTML/Global_attributes/id)を持つ要素も返します。 `name` および `id` で同じ文字列を使用しないように注意してください。

> **警告:** **getElementsByName** メソッドは IE では動作が異なります。この場合、 `getElementsByName()` は `name` 属性を許容しない要素 (`<span>` など) を返しません。

> **警告:** IE および Edge では、 {{domxref("NodeList")}} ではなく {{domxref("HTMLCollection")}} を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("document.getElementById()")}} : 固有の `id` を持つ要素への参照を返す
- {{domxref("document.getElementsByTagName()")}} : 同じ[タグ名](/ja/docs/Web/API/Element/tagName)の要素への参照を返す
- {{domxref("document.querySelector()")}} : `'div.myclass'` のような CSS セレクターによって要素への参照をかえす
