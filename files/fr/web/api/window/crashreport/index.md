---
title: "Window : propriété crashReport"
short-title: crashReport
slug: Web/API/Window/crashReport
l10n:
  sourceCommit: c9773fc1268b974b6c009208b259c53954c839ef
---

{{SecureContext_Header}}{{APIRef("Reporting API")}}{{SeeCompatTable}}

La propriété en lecture seule **`crashReport`** de l'interface {{DOMxRef("Window")}} retourne un objet {{DOMxRef("CrashReportContext")}} qui permet d'enregistrer des données arbitraires pour le contexte de navigation de premier niveau actuel.
Les données sont ensuite incluses dans des objets {{DOMxRef("CrashReport")}} qui sont envoyés à un point de terminaison de rapport lorsqu'un plantage du navigateur se produit.

## Valeur

Une instance d'objet {{DOMxRef("CrashReportContext")}}.

## Exemples

Voir les pages de référence de {{DOMxRef("CrashReportContext")}} pour des exemples.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Reporting](/fr/docs/Web/API/Reporting_API)
