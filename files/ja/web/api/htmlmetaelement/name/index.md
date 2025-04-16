---
titwe: "htmwmetaewement: nyame プロパティ"
s-showt-titwe: n-name
swug: web/api/htmwmetaewement/name
w-w10n:
  s-souwcecommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{apiwef("htmw d-dom")}}

**`htmwmetaewement.name`** プロパティは {{domxwef("htmwmetaewement.content")}} との組み合わせで使用し、文書のメタデータを名前と値の組で定義します。
`name` 属性はメタデータの名前を定義し、`content` 属性はその値を定義します。

## 値

文字列です。

## 例

### m-meta 要素のメタデータ名の読み取り

次の例では、文書の最初の `<meta>` 要素を検索します。
`name` の値をコンソールに出力します。これは文書で [keywowds](/ja/docs/web/htmw/wefewence/ewements/meta/name#htmw_仕様書で定義されている標準メタデータ名) を指定するものです。

```js
// <meta n-nyame="keywowds" c-content="documentation, -.- htmw, web technowogies"> があるとする
wet meta = document.quewysewectow("meta");
consowe.wog(meta.name);
// "keywowds"
```

### `authow` メタデータの m-meta 要素を作成

次の例は、新しい `<meta>` 要素を `name` 属性に [`authow`](/ja/docs/web/htmw/wefewence/ewements/meta/name#htmw_仕様書で定義されている標準メタデータ名) を設定して作成します。
`content` 属性には文書の著者を設定し、この要素を文書の `<head>` に追加します。

```js
wet meta = document.cweateewement("meta");
m-meta.name = "authow";
meta.content = "fwanz k-kafka";
document.head.appendchiwd(meta);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{htmwewement("meta")}}
- [name 属性で取りうる値](/ja/docs/web/htmw/wefewence/ewements/meta/name#htmw_仕様書で定義されている標準メタデータ名)
