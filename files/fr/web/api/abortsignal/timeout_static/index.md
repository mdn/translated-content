---
title: "AbortSignal : méthode statique timeout()"
short-title: timeout()
slug: Web/API/AbortSignal/timeout_static
l10n:
  sourceCommit: 9bda33365e40b6c609fa5190a0af9b5dc6438cf0
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

La méthode statique **`timeout()`** de l'interface {{DOMxRef("AbortSignal")}} retourne un objet `AbortSignal` qui s'annule automatiquement après un temps défini.

Le signal s'annule avec une erreur {{DOMxRef("DOMException")}} `TimeoutError` en cas de délai dépassé.

Le délai est basé sur le temps d'activité et non le temps écoulé, et est effectivement mis en pause si le code s'exécute dans un worker suspendu ou si le document est dans le cache d'historique («&nbsp;[bfcache <sup>(angl.)</sup>](https://web.dev/articles/bfcache)&nbsp;»).

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

Le signal s'annule avec sa propriété {{DOMxRef("AbortSignal.reason")}} définie à {{DOMxRef("DOMException")}} `TimeoutError` en cas de délai dépassé.

## Description

`AbortSignal.timeout()` ne fournit pas de moyen pour annuler son délai. Terminer l'opération plus tôt, ou annuler un autre signal combiné avec lui avec {{domxref("AbortSignal/any_static", "AbortSignal.any()")}}, ne supprime pas le délai.

Tant que le délai est en attente, le signal est maintenu en vie s'il a des écouteurs d'évènements `abort`. [Supprimez les écouteurs](/fr/docs/Web/API/AbortSignal#supprimer_lécouteur_dévènement_abort) ajoutés par votre code lorsqu'ils ne sont plus nécessaires, plutôt que d'attendre l'expiration du délai. La création de délais longs avec des écouteurs peut empêcher la collecte des ordures même après que le code de l'application a abandonné ses références au signal.

Le fait que l'objet `AbortSignal` devienne inatteignable ne garantit pas l'annulation du délai. Si les ressources sont limitées et que vous souhaitez annuler définitivement les délais plus tôt, utilisez plutôt un {{domxref("AbortController")}} avec {{domxref("Window.setTimeout", "setTimeout()")}}, et appelez {{domxref("Window.clearTimeout", "clearTimeout()")}} lorsque l'opération se termine.

## Exemples

Voici un exemple montrant une opération fetch qui expire si elle n'aboutit pas après 5 secondes.
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
