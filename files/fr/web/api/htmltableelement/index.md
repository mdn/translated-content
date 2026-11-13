---
title: HTMLTableElement
slug: Web/API/HTMLTableElement
l10n:
  sourceCommit: ea061caed30f127a79157d07c538d26f01b8702b
---

{{APIRef("HTML DOM")}}

L'interface **`HTMLTableElement`** fournit des propriétés et méthodes particulières (en plus de l'interface objet {{DOMxRef("HTMLElement")}} dont elle hérite) pour manipuler la disposition et la présentation des tableaux dans un document HTML.

{{InheritanceDiagram}}

## Propriétés d'instance

_Hérite des propriétés de son parent, {{DOMxRef("HTMLElement")}}._

- {{DOMxRef("HTMLTableElement.caption")}}
  - : Un objet {{DOMxRef("HTMLTableCaptionElement")}} représentant le premier élément HTML {{HTMLElement("caption")}} enfant du tableau donné {{HTMLElement("table")}}, ou `null` si aucun élément de ce type n'existe. Cette propriété peut être assignée, ce qui entraîne la suppression du premier élément `<caption>` existant, le cas échéant, et l'insertion de la valeur donnée, si elle n'est pas `null`, en tant que premier enfant. Si la valeur assignée n'est pas un {{DOMxRef("HTMLTableCaptionElement")}} ou `null`, une {{JSxRef("TypeError")}} est levée.
- {{DOMxRef("HTMLTableElement.tHead")}}
  - : Un objet {{DOMxRef("HTMLTableSectionElement")}} représentant le premier élément HTML {{HTMLElement("thead")}} enfant du tableau donné {{HTMLElement("table")}}, ou `null` si aucun élément de ce type n'existe. Cette propriété peut être assignée, ce qui entraîne la suppression du premier élément `<thead>` existant, le cas échéant, et l'insertion de la valeur donnée, si elle n'est pas `null`, immédiatement avant le premier élément qui HTML n'est ni un enfant {{HTMLElement("caption")}} ni un {{HTMLElement("colgroup")}}, ou en tant que dernier enfant s'il n'existe pas un tel élément. Si la valeur assignée n'est pas un {{DOMxRef("HTMLTableSectionElement")}} ou `null`, une {{JSxRef("TypeError")}} est levée&nbsp;; sinon, si ce n'est pas un élément HTML {{HTMLElement("thead")}} ou `null`, une `HierarchyRequestError` {{DOMxRef("DOMException")}} est levée.
- {{DOMxRef("HTMLTableElement.tFoot")}}
  - : Un objet {{DOMxRef("HTMLTableSectionElement")}} représentant le premier élément HTML {{HTMLElement("tfoot")}} enfant du tableau donné {{HTMLElement("table")}}, ou `null` si aucun élément de ce type n'existe. Cette propriété peut être assignée, ce qui entraîne la suppression du premier élément `<tfoot>` existant, le cas échéant, et l'insertion de la valeur donnée, si elle n'est pas `null`, en tant que dernier enfant. Si la valeur assignée n'est pas un {{DOMxRef("HTMLTableSectionElement")}} ou `null`, une {{JSxRef("TypeError")}} est levée&nbsp;; sinon, si ce n'est pas un élément HTML {{HTMLElement("tfoot")}} ou `null`, une `HierarchyRequestError` {{DOMxRef("DOMException")}} est levée.
- {{DOMxRef("HTMLTableElement.rows")}} {{ReadOnlyInline}}
  - : Retourne un {{DOMxRef("HTMLCollection")}} dynamique de tous les éléments HTML {{HTMLElement("tr")}} qui sont des enfants de l'élément HTML {{HTMLElement("table")}} donné, ou des enfants de l'un des enfants {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} et {{HTMLElement("tfoot")}} du tableau. Les membres du `<thead>` apparaissent en premier, suivis des membres du `<tbody>` et du tableau lui-même, et les membres du `<tfoot>` viennent en dernier, triés par ordre dans l'arbre au sein de chaque groupe. L'objet retourné est automatiquement mis à jour lorsque le `HTMLTableElement` change.
- {{DOMxRef("HTMLTableElement.tBodies")}} {{ReadOnlyInline}}
  - : Retourne un {{DOMxRef("HTMLCollection")}} dynamique de tous les éléments enfants {{HTMLElement("tbody")}} du tableau donné {{HTMLElement("table")}}. L'objet retourné est automatiquement mis à jour lorsque le `HTMLTableElement` change.

### Propriétés obsolètes

> [!WARNING]
> Les propriétés suivantes sont obsolètes. Vous devez éviter de les utiliser.

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
  - : Crée un élément HTML {{HTMLElement("thead")}}, l'insère avant le premier enfant élément du {{HTMLElement("table")}} donné qui n'est ni un {{HTMLElement("caption")}} ni un {{HTMLElement("colgroup")}}, ou comme dernier enfant si aucun emplacement d'insertion de ce type n'est trouvé, et le retourne. Si le tableau a déjà un enfant `<thead>`, cette méthode retourne le premier enfant de ce type sans en créer un nouveau.
- {{DOMxRef("HTMLTableElement.deleteTHead()")}}
  - : Supprime le premier enfant élément HTML {{HTMLElement("thead")}} d'un {{HTMLElement("table")}} donné, le cas échéant.
- {{DOMxRef("HTMLTableElement.createTFoot()")}}
  - : Crée un élément HTML {{HTMLElement("tfoot")}}, l'insère comme dernier enfant du {{HTMLElement("table")}} donné, et le retourne. Si le tableau a déjà un enfant `<tfoot>`, cette méthode retourne le premier enfant de ce type sans en créer un nouveau.
- {{DOMxRef("HTMLTableElement.deleteTFoot()")}}
  - : Supprime le premier enfant élément HTML {{HTMLElement("tfoot")}} d'un {{HTMLElement("table")}} donné, le cas échéant.
- {{DOMxRef("HTMLTableElement.createTBody()")}}
  - : Crée un élément HTML {{HTMLElement("tbody")}}, l'insère immédiatement après le dernier enfant élément `<tbody>` du {{HTMLElement("table")}} donné, ou comme dernier enfant s'il n'y a pas un tel élément, et le retourne.
- {{DOMxRef("HTMLTableElement.createCaption()")}}
  - : Crée un élément HTML {{HTMLElement("caption")}}, l'insère comme premier enfant du {{HTMLElement("table")}} donné, et le retourne. Si le tableau a déjà un enfant `<caption>`, cette méthode retourne le premier enfant de ce type sans en créer un nouveau.
- {{DOMxRef("HTMLTableElement.deleteCaption()")}}
  - : Supprime le premier enfant élément HTML {{HTMLElement("caption")}} d'un {{HTMLElement("table")}} donné, le cas échéant.
- {{DOMxRef("HTMLTableElement.insertRow()")}}
  - : Crée un élément HTML {{HTMLElement("tr")}}, l'insère à la position définie dans la collection {{DOMxRef("HTMLTableElement.rows", "rows")}}, et le retourne. Si la collection `rows` est vide et que le tableau n'a également aucun élément HTML {{HTMLElement("tbody")}}, un élément `<tbody>` est d'abord créé et inséré.
- {{DOMxRef("HTMLTableElement.deleteRow()")}}
  - : Supprime une ligne spécifique ({{HTMLElement("tr")}}) d'un {{HTMLElement("table")}} donné. Si `index` est `-1`, la dernière ligne est supprimée.

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
