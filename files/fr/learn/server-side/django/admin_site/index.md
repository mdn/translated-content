---
title: 'Django didactique Section 4: Site d''administration de Django'
slug: Learn/Server-side/Django/Admin_site
tags:
  - Apprentissage
  - Article
  - Didacticiel
  - Débutant
  - Python
  - django
  - django_admin
translation_of: Learn/Server-side/Django/Admin_site
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Models", "Learn/Server-side/Django/Home_page", "Learn/Server-side/Django")}}

Nous avons créé le modèle de données pour le site web de la [bibliothèque locale](/fr/docs/Learn/Server-side/Django/Tutorial_local_library_website). Dans ce chapitre nous allons utiliser le site d'administration pour introduire des données réelles pour les livres. Dans un premier temps, nous aborderons la manière d'enregistrer les données des objets sur le site d'administration et comment se connecter au site et créer des données. La fin de ce chapitre sera dédié à des éléments d'amélioration possible du site d'administration.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requis:</th>
      <td>
        Avoir complété
        <a href="/fr/docs/Learn/Server-side/Django/Models"
          >Django didactique Section 3: Utilisation des modèles de données</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif:</th>
      <td>
        Comprendre les avantages et les limites du site d'administration de
        Django. Utiliser ce site pour enregistrer des données pour les objets
        créés dans le chapitre précédent.
      </td>
    </tr>
  </tbody>
</table>

## Survol

Le site d'administration et l'application admin associée de Django peut utiliser les objets déclarés du modèle de données pour réaliser automatiquement un espace de publications, de création, de mise à jour ou de suppression d'enregistrements. Cet outil permet d'économiser du temps pendant les développements et de tester rapidement le modèle de données et par voie de conséquence de vérifier la disponibilité des données et la cohérence du modèle créé. En fonction de votre type d'application web, le site d'administration peut aussi servir à gérer les données du site en production. Comme une approche centrée sur le modèle de données n'est pas appropriée à une présentation utilisateur, les concepteurs de Django recommandent de ne se servir de ce site que pour une administration interne des données (c'est-à-dire, juste pour les administrateurs techniques ou fonctionnels de l'application).

Quand nous avons créé [le squelette du projet](/fr/docs//Learn/Server-side/Django/skeleton_website), nous avons généré automatiquement toute ce qui était nécessaire à son administration au sein de l'application web ([le détail des relations en jeux](https://docs.djangoproject.com/fr/2.2/ref/contrib/admin/) sont décrites sur le site documentaire Django). Au final, vous n'aurez juste qu'à ajouter vos modèles dans l'administration du site en les enregistrant. A la fin de ce chapitre, vous aurez des pistes sur l'une des manière d'améliorer l'affichage des données dans la zone d'administration.

Passons aux actes ! Après l'enregistrement des objets du modèle relationnel, nous verrons comment créer un super-utilisateur, s'authentifier et ensuite créer quelques livres, auteurs et ouvrages à la disposition des lecteurs. Ces données seront très utiles pour tester ensuite les vues et gabarits qui seront abordés dans les chapitres suivants.

## Enregistrer les objets de la modélisation

En premier lieu, il faut editer le fichier **admin.py** de l'application catalog (c'est-à-dire le fichier **./locallibrary/catalog/admin.py**). Il devrait ressembler à celui ci-dessous — notez qu'il contient d'ores et déjà l'import du module `django.contrib.admin`:

```python
from django.contrib import admin

# Register your models here.
```

L'enregistrement de objets de modélisation se fait par l'appel de la fonction `admin.site.register` comme indiqué ci-dessous. Il vous suffit pour le moment de copier le texte ci-dessous et de l'ajouter à la fin du fichier.Register the models by copying the following text into the bottom of the file.

```python
from catalog.models import Author, Genre, Book, BookInstance

admin.site.register(Book)
admin.site.register(Author)
admin.site.register(Genre)
admin.site.register(BookInstance)
```

> **Note :** Si vous avez répondu au défi de la modelisation des langues des livres ([voir le chapitre précédent sur les modèles de données](/fr/docs/Learn/Server-side/Django/Models)), vous pouvez aussi importer cet objet !
>
> Cela devrait être de la forme : `admin.site.register(Language)` et n'oubliez pas d'importer l'objet.

C'est la méthode la plus rapide et la plus simple pour enregistrer un ou plusieurs modèles. Le site d'administration est très adaptable et nous aborderons plus loin ces questions.

## Générer un super-utilisateur

Pour acceder au site d'administration, il est necessaire de s'authentifier avec un utilisateur qui dispose du statut _Statut d'équipe_ activé. Afin de visualiser et créer des enregsitrement, vous aurez aussi besoin de disposer de droits de manipulation des obejts. A ce stade, vous pouvez créer à l'aide du fichier **manage.py** un super-utilisateur qui dispose de tous les droits et permissions.

Exécutez la commande python ci-dessous qui appelle le fichier **manage.py** en étant dans le même dossier que le fichier (c'est-à-dire **./locallibrary/**), pour créer le super-utilsiateur. La commande va vous demander de répondre le nom d'utilsiateur, l'adresse mail et un mot de passe fort.

```bash
python3 manage.py createsuperuser
```

Une fois cette étape réalisée, vous pouvez redémarrer le serveur de développement :

```bash
python3 manage.py runserver
```

## Accéder et utiliser le site admin

Pour vous authentifier au site, ouvrez l'URL _/admin_ du site local (concrètement, [http://127.0.0.1:8000/admin](http://127.0.0.1:8000/admin/)) et identifiez vous avec votre compte de super-utilisateur.

> **Note :** Vous serez redirigé⋅e vers l'application interne à Django de gestion de l'authentification et la pages de demande d'authentitification avant d'accéder réellement au site d'administration.
>
> Si vous accéder au site local sans /admin, vous aurez un message d'erreur car les routages d'URL n'ont pas encore été traité. ne vous en inquiétez pas cela va venir...

Cet partie du site affiche tous les modèles définis et déclarés dans le fichier de contrôle de l'administration du site. Les objets sont regroupés par application (pour notre cas, uniquement l'application Catalog à cette étape des travaux). Vous pouvez cliquez sur chacun des noms d'objet publiés pour accéder à l'écran qui gère les informations sur les objets de ce type contenu en base de données et vous pouvez les éditer et les modifier. Vous pouvez aussi cliquer sur le lien **+ Ajouter** pour créer un nouvel enregistrement.

![Admin Site - Home page](admin_home.png)

Cliquez sur le lien **+ Ajouter** à la droite de l'objet Books pour créer un nouveau livre. Le site va afficher une page de saisie de données (analogue à celle ci-dessous). Notez que Django prend en compte le type de champs définit dans le modèle pour utiliser le widget associé ainsi que le champs `help_text` quand vous l'aviez défini.

Entrez les valeurs des champs. Pour les champs qui relèvent de relations entre objet, vous pouvez utiliser le bouton + pour accéder en cascade au formulaire de saisie des informations nécessaires à la créarion de cette objet. Vous pouvez aussi sélectionner un objet si d'autres avaient été créés précédement. Ne pas oublier de cliquer sur **Enregistrer et ajouter un nouveau** ou **Enregistrer et continuer les modification** pour sauvegarder en base de données les informations saisies.

![Admin Site - Book Add](admin_book_add.png)

> **Note :** À ce stade, prenez le temps d'enregistrer plusieurs livres, genres et auteurs. Assurez-vous que chacun est associé à plusieurs autres éléments cela rendra vos listes à venir plus riches et intéressantes quand nous aborderons ces sujets.

Après avoir saisie les informations et ajouté vos livres, cliquez sur le lien **Accueil** pour revenir à la page principale du site d'administration. Cliquez sur le lien **Books** pour afficher la liste des livres enregistrés (ou sur d'autres liens pour voir les autres objets présents en base). Après avoir ajouter quelques livres, votre page devrait ressembler à celle ci-dessous. La liste des livres est affichée par titre ; c'est, en fait, la valeur délivrée par la méthode `__str__()` du modèle d'objet Book comme cela a été codé dans le précédent chapitre.

![Admin Site - List of book objects](admin_book_list.png)

À partir de la liste affichée, vous pouvez supprimer des instances en selectionnant les items par les cases à cocher à gauche du titre puis _supprimer..._ dans la liste des actions proposée puis en cliquant sur **Envoyer**. Vous pouvez aussi ajouter des livres en cliquant sur **AJOUTER BOOK**.

Vous pouvez editer un livre en cliquant son nom sur la liste des ouvrages. La page d'édition, image ci-dessous, est proche de celle d'ajout d'un livre. Les principales différences sont le titre de la page (Modification de book, au lieu d'ajout de bbok), l'ajout en rouge du bouton supprimer, l'historique des modifications et voir sur le site. Ce dernier bouton est visible car nous créer la méthode `get_absolute_url()` dans la définition du modèle de données (à ce stade, une erreur sera provoquée si vous cliquez sur ce bouton).

![Admin Site - Book Edit](admin_book_modify.png)

Revenez à la page d'accueil (à l'aide du lien **Accueil** du fil d'Ariane), puis affichez les listes des **Authors** et des **Genres**. Vous devriez déjà en avoir créé un certain nombre à partir de l'ajout des nouveaux livres, mais n'hésitez pas à en ajouter d'autres.

Ce qui manque actuellement ce sont des _Book Instances_. Vous n'en avez pas car elles ne sont pas créées à partir des objets Books (bien que vous pourriez créer un objet `Book` à partir d'un objet `BookInstance` car c'est la nature de la relation `ForeignKey`). Retournez à la page d'acceuil et cliquez sur le bouton **Ajouter** associé aux objets Book Instance et accéder à l'écran de création. Vous pouvez noter le très grand identifiant unique global utilisé pour identifier séparelment les ouvrages.

![Admin Site - BookInstance Add](admin_bookinstance_add.png)

Créez plusieurs de ces enregistrements pour chacun de vos livres. Définissez un statut **Available** (_Disponible_) pour certains d'entre eux et **On loan** (_Prêt_) pour d’autres. Pour un statut différent de _Available_, vous devrez préciser une date d'échéance à venir.

Nous avons terminé cette étape ! Vous savez comment configurer et utiliser le site d'administration. Vous pouvez continuer à créer des enregistrements pour Book, BookInstance, Genre et Author, que nous pourrons utiliser une fois que nous aurons créé nos propres vues de détail.

## Configuration avancée

La cadriciel Django réalise une excellente assistance avec la création d'un site d'administration de base en utilisant les données des enregistrements effectués :

- Pour chaque modèle, les enregistrements sont identifiés par le résultat de la méthode `__str__()`, et les détails sont accessibles par des vues dédiées. Par défaut, ces vues et formulaires disposent d'un menu en haut et vous pouvez opérer des opérations de suppressions en bloc en sélectionnant les enregistrements.
- Le détail de chaque modèle est contenu dans un formulaire où chaque champ est affiché verticalement dans l'ordre de déclaration de ces derniers dans le modèle d'objet.

mais vous avez la possibilité de personnaliser le comportement du site d'administration. Vous allez pouvoir notamment faire :

- Des vues en liste

  - Ajouter des champs ou des informations supplémentaires affichés pour chaque enregistrement.
  - Ajouter des filtres pour sélectionner les enregistrements répertoriés, en fonction de la date ou d’une autre valeur de sélection (par exemple, le statut du prêt du livre).
  - Ajouter des options supplémentaires au menu Actions dans les vues de liste et choisir l'emplacement où ce menu est affiché dans le formulaire.

- Vues détaillées

  - Choisir les champs à afficher (ou à exclure), ainsi que leur ordre, leur groupement, leur caractère modifiable, le widget utilisé, leur orientation, etc.
  - Ajouter des champs associés à un enregistrement pour permettre la modification en ligne (par exemple, ajoutez la possibilité d'ajouter et de modifier des enregistrements de livre lors de la création de leur auteur).

Dans la section qui suit, nous allons effectuer quelques modification pour améliorer l'interface de votre application _LocalLibrary_. Nous allons notamment ajouter des informations pour les objets `Book` et `Author`, et améliorer la présentation de leur vue d'édition. Il n'y aura pas de changement pour les objets `Language` et `Genre` qui ne possèdent pas assez d'information pour que cela puisse avoir une incidence réelle !

Le détail complet de la personnalisation du site d'administration est disponible [sur le site documentaire de Django](https://docs.djangoproject.com/fr/2.2/ref/contrib/admin/).

### Enregistrer un objet de la classe ModelAdmin

Pour modifier la manière d'afficher un objet hérité de la classe Model dans l'interface d'administration, vous devez définir une classe d'objet héritée de la classe ModelAdmin qui décrit l'affichage d'un objet et de l'enregistrer avec votre objet Model.

Commençons avec l'objet `Author`. Éditez le fichier **admin.py** dans le dossier catalog de l'application(concrètement le fichier **/locallibrary/catalog/admin.py**). Commentez la ligne qui vous a permis d'enregistrer l'objet `Author` :

```js
# admin.site.register(Author)
```

Ensuite ajoutez une nouvelle classe d'objets `AuthorAdmin` et enregistrez-le comme indiqué ci-dessous.

```python
# Define the admin class
class AuthorAdmin(admin.ModelAdmin):
    pass

# Register the admin class with the associated model
admin.site.register(Author, AuthorAdmin)
```

Ensuite nous allons opérer de manière analogue avec un objet hérité de `ModelAdmin` pour les objets `Book`, et `BookInstance`. À nouveau, nous commentons les enregistrements initiaux :

```js
# admin.site.register(Book)
# admin.site.register(BookInstance)
```

Puis nous créons et enrgistrons les nouveaux modèles. Pour les besoins de l'exercice, nous allons utiliser, pour enregistrer ces modèles, le décorateur `@register` qui réalise la même opération que la méthode `admin.site.register()` :

```python
# Register the Admin classes for Book using the decorator
@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    pass

# Register the Admin classes for BookInstance using the decorator
@admin.register(BookInstance)
class BookInstanceAdmin(admin.ModelAdmin):
    pass
```

Pour le moment, toutes les classes d’administration sont vides (cf. pass), par conséquent le comportement d'affichage n'est pas modifié. Cependant, nous allons pouvoir désormais modifier les comportements d'affichage pour chacun des objets nouvellement enregistrés.

### Configurer les vues en liste

La liste des auteurs (objet `Author`) est affichée dans l'application _LocalLibrary_ à l'aide du nom généré par la méthode  `__str__()`. Ceci fonctionne bien, judqu'à ce que vous aurez de nombreux auteurs et éventuellement des doublons parmi ces auteurs. Pour bien les différencier, ou simplement parce que vous souhaitez avoir directement plus d'information, vous allez utiliser la directive [list_display](https://docs.djangoproject.com/fr/2.2/ref/contrib/admin/#django.contrib.admin.ModelAdmin) pour ajouter d'autres champs de l'objet `Author`.

Modifiez votre classe `AuthorAdmin` comme décrit ci-dessous (vous pouvez copier et coller le code). Les noms de champs à afficher dans la liste sont déclarés dans un tuple dans l'ordre requis. Ils sont identiques à ceux spécifiés dans votre modèle d'objet `Author`.

```python
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('last_name', 'first_name', 'date_of_birth', 'date_of_death')
```

Si vous accèdez à la page d'administration des auteurs, vous devriez obtenir une page équivalente à celle ci-dessous :

![Admin Site - Improved Author List](admin_improved_author_list.png)

Pour les livres, nous allons visulaiser les objets  `Book` en affichant les champs `author` and `genre`. Le champs `author` est de type `ForeignKey` décrivant une relation un à n. En conséquence, nous afficherons l'élément produit par la méthode `__str__()` de l'objet `Author` pour l'instance associée à votre livre. Le genre est une relation n à n, donc nous allons avoir à traiter son affichage de manière particulière. Modifiez la classe `BookAdmin` comme suit :

```python
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'display_genre')
```

Le champ genre représente une relation n à n (`ManyToManyField`) qui ne peut pas être prise en charge par la directive `list_display`. Le coût d'accès à la base de donnée peut être important et donc le cadriciel se protège de ce phénomène. A la place, nous devons définir une fonction(`display_genre`) qui permettra de traiter l'affichage des informations souhaitées pour le genre.

> **Note :** C'est dans un but pédagogique que nous recherchons ici l'affichage du `genre` qui n'a peut-être pas nécessaire d'intérêt et peut représenter un coût d'accès. Nous montrons, ici, comment appler les fonctions dans vos modèles ce qui sera très utile pour la suite de vos applications  — par exemple pour ajouter un lien de suppression de vos enregistrements en liste.

Ajoutez le code ci-dessous dans votre modèle d'objet `Book` (concrètement dans le fichier **locallibrary/catalog/models.py**). Cette fonction génère une chaîne de caractère contenant les trois premières valeurs de tous les genres (s'ils existent) et créer une courte destription (`short_description`) qui sera utilisé par le site d'administration avec cette méthode.

```python
    def display_genre(self):
        """Create a string for the Genre. This is required to display genre in Admin."""
        return ', '.join(genre.name for genre in self.genre.all()[:3])

    display_genre.short_description = 'Genre'
```

Après avoir sauvegardé vos fichiers models.py et admin.py, vous pouvez accéder à la page web d'administration des livres et vous y découvrirez une page semblable à celle ci-dessous :

![Admin Site - Improved Book List](admin_improved_book_list.png)

Les champs `Genre` `Language` ne dispose que d'une seule valeur. Il n'est donc pas utile de créer une page d'affichage spélicale.

> **Note :** Vous trouverez en fin d'article dans la défis personnel des propositions pour améliorer les ouvrages en prêt `BookInstance` !

### Ajouter des filtres

Si vous avez beaucoup d'éléments à l'affichage des listes, il devient utile de d'appliquer des filtres pour les afficher. Ceci est réalisé avec l'attribut `list_filter` de la classe ModelAdmin. Modifier votre classe d'objet d'affichage `BookInstanceAdmin` avec les code ci-dessous :

```python
class BookInstanceAdmin(admin.ModelAdmin):
    list_filter = ('status', 'due_back')
```

La page de la vue en liste des ouvrages à consultation (BookInstance) est désormais agrémentée d'un bloc de filtrage par statut (champs status) et date de retour (due back). Vous pouvez sélectionner la valeur de ces deux critères de filtrage (remarquez la manière avec laquelle les valeurs des critères est proposée).

![Admin Site - BookInstance List Filters](admin_improved_bookinstance_list_filters.png)

### Organiser la vue d'affichage d'un modèle

La vue est agencée, par défaut, en affichant verticalement dans l'ordre de déclaration des champs de l'objet modèle. Cette règle d'affichage peut être modifiée en indiquant quels champs afficher (ou exclure) et organiser les informations en sections avec un affichage horizontal ou vertical et les widgets à utiliser.

> **Note :** Les modèles de l'application _LocalLibrary_ ne sont pas très compliqués sans énormément d'information à traiter. Il n'y a pas un grand besoin de changement d'affichage ; les éléments ci-dessous sont données pour avoir une idée des possibilités et savoir, le moment venu, comment faire.

#### Contrôler l'affichage et la dispostion des champs

Modifiez votre classe d'objet `AuthorAdmin` en ajoutant l'attribut `fields` comme indiqué en gras ci-dessous :

```python
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('last_name', 'first_name', 'date_of_birth', 'date_of_death')
    fields = ['first_name', 'last_name', ('date_of_birth', 'date_of_death')]
```

Ce champ (`fields`) contrôle l'affichage des champs. Les champs déclarés sont affichés verticalement dans l'ordre de déclaration et seront affichés en groupe horizontalement s'ils sont déclarés dans un tuple (c'est le cas pour les date de naissance et de décès des auteurs).

La page web de votre application locale devrait ressembler à celle ci-dessous :

![Admin Site - Improved Author Detail](admin_improved_author_detail.png)

> **Note :** Vous pouvez aussi utiliser l'attribut `exclude` pour identifier des attributs du modèle que vous souhaitez exclure de l'affichage (les autres attributs seront alors affichés). Pour plus de détails vous pouvez consulter la documentation Django sur l'attribut [exclude](https://docs.djangoproject.com/fr/2.2/ref/contrib/admin/#django.contrib.admin.ModelAdmin.exclude).

#### Organiser des sections dans votre vue de détail

Vous avez la possibilité de créer des sections à l'affichage pour regrouper des éléments à renseigner en utilisant l'attribut [fieldsets](https://docs.djangoproject.com/fr/2.2/ref/contrib/admin/#django.contrib.admin.ModelAdmin.fieldsets).

Nous allons utiliser l'objet `BookInstance` pour mettre en avant cette possibilité. Nous avons à afficher des informations sur l'ouvrage (nom, édition, id) et sur sa disponibilité actuelle ou à venir (statut et retour de prêt). Nous choisissons d'afficher ces éléments dans deux sections différentes, l'une nommée et l'autre pas. Modifiez l'objet BookInstanceAdmin avec le texte en gras comme ci-dessous :

```python
@admin.register(BookInstance)
class BookInstanceAdmin(admin.ModelAdmin):
    list_filter = ('status', 'due_back')

    fieldsets = (
        (None, {
            'fields': ('book', 'imprint', 'id')
        }),
        ('Availability', {
            'fields': ('status', 'due_back')
        }),
    )
```

Chaque section peut avoir un titre (ou aucun si vous indiquez la valeur `None`) et des champs regroupés à l'aide de tuples enregistrés dans un dictionnaire — le schéma de déclaration peut paraître compliqué à décrire mais assez aisé à comprendre à la lecture du code ci-dessus formaté pour être plus compréhensible.

Le résultat de cette description devrait vous apparaître de manière analogue à celle présente ci-dessous :

![Admin Site - Improved BookInstance Detail with sections](admin_improved_bookinstance_detail_sections.png)

### Publier des enregistrements associés

Parfois, il peut être très utile d'ajouter à l'affichage des éléments associés en même temps. C'est le cas, par exemple, pour les copies d'ouvrage associés à un livre en bibliothèque. Il est utile pour le bibliothécaire de disposer à la fois des informations sur le livre et des copies présentes ou non en rayonnage..

Pour cela, vous pouvez utiliser un d'objet pour un affichage horizontal ([TabularInline](https://docs.djangoproject.com/fr/2.2/ref/contrib/admin/#django.contrib.admin.TabularInline)) ou vertical ([StackedInline)](https://docs.djangoproject.com/fr/2.2/ref/contrib/admin/#django.contrib.admin.StackedInline) (qui n'est autre que l'affichage standard des données). Modifiez le code associé à votre modèle `BookInstance` dans le fichier **admin.py** pour disposer des informations _inline_ à l'affichage des informations sur votre objet `Book`. Gardez en mémoire que c'est l'objet  `BookAdmin` qui gère l'affichage les informations de l'objet `Book`; c'est donc `BookAdmin` il doit donc être modifié :

```python
class BooksInstanceInline(admin.TabularInline):
    model = BookInstance

@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'display_genre')
    inlines = [BooksInstanceInline]
```

Si vous allez consulter un livre, vous devriez pouvoir, au bas de la page, consulter la liste des copies enregistrées :

![Admin Site - Book with Inlines](admin_improved_book_detail_inlines.png)

Dans le cas présent nous avons juste décidé d'afficher toutes les informations des copies associées à un livre. Si vous consultez sur la documentation Django les informations relatives au type [TabularInline](https://docs.djangoproject.com/fr/2.2/ref/contrib/admin/#django.contrib.admin.TabularInline) vous aurez accès à l'ensemble des éléments qui permettent de filtrer et afficher les éléments dont vous aurez besoin.

> **Note :** Il y a quelques limitations pénibles à ces outils. Si vous observez bien la liste des copies pour un ouvrage, vous decouvrirez des copies fantômes sans nom et informations pré-reservées pour de futures instances à enregistrer. Il serait préférable de ne pas les avoir et vous devriez alors appliquer un filtre pour éliminer de l'affichage ces copies. Vous pourriez aussi ajouter une section particulière pour permettre d'ajouter de nouvelles copies dans les rayonnages... La première solution est assez rapide à traiter en utilisant l'attribut `extra` à 0 dans la définition de l'objet `BooksInstanceInline` ... essayez !

## Défi

Beaucoup de sujets ont été abordés dans ce chapitre, c'est l'occasion de les mettre en application :

1.  Améliorer l'affichage des objets `BookInstance`, ajoutez les éléments nécessaire pour disposer du livre, du statut de la date de fin de prêt et de l'identifiant au lieu du code unique et du titre donné par la méthode `__str__()` de l'objet.
2.  Ajouter une information associée pour disposer du détail des informations sur l'auteur. Appuyez vous sur l'exemple avec les objets `Book`/`BookInstance` pour y parvenir.

## Résumé

Beaucoup de sujets ont été abordés dans ce chapitre... Vous avez acquis les base du site d'administration et à créer un suoper-utilisateur, voius avez aussi navigué dans le site d'admlinistration et vous avez appris à modifier les formulaires de saisie et comment ajouter, modifier ou supprimer des données.

## A voir aussi

- [Ecrire sa première application Dajngo, 2ème partie](https://docs.djangoproject.com/fr/2.2/intro/tutorial02/#introducing-the-django-admin)  (Django docs)
- [Le site d'administration de Django](https://docs.djangoproject.com/fr/2.2/ref/contrib/admin/) (Django Docs)

{{PreviousMenuNext("Learn/Server-side/Django/Models", "Learn/Server-side/Django/Home_page", "Learn/Server-side/Django")}}

## In this module

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
