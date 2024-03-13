---
title: "<q> : l'élément de citation en incise"
slug: Web/HTML/Element/q
---

{{HTMLSidebar}}

L'élément HTML **`<q>`** indique que le texte qu'il contient est une citation en incise. La plupart des navigateurs modernes entoure le texte de cet élément avec des marques de citation. Cet élément est destiné aux citations courtes qui ne nécessitent pas de sauts de paragraphe. Pour les plus grandes citations, on utilisera l'élément {{HTMLElement("blockquote")}}.

{{EmbedInteractiveExample("pages/tabbed/q.html", "tabbed-shorter")}}

> **Note :** La plupart des navigateurs récents ajoutent automatiquement des guillemets autours du contenu d'un élément `<q>` mais il peut être nécessaire d'ajouter une règle CSS pour les ajouter dans les anciens navigateurs.

## Attributs

Comme tous les autres éléments HTML, cet élément inclut [les attributs universels](/fr/docs/Web/HTML/Attributs_universels).

- `cite`
  - : La valeur de cet attribut est une URL désignant la source du message ou de l'information citée. Cet attribut est prévu pour fournir des renseignements concernant le contexte ou la référence de cette citation.

## Exemples

### HTML

```html
<p>
  Chaque fois que Kenny est tué, Stan dira
  <q cite="http://fr.wikipedia.org/wiki/Kenny_McCormick#Le_dialogue_rituel">
    Oh mon Dieu, ils ont tué Kenny ! </q
  >.
</p>
```

### Résultat

{{EmbedLiveSample("Exemples","300","120")}}

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
          href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phras.C3.A9"
          >contenu phrasé</a
        >,
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_tangible"
          >contenu tangible</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a
          href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phras.C3.A9"
          >Contenu phrasé</a
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
        Tout élément acceptant du
        <a
          href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phras.C3.A9"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Tous les rôles sont autorisés.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLQuoteElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{HTMLElement("blockquote")}} pour les citations longues
- {{HTMLElement("cite")}} pour les sources des citations
