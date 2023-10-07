---
title: Caractéristiques clés et terminologie d'IndexedDB
slug: Web/API/IndexedDB_API/Basic_Terminology
---

{{DefaultAPISidebar("IndexedDB")}}

Dans cet article, nous verrons les caractéristiques fondamentales d'IndexedDB et introduirons certains termes qui permettent de comprendre cette API.

Ces autres articles sur le sujet peuvent également être utiles&nbsp;:

- Pour un tutoriel détaillé sur l'utilisation de cette API, voir [Utiliser IndexedDB](/fr/docs/Web/API/IndexedDB_API/Using_IndexedDB).
- Pour la documentation de référence sur l'API IndexedDB, consulter l'article [IndexedDB API](/fr/docs/Web/API/IndexedDB_API) et ses sous-pages qui documentent chacune les types d'objets utilisés par IndexedDB.
- Pour plus d'informations sur la façon dont le navigateur gère les données en arrière-plan, voir [Les limites de stockage du navigateur et les critères de nettoyage](/fr/docs/Web/API/IndexedDB_API/Browser_storage_limits_and_eviction_criteria).

## Caractéristiques fondamentales

IndexedDB permet de stocker des données dans le navigateur de façon persistante. En permettant aux applications web d'exécuter des requêtes sur des données de façon complexe quelle que soit la connectivité réseau, elle permet aux applications de fonctionner en ligne et hors ligne. IndexedDB est utile pour stocker un grand volume de données (par exemple, le catalogue de livres d'une bibliothèque) et pour les applications qui doivent pouvoir fonctionner sans accès internet (par exemple des clients mail, des listes de tâches, des blocs-notes).

IndexedDB permet de stocker et de récupérer des objets qui sont indexés avec une «&nbsp;clé&nbsp;». Tous les changements appliqués à la base de données sont effectués au sein de transactions. Comme la plupart des techniques de stockage web, IndexedDB utilise [une règle d'origine identique](https://www.w3.org/Security/wiki/Same_Origin_Policy). Ainsi, on peut stocker des données pour un domaine donné, mais on ne peut pas accéder aux données d'autres domaines.

Si vous avez l'habitude de travailler avec d'autres types de base de données, IndexedDB pourrait vous déconcerter. Voici les caractéristiques fondamentales d'IndexedDB qu'il faut garder à l'esprit&nbsp;:

- **Les bases de données IndexedDB stockent des paires de clé/valeur**
  - : Les valeurs peuvent être des objets structurés complexes et les clés peuvent être des propriétés de ces objets. On peut créer des index qui utilisent n'importe quelle propriété des objets pour des recherches rapides ou des énumérations triées. Les clés peuvent être des objets binaires.
- **IndexedDB est construit sur un modèle de base de données transactionnel**

  - : Tout ce qui se produit dans une base de données IndexedDB a lieu dans le contexte d'une [transaction](#transaction). L'API IndexedDB fournit de nombreux objets qui représentent des index, des tables, des curseurs, etc. et chacun de ces objets est lié à une transaction donnée. On ne peut pas exécuter de commandes ou ouvrir des curseurs en dehors d'une transaction. Les transactions disposent d'une durée de vie bien définie et toute tentative d'utiliser une transaction après qu'elle a terminée se soldera par des exceptions. Par ailleurs, les transactions sont appliquées avec des commits automatiques et on ne peut pas réaliser de commit manuel.

  Ce modèle de transaction s'avère vraiment utile lorsqu'on pense au cas d'usage où une personne a ouvert simultanément deux instances d'une application web dans deux onglets différents. Sans opérations transactionnelles, les deux instances pourraient interférer l'une avec l'autre. Si vous ne connaissez pas le concept de transaction pour les bases de données, nous vous conseillons de lire [l'article Wikipédia sur les transactions](https://fr.wikipedia.org/wiki/Transaction_informatique) et de poursuivre avec la sous-section [transaction](#transaction) de cette page, dans la section Définitions.

- **IndexedDB API utilise des opérations asynchrones la plupart du temps**
  - : Cette API ne fournit pas les données sous forme de valeurs de retour. À la place, elle utilise des fonctions de rappel. On ne stocke pas directement de valeur dans la base de données ou on ne récupère pas directement une valeur de la base de données avec des opérations synchrones. À la place, on demande à ce qu'une opération ait lieu&nbsp;; on reçoit une notification avec un évènement DOM lorsque l'opération est terminée et c'est le type d'évènement reçu qui permet de savoir si l'opération a échoué ou réussi. Cela peut sembler un peu compliqué à première vue, mais ce sont des mesures de protection qui font partie de l'API. D'une certaine façon, le fonctionnement de cette API n'est pas si différent de celle d'[XMLHttpRequest](/fr/docs/Web/API/XMLHttpRequest).
- **IndexedDB utilise de nombreuses requêtes**
  - : Les requêtes sont des objets qui reçoivent les évènements DOM de réussite ou d'échec mentionnés avant. Elles ont des propriétés `onsuccess` et `onerror` sur lesquelles on peut appeler `addEventListener()` et `removeEventListener()`. Elles disposent également de propriétés `readyState`, `result`, et `errorCode` qui indiquent le statut de la requête. La propriété `result` peut représenter différentes choses selon la façon dont la requête a été générée (ça peut par exemple être une instance `IDBCursor` ou encore la clé d'une valeur qu'on vient d'insérer en base de données).
- **IndexedDB utilise les évènements du DOM pour notifier de la disponibilité des résultats**
  - : Les évènements du DOM ont toujours une propriété `type` (pour IndexedDB, celle-ci vaudra le plus souvent `"success"` ou `"error"`). Les évènements DOM possèdent également une propriété `target` qui indique la destination de l'évènement. Dans la plupart des cas, la propriété `target` d'un évènement sera ici l'objet `IDBRequest` qui a été généré comme résultat d'une opération sur la base de données. Les évènements de réussite ne bouillonnent pas vers la surface et ne peuvent être annulés. En revanche, les évènements d'erreur bouillonnent vers la surface et peuvent être annulés. Cette nuance a son importance, car les évènements d'erreur interrompent toute transaction dont ils faisaient partie, à moins qu'ils soient annulés.
- **IndexedDB est orientée objets**

  - : IndexedDB n'est pas une base de données relationnelle avec des tableaux qui représentent des ensembles de lignes et de colonnes. Cette différence majeure et fondamentale aura un impact sur la façon de concevoir et de construire vos applications.

  Dans un magasin de données relationnel traditionnel, on aurait une table qui stocke un ensemble de lignes et des colonnes avec des types, nommées pour les différentes données. Avec IndexedDB, il faut créer un magasin d'objets pour un type de données et y faire persister des objets JavaScript. Chaque magasin d'objet peut avoir un ensemble d'index qui permettent des recherches et des parcours rapides. Si vous ne connaissez pas les systèmes de gestion de bases de données orientées objet, nous vous invitons à lire [l'article Wikipédia correspondant](https://fr.wikipedia.org/wiki/Base_de_données_orientée_objet).

- **IndexedDB n'utilise pas le langage SQL**
  - : Cette API utilise des requêtes sur un index, qui produisent un curseur qu'on utilise pour parcourir l'ensemble des résultats. Si vous ne connaissez pas les systèmes NoSQL, nous vous invitons à lire [l'article Wikipédia correspondant](https://fr.wikipedia.org/wiki/NoSQL).
- **IndexedDB suit la règle d'origine unique**

  - : Une origine se compose du domaine, du protocole de l'application et du port de l'URL du document où le script est exécuté. Chaque base de données est associée à une seule origine et chaque origine peut avoir plusieurs bases de données. Chaque base de données possède un nom qui permet de l'identifier pour une origine donnée.

  Cette règle de sécurité qui porte sur IndexedDB empêche les applications d'accéder aux données des autres origines. Ainsi, bien qu'une application ou une page située sur [http://www.example.com/app/](https://www.example.com/app/) puisse récupérer des données à propos de [http://www.example.com/dir/](https://www.example.com/dir/), car elles partagent la même origine&nbsp;; elle ne peut pas récupérer des données provenant de [http://www.example.com:8080/dir/](https://www.example.com:8080/dir/) (le port est différent) ou de <https://www.example.com/dir/> (le protocole est différent), car les origines sont différentes.

  > **Note :** Le contenu tiers d'une fenêtre (par exemple celui d'une [`<iframe>`](/fr/docs/Web/HTML/Element/iframe)) peut accéder au magasin IndexedDB de l'origine dans laquelle il est embarqué, à moins que le navigateur soit paramétré [pour ne jamais accepter les cookies tiers](https://support.mozilla.org/en-US/kb/third-party-cookies-firefox-tracking-protection) (voir [le bug 1147821](https://bugzilla.mozilla.org/show_bug.cgi?id=1147821)).

### Limitations

IndexedDB est conçu pour la plupart des cas d'usage de stockage côté client. Toutefois, cette API n'est pas conçue pour répondre aux scénarios&nbsp;:

- Le tri de chaînes de caractères localisé/internationalisé
  - : Toutes les langues ne trient pas les chaînes de caractères dans le même ordre. Bien qu'une base de données IndexedDB ne puisse pas stocker des données selon un ordre internationalisé, il est toujours possible de trier les données après les avoir récupérées (voir [`Intl.Collator`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator)).
- La synchronisation
  - : Cette API n'est pas conçue pour la synchronisation avec une base de données serveur. Il faudra écrire du code en plus pour synchroniser une base client IndexedDB avec une base de données sur un serveur.
- Recherche sur le texte
  - : Cette API ne dispose pas d'un équivalent à l'opérateur `LIKE` présent en SQL.

De plus, il faut avoir conscience que le navigateur peut se débarrasser de la base de données dans certaines conditions&nbsp;:

- Parce que la personne a demandé une suppression des données (la majorité des navigateurs possède des réglages qui permettent de supprimer l'ensemble des données stockées pour un site web donné, que ce soit les cookies, les marque-pages, les mots de passe enregistrés ou les données IndexedDB).
- Parce que le navigateur est utilisé en navigation privée/incognito. À la fin d'une telle session, les informations de navigation, dont le contenu des bases de données IndexedDB, seront supprimées.
- Parce que la limite d'espace disque ou de quota alloué a été atteinte.
- Parce que les données sont corrompues.
- Parce qu'une modification incompatible a été apportée à la fonctionnalité.

Les conditions exactes et les comportements des navigateurs pourront varier avec le temps, mais la philosophie générale des éditeurs de navigateur est de faire le maximum pour garder les données disponibles autant que possible.

## Terminologie

Dans cette section, on définit et on explique les termes spécifiques à l'API IndexedDB.

### Base de données

#### Base de données (<i lang="en">database</i> en anglais)

Un dépôt d'informations, généralement composé d'un ou plusieurs [_magasins d'objets_](#magasins_d_objets). Chaque base de données doit avoir&nbsp;:

- Un nom
  - : Il identifie la base de données pour une origine donnée et il reste constant pendant la durée de vie de la base de données. Le nom peut être n'importe quelle chaîne de caractères (y compris la chaîne vide).
- Un numéro de [_version_](#version) courante
  - : Lorsqu'une base de données est initialement créée, son numéro de version est 1 si aucune autre valeur n'est fournie. Chaque base de données ne peut avoir qu'une seule version à un instant donné.

#### Connexion à la base de donnée

Une opération créée lorsqu'on ouvre [_une base de données_](#base_de_données). On peut avoir plusieurs connexions ouvertes pour une même base de données à un instant donné.

#### Index

Un index est un magasin d'objet spécialisé dans la recherche d'enregistrements d'un autre magasin d'objets, appelé _le magasin d'objets référencé_. L'index est un stockage persistant de clé/valeur où la valeur de l'enregistrement correspond à la clé de l'enregistrement dans le magasin d'objets référencé. Les enregistrements d'un index sont automatiquement remplis lorsque des enregistrements sont insérés, mis à jour ou supprimés dans le magasin d'objets référencé. Chaque enregistrement d'un index ne peut pointer que vers un seul enregistrement du magasin d'objets référencé. En revanche, plusieurs index peuvent référencer le même magasin d'objets. Lorsque le magasin d'objets change, tous les index qui référencent ce magasin sont automatiquement mis à jour.

Il est aussi possible de rechercher parmi les enregistrements d'un magasin d'objets en utilisant [la clé](#clé).

Pour en savoir plus sur l'utilisation des index, voir l'article [Utiliser IndexedDB](/fr/docs/Web/API/IndexedDB_API/Using_IndexedDB#using_an_index). Pour la documentation de référence à propos des index, voir [`IDBKeyRange`](/fr/docs/Web/API/IDBKeyRange).

#### Magasin d'objets (<i lang="en">object store</i> en anglais)

Il s'agit du mécanisme avec lequel les données sont stockées dans la base de données. Le magasin d'objets contient les enregistrements (des paires de clé/valeur) de façon persistante. Les enregistrements d'un magasin d'objets sont triés selon leur _[clé](#clé)_, dans l'ordre croissant.

Chaque magasin d'objets doit avoir un nom unique au sein d'une base de données. Un magasin d'objet peut aussi avoir, optionnellement, un [_générateur de clé_](#générateur_de_clé) et un [_chemin de clé_](#chemin_de_clé). Si le magasin d'objets a un chemin de clé, il utilise des [_clés en ligne_](#clés_en_ligne) et sinon il utilise [_des clés hors ligne_](#clés_hors_ligne).

Pour la documentation de référence sur les magasins d'objets, voir [`IDBObjectStore`](/fr/docs/Web/API/IDBObjectStore).

#### Requête

L'opération grâce à laquelle on lit ou on écrit des données en base de données. Chaque requête représente une opération de lecture ou d'écriture.

#### Transaction

Un ensemble atomique d'opérations d'accès ou de modification des données pour une base de données distincte. C'est le mécanisme par lequel on interagit avec les données d'une base de données. Toute lecture ou modification d'une donnée de la base de données doit avoir lieu au sein d'une transaction.

Une connexion à une base de données peut avoir plusieurs transactions actives à un moment donné tant que les transactions en écritures n'utilisent pas de [_portées_](#portée) qui se chevauchent. La portée d'une transaction est définie à sa création et détermine quels sont les magasins de données avec lesquels elle interagit et ceux qui restent constants le temps de la transaction. Ainsi, si une connexion à une base de données a déjà ouvert une transaction d'écriture qui porte sur le magasin d'objets `singesVolants`, il est possible d'ouvrir une deuxième transaction dont la portée serait les magasins d'objets `licornesCentaures` et `licornesPegases`. En ce qui concerne les transactions en lecture, il est possible d'en avoir plusieurs, même si leurs portées se chevauchent.

Les transactions sont censées avoir une durée de vie courte. Le navigateur pourra donc interrompre une transaction qui dure trop longtemps afin de libérer les ressources monopolisées par une transaction trop longue. Il est possible d'annuler une transaction, ce qui annule les modifications apportées par le début de la transaction. Il n'est même pas nécessaire d'attendre que la transaction ait démarré ou soit active pour l'interrompre.

Il existe trois modes de transaction&nbsp;: `readwrite`, `readonly`, et `versionchange`. La seule façon de créer et de supprimer des magasins d'objets et des index consiste à utiliser une transaction [`versionchange`](/fr/docs/Web/API/IDBDatabase/versionchange_event). Pour en savoir plus sur les types de transaction, voir l'article de référence sur [IndexedDB](/fr/docs/Web/API/IndexedDB_API).

Comme tout se produit au sein d'une transaction, il s'agit d'un concept majeur pour IndexedDB. Pour en savoir plus sur les transactions et leurs relations avec les versions, voir la documentation de référence pour [`IDBTransaction`](/fr/docs/Web/API/IDBTransaction).

#### Version

Lorsqu'une base de données est créée, sa version est le nombre entier 1. Une base de données a une version à un instant donné et ne peut pas exister avec plusieurs versions simultanées. La seule façon de changer sa version consiste à l'ouvrir avec une version plus grande que la version courante.

### Clé et valeur

#### Clé en ligne (<i lang="en">in-line key</i> en anglais)

Une clé qui est stockée comme une partie de la valeur stockée. Elle est trouvée en utilisant un _chemin de clé_. Une clé en ligne peut également être générée avec un générateur. Une fois la génération effectuée, elle peut alors être stockée dans la valeur en utilisant le chemin de clé ou être utilisée comme une clé.

#### Clé

Une donnée selon laquelle les valeurs stockées sont organisées et par laquelle on peut les récupérer d'un magasin de données. Le magasin d'objets peut dériver la clé de trois sources&nbsp;: _[un générateur de clé](#générateur_de_clé)_, _[un chemin de clé](#chemin_de_clé)_, ou une valeur fournie explicitement. Chaque enregistrement contenu dans un magasin d'objets doit avoir une clé qui lui est unique au sein de ce magasin et il n'est donc pas possible d'avoir plusieurs enregistrements avec la même clé dans un magasin d'objets donné.

Une clé peut avoir l'un des types suivants&nbsp;:

- [Chaîne de caractères](/fr/docs/Web/JavaScript/Reference/Global_Objects/String),
- [Date](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date),
- Nombre flottant
- Blob binaire
- [Tableau](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array). Dans ce cas, la clé peut aller d'une valeur vide à l'infini. Il est aussi possible d'avoir des tableaux inclus dans un tableau.

Il est aussi possible d'accéder aux enregistrements d'un magasin d'objets en utilisant les _[index](#index)._

#### Générateur de clé

Un mécanisme qui permet de produire de nouvelles clés de façon ordonnée. Si un magasin d'objets ne possède pas de générateur de clé, l'application doit alors fournir des clés pour les enregistrements qui sont stockés. Les générateurs ne sont pas partagés entre les magasins d'objets. Il s'agit ici plutôt d'un détail qui relève de l'implémentation des navigateurs, en pratique, on n'a pas réellement besoin de créer ou d'accéder à des générateurs de clé.

#### Chemin de clé

Il définit l'emplacement auquel le navigateur devrait extraire la clé du magasin d'objets ou de l'index. Un chemin de clé valide peut inclure un des éléments suivants&nbsp;:

- Une chaîne de caractères vide
- Un identifiant JavaScript
- Plusieurs identifiants JavaScript séparés par des points
- Un tableau contenant de telles valeurs

Un chemin de clé ne peut pas contenir d'espaces.

#### Clé hors-ligne (<i lang="en">out-of-line key</i> en anglais)

Une clé qui est stockée séparément de la valeur enregistrée.

#### Valeur

Chaque enregistrement a une valeur. Il peut s'agir de n'importe quelle valeur qui peut être exprimée en JavaScript&nbsp;:

- [Un booléen](/fr/docs/Web/JavaScript/Reference/Global_Objects/Boolean),
- [Un nombre](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number),
- [Une chaîne de caractères](/fr/docs/Web/JavaScript/Reference/Global_Objects/String),
- [Une date](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date),
- [Un objet](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object),
- [Un tableau](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array),
- [Une expression rationnelle](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp),
- [`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined),
- [`null`](/fr/docs/Web/JavaScript/Reference/Global_Objects/null).

Lorsqu'un objet ou un tableau est enregistré, les propriétés et valeurs de cet objet ou de ce tableau peuvent également être n'importe quelle valeur valide.

Il est aussi possible de stocker des [blobs](/fr/docs/Web/API/Blob) et des fichiers (voir [la spécification](https://w3c.github.io/IndexedDB/)).

### Intervalle et portée

#### Curseur

Un mécanisme qui permet d'itérer sur plusieurs enregistrements situés sur _un intervalle de clés_. Le curseur a une source qui indique l'index ou le magasin qu'il parcourt. Il a aussi une position au sein de l'intervalle et il se déplace dans une direction croissante ou décroissante de l'ordre des clés des enregistrements.

Pour la documentation de référence sur les curseurs, voir [`IDBCursor`](/fr/docs/Web/API/IDBCursor).

#### Intervalle de clés

Un intervalle continu sur un type de données utilisé pour les clés. Les enregistrements peuvent être récupérés d'un magasin d'objets ou d'un index grâce à des clés ou grâce à des intervalles de clés. Il est possible de limiter ou de filtrer l'intervalle en utilisant des bornes inférieures et supérieures. Ainsi, on pourra parcourir l'ensemble des valeurs dont la clé est comprise entre `x` et `y`.

Pour la documentation de référence sur les intervalles de clés, voir [`IDBKeyRange`](/fr/docs/Web/API/IDBKeyRange).

#### Portée

L'ensemble de magasins d'objets et d'index sur lequel une transaction s'applique. Pour les transactions en lecture seule, il peut y avoir un chevauchement des portées lors de leur exécution. En revanche, les portées des transactions en écriture ne peuvent pas se chevaucher. Il est toujours possible de démarrer plusieurs transactions qui concernent la même portée au même moment, mais celles-ci s'empileront et seront exécutées l'une après l'autre.

## Prochaines étapes

En comprenant les caractéristiques fondamentales d'IndexedDB et les termes qui lui sont associés, nous pouvons désormais aborder des sujets plus concrets. Pour un tutoriel qui explique comment utiliser l'API, voir l'article [Utiliser IndexedDB](/fr/docs/Web/API/IndexedDB_API/Using_IndexedDB).

## Voir aussi

- [La spécification de l'API <i lang="en">Indexed Database</i>](https://www.w3.org/TR/IndexedDB/)
- [La référence de l'API IndexedDB](/fr/docs/Web/API/IndexedDB_API)
- [Utiliser IndexedDB](/fr/docs/Web/API/IndexedDB_API/Using_IndexedDB)
