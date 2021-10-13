---
title: <main>
slug: Web/HTML/Element/main
tags:
  - Element
  - HTML
  - Reference
  - Web
translation_of: Web/HTML/Element/main
---
{{HTMLRef}}

L’élément HTML **`<main>`** représente le contenu majoritaire du {{HTMLElement("body")}} du document. Le contenu principal de la zone est constitué de contenu directement en relation, ou qui étend le sujet principal du document ou de la fonctionnalité principale d'une application.

Un document ne peut pas avoir plus d'un seul élément `<main>` sans attribut {{htmlattrxref("hidden")}}.

{{EmbedInteractiveExample("pages/tabbed/main.html","tabbed-shorter")}}

## Attributs

Cet élément prend uniquement en charge [les attributs universels](/fr/docs/Web/HTML/Attributs_universels).

## Notes

- Ce contenu doit être unique dans le document, excluant tout contenu qui est répété sur plusieurs documents comme des barres latérales, liens de navigation, informations relative au droit d'auteur, logo du site, et champs de recherche (sauf, bien entendu, si la fonctionnalité principale du document est un champ de recherche).
- `<main>` ne contribue pas au plan du document. Autrement dit, à la différence d'éléments tels que {{HTMLElement("body")}}, les niveaux de titre comme {{HTMLElement("h2")}}, etc. `<main>` n'affecte pas la structure même de la page, c'est un élément purement informatif.

## Exemples

### HTML

```html
<!-- autre contenu -->

<main>
  <h1>Pommes</h1>
  <p>La pomme est le fruit à pépin du pommier.</p>

  <article>
    <h2>Pomme rouge</h2>
    <p>Ce sont des pommes rouges vives très communes dans les supermarchés.<p>
    <p>... </p>
    <p>... </p>
  </article>

  <article>
    <h2>La Granny Smith</h2>
    <p>Ces pommes juteuses, vertes, font une très belle garniture pour les tartes aux pommes.<p>
    <p>... </p>
    <p>... </p>
  </article>

</main>

<!-- Autre contenu -->
```

### Résultat

{{EmbedLiveSample("Exemples","300","200")}}

## Accessibilité

### Balisage du document

L'élément `<main>` a le rôle d'une [balise `main`](/fr/docs/Web/Accessibility/ARIA/Roles/Main_role). Dans le contexte de l'accessibilité, les [balises](/fr/docs/Accessibilit%C3%A9/ARIA/Techniques_ARIA) peuvent être utilisées par les outils d'assistance afin d'identifier et de naviguer rapidement entre les grandes sections d'un document. On privilégiera l'élément `<main>` à l'ajout du `role="main"`, à moins qu'il faille [prendre en charge d'anciens navigateurs](/fr/docs/Web/HTML/Element/main#Compatibilité_des_navigateurs).

### Navigation rapide

La navigation rapide (aussi appelée _skip navigation_ ou _skipnav_ en anglais) est une technique permettant aux outils d'assistance de passer certaines sections de contenu répétés (menu de navigation, bannières, etc.). Cela permet à l'utilisateur d'accéder plus rapidement au contenu principal de la page.

Ajouter un attribut {{htmlattrxref("id")}} à l'élément `<main>` lui permet d'être une cible pour la navigation rapide.

    <body>
      <a href="#main-content">Aller au contenu principal</a>

      <!-- Contenu relatif à la navigation et en-tête du document -->

      <main id="main-content">
        <!-- Contenu principal de la page -->
      </main>
    </body>

- [WebAIM : Liens et navigation rapide (en anglais)](https://webaim.org/techniques/skipnav/)

### Mode lecture

Les fonctionnalités « mode lecture » d'un navigateur vérifient la présence d'un élément `<main>` ainsi que la présence de [titres](/fr/docs/Web/HTML/Element/Heading_Elements) et de [sections](/fr/docs/Web/HTML/Element#Sectionnement_du_contenu) lors de la convertion du document pour le mode lecture.

- [Construire des sites web pour le mode lecture de Safari et pour les autres applications de lecture (en anglais)](https://medium.com/@mandy.michael/building-websites-for-safari-reader-mode-and-other-reading-apps-1562913c86c9)

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <dfn
          ><a href="/fr/docs/Web/HTML/Catégorie_de_contenu"
            >Categories de contenu</a
          ></dfn
        >
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux"
          >Contenu de flux</a
        >,
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_tangible"
          >contenu tangible</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux"
          >Contenu de flux</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row"><dfn>Omission de balise</dfn></th>
      <td>
        Aucune, les balises d'ouverture et de fermeture sont toutes les deux
        obligatoires.
      </td>
    </tr>
    <tr>
      <th scope="row">Éléments parents autorisés</th>
      <td>
        Tout élément qui accepte du
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux"
          >contenu de flux</a
        >, uniquement si c'est
        <a
          href="https://html.spec.whatwg.org/multipage/grouping-content.html#hierarchically-correct-main-element"
          >un élément hiérarchiquement correct pour un élément
          <code>&#x3C;main></code></a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>
        Le rôle <code>main</code> est appliqué à <code>&#x3C;main></code> par
        défaut, et le rôle <code
          ><a
            href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_presentation_role"
            >presentation</a
          ></code
        > est également autorisé.
      </td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

| Spécification                                                                                                    | État                             | Commentaires                                                                                                                                                                                                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('HTML5.1', 'grouping-content.html#the-main-element', '&lt;main&gt;')}}     | {{Spec2('HTML5.1')}}     | Pas de changement de {{SpecName('HTML5 W3C')}}                                                                                                                                                                                                                                                                                                                                     |
| {{SpecName('HTML WHATWG', '#semantics.html#the-main-element', '&lt;main&gt;')}}         | {{Spec2('HTML WHATWG')}} | Retrait de la restriction sur l'interdiction de l'utilisation de l'élément `<main>` comme descendant d'un élément {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("footer")}}, {{HTMLElement("header")}}, ou {{HTMLElement("nav")}}. Retrait de la restriction interdisant d'utiliser plusieurs fois `<main>` dans un document. |
| {{SpecName('HTML5 W3C', 'grouping-content.html#the-main-element', '&lt;main&gt;')}} | {{Spec2('HTML5 W3C')}}     | Définition intiale.                                                                                                                                                                                                                                                                                                                                                                       |

## Compatibilité des navigateurs

{{Compat("html.elements.main")}}

## Voir aussi

- Les éléments qui permettent de structurer un document HTML

  - {{HTMLElement("html")}}
  - {{HTMLElement("head")}}
  - {{HTMLElement("body")}}

- Les éléments liés au plan d'un document HTML :

  - {{HTMLElement("article")}}
  - {{HTMLElement("aside")}}
  - {{HTMLElement("footer")}}
  - {{HTMLElement("header")}}
  - {{HTMLElement("nav")}}
