---
title: <rule-list>
slug: Web/CSS/Reference/Values/rule-list
l10n:
  sourceCommit: 3ee2355c3c90cf92c3119b82f8ebfa5d16c91c53
---

Le [type de donnée](/fr/docs/Web/CSS/Reference/Values/Data_types) [CSS](/fr/docs/Web/CSS) **`<rule-list>`** représente une séquence de **zéro ou plusieurs règles CSS**. Il est utilisé pour définir les endroits du CSS où plusieurs règles peuvent apparaître, comme le niveau supérieur d'une feuille de style ou à l'intérieur des règles @ de regroupement telles que `@media` ou `@supports`.

Une `<rule-list>` n'est pas écrite directement. Elle décrit la façon dont l'analyseur CSS collecte et interprète les règles à l'intérieur d'un bloc ou d'une feuille de style.

## Syntaxe

Une `<rule-list>` est définie comme une séquence de **zéro ou plusieurs**:

- **Règles de style** (par exemple, `p { color: red; }`).
- **Règles @ qualifiées** (par exemple, `@media (width < 600px) { ... }`).
- **Instructions ignorées** (par exemple, erreurs d'analyse gérées par l'analyseur, que celui-ci saute automatiquement).

Tous les espaces blancs, commentaires et constructions invalides ou malformées sont traités conformément aux règles de l'analyseur CSS.

## Description

Le type `<rule-list>` apparaît dans la spécification partout où le CSS est défini comme contenant une «&nbsp;liste de règles&nbsp;».

Les exemples incluent&nbsp;:

- Le **niveau supérieur** d'une feuille de style.
- Le corps des **règles @ de regroupement** comme `@media`, `@custom-media`, `@supports`, `@layer`, `@container`.
- Le contenu des **sélecteurs imbriqués**.

Même si les auteur·ice·s ne peuvent pas écrire explicitement `<rule-list>`, le comprendre est crucial pour interpréter la façon dont le CSS analyse les structures imbriquées, comment les règles invalides sont ignorées et comment la cascade se forme dans les blocs conditionnels.

## Exemples

### Une `<rule-list>` dans une feuille de style

La feuille de style suivante est traitée comme une `<rule-list>` contenant deux règles de style et une règle @.

```css
p {
  margin: 0;
}

h1 {
  font-size: 2rem;
}

@media (width < 600px) {
  body {
    background: lightgray;
  }
}
```

### Une `<rule-list>` à l'intérieur d'une règle `@media`

Le bloc contenu dans une règle `@media` est une `<rule-list>` contenant une ou plusieurs règles de style. L'exemple suivant contient deux règles de style.

```css
@media (prefers-color-scheme: dark) {
  main {
    background: black;
    color: white;
  }

  a {
    color: skyblue;
  }
}
```

### Règles invalides à l'intérieur d'une `<rule-list>`

La séquence de jetons invalide (`!invalid-rule`) est ignorée par l'analyseur. Le reste des règles constitue un `<rule-list>` valide.

```plain
body {
  color: black;
}

!invalid-rule

@supports (display: grid) {
  section {
    display: grid;
  }
}
```

## Spécifications

{{Specifications}}

## Voir aussi

- La règle @ {{CSSxRef("@supports")}}
- La règle @ {{CSSxRef("@media")}}
- La règle @ {{CSSxRef("@custom-media")}}
