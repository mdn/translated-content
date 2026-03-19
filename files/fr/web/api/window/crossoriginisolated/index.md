---
title: "Window : propriété crossOriginIsolated"
short-title: crossOriginIsolated
slug: Web/API/Window/crossOriginIsolated
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("DOM")}}

La propriété en lecture seule **`crossOriginIsolated`** de l'interface {{DOMxRef("Window")}} retourne une valeur booléenne qui indique si le document est isolé inter-origine.

Un document isolé inter-origine ne partage son {{Glossary("Browsing context", "groupe de contexte de navigation")}} qu'avec des documents de même origine dans les fenêtres s'ouvrant par-dessus et les navigations, ainsi qu'avec les ressources (de même origine ou inter-origine) que le document a choisi d'utiliser [CORS](/fr/docs/Web/HTTP/Guides/CORS) (et [COEP](/fr/docs/Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy) pour `<iframe>`).
La relation entre un ouvreur inter-origine du document ou toute fenêtre s'ouvrant par-dessus inter-origine qu'il ouvre est rompue.
Le document peut aussi être hébergé dans un processus système séparé avec d'autres documents avec lesquels il peut communiquer en opérant sur une mémoire partagée.
Cela réduit le risque d'attaques par canaux auxiliaires et d'attaques inter-origine appelées [XS-Leaks <sup>(angl.)</sup>](https://xsleaks.dev/).

Les documents isolés inter-origine fonctionnent avec moins de restrictions lors de l'utilisation des API suivantes&nbsp;:

- {{JSxRef("SharedArrayBuffer")}} peut être créé et transmis par un appel à {{DOMxRef("Window.postMessage()")}} ou {{DOMxRef("MessagePort.postMessage()")}}.
- {{DOMxRef("Performance.now()")}} offre une meilleure précision.
- {{DOMxRef("Performance.measureUserAgentSpecificMemory()")}} peut être appelé.

Un document sera isolé inter-origine s'il est retourné avec une réponse HTTP qui inclut les en-têtes suivants&nbsp;:

- L'en-tête {{HTTPHeader("Cross-Origin-Opener-Policy")}} avec la directive `same-origin`.
- L'en-tête {{HTTPHeader("Cross-Origin-Embedder-Policy")}} avec la directive `require-corp` ou `credentialless`.

L'accès aux API doit aussi être autorisé par la politique de permissions `Permissions-Policy` {{HTTPHeader("Permissions-Policy/cross-origin-isolated", "cross-origin-isolated")}}.
Sinon, la propriété `crossOriginIsolated` retournera `false` et le document ne pourra pas utiliser les API listées ci-dessus avec des restrictions réduites.

## Valeur

Une valeur booléenne.

## Exemples

### Isoler un document inter-origine

Pour isoler un document inter-origine&nbsp;:

- Définir l'en-tête HTTP {{HTTPHeader("Cross-Origin-Opener-Policy")}} à `same-origin`&nbsp;:

  ```http
  Cross-Origin-Opener-Policy: same-origin
  ```

- Définir l'en-tête HTTP {{HTTPHeader("Cross-Origin-Embedder-Policy")}} à `require-corp` ou `credentialless`&nbsp;:

  ```http
  Cross-Origin-Embedder-Policy: require-corp
  Cross-Origin-Embedder-Policy: credentialless
  ```

- La directive {{HTTPHeader("Permissions-Policy/cross-origin-isolated","cross-origin-isolated")}} de l'en-tête {{HTTPHeader("Permissions-Policy")}} ne doit pas empêcher l'accès à la fonctionnalité.
  Notez que la liste autorisée par défaut de la directive est `self`, donc l'autorisation sera accordée par défaut aux documents isolés inter-origine.

### Vérifier si le document est isolé inter-origine

```js
const monWorker = new Worker("worker.js");

if (window.crossOriginIsolated) {
  const tampon = new SharedArrayBuffer(16);
  monWorker.postMessage(tampon);
} else {
  const tampon = new ArrayBuffer(16);
  monWorker.postMessage(tampon);
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("WorkerGlobalScope.crossOriginIsolated")}}
