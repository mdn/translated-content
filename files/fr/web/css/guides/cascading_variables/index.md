---
title: Propriétés personnalisées pour les variables en cascade CSS
short-title: Propriétés personnalisées pour les variables en cascade
slug: Web/CSS/Guides/Cascading_variables
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Le module des **Propriétés personnalisées pour les variables en cascade CSS** ajoute la prise en charge des variables en cascade dans les propriétés CSS et vous permet de créer des propriétés personnalisées pour définir ces variables ainsi que les mécanismes pour utiliser les propriétés personnalisées comme valeurs pour d'autres propriétés CSS.

Lorsque vous travaillez avec CSS, vous vous retrouvez souvent à réutiliser des valeurs spécifiques à un projet, telles que des largeurs qui fonctionnent bien avec votre mise en page, ou un ensemble de couleurs pour votre palette de couleurs.
Une façon de gérer la répétition dans les feuilles de style est de définir une valeur une fois et de l'utiliser plusieurs fois ailleurs.
Les propriétés personnalisées vous permettent de créer et de définir des variables personnalisées qui peuvent être réutilisées, simplifiant les règles complexes ou répétitives et les rendant plus faciles à lire et à maintenir.
Par exemple, `--texte-gris-fonce` et `--fond-sombre` sont plus faciles à comprendre que des couleurs hexadécimales telles que `#323831`, et le contexte de leur utilisation est également plus évident.

## Propriétés personnalisées en action

Pour voir comment les propriétés personnalisées peuvent être utilisées, déplacez le curseur d'entrée de gauche à droite.

```html hidden
<div class="conteneur">
  <div id="couleur-1">--teinte</div>
  <div id="couleur-2">--teinte + 10</div>
  <div id="couleur-3">--teinte + 20</div>
  <div id="couleur-4">--teinte + 30</div>
  <div id="couleur-5">--teinte + 40</div>
  <div id="couleur-6">--teinte + 50</div>
  <div id="couleur-7">--teinte + 60</div>
  <div id="couleur-8">--teinte + 70</div>
</div>
<input type="range" min="0" max="360" value="0" step="0.1" id="teinte" />
```

```js hidden
const teinte = document.querySelector("#teinte");

const changerTeinte = () => {
  document.documentElement.style.setProperty("--teinte", teinte.value);
};

teinte.addEventListener("input", changerTeinte);
```

```css hidden
.conteneur {
  display: grid;
  font-family: sans-serif;
  color: white;
  gap: 0.5rem;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 1rem;
}
.conteneur div {
  border-radius: 0.5rem;
  padding: 1rem;
}

input {
  width: 100%;
  margin: 0;
}

:root {
  --teinte: 0;
}

#couleur-1 {
  background-color: hsl(var(--teinte) 50% 50%);
}
#couleur-2 {
  background-color: hsl(calc(var(--teinte) + 10) 50% 50%);
}
#couleur-3 {
  background-color: hsl(calc(var(--teinte) + 20) 50% 50%);
}
#couleur-4 {
  background-color: hsl(calc(var(--teinte) + 30) 50% 50%);
}
#couleur-5 {
  background-color: hsl(calc(var(--teinte) + 40) 50% 50%);
}
#couleur-6 {
  background-color: hsl(calc(var(--teinte) + 50) 50% 50%);
}
#couleur-7 {
  background-color: hsl(calc(var(--teinte) + 60) 50% 50%);
}
#couleur-8 {
  background-color: hsl(calc(var(--teinte) + 70) 50% 50%);
}
```

{{EmbedLiveSample("Propriétés personnalisées en action", 600, 160)}}

Dans ces échantillons de couleurs, la couleur de fond ({{CSSxRef("background-color")}}) est définie en utilisant la fonction {{CSSxRef("color_value/hsl", "hsl()")}} {{CSSxRef("&lt;color&gt;")}} comme `hsl(var(--teinte) 50% 50%)`.
Chaque échantillon de couleur incrémente la valeur de {{CSSxRef("&lt;hue&gt;")}} de 10 degrés comme `calc(var(--teinte) + 10)`, `calc(var(--teinte) + 20)` etc.
Lorsque la valeur du curseur change de 0 à 360, la valeur de la [propriété personnalisée](/fr/docs/Web/CSS/Reference/Properties/--*) `--teinte` est mise à jour en utilisant {{CSSxRef("calc")}}, et la couleur de fond de chaque boîte à l'intérieur de la grille est également mise à jour.

## Référence

### Propriétés

- {{CSSxRef("--*")}}

### Fonctions

- {{CSSxRef("var()")}}

## Guides

- [Utiliser les propriétés personnalisées (variables) CSS](/fr/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties)
  - : Explique comment utiliser les propriétés personnalisées en CSS et JavaScript, avec des conseils sur la gestion des valeurs indéfinies et invalides, les valeurs de repli et l'héritage.

- [Propriétés personnalisées invalides](/fr/docs/Web/CSS/Guides/Syntax/Error_handling#propriétés_personnalisées_invalides)
  - : Explique comment les navigateurs gèrent les valeurs des propriétés lorsque la valeur d'une propriété personnalisée est d'un type de données invalide pour cette propriété.

## Concepts associés

- Le module de [l'API de propriétés et valeurs CSS](/fr/docs/Web/CSS/Guides/Properties_and_values_API)
  - La règle{{CSSxRef("@property")}}
  - La méthode [`CSS.registerProperty()`](/fr/docs/Web/API/CSS/registerProperty_static)

## Spécifications

{{Specifications}}

## Voir aussi

- Le module [de cascade et d'héritage CSS](/fr/docs/Web/CSS/Guides/Cascade)
- La fonction [`env()` CSS](/fr/docs/Web/CSS/Reference/Values/env)
- La fonction [`calc()` CSS](/fr/docs/Web/CSS/Reference/Values/calc)
- La méthode API [`getPropertyValue()`](/fr/docs/Web/API/CSSStyleDeclaration/getPropertyValue)
