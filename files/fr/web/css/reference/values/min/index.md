---
title: Fonction CSS `min()`
short-title: min()
slug: Web/CSS/Reference/Values/min
l10n:
  sourceCommit: 1131815f48d54465a99c1c5fd0e63e0d1f549caf
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`min()`** permet d'obtenir la plus petite valeurs parmi une liste d'expressions, séparées par des virgules afin d'utiliser ce minimum comme valeur d'une propriété CSS. La fonction `min()` peut être utilisée à tout endroit où une valeur de type {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}} ou {{CSSxRef("&lt;integer&gt;")}} est autorisée.

{{InteractiveExample("Démonstration CSS&nbsp;: min()")}}

```css interactive-example-choice
width: min(50vw, 200px);
```

```css interactive-example-choice
width: min(100vw, 4000px);
```

```css interactive-example-choice
width: min(150vw, 100px);
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

Dans le premier exemple ci-dessus, la largeur est au maximum de 200px, mais est inférieure si la zone d'affichage mesure moins de 400px de large (auquel cas 1vw correspondrait à 4px, et 50vw à 200px). Cette technique utilise une unité absolue pour définir une valeur maximale fixe pour la propriété, et une unité relative pour permettre à la valeur de diminuer afin de s'adapter à des zones d'affichage plus petites.

## Syntaxe

```css
min(1, 2, 3)
min(1px, 2px, 3px)
```

### Paramètres

La fonction `min()` prend une ou plusieurs expressions séparées par des vigules comme paramètres, la valeur de l'expression la plus petite (la plus négative) étant utilisée comme valeur.

Les expressions peuvent être des expressions mathématiques (utilisant des opérateurs arithmétiques), des valeurs littérales ou d'autres expressions, telles que {{CSSxRef("attr()")}}, qui évaluent à un type d'argument valide (comme {{CSSxRef("&lt;length&gt;")}}).

Vous pouvez utiliser différentes unités pour chaque valeur de votre expression, si vous le souhaitez. Vous pouvez également utiliser des parenthèses pour établir l'ordre des calculs si nécessaire.

### Notes

- Les expressions mathématiques impliquant des pourcentages pour les largeurs et hauteurs des colonnes de tableau, des groupes de colonnes de tableau, des lignes de tableau, des groupes de lignes de tableau et des cellules de tableau dans les tableaux à disposition automatique et fixe _peuvent_ être traitées comme si `auto` avait été défini.
- Il est permis d'imbriquer les fonctions `max()` et `min()` comme valeurs d'expression. Les expressions sont des expressions mathématiques complètes, vous pouvez donc utiliser l'addition, la soustraction, la multiplication et la division directement sans utiliser la fonction `calc()` elle-même.
- L'expression peut être des valeurs combinant les opérateurs d'addition ( + ), de soustraction ( - ), de multiplication ( \* ) et de division ( / ), en utilisant les règles de priorité des opérateurs standard. Assurez-vous de mettre un espace de chaque côté des opérandes + et -. Les opérandes de l'expression peuvent être n'importe quelle valeur de syntaxe \<length>.
- Vous pouvez (et devez souvent) combiner les valeurs `min()` et `max()`, ou utiliser `min()` dans une fonction `clamp()` ou `calc()`.
- Vous pouvez fournir plus de deux arguments, si vous avez plusieurs contraintes à appliquer.

## Syntaxe formelle

{{CSSSyntax}}

## Accessibilité

Lors de l'utilisation de `min()` pour définir une taille de police maximale, assurez-vous que la police peut toujours être agrandie d'au moins 200 % pour la lisibilité (sans technologie d'assistance comme une fonction de zoom).

- [Comprendre le WCAG sur MDN, explications de la règle 1.4](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#règle_1.4_—_faciliter_la_perception_visuelle_et_auditive_du_contenu_notamment_en_séparant_le_premier_plan_de_larrière-plan)
- [Comprendre les critères de succès 1.4.4&nbsp;: Redimensionner le texte | WAI | W3C <sup>(angl.)</sup>](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html)

## Exemples

### Définir une taille maximale pour une étiquette et un champ de saisie

Un autre cas d'utilisation de `min()` consiste à définir une taille maximale pour les contrôles de formulaire réactifs&nbsp;: permettre à la largeur des étiquettes et des champs de saisie de diminuer à mesure que la largeur du formulaire diminue.

Regardons un peu de CSS&nbsp;:

```css
input,
label {
  padding: 2px;
  box-sizing: border-box;
  display: inline-block;
  width: min(40%, 400px);
  background-color: pink;
}

form {
  margin: 4px;
  border: 1px solid black;
  padding: 4px;
}
```

Ici, le formulaire lui-même, ainsi que la marge, la bordure et le remplissage, occupent 100% de la largeur de son parent. Nous déclarons que l'entrée de formulaire et l'étiquette doivent être la valeur la plus petite entre 40% de la largeur du formulaire jusqu'au remplissage ou 400px de large, selon ce qui est le plus petit. En d'autres termes, la largeur maximale que peuvent avoir l'étiquette et l'entrée de formulaire est de 400px. La largeur minimale est de 40% de la largeur du formulaire, ce qui sur l'écran d'une montre connectée est très petit.

```html
<form>
  <label for="misc">Tapez quelque chose&nbsp;:</label>
  <input type="text" id="misc" name="misc" />
</form>
```

{{EmbedLiveSample("Définir une taille maximale pour une étiquette et un champ de saisie", "100%", 110)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La fonction {{CSSxRef("calc()")}}
- La fonction {{CSSxRef("clamp()")}}
- La fonction {{CSSxRef("max()")}}
- [Apprendre&nbsp;: Valeurs et unités en CSS](/fr/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
