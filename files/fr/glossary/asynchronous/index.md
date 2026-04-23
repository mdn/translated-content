---
title: Asynchrone
slug: Glossary/Asynchronous
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Le terme **asynchrone** fait référence à deux objets ou plus, ou à des événements, qui n'existent pas ou n'ont pas lieu en même temps. On dit qu'ils ne sont **pas** {{Glossary("Synchronous", "synchrone")}}. Quand des éléments ne dépendent pas de la réalisation d'autres éléments pour se réaliser, ils sont asynchrones.

En informatique, le terme «&nbsp;asynchrone&nbsp;» est principalement utilisé dans deux contextes&nbsp;: les communications et la conception logicielle.

## Réseau et communication

La communication asynchrone est une méthode d'échange de messages dans laquelle l'envoi, la réception et le traitement de chaque message sont indépendants de l'envoi, de la réception et du traitement des autres messages. Dans une communication asynchrone, chacun reçoit et traite les messages lorsqu'il le veut ou le peut, plutôt que instantanément lorsque le message arrive. De plus, cela permet d'envoyer des messages sans attendre d'accusés de réception, en sachant que le destinataire gérera les problèmes en demandant un renvoi, par exemple.

Les e-mails sont un type de communication asynchrone à l'échelle humaine. L'expéditeur envoie un e-mail. Le destinataire lit et répond (ou non) à sa convenance, plutôt qu'instantanément. Les deux peuvent recevoir et envoyer d'autres messages à tout instant. Les e-mails n'ont pas besoin d'être dans un ordre particulier.

Dans un logiciel asynchrone, l'envoi d'une requête, à un serveur par exemple, ne bloque pas le reste du logiciel en attendant la réponse. Le logiciel peut donc effectuer d'autres tâches en attendant. Par exemple, dans [les API basées sur les promesses](/fr/docs/Learn_web_development/Extensions/Async_JS/Implementing_a_promise-based_API), l'objet {{JSxRef("Promise")}} est créé pour les opérations longues. Une fois l'opération effectuée, la promesse est rendue. Le logiciel n'a pas eu besoin d'attendre la fin de l'opération.

## Conception logicielle

Une conception de logiciel asynchrone étend le concept précédent en créant du code permettant à un programme de lancer des tâches secondaires sans attendre leur complétion. Quand une tâche secondaire se termine, la tâche principale est notifiée selon un mécanisme prédéfini lui permettant de savoir comment la tâche secondaire s'est terminée et comment le résultat, s'il y en a un, est disponible.

Il existe de nombreuses techniques permettant d'implémenter des logiciels asynchrones. L'article [JavaScript asynchrone](/fr/docs/Learn_web_development/Extensions/Async_JS) en donne une introduction.

## Voir aussi

- [Apprendre&nbsp;: Faire des requêtes réseau avec JavaScript](/fr/docs/Learn_web_development/Core/Scripting/Network_requests)
- Terme associé du glossaire&nbsp;:
  - {{Glossary("Synchronous", "Synchrone")}}
