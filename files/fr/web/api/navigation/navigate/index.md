---
title: "Navigation : méthode navigate()"
short-title: navigate()
slug: Web/API/Navigation/navigate
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

La méthode **`navigate()`** de l'interface {{DOMxRef("Navigation")}} navigue vers une URL spécifique, en mettant à jour tout état fourni dans la liste des entrées de l'historique.

## Syntaxe

```js-nolint
navigate(url)
navigate(url, options)
```

### Paramètres

- `url`
  - : L'URL de destination vers laquelle naviguer. Notez que lorsque vous appelez `navigate()` sur l'objet `navigation` d'une autre fenêtre, l'URL est résolue par rapport à l'URL de la fenêtre cible, et non par rapport à l'URL de la fenêtre appelante. Cela correspond au comportement de [l'API History](/fr/docs/Web/API/History_API), mais pas au comportement de [l'API Location](/fr/docs/Web/API/Location). Notez également que les URL `javascript:` ne sont pas autorisées pour des raisons de sécurité.
- `options` {{Optional_Inline}}
  - : Un objet d'options contenant les propriétés suivantes&nbsp;:
    - `state` {{Optional_Inline}}
      - : L'information définie par le·la développeur·euse à stocker dans l'entrée d'historique associée {{DOMxRef("NavigationHistoryEntry")}} une fois la navigation terminée, récupérable par {{DOMxRef("NavigationHistoryEntry.getState", "getState()")}}. Cela peut être de n'importe quel type de données. Par exemple, vous pouvez souhaiter stocker un compteur de visites de page à des fins d'analyse, ou stocker les détails de l'état de l'interface utilisateur afin que la vue puisse être affichée exactement comme l'utilisateur·ice l'a laissée. Toutes les données stockées dans `state` doivent être [structurées et clonables](/fr/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).
    - `info` {{Optional_Inline}}
      - : L'information définie par le·la développeur·euse à transmettre à l'évènement {{DOMxRef("Navigation/navigate_event", "navigate")}}, rendue disponible dans {{DOMxRef("NavigateEvent.info")}}. Cela peut être de n'importe quel type de données. Par exemple, vous pouvez souhaiter afficher le contenu nouvellement navigué avec une animation différente selon la manière dont il a été navigué (glisser vers la gauche, glisser vers la droite ou aller à l'accueil). Une chaîne de caractères indiquant quelle animation utiliser peut être transmise dans `info`.
    - `history` {{Optional_Inline}}
      - : Une valeur énumérée qui définit le comportement de l'historique pour cette navigation. Les valeurs disponibles sont&nbsp;:
        - `auto`&nbsp;: La valeur par défaut&nbsp;; effectue généralement une navigation `push` mais effectue une navigation `replace` dans des circonstances particulières (voir la description de `NotSupportedError` ci-dessous).
        - `push`&nbsp;: ajoute une nouvelle {{DOMxRef("NavigationHistoryEntry")}} à la liste des entrées, ou échoue dans des circonstances particulières (voir la description de `NotSupportedError` ci-dessous).
        - `replace`&nbsp;: remplace l'actuelle {{DOMxRef("NavigationHistoryEntry")}}.

### Valeur de retour

Un objet avec les propriétés suivantes&nbsp;:

- `committed`
  - : Une promesse ({{JSxRef("Promise")}} qui est complétée lorsque l'URL visible a changé et qu'une nouvelle {{DOMxRef("NavigationHistoryEntry")}} a été créée.
- `finished`
  - : Une promesse ({{JSxRef("Promise")}}) qui est complétée lorsque toutes les promesses retournées par le gestionnaire `intercept()` sont complétées. Cela équivaut à la promesse {{DOMxRef("NavigationTransition.finished")}} se complétant, lorsque l'évènement {{DOMxRef("Navigation/navigatesuccess_event", "navigatesuccess")}} se déclenche.

Chaque promesse se rompt si la navigation a échoué pour une raison quelconque.

### Exceptions

- `DataCloneError` {{DOMxRef("DOMException")}}
  - : Levé si le paramètre `state` contient des valeurs qui ne sont pas clonables de manière structurée.
- `InvalidStateError` {{DOMxRef("DOMException")}}
  - : Levé si le document n'est pas actuellement actif.
- `SyntaxError` {{DOMxRef("DOMException")}}
  - : Levé si le paramètre `url` n'est pas une URL valide.
- `NotSupportedError` {{DOMxRef("DOMException")}}
  - : Levé si&nbsp;:
    - L'option `history` est définie sur `push`, et le navigateur affiche actuellement le document initial `about:blank`.
    - Le schéma de l'URL est `javascript`.

## Exemples

### Configurer le bouton d'accueil

```js
function initBoutonAccueil() {
  // Obtient la clé de la première entrée chargée
  // alors l'utilisateur·ice peut toujours revenir en arrière de cette
  // vue.
  const { key } = navigation.currentEntry;
  backToHomeButton.onclick = () => {
    navigation.traverseTo(key);
  };
}
// Intercepte les évènements de navigation, tels que les clics sur les
// liens, et les remplace par des navigations sur une seule page
navigation.addEventListener("navigate", (event) => {
  event.intercept({
    async handler() {
      // Navigue à une vue différente,
      // mais le bouton « accueil » fonctionne toujours.
    },
  });
});
```

### Bouton de retour intelligent

Un bouton «&nbsp;retour&nbsp;» fourni par la page peut vous ramener en arrière, même après un rechargement, en inspectant les entrées d'historique précédentes&nbsp;:

```js
backButtonEl.addEventListener("click", () => {
  if (
    navigation.entries()[navigation.currentEntry.index - 1]?.url ===
    "/product-listing"
  ) {
    navigation.back();
  } else {
    // Si l'utilisateur·ice est arrivé·e ici d'une autre manière
    // par exemple en tapant l'URL directement :
    navigation.navigate("/product-listing", { history: "replace" });
  }
});
```

### Utiliser l'information et l'état

```js
async function navigateHandler() {
  await navigation.navigate(url, {
    info: { animation: "swipe-right" },
    state: { infoPaneOpen: true },
  }).finished;

  // Met à jour l'état de l'application
  // …
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Routage moderne côté client&nbsp;: l'API Navigation <sup>(angl.)</sup>](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Présentation de l'API Navigation <sup>(angl.)</sup>](https://github.com/WICG/navigation-api/blob/main/README.md)
