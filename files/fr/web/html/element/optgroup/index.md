---
title: <optgroup>
slug: Web/HTML/Element/optgroup
---

{{HTMLSidebar}}

L'élément HTML **`<optgroup>`**, utilisé dans un formulaire, permet de créer un groupe d'options parmi lesquelles on peut choisir dans un élément {{HTMLElement("select")}}.

{{EmbedInteractiveExample("pages/tabbed/optgroup.html", "tabbed-standard")}}

> **Note :** Il n'est pas possible d'imbriquer plusieurs éléments `<optgroup>` entre eux.

## Attributs

Comme tous les autres éléments HTML, cet élément inclut [les attributs universels](/fr/docs/Web/HTML/Attributs_universels).

- `disabled`
  - : Si cet attribut booléen est défini et aucun élément du groupe d'options ne peut être sélectionné. Cet élément ne recevra pas les évènements de navigation (tels que les clics ou les changements de focus). Les navigateurs affichent ces éléments en les grisant.
- `label`
  - : Le nom du groupe d'options qui peut être affiché par le navigateur. Cet attribut est obligatoire.

## Exemples

### HTML

```html
<select>
  <optgroup label="Groupe 1">
    <option>Option 1.1</option>
  </optgroup>
  <optgroup label="Groupe 2">
    <option>Option 2.1</option>
    <option>Option 2.2</option>
  </optgroup>
  <optgroup label="Groupe 3" disabled>
    <option>Option 3.1</option>
    <option>Option 3.2</option>
    <option>Option 3.3</option>
  </optgroup>
</select>
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
      <td>Aucune.</td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>Zéro ou plusieurs éléments {{HTMLElement("option")}}.</td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        La balise de début est obligatoire, la balise de fin est optionnelle si
        l'élément est immédiatement suivi par un autre élément &#x3C;optgroup>
        ou si l'élément parent n'a pas d'autre contenu.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>Un élément {{HTMLElement("select")}}.</td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Aucun.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLOptGroupElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les autres éléments relatifs aux formulaires : {{HTMLElement("form")}}, {{HTMLElement("legend")}}, {{HTMLElement("label")}}, {{HTMLElement("button")}}, {{HTMLElement("select")}}, {{HTMLElement("datalist")}}, {{HTMLElement("option")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("textarea")}}, {{HTMLElement("keygen")}}, {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}} et {{HTMLElement("meter")}}.
