---
title: En-tête Cross-Origin-Opener-Policy (COOP)
short-title: Cross-Origin-Opener-Policy
slug: Web/HTTP/Reference/Headers/Cross-Origin-Opener-Policy
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

L'{{Glossary("response header", "en-tête de réponse")}} HTTP **`Cross-Origin-Opener-Policy`** (COOP) permet à un site web de contrôler si un nouveau document de premier niveau, ouvert avec {{DOMxRef("Window.open()")}} ou lors de la navigation vers une nouvelle page, est ouvert dans le même {{Glossary("Browsing context","groupe de contexte de navigation")}} (BCG) ou dans un nouveau groupe de contexte de navigation.

Lorsqu'il est ouvert dans un nouveau BCG, toute référence entre le nouveau document et son ouvreur est rompue, et le nouveau document peut être isolé en processus de son ouvreur.
Cela garantit que des attaquants potentiels ne peuvent pas ouvrir vos documents avec {{DOMxRef("Window.open()")}} puis utiliser la valeur retournée pour accéder à son objet global, ce qui prévient un ensemble d'attaques inter-origines appelées [XS-Leaks <sup>(angl.)</sup>](https://xsleaks.dev/).

Cela signifie aussi que tout objet ouvert par votre document dans un nouveau BCG ne peut pas y accéder avec [`window.opener`](/fr/docs/Web/API/Window/opener).
Cela vous permet d'avoir un contrôle plus fin sur les références à une fenêtre que [`rel=noopener`](/fr/docs/Web/HTML/Reference/Attributes/rel/noopener), qui affecte les navigations sortantes mais pas les documents ouverts avec {{DOMxRef("Window.open()")}}.

Le comportement dépend des politiques du nouveau document et de son ouvreur, et si le nouveau document est ouvert après une navigation ou avec {{DOMxRef("Window.open()")}}.

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
Cross-Origin-Opener-Policy: unsafe-none
Cross-Origin-Opener-Policy: same-origin-allow-popups
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Opener-Policy: noopener-allow-popups
```

### Directives

- `unsafe-none`
  - : Le document autorise le partage de son groupe de contexte de navigation avec n'importe quel autre document, ce qui peut donc être dangereux.
    Il sert à exclure un document de l'utilisation de COOP pour l'isolation des processus.
    Il s'agit de la valeur par défaut.

    Lors des navigations, les documents avec `unsafe-none` ouvriront toujours et seront toujours ouverts dans un nouveau BCG — sauf si l'autre document a également `unsafe-none` (ou n'a pas de valeur de directive COOP).

    Avec `Window.open()`, les documents avec `unsafe-none` ouvriront toujours les documents ayant une autre valeur dans un nouveau BCG.
    Cependant, les documents avec `unsafe-none` peuvent être ouverts dans le même BCG si l'ouvreur possède la directive `same-origin-allow-popups`, `noopener-allow-popups` ou `unsafe-none`.
    Un document avec `same-origin` ouvrira toujours un document avec `unsafe-none` dans un nouveau BCG.

- `same-origin`
  - : Le document autorise le chargement dans des BCG qui utilisent COOP et ne contiennent que des documents de même origine.
    Cela sert à fournir la [compartimentation inter-origines](/fr/docs/Web/API/Window/crossOriginIsolated) pour un BCG.

    Les documents avec `same-origin` n'ouvriront et ne seront ouverts dans le même BCG que si les deux documents sont de même origine et possèdent la directive `same-origin`.

- `same-origin-allow-popups`
  - : Cette directive est similaire à [`same-origin`](#same-origin), sauf qu'elle permet d'ouvrir des documents avec {{DOMxRef("Window.open()")}} dans le même BCG s'ils ont une valeur COOP de `unsafe-none`.

    Cette directive sert à assouplir la restriction `same-origin` pour les intégrations où un document a besoin des avantages de la compartimentation inter-origines mais doit aussi ouvrir et conserver une référence à des documents inter-origines de confiance.
    Par exemple, lors de l'utilisation d'un service inter-origines pour OAuth ou les paiements.

    Un document avec cette directive peut ouvrir un document dans le même BCG avec {{DOMxRef("Window.open()")}} si ce dernier a une valeur COOP de `unsafe-none`.
    Dans ce cas, il n'est pas important que le document ouvert soit inter-site ou même site.

    Sinon, les documents avec `same-origin-allow-popups` n'ouvriront et ne seront ouverts dans le même BCG que si les deux documents sont de même origine et possèdent la directive `same-origin-allow-popups`.

- `noopener-allow-popups`
  - : Les documents avec cette directive sont toujours ouverts dans un nouveau BCG, sauf lorsqu'ils sont ouverts par navigation depuis un document qui possède aussi `noopener-allow-popups`.
    Elle est utilisée pour les cas où il est nécessaire d'isoler en processus des documents de même origine.

    Cela coupe les connexions entre le nouveau document et son ouvreur, isolant le contexte de navigation pour le document courant, quelle que soit l'origine du document ouvreur.
    Cela garantit que l'ouvreur ne peut pas exécuter de scripts dans les documents ouverts et inversement — même s'ils sont de même origine.

    Lors des navigations, un document avec cette directive ouvrira toujours les autres documents dans un nouveau BCG sauf s'ils sont de même origine et possèdent la directive `noopener-allow-popups`.
    Avec {{DOMxRef("Window.open()")}}, un document avec cette directive ouvrira les documents dans un nouveau BCG sauf s'ils ont `unsafe-none`&nbsp;; dans ce cas, il n'est pas important qu'ils soient même site ou inter-site.

## Description

De manière générale, vous devez définir vos politiques de façon à ce que seules les ressources de même origine et les ressources inter-origines de confiance, qui ont besoin de pouvoir s'exécuter mutuellement, soient autorisées à s'ouvrir dans le même groupe de contexte de navigation.
Les autres ressources doivent être isolées inter-origines dans leur propre groupe.

Les sections suivantes indiquent si les documents seront ouverts dans le même BCG ou dans un nouveau BCG à la suite d'une navigation ou de l'ouverture d'une fenêtre par programme.

> [!NOTE]
> La spécification utilise le terme «&nbsp;fenêtre contextuelle&nbsp;» pour désigner tout document ouvert avec {{DOMxRef("Window.open()")}}, qu'il s'agisse d'une fenêtre contextuelle, d'un onglet, d'une fenêtre ou d'un autre contexte.

### Navigations

Lors des navigations entre documents, le nouveau document s'ouvre dans le même BCG si les deux documents ont des «&nbsp;politiques COOP correspondantes&nbsp;», sinon dans un nouveau BCG.

Les politiques correspondent si les deux documents ont la politique `unsafe-none`, ou si les politiques sont identiques et que les documents sont de même origine.

Le tableau ci‑dessous montre comment cette règle détermine si les documents sont ouverts dans le même BCG ou dans un nouveau BCG, selon les différentes valeurs de directive.

<!-- https://html.spec.whatwg.org/multipage/browsers.html#matching-coop -->

| Ouverture (↓) / Ouvert (→) | `unsafe-none` | `same-origin-allow-popups` | `same-origin`             | `noopener-allow-popups`   |
| -------------------------- | ------------- | -------------------------- | ------------------------- | ------------------------- |
| `unsafe-none`              | Identique     | Nouveau                    | Nouveau                   | Nouveau                   |
| `same-origin-allow-popups` | Nouveau       | Identique si même origine  | Nouveau                   | Nouveau                   |
| `same-origin`              | Nouveau       | Nouveau                    | Identique si même origine | Nouveau                   |
| `noopener-allow-popups`    | Nouveau       | Nouveau                    | Nouveau                   | Identique si même origine |

### Ouverture avec `Window.open()`

Lors de l'ouverture d'un document avec `Window.open()`, le nouveau document est ouvert dans un nouveau BCG selon les règles suivantes, évaluées dans l'ordre&nbsp;:

1. Si le nouveau document a COOP défini sur `noopener-allow-popups` => ouvrir le nouveau document dans un nouveau BCG
2. Si le nouveau document a COOP défini sur `unsafe-none` et que le document ouvreur a COOP défini sur `same-origin-allow-popups` ou `noopener-allow-popups` => ouvrir le nouveau document dans le même BCG
3. Si le nouveau document et le document ouvreur ont des [politiques COOP correspondantes](#navigations) => ouvrir le nouveau document dans le même BCG
4. Sinon, ouvrir le nouveau document dans un nouveau BCG

Le tableau ci‑dessous montre comment ces règles déterminent si les documents sont ouverts dans le même BCG ou dans un nouveau BCG, selon les différentes valeurs de directive.

<!-- https://html.spec.whatwg.org/multipage/browsers.html#check-browsing-context-group-switch-coop-value-popup -->

| Ouverture (↓) / Ouvert (→) | `unsafe-none` | `same-origin-allow-popups` | `same-origin`             | `noopener-allow-popups` |
| -------------------------- | ------------- | -------------------------- | ------------------------- | ----------------------- |
| `unsafe-none`              | Identique     | Nouveau                    | Nouveau                   | Nouveau                 |
| `same-origin-allow-popups` | Identique     | Identique si même origine  | Nouveau                   | Nouveau                 |
| `same-origin`              | Nouveau       | Nouveau                    | Identique si même origine | Nouveau                 |
| `noopener-allow-popups`    | Identique     | Nouveau                    | Nouveau                   | Nouveau                 |

## Exemples

### Fonctionnalités dépendant de la compartimentation inter-origines

Certaines fonctionnalités, comme l'accès aux objets {{JSxRef("SharedArrayBuffer")}} ou l'utilisation de {{DOMxRef("Performance.now()")}} avec des minuteurs non bridés, ne sont disponibles que si votre document est {{DOMxRef("Window.crossOriginIsolated","isolé inter-origines","","nocode")}}.

Pour utiliser ces fonctionnalités dans un document, vous devez définir l'en-tête COOP sur `same-origin` et l'en-tête {{HTTPHeader("Cross-Origin-Embedder-Policy")}} sur `require-corp` (ou `credentialless`).
De plus, la fonctionnalité ne doit pas être bloquée par {{HTTPHeader("Permissions-Policy/cross-origin-isolated","Permissions-Policy: cross-origin-isolated")}}.

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Vous pouvez utiliser les propriétés {{DOMxRef("Window.crossOriginIsolated")}} et {{DOMxRef("WorkerGlobalScope.crossOriginIsolated")}} pour vérifier si un document est isolé inter-origines et donc si les fonctionnalités sont restreintes&nbsp;:

```js
const monWorker = new Worker("worker.js");

if (crossOriginIsolated) {
  const tampon = new SharedArrayBuffer(16);
  monWorker.postMessage(tampon);
} else {
  const tampon = new ArrayBuffer(16);
  monWorker.postMessage(tampon);
}
```

### Rompre la relation avec l'ouverture

Considérez une origine hypothétique `example.com` qui héberge deux applications très différentes sur la même origine&nbsp;:

- Une application de chat à `/chat` qui permet à n'importe quel utilisateur·ice de contacter n'importe quel autre utilisateur·ice et de lui envoyer des messages.
- Une application de gestion de mots de passe à `/passwords` qui contient tous les mots de passe de l'utilisateur·ice,es mots de passes pour différents services.

Les administrateur·ice·s de l'application «&nbsp;des mots de passe&nbsp;» souhaiteraient s'assurer qu'elle ne peut pas être scriptée directement par l'application de chat, qui, de par sa nature, a une surface XSS plus importante.
La «&nbsp;bonne solution&nbsp;» pour isoler ces applications serait de les héberger sur des origines différentes, mais dans certains cas ce n'est pas possible, et ces deux applications doivent rester sur une même origine pour des raisons historiques, commerciales ou de marque.

L'en-tête `Cross-Origin-Opener-Policy: noopener-allow-popups` peut être utilisé pour s'assurer qu'un document ne peut pas être scripté par un document qui l'ouvre.

Si `example.com/passwords` est servi avec `noopener-allow-popups`, le `WindowProxy` renvoyé par {{DOMxRef("Window.open()")}} indiquera que la fenêtre est fermée ({{DOMxRef("Window.closed")}} est `true`), de sorte que l'ouvreur ne peut pas exécuter de scripts dans l'application de gestion des mots de passe&nbsp;:

```js
const handle = window.open("example.com/passwords", "passwordTab");
if (windowProxy.closed) {
  // La nouvelle fenêtre est fermée, elle ne peut donc pas être scriptée.
}
```

Notez que cela seul n'est pas considéré comme une mesure de sécurité suffisante.
Le site devrait également faire ce qui suit&nbsp;:

- Utiliser Fetch Metadata pour bloquer les requêtes same-origin vers l'application la plus sensible qui ne sont pas des requêtes de navigation.
- S'assurer que leurs cookies d'authentification sont tous `HttpOnly`.
- S'assurer que des Service Workers au niveau racine ne sont pas installés par l'application moins sensible.
- S'assurer que `postMessage` ou `BroadcastChannel` sur l'application la plus sensible n'exposent aucune information sensible à toute autre application de la même origine.
- Servir leur page de connexion sur une origine distincte, car le remplissage automatique des gestionnaires de mots de passe est appliqué en fonction de l'origine.
- Comprendre que le navigateur peut toujours allouer l'application la plus sensible dans le même processus que la moins sensible, la rendant vulnérable à des attaques de type Spectre.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Cross-Origin-Embedder-Policy")}}
