---
title: <text-edge>
slug: Web/CSS/Reference/Values/text-edge
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Le [type de donnée](/fr/docs/Web/CSS/Reference/Values/Data_types) {{Glossary("enumerated", "énuméré")}} [CSS](/fr/docs/Web/CSS) **`<text-edge>`** définit des mots-clés qui définissent les métriques de police représentant des régions spécifiques sur le bord de début de bloc (block-start) et le bord de fin de bloc (block-end) d'une police. Chaque mot-clé définit une position du bord supérieur et/ou inférieur d'une police.

Les valeurs `<text-edge>` sont utilisées dans la propriété {{CSSxRef("text-box-edge")}} pour définir un espace à retrancher du bord de début de bloc et du bord de fin de bloc du conteneur de bloc, d'un élément de texte.

## Syntaxe

Le type de donnée `<text-edge>` est composé d'un ou deux mots-clés représentant des régions spécifiques sur le bord supérieur et/ou inférieur d'une police&nbsp;:

- Lorsqu'une seule valeur est définie, la position du bord supérieur et du bord inférieur de la police est définie par ce même mot-clé.
- Lorsqu'on donne deux valeurs, la première valeur définit la position du bord supérieur de la police, et la seconde valeur définit la position du bord inférieur de la police.

### Valeurs

#### Valeurs à mot-clé unique

- `text`
  - : Les bords supérieur et inférieur de la police correspondent à sa ligne de base supérieure/inférieure&nbsp;: cela inclut les ascendantes et descendantes de la police mais exclut la [demi-chasse](/fr/docs/Glossary/Leading) appliquée au texte.

    > [!NOTE]
    > La quantité de demi-chasse incluse sur un élément de texte peut être contrôlée à l'aide de la propriété {{CSSxRef("line-height")}}.

> [!NOTE]
> Les mots-clés `ideographic` et `ideographic-ink` sont destinés à définir des positions de bords supérieurs et inférieurs spécifiques aux [caractères des langues CJC <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/CJK_characters). Leur comportement exact est actuellement en discussion et ils ne sont pris en charge par aucun navigateur.

#### Valeurs à deux mots-clés

- `alphabetic`
  - : Le bord inférieur de la police correspond à sa ligne de base alphabetic, qui est le bas de ses petites lettres minuscules (par exemple, «&nbsp;m&nbsp;», «&nbsp;n&nbsp;» et «&nbsp;o&nbsp;») ou de ses lettres capitales.
- `cap`
  - : Le bord supérieur de la police correspond à sa ligne de base `cap-height`, qui est le sommet de ses lettres capitales.
- `ex`
  - : Le bord supérieur de la police correspond à sa ligne de base `x-height`, qui est le sommet de ses petites lettres minuscules.
- `text`
  - : Le bord supérieur de la police correspond à sa ligne de base `text-over` (inclut les ascendantes de la police mais exclut la demi-chasse du bord supérieur), ou son bord inférieur correspond à sa ligne de base `text-under` (inclut les descendantes de la police mais exclut la demi-chasse du bord inférieur), selon le bord pour lequel la valeur est définie.

## Syntaxe formelle

{{CSSSyntaxRaw(`<text-edge> = [ text | ideographic | ideographic-ink ] | [ text | ideographic | ideographic-ink | cap | ex ] [ text | ideographic | ideographic-ink | alphabetic ]`)}}

## Exemples

Voir les [exemples de `text-box-edge`](/fr/docs/Web/CSS/Reference/Properties/text-box-edge#exemples)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés {{CSSxRef("text-box")}}, {{CSSxRef("text-box-edge")}}, {{CSSxRef("text-box-trim")}}
- Module de [mise en forme en ligne CSS](/fr/docs/Web/CSS/Guides/Inline_layout)
