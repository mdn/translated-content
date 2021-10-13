---
title: '<footer> : l''élément de pied de page ou de section'
slug: Web/HTML/Element/footer
tags:
  - Element
  - HTML
  - HTML sections
  - Reference
translation_of: Web/HTML/Element/footer
browser-compat: html.elements.footer
---
{{HTMLRef}}

L'élément HTML **`<footer>`** représente le pied de page de la [section](/fr/docs/Web/Guide/HTML/Content_categories#sectioning_content) ou de la [racine de sectionnement](/fr/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines#sectioning_root) la plus proche. Un élément `<footer>` contient habituellement des informations sur l'autrice ou l'auteur de la section, les données relatives au droit d'auteur (_copyright_) ou les liens vers d'autres documents en relation.

{{EmbedInteractiveExample("pages/tabbed/footer.html", "tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/Guide/HTML/Content_categories"
          >Catégories de contenu</a
        >
      </th>
      <td>
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content"
          >Contenu de flux</a
        >,
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#palpable_content"
          >contenu tangible</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content"
          >Contenu de flux</a
        >
        sans élément descendant qui soit <code>&#x3C;footer></code> ou
        <a href="/fr/docs/Web/HTML/Element/header"><code>&#x3C;header></code></a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        Aucune, la balise ouvrante et la balise fermante sont toutes les deux
        obligatoires.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément qui accepte du
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content"
          >contenu de flux</a
        >. Un élément <code>&#x3C;footer></code> ne doit pas descendre d'un
        élément
        <a href="/fr/docs/Web/HTML/Element/address"
          ><code>&#x3C;address></code></a
        >,
        <a href="/fr/docs/Web/HTML/Element/header"
          ><code>&#x3C;header></code></a
        >
        ou d'un autre élément <code>&#x3C;footer></code>.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="/fr/docs/Web/Accessibility/ARIA/Roles/Contentinfo_role"
          >contentinfo</a
        >, ou
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >pas de rôle correspondant</a
        >
        si un descendant d'un élément
        <a href="/fr/docs/Web/HTML/Element/article"
          ><code>&#x3C;article></code></a
        >,
        <a href="/fr/docs/Web/HTML/Element/aside"><code>&#x3C;aside></code></a
        >, <a href="/fr/docs/Web/HTML/Element/main"><code>&#x3C;main></code></a
        >,
        <a href="/fr/docs/Web/HTML/Element/nav"><code>&#x3C;nav></code></a> ou
        <a href="/fr/docs/Web/HTML/Element/section"
          ><code>&#x3C;section></code></a
        >, ou un élément avec
        <code
          >role=<a href="/fr/docs/Web/Accessibility/ARIA/Roles/Article_Role"
            >article</a
          ></code
        >,
        <a href="/fr/docs/Web/Accessibility/ARIA/Roles/Complementary_role"
          ><code>complementary</code></a
        >,
        <a href="/fr/docs/Web/Accessibility/ARIA/Roles/Main_role"
          ><code>main</code></a
        >,
        <a href="/fr/docs/Web/Accessibility/ARIA/Roles/Navigation_Role"
          ><code>navigation</code></a
        >
        ou
        <a href="/fr/docs/Web/Accessibility/ARIA/Roles/Region_role"
          ><code>region</code></a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>
        <a href="https://w3c.github.io/aria/#group"><code>group</code></a
        >, <a href="https://w3c.github.io/aria/#none"><code>none</code></a
        >,
        <a href="https://w3c.github.io/aria/#presentation"
          ><code>presentation</code></a
        >
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

Comme tous les éléments HTML, cet élément accepte [les attributs universels](/fr/docs/Web/HTML/Global_attributes).

## Notes d'utilisation

- Les informations sur l'autrice ou l'auteur doivent être placées dans un élément [`<address>`](/fr/docs/Web/HTML/Element/address) et incluses dans l'élément `<footer>`.
- L'élément `<footer>` n'a pas de contenu sectionnant et ne peut donc pas introduire une nouvelle section dans le [plan](/fr/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines).

## Exemples

```html
<footer>
  Quelques informations de copyright ou bien quelques informations
  sur l'auteur de l'article.
</footer>
```

## Accessibilité

Avant la publication de Safari 13, le [rôle de repère](/fr/docs/Learn/Accessibility/WAI-ARIA_basics#signpostslandmarks) `contentinfo` n'était pas correctement exposé par [VoiceOver](https://help.apple.com/voiceover/info/guide/). Si vous devez prendre en charge les anciens navigateurs Safari, ajoutez `role="contentinfo"` à l'élément `footer` pour vous assurer que le landmark sera correctement exposé.

- En rapport : [WebKit Bugzilla : 146930 - AX : Les éléments natifs HTML (header, footer, main, aside, nav) devraient fonctionner de la même manière que les points de repère ARIA, parfois ce n'est pas le cas](https://bugs.webkit.org/show_bug.cgi?id=146930).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Autres éléments liés à la section : [`<body>`](/fr/docs/Web/HTML/Element/body), [`<nav>`](/fr/docs/Web/HTML/Element/nav), [`<article>`](/fr/docs/Web/HTML/Element/article), [`<aside>`](/fr/docs/Web/HTML/Element/aside), [`<h1>`](/fr/docs/Web/HTML/Element/Heading_Elements), [`<h2>`](/fr/docs/Web/HTML/Element/Heading_Elements), [`<h3>`](/fr/docs/Web/HTML/Element/Heading_Elements), [`<h4>`](/fr/docs/Web/HTML/Element/Heading_Elements), [`<h5>`](/fr/docs/Web/HTML/Element/Heading_Elements), [`<h6>`](/fr/docs/Web/HTML/Element/Heading_Elements), [`<hgroup>`](/fr/docs/Web/HTML/Element/hgroup), [`<header>`](/fr/docs/Web/HTML/Element/header), [`<section>`](/fr/docs/Web/HTML/Element/section), [`<address>`](/fr/docs/Web/HTML/Element/address) ;
- [Utilisation des sections et des plans HTML](/fr/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines)
- [ARIA : rôle `contentinfo`](/fr/docs/Web/Accessibility/ARIA/Roles/Contentinfo_role)
