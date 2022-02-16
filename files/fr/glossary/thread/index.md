---
title: Fil d'exécution
slug: Glossary/Thread
translation_of: Glossary/Thread
---
Dans les sciences de l'informatique, le **fil d'exécution** correspond au lancement de plusieurs tâches ou programmes au même moment. Chaque unité capable d'exécuter du code est nommée un **fil d'exécution**.

Le **[fil d'exécution principal](/fr/docs/Glossary/Main_thread)** est celui qui est utilisé par le navigateur pour prendre en charge les évènements générés par l'internaute, le rendu et la peinture de la page, ainsi que pour lancer la majorité du code utilisé par une page ou une application web. Comme tout cela se passe au sein du fil principal, un site ou une application web lente ralentit aussi l'ensemble du navigateur. Pire, si un script lancé par un site ou une application entre dans une boucle infinie, le fonctionnement du navigateur tout entier sera suspendu. Ce ralentissement général du navigateur conduit à une expérience de navigation frustrante.

Cependant, le [JavaScript](/fr/docs/JavaScript) moderne offre plusieurs façons de créer des fils additionnels permettant de répartir indépendamment l'exécution tout en permettant à ces fils d'exécution de communiquer les uns avec les autres. Cela est faisable en utilisant des technologies telles que **[l'API web workers](/fr/docs/Web/API/Web_Workers_API)**, qui peut être utilisée pour lancer un sous-programme chargé de se lancer dans son propre fil, en parallèle du fil d'exécution principal. Cela préserve les performances d'ensemble du site ou de l'application, ainsi que plus généralement de l'ensemble du navigateur. Cela permet aussi aux internautes de profiter des avantages des processeurs multicœur modernes.

Il existe un type spécifique de <i lang="en">worker</i>, nommé **[service worker](/fr/docs/Web/API/Service_Worker_API)**, qui peut être créé – avec la permission de l'internaute – en arrière-plan afin d'exécuter des scripts alors même que la personne n'est pas connectée au site. C'est utilisé pour créer des sites capables de notifier l'internaute lorsque des choses se passent, même s'il n'est pas connecté activement au site. Cela permet par exemple d'indiquer à une personne le fait qu'elle a reçu un e-mail même si elle n'est pas connectée à son gestionnaire d'e-mails.

Plus généralement, ces fils créés par le système d'exploitation sont extrêmement utiles. Ils aident à minimiser le temps de bascule entre les différents contextes de chaque application tournant sur l'ordinateur, et permettent une communication plus efficiente grâce à l'utilisation de l'architecture multiprocesseur des ordinateurs modernes.

## Voir aussi

- [JavaScript asynchrone](/fr/docs/Learn/JavaScript/Asynchronous)
- [API Web worker](/fr/docs/Web/API/Web_Workers_API)
- [API Service worker](/fr/docs/Web/API/Service_Worker_API)
- [Fil d'exécution principal (entrée du glossaire)](/fr/docs/Glossary/Main_thread)
