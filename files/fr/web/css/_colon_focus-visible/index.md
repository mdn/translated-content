---
title: ':focus-visible'
slug: Web/CSS/:focus-visible
tags:
  - CSS
  - Pseudo-classe
  - Reference
  - Web
translation_of: Web/CSS/:focus-visible
---
{{CSSRef}}{{SeeCompatTable}}

La pseudo-classe **`:focus-visible`** s'applique lorsqu'un élément correspond à la pseudo-classe {{cssxref("focus")}} et que l'agent utilisateur détermine, via une heuristique, que le focus devrait être mis en évidence sur l'élément (la plupart des navigateurs affichent un contour en surbrillance par défaut).

Ce sélecteur peut être utile afin de fournir un indicateur de focus différent selon le mode de navigation de l'utilisateur (souris ou clavier).

On notera que Firefox prend en charge cette fonctionnalité via une ancienne pseudo-classe préfixée  `:-moz-focusring`. Voir la page {{cssxref(":-moz-focusring")}} pour plus d'informations.

## Syntaxe

    :focus-visible

## Exemples

### Exemple simple

Dans cet exemple, le sélecteur `:focus-visible` utilise le comportement de l'agent utilisateur afin de déterminer lorsqu'il doit s'appliquer. Pour utiliser l'exemple, comparez ce qui se produit selon que vous utilisez une souris ou un clavier et notez la différence avec les éléments ciblés par `:focus`.

#### HTML

```html
<input value="Styles par défaut"><br>
<button>Styles par défaut</button><br>
<input class="focus-only" value=":focus only"><br>
<button class="focus-only">:focus only</button><br>
<input class="focus-visible-only" value=":focus-visible only"><br>
<button class="focus-visible-only">:focus-visible only</button>
```

#### CSS

```css
input, button {
  margin: 10px;
}

.focus-only:focus {
  outline: 2px solid black;
}

.focus-visible-only:focus-visible {
  outline: 4px dashed darkorange;
}
```

{{EmbedLiveSample('Exemple_simple', '100%', '300')}}

### Choisir d'afficher l’indicateur de focus

Un contrôle personnalisé (par exemple un bouton provenant d'un _[custom element](/fr/docs/Web/Web_Components/Using_custom_elements)_) peut utiliser `:focus-visible` afin d'appliquer ou non un indicateur de focus pour la navigation au clavier afin de calquer au comportement natif de {{htmlelement("button")}}.

#### HTML

```html
<custom-button tabindex="0" role="button">Cliquez-moi</custom-button>
```

#### CSS

```css
custom-button {
  display: inline-block;
  margin: 10px;
}

custom-button:focus {
  /* Fournir une alternative pour les navigateurs
     qui ne prennent pas en charge :focus-visible */
  outline: 2px solid red;
  background: lightgrey;
}

custom-button:focus:not(:focus-visible) {
  /* Retirer l'indicateur de focus à la souris
     pour les navigateurs qui prennent en charge :focus-visible */
  background: transparent;
}

custom-button:focus-visible {
  /* Dessiner un contour pour les navigateurs qui
     prennent en charge :focus-visible lorsque la
     navigation est au clavier */
  outline: 4px dashed darkorange;
  background: transparent;
}
```

{{EmbedLiveSample("Choisir_d'afficher_l’indicateur_de_focus", '100%', '300')}}

## Accessibilité

### Troubles de la vision

Il faut s'assurer que l'indicateur visuel de focus puisse être vu par des personnes ayant une vision faible. Cela pourra d'autant plus bénéficier aux personnes qui consultent le document dans un endroit fortement éclairé (dehors au soleil par exemple). La recommandation [WCAG 2.1 SC 1.4.11 Non-Text Contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html) nécessite un contraste minimum de 3 à 1.

- Indicateurs visuels de focus accessibles : [Conseils sur la conception d'indicateurs utiles et utilisables (en anglais)](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)

### Troubles cognitifs

L'apparition ou la disparition d'un indicateur de focus peut être source de confusion pour les personnes souffrant de troubles cognitifs ou pour les personnes qui ne sont pas habituées à ces interfaces.

## Spécifications

| Spécification                                                                                            | État                                 | Commentaires         |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------------------- |
| {{SpecName("CSS4 Selectors", "#the-focus-visible-pseudo", ":focus-visible")}} | {{Spec2("CSS4 Selectors")}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("css.selectors.focus-visible")}}

## Voir aussi

- {{cssxref(":focus")}}
- {{cssxref(":focus-within")}}
