---
title: En-tête de métadonnées de requête de récupération
slug: Glossary/Fetch_metadata_request_header
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Un **en-tête de métadonnées de requête de récupération** (<i lang="en">fetch metadata request header</i> en anglais) est un {{Glossary("Request header", "en-tête de requête HTTP")}} qui fournit des informations supplémentaires sur le contexte d'origine de la requête. Cela permet au serveur de décider si une requête doit être autorisée selon son emplacement d'origine et la façon dont la ressource sera utilisée.

Avec ces informations, un serveur peut mettre en œuvre une politique d'isolation des ressources, permettant aux sites externes de demander uniquement les ressources destinées au partage et utilisées de manière appropriée. Cette approche peut aider à atténuer des vulnérabilités web courantes entre sites, telles que les attaques de type {{Glossary("CSRF")}}, l'inclusion de scripts intersites (XSSI), les attaques par temporisation et les fuites d'informations entre origines.

Ces en-têtes sont préfixés par `Sec-` et sont donc des {{Glossary("Forbidden request header", "en-têtes de requête interdits")}}. En tant que tels, ils ne peuvent pas être modifiés depuis JavaScript.

Les en-têtes de métadonnées de requête de récupération sont&nbsp;:

- {{HTTPHeader("Sec-Fetch-Site")}}
- {{HTTPHeader("Sec-Fetch-Mode")}}
- {{HTTPHeader("Sec-Fetch-User")}}
- {{HTTPHeader("Sec-Fetch-Dest")}}

Les en-têtes de requête suivants ne sont pas _strictement_ des «&nbsp;en-têtes de métadonnées de requête de récupération&nbsp;», car ils ne font pas partie de la même spécification, mais fournissent également des informations sur le contexte d'utilisation d'une ressource.
Un serveur peut les utiliser pour modifier son comportement de mise en cache ou les informations qui seront renvoyées&nbsp;:

- {{HTTPHeader("Sec-Purpose")}}
- {{HTTPHeader("Service-Worker-Navigation-Preload")}}

## Voir aussi

- [Liste des en-têtes HTTP](/fr/docs/Web/HTTP/Reference/Headers)
- [En-têtes HTTP > En-têtes de métadonnées de requête](/fr/docs/Web/HTTP/Reference/Headers#en-têtes_de_requêtes_de_métadonnées)
- Termes associés du glossaire&nbsp;:
  - {{Glossary("Representation header", "En-tête de représentation")}}
  - {{Glossary("HTTP_header", "En-tête HTTP")}}
  - {{Glossary("Response header", "En-tête de réponse")}}
  - {{Glossary("Request header", "En-tête de requête")}}
- [Protéger vos ressources des attaques web avec les en-têtes de métadonnées de requête <sup>(angl.)</sup>](https://web.dev/articles/fetch-metadata) sur web.dev
- [Bac à sable pour les en-têtes de métadonnées de requête <sup>(angl.)</sup>](https://secmetadata.appspot.com/) sur secmetadata.appspot.com
