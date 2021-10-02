---
title: 'Element : évènement click'
slug: Web/API/Element/click_event
tags:
  - API
  - DOM
  - Element
  - Reference
  - click
translation_of: Web/API/Element/click_event
---
{{APIRef}}

L'évènement **`click`** est déclenché à partir d'un élément lorsqu'un bouton d'un dispositif de pointage (comme celui d'une souris par exemple) est pressé puis relaché lorsque le pointeur est sur l'élément.

<table class="properties">
  <tbody>
    <tr>
      <th>Se propage/remonte dans le DOM</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th>Annulable</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th>Interface</th>
      <td>{{domxref("MouseEvent")}}</td>
    </tr>
    <tr>
      <th>Propriété pour la gestion d'évènement</th>
      <td>
        {{domxref("GlobalEventHandlers.onclick", "onclick")}}
      </td>
    </tr>
  </tbody>
</table>

Si le bouton est pressé sur un élément et que le pointeur est déplacé sur un autre élément, l'évènement sera déclenché sur l'ancêtre le plus près qui contient les deux éléments.

`click` est déclenché après que les évènements {{event("mousedown")}} et {{event("mouseup")}} aient été déclenchés.

## Notes d'utilisation

L'objet {{domxref("MouseEvent")}}, passé au gestionnaire d'évènement (lorsque l'évènement est `click`) possède une propriété {{domxref("Event.detail", "detail")}} qui indique le nombre de fois où la cible ({{domxref("Event.target", "target")}}) a été cliquée. Autrement dit, `detail` vaudra 2 pour un double-clic, 3 pour un triple-clic et ainsi de suite. Le compteur est remis à zéro après un court intervalle (dont la durée spécifique peut varier entre les navigateurs, les plateformes et les préférences de l'utilisateur dont notamment les options d'accessibilité).

### Internet Explorer

Internet Explorer 8 & 9 souffrent d'un bug où les élméents avec une {{cssxref("background-color")}} calculée qui vaut [`transparent`](/fr/docs/Web/CSS/color_value#transparent_keyword) qui recouvrent d'autres éléments ne recevront pas d'évènements `click`. Les évènements `click` toucheront les éléments en dessous à la place.

Quelques méthodes de contournement pour ce bug :

- Pour IE9 :

  - Utiliser {{cssxref("background-color")}}`: rgba(0,0,0,0)`
  - Appliquer {{cssxref("opacity")}}`: 0` et une valeur explicite pour {{cssxref("background-color")}} qui ne soit pas [`transparent`](/fr/docs/Web/CSS/color_value#transparent_keyword)

- Pour IE8 et IE9 : appliquer `filter: alpha(opacity=0);` et une valeur explicite pour {{cssxref("background-color")}} qui ne soit pas [`transparent`](/fr/docs/Web/CSS/color_value#transparent_keyword)

### Safari Mobile

Safari Mobile 7.0+ (et antérieures) [souffre d'un bug](https://bugs.webkit.org/show_bug.cgi?id=153887) indiquant que les évènements `click` ne sont pas déclenchés sur les éléments qui ne sont généralement pas interactifs (ex. {{HTMLElement("div")}}) et qui n'ont pas de gestionnaire d'évènement directement attaché (on utilise la délégation d'évènement). Voir [la documentation de Safari sur le fait de rendre les éléments cliquables](https://developer.apple.com/library/safari/documentation/appleapplications/reference/safariwebcontent/HandlingEvents/HandlingEvents.html#//apple_ref/doc/uid/TP40006511-SW6) et [la définition d'un élément cliquable](https://developer.apple.com/library/safari/documentation/appleapplications/reference/safariwebcontent/HandlingEvents/HandlingEvents.html#//apple_ref/doc/uid/TP40006511-SW7).

Méthodes de contournement connues :

- Ajouter {{cssxref("cursor")}}`: pointer;` sur l'élément ou l'un des ancêtres.
- Ajouter un attribut `onclick="void(0)"` à l'élément ou à l'un des ancêtres (tant que ce n'est pas {{HTMLElement("body")}}).
- Utiliser un élément interactif (ex. {{HTMLElement("a")}}) plutôt qu'un élément généralement non-interactif (ex. {{HTMLElement("div")}}).
- Ne pas utiliser la délégation d'évènement pour `click`.

Safari Mobile considère que les éléments suivants sont interactifs (et ne souffrent donc pas de ce bug) :

- {{HTMLElement("a")}} (tant qu'il a un attribut `href`)
- {{HTMLElement("area")}} (tant qu'il a un attribut `href`)
- {{HTMLElement("button")}}
- {{HTMLElement("img")}}
- {{HTMLElement("input")}}
- {{HTMLElement("label")}} (tant qu'il est associé à un formulaire)
- {{HTMLElement("textarea")}}
- _Liste à compléter._

## Exemples

Dans cet exemple, on affiche le nombre de clics consécutifs sur un bouton HTML ({{HTMLElement("button")}}).

### HTML

```html
<button>Cliquer ici</button>
```

### JavaScript

```js
const button = document.querySelector('button');

button.addEventListener('click', event => {
  button.innerHTML = `Nombre de clics : ${event.detail}`;
});
```

### Résultat

Essayez de cliquer rapidement sur le bouton pour augmenter le nombre de clic. Après une pause, le compteur sera remis à zéro.

{{EmbedLiveSample("Exemples")}}

## Spécifications

| Spécification                                                                                            | État                             |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- |
| {{SpecName('UI Events', '#event-type-click')}}                                             | {{Spec2('UI Events')}}     |
| {{SpecName('DOM3 Events', '#event-type-click', 'click')}}                             | {{Spec2('DOM3 Events')}} |
| {{SpecName('DOM2 Events', '#Events-eventgroupings-mouseevents-h3', 'click')}} | {{Spec2('DOM2 Events')}} |

## Compatibilité des navigateurs

{{Compat("api.Element.click_event")}}

## Voir aussi

- [Une introduction aux évènements](/fr/docs/Apprendre/JavaScript/Building_blocks/Evènements)
- D'autres évènements connexes

  - [`mouseup`](/fr/docs/Web/API/Element/mouseup_event)
  - [`mousedown`](/fr/docs/Web/API/Element/mousedown_event)
  - [`mousemove`](/fr/docs/Web/API/Element/mousemove_event)
  - [`dblclick`](/fr/docs/Web/API/Element/dblclick_event)
  - [`mouseout`](/fr/docs/Web/API/Element/mouseout_event)
  - [`mouseover`](/fr/docs/Web/API/Element/mouseover_event)
  - [`mouseenter`](/fr/docs/Web/API/Element/mouseenter_event)
  - [`mouseleave`](/fr/docs/Web/API/Element/mouseleave_event)
  - [`contextmenu`](/fr/docs/Web/API/Element/contextmenu_event)
