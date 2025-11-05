---
title: :defined
slug: Web/CSS/Reference/Selectors/:defined
original_slug: Web/CSS/:defined
l10n:
  sourceCommit: 886f2641ae90a70858c5e7d0d20959c70ee44d9d
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:defined`** représente n'importe quel élément ayant été défini. Cela inclut les éléments standards provenant du navigateur, ainsi que les éléments personnalisés («&nbsp;_custom elements_&nbsp;») ayant correctement été définis (c'est-à-dire grâce à la méthode [`CustomElementRegistry.define()`](/fr/docs/Web/API/CustomElementRegistry/define)).

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

Dans cette démonstration, nous définissons un élément personnalisé de base nommé `<custom-element>` et utilisons les sélecteurs `:not(:defined)` et `:defined` pour mettre en forme l'élément avant et après sa définition. Cela est utile si vous avez un élément personnalisé complexe qui prend un certain temps à se charger dans la page — vous pouvez alors masquer les instances de l'élément jusqu'à ce que la définition soit terminée afin d'éviter que des éléments non stylisés n'apparaissent de manière inesthétique sur la page.

#### HTML

Le code HTML suivant utilise l'élément personnalisé, mais celui-ci n'a pas encore été défini. Nous incluons également un élément {{htmlelement("button")}} qui définira l'élément personnalisé lorsqu'on cliquera dessus, ce qui vous permettra de voir son état avant et après la définition.

```html
<custom-element>
  <p>
    Contenu chargé : Lorem ipsum tel sed tellus eiusmod tellus. Aenean. Semper
    dolor sit nisi. Elit porttitor nisi sit vivamus.
  </p>
</custom-element>

<button id="btn">définir le <code>&lt;custom-element&gt;</code></button>
```

#### CSS

```css hidden
custom-element {
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

Dans le CSS suivant, nous utilisons le sélecteur `custom-element:not(:defined)` pour sélectionner l'élément et le colorer en gris lorsqu'il n'est pas défini, et le sélecteur `custom-element:defined` pour sélectionner l'élément et le colorer en noir une fois qu'il est défini.

```css
custom-element:not(:defined) {
  border-color: grey;
  color: grey;
}

custom-element:defined {
  background-color: wheat;
  border-color: black;
  color: black;
}

/* afficher le message de chargement */
custom-element:not(:defined)::before {
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
custom-element:defined::before {
  content: "";
}
```

Nous avons également utilisé le pseudo-élément [`::before`](/fr/docs/Web/CSS/Reference/Selectors/::before) pour afficher un message superposé «&nbsp;Chargement...&nbsp;» jusqu'à ce que l'élément soit défini. Une fois défini, il est supprimé en définissant le [`content`](/fr/docs/Web/CSS/Reference/Properties/content) sur une chaîne vide.

#### JavaScript

Le JavaScript suivant a été utilisé pour définir l'élément personnalisé. Pour vous permettre de voir l'état de l'élément personnalisé avant et après sa définition, nous exécutons la méthode {{domxref(« CustomElementRegistry.define », « define() »)}} lorsque vous cliquez sur le bouton.

```js
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  customElements.define("custom-element", class extends HTMLElement {});
  btn.remove();
});
```

#### Résultat

{{EmbedLiveSample("masquer_les_éléments_jusquà_ce_quils_soient_définis", "100%", "230")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les composants web](/fr/docs/Web/API/Web_components)
