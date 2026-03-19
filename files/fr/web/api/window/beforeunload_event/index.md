---
title: "Window : évènement beforeunload"
short-title: beforeunload
slug: Web/API/Window/beforeunload_event
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef}}

L'évènement **`beforeunload`** de l'interface {{DOMxRef("Window")}} est déclenché lorsque la fenêtre actuelle, le document contenu et les ressources associées sont sur le point d'être déchargés. Le document est encore visible et l'évènement est encore annulable à ce stade.

L'utilisation principale de cet évènement est de déclencher une boîte de dialogue de confirmation générée par le navigateur, qui demande aux utilisateur·ice·s de confirmer s'ils souhaitent vraiment quitter la page lorsqu'ils essaient de la fermer, de la recharger ou de naviguer ailleurs. Cela vise à aider à prévenir la perte de données non enregistrées.

La boîte de dialogue peut être déclenchée de la façon suivante&nbsp;:

- En appelant la méthode {{DOMxRef("Event.preventDefault()", "preventDefault()")}} de l'objet évènement.
- En définissant la propriété {{DOMxRef("BeforeUnloadEvent.returnValue", "returnValue")}} de l'objet évènement sur une chaîne de caractères non vide ou toute valeur équivalente à vrai.
- En retournant toute valeur équivalente à vrai depuis la fonction gestionnaire d'évènement, par exemple&nbsp;: `return "chaîne de caractères"`. Notez que cela ne fonctionne que lorsque la fonction est attachée via la propriété `onbeforeunload`, et non la méthode {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}. Ce comportement est cohérent dans les versions modernes de Firefox, Safari et Chrome.

Les deux derniers mécanismes sont des fonctionnalités héritées&nbsp;; la bonne pratique consiste à déclencher la boîte de dialogue en appelant `preventDefault()` sur l'objet évènement, tout en définissant également `returnValue` pour prendre en charge les cas hérités.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènements.

```js-nolint
addEventListener("beforeunload", (event) => { })

onbeforeunload = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("BeforeUnloadEvent")}}. Hérite de {{DOMxRef("Event")}}.

## Notes d'utilisation

Pour déclencher l'affichage de la boîte de dialogue lorsque l'utilisateur·ice ferme ou navigue dans l'onglet, une fonction gestionnaire d'évènement `beforeunload` doit appeler {{DOMxRef("Event.preventDefault()", "preventDefault()")}} sur l'objet évènement. Vous devez noter que les implémentations modernes&nbsp;:

- Exigent une [activation persistante](/fr/docs/Glossary/Sticky_activation) pour que la boîte de dialogue soit affichée. Autrement dit, le navigateur n'affichera la boîte de dialogue que si le cadre ou tout cadre intégré reçoit un geste ou une interaction de l'utilisateur·ice. Si l'utilisateur·ice n'a jamais interagi avec la page, il n'y a pas de données utilisateur à sauvegarder, donc aucun cas légitime pour la boîte de dialogue.
- N'affichent qu'une chaîne générique définie par le navigateur dans la boîte de dialogue affichée. Cela ne peut pas être contrôlé par le code de la page web.

L'évènement `beforeunload` présente certains problèmes&nbsp;:

- Il n'est pas déclenché de façon fiable, notamment sur les plateformes mobiles. Par exemple, l'évènement `beforeunload` n'est pas déclenché du tout dans le scénario suivant&nbsp;:
  1. Un·e utilisateur·ice mobile visite votre page.
  2. L'utilisateur·ice passe ensuite à une autre application.
  3. Plus tard, l'utilisateur·ice ferme le navigateur depuis le gestionnaire d'applications.

  > [!NOTE]
  > Il est recommandé d'utiliser l'évènement {{DOMxRef("Document.visibilitychange_event", "visibilitychange")}} comme signal plus fiable pour la sauvegarde automatique de l'état de l'application, afin de contourner des problèmes comme ceux ci-dessus. Voir [Ne perdez pas l'état utilisateur et application, utilisez la visibilité de page <sup>(angl.)</sup>](https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/) pour plus de détails.

- Dans Firefox, `beforeunload` n'est pas compatible avec le [cache arrière/avant <sup>(angl.)</sup>](https://web.dev/articles/bfcache) (bfcache)&nbsp;: c'est-à-dire que Firefox ne placera pas les pages dans le bfcache si elles ont des écouteurs `beforeunload`, ce qui est mauvais pour les performances.

Il est donc recommandé que les développeur·euse·s n'écoutent `beforeunload` que lorsque les utilisateur·ice·s ont des modifications non enregistrées afin que la boîte de dialogue mentionnée ci-dessus puisse être utilisée pour les avertir d'une perte de données imminente, et de retirer l'écouteur lorsque ce n'est pas nécessaire. Écouter `beforeunload` avec parcimonie peut minimiser l'impact sur les performances.

## Alias du gestionnaire d'évènement

En plus de l'interface `Window`, la propriété de gestionnaire d'évènement `onbeforeunload` est également disponible sur les cibles suivantes&nbsp;:

- {{DOMxRef("HTMLBodyElement")}}
- {{DOMxRef("HTMLFrameSetElement")}}
- {{DOMxRef("SVGSVGElement")}}

## Exemples

Dans l'exemple suivant, nous avons un champ de texte HTML {{HTMLElement("input")}} pour représenter des données qui pourraient être modifiées et nécessiter une sauvegarde&nbsp;:

```html
<form>
  <input type="text" name="nom" id="nom" />
</form>
```

Notre JavaScript attache un écouteur d'évènement {{DOMxRef("Element/input_event", "input")}} à l'élément `<input>` qui écoute les changements de la valeur saisie. Lorsque la valeur est mise à jour avec une valeur non vide, un écouteur d'évènement `beforeunload` est attaché à l'objet {{DOMxRef("Window")}}.

Si la valeur redevient une chaîne de caractères vide (c'est-à-dire que la valeur est supprimée), l'écouteur d'évènement `beforeunload` est à nouveau retiré — comme mentionné plus haut dans les [notes d'utilisation](#notes_dutilisation), l'écouteur doit être retiré lorsqu'il n'y a pas de données non enregistrées à signaler.

La fonction gestionnaire d'évènement `beforeunload` invoque `event.preventDefault()` pour déclencher la boîte de dialogue d'avertissement lorsque l'utilisateur·ice ferme ou navigue dans l'onglet. Nous avons également inclus `event.returnValue = true` dans la fonction gestionnaire afin que les navigateurs qui ne prennent pas en charge le mécanisme `event.preventDefault()` exécutent tout de même correctement la démonstration.

```js
const gestionAvantDechargement = (event) => {
  // Recommandé
  event.preventDefault();

  // Inclus pour la compatibilité avec les anciennes versions, par exemple Chrome/Edge < 119
  event.returnValue = true;
};

const nomEntree = document.querySelector("#nom");

nomEntree.addEventListener("input", (event) => {
  if (event.target.value !== "") {
    window.addEventListener("beforeunload", gestionAvantDechargement);
  } else {
    window.removeEventListener("beforeunload", gestionAvantDechargement);
  }
});
```

Lorsque la valeur de l'élément `<input>` n'est pas vide, si vous essayez de fermer, de naviguer ou de recharger la page, le navigateur affiche la boîte de dialogue d'avertissement. Essayez-le&nbsp;:

{{EmbedLiveSample("Exemples", "100%", 50)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("BeforeUnloadEvent")}}
- Évènements associés&nbsp;:
  - {{DOMxRef("Document/DOMContentLoaded_event", "DOMContentLoaded")}}
  - {{DOMxRef("Document/readystatechange_event", "readystatechange")}}
  - {{DOMxRef("Window/load_event", "load")}}
  - {{DOMxRef("Window/unload_event", "unload")}}
- [L'API Page Lifecycle <sup>(angl.)</sup>](https://developer.chrome.com/docs/web-platform/page-lifecycle-api#developer-recommendations-for-each-state) fournit des conseils plus utiles sur la gestion du comportement du cycle de vie des pages dans vos applications web.
