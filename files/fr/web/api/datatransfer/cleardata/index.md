---
title: DataTransfer.clearData()
slug: Web/API/DataTransfer/clearData
tags:
  - API
  - HTML DOM
  - Method
  - Reference
  - drag and drop
translation_of: Web/API/DataTransfer/clearData
---
{{APIRef("HTML Drag and Drop API")}}

La méthode DataTransfer.clearData() retire l'opération de {{domxref("DataTransfer","glisser-déposer")}} pour le format donné. Si la donnée pour le format ciblé n'existe pas, cette méthode n'aura aucun effet.

> **Note :** Si cette méthode est appelée sans argument, ou que le format donné est une  {{domxref("DOMString","chaîne de caractères")}}  vide, les données de tous les formats seront retirées.

## Syntaxe

    void dataTransfer.clearData([format]);

### Paramètres

- format{{optional_inline}}
  - : Une {{domxref("DOMString","chaîne de caractères")}} représentant le format de donnée à retirer.

### Valeur de retour

Void.

## Exemple

Cette exemple illustre l'utilisation des méthodes {{domxref("DataTransfer.getData()","getData()")}}, {{domxref("DataTransfer.setData()","setData()")}} et {{domxref("DataTransfer.clearData()","clearData()")}} de l'objet {{domxref("DataTransfer")}}.

### HTML

```html
<span class="tweaked" id="source" draggable="true">
  Sélectionnez cet élément, glissez-le et déposez-le dans la Zone de Dépose pour le déplacer.
</span>
<span class="tweaked" id="target">Zone de Dépose</span>
<div>Status: <span id="status">Glissez pour démarrer</span></div>
<div>Data is: <span id="data">non initialisé</span></div>
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
  // Séléctionner les éléments HTML
  var draggable = document.getElementById('source')
  var dropable = document.getElementById('target')
  var status = document.getElementById('status')
  var data = document.getElementById('data')
  var dropped = false

  // Enregistrer les évènements
  draggable.addEventListener('dragstart', dragStartHandler)
  draggable.addEventListener('dragend', dragEndHandler)
  dropable.addEventListener('dragover', dragOverHandler)
  dropable.addEventListener('dragleave', dragLeaveHandler)
  dropable.addEventListener('drop', dropHandler)

  function dragStartHandler (event) {
    status.innerHTML = 'Glisse en cours'

    // Modifier la bordure de l'élément pour indiquer qu'une opération de glisse a démarré
    event.currentTarget.style.border = '1px dashed blue'

    // Définir le type et la donnée associée à l'opération de glisse (utilise l'ID de la cible de l'évènement pour la donnée)
    event.dataTransfer.setData('text/plain', event.target.id)

    data.innerHTML = event.dataTransfer.getData('text/plain')
  }

  function dragEndHandler (event) {
    if (!dropped) {
      status.innerHTML = 'Glisse annulée'
    }

    data.innerHTML = event.dataTransfer.getData('text/plain') || 'vide'

    // Modifier la bordure de l'élément pour indiquer que l'opération de glisse n'est plus en cours
    event.currentTarget.style.border = '1px solid black'

    if (dropped) {
      // Retirer tous les évènements enregistrés précédemment
      draggable.removeEventListener('dragstart', dragStartHandler)
      draggable.removeEventListener('dragend', dragEndHandler)
      dropable.removeEventListener('dragover', dragOverHandler)
      dropable.removeEventListener('dragleave', dragLeaveHandler)
      dropable.removeEventListener('drop', dropHandler)
    }
  }

  function dragOverHandler (event) {
    status.innerHTML = 'Dépose disponible'

    event.preventDefault()
  }

  function dragLeaveHandler (event) {
    status.innerHTML = 'Glisse en cours (la dépose était disponible)'

    event.preventDefault()
  }

  function dropHandler (event) {
    dropped = true

    status.innerHTML = 'Dépose effectuée'

    event.preventDefault()

    // Récupérer la donnée liée au type « text/plain »
    var _data = event.dataTransfer.getData('text/plain')
    var element = document.getElementById(_data)

    // Insérer l'élément source de l'opération de glisse en tant que dernier enfant de l'élément cible de l'opération de dépose
    event.target.appendChild(element)

    // Modifier les styles CSS et le texte affiché
    element.style.cssText = 'border: 1px solid black;display: block; color: red'
    element.innerHTML = "J'suis dans la Zone de Dépose !"

    // Effacer les données de TOUS les types liés à l'opération de glisse (car on n'a pas donné de paramètre)
    event.dataTransfer.clearData()
  }
})
```

{{EmbedLiveSample('Exemple', 300, 250)}}

## Spécifications

| Spécification                                                                                                                            | Statut                           | Commentaire         |
| ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------- |
| {{SpecName('HTML WHATWG', 'interaction.html#dom-datatransfer-cleardata','DataTransfer.clearData()')}} | {{Spec2('HTML WHATWG')}} |                     |
| {{SpecName('HTML5.1', 'editing.html#dom-datatransfer-cleardata','DataTransfer.clearData()')}}             | {{Spec2('HTML5.1')}}     | Définition initiale |

## Compatibilité

{{Compat("api.DataTransfer.clearData")}}

## À voir également

{{page("/fr/docs/Web/API/DataTransfer", "See also")}}
