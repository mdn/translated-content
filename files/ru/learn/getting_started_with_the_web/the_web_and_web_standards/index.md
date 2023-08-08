---
title: Всемирная сеть (веб) и веб-стандарты
slug: Learn/Getting_started_with_the_web/The_web_and_web_standards
---

{{learnsidebar}}

Статья содержит общую информацию о всемирной сети (the Web) — откуда она взялась, что такое веб-стандарты, как они связанны, почему "веб разработчик" отличный карьерный выбор и чему полезному можно научиться изучая этот курс.

## Краткая история сети веб

Мы постарались максимально кратко изложить здесь информацию. Если вы более детально заинтересованы в истории веб сети, то попробуйте поискать это в интернете.

В конце 1960-х военные США разработали коммуникационную сеть [ARPANET](/ru/docs/Glossary/Arpanet). Вполне можно её рассматривать в качестве прародителя современной сети, так как она работала с помощью [коммутации пакетов](https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BC%D0%BC%D1%83%D1%82%D0%B0%D1%86%D0%B8%D1%8F_%D0%BF%D0%B0%D0%BA%D0%B5%D1%82%D0%BE%D0%B2), и для неё впервые была внедрена сетевая модель [TCP/IP](https://ru.wikipedia.org/wiki/TCP/IP). Эти две технологии послужили основой, на которой затем был построен интернет.

В 1980 году Тим Бернерс-Ли (aka TimBL) написал программу под названием ENQUIRE, которая позволяла устанавливать связь между двумя узлами. Ничего не напоминает?

В 1989 году TimBL выступил в организации [ЦЕРН](https://ru.wikipedia.org/wiki/%D0%A6%D0%95%D0%A0%D0%9D) с идеями о методах структурирования, обработке и обмена информацией ([Information Management: A Proposal](https://www.w3.org/History/1989/proposal.html)), предложив при этом концепцию "[гипертекста](https://ru.wikipedia.org/wiki/%D0%93%D0%B8%D0%BF%D0%B5%D1%80%D1%82%D0%B5%D0%BA%D1%81%D1%82)". Идеи Тима были одобрены и он начал воплощать в реальность свой проект. Современная сеть построена на основании его работ.

К концу 1990-го года Тим Бернерс разработал все необходимые для запуска сети средства — [HTTP](/ru/docs/Web/HTTP), [HTML](/ru/docs/Web/HTML), первый в мире веб браузер ([WorldWideWeb](https://en.wikipedia.org/wiki/WorldWideWeb)), сервер HTTP и несколько веб страниц для наглядности.

В течение нескольких последующих лет веб сеть расширялась, выпускались новые браузеры, были установлены тысячи серверов и созданы миллионы веб страниц. Как и обещали, достаточно краткая история.

Стоит отметить, что в 1994 году TimBL основал консорциум Всемирной паутины ([World Wide Web Consortium (W3C)](https://www.w3.org/)) - организацию, связывающую множество компаний для сплочения усилий в области разработки веб технологий. После этого появились технологии, например, такие как [CSS](/ru/docs/Web/CSS) и [JavaScript](/ru/docs/Web/JavaScript), которые преобразовали веб сеть в тот вид, в котором мы наблюдаем её сейчас.

## Веб-стандарты

**Веб-стандарты** - это технологии, используемые для создания веб страниц. Стандарты существуют в виде технической документации (спецификаций), которая точно описывает как та, или иная технология должна работать. Документация никак не поможет изучить то, как пользоваться описываемыми в ней технологиями (вот почему существует сайт MDN Web Docs). Она используются разработчиками ПО для внедрения технологий (например, в веб браузеры).

В качестве примера приведём стандарт [HTML Living Standard](https://html.spec.whatwg.org/multipage/). Он описывает как HTML (все элементы HTML, связанные с ними API и остальные близкие технологии) должны быть реализованы.

Веб-стандарты создаются организациями стандартов — институтами, которые приглашают группы людей из различных компаний для согласования того, как технологии должны применяться наиболее эффективным образом в рассматриваемых случаях. Самая известная организация веб-стандартов - W3C. Существуют и другие: [WHATWG](https://whatwg.org/) (ответственны за модернизацию языка html), [ECMA](https://www.ecma-international.org/) (выпускают стандарты языка ECMAScript, на котором построен JavaScript), [Khronos](https://www.khronos.org/) (создают технологии для 3D графики, например WebGL).

### "Open" standards

One of the key aspects of web standards, which TimBL and the W3C agreed on from the start, is that the web (and web technologies) should be free to both contribute and use, and not encumbered by patents/licensing. Therefore anyone can write the code to build a website for free, and anyone can contribute to the standards creation process, where the specs are written.

Because web technologies are created openly, in collaboration between many different companies, it means that no one company gets to control them, which is a really good thing. You wouldn't want a single company suddenly deciding to put the entire web behind a paywall, or releasing a new version of HTML that everyone has to buy to continue making web sites, or worse still, just deciding they aren't interested any more and just turning it off.

This allows the web to remain a freely-available public resource.

### Не разорви сеть

Популярная в области веб-стандартов фраза гласит: "не разорви сеть". Это означает, что каждая новая веб-технология должна быть совместима со всеми предыдущими технологиями (поэтому старые сайты до сих пор работают), и со всеми последующими (разрабатываемые в последствии технологии, в свою очередь, должны быть совместимы с имеющимися). В процессе изучения представленного здесь материала вы начнёте понимать каким образом это реализуется.

## Being a web developer is good

The web industry is a very attractive market to enter if you are looking for a job. Recent published figures say that there are currently around 19 million web developers in the world, and that figure is set more than double in the next decade. And at the same time, there is a skill shortage in the industry — so what better time to learn web development?

It isn't all fun and games however — building web sites is a more complicated proposition than it used to be, and you'll have to put some time in to studying all the different technologies you need to use, all the techniques and best practices you need to know, and all the typical patterns you'll be called upon to implement. It'll take you a few months to really start to get into it, and then you'll need to keep learning so that your knowledge stays up-to-date with all the new tools and features that appear on the web platform, and keep practicing and refining your craft.

_The only constant is change._

Does this sound hard? Don't worry — we aim to give you everything you need to know to get started, and things will get easier. Once you embrace the constant change and uncertainty of the web, you'll start to enjoy yourself. As a part of the web community, you'll have an entire web of contacts and useful material to help you, and you'll start to enjoy the creative possibilities it brings.

You're a digital creative now. Enjoy the experience, and the potential for earning a living.

## Overview of modern web technologies

There are a number of technologies to learn if you want to be a front-end web developer. In this section we will describe them briefly. For a more detailed explanation of how some of them work together, read our article [How the web works](/ru/docs/Learn/Getting_started_with_the_web/How_the_Web_works).

### Browsers

You are probably reading these words inside a web browser in this very moment (unless you've printed it out, or are using assistive technology, such as a screenreader to read it out to you). Web browsers are the software programs people use to consume the web, and include [Firefox](https://www.mozilla.org/en-US/firefox/), [Chrome](https://www.google.com/chrome/), [Opera](https://www.opera.com/), [Safari](https://www.apple.com/safari/), and [Edge](https://www.microsoft.com/en-us/windows/microsoft-edge).

### HTTP

Hypertext Transfer Protocol, or [HTTP](/ru/docs/Web/HTTP/Basics_of_HTTP), is a messaging protocol that allows web browsers to communicate with web servers (where web sites are stored). A typical conversation goes something like

```
"Hello web server. Can you give me the files I need to render bbc.co.uk"?

"Sure thing web browser — here you go"

[Downloads files and renders web page]
```

The actual syntax for HTTP messages (called requests and responses) is not that human-readable, but this gives you the basic idea.

### HTML, CSS, and JavaScript

[HTML](/ru/docs/Web/HTML), [CSS](/ru/docs/Web/CSS), and [JavaScript](/ru/docs/Web/JavaScript) are the main three technologies you'll use to build a website:

- Hypertext markup language, or **HTML**, is a markup language consisting of different elements you can wrap (mark up) content in to give it meaning (semantics) and structure. Simple HTML looks like this:

  ```html
  <h1>This is a top-level heading</h1>

  <p>This is a paragraph of text.</p>

  <img src="cat.jpg" alt="A picture of my cat" />
  ```

  If we adopted a house-building analogy, HTML would be like the foundations and walls of the house, which give it structure and hold it together.

- Cascading Style Sheets (**CSS**) is a rule-based language used to apply styles to your HTML, for example setting text and background colors, adding borders, animating things, or laying out a page in a certain way. As a simple example, the following code would turn our HTML paragraph red:

  ```css
  p {
    color: red;
  }
  ```

  In the house analogy, CSS is like the paint, wallpaper, carpets and paintings you'd use to make the house look nice.

- **JavaScript** is the programming language we use to add interactivity to web sites, from dynamic style switching, to fetching updates from the server, right through to complex 3D graphics. The following simple JavaScript will store a reference to our paragraph in memory and change the text inside it:

  ```js
  let pElem = document.querySelector("p");
  pElem.textContent = "We changed the text!";
  ```

  In the house analogy, JavaScript is like the cooker, TV, Microwave, or hairdryer — the things that give your house useful functionality

### Tooling

Once you've learned the "raw" technologies that can be used to build web pages (such as HTML, CSS, and JavaScript), you'll soon start to come across various tools that can be used to make your work easier or more efficient. Examples include:

- The [developer tools](/ru/docs/Learn/Common_questions/What_are_browser_developer_tools) inside modern browsers that can be used to debug your code.
- [Testing tools](/ru/docs/Learn/Tools_and_testing/Cross_browser_testing) that can be used to run tests to show whether your code is behaving as you intended it to.
- Libraries and frameworks built on top of JavaScript that allow you to build certain types of web site much more quickly and effectively.
- So-called "Linters", which take a set of rules, look at your code, and highlight places where you haven't followed the rules properly.
- Minifiers, which remove all the whitespace from your code files to make it so that they are smaller and therefore download from the server more quickly.

### Server-side languages and frameworks

HTML, CSS, and JavaScript are front-end (or client-side) languages, which means they are run by the browser to produce a website front-end that your users can use.

There are another class of languages called back-end (or server-side) languages, meaning that they are run on the server before the result is then sent to the browser to be displayed. A typical use for a server-side language is to get some data out of a database and generate some HTML to contain the data, before then sending the HTML over to the browser to display it to the user.

Example server-side languages include ASP.NET, Python, PHP, and NodeJS.

## Web best practices

We have briefly talked about the technologies that you'll use to build websites. Now let's discuss the best practices you should employ to make sure you are using those technologies in the best way that you can.

When doing web development, the main cause of uncertainty comes from the fact that you don't know what combination of technology each user will use to view your web site:

- User 1 might be looking at it on an iPhone, with a small, narrow screen.
- User 2 might be looking at it on a Windows laptop with a widescreen monitor attached to it.
- User 3 might be blind, and using a screenreader to read the web page out to them.
- User 4 might be using a really old desktop machine that can't run modern browsers.

Because you don't know exactly what your users will use, you need to design defensively — make your web site as flexible as possible, so that all of the above users can make use of it, even if they might not all get the same experience. In short, we are trying to make the web work for all, as much as possible.

You'll come across the below concepts at some point in your studies.

- **Cross-browser compatibility** is the practice of trying to make sure your webpage works across as many devices as possible. This includes using technologies that all the browsers support, delivering better experiences to browsers that can handle them (progressive enhancement), and/or writing code so that it falls back to a simpler but still usable experience in older browsers (graceful degradation). It also involves a lot of testing to see if anything fails in certain browsers, and then more work to fix those failures.
- **Responsive web design** is the practice of making your functionality and layouts flexible so they can automatically adapt to different browsers. An obvious example is a website that is laid out one way in a widescreen browser on the desktop, but displays as a more compact, single-column layout on mobile phone browsers. Try adjusting the width of your browser window now, and see what happens.
- **Performance** means getting web sites to load as quickly as possible, but also making them intuitive and easy to use so that users don't get frustrated and go somewhere else.
- **Accessibility** means making your websites usable by as many different kinds of people as possible (related concepts are diversity and inclusion, and inclusive design). This includes people with visual impairments, hearing impairments, cognitive disabilities, or physical disabilities. It also goes beyond people with disabilities — how about young or old people, people from different cultures, people using mobile devices, or people with unreliable or slow network connections?
- **Internationalization** means making websites usable by people from different cultures, who speak different languages to your own. There are technical considerations here (such as altering your layout so that it still works OK for right-to-left, or even vertical languages), and human ones (such as using simple, non-slang language so that people who have your language as their second or third language are more likely to understand your text).
- **Privacy & Security**. These two concepts are related but different. Privacy refers to allowing people to go about their business privately and not spying on them or collecting more of their data than you absolutely need to. Security refers to constructing your website in a secure way so that malicious users cannot steal information contained on it from you or your users.

## See also

- [History of the World Wide Web](https://en.wikipedia.org/wiki/History_of_the_World_Wide_Web)
- [How does the internet work?](/ru/docs/Learn/Common_questions/How_does_the_Internet_work)
