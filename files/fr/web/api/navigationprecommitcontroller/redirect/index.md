---
title: "NavigationPrecommitController : méthode redirect()"
short-title: redirect()
slug: Web/API/NavigationPrecommitController/redirect
l10n:
  sourceCommit: 81a384e18b61c1d1b23d7f58f1fbd8ec3af45558
---

{{APIRef("Navigation API")}}

La méthode **`redirect()`** de l'interface {{DOMxRef("NavigationPrecommitController")}} redirige le navigateur vers une URL définie et précise le comportement de l'historique ainsi que toute information d'état souhaitée.

## Syntaxe

```js-nolint
redirect(url, options)
```

### Paramètres

- `url`
  - : L'URL vers laquelle rediriger.
- `options` {{Optional_Inline}}
  - : Un objet d'options, dont les propriétés peuvent inclure&nbsp;:
    - `state` {{Optional_Inline}}
      - : Contient toutes les informations d'état que vous souhaitez transmettre avec la navigation&nbsp;; par exemple, à des fins de journalisation ou de suivi. Cela peut être représenté par n'importe quel type de valeur. L'état de la navigation peut ensuite être récupéré par la méthode {{DOMxRef("NavigationHistoryEntry.getState()")}} de l'entrée d'historique qui en résulte.
    - `history` {{Optional_Inline}}
      - : Une valeur énumérée qui définit comment cette redirection doit être ajoutée à l'historique de navigation. Elle peut prendre l'une des valeurs suivantes&nbsp;:
        - `auto`
          - : La valeur par défaut, qui laisse le navigateur décider comment la gérer&nbsp;:
            - Si la navigation d'origine a eu lieu à la suite d'un appel à {{DOMxRef("Navigation.navigate()")}}, la valeur est celle définie dans l'option [`history`](/fr/docs/Web/API/Navigation/navigate#history) de l'appel `navigate()`.
            - Sinon, la valeur utilisée est généralement `push`, mais elle devient `replace` si la redirection pointe vers la même URL que l'URL avant la navigation.
        - `push`
          - : Ajoute un nouvel objet {{DOMxRef("NavigationHistoryEntry")}} à l'historique de navigation et efface toute navigation avant disponible (c'est-à-dire, si l'utilisateur·ice a précédemment navigué vers d'autres emplacements, puis a utilisé le bouton de retour pour revenir dans l'historique avant d'initier la navigation qui a provoqué la redirection).
        - `replace`
          - : Remplace la valeur de {{DOMxRef("Navigation.currentEntry")}} par le nouvel objet `NavigationHistoryEntry` résultant.

> [!NOTE]
> La méthode `redirect()` peut convertir le comportement de l'historique entre `auto`, `push` et `replace`, mais elle ne peut pas transformer une navigation `traverse` en une navigation `push`/`replace` et inversement.

### Valeur de retour

Aucune (`undefined`).

### Exceptions

- `InvalidStateError` {{DOMxRef("DOMException")}}
  - : Levée si&nbsp;:
    - Un objet {{DOMxRef("NavigateEvent")}} d'origine n'a pas été intercepté.
    - La propriété {{DOMxRef("NavigateEvent.navigationType")}} n'est pas `push` ou `replace`.
- `SyntaxError` {{DOMxRef("DOMException")}}
  - : Levée si une `url` définie est invalide.
- `SecurityError` {{DOMxRef("DOMException")}}
  - : Levée si le document actuel ne peut pas voir son URL réécrite vers une `url` de redirection fournie.

## Exemples

Voir la page principale de {{DOMxRef("NavigationPrecommitController")}} pour un exemple.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Routage moderne côté client&nbsp;: l'API Navigation <sup>(angl.)</sup>](https://developer.chrome.com/docs/web-platform/navigation-api/)
