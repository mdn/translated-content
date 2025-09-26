---
title: Asynchrone
slug: Glossary/Asynchronous
l10n:
  sourceCommit: 0c79cdfe93f2af272fb058db30c5d6f0a37c3263
---

{{GlossarySidebar}}

Le terme **asynchrone** fait référence à deux ou plus objets ou événements qui n'existent ou n'ont pas lieu en même temps. On dit qu'ils ne sont **pas** [synchrones](/fr/docs/Glossary/Synchronous). Quand des éléments ne dépendent pas de la réalisation d'autres éléments pour se réaliser, ils sont asynchrones.

En informatique, le terme asynchrone est principalement utilisé dans deux contextes, les communications et la conception de logiciel.

## Réseau et communication

La communication asynchrone est une méthode d'échange de messages dans laquelle l'envoi, la réception et le traitement de chaque message sont indépendants de l'envoi, de la réception et du traitement des autres messages. Dans une communication asynchrone, chacun reçoit et traite les messages lorsqu'il le veut ou le peut, plutôt que instantanément lorsque le message arrive. De plus, cela permet d'envoyer des messages sans attendre d'accusés de réception, en sachant que le destinataire gérera les problèmes en demandant un renvoi, par exemple.

Les e-mails sont un type de communication asynchrone à l'échelle humaine. L'expéditeur envoie un e-mail. Le destinataire lit et répond (ou non) à sa convenance, plutôt qu'instantanément. Les deux peuvent recevoir et envoyer d'autres messages à tout instant. Les e-mails n'ont pas besoin d'être dans un ordre particulier.

Dans un logiciel asynchrone, l'envoi d'une requête, à un serveur par exemple, ne bloque pas le reste du logiciel en attendant la réponse. Le logiciel peut donc effectuer d'autres tâches en attendant. Par exemple dans les API basées sur les [promesses](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise), l'objet `promise` est créé pour les opérations longues. Une fois l'opération effectuée, la promesse est rendue. Le logiciel n'ayant pas eu besoin d'attendre la fin de l'opération.

## Conception logicielle

Une conception de logiciel asynchrone étend le concept précédent en créant du code permettant à un programme de lancer des tâches secondaires sans attendre leur complétion. Quand une tâche secondaire se termine, la tâche principale est notifiée selon un mécanisme prédéfini lui permettant de savoir comment la tâche secondaire s'est terminée et comment le résultat, s'il y en a un, est disponible.

Il existe de nombreuses techniques permettant d'implémenter des logiciels asynchrones. L'article [JavaScript asynchrone](/fr/docs/Learn_web_development/Extensions/Async_JS) en donne une introduction.

## Voir aussi

- [Récupérer des données du serveur](/fr/docs/Learn_web_development/Core/Scripting/Network_requests)
- [Synchrone](/fr/docs/Glossary/Synchronous)
