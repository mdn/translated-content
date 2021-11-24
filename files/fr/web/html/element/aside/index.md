---
title: '<aside> : l''élément aparté'
slug: Web/HTML/Element/aside
tags:
  - Element
  - HTML
  - HTML sections
  - HTML5
  - HTML:Flow content
  - HTML:Palpable Content
  - HTML:Sectioning content
  - Reference
  - Web
translation_of: Web/HTML/Element/aside
browser-compat: html.elements.aside
---
{{HTMLRef}}

L'élément **`<aside>`** (en français, « aparté ») représente une partie d'un document dont le contenu n'a qu'un rapport indirect avec le contenu principal du document. Les apartés sont fréquemment présents sous la forme d'encadrés ou de boîtes de légende.

{{EmbedInteractiveExample("pages/tabbed/aside.html", "tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <dfn
          ><a href="/fr/docs/Web/Guide/HTML/Content_categories"
            >Catégories de contenu</a
          ></dfn
        >
      </th>
      <td>
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content"
          >Contenu de flux</a
        >,
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#sectioning_content"
          >contenu de section</a
        >,
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#palpable_content"
          >contenu tangible</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row"><dfn>Contenu autorisé</dfn></th>
      <td>
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content"
          >Contenu de flux</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row"><dfn>Omission de balises</dfn></th>
      <td>
        Aucune, la balise d'ouverture et la balise de fermeture sont
        obligatoires.
      </td>
    </tr>
    <tr>
      <th scope="row"><dfn>Parents autorisés</dfn></th>
      <td>
        Tout élément acceptant du
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content"
          >contenu de flux</a
        >. Notez qu'un élément <code>&#x3C;aside></code> ne doit pas être un
        descendant d'un élément
        <a href="/fr/docs/Web/HTML/Element/address"
          ><code>&#x3C;address></code></a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <code
          ><a href="/fr/docs/Web/Accessibility/ARIA/Roles/Complementary_role"
            >complementary</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>
        <a href="https://w3c.github.io/aria/#feed">feed</a>,
        <a href="https://w3c.github.io/aria/#none">none</a>,
        <a href="https://w3c.github.io/aria/#note">note</a>,
        <a href="https://w3c.github.io/aria/#presentation">presentation</a>,
        <a href="https://w3c.github.io/aria/#region">region</a>,
        <a href="https://w3c.github.io/aria/#search">search</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>
        <a href="/fr/docs/Web/API/HTMLElement"><code>HTMLElement</code></a>
      </td>
    </tr>
  </tbody>
</table>

## Attributs

Cet élément ne comprend que les [attributs universels](/fr/docs/Web/HTML/Global_attributes).

## **Notes d'utilisation**

On ne doit pas utiliser l'élément `<aside>` pour marquer du texte entre parenthèses, ce type de texte est considéré comme faisant partie du flux principal.

## Exemple

Dans cet exemple, on utilise `<aside>` afin de baliser un paragraphe d'un article. Ici, le paragraphe n'est pas directement lié au contenu principal de l'article et c'est pour cela qu'on utilise cet élément.

```html
<article>
  <p>
    Le film Disney <cite>La petite Sirène</cite> est
    sorti en salles en 1989.
  </p>
  <aside>
    <p>
      Le film a gagné 87 millions de dollars pendant sa sortie initiale.
    </p>
  </aside>
  <p>
    Plus d'informations sur le film…
  </p>
</article>
```

### Résultat

{{EmbedLiveSample("Exemple", "100%", 150)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les autres éléments en rapport avec les sections : [`<body>`](/fr/docs/Web/HTML/Element/body), [`<article>`](/fr/docs/Web/HTML/Element/article), [`<section>`](/fr/docs/Web/HTML/Element/section), [`<nav>`](/fr/docs/Web/HTML/Element/nav), [`<h1>`](/fr/docs/Web/HTML/Element/Heading_Elements), [`<h2>`](/fr/docs/Web/HTML/Element/Heading_Elements), [`<h3>`](/fr/docs/Web/HTML/Element/Heading_Elements), [`<h4>`](/fr/docs/Web/HTML/Element/Heading_Elements), [`<h5>`](/fr/docs/Web/HTML/Element/Heading_Elements), [`<h6>`](/fr/docs/Web/HTML/Element/Heading_Elements), [`<hgroup>`](/fr/docs/Web/HTML/Element/hgroup), [`<header>`](/fr/docs/Web/HTML/Element/header), [`<footer>`](/fr/docs/Web/HTML/Element/footer), [`<address>`](/fr/docs/Web/HTML/Element/address)
- [Structures et sections d'un document HTML5](/fr/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines)
- [ARIA : le rôle `complementary`](/fr/docs/Web/Accessibility/ARIA/Roles/Complementary_role)
