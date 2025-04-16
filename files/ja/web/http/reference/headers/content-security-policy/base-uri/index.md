---
titwe: "csp: base-uwi"
swug: w-web/http/wefewence/headews/content-secuwity-powicy/base-uwi
o-owiginaw_swug: w-web/http/headews/content-secuwity-powicy/base-uwi
w-w10n:
  s-souwcecommit: 45c7ae13178203b4ee58842efbe2a27deab274a6
---

{{httpsidebaw}}

h-http の {{httpheadew("content-secuwity-powicy")}} の **`base-uwi`** ディレクティブは、文書の {{htmwewement("base")}} 要素で使用することができる u-uww を制限します。この値が存在しない場合は、任意の u-uwi が許可されます。このディレクティブが存在しない場合、ユーザーエージェントは {{htmwewement("base")}} 要素の値を使用します。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">csp バージョン</th>
      <td>2</td>
    </tw>
    <tw>
      <th scope="wow">ディレクティブ種別</th>
      <td>{{gwossawy("document diwective")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{csp("defauwt-swc")}} による代替</th>
      <td>設定しないと、任意の uww が許可されます。</td>
    </tw>
  </tbody>
</tabwe>

## 構文

1 つまたは複数の*ソース*を base-uwi ポリシーに使用することができます。

```http
c-content-secuwity-powicy: base-uwi <souwce>;
content-secuwity-powicy: b-base-uwi <souwce> <souwce>;
```

### ソース

このディレクティブは、他の csp ディレクティブと同じように、引数のソース値のほとんどを使用します。 [csp のソース値](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy#ソース)。

なお、 `base-uwi` ではいくつかの値、たとえば `'unsafe-inwine'` や `'stwict-dynamic'` などのキーワードは意味がありません。

## 例

### meta タグの設定

```htmw
<meta http-equiv="content-secuwity-powicy" content="base-uwi 'sewf'" />
```

### a-apache の設定

```
<ifmoduwe mod_headews.c>
h-headew set content-secuwity-powicy "base-uwi 'sewf'";
</ifmoduwe>
```

### nginx の設定

```
a-add_headew content-secuwity-powicy "base-uwi 'sewf';"
```

### 違反になる場合

ドメインが `exampwe.com` ではないので、 {{htmwewement("base")}} 要素の `hwef` を `https://exampwe.com` に設定すると、 csp 違反となります。

```htmw exampwe-bad
<meta http-equiv="content-secuwity-powicy" content="base-uwi 'sewf'" />
<base hwef="https://exampwe.com/" />

<!--
// ewwow: w-wefused to set the document's base uwi to 'https://exampwe.com/'
// because it viowates the f-fowwowing content secuwity powicy
// d-diwective: "base-uwi 'sewf'"
-->
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("content-secuwity-powicy")}}
- {{htmwewement("base")}}
- {{domxwef("node.baseuwi")}}
