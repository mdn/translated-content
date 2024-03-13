---
title: Attr.localName
slug: Web/API/Attr/localName
---

{{APIRef("DOM")}}

La propriété **`Attr.localName`**, en lecture seule, renvoie la partie locale du nom qualifié d'un élément.

> **Note :** Avant DOM4, cette API était définie dans l'interface {{domxref("Node")}}.

## Syntaxe

```js
name = attribute.localName;
```

### Valeur renvoyée

Une {{domxref("DOMString")}} _(chaîne de caractères)_ qui représente la partie locale du nom qualifié de l'élément.

## Exemple

Cet exemple affiche "id" dans une fenêtre d'alerte.

### Contenu HTML

```html
<button id="exemple">Clique ici</button>
```

### Contenu JavaScript

```js
const element = document.querySelector("#exemple");
element.addEventListener("click", function () {
  const attribute = element.attributes[0];
  alert(attribute.localName);
});
```

{{ EmbedLiveSample('Exemple','100%',30) }}

## Notes

Le nom local d'un attribut est la partie du nom qualifié de cet attribut avant les deux points. les noms qualifiés sont utilisés en XML, dans les espaces de nom de certains documents.

> **Note :** dans Gecko 1.9.2 et avant, cette propriété renvoie le nom en majuscule pour les attributs HTML du DOM HTML (contrairement aux atttributs XHTML ). Dans les versions plus récentes, en accord avec HTML5, cette propriété renvoie la casse correspondante au DOM utilisé, c'est-à-dire en minuscule pour les attributs du DOM XHTMl et du DOM HTML.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("Attr.namespaceURI")}}
- {{domxref("Attr.prefix")}}
- {{domxref("Element.localName")}}
- {{domxref("Node.localName")}}
