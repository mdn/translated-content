---
title: "<slot> : l'élément d'emplacement de composant web"
slug: Web/HTML/Reference/Elements/slot
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

L'élément [HTML](/fr/docs/Web/HTML) **`<slot>`** — qui fait partie de la suite technologique [des Composants Web](/fr/docs/Web/API/Web_components) — est un emplacement à l'intérieur d'un composant web que vous pouvez remplir avec votre propre balisage, ce qui permet de créer des arbres DOM distincts et de les présenter ensemble.

## Attributs

Cet élément inclut les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

- `name`
  - : Le nom de l'emplacement (<i lang="en">slot</i> en anglais). Lorsque le composant contenant l'emplacement est affiché, l'emplacement est rendu avec l'enfant de l'élément personnalisé qui possède un attribut [`slot`](/fr/docs/Web/HTML/Reference/Global_attributes/slot) correspondant. Un _emplacement nommé_ est un élément `<slot>` avec un attribut `name`. Les emplacements sans nom ont pour valeur par défaut une chaîne vide. Les noms doivent être uniques par arbre d'ombre&nbsp;: si vous avez deux emplacements avec le même nom, tous les éléments ayant un attribut `slot` correspondant seront assignés au premier emplacement portant ce nom.

## Exemples

```html
<template id="element-details-template">
  <style>
    details {
      font-family: "Open Sans Light", Helvetica, Arial, sans-serif;
    }
    .name {
      font-weight: bold;
      color: #217ac0;
      font-size: 120%;
    }
    h4 {
      margin: 10px 0 -8px 0;
      background: #217ac0;
      color: white;
      padding: 2px 6px;
      border: 1px solid #cee9f9;
      border-radius: 4px;
    }
    .attributes {
      margin-left: 22px;
      font-size: 90%;
    }
    .attributes p {
      margin-left: 16px;
      font-style: italic;
    }
  </style>
  <details>
    <summary>
      <code class="name"
        >&lt;<slot name="element-name">Remplacer ce nom</slot>&gt;</code
      >
      <i class="desc"
        ><slot name="description">Remplacer cette description</slot></i
      >
    </summary>
    <div class="attributes">
      <h4>Attributs</h4>
      <slot name="attributes"><p>Aucun</p></slot>
    </div>
  </details>
  <hr />
</template>
```

> [!NOTE]
> Vous pouvez retrouver cet exemple sur [ce dépôt GitHub <sup>(angl.)</sup>](https://github.com/mdn/web-components-examples/tree/main/element-details) et observer [son fonctionnement en live ici <sup>(angl.)</sup>](https://mdn.github.io/web-components-examples/element-details/). Une explication plus détaillée est également disponible avec l'article [Manipuler `template` et `slot`](/fr/docs/Web/API/Web_components/Using_templates_and_slots).

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Guides/Content_categories"c          >Catégories de contenu</a
        >
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
          >Contenu de flux</a
        >,
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a
          href="/fr/docs/Web/HTML/Guides/Content_categories#modèle_de_contenu_transparent"
          >Contenu transparent</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Évènements</th>
      <td>{{DOMxRef("HTMLSlotElement/slotchange_event", "slotchange")}}</td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>Aucune, la balise d'ouverture et la balise de fermeture sont obligatoires.</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément qui accepte du
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >Pas de rôle correspondant <sup>(angl.)</sup></a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Aucun <code>role</code> autorisé</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{DOMxRef("HTMLSlotElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément {{HTMLElement("template")}}
- L'attribut [`slot`](/fr/docs/Web/HTML/Reference/Global_attributes/slot)
- Le pseudo-élément CSS {{CSSxRef("::slotted")}}
- La pseudo-classe CSS {{CSSxRef(":has-slotted")}}
- Le module [de portée CSS](/fr/docs/Web/CSS/Guides/Scoping)
