---
title: "Window : méthode reportError()"
short-title: reportError()
slug: Web/API/Window/reportError
l10n:
  sourceCommit: 4f90930051faa1ff1f4278068885e59c5bbb0069
---

{{APIRef("DOM")}}

La méthode **`reportError()`** de l'interface {{DOMxRef("Window")}} peut être utilisée pour signaler des erreurs à la console ou aux gestionnaires d'évènements des portées globales, en simulant une exception JavaScript non interceptée.

Cette fonctionnalité est principalement destinée aux bibliothèques personnalisées de distribution d'évènements ou de manipulation de fonctions de rappels.
Les bibliothèques peuvent utiliser cette fonctionnalité pour intercepter les erreurs dans le code de rappel et les relancer vers le gestionnaire de niveau supérieur.
Cela garantit qu'une exception dans un rappel ne empêchera pas les autres d'être traités, tout en garantissant que les informations de trace de pile sont toujours facilement disponibles pour le débogage au niveau supérieur.

## Syntaxe

```js-nolint
reportError(throwable)
```

### Paramètres

- `throwable`
  - : Toute valeur JavaScript, mais de préférence un objet d'erreur tel qu'un {{JSxRef("TypeError")}}.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

### Exceptions

- {{JSxRef("TypeError")}}
  - : La méthode est appelée sans argument d'erreur.

## Exemples

### Détection de fonctionnalité

Test de la méthode en utilisant&nbsp;:

```js
if (typeof window.reportError === "function") {
  // la fonction est définie
}
```

### Télémétrie

`reportError()` permet de signaler des erreurs asynchrones de la même manière que les erreurs intégrées. Regrouper toutes les erreurs en un seul point facilite la collecte de télémétrie sur les erreurs survenant dans une application.

Par exemple, une application web peut configurer un écouteur d'évènements global {{DOMxRef("Window/error_event", "error")}} pour collecter toutes les erreurs non interceptées et les envoyer à un serveur pour analyse, par exemple en utilisant [Sentry <sup>(angl.)</sup>](https://sentry.io/)&nbsp;:

```js
window.addEventListener("error", (event) => {
  event.preventDefault(); // Empêche l'enregistrement par défaut dans la console
  Sentry.captureException(event.error);
  console.error("Erreur rencontrée :", event.error);
  showToastNotification(
    "Une erreur est survenue. Notre équipe a été informée.",
  );
});
```

Par défaut, cet écouteur peut écouter les exceptions non interceptées lancées lors de l'exécution synchrone de `<script>`, des rappels `setTimeout`, des gestionnaires d'évènements, des rappels de promesses asynchrones, etc. Les bibliothèques et les applications peuvent utiliser `reportError()` pour transmettre leurs propres erreurs à ce même écouteur, garantissant que toutes les erreurs sont capturées de manière cohérente.

```js
function fetchUser(userId) {
  return fetch(`/api/users?id=${encodeURIComponent(userId)}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Échec de la récupération de l'utilisateur avec l'ID ${userId}`,
        );
      }
      return response.json();
    })
    .catch((error) => {
      // Signaler l'erreur au gestionnaire d'erreurs global
      window.reportError(error);
    });
}
```

En utilisant `reportError()` au lieu de laisser l'erreur non interceptée, l'exécution du code suivant n'est pas interrompue, tout en garantissant que l'erreur est enregistrée et peut être analysée. Par exemple, cette fonction peut être appelée dans un exécuteur de tests sans gestion supplémentaire avec `try…catch`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("Window")}}
- La méthode {{DOMxRef("WorkerGlobalScope.reportError()")}}
- L'interface {{DOMxRef("Window")}}&nbsp;: l'évènement {{DOMxRef("Window/error_event", "error")}}
- L'interface {{DOMxRef("WorkerGlobalScope")}}&nbsp;: l'évènement {{DOMxRef("WorkerGlobalScope/error_event", "error")}}
- L'interface {{DOMxRef("HTMLElement")}}&nbsp;: l'évènement {{DOMxRef("HTMLElement/error_event", "error")}}
