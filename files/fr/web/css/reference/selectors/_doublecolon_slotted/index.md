---
title: ::slotted()
slug: Web/CSS/Reference/Selectors/::slotted
original_slug: Web/CSS/::slotted
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Le [pseudo-élément](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) [CSS](/fr/docs/Web/CSS) **`::slotted()`** représente n'importe quel élément ayant été placé à l'intérieur d'un emplacement (_slot_) au sein d'un gabarit (_template_) HTML (cf. [Utiliser les gabarits et les emplacements](/fr/docs/Web/API/Web_components/Using_templates_and_slots) pour plus d'informations).

Cela ne fonctionne que pour du CSS placé à l'intérieur d'un élément {{htmlelement("template")}} et/ou dans le [le DOM fantôme (<i lang="en">shadow DOM</i>)](/fr/docs/Web/API/Web_components/Using_shadow_DOM). On notera également que ce sélecteur ne sélectionnera pas les noeuds texte placés dans les emplacements, il ne cible que les éléments.

{{InteractiveExample("Démonstration CSS&nbsp;: ::slotted()", "tabbed-shorter")}}

```css interactive-example
/* Ce CSS est appliqué à l'intérieur du shadow DOM. */

::slotted(.content) {
  background-color: aqua;
}

h2 ::slotted(span) {
  background: silver;
}
```

```html interactive-example
<template id="card-template">
  <div>
    <h2><slot name="caption">le titre va ici</slot></h2>
    <slot name="content">le contenu va ici</slot>
  </div>
</template>

<my-card>
  <span slot="caption">Erreur</span>
  <p class="content" slot="content">Échec de la construction !</p>
</my-card>
```

```js interactive-example
customElements.define(
  "my-card",
  class extends HTMLElement {
    constructor() {
      super();

      const template = document.getElementById("card-template");
      const shadow = this.attachShadow({ mode: "open" });
      shadow.appendChild(template.content.cloneNode(true));

      const elementStyle = document.createElement("style");
      elementStyle.textContent = `
        div {
          width: 200px;
          border: 2px dotted red;
          border-radius: 4px;
        }`;
      shadow.appendChild(elementStyle);

      const cssTab = document.querySelector("#css-output");
      const editorStyle = document.createElement("style");
      editorStyle.textContent = cssTab.textContent;
      shadow.appendChild(editorStyle);
      cssTab.addEventListener("change", () => {
        editorStyle.textContent = cssTab.textContent;
      });
    }
  },
);
```

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

## Syntaxe

```css-nolint
::slotted(<compound-selector>) {
  /* ... */
}
```

## Exemples

### Mise en évidence des éléments dans les emplacements

Dans cette démonstration, on utilise un gabarit avec trois emplacements&nbsp;:

```html
<template id="person-template">
  <div>
    <h2>Carte d'identité</h2>
    <slot name="person-name">NOM ABSENT</slot>
    <ul>
      <li><slot name="person-age">AGE ABSENT</slot></li>
      <li><slot name="person-occupation">POSTE ABSENT</slot></li>
    </ul>
  </div>
</template>
```

Nous définissons l'élément personnalisé `<person-details>`. Dans ce cas, nous ajoutons des styles avec JavaScript, mais nous aurions pu les ajouter dans un bloc {{HTMLElement("style")}} au sein du {{HTMLElement("template")}} avec le même effet&nbsp;:

```js
customElements.define(
  "person-details",
  class extends HTMLElement {
    constructor() {
      super();
      let template = document.getElementById("person-template");
      let templateContent = template.content;

      const shadowRoot = this.attachShadow({ mode: "open" });

      let style = document.createElement("style");
      style.textContent =
        "div { padding: 10px; border: 1px solid gray; width: 200px; margin: 10px; }" +
        "h2 { margin: 0 0 10px; }" +
        "ul { margin: 0; }" +
        "p { margin: 10px 0; }" +
        "::slotted(*) { color: gray; font-family: sans-serif; } ";

      shadowRoot.appendChild(style);
      shadowRoot.appendChild(templateContent.cloneNode(true));
    }
  },
);
```

On voit ici que, lorsqu'on renseigne le `style` de l'élément, on sélectionne tous les éléments présents dans les emplacements (`::slotted(*)`) afin de leur fournir différentes polices et couleurs. Cela permet d'avoir une meilleur vision des emplacements qui ne sont pas encore occupés.

Notre balisage comprend trois éléments personnalisés, dont un élément personnalisé avec un nom de `slot` invalide dans un ordre source différent de celui du `<template>`&nbsp;:

```html
<person-details>
  <p slot="person-name">Wonder Woman</p>
  <span slot="person-age">Immortelle</span>
  <span slot="person-occupation">Super-héroïne</span>
</person-details>

<person-details>
  <p slot="person-name">Malala Yousafzai</p>
  <span slot="person-age">17</span>
  <span slot="person-occupation">Activiste</span>
</person-details>

<person-details>
  <span slot="person-age">44</span>
  <span slot="nom-demplacement-invalide">Voyageur temporel</span>
  <p slot="person-name">Dr. Who</p>
</person-details>
```

#### Result

{{EmbedLiveSample('mise_en_évidence_des_éléments_dans_les_emplacements', 500, 500)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref(":host")}}
- {{cssxref(":host_function", ":host()")}}
- {{cssxref(":host-context", ":host-context()")}}
- {{cssxref(":has-slotted")}}
- Le module de [définition de la portée CSS](/fr/docs/Web/CSS/CSS_scoping)
- L'attribut HTML [`slot`](/fr/docs/Web/HTML/Reference/Global_attributes/slot)
- L'élément HTML {{HTMLElement("slot")}}
- L'élément HTML {{HTMLElement("template")}}
- [Les composants web](/fr/docs/Web/API/Web_components)
