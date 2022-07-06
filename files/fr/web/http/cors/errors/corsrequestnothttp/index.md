---
title: "Raison : la requête CORS n'utilise pas HTTP"
slug: Web/HTTP/CORS/Errors/CORSRequestNotHttp
translation_of: Web/HTTP/CORS/Errors/CORSRequestNotHttp
---
{{HTTPSidebar}}

## Message

```http
Raison : la requête CORS n'utilise pas HTTP
```

En anglais&nbsp;:

```http
Reason: CORS request not HTTP
```

## Quel est le problème&nbsp;?

Les requêtes [CORS](/fr/docs/Glossary/CORS) peuvent uniquement utiliser les schémas d'URL HTTP ou HTTPS et l'URL indiquée dans la requête est d'un type différent.

Cela se produit généralement lorsque l'URL pointe vers un fichier local et utilise le schéma `file:///`.

Pour corriger ce problème, assurez-vous d'utiliser des URL HTTPS lors de requêtes impliquant du CORS (comme les requêtes [`XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest), [`fetch()`](/fr/docs/Web/API/Fetch_API), celles pour les polices de caractères (`@font-face`), [les textures WebGL](/fr/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL), et les feuilles de style XSL).

### Chargement d'un fichier local

Les fichiers locaux appartenant au même répertoire et aux sous-répertoires étaient, par le passé, considérés comme provenant de la [même origine](/fr/docs/Web/Security/Same-origin_policy).

Cela signifiait qu'un fichier et l'ensemble de ses ressources attachées pouvaient être chargés depuis un répertoire local (et les sous-répertoires associés) lors des tests, sans déclencher d'erreur CORS.

Toutefois, cela a eu des conséquences en termes de sécurité (voir ce bulletin d'alerte&nbsp;: [CVE-2019-11730](https://www.mozilla.org/fr/security/advisories/mfsa2019-21/#CVE-2019-11730)).

De nombreux navigateurs, comme Firefox et Chrome, considèrent désormais que les fichiers locaux ont, par défaut, _des origines opaques_.
Par conséquent, le chargement d'un fichier local utilisant des ressources locales entraînera désormais des erreurs CORS.

Les développeuses et développeurs qui doivent réaliser des tests en local doivent désormais [mettre en place un serveur local](/fr/docs/Learn/Common_questions/set_up_a_local_testing_server).

De cette façon, l'ensemble des fichiers est servi depuis le même domaine (`localhost`) et avec le même schéma&nbsp;: ils ont la même origine et ne déclenchent plus d'erreurs liées à la multiplicité des origines.

> **Note :** Ce changement est en accord avec [la spécification sur les URL](https://url.spec.whatwg.org/#origin), qui laisse l'implémentation libre du comportement quant à l'origine des fichiers, mais qui recommande, en cas de doute, de considérer les origines des fichiers comme opaques.

## Voir aussi

- [Les erreurs relatives au CORS](/fr/docs/Web/HTTP/CORS/Errors)
- [Introduction au CORS](/fr/docs/Web/HTTP/CORS)
- [Qu'est-ce qu'une URL&nbsp;?](/fr/docs/Learn/Common_questions/What_is_a_URL)
