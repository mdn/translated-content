---
title: "Document : méthode createAttribute()"
short-title: createAttribute()
slug: Web/API/Document/createAttribute
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("DOM")}}

La méthode **`createAttribute()`** de l'interface {{DOMxRef("Document")}} crée un nouveau nœud d'attribut et le renvoie. L'objet créé est un nœud implémentant l'interface {{DOMxRef("Attr")}}. Le DOM n'impose pas le type d'attribut à ajouter à un élément particulier de cette manière.

> [!NOTE]
> La chaîne de caractères donnée en paramètre est convertie en minuscules.

## Syntaxe

```js-nolint
createAttribute(name)
```

### Paramètres

- `name`
  - : Une chaîne de caractères contenant le nom de l'attribut.

### Valeur de retour

Un nœud {{DOMxRef("Attr")}}.

### Exceptions levées

- `InvalidCharacterError` {{DOMxRef("DOMException")}}
  - : Levée si la valeur de [`name`](#name) n'est pas un [nom XML <sup>(angl.)</sup>](https://www.w3.org/TR/xml/#dt-name) valide&nbsp;; par exemple, si elle commence par un chiffre, un tiret ou un point, ou contient des caractères autres que des caractères alphanumériques, des tirets bas (`_`), des tirets (`-`) ou des points (`.`).

## Exemples

```js
const noeud = document.getElementById("div1");
const a = document.createAttribute("mon_attribut");
a.value = "nouvelleValeur";
noeud.setAttributeNode(a);
console.log(noeud.getAttribute("mon_attribut")); // "nouvelleValeur"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Document.createAttributeNS()")}}
- La méthode {{DOMxRef("Document.createElement()")}}
- La méthode {{DOMxRef("Element.setAttribute()")}}
- La méthode {{DOMxRef("Element.setAttributeNode()")}}
