---
title: Composite operation (合成演算)
slug: Glossary/Composite_operation
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

CSS では、 CSS ルールのプロパティの値がそのプロパティの基盤値であり、[キーフレーム](/ja/docs/Web/CSS/@keyframes)の同じプロパティの値がそのプロパティの効果値です。

合成演算 (_composite operation_) は、効果値と基盤値とを結合して、最終的なキーフレームの効果値を生成するために使用する固有の演算です。合成演算には 3 種類があります。

- **置換**: 効果値が基盤値を置き換えます。この場合の最終的な効果値は、元の効果値そのものです。
- **追加**: 効果値は基盤値に追加されます。
- **累積**: 効果値は基礎値に結合されます。

> [!NOTE]
> CSSの合成演算はアニメーションにのみ適用されます。

## 関連情報

- [`animation-composition`](/ja/docs/Web/CSS/animation-composition)
- [`KeyframeEffect.composite`](/ja/docs/Web/API/KeyframeEffect/composite)
