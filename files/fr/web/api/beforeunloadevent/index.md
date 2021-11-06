---
title: BeforeUnloadEvent
slug: Web/API/BeforeUnloadEvent
tags:
  - API
  - Reference
translation_of: Web/API/BeforeUnloadEvent
---
{{APIRef}}

L'évènement **`beforeunload`** est déclenché quand la fenêtre, le document et ses ressources sont sur le point d'être déchargées.

Si une chaine non vide est assignée à la propriété `returnValue` de l'évènement, une boite de confirmation apparait pour demander à l'utilisateur de valider le changement d'adresse (voir les exemples ci-dessous). Si aucune valeur n'est fournise, l'évènement est traité silencieusement. Certaines implantations ne demandent confirmation que si le cadre ou tout cadre embarqué reçoit une action utilisateur. Voir {{anch("Browser compatibility")}} pour plus d'informations.

{{InheritanceDiagram(600, 120)}}

<table class="properties">
  <tbody>
    <tr>
      <td><strong>Bouillonne</strong></td>
      <td>No</td>
    </tr>
    <tr>
      <td><strong>Annulable</strong></td>
      <td>Yes</td>
    </tr>
    <tr>
      <td><strong>Cibles</strong></td>
      <td>defaultView</td>
    </tr>
    <tr>
      <td><strong>Interface</strong></td>
      <td>{{domxref("Event")}}</td>
    </tr>
  </tbody>
</table>

## Exemples

```js
window.addEventListener("beforeunload", function(event) {
  event.returnValue = "\o/";
});

// est équivalent à
window.addEventListener("beforeunload", function(event) {
  event.preventDefault();
});
```

Les navigateurs basés sur WebKit ne suivent pas la spécification concernant la demande de confirmation. Un exemple similaire fonctionnant sur presque tous les navigateurs serait plutôt comme :

```js
window.addEventListener("beforeunload", function (e) {
  var confirmationMessage = "\o/";

  (e || window.event).returnValue = confirmationMessage;     // Gecko + IE
  return confirmationMessage;                                /* Safari, Chrome, and other
                                                              * WebKit-derived browsers */
});
```

## Spécifications

| Spécification                                                                                                                                | État                             | Commentaire         |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------- |
| {{SpecName("HTML WHATWG", "browsing-the-web.html#the-beforeunloadevent-interface", "BeforeUnloadEvent")}} | {{Spec2("HTML WHATWG")}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("api.BeforeUnloadEvent")}}

## Voir aussi

- {{Event("DOMContentLoaded")}}
- {{Event("readystatechange")}}
- {{Event("load")}}
- {{Event("beforeunload")}}
- {{Event("unload")}}
- [Unloading Documents — Prompt to unload a document](http://www.whatwg.org/specs/web-apps/current-work/#prompt-to-unload-a-document)
