---
title: Document.createCDATASection()
slug: Web/API/Document/createCDATASection
---

{{APIRef("DOM")}}

`createCDATASection()` crée un nouveau noeud de section CDATA et le renvoie.

## Syntaxe

```js
CDATASectionNode = document.createCDATASection(data);
```

- `CDATASectionNode` est un noeud de [Section CDATA](/fr/docs/Web/API/CDATASection).
- `data` est une string (_chaîne de caractères_) contenant les données à ajouter à la section CDATA.

## Exemple

```js
var docu = new DOMParser().parseFromString("<xml></xml>", "application/xml");

var cdata = docu.createCDATASection("Some <CDATA> data & then some");

docu.getElementsByTagName("xml")[0].appendChild(cdata);

alert(new XMLSerializer().serializeToString(docu));
// Affiche : <xml><![CDATA[Some <CDATA> data & then some]]></xml>
```

## Notes

- Cela fonctionnera uniquement avec XML, pas avec les documents HTML (car les documents HTML ne supportent pas les sections CDATA) ; le tenter sur un document HTML va lancer une exception `NOT_SUPPORTED_ERR`.
- Va lancer une exception `NS_ERROR_DOM_INVALID_CHARACTER_ERR` si on essaye de soumettre la séquence CDATA de fermeture ("]]>") en tant que partie des données ; les données fournies par l'utilisateur non échappées, ne peuvent pas être utilisées en toute sécurité sans qu'avec cette méthode on obtienne cette exception ([`createTextNode()`](/fr/docs/DOM/document.createTextNode) peut souvent être utilisé à sa place).

## Spécification

- [createCDATASection](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-createCDATASection)
