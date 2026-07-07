---
title: "Node : propriété textContent"
short-title: textContent
slug: Web/API/Node/textContent
l10n:
  sourceCommit: 5c513c8e3075989886ae5f3b00d92f2b2988085a
---

{{APIRef("DOM")}}

La propriété **`textContent`** de l'interface {{DOMxRef("Node")}} représente le contenu textuel du nœud et de ses descendants.

> [!NOTE]
> `textContent` et {{DOMxRef("HTMLElement.innerText")}} sont facilement confondus, mais les deux propriétés sont [différentes de manière importante](#differences_avec_innertext).

## Valeur

Une chaîne de caractères, ou [`null`](/fr/docs/Web/JavaScript/Reference/Operators/null). Sa valeur dépend de la situation&nbsp;:

- Si le nœud est un {{DOMxRef("document")}} ou un {{Glossary("doctype")}}, `textContent` retourne [`null`](/fr/docs/Web/JavaScript/Reference/Operators/null).

  > [!NOTE]
  > Pour obtenir _tout_ le texte et les [données CDATA](/fr/docs/Web/API/CDATASection) pour l'ensemble du document, utilisez `document.documentElement.textContent`.

- Si le nœud est une [section CDATA](/fr/docs/Web/API/CDATASection), un commentaire, une [instruction de traitement](/fr/docs/Web/API/ProcessingInstruction) ou un [nœud texte](/fr/docs/Web/API/Text), `textContent` retourne, ou définit, le texte à l'intérieur du nœud, c'est-à-dire le {{DOMxRef("Node.nodeValue")}}.
- Pour les autres types de nœuds, `textContent` retourne la concaténation du `textContent` de chaque nœud enfant, à l'exclusion des commentaires et des instructions de traitement. (C'est une chaîne de caractères vide si le nœud n'a pas d'enfants.)

> [!WARNING]
> La définition de `textContent` sur un nœud supprime _tous_ les enfants du nœud et les remplace par un seul nœud texte avec la valeur de chaîne de caractères donnée.

### Différences avec `innerText`

Ne vous laissez pas tromper par les différences entre `Node.textContent` et {{DOMxRef("HTMLElement.innerText")}}. Bien que les noms semblent similaires, il existe des différences importantes&nbsp;:

- `textContent` récupère le contenu de _tous_ les éléments, y compris {{HTMLElement("script")}} et {{HTMLElement("style")}}. En revanche, `innerText` ne montre que les éléments "lisibles par l'homme".
- `textContent` retourne chaque élément dans le nœud. En revanche, `innerText` prend en compte le style et ne retourne pas le texte des éléments «&nbsp;cachés&nbsp;».
  - De plus, comme `innerText` prend en compte les styles CSS, la lecture de la valeur de `innerText` déclenche un {{Glossary("reflow", "re-calcul de mise en page")}} pour garantir des styles calculés à jour. (Les re-calculs de mise en page peuvent être coûteux en termes de calcul, et doivent donc être évités autant que possible.)

### Différences avec `innerHTML`

{{DOMxRef("Element.innerHTML")}} retourne ou définit le HTML, comme son nom l'indique. Nous déconseillons d'utiliser `innerHTML` pour obtenir ou définir du texte à l'intérieur d'un élément, car il traite du HTML brut plutôt que du texte brut et peut être vulnérable aux {{Glossary("Cross-site_scripting", "attaques XSS")}}. Même si vous êtes sûr que le texte ne contient jamais de syntaxe HTML, il reste moins sémantique et plus lent, car il doit invoquer l'analyseur HTML.

## Exemples

Commençons avec ce fragment HTML.

```html
<div id="divA">Ceci est un <span>exemple de</span> texte</div>
```

Vous pouvez utiliser `textContent` pour obtenir le contenu textuel de l'élément&nbsp;:

```js
let texte = document.getElementById("divA").textContent;
// La variable texte vaut maintenant : 'Ceci est un exemple de texte'
```

Si vous préférez définir le contenu textuel de l'élément, vous pouvez faire&nbsp;:

```js
document.getElementById("divA").textContent = "Ceci est un texte différent !";
// Le HTML pour divA est à présent :
// <div id="divA">Ceci est un texte différent !</div>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés {{DOMxRef("HTMLScriptElement.textContent")}} et {{DOMxRef("HTMLScriptElement.text")}}
- La propriété {{DOMxRef("HTMLElement.innerText")}}
- La propriété {{DOMxRef("Element.innerHTML")}}
