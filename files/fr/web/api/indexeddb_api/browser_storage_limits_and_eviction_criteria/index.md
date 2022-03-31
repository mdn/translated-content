---
title: Limites de stockage du navigateur et critères d'éviction
slug: Web/API/IndexedDB_API/Browser_storage_limits_and_eviction_criteria
tags:
  - Base de données
  - IndexedDB
  - LRU
  - Limites
  - Stockage
  - eviction
translation_of: Web/API/IndexedDB_API/Browser_storage_limits_and_eviction_criteria
original_slug: Web/API/API_IndexedDB/Browser_storage_limits_and_eviction_criteria
---
{{DefaultAPISidebar("IndexedDB")}}

> **Note :** Il existe un certain nombre de technologies Web qui stockent des données d'un type ou d'un autre du côté client (c'est-à-dire sur le disque local). Le processus par lequel le navigateur calcule l'espace alloué au stockage de données Web et les données à supprimer quand la limite est atteinte n'est pas simple et diffère d'un navigateur à l'autre. Cet article tente d'expliquer comment tout cela fonctionne.

> **Note :** Les informations ci-dessous devraient être assez précises pour la plupart des navigateurs modernes, mais les spécificités du navigateur sont évoquées quand elles sont connues. Opera et Chrome devraient se comporter de la même manière dans tous les cas. Mais [Opera Mini](http://www.opera.com/mobile/mini) (encore basé sur presto du côté serveur) ne stocke aucune donnée sur le client.

## Les différents types de stockage des données

Même dans le même navigateur, en utilisant la même méthode de stockage, il existe différentes classes de stockage de données à comprendre. Cette section traite des différents types que vous pouvez trouver dans différents navigateurs.

Généralement, les deux principaux types de stockage sont les suivants :

- Persistant : ce sont des données qui doivent être conservées pendant une longue période. Elles ne seront évincéés que si l'utilisateur le choisit (par exemple, dans Firefox, il existe un bouton "nettoyer stockage" dans la boîte de dialogue d'informations sur la page pour chaque page).
- Temporaire : il s'agit de données qui n'ont pas besoin de persister très longtemps. Elles seront évacuées en-dessous d'un minimum d'utilisation (voir la [politique LRU](#politique_lru)) lorsque les limites de stockage sont atteintes.

Par défaut, le stockage temporaire sera utilisé dans la plupart des contextes d'utilisation (par exemple, des applications Web standard) et le persistant pour les applications installées (par exemple, les applications Firefox installées sur le système d'exploitation Firefox OS / Firefox de bureau, les applications Chrome).

### Spécificités de Firefox

Dans Firefox, vous pouvez choisir le type de stockage que vous souhaitez utiliser en incluant une option propriétaire — `storage` — lorsque vous créez une base de données IndexedDB en utilisant {{domxref ("IDBFactory.open ()", "open ()")}} :

- ```js
  var request = indexedDB.open("myDatabase", { version: 1, storage: "persistent" });
  ```
- ```js
  var request = indexedDB.open("myDatabase", { version: 1, storage: "temporary" });
  ```

Dans Firefox, quand le stockage persistant est choisi, l'utilisateur reçoit une fenêtre de dialogue d'interface utilisateur pour l'avertir que ces données persisteront et lui demander s'il en est satisfait.

Les données de stockage temporaire ne provoquent aucune fenêtre de dialogue vers l'utilisateur, mais il y a des [limites de stockage](#limites_de_stockage).

### "Default storage" dans Firefox _(stockage par défaut)_

C'est le troisième type de stockage à envisager dans Firefox — "Default storage" _(stockage par défaut)_.  C'est une option par défaut, utilisée quand vous ne spécifiez pas le paramètre `storage`  vu ci-dessus. Les données du stockage par défaut se comportent différemment selon les circonstances : assimilées aux données d'un stockage persistant pour les applications installées de Firefox OS, ou d'un stockage temporaire pour tout autre type d'utilisation.

## Où sont stockées les données ?

Chaque type de stockage représente un référentiel distinct, voici la cartographie réelle des répertoires sous le profil Firefox d'un utilisateur (d'autres navigateurs peuvent différer légèrement) :

- `<profile>/storage` — le principal, le plus haut niveau de répertoire pour le stockage maintenu par le " quota manager " _(manager de quotas)_ (voir ci-dessous).
- `<profile>/storage/permanent` — répertoire de stockage des données persistantes.
- `<profile>/storage/temporary` — répertoire de stockage des données temporaires.
- `<profile>/storage/default` — répertoire de stockage des données par défaut.

> **Note :** Depuis l'introduction de l' [API Storage](/en-US/docs/Web/API/Storage_API) , le dossier "permanent" peut être considéré comme obsolète, il n'est plus utilisé que pour les bases de données de type persistant IndexedDB. Peu importe le mode, "best-effort" _(meilleur effort)_ ou "persistant", les données sont stockées sous `<profile>/storage/default`.

> **Note :** Dans Firefox, vous pouvez trouver votre dossier profil en entrant : `support` dans la barre d'URL et en appuyant sur le bouton _Show in.._. _(Afficher dans ...)_ (par exemple, _"Show in Finder"_ sur Mac OS X) à côté du titre _"Profile Folder" (dossier de profil)_ .

> **Note :** Si vous regardez dans votre profil les répertoires de données stockées, vous pouvez voir un quatrième dossier : `persistent` . À la base, le dossier `persistent` a été renommé `permanent,` il y a quelques temps, pour faciliter les mises à niveau / migrations.

> **Note :** Les utilisateurs ne doivent pas ajouter leurs propres répertoires ou fichiers sous `<profile>/storage` . Cela entraînerait l'échec de l'initialisation du stockage ; par exemple {{domxref ("IDBFactory.open ()", "open ()")}} déclencherait un événement d'erreur.

## Limites de stockage

L'espace de stockage maximal du navigateur est dynamique  — il est basé sur la taille de votre disque dur. La limite globale est calculée sur la base de 50% de l'espace disque libre. Dans Firefox, un outil interne du navigateur appelé " Quota Manager " _(gestionnaire de quotas)_ surveille la quantité d'espace disque utilisée par chaque origine et supprime les données si nécessaire.

Donc, si votre disque dur est de 500 Go, le stockage total d'un navigateur est de 250 Go. S'il est dépassé, une procédure appelée **"origin eviction"** _(éviction d'origine)_ entre en jeu, en supprimant la valeur totale de l'origine jusqu'à ramener le niveau de stockage en-dessous de la limite. La suppression d'une base de données d'origine peut entraîner des problèmes d'incohérence.

Il y a aussi une autre limite appelée **group limit** — ceci est défini comme 20% de la limite globale. Chaque origine fait partie d'un groupe (groupe d'origines). Il existe un groupe pour chaque domaine eTLD + 1.

Par exemple :

- `mozilla.org` — groupe1, origine1
- `www.mozilla.org` — groupe1, origine2
- `joe.blogs.mozilla.org` — groupe1, origine3
- `firefox.com` — groupe2, origine4

Ces groupes, `mozilla.org`, `www.mozilla.org`, et `joe.blogs.mozilla.org` peuvent utiliser globalement un maximum de 20% de la limite globale. `firefox.com` a un maximum distinct de 20%.

Les deux limites reagissent différemment quand la limite est atteinte :

- La limite de groupe est également appelée «limite dure»: elle ne déclenche pas l'éviction d'origine.
- La limite globale est une «limite douce» car il est possible que certains espaces soient libérés et que l'opération puisse se poursuivre.

> **Note :** Si la limite de groupe est dépassée, ou si l'éviction d'origine ne crée pas assez d'espace libre, le navigateur lance  `QuotaExceededError`.

## Politique LRU

Lorsque l'espace disque disponible est rempli, le gestionnaire de quotas commence à effacer les données sur la base de la politique LRU — l'origine la moins utilisée sera d'abord supprimée, puis la suivante, jusqu'à ce que le navigateur ne dépasse plus la limite.

Nous traçons le "dernier temps d'accès" pour chaque origine utilisant le stockage temporaire. Une fois que la limite globale du stockage temporaire est atteinte, nous essayons de trouver toutes les origines actuellement inutilisées (c'est-à-dire, sans onglets ou applications ouverts qui conservent des bases de données ouvertes). Celles-ci sont ensuite triées sur le dernier accès. Les origines les moins récemment utilisées sont ensuite supprimées jusqu'à ce qu'il y ait suffisamment d'espace pour répondre à la demande qui a déclenché cette éviction d'origine.

## Quelles technologies utilisent le stockage de données du navigateur ?

Dans Firefox, les technologies suivantes utilisent le stockage de données du navigateur pour stocker des données au besoin. Nous les qualifions de "quota clients" dans ce contexte :

- [IndexedDB](/fr/docs/Web/API/API_IndexedDB)
- [asm.js](http://asmjs.org/) caching
- [Cache API](/fr/docs/Web/API/Cache)

Le «dernier temps d'accès» des origines est mis à jour lorsque l'un de ces éléments est activé / désactivé. L'éviction d'origine supprimera les données pour tous ces "quota clients".

Dans Chrome / Opera, l'API " Quota Management" gère les quotas pour [AppCache](/en-US/docs/Web/HTML/Using_the_application_cache), [IndexedDB](/en-US/docs/Web/API/IndexedDB_API), WebSQL et [File System API](/en-US/docs/Web/API/File_System_API).

## Voir aussi

- [Gérer des quotas sur les navigateurs mobiles (en anglais)](https://www.html5rocks.com/en/tutorials/offline/quota-research/), de [Eiji Kitamura](https://blog.agektmr.com). Une analyse détaillée du stockage côté client sur les navigateurs mobiles.
- [Stockage de données web (en anglais)](https://web.dev/storage-for-the-web/) (<https://web.dev/>)
