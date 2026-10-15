---
title: "Window : propriété scheduler"
short-title: scheduler
slug: Web/API/Window/scheduler
l10n:
  sourceCommit: 3c359c63c1b58e10bdfe3bec2c245ea626560427
---

{{APIRef("Prioritized Task Scheduling API")}}

La propriété en lecture seule **`scheduler`** de l'interface {{DOMxRef("Window")}} est le point d'entrée pour utiliser [l'API Prioritized Task Scheduling](/fr/docs/Web/API/Prioritized_Task_Scheduling_API).

Elle retourne une instance d'objet {{DOMxRef("Scheduler")}} contenant les méthodes {{DOMxRef("Scheduler.postTask", "postTask()")}} et {{DOMxRef("Scheduler.yield()", "yield()")}} qui peuvent être utilisées pour planifier des tâches prioritaires.

## Valeur

Un objet {{DOMxRef("Scheduler")}}.

## Exemples

Le code ci-dessous montre une utilisation très basique de la propriété et de son interface associée.
Il montre comment vérifier que la propriété existe, puis publier une tâche qui retourne une promesse.

```js
// Vérifie si l'API des tâches prioritaires est prise en charge
if ("scheduler" in window) {
  // Fonction de rappel - "la tâche"
  const maTache = () => "Tâche 1 : user-visible";

  // Publie une tâche avec la priorité par défaut : 'user-visible' (aucune autre option)
  // Lorsque la tâche est complétée, Promise.then() enregistre le résultat.
  window.scheduler
    .postTask(maTache)
    // Gère la valeur complétée
    .then((resultatTache) => console.log(`${resultatTache}`))
    // Gère l'erreur ou l'abandon
    .catch((erreur) => console.log(`Erreur : ${erreur}`));
} else {
  console.log("Fonctionnalité : N'EST PAS prise en charge");
}
```

Pour un exemple de code complet montrant comment utiliser l'API, voir [L'API Prioritized Task Scheduling > Exemples](/fr/docs/Web/API/Prioritized_Task_Scheduling_API#exemples).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Prioritized Task Scheduling](/fr/docs/Web/API/Prioritized_Task_Scheduling_API)
- La méthode {{DOMxRef("Scheduler.postTask()")}}
- La méthode {{DOMxRef("Scheduler.yield()")}}
- L'interface {{DOMxRef("TaskController")}}
- La propriété {{DOMxRef("WorkerGlobalScope.scheduler")}}
