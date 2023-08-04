---
title: "Document: évènement transitionend"
slug: Web/API/Element/transitionend_event
---

{{APIRef}}

L'évènement **`transitionend`** est émis quand une [transition CSS](/fr/docs/Web/CSS/CSS_Transitions/Utiliser_transitions_CSS) a terminé. Dans le cas où une transition est supprimée avant d'avoir terminé, comme lorsqu'une {{cssxref("transition-property")}} est supprimée ou lorsque {{cssxref("display")}} reçoit la valeur `none`, l'évènement n'est pas généré.

<table class="properties">
  <tbody>
    <tr>
      <th>Bouillonne</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th>Est annulable</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th>Interface</th>
      <td>{{domxref("TransitionEvent")}}</td>
    </tr>
    <tr>
      <th>Propriété gestionnaire d'évènement</th>
      <td>
        <code
          ><a href="/fr/docs/Web/API/GlobalEventHandlers/ontransitionend"
            >ontransitionend</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

L'évènement `transitionend` est émis dans les deux directions&nbsp;: quand la transition se termine vers l'état modifié, et quand elle est complètement retournée à l'état par défaut ou non modifié. S'il n'y a pas de délai ou de durée de transition, si les deux sont 0 s ou ne sont pas déclarés, il n'y a pas de transition, et aucun évènement de transition n'est émis. Si l'évènement `transitioncancel` est émis, l'évènement `transitionend` ne se produira pas.

La cible originale pour cet évènement est l'[`Element`](/fr/docs/Web/API/Element) sur lequel la transition est appliquée. Vous pouvez écouter cet évènement sur l'interface `Window` pour le gérer durant les phases de capture ou de bouillonnement. Pour plus de détails sur cet évènement, veuillez consulter la page [HTMLElement: transitionend](/fr/docs/Web/Events/transitionend).

## Exemples

Le code suivant ajoute un gestionnaire sur l'évènement `transitionend`&nbsp;:

```js
document.addEventListener("transitionend", () => {
  console.log("Transition terminée");
});
```

La même chose, mais en utilisant la propriété [`ontransitionend`](/fr/docs/Web/API/GlobalEventHandlers/ontransitionend) au lieu de `addEventListener()`&nbsp;:

```js
document.ontransitionend = () => {
  console.log("Transition terminée");
};
```

[Voir un exemple en direct sur cet évènement.](/fr/docs/Web/API/HTMLElement/transitionend_event#Live_example)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le gestionnaire d'évènement {{domxref("GlobalEventHandlers.ontransitionend")}}
- L'interface {{domxref("TransitionEvent")}}
- Les propriétés CSS&nbsp;: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}
- Des évènements associés&nbsp;: [`transitionrun`](/fr/docs/Web/API/Document/transitionrun_event), [`transitionstart`](/fr/docs/Web/API/Document/transitionstart_event), [`transitioncancel`](/fr/docs/Web/API/Document/transitioncancel_event)
- Cet évènement sur les cibles [`HTMLElement`](/fr/docs/Web/API/HTMLElement)&nbsp;: [`transitionend`](/fr/docs/Web/API/HTMLElement/transitionend_event)
- Cet évènement sur les cibles [`Window`](/fr/docs/Web/API/Window)&nbsp;: [`transitionend`](/fr/docs/Web/API/Window/transitionend_event)
