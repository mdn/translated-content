---
title: Les frameworks web côté serveur
slug: Learn/Server-side/First_steps/Web_frameworks
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/First_steps/Client-Server_overview", "Learn/Server-side/First_steps/Website_security", "Learn/Server-side/First_steps")}}

L'article précédent nous a montré à quoi ressemble la communication entre les clients et les serveurs web, la nature des demandes et des réponses HTTP et ce qu'une application web côté serveur doit faire pour répondre aux demandes d'un navigateur web. Avec ces connaissances en main, il est temps d'explorer comment les frameworks peuvent nous simplifier la tâche. En chemin, vous comprendrez comment choisir le framework le mieux adapté pour votre première application web côté serveur.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis :</th>
      <td>Connaissance informatique de base.</td>
    </tr>
    <tr>
      <th scope="row">Objectif :</th>
      <td>
        Comprendre comment les frameworks simplifient le développement/la
        maintenance du code côté serveur et vous faire réfléchir à propos de la
        sélection d'un framework pour votre propre développement.
      </td>
    </tr>
  </tbody>
</table>

Les sections suivantes proposent des illustrations avec des fragments de codes utilisés par des frameworks réels. Ne soyez pas inquiété si vous ne comprenez pas tout directement. Les explications viendront au fur et à mesure.

## Vue d'ensemble

Les frameworks web côté serveur (c-à-d "web application frameworks") facilitent l'écriture, la maintenance et la mise à l'échelle d'applications web. Ils fournissent des outils et des bibliothèques qui simplifient les tâches courantes de développement web, notamment l'acheminement des URL vers les gestionnaires appropriés, l'interaction avec les bases de données, les sessions et l'autorisation des utilisateurs, le formatage de la sortie (HTML, JSON, XML, par exemple) et l'amélioration de la sécurité contre les attaques web.

Dans la section suivante, nous allons voir un peu plus de détails comment les frameworks facilite le développement d'applications web. Nous verrons alors les critères utilisés pour choisir un framework adapté.

## Que peut faire un framework web pour vous ?

Les frameworks web fournissent des outils et des bibliothèques pour simplifier les opérations de développement web courantes. Utiliser un framework web côté serveur n'est pas obligatoire, mais fortement conseillé... Cela vous facilitera grandement la vie. Cette section présente certaines des fonctionnalités parmi les plus souvent fournies par les frameworks web.

### Travailler directement avec les requêtes et les réponses HTTP

Comme nous l'avons vu dans le dernier article, les serveurs web et les navigateurs communiquent via le protocole HTTP — les serveurs attendent les requêtes HTTP du navigateur, puis renvoient des informations dans les réponses HTTP. Les infrastructures web vous permettent d'écrire une syntaxe simplifiée qui générera un code côté serveur pour travailler avec ces demandes et réponses. Cela signifie que vous aurez un travail plus facile, en interagissant avec un code plus facile, de niveau supérieur, plutôt que des primitives de réseau de niveau inférieur.

L'exemple ci-dessous montre comment cela fonctionne dans le framework web Django (Python). Chaque fonction "view" (un gestionnaire de demandes) reçoit un objet HttpRequest contenant les informations de la demande et doit renvoyer un objet HttpResponse avec la sortie formatée (dans ce cas une chaîne).

```python
# Django view function
from django.http import HttpResponse

def index(request):
    # Get an HttpRequest (request)
    # perform operations using information from the request.
    # Return HttpResponse
    return HttpResponse('Output string to return')
```

### Acheminer les requettes au gestionnaire approprié

La plupart des sites fournissent un certain nombre de ressources différentes, accessibles via des URL distinctes. Il est difficile de gérer toutes ces fonctions en une seule fois. Par conséquent, les infrastructures web fournissent des mécanismes simples pour mapper les modèles d'URL vers des fonctions de gestionnaire spécifiques. Cette approche présente également des avantages en termes de maintenance, car vous pouvez modifier l'URL utilisée pour fournir une fonctionnalité particulière sans avoir à modifier le code sous-jacent.

Différents frameworks utilisent différents mécanismes pour la cartographie. Par exemple, l'infrastructure web Flask (Python) ajoute des itinéraires pour afficher les fonctions à l'aide d'un décorateur.

```python
@app.route("/")
def hello():
    return "Hello World!"
```

Alors que Django attend des développeurs qu'ils définissent une liste de mappages d'URL entre un modèle d'URL et une fonction d'affichage.

```python
urlpatterns = [
    url(r'^$', views.index),
    # example: /best/myteamname/5/
    url(r'^(?P<team_name>\w.+?)/(?P<team_number>[0-9]+)/$', views.best),
]
```

### Faciliter l'accès aux données via la requête

Les données peuvent être encodées dans une requête HTTP de différentes manières. Une demande HTTP GET pour obtenir des fichiers ou des données du serveur peut coder les données requises dans les paramètres d'URL ou dans la structure d'URL. Une demande HTTP POST de mise à jour une ressource sur le serveur inclura plutôt les informations de mise à jour en tant que "données POST" dans le corps de la demande. La requête HTTP peut également inclure des informations sur la session ou l'utilisateur en cours dans un cookie côté client. Les frameworks web fournissent des mécanismes appropriés au langage de programmation pour accéder à ces informations. Par exemple, l'objet HttpRequest que Django transmet à chaque fonction d'affichage contient des méthodes et des propriétés permettant d'accéder à l'URL cible, le type de demande (par exemple, un HTTP GET), les paramètres GET ou POST, les données de cookie et de session, etc. Django peut également transmettre informations codées dans la structure de l'URL en définissant des "modèles de capture" dans le mappeur d'URL (voir le dernier fragment de code dans la section ci-dessus).

### Extraction et simplification de l'accès à la base de données

Les sites web utilisent des bases de données pour stocker des informations à partager avec les utilisateurs et sur les utilisateurs. Les infrastructures web fournissent souvent une couche de base de données qui extrait les opérations de lecture, d'écriture, de requête et de suppression de base de données. Cette couche d'extraction est appelée ORM (Object-Relational Mapper).

L'utilisation d'un ORM présente deux avantages :

1. Vous pouvez remplacer la base de données sous-jacente sans avoir nécessairement besoin de changer le code qui l'utilise. Cela permet aux développeurs d'optimiser les caractéristiques des différentes bases de données en fonction de leur utilisation.
2. La validation de base des données peut être mise en œuvre avec le framework. Il est ainsi plus facile et plus sûr de vérifier que les données sont stockées dans le type de champ de base de données approprié, qu'elles ont le format correct (par exemple une adresse électronique) et qu'elles ne sont en aucun cas malveillantes (les pirates peuvent utiliser certains modèles de code pour agir mal, telles que la suppression des enregistrements de la base de données).

Par exemple, le framework web Django fournit un ORM et fait référence à l'objet utilisé pour définir la structure d'un enregistrement en tant que modèle. Le modèle spécifie les types de champs à stocker, ce qui peut fournir une validation au niveau du champ sur les informations pouvant être stockées (par exemple, un champ de courrier électronique autoriserait uniquement les adresses de courrier électronique valides). Les définitions de champ peuvent également spécifier leur taille maximale, leurs valeurs par défaut, leurs options de liste de sélection, leur aide pour la documentation, leur libellé pour les formulaires, etc. Le modèle ne spécifie aucune information sur la base de données sous-jacente, il s'agit d'un paramètre de configuration susceptible d'être modifié séparément de notre code.

Le premier extrait de code ci-dessous montre un modèle Django très simple pour un objet Team. Ceci stocke le nom et le niveau de l'équipe en tant que champs de caractères et spécifie un nombre maximal de caractères à stocker pour chaque enregistrement. Team_level étant un champ de choix, nous fournissons également un mappage entre les choix à afficher et les données à stocker, ainsi qu'une valeur par défaut.

```python
#best/models.py

from django.db import models

class Team(models.Model):
    team_name = models.CharField(max_length=40)

    TEAM_LEVELS = (
        ('U09', 'Under 09s'),
        ('U10', 'Under 10s'),
        ('U11, 'Under 11s'),
        ...  #list our other teams
    )
    team_level = models.CharField(max_length=3,choices=TEAM_LEVELS,default='U11')
```

Le modèle Django fournit une API de requête simple pour la recherche dans la base de données. Cela peut correspondre à plusieurs champs à la fois en utilisant différents critères (par exemple, exact, insensible à la casse, supérieur à, etc.), et peut prendre en charge des instructions complexes (par exemple, vous pouvez spécifier une recherche sur les équipes U11 ayant un nom d'equipe (team name) qui commence par "Fr" ou se termine par "al").

Le deuxième extrait de code montre une fonction d'affichage (gestionnaire de ressources) permettant d'afficher toutes nos équipes U09. Dans ce cas, nous spécifions que nous voulons filtrer tous les enregistrements où le champ team_level a exactement le texte 'U09' (notez dans l exemple ci dessous comment ce critère est transmis à la fonction filter () sous forme d'argument avec le nom du champ et le type de correspondance séparés par un double. underscores: **`team_level__exact`**).

```python
#best/views.py

from django.shortcuts import render
from .models import Team

def youngest(request):
    list_teams = Team.objects.filter(team_level__exact="U09")
    context = {'youngest_teams': list_teams}
    return render(request, 'best/index.html', context)
```

### Rendering data

Les frameworks web fournissent souvent des systèmes de templates. Ceux-ci vous permettent de spécifier la structure d'un document de sortie, en utilisant des espaces réservés pour les données qui seront ajoutées lors de la génération d'une page. Les modèles sont souvent utilisés pour créer du HTML, mais peuvent également créer d'autres types de documents.

Les frameworks web fournissent souvent un mécanisme facilitant la génération d'autres formats à partir de données stockées, notamment {{glossary ("JSON")}} et {{glossary ("XML")}}.

Par exemple, le système de templates Django vous permet de spécifier des variables en utilisant une syntaxe "double-handlebars" (par exemple, `\{{ variable_name }}`), qui sera remplacée par les valeurs transmises à partir de la fonction d'affichage lors du rendu d'une page. Le système de templates prend également en charge les expressions (avec la syntaxe : `{% expression %}`), qui permettent aux templates d'effectuer des opérations simples, telles que l'itération des valeurs de liste transmises au modèle.

> **Note :** Many other templating systems use a similar syntax, e.g.: Jinja2 (Python), handlebars (JavaScript), moustache (JavaScript), etc.

L'extrait de code ci-dessous montre comment cela fonctionne. En reprenant l'exemple "youngest_teams" de la section précédente, le modèle HTML se voit transmettre par la vue une variable de liste nommée youngest_teams. Dans le squelette HTML, nous avons une expression qui vérifie d'abord si la variable youngest_teams existe, puis itère dans une boucle for. À chaque itération, le modèle affiche la valeur team_name de l'équipe dans un élément de liste.

```django
<!-- best/templates/best/index.html -->

<!doctype html>
<html lang="en">
  <body>
    {% if youngest_teams %}
      <ul>
        {% for team in youngest_teams %}
          <li>\{\{ team.team_name \}\}</li>
        {% endfor %}
      </ul>
    {% else %}
      <p>No teams are available.</p>
    {% endif %}
  </body>
</html>
```

## Comment choisir un framework web

Il existe de nombreux frameworks web pour presque tous les langages de programmation que vous souhaitez utiliser (nous énumérons quelques-uns des frameworks les plus populaires dans la section suivante). Avec autant de choix, il peut devenir difficile de déterminer quel framework constitue le meilleur point de départ pour votre nouvelle application web.

Certains des facteurs qui peuvent affecter votre décision sont les suivants:

- **Effort d'apprentissage**&nbsp;: L'effort d'apprentissage d'un framework web dépend de votre familiarité avec le langage de programmation sous-jacent, de la cohérence de son API, de la qualité de sa documentation ainsi que de la taille et de l'activité de sa communauté. Si vous avez peu d'eqperience en programmation, pensez à Django (l'un des plus faciles à apprendre en fonction des critères ci-dessus). Si vous faites partie d'une équipe de développement qui possède déjà une expérience significative avec un framework web ou un langage de programmation particulier, il est logique de s'en tenir à cela.
- **Productivité**&nbsp;: la productivité mesure la rapidité avec laquelle vous pouvez créer de nouvelles fonctionnalités une fois que vous êtes familiarisé avec le framework. Elle inclut à la fois les efforts d'écriture et de maintenance du code (car vous ne pouvez pas écrire de nouvelles fonctionnalités alors que les anciennes sont endommagées). Un grand nombre des facteurs qui affectent la productivité sont similaires à ceux de "Effort d'apprentissage" - par ex. documentation, communauté, expérience en programmation, etc. - les autres facteurs incluent:

  - _Objectif / origine du framework_&nbsp;: certains frameworks web ont été créés à l'origine pour résoudre certains types de problèmes, et restent meilleurs pour créer des applications web avec des contraintes similaires. Par exemple, Django a été créé pour soutenir le développement d'un site web de journal. Il est donc bon pour les blogs et les autres sites impliquant la publication d'éléments. En revanche, Flask est un cadre beaucoup plus léger et est idéal pour créer des applications web s'exécutant sur des périphériques intégrés.
  - _Populaire vs Impopulaire_: Un framework populaire est un frameqork dans lequel il est recommandé de "meilleures" manières de résoudre un problème particulier. Les frameworks populaire ont tendance à être plus productifs lorsque vous essayez de résoudre des problèmes courants, car ils vous orientent dans la bonne direction, mais ils sont parfois moins flexibles.
  - _Ressource incluses vs. l'obtenir vous-même_&nbsp;: certains frameworks web incluent des outils / bibliothèques qui traitent tous les problèmes que leurs développeurs peuvent penser "par défaut", tandis que des frameworks plus légers attendent des développeurs web qu'ils choisissent la solution aux problèmes de bibliothèques séparées (Django est un exemple inclue " tout " tandis que Flask est un exemple de framework très léger). Les frameworks qui incluent tout sont souvent plus faciles à démarrer car vous avez déjà tout ce dont vous avez besoin, et il est probable qu'il soit bien intégré et bien documenté. Cependant, si une structure plus petite contient tout ce dont vous avez besoin (le cas échéant), elle peut alors s'exécuter dans des environnements plus restreints et disposer d'un sous-ensemble de choses plus petites et plus faciles à apprendre.
  - _Si le framework encourage ou non les bonnes pratiques de développement_&nbsp;: par exemple, un cadre qui encourage une architecture Model-View-Controller où on sépare le code en fonctions logiques engendrera un code plus facile à maintenir qu'un code qui n'a pas d'attente de la part des développeurs. De même, la conception de la structure peut avoir un impact important sur la facilité de test et de réutilisation du code.

- **Performances du framework/langage de programmation**&nbsp;: généralement, la _vitesse_ n'est pas le facteur le plus important dans la sélection car même des exécutions relativement lentes, comme Python, sont plus que _suffisantes_ pour les sites de taille moyenne fonctionnant avec un matériel raisonnablement performant. Les avantages perçus en termes de vitesse par rapport à un autre langage comme C++ ou JavaScript peuvent être compensés par les coûts d'apprentissage et de maintenance.
- **Mise en cache** : la popularité de votre site web grandit, vous constatez peut-être que le serveur ne peut plus gérer toutes les requêtes. À ce stade, vous pouvez envisager d'ajouter un support pour la mise en cache : une optimisation dans laquelle vous stockez tout ou partie de la réponse à une requête web afin qu'il ne soit pas nécessaire de la recalculer la prochaine fois. Retourner la réponse en cache à une requête est beaucoup plus rapide que d'en calculer une. La mise en cache peut être implémentée dans votre code ou sur le serveur (voir proxy inverse). Les infrastructures web auront différents niveaux de prise en charge pour définir le contenu pouvant être mis en cache.
- **Adpatation**&nbsp;: votre site web connaît un succès fantastique, vous avez épuisé les avantages de la mise en cache, vous atteignez même les limites de la mise à l'échelle verticale (exécuter votre application Web sur un matériel plus puissant). À ce stade, il est temps de penser à une mise à l'échelle horizontale (partager la charge en répartissant votre site sur un certain nombre de serveurs web et de bases de données) ou «géographiquement», car certains de vos clients sont très éloignés de votre serveur. L'infrastructure web que vous choisissez peut faire toute la différence en termes de facilité d'adaptation de votre site.
- **Sécurité web**&nbsp;: certains environnements web offrent une meilleure prise en charge de la gestion des attaques web courantes. Django, par exemple, supprime toutes les entrées utilisateur des modèles HTML afin que le code JavaScript saisi par l'utilisateur ne puisse pas être exécuté. D'autres frameworks offrent une protection similaire, mais celle-ci n'est pas toujours activée par défaut.

Il existe de nombreux autres facteurs possibles, y compris les licences, que le cadre soit ou non en cours de développement actif, etc.

Si vous débutez en programmation, vous choisirez probablement un framework facile à prendre en main. Une documentation riche et une communauté active sont également des critères pertinents pour votre choix. Pour la suite de ce cours, nous avons choisi Django (Python) et Express (Node/JavaScript) principalement parce que ces frameworks sont faciles à apprendre et bénéficient d'un bon soutien.

> **Note :** Let's go to the main websites for [Django](https://www.djangoproject.com/) (Python) and [Express](http://expressjs.com/) (Node/JavaScript) and check out their documentation and community.
>
> 1. Navigate to the main sites (linked above)
>
>    - Click on the Documentation menu links (named things like "Documentation, Guide, API Reference, Getting Started".
>    - Can you see topics showing how to set up URL routing, templates, and databases/models?
>    - Are the documents clear?
>
> 2. Navigate to mailing lists for each site (accessible from Community links).
>
>    - How many questions have been posted in the last few days
>    - How many have responses?
>    - Do they have an active community?

## A few good web frameworks?

Let's now move on, and discuss a few specific server-side web frameworks.

The server-side frameworks below represent _a few_ of the most popular available at the time of writing. All of them have everything you need to be productive — they are open source, are under active development, have enthusiastic communities creating documentation and helping users on discussion boards, and are used in large numbers of high-profile websites. There are many other great server-side frameworks that you can discover using a basic internet search.

> **Note :** Descriptions come (partially) from the framework websites!

### Django (Python)

[Django](https://www.djangoproject.com/) is a high-level Python Web framework that encourages rapid development and clean, pragmatic design. Built by experienced developers, it takes care of much of the hassle of web development, so you can focus on writing your app without needing to reinvent the wheel. It's free and open source.

Django follows the "Batteries included" philosophy and provides almost everything most developers might want to do "out of the box". Because everything is included, it all works together, follows consistent design principles, and has extensive and up-to-date documentation. It is also fast, secure, and very scalable. Being based on Python, Django code is easy to read and to maintain.

Popular sites using Django (from Django home page) include: Disqus, Instagram, Knight Foundation, MacArthur Foundation, Mozilla, National Geographic, Open Knowledge Foundation, Pinterest, Open Stack.

### Flask (Python)

[Flask](http://flask.pocoo.org/) is a microframework for Python.

While minimalist, Flask can create serious websites out of the box. It contains a development server and debugger, and includes support for [Jinja2](https://github.com/pallets/jinja) templating, secure cookies, [unit testing](https://en.wikipedia.org/wiki/Unit_testing), and [RESTful](http://www.restapitutorial.com/lessons/restfulresourcenaming.html) request dispatching. It has good documentation and an active community.

Flask has become extremely popular, particularly for developers who need to provide web services on small, resource-constrained systems (e.g. running a web server on a [Raspberry Pi](https://www.raspberrypi.org/), [Drone controllers](http://blogtarkin.com/drone-definitions-learning-the-drone-lingo/), etc.)

### Express (Node.js/JavaScript)

[Express](http://expressjs.com/) is a fast, unopinionated, flexible and minimalist web framework for [Node.js](https://nodejs.org/en/) (node is a browserless environment for running JavaScript). It provides a robust set of features for web and mobile applications and delivers useful HTTP utility methods and [middleware](/fr/docs/Glossary/Middleware).

Express is extremely popular, partially because it eases the migration of client-side JavaScript web programmers into server-side development, and partially because it is resource-efficient (the underlying node environment uses lightweight multitasking within a thread rather than spawning separate processes for every new web request).

Because Express is a minimalist web framework it does not incorporate every component that you might want to use (for example, database access and support for users and sessions are provided through independent libraries). There are many excellent independent components, but sometimes it can be hard to work out which is the best for a particular purpose!

Many popular server-side and full stack frameworks (comprising both server and client-side frameworks) are based on Express, including [Feathers](http://feathersjs.com/), [ItemsAPI](https://www.itemsapi.com/), [KeystoneJS](http://keystonejs.com/), [Kraken](http://krakenjs.com/), [LoopBack](http://loopback.io/), [MEAN](http://mean.io/), and [Sails](http://sailsjs.org/).

A lot of high profile companies use Express, including: Uber, Accenture, IBM, etc. (a list is provided [here](http://expressjs.com/en/resources/companies-using-express.html)).

### Ruby on Rails (Ruby)

[Rails](http://rubyonrails.org/) (usually referred to as "Ruby on Rails") is a web framework written for the Ruby programming language.

Rails follows a very similar design philosophy to Django. Like Django it provides standard mechanisms for routing URLs, accessing data from a database, generating HTML from templates and formatting data as {{glossary("JSON")}} or {{glossary("XML")}}. It similarly encourages the use of design patterns like DRY ("dont repeat yourself" — write code only once if at all possible), MVC (model-view-controller) and a number of others.

There are of course many differences due to specific design decisions and the nature of the languages.

Rails has been used for high profile sites, including: [Basecamp](https://basecamp.com/), [GitHub](https://github.com/), [Shopify](https://shopify.com/), [Airbnb](https://airbnb.com/), [Twitch](https://twitch.tv/), [SoundCloud](https://soundcloud.com/), [Hulu](https://hulu.com/), [Zendesk](https://zendesk.com/), [Square](https://square.com/), [Highrise](https://highrisehq.com/).

### Laravel (PHP)

[Laravel](https://laravel.com/) is a web application framework with expressive, elegant syntax. Laravel attempts to take the pain out of development by easing common tasks used in the majority of web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, yet powerful, providing tools needed for large, robust applications.

### ASP.NET

[ASP.NET](http://www.asp.net/) is an open source web framework developed by Microsoft for building modern web applications and services. With ASP.NET you can quickly create web sites based on HTML, CSS, and JavaScript, scale them for use by millions of users and easily add more complex capabilities like Web APIs, forms over data, or real time communications.

One of the differentiators for ASP.NET is that it is built on the [Common Language Runtime](https://en.wikipedia.org/wiki/Common_Language_Runtime) (CLR), allowing programmers to write ASP.NET code using any supported .NET language (C#, Visual Basic, etc.). Like many Microsoft products it benefits from excellent tools (often free), an active developer community, and well-written documentation.

ASP.NET is used by Microsoft, Xbox.com, Stack Overflow, and many others.

### Mojolicious (Perl)

[Mojolicious](http://mojolicious.org/) is a next generation web framework for the Perl programming language.

Back in the early days of the web, many people learned Perl because of a wonderful Perl library called [CGI](https://metacpan.org/module/CGI). It was simple enough to get started without knowing much about the language and powerful enough to keep you going. Mojolicious implements this idea using bleeding edge technologies.

Some of the features provided by Mojolicious are: **Real-time web framework**, to easily grow single file prototypes into well-structured MVC web applications; RESTful routes, plugins, commands, Perl-ish templates, content negotiation, session management, form validation, testing framework, static file server, CGI/[PSGI](http://plackperl.org) detection, first class Unicode support; Full stack HTTP and WebSocket client/server implementation with IPv6, TLS, SNI, IDNA, HTTP/SOCKS5 proxy, UNIX domain socket, Comet (long polling), keep-alive, connection pooling, timeout, cookie, multipart and gzip compression support; JSON and HTML/XML parsers and generators with CSS selector support; Very clean, portable and object-oriented pure-Perl API with no hidden magic; Fresh code based upon years of experience, free and open source.

## Summary

This article has shown that web frameworks can make it easier to develop and maintain server-side code. It has also provided a high level overview of a few popular frameworks, and discussed criteria for choosing a web application framework. You should now have at least an idea of how to choose a web framework for your own server-side development. If not, then don't worry — later on in the course we'll give you detailed tutorials on Django and Express to give you some experience of actually working with a web framework.

For the next article in this module we'll change direction slightly and consider web security.

{{PreviousMenuNext("Learn/Server-side/First_steps/Client-Server_overview", "Learn/Server-side/First_steps/Website_security", "Learn/Server-side/First_steps")}}
