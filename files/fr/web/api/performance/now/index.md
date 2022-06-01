---
title: performance.now()
slug: Web/API/Performance/now
tags:
  - API
  - API Performance Web
  - Method
  - Méthode
  - Performance
  - Reference
translation_of: Web/API/Performance/now
---
{{APIRef("High Resolution Timing")}}

La méthode **`Performance.now()`** retourne une valeur de type {{domxref("DOMHighResTimeStamp")}}, mesurée en millisecondes et avec une précision de 5 millièmes de milliseconde (5 microsecondes).

{{AvailableInWorkers}}

La valeur retournée représente le temps écoulé depuis le [temps d'origine](/fr/docs/Web/API/DOMHighResTimeStamp#the_time_origin).

Attention à garder à l'esprit les points suivants :

- Dans les workers dédiés créés à partir d'un contexte {{domxref("Window")}}, la valeur dans le worker sera inférieure à celle obtenue par `performance.now()` exécuté dans la fenêtre ayant créé le worker. La fenêtre et le worker partageaient avant le même temps de référence `t0` à partir du contexte principal, mais cela a été changé.
- Dans les workers partagés ou service sorkers, la valeur dans le worker peut être supérieure à celle du contexte principal, car la fenêtre pourra avoir été créée après ces workers.

Il est important de garder à l'esprit que pour atténuer les menaces de sécurité potentielles telles que [Spectre](https://spectreattack.com/), les navigateurs arrondissent généralement la valeur retournée d'une certaine quantité afin d'être moins prévisible. Cela introduit intrinsèquement un degré d'imprécision en limitant la résolution ou la précision de la minuterie. Par exemple, Firefox arrondit le temps renvoyé à des incréments de 1 milliseconde.

La précision de la valeur retournée est susceptible de changer si/quand les problèmes de sécurité sont atténués par d'autres moyens.

## Syntaxe

```js
  t = performance.now();
```

## Exemple

```js
  var t0 = performance.now();
  doSomething();
  var t1 = performance.now();
  console.log("L'appel de doSomething a demandé " + (t1 - t0) + " millisecondes.")
```

Contrairement aux autres données de temps disponibles en JavaScript (par exemple [`Date.now`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/now)), les horodatages retournés par `Performance.now()` ne sont pas limités à une précision d'une milliseconde. Au contraire, ils représentent les temps comme des nombres flottants avec une précision pouvant aller jusqu'à une microseconde.

Également contrairement à `Date.now()`, les valeurs retournées par `Performance.now()` sont toujours incrémentées à un taux constant, indépendant de l'horloge du système (qui peut être ajustée manuellement ou par l'intermédiaire d'un logiciel comme NTP). Sinon, `performance.timing.navigationStart + performance.now()` serait approximativement égal à `Date.now()`.

## Précision réduite du temps

Pour offrir une protection contre les attaques de temporisation et les empreintes digitales, la précision de `performance.now()` peut être arrondie en fonction des paramètres du navigateur. Dans Firefox, la préférence `privacy.reduceTimerPrecision` est activée par défaut et prend la valeur 1ms par défaut.

```js
// précision temporelle réduite (1ms) dans Firefox 60
performance.now();
// 8781416
// 8781815
// 8782206
// ...

// précision du temps réduite avec `privacy.resistFingerprinting` activé
performance.now();
// 8865400
// 8866200
// 8866700
// ...
```

Dans Firefox, vous pouvez également activer `privacy.resistFingerprinting` - cela change la précision à 100ms ou à la valeur de `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` en fonction de la plus grande des deux.

À partir de Firefox 79, les minuteurs haute résolution peuvent être utilisés si vous isolez votre document en utilisant les en-têtes {{HTTPHeader("Cross-Origin-Opener-Policy")}} et {{HTTPHeader("Cross-Origin-Embedder-Policy")}} :

```plain
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Ces en-têtes garantissent qu'un document de premier niveau ne partage pas un groupe de contexte de navigation avec des documents d'origine croisée. Le processus COOP isole votre document et les attaquants potentiels ne peuvent pas accéder à votre objet global s'ils l'ouvrent dans une fenêtre contextuelle, ce qui permet d'éviter un ensemble d'attaques d'origine croisée appelées [XS-Leaks](https://github.com/xsleaks/xsleaks).

## Spécifications

| Spécification                                                                                                | Statut                                       | Commentaire                                            |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------------------- | ------------------------------------------------------ |
| {{SpecName('Highres Time Level 2',  '#dom-performance-now', 'performance.now()')}} | {{Spec2('Highres Time Level 2')}} | Définitions plus strictes des interfaces et des types. |
| {{SpecName('Highres Time',  '#dom-performance-now', 'Performance.now()')}}         | {{Spec2('Highres Time')}}             | Définition initiale                                    |

## Compatibilité des navigateurs

{{Compat("api.Performance.now")}}

## Voir aussi

- [Quand les millisecondes ne suffisent pas : performance.now() (en)](http://updates.html5rocks.com/2012/08/When-milliseconds-are-not-enough-performance-now) de HTML5 Rocks.
