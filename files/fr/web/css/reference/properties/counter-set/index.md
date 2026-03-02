---
title: counter-set
slug: Web/CSS/Reference/Properties/counter-set
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

La propriété [CSS](/fr/docs/Web/CSS) **`counter-set`** permet d'attribuer des valeurs aux [compteurs CSS](/fr/docs/Web/CSS/Guides/Counter_styles/Using_counters) sur l'élément.

Si les compteurs n'existent pas, la propriété `counter-set` crée un nouveau compteur pour chaque compteur nommé dans la liste des paires compteur et valeur séparées par des espaces. Cependant, pour créer un nouveau compteur, il est recommandé d'utiliser la propriété CSS {{CSSxRef("counter-reset")}}.

Si un compteur nommé dans la liste n'a pas de valeur, la valeur du compteur sera définie à `0`.

> [!NOTE]
> La valeur d'un compteur peut être incrémentée ou décrémentée grâce à la propriété CSS {{CSSxRef("counter-increment")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: counter-set")}}

```css interactive-example-choice
counter-set: none;
```

```css interactive-example-choice
counter-set: chapter-count 0;
```

```css interactive-example-choice
counter-set: chapter-count;
```

```css interactive-example-choice
counter-set: chapter-count 5;
```

```css interactive-example-choice
counter-set: chapter-count -5;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="chapters">
    <h1>Les aventures d'Alice au pays des merveilles</h1>
    <h2>Dans le terrier du lapin</h2>
    <h2 id="example-element">La mare de larmes</h2>
    <h2>Une course cocasse et une longue histoire</h2>
    <h2>Le lapin apporte une petite facture</h2>
  </div>
</section>
```

```css interactive-example
#default-example {
  text-align: left;
  counter-set: chapter-count;
}

#example-element {
  background-color: #37077c;
  color: white;
}

h2 {
  counter-increment: chapter-count;
  font-size: 1em;
}

h2::before {
  content: "Chapitre " counter(chapter-count) " : ";
}
```

## Syntaxe

```css
/* Définir "mon-compteur" avec la valeur 0 */
counter-set: mon-compteur;

/* Définir "mon-compteur" avec la valeur -1 */
counter-set: mon-compteur -1;

/* Définir "compteur1" avec 1 et "compteur2" à 4 */
counter-set: compteur1 1 compteur2 4;

/* Réinitialiser les compteurs qui auraient été définis avec des règles moins spécifiques */
counter-set: none;

/* Valeurs globales */
counter-set: inherit;
counter-set: initial;
counter-set: revert;
counter-set: revert-layer;
counter-set: unset;
```

La propriété `counter-set` est définit avec l'une de ces deux valeurs&nbsp;:

- Une valeur de type `<custom-ident>` qui fournit le nom du compteur, éventuellement suivie d'un entier (`<integer>`). Il est possible de définir plusieurs compteurs à réinitialiser en séparant les valeurs grâce à un espace.
- Le mot-clé `none`.

### Valeurs

- {{CSSxRef("&lt;custom-ident&gt;")}}
  - : Le nom du compteur à définir ou à modifier.
- {{CSSxRef("&lt;integer&gt;")}}
  - : La valeur à utiliser pour le compteur à chaque occurrence de l'élément. Par cette valeur sera `0`. S'il n'existe pas déjà de compteur avec le nom courant pour l'élément, l'élément créera un nouveau compteur avec ce nom et utilisera alors cette valeur.
- `none`
  - : Aucune définition ou modification de compteur ne doit être appliquée. Cette valeur peut être utilisée afin de surcharger une déclaration `counter-set` d'une règle moins spécifique.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir des compteurs nommés

```css
h1 {
  counter-set: chapitre section 1 page;
  /* Les compteurs "chapitre" et "page" sont
     définis à 0, et le compteur "section"
     est défini à 1. */
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser des compteurs CSS](/fr/docs/Web/CSS/Guides/Counter_styles/Using_counters)
- La propriété {{CSSxRef("counter-increment")}}
- La propriété {{CSSxRef("counter-reset")}}
- La règle {{CSSxRef("@counter-style")}}
- Les fonctions {{CSSxRef("counter()")}} et {{CSSxRef("counters()")}}
- La propriété {{CSSxRef("content")}}
- Le pseudo-élément {{CSSxRef("::marker")}}
- Le module [des listes et compteurs CSS](/fr/docs/Web/CSS/Guides/Lists)
- Le module [des styles de compteur CSS](/fr/docs/Web/CSS/Guides/Counter_styles)
