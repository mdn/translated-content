---
title: Propriété CSS `counter-reset`
short-title: counter-reset
slug: Web/CSS/Reference/Properties/counter-reset
l10n:
  sourceCommit: a326384789bf2f13f96506d4e2fdb4688d873cd0
---

La propriété [CSS](/fr/docs/Web/CSS) **`counter-reset`** permet de créer des compteurs CSS nommés [compteurs CSS](/fr/docs/Web/CSS/Guides/Counter_styles/Using_counters) et d'initialiser leurs valeurs. Elle permet de créer à la fois des compteurs réguliers et inversés.

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
/* Valeur avec un mot-clé */
counter-reset: none;

/* Counters réguliers avec des valeurs initiales par défaut */
counter-reset: mon-compteur;
counter-reset: autre-compteur;

/* Counters réguliers avec une valeur initiale */
counter-reset: mon-compteur -3;
counter-reset: autre-compteur 15;

/* Counters inversés */
counter-reset: reversed(mon-compteur);
counter-reset: reversed(mon-compteur) 3;
counter-reset: reversed(autre-compteur) 15;

/* Plusieurs compteurs */
counter-reset: mon-compteur -3 autre-compteur 15;
counter-reset: reversed(pages) items 1 reversed(sections) 4;

/* Valeurs globales */
counter-reset: inherit;
counter-reset: initial;
counter-reset: revert;
counter-reset: revert-layer;
counter-reset: unset;
```

### Valeurs

Cette propriété est définie comme une liste de noms de compteurs ou de compteurs inversés séparés par des espaces, chacun pouvant être suivi d'un `<integer>` optionnel, ou du mot-clé `none`&nbsp;:

- {{CSSxRef("&lt;custom-ident&gt;")}}
  - : Définit le nom du compteur à créer et à initialiser. La notation fonctionnelle `reversed()` peut être utilisée pour créer un compteur inversé.
- {{CSSxRef("&lt;integer&gt;")}}
  - : Définit la valeur initiale à attribuer au compteur nouvellement créé.
    Si elle n'est pas définie, la valeur par défaut est `0` pour les compteurs réguliers. La valeur initiale des compteurs inversés est calculée automatiquement.
- `none`
  - : Définit qu'aucun compteur n'est créé.

## Description

La propriété `counter-reset` peut être utilisée pour créer et initialiser des [compteurs](/fr/docs/Web/CSS/Guides/Counter_styles/Using_counters) nommés ou des compteurs inversés afin de numéroter les éléments dans l'ordre croissant ou décroissant.

La valeur `none` peut être utilisée pour remplacer une déclaration `counter-reset` dans une règle ayant une spécificité inférieure.

> [!WARNING]
> Il existe [une différence entre les propriétés `counter-reset` et `counter-set`](/fr/docs/Web/CSS/Guides/Counter_styles/Using_counters#difference_entre_counter-set_et_counter-reset). Après avoir créé un compteur avec `counter-reset`, vous pouvez ajuster sa valeur avec la propriété {{CSSxRef("counter-set")}}. Cela peut sembler contre-intuitif car, malgré son nom, la propriété `counter-reset` crée et initialise des compteurs, tandis que la propriété `counter-set` réinitialise la valeur des compteurs existants.

Plusieurs noms de compteurs ou paires nom-valeur peuvent être séparés par des espaces. Pour les noms de compteurs, les compteurs réguliers utilisent le format `<counter-name>` et les compteurs inversés utilisent le format `reversed(<counter-name>)`, où `<counter-name>` est un {{CSSxRef("custom-ident", "&lt;custom-ident&gt;")}} ou `list-item` pour le compteur intégré {{HTMLElement("ol")}}.

### Valeurs initiales par défaut

Déclarer des compteurs réguliers et inversés sans inclure un entier permet de mettre en œuvre les deux schémas de numérotation les plus courants&nbsp;: compter à partir de `1` jusqu'au nombre d'éléments et compter à rebours du nombre d'éléments jusqu'à `1`, avec des incréments ou des décréments de `1`. En définissant une valeur initiale pour un compteur nommé, vous pouvez modifier sa valeur de départ. L'incrément ou le décrément peut être ajusté en utilisant la propriété {{CSSxRef("counter-increment")}}.

L'exemple suivant crée trois compteurs. Les compteurs `chapitre` et `page` sont définis à la valeur initiale par défaut de `0`, tandis que `section` est défini à `4`&nbsp;:

```css
h1 {
  counter-reset: chapitre section 4 page;
}
```

Les compteurs inversés créés sans un `<integer>` ont une valeur initiale calculée automatiquement. Le navigateur compte le nombre d'éléments dans l'ensemble, la valeur initiale calculée garantissant que si la propriété `counter-increment` est définie sur `-1`, décrémentant ainsi le compteur nommé de `1` pour chaque élément, le compteur est à `1` sur le dernier élément de l'ensemble.

L'exemple suivant crée deux compteurs inversés, `chapitre` et `section`, et un compteur régulier, `pages`. Le compteur `section` commence à `10`, et `pages` utilise la valeur initiale par défaut de `0`. La valeur initiale du compteur `chapitre` est calculée automatiquement. Le compteur est décrémenté de `1` chaque fois qu'un `<h2>` est rencontré, donc sa valeur est `1` sur le dernier `<h2>`.

```css
h1 {
  counter-reset: reversed(chapitre) reversed(section) 10 pages;
}
h2 {
  counter-increment: chapitre -1;
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

Nous incluons une liste ordonnée ({{HTMLElement("ol")}}) contenant cinq éléments de liste ({{HTMLElement("li")}}).

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

{{EmbedLiveSample("Remplacer le compteur `list-item`", 140, 150)}}

Le premier élément est numéroté `4`. Ce qui revient au même effet que d'écrire [`<ol start="4">`](/fr/docs/Web/HTML/Reference/Elements/ol#start) en HTML.

### Utiliser un compteur inversé

Dans cet exemple, la fonction `reversed()` est utilisée pour créer un compteur inversé nommé `priorite` qui numérote cinq tâches.

#### HTML

Nous incluons une liste non ordonnée ({{HTMLElement("ul")}}) contenant cinq éléments de liste ({{HTMLElement("li")}}).

```html
<ul class="stack">
  <li>Tâche A</li>
  <li>Tâche B</li>
  <li>Tâche C</li>
  <li>Tâche D</li>
  <li>Tâche E</li>
</ul>
```

#### CSS

Nous créons un compteur inversé nommé `priorite` sur le `<ul>` et supprimons les puces par défaut. Nous décrémentons le compteur de `1` sur chaque `<li>`. Nous utilisons ensuite du contenu généré pour afficher la valeur du compteur avant le contenu de chaque élément de liste.

```css
.stack {
  counter-reset: reversed(priorite);
  list-style: none;
}
li {
  counter-increment: priorite -1;
}
li::before {
  content: counter(priorite) ". ";
}
```

```css hidden
@supports not (counter-reset: reversed(priorite)) {
  body::before {
    content: "Votre navigateur ne prend pas en charge la fonction `reversed()`.";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1rem 0;
  }
}
```

#### Résultat

{{EmbedLiveSample("Utiliser un compteur inversé", 140, 150)}}

Les éléments sont numérotés dans l'ordre inverse de `5` à `1`. Notez que la valeur initiale du compteur n'est pas définie. Le navigateur calcule automatiquement la valeur initiale au moment de la mise en page.

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
