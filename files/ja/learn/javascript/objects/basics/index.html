---
title: JavaScript オブジェクトの基本
slug: Learn/JavaScript/Objects/Basics
tags:
  - API
  - Article
  - Beginner
  - CodingScripting
  - JavaScript
  - Syntax
  - bracket notation
  - dot notation
  - instance
  - object literal
  - this
  - オブジェクト
  - 学習
  - 理論
translation_of: Learn/JavaScript/Objects/Basics
---
<div>{{LearnSidebar}}</div>

<div>{{NextMenu("Learn/JavaScript/Objects/Object-oriented_JS", "Learn/JavaScript/Objects")}}</div>

<p class="summary">この記事では、基本的な JavaScript オブジェクトの構文を学び、このコースで以前に見た一部の JavaScript の機能を復習し、すでに提供された多くの機能がオブジェクトであるという事実を再確認します。</p>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">前提知識:</th>
   <td>基本的なコンピューターを操作する能力、基本的な HTML と CSS に対する理解、基本的な JavaScript に親しんでいること（<a href="/ja/docs/Learn/JavaScript/First_steps">JavaScript の第一歩</a>と <a href="/ja/docs/Learn/JavaScript/Building_blocks">JavaScript の構成要素</a>を参照してください）。</td>
  </tr>
  <tr>
   <th scope="row">到達目標:</th>
   <td>オブジェクト指向プログラミングについての基本的な理論、どのように JavaScript に関連するか、JavaScript の作業を始める方法を理解できること。</td>
  </tr>
 </tbody>
</table>

<h2 id="Object_basics" name="Object_basics">オブジェクトの基本</h2>

<p>オブジェクトとは関連のあるデータと機能の集合です。(機能はたいていは変数と関数で構成されており、オブジェクトの中ではそれぞれプロパティとメソッドと呼ばれます。) どんなものか例を見てみましょう。</p>

<p>最初に <a href="https://github.com/mdn/learning-area/blob/master/javascript/oojs/introduction/oojs.html">oojs.html</a> ファイルを手元にコピーしてください。このファイルにはちょっとした内容 — ソースコードを書き込むための {{HTMLElement("script")}} 要素が一つ含まれています。このファイルをオブジェクトを書くための元として使います。作業中は<a href="/ja/docs/Learn/Common_questions/What_are_browser_developer_tools#The_JavaScript_console">開発者ツールの JavaScript コンソール</a>を開いておいて、すぐにコマンドを入力できるようにしておくとよいでしょう。</p>

<p>他の JavaScript の書き方と同じように、オブジェクトの生成は変数の宣言と初期化から始まります。手始めに、ファイルにある JavaScript コードの下に次のものを書いてみてください。それから保存して再読み込みしましょう。</p>

<pre class="brush: js notranslate">const person = {};</pre>

<p>ブラウザの <a href="/ja/docs/Learn/Common_questions/What_are_browser_developer_tools#The_JavaScript_console">JavaScript コンソール</a>を開いて、<code>person</code> と入力して、 <kbd>Enter</kbd>/<kbd>Return</kbd> を押してください。以下のいずれかの行に似た結果が得られるはずです。</p>

<pre class="brush: js line-numbers language-js notranslate"><code class="language-js"><span class="punctuation token">[</span>object Object<span class="punctuation token">]</span>
Object <span class="punctuation token">{</span> <span class="punctuation token">}</span>
<span class="punctuation token">{</span> <span class="punctuation token">}</span></code></pre>

<p>よくやりましたね! まずは最初のオブジェクトができました。でもこれだけでは空のオブジェクトであまり役には立ちません。さらにオブジェクトを変更してみましょう。</p>

<pre class="brush: js notranslate">const person = {
  name: ['Bob', 'Smith'],
  age: 32,
  gender: 'male',
  interests: ['music', 'skiing'],
  bio: function() {
    alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
  },
  greeting: function() {
    alert('Hi! I\'m ' + this.name[0] + '.');
  }
};
</pre>

<p>保存して再読み込みした後で、JavaScript コンソールにいくつか入力してみましょう。</p>

<pre class="brush: js notranslate">person.name
person.name[0]
person.age
person.interests[1]
person.bio()
person.greeting()</pre>

<p>オブジェクトから、データと機能を追加することができました。これで簡単な書き方で情報が引き出せます。</p>

<div class="note">
<p><strong>注</strong>: もし動かないようなら、完成版のソースコードと見比べてみてください (完成版: <a href="https://github.com/mdn/learning-area/blob/master/javascript/oojs/introduction/oojs-finished.html">oojs-finished.html</a> さらに<a href="http://mdn.github.io/learning-area/javascript/oojs/introduction/oojs-finished.html">ライブ版もあります</a>) 。ライブ版は空白の画面ですが、それで OK です。また開発ツールを開いて上記のコマンドを入力してオブジェクトの構造を見てみます。</p>
</div>

<p>さて、何が起きているのでしょうか。オブジェクトには複数のメンバーがあり、それぞれに名前がついていて(例えば上の例では <code>name</code> や <code>age</code>)、それぞれに値 (<code>['Bob', 'Smith']</code> や <code>32</code>) があります。それぞれの名前と値の組はカンマ ( , ) で区切られていて、名前と値はコロン ( : ) で区切られています。常にそのように書きます。</p>

<pre class="brush: js notranslate">const objectName = {
  member1Name: member1Value,
  member2Name: member2Value,
  member3Name: member3Value
}</pre>

<p>メンバーの値はほとんど何でも大丈夫です。例えば、先ほどの例では文字列、数値、2 つの配列に 2 つの関数でした。最初の 4 つはデータ項目でそのオブジェクトの<strong>プロパティ</strong>と呼ばれます。後ろの 2 つはオブジェクトの持つデータを使用して何かをする関数でオブジェクトの<strong>メソッド</strong>と呼ばれます。</p>

<p>このように記号を使って書くオブジェクトは後で出てくるクラスを使用して生成する方法と対比して<strong>オブジェクトリテラル</strong>と呼ばます。</p>

<p>オブジェクトリテラルを使用してオブジェクトを生成する方法はとても一般的で、ある法則に則って構造化、関連付けられたデータをやり取りするときによく使います。(例えばサーバーにリクエストを送ったり、データベースに保存したり。) ある一つのオブジェクトを送るほうが複数の項目を何回かに分けて送るよりも効率的で、名前を用いて検索するときなどには、配列よりも扱いやすいときがあります。</p>

<h2 id="Dot_notation" name="Dot_notation">ドットによる記述</h2>

<p>先ほどの例では、オブジェクトのプロパティとメソッドに対して、<strong>ドット記法</strong>を用いてアクセスしました 。オブジェクト名 (person) は<strong>名前空間</strong>として機能します。オブジェクト内に<strong>カプセル化</strong>されたものにアクセスするには、まずこのオブジェクト名を入力する必要があります。次に、ドット ( . ) を書いて、それからアクセスしたい項目を記述します。項目になりうるのは、単純なプロパティの名前や、配列の要素や、そのオブジェクトのメソッドの 1 つへの呼び出しなどです。次に例を示します:</p>

<pre class="brush: js notranslate">person.age
person.interests[1]
person.bio()</pre>

<h3 id="Sub-namespaces" name="Sub-namespaces">サブ名前空間</h3>

<p>オブジェクトの内部にさらにほかのオブジェクトを持つことも可能です。例えば、先の例で、<code>name</code> メンバーを、</p>

<pre class="brush: js notranslate">name: ['Bob', 'Smith'],</pre>

<p>以下のように変更してみましょう。</p>

<pre class="brush: js notranslate">name : {
  first: 'Bob',
  last: 'Smith'
},</pre>

<p>これで簡単に<strong>サブ名前空間</strong>を作り出すことができました。難しそうに聞こえるかもしれませんが、ただ単に項目をドットを用いて数珠つなぎにつないでいけばいいのです。コンソールで試してください。</p>

<pre class="brush: js notranslate">person.name.first
person.name.last</pre>

<p><strong>重要</strong>: この時点で下の書き方をしていたところは、以下のように変えなければなりません。</p>

<pre class="brush: js notranslate">name[0]
name[1]</pre>

<p>を、</p>

<pre class="brush: js notranslate">name.first
name.last</pre>

<p>のようにしなければ、メソッドが動かなくなってしまうでしょう。</p>

<h2 id="Bracket_notation" name="Bracket_notation">角括弧による記述</h2>

<p>オブジェクトのプロパティにアクセスするもう一つの手段として角括弧を用いた記法があります。</p>

<pre class="brush: js notranslate">person.age
person.name.first</pre>

<p>このように書く代わりに、</p>

<pre class="brush: js notranslate">person['age']
person['name']['first']</pre>

<p>のように書きます。</p>

<p>これは配列の添え字によく似ています。数字の代わりに、名前を用いて関連付けられたメンバーの値にアクセスするだけで、実はほとんど同じなのです。このようなオブジェクトを<strong>連想配列</strong>といい、配列が数字によって値を格納しているように、文字列によって値を格納しています。</p>

<h2 id="Setting_object_members" name="Setting_object_members">オブジェクトメンバーの設定</h2>

<p>今まではオブジェクトメンバーからの引き出す (<strong>取得する</strong>) 方法だけを見てきましたが、値を設定するメンバーを宣言することで、オブジェクトのメンバーに値を<strong>設定</strong> (更新) することもできます。(ドットを使用した書き方でも、角括弧を使用した書き方でも構いません。)</p>

<pre class="brush: js notranslate">person.age = 45;
person['name']['last'] = 'Cratchit';</pre>

<p>これらの行を入力してみて、実際に値が変わったか調べてみましょう。</p>

<pre class="brush: js notranslate">person.age
person['name']['last']</pre>

<p>メンバーの値を設定するのは存在するプロパティやメソッドの更新だけにはとどまりません。まったく新しいメンバーを追加することもできるのです。JS コンソールで次のものを試してみてください。</p>

<pre class="brush: js notranslate">person['eyes'] = 'hazel';
person.farewell = function() { alert("Bye everybody!"); }</pre>

<p>新しいメンバーが追加されたことを確認してみましょう。</p>

<pre class="brush: js notranslate">person['eyes']
person.farewell()</pre>

<p>角括弧での書き方の良いところは、動的にメンバーの値を設定できるだけでなく、メンバーの名前も追加できるところです。例えば、ユーザーの情報として 2 つのテキストフィールドに名前と値を入力してもらい、人により個別のデータを設定したいとします。そういった値を以下のように取得します。</p>

<pre class="brush: js notranslate">let myDataName = nameInput.value;
let myDataValue = nameValue.value;</pre>

<p>そうして、取得したメンバー名と値を次のように <code>person</code> オブジェクトに設定します。</p>

<pre class="brush: js notranslate">person[myDataName] = myDataValue;</pre>

<p>この動作を確認するため、先ほどのコードの <code>person</code> オブジェクトの中括弧に続いて、次の行をコードに追加してみてください。</p>

<pre class="brush: js notranslate">let myDataName = 'height';
let myDataValue = '1.75m';
person[myDataName] = myDataValue;</pre>

<p>そして、保存して再度読み込んで、次の行をテキストボックスに入力してみてください。</p>

<pre class="brush: js notranslate">person.height</pre>

<p>上記の方法を使用してオブジェクトにプロパティを追加することは、ドット記法ではできません。ドット記法は、名前を指す変数ではなく、書いたとおりのメンバー名のみ受け入れることができます。</p>

<h2 id="What_is_this" name="What_is_this">"this" とは何か</h2>

<p>メソッドの中で、少し見慣れない点に気付いたかもしれません。 次の例でその点について考えてみましょう。</p>

<pre class="brush: js notranslate">greeting: function() {
  alert('Hi! I\'m ' + this.name.first + '.');
}</pre>

<p>"this" とは何だろうと思ったことでしょう。 この <code>this</code> キーワードはコードの中がその中で書かれている、現在のオブジェクトを参照しています。なので、この場合では  <code>person</code> を指します。 なぜ <code>this</code> の代わりに単に <code>person</code> と書かないのでしょうか。 この後 <a href="/ja/docs/Learn/JavaScript/Objects/Object-oriented_JS">初心者のためのオブジェクト指向</a> の記事で見るように、コンストラクター等を書き始めるときに <code>this</code> は非常に便利です。メンバーのコンテキストが変わったとき(例えば 2 つの異なる <code>person</code> オブジェクトのインスタンスは、異なる名前を持っているが、greeting メソッドでそれぞれ自身の名前を使用したいとき)に常に正しい値を保証してくれます。</p>

<p>それでは、簡略化した <code>person</code> オブジェクトを使って、その意味を説明していきましょう。</p>

<pre class="brush: js notranslate">const person1 = {
  name: 'Chris',
  greeting: function() {
    alert('Hi! I\'m ' + this.name + '.');
  }
}

const person2 = {
  name: 'Deepti',
  greeting: function() {
    alert('Hi! I\'m ' + this.name + '.');
  }
}</pre>

<p>この場合、<code>person1.greeting()</code> は "Hi! I'm Chris." を出力します。一方、<code>person2.greeting()</code> は "Hi! I'm Deepti." を出力します。しかし、どちらの場合も、そのメソッド部分のコードは全く同じです。先に述べたように <code>this</code> はそのコードが中にあるオブジェクトと等しいです — これは手作業でオブジェクトリテラルを書くときにはそれ程便利ではありませんが、動的にオブジェクトを生成する(例えばコンストラクターを使う)ときにとても効果的です。これは、この後によりはっきりとするでしょう。</p>

<h2 id="Youve_been_using_objects_all_along" name="Youve_been_using_objects_all_along">ずっとオブジェクトを使ってきた</h2>

<p>これらの例を通して、既に使ってきたドット記述と非常に似ていると考えたかもしれません。なぜならこのコースを通してそのような方法を使用してきたからです。組み込みのブラウザー API や JavaScript オブジェクトを使う例への取り組みを通していつもオブジェクトを使用してきました。なぜならそのような機能は、基本的なカスタム例よりも複雑ではありますが、ここまで見てきたものと全く同種のオブジェクト構造を使うことで構築されているからです。</p>

<p>だから、このように文字列のメソッドを使うとき:</p>

<pre class="brush: js notranslate">myString.split(',');</pre>

<p><code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/String">String</a></code> クラスのインスタンスで利用できるメソッドを使用しています。コードの中で文字列を作成するときにはいつでも、その文字列は自動的に <code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/String">String</a></code> クラスのインスタンスとして生成されます。そしてそのために、いくつかの共通なメソッドやプロパティを使用することができます。</p>

<p>次の行のようにドキュメントオブジェクトモデルにアクセスするときは、</p>

<pre class="brush: js notranslate">const myDiv = document.createElement('div');
const myVideo = document.querySelector('video');</pre>

<p><code><a href="/ja/docs/Web/API/Document">Document</a></code> クラスのインスタンスで使用可能なメソッドを使っています。各ウェブページが読み込まれると、<code>document</code> と呼ばれる <code>Document</code> のインスタンスが作られ、それはウェブページ全体の構造、コンテンツ、その URL 等その他の機能を表現します。もう一度述べますが、これはいくつかの共通なメソッドやプロパティを使用できることを意味します。</p>

<p>今まで使用してきた、<code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Array">Array</a><font face="Open Sans, arial, x-locale-body, sans-serif"><span style="background-color: #ffffff;"> や </span></font></code><code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Math">Math</a></code> 等の、他の多くの組み込みのオブジェクトや API でも全く同じです。</p>

<p>組み込みのオブジェクトと API では常に自動でオブジェクトのインスタンスが生成される訳ではないことを注意する必要があります。例えば、モダンなブラウザーがシステム通知を発行することを許可する <a href="/ja/docs/Web/API/Notifications_API">Notifications API</a> では、発行したい各通知のためにコンストラクターを使用した新しいオブジェクトを生成する必要があります。JavaScript コンソールに次を入力してみてください。</p>

<pre class="brush: js notranslate">const myNotification = new Notification('Hello!');</pre>

<p>コンストラクターは後の記事でもう一度見ることができます。</p>

<div class="note">
<p><strong>注</strong>: オブジェクトのやり取りを<strong>メッセージの受け渡し</strong>と考えると便利です。オブジェクトが他のオブジェクトにある処理の実行を要求したとき、そのオブジェクトはメソッドを通じて他のオブジェクトにメッセージを送信して、そして応答を待ちます。ご存知の通り、応答とは返り値のことです。</p>
</div>

<h2 id="Test_your_skills!" name="Test_your_skills!">スキルをテストしましょう!</h2>

<p>この記事の最後に到達しましたが、最も大事な情報を覚えていますか？次に移動する前に、この情報を保持しているか検証するテストがあります — <a href="/ja/docs/Learn/JavaScript/Objects/Test_your_skills:_Object_basics">Test your skills: Object basics</a> を見てください。</p>

<h2 id="Summary" name="Summary">おさらい</h2>

<p>お疲れ様でした。最初の JS オブジェクトの記事の終わりまで到達しました。JavaScript のオブジェクトがどのように機能するかについて、良い考えを得ることができたのではないでしょうか。記事では、簡単なオリジナルオブジェクトの作成を含んでいました。オブジェクトは関連するデータと機能を保存する構造として非常に便利であることも理解しなければいけません。もし別々の変数と関数として、<code>person</code> オブジェクトのすべてのプロパティとメソッドを記録していくとすると、非効率でありストレスが溜まります。そして同じ名前の他の変数や関数をクラッシュしてしまう危険性も抱えてしまいます。オブジェクトは有害な方法を避けて、パッケージの中で安全に鍵をして情報を守ってくれます。</p>

<p>次の記事ではオブジェクト指向プログラミング (OOP) 理論を見ていきます。そして、JavaScript ではそのような素晴らしい技術を使うことができます。</p>

<p>{{NextMenu("Learn/JavaScript/Objects/Object-oriented_JS", "Learn/JavaScript/Objects")}}</p>

<h2 id="In_this_module" name="In_this_module">このモジュール</h2>

<ul>
 <li><a href="/ja/docs/Learn/JavaScript/Objects/Basics">JavaScript オブジェクトの基本</a></li>
 <li><a href="/ja/docs/Learn/JavaScript/Objects/Object-oriented_JS">初心者のためのオブジェクト指向 JavaScript</a></li>
 <li><a href="/ja/docs/Learn/JavaScript/Objects/Object_prototypes">Object のプロトタイプ</a></li>
 <li><a href="/ja/docs/Learn/JavaScript/Objects/Inheritance">JavaScript での継承</a></li>
 <li><a href="/ja/docs/Learn/JavaScript/Objects/JSON">JSON データの操作</a></li>
 <li><a href="/ja/docs/Learn/JavaScript/Objects/Object_building_practice">オブジェクト作成の練習</a></li>
 <li><a href="/ja/docs/Learn/JavaScript/Objects/Adding_bouncing_balls_features">バウンスボールに機能を追加する</a></li>
</ul>
