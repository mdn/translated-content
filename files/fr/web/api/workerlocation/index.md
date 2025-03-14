---
title: WorkerLocation
slug: Web/API/WorkerLocation
---

{{APIRef("Web Workers API")}}

L'interface **`WorkerLocation`** définit l'emplacement complet du script exécuté par le {{domxref("Worker")}}. Un tel objet est initialisé pour chaque _worker_ et est disponible via la propriété {{domxref("WorkerGlobalScope.location")}} récupérée par l'appel à `window.self.location`.

Cette interface est uniquement visible à l'intérieur d'un script JavaScript exécuté dans le contexte d'un _web worker_.

## Propriétés

_L'interface `WorkerLocation` n'hérite d'aucune propriété mais implémente les propriétés définies par l'interface {{domxref("URLUtilsReadOnly")}}._

- {{domxref("URLUtilsReadOnly.href")}} {{readOnlyInline}}
  - : {{domxref("DOMString")}} contenant la totalité de URL du script exécuté dans le {{domxref("Worker")}}.
- {{domxref("URLUtilsReadOnly.protocol")}} {{readOnlyInline}}
  - : {{domxref("DOMString")}} contenant le schéma du protocole de l'URL du script exécuté dans le {{domxref("Worker")}}, incluant les deux points de terminaison`':'`.
- {{domxref("URLUtilsReadOnly.host")}} {{readOnlyInline}}
  - : {{domxref("DOMString")}} contenant l'hôte, constitué du nom d'hôte _hostname_, de deux points `':'`, et du numéro de _port_ de l'URL du script exécuté dans le {{domxref("Worker")}}.
- {{domxref("URLUtilsReadOnly.hostname")}} {{readOnlyInline}}
  - : {{domxref("DOMString")}} contenant le nom de domaine du script exécuté dans le {{domxref("Worker")}}.
- {{domxref("URLUtilsReadOnly.origin")}} {{readOnlyInline}}
  - : {{domxref("DOMString")}} contenant l'origine de l'URL sous sa forme canonique.
- {{domxref("URLUtilsReadOnly.port")}} {{readOnlyInline}}
  - : {{domxref("DOMString")}} contenant le numéro de port de l'URL du script exécuté dans le {{domxref("Worker")}}.
- {{domxref("URLUtilsReadOnly.pathname")}} {{readOnlyInline}}
  - : {{domxref("DOMString")}} contenant une barre oblique initiale `'/'` suivie du chemin de l'URL du script exécuté dans le {{domxref("Worker")}}.
- {{domxref("URLUtilsReadOnly.search")}} {{readOnlyInline}}
  - : {{domxref("DOMString")}} contenant un point d'interrogation intial `'?'` suivi des paramètres de l'URL du script exécuté dans le {{domxref("Worker")}}.
- {{domxref("URLUtilsReadOnly.hash")}} {{readOnlyInline}}
  - : {{domxref("DOMString")}} contenant un dièse initial `'#'` suivi de l'identifiant de l'ancre de l'URL du script exécuté dans le {{domxref("Word'hôteker")}}.

## Méthodes

_L'interface `WorkerLocation` n'hérite d'aucune méthode mais implémente les méthodes définies par l'interface {{domxref("URLUtilsReadOnly")}}._

- {{domxref("URLUtilsReadOnly.toString()")}}
  - : Retourne une chaîne de caractères {{domxref("DOMString")}} contenant l'URL complète du script exécuté dans le {{domxref("Worker")}}. C'est un synonyme de la propriété {{domxref("URLUtilsReadOnly.href")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Autres interfaces apparentées au _Worker_: {{domxref("Worker")}}, {{domxref("WorkerNavigator")}} et {{domxref("WorkerGlobalScope")}}.
- [Utilisation des web workers](/fr/docs/Web/API/Web_Workers_API/Using_web_workers)
