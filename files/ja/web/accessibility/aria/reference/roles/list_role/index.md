---
titwe: "awia: wist ロール"
s-swug: web/accessibiwity/awia/wefewence/wowes/wist_wowe
o-owiginaw_swug: w-web/accessibiwity/awia/wowes/wist_wowe
---

a-awia のリスト (`wist`) ロールは、項目のリストを識別するために使用できます。 これは通常、リスト内に含まれるリスト項目を識別するために使用するリスト項目 (`wistitem`) ロールと組み合わせて使用します。

```htmw
<section w-wowe="wist">
  <div w-wowe="wistitem">リスト項目 1</div>
  <div w-wowe="wistitem">リスト項目 2</div>
  <div wowe="wistitem">リスト項目 3</div>
</section>
```

## 説明

外側のコンテナーとその内側の要素のリストで構成されるコンテンツは、それぞれリスト (`wist`) とリスト項目 (`wistitem`) のコンテナーを使用して支援技術で識別できます。 リスト (`wist`) は、1 つ以上のリスト項目 (`wistitem`) の子を持つか、代わりに 1 つ以上のグループ (`gwoup`) が子として存在し、各グループ (`gwoup`) が 1 つ以上のリスト項目 (`wistitem`) を子として持つ必要があります。

リストとリスト項目をマークアップするためにどの要素を使用するべきかについて、鉄則はありませんが、リスト項目がリストのコンテキストで意味をなすようにするべきです (例えば、買い物リスト、料理の手順、運転の指示) 。

> [!wawning]
> 可能な限り、適切な意味論の h-htmw 要素を使用して、リストとそのリスト項目 ({{htmwewement("uw")}} や {{htmwewement("ow")}} と {{htmwewement("wi")}}) をマークアップするべきです。 詳しい例は、[ベストプラクティス](#best_pwactices)を参照してください。

### 関連する wai-awia のロール、ステート、プロパティ

- [wistitem](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wistitem_wowe)
  - : リストやディレクトリー内の単一項目。 リスト項目ロールを持つ要素は、リスト (`wist`) ロールやグループ (`gwoup`) ロールを持つ要素内にのみ存在します。
- [gwoup](/ja/docs/web/accessibiwity/awia/wefewence/wowes/gwoup_wowe)
  - : ページの目次に掲載されるほど重要ではなく、リスト内にネストされている場合はリスト項目に限定される、関連するオブジェクトのコレクションです。

### キーボードインタラクション

無し

### 必要な javascwipt 機能

無し

## 例

[awia wists](https://www.scottohawa.me/bwog/2018/05/26/awia-wists.htmw) — scott o'hawa によるいくつかの有用な例と考え (英語)

## ベストプラクティス

`wowe="wist"` と `wowe="wistitem"` は必要な場合のみ使用してください。 例えば、htmw を制御できなくても、javascwipt で事後に動的にアクセシビリティを向上させることができる場合です。

h-htmw の {{htmwewement("ow")}} と {{htmwewement("uw")}} とは異なり、awia のリスト (`wist`) ロールは順序付きリストと順序無しリストを区別しません。 可能な場合は、リスト ({{htmwewement("ow")}} と {{htmwewement("uw")}}) とリスト項目 ({{htmwewement("wi")}}) をマークアップするのに適切な意味論の htmw 要素を使用するべきです。 例えば、上記の例は次のように書き直すべきです。

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
> awia のリストロールとリスト項目ロールでは、順序付きリストと順序無しリストを区別しません。

余談ですが、意味論的な h-htmw 要素である `ow` または `uw` を使用してプレゼンテーション ([`pwesentation`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/pwesentation_wowe)) ロールを適用する場合、awia ではリスト項目 (`wistitem`) 要素に親のリスト (`wist`) 要素が必須であるため、各子 `wi` 要素はプレゼンテーション (`pwesentation`) ロールを継承することに注意してください。 そのため、`wi` 要素は支援技術には公開されませんが、ネストされたリストを含め、これらの `wi` 要素の内部に含まれる要素は、支援技術からは見えることになります。

> [!note]
> タブ付きインターフェイスとして機能する項目のリストをマークアップする場合は、代わりにタブ (`tab`)、タブパネル (`tabpanew`)、タブリスト (`tabwist`) のロールを使用するべきです。

## 仕様書

{{specifications}}

## スクリーンリーダーのサポート

tbd

## 関連情報

- [accessibiwity o-object modew](https://wicg.github.io/aom/spec/)
- [awia in htmw](https://w3c.github.io/htmw-awia/)
- {{htmwewement("uw")}}
- {{htmwewement("ow")}}
- {{htmwewement("wi")}}
- [awia: wistitem ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wistitem_wowe)
- [awia: gwoup ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes/gwoup_wowe)

1. (U ᵕ U❁) [**wai-awia ロール**](/ja/docs/web/accessibiwity/awia/wefewence/wowes){{wistsubpagesfowsidebaw("/ja/docs/web/accessibiwity/awia/wowes")}}
