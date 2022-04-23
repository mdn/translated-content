---
title: 'Django didactique Section 2: Créer le squelette du site web'
slug: Learn/Server-side/Django/skeleton_website
tags:
  - Apprentissage
  - Article
  - Didactitiel
  - Débutant
  - Guide
  - Intro
  - Programmation
  - Tutoriel
  - django
translation_of: Learn/Server-side/Django/skeleton_website
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Tutorial_local_library_website", "Learn/Server-side/Django/Models", "Learn/Server-side/Django")}}

Ce second article de la série [didactique Django](/fr/docs/Learn/Server-side/Django/Tutorial_local_library_website) va décrire comment créer le squelette du site web du projet. Ensuite, vous pourrez paramètrer et développer les composants spécifiques comme les modèles de données, les vues, les gabarits, les formulaires...

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis:</th>
      <td>
        <a href="/fr/docs/Learn/Server-side/Django/development_environment"
          >Set up a Django development environment</a
        >. Avoir pris connaissance de
        <a
          href="/fr/docs/Learn/Server-side/Django/Tutorial_local_library_website"
          >l'article précédent</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs:</th>
      <td>
        Être capable d'utiliser les outils de Django pour initier un nouveau
        projet.
      </td>
    </tr>
  </tbody>
</table>

## Vue d'ensemble

Cet article décrit comment créer le squelette du site web du projet. Ensuite, vous pourrez paramètrer et développer les composants spcifiques comme les modèles de données, vues, formulaires... qui chacun seront vus plus en details dans les articles suivants.

La création est aisée:

1.  Utilisez la commande `django-admin` pour créer le dossier du projet ainsi que les sous-dossiers et fichiers de base ainsi que le script de gestion du projet (**manage.py**).
2.  Utilisez **manage.py** pour créer une ou plusieurs _applications_ du projet.

    > **Note :** Un site web consiste en une ou plusieurs sections, par exemple un site principal, un blog, un wiki,... La bonne pratique avec Django est de réaliser chacun des composants comme des applications séparées qui pourront éventuellement être réutilisées dans d'autres projets.

3.  Enregistrez la nouvelle application dans le projet.
4.  Liez les urls et chemins pour chaque application.

Pour [le site web "Bibliothèque locale"](/fr/docs/Learn/Server-side/Django/Tutorial_local_library_website), le dossier du site web et celui du projet auront le même nom _locallibrary_. Une seule application _catalog_ sera utilisée. La hiérachie de dossier du projet à la forme ci-dessous :

```bash
locallibrary/         # Website folder
    manage.py         # Script to run Django tools for this project (created using django-admin)
    locallibrary/     # Website/project folder (created using django-admin)
    catalog/          # Application folder (created using manage.py)
```

> **Note :** Afin de respecter la cohérence du code et pouvoir utiliser les développements sur GitHub, les noms du site et des applications, _en anglais_, n'ont pas été modifiés.

La suite de ce chapitre est consacrée pas à pas aux étapes de création d'un projet et d'une application. La fin du chapitre sera consacré à quelques éléments de configuration du site qui peuvent être réalisés à ce stade.

## Créer le projet _locallibrary_

Tout d'abord, il est nécessaire d'ouvrir une fenêtre pour exécuter des commandes en ligne (un terminal sous Linux/MacOS ou une fenêtre command sous Windows). Assurez-vous d'être dans un [environnement virtuel python](/fr/docs/Learn/Server-side/Django/development_environment#Using_a_virtual_environment), déplacez-vous dans votre arborescence de dossiers pour être dans votre zone de développement des applications Django. Créez-y un sous-dossier pour les projets Django `django_projects` et déplacez-vous dans ce dernier :

```bash
mkdir django_projects
cd django_projects
```

Pour créer un nouveau projet avec le quadriciel Django, il suffit d'utiliser la commande  `django-admin startproject`. Le résultat de cette commande sera un sous-dossier du nom du projet dans lequel il suffit de s'y déplacer comme indiqué ci-dessous :

```bash
django-admin startproject locallibrary
cd locallibrary
```

La commande `django-admin` crée une arboresence contenant des fichiers et un sous-dossier portant le même nom que le projet :

```bash
locallibrary/
    manage.py
    locallibrary/
        __init__.py
        settings.py
        urls.py
        wsgi.py
```

Votre répertoire de travail est de la forme :

    ../django_projects/locallibrary/

Le sous-dossier _locallibrary_ permettra de gérer les requêtes web, il contient :

- **\_\_init\_\_.py** est un fichier vide qui indique au langage Python de considérer ce dossier comme un module Python.
- **settings.py** contient les paramètrages du site web. C'est ce fichier qui permet de contrôler l'enregistrement des applications créées - qui va être exposé plus bas -, la configuration de la base de données ou des variables globales au site.
- **urls.py** contient les indications de routage des urls du site web. Alors qu'il pourraient contenir toutes les urls, nous verrons plus loin qu'ils est plus pratique de déléguer la gestion des urls à propre à chacune des applications dans le contexte de l'application.
- **wsgi.py** est utilisé pour la gestion de l'interface entre Python et le serveur web. Il est recommandé de ne pas y toucher.

Le fichier **manage.py** est utilisé pour créer et gérer les applications au sein du projet. C'est une boîte à outil précieuse qu'il ne faut pas modifier.

## Créer l'application _catalog_

La commande ci-dessous va créer l'application _catalog_. Vous devez être dans le dossier de votre projet locallibrary pour exécuter cette commande (dans le même dossier que le fichier **manage.py** de votre projet) :

```bash
python3 manage.py startapp catalog
```

> **Note :** La commande ci-dessus est exécutée dans un environnement Linux/macOS X. Sous Windows, il se peut que la commande soit : `py -3 manage.py startapp catalog`
>
> Si vous travaillez dans un environnement Windows, l'ensemble de la série didactique est écrite pour un environnement Linux/MacOS. Pensez, alors, à remplacer les commandes `python3` par `py -3`.
>
> Si vous utilisez une version postérieure à la version 3.7.0, la commande devrait désormais être  `py manage.py startapp catalog`

Cet outil crée un nouveau dossier, du nom de l'application, et le peuple de fichiers essentiels. La plupart des fichiers ont des noms caractéristiques de leur fonction dans le fonctionnement de Django (par exemple, les vues sont traitées dans **views.py**, le modèle de données dans **models.py**, etc.). Ces fichiers contiennent les éléments minimaux nécessaires à leur utilisation dans le projet.

Le dossier projet _locallibrary_ est agrémenté d'un nouveau sous-dossier _catalog_ :

```bash
locallibrary/
    manage.py
    locallibrary/
    catalog/
        admin.py
        apps.py
        models.py
        tests.py
        views.py
        __init__.py
        migrations/
```

A ceci s'ajoute :

- Un dossier _migrations_, qui sera utilisé par django pour gérer les migrations et les modifications progressives apportées à la base de données quand des modifications seront faîtes dans les fichiers _models.py._
- **\_\_init\_\_.py** — est un fichier vide qui indique au langage Python de considérer ce dossier comme un module Python.

> **Note :** Vous pouvez constater que dans le dossier de l'application, il n'y a pas de fichier pour gérer les urls, les gabarits ou les fichiers statiques. Nouys verrons ce point un peu plus loin, ils ne sont pas systématiquement nécessaires.

## Enregistrer l'application _catalog_

Après avoir créé l'application, il est necessaire de l'enregistrée au sein du projet. Ceci permet de prendre en charge l'ensemble des éléments de l'application pour qu'ils soient pris automatiquement en charge par le quadriciel. L'enregistrement se fait dans la section `INSTALLED_APPS` en ajoutant le nom de l'application à la liste déjà présente.

Éditez le fichier **django_projects/locallibrary/locallibrary/settings.py** et allez jusqu'à la liste `INSTALLED_APPS`. Ajoutez alors comme indiqué ci-dessous l'application à la liste.

```bash
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'catalog.apps.CatalogConfig',
]
```

Le nouvel enregistrement défini l'objet pour cette nouvelle application avec le nom (`CatalogConfig`) qui a été généré dans le fichier **/locallibrary/catalog/apps.py** quand l'application a été créée.

> **Note :** Nous verrons plus loin les autres paramètres de ce fichier(comme `MIDDLEWARE`). Cela permet la prise en charge par [Django administration site](/fr/docs/Learn/Server-side/Django/Admin_site) et donne accès à de nombreuses fonctionnalités (gestion des sessions, de l'authentication, etc).

## Définir la base de données

Dès à présent, la base de données doit être décrite. Il est souvent recommandé pour minimiser une transition délicate d'utiliser la même base de données en développement et en production. La documentation concernant les [bases de données](https://docs.djangoproject.com/fr/2.2/ref/settings/#databases) prises en charge sont bien décrites sur le site du projet Django.

Le système de gestion de base de données (SGBD) SQLite sera utilisé dans le projet de cette série didactique ; nous n'aurons pas d'accès concurents massifs et ce système ne requiert pas de paramétrages complémentaires. Ci-dessous la définition dans **settings.py** est nécessaire pour utiliser ce SGBD :

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}
```

## D'autres paramètrages du projet

Le fichier **settings.py** est utilisé pour l'ensemble des paramètres du projet, mais pour le moment nous n'allons nous occuper du fuseau horaire. Le format des fuseaux horaires est le format standard en informatique ([Liste des codes - _en anglais_](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)). Changez la variable `TIME_ZONE` de votre projet avec la chaîne appropriée à votre fuseau, par exemple :

```python
TIME_ZONE = 'Europe/Paris'
```

Il y a deux paramètres à connaître, même s'il ne seront pas modifiés pour l'instant :

- `SECRET_KEY`. Il s'agit d'une clé utilisée pour la gestion de la sécurité d'un site web par Django. Si vous ne protégez pas cette clé - c'est-à-dire si vous divulguez cette information à des tiers - vous devrez changer cette clé lors de la mise en production.
- `DEBUG`. Ce paramètre est utilisé pour afficher les journaux de traces en cas d'erreur plutôt qu'une simple erreur HTTP en réponse à une requête. Ce paramètre **doit** être positionné à `False` lors du passage en production, dans le cas contraire vous divulguerez des informations essentielles à un potentiel attaquant. Pendant la période de développement, il est très utile de la conserver à `True`.

## Configurer le routage des URLs

La création du site web s'appuie sur un routage d'URL et une gestion de la cartographie des URLs dans le fichier **urls.py**) présent dans le dossier du projet. Même si vous pouvez directement utiliser ce fichier pour gérer le routage des URLs, il est recommandé d'utiliser un mécanisme de subsidiarité avec une gestion d'URLs par application. En outre cette méthode de délégation permet une meilleure poratbilité de vos développements dans vos différents projets.

A l'ouverture du fichier **locallibrary/locallibrary/urls.py**,  vous pouvez remarquer les premières instructions sur la manière de gérer la cartographie des URLs.

```python
"""locallibrary URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('admin/', admin.site.urls),
]
```

Le routage des URLs est géré à l'aide de la variable `urlpatterns`. Elle consititue une liste Python de fonctions `path()`. Chaque instance `path()` peut associer des motifs d'URL à une vue particulière, qui sera appelée si l'URL appellée correspond au motif décrit, ou vers une autre liste d'URL (dans ce cas, le motif est à considérer comme le motif de base pour le module dans lequel il est décrit). La variable `urlpatterns` contient au démarrage une seule fonction qui permet de gérer l'URL d'administration du site et utilisant le module par défaut de Django `admin.site.urls`.

> **Note :** Dans la fonction `path()`, une route est une chaîne de caractères définissant une URL ou un motif d'URL. Cette chaîne peut inclure des variables nommées (entre < et >, par exemple `'catalog/<id>/'`). Ce motif correspondra à une URL du type **/catalog/*des_caractères*/**. La chaîne *des_caractères* sera transmis à la vue comme une chaîne de caractère associée à une variable nommée `id`. Ce point sera vu en détails plus loin dans la série didactique.

Ajoutez les lignes ci-dessous à la fin du fichier de manière à ajouter dans la variable `urlpatterns` une nouvelle entrée à la liste des routes. Cette nouvelle entrée permet une nouvelle route pour `catalog/` dont la gestion est déléguée au fichier **urls.py** du module **catalog** (c'est-à-dire le fichier **catalog/urls.py**).

```python
# Use include() to add paths from the catalog application
from django.urls import include
from django.urls import path

urlpatterns += [
    path('catalog/', include('catalog.urls')),
]
```

Il est nécessaire de rediriger la racine du site (concrètement `https://127.0.0.1:8000/`) vers celui de la seule application _catalog_ qui va être utilisée dans ce projet (concrètemen `127.0.0.1:8000/catalog/`). Pour cette étape, nous utilisons la fonction particulière (`RedirectView`) qui prend comme argument le lien relatif (concrètement `/catalog/`) quand le motif de l'URL correspondra (concrètement la racine du site).

Ajoutez les lignes ci-dessous au bas du fichier **urls.py** :

```python
#Add URL maps to redirect the base URL to our application
from django.views.generic import RedirectView
urlpatterns += [
    path('', RedirectView.as_view(url='/catalog/', permanent=True)),
]
```

La racine du site ('/') est prise en compte par Django, il est donc inutile d'écrire le chemin avec le caractère '/' en début. Si vous maintenez ce mode d'écriture, vous aurez le message ci-dessous au démarrage du serveur :

```python
System check identified some issues:

WARNINGS:
?: (urls.W002) Your URL pattern '/' has a route beginning with a '/'.
Remove this slash as it is unnecessary.
If this pattern is targeted in an include(), ensure the include() pattern has a trailing '/'.
```

Django ne s'occupe pas nativement de fichiers statiques tels que des fichiers CSS, JavaScript, ou des images, cependant il est très utile pour que le serveur de développement le fasse pendant la création du site. Une dernière étape de configuration du routage générique des urls, consiste donc à gérer la publication des fichiers statiques.

Ajoutez les lignes ci-dessous au bas du fichier **urls.py** :

    # Use static() to add url mapping to serve static files during development (only)
    from django.conf import settings
    from django.conf.urls.static import static

    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

> **Note :** Il y a plusieurs manière pour ajouter des routes à la variable `urlpatterns` (dans les étapes décrites ci-dessus nous avons ajouté petit à patir en utilisant l'opérateur `+=` pour bien séparer les étapes). Il est en réalité tout à fait possible de tout regrouper dans une seule étape :
>
> ```python
> urlpatterns = [
>     path('admin/', admin.site.urls),
>     path('catalog/', include('catalog.urls')),
>     path('', RedirectView.as_view(url='/catalog/')),
> ] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
> ```
>
> De même, nous avons ajouté des imports de module à chaque étapes (par exemple, `from django.urls import include`) ce qui permet de bien voir les différentes étapes. Cependant, l'habitude veut que tous les imports soient traités en début de fichier Python.

Dernière étape ! Il faut créer le fichier urls.py dans l'application (ou le module) catalog et de définir la variable `urlpatterns` vide pour le moment.

```python
from django.urls import path
from . import views

urlpatterns = [

]
```

## Tester le site web

A ce niveau, le squelette du site est prêt. Le site ne produit rien de concret mais il peut être démarré pour s'assurer que les modifications apportées ne génèrent pas d'erreur au démarrage du serveur.

Avant de démarer le serveur, et si vous vous souvenez bien, nous devrions faire une mise à niveau de la base de données. Il s'agit de préparer et de faire une migration de la base de données.

### Exécuter la migartion de la base de données

Django utilise une cartographie d'objet relation ou mapping d'objet relationnel pour simuler une base de données orientée objet avec une base de données relationnelles. Au fur et à mesure des modification qui sont apportées dans la définition du modèle de données, le quadriciel va générer les scripts de migration (ces scripts sont localisés dans `locallibrary/catalog/migration`) pour modifier les structures de données associées dans la base de données.

Quand le site a été créé (cf. supra), Django a automatiquement ajouté plusieurs modèles de base pour pouvoir administrer le site (point qui sera abordé plus loin). Pour configurer la base de données, avec ces éléments de base, il vous faut exécuter les commandes en ligne ci-dessous dans le répertoire racine du projet (dossier où se trouve **manage.py**):

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

> **Attention :** Chaque fois que vous ferez évoluer le modèle de données, vous devrez exécuter le commandes ci-dessus (elles seront traduites en structure dans la base de données que cela conduise à l'ajout ou au retrait d'objets ou d'attributs).

L'option `makemigrations` réalise (sans les appliquer) les migrations nécessaires à toutes les applications du projet. Vous pouvez cependant préciser le nom de l'application pour laquelle vous souhaitez réaliser la migration. Ceci permet de vérifier le code et la cohérence du modèle de donner avant de l'appliquer réellement. Quand vous aurez un niveau expert, vous pourrez choisir de les modifier à la marge.

L'option `migrate` applique les modifications sur la base de données (Django trace les modifications réalisées dans la base de données).

> **Note :** Vous pouvez consulter la documentation [Migrations](https://docs.djangoproject.com/fr/2.2/topics/migrations/) (sur le site Django) pour plus d'informations.

### Démarrer le site web

Pendant la phase de développement, vous pouvez tester votre serveur sur un mode local et le consulter avec votre navigateur.

> **Note :** Le serveur local n'est ni robuste ni performant, il n'est donc pas fait pour être utilisé en production, mais il permet d'être autonome pour les travaux de développement. La configuration par défaut de ce serveur est telle que votre site est accessible à l'URL `http://127.0.0.1:8000/`. Cependant, vous pouvez modifier ces paramètres et pour plus d'information vous pouvez consulter la documentation sur le site Django des commandes [django-admin and manage.py: runserver](https://docs.djangoproject.com/fr/2.2/ref/django-admin/#runserver).

Pour démarrer le serveur local, il suffit d'exécuter la commande ci-dessous dans le répertoire du projet (dossier où se trouver **manage.py**) :

```bash
python3 manage.py runserver

 Performing system checks...

 System check identified no issues (0 silenced).
 August 15, 2018 - 16:11:26
 Django version 2.1, using settings 'locallibrary.settings'
 Starting development server at http://127.0.0.1:8000/
 Quit the server with CTRL-BREAK.
```

Dès que le serveur est actif, vous pouvez utiliser votre navigateur est accéder à l'URL `http://127.0.0.1:8000/`. Vous devriez accéder à la page d'erreur ci-dessous :

![Django Debug page for Django 2.0](django_404_debug_page.png)

Ne vous inquitez ! Cette erreur était attendue ; elle est due à l'absence de défintion de routes dans le fichier catalog/urls.py ou dans le module `catalog.urls` module (que nous avons déclaré dans le fichier urls.py du projet).

> **Note :** La page web ci-dessus met en exergue une fonctionnalité utile de Django ; le mode des traces de debogag. Au lieu d'une simple erreur renvoyée par le serveur, celui-ci affiche un écran d'erreur avec des informations utiles pour corriger le développement conduisant à cette erreur d'affichage. Dans le cas présent, l'erreur est due au motif de l'URL qui ne correspond pas à ce qui a été configuré.

À ce stade, nous pouvons considérer que le serveur fonctionne !

> **Note :** Chaque fois que vous apportez des modifications significatives, il est important d'exécuter à nouveau un migration et un test du serveur. Cela est assez rapide, pour ne pas s'en priver !

## Relevez le défi...

Le dossier **catalog/** a été créé automatiquement et contient des fichiers pour les vues, modèles de données, etc. Ouvrez-les pour les consulter.

Comme vous avez pu le constatez plus haut, une route pour l'administration du site (`http://127.0.0.1:8000/admin/`) existe déjà dans le fichier **urls.py** du projet. Avec votre navigateur web, vous pouvez découvrir ce qui est derrière ce site.

## Résumé

Le squelette du site web est entièrement construit à ce stade. Désormais, vous allez pouvoir y ajouter des urls, des vues, des modèles de données, des gabarits et des formulaires.

Maintenant que ceci est fait, [le site web Local Library](/fr/docs/Learn/Server-side/Django/Tutorial_local_library_website) est opérationnel et nous allons passer à la partie codage et développement pour que le site produise ce qu'il est censé faire.

## A voir aussi...

- [Écriture de votre première application Django, 1ère partie](https://docs.djangoproject.com/fr/2.2/intro/tutorial01/)  (Django docs)
- [Applications](https://docs.djangoproject.com/fr/2.2/ref/applications/#configuring-applications) (Django Docs). Contains information on configuring applications.

{{PreviousMenuNext("Learn/Server-side/Django/Tutorial_local_library_website", "Learn/Server-side/Django/Models", "Learn/Server-side/Django")}}

## Dans ce module

- [Django introduction](/fr/docs/Learn/Server-side/Django/Introduction)
- [Setting up a Django development environment](/fr/docs/Learn/Server-side/Django/development_environment)
- [Django Didactique: Site web "Bibliothèque locale"](/fr/docs/Learn/Server-side/Django/Tutorial_local_library_website)
- [Django didactique Section 2: Créer le squelette du site web](/fr/docs/Learn/Server-side/Django/skeleton_website)
- [Django didactique Section 3: Utilisation des modèles de données](/fr/docs/Learn/Server-side/Django/Models)
- [Django didactique Section 4 : Site d'administration de Django](/fr/docs/Learn/Server-side/Django/Admin_site)
- [Django didactique Section 5: Créer la page d'accuei](/fr/docs/Learn/Server-side/Django/Home_page)
- [Django Tutorial Part 6: Generic list and detail views](/fr/docs/Learn/Server-side/Django/Generic_views)
- [Django Tutorial Part 7: Sessions framework](/fr/docs/Learn/Server-side/Django/Sessions)
- [Django Tutorial Part 8: User authentication and permissions](/fr/docs/Learn/Server-side/Django/Authentication)
- [Django Tutorial Part 9: Working with forms](/fr/docs/Learn/Server-side/Django/Forms)
- [Django Tutorial Part 10: Testing a Django web application](/fr/docs/Learn/Server-side/Django/Testing)
- [Django Tutorial Part 11: Deploying Django to production](/fr/docs/Learn/Server-side/Django/Deployment)
- [Django web application security](/fr/docs/Learn/Server-side/Django/web_application_security)
- [DIY Django mini blog](/fr/docs/Learn/Server-side/Django/django_assessment_blog)
