---
title: "AbortSignal : méthode statique any()"
short-title: any()
slug: Web/API/AbortSignal/any_static
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

La méthode statique **`any()`** de l'interface {{DOMxRef("AbortSignal")}} prend un itérable de signaux d'annulation et retourne un objet `AbortSignal`. Le signal d'annulation retourné est annulé dès qu'un des signaux d'entrée de l'itérable est annulé. La {{DOMxRef("AbortSignal.reason", "raison d'annulation", "", 1)}} sera définie sur la raison du premier signal annulé. Si l'un des signaux donnés est déjà annulé, le {{DOMxRef("AbortSignal")}} retourné le sera aussi.

## Syntaxe

```js-nolint
AbortSignal.any(iterable)
```

### Paramètres

- `iterable`
  - : Un [itérable](/fr/docs/Web/JavaScript/Reference/Iteration_protocols#le_protocole_«_itérable_») (comme un {{JSxRef("Array")}}) de signaux d'annulation.

### Valeur de retour

Un objet {{DOMxRef("AbortSignal")}} qui est&nbsp;:

- **Déjà annulé**, si l'un des signaux donnés est déjà annulé. La raison du {{DOMxRef("AbortSignal")}} retourné sera déjà définie sur la {{DOMxRef("AbortSignal.reason", "reason")}} du premier signal déjà annulé.
- **Annulé de façon asynchrone**, quand un signal d'annulation de l'`iterable` est annulé. La {{DOMxRef("AbortSignal.reason", "reason")}} sera définie sur la raison du premier signal annulé.

## Exemples

### Utiliser `AbortSignal.any()`

Cet exemple montre comment combiner à la fois un signal provenant d'un {{DOMxRef("AbortController")}} et un signal de délai d'expiration provenant de {{DOMxRef("AbortSignal/timeout_static", "AbortSignal.timeout")}}.

```js
const cancelDownloadButton = document.getElementById("cancelDownloadButton");

const userCancelController = new AbortController();

cancelDownloadButton.addEventListener("click", () => {
  userCancelController.abort();
});

// Délai d'attente après 5 minutes
const timeoutSignal = AbortSignal.timeout(1_000 * 60 * 5);

// Ce signal sera annulé soit lorsque l'utilisateur·ice clique sur le bouton d'annulation, soit après 5 minutes
// selon ce qui arrive en premier
const combinedSignal = AbortSignal.any([
  userCancelController.signal,
  timeoutSignal,
]);

try {
  const res = await fetch(someUrlToDownload, {
    // Arrête le fetch dès qu'un des signaux est annulé
    signal: combinedSignal,
  });
  const body = await res.blob();
  // Traite le contenu téléchargé :
  // …
} catch (e) {
  if (e.name === "AbortError") {
    // Annulé par l'utilisateur·ice
  } else if (e.name === "TimeoutError") {
    // Affiche à l'utilisateur·ice que le téléchargement a expiré
  } else {
    // Autre erreur, par exemple une erreur réseau
  }
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
