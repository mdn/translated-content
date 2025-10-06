---
title: "<title> : l'élément de titre du document"
slug: Web/HTML/Reference/Elements/title
original_slug: Web/HTML/Element/title
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

L'élément [HTML](/fr/docs/Web/HTML) **`<title>`** définit le titre du document (qui est affiché dans la barre de titre du {{glossary("Browser", "navigateur")}} ou dans l'onglet de la page). Il ne contient que du texte&nbsp;; les balises HTML présentes dans l'élément, le cas échéant, sont également traitées comme du texte brut.

```html
<title>Le journal du festival de heavy metal de Mamie</title>
```

## Attributs

Cet élément inclut uniquement [les attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

## Notes d'utilisation

L'élément `<title>` est toujours utilisé au sein de l'élément {{HTMLElement("head")}} de la page.

### Titres de page et référencement (SEO)

Le contenu du titre d'une page peut avoir des implications importantes pour l'optimisation pour les moteurs de recherche ({{glossary("SEO")}}). En général, un titre long et descriptif fonctionne mieux que des titres courts ou génériques. Le contenu du titre est l'un des éléments utilisés par les algorithmes des moteurs de recherche pour décider de l'ordre d'affichage des pages dans les résultats. De plus, le titre est la première «&nbsp;accroche&nbsp;» qui attire l'attention des lecteurs·rices parcourant la page de résultats.

Quelques conseils pour composer de bons titres&nbsp;:

- Évitez les titres d'un ou deux mots. Utilisez une phrase descriptive, ou une association terme-définition pour les pages de glossaire ou de référence.
- Les moteurs de recherche affichent généralement les 55 à 60 premiers caractères d'un titre de page. Le texte au-delà peut être tronqué, donc essayez de ne pas dépasser cette longueur. Si vous devez utiliser un titre plus long, assurez-vous que les parties importantes apparaissent en premier et qu'aucun élément essentiel ne soit dans la partie susceptible d'être coupée.
- N'utilisez pas de «&nbsp;blocs de mots-clés&nbsp;». Si votre titre n'est qu'une liste de mots, les algorithmes risquent de faire baisser la position de votre page dans les résultats.
- Essayez de rendre vos titres aussi uniques que possible sur votre site. Les titres dupliqués ou quasi identiques peuvent entraîner des résultats de recherche inexacts.

## Accessibilité

Il est important de fournir un titre précis et concis pour décrire l'objectif de la page.

Une technique de navigation courante pour les utilisateurs·rices de technologies d'assistance consiste à lire le titre de la page et à en déduire le contenu. En effet, naviguer dans une page pour en déterminer le contenu peut être long et source de confusion. Les titres doivent être uniques pour chaque page d'un site, en mettant idéalement en avant le but principal de la page en premier, suivi du nom du site. Suivre ce modèle permet de s'assurer que le but principal de la page est annoncé en premier par un lecteur d'écran. Cela offre une bien meilleure expérience que d'entendre d'abord le nom du site avant le titre unique de la page, pour chaque page visitée sur un même site.

### Exemple

```html
<title>Menu - Restaurant chinois Maison bleue - Commande en ligne</title>
```

Mettre à jour la valeur de `title` afin de refléter un changement d'état important (un problème de validation d'un formulaire par exemple) peut également s'avérer utile :

```html
<title>
  2 erreurs sur votre commande - Restaurant chinois Maison bleue - Commande en
  ligne
</title>
```

- [Comprendre les règles WCAG 2.4](/fr/docs/Web/Accessibility/Understanding_WCAG/Operable#Guideline_2.4_—_Navigable_Provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Comprendre le critère de réussite 2.4.2 | W3C Comprendre les WCAG 2.0 <sup>(angl.)</sup>](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-title.html)

## Exemples

```html
<title>Et voici le titre de ma page !</title>
```

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Guides/Content_categories"
          >Catégories de contenu</a
        >
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_méta-données"
          >Contenu de méta-données</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        Du texte qui n'est pas un {{glossary("whitespace", "espace")}} entre éléments.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        Les deux balises sont nécessaires. Si <code>&#x3C;/title></code> est
        absent, le navigateur peut ignorer le reste de la page.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Un élément {{HTMLElement("head")}} qui ne contient pas d'autre
        élément {{HTMLElement("title")}}.
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
      <td>Aucun <code>role</code> autorisé.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLTitleElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément SVG {{SVGElement("title")}}
