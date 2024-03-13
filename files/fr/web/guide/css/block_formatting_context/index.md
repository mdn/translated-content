---
title: Contexte de formatage de blocs
slug: Web/Guide/CSS/Block_formatting_context
---

{{CSSRef}}

Un **contexte de formatage de blocs** (_block formatting context_) est une partie du rendu visuel par le CSS, d'une page web. C'est la région qui délimite la mise en page des blocs et dans laquelle les éléments flottant interagissent les uns avec les autres.

Un contexte de formatage de blocs est créé dans les situations suivantes :

- L'élément racine ou quelque chose qui le contient
- Les éléments flottants (éléments avec une valeur pour la propriété {{cssxref("float")}} autre que `none`)
- Les éléments avec une position absolue (éléments avec la propriété {{cssxref("position")}} à `absolute` ou `fixed`)
- Les blocs en ligne (éléments avec la propriété {{cssxref("display")}} à `inline-block`)
- Les cellules de tableau (éléments avec {{cssxref("display")}}`: table-cell`, ce qui est le défaut pour les cellules de tableau)
- Les titres de tableau (éléments avec {{cssxref("display")}}`: table-caption`, ce qui est le défaut pour {{HTMLElement("caption")}})
- Les éléments où {{cssxref("overflow")}} a une valeur autre que `visible`
- Les boîtes flexibles (éléments avec {{cssxref("display")}}`: flex` ou `inline-flex`)
- {{cssxref("display")}}`: flow-root`

Un contexte de formatage de blocs contient tout ce qui se trouve dans l'élément qui l'a créé, et qui ne se trouve pas aussi dans un élément descendant définissant un nouveau contexte de formatage de blocs.

Les contextes de formatage de blocs sont important pour le positionnement (voir {{cssxref("float")}} et {{cssxref("clear")}}). Les règles de positionnement et de "libération" des blocs flottants (par {{cssxref("clear")}}) s'appliquent seulement aux éléments au sein d'un même contexte de formatage de blocs. Les blocs flottants n'influent pas sur le positionnement des éléments se trouvant dans d'autres contextes de formatage de blocs, et {{cssxref("clear")}} ne libère que des blocs flottants dans le même contexte de formatage de blocs.

## Spécifications

- [CSS 2.1](http://www.w3.org/TR/CSS21/visuren.html#q15)

## Voir aussi

- {{cssxref("float")}}
- {{cssxref("clear")}}
- {{cssxref("display")}}
