---
title: "<html> : l'élément de racine du document HTML"
slug: Web/HTML/Reference/Elements/html
original_slug: Web/HTML/Element/html
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

L'élément HTML **`<html>`** représente la racine d'un document HTML ou XHTML. Tout autre élément du document doit être un descendant de cet élément.

## Attributs

Cet élément inclut [les attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

- `version`{{deprecated_inline}}
  - : Définit la version du document HTML <i lang="en">{{glossary("Doctype", "Document Type Definition")}}</i> qui s'applique pour le document courant. Cet attribut n'est pas nécessaire car il est redondant avec l'information de version se trouvant dans la déclaration de type du document (_doctype_).
- `xmlns`
  - : Définit l'{{glossary("Namespace", "espace de noms")}} {{glossary("XML")}} du document. La valeur par défaut est `"http://www.w3.org/1999/xhtml"`. Ceci est requis dans les documents analysés avec des {{glossary("parser", "analyseurs")}} XML, et optionnel dans les documents text/html.

## Exemples

```html
<!doctype html>
<html lang="fr">
  <head>
    <!-- … -->
  </head>
  <body>
    <!-- … -->
  </body>
</html>
```

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Guides/Content_categories"
          >Catégories de contenu</a
        >
      </th>
      <td>Aucune</td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        Un élément {{HTMLElement("head")}} suivi par un élément
        {{HTMLElement("body")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        La balise de début peut être absente si le premier objet appartenant à
        l'élément <code>&#x3C;html></code> n'est pas un commentaire.<br />La
        balise de fin peut être absente si l'élément
        <code>&#x3C;html></code> n'est pas directement suivi par un commentaire
        et qu'il contient un élément {{HTMLElement("body")}} qui n'est
        ni vide ou dont la balise de début est présente.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>Aucun élément, c'est la racine du document.</td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/document_role"
          >document</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Aucun <code>role</code> autorisé.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLHtmlElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément MathML de plus haut niveau&nbsp;: {{MathMLElement("math")}}
- L'élément SVG de plus haut niveau&nbsp;: {{SVGElement("svg")}}
