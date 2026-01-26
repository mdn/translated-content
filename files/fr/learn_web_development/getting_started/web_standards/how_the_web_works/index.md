---
title: Comment fonctionne le Web
slug: Learn_web_development/Getting_started/Web_standards/How_the_web_works
l10n:
  sourceCommit: 4d0079996a0621722f0a9f45f29ff60c27f1cf4c
---

{{NextMenu("Learn_web_development/Getting_started/Web_standards/The_web_standards_model", "Learn_web_development/Getting_started/Web_standards")}}

_Comment fonctionne le Web_ fournit une description générale de ce qui se passe lorsque vous utilisez un navigateur web pour accéder à une page web, en expliquant la «&nbsp;magie&nbsp;» qui s'opère en coulisses pour transmettre le code pertinent à votre ordinateur afin que le navigateur l'assemble en quelque chose que vous pouvez consulter.

Cette théorie n'est pas essentielle pour écrire du code web à court terme, mais vous en tirerez rapidement profit en comprenant ce qui se passe en arrière-plan.

> [!NOTE]
> Cet article n'explique pas comment les navigateurs web transforment le code en pages web. Cela est abordé dans [Comment les navigateurs chargent les sites web](/fr/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites).

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Connaissance de base de votre système d'exploitation, des navigateurs web et des technologies web.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs d'apprentissage&nbsp;:</th>
      <td>
        <ul>
          <li>Clients et serveurs et leurs rôles sur le Web.</li>
          <li>DNS et son fonctionnement général.</li>
          <li>Rôle de TCP/IP, HTTP et des paquets.</li>
          <li>Syntaxe HTTP de base.</li>
          <li>Codes de réponse HTTP courants (par exemple&nbsp;: 200, 301, 403, 404 et 500).</li>
          <li>Composants de base d'une URL (protocole, domaine, sous-domaine, chemin).</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Clients et serveurs

Les ordinateurs connectés à internet sont appelés **clients** et **serveurs**. Un schéma simplifié de leur interaction pourrait ressembler à ceci&nbsp;:

![Deux cercles représentant le client et le serveur. Une flèche « requête » va du client vers le serveur, et une flèche « réponse » va du serveur vers le client](simple-client-server.png)

- Les clients sont les appareils connectés à internet des utilisateur·ice·s du Web (par exemple, votre ordinateur connecté à votre Wi-Fi, ou votre téléphone connecté à votre réseau mobile) et les logiciels permettant d'accéder au Web sur ces appareils (généralement un navigateur web comme Firefox ou Chrome).
- Les serveurs sont des ordinateurs qui stockent des pages web, des sites ou des applications. Lorsqu'un client souhaite accéder à une page web, une copie du code de la page est téléchargée depuis le serveur vers la machine cliente pour être interprétée par le navigateur et affichée à l'utilisateur·rice.

## Les autres éléments de la boîte à outils

Le client et le serveur que nous venons de décrire ne racontent pas toute l'histoire. De nombreux autres éléments interviennent, que nous allons détailler ci-dessous.

Pour l'instant, imaginons qu'Internet est une route. À une extrémité de la route se trouve le client, qui est comme votre maison. À l'autre extrémité se trouve le serveur, qui est comme un magasin où vous souhaitez acheter quelque chose.

![Photo en noir et blanc d'une personne traversant une route sur un passage piéton](road.jpg)

Pour que les données puissent circuler dans les deux sens, il nous faut les éléments suivants&nbsp;:

- **Votre connexion Internet**&nbsp;: permet d'envoyer et de recevoir des données sur Internet. C'est en quelque sorte la rue entre votre maison et le magasin.
- **TCP/IP**&nbsp;: le **Transmission Control Protocol** et l'**Internet Protocol** (TCP/IP) sont des protocoles de communication qui définissent comment les données doivent circuler sur Internet. Cela correspond aux moyens de transport qui vous permettent de passer commande, d'aller au magasin et d'acheter vos biens. Dans notre exemple, il s'agit d'une voiture ou d'un vélo (ou tout autre moyen de transport sur la route).
- **DNS**&nbsp;: le **Domain Name System** (DNS) est comme un carnet d'adresses pour les sites web. Lorsque vous saisissez une adresse web dans votre navigateur, celui-ci consulte le DNS pour trouver l'adresse IP du site — l'adresse réelle où se trouve le serveur — avant de pouvoir récupérer le site (voir [Explication du DNS](#explication_du_dns) ci-dessous pour plus d'informations). Le navigateur doit savoir sur quel serveur se trouve le site afin d'envoyer les messages HTTP au bon endroit (voir ci-dessous). C'est comme chercher l'adresse du magasin avant de s'y rendre.
- **HTTP**&nbsp;: le **Hypertext Transfer Protocol** (HTTP) est un {{Glossary("Protocol", "protocole")}} applicatif qui définit un langage pour que les clients et les serveurs puissent communiquer. C'est comme la langue que vous utilisez pour passer commande. Voir [Notions de base sur HTTP](#notions_de_base_sur_http) ci-dessous.
- **Fichiers**&nbsp;: un site web est composé de nombreux fichiers différents, qui sont comme les différents biens que vous achetez au magasin. Ces fichiers se répartissent en deux grandes catégories&nbsp;:
  - **Code**&nbsp;: les sites web sont principalement construits à partir de HTML, CSS et JavaScript — les différents langages de programmation dans lesquels les sites sont écrits, que le navigateur interprète et assemble en une page web à afficher à l'utilisateur·rice.
  - **Ressources**&nbsp;: terme générique pour tous les autres éléments présents sur un site web — comme les images, la musique, la vidéo, les documents Word et les PDF — qui ne sont pas du code interprété par le navigateur.

  > [!NOTE]
  > Vous découvrirez comment le navigateur assemble ces fichiers en une page web plus loin dans ce cours, dans [Comment les navigateurs chargent les sites web](/fr/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites).

## Que se passe-t-il exactement ?

Lorsque vous saisissez une adresse web (qui fait techniquement partie d'une [URL](#composants_dune_url)) dans la barre d'adresse de votre navigateur, les étapes suivantes se produisent&nbsp;:

1. Le navigateur interroge le serveur DNS et trouve l'adresse réelle du serveur sur lequel se trouve le site web.
2. Le navigateur envoie un message de requête HTTP au serveur, lui demandant d'envoyer une copie du site web au client. Ce message, ainsi que toutes les autres données échangées entre le client et le serveur, transitent par votre connexion Internet en utilisant TCP/IP.
3. Si le serveur approuve la requête du client, il envoie au client un message «&nbsp;200 OK&nbsp;», ce qui signifie «&nbsp;Bien sûr, vous pouvez consulter ce site&nbsp;! Le voici&nbsp;», puis commence à envoyer les fichiers du site au navigateur sous forme de petits morceaux appelés [paquets](#explication_des_paquets).
4. Le navigateur assemble les petits morceaux pour reconstituer la page web complète et l'affiche.

## Explication du DNS

Les véritables adresses web ([URL](#composants_dune_url)) ne sont pas les jolies chaînes faciles à retenir que vous saisissez dans votre barre d'adresse pour trouver vos sites préférés. Ce sont des nombres spéciaux qui ressemblent à ceci&nbsp;: `192.0.2.172`.

C'est ce qu'on appelle une {{Glossary("IP Address", "adresse IP")}}, et cela représente un emplacement unique sur le Web. Cependant, ce n'est pas très facile à retenir, n'est-ce pas&nbsp;? C'est pourquoi le système DNS a été inventé. Ce système utilise des serveurs spéciaux qui associent une adresse web saisie dans votre navigateur (comme «&nbsp;mozilla.org&nbsp;») à la véritable adresse (IP) du site.

Les sites web peuvent être atteints directement via leur adresse IP. Vous pouvez utiliser un outil de recherche DNS pour trouver l'adresse IP d'un site web.

Voyons maintenant l'adresse IP de MDN, et prouvons qu'elle pointe bien vers le même endroit que l'adresse web&nbsp;:

1. Rendez-vous sur l'[outil de recherche DNS NsLookup.io <sup>(angl.)</sup>](https://www.nslookup.io/website-to-ip-lookup/), saisissez `developer.mozilla.org` et appuyez sur le bouton.
2. Sur l'écran de résultats, copiez l'adresse IP (l'adresse IPv4) dans votre presse-papiers.
3. Ouvrez un nouvel onglet de navigateur, collez l'adresse IP dans la barre d'adresse et appuyez sur <kbd>Entrée</kbd>/<kbd>Retour</kbd>. Vous devriez voir MDN s'afficher, prouvant que l'adresse IP y mène bien.

## Explication des paquets

Plus haut, nous avons utilisé le terme «&nbsp;paquets&nbsp;» pour décrire le format dans lequel les données sont transférées entre le client et le serveur. Que veut-on dire ici&nbsp;?

Lorsque des données sont envoyées sur le Web, elles le sont sous forme de petits morceaux appelés paquets. Chaque paquet contient&nbsp;:

- Un **en-tête** (<i lang="en">header</i>), qui inclut des informations telles que l'adresse IP du serveur et du client, le numéro du paquet, le nombre total de paquets dans la transmission, et des détails sur les protocoles utilisés.
- Une **charge utile** (<i lang="en">payload</i>), qui contient les données réelles envoyées dans le paquet.

Il existe plusieurs raisons pour lesquelles les données sont envoyées en petits paquets, mais la plus importante est la suivante&nbsp;:

- Ils sont parfois perdus ou corrompus, et dans ce cas, il est plus rapide et plus simple pour le client de redemander les paquets manquants plutôt que l'ensemble du fichier.
- Les paquets peuvent être acheminés par différents chemins, rendant la transmission aussi efficace que possible et réduisant le risque de ralentir le réseau — surtout lorsque de nombreux utilisateur·ice·s demandent la même ressource en même temps. Les paquets peuvent arriver dans le désordre, mais le client peut utiliser les informations contenues dans les en-têtes pour s'assurer qu'ils sont assemblés dans le bon ordre.

## Notions de base sur HTTP

HTTP utilise un langage simple de verbes pour effectuer des actions comme faire des requêtes (voir [Méthodes de requête HTTP](/fr/docs/Web/HTTP/Reference/Methods)). La méthode HTTP {{HTTPMethod("GET")}} est celle normalement utilisée pour effectuer les requêtes HTTP du type décrit ci-dessus. Par exemple, une requête pour la page d'accueil de MDN pourrait ressembler à ceci&nbsp;:

```http
GET /fr/ HTTP/2

Host: developer.mozilla.org
```

La réponse envoyée par le serveur pourrait ressembler à ceci&nbsp;:

```http
HTTP/2 200

date: Tue, 11 Feb 2025 11:13:30 GMT
expires: Tue, 11 Feb 2025 11:40:01 GMT
server: Google frontend
last-modified: Tue, 11 Feb 2025 00:49:32 GMT
ETag: "65f26b7f6463e2347f4e5a7a2adcee54"
content-length: 45227
content-type: text/html

<!doctype html> ... (les 45227 octets du HTML de la page demandée)
```

La réponse complète est plus complexe que cela, mais nous en avons omis la majeure partie pour plus de clarté. Les principales parties sont les suivantes&nbsp;:

- `HTTP/2 200`
  - : La version de HTTP utilisée par le serveur pour envoyer la réponse, ici HTTP/2, suivie d'un [code d'état](/fr/docs/Web/HTTP/Reference/Status) indiquant si la requête a réussi. `200` indique le succès.
- `date`, `expires`, etc.
  - : [En-têtes HTTP](/fr/docs/Web/HTTP/Reference/Headers) contenant des informations supplémentaires sur la réponse (notez que les requêtes peuvent aussi avoir des en-têtes), qui fournissent des informations additionnelles et/ou modifient son comportement.
- `<!doctype html>`, etc.
  - : Le corps de la réponse, qui dans ce cas contient le document HTML de la page d'accueil de MDN.

> [!NOTE]
> Consultez la [référence HTTP](/fr/docs/Web/HTTP) de MDN pour plus de détails sur HTTP, si cela vous intéresse. [Vue d'ensemble de HTTP](/fr/docs/Web/HTTP/Guides/Overview) est un bon point de départ.

### Autres codes d'état

Plus haut, nous avons rencontré le [code d'état](/fr/docs/Web/HTTP/Reference/Status) `200`, qui indique que la requête HTTP a réussi. Il existe de nombreux codes d'état HTTP avec des significations et des usages spécifiques, mais vous n'en verrez couramment que quelques-uns&nbsp;:

- `301`
  - : La ressource demandée a été déplacée de façon permanente vers un nouvel emplacement, indiqué dans la réponse. Cela sert à rediriger le contenu lorsqu'il a été déplacé.
- `400`
  - : Le serveur ne peut pas traiter la requête. Cela se produit généralement lorsque la requête n'est pas dans un format compris par le serveur, ou contient des erreurs.
- `403`
  - : Le serveur ne donnera pas accès à la ressource demandée au client. Cela arrive généralement lorsque le serveur sait qui est le client, mais que celui-ci n'a pas la permission d'accéder à la page demandée.
- `404`
  - : Le serveur ne trouve pas la ressource demandée. Ce code est souvent renvoyé si l'URL est incorrecte ou si un contenu a été supprimé sans redirection.
- `503`
  - : La requête ne peut pas être traitée à cause d'un problème côté serveur. C'est fréquent lorsque les serveurs sont hors ligne pour maintenance, et c'est censé être temporaire.

## Composants d'une URL

Techniquement, les adresses web que vous saisissez dans la barre d'adresse du navigateur font partie des **Uniform Resource Locators** (**URL**). Les URL définissent l'emplacement de ressources uniques sur Internet.

Une URL est une adresse web plus un protocole&nbsp;: par exemple, si vous ouvrez un nouvel onglet dans votre navigateur, saisissez `developer.mozilla.org` dans la barre d'adresse et appuyez sur <kbd>Entrée</kbd>/<kbd>Retour</kbd>, vous serez redirigé·e vers une URL comme celle-ci&nbsp;:

```plain
https://developer.mozilla.org/fr/
```

Les principales parties de l'URL sont&nbsp;:

- `https`
  - : Le **protocole** utilisé pour envoyer la requête. Dans ce cas, nous utilisons {{Glossary("HTTPS")}}, qui est une version sécurisée de HTTP empêchant des personnes malveillantes de lire vos données pendant leur transport. Sur le Web moderne, pratiquement tous les serveurs utilisent HTTPS, donc si vous ne le précisez pas, le navigateur suppose que c'est ce que vous utilisez et l'ajoute pour vous.
- `developer.mozilla.org`
  - : Le [**nom de domaine**](/fr/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name) de l'URL, qui représente l'emplacement principal du serveur auquel vous vous connectez. Dans ce cas, l'adresse web que vous avez saisie est égale au nom de domaine, mais ce n'est pas toujours le cas — vous pourriez saisir une adresse web plus complexe. Notez que la partie `developer` est un **sous-domaine** (zone de contenu distincte) du domaine `mozilla.org` de Mozilla. Il existe d'autres sous-domaines sur le site de Mozilla qui hébergent des contenus distincts — voir par exemple [support.mozilla.org <sup>(angl.)</sup>](https://support.mozilla.org/) et [bugzilla.mozilla.org <sup>(angl.)</sup>](https://bugzilla.mozilla.org/).
- `/fr/`
  - : Le **chemin** vers la ressource sur le serveur à laquelle vous accédez. MDN conserve tout son contenu en français dans un dossier appelé `fr`, ce à quoi cette URL fait référence.

    Si votre navigateur est configuré pour préférer le contenu en français par défaut, alors c'est l'URL vers laquelle vous serez redirigé·e lorsque vous saisissez `developer.mozilla.org`. Si votre navigateur est configuré pour préférer une autre langue prise en charge par MDN, comme l'anglais', vous serez redirigé·e vers une URL différente, comme `https://developer.mozilla.org/en-US/`. Ce n'est pas disponible par défaut sur tous les sites&nbsp;: les développeur·euse·s de MDN ont mis en place ce système pour permettre à chacun·e d'accéder facilement à la langue de son choix.

> [!NOTE]
> Il existe de nombreux autres composants qui peuvent apparaître dans les URL. Voir [Qu'est-ce qu'une URL&nbsp;?](/fr/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL) pour plus de détails.

## Voir aussi

- [Comment fonctionne Internet](/fr/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work)

## Crédit

Photo de rue&nbsp;: [Street composing <sup>(angl.)</sup>](https://www.pinterest.com/pin/400538960580676851/), par [Kevin Digga <sup>(angl.)</sup>](https://www.pinterest.com/kevindigga/).

{{NextMenu("Learn_web_development/Getting_started/Web_standards/The_web_standards_model", "Learn_web_development/Getting_started/Web_standards")}}
