---
title: "Django didactique - Section 9 : Travailler avec des formulaires"
slug: Learn/Server-side/Django/Forms
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/authentication_and_sessions", "Learn/Server-side/Django/Testing", "Learn/Server-side/Django")}}

Dans cette formation, nous allons vous montrer comment travailler avec les formulaires HTML sous Django afin de créer, modifier et supprimer des instances de modèle. Pour illustrer le raisonnement, nous allons étendre le site web [LocalLibrary](/fr/docs/Learn/Server-side/Django/Tutorial_local_library_website) pour permettre aux bibliothécaires d'utiliser nos formulaires (plutôt que l'application d'administration par défaut) pour prolonger la durée de prêt des livres, et également pour ajouter, mettre à jour et supprimer des auteurs.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Avoir terminé les formations précédentes, y compris <a href="/fr/docs/Learn/Server-side/Django/authentication_and_sessions">Django didactique - section 8&nbsp;: Authentification de l'utilisateur et permissions</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs&nbsp;:</th>
      <td>
        Comprendre comment écrire des formulaires pour récupérer des informations de la part des utilisateurs et mettre à jour la base de données. Comprendre comment il est possible de simplifier grandement la création de formulaires si l'on travaille avec un seul modèle en utilisant les vues génériques de formulaires d'éditions s'appuyant sur des classes.
      </td>
    </tr>
  </tbody>
</table>

## Vue d'ensemble

Un [formulaire HTML](/fr/docs/Learn/Forms) regroupe au moins un champ remplissable et des composants élémentaires d'interface web. Il peut être utilisé pour réunir des saisies de la part des utilisateurs avant envoi vers un serveur. Les formulaires sont souples : ils s'adaptent à plusieurs modes de saisie. En effet, il existe des composants élémentaires d'interface graphique pour des modes de saisie non contrainte avec une zone de saisie de texte, ou restreinte au type `date` avec un sélecteur de date (<i lang="en">date picker</i>), la saisie d'un variable optionnelle via une boîte à cocher, d'un choix à faire parmi plusieurs valeurs possibles avec les boutons radio, etc. Les formulaires permettent de partager des informations avec le serveur de manière relativement sécurisée, car ils permettent d'envoyer des requêtes de type `POST` avec une protection contre la falsification des requêtes inter-site.

Bien que nous n'ayons pas encore créé de formulaire au cours de cette formation, nous en avons déjà rencontré sur l'interface d'administration Django Admin — par exemple, la capture d'écran ci-dessous montre un formulaire d'édition de l'un de nos modèles de [Book](/fr/docs/Learn/Server-side/Django/Models) (livre), comprenant des composants élémentaires d'interface graphique de choix de valeur parmi une liste proposée, et des zones de saisie de texte.

![Écran d'administration du site - Ajout d'un livre](admin_book_add.png)

Travailler avec des formulaires peut s'avérer compliqué&nbsp;! Les développeuses et développeurs doivent non seulement écrire le code HTML pour le formulaire, mais aussi vérifier et corriger sur le serveur les données saisies (et éventuellement aussi dans le navigateur), renvoyer le formulaire avec des messages d'erreur pour informer les usagers de tout champ invalide, prendre en charge les données quand elles passent l'étape de vérification, et finalement renvoyer une information à l'utilisateur d'une manière ou d'une autre pour indiquer ce succès. Les formulaires sous Django enlèvent beaucoup de travail à chacune de ces étapes, grâce à un cadriciel qui permet de déclarer des formulaires et leurs champs à travers un langage de programmation, puis d'utiliser ces objets non seulement pour générer le code HTML, mais aussi une grosse partie de la vérification des données et du retour d'information à l'utilisateur.

Dans cette formation, nous allons vous montrer quelques-unes des manières de créer et de travailler avec les formulaires, et en particulier, comment les vues sur les formulaires génériques d'édition peuvent réduire significativement la quantité de travail à fournir pour créer les formulaires de manipulation de vos modèles. En chemin, nous allons étendre notre application _LocalLibrary_ en ajoutant un formulaire permettant aux bibliothécaires de prolonger le prêt de livres, et nous allons créer des pages pour créer, modifier et supprimer des livres et des auteurs (reproduisant une version basique du formulaire ci-dessus pour éditer des livres).

## Formulaires HTML

D'abord, un premier aperçu des [formulaires HTML](/fr/docs/Learn/Forms). Soit un formulaire HTML simple, composé d'un unique champ de saisie texte, présent pour y entrer le nom d'une «&nbsp;équipe&nbsp;» quelconque et sa description dans l'étiquette associée&nbsp;:

![Champ textuel simple d'un formulaire HTML pour saisir un nom](form_example_name_field.png)

Le formulaire est défini en HTML comme une collection d'éléments enfermés entre deux balises `<form>...</form>` contenant au moins une balise `<input>` dont la valeur d'attribut `type` doit valoir `submit`&nbsp;:

```html
<form action="/team_name_url/" method="post">
  <label for="team_name">Enter name: </label>
  <input
    id="team_name"
    type="text"
    name="name_field"
    value="Default name for team." />
  <input type="submit" value="OK" />
</form>
```

Bien qu'ici nous n'ayons qu'un champ de saisie de texte destiné à recevoir le nom d'équipe, un formulaire _pourrait_ avoir un nombre quelconque d'autres champs de saisie et leurs étiquettes de description associées. La valeur de l'attribut `type` définit la sorte de composant élémentaire d'interface graphique affichée. Les attributs `id` et `name` permettent d'identifier le champ en JavaScript/CSS/HTML alors que l'attribut `value` définit la valeur initiale du champ lorsqu'il est affiché pour la première fois. La description associée est déclarée par la balise `<label>` (voir «&nbsp;Enter Name&nbsp;» au-dessus), avec un attribut `for` devant contenir la valeur de l'attribut `id` du champ `input` auquel on souhaite l'associer.

La balise `<input>` dont l'attribut `type` vaut `submit` sera affichée (par défaut) comme un bouton qui peut être cliqué par l'utilisatrice ou l'utilisateur pour envoyer vers le serveur les données figurant dans tous les autres éléments de formulaire `<input>` (dans le cas présent, la valeur actuelle de `team_name`). Les attributs de formulaire déterminent d'une part la méthode HTTP (attribut `method`) utilisée pour envoyer les données et d'autre part la destination des données sur le serveur (attribut `action`)&nbsp;:

- `action`&nbsp;: Il s'agit de la destination (ressource ou URL) où sont envoyées les données lorsque le formulaire est soumis. Si la valeur de cet attribut n'est pas initialisée (ou la chaîne vide est affectée à cet attribut), alors le formulaire sera renvoyé à l'URL de la page courante.
- `method`&nbsp;: La méthode HTTP utilisée pour envoyer les données&nbsp;: _post_ ou _get_.

  - La méthode `POST` devrait toujours être utilisée si l'envoi de la donnée va provoquer un changement dans la base de données du serveur, car il peut être rendu plus résistant aux attaques par falsification de requête inter-site (CSRF).
  - La méthode `GET` ne devrait être utilisée que pour les formulaires ne changeant pas les données utilisateur (par exemple, un formulaire de recherche). Elle est recommandée lorsque vous souhaitez pouvoir partager l'URL ou la conserver dans vos favoris.

Le rôle du serveur est d'abord de fournir le formulaire sous sa forme initiale — c'est-à-dire une série de champs soit vides, soit préremplis avec des valeurs initiales. Après l'impulsion de l'utilisateur sur le bouton `submit`, le serveur va recevoir les données du formulaire avec les valeurs saisies dans le navigateur, et va devoir vérifier ces données. Si le formulaire contient des données invalides, le serveur devrait afficher le formulaire de nouveau, cette fois-ci avec les données utilisateur entrées dans les champs "valides" et des messages pour décrire le problème pour les champs invalides. Dès que le serveur reçoit une requête dont toutes les données du formulaire sont valides, il peut effectuer les actions appropriées (par exemple, sauver les données, renvoyer le résultat d'une recherche, téléverser un fichier, etc.) et ensuite notifier l'utilisateur.

Comme vous pouvez l'imaginer, créer le code HTML, vérifier les données envoyées, réafficher les données entrées avec l'adjonction de rapports sur les erreurs, effectuer les opérations désirées sur les données valides peut représenter pas mal d'efforts de réflexion et d'essais-erreurs. Django rend cela bien plus facile, en enlevant la nécessité de concevoir une partie de ce code pénible et répétitif&nbsp;!

## Les étapes de gestion d'un formulaire avec Django

Django gère un formulaire en utilisant les mêmes techniques qu'évoquées lors des formations précédentes (pour afficher des informations à propos de nos modèles)&nbsp;: la vue reçoit une requête, exécute toute action nécessaire, incluant la lecture de données depuis les modèles, puis génère une page HTML (à partir d'un squelette auquel nous transmettons un _contexte_ contenant les données à afficher). Ce qui rend les choses plus compliquées, c'est que le serveur a aussi besoin d'être capable de traiter les données fournies par l'utilisateur (pas seulement le contexte) et doit pouvoir réafficher les pages s'il y a une quelconque erreur.

Voici ci-dessous un diagramme représentant les étapes de gestion d'un formulaire de requêtes, commençant par la demande par le navigateur d'une page, dont le code HTML se trouve contenir un formulaire (en vert).

![Document décrivant le processus de mise à jour d'un formulaire.](form_handling_-_standard.png)

En se basant sur la lecture du diagramme ci-dessus, les tâches principales dont s'acquitte Django à l'occasion de la gestion d'un formulaire sont&nbsp;:

1. Afficher le formulaire sous sa forme par défaut la première fois où il est demandé par l'utilisateur.

   - Le formulaire peut contenir des champs vides (par exemple, si vous créez un nouvel enregistrement), ou il peut être prérempli de valeurs initiales (par exemple, si vous modifiez les valeurs d'un enregistrement existant, ou que ces champs ont des valeurs initiales utiles).
   - Le formulaire est qualifié à cette étape de _formulaire libre_, parce qu'il n'est associé à aucune donnée entrée par l'utilisateur (bien qu'il puisse avoir des valeurs initiales).

2. Recevoir des données d'une requête d'envoi de données et les lier au formulaire.

   - Lier les données au formulaire signifie que les données entrées par l'utilisateur, ainsi que les erreurs éventuelles, sont accessibles lorsque nous avons besoin de réafficher le formulaire.

3. Nettoyer et valider les données.

   - Le nettoyage de données consiste à désinfecter la saisie (par exemple, en supprimant les caractères non valides, et qui pourraient être utilisés pour envoyer du contenu malveillant au serveur) et à convertir ces données en types Python cohérents.
   - La validation vérifie que les valeurs envoyées sont appropriées au champ (par exemple, dans le bon intervalle de dates, ni trop long ni trop court, etc.)

4. Si une donnée n'est pas valide, réafficher le formulaire, cette fois-ci avec les données déjà saisies par l'utilisateur et les messages d'erreur pour les champs en erreur.
5. Si toutes les données sont conformes, effectuer les actions demandées (par exemple, sauvegarder les données, envoyer un e-mail, renvoyer le résultat d'une recherche, télécharger un fichier, etc.)
6. Une fois toutes ces actions accomplies, rediriger l'utilisateur vers une autre page.

Django fournit une multitude d'outils et de méthodes pour vous assister dans les tâches mentionnées ci-dessus. Parmi eux, la plus importante est la classe `Form`, qui simplifie à la fois la production de formulaire HTML mais aussi la validation des données. Dans la section suivante, nous décrivons comment les formulaires fonctionnent en prenant l'exemple d'une page qui permet aux bibliothécaires de renouveler des livres.

> **Note :** Comprendre l'utilisation de `Form` vous aidera quand nous parlerons des classes de formulaires de Django plus complexes.

## Formulaire de renouvellement de livre par l'utilisation de Form et d'une vue fonctionnelle

Nous allons maintenant créer une page qui permettra aux bibliothécaires de renouveler les livres empruntés. Pour cela nous allons créer un formulaire qui permet aux utilisateurs de saisir une valeur de type `date`. Considérons le champ avec une valeur initiale égale à la date du jour plus 3 semaines (la période normale d'emprunt d'un livre), et ajoutons une validation pour s'assurer que le bibliothécaire ne peut pas saisir une date dans le passé ou une date trop éloignée dans le futur. Quand une date valide a été entrée, nous l'enregistrons dans le champ `BookInstance.due_back` de l'enregistrement courant.

L'exemple va utiliser une vue basée sur une fonction et une classe `Form`. Les sections suivantes expliquent comment les formulaires fonctionnent, et les changements que vous devez faire à notre projet en cours _LocalLibrary_.

### Formulaire

La classe `Form` est le cœur du système de gestion des formulaires de Django. Elle spécifie les champs présents dans le formulaire, affiche les widgets, les labels, les valeurs initiales, les valeurs valides et (après validation) les messages d'erreur associés aux champs invalides. Cette classe fournit également des méthodes pour se restituer elle-même dans les templates en utilisant des formats prédéfinis (tableaux, listes, etc.) ou pour obtenir la valeur de chaque élément de formulaire (permettant un rendu manuel fin).

#### Déclarer un formulaire

La syntaxe de déclaration pour un `Form` est très semblable à celle utilisée pour déclarer un `Model` — elles partagent les mêmes types de champs (et des paramètres similaires). Cela est logique, puisque dans les deux cas nous avons besoin de nous assurer que chaque champ gère le bon type de données, se limite aux données valides, et a une description pour l'affichage/la documentation.

Les données de formulaire sont stockées dans un fichier application forms.py, à l'intérieur du répertoire de l'application. Créez et ouvrez le fichier **locallibrary/catalog/forms.py**. Pour créer un `Form`, nous importons la bibliothèque `forms`, dérivons une classe de la classe `Form`, et déclarons les champs du formulaire. Une classe très basique de formulaire pour notre formulaire de renouvellement de livre dans notre bibliothèque est montrée ci-dessous (ajoutez ceci à votre nouveau fichier)&nbsp;:

```python
from django import forms

class RenewBookForm(forms.Form):
  renewal_date = forms.DateField(help_text="Enter a date between now and 4 weeks (default 3).")
```

#### Champs de formulaire

Dans ce cas, nous avons un unique champ [`DateField`](https://docs.djangoproject.com/fr/3.1/ref/forms/fields/#datefield) pour entrer la date du renouvellement, qui sera rendue en HTML avec une valeur vide, le label par défaut "_Renewal date:_", et un texte utilitaire indiquant comment s'en servir&nbsp;: "_Enter a date between now and 4 weeks (default 3 weeks)._" Comme aucun des autres arguments optionnels ne sont spécifiés, le champ acceptera des dates en utilisant les [input_formats](https://docs.djangoproject.com/fr/3.1/ref/forms/fields/#django.forms.DateField.input_formats) suivants&nbsp;: YYYY-MM-DD (2016-11-06), MM/DD/YYYY (02/26/2016), MM/DD/YY (10/25/16), et sera rendu en utilisant le [widget](https://docs.djangoproject.com/fr/3.1/ref/forms/fields/#widget) par défaut&nbsp;: [DateInput](https://docs.djangoproject.com/fr/3.1/ref/forms/widgets/#django.forms.DateInput).

Il y a beaucoup d'autres types de champs, que vous reconnaîtrez sans peine en raison de leur ressemblance avec les classes de champs équivalentes pour les modèles : [`BooleanField`](https://docs.djangoproject.com/fr/3.1/ref/forms/fields/#booleanfield), [`CharField`](https://docs.djangoproject.com/fr/3.1/ref/forms/fields/#charfield), [`ChoiceField`](https://docs.djangoproject.com/fr/3.1/ref/forms/fields/#choicefield), [`TypedChoiceField`](https://docs.djangoproject.com/fr/3.1/ref/forms/fields/#typedchoicefield), [`DateField`](https://docs.djangoproject.com/fr/3.1/ref/forms/fields/#datefield), [`DateTimeField`](https://docs.djangoproject.com/fr/3.1/ref/forms/fields/#datetimefield), [`DecimalField`](https://docs.djangoproject.com/fr/3.1/ref/forms/fields/#decimalfield), [`DurationField`](https://docs.djangoproject.com/fr/3.1/ref/forms/fields/#durationfield), [`EmailField`](https://docs.djangoproject.com/fr/3.1/ref/forms/fields/#emailfield), [`FileField`](https://docs.djangoproject.com/fr/3.1/ref/forms/fields/#filefield), [`FilePathField`](https://docs.djangoproject.com/fr/3.1/ref/forms/fields/#filepathfield), [`FloatField`](https://docs.djangoproject.com/fr/3.1/ref/forms/fields/#floatfield), [`ImageField`](https://docs.djangoproject.com/fr/3.1/ref/forms/fields/#imagefield), [`IntegerField`](https://docs.djangoproject.com/fr/3.1/ref/forms/fields/#integerfield), [`GenericIPAddressField`](https://docs.djangoproject.com/fr/3.1/ref/forms/fields/#genericipaddressfield), [`MultipleChoiceField`](https://docs.djangoproject.com/fr/3.1/ref/forms/fields/#multiplechoicefield), [`TypedMultipleChoiceField`](https://docs.djangoproject.com/fr/3.1/ref/forms/fields/#typedmultiplechoicefield), [`NullBooleanField`](https://docs.djangoproject.com/fr/3.1/ref/forms/fields/#nullbooleanfield), [`RegexField`](https://docs.djangoproject.com/fr/3.1/ref/forms/fields/#regexfield), [`SlugField`](https://docs.djangoproject.com/fr/3.1/ref/forms/fields/#slugfield), [`TimeField`](https://docs.djangoproject.com/fr/3.1/ref/forms/fields/#timefield), [`URLField`](https://docs.djangoproject.com/fr/3.1/ref/forms/fields/#urlfield), [`UUIDField`](https://docs.djangoproject.com/fr/3.1/ref/forms/fields/#uuidfield), [`ComboField`](https://docs.djangoproject.com/fr/3.1/ref/forms/fields/#combofield), [`MultiValueField`](https://docs.djangoproject.com/fr/3.1/ref/forms/fields/#multivaluefield), [`SplitDateTimeField`](https://docs.djangoproject.com/fr/3.1/ref/forms/fields/#splitdatetimefield), [`ModelMultipleChoiceField`](https://docs.djangoproject.com/fr/3.1/ref/forms/fields/#modelmultiplechoicefield), [`ModelChoiceField`](https://docs.djangoproject.com/fr/3.1/ref/forms/fields/#modelchoicefield).

Les arguments communs à la plupart des champs sont listés ci-dessous (ils ont des valeurs sensibles par défaut)&nbsp;:

- [`required`](https://docs.djangoproject.com/fr/3.1/ref/forms/fields/#required)&nbsp;: Si `True`, le champ ne peut être laissé vide ou recevoir une valeur `None`. Les champs sont requis par défaut, aussi devez-vous préciser `required=False` pour autoriser des valeurs vides dans le formulaire.
- [`label`](https://docs.djangoproject.com/fr/3.1/ref/forms/fields/#label)&nbsp;: Le label à utiliser au moment de rendre le champ en HTML. Si [label](https://docs.djangoproject.com/fr/3.1/ref/forms/fields/#label) n'est pas précisé, alors Django en créera un à partir du nom du champ concerné, en mettant en majuscule la première lettre et en remplaçant les tirets bas par des espaces (par exemple, _Renewal date_).
- [`label_suffix`](https://docs.djangoproject.com/fr/3.1/ref/forms/fields/#label-suffix)&nbsp;: Par défaut, un double point est affiché après le label (par exemple, Renewal date&ZeroWidthSpace;**:**). Cet argument vous permet de préciser un suffixe différent contenant un ou plusieurs autres caractère(s).
- [`initial`](https://docs.djangoproject.com/fr/3.1/ref/forms/fields/#initial)&nbsp;: La valeur intiale pour le champ lorsque le formulaire est affiché.
- [`widget`](https://docs.djangoproject.com/fr/3.1/ref/forms/fields/#widget)&nbsp;: Le widget d'affichage à utiliser.
- [`help_text`](https://docs.djangoproject.com/fr/3.1/ref/forms/fields/#help-text) (comme dans l'exemple ci-dessus)&nbsp;: Un texte supplémentaire qui peut être affiché dans les formulaires pour expliquer comment utiliser le champ.
- [`error_messages`](https://docs.djangoproject.com/fr/3.1/ref/forms/fields/#error-messages)&nbsp;: Une liste des messages d'erreur pour le champ. Vous pouvez remplacer les messages par défaut par vos propres messages si besoin.
- [`validators`](https://docs.djangoproject.com/fr/3.1/ref/forms/fields/#validators)&nbsp;: Une liste de fonctions qui seront appelées quand le champ sera validé.
- [`localize`](https://docs.djangoproject.com/fr/3.1/ref/forms/fields/#localize)&nbsp;: Autorise la forme locale des données de formulaire (voir le lien pour plus d'informations).
- [`disabled`](https://docs.djangoproject.com/fr/3.1/ref/forms/fields/#disabled)&nbsp;: Si `True`, le champ est affiché, mais sa valeur ne peut être modifiée. `False` par défaut.

#### Validation

Django fournit un grand nombre d'endroits pour valider vos données. La façon la plus simple de valider un champ unique est de remplacer la méthode `clean_<fieldname>()` pour le champ à vérifier. Ainsi, par exemple, nous pouvons vérifier que les valeurs entrées pour le champ `renewal_date` sont entre maintenant et dans 4 semaines, en implémentant la méthode `clean_renewal_date()` comme montré ci-après.

Mettez à jour votre fichier forms.py, de telle sorte qu'il ressemble à cela&nbsp;:

```python
import datetime

from django import forms

from django.core.exceptions import ValidationError
from django.utils.translation import ugettext_lazy as _

class RenewBookForm(forms.Form):
  renewal_date = forms.DateField(help_text="Enter a date between now and 4 weeks (default 3).")

  def clean_renewal_date(self):
    data = self.cleaned_data['renewal_date']

    # Vérifier que la date ne se situe pas dans le passé.
    if data < datetime.date.today():
      raise ValidationError(_('Invalid date - renewal in past'))

      # Vérifier que la date tombe dans le bon intervalle (entre maintenant et dans 4 semaines).
    if data > datetime.date.today() + datetime.timedelta(weeks=4):
      raise ValidationError(_('Invalid date - renewal more than 4 weeks ahead'))

    # N'oubliez pas de toujours renvoyer les données nettoyées.
    return data
```

Il y a deux choses importantes à noter. La première est que nous accédons à nos données en utilisant `self.cleaned_data['renewal_date']` et que nous retournons ces données, que nous les ayons changées ou non, à la fin de la fonction. Cette étape nous donne des données "nettoyées", purgées de valeurs potentiellement dangereuses en utilisant les validateurs par défaut, et converties en type standard correct pour les données considérées (dans ce cas un objet Python `datetime.datetime`).

Le deuxième point est que, si une valeur tombe en dehors de l'intervalle que nous avons autorisé, nous levons une `ValidationError`, en spécifiant le texte d'erreur que nous voulons afficher dans la zone du formulaire prévue pour le cas où l'utilisateur entre une valeur non valide. L'exemple ci-dessus enveloppe aussi ce texte dans `ugettext_lazy()` (importée comme `_()`), une des [fonctions de traduction Django](https://docs.djangoproject.com/fr/3.1/topics/i18n/translation/), ce qui est une bonne pratique si vous voulez traduire votre site plus tard.

> **Note :** Il y a un grand nombre d'autres méthodes et exemples au sujet de la validation des formulaires dans [La validation de formulaires et de champs](https://docs.djangoproject.com/fr/3.1/ref/forms/validation/) (Documentation de Django). Par exemple, au cas où vous avez plusieurs champs dépendants les uns des autres, vous pouvez réécrire la fonction [Form.clean()](https://docs.djangoproject.com/fr/3.1/ref/forms/api/#django.forms.Form.clean), et lever de nouveau une `ValidationError`.

C'est tout ce dont nous avons besoin pour notre formulaire dans cet exemple.

### Configuration d'URL

Avant de créer notre vue, ajoutons une configuration d'URL pour la page _renew-books_. Copiez la configuration suivante à la fin de **locallibrary/catalog/urls.py**&nbsp;:

```python
urlpatterns += [
  path('book/<uuid:pk>/renew/', views.renew_book_librarian, name='renew-book-librarian'),
]
```

La configuration d'URL va rediriger les URLs ayant le format **/catalog/book/_\<bookinstance\_id>_/renew/** vers la fonction appelée `renew_book_librarian()` dans **views.py**, et envoyer l'`id` de `BookInstance` comme paramètre sous le nom `pk`. Le motif ne fonctionnera que si `pk` est un `uuid` correctement formaté.

> **Note :** Nous pouvons appeler comme bon nous semble la donnée d'URL "`pk`" que nous avons capturée, car nous contrôlons complètement la fonction de notre vue (nous n'utilisons pas une vue générique "détail", laquelle attendrait des paramètres avec un certain nom). Cependant, le raccourci `pk`, pour "primary key", est une convention qu'il est raisonnable d'utiliser&nbsp;!

### Vue

Comme nous l'avons expliqué ci-dessus dans [Les étapes de gestion d'un formulaire avec Django](#les_étapes_de_gestion_dun_formulaire_avec_django), la vue doit retourner le formulaire par défaut s'il est appelé pour la première fois, et ensuite soit le retourner à nouveau avec les messages d'erreur si les données sont invalides, soit gérer les données et rediriger vers une nouvelle page si elles sont valides. Pour effectuer ces différentes actions, la vue doit être en mesure de savoir si elle est appelée pour la première fois (et retourner le formulaire par défaut) ou pour la deuxième fois ou plus (et valider les données).

Pour les formulaires qui utilisent une requête `POST` pour envoyer une information au serveur, la manière la plus commune de procéder pour la vue est de tester le type de requête `POST` (`if request.method == 'POST':`) pour repérer des requêtes de type validation de formulaire, et `GET` (en utilisant une condition `else`) pour identifier une requête initiale de création de formulaire. Si vous voulez utiliser une requête `GET` pour envoyer vos données, alors une approche classique pour savoir si la vue est invoquée pour la première fois ou non est de lire les données du formulaire (par exemple, lire une valeur cachée dans le formulaire).

Le processus de renouvellement de livre va écrire dans notre base de données, aussi, par convention, nous utiliserons le type de requête `POST`. Le bout de code ci-dessous montre le procédé (très classique) pour cette sorte de vue basée sur des fonctions.

```python
import datetime

from django.shortcuts import render, get_object_or_404
from django.http import HttpResponseRedirect
from django.urls import reverse

from catalog.forms import RenewBookForm

def renew_book_librarian(request, pk):
  book_instance = get_object_or_404(BookInstance, pk=pk)

  # S'il s'agit d'une requête POST, traiter les données du formulaire.
  if request.method == 'POST':

    # Créer une instance de formulaire et la peupler avec des données récupérées dans la requête (liaison) :
    form = RenewBookForm(request.POST)

    # Vérifier que le formulaire est valide :
    if form.is_valid():
      # Traiter les données dans form.cleaned_data tel que requis (ici on les écrit dans le champ de modèle due_back) :
      book_instance.due_back = form.cleaned_data['renewal_date']
      book_instance.save()

      # Rediriger vers une nouvelle URL :
      return HttpResponseRedirect(reverse('all-borrowed'))

  # S'il s'agit d'une requête GET (ou toute autre méthode), créer le formulaire par défaut.
  else:
    proposed_renewal_date = datetime.date.today() + datetime.timedelta(weeks=3)
    form = RenewBookForm(initial={'renewal_date': proposed_renewal_date})

  context = {
    'form': form,
    'book_instance': book_instance,
  }

  return render(request, 'catalog/book_renew_librarian.html', context)
```

Nous importons tout d'abord notre formulaire (`RenewBookForm`) et un certain nombre d'autres objets/méthodes utiles, dont nous nous servons dans le corps de la fonction de notre vue&nbsp;:

- [`get_object_or_404()`](https://docs.djangoproject.com/fr/3.1/topics/http/shortcuts/#get-object-or-404)&nbsp;: Retourne un certain objet depuis un modèle, en se basant sur sa valeur "primary key", et lève une exception `Http404` (_not found_) si l'enregistrement n'existe pas.
- [`HttpResponseRedirect`](https://docs.djangoproject.com/fr/3.1/ref/request-response/#django.http.HttpResponseRedirect)&nbsp;: Cette méthode crée une redirection vers une certaine URL (code de statut HTTP 302).
- [`reverse()`](https://docs.djangoproject.com/fr/3.1/ref/urlresolvers/#django.urls.reverse)&nbsp;: Cette méthode génère une URL à partir d'un nom trouvé dans la configuration d'URL et un ensemble d'arguments. C'est l'équivalent Python du tag `url` que nous avons utilisé dans nos templates.
- [`datetime`](https://docs.python.org/3/library/datetime.html)&nbsp;: Une bibliothèque Python pour manipuler des dates et des heures.

Dans la vue, nous utilisons d'abord l'argument `pk` dans la fonction `get_object_or_404()` afin d'obtenir la `BookInstance` courante (si cette instance n'existe pas, la vue se termine immédiatement et la page va afficher une erreur). Si ce n'est _pas_ une requête `POST` (cas géré par la clause `else`), alors nous créons le formulaire par défaut en lui passant une valeur `initial` pour le champ `renewal_date` (comme montré ci-dessous, c'est la date actuelle plus 3 semaines).

```python
  book_instance = get_object_or_404(BookInstance, pk=pk)

  # S'il s'agit d'une requête GET (ou toute autre méthode), créer le formulaire par défaut.
  else:
    proposed_renewal_date = datetime.date.today() + datetime.timedelta(weeks=3)
    form = RenewBookForm(initial={'renewal_date': proposed_renewal_date})

  context = {
    'form': form,
    'book_instance': book_instance,
  }

  return render(request, 'catalog/book_renew_librarian.html', context)
```

Après la création du formulaire, nous appelons la fonction `render()` pour créer la page HTML, en précisant le template et un contexte qui contient notre formulaire. Dans ce cas, le contexte contient aussi notre `BookInstance`, que nous allons utiliser dans le template pour fournir des informations à propos du livre que nous sommes en train de renouveler.

En revanche, s'il s'agit d'une requête `POST`, alors nous créons notre objet `form` et le peuplons avec des données récupérées dans la requête. Ce processus est appelé "_binding_" (liaison) et nous permet de valider le formulaire.

Ensuite nous vérifions que le formulaire est valide, ce qui déclenche tout le code de validation sur tous les champs — ce qui inclut à la fois le code générique vérifiant que notre champ de date est effectivement une date valide, et notre fonction `clean_renewal_date()`, spécifique à notre formulaire, pour vérifier que la date est dans le bon intervalle.

```python
book_instance = get_object_or_404(BookInstance, pk=pk)

  # S'il s'agit d'une requête POST, traiter les données du formulaire.
  if request.method == 'POST':

    # Créer une instance de formulaire et la peupler avec des données récupérées dans la requête (liaison) :
    form = RenewBookForm(request.POST)

    # Vérifier que le formulaire est valide :
    if form.is_valid():
      # Traiter les données dans form.cleaned_data tel que requis (ici on les écrit dans le champ de modèle due_back) :
      book_instance.due_back = form.cleaned_data['renewal_date']
      book_instance.save()

      # Rediriger vers une nouvelle URL :
      return HttpResponseRedirect(reverse('all-borrowed') )

  context = {
    'form': form,
    'book_instance': book_instance,
  }

  return render(request, 'catalog/book_renew_librarian.html', context)
```

Si le formulaire n'est pas valide, nous appelons à nouveau la fonction `render()`, mais cette fois les valeurs passées dans le contexte vont inclure les messages d'erreur.

Si le formulaire est valide, alors nous pouvons commencer à utiliser les données, en y accédant à travers l'attribut `form.cleaned_data` (par exemple, `data = form.cleaned_data['renewal_date']`). Ici, nous ne faisons que sauvegarder les données reçues dans la valeur `due_back` de l'objet `BookInstance` associé.

> **Attention :** Alors que vous pouvez accéder aussi aux données de formulaire directement à travers la requête (par exemple, `request.POST['renewal_date']`, ou `request.GET['renewal_date']` si vous utilisez une requête GET), ce n'est PAS recommandé. Les données nettoyées sont assainies, validées et converties en types standard Python.

L'étape finale dans la partie "gestion de formulaire" de la vue est de rediriger vers une autre page, habituellement une page "success". Dans ce cas, nous utilisons `HttpResponseRedirect` et `reverse()` pour rediriger vers la vue appelée `'all-borrowed'` (qui a été créée dans la partie "challenge" de [Django didactique section 8&nbsp;: Authentification des utilisateurs et permissions](/fr/docs/Learn/Server-side/Django/Authentication#challenge_yourself). Si vous n'avez pas créé cette page, vous pouvez rediriger vers la page d'accueil à l'URL '`/`').

C'est tout ce qui est requis pour la gestion du formulaire lui-même, mais il nous faut encore restreindre l'accès à la vue aux seuls libraires connectés. Nous utilisons `@login_required` en exigeant que l'utilisateur se soit connecté, et le décorateur de fonction `@permission_required` avec notre permission existante `can_mark_returned` afin d'autoriser l'accès (les décorateurs sont traités en séquence). À noter que nous aurions dû créer un nouveau réglage de permission dans `BookInstance` ("`can_renew`"), mais nous réutilisons celui existant pour garder l'exemple plus simple.

Le résultat final de la vue est donc comme indiqué ci-dessous. Veuillez copier ceci en bas de **locallibrary/catalog/views.py**.

```python
import datetime

from django.contrib.auth.decorators import login_required, permission_required
from django.shortcuts import get_object_or_404
from django.http import HttpResponseRedirect
from django.urls import reverse

from catalog.forms import RenewBookForm

@login_required
@permission_required('catalog.can_mark_returned', raise_exception=True)
def renew_book_librarian(request, pk):
  """View function for renewing a specific BookInstance by librarian."""
  book_instance = get_object_or_404(BookInstance, pk=pk)

  # S'il s'agit d'une requête POST, traiter les données du formulaire.
  if request.method == 'POST':

    # Créer une instance de formulaire et la peupler avec des données récupérées dans la requête (liaison) :
    form = RenewBookForm(request.POST)

    # Vérifier que le formulaire est valide :
    if form.is_valid():
      # Traiter les données dans form.cleaned_data tel que requis (ici on les écrit dans le champ de modèle due_back) :
      book_instance.due_back = form.cleaned_data['renewal_date']
      book_instance.save()

      # Rediriger vers une nouvelle URL :
      return HttpResponseRedirect(reverse('all-borrowed'))

  # S'il s'agit d'une requête GET (ou toute autre méthode), créer le formulaire par défaut.
  else:
    proposed_renewal_date = datetime.date.today() + datetime.timedelta(weeks=3)
    form = RenewBookForm(initial={'renewal_date': proposed_renewal_date})

  context = {
    'form': form,
    'book_instance': book_instance,
  }

  return render(request, 'catalog/book_renew_librarian.html', context)
```

### Le template

Créez le template référencé dans la vue (**/catalog/templates/catalog/book_renew_librarian.html**) et copiez-y le code suivant&nbsp;:

```django
{% extends "base_generic.html" %}

{% block content %}
  <h1>Renew: \{{ book_instance.book.title }}</h1>
  <p>Borrower: \{{ book_instance.borrower }}</p>
  <p {% if book_instance.is_overdue %} class="text-danger"{% endif %}>Due date: \{{ book_instance.due_back }}</p>

  <form action="" method="post">
    {% csrf_token %}
    <table>
    \{{ form.as_table }}
    </table>
    <input type="submit" value="Submit">
  </form>
{% endblock %}
```

La majeure partie de ce code devrait vous être familière si vous avez suivi les tutoriels précédents.

Nous étendons le template de base et ensuite redéfinissons le block "content". Nous sommes en mesure de référencer `\{{ book_instance }}` (et ses variables), puisqu'il a été passé dans l'objet contexte par la fonction `render()`, et nous utilisons tout cela pour lister le titre du livre, son emprunteur et la date originale de retour.

Le code du formulaire est relativement simple. Nous déclarons d'abord les balises `form`, en précisant où le formulaire doit être adressé (`action`) et la `method` utilisée pour soumettre les données (ici un "HTTP `POST`"). Si vous vous rappelez ce qui a été dit en haut de cette page (aperçu sur les [Formulaires HTML](#formulaires_html)), une `action` vide comme ici signifie que les données de formulaire seront postées à nouveau à l'URL actuelle (ce qui est le comportement que nous voulons !). À l'intérieur des balises, nous définissons le bouton `submit` sur lequel l'utilisateur peut appuyer pour envoyer les données. Le `{% csrf_token %}` ajouté juste à l'intérieur des balises `form` est un des éléments de protection utilisés par Django contre les "_cross-site forgery_" (falsification de requête inter-site).

> **Note :** Ajoutez le `{% csrf_token %}` à tout template Django que vous créez et qui utilise `POST` pour soumettre les données. Cela réduira les risques qu'un utilisateur mal intentionné pirate vos formulaires.

Tout ce qui reste est la variable de template `\{{ form }}`, que nous avons passée au template dans le dictionnaire de contexte. Peut-être sans surprise, quand il est utilisé comme indiqué, il fournit le rendu par défaut de tous les champs de formulaire, y compris leurs labels, widgets et textes d'aide. Voici le rendu&nbsp;:

```html
<tr>
  <th><label for="id_renewal_date">Renewal date:</label></th>
  <td>
    <input
      id="id_renewal_date"
      name="renewal_date"
      type="text"
      value="2016-11-08"
      required />
    <br />
    <span class="helptext"
      >Enter date between now and 4 weeks (default 3 weeks).</span
    >
  </td>
</tr>
```

> **Note :** Ce n'est peut-être pas évident, car nous n'avons qu'un seul champ, mais, par défaut, chaque champ est défini dans sa propre ligne de tableau. Ce même rendu est fourni si vous référencez la variable de template `\{{ form.as_table }}`.

Si vous aviez entré une date invalide, vous obtiendriez en plus sur la page une liste des erreurs (voir `errorlist` ci-dessous).

```html
<tr>
  <th><label for="id_renewal_date">Renewal date:</label></th>
  <td>
    <ul class="errorlist">
      <li>Invalid date - renewal in past</li>
    </ul>
    <input
      id="id_renewal_date"
      name="renewal_date"
      type="text"
      value="2015-11-08"
      required />
    <br />
    <span class="helptext"
      >Enter date between now and 4 weeks (default 3 weeks).</span
    >
  </td>
</tr>
```

#### Autres façons d'utiliser la variable de template du formulaire

Si vous utilisez `\{{ form.as_table }}` comme indiqué ci-dessus, chaque champ est rendu comme une ligne de tableau. Vous pouvez également rendre chaque champ comme un élément de liste (en utilisant `\{{ form.as_ul }}`) ou comme un paragraphe (en utilisant `\{{ form.as_p }}`).

Il est également possible d'avoir un contrôle complet sur le rendu de chaque partie du formulaire, en indexant ses propriétés grâce à la notation pointée. Ainsi, par exemple, nous pouvons accéder à un certain nombre d'éléments distincts pour notre champ `renewal_date` :

- `\{{ form.renewal_date }}` : Le champ complet.
- `\{{ form.renewal_date.errors }}` : La liste des erreurs.
- `\{{ form.renewal_date.id_for_label }}` : L'`id` du label.
- `\{{ form.renewal_date.help_text }}` : Le texte d'aide du champ.

Pour plus d'exemples sur la manière de rendre manuellement des formulaires dans des templates, et boucler de manière dynamique sur les champs du template, voyez [Utiliser des formulaires > Affichage manuel des champs](https://docs.djangoproject.com/fr/3.1/topics/forms/#rendering-fields-manually) (Documentation de Django).

### Tester la page

Si vous avez accepté le "challenge" dans [Django didactique - section 8&nbsp;: Authentification des utilisateurs et permissions](/fr/docs/Learn/Server-side/Django/Authentication#challenge_yourself), vous avez une liste de tous les livres empruntés dans la bibliothèque, ce qui n'est visible que pour le staff de la bibliothèque. Nous pouvons ajouter un lien vers notre page de renouvellement après chaque élément, en utilisant le code de template suivant.

```django
{% if perms.catalog.can_mark_returned %}
  <a href="{% url 'renew-book-librarian' bookinst.id %}">Renew</a>
{% endif %}
```

> **Note :** Souvenez-vous que votre login de test devra avoir la permission "`catalog.can_mark_returned`" pour pouvoir accéder à la page de renouvellement de livre (utilisez peut-être votre compte superuser).

Vous pouvez aussi construire manuellement une URL de test comme ceci&nbsp;: `http://127.0.0.1:8000/catalog/book/<bookinstance_id>/renew/` (un `bookinstance_id` valide peut être obtenu en naviguant vers une page de détail de livre dans votre bibliothèque, et en copiant le champ `id`).

### À quoi cela ressemble-t-il&nbsp;?

Si tout a bien marché, le formulaire par défaut ressemblera à ceci&nbsp;:

![](forms_example_renew_default.png)

Le formulaire avec valeur erronée ressemblera à ceci&nbsp;:

![](forms_example_renew_invalid.png)

La liste de tous les livres avec les liens vers le renouvellement ressemblera à ceci&nbsp;:

![](forms_example_renew_allbooks.png)

## ModelForms

Créer une classe en utilisant l'approche décrite ci-dessus est très flexible et vous autorise à créer le type de page de formulaire que vous voulez, et à l'associer à tout type de modèle(s).

Cependant, si vous avez seulement besoin d'un formulaire qui répertorie les champs d'un modèle _unique_, alors votre modèle définira déjà la plupart des informations requises dans votre formulaire : champs, labels, texte d'aide, etc. Plutôt que de créer à nouveau les définitions du modèle dans votre formulaire, il est plus facile d'utiliser la classe d'aide [ModelForm](https://docs.djangoproject.com/fr/3.1/topics/forms/modelforms/) pour créer le formulaire d'après votre modèle. Ce `ModelForm` peut dès lors être utilisé à l'intérieur de vos vues exactement de la même manière qu'un `Form` ordinaire.

Un `ModelForm` basique, contenant le même champ que notre `RenewBookForm` d'origine, est montré ci-dessous. Tout ce que vous avez à faire pour créer le formulaire, c'est ajouter `class Meta` avec le `model` (`BookInstance`) associé, et une liste des `fields` du modèle à inclure dans le formulaire.

```python
from django.forms import ModelForm

from catalog.models import BookInstance

class RenewBookModelForm(ModelForm):
  class Meta:
    model = BookInstance
    fields = ['due_back']
```

> **Note :** Vous pouvez inclure tous les champs en utilisant `fields = '__all__'`, ou bien utiliser `exclude` (au lieu de `fields`) pour préciser les champs à ne _pas_ importer du modèle.
>
> Aucune approche n'est recommandée, car tout nouveau champ ajouté au modèle est automatiquement inclus dans le formulaire (sans considération du développeur de répercussions sécuritaires éventuelles).

> **Note :** Cela peut ne pas sembler beaucoup plus simple que d'utiliser un simple `Form`, et ça ne l'est effectivement pas dans ce cas, parce que nous n'avons qu'un seul champ. Cependant, si vous avez beaucoup de champs, cela peut réduire notablement la quantité de code&nbsp;!

Le reste de l'information vient des définitions de champ données par le modèle (par exemple, les labels, les widgets, le texte d'aide, les messages d'erreur). S'ils ne sont pas suffisamment satisfaisants, nous pouvons les réécrire dans notre `class Meta`, en précisant un dictionnaire contenant le champ à modifier et sa nouvelle valeur. Par exemple, dans ce formulaire, nous pourrions souhaiter, pour notre champ, un label tel que "_Renewal date_" (plutôt que celui par défaut, basé sur le nom du champ : _Due Back_), et nous voulons aussi que notre texte d'aide soit spécifique à ce cas d'utilisation. La classe `Meta` ci-dessous vous montre comment réécrire ces champs, et vous pouvez pareillement définir `widgets` et `error_messages` si les valeurs par défaut ne sont pas suffisantes.

```python
class Meta:
  model = BookInstance
  fields = ['due_back']
  labels = {'due_back': _('New renewal date')}
  help_texts = {'due_back': _('Enter a date between now and 4 weeks (default 3).')}
```

Pour ajouter une validation, vous pouvez utiliser la même approche que pour un `Form` normal&nbsp;: vous définissez une fonction appelée `clean_field_name()`, et vous levez des exceptions de type `ValidationError` pour les valeurs non valides. La seule différence par rapport à notre formulaire original, c'est que le champ de modèle est appelé `due_back` et non "`renewal_date`". Ce changement est nécessaire, dans la mesure où le champ correspondant dans `BookInstance` est appelé `due_back`.

```python
from django.forms import ModelForm

from catalog.models import BookInstance

class RenewBookModelForm(ModelForm):
  def clean_due_back(self):
    data = self.cleaned_data['due_back']

    # Vérifier que la date ne se situe pas dans le passé.
    if data < datetime.date.today():
      raise ValidationError(_('Invalid date - renewal in past'))

    # Vérifier que la date tombe dans le bon intervalle (entre maintenant et dans 4 semaines).
    if data > datetime.date.today() + datetime.timedelta(weeks=4):
      raise ValidationError(_('Invalid date - renewal more than 4 weeks ahead'))

    # N'oubliez pas de toujours renvoyer les données nettoyées.
    return data

  class Meta:
    model = BookInstance
    fields = ['due_back']
    labels = {'due_back': _('Renewal date')}
    help_texts = {'due_back': _('Enter a date between now and 4 weeks (default 3).')}
```

La classe `RenewBookModelForm` ci-dessus est maintenant fonctionnellement équivalente à notre `RenewBookForm` d'origine. Vous pourriez l'importer et l'utiliser partout où vous utilisez `RenewBookForm`, du moment que vous changez aussi de `renewal_date` en `due_back` le nom de variable du formulaire correspondant, comme dans la deuxième déclaration du formulaire&nbsp;: `RenewBookModelForm(initial={'due_back': proposed_renewal_date}`.

## Vues génériques d'édition

L'algorithme de gestion des formulaires que nous avons utilisé ci-dessus, dans notre exemple de vue fonctionnelle, représente un processus extrêmement commun dans les vues destinées à éditer un formulaire. Django abstrait pour vous la plus grande partie de ce processus répétitif (<i lang="en">boilerplate</i>) en proposant des [vues génériques d'édition](https://docs.djangoproject.com/fr/3.1/ref/class-based-views/generic-editing/) pour les vues de création, édition et suppression basées sur des modèles. Ces vues génériques non seulement assument le comportement d'une vue, mais elles créent automatiquement la classe de formulaire (un `ModelForm`) pour vous à partir du modèle.

> **Note :** En plus des vues d'édition décrites ici, il existe aussi une classe [FormView](https://docs.djangoproject.com/fr/3.1/ref/class-based-views/generic-editing/#formview), qui se tient, en termes de rapport "flexibilité"/"effort codage", à mi-chemin entre notre vue basée sur une fonction et les autres vues génériques. En utilisant `FormView`, vous avez encore besoin de créer votre `Form`, mais vous n'avez pas besoin d'implémenter tous les éléments d'une gestion standard de formulaire. À la place, vous n'avez qu'à fournir une implémentation de la fonction qui sera appelée une fois que les données envoyées sont reconnues valides.

Dans cette section, nous allons utiliser des vues génériques d'édition pour créer des pages afin de pouvoir ajouter les fonctionnalités de création, d'édition et de suppression des enregistrements de type `Author` de notre bibliothèque, fournissant efficacement une réimplémentation basique de certaines parties du site Admin (cela peut être intéressant si vous avez besoin d'offrir une fonctionnalité admin d'une manière plus flexible que ce qui peut être présenté par le site admin).

### Vues

Ouvrez le fichier vue (**locallibrary/catalog/views.py**) et ajoutez le bloc de code suivant à la fin&nbsp;:

```python
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy

from catalog.models import Author

class AuthorCreate(CreateView):
  model = Author
  fields = ['first_name', 'last_name', 'date_of_birth', 'date_of_death']
  initial = {'date_of_death': '11/06/2020'}

class AuthorUpdate(UpdateView):
  model = Author
  fields = '__all__' # Non recommandé (problème potentiel de sécurité si on ajoute d'autres champs)

class AuthorDelete(DeleteView):
  model = Author
  success_url = reverse_lazy('authors')
```

Comme vous pouvez le voir, pour les vues "créer", "modifier" et "supprimer", vous avez besoin de dériver respectivement des vues génériques `CreateView`, `UpdateView`, et `DeleteView`, et de définir ensuite le modèle associé.

Pour les cas "créer" et "modifier", vous devez aussi préciser les champs à afficher dans le formulaire (en utilisant la même syntaxe que pour la classe `ModelForm`). Dans ce cas, nous montrons à la fois la syntaxe pour afficher "tous" les champs, et comment vous pouvez les lister un par un. Vous pouvez aussi spécifier les valeurs initiales pour chacun des champs en utilisant un dictionnaire de paires _nom_du_champ/valeur_ (ici nous définissons arbitrairement la date de mort, uniquement dans un but de démonstration — sans doute voudrez-vous l'enlever !). Par défaut, ces vues vont rediriger en cas de succès vers une page affichant l'élément nouvellement créé ou modifié, ce qui, dans notre cas, sera la vue "détail" d'un auteur, créée dans un précédent tutoriel. Vous pouvez spécifier un autre lieu de redirection en déclarant explicitement le paramètre `success_url` (comme indiqué dans la classe `AuthorDelete`).

La classe `AuthorDelete` ne requiert pas l'affichage d'aucun champ, aussi n'ont-ils pas besoin d'être précisés. Par contre, il vous faut bien spécifier la `success_url`, car Django n'a pas de valeur par défaut pour cela. Dans ce cas, nous utilisons la fonction [`reverse_lazy()`](https://docs.djangoproject.com/fr/3.1/ref/urlresolvers/#reverse-lazy) pour rediriger vers notre liste d'auteurs après qu'un auteur a été supprimé. `reverse_lazy()` est une version de `reverse()` exécutée mollement ("_lazily_"), que nous utilisons ici parce que nous fournissons une URL à un attribut de vue basée sur une classe.

### Templates

Les vues "créer" et "modifier" utilisent le même template par défaut, lequel sera nommé d'après votre modèle : _model_name_\_**form.html** (vous pouvez changer le suffixe en autre chose que **\_form** en utilisant le champ `template_name_suffix` dans votre vue, par exemple, `template_name_suffix = '_other_suffix'`).

Créez le fichier de template **locallibrary/catalog/templates/catalog/author_form.html** et copiez-y le texte suivant.

```django
{% extends "base_generic.html" %}

{% block content %}
  <form action="" method="post">
    {% csrf_token %}
    <table>
    \{{ form.as_table }}
    </table>
    <input type="submit" value="Submit">
  </form>
{% endblock %}
```

Ce formulaire est semblable à nos formulaires précédents et affiche les champs en utilisant un tableau. Notez aussi comment nous déclarons à nouveau le `{% csrf_token %}` pour nous assurer que nos formulaires résisteront à d'éventuelles attaques par CSRF (_Cross-Site Request Forgery_).

La vue "supprimer" s'attend à trouver un template avec un nom au format _model_name_\_**confirm_delete.html** (de nouveau, vous pouvez changer le suffixe en utilisant `template_name_suffix` dans votre vue). Créez le fichier de template **locallibrary/catalog/templates/catalog/author_confirm_delete.html** et copiez-y le texte suivant.

```django
{% extends "base_generic.html" %}

{% block content %}

<h1>Delete Author</h1>

<p>Are you sure you want to delete the author: \{{ author }}?</p>

<form action="" method="POST">
  {% csrf_token %}
  <input type="submit" value="Yes, delete." />
</form>

{% endblock %}
```

### Configurations d'URL

Ouvrez votre fichier de configuration d'URL (**locallibrary/catalog/urls.py**) et ajoutez-y à la fin la configuration suivante&nbsp;:

```python
urlpatterns += [
    path('author/create/', views.AuthorCreate.as_view(), name='author-create'),
    path('author/<int:pk>/update/', views.AuthorUpdate.as_view(), name='author-update'),
    path('author/<int:pk>/delete/', views.AuthorDelete.as_view(), name='author-delete'),
]
```

Il n'y a rien de particulièrement nouveau ici ! Vous pouvez voir que les vues sont des classes, et doivent dès lors être appelée via `.as_view()`, et vous devriez être capable de reconnaître les motifs d'URL dans chaque cas. Nous devons utiliser `pk` comme nom pour la valeur de nos clés primaires capturées, car c'est le nom de paramètre attendu par les classes de vue.

Les pages de création, modification et suppression d'auteur sont maintenant prêtes à être testées (nous ne nous mettons pas en peine pour cette fois, bien que vous puissiez le faire si vous le souhaiter, de les accrocher dans la barre latérale du site).

> **Note :** Les utilisateurs observateurs auront remarqué que nous n'avons rien fait pour empêcher les utilisateurs non autorisés d'accéder à ces pages&nbsp;! Nous laissons cela comme exercice pour vous (suggestion&nbsp;: vous pourriez utiliser le `PermissionRequiredMixin`, et soit créer une nouvelle permission, soit réutiliser notre permission `can_mark_returned`).

### Test de la page

Tout d'abord, connectez-vous au site avec un compte ayant les permissions que vous avez définies comme nécessaires pour accéder aux pages d'édition d'auteur.

Ensuite, naviguez à la page de création d'auteur, _<http://127.0.0.1:8000/catalog/author/create/>_, ce qui devrait ressembler à la capture d'écran ci-dessous.

![Exemple de formulaire : création d'un auteur](forms_example_create_author.png)

Entrez des valeurs pour les champs et ensuite cliquez sur **Submit** pour sauvegarder l'enregistrement de cet auteur. Vous devriez maintenant être conduit à une vue "détail" pour votre nouvel auteur, avec une URL du genre `http://127.0.0.1:8000/catalog/author/10`.

Vous pouvez tester l'édition d'un enregistrement en ajoutant _/update/_ à la fin de l'URL "détail" (par exemple, `http://127.0.0.1:8000/catalog/author/10/update/`). Nous ne mettons pas de capture d'écran, car c'est à peu près la même chose que la page "create".

Enfin, nous pouvons effacer l'enregistrement en ajoutant "delete" à la fin de l'URL de détail (par exemple, `http://127.0.0.1:8000/catalog/author/10/delete/`). Django devrait vous afficher la page de suppression montrée ci-dessous. Cliquez sur "**Yes, delete**" pour supprimer l'enregistrement et être reconduit à la liste des auteurs.

![](forms_example_delete_author.png)

## Mettez-vous au défi

Créez des formulaires pour créer, modifier et effacer des enregistrements de type `Book`. Vous pouvez utiliser exactement la même structure que pour les `Authors`. Si votre template **book_form.html** est simplement copié-renommé à partir du template **author_form.html**, alors la nouvelle page "create book" va ressembler à quelque chose comme ceci :

![](forms_example_create_book.png)

## Résumé

Créer et gérer des formulaires peut être un processus compliqué ! Django le rend bien plus aisé en fournissant des mécanismes de programmation pour déclarer, rendre et valider des formulaires. Django fournit de plus des vues génériques d'édition de formulaires, qui peuvent faire _presque tout_ le travail si vous voulez définir des pages pour créer, modifier et supprimer des enregistrements associés à une instance d'un modèle unique.

Il y a bien d'autres choses qui peuvent être faites avec les formulaires (regardez notre liste [Voir aussi](#voir_aussi) ci-dessous), mais vous devez être maintenant en mesure de comprendre comment ajouter des formulaires basiques et un code de gestion de formulaire à vos propres sites web.

## Voir aussi

- [Utilisation des formulaires](https://docs.djangoproject.com/fr/3.1/topics/forms/) (Documentation de Django)
- [Écriture de votre première application Django, 4e partie](https://docs.djangoproject.com/fr/3.1/intro/tutorial04/#write-a-simple-form) (Documentation de Django)
- [L'API des formulaires](https://docs.djangoproject.com/fr/3.1/ref/forms/api/) (Documentation de Django)
- [Champs de formulaires](https://docs.djangoproject.com/fr/3.1/ref/forms/fields/) (Documentation de Django)
- [Les formulaires et la validation des champs](https://docs.djangoproject.com/fr/3.1/ref/forms/validation/) (Documentation de Django)
- [Gestion de formulaires avec les vues fondées sur les classes](https://docs.djangoproject.com/fr/3.1/topics/class-based-views/generic-editing/) (Documentation de Django)
- [Création de formulaires à partir de modèles](https://docs.djangoproject.com/fr/3.1/topics/forms/modelforms/) (Documentation de Django)
- [Vues génériques d'édition](https://docs.djangoproject.com/fr/3.1/ref/class-based-views/generic-editing/) (Documentation de Django)

{{PreviousMenuNext("Learn/Server-side/Django/authentication_and_sessions", "Learn/Server-side/Django/Testing", "Learn/Server-side/Django")}}
