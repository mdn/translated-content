---
title: API Web Workers
slug: Web/API/Web_Workers_API
tags:
  - API
  - DOM
translation_of: Web/API/Web_Workers_API
---
{{DefaultAPISidebar("Web Workers API")}}

Les **Web Workers** sont un mécanisme grâce auquel les instructions d'un script peuvent être exécutés dans un thread en arrière-plan séparé du thread d'exécution principal d'une application web. Cela a pour avantage qu'un traitement laborieux peut être réalisé dans un thread séparé, permettant au thread principal (généralement l'interface utilisateur) de fonctionner sans blocage ni ralentissement.

## Concepts et utilisation des Web Workers

Un worker est un objet créé en utilisant un constructeur (e.g. {{domxref("Worker.Worker", "Worker()")}}) qui exécute un fichier JavaScript nommé — ce fichier contient le code que doit exécuter le thread du worker; les workers s'exécutent dans un autre contexte global qui est différent du contexte actuel {{domxref("window")}}. Ce contexte est représenté par un objet {{domxref("DedicatedWorkerGlobalScope")}} dans le cas des workers dédiés (workers standards utilisés par un script unique; les workers partagés utilisent {{domxref("SharedWorkerGlobalScope")}}).

Vous pouvez exécuter quelque code que ce soit à l'intérieur du thread du worker, avec quelques exceptions cependant. Par exemple, vous ne pouvez pas directement manipuler le DOM à partir d'un worker, ou utiliser des méthodes et des propriétés par défaut de l'objet {{domxref("window")}}. Mais vous pouvez utiliser un grand nombre des éléments disponibles sous `window`, comprenant les [WebSockets](/fr/docs/WebSockets), et les mécanismes de stockage de données tels qu'[IndexedDB](/fr/docs/IndexedDB) et l'[API Data Store](/en-US/docs/Web/API/Data_Store_API) spécifique à Firefox OS. Consultez [Les fonctions et classes accessibles aux workers](/fr/docs/Web/API/Worker/Functions_and_classes_available_to_workers) pour plus de détails.

Les données sont envoyées entre les workers et le thread principal au moyen d'un sytème de messages — des deux côtés les messages sont envoyés en utilisant la méthode `postMessage()`, et la réponse leur parvient au moyen du gestionnaire d'événement `onmessage` (le message est contenu dans l'attribut `data` de l'événement {{event("Message")}}.) Les données sont copiées plutôt que partagées.

Les workers peuvent à leur tour engendrer de nouveaux workers, aussi longtemps que ces workers partagent la même origine que la page parente.  De plus, les workers peuvent utiliser [`XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest) pour les E/S réseau, à l'exception que les attributs `responseXML` et `channel` de `XMLHttpRequest` retournent toujours `null`.

En plus des workers dédiés, il y a d'autres types de worker :

- Les workers partagés sont des workers qui peuvent être utilisés par de multiples scripts s'exécutant dans différentes fenêtres, IFrames, etc., aussi longtemps qu'ils sont dans le même domaine que le worker. Leur fonctionnement est un petit plus complexe que les workers dédiés — les scripts doivent communiquer via un port actif. Consultez {{domxref("SharedWorker")}} pour plus de détails.
- Les [ServiceWorkers](/en-US/docs/Web/API/ServiceWorker_API) fonctionnent essentiellement comme des serveurs proxy placés entre des applications web, et le navigateur et le réseau (lorsque disponibles). Ils sont destinés (entre autres choses) à permettre la création de véritables expériences déconnectées, interceptant les requêtes du réseau et prenant des décisions appropriées en fonction de la disponibilité du réseau et de la mise à jours des ressources situées sur le serveur. Ils permettront aussi d'accéder à des notifications poussées (push) et à des APIs synchronisées en arrière-plan.
- Les Workers Chrome sont un type de worker spécifique à Firefox que vous pouvez utiliser si vous développez des extensions et que vous voulez y utiliser des workers et avoir accès aux [js-ctypes](/fr/docs/Mozilla/js-ctypes) dans votre worker. Consulter {{domxref("ChromeWorker")}} pour plus de détails.
- Les [Audio Workers](/fr/docs/Web/API/Web_Audio_API#Audio_Workers) donne la possibilité d'effectuer directement dans le contexte d'un worker web un traitement audio scripté.

> **Note :** Selon les [Spécifications de Web Worker](https://html.spec.whatwg.org/multipage/workers.html#runtime-script-errors-2), les erreurs dans les workers ne devraient pas déborder (voir {{bug(1188141)}}). Cela a été implémenté dans Firefox 42.

## Les interfaces Web Worker

- {{domxref("AbstractWorker")}}
  - : Propriétés et méthodes abstraites communes à tous les types de workers (i.e. {{domxref("Worker")}} ou {{domxref("SharedWorker")}}).
- {{domxref("Worker")}}
  - : Représente le thread d'un worker en cours d'exécution, vous permettant de passer des messages au code du worker en cours d'exécution.
- {{DOMxRef("WorkerLocation")}}
  - : Défini la localisation du scripte exécuté par le [Worker](/fr/docs/Web/API/Worker).
- {{domxref("SharedWorker")}}
  - : Représente un type spécifique de worker qui peut être _accédé_ à partir de plusieurs contextes de navigation, à savoir plusieurs fenêtres, iframes ou même workers.
- {{domxref("WorkerGlobalScope")}}
  - : Représente le contexte générique de tout worker (il joue le même rôle que {{domxref("Window")}} pour un contenu web normal). Les différents types de worker ont un contexte d'objets qui hérite de cette interface et ajoute des fonctionnalités supplémentaires.
- {{domxref("DedicatedWorkerGlobalScope")}}
  - : Représente le contexte d'un worker dédié, héritant de {{domxref("WorkerGlobalScope")}} et ajoutant des fonctionnalités spécifiques.
- {{domxref("SharedWorkerGlobalScope")}}
  - : Représente le contexte d'un worker partagé, héritant de {{domxref("WorkerGlobalScope")}} et ajoutant des fonctionnalités spécifiques.
- {{domxref("WorkerNavigator")}}
  - : Représente l'identité et l'état de l'agent utilisateur (le client):

## Exemples

Nous avons créé deux simples démos pour illustrer des usages basiques :

- [Exemple basique d'un worker dédié](https://github.com/mdn/simple-web-worker) ([lancer le worker dédié](http://mdn.github.io/simple-web-worker/)).
- [Exemple basique d'un worker partagé](https://github.com/mdn/simple-shared-worker) ([lancer le worker partagé](http://mdn.github.io/simple-shared-worker/)).

Vous pouvez obtenir plus d'informations sur le fonctionnement de ces démos dans notre [guide d'utilisation des web workers](/fr/docs/Utilisation_des_web_workers).

## Spécifications

| Spécification                                                                            | Statut                           | Commentaire          |
| ---------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName("HTML WHATWG", "workers.html#workers", "Web Workers")}} | {{Spec2("HTML WHATWG")}} | Définition initiale. |

## Voir aussi

- [Utilisation des web workers](/fr/docs/Utilisation_des_web_workers)
- [L'interface Worker](/fr/docs/Web/API/Worker)
- [L'interface SharedWorker](/fr/docs/Web/API/SharedWorker)
- [L'API ServiceWorker](/en-US/docs/Web/API/ServiceWorker_API)
- [Les fonctions et classes accessibles aux workers](/fr/docs/Web/API/Worker/Functions_and_classes_available_to_workers)
- [ChromeWorker](/en-US/docs/Web/API/ChromeWorker) : pour l'utilisation des workers dans un code privilégié (chrome)
