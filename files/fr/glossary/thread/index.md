---
title: Fil d'exécution
slug: Glossary/Thread
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Dans les sciences de l'informatique, le **fil d'exécution** correspond au lancement de plusieurs tâches ou programmes au même moment. Chaque unité capable d'exécuter du code est nommée un **fil d'exécution**.

Le **{{Glossary("main thread", "fil d'exécution principal")}}** est celui qui est utilisé par le navigateur pour prendre en charge les évènements générés par l'internaute, le rendu et la peinture de la page, ainsi que pour lancer la majorité du code utilisé par une page ou une application web. Comme tout cela se passe au sein du fil principal, un site ou une application web lente ralentit aussi l'ensemble du navigateur. Pire, si un script lancé par un site ou une application entre dans une boucle infinie, le fonctionnement du navigateur tout entier sera suspendu. Ce ralentissement général du navigateur conduit à une expérience de navigation frustrante.

Le {{Glossary("JavaScript")}} moderne propose des moyens de créer des fils d'exécution supplémentaires, chacun s'exécutant de façon indépendante tout en pouvant communiquer entre eux. Cela se fait grâce à des technologies telles que les [web <i lang="en">worker</i>](/fr/docs/Web/API/Web_Workers_API), qui permettent de lancer un sous-programme s'exécutant en parallèle du fil d'exécution principal dans son propre fil. Cela permet d'exécuter des tâches lentes, complexes ou longues indépendamment du fil principal, préservant ainsi les performances globales du site ou de l'application, ainsi que celles du navigateur dans son ensemble.
Le multi-fil d'exécution permet aussi aux applications web de profiter des processeurs multi-cœurs modernes, offrant ainsi de meilleures performances que les applications multi-fils fonctionnant sur un seul cœur.

Il existe un type spécifique de <i lang="en">worker</i>, nommé **[service worker](/fr/docs/Web/API/Service_Worker_API)**, qui peut être créé — avec la permission de l'internaute — en arrière-plan afin d'exécuter des scripts alors même que la personne n'est pas connectée au site. C'est utilisé pour créer des sites capables de notifier l'internaute lorsque des choses se passent, même s'il n'est pas connecté activement au site. Cela permet par exemple d'indiquer à une personne le fait qu'elle a reçu un e-mail même si elle n'est pas connectée à son gestionnaire d'e-mails.

Plus généralement, ces fils créés par le système d'exploitation sont extrêmement utiles. Ils aident à minimiser le temps de bascule entre les différents contextes de chaque application tournant sur l'ordinateur, et permettent une communication plus efficiente grâce à l'utilisation de l'architecture multiprocesseur des ordinateurs modernes.

## Voir aussi

- [JavaScript asynchrone](/fr/docs/Learn_web_development/Extensions/Async_JS)
- [L'API Web worker](/fr/docs/Web/API/Web_Workers_API)
- [L'API Service worker](/fr/docs/Web/API/Service_Worker_API)
- Terme associé du glossaire&nbsp;:
  - {{Glossary("Main thread", "Fil d'exécution principal")}}
