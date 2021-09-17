---
title: FAQ sur le préchargement des liens
slug: Web/HTTP/Link_prefetching_FAQ
tags:
  - Développement_Web
  - Gecko
  - HTML
  - HTTP
translation_of: Web/HTTP/Link_prefetching_FAQ
original_slug: Web/HTTP/FAQ_sur_le_préchargement_des_liens
---
### Qu’est ce que le préchargement de liens ?

Le préchargement de liens est un mécanisme du navigateur qui utilise le temps disponible du navigateur pour télécharger ou _précharger_ les documents que les utilisateurs pourraient visiter juste après. Une page web fournit un ensemble de cibles à précharger au navigateur. Une fois que le navigateur a fini de charger la page, il commence, de façon transparente, à précharger les documents spécifiés et les emmagasine dans son cache. Quand l’utilisateur visite un de ces documents préchargés, il peut être ressorti rapidement du cache du navigateur.

### Le préchargement fonctionne-t-il avec HTTPS ?

À partir de Gecko 1.9.1 (Firefox 3.5), le contenu HTTPS peut être préchargé.

### Quelles sont les cibles à précharger ?

Le navigateur cherche soit une balise HTML `link`, soit un en-tête HTTP `Link:` avec un type de relation `next` ou `prefetch`. Ci-dessous, un exemple d’utilisation de la balise `link` :

    <link rel="prefetch" href="/images/big.jpeg">

La même cible à précharger, cette fois avec un en-tête HTTP `Link:` :

    Link: </images/big.jpeg>; rel=prefetch

L’en-tête `Link:` peut également être spécifiée à l’intérieur d’un document HTML en utilisant une balise HTML `meta` :

    <meta http-equiv="Link" content="&lt;/images/big.jpeg&gt;; rel=prefetch">

Le format pour l’en-tête `Link:`est décrit dans le [RFC 2068](http://tools.ietf.org/html/rfc2068) section 19.6.2.4.

> **Note :** Nous avons intentionnellement pris pour référence une version dépassée de la spécification HTTP/1.1 car la plus récente [RFC 2616](http://tools.ietf.org/html/rfc2616) ne décrit pas l’en-tête `Link:`. Bien que les en-têtes `Link:` ne fassent pas partie du standard révisé, ils sont toujours utilisés en pratique par les serveurs, pour renseigner les feuilles de styles CSS. Donc nous faisons usage de la même fonction ici.

Le navigateur surveille toutes ces cibles et met en attente chaque requête unique qui doit ensuite être préchargée quand le navigateur est disponible. Il peut y avoir de multiples cibles par page, ainsi on peut comprendre l'utilité de précharger de multiples documents. Par exemple, le document suivant peut contenir plusieurs images lourdes.

Quelques exemples en plus, ci-dessous :

    <link rel="prefetch alternate stylesheet" title="Designed for Mozilla" href="mozspecific.css">
    <link rel="next" href="2.html">

### Les balises ancres (\<a>) sont-elles préchargées ?

Non, seulement les balises `<link>` avec une relation de type `next` ou `prefetch` sont préchargées. Toutefois, si l'intérêt en est suffisant, on peut étendre le support du préchargement de liens pour inclure le préchargement des balises \<a>, lesquelles devront inclure un type de relation `next` ou `prefetch`. Cela aiderait probablement les fournisseurs de contenus à éviter le problème du préchargement de liens morts.

### Le préchargement de liens est-il respectueux des standards ?

Oui, le préchargement de liens, comme exposé dans ce document, ne viole aucun standard Web existant. En fait, la spécification HTML 4.01 prend explicitement en compte la définition de nouveaux types de relation pour les liens ([Section 6.12: types de liens (fr)](http://www.la-grange.net/w3c/html4.01/types.html#h-6.12)). Toutefois, le mécanisme exact employé par Mozilla n’est pas encore standardisé. Une ébauche de spécification est en cours.

### Comment le temps disponible du navigateur est-il déterminé ?

Dans l’implémentation actuelle (Mozilla 1.2), le temps disponible est déterminé par l’utilisation de l’API `nsIWebProgressListener`. On attache un écouteur à l’objet de haut-niveau `nsIWebProgress` ("@mozilla.org/docloaderservice;1"). De celui-ci, on reçoit les notifications de lancement et d’arrêt du document et nous estimons le temps disponible comme étant la période entre l’arrêt du dernier document et le lancement du document suivant. La dernière notification d’arrêt apparaît à peu près lorsque le gestionnaire `onLoad` se lance pour le document parent. C’est à ce moment que démarrent les requêtes de préchargement. Si une sous-frame contient des cibles à précharger, le préchargement ne commencera que lorsque la frame la plus haute et toutes ses frames filles auront fini de charger.

### Que se passe-t-il si je clique sur un lien pendant un préchargement ?

Quand un utilisateur clique sur un lien ou initie toutes sortes de chargements de page, le préchargement des liens s’arrête et les préchargements de cibles sont abandonnés. Si un document préchargé est partiellement stocké, alors il est emmagasiné dans le cache à condition que le serveur envoie un en-tête de réponse de type `Accept-Ranges: bytes`. Cet en-tête est typiquement généré par les serveurs web quand ils gèrent du contenu statique. Quand l’utilisateur visite réellement un document préchargé, la portion restante est chargée en utilisant une requête HTTP byte-range.

### Et si je télécharge quelque chose en tâche de fond ? Le préchargement de liens viendra-t-il en concurrence pour la bande passante ?

Oui et non. Si vous téléchargez quelque chose en utilisant Mozilla, le préchargement de liens sera retardé jusqu'à ce que les téléchargements en arrière-plan soit complets. Par exemple, si vous chargez un groupe de marque-pages (qui ouvre plusieurs onglets), toutes les requêtes de préchargement initiées par une de ces marque-pages ne se lanceront que lorsque tous les onglets auront fini de se charger. Si vous avez lancé une autre application qui utilise le réseau, le préchargement de liens dans Mozilla sera en compétition pour la bande passante, avec l’autre application. C’est un problème que nous espérons régler dans le futur en s’appuyant sur les services du système d’exploitation pour contrôler le temps disponible sur le réseau.

### Existe-t-il des restrictions sur ce qui peut être préchargé ?

Oui, uniquement les URL http\:// (et, à partir de {{ Gecko("1.9.1") }}, https\://) peuvent être préchargées. Les autres protocoles (comme FTP) ne fournissent pas de support suffisamment riche pour la gestion du cache côté client. En plus de cette restriction, les URL ayant une chaîne de paramètres ne sont pas préchargées. Ceci parce que de telles URL sont souvent dans des documents qui ne peuvent pas être réutilisés en dehors du cache du navigateur. Donc précharger de telles URL n’apporterait pas grand chose. Nous avons constaté que des sites existants utilisent la balise \<link rel="next"> avec des URL contenant des chaînes de paramètres pour référencer le document suivant dans une série de documents. Bugzilla est un de ces sites et il s'avère que les rapports de bug dans Bugzilla ne peuvent être mis en cache, aussi précharger ces URL reviendrait à peu près à doubler la charge de ce pauvre Bugzilla ! On peut se douter que d’autres sites ont été conçus comme Bugzilla donc on ne fait explicitement pas de préchargement d’URL contenant des chaînes de paramètres. (Il pourrait être sensé d’autoriser le préchargement de ces documents avec une relation de type `rel=prefetch`, puisque cela n'apparait pas dans aucun contenu existant). Il n’y a pas d’autres restrictions en ce qui concerne les URL préchargées.

### Mozilla peut-il précharger un document d’un hôte différent ?

Oui. Il n’est pas nécessaire que les documents aient la même origine pour le préchargement de liens. Limiter le préchargement uniquement à des URL du même serveur n’augmenterait pas la sécurité du navigateur.

### Les requêtes préchargées contiennent-elles un en-tête `Referer:` ?

Oui, les requêtes préchargées incluent une entête HTTP `Referer:` qui indique le document duquel la cible de préchargement a été extraite.

Cela peut impacter l'analyse de l'affluence qui est communément utilisée sur de nombreux sites. Pour cette raison, le préchargement de liens peut ne pas être approprié pour toutes sortes de contenus. Toutefois, il est possible de contraindre Mozilla à valider un document préchargé quand l'utilisateur suit un `href` vers le document préchargé en spécifiant un en-tête de réponse HTTP `Cache-control: must-revalidate`. Cet en-tête permet la mise en cache mais requiert une requête de validation `If-Modified-Since` ou `If-None-Match` pour que le document soit servi à partir du cache du navigateur.

### En tant qu'administrateur serveur, puis-je distinguer les requêtes préchargées, des requêtes normales ?

Oui, l'en-tête suivant est envoyé avec chaque requête préchargée :

     X-moz: prefetch

Bien sûr, cet en-tête de requête n'est absolument pas standardisé et il peut changer dans les futures versions de Mozilla.

### Existe-t-il une préférence pour désactiver le préchargement de liens ?

Oui, il existe une préférence cachée pour désactiver le préchargement de liens. Ajoutez cette ligne dans votre fichier prefs.js qui se trouve dans votre répertoire de profil (ou faite le changement approprié via `about:config`) :

     user_pref("network.prefetch-next", false);

Toutefois, la théorie est que si le préchargement de liens a besoin d'être désactivé c'est qu'il doit y avoir un problème dans l'implémentation. On doit améliorer l'implémentation si ça ne marche pas correctement plutôt que d'attendre que l'utilisateur trouve et modifie une obscure préférence.

### Et pour les gens qui payent à la bande passante utilisée ?

En fait, il y a deux façons d'aborder ce problème :

1.  Les sites Web peuvent provoquer le chargement de choses de façon transparente en utilisant des hacks JS/DOM.
2.  Le préchargement est une fonctionnalité du navigateur, les utilisateurs devraient pouvoir le désactiver facilement.

Il est important que les sites web adoptent la balise `<link>` pour le préchargement, plutôt que d'essayer d'initier le chargement en tâche de fond avec des hacks JS/DOM. La balise `<link>` donne au navigateur la capacité de savoir quels sites sont à charger et on peut utiliser cette information pour améliorer le système de priorité du préchargement des liens. La préférence utilisateur pour désactiver le préchargement par la balise `<link>` encourage simplement les sites Web à s'abstenir d'utiliser des hacks JS/DOM. Cela n'apporterait rien de positif aux utilisateurs. C'est une des raisons pour lesquelles le préchargement est activé par défaut.

### Quels navigateurs supportent le préchargement de liens ?

Les navigateurs basés sur Mozilla 1.2 (ou +) aussi bien que ceux basés sur Mozilla 1.0.2 (ou +) supportent le préchargement. Cela inclut Firefox et Netscape 7.02+. Les compilations Camino, en Mars 2003, sont basées sur Mozilla 1.0.1 et donc ne supportent pas le préchargement. [Testez](http://gemal.dk/browserspy/prefetch.php) votre navigateur pour vérifier s'il supporte le préchargement de liens.

### D'autres questions ?

Si vous avez des questions ou des commentaires sur le préchargement de liens, n'hésitez pas à me les envoyer :-)

#### Voir également

- [Prefetching Hints (en)](http://www.edochan.com/programming/pf.htm)

### Informations sur le document original

- Auteur(s) :Darin Fisher (darin at meer dot net)
- Date de dernière mise à jour : 3 mars 2003
