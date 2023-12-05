---
title: CSS 구성
slug: Learn/CSS/Building_blocks/Organizing
page-type: learn-module-chapter
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Debugging_CSS", "Learn/CSS/Building_blocks/Fundamental_CSS_comprehension", "Learn/CSS/Building_blocks")}}

더 큰 스타일시트와 큰 프로젝트에서 작업하기 시작하면 거대한 CSS 파일을 유지하는 것이 어렵다는 것을 알게 됩니다. 이 글에서는 CSS를 쉽게 유지 관리할 수 있도록 작성하기 위한 몇 가지 모범 사례와 유지 관리성을 향상시키기 위해 다른 사람들이 사용하는 솔루션에 대해 간략히 알아보겠습니다.

<table>
  <tbody>
    <tr>
      <th scope="row">필요한 사전 지식:</th>
      <td>
        기본 컴퓨터 활용 능력,
        <a
          href="/en-US/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >기본 소프트웨어 설치</a
        >, <a
          href="/en-US/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >파일 작업</a
        > 에 대한 기본 지식
        , HTML 기본 사항 (
        <a href="/en-US/docs/Learn/HTML/Introduction_to_HTML"
          >HTML 소개</a
        > 학습) 및, CSS 작동 방식 이해 (
        <a href="/en-US/docs/Learn/CSS/First_steps">CSS 첫 번째 단계</a> 학습)
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>
        스타일시트를 구성하기 위한 몇 가지 팁과 모범 사례를 알아보고, CSS 구성 및 팀 작업에 도움이 되는 일반적인 사용 방식의 명명 규칙과 도구를 알아봅시다.
      </td>
    </tr>
  </tbody>
</table>

## CSS를 깔끔하게 유지하는 팁

다음은 스타일시트를 정리하고 깔끔하게 유지하는 방법에 대한 몇 가지 제안입니다.

### 프로젝트에 코딩 스타일 가이드가 있다면?

기존의 프로젝트에서 팀과 함께 작업하는 경우, 프로젝트에 CSS를 위한 기존 스타일 가이드가 있는지 확인하는 것이 먼저입니다. 팀 스타일 가이드는 항상 자신의 개인적 선호보다 우선되야 합니다. 일을 하는 데에 옳거나 틀린 방법은 거의 없지만, 일관성이 중요합니다.

예를 들어, [CSS guidelines for N code examples](/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/CSS)를 살펴보세요.

### 일관성을 유지하세요

프로젝트의 규칙을 정하거나 혼자 작업을 한다면, 가장 중요한 일은 일관성을 유지하는 것입니다. 일관성은 클래스에 동일한 이름을 붙이는 규칙을 사용하거나, 색상을 묘사하는 방법을 선택하거나, 일관된 형식을 유지하는 것과 같은 모든 종류의 방법에 적용될 수 있습니다. (예를 들어, 코드를 들여쓸 때 탭을 사용할 건가요, 스페이스를 사용할 건가요? 스페이스가 있는 경우 몇 개의 스페이스를 사용할 건가요?)

항상 따르는 일련의 규칙이 있다면 CSS를 작성할 때 일부 결정이 되어 있기 때문에 필요한 정신적 오버헤드의 양이 줄어듭니다.

### 읽기 쉬운 CSS로 포맷팅하세요

CSS가 포맷팅되는 몇 가지 방법들이 있습니다. 어떤 개발자들은 다음과 같이 모든 규칙을 한 줄에 붙입니다.

```css-nolint
.box {background-color: #567895; }
h2 {background-color: black; color: white; }
```

다른 개발자들은 모든 것을 새로운 라인으로 쪼개는 것을 선호합니다.

```css
.box {
  background-color: #567895;
}

h2 {
  background-color: black;
  color: white;
}
```

CSS는 어는 것을 사용하든 상관하지 않습니다. 우리는 각 속성과 값의 쌍을 새로운 줄에 위치시키는 것이 더 읽기 쉽다고 생각합니다.

### CSS에 주석을 다세요

CSS에 주석을 달면 향후 아무 개발자들이 해당 CSS 파일을 작업하는 데 도움이 될 뿐만 아니라 휴식 후 프로젝트에 복귀할 때 도움이 됩니다.

```css
/* This is a CSS comment
It can be broken onto multiple lines. */
```

스캐닝 시 다른 섹션을 빠르게 찾도록 도와주거나, CSS의 해당 부분으로 바로 점프할 수 있도록 스타일시트의 논리 섹션 사이에 주석블록을 추가하는 것은 좋은 팁입니다. 코드에 나타나지 않는 문자열(주석블록)을 사용하는 경우 검색을 통해 섹션에서 섹션으로 점프할 수 있습니다. 아래는 `||` 를 사용했습니다.

```css
/* || General styles */

/* … */

/* || Typography */

/* … */

/* || Header and Main Navigation */

/* … */
```

CSS의 대부분이 자명할 것이기 때문에 CSS의 모든 것에 각각 주석을 달 필요는 없습니다. 주석을 달아야하는 것들은 어떤 이유로 특별한 결정을 내린 것들입니다.

다음과 같은 특정한 방법으로 CSS 속성을 사용하여 이전 브라우저 호환성을 방지할 수 있습니다. 예를 들면 다음과 같습니다. 

```css
.box {
  background-color: red; /* fallback for older browsers that don't support gradients */
  background-image: linear-gradient(to right, #ff0000, #aa0000);
}
```

아마도 무언가를 만들기 위해 자습서를 따랐을 것이고, 그 CSS는 매우 자명적이거나 알아챌만 하지는 않을 것입니다. 그런 경우, 자습서의 URL을 주석에 추가할 수 있습니다. 1년이나 그 후에 프로젝트로 돌아갔을 때, 스스로 감사하게 될 것이고, 어렴풋이 그 프로젝트에 관련한 좋은 자습서가 있음을 기억하지만 어디에서 났는지 기억할 수 없을 겁니다.

### 스타일시트에 논리 섹션을 작성하세요

스타일시트에 일반적인 스타일링을 먼저 넣는 것이 좋습니다. 이것은 그 요소로 특별한 것을 하지 않는 이상 일반적으로 적용되는 모든 스타일을 의미합니다. 일반적으로 다음을 위한 규칙을 세울 것입니다.

- `body`
- `p`
- `h1`, `h2`, `h3`, `h4`, `h5`
- `ul` and `ol`
- `table` 속성들
- Links

스타일시트의 이 섹션에서는 데이터 테이블 및 리스트에 대한 기본 스타일을 설정하는 등 사이트의 유형에 대한 기본 스타일을 제공합니다.

```css
/* || GENERAL STYLES */

body {
  /* … */
}

h1,
h2,
h3,
h4 {
  /* … */
}

ul {
  /* … */
}

blockquote {
  /* … */
}
```

이 섹션 이후, 몇 가지 유틸리티 클래스를 정의할 수 있습니다. 예를 들어, 플렉스 아이템이나 다른 방법으로 표시할 리스트의 기본 리스트 스타일을 제거하는 클래스가 있습니다. 다양한 요소에 적용하고 싶은 스타일링 옵션이 몇 가지 있다면, 이 섹션에 넣을 수 있습니다. 

```css
/* || UTILITIES */

.nobullets {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* … */
```

그러면 사이트 전체에서 사용되는 모든 것을 추가할 수 있습니다. 기본 페이지 레이아웃, 헤더, 네비게이션 스타일링 등이 될 수 있습니다.

```css
/* || SITEWIDE */

.main-nav {
  /* … */
}

.logo {
  /* … */
}
```

마지막으로, 컨텍스트, 페이지 또는 사용되는 구성 요소에 따라 세분화된 특정 항목에 대한 CSS를 포함할 것입니다.

```css
/* || STORE PAGES */

.product-listing {
  /* … */
}

.product-box {
  /* … */
}
```

이 방식으로 정리하면, 적어도 스타일 시트의 어느 부분에서 바꾸고 싶은 것을 찾을지에 대한 생각을 가질 수 있습니다.

### 지나치게 특정한 셀렉터를 자제하세요

매우 구체적인 선택자를 만들게 되면, 종종 같은 규칙을 다른 요소에 적용하기 위해 CSS의 일부를 복제헤야 하는 상황을 겪게 될 것입니다. 예를 들어, 아래와 같은 선택자가 있을 수 있는데, 이는 `main` 클래스를 가진 `<article>` 내부의 `box` 클래스를 가진 `<p>`에 규칙을 적용합니다.

```css
article.main p.box {
  border: 1px solid #ccc;
}
```

`main`이외의 것에, 또는 `<p>`가 아닌 다른 것에 같은 규칙을 적용하고 싶다면, 이러한 규칙에 다른 셀렉터를 추가하거나 완전히 새로운 규칙 집합을 만들어야 합니다. 대신에, 선택자 `.box`를 사용하여 `box` 클래스를 가진 어떤 요소에든 적용할 수 있습니다.

```css
.box {
  border: 1px solid #ccc;
}
```

때때로 무언가를 더 구체적으로 만드는 경우도 있을 것입니다. 그러나, 이는 일반적으로 보통의 경우가 아닌 예외적인 상황입니다.

### 큰 스타일시트를 여러 개의 작은 스타일 시트로 분할하세요

사이트의 다른 부분에 대해 전혀 다른 스타일을 하고 있는 경우, 모든 전역 규칙을 포함하는 하나의 스타일시트와 그 섹션에 필요한 특정 규칙을 포함하는 몇 개의 작은 스타일시트를 만들고 싶을 수 있습니다. 이 때 한 페이지에서 여러 스타일시트를 연결할 수 있고, 일반적인 종속의 규칙이 적용되며, 이후에 연결된 스타일시트의 규칙이 먼저 연결된 스타일시트의 규칙 다음으로 적용됩니다. 

예를 들어, 사이트의 일부로 온라인 스토어가 있을 수 있는데, 스토어에 필요한 제품 목록과 양식을 꾸미기 위해 사용되는 CSS가 많을 수 있습니다. 그런 것들을 다른 스타일시트에 넣고, 스토어 페이지에서만 연결하는 것이 타당할 것입니다.

이렇게 하면 CSS를 정리하는 것이 더 쉬워질 수 있고, 또한 여러 사람이 CSS 작업을 할 경우, 동일한 스타일시트에 대해 동시에 작업해야 하는 상황이 줄어들어 소스 제어에서 충돌이 발생하는 경우를 줄일 수 있습니다.

## Other tools that can help

CSS itself doesn't have much in the way of in-built organization; therefore, the level of consistency in your CSS will largely depend on you. The web community has developed various tools and approaches that can help you to manage larger CSS projects. Since you are likely to come across these aids when working with other people, and since they are often of help generally, we've included a short guide to some of them.

### CSS methodologies

Instead of needing to come up with your own rules for writing CSS, you may benefit from adopting one of the approaches already designed by the community and tested across many projects. These methodologies are essentially CSS coding guides that take a very structured approach to writing and organizing CSS. Typically they tend to render CSS more verbosely than you might have if you wrote and optimized every selector to a custom set of rules for that project.

However, you do gain a lot of structure by adopting one. Since many of these systems are widely used, other developers are more likely to understand the approach you are using and be able to write their own CSS in the same way, rather than having to work out your own personal methodology from scratch.

#### OOCSS

Most of the approaches you will encounter owe something to the concept of Object Oriented CSS (OOCSS), an approach made popular by [the work of Nicole Sullivan](https://github.com/stubbornella/oocss/wiki). The basic idea of OOCSS is to separate your CSS into reusable objects, which can be used anywhere you need on your site. The standard example of OOCSS is the pattern described as [The Media Object](/en-US/docs/Web/CSS/Layout_cookbook/Media_objects). This is a pattern with a fixed size image, video or other element on one side, and flexible content on the other. It's a pattern we see all over websites for comments, listings, and so on.

If you are not taking an OOCSS approach you might create a custom CSS for the different places this pattern is used, for example, by creating two classes, one called `comment` with a bunch of rules for the component parts, and another called `list-item` with almost the same rules as the `comment` class except for some tiny differences. The differences between these two components are the list-item has a bottom border, and images in comments have a border whereas list-item images do not.

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

In your HTML, the comment would need both the `media` and `comment` classes applied:

```html
<div class="media comment">
  <img src="" alt="" />
  <div class="content"></div>
</div>
```

The list-item would have `media` and `list-item` applied:

```html
<ul>
  <li class="media list-item">
    <img src="" alt="" />
    <div class="content"></div>
  </li>
</ul>
```

The work that Nicole Sullivan did in describing this approach and promoting it means that even people who are not strictly following an OOCSS approach today will generally be reusing CSS in this way — it has entered our understanding as a good way to approach things in general.

#### BEM

BEM stands for Block Element Modifier. In BEM a block is a stand-alone entity such as a button, menu, or logo. An element is something like a list item or a title that is tied to the block it is in. A modifier is a flag on a block or element that changes the styling or behavior. You will be able to recognize code that uses BEM due to the extensive use of dashes and underscores in the CSS classes. For example, look at the classes applied to this HTML from the page about [BEM Naming conventions](http://getbem.com/naming/):

```html
<form class="form form--theme-xmas form--simple">
  <label class="label form__label" for="inputId"></label>
  <input class="form__input" type="text" id="inputId" />

  <input
    class="form__submit form__submit--disabled"
    type="submit"
    value="Submit" />
</form>
```

The additional classes are similar to those used in the OOCSS example; however, they use the strict naming conventions of BEM.

BEM is widely used in larger web projects and many people write their CSS in this way. It is likely that you will come across examples, even in tutorials, that use BEM syntax, without mentioning why the CSS is structured in such a way.

Read more about this system [BEM 101](https://css-tricks.com/bem-101/) on CSS Tricks.

#### Other common systems

There are a large number of these systems in use. Other popular approaches include [Scalable and Modular Architecture for CSS (SMACSS)](http://smacss.com/), created by Jonathan Snook, [ITCSS](https://itcss.io/) from Harry Roberts, and [Atomic CSS (ACSS)](https://acss.io/), originally created by Yahoo!. If you come across a project that uses one of these approaches, then the advantage is that you will be able to search and find many articles and guides to help you understand how to code in the same style.

The disadvantage of using such a system is that they can seem overly complex, especially for smaller projects.

### Build systems for CSS

Another way to organize CSS is to take advantage of some of the tooling that is available for front-end developers, which allows you to take a slightly more programmatic approach to writing CSS. There are a number of tools, which we refer to as _pre-processors_ and _post-processors_. A pre-processor runs over your raw files and turns them into a stylesheet, whereas a post-processor takes your finished stylesheet and does something to it — perhaps to optimize it in order that it will load faster.

Using any of these tools will require that your development environment be able to run the scripts that do the pre- and post-processing. Many code editors can do this for you, or you can install command line tools to help.

The most popular pre-processor is [Sass](https://sass-lang.com/). This is not a Sass tutorial, so I will briefly explain a couple of the things that Sass can do, which are really helpful in terms of organization even if you don't use any of the other Sass features. If you want to learn a lot more about Sass, start with the [Sass basics](https://sass-lang.com/guide) article, then move on to their other documentation.

#### Defining variables

CSS now has native [custom properties](/en-US/docs/Web/CSS/Using_CSS_custom_properties), making this feature increasingly less important. However, one of the reasons you might use Sass is to be able to define all of the colors and fonts used in a project as settings, then to use that variable around the project. This means that if you realize you have used the wrong shade of blue, you only need change it in one place.

If we created a variable called `$base-color`, as in the first line below, we could then use it through the stylesheet anywhere that required that color.

```scss
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

I mentioned above that one way to organize CSS is to break down stylesheets into smaller stylesheets. When using Sass you can take this to another level and have lots of very small stylesheets — even going as far as having a separate stylesheet for each component. By using the included functionality in Sass (partials), these can all be compiled together into one or a small number of stylesheets to actually link into your website.

So, for example, with [partials](https://sass-lang.com/documentation/at-rules/use#partials), you could have several style files inside a directory, say `foundation/_code.scss`, `foundation/_lists.scss`, `foundation/_footer.scss`, `foundation/_links.scss`, etc. You could then use the Sass `@use` rule to load them into other stylesheets:

```scss
// foundation/_index.scss
@use "code";
@use "lists";
@use "footer";
@use "links";
```

If the partials are all loaded into an index file, as implied above, you can then load that entire directory into another stylesheet in one go:

```scss
// style.scss
@use "foundation";
```

> **Note:** A simple way to try out Sass is to use [CodePen](https://codepen.io) — you can enable Sass for your CSS in the Settings for a Pen, and CodePen will then run the Sass parser for you in order that you can see the resulting webpage with regular CSS applied. Sometimes you will find that CSS tutorials have used Sass rather than plain CSS in their CodePen demos, so it is handy to know a little bit about it.

#### Post-processing for optimization

If you are concerned about adding size to your stylesheets, for example, by adding a lot of additional comments and whitespace, then a post-processing step could be to optimize the CSS by stripping out anything unnecessary in the production version. An example of a post-processor solution for doing this would be [cssnano](https://cssnano.co/).

## Summary

This is the final part of our building blocks module, and as you can see there are many ways in which your exploration of CSS can continue from this point — but now you can go on to testing yourself with our assessments: the first one is linked below.

To learn more about layout in CSS, see the [CSS Layout](/en-US/docs/Learn/CSS/CSS_layout) module.

You should also now have the skills to explore the rest of the [MDN CSS](/en-US/docs/Web/CSS) material. You can look up properties and values, explore our [CSS Cookbook](/en-US/docs/Web/CSS/Layout_cookbook) for patterns to use, or continue reading in some of the specific guides, such as our [Guide to CSS Grid Layout](/en-US/docs/Web/CSS/CSS_grid_layout).

{{PreviousMenuNext("Learn/CSS/Building_blocks/Debugging_CSS", "Learn/CSS/Building_blocks/Fundamental_CSS_comprehension", "Learn/CSS/Building_blocks")}}
