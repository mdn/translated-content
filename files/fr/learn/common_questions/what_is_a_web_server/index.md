---
title: Qu'est-ce qu'un serveur web ?
slug: Learn/Common_questions/What_is_a_web_server
tags:
  - Beginner
  - Infrastructure
  - Learn
translation_of: Learn/Common_questions/What_is_a_web_server
original_slug: Apprendre/Qu_est-ce_qu_un_serveur_web
---
Dans cet article, nous verrons ce que sont les serveurs web, comment ils fonctionnent et pourquoi ils sont importants.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Vous devriez au préalable savoir<a
          href="/fr/docs/Apprendre/Fonctionnement_Internet"
        >
          comment Internet fonctionne</a
        >,
        <a href="/fr/docs/Apprendre/page_vs_site_vs_serveur_vs_moteur_recherche"
          >les différences entre une page web, un site web, un serveur web et un
          moteur de recherche</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs&nbsp;:</th>
      <td>
        Vous apprendrez ce qu'est un serveur web et comprendrez son
        fonctionnement général.
      </td>
    </tr>
  </tbody>
</table>

Un « serveur web » peut faire référence à des composants logiciels (_software_) ou à des composants matériels (_hardware_) ou à des composants logiciels et matériels qui fonctionnent ensemble.

1.  Au niveau des composants matériels, un serveur web est un ordinateur qui stocke les fichiers qui composent un site web (par exemple les documents HTML, les images, les feuilles de style CSS, les fichiers JavaScript) et qui les envoie à l'appareil de l'utilisateur qui visite le site. Cet ordinateur est connecté à Internet et est généralement accessible via un nom de domaine tel que `mozilla.org`.
2.  Au niveau des composants logiciels, un serveur web contient différents fragments qui contrôlent la façon dont les utilisateurs peuvent accéder aux fichiers hébergés. On trouvera au minimum un serveur _HTTP_. Un serveur HTTP est un logiciel qui comprend les {{Glossary("URL")}} et le protocole {{Glossary("HTTP")}} (le protocole utilisé par le navigateur pour afficher les pages web).

Au niveau le plus simple, à chaque fois qu'un navigateur a besoin d'un fichier hébergé sur un serveur web, le navigateur demande (on dit qu'il envoie une requête) le fichier via HTTP. Quand la requête atteint le bon serveur web (_matériel_), le serveur HTTP (_logiciel_) renvoie le document demandé, également grâce à HTTP.

![Basic representation of a client/server connection through HTTP](web-server.svg)

Pour publier un site web, vous aurez besoin d'un serveur web **statique** ou **dynamique**.

Un serveur web **statique** (aussi appelé une pile) est composé d'un ordinateur (_matériel_) et d'un serveur HTTP (_logiciel_). Il est appelé « statique » car le serveur envoie les fichiers hébergés « tels quels » vers le navigateur.

Un serveur web **dynamique** possède d'autres composants logiciels, certains qu'on retrouve fréquemment dont un _serveur d'applications_ et une _base de données_. Il est appelé « dynamique » car le serveur d'applications met à jour les fichiers hébergés avant de les envoyer au navigateur via HTTP.

Par exemple, afin de produire la page web que vous voyez sur votre navigateur, le serveur d'applications serveur peut utiliser un modèle HTML et le remplir avec des données. Ainsi, des sites comme MDN ou Wikipédia ont des milliers de pages mais il n'existe pas un document HTML réel pour chacune de ces pages. En fait, il y a quelques modèles (ou gabarits) HTML qui sont utilisés avec une gigantesque base de données. Cette organisation permet de mieux mettre à disposition le contenu et de maintenir plus efficacement le site.

## Pédagogie active

_Il n'y a, pour le moment, pas d'élément de pédagogie active pour cette section. [Vous pouvez néanmoins contribuer](/fr/docs/MDN/D%C3%A9buter_sur_MDN)._

## Aller plus loin

Pour récupérer une page web, votre navigateur envoie une requête au serveur web. Celui-ci traite alors la requête pour le fichier demandé, présent sur son espace mémoire. Lorsqu'il trouve le fichier, le serveur le lit, le manipule si nécessaire et l'envoie au navigateur. Dans cette section, nous allons décrire en détails chacune de ces étapes.

### Héberger des fichiers

Un serveur web doit stocker les fichiers nécessaires au fonctionnement du site web : tous les documents HTML et les ressources liées dont les images, les fichiers JavaScript, les feuilles de styles, les fichiers de fontes, les vidéos, etc.

D'un point de vue technique, il serait tout à fait possible de stocker tout ces éléments sur son propre ordinateur. Toutefois, il est beaucoup plus pratique d'utiliser un serveur web destiné spécifiquement à cela car il devra :

- toujours être en fonctionnement
- toujours être connecté à Internet
- conserver la même adresse IP au cours du temps (tous les fournisseurs d'accès ne fournissent pas une adresse IP fixe pour les particuliers)
- être maintenu par un fournisseur tiers.

Au regard de toutes ces raisons, il est crucial de trouver un hébergeur correct pour votre site web. Prenez donc le temps de parcourir les différentes offres afin de choisir celle qui correspond le mieux à votre besoin et à votre budget (qui pourra varier entre 0 € et plusieurs milliers d'euros par mois selon ce qui est demandé). Vous trouverez d'autres détails sur ce point [dans cet article](/fr/Apprendre/How_much_does_it_cost#Hosting).

Une fois que vous avez trouvé votre hébergeur et la solution d'hébergement qui vous convient, il vous suffira [de transférer vos fichiers vers le serveur web](/fr/docs/Apprendre/Transférer_des_fichiers_vers_un_serveur_web).

### Communiquer via HTTP

Un serveur web supporte le protocole {{Glossary("HTTP")}} (pour _HyperText Transfer Protocol_ en anglais soit Protocole de transfert hypertexte). Comme son nom l'indique, HTTP définit comment transférer des fichiers hypertextes (c'est-à-dire des documents web liés entre eux) entre deux ordinateurs.

Ici, un _protocole_ est un ensemble de règles définissant la communication entre deux ordinateurs. HTTP est un protocole textuel, sans état.

- Textuel
  - : Toutes les commandes qui sont échangées sont du texte pouvant être lu par un humain.
- Sans état
  - : Ni le serveur, ni le client (l'ordinateur sur lequel est le navigateur) ne se souviennent des communications précédentes. Par exemple, si on utilisait uniquement HTTP, un serveur ne pourrait pas se souvenir si un mot de passe a été saisi ou si une transaction est en cours (pour gérer cela, il faut utiliser un serveur d'applications).

HTTP fournit des règles claires qui indiquent comment un client et un serveur communiquent. HTTP fait l'objet d'un [article technique](/fr/docs/Web/HTTP) à part entière. Pour le moment, voici les points les plus importants à garder en mémoire :

- Seuls les _clients_ peuvent effectuer des requêtes HTTP et uniquement vers des _serveurs._ Les serveurs ne peuvent que _répondre_ à la requête d'un _client_.
- Lorsque le client demande un fichier via HTTP, il doit fournir l'{{Glossary("URL")}} du fichier en question.
- Le serveur web _doit_ répondre à chaque requête HTTP même si la réponse est un message d'erreur.

Sur un serveur web, le serveur HTTP est responsable du traitement des requêtes reçues et de leurs réponses.

1.  Une fois qu'il a reçu une requête, le serveur HTTP vérifie que l'URL demandée correspond à un fichier existant.
2.  Si c'est le cas, le serveur envoie le fichier vers le navigateur du client. Sinon, le serveur d'applications génère le fichier nécessaire.
3.  Si le fichier n'existe pas ou que le traitement est impossible, le serveur web renvoie un message d'erreur au navigateur. Le message d'erreur le plus fréquemment rencontré est {{HTTPStatus("404", "404 Page non trouvée")}} (cette erreur étant plutôt fréquente, certains ont même personnalisé et adapté [les pages d'erreurs 404](http://www.404notfound.fr/) de leurs sites).

![Une page d'erreur HTTP, en l'occurrence la page 404 de MDN](Capture.PNG)

### Contenu statique et contenu dynamique

En résumé, un serveur peut « servir » du contenu statique ou dynamique. Un contenu « statique » signifie qu'il est servi tel quel. Les sites web statiques sont les plus simples à mettre en œuvre et il sera donc préférable de commencer par un site statique.

Un site « dynamique » signifie que le serveur traite le contenu ou le génère à la volée depuis les informations contenues dans une base de données. Cette solution est plus flexible mais beaucoup plus complexe à mettre en œuvre.

Prenons l'exemple de la page que vous êtes en train de lire. Sur le serveur web qui l'héberge, il y a une serveur d'applications qui tire l'article d'une base de données, le formate et l'insère dans différents modèles HTML. Une fois ce traitement effectué, le serveur envoie le fichier vers votre navigateur. Ici, le serveur d'applications s'appelle [Kuma](/fr/docs/MDN/Kuma) et est construit en [Python](https://www.python.org/) (grâce au *framework* [Django](https://www.djangoproject.com/)). L'équipe Mozilla a construit Kuma afin qu'il réponde aux besoins spécifiques de MDN mais il existe de nombreuses autres applications, éventuellement construites sur d'autres technologies.

Il y a tellement de serveurs d'applications qu'il est difficile d'en suggérer un en particulier. Certains serveurs d'applications sont consacrés à certaines catégories de site web comme les blogs, les wikis, les boutiques en ligne, etc. D'autres, appelés {{Glossary("CMS")}} (pour _Content Management Systems_ en anglais ou « Systèmes de gestion des contenus ») sont plus génériques. Si vous construisez un site web dynamique, prenez le temps d'étudier les outils disponibles pour choisir celui qui correspondra à votre projet. Sauf si vous souhaitez apprendre des éléments de programmation serveur (ce qui est très intéressant), vous n'avez pas besoin de créer votre serveur d'applications de toute pièce (cela reviendrait à réinventer la roue).

## Prochaines étapes

Maintenant que vous connaissez les serveurs web, vous pourriez :

- continuer votre lecture avec [combien ça coûte de faire quelque chose sur le Web](/fr/docs/Apprendre/Publier_sur_le_Web_combien_ça_coûte)
- en savoir plus sur [les différents logiciels nécessaires à la création d'un site web](/fr/docs/Apprendre/Quels_logiciels_sont_nécessaires_pour_construire_un_site_web)
- poursuivre avec quelque chose de plus pratique comme [comment transférer des fichiers vers un serveur web](/fr/docs/Apprendre/Transférer_des_fichiers_vers_un_serveur_web).
