---
title: '<section> : l''élément de section générique'
slug: Web/HTML/Element/section
tags:
  - Element
  - HTML
  - Reference
  - Web
translation_of: Web/HTML/Element/section
---
{{HTMLRef}}

L'élément HTML **`<section>`** représente une section générique d'un document, par exemple un groupe de contenu thématique. Une section commence généralement avec un titre.

{{EmbedInteractiveExample("pages/tabbed/section.html", "tabbed-standard")}}

Ainsi, un menu de navigation devrait être délimité par un élément {{htmlelement("nav")}} mais une liste de résultat de recherche, qui ne dispose pas d'élément spécifique pour être représentée, pourrait être englobée dans un élément `<section>`.

> **Note :** Si le contenu de l'élément devrait être considéré comme un fragment indépendant (qui puisse être séparée du reste du contenu), l'élément {{HTMLElement("article")}} sera plus pertinent.

## Attributs

Cet élément inclut uniquement [les attributs universels](/fr/docs/Web/HTML/Attributs_universels).

## Notes d'utilisation

- Chaque élément `<section>` devrait être identifié, généralement grâce à un élément de titre ({{HTMLElement('h1')}}-{{HTMLElement('h6')}}) qui est un élément fils de l'élément `<section>`.
- S'il est plus pertinent que le contenu soit à part, on utilisera l'élément {{HTMLElement("article")}}.
- L'élément `<section>` ne doit pas être utilisé comme un conteneur générique : c'est le rôle de {{HTMLElement("div")}}, notamment lorsque le sectionnement du contenu sert uniquement la mise en forme. Pour savoir lequel utiliser, on peut se demander si la section doit apparaître sur le plan du document : si oui, on utilisera `<section>`, sinon, `<div>`.

## Exemples

### HTML

```html
<section>
  <h1>Titre</h1>
  <p>Du contenu sur un thème pour ce titre</p>
</section>
```

### Résultat

{{EmbedLiveSample("Exemples","100%","120")}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu"
          >Catégories de contenu</a
        >
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux"
          >Contenu de flux</a
        >,
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_sectionnant"
          >contenu sectionnant</a
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
      <th scope="row">Omission de balises</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément qui accepte du
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux"
          >contenu de flux</a
        >. Un élément <code>&#x3C;section></code> ne peut pas être le descendant
        d'un élément {{HTMLElement("address")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>
        {{ARIARole("alert")}}, {{ARIARole("alertdialog")}},
        {{ARIARole("application")}}, {{ARIARole("banner")}},
        {{ARIARole("complementary")}},
        {{ARIARole("contentinfo")}}, {{ARIARole("dialog")}},
        {{ARIARole("document")}}, {{ARIARole("feed")}},
        {{ARIARole("log")}}, {{ARIARole("main")}},
        {{ARIARole("marquee")}}, {{ARIARole("navigation")}},
        {{ARIARole("search")}}, {{ARIARole("status")}},
        {{ARIARole("tabpanel")}}
      </td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

| Spécification                                                                                                    | État                             | Commentaires |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------ |
| {{SpecName('HTML WHATWG', 'sections.html#the-section-element', '&lt;section&gt;')}} | {{Spec2('HTML WHATWG')}} |              |
| {{SpecName('HTML5.1', 'sections.html#the-section-element', '&lt;section&gt;')}}         | {{Spec2('HTML5.1')}}     |              |
| {{SpecName('HTML5 W3C', 'sections.html#the-section-element', '&lt;section&gt;')}}     | {{Spec2('HTML5 W3C')}}     |              |

## Compatibilité des navigateurs

{{Compat("html.elements.section")}}

## Voir aussi

- Les autres éléments HTML relatifs au plan du document : {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("address")}}
- [Structure et sections d'un document HTML5](/fr/docs/Web/HTML/Sections_and_Outlines_of_an_HTML5_document)
- [ARIA : le rôle `region`](/fr/docs/Web/Accessibility/ARIA/Roles/Region_role)
