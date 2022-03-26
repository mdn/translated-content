---
title: Event.eventPhase
slug: Web/API/Event/eventPhase
tags:
  - API
  - DOM
  - Evènement
  - Flux
  - Phase
  - Propriétés
translation_of: Web/API/Event/eventPhase
---
{{ApiRef("DOM")}}

Indique quelle phase du flux d'événements est actuellement évaluée.

## Syntaxe

```js
var phase = event.eventPhase;
```

Retourne un entier qui spécifie la phase courante d'évaluation du flux d'événements. Les valeurs possibles sont listées dans [Constantes de phase d'événement](#constantes_de_phase_d'événement).

## Constantes

### Constantes de phase d'événement

Ces valeurs décrivent quelle est la phase du flux d'événements actuellement évalué.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Constant</th>
      <th scope="col">Value</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>Event.NONE</code></td>
      <td>0</td>
      <td><p>Aucun événement n'est actuellement traité.</p></td>
    </tr>
    <tr>
      <td><code>Event.CAPTURING_PHASE</code></td>
      <td>1</td>
      <td>
        <p>
          L'événement se propage à travers les objets ancêtres de la cible. Ce
          processus commence avec {{domxref("Window")}}, puis
          {{domxref("Document")}}, ensuite
          {{domxref("HTMLHtmlElement")}} et ainsi de suite à travers
          les éléments jusqu'à ce que le parent de la cible soit atteint.
          {{domxref("EventListener", "Event listeners", "", 1)}}
          sont enregistrés pour le mode capture lorsque
          {{domxref("EventTarget.addEventListener()")}} est
          appelé durant cette phase.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>Event.AT_TARGET</code></td>
      <td>2</td>
      <td>
        L'événement est arrivé à
        {{domxref("EventTarget", "the event's target", "", 1)}}.
        Les écouteurs d'événements enregistrés pour cette phase sont appelés à
        ce moment. Si {{domxref("Event.bubbles")}} vaut
        <code>false</code> (<em>faux</em>), le traitement de l'événement est
        terminé une fois la phase complète.
      </td>
    </tr>
    <tr>
      <td><code>Event.BUBBLING_PHASE</code></td>
      <td>3</td>
      <td>
        L'événement se propage à rebours à travers les ancêtres de la cible dans
        l'ordre inverse, commençant avec le parent, et atteignant finalement le
        contenant {{domxref("Window")}}. Ceci est connu comme propagation
        et arrive seulement si {{domxref("Event.bubbles")}} vaut
        <code>true</code> (<em>vrai</em>). Les
        {{domxref("EventListener", "Event listeners", "", 1)}}
        enregistrés pour cette phase sont déclenchés durant ce traitement.
      </td>
    </tr>
  </tbody>
</table>

Pour plus de détails, voir [section 3.1, Event dispatch and DOM event flow](http://www.w3.org/TR/DOM-Level-3-Events/#event-flow) (en) de la spécification du DOM niveau 3 sur les évènements .

## Exemple

### HTML

```html
<h4>Event Propagation Chain</h4>
<ul>
  <li>Click 'd1'</li>
  <li>Analyse event propagation chain</li>
  <li>Click next div and repeat the experience</li>
  <li>Change Capturing mode</li>
  <li>Repeat the experience</li>
</ul>
<input type="checkbox" id="chCapture" />
<label for="chCapture">Use Capturing</label>
 <div id="d1">d1
  <div id="d2">d2
      <div id="d3">d3
          <div id="d4">d4</div>
      </div>
  </div>
 </div>
 <div id="divInfo"></div>
```

### CSS

```css
div {
  margin: 20px;
  padding: 4px;
  border: thin black solid;
}

#divInfo {
  margin: 18px;
  padding: 8px;
  background-color:white;
  font-size:80%;
}
```

### JavaScript

```js
var clear = false, divInfo = null, divs = null, useCapture = false;
window.onload = function () {
  divInfo = document.getElementById("divInfo");
  divs = document.getElementsByTagName('div');
  chCapture = document.getElementById("chCapture");
  chCapture.onclick = function () {
    RemoveListeners();
    AddListeners();
  }
  Clear();
  AddListeners();
}

function RemoveListeners() {
  for (var i = 0; i < divs.length; i++) {
    var d = divs[i];
    if (d.id != "divInfo") {
      d.removeEventListener("click", OnDivClick, true);
      d.removeEventListener("click", OnDivClick, false);
    }
  }
}

function AddListeners() {
  for (var i = 0; i < divs.length; i++) {
    var d = divs[i];
    if (d.id != "divInfo") {
      if (chCapture.checked)
        d.addEventListener("click", OnDivClick, true);
      else
        d.addEventListener("click", OnDivClick, false);
      d.onmousemove = function () { clear = true; };
    }
  }
}

function OnDivClick(e) {
  if (clear) {
    Clear(); clear = false;
  }
  if (e.eventPhase == 2)
    e.currentTarget.style.backgroundColor = 'red';
  var level = e.eventPhase == 0 ? "none" : e.eventPhase == 1 ? "capturing" : e.eventPhase == 2 ? "target" : e.eventPhase == 3 ? "bubbling" : "error";
  divInfo.innerHTML += e.currentTarget.id + "; eventPhase: " + level + "<br/>";
}

function Clear() {
  for (var i = 0; i < divs.length; i++) {
    if (divs[i].id != "divInfo")
      divs[i].style.backgroundColor = (i & 1) ? "#f6eedb" : "#cceeff";
  }
  divInfo.innerHTML = '';
}
```

{{ EmbedLiveSample('Exemple', '', '700', '', 'Web/API/Event/eventPhase') }}

## Spécifications

| Spécification                                                                                        | Statut                           | Commentaire         |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------- |
| {{SpecName("DOM WHATWG", "#dom-event-eventphase", "Event.eventPhase")}}     | {{Spec2("DOM WHATWG")}} |                     |
| {{SpecName("DOM4", "#dom-event-eventphase", "Event.eventPhase")}}             | {{Spec2("DOM4")}}         |                     |
| {{SpecName("DOM2 Events", "#Events-Event-eventPhase", "Event.eventPhase")}} | {{Spec2("DOM2 Events")}} | Première définition |

## Compatibilité des navigateurs

{{Compat("api.Event.eventPhase")}}
