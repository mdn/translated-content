---
title: "Express チュートリアル Part 6: フォームの操作"
short-title: "6: フォームの操作"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/forms
l10n:
  sourceCommit: d775e1249487f1a7ab9a8a031c70ca71bc892d63
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data", "Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

このチュートリアルでは、Pug を使用して Express で HTML フォームを操作する方法、特にデータベースから文書を作成、更新、削除するためのフォームを作成する方法を説明します。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        <a href="/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data">Express チュートリアル Part 5: ライブラリーデータの表示</a>を含む、これまでのチュートリアルをすべて完了していること。
      </td>
    </tr>
    <tr>
      <th scope="row">目標:</th>
      <td>
        ユーザーからデータを取得するためのフォームを作成し、そのデータでデータベースを更新する方法を理解すること。
      </td>
    </tr>
  </tbody>
</table>

## 概要

[HTML フォーム](/ja/docs/Learn_web_development/Extensions/Forms)とは、サーバーに送信するための情報をユーザーから収集できる、ウェブページ上の 1 つ以上のフィールドやウィジェットのグループです。テキストボックス、チェックボックス、ラジオボタン、日付選択など、さまざまな種類のデータを入力するのに適したフォーム入力が用意されているので、フォームを使えばユーザーからの入力を柔軟に収集できます。また、フォームはサーバーとデータを共有するための比較的保護された方法でもあり、クロスサイトリクエストフォージェリー保護を使って `POST` リクエストでデータを送信できます。

フォームを扱うのは複雑です。開発者はフォーム用の HTML を書き、サーバー上で（場合によってはブラウザー内でも）入力データを検証し、適切に無害化する必要があります。また、無効なフィールドをユーザーに知らせるためにエラーメッセージとともにフォームを再表示し、送信が成功したときにデータを処理し、最後に成功を示す何らかの方法でユーザーに応答しなければなりません。

このチュートリアルでは、上記の操作を Express で実行する方法を紹介します。その過程で、地域図書館のウェブサイトを拡張し、ユーザーが図書館のアイテムを作成、編集、削除できるようにします。

> [!NOTE]
> 特定のルートを認証または認可されたユーザーに制限する方法はまだ扱っていないため、現時点ではどのユーザーでもデータベースに変更を加えることができます。

### HTML フォーム

最初に[HTML フォーム](/ja/docs/Learn_web_development/Extensions/Forms)の簡単な概要を説明します。ある「チーム」の名前を入力するための単一のテキストフィールドと、それに関連するラベルを持つシンプルな HTML フォームを考えてみましょう。

![HTML フォームの単純な名前フィールドの例](form_example_name_field.png)

フォームは HTML で `<form>...</form>` タグ内の要素の集合として定義され、`type="submit"` の `input` 要素を少なくとも 1 つ含みます。

```html
<form action="/team_name_url/" method="post">
  <label for="team_name">名前を入力してください: </label>
  <input
    id="team_name"
    type="text"
    name="name_field"
    value="デフォルトのチーム名。" />
  <input type="submit" value="OK" />
</form>
```

ここではチーム名を入力するためのテキストフィールドを 1 つだけ含んでいますが、フォームは他の入力要素とそれに関連したラベルをいくつでも含むことができます。フィールドの `type` 属性は、どのような種類のウィジェットが表示されるかを定義します。フィールドの `name` と `id` は JavaScript/CSS/HTML でフィールドを識別するために使われ、`value` はフィールドが最初に表示されるときの初期値を定義します。対応するチームのラベルは `label` タグを使用して指定され（上記の「名前を入力してください」を参照）、`for` フィールドには関連する `input` の `id` 値が含まれます。

`submit` input は、デフォルトではボタンとして表示されます。ユーザーはこのボタンを押して、他の input 要素に含まれるデータをサーバーにアップロードできます（この例では `team_name` だけです）。フォームの属性は、データの送信に使用する HTTP の `method` と、サーバー上のデータの送信先 (`action`) を定義します。

- `action`: フォームが送信されたときに、処理のためにデータが送信されるリソースや URL です。これが設定されていない場合（または空の文字列が設定されている場合）、フォームは現在のページ URL に戻って送信されます。
- `method`: データを送信するために使用される HTTP メソッドで、`POST` または `GET` です。
  - `POST` メソッドは、データによってサーバーのデータベースが変更される場合に常に使用するべきです。クロスサイトリクエストフォージェリー攻撃に対する耐性を高めることができるためです。
  - `GET` メソッドは、ユーザーデータを変更しないフォーム（検索フォームなど）にのみ使用してください。URL をブックマークや共有できるようにしたい場合におすすめです。

### フォーム処理工程

フォームの処理には、モデルに関する情報を表示するために学んだのと同じ手法をすべて使用します。ルートはリクエストをコントローラー関数に送り、コントローラー関数はモデルからのデータの読み取りを含む必要なデータベース操作を実行し、HTML ページを生成して返します。さらに複雑になるのは、サーバーがユーザーから提供されたデータを処理し、問題があればエラー情報とともにフォームを再表示する必要があることです。

フォームを含むページのリクエスト（緑色で示されている）から始まる、フォームリクエストの処理のフローチャートを下記に示します。

![ウェブサーバーにおけるフォームリクエスト処理のフローチャート。ブラウザーが HTTP GET リクエストでフォームを含むページを要求し、サーバーは空のデフォルトフォームを作成して返します。ユーザーがフォームに入力して HTTP POST で送信すると、サーバーは受信データを検証します。データが無効な場合、サーバーは入力データとエラーメッセージを含むフォームを再作成して返し、ユーザーが修正して再送信すると、再び検証します。データが有効な場合、サーバーは必要な操作を実行し、ユーザーを成功時の URL にリダイレクトします。](web_server_form_handling.png)

上の図のように、フォーム処理コードが行う必要のある主な操作は次のとおりです。

1. ユーザーが最初に要求したときにデフォルトのフォームを表示します。
   - フォームには空欄のフィールドが含まれる場合（新しいレコードを作成している場合など）と、初期値があらかじめ入力される場合（レコードを変更している場合や、有用なデフォルトの初期値がある場合など）があります。

2. ユーザーから送信されたデータを、通常は HTTP `POST` リクエストで受信します。
3. データを検証し、無害化します。
4. データが無効な場合は、ユーザーが入力した値と問題のあるフィールドのエラーメッセージをフォームに再表示します。
5. すべてのデータが有効な場合、必要なアクションを実行します（例：データベースにデータを保存する、通知メールを送信する、検索結果を返す、ファイルをアップロードするなど）。
6. すべてのアクションが完了したら、ユーザーを別のページにリダイレクトします。

多くの場合、フォーム処理コードは、フォームの初期表示のための `GET` ルートと、フォームデータの検証と処理のための同じパスへの `POST` ルートを使用して実装されています。これがこのチュートリアルで使用する方法です。

Express 自体はフォーム操作に特化した機能を提供していませんが、ミドルウェアを使用してフォームからの `POST` や `GET` 引数を処理したり、それらの値を検証・無害化したりできます。

### 検証と無害化

フォームからのデータは、保存する前に検証し、無害化する必要があります。

- 検証では、入力された値が各フィールドに対して適切であるか（正しい範囲、形式など）、およびすべての必須フィールドに値が提供されているかを確認します。
- 無害化では、悪意のあるコンテンツをサーバーに送信するために使用される可能性のあるデータ内の文字を削除または置換します。

このチュートリアルでは、広く使われている [express-validator](https://www.npmjs.com/package/express-validator)<sup>(英語)</sup> モジュールを使ってフォームデータの検証と無害化を行います。

#### インストール

プロジェクトのルートで以下のコマンドを実行してモジュールをインストールします。

```bash
npm install express-validator
```

#### express-validator の使用

> [!NOTE]
> GitHub の [express-validator](https://express-validator.github.io/docs/#basic-guide)<sup>(英語)</sup> ガイドでは、API の概要を分かりやすく説明しています。[スキーマの検証](https://express-validator.github.io/docs/guides/schema-validation/)<sup>(英語)</sup>や[独自のバリデーターの作成](https://express-validator.github.io/docs/guides/customizing/#custom-validators-and-sanitizers)<sup>(英語)</sup>を含め、すべての機能を把握するために読むことをお勧めします。ここでは、地域図書館に有用な一部の機能だけを取り上げます。

コントローラーでバリデーターを使用するには、下記のように [express-validator](https://www.npmjs.com/package/express-validator)<sup>(英語)</sup> モジュールからインポートする関数を指定します。

```js
import { body, validationResult } from "express-validator";
```

多くの関数が用意されており、リクエスト引数、ボディ、ヘッダー、Cookie などのデータを検査して無害化することも、一度にすべてのデータを検査して無害化することもできます。このチュートリアルでは、先ほどインポートした `body` と `validationResult` 関数を主に使用します。

関数は次のように定義されています。

- [`body(fields, message)`](https://express-validator.github.io/docs/api/check/#body)<sup>(英語)</sup>: 検証や無害化を行うリクエストボディ (`POST` 引数) のフィールドの集合と、テストに失敗した場合に表示できる省略可能なエラーメッセージを指定します。検証と無害化の条件は `body()` メソッドにチェーンしてつなげます。

  例えば、下記の行ではまず、"name" フィールドを検査し、検証エラー時にはエラーメッセージ "Empty name" を設定することを定義します。次に、無害化メソッド `trim()` を呼び出して文字列の先頭と末尾から空白を除去し、`isLength()` で結果の文字列が空でないことを検査します。最後に `escape()` を呼び出し、JavaScript のクロスサイトスクリプティング攻撃に使用される可能性のある HTML 文字をエスケープします。

  ```js
  [
    // …
    body("name", "Empty name").trim().isLength({ min: 1 }).escape(),
    // …
  ];
  ```

  このテストは、年齢フィールドが有効な日付であるかを検査し、`optional()` を使用して、null や空の文字列では検証に失敗しないように指定します。

  ```js
  [
    // …
    body("age", "Invalid age")
      .optional({ values: "falsy" })
      .isISO8601()
      .toDate(),
    // …
  ];
  ```

  異なるバリデーターをチェーンしてつなげ、前のバリデーターが偽の場合に表示されるメッセージを追加することもできます。

  ```js
  [
    // …
    body("name")
      .trim()
      .isLength({ min: 1 })
      .withMessage("Name empty.")
      .isAlpha()
      .withMessage("Name must be alphabet letters."),
    // …
  ];
  ```

- [`validationResult(req)`](https://express-validator.github.io/docs/api/validation-result/#validationresult)<sup>(英語)</sup>: リクエストから検証結果を取得し、エラーを結果オブジェクトの形で利用できるようにします。下記のように、別のコールバック内で呼び出します。

  ```js
  async (req, res, next) => {
    // リクエストから検証エラーを抽出
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      // エラーがある場合、無害化した値とエラーメッセージでフォームを再描画
      // errors.array() を使用してエラーメッセージを配列で取得可能
    } else {
      // フォームのデータは有効
    }
  };
  ```

  検証結果の `isEmpty()` メソッドを使用してエラーの有無を確認し、`array()` メソッドでエラーメッセージの集合を取得します。詳しくは[検証エラーの処理](https://express-validator.github.io/docs/guides/getting-started/#handling-validation-errors)<sup>(英語)</sup>を参照してください。

検証と無害化のチェーンは、Express のルートハンドラーに渡すミドルウェアです（ここではコントローラーを介して間接的に渡します）。ミドルウェアが実行されると、それぞれのバリデーターと無害化処理が指定された順に実行されます。

下記で地域図書館のフォームを実装する際に、実際の例をいくつか取り上げます。

### フォームの設計

図書館のモデルの多くは関連しているか、互いに依存しています。例えば、`Book` には `Author` が*必要*であり、1 つ以上の `Genre` を持つ*場合もあります*。このため、ユーザーが次のような操作を望む場合に、どう処理するかという問題があります。

- 関連するオブジェクトがまだ存在しない場合にオブジェクトを作成する（例えば、著者オブジェクトが定義されていない書籍）。
- 別のオブジェクトからまだ使用されているオブジェクトを削除する（例えば、`Book` からまだ使用されている `Genre` を削除する）。

このプロジェクトでは、フォームでできることを次のように限定して実装を簡素化します。

- 既存のオブジェクトを使用してオブジェクトを作成する（そのため、ユーザーは `Book` オブジェクトを作成する前に、必要な `Author` と `Genre` のインスタンスを作成する必要があります）。
- 他のオブジェクトから参照されていないオブジェクトを削除する（例えば、関連するすべての `BookInstance` オブジェクトが削除されるまで `Book` を削除することはできません）。

> [!NOTE]
> より柔軟な実装では、新しいオブジェクトを作成するときに依存するオブジェクトを作成したり、任意のオブジェクトをいつでも削除したりできるようにすることも考えられます（例えば、依存するオブジェクトを削除する方法や、削除するオブジェクトへの参照をデータベースから除去する方法があります）。

### ルート

フォーム処理コードを実装するには、同じ URL パターンを持つ 2 つのルートが必要です。最初のルート (`GET`) は、オブジェクトを作成するための新しい空のフォームを表示するために使用します。2 つ目のルート (`POST`) は、ユーザーが入力したデータを検証し、データが有効な場合は情報を保存して詳細ページにリダイレクトし、無効な場合はエラーとともにフォームを再表示するために使用します。

すべてのモデルの作成ページ用ルートは、[以前のチュートリアル](/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes)ですでに **routes/catalog.js** に作成しました。例えば、ジャンルのルートを下記に示します。

```js
// ジャンルの作成用 GET リクエスト。ジャンルを表示するルート（id を使用）より前に置く必要がある
router.get("/genre/create", genreController.genreCreateGet);

// ジャンルの作成用 POST リクエスト
router.post("/genre/create", genreController.genreCreatePost);
```

## Express フォームのサブ記事

次のサブ記事では、サンプルアプリケーションに必要なフォームを追加する手順を説明します。それぞれを読み、作業してから次に進むよう、順番に取り組んでください。

1. [ジャンル作成フォーム](/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_genre_form) — `Genre` オブジェクトを作成するページを定義します。
2. [著者作成フォーム](/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_author_form) — `Author` オブジェクトを作成するページを定義します。
3. [書籍作成フォーム](/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_book_form) — `Book` オブジェクトを作成するページとフォームを定義します。
4. [書籍インスタンス作成フォーム](/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_BookInstance_form) — `BookInstance` オブジェクトを作成するページとフォームを定義します。
5. [著者削除フォーム](/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Delete_author_form) — `Author` オブジェクトを削除するページを定義します。
6. [書籍更新フォーム](/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Update_Book_form) — `Book` オブジェクトを更新するページを定義します。

## 自分で挑戦してみる

`Book`、`BookInstance`、`Genre` モデルの削除ページを実装し、著者削除ページと同じように、関連する詳細ページからリンクしてください。ページは同じ設計方針に従う必要があります。

- 他のオブジェクトからそのオブジェクトへの参照がある場合は、それらのオブジェクトとともに、一覧に表示されたオブジェクトが削除されるまでこのレコードを削除できないことを示す注意書きを表示する必要があります。
- 他のオブジェクトからの参照がない場合は、ビューで削除を促す必要があります。ユーザーが **Delete** ボタンを押したら、レコードを削除します。

ヒントをいくつか示します。

- `Genre` の削除は `Author` の削除と同じです。どちらのオブジェクトも `Book` が依存しているためです（そのため、いずれの場合も関連する書籍が削除されてからでないと削除できません）。
- `Book` の削除も同様ですが、最初に関連する `BookInstance` がないことを確認する必要があります。
- `BookInstance` の削除は、依存するオブジェクトがないため最も簡単です。この場合は、関連するレコードを検索して削除するだけです。

`BookInstance`、`Author`、`Genre` モデルの更新ページを実装し、書籍更新ページと同じように、関連する詳細ページからリンクしてください。

ヒントをいくつか示します。

- 先ほど実装した書籍更新ページが最も難しいものです。同じパターンを他のオブジェクトの更新ページにも使用できます。
- `Author` の没年月日と生年月日のフィールド、および `BookInstance` の `due_back` フィールドは、フォームの日付入力欄に入力するには形式が適切ではありません（日付入力欄には "YYYY-MM-DD" 形式のデータが必要です）。最も簡単な回避方法は、日付を適切な形式に整える新しい仮想プロパティを定義し、関連するビューテンプレートでこのフィールドを使用することです。
- 行き詰まった場合は、[こちらのサンプル](https://github.com/mdn/express-locallibrary-tutorial)<sup>(英語)</sup>に更新ページの例があります。

## まとめ

_Express_、Node、npm のサードパーティパッケージは、ウェブサイトにフォームを追加するために必要なものをすべて提供します。この記事では、_Pug_ を使用してフォームを作成する方法、_express-validator_ を使用して入力を検証・無害化する方法、およびデータベース内のレコードを追加、削除、変更する方法を学びました。

これで、基本的なフォームとフォーム処理コードを自分の Node ウェブサイトに追加する方法を理解したはずです。

## 関連情報

- [express-validator](https://www.npmjs.com/package/express-validator)<sup>(英語)</sup>（npm ドキュメント）。

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data", "Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
