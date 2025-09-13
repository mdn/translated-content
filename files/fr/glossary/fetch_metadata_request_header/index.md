---
title: En-tête de métadonnées de requête de récupération
slug: Glossary/Fetch_metadata_request_header
l10n:
  sourceCommit: 35bb8cea8badfbc1b3fffbd0ade2699893dc8fe1
---

{{GlossarySidebar}}

Un **en-tête de métadonnées de requête de récupération** (<i lang="en">fetch metadata request header</i> en anglais) est un [en-tête de requête HTTP](/fr/docs/Glossary/Request_header) qui fournit des informations supplémentaires sur le contexte d'origine de la requête. Cela permet au serveur de décider si une requête doit être autorisée selon son emplacement d'origine et la façon dont la ressource sera utilisée.

Grâce à ces informations, un serveur peut implémenter [une politique d'isolation des ressources](/fr/docs/Glossary/Resource_isolation_policy), pour limiter l'accès aux seules ressources partageables pour les sites externes, lorsque l'usage correspondant est respecté. Cette approche permet de réduire les risques des vulnérabilités entre sites différents, comme [CSRF](/fr/docs/Glossary/CSRF), <i lang="en">Cross-site Script Inclusion</i> (XSSI), les attaques temporelles, et les fuites d'information entre origines.

Ces en-têtes ont le préfixe `Sec-`, et sont donc des [noms d'en-tête interdits](/fr/docs/Glossary/Forbidden_request_header), qui ne peuvent pas être modifié depuis du code JavaScript.

Les en-têtes de métadonnées de requête de récupération sont&nbsp;:

- [`Sec-Fetch-Site`](/fr/docs/Web/HTTP/Headers/Sec-Fetch-Site)
- [`Sec-Fetch-Mode`](/fr/docs/Web/HTTP/Headers/Sec-Fetch-Mode)
- [`Sec-Fetch-User`](/fr/docs/Web/HTTP/Headers/Sec-Fetch-User)
- [`Sec-Fetch-Dest`](/fr/docs/Web/HTTP/Headers/Sec-Fetch-Dest)

Quant aux en-têtes de requêtes qui suivent, ils ne font pas _strictement_ partie des en-têtes de métadonnées de requête de récupération (au sens où ils ne font pas partie de la même spécification), mais fournissent également des informations sur la façon dont une ressource sera utilisée. Un serveur pourra utiliser les en-têtes suivants pour modifier son comportement de mise en cache ou les informations qui seront renvoyées&nbsp;:

- [`Sec-Purpose`](/fr/docs/Web/HTTP/Headers/Sec-Purpose){{Experimental_Inline}}
- [`Service-Worker-Navigation-Preload`](/fr/docs/Web/HTTP/Headers/Service-Worker-Navigation-Preload)

## Voir aussi

- [Protéger vos ressources des attaques web avec les en-têtes de métadonnées de requête (en anglais)](https://web.dev/articles/fetch-metadata)
- [Bac à sable pour les en-têtes de métadonnées de requête (en anglais)](https://secmetadata.appspot.com/)
- [Liste des en-têtes HTTP](/fr/docs/Web/HTTP/Reference/Headers)
- [En-têtes HTTP > En-têtes de métadonnées de requête](/fr/docs/Web/HTTP/Reference/Headers#en-têtes_de_requêtes_de_métadonnées)
- [Entrées du glossaire](/fr/docs/Glossary)
  - [En-tête de représentation](/fr/docs/Glossary/Representation_header)
  - [En-tête HTTP](/fr/docs/Glossary/HTTP_header)
  - [En-tête de réponse](/fr/docs/Glossary/Response_header)
  - [En-tête de requête](/fr/docs/Glossary/Request_header)
