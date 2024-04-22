---
title: "<address> : l'élément d'adresse de contact"
slug: Web/HTML/Element/address
---

{{HTMLSidebar}}

L'élément HTML **`<address>`** indique des informations de contact pour une personne, un groupe de personnes ou une organisation.

{{EmbedInteractiveExample("pages/tabbed/address.html", "tabbed-standard")}}

L'information de contact fournie via cet élément peut prendre n'importe quelle forme pertinente : ce peut être une adresse physique, une URL, une adresse électronique, un numéro de téléphone, des coordonnées géographiques, etc. Ces informations devraient contenir le nom de la personne, du groupe de personne ou de l'organisation à laquelle le contact fait référence.

Cet élément peut être employé dans un élément [`<article>`](/fr/docs/Web/HTML/Element/article) pour indiquer la personne qui écrit l'article ou être utilisé dans l'en-tête de la page pour fournir une adresse d'entreprise.

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
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >contenu tangible</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content"
          >Contenu de flux</a
        >, mais sans élément <code>&#x3C;address></code> inclus, sans contenu de
        titre (<a href="/fr/docs/Web/HTML/Element/hgroup"
          ><code>&#x3C;hgroup></code></a
        >,
        <a href="/fr/docs/Web/HTML/Element/Heading_Elements"
          ><code>&#x3C;h1></code></a
        >,
        <a href="/fr/docs/Web/HTML/Element/Heading_Elements"
          ><code>&#x3C;h2></code></a
        >,
        <a href="/fr/docs/Web/HTML/Element/Heading_Elements"
          ><code>&#x3C;h3></code></a
        >,
        <a href="/fr/docs/Web/HTML/Element/Heading_Elements"
          ><code>&#x3C;h4></code></a
        >,
        <a href="/fr/docs/Web/HTML/Element/Heading_Elements"
          ><code>&#x3C;h5></code></a
        >,
        <a href="/fr/docs/Web/HTML/Element/Heading_Elements"
          ><code>&#x3C;h6></code></a
        >), sans contenu de section (<a href="/fr/docs/Web/HTML/Element/article"
          ><code>&#x3C;article></code></a
        >,
        <a href="/fr/docs/Web/HTML/Element/aside"><code>&#x3C;aside></code></a
        >,
        <a href="/fr/docs/Web/HTML/Element/section"
          ><code>&#x3C;section></code></a
        >, <a href="/fr/docs/Web/HTML/Element/nav"><code>&#x3C;nav></code></a
        >), et sans
        <a href="/fr/docs/Web/HTML/Element/header"
          ><code>&#x3C;header></code></a
        >
        ou élément
        <a href="/fr/docs/Web/HTML/Element/footer"><code>&#x3C;footer></code></a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        Aucune, la balise d'ouverture et la balise de fermeture sont
        obligatoires.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément qui accepte un
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#contenu_de_flux"
          >contenu de flux</a
        >
        mais pas d'éléments <code>&#x3C;address></code>.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >Aucun rôle correspondant</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Aucun.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>
        <a href="/fr/docs/Web/API/HTMLElement"><code>HTMLElement</code></a
        >. Avant Gecko 2.0 (Firefox 4), Gecko implémentait cet élément en
        utilisant l'interface
        <a href="/fr/docs/Web/API/HTMLSpanElement"
          ><code>HTMLSpanElement</code></a
        >.
      </td>
    </tr>
  </tbody>
</table>

## Attributs

Cet élément n'a pas d'autres attributs que les [attributs universels](/fr/docs/Web/HTML/Global_attributes), communs à tous les éléments.

## Notes d'utilisation

- Pour représenter une adresse arbitraire, qui n'est pas relative à l'information de contact, on utilisera l'élément [`<p>`](/fr/docs/Web/HTML/Element/p) plutôt que l'élément `<address>`.
- Cet élément ne doit pas contenir plus d'informations que l'information de contact, par exemple une date de publication (qui appartiendrait à l'élément [`<time>`](/fr/docs/Web/HTML/Element/time)).
- Typiquement un élément `<address>` peut être placé dans l'élément [`<footer>`](/fr/docs/Web/HTML/Element/footer) de la section courante, s'il y en a une.

## Exemples

```html
<address>
  Vous pouvez contacter l'auteur à l'adresse
  <a href="http://www.undomaine.com/contact">www.undomaine.com</a>.<br />
  Si vous relevez quelques bogues que ce soient, merci de contacter
  <a href="mailto:webmaster@somedomain.com">le webmaster</a>.<br />
  Vous pouvez aussi venir nous voir :<br />
  Mozilla Foundation<br />
  1981 Landings Drive<br />
  Building K<br />
  Mountain View, CA 94043-0801<br />
  USA
</address>
```

### Résultat

{{EmbedLiveSample("Exemples", "100%", 190)}}

Bien que le rendu par défaut du texte de l'élément `<address>` utilise le même style par défaut que les éléments [`<i>`](/fr/docs/Web/HTML/Element/i) ou [`<em>`](/fr/docs/Web/HTML/Element/em), il est plus approprié d'utiliser cet élément lorsque l'on traite d'informations de contact, étant donné qu'il apporte des informations sémantiques supplémentaires.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les autres éléments liés aux sections d'un document : [`<body>`](/fr/docs/Web/HTML/Element/body), [`<nav>`](/fr/docs/Web/HTML/Element/nav), [`<article>`](/fr/docs/Web/HTML/Element/article), [`<aside>`](/fr/docs/Web/HTML/Element/aside), [`<h1>`](/fr/docs/Web/HTML/Element/Heading_Elements), [`<h2>`](/fr/docs/Web/HTML/Element/Heading_Elements), [`<h3>`](/fr/docs/Web/HTML/Element/Heading_Elements), [`<h4>`](/fr/docs/Web/HTML/Element/Heading_Elements), [`<h5>`](/fr/docs/Web/HTML/Element/Heading_Elements), [`<h6>`](/fr/docs/Web/HTML/Element/Heading_Elements), [`<hgroup>`](/fr/docs/Web/HTML/Element/hgroup), [`<footer>`](/fr/docs/Web/HTML/Element/footer), [`<section>`](/fr/docs/Web/HTML/Element/section), [`<header>`](/fr/docs/Web/HTML/Element/header) ;
- [Sections et titres d'un document HTML5](/fr/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines)
