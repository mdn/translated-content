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
<div>{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Working_with_Objects", "Web/JavaScript/Guide/Using_promises")}}</div>

<p>JavaScript est un langage orienté objet basé sur des prototypes, plutôt que sur des classes. En raison de cette base différente, il peut être moins évident de comprendre comment JavaScript vous permet de créer des hiérarchies d'objets et d'avoir un héritage des propriétés et de leurs valeurs. Ce chapitre tente de clarifier la situation.</p>

<p>Ce chapitre part du principe que vous avez déjà une certaine connaissance de JavaScript et que vous avez utilisé des fonctions JavaScript pour créer des objets simples.</p>

<h2 id="class-based_vs._prototype-based_languages">Langages basés sur des classes ou des prototypes</h2>

<p>Les langages orientés objets, basés sur des classes, tels que Java et C++, sont fondés sur le concept de deux entités distinctes : les classes et les instances.</p>

<ul>
  <li>Une <em>classe</em> définit toutes les propriétés qui caractérisent un certain ensemble d'objets (en considérant les méthodes et les champs en Java, ou les membres en C++, comme des propriétés). Une classe est abstraite par opposition à un membre particulier d'un ensemble d'objets qu'elle décrit. Par exemple, la classe <code>Employee</code> pourrait représenter l'ensemble de tous les employés.</li>
  <li>Une <em>instance</em>, par contre, est l'instanciation d'une classe. Par exemple, <code>Victoria</code> pourrait être une instance de la classe <code>Employee</code>, représentant un individu particulier en tant qu'employé. Une instance possède exactement les mêmes propriétés que sa classe parente (ni plus, ni moins).</li>
</ul>

<p>Un langage basé sur des prototypes, tel que JavaScript, ne fait pas cette distinction : il a des objets. Un langage basé sur des prototypes possède la notion d'un <em>objet prototypique</em>, un objet utilisé comme modèle à partir duquel on peut obtenir les propriétés initiales d'un nouvel objet. Tout objet peut spécifier ses propres propriétés, soit lors de sa création, soit au moment de l'exécution. En outre, tout objet peut être associé en tant que <em>prototype</em> d'un autre objet, permettant au second objet de partager les propriétés du premier.</p>

<h3 id="defining_a_class">La définition d'une classe</h3>

<p>Dans les langages basés sur les classes, vous définissez une classe en utilisant une <em>définition de classe</em> distincte. Dans cette définition, vous pouvez spécifier des méthodes spéciales, appelées <em>constructeur</em> (et écrites « constructor »), pour créer des instances de la classe. Une méthode constructrice peut spécifier des valeurs initiales pour les propriétés de l'instance et effectuer d'autres traitements appropriés au moment de la création. Vous utilisez l'opérateur <code>new</code> en association avec la méthode constructrice pour créer des instances de la classe.</p>

<p>JavaScript suit un modèle similaire, mais ne dispose pas d'une définition de classe distincte de celle du constructeur. Au lieu de cela, vous définissez une fonction de construction pour créer des objets avec un ensemble initial particulier de propriétés et de valeurs. Toute fonction JavaScript peut être utilisée comme constructeur. Vous utilisez l'opérateur <code>new</code> avec une fonction « constructor » pour créer un nouvel objet.</p>

<div class="note">
  <p><strong>Note :</strong> ECMAScript 2015 introduit une <a href="/fr/docs/Web/JavaScript/Reference/Classes">déclaration de classe</a> :</p>
  
  <blockquote>
    <p>Les classes JavaScript, introduites dans ECMAScript 2015, sont principalement un enrichissement syntaxique de l'héritage basé sur les prototypes existant dans JavaScript. La syntaxe des classes n'introduit pas un nouveau modèle d'héritage orienté objet dans JavaScript.</p>
  </blockquote>
</div>

<h3 id="subclasses_and_inheritance">Classes enfants et héritage</h3>

<p>Dans un langage basé sur les classes, vous créez une hiérarchie de classes par le biais des définitions de classes. Dans une définition de classe, vous pouvez spécifier que la nouvelle classe est une <em>classe enfant</em> d'une classe déjà existante. La classe enfant hérite de toutes les propriétés de la classe parente et peut en plus ajouter de nouvelles propriétés ou modifier celles héritées. Par exemple, supposons que la classe <code>Employee</code> ne comprend que les propriétés <code>name</code> (« nom ») et <code>dept</code> (« département »), et que <code>Manager</code> est une classe enfant de <code>Employee</code> qui ajoute la propriété <code>reports</code> (« rapports »). Dans ce cas, une instance de la classe <code>Manager</code> aurait les trois propriétés : <code>name</code>, <code>dept</code>, et <code>reports</code>.</p>

<p>JavaScript met en œuvre l'héritage en vous permettant d'associer un objet prototypique à n'importe quelle fonction de construction. Ainsi, vous pouvez créer exactement l'exemple <code>Employee</code> — <code>Manager</code>, mais vous utilisez une terminologie légèrement différente. D'abord, vous définissez la fonction du constructeur <code>Employee</code>, en spécifiant les propriétés <code>name</code> et <code>dept</code>. Ensuite, vous définissez la fonction du constructeur <code>Manager</code>, en appelant le constructeur <code>Employee</code> et en spécifiant la propriété <code>reports</code>. Enfin, vous attribuez un nouvel objet dérivé de <code>Employee.prototype</code> comme <code>prototype</code> pour la fonction du constructeur <code>Manager</code>. Ensuite, lorsque vous créez un nouveau <code>Manager</code>, il hérite des propriétés <code>name</code> et <code>dept</code> de l'objet <code>Employee</code>.</p>

<h3 id="adding_and_removing_properties">Ajouter ou retirer des propriétés</h3>

<p>Dans les langages basés sur les classes, vous créez généralement une classe au moment de la compilation, puis vous instanciez, des instances de la classe, soit au moment de la compilation, soit au moment de l'exécution. Vous ne pouvez pas modifier le nombre ou le type de propriétés d'une classe après avoir défini cette dernière. En JavaScript, cependant, au moment de l'exécution, vous pouvez ajouter ou supprimer des propriétés de tout objet. Si vous ajoutez une propriété à un objet qui est utilisé comme prototype pour un ensemble d'objets, les objets dont il est le prototype obtiennent également la nouvelle propriété.</p>

<h3 id="summary_of_differences">Résumé des différences</h3>

<p>Le tableau suivant donne un bref résumé de certaines de ces différences. Le reste de ce chapitre décrit les détails de l'utilisation des constructeurs et prototypes JavaScript pour créer une hiérarchie d'objets et les compare à la façon dont vous le feriez en Java.</p>

<table class="standard-table">
  <caption>Comparaison des systèmes d'objets basés sur des classes (Java) et des prototypes (JavaScript)</caption>
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
      <td>Définir une classe avec une définition de classe ; instancier une classe avec des méthodes de construction.</td>
      <td>Définir et créer un ensemble d'objets avec des fonctions de construction.</td>
    </tr>
    <tr>
      <th scope="row">Création d'un nouvel objet</th>
      <td>Créer un objet unique avec l'opérateur <code>new</code>.</td>
      <td>Pareil.</td>
    </tr>
    <tr>
      <th scope="row">Construction de la hiérarchie des objets</th>
      <td>Construire une hiérarchie d'objets en utilisant des définitions de classes pour définir des classes enfants à partir de classes existantes.</td>
      <td>Construire une hiérarchie d'objets en assignant un objet comme prototype associé à une fonction de construction.</td>
    </tr>
    <tr>
      <th scope="row">Modèle d'héritage</th>
      <td>Hériter des propriétés en suivant la chaîne de classes.</td>
      <td>Hériter des propriétés en suivant la chaîne des prototypes.</td>
    </tr>
    <tr>
      <th scope="row">Extension des propriétés</th>
      <td>La définition de la classe spécifie <em>toutes</em> les propriétés de toutes les instances d'une classe. Impossible d'ajouter des propriétés dynamiquement au moment de l'exécution.</td>
      <td>La fonction ou le prototype du constructeur spécifie un <em>ensemble initial</em> de propriétés. On peut ajouter ou supprimer dynamiquement des propriétés à des objets individuels ou à l'ensemble des objets.</td>
    </tr>
  </tbody>
</table>

<h2 id="the_employee_example">L'exemple de l'employé</h2>

<p>Le reste de ce chapitre utilise la hiérarchie des employés présentée dans la figure suivante.</p>

<p><img alt="" src="figure8.1.png"></p>

<p>Cela montre une hiérarchie d'objets avec les objets suivants :</p>

<ul>
  <li><code>Employee</code> possède les propriétés <code>name</code> (« le nom » dont la valeur par défaut est la chaîne de caractères vide) et <code>dept</code> (« le département » dont la valeur par défaut est « général »).</li>
  <li><code>Manager</code> est basé sur <code>Employee</code>. Il ajoute la propriété <code>reports</code> (« les rapports » dont la valeur par défaut est un tableau vide, destiné à avoir pour valeur un tableau d'objets <code>Employee</code>).</li>
  <li><code>WorkerBee</code> est également basé sur <code>Employee</code>. Il ajoute la propriété <code>projects</code> (« les projets » dont la valeur par défaut est un tableau vide, destiné à avoir pour valeur un tableau de chaînes de caractères).</li>
  <li><code>SalesPerson</code> est basé sur <code>WorkerBee</code>. Il ajoute la propriété <code>quota</code> (dont la valeur par défaut est 100). Il surcharge la propriété <code>dept</code> avec la valeur « ventes », indiquant que tous les vendeurs sont dans le même département.</li>
  <li><code>Engineer</code> est basé sur <code>WorkerBee</code>. Il ajoute la propriété <code>machine</code> (dont la valeur par défaut est une chaîne de caractères vide) et surcharge également la propriété <code>dept</code> avec la valeur «&nbsp;ingénierie&nbsp;».</li>
</ul>

<h2 id="creating_the_hierarchy">La création de la hiérarchie</h2>

<p>Il existe plusieurs façons de définir des fonctions constructrices appropriées pour mettre en œuvre la hiérarchie des employés. La façon dont vous choisissez de les définir dépend en grande partie de ce que vous voulez être en mesure de faire dans votre application.</p>

<p>Cette section montre comment utiliser des définitions très simples (et comparativement peu flexibles) pour démontrer comment faire fonctionner l'héritage. Dans ces définitions, vous ne pouvez spécifier aucune valeur de propriété lorsque vous créez un objet. L'objet nouvellement créé reçoit les valeurs par défaut, que vous pouvez modifier ultérieurement.</p>

<p>Dans une application réelle, vous définiriez probablement des constructeurs qui vous permettent de fournir des valeurs de propriété au moment de la création de l'objet (voir <a href="#more_flexible_constructors">Des constructeurs plus flexibles</a> pour plus d'informations). Pour l'instant, ces définitions simples démontrent comment l'héritage se produit.</p>

<p>Les définitions suivantes en Java et en JavaScript de <code>Employee</code> sont similaires. La seule différence est que vous devez spécifier le type de chaque propriété en Java mais pas en JavaScript (ceci est dû au fait que Java est un <a href="https://en.wikipedia.org/wiki/Strong_and_weak_typing">langage fortement typé</a> <small>(en anglais)</small> alors que JavaScript est un langage faiblement typé).</p>

<h4 id="javascript_using_this_may_cause_an_error_for_the_following_examples">JavaScript (l'utilisation de cette option peut provoquer une erreur pour les exemples suivants)</h4>

<pre class="brush: js">class Employee {
  constructor() {
    this.name = '';
    this.dept = 'général';
  }
}</pre>

<h4 id="javascript_**_use_this_instead">JavaScript ** (utilisez plutôt ceci)</h4>

<pre class="brush: js">function Employee() {
    this.name = '';
    this.dept = 'général';
}</pre>

<h4 id="java">Java</h4>

<pre class="brush: java">public class Employee {
   public String name = "";
   public String dept = "général";
}</pre>

<p>Les définitions de <code>Manager</code> et de <code>WorkerBee</code> montrent la différence dans la façon de spécifier l'objet immédiatement supérieur dans la chaîne d'héritage. En JavaScript, vous ajoutez une instance prototypique comme valeur de la propriété <code>prototype</code> de la fonction du constructeur, puis vous surchargez le <code>prototype.constructor</code> de la fonction du constructeur. Vous pouvez le faire à tout moment après avoir défini le constructeur. En Java, vous spécifiez la superclasse dans la définition de la classe. Vous ne pouvez pas modifier la superclasse en dehors de la définition de la classe.</p>

<h4 id="javascript">JavaScript</h4>

<pre class="brush: js">function Manager() {
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
</pre>

<h4 id="java_2">Java</h4>

<pre class="brush: java">// La classe Manager étend la classe parente Employee
public class Manager extends Employee {
   public Employee[] reports = new Employee[0]; // On définit une propriété unique à Manager
}

// La classe WorkerBee étend la classe parente Employee
public class WorkerBee extends Employee {
   public String[] projects = new String[0]; // On définit une propriété unique à WorkerBee
}
</pre>

<p>Les définitions <code>Engineer</code> et <code>SalesPerson</code> créent des objets qui descendent de <code>WorkerBee</code> et donc de <code>Employee</code>. Un objet de ces types possède les propriétés de tous les objets situés au-dessus de lui dans la hiérarchie. En outre, ces définitions remplacent la valeur héritée de la propriété <code>dept</code> par de nouvelles valeurs spécifiques à ces objets.</p>

<h4 id="javascript_2">JavaScript</h4>

<pre class="brush: js">function SalesPerson() {
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
Engineer.prototype.constructor = Engineer;</pre>

<h4 id="java_3">Java</h4>

<pre class="brush: java">// La classe a pour classe parente WorkerBee
public class SalesPerson extends WorkerBee {
   public String dept = "ventes"; // On réécrit la valeur de « dept »
   public double quota = 100.0; // On ajoute une propriété unique à SalesPerson
}

// La classe a pour classe parente WorkerBee
public class Engineer extends WorkerBee {
   public String dept = "ingénierie"; // On réécrit la valeur de « dept »
   public String machine = ""; // On ajoute une propriété unique à Engineer
}</pre>

<p>À l'aide de ces définitions, vous pouvez créer des instances de ces objets qui obtiennent les valeurs par défaut de leurs propriétés. La figure suivante illustre l'utilisation de ces définitions JavaScript pour créer de nouveaux objets et montre les valeurs des propriétés de ces nouveaux objets.</p>

<div class="note">
  <p><strong>Note :</strong> Le terme <em>instance</em> a une signification technique spécifique dans les langages basés sur les classes. Dans ces langages, une instance est une instanciation individuelle d'une classe et est fondamentalement différente d'une classe. En JavaScript, « instance » n'a pas cette signification technique car JavaScript ne fait pas cette différence entre classes et instances. Toutefois, en parlant de JavaScript, le terme « instance » peut être utilisé de manière informelle pour désigner un objet créé à l'aide d'une fonction de construction particulière. Ainsi, dans cet exemple, vous pourriez dire de manière informelle que <code>jane</code> est une instance de <code>Engineer</code>. De même, bien que les termes <i>parent</i> (« Parent »), <i>child</i> (« Enfant »), <i>ancestor</i> (« Ancêtre ») et <i>descendant</i> (« Descendant ») n'aient pas de signification formelle en JavaScript ; vous pouvez les utiliser de manière informelle pour vous référer à des objets supérieurs ou inférieurs dans la chaîne des prototypes.</p>
</div>

<h3 id="creating_objects_with_simple_definitions">Création d'objets avec des définitions simples</h3>

<h4 id="object_hierarchy">Hiérarchie des objets</h4>

<p>La hiérarchie suivante est créée à l'aide du code situé ci-dessous.</p>

<p><img src="figure8.3.png"></p>

<h4 id="individual_objects_jim_sally_mark_fred_jane_etc._instances_created_from_constructor">Objets individuels = Jim, Sally, Mark, Fred, Jane, etc.<br>« Instances » créées à partir du constructeur</h4>

<pre class="brush: js">let jim = new Employee;
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
</pre>

<h2 id="object_properties">Les propriétés d'un objet</h2>

<p>Cette section explique comment les objets héritent des propriétés d'autres objets dans la chaîne des prototypes et ce qui se passe lorsque vous ajoutez une propriété au moment de l'exécution.</p>

<h3 id="inheriting_properties">L'héritage de propriétés</h3>

<p>Supposons que vous créez l'objet <code>mark</code> comme un <code>WorkerBee</code> avec l'instruction suivante :</p>

<pre class="brush: js">let mark = new WorkerBee;</pre>

<p>Lorsque JavaScript voit l'opérateur <code>new</code>, il crée un nouvel objet générique et définit implicitement la valeur de la propriété interne [[Prototype]] à la valeur de <code>WorkerBee.prototype</code> et passe ce nouvel objet comme valeur du mot-clé <em><code>this</code></em> à la fonction du constructeur <code>WorkerBee</code>. La propriété interne [[Prototype]] détermine la chaîne de prototypes utilisée pour retourner les valeurs des propriétés. Une fois ces propriétés définies, JavaScript renvoie le nouvel objet et l'instruction d'affectation définit la variable <code>mark</code> à cet objet.</p>

<p>Ce processus ne met pas explicitement des valeurs dans l'objet <code>mark</code> (valeurs <em>locales</em>) pour les propriétés que <code>mark</code> hérite de la chaîne de prototypes. Lorsque vous demandez la valeur d'une propriété, JavaScript vérifie d'abord si la valeur existe dans cet objet. Si c'est le cas, cette valeur est retournée. Si la valeur n'existe pas localement, JavaScript vérifie la chaîne des prototypes (en utilisant la propriété interne [[Prototype]]). Si un objet de la chaîne des prototypes possède une valeur pour la propriété, cette valeur est renvoyée. Si aucune propriété de ce type n'est trouvée, JavaScript indique que l'objet ne possède pas la propriété. Ainsi, l'objet <code>mark</code> possède les propriétés et valeurs suivantes :</p>

<pre class="brush: js">mark.name = '';
mark.dept = 'général';
mark.projects = [];</pre>

<p>L'objet <code>mark</code> se voit attribuer des valeurs locales pour les propriétés <code>name</code> et <code>dept</code> par le constructeur <code>Employee</code>. Une valeur locale lui est attribuée pour la propriété <code>projects</code> par le constructeur <code>WorkerBee</code>. On obtient ainsi l'héritage des propriétés et de leurs valeurs en JavaScript. Certaines subtilités de ce processus sont abordées dans <a href="#property_inheritance_revisited">L'héritage des propriétés, revisité</a>.</p>

<p>Comme ces constructeurs ne vous permettent pas de fournir des valeurs spécifiques à une instance, ces informations sont génériques. Les valeurs des propriétés sont celles par défaut partagées par tous les nouveaux objets créés à partir de <code>WorkerBee</code>. Vous pouvez, bien sûr, modifier les valeurs de n'importe laquelle de ces propriétés. Ainsi, vous pourriez donner des informations spécifiques pour <code>mark</code> comme suit :</p>

<pre class="brush: js">mark.name = 'Mark Eting';
mark.dept = 'admin';
mark.projects = ['navigateur'];</pre>

<h3 id="adding_properties">L'ajout de propriétés</h3>

<p>En JavaScript, vous pouvez ajouter des propriétés à tout objet au moment de l'exécution. Vous n'êtes pas contraint d'utiliser uniquement les propriétés fournies par la fonction du constructeur. Pour ajouter une propriété spécifique à un seul objet, vous attribuez une valeur à l'objet, comme suit :</p>

<pre class="brush: js">mark.bonus = 3000;</pre>

<p>Maintenant, l'objet <code>mark</code> possède une propriété <code>bonus</code>, mais aucun autre objet <code>WorkerBee</code> ne possède cette propriété.</p>

<p>Si vous ajoutez une nouvelle propriété à un objet qui est utilisé comme prototype pour une fonction du constructeur, vous ajoutez cette propriété à tous les objets qui héritent des propriétés du prototype. Par exemple, vous pouvez ajouter une propriété <code>specialty</code> à tous les employés avec l'instruction suivante :</p>

<pre class="brush: js">Employee.prototype.specialty = 'aucune';</pre>

<p>Dès que JavaScript exécute cette instruction, l'objet <code>mark</code> possède également la propriété <code>specialty</code> avec la valeur <code>"aucune"</code>. La figure suivante montre l'effet de l'ajout de cette propriété au prototype <code>Employee</code>, puis de sa surcharge pour le prototype <code>Engineer</code>.</p>

<p><img alt="Ajout de propriétés" src="figure8.4.png"></p>

<h2 id="more_flexible_constructors">Des constructeurs plus flexibles</h2>

<p>Les fonctions correctrices présentées jusqu'à présent ne vous permettent pas de spécifier les valeurs des propriétés lorsque vous créez une instance. Comme avec Java, vous pouvez fournir des arguments aux constructeurs pour initialiser les valeurs des propriétés des instances. La figure suivante montre une façon de le faire.</p>

<p><img alt="Spécifier des propriétés dans un constructeur, prise 1" src="figure8.5.png"></p>

<p>Les paires d'exemples suivantes montrent les définitions Java et JavaScript de ces objets.</p>

<pre class="brush: js">// JavaScript
function Employee(name, dept) {
  this.name = name || ''; // L'argument donné OU la valeur par défaut
  this.dept = dept || 'général'; // L'argument donné OU la valeur par défaut
}</pre>

<pre class="brush: java">// Java
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
}</pre>

<pre class="brush: js">// JavaScript
function WorkerBee(projs) {
  this.projects = projs || []; // L'argument donné OU la valeur par défaut
}
WorkerBee.prototype = new Employee;</pre>

<pre class="brush: java">// Java
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
}</pre>

<pre class="brush: js">// JavaScript
function Engineer(mach) {
  this.dept = 'engineering'; // On réécrit la valeur de « dept »
  this.machine = mach || ''; // L'argument donné OU la valeur par défaut
}
Engineer.prototype = new WorkerBee;</pre>

<pre class="brush: java">// Java
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
}</pre>

<p>Ces définitions JavaScript utilisent un idiome spécial pour définir les valeurs par défaut :</p>

<pre class="brush: js">this.nom = nom || "";</pre>

<p>L'opérateur logique OU de JavaScript (<code>||</code>) évalue son premier argument. Si cet argument se transforme en vrai, l'opérateur le retourne. Sinon, l'opérateur renvoie la valeur du deuxième argument. Par conséquent, cette ligne de code teste pour voir si <code>name</code> a une valeur utile pour la propriété <code>name</code>. Si c'est le cas, elle définit <code>this.name</code> à cette valeur. Sinon, elle définit <code>this.name</code> à la chaîne de caractères vide. Ce chapitre utilise cet idiome par souci de concision ; cependant, il peut être déroutant au premier abord.</p>

<div class="note">
  <p><strong>Note :</strong> Cela peut ne pas fonctionner comme prévu si la fonction du constructeur est appelée avec des arguments qui se convertissent en <code>false</code> (comme <code>0</code> (zéro) et la chaîne vide (<code>""</code>)). Dans ce cas, la valeur par défaut sera choisie.</p>
</div>

<p>Avec ces définitions, lorsque vous créez une instance d'un objet, vous pouvez spécifier des valeurs pour les propriétés définies localement. Vous pouvez utiliser l'instruction suivante pour créer un nouvel <code>Engineer</code> :</p>

<pre class="brush: js">let jane = new Engineer('belau');</pre>

<p>Les propriétés de <code>Jane</code> sont maintenant :</p>

<pre class="brush: js">jane.name == '';
jane.dept == 'engineering';
jane.projects == [];
jane.machine == 'belau';</pre>

<p>Remarquez qu'avec ces définitions, vous ne pouvez pas spécifier une valeur initiale pour une propriété héritée telle que <code>name</code>. Si vous voulez spécifier une valeur initiale pour les propriétés héritées en JavaScript, vous devez ajouter du code supplémentaire à la fonction du constructeur.</p>

<p>Jusqu'à présent, la fonction du constructeur a créé un objet générique, puis a spécifié les propriétés et valeurs locales du nouvel objet. Vous pouvez demander au constructeur d'ajouter d'autres propriétés en appelant directement la fonction du constructeur d'un objet situé plus haut dans la chaîne des prototypes. La figure suivante montre ces nouvelles définitions.</p>

<p><img alt="Spécifier des propriétés dans un constructeur, prise 2" src="figure8.6.png"></p>

<p>Examinons l'une de ces définitions en détails. Voici la nouvelle définition pour le constructeur <code>Engineer</code> :</p>

<pre class="brush: js">function Engineer(name, projs, mach) {
  this.base = WorkerBee;
  this.base(name, 'ingénierie', projs);
  this.machine = mach || '';
}</pre>

<p>Supposons que vous créez un nouvel objet <code>Engineer</code> comme suit :</p>

<pre class="brush: js">let jane = new Engineer('Jane Dupont', ['navigateur', 'javascript'], 'belau');
</pre>

<p>JavaScript suit les étapes suivantes :</p>

<ol>
  <li>L'opérateur <code>new</code> crée un objet générique et définit sa propriété <code>__proto__</code> à <code>Engineer.prototype</code>.</li>
  <li>L'opérateur <code>new</code> transmet le nouvel objet au constructeur <code>Engineer</code> comme valeur du mot clé <code>this</code>.</li>
  <li>Le constructeur crée une nouvelle propriété appelée <code>base</code> pour cet objet et affecte la valeur du constructeur <code>WorkerBee</code> à la propriété <code>base</code>. Cela fait du constructeur <code>WorkerBee</code> une méthode de l'objet <code>Engineer</code>. Le nom de la propriété <code>base</code> n'est pas spécial. Vous pouvez utiliser n'importe quel nom de propriété légal ; <code>base</code> est évocateur de son but.</li>
  <li>Le constructeur appelle la méthode <code>base</code>, en passant comme arguments deux des arguments passés au constructeur (<code>"Jane Dupont"</code> et <code>["navigateur", "javascript"]</code>) et également la chaîne <code>"ingénierie"</code>. L'utilisation explicite de <code>"ingénierie"</code> dans le constructeur indique que tous les objets <code>Engineer</code> ont la même valeur pour la propriété <code>dept</code> héritée, et cette valeur remplace la valeur héritée de <code>Employee</code>.</li>
  <li>Parce que <code>base</code> est une méthode de <code>Engineer</code>, dans l'appel à <code>base</code>, JavaScript lie le mot-clé <code>this</code> à l'objet créé à l'étape 1. Ainsi, la fonction <code>WorkerBee</code> transmet à son tour les arguments <code>"Jane Dupont"</code> et <code>"ingénierie"</code> à la fonction du constructeur <code>Employee</code>. Au retour de la fonction du constructeur <code>Employee</code>, la fonction <code>WorkerBee</code> utilise l'argument restant pour définir la propriété <code>projects</code>.</li>
  <li>Au retour de la méthode <code>base</code>, le constructeur <code>Engineer</code> initialise la propriété <code>machine</code> de l'objet à <code>"belau"</code>.</li>
  <li>Au retour du constructeur, JavaScript affecte le nouvel objet à la variable <code>jane</code>.</li>
</ol>

<p>Vous pourriez penser que, ayant appelé le constructeur <code>WorkerBee</code> à partir de l'intérieur du constructeur <code>Engineer</code>, vous avez mis en place l'héritage de manière appropriée pour les objets <code>Engineer</code>. Ce n'est pas le cas. L'appel du constructeur <code>WorkerBee</code> garantit qu'un objet <code>Engineer</code> commence avec les propriétés spécifiées dans toutes les fonctions des constructeurs qui sont appelées. Cependant, si vous ajoutez ultérieurement des propriétés aux prototypes <code>Employee</code> ou <code>WorkerBee</code>, ces propriétés ne sont pas héritées par l'objet <code>Engineer</code>. Par exemple, supposons que vous ayez les déclarations suivantes :</p>

<pre class="brush: js">function Engineer(name, projs, mach) {
  this.base = WorkerBee;
  this.base(name, 'ingénierie', projs);
  this.machine = mach || '';
}

let jane = new Engineer('Jane Dupont', ['navigateur', 'javascript'], 'belau');
Employee.prototype.specialty = 'aucune';</pre>

<p>L'objet <code>jane</code> n'hérite pas de la propriété <code>specialty</code>. Vous devez encore configurer explicitement le prototype pour assurer un héritage dynamique. Supposons plutôt que vous ayez ces déclarations :</p>

<pre class="brush: js">function Engineer(name, projs, mach) {
  this.base = WorkerBee;
  this.base(name, 'ingénierie', projs);
  this.machine = mach || '';
}

Engineer.prototype = new WorkerBee;
let jane = new Engineer('Jane Dupont', ['navigateur', 'javascript'], 'belau');
Employee.prototype.specialty = 'aucune';</pre>

<p>Maintenant la valeur de la propriété <code>jane</code> de l'objet <code>specialty</code> est « aucune ».</p>

<p>Une autre façon d'hériter est d'utiliser les méthodes <code><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/call">call()</a></code> / <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/apply"><code>apply()</code></a>. Les méthodes ci-dessous sont équivalentes :</p>

<pre class="brush: js">function Engineer(name, projs, mach) {
  this.base = WorkerBee;
  this.base(name, 'ingénierie', projs);
  this.machine = mach || '';
}</pre>

<pre class="brush: js">function Engineer(name, projs, mach) {
  WorkerBee.call(this, name, 'ingénierie', projs);
  this.machine = mach || '';
}</pre>

<p>L'utilisation de la méthode JavaScript <code>call()</code> rend une implémentation plus propre car <code>base</code> n'est plus nécessaire.</p>

<h2 id="property_inheritance_revisited">L'héritage des propriétés,  revisité</h2>

<p>Les sections précédentes ont décrit comment les constructeurs et prototypes JavaScript fournissent des hiérarchies et de l'héritage. Cette section aborde certaines subtilités qui n'étaient pas nécessairement apparentes dans les discussions précédentes.</p>

<h3 id="local_versus_inherited_values">Valeurs locales et valeurs héritées</h3>

<p>Lorsque vous accédez à une propriété d'objet, JavaScript effectue les étapes suivantes, comme décrit précédemment dans ce chapitre :</p>

<ol>
  <li>Vérifiez si la valeur existe localement. Si c'est le cas, elle est retournée.</li>
  <li>S'il n'y a pas de valeur locale, vérifiez la chaîne de prototypes (en utilisant la propriété <code>__proto__</code>).</li>
  <li>Si un objet de la chaîne de prototypes possède une valeur pour la propriété spécifiée, renvoyer cette valeur.</li>
  <li>Si aucune propriété de ce type n'est trouvée, l'objet ne possède pas cette propriété.</li>
</ol>

<p>Le résultat de ces étapes dépend de la façon dont vous définissez les choses en cours de route. L'exemple original avait ces définitions :</p>

<pre class="brush: js">function Employee() {
  this.name = '';
  this.dept = 'général';
}

function WorkerBee() {
  this.projects = [];
}
WorkerBee.prototype = new Employee;</pre>

<p>Avec ces définitions, supposons que vous créez <code>amy</code> comme une instance de <code>WorkerBee</code> avec l'instruction suivante :</p>

<pre class="brush: js">let amy = new WorkerBee;</pre>

<p>L'objet <code>amy</code> possède une propriété locale, <code>projects</code>. Les valeurs des propriétés <code>name</code> et <code>dept</code> ne sont pas locales à <code>amy</code> et héritent donc dans la propriété <code>amy</code> de l'objet <code>__proto__</code>. Ainsi, <code>amy</code> possède ces valeurs de propriétés :</p>

<pre class="brush: js">amy.name == '';
amy.dept == 'général';
amy.projects == [];</pre>

<p>Supposons maintenant que vous modifiez la valeur de la propriété <code>name</code> dans le prototype associé à <code>Employee</code> :</p>

<pre class="brush: js">Employee.prototype.name = 'Inconnu·e';</pre>

<p>À première vue, on pourrait s'attendre à ce que cette nouvelle valeur se propage vers le bas à toutes les instances de <code>Employee</code>. Cependant, ce n'est pas le cas.</p>

<p>Lorsque vous créez <em>n'importe quelle</em> instance de l'objet <code>Employee</code>, cette instance obtient une <strong>valeur locale</strong> pour la propriété <code>name</code> (la chaîne de caractères vide). Cela signifie que lorsque vous définissez le prototype de <code>WorkerBee</code> en créant un nouvel objet <code>Employee</code>, <code>WorkerBee.prototype</code> a une valeur locale pour la propriété <code>name</code>. Par conséquent, lorsque JavaScript recherche la propriété <code>name</code> de l'objet <code>amy</code> (une instance de <code>WorkerBee</code>), JavaScript trouve la valeur locale de cette propriété dans <code>WorkerBee.prototype</code>. Il ne cherche donc pas plus haut dans la chaîne jusqu'à <code>Employee.prototype</code>.</p>

<p>Si vous souhaitez modifier la valeur d'une propriété d'un objet au moment de l'exécution et que la nouvelle valeur soit héritée par tous les descendants de l'objet, vous ne pouvez pas définir la propriété dans la fonction du constructeur de l'objet. Vous devez plutôt l'ajouter au prototype associé au constructeur. Par exemple, supposons que vous remplaciez le code précédent par le suivant :</p>

<pre class="brush: js">function Employee() {
  this.dept = 'général'; // Notez que this.name (une variable locale) n'apparaît pas ici
}
Employee.prototype.name = ''; // Un seul exemplaire

function WorkerBee() {
  this.projects = [];
}
WorkerBee.prototype = new Employee;

let amy = new WorkerBee;

Employee.prototype.name = 'Inconnu·e';</pre>

<p>Dans ce cas, la propriété <code>name</code> de <code>amy</code> devient « Inconnu·e ».</p>

<p>Comme le montrent ces exemples, si vous souhaitez définir des valeurs par défaut pour les propriétés d'un objet et que vous voulez pouvoir modifier ces valeurs au moment de l'exécution, vous devez définir les propriétés dans le prototype du constructeur, et non dans la fonction du constructeur elle-même.</p>

<h3 id="determining_instance_relationships">Déterminer les relations entre les instances</h3>

<p>La recherche de propriétés en JavaScript s'effectue dans les propriétés propres d'un objet et, si le nom de la propriété n'est pas trouvé, elle s'effectue dans la propriété spéciale de l'objet <code>__proto__</code>. Cette opération se poursuit de manière récursive ; le processus est appelé « recherche dans la chaîne des prototypes ».</p>

<p>La propriété spéciale <code>__proto__</code> est définie lorsqu'un objet est construit ; elle prend la valeur de la propriété <code>prototype</code> du constructeur. Ainsi, l'expression <code>new Riri()</code> crée un objet avec <code>__proto__ == Riri.prototype</code>. Par conséquent, les modifications apportées aux propriétés de <code>Riri.prototype</code> modifient la recherche de propriétés pour tous les objets qui ont été créés par <code>new Riri()</code>.</p>

<p>Chaque objet a une propriété <code>__proto__</code> (sauf <code>Object</code>) ; chaque fonction a une propriété <code>prototype</code>. Les objets peuvent donc être liés par « héritage de prototype » à d'autres objets. Vous pouvez tester l'héritage en comparant le <code>__proto__</code> d'un objet avec l'objet <code>prototype</code> d'une fonction. JavaScript fournit un raccourci : l'opérateur <code>instanceof</code> teste un objet par rapport à une fonction et renvoie vrai si l'objet hérite du prototype de la fonction. Par exemple,</p>

<pre class="brush: js">let f = new Riri();
let isTrue = (f instanceof Riri);</pre>
  
<p>Pour un exemple plus détaillé, supposons que vous ayez le même ensemble de définitions que celui présenté dans <a href="#inheriting_properties">Héritage des propriétés</a>. Créez un objet <code>Engineer</code> comme suit :</p>
  
<pre class="brush: js">let chris = new Engineer('Chris Anthème', ['jsd'], 'fiji');</pre>

<p>Avec cet objet, les affirmations suivantes sont toutes vraies :</p>

<pre class="brush: js">chris.__proto__ == Engineer.prototype;
chris.__proto__.__proto__ == WorkerBee.prototype;
chris.__proto__.__proto__.__proto__ == Employee.prototype;
chris.__proto__.__proto__.__proto__.__proto__ == Object.prototype;
chris.__proto__.__proto__.__proto__.__proto__.__proto__ == null;</pre>

<p>Compte tenu de cela, vous pourriez écrire une fonction <code>instanceOf</code> comme suit :</p>

<pre class="brush: js">function instanceOf(object, constructor) {
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
}</pre>

<div class="note">
  <p><strong>Note :</strong> L'implémentation ci-dessus vérifie le type de l'objet par rapport à « xml » afin de contourner une bizarrerie de la façon dont les objets XML sont représentés dans les versions récentes de JavaScript. Voir <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=634150">bug 634150</a> si vous voulez connaître les détails.</p>
</div>

<p>En utilisant la fonction <code>instanceOf</code> définie ci-dessus, ces expressions sont vraies :</p>

<pre class="brush: js">instanceOf(chris, Engineer)
instanceOf(chris, WorkerBee)
instanceOf(chris, Employee)
instanceOf(chris, Object)</pre>

<p>Mais l'expression suivante est fausse :</p>

<pre class="brush: js">instanceOf(chris, SalesPerson)</pre>

<h3 id="global_information_in_constructors">Les informations globales dans les constructeurs</h3>

<p>Lorsque vous créez des constructeurs, vous devez faire attention si vous définissez des informations globales dans le constructeur. Par exemple, supposons que vous souhaitez qu'un identifiant unique soit automatiquement attribué à chaque nouvel employé. Vous pourriez utiliser la définition suivante pour <code>Employee</code> :</p>

<pre class="brush: js">let idCounter = 1; // On définit un compteur d'identifiant

function Employee(name, dept) {
  this.name = name || '';
  this.dept = dept || 'général';
  this.id = idCounter++; // On assigne la valeur et on incrémente le compteur
}</pre>

<p>Avec cette définition, lorsque vous créez un nouvel <code>Employee</code>, le constructeur lui attribue l'ID suivant dans la séquence, puis incrémente le compteur d'ID global. Ainsi, si votre déclaration est la suivante, <code>victoria.id</code> vaut 1 et <code>harry.id</code> vaut 2 :</p>

<pre class="brush: js">let victoria = new Employee('Victoria Lamar', 'pubs');
let harry = new Employee('Harry Stocrate', 'ventes');</pre>

<p>À première vue, cela semble correct. Cependant, <code>idCounter</code> est incrémenté à chaque fois qu'un objet <code>Employee</code> est créé, pour quelque raison que ce soit. Si vous créez toute la hiérarchie <code>Employee</code> présentée dans ce chapitre, le constructeur <code>Employee</code> est appelé chaque fois que vous mettez en place un prototype. Supposons que vous ayez le code suivant :</p>

<pre class="brush: js">let idCounter = 1;

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

let mac = new Engineer('Mac Fly');</pre>

<p>Supposons en outre que les définitions omises ici possèdent la propriété <code>base</code> et appellent le constructeur situé au-dessus d'elles dans la chaîne des prototypes. Dans ce cas, au moment où l'objet <code>mac</code> est créé, <code>mac.id</code> est 5.</p>

<p>Selon l'application, il peut être important ou non que le compteur ait été incrémenté ces fois supplémentaires. Si vous vous souciez de la valeur exacte de ce compteur, une solution possible consiste à utiliser plutôt le constructeur suivant :</p>

<pre class="brush: js">function Employee(name, dept) {
  this.name = name || '';
  this.dept = dept || 'general';
  // Ceci est une écriture raccourcie de l'opérateur if
  // Si « name » est défini, alors on assigne et on incrémente
  if (name) {
    this.id = idCounter++;
  }
}
</pre>

<p>Lorsque vous créez une instance de <code>Employee</code> pour l'utiliser comme prototype, vous ne fournissez pas d'arguments au constructeur. En utilisant cette définition du constructeur, lorsque vous ne fournissez pas d'arguments, le constructeur n'attribue pas de valeur à l'id et ne met pas à jour le compteur. Par conséquent, pour qu'un <code>Employee</code> obtienne un id, vous devez spécifier un nom pour l'employé. Dans cet exemple, <code>mac.id</code> serait 1.</p>

<p>Vous pouvez également créer une copie de l'objet prototype de l'employé pour l'affecter à WorkerBee :</p>

<pre class="brush: js">WorkerBee.prototype = Object.create(Employee.prototype);
// au lieu de WorkerBee.prototype = new Employee</pre>

<h3 id="no_multiple_inheritance">Pas d'héritage multiple</h3>

<p>Certains langages orientés objets permettent l'héritage multiple. C'est-à-dire qu'un objet peut hériter des propriétés et des valeurs d'objets parents non apparentés. JavaScript ne prend pas en charge l'héritage multiple.</p>

<p>L'héritage des valeurs des propriétés se produit au moment de l'exécution, lorsque JavaScript recherche une valeur dans la chaîne de prototypes d'un objet. Comme un objet n'a qu'un seul prototype associé, JavaScript ne peut pas hériter dynamiquement de plus d'une chaîne de prototypes.</p>

<p>En JavaScript, vous pouvez faire en sorte qu'une fonction de construction appelle plusieurs autres fonctions de construction en son sein. Cela donne l'illusion d'un héritage multiple. Par exemple, considérez les déclarations suivantes :</p>

<pre class="brush: js">function Hobbyist(hobby) {
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
</pre>

<p>Supposons en outre que la définition de <code>WorkerBee</code> soit celle utilisée précédemment dans ce chapitre. Dans ce cas, l'objet <code>dennis</code> possède ces propriétés :</p>

<pre class="brush: js">dennis.name == 'Dennis Ah';
dennis.dept == 'ingénierie';
dennis.projects == ['collaborateur'];
dennis.machine == 'hugo';
dennis.hobby == 'plongée';</pre>

<p>Donc <code>dennis</code> obtient bien la propriété <code>hobby</code> du constructeur <code>Hobbyist</code>. Cependant, supposons que vous ajoutez ensuite une propriété au prototype du constructeur <code>Hobbyist</code> :</p>

<pre class="brush: js">Hobbyist.prototype.equipment = ['masque', 'palmes', 'régulateur', 'bcd'];</pre>

<p>L'objet <code>dennis</code> n'héritera pas de cette nouvelle propriété.</p>

<div>{{PreviousNext("Web/JavaScript/Guide/Working_with_Objects", "Web/JavaScript/Guide/Using_promises")}}</div>
