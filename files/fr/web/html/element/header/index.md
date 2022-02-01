---
title: <header>
slug: Web/HTML/Element/header
tags:
  - Element
  - HTML
  - Reference
  - Web
translation_of: Web/HTML/Element/header
---
{{HTMLRef}}

L'**élément HTML `<header>`** représente un groupe de contenu introductif ou de contenu aidant à la navigation. Il peut contenir des éléments de titre, mais aussi d'autres éléments tels qu'un logo, un formulaire de recherche, etc.

{{EmbedInteractiveExample("pages/tabbed/header.html", "tabbed-standard")}}

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
        >
        mais sans élément descendant qui soit {{HTMLElement("footer")}}
        ou <code>&#x3C;header></code>
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément acceptant du
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux"
          >contenu de flux</a
        >. Il est à noter qu'un élément <code>&#x3C;header></code> ne doit pas
        descendre d'un élément {{HTMLElement("address")}},
        {{HTMLElement("footer")}} ou d'un autre élément
        <code>&#x3C;header></code>.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>
        {{ARIARole("group")}}, {{ARIARole("presentation")}}
      </td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Notes d'utilisation

L'élément `<header>` n'est pas une section de contenu et n'introduit donc pas de nouvelle section dans ls [structure](/fr/docs/Web/HTML/Sections_and_Outlines_of_an_HTML5_document). Cela dit, un élément `<header>` est généralement destiné à contenir l'en-tête de la section environnante (un élément `h1`-`h6`), mais ce **n'est pas** obligatoire.

### Usage historique

Bien que l'élément `<header>` ne fasse pas partie de la spécification HTML avant {{glossary("HTML5")}} , il existait de façon implicite depuis les premières versions. [En consultant le premier site web](http://info.cern.ch/), il était originellement utilisé comme l'élément `<head>`. À un moment donné, il a été décidé d'utiliser un nom différent. Cela a permis à `<header>` d'être libre de remplir un rôle différent par la suite.

## Attributs

Comme tous les éléments HTML, cet élément possède les [attributs universels](/fr/docs/Web/HTML/Attributs_universels).

## Exemples

### En-tête de page

#### HTML

```html
<header>
  <h1>Titre principal</h1>
  <img src="mdn-logo-sm.png" alt="MDN logo">
</header>
```

#### Résultat

{{EmbedLiveSample("En-tête_de_page","100%","200")}}

### En-tête pour un article

#### HTML

```html
<article>
  <header>
    <h2>La planète Terre</h2>
    <p>Publié le <time datetime="2017-10-04">4 octobre 2017</time> par Jeanne Smith</p>
  </header>
  <p>Nous vivons sur une planète bleue et verte</p>
  <p><a href="https://example.com/the-planet-earth/">Poursuivre la lecture…</a></p>
</article>
```

#### Résultat

{{EmbedLiveSample("En-tête_pour_un_article","100%","200")}}

## Spécifications

| Spécification                                                                                                | État                             | Commentaires |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------------ |
| {{SpecName('HTML WHATWG', 'semantics.html#the-header-element', '&lt;header&gt;')}} | {{Spec2('HTML WHATWG')}} |              |
| {{SpecName('HTML5 W3C', 'sections.html#the-header-element', '&lt;header&gt;')}}     | {{Spec2('HTML5 W3C')}}     |              |

## Compatibilité des navigateurs

{{Compat("html.elements.header")}}

## Voir aussi

- Autres éléments liés à la section d'un document : {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("footer")}}, {{HTMLElement("section")}}, {{HTMLElement("address")}}
- [Plan et sections d'un document HTML5](/fr/docs/Web/HTML/Sections_and_Outlines_of_an_HTML5_document)
