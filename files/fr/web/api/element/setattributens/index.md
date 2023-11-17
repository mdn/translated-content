---
title: element.setAttributeNS
slug: Web/API/Element/setAttributeNS
---

{{ APIRef("DOM") }}

`setAttributeNS` ajoute un nouvel attribut ou modifie la valeur d'un attribut avec un espace de noms et un nom donnés.

## Syntaxe

```js
element.setAttributeNS(namespace, name, value);
```

- `namespace` est une chaîne spécifiant l'espace de noms de l'attribut.
- `name` est une chaîne identifiant l'attribut par son nom qualifié ; c'est-à-dire un préfixe d'espace de noms suivi d'un deux-points suivi d'un nom local.
- `value` est la valeur chaîne désirée pour le nouvel attribut.

## Exemple

```js
var d = document.getElementById("d1");
d.setAttributeNS("http://www.mozilla.org/ns/specialspace", "align", "center");
```

## Notes

{{ DOMAttributeMethods() }}

`setAttributeNS` est la seule méthode pour les attributs d'espace nom qui attend le nom qualifié complet, c'est-à-dire `"namespace:localname"`.

## Spécification

- [DOM Level 2 Core: setAttributeNS (en)](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElSetAttrNS) — [traduction en français](http://www.yoyodesign.org/doc/w3c/dom2-core/core.html#ID-ElSetAttrNS) (non normative)
- [DOM-Level-2-Core: glossary qualified name](https://www.w3.org/TR/DOM-Level-2-Core/glossary.html#dt-qualifiedname)
