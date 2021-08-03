---
title: オブジェクトモデルの詳細
slug: Web/JavaScript/Guide/Details_of_the_Object_Model
tags:
  - Guide
  - Intermediate
  - JavaScript
  - Object
  - l10n:priority
translation_of: Web/JavaScript/Guide/Details_of_the_Object_Model
---
<div>{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Working_with_Objects", "Web/JavaScript/Guide/Using_promises")}}</div>

<p class="summary">JavaScript は、クラスではなく、プロトタイプに基づいたオブジェクトベースの言語です。この基本的な違いにより、JavaScript がオブジェクト階層構造をどのように作り上げているか、またプロパティやその値の継承方法が表面上分かりにくいものとなっています。本章ではこれらの実態を明らかにしていきます。</p>

<p>本章では、読者が JavaScript をある程度理解している、および単純なオブジェクトを作成するために JavaScript の関数を使用したことがあると想定しています。</p>

<h2 id="Class-based_vs._prototype-based_languages">クラスベース言語とプロトタイプベース言語</h2>

<p>Java や C++ といったクラスベースのオブジェクト指向言語は、クラスとインスタンスという 2 種類の異なる実体があるという概念に基づいています。</p>

<ul>
 <li><em>クラス</em>は、あるオブジェクトの集まりを特徴付けるすべてのプロパティ (Java ではメソッドとフィールドを、C++ ではメンバーをプロパティとみなします) を定義します。クラスとは、自身を表すオブジェクト集合のメンバーよりも、より抽象的です。例えば、<code>Employee</code> クラスは従業員すべての集合を表現することができます。</li>
 <li>一方、<em>インスタンス</em>はクラスを具体化したものです。つまり、クラスのメンバーの 1 つです。例えば、<code>Victoria</code> は <code>Employee</code> クラスのインスタンスになることができます。このインスタンスは、特定の個人を従業員として表すものです。インスタンスは、その親クラスのプロパティを (過不足なく) 正確に保持します。</li>
</ul>

<p>JavaScript のようなプロトタイプベースの言語では、この区別がありません。オブジェクトだけがあります。プロトタイプベース言語には、<em>プロトタイプオブジェクト (prototypical object)</em> という概念があります。このオブジェクトは、新しいオブジェクトの初期プロパティの取得元になるテンプレートとして使用されます。どのオブジェクトも独自のプロパティを指定できます。これはオブジェクト作成時にも実行時にも可能です。さらに、どのオブジェクトも別のオブジェクトに対する<em>プロトタイプ</em>として関連づけることができます。2 つ目のオブジェクトに対し 1 つ目のオブジェクトのプロパティを共有させることもできます。</p>

<h3 id="Defining_a_class">クラスの定義</h3>

<p>クラスベース言語では、独立した<em>クラス定義</em>でクラスを定義します。定義では<em>コンストラクター</em>と呼ばれる特殊なメソッドを使用して、そのクラスのインスタンスを作成することができます。コンストラクターメソッドは、インスタンスのプロパティに対する初期値を指定することができます。また、作成時に他の適切な処理を実行することもできます。<code>new</code> 演算子をコンストラクターメソッドと一緒に用いることで、クラスのインスタンスを作成できます。</p>

<p>JavaScript は同様のモデルに従っていますが、コンストラクターとは別のクラス定義はありません。その代わりに、プロパティと値からなる特別な初期セットを持つオブジェクトを作成する、コンストラクター関数を定義します。どの JavaScript 関数もコンストラクターとして使用できます。<code>new</code> 演算子をコンストラクター関数とともに使用することで、新しいオブジェクトを作成します。</p>

<div class="notecard note">
<p><strong>注:</strong> ECMAScript 2015 で導入された<a href="/ja/docs/Web/JavaScript/Reference/Classes">クラス宣言</a>について。</p>

<blockquote>
<p>ECMAScript 2015 で導入された JavaScript のクラスは、主に JavaScript の既存のプロトタイプベースの継承に対する糖衣構文です。クラス構文は、JavaScript に新しいオブジェクト指向の継承モデルを導入するものでは<em>ありません</em>。</p>
</blockquote>
</div>

<h3 id="Subclasses_and_inheritance">サブクラスと継承</h3>

<p>クラスベース言語では、クラス定義を通してクラスの階層を作ります。クラス定義では、新しいクラスが既存のクラスの<em>サブクラス</em>になるよう指定することができます。サブクラスはスーパークラスの全プロパティを継承します。さらに、新たなプロパティの追加や継承したプロパティの変更もできます。例えば、<code>Employee</code> クラスが <code>name</code> および <code>dept</code> プロパティのみを含み、<code>Manager</code> は <code>reports</code> プロパティが追加された <code>Employee</code> のサブクラスであるとします。この場合、<code>Manager</code> クラスのインスタンスは <code>name</code>、<code>dept</code>、<code>reports</code> の 3 つのプロパティをすべて持つことになります。</p>

<p>JavaScript では、プロトタイプオブジェクトを何らかのコンストラクター関数に結びつけられるようにすることで、継承を実装しています。そのため、全く同じように <code>Employee</code> と <code>Manager</code> の例を作成できますが、使用する用語が若干異なります。まず、<code>Employee</code> コンストラクター関数を定義し、<code>name</code> および <code>dept</code> プロパティを定義します。次に <code>Manager</code> コンストラクター関数を定義し、<code>Employee</code> コンストラクター関数を呼び出して <code>reports</code> プロパティを定義します。最後に、<code>Manager</code> コンストラクト関数の <code>prototype</code> に <code>Employee.prototype</code> から派生した新しいオブジェクトを代入します。そして新しい <code>Manager</code> を作成すると、このオブジェクトは <code>Employee</code> オブジェクトから <code>name</code> および <code>dept</code> プロパティを継承します。</p>

<h3 id="Adding_and_removing_properties">プロパティの追加と削除</h3>

<p>クラスベース言語では一般的にクラスをコンパイル時に生成し、コンパイル時または実行時にクラスのインスタンスを作成します。クラス定義後に、そのクラスのプロパティの数や型を変更することはできません。しかし JavaScript では、どのオブジェクトでも実行時にプロパティの追加や削除ができます。ある一連のオブジェクトでプロトタイプとして使用されているオブジェクトにプロパティを追加すると、それをプロトタイプとするオブジェクトにも新しいプロパティが追加されます。</p>

<h3 id="Summary_of_differences">相違点の概要</h3>

<p>こうした相違点の要約を以下の表にまとめています。本章では後ほど、JavaScript のコンストラクターとプロトタイプを用いたオブジェクト階層作成の詳細を説明し、Java における手法との比較も行っていきます。</p>

<table class="standard-table">
 <caption>クラスベース (Java) とプロトタイプベース (JavaScript) のオブジェクトシステムの比較</caption>
 <thead>
  <tr>
   <th scope="col">クラスベース (Java)</th>
   <th scope="col">プロトタイプベース (JavaScript)</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>クラスとインスタンスは異なる実体です。</td>
   <td>すべてのオブジェクトは別のオブジェクトを継承できます。</td>
  </tr>
  <tr>
   <td>クラス定義を用いてクラスを定義します。また、コンストラクターメソッドを用いてクラスをインスタンス化します。</td>
   <td>コンストラクター関数を用いて一連のオブジェクトを定義および作成します。</td>
  </tr>
  <tr>
   <td><code>new</code> 演算子を用いて単一のオブジェクトを生成します。</td>
   <td>同様です。</td>
  </tr>
  <tr>
   <td>既存のクラスのサブクラスを定義するクラス定義を用いて、オブジェクト階層を構築します。</td>
   <td>コンストラクター関数に結びつけられたプロトタイプとしてオブジェクトを代入することで、オブジェクト階層を構築します。</td>
  </tr>
  <tr>
   <td>クラスチェーンに従ってプロパティを継承します。</td>
   <td>プロトタイプチェーンに従ってプロパティを継承します。</td>
  </tr>
  <tr>
   <td>クラス定義が、クラスから作られた全インスタンス<em>すべての</em>プロパティを定義します。実行時に動的にプロパティを追加することはできません。</td>
   <td>コンストラクター関数またはプロトタイプによって、<em>一連の初期化された</em>プロパティが指定されます。個々のオブジェクトやオブジェクトのセット全体へ動的にプロパティを追加したり、それらからプロパティを削除したりできます。</td>
  </tr>
 </tbody>
</table>

<h2 id="The_employee_example">事例 : 従業員モデル</h2>

<p>ここからは、次の図で示す従業員の階層を使用していきます。</p>

<p><img alt="" src="figure8.1.png"></p>

<p>これは、以下のオブジェクトのオブジェクト階層を示しています。</p>

<ul>
 <li><code>Employee</code> には、プロパティ <code>name</code> (既定値は空文字列) および <code>dept</code> (既定値は "general") があります。</li>
 <li><code>Manager</code> は <code>Employee</code> をベースとしています。<code>reports</code> プロパティ (既定値は空の配列、値として <code>Employee</code> オブジェクトの配列を保持する) が追加されています。</li>
 <li><code>WorkerBee</code> も <code>Employee</code> をベースとしています。<code>projects</code> プロパティ (既定値は空の配列、値として文字列の配列を保持する) が追加されています。</li>
 <li><code>SalesPerson</code> は <code>WorkerBee</code> をベースとしています。<code>quota</code> プロパティ (既定の値は 100) が追加され、さらに <code>dept</code> プロパティを "sales" という値で上書きします。これは、販売員が全員同じ部署に所属していることを示します。</li>
 <li><code>Engineer</code> は <code>WorkerBee</code> をベースとしています。<code>machine</code> プロパティ (既定の値は空文字列) が追加され、さらに <code>dept</code> プロパティを "engineering" という値で上書きします。</li>
</ul>


<h2 id="Creating_the_hierarchy">階層の生成</h2>

<p>Employee の階層を実装するための、適切なコンストラクター関数を定義する方法はいくつかあります。どの方法で定義するかは、アプリケーションで何を実現したいかに大きく依存します。</p>

<p>この章では、継承がどのように機能するかを表現するため、とても単純な (かつ比較的柔軟でない) 定義の使い方でこれを説明していきます。この定義方法では、オブジェクト作成時にプロパティの値を指定することはできません。新しく作成されるオブジェクトには既定値が割り当てられ、値は後から変更できます。</p>

<p>実際のアプリケーションでは、オブジェクト作成時にプロパティの値を指定できるコンストラクターを定義することになるでしょう (詳しくは<a href="#more_flexible_constructors">より柔軟なコンストラクター</a>をご覧ください) 。今回はこれらの単純な定義を使用して、継承はどのようにして起こるのかを実際に示していくことにします。</p>

<p>以下に示すように、Java と JavaScript の <code>Employee</code> の定義は似ています。両者の相違点は、Java では各プロパティに型を指定する必要があるのに対して、JavaScript ではその必要がないことです (これは JavaScript が弱い型付けの言語であるのに対して Java が <a href="https://ja.wikipedia.org/wiki/%E5%9E%8B%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0#.E5.BC.B7.E3.81.84.E5.9E.8B.E4.BB.98.E3.81.91.E3.81.A8.E5.BC.B1.E3.81.84.E5.9E.8B.E4.BB.98.E3.81.91">強い型付け言語</a>だからです) 。</p>

<h4 id="JavaScript_using_this_may_cause_an_error_for_the_following_examples">JavaScript (これを使用すると、以下の例でエラーが発生する可能性があります)</h4>

<pre class="brush: js">class Employee {
  constructor() {
    this.name = '';
    this.dept = 'general';
  }
}
</pre>

<h4 id="JavaScript_**_use_this_instead">JavaScript ** (代わりにこれを使う)</h4>

<pre class="brush: js">function Employee() {
    this.name = '';
    this.dept = 'general';
}
</pre>

<h4 id="Java">Java</h4>

<pre class="brush: java">public class Employee {
   public String name = "";
   public String dept = "general";
}
</pre>

<p><code>Manager</code> および <code>WorkerBee</code> の定義では、継承チェーンにおいて隣接する上位オブジェクトの指定方法に違いがあります。JavaScript では、プロトタイプインスタンスをコンストラクター関数の <code>prototype</code> プロパティの値として追加し、さらに <code>prototype.constructor</code> をコンストラクター関数で上書きします。コンストラクターを定義した後なら、いつでもこれを行うことができます。Java では、クラス定義内でスーパークラスを指定します。クラス定義の外部でスーパークラスを変更することはできません。</p>

<h4 id="JavaScript">JavaScript</h4>

<pre class="brush: js">function Manager() {
  Employee.call(this);
  this.reports = [];
}
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

function WorkerBee() {
  Employee.call(this);
  this.projects = [];
}
WorkerBee.prototype = Object.create(Employee.prototype);
WorkerBee.prototype.constructor = WorkerBee;
</pre>

<h4 id="Java_2">Java</h4>

<pre class="brush: java">public class Manager extends Employee {
   public Employee[] reports =
       new Employee[0];
}

public class WorkerBee extends Employee {
   public String[] projects = new String[0];
}
</pre>

<p><code>Engineer</code> および <code>SalesPerson</code> の定義は、<code>WorkerBee</code> の子孫、したがって <code>Employee</code> の子孫でもあるオブジェクトを作成します。こうした種類のオブジェクトは、チェーンの上位にある全オブジェクトのプロパティを持ちます。さらに、これらの定義によって、継承された <code>dept</code> のプロパティ値を、自身のオブジェクト固有の新しい値に上書きしています。</p>

<h4 id="JavaScript_2">JavaScript</h4>

<pre class="brush: js">function SalesPerson() {
   WorkerBee.call(this);
   this.dept = 'sales';
   this.quota = 100;
}
SalesPerson.prototype = Object.create(WorkerBee.prototype);
SalesPerson.prototype.constructor = SalesPerson;

function Engineer() {
   WorkerBee.call(this);
   this.dept = 'engineering';
   this.machine = '';
}
Engineer.prototype = Object.create(WorkerBee.prototype)
Engineer.prototype.constructor = Engineer;
</pre>

<h4 id="Java_3">Java</h4>

<pre class="brush: java">public class SalesPerson extends WorkerBee {
   public String dept = "sales";
   public double quota = 100.0;
}

public class Engineer extends WorkerBee {
   public String dept = "engineering";
   public String machine = "";
}
</pre>

<p>これらの定義を使用して、プロパティが既定値をとる、オブジェクトのインスタンスを作成することができます。下記の図は、これらの JavaScript の定義を使用して新しいオブジェクトを作成する方法を示しています。また、新しいオブジェクトのプロパティの値も示しています。</p>

<div class="note">
<p><strong>注:</strong> <em>インスタンス</em>という用語は、クラスベースの言語においては特定の技術的な意味を持っています。これらの言語では、インスタンスとはクラスの個々のメンバであり、クラスとは根本的に異なるものです。JavaScript では、「インスタンス」にこのような技術的な意味はありません。なぜならば、JavaScript ではクラスとインスタンスとの間にそのような違いがないためです。しかしながら、JavaScript について話す際に「インスタンス」を、個々のコンストラクター関数を用いて作成されたオブジェクトを意味する言葉として、非公式に使用することがあります。例えば <code>jane</code> は非公式に <code>Engineer</code> のインスタンスであると言うこともできます。同様に、「親」、「子」、「祖先」、「子孫」という用語は JavaScript において公式な意味を持ちませんが、プロトタイプチェーンにおいて上や下にあるオブジェクトについて言及する際に、それらを非公式に使用してもかまいません。</p>
</div>

<h3 id="Creating_objects_with_simple_definitions">簡単な定義によるオブジェクトの作成</h3>

<div class="twocolumns">
<h4 id="Object_hierarchy">オブジェクト階層</h4>

<p>下記のような階層が、右に書かれたコードを使って作成されます。</p>

<p><img src="figure8.3.png"></p>

<h4 id="Individual_objects_Jim_Sally_Mark_Fred_Jane_etc._Instances_created_from_constructor">個別のオブジェクト = Jim, Sally, Mark, Fred, Jane, など。<br>
 コンストラクターから生成された「インスタンス」</h4>

<pre class="brush: js">var jim = new Employee;
// Parentheses can be omitted if the
// constructor takes no arguments.
// jim.name is ''
// jim.dept is 'general'

var sally = new Manager;
// sally.name is ''
// sally.dept is 'general'
// sally.reports is []

var mark = new WorkerBee;
// mark.name is ''
// mark.dept is 'general'
// mark.projects is []

var fred = new SalesPerson;
// fred.name is ''
// fred.dept is 'sales'
// fred.projects is []
// fred.quota is 100

var jane = new Engineer;
// jane.name is ''
// jane.dept is 'engineering'
// jane.projects is []
// jane.machine is ''
</pre>
</div>

<h2 id="Object_properties">オブジェクトのプロパティ</h2>

<p>この章では、オブジェクトがどのようにしてプロトタイプチェーンにより他のオブジェクトからプロパティを継承するのか、また実行時にプロパティを追加すると何が起きるのかについて考察します。</p>

<h3 id="Inheriting_properties">プロパティの継承</h3>

<p>次の文を用いて、<code>mark</code> オブジェクトを <code>WorkerBee</code> として生成するとしましょう。</p>

<pre class="brush: js">var mark = new WorkerBee;
</pre>

<p>JavaScript は <code>new</code> 演算子に出会うと、新しく汎用オブジェクトを作成し、暗黙に内部プロパティ [[Prototype]] の値を <code>WorkerBee.prototype</code> の値に設定し、その新しいオブジェクトを <code>this</code> キーワードの値として <code>WorkerBee</code> コンストラクター関数に渡します。内部の [[Prototype]] プロパティはプロパティ値を返すために使用されるプロトタイプチェーンを決定します。これらのプロパティが設定されると JavaScript は新しいオブジェクトを返し、代入文によって変数 <code>mark</code> にそのオブジェクトが設定されます。</p>

<p>このプロセスでは、<code>mark</code> がプロトタイプチェーンによって継承するプロパティは、<code>mark</code> オブジェクトの値には (<em>ローカル</em>値としては) 明示的に格納されません。プロパティの値を使用するときは、JavaScript はまずその値がオブジェクトに存在しているかを確認します。存在する場合は、その値が返されます。値がローカルには存在しない場合、JavaScript はプロトタイプチェーンを確認します (内部的な [[Prototype]] プロパティを使用) 。プロトタイプチェーン内のオブジェクトがそのプロパティの値を持っている場合は、その値が返されます。そのようなプロパティが見つからない場合、JavaScript はオブジェクトにそのプロパティがないと報告します。このようにして、<code>mark</code> オブジェクトは次のようなプロパティと値を持つことになります。</p>

<pre class="brush: js">mark.name = '';
mark.dept = 'general';
mark.projects = [];
</pre>

<p><code>mark</code> オブジェクトは、Employee コンストラクターによって <code>name</code> および <code>dept</code> プロパティのローカル値が割り当てられます。<code>projects</code> プロパティには、<code>WorkerBee</code> コンストラクターによってローカル値が代入されます。JavaScript ではこのようにプロパティとその値の継承を行います。このプロセスの詳細は<a href="#property_inheritance_revisited">プロパティの継承、再び</a>にて説明します。</p>

<p>これらのコンストラクターはインスタンス固有の値を渡せないため、この情報は汎用的になります。プロパティの値は、<code>WorkerBee</code> によって作成されるすべての新しいオブジェクトに共通の既定値になります。もちろん、これらのどのプロパティでも値を変更することができます。そのためには、次のようにして <code>mark</code> に固有の情報を与えます。</p>

<pre class="brush: js">mark.name = 'Doe, Mark';
mark.dept = 'admin';
mark.projects = ['navigator'];</pre>

<h3 id="Adding_properties">プロパティの追加</h3>

<p>JavaScript では、実行時にどんなオブジェクトにもプロパティを追加することができます。コンストラクター関数で与えられるプロパティだけしか使えないわけではありません。単一のオブジェクトに特化してプロパティを追加するには、次のようにオブジェクトに値を代入します。</p>

<pre class="brush: js">mark.bonus = 3000;
</pre>

<p>すると、<code>mark</code> オブジェクトに <code>bonus</code> プロパティができます。しかし <code>WorkerBee</code> にはこのプロパティは存在しません。</p>

<p>あるコンストラクター関数のプロトタイプとして使用されているオブジェクトに新しいプロパティを追加すると、プロトタイプからプロパティを継承する全オブジェクトにそのプロパティを追加します。例えば、次の文を使用すると <code>specialty</code> プロパティをすべての従業員に対して追加することができます。</p>

<pre class="brush: js">Employee.prototype.specialty = 'none';
</pre>

<p>JavaScript でこの文が実行されると、即座に <code>mark</code> オブジェクトも <code>specialty</code> プロパティを <code>"none"</code> という値で持つようになります。次の図では、プロパティを <code>Employee</code> プロトタイプに追加し、さらに <code>Engineer</code> プロトタイプに存在するプロパティを上書きしたときの効果を示しています。</p>

<img alt="Adding properties" src="figure8.4.png">

<h2 id="More_flexible_constructors">より柔軟なコンストラクター</h2>

<p>これまでに見てきたコンストラクター関数は、インスタンス作成時にプロパティの値を指定することができませんでした。Java のようにコンストラクターに引数を与えて、インスタンスのプロパティの値を初期化することができます。以下の図はこれを実現する方法の一つの方法です。</p>

<img alt="コンストラクターでのプロパティの指定方法、その 1" src="figure8.5.png">

<p>Java および JavaScript におけるこれらのオブジェクト定義を次表に示します。</p>

<pre class="brush: js">function Employee(name, dept) {
  this.name = name || '';
  this.dept = dept || 'general';
}
</pre>

<pre class="brush: java">public class Employee {
   public String name;
   public String dept;
   public Employee () {
      this("", "general");
   }
   public Employee (String name) {
      this(name, "general");
   }
   public Employee (String name, String dept) {
      this.name = name;
      this.dept = dept;
   }
}
</pre>

<pre class="brush: js">function WorkerBee(projs) {
  this.projects = projs || [];
}
WorkerBee.prototype = new Employee;
</pre>

<pre class="brush: java">public class WorkerBee extends Employee {
   public String[] projects;
   public WorkerBee () {
      this(new String[0]);
   }
   public WorkerBee (String[] projs) {
      projects = projs;
   }
}
</pre>

<pre class="brush: js">
function Engineer(mach) {
  this.dept = 'engineering';
  this.machine = mach || '';
}
Engineer.prototype = new WorkerBee;
</pre>

<pre class="brush: java">public class Engineer extends WorkerBee {
   public String machine;
   public Engineer () {
      dept = "engineering";
      machine = "";
   }
   public Engineer (String mach) {
      dept = "engineering";
      machine = mach;
   }
}
</pre>

<p>これらの JavaScript の定義では、既定値の設定に特殊な構文を使用しています。</p>

<pre class="brush: js">this.name = name || '';
</pre>

<p>JavaScript の論理和 (OR) 演算子 (<code>||</code>) は、その最初の引数を評価します。その引数が true に評価される場合、演算子はその引数を返します。そうでない場合、第2引数の値を返します。したがって、このコードは <code>name</code> が <code>name</code> プロパティの値に使用できる値かどうかを確認します。使用できると確認されれば <code>this.name</code> にその値を設定します。そうでなければ <code>this.name</code> に空文字列をセットします。本章ではこの方法がより簡潔なのでこの構文を使用していますが、一目見ただけでは不可解に思えるかもしれません。</p>

<div class="note">
<p><strong>注:</strong> ご想像の通り、この構文はコンストラクターが <code>false</code> に変換される引数 (<code>0</code> や空文字列 (<code>""</code>) など) と共に呼び出された場合は動作しません。その場合は既定値が選択されます。</p>
</div>

<p>これらの定義を用いると、オブジェクトのインスタンスを作成するときに、局所的に定義されたプロパティに対する値を指定することができます。次の文を使用すると新しい <code>Engineer</code> を作成できます。</p>

<pre class="brush: js">var jane = new Engineer('belau');
</pre>

<p>すると <code>Jane</code> のプロパティは次のようになります。</p>

<pre class="brush: js">jane.name == '';
jane.dept == 'engineering';
jane.projects == [];
jane.machine == 'belau';
</pre>

<p>これらの定義では、<code>name</code> のような継承されたプロパティに対して初期値を指定することはできない点に注意してください。JavaScript で継承されるプロパティに対し初期値を指定したいのであれば、コンストラクター関数にさらにコードを追加する必要があります。</p>

<p>ここまでは、コンストラクター関数は汎用オブジェクトを生成し、その後で新しいオブジェクトに対してローカルプロパティと値を定義していました。プロトタイプチェーンのより上位のオブジェクトのコンストラクター関数を直接呼び出すことで、コンストラクターへさらにプロパティを追加することができます。次の図はこの新しい定義方法です。</p>

<img alt="コンストラクターでのプロパティの指定方法、その 2" src="figure8.6.png">

<p>これらの定義の一つを詳しく見ていきましょう。これは <code>Engineer</code> コンストラクターの新しい定義です。</p>

<pre class="brush: js">function Engineer(name, projs, mach) {
  this.base = WorkerBee;
  this.base(name, 'engineering', projs);
  this.machine = mach || '';
}
</pre>

<p>次のようにして新しい <code>Engineer</code> オブジェクトを作成するとします。</p>

<pre class="brush: js">var jane = new Engineer('Doe, Jane', ['navigator', 'javascript'], 'belau');
</pre>

<p>JavaScript は次の手順を踏みます。</p>

<ol>
 <li><code>new</code> 演算子が汎用オブジェクトを生成し、その <code>__proto__</code> プロパティに <code>Engineer.prototype</code> を設定します。</li>
 <li><code>new</code> 演算子が <code>this</code> キーワードの値としてこの新しい汎用オブジェクトを <code>Engineer</code> コンストラクターに渡します。</li>
 <li>コンストラクターがそのオブジェクトに <code>base</code> という新しいプロパティを生成し、<code>WorkerBee</code> コンストラクターの値を <code>base</code> プロパティに代入します。これにより、<code>WorkerBee</code> コンストラクターは <code>Engineer</code> オブジェクトのメソッドになります。<code>base</code> というプロパティ名は特別なものではありません。あらゆる正当なプロパティ名を使用できますが、ここで <code>base</code> という名前を使うのは、その目的をたやすくイメージさせるためです。</li>
 <li>コンストラクターが <code>base</code> メソッドを呼び出します。その引数として、コンストラクターに渡された引数のうち 2 つ (<code>"Doe, Jane"</code> および <code>["navigator", "javascript"]</code>) と、さらに文字列 <code>"engineering"</code> を渡します。コンストラクターで <code>"engineering"</code> を明示的に使用するのは、すべての <code>Engineer</code> オブジェクトは継承により <code>dept</code> プロパティは同じ値となっていて、<code>Employee</code> から継承された値を指定値に上書きするためです。</li>
 <li><code>base</code> は <code>Engineer</code> のメソッドであるため、<code>base</code> を呼び出す際に、JavaScript によって <code>this</code> キーワードをステップ 1 で作成したオブジェクトにバインドします。これにより、<code>WorkerBee</code> 関数は順に <code>"Doe, Jane"</code> および <code>"engineering"</code> という引数を <code>Employee</code> コンストラクター関数に渡します。<code>Employee</code> コンストラクター関数から戻ると、<code>WorkerBee</code> 関数は残りの引数を使用して <code>projects</code> プロパティをセットします。</li>
 <li><code>base</code> メソッドから戻ると、<code>Engineer</code> コンストラクターがオブジェクトの <code>machine</code> プロパティを <code>"belau"</code> に初期化します。</li>
 <li>コンストラクターから戻ると、JavaScript は新しいオブジェクトを <code>jane</code> という変数に代入します。</li>
</ol>

<p><code>Engineer</code> コンストラクターの内部から <code>WorkerBee</code> コンストラクターを呼び出しさえすれば、きちんと <code>Engineer</code> オブジェクトに継承が設定されるように思うかもしれません。しかし実際はそうではありません。<code>WorkerBee</code> コンストラクターを呼び出すことで、呼び出されるすべてのコンストラクター関数によって指定されたプロパティを持つ <code>Engineer</code> オブジェクトは確かに作成されます。しかし、後からプロパティを <code>Employee</code> または <code>WorkerBee</code> のプロトタイプに追加しても、それらのプロパティは <code>Engineer</code> オブジェクトに継承されません。例えば、次のような文を書いたとします。</p>

<pre class="brush: js">function Engineer(name, projs, mach) {
  this.base = WorkerBee;
  this.base(name, 'engineering', projs);
  this.machine = mach || '';
}
var jane = new Engineer('Doe, Jane', ['navigator', 'javascript'], 'belau');
Employee.prototype.specialty = 'none';
</pre>

<p><code>jane</code> オブジェクトは <code>specialty</code> プロパティを継承しません。動的な継承を確実にするには、やはりプロトタイプを明示的に示す必要があります。代わりに次の文を使用しましょう。</p>

<pre class="brush: js">function Engineer(name, projs, mach) {
  this.base = WorkerBee;
  this.base(name, 'engineering', projs);
  this.machine = mach || '';
}
Engineer.prototype = new WorkerBee;
var jane = new Engineer('Doe, Jane', ['navigator', 'javascript'], 'belau');
Employee.prototype.specialty = 'none';
</pre>

<p>すると、<code>jane</code> オブジェクトの <code>specialty</code> プロパティの値は "none" になります。</p>

<p>もう一つの継承方法は、<code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/call">call()</a></code> / <a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/apply"><code>apply()</code></a> メソッドを使うことです。以下の二つは同等です。</p>

<pre class="brush: js">function Engineer(name, projs, mach) {
  this.base = WorkerBee;
  this.base(name, 'engineering', projs);
  this.machine = mach || '';
}
</pre>

<pre class="brush: js">function Engineer(name, projs, mach) {
  WorkerBee.call(this, name, 'engineering', projs);
  this.machine = mach || '';
}
</pre>

<p>JavaScript の <code>call()</code> メソッドを使うことで、実装がよりきれいになります。<code>base</code> が全く必要ないからです。</p>

<h2 id="Property_inheritance_revisited">プロパティの継承、再び</h2>

<p>これまでの節では、JavaScript のコンストラクターとプロトタイプが階層をどのように実現しているかを説明してきました。この節では、これまでの議論では必ずしも明白ではなかった、細かい部分について議論していきます。</p>

<h3 id="Local_versus_inherited_values">ローカル値と継承値</h3>

<p>オブジェクトのプロパティにアクセスすると、この章で先に説明したように、JavaScript は次のステップを実行します。</p>

<ol>
 <li>プロパティの値がローカルに存在するかを確かめます。存在している場合は、その値を返します。</li>
 <li>値がローカルに存在していない場合は、プロトタイプチェーンを確認します (<code>__proto__</code> プロパティを使用) 。</li>
 <li>プロトタイプチェーン内のオブジェクトが指定したプロパティの値を持っている場合は、その値を返します。</li>
 <li>そのようなプロパティが見つからない場合は、オブジェクトにそのプロパティは存在しません。</li>
</ol>

<p>このステップの結果は、それまでにどのようにオブジェクトを定義したかによります。元の例では次の定義を用いました。</p>

<pre class="brush: js">function Employee() {
  this.name = '';
  this.dept = 'general';
}

function WorkerBee() {
  this.projects = [];
}
WorkerBee.prototype = new Employee;
</pre>

<p>この定義を前提とし、次の文を用いて <code>WorkerBee</code> のインスタンスとして <code>amy</code> を作成するとします。</p>

<pre class="brush: js">var amy = new WorkerBee;
</pre>

<p><code>amy</code> オブジェクトにはローカルプロパティが 1 つあります。それは <code>projects</code> です。<code>name</code> および <code>dept</code> プロパティの値は <code>amy</code> にとってローカルではないため、<code>amy</code> オブジェクトの <code>__proto__</code> プロパティから取得します。その結果、<code>amy</code> には次のプロパティが存在することになります。</p>

<pre class="brush: js">amy.name == '';
amy.dept == 'general';
amy.projects == [];
</pre>

<p>ここで、<code>Employee</code> に結びつけられたプロトタイプの <code>name</code> プロパティの値を変えてみましょう :</p>

<pre class="brush: js">Employee.prototype.name = 'Unknown';
</pre>

<p>一見、<code>Employee</code> の全インスタンスに新しい値が反映されるように思われます。しかし、そうはなりません。</p>

<p><code>Employee</code> オブジェクトからなる<em>いかなる</em>インスタンスを作成しても、そのインスタンスは <code>name</code> プロパティのローカル値 (空文字列) を持つことになります。つまり、新しい <code>Employee</code> オブジェクトの作成に <code>WorkerBee</code> プロトタイプを設定すれば、<code>WorkerBee.prototype</code> は <code>name</code> プロパティのためのローカル値を持つことになる、ということです。そのため、JavaScript が <code>amy</code> オブジェクト (<code>WorkerBee</code> のインスタンス) の <code>name</code> プロパティを探すと、JavaScript はそのプロパティのローカル値を <code>WorkerBee.prototype</code> 内で発見します。結果、<code>Employee.prototype</code> まではチェーンの検索は行われません。</p>

<p>実行時にオブジェクトのプロパティの値を変更し、新しい値がそのオブジェクトのすべての子孫に継承するようにしたい場合は、オブジェクトのコンストラクター関数内でそのプロパティを定義してはいけません。その代わりに、コンストラクター関数に結びつけられたプロトタイプにプロパティを追加します。例えば、先のコードを次のように変更しましょう。</p>

<pre class="brush: js">function Employee() {
  this.dept = 'general';    // Note that this.name (a local variable) does not appear here
}
Employee.prototype.name = '';    // A single copy

function WorkerBee() {
  this.projects = [];
}
WorkerBee.prototype = new Employee;

var amy = new WorkerBee;

Employee.prototype.name = 'Unknown';
</pre>

<p>こうすれば、<code>amy</code> の <code>name</code> プロパティは "Unknown" になります。</p>

<p>この例で示したように、オブジェクトのプロパティに既定の値を持たせて、実行時に既定値を変更したいのであれば、コンストラクター関数内でなく、コンストラクターのプロトタイプ内でプロパティを設定するようにしてください。</p>

<h3 id="Determining_instance_relationships">インスタンス関係の決定</h3>

<p>JavaScript でのプロパティ探索は、まずオブジェクト自身のプロパティ内で探索し、そのプロパティ名が存在しない場合は特殊なオブジェクトプロパティである <code>__proto__</code> で探索します。これは再帰的に継続されます。このプロセスを「プロトタイプチェーンの探索」と呼びます。</p>

<p>この特別なプロパティ <code>__proto__</code> は、オブジェクトが構築される際に設定されて、コンストラクターの <code>prototype</code> プロパティを構成する値となります。よって、式 <code>new Foo()</code> は <code>__proto__ == <code>Foo.prototype</code></code> となるオブジェクトを作成します。その結果、<code>Foo.prototype</code> のプロパティの変更により、<code>new Foo()</code> で作成されたすべてのオブジェクトのプロパティ探索が変更されます。</p>

<p>すべてのオブジェクトは (<code>Object</code> を除いて)  <code>__proto__</code> オブジェクトプロパティを持ちます。また、すべての関数は <code>prototype</code> オブジェクトプロパティを持ちます。したがって、「プロトタイプ継承」を用いてオブジェクトを別のオブジェクトへ関連づけられます。オブジェクトの <code>__proto__</code> と関数の <code>prototype</code> オブジェクトを比較することで、継承状態の確認ができます。これを行う手っ取り早い方法が JavaScript にはあります。<code>instanceof</code> 演算子はオブジェクトと関数を検査して、オブジェクトが関数のプロトタイプから継承している場合に true を返します。例えば、</p>

<pre class="brush: js">var f = new Foo();
var isTrue = (f instanceof Foo);</pre>

<p>もっと詳しい例として、<a href="#inheriting_properties">プロパティの継承</a>で利用した定義を使ってみましょう。以下のようにして <code>Engineer</code> オブジェクトを作成しましょう。</p>

<pre class="brush: js">var chris = new Engineer('Pigman, Chris', ['jsd'], 'fiji');
</pre>

<p>このオブジェクトでは、以下の文はすべて true になります。</p>

<pre class="brush: js">chris.__proto__ == Engineer.prototype;
chris.__proto__.__proto__ == WorkerBee.prototype;
chris.__proto__.__proto__.__proto__ == Employee.prototype;
chris.__proto__.__proto__.__proto__.__proto__ == Object.prototype;
chris.__proto__.__proto__.__proto__.__proto__.__proto__ == null;
</pre>

<p>ここで次のような <code>instanceOf</code> 関数を書いてみましょう。</p>

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
}
</pre>

<div class="note"><p><strong>注: </strong> 上記の実装では、最近のバージョンでの JavaScript における XML オブジェクト表現法の癖を回避するために、オブジェクトの型と "xml" とを照合しています。具体的な詳細を知りたい場合は {{bug(634150)}} をご覧ください。</p></div>

<p>この定義を用いると、以下の式はすべて true になります。</p>

<pre class="brush: js">instanceOf(chris, Engineer)
instanceOf(chris, WorkerBee)
instanceOf(chris, Employee)
instanceOf(chris, Object)
</pre>

<p>しかし、次の式は false になります。</p>

<pre class="brush: js">instanceOf(chris, SalesPerson)
</pre>

<h3 id="Global_information_in_constructors">コンストラクターにおけるグローバル情報</h3>

<p>コンストラクターを作成する際、コンストラクター内でグローバルな情報を設定する場合は注意が必要です。例えば、一意的な ID をそれぞれの新しい従業員情報へ自動的に代入したいとします。そこで、以下のように <code>Employee</code> を定義できます。</p>

<pre class="brush: js">var idCounter = 1;

function Employee(name, dept) {
   this.name = name || '';
   this.dept = dept || 'general';
   this.id = idCounter++;
}
</pre>

<p>この定義を用いると、新しい <code>Employee</code> を作成するたびに、コンストラクターが次の ID を順々に代入し、グローバルな ID カウンターをインクリメントします。その結果、続けて以下の文を置くと <code>victoria.id</code> は 1 に、<code>harry.id</code> は 2 となります。</p>

<pre class="brush: js">var victoria = new Employee('Pigbert, Victoria', 'pubs');
var harry = new Employee('Tschopik, Harry', 'sales');
</pre>

<p>一見、これは申し分なさそうです。しかし、<code>idCounter</code> はどのような用途であろうと、<code>Employee</code> オブジェクトが作成されるたびにインクリメントされます。この章で示した <code>Employee</code> の階層全体を作成すると、<code>Employee</code> コンストラクターはプロトタイプをセットアップするたびに呼び出されます。次のようなコードがあるとします :</p>

<pre class="brush: js">var idCounter = 1;

function Employee(name, dept) {
   this.name = name || '';
   this.dept = dept || 'general';
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

var mac = new Engineer('Wood, Mac');
</pre>

<p>さらに、ここでは省かれている定義に <code>base</code> プロパティがあり、その定義がプロトタイプチェーンにおいて上位のコンストラクターを呼び出すとします。この場合、<code>mac</code> オブジェクトが作成されるまでに <code>mac.id</code> は 5 になってしまいます。</p>

<p>カウンターが余計にインクリメントされることが問題になるかどうかは、そのアプリケーション次第です。このカウンターの正確な値を気にするのであれば、代わりに一つの解決策として以下のようなコンストラクターが考えられます。</p>

<pre class="brush: js">function Employee(name, dept) {
   this.name = name || '';
   this.dept = dept || 'general';
   if (name)
      this.id = idCounter++;
}
</pre>

<p>プロトタイプとして使用する <code>Employee</code> のインスタンスを作成するときに、コンストラクターに引数を与えてはいけません。このコンストラクターの定義を使用すれば、引数を渡さないときはコンストラクターが ID に値を代入せず、カウンターの更新も行いません。そのため、割り当てられる id を <code>Employee</code> に付与したい場合は、従業員の名前を指定する必要があります。この例では <code>mac.id</code> は 1 になります。</p>

<p>それ以外に、WorkerBee に割り当てるために Employee のプロトタイプオブジェクトのコピーを作成することもできます。</p>

<pre class="brush: js">WorkerBee.prototype = Object.create(Employee.prototype);
// instead of WorkerBee.prototype = new Employee
</pre>

<h3 id="No_multiple_inheritance">多重継承はなし</h3>

<p>オブジェクト指向言語の中には、多重継承を許容するものがあります。つまり、オブジェクトが無関係な親オブジェクトから、プロパティと値を継承できるということです。JavaScript は多重継承をサポートしていません。</p>

<p>実行時のプロパティの値の継承は、JavaScript が値を見つけようとしてオブジェクトのプロトタイプチェーンを探索することで行われます。オブジェクトに結びつけられたプロトタイプは 1 つであるため、JavaScript は複数のプロトタイプチェーンから動的に継承することはできません。</p>

<p>JavaScript では、コンストラクター関数がその中で複数の別のコンストラクター関数を呼び出すようにすることができます。これによって多重継承状のものが実現できます。例えば以下の文があるとします。</p>

<pre class="brush: js">function Hobbyist(hobby) {
   this.hobby = hobby || 'scuba';
}

function Engineer(name, projs, mach, hobby) {
   this.base1 = WorkerBee;
   this.base1(name, 'engineering', projs);
   this.base2 = Hobbyist;
   this.base2(hobby);
   this.machine = mach || '';
}
Engineer.prototype = new WorkerBee;

var dennis = new Engineer('Doe, Dennis', ['collabra'], 'hugo');
</pre>

<p>さらに、<code>WorkerBee</code> の定義はこの章で先に使用したものであるとします。この場合、<code>dennis</code> オブジェクトにはこれらのプロパティが存在します。</p>

<pre class="brush: js">dennis.name == 'Doe, Dennis';
dennis.dept == 'engineering';
dennis.projects == ['collabra'];
dennis.machine == 'hugo';
dennis.hobby == 'scuba';
</pre>

<p><code>dennis</code> は <code>Hobbyist</code> コンストラクターから <code>hobby</code> プロパティを取得しているのです。ここで、<code>Hobbyist</code> コンストラクターのプロトタイプにプロパティを追加してみましょう。</p>

<pre class="brush: js">Hobbyist.prototype.equipment = ['mask', 'fins', 'regulator', 'bcd'];
</pre>

<p>このようにしても <code>dennis</code> オブジェクトはこの新しいプロパティを継承しません。</p>

<div>{{PreviousNext("Web/JavaScript/Guide/Working_with_Objects", "Web/JavaScript/Guide/Using_promises")}}</div>
