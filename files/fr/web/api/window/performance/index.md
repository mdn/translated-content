---
title: "Window : propriété performance"
short-title: performance
slug: Web/API/Window/performance
l10n:
  sourceCommit: 54962bbd1d367115cfd01b4e1ba6b552e8b68eb7
---

{{APIRef("Performance API")}}

La propriété **`performance`** de l'interface {{DOMxRef("Window")}} retourne un objet {{DOMxRef("Performance")}}, qui peut être utilisé pour recueillir des informations sur les performances du code s'exécutant dans le contexte de la fenêtre.

Les entrées de performance sont spécifiques à chaque contexte. Si vous créez une marque sur le thread principal (ou un autre worker), vous ne pouvez pas la voir dans un thread worker, et vice versa.

## Valeur

Un objet {{DOMxRef("Performance")}} offrant un accès aux informations sur les performances et le chronométrage du code s'exécutant dans le contexte de la fenêtre.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("WorkerGlobalScope.performance")}}
