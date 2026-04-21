---
title: Propriété CSS `quotes`
short-title: quotes
slug: Web/CSS/Reference/Properties/quotes
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`quotes`** définit la manière dont le navigateur doit afficher les guillemets qui sont automatiquement ajoutés à l'élément HTML {{HTMLElement("q")}} ou ajoutés en utilisant les valeurs `open-quotes` ou `close-quotes` (ou omis en utilisant les valeurs `no-open-quote` et `no-close-quote`) de la propriété CSS {{CSSxRef("content")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: quotes")}}

```css interactive-example-choice
quotes: none;
```

```css interactive-example-choice
quotes: initial;
```

```css interactive-example-choice
quotes: "'" "'";
```

```css interactive-example-choice
quotes: "„" "“" "‚" "‘";
```

```css interactive-example-choice
quotes: "«" "»" "‹" "›";
```

```html interactive-example
<section id="default-example">
  <q id="example-element"
    >Montrez-nous les frères aux pouvoirs merveilleux, qu'ils sortent
    publiquement—et nous croirons en eux&nbsp;!</q
  >
</section>
```

```css interactive-example
q {
  font-size: 1.2rem;
}
```

Les navigateurs insèrent des guillemets à l'ouverture et à la fermeture des éléments `<q>` et pour les valeurs `open-quote` et `close-quote` de la propriété `content`. Chaque guillemet ouvrant ou fermant est remplacé par l'une des chaînes de caractères de la valeur de `quotes`, en fonction de la profondeur d'imbrication, ou, si `quotes` est explicitement défini sur ou résout autrement à `auto`, les guillemets utilisés dépendent de la langue.

## Syntaxe

```css
/* Valeur avec un mot-clé */
quotes: none;
quotes: auto;

/* Valeurs de type <string> */
quotes: "«" "»"; /* On utilise les guillemets français pour ouvrir et fermer une citation  */
quotes: "«" "»" "‹" "›"; /* On définit deux niveaux de citation */

/* Valeurs globales */
quotes: inherit;
quotes: initial;
quotes: revert;
quotes: revert-layer;
quotes: unset;
```

### Valeurs

- `none`
  - : Les valeurs `open-quote` et `close-quote` de la propriété {{CSSxRef("content")}} n'entraînent aucune marque de citation, comme si `no-open-quote` et `no-close-quote` étaient définis, respectivement.
- `auto`
  - : Les guillemets typographiquement appropriés pour la langue héritée (c'est-à-dire via l'attribut [`lang`](/fr/docs/Web/HTML/Reference/Global_attributes/lang) défini sur le parent ou un autre ancêtre).
- {{CSSxRef("&lt;string&gt;")}}
  - : Définit une ou plusieurs paires de valeurs de guillemets pour les guillemets ouvrants et fermants. Dans chaque paire, le premier guillemet est utilisé comme valeur pour `open-quote` et le second comme valeur pour `close-quote`.

    La première paire représente le niveau extérieur de la citation. La deuxième paire, si elle est présente, représente le premier niveau imbriqué. La paire suivante est utilisée pour les niveaux doublement imbriqués, et ainsi de suite. Si la profondeur d'imbrication des citations est supérieure au nombre de paires, la dernière paire de la valeur `quotes` est répétée.

    La paire de guillemets utilisée dépend de la profondeur, ou du niveau d'imbrication, des guillemets&nbsp;: le nombre d'occurrences de guillemets `<q>` ou `open-quote` (ou `no-open-quote`) dans tout le texte généré avant l'occurrence actuelle, moins le nombre d'occurrences de guillemets fermants, soit sous forme de `</q>`, `close-quote`, ou `no-close-quote`. Si la profondeur est de 0, la première paire est utilisée, si la profondeur est de 1, la deuxième paire est utilisée, etc.

> [!NOTE]
> La valeur `open-quote` de la propriété CSS `content` incrémente le niveau de citation et `no-close-quote` le décrémente, mais n'insère pas de guillemets.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Guillemets par défaut et surcharge

Cet exemple compare les guillemets par défaut fournis par l'élément HTML sémantique `<q>` à ceux que nous définissons en utilisant la propriété CSS `quotes`.

La valeur par défaut de `quotes` est [`auto`](#auto). Dans cet exemple, le premier élément de la liste a `quotes: auto` défini, donc il obtient les guillemets par défaut pour la langue définie&nbsp;; c'est la même chose que si aucune propriété `quotes` n'était définie. Le deuxième élément de la liste définit quels guillemets utiliser pour les citations et les citations imbriquées&nbsp;; ces guillemets seront utilisés pour les descendants d'un élément avec la classe `specialQuotes` indépendamment de la langue (comme pour toute valeur de l'attribut [`lang`](/fr/docs/Web/HTML/Reference/Global_attributes/lang) définie).

#### HTML

```html
<ul>
  <li>
    Guillemets par défaut&nbsp;:
    <p lang="ru">
      <q
        >Митч Макконнелл - это человек, который знает о России и ее влиянии
        меньше, чем даже Дональд Трамп, и <q>я ничего не знаю</q>, сказал
        Трамп</q
      >, - писал Раджу.
    </p>
  </li>
  <li class="specialQuotes">
    Définis par la propriété <code>quotes</code>&nbsp;:
    <p lang="ru">
      <q
        >Митч Макконнелл - это человек, который знает о России и ее влиянии
        меньше, чем даже Дональд Трамп, и <q>я ничего не знаю</q>, сказал
        Трамп</q
      >, - писал Раджу.
    </p>
  </li>
</ul>
```

#### CSS

```css
li {
  quotes: auto;
}

.specialQuotes {
  quotes: "“" "”" "‘" "’";
}
```

#### Résultat

{{EmbedLiveSample("Guillemets par défaut et surcharge", "100%", 200)}}

Par défaut, le navigateur fournit des guillemets spécifiques à la langue lorsque l'élément `<q>` est utilisé. Si la propriété `quotes` est définie, les valeurs fournies remplacent les valeurs par défaut du navigateur. Notez que la propriété `quotes` est héritée. La propriété `quotes` est définie sur le `<li>` avec la classe `specialQuotes`, mais les guillemets sont appliqués aux éléments `<q>`.

On notera que chaque guillemets ouvrant et fermant est remplacé par l'une des chaînes de caractères des valeurs de guillemets, en fonction de la profondeur de l'imbrication.

### Guillemets automatiques

La valeur par défaut de `quotes` est `auto`. Cet exemple fonctionne sans qu'il soit nécessaire de la définir explicitement.

#### HTML

```html
<ul>
  <li lang="fr">
    <q>Ceci est une citation française.</q>
  </li>
  <li lang="ru">
    <q>Это русская цитата</q>
  </li>
  <li lang="de">
    <q>Dies ist ein deutsches Zitat</q>
  </li>
  <li lang="en">
    <q>This is an English quote.</q>
  </li>
</ul>
```

#### CSS

```css
q {
  quotes: auto;
}
li:not(:last-of-type) {
  border-bottom: 1px solid;
}
```

```css hidden
li {
  padding: 0.5em 0;
}
```

#### Résultat

{{EmbedLiveSample("Guillemets automatiques", "100%", 200)}}

Notez que l'attribut [`lang`](/fr/docs/Web/HTML/Reference/Global_attributes/lang) a été placé sur un ancêtre de l'élément `<q>`, et non sur le `<q>` lui-même. Si une citation est dans une langue différente de celle du texte environnant, il est d'usage de citer le texte avec les guillemets de la langue du texte environnant, et non de la langue de la citation.

### Avec contenu généré

Dans cet exemple, au lieu d'utiliser l'élément `<q>`, nous ajoutons des guillemets aux pseudo-éléments {{CSSxRef("::before")}} et {{CSSxRef("::after")}} avant et après le contenu de chaque élément avec un nom de classe spécifique.

#### HTML

```html
<p>
  <span class="quote">Je devrais utiliser des guillemets</span>, pensais-je.
  <span class="quote"
    >Mais pourquoi utiliser des éléments HTML sémantiques quand je peux ajouter
    des classes à <span class="quote"> TOUTES LES CHOSES&nbsp;! </span>&nbsp;?
  </span>
</p>
```

#### CSS

```css
.quote {
  quotes: '"' '"' "'" "'";
}
.quote::before {
  content: open-quote;
}
.quote::after {
  content: close-quote;
}
```

#### Résultat

{{EmbedLiveSample("Avec contenu généré", "100%", 80)}}

### Texte comme guillemets et guillemets vides

Cet exemple montre comment utiliser autre chose que des guillemets comme valeurs `<string>`. L'open-quote indique le locuteur et, comme il n'y a pas de guillemet ouvrant, le close-quote est vide. (Mélanger une `<string>` avec un mot-clé énuméré pour créer une paire n'est pas pris en charge). Nous définissons `auto` pour les guillemets imbriqués. Ces guillemets imbriqués seront encadrés par ce que la langue dicte comme normal pour les guillemets imbriqués.

#### HTML

```html
<ul>
  <li><q data-speaker="karen">Bonjour</q></li>
  <li><q data-speaker="chad">Salut</q></li>
  <li><q data-speaker="karen">cette conversation n'est pas intéressante</q></li>
  <li>
    <q data-speaker="pat"
      >QUOI&nbsp;! <q>Salut</q>&nbsp;? Sérieusement&nbsp;? au moins
      <q>bonjour</q> fait sept lettres.</q
    >
  </li>
</ul>
```

#### CSS

```css
[data-speaker="karen" i] {
  quotes: "Elle a dit : " "";
}
[data-speaker="chad" i] {
  quotes: "Il a dit : " "";
}
[data-speaker="pat" i] {
  quotes: "Ils ont dit : " "";
}
[data-speaker] q {
  quotes: auto;
}
```

```css hidden
li {
  padding: 0.5em 0;
}
```

#### Résultat

{{EmbedLiveSample("Texte comme guillemets et guillemets vides", "100%", 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le module [de contenu généré CSS](/fr/docs/Web/CSS/Guides/Generated_content)
- La propriété {{CSSxRef("contain")}}
- La propriété {{CSSxRef("content")}}
