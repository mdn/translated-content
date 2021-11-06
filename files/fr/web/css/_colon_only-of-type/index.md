---
title: ':only-of-type'
slug: Web/CSS/:only-of-type
tags:
  - CSS
  - Pseudo-classe
  - Reference
translation_of: Web/CSS/:only-of-type
---
{{CSSRef}}

La [pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) **`:only-of-type`** CSS permet de cibler un élément qui ne possède aucun nœud frère du même type pour un même élément parent (par exemple, sélectionner le seul élément {{HTMLElement("em")}} d'un {{HTMLElement("dd")}}).

```css
/* Cible un élément <p> si celui-ci est le */
/* seul paragraphe de son élément parent   */
p:only-of-type {
  background-color: lime;
}
```

> **Note :** Dans la version initiale de la spécification (CSS3), l'élément ciblé devait avoir un parent, ce n'est plus nécessaire depuis (spécification pour les sélecteurs de CSS4).

## Syntaxe

{{csssyntax}}

## Exemples

### CSS

```css
li li {
  list-style-type : disc;
}

li:only-of-type {
  color: #6699ff;
  font-style: italic;
  list-style-type: square;
}
```

### HTML

```html
<ol>
  <li>Premier
    <ul>
      <li>Ceci est l'unique li</li>
    </ul>
  </li>
  <li>Deuxième
    <ul>
      <li>Cette liste a deux éléments</li>
      <li>Cette liste a deux éléments</li>
    </ul>
  </li>
  <li>Troisième
    <ul>
      <li>Cette liste a trois éléments</li>
      <li>Cette liste a trois éléments</li>
      <li>Cette liste a trois éléments</li>
    </ul>
  </li>
</ol>
<ol>
  <li>Une seule liste imbriquée
    <ul>Avec
      <li>Un seul item</li>
    </ul>
  </li>
</ol>
```

### Résultat

{{EmbedLiveSample('Exemples', '100%', 150)}}

## Spécifications

| Spécification                                                                                    | État                                 | Commentaires                                                        |
| ------------------------------------------------------------------------------------------------ | ------------------------------------ | ------------------------------------------------------------------- |
| {{SpecName('CSS4 Selectors', '#only-of-type-pseudo', ':only-of-type')}} | {{Spec2('CSS4 Selectors')}} | L'élément ciblé ne doit pas nécessairement avoir un élément parent. |
| {{SpecName('CSS3 Selectors', '#only-of-type-pseudo', ':only-of-type')}} | {{Spec2('CSS3 Selectors')}} | Définition initiale.                                                |

## Compatibilité des navigateurs

{{Compat("css.selectors.only-of-type")}}

## Voir aussi

- {{cssxref(":only-child")}}
- {{cssxref(":nth-of-type")}}
- {{cssxref(":first-of-type")}}
- {{cssxref(":last-of-type")}}
