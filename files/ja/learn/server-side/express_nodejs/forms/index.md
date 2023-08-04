---
title: "Express チュートリアル Part 6: フォームの操作"
slug: Learn/Server-side/Express_Nodejs/forms
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/Displaying_data", "Learn/Server-side/Express_Nodejs/deployment", "Learn/Server-side/Express_Nodejs")}}

このチュートリアルでは、Pug を使用して Express で HTML フォームを操作する方法、特にデータベースからドキュメントを作成、更新、削除するためのフォームを作成する方法を説明します。

| 前提条件: | [Express チュートリアル Part 5: ライブラリデータの表示](/ja/docs/Learn/Server-side/Express_Nodejs/Displaying_data)など、これまでのチュートリアルのトピックをすべて完了してください。 |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 目標:     | ユーザからデータを取得するためのフォームの作成方法を理解し、このデータでデータベースを更新する。                                                                                     |

## 概要

[HTML フォーム](/ja/docs/Web/Guide/HTML/Forms)とは、サーバーに送信するためにユーザーから情報を収集するために使用できる Web ページ上の 1 つ以上のフィールド/ウィジェットのグループのことです。テキストボックス、チェックボックス、ラジオボタン、日付選択など、さまざまなタイプのデータを入力するのに適したフォーム入力が用意されているので、フォームを使えばユーザーからの入力を柔軟に収集することが出来ます。また、フォームはサーバとデータを共有するための比較的安全な方法でもあり、クロスサイトリクエストフォージェリ保護機能を使って POST リクエストでデータを送信することができます。

フォームを扱うのは複雑です。開発者はフォーム用の HTML を書き、サーバー上で入力されたデータを検証して特殊文字を置換し、無効なフィールドをユーザーに知らせるためにエラーメッセージを表示してフォームを再度表示し、送信が成功したときにデータを処理し、最後に成功を示す何らかの方法でユーザーに応答しなければなりません。

このチュートリアルでは、上記の操作を Express で実行する方法を紹介します。途中で、サンプルとして地域図書館のウェブサイトを拡張して、ユーザーがライブラリからアイテムを作成、編集、削除できるようにします。

> **メモ:**サンプルとして準備されている地域図書館のウェブサイトは認証済みユーザのみに閲覧を制限する方法については書いてないので、現時点ではどのユーザでもデータベースに変更を加えることができます。

### HTML フォーム

最初に[HTML フォーム](/ja/docs/Web/Guide/HTML/Forms)の簡単な概要を説明します。ある「チーム」の名前とそれに関連するラベルを入力するための単一のテキストフィールドを持つシンプルな HTML フォームを考えてみましょう。

![Simple name field example in HTML form](form_example_name_field.png)

フォームは HTML で `<form>...</form>` タグ内の要素の集合として定義され、`type="submit"` の `input` 要素を少なくとも 1 つ含みます。

```html
<form action="/team_name_url/" method="post">
  <label for="team_name">名前を入力してください: </label>
  <input
    id="team_name"
    type="text"
    name="name_field"
    value="デフォルトのチーム名." />
  <input type="submit" value="OK" />
</form>
```

ここではチーム名を入力するための 1 つのテキストフィールドだけを含んでいますが、フォームは他の入力要素とそれに関連したラベルをいくつでも含むことができます。フィールドの`type`属性はどのような種類のウィジェットが表示されるかを定義します。フィールドの`name`と`id`は JavaScript/CSS/HTML でフィールドを識別するために使われ、`value`はフィールドが最初に表示されるときの初期値を定義します。マッチングするチームのラベルは、`label`タグ（上記の「名前を入力してください」を参照）を使用して指定され、`for`フィールドには関連する`input`タグの`id`値が含まれます。

`submit` input タグは標準ではボタンとして表示されます。このボタンは、他の`input`要素に含まれるデータをサーバーにアップロードするためにユーザーが押すことができます(この例だと`team_name`だけ)。フォーム属性はデータを送信するために使用される HTTP `method`とサーバー上のデータの送信先(`action`)を定義します。

- `action`: フォームが送信されたときに処理のためにデータが送信される URL です。これが設定されていない場合(または空の文字列が設定されている場合)、フォームは現在のページ URL に戻って送信されます。
- `method`: データを送信するために使用される HTTP メソッド: `POST` または `GET`.

  - `POST`メソッドは、データがサーバのデータベースに変更をもたらす場合は、常に使用されるべきです。なぜならクロスサイトフォージェリ要求攻撃に対してより耐性を持たせることができるからです。
  - `GET`メソッドは、ユーザーデータを変更しないフォーム（検索フォームなど）にのみ使用してください。URL をブックマークや共有できるようにしたい場合におすすめです。

### フォーム処理工程

フォームの処理はモデルに関する情報を表示するために学んだのと同じテクニックをすべて使います: ルートはリクエストをコントローラ関数に送り、モデルからのデータの読み込みを含む必要なデータベースアクションを実行し、HTML ページを生成して返します。さらに複雑なのは、サーバーがユーザーによって提供されたデータを処理し、何か問題があればエラー情報とともにフォームを再表示する必要があるということです。

フォームを含むページのリクエスト（緑色で示されている）から始まる、フォームリクエストを処理するためのプロセスフローチャートを以下に示す。![](Web%20server%20form%20handling.png)

上の図のように、フォーム処理のコードが必要とする主なものは以下の通りです。

1. ユーザーが最初に要求したときにデフォルトのフォームを表示します。

   - フォームには空白のフィールドが含まれていたり (新しいレコードを作成している場合など)、初期値があらかじめ入力されていたり (レコードを変更している場合や、デフォルトの初期値がある場合など) します。

2. ユーザーから送信されたデータを、通常は HTTP `POST`リクエストで受信します。
3. データを検証し、ハッキング防止のために特殊文字を置換(サニタイズ)します。
4. データが無効な場合は、ユーザーが入力した値と問題のあるフィールドのエラーメッセージをフォームに再表示します。
5. すべてのデータが有効な場合、必要なアクションを実行します（例：データベースにデータを保存する、通知メールを送信する、検索結果を返す、ファイルをアップロードするなど）。
6. すべてのアクションが完了したら、ユーザーを別のページにリダイレクトします。

多くの場合、フォーム処理コードは、フォームの初期表示のための`GET`ルートと、フォームデータの検証と処理のための同じパスへの`POST`ルートを使用して実装されています。これがこのチュートリアルで使用されるアプローチです。

Express 自体はフォーム操作のための特別なサポートを提供していませんが、ミドルウェアを使用してフォームからの `POST` や `GET`パラメータを処理したり、それらの値を検証/サニタイズしたりすることができます。

### 検証とサニタイズ

フォームからのデータが保存される前に、それは検証され、サニタイズされなければなりません。

- 入力された値が各フィールドに対して適切であるか（正しい範囲、フォーマットなど）、およびすべての必須フィールドに対して値が提供されているかどうかを確認します。
- サニタイズは、悪意のあるコンテンツをサーバーに送信するために使用される可能性のあるデータ内の文字を削除したり、置換したりします。

このチュートリアルでは、人気のある express-validator モジュールを使ってフォームデータの検証とサニタイズを行います。

#### インストール

プロジェクトのルートで以下のコマンドを実行してモジュールをインストールします。

```bash
npm install express-validator
```

#### express-validator の使用

> **メモ:** Github の[express-validator](https://github.com/ctavan/express-validator#express-validator)ガイドに API の概要が書かれています。(カスタムバリデータの作成を含む) すべての機能を知るには、これを読むことをお勧めします。以下では、サンプルの「地域図書館」にとって有用なサブセットだけを取り上げます。

コントローラでバリデータを使うには、以下のように **'express-validator/check'** と **'express-validator/filter'**モジュールから使いたい関数を要求(require)しなければなりません。

```js
const { body, validationResult } = require("express-validator/check");
const { sanitizeBody } = require("express-validator/filter");
```

多くの関数が用意されており、リクエストパラメータ、body、ヘッダー、Cookie などのデータをチェックしてサニタイズすることができますし、一度にすべてのデータをチェックしてサニタイズすることもできます。このチュートリアルでは、主に`body`、`sanitizeBody`、`validationResult`を使用します。

機能は以下のように定義されています。

- [`body(fields[, message])`](https://github.com/ctavan/express-validator#bodyfields-message): テストに失敗した場合に表示されるオプションのエラーメッセージとともに検証するリクエストボディ (`POST`パラメータ) のフィールドのセットを指定します。検証基準は、`body()`メソッドにデイジーチェーンで接続されています。例えば、以下の最初のチェックでは「name」フィールドが空でないことをテストし、空の場合は「Empty name」というエラーメッセージを設定します。2 番目のテストでは、年齢フィールドが有効な日付であるかどうかをチェックし、`optional()` を使用して null や空の文字列を指定しても検証に失敗しないようにしています。

  ```js
  body('name', 'Empty name').isLength({ min: 1 }),
  body('age', 'Invalid age').optional({ checkFalsy: true }).isISO8601(),
  ```

  また、異なるバリデータをデイジーチェーン化して、前のバリデータが真の場合に表示されるメッセージを追加することもできます。

  ```js
  body('name').isLength({ min: 1 }).trim().withMessage('Name empty.')
      .isAlpha().withMessage('Name must be alphabet letters.'),
  ```

  > **メモ:** また、上記のように `trim()` のようなインラインサニタイザーを追加することもできます。しかし、ここで適用されるサニタイザは検証ステップにのみ適用されます。最終的な出力をサニタイザ処理したい場合は、以下のように別のサニタイザメソッドを使用する必要があります。

- [`sanitizeBody(fields)`](https://github.com/ctavan/express-validator#sanitizebodyfields): サニタイズするフィールドを指定します。サニタイズ操作は、このメソッドにデイジーチェーン接続されます。例えば、以下の `escape()` サニタイズ操作は、JavaScript のクロスサイトスクリプティング攻撃で使用される可能性のある HTML 文字（例えば「'」、「"」、「&」など）を name 変数から削除します。

  ```js
  sanitizeBody('name').trim().escape(),
  sanitizeBody('date').toDate(),
  ```

- [`validationResult(req)`](https://github.com/ctavan/express-validator#validationresultreq): Runs the validation, making errors available in the form of a `validation` result object. This is invoked in a separate callback, as shown below:

  ```js
  (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      // There are errors. Render form again with sanitized values/errors messages.
      // Error messages can be returned in an array using `errors.array()`.
    } else {
      // Data from form is valid.
    }
  };
  ```

  We use the validation result's `isEmpty()` method to check if there were errors, and its `array()` method to get the set of error messages. See the [Validation Result API](https://github.com/ctavan/express-validator#validation-result-api) for more information.

The validation and sanitization chains are middleware that should be passed to the Express route handler (we do this indirectly, via the controller). When the middleware runs, each validator/sanitizer is run in the order specified.

We'll cover some real examples when we implement the _LocalLibrary_ forms below.

### Form design

Many of the models in the library are related/dependent—for example, a `Book` _requires_ an `Author`, and _may_ also have one or more `Genres`. This raises the question of how we should handle the case where a user wishes to:

- Create an object when its related objects do not yet exist (for example, a book where the author object hasn't been defined).
- Delete an object that is still being used by another object (so for example, deleting a `Genre` that is still being used by a `Book`).

For this project we will simplify the implementation by stating that a form can only:

- Create an object using objects that already exist (so users will have to create any required `Author` and `Genre` instances before attempting to create any `Book` objects).
- Delete an object if it is not referenced by other objects (so for example, you won't be able to delete a `Book` until all associated `BookInstance` objects have been deleted).

> **メモ:** A more "robust" implementation might allow you to create the dependent objects when creating a new object, and delete any object at any time (for example, by deleting dependent objects, or by removing references to the deleted object from the database).

### Routes

In order to implement our form handling code, we will need two routes that have the same URL pattern. The first (`GET`) route is used to display a new empty form for creating the object. The second route (`POST`) is used for validating data entered by the user, and then saving the information and redirecting to the detail page (if the data is valid) or redisplaying the form with errors (if the data is invalid).

We have already created the routes for all our model's create pages in **/routes/catalog.js** (in a [previous tutorial](/ja/docs/Learn/Server-side/Express_Nodejs/routes)). For example, the genre routes are shown below:

```js
// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
router.get("/genre/create", genre_controller.genre_create_get);

// POST request for creating Genre.
router.post("/genre/create", genre_controller.genre_create_post);
```

## Express forms subarticles

The following sub articles will take us through the process of adding the required forms to our example application. You need to read and work through each one in turn, before moving on to the next one.

1. [Create Genre form](/ja/docs/Learn/Server-side/Express_Nodejs/forms/Create_genre_form) — Defining a page to create `Genre` objects.
2. [Create Author form](/ja/docs/Learn/Server-side/Express_Nodejs/forms/Create_author_form) — Defining a page to create `Author` objects.
3. [Create Book form](/ja/docs/Learn/Server-side/Express_Nodejs/forms/Create_book_form) — Defining a page/form to create `Book` objects.
4. [Create BookInstance form](/ja/docs/Learn/Server-side/Express_Nodejs/forms/Create_BookInstance_form) — Defining a page/form to create `BookInstance` objects.
5. [Delete Author form](/ja/docs/Learn/Server-side/Express_Nodejs/forms/Delete_author_form) — Defining a page to delete `Author` objects.
6. [Update Book form](/ja/docs/Learn/Server-side/Express_Nodejs/forms/Update_Book_form) — Defining page to update `Book` objects.

## Challenge yourself

Implement the delete pages for the `Book`, `BookInstance`, and `Genre` models, linking them from the associated detail pages in the same way as our _Author delete_ page. The pages should follow the same design approach:

- If there are references to the object from other objects, then these other objects should be displayed along with a note that this record can't be deleted until the listed objects have been deleted.
- If there are no other references to the object then the view should prompt to delete it. If the user presses the **Delete** button, the record should then be deleted.

A few tips:

- Deleting a `Genre` is just like deleting an `Author` as both objects are dependencies of `Book` (so in both cases you can delete the object only when the associated books are deleted).
- Deleting a `Book` is also similar, but you need to check that there are no associated `BookInstances`.
- Deleting a `BookInstance` is the easiest of all because there are no dependent objects. In this case, you can just find the associated record and delete it.

Implement the update pages for the `BookInstance`, `Author`, and `Genre` models, linking them from the associated detail pages in the same way as our _Book update_ page.

A few tips:

- The _Book update page_ we just implemented is the hardest! The same patterns can be used for the update pages for the other objects.
- The `Author` date of death and date of birth fields and the `BookInstance` due_date field are the wrong format to input into the date input field on the form (it requires data in form "YYYY-MM-DD"). The easiest way to get around this is to define a new virtual property for the dates that formats the dates appropriately, and then use this field in the associated view templates.
- If you get stuck, there are examples of the update pages in [the example here](https://github.com/mdn/express-locallibrary-tutorial).

## まとめ

NPM の Express、Node、およびサードパーティのパッケージは、Web サイトにフォームを追加するために必要なすべてを提供します。この記事では、Pug を使用してフォームを作成する方法、express-validator を使用して入力を検証およびサニタイズする方法、およびデータベース内のレコードを追加、削除、および変更する方法を学びました。

これで、基本的なフォームとフォーム処理コードを自分の Node Web サイトに追加する方法を理解したはずです。

## あわせて参照

- [express-validator](https://www.npmjs.com/package/express-validator) (npm ドキュメント).

{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/Displaying_data", "Learn/Server-side/Express_Nodejs/deployment", "Learn/Server-side/Express_Nodejs")}}
