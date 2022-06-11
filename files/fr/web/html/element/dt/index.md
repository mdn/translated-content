---
title: '<dt> : l''élément pour le terme d''une description'
slug: Web/HTML/Element/dt
tags:
  - Definition
  - Description list
  - Definition Term
  - Description Term
  - Element
  - HTML
  - HTML grouping content
  - Reference
  - Term
  - Web
  - dt
translation_of: Web/HTML/Element/dt
browser-compat: html.elements.dt
---
{{HTMLRef}}

L'élément HTML **`<dt>`** identifie un terme dans une liste de définitions ou de descriptions. Cet élément n'apparaît qu'en tant qu'élément enfant d'un élément [`<dl>`](/fr/docs/Web/HTML/Element/dl) et est généralement suivi d'un élément [`<dd>`](/fr/docs/Web/HTML/Element/dd). Plusieurs éléments `<dt>` qui se suivent indiqueront qu'ils partagent la définition/description fournie par le prochain élément [`<dd>`](/fr/docs/Web/HTML/Element/dd).

{{EmbedInteractiveExample("pages/tabbed/dt.html", "tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/Guide/HTML/Content_categories"
          >Catégories de contenu</a
        >
      </th>
      <td>Aucune.</td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content"
          >Contenu de flux</a
        >, sans élément
        <a href="/fr/docs/Web/HTML/Element/header"><code>&#x3C;header></code></a
        >,
        <a href="/fr/docs/Web/HTML/Element/footer"><code>&#x3C;footer></code></a
        >, sans contenu sectionnant et sans titre parmi les descendants.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        Cet élément doit avoir une balise ouvrante. La balise de fin peut être
        omise si l'élément est immédiatement suivi par un autre élément
        <code>&#x3C;dd></code> ou par un élément <code>&#x3C;dt></code> ou s'il
        n'y a plus de contenu au sein de l'élément parent.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        L'élement doit être situé avant un élément
        <a href="/fr/docs/Web/HTML/Element/dt"><code>&#x3C;dt></code></a> ou
        <a href="/fr/docs/Web/HTML/Element/dd"><code>&#x3C;dd></code></a> et à
        l'intérieur d'un élément
        <a href="/fr/docs/Web/HTML/Element/dl"><code>&#x3C;dl></code></a
        >. Sinon (selon le WHATWG), au sein d'un élément
        <a href="/fr/docs/Web/HTML/Element/div"><code>&#x3C;div></code></a>
        situé dans un élément
        <a href="/fr/docs/Web/HTML/Element/dl"><code>&#x3C;dl></code></a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td><a href="https://w3c.github.io/aria/#term">term</a></td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>
        <code
          ><a href="/fr/docs/Web/Accessibility/ARIA/Roles/Listitem_role"
            >listitem</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>
        <a href="/fr/docs/Web/API/HTMLElement"><code>HTMLElement</code></a>
        Jusqu'à Gecko 1.9.2 inclus (Firefox 4), Firefox implémentait l'interface
        <a href="/fr/docs/Web/API/HTMLSpanElement"
          ><code>HTMLSpanElement</code></a
        >
        pour cet élément.
      </td>
    </tr>
  </tbody>
</table>

## Attributs

On peut employer [les attributs universels](/fr/docs/Web/HTML/Global_attributes) sur cet élément.

## Exemples

Pour des exemples, voir les [exemples fournis pour l'élément `<dl>`](/fr/docs/Web/HTML/Element/dl#examples).

## Spécifications

{{Specifications}}

## Compatiblité des navigateurs

{{Compat}}

## Voir aussi

- L'élément [`<dd>`](/fr/docs/Web/HTML/Element/dd)
- L'élément [`<dl>`](/fr/docs/Web/HTML/Element/dl)
