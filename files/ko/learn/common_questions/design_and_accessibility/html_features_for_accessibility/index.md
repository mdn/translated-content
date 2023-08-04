---
title: 어떤 HTML 기능이 접근성을 촉진할까?
slug: Learn/Common_questions/Design_and_accessibility/HTML_features_for_accessibility
---

이번 내용은 웹 페이지를 좀 더 서로 다른 장애를 가진 사람들에게 좀 더 접근하기 쉽게 만들 수 있는 HTML의 특정한 기능을 서술합니다.

## 탭(Tabbing)

pointing devices를 사용 하지 않거나 사용 할 수 없는 유저들은 <kbd>Tab</kbd> 을 links를 통해 할 수 있습니다.(links는 논리적 순서로 이루어져 있어야 합니다.) tabindex 속성은 당신이 이러한 순서를 정의 할 수 있도록 허락합니다. 만약 HTML이 선형이라면, 논리적 탭 순서는 자동적으로 맞춰집니다.

```html
<ul>
  <li><a href="here.html" tabindex="1">Here</a></li>
  <li><a href="there.html" tabindex="3">There</a></li>
  <li><a href="anywhere.html" tabindex="2">Anywhere</a></li>
</ul>
```

이번 예시는(순수히 데모를 위해 사용되었으니 따라하지 마세요), 탭이 여기서부터 여기저기를 점프합니다.

## 링크 제목(Link Titles)

만약 당신이 자신을 설명하지 않는 링크를 가지고 있거나, 링크 목적지가 더 자세하게 설명되지 않으면, 그 링크에 제목 속성을 추가 할 수 있습니다.

```html
<p>
  I'm really bad at writing link text.
  <a
    href="inept.html"
    title="Why I'm rubbish at writing link text: An explanation and an apology."
    >Click here</a
  >
  to find out more.
</p>
```

## 접근 키(Access Keys)

_접근 키는_ 링크에 사용자가 <kbd>Alt</kbd> or <kbd>Ctrl</kbd> + 접근 키를 입력하여 얻을 수 있는 키보드 단축키를 할당하여 쉬운 네비게이션을 제공합니다. 정확한 키 조합은 플래폼에 따라 다릅니다.

```html
<a href="somepage.html" accesskey="s">Some page</a>
```

## 링크 넘어가기(Skip Links)

탭을 지원하기 위하여, 당신은 유저가 당신의 웹 페이지 모음으로 넘어갈 수 있는 링크를 제공할 수 있습니다. 당신은 아마도 다른 사람이 네비게이션 링크를 따라 점프하기를 원할 것입니다. 그렇게 함으로써, 페이지의 메인 내용을 읽을 수 있습니다.

```html
<header>
  <h1>The Heading</h1>
  <a href="#content">Skip to content</a>
</header>

<nav>
  <!-- navigation stuff -->
</nav>

<section id="content">
  <!--your content -->
</section>
```
