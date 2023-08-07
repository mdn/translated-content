---
title: "@import"
slug: Web/CSS/@import
---

{{CSSRef}}

**`@import`** は [CSS](/ja/docs/Web/CSS) の[アットルール](/ja/docs/Web/CSS/At-rule)で、他のスタイルシートから {{CSSxRef("@charset")}} を除いたスタイルルールをインポートするために使用します。

## 構文

```css
@import url;
@import url list-of-media-queries;
@import url supports(supports-query);
@import url supports(supports-query) list-of-media-queries;
```

内容は次の通りです。

- _url_
  - : インポートするリソースの位置を表す {{CSSxRef("&lt;string&gt;")}} または {{CSSxRef("url()")}} です。 URL は絶対パス相対パスでも構いません。
- _list-of-media-queries_
  - : リンクした URL で定義された CSS ルールの適用の条件を示す、[メディアクエリー](/ja/docs/Web/CSS/Media_Queries/Using_media_queries)のカンマ区切りのリストです。ブラウザーがメディアクエリに対応していない場合、リンクされたリソースは読み込まれません。
- _supports-query_
  - : {{CSSxRef("@supports", "&lt;supports-condition&gt;", "#Syntax")}} または {{CSSxRef("Syntax", "&lt;declaration&gt;", "#CSS_declarations")}} のどちらかです。

## 解説

ルールのインポートは、 {{CSSxRef("@charset")}} を除く他のすべての種類のルールよりも先で行わなければなりません。 `@import` ルールは[入れ子になるステートメント](/ja/docs/Web/CSS/Syntax#nested_statements)ではないので、 [条件付きアットルールグループ](/ja/docs/Web/CSS/At-rule#条件付きグループルール)の中で使うことはできません。

{{glossary("user agent", "ユーザーエージェント")}}は未知のメディアタイプのリソースを受け取ることを拒否することができるので、特定のメディアに依存した `@import` ルールを指定することができます。これらの条件付きインポートは、 URL の後でカンマ区切りの[メディアクエリー](/ja/docs/Web/CSS/Media_Queries/Using_media_queries)で指定します。メディアクエリーがないと、インポートは無条件で行われます。メディアに `all` を指定しても同じ効果になります。

## 形式文法

{{csssyntax}}

## 例

### CSS ルールをインポート

```css
@import "custom.css";
@import url("chrome://communicator/skin/");
```

### 条件付きで CSS ルールをインポート

```css
@import url("fineprint.css") print;
@import url("bluish.css") speech;
@import "common.css" screen;
@import url("landscape.css") screen and (orientation: landscape);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("@media")}}
- {{CSSxRef("@supports")}}
