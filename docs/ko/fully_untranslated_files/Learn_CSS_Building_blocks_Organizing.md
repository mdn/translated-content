---
title: CSS 구성
slug: Learn/CSS/Building_blocks/Organizing
---

{{LearnSidebar}}{{PreviousMenu("Learn/CSS/Building_blocks/Debugging_CSS", "Learn/CSS/Building_blocks")}}

더 큰 스타일 시트와 큰 프로젝트에서 작업을 시작하면 큰 CSS 파일을 유지 관리하는 것이 어려울 수 있습니다. 이 기사에서는 CSS 를 쉽게 유지 관리할 수 있도록 작성하는 몇 가지 모범 사례와 유지 관리성을 개선하기 위해, 다른 사용자가 사용하는 해결책을 간략하게 살펴보겠습니다.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">전제조건:</th>
      <td>
        기본 컴퓨터 활용 능력,
        <a
          href="https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/Installing_basic_software"
          >기본 소프트웨어 설치</a
        >,
        <a
          href="https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/Dealing_with_files"
          >파일 작업</a
        >
        에 대한 기본 지식, HTML 기본 사항 (<a
          href="/ko/docs/Learn/HTML/Introduction_to_HTML"
          >HTML 소개</a
        >
        학습) 및 , CSS 작동 방식 이해 (<a
          href="/ko/docs/Learn/CSS/First_steps"
          >CSS 첫 번째 단계</a
        >
        학습)
      </td>
    </tr>
    <tr>
      <th scope="row">목적:</th>
      <td>
        스타일 시트 구성을 위한 몇 가지 팁과 모범사례를 배우고, CSS 구성 및 팀
        작업에 도움이 되는 일반적인 사용법의 이름 지정 규칙 및 도구에 대해
        알아보기.
      </td>
    </tr>
  </tbody>
</table>

## CSS 를 깔끔하게 유지하는 팁

다음은 스타일 시트를 체계적이고 깔끔하게 유지하는 방법에 대한 일반적인 제안입니다.

### 프로젝트에 코딩 스타일 가이드라인이 있습니다?

기존 프로젝트에서 팀과 함께 작업하는 경우, 가장 먼저 확인해야 할 것은 프로젝트에 CSS 에 대한 기존 스타일 가이드라인이 있는지 여부입니다. 팀 스타일 안내는 항상 개인 취향보다 우선합니다. 일을 하는 옳고 그른 방법은 없지만, 일관성이 중요합니다.

예를 들어, [MDN code 예제에 대한 CSS 지침](/ko/docs/MDN/Contribute/Guidelines/Code_guidelines/CSS) 을 살펴보십시오.

### 일관성 유지

프로젝트 규칙을 설정하거나 단독으로 작업하는 경우, 가장 중요한 것은 일관성을 유지하는 것입니다. 일관성은 class 에 동일한 이름 지정 규칙 사용, 색상을 설명하는 한 가지 방법을 선택하거나, 일관된 형식을 유지하는 등의 모든 종류의 방식으로 적용할 수 있습니다 (예: 탭이나 공백을 사용하여 코드를 들여쓰기 하시겠습니까? 공백은 몇 칸입니까?)

규칙을 항상 준수하면 일부 결정이 이미 내려졌기 때문에, CSS 를 작성할 때 필요한 정신적 부담이 줄어듭니다.

### 읽기 쉬운 CSS 서식

CSS 형식을 볼 수 있는 몇 가지 방법이 있습니다. 일부 개발자는 다음과 같이 모든 규칙을 한 라인에 넣습니다:

```css
.box {
  background-color: #567895;
}
h2 {
  background-color: black;
  color: white;
}
```

다른 개발자는 모든 것을 새로운 라인으로 나누는 것을 선호합니다:

```css
.box {
  background-color: #567895;
}

h2 {
  background-color: black;
  color: white;
}
```

CSS 는 어떤 것을 사용하든 상관없습니다. 개인적으로 각 속성과 값 쌍을 새 라인에 추가하는 것이 더 읽기 쉽습니다.

### CSS 주석 추가

CSS 에 주석을 추가하면 향후 개발자가 CSS 파일을 처리하는 데 도움이 되지만, 휴식 후 프로젝트에 다시 참여할 때도 도움이 됩니다.

```css
/* 이것은 주석입니다
여러 라인으로 구분할 수 있습니다. */
```

유용한 팁은 또한 스타일 시트의 논리 섹션 사이에 주석 블록을 추가하여 스캔할 때 다른 섹션을 신속하게 찾도록 도와주거나, CSS 의 해당 부분으로 바로 이동할 수 있는 정보를 제공하는 것이 좋습니다. 코드에 나타나지 않는 문자열을 사용하는 경우, 검색하여 섹션 간을 이동할 수 있습니다 — 아래에서 `||` 를 사용했습니다.

```css
/* || 일반적인 스타일 */

...

/* || Typography */

...

/* || Header 및 Main Navigation */

...
```

CSS 의 모든 사항에 대해 일일이 설명할 필요는 없습니다. 대부분 따로 설명이 필요없기 때문입니다. 여러분이 언급해야 할 것은 특정한 이유로 결정한 것들입니다.

오래된 브라우저 비 호환성을 피하기 위해 CSS 속성을 특정 방식으로 사용했을 수 있습니다. 예를 들면 다음과 같습니다:

```css
.box {
  background-color: red; /* 그라데이션을 지원하지 않는 이전 브라우저의 대비책 */
  background-image: linear-gradient(to right, #ff0000, #aa0000);
}
```

아마도 여러분은 무언가를 성취하기 위해 자습서를 따랐을 것입니다. 그리고 CSS 는 약간 눈에 띄지 않습니다. 이 경우, 여러분은 주석에 자습서의 URL 을 추가할 수 있습니다. 1년 정도 지나고 이 프로젝트로 돌아왔을 때 자신에게 감사할 것입니다. 그에 대한 훌륭한 자습서가 있었음을 모호하게 기억할 수 있습니다. 그러나 어디에 있습니까?

### Create logical sections in your stylesheet

It is a good idea to have all of the common styling first in the stylesheet. This means all of the styles which will generally apply unless you do something special with that element. You will typically have rules set up for:

- `body`
- `p`
- `h1`, `h2`, `h3`, `h4`, `h5`
- `ul` and `ol`
- The `table` properties
- Links

In this section of the stylesheet we are providing default styling for the type on the site, setting up a default style for data tables and lists and so on.

```css
/* || GENERAL STYLES */

body { ... }

h1, h2, h3, h4 { ... }

ul { ... }

blockquote { ... }
```

After this section we could define a few utility classes, for example a class that removes the default list style for lists we're going to display as flex items or in some other way. If you have a few things you know you will want to apply to lots of different elements, they can come in this section.

```css
/* || UTILITIES */

.nobullets {
  list-style: none;
  margin: 0;
  padding: 0;
}

...
```

Then we can add everything that is used sitewide. That might be things like the basic page layout, the header, navigation styling, and so on.

```css
/* || SITEWIDE */

.main-nav { ... }

.logo { ... }
```

Finally we will include CSS for specific things, broken down by the context, page or even component in which they are used.

```css
/* || STORE PAGES */

.product-listing { ... }

.product-box { ... }
```

By ordering things in this way, we at least have an idea in which part of the stylesheet we will be looking for something that we want to change.

### Avoid overly-specific selectors

If you create very specific selectors you will often find that you need to duplicate chunks of your CSS to apply the same rules to another element. For example, you might have something like the below selector, which applies the rule to a `<p>` with a class of `box` inside an `<article>` with a class of `main`.

```css
article.main p.box {
  border: 1px solid #ccc;
}
```

If you then wanted to apply the same rules to something outside of `main`, or to something other than a `<p>`, you would have to add another selector to these rules or create a whole new ruleset. Instead, you could create a class called `box` and apply that anywhere.

```css
.box {
  border: 1px solid #ccc;
}
```

There will be times when making something more specific makes sense, however this will generally be an exception rather than usual practice.

### Break large stylesheets into multiple smaller ones

In particular in cases where you have very different styles for distinct parts of the site, you might want to have a stylesheet that includes all the global rules and then smaller ones that include the specific rules needed for those sections. You can link to multiple stylesheets from one page, and the normal rules of the cascade apply, with rules in stylesheets linked later coming after rules in stylesheets linked earlier.

For example, we might have an online store as part of the site, with a lot of CSS used only for styling the product listings and forms needed for the store. It would make sense to have those things in a different stylesheet, only linked to on store pages.

This can make it easier to keep your CSS organised, and also means that if multiple people are working on the CSS you will have fewer situations where two people need to work on the same stylesheet at once, leading to conflicts in source control.

## Other tools that can help

CSS itself doesn't have much in the way of in-built organisation, therefore you need to do the work to create consistency and rules around how you write CSS. The web community has also developed various tools and approaches that can help you to manage larger CSS projects. As they may be helpful for you to investigate, and you are likely to come across these things when working with other people, we've included a short guide to some of these.

### CSS methodologies

Instead of needing to come up with your own rules for writing CSS, you may benefit from adopting one of the approaches already designed by the community and tested across many projects. These methodologies are essentially CSS coding guides that take a very structured approach to writing and organising CSS. Typically they tend to result in more verbose use of CSS than you might have if you wrote and optimised every selector to a custom set of rules for that project.

However, you do gain a lot of structure by adopting one and, as many of these systems are very widely used, other developers are more likely to understand the approach you are using and be able to write their CSS in the same way, rather than having to work out your own personal methodology from scratch.

#### OOCSS

Most of the approaches that you will encounter owe something to the concept of Object Oriented CSS (OOCSS), an approach made popular by [the work of Nicole Sullivan](https://github.com/stubbornella/oocss/wiki). The basic idea of OOCSS is to separate your CSS into reusable objects, which can be used anywhere you need on your site. The standard example of OOCSS is the pattern described as [The Media Object](/ko/docs/Web/CSS/Layout_cookbook/Media_objects). This is a pattern with a fixed size image, video or other element on one side, and flexible content on the other. It's a pattern we see all over websites for comments, listings, and so on.

If you are not taking an OOCSS approach you might create custom CSS for the different places this pattern is used, for example creating a class called `comment` with a bunch of rules for the component parts, then a class called `list-item` with almost the same rules as the `comment` class except for some tiny differences. The differences between these two components is that the list-item has a bottom border, and images in comments have a border whereas list-item images do not.

```css
.comment {
  display: grid;
  grid-template-columns: 1fr 3fr;
}

.comment img {
  border: 1px solid grey;
}

.comment .content {
  font-size: 0.8rem;
}

.list-item {
  display: grid;
  grid-template-columns: 1fr 3fr;
  border-bottom: 1px solid grey;
}

.list-item .content {
  font-size: 0.8rem;
}
```

In OOCSS, you would create one pattern called `media` that would have all of the common CSS for both patterns — a base class for things that are generally the shape of the media object. Then we'd add an additional class to deal with those tiny differences, thus extending that styling in specific ways.

```css
.media {
  display: grid;
  grid-template-columns: 1fr 3fr;
}

.media .content {
  font-size: 0.8rem;
}

.comment img {
  border: 1px solid grey;
}

.list-item {
  border-bottom: 1px solid grey;
}
```

In your HTML the comment would need both the `media` and `comment` classes applied:

```html
<div class="media comment">
  <img />
  <div class="content"></div>
</div>
```

The list-item would have `media` and `list-item` applied:

```html
<ul>
  <li class="media list-item">
    <img />
    <div class="content"></div>
  </li>
</ul>
```

The work that Nicole Sullivan did in describing this approach and promoting it means that even people who are not strictly following an OOCSS approach today will generally be reusing CSS in this way — it has entered our understanding as a good way to approach things in general.

#### BEM

BEM stands for Block Element Modifier. In BEM a block is a standalone entity such as a button, menu, or logo. An element is something like a list item or a title that is tied to the block it is in. A modifier is a flag on a block or element that changes the styling or behavior. You will be able to recognise code that uses BEM due to the extensive use of dashes and underscores in the CSS classes. For example, look at the classes applied to this HTML from the page about [BEM Naming conventions](http://getbem.com/naming/):

```html
<form class="form form--theme-xmas form--simple">
  <input class="form__input" type="text" />
  <input class="form__submit form__submit--disabled" type="submit" />
</form>
```

The additional classes are similar to those used in the OOCSS example, however they use the strict naming conventions of BEM.

BEM is widely used in larger web projects and many people write their CSS in this way. It is likely that you will come across examples, even in tutorials, that use BEM syntax, without mentioning why the CSS is structured in such a way.

To read more about the system read [BEM 101](https://css-tricks.com/bem-101/) on CSS Tricks.

#### Other common systems

There are a large number of these systems in use. Other popular approaches include [Scalable and Modular Architecture for CSS (SMACSS)](http://smacss.com/), created by Jonathan Snook, [ITCSS](https://itcss.io/) from Harry Roberts, and [Atomic CSS (ACSS)](https://acss.io/), originally created by Yahoo!. If you come across a project that uses one of these approaches then the advantage is that you will be able to search and find many articles and guides to help you understand how to code in the same style.

The disadvantage of using such a system is that they can seem overly complex, especially for smaller projects.

### Build systems for CSS

Another way to organise CSS is to take advantage of some of the tooling that is available for front-end developers, which allows you to take a slightly more programmatic approach to writing CSS. There are a number of tools which we refer to as _pre-processors_ and _post-processors_. A pre-processor runs over your raw files and turns them into a stylesheet, whereas a post-processor takes your finished stylesheet and does something to it — perhaps to optimize it in order that it will load faster.

Using any of these tools will require that your development environment can run the scripts that do the pre and post-processing. Many code editors can do this for you, or you can install command line tools to help.

The most popular pre-processor is [Sass](https://sass-lang.com/). This is not a Sass tutorial, so I will briefly explain a couple of the things that Sass can do, which are really helpful in terms of organisation, even if you don't use any of the other Sass features.

#### Defining variables

CSS now has native [custom properties](/ko/docs/Web/CSS/Using_CSS_custom_properties), making this feature increasingly less important, however one of the reasons you might use Sass is to be able to define all of the colors and fonts used in a project as settings, then use that variable around the project. This means that if you realise you have used the wrong shade of blue, you only need change it in one place.

If we created a variable called `$base-color` as in the first line below, we could then use it through the stylesheet anywhere that required that color.

```css
$base-color: #c6538c;

.alert {
  border: 1px solid $base-color;
}
```

Once compiled to CSS, you would end up with the following CSS in the final stylesheet.

```css
.alert {
  border: 1px solid #c6538c;
}
```

#### Compiling component stylesheets

I mentioned above that one way to organise CSS is to break down stylesheets into smaller stylesheets. When using Sass you can take this to another level and have lots of very small stylesheets — even going as far as having a separate stylesheet for each component. By using the include functionality in Sass these can then all be compiled together into one, or a small number of stylesheets to actually link into your website.

You can see how one developer approaches the problem in [this blog post](https://www.lauraleeflores.com/blog/how-to-organize-your-css-files).

> **참고:** A simple way to try out Sass is to use [CodePen](https://codepen.io) — you can enable Sass for your CSS in the Settings for a Pen, and CodePen will then run the Sass parser for you, in order that you can see the resulting webpage with regular CSS applied. Sometimes you will find that CSS tutorials have used Sass rather than plain CSS in their CodePen demos, so it is handy to know a little bit about it.

#### Post-processing for optimization

If you are concerned about adding size to your stylesheets by adding a lot of additional comments and whitespace for example, then a post-processing step could be to optimize the CSS by stripping out anything unneccessary in the production version. An example of a post-processor solution for doing this would be [cssnano](https://cssnano.co/).

## Wrapping up

This is the final part of our Learning CSS Guide, and as you can see there are many ways in which your exploration of CSS can continue from this point.

To learn more about layout in CSS, see the [Learn CSS Layout](/ko/docs/Learn/CSS/CSS_layout) section.

You should also now have the skills to explore the rest of the [MDN CSS](/ko/docs/Web/CSS) material. You can look up properties and values, explore our [CSS Cookbook](/ko/docs/Web/CSS/Layout_cookbook) for patterns to use, and read more in some of the specific guides such as our [Guide to CSS Grid Layout](/ko/docs/Web/CSS/CSS_Grid_Layout).

{{PreviousMenu("Learn/CSS/Building_blocks/Debugging_CSS", "Learn/CSS/Building_blocks")}}
