---
title: Politique de ressource entre origines (CORP)
slug: Web/HTTP/Guides/Cross-Origin_Resource_Policy
l10n:
  sourceCommit: d5c3db4df1e063769b8113567f4558ad4298b00b
---

La **politique de ressource inter-origines** est une politique définie par [l'en-tête HTTP `Cross-Origin-Resource-Policy`](/fr/docs/Web/HTTP/Reference/Headers/Cross-Origin-Resource-Policy) qui permet aux sites web et aux applications de s'inscrire à une protection contre certaines requêtes provenant d'autres origines (comme celles émises avec des éléments HTML tels que `<script>` et `<img>`), afin de réduire les attaques par canal secondaire spéculatif, comme [Spectre <sup>(angl.)</sup>](<https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)>), ainsi que les attaques d'inclusion de script inter-sites.
Une CORP est une couche de protection supplémentaire au-delà de la {{Glossary("same-origin policy", "politique de même origine")}} par défaut.

> [!NOTE]
> La politique n'est efficace que pour les requêtes [`no-cors` <sup>(angl.)</sup>](https://fetch.spec.whatwg.org/#concept-request-mode), qui sont émises par défaut pour les méthodes/en-têtes autorisés par CORS.

Comme cette politique est exprimée par un _[en-tête de réponse](/fr/docs/Glossary/Response_header)_, la requête réelle n'est pas empêchée — c'est plutôt le navigateur qui empêche le _résultat_ d'être divulgué en supprimant le corps de la réponse.

## Utilisation

> [!NOTE]
> En raison d'un [bogue dans Chrome <sup>(angl.)</sup>](https://crbug.com/1074261), la définition de la politique de ressource inter-origine peut perturber le rendu des PDF, empêchant les visiteur·euse·s de pouvoir lire au-delà de la première page de certains PDF. Faites preuve de prudence lors de l'utilisation de cet en-tête dans un environnement de production.

Les applications web définissent une politique de ressource inter-origine par l'en-tête de réponse HTTP {{HTTPHeader("Cross-Origin-Resource-Policy")}}, qui accepte l'une des trois valeurs suivantes&nbsp;:

- `same-site`
  - : Seules les requêtes provenant du même _{{Glossary("Site")}}_ peuvent lire la ressource.

    > [!WARNING]
    > C'est moins sécurisé qu'une {{Glossary("origin", "origine")}}. [L'algorithme permettant de vérifier si deux origines appartiennent au même site <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/origin.html#same-site) est défini dans la norme HTML et implique la vérification du _domaine enregistrable_.

- `same-origin`
  - : Seules les requêtes de la même _{{Glossary("origin", "origine")}}_ (c'est-à-dire, schéma + hôte + port) peuvent lire la ressource.
- `cross-origin`
  - : Les requêtes provenant de n'importe quelle _{{Glossary("origin", "origine")}}_ (à la fois même site et inter-site) peuvent lire la ressource. C'est utile lorsque COEP est utilisé (voir ci-dessous).

```http
Cross-Origin-Resource-Policy: same-site | same-origin | cross-origin
```

Lors d'une vérification de la politique de ressource inter-origine, si l'en-tête est défini, le navigateur refuse les requêtes `no-cors` émises depuis une origine/site différent(e).

## Relation avec la politique d'intégration inter-origine (COEP)

L'en-tête de réponse HTTP {{HTTPHeader("Cross-Origin-Embedder-Policy")}}, lorsqu'il est utilisé sur un document, peut être utilisé pour exiger que les sous-ressources soient soit de la même origine que le document, soit accompagnées d'un en-tête de réponse HTTP {{HTTPHeader("Cross-Origin-Resource-Policy")}} pour indiquer qu'elles peuvent être intégrées. C'est pourquoi la valeur `cross-origin` existe.

## Historique

Le concept a été initialement proposé en 2012 (sous la forme d'un en-tête `From-Origin`), mais [ressuscité <sup>(angl.)</sup>](https://github.com/whatwg/fetch/issues/687) au deuxième trimestre de 2018 et implémenté dans Safari et Chromium.

Au début de 2018, deux vulnérabilités matérielles de type canal auxiliaire connues sous le nom de _Meltdown_ et _Spectre_ ont été divulguées. Ces vulnérabilités permettent la divulgation de données sensibles en raison d'une condition de concurrence survenant dans le cadre de la fonctionnalité d'exécution spéculative, conçue pour améliorer les performances.

La politique de ressource inter-origine a été développée comme un moyen direct pour les sites de bloquer les requêtes inter-origine `no-cors` indésirables. C'est une défense efficace contre les attaques de type Spectre, car le navigateur supprime le corps des réponses données avant qu'un·e attaquant·e ne puisse y accéder.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête HTTP {{HTTPHeader("Cross-Origin-Resource-Policy")}}
