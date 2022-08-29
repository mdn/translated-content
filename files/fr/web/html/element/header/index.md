---
title: <header>
slug: Web/HTML/Element/header
translation_of: Web/HTML/Element/header
browser-compat: html.elements.header
---
{{HTMLRef}}

L'élément [HTML](/fr/docs/Web/HTML) **`<header>`** représente du contenu introductif, généralement un groupe de contenu introductif ou de contenu aidant à la navigation. Il peut contenir des éléments de titre, mais aussi d'autres éléments tels qu'un logo, un formulaire de recherche, le nom d'auteur, etc.

{{EmbedInteractiveExample("pages/tabbed/header.html", "tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/Guide/HTML/Content_categories">
          Catégories de contenu</a>
      </th>
      <td>
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#contenu_de_flux"
          >Contenu de flux</a
        >,
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#contenu_tangible"
          >contenu tangible</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#contenu_de_flux"
          >Contenu de flux</a
        >
        mais sans élément descendant qui soit <code>&lt;header&gt;</code> ou <a href="/fr/docs/Web/HTML/Element/footer"><code>&lt;footer&gt;</code></a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>Aucune, les balises d'ouverture et de fermeture sont obligatoires.</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément acceptant du
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#Contenu_de_flux"
          >contenu de flux</a
        >. Il est à noter qu'un élément <code>&lt;header&gt;</code> ne doit pas
        descendre d'un élément <a href="/fr/docs/Web/HTML/Element/address"><code>&lt;address&gt;</code></a>,
        <a href="/fr/docs/Web/HTML/Element/footer"><code>&lt;footer&gt;</code></a> ou d'un autre élément
        <code>&lt;header&gt;</code>.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td><a href="/fr/docs/Web/Accessibility/ARIA/Roles/Banner_role"><code>banner</code></a>, ou <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">aucun rôle correspondant</a> si l'élément <code>&lt;header></code> descend d'un élément <a href="/fr/docs/Web/HTML/Element/article"><code>&lt;article&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/aside"><code>&lt;aside&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/main"><code>&lt;main&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/nav"><code>&lt;nav&gt;</code></a> ou <a href="/fr/docs/Web/HTML/Element/section"><code>&lt;section&gt;</code></a>, ou d'un élément ayant le rôle <a href="/fr/docs/Web/Accessibility/ARIA/Roles/article_role"><code>article</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Roles/complementary_role"><code>complementary</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Roles/main_role"><code>main</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Roles/navigation_role"><code>navigation</code></a> ou <a href="/fr/docs/Web/Accessibility/ARIA/Roles/region_role"><code>region</code></a></td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>
        <a href="https://w3c.github.io/aria/#group"><code>group</code></a>, <a href="https://w3c.github.io/aria/#presentation"><code>presentation</code></a> ou <a href="https://w3c.github.io/aria/#none"><code>none</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td><a href="/fr/docs/Web/API/HTMLElement"><code>HTMLElement</code></a></td>
    </tr>
  </tbody>
</table>

## Notes d'utilisation

L'élément `<header>` n'est pas une section de contenu et n'introduit donc pas de nouvelle section dans la [structure](/fr/docs/Web/HTML/Element/Heading_Elements). Cela dit, un élément `<header>` est généralement destiné à contenir l'en-tête de la section environnante (un élément `<h1>` à `<h6>`), mais ce **n'est pas** obligatoire.

### Usage historique

Bien que l'élément `<header>` ne fasse pas partie de la spécification HTML avant [HTML5](/fr/docs/Glossary/HTML5), il existait de façon implicite depuis les premières versions. Comme on le voit sur [le premier site web](http://info.cern.ch/), il était initialement utilisé comme l'élément `<head>`. À un moment donné, il a été décidé d'utiliser un nom différent. Cela a permis à `<header>` d'être libre de remplir un rôle différent par la suite.

## Attributs

Cet élément ne possède que les [attributs universels](/fr/docs/Web/HTML/Global_attributes).

## Exemples

### En-tête de page

```html
<header>
  <h1>Titre principal</h1>
  <img src="mdn-logo-sm.png" alt="Logo de MDN">
</header>
```

### En-tête d'un article

```html
<article>
  <header>
    <h2>La planète Terre</h2>
    <p>Publié le mercredi <time datetime="2017-10-04">4 octobre 2017</time> par Jeanne Smith</p>
  </header>
  <p>Nous vivons sur une planète bleue et verte</p>
  <p><a href="https://example.com/the-planet-earth/">Poursuivre la lecture…</a></p>
</article>
```

## Accessibilité

L'élément `<header>` définit un point de repère [`banner`](/fr/docs/Web/Accessibility/ARIA/Roles/Banner_role) lorsque son contexte est un élément [`<body>`](/fr/docs/Web/HTML/Element/body). Lorsqu'un élément HTML `<header>` descend de certains éléments (tels que [`<article>`](/fr/docs/Web/HTML/Element/article), [`<aside>`](/fr/docs/Web/HTML/Element/aside), [`<main>`](/fr/docs/Web/HTML/Element/main), [`<nav>`](/fr/docs/Web/HTML/Element/nav) ou [`<section>`](/fr/docs/Web/HTML/Element/section)), il n'est pas considéré comme un repère `banner`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Autres éléments liés à la section d'un document&nbsp;:
  - [`<body>`](/fr/docs/Web/HTML/Element/body)
  - [`<nav>`](/fr/docs/Web/HTML/Element/nav)
  - [`<article>`](/fr/docs/Web/HTML/Element/article)
  - [`<aside>`](/fr/docs/Web/HTML/Element/aside)
  - [`<h1>`](/fr/docs/Web/HTML/Element/Heading_Elements), [`<h2>`](/fr/docs/Web/HTML/Element/Heading_Elements), [`<h3>`](/fr/docs/Web/HTML/Element/Heading_Elements), [`<h4>`](/fr/docs/Web/HTML/Element/Heading_Elements), [`<h5>`](/fr/docs/Web/HTML/Element/Heading_Elements), [`<h6>`](/fr/docs/Web/HTML/Element/Heading_Elements)
  - [`<footer>`](/fr/docs/Web/HTML/Element/footer)
  - [`<section>`](/fr/docs/Web/HTML/Element/section)
  - [`<address>`](/fr/docs/Web/HTML/Element/address)
- [Utiliser des sections et structures HTML](/fr/docs/Web/HTML/Element/Heading_Elements)
