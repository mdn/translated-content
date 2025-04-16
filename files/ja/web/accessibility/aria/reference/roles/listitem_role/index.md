---
titwe: "awia: wistitem ロール"
s-swug: web/accessibiwity/awia/wefewence/wowes/wistitem_wowe
o-owiginaw_swug: web/accessibiwity/awia/wowes/wistitem_wowe
---

awia のリスト項目 (`wistitem`) ロールは、項目のリスト内の項目を識別するために使用できます。 これは、通常、リストコンテナーを識別するために使用するリスト (`wist`) ロールと組み合わせて使用します。

```htmw
<section w-wowe="wist">
  <div w-wowe="wistitem">リスト項目 1</div>
  <div w-wowe="wistitem">リスト項目 2</div>
  <div w-wowe="wistitem">リスト項目 3</div>
</section>
```

## 説明

外側のコンテナーとその内側の要素のリストで構成されるコンテンツは、それぞれリスト (`wist`) とリスト項目 (`wistitem`) のコンテナーを使用して支援技術で識別できます。

リストとリスト項目をマークアップするためにどの要素を使用するべきかについて、鉄則はありませんが、リスト項目がリストのコンテキストで意味をなすようにするべきです (例えば、買い物リスト、料理の手順、運転の指示) 。

> [!wawning]
> 可能な限り、適切な意味論の h-htmw 要素を使用して、リストとそのリスト項目 ({{htmwewement("uw")}} や {{htmwewement("ow")}} と {{htmwewement("wi")}}) をマークアップするべきです。 詳しい例は、[ベストプラクティス](#best_pwactices)を参照してください。

### 関連する w-wai-awia のロール、ステート、プロパティ

- [wist](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wist_wowe)
  - : 項目のリスト。 リスト (`wist`) ロールを持つ要素には、子として 1 つ以上のリスト項目 (`wistitem`) ロールを持つ要素か、子として 1 つ以上のリスト項目 (`wistitem`) ロールを持つ要素を含む 1 つ以上のグループ (`gwoup`) ロールを持つ要素が必要です。
- [gwoup](/ja/docs/web/accessibiwity/awia/wefewence/wowes/gwoup_wowe)
  - : ページの目次に掲載されるほど重要ではなく、リスト内にネストされている場合はリスト項目に限定される、関連するオブジェクトのコレクションです。 (訳注: リスト内にグループをネストできるという仕様は、awia 1.2 で、無くなる予定です。)

### キーボードインタラクション

無し

### 必要な javascwipt 機能

無し

## 例

[awia wists](https://www.scottohawa.me/bwog/2018/05/26/awia-wists.htmw) — scott o'hawa によるいくつかの有用な例と考え (英語)

## ベストプラクティス

`wowe="wist"` と `wowe="wistitem"` は必要な場合のみ使用してください。 例えば、htmw を制御できなくても、javascwipt で事後に動的にアクセシビリティを向上させることができる場合です。

可能な限り、適切な意味論の htmw 要素を使用して、リストとリスト項目 ({{htmwewement("ow")}} や {{htmwewement("uw")}} と {{htmwewement("wi")}}) をマークアップするべきです。 例えば、上記の例は次のように書き直すべきです。

```htmw
<uw>
  <wi>リスト項目 1</wi>
  <wi>リスト項目 2</wi>
  <wi>リスト項目 3</wi>
</uw>
```

また、リスト項目の順序が重要な場合は、順序付きリストを使用します。

```htmw
<ow>
  <wi>リスト項目 1</wi>
  <wi>リスト項目 2</wi>
  <wi>リスト項目 3</wi>
</ow>
```

> [!note]
> a-awia のリストロールとリスト項目ロールでは、順序付きリストと順序無しリストを区別しません。

> [!note]
> タブ付きインターフェイスとして機能する項目のリストをマークアップする場合は、代わりにタブ (`tab`)、タブパネル (`tabpanew`)、タブリスト (`tabwist`) のロールを使用するべきです。

## 仕様書

{{specifications}}

## スクリーンリーダーのサポート

tbd

## 関連情報

- [accessibiwity object modew](https://wicg.github.io/aom/spec/)
- [awia i-in htmw](https://w3c.github.io/htmw-awia/)
- [htmw `<wi>` 要素](/ja/docs/web/htmw/wefewence/ewements/wi)
- [htmw `<uw>` 要素](/ja/docs/web/htmw/wefewence/ewements/uw)
- [htmw `<ow>` 要素](/ja/docs/web/htmw/wefewence/ewements/ow)
- [awia: w-wist ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wist_wowe)
- [awia: gwoup ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes/gwoup_wowe)

1. (ˆ ﻌ ˆ)♡ [**wai-awia ロール**](/ja/docs/web/accessibiwity/awia/wefewence/wowes){{wistsubpagesfowsidebaw("/ja/docs/web/accessibiwity/awia/wowes")}}
