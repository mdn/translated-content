---
title: '::slotted()'
slug: Web/CSS/::slotted
tags:
  - CSS
  - Pseudo-element
  - Reference
  - Web
translation_of: Web/CSS/::slotted
---
{{CSSRef}}

Le [pseudo-élément](/fr/docs/Web/CSS/Pseudo-éléments) CSS **`::slotted()`** représente n'importe quel élément ayant été placé à l'intérieur d'un emplacement (_slot_) au sein d'un gabarit (_template_) HTML (cf. [Utiliser les gabarits et les emplacements](/fr/docs/Web/Web_Components/Using_templates_and_slots) pour plus d'informations).

Cela ne fonctionne que pour du CSS placé à l'intérieur d'un élément {{htmlelement("template")}} et/ou dans le _[shadow DOM](/fr/docs/Web/Web_Components/Using_shadow_DOM)_. On notera également que ce sélecteur ne sélectionnera pas les noeuds texte placés dans les emplacements, il ne cible que les éléments.

```css
/* Cible n'importe quel élément placé dans un emplacement */
::slotted(*) {
  font-weight: bold;
}

/* Cible n'importe quel élément <span> placé dans un emplacement */
::slotted(span) {
  font-weight: bold;
}
```

## Syntax

{{csssyntax}}

## Exemples

Les fragments de code suivants sont tirés du dépôt [`slotted-pseudo-element`](https://github.com/mdn/web-components-examples/tree/master/slotted-pseudo-element) ([voir le résultat en _live_](https://mdn.github.io/web-components-examples/slotted-pseudo-element/)).

Dans cette démonstration, on utilise un gabarit avec trois emplacements :

```html
<template id="person-template">
  <div>
    <h2>Carte d'identité d'une personne</h2>
    <slot name="person-name">NOM ABSENT</slot>
    <ul>
      <li><slot name="person-age">AGE ABSENT</slot></li>
      <li><slot name="person-occupation">POSTE ABSENT</slot></li>
    </ul>
  </div>
</template>
```

Un élément personnalisé — `<person-details>` — est défini de la façon suivante :

```js
customElements.define('person-details',
  class extends HTMLElement {
    constructor() {
      super();
      let template = document.getElementById('person-template');
      let templateContent = template.content;

      const shadowRoot = this.attachShadow({mode: 'open'});

      let style = document.createElement('style');
      style.textContent = 'div { padding: 10px; border: 1px solid gray; width: 200px; margin: 10px; }' +
                           'h2 { margin: 0 0 10px; }' +
                           'ul { margin: 0; }' +
                           'p { margin: 10px 0; }' +
                           '::slotted(*) { color: gray; font-family: sans-serif; } ';

      shadowRoot.appendChild(style);
      shadowRoot.appendChild(templateContent.cloneNode(true));
  }
})
```

On voit ici que, lorsqu'on renseigne le `style` de l'élément, on sélectionne tous les éléments présents dans les emplacements (`::slotted(*)`) afin de leur fournir différentes polices et couleurs. Cela permet d'avoir une meilleur vision des emplacements qui ne sont pas encore occupés.

Voici ce à quoi ressemblera l'élément lorsqu'il sera inséré dans la page :

```html
<person-details>
  <p slot="person-name">Dr. Shazaam</p>
  <span slot="person-age">Immortel</span>
  <span slot="person-occupation">Super-héros</span>
</person-details>
```

## Spécifications

| Spécification                                                                | État                         | Commentaires         |
| ---------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('CSS Scope', '#slotted-pseudo', '::slotted')}} | {{Spec2('CSS Scope')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("css.selectors.slotted")}}

## Voir aussi

- [Les composants web](/fr/docs/Web/Web_Components)
