---
title: Comparaison des cibles d'évènements
slug: Web/API/Event/Comparison_of_Event_Targets
l10n:
  sourceCommit: 95b52aa7aeabbd2670f762da4fb7c0b0133f4d9f
---

{{APIRef}}

On peut facilement confondre les différentes cibles d'évènements lorsqu'on écrit un gestionnaire d'évènement. Cet article devrait vous aider à y voir plus clair dans l'utilisation des propriétés relatives aux cibles.

Voici les cibles à considérer&nbsp;:

<table class="no-markdown">
  <thead>
    <tr>
      <th>Propriété</th>
      <th>Définie par</th>
      <th>Objectif</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code><a href="/fr/docs/Web/API/Event/target">event.target</a></code>
      </td>
      <td>
        <a href="/fr/docs/Web/API/Event">Interface <code>Event</code> du DOM</a>
      </td>
      <td>L'élément du DOM situé à gauche (dans l'instruction JavaScript) lors de l'appel qui a déclenché cet évènement.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/fr/docs/Web/API/Event/currentTarget">event.currentTarget</a></code>
      </td>
      <td>
        <a href="/fr/docs/Web/API/Event">Interface <code>Event</code> du DOM</a>
      </td>
      <td>
        L'objet <a href="/fr/docs/Web/API/EventTarget"><code>EventTarget</code></a> dont <a href="/fr/docs/Web/API/EventTarget/addEventListener">les gestionnaires d'évènements</a> sont traités. Lorsque la capture d'évènement et le bouillonnement ont lieu, cette valeur change.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/fr/docs/Web/API/MouseEvent/relatedTarget">event.relatedTarget</a></code>
      </td>
      <td>
        <a href="/fr/docs/Web/API/MouseEvent">Interface du DOM <code>MouseEvent</code></a>
      </td>
      <td>Identifie une cible secondaire pour l'évènement.</td>
    </tr>
  </tbody>
</table>

## Exemples

### HTML

```html
<table>
  <thead>
    <tr>
      <td>
        La cible originale qui émet l'évènement
        <small><code>event.target</code></small>
      </td>
      <td>
        La cible dont le gestionnaire d'évènement est en cours de traitement
        <small><code>event.currentTarget</code></small>
      </td>
      <td>
        Identifie un (éventuel) autre élément impliqué dans l'évènement
        <small><code>event.relatedTarget</code></small>
      </td>
    </tr>
  </thead>
  <tr>
    <td id="target"></td>
    <td id="currentTarget"></td>
    <td id="relatedTarget"></td>
  </tr>
</table>
```

### CSS

```css
table {
  border-collapse: collapse;
  height: 150px;
  width: 100%;
}

td {
  border: 1px solid #ccc;
  font-weight: bold;
  padding: 5px;
  min-height: 30px;
}

thead tr {
  background-color: #99ff99;
}
```

### JavaScript

```js
function handleClicks(e) {
  document.getElementById("target").innerHTML = e.target;
  document.getElementById("currentTarget").innerHTML = e.currentTarget;
  document.getElementById("relatedTarget").innerHTML = e.relatedTarget;
}

function handleMouseover(e) {
  document.getElementById("target").innerHTML = e.target;
  document.getElementById("relatedTarget").innerHTML = e.relatedTarget;
}

document.addEventListener("click", handleClicks);
document.addEventListener("mouseover", handleMouseover);
```

### Résultat

Cliquer sur le texte dans le tableau vous permettra d'observer la différence entre `explicitOriginalTarget`, `originalTarget`, et `target`.

{{EmbedLiveSample("","",180)}}

## Utilisation de `target` et de `relatedTarget`

La propriété `relatedTarget` de l'évènement `mouseover` contient le nœud sur lequel la souris était précédemment. Pour l'évènement `mouseout`, elle contient le nœud sur lequel la souris s'est déplacée.

| Type d'évènement | [`event.target`](/fr/docs/Web/API/Event/target)                       | [`event.relatedTarget`](/fr/docs/Web/API/MouseEvent/relatedTarget)    |
| ---------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `mouseover`      | L'objet `EventTarget` sur lequel le dispositif de pointage est entré. | L'objet `EventTarget` que le dispositif de pointage quitte.           |
| `mouseout`       | L'objet `EventTarget` que le dispositif de pointage quitte.           | L'objet `EventTarget` sur lequel le dispositif de pointage est entré. |

### Exemple

#### HTML

```html
<div id="outer">
  <div id="inner"></div>
</div>
<p id="log" />
```

#### CSS

```css
#outer {
  background: rebeccapurple;
}
#inner {
  margin: 0px 100px 0px 100px;
  border: 10px solid black;
  width: 100px;
  height: 100px;
}
```

#### JavaScript

```js
const inner = document.getElementById("inner");
const log = document.getElementById("log");

function handleMouseOver(event) {
  log.innerHTML =
    "mouseover " + event.relatedTarget.id + " > " + event.target.id;
}

function handleMouseOut(event) {
  log.innerHTML =
    "mouseout " + event.target.id + " > " + event.relatedTarget.id;
}

inner.addEventListener("mouseover", handleMouseOver);
inner.addEventListener("mouseout", handleMouseOut);
```

#### Résultat

Déplacez votre pointeur dans le carré noir et en dehors.

{{EmbedLiveSample("","",200)}}
