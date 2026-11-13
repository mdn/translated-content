---
title: Cadre intégré sans identifiants
slug: Web/HTTP/Guides/IFrame_credentialless
l10n:
  sourceCommit: 11a5944cd0a3bf015b2ee9c7ee4c55025dd878ca
---

{{SeeCompatTable}}

Un **cadre intégré sans identifiants** fournit un mécanisme permettant aux développeur·euse·s de charger des ressources tierces dans des {{HTMLElement("iframe")}} en utilisant un nouveau contexte éphémère. Il n'a pas accès au réseau, aux cookies et aux données de stockage de son origine habituelle. Il utilise un nouveau contexte local à la durée de vie du document de premier niveau. En retour, les règles d'intégration du {{HTTPHeader("Cross-Origin-Embedder-Policy")}} (COEP) peuvent être levées, de sorte que les documents avec COEP défini peuvent intégrer des documents tiers qui ne le sont pas.

## Le problème

Certaines fonctionnalités des API Web ne peuvent être utilisées que sur des sites qui choisissent l'isolation inter-origines — des exemples incluent {{JSxRef("SharedArrayBuffer")}} et {{DOMxRef("DOMHighResTimeStamp", "une minuterie haute résolution", "", "nocode")}}. C'est dû au risque que ces fonctionnalités soient exploitées dans des [attaques Spectre <sup>(angl.)</sup>](https://spectreattack.com/spectre.pdf), où les informations confidentielles d'une victime peuvent être divulguées par un canal secondaire et capturées par un·e attaquant·e.

Pour choisir l'isolation inter-origines, une ressource doit être servie avec un {{HTTPHeader("Cross-Origin-Opener-Policy")}} ayant pour valeur `same-origin` (protège votre origine contre les attaquant·e·s) et un {{HTTPHeader("Cross-Origin-Embedder-Policy")}} ayant pour valeur `credentialless` ou `require-corp` (protège les victimes de votre origine). Ce dernier empêche un document de charger des ressources inter-origines avec identifiants qui n'accordent pas explicitement l'autorisation au document en utilisant {{HTTPHeader("Cross-Origin-Resource-Policy")}} ou [de partage de ressources entre origines](/fr/docs/Web/HTTP/Guides/CORS).

Le principal problème limitant l'adoption de l'isolation inter-origines est le fait que `Cross-Origin-Embedder-Policy` est appliqué de manière récursive — tout contenu tiers chargé dans des `<iframe>` d'un document avec un `Cross-Origin-Embedder-Policy` défini doit également déployer `Cross-Origin-Embedder-Policy` pour que l'intégration réussisse. C'est un problème pour les développeur·euse·s intégrant du contenu tiers dans leurs applications (comme le contenu des régies publicitaires), car ils n'ont généralement aucun contrôle dessus — leur seul choix jusqu'à présent a été d'attendre que les fournisseurs de contenu tiers mettent en œuvre `Cross-Origin-Embedder-Policy`.

Ce problème peut être résolu grâce au cadre intégré sans identifiants.

## La solution — Les cadres intégrés sans identifiants

Un `<iframe>` est rendu sans identifiants en appliquant l'attribut [`credentialless`](/fr/docs/Web/HTML/Reference/Elements/iframe#credentialless) ou en définissant la propriété DOM équivalente — {{DOMxRef("HTMLIFrameElement.credentialless")}} — sur `true`.

```html
<iframe
  src="https://fr.wikipedia.org/wiki/Spectre_(vuln%C3%A9rabilit%C3%A9)"
  title="Spectre (vulnérabilité) — Wikipedia"
  width="960"
  height="600"
  credentialless></iframe>
```

Ou&nbsp;:

```html
<iframe width="960" height="600"> </iframe>
```

```js
const elemCadreIntegre = document.querySelector("iframe");

elemCadreIntegre.credentialless = true;
elemCadreIntegre.title = "Spectre (vulnérabilité) — Wikipedia";
elemCadreIntegre.src =
  "https://fr.wikipedia.org/wiki/Spectre_(vuln%C3%A9rabilit%C3%A9)";
```

> [!NOTE]
> La propriété {{DOMxRef("window.credentialless")}} peut être interrogée par un document intégré dans un `<iframe>` pour tester s'il s'exécute dans un contexte sans informations d'identification. Une valeur de `true` signifie que le `<iframe>` d'intégration est sans informations d'identification.

Cela entraîne le chargement des documents à l'intérieur du `<iframe>` sans informations d'identification en utilisant de nouveaux contextes éphémères — ces contextes n'ont pas accès aux données associées à leurs origines&nbsp;; par exemple les [cookies](/fr/docs/Web/HTTP/Guides/Cookies) et le [stockage local](/fr/docs/Web/API/Window/localStorage). Le stockage sans informations d'identification est partitionné séparément avec des clés de stockage modifiées par une valeur {{Glossary("Nonce", "nombre unique")}} (ou «&nbsp;nombre utilisé une fois&nbsp;»), définie une fois par document de premier niveau. Ainsi, un cookie défini dans un `<iframe>` sans informations d'identification n'est accessible que depuis d'autres `<iframe>` sans informations d'identification de même origine intégrés sous le même document de premier niveau.

Le nombre unique est partagé pour chaque `<iframe>` sans informations d'identification qui est un descendant du même document de premier niveau, mais il est différent pour chaque document de premier niveau distinct vers lequel l'utilisateur·ice navigue, et n'est plus accessible une fois que l'utilisateur·ice a navigué ailleurs. Les `<iframe>` sans informations d'identification ne partagent pas le stockage entre différentes pages. Pour revenir au cookie mentionné ci-dessus, le rechargement du document charge les `<iframe>` sans informations d'identification dans un contexte différent, de sorte qu'aucun des cookies précédemment définis n'est disponible.

De plus&nbsp;:

- Les fenêtres intrusives (<i lang="en">pop-up</i> en anglais) ouvertes par des cadres intégrés sans identifiants s'ouvrent avec l'attribut [`rel="noopener"`](/fr/docs/Web/HTML/Reference/Attributes/rel/noopener) défini. Cela empêche l'utilisation des flux OAuth par fenêtre contextuelle dans les cadres intégrés sans identifiants.
- Les fonctionnalités de remplissage automatique du navigateur ou de gestionnaire de mots de passe ne sont pas disponibles dans les `<iframe>` sans authentification.

Il en résulte que les documents chargés dans des cadres intégré (`<iframe>`) sans authentification sont en réalité des versions standard ou «&nbsp;publiques&nbsp;», qui ne contiennent aucune information sensible relative à un·e utilisateur·ice. Étant donné qu'aucune information sensible susceptible d'être divulguée n'est présente dans ces documents, ceux-ci ne présentent aucun intérêt pour les attaquant·e·s potentiel·le·s, et l'exigence relative à la politique d'intégration inter-origines est donc supprimée pour ces cadres intégré.

## Absence d'identifiants récursifs à l'intérieur des cadres intégrés enfants

Si l'attribut `credentialless` est défini sur un `<iframe>` qui contient des `<iframe>` enfants intégrés dans le document chargé à l'intérieur, ces `<iframe>` enfants héritent du paramètre sans informations d'identification.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Cross-Origin-Opener-Policy")}}
- L'en-tête {{HTTPHeader("Cross-Origin-Embedder-Policy")}}
- L'en-tête {{HTTPHeader("Cross-Origin-Resource-Policy")}}
- [Partage de ressources entre origines](/fr/docs/Web/HTTP/Guides/CORS)
- L'attribut `<iframe>` [`credentialless`](/fr/docs/Web/HTML/Reference/Elements/iframe#credentialless)
- La propriété API {{DOMxRef("HTMLIFrameElement.credentialless")}}
