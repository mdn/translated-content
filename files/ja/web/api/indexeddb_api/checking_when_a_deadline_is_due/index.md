---
title: 期限の確認
slug: Web/API/IndexedDB_API/Checking_when_a_deadline_is_due
l10n:
  sourceCommit: d42b609444efb915ab46117f59985d67dda21eb6
---

{{DefaultAPISidebar("IndexedDB")}}

この記事では、 IndexedDB で保存された期限と現在の日時を照合する複雑な例を見てみましょう。ここでの主な課題は、保存されている期限情報 (月、時、日など) を、[Date](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date) オブジェクトから取得した現在の日時と照合することです。

![サンプルアプリのスクリーンショット。赤いメインタイトルの「To do app」、テスト用の To Do 項目、ユーザーが新しいタスクを入力するための赤いフォーム。](to-do-app.png)

この記事で紹介するアプリケーションの例は、 **To-do リスト通知**です。これは、タスクのタイトルと期限を [IndexedDB](/ja/docs/Web/API/IndexedDB_API) に格納し、期限になったときに [Notification](/ja/docs/Web/API/Notification) および [Vibration](/ja/docs/Web/API/Vibration_API) API を使ってユーザーに通知を行う、シンプルな To-do リストアプリケーションです。 [To-do リスト通知アプリは GitHub ダウンロード](https://github.com/mdn/dom-examples/tree/main/to-do-notifications)してソースコードをいじったり、[アプリの動作をライブで閲覧](https://mdn.github.io/dom-examples/to-do-notifications/)したりすることができます。

## 基本的な問題点

この ToDo アプリでは、まず時間と日付の情報を、機械が読め、表示されたときに人間が理解できる形式で記録し、次にそれぞれの時間と日付が現在の時点で発生しているかどうかをチェックしたいと考えました。基本的には、現在の時刻と日付を確認し、保存されている各イベントの締め切りが現在の時刻と日付に一致するかどうかを確認します。もし一致していれば、ユーザーに何らかの通知をしたいと考えています。

2 つの {{jsxref("Global_Objects/Date", "Date")}} オブジェクトを比較するだけなら簡単ですが、もちろん人間は JavaScript が理解できるような形式で期限を入力したいわけではありません。人間が読むことのできる日付はかなり違っていて、いくつもの異なる表現があります。

### 日付情報の記録

モバイル端末での合理的な使い勝手を提供するために、そして曖昧さを減らすために、 HTML フォームを作成することにしました。

![この ToDo アプリのフォームで、タスクのタイトルを入力するフィールドと、期限の年、月、日、時、分の値が入っています。](to-do-app-form2.png)

- ToDo リストのタイトルを入力するためのテキスト入力です。これはユーザーの入力作業の中で最も避けられないものです。
- 期限の「時」と「分」を入力するための数値入力。 `type="number"` に対応しているブラウザーでは、小さな上下矢印の数字ピッカーが表示されます。モバイルプラットフォームでは、データを入力するためのテンキーが用意されていることが多く、これは便利です。他のプラットフォームでは、標準的なテキスト入力になりますが、これは問題ありません。
- 期限の日、月、年を入力するための {{HTMLElement("select")}} 要素。これらの値は、ユーザーにとって最も曖昧な入力となるため (7, sunday, sun? 04, 4, April, Apr? 2013, '13, 13?) 日は数値で、月は月名で、年は 4 桁の年号で記録されます。

フォームの送信ボタンが押されると、 `addData()` 関数が実行され、次のように始まります。

```js
function addData(e) {
  e.preventDefault();

  if (!title.value || !hours.value || !minutes.value || !day.value || !month.value || !year.value) {
    note.innerHTML += '<li>Data not submitted — form incomplete.</li>';
    return;
  }
```

この部分では、フォームのフィールドにすべての情報が入力されているかどうかを確認します。記入されていない場合は、開発者通知ペイン (アプリの UI の左下を参照) にメッセージを表示して、何が起こっているのかをユーザーに伝え、機能を終了します。このステップは、主に HTML フォームの検証に対応していないブラウザーのためのものです (検証に対応しているブラウザーでは、 HTML で required 属性を使用して検証を強制しています)。

```js
   else {
    const newItem = [
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
    const transaction = db.transaction(["toDoList"], "readwrite");

    // report on the success of opening the transaction
    transaction.oncomplete = (event) => {
      note.innerHTML += '<li>Transaction opened for task addition.</li>';
    };

    transaction.onerror = (event) => {
      note.innerHTML += '<li>Transaction not opened due to error. Duplicate items not allowed.</li>';
    };

    // create an object store on the transaction
    const objectStore = transaction.objectStore("toDoList");

    // add our newItem object to the object store
    const request = objectStore.add(newItem[0]);
```

この部分では、データベースへの挿入に必要な形式でデータを保存する `newItem` というオブジェクトを作成します。次の数行では、データベーストランザクションを開き、これが成功したか失敗したかをユーザーに通知するメッセージを提供しています。そして、新しい項目が追加される `objectStore` が生成されます。データオブジェクトの `notified` プロパティは、 To-do リストの項目の期限がまだ来ておらず、通知されていないことを示しています。これについては後ほど説明します。

> [!NOTE]
> 変数 `db` には IndexedDB のデータベースインスタンスへの参照が格納されています。この変数の様々なプロパティを使用してデータを操作することができます。

```js
    request.onsuccess = (event) => {

      note.innerHTML += '<li>New item added to database.</li>';

      title.value = '';
      hours.value = null;
      minutes.value = null;
      day.value = '01';
      month.value = 'January';
      year.value = 2020;
    };
  }
```

次の部分では、新しい項目の追加が成功したことを示すログメッセージを作成し、次のタスクが入力できるようにフォームをリセットします。

```js
  // update the display of data to show the newly added item, by running displayData() again.
  displayData();
};
```

最後に `displayData()` 関数を実行して、アプリ内のデータの表示を更新し、先ほど入力された新しいタスクを表示します。

### 期限に達したかどうかの確認

この時点でデータはデータベースに入っていますが、今度は期限に達しているかどうかをチェックしたいと思います。これを行うのが `checkDeadlines()` 関数です。

```js
function checkDeadlines() {
  const now = new Date();
```

まず、空の `Date` オブジェクトを作成して、現在の日付と時刻を取得します。簡単でしょう？ここからは少し複雑な話になります。

```js
const minuteCheck = now.getMinutes();
const hourCheck = now.getHours();
const dayCheck = now.getDate();
const monthCheck = now.getMonth();
const yearCheck = now.getFullYear();
```

`Date` オブジェクトには、内部の日付や時刻のさまざまな部分を抽出するためのメソッドがいくつかあります。ここでは、現在の分 (簡単な数値として取得)、時 (簡単な数値として取得)、日 (これは `getDate()` が必要、 `getDay()` は曜日を 1-7 で返すため)、月 (0-11 の数値を返す。下記参照)、年 (`getFullYear()` が必要、`getYear()` は非推奨であり、誰にとってもあまり役に立たない奇妙な値を返します) を読み取ります。

```js
  const objectStore = db.transaction(['toDoList'], "readwrite").objectStore('toDoList');

  objectStore.openCursor().onsuccess = (event) => {
    const cursor = event.target.result;
    let monthNumber;

    if (cursor) {
```

次にもう一つ、 IndexedDB の `objectStore` を生成し、 `openCursor()` メソッドを使用してカーソルを開きます。これは基本的に IndexedDB がストア内のすべての項目を反復処理する方法です。そして、カーソル内に有効な項目が残っている限り、カーソル内のすべての項目をループします。

```js
switch (cursor.value.month) {
  case "January":
    monthNumber = 0;
    break;
  case "February":
    monthNumber = 1;
    break;

  // other lines removed from listing for brevity

  case "December":
    monthNumber = 11;
    break;
  default:
    alert("Incorrect month entered in database.");
}
```

まず最初に行うことは、データベースに保存されている月名を、 JavaScript が理解できる月の数値に変換することです。前に見たように、 JavaScript の Date オブジェクトは月の値を 0 から 11 までの数値として生成します。

```js
if (
  Number(cursor.value.hours) === hourCheck &&
  Number(cursor.value.minutes) === minuteCheck &&
  Number(cursor.value.day) === dayCheck &&
  monthNumber === monthCheck &&
  cursor.value.year === yearCheck &&
  notified === "no"
) {
  // If the numbers all do match, run the createNotification()
  // function to create a system notification
  createNotification(cursor.value.taskTitle);
}
```

IndexedDB に格納された値と照合したい現在の時刻と日付の部分がすべて組み立てられたので、いよいよチェックを実行します。ユーザーに期限切れを知らせる何らかの通知を行う前に、すべての値が一致している必要があります。

ここでの `+` 演算子は、先頭にゼロが付いている数字を、先頭にゼロが付いていない同等の数字に変換します (例えば 09 -> 9)。これが必要なのは、 JavaScript の Date の数値には先頭にゼロがないが、データにはあるかもしれないからです。

`notified === "no"` のチェックは、 1 つの To-Do アイテムに対して 1 つの通知しか受け取れないようにするためのものです。各項目のオブジェクトに対して通知が発生すると、その `notification` プロパティが `"yes"` に設定されるので、次の繰り返しではこのチェックが通らないようにするために、 `createNotification()` 関数の中に次のようなコードを入れています (詳しくは [IndexedDB の使用](/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB)を読んでください)。

```js
    // now we need to update the value of notified to "yes" in this particular data object, so the
    // notification won't be set off on it again

    // first open up a transaction as usual
    const objectStore = db.transaction(['toDoList'], "readwrite").objectStore('toDoList');

    // get the to-do list object that has this title as it's title
    const request = objectStore.get(title);

    request.onsuccess = () => {
      // grab the data object returned as the result
      const data = request.result;

      // update the notified value in the object to "yes"
      data.notified = "yes";

      // create another request that inserts the item back into the database
      const requestUpdate = objectStore.put(data);

      // when this new request succeeds, run the displayData() function again to update the display
      requestUpdate.onsuccess = () => {
        displayData();
      }
```

すべてのチェックが一致した場合は、 `createNotification()` 関数を実行して、ユーザーに通知を行います。

```js
      cursor.continue();
    }
  }
}
```

この関数の最後の行では、カーソルが上に移動し、 IndexedDB に格納されている次のタスクに対して、上記の期限チェックの仕組みが実行されます。

### チェックし続ける

もちろん、上記の期限チェック機能を一度実行するだけでは意味がありません。すべての締切に達していないかどうかを常にチェックし続けたいのです。そのために、 `setInterval()` を使って 1 秒に 1 回 `checkDeadlines()` を実行します。

```js
setInterval(checkDeadlines, 1000);
```
