---
title: "HTMLMetaElement: media プロパティ"
short-title: media
slug: Web/API/HTMLMetaElement/media
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

**`HTMLMetaElement.media`** プロパティで、`theme-color` メタデータのメディアを指定することができます。

`theme-color` プロパティで、このプロパティに対応しているブラウザーやオペレーティングシステムにおいて、ブラウザーのツールバーや UI の色を設定することができます。
`media` プロパティにより、異なる `media` 値に対して異なるテーマカラーを設定することができます。

## 値

文字列です。

## 例

### テーマカラーをダークモードに設定

次の例では、新しい `<meta>` 要素を作成して `name` 属性を [`theme-color`](/ja/docs/Web/HTML/Element/meta/name#html_仕様書で定義されている標準メタデータ名) に設定します。
`content` 属性には `#3c790a` を設定し、`media` 属性には `prefers-color-scheme: dark` と設定し、それからその要素を文書の `<head>` に追加します。
ユーザーがオペレーティングシステムでダークモードを指定している場合、`media` プロパティを使用して異なる `theme-color` を設定することができます。

```js
var meta = document.createElement("meta");
meta.name = "theme-color";
meta.content = "#3c790a";
meta.media = "(prefers-color-scheme: dark)";
document.head.appendChild(meta);
```

### 端末の大きさでテーマカラーを設定

ほとんどのメタプロパティは一度しか使用することができません。ただし `theme-color` は、固有の `media` 値が提供されていれば、複数回使用することができます。

この例では、`theme-color` を持つ 2 つの meta 要素を追加しています。1 つはすべての端末用、もう 1 つは小さな画面用です。
`media` クエリーに一致させる順番が重要ですので、下記に示すように、より詳細なクエリーが文書内で後になるように追加してください。

```js
// すべての端末向けの theme-color を追加
meta = document.createElement("meta");
meta.name = "theme-color";
meta.content = "#ffffff";
document.head.appendChild(meta);

// 小さな端末向けの theme-color を追加
var meta = document.createElement("meta");
meta.name = "theme-color";
meta.media = "(max-width: 600px)";
meta.content = "#000000";
document.head.appendChild(meta);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("meta")}}
- [メディアクエリーで取りうる値](/ja/docs/Web/CSS/CSS_media_queries/Using_media_queries)
