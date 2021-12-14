---
title: '<datalist> : l''élément de liste des données'
slug: Web/HTML/Element/datalist
tags:
  - Element
  - HTML
  - HTML forms
  - HTML5
  - Reference
  - Web
translation_of: Web/HTML/Element/datalist
browser-compat: html.elements.datalist
---
{{HTMLRef}}

L'élément HTML **`<datalist>`** contient un ensemble d'éléments [`<option>`](/fr/docs/Web/HTML/Element/Option) qui représentent les valeurs possibles pour d'autres contrôles.

{{EmbedInteractiveExample("pages/tabbed/datalist.html", "tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/Guide/HTML/Content_categories"
          >Catégories de contenu</a
        >
      </th>
      <td>
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content"
          >Contenu de flux</a
        >,
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        Soit
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >du contenu phrasé</a
        >
        ou zéro ou plusieurs éléments
        <a href="/fr/docs/Web/HTML/Element/Option"><code>&#x3C;option></code></a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        Aucune, la balise d'ouverture et la balise de fermeture sont
        obligatoires.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        N'importe quel élément qui accepte
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >du contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="/fr/docs/Web/Accessibility/ARIA/Roles/listbox_role"
          ><code>listbox</code></a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Aucun.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>
        <a href="/fr/docs/Web/API/HTMLDataListElement"
          ><code>HTMLDataListElement</code></a
        >
      </td>
    </tr>
  </tbody>
</table>

## Attributs

Cet élément ne possède que [les attributs universels](/fr/docs/Web/HTML/Global_attributes), communs à tous les éléments.

## Exemples

### HTML

```html
<label for="monNavigateur">Veuillez choisir un navigateur parmi ceux-ci :</label>
<input list="navigateurs" id="monNavigateur" name="monNavigateur"/>
<datalist id="navigateurs">
  <option value="Chrome">
  <option value="Firefox">
  <option value="Internet Explorer">
  <option value="Opera">
  <option value="Safari">
  <option value="Microsoft Edge">
</datalist>
```

#### Résultat

{{EmbedLiveSample("Exemples", "", 100)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément [`<input>`](/fr/docs/Web/HTML/Element/Input) et plus précisément son attribut [`list`](/fr/docs/Web/HTML/Element/Input#attr-list).
- L'élément [`<option>`](/fr/docs/Web/HTML/Element/Option).
