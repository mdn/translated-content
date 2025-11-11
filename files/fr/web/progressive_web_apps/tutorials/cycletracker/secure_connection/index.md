---
title: "CycleTracker : connexion sécurisée"
short-title: Connexion sécurisée
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection
l10n:
  sourceCommit: 633b73367768588e7c2e93f35b470c503aede19e
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS", "Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

{{PWASidebar}}

Les <i lang="en">service workers</i>, et par extension les PWA, sont [restreints aux contextes sécurisés](/fr/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts). Les contextes sécurisés incluent notamment les contextes TLS servis avec le protocole `https://` et les ressources servies localement (par exemple les URL avec l'hôte `127.0.0.1` ou `localhost`, servies avec le protocole `http://`). Dans cette section, nous aborderons les façons de servir une application localement et à distance avec une connexion sécurisée.

Dans l'article précédent, nous avons utilisé HTML et CSS pour créer le squelette de notre application. Dans ce chapitre, nous ouvrirons le contenu statique de CycleTracker dans un navigateur, nous en verrons le contenu depuis un environnement de développement local, mais aussi depuis un serveur distant, avec une connexion sécurisée.

## Voir l'application avec le protocole `file://`

N'importe quel navigateur peut afficher du contenu HTML. Pour voir le fichier HTML avec le CSS correspondant appliqué, par exemple ce que nous avons créé dans le chapitre précédent, ouvrez le fichier `index.html` en navigant dans l'explorateur de fichier de votre ordinateur ou depuis votre navigateur en utilisant l'option de menu «&nbsp;Ouvrir un fichier…&nbsp;».

Avec le fichier `index.html` mis à jour et le fichier `style.css` dans le même répertoire, si vous consultez le fichier dans un navigateur, vous devriez obtenir quelque chose ressemblant à cette capture d'écran&nbsp;:

![Une page web verte avec un grand titre, un formulaire avec une légende, deux sélecteurs de date et un bouton.](filefile.jpg)

Ici, on voit la page à l'aide du protocole `file://`. Cela fonctionne bien pour notre projet dans l'état actuel, et suffira encore lorsque [nous ajouterons des fonctionnalités à l'aide de JavaScript](/fr/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality). Toutefois, les fichiers de manifeste et les <i lang="en">service workers</i>, qui sont des composants clés d'une PWA, ne fonctionnent qu'avec une connexion sécurisée (comme d'autres API). Une PWA doit donc être servie depuis un serveur web en HTTPS ou dans un environnement de développement local avec un hôte comme `localhost` ou `127.0.0.1` (avec ou sans numéro de port). Si nous consultons l'application finalisée avec le protocole `file://`, notre [manifeste](/fr/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file) sera ignoré et [les <i lang="en">service workers</i>](/fr/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers) ajoutés échoueront.

> [!NOTE]
> Servir l'application avec HTTPS est une bonne chose, qu'il s'agisse d'une PWA ou d'un site web. Cela permet que l'information qui transite entre le serveur web et le navigateur de la personne soit chiffrée de bout en bout. [Plusieurs API web ne fonctionnent qu'avec un contexte sécurisé](/fr/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts). Autrement dit, même si on ne crée par de PWA installable, on pourra avoir besoin d'un contexte sécurisé lorsqu'on ajoute des fonctionnalités.

Il nous faut un environnement de développement local pour suivre ce tutoriel. Pour que [notre PWA soit installable](/fr/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable), il nous faut un serveur sécurisé. Les fichiers nécessaires devront être servis via une connexion sécurisée sur le Web pour tirer parti des avantages d'une PWA et pour distribuer l'application comme telle.

## `localhost`

La méthode par défaut pour mettre en place un environnement de développement local varie d'un système d'exploitation à un autre. L'emplacement par défaut de la page de départ (l'indexe) et des fichiers de configuration peut changer d'un système à l'autre, mais la plupart fournissent une configuration serveur accessible pour le développement.

Ainsi, sur macOS Sierra ou Monterey, saisir `sudo apachectl start` dans une invite de commande démarrera un serveur web HTTP Apache. Lorsque le serveur est démarré, si vous saisissez l'URL `http://localhost` dans votre navigateur, vous pourrez voir une page web basique qui indique «&nbsp;<i lang="en">It works!</i>&nbsp;». Par défaut, le fichier HTML qui s'affiche est situé dans le répertoire `Library/WebServer/Documents/index.html.en`. Pour activer d'autres extensions de fichier que `.html.en` ou pour changer le répertoire racine, vous devrez éditer le fichier de configuration situé à l'emplacement `/etc/apache2/httpd.conf`. Le serveur peut être arrêté avec la commande `sudo apachectl stop`.

Le serveur web par défaut du système d'exploitation fournit certes un nom d'hôte simple à retenir, `localhost`, mais il faut connaître l'emplacement racine du serveur et savoir comment le configurer. Il peut aussi être limité à un seul serveur, situé à un emplacement donné. Heureusement, il existe d'autres méthodes, plus intuitives, pour créer un ou plusieurs environnements de développement, accessibles sur différents ports.

## `localhost`, avec un numéro de port

Il existe plusieurs extensions d'[IDE](/fr/docs/Glossary/IDE) et paquets propres à certains langages de programmation qui vous permettent de démarrer un environnement de développement à l'aide d'un clic ou d'une commande. Vous pouvez même démarrer plusieurs serveurs locaux, chacun ayant un numéro de port différent.

Vous pouvez lancer un serveur HTTP local à [l'aide d'une extension Visual Studio Code plugin](/fr/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server#using_an_extension_in_your_code_editor), qui permet d'exécuter un serveur local sur un port donné.[L'extension <i lang="en">Preview on Web Server</i>](https://marketplace.visualstudio.com/items?itemName=yuichinukiyama.vscode-preview-server) de l'IDE [Visual Studio Code](https://code.visualstudio.com/download) permet de créer un serveur à la racine du répertoire ouvert dans l'éditeur, en utilisant le port `8080` oar défaut. Les extensions peuvent être configurées et on pourra donc changer le paramètre `previewServer.port` pour utiliser un autre port. Par défaut, si on saisit `localhost:8080` dans la barre d'URL du navigateur, on pourra voir la page.

> [!NOTE]
> L'extension <i lang="en">Preview on Web Server</i> utilise [Browsersync](https://browsersync.io/). Lorsque vous avez un environnement de développement démarré avec cette extension, l'adresse `localhost:3001` vous permet d'accéder à l'interface utilisateur de Browsersync.

Vous pouvez également créer [un serveur local avec l'IDE IntelliJ](https://www.jetbrains.com/help/idea/creating-local-server-configuration.html), qui intègre un [serveur web PHP configurable](https://www.jetbrains.com/help/idea/php-built-in-web-server.html#configuring-built-in-web-server).

Sur MDN, vous pouvez consulter d'autres guides pour apprendre à [mettre en place un serveur de test local](/fr/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) avec [Python](/fr/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server#using_python) ou avec [un langage de programmation serveur](/fr/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server#running_server-side_languages_locally) comme PHP.

## `localhost` avec npx

Si vous avez installé Node.js, vous avez probablement installé npm et npx avec. Dans une invite de commande, saisissez `npx -v`. Si vous voyez un numéro de version, cela signifie que vous pouvez utiliser le paquet [http-server](https://www.npmjs.com/package/http-server). Il s'agit d'un serveur HTTP sans configuration qui peut être installé sans prérequis particulier. Pour démarrer le serveur, saisissez `npx http-server [chemin]` dans votre invite de commande, avec `[chemin]` correspondant au répertoire où se situe votre fichier d'index.

Par défaut, si vous saisissez `localhost:8080` dans la barre d'URL de votre navigateur, la page sera chargée. Si vous avez déjà un serveur démarré sur le port `8080`, http-server choisira automatiquement un autre port disponible pour servir l'environnement de développement, comme `8081`.

Vous pouvez aussi choisir un autre numéro de port au démarrage. Par exemple, en saisissant `npx http-server /user/votreNom/CycleTracker -p 8787`, cela démarrera un serveur local sur le port `8787` si ce dernier est disponible. Si vous avez sélectionné un port déjà utilisé, vous aurez une erreur `address already in use` (adresse déjà utilisée) ou un message similaire. Si cela fonctionne, vous pourrez saisir `localhost:8787` dans la barre d'URL de votre navigateur pour afficher le fichier d'index situé à l'emplacement `~/user/votreNom/CycleTracker/index.html`. Si aucun fichier d'index n'est présent, le serveur affichera le contenu du répertoire `~/user/votreNom/CycleTracker/`.

Ce serveur HTTP statique sans configuration suffira pour notre application. Les applications servies sur `localhost` et `127.0.0.1`, même servies sans HTTPS, sont considérées comme sécurisées. Si les navigateurs affichent des avertissements de sécurité, ceux-ci peuvent être ignorés _pour ces adresses_. Bien que ça ne soit pas nécessaire, vous pouvez configurer votre serveur web local pour utiliser HTTPS, en [ajoutant un certificat TLS intégré](https://github.com/lwsjs/local-web-server/wiki/How-to-get-the-%22green-padlock%22-using-the-built-in-certificate). Avec le certificat, vous pourrez installer et exécuter [local-web-server](<https://github.com/lwsjs/local-web-server/wiki/How-to-launch-a-secure-local-web-server-(HTTPS)>) en ligne de commande pour servir votre projet en HTTPS et éviter tout avertissement de sécurité.

```bash
npm install -g local-web-server
cd ~/user/votreNom/CycleTracker/
ws --https
```

Vous devrez peut-être utiliser `sudo` pour la commande d'installation globale précédente.

> [!NOTE]
> Si vous faites attention à la confidentialité et à la vie privée, vous verrez ici que vous pouvez construire votre PWA vous-même et l'installer sur votre machine depuis votre propre environnement de développement, sans jamais avoir besoin d'Internet. Cette application ne contient aucun pistage et aussi respectueuse de la vie privée que possible.

## Serveurs externes sécurisés

Les options précédentes sont acceptables et nécessaires pour tester une application lorsqu'on la développe (que ce soit celle de ce tutoriel ou une autre). Toutefois, même s'il est parfois possible d'héberger soi-même l'application sur un de ses appareils pour la rendre disponible sur Internet, ce n'est pas l'approche recommandée.

Pour bénéficier des fonctionnalités propres aux PWA comme l'installation rapide, une interface utilisateur dédiée et une éventuelle publication sur un magasin d'application, l'application doit être une PWA, ce qui signifie qu'elle doit utiliser un <i lang="en">service worker</i>, ce qui implique d'utiliser une connexion sécurisée. Pour distribuer votre application et permettre à d'autres de la voir, de l'utiliser et de l'installer, vous aurez besoin que votre contenu soit hébergé et disponible sur un serveur _distant_.

Pour publier officiellement une PWA, vous souhaiterez peut-être investir dans [un nom de domaine et un hébergement web](/fr/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost#hébergement). Pour les projets <i lang="en">open source</i>, où le code est disponible publiquement pour que toutes et tous puissent l'étudier et y contribuer, vous pouvez héberger votre projet sur [GitHub Pages](https://pages.github.com/).

## GitHub Pages

L'application CycleTracker actuelle peut être vue sur GitHub de façon sécurisée à l'URL [https://mdn.github.io/pwa-examples/cycletracker/html_and_css](https://mdn.github.io/pwa-examples/cycletracker/html_and_css). Nous avons mis en place les fichiers grâce à un dépôt GitHub de MDN. De même, si vous avez un compte [GitHub](https://github.com), vous pouvez mettre en place votre projet ainsi. On notera toutefois que, même si le contenu est servi de façon sécurisée avec TLS, tout ce qui est sur GitHub Pages est public. Si vous vivez dans une région où votre gouvernement peut vous poursuivre si vous suivez vos cycles menstruels, n'hésitez pas à copier-coller le code plutôt que de faire un <i lang="en">fork</i> du dépôt sur GitHub.

Pour créer un site disponible publiquement et servi de façon sécurisée, créez un [site GitHub Pages](https://docs.github.com/fr/pages/getting-started-with-github-pages/creating-a-github-pages-site). Créez un dépôt intitulé `<nomutilisateur>.github.io`, où `<nomutilisateur>` est votre nom de compte GitHub. Créez ensuite une branche `gh-pages`. Le contenu de cette branche sera alors disponible publiquement à l'adresse `https://<nomutilisateur>.github.io`.

Comme nous l'avons indiqué, les sites hébergés sur GitHub Pages sont disponibles publiquement sur Internet, même si le dépôt est privé. Pour notre application, les données relatives aux cycles sont stockées dans le stockage local. Aussi, même si l'application est disponible via une URL GitHub, les données des utilisatrices et utilisateurs seront uniquement stockées dans le navigateur de l'appareil où les données auront été saisies. Supprimer le contenu du stockage local via l'interface du navigateur suffira à supprimer toutes les données enregistrées.

Si vous ne souhaitez pas que votre PWA soit disponible à la racine de votre page, vous pouvez créer un sous-répertoire au sein du dépôt `<nomutilisateur>.github.io` ou publier votre PWA dans un dépôt séparé. En [configurant une source de publication](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) au sein du dépôt de votre PWA, votre application sera visible à l'URL `https://<nomutilisateur>.github.io/<depot>`, où `<depot>` est le nom du dépôt Git. Vous pouvez configurer GitHub pour publier automatiquement une nouvelle version de votre site quand vous [publiez des changements sur une branche donnée](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-from-a-branch) du dépôt (qui peut être la branche `main`).

Pour le cas de l'application de démonstration CycleTracker au fur et à mesure des différentes étapes du développement, `<nomutilisateur>` sera `mdn` et le dépôt est `pwa-examples`. Comme ce dépôt contient plusieurs exemples de PWA, chacune avec le code correspondant à différentes étapes du processus de développement, les fichiers (et donc les PWA correspondantes) sont disponibles avec des URL ayant plusieurs niveaux de profondeur.

> [!NOTE]
> [Vous pouvez configurer un domaine personnalisé pour les sites GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Pour la suite

Nous voici capables de voir la version statique du squelette de notre application CycleTracker dans un navigateur de façon sécurisée. Nous pouvons désormais passer à la construction de cette application. Dans le chapitre suivant, nous créerons le fichier `app.js` qui contiendra le code JavaScript qui permettra de passer de cet état statique à une application web fonctionnelle, qui stocke les données localement.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS", "Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
