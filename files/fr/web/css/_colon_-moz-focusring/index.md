---
title: ':-moz-focusring'
slug: Web/CSS/:-moz-focusring
tags:
  - CSS
  - Non-standard
  - Pseudo-classe
  - Reference
translation_of: Web/CSS/:-moz-focusring
---
{{Non-standard_header}}{{CSSRef}}

La pseudo-classe **`:-moz-focusring`** est similaire à la pseudo-classe {{cssxref(":focus")}} mais ne cible un élément que si celui-ci a le focus **et** qu'un indicateur doit être dessiné autour ou sur cet élément.

Si `:-moz-focusring` correspond à un élément, `:focus` correspondra également (bien que l'inverse ne soit pas toujours vrai). Cela dépend de l'agent utilisateur qui indique si un anneau de focus doit être dessiné sur l'élément qui a reçu le focus. Cette indication dépend fortement du système d'exploitation et le comportement de cette pseudo-classe diffèrera donc selon les plateformes et/ou les paramètres du système.

> **Note :** Les développeurs utilisent souvent `:-moz-focusring` pour différencier l'atteinte du focus via le **clic de la souris** ou via **la navigation au clavier (avec la tabulation)**. Cette pseudo-classe est également utile si on crée un [élément personnalisé](/en-US/docs/Web/Web_Components/Using_custom_elements) dont on veut changer le style en fonction de son comportement.

## Syntaxe

    :-moz-focusring

## Exemple

### CSS

```css
input {
  margin: 5px;
}

:-moz-focusring {
  color: red;
  outline: 2px dotted green;
}
```

### HTML

```html
<input/>
```

### Résultat

{{EmbedLiveSample("Exemple")}}

## Spécifications

Cette fonctionnalité ne fait partie d'aucune spécification bien qu'elle ait [discutée avec le groupe de travail](https://lists.w3.org/Archives/Public/www-style/2015Sep/0226.html) et qu'il a été [conclus de son ajout dans la spécification CSS sur les sélecteurs de niveau 4 ou 5](https://lists.w3.org/Archives/Public/www-style/2015Oct/0012.html).

## Compatibilité des navigateurs

{{Compat("css.selectors.-moz-focusring")}}

## Voir aussi

- {{bug("418521")}}
