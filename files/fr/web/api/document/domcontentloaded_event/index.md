---
title: 'Document: DOMContentLoaded event'
slug: Web/API/Document/DOMContentLoaded_event
translation_of: Web/API/Document/DOMContentLoaded_event
---
{{APIRef}}

L'évènement **`DOMContentLoaded`** est déclenché quand le document HTML initial est complètement chargé et analysé, sans attendre la fin du chargement des feuilles de styles, images et sous-document.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bouillonne</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">Annulable</th>
      <td>Oui (bien que spécifié comme évènement simple non annulable)</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">Propriété de gestion de l’évènement</th>
      <td>Aucune</td>
    </tr>
  </tbody>
</table>

Un évènement différent, {{domxref("Window/load_event", "load")}} doit être utilisé pour détecter que la page entière est chargée. On utilise couramment à tort `load` là où `DOMContentLoaded` serait plus approprié.

Du code JavaScript synchrone va mettre en pause la création du DOM. Si vous voulez charger le DOM le plus rapidement possible, vous pouvez faire votre code [(en) JavaScript asynchrone](/en-US/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests) et [(en) optimiser le chargement des feuilles de styles](https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery). Si vous chargez comme d'habitude, les feuilles de styles vont ralentir la création du DOM comme si elles étaient chargées en parallèle, en «volant» le trafic du document principal HTML.

## Exemples

### Usage simple

```js
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});
```

### Retarde DOMContentLoaded

```html
<script>
  document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
  });

for( let i = 0; i < 1000000000; i++)
{} // This synchronous script is going to delay parsing of the DOM,
   // so the DOMContentLoaded event is going to launch later.
</script>
```

### Vérifie que le contenu si le chargement est déjà fini

L'évènement `DOMContentLoaded` peut-être déclenché avant que le script soit exécuté, donc il vaut mieux vérifier avant d'ajouter un écouteur d'évènement.

```js
function doSomething() {
  console.info('DOM loaded');
}

if (document.readyState === 'loading') {  // Loading hasn't finished yet
  document.addEventListener('DOMContentLoaded', doSomething);
} else {  // `DOMContentLoaded` has already fired
  doSomething();
}
```

### Démonstration

#### HTML

```html
<div class="controls">
  <button id="reload" type="button">Reload</button>
</div>

<div class="event-log">
  <label>Event log:</label>
  <textarea readonly class="event-log-contents" rows="8" cols="30"></textarea>
</div>
```

```css hidden
body {
  display: grid;
  grid-template-areas: "control  log";
}

.controls {
  grid-area: control;
  display: flex;
  align-items: center;
  justify-content: center;
}

.event-log {
  grid-area: log;
}

.event-log-contents {
  resize: none;
}

label, button {
  display: block;
}

#reload {
  height: 2rem;
}
```

#### JS

```js
const log = document.querySelector('.event-log-contents');
const reload = document.querySelector('#reload');

reload.addEventListener('click', () => {
  log.textContent ='';
  window.setTimeout(() => {
      window.location.reload(true);
  }, 200);
});

window.addEventListener('load', (event) => {
    log.textContent = log.textContent + 'load\n';
});

document.addEventListener('readystatechange', (event) => {
    log.textContent = log.textContent + `readystate: ${document.readyState}\n`;
});

document.addEventListener('DOMContentLoaded', (event) => {
    log.textContent = log.textContent + `DOMContentLoaded\n`;
});
```

#### Résultat

{{ EmbedLiveSample('Démonstration', '100%', '160px') }}

## Spécifications

| Spécification                                                                                                                | Status                           | Commentaire |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------- |
| {{SpecName('HTML WHATWG', 'parsing.html#the-end:event-domcontentloaded', 'DOMContentLoaded')}} | {{Spec2('HTML WHATWG')}} |             |
| {{SpecName('HTML5 W3C', 'syntax.html#the-end', 'DOMContentLoaded')}}                                 | {{Spec2('HTML5 W3C')}}     |             |

## Compatibilité des navigateurs

{{Compat("api.Document.DOMContentLoaded_event")}}

## Voir aussi

- Évènements similaires: {{domxref("Window/load_event", "load")}}, {{domxref("Document/readystatechange_event", "readystatechange")}}, {{domxref("Window/beforeunload_event", "beforeunload")}} et {{domxref("Window/unload_event", "unload")}}
- Cet évènement sur la cible {{domxref("Window")}}: {{domxref("Window/DOMContentLoaded_event", "DOMContentLoaded")}}
