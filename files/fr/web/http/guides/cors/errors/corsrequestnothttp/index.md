---
title: "Raison : La requête CORS n'utilise pas HTTP"
slug: Web/HTTP/Guides/CORS/Errors/CORSRequestNotHttp
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

## Raison

```plain
Raison : La requête CORS n'utilise pas HTTP
```

En anglais&nbsp;:

```plain
Reason: CORS request not HTTP
```

## Quel est le problème ?

Les requêtes {{Glossary("CORS")}} ne peuvent utiliser que le schéma d'URL HTTP ou HTTPS, mais l'URL définie dans la requête est d'un type différent.
Cela se produit souvent si l'URL définit un fichier local, en utilisant le schéma `file:///`.

Pour corriger ce problème, assurez-vous d'utiliser des URL HTTPS lors de requêtes impliquant du CORS, comme {{DOMxRef("Window/fetch", "fetch()")}}, {{DOMxRef("XMLHttpRequest")}}, les polices Web (`@font-face`), les [textures WebGL](/fr/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL) et les feuilles de style XSL.

### Charger un fichier local

Les fichiers locaux provenant du même répertoire et des sous-répertoires étaient historiquement considérés comme provenant de la [même origine](/fr/docs/Web/Security/Defenses/Same-origin_policy).
Cela signifiait qu'un fichier et toutes ses ressources pouvaient être chargés depuis un répertoire local ou un sous-répertoire lors des tests, sans déclencher d'erreur CORS.

Malheureusement, cela a des implications en matière de sécurité, comme indiqué dans cet avis&nbsp;: [CVE-2019-11730 <sup>(angl.)</sup>](https://www.mozilla.org/fr/security/advisories/mfsa2019-21/#CVE-2019-11730).
De nombreux navigateurs, y compris Firefox et Chrome, considèrent désormais que tous les fichiers locaux ont des _origines opaques_ (par défaut).
Par conséquent, le chargement d'un fichier local avec des ressources locales incluses entraîne désormais des erreurs CORS.

Les développeur·euse·s qui ont besoin de réaliser des tests locaux doivent désormais [mettre en place un serveur local](/fr/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server).
Comme tous les fichiers sont servis depuis le même schéma et le même domaine (`localhost`), ils ont tous la même origine et ne déclenchent pas d'erreurs inter-origines.

> [!NOTE]
> Ce changement est en accord avec [la spécification sur les URL <sup>(angl.)</sup>](https://url.spec.whatwg.org/#origin), qui laisse l'implémentation libre du comportement quant à l'origine des fichiers, mais qui recommande, en cas de doute, de considérer les origines des fichiers comme opaques.

## Voir aussi

- [Les erreurs CORS](/fr/docs/Web/HTTP/Guides/CORS/Errors)
- [Introduction au CORS](/fr/docs/Web/HTTP/Guides/CORS)
- [Qu'est-ce qu'une URL&nbsp;?](/fr/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)
