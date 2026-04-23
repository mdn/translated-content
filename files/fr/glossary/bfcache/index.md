---
title: bfcache
slug: Glossary/bfcache
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

La **mémoire cache avant/arrière** (ou **bfcache**) est une fonctionnalité d'optimisation des performances disponible dans les navigateurs modernes. Elle permet une navigation instantanée vers l'arrière ou l'avant entre les pages déjà visitées. Pour cela, le navigateur conserve un instantané complet de la page lorsque l'utilisateur·ice la quitte&nbsp;: il peut ainsi restaurer rapidement cet instantané si l'utilisateur·ice décide d'y revenir, sans devoir répéter les requêtes réseau nécessaires au rechargement de la page.

L'instantané contient toute la page en mémoire, y compris le tas JavaScript&nbsp;: le code en cours d'exécution est mis en pause lorsque l'utilisateur·ice quitte la page, puis repris à son retour. Une entrée classique du cache HTTP, en revanche, ne contient que les réponses aux requêtes précédentes. Le bfcache offre donc des résultats plus rapides que le cache HTTP.

L'inconvénient est que les entrées bfcache consomment plus de ressources et complexifient la gestion du code en cours d'exécution. Certaines fonctionnalités JavaScript (par exemple, le gestionnaire d'événement {{DOMxRef("Window.unload_event", "unload")}}) ne sont pas compatibles&nbsp;: leur présence sur une page empêche l'utilisation du bfcache.

Le bfcache est excellent pour les performances&nbsp;: il est donc dans votre intérêt de veiller à ce que vos pages ne soient pas bloquées. Vous pouvez utiliser l'API {{DOMxRef("Performance_API/Monitoring_bfcache_blocking_reasons", "notRestoredReasons")}} pour surveiller si vos pages sont bloquées et en connaître la raison.

## Voir aussi

- [Mémoire cache avant/arrière <sup>(angl.)</sup>](https://web.dev/articles/bfcache) sur web.dev (2023)
