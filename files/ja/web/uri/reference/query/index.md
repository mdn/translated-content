---
title: URI クエリー
short-title: クエリー
slug: Web/URI/Reference/Query
l10n:
  sourceCommit: 466ca1db767535c1aa9984b4e6c0db41b3a53475
---

URI の**クエリー**は、[パス](/ja/docs/Web/URI/Reference/Path)の後に続く部分です。
これは、 URI の[スキーム](/ja/docs/Web/URI/Reference/Schemes)および命名オーソリティの範囲内でリソースを識別するための非階層的なデータと、パス要素内のデータを含みます。

## 構文

```url
?query
```

- `fragment`
  - : [フラグメント](/ja/docs/Web/URI/Reference/Fragment)を開始する `#` 文字を除く、任意の文字のシーケンス。
    クエリーの正確な書式は、リソース自体によって定義されます。

## 解説

次の URL を考えてみましょう。

```url
http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument
```

`?key1=value1&key2=value2` は、ウェブサーバーが処理する引数を含むクエリー部分です。
この例でいう引数とは、 `&` 記号で区切られたキーと値のペアのリストです。
ウェブサーバーは、この引数を使用して、絞り込み、検索、結果のソートなど、実装に応じてレスポンスを変化させることができます。

## 仕様書

{{Specifications}}

## 関連情報

- [URI](/ja/docs/Web/URI)
