---
title: 挑战：标记信件
slug: Learn_web_development/Core/Structuring_content/Marking_up_a_letter
l10n:
  sourceCommit: 39b59de03c08a5de12ce99a217988f6a0756407d
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Test_your_skills/Advanced_HTML_text", "Learn_web_development/Core/Structuring_content/Structuring_documents", "Learn_web_development/Core/Structuring_content")}}

我们终究都会学会写信；这同时也是检验文本排版技能的实用范例。本次挑战中，我们将提供一封信件供你标记，以此测试你的 HTML 文本排版能力以及对 HTML `<head>` 内容的掌握程度。

## 起点

首先，点击下方代码示例面板中的 **Play** 按钮，在 MDN Playground 中打开提供的正文文本。你将按照后续章节中的说明对文本进行适当标记。

```html-nolint live-sample___start
Dr. Eleanor Gaye
Awesome Science faculty
University of Awesome
Bobtown, CA 99999,
USA
Tel: 123-456-7890
Email: no_reply@example.com

20 January 2016

Miss Eileen Dover
4321 Cliff Top Edge
Dover, CT9 XXX
UK

Re: Eileen Dover university application

Dear Eileen,

Thank you for your recent application to join us at the University of
Awesome's science faculty to study as part of your
PhD (Doctor of Philosophy) next year. I will answer your
questions one by one, in the following sections.

Starting dates

We are happy to accommodate you starting your study with us at any time,
however it would suit us better if you could start at the beginning of a
semester; the start dates for each one are as follows:

First semester: 9 September 2016
Second semester: 15 January 2017
Third semester: 2 May 2017

Please let me know if this is ok, and if so which start date you would
prefer.

Subjects of study

At the Awesome Science Faculty, we have a pretty open-minded research
facility — as long as the subjects fall somewhere in the realm of science
and technology. You seem like an intelligent, dedicated researcher, and
just the kind of person we'd like to have on our team. Saying that, of the
ideas you submitted we were most intrigued by are as follows, in order of
priority:

Turning H2O into wine, and the health benefits of Resveratrol
(C14H12O3).
Measuring the effect on performance of funk bass players at temperatures
exceeding 30°C (86°F), when the audience size exponentially increases
(effect of 3 × 103 increasing to 3 × 104).
HTML, Hypertext Markup Language, and CSS,
Cascading Style Sheets, constructs for representing musical scores.

So please can you provide more information on each of these subjects,
including how long you'd expect the research to take, required staff and
other resources, and anything else you think we'd need to know? Thanks.

Exotic dance moves

Yes, you are right! As part of my post-doctorate work, I
did study exotic tribal dances. To answer your question, my
favorite dances are as follows, with definitions:

Polynesian chicken dance
    A little known but very influential dance dating back as far as
    300 BCE, a whole village would
    dance around in a circle like chickens, to encourage their livestock to
    be "fruitful".
Icelandic brownian shuffle
    Before the Icelanders developed fire as a means of getting warm, they
    used to practice this dance, which involved huddling close together in a
    circle on the floor, and shuffling their bodies around in imperceptibly
    tiny, very rapid movements. One of my fellow students used to say that
    he thought this dance inspired modern styles such as Twerking.
Arctic robot dance
    An interesting example of historic misinformation, English explorers in
    the 1960s believed to have discovered a new dance style characterized by
    "robotic", stilted movements, being practiced by inhabitants of Northern
    Alaska and Canada. Later on however it was discovered that they were
    just moving like this because they were really cold.

Yours sincerely,

Dr Eleanor Gaye

University of Awesome motto: Be awesome to each other. --
The memoirs of Bill S Preston, Esq.
```

{{embedlivesample("start", "100%", "200px")}}

## 项目概要

本项目中，你的任务为对一封大学内网信件进行标记，这封信是研究人员对一名学生有关申请博士学位问题的回复。

### 块/结构语义

- 你应该使用适当的结构来构造整体文档，包括 doctype、{{htmlelement("html")}}、{{htmlelement("head")}} 和 {{htmlelement("body")}} 元素。
- 除下面提到的几点之外，这封信应该被标记成有着段落和标题的结构。这封信有 1 个顶级标题（“Re:”那行）和 3 个二级标题。
- 两个地址应该放在 {{htmlelement("address")}} 元素下。每行的地址应该放在新的一行而不是新的段落。
- 使用适当类型的列表标记该学期的开学时间（the semester start dates）、学习科目（study subjects）和异域舞蹈（exotic dances）。

### 行内语义

- 应着重显示发信人和收信人的姓名（以及“电话”（_Tel_）和“电子邮件”（_Email_）字样）。
- 用适当的元素把文档中的四个日期标记成机器可读的日期。
- 为信中第一个地址和第一个日期设置 `sender-column` 类，这样就能通过稍后添加的 CSS 来使它们右对齐，以符合经典信件的布局。
- 信件正文中有 5 个首字母缩略词/缩写词（PhD、HTML、CSS、BC、Esq），给出这些词语的英文全称。
- 六个下标/上标应正确标注——在化学式中，以及数字 103 和 104（它们应分别表示 10 的 3 次方和 4 次方）。
- 试着标记至少对两个单词进行着重（`<strong>`）/ 强调（`<em>`）显示。
- 用适当的元素标记校训和引文。

### 文档的头部

- 用适当的 `<meta>` 标签把文档的字符集声明为 `utf-8`。
- 用适当的 `<meta>` 标签说明信件的作者。
- 应当将文档的语言设置为 `en-US`。
- 在文档标题元素内包含以下文本：“Awesome science application correspondence”。
- 以下 CSS 应包含在头部适当元素内：

  ```css
  body {
    font: 1.2em / 1.5 system-ui;
  }

  .sender-column {
    text-align: right;
  }

  h1 {
    font-size: 1.5em;
  }

  h2 {
    font-size: 1.3em;
  }
  ```

## 提示和技巧

- 使用 [W3C HTML 验证器](https://validator.w3.org/)来验证 HTML，验证通过有额外加分。
- 完成这个测验不需要任何 CSS 知识，只需把现成的 CSS 放到 HTML 元素里就好。

## 示例

以下实时示例展示了信件标记后的呈现效果。若在实现某些功能时遇到困难，请参阅实时示例下方的答案。

{{embedlivesample("finish", "100%", "500px")}}

<details>
<summary>点击这里查看答案</summary>

完成的 HTML 应类似如下：

```html live-sample___finish
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="author" content="Dr. Eleanor Gaye" />
    <title>Awesome science application correspondence</title>
    <style>
      body {
        font: 1.2em / 1.5 system-ui;
      }

      .sender-column {
        text-align: right;
      }

      h1 {
        font-size: 1.5em;
      }

      h2 {
        font-size: 1.3em;
      }
    </style>
  </head>
  <body>
    <address class="sender-column">
      <strong>Dr. Eleanor Gaye</strong><br />
      Awesome Science faculty<br />
      University of Awesome<br />
      Bobtown, CA 99999,<br />
      USA<br />
      <strong>Tel</strong>: 123-456-7890<br />
      <strong>Email</strong>: no_reply@example.com
    </address>

    <p class="sender-column">
      <time datetime="2016-01-20">20 January 2016</time>
    </p>

    <address>
      <strong>Miss Eileen Dover</strong><br />
      4321 Cliff Top Edge<br />
      Dover, CT9 XXX<br />
      UK
    </address>

    <h1>Re: Eileen Dover university application</h1>

    <p>Dear Eileen,</p>

    <p>
      Thank you for your recent application to join us at the University of
      Awesome's science faculty to study as part of your
      <abbr>PhD</abbr> (Doctor of Philosophy) next year. I will answer your
      questions one by one, in the following sections.
    </p>

    <h2>Starting dates</h2>

    <p>
      We are happy to accommodate you starting your study with us at any time,
      however it would suit us better if you could start at the beginning of a
      semester; the start dates for each one are as follows:
    </p>

    <ul>
      <li>
        First semester: <time datetime="2016-09-09">9 September 2016</time>
      </li>
      <li>
        Second semester: <time datetime="2017-01-15">15 January 2017</time>
      </li>
      <li>Third semester: <time datetime="2017-05-02">2 May 2017</time></li>
    </ul>

    <p>
      Please let me know if this is ok, and if so which start date you would
      prefer.
    </p>

    <h2>Subjects of study</h2>

    <p>
      At the Awesome Science Faculty, we have a pretty open-minded research
      facility — as long as the subjects fall somewhere in the realm of science
      and technology. You seem like an intelligent, dedicated researcher, and
      just the kind of person we'd like to have on our team. Saying that, of the
      ideas you submitted we were most intrigued by are as follows, in order of
      priority:
    </p>

    <ol>
      <li>
        Turning H<sub>2</sub>O into wine, and the health benefits of Resveratrol
        (C<sub>14</sub>H<sub>12</sub>O<sub>3</sub>).
      </li>
      <li>
        Measuring the effect on performance of funk bass players at temperatures
        exceeding 30°C (86°F), when the audience size exponentially increases
        (effect of 3 × 10<sup>3</sup> increasing to 3 × 10<sup>4</sup>).
      </li>
      <li>
        <abbr>HTML</abbr>, Hypertext Markup Language, and <abbr>CSS</abbr>,
        Cascading Style Sheets, constructs for representing musical scores.
      </li>
    </ol>

    <p>
      So please can you provide more information on each of these subjects,
      including how long you'd expect the research to take, required staff and
      other resources, and anything else you think we'd need to know? Thanks.
    </p>

    <h2>Exotic dance moves</h2>

    <p>
      Yes, you are right! As part of my post-doctorate work, I
      <em>did</em> study exotic tribal dances. To answer your question, my
      favorite dances are as follows, with definitions:
    </p>

    <dl>
      <dt>Polynesian chicken dance</dt>
      <dd>
        A little known but <em>very</em> influential dance dating back as far as
        300 <abbr title="Before Common Era">BCE</abbr>, a whole village would
        dance around in a circle like chickens, to encourage their livestock to
        be "fruitful".
      </dd>
      <dt>Icelandic brownian shuffle</dt>
      <dd>
        Before the Icelanders developed fire as a means of getting warm, they
        used to practice this dance, which involved huddling close together in a
        circle on the floor, and shuffling their bodies around in imperceptibly
        tiny, very rapid movements. One of my fellow students used to say that
        he thought this dance inspired modern styles such as Twerking.
      </dd>
      <dt>Arctic robot dance</dt>
      <dd>
        An interesting example of historic misinformation, English explorers in
        the 1960s believed to have discovered a new dance style characterized by
        "robotic", stilted movements, being practiced by inhabitants of Northern
        Alaska and Canada. Later on however it was discovered that they were
        just moving like this because they were really cold.
      </dd>
    </dl>

    <p>Yours sincerely,</p>

    <p>Dr Eleanor Gaye</p>

    <p>
      University of Awesome motto: <q>Be awesome to each other.</q> --
      <cite
        >The memoirs of Bill S Preston, <abbr title="Esquire">Esq.</abbr></cite
      >
    </p>
  </body>
</html>
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Test_your_skills/Advanced_HTML_text", "Learn_web_development/Core/Structuring_content/Structuring_documents", "Learn_web_development/Core/Structuring_content")}}
