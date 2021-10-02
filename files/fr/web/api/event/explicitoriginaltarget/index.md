---
title: Event.explicitOriginalTarget
slug: Web/API/Event/explicitOriginalTarget
tags:
  - API
  - DOM
  - Gecko
  - Non-standard
  - Propriété
  - Reference
translation_of: Web/API/Event/explicitOriginalTarget
---
{{ApiRef("DOM")}}{{Non-standard_header}}

Cette propriété représente la cible originale de l'évènement. Elle est spécifique à Mozilla.

Si l'évènement a été déporté pour une autre raison qu'une traverséee de frontière anonyme, cette propriété correspondra à la cible avant la déportation de l'évènement. Par exemples, les évènements de la souris sont déportés vers leur nœud parent lorsqu'ils se produisent sur des nœuds texte (cf. {{Bug(185889)}}). Dans ce cas [`currentTarget`](/fr/docs/Web/API/Event/currentTarget) pointera vers le parent et `explicitOriginalTarget` vers le nœud texte.

À la différence de [`originalTarget`](/fr/docs/Web/API/Event/originalTarget), `explicitOriginalTarget` ne contiendra jamais de contenu anonyme.

Voir aussi une [comparaison des cibles pour les évènements](/fr/docs/DOM/event/Comparison_of_Event_Targets).

## Exemples

Cette propriété peut être utiliséee avec `<command>` afin d'obtenir les détails de l'évènement de l'objet qui a invoqué la commande.

### HTML

```html
<command id="my-cmd-anAction"
         oncommand="myCommand(event);"/>
<menulist>
  <menupopup>
    <menuitem label="Get my element name!"
              command="my-cmd-anAction"/>
  </menupopup>
</menulist>
```

### JavaScript

```js
function myCommand(ev) {
  console.log(ev.explicitOriginalTarget.nodeName);
  // affichera 'menuitem'
}
```

## Spécifications

Cette propriété est spécifique à Mozilla. Elle est définie dans l'IDL {{Source("/dom/public/idl/events/nsIDOMNSEvent.idl")}}

Cette propriété **n'est pas définie** dans la spécification [DOM Level 2 Events](https://www.w3.org/TR/DOM-Level-2-Events/events.html)
