---
title: table.insertRow
slug: Web/API/HTMLTableElement/insertRow
tags:
  - API
  - DOM HTML
  - HTMLTableElement
  - Méthode
  - NeedsMobileBrowserCompatibility
  - Reference
translation_of: Web/API/HTMLTableElement/insertRow
---
{{APIRef("HTML DOM")}}

La méthode **`HTMLTableElement.insertRow()`** insère une nouvelle ligne dans la table et retourne une référence à la nouvelle ligne.

## Syntaxe

    var ligne = HTMLTableElement.insertRow(optionnel indice = -1);

- [`HTMLTableElement`](/en-US/docs/DOM/HTMLTableElement) est une référence à un élément table HTML.
- `indice` est l'indice de ligne de la nouvelle ligne.
- `ligne` reçoit la référence à la nouvelle ligne. Une référence à un [HTMLTableRowElement](/en-US/docs/Web/API/HTMLTableRowElement). Si l'indice est -1 ou est égal au nombre de lignes, la ligne est ajoutée comme dernière ligne. Si `indice` est plus grand que le nombre de lignes, une exception IndexSizeError sera générée. Si indice est omis, sa  valeur sera -1 par défaut.
- Si une table a plusieurs éléments `tbody`, par défaut, la nouvelle ligne est ajoutée dans le dernier `tbody`. Pour insérer la ligne dans un `tbody` particulier :
  ` var tbody_particulier``=document.getElementById(id_tbody); var ligne=tbody_particulier.``insertRow(indice) `

## Exemple

```html
<table id="TableA">
<tr>
<td>Ancienne ligne supérieure</td>
</tr>
</table>
<script type="text/javascript">

function ajouteLigne(tableID) {
  // Récupération d'une référence à la table
  var refTable = document.getElementById(tableID);

  // Insère une ligne dans la table à l'indice de ligne 0
  var nouvelleLigne = refTable.insertRow(0);

  // Insère une cellule dans la ligne à l'indice 0
  var nouvelleCellule = nouvelleLigne.insertCell(0);

  // Ajoute un nœud texte à la cellule
  var nouveauTexte = document.createTextNode('Nouvelle ligne supérieure')
  nouvelleCellule.appendChild(nouveauTexte);
}

// Appelle ajouteLigne() avec l'ID d'une table
ajouteLigne('TableA');

</script>
```

Pour être valide dans un document HTML, un élément TR doit avoir au moins un élément TD.

Remarquez que `insertRow` insère directement la ligne dans la table et renvoie une référence à la nouvelle ligne. La ligne n'a pas besoin d'être ajoutée séparement comme cela aurait été le cas si [`document.createElement()`](/en-US/docs/DOM/document.createElement) avait été utilisé pour créer un nouvel élement TR.

## Spécifications

| Spécification                                                                                                                | Statut                           | Commentaire                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------ |
| {{SpecName("HTML WHATWG", "tables.html#dom-table-insertrow", "HTMLTableElement.insertRow()")}} | {{Spec2("HTML WHATWG")}} |                                                  |
| {{SpecName("DOM2 HTML", "html.html#ID-93995626", "HTMLTableElement.insertRow()")}}                 | {{Spec2("DOM2 HTML")}}     | Spécifie plus en détail où la ligne est insérée. |
| {{SpecName("DOM1", "level-one-html.html#ID-39872903", "HTMLTableElement.insertRow()")}}         | {{Spec2("DOM1")}}         | Définition initiale.                             |

## Compatibilité des navigateurs

{{Compat("api.HTMLTableElement")}}

## Voir aussi

- {{domxref("HTMLTableRowElement.insertCell()")}}
