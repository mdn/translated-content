---
title: <hgroup>
slug: Web/HTML/Element/hgroup
l10n:
  sourceCommit: 7fd56d044d3469659bbe5c04b004e87b13dee352
---

{{HTMLSidebar}}

L'élément [HTML](/fr/docs/Web/HTML) **`<hgroup>`** représente un titre et son contenu associé. Il regroupe un élément [`<h1>-<h6>`](/fr/docs/Web/HTML/Element/Heading_Elements) avec un ou plusieurs paragraphes [`<p>`](/fr/docs/Web/HTML/Element/p).

{{EmbedInteractiveExample("pages/tabbed/hgroup.html", "tabbed-standard")}}

## Attributs

Cet élément inclut uniquement [les attributs universels](/fr/docs/Web/HTML/Global_attributes).

## Notes d'utilisation

L'élément `<hgroup>` permet de regrouper le titre principal d'une section avec du contenu secondaire associé, tel que son (ou ses) sous-titre(s), un titre alternatif ou un slogan. Chaque contenu de ce type sera représenté par un élément `<p>` au sein de l'élément `<hgroup>`.

L'élément `<hgroup>` en tant que tel n'a pas d'effet sur le plan (<i lang="en">outline</i>) d'une page web. C'est le titre intégré au sein de l'élément `<hgroup>` qui contribue au plan du document.

## Exemples

```html
<hgroup id="document-title">
  <h1>HTML : standard évolutif</h1>
  <p>Dernière mise à jour le 12 juillet 2022</p>
</hgroup>
<p>Une introduction dans le document.</p>
<h2>Table des matières</h2>
<ol id="toc">
  …
</ol>
<h2>Première section</h2>
<p>Une introduction à la première section.</p>
```

### Résultat

{{EmbedLiveSample('','',520)}}

## Accessibilité

L'élément `<hgroup>` n'a pas de sémantique forte pour l'accessibilité. C'est le contenu de l'élément (le titre et les éventuels paragraphes) qui sont exposés aux API d'accessibilité du navigateur.

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Content_categories">Catégories de contenu</a>
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Content_categories#contenu_de_flux">Contenu de flux</a>, <a href="/fr/docs/Web/HTML/Content_categories#contenu_de_titre">contenu de titre</a>, <a href="/fr/docs/Web/HTML/Content_categories#contenu_tangible">contenu tangible</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        Zéro ou plusieurs éléments <a href="/fr/docs/Web/HTML/Element/p"><code>&lt;p&gt;</code></a>, suivi par <a href="/fr/docs/Web/HTML/Element/Heading_Elements">un élément de titre (<code>&lt;h1-6&gt;</code>)</a>, suivis par zéro ou plusieurs éléments <a href="/fr/docs/Web/HTML/Element/p"><code>&lt;p&gt;</code></a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balise</th>
      <td>Aucune, la balise d'ouverture et la balise de fermeture sont obligatoires</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément qui accepte du <a href="/fr/docs/Web/HTML/Content_categories#Contenu_de_flux">contenu de flux</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">Aucun rôle correspondant</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Tous</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td><a href="/fr/docs/Web/API/HTMLElement"><code>HTMLElement</code></a></td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les autres éléments HTML relatifs aux sections du document&nbsp;:
  - [`<body>`](/fr/docs/Web/HTML/Element/body)
  - [`<article>`](/fr/docs/Web/HTML/Element/article)
  - [`<section>`](/fr/docs/Web/HTML/Element/section)
  - [`<aside>`](/fr/docs/Web/HTML/Element/aside)
  - [`<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`](/fr/docs/Web/HTML/Element/Heading_Elements)
  - [`<nav>`](/fr/docs/Web/HTML/Element/nav)
  - [`<header>`](/fr/docs/Web/HTML/Element/header)
  - [`<footer>`](/fr/docs/Web/HTML/Element/footer)
  - [`<address>`](/fr/docs/Web/HTML/Element/address)
- [Sections et plan d'un document HTML](/fr/docs/Web/HTML/Element/Heading_Elements)
