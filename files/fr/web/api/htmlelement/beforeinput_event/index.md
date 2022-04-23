---
title: 'HTMLElement: beforeinput event'
slug: Web/API/HTMLElement/beforeinput_event
translation_of: Web/API/HTMLElement/beforeinput_event
---
{{APIRef}} {{SeeCompatTable}}

L’évènement DOM **`beforeinput`** est émis quand la valeur d’un élément {{HTMLElement("input")}}, {{HTMLElement("select")}}, ou {{HTMLElement("textarea")}} est sur le point d’être modifié. L’évènement s’applique également aux éléments ayant l’attribut {{domxref("HTMLElement.contentEditable", "contenteditable")}} actif, et à tout élément quand le {{domxref("Document.designMode", "designMode")}} est activé.

Dans le cas de `contenteditable` et `designMode`, la cible de l’évènement est _l’hôte d’édition._ Si ces propriétés s’appliquent à plusieurs éléments, l’hôte d’édition est le plus proche ancêtre dont le parent n’est pas éditable.

<table class="properties">
  <tbody>
    <tr>
      <th>Bouillonne</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th>Annulable</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th>Interface</th>
      <td>{{DOMxRef("InputEvent")}}</td>
    </tr>
    <tr>
      <th>Propriété gestionnaire d’évènement</th>
      <td>Aucune</td>
    </tr>
    <tr>
      <th>Sync / Async</th>
      <td>Sync</td>
    </tr>
    <tr>
      <th>Composé</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th>Action par défaut</th>
      <td>Mettre à jour l’élément DOM</td>
    </tr>
  </tbody>
</table>

## Exemples

Cet exemple affiche la valeur de l’élément {{HtmlElement("input")}} juste avant qu’elle soit modifiée.

### HTML

```html
<input placeholder="Saisissez du texte" name="name"/>
<p id="values"></p>
```

### JavaScript

```js
const input = document.querySelector('input');
const log = document.getElementById('values');

input.addEventListener('beforeinput', updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

| Spécification                                                                                    | Statut                       |
| ------------------------------------------------------------------------------------------------ | ---------------------------- |
| {{SpecName('UI Events', "#event-type-beforeinput", "beforeinput event")}} | {{Spec2('UI Events')}} |

## Compatibilité des navigateurs

{{Compat("api.HTMLElement.beforeinput_event")}}

## Voir aussi

- Évènement associé&nbsp;: [`input`](/en-US/docs/Web/API/HTMLElement/input_event)
