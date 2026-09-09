---
title: Falsification de requêtes côté serveur (SSRF)
slug: Web/Security/Attacks/SSRF
l10n:
  sourceCommit: 2290fdbf9d5cf68482245d07d388b883156058ac
---

Les **falsifications de requêtes côté serveur (SSRF)** sont des vulnérabilités qui permettent à un·e attaquant·e d'effectuer des requêtes réseau vers des destinations arbitraires. Le SSRF fait en sorte que ces requêtes proviennent du serveur lui-même, qui dispose généralement d'un accès plus large que celui d'un client externe.

Cela peut permettre à un·e attaquant·e d'accéder à des ressources sensibles ou d'effectuer d'autres actions non autorisées.

## Scénario d'exemple

Supposons que votre application dispose d'un point de terminaison qui récupère des images à partir d'une URL fournie&nbsp;:

```http
GET /fetch-image?url=https://example.com/image.png
```

Le serveur a accès à l'intranet de l'entreprise.

Si le serveur ne valide pas le paramètre URL fourni, le client peut alors extraire des données sensibles en passant des URL de l'intranet à l'API&nbsp;:

```js
fetch("https://example.org/fetch-image?url=http://localhost:443/admin/org.png");
```

Bien que le client ne puisse pas accéder directement à `http://localhost:443/`, le serveur le peut, et il relaie la réponse au client.

Le client n'a pas besoin de faire des requêtes HTTP&nbsp;: il peut être capable d'utiliser le protocole `file://`&nbsp;:

```js
fetch("https://example.org/fetch-image?url=file:///etc/passwd");
```

Dans ces cas, l'attaquant·e peut accéder à des données sensibles. Parfois, l'attaquant·e n'obtient pas le corps de la réponse, mais cela peut quand même poser des problèmes&nbsp;:

- En forçant le serveur à effectuer de nombreuses requêtes, un·e attaquant·e peut exécuter une attaque par {{Glossary("Denial of Service", "Déni de service (DoS)")}}.
- En examinant le code d'état retourné par le serveur ou le temps nécessaire pour exécuter les requêtes, l'attaquant·e peut déduire des informations sensibles sur la cible.

Les attaquant·e·s peuvent utiliser des redirections ou des chaînes de redirections pour contourner la validation. Par exemple, ils·elles peuvent posséder un domaine `https://evilexample.org/redirect` et tout ce que fait cet hôte est de rediriger vers `http://localhost:443/` ou d'autres URL (internes) contournant potentiellement la validation des entrées.

```js
fetch("https://example.org/fetch-image?url=https://evilexample.org/redirect");
```

## Se défendre contre les SSRF

Atténuer les vulnérabilités SSRF nécessite plusieurs stratégies de défense combinant la validation des entrées, la gestion attentive des réponses et une architecture réseau sécurisée. Voici quelques approches clés&nbsp;:

### Valider les entrées et utiliser une liste autorisée

Restreignez les URL que l'API du serveur utilise. Par exemple, le service `fetch-image` discuté ci-dessus peut définir une liste autorisée contenant les domaines attendus&nbsp;:

```js
const DOMAINES_AUTORISES = [
  "https://api.example.com",
  "https://cdn.example.com",
];
```

### Bloquer les protocoles et les schémas d'URL

Assurez-vous que seuls des schémas d'URL spécifiques sont autorisés. Très probablement, n'autoriser que `https://` est suffisant pour les applications web classiques.

### Valider les redirections

Ne suivez pas automatiquement les redirections et appliquez également la validation des entrées et/ou la liste autorisée pour les URL redirigées. Limitez les chaînes de redirections.

### Moindre privilège et isolation

Assurez-vous que le service effectuant des requêtes sortantes ne dispose pas de privilèges supplémentaires inutiles et évitez de co-localiser des services capables de faire des requêtes avec des services internes sensibles.

## Liste de contrôle récapitulative des défenses

- Passez en revue toutes les fonctionnalités qui récupèrent des ressources et validez ou utilisez une liste autorisée pour les entrées utilisateur·ice·s.
- Bloquez tous les protocoles sauf HTTPS.
- Méfiez-vous des redirections d'URL et limitez les chaînes de redirections.
- Appliquez le principe du moindre privilège pour les autorisations réseau du serveur&nbsp;: idéalement, les serveurs ne doivent pas avoir un accès illimité aux réseaux internes sauf si nécessaire.
- Consignez et surveillez les requêtes.

## Voir aussi

- [Antisèche de prévention des falsifications de requêtes côté serveur <sup>(angl.)</sup>](https://cheatsheetseries.owasp.org/cheatsheets/Server_Side_Request_Forgery_Prevention_Cheat_Sheet.html)
