---
title: ':only-child'
slug: Web/CSS/:only-child
tags:
  - CSS
  - Pseudo-classe
  - Reference
translation_of: Web/CSS/:only-child
---
{{CSSRef}}

La [pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) **`:only-child`** représente n'importe quel élément qui est le seul enfant de son élément parent. Elle permet d'obtenir le même effet que `:first-child:last-child` ou `:nth-child(1):nth-last-child(1)`, mais avec une spécificité inférieure.

```css
/* Cible chaque élément <p> si celui-ci   */
/* est le seul élément fils de son parent */
p:only-child {
  background-color: lime;
}
```

> **Note :** En CSS3, pour cibler l'élément, il fallait que celui-ci ait un élément parent. Cette restriction a été levée avec CSS4.

## Syntaxe

{{csssyntax}}

## Exemples

### Exemple simple

#### CSS

```css
span:only-child {
  color:red;
}
```

#### HTML

```html
<div>
  <span>
    Ce span est l'unique enfant
    de son parent
  </span>
</div>

<div>
  <span>
    Ce span est l'un des deux
    enfants de son parent
  </span>
  <span>
    Ce span est l'un des deux
    enfants de son parent
  </span>
</div>
```

#### Résultat

{{EmbedLiveSample('Exemple_simple', '100%', 150)}}

### Exemple avec une liste

#### CSS

```css
li li {
  list-style-type : disc;
}

li:only-child {
  color: #6699ff;
  font-style: italic;
  list-style-type: square;
}
```

#### HTML

```html
<ol>
  <li>Premier
    <ul>
      <li>Ceci est l'unique élément enfant</li>
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
```

#### Résultat

{{EmbedLiveSample('Exemple_avec_une_liste', '100%', 150)}}

## Spécifications

| Spécification                                                                            | État                                 | Commentaires                                                          |
| ---------------------------------------------------------------------------------------- | ------------------------------------ | --------------------------------------------------------------------- |
| {{SpecName('CSS4 Selectors', '#only-child-pseudo', ':only-child')}} | {{Spec2('CSS4 Selectors')}} | Il n'est plus nécessaire qu'un élément ait un parent pour être ciblé. |
| {{SpecName('CSS3 Selectors', '#only-child-pseudo', ':only-child')}} | {{Spec2('CSS3 Selectors')}} | Définition initiale.                                                  |

## Compatibilité des navigateurs

{{Compat("css.selectors.only-child")}}

## Voir aussi

- {{cssxref(":only-of-type")}}
- {{cssxref(":first-child")}}
- {{cssxref(":last-child")}}
- {{cssxref(":nth-child")}}
