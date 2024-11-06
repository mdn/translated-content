---
title: "Element : évènement error"
slug: Web/API/HTMLElement/error_event
---

{{APIRef}}

L'évènement `error` est déclenché sur un objet [`Element`](/fr/docs/Web/API/Element) lorsque le chargement d'une ressource a échoué ou qu'elle ne peut pas être utilisée. Cela peut, par exemple, se produire lors d'une erreur d'exécution d'un script ou lorsqu'une image ne peut être trouvée ou si elle est invalide.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bouillonnement</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Annulable</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td><a href="/fr/docs/Web/API/Event"><code>Event</code></a> ou <a href="/fr/docs/Web/API/UIEvent"><code>UIEvent</code></a></td>
    </tr>
    <tr>
      <th scope="row">Propriété pour la gestion d'évènement</th>
      <td>
        <a href="/fr/docs/Web/API/GlobalEventHandlers/onerror"><code>onerror</code></a>
      </td>
    </tr>
  </tbody>
</table>

L'objet évènement obtenu est une instance [`UIEvent`](/fr/docs/Web/API/UIEvent) s'il a été généré depuis un élément de l'interface utilisateur ou une instance [`Event`](/fr/docs/Web/API/Event) sinon.

## Exemples

### HTML

```html
<div class="controls">
  <button id="img-error" type="button">Générer une erreur d'image</button>
  <img class="bad-img" />
</div>

<div class="event-log">
  <label>Journal d'évènements :</label>
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

label,
button {
  display: block;
}

button {
  height: 2rem;
  margin: 0.5rem;
}

img {
  width: 0;
  height: 0;
}
```

### JS

```js
const log = document.querySelector(".event-log-contents");

const badImg = document.querySelector(".bad-img");
badImg.addEventListener("error", (event) => {
  log.textContent = log.textContent + `${event.type}: Chargement de l'image\n`;
  console.log(event);
});

const imgError = document.querySelector("#img-error");
imgError.addEventListener("click", () => {
  badImg.setAttribute("src", "i-dont-exist");
});
```

### Résultat

{{EmbedLiveSample('', '100%', '250px')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'évènement correspondant pour les cibles `Window`&nbsp;: [`error`](/fr/docs/Web/API/Window/error_event)
