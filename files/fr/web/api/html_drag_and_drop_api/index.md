---
title: Glisser et déposer
slug: Web/API/HTML_Drag_and_Drop_API
tags:
  - Avancé
  - Glisser-deposer
  - Guide
  - HTML
  - drag and drop
translation_of: Web/API/HTML_Drag_and_Drop_API
original_slug: Web/API/API_HTML_Drag_and_Drop
---
{{DefaultAPISidebar("HTML Drag and Drop API")}}

**L'interface HTML _Drag and Drop_** (pour glisser-déposer) permet à des applications d'utiliser des fonctionnalités de glisser-déposer dans le navigateur.

L'utilisateur pourra sélectionner des éléments déplaçables à la souris et les déplacer vers un élément où on peut déposer en relâchant le bouton de la souris. Une représentation translucide de l'élément déplacé suit le pointeur lors de l'opération.

Pour les sites web et les extensions, on peut personnaliser les éléments qui peuvent être déplacés, la façon dont ceux-ci sont signalés et les éléments qui peuvent servir de destination.

L'aperçu de cette API inclut une description des interfaces, les étapes à suivre pour prendre en charge ces fonctionnalités dans une application et un aperçu de l'interopérabilité de ces interfaces.

## Évènements de déplacement

L'API HTML _Drag and Drop_ utilise le modèle d'évènements du DOM ({{domxref("Event")}}) ainsi que les éléments de déplacements (_{{domxref("DragEvent")}}_) hérités des évènements liés à la souris ({{domxref("MouseEvent")}}). Une opération de déplacement commence généralement lorsqu'un utilisateur sélectionne un élément déplaçable puis qu'il le déplace sur un élément de destination avant de relâcher l'élément déplacé.

Lors des opérations de déplacement, plusieurs évènements sont déclenchés (dont certains qui sont déclenchés à plusieurs reprises comme {{event("drag")}} et {{event("dragover")}}).

Chaque [type d'évènement de déplacement](/fr/docs/Web/API/DragEvent#Event_types) possède un [gestionnaire d'évènement global (une méthode `on...`)](/fr/docs/Web/API/DragEvent#GlobalEventHandlers) :

| Évènement                    | Gestionnaire d'évènement global                                                  | Déclenchement                                                                                                                                                                                |
| ---------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{event('drag')}}     | {{domxref('GlobalEventHandlers.ondrag','ondrag')}}             | …un objet déplaçable (que ce soit un élément ou une sélection de texte) est déplacée.                                                                                                        |
| {{event('dragend')}} | {{domxref('GlobalEventHandlers.ondragend','ondragend')}}     | …une opération de déplacement se termine (en relâchant le bouton de la souris ou en utilisant la touche Echap, voir [Terminer un déplacement](/en-US/docs/DragDrop/Drag_Operations#dragend)) |
| {{event('dragenter')}} | {{domxref('GlobalEventHandlers.ondragenter','ondragenter')}} | …un élément en cours de déplacement arrive sur une zone de dépôt valide (voir [indiquer une cible de destination](/fr/docs/DragDrop/Drag_Operations#droptargets)).                           |
| {{event('dragexit')}} | {{domxref('GlobalEventHandlers.ondragexit','ondragexit')}}     | …un élément n'est plus la sélection immédiate du déplacement.                                                                                                                                |
| {{event('dragleave')}} | {{domxref('GlobalEventHandlers.ondragleave','ondragleave')}} | …un élément en cours de déplacement quitte une zone de dépôt valide.                                                                                                                         |
| {{event('dragover')}} | {{domxref('GlobalEventHandlers.ondragover','ondragover')}}     | …un élément en cours de déplacement est en cours de survol d'une zone de dépôt valide (cet évènement est déclenché toutes les quelques centaines de millisecondes).                          |
| {{event('dragstart')}} | {{domxref('GlobalEventHandlers.ondragstart','ondragstart')}} | …l'utilisateur commence à déplacer un élément (voir [démarrer une opération de glissement](/fr/docs/DragDrop/Drag_Operations#dragstart)).                                                    |
| {{event('drop')}}     | {{domxref('GlobalEventHandlers.ondrop','ondrop')}}             | …un élément est déposé sur une cible valide (voir [déposer un élément](/fr/docs/DragDrop/Drag_Operations#drop)).                                                                             |

> **Note :** Les évènements `dragstart` et `dragend` ne sont pas déclenchés lors qu'on glisse-dépose un fichier de l'appareil dans le navigateur.

## Interfaces

Les interfaces fournies par cette API sont

- {{domxref("DragEvent")}},
- {{domxref("DataTransfer")}},
- {{domxref("DataTransferItem")}}
- {{domxref("DataTransferItemList")}}.

L'interface {{domxref("DragEvent")}} possède un constructeur et une propriété {{domxref("DragEvent.dataTransfer","dataTransfer")}} qui est un objet {{domxref("DataTransfer")}}.

Les objets {{domxref("DataTransfer")}} incluent l'état du glisser-déposer, le type de déplacement (`copy` ou `move`), les données déplacées (un ou plusieurs objets) et le type MIME de chaque objet déplacé. Les objets {{domxref("DataTransfer")}} possèdent également des méthodes permettant d'ajouter ou de retirer des objets aux données déplacées.

Les interfaces {{domxref("DragEvent")}} et {{domxref("DataTransfer")}} sont standard et suffisent à apporter des fonctionnalités de glisser/déposer. Toutefois, Firefox prend en charge quelques extensions spécifiques à Gecko (cf. ci-après) pour l'objet {{domxref("DataTransfer")}} (bien entendu, ces extensions ne fonctionneront que dans Firefox et pas dans les autres navigateurs).

Chaque objet {{domxref("DataTransfer")}} possède une propriété  {{domxref("DataTransfer.items","items")}} qui est une liste ({{domxref("DataTransferItemList","list")}}) d'objets {{domxref("DataTransferItem")}}. Un objet {{domxref("DataTransferItem")}} représente un seul objet déplacé, avec une propriété {{domxref("DataTransferItem.kind","kind")}} qui indique s'il s'agit d'un texte (`string`) ou d'un fichier (`file`) et une propriété {{domxref("DataTransferItem.type","type")}} qui correspond au type MIME de la donnée déplacée. L'objet {{domxref("DataTransferItem")}} possède également des méthodes pour consulter les données de l'objet déplacé.

L'objet {{domxref("DataTransferItemList")}} est une liste d'objets {{domxref("DataTransferItem")}}. La liste possède des méthodes pour ajouter un objet en déplacement à la liste, pour retirer un objet de la liste ou pour vider la liste de tout ses objets.

La différence principale entre {{domxref("DataTransfer")}} et {{domxref("DataTransferItem")}} est l'utilisation de la méthode synchrone {{domxref("DataTransfer.getData","getData()")}} pour la première et de la méthode asynchrone {{domxref("DataTransferItem.getAsString","getAsString()")}} pour la deuxième.

> **Note :** {{domxref("DragEvent")}} et {{domxref("DataTransfer")}} sont largement prises en charge par les navigateurs de bureau tandis que {{domxref("DataTransferItem")}} et {{domxref("DataTransferItemList")}} ont une compatibilité plus restreinte. Voir la section ci-après sur l'interopérabilité.

### Interfaces spécifiques à Gecko

Mozilla / Firefox prend en charge certaines fonctionnalités qui ne font pas partie du modèle standard. Ce sont des fonctions utilitaires pour aider au déplacement de plusieurs objets ou de données qui ne sont pas du texte (des fichiers par exemple). Pour plus d'informations, voir [Glisser-déposer plusieurs objets](/fr/docs/Web/API/HTML_Drag_and_Drop_API/Multiple_items). Voir aussi la page de référence de {{domxref("DataTransfer")}} pour la liste de l'ensemble [des propriétés spécifique à Gecko](/fr/docs/Web/API/DataTransfer#Gecko_properties) et [des méthodes spécifiques à Gecko](/fr/docs/Web/API/DataTransfer#Gecko_methods).

## Bases

Dans cette section, nous allons voir les premières étapes nécessaires aux fonctionnalités de glisser-déposer dans une application.

### Identifier ce qui peut être déplacé

Pour qu'un élément puisse être déplacé, il faut lui ajouter l'attribut {{htmlattrxref("draggable")}} ainsi que le gestionnaire d'évènement global {{domxref("GlobalEventHandlers.ondragstart","ondragstart")}} :

```html
<script>
function dragstart_handler(ev) {
 // On ajoute l'identifiant de l'élément cible à l'objet de transfert
 ev.dataTransfer.setData("text/plain", ev.target.innerText);
}
</script>

<p id="p1" draggable="true" ondragstart="dragstart_handler(event)">Cet élément est déplaçable.</p>
```

Voir [la page de référence sur l'attribut `draggable`](/fr/docs/Web/HTML/Global_attributes/draggable) et [le guide sur les opérations de déplacement](/fr/docs/Web/Guide/HTML/Drag_operations#draggableattribute) pour plus d'informations.

### Définir les données déplacées

Une application peut inclure plusieurs objets dans une opération de glisser/déposer. Chaque objet est une chaîne de caractères ({{domxref("DOMString")}}) ayant un type MIME particulier (indiqué par son attribut `type`) tel que `text/html`.

Chaque {{domxref("DragEvent")}} possède une propriété  {{domxref("DragEvent.dataTransfer","dataTransfer")}} contenant les données transportées. Cette propriété (un objet {{domxref("DataTransfer")}}) possède des méthodes pour gérer les données transportées. La méthode {{domxref("DataTransfer.setData","setData()")}} permet d'ajouter un objet aux données transportées :

```js
function dragstart_handler(ev) {
  // On ajoute différents types de données transportées
  ev.dataTransfer.setData("text/plain", ev.target.innerText);
  ev.dataTransfer.setData("text/html", ev.target.outerHTML);
  ev.dataTransfer.setData("text/uri-list", ev.target.ownerDocument.location.href);
}
```

Pour connaître la liste des types de donnée communément utilisées lors d'un glisser/déposer (texte, HTML, liens, fichiers, etc.), voir [les types recommandés](/fr/docs/DragDrop/Recommended_Drag_Types). Pour plus d'informations sur les informations transportées, voir [Drag Data](/fr/docs/Web/Guide/HTML/Drag_operations#dragdata).

### Définir l'image pour le déplacement

Par défaut, le navigateur fournit une image qui apparaît à côté du pointeur lors de l'opération de déplacement. Toutefois, une application peut définir une image personnalisée grâce à la méthode {{domxref("DataTransfer.setDragImage","setDragImage()")}} :

```js
function dragstart_handler(ev) {
  // On crée une image qu'on utilise pour le déplacement
  // Note : on changera "example.gif" vers une vraie image
  // (sinon l'image par défaut sera utilisée)
  var img = new Image();
  img.src = 'example.gif';
  ev.dataTransfer.setDragImage(img, 10, 10);
}
```

Pour en savoir plus, voir [Définir l'image de _feedback_ pour le glisser-déposer](/fr/docs/DragDrop/Drag_Operations#dragfeedback).

### Définir l'effet de déplacement

La propriété {{domxref("DataTransfer.dropEffect","dropEffect")}} est utilisée pour fournir un retour à l'utilisateur qui effectue l'opération de glisser/déposer. Généralement, cela se traduit par la modification du curseur affiché par le navigateur lors du déplacement.

Il est possible de définir trois effets :

- `copy` : indique que les données déplacées seront copiées depuis l'emplacement source vers la cible.
- `move` : indique que les données déplacées seront déplacées depuis l'emplacement source vers la cible.
- `link` : indique qu'une relation ou une connexion sera créée entre la source et la cible.

Lors de l'opération de déplacement, les effets peuvent être modifiés afin d'indiquer que certains effets sont autorisés à certains emplacements.

Voici un exemple illustrant l'utilisation de cette propriété.

```js
function dragstart_handler(ev) {
  ev.dataTransfer.dropEffect = "copy";
}
```

See [Drag Effects](/en-US/docs/Web/Guide/HTML/Drag_operations#drageffects) for more details.

### Définir la zone où déposer l'élément déplacé

Par défaut, le navigateur empêche de déposer quoi que ce soit sur la plupart des éléments HTML. Pour modifier ce comportement, il faut qu'un élément devienne une zone cible ou qu'il soit identifié comme "_droppable_". L'élément doit avoir les deux gestionnaires d'évènements {{domxref("GlobalEventHandlers.ondragover","ondragover")}} et {{domxref("GlobalEventHandlers.ondrop","ondrop")}} comme attributs. Dans l'exemple suivant, on montre comment utiliser ces attributs et on fournit des gestionnaires d'évènements simples associés :

```html
<script>
function dragover_handler(ev) {
 ev.preventDefault();
 ev.dataTransfer.dropEffect = "move";
}
function drop_handler(ev) {
 ev.preventDefault();
 // On récupère l'identifiant de la cible et on ajoute l'élément déplacé au DOM de la cible
 var data = ev.dataTransfer.getData("text/plain");
 ev.target.appendChild(document.getElementById(data));
}
</script>

<p id="target" ondrop="drop_handler(event)" ondragover="dragover_handler(event)">Zone pour déposer</p>
```

On voit ici que chaque gestionnaire invoque {{domxref("Event.preventDefault","preventDefault()")}} afin d'éviter toute gestion d'évènement ultérieure (comme [les évènements tactiles](/fr/docs/Web/API/Touch_events) ou [les évènements de pointeur](/fr/docs/Web/API/Pointer_events)).

Pour plus d'information, voir [Indiquer une cible pour un glisser-déposer](/fr/docs/Web/Guide/HTML/Drag_operations#droptargets).

### Gérer le dépôt de l'objet

Le gestionnaire de l'évènement {{event("drop")}} permet de gérer les données déposées avec la logique de l'application. Généralement, une application utilisera {{domxref("DataTransfer.getData","getData()")}} afin de récupérer les données déplacées et les traitera. L'application peut choisir d'avoir un comportement différent selon la valeur de {{domxref("DataTransfer.dropEffect","dropEffect")}} et/ou celles des autres propriétés.

Dans l'exemple suivant, on montre un gestionnaire pour le dépot de l'objet : on récupère l'identifiant (`id`) de l'élément déplacé puis on utilise celui-ci afin de le déplacer depuis la source vers la cible :

```html
<script>
function dragstart_handler(ev) {
 // On ajoute l'identifiant de l'élément cible à l'objet de transfert
 ev.dataTransfer.setData("application/my-app", ev.target.id);
 ev.dataTransfer.dropEffect = "move";
}
function dragover_handler(ev) {
 ev.preventDefault();
 ev.dataTransfer.dropEffect = "move"
}
function drop_handler(ev) {
 ev.preventDefault();
 // On obtient l'identifiant de la cible et on ajoute l'élément déplacé
 // au DOM de la cible
 var data = ev.dataTransfer.getData("application/my-app");
 ev.target.appendChild(document.getElementById(data));
}
</script>

<p id="p1" draggable="true" ondragstart="dragstart_handler(event)">Cet élément peut être déplacé.</p>
<div id="target" ondrop="drop_handler(event)" ondragover="dragover_handler(event)">Zone pour le dépôt</div>
```

Pour plus d'information, voir [Gérer le dépôt lors d'une opération de glisser-déposer](/fr/docs/Web/Guide/HTML/Drag_operations#drop).

### Terminer l'opération de glisser/déposer

À la fin de l'opération, c'est l'évènement {{event("dragend")}} qui est déclenché _sur l'élément source_ (celui qui a été "saisi" au début). Cet évènement est déclenché lorsque l'opération est terminée ou qu'elle a été annulée. Le gestionnaire d'évènement pour {{event("dragend")}} peut vérifier la valeur de la propriété {{domxref("DataTransfer.dropEffect","dropEffect")}} afin de déterminer si l'opération a réussi ou non.

Pour plus d'informations sur la gestion de la fin d'une opération de glisser-déposer, voir [Terminer un glisser-déposer](/fr/docs/DragDrop/Drag_Operations#dragend).

## Interopérabilité

Comme on peut le voir [dans le tableau de compatibilité pour l'interface `DataTransferItem`](/en-US/docs/Web/API/DataTransferItem#Browser_compatibility), la prise en charge du _drag-and-drop_ est assez répandue parmi les navigateurs de bureau à l'exception des interfaces {{domxref("DataTransferItem")}} et {{domxref("DataTransferItemList")}}. Ce tableau montre également que la prise en charge sur mobile est assez faible.

## Exemples et démos

- [Copier et déplacer des éléments avec l'interface `DataTransfer`](https://mdn.github.io/dom-examples/drag-and-drop/copy-move-DataTransfer.html)
- [Copier et déplacer des éléments avec l'interface `DataTransferListItem`](http://mdn.github.io/dom-examples/drag-and-drop/copy-move-DataTransferItemList.html)
- [JSBin : Glisser-déposer des fichiers](https://jsbin.com/hiqasek/edit?html,js,output)
- [Un parking réalisé avec l'API Drag and Drop](https://park.glitch.me/) ([lien pour éditer le code](https://glitch.com/edit/#!/park))

## Voir aussi

- [Les opérations de déplacement](/fr/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Glisser-déposer plusieurs objets](/fr/docs/Web/API/HTML_Drag_and_Drop_API/Multiple_items)
- [Types de déplacement recommandés](/fr/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [Spécification HTML5 : Drag and Drop](https://html.spec.whatwg.org/multipage/interaction.html#dnd)
- [Données d'interopérabilité pour l'API Drag and Drop sur CanIUse](http://caniuse.com/#search=draganddrop)
