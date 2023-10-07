---
title: Browser storage limits and eviction criteria
slug: Web/API/Storage_API/Storage_quotas_and_eviction_criteria
---

{{DefaultAPISidebar("IndexedDB")}}

Существует целый ряд веб-технологий, которые хранят данные того или иного рода на стороне клиента (то есть на локальном диске). Процесс, с помощью которого браузер решает, сколько места выделить для хранения веб-данных и что удалить, когда этот предел будет достигнут, не прост и отличается между браузерами. В этой статье описывается, как браузеры определяют, какой локальный контент следует очистить и когда, чтобы освободить необходимое локальное пространство для хранения.

> **Примечание:** приведённая ниже информация должна быть достаточно точной для большинства современных браузеров, но специфика браузера вызывается там, где она известна. Opera и Chrome должны вести себя одинаково во всех случаях. Opera Mini (все ещё основанная на presto, серверная визуализация) не хранит никаких данных на клиенте.

## Какие технологии используют браузерные хранилища данных?

В Firefox следующие технологии используют хранилище данных браузера для хранения данных, когда это необходимо. В этом контексте мы называем их "квотными клиентами":

- [IndexedDB](/ru/docs/Web/API/IndexedDB_API)
- [asm.js](http://asmjs.org/) кеширование
- [Cache API](/ru/docs/Web/API/Cache)
- Cookies

> **Примечание:** В Firefox веб-хранилище скоро начнёт использовать те же инструменты управления хранилищем, что и в этом документе.

> **Примечание:** в режиме приватного просмотра большинство хранилищ данных не поддерживается. Данные локального хранилища и файлы cookie все ещё хранятся, но они эфемерны — данные удаляются, когда вы закрываете последнее окно приватного просмотра.

The "last access time" of origins is updated when any of these are activated/deactivated — origin eviction will delete data for all these quota clients.

In Chrome/Opera, the Quota Management API handles quota management for [AppCache](/ru/docs/Web/HTML/Using_the_application_cache), [IndexedDB](/ru/docs/Web/API/IndexedDB_API), WebSQL, and [File System API](/ru/docs/Web/API/File_System_API).

## Different types of data storage

Even in the same browser, using the same storage method, there are different classes of data storage to understand. This section discusses the different ones you might find in different browsers.

Storage comes in two types:

- Persistent: This is data that is intended to be kept around for a long time. This will only be evicted if the user chooses to (for example, in Firefox you can choose to delete all stored data or only stored data from selected origins by going to _Preferences_ and using the options under _Privacy & Security > Cookies & Site Data_).
- Temporary: This is data that doesn't need to persist for a very long time. This will be evicted under a least recently used ([LRU policy](#lru_policy)) when [Storage limits](#storage_limits) are reached.

In Firefox, when persistent storage is used, the user is given a UI popup to alert them that this data will persist, and asks if they are happy with that. Temporary data storage does not elicit any user prompts.

Storage is temporary by default; developers can choose to use persistent storage for their sites using the {{domxref("StorageManager.persist()")}} method available in the [Storage API](/ru/docs/Web/API/Storage_API).

## Where is the data stored?

Each storage type represents a separate repository. Here's the actual mapping to directories under a user's Firefox profile (other browsers may differ slightly):

- `<profile>/storage` — the main top-level directory for storages maintained by the quota manager (see below)
- `<profile>/storage/permanent` — persistent data storage repository
- `<profile>/storage/temporary` — temporary data storage repository
- `<profile>/storage/default` — default data storage repository

> **Примечание:** After introducing [Storage API](/ru/docs/Web/API/Storage_API), the "permanent" folder can be considered obsolete; the "permanent" folder only stores IndexedDB persistent-type databases. It doesn't matter if box mode is "best-effort" or "persistent" — data is stored under \<profile>/storage/default.

> **Примечание:** In Firefox, you can find your profile folder by entering `about:support` in the URL bar, and pressing the _Show in..._ button (e.g., _Show in Finder_ on Mac OS X) next to the _Profile Folder_ title.

> **Примечание:** If you are looking around in your Profile at the data stored, you might see a fourth folder: `persistent`. Basically, the `persistent` folder was renamed to `permanent` a while ago to keep upgrades/migration simpler.

> **Примечание:** Users shouldn't add their own directories or files under `<profile>/storage`. This will cause storage initialization to fail; for example, {{domxref("IDBFactory.open()", "open()")}} will fire an error event.

## Storage limits

The maximum browser storage space is dynamic — it is based on your hard drive size. The **global limit** is calculated as 50% of free disk space. In Firefox, an internal browser tool called the Quota Manager keeps track of how much disk space each origin is using up, and deletes data if necessary.

So if your hard drive is 500 GB, then the total storage for a browser is 250 GB. If this is exceeded, a process called **origin eviction** comes into play, deleting an entire origin's worth of data until the storage amount goes under the limit again. There is no trimming effect put in place to delete parts of origins — deleting one database of an origin could cause problems with inconsistency.

There's also another limit called **group limit** — this is defined as 20% of the global limit, but it has a minimum of 10 MB and a maximum of 2 GB. Each origin is part of a group (group of origins). There's one group for each eTLD+1 domain. For example:

- `mozilla.org` — group1, origin1
- `www.mozilla.org` — group1, origin2
- `joe.blogs.mozilla.org` — group1, origin3
- `firefox.com` — group2, origin4

In this group, `mozilla.org`, `www.mozilla.org`, and `joe.blogs.mozilla.org` can aggregately use a maximum of 20% of the global limit. `firefox.com` has a separate maximum of 20%.

The two limits react differently to limits being reached:

- The group limit is also called the "hard limit": it doesn't trigger origin eviction.
- The global limit is a "soft limit" since there's a chance that some space will be freed and the operation can continue.

> **Примечание:** The group limit can't be more than the global limit, despite the minimum group limit mentioned above. If you had a really low memory situation where the global limit was, say, 8 MB, then the group limit would also be 8 MB.

> **Примечание:** If the group limit is exceeded, or if origin eviction couldn't free enough space, the browser will throw a `QuotaExceededError`.

> **Примечание:** In Chrome the soft and hard storage quota limits has changed since **M66**. More information can be found [here.](https://chromium.googlesource.com/chromium/src/+/refs/heads/master/storage/browser/quota/quota_settings.cc#68)

## LRU policy

When the available disk space is filled up, the quota manager will start clearing out data based on an LRU policy — the least recently used origin will be deleted first, then the next one, until the browser is no longer over the limit.

We track the "last access time" for each origin using temporary storage. Once the global limit for temporary storage is reached (more on the limit later), we try to find all currently unused origins (i.e., ones with no tabs/apps open that are keeping open datastores). These are then sorted according to "last access time." The least recently used origins are then deleted until there's enough space to fulfill the request that triggered this origin eviction.

## See also

- [Working with quota on mobile browsers](http://www.html5rocks.com/en/tutorials/offline/quota-research/), by [Eiji Kitamura.](http://blog.agektmr.com) A detailed analysis of client-side storage on mobile browsers.
- [Quota Management API: Fast Facts](https://developers.google.com/web/updates/2011/11/Quota-Management-API-Fast-Facts), by[Eiji Kitamura.](http://blog.agektmr.com) A look at the Quota Management API in Chrome/Blink (which should include Opera, too).
