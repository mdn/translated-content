---
title: En-tête Server-Timing
short-title: Server-Timing
slug: Web/HTTP/Reference/Headers/Server-Timing
l10n:
  sourceCommit: 7ed7b730bf88307cc6cf34b82bb1d735b9a1aa1f
---

{{Glossary("response header", "L'en-tête de réponse")}} HTTP **`Server-Timing`** communique une ou plusieurs métriques de performance concernant le cycle requête-réponse au client.
Il est utilisé pour afficher les métriques de temps d'exécution du serveur backend (par exemple, lecture/écriture de base de données, temps CPU, accès au système de fichiers, etc.) dans les outils de développement du navigateur de l'utilisateur·ice ou dans l'interface {{DOMxRef("PerformanceServerTiming")}}.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Response header", "En-tête de réponse")}}</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
// Une seule mesure
Server-Timing: <timing-metric>

// Plusieurs mesures sous forme de liste séparée par des virgules
Server-Timing: <timing-metric>, …, <timing-metricN>
```

Un `<timing-metric>` a un nom, et peut inclure une durée optionnelle et une description optionnelle.
Par exemple&nbsp;:

```http
// Une mesure avec seulement un nom
Server-Timing: missedCache

// Une mesure avec une durée
Server-Timing: cpu;dur=2.4

// Une mesure avec une description et une durée
Server-Timing: cache;desc="Lecture cache";dur=23.2

// Deux mesures avec des valeurs de durée
Server-Timing: db;dur=53, app;dur=47.2
```

## Directives

- `<timing-metric>`
  - : Une liste séparée par des virgules d'une ou plusieurs mesures avec les composants suivants séparés par des points-virgules&nbsp;:
    - `<name>`
      - : Un jeton de nom (pas d'espaces ni de caractères spéciaux) pour la mesure qui est spécifique à l'implémentation ou définie par le serveur, comme `cacheHit`.
    - `<duration>` {{Optional_Inline}}
      - : Une durée sous la forme de la chaîne de caractères `dur`, suivie de `=`, puis d'une valeur, comme `dur=23.2`.
    - `<description>` {{Optional_Inline}}
      - : Une description sous la forme de la chaîne de caractères `desc`, suivie de `=`, puis d'une valeur sous forme de jeton ou de chaîne de caractères entre guillemets, comme `desc=prod` ou `desc="Recherche DB"`.

Les noms et les descriptions doivent être aussi courts que possible (par exemple, en utilisant des abréviations et en omettant les valeurs facultatives) afin de réduire au minimum le volume de données HTTP.

## Description

### Vie privée et sécurité

L'en-tête `Server-Timing` peut exposer des informations potentiellement sensibles sur l'application et l'infrastructure.
Décidez quelles métriques envoyer, quand les envoyer et qui doit les voir en fonction du cas d'utilisation.
Par exemple, vous pouvez décider de n'afficher les métriques qu'aux utilisateur·ice·s authentifié·e·s et rien sur les réponses publiques.

### L'interface `PerformanceServerTiming`

En plus de l'affichage des mesures de l'en-tête `Server-Timing` dans les outils de développement du navigateur, l'interface {{DOMxRef("PerformanceServerTiming")}} permet à ces outils de collecter et de traiter automatiquement les mesures à partir de JavaScript. Cette interface est limitée à la même origine, mais vous pouvez utiliser l'en-tête {{HTTPHeader("Timing-Allow-Origin")}} pour définir les domaines autorisés à accéder aux mesures du serveur. Dans certains navigateurs, cette interface n'est disponible que dans des contextes sécurisés (HTTPS).

Les composants de l'en-tête `Server-Timing` correspondent aux propriétés de {{DOMxRef("PerformanceServerTiming")}} comme suit&nbsp;:

- `"name"` -> {{DOMxRef("PerformanceServerTiming.name")}}
- `"dur"` -> {{DOMxRef("PerformanceServerTiming.duration")}}
- `"desc"` -> {{DOMxRef("PerformanceServerTiming.description")}}

## Exemples

### Envoyer une mesure à l'aide de l'en-tête `Server-Timing`

La réponse suivante inclut une mesure `custom-metric` avec une durée de `123.45` millisecondes et une description «&nbsp;Ma mesure personnalisée&nbsp;»&nbsp;:

```http
Server-Timing: custom-metric;dur=123.45;desc="Ma mesure personnalisée"
```

### `Server-Timing` en tant que « remorque » de HTTP

Dans la réponse suivante, l'en-tête {{HTTPHeader("Trailer")}} est utilisé pour indiquer qu'un en-tête `Server-Timing` suit le corps de la réponse.
Une mesure `custom-metric` avec une durée de `123.4` millisecondes est envoyée.

```http
HTTP/1.1 200 OK
Transfer-Encoding: chunked
Trailer: Server-Timing

--- response body ---
Server-Timing: custom-metric;dur=123.4
```

> [!WARNING]
> Seules les outils de développement du navigateur peuvent utiliser l'en-tête `Server-Timing` en tant que «&nbsp;remorque&nbsp;» de HTTP pour afficher des informations dans l'onglet Réseau -> Chronologie.
> L'API Fetch ne peut pas accéder aux remorques de HTTP.
> Voir [Compatibilité des navigateurs](#compatibilité_des_navigateurs) pour plus d'informations.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface API {{DOMxRef("PerformanceServerTiming")}}
- L'en-tête {{HTTPHeader("Trailer")}}
