---
title: Origine
slug: Glossary/Origin
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

L'**origine** d'une application web est définie par le schéma (protocole), l'hôte (domaine) et le port de l'{{Glossary("URL")}} utilisée pour y accéder. Deux objets ont la même origine seulement quand le schéma, l'hôte et le port correspondent.

Quelques opérations sont limitées au contenu de même origine, et cette restriction peut être levée avec {{Glossary("CORS")}}.

## Origine opaque

Une origine opaque est un type spécial de valeur interne au navigateur qui masque la véritable origine d'une ressource (les origines opaques sont toujours sérialisées sous la forme `null`). Elles sont utilisées par le navigateur pour garantir l'isolation des ressources, car elles ne sont jamais considérées comme équivalentes à une autre origine — y compris à d'autres origines opaques.

Les origines opaques s'appliquent lorsque la véritable origine d'une ressource est sensible, ne peut pas être utilisée en toute sécurité pour des contrôles de sécurité, ou n'existe pas.
Une ressource ayant une origine opaque verra son en‑tête HTTP {{HTTPHeader("Origin")}} dans les requêtes défini sur [`null`](/fr/docs/Web/HTTP/Reference/Headers/Origin#null).
Elle échouera également aux vérifications de même origine avec toute autre ressource, et sera donc limitée aux seules opérations disponibles pour les ressources inter-origines.

Parmi les cas courants d'utilisation des origines opaques figurent&nbsp;:

- Un document contenu dans un cadre intégré (_iframe_) qui a l'attribut [sandbox](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/sandbox) défini, et qui n'inclut pas le drapeau `allow-same-origin`.
- Les URL `file:` sont généralement traitées comme des origines opaques afin d'empêcher que les fichiers du système de fichiers ne puissent se lire mutuellement.
- Les documents créés de manière programmatique à l'aide d'API telles que {{DOMxRef("DOMImplementation.createDocument()")}}.

## Exemples

Les URL qui suivent partagent la même origine car elles ont le même schéma (`http`), nom d'hôte (`exemple.com`), et que les chemins de fichiers différents n'importent pas&nbsp;:

- `http://exemple.com/app1/index.html`
- `http://exemple.com/app2/index.html`

Il s'agit ici de la même origine car le contenu HTTP est délivré, par défaut, via le port 80&nbsp;:

- `http://exemple.com:80`
- `http://exemple.com`

Ici, il ne s'agit pas de la même origine, car ce sont deux schémas différents&nbsp;:

- `http://exemple.com/app1`
- `https://exemple.com/app2`

Ce ne sont pas les mêmes origines pour les exemples qui suivent, car le nom d'hôte est différent&nbsp;:

- `http://exemple.com`
- `http://www.exemple.com`
- `http://monapp.exemple.com`

Les deux exemples qui suivent ne sont pas de la même origine, car les ports sont différents&nbsp;:

- `http://exemple.com`
- `http://exemple.com:8080`

## Voir aussi

- [Politique de même origine](/fr/docs/Web/Security/Defenses/Same-origin_policy)
- Terme associé du glossaire&nbsp;:
  - {{Glossary("Site")}}
- [Spécification HTML&nbsp;: origine <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/origin.html#origin)
