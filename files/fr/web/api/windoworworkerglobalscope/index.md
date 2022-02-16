---
title: WindowOrWorkerGlobalScope
slug: Web/API/WindowOrWorkerGlobalScope
tags:
  - API
  - DOM
  - DOM API
  - Service Worker
  - TopicStub
  - Window
  - WindowOrWorkerGlobalScope
  - Worker
  - WorkerGlobalScope
translation_of: Web/API/WindowOrWorkerGlobalScope
---
{{ApiRef()}}

Le mixin **`WindowOrWorkerGlobalScope`** décrit plusieurs fonctionnalités communes aux interfaces {{domxref("Window")}} et {{domxref("WorkerGlobalScope")}}. Chacune de ces interfaces peut, bien entendu, ajouter d'autres fonctionnalités en plus de celles listées ci-dessous.

> **Note :** `WindowOrWorkerGlobalScope` est un mixin et non une interface; vous ne pouvez pas réellement créer un objet de type `WindowOrWorkerGlobalScope`.

## Propriétés

Ces propriétés sont définies sur le mixin {{domxref("WindowOrWorkerGlobalScope")}}, et implémentées par {{domxref("Window")}} et {{domxref("WorkerGlobalScope")}}.

- {{domxref("WindowOrWorkerGlobalScope.caches")}} {{readOnlyinline}}
  - : Renvoie l'objet {{domxref("CacheStorage")}} associé au contexte actuel. Cet objet active des fonctionnalités telles que le stockage des actifs pour une utilisation hors ligne et la génération de réponses personnalisées aux demandes.
- {{domxref("WindowOrWorkerGlobalScope.indexedDB")}} {{readonlyInline}}
  - : Fournit un mécanisme permettant aux applications d'accéder de manière asynchrone aux capacités des bases de données indexées; renvoie un objet {{domxref ("IDBFactory")}}.
- {{domxref("WindowOrWorkerGlobalScope.isSecureContext")}} {{readOnlyinline}}
  - : Renvoie un booléen indiquant si le contexte actuel est sécurisé (`true`) ou non (`false`).
- {{domxref("WindowOrWorkerGlobalScope.origin")}} {{readOnlyinline}}
  - : Renvoie l'origine de la portée globale, sérialisée sous forme de chaîne.

## Méthodes

Ces propriétés sont définies sur le mixin {{domxref("WindowOrWorkerGlobalScope")}}, et implémentées par {{domxref("Window")}} et {{domxref("WorkerGlobalScope")}}.

- {{domxref("WindowOrWorkerGlobalScope.atob()")}}
  - : Décode une chaîne de données qui a été encodée à l'aide d'un encodage base 64.
- {{domxref("WindowOrWorkerGlobalScope.btoa()")}}
  - : Crée une chaîne ASCII encodée en base 64 à partir d'une chaîne de données binaires.
- {{domxref("WindowOrWorkerGlobalScope.clearInterval()")}}
  - : Annule le jeu d'exécutions répétées ) l'aide de {{domxref("WindowOrWorkerGlobalScope.setInterval()")}}.
- {{domxref("WindowOrWorkerGlobalScope.clearTimeout()")}}
  - : Annule l'exécution différé définie à l'aide de {{domxref("WindowOrWorkerGlobalScope.setTimeout()")}}.
- {{domxref("WindowOrWorkerGlobalScope.createImageBitmap()")}}
  - : Accepte une variété de sources d'images différentes et renvoie un {{domxref ("Promise")}} qui se résout en {{domxref ("ImageBitmap")}}. Facultativement, la source est rognée sur le rectangle de pixels originaire de (sx, sy) avec une largeur sw et une hauteur sh.
- {{domxref("WindowOrWorkerGlobalScope.fetch()")}}
  - : Démarre le processus de récupération d'une ressource sur le réseau.
- {{domxref("WindowOrWorkerGlobalScope.setInterval()")}}
  - : Planifie une fonction à exécuter chaque fois qu'un nombre donné de millisecondes s'écoule.
- {{domxref("WindowOrWorkerGlobalScope.setTimeout()")}}
  - : Planifie une fonction à exécuter dans un laps de temps donné.

## Spécifications

| Spécification                                                                                                                                                            | Statut                               | Commentaire                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ | --------------------------------------------- |
| {{SpecName("HTML WHATWG",'webappapis.html#windoworworkerglobalscope-mixin', '<code>WindowOrWorkerGlobalScope</code> mixin')}} | {{Spec2('HTML WHATWG')}}     | C'est là que le mixin principal est défini.   |
| {{SpecName('Fetch','#fetch-method','fetch()')}}                                                                                                         | {{Spec2('Fetch')}}             | Définition de la méthode `fetch()`.           |
| {{SpecName('Service Workers', '#self-caches', 'caches')}}                                                                                             | {{Spec2('Service Workers')}} | Définition de la propriété `caches`.          |
| {{SpecName('IndexedDB 2', '#dom-windoworworkerglobalscope-indexeddb', 'indexedDB')}}                                                         | {{Spec2('IndexedDB 2')}}     | Définition de la propriété `indexedDB`.       |
| {{SpecName('Secure Contexts', 'webappapis.html#dom-origin', 'isSecureContext')}}                                                             | {{Spec2('Secure Contexts')}} | Définition de la propriété `isSecureContext`. |

## Compatibilité des navigateurs

{{Compat("api.WindowOrWorkerGlobalScope")}}

## Voir aussi

- {{domxref("Window")}}
- {{domxref("WorkerGlobalScope")}}
