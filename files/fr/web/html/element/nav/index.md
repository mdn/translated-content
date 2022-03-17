---
title: '<nav> : l''élément de section de navigation'
slug: Web/HTML/Element/nav
tags:
  - Element
  - HTML
  - Reference
  - Web
translation_of: Web/HTML/Element/nav
---
{{HTMLRef}}

L'élément HTML **\<nav>** représente une section d'une page ayant des liens vers d'autres pages ou des fragments de cette page. Autrement dit, c'est une section destinée à la navigation dans un document (avec des menus, des tables des matières, des index, etc.).

{{EmbedInteractiveExample("pages/tabbed/nav.html", "tabbed-standard")}}

## Attributs

Cet élément ne possède que [les attributs universels](/fr/docs/Web/HTML/Global_attributes).

## Notes d'utilisation

- Tous les liens d'un document ne doivent pas faire partie d'un élément `<nav>`. Ce dernier est fait pour créer des blocs conséquents contenants des liens de navigations au sein du document. L'élément {{HTMLElement("footer")}} possède souvent différents liens, il n'a pour autant pas besoin d'être dans un élément {{HTMLElement("nav")}}.
- Un document peut avoir plusieurs éléments {{HTMLElement("nav")}}, par exemple un pour la navigation sur le site et un autre pour la navigation au sein de la page. L'attribut [`aria-labelledby`](/fr/docs/Accessibilité/ARIA/Techniques_ARIA/Utiliser_l_attribut_aria-labelledby) pourra être utilisé afin d'améliorer l'accessibilité.
- Les agents utilisateurs, tels que les lecteurs d'écrans assistant les utilisateurs handicapés, peuvent utiliser cet élément pour déterminer s'il faut omettre ou non le rendu initial du contenu relatif uniquement à la navigation.

## Exemples

### HTML

```html
<nav class="menu">
  <ul>
    <li><a href="#Accueil">Accueil</a></li>
    <li><a href="#Apropos">À propos</a></li>
    <li><a href="#Contact">Contact</a></li>
  </ul>
</nav>
```

### Résultat

{{EmbedLiveSample("Exemples","100%","100%")}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <dfn
          ><a href="/fr/docs/Web/HTML/Catégorie_de_contenu"
            >Catégories de contenu</a
          ></dfn
        >
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux"
          >Contenu de flux</a
        >,
        <a
          href="/fr/docs/Web/HTML/Cat%C3%A9gorie_de_contenu#Contenu_sectionnant"
          >contenu sectionnant</a
        >,
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_tangible"
          >contenu tangible</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row"><dfn>Contenu autorisé</dfn></th>
      <td>
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux"
          >Contenu de flux</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row"><dfn>Omission de balises</dfn></th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row"><dfn>Parents autorisés</dfn></th>
      <td>
        Tout élément acceptant du
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux"
          >contenu de flux</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Aucun</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

| Spécification                                                                                        | État                             | Commentaires                                       |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------------------------------------- |
| {{SpecName('HTML WHATWG', 'sections.html#the-nav-element', '&lt;nav&gt;')}} | {{Spec2('HTML WHATWG')}} | Aucune modification depuis la dernière dérivation. |
| {{SpecName('HTML5 W3C', 'sections.html#the-nav-element', '&lt;nav&gt;')}}     | {{Spec2('HTML5 W3C')}}     | Définition initiale.                               |

## Compatibilité des navigateurs

{{Compat("html.elements.nav")}}

## Voir aussi

- Les autres éléments HTML en relation avec les sections : {{HTMLElement("body")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("aside")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("address")}}
- [Plan et section d'un document HTML5](/fr/docs/Web/HTML/Sections_and_Outlines_of_an_HTML5_document)
- [ARIA : le rôle `navigation`](/fr/docs/Web/Accessibility/ARIA/Roles/Navigation_Role)
