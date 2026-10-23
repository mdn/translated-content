---
title: Erreurs CORS
slug: Web/HTTP/Guides/CORS/Errors
l10n:
  sourceCommit: a8b5a77bb154e0c3a124fb4af441d11e4259836e
---

[Le partage des ressources entre origines multiples](/fr/docs/Web/HTTP/Guides/CORS) ({{Glossary("CORS")}}) est une norme qui permet à un serveur de relâcher la [politique de même origine](/fr/docs/Web/Security/Defenses/Same-origin_policy). C'est utilisé pour autoriser explicitement certaines requêtes inter-origines tout en en rejetant d'autres. Par exemple, si un site propose un service intégrable, il peut être nécessaire de relâcher certaines restrictions. Mettre en place une telle configuration CORS n'est pas nécessairement facile et peut présenter certains défis. Dans ces pages, nous examinons certains messages d'erreur CORS courants et comment les résoudre.

Si la configuration CORS n'est pas correctement mise en place, la console du navigateur affiche une erreur du type `"Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at [some site]"` indiquant que la requête a été bloquée pour violation des règles de sécurité CORS. Cela n'est pas nécessairement une erreur de configuration. Il est possible que la requête soit en fait intentionnellement refusée par l'application web de l'utilisateur·ice et le service externe distant. Cependant, si le point de terminaison est censé être disponible, un certain débogage est nécessaire pour réussir.

## Identifier un problème CORS

Pour comprendre la cause sous-jacente du problème de configuration CORS, il faut identifier quelle requête est en faute et pourquoi. Ces étapes peuvent vous aider à le faire&nbsp;:

1. Naviguez vers le site web ou l'application web en question et ouvrez les [Outils de développement <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/index.html).
2. Essayez ensuite de reproduire la transaction échouée et vérifiez la [console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) pour voir si un message d'erreur de violation CORS apparaît. Cela ressemble probablement à ceci&nbsp;:

![La console de Firefox affichant une erreur CORS](cors-error2.png)

Le texte du message d'erreur est similaire à ce qui suit&nbsp;:

```plain
Demande inter-origines bloquée : la politique de même origine interdit
l'accès à la ressource distante située à l'adresse https://une-url-ici.
(Raison : plus d'informations ici).
```

> [!NOTE]
> Pour des raisons de sécurité, les détails sur ce qui a mal tourné avec une requête CORS _ne sont pas disponibles pour le code JavaScript_. Tout ce que le code sait, c'est qu'une erreur s'est produite. La seule façon de déterminer ce qui a spécifiquement échoué est de consulter la console du navigateur pour obtenir des détails.

## Considérations côté client

La plupart des erreurs CORS ne peuvent être résolues que côté serveur, car c'est le serveur qui contrôle si l'accès inter-origines est autorisé. Cependant, il existe certaines actions que vous pouvez entreprendre côté client&nbsp;:

### Éviter de déclencher une requête préliminaire

Les navigateurs envoient une [requête préliminaire](/fr/docs/Web/HTTP/Guides/CORS#requêtes_préliminaires) avant la requête réelle lorsque certaines conditions sont remplies (en-têtes personnalisés, méthodes autres que `GET`/`HEAD`/`POST`, ou types de contenu non simples). Si le serveur ne gère pas les requêtes préliminaires, vous pouvez restructurer votre requête pour qu'elle soit considérée comme une [requête simple](/fr/docs/Web/HTTP/Guides/CORS#requêtes_simples)&nbsp;:

- N'utilisez que les méthodes `GET`, `HEAD` ou `POST`.
- N'utilisez que les [en-têtes de requête sécurisés CORS](/fr/docs/Glossary/CORS-safelisted_request_header) (comme {{HTTPHeader("Accept")}}, {{HTTPHeader("Content-Language")}} ou {{HTTPHeader("Content-Type")}}).
- N'utilisez que `application/x-www-form-urlencoded`, `multipart/form-data` ou `text/plain` pour {{HTTPHeader("Content-Type")}}.

Les requêtes simples contournent entièrement l'étape de pré-validation, ce qui évite une catégorie d'erreurs CORS liées à la gestion des requêtes préliminaires.

### Utiliser le mode `no-cors` pour les réponses opaques

Si vous n'avez pas besoin de lire le corps ou les en-têtes de la réponse - par exemple, lors de l'envoi de balises d'analyse ou du chargement de ressources dans un cache avec un service worker - vous pouvez définir le {{DOMxRef("Request/mode", "mode")}} sur `"no-cors"` dans un appel {{DOMxRef("Window/fetch", "fetch()")}}&nbsp;:

```js
fetch("https://api.example.com/log", {
  method: "POST",
  mode: "no-cors",
  body: data,
});
```

La réponse est [opaque](/fr/docs/Web/API/Response/type)&nbsp;: son statut est `0`, ses en-têtes sont vides et son corps n'est pas lisible par JavaScript. C'est une caractéristique inhérente à la fonctionnalité `no-cors` qui désactive la vérification CORS, mais en contrepartie, vous perdez tout accès au contenu de la réponse.

### Utiliser un serveur mandataire

Si vous ne contrôlez pas le serveur distant et que celui-ci ne définit pas d'en-têtes CORS, vous pouvez acheminer les requêtes par l'intermédiaire d'un serveur que vous contrôlez. Votre serveur récupère la ressource en votre nom et la retourne avec les en-têtes CORS appropriés. Cette approche ajoute de la latence et introduit une dépendance vis-à-vis de votre mandataire, mais elle fonctionne lorsque les autres options ne sont pas disponibles.

## Messages d'erreur CORS

Firefox affiche les erreurs dans la console lors d'échec de requête CORS. Ce message contient entre autres un champ «&nbsp;reason&nbsp;» donnant un meilleur contexte quant à la raison de l'échec de la requête. Ces messages sont listés ci-dessous; chacun de ces liens pointent vers un article plus spécifique et contenant des pistes de solution.

- [Raison&nbsp;: CORS désactivé](/fr/docs/Web/HTTP/Guides/CORS/Errors/CORSDisabled)
- [Raison&nbsp;: La requête CORS a échoué](/fr/docs/Web/HTTP/Guides/CORS/Errors/CORSDidNotSucceed)
- [Raison&nbsp;: L'en-tête CORS `Origin` ne peut pas être ajouté](/fr/docs/Web/HTTP/Guides/CORS/Errors/CORSOriginHeaderNotAdded)
- [Raison&nbsp;: Redirection externe de la requête CORS non autorisée](/fr/docs/Web/HTTP/Guides/CORS/Errors/CORSExternalRedirectNotAllowed)
- [Raison&nbsp;: La requête CORS n'utilise pas HTTP](/fr/docs/Web/HTTP/Guides/CORS/Errors/CORSRequestNotHttp)
- [Raison&nbsp;: L'en-tête CORS `Access-Control-Allow-Origin` est manquant](/fr/docs/Web/HTTP/Guides/CORS/Errors/CORSMissingAllowOrigin)
- [Raison&nbsp;: L'en-tête CORS `Access-Control-Allow-Origin` ne correspond pas à `xyz`](/fr/docs/Web/HTTP/Guides/CORS/Errors/CORSAllowOriginNotMatchingOrigin)
- [Raison&nbsp;: Les informations d'identification ne sont pas prises en charge si l'en-tête CORS `Access-Control-Allow-Origin` est `*`](/fr/docs/Web/HTTP/Guides/CORS/Errors/CORSNotSupportingCredentials)
- [Raison&nbsp;: Méthode introuvable dans l'en-tête CORS `Access-Control-Allow-Methods`](/fr/docs/Web/HTTP/Guides/CORS/Errors/CORSMethodNotFound)
- [Raison&nbsp;: `true` attendu dans l'en-tête CORS `Access-Control-Allow-Credentials`](/fr/docs/Web/HTTP/Guides/CORS/Errors/CORSMissingAllowCredentials)
- [Raison&nbsp;: Échec du canal de pré-validation CORS](/fr/docs/Web/HTTP/Guides/CORS/Errors/CORSPreflightDidNotSucceed)
- [Raison&nbsp;: Jeton `xyz` invalide dans l'en-tête CORS `Access-Control-Allow-Methods`](/fr/docs/Web/HTTP/Guides/CORS/Errors/CORSInvalidAllowMethod)
- [Raison&nbsp;: Jeton `xyz` invalide dans l'en-tête CORS `Access-Control-Allow-Headers`](/fr/docs/Web/HTTP/Guides/CORS/Errors/CORSInvalidAllowHeader)
- [Raison&nbsp;: Jeton `xyz` manquant dans l'en-tête CORS `Access-Control-Allow-Headers` du canal de pré-validation CORS](/fr/docs/Web/HTTP/Guides/CORS/Errors/CORSMissingAllowHeaderFromPreflight)
- [Raison&nbsp;: Plusieurs en-têtes CORS `Access-Control-Allow-Origin` ne sont pas autorisés](/fr/docs/Web/HTTP/Guides/CORS/Errors/CORSMultipleAllowOriginNotAllowed)

## Voir aussi

- L'entrée du glossaire {{Glossary("CORS")}}
- [Introduction au CORS](/fr/docs/Web/HTTP/Guides/CORS)
- [Paramètres CORS côté serveur](/fr/docs/Web/HTTP/Guides/CORS)
- [Image compatible CORS](/fr/docs/Web/HTML/How_to/CORS_enabled_image)
- [Attributs des paramètres CORS](/fr/docs/Web/HTML/Reference/Attributes/crossorigin)
