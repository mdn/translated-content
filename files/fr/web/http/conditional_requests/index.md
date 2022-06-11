---
title: 'HTTP : Requêtes conditionnelles'
slug: Web/HTTP/Conditional_requests
tags:
  - Conditional Requests
  - Guide
  - HTTP
translation_of: Web/HTTP/Conditional_requests
original_slug: Web/HTTP/Requêtes_conditionnelles
---
{{HTTPSidebar}}

Il existe en HTTP un concept de _requête conditionnelle_ où le résultat, et même le succès d'une requête, peut être changé en comparant les ressources affectées avec la valeur d'un _validateur_. De telles requêtes peuvent être utiles pour valider le contenu d'un cache et éviter un contrôle inutile, pour vérifier l'intégrité d'un document, par exemple pour la reprise d'un téléchargement ou pour éviter de perdre des mises à jour quand on uploade ou modifie un document sur le serveur.

## Principes

Les requêtes conditionnelles HTTP s'exécutent différemment en fonction de la valeur spécifique d'en-têtes. Ces en-têtes définissent une condition de départ (pré-condition) et le résultat de la requête sera différent selon que la pré-condition est satisfaite ou non.

Les comportements différents sont définis par la méthode qu'utilise la requête et par un ensemble d'en-têtes propres aux préconditions :

- Pour une méthode [safe](/fr/docs/Glossary/safe) comme [`GET`](/fr/docs/Web/HTTP/Methods/GET), qui est généralement utilisée pour récupérer un document, la requête conditionnelle peut être utilisée afin de renvoyer le document uniquement si c'est pertinent. Cela économise de la bande passante.
- Pour les méthodes [unsafe](/fr/docs/Glossary/safe) comme [`PUT`](/fr/docs/Web/HTTP/Methods/PUT), qui permet généralement d'uploader un document, la requête conditionnelle peut servir à charger le document, uniquement si l'original sur lequel la requête est basée est le même que celui stocké sur le serveur.

## Validateurs

Tous les en-têtes conditionnels vérifient si la ressource stockée sur le serveur correspond à une version spécifique. Pour accomplir ceci, la requête conditionnelle doit préciser la version de la ressource. En effet, comparer l'ensemble octet par octet n'est pas faisable en pratique et ce n'est pas toujours le comportement désiré non plus. La requête transmet une valeur qui caractérise la version. Ces valeurs sont appelées validateurs et il en existe deux sortes :

- La date de dernière modification du document fournie par _`Last-Modified`_.
- Une chaîne de caractères sans signification particulière identifiant uniquement chaque version. On l'appelle "étiquette d'entité" ou "etag", fournie par _`ETag`_.

Comparer les versions d'une même ressource est un peu délicat : en fonction du contexte, il existe deux sortes de vérification d'équivalence :

- _Une validation forte_, utilisée quand une vérification à l'octet près est demandée, par exemple pour reprendre un téléchargement.
- _Une validation faible_, utilisée quand l'agent-utilisateur doit seulement déterminer si deux ressources ont le même contenu. Ils sont égaux même s'ils ont des différences minimes comme des publicités différentes ou un pied de page avec une date différente.

La sorte de la vérification est indépendante du validateur utilisé. [`Last-Modified`](/fr/docs/Web/HTTP/Headers/Last-Modified) et [`ETag`](/fr/docs/Web/HTTP/Headers/ETag) permettent les deux types de validation bien que la complexité d'implémentation côté serveur soit variable. HTTP se sert de la validation forte par défaut et spécifie quand la validation faible peut être employée.

### Validation forte

La validation forte consiste à garantir que la ressource est identique à celle à laquelle elle est comparée, à l'octet près. Cette validation est obligatoire pour certains en-têtes et correspond au comportement par défaut pour d'autres. La validation forte est stricte et peut être difficile à garantir côté serveur mais cela garantit qu'à aucun moment une donnée n'est perdue, parfois au détriment de la performance.

Il est assez difficile d'avoir un identifiant unique pour la validation forte avec [`Last-Modified`](/fr/docs/Web/HTTP/Headers/Last-Modified). On le fait souvent en employant une [`ETag`](/fr/docs/Web/HTTP/Headers/ETag) avec le hachage MD5 de la ressource (ou un dérivé).

### Validation faible

La validation faible diffère de la validation forte, car elle considère que deux versions du document sont identiques si le contenu est équivalent. Par exemple, une page qui différerait d'une autre seulement par sa date dans le pied de page ou une publicité, sera considérée identique à l'autre avec la validation faible. Ces mêmes deux versions pourraient être considérées comme différentes avec la validation forte. Construire un système d'ETags pour la validation faible peut être complexe car cela induit de connaître l'importance des différents éléments de la page mais est très utile dans le but d'optimiser les performances du cache.

## En-têtes conditionnels

Plusieurs en-têtes HTTP, appelées en-têtes conditionels, permettent de conditionner les requêtes :

- [`If-Match`](/fr/docs/Web/HTTP/Headers/If-Match)
  - : Réussit si la [`ETag`](/fr/docs/Web/HTTP/Headers/ETag) de la ressource distante est égal à un de ceux listés dans cet en-tête. Par défaut, à moins que l'ETag soit préfixé par `'W/'`, c'est une validation forte.
- [`If-None-Match`](/fr/docs/Web/HTTP/Headers/If-None-Match)
  - : Réussit si la [`ETag`](/fr/docs/Web/HTTP/Headers/ETag) de la ressource distante est différent de tout ceux listés dans l'en-tête. Par défaut, à moins que l'ETag soit préfixé par `'W/'`, c'est une validation forte.
- [`If-Modified-Since`](/fr/docs/Web/HTTP/Headers/If-Modified-Since)
  - : Réussit si la date [`Last-Modified`](/fr/docs/Web/HTTP/Headers/Last-Modified) de la ressource distante est plus récente que celle donnée dans l'en-tête.
- [`If-Unmodified-Since`](/fr/docs/Web/HTTP/Headers/If-Unmodified-Since)
  - : Réussit si la date [`Last-Modified`](/fr/docs/Web/HTTP/Headers/Last-Modified) de la ressource distante est plus ancienne ou égale à celle donnée dans l'en-tête.
- [`If-Range`](/fr/docs/Web/HTTP/Headers/If-Range)
  - : Similaire à [`If-Match`](/fr/docs/Web/HTTP/Headers/If-Match), ou [`If-Unmodified-Since`](/fr/docs/Web/HTTP/Headers/If-Unmodified-Since), mais peut n'avoir qu'un seul ETag, ou une date. Si ça ne correspond pas, la requête est rejetée et à la place d'un statut de réponse [`206`](/fr/docs/Web/HTTP/Status/206) `Partial Content`, un [`200`](/fr/docs/Web/HTTP/Status/200) `OK` est envoyé avec la totalité de la ressource.

## Cas d'utilisation

### Mise à jour du cache

Le cas d'utilisation le plus commun pour les requêtes conditionnelles est la mise à jour du'uncache. Avec un cache vide ou absent, la ressource demandée est renvoyée avec un statut [`200`](/fr/docs/Web/HTTP/Status/200) `OK`.

![La requête émise lorsque le cache est vide déclenche le téléchargement de la ressource et les deux valeurs de validation son prevent itt envoyés en en-tête. Le cache est alors rempli.](cache1.png)

Avec la ressource, les validateurs sont renvoyés dans les en-têtes. Dans cet exemple, deux validateurs [`Last-Modified`](/fr/docs/Web/HTTP/Headers/Last-Modified) et [`ETag`](/fr/docs/Web/HTTP/Headers/ETag) sont envoyés, mais il pourrait tout aussi bien n'y en avoir qu'un. Ces validateurs sont en cache avec la ressource (comme toutes les en-têtes) et seront utilisés pour embarquer les requêtes conditionnelles quand le cache est périmé.

Tant que le cache n'est pas obsolète, aucune requête n'est émise. Mais une fois qu'il est dépassé, il est principalement contrôlé par l'en-tête [`Cache-Control`](/fr/docs/Web/HTTP/Headers/Cache-Control), le client n'utilise pas directement la valeur en cache mais publie une requête conditionnelle. La valeur du validateur est employé comme paramètre des en-têtes [`If-Modified-Since`](/fr/docs/Web/HTTP/Headers/If-Modified-Since) et [`If-Match`](/fr/docs/Web/HTTP/Headers/If-Match).

Si la ressource n'a pas changé, le serveur renvoie une réponse [`304`](/fr/docs/Web/HTTP/Status/304) `Not Modified`. Cela rafraîchit le cache et le client peut se servir de la valeur en cache. Bien qu'il y ait un aller-retour requête-réponse qui consomme quelques ressources, cette méthode est plus efficace que de transmettre à nouveau la totalité de la ressource via le réseau.

![Avec un cache périmé, la requête conditionnelle est envoyée. Le serveur peut déterminer si une ressource a changé et, dans ce cas, décider de ne pas la renvoyer si c'est la même.](httpcache2.png)

Si la ressource a changé, le serveur renvoie simplement une réponse [`200 OK`](/fr/docs/Web/HTTP/Status/200) avec la nouvelle version de la ressource comme si la requête n'était pas conditionnelle et le client utilise cette nouvelle ressource et la met en cache.

![Dans le cas où la ressource a changé, elle est renvoyée, comme si la requête n'était pas conditionnelle.](httpcache3.png)

De plus, la configuration des validateurs côté serveur est totalement transparente : tous les navigateurs gèrent un cache et envoient de telles requêtes conditionnelles sans que cela ne nécessite de travail supplémentaire de la part du développeur.

### Intégrité d'un téléchargement partiel

Un téléchargement partiel de fichiers est une fonctionnalité de HTTP qui permet de reprendre des opérations en cours en économisant de la bande passante et du temps en conservant les données déjà reçues :

![Un téléchargement a été stoppé et seule une partie du contenu a été récupérée.](httpresume1.png)

Un serveur qui supporte le téléchargement partiel le diffuse en envoyant un en-tête [`Accept-Ranges`](/fr/docs/Web/HTTP/Headers/Accept-Ranges). Quand il la reçoit, le client peut reprendre le téléchargement en envoyant un en-tête de requête [`Ranges`](/fr/docs/Web/HTTP/Headers/Ranges) avec les données manquantes :

![Le client reprend la requête en indiquant l'intervalle dont il a besoin et les préconditions en vérifiant les validateurs de la requêtes obtenues partiellement.](httpresume2.png)

Le principe est simple, mais il y a un problème potentiel : si la ressource téléchargée a été modifiée entre deux téléchargements, les données reçues correspondront à deux versions différentes de la ressource et le fichier final sera corrompu. Pour prévenir cela, des en-têtes conditionnelles sont employées. Il y a deux manières de faire : la plus flexible utilise [`If-Modified-Since`](/fr/docs/Web/HTTP/Headers/If-Modified-Since) et de [`If-Match`](/fr/docs/Web/HTTP/Headers/If-Match), le serveur retourne alors une erreur si la pré-condition n'est pas satisfaite et le client reprend le téléchargement depuis le début :

![Lorsque la ressource partiellement téléchargée a été modifiée, les préconditions échoueront et la ressource devra à nouveau être téléchargée entièrement.](httpresume3.png)

Même si cette méthode fonctionne, elle ajoute un échange requête/réponse quand le document a été modifié. Cela impacte la performance et HTTP a prévu un en-tête spécifique pour éviter ce scénario : [`If-Range`](/fr/docs/Web/HTTP/Headers/If-Range):

![Les en-têtes If-Range permettent au serveur de renvoyer directement la ressource complète si elle a été modifiée. Il n'est pas nécessaire d'envoyer une erreur 412 au client et d'attendre que ce dernier relance le téléchargement.](httpresume4.png)

Cette solution est plus efficace mais légèrement moins flexible puisqu'un seul ETag peut être utilisé dans la condition. On a rarement besoin d'une telle flexibilité additionnelle.

### Èviter les problèmes de perte de mise à jour avec le "verrouillage optimiste"

Une opération commune des applications web est la mise à jour de documents distants. Cela arrive fréquemment dans tout système de fichiers ou dans les applications de contrôle de source. Toute application qui permet de stocker des ressources distantes a besoin de ce mécanisme. Les sites comme les wikis et autres CMS s'en servent habituellement.

Vous pouvez l'implémenter avec la méthode [`PUT`](/fr/docs/Web/HTTP/Methods/PUT). Le client lit d'abord les fichiers originaux, les modifie et finalement, les envoie au serveur.

![Mettre à jour un fichier avec PUT est assez simple tant qu'il n'y a pas de concurrence.](httplock1.png)

Cependant, les choses deviennent un peu moins précises dès que l'on parle de simultanéité des connexions. Pendant qu'un client est en train de modifier localement sa nouvelle copie de la ressource, un second client peut récupérer la même ressource et faire de même avec sa copie. Ce qui arrive ensuite est regrettable : quand ils enregistrent les modifications sur le serveur, celles du premier client sont écartées par l'enregistrement du second client qui n'est pas au courant des changements effectués sur la ressource par le premier client. Le choix qui est fait n'est pas communiqué aux autres protagonistes. Les changements adoptés changeront avec la vitesse d'enregistrement, ce qui dépend de la performance des clients, des serveurs et même de l'humain qui édite le document sur le client. Le "gagnant" changera d'une fois à l'autre. C'est donc une situation de compétition ([_race condition_](</fr/docs/Glossary/race condition>)) qui conduit à des comportements problématiques difficiles à cerner et à déboguer.

![Lorsque plusieurs clients mettent à jour la même ressource en parallèle, on a une situation de compétition (race condition) : c'est le plus lent qui gagne et les autres ne savent pas qu'ils ont perdu…](httplock2.png)

Il n'existe aucune manière de gérer ce problème sans ennuyer l'un ou l'autre des deux clients. Toutefois, cela permet d'éviter les mises à jour perdues ou les situations de compétition. On souhaite avoir des résultats prévisibles et s'assurer que les clients soient prévenus lorsque leurs modifications sont rejetées.

Les requêtes conditionnelles permettent d'implémenter l'algorithme de contrôle de concurrence (_ptimistic locking algorithm_) utilisé par la plupart des wikis ou systèmes de contrôle des sources. Le concept est de permettre au client d'avoir des copies de la ressource, les laisser se modifier localement puis de contrôler la mise en concurrence en autorisant celles du premier client soumettant une mise à jour. Toutes les mises à jour ultérieures basées sur la version maintenant obsolète sont rejetées :

![Les requêtes conditionnelles permettent d'implémenter un mécanisme de verrou optimiste : c'est le plus rapide qui gagne et les autres reçoivent une erreur.](httplock3.png)

Ce ci est implémenté par les en-têtes [`If-Match`](/fr/docs/Web/HTTP/Headers/If-Match) ou [`If-Unmodified-Since`](/fr/docs/Web/HTTP/Headers/If-Unmodified-Since). Si l'ETag ne correspond pas au fichier original ou si le fichier a été modifié depuis son obtention, le changement est alors simplement rejeté avec une erreur [`412`](/fr/docs/Web/HTTP/Status/412) `Precondition Failed`. C'est maintenant à l'initiative du client que se réglera l'erreur : soit en prévenant le client de redémarrer avec la nouvelle version, soit en présentant au client les différences entre les deux versions pour l'aider à choisir les modifications à conserver.

### Gérer le premier téléchargement d'une ressource

Le premier téléchargement d'une ressource est un des cas résultant du comportement précédent. Comme toute mise à jour d'une ressource, le téléchargement va faire l'objet d'une situation de compétition si deux clients essaient un enregistrement au même instant. Pour éviter cela, les en-têtes conditionnels peuvent être employés : on ajoute [`If-None-Match`](/fr/docs/Web/HTTP/Headers/If-None-Match) avec la valeur particulière `'*'`, représentant n'importe quel etag. La requête aboutira seulement si la ressource n'existait pas avant :

![Comme pour un upload normal, le premier upload d'une ressource est sujet à une situation de compétition. If-None-Match peut empêcher cela.](httpfirst.png)

`If-None-Match` fonctionnera seulement avec les serveurs compatibles HTTP/1.1 (et postérieurs). Si vous n'avez pas la certitude que le serveur soit compatible, vous devez d'abord envoyer une requête [`HEAD`](/fr/docs/Web/HTTP/Methods/HEAD) à la ressource pour vérifier.

## Conclusion

Les requêtes conditionnelles sont une fonctionnalité essentielle d'HTTP et permettent la construction d'applications efficaces et complexes. Pour le cache et la reprise des téléchargements, la seule tâche du webmaster consiste à configurer le serveur correctement. Dans certains environnements, paramétrer correctement les ETags peut s'avérer un véritable défi. Une fois que c'est fait, le navigateur pourra exploiter les requêtes conditionnelles.

Pour les mécanismes de verrou, c'est l'inverse : les développeurs web devront publier une requête avec les en-têtes appropriés tandis que les webmasters peuvent en général se fier à l'application pour effectuer ces vérifications.

Dans les deux cas, les requêtes conditionnelles représentent une fonctionnalité essentielle du Web.
