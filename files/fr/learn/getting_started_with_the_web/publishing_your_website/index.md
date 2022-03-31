---
title: Publier votre site web
slug: Learn/Getting_started_with_the_web/Publishing_your_website
tags:
  - Apprendre
  - Débutant
  - Codage
  - FTP
  - GitHub
  - Google App Engine
  - Web
  - Publier
  - Serveur Web
translation_of: Learn/Getting_started_with_the_web/Publishing_your_website
original_slug: Apprendre/Commencer_avec_le_web/Publier_votre_site_web
---
{{LearnSidebar}}{{PreviousMenuNext("Apprendre/Commencer_avec_le_web/Les_bases_JavaScript", "Apprendre/Commencer_avec_le_web/Le_fonctionnement_du_Web","Apprendre/Commencer_avec_le_web")}}

Une fois que vous avez fini d'écrire le code et d'organiser les fichiers qui composent votre site, vous devez mettre le site en ligne, ainsi d'autres personnes pourront le trouver. Cet article décrit comment mettre votre extrait de code en ligne avec peu d'efforts.

## Quelles sont les options ?

La publication d'un site web n'est pas une chose simple, essentiellement du fait qu'il y a multiples façons de le faire. Dans cet article, notre objectif n'est pas de documenter toutes les méthodes possibles. Nous discuterons plutôt des avantages et des inconvénients des trois principales stratégies du point de vue d'un débutant, puis nous vous présenterons une méthode actuellement fonctionnelle.

### Trouver un hébergement et un nom de domaine

Pour avoir plus de contrôle sur le contenu et l'apparence du site, la plupart des gens choisissent d'acheter un hébergement web et un nom de domaine :

- L'hébergement web est un espace de fichiers loué sur le [serveur web](/fr/docs/Learn/Common_questions/What_is_a_web_server) d'une société d'hébergement. Vous mettez les fichiers de votre site web dans cet espace et le serveur web en fournit le contenu aux utilisateurs qui le demandent.
- Un [nom de domaine](/fr/docs/Learn/Common_questions/What_is_a_domain_name) est l'adresse unique où les visiteurs peuvent trouver votre site web, comme `https://www.mozilla.org` ou `http://www.bbc.co.uk`. Vous pouvez louer votre nom de domaine pour autant d'années que vous le souhaitez auprès d'un **registraire de nom domaine**.

De nombreux sites professionnels sont mis en ligne de cette façon.

En plus, vous aurez besoin d'un programme de {{Glossary("FTP", "Protocole de transfert de fichiers (FTP)")}} (voir [Combien ça coûte : les logiciels](/fr/docs/Learn/Common_questions/How_much_does_it_cost#software) pour plus de détails) pour faire un transfert réel des fichiers du site web sur le serveur. Les programmes FTP varient beaucoup, mais généralement, vous devrez vous connecter sur le serveur web en utilisant des identifiants fournis par votre société d'hébergement (par ex., nom d'utilisateur, mot de passe, nom d'hôte). Le logiciel utilisé pour FTP affiche alors vos fichiers locaux et les fichiers présents sur le serveur dans deux fenêtres, ainsi vous pouvez les transférer dans les deux sens :

![](ftp.jpg)

#### Suggestions pour trouver hébergement et domaines

- Nous ne faisons pas la promotion de sociétés commerciales d'hébergement ou de bureaux d'enregistrement particuliers. Pour trouver des hébergeurs et des bureaux d'enregistrement, faites une recherche pour «&nbsp;hébergement web&nbsp;» et «&nbsp;noms de domaine&nbsp;». Tous les bureaux d'enregistrement auront une fonctionnalité vous permettant de vérifier si le nom de domaine voulu est disponible ou si quelqu'un d'autre l'a déjà enregistré.
- Votre {{Glossary("ISP", "Fournisseur d'Accès Internet (FAI)")}} fournit peut-être un hébergement limité pour un petit site web. L'ensemble des fonctionnalités disponibles sera limité, mais il pourrait être parfait pour vos premières expériences.
- Il existe quelques services gratuits tels que [Neocities](https://neocities.org/), [Google Sites](https://sites.google.com/), [Blogger](https://www.blogger.com). À nouveau, vous n'en aurez que pour votre argent, mais ils sont idéaux pour vos expérimentations initiales. Les services gratuits ne nécessitent pour la plupart pas de logiciel FTP pour le téléversement — il suffira de faire un glisser/déposer directement sur leur interface web.
- Parfois, des sociétés fournissent hébergement et domaine dans un même paquet.

### Utiliser un outil en ligne comme GitHub ou Google App Engine

Certains outils vous permettent de publier votre site web en ligne :

- [GitHub](https://github.com/) est un site de «&nbsp;codage collaboratif&nbsp;». Il vous permet de téléverser des dépôts de code pour stockage dans le **système de gestion de versions** [Git](http://git-scm.com/)**.** Vous pouvez alors collaborer à des projets de code ; le système est open source par défaut, ce qui signifie que n'importe qui dans le monde peut trouver votre code GitHub, l'utiliser, en tirer des leçons, et l'améliorer. GitHub a une fonctionnalité très utile appelée [Pages GitHub](https://pages.github.com/), qui vous permet de présenter du code de site web en direct sur le web.
- [Google App Engine](https://cloud.google.com/appengine/ "App Engine - Build Scalable Web & Mobile Backends in Any Language | Google Cloud Platform") est une plateforme puissante qui vous permet de construire et d'exécuter des applications sur l'infrastructure de Google --- que vous ayez besoin de construire une application web multi‑couche à partir de zéro ou d'héberger un site web statique. Voir [Comment héberger votre site Web sur Google App Engine ?](/fr/docs/Learn/Common_questions/How_do_you_host_your_website_on_Google_App_Engine) pour plus d'information.

Ces options sont généralement gratuites, mais vous risquez d'être dépassé par les limitations du nombre de fonctionnalités.

### Utiliser un EDI web tel que CodePen

Il existe un certain nombre d'applications web qui émulent un environnement de développement de site web, vous permettant de saisir du HTML, des CSS et du JavaScript, puis d'afficher le résultat de ce code tel qu'il le serait sur un site web — le tout dans un seul onglet de navigateur. De façon générale, ces outils sont très simples, très utiles pour apprendre, gratuits (pour les fonctionnalités de bases), et ils hébergent votre page finie à une adresse unique. Cependant, les fonctionnalités de base sont passablement limitées, et les applications ne fournissent habituellement pas d'espace d'hébergement pour des ressources (comme des images).

Faites des essais avec certains de ces exemples et voyez lequel vous aimez le mieux :

- [JSFiddle](https://jsfiddle.net/)
- [Glitch](https://glitch.com/)
- [JSBin](http://jsbin.com/)
- [CodePen](https://codepen.io/)

![](jsbin-screen.png)

## Publier via GitHub

Maintenant, nous allons vous montrer comment publier facilement votre site via les pages GitHub.

1.  Pour commencer, [inscrivez-vous sur GitHub](https://github.com/join) et vérifiez votre adresse e-mail.
2.  Ensuite, [créez un dépôt](https://github.com/new) dans lequel vous placerez vos fichiers.
3.  Sur cette page, dans le champ _Repository name_, entrez _username_.github.io : _username_ est votre nom d'utilisateur. Ainsi, par exemple, notre ami bobsmith entrera _bobsmith.github.io_.
    Également, cochez _Initialize this repository with a README_, puis cliquez sur _Create repository_.![](github-create-repo.png)
4.  Ensuite, glissez-déposez le contenu du dossier de votre site Web dans votre référentiel, puis cliquez sur _Commit changes_.

    > **Note :** Assurez-vous que votre dossier comporte bien un fichier _index.html._

5.  Maintenant, naviguez jusqu'à _username_.github.io pour voir votre site web en ligne. Par exemple, pour le nom d'utilisateur _chrisdavidmills_, allez à [chrisdavidmills.github.io](https://chrisdavidmills.github.io/).

    > **Note :** Cela peut prendre quelques minutes avant que votre site web soit actif. S'il ne fonctionne pas immédiatement, attendez quelques minutes, puis essayez à nouveau.

Pour en savoir plus, voyez [GitHub Pages Help](https://docs.github.com/en/github/working-with-github-pages/getting-started-with-github-pages).

## Lectures pour approfondir

- [Qu'est-ce qu'un serveur web](/fr/docs/Learn/Common_questions/What_is_a_web_server)
- [Comprendre les noms de domaine](/fr/docs/Learn/Common_questions/What_is_a_domain_name)
- [Combien ça coûte de faire quelque chose sur le Web ?](/fr/docs/Learn/Common_questions/How_much_does_it_cost)
- [Deploy a Website](https://www.codecademy.com/learn/deploy-a-website)&nbsp;: un bon tutoriel de Codecademy qui va plus un peu plus loin et qui montre quelques techniques supplémentaires.
- [Hébergement de sites web statiques gratuit ou peu cher](http://alignedleft.com/resources/cheap-web-hosting), un billet en anglais par Scott Murray qui permet d'avoir une meilleure idée des services disponibles.

{{PreviousMenuNext("Apprendre/Commencer_avec_le_web/Les_bases_JavaScript", "Apprendre/Commencer_avec_le_web/Le_fonctionnement_du_Web","Apprendre/Commencer_avec_le_web")}}

## Dans ce module

- [Installation des outils de base](/fr/docs/Learn/Getting_started_with_the_web/Installing_basic_software)
- [Quel sera l'aspect de votre site web ?](/fr/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like)
- [Gérer les fichiers](/fr/docs/Learn/Getting_started_with_the_web/Dealing_with_files)
- [Les bases du HTML](/fr/docs/Learn/Getting_started_with_the_web/HTML_basics)
- [Les bases de CSS](/fr/docs/Learn/Getting_started_with_the_web/CSS_basics)
- [Les bases de JavaScript](/fr/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
- [Publier votre site web](/fr/docs/Learn/Getting_started_with_the_web/Publishing_your_website)
- [Le fonctionnement du Web](/fr/docs/Learn/Getting_started_with_the_web/How_the_Web_works)
