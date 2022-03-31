---
title: counter-set
slug: Web/CSS/counter-set
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/counter-set
---
{{CSSRef}}

La propriété CSS **`counter-set`** définit un [compteur CSS](/fr/docs/Web/CSS/CSS_Lists/Compteurs_CSS) avec une certaine valeur. Elle permet de manipuler les valeurs des compteurs existants et ne créera qu'un nouveau compteur que lorsqu'il n'existe pas de compteur avec le nom indiqué sur l'élément.

> **Note :** La valeur d'un compteur peut être incrémentée ou décrémentée grâce à la propriété CSS {{cssxref("counter-increment")}}.

## Syntaxe

```css
/* Définir "mon-compteur" avec la valeur 0 */
counter-set: mon-compteur;

/* Définir "mon-compteur" avec la valeur -1 */
counter-set: mon-compteur -1;

/* Définir "compteur1" avec 1 et "compteur2" à 4 */
counter-set: compteur1 1 compteur2 4;

/* Réinitialiser les compteurs qui auraient été */
/* définis avec des règles moins spécifiques */
counter-set: none;

/* Valeurs globales */
counter-set: inherit;
counter-set: initial;
counter-set: unset;
```

La propriété `counter-set` est définit avec l'une de ces deux valeurs :

- Une valeur de type `<custom-ident>` qui fournit le nom du compteur, éventuellement suivie d'un entier (`<integer>`). Il est possible de définir plusieurs compteurs à réinitialiser en séparant les valeurs grâce à un espace.
- Le mot-clé `none`.

### Valeurs

- {{cssxref("custom-ident", "&lt;custom-ident&gt;")}}
  - : Le nom du compteur à définir ou à modifier.
- {{cssxref("&lt;integer&gt;")}}
  - : La valeur à utiliser pour le compteur à chaque occurrence de l'élément. Par cette valeur sera `0`. S'il n'existe pas déjà de compteur avec le nom courant pour l'élément, l'élément créera un nouveau compteur avec ce nom et utilisera alors cette valeur.
- `none`
  - : Aucune définition ou modification de compteur ne doit être appliquée. Cette valeur peut être utilisée afin de surcharger une déclaration `counter-set` d'une règle moins spécifique.

### Syntaxe formelle

{{csssyntax}}

## Exemples

```css
h1 {
  counter-set: chapitre section 1 page;
  /* Les compteurs "chapitre" et "page" sont
     définis à 0, et le compteur "section"
     est défini à 1. */
}
```

## Spécifications

| Spécification                                                                | État                             | Commentaires         |
| ---------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('CSS3 Lists', '#counter-set', 'counter-set')}} | {{Spec2('CSS3 Lists')}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.counter-set")}}

## Voir aussi

- [Utiliser les compteurs CSS](/fr/docs/Web/CSS/CSS_Lists/Compteurs_CSS)
- {{cssxref("counter-increment")}}
- {{cssxref("counter-reset")}}
- {{cssxref("@counter-style")}}
- Les fonctions {{cssxref("counter")}} et {{cssxref("counters")}}
- {{cssxref("content")}}
