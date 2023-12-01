---
title: "<title> : l'élément de titre du document"
slug: Web/HTML/Element/title
---

{{HTMLSidebar}}

L'élément **`<title>`** définit le titre du document (qui est affiché dans la barre de titre du navigateur ou dans l'onglet de la page). Cet élément ne peut contenir que du texte, les balises qu'il contiendrait seraient ignorées.

## Attributs

Cet élément inclut uniquement [les attributs universels](/fr/docs/Web/HTML/Attributs_universels).

## Notes d'utilisation

L'élément `<title>` est toujours utilisé au sein de l'élément {{HTMLElement("head")}} de la page.

### Référencement (SEO)

Le titre d'une page fait partie des éléments principaux qui sont scannés lors de l'indexation d'une page. C'est aussi le texte qui est affiché parmi les résultats du moteur de recherche, de façon proéminente et donc visible par les utilisateurs qui trouvent votre site grâce à un moteur de recherche.

Aussi, mieux vaudra avoir des titres descriptifs plutôt que des titres trop courts ou vagues.

Quelques observations :

- On pourra éviter les titres sur un ou deux mots.
- La longueur affichée pour les titres dans les résultats d'un moteur de recherche se situe entre 55 et 60 caractères. Si le titre est plus long, on veillera à ce que les concepts majeurs apparaissent avant cette longueur.
- Attention aux entités (les chevrons HTML pourront être affichés différemment entre les navigateurs).
- Le titre doit être intelligible et pas une simple concaténation de mots-clés.
- Le titre devra être unique pour un même site.

## Exemples

```html
<title>Et voici le titre de ma page !</title>
```

## Accessibilité

Il est important de fournir une valeur pour l'attribut `title` qui décrit le but de la page de façon claire et concise.

Les personnes utilisant des outils d'assistance peuvent utiliser le titre de la page afin de déterminer rapidement ce qu'elle contient. Ainsi, il peut ne pas être nécessaire de naviguer « dans » la page, ce qui peut prendre du temps et être source de confusion si, ce faisant, on doit déterminer le but de la page.

#### Exemple

```html
<title>Menu - Restaurant chinois Maison bleue - Commande en ligne</title>
```

Mettre à jour la valeur de `title` afin de refléter un changement d'état important (un problème de validation d'un formulaire par exemple) peut également s'avérer utile :

#### Exemple

```html
<title>
  2 erreurs sur votre commande - Restaurant chinois Maison bleue - Commande en
  ligne
</title>
```

- [Comprendre les règles WCAG 2.4](/fr/docs/Web/Accessibility/Understanding_WCAG/Operable#Guideline_2.4_—_Navigable_Provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [_Understanding Success Criterion 2.4.2 | W3C Understanding WCAG 2.0_ (en anglais)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-title.html)

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
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_méta-données"
          >Contenu de méta-données</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        Du texte qui n'est pas du blanc entre éléments (<em
          >inter-element whitespace</em
        >).
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
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Aucun.</td>
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
