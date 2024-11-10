---
title: Shadow tree (シャドウツリー)
slug: Glossary/Shadow_tree
l10n:
  sourceCommit: cebbd9095ac12557c55157355181672027fffc14
---

{{GlossarySidebar}}

**シャドウツリー** は非表示の {{Glossary("DOM")}} ノードの集合で、最上位の[ノード](/ja/docs/Glossary/Node/DOM)は**シャドウルート**です。シャドウルートは**シャドウ DOM** 内にある最上位のノードであり、通常の DOM 文書ツリーの一部ではありません。

シャドウルートは、**ホスト**と呼ばれる特定の DOM ノードを通して、別のノードツリーに接続されます。このホストは、別のシャドウツリーの一部である場合もあれば、通常の DOM ツリーの一部である場合もあります。シャドウルートのホストのノードツリーは**ライトツリー**と呼ばれることがあります。

シャドウツリーの非表示の DOM ノードは通常、シャドウツリーの外側に適用された何ものからも影響を受けませんし、その逆も同様です。シャドウ DOM が終わり、通常の DOM が始まる**シャドウ境界**を通過することはできますが、それはとても意図的なものです。

- スクリプトで外部からシャドウツリーノードを操作するには、特別な[シャドウ DOM API](/ja/docs/Web/API/Web_components/Using_shadow_DOM) を使用してアクセスすることが要求されます。
- 外部からシャドウツリーをスタイル設定するには、 [CSS スコープ](/ja/docs/Web/CSS/CSS_scoping)および [CSS シャドウパーツ](/ja/docs/Web/CSS/CSS_shadow_parts)で実現できます。

## 関連情報

- [シャドウ DOM の使用](/ja/docs/Web/API/Web_components/Using_shadow_DOM)
- {{domxref("Element.shadowRoot")}} と {{domxref("Element.attachShadow()")}}
- {{domxref("ShadowRoot")}}
- {{HTMLElement("slot")}}
- {{Glossary("accessibility_tree", "アクセシビリティツリー")}}
