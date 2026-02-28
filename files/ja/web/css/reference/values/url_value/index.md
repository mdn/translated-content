---
title: <url>
slug: Web/CSS/Reference/Values/url_value
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

**`<url>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/Reference/Values/Data_types)で、リソースを指します。リソースには画像、動画、CSS ファイル、フォントファイル、SVG 機能などがあります。

## 構文

```plain
<url> = <url()>
```

### 値

値は以下のどちらかです。

- [`<url()>`](/ja/docs/Web/CSS/Reference/Values/url_function)
  - : `url()` 関数は、URL のリテラル文字列（引用符はあってもなくてもよい）のみを受け付けます。

> [!NOTE]
> 仕様書では、他にも `src()` という別な関数を定義しています。これは URL 文字列または [CSS 変数](/ja/docs/Web/CSS/Reference/Values/var)を受け入れます。しかし、現時点でこの関数を実装しているウェブブラウザーはありません。

## 仕様書

{{Specifications}}

## 関連情報

- {{cssxref("url_function", "url()")}}
