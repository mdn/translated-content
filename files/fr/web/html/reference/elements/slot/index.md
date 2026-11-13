---
title: "Élément HTML `<slot>` : l'élément d'emplacement de composant web"
short-title: <slot>
slug: Web/HTML/Reference/Elements/slot
l10n:
  sourceCommit: 8dd50fa9cb734907685508144376dbdd28f98be6
---

L'élément [HTML](/fr/docs/Web/HTML) **`<slot>`** est un emplacement à l'intérieur d'un [Composant Web](/fr/docs/Web/API/Web_components) que vous pouvez remplir avec votre propre balisage lorsque le composant est utilisé.
Cela vous permet de créer des arbres DOM distincts et de les présenter ensemble.

Les emplacements peuvent contenir du texte brut, d'autres éléments HTML ou d'autres composants web.
Un emplacement peut également contenir du contenu par défaut, qui est affiché si l'emplacement n'est pas assigné à un autre contenu lorsque le composant web est utilisé.

## Attributs

Cet élément inclut les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

- `name`
  Un _emplacement nommé_ est un élément `<slot>` avec un attribut `name`, tandis qu'un _emplacement non nommé_ n'a pas d'attribut `name`, et le nom par défaut est une chaîne de caractères vide.

  Lorsque la racine d'ombre utilise [l'affectation d'emplacements nommés](/fr/docs/Web/HTML/Reference/Elements/template#named), les éléments enfants de premier niveau de son hôte sont rendus dans les emplacements qui ont un nom correspondant dans leur attribut [`slot`](/fr/docs/Web/API/Element/slot).
  Les noms d'emplacements doivent être uniques par racine d'ombre&nbsp;: si vous avez deux emplacements avec le même nom, tous les éléments ayant un attribut `slot` correspondant sont rendus dans le _premier_ emplacement.
  Tous les éléments enfants de premier niveau qui n'ont pas d'attribut `slot` sont rendus dans le premier élément `<slot>` non nommé, appelé _emplacement par défaut_.
  Le `name` n'a aucun effet si la racine d'ombre utilise [l'affectation d'emplacements manuelle](/fr/docs/Web/HTML/Reference/Elements/template#manual).

  Pour plus d'informations, consultez [`shadowrootslotassignment`](/fr/docs/Web/HTML/Reference/Elements/template#shadowrootslotassignment) sur l'élément `<template>` et [`Element.attachShadow()`](/fr/docs/Web/API/Element/attachShadow#slotassignment).

## Exemples

### Utilisation simple

Ce HTML montre comment un certain nombre d'emplacements nommés peuvent être déclarés à l'intérieur d'un élément {{HTMLElement("template")}}.
Notez que ces emplacements ne sont utilisés comme emplacements que lorsque le modèle est utilisé à l'intérieur d'une racine d'ombre.

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
        <a href="/fr/docs/Web/HTML/Guides/Content_categories">Catégories de contenu</a>
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux">Contenu de flux</a>,
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé">contenu phrasé</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a
          href="/fr/docs/Web/HTML/Guides/Content_categories#modèle_de_contenu_transparent">Contenu transparent</a>
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
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé">contenu phrasé</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">Pas de rôle correspondant <sup>(angl.)</sup></a>
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
- [Utiliser les modèles et les emplacements](/fr/docs/Web/API/Web_components/Using_templates_and_slots)
