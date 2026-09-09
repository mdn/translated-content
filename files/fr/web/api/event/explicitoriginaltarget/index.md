---
title: "Event : propriété explicitOriginalTarget"
short-title: explicitOriginalTarget
slug: Web/API/Event/explicitOriginalTarget
l10n:
  sourceCommit: c20c12fab32381b983b4148d712fda227d34e2bd
---

{{APIRef("DOM")}}{{Non-standard_Header}}{{AvailableInWorkers}}

La propriété en lecture seule **`explicitOriginalTarget`** de l'interface {{DOMxRef("Event")}} retourne la cible originale, non-anonyme, de l'évènement.

Si l'évènement a été re-ciblé pour une autre raison que le franchissement de limites anonyme, cette propriété est définie avec la cible avant le re-ciblage.

Par exemple, les évènements de souris sont re-ciblés sur les nœuds parent lorsqu'ils se produisent sur des nœuds texte (voir [le bogue Firefox 185889](https://bugzilla.mozilla.org/show_bug.cgi?id=185889)), et, dans ce cas, {{DOMxRef("Event/currentTarget", "currentTarget")}} affiche le parent tandis que cette propriété affiche le nœud texte.

Cette propriété diffère également de {{DOMxRef("Event/originalTarget", "originalTarget")}}, car elle ne contient jamais de contenu anonyme.

## Valeur

Retourne l'objet {{DOMxRef("EventTarget")}} ou `null` s'il n'y en a pas.

## Exemples

Cette propriété peut être utilisée avec `<command>` pour obtenir les détails de l'évènement de l'objet original appelant la commande.

```js
function maCommande(ev) {
  alert(ev.explicitOriginalTarget.nodeName); // retourne 'menuitem'
}
```

```xml
<xul:command id="my-cmd-anAction" oncommand="maCommande(event);"/>

<xul:menulist>
  <xul:menupopup>
    <xul:menuitem label="Obtenir le nom de mon élément !" command="my-cmd-anAction"/>
  </xul:menupopup>
</xul:menulist>
```

## Spécifications

_Il s'agit d'une propriété propre à Mozilla qui ne fait partie d'aucune spécification actuelle. Elle n'est pas en passe de devenir une norme._

## Compatibilité des navigateurs

{{Compat}}
