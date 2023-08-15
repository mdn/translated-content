---
title: "<param> : l'élément paramètre d'un objet"
slug: Web/HTML/Element/param
---

{{HTMLSidebar}}

L'élément HTML **`<param>`** définit les paramètres qui peuvent être employés dans un élément {{HTMLElement("object")}}.

## Attributs

Comme tous les autres éléments HTML, cet élément inclut [les attributs universels](/fr/docs/Web/HTML/Attributs_universels).

- `name`
  - : Le nom du paramètre
- `value`
  - : Cet attribut définit la valeur du paramètre.

### Attributs obsolètes

- `type` {{deprecated_inline}}
  - : Cet attribut est uniquement utilisé si l'attribut `valuetype` vaut `"ref"`. Il définit le type MIME des valeurs trouvées à l'URI.
- `valuetype` {{deprecated_inline}}

  - : Cet attribut définit le type de la valeur indiquée par l'attribut `value`. Les valeurs possibles sont :

    - `data` : la valeur par défaut. La valeur est passée sous la forme d'une chaîne de caractères.
    - `ref` : la valeur est une URI vers une ressource où sont stockées les valeurs de l'exécution.
    - `object` : l'identifiant d'un autre élément {{HTMLElement("object")}} dans le document.

## Exemples

```html
<object data="animation.swf" type="application/x-shockwave-flash">
  <param name="param11" value="valeurConf" />
</object>
```

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu"
          >Catégories de contenu</a
        >
      </th>
      <td>Aucun.</td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>Aucun, c'est un élément vide.</td>
    </tr>
    <tr>
      <th scope="row">Omission de balise</th>
      <td>
        Cet élément est un élément vide, As it is a void element, the start tag
        must be present and the end tag must not be present.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Un élément {{HTMLElement("object")}} avant du
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux"
          >contenu de flux</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Aucun.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLParamElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{HTMLElement("object")}}
