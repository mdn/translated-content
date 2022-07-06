---
title: Fusion des marges
slug: Web/CSS/CSS_Box_Model/Mastering_margin_collapsing
tags:
  - CSS
  - Reference
translation_of: Web/CSS/CSS_Box_Model/Mastering_margin_collapsing
original_slug: Web/CSS/Modèle_de_boîte_CSS/Fusion_des_marges
---
{{CSSRef}}Les marges [haute](/fr/docs/Web/CSS/margin-top) et [basse](/fr/docs/Web/CSS/margin-bottom) des blocs sont parfois fusionnées en une seule marge dont la taille est la plus grande des deux marges fusionnées. C'est ce qu'on appelle **la fusion des marges**.

La fusion des marges se produit si on a l'un de ces trois cas :

- Des éléments voisins adjacents

  - : Les marges des éléments voisins adjacents sont fusionnés (sauf quand le dernier voisin doit passer à la ligne pour [dégager](/fr/docs/Web/CSS/clear) les flottements). Ainsi :

    ```html
     <p>La marge basse de ce paragraphe est fusionnée…</p>
     <p>… avec la marge haute de celui-ci.</p>
    ```

- Aucun contenu séparant le parent et ses descendants
  - : S'il n'y a aucune bordure, remplissage, contenu en ligne (_inline_), lorsqu' un [contexte de formatage de blocs](/fr/docs/Web/CSS/Block_formatting_context) est créé ou _[dégagement](/fr/docs/Web/CSS/clear)_ pour séparer la marge haute d'un bloc avec la marge haute d'un ou plusieurs des blocs descendants ou quand il n'y a aucune bordure, remplissage, contenu en ligne, {{cssxref("height")}}, {{cssxref("min-height")}} ou {{cssxref("max-height")}} pour séparer la marge basse d'un bloc avec la marge basse d'un ou plusieurs des blocs descendants, ces marges sont fusionnées. La marge fusionnée termine en dehors de l'élément parent.
- Des blocs vides
  - : S'il n'y a aucune bordure, remplissage, contenu en ligne, {{cssxref("height")}} ou {{cssxref("min-height")}} pour séparer la marge haute d'un bloc de sa marge basse, ces deux marges sont fusionnées.

On peut avoir des cas de fusion plus complexes lorsque ces cas de figures sont combinés.

Ces règles s'appliquent également lorsque les marges sont égales à 0. Ainsi, la marge d'une descendant finit toujours en dehors de l'élément parent (selon la deuxième règle vue ci-avant) quelle que soit la marge de l'élément parent (nulle ou non).

Lorsqu'on manipule des marges négatives, la taille de la marge fusionnée est la somme de la marge positive la plus grande et de la marge négative la plus petite (celle dont la valeur est plus éloignée de 0).

Les marges des éléments [flottants](/fr/docs/Web/CSS/float) et [positionnés de façon absolue](/fr/docs/Web/CSS/position) ne sont jamais fusionnées.

## Exemples

### HTML

```html
<p>La marge basse de ce paragraphe est fusionnée…</p>
<p>… avec la marge haute de ce paragraphe. On a donc une marge
   de <code>1.2rem</code> entre les deux.</p>

<div>Cet élément contient deux paragraphes !
  <p>Celui-ci a une marge de <code>.4rem</code> par rapport au texte ci-dessus.</p>
  <p>La marge basse de cet élément fusionne avec la marge basse
     de l'élément parent. On a donc <code>2rem</code> de marge.
</p>
</div>

<p>Bip bap bop.</p>
```

### CSS

```css
div {
  margin: 2rem 0;
  background: lavender;
}

p {
  margin: .4rem 0 1.2rem 0;
  background: yellow;
}
```

### Résultat

{{EmbedLiveSample('Exemples','100%',250)}}

## Spécifications

| Spécification                                                                                        | État                     | Commentaires         |
| ---------------------------------------------------------------------------------------------------- | ------------------------ | -------------------- |
| {{SpecName("CSS2.1", "box.html#collapsing-margins", "margin collapsing")}} | {{Spec2("CSS2.1")}} | Définition initiale. |

## Voir aussi

- [La référence CSS](/fr/docs/Web/CSS/Reference)
