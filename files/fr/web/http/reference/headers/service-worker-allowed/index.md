---
title: En-tête Service-Worker-Allowed
short-title: Service-Worker-Allowed
slug: Web/HTTP/Reference/Headers/Service-Worker-Allowed
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

{{Glossary("response header", "L'en-tête de réponse")}} HTTP **`Service-Worker-Allowed`** est utilisé pour élargir la restriction de chemin pour la portée (`scope`) par défaut d'un <i lang="en">service worker</i>.

Par défaut, le [`scope`](/fr/docs/Web/API/ServiceWorkerContainer/register#scope) pour l'enregistrement d'un <i lang="en">service worker</i> est le répertoire où se trouve le script du <i lang="en">service worker</i>.
Par exemple, si le script `sw.js` se trouve dans `/js/sw.js`, il ne peut contrôler que les URL sous `/js/` par défaut.
Les serveurs peuvent utiliser l'en-tête `Service-Worker-Allowed` pour permettre à un <i lang="en">service worker</i> de contrôler les URL en dehors de son propre répertoire.

Un <i lang="en">service worker</i> intercepte toutes les requêtes réseau dans sa portée, il est donc conseillé d'éviter d'utiliser des portées trop larges sauf si nécessaire.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Response header", "En-tête de réponse")}}</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Service-Worker-Allowed: <scope>
```

## Directives

- `<scope>`
  - : Une chaîne de caractères représentant une URL qui définit la portée d'enregistrement d'un <i lang="en">service worker</i>&nbsp;; c'est-à-dire la plage d'URL qu'un <i lang="en">service worker</i> peut contrôler.

## Exemples

### Utiliser `Service-Worker-Allowed` pour élargir la portée d'un <i lang="en">service worker</i>

L'exemple JavaScript ci-dessous est inclus dans `example.com/product/index.html` et tente [d'enregistrer](/fr/docs/Web/API/ServiceWorkerContainer/register) un <i lang="en">service worker</i> avec une portée qui s'applique à toutes les ressources sous `example.com/`.

```js
navigator.serviceWorker.register("./sw.js", { scope: "/" }).then(
  (registration) => {
    console.log("Installation réussie, portée définie sur '/'", registration);
  },
  (error) => {
    console.error(
      `L'enregistrement du <i lang="en">service worker</i> a échoué : ${error}`,
    );
  },
);
```

La réponse HTTP à la requête de ressource du script du <i lang="en">service worker</i> (`./sw.js`) inclut l'en-tête `Service-Worker-Allowed` défini sur `/`&nbsp;:

```http
HTTP/1.1 200 OK
Date: Mon, 16 Dec 2024 14:37:20 GMT
Service-Worker-Allowed: /

// contenu de sw.js…
```

Si le serveur ne définit pas l'en-tête, l'enregistrement du <i lang="en">service worker</i> échoue, car l'option `scope` (`{ scope: "/" }`) demande une portée plus large que le répertoire où se trouve le script du <i lang="en">service worker</i> (`/product/sw.js`).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Service-Worker")}}
- [L'API Service worker](/fr/docs/Web/API/Service_Worker_API)
- L'interface API {{DOMxRef("ServiceWorkerRegistration")}}
- [Pourquoi est-ce que l'enregistrement de mon <i lang="en">service worker</i> échoue&nbsp;?](/fr/docs/Web/API/Service_Worker_API/Using_Service_Workers#pourquoi_est-ce_que_lenregistrement_de_mon_service_worker_échoue) dans _Utiliser les services workers_.
