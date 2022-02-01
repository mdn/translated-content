---
title: ':focus'
slug: Web/CSS/:focus
tags:
  - CSS
  - Pseudo-classe
  - Reference
translation_of: Web/CSS/:focus
---
{{CSSRef}}

La [pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) **`:focus`** permet de cibler un élément lorsque celui-ci reçoit le focus (soit il est sélectionné à l'aide du clavier, soit il est activé avec la souris comme par exemple le champ d'un formulaire).

```css
/* Cible n'importe quel élément <input> */
/* uniquement lorsqu'il a le focus */
input:focus {
  color: red;
}
```

Cette pseudo-classe ne s'applique qu'aux éléments avec le focus, elle ne s'applique pas à ses parents (comme {{cssxref(":checked")}}, {{cssxref(":enabled")}} mais pas comme {{cssxref(":active")}} ou {{cssxref(":hover")}}).

## Syntaxe

{{csssyntax}}

## Exemples

### CSS

```css
.prenom:focus {
  background: yellow;
  color: red;
}

.nom:focus {
  background: yellow;
  color: lime;
}
```

### HTML

```html
<input class="prenom" value="Rouge si focus">
<input class="nom" value="Vert si focus">
```

### Résultat

{{EmbedLiveSample('Exemples', '100%', 40)}}

## Accessibilité

Il faut s'assurer que l'indicateur visuel de focus puisse être vu par des personnes ayant une vision faible. Cela pourra d'autant plus bénéficier aux personnes qui consultent le document dans un endroit fortement éclairé (dehors au soleil par exemple). La recommandation [WCAG 2.1 SC 1.4.11 Non-Text Contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html) nécessite un contraste minimum de 3 à 1.

- Indicateurs visuels de focus accessibles : [Conseils sur la conception d'indicateurs utiles et utilisables (en anglais)](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)

### `:focus { outline: none; }`

Il ne faut jamais retirer l'indicateur de focus sans le remplacer par un autre indicateur qui respecte la recommandation [WCAG 2.1 SC 1.4.11 Non-Text Contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html) :

- [Ne jamais retirer les bordures/contours CSS (en anglais)](https://a11yproject.com/posts/never-remove-css-outlines/)

## Spécifications

| Spécification                                                                                                    | État                                 | Commentaires                                 |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------------------------------------------- |
| {{SpecName('HTML WHATWG', 'scripting.html#selector-focus', ':focus')}}                     | {{Spec2('HTML WHATWG')}}     | Définition de la sémantique relative à HTML. |
| {{SpecName('CSS4 Selectors', '#focus-pseudo', ':focus')}}                                     | {{Spec2('CSS4 Selectors')}} | Aucune modification.                         |
| {{SpecName('CSS3 Selectors', '#the-user-action-pseudo-classes-hover-act', ':focus')}} | {{Spec2('CSS3 Selectors')}} | Aucune modification.                         |
| {{SpecName('CSS2.1', 'selector.html#dynamic-pseudo-classes', ':focus')}}                 | {{Spec2('CSS2.1')}}             | Définition initiale.                         |

## Compatibilité des navigateurs

{{Compat("css.selectors.focus")}}

## Voir aussi

- {{CSSxRef(":focus-visible")}} {{Experimental_Inline}}
- {{cssxref(":focus-within")}}
