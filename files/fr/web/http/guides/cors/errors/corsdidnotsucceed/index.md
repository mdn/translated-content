---
title: "Raison: La requête CORS a échoué"
slug: Web/HTTP/Guides/CORS/Errors/CORSDidNotSucceed
l10n:
  sourceCommit: f0080356e5e8c38fda6ad867945371f75861969b
---

## Raison

```plain
Raison: La requête CORS a échoué
```

En anglais&nbsp;:

```plain
Reason: CORS request did not succeed
```

## Quel est le problème ?

La requête {{Glossary("HTTP")}} qui utilise le CORS a échoué parce que la connexion HTTP a échoué soit au niveau du réseau, soit au niveau du protocole. L'erreur n'est pas directement liée au CORS, mais constitue une erreur réseau fondamentale.

Dans de nombreux cas, elle est causée par un plugin de navigateur (par exemple, un bloqueur de publicités ou un protecteur de la vie privée) qui bloque la requête.

## Comment résoudre le problème

- Vérifiez DevTools > Réseau pour voir si la requête a échoué en raison de la résolution DNS, d'un délai d'attente, d'une connexion refusée ou d'une erreur de poignée de main TLS.
- Désactivez les extensions de navigateur ou essayez une fenêtre de navigation privée, car les bloqueurs de publicités, les pare-feu et les outils de confidentialité peuvent bloquer les requêtes réseau.
- Corrigez les problèmes de certificat ou de {{Glossary("TLS")}}, tels que les certificats expirés ou invalides.
- Évitez le contenu mixte&nbsp;: si la page est chargée par HTTPS, les requêtes vers des ressources HTTP peuvent échouer.
  Servez l'API avec HTTPS à la place.
- Confirmez que le serveur répond correctement et que le point de terminaison retourne une réponse.

Si vous utilisez un serveur de développement local, assurez-vous que le schéma et le port corrects sont utilisés et que le service est en cours d'exécution.

D'autres causes possibles incluent&nbsp;:

- Tenter d'accéder à une ressource `https` avec un certificat invalide provoque cette erreur.
- Tenter d'accéder à une ressource `http` depuis une page avec une origine `https` provoque également cette erreur.
- De Firefox 68 à Firefox 84, les pages `https` n'étaient pas autorisées à accéder à `http://localhost`.
  Cela a été modifié avec [bogue 1488740 <sup>(angl.)</sup>](https://bugzil.la/1488740).
- Le serveur n'a pas répondu à la requête réelle (même s'il a répondu à la {{Glossary("Preflight request", "requête préliminaire")}}).
  Un scénario possible est un service HTTP en cours de développement qui a paniqué sans retourner de données.
- La fenêtre est en mode «&nbsp;Navigation privée&nbsp;» (ce qui peut avoir des exigences de sécurité pouvant bloquer une requête CORS).

## Voir aussi

- [Les erreurs CORS](/fr/docs/Web/HTTP/Guides/CORS/Errors)
- L'entrée du glossaire {{Glossary("CORS")}}
- [Introduction au CORS](/fr/docs/Web/HTTP/Guides/CORS)
