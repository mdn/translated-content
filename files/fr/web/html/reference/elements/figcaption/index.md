---
title: "<figcaption> : l'élément de légende d'une figure"
slug: Web/HTML/Reference/Elements/figcaption
l10n:
  sourceCommit: c403dd32f627cd972048db05db04ef76f3ab84fe
---

L'élément [HTML](/fr/docs/Web/HTML) **`<figcaption>`** représente une légende ou une description du reste du contenu de son élément parent {{HTMLElement("figure")}}, fournissant à `<figure>` un {{Glossary("accessible name", "nom accessible")}}.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;figcaption&gt;", "tabbed-shorter")}}

```html interactive-example
<figure>
  <img
    src="/shared-assets/images/examples/elephant.jpg"
    alt="Un éléphant au coucher du soleil" />
  <figcaption>Un éléphant au coucher du soleil</figcaption>
</figure>
```

```css interactive-example
figure {
  border: thin silver solid;
  display: flex;
  flex-flow: column;
  padding: 5px;
  max-width: 220px;
  margin: auto;
}

img {
  max-width: 220px;
  max-height: 150px;
}

figcaption {
  background-color: #222222;
  color: white;
  font: italic smaller sans-serif;
  padding: 3px;
  text-align: center;
}
```

## Attributs

Cet élément inclut uniquement les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

## Exemple

Veuillez consulter la page {{HTMLElement("figure")}} pour des exemples sur `<figcaption>`.

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Guides/Content_categories"
          >Catégories de contenu</a
        >
      </th>
      <td>Aucune.</td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
          >Contenu de flux</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        Aucune, la balise d'ouverture et la balise de fermeture sont
        obligatoires
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Un élément {{HTMLElement("figure")}}, l'élément
        <code>&#x3C;figcaption></code> doit être le premier ou le
        dernier élément enfant pour cet élément.
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
      <td>
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/group_role"><code>group</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>,
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{DOMxRef("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément {{HTMLElement("figure")}}
