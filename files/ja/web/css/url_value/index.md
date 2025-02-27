---
title: <url>
slug: Web/CSS/url_value
l10n:
  sourceCommit: 5178e1e7c9edf0c9c652275ae62f090042ce2422
---

{{CSSRef}}

**`<url>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/CSS_Types)で、リソースを指します。リソースには画像、動画、CSS ファイル、フォントファイル、SVG 機能などがあります。

## 構文

```plain
<url> = <url()> | <src()>
```

### 値

値は以下のどちらかです。

- [`<url()>`](/ja/docs/Web/CSS/url_function)
  - : `url()` 関数は、URL のリテラル文字列のみを受け付けます。
- `<src()>`
  - : この関数は、URL 文字列または [CSS 変数](/ja/docs/Web/CSS/var)を受け取ることができます。

## 仕様書

{{Specifications}}

## 関連情報

- {{cssxref("url_function", "url()")}}
