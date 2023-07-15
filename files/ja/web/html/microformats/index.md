---
title: マイクロフォーマット
slug: Web/HTML/microformats
---

## 概要

[_マイクロフォーマット_](http://microformats.org/) (Microformat) (**μF** と略記されることもあります) は、意味情報と構造化データを HTML に埋め込むために使用される規格で、検索エンジンやアグリゲーター、その他のツールが使用するための API を提供します。HTML のこれらの最小限のパターンは、人、組織、イベント、場所などの基本的な情報からドメイン固有の情報まで、さまざまなものをマークアップするために使用されます。マイクロフォーマットは、オブジェクトを記述するためにサポートする語彙を使用し、そのプロパティに値を割り当てるために名前と値のペアを使用します。プロパティはクラス属性で運ばれ、任意の HTML 要素に追加することができ、データ値は HTML 要素のコンテンツとセマンティック属性を再利用します。マイクロフォーマット 2 はマイクロフォーマットの更新版で、HTML の構造化された構文や語彙に注釈を付けるために新しい属性を学習する必要がある RDFa やマイクロデータを使用する以前のアプローチよりもシンプルな方法を提供します。

マイクロフォーマットは、すべての主要な検索エンジンが対応しています。検索エンジンは、この構造化データに直接アクセスすることで、ウェブページ上の情報を理解し、より関連性の高い結果をユーザーに提供することができるため、大きな利益を得ることができます。マイクロフォーマットは機械可読性があることにくわえ、人間も簡単に読めるように設計されています。

- マイクロフォーマットのオブジェクトを生成するには、class 属性に h-\* というクラス名を付けてください。
- オブジェクトへプロパティを追加するには、p-\*, u-\*, dt-\*, e-\* のクラス名がオブジェクトの子孫の一つに使用されます。

マイクロフォーマット 2 には[オープンソースの主要言語における解釈ライブラリ](http://microformats.org/wiki/microformats2#Parsers)があります。

## マイクロフォーマットはどのように動作するのか

An author of a webpage can add microformats to their HTML. For example if they wanted to identify themselves they could use an [h-card](http://microformats.org/wiki/h-card) such as:

### HTML の例

```html
<a class="h-card" href="https://alice.example.com">Alice Blogger</a>
```

When a parser encounters this data, it will know that this page contains a "card" which describes a person or organization named `Alice Blogger` with a URL of `http://alice.example.com/`. The parser makes this data available via APIs that can be used for different applications.

As in this example, some markup patterns require only a single microformat root class name, which parsers use to find a few generic properties such as `name`, `url`, `photo`.

## マイクロフォーマットの接頭辞

All microformats consist of a root, and a collection of properties. Properties are all optional and potentially multivalued - applications needing a singular value may use the first instance of a property. Hierarchical data is represented with nested microformats, typically as property values themselves.

All microformats class names use prefixes. Prefixes are **syntax independent from vocabularies**, which are developed separately.

- **"h-\*" for root class names**, e.g. "h-card", "h-entry", "h-feed", and many more. These top-level root classes usually indicate a type and corresponding expected vocabulary of properties. For example:

  - [h-card](http://microformats.org/wiki/h-card) describes a person or organization
  - [h-entry](http://microformats.org/wiki/h-entry) describes episodic or date stamped online content like a blog post
  - [h-feed](http://microformats.org/wiki/h-feed) describes a stream or feed of posts
  - You can find many more [vocabularies on the microformats2 wiki.](http://microformats.org/wiki/microformats2#v2_vocabularies)

- **"p-\*" for plain (text) properties**, e.g. "p-name", "p-summary"

  - Generic plain text parsing, element text in general. On certain HTML elements, use special attributes first, e.g. img/alt, abbr/title.

- **"u-\*" for URL properties**, e.g. "u-url", "u-photo", "u-logo"

  - Special parsing: element attributes a/href, img/src, object/data etc. attributes over element contents.

- **"dt-\*" for datetime properties**, e.g. "dt-start", "dt-end", "dt-bday"

  - Special parsing: time element datetime attribute, [value-class-pattern](http://microformats.org/wiki/value-class-pattern) and separate date time value parsing for readability.

- **"e-\*" for element tree properties** where the entire contained element hierarchy is the value, e.g. "e-content". The "e-" prefix can also be mnemonically remembered as "element tree", "embedded markup", or "encapsulated markup".

## マイクロフォーマットの例

### h-card

The [h-card](http://microformats.org/wiki/h-card) microformat represents a a person or organization.

The value of each property is defined in HTML using the class property any element can carry

#### h-card の例

```html
<p class="h-card">
  <img class="u-photo" src="https://example.org/photo.png" alt="" />
  <a class="p-name u-url" href="https://example.org">Joe Bloggs</a>
  <a class="u-email" href="mailto:joebloggs@example.com">joebloggs@example.com</a>,
  <span class="p-street-address">17 Austerstræti</span>
  <span class="p-locality">Reykjavík</span>
  <span class="p-country-name">Iceland</span>
</p>
```

| プロパティ             | 説明                                                           |
| ---------------------- | -------------------------------------------------------------- |
| **`p-name`**           | The full/formatted name of the person or organization.         |
| **`u-email`**          | email address                                                  |
| **`u-photo`**          | a photo of the person or organization                          |
| **`u-url`**            | home page or other URL representing the person or organization |
| **`u-uid`**            | universally unique identifier, preferably canonical URL        |
| **`p-street-address`** | street number + name                                           |
| **`p-locality`**       | city/town/village                                              |
| **`p-country-name`**   | country name                                                   |

#### 入れ子になった h-card の例

```html
<div class="h-card">
  <a class="p-name u-url"
   href="https://blog.lizardwrangler.com/"
  >Mitchell Baker</a>
  (<a class="p-org h-card"
    href="https://mozilla.org/"
   >Mozilla Foundation</a>)
</div>
```

Parsed JSON:

```json
{
  "items": [{
  "type": ["h-card"],
  "properties": {
    "name": ["Mitchell Baker"],
    "url": ["https://blog.lizardwrangler.com/"],
    "org": [{
    "value": "Mozilla Foundation",
    "type": ["h-card"],
    "properties": {
      "name": ["Mozilla Foundation"],
      "url": ["https://mozilla.org/"]
    }
    }]
  }
  }]
}
```

Note: the nested h-card has implied 'name' and 'url' properties, just like any other root-class-name-only h-card on an `<a href>` would.

### h-entry

The [h-entry](http://microformats.org/wiki/h-entry) microformat represents episodic or datestamped content on the web. h-entry is often used with content intended to be syndicated, e.g. blog posts.

Example h-entry as a blog post:

```html
<article class="h-entry">
  <h1 class="p-name">Microformats are amazing</h1>
  <p>Published by <a class="p-author h-card" href="https://example.com">W. Developer</a>
   on <time class="dt-published" datetime="2013-06-13 12:00:00">13<sup>th</sup> June 2013</time></p>

  <p class="p-summary">In which I extoll the virtues of using microformats.</p>

  <div class="e-content">
  <p>Blah blah blah</p>
  </div>
</article>
```

#### プロパティ

| プロパティ         | 説明                                            |
| ------------------ | ----------------------------------------------- |
| **`p-name`**       | entry name/title                                |
| **`p-author`**     | who wrote the entry, optionally embedded h-card |
| **`dt-published`** | when the entry was published                    |
| **`p-summary`**    | short entry summary                             |
| **`e-content`**    | full content of the entry                       |

#### Parsed reply h-entry example

```html
<div class="h-entry">
  <p><span class="p-author h-card">
    <a href="https://quickthoughts.jgregorymcverry.com/profile/jgmac1106" ><img class="u-photo" src="https://quickthoughts.jgregorymcverry.com/file/2d6c9cfed7ac8e849f492b5bc7e6a630/thumb.jpg"/></a>
    <a class="p-name u-url" href="https://quickthoughts.jgregorymcverry.com/profile/jgmac1106">Greg McVerry</a></span>
     Replied to <a class="u-in-reply-to" href="https://developer.mozilla.org/ja/docs/Web/HTML/microformats">a post on
   <strong>developer.mozilla.org</strong> </a>:
  </p>
   <p class="p-name e-content">Hey thanks for making this microformats resource</p>
   <p> <a href="https://quickthoughts.jgregorymcverry.com/profile/jgmac1106">Greg McVerry</a>
  published this <a class="u-url url" href="https://quickthoughts.jgregorymcverry.com/2019/05/31/hey-thanks-for-making-this-microformats-resource"><time class="dt-published"
   datetime="2019-05-31T14:19:09+0000">31 May 2019</time></a></p>
</div>
```

```json
{
  "items": [
    {
      "type": [ "h-entry" ],
      "properties": {
        "in-reply-to": [ "https://developer.mozilla.org/ja/docs/Web/HTML/microformats" ],
        "name": [ "Hey thanks for making this microformats resource" ],
        "url": [ "https://quickthoughts.jgregorymcverry.com/2019/05/31/hey-thanks-for-making-this-microformats-resource" ],
        "published": [ "2019-05-31T14:19:09+0000" ],
        "content": [
          {
            "html": "Hey thanks for making this microformats resource",
            "value": "Hey thanks for making this microformats resource",
            "lang": "en"
          }
        ],
        "author": [
          {
            "type": [ "h-card" ],
            "properties": {
              "name": [ "Greg McVerry" ],
              "photo": [ "https://quickthoughts.jgregorymcverry.com/file/2d6c9cfed7ac8e849f492b5bc7e6a630/thumb.jpg" ],
              "url": [ "https://quickthoughts.jgregorymcverry.com/profile/jgmac1106" ]
            },
            "lang": "en",
            "value": "Greg McVerry"
          }
        ]
      },
      "lang": "en"
    }
```

### h-feed

The [h-feed](http://microformats.org/wiki/h-feed) is a stream or feed of [h-entry](http://microformats.org/wiki/h-entry) posts, like complete posts on a home page or archive pages, or summaries or other brief lists of posts

#### Example h-feed

```html
<div class="h-feed">
  <h1 class="p-name">Microformats Blogs</h1>
  <article class="h-entry">
  <h2 class="p-name">Microformats are amazing</h2>
  <p>Published by <a class="p-author h-card" href="https://example.com">W. Developer</a>
     on <time class="dt-published" datetime="2013-06-13 12:00:00">13<sup>th</sup> June 2013</time>
  </p>
  <p class="p-summary">In which I extoll the virtues of using microformats.</p>
  <div class="e-content"> <p>Blah blah blah</p> </div>
  </article>
</div>
```

#### プロパティ

| プロパティ     | 説明                                           |
| -------------- | ---------------------------------------------- |
| **`p-name`**   | name of the feed                               |
| **`p-author`** | author of the feed, optionally embed an h-card |

#### Children

| **Nested h-entry**                         |     |
| ------------------------------------------ | --- |
| objects representing the items of the feed |     |

### h-event

The `h-event` is for events on the web. h-event is often used with both event listings and individual event pages

```html
<div class="h-event">
  <h1 class="p-name">Microformats Meetup</h1>
  <p>From
  <time class="dt-start" datetime="2013-06-30 12:00">30<sup>th</sup> June 2013, 12:00</time>
  to <time class="dt-end" datetime="2013-06-30 18:00">18:00</time>
  at <span class="p-location">Some bar in SF</span></p>
  <p class="p-summary">Get together and discuss all things microformats-related.</p>
</div>
```

#### プロパティ

| プロパティ       | 説明                                                    |
| ---------------- | ------------------------------------------------------- |
| **`p-name`**     | event name (or title)                                   |
| **`p-summary`**  | short summary of the event                              |
| **`dt-start`**   | datetime the event starts                               |
| **`dt-end`**     | datetime the event ends                                 |
| **`p-location`** | where the event takes place, optionally embedded h-card |

#### Parsed h-event Example

```html
<div class="h-event">
  <h2 class="p-name">IndieWeb Summit</h2>
  <time class="dt-start" datetime="2019-06-29T09:00:00-07:00">June 29, 2019 at 9:00am  (-0700)</time><br>through <time class="dt-end" datetime="2019-06-30T18:00:00-07:00">June 30, 2019 at 6:00pm (-0700)</time><br>
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
    <div class="e-content">Come join us
     </div>
    <div>
     <span class="p-author h-card"><a class="u-url p-name" href="https://aaronparecki.com">Aaron Parecki</a></span> Published this <a href="https://aaronparecki.com/2019/06/29/1/" class="u-url">event </a>on <time class="dt published" datetime="2019-05-25T18:00:00-07:00">May 5th, 2019</time>
    </div>
</div>
```

```json
{
  "items": [
    {
      "type": [ "h-event" ],
      "properties": {
        "name": [ "IndieWeb Summit" ],
        "url": [ "https://aaronparecki.com/2019/06/29/1/" ],
        "author": [
          {
            "type": [ "h-card" ],
            "properties": {
              "name": [ "Aaron Parecki" ],
              "url": [ "https://aaronparecki.com"]
            },
            "lang": "en",
            "value": "Aaron Parecki"
          }
        ],
        "start": [ "2019-06-29T09:00:00-07:00" ],
        "end": [ "2019-06-30T18:00:00-07:00" ],
        "published": [ "2019-05-25T18:00:00-07:00" ],
        "content": [
          {
            "html": "Come join us",
            "value": "Come join us",
            "lang": "en"
          }
        ],
        "location": [
          {
            "type": [ "h-card" ],
            "properties": {
              "name": [ "Mozilla" ],
              "p-street-address": [ "1120 NW Couch St" ]
              "locality": [ "Portland" ],
              "region": [ "Oregon" ],
              "country": [ "US" ],
              "latitude": [ "45.52345" ],
              "longitude": [ "-122.682677" ]
            },
            "lang": "en",
            "value": "Mozilla"
          }
        ]
      },
      "lang": "en"
    }
  ],
```

## ブラウザーの互換性

すべてのブラウザーが class 属性と DOM API に対応していることにより対応しています。

## 関連情報

- [class 属性](/ja/docs/Web/HTML/Global_attributes/class)
- Wikipedia の [Microformat](https://ja.wikipedia.org/wiki/Microformat)
- [Microformats 公式ウェブサイト](http://microformats.org/)
- [Search engines support](http://microformats.org/wiki/search_engines) on Microformats official website
- [Microformats on IndieWebCamp](https://indiewebcamp.com/microformats)
