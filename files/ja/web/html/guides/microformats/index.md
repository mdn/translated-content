---
title: HTML のマイクロフォーマットの使用
short-title: マイクロフォーマット
slug: Web/HTML/Guides/Microformats
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

[_マイクロフォーマット_](http://microformats.org/) (Microformat) (**μF** と略記されることもあります) は、意味情報と構造化データを HTML に埋め込むために使用される規格で、検索エンジンやアグリゲーター、その他のツールが使用するための API を提供します。HTML のこれらの最小限のパターンは、人、組織、イベント、場所などの基本的な情報からドメイン固有の情報まで、さまざまなものをマークアップするために使用されます。

- マイクロフォーマットオブジェクトを作成するには、クラス属性に `h-*` クラス名を使用します。
- オブジェクトにプロパティを追加するには、オブジェクトの子孫のいずれかに `p-*`、`u-*`、`dt-*`、`e-*` クラス名を使用します。

マイクロフォーマットは、オブジェクトを記述するためにサポートする語彙を使用し、そのプロパティに値を割り当てるために名前と値のペアを使用します。プロパティはクラス属性で運ばれ、任意の HTML 要素に追加することができ、データ値は HTML 要素のコンテンツとセマンティック属性を再利用します。

マイクロフォーマット 2 はマイクロフォーマットの更新版で、HTML の構造化された構文や語彙に注釈を付けるために新しい属性を学習する必要がある RDFa やマイクロデータを使用する以前のアプローチよりもシンプルな方法を提供します。

マイクロフォーマット 2 には[オープンソースの主要言語における解釈ライブラリ](http://microformats.org/wiki/microformats2#Parsers)があります。

## マイクロフォーマットはどのように動作するのか

ウェブページの作成者は、HTML にマイクロフォーマットを追加することができます。例えば、自分自身を識別したい場合、次のような [h-card](https://microformats.org/wiki/h-card) を使用することができます。

### HTML の例

```html
<a class="h-card" href="https://alice.example.com">Alice Blogger</a>
```

パーサーがこのデータに遭遇すると、このページには `https://alice.example.com/` という URL を持つ `Alice Blogger` という人物または組織を記述した「カード」が含まれていることを認識します。パーサーは、さまざまなアプリケーションで使用できる API を通じてこのデータを利用可能にします。例えば、アプリケーションは、サービスに登録した人のプロフィール情報として使用する h-card をページからスキャンすることができます。

この例のように、一部のマークアップパターンでは、単一のマイクロフォーマットルートクラス名のみが要求されます。パーサーは、このクラス名を使用して、`name`、`url`、`photo` などのいくつかの汎用プロパティを探します。

## マイクロフォーマットの用途

マイクロフォーマットには数多くの用途があります。最初の例は、[Webmention 標準](https://www.w3.org/TR/webmention/)です。これは、メッセージやコメントをあるサイトから別のサイトに送信する方法を提供するためにマイクロフォーマットを使用しています。 Webmention 仕様では、メッセージやコメントをリッチで相互運用可能な方法で公開するために、サイトが公開および利用することができる特定の属性を定義しています。マイクロフォーマットは、 Webmention と組み合わせて使用して、あるサイトから別のサイトに「いいね！」、再投稿、ブックマークなどのソーシャルリアクションを送信することもできます。

マイクロフォーマットは、サイト間のシンジケーションも容易にします。アグリゲーターは、公開されているマイクロフォーマットを含むページを構文解析して、投稿のタイトル、本文、作成者などの情報を探します。このアグリゲーターは、収集した意味情報を用いて、その結果を自分のサイトに表示することができます。たとえば、ニュースアグリゲーターやコミュニティの掲示板は、投稿を容易にし、マイクロフォーマットを使用してページから関連コンテンツを抽出することができます。さらに、ウェブサイトは、ソーシャルネットワークなどのサードパーティーにコンテンツを公開するよう、巧妙に作成されたリクエストを送信するためにマイクロフォーマットを使用することができます。

マイクロフォーマットは、すべての主要な検索エンジンが対応しています。検索エンジンは、この構造化データに直接アクセスすることで、ウェブページ上の情報を理解し、より関連性の高い結果をユーザーに提供することができるため、大きな利益を得ることができます。マイクロフォーマットは機械可読性があることにくわえ、人間も簡単に読めるように設計されています。

マイクロフォーマットは、機械で読み取り可能であることに加え、人間が読みやすいように設計されています。この手法により、マイクロフォーマットのデータを理解し、維持することが容易になります。

## マイクロフォーマットの接頭辞

すべてのマイクロフォーマットは、ルートとプロパティの集合で構成されています。プロパティはすべてオプションであり、複数の値を持つ可能性があります。単一の値が必要なアプリケーションは、プロパティの最初のインスタンスを使用できます。階層データは、入れ子になったマイクロフォーマットで、通常はプロパティ値自体として表されます。

すべてのマイクロフォーマットクラス名には接頭辞が使用されています。接頭辞は**ご意図は独立した構文**で、個別に開発されているものです。

- **"h-\*" はルートクラス名**で、例えば "h-card", "h-entry", "h-feed" です。これらの最上位のルートクラスは、通常、型と、それに対応するプロパティの予想される語彙を示します。例えば、次のように記述します。
  - [h-card](https://microformats.org/wiki/h-card) は個人または組織を記述します。
  - [h-entry](https://microformats.org/wiki/h-entry) はブログ投稿のような、読み物的または日付がついたオンラインコンテンツを記述します。
  - [h-feed](https://microformats.org/wiki/h-feed) は投稿のフィードのストリームを記述します。
  - 他にも[microformats2 wiki の語彙](https://microformats.org/wiki/microformats2#v2_vocabularies)にたくさんのものがあります。

- **"p-\*" はプレーン（テキスト）プロパティ**で、例えば "p-name", "p-summary" です。
  - 一般的なプレーンテキストの解釈、一般的な要素テキスト。特定の HTML 要素では、最初に特別な属性を使用してください。例えば、 img/alt、 abbr/title などです。

- **"u-\*" は URL プロパティ**で、例えば "u-url", "u-photo", "u-logo" です。
  - 特別な解釈：要素の属性 a/href、img/src、object/data など、要素のコンテンツに対する属性。

- **"dt-\*" は日付と時刻のプロパティ**で、例えば "dt-start", "dt-end", "dt-bday" です。
  - 特別な解釈：読みやすさのために、 time要素の datetime 属性、[値クラスパターン](https://microformats.org/wiki/value-class-pattern)、および別個の時刻値の解釈。

- **"e-\*" は要素ツリープロパティ**で、含まれている要素階層全体が値である、例えば "e-content" です。 "e-" という接頭辞は、 "element tree", "embedded markup", "encapsulated markup" と覚えやすい名前としても使用できます。

## マイクロフォーマットの例

### h-card

[h-card](https://microformats.org/wiki/h-card) マイクロフォーマットは、個人または組織を表します。

各プロパティの値は、クラスプロパティを使用して HTML で定義されます。任意の要素が持つことができます。

#### h-card の例

```html
<p class="h-card">
  <img class="u-photo" src="https://example.org/photo.png" alt="" />
  <a class="p-name u-url" href="https://example.org">Joe Bloggs</a>
  <a class="u-email" href="mailto:jbloggs@example.com">jbloggs@example.com</a>,
  <span class="p-street-address">17 Austerstræti</span>
  <span class="p-locality">Reykjavík</span>
  <span class="p-country-name">Iceland</span>
</p>
```

| プロパティ             | 説明                                             |
| ---------------------- | ------------------------------------------------ |
| **`p-name`**           | 個人や団体の完全な/書式化された名前。            |
| **`u-email`**          | メールアドレス                                   |
| **`u-photo`**          | 個人や団体の写真。                               |
| **`u-url`**            | ホームページまたは個人や団体を表すその他の URL。 |
| **`u-uid`**            | 普遍的で固有の識別子、できれば正規 URL。         |
| **`p-street-address`** | 通り番号 + 名前                                  |
| **`p-locality`**       | 市町村                                           |
| **`p-country-name`**   | 国名                                             |

#### 入れ子になった h-card の例

```html
<div class="h-card">
  <a class="p-name u-url" href="https://blog.lizardwrangler.com/">
    Mitchell Baker
  </a>
  (<a class="p-org h-card" href="https://mozilla.org/">Mozilla Foundation</a>)
</div>
```

解釈した JSON では次のようになります。

```json
{
  "items": [
    {
      "type": ["h-card"],
      "properties": {
        "name": ["Mitchell Baker"],
        "url": ["https://blog.lizardwrangler.com/"],
        "org": [
          {
            "value": "Mozilla Foundation",
            "type": ["h-card"],
            "properties": {
              "name": ["Mozilla Foundation"],
              "url": ["https://mozilla.org/"]
            }
          }
        ]
      }
    }
  ]
}
```

この例では、個人と、その個人が代表する組織の両方に h-card が指定されています。個人とリンク先の組織との関連は、 p-org プロパティを使用して指定されています。

メモ： 入れ子になった h-card には、`<a href>` 上の他のルートクラス名のみの h-card と同様に、「name」および「url」プロパティが暗黙的に含まれています。

### h-entry

[h-entry](https://microformats.org/wiki/h-entry) マイクロフォーマットは、ウェブ上のエピソードや日付付きコンテンツを表します。h-entry は、ブログ記事や短いメモなど、シンジケートされることを意図したコンテンツで多く使用されています。

h-entry によるブログ投稿の例:

```html
<article class="h-entry">
  <h1 class="p-name">Microformats are amazing</h1>
  <p>
    Published by
    <a class="p-author h-card" href="https://example.com">W. Developer</a> on
    <time class="dt-published" datetime="2013-06-13 12:00:00">
      13<sup>th</sup> June 2013
    </time>
  </p>

  <p class="p-summary">In which I extoll the virtues of using microformats.</p>

  <div class="e-content">
    <p>Blah blah blah</p>
  </div>
</article>
```

#### プロパティ

| プロパティ         | 説明                                            |
| ------------------ | ----------------------------------------------- |
| **`p-name`**       | 記事名/タイトル                                 |
| **`p-author`**     | 記事を書いた人、オプションで埋め込まれた h-card |
| **`dt-published`** | 記事が公開されたとき                            |
| **`p-summary`**    | 記事の短い概要                                  |
| **`e-content`**    | 記事の完全なコンテンツ                          |

#### 解釈された返信 h-entry の例

```html
<div class="h-entry">
  <p>
    <span class="p-author h-card">
      <a href="https://quickthoughts.jgregorymcverry.com/profile/jgmac1106">
        <img
          class="u-photo"
          alt="Greg McVerry"
          src="https://quickthoughts.jgregorymcverry.com/file/2d6c9cfed7ac8e849f492b5bc7e6a630/thumb.jpg" />
      </a>
      <a
        class="p-name u-url"
        href="https://quickthoughts.jgregorymcverry.com/profile/jgmac1106">
        Greg McVerry
      </a>
    </span>
    Replied to
    <a
      class="u-in-reply-to"
      href="https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Microformats">
      a post on <strong>developer.mozilla.org</strong>
    </a>
    :
  </p>
  <p class="p-name e-content">
    Hey thanks for making this microformats resource
  </p>
  <p>
    <a href="https://quickthoughts.jgregorymcverry.com/profile/jgmac1106">
      Greg McVerry
    </a>
    published this
    <a
      class="u-url url"
      href="https://quickthoughts.jgregorymcverry.com/2019/05/31/hey-thanks-for-making-this-microformats-resource">
      <time class="dt-published" datetime="2019-05-31T14:19:09+0000">
        31 May 2019
      </time>
    </a>
  </p>
</div>
```

```json
{
  "items": [
    {
      "type": ["h-entry"],
      "properties": {
        "in-reply-to": [
          "https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Microformats"
        ],
        "name": ["Hey thanks for making this microformats resource"],
        "url": [
          "https://quickthoughts.jgregorymcverry.com/2019/05/31/hey-thanks-for-making-this-microformats-resource"
        ],
        "published": ["2019-05-31T14:19:09+0000"],
        "content": [
          {
            "html": "Hey thanks for making this microformats resource",
            "value": "Hey thanks for making this microformats resource",
            "lang": "en"
          }
        ],
        "author": [
          {
            "type": ["h-card"],
            "properties": {
              "name": ["Greg McVerry"],
              "photo": [
                "https://quickthoughts.jgregorymcverry.com/file/2d6c9cfed7ac8e849f492b5bc7e6a630/thumb.jpg"
              ],
              "url": [
                "https://quickthoughts.jgregorymcverry.com/profile/jgmac1106"
              ]
            },
            "lang": "en",
            "value": "Greg McVerry"
          }
        ]
      },
      "lang": "en"
    }
  ]
}
```

### h-feed

[h-feed](https://microformats.org/wiki/h-feed) は、ホームページやアーカイブページに掲載されている完全な投稿、投稿の概要やその他の簡単なリストなど、 [h-entry](https://microformats.org/wiki/h-entry) 投稿のストリームまたはフィードです。

#### h-feed の例

```html
<div class="h-feed">
  <h1 class="p-name">Microformats Blogs</h1>
  <article class="h-entry">
    <h2 class="p-name">Microformats are amazing</h2>
    <p>
      Published by
      <a class="p-author h-card" href="https://example.com">W. Developer</a> on
      <time class="dt-published" datetime="2013-06-13 12:00:00">
        13<sup>th</sup> June 2013
      </time>
    </p>
    <p class="p-summary">
      In which I extoll the virtues of using microformats.
    </p>
    <div class="e-content"><p>Blah blah blah</p></div>
  </article>
</div>
```

#### プロパティ

| プロパティ     | 説明                                                   |
| -------------- | ------------------------------------------------------ |
| **`p-name`**   | フィードの名前                                         |
| **`p-author`** | フィードの作成者、オプションで h-card を埋め込みます。 |

#### 子

<table class="standard-table">
  <tbody>
    <tr>
      <td><strong>内側の h-entry</strong></td>
      <td></td>
    </tr>
    <tr>
      <td>このフィードのアイテムを表すオブジェクト</td>
      <td></td>
    </tr>
  </tbody>
</table>

### h-event

`h-event` は、ウェブ上のイベント用です。h-event は、イベントの一覧と個々のイベントページの両方でよく使用されます。

```html
<div class="h-event">
  <h1 class="p-name">Microformats Meetup</h1>
  <p>
    From
    <time class="dt-start" datetime="2013-06-30 12:00">
      30<sup>th</sup> June 2013, 12:00
    </time>
    to <time class="dt-end" datetime="2013-06-30 18:00">18:00</time> at
    <span class="p-location">Some bar in SF</span>
  </p>
  <p class="p-summary">
    Get together and discuss all things microformats-related.
  </p>
</div>
```

#### プロパティ

| プロパティ       | 説明                                                     |
| ---------------- | -------------------------------------------------------- |
| **`p-name`**     | イベント名（またはタイトル）                             |
| **`p-summary`**  | イベントの短い概要                                       |
| **`dt-start`**   | イベントが始まる日時                                     |
| **`dt-end`**     | イベントが終わる日時                                     |
| **`p-location`** | イベントが開催される場所、オプションで h-card の埋め込み |

#### 解釈された h-event の例

```html
<div class="h-event">
  <h2 class="p-name">IndieWeb Summit</h2>
  <time class="dt-start" datetime="2019-06-29T09:00:00-07:00">
    June 29, 2019 at 9:00am (-0700)
  </time>
  <br />through
  <time class="dt-end" datetime="2019-06-30T18:00:00-07:00">
    June 30, 2019 at 6:00pm (-0700)
  </time>
  <br />
  <div class="p-location h-card">
    <div>
      <span class="p-name">Mozilla</span>
    </div>
    <div>
      <span class="p-street-address">1120 NW Couch St</span>,
      <span class="p-locality">Portland</span>,
      <span class="p-region">Oregon</span>,
      <span class="p-country">US</span>
    </div>
    <data class="p-latitude" value="45.52345"></data>
    <data class="p-longitude" value="-122.682677"></data>
  </div>
  <div class="e-content">Come join us</div>
  <div>
    <span class="p-author h-card">
      <a class="u-url p-name" href="https://aaronparecki.com">Aaron Parecki</a>
    </span>
    Published this
    <a href="https://aaronparecki.com/2019/06/29/1/" class="u-url">event </a>on
    <time class="dt published" datetime="2019-05-25T18:00:00-07:00">
      May 5th, 2019
    </time>
  </div>
</div>
```

```json
{
  "items": [
    {
      "type": ["h-event"],
      "properties": {
        "name": ["IndieWeb Summit"],
        "url": ["https://aaronparecki.com/2019/06/29/1/"],
        "author": [
          {
            "type": ["h-card"],
            "properties": {
              "name": ["Aaron Parecki"],
              "url": ["https://aaronparecki.com"]
            },
            "lang": "en",
            "value": "Aaron Parecki"
          }
        ],
        "start": ["2019-06-29T09:00:00-07:00"],
        "end": ["2019-06-30T18:00:00-07:00"],
        "published": ["2019-05-25T18:00:00-07:00"],
        "content": [
          {
            "html": "Come join us",
            "value": "Come join us",
            "lang": "en"
          }
        ],
        "location": [
          {
            "type": ["h-card"],
            "properties": {
              "name": ["Mozilla"],
              "p-street-address": ["1120 NW Couch St"],
              "locality": ["Portland"],
              "region": ["Oregon"],
              "country": ["US"],
              "latitude": ["45.52345"],
              "longitude": ["-122.682677"]
            },
            "lang": "en",
            "value": "Mozilla"
          }
        ]
      },
      "lang": "en"
    }
  ]
}
```

## マイクロフォーマットの rel プロパティの例

特別な `rel=` プロパティを使用してページに適用されるマイクロフォーマットがあります。これらのマイクロフォーマットは、現在の文書とリンク先の文書との関係を記述します。これらの完全なリストについては、マイクロフォーマットウィキの [rel プロパティ](https://microformats.org/wiki/rel-values)をご覧ください。

### rel=author

この属性は、リンク先の文書が現在のページの作成者を表すことを指定します。

```html
<a rel="author" href="https://jamesg.blog">James Gallagher</a>
```

### rel=license

この属性は、リンク先の文書に現在のページが公開されているライセンスが含まれていることを指定します。

```html
<a rel="license" href="https://mit-license.org/">MIT License</a>
```

### rel=nofollow

この属性は、リンク先の文書に、現在のページから導出される検索エンジンのランキングアルゴリズムによる重みを付与してはならないことを指定します。これは、リンクグラフアルゴリズムが、文書へのリンクを見た後に、そのページを本来よりも高く評価することを防ぐために有用です。

```html
<a rel="nofollow" href="https://jamesg.blog">James Gallagher</a>
```

## ブラウザーの互換性

すべてのブラウザーが class 属性と DOM API に対応していることにより対応しています。

## 関連情報

- [class 属性](/ja/docs/Web/HTML/Reference/Global_attributes/class)
- [Microformat](https://ja.wikipedia.org/wiki/Microformat)（ウィキペディア）
- [Microformats 公式ウェブサイト](https://microformats.org/wiki/Main_Page)
- [Search engines support](https://microformats.org/wiki/search_engines) on Microformats official website
- [Microformats on IndieWebCamp](https://indieweb.org/microformats)
