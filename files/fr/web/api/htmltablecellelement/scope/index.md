---
title: "HTMLTableCellElement : propriété scope"
short-title: scope
slug: Web/API/HTMLTableCellElement/scope
l10n:
  sourceCommit: 0b5859108411e47d228a4bb9f30a5556ab17f63c
---

{{APIRef("HTML DOM")}}

La propriété **`scope`** de l'interface {{DOMxRef("HTMLTableCellElement")}} indique la portée d'une cellule {{HTMLElement("th")}}.

Les cellules d'en-tête peuvent être configurées, à l'aide de l'attribut `scope`, pour s'appliquer à une ligne ou une colonne spécifique, ou aux cellules non encore associées à une portée dans le groupe de lignes courant (c'est-à-dire le même ancêtre {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} ou {{HTMLElement("tfoot")}}). Si aucune valeur n'est définie pour `scope`, l'en-tête n'est pas directement associé aux cellules de cette manière. Les valeurs autorisées pour `scope` sont&nbsp;:

> [!NOTE]
> Cette propriété n'a pas d'effet visuel dans les navigateurs. Elle ajoute une information sémantique pour aider les technologies d'assistance comme les lecteurs d'écran à présenter le tableau de façon plus cohérente.

## Valeur

L'une des valeurs suivantes&nbsp;:

- `col`
  - : La cellule d'en-tête s'applique aux cellules suivantes de la même colonne (ou des colonnes, si `colspan` est également utilisé), jusqu'à la fin de la colonne ou jusqu'à ce qu'un autre `<th>` dans la colonne établisse une nouvelle portée.
- `colgroup`
  - : La cellule d'en-tête s'applique à toutes les cellules du groupe de colonnes courant qui n'ont pas déjà une portée appliquée. Cette valeur n'est autorisée que si la cellule se trouve dans un groupe de colonnes.
- `row`
  - : La cellule d'en-tête s'applique aux cellules suivantes de la même ligne (ou des lignes, si `rowspan` est également utilisé), jusqu'à la fin de la ligne ou jusqu'à ce qu'un autre `<th>` dans la même ligne établisse une nouvelle portée.
- `rowgroup`
  - : La cellule d'en-tête s'applique à toutes les cellules du groupe de lignes courant qui n'ont pas déjà une portée appliquée. Cette valeur n'est autorisée que si la cellule se trouve dans un groupe de lignes.
- La chaîne vide (`""`)
  - : La cellule d'en-tête n'a pas de portée prédéfinie&nbsp;; l'agent utilisateur établira la portée en fonction des indices contextuels.

## Exemples

Cet exemple ajoute un libellé de portée à tous les numéros de `th` de l'en-tête (`thead`).

### HTML

```html
<table>
  <caption>
    Tallest Dams
  </caption>
  <thead>
    <tr>
      <td></td>
      <th>Barrage</th>
      <th>Pays</th>
      <th>Hauteur</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1.</td>
      <th scope="row">Barrage Jinping-I</th>
      <td>Chine</td>
      <td>305 m</td>
    </tr>
    <tr>
      <td>2.</td>
      <th scope="row">Barrage de Nurek</th>
      <td>Tadjikistan</td>
      <td>300 m</td>
    </tr>
    <tr>
      <td>3.</td>
      <th scope="row">Barrage de Lianghekou</th>
      <td>Chine</td>
      <td>295 m</td>
    </tr>
    <tr>
      <td>4.</td>
      <th scope="row">Barrage de Xiowan</th>
      <td>Chine</td>
      <td>292 m</td>
    </tr>
    <tr>
      <td>5.</td>
      <th scope="row">Barrage de Balhetan</th>
      <td>Chine</td>
      <td>289 m</td>
    </tr>
    <tr>
      <td>6.</td>
      <th scope="row">Barrage de Xiluodu</th>
      <td>Chine</td>
      <td>285.5 m</td>
    </tr>
    <tr>
      <td>7.</td>
      <th scope="row">Barrage de la Grande-Dixence</th>
      <td>Suisse</td>
      <td>285 m</td>
    </tr>
  </tbody>
</table>
```

### JavaScript

```js
const thElements = document.querySelectorAll("thead th");
thElements.forEach((th) => {
  th.scope = "col";
});
```

### Résultats

{{EmbedLiveSample("Exemples", "100%", 220)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
