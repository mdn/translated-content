---
title: 微格式
slug: Web/HTML/Guides/Microformats
l10n:
  sourceCommit: e04d8d2766c468f149445c0bf438d09f9b2d188c
---

[_微格式_](https://microformats.org/)（microformat）是一种用于在 HTML 中嵌入语义和结构化数据的标准，它为社交网络应用程序、搜索引擎、聚合器和其他工具提供了一个 API。这些最小的 HTML 模式用于标记从基本到特定领域的信息实体，例如人物、组织、事件和地点。

- 要创建一个微格式对象，需要在 class 属性中使用 h-\* 类名。
- 要给对象添加属性，需要在对象的后代元素上使用 p-\*、u-\*、dt-\*、e-\* 类名。

微格式使用支持词汇表来描述对象，并使用名称——值对为它们的属性赋值。属性被包含在可以添加到任何 HTML 元素的 class 属性中，而数据值则复用了 HTML 元素内容和语义属性。

微格式 2（有时被称为 mf2）是对微格式的更新，它提供了一种比以往使用 RDFa 和 microdata 的方法更简单的 HTML 结构化语法和词汇表注释方式。这些以前的方法需要获得新的属性。

对于微格式 2，[大多数语言都有开源的解析库](https://microformats.org/wiki/microformats2#Parsers)。

## 微格式的工作原理

网页的作者可以向他们的 HTML 中添加微格式。例如，如果他们想要标识自己的身份，可以使用 [h-card](https://microformats.org/wiki/h-card) 例如：

### HTML 示例

```html
<a class="h-card" href="https://alice.example.com">Alice Blogger</a>
```

当解析器遇到这些数据时，它将知道这个页面包含了一个“卡片”，其描述了一个叫 `Alice Blogger` 的人或组织，其 URL 为 `https://alice.example.com/`。解析器通过 API 使这些数据可用，这些 API 可以用于不同的应用程序。例如，应用程序可以扫描页面上的 h-card，用作注册服务的某个人的个人资料信息。

正如在这个案例中，某些标记模式只需要一个单一的微格式根类名，解析器使用它来查找一些通用属性，例如 `name`、`url`、`photo`。

## 微格式使用案例

微格式有许多使用案例。首先，[Webmention 标准](https://www.w3.org/TR/webmention/)使用微格式提供了一种可以将消息和评论从一个网站发送到另一个网站的方式。Webmention 规范定义了特定属性，以便于站点发布和消费，以创建丰富、可互操作的消息和评论发布方式。微格式也可以与 Webmentions 一起使用，便于从一个网站向另一个网站发送社交反应，如喜欢、转帖和书签。

微格式还支持跨站点的轻松聚合。聚合器可以解析发布微格式的页面，寻找诸如帖子标题、帖子正文和帖子作者等信息。然后，这个聚合器可以使用收集到的语义信息在其站点上呈现结果。例如，新闻聚合器和社区发帖板可以促进提交，并使用微格式从页面中提取相关内容。此外，网站可以使用微格式来向第三方（例如社交网络）发送构建好的请求以发布内容。

所有主流搜索引擎都支持读取和解析微格式。搜索引擎从直接访问结构化数据中获益匪浅，因为它们允许搜索引擎去理解网页上的信息。有了这些信息，搜索引擎可以为用户提供更具有相关性的结果。一些搜索引擎可能会根据微格式中提供的数据，在搜索结果页面上呈现特殊的片段，例如星级评分。

除了可以被机器读取外，微格式还便于人类阅读。这种方法使人们容易理解和维护微格式数据。

## 微格式前缀

所有微格式由根和属性集合组成。属性全部是可选的，可能是多值的——需要单一值的应用程序可以使用属性的第一个实例。层次数据通过嵌套微格式表示，通常作为属性值本身。

所有微格式类名使用前缀。前缀是**与词汇表无关的语法**，它们是被独立开发出来的。

- **“h-\*”用于根类名**，例如“h-card”、“h-entry”、“h-feed”等。这些顶级根类通常指示一个类型和相应的预期属性词汇表。例如：
  - [h-card](https://microformats.org/wiki/h-card) 描述一个人或组织
  - [h-entry](https://microformats.org/wiki/h-entry) 描述具有时间戳的在线内容，如博客帖子
  - [h-feed](https://microformats.org/wiki/h-feed) 描述帖子的流或源
  - 你可以在 [microformats2 wiki 上找到更多词汇表](https://microformats.org/wiki/microformats2#v2_vocabularies)。

- **“p-\*”用于纯（文本）属性**，例如：“p-name”、“p-summary”
  - 通用纯文本解析，一般元素文本。在某些 HTML 元素上，首先使用特殊属性，例如：img/alt、abbr/title。

- **“u-\*”用于 URL 属性**，例如：“u-url”、“u-photo”、“u-logo”
  - 特殊解析：元素属性 a/href、img/src、object/data 等优先于元素内容。

- **“dt-\*”用于 datetime 属性**，例如：“dt-start”、“dt-end”、“dt-bday”
  - 特殊解析：time 元素 datetime 属性、[value-class-pattern](https://microformats.org/wiki/value-class-pattern) 和单独的日期时间值解析，以提高可读性。

- **“e-\*”用于元素树属性**，其中整个包含的元素层次结构是值，例如“e-content”。“e-”前缀也可以通过“元素树（element tree）”、“嵌入式标记（embedded markup）”或“封装标记（encapsulated markup）”来记忆。

## 微格式示例

### h-card

[h-card](https://microformats.org/wiki/h-card) 微格式表示一个人或组织。

每个属性的值都是使用 HTML 中的类属性定义的，任何元素都可以携带。

#### h-card 示例

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

| 属性                   | 描述                           |
| ---------------------- | ------------------------------ |
| **`p-name`**           | 个人或组织的全名/格式化名称    |
| **`u-email`**          | 电子邮件地址                   |
| **`u-photo`**          | 个人或组织的照片               |
| **`u-url`**            | 代表个人或组织的主页或其他 URL |
| **`u-uid`**            | 通用唯一标识符，最好是规范 URL |
| **`p-street-address`** | 街道号码 + 名称                |
| **`p-locality`**       | 城市/城镇/村庄                 |
| **`p-country-name`**   | 国家名称                       |

#### 嵌套的 h-card 示例

```html
<div class="h-card">
  <a class="p-name u-url" href="https://blog.lizardwrangler.com/">
    Mitchell Baker
  </a>
  (<a class="p-org h-card" href="https://mozilla.org/">Mozilla Foundation</a>)
</div>
```

解析后的 JSON：

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

在这个例子中，h-card 分别指定了一个人和他们代表的组织。使用 p-org 属性指定了个人与链接组织的关联。

注意：嵌套的 h-card 具有隐含的“name”和“url”属性，就像任何其他仅根类名的 h-card 在 `<a href>` 上一样。

### h-entry

[h-entry](https://microformats.org/wiki/h-entry) 微格式表示 web 上的分集或有时间戳的内容。h-entry 通常与打算进行聚合的内容一起使用，例如博客帖子和简短笔记。

示例：h-entry 作为博客帖子：

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

#### 属性

| 属性               | 描述                        |
| ------------------ | --------------------------- |
| **`p-name`**       | 条目的名称/标题             |
| **`p-author`**     | 编写条目的人，可嵌入 h-card |
| **`dt-published`** | 条目发布的时间              |
| **`p-summary`**    | 条目的简短摘要              |
| **`e-content`**    | 条目的完整内容              |

#### 解析后的回复 h-entry 示例

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
      href="https://developer.mozilla.org/en-US/docs/Web/HTML/microformats">
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
          "https://developer.mozilla.org/en-US/docs/Web/HTML/microformats"
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

[h-feed](https://microformats.org/wiki/h-feed) 是 [h-entry](https://microformats.org/wiki/h-entry) 帖子的流或消息来源，如主页或存档页面上的所有帖子，或摘要或其他简短帖子列表。

#### 示例 h-feed

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

#### 属性

| 属性           | 描述                    |
| -------------- | ----------------------- |
| **`p-name`**   | 源的名称                |
| **`p-author`** | 源的作者，可嵌入 h-card |

#### 子级

<table class="standard-table">
  <tbody>
    <tr>
      <td><strong>嵌套的 h-entry</strong></td>
      <td></td>
    </tr>
    <tr>
      <td>表示消息来源条目的对象</td>
      <td></td>
    </tr>
  </tbody>
</table>

### h-event

`h-event` 用于 web 上的事件。h-event 通常用于活动列表和单个活动页面。

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

#### 属性

| 属性             | 描述                        |
| ---------------- | --------------------------- |
| **`p-name`**     | 事件名称（或标题）          |
| **`p-summary`**  | 事件的简短摘要              |
| **`dt-start`**   | 事件开始的时间              |
| **`dt-end`**     | 事件结束的时间              |
| **`p-location`** | 事件发生地点，可嵌入 h-card |

#### 解析后的 h-event 示例

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

## 微格式 rel 属性示例

有一些微格式是通过使用特殊的 `rel=` 属性应用于页面的。这些微格式描述了当前文档和链接文档之间的关系。要获得完整的列表，请参阅微格式维基上的 [rel 属性](https://microformats.org/wiki/rel-values)。

### rel=author

此属性声明链接的文档代表当前页面的作者。

```html
<a rel="author" href="https://jamesg.blog">James Gallagher</a>
```

### rel=license

此属性声明链接的文档包含发布当前页面所依据的许可证。

```html
<a rel="license" href="https://mit-license.org/">MIT License</a>
```

### rel=nofollow

该属性声明链接的文档不应该被搜索引擎排名算法赋予任何权重，这些算法可能来自当前页面。这有助于防止链接图算法在看到指向文档的链接后对页面的权重高于其他情况。

```html
<a rel="nofollow" href="https://jamesg.blog">James Gallagher</a>
```

## 浏览器兼容性

所有浏览器都支持 class 属性及其 DOM API。

## 参见

- [类属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes/class)
- 维基百科上的[微格式](https://zh.wikipedia.org/wiki/微格式)
- [微格式官网](https://microformats.org/)
- 微格式官网中的[搜索引擎支持](https://microformats.org/wiki/search_engines)
- [IndieWebCamp 上的微格式](https://indieweb.org/microformats)
