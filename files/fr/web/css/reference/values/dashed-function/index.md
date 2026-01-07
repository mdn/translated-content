---
title: "<dashed-function> : fonctions personnalisées CSS"
slug: Web/CSS/Reference/Values/dashed-function
l10n:
  sourceCommit: 8fd626a7b7f1fcb19193325bbac5b87e719f83ea
---

{{SeeCompatTable}}

Le [type de données](/fr/docs/Web/CSS/Reference/Values/Data_types) [CSS](/fr/docs/Web/CSS) **`<dashed-function>`** représente la syntaxe utilisée pour appeler les [fonctions personnalisées CSS](/fr/docs/Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions), qui sont définies à l'aide de la règle {{CSSxRef("@function")}}.

## Syntaxe

Une valeur `<dashed-function>` consiste en un [`--nom-de-fonction`](/fr/docs/Web/CSS/Reference/At-rules/@function#--function-name), suivi de parenthèses contenant les arguments de la fonction (par exemple&nbsp;: `--ma-fonction(30px, 3)`).

Vous pouvez inclure des valeurs `<dashed-function>` à la place de valeurs de propriétés CSS classiques ou de composants de valeurs de propriété, dans les cas où vous souhaitez calculer dynamiquement les valeurs selon une logique de fonction plutôt que de fournir des valeurs statiques.

Si vous souhaitez [passer des valeurs contenant des virgules comme arguments](/fr/docs/Web/CSS/Reference/At-rules/@function#passage_de_valeurs_contenant_des_virgules_comme_arguments), vous pouvez le faire en les entourant d'accolades (`{ }`).

## Exemples

Pour plus d'exemples, consultez le guide [Utiliser les fonctions personnalisées CSS](/fr/docs/Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions).

### Utilisation basique de `<dashed-function>`

Cet exemple montre une fonction basique qui retourne une version semi-transparente de la couleur passée en argument.

#### HTML

Le balisage comporte un {{HTMLElement("p")}} contenant du texte&nbsp;:

```html live-sample___basic-example
<p>Du contenu</p>
```

#### CSS

Dans nos styles, nous définissons d'abord la fonction personnalisée CSS. La fonction s'appelle `--transparent` et accepte deux paramètres&nbsp;: une couleur et une valeur alpha numérique. Dans le corps de la fonction, nous utilisons la [syntaxe de couleur relative](/fr/docs/Web/CSS/Guides/Colors/Using_relative_colors) pour transformer la couleur passée en une couleur [`oklch()`](/fr/docs/Web/CSS/Reference/Values/color_value/oklch) avec un canal alpha égal à la valeur alpha passée&nbsp;; cela devient le `resultat` de la fonction&nbsp;:

```css live-sample___basic-example
@function --transparent(--color <color>, --alpha <number>) {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

Ensuite, nous définissons une propriété personnalisée `--base-color` avec la valeur `#faa6ff` sur l'élément `:root`. Nous assignons cette propriété à la couleur de la {{CSSxRef("border")}} de l'élément `<p>`, puis nous définissons la {{CSSxRef("background-color")}} sur une version transparente de la même couleur. Cela se fait en utilisant la syntaxe `<dashed-function>`, en spécifiant la fonction `--transparent()` et en lui passant les arguments `var(--base-color)` et `0.8`.

```css hidden live-sample___basic-example
html,
body {
  height: 100%;
}

body {
  margin: 0;
  display: grid;
  place-items: center;
  font-family: system-ui;
  background-image: repeating-linear-gradient(
    -45deg,
    transparent 0 20px,
    lightgrey 20px 40px
  );
}
```

```css live-sample___basic-example
:root {
  --base-color: #faa6ff;
}

p {
  width: 50%;
  padding: 30px;
  border-radius: 20px;
  border: 3px solid var(--base-color);
  background-color: --transparent(var(--base-color), 0.8);
}
```

#### Résultat

{{ EmbedLiveSample('basic-example', '100%', '150px') }}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Propriétés personnalisées CSS](/fr/docs/Web/CSS/Reference/Properties/--*)
- La règle {{CSSxRef("@function")}}
- La fonction [`type()`](/fr/docs/Web/CSS/Reference/Values/type)
- [Utiliser les fonctions personnalisées CSS](/fr/docs/Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions)
- Le module des [Fonctions et mixins personnalisés CSS](/fr/docs/Web/CSS/Guides/Custom_functions_and_mixins)
