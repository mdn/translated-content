---
title: Réflexion des attributs
slug: Web/API/Document_Object_Model/Reflected_attributes
l10n:
  sourceCommit: f06142077fabbb1e0fe791d74b856ae4f8d058b4
---

{{DefaultAPISidebar("DOM")}}

Un {{glossary("Attribute", "attribut")}} étend un élément {{glossary("HTML")}}, {{glossary("XML")}}, {{glossary("SVG")}} ou autre {{glossary("element", "éléments")}}, modifiant son comportement ou fournissant des métadonnées.

De nombreux attributs sont _réfléchis_ dans l'interface [DOM](/fr/docs/Web/API/Document_Object_Model) correspondante.
Cela signifie que la valeur de l'attribut peut être lue ou modifiée directement en JavaScript via une propriété sur l'interface correspondante, et réciproquement.
Les propriétés réfléchies offrent une approche de programmation plus naturelle que la récupération et la modification des valeurs d'attributs à l'aide des méthodes {{domxref("Element.getAttribute()","getAttribute()")}} et {{domxref("Element.setAttribute()","setAttribute()")}} de l'interface {{domxref("Element")}}.

Ce guide donne un aperçu des attributs réfléchis et de leur utilisation.

## Accès et modification d'un attribut

Voyons d'abord le mécanisme par défaut pour obtenir et modifier un attribut, qui peut être utilisé, que l'attribut soit réfléchi ou non.
Pour obtenir l'attribut, on utilise la méthode {{domxref("Element.getAttribute()","getAttribute()")}} de l'interface {{domxref("Element")}}, en précisant le nom de l'attribut.
Pour modifier l'attribut, on utilise la méthode {{domxref("Element.setAttribute()","setAttribute()")}}, en précisant le nom de l'attribut et la nouvelle valeur.

Considérez le code HTML suivant&nbsp;:

```html
<input placeholder="Texte original de l'espace réservé" />
```

Pour obtenir et modifier l'attribut [`placeholder`](/fr/docs/Web/HTML/Reference/Attributes/placeholder)&nbsp;:

```js
const input = document.querySelector("input");

// Obtenir l'attribut placeholder
let attr = input.getAttribute("placeholder");

// Modifier l'attribut placeholder
input.setAttribute("placeholder", "Espace réservé modifié");
```

## Attributs réfléchis

Pour un·e {{htmlelement("input")}}, l'attribut `placeholder` est réfléchi par la propriété {{domxref("HTMLInputElement.placeholder")}}.
Avec le même code HTML que précédemment&nbsp;:

```html
<input placeholder="Original placeholder" />
```

La même opération peut être réalisée plus naturellement en utilisant la propriété `placeholder`&nbsp;:

```js
const input = document.querySelector("input");

// Obtenir l'attribut placeholder
let attr = input.placeholder;

// Modifier l'attribut placeholder
input.placeholder = "Espace réservé modifié";
```

Notez que le nom de l'attribut réfléchi et celui de la propriété sont identiques&nbsp;: `placeholder`.
Ce n'est pas toujours le cas&nbsp;: les propriétés sont généralement nommées selon la convention {{glossary("Camel case", "camelCase")}}.
C'est particulièrement vrai pour les noms d'attributs composés de plusieurs mots ou contenant des caractères non autorisés dans un nom de propriété, comme le tiret.
Par exemple, l'attribut [aria-checked](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) est réfléchi par la propriété [`ariaChecked`](/fr/docs/Web/API/Element/ariaChecked).

### Attributs booléens réfléchis

Les {{Glossary("Boolean/HTML", "attributs booléens")}} sont un peu différents des autres car ils n'ont pas besoin d'être déclarés avec un nom et une valeur.
Par exemple, l'élément {{htmlelement("input")}} de type case à cocher ci-dessous possède l'attribut `checked` et sera coché à l'affichage&nbsp;:

```html
<input type="checkbox" checked />
```

La méthode {{domxref("Element.getAttribute()")}} retournera `""` si l'élément est coché ou `null` s'il ne l'est pas.
La propriété correspondante {{domxref("HTMLInputElement.checked")}} retourne `true` ou `false` selon l'état coché.
Sinon, les attributs réfléchis booléens fonctionnent comme les autres attributs réfléchis.

### Attributs réfléchis énumérés

En HTML, les [attributs énumérés <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute) sont des attributs dont la valeur est limitée à un ensemble prédéfini de chaînes de caractères. Par exemple, l'attribut global HTML [`dir`](/fr/docs/Web/HTML/Reference/Global_attributes/dir) accepte trois valeurs valides&nbsp;: `ltr`, `rtl` et `auto`.

```html
<p dir="rtl">De droite à gauche</p>
```

Comme pour les noms de balises HTML, les attributs énumérés HTML et leurs valeurs ne sont pas sensibles à la casse, donc `LTR`, `RTL` et `AUTO` fonctionneront aussi.

```html
<p dir="RTL">De droite à gauche</p>
```

La propriété {{Glossary("IDL")}} réfléchie, {{domxref("HTMLElement.dir")}}, retourne toujours une valeur canonique telle que définie dans la spécification (valeurs en minuscules dans cet exemple). La modification de la valeur la sérialise également sous forme canonique.

```js
const pElement = document.querySelector("p");
console.log(pElement.dir); // "rtl"
pElement.dir = "RTL";
console.log(pElement.dir); // "rtl"
```

Vous pouvez aussi utiliser la méthode {{domxref("Element.getAttribute()","getAttribute()")}} de l'interface {{domxref("Element")}}. Elle retournera la valeur de l'attribut telle qu'elle est écrite dans le HTML, sans modification.

```js
const pElement = document.querySelector("p");
console.log(pElement.getAttribute("dir")); // "RTL"
```

## Références d'éléments réfléchies

> [!NOTE]
> Cette section s'applique aux [attributs ARIA réfléchis qui contiennent des références d'éléments](/fr/docs/Web/API/Element#propriétés_dinstance_reflétées_à_partir_des_références_déléments_aria). Les mêmes considérations s'appliquent probablement à d'autres attributs actuels ou futurs qui réfléchissent des références d'éléments.

Certains attributs prennent pour valeur des _références_ d'éléments&nbsp;: soit une valeur d'attribut `id`, soit une chaîne d'`id` séparés par des espaces. Ces `id` font référence à d'autres éléments liés à l'attribut ou contenant des informations nécessaires à l'attribut. Ces attributs sont réfléchis par une propriété correspondante sous forme de tableau d'instances d'objets dérivés de {{domxref("HTMLElement")}} correspondant aux `id`, avec quelques particularités.

Par exemple, l'attribut [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) liste les valeurs d'`id` des éléments qui contiennent le nom accessible pour un élément dans leur texte interne. Le code HTML ci-dessous montre cela pour un·e {{htmlelement("input")}} dont le libellé est défini dans des éléments {{htmlelement("span")}} avec les `id` `label_1`, `label_2` et `label_3`&nbsp;:

```html
<span id="label_1">(Label 1 Text)</span>
<span id="label_2">(Label 2 Text)</span>
<input aria-labelledby="label_1 label_2 label_3" />
```

Cet attribut est réfléchi par la propriété {{domxref("Element.ariaLabelledByElements")}}, qui retourne le tableau des éléments ayant les `id` correspondants. L'attribut et la propriété correspondante peuvent être récupérés ainsi&nbsp;:

```js
const inputElement = document.querySelector("input");

console.log(inputElement.getAttribute("aria-labelledby"));
// "label_1 label_2 label_3"

console.log(inputElement.ariaLabelledByElements);
// [HTMLSpanElement, HTMLSpanElement]
```

La première chose à noter dans le code ci-dessus est que l'attribut et la propriété ne contiennent pas le même nombre d'éléments&nbsp;: la propriété ne reflète pas _directement_ l'attribut car la référence `label_3` ne correspond à aucun élément. Il est aussi possible qu'une référence ne corresponde pas car l'`id` est [hors du périmètre de l'élément](#portée_de_référence_did_délément). Cela peut arriver si l'élément référencé n'est pas dans le même DOM ou shadow DOM que l'élément, car les `id` ne sont valides que dans le périmètre où ils sont déclarés.

On peut itérer sur les éléments du tableau de la propriété, par exemple pour obtenir le nom accessible à partir de leur texte interne (c'est plus naturel que d'utiliser l'attribut, car il n'est pas nécessaire d'obtenir d'abord les références puis de retrouver les éléments, et on ne travaille qu'avec les éléments effectivement disponibles dans le périmètre courant)&nbsp;:

```js
const inputElement = document.querySelector("input");
const accessibleName = inputElement.ariaLabelledByElements
  .map((e) => e.textContent.trim())
  .join(" ");
console.log(accessibleName);
// (Label 1 Text) (Label 2 Text)
```

### Modification de la propriété et de l'attribut

Pour les propriétés réfléchies classiques, les modifications de la propriété sont répercutées sur l'attribut correspondant, et inversement. Pour les références d'éléments réfléchies, ce n'est pas le cas. Au contraire, modifier la propriété réinitialise (supprime) l'attribut, de sorte que la propriété et l'attribut ne se reflètent plus mutuellement. Par exemple, avec le code HTML suivant&nbsp;:

```html
<span id="label_1">(Label 1 Text)</span>
<span id="label_2">(Label 2 Text)</span>
<input aria-labelledby="label_1 label_2" />
```

La valeur initiale de `aria-labelledby` est `"label_1 label_2"`, mais si on la modifie via l'API DOM, l'attribut est réinitialisé à `""`&nbsp;:

```js
const inputElement = document.querySelector("input");

let attributeValue = inputElement.getAttribute("aria-labelledby");
console.log(attributeValue);
// "label_1 label_2"

// Définit l'attribut à l'aide de la propriété réfléchie
inputElement.ariaLabelledByElements = document.querySelectorAll("span");

attributeValue = inputElement.getAttribute("aria-labelledby");
console.log(attributeValue);
// ""
```

Cela est logique car on pourrait sinon assigner à la propriété des éléments qui n'ont pas d'attribut `id`, et qui ne pourraient donc pas être représentés dans l'attribut.

Attribuer une valeur à l'attribut restaure la relation entre l'attribut et la propriété. En poursuivant l'exemple précédent&nbsp;:

```js
inputElement.setAttribute("aria-labelledby", "label_1");

attributeValue = inputElement.getAttribute("aria-labelledby");
console.log(attributeValue);
// "label_1"

// Définit l'attribut à l'aide de la propriété réfléchie
console.log(inputElement.ariaLabelledByElements);
// [HTMLSpanElement] - for `label_1`
```

Le tableau retourné par la propriété est statique&nbsp;: il n'est pas possible de le modifier pour changer l'attribut correspondant. Lorsqu'un tableau est assigné à la propriété, il est copié, donc toute modification ultérieure de l'attribut ne sera pas reflétée dans un tableau précédemment retourné par la propriété.

### Portée des références d'éléments par id

Les références d'éléments par attribut ne peuvent pointer que vers d'autres éléments présents dans le même DOM ou [Shadow DOM](docs/Web/API/Web_components#shadow_dom_2), car les identifiants d'éléments (`id`) ne sont valides que dans le périmètre où ils sont déclarés.

On peut le constater dans le code suivant. L'attribut [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) de l'élément {{htmlelement("input")}} référence les éléments ayant les `id` `label_1`, `label_2` et `label_3`. Cependant, `label_3` n'est pas un `id` valide ici car il n'est pas défini dans le même périmètre que l'élément {{htmlelement("input")}}. Le libellé ne proviendra donc que des éléments ayant les `id` `label_1` et `label_2`.

```html
<div id="in_dom">
  <span id="label_3">(Label 3 Text)</span>
</div>
<div id="host">
  <template shadowrootmode="open">
    <span id="label_1">(Label 1 Text)</span>
    <input aria-labelledby="label_1 label_2 label_3" />
    <span id="label_2">(Label 2 Text)</span>
  </template>
</div>
```

### Portée des références d'éléments réfléchies

Lorsque l'on utilise les [propriétés d'instance réfléchies à partir de références d'éléments ARIA](/fr/docs/Web/API/Element#propriétés_dinstance_reflétées_à_partir_des_références_déléments_aria), comme {{domxref("Element.ariaLabelledByElements")}} pour `aria-labelledby`, les règles de portée sont un peu différentes. Pour être dans le périmètre, un élément cible doit être dans le même DOM que l'élément de référence, ou dans un DOM parent. Les éléments dans d'autres DOM, y compris les shadow DOM enfants ou pairs du DOM de référence, sont hors du périmètre.

L'exemple ci-dessous montre le cas où un élément dans un DOM parent (`label_3`) est utilisé comme cible, avec les éléments ayant les `id` `label_1` et `label_2` déclarés dans le même shadow root. Cela fonctionne car toutes les cibles sont dans le périmètre de l'élément de référence.

```html
<div id="in_dom">
  <span id="label_3">(Label 3 Text)</span>
</div>
<div id="host">
  <template shadowrootmode="open">
    <span id="label_1">(Label 1 Text)</span>
    <input id="input" />
    <span id="label_2">(Label 2 Text)</span>
  </template>
</div>
```

```js
const host = document.getElementById("host");
const input = host.shadowRoot.getElementById("input");
input.ariaLabelledByElements = [
  host.shadowRoot.getElementById("label_1"),
  host.shadowRoot.getElementById("label_2"),
  document.getElementById("label_3"),
];
```

Le code équivalent avec un élément dans le DOM qui référence un autre dans un shadow DOM ne fonctionnerait pas, car les éléments cibles dans des shadow DOM imbriqués ne sont pas dans le périmètre&nbsp;:

```html
<div id="in_dom">
  <span id="label_1">(Label 1 Text)</span>
  <input id="input" />
  <span id="label_2">(Label 2 Text)</span>
</div>
<div id="host">
  <template shadowrootmode="open">
    <span id="label_3">(Label 3 Text)</span>
  </template>
</div>
```

```js
const host = document.getElementById("host");
const input = document.getElementById("input");
input.ariaLabelledByElements = [
  host.shadowRoot.getElementById("label_3"),
  document.getElementById("label_1"),
  document.getElementById("label_2"),
];
```

Notez qu'un élément peut initialement être «&nbsp;dans le périmètre&nbsp;» puis être déplacé hors du périmètre dans un shadow root imbriqué. Dans ce cas, l'élément référencé sera toujours listé dans l'attribut, mais ne sera plus retourné par la propriété. Si l'élément est replacé dans le périmètre, il sera à nouveau présent dans la propriété réfléchie.

### Résumé de la relation attribut/propriété

La relation entre les attributs contenant des références d'éléments et leur propriété correspondante est la suivante&nbsp;:

- Les références d'`id` d'attribut ne sont [dans le périmètre](#portée_de_référence_did_délément) que pour les éléments cibles déclarés dans le même DOM ou shadow DOM que l'élément.
- Les propriétés qui réfléchissent des références d'éléments ARIA peuvent cibler des éléments dans le même périmètre ou dans un périmètre parent. Les éléments dans des périmètres imbriqués ne sont pas accessibles.
- Modifier la propriété supprime l'attribut, et la propriété et l'attribut ne se reflètent plus mutuellement. Si on lit l'attribut avec {{domxref("Element.getAttribute()")}}, la valeur est `""`.
- Modifier l'attribut avec {{domxref("Element.setAttribute()")}} modifie aussi la propriété et restaure la «&nbsp;relation de réflexion&nbsp;».
- Modifier l'attribut avec une valeur de référence qui est ensuite déplacée hors du périmètre entraînera la suppression de l'élément correspondant du tableau de la propriété. L'attribut contient toujours la référence, et si l'élément est replacé dans le périmètre, la propriété inclura à nouveau l'élément (la relation est restaurée).
