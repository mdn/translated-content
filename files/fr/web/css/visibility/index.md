---
title: visibility
slug: Web/CSS/visibility
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/visibility
---
{{CSSRef}}

La propriété **`visibility`** peut être utilisée afin de cacher un élément tout en conservant occupé l'espace dans lequel il aurait été visible. Elle permet aussi de masquer des lignes ou des colonnes dans un tableau (cf. {{HTMLElement("table")}}).

{{EmbedInteractiveExample("pages/css/visibility.html")}}

> **Note :** Afin de cacher un élément et de le retirer de la disposition du document, on utilisera plutôt la propriété {{cssxref("display")}} avec la valeur `none`.

## Syntaxe

```css
/* Avec un mot-clé */
visibility: visible;
visibility: hidden;
visibility: collapse;

/* Valeurs globales */
visibility: inherit;
visibility: initial;
visibility: unset;
```

La propriété `visibility` est définie avec l'un des mots-clés suivants.

### Valeurs

- `visible`
  - : La valeur par défaut, la boîte est visible.
- `hidden`
  - : La boîte est invisible (totalement transparente, rien n'est dessiné) mais continue d'avoir un impact sur la disposition. Les fils de l'élément seront visibles s'ils ont `visibility:visible`. L'élément ne pourra plus recevoir le focus (cf. [la navigation au clavier avec les tabulations](/fr/docs/Web/HTML/Global_attributes/tabindex)).
- `collapse`

  - : Le mot-clé `collapse` a différents effets selon les éléments :

    - Pour les lignes, les colonnes, les groupes de lignes et les groupes de colonnes d'un tableau, les éléments sont masqués et l'espace occupé est retiré (comme si on avait appliqué `{{cssxref("display")}}: none` aux colonnes/lignes du tableau). La taille des autres lignes et colonnes continue d'être calculée comme si les lignes et colonnes masquées étaient présentes. Cela a été conçu afin de pouvoir retirer rapidement des lignes et/ou des colonnes sans avoir à recalculer les dimensions pour l'ensemble du tableau.
    - Les éléments flexibles sont masqués et l'espace qu'ils auraient occupé est retiré.
    - Pour les éléments XUL, la taille calculée des éléments vaut toujours zéro, quel que soit les autres styles qui pourraient affecter la taille, les marges continuent de s'appliquer.
    - Pour les autres éléments, `collapse` est traité comme `hidden`.

### Syntaxe formelle

{{csssyntax}}

## Interpolation

Les valeurs de visibilité peuvent être interpolées entre _visible_ et _masqué_. L'une des valeurs de début ou de fin doit donc être `visible`, sinon il n'y aura pas d'interpolation. L'interpolation est discrète (passage direct d'un état à l'autre), les valeurs supérieures à 0 sont considérées équivalentes à `visible`. On pourra plutôt utiliser {{cssxref("opacity")}} pour créer un effet doux plutôt que de masquer/rendre visible l'élément brusquement.

## Exemples

### Exemple simple

#### HTML

```html
<p>
  On peut dire tout ce qu'on veut ici,
  ce ne sera pas lisible de toute façon.
</p>
<p class="coucou">
  Alors que là, on a la bonne classe.
  Coucou tout le monde :)
</p>
<p>
  Et on repasse en mode invisible.
</p>
```

#### CSS

```css
p {
  /* les paragraphes ne seront pas visibles */
  visibility: hidden;
}

p.coucou {
  /* sauf ceux avec la classe coucou */
  visibility: visible;
}
```

#### Résultat

{{EmbedLiveSample("Exemple_simple")}}

### Exemple sur un tableau

#### HTML

```html
<table>
  <tr>
    <td>Jean</td>
    <td>Biche</td>
  </tr>
  <tr class="col">
    <td>Hit</td>
    <td>Girl</td>
  </tr>
  <tr>
    <td>Super</td>
    <td>Cochon</td>
  </tr>
</table>
```

#### CSS

```css
tr.col {
  /* les lignes de tableau avec la classe */
  /* col seront repliées */
  visibility: collapse;
}
```

#### Résultat

{{EmbedLiveSample("Exemple_sur_un_tableau")}}

## Accessibilité

Utiliser la propriété `visibility` avec la valeur `hidden` retirera l'objet de [l'arbre d'accessibilité](/fr/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis). Les éléments ciblés, ainsi que leurs éléments descendants ne seront plus annoncés par les lecteurs d'écran.

## Notes

- Le support de `visibility:collapse` est absent ou incorrect pour certains navigateurs récents. Dans de nombreux cas, il n'est pas correctement traité comme `visibility:hidden` sur les éléments qui ne sont pas des lignes et/ou des colonnes de tableau.
- `visibility:collapse` peut modifier la disposition d'un tableau si le tableau possède des tableaux imbriqués dont les cellules sont repliées, sauf si `visibility:visible` est défini explicitement sur les tableaux imbriqués.

## Spécifications

| Spécification                                                                            | État                                     | Commentaires                                                    |
| ---------------------------------------------------------------------------------------- | ---------------------------------------- | --------------------------------------------------------------- |
| {{SpecName('CSS3 Flexbox', '#visibility-collapse', 'visibility')}} | {{Spec2('CSS3 Flexbox')}}         | Définition de la valeur `collapse` pour les éléments flexibles. |
| {{SpecName('CSS3 Box', '#visibility-prop', 'visibility')}}             | {{Spec2('CSS3 Box')}}             | Aucune modification.                                            |
| {{SpecName('CSS3 Transitions', '#animatable-css', 'visibility')}} | {{Spec2('CSS3 Transitions')}} | `visibility` peut désormais être animée.                        |
| {{SpecName('CSS2.1', 'visufx.html#visibility', 'visibility')}}     | {{Spec2('CSS2.1')}}                 | Définition initiale.                                            |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.visibility")}}

## Voir aussi

- {{cssxref("display")}}
- {{cssxref("opacity")}}
