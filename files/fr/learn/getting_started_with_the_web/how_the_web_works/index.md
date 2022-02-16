---
title: Le fonctionnement du Web
slug: Learn/Getting_started_with_the_web/How_the_Web_works
tags:
  - Apprendre
  - Client
  - DNS
  - Débutant
  - HTTP
  - IP
  - Infrastructure
  - Serveur
  - TCP
  - Web
translation_of: Learn/Getting_started_with_the_web/How_the_Web_works
original_slug: Apprendre/Commencer_avec_le_web/Le_fonctionnement_du_Web
---
{{LearnSidebar}}
{{PreviousMenu("Apprendre/Commencer_avec_le_web/Publier_votre_site_web","Apprendre/Commencer_avec_le_web")}}

Cet article illustre, de façon simplifiée, ce qui se passe quand une page web s'affiche dans un navigateur, sur votre ordinateur ou votre téléphone.

Ces éléments théoriques ne sont pas strictement nécessaires pour commencer à faire du développement web dans un premier temps. Cependant, ils seront plus qu'utiles pour mieux comprendre comment le Web fonctionne en arrière-plan.

## Des clients et des serveurs

Les ordinateurs qui se connectent au Web sont appelés des **clients** et des **serveurs**. Voici un diagramme simplifié qui illustre comment ils interagissent :

![](Client-server.jpg)

- Les clients correspondent aux appareils des utilisateurs connectés sur Internet (par exemple, votre ordinateur connecté par Wi-Fi ou votre téléphone connecté sur le réseau mobile) et aux logiciels d'accès au web (par exemple, les navigateurs comme Firefox ou Chrome).
- Les serveurs sont des ordinateurs qui stockent des pages web, des sites ou des applications. Lorsqu'un appareil « client » souhaite accéder à une page web, une copie de la page est téléchargée depuis le serveur vers le client, la machine utilisée affiche alors le contenu dans le navigateur web de l'utilisateur.

## Les autres composants du Web

Le client et le serveur ne sont pas les seuls éléments qui interviennent. Il y a beaucoup d'autres composants que nous allons décrire dans la suite de cet article.

Faisons un parallèle entre le Web et une rue. D'un côté de la rue, il y a une maison qui correspond au client. De l'autre côté,  un magasin correspondant au serveur, et dans lequel vous souhaitez acheter quelque chose.

![](road.jpg)

En plus du client et du serveur, nous devons aussi mentionner :

- **la connexion Internet** : elle permet l'envoi et la réception de données sur le web. Dans notre comparaison, elle correspond à la rue entre la maison et le magasin.
- **TCP/IP** : **T**ransmission **C**ontrol **P**rotocol / **I**nternet **P**rotocol (en français : protocole de contrôle de transmission et protocole Internet) sont des protocoles définissant comment les données voyagent sur le web. C'est comme les mécanismes de transport qui vous permettent de passer une commande, d'aller au magasin et d'acheter vos marchandises. Dans notre exemple, ce serait une voiture ou un vélo (ou quoi que ce soit d'autre que vous trouveriez).
- **DNS** : **D**omain **N**ame **S**ystem (serveur de noms de domaines) est une sorte d'annuaire pour sites web. Lorsque vous saisissez une adresse dans le navigateur, ce dernier consulte le DNS pour trouver l'adresse réelle du site web avant de la récupérer. Le navigateur a besoin de savoir sur quel serveur le site web est situé pour pouvoir envoyer des requêtes HTTP au bon endroit (voir ci-après). Cela correspond à la recherche de l'adresse du magasin pour pouvoir vous y rendre.
- **HTTP** : **H**yper**T**ext **T**ransfer **P**rotocol (protocole de transfert hypertexte) est un {{Glossary("Protocol" , "protocole")}} d'application définissant le language de communication entre les clients et les serveurs. C'est la langue utilisée pour commander vos produits.
- **les fichiers composants** : un site web est constitué de divers fichiers. Ils peuvent être vus comme diverses parties des produits achetés au magasin. Ces fichiers peuvent être rangés dans deux catégories :

  - **les fichiers de code** : les sites web sont constitués essentiellement de HTML, de CSS et de JavaScript (nous découvrirons d'autres technologies plus tard).
  - **les ressources :** ce vocable recouvre tous les autres matériaux utilisés pour construire un site web : images, musiques, vidéos, documents Word et PDF.

## Donc que se passe-t-il, exactement ?

Lorsque vous saisissez une adresse web dans votre navigateur (dans notre comparaison, c'est comme aller au magasin) :

1.  le navigateur demande au DNS l'adresse réelle du serveur contenant le site web (vous trouvez l'adresse du magasin).
2.  le navigateur envoie une requête HTTP au serveur pour lui demander d'envoyer une copie du site web au client (vous allez au magasin et vous passez commande). Ce message, et les autres données envoyées entre le client et le serveur, sont échangés par l'intermédiaire de la connexion internet en utilisant TCP/IP.
3.  si le serveur accepte la requête émise par le client, le serveur envoie un message « 200 OK » au client qui signifie : « Pas de problème, tu peux consulter ce site web, le voici ». Ensuite le serveur commence à envoyer les fichiers du site web au navigateur sous forme d'une série de petits morceaux nommés "paquet" (le magasin vous livre les produits et vous les ramenez chez vous).
4.  le navigateur assemble les différents morceaux pour recomposer le site web en entier puis l'affiche sur votre écran (les produits sont à votre porte —  des nouveaux trucs tout neufs, génial !).

## Des explications sur le DNS

Les vraies adresses Web ne sont pas les chaînes agréables et mémorisables que vous tapez dans votre barre d'adresse pour trouver vos sites Web favoris, mais des suites de chiffres. Ces suites de chiffre sont des nombres spéciaux qui ressemblent à ceci : 63.245.208.195.

Ce sont des {{Glossary("IP Address", "adresses IP")}} ; elles représentent un endroit unique sur le Web. Par contre, elles ne sont pas très faciles à retenir (n'est‑ce pas ?). C'est pour cela que le système des noms de domaine (DNS) a été conçu. Les serveurs DNS sont des serveurs spéciaux qui font correspondre une adresse web saisie dans le navigateur (par exemple « mozilla.org ») avec l'adresse réelle (IP) du serveur du site.

Il est possible d'atteindre directement les sites web en utilisant leurs adresses IP. Pour aller sur le site de Mozilla, vous pouvez saisir `63.245.215.20` dans la barre d'adresse d'un nouvel onglet de votre navigateur.

![A domain name is just another form of an IP address](dns-ip.png)

## Explications sur les paquets

Un peu plus haut dans l'article, nous avons utilisé le terme « paquet » pour décrire le format avec lequel les données étaient envoyées depuis le serveur vers le client. Qu'est-ce que cela signifie ? Pour simplifier, lorsque des données sont envoyées sur le Web, elles sont envoyées en milliers de petits morceaux afin que de nombreux utilisateurs puissent consulter la même page web au même moment. Si les sites web étaient envoyés en un seul gros morceau, un seul utilisateur pourrait le télécharger à un moment donné (les autres devraient attendre leur tour), ce qui rendrait le web beaucoup moins pratique à utiliser et beaucoup moins performant.

## Voir aussi

- [Comment Internet fonctionne](/fr/Apprendre/Fonctionnement_Internet)
- [HTTP — an Application-Level Protocol](https://dev.opera.com/articles/http-basic-introduction/) (en) _(HTTP - un protocole de niveau application)_
- [HTTP: Let’s GET It On!](https://dev.opera.com/articles/http-lets-get-it-on/) (en) _(HTTP: Allons-y !)_
- [HTTP: Response Codes](https://dev.opera.com/articles/http-response-codes/) (en) _(HTTP: Codes de réponse)_

## Crédit

Photo de rue : [Street composing](https://www.flickr.com/photos/kdigga/9110990882/in/photolist-cXrKFs-c1j6hQ-mKrPUT-oRTUK4-7jSQQq-eT7daG-cZEZrh-5xT9L6-bUnkip-9jAbvr-5hVkHn-pMfobT-dm8JuZ-gjwYYM-pREaSM-822JRW-5hhMf9-9RVQNn-bnDMSZ-pL2z3y-k7FRM4-pzd8Y7-822upY-8bFN4Y-kedD87-pzaATg-nrF8ft-5anP2x-mpVky9-ceKc9W-dG75mD-pY62sp-gZmXVZ-7vVJL9-h7r9AQ-gagPYh-jvo5aM-J32rC-ibP2zY-a4JBcH-ndxM5Y-iFHsde-dtJ15p-8nYRgp-93uCB1-o6N5Bh-nBPUny-dNJ66P-9XWmVP-efXhxJ), par [Kevin D](https://www.flickr.com/photos/kdigga/).

{{PreviousMenu("Apprendre/Commencer_avec_le_web/Publier_votre_site_web","Apprendre/Commencer_avec_le_web")}}

## Dans ce module

- [Installation des outils de base](/fr/Apprendre/Commencer_avec_le_web/Installation_outils_de_base)
- [Quel sera l'aspect de votre site web ?](/fr/Apprendre/Commencer_avec_le_web/Quel_aspect_pour_votre_site)
- [Gérer les fichiers](/fr/Apprendre/Commencer_avec_le_web/G%C3%A9rer_les_fichiers)
- [Les bases du HTML](/fr/Apprendre/Commencer_avec_le_web/Les_bases_HTML)
- [Les bases de CSS](/fr/Apprendre/Commencer_avec_le_web/Les_bases_CSS)
- [Les bases de JavaScript](/fr/Apprendre/Commencer_avec_le_web/Les_bases_JavaScript)
- [Publier votre site web](/fr/Apprendre/Commencer_avec_le_web/Publier_votre_site_web)
- [Le fonctionnement du Web](/fr/Apprendre/Commencer_avec_le_web/Le_fonctionnement_du_Web)
