---
title: フォームデータの送信
slug: Learn/Forms/Sending_and_retrieving_form_data
l10n:
  sourceCommit: 994af9536bab4117b160cf29d61acf2489f27eb0
---

{{LearnSidebar}}{{PreviousMenu("Learn/Forms/Form_validation", "Learn/Forms")}}

フォームがクライアント側での検証が終わったら、次はフォームの送信です。前の記事では検証を扱ったので、送信する準備はできています。この記事では、ユーザーがフォームを送信したときに何が起こるか、つまりデータがどこへ行くのか、そこに来たときにどう扱うのかを見ます。また、フォームデータの送信に関連するセキュリティの考慮事項のいくつかも見てみます。

<table>
  <tbody>
    <tr>
      <th scope="row">前提知識:</th>
      <td>
        基本的なコンピューターリテラシー、
        <a href="/ja/docs/Learn/HTML/Introduction_to_HTML"
          >HTML の理解</a
        >、基本的な
        <a href="/ja/docs/Web/HTTP/Basics_of_HTTP">HTTP</a> および
        <a href="/ja/docs/Learn/Server-side/First_steps"
          >サーバーサイドプログラミング</a
        >の知識。
      </td>
    </tr>
    <tr>
      <th scope="row">目標:</th>
      <td>
        フォームデータが送信されたら何が起こるかを、データがサーバー上でどのように処理されるかの基本的な考えも含めて理解すること。
      </td>
    </tr>
  </tbody>
</table>

まずは、フォームが送信されたときにデータに何が起こるかを考えてみましょう。

## クライアント/サーバー構成

ウェブはごく基本的なクライアント/サーバー構成に基づいており、簡単に言うと次のようになります。クライアント (通常はウェブブラウザー) は、サーバー (ほとんどの場合 [Apache](https://httpd.apache.org/)、[Nginx](https://nginx.org/)、[IIS](https://www.iis.net/)、[Tomcat](https://tomcat.apache.org/) などのウェブサーバー) に [HTTP プロトコル](/ja/docs/Web/HTTP)を使用してリクエストを送ります。サーバーは同じプロトコルを使用して、リクエストに応答します。

![基本的なクライアント/サーバー構成](client-server.png)

クライアント側において、HTML フォームはサーバーへデータを送信する HTTP リクエストを組み立てるのための、便利でユーザーに使いやすい手段でしかありません。フォームによって、ユーザーが HTTP リクエストで渡す情報を提供することができるようになります。

> **メモ:** どのようにクライアント/サーバー構成が動作するかについてもっと知りたい場合は、[サーバーサイドウェブサイトプログラミング入門](/ja/docs/Learn/Server-side/First_steps)モジュールをお読みください。

## クライアント側: データ送信方法の定義

{{HTMLElement("form")}} 要素で、データを送信する方法を定義します。その属性すべてが、ユーザーが送信ボタンを押すと送信されるリクエストを調整できるように設計されています。もっとも重要な属性は [`action`](/ja/docs/Web/HTML/Element/form#action) と [`method`](/ja/docs/Web/HTML/Element/form#method) の 2 つです。

### action 属性

[`action`](/ja/docs/Web/HTML/Element/form#action) 属性は、どこにデータを送信するかを定義します。値は妥当な相対/絶対 [URL](/ja/docs/Learn/Common_questions/What_is_a_URL) でなければなりません。この属性が与えられなかった場合は、フォームが含まれているページの URL にデータが送信されます。

この例では、データを絶対 URL の `http://example.com` に送信します。

```html
<form action="https://example.com"></form>
```

こちらは、相対 URL を使用しています。データは同一オリジン上の別の URL に送信されます。

```html
<form action="/somewhere_else"></form>
```

以下のように属性を指定しない場合は、{{HTMLElement("form")}} 要素はフォームが表示されているページ自身に対してデータを送信します。

```html
<form></form>
```

> **メモ:** HTTPS (secure HTTP) プロトコルを使用して URL を指定することができます。このようにすると、フォーム自体が HTTP でアクセスされる安全ではないページで提供される場合でも、データはリクエストの残りの部分とともに暗号化されます。一方、フォームが安全なページ提供されていても、[`action`](/ja/docs/Web/HTML/Element/form#action) 属性で安全ではない HTTP の URL を指定すると、どのブラウザーでもデータを送信する際にユーザーに対してセキュリティの警告を表示します。これは、データが暗号化されないためです。

非ファイル型のフォームコントロールの名前/値は&記号で結合された `name=value` ペアでサーバーに送られます。`action` の値は、サーバー側の検証を含め入力データを扱うサーバーのファイルです。サーバーは応答して、一般的にはデータを処理して `action` 属性で定義された URL を読み込み、新しいページの読み込み (または `action` が同じページを指している場合は既存ページのリフレッシュ)を引き起こします。

データがどう送られるかは `method` 属性に依存します。

### method 属性

[`method`](/ja/docs/Web/HTML/Element/form#method) 属性は、どのようにデータを送信するかを定義します。[HTTP プロトコル](/ja/docs/Web/HTTP)はリクエストを実行するための方法をいくつか提供しています。HTML フォームのデータは複数の方法で送信することができます。もっとも一般的なものは `GET` メソッドと `POST` メソッドです。

これら 2 つのメソッドの違いを理解するために、一歩戻って [HTTP の動作](/ja/docs/Web/HTTP/Overview)についてみていきましょう。ウェブ上のリソースにたどり着こうとするたびに、ブラウザーは URL へリクエストを送信します。HTTP リクエストは 2 つの部分で構成されます。ブラウザーの機能に関する包括的なメタデータのセットを持つヘッダーと、指定されたリクエストをサーバーが処理するために必要な情報を持つ本文です。

#### GET メソッド

[`GET` メソッド](/ja/docs/Web/HTTP/Methods/GET)は、サーバーに対して指定したリソースを返すよう求めるためにブラウザーが使用するメソッドです。"やあサーバー、このリソースをくれよ。" この場合、ブラウザーは空の本文を送信します。本文が空であるため、フォームをこのメソッドで送信する場合はデータを URL の後に付加します。

以下のフォームについて考えてみましょう。

```html
<form action="http://www.foo.com" method="GET">
  <div>
    <label for="say">What greeting do you want to say?</label>
    <input name="say" id="say" value="Hi" />
  </div>
  <div>
    <label for="to">Who do you want to say it to?</label>
    <input name="to" id="to" value="Mom" />
  </div>
  <div>
    <button>Send my greetings</button>
  </div>
</form>
```

`GET` メソッドが使用されているので、フォームを送信するときにブラウザーのアドレスバーに `www.foo.com/?say=Hi&to=Mom` という URL が見えるでしょう。

![変更された引数付き URL によって GET メソッドでフォームを送信した後の "server not found" のブラウザーエラーページです。](url-parameters.png)

URL に追加されたデータは名前/値の組の連続です。URL のウェブアドレスが終了した後、疑問符 (`?`) に続いて、名前/値の組が、それぞれアンパサンド (`&`) で区切られて入ります。この場合、2 つのデータの断片がサーバーに渡されます。

- `say` の値は `Hi`
- `to` の値は `Mom`

HTTP リクエストは次のようになります。

```http
GET /?say=Hi&to=Mom HTTP/2.0
Host: foo.com
```

> **メモ:** この例は GitHub にあります。— [get-method.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/get-method.html) を参照してください （[ライブはこちら](https://mdn.github.io/learning-area/html/forms/sending-form-data/get-method.html)）.

#### POST メソッド

[`POST` メソッド](/ja/docs/Web/HTTP/Methods/POST)は少し異なります。これは、HTTP リクエストの本文で提供したデータを考慮したレスポンスの要求を、ブラウザーがサーバーに送信するためのメソッドです。"やあサーバー、このデータを見て適切な結果を返してよ。" このメソッドを使用してフォームを送信する場合は、データが HTTP リクエストの本文の後に追加されます。

例を見てみましょう。— これは前述の `GET` の節で見たものと同じフォームですが、[`method`](/ja/docs/Web/HTML/Element/form#method) 属性が `post` に設定されています。

```html
<form action="http://www.foo.com" method="POST">
  <div>
    <label for="say">What greeting do you want to say?</label>
    <input name="say" id="say" value="Hi" />
  </div>
  <div>
    <label for="to">Who do you want to say it to?</label>
    <input name="to" id="to" value="Mom" />
  </div>
  <div>
    <button>Send my greetings</button>
  </div>
</form>
```

フォームをが `POST` メソッドで送信されると、URL にはデータが追加されず、HTTP リクエストは次のように、リクエスト本文にデータが含まれた形になります。

```http
POST / HTTP/2.0
Host: foo.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 13

say=Hi&to=Mom
```

`Content-Length` ヘッダーは本文の長さを、また `Content-Type` ヘッダーはサーバーに送信するリソースの種類を表します。これらのヘッダーについて少し説明しましょう。

> **メモ:** この例は GitHub で見つけることができます。— [post-method.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/post-method.html) を参照してください ([ライブ版も見てください](https://mdn.github.io/learning-area/html/forms/sending-form-data/post-method.html))。

### HTTP リクエストの表示

当然ながら HTTP リクエストはユーザーには表示されません (見たいのであれば、[Firefox ネットワークモニター](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)や [Chrome デベロッパー ツール](https://developer.chrome.com/docs/devtools/)などのツールが必要です)。例のように、フォームのデータは Chrome の Network タブに以下のように表示されます。フォームの送信後に、以下のように操作してください。

1. 開発者ツールを開く
2. "Network" を選択
3. "All" を選択
4. "Name" タブから "foo.com" を選択
5. "Headers" を選択

これで下の画像にあるように、フォームデータを取得することができます。

![ブラウザー開発者ツールのネットワーク監視タブで HTTP リクエストとレスポンスデータを取得](network-monitor.png)

ユーザーに表示されるのは呼び出された URL のみです。前述のように、`GET` リクエストはユーザーが URL バーの中でデータを見ることができますが、`POST` リクエストではそうではありません。これは 2 つの理由でとても重要です。

1. パスワード (あるいは何らかの機密データ) を送信する必要がある場合は、`GET` メソッドを使用してはいけません。データが URL バーに表示されるリスクがあり、とても危険です。
2. 大量のデータを送信する必要があるなら、`POST` が好ましいメソッドです。これは、URL の長さ制限があるブラウザーが存在するためです。加えて、多くのサーバーは受け入れる URL の長さを制限しています。

## サーバー側: データの取得

どちらの HTTP メソッドを選択しても、サーバーが受け取る文字列は、キー/値の組のリストとしてデータを取得するために解析されます。このリストにアクセスする方法は、使用する開発プラットフォームや、使用するであろう特定のフレームワークに依存します。

### 生の PHP の例

[PHP](https://www.php.net/) は、データにアクセスするためのグローバルオブジェクトを提供します。`POST` メソッドを使用したと仮定すると、データを取得してユーザーに表示する例は以下のとおりです。もちろん、データに対して何をするかはあなた次第です。データを表示したり、データベースに保管したり、メールで送信したり、他の手段で処理したりするでしょう。

```php
<?php
  // $_POST グローバル変数は、POST メソッドで送信されたデータへ名前でアクセスを可能にする
  // GET メソッドで送信されたデータにアクセスするには、$_GET が使用できる
  $say = htmlspecialchars($_POST['say']);
  $to  = htmlspecialchars($_POST['to']);

  echo  $say, ' ', $to;
?>
```

この例では送信されたデータを含むページを表示します。これはサンプルの [php-example.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/php-example.html) ファイル、つまり以前 `method` が `POST` で `action` が `php-example.php` の時に見たサンプルフォームを含むファイルアクションの中で見ることができます。送信されると、フォームデータは上記のブロックの PHP コードを含む [php-example.php](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/php-example.php) へ送信されます。コードが実行されると、ブラウザーの出力は `Hi Mom` になります。

![それ以外の空白のウェブページに "hi mom" と表示された場合、 POST メソッドでフォームデータを PHP ファイルに送信した後のレスポンスとして受け取ったデータ](php-result.png)

> **メモ:** この例はブラウザーにローカルに読み込んだ時には動作しません。— ブラウザーは PHP コードを解釈できないので、フォームがブラウザーに送信されると、PHP ファイルをダウンロードしようとするでしょう。動作させるためには、この例を何らかの PHP サーバー経由で実行する必要があります。ローカルの PHP のテストには、[MAMP](https://www.mamp.info/en/downloads/) (Mac および Windows) や [AMPPS](https://ampps.com/download) (Mac, Windows, Linux) がいいでしょう。
>
> なお、MAMP を使って MAMP Pro がない (または MAMP Pro デモトライアルの有効期限が切れた) 場合、動作させるのにトラブルが起こるかもしれません。再び動作させるには MAMP アプリを閉じて、_MAMP_ > _Preferences_ > *PHP*メニューから "Standard Version:" を "7.2.x" (x はあなたがどのバージョンをインストールしたかによります)にするといいことがわかっています。

### Python の例

この例は、同じこと (与えられたデータをウェブページに表示する) を Python で行います。これはテンプレートの表示やフォームデータの受付などのために [Flask フレームワーク](https://flask.palletsprojects.com/)を使用しています ([python-example.py](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/python-example.py) を参照してください)。

```python
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def form():
    return render_template('form.html')

@app.route('/hello', methods=['GET', 'POST'])
def hello():
    return render_template('greeting.html', say=request.form['say'], to=request.form['to'])

if __name__ == "__main__":
    app.run()
```

次のように、上記のコードでは 2 つのテンプレートが参照されます。(自分の環境で実行する場合、これらは `templates` というサブディレクトリーにあり、`python-example.py`ファイルと同じディレクトリーにある必要があります)。

- [form.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/templates/form.html): 以前に [POST メソッド](#post_メソッド)の節で見たフォームと同じですが、`action` が `\{{ url_for('hello') }}` に設定されています (これは [Jinja](https://jinja.palletsprojects.com) テンプレートで、基本的に HTML ですが、波括弧の中にウェブサーバーで実行されている Python のコードの呼び出しを含めることができます。`url_for('hello')` は基本的に、「フォームが送信されたら `/hello` にリダイレクトしてください」と言っています。)
- [greeting.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/templates/greeting.html): このテンプレートは、表示時に渡された 2 つの小さいデータを表示する行だけを含みます。`/hello` の URL が呼び出されるときに実行される、前述の `hello()` 関数によって行われます。

> **メモ:** 繰り返しますが、このコードはブラウザーに直接読み込もうとしても動作しません。Python は PHP とは若干異なる動作をします。— ローカルでこのコードを実行するには、[Python/PIP をインストール](/ja/docs/Learn/Server-side/Django/development_environment#installing_python_3)する必要があり、それから `pip3 install flask` を使用して Flask をインストールしてください。この時点で `python3 python-example.py` を実行し、ブラウザーで `localhost:5000` に移動することで実行することができるでしょう。

### その他の言語やフレームワーク

フォームの操作に使用できるサーバー側の技術は、Perl、Java、.Net、Ruby などたくさんあります。もっとも好きなものを選びましょう。しかしそれらの技術を直接使用することは、扱いにくいため一般的ではないことが特筆に値します。以下のような、フォームをより簡単に扱えるようにする多くの高品質フレームワークのひとつを使用する方がより一般的です。

- [Django](/ja/docs/Learn/Server-side/Django) (Python 向け、[Flask](https://flask.palletsprojects.com/) より若干重いものですが、ツールとオプションがより豊富です。)
- [Express](/ja/docs/Learn/Server-side/Express_Nodejs) (Node.js 向け)
- [Laravel](https://laravel.com/) (PHP 向け)
- [Ruby On Rails](http://rubyonrails.org/) (Ruby 向け)
- [Spring Boot](https://spring.io/guides/gs/handling-form-submission/) (Java 向け)

言うまでもなく、これらのフレームワークを使用したとしても、フォームでの作業が必ずしも*簡単に*なるとは限りません。しかし、すべての機能を自分で 1 から書こうとするよりずっと簡単で、また多くの時間を節約できるでしょう。

> **メモ:** サーバー側言語やフレームワークまで説明することはこの記事の範囲を超えます。上記のリンクが参考になりますので、学習してみてください。

## 特別な場合: ファイル送信

ファイルは HTML フォームで特別なケースです。他のデータがすべてテキストデータである中、ファイルはバイナリーデータ (あるいはそのように考えられるデータ) です。HTTP はテキストのプロトコルであるため、バイナリーデータを扱うための特別な要件があります。

### enctype 属性

この属性で `Content-Type` HTTP ヘッダーの値を指定できます。このヘッダーはサーバーに対して送信するデータの種類を伝えることから、とても重要です。既定値は `application/x-www-form-urlencoded` です。人間の言葉では、「これは URL 形式でエンコードされたフォームデータです。」という意味です。

しかしファイルを送信したい場合は、さらに 2 つのステップを踏む必要があります。

- ファイルの内容は URL 引数に収めることができないので、[`method`](/ja/docs/Web/HTML/Element/form#method) 属性を `POST` に設定してください。
- データは複数の部分に分かれ、それぞれのファイルや文字列データがフォーム本体に含められているので、[`enctype`](/ja/docs/Web/HTML/Element/form#enctype) の値を `multipart/form-data` に設定ください。
- ユーザーがアップロードするファイルを選択できるように、1 つ以上の [`<input type="file">`](/ja/docs/Web/HTML/Element/input/file) コントロールを含めてください。

例:

```html
<form method="post" action="https://www.foo.com" enctype="multipart/form-data">
  <div>
    <label for="file">Choose a file</label>
    <input type="file" id="file" name="myFile" />
  </div>
  <div>
    <button>Send the file</button>
  </div>
</form>
```

> **メモ:** 多くのサーバーは悪用を防ぐために、ファイルや HTTP リクエストの長さを制限しています。

## 一般的なセキュリティへの配慮

サーバーにデータを送信するたびに、セキュリティについて考える必要があります。HTML フォームはサーバーに対するもっともよくある攻撃の入口 (攻撃が行われる場所) になります。問題が HTML フォーム自身から発生することはありません — サーバーがどのようにデータを扱うかによります。

[ウェブサイトセキュリティ](/ja/docs/Learn/Server-side/First_steps/Website_security) の記事が[サーバーサイド](/ja/docs/Learn/Server-side)の学習トピックにあり、一般的な攻撃とその防御を詳細に扱っています。そちらへ行って記事を確認し、何が起こり得るかを理解してください。

### 疑い深くあれ: ユーザーを信用してはいけません

さて、これらの脅威に対してどう対抗するのでしょうか? これは本ガイドの内容を超える話題です。それでも、覚えておくとよいルールがいくつかあります。もっとも重要なルールは、自分自身も含めユーザーを決して信用してはならないことです。信頼されているユーザーでさえハイジャックされるかもしれません。

サーバーに来るすべてのデータを確認およびサニタイズしなければなりません。いつでもです。例外はありません。

- **潜在的に危険な文字をエスケープします。** 注意すべき具体的な文字は、データが使用される状況や使用するサーバー基盤に大きく依存しますが、どのサーバー側言語もそのための機能を持っています。注意しておくべきことは、 ([JavaScript](/ja/docs/Learn/JavaScript) や [SQL](https://en.wikipedia.org/wiki/SQL) コマンドといった)実行可能なコードのようなキャラクターシーケンスです。
- **入力データの量を、必要なサイズまでしか受け入れないように制限します。**
- **アップロードされたファイルをサンドボックス化します。** ファイルを別のサーバーに保管して、別のサブドメインまたはよりよい方法としてまったく別のドメインを通してのみアクセスを許可します。

これら 3 つのルールに従うと、多くのあるいはほとんどの問題を避けられるでしょう。ただし、適格の第三者によるセキュリティレビューを受けることもよい考えです。発生し得る問題のすべてを見いだしたとは考えないようにしてください。

## まとめ

ご覧いただいたように、フォームデータの送信は簡単ですが、アプリケーションを安全にするのは容易ではありません。フロントエンドの開発者はデータのセキュリティモデルを定義すべき者ではないことを忘れないようにしてください。今後見ていくように[クライアント側でのデータ検証](/ja/docs/Learn/Forms/Form_validation)も可能ですが、クライアント側で実際に何が起きているかを知ることはできませんので、サーバー側でその検証内容を信用することはできません。

このチュートリアルを順番に終えた場合、フォームのマークアップとスタイル設定の方法、クライアント側での検証の方法、フォーム送信の理解ができているでしょう。

## 関連情報

ウェブアプリケーションのセキュア化についてさらに学びたいのでしたら、次のリソースをよく読んでください。

- [サーバーサイドウェブサイトプログラミング入門](/ja/docs/Learn/Server-side/First_steps)
- [The Open Web Application Security Project (OWASP)](https://owasp.org/)
- [Web Security by Mozilla](https://infosec.mozilla.org/guidelines/web_security)

{{PreviousMenu("Learn/Forms/Form_validation", "Learn/Forms")}}

## モジュール内の記事

- [初めてのフォーム](/ja/docs/Learn/Forms/Your_first_form)
- [フォームの構築方法](/ja/docs/Learn/Forms/How_to_structure_a_web_form)
- [基本的なネイティブフォームコントロール](/ja/docs/Learn/Forms/Basic_native_form_controls)
- [HTML5 の入力型](/ja/docs/Learn/Forms/HTML5_input_types)
- [その他のフォームコントロール](/ja/docs/Learn/Forms/Other_form_controls)
- [フォームへのスタイル設定](/ja/docs/Learn/Forms/Styling_web_forms)
- [フォームへの高度なスタイル設定](/ja/docs/Learn/Forms/Advanced_form_styling)
- [UI 擬似クラス](/ja/docs/Learn/Forms/UI_pseudo-classes)
- [クライアントサイドのフォーム検証](/ja/docs/Learn/Forms/Form_validation)
- [フォームデータの送信](/ja/docs/Learn/Forms/Sending_and_retrieving_form_data)

### 上級トピック

- [カスタムフォームコントロールの作成方法](/ja/docs/Learn/Forms/How_to_build_custom_form_controls)
- [JavaScript によるフォームの送信](/ja/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [フォームコントロール向けの CSS プロパティの互換性一覧表](/ja/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
