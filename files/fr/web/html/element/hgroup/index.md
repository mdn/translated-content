---
title: <hgroup>
slug: Web/HTML/Element/hgroup
tags:
  - Element
  - HTML
  - Reference
  - Web
translation_of: Web/HTML/Element/hgroup
---
{{HTMLRef}}

L'élément HTML **`<hgroup>`** représente un titre de plusieurs niveaux pour une section d'un document. Il regroupe un ensemble d'éléments [`<h1>–<h6>`](/fr/docs/Web/HTML/Element/Heading_Elements).

{{EmbedInteractiveExample("pages/tabbed/hgroup.html", "tabbed-standard")}}

## Attributs

Cet élément inclut uniquement [les attributs universels](/fr/docs/Web/HTML/Attributs_universels).

## Notes d'utilisation

> **Note :** l'élement `<hgroup>` a été retiré de la spécification HTML5 (W3C) mais est toujours inscrit dans la version WHATWG de HTML. Il est partiellement implémenté dans la plupart des navigateurs et à ce titre, il est peu probable qu'il disparaisse.
> Cependant, le but d'un élément `<hgroup>` est d'affecter la façon dont les titres sont affichés [par l'algorithme de mise en plan défini dans la spécification HTML](/fr/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines#The_HTML5_outline_algorithm). **Cet algorithme n'est pas implémenté dans la plupart des navigateurs** et la sémantique de l'élément `<hgroup>` est donc uniquement théorique.
> La spécification HTML5 (W3C) fournit quelques indications pour baliser [les sous-titres et les titres alternatifs](https://www.w3.org/TR/html52/common-idioms-without-dedicated-elements.html#common-idioms-without-dedicated-elements) sans requérir à `<hgroup>`.

L'élément `<hgroup>` permet de regrouper le titre principal d'une section avec son (ou ses) sous-titre(s) afin d'obtenir un titre sur plusieurs niveaux sémantiques.

Autrement dit, l'élément `<hgroup>` évite que l'utilisation d'éléments [`<h1>–<h6>`](/fr/docs/Web/HTML/Element/Heading_Elements) secondaires crée différentes sections dans le plan (ce qui est le résultat obtenu normalement lorsque [`<h1>–<h6>`](/fr/docs/Web/HTML/Element/Heading_Elements) sont utilisés hors d'un `<hgroup>`).

Dans le plan d'un document, obtenu par [l'algorithme défini dans la spécification HTML](/fr/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines#The_HTML5_outline_algorithm), l'élément `<hgroup>` forme une seule entité logique contenant l'ensemble des éléments-fils [`<h1>–<h6>`](/fr/docs/Web/HTML/Element/Heading_Elements) du `<hgroup>` et qui fait donc apparaître une seule section pour ce groupe de titres dans le plan.

Pour afficher le contenu d'un tel titre, l'agent utilisateur doit choisir comment représenter l'élément `<hgroup>` afin d'exprimer notamment les différents niveaux. Voici quelques exemples des approches qui seraient possibles :

- Un élément `<hgroup>` peut afficher un titre où les deux points (:) sont utilisés comme séparateur entre le titre principal et le premier titre secondaire
- Un élément `<hgroup>` peut afficher le titre principal, suivi du/des titre(s) secondaires entre parenthèses

Prenons ce document HTML par exemple :

```html
<!DOCTYPE html>
<title>HTML Standard</title>
<body>
  <hgroup id="document-title">
    <h1>HTML</h1>
    <h2>Living Standard — Last Updated 12 August 2016</h2>
  </hgroup>
  <p>Some intro to the document.</p>
  <h2>Table of contents</h2>
  <ol id=toc>...</ol>
  <h2>First section</h2>
  <p>Some intro to the first section.</p>
</body>
```

Le rendu de ce document pourrait être :

![](outline-colon.png)

Où on voit que le titre principal est suivi de deux points puis d'un espace avant le titre secondaire, _Living Standard — Last Updated 12 August 2016_.

On pourrait également avoir cet affichage :

![Plan rendu en incluant un élément <hgroup>, avec des parenthèses autour du titre secondaire](outline-paren.png)

Ici, le titre secondaire est placé entre parenthèses après le titre principal.

## Exemples

### HTML

```html
<hgroup id="document-title">
  <h1>HTML</h1>
  <h2>Living Standard — dernière mise à jour le 12 août 2016</h2>
</hgroup>
```

### Résultat

{{EmbedLiveSample("Exemples")}}

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
        <a href="/fr/docs/Web/HTML/Cat%C3%A9gorie_de_contenu#Contenu_de_titre"
          >contenu de titre</a
        >,
        <a href="/fr/docs/Web/HTML/Cat%C3%A9gorie_de_contenu#Contenu_tangible"
          >contenu tangible</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        Un ou plusieurs éléments {{HTMLElement("h1")}},
        {{HTMLElement("h2")}}, {{HTMLElement("h3")}},
        {{HTMLElement("h4")}}, {{HTMLElement("h5")}},
        {{HTMLElement("h6")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balise</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément qui accepte du
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux"
          >contenu de flux</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>{{ARIARole("tab")}}, {{ARIARole("presentation")}}</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

| Spécification                                                                                                | État                             | Commentaires |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------------ |
| {{SpecName('HTML WHATWG', 'semantics.html#the-hgroup-element', '&lt;hgroup&gt;')}} | {{Spec2('HTML WHATWG')}} |              |

## Compatibilité des navigateurs

{{Compat("html.elements.hgroup")}}

## Voir aussi

- Les autres éléments HTML relatifs aux sections du document : {{HTMLElement("body")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("aside")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("nav")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("address")}}
- [Les sections et le plan d'un document HTML5](/fr/docs/Web/HTML/Sections_and_Outlines_of_an_HTML5_document)
