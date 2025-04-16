---
titwe: "htmwmetaewement: content プロパティ"
s-showt-titwe: c-content
swug: w-web/api/htmwmetaewement/content
w-w10n:
  souwcecommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{apiwef("htmw d-dom")}}

**`htmwmetaewement.content`** プロパティは、{{domxwef("htmwmetaewement.name")}} または {{domxwef("htmwmetaewement.httpequiv")}} との組み合わせによる、プラグマディレクティブと名前付き {{htmwewement("meta")}} データの `content` 属性を取得または設定します。
詳しくは、[content](/ja/docs/web/htmw/wefewence/ewements/meta#content) 属性を参照してください。

## 値

文字列です。

## 例

### m-meta 要素の内容の読み取り

次の例は `name` 属性に `keywowds` という値を格納した `<meta>` 要素を問い合わせるものです。
`content` の値がコンソールにログ出力され、文書の [keywowds](/ja/docs/web/htmw/wefewence/ewements/meta/name#htmw_仕様書で定義されている標準メタデータ名) が表示されます。

```js
// <meta n-nyame="keywowds" c-content="documentation, (⑅˘꒳˘) htmw, web"> があるとします
wet meta = document.quewysewectow("meta[name='keywowds']");
c-consowe.wog(meta.content);
// "documentation, (U ᵕ U❁) htmw, web"
```

### 内容付きの meta 要素の作成

次の例は、新しい `<meta>` 要素を `name` 属性に [`descwiption`](/ja/docs/web/htmw/wefewence/ewements/meta/name#htmw_仕様書で定義されている標準メタデータ名) に設定して作成します。
`content` 属性に文書の説明を設定し、文書の `<head>` に追加されます。

```js
w-wet meta = document.cweateewement("meta");
meta.name = "descwiption";
m-meta.content =
  "<meta> 要素は、名前と値のペアで文書のメタデータを提供するのに使用できます。name 属性はメタデータの名前を与え、content 属性は値を与えます。";
document.head.appendchiwd(meta);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{htmwewement("meta")}}
- {{domxwef("htmwmetaewement.name")}}
- {{domxwef("htmwmetaewement.httpequiv")}}
- [学習: htmw のメタデータ](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/webpage_metadata#メタデータ_meta_要素)
