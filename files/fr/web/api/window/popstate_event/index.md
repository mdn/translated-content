---
title: "Window : évènement popstate"
short-title: popstate
slug: Web/API/Window/popstate_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("History API")}}

L'évènement **`popstate`** de l'interface {{DOMxRef("Window")}} est déclenché lorsque l'entrée d'historique active change pendant que l'utilisateur·ice navigue dans l'historique de session. Cela remplace l'entrée d'historique courante par celle de la dernière page visitée par l'utilisateur·ice ou, si {{DOMxRef("history.pushState()")}} a été utilisé pour ajouter une entrée à la pile d'historique, cette entrée est utilisée à la place.

## Syntaxe

Utiliser le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définir une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("popstate", (event) => { })

onpopstate = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("PopStateEvent")}}. Hérite de {{DOMxRef("Event")}}.

{{InheritanceDiagram("PopStateEvent")}}

## Propriétés d'évènement

- {{DOMxRef("PopStateEvent.state")}} {{ReadOnlyInline}}
  - : Retourne une copie des informations qui ont été fournies à `pushState()` ou `replaceState()`.

## Alias du gestionnaire d'évènement

En plus de l'interface `Window`, la propriété de gestionnaire d'évènement `onpopstate` est également disponible sur les éléments suivants&nbsp;:

- {{DOMxRef("HTMLBodyElement")}}
- {{DOMxRef("HTMLFrameSetElement")}}
- {{DOMxRef("SVGSVGElement")}}

## La pile d'historique

Si l'entrée d'historique activée a été créée par un appel à {{DOMxRef("history.pushState()")}} ou a été modifiée par un appel à {{DOMxRef("history.replaceState()")}}, la propriété `state` de l'évènement `popstate` contient une copie de l'objet d'état de cette entrée d'historique.

Ces méthodes et leurs évènements associés peuvent être utilisés pour ajouter des données à la pile d'historique, ce qui permet de reconstruire une page générée dynamiquement, ou de modifier l'état du contenu affiché tout en restant sur le même {{DOMxRef("Document")}}.

Notez que le simple fait d'appeler `history.pushState()` ou `history.replaceState()` n'exécutera pas l'évènement `popstate`. L'évènement `popstate` sera exécuté lors d'une action du navigateur telle qu'un clic sur le bouton de retour ou d'avance (ou un appel à `history.back()` ou `history.forward()` en JavaScript).

Les navigateurs ont tendance à gérer l'évènement `popstate` différemment lors du chargement de la page. Chrome (avant la v34) et Safari émettent toujours un évènement `popstate` lors du chargement de la page, contrairement à Firefox.

> [!NOTE]
> Lors de l'écriture de fonctions qui traitent l'évènement `popstate`, il est important de prendre en compte que des propriétés comme `window.location` reflèteront déjà le changement d'état (si cela a modifié l'URL courante), mais que `document` pourrait ne pas encore l'être. Si le but est d'intervenir au moment où le nouvel état du document est déjà totalement en place, il convient d'utiliser un appel à la méthode {{DOMxRef("Window.setTimeout", "setTimeout()")}} avec un délai nul pour placer effectivement la fonction _callback_ de traitement à la fin de la boucle d'évènements du navigateur&nbsp;: `window.onpopstate = () => setTimeout(doSomeThing, 0);`

## Quand l'évènement `popstate` est-il envoyé ?

Il est important de comprendre d'abord que — pour lutter contre les fenêtres intempestives — les navigateurs peuvent ne pas déclencher l'évènement `popstate` tant que la page n'a pas été manipulée par l'utilisateur·ice.

Cette section décrit les étapes suivies par les navigateurs dans les cas où ils peuvent effectivement déclencher l'évènement `popstate` (c'est-à-dire dans les cas où la page a été manipulée).

Lorsqu'une navigation se produit — soit parce que l'utilisateur·ice active le bouton <kbd>Retour arrière</kbd> du navigateur, soit autrement — l'évènement `popstate` intervient presque à la fin du processus de navigation vers la nouvelle destination. Cela se produit après que la nouvelle destination a été chargée (si besoin), affichée, rendue visible, etc. — après l'envoi de l'évènement {{DOMxRef("Window/pageshow_event", "pageshow")}}, mais avant la restauration des informations d'état utilisateur persistées et l'envoi de l'évènement {{DOMxRef("Window/hashchange_event", "hashchange")}}.

Pour mieux comprendre quand l'évènement `popstate` est déclenché, considérez cette séquence simplifiée d'évènements qui se produit lorsque l'entrée d'historique courante change, soit parce que l'utilisateur·ice navigue sur le site, soit parce que l'historique est parcouru par programmation. Ici, la transition consiste à remplacer l'entrée d'historique courante par une que nous appellerons **nouvelle-entrée**. L'entrée de la pile d'historique de session de la page courante sera appelée l'**entrée-courante**.

1. Si **nouvelle-entrée** ne contient pas encore de {{DOMxRef("Document")}} existant, récupérer le contenu et créer son `Document` avant de continuer. Cela enverra finalement des évènements comme {{DOMxRef("Document/DOMContentLoaded_event", "DOMContentLoaded")}} et {{DOMxRef("Window/load_event", "load")}} à la {{DOMxRef("Window")}} contenant le document, mais les étapes suivantes continueront à s'exécuter entre-temps.
2. Si le titre de l'**entrée-courante** n'a pas été défini à l'aide d'une des méthodes de l'API History ({{DOMxRef("History.pushState", "pushState()")}} ou {{DOMxRef("History.replaceState", "replaceState()")}}), définir le titre de l'entrée sur la chaîne retournée par son attribut {{DOMxRef("document.title")}}.
3. Si le navigateur souhaite stocker des informations d'état avec l'**entrée-courante** avant de la quitter, il le fait à ce moment-là. L'entrée est alors considérée comme ayant un «&nbsp;état utilisateur persistant&nbsp;». Ces informations que le navigateur peut ajouter à l'entrée de session d'historique peuvent inclure, par exemple, la position de défilement du document, les valeurs des champs de formulaire, et d'autres données similaires.
4. Si **nouvelle-entrée** possède un objet `Document` différent de l'**entrée-courante**, le contexte de navigation est mis à jour de sorte que sa propriété {{DOMxRef("Window.document", "document")}} fasse référence au document de **nouvelle-entrée**, et le nom du contexte est mis à jour pour correspondre à celui du document désormais courant.
5. Chaque contrôle de formulaire dans le {{DOMxRef("Document")}} de **nouvelle-entrée** dont l'attribut [`autocomplete`](/fr/docs/Web/HTML/Reference/Elements/input#autocomplete) est configuré avec le nom de champ de remplissage automatique à `off` est réinitialisé. Voir [L'attribut HTML de remplissage automatique](/fr/docs/Web/HTML/Reference/Attributes/autocomplete) pour en savoir plus sur les noms de champs de remplissage automatique et leur fonctionnement.
6. Si le document de **nouvelle-entrée** est déjà complètement chargé et prêt — c'est-à-dire que son {{DOMxRef("Document.readyState", "readyState")}} est à `complete` — et que le document n'est pas encore visible, il est rendu visible et l'évènement {{DOMxRef("Window/pageshow_event", "pageshow")}} est déclenché sur le document avec l'attribut {{DOMxRef("PageTransitionEvent.persisted", "persisted")}} de {{DOMxRef("PageTransitionEvent")}} définit à `true`.
7. L'{{DOMxRef("Document.URL", "URL")}} du document est définie sur celle de **nouvelle-entrée**.
8. Si la navigation dans l'historique est effectuée avec le remplacement activé, l'entrée immédiatement précédente à l'entrée de destination (en tenant compte du paramètre `delta` des méthodes comme {{DOMxRef("History.go", "go()")}}) est supprimée de la pile d'historique.
9. Si **nouvelle-entrée** ne possède pas d'état utilisateur persistant et que le fragment de son URL n'est pas `null`, le document est fait défiler jusqu'à ce fragment.
10. Ensuite, l'**entrée-courante** est remplacée par **nouvelle-entrée**. L'entrée de destination est désormais considérée comme courante.
11. Si **nouvelle-entrée** possède des informations d'état sérialisées enregistrées avec elle, ces informations sont désérialisées dans {{DOMxRef("History.state")}}&nbsp;; sinon, `state` vaut `null`.
12. Si la valeur de `state` a changé, l'évènement `popstate` est envoyé au document.
13. Tout état utilisateur persistant est restauré, si le navigateur choisit de le faire.
14. Si l'entrée d'origine et la nouvelle entrée partagent le même document, mais ont des fragments différents dans leurs URL, envoyer l'évènement {{DOMxRef("Window.hashchange_event", "hashchange")}} à la fenêtre.

Comme vous pouvez le constater, l'évènement `popstate` est presque la dernière chose exécutée lors du processus de navigation entre les pages de cette manière.

## Exemples

Une page `http://exemple.com/exemple.html` exécutant le code suivant génèrera un journal comme indiqué&nbsp;:

```js
window.addEventListener("popstate", (event) => {
  console.log(
    `location: ${document.location}, state: ${JSON.stringify(event.state)}`,
  );
});
history.pushState({ page: 1 }, "title 1", "?page=1");
history.pushState({ page: 2 }, "title 2", "?page=2");
history.replaceState({ page: 3 }, "title 3", "?page=3");
history.back(); // Journalise "location: http://exemple.com/exemple.html?page=1, state: {"page":1}"
history.back(); // Journalise "location: http://exemple.com/exemple.html, state: null"
history.go(2); // Journalise "location: http://exemple.com/exemple.html?page=3, state: {"page":3}"
```

Le même exemple en utilisant la propriété de gestionnaire d'évènement `onpopstate`&nbsp;:

```js
window.onpopstate = (event) => {
  console.log(
    `location: ${document.location}, state: ${JSON.stringify(event.state)}`,
  );
};
history.pushState({ page: 1 }, "title 1", "?page=1");
history.pushState({ page: 2 }, "title 2", "?page=2");
history.replaceState({ page: 3 }, "title 3", "?page=3");
history.back(); // Journalise "location: http://exemple.com/exemple.html?page=1, state: {"page":1}"
history.back(); // Journalise "location: http://exemple.com/exemple.html, state: null"
history.go(2); // Journalise "location: http://exemple.com/exemple.html?page=3, state: {"page":3}"
```

Notez que même si l'entrée d'historique originelle (pour `http://exemple.com/exemple.html`) n'a pas d'objet state associé, un événement `popstate` est tout de même exécuté lorsque nous activons cette entrée au second appel à `history.back()`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Manipulation de l'historique du navigateur (l'API History)](/fr/docs/Web/API/History_API)
- [Window&nbsp;: évènement `hashchange`](/fr/docs/Web/API/Window/hashchange_event)
