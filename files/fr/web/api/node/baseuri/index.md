---
title: Node.baseURI
slug: Web/API/Node/baseURI
tags:
  - API
  - DOM
  - HTML
  - Propriétés
  - URI
  - URL
  - URL absolue
  - XML
translation_of: Web/API/Node/baseURI
---
{{APIRef("DOM")}}

La propriété en lecture seule **`Node.baseURI`** renvoie l'URL de base absolue d'un noeud.

L'URL de base est utilisée pour [résoudre](http://developers.whatwg.org/urls.html#resolving-urls) les URL relatives quand le navigateur a besoin d'obtenir une URL absolue, par exemple lors du traitement de l'attribut `src`  en HTML ou XML `xlink:href` d'un élément {{HTMLElement("img")}} HTML.

En général, l'URL de base est simplement l'emplacement du document, mais elle peut être affectée par de nombreux facteurs, y compris l'élément {{HTMLElement("base")}} en HTML et l'attribut  [`xml:base`](/fr/docs/Introduction_%C3%A0_XML/xml:base) en XML.

## Syntaxe

    var baseURI = node.baseURI;

- `baseURI` est une {{ domxref("DOMString") }} (_chaîne de caractères_) représentant l'URL de base du {{domxref("Node")}} spécifié. Elle peut être `null` s'il est impossible d'obtenir une URI absolue.
- `node.baseURI` est en lecture seule.
- `node.baseURI` peut changer avec le temps (voir ci-dessous).

## Détails

### L'URL de base d'un document

L'URL de base d'un _document_ est par défaut l'adresse du document (telle qu'affichée par le navigateur et disponible dans {{domxref("window.location")}}), mais peut changer par défaut :

- Si une balise HTML {{HTMLElement("base")}} est trouvée dans le document ;
- Lorsque celui-ci est un nouveau document créé dynamiquement.

Voir la page [Base URLs section of the HTML Living standard](http://developers.whatwg.org/urls.html#base-urls) (en) pour plus de détails.

Vous pouvez utiliser `{{domxref("document")}}.baseURI` pour obtenir l'URL de base d'un document. Notez que l'obtention de l'URL de base d'un document peut renvoyer des URL différentes au fil du temps si la balise {{HTMLElement("base")}} ou l'emplacement du document change.

### L'URL de base d'un élément

L'URL de base d'un _element_ en HTML est normalement équivalente à celle du document dans lequel se trouve le noeud.

Si le document contient des attributs [`xml:base`](/fr/docs/Introduction_%C3%A0_XML/xml:base) (ce que vous ne devriez pas faire dans les documents HTML), l'`element.baseURI` prend en compte l'attribut `xml:base` des parents de l'élément lors du calcul de l'URL de base. Voir [xml:base](/fr/docs/Introduction_%C3%A0_XML/xml:base) pour plus de détails.

Vous pouvez utiliser `{{domxref("element")}}.baseURI` pour obtenir l'URL de base d'un élément.

## Spécification

- {{spec("http://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-baseURI","DOM Level 3 Core: baseURI","REC")}}

## Voir aussi

- l'élément {{HTMLElement("base")}} (HTML)
- l'attribut [`xml:base`](/fr/docs/Introduction_%C3%A0_XML/xml:base) (documents XML).
- {{domxref("Node.baseURIObject")}} - une variante de cette API pour les add-ons Mozilla et le code interne. Renvoie l'URL de base en tant que `nsIURI`.
