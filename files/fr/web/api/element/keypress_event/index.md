---
title: keypress
slug: Web/API/Element/keypress_event
translation_of: Web/API/Document/keypress_event
original_slug: Web/API/Document/keypress_event
---
{{APIRef}} {{deprecated_header}}

L'évènement **`keypress`** est déclenché lorsqu'une touche produisant un caractère est pressée. Cela concerne les touches qui produisent des caractères alphabétiques, des caractères numériques et des signes de ponctuations. Les touches <kbd>Alt</kbd>, <kbd>Shift</kbd>, <kbd>Ctrl</kbd> ou <kbd>Meta</kbd> ne sont pas concernées.

> **Attention :** Cet évènement est déprécié et il faudrait plutôt utiliser [`beforeinput`](/fr/docs/Web/API/HTMLElement/beforeinput_event) ou [`keydown`](/fr/docs/Web/API/Document/keydown_event).

<table class="properties">
  <thead></thead>
  <tbody>
    <tr>
      <th>Interface</th>
      <td>{{domxref("KeyboardEvent")}}</td>
    </tr>
    <tr>
      <th>Remonte sur les parents (<em>bubbles</em>)</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th>Annulable</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th>Action par défaut</th>
      <td>
        Cela peut varier : évènement <code>keypress</code> ; ouverture du
        système de composition du texte ; évènements
        <code><a href="/fr/docs/Web/API/Element/blur_event">blur</a></code> et
        <code><a href="/fr/docs/Web/API/Element/focus_event">focus</a></code> ;
        évènement
        <a href="/fr/docs/Web/API/Element/DOMActivate_event"
          ><code>DOMActivate</code> </a
        >{{deprecated_inline}}; autre évènement.
      </td>
    </tr>
  </tbody>
</table>

## Exemples

### Ajout d'un `addEventListener`

Dans cet exemple, on affiche la valeur de {{domxref("KeyboardEvent.code")}} lorsqu'on appuie sur une touche :

```html
<p>
   Cliquez dans l'iframe pour lui passer le focus
   puis appuyez sur des touches du clavier.
</p>
<p id="log"></p>
```

```js
const log = document.getElementById('log');

document.addEventListener('keypress', logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}
```

{{EmbedLiveSample("Exemples")}}

### Équivalent `onkeypress`

```js
document.onkeypress = logKey;
```

## Spécifications

| Spécification                                                    | État                         |
| ---------------------------------------------------------------- | ---------------------------- |
| {{SpecName('UI Events', '#event-type-keypress')}} | {{Spec2('UI Events')}} |

## Compatibilité des navigateurs

{{Compat("api.Document.keypress_event")}}

## Voir aussi

- {{domxref("GlobalEventHandlers.onkeypress")}}
- L'interface {{domxref("Element")}} que cet évènement cible
- Les évènements associés :

  - [`keydown`](/fr/docs/Web/API/Document/keydown_event)
  - [`keyup`](/fr/docs/Web/API/Document/keyup_event)
  - [`beforeinput`](/fr/docs/Web/API/HTMLElement/beforeinput_event)
