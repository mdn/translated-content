---
title: "NavigateEvent : constructeur NavigateEvent()"
short-title: NavigateEvent()
slug: Web/API/NavigateEvent/NavigateEvent
l10n:
  sourceCommit: 77ea71add6054857698eb7ac1bfec8c7afe9ad4f
---

{{APIRef("Navigation API")}}

Le constructeur **`NavigateEvent()`** crée une nouvelle instance d'objet {{DOMxRef("NavigateEvent")}}.

## Syntaxe

```js-nolint
new NavigateEvent(type, init)
```

### Paramètres

- `type`
  - : Une chaîne de caractères représentant le type d'évènement.
- `init`
  - : Un objet qui, _en plus des propriétés définies dans {{DOMxRef("Event/Event", "Event()")}}_, possède les propriétés suivantes&nbsp;:
    - `canIntercept` {{Optional_Inline}}
      - : Un booléen définissant si la navigation peut être interceptée ou non (par exemple, vous ne pouvez pas intercepter une navigation inter-origines). Par défaut à `false`.
    - `destination`
      - : Un objet {{DOMxRef("NavigationDestination")}} représentant l'emplacement vers lequel la navigation se fait.
    - `downloadRequest` {{Optional_Inline}}
      - : Le nom du fichier demandé pour téléchargement, dans le cas d'une navigation de téléchargement (par exemple, un élément HTML {{HTMLElement("a")}} ou {{HTMLElement("area")}} avec un attribut `download`). Par défaut à `null`.
    - `formData` {{Optional_Inline}}
      - : L'objet {{DOMxRef("FormData")}} représentant les données envoyées dans le cas d'un envoi de formulaire `POST`. Par défaut à `null`.
    - `hashChange` {{Optional_Inline}}
      - : Un booléen définissant si la navigation est une navigation par fragment (c'est-à-dire vers un identifiant de fragment dans le même document). Par défaut à `false`.
    - `hasUAVisualTransition` {{Optional_Inline}}
      - : Un booléen définissant si l'agent utilisateur a effectué une transition visuelle pour cette navigation avant de déclencher cet évènement. Par défaut à `false`.
    - `info` {{Optional_Inline}}
      - : La valeur de données `info` transmise par l'opération de navigation initiatrice (par exemple, {{DOMxRef("Navigation.back()")}} ou {{DOMxRef("Navigation.navigate()")}}).
    - `navigationType` {{Optional_Inline}}
      - : Le type de la navigation. Valeurs possibles — `push`, `reload`, `replace` et `traverse`. Par défaut à `push`.
    - `signal`
      - : Un objet {{DOMxRef("AbortSignal")}}, qui est annulé si la navigation est annulée (par exemple, si l'utilisateur·ice appuie sur le bouton «&nbsp;Arrêter&nbsp;» du navigateur, ou si une autre navigation commence et annule ainsi celle en cours).
    - `sourceElement` {{Optional_Inline}}
      - : Un objet {{DOMxRef("Element")}} représentant l'élément initiateur dans les cas où la navigation a été initiée par un élément, ou `null` si la navigation n'a pas été initiée par un élément. Par défaut à `null`.
    - `userInitiated` {{Optional_Inline}}
      - : Un booléen définissant si la navigation a été initiée par l'utilisateur·ice (par exemple, en cliquant sur un lien, en envoyant un formulaire ou en appuyant sur les boutons «&nbsp;Précédent&nbsp;»/«&nbsp;Suivant&nbsp;» du navigateur). Par défaut à `false`.

### Valeur de retour

Un nouvel objet {{DOMxRef("NavigateEvent")}}.

## Exemples

Un·e développeur·euse n'utilise pas ce constructeur manuellement. Un nouvel objet `NavigateEvent` est construit lorsqu'un gestionnaire est invoqué à la suite du déclenchement de l'évènement {{DOMxRef("Navigation.navigate_event", "navigate")}}.

```js
navigation.addEventListener("navigate", (event) => {
  // Quitte prématurément si cette navigation ne doit pas être interceptée,
  // par exemple, si la navigation est inter-origine, ou une requête de téléchargement
  if (shouldNotIntercept(event)) {
    return;
  }

  const url = new URL(event.destination.url);

  if (url.pathname.startsWith("/articles/")) {
    event.intercept({
      async handler() {
        // L'URL a déjà changé, donc affiche un espace réservé pendant
        // la récupération du nouveau contenu, comme un indicateur de
        // chargement ou une page de chargement
        rendreEspaceReserveArticle();

        // Récupère le nouveau contenu et l'affiche lorsqu'il est prêt
        const contenuArticle = await obtenirContenuArticle(url.pathname);
        rendrePageArticle(contenuArticle);
      },
    });
  }
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Routage moderne côté client&nbsp;: l'API Navigation <sup>(angl.)</sup>](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Présentation de l'API Navigation <sup>(angl.)</sup>](https://github.com/WICG/navigation-api/blob/main/README.md)
