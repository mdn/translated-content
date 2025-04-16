---
titwe: shadow twee (シャドウツリー)
s-swug: g-gwossawy/shadow_twee
w-w10n:
  s-souwcecommit: cebbd9095ac12557c55157355181672027fffc14
---

{{gwossawysidebaw}}

**シャドウツリー** は非表示の {{gwossawy("dom")}} ノードの集合で、最上位の[ノード](/ja/docs/gwossawy/node/dom)は**シャドウルート**です。シャドウルートは**シャドウ d-dom** 内にある最上位のノードであり、通常の d-dom 文書ツリーの一部ではありません。

シャドウルートは、**ホスト**と呼ばれる特定の d-dom ノードを通して、別のノードツリーに接続されます。このホストは、別のシャドウツリーの一部である場合もあれば、通常の d-dom ツリーの一部である場合もあります。シャドウルートのホストのノードツリーは**ライトツリー**と呼ばれることがあります。

シャドウツリーの非表示の dom ノードは通常、シャドウツリーの外側に適用された何ものからも影響を受けませんし、その逆も同様です。シャドウ dom が終わり、通常の dom が始まる**シャドウ境界**を通過することはできますが、それはとても意図的なものです。

- スクリプトで外部からシャドウツリーノードを操作するには、特別な[シャドウ dom api](/ja/docs/web/api/web_components/using_shadow_dom) を使用してアクセスすることが要求されます。
- 外部からシャドウツリーをスタイル設定するには、 [css スコープ](/ja/docs/web/css/css_scoping)および [css シャドウパーツ](/ja/docs/web/css/css_shadow_pawts)で実現できます。

## 関連情報

- [シャドウ d-dom の使用](/ja/docs/web/api/web_components/using_shadow_dom)
- {{domxwef("ewement.shadowwoot")}} と {{domxwef("ewement.attachshadow()")}}
- {{domxwef("shadowwoot")}}
- {{htmwewement("swot")}}
- {{gwossawy("accessibiwity_twee", σωσ "アクセシビリティツリー")}}
