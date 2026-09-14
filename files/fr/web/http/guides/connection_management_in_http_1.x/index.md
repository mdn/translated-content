---
title: Gestion des connexions dans HTTP/1.x
slug: Web/HTTP/Guides/Connection_management_in_HTTP_1.x
l10n:
  sourceCommit: bc45e7d6005f231e1f18c8cec29ca0b7c1e694bb
---

La gestion des connexions est un sujet clé dans HTTP&nbsp;: l'ouverture et le maintien des connexions ont un impact important sur les performances des sites Web et des applications Web. Dans HTTP/1.x, il existe plusieurs modèles&nbsp;: _connexions de courte durée_, _connexions persistantes_ et _acheminement HTTP_.

HTTP s'appuie principalement sur TCP pour son protocole de transport, fournissant une connexion entre le client et le serveur. À ses débuts, HTTP utilisait un seul modèle pour gérer ces connexions. Ces connexions étaient de courte durée&nbsp;: une nouvelle était créée à chaque fois qu'une requête devait être envoyée, et fermée une fois la réponse reçue.

Ce modèle présentait une limitation inhérente en termes de performance&nbsp;: l'ouverture de chaque connexion TCP est une opération gourmande en ressources. Plusieurs messages doivent être échangés entre le client et le serveur. La latence du réseau et la bande passante affectent les performances lorsqu'une requête doit être envoyée. Les pages Web modernes nécessitent de nombreuses requêtes (une douzaine ou plus) pour fournir la quantité d'informations requise, ce qui prouve que ce modèle précédent est inefficace.

Deux modèles plus récents ont été créés dans HTTP/1.1. Le modèle de connexion persistante maintient les connexions ouvertes entre les requêtes successives, réduisant le temps nécessaire pour ouvrir de nouvelles connexions. Le modèle de tunnel HTTP va un pas plus loin, en envoyant plusieurs requêtes successives sans même attendre une réponse, réduisant ainsi une grande partie de la latence du réseau.

![Compare les performances des trois modèles de connexion HTTP/1.x : connexions de courte durée, connexions persistantes et tunnel HTTP.](http1_x_connections.png)

> [!NOTE]
> HTTP/2 ajoute des modèles supplémentaires pour la gestion des connexions.

Il est important de noter que la gestion des connexions dans HTTP s'applique à la connexion entre deux nœuds consécutifs, ce qui est [saut par saut](/fr/docs/Web/HTTP/Reference/Headers#hop-by-hop_headers) et non [de bout en bout](/fr/docs/Web/HTTP/Reference/Headers#end-to-end_headers). Le modèle utilisé dans les connexions entre un client et son premier proxy peut différer du modèle entre un proxy et le serveur de destination (ou tout proxy intermédiaire). Les en-têtes HTTP impliqués dans la définition du modèle de connexion, comme {{HTTPHeader("Connection")}} et {{HTTPHeader("Keep-Alive")}}, sont des en-têtes [de saut par saut](/fr/docs/Web/HTTP/Reference/Headers#hop-by-hop_headers) dont les valeurs peuvent être modifiées par les nœuds intermédiaires.

Un sujet connexe est le concept de mise à niveau des connexions HTTP, dans lequel une connexion HTTP/1.1 est mise à niveau vers un protocole différent, tel que TLS/1.0, WebSocket, ou même HTTP/2 en clair. Ce [mécanisme de mise à niveau du protocole](/fr/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism) est documenté plus en détail ailleurs.

## Connexions de courte durée

Le modèle original de HTTP, et le modèle par défaut dans HTTP/1.0, est celui des _connexions de courte durée_. Chaque requête HTTP est effectuée sur sa propre connexion&nbsp;; cela signifie qu'une poignée de main TCP se produit avant chaque requête HTTP, et celles-ci sont sérialisées.

La poignée de main TCP elle-même est chronophage, mais une connexion TCP s'adapte à sa charge, devenant plus efficace avec des connexions plus soutenues (ou «&nbsp;chaudes&nbsp;»). Les connexions de courte durée n'utilisent pas cette fonctionnalité d'efficacité de TCP, et les performances se dégradent par rapport à l'optimum en persistant à transmettre sur une nouvelle connexion froide.

Ce modèle est le modèle par défaut utilisé dans HTTP/1.0 (s'il n'y a pas d'en-tête {{HTTPHeader("Connection")}}, ou si sa valeur est définie sur `close`). Dans HTTP/1.1, ce modèle n'est utilisé que lorsque l'en-tête {{HTTPHeader("Connection")}} est envoyé avec une valeur de `close`.

> [!NOTE]
> À moins de traiter avec un système très ancien, qui ne prend pas en charge une connexion persistante, il n'y a aucune raison impérieuse d'utiliser ce modèle.

## Connexions persistantes

Les connexions de courte durée présentent deux inconvénients majeurs&nbsp;: le temps nécessaire pour établir une nouvelle connexion est important, et les performances de la connexion TCP sous-jacente ne s'améliorent que lorsque cette connexion a été utilisée pendant un certain temps (connexion chaude). Pour atténuer ces problèmes, le concept de _connexion persistante_ a été conçu, même avant HTTP/1.1. Alternativement, cela peut être appelé une _connexion gardée active_.

Une connexion persistante est une connexion qui reste ouverte pendant une période de temps et peut être réutilisée pour plusieurs requêtes, évitant ainsi la nécessité d'une nouvelle poignée de main TCP et utilisant les capacités d'amélioration des performances de TCP. Cette connexion ne reste pas ouverte indéfiniment&nbsp;: les connexions inactives sont fermées après un certain temps (un serveur peut utiliser l'en-tête {{HTTPHeader("Keep-Alive")}} pour définir un temps minimum pendant lequel la connexion doit rester ouverte).

Les connexions persistantes présentent également des inconvénients&nbsp;; même lorsqu'elles sont inactives, elles consomment des ressources serveur, et sous une charge élevée, des {{Glossary("Denial of Service", "attaques par déni de service")}} peuvent être menées. Dans de tels cas, l'utilisation de connexions non persistantes, qui sont fermées dès qu'elles sont inactives, peut offrir de meilleures performances.

Les connexions HTTP/1.0 ne sont pas persistantes par défaut. Définir {{HTTPHeader("Connection")}} sur une valeur autre que `close`, généralement `retry-after`, les rend persistantes.

Dans HTTP/1.1, la persistance est la valeur par défaut, et l'en-tête n'est plus nécessaire (mais il est souvent ajouté comme mesure défensive contre les cas nécessitant un retour à HTTP/1.0).

## Acheminement HTTP

> [!NOTE]
> L'acheminement HTTP n'est pas activé par défaut dans les navigateurs modernes&nbsp;:
>
> - Les [mandataires](https://fr.wikipedia.org/wiki/Proxy) bogués sont encore courants et cela conduit à des comportements étranges et erratiques que les développeur·euse·s web ne peuvent pas prévoir ni diagnostiquer facilement.
> - L'acheminement est complexe à mettre en œuvre correctement&nbsp;: la taille de la ressource transférée, le [RTT](https://fr.wikipedia.org/wiki/Round-trip_delay_time) effectif qui est utilisé, ainsi que la bande passante effective, ont une incidence directe sur l'amélioration apportée par l'acheminement. Sans connaître ces éléments, les messages importants peuvent être retardés derrière des messages moins importants. La notion d'important évolue même pendant la mise en page&nbsp;! L'acheminement HTTP n'apporte donc qu'une amélioration marginale dans la plupart des cas.
> - L'acheminement est soumis au {{Glossary("head of line blocking", "blocage en tête de ligne")}}.
>
> Pour ces raisons, l'acheminement a été remplacé par un meilleur algorithme, le _multiplexage_, utilisé par HTTP/2.

Par défaut, les requêtes [HTTP](/fr/docs/Web/HTTP) sont émises de manière séquentielle. La requête suivante n'est émise qu'une fois la réponse à la requête en cours reçue. Comme elles sont affectées par les latences réseau et les limitations de bande passante, cela peut entraîner un retard significatif avant que la requête suivante ne soit _vue_ par le serveur.

L'acheminement est le processus d'envoi de requêtes successives, sur la même connexion persistante, sans attendre la réponse. Cela évite la latence de la connexion. Théoriquement, les performances pourraient également être améliorées si deux requêtes HTTP étaient regroupées dans le même message TCP. La [MSS](https://fr.wikipedia.org/wiki/Maximum_Segment_Size) (Maximum Segment Size) typique est suffisamment grande pour contenir plusieurs requêtes simples, bien que la demande en taille des requêtes HTTP continue de croître.

Tous les types de requêtes HTTP ne peuvent pas être acheminés&nbsp;: seules les méthodes {{Glossary("idempotent", "idempotentes")}}, c'est-à-dire {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}, {{HTTPMethod("OPTIONS")}}, {{HTTPMethod("TRACE")}}, {{HTTPMethod("PUT")}} et {{HTTPMethod("DELETE")}}, peuvent être rejouées en toute sécurité. En cas d'échec, le contenu du pipeline peut être répété.

Aujourd'hui, tous les mandataires et serveurs compatibles HTTP/1.1 devraient prendre en charge l'acheminement, bien que beaucoup aient des limitations en pratique&nbsp;: une raison importante pour laquelle aucun navigateur moderne n'active cette fonctionnalité par défaut.

## Fractionnement de domaine

> [!NOTE]
> Sauf si vous avez un besoin immédiat très spécifique, n'utilisez pas cette technique obsolète&nbsp;; passez plutôt à HTTP/2. Dans HTTP/2, le fractionnement de domaine n'est plus utile&nbsp;: la connexion HTTP/2 est capable de gérer très bien les requêtes parallèles non prioritaires. Le fractionnement de domaine est même préjudiciable aux performances. La plupart des implémentations HTTP/2 utilisent une technique appelée [fusion de connexions <sup>(angl.)</sup>](https://daniel.haxx.se/blog/2016/08/18/http2-connection-coalescing/) pour annuler le fractionnement de domaine éventuel.

Comme une connexion HTTP/1.x sérialise les requêtes, même sans aucun ordre, elle ne peut pas être optimale sans une bande passante disponible suffisamment grande. Comme solution, les navigateurs ouvrent plusieurs connexions vers chaque domaine, envoyant des requêtes en parallèle. Par défaut, il y avait autrefois 2 à 3 connexions, mais cela a maintenant augmenté à une utilisation plus courante de 6 connexions parallèles. Il y a un risque de déclencher la protection {{Glossary("Denial of Service", "DoS")}} côté serveur si l'on tente de dépasser ce nombre.

Si le serveur souhaite une réponse plus rapide du site Web ou de l'application, il est possible pour le serveur de forcer l'ouverture de plus de connexions. Par exemple, au lieu d'avoir toutes les ressources sur le même domaine, disons `www.example.com`, il pourrait les répartir sur plusieurs domaines, `www1.example.com`, `www2.example.com`, `www3.example.com`. Chacun de ces domaines résout vers le _même_ serveur, et le navigateur Web ouvre 6 connexions vers chacun (dans notre exemple, augmentant les connexions à 18). Cette technique s'appelle le _fractionnement de domaine_.

![Sans fractionnement de domaine, un client demande six images à partir d'un domaine avec un maximum de deux requêtes en parallèle. Avec le fractionnement de domaine, les images sont disponibles à partir de deux domaines et le client peut exécuter quatre requêtes en parallèle, téléchargeant les images en moins de temps.](httpsharding.png)

## Conclusion

Une meilleure gestion des connexions permet d'améliorer considérablement les performances en HTTP. Avec HTTP/1.1 ou HTTP/1.0, l'utilisation d'une connexion persistante — au moins jusqu'à ce qu'elle devienne inactive — conduit aux meilleures performances. Cependant, l'échec de l'acheminement a conduit à la conception de modèles de gestion des connexions supérieurs, qui ont été intégrés dans HTTP/2.

## Voir aussi

- [Évolution de HTTP](/fr/docs/Web/HTTP/Guides/Evolution_of_HTTP)
- Termes du glossaire&nbsp;:
  - {{Glossary('HTTP')}}
  - {{Glossary('HTTP_2', 'HTTP/2')}}
  - {{Glossary('QUIC')}}
  - {{Glossary('Round Trip Time', 'Round Trip Time (RTT)')}}
  - {{Glossary('TCP slow start')}}
  - {{Glossary('TLS')}}
  - {{Glossary('TCP', 'Transmission Control Protocol (TCP)')}}
