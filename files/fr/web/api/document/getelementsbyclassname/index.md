---
title: "Document : méthode getElementsByClassName()"
short-title: getElementsByClassName()
slug: Web/API/Document/getElementsByClassName
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{APIRef("DOM")}}

La méthode **`getElementsByClassName`** de l'interface {{DOMxRef("Document")}} retourne un objet semblable à un tableau contenant tous les éléments enfants qui possèdent tous les noms de classe donnés.

Lorsqu'elle est appelée sur l'objet {{DOMxRef("document")}}, le document complet est parcouru, y compris le nœud racine. Vous pouvez également appeler {{DOMxRef("Element.getElementsByClassName", "getElementsByClassName()")}} sur n'importe quel élément&nbsp;; cela retournera uniquement les éléments qui sont des descendants de l'élément racine défini avec les noms de classe donnés.

> [!WARNING]
> Il s'agit d'une collection ({{DOMxRef("HTMLCollection")}}) dynamique. Les modifications dans le DOM se reflèteront dans le tableau au fur et à mesure qu'elles se produisent. Si un élément sélectionné par ce tableau ne correspond plus au sélecteur, il sera automatiquement supprimé. Tenez-en compte lors de l'itération.

## Syntaxe

```js-nolint
getElementsByClassName(names)
```

### Paramètres

- `names`
  - : Une chaîne de caractères représentant le ou les noms de classe à rechercher&nbsp;; plusieurs noms de classe sont séparés par des espaces.

### Valeur de retour

Une collection ({{DOMxRef("HTMLCollection")}}) dynamique des éléments trouvés.

## Exemples

Récupère tous les éléments ayant la classe «&nbsp;test&nbsp;»&nbsp;:

```js
document.getElementsByClassName("test");
```

Récupère tous les éléments ayant les classes «&nbsp;rouge&nbsp;» et «&nbsp;test&nbsp;»&nbsp;:

```js
document.getElementsByClassName("rouge test");
```

Récupère tous les éléments qui ont la classe «&nbsp;test&nbsp;» à l'intérieur d'un élément ayant l'ID «&nbsp;main&nbsp;»&nbsp;:

```js
document.getElementById("main").getElementsByClassName("test");
```

Récupère le premier élément ayant la classe «&nbsp;test&nbsp;», ou `undefined` s'il n'y a aucun élément correspondant&nbsp;:

```js
document.getElementsByClassName("test")[0];
```

Nous pouvons également utiliser les méthodes de `Array.prototype` sur n'importe quelle collection {{DOMxRef("HTMLCollection")}} en passant `HTMLCollection` comme valeur de <i lang="en">this</i> de la méthode. Ici, nous allons trouver tous les éléments div qui ont une classe «&nbsp;test&nbsp;»&nbsp;:

```js
const testElements = document.getElementsByClassName("test");
const testDivs = Array.prototype.filter.call(
  testElements,
  (testElement) => testElement.nodeName === "DIV",
);
```

### Obtenir le premier élément dont la classe est « test »

C'est la méthode d'opération la plus couramment utilisée.

```html
<div id="parent-id">
  <p>bonjour le monde1</p>
  <p class="test">bonjour le monde2</p>
  <p>bonjour le monde3</p>
  <p>bonjour le monde4</p>
</div>
```

```js
const parentDOM = document.getElementById("parent-id");

const test = parentDOM.getElementsByClassName("test"); // une liste d'éléments correspondants, *pas* l'élément lui-même
console.log(test); // HTMLCollection[1]

const testTarget = parentDOM.getElementsByClassName("test")[0]; // le premier élément, comme nous le voulions
console.log(testTarget); // <p class="test">bonjour le monde2</p>
```

### Exemple de classes multiples

`document.getElementsByClassName` fonctionne de manière très similaire à `document.querySelector` et `document.querySelectorAll`. Seuls les éléments possédant TOUS les noms de classe définis sont sélectionnés.

#### HTML

```html
<span class="orange fruit">Orange Fruit</span>
<span class="orange jus">Orange Jus</span>
<span class="pomme jus">Pomme Jus</span>
<span class="toto truc">Un truc aléatoire</span>
<textarea id="zoneDeResultat"></textarea>
```

```css hidden
#zoneDeResultat {
  width: 98%;
  height: 7em;
}
```

#### JavaScript

```js
// getElementsByClassName ne sélectionne que les éléments qui ont toutes les classes données
const tousLesJusOrangeParClass = document.getElementsByClassName("orange jus");
let resultat = "document.getElementsByClassName('orange jus')";
for (const el of tousLesJusOrangeParClass) {
  resultat += `\n  ${el.textContent}`;
}

// querySelector ne sélectionne que les correspondances complètes
const toutesRequetesJusOrange = document.querySelectorAll(".orange.jus");
resultat += "\n\ndocument.querySelectorAll('.orange.jus')";
for (const el of toutesRequetesJusOrange) {
  resultat += `\n  ${el.textContent}`;
}

document.getElementById("zoneDeResultat").value = resultat;
```

#### Résultat

{{EmbedLiveSample("Exemple de classes multiples", "100%", 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
