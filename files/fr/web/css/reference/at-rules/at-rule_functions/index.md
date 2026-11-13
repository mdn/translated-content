---
title: Fonctions de règle @ CSS
short-title: Fonctions de règle @
slug: Web/CSS/Reference/At-rules/At-rule_functions
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Les **fonctions de [règle @](/fr/docs/Web/CSS/Guides/Syntax/At-rules) [CSS](/fr/docs/Web/CSS)** sont des instructions de règle @ qui représentent des règles complexes ou peuvent invoquer un traitement spécial des données ou des calculs.

## Syntaxe

```plain
@identifier function([argument]? [, argument]!) {
}
```

La syntaxe commence par le symbole arobase `@` et un identifiant de règle @, tel que `import`. Cela est suivi par le **nom de la fonction de règle @**, tel que `url`, suivi d'une paire de parenthèses ouvrantes et fermantes. Un ou plusieurs arguments sont définis à l'intérieur des parenthèses.

Certaines fonctions de règle @ peuvent prendre plusieurs arguments, qui sont formatés de manière similaire aux valeurs des propriétés CSS. Les espaces blancs sont autorisés, mais ils sont optionnels à l'intérieur des parenthèses. Plusieurs arguments peuvent être séparés par une virgule ou un espace.

## Fonctions @import

La règle {{CSSxRef("@import")}} est utilisée pour importer des styles à partir d'autres feuilles de style.

- {{CSSxRef("@import", "@import url()")}}
  - : Importe une feuilles de style à partir de l'URL définie.
- {{CSSxRef("@import", "@import supports()")}}
  - : Importe une feuilles de style en fonction de la prise en charge du navigateur.
- [`@import layer()`](/fr/docs/Web/CSS/Reference/At-rules/@import/layer_function)
  - : Importe une feuille de style dans une couche de cascade définie.

## Fonctions @supports

La règle {{CSSxRef("@supports")}} vérifie la prise en charge par le navigateur de la fonctionnalité CSS définie, puis applique le style CSS.

- {{CSSxRef("@supports", "@supports selector()")}}
  - : Applique les règles CSS après avoir vérifié la prise en charge par le navigateur de la syntaxe du sélecteur défini.
- {{CSSxRef("@supports", "@supports font-tech()")}}
  - : Applique les règles CSS après avoir vérifié la prise en charge par le navigateur de la technologie de police définie.
- {{CSSxRef("@supports", "@supports font-format()")}}
  - : Applique les règles CSS après avoir vérifié la prise en charge par le navigateur du format de police défini.

## Fonctions @namespace

La règle {{CSSxRef("@namespace")}} est utilisée pour définir les espaces de noms XML à utiliser dans une feuille de style CSS.

- {{CSSxRef("@namespace", "@namespace url()")}}
  - : Définit un espace de noms XML à partir de l'URL définie.

## Fonctions @container

La règle {{CSSxRef("@container")}} est utilisée pour définir des styles pour un contexte de conteneur.

- {{CSSxRef("@container", "@container style()")}}
  - : Définit le style du contexte de conteneur.

## Voir aussi

- [Les règles @ CSS](/fr/docs/Web/CSS/Reference/At-rules)
- Le module [de syntaxe CSS](/fr/docs/Web/CSS/Guides/Syntax)
