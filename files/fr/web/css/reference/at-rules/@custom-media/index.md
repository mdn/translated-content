---
title: "@custom-media"
slug: Web/CSS/Reference/At-rules/@custom-media
l10n:
  sourceCommit: dd868507df863ab4f37d53c960c76e20e9ee365f
---

{{CSSRef}}{{SeeCompatTable}}

La [règle @](/fr/docs/Web/CSS/Reference/At-rules) [CSS](/fr/docs/Web/CSS) **`@custom-media`** permet de définir des alias pour des [requêtes média](/fr/docs/Web/CSS/Guides/Media_queries) longues ou complexes. Au lieu de répéter la même `<media-query-list>` codée en dur dans plusieurs règles [`@media`](/fr/docs/Web/CSS/Reference/At-rules/@media), elle peut être définie une fois dans une règle `@custom-media` et référencée dans toute la feuille de style selon les besoins.

## Syntaxe

```css
@custom-media <extension-name> [<media-query-list> | true | false ];

@custom-media --media-query-name (width < 1200px);
@custom-media --media-query-name (width < 1200px), (orientation: portrait);
```

### Valeurs

- `<extension-name>`
  - : Un type [`<dashed-ident>`](/fr/docs/Web/CSS/Reference/Values/dashed-ident)&nbsp;; le nom identifiant la requête média personnalisée.
- Valeur représentée
  - : La valeur associée à la requête média personnalisée. Les valeurs possibles sont&nbsp;:
    - `<media-query-list>`
      - : Une [liste de valeurs `<media-query>`](/fr/docs/Web/CSS/Reference/At-rules/@media#description) séparées par des virgules.
    - `true`
      - : La valeur de `@custom-media` est toujours équivalente à vrai.
    - `false`
      - : La valeur de `@custom-media` est toujours équivalente à faux.

## Description

Lors de la création d'interfaces adaptatives, la même condition média doit souvent être répétée dans plusieurs règles [`@media`](/fr/docs/Web/CSS/Reference/At-rules/@media), parfois dans différents fichiers et équipes. Dupliquer les requêtes média augmente le risque d'erreurs, complique la refactorisation et génère une surcharge de maintenance inutile. À chaque modification d'une requête média, il faut retrouver et mettre à jour manuellement chaque occurrence — un processus sujet aux erreurs et difficile à suivre dans de grandes bases de code.

La règle `@custom-media` résout ce problème en permettant de définir des **alias nommés** pour les requêtes média. Au lieu de répéter la requête complète partout, vous déclarez la condition une fois comme requête média personnalisée et référencez son alias dans toutes vos feuilles de style. Ainsi, la mise à jour de la requête sous-jacente ne nécessite qu'une seule modification à un seul endroit.

Les requêtes média personnalisées peuvent être composées à partir d'autres en référant leurs noms d'alias dans les fonctionnalités de requête média. Cela permet de construire des conditions plus expressives et imbriquées. Cependant, une requête média personnalisée ne peut pas se référer à elle-même, ni faire partie d'une chaîne circulaire de références. Toute dépendance circulaire — directe ou indirecte — invalide toutes les requêtes média personnalisées impliquées dans cette boucle.

Si plusieurs règles `@custom-media` définissent le même nom `<dashed-ident>`, seule la dernière déclaration dans l'ordre du code est prise en compte. Toutes les déclarations précédentes sont ignorées.

### Évaluation des requêtes média avec des opérateurs logiques

Les requêtes média personnalisées acceptent toute la gamme des opérateurs logiques CSS — `not`, `and` et `or` (séparés par des virgules ou avec le mot-clé `or`).

Comme la valeur d'une `@custom-media` est simplement une `<media-query-list>` normale, vous pouvez combiner, inverser ou regrouper les conditions exactement comme dans une règle `@media` classique.

#### Utilisation de l'opérateur `not`

L'opérateur `not` inverse toute la condition média. Cela est utile si vous souhaitez qu'une règle s'applique uniquement lorsqu'une condition spécifique est équivalente à faux.

```css
@custom-media --no-script not (script);

@media (--no-script) {
}
```

#### Utilisation de l'opérateur `and`

L'opérateur `and` permet de combiner plusieurs conditions qui doivent toutes être équivalentes à vrai.

```css
@custom-media --medium-screen (min-width: 40em) and (max-width: 60em);

@media (--medium-screen) {
}
```

Cet alias ne correspond que lorsque la zone d'affichage (<i lang="en">viewport</i> en anglais) est comprise dans la plage de largeur spécifiée.

#### Utilisation de l'opérateur `or`

L'opérateur logique `or` (ou son alias par virgule) crée une requête média qui correspond si l'une des conditions listées est équivalente à vrai.

```css
@custom-media --screen-or-print-1 screen, print;
@custom-media --screen-or-print-2 screen or print;

@media (--screen-or-print-1) {
}

@media (--screen-or-print-2) {
}
```

Les deux alias sont identiques. Ils sont activés pour les environnements écran et impression.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Mettre à jour plusieurs requêtes média

Dans cet exemple, la règle `@custom-media` est utilisée sur un site adaptatif qui utilise un point de rupture particulier à plusieurs endroits&nbsp;:

```css
@custom-media --narrow-window (width < 32em);

@media (--narrow-window) {
}

@media (--narrow-window) and (hover) {
}

@media (--narrow-window) and (orientation: portrait) {
}
```

Si le point de rupture doit être modifié, il peut être mis à jour à un seul endroit pour ajuster toutes les requêtes média dépendantes sur l'ensemble du site.

### Grouper plusieurs points de rupture adaptatifs

Ici, la règle `@custom-media` est utilisée pour définir plusieurs points de rupture en un seul endroit, ce qui améliore la maintenabilité et simplifie la gestion du design adaptatif sur plusieurs feuilles de style&nbsp;:

```css
/* general.css */

@custom-media --mobile-screen (width < 480px);
@custom-media --tablet-screen (width < 768px);
@custom-media --laptop-screen (width < 1024px);
@custom-media --desktop-screen (width < 1440px);
@custom-media --widescreen (width > 1441px);
```

```css
/* layout.css */

.container {
  padding: 1rem;
}

@media (--mobile-screen) {
  .container {
    padding: 0.5rem;
  }
}

@media (--laptop-screen) {
  .container {
    max-width: 1200px;
  }
}

@media (--widescreen) {
  .container {
    max-width: 1400px;
    padding: 2rem;
  }
}
```

```css
/* typography.css */

@media (--tablet-screen) {
  .container {
    font-size: 0.9rem;
  }
}

@media (--laptop-screen) {
  .container {
    font-size: 1rem;
  }
}

@media (--widescreen) {
  .container {
    font-size: 1.1rem;
  }
}
```

Grouper tous les points de rupture en un seul endroit facilite la maintenance du design adaptatif. Lorsqu'un point de rupture doit être ajusté, il suffit d'une seule mise à jour de la définition associée à `@custom-media` pour garantir la cohérence sur toutes les feuilles de style.

### Utiliser les mots-clés `true` et `false`

L'exemple suivant montre comment les mots-clés `true` et `false` peuvent être utilisés avec `@custom-media` pour créer des requêtes média qui correspondent toujours ou jamais, respectivement.

```css
@custom-media --enabled true;
@custom-media --disabled false;

@media (--enabled) {
  /* Ces styles s'appliquent toujours */
  body {
    background-color: blue;
  }
}

@media (--disabled) {
  /* Ces styles ne s'appliquent jamais */
  body {
    background-color: red;
  }
}
```

Cela peut être utile pour des drapeaux de fonctionnalités ou une logique conditionnelle dans les feuilles de style.

### Remplacer des règles `@custom-media` existantes

Dans cet exemple, une règle `@custom-media` est remplacée par une autre règle `@custom-media` utilisant le même nom `<dashed-ident>`.

```css
@custom-media --mobile-breakpoint (width < 320px);

@media (--mobile-breakpoint) {
  .container {
    grid-template-columns: 2fr 1fr;
  }
}

@custom-media --mobile-breakpoint (width < 480px);
```

La définition initiale de `--mobile-breakpoint` est remplacée et donc ignorée. La dernière déclaration devient la valeur active utilisée par toutes les références à cette requête média personnalisée.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La règle {{CSSxRef("@media")}}
- La règle {{CSSxRef("@import")}}
- [Design adaptatif](/fr/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)
- [Module des requêtes média CSS](/fr/docs/Web/CSS/Guides/Media_queries)
