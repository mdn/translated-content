---
title: Choisir entre les URLs avec ou sans www
slug: Web/HTTP/Basics_of_HTTP/Choosing_between_www_and_non-www_URLs
tags:
  - Guide
  - HTTP
  - URL
translation_of: Web/HTTP/Basics_of_HTTP/Choosing_between_www_and_non-www_URLs
original_slug: Web/HTTP/Basics_of_HTTP/Choisir_entre_les_URLs_www_sans_www
---
{{HTTPSidebar}}

Une question récurrente chez les propriétaires de sites web est de choisir entre utiliser des URLs qui débutent ou non par www. Cette page fournit quelques conseils sur la meilleure approche à envisager.

## Que sont les noms de domaines ?

Dans une URL HTTP, la première chaîne qui suit le schéma `http://` ou `https://` est appelé le nom de domaine. C'est le nom du site où le document est hébergé, ce site étant lui-même hébergé sur un serveur.

Un serveur n'est pas nécessairement une machine physique : plusieurs serveurs peuvent cohabiter au sein d'une seule machine physique. Un serveur peut tout aussi bien être supporté par plusieurs machines, qui permettent de restituer l'ensemble de la réponse ou de pouvoir équilibrer la charge des requêtes entre elles. Le point clé est que, sémantiquement, _un nom de domaine représente un seul serveur_.

## Donc je dois choisir l'un ou l'autre pour mon site web ?

- Oui, car vous avez besoin de faire une sélection et de vous y tenir. Vous être libre de choisir l'un ou l'autre pour déterminer votre domaine canonique mais une fois que vous avez effectué votre choix, vous devez le respecter. Votre site web gardera ainsi une structure consistante pour vos utilisateurs ainsi que les moteurs de recherche. Cela inclut la manière dont vous exposez des liens vers votre site, que ce soit au sein du site (auquel cas l'utilisation d'adresses relatives devrait simplifier le problème), ou bien lorsque vous partagez l'information à l'extérieur (courriel, réseaux sociaux, ...).
- Non, vous pouvez utiliser les deux à la fois. La seule chose importante est de rester cohérent au niveau du nom de domaine que vous utilisez de manière officielle. **Ce domaine est appelé le nom de domaine _canonique_.** L'ensemble de vos liens absolus doivent y référer. Vous pouvez, dans le même temps, bénéficier du second domaine. HTTP et HTML supportent deux techniques qui permettent à vos utilisateurs et aux moteurs de recherche de savoir simplement lequel des deux domaines constitue le domaine canonique, bien que l'autre domaine soit actif et serve des pages web.

Ainsi, choisissez un de vos domaines comme domaine canonique. Les deux techniques ci-dessous permettent de maintenir le domaine non-canonique en état de marche.

## Techniques pour les URLs canoniques

Il existe différentes manières de choisir le site web qui sera le site _canonique_.

### Utiliser la redirection via HTTP 301

Dans ce cas, vous devez configurer le serveur qui reçoit les requêtes HTTP (a priori, le serveur qui sert le domaine avec ou sans www est le même) pour qu'il réponde un statut HTTP {{HTTPStatus(301)}} pour chaque requête provenant du domaine non-canonique. Cela aura pour effet de rediriger le navigateur qui essaie d'accéder aux adresses non-canoniques vers leurs équivalents canoniques. Ainsi, si vous avez choisi d'utiliser un domaine qui ne démarre pas par www, vous devriez rediriger chaque URL débutant par www vers une URL sans www.

Exemple :

1.  Un serveur reçoit une requête pour `https://www.exemple.org/kadoc` (tandis que le domaine canonique est constitué par exemple.org)
2.  Le serveur répond via un code {{HTTPStatus(301)}} contenant l'en-tête {{HTTPHeader("Location")}}`: https://exemple.org/kadoc`.
3.  Le client émet une requête pour le domaine canonique : `https://exemple.org/kadoc`

Le [projet HTML5 boilerplate](https://github.com/h5bp/html5-boilerplate) contient un exemple sur [la configuration d'un serveur Apache afin de rediriger un domaine vers un autre](https://github.com/h5bp/html5-boilerplate/blob/7a22a33d4041c479d0962499e853501073811887/.htaccess#L219-L258).

### Utiliser _`< link rel="canonical">`_

Il est possible d'ajouter un élément HTML spécifique {{HTMLElement("link")}} pour indiquer l'adresse canonique de la page. Cela n'a aucun impact sur la personne qui visite la page web, en revanche, elle permet aux robots des moteurs de recherche de connaître l'adresse effective de la page. De cette manière les moteurs de recherche n'indexent pas le contenu de façon répétée. Sans cet élément, ils pourraient penser que la page est dupliquée ou constitue du spam, ce qui entraînerait la disparition de la page dans les index des moteurs de recherche ou un mauvais classement.

Lors de l'ajout de cet élément, vous servez le même contenu entre les deux domaines tout en indiquant aux moteurs de recherche lequel est canonique. Dans l'exemple précédent `https://www.exemple.org/kadoc` contiendrait le même contenu que `https://exemple.org/kadoc`, avec un élément {{htmlelement("link")}} supplémentaire dans l'en-tête :

`< link href="https://exemple.org/kadoc" rel="canonical">`

À l'inverse du cas précédent, les URLs débutant par www ou non seront alors considérées dans l'historique du navigateur comme des entrées distinctes.

## Adapter votre page aux deux cas

Grâce à ces techniques, vous pouvez configurer votre serveur pour répondre correctement à l'ensemble des cas (www ou non). Il s'agit d'une bonne démarche, étant donné qu'il est impossible de prédire ce qu'un utilisateur tapera dans sa barre d'adresse. Il faut simplement déterminer votre domaine canonique pour ensuite effectuer la redirection vers ce dernier.

## Choisir www ou non

Il s'agit d'un sujet subjectif âprement débattu. S vous souhaitez approfondir, vous pouvez lire [de nombreux](http://www.themezilla.com/should-you-use-www-in-your-url-or-not/) [articles](http://www.wpbeginner.com/beginners-guide/www-vs-non-www-which-is-better-for-wordpress-seo/) sur ce sujet.

## Voir aussi

- [Statistiques sur ce que les gens entrent dans la barre d'adresse](https://www.chrisfinke.com/2011/07/25/what-do-people-type-in-the-address-bar/) (2011)
