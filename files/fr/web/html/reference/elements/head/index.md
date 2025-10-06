---
title: "<head> : l'élément de métadonnées (en-tête) du document"
slug: Web/HTML/Reference/Elements/head
original_slug: Web/HTML/Element/head
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

L'élément [HTML](/fr/docs/Web/HTML) **`<head>`** fournit des informations générales ({{glossary("metadata", "métadonnées")}}) sur le document, incluant son [titre](/fr/docs/Web/HTML/Reference/Elements/title), [scripts](/fr/docs/Web/HTML/Reference/Elements/script), et [feuilles de style](/fr/docs/Web/HTML/Reference/Elements/style). Il ne peut y avoir qu'un seul élément `<head>` dans un document HTML.

> [!NOTE]
> L'élément `<head>` contient principalement des données destinées au traitement automatisé et pas nécessairement lisibles par des humains. Pour afficher des informations lisibles pour les utilisateurs dans des en-têtes ou titre, voir l'élément {{HTMLElement("header")}}.

## Attributs

Cet élément inclut [les attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

- `profile`{{deprecated_inline}}
  - : L'{{glossary("URI")}} d'un ou plusieurs profils de métadonnées, séparés par un {{Glossary("whitespace", "espace")}}.

## Exemples

```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Titre du document</title>
  </head>
</html>
```

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <dfn
          ><a href="/fr/docs/Web/HTML/Guides/Content_categories"
            >Catégories de contenu</a
          ></dfn
        >
      </th>
      <td>Aucune</td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        Si le document est un document {{HTMLElement("iframe")}}
        <a href="/fr/docs/Web/HTML/Reference/Elements/iframe#srcdoc"><code>srcdoc</code></a>, ou si des informations de titre sont disponibles via un protocole de
        plus haut niveau (comme l'objet d'un courriel HTML), zéro ou plusieurs
        éléments de contenu de métadonnées.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        La balise de début peut être absente si le premier contenu est un
        élément.<br />La balise de fermeture peut être absente si le premier
        objet suivant l'élément <code>&#x3C;head></code> n'est pas un caractère
        blanc ou un commentaire.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Cet élément doit être le premier enfant de l'élément
        {{HTMLElement("html")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >Pas de rôle correspondant</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Aucun <code>role</code> autorisé.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLHeadElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les éléments qui peuvent être utilisés à l'intérieur de l'élément `<head>`&nbsp;:
  - {{HTMLElement("title")}}
  - {{HTMLElement("base")}}
  - {{HTMLElement("link")}}
  - {{HTMLElement("style")}}
  - {{HTMLElement("meta")}}
  - {{HTMLElement("script")}}
  - {{HTMLElement("noscript")}}
  - {{HTMLElement("template")}}
