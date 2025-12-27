---
title: "AbortSignal : méthode statique timeout()"
short-title: timeout()
slug: Web/API/AbortSignal/timeout_static
l10n:
  sourceCommit: 58163fc9e99e2ea7eb6c2b698f02343009351dd9
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

La méthode statique **`timeout()`** de l'interface {{DOMxRef("AbortSignal")}} retourne un objet `AbortSignal` qui s'annulera automatiquement après un temps défini.

Le signal s'annule avec une erreur {{DOMxRef("DOMException")}} `TimeoutError` en cas de délai dépassé.

Le délai est basé sur le temps d'activité et non le temps écoulé, et sera effectivement mis en pause si le code s'exécute dans un worker suspendu ou si le document est dans le cache d'historique («&nbsp;[bfcache <sup>(angl.)</sup>](https://web.dev/articles/bfcache)&nbsp;»).

Pour combiner plusieurs signaux, vous pouvez utiliser {{DOMxRef("AbortSignal/any_static", "AbortSignal.any()")}}, par exemple pour annuler directement un téléchargement soit avec un signal de délai, soit en appelant {{DOMxRef("AbortController.abort()")}}.

## Syntaxe

```js-nolint
AbortSignal.timeout(time)
```

### Paramètres

- `time`
  - : Le temps «&nbsp;actif&nbsp;» en millisecondes avant que le {{DOMxRef("AbortSignal")}} retourné ne s'annule.
    La valeur doit être comprise entre 0 et {{JSxRef("Number.MAX_SAFE_INTEGER")}}.

### Valeur de retour

Un objet {{DOMxRef("AbortSignal")}}.

Le signal s'annulera avec sa propriété {{DOMxRef("AbortSignal.reason")}} définie à {{DOMxRef("DOMException")}} `TimeoutError` en cas de délai, ou à {{DOMxRef("DOMException")}} `AbortError` si l'opération a été annulée par l'utilisateur·ice.

## Exemples

Voici un exemple montrant une opération fetch qui expirera si elle n'aboutit pas après 5 secondes.
Notez que cela peut aussi échouer si la méthode n'est pas supportée, si le bouton «&nbsp;stop&nbsp;» du navigateur est pressé, ou pour une autre raison.

```js
const url = "https://chemin_vers_le_fichier.mp4";

try {
  const res = await fetch(url, { signal: AbortSignal.timeout(5000) });
  const result = await res.blob();
  // …
} catch (err) {
  if (err.name === "TimeoutError") {
    // Cette exception provient du signal d'annulation
    console.error(
      "Délai dépassé : il a fallu plus de 5 secondes pour obtenir le résultat !",
    );
  } else if (err.name === "AbortError") {
    // Cette exception provient du fetch lui-même
    console.error(
      "La récupération a été annulée par une action utilisateur (bouton d'arrêt du navigateur, fermeture de l'onglet, etc.).",
    );
  } else if (err.name === "TypeError") {
    console.error("La méthode AbortSignal.timeout() n'est pas supportée");
  } else {
    // Une erreur réseau, ou un autre problème.
    console.error(`Erreur : type : ${err.name}, message : ${err.message}`);
  }
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
