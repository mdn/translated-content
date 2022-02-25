---
title: 'Django didactique Section 5: Créer la page d''accueil'
slug: Learn/Server-side/Django/Home_page
tags:
  - Article
  - Cadriciel
  - Code
  - Didactique
  - Django (Vues)
  - Django (gabarits)
  - Débutant
  - Programmation
  - Python
  - django
translation_of: Learn/Server-side/Django/Home_page
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Admin_site", "Learn/Server-side/Django/Generic_views", "Learn/Server-side/Django")}}

Le travail préparatoire pour nous permettre de créer une page d'accueil pour le site web de [la bibliothèque locale](/fr/docs/Learn/Server-side/Django/Tutorial_local_library_website) est réalisé. La page d'accueil montera le nombre d'enregistrements pour chacun des objets décrits dans la base et les liens à l'aide d'une barre latérale de navigation. Dans la progression de l'article, nous apprendrons à gérer les vues et à présenter les données à l'aide de gabarits.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requis:</th>
      <td>
        L'<a href="/fr/docs/Learn/Server-side/Django/Introduction"
          >introduction</a
        >
        à cette série didactique et les sections précédentes y compris celle sur
        <a href="/fr/docs/Learn/Server-side/Django/Admin_site"
          >le site d'administration</a
        >
        du site web.
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>
        Apprendre à construire un routage d'URL et les pages de publication des
        vues (où les données ne sont pas encodées dans l'URL). Obtenir et
        publier des données via les objets du modèle de données et les publier à
        l'aide de gabarits.
      </td>
    </tr>
  </tbody>
</table>

## Survol

Dans les sections précédentes, nous avons défini [le modèle de données et les objets Django à manipuler](/fr/docs/Learn/Server-side/Django/Models), puis nous avons commencé à peupler [des enregistrements à l'aide du site d'administration](/fr/docs/Learn/Server-side/Django/Admin_site). Désormais, nous allons œuvrer à la présentation des données et développer le code nécessaire à l'information des utilisateurs. La première étape essentielle est de déterminer les informations que nous souhaitons publier dans nos différentes pages et, par conséquent, identifier les URL qui pourvoiront à la publication de ces informations. Nous serons alors en capacité de construire les routages d'URL, les vues et gabarits qui répondront aux exigences définies.

Le diagramme ci-dessous est important à comprendre car il est au cœur du fonctionnement du cadriciel Django. Il décrit les flux de données et les composants sollicités pour traiter et répondre à une requête HTTP. Nous avons déjà travaillé le modèle de données (à gauche du diagramme), nous allons désormais nous atteler à :

- détailler le routage des URL pour associer les vues adaptées aux requêtes HTTP que le site devra traiter (y compris avec des informations encodées dans les URL).
- définir les fonctions de visualisation et créer les pages HTML qui vont permettre de publier les informations à destination des utilisateurs du site.
- créer les gabarits qui vont permettre de publier les données dans les vues.

![](basic-django.png)

Nous aurons à créer 5 pages web pour publier les informations à destination des utilisateurs. Cela fait beaucoup d'éléments à maîtriser dans une seule section d'apprentissage de l'outil. Nous avons donc opté pour ne traiter dans cette section que de la page d'accueil et de traiter les autres pages dans une autre section du didacticiel. Cela permet, en outre, de mieux appréhender les composants comme le routage d'URL ou les vues et d'une manière générale le fonctionnement du modèle de Django.

## Identifier les URLs des ressources

Le site web de la bibliothèque locale est essentiellement un site de consultation pour les adhérents de la bibliothèque, nous aurons donc, par conséquent, besoin uniquement de pages pour les vues de détail de chacun des livres (ouvrages, auteur, etc.) de la bibliothèque et d'une page d'accueil.

La liste des URLs dont nous aurons besoin se résume à :

- `catalog/` — Pour la page d'accueil.
- `catalog/books/` — Pour la liste des livres.
- `catalog/authors/` — Pour la liste des auteurs.
- `catalog/book/<id>` — Pour disposer du détail de chacun des livres mis en prêt et identifié par identifiant `<id>` unique (le troisième livre enregistré est consultable dans le détail via l'URL `/catalog/book/3`).
- `catalog/author/<id>` — De la même manière, le détail de chacun des auteurs enregistrés, identifié de la même manière par sa clé primaire *`<id>`*.

Bien que les données dépendent du contenu de la base de données, les trois premières URLs retournent les résultats de requêtes sans informations supplémentaires ; c'est le cas de la page d'accueil qui donnera des décomptes de contenus et des pages sur la liste des livres ou des auteurs.

En revanche, les pages concernant le détail d'un livre ou d'un auteur nécessiteront de traiter l'identifiant d'un objet. Il sera nécessaire d'extraire de la requête HTTP l'information encodée de cet identifiant pour obtenir ensuite le détail depuis la base de données. Pour cela nous utiliserons un seul jeu de vue et de gabarit pour publier les informations sur les livres (et auteurs).

> **Note :** Avec le cadriciel Django, vous pouvez élaborer vos URLs comme bon vous semble — Vous pouvez avoir une approche comme celle présentée ci-dessus, ou de faire un appel de la méthode `GET` avec un passage de paramètres (`/book/?id=6`). Cependant, quelle que soit l'approche pour laquelle vous opterez, garder en mémoire d'avoir des URLs claires, logique et compréhensibles comme cela est [recommandé par le W3C](https://www.w3.org/Provider/Style/URI).
>
> La documentation de Django recommande aussi de coder les informations dans le corps des URLs pour avoir une meilleure conception de ces URLs.

La suite de cette section s'intéresse à la conception de la page d'accueil.

## Création de la page d'accueil

La toute première page à créer est la page d'accueil (`catalog/`). Cette page d'index est globalement une page statique contenant le décompte des différents enregistrements de la base de données. Pour faire cela, il sera nécessaire de créer un routage d'URL, une vue et un gabarit.

> **Note :** Cette section est essentielle, et cela vaut vraiment la peine d'être attentif aux concepts déployés dans celle-ci. La plupart des éléments abordé ici seront ré-utilisés par la suite.

### Routage d'URL

Quand nous avons créé [le squelette du site](/fr/docs/Learn/Server-side/Django/skeleton_website), nous avons mis à jour les routages des URLs dans le fichier **locallibrary/urls.py** afin de nous assurer que toutes les requêtes démarrant par `catalog/` seront traités par le configurateur _URLConf du module_ `catalog.urls` qui traitera la sous-chaîne restante.

L'extrait du code ci-dessous permet d'intégrer dans **locallibrary/urls.py** le configurateur d'URL du module `catalog` :

    urlpatterns += [
      path('catalog/', include('catalog.urls')),
    ]

Il est désormais nécessaire de créer un configurateur d'URL du module `catalog` (_URLConf_ du module est nommé **/catalog/urls.py**). Ajoutez le chemin ci-dessous :

```python
urlpatterns = [
    path('', views.index, name='index'),
]
```

La fonction `path()` sert à définir les éléments suivants :

- Un modèle d'URL qui, dans le cas présent, est une chaîne vide : `''`. Nous évoquerons ultérieurement les modèles d'URL plus en détail quand nous travaillerons les autres vues.
- Une fonction de vue, ici `views.index`, qui sera sollicitée quand le modèle d'URL sera détecté et une fonction Python qui sera appelée pour traiter l'appel d'URL est présent dans le fichier **views.py** du module `catalog`.

Le paramètre `name` utilisé dans la fonction `path()` permet aussi de définir un identifiant unique qui sert à lier les pages vers celle-ci au sein de l'application. Vous pouvez alors l'utiliser à l'envers en routant dynamiquement des pages en lien vers cette ressource :

```html
<a href="{% url 'index' %}">Home</a>.
```

> **Note :** Vous pourriez bien évidemment coder en dur l'accès à la page d'accueil de cette manière `<a href="/catalog/">Home</a>`), mais si nous changions le modèle d'URL, par exemple en `/catalog/index`, alors le gabarit ne fonctionnerait plus correctement et présenterait un lien mort. L'utilisation des noms et des routages inversés est plus robuste et adapté aux évolutions de l'application.

### Vue (_View function-based_)

Une vue est une fonction qui traite une requête HTTP, extrait des données de la base de données et les restitue dans une page HTML à l'aide d'une réponse HTTP que le navigateur mettra en forme pour l'utilisateur. La fonction `index()` suit ce modèle de traitement de l'information : elle extrait les informations sur le nombre de livres, d'ouvrage en rayon ou en prêt et d'auteur enregistrés dans la base de données et à l'aide d'un gabarit les publie.

Éditez le fichier **catalog/views.py**. Vous constaterez l'import de la fonction [render()](https://docs.djangoproject.com/en/2.1/topics/http/shortcuts/#django.shortcuts.render) qui traite de la génération HTML en utilisant des garabits et des données :

```python
from django.shortcuts import render

# Create your views here.
```

Copiez les lignes ci-dessous dans le fichier :

```python
from catalog.models import Book, Author, BookInstance, Genre

def index(request):
    """View function for home page of site."""

    # Generate counts of some of the main objects
    num_books = Book.objects.all().count()
    num_instances = BookInstance.objects.all().count()

    # Available books (status = 'a')
    num_instances_available = BookInstance.objects.filter(status__exact='a').count()

    # The 'all()' is implied by default.
    num_authors = Author.objects.count()

    context = {
        'num_books': num_books,
        'num_instances': num_instances,
        'num_instances_available': num_instances_available,
        'num_authors': num_authors,
    }

    # Render the HTML template index.html with the data in the context variable
    return render(request, 'index.html', context=context)
```

La première ligne de code permet d'importer les modèles de données du catalogue décrites dans le module `catalog`.

La première section de la fonction index() permet à l'aide de requêtes, par l'intermédiaire des objets de modèle de données, d'obtenir les nombres d'enregistrements. Pour cela, nous utilisons la méthode d'objet _models_ `objects.all()` sur les objets `Book` et `BookInstance`. Ensuite, nous recherchons les ouvrages disponibles, ce qui revient à faire une requête avec un filtre sur l'attribut status de l'objet `BookInstance` ayant la valeur 'a' (Available). Si vous avez un oubli, vous pouvez consulter [La section 3 de Django didactique : utilisation du modèle de données > Chercher des enregistrements](/fr/docs/Learn/Server-side/Django/Models#Rechercher_des_enregistrements).

La dernière ligne de cette fonction est l'appel de la fonction `render()` dont l'objet est de constituer une page HTML et la transmettre comme une réponse. Cette fonction encapsule plusieurs autres fonctions du cadriciel ce qui permet de simplifier le processus de restitution des informations. La fonction `render()` utilise les paramètres :

- La requête HTTP initiale `request` qui est un objet de type `HttpRequest`.
- Un gabarit de page HTML avec des zones prédéfinies pour les données.
- Un contexte de variables (`context`) qui est un dictionnaire en Python, contenant les données à insérer dans le gabarit pour publier la page HTML.

Nous aborderons plus en détail les aspects de gabarit et de contexte des variables dans la section suivante du didacticiel. Pour le moment, construisons un premier gabarit sans plus de précisions.

### Gabarit (_Template_)

Un gabarit est un fichier texte qui décrit la structure ou la mise en page d'un document (comme une page HTML) et qui utilise des emplacements réservés pour y insérer des informations issues de la base de données.

Le cadriciel Django va rechercher automatiquement ces gabarits dans un répertoire nommé '**templates**' dans le dossier de l'application. Si vous reprenez la dernière ligne de la fonction `index()` dans l'exemple ci-dessus, la fonction `render()` a besoin du fichier **_index.html_** qui devrait être placé dans le dossie **/locallibrary/catalog/templates/**. Dans le cas contraire, cela génère une erreur car le fichier est considéré comme absent.

Vous pouvez en faire l'expérience dès à présent, après avoir redémarré votre serveur local, en accédant à l'URL `127.0.0.1:8000` de votre navigateur. Une page d'erreur explicite s'affiche en indiquant un message du type : "`TemplateDoesNotExist at /catalog/`", ainsi que de nombreux détails sur l'enchaînement des fonctions aboutissant à cette erreur.

> **Note :** En fonction du paramétrage de votre projet - le fichier settings.py de votre projet - Django va chercher pour des gabarits dans différents répertoires et dans ceux de votre application par défaut. Si vous souhaitez approfondir ce sujet vous pouvez consulter la [documentation Django relative aux gabarits](https://docs.djangoproject.com/fr/2.2/topics/templates/).

#### Concevoir les gabarits

Django utilise un langage pour les gabarits qui permet de résoudre certains sujets liés aux pages HTML. En l'occurrence, dans le site web de la bibliothèque nous aurons des bandeaux de navigateur et autres codes d'en-tête à réutiliser. Dans une vision classique, il faudrait récrire dans chaque page le même code pour obtenir le même rendu. Si cela peut se concevoir pour quelques pages, ce procédé devient vite inopérant voire risqué avec un site dynamique complet.

Le langage de gabarit de Django permet de définir un modèle de base puis de l'étendre ensuite. L'extrait de code ci-dessous vient du fichier de gabarit **base_generic.html**, vous constaterez qu'il s'y mélange du code HTML et des sections nommées contenu dans entre des marqueurs `block` et `endblock` qui peut contenir ou non des données.

> **Note :** Les marqueurs de gabarits sont des fonctions que vous pouvez utiliser dans un modèle pour parcourir des listes, effectuer des opérations conditionnelles en fonction de la valeur d'une variable, etc. Outre les balises de modèle, la syntaxe de gabarit vous permet de référencer les variables qui sont transmises au modèle à partir de la vue et d'utiliser des filtres de gabarit pour mettre en forme les variables (par exemple, pour convertir une chaîne en minuscule).

Dans l'extrait ci-dessous vous avec trois sections nommées qui pourront être remplacés par la suite :

- title : qui contiendra le titre (par défaut Bibliothèque locale)
- sidebar : une barre de navigation latérale à gauche
- content : le contenu de la page

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  {% block title %}<title>Bibliothèque locale</title>{% endblock %}
</head>
<body>
  {% block sidebar %}<!-- insert default navigation text for every page -->{% endblock %}
  {% block content %}<!-- default content text (typically empty) -->{% endblock %}
</body>
</html>
```

Lorsque l'on définit un gabarit pour une vue particulière, il convient de définir une base de gabarit et d'utiliser la balise `extends` dans une page complémentaire comme dans l'exemple ci-dessous. Ensuite, il est nécessaire de préciser les sections qui seront modifiées en utilisant les balises `block`/`endblock` qui définissent le début et la fin de section.

À titre indicatif, l'extrait ci-dessous présente la manière d'activer à l'aide de la balise `extends` le remplacement de la section `content`. La page HTML générée inclura la structure de la page définie plus haut et le code généré à la fois pour la section `title`, mais avec les éléments nouveaux, ci-dessous, pour la section `content`.

```html
{% extends "base_generic.html" %}

{% block content %}
  <h1>Accueil de la bibliothèque locale</h1>
  <p>Bienvenue sur la bibliothèque locale, un site web développé par <em>Mozilla Developer Network</em>!</p>
{% endblock %}
```

#### Le gabarit de base de la bibliothèque

Nous allons nous appuyer sur le gabarit ci-dessous pour construire la page de base de la bibliothèque locale. Vous le constatez, il contient des éléments HTML et des blocs dédiés Django pour spécifier trois sections `title`, `sidebar`, et `content`. La section `title` contient un titre par défaut. De même la section `sidebar` contient un lien vers la liste des livres et des auteurs qui pourra être modifié ensuite.

> **Note :** Il y a aussi deux balises supplémentaires : `url` et `load static`. Elles seront étudiées dans le chapitre suivant.

Créez un nouveau fichier nommé **_base_generic.html_** dans le dossier **/locallibrary/catalog/templates/** (à créer aussi) et copiez-y le texte ci-dessous :

```html
<!DOCTYPE html>
<html lang="en">
<head>
  {% block title %}<title>Bibliothèque locale</title>{% endblock %}
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
  <!-- Add additional CSS in static file -->
  {% load static %}
  <link rel="stylesheet" href="{% static 'css/styles.css' %}">
</head>
<body>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-2">
          {% block sidebar %}
           <ul class="sidebar-nav">
               <li><a href="{% url 'index' %}">Home</a></li>
               <li><a href="">Tous les livres</a></li>
               <li><a href="">Tous les auteurs</a></li>
           </ul>
          {% endblock %}
      </div>
         <div class="col-sm-10 ">
             {% block content %}
             {% endblock %}
         </div>
    </div>
  </div>
</body>
</html>
```

Ce gabarit fait appel - _en ligne 7_ - à la bibliothèque de style [Bootstrap](http://getbootstrap.com/) afin d'améliorer la présentation de la page. L'utilisation de Bootstrap (ou de tout autre cadriciel pour les pages web) est un moyen rapide de créer des pages bien organisées et qui s'affiche très bien sur les différents navigateurs.

De même, ce gabarit fait appel à une feuille de style - _en ligne 10_ - locale pour ajouter ou adapter des styles. Créez le fichier **styles.css** dans le répertoire **/locallibrary/catalog/static/css/** (à créer aussi) et copiez le contenu ci-dessous :

```css
.sidebar-nav {
    margin-top: 20px;
    padding: 0;
    list-style: none;
}
```

#### La page d'accueil

Maintenant créez le fichier HTML **_index.html_** dans le dossier **/locallibrary/catalog/templates/** et copiez-y le code ci-dessous. Ce code étend le template de base sur la première ligne et remplace le bloc par défaut `content` pour le template.

```html
{% extends "base_generic.html" %}

{% block content %}
  <h1>Accueil de la bibliothèque locale</h1>
  <p>Bienvenue à la bibliothèque locale, un site web développé par <em>Mozilla Developer Network</em>!</p>
  <h2>Contenu dynamique</h2>
  <p>La bibliothèque dispose des enregistrements suivants:</p>
  <ul>
    <li><strong>Livres:</strong> \{{ num_books }}</li>
    <li><strong>Copies:</strong> \{{ num_instances }}</li>
    <li><strong>Copies disponibles:</strong> \{{ num_instances_available }}</li>
    <li><strong>Auteurs:</strong> \{{ num_authors }}</li>
  </ul>
{% endblock %}
```

Dans la section contenu dynamique, des emplacements réservés sont définis pour pouvoir y insérer le contenu de variable qui sont identifiées à l'intérieur de doubles accolades (ouvrantes et fermantes). Pour une meilleure visibilité ces emplacements et les variables nommées sont identifiées en caractères gras dans l'extrait de code ci-dessus.

> **Note :** Vous pouvez constater simplement que les balises de gabarit (fonctions) et les balises de variables sont entre accolades ; double accolades pour une variable (`\{{ num_books }}`), et simple accolade avec le pourcentage (`{% extends "base_generic.html" %}`) pour les balises.

Gardez en mémoire que les variables utilisées dans les gabarits sont des clés d'un dictionnaire `context` transmis à la fonction `render()` de la vue (revenez à l'exemple plus haut, ou l'extrait ci-dessous). La fonction `render()` traitera le dictionnaire pour restituer une page HTML où les variables nommées auront été remplacées par leur valeur dans le dictionnaire.

```python
context = {
    'num_books': num_books,
    'num_instances': num_instances,
    'num_instances_available': num_instances_available,
    'num_authors': num_authors,
}

return render(request, 'index.html', context=context)
```

#### Traiter les fichiers statiques dans les gabarits

Vos projets utiliseront probablement de fichiers statiques, par exemple des images, des fichiers de styles CSS ou des fonctions JavaScript. L'emplacement de ces fichiers n'est pas connu a priori ou peut changer en fonction de l'emplacement dans un projet Django. Pour cela, Django vous permet de spécifier les emplacements dans les gabarits par rapport à la variable globale du projet `STATIC_URL`. Le paramétrage par défaut du site web définit la variable `STATIC_URL` à '`/static/`', mais vous pouvez choisir de l'héberger ailleurs.

Au sein du gabarit, vous faites appel à la balise `load` en précisant "static" pour faire votre ajout, comme décrits dans l'extrait ci-dessous. Vous utilisez la balise `static` et vous spécifiez ensuite l'URL pour accéder au fichier nécessaire.

```html
<!-- Add additional CSS in static file -->
{% load static %}
<link rel="stylesheet" href="{% static 'css/styles.css' %}">
```

De la même manière, vous pouvez par exemple :

```html
{% load static %}
<img src="{% static 'catalog/images/local_library_model_uml.png' %}" alt="UML diagram" style="width:555px;height:540px;">
```

> **Note :** Les exemples ci-dessus indiquent où se trouvent les fichiers, mais le cadriciel ne travaille pas ainsi par défaut. Nous avons configuré le serveur web de développement en modifiant le routage des URL (**/locallibrary/locallibrary/urls.py**) à [la création du squelette du site](/fr/docs/Learn/Server-side/Django/skeleton_website). Cependant nous devrons travailler plus tard la mise en production.

Pour plus de détails sur les fichiers statiques vous pouvez consulter la documentation Django sur [la gestion des fichiers statiques](https://docs.djangoproject.com/fr/2.2/howto/static-files/).

#### Associer des URL

L'exemple ci-dessous introduit l'utilisation de la balise de gabarit `url`.

```python
<li><a href="{% url 'index' %}">Home</a></li>
```

Cette balise accepte des références enregistrées par la fonction `path()` appelée dans les fichiers **urls.py** ainsi que les valeurs pour chacun des arguments associés à une vue. Elle retourne une URL qui peut être utilisée pour lier une ressource.

#### Où trouver les gabarits...

Par défaut Django ne sait pas où sont vos gabarits, vous devez lui indiquer où les trouver. Pour ce faire, vous allez ajouter le répertoire des gabarits (templates) à la variable d'environnement du projet TEMPLATES en éditant le fichier **settings.py** comme indiqué en gras ci-dessous :

```python
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [
            os.path.join(BASE_DIR, 'templates'),
        ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]
```

## A quoi cela devrait-il ressembler ?

A ce niveau, nous avons créé l'ensemble des ressources nécessaires à l'affichage de la page d'accueil. Démarrez le serveur (`python3 manage.py runserver`) et accédez avec votre navigateur à la page d'accueil du site web <http://127.0.0.1:8000/>. Si tout va bien, vous devriez avoir une page qui ressemble à celle ci-dessous.

![Page d'accueil en Français](index_fr_page_ok.png)

> **Note :** Toutes les ressources n'ayant pas été encore créées les liens vers Tous les livres et Tous les auteurs ne fonctionnent pas encore.

## Défi

Voici deux suggestions pour tester votre connaissance de Django et des requêtes, vues et gabarits :

1.  La bibliothèque locale dispose d'un gabarit d'origine qui inclut une section `title`. Surchargez cette section dans le gabarit index et créer un nouveau titre.

    > **Note :** La section Concevoir un gabarit détaille la manière de modifier une section.

2.  Modifiez la vue pour disposer de décomptes pour les genres et les titres de livre qui contiennent un mot (en repectant la casse) et transmettez cela via le `context.` Pour faire cela utilisez les variables `num_books` et `num_instances_available`. Ensuite vous pourrez mettre à jour le gabarit de la page d'accueil.

## Résumé

Dans ce chapitre, nous avons créé la page d'accueil pour notre site — une page web dynamique qui affiche le décompte d'enregistrements issus de la base de données et des liens vers des pages encire à créer. Au cours des étapes de création, nous avons appris et découvert des concepts fondamentaux à propos du routage d'URL, des vues des requêtes à la base de données et le passage de données vers les gabarits ainsi que leur conception.

Nous allons nous appuyer sur ces éléments pour concevoir dans le prochain chapitre les 4 pages qui manquent.

## À voir aussi

- [Ecrire sa première application Django, 3ème partie](https://docs.djangoproject.com/fr/2.2/intro/tutorial03/) (Django docs)
- [Distribution des URL](https://docs.djangoproject.com/fr/2.2/topics/http/urls/) (Django docs)
- [Ecriture des vues](https://docs.djangoproject.com/fr/2.2/topics/http/views/) (DJango docs)
- [Gabarits](https://docs.djangoproject.com/fr/2.é/topics/templates/) (Django docs)
- [Gestion des fichiers statiques](https://docs.djangoproject.com/fr/2.2/howto/static-files/) (Django docs)
- [Fonctions raccourcis de Django](https://docs.djangoproject.com/fr/2.2/topics/http/shortcuts/#django.shortcuts.render) (Django docs)

{{PreviousMenuNext("Learn/Server-side/Django/Admin_site", "Learn/Server-side/Django/Generic_views", "Learn/Server-side/Django")}}

## Dans ce module

- [Django introduction](/fr/docs/Learn/Server-side/Django/Introduction)
- [Setting up a Django development environment](/fr/docs/Learn/Server-side/Django/development_environment)
- [Django Didactique: Site web "Bibliothèque locale"](/fr/docs/Learn/Server-side/Django/Tutorial_local_library_website)
- [Django didactique Section 2: Créer le squelette du site web](/fr/docs/Learn/Server-side/Django/skeleton_website)
- [Django didactique Section 3: Utilisation des modèles de données](/fr/docs/Learn/Server-side/Django/Models)
- [Django didactique Section 4 : Site d'administration de Django](/fr/docs/Learn/Server-side/Django/Admin_site)
- [Django didactique Section 5: Créer la page d'accueil](/fr/docs/Learn/Server-side/Django/Home_page)
- [Django Tutorial Part 6: Generic list and detail views](/fr/docs/Learn/Server-side/Django/Generic_views)
- [Django Tutorial Part 7: Sessions framework](/fr/docs/Learn/Server-side/Django/Sessions)
- [Django Tutorial Part 8: User authentication and permissions](/fr/docs/Learn/Server-side/Django/Authentication)
- [Django Tutorial Part 9: Working with forms](/fr/docs/Learn/Server-side/Django/Forms)
- [Django Tutorial Part 10: Testing a Django web application](/fr/docs/Learn/Server-side/Django/Testing)
- [Django Tutorial Part 11: Deploying Django to production](/fr/docs/Learn/Server-side/Django/Deployment)
- [Django web application security](/fr/docs/Learn/Server-side/Django/web_application_security)
- [DIY Django mini blog](/fr/docs/Learn/Server-side/Django/django_assessment_blog)
