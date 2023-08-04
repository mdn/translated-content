---
title: Shadow tree
slug: Glossary/Shadow_tree
---

**Shadow ツリー** は DOM {{Glossary("node", "nodes")}} のツリーで、最上位のノードは **Shadow ルート** ( **Shadow DOM** 内にある最上位のノード) です。Shadow ツリーは標準的な DOM から隠されたツリーで、標準的な DOM ノードがホストになります。 隠されたノードは通常の DOM の機能では直接確認できませんが、特殊な [Shadow DOM API](/ja/docs/Web/Web_Components/Using_shadow_DOM) を使うとアクセスすることができます。

Shadow ツリー内のノードは Shadow ツリーの外部の影響を一切受けません。逆に Shadow ツリーの外部は Shadow ツリー内の影響を一切受けません。これにより細かい実装をカプセル化することができ、特に [custom elements](/ja/docs/User:Andreas_Wuest/Custom_Elements) や他の先進的なデザインパラダイムの実装に便利です。

## 関連項目

### 一般知識

- [Using shadow DOM](/ja/docs/Web/Web_Components/Using_shadow_DOM)

### 技術情報

- {{domxref("Element.shadowRoot")}} と {{domxref("Element.attachShadow()")}}
- {{domxref("ShadowRoot")}}
- {{HTMLElement("slot")}}
