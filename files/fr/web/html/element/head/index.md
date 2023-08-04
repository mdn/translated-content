---
title: "<head> : l'élément de métadonnées (en-tête) du document"
slug: Web/HTML/Element/head
---

{{HTMLSidebar}}

L'élément HTML **\<head>** fournit des informations générales (métadonnées) sur le document, incluant son titre et des liens ou des définitions vers des scripts et feuilles de style.

> **Note :** L'élément `<head>` contient principalement des données destinées au traitement automatisé et pas nécessairement lisibles par des humains. Pour afficher des informations lisibles pour les utilisateurs dans des en-têtes ou titre, voir l'élément {{HTMLElement("header")}}.

## Attributs

Comme tous les éléments HTML, cet élément prend en charge [les attributs universels](/fr/docs/Web/HTML/Attributs_universels).

- `profile`{{deprecated_inline}}
  - : L'URI d'un ou plusieurs profils de métadonnées, séparés par un espace.

## Exemples

```html
<html>
  <head>
    <title>Titre du document</title>
  </head>
</html>
```

## Notes

La plupart des navigateurs conformes à HTML5 construisent automatiquement l'élément `<head>` si les balises sont omises dans le balisage. [Cependant, ce comportement n'est pas garanti pour les navigateurs antérieurs](https://www.stevesouders.com/blog/2010/05/12/autohead-my-first-browserscope-user-test/).

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
      <td>Aucune</td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        Si le document est un document source
        (<a href="/fr/docs/Web/HTML/Element/iframe#srcdoc"><code>srcdoc</code></a>) d'une
        {{HTMLElement("iframe")}} ou si l'information pour le titre est
        disponible via un protocole de plus haut niveau zéro ou plusieurs
        éléments de méta-données.<br />Sinon un ou plusieurs éléments de
        méta-données dont un (et un seul) est un élément
        {{HTMLElement("title")}}.
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
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Aucun.</td>
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

- Les éléments qui peuvent être utilisés à l'intérieur de l'élément `<head>` :

  - {{HTMLElement("title")}}
  - {{HTMLElement("base")}}
  - {{HTMLElement("link")}}
  - {{HTMLElement("style")}}
  - {{HTMLElement("meta")}}
  - {{HTMLElement("script")}}
  - {{HTMLElement("noscript")}}
  - {{HTMLElement("template")}}
