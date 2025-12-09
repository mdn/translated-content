---
title: "<hgroup> : l'élément de regroupement de titres"
slug: Web/HTML/Reference/Elements/hgroup
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

L'élément [HTML](/fr/docs/Web/HTML) **`<hgroup>`** représente un titre et son contenu associé. Il regroupe un seul élément [`<h1>—<h6>`](/fr/docs/Web/HTML/Reference/Elements/Heading_Elements) avec un ou plusieurs éléments {{HTMLElement("p")}}.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;hgroup&gt;", "tabbed-standard")}}

```html interactive-example
<hgroup>
  <h1>Frankenstein</h1>
  <p>Ou&nbsp;: Le Prométhée moderne</p>
</hgroup>
<p>
  Victor Frankenstein, un scientifique suisse, a une grande ambition&nbsp;:
  créer une vie intelligente. Mais lorsque sa créature s'éveille pour la
  première fois, il se rend compte qu'il a créé un monstre. Un monstre qui,
  abandonné par son maître et rejeté par tous ceux qui le voient, poursuit le Dr
  Frankenstein aux confins de la terre.
</p>
```

```css interactive-example
hgroup {
  text-align: right;
  padding-right: 16px;
  border-right: 10px solid #00c8d7;
}

hgroup h1 {
  margin-bottom: 0;
}

hgroup p {
  margin: 0;
  font-weight: bold;
}
```

## Attributs

Cet élément inclut uniquement les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

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

{{EmbedLiveSample('Exemples')}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Guides/Content_categories">Catégories de contenu</a>
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux">Contenu de flux</a>, contenu de titre, contenu tangible.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        Zéro ou plusieurs éléments {{HTMLElement("p")}}, suivi par l'un des éléments {{HTMLElement("Heading_Elements", "h1")}}, {{HTMLElement("Heading_Elements", "h2")}},
        {{HTMLElement("Heading_Elements", "h3")}}, {{HTMLElement("Heading_Elements", "h4")}},
        {{HTMLElement("Heading_Elements", "h5")}}, or {{HTMLElement("Heading_Elements", "h6")}}, suivis par zéro ou plusieurs éléments {{HTMLElement("p")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balise</th>
      <td>Aucune, la balise d'ouverture et la balise de fermeture sont obligatoires</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément qui accepte du <a href="/fr/docs/Web/HTML/Guides/Content_categories#Contenu_de_flux">contenu de flux</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <code
          ><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/group_role"
            >group</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Tous les rôles sont autorisés.</td>
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

- Autres éléments HTML relatifs aux sections du document&nbsp;: {{HTMLElement("body")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("aside")}}, {{HTMLElement("Heading_Elements", "h1")}}, {{HTMLElement("Heading_Elements", "h2")}}, {{HTMLElement("Heading_Elements", "h3")}}, {{HTMLElement("Heading_Elements", "h4")}}, {{HTMLElement("Heading_Elements", "h5")}}, {{HTMLElement("Heading_Elements", "h6")}}, {{HTMLElement("nav")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("address")}}
- [Sections et plan d'un document HTML](/fr/docs/Web/HTML/Reference/Elements/Heading_Elements)
