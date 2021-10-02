---
title: Utilisation de l'API Performance
slug: Web/API/Performance_API/Using_the_Performance_API
tags:
  - API
  - Guide
  - Aperçu
  - Performance
  - Performance Web
translation_of: Web/API/Performance_API/Using_the_Performance_API
---
{{DefaultAPISidebar("High Resolution Time")}}

Une exigence fondamentale de la performance web est une définition précise et cohérente du _temps._ Le type [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp) (un `double`) est utilisé par toutes les interfaces de performance pour contenir de telles valeurs de temps.

En outre, il doit y avoir un moyen de créer une _empreinte temporelle_ pour un point spécifique dans le temps ; ceci est fait avec la méthode [`now()`](/fr/docs/Web/API/Performance/now).

Les interfaces de performance web sont définies dans un [ensemble de normes](https://www.w3.org/wiki/Web_Performance/Publications). L'interface _de base_ de ces normes est l'interface [`Performance`](/fr/docs/Web/API/Performance) et ses méthodes et propriétés sont étendues par différentes normes. Ce guide décrit comment utiliser les interfaces [`Performance`](/fr/docs/Web/API/Performance) qui sont définies dans la norme [High-Resolution Time](https://w3c.github.io/hr-time/). D'autres guides sur les performances web (répertoriés dans la section [Voir aussi](#see_also)) décrivent comment utiliser des méthodes et propriétés supplémentaires de l'interface [`Performance`](/fr/docs/Web/API/Performance).

## Chronométrage de haute précision

_Le chronométrage de haute précision_ est obtenu en utilisant le type [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp) pour les valeurs de temps. L'unité est la milliseconde et doit être précise à 5 µs (microsecondes). Toutefois, si le navigateur n'est pas en mesure de fournir une valeur temporelle précise à 5 microsecondes (en raison de contraintes matérielles ou logicielles, par exemple), il peut représenter la valeur comme un temps en millisecondes précis à la milliseconde près.

L'exemple de code suivant montre l'utilisation de [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp) et de la méthode [`Performance.now()`](/fr/docs/Web/API/Performance/now). La méthode [`now()`](/fr/docs/Web/API/Performance/now) renvoie un _timestamp_ (de type [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp)) qui est un point discret dans le temps. En appelant cette méthode avant et après une tâche, il est possible de mesurer le temps nécessaire à l'exécution de la tâche.

```js
function calculate_time() {
  let startTime;
  let endTime;

  startTime = performance.now();
  do_task();
  endTime = performance.now();

  return (endTime - startTime);
}
```

## Sérialisation de l'objet `Performance`

La sérialisation JSON de l'objet [`Performance`](/fr/docs/Web/API/Performance) est effectuée via la méthode [`toJSON()`](/fr/docs/Web/API/Performance/toJSON). Dans l'exemple suivant, la sérialisation JSON des objets [`Performance`](/fr/docs/Web/API/Performance), [`Performance.timing`](/fr/docs/Web/API/Performance/timing) {{deprecated_inline}} et [`Performance.navigation`](/fr/docs/Web/API/Performance/navigation) {{deprecated_inline}} est imprimée dans l'élément `object`.

```js
function print_json() {
  let json;
  let o = document.getElementsByTagName("output")[0];

  if (window.performance.toJSON === undefined) {
    json = "window.performance.toJSON() n'est PAS pris en charge";
    o.innerHTML += json + "<br>";
  } else {
    let s;
    json = window.performance.toJSON();

    // Imprimer l'objet de performance
    s = JSON.stringify(json);
    o.innerHTML = "<p>performance = " + s + "</p>";

    // Imprimer les objets performance.timing et performance.navigation
    let perf = JSON.parse(s);

    let timing = perf.timing;
    o.innerHTML += "<p>peformance.timing = " + JSON.stringify(timing) + "</p>";

    let navigation = perf.navigation;
    o.innerHTML += "<p>peformance.navigation = " + JSON.stringify(navigation) + "</p>";
  }
}
```

## Spécifications

Les interfaces décrites dans ce document sont définies dans la norme `High Resolution Time` qui comporte deux niveaux :

| Spécification                                    | Statut                                       | Commentaire                                                            |
| ------------------------------------------------ | -------------------------------------------- | ---------------------------------------------------------------------- |
| {{SpecName('Highres Time Level 2')}} | {{Spec2('Highres Time Level 2')}} | Ajout de l'attribut `performance` sur `Window` et `WorkerGlobalScope`. |
| {{SpecName('Highres Time')}}             | {{Spec2('Highres Time')}}             | Définition initiale.                                                   |

## Interopérabilité

Comme le montre le tableau des [Compatibilités des navigateurs](/fr/docs/Web/API/Performance#browser_compatibility) de l'interface [`Performance`](/fr/docs/Web/API/Performance), la plupart des interfaces [`Performance`](/fr/docs/Web/API/Performance) sont largement implémentées par les navigateurs de bureau.

## Voir aussi

- [Aperçu de l'API Performance](/fr/docs/Web/API/Performance_API)
- [Une introduction aux API de chronométrage des performances du Web](https://siusin.github.io/perf-timing-primer/) (en)
- [Graphique des couches de performance Web](https://docs.google.com/document/d/1ZKW9N0cteHgK91SyYQONFuy2ZW6J4Oak398niTo232E/edit) (en)
- [CanIUse données pour le Temps à haute résolution](https://caniuse.com/#search=high-resolution-time) (en)
- [Web Performance Standards Status and Roadmap](https://www.w3.org/wiki/Web_Performance/Publications) (en)
