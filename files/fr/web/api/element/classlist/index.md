---
title: "Element : propriété classList"
short-title: classList
slug: Web/API/Element/classList
l10n:
  sourceCommit: c053b4b3bb0f34736e9f4402d4254830670af723
---

{{APIRef("DOM")}}

La propriété en lecture seule **`classList`** de l'interface {{DOMxRef("Element")}} contient une collection dynamique ({{DOMxRef("DOMTokenList")}}) représentant l'attribut `class` de l'élément. Cela peut ensuite être utilisé pour manipuler la liste des classes.

L'utilisation de `classList` est une alternative pratique à l'accès à la liste des classes d'un élément sous forme de chaîne de caractères délimitée par des espaces avec {{DOMxRef("element.className")}}.

## Valeur

Un objet {{DOMxRef("DOMTokenList")}} représentant le contenu de l'attribut `class` de l'élément. Si l'attribut `class` n'est pas défini ou est vide, il retourne un `DOMTokenList` vide, c'est-à-dire un `DOMTokenList` avec la propriété `length` égale à `0`.

Bien que la propriété `classList` elle-même soit en lecture seule dans le sens où vous ne pouvez pas remplacer l'objet `DOMTokenList`, vous pouvez toujours affecter directement à la propriété `classList`, ce qui équivaut à affecter à sa propriété {{DOMxRef("DOMTokenList/value", "value")}}. Vous pouvez également modifier l'objet `DOMTokenList` en utilisant les méthodes {{DOMxRef("DOMTokenList/add", "add()")}}, {{DOMxRef("DOMTokenList/remove", "remove()")}}, {{DOMxRef("DOMTokenList/replace", "replace()")}} et {{DOMxRef("DOMTokenList/toggle", "toggle()")}}.

## Exemples

```js
const div = document.createElement("div");
div.className = "toto";

// notre point de départ : <div class="toto"></div>
console.log(div.outerHTML);

// utiliser l'API classList pour supprimer et ajouter des classes
div.classList.remove("toto");
div.classList.add("autreClasse");

// <div class="autreClasse"></div>
console.log(div.outerHTML);

// si "visible" est défini, le supprimer, sinon, l'ajouter
div.classList.toggle("visible");

// ajouter/supprimer "visible", en fonction d'un test conditionnel, pour i inférieur à 10
div.classList.toggle("visible", i < 10);

// false
console.log(div.classList.contains("toto"));

// ajouter ou supprimer plusieurs classes
div.classList.add("toto", "tata", "truc");
div.classList.remove("toto", "tata", "truc");

// ajouter ou supprimer plusieurs classes en utilisant la syntaxe de propagation
const cls = ["toto", "tata"];
div.classList.add(...cls);
div.classList.remove(...cls);

// remplacer la classe "toto" par la classe "tata"
div.classList.replace("toto", "tata");
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("Element.className")}}
- L'interface {{DOMxRef("DOMTokenList")}}
