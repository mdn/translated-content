---
title: IntersectionObserver.takeRecords()
slug: Web/API/IntersectionObserver/takeRecords
tags:
  - API
  - Intersection Observer
  - Intersection Observer API
  - IntersectionObserver
  - Method
  - NeedsExample
  - Reference
  - takeRecords
translation_of: Web/API/IntersectionObserver/takeRecords
---
{{APIRef("Intersection Observer API")}}

La méthode **`takeRecords()`** de l'interface [`IntersectionObserver`](/fr/docs/Web/API/IntersectionObserver) renvoie un tableau d'objets [`IntersectionObserverEntry`](/fr/docs/Web/API/IntersectionObserverEntry), un pour chaque élément ciblé qui a subi un changement d'intersection depuis la dernière vérification des intersections, soit explicitement par un appel à cette méthode, soit implicitement par un appel automatique à la fonction de rappel de l'observateur.

> **Note :** Si vous utilisez la fonction de rappel pour surveiller ces changements, vous n'avez pas besoin d'appeler cette méthode. L'appel de cette méthode efface la liste des intersections en attente, de sorte que la fonction de rappel ne sera pas exécutée.

## Syntaxe

    intersectionObserverEntries = intersectionObserver.takeRecords();

### Paramètres

Aucun.

### Valeur de retour

Un tableau d'objets [`IntersectionObserverEntry`](/fr/docs/Web/API/IntersectionObserverEntry), un pour chaque élément cible dont l'intersection avec la racine a changé depuis la dernière vérification des intersections.

## Spécifications

| Spécification                                                                                                                                            | Statut                                       | Commentaire          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------------------- |
| {{SpecName('IntersectionObserver','#dom-intersectionobserver-takerecords','IntersectionObserver.takeRecords()')}} | {{Spec2('IntersectionObserver')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.IntersectionObserver.takeRecords")}}

## Voir aussi

- [L'API _Intersection Observer_](/en-US/docs/Web/API/Intersection_Observer_API)
