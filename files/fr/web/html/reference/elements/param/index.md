---
title: "<param> : l'élément paramètre d'un objet"
slug: Web/HTML/Reference/Elements/param
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

{{Deprecated_Header}}

L'élément [HTML](/fr/docs/Web/HTML) **`<param>`** définit des paramètres pour un élément {{HTMLElement("object")}}.

> [!NOTE]
> Utilisez l'élément {{HTMLElement("object")}} avec l'attribut [`data`](/fr/docs/Web/HTML/Reference/Elements/object#data) pour définir l'URL d'une ressource externe.

## Attributs

Cet élément inclut les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

- `name` {{Deprecated_Inline}}
  - : Le nom du paramètre.
- `value` {{Deprecated_Inline}}
  - : Cet attribut définit la valeur du paramètre.
- `type` {{Deprecated_Inline}}
  - : Cet attribut est uniquement utilisé si l'attribut `valuetype` vaut `ref`. Il définit le type MIME des valeurs trouvées à l'URI.
- `valuetype` {{Deprecated_Inline}}
  - : Cet attribut définit le type de la valeur indiquée par l'attribut `value`. Les valeurs possibles sont&nbsp;:
    - `data`&nbsp;: la valeur par défaut. La valeur est passée sous la forme d'une chaîne de caractères.
    - `ref`&nbsp;: la valeur est une URI vers une ressource où sont stockées les valeurs de l'exécution.
    - `object`&nbsp;: l'identifiant d'un autre élément {{HTMLElement("object")}} dans le document.

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Guides/Content_categories"
          >Catégories de contenu</a
        >
      </th>
      <td>Aucun.</td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>Aucun&nbsp;; c'est un {{Glossary("void element", "élément vide")}}.</td>
    </tr>
    <tr>
      <th scope="row">Omission de balise</th>
      <td>Doit avoir une balise de début et ne doit pas avoir de balise de fin.</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Un élément {{HTMLElement("object")}} avant du
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
          >contenu de flux</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >Pas de rôle correspondant <sup>(angl.)</sup></a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Aucun <code>role</code> autorisé</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{DOMxRef("HTMLParamElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément {{HTMLElement("object")}}
