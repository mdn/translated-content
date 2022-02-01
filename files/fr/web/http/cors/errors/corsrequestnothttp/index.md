---
title: 'Reason: CORS request not HTTP'
slug: Web/HTTP/CORS/Errors/CORSRequestNotHttp
tags:
  - CORS
  - CORSRequestNotHttp
  - Cross-Origin
  - Dépannage
  - Erreur
  - HTTP
  - HTTPS
  - Messages
  - Raisons
  - Sécurité
  - console
translation_of: Web/HTTP/CORS/Errors/CORSRequestNotHttp
---
{{HTTPSidebar}}

## Raison

    Raison : la requête CORS n’utilise pas http.

## Qu'est ce qui n'a pas fonctionné ?

Les requêtes {{Glossary("CORS")}} ne peuvent utiliser que les URL HTTPS, mais l'URL spécifiée par la requête est d'un type différent. Cela se produit souvent si l'URL spécifie un fichier local, en utilisant un URL de la forme `file:///`.

Pour résoudre ce problème, assurez-vous simplement d'utiliser les URL HTTPS lorsque vous émettez des requêtes impliquant CORS , comme {{domxref("XMLHttpRequest")}}, [Fetch](/fr/docs/Web/API/Fetch_API) APIs, Web Fonts (`@font-face`), [WebGL textures](/fr/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL), et des stylesheets XSL.

### Sécurité des fichiers locaux dans Firefox 68

Lorsqu'un utilisateur ouvrait une page en utilisant un URI `file:///` dans Firefox 67 et antérieur, l'origine de la page était définie comme le répertoire à partir duquel la page était ouverte. Les ressources du même répertoire et de ses sous-répertoires étaient traitées comme ayant la même origine aux fins de la règle de la même origine de la CORS.

En réponse au [CVE-2019-11730](https://www.mozilla.org/en-US/security/advisories/mfsa2019-21/#CVE-2019-11730), Firefox 68 et les versions ultérieures définissent l'origine d'une page ouverte à l'aide d'un URI `file:///` comme unique. Par conséquent, les autres ressources du même répertoire ou de ses sous-répertoires ne satisfont plus à la règle de la même origine de la COROS. Ce nouveau comportement est activé par défaut en utilisant la préférence `privacy.file_unique_origin`.

## Voir aussi

- [Erreurs liées à CORS](/fr/docs/Web/HTTP/CORS/Errors)
- Glossaire: {{Glossary("CORS")}}
- [Introduction à CORS](/fr/docs/Web/HTTP/CORS)
- [C'est quoi une URL?](/fr/docs/Learn/Common_questions/What_is_a_URL)
