---
title: Le modèle objet JavaScript en détails
slug: Web/JavaScript/Guide/Details_of_the_Object_Model
tags:
  - Guide
  - Intermediate
  - JavaScript
  - Object
translation_of: Web/JavaScript/Guide/Details_of_the_Object_Model
original_slug: Web/JavaScript/Guide/Le_modèle_objet_JavaScript_en_détails
---
{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Working_with_Objects", "Web/JavaScript/Guide/Using_promises")}}

JavaScript est un langage orienté objet basé sur des prototypes, plutôt que sur des classes. En raison de cette base différente, il peut être moins évident de comprendre comment JavaScript vous permet de créer des hiérarchies d'objets et d'avoir un héritage des propriétés et de leurs valeurs. Ce chapitre tente de clarifier la situation.

Ce chapitre part du principe que vous avez déjà une certaine connaissance de JavaScript et que vous avez utilisé des fonctions JavaScript pour créer des objets simples.

## Langages basés sur des classes ou des prototypes

Les langages orientés objets, basés sur des classes, tels que Java et C++, sont fondés sur le concept de deux entités distinctes : les classes et les instances.

- Une _classe_ définit toutes les propriétés qui caractérisent un certain ensemble d'objets (en considérant les méthodes et les champs en Java, ou les membres en C++, comme des propriétés). Une classe est abstraite par opposition à un membre particulier d'un ensemble d'objets qu'elle décrit. Par exemple, la classe `Employee` pourrait représenter l'ensemble de tous les employés.
- Une _instance_, par contre, est l'instanciation d'une classe. Par exemple, `Victoria` pourrait être une instance de la classe `Employee`, représentant un individu particulier en tant qu'employé. Une instance possède exactement les mêmes propriétés que sa classe parente (ni plus, ni moins).

Un langage basé sur des prototypes, tel que JavaScript, ne fait pas cette distinction : il a des objets. Un langage basé sur des prototypes possède la notion d'un _objet prototypique_, un objet utilisé comme modèle à partir duquel on peut obtenir les propriétés initiales d'un nouvel objet. Tout objet peut spécifier ses propres propriétés, soit lors de sa création, soit au moment de l'exécution. En outre, tout objet peut être associé en tant que _prototype_ d'un autre objet, permettant au second objet de partager les propriétés du premier.

### La définition d'une classe

Dans les langages basés sur les classes, vous définissez une classe en utilisant une _définition de classe_ distincte. Dans cette définition, vous pouvez spécifier des méthodes spéciales, appelées _constructeur_ (et écrites « constructor »), pour créer des instances de la classe. Une méthode constructrice peut spécifier des valeurs initiales pour les propriétés de l'instance et effectuer d'autres traitements appropriés au moment de la création. Vous utilisez l'opérateur `new` en association avec la méthode constructrice pour créer des instances de la classe.

JavaScript suit un modèle similaire, mais ne dispose pas d'une définition de classe distincte de celle du constructeur. Au lieu de cela, vous définissez une fonction de construction pour créer des objets avec un ensemble initial particulier de propriétés et de valeurs. Toute fonction JavaScript peut être utilisée comme constructeur. Vous utilisez l'opérateur `new` avec une fonction « constructor » pour créer un nouvel objet.

> **Note :** ECMAScript 2015 introduit une [déclaration de classe](/fr/docs/Web/JavaScript/Reference/Classes) :
>
> > Les classes JavaScript, introduites dans ECMAScript 2015, sont principalement un enrichissement syntaxique de l'héritage basé sur les prototypes existant dans JavaScript. La syntaxe des classes n'introduit pas un nouveau modèle d'héritage orienté objet dans JavaScript.

### Classes enfants et héritage

Dans un langage basé sur les classes, vous créez une hiérarchie de classes par le biais des définitions de classes. Dans une définition de classe, vous pouvez spécifier que la nouvelle classe est une _classe enfant_ d'une classe déjà existante. La classe enfant hérite de toutes les propriétés de la classe parente et peut en plus ajouter de nouvelles propriétés ou modifier celles héritées. Par exemple, supposons que la classe `Employee` ne comprend que les propriétés `name` (« nom ») et `dept` (« département »), et que `Manager` est une classe enfant de `Employee` qui ajoute la propriété `reports` (« rapports »). Dans ce cas, une instance de la classe `Manager` aurait les trois propriétés : `name`, `dept`, et `reports`.

JavaScript met en œuvre l'héritage en vous permettant d'associer un objet prototypique à n'importe quelle fonction de construction. Ainsi, vous pouvez créer exactement l'exemple `Employee` — `Manager`, mais vous utilisez une terminologie légèrement différente. D'abord, vous définissez la fonction du constructeur `Employee`, en spécifiant les propriétés `name` et `dept`. Ensuite, vous définissez la fonction du constructeur `Manager`, en appelant le constructeur `Employee` et en spécifiant la propriété `reports`. Enfin, vous attribuez un nouvel objet dérivé de `Employee.prototype` comme `prototype` pour la fonction du constructeur `Manager`. Ensuite, lorsque vous créez un nouveau `Manager`, il hérite des propriétés `name` et `dept` de l'objet `Employee`.

### Ajouter ou retirer des propriétés

Dans les langages basés sur les classes, vous créez généralement une classe au moment de la compilation, puis vous instanciez, des instances de la classe, soit au moment de la compilation, soit au moment de l'exécution. Vous ne pouvez pas modifier le nombre ou le type de propriétés d'une classe après avoir défini cette dernière. En JavaScript, cependant, au moment de l'exécution, vous pouvez ajouter ou supprimer des propriétés de tout objet. Si vous ajoutez une propriété à un objet qui est utilisé comme prototype pour un ensemble d'objets, les objets dont il est le prototype obtiennent également la nouvelle propriété.

### Résumé des différences

Le tableau suivant donne un bref résumé de certaines de ces différences. Le reste de ce chapitre décrit les détails de l'utilisation des constructeurs et prototypes JavaScript pour créer une hiérarchie d'objets et les compare à la façon dont vous le feriez en Java.

<table class="standard-table">
  <caption>
    Comparaison des systèmes d'objets basés sur des classes (Java) et des
    prototypes (JavaScript)
  </caption>
  <thead>
    <tr>
      <th scope="row">Catégorie</th>
      <th scope="col">Basé sur les classes (Java)</th>
      <th scope="col">Basé sur des prototypes (JavaScript)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Classe et instance</th>
      <td>La classe et l'instance sont des entités distinctes.</td>
      <td>Tous les objets peuvent hériter d'un autre objet.</td>
    </tr>
    <tr>
      <th scope="row">Définition</th>
      <td>
        Définir une classe avec une définition de classe ; instancier une classe
        avec des méthodes de construction.
      </td>
      <td>
        Définir et créer un ensemble d'objets avec des fonctions de
        construction.
      </td>
    </tr>
    <tr>
      <th scope="row">Création d'un nouvel objet</th>
      <td>Créer un objet unique avec l'opérateur <code>new</code>.</td>
      <td>Pareil.</td>
    </tr>
    <tr>
      <th scope="row">Construction de la hiérarchie des objets</th>
      <td>
        Construire une hiérarchie d'objets en utilisant des définitions de
        classes pour définir des classes enfants à partir de classes existantes.
      </td>
      <td>
        Construire une hiérarchie d'objets en assignant un objet comme prototype
        associé à une fonction de construction.
      </td>
    </tr>
    <tr>
      <th scope="row">Modèle d'héritage</th>
      <td>Hériter des propriétés en suivant la chaîne de classes.</td>
      <td>Hériter des propriétés en suivant la chaîne des prototypes.</td>
    </tr>
    <tr>
      <th scope="row">Extension des propriétés</th>
      <td>
        La définition de la classe spécifie <em>toutes</em> les propriétés de
        toutes les instances d'une classe. Impossible d'ajouter des propriétés
        dynamiquement au moment de l'exécution.
      </td>
      <td>
        La fonction ou le prototype du constructeur spécifie un
        <em>ensemble initial</em> de propriétés. On peut ajouter ou supprimer
        dynamiquement des propriétés à des objets individuels ou à l'ensemble
        des objets.
      </td>
    </tr>
  </tbody>
</table>

## L'exemple de l'employé

Le reste de ce chapitre utilise la hiérarchie des employés présentée dans la figure suivante.

![](figure8.1.png)

Cela montre une hiérarchie d'objets avec les objets suivants :

- `Employee` possède les propriétés `name` (« le nom » dont la valeur par défaut est la chaîne de caractères vide) et `dept` (« le département » dont la valeur par défaut est « général »).
- `Manager` est basé sur `Employee`. Il ajoute la propriété `reports` (« les rapports » dont la valeur par défaut est un tableau vide, destiné à avoir pour valeur un tableau d'objets `Employee`).
- `WorkerBee` est également basé sur `Employee`. Il ajoute la propriété `projects` (« les projets » dont la valeur par défaut est un tableau vide, destiné à avoir pour valeur un tableau de chaînes de caractères).
- `SalesPerson` est basé sur `WorkerBee`. Il ajoute la propriété `quota` (dont la valeur par défaut est 100). Il surcharge la propriété `dept` avec la valeur « ventes », indiquant que tous les vendeurs sont dans le même département.
- `Engineer` est basé sur `WorkerBee`. Il ajoute la propriété `machine` (dont la valeur par défaut est une chaîne de caractères vide) et surcharge également la propriété `dept` avec la valeur «&nbsp;ingénierie&nbsp;».

## La création de la hiérarchie

Il existe plusieurs façons de définir des fonctions constructrices appropriées pour mettre en œuvre la hiérarchie des employés. La façon dont vous choisissez de les définir dépend en grande partie de ce que vous voulez être en mesure de faire dans votre application.

Cette section montre comment utiliser des définitions très simples (et comparativement peu flexibles) pour démontrer comment faire fonctionner l'héritage. Dans ces définitions, vous ne pouvez spécifier aucune valeur de propriété lorsque vous créez un objet. L'objet nouvellement créé reçoit les valeurs par défaut, que vous pouvez modifier ultérieurement.

Dans une application réelle, vous définiriez probablement des constructeurs qui vous permettent de fournir des valeurs de propriété au moment de la création de l'objet (voir [Des constructeurs plus flexibles](#more_flexible_constructors) pour plus d'informations). Pour l'instant, ces définitions simples démontrent comment l'héritage se produit.

Les définitions suivantes en Java et en JavaScript de `Employee` sont similaires. La seule différence est que vous devez spécifier le type de chaque propriété en Java mais pas en JavaScript (ceci est dû au fait que Java est un [langage fortement typé](https://en.wikipedia.org/wiki/Strong_and_weak_typing) (en anglais) alors que JavaScript est un langage faiblement typé).

#### JavaScript (l'utilisation de cette option peut provoquer une erreur pour les exemples suivants)

```js
class Employee {
  constructor() {
    this.name = '';
    this.dept = 'général';
  }
}
```

#### JavaScript (utilisez plutôt ceci)

```js
function Employee() {
    this.name = '';
    this.dept = 'général';
}
```

#### Java

```java
public class Employee {
   public String name = "";
   public String dept = "général";
}
```

Les définitions de `Manager` et de `WorkerBee` montrent la différence dans la façon de spécifier l'objet immédiatement supérieur dans la chaîne d'héritage. En JavaScript, vous ajoutez une instance prototypique comme valeur de la propriété `prototype` de la fonction du constructeur, puis vous surchargez le `prototype.constructor` de la fonction du constructeur. Vous pouvez le faire à tout moment après avoir défini le constructeur. En Java, vous spécifiez la superclasse dans la définition de la classe. Vous ne pouvez pas modifier la superclasse en dehors de la définition de la classe.

#### JavaScript

```js
function Manager() {
  Employee.call(this); // On étend l'objet parent
  this.reports = []; // On définit une propriété unique à Manager
}
Manager.prototype = Object.create(Employee.prototype); // On définit le constructeur dans prototype
Manager.prototype.constructor = Manager; // On surchage le constructeur

function WorkerBee() {
  Employee.call(this); // On étend l'objet parent
  this.projects = []; // On définit une propriété unique à WorkerBee
}
WorkerBee.prototype = Object.create(Employee.prototype); // On définit le constructeur dans prototype
WorkerBee.prototype.constructor = WorkerBee; // On surchage le constructeur
```

#### Java

```java
// La classe Manager étend la classe parente Employee
public class Manager extends Employee {
   public Employee[] reports = new Employee[0]; // On définit une propriété unique à Manager
}

// La classe WorkerBee étend la classe parente Employee
public class WorkerBee extends Employee {
   public String[] projects = new String[0]; // On définit une propriété unique à WorkerBee
}
```

Les définitions `Engineer` et `SalesPerson` créent des objets qui descendent de `WorkerBee` et donc de `Employee`. Un objet de ces types possède les propriétés de tous les objets situés au-dessus de lui dans la hiérarchie. En outre, ces définitions remplacent la valeur héritée de la propriété `dept` par de nouvelles valeurs spécifiques à ces objets.

#### JavaScript

```js
function SalesPerson() {
   WorkerBee.call(this); // On étend l'objet WorkerBee
   this.dept = 'ventes'; // On réécrit la valeur de « dept »
   this.quota = 100; // On ajoute une propriété unique à SalesPerson
}
SalesPerson.prototype = Object.create(WorkerBee.prototype);
SalesPerson.prototype.constructor = SalesPerson;

function Engineer() {
   WorkerBee.call(this); // On étend l'objet WorkerBee
   this.dept = 'ingénierie'; // On réécrit la valeur de « dept »
   this.machine = ''; // On ajoute une propriété unique à Engineer
}
Engineer.prototype = Object.create(WorkerBee.prototype);
Engineer.prototype.constructor = Engineer;
```

#### Java

```java
// La classe a pour classe parente WorkerBee
public class SalesPerson extends WorkerBee {
   public String dept = "ventes"; // On réécrit la valeur de « dept »
   public double quota = 100.0; // On ajoute une propriété unique à SalesPerson
}

// La classe a pour classe parente WorkerBee
public class Engineer extends WorkerBee {
   public String dept = "ingénierie"; // On réécrit la valeur de « dept »
   public String machine = ""; // On ajoute une propriété unique à Engineer
}
```

À l'aide de ces définitions, vous pouvez créer des instances de ces objets qui obtiennent les valeurs par défaut de leurs propriétés. La figure suivante illustre l'utilisation de ces définitions JavaScript pour créer de nouveaux objets et montre les valeurs des propriétés de ces nouveaux objets.

> **Note :** Le terme _instance_ a une signification technique spécifique dans les langages basés sur les classes. Dans ces langages, une instance est une instanciation individuelle d'une classe et est fondamentalement différente d'une classe. En JavaScript, « instance » n'a pas cette signification technique car JavaScript ne fait pas cette différence entre classes et instances. Toutefois, en parlant de JavaScript, le terme « instance » peut être utilisé de manière informelle pour désigner un objet créé à l'aide d'une fonction de construction particulière. Ainsi, dans cet exemple, vous pourriez dire de manière informelle que `jane` est une instance de `Engineer`. De même, bien que les termes _parent_ (« Parent »), _child_ (« Enfant »), _ancestor_ (« Ancêtre ») et _descendant_ (« Descendant ») n'aient pas de signification formelle en JavaScript ; vous pouvez les utiliser de manière informelle pour vous référer à des objets supérieurs ou inférieurs dans la chaîne des prototypes.

### Création d'objets avec des définitions simples

#### Hiérarchie des objets

La hiérarchie suivante est créée à l'aide du code situé ci-dessous.

![](figure8.3.png)

#### Objets individuels = Jim, Sally, Mark, Fred, Jane, etc.<br>« Instances » créées à partir du constructeur

```js
let jim = new Employee;
// Les parenthèses peuvent être omises si
// le constructeur ne prend pas d'arguments.
// jim.name correspond à ''
// jim.dept correspond à 'général'.

let sally = new Manager;
// sally.name correspond à ''
// sally.dept correspond à 'général'
// sally.reports correspond à []

let mark = new WorkerBee;
// mark.name correspond à ''
// mark.dept correspond à 'général'
// mark.projects correspond à []

let fred = new SalesPerson;
// fred.name correspond à ''
// fred.dept correspond à 'ventes'
// fred.projects correspond à []
// fred.quota correspond à 100

let jane = new Engineer;
// jane.name correspond à ''
// jane.dept correspond à 'ingénierie'
// jane.projects correspond à []
// jane.machine correspond à ''
```

## Les propriétés d'un objet

Cette section explique comment les objets héritent des propriétés d'autres objets dans la chaîne des prototypes et ce qui se passe lorsque vous ajoutez une propriété au moment de l'exécution.

### L'héritage de propriétés

Supposons que vous créez l'objet `mark` comme un `WorkerBee` avec l'instruction suivante :

```js
let mark = new WorkerBee;
```

Lorsque JavaScript voit l'opérateur `new`, il crée un nouvel objet générique et définit implicitement la valeur de la propriété interne \[\[Prototype]] à la valeur de `WorkerBee.prototype` et passe ce nouvel objet comme valeur du mot-clé _`this`_ à la fonction du constructeur `WorkerBee`. La propriété interne \[\[Prototype]] détermine la chaîne de prototypes utilisée pour retourner les valeurs des propriétés. Une fois ces propriétés définies, JavaScript renvoie le nouvel objet et l'instruction d'affectation définit la variable `mark` à cet objet.

Ce processus ne met pas explicitement des valeurs dans l'objet `mark` (valeurs _locales_) pour les propriétés que `mark` hérite de la chaîne de prototypes. Lorsque vous demandez la valeur d'une propriété, JavaScript vérifie d'abord si la valeur existe dans cet objet. Si c'est le cas, cette valeur est retournée. Si la valeur n'existe pas localement, JavaScript vérifie la chaîne des prototypes (en utilisant la propriété interne \[\[Prototype]]). Si un objet de la chaîne des prototypes possède une valeur pour la propriété, cette valeur est renvoyée. Si aucune propriété de ce type n'est trouvée, JavaScript indique que l'objet ne possède pas la propriété. Ainsi, l'objet `mark` possède les propriétés et valeurs suivantes :

```js
mark.name = '';
mark.dept = 'général';
mark.projects = [];
```

L'objet `mark` se voit attribuer des valeurs locales pour les propriétés `name` et `dept` par le constructeur `Employee`. Une valeur locale lui est attribuée pour la propriété `projects` par le constructeur `WorkerBee`. On obtient ainsi l'héritage des propriétés et de leurs valeurs en JavaScript. Certaines subtilités de ce processus sont abordées dans [L'héritage des propriétés, revisité](#property_inheritance_revisited).

Comme ces constructeurs ne vous permettent pas de fournir des valeurs spécifiques à une instance, ces informations sont génériques. Les valeurs des propriétés sont celles par défaut partagées par tous les nouveaux objets créés à partir de `WorkerBee`. Vous pouvez, bien sûr, modifier les valeurs de n'importe laquelle de ces propriétés. Ainsi, vous pourriez donner des informations spécifiques pour `mark` comme suit :

```js
mark.name = 'Mark Eting';
mark.dept = 'admin';
mark.projects = ['navigateur'];
```

### L'ajout de propriétés

En JavaScript, vous pouvez ajouter des propriétés à tout objet au moment de l'exécution. Vous n'êtes pas contraint d'utiliser uniquement les propriétés fournies par la fonction du constructeur. Pour ajouter une propriété spécifique à un seul objet, vous attribuez une valeur à l'objet, comme suit :

```js
mark.bonus = 3000;
```

Maintenant, l'objet `mark` possède une propriété `bonus`, mais aucun autre objet `WorkerBee` ne possède cette propriété.

Si vous ajoutez une nouvelle propriété à un objet qui est utilisé comme prototype pour une fonction du constructeur, vous ajoutez cette propriété à tous les objets qui héritent des propriétés du prototype. Par exemple, vous pouvez ajouter une propriété `specialty` à tous les employés avec l'instruction suivante :

```js
Employee.prototype.specialty = 'aucune';
```

Dès que JavaScript exécute cette instruction, l'objet `mark` possède également la propriété `specialty` avec la valeur `"aucune"`. La figure suivante montre l'effet de l'ajout de cette propriété au prototype `Employee`, puis de sa surcharge pour le prototype `Engineer`.

![Ajout de propriétés](figure8.4.png)

## Des constructeurs plus flexibles

Les fonctions correctrices présentées jusqu'à présent ne vous permettent pas de spécifier les valeurs des propriétés lorsque vous créez une instance. Comme avec Java, vous pouvez fournir des arguments aux constructeurs pour initialiser les valeurs des propriétés des instances. La figure suivante montre une façon de le faire.

![Spécifier des propriétés dans un constructeur, prise 1](figure8.5.png)

Les paires d'exemples suivantes montrent les définitions Java et JavaScript de ces objets.

```js
// JavaScript
function Employee(name, dept) {
  this.name = name || ''; // L'argument donné OU la valeur par défaut
  this.dept = dept || 'général'; // L'argument donné OU la valeur par défaut
}
```

```java
// Java
public class Employee {
  public String name;
  public String dept;
  // On assigne les valeurs par défaut aux propriétés
  public Employee () {
    this("", "général");
  }
  // On assigne une valeur donnée et une par défaut aux propriétés
  public Employee (String name) {
    this(name, "général");
  }
  // On assigne les deux arguments donnés aux propriétés
  public Employee (String name, String dept) {
    this.name = name;
    this.dept = dept;
  }
}
```

```js
// JavaScript
function WorkerBee(projs) {
  this.projects = projs || []; // L'argument donné OU la valeur par défaut
}
WorkerBee.prototype = new Employee;
```

```java
// Java
public class WorkerBee extends Employee {
   public String[] projects;
   // On assigne une valeur par défaut à la propriété
   public WorkerBee () {
      this(new String[0]);
   }
   // On assigne l'argument donné à la propriété
   public WorkerBee (String[] projs) {
      projects = projs;
   }
}
```

```js
// JavaScript
function Engineer(mach) {
  this.dept = 'engineering'; // On réécrit la valeur de « dept »
  this.machine = mach || ''; // L'argument donné OU la valeur par défaut
}
Engineer.prototype = new WorkerBee;
```

```java
// Java
public class Engineer extends WorkerBee {
   public String machine;
   public Engineer () {
      dept = "engineering"; // On réécrit la valeur de « dept »
      machine = ""; // On assigne une valeur par défaut à la propriété
   }
   public Engineer (String mach) {
      dept = "engineering"; // On réécrit la valeur de « dept »
      machine = mach; // On assigne l'argument donné à la propriété
   }
}
```

Ces définitions JavaScript utilisent un idiome spécial pour définir les valeurs par défaut :

```js
this.nom = nom || "";
```

L'opérateur logique OU de JavaScript (`||`) évalue son premier argument. Si cet argument se transforme en vrai, l'opérateur le retourne. Sinon, l'opérateur renvoie la valeur du deuxième argument. Par conséquent, cette ligne de code teste pour voir si `name` a une valeur utile pour la propriété `name`. Si c'est le cas, elle définit `this.name` à cette valeur. Sinon, elle définit `this.name` à la chaîne de caractères vide. Ce chapitre utilise cet idiome par souci de concision ; cependant, il peut être déroutant au premier abord.

> **Note :** Cela peut ne pas fonctionner comme prévu si la fonction du constructeur est appelée avec des arguments qui se convertissent en `false` (comme `0` (zéro) et la chaîne vide (`""`)). Dans ce cas, la valeur par défaut sera choisie.

Avec ces définitions, lorsque vous créez une instance d'un objet, vous pouvez spécifier des valeurs pour les propriétés définies localement. Vous pouvez utiliser l'instruction suivante pour créer un nouvel `Engineer` :

```js
let jane = new Engineer('belau');
```

Les propriétés de `Jane` sont maintenant :

```js
jane.name == '';
jane.dept == 'engineering';
jane.projects == [];
jane.machine == 'belau';
```

Remarquez qu'avec ces définitions, vous ne pouvez pas spécifier une valeur initiale pour une propriété héritée telle que `name`. Si vous voulez spécifier une valeur initiale pour les propriétés héritées en JavaScript, vous devez ajouter du code supplémentaire à la fonction du constructeur.

Jusqu'à présent, la fonction du constructeur a créé un objet générique, puis a spécifié les propriétés et valeurs locales du nouvel objet. Vous pouvez demander au constructeur d'ajouter d'autres propriétés en appelant directement la fonction du constructeur d'un objet situé plus haut dans la chaîne des prototypes. La figure suivante montre ces nouvelles définitions.

![Spécifier des propriétés dans un constructeur, prise 2](figure8.6.png)

Examinons l'une de ces définitions en détails. Voici la nouvelle définition pour le constructeur `Engineer` :

```js
function Engineer(name, projs, mach) {
  this.base = WorkerBee;
  this.base(name, 'ingénierie', projs);
  this.machine = mach || '';
}
```

Supposons que vous créez un nouvel objet `Engineer` comme suit :

```js
let jane = new Engineer('Jane Dupont', ['navigateur', 'javascript'], 'belau');
```

JavaScript suit les étapes suivantes :

1.  L'opérateur `new` crée un objet générique et définit sa propriété `__proto__` à `Engineer.prototype`.
2.  L'opérateur `new` transmet le nouvel objet au constructeur `Engineer` comme valeur du mot clé `this`.
3.  Le constructeur crée une nouvelle propriété appelée `base` pour cet objet et affecte la valeur du constructeur `WorkerBee` à la propriété `base`. Cela fait du constructeur `WorkerBee` une méthode de l'objet `Engineer`. Le nom de la propriété `base` n'est pas spécial. Vous pouvez utiliser n'importe quel nom de propriété légal ; `base` est évocateur de son but.
4.  Le constructeur appelle la méthode `base`, en passant comme arguments deux des arguments passés au constructeur (`"Jane Dupont"` et `["navigateur", "javascript"]`) et également la chaîne `"ingénierie"`. L'utilisation explicite de `"ingénierie"` dans le constructeur indique que tous les objets `Engineer` ont la même valeur pour la propriété `dept` héritée, et cette valeur remplace la valeur héritée de `Employee`.
5.  Parce que `base` est une méthode de `Engineer`, dans l'appel à `base`, JavaScript lie le mot-clé `this` à l'objet créé à l'étape 1. Ainsi, la fonction `WorkerBee` transmet à son tour les arguments `"Jane Dupont"` et `"ingénierie"` à la fonction du constructeur `Employee`. Au retour de la fonction du constructeur `Employee`, la fonction `WorkerBee` utilise l'argument restant pour définir la propriété `projects`.
6.  Au retour de la méthode `base`, le constructeur `Engineer` initialise la propriété `machine` de l'objet à `"belau"`.
7.  Au retour du constructeur, JavaScript affecte le nouvel objet à la variable `jane`.

Vous pourriez penser que, ayant appelé le constructeur `WorkerBee` à partir de l'intérieur du constructeur `Engineer`, vous avez mis en place l'héritage de manière appropriée pour les objets `Engineer`. Ce n'est pas le cas. L'appel du constructeur `WorkerBee` garantit qu'un objet `Engineer` commence avec les propriétés spécifiées dans toutes les fonctions des constructeurs qui sont appelées. Cependant, si vous ajoutez ultérieurement des propriétés aux prototypes `Employee` ou `WorkerBee`, ces propriétés ne sont pas héritées par l'objet `Engineer`. Par exemple, supposons que vous ayez les déclarations suivantes :

```js
function Engineer(name, projs, mach) {
  this.base = WorkerBee;
  this.base(name, 'ingénierie', projs);
  this.machine = mach || '';
}

let jane = new Engineer('Jane Dupont', ['navigateur', 'javascript'], 'belau');
Employee.prototype.specialty = 'aucune';
```

L'objet `jane` n'hérite pas de la propriété `specialty`. Vous devez encore configurer explicitement le prototype pour assurer un héritage dynamique. Supposons plutôt que vous ayez ces déclarations :

```js
function Engineer(name, projs, mach) {
  this.base = WorkerBee;
  this.base(name, 'ingénierie', projs);
  this.machine = mach || '';
}

Engineer.prototype = new WorkerBee;
let jane = new Engineer('Jane Dupont', ['navigateur', 'javascript'], 'belau');
Employee.prototype.specialty = 'aucune';
```

Maintenant la valeur de la propriété `jane` de l'objet `specialty` est « aucune ».

Une autre façon d'hériter est d'utiliser les méthodes [`call()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/call) / [`apply()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/apply). Les méthodes ci-dessous sont équivalentes :

```js
function Engineer(name, projs, mach) {
  this.base = WorkerBee;
  this.base(name, 'ingénierie', projs);
  this.machine = mach || '';
}
```

```js
function Engineer(name, projs, mach) {
  WorkerBee.call(this, name, 'ingénierie', projs);
  this.machine = mach || '';
}
```

L'utilisation de la méthode JavaScript `call()` rend une implémentation plus propre car `base` n'est plus nécessaire.

## L'héritage des propriétés, revisité

Les sections précédentes ont décrit comment les constructeurs et prototypes JavaScript fournissent des hiérarchies et de l'héritage. Cette section aborde certaines subtilités qui n'étaient pas nécessairement apparentes dans les discussions précédentes.

### Valeurs locales et valeurs héritées

Lorsque vous accédez à une propriété d'objet, JavaScript effectue les étapes suivantes, comme décrit précédemment dans ce chapitre :

1.  Vérifiez si la valeur existe localement. Si c'est le cas, elle est retournée.
2.  S'il n'y a pas de valeur locale, vérifiez la chaîne de prototypes (en utilisant la propriété `__proto__`).
3.  Si un objet de la chaîne de prototypes possède une valeur pour la propriété spécifiée, renvoyer cette valeur.
4.  Si aucune propriété de ce type n'est trouvée, l'objet ne possède pas cette propriété.

Le résultat de ces étapes dépend de la façon dont vous définissez les choses en cours de route. L'exemple original avait ces définitions :

```js
function Employee() {
  this.name = '';
  this.dept = 'général';
}

function WorkerBee() {
  this.projects = [];
}
WorkerBee.prototype = new Employee;
```

Avec ces définitions, supposons que vous créez `amy` comme une instance de `WorkerBee` avec l'instruction suivante :

```js
let amy = new WorkerBee;
```

L'objet `amy` possède une propriété locale, `projects`. Les valeurs des propriétés `name` et `dept` ne sont pas locales à `amy` et héritent donc dans la propriété `amy` de l'objet `__proto__`. Ainsi, `amy` possède ces valeurs de propriétés :

```js
amy.name == '';
amy.dept == 'général';
amy.projects == [];
```

Supposons maintenant que vous modifiez la valeur de la propriété `name` dans le prototype associé à `Employee` :

```js
Employee.prototype.name = 'Inconnu·e';
```

À première vue, on pourrait s'attendre à ce que cette nouvelle valeur se propage vers le bas à toutes les instances de `Employee`. Cependant, ce n'est pas le cas.

Lorsque vous créez _n'importe quelle_ instance de l'objet `Employee`, cette instance obtient une **valeur locale** pour la propriété `name` (la chaîne de caractères vide). Cela signifie que lorsque vous définissez le prototype de `WorkerBee` en créant un nouvel objet `Employee`, `WorkerBee.prototype` a une valeur locale pour la propriété `name`. Par conséquent, lorsque JavaScript recherche la propriété `name` de l'objet `amy` (une instance de `WorkerBee`), JavaScript trouve la valeur locale de cette propriété dans `WorkerBee.prototype`. Il ne cherche donc pas plus haut dans la chaîne jusqu'à `Employee.prototype`.

Si vous souhaitez modifier la valeur d'une propriété d'un objet au moment de l'exécution et que la nouvelle valeur soit héritée par tous les descendants de l'objet, vous ne pouvez pas définir la propriété dans la fonction du constructeur de l'objet. Vous devez plutôt l'ajouter au prototype associé au constructeur. Par exemple, supposons que vous remplaciez le code précédent par le suivant :

```js
function Employee() {
  this.dept = 'général'; // Notez que this.name (une variable locale) n'apparaît pas ici
}
Employee.prototype.name = ''; // Un seul exemplaire

function WorkerBee() {
  this.projects = [];
}
WorkerBee.prototype = new Employee;

let amy = new WorkerBee;

Employee.prototype.name = 'Inconnu·e';
```

Dans ce cas, la propriété `name` de `amy` devient « Inconnu·e ».

Comme le montrent ces exemples, si vous souhaitez définir des valeurs par défaut pour les propriétés d'un objet et que vous voulez pouvoir modifier ces valeurs au moment de l'exécution, vous devez définir les propriétés dans le prototype du constructeur, et non dans la fonction du constructeur elle-même.

### Déterminer les relations entre les instances

La recherche de propriétés en JavaScript s'effectue dans les propriétés propres d'un objet et, si le nom de la propriété n'est pas trouvé, elle s'effectue dans la propriété spéciale de l'objet `__proto__`. Cette opération se poursuit de manière récursive ; le processus est appelé « recherche dans la chaîne des prototypes ».

La propriété spéciale `__proto__` est définie lorsqu'un objet est construit ; elle prend la valeur de la propriété `prototype` du constructeur. Ainsi, l'expression `new Riri()` crée un objet avec `__proto__ == Riri.prototype`. Par conséquent, les modifications apportées aux propriétés de `Riri.prototype` modifient la recherche de propriétés pour tous les objets qui ont été créés par `new Riri()`.

Chaque objet a une propriété `__proto__` (sauf `Object`) ; chaque fonction a une propriété `prototype`. Les objets peuvent donc être liés par « héritage de prototype » à d'autres objets. Vous pouvez tester l'héritage en comparant le `__proto__` d'un objet avec l'objet `prototype` d'une fonction. JavaScript fournit un raccourci : l'opérateur `instanceof` teste un objet par rapport à une fonction et renvoie vrai si l'objet hérite du prototype de la fonction. Par exemple,

```js
let f = new Riri();
let isTrue = (f instanceof Riri);
```

Pour un exemple plus détaillé, supposons que vous ayez le même ensemble de définitions que celui présenté dans [Héritage des propriétés](#inheriting_properties). Créez un objet `Engineer` comme suit :

```js
let chris = new Engineer('Chris Anthème', ['jsd'], 'fiji');
```

Avec cet objet, les affirmations suivantes sont toutes vraies :

```js
chris.__proto__ == Engineer.prototype;
chris.__proto__.__proto__ == WorkerBee.prototype;
chris.__proto__.__proto__.__proto__ == Employee.prototype;
chris.__proto__.__proto__.__proto__.__proto__ == Object.prototype;
chris.__proto__.__proto__.__proto__.__proto__.__proto__ == null;
```

Compte tenu de cela, vous pourriez écrire une fonction `instanceOf` comme suit :

```js
function instanceOf(object, constructor) {
   object = object.__proto__;
   while (object != null) {
      if (object == constructor.prototype)
         return true;
      if (typeof object == 'xml') {
        return constructor.prototype == XML.prototype;
      }
      object = object.__proto__;
   }
   return false;
}
```

> **Note :** L'implémentation ci-dessus vérifie le type de l'objet par rapport à « xml » afin de contourner une bizarrerie de la façon dont les objets XML sont représentés dans les versions récentes de JavaScript. Voir [bug 634150](https://bugzilla.mozilla.org/show_bug.cgi?id=634150) si vous voulez connaître les détails.

En utilisant la fonction `instanceOf` définie ci-dessus, ces expressions sont vraies :

```js
instanceOf(chris, Engineer)
instanceOf(chris, WorkerBee)
instanceOf(chris, Employee)
instanceOf(chris, Object)
```

Mais l'expression suivante est fausse :

```js
instanceOf(chris, SalesPerson)
```

### Les informations globales dans les constructeurs

Lorsque vous créez des constructeurs, vous devez faire attention si vous définissez des informations globales dans le constructeur. Par exemple, supposons que vous souhaitez qu'un identifiant unique soit automatiquement attribué à chaque nouvel employé. Vous pourriez utiliser la définition suivante pour `Employee` :

```js
let idCounter = 1; // On définit un compteur d'identifiant

function Employee(name, dept) {
  this.name = name || '';
  this.dept = dept || 'général';
  this.id = idCounter++; // On assigne la valeur et on incrémente le compteur
}
```

Avec cette définition, lorsque vous créez un nouvel `Employee`, le constructeur lui attribue l'ID suivant dans la séquence, puis incrémente le compteur d'ID global. Ainsi, si votre déclaration est la suivante, `victoria.id` vaut 1 et `harry.id` vaut 2 :

```js
let victoria = new Employee('Victoria Lamar', 'pubs');
let harry = new Employee('Harry Stocrate', 'ventes');
```

À première vue, cela semble correct. Cependant, `idCounter` est incrémenté à chaque fois qu'un objet `Employee` est créé, pour quelque raison que ce soit. Si vous créez toute la hiérarchie `Employee` présentée dans ce chapitre, le constructeur `Employee` est appelé chaque fois que vous mettez en place un prototype. Supposons que vous ayez le code suivant :

```js
let idCounter = 1;

function Employee(name, dept) {
  this.name = name || '';
  this.dept = dept || 'général';
  this.id = idCounter++;
}

function Manager(name, dept, reports) {...}
Manager.prototype = new Employee;

function WorkerBee(name, dept, projs) {...}
WorkerBee.prototype = new Employee;

function Engineer(name, projs, mach) {...}
Engineer.prototype = new WorkerBee;

function SalesPerson(name, projs, quota) {...}
SalesPerson.prototype = new WorkerBee;

let mac = new Engineer('Mac Fly');
```

Supposons en outre que les définitions omises ici possèdent la propriété `base` et appellent le constructeur situé au-dessus d'elles dans la chaîne des prototypes. Dans ce cas, au moment où l'objet `mac` est créé, `mac.id` est 5.

Selon l'application, il peut être important ou non que le compteur ait été incrémenté ces fois supplémentaires. Si vous vous souciez de la valeur exacte de ce compteur, une solution possible consiste à utiliser plutôt le constructeur suivant :

```js
function Employee(name, dept) {
  this.name = name || '';
  this.dept = dept || 'general';
  // Ceci est une écriture raccourcie de l'opérateur if
  // Si « name » est défini, alors on assigne et on incrémente
  if (name) {
    this.id = idCounter++;
  }
}
```

Lorsque vous créez une instance de `Employee` pour l'utiliser comme prototype, vous ne fournissez pas d'arguments au constructeur. En utilisant cette définition du constructeur, lorsque vous ne fournissez pas d'arguments, le constructeur n'attribue pas de valeur à l'id et ne met pas à jour le compteur. Par conséquent, pour qu'un `Employee` obtienne un id, vous devez spécifier un nom pour l'employé. Dans cet exemple, `mac.id` serait 1.

Vous pouvez également créer une copie de l'objet prototype de l'employé pour l'affecter à WorkerBee :

```js
WorkerBee.prototype = Object.create(Employee.prototype);
// au lieu de WorkerBee.prototype = new Employee
```

### Pas d'héritage multiple

Certains langages orientés objets permettent l'héritage multiple. C'est-à-dire qu'un objet peut hériter des propriétés et des valeurs d'objets parents non apparentés. JavaScript ne prend pas en charge l'héritage multiple.

L'héritage des valeurs des propriétés se produit au moment de l'exécution, lorsque JavaScript recherche une valeur dans la chaîne de prototypes d'un objet. Comme un objet n'a qu'un seul prototype associé, JavaScript ne peut pas hériter dynamiquement de plus d'une chaîne de prototypes.

En JavaScript, vous pouvez faire en sorte qu'une fonction de construction appelle plusieurs autres fonctions de construction en son sein. Cela donne l'illusion d'un héritage multiple. Par exemple, considérez les déclarations suivantes :

```js
function Hobbyist(hobby) {
  this.hobby = hobby || 'plongée';
}

function Engineer(name, projs, mach, hobby) {
  this.base1 = WorkerBee;
  this.base1(name, 'ingénierie', projs);
  this.base2 = Hobbyist;
  this.base2(hobby);
  this.machine = mach || '';
}
Engineer.prototype = new WorkerBee;

let dennis = new Engineer('Dennis Ah', ['collaborateur'], 'hugo');
```

Supposons en outre que la définition de `WorkerBee` soit celle utilisée précédemment dans ce chapitre. Dans ce cas, l'objet `dennis` possède ces propriétés :

```js
dennis.name == 'Dennis Ah';
dennis.dept == 'ingénierie';
dennis.projects == ['collaborateur'];
dennis.machine == 'hugo';
dennis.hobby == 'plongée';
```

Donc `dennis` obtient bien la propriété `hobby` du constructeur `Hobbyist`. Cependant, supposons que vous ajoutez ensuite une propriété au prototype du constructeur `Hobbyist` :

```js
Hobbyist.prototype.equipment = ['masque', 'palmes', 'régulateur', 'bcd'];
```

L'objet `dennis` n'héritera pas de cette nouvelle propriété.

{{PreviousNext("Web/JavaScript/Guide/Working_with_Objects", "Web/JavaScript/Guide/Using_promises")}}
