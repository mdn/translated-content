---
title: 期限の確認
slug: Web/API/IndexedDB_API/Checking_when_a_deadline_is_due
tags:
  - Apps
  - Date
  - Example
  - Guide
  - IndexedDB
  - deadline
translation_of: Web/API/IndexedDB_API/Checking_when_a_deadline_is_due
---
<div>{{DefaultAPISidebar("IndexedDB")}}</div><div class="summary">
<p>この記事では、 IndexedDB で保存された期限と現在の日時を照合する複雑な例を見てみましょう。ここでの主な課題は、保存されている期限情報 (月、時、日など) を、<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Date">Date</a> オブジェクトから取得した現在の日時と照合することです。</p>
</div>

<img alt="サンプルアプリのスクリーンショット。赤いメインタイトルの「To do app」、テスト用の To Do 項目、ユーザーが新しいタスクを入力するための赤いフォーム。" src="to-do-app.png">

<p>この記事で紹介するアプリケーションの例は、 <strong>To-do リスト通知</strong>です。これは、タスクのタイトルと期限を <a href="/ja/docs/Web/API/IndexedDB_API">IndexedDB</a> に格納し、期限になったときに <a href="/ja/docs/Web/API/Notification">Notification</a> および <a href="/ja/docs/Web/API/Vibration_API">Vibration</a> API を使ってユーザーに通知を行う、シンプルな To-do リストアプリケーションです。 <a href="https://github.com/chrisdavidmills/to-do-notifications/tree/gh-pages">To-do リスト通知アプリは GitHub ダウンロード</a>してソースコードをいじったり、<a href="https://mdn.github.io/to-do-notifications/">アプリの動作をライブで閲覧</a>したりすることができます。</p>

<h2 id="The_basic_problem">基本的な問題点</h2>

<p>この ToDo アプリでは、まず時間と日付の情報を、機械が読め、表示されたときに人間が理解できる形式で記録し、次にそれぞれの時間と日付が現在の時点で発生しているかどうかをチェックしたいと考えました。基本的には、現在の時刻と日付を確認し、保存されている各イベントの締め切りが現在の時刻と日付に一致するかどうかを確認します。もし一致していれば、ユーザーに何らかの通知をしたいと考えています。</p>

<p>2 つの {{jsxref("Global_Objects/Date", "Date")}} オブジェクトを比較するだけなら簡単ですが、もちろん人間は JavaScript が理解できるような形式で期限を入力したいわけではありません。人間が読むことのできる日付はかなり違っていて、いくつもの異なる表現があります。</p>

<h3 id="Recording_the_date_information">日付情報の記録</h3>

<p>モバイル端末での合理的な使い勝手を提供するために、そして曖昧さを減らすために、 HTML フォームを作成することにしました。</p>

<img alt="この ToDo アプリのフォームで、タスクのタイトルを入力するフィールドと、期限の年、月、日、時、分の値が入っています。" src="to-do-app-form2.png">

<ul>
 <li>ToDo リストのタイトルを入力するためのテキスト入力です。これはユーザーの入力作業の中で最も避けられないものです。</li>
 <li>期限の「時」と「分」を入力するための数値入力。 <code>type="number"</code> に対応しているブラウザーでは、小さな上下矢印の数字ピッカーが表示されます。モバイルプラットフォームでは、データを入力するためのテンキーが用意されていることが多く、これは便利です。他のプラットフォームでは、標準的なテキスト入力になりますが、これは問題ありません。</li>
 <li>期限の日、月、年を入力するための {{HTMLElement("select")}} 要素。これらの値は、ユーザーにとって最も曖昧な入力となるため (7, sunday, sun? 04, 4, April, Apr? 2013, '13, 13?) 日は数値で、月は月名で、年は 4 桁の年号で記録されます。</li>
</ul>

<p>フォームの送信ボタンが押されると、 <code>addData()</code> 関数が実行され、次のように始まります。</p>

<pre class="brush: js">function addData(e) {
  e.preventDefault();

  if(title.value == '' || hours.value == null || minutes.value == null || day.value == '' || month.value == '' || year.value == null) {
    note.innerHTML += '&lt;li&gt;Data not submitted — form incomplete.&lt;/li&gt;';
    return;
  }
</pre>

<p>この部分では、フォームのフィールドにすべての情報が入力されているかどうかを確認します。記入されていない場合は、開発者通知ペイン (アプリの UI の左下を参照) にメッセージを表示して、何が起こっているのかをユーザーに伝え、機能を終了します。このステップは、主に HTML フォームの検証に対応していないブラウザーのためのものです (検証に対応しているブラウザーでは、 HTML で required 属性を使用して検証を強制しています)。</p>

<pre class="brush: js">   else {
    var newItem = [
      {
        taskTitle: title.value,
        hours    : hours.value,
        minutes  : minutes.value,
        day      : day.value,
        month    : month.value,
        year     : year.value,
        notified : "no"
      }
    ];

    // open a read/write db transaction, ready for adding the data
    var transaction = db.transaction(["toDoList"], "readwrite");

    // report on the success of opening the transaction
    transaction.oncomplete = function(event) {
      note.innerHTML += '&lt;li&gt;Transaction opened for task addition.&lt;/li&gt;';
    };

    transaction.onerror = function(event) {
      note.innerHTML += '&lt;li&gt;Transaction not opened due to error. Duplicate items not allowed.&lt;/li&gt;';
    };

    // create an object store on the transaction
    var objectStore = transaction.objectStore("toDoList");

    // add our newItem object to the object store
    var request = objectStore.add(newItem[0]); </pre>

<p>この部分では、データベースへの挿入に必要な形式でデータを保存する <code>newItem</code> というオブジェクトを作成します。次の数行では、データベーストランザクションを開き、これが成功したか失敗したかをユーザーに通知するメッセージを提供しています。そして、新しい項目が追加される <code>objectStore</code> が生成されます。データオブジェクトの <code>notified</code> プロパティは、 To-do リストの項目の期限がまだ来ておらず、通知されていないことを示しています。これについては後ほど説明します。</p>

<div class="note">
<p><strong>メモ:</strong> 変数 <code>db</code> には IndexedDB のデータベースインスタンスへの参照が格納されています。この変数の様々なプロパティを使用してデータを操作することができます。</p>
</div>

<pre class="brush: js">
    request.onsuccess = function(event) {

      note.innerHTML += '&lt;li&gt;New item added to database.&lt;/li&gt;';

      title.value = '';
      hours.value = null;
      minutes.value = null;
      day.value = 01;
      month.value = 'January';
      year.value = 2020;
    };
  }</pre>

<p>次の部分では、新しい項目の追加が成功したことを示すログメッセージを作成し、次のタスクが入力できるようにフォームをリセットします。</p>

<pre class="brush: js">
  // update the display of data to show the newly added item, by running displayData() again.
  displayData();
};</pre>

<p>最後に <code>displayData()</code> 関数を実行して、アプリ内のデータの表示を更新し、先ほど入力された新しいタスクを表示します。</p>

<h3 id="Checking_whether_a_deadline_has_been_reached">期限に達したかどうかの確認</h3>

<p>この時点でデータはデータベースに入っていますが、今度は期限に達しているかどうかをチェックしたいと思います。これを行うのが <code>checkDeadlines()</code> 関数です。</p>

<pre class="brush: js">function checkDeadlines() {
  var now = new Date();</pre>

<p>まず、空の <code>Date</code> オブジェクトを作成して、現在の日付と時刻を取得します。簡単でしょう？ここからは少し複雑な話になります。</p>

<pre class="brush: js">  var minuteCheck  = now.getMinutes();
  var hourCheck    = now.getHours();
  var dayCheck     = now.getDate();
  var monthCheck   = now.getMonth();
  var yearCheck    = now.getFullYear();
</pre>

<p><code>Date</code> オブジェクトには、内部の日付や時刻のさまざまな部分を抽出するためのメソッドがいくつかあります。ここでは、現在の分 (簡単な数値として取得)、時 (簡単な数値として取得)、日 (これは <code>getDate()</code> が必要、 <code>getDay()</code> は曜日を 1-7 で返すため)、月 (0-11 の数値を返す。下記参照)、年 (<code>getFullYear()</code> が必要、<code>getYear()</code> は非推奨であり、誰にとってもあまり役に立たない奇妙な値を返します) を読み取ります。</p>

<pre class="brush: js">   var objectStore = db.transaction(['toDoList'], "readwrite").objectStore('toDoList');

  objectStore.openCursor().onsuccess = function(event) {
    var cursor = event.target.result;

    if(cursor) {</pre>

<p>次にもう一つ、 IndexedDB の <code>objectStore</code> を生成し、 <code>openCursor()</code> メソッドを使用してカーソルを開きます。これは基本的に IndexedDB がストア内のすべての項目を反復処理する方法です。そして、カーソル内に有効な項目が残っている限り、カーソル内のすべての項目をループします。</p>

<pre class="brush: js">      switch(cursor.value.month) {
        case "January":
          var monthNumber = 0;
          break;
        case "February":
          var monthNumber = 1;
          break;

        // other lines removed from listing for brevity

        case "December":
          var monthNumber = 11;
          break;
        default:
          alert('Incorrect month entered in database.');
      }</pre>

<p>まず最初に行うことは、データベースに保存されている月名を、 JavaScript が理解できる月の数値に変換することです。前に見たように、 JavaScript の Date オブジェクトは月の値を 0 から 11 までの数値として生成します。</p>

<pre class="brush: js">      if(+(cursor.value.hours) == hourCheck &amp;&amp;
         +(cursor.value.minutes) == minuteCheck &amp;&amp;
         +(cursor.value.day) == dayCheck &amp;&amp;
         monthNumber == monthCheck &amp;&amp;
         cursor.value.year == yearCheck &amp;&amp;
         notified == "no") {

        // If the numbers all do match, run the createNotification()
        // function to create a system notification
        createNotification(cursor.value.taskTitle);
      }</pre>

<p>IndexedDB に格納された値と照合したい現在の時刻と日付の部分がすべて組み立てられたので、いよいよチェックを実行します。ユーザーに期限切れを知らせる何らかの通知を行う前に、すべての値が一致している必要があります。</p>

<p>ここでの <code>+</code> 演算子は、先頭にゼロが付いている数字を、先頭にゼロが付いていない同等の数字に変換します (例えば 09 -&gt; 9)。これが必要なのは、 JavaScript の Date の数値には先頭にゼロがないが、データにはあるかもしれないからです。</p>

<p><code>notified == "no"</code> のチェックは、 1 つの To-Do アイテムに対して 1 つの通知しか受け取れないようにするためのものです。各項目のオブジェクトに対して通知が発生すると、その <code>notification</code> プロパティが <code>"yes"</code> に設定されるので、次の繰り返しではこのチェックが通らないようにするために、 <code>createNotification()</code> 関数の中に次のようなコードを入れています (詳しくは <a href="/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB">IndexedDB の使用</a>を読んでください)。</p>

<pre class="brush: js">    // now we need to update the value of notified to "yes" in this particular data object, so the
    // notification won't be set off on it again

    // first open up a transaction as usual
    var objectStore = db.transaction(['toDoList'], "readwrite").objectStore('toDoList');

    // get the to-do list object that has this title as it's title
    var request = objectStore.get(title);

    request.onsuccess = function() {
      // grab the data object returned as the result
      var data = request.result;

      // update the notified value in the object to "yes"
      data.notified = "yes";

      // create another request that inserts the item back into the database
      var requestUpdate = objectStore.put(data);

      // when this new request succeeds, run the displayData() function again to update the display
      requestUpdate.onsuccess = function() {
        displayData();
      }</pre>

<p>すべてのチェックが一致した場合は、 <code>createNotification()</code> 関数を実行して、ユーザーに通知を行います。</p>

<pre class="brush: js">       cursor.continue();
    }
  }
}</pre>

<p>この関数の最後の行では、カーソルが上に移動し、 IndexedDB に格納されている次のタスクに対して、上記の期限チェックの仕組みが実行されます。</p>

<h3 id="Keep_on_checking!">チェックし続ける</h3>

<p>もちろん、上記の期限チェック機能を一度実行するだけでは意味がありません。すべての締切に達していないかどうかを常にチェックし続けたいのです。そのために、 <code>setInterval()</code> を使って 1 秒に 1 回 <code>checkDeadlines()</code> を実行します。</p>

<pre class="brush: js">setInterval(checkDeadlines, 1000);</pre>
