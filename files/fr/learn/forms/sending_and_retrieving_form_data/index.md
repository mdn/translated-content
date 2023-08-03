---
title: Envoyer et extraire les données des formulaires
slug: Learn/Forms/Sending_and_retrieving_form_data
---

{{LearnSidebar}}{{PreviousMenu("Learn/Forms/Form_validation", "Learn/Forms")}}

Cet article examine ce qui arrive quand un utilisateur soumet un formulaire — où les données vont-elles et comment les gère-t-on une fois à destination ? Nous examinerons aussi quelques problèmes de sécurité associés à l'envoi des données d'un formulaire.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Notions concernant les ordinateurs,
        <a href="/fr/docs/Learn/HTML/Introduction_to_HTML"
          >compréhension du HTML</a
        >, et<a href="/fr/docs/Learn/HTML/Introduction_to_HTML"> </a
        >connaissances de base de
        <a href="/fr/docs/Web/HTTP/Basics_of_HTTP">HTTP </a>et
        <a href="/fr/docs/Learn/Server-side/First_steps"
          >programmation côté serveur.</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif&nbsp;:</th>
      <td>
        Comprendre ce qui arrive quand les données d'un formulaire sont
        soumises, y compris les notions de la façon dont les données sont
        traitées sur le serveur.
      </td>
    </tr>
  </tbody>
</table>

Dans ce paragraphe, nous expliquons ce qui arrive aux données lors de la soumission d'un formulaire.

## A propos de l'architecture client / serveur

Le web se fonde sur une architecture client/serveur élémentaire&nbsp;; en résumé : un client (généralement un navigateur Web) envoie une requête à un serveur (le plus souvent un serveur web comme [Apache](https://httpd.apache.org/), [Nginx](https://nginx.com/), [IIS](https://www.iis.net/), [Tomcat](https://tomcat.apache.org/)...), en utilisant le [protocole HTTP](/fr/docs/Web/HTTP). Le serveur répond à la requête en utilisant le même protocole.

![Un schéma élémentaire d'architecture client/serveur sur le Web ](client-server.png)

Côté client, un formulaire HTML n'est rien d'autre qu'un moyen commode et convivial de configurer une requête HTTP pour envoyer des données à un serveur. L'utilisateur peut ainsi adresser des informations à joindre à la requête HTTP.

> **Note :** Pour une meilleure idée du fonctionnement de l'architecture client‑serveur, lisez notre module [Programmation d'un site web côté‑serveur&nbsp;: premiers pas](/fr/docs/Learn/Server-side/First_steps).

## Côté client : définition de la méthode d'envoi des données

L'élément [`<form>`](/fr/docs/Web/HTML/Element/Form) définit la méthode d'envoi des données. Tous ses attributs sont conçus pour vous permettre de configurer la requête à envoyer quand un utilisateur presse le bouton d'envoi. Les deux attributs les plus importants sont [`action`](/fr/docs/Web/HTML/Element/Form#attr-action) et [`method`](/fr/docs/Web/HTML/Element/Form#attr-method).

### L'attribut action

Cet attribut définit où les données sont envoyées. Sa valeur doit être une URL valide. S'il n'est pas fourni, les données seront envoyées à l'URL de la page contenant le formulaire.

Dans cet exemple, les données sont envoyées à une URL précise — `http://foo.com` :

```html
<form action="http://foo.com"></form>
```

Ici, nous utilisons une URL relative — les données sont envoyées à une URL différente sur le serveur&nbsp;:

```html
<form action="/somewhere_else"></form>
```

Sans attribut, comme ci-dessous, les données de [`<form>`](/fr/docs/Web/HTML/Element/Form) sont envoyées à la même page que celle du formulaire :

```html
<form></form>
```

De nombreuses pages anciennes utilisent la notation suivante pour indiquer que les données doivent être envoyées à la page qui contient le formulaire. C'était nécessaire car jusqu'à HTML5, l'attribut [`action`](/fr/docs/Web/HTML/Element/Form#attr-action) était requis. Il n'y en a donc plus besoin.

```html
<form action="#"></form>
```

> **Note :** Il est possible de spécifier une URL qui utilise le protocole HTTPS (HTTP sécurisé). Quand vous faites ceci, les données sont chiffrées avec le reste de la requête, même si le formulaire lui-même est hébergé dans une page non sécurisée à laquelle on accède via HTTP. D'autre part, si le formulaire est hébergé sur une page sécurisée mais qu'on spécifie une URL non sécurisée avec l'attribut [`action`](/fr/docs/Web/HTML/Element/Form#attr-action), tous les navigateurs affichent une alerte de sécurité pour l'utilisateur chaque fois qu'il envoie des données car celles-ci ne sont pas chiffrées.

### L'attribut method

Cet attribut définit comment les données sont envoyées. Le [Protocole HTTP](/fr/docs/Web/HTTP) fournit plusieurs façons d'envoyer une requête. Les données des formulaires HTML peuvent être envoyées via au moins deux méthodes : la méthode `GET` et la méthode `POST`.

Pour bien comprendre la différence entre ces deux méthodes, il convient d'examiner comment le protocole HTTP marche. Chaque fois qu'on veut atteindre une ressource sur Internet, le navigateur envoie une requête à une URL. Une requête HTTP consiste en deux parties : un en-tête (header) qui contient les métadonnées sur les capacités du navigateur, et un corps (body) qui contient les informations nécessaires au serveur pour effectuer la requête.

#### La méthode GET

La méthode `GET` est utilisée par le navigateur pour demander au serveur de renvoyer une certaine ressource. "Hé le serveur, je veux cette ressource." Dans ce cas, le navigateur envoie un corps vide. Du coup, si un formulaire est envoyé avec cette méthode, les données envoyées au serveur sont ajoutées à l'URL.

Considérons le formulaire suivant :

```html
<form action="http://foo.com" method="get">
  <div>
    <label for="say">Quelle salutation voulez-vous adresser&nbsp;?</label>
    <input name="say" id="say" value="Salut" />
  </div>
  <div>
    <label for="to">À qui voulez‑vous l'adresser ?</label>
    <input name="to" value="Maman" />
  </div>
  <div>
    <button>Envoyer mes salutations</button>
  </div>
</form>
```

Comme nous avons utilisé la méthode `GET`, vous verrez l'URL `www.foo.com/?say=Hi&to=Mom` apparaître dans la barre du navigateur quand vous soumettez le formulaire.

![](url-parameters.png)

Les données sont ajoutées à l'URL sous forme d'une suite de paires nom/valeur. À la fin de l'URL de l'adresse Web, il y a un point d'interrogation (?) suivi par les paires nom/valeur séparés par une esperluette (&). Dans ce cas, nous passons deux éléments de données au serveur&nbsp;:

- `say`, dont la valeur est `Salut`
- `to`, qui a la valeur `Maman`

La requête HTTP ressemble à quelque chose comme&nbsp;:

```
GET /?say=Hi&to=Mom HTTP/1.1
Host: foo.com
```

> **Note :** Vous trouverez cet exemple sur GitHub — voyez [get-method.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/get-method.html) (à voir [directement aussi](https://mdn.github.io/learning-area/html/forms/sending-form-data/get-method.html)).

#### La méthode POST

La méthode `POST` est un peu différente.C'est la méthode que le navigateur utilise pour demander au serveur une réponse prenant en compte les données contenues dans le corps de la requête HTTP : «&nbsp;Hé serveur&nbsp;! vois ces données et renvoie-moi le résultat approprié&nbsp;». Si un formulaire est envoyé avec cette méthode, les données sont ajoutées au corps de la requête HTTP.

Voyons un exemple — c'est le même formulaire que celui que nous avons vu pour GET ci‑dessus, mais avec `post` comme valeur de l'attribut [`method`](/fr/docs/Web/HTML/Element/Form#attr-method).

```html
<form action="http://www.foo.com" method="POST">
  <div>
    <label for="say">Quelle salutation voulez-vous dire ?</label>
    <input name="say" id="say" value="Salut" />
  </div>
  <div>
    <label for="to">A qui voulez-vous le dire ?</label>
    <input name="to" id="to" value="Maman" />
  </div>
  <div>
    <button>Envoyer mes salutations</button>
  </div>
</form>
```

Quand le formulaire est soumis avec la méthode `POST`, aucune donnée n'est ajoutée à l'URL et la requête HTTP ressemble à ceci, les données incorporées au corps de requête&nbsp;:

```
POST / HTTP/1.1
Host: foo.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 13

say=Hi&to=Mom
```

L'en-tête `Content-Length` indique la taille du corps, et l'en-tête `Content-Type` indique le type de ressources envoyées au serveur. Nous discuterons de ces en-têtes dans un moment.

> **Note :** Vous trouverez cet exemple sur GitHub — voyez [post-method.html](https://mdn.github.io/learning-area/html/forms/sending-form-data/post-method.html) (à voir [directement aussi](https://mdn.github.io/learning-area/html/forms/sending-form-data/get-method.html)).

### Voir les requêtes HTTP

Les requêtes HTTP ne sont jamais montrées à l'utilisateur (si vous voulez les voir, vous devez utiliser des outils comme la [Console Web](/fr/docs/Tools/Web_Console) de Firefox ou les [Chrome Developer Tools](https://developers.google.com/chrome-developer-tools/)). À titre d'exemple, les données de formulaire sont visibles comme suit dans l'onglet Chrome Network. Après avoir soumis le formulaire&nbsp;:

1. Pressez F12
2. Selectionnez «&nbsp;Réseau&nbsp;»
3. Selectionnez «&nbsp;Tout&nbsp;»
4. Selectionnez «&nbsp;foo.com&nbsp;» dans l'onglet «&nbsp;Nom&nbsp;»
5. Selectionnez «&nbsp;En‑tête&nbsp;»

Vous obtiendrez les données du formulaire, comme l'image suivante le montre.

![](network-monitor.png)

La seule chose affichée à l'utilisateur est l'URL appelée. Comme mentionné ci‑dessus, avec une requête `GET` l'utilisateur verra les données dans la barre de l'URL, mais avec une requête `POST` il ne verra rien. Cela peut être important pour deux raisons&nbsp;:

1. Si vous avez besoin d'envoyer un mot de passe (ou toute autre donnée sensible), n'utilisez jamais la méthode GET ou vous risquez de l'afficher dans la barre d'URL, ce qui serait très peu sûr.
2. Si vous avez besoin d'envoyer une grande quantité de données, la méthode POST est préférable, car certains navigateurs limitent la taille des URLs. De plus, de nombreux serveurs limitent la longueur des URL qu'ils acceptent.

## Côté serveur : récupérer les données

Quelle que soit la méthode HTTP qu'on choisit, le serveur reçoit une chaîne de caractères qui sera décomposée pour récupérer les données comme une liste de paires clé/valeur. La façon d'accéder à cette liste dépend de la plateforme de développement utilisée et des modèles qu'on peut utiliser avec. La technologie utilisée détermine aussi comment les clés dupliquées sont gérées&nbsp;; souvent, la priorité est donnée à la valeur de clé la plus récente.

### Exemple&nbsp;: PHP brut

Le [PHP](https://php.net/) met à disposition des objets globaux pour accéder aux données. En supposant que vous avez utilisé la méthode `POST`, l'exemple suivant récupère les données et les affiche à l'utilisateur. Bien sûr, ce que vous en faites dépend de vous. Vous pouvez les afficher, les ranger dans une base de données, les envoyer par mail ou les traiter autrement.

```php
<?php
  // La variable globale $_POST vous donne accès aux données envoyées avec la méthode POST par leur nom
  // Pour avoir accès aux données envoyées avec la méthode GET, utilisez $_GET
  $say = htmlspecialchars($_POST['say']);
  $to  = htmlspecialchars($_POST['to']);

  echo  $say, ' ', $to;
```

Cet exemple affiche une page avec les données envoyées. Vous pouvez voir ceci opérer avec notre fichier exemple [php-example.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/php-example.html) — il contient le même formulaire exemple que celui vu précédemment avec la méthode `post` avec `php-example.php` en action. À la soumission du formulaire, il envoie les données de ce dernier à [php-example.php](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/php-example.php), contenant le code ci‑dessus. Quand le code est exécuté, la sortie dans le navigateur est `Hi Mom` « Bonjour maman ».

![L'exécution du code PHP déclenche l'affichage de Hi Mom](php-result.png)

> **Note :** Cet exemple ne fonctionnera pas si vous le chargez localement dans un navigateur — les navigateurs ne savent pas interpréter le code PHP, donc quand le formulaire est soumis, le navigateur vous offrira seulement de télécharger le fichier PHP pour vous. Pour qu'il s'exécute, il est nécessaire de lancer l'exemple par l'intermédiaire d'un serveur PHP de n'importe quel type. Les bons choix pour des tests locaux de PHP sont [MAMP](https://www.mamp.info/en/downloads/) (Mac et Windows) et [AMPPS](https://ampps.com/download) (Mac, Windows, Linux).
>
> Notez également que si vous utilisez MAMP mais que vous n'avez pas installé MAMP Pro (ou si le temps d'essai de la démo de MAMP Pro a expiré), vous pourriez avoir des difficultés à le faire fonctionner. Pour le faire fonctionner à nouveau, nous avons constaté que vous pouvez charger l'application MAMP, puis choisir les options de menu _MAMP_ > _Préférences_ > _PHP_, et définir "Version standard :" à "7.2.x" (x sera différent selon la version que vous avez installée).

### Exemple: Python

Cet exemple vous montre comment utiliser Python pour faire la même chose — afficher les données sur une page web. Celui‑ci utilise [Flask framework](https://flask.pocoo.org/) pour le rendu des modèles, la gestion de la soumission des données du formulaire, etc (voyez [python-example.py](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/python-example.py)).

```python
from flask import Flask, render_template, request
app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def form():
    return render_template('form.html')

@app.route('/hello', methods=['GET', 'POST'])
def hello():
    return render_template('greeting.html', say=request.form['say'], to=request.form['to'])

if __name__ == "__main__":
    app.run()
```

Les deux prototypes référencés dans le code ci‑dessus sont les suivants&nbsp;:

- [`form.html`](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/templates/form.html)&nbsp;: Le même formulaire que celui vu plus haut dans la section [La méthode POST](#the_post_method) mais avec l'attribut `action` défini à la valeur `\{{url_for('hello')}}`. (C'est un modèle [Jinja2](https://jinja.pocoo.org/docs/2.9/), qui est HTML à la base mais peut contenir des appels à du code Python qui fait tourner le serveur web mis entre accolades. `url_for('hello')` dit en gros «&nbsp;à rediriger sur `/hello` quand le formulaire est soumis&nbsp;».)
- [greeting.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/templates/greeting.html)&nbsp;: Ce modèle contient juste une ligne qui renvoie les deux éléments de donnée qui lui sont passées lors du rendu. Cela est effectué par l'intermédiaire de la fonction `hello()` vue plus haut qui s'exécute quand l'URL `/hello` est chargée dans le navigateur.

> **Note :** À nouveau, ce code ne fonctionnera pas si vous tentez de le charger directement dans le navigateur. Python fonctionne un peu différemment de PHP — pour exécuter ce code localement il est nécessaire d'[installer Python/PIP](/fr/docs/Learn/Server-side/Django/development_environment#installing_python_3), puis Flask avec «&nbsp;`pip3 install flask`&nbsp;». À ce moment‑là vous pourrez exécuter l'exemple avec «&nbsp;`python3 python-example.py`&nbsp;», puis en allant sur «&nbsp;`localhost:5000`&nbsp;» dans votre navigateur.

### Autres langages et canevas de structures

Il y a de nombreuses autres techniques côté serveur utilisables pour gérer des formulaires, comme Perl, Java, .Net, Ruby... retenez juste votre préférée. Cela dit, il faut noter qu'il n'est pas très courant d'utiliser ces techniques directement car cela peut être délicat. Il est plus fréquent d'utiliser l'un des jolis canevas qui permettent de gérer des formulaires plus facilement, comme :

- [Symfony](https://symfony.com/) pour PHP
- [Django](https://www.djangoproject.com/) pour Python
- [Express](/fr/docs/Learn/Server-side/Express_Nodejs) pour Node.js
- [Ruby On Rails](https://rubyonrails.org/) pour Ruby
- [Grails](https://grails.org/) pour Java
- etc.

Enfin il faut noter que même en utilisant ces canevas, travailler avec des formulaires n'est pas toujours _facile_. Mais c'est quand même bien plus facile que d'essayer d'en écrire vous‑même les fonctionnalités et cela vous économisera pas mal de temps.

> **Note :** Nous déborderions du cadre de cet article en vous initiant aux langages côté serveur ou aux canevas. Les liens ci‑dessus vous donneront des informations si vous souhaitez en apprendre plus.

## Cas particulier : envoyer des fichiers

L'envoi de fichiers avec un formulaire HTML est cas particulier. Les fichiers sont des données binaires — ou considérées comme telles — alors que toutes les autres données sont des données textuelles. Comme HTTP est un protocole de texte, il y a certaines conditions particulières à remplir pour gérer des données binaires.

### L'attribut enctype

Cet attribut vous permet de préciser la valeur de l'en-tête HTTP `Content-Type` incorporé dans la requête générée au moment de la soumission du formulaire. Cet en-tête est très important, car il indique au serveur le type de données envoyées. Par défaut, sa valeur est `application/x-www-form-urlencoded`. Ce qui signifie : «&nbsp;Ce sont des données de formulaire encodées à l'aide de paramètres URL&nbsp;».

Mais si vous voulez envoyer des fichiers, il faut faire deux choses en plus :

- régler l'attribut [`method`](/fr/docs/Web/HTML/Element/Form#attr-method) à `POST`, car un contenu de fichier ne peut pas être mis dans des paramètres d'URL.
- régler la valeur de [`enctype`](/fr/docs/Web/HTML/Element/Form#attr-enctype) `à multipart/form-data`, car les données seront coupées en plusieurs parties, une pour chaque fichier plus une pour les données dans le corps du formulaire (si du texte a aussi été entré dans le formulaire).
- incorporer un ou plusieurs widgets de [`<input type="file">`](/fr/docs/Web/HTML/Element/Input/file) pour permettre aux utilisateurs de choisir les fichiers à téléverser.

Par exemple :

```html
<form method="post" action="https://www.foo.com" enctype="multipart/form-data">
  <div>
    <label for="file">Choisir un fichier</label>
    <input type="file" id="file" name="myFile" />
  </div>
  <div>
    <button>Envoyer le fichier</button>
  </div>
</form>
```

> **Note :** Les serveurs peuvent être configurés avec une limite de taille pour les fichiers et les requêtes HTTP afin d'éviter les abus.

## Problèmes courants de sécurité

Chaque fois qu'on envoie des données à un serveur, il faut considérer la sécurité. Les formulaires HTML sont l'un des principaux vecteurs d'attaque (emplacements d'où les attaques peuvent provenir) contre les serveurs. Les problèmes ne viennent jamais des formulaires eux-mêmes — ils proviennent de la façon dont les serveurs gèrent les données.

L'article [Sécurité des sites Web](/fr/docs/Learn/Server-side/First_steps/Website_security) de notre sujet d'apprentissage [server-side](/fr/docs/Learn/Server-side) aborde en détail un certain nombre d'attaques courantes et les défenses potentielles contre celles-ci. Vous devriez aller consulter cet article, pour vous faire une idée de ce qui est possible.

### Soyez paranoïaque : ne faites jamais confiances à vos utilisateurs

Alors, comment combattre ces menaces ? Ce sujet va bien au-delà de ce guide, mais il y a quelques règles à garder en tête. La principale est de ne jamais faire confiance à ses utilisateurs, vous-même compris : même un utilisateur de confiance peut s'être fait pirater.

Toute donnée qui va dans un serveur doit être vérifiée et nettoyée. Toujours. Sans exception.

- **Échappez les caractères potentiellement dangereux**. Les caractères spécifiques dont vous devez vous méfier varient en fonction du contexte dans lequel les données sont utilisées et de la plateforme serveur que vous employez, mais tous les langages côté serveur disposent de fonctions à cet effet. Les choses à surveiller sont les séquences de caractères qui ressemblent à du code exécutable (comme [JavaScript](/fr/docs/Learn/JavaScript) ou des [Commandes SQL](https://en.wikipedia.org/wiki/SQL)).
- **Limitez la quantité de données entrantes pour n'autoriser que ce qui est nécessaire**.
- **Sandbox des fichiers téléchargés**. Stockez-les sur un serveur différent et n'autorisez l'accès au fichier que par un sous-domaine différent ou, mieux encore, par un domaine complètement différent.

Vous devriez vous éviter beaucoup de problèmes en suivant ces trois règles, mais cela reste néanmoins une bonne idée de faire un examen de sécurité auprès d'une tierce personne compétente. Ne pensez pas, à tort, avoir anticipé tous les problèmes de sécurité&nbsp;!

## Conclusion

Comme vous pouvez le voir, envoyer un formulaire est facile, mais sécuriser son application peut s'avérer plus délicat. N'oubliez pas qu'un développeur n'est pas celui qui doit définir le modèle de sécurité des données.Comme nous allons le voir, il est possible d'effectuer la [validation des données côté client](/fr/docs/Learn/Forms/Form_validation), mais le serveur ne peut pas faire confiance à cette validation, car il n'a aucun moyen de savoir ce qui se passe réellement du côté client.

## Voir aussi

Si vous voulez en savoir plus par rapport aux applications web, vous pouvez consulter ces ressources :

- [Programmation d'un site web côté‑serveur&nbsp;: premiers pas](/fr/docs/Learn/Server-side/First_steps)
- [Open Web Application Security Project (OWASP)](https://www.owasp.org/index.php/Main_Page) (Projet pour la sécurité des applications dans un Web ouvert)
- [Blog de Chris Shiflett à propos de la sécurité avec PHP](https://shiflett.org/)

{{PreviousMenu("Learn/Forms/Form_validation", "Learn/Forms")}}
