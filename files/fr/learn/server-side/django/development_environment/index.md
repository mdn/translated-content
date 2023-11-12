---
title: Mettre en place un environnement de développement Django
slug: Learn/Server-side/Django/development_environment
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Introduction", "Learn/Server-side/Django/Tutorial_local_library_website", "Learn/Server-side/Django")}}

Maintenant que vous savez à quoi sert Django, nous allons vous montrer comment mettre en place et tester un environnement de développement Django sous Windows, Linux (Ubuntu) et macOS — Peu importe votre système d'exploitation, cet article devrait vous fournir de quoi commencer à développer des applications Django.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis :</th>
      <td>
        Connaissances de base sur l'utilisation d'un terminal/invite de commande
        et comment installer des packages sur l'OS de l'ordinateur que vous
        utiliserez pour développer.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif :</th>
      <td>
        Avoir un environnement de développement pour Django (2.0) fonctionnel
        sur votre ordinateur.
      </td>
    </tr>
  </tbody>
</table>

## Aperçu de l'environnement de développement Django

Django simplifie le processus de configuration de votre ordinateur pour que vous puissiez rapidement commencer à développer des applications web. Cette section explique ce que vous aurez dans l'environnement de développement, et vous fournit un aperçu de certaines options de configuration et d'installation. Le reste de l'article explique la méthode _recommandée_ pour installer l'environnement de développement Django sur Ubuntu, macOS et Windows, et comment le tester.

### Qu'est-ce que l'environnement de développement Django ?

L'environnement de développement correspond à une installation de Django sur votre ordinateur local que vous pouvez utiliser pour développer et tester des applications Django avant de les déployer sur un environnement de production.

Le principal outil que fournit Django est un ensemble de scripts Python utilisés pour créer et travailler avec des projets Django, ainsi qu'un simple _serveur web de développement_ que vous pouvez utiliser pour tester en local (i.e. sur votre propre ordinateur, pas sur un serveur web externe) des applications web Django dans votre navigateur web.

Il y a plusieurs autres outils annexes, qui font partie de l'environnement de développement, que nous ne couvrirons pas ici. Cela inclut des choses comme un [éditeur de texte](/fr/docs/Learn/Common_questions/Available_text_editors) ou un IDE pour éditer votre code, et un outil de gestion de contrôle de version comme Git pour gérer en toute prudence les différentes versions de votre code. Nous supposerons ici que vous avez déjà un éditeur de texte installé.

### Quelles sont les options d'installation de Django ?

Django est extrêmement flexible sur sa manière d'être installé et configuré. Django peut-être :

- Installé sur divers systèmes d'exploitation.
- Installé depuis la source, avec l'Index des Packages Python (PyPI) et bien souvent depuis l'application de gestion de packages de l'ordinateur hôte.
- Configuré pour communiquer avec diverses bases de données, qui peuvent aussi avoir besoin d'être configurées et installées séparément.
- Lancé depuis l'environnement principal de Python ou depuis des environnements virtuels Python séparés.

Chacune de ces options requiert une configuration et une installation légèrement différente. Les sous-sections ci-dessous vous expliquent différents choix. Dans le reste de l'article, nous vous montrerons comment installer Django sur un nombre restreint de systèmes d'exploitation, et nous supposerons que cette installation aura été suivie pour tout le reste du module.

> **Note :** D'autres options d'installation possibles sont traitées dans la documentation officielle de Django. Les liens vers la [documentation appropriée peuvent-être trouvés ci-dessous](/fr/docs/Learn/Server-side/Django/development_environment).

#### Quels systèmes d'exploitation sont supportés ?

Les applications web Django peuvent tourner sous presque n'importe quelle machine pouvant faire fonctionner le langage de programmation Python 3 : Windows, macOS, Linux/Unix, Solaris, pour ne nommer que ceux-là. Quasiment n'importe quel ordinateur devrait avoir les performances nécessaires pour faire fonctionner Django lors de la phase de développement.

Dans cet article, nous vous donnons les instructions pour Windows, macOS et Linux/Unix.

#### Quelle version de Python doit-être utilisée ?

Nous vous recommandons d'utiliser la version la plus récente disponible — au moment de l'écriture de cet article, nous en sommes à la version Python 3.7.2.

Si besoin, les versions de Python 3.5 et ultérieures peuvent être utilisées (le support pour Python 3.5 sera abandonné lors de la sortie des prochaines versions).

> **Note :** Python 2.7 ne peut pas être utilisé avec Django 2.1 (la série Django 1.11.x est la dernière à supporter Python 2.7).

#### Où peut-on télécharger Django ?

Il y a trois façons de télécharger Django :

- Le Repository de Packages Python (PyPI), en utilisant l'outil pip. C'est la meilleure façon d'obtenir la dernière version stable de Django.
- En utilisant la version du gestionnaire de packages de votre ordinateur. Les distributions de Django empaquetées avec les systèmes d'exploitation offrent un mécanisme d'installation plus familier. Veuillez toutefois noter que la version du package peut être datée, et ne pourra alors être installée que dans l'environnement système de Python (ce que vous pourriez ne pas souhaiter).
- Installation depuis la source : Vous pouvez télécharger et installer la toute dernière version de Django depuis la source. Ce n'est pas recommandé pour les débutants, mais c'est une étape nécessaire si vous souhaitez contribuer à Django lui-même.

Cet article explique comment installer Django depuis PyPI afin d'obtenir la version stable la plus récente.

#### Quelle base de données ?

Django supporte quatre bases de données principales (PostgreSQL, MySQL, Oracle et SQLite), et des librairies fournies par la communauté offrent différents niveaux de support pour d'autre bases de données SQL et NoSQL populaires. Nous vous recommandons de choisir la même base de données pour la production et le développement (bien que Django puisse abstraire plusieurs différences entre les bases de données en utilisant son Mapper Relationnel-Objet (ORM), il reste tout de même certains [problèmes potentiels](https://docs.djangoproject.com/en/2.1/ref/databases/) qu'il vaut mieux éviter).

Dans cet article (et quasiment tout le module), nous utiliserons la base _SQLite_, qui sauvegarde ses données dans des fichiers. SQLite a été conçu pour être utilisé comme une base de données légère, mais elle ne peut pas supporter un haut niveau de compétition. Elle est cependant un excellent choix pour des applications qui sont prioritairement en lecture seule.

> **Note :** Django est configuré pour utiliser SQLite par défaut lorsque vous démarrez le projet de votre site web en utilisant les outils standards (_django-admin_). C'est un très bon choix lorsque vous débutez car elle ne requiert aucune configuration ou installation particulière.

#### Installation globale ou dans un environnement virtuel Python ?

Lorsque vous installez Python3, vous obtenez un environnement global unique partagé par tout le code Python3. Bien que vous puissiez installer n'importe quel package Python souhaité dans cet environnement, vous ne pouvez disposer que d'une seule version d'un package donné à la fois.

> **Note :** Les applications installées dans l'environnement global peuvent potentiellement entrer en conflit avec les autres (i.e. si elles dépendent de versions différentes d'un même package).

Si vous installez Django dans l'environnement par défaut/global, vous ne pourrez alors cibler qu'une seule version de Django sur votre machine. Cela peut devenir un problème si vous souhaitez créer de nouveaux sites web (utilisant la dernière version de Django) tout en maintenant d'autres sites web dépendant de versions antérieures.

Ainsi, un développeur Python/Django confirmé lance généralement ses applications Python dans des _environnements virtuels Python_ indépendants. Cela permet d'avoir plusieurs environnements Django sur un seul et même ordinateur. L'équipe de développement de Django elle-même recommande d'utiliser des environnements virtuels Python.

Ce module suppose que vous avez installé Django dans un environnement virtuel, et nous vous montrons comment le faire ci-dessous.

## Installer Python 3

Si vous souhaitez utiliser Django, vous devrez installer Python sur votre système d'exploitation. Si vous utilisez _Python 3_, vous aurez alors aussi besoin de l'outil [Python Package Index](https://pypi.python.org/pypi) — _pip3_ — qui est utilisé pour gérer (installer, mettre à jour, supprimer) les packages/librairies Python qui seront utilisés par Django et vos autres applications Python.

Cette section décrit brièvement comment vérifier quelle version de Python sont disponibles, et comment installer de nouvelles versions si nécessaire, sur Ubuntu Linux 18.04, macOS et Windows 10.

> **Note :** En fonction de votre plateforme, vous aurez probablement aussi besoin d'installer Python/pip depuis le gestionnaire de packages de votre système d'exploitation, ou via d'autre moyens. Pour la plupart des plateformes, vous pouvez télécharger les fichiers d'installation requis depuis <https://www.python.org/downloads/> et les installer en utilisant la méthode appropriée à votre plateforme.

### Ubuntu 18.04

Ubuntu Linux 18.04 LTS inclut par défaut Python 3.6.6. Vous pouvez vous en assurer en exécutant les commandes suivantes depuis le terminal bash :

```bash
python3 -V
 Python 3.6.6
```

Toutefois, l'outil d'Index des Packages Python dont vous aurez besoin pour installer des packages avec Python 3 (y compris Django) n'est **pas** disponible par défaut. Vous pouvez installer pip3 avec le terminal bash avec :

```bash
sudo apt install python3-pip
```

### macOS

macOS "El Capitan"et les versions plus récentes n'incluent pas Python 3. Vous pouvez vous en assurer en exécutant les commandes suivantes dans votre terminal bash :

```bash
python3 -V
 -bash: python3ommand not found
```

Vous pouvez facilement installer Python 3 (ainsi que l'outil _pip3_) sur [python.org](https://www.python.org/):

1. Téléchargez l'installeur requis :

   1. Allez sur <https://www.python.org/downloads/>
   2. Sélectionnez le bouton **Download Python 3.7.2** (le numéro de version mineure peut varier).

2. Localisez le fichier en utilisant le _Finder_, puis double-cliquez le fichier package. Suivez les consignes d'installation.

Vous pouvez désormais confirmer la bonne installation en vérifiant votre version de Python 3 comme indiqué ci-dessous :

```bash
python3 -V
 Python 3.7.2
```

Vous pouvez aussi vérifier que pip3 est correctement installé en listant les packages disponibles :

```bash
pip3 list
```

### Windows 10

Windows n'inclut pas Python par défaut, mais vous pouvez facilement l'installer (ainsi que l'outil _pip3_) sur [python.org](https://www.python.org/)&nbsp;:

1. Téléchargez l'installeur requis :

   1. Allez sur <https://www.python.org/downloads/>
   2. Sélectionnez le bouton **Download Python 3.7.2** (le numéro de version mineure peut varier).

2. Installez Python en double-cliquant sur le fichier télécharger puis en suivant les consignes d'installation
3. Assurez-vous d'avoir coché la case intitulée "Ajouter Python au PATH".

Vous pouvez ensuite vérifier que Python s'est correctement installé en tapant le texte suivant dans votre invite de commande :

```bash
py -3 -V
 Python 3.7.2
```

L'installeur Windows inclut _pip3_ (le gestionnaire de packages Python) par défaut. Vous pouvez lister les packages installés de la manière suivante :

```bash
pip3 list
```

> **Note :** L'installeur devrait configurer tout ce dont vous avez besoin pour que les commandes ci-dessus fonctionnent. Toutefois, si vous obtenez un message vous indiquant que Python ne peut pas être trouvé (Python cannot be found), il est possible que vous ayez oublié de l'ajouter à votre PATH système. Vous pouvez faire cela en réexécutant l'installeur, sélectionnez "Modifier", puis cochez la case intitulée "Ajouter Python aux variables d'environnement" sur le deuxième page.

## Utiliser Django dans un environnement virtuel Python

Les librairies que nous utiliserons pour créer nos environnements virtuels seront [virtualenvwrapper](https://virtualenvwrapper.readthedocs.io/en/latest/index.html) (Linux et macOS) et [virtualenvwrapper-win](https://pypi.python.org/pypi/virtualenvwrapper-win) (Windows), , qui à leur tour utilisent l'outil [virtualenv](/fr/docs/Python/Virtualenv). Les outils d'habillage permettent de créer une interface consistante pour gérer les interfaces sur toutes les plateformes.

### Installer l'utilitaire d'environnement virtuel

#### Mise en place de l'environnement virtuel sur Ubuntu

Après avoir installé Python et pip vous pouvez installer _virtualenvwrapper_ (qui inclut _virtualenv_). Le guide d'installation officiel peut être trouvé [ici](http://virtualenvwrapper.readthedocs.io/en/latest/install.html), ou bien vous pouvez suivre les instructions ci-dessous.

Installer l'outil en utilisant _pip3_:

```bash
sudo pip3 install virtualenvwrapper
```

Ajoutez ensuite les lignes suivantes à la fin de votre fichier de configuration shell (le fichier caché **.bashrc** dans votre répertoire home). Elles indiquent les endroits où vos environnements virtuels seront installés, l'emplacement de vos projets de développement, et l'emplacement du script installé avec ce package :

```bash
export WORKON_HOME=$HOME/.virtualenvs
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
export VIRTUALENVWRAPPER_VIRTUALENV_ARGS=' -p /usr/bin/python3 '
export PROJECT_HOME=$HOME/Devel
source /usr/local/bin/virtualenvwrapper.sh
```

> **Note :** Les variables `VIRTUALENVWRAPPER_PYTHON` et `VIRTUALENVWRAPPER_VIRTUALENV_ARGS` pointent vers l'emplacement d'installation par défaut de Python3, et `source /usr/local/bin/virtualenvwrapper.sh` pointe vers l'emplacement par défaut du script `virtualenvwrapper.sh`. Si le _virtualenv_ ne fonctionne pas quand vous le testez, vérifiez que Python et le script sont bien aux emplacements attendus (puis modifiez le fichier de configuration en conséquence).
>
> Vous pourrez trouver les bons emplacements de votre système en utilisant les commandes `which virtualenvwrapper.sh` et `which python3`.

Puis relancez le fichier de configuration en exécutant la commande suivante dans votre terminal :

```bash
source ~/.bashrc
```

Vous devriez alors voir apparaître plusieurs lignes de script semblables à celles ci-dessous :

```bash
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/premkproject
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/postmkproject
...
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/preactivate
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/postactivate
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/get_env_details
```

Vous pouvez maintenant créer un nouvel environnement virtuel avec la commande `mkvirtualenv`.

#### Mise en place de l'environnement virtuel sur macOS

L'installation de _virtualenvwrapper_ on sur macOS est quasiment identique à celle sur Ubuntu (une fois de plus, vous pouvez suivre les instructions du [guide officiel d'installation](http://virtualenvwrapper.readthedocs.io/en/latest/install.html) ou suivre les indications ci-dessous).

Installez _virtualenvwrapper_ (ainsi que _virtualenv_) en utilisant _pip_ comme indiqué ci-dessous.

```bash
sudo pip3 install virtualenvwrapper
```

Puis ajoutez les lignes suivantes à la fin de votre fichier de configuration shell.

```bash
export WORKON_HOME=$HOME/.virtualenvs
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
export PROJECT_HOME=$HOME/Devel
source /usr/local/bin/virtualenvwrapper.sh
```

> **Note :** La variable `VIRTUALENVWRAPPER_PYTHON` pointe vers l'emplacement d'installation par défaut de Python3, et `source /usr/local/bin/virtualenvwrapper.sh` pointe vers l'emplacement par défaut du script `virtualenvwrapper.sh`. Si le _virtualenv_ ne fonctionne pas quand vous le testez, vérifiez que Python et le script sont bien aux emplacements attendus (puis modifiez le fichier de configuration en conséquence).
>
> Par exemple, une installation test sur macOS a résulté en l'ajout des lignes suivantes dans le fichier startup :
>
> ```bash
> export WORKON_HOME=$HOME/.virtualenvs
> export VIRTUALENVWRAPPER_PYTHON=/Library/Frameworks/Python.framework/Versions/3.7/bin/python3
> export PROJECT_HOME=$HOME/Devel
> source /Library/Frameworks/Python.framework/Versions/3.7/bin/virtualenvwrapper.sh
> ```
>
> Vous pourrez trouver les bons emplacements de votre système en utilisant les commandes `which virtualenvwrapper.sh` et `which python3`.

Ce sont les mêmes lignes que pour Ubuntu, mais le nom du fichier de configuration caché du répertoire home est différent : **.bash_profile** dans votre répertoire home.

> **Note :** Si vous n'arrivez pas à trouver le fichier **.bash_profile** depuis le finder, vous pouvez aussi l'ouvrir depuis le terminal en utilisant nano.
>
> La commande sera la suivante :
>
> ```bash
> >cd ~  # Naviguer vers le répertoire home
> ls -la # Listez le contenu du répertoire. Vous devriez voir .bash_profile.
> nano .bash_profile # Ouvrez le fichier avec l'éditeur de texte nano, depuis le terminal.
> # Allez à la fin du fichier, puis copiez-collez les lignes ci-dessus.
> # Utilisez Ctrl+X pour quitter nano, sélectionnez Y pour sauvegarder le fichier.
> ```

Puis relancez le fichier de configuration en appelant la ligne suivante depuis le terminal :

```bash
source ~/.bash_profile
```

Vous devriez alors voir apparaître plusieurs lignes de script (les mêmes scripts que ceux présents dans l'installation Ubuntu). Vous devriez maintenant pouvoir créer un nouvel environnement virtuel avec la commande `mkvirtualenv`.

#### Mise en place de l'environnement virtuel sur Windows 10

Installer [virtualenvwrapper-win](https://pypi.python.org/pypi/virtualenvwrapper-win) est encore plus simple qu'installer _virtualenvwrapper_ , parce que vous n'avez pas besoin de configurer là où l'outil enregistre les informations de l'environnement virtuel (il y a des valeurs par défaut). Tout ce que vous avez besoin de faire est de lancer la commande suivante depuis l'invite de commande :

```bash
pip3 install virtualenvwrapper-win
```

Vous pouvez désormais créer un nouvel environnement virtuel avec la commande `mkvirtualenv`

### Créer un environnement virtuel

Maintenant que vous avez installé _virtualenvwrapper_ ou _virtualenvwrapper-win_ , travailler avec des environnements virtuels sera une tâche très similaire entre chaque plateforme.

Vous pouvez désormais créer un nouvel environnement virtuel avec la commande `mkvirtualenv`. Lors de son exécution, vous pourrez voir l'environnement être configuré (ce que vous verrez changera légèrement en fonction de votre plateforme). Lorsque l'exécution de la commande sera terminée, votre environnement virtuel sera actif — vous pouvez voir au début de la ligne de commande le nom de votre environnement entre parenthèses (nous vous montrons le résultat pour Ubuntu ci-dessous, mais la dernière ligne est similaire sur Windows/macOS).

```bash
$ mkvirtualenv my_django_environment

Running virtualenv with interpreter /usr/bin/python3
...
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/t_env7/bin/get_env_details
(my_django_environment) ubuntu@ubuntu:~$
```

Maintenant que vous êtes dans votre environnement virtuel vous pouvez installer Django et commencer à développer.

> **Note :** A partir de ce point dans l'article (et donc dans le module), vous pourrez considérer que toutes les commandes seront exécutées dans un environnement virtuel Python comme celui que nous avons mis en place plus haut.

### Utiliser un environnement virtuel

Il y a quelques commandes que vous devriez connaître (il y en a davantage dans la documentation de l'outil, mais celles-ci sont celles que vous utiliserez le plus souvent) :

- `deactivate` — Permet de sortir de l'environnement virtuel Python actuel
- `workon` — Lister tous les environnements virtuels disponibles
- `workon name_of_environment` — Activer l'environnement virtuel spécifié
- `rmvirtualenv name_of_environment` — Supprimer l'environnement virtuel spécifié

## Installer Django

Une fois que vous avez créé votre environnement virtuel, et que vous avez utilisé `workon` pour y entrer, vous pouvez utiliser _pip3_ pour installer Django.

```bash
pip3 install django
```

Vous pouvez tester l'installation de Django en exécutant la commande suivante (celle-ci ne fait que tester le fait que Python puisse trouver le module Django) :

```bash
# Linux/macOS
python3 -m django --version
 2.1.5

# Windows
py -3 -m django --version
 2.1.5
```

> **Note :** Si la commande Windows ci-dessus n'indique aucun module Django présent, essayez :
>
> ```bash
> py -m django --version
> ```
>
> Dans Windows, les scripts _Python 3_ sont exécutés en préfixant la commande avec `py -3`, bien que ceci puisse varier suivant votre installation. Essayer en enlevant le modificateur `-3` si vous rencontrez un problème avec la commande. Dans Linux/macOS, la commande est `python3.`

> **Attention :** Le reste de ce **module** utilise les commandes _Linux_ pour invoquer Python 3 (`python3`) . . Si vous travaillez sous _Windows_ , remplacez simplement ce préfixe avec : `py -3`

## Tester votre installation

Les tests ci-dessus fonctionnent, mais ne font rien de très divertissant. Un test plus intéressant consiste à créer un projet squelette et de voir si il fonctionne. Pour ce faire, naviguez tout d'abord dans votre invite/terminal de commande à l'endroit où vous désirez stocker vos applications Django. Créez un dossier pour votre site test et placez-vous dedans.

```bash
mkdir django_test
cd django_test
```

Vous pouvez ensuite créer un nouveau site squelette intitulé "_mytestsite_" utilisant l'outil **django-admin** omme montré. Après avoir créé le site, vous pouvez naviguer dans le dossier où vous trouverez le script principal pour gérer vos projets, intitulé **manage.py**.

```bash
django-admin startproject mytestsite
cd mytestsite
```

Nous pouvons lancer le _serveur web de développement_ depuis ce dossier en utilisant **manage.py** et la commande `runserver` command, comme indiqué ci-dessous.

```bash
$ python3 manage.py runserver
Performing system checks...

System check identified no issues (0 silenced).

You have 15 unapplied migration(s). Your project may not work properly until you apply the migrations for app(s): admin, auth, contenttypes, sessions.
Run 'python manage.py migrate' to apply them.

December 16, 2018 - 07:06:30
Django version 2.1.5, using settings 'mytestsite.settings'
Starting development server at http://127.0.0.1:8000/
Quit the server with CONTROL-C.
```

> **Note :** La commande ci-dessus montre le résultat de l'exécution sur Linux/macOS. Vous pouvez ignorer les warnings à propos des "15 unapplied migration(s)" à partir de là !

Maintenant que votre serveur est lancé, vous pouvez voir le site en naviguant vers l'URL suivante depuis votre navigateur local : `http://127.0.0.1:8000/`. Vous devriez voir un site ressemblant à celui-ci :

![Django Skeleton App Homepage - Django 2.0](django_skeleton_website_homepage_2_1.png)

## Résumé

Vous avez maintenant un environnement de développement Django fonctionnel et opérationnel sur votre ordinateur.

Dans la section test vous avez aussi vu comment créer un nouveau site web Django en utilisant `django-admin startproject`, et comment aller dessus depuis votre navigateur en utilisant le serveur de développement web (`python3 manage.py runserver`). Dans le prochain article nous détaillerons ce processus, et créant un application web simple mais complète.

## Voir aussi

- [Quick Install Guide](https://docs.djangoproject.com/en/2.1/intro/install/) (Django docs)
- [How to install Django — Complete guide](https://docs.djangoproject.com/en/2.1/topics/install/) (Django docs) - includes information on how to remove Django
- [How to install Django on Windows](https://docs.djangoproject.com/en/2.1/howto/windows/) (Django docs)

{{PreviousMenuNext("Learn/Server-side/Django/Introduction", "Learn/Server-side/Django/Tutorial_local_library_website", "Learn/Server-side/Django")}}
