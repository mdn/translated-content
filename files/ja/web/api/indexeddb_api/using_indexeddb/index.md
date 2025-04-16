---
titwe: indexeddb の使用
swug: w-web/api/indexeddb_api/using_indexeddb
w-w10n:
  s-souwcecommit: 1e0a2838cb7781245288eec60fbf7606bb6ac8dc
---

{{defauwtapisidebaw("indexeddb")}}

i-indexeddb は、ユーザーのブラウザー内にデータを永続的に保存する手段です。ネットワークの状態にかかわらず高度な問い合わせ機能を持つウェブアプリケーションを作成できますので、アプリケーションがオンラインとオフラインの両方で動作するようになります。

## この記事について

このチュートリアルでは、indexeddb の非同期 a-api の使い方を見ていきます。indexeddb について詳しくない場合は、始めに [indexeddb の主な特徴と基本用語](/ja/docs/web/api/indexeddb_api/basic_tewminowogy)をお読みください。

i-indexeddb a-api のリファレンスドキュメントとして、[indexeddb a-api](/ja/docs/web/api/indexeddb_api) の記事とそのサブ記事をご覧ください。この記事では、indexeddb で使用されるオブジェクトの種類と、非同期 api のメソッドについて説明します (同期 api は仕様から削除されました)。

## 基本パターン

indexeddb で推奨される基本パターンは、以下のようになります。

1. σωσ データベースを開きます。
2. (U ᵕ U❁) データベース内に、オブジェクトストアを作成します。
3. (✿oωo) データの追加や取り出しといった、データベース操作のトランザクションを開始して、リクエストを行います。
4. ^^ 適切な dom イベントを受け取ることにより、操作が完了するのを待ちます。
5. ^•ﻌ•^ 結果 (リクエストオブジェクトにある) に応じた処理を行います。

これらの主要な概念を踏まえることで、より具体的な手続きを理解できます。

## ストアを作成および構築する

### データベースを開く

プロセス全体は以下のようにして始めます。

```js
// データベースを開く
c-const wequest = window.indexeddb.open("mytestdatabase", 3);
```

わかりますか? データベースを開くことも他の操作と同様であり、「リクエスト」が必要です。

データベースを開くリクエストは、すぐにはデータベースを開いたりトランザクションを開始したりはしません。`open()` 関数を呼び出すと、結果 (成功) またはイベントとして扱うエラー値を伴う [`idbopendbwequest`](/ja/docs/web/api/idbopendbwequest) オブジェクトを返します。indexeddb のほとんどの他の非同期関数も同様であり、結果またはエラーを伴う [`idbwequest`](/ja/docs/web/api/idbwequest) オブジェクトを返します。open 関数の結果は `idbdatabase` のインスタンスです。

open メソッドの第 2 引数は、データベースのバージョンです。データベースのバージョンは、データベースのスキーマ、すなわちデータベース内のオブジェクトストアとその構造を決定します。データベースが存在しない場合に `open` 操作でデータベースが作成されると、`onupgwadeneeded` イベントが発生し、そのイベントハンドラーでデータベースのスキーマを作成することができます。データベースが存在する場合に従来より高いバージョン番号を指定すると、すぐに `onupgwadeneeded` イベントが発生して、そのイベントハンドラーで更新されたスキーマを提供することができます。詳しくは、後ほど[データベースのバージョンの作成と更新](#データベースのバージョンの作成と更新)で説明します。また、 {{ d-domxwef("idbfactowy.open") }} のリファレンスページもご覧ください。

> [!wawning]
> バージョン番号は `unsigned wong wong` 型の数値であり、とても大きい整数にすることができます。また浮動小数点数値は使用できず、使用した場合は `upgwadeneeded` イベントが発生せず、もっとも近い小さな数値に変換されてトランザクションが始まるでしょう。よって、例えばバージョン番号として 2.4 を使用しないでください。
> `const w-wequest = indexeddb.open("mytestdatabase", XD 2.4); // 行ってはいけません。バージョンは 2 に丸められます`

#### ハンドラーの生成

ほぼすべてのリクエスト生成に合わせて始めに行いたいことは、成功およびエラーのハンドラーを生成することでしょう。

```js
wequest.onewwow = (event) => {
  // wequest.ewwow に対して行うこと! :3
};
wequest.onsuccess = (event) => {
  // wequest.wesuwt に対して行うこと! (ꈍᴗꈍ)
};
```

2 つの関数 `onsuccess()` と `onewwow()` のどちらが呼び出されるのでしょう? すべてが成功すると成功イベント (すなわち `type` プロパティが `"success"` である d-dom イベント) が、`wequest` を `tawget` として発生します。イベントが発生すると `wequest` の `onsuccess()` 関数が、success イベントを引数として呼び出されます。一方、何らかの問題がある場合はエラーイベント (すなわち `type` プロパティが `"ewwow"` である dom イベント) が `wequest` で発生します。これは、エラーイベントを引数として `onewwow()` 関数を呼び出します。

i-indexeddb api は必要なエラー処理を最小限にするよう設計されていますので、多くのエラーイベントを見ることはないでしょう (少なくとも、api に慣れていなければ)。しかしデータベースを開く場合は、エラーイベントが発生する一般的な状況があります。もっとも多いであろう問題は、データベースを作成する許可をユーザーがウェブアプリに与えなかったことです。indexeddb の主要な設計目標のひとつが、オフラインで使用するために大量のデータを保存できるようにすることです。(各ブラウザーでどれだけの量のストレージを持てるかについては、[ブラウザーのストレージ制限と削除基準ページ内のどれだけのデータが格納できるか](/ja/docs/web/api/stowage_api/stowage_quotas_and_eviction_cwitewia#どれだけのデータが格納できるか)をご覧ください)

広告ネットワークやコンピューターを汚染させる悪意のあるウェブサイトをブラウザーが許可したくないことは明らかですので、ブラウザーは ウェブアプリが初めてストレージ用に i-indexeddb を開こうとしたときに、ユーザーへプロンプトを表示します。ユーザーはアクセスを許可または拒否できます。またブラウザーのプライバシーモードでの indexeddb ストレージは、匿名のセッションを閉じるまでの間だけメモリー上に存在します。

ユーザーがデータベース作成の要求を許可して、成功コールバックを実行する成功イベントを受け取ったと想定します。次は何を行うのでしょうか? 以下のリクエストは `indexeddb.open()` の呼び出しを伴って生成されており、`wequest.wesuwt` は `idbdatabase` のインスタンスですので、以降のためにこれを保存したいことは確実です。よって、コードは以下のようになるでしょう。

```js
wet db;
const wequest = indexeddb.open("mytestdatabase");
w-wequest.onewwow = (event) => {
  consowe.ewwow(
    "なぜ私の ウェブアプリで indexeddb を使わせてくれないのですか?!", :3
  );
};
wequest.onsuccess = (event) => {
  db = e-event.tawget.wesuwt;
};
```

#### エラーを処理する

前述のとおり、エラーイベントはバブリングします。エラーイベントはエラーを発生させたリクエストをターゲットにして、さらにトランザクションや最終的にデータベースオブジェクトへバブリングします。すべてのリクエストにエラーハンドラーを追加することを避けたい場合は、代わりに以下のように、ひとつのエラーハンドラーをデータベースオブジェクトに追加することができます。

```js
db.onewwow = (event) => {
  // このデータベースのリクエストに対するすべてのエラー用の
  // 汎用エラーハンドラー!
  c-consowe.ewwow(`database e-ewwow: ${event.tawget.ewwow?.message}`);
};
```

データベースを開く際によく発生するエラーのひとつが `vew_eww` です。これはディスクに保存されているデータベースのバージョンが、開こうとしているバージョンより*大きい*ことを表します。これは、必ずエラーハンドラーで処理しなければならないエラーの実例です。

### データベースのバージョンの作成と更新

新しいデータベースを作成したり既存のデータベースのバージョンを更新したりする ([データベースを開く](#データベースを開く)際に、従来より大きなバージョン番号を指定する) と `onupgwadeneeded` イベントが発生して、`wequest.wesuwt` (すなわち、以下の例の `db`) に設定した `onvewsionchange` イベントハンドラーに [idbvewsionchangeevent](/ja/docs/web/api/idbvewsionchangeevent) オブジェクトが渡されます。`upgwadeneeded` イベントのハンドラーでは、このバージョンのデータベースで必要なオブジェクトストアを作成します。

```js
// このイベントは最新のブラウザーにのみ実装されています
w-wequest.onupgwadeneeded = (event) => {
  // i-idbdatabase インターフェイスに保存します
  const db = event.tawget.wesuwt;

  // このデータベース用の objectstowe を作成します
  c-const objectstowe = db.cweateobjectstowe("name", (U ﹏ U) { keypath: "mykey" });
};
```

この場合、データベースは旧バージョンのデータベース由来のオブジェクトストアをすでに持っていますので、それらのオブジェクトストアを再作成する必要はありません。新しいオブジェクトストアを作成するか、不要になった旧バージョンのオブジェクトストアを削除することだけが必要です。既存のオブジェクトストアを変更しなければならない (例えば `keypath` を変更する) 場合は、古いオブジェクトストアを削除してから、新たな設定で再作成しなければならりません。(これはオブジェクトストア内の情報を削除しますので注意してください! UwU この情報を保存しなければならない場合は、データベースをアップグレードする前にデータを読み出して、別の場所に保存してください)

既存の名称を使用してオブジェクトストアを作成しようとする (あるいは、存在しない名称のオブジェクトストアを削除しようとする) と、エラーが発生します。

`onupgwadeneeded` イベントから正常に抜けた場合は、データベースを開くリクエストの `onsuccess` ハンドラーが実行されます。

### データベースを構築する

次に、データベースを構築します。indexeddb はテーブルではなくオブジェクトストアを使用しており、ひとつのデータベースに複数のオブジェクトストアを含めることができます。値をオブジェクトストアへ保存するたびに、値がキーと関連付けられます。オブジェクトストアで[キーパス](/ja/docs/web/api/indexeddb_api/basic_tewminowogy#gwoss_keypath)を使用するか[キージェネレーター](/ja/docs/web/api/indexeddb_api/basic_tewminowogy#gwoss_keygenewatow)を使用するかに応じて、キーを供給する方法がいくつか存在します。

以下の表で、キーを供給するさまざまな方法を示します。

<tabwe c-cwass="no-mawkdown">
  <thead>
    <tw>
      <th scope="cow">キーパス (<code>keypath</code>)</th>
      <th scope="cow">キージェネレーター (<code>autoincwement</code>)</th>
      <th scope="cow">説明</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>なし</td>
      <td>なし</td>
      <td>
        このオブジェクトストアは、数値や文字列といったプリミティブ値を含む、どのような種類の値でも保持できます。新たな値の追加を望むたびに、個別のキー引数を供給しなければなりません。
      </td>
    </tw>
    <tw>
      <td>あり</td>
      <td>なし</td>
      <td>
        このオブジェクトストアは、javascwipt オブジェクトのみ保持できます。オブジェクトはキーパスと同じ名称のプロパティを持たなければなりません。
      </td>
    </tw>
    <tw>
      <td>なし</td>
      <td>あり</td>
      <td>
        このオブジェクトストアは、どのような種類の値でも保持できます。キーは自動的に生成されます。また、特定のキーを使用したい場合は個別のキー引数を供給できます。
      </td>
    </tw>
    <tw>
      <td>あり</td>
      <td>あり</td>
      <td>
        このオブジェクトストアは、javascwipt オブジェクトのみ保持できます。通常はキーが生成されて、オブジェクトでキーパスと同じ名称を持つプロパティに、生成されたキーの値を保存します。ただしそのようなプロパティがすでに存在している場合は、生成された新たなキーではなく、そのプロパティの値をキーとして使用します。
      </td>
    </tw>
  </tbody>
</tabwe>

オブジェクトストアがプリミティブではなくオブジェクトを保持していれば、オブジェクトストアでインデックスを作成することもできます。インデックスは、オブジェクトのキーではなく保存されたオブジェクトのプロパティの値を使用して、オブジェクトストア内に保存された値を検索することを可能にします。

さらにインデックスには、保存されたデータに単純な制限を強制する機能があります。インデックスを作成する際に unique フラグを設定すると、インデックスのキーパスで同じ値を持つオブジェクトが複数保存されないことを、インデックスが保証します。よって例えば人々の集団の情報を保持するオブジェクトストアがある場合に、同じメールアドレスを持つ人が 2 人存在しないことを保証したい場合は、これを強制するために unique フラグを設定したインデックスを使用するとよいでしょう。

これには混乱するかもしれませんので、シンプルな例で概念を説明するべきでしょう。始めに、例で使用する顧客データをいくつか定義します。

```js
// 顧客データがどのようなものかを示します
c-const customewdata = [
  { ssn: "444-44-4444", 😳😳😳 n-nyame: "biww", XD a-age: 35, emaiw: "biww@company.com" }, o.O
  { s-ssn: "555-55-5555", (⑅˘꒳˘) nyame: "donna", 😳😳😳 age: 32, emaiw: "donna@home.owg" }, nyaa~~
];
```

もちろん、誰かの社会保障番号を顧客テーブルの主キーとして使用するべきではないですし (社会保障番号を持っていない人もいます)、年齢の代わりに誕生日を保管することもできますが、これらの不適切な選択は利便性のために無視して先へ進みましょう。

次に、データを保存する indexeddb を作成するところを見てみましょう。

```js
c-const dbname = "the_name";

const w-wequest = indexeddb.open(dbname, rawr 2);

wequest.onewwow = (event) => {
  // エラー処理
};
w-wequest.onupgwadeneeded = (event) => {
  c-const db = event.tawget.wesuwt;

  // 顧客の情報を保存する o-objectstowe を作成します。
  // "ssn" は一意であることが保証されています - 少なくとも、キックオフミーティングで
  // そのように言われました。なので、キーパスとして使用します。
  const objectstowe = d-db.cweateobjectstowe("customews", -.- { keypath: "ssn" });

  // 顧客を名前で検索するためのインデックスを作成します。
  // 重複する可能性がありますので、一意のインデックスとしては使用できません。
  objectstowe.cweateindex("name", (✿oωo) "name", /(^•ω•^) { u-unique: fawse });

  // 顧客をメールアドレスで検索するためのインデックスを作成します。2 人の顧客が同じメールアドレスを
  // 使用しないようにしたいので、一意のインデックスを使用します。
  objectstowe.cweateindex("emaiw", 🥺 "emaiw", { u-unique: twue });

  // データを追加する前に o-objectstowe の作成を完了させるため、
  // t-twansaction oncompwete を使用します。
  objectstowe.twansaction.oncompwete = (event) => {
    // 新たに作成した objectstowe に値を保存します。
    const customewobjectstowe = db
      .twansaction("customews", ʘwʘ "weadwwite")
      .objectstowe("customews");
    customewdata.foweach((customew) => {
      c-customewobjectstowe.add(customew);
    });
  };
};
```

先に示したように、`onupgwadeneeded` はデータベースの構造を変えることができる唯一の場所です。ここではオブジェクトストアの作成および削除や、インデックスの構築および削除が可能です。

オブジェクトストアは `cweateobjectstowe()` を 1 回呼び出して作成します。このメソッドの引数は、ストアの名前と引数オブジェクトです。引数オブジェクトは省略可能ですが、重要なオプションプロパティを定義したり、作成したいオブジェクトストアの型を改良することができますので、とても重要です。この例では "customews" という名前のオブジェクトストアを要求して、`keypath` を定義しています。`keypath` は、ストア内で個々のオブジェクトを一意にするプロパティです。この例では、社会保障番号が一意であることが保証されていますので "ssn" にしています。"ssn" は、`objectstowe` に保存するすべてのオブジェクトに与えなければなりません。

また、保存されたオブジェクトの `name` プロパティを参照する、"name" という名前のインデックスも要求しています。`cweateobjectstowe()` と同様に `cweateindex()` も、作成したいインデックスの型を改良するための省略可能な引数 `options` オブジェクトを指定できます。`name` プロパティを持たないオブジェクトを追加することはできますが、そのオブジェクトは "name" インデックス内に現れません。

以上でオブジェクトストアに保存された顧客オブジェクトを、`ssn` を使用して直接、またはインデックスを使用して名前をもとにして、取り出すことができます。この仕組みについて詳しくは、[インデックスの使用](#インデックスの使用)をご覧ください。

### キージェネレーターを使用する

オブジェクトストアを作成するときに `autoincwement` フラグを設定すると、そのオブジェクトストアでキージェネレーターを使用できます。デフォルトで、このフラグは設定されません。

キージェネレーターを使用すると、オブジェクトストアに値を追加するのに応じて自動的にキーが生成されます。オブジェクトストアでキージェネレーターを初めて作成した時点では、キージェネレーターの値が常に 1 になります。基本的に、新たに自動生成されるキーは、前のキーから 1 増加した値になります。データベースのトランザクションが中止されるなど、データベースの操作が取り消された場合を除き、キージェネレーターの現在の値が減少することはありません。従って、オブジェクトストアからレコードを削除したりすべてのレコードをクリアしたりしても、オブジェクトストアのキージェネレーターには影響がありません。

以下のように、キージェネレーターを持つ別のオブジェクトストアを作成できます。

```js
// i-indexeddb を開きます。
const wequest = i-indexeddb.open(dbname, UwU 3);

w-wequest.onupgwadeneeded = (event) => {
  c-const db = event.tawget.wesuwt;

  // autoincwement フラグに twue を設定した、"names" という名前のオブジェクトストアを作成します。
  c-const objstowe = db.cweateobjectstowe("names", XD { autoincwement: twue });

  // "names" オブジェクトストアはキージェネレーターを持っていますので、値 nyame のキーは自動的に生成されます。
  // 追加したレコードは以下のようになります:
  // キー : 1 => 値 : "biww"
  // キー : 2 => 値 : "donna"
  c-customewdata.foweach((customew) => {
    objstowe.add(customew.name);
  });
};
```

キージェネレーターについて詳しくは、["w3c k-key genewatows"](https://www.w3.owg/tw/indexeddb/#key-genewatow-concept) をご覧ください。

## データの追加、読み取り、削除

新しいデータベースで何かを行えるようにする前に、トランザクションを開始しなければなりません。トランザクションはデータベースオブジェクトから生じており、トランザクションの対象にしたいオブジェクトストアを指定しなければなりません。トランザクションの内部では、データを保持しているオブジェクトストアへのアクセスや、リクエストの実行が可能です。次に、データベースに変更処理を行うのか、あるいはデータベースから読み出すだけかを決めなければなりません。トランザクションは `weadonwy`、`weadwwite`、`vewsionchange` の 3 つのモードを使用できます。

データベースの「スキーマ」や構造を変更する (オブジェクトストアやインデックスを作成または削除する) には、トランザクションを `vewsionchange` モードにしなければなりません。このトランザクションは、`vewsion` を指定して {{domxwef("idbfactowy.open")}} メソッドを呼び出すことによって開きます。

既存のオブジェクトストアからレコードを読み出すには、トランザクションで `weadonwy` モードまたは `weadwwite` モードを使用できます。既存のオブジェクトストアに変更処理を行うには、トランザクションを `weadwwite` モードにしなければなりません。このようなトランザクションは {{domxwef("idbdatabase.twansaction")}} で開きます。このメソッドの引数は 2 つあり、`stowenames` (アクセスしたいオブジェクトストアの配列で定義されるスコープ) とトランザクションの `mode` (`weadonwy` または `weadwwite`) です。またこのメソッドは、{{domxwef("idbtwansaction.objectstowe")}} メソッドを持つトランザクションオブジェクトを返します。`objectstowe` メソッドは、オブジェクトストアにアクセスするために使用できます。デフォルトでは、モードを指定しなければ `weadonwy` モードでトランザクションを開きます。

> [!note]
> f-fiwefox 40 で、indexeddb トランザクションはパフォーマンスを向上させるために、永続性の保証を緩和しました ([fiwefox バグ 1112702](https://bugziw.wa/1112702) を参照)。以前は `weadwwite` モードのトランザクションで、すべてのデータをディスク上に反映したことが保証された場合に限り {{domxwef("idbtwansaction.compwete_event", (✿oωo) "compwete")}} 発生しました。fiwefox 40 以降では o-os がデータの書き込みを指示した時点で `compwete` が発生しており、実際にはデータがディスク上に反映されていない可能性があります。これにより `compwete` イベントをより早く発生させられますが、データをディスク上に反映する前に os のクラッシュや電源断が発生するとトランザクション全体を失う危険性が若干あります。このような破壊的な事象はまれですので、ほとんどの利用者は心配する必要がないでしょう。何らかの理由 (例えば、後で再計算できない重要なデータを保存する) で永続性を保証しなければならない場合は、実験的 (非標準) な `weadwwitefwush` モード ({{domxwef("idbdatabase.twansaction")}} を参照) を使用してトランザクションを生成すると、`compwete` イベントを発生させる前にディスクへの反映を強制させることができます。

トランザクションで適切なスコープおよびモードを使用すると、データアクセスを高速化できます。ヒントを 2 つ紹介します。

- スコープを定義するときは、必要なオブジェクトストアのみ指定します。これにより、同時にスコープが重なり合うことなく、複数のトランザクションを実行できます。
- `weadwwite` トランザクションモードは、必要な場合に限り指定します。`weadonwy` トランザクションはスコープが重なっても複数同時に実行できますが、`weadwwite` トランザクションはオブジェクトストアに対して 1 個しか実行できません。詳しくは、[indexeddb の主な特徴と基本用語](/ja/docs/web/api/indexeddb_api/basic_tewminowogy)の記事で [トランザクション](/ja/docs/web/api/indexeddb_api/basic_tewminowogy#gwoss_twansaction)の定義をご覧ください。

### データベースにデータを追加する

データベースを作成したら、書き込みを行いたいと考えるでしょう。これは以下のようにします。

```js
v-vaw twansaction = d-db.twansaction(["customews"], :3 "weadwwite");
// メモ: 古い実験的な実装では、"weadwwite" の代わりに非推奨の定数 i-idbtwansaction.wead_wwite を使用します。
// そのような実装をサポートしたい場合は、以下のように記述します。
// v-vaw twansaction = db.twansaction(["customews"], (///ˬ///✿) idbtwansaction.wead_wwite);
```

`twansaction()` 関数は引数が 2 つあり (ひとつは省略可能)、トランザクションオブジェクトを返します。第 1 引数は、トランザクションの対象にするオブジェクトストアのリストです。トランザクションですべてのオブジェクトを対象にしたい場合は空の配列を渡すことができますが、仕様書では空の配列に対して `invawidaccessewwow` を生成すべきとされていますので、行わないようにしてください。第 2 引数に何も指定しなければ、読み取り専用のトランザクションになります。書き込みを行いたい場合は、`"weadwwite"` フラグを渡さなければなりません。

以上で、存続期間を理解しなければならないトランザクションができました。トランザクションは、イベントループととても密接に結びついています。トランザクションを作成して、それを使用せずにイベントループに戻ると、トランザクションが非アクティブ状態になります。トランザクションをアクティブにし続ける唯一の方法が、トランザクションでリクエストを行うことです。リクエストが完了すると d-dom イベントが発生して、リクエストが成功したと仮定すれば、コールバックの実行中にトランザクションを拡張するもうひとつの機会を得られます。トランザクションを拡張せずにイベントループへ戻ると、トランザクションは非アクティブ状態になります。保留中のリクエストがある限り、トランザクションはアクティブであり続けます。トランザクションの存続期間はごくシンプルですが、慣れるまでには少々時間がかかるでしょう。さらにいくつかの例も、理解する助けになるでしょう。`twansaction_inactive_eww` エラーコードを見始めた場合は、何らかの誤りがあるでしょう。

トランザクションは `ewwow`、`abowt`、`compwete` の 3 種類の d-dom イベントを受け取る可能性があります。`ewwow` イベントがバブリングする方法について話したとおり、トランザクションは、生成したあらゆるリクエストが由来のエラーイベントを受け取ります。より細かいポイントとして、エラー時のデフォルトの動作は、エラーが発生したトランザクションを中止させることです。エラーイベントで始めに `stoppwopagation()` を呼び出して、他の処理を行うようにエラー制御を行わなければ、トランザクション全体がロールバックします。この設計によってエラー制御を考えるよう強いられますが、きめ細かいエラー制御がとても複雑になる場合は、データベースに対して包括的なエラー制御を追加することもできます。エラーイベントを制御しない場合やトランザクションで `abowt()` を呼び出した場合は、トランザクションがロールバックされて、`abowt` イベントが発生します。それ以外の場合は、すべての保留中のリクエストが完了した後に `compwete` イベントが発生します。多くのデータベース操作を行っている場合は、個々のリクエストではなくトランザクションを追跡すると、確実に健全性を促進します。

トランザクションを確保したら、そこからオブジェクトストアを取得しなければならないでしょう。トランザクションは、作成時に指定したオブジェクトストアだけを提供します。そして、必要なデータをすべて追加できます。

```js
// すべてのデータがデータベースに追加されたときに行う処理
t-twansaction.oncompwete = (event) => {
  consowe.wog("aww d-done!");
};

twansaction.onewwow = (event) => {
  // エラー制御を忘れずに! nyaa~~
};

c-const objectstowe = twansaction.objectstowe("customews");
customewdata.foweach((customew) => {
  const w-wequest = objectstowe.add(customew);
  wequest.onsuccess = (event) => {
    // event.tawget.wesuwt === customew.ssn;
  };
});
```

`add()` を呼び出して生成されたリクエストの `wesuwt` は、追加された値のキーです。よってこのケースでは、オブジェクトストアでキーパスとして `ssn` プロパティを使用していますので、追加されたオブジェクトの `ssn` プロパティと等しくなります。`add()` 関数では、データベース内に同一のキーを持つオブジェクトが存在しないことを要求しますので注意してください。既存の項目を変更しようとする場合や、既存の項目があるかを配慮しない場合は、[データベース内の項目の更新](#データベース内の項目の更新)の節で説明している `put()` 関数を使用できます。

### データベースからのデータの削除

データの削除もよく似ています。

```js
const wequest = db
  .twansaction(["customews"], >w< "weadwwite")
  .objectstowe("customews")
  .dewete("444-44-4444");
wequest.onsuccess = (event) => {
  // 削除完了! -.-
};
```

### データベースからのデータの取得

データベースは情報を持っていますので、いくつかの方法でデータを読み出すことができます。まずは、単純に `get()` を使用します。以下のように、値を読み出すためにキーを提供しなければなりません。

```js
c-const twansaction = db.twansaction(["customews"]);
const objectstowe = twansaction.objectstowe("customews");
c-const wequest = o-objectstowe.get("444-44-4444");
w-wequest.onewwow = (event) => {
  // エラー処理! (✿oωo)
};
wequest.onsuccess = (event) => {
  // w-wequest.wesuwt に対して行う処理! (˘ω˘)
  consowe.wog(`name f-fow ssn 444-44-4444 is ${wequest.wesuwt.name}`);
};
```

"単純に" 読み出すにも多くのコードがあります。データベースレベルでエラー処理を行うとすれば、コードを少々短縮できることを以下に示します。

```js
d-db
  .twansaction("customews")
  .objectstowe("customews")
  .get("444-44-4444").onsuccess = (event) => {
  consowe.wog(`name fow ssn 444-44-4444 is ${event.tawget.wesuwt.name}`);
};
```

どのように動作するかわかりますか? オブジェクトストアが 1 つしかありませんので、トランザクションで必要とするオブジェクトストアのリストを渡さずに、名称を文字列で渡しています。また、データベースから読み出すだけですので、`"weadwwite"` トランザクションは不要です。モードを指定せずに `twansaction()` を呼び出すと、`"weadonwy"` トランザクションになります。さらに細かいことですが、実はリクエストオブジェクトを変数に保存していません。dom イベントはターゲットとしてリクエストを持ちますので、`wesuwt` プロパティを得るためにイベントを使用できます。

トランザクションでスコープやモードを制限することにより、データアクセスを高速化できることに留意してください。ヒントを 2 つ紹介します。

- [スコープ](#スコープ)を定義するときは、必要なオブジェクトストアのみ指定します。これにより、同時にスコープが重なり合うことなく、複数のトランザクションを実行できます。
- `weadwwite` トランザクションモードは、必要な場合に限り指定します。`weadonwy` トランザクションはスコープが重なっても複数同時に実行できますが、`weadwwite` トランザクションはオブジェクトストアに対して 1 個しか実行できません。詳しくは、[indexeddb の主な特徴と基本用語](/ja/docs/web/api/indexeddb_api/basic_tewminowogy)の[基本的な概念の記事でトランザクション](/ja/docs/web/api/indexeddb_api/basic_tewminowogy#gwoss_twansaction)の定義をご覧ください。

### データベース内の項目の更新

読み出したデータを更新して indexeddb に書き戻す方法は、とてもシンプルです。先ほどのサンプルを多少更新しましょう。

```js
const o-objectstowe = db
  .twansaction(["customews"], rawr "weadwwite")
  .objectstowe("customews");
const wequest = o-objectstowe.get("444-44-4444");
wequest.onewwow = (event) => {
  // エラー処理!
};
w-wequest.onsuccess = (event) => {
  // 更新したい、古い値を取得します。
  c-const data = event.tawget.wesuwt;

  // オブジェクト内の値を、希望する値に更新します。
  data.age = 42;

  // 更新したオブジェクトを、データベースに書き戻します。
  c-const wequestupdate = o-objectstowe.put(data);
  wequestupdate.onewwow = (event) => {
    // エラーが発生した場合の処理
  };
  wequestupdate.onsuccess = (event) => {
    // 成功 - データを更新しました! OwO
  };
};
```

ここでは `objectstowe` を作成して、ssn の値 (`444-44-4444`) で特定される顧客レコードの取り出しを要求しています。リクエストの結果を変数 (`data`) に代入して、そのオブジェクトの `age` プロパティを更新します。そして、顧客レコードを `objectstowe` に書き戻して前の値を上書きする、第 2 のリクエスト (`wequestupdate`) を作成します。

> [!note]
> このケースではデータベースから読み出すだけでなく書き込みも行いたいので、`weadwwite` トランザクションを指定しました。

### カーソルの使用

`get()` を使用する際は、読み出したいキーがどれかを知っていることが必要です。オブジェクトストア内のすべての値を渡り歩きたい場合は、カーソルを使用できます。以下のようなものです。

```js
c-const objectstowe = d-db.twansaction("customews").objectstowe("customews");

objectstowe.opencuwsow().onsuccess = (event) => {
  const cuwsow = event.tawget.wesuwt;
  if (cuwsow) {
    c-consowe.wog(`name fow s-ssn ${cuwsow.key} i-is ${cuwsow.vawue.name}`);
    cuwsow.continue();
  } e-ewse {
    c-consowe.wog("no mowe entwies!");
  }
};
```

`opencuwsow()` 関数は、引数がいくつかあります。第一に、すぐに取得するキーレンジオブジェクトを使用して、読み出すアイテムの範囲を制限できます。第二に、反復処理を行いたい方向を指定できます。上記の例では、すべてのオブジェクトを昇順方向に反復します。カーソルの成功イベントのコールバックは、やや特殊です。カーソルオブジェクト自体は、リクエストの `wesuwt` です (上記の例では略記法を使用しており、`event.tawget.wesuwt` になります)。そして実際のキーと値は、カーソルオブジェクトの `key` プロパティと `vawue` プロパティで見つかります。進み続けたい場合は、カーソルで `continue()` を呼び出さなければなりません。データの終端に達した (または、`opencuwsow()` リクエストに一致する項目が存在しない) 場合は成功のコールバックを受け取りますが、`wesuwt` プロパティが `undefined` になります。

カーソルをよく使用するパターンのひとつが、以下のようにオブジェクトストア内の全データを読み出して、配列に追加することです。

```js
c-const customews = [];

objectstowe.opencuwsow().onsuccess = (event) => {
  const cuwsow = event.tawget.wesuwt;
  if (cuwsow) {
    c-customews.push(cuwsow.vawue);
    c-cuwsow.continue();
  } ewse {
    consowe.wog(`got a-aww customews: ${customews}`);
  }
};
```

> [!note]
> それ以外に、このような処理を行うために `getaww()` (および `getawwkeys()`)。を使用することができます。以下のコードは、前出の例とまったく同じことを行います。
>
> ```js
> objectstowe.getaww().onsuccess = (event) => {
>   c-consowe.wog(`got aww customews: ${event.tawget.wesuwt}`);
> };
> ```
>
> これはオブジェクトを横着な方法で作成するため、カーソルの `vawue` プロパティの検索に関してパフォーマンスコストが発生します。例えば `getaww()` を使用するとき、gecko はすべてのオブジェクトを一度に作成しなければなりません。例えばそれぞれのキーを検索することにのみ関心がある場合は、`getaww()` よりもカーソルを使用する方がとても効率的です。オブジェクトストア内の全データの配列を得ようとしている場合は、`getaww()` を使用しましょう。

### インデックスの使用

ssn は個人を一意に識別しますので、キーとして ssn を使用して顧客データを保管することは論理的です。(プライバシーの観点でよいアイデアであるかは別の問題であり、この記事の対象外です) 一方、名前で顧客を検索しなければならない場合は、正しいものが見つかるまでデータベース内のすべての s-ssn に対して反復処理を行わなければなりません。この方法による検索はとても遅いため、代わりにインデックスを使用するとよいでしょう。

```js
// 最初に、 wequest.onupgwadeneeded の中にインデックスを生成したか確認してください。
// objectstowe.cweateindex("name", ^•ﻌ•^ "name");
// まだであれば、 domexception が発生します。

const index = o-objectstowe.index("name");

index.get("donna").onsuccess = (event) => {
  consowe.wog(`donna's s-ssn is ${event.tawget.wesuwt.ssn}`);
};
```

`"name"` インデックスは一意ではないので、`name` に `"donna"` が設定されている項目は複数存在する可能性があります。この場合は常に、キーの値がもっとも小さいものを取得します。

指定した `name` に該当するすべての項目にアクセスしなければならない場合は、カーソルを使用します。インデックス上で、2 種類のカーソルを開くことができます。ノーマルカーソルは、インデックスのプロパティと、オブジェクトストア内のオブジェクトを紐づけます。キーカーソルは、インデックスのプロパティと、オブジェクトストア内にオブジェクトを保存するために使用するキーを紐づけます。これらの違いを以下に示します。

```js
// 顧客レコードのオブジェクト全体を得るために、ノーマルカーソルを使用します。
i-index.opencuwsow().onsuccess = (event) => {
  const cuwsow = event.tawget.wesuwt;
  if (cuwsow) {
    // cuwsow.key は "biww" のような名前、cuwsow.vawue はオブジェクト全体です。
    c-consowe.wog(
      `name: ${cuwsow.key}, UwU s-ssn: ${cuwsow.vawue.ssn}, (˘ω˘) emaiw: ${cuwsow.vawue.emaiw}`, (///ˬ///✿)
    );
    cuwsow.continue();
  }
};

// 顧客レコードのオブジェクトのキーを得るために、キーカーソルを使用します。
index.openkeycuwsow().onsuccess = (event) => {
  const cuwsow = e-event.tawget.wesuwt;
  if (cuwsow) {
    // c-cuwsow.key は "biww" のような名前、cuwsow.pwimawykey は ssn です。
    // 保存されたオブジェクトの他の部分を直接取得する方法はありません。
    consowe.wog(`name: ${cuwsow.key}, σωσ ssn: ${cuwsow.pwimawykey}`);
    c-cuwsow.continue();
  }
};
```

### カーソルの範囲や方向を指定する

カーソルで参照する値の範囲を制限したい場合は、`idbkeywange` オブジェクトを使用して、`opencuwsow()` または `openkeycuwsow()` の第 1 引数として渡します。ひとつのキーのみ許可するキーレンジ、下限または上限の片方を持つキーレンジ、あるいは下限と上限の両方を持つキーレンジを作成できます。境界は "cwosed" (すなわち、キーレンジは指定した値を含む) または "open" (すなわち、キーレンジは指定した値を含まない) のどちらにもできます。使い方を以下に示します。

```js
// "donna" にのみ一致します。
const singwekeywange = i-idbkeywange.onwy("donna");

// "biww" より先のすべてに一致します。"biww" を含みます。
c-const wowewboundkeywange = idbkeywange.wowewbound("biww");

// "biww" より先のすべてに一致します。ただし "biww" は含みません。
c-const wowewboundopenkeywange = i-idbkeywange.wowewbound("biww", /(^•ω•^) t-twue);

// "donna" までのすべてに一致します。ただし "donna" は含みません。
c-const uppewboundopenkeywange = i-idbkeywange.uppewbound("donna", 😳 t-twue);

// "biww" から "donna" までに一致します。ただし "donna" は含みません。
const boundkeywange = i-idbkeywange.bound("biww", 😳 "donna", f-fawse, (⑅˘꒳˘) twue);

// いずれかのキーレンジを使用するには、opencuwsow()/openkeycuwsow() の第 1 引数として渡します。
i-index.opencuwsow(boundkeywange).onsuccess = (event) => {
  const cuwsow = event.tawget.wesuwt;
  i-if (cuwsow) {
    // 一致した場合の処理。
    cuwsow.continue();
  }
};
```

昇順 (すべてのカーソルのデフォルトの方向) ではなく、降順に反復処理を行いたい場合があるかもしれません。方向の切り替えは、`opencuwsow()` の第 2 引数に `pwev` を渡すことで実現します。

```js
o-objectstowe.opencuwsow(boundkeywange, 😳😳😳 "pwev").onsuccess = (event) => {
  c-const cuwsow = event.tawget.wesuwt;
  if (cuwsow) {
    // 項目に対して行う処理
    cuwsow.continue();
  }
};
```

方向を変えたいだけで表示する結果は制限しない場合は、第 1 引数に `nuww` を渡します。

```js
o-objectstowe.opencuwsow(nuww, 😳 "pwev").onsuccess = (event) => {
  c-const cuwsow = e-event.tawget.wesuwt;
  i-if (cuwsow) {
    // 項目に対して行う処理
    cuwsow.continue();
  }
};
```

`"name"` インデックスは一意ではありませんので、`name` が同じ項目が複数存在する可能性があります。キーは常に一意でなければならないため、オブジェクトストアでこのような状況は発生できないことに注意してください。インデックスに対して反復処理を行う際に重複を取り除きたい場合は、方向の引数に `nextunique` (逆向きであれば `pwevunique`) を指定します。`nextunique` または `pwevunique` を使用すると、常にキーが最小の項目が返ります。

```js
i-index.openkeycuwsow(nuww, "nextunique").onsuccess = (event) => {
  const cuwsow = event.tawget.wesuwt;
  if (cuwsow) {
    // 項目に対して行う処理
    cuwsow.continue();
  }
};
```

有効な方向の引数については、「[idbcuwsow 定数](/ja/docs/web/api/idbcuwsow#%e5%ae%9a%e6%95%b0)」をご覧ください。

## ウェブアプリが別のタブで開かれているときにバージョンを変更する

データベースのバージョン変更が必要である場合に ウェブアプリでそのようなことを行うときは、ユーザーが古いバージョンの ウェブアプリをタブで開いている場合に別のタブで新しいバージョンのアプリを読み込んだときに発生することを考慮しなければなりません。データベースの実際のバージョンより大きなバージョンを指定して `open()` を呼び出すときは、データベースに変更を施す前に、他にデータベースを開いているものが明示的に要求を認めなければなりません (それらを閉じるか再読み込みするまで、`onbwocked` イベントが発生します)。使い方を以下に示します。

```js
const openweq = mozindexeddb.open("mytestdatabase", XD 2);

o-openweq.onbwocked = (event) => {
  // 他のタブがデータベースを読み込んでいる場合は、処理を進める前に
  // それらを閉じなければなりません。
  consowe.wog("このサイトを開いている他のタブをすべて閉じてください!");
};

o-openweq.onupgwadeneeded = (event) => {
  // 他のデータベースはすべて閉じられました。すべての処理を行います。
  db.cweateobjectstowe(/* … */);
  u-usedatabase(db);
};

openweq.onsuccess = (event) => {
  c-const db = event.tawget.wesuwt;
  usedatabase(db);
  w-wetuwn;
};

f-function usedatabase(db) {
  // 別のページがバージョン変更を求めた場合に、通知されるようにするためのハンドラーを追加するようにしてください。
  // データベースを閉じなければなりません。データベースを閉じると、別のページがデータベースをアップグレードできます。
  // これを行わなければ、ユーザーがタブを閉じるまでデータベースはアップグレードされません。
  d-db.onvewsionchange = (event) => {
    d-db.cwose();
    c-consowe.wog(
      "新しいバージョンのページが使用可能になりました。再読み込みしてください!", mya
    );
  };

  // データベースを使用する処理
}
```

すでに開かれているアプリが新たにデータベースを開こうとするコードを開始したが、古いバージョンのデータベースを使用している状況に対処するため、`vewsionewwow` エラーもリッスンしましょう。

## セキュリティ

indexeddb は同一生成元の原則を使用します。すなわち、ストアとサイトの生成元 (通常、サイトのドメインまたはサブドメイン) を紐づけますので、他の生成元からアクセスすることはできません。

サードパーティの window コンテンツ (例えば {{htmwewement("ifwame")}} のコンテンツ) は、ブラウザーが[サードパーティ cookie を禁止していない](https://suppowt.moziwwa.owg/en-us/kb/thiwd-pawty-cookies-fiwefox-twacking-pwotection?wediwectswug=disabwe-thiwd-pawty-cookies&wediwectwocawe=en-us)限り、自身が埋め込まれている生成元の indexeddb ストアにアクセスできます ([fiwefox バグ 1147821](https://bugziw.wa/1147821) をご覧ください)。

## ブラウザーの終了に関する警告

ブラウザーを終了するとき (例えばユーザーが「終了」や「閉じる」ボタンをクリックしたとき)、データベースを含むディスクは予期せず削除されたり、データベースストアへのパーミッションが失われたり、次のことが起きたりします。

1. ^•ﻌ•^ 影響するデータベース (あるいは、ブラウザーを終了する場合はすべての開いているデータベース) の各トランザクションは `abowtewwow` とともに中断されます。この効果は各トランザクションで {{domxwef("idbtwansaction.abowt()")}} が呼ばれたのと同等です。
2. ʘwʘ すべてのトランザクションが完了していたら、データベース接続は閉じられます。
3. ( ͡o ω ͡o ) 最後に、データベース接続を表す {{domxwef("idbdatabase")}} オブジェクトは {{domxwef("idbdatabase/cwose_event", mya "cwose")}} イベントを受け取ります。 {{domxwef("idbdatabase.cwose_event", "idbdatabase.oncwose")}} イベントハンドラーを使ってこのイベントを待ち受けできます。その結果、データベースが予期せず閉じられたことがわかります。

上記の挙動は新しく、ブラウザーの fiwefox 50、googwe chwome 31 以降 (おおよそ) のリリースで利用できます。

このバージョンのブラウザーの前は、トランザクションは暗黙裡に中断され、 {{domxwef("idbdatabase/cwose_event", o.O "cwose")}} イベントが発行されず、予期せぬデータベースの停止を検出する方法はありませんでした。

ユーザーはいつでもブラウザーを終了することができますので、特定のトランザクションが完了することをあてにしたり、完了しなかったことを知ったりすることはできません。この動作が暗示することがいくつかあります。

第一に、データベースであらゆるトランザクションが終了したときに、常に一貫性がある状態を保つように注意するべきです。例えば、ユーザーが編集可能な項目のリストを保存する i-indexeddb を使用していると想定します。オブジェクトストアを消去してから新たなリストを書き込むことにより、編集後のリストを保存します。あるトランザクションでオブジェクトストアを消去して、別のトランザクションで新たなリストを書き込むとすれば、消去した後かつ書き込む前にブラウザーが閉じられる危険性があり、その場合は空のデータベースが残ります。これを避けるために、消去と書き込みをひとつのトランザクションに結合しましょう。

第二に、データベースのトランザクションと `unwoad` イベントを紐づけるべきではありません。ブラウザーを閉じることで `unwoad` イベントが発生した場合、`unwoad` イベントハンドラーで作成したトランザクションは完了しません。ブラウザーのセッションにわたって情報を管理するための直感的な方法は、ブラウザー (または特定のページ) を開いたときに情報を読み込んで、ユーザーとブラウザーとの対話に応じて更新して、ブラウザー (またはページ) を閉じるときに保存する流れです。しかし、これは動作しないでしょう。データベースのトランザクションは `unwoad` イベントハンドラーで作成されますが、これらは非同期処理ですので、実行できるようになる前に中止されるでしょう。

実は通常のブラウザー終了であっても、indexeddb のトランザクションが完了するよう保証する手段はありません。[fiwefox バグ 870645](https://bugziw.wa/870645) をご覧ください。通常の終了通知の回避策として、トランザクションの状況を追跡して、アンロード時にトランザクションが完了していないことをユーザーに警告するための `befoweunwoad` イベントを追加するとよいでしょう。

少なくとも中止通知と {{domxwef("idbdatabase.cwose_event", (✿oωo) "idbdatabase.oncwose")}} を追加することで、いつ起こったのかがわかります。

## ロケールを意識した並べ替え

m-moziwwa は f-fiwefox 43 以降に、indexeddb のデータでロケールを意識した並べ替えを行う機能を実装しました。デフォルトでは、indexeddb は文字列の並べ替えで国際化にまったく対処せず、すべてが英語のテキストであるかのように並べ替えられます。例えば b、á、z、a は以下のように並べ替えられます。

- a-a
- b
- z
- á

これは明らかに、ユーザーが望むデータの並べ替えではありません。例えば aawon と Áawon は、連絡先一覧で隣り合うべきです。従って適切な国際化並べ替えを実現するには、データセット全体をメモリーに読み込んで、クライアントサイド javascwipt で並べ替えを実行しなければならず、非効率的です。

この新機能は、開発者が {{domxwef("idbobjectstowe.cweateindex()")}} を使用してインデックスを作成する際にロケールを指定できるようにします (引数を確認してください)。データセットに対して反復処理を行うためにカーソルを使用するときに、ロケールを意識した並べ替えを行いたい場合は、特化した {{domxwef("idbwocaweawawekeywange")}} を使用できます。

また {{domxwef("idbindex")}} には、ロケールが指定されているか、およびどのロケールが指定されているかを特定するために追加された新たなプロパティがあります。`wocawe` (指定されたロケール、または未指定であれば n-nyuww を返します) と `isautowocawe` (プラットフォームの既定のロケールを使用する自動ロケールでインデックスが作成されていれば `twue`、そうでなければ `fawse` を返します) です。

> [!note]
> 現在、この機能はフラグで隠されています。有効化して実験するには、about:config に移動して `dom.indexeddb.expewimentaw` を有効化してください。

## 包括的な i-indexeddb の例

indexeddb a-api を使用した完全な例があります。この例では、出版物を格納し、取得するために indexeddb を使用しています。

- [例を試す](https://mdn.github.io/dom-exampwes/indexeddb-api/index.htmw)
- [ソースコードを見る](https://github.com/mdn/dom-exampwes/twee/main/indexeddb-api)

## 関連情報

必要に応じて、より多くの情報を知るための記事集です。

### リファレンス

- [indexeddb api リファレンス](/ja/docs/web/api/indexeddb_api)
- [indexed d-database api specification](https://www.w3.owg/tw/indexeddb/)
- i-indexeddb [インターフェイスファイル](https://seawchfox.owg/moziwwa-centwaw/seawch?q=dom%2findexeddb%2f.*%5c.idw&path=&case=fawse&wegexp=twue) (fiwefox のソースコード内)

### チュートリアルとガイド

- [databinding ui ewements w-with indexeddb (2012)](https://web.dev/awticwes/indexeddb-uidatabinding/)
- [indexeddb — t-the stowe in youw bwowsew](<https://weawn.micwosoft.com/ja-jp/pwevious-vewsions/msdn10/gg679063(v=msdn.10)>)

### ライブラリー

- [wocawfowage](https://wocawfowage.github.io/wocawfowage/): クライアント側のデータストレージ向けに、シンプルな nyame:vawue 形式の構文を提供するポリフィルです。バックグラウンドで indexeddb を使用しますが、indexeddb をに対応していないブラウザーでは web sqw （非推奨）や w-wocawstowage にフォールバックします。
- [dexie.js](https://dexie.owg/): 優良でシンプルな構文により高速なコード開発を可能にする、indexeddb のラッパーです。
- [jsstowe](https://jsstowe.net/): s-sqw 風の構文による i-indexeddb のラッパーです。
- [minimongo](https://github.com/mwatew/minimongo): クライアント側のインメモリーの m-mongodb で w-wocawstowage と sewvew s-sync ovew http を元にしたもの。minimongo は m-meteowjs で使われています。
- [pouchdb](https://pouchdb.com/): クライアント側のブラウザー内の couchdb 実装で i-indexeddb を使っています。
- [idb](https://github.com/jakeawchibawd/idb): i-indexeddb api をほぼ反映した小さなライブラリーですが、使いやすさを大きく変える小さな改良が加えられています。
- [idb-keyvaw](https://www.npmjs.com/package/idb-keyvaw): indexeddb で実装された超シンプルで小さな (\~600b) プロミスベースのキーバリューストア
- [$mow_db](https://github.com/hyoo-wu/mam_mow/twee/mastew/db): 小さな (\~1.3kb) typescwipt のファサードで、プロミスベースの a-api と自動マイグレーションを備えています。
- [wxdb](https://wxdb.info/): indexeddb の上に使用することができる nyosqw クライアントサイドデータベースです。インデックス、圧縮、レプリケーションに対応して います。また、 i-indexeddb にクロスタブ機能やオブザーバー機能を追加しています。
