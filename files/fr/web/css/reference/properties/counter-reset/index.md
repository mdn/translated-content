---
title: counter-reset
slug: Web/CSS/Reference/Properties/counter-reset
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

La propriété [CSS](/fr/docs/Web/CSS) **`counter-reset`** permet de créer des compteurs CSS nommés [compteurs CSS](/fr/docs/Web/CSS/Guides/Counter_styles/Using_counters) et de les initialiser à une valeur précise. Elle permet de créer des compteurs qui comptent à partir de un jusqu'au nombre d'éléments, ainsi que ceux qui comptent à rebours du nombre d'éléments jusqu'à un.

{{InteractiveExample("Démonstration CSS&nbsp;: counter-reset")}}

```css interactive-example-choice
counter-reset: none;
```

```css interactive-example-choice
counter-reset: chapter-count 0;
```

```css interactive-example-choice
counter-reset: chapter-count;
```

```css interactive-example-choice
counter-reset: chapter-count 5;
```

```css interactive-example-choice
counter-reset: chapter-count -5;
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
  counter-reset: chapter-count;
}

#example-element {
  background-color: lightblue;
  color: black;
}

h2 {
  counter-increment: chapter-count;
  font-size: 1em;
}

h2::before {
  content: "Chapitre " counters(chapter-count, ".") " : ";
}
```

## Syntaxe

```css
/* On réinitialise nom-compteur à 0 */
counter-reset: nom-compteur;

/* On réinitialise nom-compteur à -3 */
counter-reset: nom-compteur -3;

/* Crée un compteur inversé avec une valeur initiale par défaut */
counter-reset: reversed(nom-compteur);

/* Crée un compteur inversé et l'initialise à "-1" */
counter-reset: reversed(nom-compteur) -1;

/* Crée des compteurs inversés et réguliers en même temps */
counter-reset: reversed(pages) 10 elements 1 reversed(sections) 4;

/* On annule toute réinitialisation qui aurait pu être déclarée avec des règles moins spécifiques */
counter-reset: none;

/* Valeurs globales */
counter-reset: inherit;
counter-reset: initial;
counter-reset: revert;
counter-reset: revert-layer;
counter-reset: unset;
```

### Valeurs

La propriété `counter-reset` accepte une liste d'un ou plusieurs noms de compteurs séparés par des espaces ou le mot-clé `none`. Pour les noms de compteurs, les compteurs réguliers utilisent le format `<counter-name>`, et les compteurs inversés utilisent `reversed(<counter-name>)`, où `<counter-name>` est un {{CSSxRef("&lt;custom-ident&gt;")}} ou `list-item` pour le compteur intégré de {{HTMLElement("ol")}}. Chaque nom de compteur peut être suivi en option d'un `<integer>` pour définir sa valeur initiale.

- {{CSSxRef("&lt;custom-ident&gt;")}}
  - : Définit le nom du compteur à créer et à initialiser en utilisant le format {{CSSxRef("&lt;custom-ident&gt;")}}. La notation fonctionnelle `reversed()` peut être utilisée pour marquer le compteur comme inversé.
- {{CSSxRef("&lt;integer&gt;")}}
  - : La valeur avec laquelle on souhaite réinitialiser le compteur pour chaque occurrence de l'élément.
    La valeur par défaut est `0`.
- `none`
  - : Un mot-clé indiquant qu'il ne faut pas réinitialiser le compteur.
    Cette valeur peut être utilisée pour masquer des réinitialisations provenant de règles moins spécifiques.

## Description

La propriété `counter-reset` permet de créer à la fois des compteurs réguliers et, dans les navigateurs qui le prennent en charge, des compteurs inversés. Vous pouvez créer plusieurs compteurs réguliers et inversés, chacun étant séparé par un espace. Les compteurs peuvent être un nom seul ou une paire nom-valeur séparée par un espace.

> [!WARNING]
> Il existe [une différence entre les propriétés `counter-reset` et `counter-set`](/fr/docs/Web/CSS/Guides/Counter_styles/Using_counters#difference_entre_counter-set_et_counter-reset). Après avoir créé un compteur avec `counter-reset`, vous pouvez ajuster sa valeur avec la propriété {{CSSxRef("counter-set")}}. Cela peut sembler contre-intuitif car, malgré son nom, la propriété `counter-reset` sert à créer et initialiser des compteurs, tandis que la propriété `counter-set` sert à réinitialiser la valeur d'un compteur existant.

Définir `counter-increment: none` sur un sélecteur avec une spécificité plus élevée annule la création du compteur nommé définie sur des sélecteurs de spécificité inférieure.

### Valeurs initiales par défaut

Les valeurs initiales par défaut des compteurs réguliers et inversés permettent de mettre en œuvre les deux schémas de numérotation les plus courants&nbsp;: compter à partir de un jusqu'au nombre d'éléments, et compter à rebours du nombre d'éléments jusqu'à un. En incluant une valeur de compteur pour un compteur nommé, votre compteur peut compter vers le haut ou vers le bas, en commençant à une valeur entière.

Les compteurs réguliers ont pour valeur initiale `0` si aucune valeur de réinitialisation n'est fournie. Par défaut, les compteurs réguliers sont incrémentés de un, ce qui peut être ajusté avec la propriété {{CSSxRef("counter-increment")}}.

```css
h1 {
  /* Crée les compteurs "chapitre" et "page" et les définit à leur valeur
    initiale par défaut.
    Crée le compteur "section" et le définit à "4". */
  counter-reset: chapitre section 4 page;
}
```

### Compteurs inversés

Lorsque vous créez des compteurs inversés sans valeur, le compteur commence avec la valeur égale au nombre d'éléments du groupe, en comptant à rebours pour que le dernier élément du groupe soit `1`. Par défaut, les compteurs inversés sont décrémentés de un&nbsp;; cela peut aussi être modifié avec la propriété `counter-increment`.

```css
h1 {
  /* Crée les compteurs inversés "chapitre" et "section".
    Définit "chapitre" au nombre d'éléments et "section" à "10".
    Crée le compteur "pages" avec la valeur initiale par défaut. */
  counter-reset: reversed(chapitre) reversed(section) 10 pages;
}
```

### Compteur intégré `list-item`

Les listes ordonnées ({{HTMLElement("ol")}}) disposent de compteurs intégrés `list-item` qui contrôlent leur numérotation. Ces compteurs augmentent ou diminuent automatiquement de un à chaque élément de la liste. La propriété `counter-reset` peut être utilisée pour réinitialiser les compteurs `list-item`. Comme pour les autres compteurs, vous pouvez remplacer la valeur d'incrémentation par défaut des compteurs `list-item` en utilisant la propriété {{CSSxRef("counter-increment")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Remplacer le compteur `list-item`

Dans cet exemple, la propriété `counter-reset` est utilisée pour définir une valeur de départ pour un compteur implicite `list-item`.

#### HTML

```html
<ol>
  <li>Premier</li>
  <li>Deuxième</li>
  <li>Troisième</li>
  <li>Quatrième</li>
  <li>Cinquième</li>
</ol>
```

#### CSS

Avec `counter-reset`, vous définissez le compteur implicite `list-item` pour qu'il commence à une valeur différente de la valeur par défaut `1`&nbsp;:

```css
ol {
  counter-reset: list-item 3;
}
```

#### Résultat

{{EmbedLiveSample("Remplacer le compteur `list-item`", 140, 300)}}

Avec `counter-reset`, vous définissez le compteur implicite `list-item` pour commencer à compter à partir de `3` pour chaque `ol`. Ainsi, le premier élément sera numéroté 4, le deuxième sera numéroté 5, etc., ce qui revient au même effet que d'écrire [`<ol start="4">`](/fr/docs/Web/HTML/Reference/Elements/ol#start) en HTML.

### Utiliser un compteur inversé

Dans l'exemple suivant, un compteur inversé nommé «&nbsp;priorite&nbsp;» est déclaré. Ce compteur est utilisé pour numéroter cinq tâches.

```html
<ul class="stack">
  <li>Tâche A</li>
  <li>Tâche B</li>
  <li>Tâche C</li>
  <li>Tâche D</li>
  <li>Tâche E</li>
</ul>
```

```css hidden
@supports not (counter-reset: reversed(priorite)) {
  .stack {
    display: none;
  }
  body::after {
    content: "Votre navigateur ne prend pas encore en charge les compteurs inversés.";
  }
}
```

```css
li::before {
  content: counter(priorite) ". ";
  counter-increment: priorite -1;
}

.stack {
  counter-reset: reversed(priorite);
  list-style: none;
}
```

{{EmbedLiveSample("Utiliser un compteur inversé", 140, 150)}}

Dans le résultat, les éléments sont numérotés dans l'ordre inverse de 5 à 1. Remarquez que dans le code, la valeur initiale du compteur n'est pas définie. Le navigateur calcule automatiquement la valeur initiale au moment de la mise en page en utilisant la valeur d'incrémentation du compteur.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser des compteurs CSS](/fr/docs/Web/CSS/Guides/Counter_styles/Using_counters)
- La propriété {{CSSxRef("counter-increment")}}
- La propriété {{CSSxRef("counter-set")}}
- La règle {{CSSxRef("@counter-style")}}
- Les fonctions {{CSSxRef("counter()")}} et {{CSSxRef("counters()")}}
- La propriété {{CSSxRef("content")}}
- Le pseudo-élément {{CSSxRef("::marker")}}
- Le module [des listes et compteurs CSS](/fr/docs/Web/CSS/Guides/Lists)
- Le module [des styles de compteur CSS](/fr/docs/Web/CSS/Guides/Counter_styles)
