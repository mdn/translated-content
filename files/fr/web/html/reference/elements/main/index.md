---
title: "<main> : l'élément de contenu principal"
slug: Web/HTML/Reference/Elements/main
l10n:
  sourceCommit: 7615562a3689a3e23a2b6b623597f4391740a53e
---

L'élément [HTML](/fr/docs/Web/HTML) **`<main>`** représente le contenu principal du corps ({{HTMLElement("body")}}) d'un document. La zone de contenu principal se compose de contenu directement lié ou qui développe le sujet central d'un document, ou la fonctionnalité centrale d'une application.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;main&gt;", "tabbed-shorter")}}

```html interactive-example
<header>Faits sur les geckos</header>

<main>
  <p>
    Les geckos sont un groupe de lézards généralement petits et nocturnes. Ils
    se trouvent sur tous les continents sauf l'Antarctique.
  </p>

  <p>
    De nombreuses espèces de geckos possèdent des coussinets adhésifs sur leurs
    doigts, ce qui leur permet de grimper aux murs et même aux fenêtres.
  </p>
</main>
```

```css interactive-example
header {
  font:
    bold 7vw Arial,
    sans-serif;
}
```

Un document ne doit pas comporter plus d'un élément `<main>` qui ne possède pas l'attribut [`hidden`](/fr/docs/Web/HTML/Reference/Global_attributes/hidden) défini.

## Attributs

Cet élément inclut uniquement les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

## Notes

Le contenu d'un élément `<main>` doit être unique au document. Le contenu répété dans un ensemble de documents ou de sections de document, comme les barres latérales, les liens de navigation, les informations sur le droit d'auteur, les logos du site et les formulaires de recherche, ne doit pas être inclus, sauf si le formulaire de recherche constitue la fonctionnalité principale de la page.

`<main>` ne contribue pas à la structure du document&nbsp;; c'est-à-dire que, contrairement à des éléments HTML comme {{HTMLElement("body")}}, des titres comme `{{HTMLElement("Heading_Elements", "&lt;h2>")}}`, etc., `<main>` n'affecte pas la notion de structure de page du {{Glossary("DOM")}}. Il est strictement informatif.

## Accessibilité

### Point de repère

L'élément `<main>` a le rôle d'un [repère `main`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/main_role). Les [repères](/fr/docs/Web/Accessibility/ARIA/Guides/Techniques#rôles_de_points_de_repère) peuvent être utilisées par les technologies d'assistance pour identifier et naviguer rapidement entre les grandes sections du document. Il est préférable d'utiliser l'élément `<main>` plutôt que de déclarer `role="main"`, sauf en cas de [problèmes de prise en charge des anciens navigateurs](#compatibilité_des_navigateurs).

### Navigation rapide

La navigation rapide (aussi appelée _skip navigation_ ou _skipnav_ en anglais) est une technique permettant aux outils d'assistance de passer certaines sections de contenu répétés (menu de navigation, bannières, etc.). Cela permet à l'utilisateur·ice d'accéder plus rapidement au contenu principal de la page.

Ajouter un attribut [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id) à l'élément `<main>` lui permet d'être une cible pour la navigation rapide.

```html
<body>
  <a href="#main-content">Aller au contenu principal</a>

  <!-- Contenu relatif à la navigation et en-tête du document -->

  <main id="main-content">
    <!-- Contenu principal de la page -->
  </main>
</body>
```

- [WebAIM&nbsp;: Liens et navigation rapide <sup>(angl.)</sup>](https://webaim.org/techniques/skipnav/)

### Mode lecture

Les fonctionnalités « mode lecture » d'un navigateur vérifient la présence d'un élément `<main>` ainsi que la présence de [titres](/fr/docs/Web/HTML/Reference/Elements/Heading_Elements) et de [sections](/fr/docs/Web/HTML/Reference/Elements#sectionnement_du_contenu) lors de la convertion du document pour le mode lecture.

- [Construire des sites web pour le mode lecture de Safari et pour les autres applications de lecture <sup>(angl.)</sup>](https://medium.com/@mandy.michael/building-websites-for-safari-reader-mode-and-other-reading-apps-1562913c86c9)

## Exemples

### HTML

```html
<!-- autre contenu -->

<main>
  <h1>Pommes</h1>
  <p>La pomme est le fruit à pépin du pommier.</p>

  <article>
    <h2>Pomme rouge</h2>
    <p>Ce sont des pommes rouges vives très communes dans les supermarchés.</p>
    <p></p>
    <p>...</p>
    <p>...</p>
  </article>

  <article>
    <h2>La Granny Smith</h2>
    <p>
      Ces pommes juteuses, vertes, font une très belle garniture pour les tartes
      aux pommes.
    </p>
    <p></p>
    <p>...</p>
    <p>...</p>
  </article>
</main>

<!-- Autre contenu -->
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Guides/Content_categories"
          >Categories de contenu</a
        >
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
          >Contenu de flux</a
        >, contenu tangible.
      </td>
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
      <th scope="row">Omission de balise</th>
      <td>
        Aucune, les balises d'ouverture et de fermeture sont toutes les deux
        obligatoires.
      </td>
    </tr>
    <tr>
      <th scope="row">Éléments parents autorisés</th>
      <td>
        Tout élément qui accepte du
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
          >contenu de flux</a
        >, uniquement si c'est
        <a
          href="https://html.spec.whatwg.org/multipage/grouping-content.html#hierarchically-correct-main-element"
          >un élément hiérarchiquement correct pour un élément
          <code>&#x3C;main></code> <sup>(angl.)</sup></a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <code
          ><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/main_role"
            >main</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Aucun <code>role</code> autorisé</td>
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

- Les éléments de structure de base&nbsp;: {{HTMLElement("html")}}, {{HTMLElement("head")}}, {{HTMLElement("body")}}
- Les éléments liés aux sections&nbsp;: {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("footer")}}, {{HTMLElement("header")}} ou {{HTMLElement("nav")}}
- [ARIA&nbsp;: rôle `main`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/main_role)
