---
title: React アプリのコンポーネント化
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components
tags:
  - Beginner
  - Frameworks
  - JavaScript
  - Learn
  - React
  - client-side
  - events
  - interactivity
  - state
---
<div>{{LearnSidebar}}</div>

<div>{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}</div>

<p class="summary">この時点では、アプリは一枚岩です。アプリに何かをさせる前に、管理しやすく、記述しやすいコンポーネントに分解する必要があります。React には、何がコンポーネントで何がコンポーネントでないかという難しいルールはありません。それはあなた次第なのです！この記事では、アプリをコンポーネントに分解するための賢明な方法を紹介します。</p>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">前提条件:</th>
   <td>
    <p><a href="/ja/docs/Learn/HTML">HTML</a>、<a href="/ja/docs/Learn/CSS">CSS</a>、<a href="/ja/docs/Learn/JavaScript">JavaScript</a> のコア言語に精通していること、<a href="/ja/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line">ターミナル/コマンドライン</a>の知識があること。</p>
   </td>
  </tr>
  <tr>
   <th scope="row">目的:</th>
   <td>Todo リストアプリをコンポーネントに分割するための賢明な方法を示すこと。</td>
  </tr>
 </tbody>
</table>

<h2 id="Defining_our_first_component">最初のコンポーネントの定義</h2>

<p>コンポーネントの定義は、ある程度練習をするまでは難しいと思われるかもしれませんが、要点は以下の通りです。</p>

<ul>
 <li>アプリの明らかな "カタマリ"を表している場合、それはおそらくコンポーネントです。</li>
 <li>よく再利用されるのであれば、それはおそらくコンポーネントです。</li>
</ul>

<p>2 番目の箇条書きは特に価値があります: 一般的な UI 要素からコンポーネントを作成することで、コードを一箇所で変更することができ、そのコンポーネントが使用される場所のどこでも変更内容を確認することができます。また、すぐにすべてをコンポーネントに分割する必要もありません。2つ目の箇条書きをヒントに、UI の中で最も再利用され、最も重要な部分である TODO リスト項目からコンポーネントを作成してみましょう。</p>

<h2 id="Make_a_&lt;Todo_&gt;"><code>&lt;Todo /&gt;</code> の作成</h2>

<p>コンポーネントを作る前に、そのための新しいファイルを作らなければなりません。実際は、コンポーネント用の新しいディレクトリーの作成が必要です。次のコマンドは、<code>components</code> ディレクトリーを作成し、その中に <code>Todo.js</code> というファイルを作成します。これらを実行する前に、アプリのルートにいることを確認してください！</p>

<pre class="brush: bash">mkdir src/components
touch src/components/Todo.js</pre>

<p>新しい <code>Todo.js</code> ファイルは今は空です。ファイルを開いて最初の行に次を入力してください。</p>

<pre class="brush: js">import React from "react";</pre>

<p>今回は <code>Todo</code> というコンポーネントを作る予定なので、以下のように <code>Todo.js</code> にもそのためのコードを追加していきます。このコードでは、関数の定義とエクスポートを一行で定義しています。</p>

<pre class="brush: js">export default function Todo() {
  return (

  );
}</pre>

<p>ここまでは問題ありませんが、このコンポーネントは何かを返さなければなりません！<code>src/App.js</code> に戻って、最初の <code><a href="/ja/docs/Web/HTML/Element/li">&lt;li&gt;</a></code> をコピーし、<code>Todo.js</code> に貼り付けて、以下のようになります。</p>

<pre class="brush: js">export default function Todo() {
  return (
    &lt;li className="todo stack-small"&gt;
      &lt;div className="c-cb"&gt;
        &lt;input id="todo-0" type="checkbox" defaultChecked={true} /&gt;
        &lt;label className="todo-label" htmlFor="todo-0"&gt;
          Eat
        &lt;/label&gt;
      &lt;/div&gt;
      &lt;div className="btn-group"&gt;
        &lt;button type="button" className="btn"&gt;
          Edit &lt;span className="visually-hidden"&gt;Eat&lt;/span&gt;
        &lt;/button&gt;
        &lt;button type="button" className="btn btn__danger"&gt;
          Delete &lt;span className="visually-hidden"&gt;Eat&lt;/span&gt;
        &lt;/button&gt;
      &lt;/div&gt;
    &lt;/li&gt;
  );
}</pre>

<div class="notecard note">
<p><strong>注</strong>: コンポーネントは常に何かを返さなければなりません。もし今後あなたが何も返さないコンポーネントをレンダリングしようとしたら、React はブラウザーにエラーを表示するでしょう。</p>
</div>

<p>これで <code>Todo</code> コンポーネントは完成しました。<code>App.js</code> で、ファイルの先頭付近に次の行を追加して <code>Todo</code> をインポートします。</p>

<pre class="brush: js">import Todo from "./components/Todo";</pre>

<p>このコンポーネントをインポートすると、<code>App.js</code> の <code>&lt;li&gt;</code> 要素をすべて <code>&lt;Todo /&gt;</code> コンポーネント呼び出しに置き換えることができます。<code>&lt;ul&gt;</code> は以下のようになるはずです。</p>

<pre class="brush: js">&lt;ul
  role="list"
  className="todo-list stack-large stack-exception"
  aria-labelledby="list-heading"
&gt;
  &lt;Todo /&gt;
  &lt;Todo /&gt;
  &lt;Todo /&gt;
&lt;/ul&gt;</pre>

<p>ブラウザーに戻ってみると、何か不幸なことに気づくでしょう: あなたのリストは、最初のタスクを3回繰り返すようになりました！</p>

<p><img alt="Todo リストアプリの Todo コンポーネントラベルがコンポーネントにハードコードされているため、繰り返し使用されています。" src="todo-list-repeating-todos.png" style="border-style: solid; border-width: 1px;"></p>

<p>私たちがすべきことは、食べることだけではありません。そう、他にもすべきことがあります。— そう、TODO があります。次に、異なるコンポーネント呼び出しで別々のコンテンツをレンダリングする方法を見てみましょう。</p>

<h2 id="Make_a_unique_&lt;Todo_&gt;"><em>「一意の」</em> <code>&lt;Todo /&gt;</code> を作成</h2>

<p>コンポーネントが強力なのは、UI の一部を再利用し、その UI のソースを 1か所で参照できるからです。問題は、通常、各コンポーネントのすべてを再利用するのではなく、ほとんどの部分を再利用しつつ小さな部分を変更したいということです。そこで props の出番です。</p>

<h3 id="Whats_in_a_name"><code>name</code> に何が入るでしょう？</h3>

<p>完了させたいタスクの名前を追跡するために、それぞれの <code>&lt;Todo /&gt;</code> コンポーネントが一意の名前を表示するようにしなければなりません。</p>

<p><code>App.js</code> では、それぞれの <code>&lt;Todo /&gt;</code> に name の prop を与えます。先ほどのタスクの名前を使ってみましょう。</p>

<pre class="brush: js">&lt;Todo name="Eat" /&gt;
&lt;Todo name="Sleep" /&gt;
&lt;Todo name="Repeat" /&gt;</pre>

<p>ブラウザーを更新すると...以前と全く同じものが表示されます。<code>&lt;Todo /&gt;</code> に props を与えましたが、まだ使っていません。<code>Todo.js</code> に戻って解決しましょう。</p>

<p>最初に <code>Todo()</code> 関数の定義を変更して、<code>props</code> をパラメータとして受け取るようにします。<code>props</code> がコンポーネントによって正しく受信されているかどうかを確認したい場合は、先ほどと同様に <code>console.log()</code> で <code>props</code> を取得することができます。</p>

<p>コンポーネントが <code>props</code> を取得していることを確認したら、<code>Eat</code> を <code>name</code> の props で置き換えることができます。覚えておいてください: JSX の式の途中では、中括弧を使って変数の値を注入します。</p>

<p>これらをまとめると、<code>Todo()</code> 関数は次のようになるはずです。</p>

<pre class="brush: js">export default function Todo(props) {
  return (
    &lt;li className="todo stack-small"&gt;
      &lt;div className="c-cb"&gt;
        &lt;input id="todo-0" type="checkbox" defaultChecked={true} /&gt;
        &lt;label className="todo-label" htmlFor="todo-0"&gt;
          {props.name}
        &lt;/label&gt;
      &lt;/div&gt;
      &lt;div className="btn-group"&gt;
        &lt;button type="button" className="btn"&gt;
          Edit &lt;span className="visually-hidden"&gt;{props.name}&lt;/span&gt;
        &lt;/button&gt;
        &lt;button type="button" className="btn btn__danger"&gt;
          Delete &lt;span className="visually-hidden"&gt;{props.name}&lt;/span&gt;
        &lt;/button&gt;
      &lt;/div&gt;
    &lt;/li&gt;
  );
}</pre>

<p><em>これで、</em>ブラウザーには 3 つの一意のタスクが表示されるようになりました。しかし、もう一つの問題が残っています: これらはすべてデフォルトでチェックされています。</p>

<p><img alt="Todo リストアプリには、異なる Todo ラベルが付けられており、それらはコンポーネントに props として渡されます。" src="todo-list-unique-todos.png" style="border-style: solid; border-width: 1px;"></p>

<h3 id="Is_it_completed">それは <code>completed</code> ですか？</h3>

<p>元の静的リストでは、<code>Eat</code> だけがチェックされていました。もう一度言いますが、<code>&lt;Todo /&gt;</code> コンポーネントを構成する UI のほとんどを再利用しつつ、一つだけ変更したいのです。これは別の props が良い仕事をしてくれます！ <code>App.js</code> での各 <code>&lt;Todo /&gt;</code> の呼び出しには、完了したことを示す新しい props を与えます。最初の (<code>Eat</code>) は <code>true</code> の値を持ち、残りは <code>false</code> にします。</p>

<pre class="brush: js">&lt;Todo name="Eat" completed={true} /&gt;
&lt;Todo name="Sleep" completed={false} /&gt;
&lt;Todo name="Repeat" completed={false} /&gt;</pre>

<p>先ほどと同様に、これらの props を実際に使用するためには <code>Todo.js</code> に戻る必要があります。<code>&lt;input /&gt;</code> の <code>defaultChecked</code> 属性の値が <code>completed</code> した props と同じになるように変更します。これで、Todo コンポーネントの <code>&lt;input /&gt;</code> 要素は次のようになります。</p>

<pre class="brush: js">&lt;input id="todo-0" type="checkbox" defaultChecked={props.completed} /&gt;</pre>

<p>そして、ブラウザーを更新すると、<code>Eat</code> だけがチェックされていることが表示されるようになるはずです。</p>

<p><img alt="Todo リストアプリで、チェックの状態が異なるようになった。- あるチェックボックスはチェックされ、他のチェックボックスはチェックされない。" src="todo-list-differing-checked-states.png" style="border-style: solid; border-width: 1px;"></p>

<p>各 <code>&lt;Todo /&gt;</code> コンポーネントの <code>completed</code> props を変更すると、ブラウザーはそれに応じてレンダリングされた同等のチェックボックスをチェックしたり、チェックを外したりします。</p>

<h3 id="Gimme_some_id_please"><code>id</code> をください</h3>

<p>現在、<code>&lt;Todo /&gt;</code> コンポーネントはすべてのタスクに <code>todo-0</code> という <code>id</code> 属性を与えています。これは悪い HTML です、なぜなら <a href="/ja/docs/Web/HTML/Global_attributes/id">id 属性</a> は一意でなければならないからです (CSS や JavaScript などでドキュメントフラグメントの一意な識別子として使用されます)。つまり、各 <code>Todo</code> に対して一意の値を取る  <code>id</code> props をコンポーネントに与えるべきです。</p>

<p>最初と同じパターンに従うために、<code>&lt;Todo /&gt;</code> コンポーネントの各インスタンスに <code>todo-i</code> の形式で ID を与えてみましょう。<code>i</code> は毎回1つずつ大きくなっていきます。</p>

<pre class="brush: js">&lt;Todo name="Eat" completed={true} id="todo-0" /&gt;
&lt;Todo name="Sleep" completed={false} id="todo-1" /&gt;
&lt;Todo name="Repeat" completed={false} id="todo-2" /&gt;</pre>

<p>ここで <code>Todo.js</code> に戻り、<code>id</code> props を使うようにします。これは <code>&lt;input /&gt;</code> 要素の <code>id</code> 属性の値とラベルの <code>htmlFor</code> 属性の値を置き換える必要があります。</p>

<pre class="brush: js">&lt;div className="c-cb"&gt;
  &lt;input id={props.id} type="checkbox" defaultChecked={props.completed} /&gt;
  &lt;label className="todo-label" htmlFor={props.id}&gt;
    {props.name}
  &lt;/label&gt;
&lt;/div&gt;</pre>

<h2 id="So_far_so_good">ここまでは順調ですか？</h2>

<p>今のところ React をうまく使っていますが、もっとうまくできるかもしれません！今のコードは反復的です。<code>&lt;Todo /&gt;</code> コンポーネントをレンダリングする3つの行はほぼ同じですが、1つだけ違う点があります: それぞれの props の値です。</p>

<p>JavaScript のコアな能力の一つであるイテレーション（反復処理）を使えば、コードをクリーンアップすることができます。イテレーションを使うためには、まず自分のタスクを再考する必要があります。</p>

<h2 id="Tasks_as_data">データとしてのタスク</h2>

<p>それぞれのタスクには現在、3つの情報が含まれています: 名前、チェック済みかどうか、そして一意な ID です。このデータはうまくオブジェクトに変換されます。複数のタスクがあるので、このデータを表現するにはオブジェクトの配列が有効です。</p>

<p><code>src/index.js</code> で、 import の後 <code>ReactDOM.render()</code> より前の行で以下の <code>const</code> を作成してください。</p>

<pre class="brush: js">const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false }
];</pre>

<p>次に、<code>tasks</code> という名前の props として <code>&lt;App /&gt;</code> に <code>DATA</code> を渡します。<code>src/index.js</code> の最終行は以下のようになるはずです。</p>

<pre class="brush: js">ReactDOM.render(&lt;App tasks={DATA} /&gt;, document.getElementById("root"));</pre>

<p>この配列は、App コンポーネントで <code>props.tasks</code> として利用できるようになりました。よかったら <code>console.log()</code> で確認してください。</p>

<div class="notecard note">
<p><strong>注</strong>: すべて大文字の (<code>ALL_CAPS</code> のような) 定数名は JavaScript では特別な意味はありません。他の開発者に「このデータはここで定義された後は変更されません」と伝えるための慣習です。 </p>
</div>

<h2 id="Rendering_with_iteration">イテレーションによるレンダリング</h2>

<p>オブジェクトの配列をレンダリングするには、それぞれのオブジェクトを <code>&lt;Todo /&gt;</code> コンポーネントに変換しなければなりません。JavaScript では、データを別のものに変換するための配列メソッド <code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map">Array.prototype.map()</a></code> を提供しています。</p>

<p><code>App()</code> の <code>return</code> 文の上に、<code>taskList</code> という新しい <code>const</code> を作り、<code>map()</code> を使って変換します。まず、 <code>tasks</code> の配列を、各タスクの名前というシンプルなものに変えてみましょう。</p>

<pre class="brush: js">const taskList = props.tasks.map(task =&gt; task.name);</pre>

<p><code>&lt;ul&gt;</code> のすべての子を <code>taskList</code>に置き換えてみましょう。</p>

<pre class="brush: js">&lt;ul
  role="list"
  className="todo-list stack-large stack-exception"
  aria-labelledby="list-heading"
&gt;
  {taskList}
&lt;/ul&gt;</pre>

<p>これで、すべてのコンポーネントを再表示できるようになりましたが、まだやるべきことがあります。現在、ブラウザーは各タスクの名前を構造化されていないテキストとして表示しています。私たちが HTML の構造を見失っているからです。— <code>&lt;li&gt;</code> とチェックボックス、ボタンのことです。</p>

<p><img alt="Todo リストアプリで、Todo アイテムのラベルが1行にまとまって表示されています。" src="todo-list-unstructured-names.png" style="border-style: solid; border-width: 1px;"></p>

<p>この問題を解決するには、<code>map()</code> 関数から <code>&lt;Todo /&gt;</code> コンポーネントを返す必要があります — JSX では、JavaScript とマークアップ構造を混在させることができることを覚えておいてください! 今あるものの代わりに、次のものを試してみましょう。</p>

<pre class="brush: js"> const taskList = props.tasks.map(task =&gt; &lt;Todo /&gt;);</pre>

<p>アプリをもう一度見てみましょう。タスクは以前のように見えますが、タスク自体の名前がありません。私たちがマッピングした各タスクには、<code>id</code>、<code>name</code>、<code>checked</code> のプロパティがあり、<code>&lt;Todo /&gt;</code> コンポーネントに渡したいことを覚えておいてください。これらの知識をまとめると、次のようなコードになります。</p>

<pre class="brush: js">const taskList = props.tasks.map(task =&gt; (
  &lt;Todo id={task.id} name={task.name} completed={task.completed} /&gt;
));</pre>

<p>今では、アプリは以前のように見え、私たちのコードの繰り返しも少なくなりました。</p>

<h2 id="Unique_keys">固有なキー</h2>

<p>React は配列からタスクをレンダリングしているので、それらを適切にレンダリングするために、どれがどれなのかを追跡しなければなりません。どれがどれなのかを把握して、適切にレンダリングする必要があります。React は自分自身で推測で物事を把握しようとしますが、それを助けるために <code>key</code> prop を<code>&lt;Todo /&gt;</code> コンポーネントに渡すことで助けてあげることができます。<code>key</code> は React で管理されている特別なpropです。<code>key</code> という単語を他の目的で使用することはできません。</p>

<p>key は固有であるべきなので、各タスクオブジェクトの <code>id</code> を key として再利用します。<code>taskList</code> は次のように更新します。</p>

<pre class="brush: js">const taskList = props.tasks.map(task =&gt; (
    &lt;Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
   /&gt;
 )
);</pre>

<p><strong>イテレーションでレンダリングするものには、常に固有な key を渡す必要があります。</strong>ブラウザー上では何も明らかな変化はありませんが、もし固有な key を使用していない場合、React はコンソールに警告し、アプリは奇妙な動作をするかもしれません。</p>

<h2 id="Componentizing_the_rest_of_the_app">アプリの残り部分をコンポーネント化 </h2>

<p>最も重要なコンポーネントを整理したので、アプリの残りの部分をコンポーネント化することができます。アプリの残りの部分をコンポーネント化します。ここでコンポーネントは次のいずれかであることを覚えておいてください。コンポーネントが UI の一部か、再利用された UI の一部、またはその両方であることを覚えておいて、さらに2つのコンポーネントを作ります。</p>

<ul>
 <li><code>&lt;Form/&gt;</code></li>
 <li><code>&lt;FilterButton/&gt;</code></li>
</ul>

<p>両方、必要ですのでファイルをターミナルコマンドで一括して行いましょう。ターミナルで次のコマンドを実行してください。アプリのルートディレクトリーにいることに注意してください。</p>

<pre class="brush: bash">touch src/components/Form.js src/components/FilterButton.js</pre>

<h3 id="The_&lt;Form_&gt;">The <code>&lt;Form /&gt;</code></h3>

<p><code>components/Form.js</code> を開いて、以下のようにしてください。</p>

<ul>
 <li>Todo.js で行ったように、ファイルの先頭で React を import します。</li>
 <li><code>Todo()</code> と同じ基本構造を持つ新しい <code>Form()</code> コンポーネントを作成し、そのコンポーネントを export します。</li>
 <li><code>App.js</code> の中から <code>&lt;form&gt;</code> タグとその間のものをコピーして、<code>Form()</code> の <code>return</code> 文の中に貼り付けます。</li>
 <li>最後に <code>Form</code> を export します。</li>
</ul>

<p>あなたの <code>Form.js</code> ファイルは次のようになります。</p>

<pre class="brush: js">import React from "react";

function Form(props) {
  return (
    &lt;form&gt;
      &lt;h2 className="label-wrapper"&gt;
        &lt;label htmlFor="new-todo-input" className="label__lg"&gt;
          What needs to be done?
        &lt;/label&gt;
      &lt;/h2&gt;
      &lt;input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
      /&gt;
      &lt;button type="submit" className="btn btn__primary btn__lg"&gt;
        Add
      &lt;/button&gt;
    &lt;/form&gt;
  );
}

export default Form;</pre>

<h3 id="The_&lt;FilterButton_&gt;">The &lt;FilterButton /&gt;</h3>

<p><code>FilterButton.js</code> を <code>Form.js</code> のようにします。でもコンポーネントの <code>FilterButton()</code> を呼び出し、<div>要素内の最初のボタンの HTML をコピーして <code>App.js</code> の <code>filters</code> の <code>class</code> を <code>return</code> 文に入れます。</p>

<p>ファイルの内容は以下のようになります。</p>

<pre class="brush: js">import React from "react";

function FilterButton(props) {
  return (
    &lt;button type="button" className="btn toggle-btn" aria-pressed="true"&gt;
    &lt;span className="visually-hidden"&gt;Show &lt;/span&gt;
    &lt;span&gt;all &lt;/span&gt;
    &lt;span className="visually-hidden"&gt; tasks&lt;/span&gt;
    &lt;/button&gt;
  );
}
  
export default FilterButton;</pre>

<div class="notecard note">
<p><strong>注</strong>: ここでは、最初に <code>&lt;Todo /&gt;</code> コンポーネントで行ったのと同じ間違いをしていることに気づくかもしれません。つまり、それぞれのボタンは同じものになるということです。これでいいのです。このコンポーネントの修正は、後ほどで行います。(<a href="/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering#back_to_the_filter_buttons">Back to the filter buttons</a>)</p>
</div>

<h2 id="Importing_all_our_components">すべてのコンポーネントの Import</h2>

<p>新しいコンポーネントを使ってみましょう。</p>

<p>さらにいくつかの <code>import</code> 文を <code>App.js</code> の上に追加して、import します。</p>

<p>次に、<code>App()</code> の <code>return</code> 文を更新して、私たちのコンポーネントをレンダリングするようにします。コンポーネントのレンダリングを行うと、<code>App.js</code> は次のようになります。</p>

<pre class="brush: js">import React from "react";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";

function App(props) {
  const taskList = props.tasks.map(task =&gt; (
    &lt;Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
      /&gt;
    )
  );
  return (
    &lt;div className="todoapp stack-large"&gt;
      &lt;Form /&gt;
      &lt;div className="filters btn-group stack-exception"&gt;
        &lt;FilterButton /&gt;
        &lt;FilterButton /&gt;
        &lt;FilterButton /&gt;
      &lt;/div&gt;
      &lt;h2 id="list-heading"&gt;3 tasks remaining&lt;/h2&gt;
      &lt;ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      &gt;
        {taskList}
      &lt;/ul&gt;
    &lt;/div&gt;
  );
}

export default App;</pre>

<p>これで、React アプリでインタラクティブな処理を行う準備が<em>ほぼ</em>整いました。</p>

<h2 id="Summary">まとめ</h2>

<p>この記事では、アプリをコンポーネントにうまく分割し、それらを効率的にレンダリングする方法について、詳しく説明しました。今回は、アプリをコンポーネントにうまく分割し、それらを効率的にレンダリングする方法について詳しく説明しました。さて、次は React でイベントを処理する方法を見て、いくつかのインタラクティブ機能を追加していきます。</p>

<p>{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}</p>

<h2 id="In_this_module">In this module</h2>

<ul>
 <li><a href="/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction">Introduction to client-side frameworks</a></li>
 <li><a href="/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features">Framework main features</a></li>
 <li>React
  <ul>
   <li><a href="/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started">Getting started with React</a></li>
   <li><a href="/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning">Beginning our React todo list</a></li>
   <li><a href="/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components">Componentizing our React app</a></li>
   <li><a href="/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state">React interactivity: Events and state</a></li>
   <li><a href="/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering">React interactivity: Editing, filtering, conditional rendering</a></li>
   <li><a href="/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility">Accessibility in React</a></li>
   <li><a href="/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources">React resources</a></li>
  </ul>
 </li>
 <li>Ember
  <ul>
   <li><a href="/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started">Getting started with Ember</a></li>
   <li><a href="/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_structure_componentization">Ember app structure and componentization</a></li>
   <li><a href="/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_interactivity_events_state">Ember interactivity: Events, classes and state</a></li>
   <li><a href="/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_conditional_footer">Ember Interactivity: Footer functionality, conditional rendering</a></li>
   <li><a href="/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_routing">Routing in Ember</a></li>
   <li><a href="/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_resources">Ember resources and troubleshooting</a></li>
  </ul>
 </li>
 <li>Vue
  <ul>
   <li><a href="/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started">Getting started with Vue</a></li>
   <li><a href="/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component">Creating our first Vue component</a></li>
   <li><a href="/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists">Rendering a list of Vue components</a></li>
   <li><a href="/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_methods_events_models">Adding a new todo form: Vue events, methods, and models</a></li>
   <li><a href="/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_styling">Styling Vue components with CSS</a></li>
   <li><a href="/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_computed_properties">Using Vue computed properties</a></li>
   <li><a href="/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering">Vue conditional rendering: editing existing todos</a></li>
   <li><a href="/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_refs_focus_management">Focus management with Vue refs</a></li>
   <li><a href="/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources">Vue resources</a></li>
  </ul>
 </li>
 <li>Svelte
  <ul>
   <li><a href="/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started">Getting started with Svelte</a></li>
   <li><a href="/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_Todo_list_beginning">Starting our Svelte Todo list app</a></li>
   <li><a href="/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_variables_props">Dynamic behavior in Svelte: working with variables and props</a></li>
   <li><a href="/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_components">Componentizing our Svelte app</a></li>
   <li><a href="/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_reactivity_lifecycle_accessibility">Advanced Svelte: Reactivity, lifecycle, accessibility</a></li>
   <li><a href="/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_stores">Working with Svelte stores</a></li>
   <li><a href="/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript">TypeScript support in Svelte</a></li>
   <li><a href="/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_deployment_next">Deployment and next steps</a></li>
  </ul>
 </li>
</ul>