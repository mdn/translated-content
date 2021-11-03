---
title: Comparaison des cibles d'évènements
slug: Web/API/Event/Comparison_of_Event_Targets
tags:
  - Cibles
  - DOM
  - évènements
translation_of: Web/API/Event/Comparison_of_Event_Targets
original_slug: Web/API/Event/Comparaison_des_cibles_d_évènements
---
{{ ApiRef() }}

### Cibles d'évènements

Il est facile de s'interroger sur la cible à examiner lors de l'écriture d'un gestionnaire d'événements. Cet article devrait clarifier l'utilisation des propriétés de la cible.

Il y a 5 cibles à considérer :

<table class="standard-table">
  <tbody>
    <tr>
      <th>Propriété</th>
      <th>Définie dans</th>
      <th>Objectif</th>
    </tr>
    <tr>
      <td><a href="/en/DOM/event.target">event.target</a></td>
      <td>
        <a href="http://www.w3.org/TR/DOM-Level-2/events.html#Events-interface"
          >DOM Event Interface</a
        >
      </td>
      <td>
        <p>
          L'élément DOM sur le côté gauche de l'appel qui a déclenché cet
          événement, par exemple :
        </p>
        <pre class="eval"><em>element</em>.dispatchEvent(<em>event</em>)
</pre>
      </td>
    </tr>
    <tr>
      <td><a href="/en/DOM/event.currentTarget">event.currentTarget</a></td>
      <td>
        <a href="https://www.w3.org/TR/DOM-Level-2/events.html#Events-interface"
          >DOM Event Interface</a
        >
      </td>
      <td>
        La
        <a
          href="http://www.w3.org/TR/DOM-Level-2/events.html#Events-EventTarget"
          ><code>EventTarget</code></a
        >
        (<em>cible d'évènement</em>) que les
        <a
          href="http://www.w3.org/TR/DOM-Level-2/events.html#Events-EventListener"
          ><code>EventListeners</code></a
        >
        traitent actuellement. Au fur et à mesure de la capture et de la
        diffusion des évènements, cette valeur change.
      </td>
    </tr>
    <tr>
      <td><a href="/en/DOM/event.relatedTarget">event.relatedTarget</a></td>
      <td>
        <a href="http://www.w3.org/TR/DOM-Level-2/events.html#Events-MouseEvent"
          >DOM MouseEvent Interface</a
        >
      </td>
      <td>Identifie une cible secondaire pour l'évènement.</td>
    </tr>
    <tr>
      <td>
        <a href="/en/DOM/event.explicitOriginalTarget"
          >event.explicitOriginalTarget</a
        >
      </td>
      <td>
        {{ Source("/dom/public/idl/events/nsIDOMNSEvent.idl", "nsIDOMNSEvent.idl") }}
      </td>
      <td>
        {{ Non-standard_inline() }} Si l'évènement a été reciblé pour
        quelque raison autre que  un passage de limite anonyme, il sera défini
        sur la cible avant le reciblage. Par exemple, les évènements de souris
        sont reciblés vers leur noeud parent quand ils surviennent sur des
        noeuds de texte ({{ Bug("185889") }}), et, dans ce cas,
        <code>.target</code> affichera le parent
        <code>.explicitOriginalTarget</code> et le noeud de texte.<br />Contrairement
        à <code>.originalTarget</code>,
        <code>.explicitOriginalTarget</code> n'aura jamais de contenu anonyme.
      </td>
    </tr>
    <tr>
      <td><a href="/en/DOM/event.originalTarget">event.originalTarget</a></td>
      <td>
        {{ Source("/dom/public/idl/events/nsIDOMNSEvent.idl", "nsIDOMNSEvent.idl") }}
      </td>
      <td>
        {{ Non-standard_inline() }} La cible originale de l'évènement,
        avant tout reciblage. Voir
        <a
          href="/en-US/docs/XBL/XBL_1.0_Reference/Anonymous_Content#Event_Flow_and_Targeting"
          >Anonymous Content#Event_Flow_and_Targeting</a
        >
        pour plus de détails.
      </td>
    </tr>
  </tbody>
</table>

### Utilisation de `explicitOriginalTarget` et `originalTarget`

Problème : Seulement disponible dans un navigateur basé sur Mozilla ? Problème : Convient uniquement aux développeurs d'extensions ?

### Exemples

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Comparison of Event Targets</title>
    <style>
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
        .standard {
            background-color: #99ff99;
        }
        .non-standard {
            background-color: #902D37;
        }
    </style>
</head>
<body>
    <table>
    <thead>
        <tr>
            <td class="standard">Original target dispatching the event <small>event.target</small></td>
            <td class="standard">Target who's event listener is being processed <small>event.currentTarget</small></td>
            <td class="standard">Identify other element (if any) involved in the event <small>event.relatedTarget</small></td>
            <td class="non-standard">If there was a retargetting of the event for some reason <small> event.explicitOriginalTarget</small> contains the target before retargetting (never contains anonymous targets)</td>
            <td class="non-standard">If there was a retargetting of the event for some reason <small> event.originalTarget</small> contains the target before retargetting (may contain anonymous targets)</td>
        </tr>
    </thead>
    <tr>
        <td id="target"></td>
        <td id="currentTarget"></td>
        <td id="relatedTarget"></td>
        <td id="explicitOriginalTarget"></td>
        <td id="originalTarget"></td>
    </tr>
</table>
<p>Clicking on the text will show the difference between explicitOriginalTarget, originalTarget and target</p>
<script>
    function handleClicks(e) {
        document.getElementById('target').innerHTML = e.target;
        document.getElementById('currentTarget').innerHTML = e.currentTarget;
        document.getElementById('relatedTarget').innerHTML = e.relatedTarget;
        document.getElementById('explicitOriginalTarget').innerHTML = e.explicitOriginalTarget;
        document.getElementById('originalTarget').innerHTML = e.originalTarget;
    }

    function handleMouseover(e) {
        document.getElementById('target').innerHTML = e.target;
        document.getElementById('relatedTarget').innerHTML = e.relatedTarget;
    }

    document.addEventListener('click', handleClicks, false);
    document.addEventListener('mouseover', handleMouseover, false);
</script>
</body>
</html>
```

### Utilisation de `target` et `relatedTarget`

La propriété `relatedTarget` (_cible associée_) pour l'évènement `mouseover`  détient le noeud que la souris avait précédemment atteint. Pour l'évènement `mouseout`, il détient le noeud que la souris a déplacé à.

| Type d'évènement | [event.target](/en/DOM/event.target)                                             | [event.relatedTarget](/en/DOM/event.relatedTarget)                               |
| ---------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `mouseover`      | La EventTarget (_cible d'évènement_) entré par le périphérique de pointage.      | La EventTarget (_cible d'évènement_) dont le périphérique de pointage est sorti. |
| `mouseout`       | La EventTarget (_cible d'évènement_) dont le périphérique de pointage est sorti. | the EventTarget (_cible d'évènement_) entré par le périphérique de pointage.     |

Problème : A également besoin de descriptions sur les évènements `dragenter` et `dragexit`.

#### Exemple

    <hbox id="outer">
      <hbox id="inner"
            onmouseover="dump('mouseover ' + event.relatedTarget.id + ' > ' + event.target.id + '\n');"
            onmouseout="dump('mouseout  ' + event.target.id + ' > ' + event.relatedTarget.id + '\n');"
            style="margin: 100px; border: 10px solid black; width: 100px; height: 100px;" />
    </hbox>
