---
title: JSON の操作
slug: Learn/JavaScript/Objects/JSON
tags:
  - 記事
  - 初心者
  - CodingScripting
  - ガイド
  - JSON
  - JSON API
  - JSON 配列
  - JSON 解釈
  - JSON 構造
  - JavaScript
  - 学習
  - オブジェクト
  - チュートリアル
  - l10n:priority
translation_of: Learn/JavaScript/Objects/JSON
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Objects/Inheritance", "Learn/JavaScript/Objects/Object_building_practice", "Learn/JavaScript/Objects")}}

JavaScript Object Notation (JSON) は、構造化データを表現するための標準のテキストベースの形式で、 JavaScript のオブジェクト構文に基づいています。ウェブアプリケーションでデータを転送する場合によく使われます（例えば、複数のデータをサーバーからクライアントへ送信して、ウェブページ上に表示する場合などで、その逆もあります）。頻繁に見かけるデータ形式ですので、この記事では JavaScript を使用して JSON を扱うのに必要なすべてのこと、例えば JSON を解釈してその中のデータにアクセスしたり、 JSON を作成したりする方法を説明します。

<table>
  <tbody>
    <tr>
      <th scope="row">前提知識:</th>
      <td>
        基礎的なコンピューターの知識、HTML と CSS への基本的な理解、基礎的な JavaScript の理解（<a href="/ja/docs/Learn/JavaScript/First_steps">JavaScript の第一歩</a>と <a href="/ja/docs/Learn/JavaScript/Building_blocks">JavaScript の構成要素</a>を参照）とオブジェクト指向 JavaScript の基本（<a href="/ja/docs/Learn/JavaScript/Objects/Basics">JavaScript オブジェクトの基本</a>を参照）。</td>
    </tr>
    <tr>
      <th scope="row">目的:</th>
      <td>
        JSON に格納されたデータを扱う方法、JSON 文字列の生成方法について理解すること。
      </td>
    </tr>
  </tbody>
</table>

## JSON とは何か

{{glossary("JSON")}} は JavaScript オブジェクトの構文に従ったテキストベースのデータ形式で、[Douglas Crockford](https://en.wikipedia.org/wiki/Douglas_Crockford) によって普及されました。JSON は JavaScript オブジェクトの構文に似ていますが、 JavaScript とは独立して扱われることがあり、多くのプログラミング言語環境には JSON を読み取ったり（解釈したり）生成したりする機能があります。

JSON は文字列として存在します。ですので、ネットワークを通してデータを転送したい場合に便利です。 JSON データへアクセスしたい場合は、JavaScript オブジェクトへ変換する必要があります。 JavaScript にはこれらを相互に変換できるメソッドを持った [JSON](/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON) というグローバルなオブジェクトがあるので、変換は難しくありません。

> **Note:** 文字列をネイティブオブジェクトへ変換することは「デシリアライゼーション」 (_deserialization_) と呼ばれており、ネイティブオブジェクトをネットワークを通して転送できように文字列へ変換することは「シリアライゼーション」 (_serialization_) と呼ばれています。

JSON 文字列はそれ自身をファイルとして格納することもできます。 `.json` という拡張子の付いたただのテキストファイルで、 {{glossary("MIME type", "MIME タイプ")}}は `application/json` です。

### JSON の構造

上で説明したように、JSON は JavaScript オブジェクトにとても似ている形式の文字列です。JSON では通常の JavaScript オブジェクトと同様な基本データ型（文字列、数値、配列、論理型やその他のリテラル型）を使うことができます。これにより、以下のように階層的にデータを構成することができます。

```json
{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": [
        "Radiation resistance",
        "Turning tiny",
        "Radiation blast"
      ]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}
```

この文字列を JavaScript プログラムへ読み込むと（例えば、変数 `superHeroes` へ代入すると）と、 [JavaScript オブジェクトの基本](/ja/docs/Learn/JavaScript/Objects/Basics)の記事で見たのと同様に、ドットや角括弧を使ってデータへアクセスすることができます。例えば次のようになります。

```js
superHeroes.homeTown
superHeroes['active']
```

さらに深い階層のデータへアクセスする場合は、単純にプロパティ名や配列のインデックスを連結します。例えば、メンバーリスト中 2 番目のヒーローの 3 番目の能力を参照する場合は、以下のようにします。

```js
superHeroes['members'][1]['powers'][2]
```

1.  まず、変数名 `superHeroes` を指定します。
2.  その中の `members` プロパティへアクセスしたいので、 `["members"]` と指定します。
3.  `members` にはオブジェクトの配列が格納されています. ここでは、配列内の 2 番目のオブジェクトへアクセスするので、 `[1]` を指定します。
4.  そのオブジェクト内で、 `powers` プロパティへアクセスするため,  `["powers"]` と指定します。
5.  `powers` プロパティは選択したヒーローの能力を含んだ配列となっており、その中の 3 番目が欲しいので、 `[2]` と記述します。

> **Note:** 上記の JSON は [JSONTest.html](https://mdn.github.io/learning-area/javascript/oojs/json/JSONTest.html) で参照することができます（ページ内の[ソースコード](https://github.com/mdn/learning-area/blob/master/javascript/oojs/json/JSONTest.html)を参照してください）。ページを読み込んで見て、ブラウザーのコンソールで変数内のデータにアクセスしてみてください。

## JSON の配列

上記で、 JSON テキストは基本的に文字列に入った JavaScript オブジェクトのように見えることを説明しました。配列を JSON との間で変換することもできます。例えば、次のものも有効な JSON です。

```json
[
  {
    "name": "Molecule Man",
    "age": 29,
    "secretIdentity": "Dan Jukes",
    "powers": [
      "Radiation resistance",
      "Turning tiny",
      "Radiation blast"
    ]
  },
  {
    "name": "Madame Uppercut",
    "age": 39,
    "secretIdentity": "Jane Wilson",
    "powers": [
      "Million tonne punch",
      "Damage resistance",
      "Superhuman reflexes"
    ]
  }
]
```

これも有効な JSON であり、解釈したデータには配列のインデックスを指定するだけです。例えば、`[0]["powers"][0]`のように表記できます。

### その他の注意点

- JSON は指定されたデータ形式の純粋な文字列です。プロパティのみを含むことができ、メソッドを含むことはできません。
- JSON では文字列とプロパティ名を二重引用符で括る必要があります。単一引用符は、JSON 文字列全体を囲む以外では無効です。
- カンマやコロンが 1 つ抜けるだけでも JSON ファイルは無効になり、動作しません。利用しようとしているデータを注意して確認してください（プログラムに問題がない限り、コンピューターが生成した JSON の方が、エラーが含まれる可能性が低くなります）。 [JSONLint](http://jsonlint.com/) のようなアプリケーションを使って妥当性を検証をすることもできます。
- JSONは、配列やオブジェクトだけでなく、 JSON 内部に入れることができるあらゆるデータ型のデータだけでも有効なものになります。つまり、例えば、単一の文字列や数値も有効な JSON となります。
- JavaScript コードではプロパティを引用符で括らなくても構いませんが、 JSON では、引用符でくくった文字列だけがプロパティとして扱われます。

## アクティブラーニング: JSON の例を操作してみる

それでは、ウェブサイト上でどのように JSON 形式のデータを使うことができるか例を通して見てみましょう。

### はじめに

まず、 [heroes.html](https://github.com/mdn/learning-area/blob/master/javascript/oojs/json/heroes.html) と [style.css](https://github.com/mdn/learning-area/blob/master/javascript/oojs/json/style.css) のコピーをローカルに作成してください。後者は例題ページをスタイリングするための CSS であり、前者は簡単な HTML です。

```html
<header>
</header>

<section>
</section>
```

他には、この演習で書く JavaScript を含んだ {{HTMLElement("script")}} 要素があります。この時点では、{{HTMLElement("header")}} 要素と {{HTMLElement("section")}} 要素 を取得して、変数へ代入している 2 行コードのみが書かれています。

```js
const header = document.querySelector('header');
const section = document.querySelector('section');
```

演習用の JSON データは <https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json> に用意してあります。

これを演習ページに読み込み、いくらかの DOM 操作を行って表示します。このようになります。

![](json-superheroes.png)

### JSON の取得

JSON を取得するには、{{domxref("XMLHttpRequest")}} (しばしば **XHR** と呼ばれる) という API を使用します。これは非常に便利な JavaScript オブジェクトで、JavaScript を使用してサーバーからリソース (例：画像、テキスト、JSON、さらには HTML スニペットなど) を取得するネットワークリクエストを行うことができます。つまりページ全体を再読み込みせずに、小さな部分のコンテンツを更新することができます。これにより、よりレスポンシブなウェブページを作成できますが、それをもっと詳細に教えるのはこの記事の範囲を超えています。

1.  まず、取得したい JSON がある URL を変数へ代入します。次のコードを JavaScript の最後の行へ追加してください。

    ```js
    let requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
    ```

2.  HTTP リクエストを作成するのに、 `XMLHttpRequest` コンストラクターに `new` キーワードを付けて使用することで、新しいリクエストインスタンスを作成する必要があります。先ほどのコードの下に、次のコードを追加してください。

    ```js
    let request = new XMLHttpRequest();
    ```

3.  新しいリクエストを開始するには、 [`open()`](/ja/docs/Web/API/XMLHttpRequest/open) メソッドを使います。 次のコードを追加してください。

    ```js
    request.open('GET', requestURL);
    ```

    このメソッドは最低 2 つの引数を取ります（他に任意の引数を与えることもできます）。今回の簡単な例では、必要なのは必須の引数 2 つだけです。

    - リクエストを開始する際に HTTP のメソッドを決める必要があります。今回のケースでは、単純にデータを取得するだけですので [`GET`](/ja/docs/Web/HTTP/Methods/GET) が良いでしょう。
    - リクエストを送る先の URL。今回は JSON ファイルを置いた URL です。

4.  次に、以下の 2 行のコードを追加してください。XHR オブジェクトがサーバーから返されるデータを判断できるように [`responseType`](/ja/docs/Web/API/XMLHttpRequest/responseType) に JSON を指定します。この場合、ブラウザー側で JavaScript オブジェクトへ変換してくれます。それから、 [`send()`](/ja/docs/Web/API/XMLHttpRequest/send) メソッドでリクエストを送信します。

    ```js
    request.responseType = 'json';
    request.send();
    ```

5.  最後に、サーバーからのレスポンスを待ち、それを処理するコードを用意するので、以下のコードをこれまでのコードの下に追加してください。

    ```js
    request.onload = function() {
      const superHeroes = request.response;
      populateHeader(superHeroes);
      showHeroes(superHeroes);
    }
    ```

ここでは 、先ほどのリクエストに対するレスポンス（[`response`](/ja/docs/Web/API/XMLHttpRequest/response) プロパティから取得できます）を `superHeroes` と いう変数へ代入しています。つまり、この変数に JSON を元に生成された JavaScript オブジェクトが格納されているということです。それから 2 つの関数をそのオブジェクトを引数として与えて呼び出しています。最初の関数は引数のデータを `<header>` へ埋め込み、2 つ目は各ヒーローごとの情報カードを作り、`<section>` へ埋め込みます。

上記の処理は、リクエストオブジェクトで load イベントが発生した時に呼び出されるイベントハンドラー（[`onload`](/ja/docs/Web/API/XMLHttpRequestEventTarget/onload) を参照）に記述しました。このイベントは、レスポンスがうまく取得できた場合に呼び出されるので、 `request.response` を使って何か処理をしようとしたときに、それが必ず利用できることが保証されています。

### ヘッダーへの値の設定

ここまでで、JSON の取得と JavaScript オブジェクトへの変換ができました、先ほどの 2 つの関数を実装して使ってみましょう。まずはじめに、以下のコードをこれまでのコードの下に追加してください。

```js
function populateHeader(obj) {
  const myH1 = document.createElement('h1');
  myH1.textContent = obj['squadName'];
  header.appendChild(myH1);

  const myPara = document.createElement('p');
  myPara.textContent = 'Hometown: ' + obj['homeTown'] + ' // Formed: ' + obj['formed'];
  header.appendChild(myPara);
}
```

まず、 {{HTMLElement("h1")}} 要素を [`createElement()`](/ja/docs/Web/API/Document/createElement) で生成し、その [`textContent`](/ja/docs/Web/API/Node/textContent) プロパティにそのオブジェクトの `squadName` プロパティを設定し、そしてそれを [`appendChild()`](/ja/docs/Web/API/Node/appendChild) で header に追加します。そして、段落についても同様に、要素を生成し、内容のテキストを設定し、 header に追加します。違いは、設定するテキストがこのオブジェクトの `homeTown` と `formed` の各プロパティを結合したものであるという点だけです。

### ヒーロー情報カードの作成

次に、以下の関数をコードの下へ追加してください。この関数はスーパーヒーローカードの作成と画面表示を行います。

```js
function showHeroes(obj) {
  const heroes = obj['members'];

  for (let i = 0; i < heroes.length; i++) {
    const myArticle = document.createElement('article');
    const myH2 = document.createElement('h2');
    const myPara1 = document.createElement('p');
    const myPara2 = document.createElement('p');
    const myPara3 = document.createElement('p');
    const myList = document.createElement('ul');

    myH2.textContent = heroes[i].name;
    myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
    myPara2.textContent = 'Age: ' + heroes[i].age;
    myPara3.textContent = 'Superpowers:';

    const superPowers = heroes[i].powers;
    for (let j = 0; j < superPowers.length; j++) {
      const listItem = document.createElement('li');
      listItem.textContent = superPowers[j];
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}
```

始めに、JavaScript オブジェクトの `members` プロパティを新しい変数に保存します。この配列には複数のオブジェクトがあり、それぞれにヒーローについての情報が入ります。

次に、[for ループ](/ja/docs/Learn/JavaScript/Building_blocks/Looping_code#the_standard_for_loop)を使って配列のそれぞれのオブジェクトを反復処理します。それぞれの次のようなことを行います。

1.  新しい要素をいくつか作成します。`<article>` 1 つ、 `<h2>` 1 つ、 `<p>` 3 つ、`<ul>` 1 つです。
2.  `<h2>` の中身を現在のヒーローの名前 (`name`) にします。
3.  3 つの段落の中身を、それぞれの `secretIdentity`、 `age`、リストにある情報を紹介していくために「超能力 ("Superpowers:")」で始まる行とします。
4.  `powers` プロパティを `superPowers` という新しい定数に保存します。この定数は今のヒーローの超能力のリストを持つ配列です。
5.  別の `for` ループを使用して、今のヒーローの超能力を反復処理します。それぞれに対して `<li>` 要素を作成し、中に超能力を入れ、 `listItem` に `<ul>` 要素（`myList`）を `appendChild()` で追加します。
6.  最後に、 `<h2>`、`<p>`、`<ul>` を `<article>` (`myArticle`) の中に追加してから、その `<article>` を `<section>` の中に追加します。これらを追加する順序は重要で、これが HTML の中で表示される順序になります。

> **Note:**: 試してみるための例が上手く取得できなかった場合は、 [heroes-finished.html](https://github.com/mdn/learning-area/blob/master/javascript/oojs/json/heroes-finished.html) ソースコードを参照してみてください（こちらで[ライブ実行](https://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished.html)もできます）。

> **Note:**: もし、 JavaScript オブジェクトへのアクセスに使用しているドット/ブラケット記法がよく分からない場合は、 [superheroes.json](https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json) を別のタブやテキストエディターで開き、それを参照しながら JavaScript を読んでみるとよいでしょう。また、ドットやブラケット記法の詳細については、 [JavaScript オブジェクトの基本](/ja/docs/Learn/JavaScript/Objects/Basics)の記事を見返してみてください。

## オブジェクトとテキスト間の変換

上記の例では、 XHR リクエストで JSON レスポンスを直接 JavaScript オブジェクトに変換するように設定したため、 JavaScript オブジェクトへのアクセスはシンプルでした。

```js
request.responseType = 'json';
```

しかし、時にはそれほど幸運ではないこともあります。生の JSON 文字列を受け取り、それを自分自身でオブジェクトに変換する必要がある場合もあります。また、 JavaScript のオブジェクトをネットワーク経由で送信したい場合、送信前に JSON （文字列）に変換する必要があります。幸い、この 2 つの問題はウェブ開発ではよくあることなので、ブラウザーでは組み込みの [JSON](/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON) オブジェクトが利用でき、それには以下の 2 つのメソッドが備わっています。

- [`parse()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse): JSON 文字列を引数に取り、それに対する JavaScript オブジェクトを返します。
- [`stringify()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify): オブジェクトを引数に取り、等価な JSON 文字列を返します。

前者の動作例が [heroes-finished-json-parse.html](https://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished-json-parse.html) にあります（[ソース](https://github.com/mdn/learning-area/blob/master/javascript/oojs/json/heroes-finished-json-parse.html) を見て下さい）。ここでは以前に作成した例とまったく同じことをしていますが、 XHR では生の JSON 文字列を返すようにして、それを `parse()` で JavaScript オブジェクトに変換しているところだけが異なります。コードの重要な部分は以下の通りです。

```js
request.open('GET', requestURL);
request.responseType = 'text'; // now we're getting a string!
request.send();

request.onload = function() {
  const superHeroesText = request.response; // get the string from the response
  const superHeroes = JSON.parse(superHeroesText); // convert it to an object
  populateHeader(superHeroes);
  showHeroes(superHeroes);
}
```

ご想像の通り、 `stringify()`  はまったく反対の向きに動作します。次のコードをブラウザーの JavaScript コンソールに一つずつ打ち込んでいって、実際に動かしてみて下さい。

```js
let myObj = { name: "Chris", age: 38 };
myObj
let myString = JSON.stringify(myObj);
myString
```

ここでは、 JavaScript オブジェクトを作成してその中身を確認しています。次に `stringify()` を使って JSON 文字列に変換し、返値を新しい変数に保存し、その値も確認しています。

## スキルをテストしてみましょう！

この記事はここまでですが、最重要事項を覚えていますか？先に進む前に、これが身に付いているかどうかを確認するためのテストがいくつかあります。[スキルテスト: JSON](/ja/docs/Learn/JavaScript/Objects/Test_your_skills:_JSON)を参照してください。

## まとめ

この節では、プログラム内で、JSON を生成する、JSON を解釈する、JSON データを参照するなど、JSON を扱う方法について簡単に説明しました。次の節では、オブジェクト指向 JavaScript について見ていくことにします。

## 関連情報

- [JSON リファレンス](/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- [XMLHttpRequest オブジェクトリファレンス](/ja/docs/Web/API/XMLHttpRequest)
- [XMLHttpRequest の利用](/ja/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
- [HTTP リクエストメソッド](/ja/docs/Web/HTTP/Methods)
- [ECMA のオフィシャル JSON Web サイト](http://json.org/)

{{PreviousMenuNext("Learn/JavaScript/Objects/Inheritance", "Learn/JavaScript/Objects/Object_building_practice", "Learn/JavaScript/Objects")}}

## このモジュール

- [JavaScript オブジェクトの基本](/ja/docs/Learn/JavaScript/Objects/Basics)
- [初心者のためのオブジェクト指向 JavaScript](/ja/docs/Learn/JavaScript/Objects/Object-oriented_JS)
- [Object のプロトタイプ](/ja/docs/Learn/JavaScript/Objects/Object_prototypes)
- [JavaScript での継承](/ja/docs/Learn/JavaScript/Objects/Inheritance)
- [JSON データの操作](/ja/docs/Learn/JavaScript/Objects/JSON)
- [オブジェクト作成の練習](/ja/docs/Learn/JavaScript/Objects/Object_building_practice)
- [バウンスボールに機能を追加する](/ja/docs/Learn/JavaScript/Objects/Adding_bouncing_balls_features)
