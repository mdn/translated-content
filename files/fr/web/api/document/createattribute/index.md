---
title: document.createAttribute
slug: Web/API/Document/createAttribute
---

{{ApiRef("DOM")}}

La méthode **`Document.createAttribute()`** crée un nouveau nœud d'attribut et le renvoie. L'objet a créé un noeud implémentant l'interface {{domxref("Attr")}}. Le DOM n'impose pas le type d'attribut à ajouter à un élément particulier de cette manière.

> **Note :** La chaîne de caractères donnée dans le paramètre est convertie en minuscules.

## Syntaxe

```js
attribut = document.createAttribute(nom);
```

### Paramètres

- `nom` est une chaîne de caractères contenant le nom de l'attribut.

### Valeur de retour

Un nœud {{domxref("Attr")}}.

### Exceptions levées

- `INVALID_CHARACTER_ERR` si le paramètre contient un caractère invalide pour un attribut XML.

## Exemples

```js
var node = document.getElementById("div1");
var a = document.createAttribute("my_attrib");
a.value = "newVal";
node.setAttributeNode(a);
console.log(node.getAttribute("my_attrib")); // "newVal"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("Document.createElement()")}}
