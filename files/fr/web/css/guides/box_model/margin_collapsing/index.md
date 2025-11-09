---
title: Fusion des marges
slug: Web/CSS/Guides/Box_model/Margin_collapsing
original_slug: Web/CSS/CSS_box_model/Mastering_margin_collapsing
l10n:
  sourceCommit: c9fc9aa7a65c5109e64c0f7b6d9e732dd812973f
---

Les marges [haute](/fr/docs/Web/CSS/Reference/Properties/margin-top) et [basse](/fr/docs/Web/CSS/Reference/Properties/margin-bottom) des blocs sont parfois combinées (fusionnées) en une seule marge dont la taille est la plus grande des marges individuelles (ou simplement l'une d'elles si elles sont égales), un comportement appelé **fusion des marges**. Notez que les marges des éléments [flottants](/fr/docs/Web/CSS/Reference/Properties/float) et [absolument positionnés](/fr/docs/Web/CSS/Reference/Properties/position#types_de_positionnement) ne fusionnent jamais.

La fusion des marges se produit dans trois cas principaux&nbsp;:

- Parents adjacents
  - : Les marges de frères et sœurs adjacents sont fusionnées (sauf lorsque le second doit être [écarté](/fr/docs/Web/CSS/Reference/Properties/clear) des flottants).
- Aucun contenu ne sépare le parent et les descendants
  - : Les marges verticales entre un bloc parent et ses descendants peuvent fusionner. Cela se produit lorsqu'il n'y a aucun contenu séparateur entre eux. Plus précisément, cela arrive dans deux cas principaux&nbsp;:
    - La {{cssxref("margin-top")}} d'un parent fusionne avec la {{cssxref("margin-top")}} de son premier descendant en flux, sauf si le parent possède une {{cssxref("border-top")}}, une {{cssxref("padding-top")}}, contient du contenu en ligne (comme du texte), ou si une _[clearance](/fr/docs/Web/CSS/Reference/Properties/clear)_ est appliquée.
    - La {{cssxref("margin-bottom")}} d'un parent fusionne avec la {{cssxref("margin-bottom")}} de son dernier descendant en flux, sauf si le parent a une {{cssxref("height")}} ou {{cssxref("min-height")}} définie, une {{cssxref("border-bottom")}}, ou une {{cssxref("padding-bottom")}}.

    Dans les deux cas, créer un nouveau [contexte de formatage de bloc](/fr/docs/Web/CSS/Guides/Display/Block_formatting_context) sur le parent empêche aussi ses marges de fusionner avec celles de ses enfants.

- Blocs vides
  - : S'il n'y a ni bordure, ni remplissage, ni contenu en ligne, ni {{cssxref("height")}}, ni {{cssxref("min-height")}} pour séparer la {{cssxref("margin-top")}} d'un bloc de sa {{cssxref("margin-bottom")}}, alors ses marges haute et basse fusionnent.

À noter&nbsp;:

- Une fusion de marges plus complexe (de plus de deux marges) se produit lorsque les cas ci-dessus sont combinés.
- Ces règles s'appliquent même aux marges nulles, donc la marge d'un·e descendant·e se retrouve à l'extérieur de son parent (selon les règles ci-dessus) que la marge du parent soit nulle ou non.
- Lorsque des marges négatives sont impliquées, la taille de la marge fusionnée est la somme de la plus grande marge positive et de la plus petite (la plus négative) marge négative.
- Lorsque toutes les marges sont négatives, la taille de la marge fusionnée est la plus petite (la plus négative) marge. Cela s'applique aussi bien aux éléments adjacents qu'aux éléments imbriqués.
- La fusion des marges ne concerne que la direction verticale.
- Les marges ne fusionnent pas dans un conteneur dont `display` est défini sur `flex` ou `grid`.

## Exemples

### HTML

```html
<p>La marge basse de ce paragraphe est fusionnée …</p>
<p>
  … avec la marge haute de ce paragraphe. On a donc une marge de
  <code>1.2rem</code> entre les deux.
</p>

<div>
  Cet élément contient deux paragraphes&nbsp;!
  <p>
    Celui-ci a une marge de <code>.4rem</code> par rapport au texte ci-dessus.
  </p>
  <p>
    La marge basse de cet élément fusionne avec la marge basse de l'élément
    parent. On a donc <code>2rem</code> de marge.
  </p>
</div>

<p>Je suis à <code>2rem</code> sous l'élément ci-dessus.</p>
```

### CSS

```css
div {
  margin: 2rem 0;
  background: lavender;
}

p {
  margin: 0.4rem 0 1.2rem 0;
  background: yellow;
}
```

### Résultat

{{EmbedLiveSample('exemples', 'auto', 350)}}

## Voir aussi

- Concepts clés CSS&nbsp;:
  - [Syntaxe CSS](/fr/docs/Web/CSS/Guides/Syntax/Introduction)
  - [Règles at](/fr/docs/Web/CSS/Guides/Syntax/At-rules)
  - [Commentaires](/fr/docs/Web/CSS/Guides/Syntax/Comments)
  - [Spécificité](/fr/docs/Web/CSS/Guides/Cascade/Specificity)
  - [Héritage](/fr/docs/Web/CSS/Guides/Cascade/Inheritance)
  - [Modèle de boîte](/fr/docs/Web/CSS/Guides/Box_model/Introduction)
  - [Modes de mise en page](/fr/docs/Glossary/Layout_mode)
  - [Modèle de formatage visuel](/fr/docs/Web/CSS/Guides/Display/Visual_formatting_model)
  - Valeurs
    - [Valeurs initiales](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_initiale)
    - [Valeurs calculées](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_calculée)
    - [Valeurs utilisées](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_utilisée)
    - [Valeurs réelle](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_réelle)
  - [Syntaxe de définition des valeurs](/fr/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
  - [Propriétés raccourcies](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties)
  - {{glossary("Replaced elements", "Éléments remplacés")}}
