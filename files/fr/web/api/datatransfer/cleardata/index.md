---
title: DataTransfer.clearData()
slug: Web/API/DataTransfer/clearData
translation_of: Web/API/DataTransfer/clearData
browser-compat: api.DataTransfer.clearData
---
{{APIRef("HTML Drag and Drop API")}}

La méthode **`DataTransfer.clearData()`** retire les données du type indiqué de l'opération de glisser-déposer. S'il n'existe pas de données pour le type indiqué, cette méthode n'a aucun effet.

Si cette méthode est appelée sans argument ou que le format est une chaîne de caractères [`DOMString`](/fr/docs/Web/API/DOMString) vide, la suppression des données concernera tous les types.

Cette méthode _ne retire pas_ les fichiers de l'opération de glisser-déposer et il est donc possible d'avoir un élément restant avec le type `Files` dans la liste [`DataTransfer.types`](/fr/docs/Web/API/DataTransfer/types) si des fichiers font partie du glisser-déposer.

> **Note :** Cette méthode peut uniquement être utilisée dans le gestionnaire d'évènement pour [`dragstart`](/fr/docs/Web/API/Document/dragstart_event), car c'est le seul moment où le magasin de données pour l'opération de glisser-déposer est accessible en écriture.

## Syntaxe

```js
DataTransfer.clearData([format]);
```

### Paramètres

- `format` {{optional_inline}}
  - : Une chaîne de caractères [`DOMString`](/fr/docs/Web/API/DOMString) qui indique le type de données à retirer. Si ce paramètre est une chaîne vide ou qu'il n'est pas fourni, les données pour l'ensemble des types seront retirées.

## Exemple

Cet exemple illustre l'utilisation des méthodes 
[`getData()`](/fr/docs/Web/API/DataTransfer/getData),
[`setData()`](/fr/docs/Web/API/DataTransfer/setData) et `clearData()` de l'objet [`DataTransfer`](/fr/docs/Web/API/DataTransfer).

### HTML

```html
<span class="tweaked" id="source" draggable="true">
  Sélectionnez cet élément, glissez-le dans la zone de dépôt puis relâcher la sélection pour déplacer l'élément.
</span>
<span class="tweaked" id="target">Zone de dépôt</span>
<div>État : <span id="status">Glisser pour démarrer</span></div>
<div>Données : <span id="data">non-initialisée</span></div>
```

### CSS

```css
span.tweaked {
  display: inline-block;
  margin: 1em 0;
  padding: 1em 2em;
}

#source {
  color: blue;
  border: 1px solid black;
}

#target {
  border: 1px solid black;
}
```

### JavaScript

```js
window.addEventListener('DOMContentLoaded', function () {
  // On sélectionne les éléments HTML
  let draggable = document.getElementById('source');
  let droppable = document.getElementById('target');
  let status = document.getElementById('status');
  let data = document.getElementById('data');
  let dropped = false;

  // On enregistre les gestionnaires d'évènements
  draggable.addEventListener('dragstart', dragStartHandler);
  draggable.addEventListener('dragend', dragEndHandler);
  droppable.addEventListener('dragover', dragOverHandler);
  droppable.addEventListener('dragleave', dragLeaveHandler);
  droppable.addEventListener('drop', dropHandler);

  function dragStartHandler (event) {
    status.textContent = 'Glisser-déposer en cours';

    // On change la bordure de l'élément cible pour
    // indiquer que le glisser-déposer a démarré
    event.currentTarget.style.border = '1px dashed blue';

    // On commence par nettoyer les presse-papiers
    // existants. Cela porte sur tous les types vu qu'on
    // ne passe pas de type en argument.

    event.dataTransfer.clearData();

    // On définit le format et les données pour l'opération
    // on utilise l'identifiant de la cible d'évènement comme
    // donnée
    event.dataTransfer.setData('text/plain', event.target.id);

    data.textContent = event.dataTransfer.getData('text/plain');
  }

  function dragEndHandler (event) {
    if (!dropped) {
      status.textContent = 'Glisser-déposer annulé';
    }

    data.textContent = event.dataTransfer.getData('text/plain') || 'vide';

    // On change la bordure afin d'indiquer que le glisser-
    // déposer n'est plus en cours
    event.currentTarget.style.border = '1px solid black';

    if (dropped) {
      // On retire les gestionnaires d'évènements
      draggable.removeEventListener('dragstart', dragStartHandler);
      draggable.removeEventListener('dragend', dragEndHandler);
      droppable.removeEventListener('dragover', dragOverHandler);
      droppable.removeEventListener('dragleave', dragLeaveHandler);
      droppable.removeEventListener('drop', dropHandler);
    }
  }

  function dragOverHandler (event) {
    status.textContent = 'Dépôt disponible';

    event.preventDefault();
  }

  function dragLeaveHandler (event) {
    status.textContent = 'Glisser-déposer en cours (le dépôt était disponible)';

    event.preventDefault();
  }

  function dropHandler (event) {
    dropped = true;

    status.textContent = 'Dépôt effectué';

    event.preventDefault();

    // On récupère les données liées à l'évènement
    // et qui sont au format « text »
    let _data = event.dataTransfer.getData('text/plain');
    let element = document.getElementById(_data);

    // On ajoute l'élément source glissé à l'élément qui
    // est la cible de l'évènement
    event.target.appendChild(element);

    // On modifie les styles CSS et le texte affiché
    element.style.cssText = 'border: 1px solid black;display: block; color: red';
    element.textContent = 'Je suis dans la zone de dépôt !';
  }
})
```

### Résultat

{{EmbedLiveSample('', 300, 280)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API <i lang="en">Drag and drop</i> pour le glisser-déposer](/fr/docs/Web/API/HTML_Drag_and_Drop_API)
- [Les opérations de glisser-déposer](/fr/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Types de données pour le glisser-déposer](/fr/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [Glisser-déposer plusieurs objets](/fr/docs/Web/API/HTML_Drag_and_Drop_API/Multiple_items)
- [Test `DataTransfer` — Coller ou glisser&nbsp;?](https://codepen.io/tech_query/pen/MqGgap)
