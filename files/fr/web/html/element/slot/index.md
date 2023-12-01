---
title: <slot>
slug: Web/HTML/Element/slot
---

{{HTMLSidebar}}

L'élément HTML **`<slot>`** représente un emplacement d'un composant web qu'on peut remplir avec son propre balisage. On peut ainsi obtenir un document construit avec différents arbres DOM. Cet élément fait partie des outils relatifs [aux composants web (Web Components)](/fr/docs/Web/Web_Components).

## Attributs

Cet élément inclut [les attributs universels](/fr/docs/Web/HTML/Attributs_universels).

- `name`

  - : Le nom de l'emplacement créé.

    Un **_« slot » nommé_** est un élément `<slot>` avec un attribut `name`.

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

> **Note :** Vous pouvez retrouver cet exemple sur [ce dépôt GitHub](https://github.com/mdn/web-components-examples/tree/master/element-details) et observer [son fonctionnement en live ici](https://mdn.github.io/web-components-examples/element-details/). Une explication plus détaillée est également disponible avec l'article [Manipuler `template` et `slot`](/fr/docs/Web/Web_Components/Using_templates_and_slots).

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu"
          >Catégories de contenu</a
        >
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux"
          >Contenu de flux</a
        >,
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phrasé"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a
          href="/fr/docs/Web/HTML/Catégorie_de_contenu#Modèle_de_contenu_transparent"
          >Contenu transparent</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Évènements</th>
      <td><a href="/fr/docs/Web/API/HTMLSlotElement/slotchange_event"><code>slotchange</code></a></td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément qui accepte du
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phrasé"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Aucun.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLSlotElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{HTMLElement("template")}}
