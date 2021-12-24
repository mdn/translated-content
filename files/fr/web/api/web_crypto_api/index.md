---
title: API Web Crypto
slug: Web/API/Web_Crypto_API
translation_of: Web/API/Web_Crypto_API
browser-compat: api.Crypto
---
{{DefaultAPISidebar("Web Crypto API")}}

L'API **Web Cryptography** (aussi appelée <i lang="en">Web Crypto API</i>) est une interface permettant à un script d'utiliser des primitives cryptographiques afin de construire des systèmes utilisant la cryptographie.

{{AvailableInWorkers}}

> **Attention :** L'API Web Crypto fournit un ensemble de primitives cryptographiques de bas niveau. Il est très facile de mal les utiliser et les pièges peuvent être très subtils.
>
> Même si vous utilisez les fonctionnalités cryptographiques basiques correctement, ayez conscience que la gestion sécurisée des clés et la conception générale d'un système sécurisé sont des tâches extrêmement difficiles à réaliser correctement et qui incombent donc généralement à des experts en sécurité.
>
> Une légère erreur dans la conception et/ou l'implémentation d'un système de sécurité peut rendre la sécurité d'un tel système complètement vaine.
>
> N'hésitez pas à apprendre, bidouiller, expérimenter, mais ne garantissez pas la sécurité de votre production (explicitement ou implicitement) avant qu'une personne compétente en la matière l'ait revue. [Le cours Crypto 101](https://www.crypto101.io/) peut être une bonne introduction pour apprendre comment concevoir et implémenter des systèmes sécurisés.

## Interfaces

Certains navigateurs implémentent une interface appelée [`Crypto`](/fr/docs/Web/API/Crypto) sans qu'elle soit bien définie ou sûre sur le plan cryptographique. Afin d'éviter toute confusion, les méthodes et proprietés de cette première interface ont été retirées des navigateurs implémentant l'API Web Crypto. L'ensemble des méthodes de l'API Web Crypto sont accessibles via une nouvelle interface&nbsp;: [`SubtleCrypto`](/fr/docs/Web/API/SubtleCrypto). La propriété [`Crypto.subtle`](/fr/docs/Web/API/Crypto/subtle) donne accès à un objet qui l'implémente.

## Spécifications

| Spécification                                            |
| -------------------------------------------------------- |
| [API Web Cryptography](https://w3c.github.io/webcrypto/) |

## Compatibilité des navigateurs

{{compat}}
