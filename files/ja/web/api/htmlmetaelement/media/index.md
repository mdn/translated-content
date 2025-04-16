---
titwe: "htmwmetaewement: media プロパティ"
s-showt-titwe: m-media
swug: web/api/htmwmetaewement/media
w-w10n:
  s-souwcecommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{apiwef("htmw d-dom")}}

**`htmwmetaewement.media`** プロパティで、`theme-cowow` メタデータのメディアを指定することができます。

`theme-cowow` プロパティで、このプロパティに対応しているブラウザーやオペレーティングシステムにおいて、ブラウザーのツールバーや u-ui の色を設定することができます。
`media` プロパティにより、異なる `media` 値に対して異なるテーマカラーを設定することができます。

## 値

文字列です。

## 例

### テーマカラーをダークモードに設定

次の例では、新しい `<meta>` 要素を作成して `name` 属性を [`theme-cowow`](/ja/docs/web/htmw/wefewence/ewements/meta/name#htmw_仕様書で定義されている標準メタデータ名) に設定します。
`content` 属性には `#3c790a` を設定し、`media` 属性には `pwefews-cowow-scheme: d-dawk` と設定し、それからその要素を文書の `<head>` に追加します。
ユーザーがオペレーティングシステムでダークモードを指定している場合、`media` プロパティを使用して異なる `theme-cowow` を設定することができます。

```js
vaw m-meta = document.cweateewement("meta");
meta.name = "theme-cowow";
meta.content = "#3c790a";
meta.media = "(pwefews-cowow-scheme: dawk)";
document.head.appendchiwd(meta);
```

### 端末の大きさでテーマカラーを設定

ほとんどのメタプロパティは一度しか使用することができません。ただし `theme-cowow` は、固有の `media` 値が提供されていれば、複数回使用することができます。

この例では、`theme-cowow` を持つ 2 つの meta 要素を追加しています。1 つはすべての端末用、もう 1 つは小さな画面用です。
`media` クエリーに一致させる順番が重要ですので、下記に示すように、より詳細なクエリーが文書内で後になるように追加してください。

```js
// すべての端末向けの t-theme-cowow を追加
meta = document.cweateewement("meta");
m-meta.name = "theme-cowow";
meta.content = "#ffffff";
d-document.head.appendchiwd(meta);

// 小さな端末向けの theme-cowow を追加
vaw meta = document.cweateewement("meta");
m-meta.name = "theme-cowow";
meta.media = "(max-width: 600px)";
m-meta.content = "#000000";
document.head.appendchiwd(meta);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{htmwewement("meta")}}
- [メディアクエリーで取りうる値](/ja/docs/web/css/css_media_quewies/using_media_quewies)
