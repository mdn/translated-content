---
title: Comment configurer un serveur de test local ?
slug: Learn/Common_questions/set_up_a_local_testing_server
tags:
  - Apprendre
  - Débutant
  - Express
  - Flask
  - Node
  - PHP
  - Python
  - Serveurs
  - django
  - lamp
  - localhost
translation_of: Learn/Common_questions/set_up_a_local_testing_server
original_slug: Apprendre/Common_questions/configurer_un_serveur_de_test_local
---
Cet article explique comment configurer un serveur de test local simple sur votre machine, et les bases pour l'utiliser.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis :</th>
      <td>
        Vous devez au préalable savoir
        <a href="/fr/docs/Learn/How_the_Internet_works"
          >comment Internet fonctionne</a
        > et
        <a href="/fr/docs/Learn/What_is_a_Web_server"
          >ce qu'est un serveur Web</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif:</th>
      <td>Vous apprendrez à configurer un serveur de test local.</td>
    </tr>
  </tbody>
</table>

## Fichiers locaux contre fichiers distants

Dans les cours du MDN, la plupart du temps, on vous demande d'ouvrir les exemples directement dans le navigateur — vous pouvez le faire en double cliquant le fichier HTML, en déposant celui-ci dans la fenêtre de votre navigateur, ou en faisant _Fichier_ > _Ouvrir..._ et naviguer jusqu'au fichier HTML, etc... Il y a beaucoup de manières d'y arriver.

Vous savez que vous avez lancé l'exemple depuis un fichier local, lorsque l'URL commence par `file://` suivi du chemin d'accès dans votre système de fichiers. Par contre, si vous consultez un de nos exemples hébergés sur GitHub (ou n'importe quel autre serveur distant), l'adresse web commencera par `http://` ou `https://`&nbsp;; dans ce cas le fichier a été servi via HTTP.

## Le problème du test local

Certains exemples ne fonctionneront pas si vous les ouvrez en tant que fichiers locaux. Il y a plusieurs raisons possibles, dont les plus courantes sont :

- **Ils sont basés sur des requêtes asynchrones**. Certains navigateurs comme Chrome n'exécutent pas de requêtes asynchrones (voyez [Récolter des données depuis le serveur](/fr/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)) si vous lancez simplement l'exemple comme un fichier local. Cela est dû à des restrictions de sécurité (voir [Sécurité des sites Web](/fr/docs/Learn/Server-side/First_steps/Website_security) pour en savoir plus).
- **Ils mettent en œuvre un langage spécifique, tournant sur le serveur**. Des langages côté-serveur (comme PHP ou Python) nécessitent un environnement spécifique fourni par le serveur pour interpréter le code et donner des résultats.

## Créer un serveur HTTP local simple

Pour contourner le problème des requêtes asynchrones, nous devons tester de tels exemples en les exécutant depuis un serveur local. Le module `SimpleHTTPServer` de Python permet une mise en œuvre simple de cette solution.

Voilà la marche à suivre :

1.  Installer Python. Si vous utilisez GNU/Linux ou macOS, un environnement python est sans doute déjà disponible sur votre machine. Les utilisateurs de Windows pourront trouver un installeur depuis la page d'accueil de Python (on y trouve toutes les instructions)&nbsp;:

    - Allez à [python.org](https://www.python.org/)
    - Sous Télécharger, cliquez le lien pour Python "3.xxx".
    - Tout en bas de la page,  télécharger le fichier pointé par le lien *Windows x86 executable installer*.
    - Exécuter ce programme quand le téléchargement est fini.
    - Sur la première page de l'installeur, assurez-vous d'avoir coché la case  "Ajouter Python 3.xxx to PATH".
    - Cliquer _Install_, puis _Fermer_ quand l'installation est complète.

2.  Ouvrez votre invite de commandes (Windows)/terminal (OS X et GNULinux). Pour vérifier que l'installation précédente s'est déroulée correctement, entrez la commande suivante :

    ```bash
    python -V
    ```

3.  Elle devrait retourner un numéro de version. Si c'est le cas, en utilisant la commande `cd`, placer votre répertoire de travail dans le dossier contenant l'exemple.

    ```bash
    #inclure le nom du dossier pour y s'y rendre,
    #par exemple
    cd Bureau
    # utiliser deux points pour remonter dans
    #le dossier parent si nécessaire
    cd ..
    ```

4.  Entrer la commande pour démarrer le serveur dans ce dossier.

    ```bash
    # Si la version de Python retournée est ultérieur à 3.X
    python3 -m http.server
    # Si la version de Python retournée est ultérieur à 2.X
    python -m SimpleHTTPServer
    ```

5.  Par défaut, il affiche la liste des fichiers du dossier sur un serveur de développement, sur le port 8000. Vous pouvez aller à ce serveur en saisissant l'URL `localhost:8000` dans votre navigateur web. Vous verrez le listing du dossier dans lequel le serveur tourne — cliquer le fichier HTML que vous voulez exécuter.

> **Note :** Si le port 8000 est occupé, vous pouvez choisir un autre port en spécifiant une autre valeur après la commande par exemple `python -m http.server 7800` (Python 3.x) ou `python -m SimpleHTTPServer 7800` (Python 2.x). Vous pouvez maintenant accéder à votre contenu à l'adresse `localhost:7800`.

## Faire fonctionner localement des langages serveur

Le module `SimpleHTTPServer` de Python est utile, mais il ne sait pas comment exécuter du code écrit dans des langages comme PHP ou Python. Pour gérer ça, vous aurez besoin de quelque chose en plus — ce dont vous aurez besoin exactement dépend du language serveur que vous essayez d'exécuter. Voici quelques exemples :

- Pour exécuter du code Python coté-serveur, vous aurez besoin d'utiliser un framework web Python. Vous pouvez découvrir comment utiliser le framework Django en lisant [Django Web Framework (Python)](/fr/docs/Learn/Server-side/Django). [Flask](http://flask.pocoo.org/) est une alternative à Django, un peu plus légère. Pour l'exécuter, vous aurez besoin d'[installer Python/PIP](/fr/docs/Learn/Server-side/Django/development_environment#Installing_Python_3), puis Flask en utilisant `pip3 install flask`.  À ce point, vous devriez être capable d'exécuter les exemples Python Flask en utilisant par exemple `python3 python-example.py`, puis consulter `localhost:5000` dans votre navigateur.
- Pour exécuter du code Node.js (JavaScript) côté-serveur, vous aurez besoin d'utiliser un noeud brut ou un framework construit par dessus ce dernier. Express est un bon choix — voir [Express Web Framework (Node.js/JavaScript)](/fr/docs/Learn/Server-side/Express_Nodejs).
- Pour exécuter du code PHP côté serveur, vous aurez besoin d'une configuration serveur qui peut interpréter PHP. De bonnes options pour tester PHP localement sont [MAMP](https://www.mamp.info/en/downloads/) (Mac and Windows) , [AMPPS](http://ampps.com/download) (Mac, Windows, Linux) and [LAMP](https://www.linux.com/learn/easy-lamp-server-installation) (Linux, Apache, MySQL, et PHP/Python/Perl). Ce sont des paquets complets qui créent des configurations locales vous permettant d'exécuter un serveur Apache, PHP et des bases de données MySQL.
