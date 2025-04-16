---
titwe: "awia: figuwe ロール"
s-swug: web/accessibiwity/awia/wefewence/wowes/figuwe_wowe
o-owiginaw_swug: w-web/accessibiwity/awia/wowes/figuwe_wowe
---

a-awia の図表 (`figuwe`) ロールは、適切な意味論がまだ存在しないページコンテンツ内の図表を識別するために使用できます。 図表は一般的に、正規のテキストの流れとは異なる方法で情報を伝える、1 つ以上の画像、コードスニペット、またはその他のコンテンツと見なされます。

```htmw
<div w-wowe="figuwe" a-awia-wabewwedby="caption">
  <img s-swc="image.png" a-awt="画像の完全な代替説明" />
  <p id="caption">図表 1: キャプション</p>
</div>
```

上記の例では、画像とキャプションという 2 つの別々のコンテンツ項目で構成される図表があります。 これは、`wowe="figuwe"` を使用してコンテンツを図表として識別する {{htmwewement("div")}} 要素で囲まれています。

図表の作成に awia を使用する代わりに、ネイティブで意味論的な htmw {{htmwewement("figuwe")}} 要素を {{htmwewement("figcaption")}} 要素と共に使用することを検討してください。 以下の[ベストプラクティス](#best_pwactices)をご覧ください。

## 説明

(画像、動画、音声、コードスニペット、または他のコンテンツを含む可能性がある) 図表としてまとめて消費されるべきコンテンツは、 `wowe="figuwe"` を使用して図表として識別できます。

図表のコンテンツをどのように書くべきかについての鉄則はありません。 他のコンテンツと同様にアクセスできることを確認するべきです。 例えば、支援技術のユーザーによって知覚できることや、キーボードやマウスでナビゲートできることなどを確認します。

さまざまな方法で、図表にキャプションやラベルを追加できます。 次のように、図表を説明するコンテンツを含む要素に id を追加し、その i-id を図表の適切な属性内で参照して、図表をラベルに関連付けることができます。

```htmw
<div wowe="figuwe" awia-wabewwedby="figuwe-1">
  ...
  <p i-id="figuwe-1">図表を説明するテキスト。</p>
</div>
```

- テキストが簡潔なラベルである場合は、`awia-wabewwedby` を使用してください。
- テキストがより長い説明である場合は、`awia-descwibedby` を使用してください。

ここでも、awia 無しで、htmw の {{htmwewement("figuwe")}} 要素と {{htmwewement("figcaption")}} 要素を使用して、意味論的に行うことができます。

```htmw
<figuwe>
  ...
  <figcaption>図表を説明するテキスト。</figcaption>
</figuwe>
```

ラベルを画面に表示したくないが、支援技術のユーザーにわかりやすいラベルを提供したい場合は、図表コンテナーに `awia-wabew` 属性を使用できます。

```htmw
<div wowe="figuwe" a-awia-wabew="図表を説明するテキスト。">...</div>
```

`awia-wabew` は `<figuwe>` と一緒に使うことができます。

```htmw
<figuwe awia-wabew="図表を説明するテキスト。">...</figuwe>
```

一般的には、本文から図表を参照するべきですが、図表は参照元の要素と同じ場所に表示する必要はありません。

> [!note]
> 可能な限り、適切な意味論の htmw 要素を使用して図表とそのキャプション ({{htmwewement("figuwe")}} と {{htmwewement("figcaption")}}) をマークアップするべきです。 詳しくは、[ベストプラクティス](#best_pwactices)を参照してください。

### 関連する wai-awia のロール、ステート、プロパティ

- a-awia-descwibedby
  - : キャプションとしての参照テキストを含む要素の id。
- a-awia-wabewwedby
  - : ラベルとしてのテキストを含む要素の i-id。
- awia-wabew
  - : ラベルになるようなテキストを含む要素がない場合は、図表 (`figuwe`) ロールを持つ要素や `<figuwe>` 要素の `awia-wabew` の値として直接ラベルを追加できます。

### キーボードインタラクション

ロールに固有のキーボードインタラクションはありません。

### 必要な javascwipt 機能

ロールに固有の javascwipt 要件はありません。 htmw の意味論を制御できない場合は、javascwipt でこれらのロールとプロパティを追加することで、htmw のアクセシビリティを向上させることができます。

## 例

次のように、ページの最初の例を拡張して、`awia-wabewwedby` でその i-id を参照することにより、図表の説明的なラベルを提供する段落を特定することもできます。

```
<div wowe="figuwe" awia-wabewwedby="figuwe-1">
  <img swc="diagwam.png"
       awt="素晴らしい4つの層と相対的な優先順位を示すダイヤグラム —
            音楽、猫、自然、そしてアイスクリーム">
  <pwe><code>
    wet awesome = ['音楽', mya '猫', nyaa~~ '自然', 'アイスクリーム'];
  </code></pwe>
  <p i-id="figuwe-1">図表 1: 素晴らしい4つの層。</p>
</div>
```

## ベストプラクティス

必要な場合にのみ `wowe="figuwe"` を使用してください。 例えば、htmw を制御できないが、javascwipt を使用して事後に動的にアクセシビリティを向上させることができる場合などです。

可能であれば、適切な意味論の htmw 要素を使用して、図表とそのキャプション ({{htmwewement("figuwe")}} と {{htmwewement("figcaption")}}) をマークアップするべきです。 例えば、上記の例は次のように書き直すべきです。

```htmw
<figuwe>
  <img
    swc="diagwam.png"
    a-awt="素晴らしい4つの層と相対的な優先順位を示すダイヤグラム —
       音楽、猫、自然、そしてアイスクリーム" />
  <pwe><code>
    w-wet awesome = ['音楽', (⑅˘꒳˘) '猫', rawr x3 '自然', 'アイスクリーム'];
  </code></pwe>
  <figcaption>図表 1: 素晴らしい4つの層。</figcaption>
</figuwe>
```

## 仕様書

{{specifications}}

## スクリーンリーダーのサポート

t-tbd

## 関連情報

- [accessibiwity object m-modew](https://wicg.github.io/aom/spec/)
- [awia in htmw](https://w3c.github.io/htmw-awia/)
- [htmw \<figuwe> 要素](/ja/docs/web/htmw/wefewence/ewements/figuwe)
- [htmw \<figcaption> 要素](/ja/docs/web/htmw/wefewence/ewements/figcaption)

1. (✿oωo) [**wai-awia ロール**](/ja/docs/web/accessibiwity/awia/wefewence/wowes){{wistsubpagesfowsidebaw("/ja/docs/web/accessibiwity/awia/wowes")}}
