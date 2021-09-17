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
<div>{{HTTPSidebar}}</div>

<p>Une question récurrente chez les propriétaires de sites web est de choisir entre utiliser des URLs qui débutent ou non par www. Cette page fournit quelques conseils sur la meilleure approche à envisager.</p>

<h2 id="Que_sont_les_noms_de_domaines">Que sont les noms de domaines ?</h2>

<p>Dans une URL HTTP, la première chaîne qui suit le schéma <code>http://</code> ou <code>https://</code> est appelé le nom de domaine. C'est le nom du site où le document est hébergé, ce site étant lui-même hébergé sur un serveur.</p>

<p>Un serveur n'est pas nécessairement une machine physique : plusieurs serveurs peuvent cohabiter au sein d'une seule machine physique. Un serveur peut tout aussi bien être supporté par plusieurs machines, qui permettent de restituer l'ensemble de la réponse ou de pouvoir équilibrer la charge des requêtes entre elles. Le point clé est que, sémantiquement, <em>un nom de domaine représente un seul serveur</em>.</p>

<h2 id="Donc_je_dois_choisir_l'un_ou_l'autre_pour_mon_site_web">Donc je dois choisir l'un ou l'autre pour mon site web ?</h2>

<ul>
 <li>Oui, car vous avez besoin de faire une sélection et de vous y tenir. Vous être libre de choisir l'un ou l'autre pour déterminer votre domaine canonique mais une fois que vous avez effectué votre choix, vous devez le respecter. Votre site web gardera ainsi une structure consistante pour vos utilisateurs ainsi que les moteurs de recherche. Cela inclut la manière dont vous exposez des liens vers votre site, que ce soit au sein du site (auquel cas l'utilisation d'adresses relatives devrait simplifier le problème), ou bien lorsque vous partagez l'information à l'extérieur (courriel, réseaux sociaux, ...).</li>
 <li>Non, vous pouvez utiliser les deux à la fois. La seule chose importante est de rester cohérent au niveau du nom de domaine que vous utilisez de manière officielle. <strong>Ce domaine est appelé le nom de domaine <em>canonique</em>.</strong> L'ensemble de vos liens absolus doivent y référer. Vous pouvez, dans le même temps, bénéficier du second domaine. HTTP et HTML supportent deux techniques qui permettent à vos utilisateurs et aux moteurs de recherche de savoir simplement lequel des deux domaines constitue le domaine canonique, bien que l'autre domaine soit actif et serve des pages web.</li>
</ul>

<p>Ainsi, choisissez un de vos domaines comme domaine canonique. Les deux techniques ci-dessous permettent de maintenir le domaine non-canonique en état de marche.</p>

<h2 id="Techniques_pour_les_URLs_canoniques">Techniques pour les URLs canoniques</h2>

<p>Il existe différentes manières de choisir le site web qui sera le site <em>canonique</em>.</p>

<h3 id="Utiliser_la_redirection_via_HTTP_301">Utiliser la redirection via HTTP 301</h3>

<p>Dans ce cas, vous devez configurer le serveur qui reçoit les requêtes HTTP (a priori, le serveur qui sert le domaine avec ou sans www est le même) pour qu'il réponde un statut HTTP {{HTTPStatus(301)}} pour chaque requête provenant du domaine non-canonique. Cela aura pour effet de rediriger le navigateur qui essaie d'accéder aux adresses non-canoniques vers leurs équivalents canoniques. Ainsi, si vous avez choisi d'utiliser un domaine qui ne démarre pas par www, vous devriez rediriger chaque URL débutant par www vers une URL sans www.</p>

<p>Exemple :</p>

<ol>
 <li>Un serveur reçoit une requête pour <code>https://www.exemple.org/kadoc</code> (tandis que le domaine canonique est constitué par exemple.org)</li>
 <li>Le serveur répond via un code {{HTTPStatus(301)}} contenant l'en-tête {{HTTPHeader("Location")}}<code>: https://exemple.org/kadoc</code>.</li>
 <li>Le client émet une requête pour le domaine canonique : <code>https://exemple.org/kadoc</code></li>
</ol>

<p>Le <a href="https://github.com/h5bp/html5-boilerplate">projet HTML5 boilerplate</a> contient un exemple sur <a href="https://github.com/h5bp/html5-boilerplate/blob/7a22a33d4041c479d0962499e853501073811887/.htaccess#L219-L258">la configuration d'un serveur Apache afin de rediriger un domaine vers un autre</a>.</p>

<h3 id="Utiliser_&lt;_link_relcanonical>">Utiliser <em><code>&lt; link rel="canonical"&gt;</code></em></h3>

<p>Il est possible d'ajouter un élément HTML spécifique {{HTMLElement("link")}} pour indiquer l'adresse canonique de la page. Cela n'a aucun impact sur la personne qui visite la page web, en revanche, elle permet aux robots des moteurs de recherche de connaître l'adresse effective de la page. De cette manière les moteurs de recherche n'indexent pas le contenu de façon répétée. Sans cet élément, ils pourraient penser que la page est dupliquée ou constitue du spam, ce qui entraînerait la disparition de la page dans les index des moteurs de recherche ou un mauvais classement.</p>

<p>Lors de l'ajout de cet élément, vous servez le même contenu entre les deux domaines tout en indiquant aux moteurs de recherche lequel est canonique. Dans l'exemple précédent <code>https://www.exemple.org/kadoc</code> contiendrait le même contenu que <code>https://exemple.org/kadoc</code>, avec un élément {{htmlelement("link")}} supplémentaire dans l'en-tête :</p>

<p><code>&lt; link href="https://exemple.org/kadoc" rel="canonical"&gt;</code></p>

<p>À l'inverse du cas précédent, les URLs débutant par www ou non seront alors considérées dans l'historique du navigateur comme des entrées distinctes.</p>

<h2 id="Adapter_votre_page_aux_deux_cas">Adapter votre page aux deux cas</h2>

<p>Grâce à ces techniques, vous pouvez configurer votre serveur pour répondre correctement à l'ensemble des cas (www ou non). Il s'agit d'une bonne démarche, étant donné qu'il est impossible de prédire ce qu'un utilisateur tapera dans sa barre d'adresse. Il faut simplement déterminer votre domaine canonique pour ensuite effectuer la redirection vers ce dernier.</p>

<h2 id="Choisir_www_ou_non">Choisir www ou non</h2>

<p>Il s'agit d'un sujet subjectif âprement débattu. S vous souhaitez approfondir, vous pouvez lire <a href="http://www.themezilla.com/should-you-use-www-in-your-url-or-not/">de nombreux</a> <a href="http://www.wpbeginner.com/beginners-guide/www-vs-non-www-which-is-better-for-wordpress-seo/">articles</a> sur ce sujet.</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="https://www.chrisfinke.com/2011/07/25/what-do-people-type-in-the-address-bar/">Statistiques sur ce que les gens entrent dans la barre d'adresse</a> (2011)</li>
</ul>
