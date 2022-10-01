---
title: What is accessibility?
slug: Learn/Accessibility/What_is_accessibility
original_slug: Learn/접근성/What_is_accessibility
---
{{LearnSidebar}}

{{NextMenu("Learn/Accessibility/HTML", "Learn/Accessibility")}}

이 글에서는 접근성이 실제로 무엇인지 자세히 살펴보기로 합니다. 이 글에는 웹에서 고려해야 할 사람의 그룹, 웹과 상호 작용하는 데 사용하는 서로 다른 도구 및 접근성 개발 워크 플로우를 포함됩니다.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">선행지식:</th>
      <td>기본적인 컴퓨터 사용 능력, HTML과 CSS에 대한 기본적인 이해.</td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>
        접근성과 친해지기. 웹 개발자로서 접근성에어떻게 영향을 미치는지 알아보기
      </td>
    </tr>
  </tbody>
</table>

## 그렇다면 접근성이란 무엇일까요?

접근성은 가능한 한 많은 사람이 웹 사이트를 사용할 수 있도록 하는 방법으로, 통상적으로 장애인만을 대상으로 한다고 생각하지만 실제로는 모바일 장치를 사용하는 사람이나 느린 네트워크 연결을 사용하는 사람들도 포함하고 있습니다.

접근성을 모든 사람을 동일하게 대하고, 그들의 능력이나 상황에 상관 없이 그들에게 같은 기회를 주는 것으로 생각할 수도 있습니다. 휠체어에 있기 때문에 누군가를 물리적 건물에서 제외시키는 것이 옳지 않은 것과 같은 방식으로(공공 건물에는 일반적으로 휠체어 경사로나 엘리베이터가 있기 때문에), 휴대 전화를 사용하지 않는 사람을 웹 사이트에서 제외시키는 것도 옳지 않다. 우리는 모두 다르지만, 모두 인간이기 때문에, 동일한 권리를 갖고 있다.

접근성은 당연히 지켜져야 할 일이지만 일부 국가에서는 법의 일부이기도 하며, 서비스 사용이나 제품 구매가 불가능했던 사람들을 불러모아 중요한 소비자들로 만들수도 있습니다.

접근성 및 이에 따른 모범 사례는 다음과 같은 모든 사람에게 도움이 될 수 있습니다.

- 시맨틱한 HTML (접근성이 향상된)은 SEO 향상시켜, 사이트를 찾기 쉽고 시장성이 있도록 해준다.
- 접근성에 대해 고려하는것은 좋은 윤리적인 도덕 관념을 보여 주는데, 이것은 서비스의 대중적인 이미지를 개선시킵니다.
- 접근성을 향상시키는 다른 좋은 방법은 당신의 사이트를 휴대폰 사용자, 낮은 네트워크 속도의 사용자등 다른 여러 사용자가 사용하기 쉽게 만든다.
- 우리가 어느 지역에서는 이것이 법의 적용을 받는다고 언급한 적이 있나요?

## 어떤 종류의 장애를 본 적이 있습니까?

장애가 있는 사람들도 장애가 없는 사람들만큼이나 다양하고, 그만큰 그들의 장애유형도 다양합니다. 여기서 중요한 교훈은 자신이 컴퓨터와 웹을 어떻게 사용하는 지에 대해 생각하고 다른 사람들이 웹을 어떻게 사용하는 지에 대해 배우는 것이다.

장애의 주요 유형은 웹 콘텐츠에 액세스 하는 데 사용하는 전문 도구와 함께 아래에 설명되어 있습니다.(흔히 보조공학기기또는 보조기술 이라고 알려진).

> **참고:** 세계 보건 기구(WHO)의 장애 및 보건 현황 보고서에 따르면 전 세계 인구의 약 15%에 해당하는 십억명 이상의 사람들이 장애를 갖고 있으며 1억 1천만명에서 1억 9천만명의 성인들이 심각한 장애를 갖고 있다.

### 시각장애인

여기에는 전맹, 저시력 장애인 색각장애인등이 포함되며 이런 많은 사람들이 화면확대경(물리적 확대경 또는 소프트웨어 줌 기능 - 대부분의 브라우저와 운영 체제에는 최근 확대 / 축소 기능이 있음)과 디지털 글자를 큰소리로 읽어주는 소프트웨어인 화면낭독기를 사용한다.

- 일부는 [JAWS](http://www.freedomscientific.com/Products/Blindness/JAWS) (Windows) 와 [Window Eyes](http://www.gwmicro.com/window-eyes/) (Windows) 같은 상업적인 제품을 사용한다.
- 일부는 [NVDA](http://www.nvaccess.org/) (Windows), [ChromeVox](http://www.chromevox.com/) (Chrome, Windows and Mac OS X), 와 [Orca](https://wiki.gnome.org/Projects/Orca) (Linux) 같은 무료 소프트웨어를 사용하기도 한다.
- 일부는 [VoiceOver](http://www.apple.com/accessibility/osx/voiceover/) (Mac OS X and iOS), [Narrator](https://support.microsoft.com/en-us/help/22798/windows-10-narrator-get-started) (Microsoft Windows), [ChromeVox](http://www.chromevox.com/) (on Chrome OS), [TalkBack](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback) (Android)과 같은 OS에 장착된 소프트 웨어를 사용하기도 한다.

스크린 리더들과 친숙해 지는 것은 좋은 생각이다; 당신은 또한 스크린 리더를 설치하고 그것을 가지고 노는 것이 어떻게 작동하는 지에 대한 아이디어를 얻기 위해서 필요하다. 사용에 대한 자세한 내용은 크로스 브라우저 테스트 화면 판독기 가이드( [cross browser testing screen readers guide](/ko/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#Screenreaders))를 참조하십시오. 아래의 비디오는 또한 경험이 어떠한지에 대한 간단한 예를 제공한다.

{{EmbedYouTube("IK97XMibEws")}}

In terms of statistics, the World Health Organization estimates that "285 million people are estimated to be visually impaired worldwide: 39 million are blind and 246 have low vision." (see [Visual impairment and blindness](http://www.who.int/mediacentre/factsheets/fs282/en/)). That's a large and significant population of users to just miss out on because your site isn't coded properly — almost the same size as the population of the United States of America.

### People with hearing impairments

Otherwise known as people with auditory impairments, or deaf people, this group of people have either low hearing levels or no hearing at all. Hearing-impaired people do use ATs (see [Assistive Devices for People with Hearing, Voice, Speech, or Language Disorders](https://www.nidcd.nih.gov/health/assistive-devices-people-hearing-voice-speech-or-language-disorders)), but there are not really special ATs specific for computer/web use.

There are, however, specific techniques to bear in mind for providing text alternatives to audio content that they can read, from simple text transcripts, to text tracks (i.e. captions) that can be displayed along with video. An article later on will discuss these.

Hearing-impaired people also represent a significant userbase — "360 million people worldwide have disabling hearing loss", says the World Health Organization's [Deafness and hearing loss](http://www.who.int/mediacentre/factsheets/fs300/en/) fact sheet.

### People with mobility impairments

These people have disabilities concerning movement, which might involve purely physical issues (such as loss of limb or paralysis), or neurological/genetic disorders that lead to weakness or loss of control in limbs. Some people might have difficulty making the exact hand movements required to use a mouse, while others might be more severely affected, perhaps being significantly paralysed to the point where they need to use a [head pointer](http://pattersonmedical.com/app.aspx?cmd=getProductDetail&key=070_921118261) to interact with computers.

This kind of disability can also be a result of old age, rather than any specific trauma or condition, and it could also result from hardware limitations — some users might not have a mouse.

The way this usually affects web development work is the requirement that controls be accessible by the keyboard — we'll discuss keyboard accessibility in later articles in the module, but it is a good idea to try out some websites using just the keyboard to see how you get on. Can you use the tab key to move between the different controls of a web form, for example? You can find more details about keyboard controls in our [Cross browser testing Using native keyboard accessibility](/ko/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#Using_native_keyboard_accessibility) section.

In terms of statistics, a significant number of people have mobility impairments. The U.S. Centers for Disease Control and Prevention [Disability and Functioning (Noninstitutionalized Adults 18 Years and Over)](http://www.cdc.gov/nchs/fastats/disability.htm) reports the USA "Percent of adults with any physical functioning difficulty: 15.1%".

### People with cognitive impairments

Probably the widest range of disabilities can be seen in this last category — cognitive impairment can broadly refer to disabilities from mental illnesses to learning difficulties, difficulties in comprehension and concentration like [ADHD (attention deficit hyperactivity disorder)](https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd/index.shtml), to people on the [autistic spectrum](https://www.nimh.nih.gov/health/topics/autism-spectrum-disorders-asd/index.shtml), to people with [schizophrenia](https://www.nimh.nih.gov/health/topics/schizophrenia/index.shtml), and many other types of disorder besides. Such disabilities can affect many parts of everyday life, due to problems with memory, problem solving, comprehension, attention, etc.

The most common ways that such disabilities might affect website usage is difficulty in understanding how to complete a task, remembering how to do something that was previously accomplished, or increased frustration at confusing workflows or inconsistent layouts/navigation/other page features.

Unlike other web accessibility issues, it is impossible to prescribe quick fixes to many web accessibility issues arising from cognitive disabilities; the best chance you've got is to design your websites to be as logical, consistent, and usable as possible, so for example making sure that:

- pages are consistent — navigation, header, footer, and main content are always in the same places.
- tools are well-designed and easy to use.
- multi-stage processes are broken down into logical steps, with regular reminders of how far through the process you are, and how long you've got left to complete the process, if appropriate.
- workflows are logical, simple, and require as few interactions as possible to complete. For example, registering and signing in to a website is often unneccessarily complex.
- pages are not overly long or dense in terms of the amount of information presented at once.
- the language used in your pages is as plain and easy to follow as possible, and not full of unneccessary jargon and slang.
- important points and content are highlighted in some way.
- user errors are clearly highlighted, with help messages to suggest solutions.

These are not "accessibility techniques" as such — they are good design practices. They will benefit everyone using your sites and should be a standard part of your work.

In terms of statistics, again the numbers are significant. Cornell University's [2014 Disability Status Report](http://www.disabilitystatistics.org/StatusReports/2014-PDF/2014-StatusReport_US.pdf) (PDF, 511KB) indicates that in 2014, 4.5% of people in the USA aged 21–64 had some form of cognitive disability.

> **참고:** WebAIM's [Cognitive](http://webaim.org/articles/cognitive/) page provides a useful expansion of these ideas, and is certainly worth reading.

## Implementing accessibility into your project

A common accessibility myth is that accessibility is an expensive "added extra" to implement on a project. This myth actually _can_ be true if either:

- You are trying to "retrofit" accessibility onto an existing website that has significant accessiblity issues.
- You have only started to consider accessibility and uncovered related issues in the late stages of a project.

If however you consider accessibility from the start of a project, the cost of making most content accessible should be fairly minimal.

When planning your project, factor accessibility testing into your testing regime, just like testing for any other important target audience segment (e.g. target desktop or mobile browsers). Test early and often, ideally running automated tests to pick up on programmatically detectable missing features (such as missing image [alternative text](/ko/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#Text_alternatives) or bad link text — see [Element relationships and context](/ko/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#Element_relationships_and_context)), and doing some testing with disabled user groups to see how well more complex site features work for them. For example:

- Is my date picker widget usable by people using screen readers?
- If content updates dynamically, do visually impaired people know about it?
- Are my UI buttons accessible using the keyboard and on touch interfaces?

You can and should keep a note of potential problem areas in your content that will need work to make it accessible, make sure it is tested thoroughly, and think about solutions/alternatives. Text content (as you'll see in the next article) is easy, but what about your multimedia content, and your whizzy 3D graphics? You should look at your project budget and realistically think about what solutions you have available to make such content accessible? You could pay to have all your multimedia content transcribed, which can be expensive, but can be done.

Also, be realistic. "100% accessibility" is an unobtainable ideal — you will always come across some kind of edge case that results in a certain user finding certain content difficult to use — but you should do as much as you can. If you are planning to include a whizzy 3D pie chart graphic made using WebGL, you might want to include a data table as an accessible alternative representation of the data. Or, you might want to just include the table and get rid of the 3D pie chart — the table is accessible by everyone, quicker to code, less CPU-intensive, and easier to maintain.

On the other hand, if you are working on a gallery website showing interesting 3D art, it would be unreasonable to expect every piece of art to be perfectly accessible to visually impaired people, given that it is an entirely visual medium.

To show that you care and have thought about accessibility, publish an accessibility statement on your site that details what your policy is toward accessibility, and what steps you have taken toward making the site accessible. If someone does complain that your site has an accessibility problem, start a dialog with them, be empathic, and take reasonable steps to try to fix the problem.

> **참고:** Our [Handling common accessibility problems article](/ko/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility) covers accessibility specifics that should be tested in more detail.

To summarize:

- Consider accessibility from the start of a project, and test early and often. Just like any other bug, an accessibility problem becomes more expensive to fix the later it is discovered.
- Bear in mind that a lot of accessibility best practices benefit everyone, not just users with disabilities. For example, lean semantic markup is not only good for screen readers, it is also fast to load and performant, so better for everyone, especially those on mobile devices, and/or slow conections.
- Publish an accessibility statement on your site and engage with people having problems.

## Accessibility guidelines and the law

There are numerous checklists and sets of guidelines available for basing accessibility tests on, which might seem overwhelming at first glance. Our advice is to familiarize yourself with the basic areas in which you need to take care, as well as understanding the high level structures of the guidelines that are most relevant to you.

- For a start, the W3C has published a large and very detailed document that includes very precise, technology-agnostic criteria for accessibility conformance. These are called the [Web Content Accessibility Guidelines](https://www.w3.org/WAI/intro/wcag.php) (WCAG), and they are not a short read by any means. The criteria are split up into four main categories, which specify how implementations can be made perceivable, operable, understandable, and robust. The best place to get a light introduction and start learning is [WCAG at a Glance](https://www.w3.org/WAI/WCAG20/glance/Overview.html). There is no need to learn WCAG off by heart — be aware of the major areas of concern, and use a variety of techniques and tools to highlight any areas that don't conform to the WCAG criteria (see below for more).
- Your country may also have specific legislation governing the need for websites serving their population to be accessible — for example [Section 508 of the Rehabilitation Act](http://www.section508.gov/content/learn) in the US, [Federal Ordinance on Barrier-Free Information Technology](https://www.einfach-fuer-alle.de/artikel/bitv_english/) in Germany, the [Equality Act](http://www.legislation.gov.uk/ukpga/2010/15/contents) in the UK, [Accessibilità](http://www.agid.gov.it/agenda-digitale/pubblica-amministrazione/accessibilita) in Italy, the [Disability Discrimination Act](https://www.humanrights.gov.au/world-wide-web-access-disability-discrimination-act-advisory-notes-ver-41-2014) in Australia, etc.

So while the WCAG is a set of guidelines, your country will probably have laws governing web accessibility, or at least the accessibility of services available to the public (which could include websites, television, physical spaces, etc.) It is a good idea to find out what your laws are. If you make no effort to check that your content is accessible, you could possibly get in trouble with the law if people with diabilities complain about it.

This sounds serious, but really you just need to consider accessibility as a main priority of your web development practices, as outlined above. If in doubt, get advice from a qualified lawyer. We're not going to offer any more advice than this, because we're not lawyers.

## Accessibility APIs

Web browsers make use of special **accessibility APIs** (provided by the underlying operating system) that expose information useful for assistive technologies (ATs) — ATs mostly tend to make use of semantic information, so this information doesn't include things like styling information, or JavaScript. This information is structured in a tree of information called the **accessibility tree**.

Different operating systems have different accessibility APIs available :

- Windows: MSAA/IAccessible, UIAExpress, IAccessible2
- Mac OS X: NSAccessibility
- Linux: AT-SPI
- Android: Accessibility framework
- iOS: UIAccessibility

Where the native semantic information provided by the HTML elements in your web apps falls down, you can supplement it with features from the [WAI-ARIA specification](https://www.w3.org/TR/wai-aria/), which add semantic information to the accessibility tree to improve accessibility. You can learn a lot more about WAI-ARIA in our [WAI-ARIA basics](/ko/docs/Learn/Accessibility/WAI-ARIA_basics) article.

## Summary

This article should have given you a useful high level overview of accessibility, shown you why it's important, and looked at how you can fit it into your workflow. You should now also have a thirst to learn about the implementation details that can make sites accessible, and we'll start on that in the next section, looking at why HTML is a good basis for accessibility.

{{NextMenu("Learn/Accessibility/HTML", "Learn/Accessibility")}}

## In this module

- [What is accessibility?](/ko/docs/Learn/Accessibility/What_is_accessibility)
- [HTML: A good basis for accessibility](/ko/docs/Learn/Accessibility/HTML)
- [CSS and JavaScript accessibility best practices](/ko/docs/Learn/Accessibility/CSS_and_JavaScript)
- [WAI-ARIA basics](/ko/docs/Learn/Accessibility/WAI-ARIA_basics)
- [Accessible multimedia](/ko/docs/Learn/Accessibility/Multimedia)
- [Mobile accessibility](/ko/docs/Learn/Accessibility/Mobile)
- [Accessibility troubleshooting](/ko/docs/Learn/Accessibility/Accessibility_troubleshooting)
