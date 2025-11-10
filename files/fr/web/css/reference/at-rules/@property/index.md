---
title: "@property"
slug: Web/CSS/Reference/At-rules/@property
original_slug: Web/CSS/@property
l10n:
  sourceCommit: 943a9ba8905fbdb3966f0dd6d49f7652e3de94b3
---

La [règle @](/fr/docs/Web/CSS/Guides/Syntax/At-rules) [CSS](/fr/docs/Web/CSS) **`@property`** fait partie de l'ensemble d'API [CSS Houdini](/fr/docs/Web/API/Houdini_APIs). Elle permet aux développeur·euse·s de définir explicitement des [propriétés CSS personnalisées](/fr/docs/Web/CSS/Reference/Properties/--*), avec vérification et contrainte de type, définition de valeurs par défaut et choix de l'héritage ou non de la propriété personnalisée.

La règle `@property` permet d'enregistrer une propriété personnalisée directement dans une feuille de style, sans avoir à exécuter de JavaScript. Une règle `@property` valide enregistre une propriété personnalisée, ce qui équivaut à appeler {{domxref('CSS.registerProperty_static', 'registerProperty()')}} avec des paramètres équivalents.

## Syntaxe

```css
@property --rotation {
  syntax: "<angle>";
  inherits: false;
  initial-value: 45deg;
}
```

Le nom de la propriété personnalisée est un [`<dashed-ident>`](/fr/docs/Web/CSS/Reference/Values/dashed-ident) qui commence par `--` et est suivi d'un identifiant valide défini par l'utilisateur·ice. Il est sensible à la casse.

### Descripteurs

Les conditions suivantes doivent être respectées pour que la règle `@property` soit valide&nbsp;:

- La règle `@property` doit inclure les descripteurs {{cssxref("@property/syntax","syntax")}} et {{cssxref("@property/inherits","inherits")}}.
  Si l'un des deux manque, la règle entière est invalide et ignorée.
- Le descripteur {{cssxref("@property/initial-value","initial-value")}} est optionnel si la valeur du descripteur `syntax` est la définition universelle (`syntax: "*"`).
  Si le descripteur `initial-value` est requis mais omis, la règle entière est invalide et ignorée.
- Si la valeur du descripteur `syntax` n'est pas la définition universelle, le descripteur {{cssxref("@property/initial-value","initial-value")}} doit être une valeur [indépendante du calcul](https://drafts.css-houdini.org/css-properties-values-api-1/#computationally-independent)<sup>(angl.)</sup>.
  Cela signifie que la valeur peut être convertie en valeur calculée sans dépendre d'autres valeurs, sauf pour les définitions «&nbsp;globales&nbsp;» indépendantes de CSS.
  Par exemple, `10px` est indépendant du calcul&nbsp;: il ne change pas lors de la conversion en valeur calculée. `2in` est aussi valide, car `1in` équivaut toujours à `96px`. En revanche, `3em` n'est pas valide, car la valeur d'un `em` dépend de la propriété {{cssxref("font-size")}} du parent.
- Les descripteurs inconnus sont invalides et ignorés, mais n'invalident pas la règle `@property`.

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Utiliser `@property` pour enregistrer et utiliser une propriété personnalisée

Dans cet exemple, on définit deux propriétés personnalisées, `--item-size` et `--item-color`, qui serviront à définir la taille (largeur et hauteur) et la couleur d'arrière-plan des trois éléments suivants.

```html
<div class="container">
  <div class="item one">Élément un</div>
  <div class="item two">Élément deux</div>
  <div class="item three">Élément trois</div>
</div>
```

Le code suivant utilise la règle CSS `@property` pour définir une propriété personnalisée nommée `--item-size`. La propriété définit la valeur initiale à `40%` et limite les valeurs valides aux valeurs de type {{cssxref("percentage")}} uniquement. Cela signifie que, lorsqu'elle est utilisée pour la taille d'un élément, sa taille sera toujours relative à celle de son parent. La propriété est héritée.

```css
@property --item-size {
  syntax: "<percentage>";
  inherits: true;
  initial-value: 40%;
}
```

On définit une seconde propriété personnalisée, `--item-color`, en utilisant [JavaScript](/fr/docs/Web/JavaScript) au lieu de CSS. La méthode JavaScript {{domxref('CSS.registerProperty_static', 'registerProperty()')}} est équivalente à la règle `@property`. La propriété est définie avec une valeur initiale `aqua`, n'accepte que des valeurs de type [`<color>`](/fr/docs/Web/CSS/Reference/Values/color_value), et n'est pas héritée.

```js
window.CSS.registerProperty({
  name: "--item-color",
  syntax: "<color>",
  inherits: false,
  initialValue: "aqua",
});
```

On utilise les deux propriétés personnalisées pour mettre en forme les éléments&nbsp;:

```css
.container {
  display: flex;
  height: 200px;
  border: 1px dashed black;

  /* valeurs des propriétés personnalisées sur le parent */
  --item-size: 20%;
  --item-color: orange;
}

/* utilisation des propriétés personnalisées pour la taille et la couleur d'arrière-plan */
.item {
  width: var(--item-size);
  height: var(--item-size);
  background-color: var(--item-color);
}

/* valeurs des propriétés personnalisées sur l'élément lui-même */
.two {
  --item-size: initial;
  --item-color: inherit;
}

.three {
  /* valeurs invalides */
  --item-size: 1000px;
  --item-color: xyz;
}
```

{{ EmbedLiveSample('utiliser_property_pour_enregistrer_et_utiliser_une_propriété_personnalisée', '100%', '250px') }}

Les deux propriétés personnalisées, `--item-size: 20%` et `--item-color: orange;`, sont définies sur le parent `container`, ce qui remplace les valeurs par défaut `40%` et `aqua` définies lors de la création de ces propriétés. La taille est héritée, la couleur ne l'est pas.

Pour l'élément un, aucune de ces propriétés personnalisées n'a été définie. La propriété `--item-size` est héritée, donc la valeur `20%` définie sur le parent `container` est utilisée. En revanche, la propriété `--item-color` n'est pas héritée, donc la valeur `orange` du parent n'est pas prise en compte. À la place, la valeur initiale par défaut `aqua` est utilisée.

Pour l'élément deux, des mots-clés globaux CSS sont définis pour les deux propriétés personnalisées, ce qui sont des valeurs valides pour tous les types et donc valides quel que soit le descripteur `syntax`. La propriété `--item-size` est définie sur `initial` et utilise la valeur `initial-value: 40%;` définie dans la déclaration `@property`. La valeur `initial` signifie que la valeur `initialValue` de la propriété est utilisée. La propriété `--item-color` est définie sur `inherit`, héritant explicitement la valeur `orange` du parent même si la propriété personnalisée n'est pas censée être héritée. C'est pourquoi l'élément deux est orange.

Pour l'élément trois, la valeur de `--item-size` est définie sur `1000px`. Bien que `1000px` soit une valeur de type {{cssxref("length")}}, la déclaration `@property` exige une valeur de type `<percentage>`, donc la déclaration est invalide et ignorée, ce qui fait que la valeur héritée `20%` du parent est utilisée. La valeur `xyz` est également invalide. Comme `registerProperty()` a défini `--item-color` comme non héritée, la valeur initiale par défaut `aqua` est utilisée et non la valeur `orange` du parent.

### Animer la valeur d'une propriété personnalisée

Dans cet exemple, on définit une propriété personnalisée appelée `--progress` avec `@property`&nbsp;: elle accepte des valeurs de type [`<percentage>`](/fr/docs/Web/CSS/Reference/Values/percentage) et a une valeur initiale de `25%`. On utilise `--progress` pour définir la position des arrêts de couleur dans un {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, spécifiant où le vert s'arrête et où le noir commence. On anime ensuite la valeur de `--progress` jusqu'à `100%` sur 2,5 secondes, ce qui donne l'effet d'une barre de progression animée.

```html
<div class="bar"></div>
```

```css
@property --progress {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 25%;
}

.bar {
  display: inline-block;
  --progress: 25%;
  width: 100%;
  height: 5px;
  background: linear-gradient(
    to right,
    #00d230 var(--progress),
    black var(--progress)
  );
  animation: progressAnimation 2.5s ease infinite;
}

@keyframes progressAnimation {
  to {
    --progress: 100%;
  }
}
```

{{ EmbedLiveSample('animer_la_valeur_dune_propriété_personnalisée', '100%', '60px') }}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("var")}}
- [API Propriétés et valeurs CSS](/fr/docs/Web/API/CSS_Properties_and_Values_API)
- [API Peinture CSS](/fr/docs/Web/API/CSS_Painting_API)
- [API Typage de modèle d'objet CSS](/fr/docs/Web/API/CSS_Typed_OM_API)
- [CSS Houdini](/fr/docs/Web/API/Houdini_APIs)
- [Guide d'utilisation des propriétés CSS personnalisées (variables)](/fr/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties)
- [Module des propriétés CSS personnalisées pour les variables en cascade](/fr/docs/Web/CSS/Guides/Cascading_variables)
