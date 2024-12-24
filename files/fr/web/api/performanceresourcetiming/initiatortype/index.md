---
title: PerformanceResourceTiming.initiatorType
slug: Web/API/PerformanceResourceTiming/initiatorType
---

{{APIRef("Resource Timing API")}}

La propriété **`initiatorType`** en lecture seule est une [chaîne de caractères](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) qui représente le _type_ de ressource qui a initié l'événement de performance.

La valeur de cette chaîne est la suivante:

- Si l'initiateur est un [`Element`](/fr/docs/Web/API/Element), la propriété retourne la propriété [`localName`](/fr/docs/Web/API/Element/localName) de l'élément.
- Si l'initiateur est une ressource [`CSS`](/fr/docs/Web/API/CSS), la propriété renvoie « `css` ».
- Si l'initiateur est un objet [`XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest), la propriété renvoie « `xmlhttprequest` ».
- Si l'initiateur est un objet [`PerformanceNavigationTiming`](/fr/docs/Web/API/PerformanceNavigationTiming), la propriété renvoie une chaîne vide (`""`).

{{AvailableInWorkers}}

## Syntaxe

```js
resource.initiatorType;
```

### Valeur de retour

Une chaîne de caractères ([`DOMString`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String)) représentant le _type_ de ressource qui a initié l'événement de performance, comme spécifié ci-dessus.

## Exemple

```js
function print_PerformanceEntries() {
  // Utilise getEntriesByType() pour obtenir uniquement les événements "resource"
  let p = performance.getEntriesByType("resource");
  for (let i = 0; i < p.length; i++) {
    print_initiatorType(p[i]);
  }
}
function print_initiatorType(perfEntry) {
  // Imprime la valeur initiatorType de cet objet d'entrée de performance
  let value = "initiatorType" in perfEntry;
  if (value) console.log("... initiatorType = " + perfEntry.initiatorType);
  else console.log("... initiatorType = N'EST PAS pris en charge");
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
