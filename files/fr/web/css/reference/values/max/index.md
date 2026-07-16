---
title: Fonction CSS `max()`
short-title: max()
slug: Web/CSS/Reference/Values/max
l10n:
  sourceCommit: 6857a53b4ef756a062310b555e61f2ec722a2441
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`max()`** permet d'obtenir la plus grande valeurs parmi une liste d'expressions, séparées par des virgules afin d'utiliser ce maximum comme valeur d'une propriété CSS. La fonction `max()` peut être utilisée à tout endroit où une valeur de type {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}} ou {{CSSxRef("&lt;integer&gt;")}} est autorisée.

{{InteractiveExample("Démonstration CSS&nbsp;: max()")}}

```css interactive-example-choice
width: max(20vw, 400px);
```

```css interactive-example-choice
width: max(20vw, 100px);
```

```css interactive-example-choice
width: max(5vw, 100px);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    <img
      alt="Logo de Firefox"
      class="logo"
      src="/shared-assets/images/examples/firefox-logo.svg" />
  </div>
</section>
```

Dans ce premier exemple montré ci-dessus, la largeur est d'au moins 400px, mais est plus large sur la zone d'affichage (<i lang="en">viewport</i> en anglais) est supérieure à 2000px (dans ce cas, 1vw serait 20px, donc 20vw serait 400px). Cette technique utilise une unité absolue pour définir une valeur minimale fixe pour la propriété, et une unité relative pour permettre à la valeur de croître afin de s'adapter aux zones d'affichage plus larges.

## Syntaxe

```css
max(1, 2, 3)
max(1px, 2px, 3px)
```

### Paramètres

La fonction `max()` prend un ou plusieurs paramètres séparés par des virgules, et utilise la valeur la plus grande (la plus positive) comme valeur de la propriété à laquelle elle est assignée.

Les expressions peuvent être des expressions mathématiques (utilisant des opérateurs arithmétiques), des valeurs littérales ou d'autres expressions, telles que {{CSSxRef("attr()")}}, qui évaluent à un type d'argument valide (comme {{CSSxRef("&lt;length&gt;")}}), ou des fonctions `min()` et `max()` imbriquées.

Vous pouvez utiliser différentes unités pour chaque valeur de votre expression. Vous pouvez également utiliser des parenthèses pour établir l'ordre des calculs si nécessaire.

### Notes

- Les expressions mathématiques impliquant des pourcentages pour les largeurs et hauteurs des colonnes de tableau, des groupes de colonnes de tableau, des lignes de tableau, des groupes de lignes de tableau et des cellules de tableau dans les tableaux à disposition automatique et fixe _peuvent_ être traitées comme si `auto` avait été défini.
- Il est permis d'imbriquer les fonctions `min()` et `max()` comme valeurs d'expression. Les expressions sont des expressions mathématiques complètes, vous pouvez donc utiliser l'addition, la soustraction, la multiplication et la division directement sans utiliser la fonction `calc()` elle-même.
- L'expression peut être des valeurs combinant les opérateurs d'addition ( + ), de soustraction ( - ), de multiplication ( \* ) et de division ( / ), en utilisant les règles de priorité des opérateurs standard. Assurez-vous de mettre un espace de chaque côté des opérandes + et -. Les opérandes de l'expression peuvent être n'importe quelle valeur de syntaxe \<length>.
- Vous pouvez (et devez souvent) combiner les valeurs `min()` et `max()`, ou utiliser `max()` dans une fonction `clamp()` ou `calc()`.

## Syntaxe formelle

{{CSSSyntax}}

## Accessibilité

Lorsque `max()` est utilisé pour contrôler la taille du texte, assurez-vous que le texte est toujours suffisamment grand pour être lisible. Une suggestion est d'utiliser la fonction {{CSSxRef("min()")}} imbriquée dans un `max()` qui a comme deuxième valeur une [unité de longueur relative](/fr/docs/Web/CSS/Reference/Values/length#relative_length_units) toujours suffisamment grande pour être lisible. Par exemple&nbsp;:

```css
small {
  font-size: max(min(0.5vw, 0.5em), 1rem);
}
```

Cela garantit une taille minimale de _1rem_, avec une taille de texte qui s'adapte si la page est zoomée.

- [Comprendre le WCAG sur MDN, explications de la règle 1.4](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#règle_1.4_—_faciliter_la_perception_visuelle_et_auditive_du_contenu_notamment_en_séparant_le_premier_plan_de_larrière-plan)
- [Comprendre les critères de succès 1.4.4&nbsp;: Redimensionner le texte | WAI | W3C <sup>(angl.)</sup>](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html)

## Exemples

### Définir une taille minimale pour une police

Un autre cas d'utilisation de `max()` est de permettre à une taille de police de croître tout en garantissant qu'elle est au moins d'une taille minimale, permettant des tailles de police réactives tout en assurant la lisibilité.

Voyons un exemple de CSS&nbsp;:

```css
h1 {
  font-size: 2rem;
}
h1.responsive {
  font-size: max(4vw, 2em, 2rem);
}
```

La taille de la police est au minimum de 2rems, soit deux fois la taille par défaut de la police sur la page. Cela garantit qu'elle est lisible et accessible.

```html
<h1>Ce texte est toujours lisible, mais ne change pas de taille</h1>
<h1 class="responsive">
  Ce texte est toujours lisible, et est réactif, jusqu'à un certain point
</h1>
```

{{EmbedLiveSample("Définir une taille minimale pour une police", "100%", 300)}}

Pensez à la fonction `max()` comme à la recherche de la valeur minimale autorisée pour une propriété.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La fonction {{CSSxRef("calc()")}}
- La fonction {{CSSxRef("clamp()")}}
- La fonction {{CSSxRef("min()")}}
- [Apprendre&nbsp;: Valeurs et unités en CSS](/fr/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
