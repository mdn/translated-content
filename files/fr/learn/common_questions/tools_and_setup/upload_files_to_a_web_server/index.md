---
title: Transférer des fichiers vers un serveur web
slug: Learn/Common_questions/Tools_and_setup/Upload_files_to_a_web_server
---

Cet article illustre comment publier votre site en ligne grâce à des outils {{Glossary("FTP")}}.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Vous devriez au préalable comprendre
        <a href="/fr/Apprendre/Qu_est-ce_qu_un_serveur_web"
          >ce qu'est un serveur web</a
        >
        et
        <a href="/fr/Apprendre/Comprendre_noms_de_domaine"
          >comment fonctionnent les noms de domaines</a
        >. Vous devriez également savoir
        <a href="/fr/Apprendre/Set_up_a_basic_working_environment"
          >mettre en place un environnement simple de développement web</a
        >
        et savoir comment
        <a href="/fr/Apprendre/HTML/Write_a_simple_page_in_HTML"
          >écrire une page web simple</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs&nbsp;:</th>
      <td>
        Apprendre à envoyer des fichiers vers un serveur en utilisant FTP.
      </td>
    </tr>
  </tbody>
</table>

Maintenant que vous avez [construit une page web](/fr/Learn/HTML/Write_a_simple_page_in_HTML), vous voulez peut être la mettre en ligne grâce à un serveur web. Dans cet article, nous verrons comment faire en utilisant {{Glossary("FTP")}}.

## Pédagogie active

_Il n'y a, pour le moment, pas d'élément de pédagogie active pour cette section. [Vous pouvez néanmoins contribuer](/fr/docs/MDN/Débuter_sur_MDN)._

## Aller plus loin

### Mettre les mains sur un client FTP : FireFTP

Il existe de nombreux clients FTP. Dans cette démonstration, nous utiliserons FireFTP. Celui-ci est simple à installer avec Firefox car [c'est un module complémentaire](https://addons.mozilla.org/firefox/addon/fireftp/).

> **Note :** Il existe de nombreuses autres options, voir [les outils de publications : les clients FTP](/fr/Apprendre/How_much_does_it_cost#Publishing_tools.3A_FTP_client) pour plus d'informations.

Pour ouvrir FireFTP dans un nouvel onglet de Firefox, il existe deux méthodes :

1. **Menu de Firefox ![](2014-01-10-13-08-08-f52b8c.png) ➤ ![Developer](Screenshot%20from%202014-11-26%2014:24:56.png) ➤ FireFTP**
2. **Outils** ➤ **Développement web** ➤ **FireFTP**

Vous devriez voir apparaître cette fenêtre :

![FireFTP : the interface, not connected to a server](fireftp-default.png)

### Se connecter

Dans cet exemple, nous prendrons un hébergeur (la société qui hébergera notre serveur web) qui s'appellera « Hébergeur Exemple » dont les URL ressembleront à : `monsiteperso.hebergeurexemple.net`.

Vous avez donc souscrit à un compte chez cet hébergeur et avez reçu des informations de sa part :

> Félicitations et merci d'avoir ouvert un compte chez Hébergeur exemple.
>
> Votre compte est : `demozilla`
>
> Votre site sera accessible à cette adresse `demozilla.hebergeurexemple.net`
>
> Pour publier votre site avec votre compte, connectez-vous via FTP avec les informations d'authentification suivantes :
>
> - Serveur FTP : `ftp://demozilla.hebergeurexemple.net`
> - Utilisateur : `demozilla`
> - Mot de passe : `pandar0ux`
> - Pour publier des fichiers sur le Web, placez les dans le répertoire `Public/htdocs`.

Tout d'abord, jetons un coup d'œil à `http://demozilla.hebergeurexemple.net/` — pour le moment, comme vous pouvez le voir, il n'y a pas grand chose :

![Our demozilla personal website, seen in a browser: it's empty](demozilla-empty.png)

> **Note :** Selon l'hébergeur que vous avez choisi, vous pourriez ici voir une page avec un texte ressemblant à « Ce site web est hébergé par \[Nom de l'hébergeur] ».

Pour connecter votre client FTP au serveur distant, cliquez sur le bouton _« Créer un compte »_ de FireFTP, puis remplissez les informations telles qu'elles vous ont été fournies par votre hébergeur :

![FireFTP: creating an account](fireftp-createlogin.png)

### Ici et là-bas : la vue locale et la vue distante

Vous pouvez ensuite vous connecter sur ce nouveau compte :

![The FTP interface, once logged](fireftp-logged.png)

Examinons cet écran :

- Sur la gauche, vous voyez vos fichier locaux (ceux de votre ordinateur). Déplacez vous dans le répertoire où vous stockez votre site web (dans ce cas, `mdn`).
- Sur la droite, vous voyez les fichiers distants (ceux du serveur web). Vous êtes connecté-e à la racine du dossier FTP distint (dans ce cas, `users/demozilla`)
- Pour le moment, vous pouvez ignorer la zone en bas de l'écran, il s'agit en fait d'un journal contenant chaque interaction entre votre client FTP et le serveur.

### Transférer des fichiers vers le serveur

Comme nous l'avons vu plus tôt, notre hébergeur nous a indiqué que les fichiers devaient être stockés sous `Public/htdocs` pour être visible sur le Web. Déplaçons-nous donc dans ce dossier grâce au volet droit :

![Changing to the htdocs folder on the remote server](remote-htdocs-empty.png)

Ensuite, pour transférer des fichiers de votre ordinateur vers ce dossier du serveur, il suffit de les glisser-déposer du volet gauche vers le volet droit :

![The files show in the remote view: they have been pushed to the server](files-dropped-onto-the-server.png)

### Est-ce que mes fichiers sont bien en ligne ?

Jusqu'ici tout va bien, vérifions quand même en tapant `http://demozilla.hebergeurexemple.net/` dans la barre d'URL du navigateur :

![Here we go: our website is live!](here-we-go.png)

Et _voilà_ ! Notre site est en ligne !

### D'autres méthodes pour transférer des fichiers

Le protocole FTP est l'une des méthodes les plus répandues pour publier un site web. Cependant, il en existe d'autres, en voici quelques unes :

- **Les interfaces web**. Votre hébergeur peut mettre à disposition une interface web qui permet de transférer des fichiers.
- **GitHub** (méthode avancée). Il est possible de transférer des fichiers grâce à {{Glossary("git")}} en utilisant des combinaison de méthodes qui sont liées aux opérations de commit/push. Pour plus d'informations, voir l'article sur [comment publier son site web](/fr/Apprendre/Commencer_avec_le_web/Publier_votre_site_web) qui fait partie du guide [Commencer avec le Web](/fr/Apprendre/Commencer_avec_le_web).
- **{{Glossary("Rsync")}}** (méthode avancée). Un système de synchronisation de fichiers entre un système local et un système distant.
- **{{Glossary("WebDAV")}}**. Une extension du protocle {{Glossary("HTTP")}} qui permet de gérer des fichiers de façon plus avancée.

## Prochaines étapes

Félicitations, vous avez presque fini. Il reste encore une dernière étape importante : [vérifier que votre site fonctionne correctement](/fr/Apprendre/Checking_that_your_web_site_is_working_properly).
