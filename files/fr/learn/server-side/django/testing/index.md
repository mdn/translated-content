---
title: 'Django Tutorial Part 10: Testing a Django web application'
slug: Learn/Server-side/Django/Testing
tags:
  - Beginner
  - CodingScripting
  - Django Testing
  - Testing
  - Tutorial
  - django
  - server-side
  - tests
  - unit tests
translation_of: Learn/Server-side/Django/Testing
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Forms", "Learn/Server-side/Django/Deployment", "Learn/Server-side/Django")}}

Quant un site web grandit, il devient plus difficile à tester manuellement. Non seulement il y a plus de choses à tester, mais encore, comme les interactions entres ses composants deviennent plus complexes, un léger changement dans une partie de l'application peut affecter les autres parties, si bien qu'il va être nécessaire de faire beaucoup de modifications pour s'assurer que tout continue de fonctionner, et qu'aucune erreur ne sera introduite quand il y aura encore plus de modifications. Une façon de limiter ces problèmes est d'écrire des tests automatiques qui puissent être lancés d'une manière simple et fiable à chaque fois que vous faites une modification. Ce tutoriel montre comment automatiser des _tests unitaires_ sur votre site web en utilisant le framework de tests de Django.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis:</th>
      <td>
        Avoir terminé tous les tutoriels précédents, y compris
        <a href="/fr/docs/Learn/Server-side/Django/Forms"
          >Django Tutorial Part 9: Working with forms</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif:</th>
      <td>
        Comprendre comment écrire des tests unitaires pour des sites web basés
        sur Django.
      </td>
    </tr>
  </tbody>
</table>

## Vue d'ensemble

Le site [Local Library](/fr/docs/Learn/Server-side/Django/Tutorial_local_library_website) a actuellement des pages pour afficher des listes de tous les livres et auteurs, des pages de détail pour les éléments de type `Book` et `Author`, une page pour renouveler des `BookInstance`s, et des pages pour créer, mettre à jour et effacer des éléments de type `Author` (et également des enregistrements de type `Book`, si vous avez relevé le _défi_ dans le [tutoriel sur les formulaires](/fr/docs/Learn/Server-side/Django/Forms)). Même avec ce site relativement petit, naviguer manuellement vers chaque page et vérifier _superficiellement_ que tout fonctionne comme prévu peut prendre plusieurs minutes. Quand nous allons faire des modifications et agrandir le site, le temps requis pour vérifier manuellement que tout fonctionne "proprement" va grandir. Si nous continuons comme cela, nous allons sûrement passer beaucoup de temps à tester notre code, et peu à l'améliorer.

Les tests automatiques peuvent vraiment nous aider à régler ce problème. Les avantages évidents sont qu'ils peuvent être lancés bien rapidement que des tests manuels, peuvent réaliser des tests à un niveau bien plus bas de détail, et tester exactement les mêmes fonctionnalités à chaque fois (des testeurs humains sont loin d'être aussi fiables !). Parce qu'ils sont rapides, les tests automatisés peuvent être exécutés plus régulièrement, et si un test échoue, ils pointent exactement vers la partie du code qui n'a pas fonctionné comme prévu.

De plus, les tests automatisés peuvent se comporter comme le premier "utilisateur" de votre code dans le monde réel, vous obligeant à être rigoureux quand vous définissez et documentez la manière dont votre site doit se comporter. Souvent ils constituent une base pour vos exemples et votre documentation. Pour ces raisons, il existe des processus de développement de logiciels qui commencent par la définition et l'implémentation de tests, et ce n'est qu'après que le code est écrit pour atteindre le comportement attendu (par ex. le développement [test-driven](https://en.wikipedia.org/wiki/Test-driven_development) et le développement [behaviour-driven](https://en.wikipedia.org/wiki/Behavior-driven_development)).

Ce tutoriel montre comment écrire des tests automatisés pour Django, en ajoutant un certain nombre de tests au site web _LocalLibrary_.

### Catégories de tests

Il y a beaucoup de genres, de niveaux et de classifications de tests, ainsi que de manières de tester. Les tests automatisés les plus importants sont:

- Les tests unitaires
  - : Ils vérifient le comportement fonctionnel de composants individuels, souvent au niveau des classes et des fonctions.
- Les tests de régression
  - : Ce sont des tests qui reproduisent des bugs historiques. Chaque test a été lancé originellement pour vérifier que le bug a été résolu, et on le relance ensuite pour s'assurer qu'il n'a pas été ré-introduit suite aux changements de code.
- Les test d'intégration
  - : Ils vérifient comment les groupes de composants fonctionnent quand ils sont utilisés ensemble. Les tests d'intégraion sont attentifs aux interactions souhaitées entre composants, mais pas nécessairement aux opérations internes de chaque composant. Ils peuvent couvrir des groupes simples de composants à travers tout le site.

> **Note :** Les autres genres habituels de tests comprennent : la boîte noire, la boîte blanche, les tests manuels, automatiques, de canari (canary), de fumée (smoke), de conformité (conformance), d'approbation (acceptance), fonctionnels, système, performance, chargement et stress. Consultez pour plus d'information sur chacun d'eux.

### Que fournit Django pour tester ?

Tester un site web est une tâche complexe, car c'est une opération qui comporte plusieurs couches de logique : depuis la couche HTTP, la gestion des requêtes, les modèles d'interrogation de bases de données, jusqu'à la validation des formulaires, leur traitement et le rendu des templates.

Django fournit un framework de test avec une petite hiérarchie de classes construites sur la librairie standard de Python [`unittest`](https://docs.python.org/3/library/unittest.html#module-unittest "(in Python v3.5)"). Malgré son nom, ce framework de test est utilisable pour les tests unitaires aussi bien que pour les tests d'intégration. Le framework Django ajoute les méthodes et les outils d'une API pour aider à tester un site web et les comportements spécifiques à Django. Ces méthodes vous permettent de simuler des requêtes, d'insérer des données de test et d'inspecter la sortie de votre application. Django fournit aussi une API ([LiveServerTestCase](https://docs.djangoproject.com/en/2.1/topics/testing/tools/#liveservertestcase)) et des outils pour [utiliser d'autres frameworks de test](https://docs.djangoproject.com/en/2.1/topics/testing/advanced/#other-testing-frameworks). Par exemple vous pouvez intégrer le célèbre framework [Selenium](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment) pour simuler l'interaction entre un utilisateur et un vrai navigateur.

Pour écrire un test, vous partez de l'une des classes de test de base fournies par Django (ou par _unittest_) ([SimpleTestCase](https://docs.djangoproject.com/en/2.1/topics/testing/tools/#simpletestcase), [TransactionTestCase](https://docs.djangoproject.com/en/2.1/topics/testing/tools/#transactiontestcase), [TestCase](https://docs.djangoproject.com/en/2.1/topics/testing/tools/#testcase), [LiveServerTestCase](https://docs.djangoproject.com/en/2.1/topics/testing/tools/#liveservertestcase)), et ensuite vous écrivez des méthodes séparées pour vérifier que telle fonctionnalité se comporte comme prévu (les tests utilisent des méthodes "assert" pour vérifier qu'une expression retourne `True` ou `False`, ou que deux valeurs sont égales, etc.). Quant vous commencez à lancer un test, le framework exécute les méthodes de test écrites dans vos classes dérivées. Les méthodes de test sont lancées de manière indépendante, avec en commun un réglage initial (_setUp_) et/ou un comportement de fin (_tearDown_) définis dans la classe, comme indiqué ci-dessous.

```python
class YourTestClass(TestCase):
    def setUp(self):
        # Setup run before every test method.
        pass

    def tearDown(self):
        # Clean up run after every test method.
        pass

    def test_something_that_will_pass(self):
        self.assertFalse(False)

    def test_something_that_will_fail(self):
        self.assertTrue(False)
```

La meilleure classe de base pour la plupart des tests est [django.test.TestCase](https://docs.djangoproject.com/en/2.1/topics/testing/tools/#testcase). Cette classe de test crée une base de données vide avant que ses tests ne soient lancés, et lance toutes les fonctions de test dans sa propre transaction. La classe possède aussi un [Client](https://docs.djangoproject.com/en/2.1/topics/testing/tools/#django.test.Client "django.test.Client") de test, que vous pouvez utiliser pour simuler l'interaction entre un utilisateur et le code au niveau de la vue. Dans les sections suivantes, nous allons nous concentrer sur les tests unitaires, créés en utilisant la classe de base [TestCase](https://docs.djangoproject.com/en/2.1/topics/testing/tools/#testcase).

> **Note :** La classe [django.test.TestCase](https://docs.djangoproject.com/en/2.1/topics/testing/tools/#testcase) est très commode, mais peut avoir pour effet de ralentir certains tests plus que nécessaire (tous les tests n'ont pas besoin de créer leur propre base de données ni de simuler une interaction au niveau de la vue). Une fois que vous serez familiarisé avec ce que vous pouvez faire avec cette classe, vous voudrez sans doute remplacer certains de vos tests avec d'autres classes plus simples parmi celles qui sont disponibles.

### Que faut-il tester ?

Vous pouvez tester tous les aspects de votre code, mais non les librairies ou fonctionnalités faisant partie de Python ou de Django.

Ainsi par exemple, considérez le modèle `Author` défini ci-dessous. Vous n'avez pas besoin de tester explicitement que `first_name` et `last_name` ont été stockés correctement comme `CharField` dans la base de données, car c'est là quelque chose de défini par Django (cependant, bien sûr, vous allez inévitablement tester cette fonctionnalité pendant le développement). Vous n'avez pas non plus besoin de tester que `date_of_birth` a été validé comme champ date, car, encore une fois, cela est implémenté par Django.

En revanche, vous pouvez tester que les textes utilisés pour les labels (_First name, Last name, Date of birth, Died_), ainsi que le respect de la taille allouée au champ texte (100 caractères), car c'est là une partie de votre propre design et quelque chose qui pourrait être cassé/modifié dans le futur.

```python
class Author(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    date_of_birth = models.DateField(null=True, blank=True)
    date_of_death = models.DateField('Died', null=True, blank=True)

    def get_absolute_url(self):
        return reverse('author-detail', args=[str(self.id)])

    def __str__(self):
        return '%s, %s' % (self.last_name, self.first_name)
```

De même, vous pouvez tester que les méthodes personnalisées `get_absolute_url()` et `__str__()` se comportent comme prévu, car elles appartiennent à votre logique code/métier. Dans le cas de `get_absolute_url()`, vous pouvez supposer que la méthode Django `reverse()` a été implémentée correctement, aussi ce que vous allez tester, c'est que la vue associée a été effectivement définie.

> **Note :** Les lecteurs attentifs auront noté que nous pourrions aussi vouloir limiter les dates de naissance et de décès à des valeurs sensibles, et vérifier que le décès intervient après la naissance. En Django, cette contrainte est ajoutée à vos classes de formulaires (bien que vous puissiez définir des validateurs pour les champs du modèle et des validateurs de modèles, ceux-ci ne sont utilisés qu'au niveau du formulaire s'ils sont appelés par la méthode clean() du modèle. Cela requière un ModelForm ou bien la méthode clean() du modèle a besoin d'être appelée explicitement.)

Avec cela en tête, commençons à voir comment définir et lancer des tests.

## Vue d'ensemble de la structure de test

Avant d'entrer dans le détail de "que tester", voyons d'abord brièvement _où_ et _comment_ les tests sont définis.

Django utilise le [built-in test discovery](https://docs.python.org/3/library/unittest.html#unittest-test-discovery "(in Python v3.5)") du module unittest, qui va chercher des tests, sous le répertoire de travail actuel, dans tous les fichiers dont le nom contient le pattern **test.py**. Du moment que vous nommez vos fichiers de manière appropriée, vous pouvez utiliser n'importe quelle structure. Nous vous recommandons de créer un module pour coder vos tests, et d'avoir des fichiers distincts pour les modèles, les vues, les formulaires et tout autre type de code que vous avez besoin de tester. Par exemple :

    catalog/
      /tests/
        __init__.py
        test_models.py
        test_forms.py
        test_views.py

Créez une structure de fichier comme montré ci-dessus, dans votre projet _LocalLibrary_. Le ficheir **\_\_init\_\_.py** doit être vide (il dit simplement à Python que ce répertoire est un package). Vous pouvez créer les trois fichiers de test en copiant et renommant le fichier de test du squelette **/catalog/tests.py**.

> **Note :** le fichier de test du squelette **/catalog/tests.py** a été créé automatiquement quand nous avons [construit le squelette du site web Django](/fr/docs/Learn/Server-side/Django/skeleton_website). Il est parfaitement "légal" de mettre tous vos tests dedans, mais si vous testez correctement, vous allez rapidement vous retrouver avec un fichier de test énorme et impossible à gérer.
>
> Supprimez le fichier de squelette, car nous n'en aurons plus besoin.

Ouvrez le fichier **/catalog/tests/test_models.py**. Ce fichier doit importer `django.test.TestCase`, comme indiqué ci-après :

Open **/catalog/tests/test_models.py**. The file should import `django.test.TestCase`, as shown:

```python
from django.test import TestCase

# Create your tests here.
```

Souvent vous voudrez ajouter une classe de test pour chaque modèle/vue/form que vous voulez tester, avec des méthodes individuelles pour tester une fonctionnalité spécifique. Dans d'autres cas vous pourriez souhaiter avoir une class séparée pour tester un cas d'utilisation spécifique, avec des fonctions de test individuelles pour tester les aspects de ce cas d'utilisation (par exemple, une classe pour tester que tel champ d'un modèle est validé correctement, avec des fonctions pour tester chaque possibilité d'échec). Encore une fois, c'est à vous de décider de la structure à adopter, mais elle sera meilleure si vous êtes cohérent.

Ajoutez la classe de test ci-dessous à la fin du fichier. La classe montre comment construire une classe de test de cas dérivant de `TestCase`.

```python
class YourTestClass(TestCase):
    @classmethod
    def setUpTestData(cls):
        print("setUpTestData: Run once to set up non-modified data for all class methods.")
        pass

    def setUp(self):
        print("setUp: Run once for every test method to setup clean data.")
        pass

    def test_false_is_false(self):
        print("Method: test_false_is_false.")
        self.assertFalse(False)

    def test_false_is_true(self):
        print("Method: test_false_is_true.")
        self.assertTrue(False)

    def test_one_plus_one_equals_two(self):
        print("Method: test_one_plus_one_equals_two.")
        self.assertEqual(1 + 1, 2)
```

La nouvelle classe définit deux méthodes que vous pouvez utiliser pour une configuration pré-test (par exemple, pour créer des modèles ou d'autres objets dont vous aurez besoin pour les tests) :

- `setUpTestData()` est appelée une fois au début du lancement des tests pour un réglage au niveau de la classe. Vous pouvez l'utiliser pour créer des objets qui ne sont pas destinés à être modifiés ou changés dans les méthodes de test.
- `setUp()` est appelée avant chaque fonction de test pour définir des objets qui peuvent être modifiés par le test (chaque fonction de test obtiendra une version "fraîche" de ces objets).

> **Note :** Les classes de test ont aussi une méthode `tearDown()`, que nous n'avons pas utilisée. Cette méthode n'est pas particulièrement utile pour les tests avec bases de données, dans la mesure où la classe de base `TestCase` prend soin pour vous de supprimer la base de données utilisées pour les tests.

En dessous de ces méthodes, nous avons un certain nombre de méthodes de test, qui utilisent des fonctions `Assert`, pour tester si certaines conditions sont vraies, fausses ou égales (`AssertTrue`, `AssertFalse`, `AssertEqual`). Si la condition ne renvoie pas le résultat escompté, le test plante et renvoie une erreur à votre console.

Les méthodes `AssertTrue`, `AssertFalse` et `AssertEqual` sont des assertions standard fournies par **unittest**. Il y a d'autres assertions standard dans le framework, et aussi des [assertions spécifiques à Django](https://docs.djangoproject.com/en/2.1/topics/testing/tools/#assertions), pour tester si une vue redirige (`assertRedirects`), pour tester si tel template a été utilisé (`assertTemplateUsed`), etc.

> **Note :** Normallement vous ne devriez **pas** inclure de fonctions **print()** dans vos tests, comme montré ci-dessus. Nous avons fait cela uniquement pour que vous puissiez voir dans la console (dans la section suivante) l'ordre dans lequel les fonctions de setup sont appelées.

## Comment lancer les tests

La manière la plus facile pour lancer tous les tests est d'utiliser la commande :

```bash
python3 manage.py test
```

Cette commande va lancer la recherche de tous les fichiers ayant la forme **test.py** sous le répertoire courant, et lancer tous les tests définis, en utilisant les classes de base appropriées (ici nous avons un certain nombre de fichiers de test, mais pour le moment seul **/catalog/tests/test_models.py** contient des tests). Par défaut, chaque test ne fera de rapport qu'en cas d'échec, avec ensuite un résumé du test.

> **Note :** Si vous obtenez des erreurs telles que : `ValueError: Missing staticfiles manifest entry ...`, cela peut être dû au fait que le test ne lance pas *collectstatic* par défaut, et que votre application utilise une classe de storage qui le requiert (voyez [manifest_strict](https://docs.djangoproject.com/en/2.1/ref/contrib/staticfiles/#django.contrib.staticfiles.storage.ManifestStaticFilesStorage.manifest_strict) pour plus d'information). Il y a plusieurs façons de remédier à ce problème - la plus facile est de lancer tout simplement *collectstatic* avant de lancer les tests :
>
> ```bash
> python3 manage.py collectstatic
> ```

Lancez les tests dans le répertoire racine de _LocalLibrary_. Vous devriez voir une sortie semblable à celle ci-dessous.

```bash
> python3 manage.py test

Creating test database for alias 'default'...
setUpTestData: Run once to set up non-modified data for all class methods.
setUp: Run once for every test method to setup clean data.
Method: test_false_is_false.
setUp: Run once for every test method to setup clean data.
Method: test_false_is_true.
setUp: Run once for every test method to setup clean data.
Method: test_one_plus_one_equals_two.
.
======================================================================
FAIL: test_false_is_true (catalog.tests.tests_models.YourTestClass)
----------------------------------------------------------------------
Traceback (most recent call last):
  File "D:\Github\django_tmp\library_w_t_2\locallibrary\catalog\tests\tests_models.py", line 22, in test_false_is_true
    self.assertTrue(False)
AssertionError: False is not true

----------------------------------------------------------------------
Ran 3 tests in 0.075s

FAILED (failures=1)
Destroying test database for alias 'default'...
```

Ici nous voyons que nous avons eu un échec pour un test, et nous pouvons voir exactement quelle fonction a planté et pourquoi (cet échec était prévu, car `False` n'est pas `True` !).

> **Note :** La chose la plus importante à apprendre de la sortie de test ci-dessus est qu'il est bien mieux d'utiliser des noms descriptifs/informatifs pour vos objets et méthodes.

Le texte en **gras** ci-dessus n'apparaîtra pas normalement dans la sortie de test (elle est générée par les fonctions `print()` dans nos tests). Cela montre comment la méthode `setUpTestData()` est appelée une fois pour l'ensemble de classe, tandis que `setUp()` est appelée avant chaque méthode.

La section suivante mnotre comment vous pouvez lancer des test spécifiques, et comment contrôler la quantité d'information fournie par les tests.

### Montrer plus d'informations à propos du test

Si vous souhaitez obtenir plus d'informations à propos du test lancé, vous pouvez changer sa _verbosité_. Par exemple, pour faire la liste de ce qui a fonctionné dans le test, comme de ce qui a échoué (ainsi que tout un tas d'informations sur la manière dont la base de données à été initialisée), vous pouvez mettre la verbosité à "2", comme indiqué ci-dessous :

```bash
python3 manage.py test --verbosity 2
```

Les niveaux de verbosité sont 0, 1, 2 et 3, avec "1" comme valeur par défaut.

### Lancer des tests spécifiques

Si vous voulez lancer une sous-sélection parmi vos tests, vous pouvez le faire en spécifiant le chemin complet (avec des points) vers le ou les package(s), module, sous-classe de `TestCase` ou méthode :

```bash
# Run the specified module
python3 manage.py test catalog.tests

# Run the specified module
python3 manage.py test catalog.tests.test_models

# Run the specified class
python3 manage.py test catalog.tests.test_models.YourTestClass

# Run the specified method
python3 manage.py test catalog.tests.test_models.YourTestClass.test_one_plus_one_equals_two
```

## Tests de LocalLibrary

Maintenant que nous savons comment lancer nos tests et quel genre de choses nous avons besoin de tester, regardons quelques exemples pratiques.

> **Note :** Nous n'allons pas écrire tous les tests possibles, mais ce qui suit devrait vous donner une idée sur le fonctionnement des tests, et ce que vous pouvez faire ensuite.

### Modèles

Comme nous l'avons dit ci-dessus, nous devrions tester tout ce qui relève de notre design, ou tout ce qui est défini par du code que nous avons écrit nous-mêmes, mais pas les bibliothèques ou le code qui est déjà testé par Django ou par l'équipe qui développe Python.

Par exemple, considérez le modèle `Author` ci-dessous. Ici nous devrions tester les labels de tous les champs, car, bien que nous n'ayons pas explicitement spécifié la plupart d'entre eux, nous avons un design qui dit ce que ces valeurs devraient être. Si nous ne testons pas ces valeurs, nous ne savons pas que les labels des champs ont les valeurs souhaitées. De même, alors que nous sommes tranquilles sur le fait que Django créera un champ de la longueur indiquée, il est intéressant de lancer un test spécifique pour s'assurer qu'il a été implémenté comme prévu.

```python
class Author(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    date_of_birth = models.DateField(null=True, blank=True)
    date_of_death = models.DateField('Died', null=True, blank=True)

    def get_absolute_url(self):
        return reverse('author-detail', args=[str(self.id)])

    def __str__(self):
        return f'{self.last_name}, {self.first_name}'
```

Ouvrez notre **/catalog/tests/test_models.py**, et remplacez tout le code qui s'y trouve par le code de test ci-après pour le modèle `Author`.

Vous voyez que nous importons d'abord `TestCase` et faisons dériver d'elle notre classe de test (`AuthorModelTest`) en utilisant un nom descriptif, de façon à pouvoir identifier aisément dans la sortie tout test qui échoue. Nous appelons ensuite `setUpTestData()` afin de créer un objet _author_, que nous utiliserons mais que nous ne modifierons jamais dans aucun de nos tests.

```python
from django.test import TestCase

from catalog.models import Author

class AuthorModelTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        # Set up non-modified objects used by all test methods
        Author.objects.create(first_name='Big', last_name='Bob')

    def test_first_name_label(self):
        author = Author.objects.get(id=1)
        field_label = author._meta.get_field('first_name').verbose_name
        self.assertEquals(field_label, 'first name')

    def test_date_of_death_label(self):
        author=Author.objects.get(id=1)
        field_label = author._meta.get_field('date_of_death').verbose_name
        self.assertEquals(field_label, 'died')

    def test_first_name_max_length(self):
        author = Author.objects.get(id=1)
        max_length = author._meta.get_field('first_name').max_length
        self.assertEquals(max_length, 100)

    def test_object_name_is_last_name_comma_first_name(self):
        author = Author.objects.get(id=1)
        expected_object_name = f'{author.last_name}, {author.first_name}'
        self.assertEquals(expected_object_name, str(author))

    def test_get_absolute_url(self):
        author = Author.objects.get(id=1)
        # This will also fail if the urlconf is not defined.
        self.assertEquals(author.get_absolute_url(), '/catalog/author/1')
```

Les tests de champ vérifient que les valeurs des labels de champ (`verbose_name`) et que la taille des champs de type _character_ sont tels que nous les souhaitons. Ces méthodes ont toutes des noms descriptifs et suivent le même pattern :

```python
# Get an author object to test
author = Author.objects.get(id=1)

# Get the metadata for the required field and use it to query the required field data
field_label = author._meta.get_field('first_name').verbose_name

# Compare the value to the expected result
self.assertEquals(field_label, 'first name')
```

Les choses intéressantes à noter sont :

- Nous ne pouvons obtenir le `verbose_name` directement en utilisant `author.first_name.verbose_name`, car `author.first_name` est une _chaîne_ (non un moyen d'accéder à l'objet `first_name`, que nous pourrions utiliser pour accéder à ses propriétés). À la place nous devons utiliser l'attribut `_meta` de author afin d'obtenir une instance de ses champs et utiliser celle-ci pour demander l'information que nous cherchons.
- Nous avons fait le choix d'utiliser `assertEquals(field_label,'first name')` plutôt que `assertTrue(field_label == 'first name')`. La raison en est que, en cas d'échec du test, la sortie vous dira, dans le premier cas, quel est effectivement le label du champ, ce qui rend un peu plus facile le débogage du problème.

> **Note :** Les tests pour les labels de `last_name` et `date_of_birth`, ainsi que le test de la longueur du champ `last_name`, ont été omis. Ajoutez vos propres versions maintenant, en suivant les conventions de nommage et les approches que nous vous avons montrées ci-dessus.

Il nous faut également tester nos méthodes personnalisées. Essentiellement, celles-ci vérifient uniquement que le nom de l'objet a été construit comme prévu, en utilisant le format "Last name", "First name", et que l'URL que nous obtenons pour un élément `Author` est telle que nous l'attendons.

```python
def test_object_name_is_last_name_comma_first_name(self):
    author = Author.objects.get(id=1)
    expected_object_name = f'{author.last_name}, {author.first_name}'
    self.assertEquals(expected_object_name, str(author))

def test_get_absolute_url(self):
    author = Author.objects.get(id=1)
    # This will also fail if the urlconf is not defined.
    self.assertEquals(author.get_absolute_url(), '/catalog/author/1')
```

Maintenant lancez les tests. Si vous avez créé le modèle `Author` comme décrit dans le tutoriel sur les modèles, il est assez probable que vous allez obtenir une erreur pour le label `date_of_death`, comme montré ci-dessous. Le test plante parce qu'il a été écrit en s'attendant à ce que la définition du label suive cette convention de Django : ne pas mettre en capitale la première lettre du label (Django le fait pour vous).

```bash
======================================================================
FAIL: test_date_of_death_label (catalog.tests.test_models.AuthorModelTest)
----------------------------------------------------------------------
Traceback (most recent call last):
  File "D:\...\locallibrary\catalog\tests\test_models.py", line 32, in test_date_of_death_label
    self.assertEquals(field_label,'died')
AssertionError: 'Died' != 'died'
- Died
? ^
+ died
? ^
```

C'est vraiment un bug mineur, mais il met en lumière comment écrire des test peut vérifier de plus près les hypothèses que vous pourriez avoir supposées vraies.

> **Note :** Changez en "died" le label pour le champ date_of_death (/catalog/models.py) et relancez les tests.

La configuration pour tester les autres modèles est semblable pour tous, aussi nous n'allons pas discuter chacune plus longuement. Sentez-vous libre de créer vos propres tests pour nos autres modèles.

### Les Formulaires

La philosophie pour tester vos formulaires est la même que pour tester vos modèles: vous avez besoin de tester tout ce que vous avez codé ou les spécificités de votre design, mais non le comportement du framework sous-jacent, ni celui des autres bibliothèques tierces.

Généralement, cela signifie que vous devriez tester que les formulaires ont bien les champs que vous voulez, et qu'ils sont rendus avec les bons labels et textes d'aide. Vous n'avez pas besoin de vérifier que Django valide correctement les champs selon leurs types (à moins que vous n'ayez créé vos propres champs personnalisés et leurs validations) ; c'est-à-dire que vous n'avez pas besoin de tester qu'un champ email n'accepte que des emails. Cependant vous pouvez avoir besoin de tester toute validation complémentaire que vous vous attendez à voir réalisée sur les champs, et tout message d'erreur généré par votre code.

Considérez notre formulaire pour renouveler les livres. Il a seulement 1 champ pour la date de renouvellement, qui va avoir un label et un texte d'aide que nous avons besoin de vérifier.

```python
class RenewBookForm(forms.Form):
    """Form for a librarian to renew books."""
    renewal_date = forms.DateField(help_text="Enter a date between now and 4 weeks (default 3).")

    def clean_renewal_date(self):
        data = self.cleaned_data['renewal_date']

        # Check if a date is not in the past.
        if data < datetime.date.today():
            raise ValidationError(_('Invalid date - renewal in past'))

        # Check if date is in the allowed range (+4 weeks from today).
        if data > datetime.date.today() + datetime.timedelta(weeks=4):
            raise ValidationError(_('Invalid date - renewal more than 4 weeks ahead'))

        # Remember to always return the cleaned data.
        return data
```

Ouvrez notre fichier **/catalog/tests/test_forms.py**, et remplacez tout le code qui s'y trouve par le code suivant, qui teste le formulaire `RenewBookForm`. Nous commençons par importer notre formulaire et des bibliothèques Python et Django pour tester les fonctionnalités liées au temps. Ensuite nous déclarons notre classe de test pour formulaire de la même manière que nous l'avons fait pour les modèles, en utilisant un nom descriptif pour notre classe de test dérivée de `TestCase`.

```python
import datetime

from django.test import TestCase
from django.utils import timezone

from catalog.forms import RenewBookForm

class RenewBookFormTest(TestCase):
    def test_renew_form_date_field_label(self):
        form = RenewBookForm()
        self.assertTrue(form.fields['renewal_date'].label == None or form.fields['renewal_date'].label == 'renewal date')

    def test_renew_form_date_field_help_text(self):
        form = RenewBookForm()
        self.assertEqual(form.fields['renewal_date'].help_text, 'Enter a date between now and 4 weeks (default 3).')

    def test_renew_form_date_in_past(self):
        date = datetime.date.today() - datetime.timedelta(days=1)
        form = RenewBookForm(data={'renewal_date': date})
        self.assertFalse(form.is_valid())

    def test_renew_form_date_too_far_in_future(self):
        date = datetime.date.today() + datetime.timedelta(weeks=4) + datetime.timedelta(days=1)
        form = RenewBookForm(data={'renewal_date': date})
        self.assertFalse(form.is_valid())

    def test_renew_form_date_today(self):
        date = datetime.date.today()
        form = RenewBookForm(data={'renewal_date': date})
        self.assertTrue(form.is_valid())

    def test_renew_form_date_max(self):
        date = timezone.localtime() + datetime.timedelta(weeks=4)
        form = RenewBookForm(data={'renewal_date': date})
        self.assertTrue(form.is_valid())
```

Les deux premières fonctions testent que le `label` et le `help_text` du champ sont tels qu'on les attend. Nous devons accéder au champ en utilisant le dictionnaire du champ (p. ex. `form.fields['renewal_date']`). Notez bien ici que nous devons aussi tester si la valeur du label est `None`, car même si Django rend le label correct, il retournera `None` si la valeur n'est pas définie _explicitement_.

Les autres fonctions testent que le formulaire est valide avec des dates de renouvellement situées à l'intérieur des limites acceptables, et invalide avec des valeurs en dehors de ces limites. Notez comment nous construisons des valeurs de dates de test autour de notre date actuelle (`datetime.date.today()`) en utilisant `datetime.timedelta()` (dans ce cas en spécifiant un nombre de jours ou de semaines). Ensuite nous créons juste le formulaire en lui passant nos données, et nous testons s'il est valide.

> **Note :** Ici nous n'utilisons pas réellement la base de données ni le client de test. Envisagez de modifier ces tests pour utiliser [SimpleTestCase](https://docs.djangoproject.com/en/2.1/topics/testing/tools/#django.test.SimpleTestCase).
>
> Nous avons aussi besoin de vérifier que les erreurs correctes sont levées si le formulaire est invalide. Cependant cela se fait habituellement dans la partie view, c'est pourquoi nous allons nous y attacher dans la prochaine section.

C'est tout pour les formulaires; nous en avons d'autres, mais ils sont automatiquement créés par nos vues génériques pour édition basées sur des classes, et c'est là qu'elles doivent être testées. Lancez les tests et vérifiez que notre code passe toujours !

### Vues

Pour valider le comportement de notre vue, nous utilisons le [client](https://docs.djangoproject.com/en/2.1/topics/testing/tools/#django.test.Client) de test de Django. Cette classe se comporte comme un navigateur web fictif que nous pouvons utiliser pour simuler des requêtes `GET` et `POST` à une URL donnée, et observer la réponse. Nous pouvons voir à peu près tout au sujet de la réponse, depuis le HTTP bas-niveau (entêtes et codes de statut résultants) jusqu'au template que nous utilisons pour rendre le HTML et aux données de contexte que nous lui passons. Nous pouvons aussi voir la chaîne des redirections (s'il y en a) et vérifier l'URL et le code de statut à chaque étape. Cela nous permet de vérifier que chaque vue se comporte comme prévu.

Commençons avec l'une de nos vues les plus simples, celle qui fournit une liste de tous les auteurs. Elle est affichée à l'URL **/catalog/authors/** (une URL nommée 'authors' dans la configuration des URL).

```python
class AuthorListView(generic.ListView):
    model = Author
    paginate_by = 10
```

Comme c'est une vue liste générique, presque tout est fait à notre place par Django. Probablement, si vous faites confiance à Django, la seule chose que vous aurez besoin de tester, c'est que la vue est accessible à l'URL correcte et qu'elle peut être atteinte en utilisant son nom. Cependant, si vous utilisez un processus de développement 'test-driven', vous allez commencer par écrire des tests qui confirmeront que la vue affiche bien tous les auteurs, en les paginant par lots de 10.

Ouvrez le fichier **/catalog/tests/test_views.py**, et remplacez tout texte existant par le code de test suivant, pour la vue `AuthorListView`. Comme auparavant, nous importons notre modèle et quelques classes utiles. Dans la méthode `setUpTestData()`, nous définissons un certain nombre d'objets `Author`, de façon à pouvoir tester notre pagination.

```python
from django.test import TestCase
from django.urls import reverse

from catalog.models import Author

class AuthorListViewTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        # Create 13 authors for pagination tests
        number_of_authors = 13

        for author_id in range(number_of_authors):
            Author.objects.create(
                first_name=f'Christian {author_id}',
                last_name=f'Surname {author_id}',
            )

    def test_view_url_exists_at_desired_location(self):
        response = self.client.get('/catalog/authors/')
        self.assertEqual(response.status_code, 200)

    def test_view_url_accessible_by_name(self):
        response = self.client.get(reverse('authors'))
        self.assertEqual(response.status_code, 200)

    def test_view_uses_correct_template(self):
        response = self.client.get(reverse('authors'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'catalog/author_list.html')

    def test_pagination_is_ten(self):
        response = self.client.get(reverse('authors'))
        self.assertEqual(response.status_code, 200)
        self.assertTrue('is_paginated' in response.context)
        self.assertTrue(response.context['is_paginated'] == True)
        self.assertTrue(len(response.context['author_list']) == 10)

    def test_lists_all_authors(self):
        # Get second page and confirm it has (exactly) remaining 3 items
        response = self.client.get(reverse('authors')+'?page=2')
        self.assertEqual(response.status_code, 200)
        self.assertTrue('is_paginated' in response.context)
        self.assertTrue(response.context['is_paginated'] == True)
        self.assertTrue(len(response.context['author_list']) == 3)
```

Tous les tests utilisent le client (qui appartient à notre classe dérivée de `TestCase`), afin de simuler une requête `GET` et d'obtenir une réponse. La première version vérifie une URL spécifique (note : seulement le chemin spécifique, sans le domaine), tandis que la seconde génère une URL à partir de son nom tel qu'il se trouve dans la configuration des URL.

```python
response = self.client.get('/catalog/authors/')
response = self.client.get(reverse('authors'))
```

Une fois que nous avons la réponse, nous lui demandons son code de statut, le template utilisé, si la réponse est paginée ou non, le nombre d'éléments retournés et le nombre total d'éléments.

> **Note :** Si, dans votre fichier **/catalog/views.py**, vous mettez la variable `paginate_by` à un nombre autre que 10, assurez-vous de mettre à jour les lignes qui testent le nombre correct d'éléments affichés dans les templates paginés, ci-dessus et dans les sections qui suivent. Par exemple, si vous mettez à 5 la variable pour la liste des auteurs, changez ainsi la ligne ci-dessus :
>
> ```python
> self.assertTrue(len(response.context['author_list']) == 5)
> ```

La variable la plus intéressante que nous montrons ci-dessus est `response.context`, qui est la variable de contexte passée au template par la vue. C'est incroyablement utile pour tester, parce qu'elle nous autorise à confirmer que notre template reçoit bien toutes les données dont il a besoin. En d'autres termes, nous pouvons vérifier que nous utilisons le template prévu, et quelles données le template utilise, ce qui permet dans une large mesure de vérifier que tous les problèmes de 'render' sont seulement dus au template.

#### Vues limitées aux utilisateurs connectés

Dans certains cas, vous voudrez tester une vue qui est limitée aux seuls utilisateurs connectés. Par exemple notre vue `LoanedBooksByUserListView` est très semblable à notre vue précédente, mais n'est accessible qu'aux utilisateurs connectés, et n'affiche que des enregistrements de type `BookInstance` qui sont empruntés par l'utilisateur courant, ont le statut 'on loan', et sont triés 'le plus ancien en premier'.

```python
from django.contrib.auth.mixins import LoginRequiredMixin

class LoanedBooksByUserListView(LoginRequiredMixin, generic.ListView):
    """Generic class-based view listing books on loan to current user."""
    model = BookInstance
    template_name ='catalog/bookinstance_list_borrowed_user.html'
    paginate_by = 10

    def get_queryset(self):
        return BookInstance.objects.filter(borrower=self.request.user).filter(status__exact='o').order_by('due_back')
```

Ajoutez le code de test suivant à **/catalog/tests/test_views.py**. Ici nous utilisons d'abord la méthode `SetUp()` pour créer des logins de comptes d'utilisateurs et des objets de type `BookInstance` (avec leurs livres et autres enregistrements associés), que nous utiliserons plus tard dans les tests. La moitié des livres sont empruntés par chaque utilisateur-test, mais nous avons initialement mis le statut de tous les livres à "maintenance". Nous avons utilisé `SetUp()` plutôt que `setUpTestData()`, parce que nous allons modifier plus tard certains de ces objets.

> **Note :** Le code de `setUp()` ci-dessous crée un livre avec un `Language` spécifique, mais _votre_ code n'inclut peut-être pas le modèle `Language`, étant donné que celui-ci a été créé lors d'un _défi_. Si c'est le cas, commentez simplement les bouts de code qui créent ou importent des objets de type Language. Vous devrez aussi le faire dans la section `RenewBookInstancesViewTest` qui suit.

```python
import datetime

from django.utils import timezone
from django.contrib.auth.models import User # Required to assign User as a borrower

from catalog.models import BookInstance, Book, Genre, Language

class LoanedBookInstancesByUserListViewTest(TestCase):
    def setUp(self):
        # Create two users
        test_user1 = User.objects.create_user(username='testuser1', password='1X<ISRUkw+tuK')
        test_user2 = User.objects.create_user(username='testuser2', password='2HJ1vRV0Z&3iD')

        test_user1.save()
        test_user2.save()

        # Create a book
        test_author = Author.objects.create(first_name='John', last_name='Smith')
        test_genre = Genre.objects.create(name='Fantasy')
        test_language = Language.objects.create(name='English')
        test_book = Book.objects.create(
            title='Book Title',
            summary='My book summary',
            isbn='ABCDEFG',
            author=test_author,
            language=test_language,
        )

        # Create genre as a post-step
        genre_objects_for_book = Genre.objects.all()
        test_book.genre.set(genre_objects_for_book) # Direct assignment of many-to-many types not allowed.
        test_book.save()

        # Create 30 BookInstance objects
        number_of_book_copies = 30
        for book_copy in range(number_of_book_copies):
            return_date = timezone.localtime() + datetime.timedelta(days=book_copy%5)
            the_borrower = test_user1 if book_copy % 2 else test_user2
            status = 'm'
            BookInstance.objects.create(
                book=test_book,
                imprint='Unlikely Imprint, 2016',
                due_back=return_date,
                borrower=the_borrower,
                status=status,
            )

    def test_redirect_if_not_logged_in(self):
        response = self.client.get(reverse('my-borrowed'))
        self.assertRedirects(response, '/accounts/login/?next=/catalog/mybooks/')

    def test_logged_in_uses_correct_template(self):
        login = self.client.login(username='testuser1', password='1X<ISRUkw+tuK')
        response = self.client.get(reverse('my-borrowed'))

        # Check our user is logged in
        self.assertEqual(str(response.context['user']), 'testuser1')
        # Check that we got a response "success"
        self.assertEqual(response.status_code, 200)

        # Check we used correct template
        self.assertTemplateUsed(response, 'catalog/bookinstance_list_borrowed_user.html')
```

Pour vérifier que la vue redirige à une page de login si l'utilisateur n'est pas connecté, nous utilisons `assertRedirects`, comme montré dans `test_redirect_if_not_logged_in()`. Pour vérifier que la page est affichée pour un utilisateur connecté, nous connectons d'abord notre utilisateur-test, et ensuite nous accédons de nouveau à la page et vérifions que nous obtenons un `status_code` de 200 (succès).

Le reste des test vérifie que notre vue ne retourne que les livres qui sont prêtés à notre emprunteur courant. Copiez ce code et collez le à la fin de la classe de test ci-dessus.

```python
    def test_only_borrowed_books_in_list(self):
        login = self.client.login(username='testuser1', password='1X<ISRUkw+tuK')
        response = self.client.get(reverse('my-borrowed'))

        # Check our user is logged in
        self.assertEqual(str(response.context['user']), 'testuser1')
        # Check that we got a response "success"
        self.assertEqual(response.status_code, 200)

        # Check that initially we don't have any books in list (none on loan)
        self.assertTrue('bookinstance_list' in response.context)
        self.assertEqual(len(response.context['bookinstance_list']), 0)

        # Now change all books to be on loan
        books = BookInstance.objects.all()[:10]

        for book in books:
            book.status = 'o'
            book.save()

        # Check that now we have borrowed books in the list
        response = self.client.get(reverse('my-borrowed'))
        # Check our user is logged in
        self.assertEqual(str(response.context['user']), 'testuser1')
        # Check that we got a response "success"
        self.assertEqual(response.status_code, 200)

        self.assertTrue('bookinstance_list' in response.context)

        # Confirm all books belong to testuser1 and are on loan
        for bookitem in response.context['bookinstance_list']:
            self.assertEqual(response.context['user'], bookitem.borrower)
            self.assertEqual('o', bookitem.status)

    def test_pages_ordered_by_due_date(self):
        # Change all books to be on loan
        for book in BookInstance.objects.all():
            book.status='o'
            book.save()

        login = self.client.login(username='testuser1', password='1X<ISRUkw+tuK')
        response = self.client.get(reverse('my-borrowed'))

        # Check our user is logged in
        self.assertEqual(str(response.context['user']), 'testuser1')
        # Check that we got a response "success"
        self.assertEqual(response.status_code, 200)

        # Confirm that of the items, only 10 are displayed due to pagination.
        self.assertEqual(len(response.context['bookinstance_list']), 10)

        last_date = 0
        for book in response.context['bookinstance_list']:
            if last_date == 0:
                last_date = book.due_back
            else:
                self.assertTrue(last_date <= book.due_back)
                last_date = book.due_back
```

Vous pourriez aussi ajouter les tests de pagination, si vous voulez !

#### Tester des vues avec formulaires

Tester des vues avec formulaires est un peu plus compliqué que dans les cas précédents, car vous devez tester un code qui parcourt plus de chemin : l'affichage initial, l'affichage après que la validation des données a échoué, et l'affichage après que la validation a réussi. La bonne nouvelle, c'est que nous utilisons le client de test presque de la même manière que nous l'avons fait pour des vues qui ne font qu'afficher des données.

Pour voir cela, écrivons des tests pour la vue utilisée pour renouveler des livres (`renew_book_librarian()`) :

```python
from catalog.forms import RenewBookForm

@permission_required('catalog.can_mark_returned')
def renew_book_librarian(request, pk):
    """View function for renewing a specific BookInstance by librarian."""
    book_instance = get_object_or_404(BookInstance, pk=pk)

    # If this is a POST request then process the Form data
    if request.method == 'POST':

        # Create a form instance and populate it with data from the request (binding):
        book_renewal_form = RenewBookForm(request.POST)

        # Check if the form is valid:
        if form.is_valid():
            # process the data in form.cleaned_data as required (here we just write it to the model due_back field)
            book_instance.due_back = form.cleaned_data['renewal_date']
            book_instance.save()

            # redirect to a new URL:
            return HttpResponseRedirect(reverse('all-borrowed'))

    # If this is a GET (or any other method) create the default form
    else:
        proposed_renewal_date = datetime.date.today() + datetime.timedelta(weeks=3)
        book_renewal_form = RenewBookForm(initial={'renewal_date': proposed_renewal_date})

    context = {
        'book_renewal_form': book_renewal_form,
        'book_instance': book_instance,
    }

    return render(request, 'catalog/book_renew_librarian.html', context)
```

Nous allons devoir tester que la vue n'est disponible qu'aux utilisateurs ayant la permission `can_mark_returned`, et que les utilisateurs sont bien redirigés vers une page d'erreur HTTP 404 s'ils essaient de renouveler une `BookInstance` inexistante. Nous devons vérifier que la valeur initiale du formulaire est remplie avec une date de trois semaines dans le futur, et que si la validation réussit, nous sommes redirigés vers la vue "tous les livres empruntés". Dans le cadre des tests sur l'échec de la validation, nous allons aussi vérifier que notre formulaire envoie les bons messages d'erreur.

Ajoutez la première partie de la classe de test ci-dessous à la fin du fichier **/catalog/tests/test_views.py**. Cela crée deux utilisateurs et deux instances de livres, mais ne donne qu'à un seul utilisateur la permission d'accéder à la vue. Le code pour autoriser les permissions durant les tests est montrée en gras :

```python
import uuid

from django.contrib.auth.models import Permission # Required to grant the permission needed to set a book as returned.

class RenewBookInstancesViewTest(TestCase):
    def setUp(self):
        # Create a user
        test_user1 = User.objects.create_user(username='testuser1', password='1X<ISRUkw+tuK')
        test_user2 = User.objects.create_user(username='testuser2', password='2HJ1vRV0Z&3iD')

        test_user1.save()
        test_user2.save()

        permission = Permission.objects.get(name='Set book as returned')
        test_user2.user_permissions.add(permission)
        test_user2.save()

        # Create a book
        test_author = Author.objects.create(first_name='John', last_name='Smith')
        test_genre = Genre.objects.create(name='Fantasy')
        test_language = Language.objects.create(name='English')
        test_book = Book.objects.create(
            title='Book Title',
            summary='My book summary',
            isbn='ABCDEFG',
            author=test_author,
            language=test_language,
        )

        # Create genre as a post-step
        genre_objects_for_book = Genre.objects.all()
        test_book.genre.set(genre_objects_for_book) # Direct assignment of many-to-many types not allowed.
        test_book.save()

        # Create a BookInstance object for test_user1
        return_date = datetime.date.today() + datetime.timedelta(days=5)
        self.test_bookinstance1 = BookInstance.objects.create(
            book=test_book,
            imprint='Unlikely Imprint, 2016',
            due_back=return_date,
            borrower=test_user1,
            status='o',
        )

        # Create a BookInstance object for test_user2
        return_date = datetime.date.today() + datetime.timedelta(days=5)
        self.test_bookinstance2 = BookInstance.objects.create(
            book=test_book,
            imprint='Unlikely Imprint, 2016',
            due_back=return_date,
            borrower=test_user2,
            status='o',
        )
```

Ajoutez les tests suivants à la fin de la classe de test. Ils vérifient que seuls les utilisateurs avec les bonnes permissions (_testuser2_) peuvent accéder à la vue. Nous vérifions tous les cas : quand l'utilisateur n'est pas connecté, quand un utilisateur est connecté mais n'a pas les permissions requises, quand l'utilisateur a les permissions mais n'est pas l'emprunteur (ce test devrait réussir), et ce qui se passe quand ils tentent d'accéder à une `BookInstance` inexistante. Nous vérifions aussi que le bon template est utilisé.

```python
   def test_redirect_if_not_logged_in(self):
        response = self.client.get(reverse('renew-book-librarian', kwargs={'pk': self.test_bookinstance1.pk}))
        # Manually check redirect (Can't use assertRedirect, because the redirect URL is unpredictable)
        self.assertEqual(response.status_code, 302)
        self.assertTrue(response.url.startswith('/accounts/login/'))

    def test_redirect_if_logged_in_but_not_correct_permission(self):
        login = self.client.login(username='testuser1', password='1X<ISRUkw+tuK')
        response = self.client.get(reverse('renew-book-librarian', kwargs={'pk': self.test_bookinstance1.pk}))
        self.assertEqual(response.status_code, 403)

    def test_logged_in_with_permission_borrowed_book(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        response = self.client.get(reverse('renew-book-librarian', kwargs={'pk': self.test_bookinstance2.pk}))

        # Check that it lets us login - this is our book and we have the right permissions.
        self.assertEqual(response.status_code, 200)

    def test_logged_in_with_permission_another_users_borrowed_book(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        response = self.client.get(reverse('renew-book-librarian', kwargs={'pk': self.test_bookinstance1.pk}))

        # Check that it lets us login. We're a librarian, so we can view any users book
        self.assertEqual(response.status_code, 200)

    def test_HTTP404_for_invalid_book_if_logged_in(self):
        # unlikely UID to match our bookinstance!
        test_uid = uuid.uuid4()
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        response = self.client.get(reverse('renew-book-librarian', kwargs={'pk':test_uid}))
        self.assertEqual(response.status_code, 404)

    def test_uses_correct_template(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        response = self.client.get(reverse('renew-book-librarian', kwargs={'pk': self.test_bookinstance1.pk}))
        self.assertEqual(response.status_code, 200)

        # Check we used correct template
        self.assertTemplateUsed(response, 'catalog/book_renew_librarian.html')
```

Ajoutez la méthode de test suivante, comme montré ci-dessous. Elle vérifie que la date initiale pour le formulaire est trois semaines dans le futur. Notez comment nous pouvons accéder à la valeur initiale de ce champ de formulaire (en gras).

```python
    def test_form_renewal_date_initially_has_date_three_weeks_in_future(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        response = self.client.get(reverse('renew-book-librarian', kwargs={'pk': self.test_bookinstance1.pk}))
        self.assertEqual(response.status_code, 200)

        date_3_weeks_in_future = datetime.date.today() + datetime.timedelta(weeks=3)
        self.assertEqual(response.context['form'].initial['renewal_date'], date_3_weeks_in_future)
```

> **Attention :** Si vous utilisez la class de formulaire `RenewBookModelForm(forms.ModelForm)` à la place de la classe `RenewBookForm(forms.Form)`, le nom du champ est **'due_back'** et non **'renewal_date'**.

Le test suivant (ajoutez-le à la classe également) vérifie que la vue redirige vers une liste de tous les livres empruntés si le renouvellement réussit. Ce qui diffère ici est que, pour la première fois, nous montrons comment vous pouvez `POST`er des données en utilisant le client. Les données postées forment le second argument de la fonction post, et elles sont spécifiées comme un dictionnaire de clés/valeurs.

```python
    def test_redirects_to_all_borrowed_book_list_on_success(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        valid_date_in_future = datetime.date.today() + datetime.timedelta(weeks=2)
        response = self.client.post(reverse('renew-book-librarian', kwargs={'pk':self.test_bookinstance1.pk,}), {'renewal_date':valid_date_in_future})
        self.assertRedirects(response, reverse('all-borrowed'))
```

> **Attention :** La vue _all-borrowed_ a été ajoutée comme _défi_, et votre code peut, à la place, rediriger vers la page d'accueil '/'. Si c'est le cas, modifiez les deux dernières lignes du code de test pour qu'elles ressemblent au code ci-dessous. L'expression `follow=True` dans la requête s'assure que la requête retourne l'URL de la destination finale (donc vérifie `/catalog/` plutôt que `/`).
>
> ```python
>  response = self.client.post(reverse('renew-book-librarian', kwargs={'pk':self.test_bookinstance1.pk,}), {'renewal_date':valid_date_in_future}, follow=True )
>  self.assertRedirects(response, '/catalog/')
> ```

Copiez les deux dernières fonctions dans la classe, comme indiqué ci-dessous. Elles testent de nouveau des requêtes POST, mais dans ce cas avec des dates de renouvellement invalides. Nous utilisons la méthode assertFormError() pour vérifier que les messages d'erreur sont ceux que nous attendons.

```python
    def test_form_invalid_renewal_date_past(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        date_in_past = datetime.date.today() - datetime.timedelta(weeks=1)
        response = self.client.post(reverse('renew-book-librarian', kwargs={'pk': self.test_bookinstance1.pk}), {'renewal_date': date_in_past})
        self.assertEqual(response.status_code, 200)
        self.assertFormError(response, 'form', 'renewal_date', 'Invalid date - renewal in past')

    def test_form_invalid_renewal_date_future(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        invalid_date_in_future = datetime.date.today() + datetime.timedelta(weeks=5)
        response = self.client.post(reverse('renew-book-librarian', kwargs={'pk': self.test_bookinstance1.pk}), {'renewal_date': invalid_date_in_future})
        self.assertEqual(response.status_code, 200)
        self.assertFormError(response, 'form', 'renewal_date', 'Invalid date - renewal more than 4 weeks ahead')
```

Le même genre de technique peut être utilisé pour tester les autres vues.

### Templates

Django fournit des API de test pour vérifier que le bon template sera appelé par vos vues, et pour vous permettre de vérifier que l'information correcte sera envoyée. Il n'y a cependant pas de support d'API spécifique en Django pour tester que votre sortie HTML a le rendu souhaité.

## Autres outils de test recommandés

Le framework de test de Django peut vous aider à écrire des tests unitaires et d'intégration efficaces - nous n'avons fait que gratter la surface de ce que peut faire unittest,le framework de test sous-jacent, et plus encore les additions de Django (par exemple, regardez comment vous pouvez utiliser unittest.mock pour patcher les bibliothèques tierces afin de tester plus finement votre propre code).

Comme il y a un grand nombre d'autres outils de test à votre disposition, nous ne mentionnerons que les deux suivants :

- [Coverage](http://coverage.readthedocs.io/en/latest/): Cet outil Python fait un rapport sur la proportion de votre code réellement exécutée par vos tests. C'est particulièrement intéressant quand vous commencez, et que vous cherchez à vous représenter exactement ce que vous devez tester.
- [Selenium](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment) est un framework pour automatiser les tests dans un vrai navigateur. Il vous permet de simuler un utilisateur réel en interaction avec le site, et fournit un excellent framework pour les tests système de votre site (l'étape qui suit les tests d'intégration).

## Défi

Il y a beaucoup d'autres modèles et vues que nous pouvons tester. Comme exercice simple, essayez de créer un cas de test pour la vue `AuthorCreate`.

```python
class AuthorCreate(PermissionRequiredMixin, CreateView):
    model = Author
    fields = '__all__'
    initial = {'date_of_death':'12/10/2016'}
    permission_required = 'catalog.can_mark_returned'
```

Souvenez-vous que vous avez besoin de vérifier tout ce que vous avez spécifié ou ce qui fait partie du design. Cela va inclure qui a accès, la date initiale, le template utilisé, et où la vue redirige en cas de succès.

## Résumé

Écrire un code de test n'est ni très excitant ni très fascinant, et par conséquent ce travail est souvent laissé pour la fin (ou complètement délaissé) par les créateurs de sites web. C'est pourtant un élément essentiel pour vous assurer que, malgré les changements apportés, votre code peut passer à une nouvelle version en toute sécurité, et que sa maintenance est rentable.

Dans ce tutoriel, nous vous avons montré comment écrire et lancer des tests pour vos modèles, formulaires et vues. Plus important, nous avons fourni un bref résumé de ce que vous devez tester, ce qui est souvent la chose la plus difficile à comprendre quand on commence. Il y a beaucoup de choses à savoir, mais avec ce que vous avez déjà appris, vous devriez être capable de créer des tests unitaires efficaces pour vos sites web.

Le prochain (et dernier) tutoriel montre comment vous pouvez déployer votre merveilleux (et entièrement testé !) site web Django.

## À voir également

- [Writing and running tests](https://docs.djangoproject.com/en/2.1/topics/testing/overview/) (Django docs)
- [Writing your first Django app, part 5 > Introducing automated testing](https://docs.djangoproject.com/en/2.1/intro/tutorial05/) (Django docs)
- [Testing tools reference](https://docs.djangoproject.com/en/2.1/topics/testing/tools/) (Django docs)
- [Advanced testing topics](https://docs.djangoproject.com/en/2.1/topics/testing/advanced/) (Django docs)
- [A Guide to Testing in Django](http://toastdriven.com/blog/2011/apr/10/guide-to-testing-in-django/) (Toast Driven Blog, 2011)
- [Workshop: Test-Driven Web Development with Django](http://test-driven-django-development.readthedocs.io/en/latest/index.html) (San Diego Python, 2014)
- [Testing in Django (Part 1) - Best Practices and Examples](https://realpython.com/blog/python/testing-in-django-part-1-best-practices-and-examples/) (RealPython, 2013)

{{PreviousMenuNext("Learn/Server-side/Django/Forms", "Learn/Server-side/Django/Deployment", "Learn/Server-side/Django")}}

## Dans ce module

- [Django introduction](/fr/docs/Learn/Server-side/Django/Introduction)
- [Setting up a Django development environment](/fr/docs/Learn/Server-side/Django/development_environment)
- [Django Tutorial: The Local Library website](/fr/docs/Learn/Server-side/Django/Tutorial_local_library_website)
- [Django Tutorial Part 2: Creating a skeleton website](/fr/docs/Learn/Server-side/Django/skeleton_website)
- [Django Tutorial Part 3: Using models](/fr/docs/Learn/Server-side/Django/Models)
- [Django Tutorial Part 4: Django admin site](/fr/docs/Learn/Server-side/Django/Admin_site)
- [Django Tutorial Part 5: Creating our home page](/fr/docs/Learn/Server-side/Django/Home_page)
- [Django Tutorial Part 6: Generic list and detail views](/fr/docs/Learn/Server-side/Django/Generic_views)
- [Django Tutorial Part 7: Sessions framework](/fr/docs/Learn/Server-side/Django/Sessions)
- [Django Tutorial Part 8: User authentication and permissions](/fr/docs/Learn/Server-side/Django/Authentication)
- [Django Tutorial Part 9: Working with forms](/fr/docs/Learn/Server-side/Django/Forms)
- [Django Tutorial Part 10: Testing a Django web application](/fr/docs/Learn/Server-side/Django/Testing)
- [Django Tutorial Part 11: Deploying Django to production](/fr/docs/Learn/Server-side/Django/Deployment)
- [Django web application security](/fr/docs/Learn/Server-side/Django/web_application_security)
- [DIY Django mini blog](/fr/docs/Learn/Server-side/Django/django_assessment_blog)
