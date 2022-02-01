---
title: CORS errors
slug: Web/HTTP/CORS/Errors
tags:
  - CORS
  - Errors
  - HTTP
  - HTTPS
  - Messages
  - Same-origin
  - Security
  - TopicStub
  - console
  - troubleshooting
translation_of: Web/HTTP/CORS/Errors
---
{{HTTPSidebar}}

[Cross-Origin Resource Sharing](/en-US/docs/Web/HTTP/CORS) ({{Glossary("CORS")}}) est une norme qui permet à un serveur d'assouplir la [politique de même origine](/en-US/docs/Web/Security/Same-origin_policy).

Celle-ci est utilisée pour autoriser explicitement certaines requêtes provenant d'autres sources tout en en rejetant d'autres. Par exemple, si un site offre un service intégrable, il peut être nécessaire d'assouplir certaines restrictions. La configuration d'une telle configuration CORS n'est pas nécessairement facile et peut présenter certains défis. Dans ces pages, nous examinerons quelques messages d'erreur CORS courants et comment les résoudre.

Si la configuration CORS n'est pas correctement effectuée, la console du navigateur affichera une erreur du type `"Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at $somesite"` (`"Requête Cross-Origin bloquée : La politique de même origine interdit la lecture de la ressource distante à $somesite"` en français) indiquant que la demande a été bloquée en raison d'une violation des règles de sécurité de CORS. Cependant, ce n'est pas nécessairement une erreur de configuration. Il est possible que la demande soit en fait intentionnellement refusée par l'application web de l'utilisateur et le service externe distant. Toutefois, si le terminal est destiné à être disponible, un certain débogage est nécessaire pour y parvenir.

## Identifier le problème

Pour saisir la cause de l'erreur, il faut préalablement découvrir la requête fautive, ainsi que la configuration erronée. Ces étapes peuvent être utiles au processus:

1.  Rendez-vous sur le site défaillant et ouvrez les [Developer Tools](/en-US/docs/Tools).
2.  Essayez de reproduir la requête qui échoue et vérifiez la [console](/en-US/docs/Tools/Web_Console) pour trouver les messages de violation CORS, ce qui tournerait autours de:

![Firefox console showing CORS error](cors-error2.png)

Le text de l'erreur sera probablement similaire à:

    Cross-Origin Request Blocked: The Same Origin Policy disallows
    reading the remote resource at https://some-url-here. (Reason:
    additional information here).

> **Note :** Pour des raisons de sécurité, il _est impossible_ d'analyser les causes de l'erreur CORS via JavaScript. Seule une indication de l'échec de la requête sera fournie. Il faut donc absolument regarder manuellement les messages d'erreur de la console pour débugger.

## Messages d'erreur CORS

Firefox affiche les erreurs dans la console lors d'échec de requête CORS. Ce message contient entre autres un champ "reason" donnant un meilleur contexte quant à la raison de l'échec de la requête. Ces messages sont listés ci-dessous; chacun de ces liens pointent vers un article plus spécifique et contenant des pistes de solution.

- [Raison: CORS désactivé](/en-US/docs/Web/HTTP/CORS/Errors/CORSDisabled)
- [Raison: la requête CORS a échoué](/en-US/docs/Web/HTTP/CORS/Errors/CORSDidNotSucceed)
- [Raison: l'en-tête CORS ‘Origin’ ne peut pas être ajouté](/en-US/docs/Web/HTTP/CORS/Errors/CORSOriginHeaderNotAdded)
- [Raison: Requête CORS redirection externe non autorisée](/en-US/docs/Web/HTTP/CORS/Errors/CORSExternalRedirectNotAllowed)
- [Raison: Requête CORS non http](/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp)
- [Raison: En-tête CORS ‘Access-Control-Allow-Origin’ manquant](/en-US/docs/Web/HTTP/CORS/Errors/CORSMissingAllowOrigin)
- [Raison: l'en-tête CORS ‘Access-Control-Allow-Origin’ ne correspond pas à ‘xyz’](/en-US/docs/Web/HTTP/CORS/Errors/CORSAllowOriginNotMatchingOrigin)
- [Raison: les informations d'identification ne sont pas prises en charge si l'en-tête CORS ‘Access-Control-Allow-Origin’ est ‘\*’](/en-US/docs/Web/HTTP/CORS/Errors/CORSNotSupportingCredentials)
- [Raison: Méthode introuvable dans l'en-tête CORS 'Access-Control-Allow-Methods’](/en-US/docs/Web/HTTP/CORS/Errors/CORSMethodNotFound)
- [Raison: ‘true’ attendu dans l'en-tête CORS ‘Access-Control-Allow-Credentials’](/en-US/docs/Web/HTTP/CORS/Errors/CORSMissingAllowCredentials)
- [Raison: Échec du canal de contrôle en amont CORS](/en-US/docs/Web/HTTP/CORS/Errors/CORSPreflightDidNotSucceed)
- [Raison: jeton ‘xyz’ non valide dans l'en-tête CORS ‘Access-Control-Allow-Methods’](/en-US/docs/Web/HTTP/CORS/Errors/CORSInvalidAllowMethod)
- [Raison: jeton ‘xyz’ non valide dans l'en-tête CORS ‘Access-Control-Allow-Headers’](/en-US/docs/Web/HTTP/CORS/Errors/CORSInvalidAllowHeader)
- [Raison: jeton ‘xyz’ manquant dans l'en-tête CORS ‘Access-Control-Allow-Headers’ du canal de contrôle en amont CORS](/en-US/docs/Web/HTTP/CORS/Errors/CORSMissingAllowHeaderFromPreflight)
- [Raison: plusieurs en-têtes CORS ‘Access-Control-Allow-Origin’ ne sont pas autorisés](/en-US/docs/Web/HTTP/CORS/Errors/CORSMultipleAllowOriginNotAllowed)

## Voir aussi

- Glossaire: {{Glossary("CORS")}}
- [CORS introduction](/en-US/docs/Web/HTTP/CORS)
- [Paramètres CORS côté serveur](/en-US/docs/Web/HTTP/Server-Side_Access_Control)
- [Image compatible CORS](/en-US/docs/Web/HTML/CORS_enabled_image)
- [Attributs des paramètres CORS](/en-US/docs/Web/HTML/CORS_settings_attributes)
- <https://www.test-cors.org> – une page pour tester les requêtes CORS
