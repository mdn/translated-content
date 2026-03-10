---
title: :defined
slug: Web/CSS/Reference/Selectors/:defined
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:defined`** représente n'importe quel élément ayant été défini. Cela inclut les éléments standards provenant du navigateur, ainsi que les éléments personnalisés («&nbsp;_custom elements_&nbsp;») ayant correctement été définis (c'est-à-dire grâce à la méthode {{DOMxRef("CustomElementRegistry.define()")}}).

```css
/* Cette règle cible tout élément défini */
:defined {
  font-style: italic;
}

/* Cette règle cible n'importe quelle instance d'un élément personnalisé donné */
simple-custom:defined {
  display: block;
}
```

## Syntaxe

```css
:defined {
  /* ... */
}
```

## Exemples

### Masquer les éléments jusqu'à ce qu'ils soient définis

Dans cette démonstration, nous définissons un élément personnalisé de base nommé `<element-personnalise>` et utilisons les sélecteurs `:not(:defined)` et `:defined` pour mettre en forme l'élément avant et après sa définition. Cela est utile si vous avez un élément personnalisé complexe qui prend un certain temps à se charger dans la page — vous pouvez alors masquer les instances de l'élément jusqu'à ce que la définition soit terminée afin d'éviter que des éléments non stylisés n'apparaissent de manière inesthétique sur la page.

#### HTML

Le code HTML suivant utilise l'élément personnalisé, mais celui-ci n'a pas encore été défini. Nous incluons également un élément HTML {{HTMLElement("button")}} qui définira l'élément personnalisé lorsqu'on cliquera dessus, ce qui vous permettra de voir son état avant et après la définition.

```html
<element-personnalise>
  <p>
    Contenu chargé : Lorem ipsum tel sed tellus eiusmod tellus. Aenean. Semper
    dolor sit nisi. Elit porttitor nisi sit vivamus.
  </p>
</element-personnalise>

<button id="btn">définir un <code>&lt;element-personnalise&gt;</code></button>
```

#### CSS

```css hidden
element-personnalise {
  display: block;
  border: 5px dashed grey;
  border-radius: 1rem;
  height: 100px;
  width: 400px;
  padding: 1rem;
  position: relative;
  user-select: none;
}

code {
  background: #cccccc;
}

#btn {
  margin-top: 1rem;
  cursor: pointer;
}
```

Dans le CSS suivant, nous utilisons le sélecteur `element-personnalise:not(:defined)` pour sélectionner l'élément et le colorer en gris lorsqu'il n'est pas défini, et le sélecteur `element-personnalise:defined` pour sélectionner l'élément et le colorer en noir une fois qu'il est défini.

```css
element-personnalise:not(:defined) {
  border-color: grey;
  color: grey;
}

element-personnalise:defined {
  background-color: wheat;
  border-color: black;
  color: black;
}

/* afficher le message de chargement */
element-personnalise:not(:defined)::before {
  content: "Chargement...";
  position: absolute;
  inset: 0;
  align-content: center;
  text-align: center;
  font-size: 2rem;
  background-color: white;
  border-radius: 1rem;
}

/* supprimer le message de chargement */
element-personnalise:defined::before {
  content: "";
}
```

Nous avons également utilisé le pseudo-élément {{CSSxRef("::before")}} pour afficher un message superposé «&nbsp;Chargement...&nbsp;» jusqu'à ce que l'élément soit défini. Une fois défini, il est supprimé en définissant le {{CSSxRef("content")}} sur une chaîne vide.

#### JavaScript

Le JavaScript suivant a été utilisé pour définir l'élément personnalisé. Pour vous permettre de voir l'état de l'élément personnalisé avant et après sa définition, nous exécutons la méthode {{DOMxRef("CustomElementRegistry.define", "define()")}} lorsque vous cliquez sur le bouton.

```js
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  customElements.define("element-personnalise", class extends HTMLElement {});
  btn.remove();
});
```

#### Résultat

{{EmbedLiveSample("Masquer les éléments jusqu'à ce qu'ils soient définis", "100%", 230)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les composants web](/fr/docs/Web/API/Web_components)
