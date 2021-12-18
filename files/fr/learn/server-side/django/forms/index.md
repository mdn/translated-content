---
title: 'Django Tutorial Part 9: Working with forms'
slug: Learn/Server-side/Django/Forms
tags:
  - Beginner
  - CodingScripting
  - DjangoForms
  - Forms
  - HTML forms
  - Learn
  - Tutorial
  - django
  - server side
translation_of: Learn/Server-side/Django/Forms
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/authentication_and_sessions", "Learn/Server-side/Django/Testing", "Learn/Server-side/Django")}}

Dans cette formation nous allons vous montrer comment travailler avec les formulaires HTML sous Django afin de créer, modifier et supprimer des instances de modèle. Pour illustrer le raisonnement, nous allons étendre le site web [LocalLibrary](/fr/docs/Learn/Server-side/Django/Tutorial_local_library_website) pour permettre aux bibliothécaires d'utiliser nos formulaires (plutôt que l'application d'administration par défaut) pour prolonger la durée de prêt des livres, et également pour ajouter, mettre à jour et supprimer des auteurs.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis:</th>
      <td>
        Avoir terminé les formations précédentes, y compris
        <a href="/fr/docs/Learn/Server-side/Django/authentication_and_sessions"
          >Django Tutorial Part 8: User authentication and permissions</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs:</th>
      <td>
        Comprendre comment écrire des formulaires pour récupérer des
        informations de la part des utilisateurs et mettre à jour la base de
        données. Comprendre commment il est possible de simplifier grandement la
        création de formulaires si l 'on travaille avec un seul modèle en
        utilisant les vues génériques de formulaires d'éditions s'appuyant sur
        des classes.   
      </td>
    </tr>
  </tbody>
</table>

## Vue d'ensemble

Un [formulaire HTML](/fr/docs/Web/Guide/HTML/Forms) regroupe au moins un champ remplissable et des composants élémentaires d'interface web.  Il peut être utilisé pour réunir des saisies de la part des utilisateurs avant envoi vers un serveur. Les formulaires sont souples: ils s'adaptent à plusieurs modes de saisie. En effet, Il existe des composants élementaires d'interfaces graphique pour des  modes de saisie non contrainte avec une zone de saisie de texte, ou resteinte au type date avec un date picker,  la saisie d'un variable optionnelle via une boîte à cocher,  d'un choix à faire parmi plusieurs valeurs possibles avec les boutons radio etc... . Les formulaires permettent de partager des informations avec le serveur de manière relativement sécurisée  car ils permettent d'envoyer des requêtes de  type `POST` protégeant de la falsification des requêtes inter-site.

Bien que nous n'ayons pas encore créé de formulaire au cours de cette formation, nous en avons déjà rencontré sur l'interface d'administration Django Admin — par exemple la capture d'écran ci-dessous montre un formulaire d'édition  de l'un de nos modèle de [Book](/fr/docs/Learn/Server-side/Django/Models)  (livre), comprenant des composants élémentaires d'interface graphique de chois de valeur parmi une liste proposée,  et des zones des saisie de texte.

![Admin Site - Book Add](admin_book_add.png)

Travailler avec des formulaires peut s'avérer compliqué ! Les développeurs doivent non seulement écrire le code  HTML pour le formulaire, mais aussi vérifier et corriger sur le serveur les données saisies (et éventuellement aussi dans le navigateur), renvoyer le formulaire avec des messages d'erreur pour informer les usagers de tout champ invalide, prendre en charge les données quand elles passent l'étape de vérification, et finalement renvoyer une information à l'utilisateur d'une manière ou d'une autre pour indiquer ce succès. Les formulaires sous Django enlèvent beaucoup de travail à chacune de ces étapes, grâce à un cadriciel qui permet de déclarer des formulaires et leurs champs à travers un langage de programmation, puis d'utiliser ces objets non seulement pour générer le code HTML, mais aussi une grosse partie de la vérification des données et du retour d'information à l'utilisateur.

Dans cette formation, nous allons vous montrer quelque-unes des manièrs de créer et de travailler avec les formulaires, et en particulier, comment les vues sur les formulaires génériques d'édition peuvent réduire significativement la quantité de travail à fournir pour créer les formulaires de manipulation de vos modèles. En chemin nous allons étendre notre application *LocalLibrary* en ajoutant un formulaire permettant aux bibliothécaires de prolonger le prêt de libres, et nous allons créer des pages pour créer, modifier et supprimer des livres et des auteurs (reproduisant une version basique du formulaire ci-dessus pour éditer des livres. )

## Formulaires HTML

D'abord, un premier aperçu des formulaires HTML ([HTML Forms](/fr/docs/Learn/HTML/Forms)). Soit un formulaire HTML simple, composé d'un unique champ de saisie texte , présent pour y entrer le nom d'une "équipe" quelconque, et son sa description dans l'étiquette associée :

![Simple name field example in HTML form](form_example_name_field.png)

Le formulaire est défini en HTML comme une collection d'éléments enfermés entre deux balises \<form> ... \</form> contenant au moins une balise \<input> dont la valeur d'attribut 'type' doit valoir "submit":

```html
<form action="/team_name_url/" method="post">
    <label for="team_name">Enter name: </label>
    <input id="team_name" type="text" name="name_field" value="Default name for team.">
    <input type="submit" value="OK">
</form>
```

Bien qu'ici nous n'ayons qu'un champ de saisie texte destiné à recevoir le nom d'équipe, une formulaire _pourrait_ avoir un nombre quelconque d'autres champs de saisie et leurs étiquettes de description associées. La valeur de l'attribut 'type' définit la sorte de composant élementaire d'interface graphique  affichée. Les attributs 'id' et 'name' permettent d'identifier le champ en JavaScript/CSS/HTML alors que l'attribut 'value' définit la valeur initiale du champ lorsqu'il est affiché pour la première fois. La description associée  est déclarée par la balise \<label> (voir "Enter Name" au dessus) , avec un attribut 'for' devant contenir la valeur de l'attribut 'id' du champ imput à laquelle on souhaite l'associer.

La balise `<input>` dont l'attribut `'type'` vaut `submit` sera affichée (par défaut) comme un bouton  qui peut être cliqué par l'utilisateur pour envoyer vers le serveur les données figurant dans tous les autres éléments de formulaire \<input> (dans le cas présent, la valeur actuelle de `'team name'`. Les attributs de formulaire déterminent d'une part la méthode HTTP (attribut method) utilisée pour envoyer les donnnées et d'autre part la destination des données sur le serveur (attribut `action `):

- `action` :  Il s'agit de la destination (ressource ou URL) où sont envoyées les données lorsque le formulaire est soumis.  Si la valeur de cet attribut n'est pas initialisée (ou la chaine vide est affectée à cet attribut),  alors le formulaire sera renvoyé à l' URL de la page courante.
- `method` : La méthode HTTP utilisée pour envoyer les données: *post* ou *get*.

  - La méthode `POST` devrait toujours être utilisée si l'envoi de la donnée va provoquer un changement dan la base de données du serveur, car il peut être rendu plus résistant aux attaques par falsification de requête inter-site (CSRF).
  - La méthode GET ne devrait être utilisée que pour les formulaires ne changeant pas les données utilisateur (p.ex. un formulaire de recherche) . Elle est recommandée lorsque vous souhaitez pouvoir partager l'URL ou la conserver dans vos favoris.  T

Le rôle du serveur est d'abord de fournir le formulaire sous sa forme initiale  — c'est à dire une série de champs soit vides, soit préremplis avec des valeurs initiales. Après l'impulsion de l'utilisateur sur le bouton submit, le seurveur va recevoir les données du formulaire avec les valeurs saisies dans le navigateur, et va devoir vérifier ces données. Si le formulaire contient des données invalides, le seurveur devrait afficher le formulaire de nouveau, cette fois ci avec les données utilisateur entrées dans les champs "valides" et des messages pour décrire le problème pour les champs invalides. Dès que le serveur reçoit une requête dont tous les données de champs sont valides, il peut effectuer les actions appropriées ( c'est à dire sauver les données, renvoyer le résultat d'une recherche, téléverser un fichier, etc...)  et ensuite notifier l'utilisateur .

Comme vous pouvez l'imaginer, créer le code HTML, vérifier les données envoyées, réafficher les données entrées avec l'adjonction de rapports sur les erreurs, effectuer les opérations désirées sur les données valides peut représenter pas mal d'efforts de réflexion et d'essais erreur. Django rend cela bien plus facile, en enlevant la nécessité de concevoir une partie de ce code pénible et répétitif!

## Les étapes de gestion d'un formulaire avec Django

Django gère un formulaire en utilisant les mêmes techniques qu'évoquées lors des formations précédentes (pour afficher des informations à propos de nos modèles): La vue reçoit une requête, exécute toute acion nécessaire, incluant la lecture de données depuis les modèles, puis génère une page HTML (à partir d'un squelette à qui nous transmettons un _contexte_ contenant les données à afficher\* \*). Ce qui rend les choses plus compliquées, c'est que le serveur a aussi besoin d'être capable de traiter les données fournies par l'utilisateur (pas seulement le contexte) et doit pouvoir réafficher les pages s'il y a une quelconque erreur.

Voici ci-dessous un diagramme représentant les étapes de gestion d'un formulaire de requêtes, commencant par la demande par le navigateur d'une page, dont le code HTML se trouve contenir un formulaire (en vert).

![Updated form handling process doc.](Form%20Handling%20-%20Standard.png)

En se basant sur la lecture du diagramme ci-dessus, les tâches principales dont s'aquitte Django à l'occasion de la gestion d'un formulaire sont :

1.  Afficher le formulaire sous sa forme par défaut la première fois où il est demandé par l'utilisateur.

    - Le formulaire peut contenir des champs vides (par exemple si vous créez un nouvel enregistrement ) ou peut être prérempli de valeurs initiales (par exemple si vous modifiez les valeurs d'un enregistrement existant, ou que ces champs ont des valeurs initiales utiles ).
    - Le formulaire est qualifié à cette étape de formulaire libre, parce qu'il n'est associé à aucune donnée entré par l'utilisateur (bien qu'il puisse avoir des valeurs initiales) .

2.  Recevoir des données d'une requete d'envoi de données et les lier au formulaire.

    - Lier les données au formulaire signifie que les données entrées par l'utilisateur, ainsi que les erreurs éventuelles sont accessibles lorsque nous avons besoin de réafficher le formulaire.

3.  Nettoyer et valider les données

    - Le nettoyage de données consiste à désinfecter la saisie (par exemple en supprimant les caractères non valides, et qui pourraient être utilisés pour envoyer du contenu malveillant au serveur.) et à convertir ces données en types Python cohérents.
    - La validation vérifie que les valeurs envoyées sont appropriées au champ (par exemple dans le bon intervalle de dates, ni trop long ni trop court, etc.)

4.  Si une donnée n'est pas valide, ré-affiche le formulaire, cette fois-ci avec les données déjà saisies par l'utilisateur et les messages d'erreur pour les champs en erreur.
5.  Si toutes les données sont conformes, effectue les actions demandées (e.g. sauvegarde les données, envoyer un mail, renvoie le résultat d'une recherche, télécharge un fichier etc.)
6.  Une fois toutes ces actions accomplies, redirige l'utilisateur vers une autre page.

Django fournit une multitude d'outils et de méthodes pour vous assister dans les tâches mentionnées ci-dessus. Parmi eux la plus importante, la classe `Form`, qui simplifie à la fois la production de formulaire HTML mais aussi la validation de donnée. In the next section we describe how forms work using the practical example of a page to allow librarians to renew books.

> **Note :** Comprendre l'utilisation de `Form` vous aidera quand nous parlerons des classes de formulaires de Django plus complexes.

## Formulaire de renouvellement de livre par l'utilisation de vue Form

Nous allons maintenant créer une page qui permettra aux bibliothécaires de renouveler les livres empruntés (les rendre disponible à nouveau). Pour cela nous allons créer un formulaire qui permet aux utilisateurs de saisir une valeur de type Date. Considérons le champ avec une valeur initiale égale à la date du jour plus 3 semaines (la période normale d'emprunt d'un livre), et ajouter une validation pour s'assurer que le bibliothécaire ne peut pas saisir une date dans le passé ou une date trop éloignée dans le futur. Quand une date valide a été entrée, nous l'enregistrons dans le champ `BookInstance.due_back` de l'enregistrement courant.

L'exemple va utiliser une vue basée sur une fonction et une classe `Form`. Les sections suivantes expliquent comment les formulaires fonctionnent, et les changements que vous devez faire à notre projet en cours _LocalLibrary_.

### Formulaire

La classe `Form` est le cœur du système de gestion des formulaires de Django. Elle spécifie les champs présents dans le formulaire, affiche les widgets, les labels, les valeurs initiales, les valeurs valides et (après validation) les messages d'erreur associés aux champs invalides. Cette classe fournit également des méthodes pour se restituer elle-même dans les templates en utilisant des formats prédéfinis (tables, listes etc.) ou pour obtenir la valeur de chaque élément de formulaire (permettant un rendu manuel fin).

#### Déclarer un formulaire

La syntaxe de déclaration pour un `Form` est très semblable à celle utilisée pour déclarer un `Model`, et partage les mêmes types de champs (et des paramètres similaires). Cela est logique, puisque dans les deux cas nous avons besoin de nous assurer que chaque champ gère le bon type de donnée, est contraint lors de la validation des données, et a une description pour l'affichage/la documentation.

Les données de formulaire sont stockées dans un fichier application forms.py, à l'intérieur du répertoire de l'application. Créez et ouvrez le fichier **locallibrary/catalog/forms.py**. Pour créer un `Form`, nous importons la bibliothèque `forms`, dérivons une classe de la classe `Form`, et déclarons les champs du formulaire. Une classe très basique de formulaire pour notre formulaire de renouvellement de livre dans notre bibliothèque est montrée ci-dessous :

```python
from django import forms

class RenewBookForm(forms.Form):
    renewal_date = forms.DateField(help_text="Enter a date between now and 4 weeks (default 3).")
```

#### Champs de formulaire

Dans ce cas, nous avons un unique champ [`DateField`](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#datefield) pour entrer la date du renouvellement, qui sera rendue en HTML avec une valeur vide, le label par défaut "_Renewal date:_", et un texte utilitaire indiquant comment s'en servir : "_Enter a date between now and 4 weeks (default 3 weeks)._" Comme aucun des autres arguments optionnels ne sont spécifiés, le champ acceptera des dates en utilisant les [input_formats](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#django.forms.DateField.input_formats) suivants : YYYY-MM-DD (2016-11-06), MM/DD/YYYY (02/26/2016), MM/DD/YY (10/25/16), et sera rendu en utilisant le [widget](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#widget) par défaut : [DateInput](https://docs.djangoproject.com/en/1.10/ref/forms/widgets/#django.forms.DateInput).

Il y a beaucoup d'autres types de champs, que vous reconnaîtrez sans peine en raison de leur ressemblance avec les classes de champs équivalentes pour les modèles : [`BooleanField`](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#booleanfield), [`CharField`](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#charfield), [`ChoiceField`](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#choicefield), [`TypedChoiceField`](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#typedchoicefield), [`DateField`](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#datefield), [`DateTimeField`](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#datetimefield), [`DecimalField`](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#decimalfield), [`DurationField`](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#durationfield), [`EmailField`](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#emailfield), [`FileField`](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#filefield), [`FilePathField`](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#filepathfield), [`FloatField`](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#floatfield), [`ImageField`](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#imagefield), [`IntegerField`](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#integerfield), [`GenericIPAddressField`](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#genericipaddressfield), [`MultipleChoiceField`](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#multiplechoicefield), [`TypedMultipleChoiceField`](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#typedmultiplechoicefield), [`NullBooleanField`](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#nullbooleanfield), [`RegexField`](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#regexfield), [`SlugField`](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#slugfield), [`TimeField`](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#timefield), [`URLField`](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#urlfield), [`UUIDField`](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#uuidfield), [`ComboField`](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#combofield), [`MultiValueField`](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#multivaluefield), [`SplitDateTimeField`](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#splitdatetimefield), [`ModelMultipleChoiceField`](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#modelmultiplechoicefield), [`ModelChoiceField`](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#modelchoicefield)​​​​.

Les arguments communs de la plupart des champs sont listés ci-dessous (ils ont les valeurs les plus communes par défaut) :

- [required](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#required): Si `True`, le champ ne peut être laissé vide ou recevoir une valeur `None`. Les champs sont requis par défaut, aussi devez-vous préciser `required=False` pour autoriser des valeurs vides dans le formulaire.
- [label](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#label): Le label à utiliser au moment de rendre le champ en HTML. Si [label](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#label) n'est pas précisé, alors Django en créera un à partir du nom du champ concerné, en mettant en majuscule la première lettre et en remplaçant les tirets bas par des espaces (p. ex. _Renewal date_).
- [label_suffix](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#label-suffix): Par défaut, un double point est affiché après le label (p. ex. Renewal date**:**). Cet argument vous permet de préciser un suffixe différent contenant un ou plusieurs autres caractère(s).
- [initial](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#initial): La valeur intiale pour le champ lorsque le formulaire est affiché.
- [widget](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#widget): Le widget d'affichage à utiliser.
- [help_text](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#help-text) (comme dans l'exemple ci-dessus): Un texte supplémentaire qui peut être affiché dans les formulaires pour expliquer comment utiliser le champ.
- [error_messages](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#error-messages): Une liste des messages d'erreur pour le champ. Vous pouvez remplacer les messages par défaut par vos propres messages si besoin.
- [validators](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#validators): Une liste de fonctions qui seront appelées quand le champ sera validé.
- [localize](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#localize): Autorise la forme locale des données de formulaire (voyez le lien pour information).
- [disabled](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#disabled): Si `True`, le champ est affiché, mais sa valeur ne peut être modifiée. `False` par défaut.

#### Validation

Django fournit un grand nombre d'endroits pour valider vos données. La façon la plus simple de valider un champ unique est de remplacer la méthode `clean_<fieldname>()` pour le champ à vérifier. Ainsi, par exemple, nous pouvons vérifier que les valeurs entrées pour le champ `renewal_date` sont entre maintenant et dans 4 semaines, en implémentant la méthode `clean_renewal_date()` comme montré ci-après.

Mettez à jour votre fichier forms.py, de telle sorte qu'il ressemble à cela :

```python
from django import forms

from django.core.exceptions import ValidationError
from django.utils.translation import ugettext_lazy as _
import datetime #for checking renewal date range.

class RenewBookForm(forms.Form):
    renewal_date = forms.DateField(help_text="Enter a date between now and 4 weeks (default 3).")

    def clean_renewal_date(self):
        data = self.cleaned_data['renewal_date']

        #Check date is not in past.
        if data < datetime.date.today():
            raise ValidationError(_('Invalid date - renewal in past'))

        #Check date is in range librarian allowed to change (+4 weeks).
        if data > datetime.date.today() + datetime.timedelta(weeks=4):
            raise ValidationError(_('Invalid date - renewal more than 4 weeks ahead'))

        # Remember to always return the cleaned data.
        return data
```

Il y a deux choses importantes à noter. La première est que nous accédons à nos données en utilisant `self.cleaned_data['renewal_date']`, et que nous retournons ces données, que nous les ayons changées ou non, à la fin de la fonction. Cette étape nous donne des données "nettoyées", purgées de valeurs potentiellement dangereuses en utilisant les validateurs par défaut, et converties en type standard correct pour les données considérées (dans ce cas un objet Python `datetime.datetime`).

Le deuxième point est que, si une valeur tombe en dehors de l'intervalle que nous avons autorisé, nous levons une `ValidationError`, en spécifiant le texte d'erreur que nous voulons afficher dans la zone du formulaire prévue pour le cas où l'utilisateur entre une valeur incorrecte. L'exemple ci-dessus enveloppe aussi ce texte dans `ugettext_lazy()` (importée comme `_()`), une des [fonctions de traduction Django](https://docs.djangoproject.com/en/2.1/topics/i18n/translation/), ce qui est une bonne pratique si vous voulez traduire votre site plus tard.

> **Note :** Il y a un grand nombre d'autres méthodes et exemples au sujet de la validation des formulaires dans [Form and field validation](https://docs.djangoproject.com/en/2.1/ref/forms/validation/) (Django Docs). Par exemple, au cas où vous avez plusieurs champs dépendants les uns des autres, vous pouvez réécrire la fonction [Form.clean()](https://docs.djangoproject.com/en/2.1/ref/forms/api/#django.forms.Form.clean), et lever de nouveau une `ValidationError`.

C'est tout ce dont nous avons besoin pour notre formulaire dans cet exemple.

### Configuration d'URL

Avant de créer notre vue, ajoutons une configuration d'URL pour la page _renew-books_. Copiez la configuration suivante à la fin de **locallibrary/catalog/urls.py**.

```python
urlpatterns += [
 url(r'^book/(?P<pk>[-\w]+)/renew/$', views.renew_book_librarian, name='renew-book-librarian'),
]
```

La configuration d'URL va rediriger les URLs ayant le format **/catalog/book/_\<bookinstance id>_/renew/** vers la fonction appelée `renew_book_librarian()` dans **views.py**, et envoyer l'id de `BookInstance` comme paramètre sous le nom `pk`. Le pattern ne fonctionnera que si `pk` est un `uuid` correctement formaté.

> **Note :** Nous pouvons appeler comme bon nous semble la donnée d'URL "`pk`" que nous avons capturée, car nous contrôlons complètement la fonction de notre _view_ (nous n'utilisons pas une vue générique _detail_, laquelle attendrait des paramètres avec un certain nom). Cependant, le raccourci `pk`, pour "primary key", est une convention qu'il est raisonnable d'utiliser !

### Vue

Comme nous l'avons expliqué ci-dessus dans [Django form handling process](/fr/docs/Learn/Server-side/Django/Forms#django_form_handling_process), la vue doit retourner le formulaire par défaut s'il est appelé pour la première fois, et ensuite soit le retourner à nouveau avec les messages d'erreur si les données sont invalides, soit gérer les données et rediriger vers une nouvelle page si elles sont valides. Pour effectuer ces différentes actions, la vue doit être en mesure de savoir si elle est appelée pour la première fois (et retourner le formulaire par défaut) ou pour la deuxième fois ou plus (et valider les données).

Pour les formulaires qui utilisent une requête `POST` pour envoyer une information au serveur, la manière la plus commune de procéder pour la vue est de tester le type de requête `POST` (`if request.method == 'POST':`) pour repérer des requêtes de type validation de formulaire, et `GET` (en utilisant une condition `else`) pour identifer une requête initiale de création de formulaire. Si vous voulez utiliser une requête `GET` pour envoyer vos données, alors une approche classique pour savoir si la vue est invoquée pour la première fois ou non est de lire les données du formulaire (p. ex. lire une valeur cachée dans le formulaire).

Le processus de renouvellement de livre va écrire dans notre base de données, aussi, par convention, nous utiliserons le type de requête `POST`. Le bout de code ci-dessous montre le procédé (très classique) pour cette sorte de vue basée sur des fonctions.

```python
import datetime

from django.shortcuts import get_object_or_404
from django.http import HttpResponseRedirect
from django.core.urlresolvers import reverse

from .forms import RenewBookForm

def renew_book_librarian(request, pk):
    book_inst=get_object_or_404(BookInstance, pk = pk)

    # If this is a POST request then process the Form data
    if request.method == 'POST':

        # Create a form instance and populate it with data from the request (binding):
        form = RenewBookForm(request.POST)

        # Check if the form is valid:
        if form.is_valid():
            # process the data in form.cleaned_data as required (here we just write it to the model due_back field)
            book_inst.due_back = form.cleaned_data['renewal_date']
            book_inst.save()

            # redirect to a new URL:
            return HttpResponseRedirect(reverse('all-borrowed') )

    # If this is a GET (or any other method) create the default form.
    else:
        proposed_renewal_date = datetime.date.today() + datetime.timedelta(weeks=3)
        form = RenewBookForm(initial={'renewal_date': proposed_renewal_date,})

    return render(request, 'catalog/book_renew_librarian.html', {'form': form, 'bookinst':book_inst})
```

Nous importons tout d'abord notre formulaire (`RenewBookForm`) et un certain nombre d'autres objets/méthodes utiles, dont nous nous servons dans le corps de la fonction de notre vue :

- [`get_object_or_404()`](https://docs.djangoproject.com/en/1.10/topics/http/shortcuts/#get-object-or-404) : Retourne un certain objet depuis un modèle, en se basant sur sa valeur "primary key", et lève une exception `Http404` (_not found_) si l'enregistrement n'existe pas.
- [`HttpResponseRedirect`](https://docs.djangoproject.com/en/1.10/ref/request-response/#django.http.HttpResponseRedirect) : Cette méthode crée une redirection vers une certaine URL (code de statut HTTP 302).
- [`reverse()`](https://docs.djangoproject.com/en/1.10/ref/urlresolvers/#django.urls.reverse) : Cette méthode génère une URL à partir d'un nom trouvé dans la configuration d'URL et un ensemble d'arguments. C'est l'équivalent Python du tag `url` que nous avons utilisé dans nos templates.
- [`datetime`](https://docs.python.org/3/library/datetime.html) : Une bibliothèque Python pour manipuler des dates et des heures.

Dans la vue, nous utilisons d'abord l'argument `pk` dans la fonction `get_object_or_404()`, afin d'obtenir la `BookInstance` courante (si cette instance n'existe pas, la vue se termine immédiatement et la page va afficher une erreur ). Si ce n'est _pas_ une requête `POST` (cas géré par la clause `else`), alors nous créons le formulaire par défaut en lui passant une valeur `initial` pour le champ `renewal_date` (comme montré en gras ci-dessous, c'est la date actuelle plus 3 semaines).

```python
 book_inst=get_object_or_404(BookInstance, pk = pk)

    # If this is a GET (or any other method) create the default form
    else:
        proposed_renewal_date = datetime.date.today() + datetime.timedelta(weeks=3)
        form = RenewBookForm(initial={'renewal_date': proposed_renewal_date,})

    return render(request, 'catalog/book_renew_librarian.html', {'form': form, 'bookinst':book_inst})
```

Après création du formulaire, nous appelons la fonction `render()` pour créer la page HTML, en précisant le template et un contexte qui contient notre formulaire. Dans ce cas, le contexte contient aussi notre `BookInstance`, que nous allons utiliser dans le template pour fournir des informations à propos du livre que nous sommes en train de renouveler.

En revanche, s'il s'agit d'une requête `POST`, alors nous créons notre objet `form` et le peuplons avec des données récupérées dans la requête. Ce processus est appelé "binding" (liaison) et nous permet de valider le formulaire. Ensuite nous vérifions que le formulaire est valide, ce qui déclenche tout le code de validation sur tous les champs - ce qui inclut à la fois le code générique vérifiant que notre champ date est effectivement une date valide, et notre fonction `clean_renewal_date()`, spécifique à notre formulaire, pour vérifier que la date est dans le bon intervalle.

```python
    book_inst=get_object_or_404(BookInstance, pk = pk)

    # If this is a POST request then process the Form data
    if request.method == 'POST':

        # Create a form instance and populate it with data from the request (binding):
        form = RenewBookForm(request.POST)

        # Check if the form is valid:
        if form.is_valid():
            # process the data in form.cleaned_data as required (here we just write it to the model due_back field)
            book_inst.due_back = form.cleaned_data['renewal_date']
            book_inst.save()

            # redirect to a new URL:
            return HttpResponseRedirect(reverse('all-borrowed') )

    return render(request, 'catalog/book_renew_librarian.html', {'form': form, 'bookinst':book_inst})
```

Si le formulaire n'est pas valide, nous appelons aussi la fonction `render()`, mais cette fois les valeurs passées dans le contexte vont inclure les messages d'erreur.

Si le formulaire est valide, alors nous pouvons commencer à utiliser les données, en y accédant à travers l'attribut `form.cleaned_data` (p. ex. `data = form.cleaned_data['renewal_date']`). Ici nous ne faisons que sauvegarder dans la valeur `due_back` de l'objet `BookInstance` associé les données reçues.

> **Attention :** Alors que vous pouvez accéder aussi aux données de formulaire directement à travers la requête (par exemple `request.POST['renewal_date']`, ou `request.GET['renewal_date']` si vous utilisez une requête GET), ce n'est PAS recommandé. Les données nettoyées sont assainies, validées et converties en types standard Python.

L'étape finale dans la partie "gestion de formulaire" de la vue est de rediriger vers une autre page, habituellement une page "success". Dans ce cas, nous utilisons `HttpResponseRedirect` et `reverse()` pour rediriger vers la vue appelée `'all-borrowed'` (qui a été créée dans la partie "challenge" de [Django Tutorial Part 8: User authentication and permissions](/fr/docs/Learn/Server-side/Django/authentication_and_sessions#Challenge_yourself). Si vous n'avez pas créé cette page, vous pouvez rediriger vers la page d'accueil à l'URL '/').

C'est tout ce qui est requis pour la gestion du formulaire lui-même, mais il nous faut encore restreindre l'accès à la vue aux seuls libraires. Nous devrions sans doute créer un nouveau réglage de permission dans `BookInstance` ("`can_renew`"), mais, pour ne pour ne pas compliquer les choses ici, nous allons simplement utiliser le décorateur de fonction `@permission_required` avec notre permission existante `can_mark_returned`.

Le résultat final de la vue est donc comme indiqué ci-dessous. Veuillez copier ceci en bas de **locallibrary/catalog/views.py**.

    from django.contrib.auth.decorators import permission_required

    from django.shortcuts import get_object_or_404
    from django.http import HttpResponseRedirect
    from django.core.urlresolvers import reverse
    import datetime

    from .forms import RenewBookForm

    @permission_required('catalog.can_mark_returned')
    def renew_book_librarian(request, pk):
        """
        View function for renewing a specific BookInstance by librarian
        """
        book_inst=get_object_or_404(BookInstance, pk = pk)

        # If this is a POST request then process the Form data
        if request.method == 'POST':

            # Create a form instance and populate it with data from the request (binding):
            form = RenewBookForm(request.POST)

            # Check if the form is valid:
            if form.is_valid():
                # process the data in form.cleaned_data as required (here we just write it to the model due_back field)
                book_inst.due_back = form.cleaned_data['renewal_date']
                book_inst.save()

                # redirect to a new URL:
                return HttpResponseRedirect(reverse('all-borrowed') )

        # If this is a GET (or any other method) create the default form.
        else:
            proposed_renewal_date = datetime.date.today() + datetime.timedelta(weeks=3)
            form = RenewBookForm(initial={'renewal_date': proposed_renewal_date,})

        return render(request, 'catalog/book_renew_librarian.html', {'form': form, 'bookinst':book_inst})

### Le template

Créez le template référencé dans la vue (**/catalog/templates/catalog/book_renew_librarian.html**) et copiez-y le code suivant :

```html
{% extends "base_generic.html" %}
{% block content %}

 <h1>Renew: \{{bookinst.book.title}}</h1>
 <p>Borrower: \{{bookinst.borrower}}</p>
 <p{% if bookinst.is_overdue %} class="text-danger"{% endif %}>Due date: \{{bookinst.due_back}}</p>

 <form action="" method="post">
 {% csrf_token %}
 <table>
 \{{ form }}
  </table>
 <input type="submit" value="Submit" />
 </form>

{% endblock %}
```

La majeure partie de ce code devrait vous être familière si vous avez suivi les tutoriels précédents. Nous étendons le template de base et ensuite redéfinissons le block "content". Nous sommes en mesure de référencer `\{{ book_instance }}` (et ses variables), puisqu'il a été passé dans l'objet context par la fonction `render()`, et nous utilisons tout cela pour lister le titre du livre, son emprunteur et la date originale de retour.

Le code du formulaire est relativement simple. Nous déclarons d'abord les tags `form`, en précisant où le formulaire doit être adressé (`action`) et la `method` utilisée pour soumettre les donées (ici un "HTTP POST"). Si vous vous rappelez ce qui a été dit en haut de cette page (aperçu sur les [HTML Forms](/fr/docs/Learn/Server-side/Django/Forms#HTML_forms)), une `action` vide comme ici signifie que les données de formulaire seront postées à nouveau à l'URL actuelle (ce qui est le comportement que nous voulons !). À l'intérieur des tags, nous définissons le bouton , sur lequel l'utilisateur peut appuyer pour envoyer les données. Le `{% csrf_token %}` ajouté juste à l'intérieur des tags "form" est un des éléments de protection utilisés par Django contre les "cross-site forgery".

> **Note :** Ajoutez le `{% csrf_token %}` à tout template Django que vous créeez et qui utilise `POST` pour soumettre les données. Cela réduira les risques qu'un utilisateur mal intentionné pirate vos formulaires.

Tout ce qui reste est la variable de template `\{{ form }}`, que nous avons passée au template dans le dictionnaire de contexte. Peut-être sans surprise, quand il est utilisé comme indiqué, il fournit le rendu par défaut de tous les champs de formulaire, y compris leurs labels, widgets et textes d'aide. Voici le rendu :

```html
<tr>
  <th><label for="id_renewal_date">Renewal date:</label></th>
  <td>
  <input id="id_renewal_date" name="renewal_date" type="text" value="2016-11-08" required />
  <br />
  <span class="helptext">Enter date between now and 4 weeks (default 3 weeks).</span>
  </td>
</tr>
```

> **Note :** Ce n'est peut-être pas évident, car nous n'avons qu'un seul champ, mais, par défaut, chaque champ est défini dans sa propre ligne de tableau. Ce même rendu est fourni si vous référencez la variable de template `\{{ form.as_table }}`.

Si vous aviez entré une date invalide, vous obtiendriez en plus sur la page une liste des erreurs (indiquées en gras ci-dessous).

```html
<tr>
  <th><label for="id_renewal_date">Renewal date:</label></th>
  <td>
  <ul class="errorlist">
  <li>Invalid date - renewal in past</li>
  </ul>
  <input id="id_renewal_date" name="renewal_date" type="text" value="2015-11-08" required />
  <br />
  <span class="helptext">Enter date between now and 4 weeks (default 3 weeks).</span>
 </td>
</tr>
```

#### Autres façons d'utiliser la variable de template du formulaire

Si vous utilisez `\{{ form.as_table }}` comme indiqué ci-dessus, chaque champ est rendu comme une ligne de tableau. Vous pouvez également rendre chaque champ comme un élément de liste (en utilisant `\{{ form.as_ul }}`) ou comme un paragraphe (en utilisant `\{{ form.as_p }}`).

Il est également possible d'avoir un contrôle complet sur le rendu de chaque partie du formulaire, en indexant ses propriétés grâce à la notation pointée. Ainsi, par exemple, nous pouvons accéder un certain nombre d'éléments distincts pour notre champ `renewal_date` :

- `\{{form.renewal_date}}`  : Le champ complet.
- `\{{form.renewal_date.errors}}` : La liste des erreurs.
- `\{{form.renewal_date.id_for_label}}` : L'id du label.
- `\{{form.renewal_date.help_text}}` : Le texte d'aide du champ.
- etc !

Pour plus d'exemples sur la manière de rendre manuellement des formulaires dans des templates, et boucler de manière dynamique sur les champs du template, voyez [Working with forms > Rendering fields manually](https://docs.djangoproject.com/en/1.10/topics/forms/#rendering-fields-manually) (Django docs).

### Tester la page

Si vous avez accepté le "challenge" dans [Django Tutorial Part 8: User authentication and permissions](/fr/docs/Learn/Server-side/Django/authentication_and_sessions#Challenge_yourself), vous avez une liste de tous les livres empruntés dans la bibliothèque, ce qui n'est visible que pour le staff de la bibliothèque. Nous pouvons ajouter un lien vers notre page de renouvellement après chaque élément, en utilisant le code de template suivant.

```html
{% if perms.catalog.can_mark_returned %}- <a href="{% url 'renew-book-librarian' bookinst.id %}">Renew</a> {% endif %}
```

> **Note :** Souvenez-vous que votre login de test devra avoir la permission "`catalog.can_mark_returned`" pour pouvoir accéder la page de renouvellement de livre (utilisez peut-être votre compte superuser).

Vous pouvez aussi construire manuellement une URL de test comme ceci : [http://127.0.0.1:8000/catalog/book/*\<bookinstance_id>*/renew/](<http://127.0.0.1:8000/catalog/book/\<bookinstance id\>/renew/>) (un id de bookinstance valide peut être obtenu en navigant vers une page de détail de livre dans votre bibliothèque, et en copiant le champ `id`).

### À quoi cela ressemble-t-il ?

Si tout a bien marché, le formulaire par défaut ressemblera à ceci :

![](forms_example_renew_default.png)

Le formulaire avec valeur erronée ressemblera à ceci :

![](forms_example_renew_invalid.png)

La liste de tous les livres avec les liens vers le renouvellement ressemblera à ceci :

![](forms_example_renew_allbooks.png)

## ModelForms

Créer une classe  en utilisant l'approche décrite ci-dessus est très flexible et vous autorise à créer le type de page de formulaire que vous voulez, et à l'associer à tout type de modèle(s).

Cependant, si vous avez seulement besoin d'un formulaire qui répertorie les champs d'un modèle unique, alors votre modèle définira déjà la plupart des informations requises dans votre formulaire : champs, labels, texte d'aide etc. Plutôt que de créer à nouveau les définitions du modèle dans votre formulaire, il est plus facile d'utiliser la classe d'aide [ModelForm](https://docs.djangoproject.com/en/2.1/topics/forms/modelforms/) pour créer le formulaire d'après votre modèle. Ce `ModelForm` peut dès lors être utilisé à l'intérieur de vos vues exactement de la même manière qu'un `Form` ordinaire.

Un `ModelForm` basique, contenant le même champ que notre `RenewBookForm` d'origine, est montré ci-dessous. Tout ce que vous avez à faire pour créer le formulaire, c'est ajouter `class Meta` avec le `model` (`BookInstance`) associé, et une liste des `fields` du modèle à inclure dans le formulaire (vous pouvez inclure tous les champs en utilisant `fields = '__all__'`, ou bien utiliser `exclude` (au lieu de `fields`) pour préciser les champs à ne _pas_ importer du modèle).

```python
from django.forms import ModelForm
from .models import BookInstance

class RenewBookModelForm(ModelForm):
 class Meta:
 model = BookInstance
 fields = ['due_back',]
```

> **Note :** Cela peut ne pas sembler beaucoup plus simple que d'utiliser un simple `Form`, et ça ne l'est effectivement pas dans ce cas, parce que nous n'avons qu'un seul champ. Cependant, si vous avez beaucoup de champs, cela peut réduire notablement la quantité de code !

Le reste de l'information vient des définitions de champ données par le modèle (par ex. les labels, les widgets, le texte d'aide, les messages d'erreur). S'ils ne sont pas suffisamment satisfaisants, nous pouvons les réécrire dans notre `class Meta`, en précisant un dictionnaire contenant le champ à modifier et sa nouvelle valeur. Par exemple, dans ce formulaire, nous pourrions souhaiter, pour notre champ, un label tel que "_Renewal date_" (plutôt que celui par défaut, basé sur le nom du champ : _Due Back_), et nous voulons aussi que notre texte d'aide soit spécifique à ce cas d'utilisation. La classe `Meta` ci-dessous vous montre comment réécrire ces champs, et vous pouvez pareillement définir `widgets` et `error_messages` si les valeurs par défaut ne sont pas suffisantes.

```python
class Meta:
 model = BookInstance
 fields = ['due_back',]
 labels = { 'due_back': _('Renewal date'), }
 help_texts = { 'due_back': _('Enter a date between now and 4 weeks (default 3).'), }
```

Pour ajouter une validation, vous pouvez utiliser la même approche que pour un `Form` normal : vous définissez une fonction appelée `clean_field_name()`, et vous levez des exceptions de type `ValidationError` pour les valeurs non valides. La seule différence par rapport à notre formulaire original, c'est que le champ de modèle est appelé `due_back` et non "`renewal_date`". Ce changement est nécessaire, dans la mesure où le champ correspondant dans `BookInstance` est appelé `due_back`.

```python
from django.forms import ModelForm
from .models import BookInstance

class RenewBookModelForm(ModelForm):
    def clean_due_back(self):
       data = self.cleaned_data['due_back']

  #Check date is not in past.
       if data < datetime.date.today():
           raise ValidationError(_('Invalid date - renewal in past'))

       #Check date is in range librarian allowed to change (+4 weeks)
       if data > datetime.date.today() + datetime.timedelta(weeks=4):
           raise ValidationError(_('Invalid date - renewal more than 4 weeks ahead'))

       # Remember to always return the cleaned data.
       return data

 class Meta:
 model = BookInstance
 fields = ['due_back',]
 labels = { 'due_back': _('Renewal date'), }
 help_texts = { 'due_back': _('Enter a date between now and 4 weeks (default 3).'), }
```

La classe `RenewBookModelForm` ci-dessus est maintenant fonctionnellement équivalente à notre `RenewBookForm` d'origine. Vous pourriez l'importer et l'utiliser partout où vous utilisez `RenewBookForm`, du moment que vous changez aussi de `renewal_date` en `due_back` le nom de variable du formulaire correspondant, comme dans la deuxième déclaration du formulaire : `RenewBookModelForm(initial={'due_back': proposed_renewal_date}`.

## Vues génériques d'édition

L'algorithme de gestion des formulaires que nous avons utilisé ci-dessus dans notre exemple de vue basée sur une fonction, représente un processus extrêmement commun dans vues destinées à éditer un formulaire. Django abstrait pour vous la plus grande partie de ce processus répétitif ("boilerplate") en proposant des [generic editing views](https://docs.djangoproject.com/en/2.1/ref/class-based-views/generic-editing/) pour les vues de création, éditition et suppression basées sur des modèles. Ces vues génériques non seulement assument le comportement d'une vue, mais elles créent automatiquement la classe de formulaire (un `ModelForm`) pour vous à partir du modèle.

> **Note :** En plus des vues d'édition décrites ici, il existe aussi une classe [FormView](https://docs.djangoproject.com/en/2.1/ref/class-based-views/generic-editing/#formview), qui se tient, en termes de rapport "flexibilité"/"effort codage", à mi-chemin entre notre vue basée sur une fonction et les autres vues génériques. En utilisant `FormView`, vous avez encore besoin de créer votre `Form`, mais vous n'avez pas besoin d'implémenter tous les éléments d'une gestion standard de formulaire. À la place, vous n'avez qu'à fournir une implémentation de la fonction qui sera appelée une fois que les données envoyées sont reconnues valides.

Dans cette section, nous allons utiliser des vues génériques d'édition pour créer des pages afin de pouvoir ajouter les fonctionnalités de création, d'édition et de suppression des enregistrements de type `Author` de notre bibliothèque, en fournissant efficacement une réimplémentation basique de certaines parties du site Admin (cela peut être intéressant si vous avez besoin d'offrir une fonctionnalité admin d'une manière plus flexible que ce qui peut être présenté par le site admin).

### Vues

Ouvrez le fichier vue (**locallibrary/catalog/views.py**) et ajoutez le bloc de code suivant à la fin :

```python
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy
from .models import Author

class AuthorCreate(CreateView):
 model = Author
 fields = '__all__'
 initial={'date_of_death':'12/10/2016',}

class AuthorUpdate(UpdateView):
 model = Author
 fields = ['first_name','last_name','date_of_birth','date_of_death']

class AuthorDelete(DeleteView):
 model = Author
 success_url = reverse_lazy('authors')
```

Comme vous pouvez le voir, pour les vues "créer", "modifier" et "supprimer", vous avez besoin de dériver respectivement des vues génériques `CreateView`, `UpdateView`, et `DeleteView`, et de définir ensuite le modèle associé.

Pour les cas "créer" et "modifier", vous devez aussi préciser les champs à afficher dans le formulaire (en utilisant la même syntaxe que pour la classe `ModelForm`). Dans ce cas, nous montrons à la fois la syntaxe pour afficher "tous" les champs, et comment vous pouvez les lister un par un. Vous pouvez aussi spécifier les valeurs initiales pour chacun des champs, en utilisant un dictionnaire de paires _nom_du_champ/valeur_ (ici nous définissons arbitrairement la date de mort, uniquement dans un but de démonstration - sans doute voudrez-vous l'enlever !). Par défaut, ces vues vont rediriger en cas de succès vers une page affichant l'élément nouvellement créé ou modifié, ce qui, dans notre cas, sera la vue "détail" d'un auteur, créée dans un précédent tutoriel. Vous pouvez spécifier un autre lieu de redirection en déclarant explicitement le paramètre `success_url` (comme indiqué dans la classe `AuthorDelete`).

La classe  ne requiert pas l'affichage d'aucun champ, aussi n'ont-ils pas besoin d'être précisés. Par contre il vous faut bien spécifier la `success_url`, car Django n'a pas de valeur par défaut pour cela. Dans ce cas, nous utilisons la fonction  pour rediriger vers notre liste d'auteurs après qu'un auteur ait été supprimé. `reverse_lazy()` est une version de `reverse()` exécutée mollement ("lazily"), que nous utilisons ici parce que nous fournissons une URL à un attribut de vue basée sur classe.

### Templates

Les vues "créer" et "modifier" utilisent le même template par défaut, lequel sera nommé d'après votre modèle : \*model_name**\*\_form.html** (vous pouvez changer le suffixe en autre chose que **\_form** en utilisant le champ `template_name_suffix` dans votre vue, par exemple `template_name_suffix = '_other_suffix'`).

Créez le fichier de template **locallibrary/catalog/templates/catalog/author_form.html**, et copiez-y le texte suivant.

```html
{% extends "base_generic.html" %}

{% block content %}

<form action="" method="post">
 {% csrf_token %}
 <table>
 \{{ form.as_table }}
 </table>
 <input type="submit" value="Submit" />

</form>
{% endblock %}
```

Ce formulaire est semblable à nos formulaires précédents et affiche les champs en utilisant un tableau. Notez aussi comment nous déclarons à nouveau le `{% csrf_token %}` pour nous assurer que nos formulaires résisteront à d'éventuelles attaques par CSRF (Cross Site Request Forgery).

La vue "supprimer" s'attend à trouver un template avec un nom au format \*model_name**\*\_confirm_delete.html** (de nouveau, vous pouvez changer le suffixe en utilisant `template_name_suffix` dans votre vue). Créez le fichier de template **locallibrary/catalog/templates/catalog/author_confirm_delete.html**, et copiez-y le texte suivant.

```html
{% extends "base_generic.html" %}

{% block content %}

<h1>Delete Author</h1>

<p>Are you sure you want to delete the author: \{{ author }}?</p>

<form action="" method="POST">
 {% csrf_token %}
 <input type="submit" action="" value="Yes, delete." />
</form>

{% endblock %}
```

### Configurations d'URL

Ouvrez votre fichier de configuration d'URL (**locallibrary/catalog/urls.py**) et ajoutez-y à la fin la configuration suivante :

```python
urlpatterns += [
 url(r'^author/create/$', views.AuthorCreate.as_view(), name='author_create'),
 url(r'^author/(?P<pk>\d+)/update/$', views.AuthorUpdate.as_view(), name='author_update'),
 url(r'^author/(?P<pk>\d+)/delete/$', views.AuthorDelete.as_view(), name='author_delete'),
]
```

Il n'y a rien de particulièrement nouveau ici ! Vous pouvez voir que les vues sont des classes, et doivent dès lors être appelée via `.as_view()`, et vous devriez être capable de reconnaître les patterns d'URL dans chaque cas. Nous devons utiliser `pk` comme nom pour la valeur de nos clés primaires capturées, car c'est le nom de paramètre attendu par les classes de vue.

Les pages de création, modification et suppression d'auteur sont maintenant prêtes à être testées (nous ne nous mettons pas en peine pour cette fois, bien que vous puissiez le faire si vous le souhaiter, de les accrocher dans la barre latérale du site).

> **Note :** Les utilisateurs observateurs auront remarqué que nous n'avons rien fait pour empêcher les utilisateurs non autorisés d'accéder ces pages ! Nous laissons cela comme exercice pour vous (suggestion : vous pourriez utiliser le `PermissionRequiredMixin`, et soit créer une nouvelle permission, soit réutiliser notre permission`can_mark_returned` ).

### Test de la page

Tout d'abord, connectez-vous au site avec un compte ayant les permissions que vous avez définies comme nécessaires pour accéder aux pages d'édition d'auteur.

Ensuite naviguez à la page de création d'auteur : <http://127.0.0.1:8000/catalog/author/create/>, ce qui devrait ressembler à la capture d'écran ci-dessous.

![Form Example: Create Author](forms_example_create_author.png)

Entrez des valeurs pour les champs et ensuite cliquez sur **Submit** pour sauvegarder l'enregistrement de cet auteur. Vous devriez maintenant être conduit à une vue "détail" pour votre nouvel auteur, avec une URL du genre _http\://127.0.0.1:8000/catalog/author/10_.

Vous pouvez tester l'édition d'un enregistrement en ajoutant */update/* à la fin de l'URL "détail" (par exemple _http\://127.0.0.1:8000/catalog/author/10/update/_). Nous ne mettons pas de capture d'écran, car c'est à peu près la même chose que la page "create".

Enfin, nous pouvons effacer l'enregistrement en ajoutant "delete" à la fin de l'URL de détail (par exemple _http\://127.0.0.1:8000/catalog/author/10/delete/_). Django devrait vous afficher la page de suppression montrée ci-dessous. Cliquez sur "**Yes, delete**" pour supprimer l'enregistrement et être reconduit à la liste des auteurs.

![](forms_example_delete_author.png)

## Mettez-vous au défi

Créez des formulaires pour créer, modifier et effacer des enregistrements de type `Book`. Vous pouvez utiliser exactement la même structure que pour les `Authors`. Si votre template **book_form.html** est simplement copié-renommé à partir du template **author_form.html**, alors la nouvelle page "create book" va ressembler à quelque chose comme ceci :

![](forms_example_create_book.png)

## Résumé

Créer et gérer des formulaires peut être un processus compliqué ! Django le rend bien plus aisé en fournissant des mécanismes de programmation pour déclarer, rendre et valider des formulaires. Django fournit de plus des vues génériques d'édition de formulaires, qui peuvent faire presque tout le travail si vous voulez définir des pages pour créer, modifier et supprimer des enregistrements associés à une instance d'un modèle unique.

Il y a bien d'autres choses qui peuvent être faites avec les formulaires (regardez notre liste [See also](/fr/docs/Learn/Server-side/Django/Forms#See_also) ci-dessous), mais vous devez être maintenant en mesure de comprendre comment ajouter des formulaires basiques et un code de gestion de formulaire à vos propres sites web.

## See also

- [Working with forms](https://docs.djangoproject.com/en/1.10/topics/forms/) (Django docs)
- [Writing your first Django app, part 4 > Writing a simple form](https://docs.djangoproject.com/en/1.10/intro/tutorial04/#write-a-simple-form) (Django docs)
- [The Forms API](https://docs.djangoproject.com/en/1.10/ref/forms/api/) (Django docs)
- [Form fields](https://docs.djangoproject.com/en/1.10/ref/forms/fields/) (Django docs)
- [Form and field validation](https://docs.djangoproject.com/en/1.10/ref/forms/validation/) (Django docs)
- [Form handling with class-based views](https://docs.djangoproject.com/en/1.10/topics/class-based-views/generic-editing/) (Django docs)
- [Creating forms from models](https://docs.djangoproject.com/en/1.10/topics/forms/modelforms/) (Django docs)
- [Generic editing views](https://docs.djangoproject.com/en/1.10/ref/class-based-views/generic-editing/) (Django docs)

{{PreviousMenuNext("Learn/Server-side/Django/authentication_and_sessions", "Learn/Server-side/Django/Testing", "Learn/Server-side/Django")}}
