---
title: 418 I'm a teapot
slug: Web/HTTP/Reference/Status/418
l10n:
  sourceCommit: 8654d0983add0e93af8c754e76ba9e3d56fe79be
---

Le code de statut HTTP **`418 I'm a teapot`** («&nbsp;Je suis une théière&nbsp;») indique que le serveur refuse de préparer du café car il est, de façon permanente, une théière.
Une cafetière/théière combinée temporairement à court de café doit plutôt retourner {{HTTPStatus("503")}}.
Cette erreur fait référence au Hyper Text Coffee Pot Control Protocol défini dans les poissons d'avril de 1998 et 2014.

Bien qu'initialement défini dans la [RFC 2324 <sup>(angl.)</sup>](https://www.rfc-editor.org/rfc/rfc2324) comme une blague du 1er avril, ce code de statut a été officiellement réservé dans la [RFC 9110 <sup>(angl.)</sup>](https://www.rfc-editor.org/rfc/rfc9110) en raison de sa large utilisation comme blague, il ne peut donc pas recevoir de sémantique sérieuse dans un avenir prévisible.

Certains sites web utilisent cette réponse pour des requêtes qu'ils ne souhaitent pas traiter, comme les requêtes automatisées.

## Statut

```http
418 I'm a teapot
```

## Spécifications

{{Specifications}}

## Voir aussi

- [Les codes de statut de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
- [Hyper Text Coffee Pot Control Protocol sur Wikipédia](https://fr.wikipedia.org/wiki/Hyper_Text_Coffee_Pot_Control_Protocol)
