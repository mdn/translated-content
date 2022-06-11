---
title: DOMContentLoaded
slug: Web/API/Window/DOMContentLoaded_event
translation_of: Web/API/Window/DOMContentLoaded_event
original_slug: Web/Events/DOMContentLoaded
---
{{APIRef}}

L’évènement **`DOMContentLoaded`** est émis lorsque le document HTML initial a été complètement chargé et analysé, sans attendre que les feuilles de style, images et sous-documents aient terminé de charger.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bouillonne</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">Annulable</th>
      <td>Oui (bien que spécifié comme évènement simple non annulable)</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">Propriété de gestion de l’évènement</th>
      <td>Aucune</td>
    </tr>
  </tbody>
</table>

La cible originale pour cet évènement est le {{domxref("Document")}} qui a terminé de charger. Vous pouvez observer cet évènement sur l’interface `Window` pour le gérer dans les phases de capture ou de bouillonnement. Pour plus de détails, veuillez consulter la page de l’évènement {{domxref("Document/DOMContentLoaded_event", "Document: DOMContentLoaded event")}}.

L'évènement [`load`](/fr/docs/Web/API/Window/load_event), très différent, doit être utilisé uniquement pour détecter qu'une page est entièrement chargée. C'est une erreur répandue d'utiliser [`load`](/fr/docs/Web/API/Window/load_event) là où `DOMContentLoaded` serait beaucoup plus approprié.

> **Note :** Le JavaScript synchrone interromp l’analyse du DOM.

> **Note :** Il existe également de nombreuses bibliothèques indépendantes à usage général qui offrent des méthodes multi-navigateur pour détecter quand le DOM est prêt.

## Accélérer

Si vous voulez que le DOM soit analysé aussi rapidement que possible après que l’utilisateur ou l’utilisatrice a demandé la page, vous pouvez [rendre votre JavaScript asynchrone](/fr/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests) et [optimiser le chargement des feuilles de style](https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery). Ces dernières, sans optimisation, ralentissent le chargement de la page parce qu’elles sont chargées en parallèle, et «&nbsp;subtilisent&nbsp;» de la bande passante au document html principal.

## Exemples

### Utilisation basique

```js
window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM entièrement chargé et analysé");
  });
```

## Spécifications

| Spécification                                                                            | Statut                           |
| ---------------------------------------------------------------------------------------- | -------------------------------- |
| {{SpecName('HTML WHATWG', 'indices.html#event-domcontentloaded')}} | {{Spec2('HTML WHATWG')}} |

## Compatibilité des navigateurs

{{Compat("api.Window.DOMContentLoaded_event")}}

## Voir aussi

- Évènements associés&nbsp;: {{event("load")}}, {{event("readystatechange")}}, {{event("beforeunload")}}, {{event("unload")}}
- Cet évènement sur les cibles {{domxref("Document")}}&nbsp;: {{domxref("Document/DOMContentLoaded_event", "Document: DOMContentLoaded event")}}
