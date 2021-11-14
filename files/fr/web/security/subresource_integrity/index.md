---
title: Subresource Integrity
slug: Web/Security/Subresource_Integrity
tags:
  - Intro
  - Sécurité
translation_of: Web/Security/Subresource_Integrity
---
**_Subresource Integrity_** (SRI, ou « Intégrité des sous-ressources ») est une fonction de sécurité qui permet aux navigateurs de vérifier que les fichiers qu'ils vont chercher (par exemple, à partir d'un [CDN](/fr/docs/Glossaire/CDN)) sont livrés sans manipulation inattendue. Cela fonctionne en permettant de fournir un hachage cryptographique (« _hash_ ») auquel le fichier récupéré doit correspondre.

## Comment fonctionne le contrôle d'intégrité des sous-ressources ?

Utiliser un [CDN](/fr/docs/Glossary/CDN) pour héberger des fichiers tels que les scripts et les feuilles de style qui sont partagés entre plusieurs sites permet d'améliorer les performances du site et d'économiser de la bande passante. Cependant, utiliser des CDN comporte un risque : si un attaquant prend le contrôle du CDN, il pourra injecter du contenu malveillant dans les fichiers (ou les remplacer complètement), et il pourra donc aussi potentiellement attaquer tous les sites qui récupèrent les fichiers sur ce CDN.

Le contrôle d'intégrité des sous-ressources vous permet d'atténuer le risque de ce genre d'attaques, en veillant à ce que les fichiers de votre application ou document Web utilisent (à partir d'un CDN ou ailleurs) aient été livrés sans modification d'un tiers ayant injecté du contenu supplémentaire dans les fichiers - et sans autre changement de toute nature ayant été faits à ces fichiers.

## Utiliser le SRI

Le contrôle d'intégrité des sous-ressources s'active en spécifiant un hachage cryptographique encodé en base64 d'une ressource (fichier) que vous transmettez au navigateur au moment où il va chercher cette ressource, comme valeur de l'attribut **`integrity`** de chaque élément {{HTMLElement("script")}} ou {{HTMLElement("link")}}.

Une valeur de l'attribut **`integrity`** commence par au moins une chaîne, chaque chaîne comprenant un préfixe indiquant un algorithme particulier de hachage (actuellement les préfixes autorisés sont `sha256`, `sha384` et `sha512`), suivi d'un tiret, et se terminant par le hachage base64 proprement dit.

> **Note :** Une valeur de l'attribut **`integrity`** peut contenir plusieurs hachages séparés par des espaces. Une ressource sera chargée si elle correspond à l'un de ces hachages.

Voici un exemple de valeur pour l'attribut **`integrity`** avec un hash sha384 encodé en base64 :

    sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC

> **Note :** Le « _hash_ » est à proprement parler une **_fonction de hachage cryptographique_** formé en appliquant une fonction de hachage particulière à une certaine entrée (par exemple, un script ou un fichier de feuille de styles). Mais il est plus commun d'utiliser le mot **_hash_** pour indiquer _fonction de hachage cryptographique_, d'où son utilisation dans cet article.

### Outil pour générer des hachages SRI

Vous pouvez générer des _hashes_ SRI en ligne de commande avec OpenSSL en utilisant une commande de ce genre :

```bash
cat FILENAME.js | openssl dgst -sha384 -binary | openssl enc -base64 -A
```

Il existe également, **SRI Hash Generator** : <https://srihash.org/> qui est un utilitaire en ligne permettant de générer des _hashes_ SRI.

## Exemples

Dans les exemples suivants, supposons que `oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC` est la valeur attendue du _hash_ SHA-384 d'un script `exemple-framework.js`, et qu'il existe une copie de ce script hébergée sur `https://exemple.com/exemple-framework.js`.

### Exemple : utiliser l'élément `script` pour le contrôle d'intégrité

Vous pouvez utiliser l'élément {{HTMLElement("script")}} suivant pour dire au navigateur qu'il doit comparer le _hash_ fourni avec celui du fichier et que les deux correspondent avant d'exécuter le script hébergé à `https://example.com/exemple-framework.js`.

```html
<script src="https://exemple.com/exemple-framework.js"
        integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
        crossorigin="anonymous"></script>
```

> **Note :** Pour plus de détails sur l'objectif de l'attribut **`crossorigin`**, voir [les attributs CORS](/fr/docs/Web/HTML/Reglages_des_attributs_CORS).

## La gestion du SRI par les navigateurs

Les navigateurs gèrent SRI en effectuant les étapes suivantes :

1.  Lorsqu'un navigateur rencontre un élément {{HTMLElement("script")}} ou {{HTMLElement("link")}} avec un attribut **`integrity`**, avant d'exécuter le script ou avant d'appliquer les styles spécifiés par l'élément {{HTMLElement("link")}}, la navigateur doit comparer le script ou la feuille de style à la valeur donnée dans l'attribut **`integrity`**.
2.  Si le script ou la feuille de styles ne correspond pas à la valeur de l'attribut **`integrity`** qui lui est associée, alors le navigateur doit refuser d'exécuter le script ou d'appliquer la feuille de style et doit retourner une erreur indiquant que le chargement de la ressource a échoué.

## Spécifications

| Spécification                                    | État                                         | Commentaires |
| ------------------------------------------------ | -------------------------------------------- | ------------ |
| {{SpecName('Subresource Integrity')}} | {{Spec2('Subresource Integrity')}} |              |
| {{SpecName('Fetch')}}                     | {{Spec2('Fetch')}}                     |              |

## Compatibilité des navigateurs

{{Compat("http.headers.csp.require-sri-for")}}

## Voir aussi

- [Un CDN sans risque de XSS : utiliser le contrôle d'intégrité des sous-ressources (en anglais)](https://frederik-braun.com/using-subresource-integrity.html)
