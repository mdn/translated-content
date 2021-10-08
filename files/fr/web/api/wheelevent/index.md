---
title: WheelEvent
slug: Web/API/WheelEvent
tags:
  - API
  - DOM
  - Interface
  - Reference
  - WheelEvent
translation_of: Web/API/WheelEvent
---
{{APIRef("DOM Events")}}

L'interface **`WheelEvent`** représente les évènements qui se produisent lorsque l'utilisateur déplace la molette de la souris ou un périphérique d'entrée similaire.

> **Attention :** Il s'agit de l'interface d'évènement de roue standard à utiliser. Les anciennes versions des navigateurs implémentaient les interfaces {{DOMxRef("MouseWheelEvent")}} et {{DOMxRef("MouseScrollEvent")}} non standard et non compatibles avec plusierus navigateurs. Utilisez cette interface et évitez les non standard.

> **Note :** Ne confondez pas l'évènement {{domxref("Element/wheel_event", "wheel")}} avec l'énénement {{domxref("Element/scroll_event", "scroll")}} : L'action par défaut d'un évènement `wheel` est définie par l'implantation. Ainsi, un évènement `wheel` ne distribue pas nécessairement un évènement `scroll`. Même lorsque c'est le cas, cela ne signifie pas que les valeurs `delta*` dans l'évènement `wheel` reflètent nécessairement la direction de défilement du contenu. Par conséquent, ne comptez pas sur les propriétés `delta*` pour obtenir la direction de défilement du contenu. Au lieu de cela, détectez les changements de valeurs de {{DOMxRef("Element.scrollLeft", "scrollLeft")}} et {{DOMxRef("Element.scrollTop", "scrollTop")}} de la cible dans l'évènement `scroll`.

{{InheritanceDiagram}}

## Constructeur

- {{DOMxRef("WheelEvent.WheelEvent", "WheelEvent()")}}
  - : Crée un objet `WheelEvent`.

## Propriétés

_Cette interface hérite des propriétés de ses ancêtres, {{DOMxRef("MouseEvent")}}, {{DOMxRef("UIEvent")}}, et {{DOMxRef("Event")}}._

- {{DOMxRef("WheelEvent.deltaX")}}{{ReadOnlyInline}}
  - : Renvoie un `double` représentant le montant du défilement horizontal.
- {{DOMxRef("WheelEvent.deltaY")}}{{ReadOnlyInline}}
  - : Renvoie un `double` représentant le montant du défilement vertical.
- {{DOMxRef("WheelEvent.deltaZ")}}{{ReadOnlyInline}}
  - : Renvoie un `double` représentant le montant du défilement pour l'axe z.
- {{DOMxRef("WheelEvent.deltaMode")}}{{ReadOnlyInline}}

  - : Revnoie un `unsigned long` représentant l'unité du montant de défilement des valeurs `delta*`. Les valeurs autorisées sont :

    <table class="standard-table">
      <thead>
        <tr>
          <td class="header">Constant</td>
          <td class="header">Valeur</td>
          <td class="header">Description</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>WheelEvent.DOM_DELTA_PIXEL</code></td>
          <td><code>0x00</code></td>
          <td>Les valeurs <code>delta*</code> sont spécifiées en pixels.</td>
        </tr>
        <tr>
          <td><code>WheelEvent.DOM_DELTA_LINE</code></td>
          <td><code>0x01</code></td>
          <td>Les valeurs <code>delta*</code> sont spécifiées en lignes.</td>
        </tr>
        <tr>
          <td><code>WheelEvent.DOM_DELTA_PAGE</code></td>
          <td><code>0x02</code></td>
          <td>Les valeurs <code>delta*</code> sont spécifiées dans les pages.</td>
        </tr>
      </tbody>
    </table>

## Méthodes

_Cette interface ne définit aucune méthode spécifique, mais hérite des méthodes de ses ancêtres, {{DOMxRef("MouseEvent")}}, {{DOMxRef("UIEvent")}}, et {{DOMxRef("Event")}}._

## Spécifications

| Spécification                                                                                                            | Statut                           | Commentaire          |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | -------------------- |
| {{SpecName("UI Events", "#interface-wheelevent", "The <code>WheelEvent</code> interface")}} | {{Spec2("UI Events")}}     |                      |
| {{SpecName('DOM3 Events', '#interface-wheelevent', 'WheelEvent')}}                                 | {{Spec2('DOM3 Events')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.WheelEvent")}}

## Voir aussi

- Évènement {{domxref("Element/wheel_event", "wheel")}}
- Interfaces remplacées par celle-ci :

  - Objet d'évènement de roulette de souris hérité de Gecko: {{DOMxRef("MouseScrollEvent")}}
  - Objet d'évènement de roulette de souris hérité des navigateurs non gecko: {{DOMxRef("MouseWheelEvent")}}
