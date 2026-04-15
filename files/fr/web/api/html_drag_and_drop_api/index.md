---
title: API HTML Glisser et déposer
slug: Web/API/HTML_Drag_and_Drop_API
l10n:
  sourceCommit: 58525c603c8c4696a85342ffc6e8e6661b28a1c3
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

L'interface **HTML <i lang="en">Drag and Drop</i>** (pour glisser-déposer) permet à des applications d'utiliser des fonctionnalités de glisser-déposer dans le navigateur.

L'utilisateur pourra sélectionner des éléments _déplaçables_ à la souris et les déplacer vers un élément où on peut _déposer_ en relâchant le bouton de la souris. Une représentation translucide de l'élément _déplacé_ suit le pointeur lors de l'opération.

Vous pouvez personnaliser les éléments qui peuvent devenir _déplaçables_, le type de retour visuel que produisent les éléments _déplaçables_ et les éléments _déposables_.

L'aperçu de cette API inclut une description des interfaces, les étapes à suivre pour prendre en charge ces fonctionnalités dans une application et un aperçu de l'interopérabilité de ces interfaces.

## Concepts et utilisation

En surface, le glisser-déposer a en réalité trois cas d'utilisation distincts&nbsp;: [déplacer des éléments au sein d'une page](/fr/docs/Web/API/HTML_Drag_and_Drop_API/Kanban_board), déplacer des données hors d'une page, et [déplacer des données dans une page](/fr/docs/Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop). Ils ont des exigences et des implémentations légèrement différentes. Cependant, l'API de glisser-déposer fournit un modèle unifié pour penser à toutes ces interactions.

Au cœur de l'opération de glisser-déposer, trois éléments sont impliqués&nbsp;:

- [L'élément déplacé](#éléments_déplaçables)
- Les [données sous-jacentes à transférer](#stockage_des_données_déplacées)
- La [cible de dépôt](#cible_de_dépôt)

Il n'est pas nécessaire que les trois soient sous votre contrôle, ni que vous deviez les définir vous-même&nbsp;:

- Lors du déplacement de données externes dans une page, aucun élément déplaçable n'a besoin d'être défini (par exemple, il pourrait s'agir d'un fichier dans l'explorateur de fichiers du système d'exploitation).
- Lors du déplacement d'éléments au sein d'une page, vous n'avez souvent pas besoin de définir des données transférées&nbsp;; vous manipulez simplement l'élément déplacé.
- Lors du déplacement hors de la page, aucune cible de dépôt n'a besoin d'être définie.

Nous allons examiner comment chacun peut être défini et utilisé.

### Éléments déplaçables

En HTML, les images, les liens et les sélections sont déplaçables par défaut. Pour rendre un élément arbitraire déplaçable, définissez l'attribut [`draggable`](/fr/docs/Web/HTML/Reference/Global_attributes/draggable) sur la valeur `"true"`.

```html live-sample___draggable_element live-sample___drop_target
<p id="p1" draggable="true">Cet élément est déplaçable.</p>
```

À ce stade, l'élément a déjà l'apparence de déplacement, bien qu'aucun comportement ne soit encore défini&nbsp;:

{{EmbedLiveSample("draggable_element", "", 100)}}

Pour les images et les liens, l'attribut `draggable` est défini par défaut sur `true`, donc vous ne le définirez sur `false` que pour désactiver le déplacement de ces éléments. Pour les éléments non déplaçables, le geste de «&nbsp;glisser&nbsp;» sélectionne généralement le texte à la place.

> [!NOTE]
> Lorsqu'un élément est rendu déplaçable, le texte ou d'autres éléments à l'intérieur ne peuvent plus être sélectionnés de manière normale en cliquant et en faisant glisser avec la souris. À la place, l'utilisateur·ice doit maintenir la touche <kbd>Alt</kbd> enfoncée pour sélectionner le texte avec la souris, ou utiliser le clavier.

Une sélection est également déplaçable. Dans ce cas, le _nœud source_, ou le nœud sur lequel divers évènements tels que `dragstart` et `dragend` sont déclenchés, est le nœud de texte sur lequel le déplacement a commencé. La sélection peut contenir partiellement ou entièrement plusieurs nœuds, y compris des nœuds de texte et des nœuds d'élément, qui sont tous considérés comme étant déplacés simultanément.

Comme mentionné précédemment, l'élément déplacé peut également être quelque chose qui n'est pas sur une page Web — par exemple, un fichier dans l'explorateur de fichiers du système d'exploitation. Cependant, seuls les éléments sur la page Web peuvent déclencher les évènements {{DOMxRef("HTMLElement/dragstart_event", "dragstart")}} et {{DOMxRef("HTMLElement/dragend_event", "dragend")}}.

Pour plus d'informations, consultez le [guide des opérations de glisser-déposer](/fr/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations).

### Stockage des données déplacées

Vous ne pouvez pas transférer directement des objets JavaScript vers des pages Web arbitraires, et encore moins vers des applications externes. Pour transférer des données vers et depuis la page Web, les données doivent être sérialisées sous forme de chaîne de caractères (ou sous forme de {{DOMxRef("File")}}). Dans le glisser-déposer, cette chaîne de caractères est encapsulée dans un objet {{DOMxRef("DataTransferItem")}}, qui définit également un `type` particulier — généralement un type MIME tel que `text/html` — qui définit comment la chaîne de caractères doit être interprétée.

Chaque opération de glisser-déposer est associée à un _stockage de données déplacées_ qui est un objet {{DOMxRef("DataTransfer")}} accessible par la propriété {{DOMxRef("DragEvent.dataTransfer","dataTransfer")}} de {{DOMxRef("DragEvent")}}. Pour les éléments glissables par défaut tels que les images, les liens et les sélections, les données de glissement sont déjà définies par le navigateur&nbsp;; pour les éléments glissables personnalisés définis à l'aide de l'attribut `draggable`, vous devez définir vous-même les données de glissement. La seule occasion d'apporter des modifications au magasin de données se situe dans le gestionnaire {{DOMxRef("HTMLElement/dragstart_event", "dragstart")}} — pour le `dataTransfer` de tout autre évènement de glissement, le magasin de données est non modifiable.

La méthode {{DOMxRef("DataTransfer.setData", "setData()")}} peut être utilisée pour ajouter un élément aux données de déplacement, comme le montre l'exemple suivant.

```js live-sample___drop_target
function dragstartHandler(ev) {
  // Ajouter différents types de données à déplacer
  ev.dataTransfer.setData("text/plain", ev.target.innerText);
  ev.dataTransfer.setData("text/html", ev.target.outerHTML);
  ev.dataTransfer.setData(
    "text/uri-list",
    ev.target.ownerDocument.location.href,
  );
}

const p1 = document.getElementById("p1");
p1.addEventListener("dragstart", dragstartHandler);
```

De plus, le seul moment où vous pouvez _lire_ à partir du stockage de données, en dehors de l'évènement `dragstart`, est pendant l'évènement `drop` (ce qui permet à la cible de dépôt de récupérer les données). Pour tous les autres évènements, le stockage de données ne peut pas être consulté.

Pour plus d'informations, consultez [Travailler avec le stockage des données déplacées](/fr/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store).

### Cible de dépôt

Une _cible de dépôt_ est un élément sur lequel un·e utilisateur·ice peut déposer un élément déplacé. Par défaut, la plupart des éléments ne sont pas des cibles de dépôt, et si vous relâchez le déplacement, une animation de «&nbsp;retour en arrière&nbsp;» s'affiche, indiquant que le glisser-déposer a échoué. Tout élément peut devenir une cible de dépôt en annulant l'évènement {{DOMxRef("HTMLElement.dragover_event","dragover")}} qui se déclenche sur lui avec `preventDefault()`.

L'évènement {{DOMxRef("HTMLElement/drop_event", "drop")}} ne se déclenche que sur les cibles de dépôt, et c'est le seul moment où vous pouvez lire le stockage de données.

L'exemple suivant montre une cible de dépôt minimale valide, et combine également le code des exemples précédents.

```html live-sample___drop_target
<p id="cible">Zone de dépôt</p>
```

```js live-sample___drop_target
const cible = document.getElementById("cible");

// Annuler dragover pour que drop puisse se déclencher
cible.addEventListener("dragover", (ev) => {
  ev.preventDefault();
});
cible.addEventListener("drop", (ev) => {
  ev.preventDefault();
  const donnees = ev.dataTransfer.getData("text/plain");
  ev.target.append(donnees);
});
```

{{EmbedLiveSample("drop_target", "", 300)}}

Pour plus d'informations, consultez [Spécification des cibles de dépôt](/fr/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#glisser_des_éléments_et_définir_des_emplacements_de_dépôt).

## Guides

- [Opérations de déplacement](/fr/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
  - : Décrit les étapes qui se déroulent lors d'une opération de déplacement et ce que l'application doit faire dans chaque gestionnaire.
- [Travailler avec le stockage des données déplacées](/fr/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store)
  - : Explique comment lire et écrire dans le stockage des données déplacées pendant une opération de glisser-déposer.
- [Glisser et déposer des fichiers](/fr/docs/Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop)
  - : Guide pratique pour implémenter une interface basique acceptant des fichiers déposés.
- [Tableau Kanban avec glisser-déposer](/fr/docs/Web/API/HTML_Drag_and_Drop_API/Kanban_board)
  - : Un guide pratique pour implémenter un tableau Kanban impliquant le glisser-déposer d'éléments au sein d'une page.

## Interfaces

- {{DOMxRef("DragEvent")}}
  - : L'objet d'évènement passé aux gestionnaires d'évènements de glissement.
- {{DOMxRef("DataTransfer")}}
  - : Contient les données transférées entre contextes, constituées d'éléments texte et d'éléments fichier. Initialement conçue pour le glisser-déposer, cette interface est désormais aussi utilisée dans d'autres contextes tels que [l'API Presse-papiers](/fr/docs/Web/API/Clipboard_API).
- {{DOMxRef("DataTransferItem")}}
  - : Représente un élément du stockage des données déplacées, qui peut être un élément texte ou un élément fichier.
- {{DOMxRef("DataTransferItemList")}}
  - : Représente la liste des objets {{DOMxRef("DataTransferItem")}} dans le stockage des données déplacées.

## Exemples

- [Copier et déplacer des éléments avec l'interface `DataTransfer` <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/drag-and-drop/copy-move-DataTransfer.html)
- [Copier et déplacer des éléments avec l'interface `DataTransferListItem` <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/drag-and-drop/copy-move-DataTransferItemList.html)

Les pages de référence de chaque interface contiennent également des exemples individuels.

## Spécifications

{{Specifications}}

## Voir aussi

- [Les opérations de déplacement](/fr/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Travailler avec le stockage des données déplacées](/fr/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store)
- [Standard Vivant de HTML&nbsp;: Glisser et déposer <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/interaction.html#dnd)
- [Données d'interopérabilité pour l'API Drag and Drop sur CanIUse <sup>(angl.)</sup>](https://caniuse.com/#search=draganddrop)
