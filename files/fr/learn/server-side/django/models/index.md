---
title: 'Django didactique Section 3: Utilisation des modèles de données'
slug: Learn/Server-side/Django/Models
translation_of: Learn/Server-side/Django/Models
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/skeleton_website", "Learn/Server-side/Django/Admin_site", "Learn/Server-side/Django")}}

Ce troisième article est consacré aux modèles de données pour les sites web générés avec Django. Après une définition et une présentation de la notion de modèle de données, il explique comment les déclarer, choisir le type de champs et quelques méthodes d'accès au modèle de données via Django.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requis:</th>
      <td>
        <p>
          <a href="/fr/docs/Learn/Server-side/Django/skeleton_website"
            >Django didactique Section 2: Créer le squelette du site web.</a
          >
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif:</th>
      <td>
        <p>
          Concevoir et créer vos propres modèles de données et choisir les
          attributs idoines.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Survol

Les applications web Django donnent accès aux données enregistrées dans une base à l'aide d'une classe d'objets _models_. Une classe d'objet héritée de _models_ définit une _structure de données_ ainsi que le type, la taille et la nature des champs de cette structure de données. Cela inclut aussi la valeur par défaut, les options ou listes d'option, les informations pour l'aide en ligne ou la définition des étiquettes des champs des formulaires. La définition du modèle de données est une abstraction indépendante du gestionnaire de base de données associé ; une fois choisi le gestionnaire est sollicité par le biais des objets Python/Django et vous n'interagissez pas directement avec lui. Votre rôle est alors de décrire le modèle de données par le biais d'objets appropriés et Django prend en charge les communications avec la base de données.

Ce chapitre vous montre sur la base du [site web d'une bibliothèque locale](/fr/docs/Learn/Server-side/Django/Tutorial_local_library_website) comment concevoir, créer et manipuler les données par l'intermédiaire du modèle de données.

## Concevoir le modèle de données de la bibliothèque locale

Une étape préliminaire à la phase de développement est de réfléchir aux données (et donc aux structures de données) nécessaires et utiles pour le projet et aux relations entre-elles.

Nous aurons besoin de conserver des données sur des livres (titre, résumé, auteur, version original, catégorie, ISBN), le nombre disponible en stock (donc un identifiant unique par livre et le statut du prêt). Nous aurons probablement besoin d'enregistrer des informations sur les auteurs qui ne seront pas uniquement le nom ainsi que gérer l'homonymie. Enfin, il sera nécessaire d'ordonner et de trier ces informations par titre, auteur, langue ou catégorie.

En conception, il est judicieux et recommandé de décrire chacun des objets séparément. Dans le cas présent, il nous faudra un objet pour les livres, les copies des livres et les auteurs.

Vous pourriez aussi utiliser les modèles pour définir des listes d'options (comme une liste déroulante pour un choix), plutôt que d'avoir à implémenter avec le code du site web ces choix. C'est d'ailleurs une recommandation à considérer si les options ne sont pas parfaitement connues à l'avance. Ce sera typiquement le cas des catégories de livres (science fiction, poésie, littérature étrangère, etc.) ou des langues des version originales (Français, Anglais, Espagnol, etc.).

Le choix du modèle étant posé, nous avons à considérer les relations entre les objets. Django permet d'établir trois types de relation : les relations un à un qui mettent en relation un et un seul objet avec un autre (`OneToOneField`), les relations un à n qui partage l'appartenance d'un objet à avec d'autres (`ForeignKey`) et les relations n à n qui associent des groupes d'objets entre-eux (`ManyToManyField`).

Avec ces éléments présents à l'esprit, le diagramme de classes UML ci-dessous décrit les objets de la bibliothèque.

![LocalLibrary Model UML](local_library_model_uml.png)

Le modèle ainsi créé, décrit l'objet livre - _Book_ - avec une description générique d'un livre, la copie d'un livre - _BookInstance_ - avec l'état d'un copie physique d'un livre et de sa disponibilité, et l'objet auteur - _Author_. Les genres des collections pouvant varier, il est plus élégant de concevoir une classe d'objets dédiée comme pour les langues. Considérant que le statut de prêt ne changera pas, il est décidé que le traiter dans le code - `BookInstance:status` sera géré dans le code Django `LOAN_STATUS`. Dans le diagramme de classe, les caractéristiques de chacun des attributs et méthodes sont précisées pour plus de clarté du travail à réaliser.

Le diagramme met aussi en évidence les relations entre les objets et la cardinalité des relations. La cardinalité est représentée par les nombres entre crochet avec, si nécessaire, un minimum et un maximum. Par exemple, un ouvrage a, au moins un genre (\[1..\*]) alors qu'un genre peut ne pas référencer un livre (\[0..\*]) ce qui se traduira en définition des objets dans models.py.

> **Note :** La section ci-dessous est une introduction générale à la modélisation des objets pour les modèles de données dans Django. Gardez à l'esprit la bibliothèque locale et imaginez comment devraient être décrits les objets pour cette bibliothèque.

## Introduction au modèle de données

Cette section fournit une rapide introduction à la définition des objets de conception du modèle de données.

### Spécification

Les objets sont **toujours** définis dans le fichier **models.py** de chaque application. Ils sont conçus comme sous-classe de `django.db.models.Model`, et sont caractérisés par des attributs ou champs, des méthodes et des métadonnées. L'extrait ci-dessous définit donc la classe `MyModelName`:

    from django.db import models

    class MyModelName(models.Model):
        """A typical class defining a model, derived from the Model class."""

        # Fields
        my_field_name = models.CharField(max_length=20, help_text='Enter field documentation')
        ...

        # Metadata
        class Meta:
            ordering = ['-my_field_name']

        # Methods
        def get_absolute_url(self):
            """Returns the url to access a particular instance of MyModelName."""
            return reverse('model-detail-view', args=[str(self.id)])

        def __str__(self):
            """String for representing the MyModelName object (in Admin site etc.)."""
            return self.my_field_name

Détaillons ce qu'il en retourne :

#### Champs ou attributs

Chaque objet peut contenir autant d'attributs que de besoin et de quelque type qu'il soit. Chaque attribut correspondra à une colonne - _ou champ_ - dans une table de la base de données. Chaque enregistrement, ou ligne dans la table, correspondra à une instance de la classe d'objet et chaque champ sera évalué. Un champ est de la forme :

```js
my_field_name = models.CharField(max_length=20, help_text='Enter field documentation')
```

Dans l'exemple ci-dessus, le champs est une chaîne de caractères — de type `models.CharField` —  dont le nom est `my_field_name`. Les champs ont des types pré-définis représentés par une classe d'objet Django qui va permettre de caractériser une champ du modèle de données. Cela permet aussi de valider les données qui seront fournies via les formulaires du site web décrits avec le langage HTML. Les classes caractérisant les type de champs peuvent accepter des paramètres pour préciser les contraintes appliquées à ce champ. Dans cet exemple, deux arguments sont indiqués :

- `max_length=20` — Défini que ce champs fait au plus 20 caractères.
- `help_text='Enter field documentation'` — attribue un label par défaut qui sera affiché dans la page web par le navigateur.

Le nom du champs sera utilisé dans les requêtes et les gabarits. Ces champs peuvent avoir une étiquette à l'aide d'un argument de définition (`verbose_name`) ou ils seront déduits à l'aide d'un changement de casse ou le remplacement des espaces par des soulignés (comme par exemple `my_field_name` serait l'étiquette par défaut du champs _My field name_).

L'ordre dans lequel est défini un attribut de la classe d'objet va définir la position de la colonne dans le modèle physique de la base de données ce qui affectera, même la présentation est modifiable, la présentation par défaut des champs dans les formulaires ; c'est notamment le cas pour la partie administration du site web.

##### Les arguments courants des champs

Vous trouverez ci-dessous les arguments les plus utilisés dans la définition des champs :

- [help_text](https://docs.djangoproject.com/fr/2.2/ref/models/fields/#help-text): définit l'étiquette du champ qui apparaîtra par défaut dans les formulaires HTML (notamment sur la section Administration du site).
- [verbose_name](https://docs.djangoproject.com/fr/2.2/ref/models/fields/#verbose-name): définit un nom vernaculaire du champs technique qui sera alors utilisé comme étiquette. Si ce nom n'est pas défini alors Django va le déduire du nom technique.
- [default](https://docs.djangoproject.com/fr/2.2/ref/models/fields/#default): définit la valeur par défaut du champs. Ce peut être une valeur alphanumérique mais aussi un objet créé appelable qui sera sollicité à chaque création d'un objet appelant.
- [null](https://docs.djangoproject.com/fr/2.2/ref/models/fields/#null): définit si le champs peut ne pas être remplit dans la base de données ; s'il est à vrai ( `True`), alors Django considère qu'une valeur `NULL` peut être correctement enregistrée - pour une chaîne de caractère de type `CharField` il s'agira d'une chaîne vide. La valeur par défaut de cet attribut est à faux (`False`) c'est-à-dire qu'il est nécessaire d'avoir une donnée non vide à l'enregistrement par défaut.
- [blank](https://docs.djangoproject.com/fr/2.2/ref/models/fields/#blank): définit si un champ d'un formulaire peut ne pas être saisi ; s'il est à vrai (`True`), le champs peut être laissé vide dans le formulaire. Par défaut ce paramètre est à faux (`False`), ce qui traduit que Django exigera une saisie d'une information dans le champs. Ce paramètre est utilisé en complément de la valeur `null=True`, car si vous acceptez une valeur vide dans la base de données, il est inutile d'en obliger la saisie dans un formulaire web.
- [choices](https://docs.djangoproject.com/fr/2.2/ref/models/fields/#choices): définit une liste de choix possible pour un champs et sera traduit par un composant d'interface de type liste de choix.
- [primary_key](https://docs.djangoproject.com/fr/2.2/ref/models/fields/#primary-key): S'il est à `True`, il définit le champ comme une clé primaire, c'est-à-dire qui permet d'identifier de manière unique un enregistrement dans la table de la base de données, pour le modèle de données. S'il n'y a pas de clé primaire, Django en affectera une d'office.

L'ensemble [des options de champs](https://docs.djangoproject.com/fr/2.2/ref/models/fields/#field-options) peut être consulté sur le site Django.

##### Les types courrants de champs

Vous trouverez ci-dessous les arguments les principaux type de champs :

- [CharField](https://docs.djangoproject.com/fr/2.2/ref/models/fields/#django.db.models.CharField) caractérise un champ de type chaîne de caractères de taille maximale fixe. Ce champ nécessite l'option obligatoire `max_length` pour définir la taille maximale de la chaîne de caractère.
- [TextField](https://docs.djangoproject.com/fr/2.2/ref/models/fields/#django.db.models.TextField) caractérise un champs texte (de longeur non définit dans la base de données). Si l'option `max_length` est utilisé, celui-ci précisera la taille du champs texte des formulaires web mais n'aura pas d'impact dans la définition du champs en base de données.
- [IntegerField](https://docs.djangoproject.com/fr/2.2/ref/models/fields/#django.db.models.IntegerField "django.db.models.IntegerField") caractérise un champs de type nombre entier.
- [DateField](https://docs.djangoproject.com/fr/2.2/ref/models/fields/#datefield) et [DateTimeField](https://docs.djangoproject.com/fr/2.2/ref/models/fields/#datetimefield) sont des type utilisées pour caractériser une date et une heure comme les objets `datetime.date` et `datetime.datetime` en Python. Les options (incompatibles ensemble) les plus courantes pour ces champs sont l'enregistrement au moment de la sauvegarde (`auto_now=True`), l'enregistrement à la création de l'objet (`auto_now_add`) et une valeur par défaut (`default)` qui pourra être changée par l'utilisateur.
- [EmailField](https://docs.djangoproject.com/fr/2.2/ref/models/fields/#emailfield) est le type dédié à la gestion des courriers électroniques.
- [FileField](https://docs.djangoproject.com/fr/2.2/ref/models/fields/#filefield) et [ImageField](https://docs.djangoproject.com/fr/2.2/ref/models/fields/#imagefield) sont deux type utilisés pour permettre de télécharger des fichiers ou, plus spécifiquement des images. Les options de ces champs définissent où et comment ces fichiers seront enregistrés et conservés.
- [AutoField](https://docs.djangoproject.com/en/2.1/ref/models/fields/#autofield) est un type particulier de nombre entier (`IntegerField`) qui est incrémenté automatiquement. S'il n'y a pas de clé primaire automatiquement déclarée alors un champs de ce type est automatiquement déclaré dans dans le modèle de données.
- [ForeignKey](https://docs.djangoproject.com/fr/2.2/ref/models/fields/#foreignkey) est utilisé pour définir une relation un à plusieurs entre deux classe d'objet (ou deux enregistrements dans deux tables de la base de données). Plusieurs objets contenant la définition d'un champ de type `ForeignKey` peuvent faire référence à une seule et même clé ; tel est le sens de la relation un à plusieurs, ce n'est donc pas la clé étrangère qui porte la cardinalité de la relation.
- [ManyToManyField](https://docs.djangoproject.com/fr/2.2/ref/models/fields/#manytomanyfield) est utilisé pour définir une relation n à n (e.g. un nom commun a plusieurs sens et un sens peut être décrit par plusieurs noms communs). Dans notre application bibliothèque, nous utiliserons ce type de champs d'une manière proche de la clé étrangère. Cependant, cette relation peut être utilisée pour exprimer des relations plus compliquées entre des groupes. Ce champ requiert l'option `on_delete` pour préciser le comportement de l'attribut quand l'enregistrement est supprimé (e.g. la valeur de l'attribut `models.SET_NULL` peut être affecté à `NULL`).

L'ensemble [des types de champs](https://docs.djangoproject.com/fr/2.2/ref/models/fields/#field-types) peut être consulté sur le site Django.

#### Métadonnées

Vous avez la capacité de déclarer des métadonnées à l'aide de la classe  `class Meta`, comme précisé ci-dessous :

```python
class Meta:
    ordering = ['-my_field_name']
```

L'une des fonctionnalités les plus utiles disponible à l'aide des métadonnées est de définir et contrôler le classement des enregistrements. Vous l'obtenez en précisant la liste des champs dans l'attribut `ordering` comme indiqué ci-dessous. Le classement est fonction du type de l'attribut (une chaîne de caractère a un classement alphabétique alors qu'une date a un classement chronologique). Si vous préfixez le nom du champs du signe _moins_ (-) alors le classement sera naturellement inversé.

Voici un exemple de classe de livre par titre et dates de parution :

```python
ordering = ['title', '-pubdate']
```

Les livres sont présenté dans l'ordre alphabétique de leur titre, puis dans l'ordre chronologique du plus récent au plus ancien.

Un autre attribut très utile est celui d'un nom vernaculaire pour la classe, `verbose_name`  peut être au singulier et au pluriel :

```python
verbose_name = 'BetterName'
```

D'autres attributs vous permettent de compléter des droits d'accès à ceux appliqués par défaut, des classements s'appuyant sur le comportement d'autres champs, ou de définir une classe abstraite (c'est-à-dire qui n'aura pas de transcription dans une table et des enregistrements, mais servira de support à d'autres classes partageant des éléments communs).

D'autres éléments sont aussi disponibles pour contrôler le comportement d'une base de données, mais sont principalement utilisés pour appliquer le modèle ORM sur une base de données déjà existante.

L'ensemble [des métadonnées de classe](https://docs.djangoproject.com/fr/2.2/ref/models/options/) peut être consulté sur le site Django.

#### Méthodes

Comme tout objet Python, une classe héritée de `model` peut utiliser des méthodes.

**A minima, chaque modèle de données - c'est-à-dire une classe héritée de la classe model du module django.db - vous devez définir la méthode `__str__()` pour permettre d'afficher un élément compréhensible qui représentera l'instance de la classe.** Cette méthode est aussi utilisée au niveau du site d'administration pour afficher les instances de la classe administrée. La plupart du temps, cette méthode retourne un titre ou nom associé à aux objets de la classe.

```python
def __str__(self):
    return self.field_name
```

Une seconde méthode très utilisée dans le cadriciel Django est `get_absolute_url()`. Elle permet de fournir un URL pour afficher dans le site web le contenu de de chacun des enregistrements associés au modèle de données décrit. Si vous utilisez cette méthode, Django ajoutera un bouton pour permet de visualiser le détail des enregistrements. Classiquement, une méthode `get_absolute_url()` est de la forme :

```python
def get_absolute_url(self):
    """Returns the url to access a particular instance of the model."""
    return reverse('model-detail-view', args=[str(self.id)])
```

> **Note :** En supposant que vous allez utiliser des URLs du type `/myapplication/mymodelname/2` pour afficher individuellement les données des enregistrements de la table associée à votre modèle de données (où "2" est l'`id`entifiant d'un enregistrement donné), vous devrez créer un routage d'URL pour vous permettre de transmettre l'id à une vue détaillée de l'enregistrement (model detail view dans le cadriciel Django). Cette vue détaillée réalisera l'affichage de l'enregistrement. La fonction `reverse()` a pour objectif d'écrire l'URL dans un format cohérent avec le traitement des URL par les navigateurs.
>
> Bien entendu, cela requiert d'écrire le routage de l'URL, la vue et le gabarit...

Vous pouvez aussi définir toute les méthodes dont vous aurez besoin pour manipuler à travers les objets du modèle de données les enregistrements de la base de données.

### Administration des données

A partir du moment où vous avez créé votre modèle de données, vous pouvez manipuler les instances pour créer, mettre à jour ou supprimer les enregistrements en base de données. Vous pouvez aussi faire des requêtes pour obtenir tout ou parti des enregistrements de la base. L'objet de cette section est d'évoquer la manière de manipuler ces données et sera revu progressivement dans les avancées de l'application Bibliothèque.

#### Créer et modifier des enregistrements

Pour créer un enregistrement, il suffit de définir une instance de la classe d'objet et de la sauvegarder avec la méthode `save()`.

```python
# Créer un nouvel enregistrement en utilisant la méthode d'instanciation.
record = MyModelName(my_field_name="Instance #1")

# Sauvegarde de l'enregistrement en base de données.
record.save()
```

> **Note :** Si aucun champs n'a été défini comme une clé primaire (option `primary_key`), un champs nommé `id` ou `pk` sera affecté au modèle et sera incrémenté automatiquement. Vous pouvez requêter cet enregistrement à l'aide de ce champ ; le premier enregistrement aura habituellement la valeur entière 1.

Les champs de l'enregistrement sont accessibles à l'aide des attributs de la classe d'objet. En utilisant la syntaxe pointée, vous pouvez modifier les valeurs des champs de l'enregistrement. Vous devez utiliser la méthode `save()` pour enregistrer en base de données les modifications.

```python
# Accès au valeur des champs par le biais des attributs de classe Python.
print(record.id) # devrez retourner la valeur 1 pour le premier en enregistrement.
print(record.my_field_name) # devrez afficher 'Instance #1'

# Changer la valeur d'un champs et le sauvegarder en base avec la méthoide save().
record.my_field_name = "New Instance Name"
record.save()
```

#### Rechercher des enregistrements

La classe de base `objects` permet de faire des recherches d'enregistrement qui correspondront aux critères de recherche souhaités.

> **Note :** Nous utiliserons dans les explications le modèle de données d'un livre (`Book`)avec des titres (`title`) et des genres littéraires (`genre`), car expliquer la manière de rechercher sur un modèle théorique n'est pas très pédagogique.

Vous pouvez obtenir tous les enregistrements d'un modèle de données sous la forme d'un jeu de données ou `QuerySet`, en utilisant `objects.all()`. Un `QuerySet` est un objet itérable, c'est-à-dire jeu de données contenant des objets que l'on peut parcourir.

```python
all_books = Book.objects.all()
```

Un filtre Django ou `filter()` est une méthode qui permet de sélectionner un jeu de données répondant à des critères (texte ou numérique) de sélection. Par exemple, nous filtrons les livres dont le titre contient le mot "wild", puis nous dénombrons le jeu de données.

```python
wild_books = Book.objects.filter(title__contains='wild')
number_wild_books = wild_books.count()
```

Les arguments passés en option sont le champs et la nature du contrôle à effectuer. On utilise le format : `field_name__match_type` : dans l'exemple ci-dessus, le double sous-ligné marque la séparation entre le champ `title` et le type de contrôle `contains` ; concrètement, le filtre est appliqué sur le champ `title` contenant le mot `wild` en respectant la casse. Il existe d'autres options de contrôle : `icontains` (sans respect de la casse), `iexact` (le champs correspond exactement à la valeur donnée sans respect de la casse), `exact` (idem en respectant la casse) et `in`, `gt` (plus grand que), `startswith`(commence par), etc. La liste complète est [consultable sur la documentation de Django](https://docs.djangoproject.com/fr/2.2/ref/models/querysets/#field-lookups).

Le marqueur "double souligné" permet de construire une chaîne de navigation à travers les objets lorsque le champ considéré est une clé étrangère (`ForeignKey`). C'est systématiquement le cas lorsque l'on doit filtrer sur une propriété d'un attribut dans une relation un-à-un. Dans ce cas (exemple ci-dessous), vous identifiez l'attribut de la clé étrangère par le biais d'un "double souligné" qui indique le champs à filter. L'exemple ci-dessous indique que vous filtrez les livres selon le nom (`name`) du genre (`genre`) du livre.

```python
# Le critère s'appliquera sur les genres contenant 'fiction' i.e. : Fiction, Science fiction, non-fiction etc.
books_containing_genre = Book.objects.filter(genre__name__icontains='fiction')
```

> **Note :** Vous pouvez construire une chemin pour naviguer dans autant de niveaux de relation (`ForeignKey`/`ManyToManyField`) que vous en avez besoin en concaténant des noms de champs à l'aide  (\_\_) . Si par exemple vous souhaitez trouver un livre (`Book`) qui possède différents type (`type`) de couvertures (`cover`) identifiées par des noms (`name`) alors le chemin sera du type : `type__cover__name__exact='hard'.`

La mise en oeuvre des requêtes est très riches en fonction des modèles et des relations, de sous-ensemble de données, etc. Pour une informations détaillées, vous devez consulter [les requêtes](https://docs.djangoproject.com/fr/2.2/topics/db/queries/) sur le site de référence de Django.

## Définition du modèle de données de l'application LocalLibrary

Cette section est consacrée au démarrage de la définition de l'application LocalLibrary qui permet de gérer une petite bibliothèque locale. Ouvrez le fichier _models.py_ présent dans le répertoire _/locallibrary/catalog/_. Le code par défaut est déjà en place au début du document et permet d'importer les éléments du module models de django.

```python
from django.db import models

# Create your models here.
```

### L'objet Genre

Cet objet est utilisé pour décrire et enregistrer le genre littéraire des livres — par exemple une fiction, une polard ou un roman. Comme cela a été évoqué précédemment, nous créons un modèle de données plutôt que de gérer cela à l'aide de texte libre ou de codage en dur. Copiez le texte ci-dessous à la fin du fichier _models.py_.

```python
class Genre(models.Model):
    """Cet objet représente une catégorie ou un genre littéraire."""
    name = models.CharField(max_length=200, help_text='Enter a book genre (e.g. Science Fiction)')

    def __str__(self):
        """Cette fonction est obligatoirement requise par Django.
           Elle retourne une chaîne de caractère pour identifier l'instance de la classe d'objet."""
        return self.name
```

L'objet, en relation avec la base de données, possède un seul attribut (`name`) de type chaîne de caractères (`CharField`), qui sera utilisé pour décrire le genre d'un livre (limité à 200 caractères). Une option (`help_text)` permet d'utiliser une étiquettes d'aide dans les pages et formulaires du site web. La méthode `__str__()`, qui retourne simplement le nom du genre littéraire de chaque enregistrement. Puisque qu'il n'y a pas de nom vernaculaire (`verbose_name`), le champ sera simplement nommé `Name` dans les formulaires.

### L'objet Book

Comme précédemment, vous pouvez copier le descriptif de l'objet Book à la fin du fichier models.py. Cet objet représente un livre dans sa description et non une copie en rayon disponible au prêt. Par conséquent, l'objet contient un titre et son identifiant international (isbn dont on notera l'étiquette en majuscule pour ne pas avoir "Isbn" à la place) sous forme de chaînes de caractère. De plus, l'objet contient un résumé sous forme d'une chaîne de caractère de longueur non explicite pour traiter de résumés plus ou moins long.

```python
from django.urls import reverse # Cette fonction est utilisée pour formater les URL

class Book(models.Model):
    """Cet objet représente un livre (mais ne traite pas les copies présentes en rayon)."""
    title = models.CharField(max_length=200)

    # La clé étrangère (ForeignKey) est utilisée car elle représente correcte le modèle de relation en livre et son auteur :
    #  Un livre a un seul auteur, mais un auteur a écrit plusieurs livres.
    # Le type de l'objet Author est déclré comme une chaîne de caractère car
    # la classe d'objet Author n'a pas encore été déclarée dans le fichier
    author = models.ForeignKey('Author', on_delete=models.SET_NULL, null=True)

    summary = models.TextField(max_length=1000, help_text='Enter a brief description of the book')
    isbn = models.CharField('ISBN', max_length=13, help_text='13 Character <a href="https://www.isbn-international.org/content/what-isbn">ISBN number</a>')

    # Le type ManyToManyField décrit correctement le modèle de relation en un livre et un genre.
    #  un livre peut avoir plusieurs genres littéraire et réciproquement.
    # Comme la classe d'objets Genre a été définit précédemment, nous pouvons manipuler l'objet.
    genre = models.ManyToManyField(Genre, help_text='Select a genre for this book')

    def __str__(self):
        """Fonction requise par Django pour manipuler les objets Book dans la base de données."""
        return self.title

    def get_absolute_url(self):
        """Cette fonction est requise pas Django, lorsque vous souhaitez détailler le contenu d'un objet."""
        return reverse('book-detail', args=[str(self.id)])
```

Le genre littéraire est une relation n à n (`ManyToManyField`) car un livre peut avoir plusieurs genres et inversement. Bien que des livres soient écrits à plusieurs, dans le modèle de données présent un livre n'aura qu'un et un seul auteur. Un auteur est donc vu comme une clé étrangère `(ForeignKey`) de telle sorte qu'un livre n'a qu'un seul auteur et une auteur peut avoir écrit plusieurs livres.

La modélisation des relations entre les objets, c'est le cas pour les deux champs décrits à l'instant, nécessite de manipuler les classes d'objet par leur nom de classe. Vous devez déclarer l'objet par son de classe dans la déclaration de la relation entre les objets, si celui-ci a déjà été déclaré vous pouvez l'utiliser comme un nom d'objet - à l'identique d'une variable Python - ou comme une chaîne de caractère si l'objet n'a pas déjà fait l'objet d'un déclaration. les autres paramètres dans la déclaration des relations permettent de spécifier les comportement des attributs : l'option `null` positionné à `True` permet d'avoir un contenu vide en base de données, la second option `on_delete=models.SET_NULL` qualifie le fonctionnement de cet attribut si l'objet est supprimé en base de données, en l'occurence il peut être positionné à vide en base de données.

Deux méthodes sont déclarées pour cet objet. La méthode `__str__()` obligatoirement requise par Django pour manipuler les instances d'objet et les enregistrements associés en base. La seconde méthode, `get_absolute_url()`, retourne une URL formatée qui peut être utilisée par le cadriciel pour délivrer le détail de chaque instance d'objet de la classe. Le routage d'URL sera associé au nom  `book-detail`, et nous aurons à définir une vue et un gabarit.

### L'objet BookInstance

Occupons nous maintenant de l'objet `BookInstance`. Comme précédemment, copiez le contenu décrivant l'objet BookInstance ci-dessous dans votre fichier _models.py_. La classe d'objets décrit une copie d'un ouvrage qu'un individu peut physiquement emprunter. Elle prend en compte les éléments d'information qui permettent de l'identifier individuellement et de connaître son statut à chaque instant ainsi que la date de retour du prêt.

Les attributs et méthodes vont vous paraître familiers. On utilise :

- une clè étrangère (`ForeignKey`) pour modéliser la relation avec le livre (un livre disposant de plusieurs copies).
- Une chaîne de caractères (`CharField)` pour enregistrer les mentions légales (imprint) du livre.

```python
import uuid # Ce module est nécessaire à la gestion des identifiants unique (RFC 4122) pour les copies des livres

class BookInstance(models.Model):
    """Cet objet permet de modéliser les copies d'un ouvrage (i.e. qui peut être emprunté)."""
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, help_text='Unique ID for this particular book across whole library')
    book = models.ForeignKey('Book', on_delete=models.SET_NULL, null=True)
    imprint = models.CharField(max_length=200)
    due_back = models.DateField(null=True, blank=True)

    LOAN_STATUS = (
        ('m', 'Maintenance'),
        ('o', 'On loan'),
        ('a', 'Available'),
        ('r', 'Reserved'),
    )

    status = models.CharField(
        max_length=1,
        choices=LOAN_STATUS,
        blank=True,
        default='m',
        help_text='Book availability',
    )

    class Meta:
        ordering = ['due_back']

    def __str__(self):
        """Fonction requise par Django pour manipuler les objets Book dans la base de données."""
        return f'{self.id} ({self.book.title})'
```

De nouveaux types de champs sont utilisés :

- Le type `UUIDField` est utilisé pour traiter d'un identifiant unique de livre comme clé primaire. Ce type de champ permet de générer un identifiant unique pour enregistrer et suivre chacune des copies de chacun des livres.
- Le type `DateField` est utilisé pour enregistrer la date de retour d'un prêt. Ce champ peut-être vide pour gérer le cas des livres dans les rayonnages c'est-à-dire disponibles pour un prêt. Il est fait appel à la classe `Meta` pour permettre de classer les requêtes sur les objet par date de retr
- our.
- Le champ `status` est un type connu (`CharField`) qui définit une liste de choix. Les choix sont définis dans la description de l'objet par l'usage de tuples (une paire clé-valeur) et transmis en option dans la déclaration du champs. Alors que l'utilisateur manipulera les valeurs, les clés seront enregistrées dans la base de données. Enfin, la valeur par défaut est la Maintenance car lorsqu'un ouvrage est créé il n'est pas immédiatement disponible au prêt et n'est pas directement positionné en rayon.

La méthode `__str__()` obligatoirement requise par Django pour manipuler les instances d'objet et les enregistrements associés en base. Elle offre cependant la particularité d'associer l'identifiant unique et le titre du livre qui lui est associé.

> **Note :** Un aspect de Python:
>
> - Si vous démarrez avec une version postérieure à la version 3.6, vous pouvez utiliser le formatage des chaînes de caractère avec la fonction f-strings : `f'{self.id} ({self.book.title})'`.
> - Dans les versions précédente ce formatage était réalisé de manière différente utilisant la fonction de formatage format : `'{0} ({1})'.format(self.id,self.book.title)`).

### L'objet Author

Terminons en copiant la description de l'objet `Author` à la fin du fichier **models.py**.

```python
class Author(models.Model):
    """Model representing an author."""
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    date_of_birth = models.DateField(null=True, blank=True)
    date_of_death = models.DateField('Died', null=True, blank=True)

    class Meta:
        ordering = ['last_name', 'first_name']

    def get_absolute_url(self):
        """Returns the url to access a particular author instance."""
        return reverse('author-detail', args=[str(self.id)])

    def __str__(self):
        """String for representing the Model object."""
        return f'{self.last_name}, {self.first_name}'
```

Désormais les notions manipulées pour définir cet objet vous sont connues. L'objet réprésente un auteur par ses nom et prénoms ainsi que par ses dates de naissance et de décès (celles-ci n'étant pas obligatoires). Deux méthodes permettent l'une d'accéder à l'objet de manière compréhensible (`__str__()`) en retournant les nom et prénom de l'auteur dans cet ordre, et, l'autre (`get_absolute_url()`) permettra de publier les informations propres à chaque auteur.

## Appliquer les modifications en base

Les objets sont tous décrits dans le fichier dédié à la modélisation. Pour qu'elles soient effectives, il est nécessaire d'exécuter les deux commandes python qui gèrent les migrations de la base de données.

    python3 manage.py makemigrations
    python3 manage.py migrate

## Défi — Introduire les langues

Faisons l'hypothèse qu'un donateur lègue à la bibliothèque des livres dont certains sont écrits dans des langues étrangères comme le Farsi (langue majoritaire en Iran). Le défi consiste donc à modéliser puis utiliser la meilleure représentation possible de ce concept pour la bibliothèque.

Gardez en tête que :

- Une langue peut-être associée à plusieurs objets dont au moins `Book`, `BookInstance`
- Plusieurs types peuvent être utiliser pour modéliser une langue un objet, un champs, ou explicitement dans le code à l'aide d'une liste de choix

Après avoir fait vos choix, modéliser le et ajouter les champs utiles. Vous pouvez ensuite voir sur [Github nous l'avons fait](https://github.com/mdn/django-locallibrary-tutorial/blob/master/catalog/models.py).

Une dernière chose... n'oubliez pas d'appliquer les modifications en base de données

    python3 manage.py makemigrations
    python3 manage.py migrate

## Résumé

Cet article est consacré à la création des objets et leur lien en base de données ainsi qu'à leur gestion. Il s'appuie sur l'exemple de la bibliothèque locale pour lequel nous décrivons le design du modèle relationnel et la manière de l'implementer avec une description d'objet Python conforme au standard du cadriciel Django.

A ce stade, il est prématuré de créer le site web, nous allons simplement utiliser le site d'administration qui permet d'ajouter et de manipuler des données. Nous afficherons ces informations ensuite en créant des vues et de gabarits.

## A voir aussi

- [Ecriture de votre première application Django, Deuxième partie](https://docs.djangoproject.com/fr/2.2/intro/tutorial02/) (Documentation Django)
- [Création de requêtes](https://docs.djangoproject.com/fr/2.2/topics/db/queries/) (Documentation Django)
- [Référence de l'API QuerySet](https://docs.djangoproject.com/fr/2.2/ref/models/querysets/) (Documentation Django)

{{PreviousMenuNext("Learn/Server-side/Django/skeleton_website", "Learn/Server-side/Django/Admin_site", "Learn/Server-side/Django")}}

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
