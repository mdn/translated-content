---
title: HTMLTableElement
slug: Web/API/HTMLTableElement
l10n:
  sourceCommit: 0b5859108411e47d228a4bb9f30a5556ab17f63c
---

{{APIRef("HTML DOM")}}

L'interface **`HTMLTableElement`** fournit des propriétés et méthodes particulières (en plus de l'interface objet {{DOMxRef("HTMLElement")}} dont elle hérite) pour manipuler la disposition et la présentation des tableaux dans un document HTML.

{{InheritanceDiagram}}

## Propriétés d'instance

_Hérite des propriétés de son parent, {{DOMxRef("HTMLElement")}}._

- {{DOMxRef("HTMLTableElement.caption")}}
  - : Un objet {{DOMxRef("HTMLTableCaptionElement")}} représentant le premier {{HTMLElement("caption")}} enfant de l'élément, ou `null` si aucun n'est trouvé. Lors de l'affectation, si l'objet ne représente pas un `<caption>`, une exception ({{DOMxRef("DOMException")}}) avec le nom `HierarchyRequestError` est levée. Si un objet correct est fourni, il est inséré dans l'arbre comme premier enfant de cet élément et le premier `<caption>` enfant de cet élément est supprimé de l'arbre, le cas échéant.
- {{DOMxRef("HTMLTableElement.tHead")}}
  - : Un objet {{DOMxRef("HTMLTableSectionElement")}} représentant le premier {{HTMLElement("thead")}} enfant de l'élément, ou `null` si aucun n'est trouvé. Lors de l'affectation, si l'objet ne représente pas un `<thead>`, une {{DOMxRef("DOMException")}} avec le nom `HierarchyRequestError` est levée. Si un objet correct est fourni, il est inséré dans l'arbre juste avant le premier élément qui n'est ni un {{HTMLElement("caption")}}, ni un {{HTMLElement("colgroup")}}, ou comme dernier enfant s'il n'y a pas un tel élément, et le premier `<thead>` enfant de cet élément est supprimé de l'arbre, le cas échéant.
- {{DOMxRef("HTMLTableElement.tFoot")}}
  - : Un objet {{DOMxRef("HTMLTableSectionElement")}} représentant le premier {{HTMLElement("tfoot")}} enfant de l'élément, ou `null` si aucun n'est trouvé. Lors de l'affectation, si l'objet ne représente pas un `<tfoot>`, une {{DOMxRef("DOMException")}} avec le nom `HierarchyRequestError` est levée. Si un objet correct est fourni, il est inséré dans l'arbre juste avant le premier élément qui n'est ni un {{HTMLElement("caption")}}, ni un {{HTMLElement("colgroup")}}, ni un {{HTMLElement("thead")}}, ou comme dernier enfant s'il n'y a pas un tel élément, et le premier `<tfoot>` enfant de cet élément est supprimé de l'arbre, le cas échéant.
- {{DOMxRef("HTMLTableElement.rows")}} {{ReadOnlyInline}}
  - : Retourne une collection ({{DOMxRef("HTMLCollection")}}) dynamique contenant toutes les lignes de l'élément, c'est-à-dire tous les {{HTMLElement("tr")}} qui sont enfants de l'élément, ou enfants de l'un de ses {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} et {{HTMLElement("tfoot")}} enfants. Les membres de lignes d'un `<thead>` apparaissent en premier, dans l'ordre de l'arbre, et ceux d'un `<tbody>` en dernier, également dans l'ordre de l'arbre. La `HTMLCollection` est dynamique et se met automatiquement à jour lorsque le `HTMLTableElement` change.
- {{DOMxRef("HTMLTableElement.tBodies")}} {{ReadOnlyInline}}
  - : Retourne une collection ({{DOMxRef("HTMLCollection")}}) dynamique contenant tous les {{HTMLElement("tbody")}} de l'élément. La `HTMLCollection` est dynamique et se met automatiquement à jour lorsque le `HTMLTableElement` change.

### Propriétés obsolètes

> [!WARNING]
> Les propriétés suivantes sont obsolètes. Vous devriez éviter de les utiliser.

- {{DOMxRef("HTMLTableElement.align")}} {{Deprecated_Inline}}
  - : Une chaîne de caractères contenant une valeur énumérée reflétant l'attribut [`align`](/fr/docs/Web/HTML/Reference/Elements/table#align). Elle indique l'alignement du contenu de l'élément par rapport au contexte environnant. Les valeurs possibles sont `"left"`, `"right"` et `"center"`.
- {{DOMxRef("HTMLTableElement.bgColor")}} {{Deprecated_Inline}}
  - : Une chaîne de caractères contenant la couleur de fond des cellules. Elle reflète l'attribut obsolète [`bgColor`](/fr/docs/Web/HTML/Reference/Elements/table#bgcolor).
- {{DOMxRef("HTMLTableElement.border")}} {{Deprecated_Inline}}
  - : Une chaîne de caractères contenant la largeur en pixels de la bordure du tableau. Elle reflète l'attribut obsolète [`border`](/fr/docs/Web/HTML/Reference/Elements/table#border).
- {{DOMxRef("HTMLTableElement.cellPadding")}} {{Deprecated_Inline}}
  - : Une chaîne de caractères contenant la largeur en pixels de l'espace horizontal et vertical entre le contenu de la cellule et les bordures de la cellule. Elle reflète l'attribut obsolète [`cellpadding`](/fr/docs/Web/HTML/Reference/Elements/table#cellpadding).
- {{DOMxRef("HTMLTableElement.cellSpacing")}} {{Deprecated_Inline}}
  - : Une chaîne de caractères contenant la largeur en pixels de la séparation horizontale et verticale entre les cellules. Elle reflète l'attribut obsolète [`cellspacing`](/fr/docs/Web/HTML/Reference/Elements/table#cellspacing).
- {{DOMxRef("HTMLTableElement.frame")}} {{Deprecated_Inline}}
  - : Une chaîne de caractères contenant le type de bordures externes du tableau. Elle reflète l'attribut obsolète [`frame`](/fr/docs/Web/HTML/Reference/Elements/table#frame) et peut prendre l'une des valeurs suivantes&nbsp;: `"void"`, `"above"`, `"below"`, `"hsides"`, `"vsides"`, `"lhs"`, `"rhs"`, `"box"` ou `"border"`.
- {{DOMxRef("HTMLTableElement.rules")}} {{Deprecated_Inline}}
  - : Une chaîne de caractères contenant le type de bordures internes du tableau. Elle reflète l'attribut obsolète [`rules`](/fr/docs/Web/HTML/Reference/Elements/table#rules) et peut prendre l'une des valeurs suivantes&nbsp;: `"none"`, `"groups"`, `"rows"`, `"cols"` ou `"all"`.
- {{DOMxRef("HTMLTableElement.summary")}} {{Deprecated_Inline}}
  - : Une chaîne de caractères contenant une description de l'objectif ou de la structure du tableau. Elle reflète l'attribut obsolète [`summary`](/fr/docs/Web/HTML/Reference/Elements/table#summary).
- {{DOMxRef("HTMLTableElement.width")}} {{Deprecated_Inline}}
  - : Une chaîne de caractères contenant la longueur en pixels ou en pourcentage de la largeur souhaitée de l'ensemble du tableau. Elle reflète l'attribut obsolète [`width`](/fr/docs/Web/HTML/Reference/Elements/table#width).

## Méthodes d'instance

_Hérite des méthodes de son parent, {{DOMxRef("HTMLElement")}}._

- {{DOMxRef("HTMLTableElement.createTHead()")}}
  - : Retourne un objet {{DOMxRef("HTMLTableSectionElement")}} représentant le premier {{HTMLElement("thead")}} enfant de l'élément. Si aucun n'est trouvé, un nouveau est créé et inséré dans l'arbre juste avant le premier élément qui n'est ni un {{HTMLElement("caption")}}, ni un {{HTMLElement("colgroup")}}, ou comme dernier enfant s'il n'y a pas un tel élément.
- {{DOMxRef("HTMLTableElement.deleteTHead()")}}
  - : Supprime le premier {{HTMLElement("thead")}} enfant de l'élément.
- {{DOMxRef("HTMLTableElement.createTFoot()")}}
  - : Retourne un objet {{DOMxRef("HTMLTableSectionElement")}} représentant le premier {{HTMLElement("tfoot")}} enfant de l'élément. Si aucun n'est trouvé, un nouveau est créé et inséré dans l'arbre comme dernier enfant.
- {{DOMxRef("HTMLTableElement.deleteTFoot()")}}
  - : Supprime le premier {{HTMLElement("tfoot")}} enfant de l'élément.
- {{DOMxRef("HTMLTableElement.createTBody()")}}
  - : Retourne un objet {{DOMxRef("HTMLTableSectionElement")}} représentant un nouvel {{HTMLElement("tbody")}} enfant de l'élément. Il est inséré dans l'arbre après le dernier élément qui est un {{HTMLElement("tbody")}}, ou comme dernier enfant s'il n'y a pas un tel élément.
- {{DOMxRef("HTMLTableElement.createCaption()")}}
  - : Retourne un objet {{DOMxRef("HTMLElement")}} représentant le premier {{HTMLElement("caption")}} enfant de l'élément. Si aucun n'est trouvé, un nouveau est créé et inséré dans l'arbre comme premier enfant de l'élément {{HTMLElement("table")}}.
- {{DOMxRef("HTMLTableElement.deleteCaption()")}}
  - : Supprime le premier {{HTMLElement("caption")}} enfant de l'élément.
- {{DOMxRef("HTMLTableElement.insertRow()")}}
  - : Retourne un objet {{DOMxRef("HTMLTableRowElement")}} représentant une nouvelle ligne du tableau. Elle est insérée dans la collection de lignes juste avant l'élément {{HTMLElement("tr")}} à la position `index` donnée. Si nécessaire, un {{HTMLElement("tbody")}} est créé. Si l'`index` vaut `-1`, la nouvelle ligne est ajoutée à la fin de la collection. Si l'`index` est inférieur à `-1` ou supérieur au nombre de lignes de la collection, une {{DOMxRef("DOMException")}} avec la valeur `IndexSizeError` est levée.
- {{DOMxRef("HTMLTableElement.deleteRow()")}}
  - : Supprime la ligne correspondant à l'`index` donné en paramètre. Si la valeur de l'`index` est `-1`, la dernière ligne est supprimée&nbsp;; si elle est inférieure à `-1` ou supérieure au nombre de lignes de la collection, une {{DOMxRef("DOMException")}} avec la valeur `IndexSizeError` est levée.

## Exemples

### Utilisation de l'interface DOM Table

L'interface `HTMLTableElement` fournit des méthodes pratiques pour créer et manipuler des tableaux. Deux méthodes fréquemment utilisées sont {{DOMxRef("HTMLTableElement.insertRow")}} et {{DOMxRef("HTMLTableRowElement.insertCell")}}.

Pour ajouter une ligne et des cellules à un tableau existant&nbsp;:

```html
<table id="table0">
  <tbody>
    <tr>
      <td>Ligne 0 Cellule 0</td>
      <td>Ligne 0 Cellule 1</td>
    </tr>
  </tbody>
</table>
```

```js
const table = document.getElementById("table0");
const row = table.insertRow(-1);

for (let i = 0; i < 2; i++) {
  const cell = row.insertCell(-1);
  const text = `Row ${row.rowIndex} Cell ${i}`;
  cell.appendChild(document.createTextNode(text));
}
```

{{EmbedLiveSample("Utilisation de l'interface DOM Table", "", 300)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML qui implémente cette interface&nbsp;: {{HTMLElement("table")}}
