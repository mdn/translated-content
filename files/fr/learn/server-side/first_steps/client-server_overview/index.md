---
title: La relation Client-Serveur
slug: Learn/Server-side/First_steps/Client-Server_overview
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/First_steps/Introduction", "Learn/Server-side/First_steps/Web_frameworks", "Learn/Server-side/First_steps")}}

Maintenant que vous connaissez le but et le bénéfice de la programmation côté serveur, nous allons analyser en détails ce qui se passe quand un serveur reçoit une requête dynamique de la part d'un navigateur. Comme la plupart des sites gèrent le code côté serveur (requêtes et réponses) de la même manière, cela vous aidera à comprendre ce que vous devrez faire ensuite en écrivant votre propre code.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis :</th>
      <td>
        Compréhension basique des notions informatiques et de ce qu'est un
        serveur web.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif :</th>
      <td>
        Comprendre les interactions client-serveur sur un site dynamique et
        particulièrement quelles opérations devront être effectuées par le code
        côté serveur.
      </td>
    </tr>
  </tbody>
</table>

Il n'y a pas de code "réel" dans la suite de cette présentation parce que nous n'avons pas encore choisi un framework web à utiliser pour écrire notre code ! Ce tutoriel est quand même trés pertinent car les comportements décrits doivent être implémentés par votre code côté serveur, sans qu'il ait à se soucier (le serveur...) de quel langage de programmation ou framework vous vous servez.

## Serveurs Web et HTTP (un avant-goût)

Les navigateurs web communiquent avec les serveurs web avec le protocole [HTTP](/fr/docs/Web/HTTP) **: H**yper**T**ext**T**ransfer **P**rotocol. Quand vous cliquez un lien sur une page, soumettez un formulaire ou lancez une recherche, le navigateur envoie une requête HTTP (_HTTP Request)_ au serveur.

Cette requête inclut&nbsp;:

- Une URL identifiant la cible et la ressource (un fichier HTML, un point particulier de données sur le serveur ou un outil à lancer).
- Une méthode qui définit l'action requise ( par exemple récupérer un fichier ou sauvegarder certaines données ou mises à jour). Les différentes méthodes/verbes et les actions associées sont listées ci-dessous :

  - `GET`: Récupérer une ressource spécifique, par exemple un fichier html contenant des informations sur un produit ou une liste de produits.
  - `POST`: Crée une ressource comme un nouvel article dans un wiki, ajouter un contact dans une base de données, enregistrer les données d'un formulaire d'inscription...
  - `HEAD`: Récupérer les informations "metadata" d'une ressource spécifique sans le "body" comme ferait GET. Vous pouvez utiliser une requête HEAD pour, par exemple, la date de dernière mise à jour d'une ressource puis, utiliser GET (plus "coûteuse") seulement si la ressource a été changée.
  - `PUT`: Met à jour une ressource existante ou en crée une si elle n'existe pas.
  - `DELETE`: Supprime la ressource spécifiée.
  - `TRACE`, `OPTIONS`, `CONNECT`, `PATCH`: ces verbes sont utilisés pour des tâches moins communes ou plus avancées nous ne les couvrirons donc pas ici.

- Des informations complémentaires peuvent être encodées avec la requête (des données de formulaire HTML par exemple). Ces informations peuvent être encodées comme :

  - Paramètres URL : les requêtes `GET` encodent les données dans l'URL envoyée au serveur en ajoutant des paires nom/valeur en fin de celle-ci. Exemple : `http://mysite.com?name=Fred&age=11`. Il y a toujours un point d'interrogation (`?`) séparant le début de l'URL des paramètres passés. Ainsi qu'un signe égal (`=`) séparant le nom de la valeur associée et une esperluette (`&`) séparant chaque paire. Les paramètres URL ne sont pas sécurisés car ils peuvent être changés et soumis une deuxième fois par l'utilisateur. Pour cette raison, les requêtes URL paramètres/`GET` requests ne sont pas utilisées pour des requêtes mettant à jour des données sur un serveur.

- `POST` data. Les requêtes `POST` ajoutent de nouvelles ressources dont les données sont encodées dans le corps de la requête.
- Cookies côté Client. Contient les données de session du client, incluant les clés dont peut se servir le serveur pour déterminer le statut de login et les accés/permissions aux ressources.

Les serveurs Web attendent une requête du client puis la traitent quand elle arrive. Il répond ensuite au navigateur avec un message HTTP Response. La réponse contient un statut [HTTP Response](/fr/docs/Web/HTTP/Status) indiquant si, oui ou non, la requête a abouti. (ex : "`200 OK`" pour un succés, "`404 Not Found`" si la ressource ne peut être trouvée, "`403 Forbidden`" si l'utilisateur n'est pas autorisé à voir la ressource etc. Le corps d'une réponse aboutie à une requête `GET` contiendrait la ressource demandée.

Quand une page HTML est retournée, elle est affichée par le navigateur. Le navigateur, nativement, pourra découvrir des liens vers d'autres ressources (ex : une page HTML intégre habituellement des pages JavaScript et CSS ), et enverra des requêtes séparées pour télécharger ces fichiers.

Les sites web dynamiques ou statiques (voir sections suivantes) utilisent les mêmes protocoles/modèles de communication.

### Exemple de requête/réponse GET

Vous faites une simple requête `GET` en cliquant sur un lien ou en faisant une recherche sur un site (sur une page de moteur de recherche par exemple). Une requête HTTP envoyée lorsque vous effectuez une recherche sur MDN pour les termes : "La relation Client-Serveur" ressemblera beaucoup à ce qui suit mais ne sera pas identique car des parties du message dépendent des paramètres de votre navigateur.

> **Note :** Le format des messsages HTTP est défini par un standard web ([RFC7230](http://www.rfc-editor.org/rfc/rfc7230.txt)). Vous n'avez pas besoin de connaître ce niveau de détails mais vous saurez au moins d'où vient tout ça !

#### La requête

Chaque ligne de la requête contient des informations sur celle-ci. La première partie est appelée l'en-tête ( **header**) et contient beaucoup de données utiles. De la même manière qu'un [HTML head](/fr/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML) contient des informations utiles (pas le contenu réel qui lui, se trouve dans le corps (body) :

```
GET https://developer.mozilla.org/en-US/search?q=la+relation+Client+-+serveur&topic=apps&topic=html&topic=css&topic=js&topic=api&topic=webdev HTTP/1.1
Host: developer.mozilla.org
Connection: keep-alive
Pragma: no-cache
Cache-Control: no-cache
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
Referer: https://developer.mozilla.org/en-US/
Accept-Encoding: gzip, deflate, sdch, br
Accept-Charset: ISO-8859-1,UTF-8;q=0.7,*;q=0.7
Accept-Language: en-US,en;q=0.8,es;q=0.6
Cookie: sessionid=6ynxs23n521lu21b1t136rhbv7ezngie; csrftoken=zIPUJsAZv6pcgCBJSCj1zU6pQZbfMUAT; dwf_section_edit=False; dwf_sg_task_completion=False; _gat=1; _ga=GA1.2.1688886003.1471911953; ffo=true
```

Les premières et secondes lignes contiennent la plupart des données déjà évoquées précédemment :

- Le type de la requête (`GET`).
- La cible de la ressource URL (`/en-US/search`).
- Les paramètres URL (`q=La%2relation%2Client%2-%2Bserveur&topic=apps&topic=html&topic=css&topic=js&topic=api&topic=webdev`).
- Le site web cible/hôte (developer.mozilla.org).
- La fin de la première ligne inclut aussi une petite chaîne identifiant la version spécifique du protocole (`HTTP/1.1`).

La dernière ligne contient des données sur les cookies côté client — vous observerez que dans ce cas, le cookie a une id pour gérer la session : (`Cookie: sessionid=6ynxs23n521lu21b1t136rhbv7ezngie; ...`).

Les lignes restantes concernent le navigateur utilisé et les sortes de réponses qu'il peut accepter. Par exemple, vous pouvez voir ceci :

- Mon navigateur (`User-Agent`) est Mozilla Firefox (`Mozilla/5.0`).
- Il accepte les données compressées (`Accept-Encoding: gzip`).
- Il accepte les familles de caractères suivantes : (`Accept-Charset: ISO-8859-1,UTF-8;q=0.7,*;q=0.7`) et pour les langages : (`Accept-Language: de,en;q=0.7,en-us;q=0.3`).
- La ligne `Referer` indique l'adresse de la page web qui contenait le lien vers cette ressource (Par ex. l'origine de la requête : `https://developer.mozilla.org/en-US/`).

Les requêtes HTTP peuvent aussi avoir un corps mais dans ce cas précis, il est vide.

#### La réponse

La première partie de la réponse à cette requête est détaillée ci-dessous. L'en-tête contient les données suivantes :

- La première ligne embarque le code `200 OK`, qui nous dit que la requête a abouti.
- Nous pouvons voir que la réponse est formatée en `text/html` (`Content-Type`).
- On remarque qu'elle utilise l'ensemble des caractères UTF-8 (`Content-Type: text/html; charset=utf-8`).
- L'en-tête indique aussi la taille (`Content-Length: 41823`).

À la fin du message nous avons le contenu du corps — lequel contient le "vrai" HTML demandé par la requête.

```http
HTTP/1.1 200 OK
Server: Apache
X-Backend-Server: developer1.webapp.scl3.mozilla.com
Vary: Accept,Cookie, Accept-Encoding
Content-Type: text/html; charset=utf-8
Date: Wed, 07 Sep 2016 00:11:31 GMT
Keep-Alive: timeout=5, max=999
Connection: Keep-Alive
X-Frame-Options: DENY
Allow: GET
X-Cache-Info: caching
Content-Length: 41823

```

```html
<!doctype html>
<html
  lang="en-US"
  dir="ltr"
  class="redesign no-js"
  data-ffo-opensanslight="false"
  data-ffo-opensans="false">
  <head prefix="og: http://ogp.me/ns#">
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
    <script>
      (function (d) {
        d.className = d.className.replace(/\bno-js/, "");
      })(document.documentElement);
    </script>
    ...
  </head>
</html>
```

Le reste de l'en-tête de la réponse contient des informations sur la réponse elle-même (quand elle a été générée), sur le serveur et comment le navigateur doit gérer la page ( `X-Frame-Options: DENY` cette ligne dit au navigateur de ne pas autoriser cette page a être intégrée dans une {{htmlelement("iframe")}} dans un autre site).

### Exemple de requête/réponse POST

Un `POST` HTTP est effectué lorsque vous soumettez un formulaire contenant des données à sauvegarder sur le serveur.

#### La requête

Le texte ci-dessous montre une requête HTTP faite quand un utlisateur soumet un nouveaux profil sur ce site. Le format de la requête est presque le même que celui de la requête `GET` vue précédemment, bien que la première ligne identifie cette requête comme un `POST`.

```http
POST https://developer.mozilla.org/en-US/profiles/hamishwillee/edit HTTP/1.1
Host: developer.mozilla.org
Connection: keep-alive
Content-Length: 432
Pragma: no-cache
Cache-Control: no-cache
Origin: https://developer.mozilla.org
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36
Content-Type: application/x-www-form-urlencoded
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
Referer: https://developer.mozilla.org/en-US/profiles/hamishwillee/edit
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.8,es;q=0.6
Cookie: sessionid=6ynxs23n521lu21b1t136rhbv7ezngie; _gat=1; csrftoken=zIPUJsAZv6pcgCBJSCj1zU6pQZbfMUAT; dwf_section_edit=False; dwf_sg_task_completion=False; _ga=GA1.2.1688886003.1471911953; ffo=true

csrfmiddlewaretoken=zIPUJsAZv6pcgCBJSCj1zU6pQZbfMUAT&user-username=hamishwillee&user-fullname=Hamish+Willee&user-title=&user-organization=&user-location=Australia&user-locale=en-US&user-timezone=Australia%2FMelbourne&user-irc_nickname=&user-interests=&user-expertise=&user-twitter_url=&user-stackoverflow_url=&user-linkedin_url=&user-mozillians_url=&user-facebook_url=
```

La principale différence est que l'URL ne comporte pas de paramètres. Comme vous voyez, l'information du formulaire est encodée dans le corps de la requête (par exemple : le nom complet du nouvel utilisateur est paramétré avec `&user-fullname=Hamish+Willee`).

#### La réponse

La réponse à la requête est expliquée dessous. Le statut "`302 Found`" dit au navigateur que le post a abouti et qu'il peut délivrer une deuxième requête HTTP pour charger la page spécifiée dans le champ `Location`. L'information est donc en cela similaire à une réponse de requête `GET`.

```http
HTTP/1.1 302 FOUND
Server: Apache
X-Backend-Server: developer3.webapp.scl3.mozilla.com
Vary: Cookie
Vary: Accept-Encoding
Content-Type: text/html; charset=utf-8
Date: Wed, 07 Sep 2016 00:38:13 GMT
Location: https://developer.mozilla.org/en-US/profiles/hamishwillee
Keep-Alive: timeout=5, max=1000
Connection: Keep-Alive
X-Frame-Options: DENY
X-Cache-Info: not cacheable; request wasn't a GET or HEAD
Content-Length: 0
```

> **Note :** Les requêtes et réponses montrées dans ces exemples ont été capturées avec l'application [Fiddler](https://www.telerik.com/download/fiddler) , mais vous pouvez avoir des informations similaires en utilisant des "renifleurs" web (e.g. [Websniffer](http://websniffer.cc/), [Wireshark](https://www.wireshark.org/)) ou des extensions de navigateur comme [HttpFox](https://addons.mozilla.org/en-US/firefox/addon/httpfox/). Vous pouvez essayer seul. Utilisez tous les outils recommandés, naviguez sur des sites et éditez des profils de données pour explorer les différentes requêtes et réponses. La plupart des navigateurs modernes ont aussi des outils qui gérent les requêtes réseau, par exemple le [Network Monitor](/fr/docs/Tools/Network_Monitor) dans Firefox).

## Les sites statiques

Un site statique renvoie le même contenu codé en dur depuis le serveur quelle que soit la ressource demandée. Si vous avez une page concernant un produit à l'adresse `/static/myproduct1.html`, cette même page sera retournée à chaque utilisateur. Si vous ajoutez un nouveau produit, vous devez ajouter une nouvelle page (par ex : `myproduct2.html`) et ainsi de suite. Cela peut être vraiment inefficace — Comment faire quand vous avez des milliers de pages "produit" à faire ? Vous allez répéter beaucoup de code identique dans chaque page (le modèle de base de la page, sa structure, etc.) et si vous voulez changer quoique ce soit dans la structure de la page — comme une section "produits dérivés" par exemple — alors, il faudra changer chaque page individuellement..

> **Note :** Les sites statiques sont trés efficace quand vous avez un petit nombre de pages et que vous voulez envoyer le même contenu à chaque utilisateur. De toutes façons, ils peuvent avoir un coût certain de maintenance au fur et à mesure de l'augmentation du nombre de pages.

Voyons comment tout cela marche en révisant un diagramme d'architecture de site statique vu dans l'article précédent.

![A simplified diagram of a static web server.](Basic%20Static%20App%20Server.png)

Quand un utilisateur veut naviguer jusqu'à une page, le navigateur envoie une requête HTTP `GET` spécifiant l'URL de sa page HTML. Le serveur retourne le document demandé depuis son système de fichiers et retourne une réponse HTTP contenant le document et un [HTTP Response status code](/fr/docs/Web/HTTP/Status) ( statut codé de la réponse HTTP) qui est "`200 OK`" (indiquant le succés de l'opération). Le serveur peut retourner un statut différent, par exemple "`404 Not Found`" si le fichier est absent sur le serveur , ou bien "`301 Moved Permanently`" si le fichier existe mais a été déplacé vers une nouvelle localisation.

Le serveur d'un site statique n'aura à faire face qu'à des requêtes GET vu qu'il ne stocke aucune donnée modifiable. Il ne change pas non plus ses réponses basées sur les données des requêtes HTTP (c'est à dire les paramètres URL ou les cookies).

Comprendre comment fonctionnent les sites statiques est sans aucun doute trés utile à l'apprentissage de la programmation côté serveur car les sites dynamiques gèrent les requêtes pour les fichiers statiques (CSS, JavaScript, images statiques , etc.) exactement de la même manière.

## Les sites dynamiques

Un site dynamique peut générer et retourner du contenu basé sur une requête URL spécifique et les données (plutôt que de toujours renvoyer le même fichier codé en dur à une URL particulière). Toujours avec l'exemple d'un site "produits", le serveur stockera les données du produit dans une base de données plutôt que dans un fichier HTML individuel. Quand il reçoit une requête HTTP `GET` pour un produit, le serveur détermine l'ID du produit, va chercher les données dans la base de données puis construit la page HTML pour la réponse en intégrant les données dans un gabarit (template) HTML. C'est un avantage indéniable sur un site statique :

Utiliser une base de données permet à l'information "produit" d'être stockée efficacement, en étant modifiable, extensible et bien indexée.

Employer des gabarits HTML facilite la façon de changer la structure HTML parce que c'est fait en un seul endroit, dans un seul gabarit (template) et non pas sur potentiellement des milliers de pages statiques.

### Anatomie d'un requête dynamique

Cette section présente une vue d'ensemble du cycle dynamique HTTP de requête/réponse, construit avec ce que nous avons vu précédemment avec de plus amples détails. Toujours dans l'optique de "faire les choses en réel" nous utiliserons le contexte du site d'une équipe de sport où l'entraîneur peut sélectionner le nom de l'équipe et le nombre de joueurs dans un formulaire HTML et avoir en retour une suggestion "Meilleure composition" pour le prochain match.

Le diagramme ci-dessous montre les principaux éléments du site Web "entraîneur d'équipe", ainsi que des étiquettes numérotées pour la séquence des opérations lorsque l'entraîneur accède à la liste "meilleure équipe". Les parties du site qui le rendent dynamique sont l'application Web (c'est ainsi que nous nous référerons au code côté serveur qui traite les requêtes HTTP et renvoie les réponses HTTP), la base de données, qui contient des informations sur les joueurs, les équipes, les entraîneurs et leurs partenaires. relations, et les modèles HTML.

![This is a diagram of a simple web server with step numbers for each of step of the client-server interaction.](Web%20Application%20with%20HTML%20and%20Steps.png)

Une fois que l'entraîneur a soumis le formulaire avec le nom de l'équipe et le nombre de joueurs, la séquence des opérations est la suivante:

1. Le navigateur Web crée une requête HTTP GET au serveur en utilisant l'URL de base de la ressource (/ best) et en codant l'équipe et le numéro du joueur sous forme de paramètres d'URL (par exemple / best? team=my_team_name\&show = 11) ou dans le cadre de l'URL modèle (par exemple / best / my_team_name / 11 /). Une requête GET est utilisée car la requête extrait uniquement des données (sans les modifier).
2. Le serveur Web détecte que la demande est "dynamique" et la transmet à l'application Web pour traitement (le serveur Web détermine comment gérer différentes URL en fonction des règles de correspondance de modèle définies dans sa configuration).
3. L'application Web identifie l'objectif de la demande d'obtenir la "meilleure liste d'équipes" en fonction de l'URL (/ best /) et recherche le nom d'équipe requis et le nombre de joueurs à partir de l'URL. L'application Web obtient alors les informations requises de la base de données (en utilisant des paramètres "internes" supplémentaires pour définir quels joueurs sont les "meilleurs", et éventuellement en obtenant également l'identité de l'entraîneur connecté à partir d'un cookie côté client).
4. L'application Web crée dynamiquement une page HTML en plaçant les données (de la base de données) dans des espaces réservés dans un modèle HTML.
5. L'application Web renvoie le code HTML généré au navigateur Web (via le serveur Web), ainsi qu'un code d'état HTTP de 200 ("success"). Si quoi que ce soit empêche le code HTML d'être renvoyé, l'application Web renvoie un autre code, par exemple "404" pour indiquer que l'équipe n'existe pas.
6. Le navigateur Web commence alors à traiter le code HTML renvoyé, en envoyant des demandes distinctes pour obtenir tous les fichiers CSS ou JavaScript qu'il référence (voir étape 7).
7. Le serveur Web charge les fichiers statiques à partir du système de fichiers et les renvoie directement au navigateur (là encore, le traitement correct des fichiers est basé sur les règles de configuration et la correspondance des types d'URL).

Une opération de mise à jour d'un enregistrement dans la base de données serait gérée de la même manière, sauf que, comme toute mise à jour de base de données, la demande HTTP du navigateur devrait être codée en tant que demande POST.

### Que faire d'autre?

Le travail d'une application Web consiste à recevoir des requêtes HTTP et à renvoyer des réponses HTTP. Bien que l'interaction avec une base de données pour obtenir ou mettre à jour des informations soit une tâche très courante, le code peut faire d'autres choses en même temps, ou ne pas interagir du tout avec une base de données.Un bon exemple de tâche supplémentaire qu'une application Web pourrait exécuter serait l'envoi d'un courrier électronique aux utilisateurs pour confirmer leur inscription sur le site. Le site peut également effectuer une journalisation ou d'autres opérations.

### Renvoyer autre chose que du HTML

Le code de site Web côté serveur ne doit pas nécessairement renvoyer des extraits / fichiers HTML dans la réponse. Au lieu de cela, il peut créer et renvoyer de manière dynamique d'autres types de fichiers (texte, PDF, CSV, etc.) ou même des données (JSON, XML, etc.).L'idée de renvoyer des données à un navigateur Web afin qu'il puisse mettre à jour de manière dynamique son propre contenu ({{glossary ("AJAX")}}) existe depuis un certain temps. Plus récemment, les "applications à page unique" sont devenues populaires, le site Web entier étant écrit avec un seul fichier HTML mis à jour de manière dynamique en cas de besoin. Les sites Web créés à l'aide de ce style d'application génèrent des coûts de calcul considérables entre le serveur et le navigateur Web, ce qui peut donner l'impression que les sites Web se comportent beaucoup plus comme des applications natives (très réactives, etc.).

## Les frameworks Web simplifient la programmation Web côté serveur

Les infrastructures Web côté serveur facilitent beaucoup la rédaction de code permettant de gérer les opérations décrites ci-dessus.L'une des opérations les plus importantes qu'ils effectuent consiste à fournir des mécanismes simples pour mapper les URL de différentes ressources / pages à des fonctions de gestionnaire spécifiques. Cela facilite la séparation du code associé à chaque type de ressource. Cela présente également des avantages en termes de maintenance, car vous pouvez modifier l'URL utilisée pour fournir une fonctionnalité particulière à un endroit, sans avoir à changer la fonction de gestionnaire.Par exemple, considérons le code Django (Python) suivant qui mappe deux modèles d'URL à deux fonctions d'affichage. Le premier modèle garantit qu'une requête HTTP avec une URL de ressource / best sera transmise à une fonction nommée index () dans le module views. Une demande qui a pour motif "/ best / junior" sera plutôt transmise à la fonction d'affichage junior ().

```python
# file: best/urls.py
#

from django.conf.urls import url

from . import views

urlpatterns = [
    # example: /best/
    url(r'^$', views.index),
    # example: /best/junior/
    url(r'^junior/$', views.junior),
]
```

> **Note :** Les premiers paramètres des fonctions url () peuvent paraître un peu bizarres (par exemple, r '^ junior / $') car ils utilisent une technique de correspondance de modèle appelée "expressions régulières" (RegEx ou RE). Vous n'avez pas besoin de savoir comment fonctionnent les expressions régulières à ce stade, car elles nous permettent également de faire correspondre les modèles de l'URL (plutôt que les valeurs codées en dur ci-dessus) et de les utiliser comme paramètres dans nos fonctions d'affichage. À titre d'exemple, un RegEx très simple pourrait dire "faire correspondre une seule lettre majuscule, suivie de 4 à 7 lettres minuscules".

L'infrastructure Web permet également à une fonction d'affichage d'extraire facilement des informations de la base de données. La structure de nos données est définie dans des modèles, qui sont des classes Python qui définissent les champs à stocker dans la base de données sous-jacente. Si nous avons un modèle nommé Team avec un champ "team_type", nous pouvons utiliser une syntaxe de requête simple pour récupérer toutes les équipes ayant un type particulier.L'exemple ci-dessous donne la liste de toutes les équipes ayant le type d'équipe exact (sensible à la casse) de "junior" - notez le format: nom du champ (team_type) suivi du double underscore, puis du type de match à utiliser (ici nous utilisons: exact). ). Il existe de nombreux autres types de match et nous pouvons les enchaîner. Nous pouvons également contrôler l'ordre et le nombre de résultats retournés.

```python
#best/views.py

from django.shortcuts import render

from .models import Team


def junior(request):
    list_teams = Team.objects.filter(team_type__exact="junior")
    context = {'list': list_teams}
    return render(request, 'best/index.html', context)
```

Une fois que la fonction junior () a obtenu la liste des équipes juniors, elle appelle la fonction render () en transmettant la requête HttpRequest d'origine, un modèle HTML et un objet "context" définissant les informations à inclure dans le modèle. La fonction render () est une fonction pratique qui génère du HTML à l'aide d'un context et d'un template HTML, puis le renvoie dans un objet HttpResponse.De toute évidence, les frameworks Web peuvent vous aider dans de nombreuses autres tâches. Nous discutons beaucoup plus d'avantages et de choix de frameworks Web populaires dans le prochain article.

## Summary

À ce stade, vous devez avoir une bonne vue d'ensemble des opérations que le code côté serveur doit effectuer et connaître certaines des manières dont une infrastructure Web côté serveur peut faciliter cela.

Dans un module suivant, nous vous aiderons à choisir le meilleur framework Web pour votre premier site.

{{PreviousMenuNext("Learn/Server-side/First_steps/Introduction", "Learn/Server-side/First_steps/Web_frameworks", "Learn/Server-side/First_steps")}}
