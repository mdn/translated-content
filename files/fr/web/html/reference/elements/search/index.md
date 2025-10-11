---
title: "<search>: l'élément de recherche"
slug: Web/HTML/Reference/Elements/search
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

L'élément [HTML](/fr/docs/Web/HTML) **`<search>`** est un conteneur représentant les parties du document ou de l'application avec des contrôles de formulaire ou d'autres contenus liés à l'exécution d'une opération de recherche ou de filtrage. L'élément `<search>` identifie sémantiquement le but du contenu de l'élément comme ayant des capacités de recherche ou de filtrage. La fonctionnalité de recherche ou de filtrage peut concerner le site Web ou l'application, la page Web ou le document actuel, ou l'ensemble d'Internet ou une sous-section de celui-ci.

## Attributs

Cet élément inclut uniquement les [attributs globaux](/fr/docs/Web/HTML/Reference/Global_attributes).

## Notes d'utilisation

L'élément `<search>` n'est pas destiné à présenter les résultats de recherche. Au contraire, les résultats de recherche ou filtrés doivent être présentés comme faisant partie du contenu principal de la page Web. Cela dit, les suggestions et les liens qui font partie de la fonctionnalité de «&nbsp;recherche rapide&nbsp;» dans le cadre de la recherche ou de la fonctionnalité de filtrage sont correctement imbriqués dans le contenu de l'élément `<search>` car ce sont des fonctionnalités de recherche.

## Accessibilité

L'élément `<search>` définit un repère [`search`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/search_role). Cela supprime le besoin d'ajouter `role=search` à un élément {{HTMLElement('form')}}.

## Exemples

### Formulaire de recherche dans l'en-tête

Cet exemple démontre l'utilisation de `<search>` comme conteneur pour une recherche dans l'en-tête d'un site Web afin d'effectuer une recherche sur l'ensemble du site. Le `<search>` est un conteneur sémantique pour le {{HTMLElement("form")}} qui soumet la requête de recherche saisie par l'utilisateur à un serveur.

#### HTML

```html
<header>
  <h1>Site de film</h1>
  <search>
    <form action="./search/">
      <label for="movie">Trouver un film</label>
      <input type="search" id="movie" name="q" />
      <button type="submit">Rechercher</button>
    </form>
  </search>
</header>
```

#### Résultat

{{EmbedLiveSample('Header search form')}}

### Application Web de recherche

Cet exemple démontre le contenu potentiel du DOM lors de l'inclusion dynamique de la fonctionnalité de recherche JavaScript dans une application Web. Lorsque la fonctionnalité de recherche est entièrement implémentée avec JavaScript, si aucun formulaire n'est soumis, ni un élément {{HTMLElement("form")}} ni un {{HTMLElement("button")}} de soumission ne sont requis. Pour des raisons sémantiques, l'élément `<search>` est inclus pour contenir les capacités de recherche et de filtrage.

#### HTML

```html
<search>
  <label>
    Trouver et filtrer votre requête
    <input type="search" id="query" />
  </label>
  <label>
    <input type="checkbox" id="exact-only" />
    Correspondances exactes uniquement
  </label>

  <section>
    <h3>Résultats&nbsp;:</h3>
    <ul id="results">
      <!-- contenu des résultats de recherche -->
    </ul>
    <output id="no-results">
      <!-- contenu en cas d'absence de résultats -->
    </output>
  </section>
</search>
```

#### Résultat

{{EmbedLiveSample('application_web_de_recherche')}}

> [!NOTE]
> Rappelez-vous que certains utilisateurs n'ont pas JavaScript, et aucun de vos utilisateurs n'a JavaScript en cours d'exécution jusqu'à ce que le JavaScript soit téléchargé, analysé et exécuté avec succès. Assurez-vous que vos utilisateurs peuvent accéder au contenu de votre site avec JavaScript désactivé.

### Recherches multiples

This example demonstrates a page with two search features. The first is a global site search located on the header. The second is a search and filter based on the page context, in our example a car search.

#### HTML

```html
<body>
  <header>
    <h1>Agence de location de voitures</h1>
    <search title="Site Web">...</search>
  </header>
  <main>
    <h2>Voitures disponibles à la location</h2>
    <search title="Voitures">
      <h3>Filtrer les résultats</h3>
      ...
    </search>
    <article>
      <!-- contenu des résultats de recherche -->
    </article>
  </main>
</body>
```

#### Résultat

{{EmbedLiveSample('recherches_multiples')}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Guides/Content_categories">Catégories de contenu</a>
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux">Contenu de flux</a>, <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_tangible">contenu tangible</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux">Contenu de flux</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balise</th>
      <td>Aucune, la balise de début et la balise de fin sont obligatoires.</td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <code><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/search_role">search</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/form_role"><code>form</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/group_role"><code>group</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/region_role"><code>region</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/search_role"><code>search</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Autres éléments liés à la recherche&nbsp;:
  - {{HTMLElement("header")}}
  - {{HTMLElement("footer")}}
  - {{HTMLElement("aside")}}
  - {{HTMLElement("nav")}}
  - {{HTMLElement("form")}}
- [ARIA: le rôle de recherche](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/search_role)
