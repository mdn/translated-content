---
title: IndexedDB の使用
slug: Web/API/IndexedDB_API/Using_IndexedDB
l10n:
  sourceCommit: 886f2641ae90a70858c5e7d0d20959c70ee44d9d
---

{{DefaultAPISidebar("IndexedDB")}}

IndexedDB は、ユーザーのブラウザー内にデータを永続的に保存する手段です。ネットワークの状態にかかわらず高度な問い合わせ機能を持つウェブアプリケーションを作成できますので、アプリケーションがオンラインとオフラインの両方で動作するようになります。

## この記事について

このチュートリアルでは、IndexedDB の非同期 API の使い方を見ていきます。IndexedDB について詳しくない場合は、始めに [IndexedDB の主な特徴と基本用語](/ja/docs/Web/API/IndexedDB_API/Basic_Terminology)をお読みください。

IndexedDB API のリファレンスドキュメントとして、[IndexedDB API](/ja/docs/Web/API/IndexedDB_API) の記事とそのサブ記事をご覧ください。この記事では、IndexedDB で使用されるオブジェクトの種類と、非同期 API のメソッドについて説明します (同期 API は仕様から削除されました)。

## 基本パターン

IndexedDB で推奨される基本パターンは、以下のようになります。

1. データベースを開きます。
2. データベース内に、オブジェクトストアを作成します。
3. データの追加や取り出しといった、データベース操作のトランザクションを開始して、リクエストを行います。
4. 適切な DOM イベントを受け取ることにより、操作が完了するのを待ちます。
5. 結果 (リクエストオブジェクトにある) に応じた処理を行います。

これらの主要な概念を踏まえることで、より具体的な手続きを理解できます。

## ストアを作成および構築する

### データベースを開く

プロセス全体は以下のようにして始めます。

```js
// データベースを開く
const request = window.indexedDB.open("MyTestDatabase", 3);
```

わかりますか? データベースを開くことも他の操作と同様であり、「リクエスト」が必要です。

データベースを開くリクエストは、すぐにはデータベースを開いたりトランザクションを開始したりはしません。`open()` 関数を呼び出すと、結果 (成功) またはイベントとして扱うエラー値を伴う [`IDBOpenDBRequest`](/ja/docs/Web/API/IDBOpenDBRequest) オブジェクトを返します。IndexedDB のほとんどの他の非同期関数も同様であり、結果またはエラーを伴う [`IDBRequest`](/ja/docs/Web/API/IDBRequest) オブジェクトを返します。open 関数の結果は `IDBDatabase` のインスタンスです。

open メソッドの第 2 引数は、データベースのバージョンです。データベースのバージョンは、データベースのスキーマ、すなわちデータベース内のオブジェクトストアとその構造を決定します。データベースが存在しない場合に `open` 操作でデータベースが作成されると、`onupgradeneeded` イベントが発生し、そのイベントハンドラーでデータベースのスキーマを作成することができます。データベースが存在する場合に従来より高いバージョン番号を指定すると、すぐに `onupgradeneeded` イベントが発生して、そのイベントハンドラーで更新されたスキーマを提供することができます。詳しくは、後ほど[データベースのバージョンの作成と更新](#データベースのバージョンの作成と更新)で説明します。また、 {{ domxref("IDBFactory.open") }} のリファレンスページもご覧ください。

> [!WARNING]
> バージョン番号は `unsigned long long` 型の数値であり、とても大きい整数にすることができます。また浮動小数点数値は使用できず、使用した場合は `upgradeneeded` イベントが発生せず、もっとも近い小さな数値に変換されてトランザクションが始まるでしょう。よって、例えばバージョン番号として 2.4 を使用しないでください。
> `const request = indexedDB.open("MyTestDatabase", 2.4); // 行ってはいけません。バージョンは 2 に丸められます`

#### ハンドラーの生成

ほぼすべてのリクエスト生成に合わせて始めに行いたいことは、成功およびエラーのハンドラーを生成することでしょう。

```js
request.onerror = (event) => {
  // request.error に対して行うこと!
};
request.onsuccess = (event) => {
  // request.result に対して行うこと!
};
```

リクエストが成功した場合、{{domxref("IDBRequest.success_event", "success")}} イベントが発生し、`onsuccess` に代入された関数が呼び出されます。リクエストが失敗した場合、{{domxref("IDBRequest.error_event", "error")}} イベントが発生し、`onerror` に代入された関数が呼び出されます。

IndexedDB API は必要なエラー処理を最小限にするよう設計されていますので、多くのエラーイベントを見ることはないでしょう (少なくとも、API に慣れていなければ)。しかしデータベースを開く場合は、エラーイベントが発生する一般的な状況があります。もっとも多いであろう問題は、データベースを作成する許可をユーザーがウェブアプリに与えなかったことです。IndexedDB の主要な設計目標のひとつが、オフラインで使用するために大量のデータを保存できるようにすることです。(各ブラウザーでどれだけの量のストレージを持てるかについては、[ブラウザーのストレージ制限と削除基準ページ内のどれだけのデータが格納できるか](/ja/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria#どれだけのデータが格納できるか)をご覧ください)

広告ネットワークやコンピューターを汚染させる悪意のあるウェブサイトをブラウザーが許可したくないことは明らかですので、ブラウザーは ウェブアプリが初めてストレージ用に IndexedDB を開こうとしたときに、ユーザーへプロンプトを表示します。ユーザーはアクセスを許可または拒否できます。またブラウザーのプライバシーモードでの IndexedDB ストレージは、匿名のセッションを閉じるまでの間だけメモリー上に存在します。

ユーザーがデータベース作成の要求を許可して、成功コールバックを実行する成功イベントを受け取ったと想定します。次は何を行うのでしょうか? 以下のリクエストは `indexedDB.open()` の呼び出しを伴って生成されており、`request.result` は `IDBDatabase` のインスタンスですので、以降のためにこれを保存したいことは確実です。よって、コードは以下のようになるでしょう。

```js
let db;
const request = indexedDB.open("MyTestDatabase");
request.onerror = (event) => {
  console.error(
    "なぜ私の ウェブアプリで IndexedDB を使わせてくれないのですか?!",
  );
};
request.onsuccess = (event) => {
  db = event.target.result;
};
```

#### エラーを処理する

前述のとおり、エラーイベントはバブリングします。エラーイベントはエラーを発生させたリクエストをターゲットにして、さらにトランザクションや最終的にデータベースオブジェクトへバブリングします。すべてのリクエストにエラーハンドラーを追加することを避けたい場合は、代わりに以下のように、ひとつのエラーハンドラーをデータベースオブジェクトに追加することができます。

```js
db.onerror = (event) => {
  // このデータベースのリクエストに対するすべてのエラー用の
  // 汎用エラーハンドラー!
  console.error(`Database error: ${event.target.error?.message}`);
};
```

データベースを開く際によく発生するエラーのひとつが `VER_ERR` です。これはディスクに保存されているデータベースのバージョンが、開こうとしているバージョンより*大きい*ことを表します。これは、必ずエラーハンドラーで処理しなければならないエラーの実例です。

### データベースのバージョンの作成と更新

新しいデータベースを作成したり既存のデータベースのバージョンを更新したりする ([データベースを開く](#データベースを開く)際に、従来より大きなバージョン番号を指定する) と `onupgradeneeded` イベントが発生して、`request.result` (すなわち、以下の例の `db`) に設定した `onversionchange` イベントハンドラーに [IDBVersionChangeEvent](/ja/docs/Web/API/IDBVersionChangeEvent) オブジェクトが渡されます。`upgradeneeded` イベントのハンドラーでは、このバージョンのデータベースで必要なオブジェクトストアを作成します。

```js
// このイベントは最新のブラウザーにのみ実装されています
request.onupgradeneeded = (event) => {
  // IDBDatabase インターフェイスに保存します
  const db = event.target.result;

  // このデータベース用の objectStore を作成します
  const objectStore = db.createObjectStore("name", { keyPath: "myKey" });
};
```

この場合、データベースは旧バージョンのデータベース由来のオブジェクトストアをすでに持っていますので、それらのオブジェクトストアを再作成する必要はありません。新しいオブジェクトストアを作成するか、不要になった旧バージョンのオブジェクトストアを削除することだけが必要です。既存のオブジェクトストアを変更しなければならない (例えば `keyPath` を変更する) 場合は、古いオブジェクトストアを削除してから、新たな設定で再作成しなければならりません。(これはオブジェクトストア内の情報を削除しますので注意してください! この情報を保存しなければならない場合は、データベースをアップグレードする前にデータを読み出して、別の場所に保存してください)

既存の名称を使用してオブジェクトストアを作成しようとする (あるいは、存在しない名称のオブジェクトストアを削除しようとする) と、エラーが発生します。

`onupgradeneeded` イベントから正常に抜けた場合は、データベースを開くリクエストの `onsuccess` ハンドラーが実行されます。

### データベースを構築する

次に、データベースを構築します。IndexedDB はテーブルではなくオブジェクトストアを使用しており、ひとつのデータベースに複数のオブジェクトストアを含めることができます。値をオブジェクトストアへ保存するたびに、値がキーと関連付けられます。オブジェクトストアで[キーパス](/ja/docs/Web/API/IndexedDB_API/Basic_Terminology#gloss_keypath)を使用するか[キージェネレーター](/ja/docs/Web/API/IndexedDB_API/Basic_Terminology#gloss_keygenerator)を使用するかに応じて、キーを供給する方法がいくつか存在します。

以下の表で、キーを供給するさまざまな方法を示します。

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">キーパス (<code>keyPath</code>)</th>
      <th scope="col">キージェネレーター (<code>autoIncrement</code>)</th>
      <th scope="col">説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>なし</td>
      <td>なし</td>
      <td>
        このオブジェクトストアは、数値や文字列といったプリミティブ値を含む、どのような種類の値でも保持できます。新たな値の追加を望むたびに、個別のキー引数を供給しなければなりません。
      </td>
    </tr>
    <tr>
      <td>あり</td>
      <td>なし</td>
      <td>
        このオブジェクトストアは、JavaScript オブジェクトのみ保持できます。オブジェクトはキーパスと同じ名称のプロパティを持たなければなりません。
      </td>
    </tr>
    <tr>
      <td>なし</td>
      <td>あり</td>
      <td>
        このオブジェクトストアは、どのような種類の値でも保持できます。キーは自動的に生成されます。また、特定のキーを使用したい場合は個別のキー引数を供給できます。
      </td>
    </tr>
    <tr>
      <td>あり</td>
      <td>あり</td>
      <td>
        このオブジェクトストアは、JavaScript オブジェクトのみ保持できます。通常はキーが生成されて、オブジェクトでキーパスと同じ名称を持つプロパティに、生成されたキーの値を保存します。ただしそのようなプロパティがすでに存在している場合は、生成された新たなキーではなく、そのプロパティの値をキーとして使用します。
      </td>
    </tr>
  </tbody>
</table>

オブジェクトストアがプリミティブではなくオブジェクトを保持していれば、オブジェクトストアでインデックスを作成することもできます。インデックスは、オブジェクトのキーではなく保存されたオブジェクトのプロパティの値を使用して、オブジェクトストア内に保存された値を検索することを可能にします。

さらにインデックスには、保存されたデータに単純な制限を強制する機能があります。インデックスを作成する際に unique フラグを設定すると、インデックスのキーパスで同じ値を持つオブジェクトが複数保存されないことを、インデックスが保証します。よって例えば人々の集団の情報を保持するオブジェクトストアがある場合に、同じメールアドレスを持つ人が 2 人存在しないことを保証したい場合は、これを強制するために unique フラグを設定したインデックスを使用するとよいでしょう。

これには混乱するかもしれませんので、シンプルな例で概念を説明するべきでしょう。始めに、例で使用する顧客データをいくつか定義します。

```js
// 顧客データがどのようなものかを示します
const customerData = [
  { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
  { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" },
];
```

もちろん、誰かの社会保障番号を顧客テーブルの主キーとして使用するべきではないですし (社会保障番号を持っていない人もいます)、年齢の代わりに誕生日を保管することもできますが、これらの不適切な選択は利便性のために無視して先へ進みましょう。

次に、データを保存する IndexedDB を作成するところを見てみましょう。

```js
const dbName = "the_name";

const request = indexedDB.open(dbName, 2);

request.onerror = (event) => {
  // エラー処理
};
request.onupgradeneeded = (event) => {
  const db = event.target.result;

  // 顧客の情報を保存する objectStore を作成します。
  // "ssn" は一意であることが保証されています - 少なくとも、キックオフミーティングで
  // そのように言われました。なので、キーパスとして使用します。
  const objectStore = db.createObjectStore("customers", { keyPath: "ssn" });

  // 顧客を名前で検索するためのインデックスを作成します。
  // 重複する可能性がありますので、一意のインデックスとしては使用できません。
  objectStore.createIndex("name", "name", { unique: false });

  // 顧客をメールアドレスで検索するためのインデックスを作成します。2 人の顧客が同じメールアドレスを
  // 使用しないようにしたいので、一意のインデックスを使用します。
  objectStore.createIndex("email", "email", { unique: true });

  // データを追加する前に objectStore の作成を完了させるため、
  // transaction oncomplete を使用します。
  objectStore.transaction.oncomplete = (event) => {
    // 新たに作成した objectStore に値を保存します。
    const customerObjectStore = db
      .transaction("customers", "readwrite")
      .objectStore("customers");
    customerData.forEach((customer) => {
      customerObjectStore.add(customer);
    });
  };
};
```

先に示したように、`onupgradeneeded` はデータベースの構造を変えることができる唯一の場所です。ここではオブジェクトストアの作成および削除や、インデックスの構築および削除が可能です。

オブジェクトストアは `createObjectStore()` を 1 回呼び出して作成します。このメソッドの引数は、ストアの名前と引数オブジェクトです。引数オブジェクトは省略可能ですが、重要なオプションプロパティを定義したり、作成したいオブジェクトストアの型を改良することができますので、とても重要です。この例では "customers" という名前のオブジェクトストアを要求して、`keyPath` を定義しています。`keyPath` は、ストア内で個々のオブジェクトを一意にするプロパティです。この例では、社会保障番号が一意であることが保証されていますので "ssn" にしています。"ssn" は、`objectStore` に保存するすべてのオブジェクトに与えなければなりません。

また、保存されたオブジェクトの `name` プロパティを参照する、"name" という名前のインデックスも要求しています。`createObjectStore()` と同様に `createIndex()` も、作成したいインデックスの型を改良するための省略可能な引数 `options` オブジェクトを指定できます。`name` プロパティを持たないオブジェクトを追加することはできますが、そのオブジェクトは "name" インデックス内に現れません。

以上でオブジェクトストアに保存された顧客オブジェクトを、`ssn` を使用して直接、またはインデックスを使用して名前をもとにして、取り出すことができます。この仕組みについて詳しくは、[インデックスの使用](#インデックスの使用)をご覧ください。

### キージェネレーターを使用する

オブジェクトストアを作成するときに `autoIncrement` フラグを設定すると、そのオブジェクトストアでキージェネレーターを使用できます。デフォルトで、このフラグは設定されません。

キージェネレーターを使用すると、オブジェクトストアに値を追加するのに応じて自動的にキーが生成されます。オブジェクトストアでキージェネレーターを初めて作成した時点では、キージェネレーターの値が常に 1 になります。基本的に、新たに自動生成されるキーは、前のキーから 1 増加した値になります。データベースのトランザクションが中止されるなど、データベースの操作が取り消された場合を除き、キージェネレーターの現在の値が減少することはありません。従って、オブジェクトストアからレコードを削除したりすべてのレコードをクリアしたりしても、オブジェクトストアのキージェネレーターには影響がありません。

以下のように、キージェネレーターを持つ別のオブジェクトストアを作成できます。

```js
// indexedDB を開きます。
const request = indexedDB.open(dbName, 3);

request.onupgradeneeded = (event) => {
  const db = event.target.result;

  // autoIncrement フラグに true を設定した、"names" という名前のオブジェクトストアを作成します。
  const objStore = db.createObjectStore("names", { autoIncrement: true });

  // "names" オブジェクトストアはキージェネレーターを持っていますので、値 name のキーは自動的に生成されます。
  // 追加したレコードは以下のようになります:
  // キー : 1 => 値 : "Bill"
  // キー : 2 => 値 : "Donna"
  customerData.forEach((customer) => {
    objStore.add(customer.name);
  });
};
```

キージェネレーターについて詳しくは、仕様書の [Key generators](https://w3c.github.io/IndexedDB/#key-generator-construct) をご覧ください。

## データの追加、読み取り、削除

新しいデータベースで何かを行えるようにする前に、トランザクションを開始しなければなりません。トランザクションはデータベースオブジェクトから生じており、トランザクションの対象にしたいオブジェクトストアを指定しなければなりません。トランザクションの内部では、データを保持しているオブジェクトストアへのアクセスや、リクエストの実行が可能です。次に、データベースに変更処理を行うのか、あるいはデータベースから読み出すだけかを決めなければなりません。トランザクションは `readonly`、`readwrite`、`versionchange` の 3 つのモードを使用できます。

データベースの「スキーマ」や構造を変更する (オブジェクトストアやインデックスを作成または削除する) には、トランザクションを `versionchange` モードにしなければなりません。このトランザクションは、`version` を指定して {{domxref("IDBFactory.open")}} メソッドを呼び出すことによって開きます。

既存のオブジェクトストアからレコードを読み出すには、トランザクションで `readonly` モードまたは `readwrite` モードを使用できます。既存のオブジェクトストアに変更処理を行うには、トランザクションを `readwrite` モードにしなければなりません。このようなトランザクションは {{domxref("IDBDatabase.transaction")}} で開きます。このメソッドの引数は 2 つあり、`storeNames` (アクセスしたいオブジェクトストアの配列で定義されるスコープ) とトランザクションの `mode` (`readonly` または `readwrite`) です。またこのメソッドは、{{domxref("IDBTransaction.objectStore")}} メソッドを持つトランザクションオブジェクトを返します。`objectStore` メソッドは、オブジェクトストアにアクセスするために使用できます。デフォルトでは、モードを指定しなければ `readonly` モードでトランザクションを開きます。

> [!NOTE]
> Firefox 40 で、IndexedDB トランザクションはパフォーマンスを向上させるために、永続性の保証を緩和しました ([Firefox bug 1112702](https://bugzil.la/1112702) を参照)。以前は `readwrite` モードのトランザクションで、すべてのデータをディスク上に反映したことが保証された場合に限り {{domxref("IDBTransaction.complete_event", "complete")}} 発生しました。Firefox 40 以降では OS がデータの書き込みを指示した時点で `complete` が発生しており、実際にはデータがディスク上に反映されていない可能性があります。これにより `complete` イベントをより早く発生させられますが、データをディスク上に反映する前に OS のクラッシュや電源断が発生するとトランザクション全体を失う危険性が若干あります。このような破壊的な事象はまれですので、ほとんどの利用者は心配する必要がないでしょう。何らかの理由 (例えば、後で再計算できない重要なデータを保存する) で永続性を保証しなければならない場合は、実験的 (非標準) な `readwriteflush` モード ({{domxref("IDBDatabase.transaction")}} を参照) を使用してトランザクションを生成すると、`complete` イベントを発生させる前にディスクへの反映を強制させることができます。

トランザクションで適切なスコープおよびモードを使用すると、データアクセスを高速化できます。ヒントを 2 つ紹介します。

- スコープを定義するときは、必要なオブジェクトストアのみ指定します。これにより、同時にスコープが重なり合うことなく、複数のトランザクションを実行できます。
- `readwrite` トランザクションモードは、必要な場合に限り指定します。`readonly` トランザクションはスコープが重なっても複数同時に実行できますが、`readwrite` トランザクションはオブジェクトストアに対して 1 個しか実行できません。詳しくは、[IndexedDB の主な特徴と基本用語](/ja/docs/Web/API/IndexedDB_API/Basic_Terminology)の記事で [トランザクション](/ja/docs/Web/API/IndexedDB_API/Basic_Terminology#gloss_transaction)の定義をご覧ください。

### データベースにデータを追加する

データベースを作成したら、書き込みを行いたいと考えるでしょう。これは以下のようにします。

```js
var transaction = db.transaction(["customers"], "readwrite");
// メモ: 古い実験的な実装では、"readwrite" の代わりに非推奨の定数 IDBTransaction.READ_WRITE を使用します。
// そのような実装をサポートしたい場合は、以下のように記述します。
// var transaction = db.transaction(["customers"], IDBTransaction.READ_WRITE);
```

`transaction()` 関数は引数が 2 つあり (ひとつは省略可能)、トランザクションオブジェクトを返します。第 1 引数は、トランザクションの対象にするオブジェクトストアのリストです。トランザクションですべてのオブジェクトを対象にしたい場合は空の配列を渡すことができますが、仕様書では空の配列に対して `InvalidAccessError` を生成すべきとされていますので、行わないようにしてください。第 2 引数に何も指定しなければ、読み取り専用のトランザクションになります。書き込みを行いたい場合は、`"readwrite"` フラグを渡さなければなりません。

以上で、存続期間を理解しなければならないトランザクションができました。トランザクションは、イベントループととても密接に結びついています。トランザクションを作成して、それを使用せずにイベントループに戻ると、トランザクションが非アクティブ状態になります。トランザクションをアクティブにし続ける唯一の方法が、トランザクションでリクエストを行うことです。リクエストが完了すると DOM イベントが発生して、リクエストが成功したと仮定すれば、コールバックの実行中にトランザクションを拡張するもうひとつの機会を得られます。トランザクションを拡張せずにイベントループへ戻ると、トランザクションは非アクティブ状態になります。保留中のリクエストがある限り、トランザクションはアクティブであり続けます。トランザクションの存続期間はごくシンプルですが、慣れるまでには少々時間がかかるでしょう。さらにいくつかの例も、理解する助けになるでしょう。`TRANSACTION_INACTIVE_ERR` エラーコードを見始めた場合は、何らかの誤りがあるでしょう。

トランザクションは `error`、`abort`、`complete` の 3 種類の DOM イベントを受け取る可能性があります。`error` イベントがバブリングする方法について話したとおり、トランザクションは、生成したあらゆるリクエストが由来のエラーイベントを受け取ります。より細かいポイントとして、エラー時のデフォルトの動作は、エラーが発生したトランザクションを中止させることです。エラーイベントで始めに `stopPropagation()` を呼び出して、他の処理を行うようにエラー制御を行わなければ、トランザクション全体がロールバックします。この設計によってエラー制御を考えるよう強いられますが、きめ細かいエラー制御がとても複雑になる場合は、データベースに対して包括的なエラー制御を追加することもできます。エラーイベントを制御しない場合やトランザクションで `abort()` を呼び出した場合は、トランザクションがロールバックされて、`abort` イベントが発生します。それ以外の場合は、すべての保留中のリクエストが完了した後に `complete` イベントが発生します。多くのデータベース操作を行っている場合は、個々のリクエストではなくトランザクションを追跡すると、確実に健全性を促進します。

トランザクションを確保したら、そこからオブジェクトストアを取得しなければならないでしょう。トランザクションは、作成時に指定したオブジェクトストアだけを提供します。そして、必要なデータをすべて追加できます。

```js
// すべてのデータがデータベースに追加されたときに行う処理
transaction.oncomplete = (event) => {
  console.log("All done!");
};

transaction.onerror = (event) => {
  // エラー制御を忘れずに!
};

const objectStore = transaction.objectStore("customers");
customerData.forEach((customer) => {
  const request = objectStore.add(customer);
  request.onsuccess = (event) => {
    // event.target.result === customer.ssn;
  };
});
```

`add()` を呼び出して生成されたリクエストの `result` は、追加された値のキーです。よってこのケースでは、オブジェクトストアでキーパスとして `ssn` プロパティを使用していますので、追加されたオブジェクトの `ssn` プロパティと等しくなります。`add()` 関数では、データベース内に同一のキーを持つオブジェクトが存在しないことを要求しますので注意してください。既存の項目を変更しようとする場合や、既存の項目があるかを配慮しない場合は、[データベース内の項目の更新](#データベース内の項目の更新)の節で説明している `put()` 関数を使用できます。

### データベースからのデータの削除

データの削除もよく似ています。

```js
const request = db
  .transaction(["customers"], "readwrite")
  .objectStore("customers")
  .delete("444-44-4444");
request.onsuccess = (event) => {
  // 削除完了!
};
```

### データベースからのデータの取得

データベースは情報を持っていますので、いくつかの方法でデータを読み出すことができます。まずは、単純に `get()` を使用します。以下のように、値を読み出すためにキーを提供しなければなりません。

```js
const transaction = db.transaction(["customers"]);
const objectStore = transaction.objectStore("customers");
const request = objectStore.get("444-44-4444");
request.onerror = (event) => {
  // エラー処理!
};
request.onsuccess = (event) => {
  // request.result に対して行う処理!
  console.log(`Name for SSN 444-44-4444 is ${request.result.name}`);
};
```

"単純に" 読み出すにも多くのコードがあります。データベースレベルでエラー処理を行うとすれば、コードを少々短縮できることを以下に示します。

```js
db
  .transaction("customers")
  .objectStore("customers")
  .get("444-44-4444").onsuccess = (event) => {
  console.log(`Name for SSN 444-44-4444 is ${event.target.result.name}`);
};
```

どのように動作するかわかりますか? オブジェクトストアが 1 つしかありませんので、トランザクションで必要とするオブジェクトストアのリストを渡さずに、名称を文字列で渡しています。また、データベースから読み出すだけですので、`"readwrite"` トランザクションは不要です。モードを指定せずに `transaction()` を呼び出すと、`"readonly"` トランザクションになります。さらに細かいことですが、実はリクエストオブジェクトを変数に保存していません。DOM イベントはターゲットとしてリクエストを持ちますので、`result` プロパティを得るためにイベントを使用できます。

### データベース内の項目の更新

読み出したデータを更新して IndexedDB に書き戻す方法は、とてもシンプルです。先ほどのサンプルを多少更新しましょう。

```js
const objectStore = db
  .transaction(["customers"], "readwrite")
  .objectStore("customers");
const request = objectStore.get("444-44-4444");
request.onerror = (event) => {
  // エラー処理!
};
request.onsuccess = (event) => {
  // 更新したい、古い値を取得します。
  const data = event.target.result;

  // オブジェクト内の値を、希望する値に更新します。
  data.age = 42;

  // 更新したオブジェクトを、データベースに書き戻します。
  const requestUpdate = objectStore.put(data);
  requestUpdate.onerror = (event) => {
    // エラーが発生した場合の処理
  };
  requestUpdate.onsuccess = (event) => {
    // 成功 - データを更新しました!
  };
};
```

ここでは `objectStore` を作成して、ssn の値 (`444-44-4444`) で特定される顧客レコードの取り出しを要求しています。リクエストの結果を変数 (`data`) に代入して、そのオブジェクトの `age` プロパティを更新します。そして、顧客レコードを `objectStore` に書き戻して前の値を上書きする、第 2 のリクエスト (`requestUpdate`) を作成します。

> [!NOTE]
> このケースではデータベースから読み出すだけでなく書き込みも行いたいので、`readwrite` トランザクションを指定しました。

### カーソルの使用

`get()` を使用する際は、読み出したいキーがどれかを知っていることが必要です。オブジェクトストア内のすべての値を渡り歩きたい場合は、カーソルを使用できます。以下のようなものです。

```js
const objectStore = db.transaction("customers").objectStore("customers");

objectStore.openCursor().onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    console.log(`Name for SSN ${cursor.key} is ${cursor.value.name}`);
    cursor.continue();
  } else {
    console.log("No more entries!");
  }
};
```

`openCursor()` 関数は、引数がいくつかあります。第一に、すぐに取得するキーレンジオブジェクトを使用して、読み出すアイテムの範囲を制限できます。第二に、反復処理を行いたい方向を指定できます。上記の例では、すべてのオブジェクトを昇順方向に反復します。カーソルの成功イベントのコールバックは、やや特殊です。カーソルオブジェクト自体は、リクエストの `result` です (上記の例では略記法を使用しており、`event.target.result` になります)。そして実際のキーと値は、カーソルオブジェクトの `key` プロパティと `value` プロパティで見つかります。進み続けたい場合は、カーソルで `continue()` を呼び出さなければなりません。データの終端に達した (または、`openCursor()` リクエストに一致する項目が存在しない) 場合は成功のコールバックを受け取りますが、`result` プロパティが `undefined` になります。

カーソルをよく使用するパターンのひとつが、以下のようにオブジェクトストア内の全データを読み出して、配列に追加することです。

```js
const customers = [];

objectStore.openCursor().onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    customers.push(cursor.value);
    cursor.continue();
  } else {
    console.log(`Got all customers: ${customers}`);
  }
};
```

> [!NOTE]
> それ以外に、このような処理を行うために `getAll()` (および `getAllKeys()`)。を使用することができます。以下のコードは、前出の例とまったく同じことを行います。
>
> ```js
> objectStore.getAll().onsuccess = (event) => {
>   console.log(`Got all customers: ${event.target.result}`);
> };
> ```
>
> これはオブジェクトを横着な方法で作成するため、カーソルの `value` プロパティの検索に関してパフォーマンスコストが発生します。例えば `getAll()` を使用するとき、Gecko はすべてのオブジェクトを一度に作成しなければなりません。例えばそれぞれのキーを検索することにのみ関心がある場合は、`getAll()` よりもカーソルを使用する方がとても効率的です。オブジェクトストア内の全データの配列を得ようとしている場合は、`getAll()` を使用しましょう。

### インデックスの使用

SSN は個人を一意に識別しますので、キーとして SSN を使用して顧客データを保管することは論理的です。(プライバシーの観点でよいアイデアであるかは別の問題であり、この記事の対象外です) 一方、名前で顧客を検索しなければならない場合は、正しいものが見つかるまでデータベース内のすべての SSN に対して反復処理を行わなければなりません。この方法による検索はとても遅いため、代わりにインデックスを使用するとよいでしょう。

```js
// 最初に、 request.onupgradeneeded の中にインデックスを生成したか確認してください。
// objectStore.createIndex("name", "name");
// まだであれば、 DOMException が発生します。

const index = objectStore.index("name");

index.get("Donna").onsuccess = (event) => {
  console.log(`Donna's SSN is ${event.target.result.ssn}`);
};
```

`"name"` インデックスは一意ではないので、`name` に `"Donna"` が設定されている項目は複数存在する可能性があります。この場合は常に、キーの値がもっとも小さいものを取得します。

指定した `name` に該当するすべての項目にアクセスしなければならない場合は、カーソルを使用します。インデックス上で、2 種類のカーソルを開くことができます。ノーマルカーソルは、インデックスのプロパティと、オブジェクトストア内のオブジェクトを紐づけます。キーカーソルは、インデックスのプロパティと、オブジェクトストア内にオブジェクトを保存するために使用するキーを紐づけます。これらの違いを以下に示します。

```js
// 顧客レコードのオブジェクト全体を得るために、ノーマルカーソルを使用します。
index.openCursor().onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    // cursor.key は "Bill" のような名前、cursor.value はオブジェクト全体です。
    console.log(
      `Name: ${cursor.key}, SSN: ${cursor.value.ssn}, email: ${cursor.value.email}`,
    );
    cursor.continue();
  }
};

// 顧客レコードのオブジェクトのキーを得るために、キーカーソルを使用します。
index.openKeyCursor().onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    // cursor.key は "Bill" のような名前、cursor.primaryKey は SSN です。
    // 保存されたオブジェクトの他の部分を直接取得する方法はありません。
    console.log(`Name: ${cursor.key}, SSN: ${cursor.primaryKey}`);
    cursor.continue();
  }
};
```

### カーソルの範囲や方向を指定する

カーソルで参照する値の範囲を制限したい場合は、`IDBKeyRange` オブジェクトを使用して、`openCursor()` または `openKeyCursor()` の第 1 引数として渡します。ひとつのキーのみ許可するキーレンジ、下限または上限の片方を持つキーレンジ、あるいは下限と上限の両方を持つキーレンジを作成できます。境界は "closed" (すなわち、キーレンジは指定した値を含む) または "open" (すなわち、キーレンジは指定した値を含まない) のどちらにもできます。使い方を以下に示します。

```js
// "Donna" にのみ一致します。
const singleKeyRange = IDBKeyRange.only("Donna");

// "Bill" より先のすべてに一致します。"Bill" を含みます。
const lowerBoundKeyRange = IDBKeyRange.lowerBound("Bill");

// "Bill" より先のすべてに一致します。ただし "Bill" は含みません。
const lowerBoundOpenKeyRange = IDBKeyRange.lowerBound("Bill", true);

// "Donna" までのすべてに一致します。ただし "Donna" は含みません。
const upperBoundOpenKeyRange = IDBKeyRange.upperBound("Donna", true);

// "Bill" から "Donna" までに一致します。ただし "Donna" は含みません。
const boundKeyRange = IDBKeyRange.bound("Bill", "Donna", false, true);

// いずれかのキーレンジを使用するには、openCursor()/openKeyCursor() の第 1 引数として渡します。
index.openCursor(boundKeyRange).onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    // 一致した場合の処理。
    cursor.continue();
  }
};
```

昇順 (すべてのカーソルのデフォルトの方向) ではなく、降順に反復処理を行いたい場合があるかもしれません。方向の切り替えは、`openCursor()` の第 2 引数に `prev` を渡すことで実現します。

```js
objectStore.openCursor(boundKeyRange, "prev").onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    // 項目に対して行う処理
    cursor.continue();
  }
};
```

方向を変えたいだけで表示する結果は制限しない場合は、第 1 引数に `null` を渡します。

```js
objectStore.openCursor(null, "prev").onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    // 項目に対して行う処理
    cursor.continue();
  }
};
```

"name" インデックスは一意ではありませんので、`name` が同じ項目が複数存在する可能性があります。キーは常に一意でなければならないため、オブジェクトストアでこのような状況は発生できないことに注意してください。インデックスに対して反復処理を行う際に重複を取り除きたい場合は、方向の引数に `nextunique` (逆向きであれば `prevunique`) を指定します。`nextunique` または `prevunique` を使用すると、常にキーが最小の項目が返ります。

```js
index.openKeyCursor(null, "nextunique").onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    // 項目に対して行う処理
    cursor.continue();
  }
};
```

有効な方向の引数については、「[IDBCursor 定数](/ja/docs/Web/API/IDBCursor#%E5%AE%9A%E6%95%B0)」をご覧ください。

## ウェブアプリが別のタブで開かれているときにバージョンを変更する

データベースのバージョン変更が必要である場合に ウェブアプリでそのようなことを行うときは、ユーザーが古いバージョンの ウェブアプリをタブで開いている場合に別のタブで新しいバージョンのアプリを読み込んだときに発生することを考慮しなければなりません。データベースの実際のバージョンより大きなバージョンを指定して `open()` を呼び出すときは、データベースに変更を施す前に、他にデータベースを開いているものが明示的に要求を認めなければなりません (それらを閉じるか再読み込みするまで、`onblocked` イベントが発生します)。使い方を以下に示します。

```js
const openReq = mozIndexedDB.open("MyTestDatabase", 2);

openReq.onblocked = (event) => {
  // 他のタブがデータベースを読み込んでいる場合は、処理を進める前に
  // それらを閉じなければなりません。
  console.log("このサイトを開いている他のタブをすべて閉じてください!");
};

openReq.onupgradeneeded = (event) => {
  // 他のデータベースはすべて閉じられました。すべての処理を行います。
  db.createObjectStore(/* … */);
  useDatabase(db);
};

openReq.onsuccess = (event) => {
  const db = event.target.result;
  useDatabase(db);
};

function useDatabase(db) {
  // 別のページがバージョン変更を求めた場合に、通知されるようにするためのハンドラーを追加するようにしてください。
  // データベースを閉じなければなりません。データベースを閉じると、別のページがデータベースをアップグレードできます。
  // これを行わなければ、ユーザーがタブを閉じるまでデータベースはアップグレードされません。
  db.onversionchange = (event) => {
    db.close();
    console.log(
      "新しいバージョンのページが使用可能になりました。再読み込みしてください!",
    );
  };

  // データベースを使用する処理
}
```

すでに開かれているアプリが新たにデータベースを開こうとするコードを開始したが、古いバージョンのデータベースを使用している状況に対処するため、`VersionError` エラーもリッスンしましょう。

## セキュリティ

IndexedDB は同一生成元の原則を使用します。すなわち、ストアとサイトの生成元 (通常、サイトのドメインまたはサブドメイン) を紐づけますので、他の生成元からアクセスすることはできません。

サードパーティの window コンテンツ (例えば {{htmlelement("iframe")}} のコンテンツ) は、ブラウザーが[サードパーティ Cookie を禁止していない](https://support.mozilla.org/en-US/kb/third-party-cookies-firefox-tracking-protection)限り、自身が埋め込まれている生成元の IndexedDB ストアにアクセスできます（[Firefox bug 1147821](https://bugzil.la/1147821) をご覧ください）。

## ブラウザーの終了に関する警告

ブラウザーを終了するとき (例えばユーザーが「終了」や「閉じる」ボタンをクリックしたとき)、データベースを含むディスクは予期せず削除されたり、データベースストアへのパーミッションが失われたり、次のことが起きたりします。

1. 影響するデータベース (あるいは、ブラウザーを終了する場合はすべての開いているデータベース) の各トランザクションは `AbortError` とともに中断されます。この効果は各トランザクションで {{domxref("IDBTransaction.abort()")}} が呼ばれたのと同等です。
2. すべてのトランザクションが完了していたら、データベース接続は閉じられます。
3. 最後に、データベース接続を表す {{domxref("IDBDatabase")}} オブジェクトは {{domxref("IDBDatabase/close_event", "close")}} イベントを受け取ります。 {{domxref("IDBDatabase.close_event", "IDBDatabase.onclose")}} イベントハンドラーを使ってこのイベントを待ち受けできます。その結果、データベースが予期せず閉じられたことがわかります。

上記の挙動は新しく、ブラウザーの Firefox 50、Google Chrome 31 以降 (おおよそ) のリリースで利用できます。

このバージョンのブラウザーの前は、トランザクションは暗黙裡に中断され、 {{domxref("IDBDatabase/close_event", "close")}} イベントが発行されず、予期せぬデータベースの停止を検出する方法はありませんでした。

ユーザーはいつでもブラウザーを終了することができますので、特定のトランザクションが完了することをあてにしたり、完了しなかったことを知ったりすることはできません。この動作が暗示することがいくつかあります。

第一に、データベースであらゆるトランザクションが終了したときに、常に一貫性がある状態を保つように注意するべきです。例えば、ユーザーが編集可能な項目のリストを保存する IndexedDB を使用していると想定します。オブジェクトストアを消去してから新たなリストを書き込むことにより、編集後のリストを保存します。あるトランザクションでオブジェクトストアを消去して、別のトランザクションで新たなリストを書き込むとすれば、消去した後かつ書き込む前にブラウザーが閉じられる危険性があり、その場合は空のデータベースが残ります。これを避けるために、消去と書き込みをひとつのトランザクションに結合しましょう。

第二に、データベースのトランザクションと `unload` イベントを紐づけるべきではありません。ブラウザーを閉じることで `unload` イベントが発生した場合、`unload` イベントハンドラーで作成したトランザクションは完了しません。ブラウザーのセッションにわたって情報を管理するための直感的な方法は、ブラウザー (または特定のページ) を開いたときに情報を読み込んで、ユーザーとブラウザーとの対話に応じて更新して、ブラウザー (またはページ) を閉じるときに保存する流れです。しかし、これは動作しないでしょう。データベースのトランザクションは `unload` イベントハンドラーで作成されますが、これらは非同期処理ですので、実行できるようになる前に中止されるでしょう。

実は通常のブラウザー終了であっても、IndexedDB のトランザクションが完了するよう保証する手段はありません。[Firefox bug 870645](https://bugzil.la/870645) をご覧ください。通常の終了通知の回避策として、トランザクションの状況を追跡して、アンロード時にトランザクションが完了していないことをユーザーに警告するための `beforeunload` イベントを追加するとよいでしょう。

少なくとも中止通知と {{domxref("IDBDatabase.close_event", "IDBDatabase.onclose")}} を追加することで、いつ起こったのかがわかります。

## 包括的な IndexedDB の例

IndexedDB API を使用した完全な例があります。この例では、出版物を格納し、取得するために IndexedDB を使用しています。

- [例を試す](https://mdn.github.io/dom-examples/indexeddb-api/index.html)
- [ソースコードを見る](https://github.com/mdn/dom-examples/tree/main/indexeddb-api)

## 関連情報

必要に応じて、より多くの情報を知るための記事集です。

### リファレンス

- [IndexedDB API リファレンス](/ja/docs/Web/API/IndexedDB_API)
- [Indexed Database API Specification](https://w3c.github.io/IndexedDB/)
- IndexedDB [インターフェイスファイル](https://searchfox.org/firefox-main/search?q=dom%2FindexedDB%2F.*%5C.idl&path=&case=false&regexp=true) (Firefox のソースコード内)

### チュートリアルとガイド

- [Databinding UI Elements with IndexedDB (2012)](https://web.dev/articles/indexeddb-uidatabinding/)
- [IndexedDB — The Store in Your Browser](<https://learn.microsoft.com/ja-jp/previous-versions/msdn10/gg679063(v=msdn.10)>)

### ライブラリー

- [localForage](https://localforage.github.io/localForage/): クライアント側のデータストレージ向けに、シンプルな name:value 形式の構文を提供するポリフィルです。バックグラウンドで IndexedDB を使用しますが、IndexedDB をに対応していないブラウザーでは Web SQL （非推奨）や localStorage にフォールバックします。
- [Dexie.js](https://dexie.org/): 優良でシンプルな構文により高速なコード開発を可能にする、IndexedDB のラッパーです。
- [JsStore](https://jsstore.net/): SQL 風の構文による IndexedDB のラッパーです。
- [MiniMongo](https://github.com/mWater/minimongo): クライアント側のインメモリーの MongoDB で localstorage と server sync over http を元にしたもの。 MiniMongo は MeteorJS で使われています。
- [PouchDB](https://pouchdb.com/): クライアント側のブラウザー内の CouchDB 実装で IndexedDB を使っています。
- [IDB](https://github.com/jakearchibald/idb): IndexedDB API をほぼ反映した小さなライブラリーですが、使いやすさを大きく変える小さな改良が加えられています。
- [idb-keyval](https://www.npmjs.com/package/idb-keyval): IndexedDB で実装された超シンプルで小さな (\~600B) プロミスベースのキーバリューストア
- [$mol_db](https://github.com/hyoo-ru/mam_mol/tree/master/db): 小さな (\~1.3kB) TypeScript のファサードで、プロミスベースの API と自動マイグレーションを備えています。
- [RxDB](https://rxdb.info/): IndexedDB の上に使用することができる NoSQL クライアントサイドデータベースです。インデックス、圧縮、レプリケーションに対応して います。また、 IndexedDB にクロスタブ機能やオブザーバー機能を追加しています。
