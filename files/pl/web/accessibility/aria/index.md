---
title: ARIA
slug: Web/Accessibility/ARIA
tags:
  - ARIA
  - Accessibility
  - NeedsTranslation
  - TopicStub
  - Web
translation_of: Web/Accessibility/ARIA
---
Accessible Rich Internet Applications **(ARIA)** jest zbiorem atrybutów, które umożliwiają rozwój aplikacji webowych (szczególnie tych, które wykorzystują AJAX, Javascript itp.) w taki sposób, iż są one przyjaźniejsze ludziom z niepełnosprawnościami.  Dla przykładu, ARIA umożliwia bezproblemową nawigację po stronie, pomoce przy typowaniu, przyjazne użytkownikowi aktualizacje treści, i wiele, wiele więcej.

ARIA jest zbiorem specjalnych atrybutów poprawiajacych dostępność aplikacji, które mogą zostać dodane do dowolnego języka znaczników. Jednakże atrybuty te są przystosowane głównie pod HTML, co powoduje, iż są one wyłącznie tam stosowane.
Atrybut `role` definiuje specjalne role dla obiektów (takich jak `article` , `alert` , `slider` , czy `button` ). Dodatkowo atrubuty ARIA dostarczają inne przydatne opcje, takie jak opis do `form` , albo właściwą długość pasku postępu (np. instalacji, aktualizacji lub innego działania). Atrybuty aria moga także zostać użyte w celu aktywacji, deaktywacji, czy ustalenia innego stanu obiektów (np. stanu `button`)



ARIA jest zaimplementowana w najbardziej popularnych przeglądarkach i czytnikach ekranowych. Jednakże, implementacje różnią się między sobą i starsze technologie mogą takich atrybutów dobrze nie wspierać. Oczywiście jeśli w ogóle wspierają.

> **Note:** Please contribute and make ARIA better for the next person! Not enough time? Send suggestions to Mozilla's [accessibility mailing list](https://lists.mozilla.org/listinfo/accessibility), or #accessibility [IRC channel](https://wiki.mozilla.org/IRC).

### Zacznij z ARIĄ

- Instrukcje do ARI
  - : A quick introduction to making dynamic content accessible with ARIA. See also the classic [ARIA intro by Gez Lemon](http://dev.opera.com/articles/view/introduction-to-wai-aria/), from 2008.
- [Web Applications and ARIA FAQ](/pl/docs/Accessibility/ARIA/Web_applications_and_ARIA_FAQ)
  - : Answers common questions about WAI-ARIA and why it's needed to make web applications accessible.
- [Videos of Screen Readers Using ARIA](http://zomigi.com/blog/videos-of-screen-readers-using-aria-updated/)
  - : See both real and simplified examples from around the web, including "before" and "after" ARIA videos.
- [Using ARIA in HTML](http://w3c.github.io/aria-in-html/)
  - : A practical guide for developers. It suggests what ARIA attributes to use on HTML elements. Suggestions are based on implementation realities.

### Simple ARIA Enhancements

- [Enhancing Page Navigation with ARIA Landmarks](https://www.paciellogroup.com/blog/2013/02/using-wai-aria-landmarks-2013/)
  - : A nice intro to using ARIA landmarks to improve web page navigation for screen reader users. [See also, ARIA landmark implementation notes](http://www.paciellogroup.com/blog/2011/07/html5-accessibility-chops-aria-landmark-support/) and examples on real sites (updated as of July 2011).
- [Improving Form Accessibility](/pl/docs/ARIA/forms)
  - : ARIA is not just for dynamic content! Learn how to improve accessibility of HTML forms using additional ARIA attributes.
- [Live regions (work-in-progress)](/pl/docs/Accessibility/ARIA/ARIA_Live_Regions "Live Regions")
  - : Live regions provide suggestions to screen readers about how to handle changes to the contents of a page.
- [Using ARIA Live Regions to Announce Content Changes](http://www.freedomscientific.com/Training/Surfs-up/AriaLiveRegions.htm)
  - : A quick summary of live regions, by the makers of JAWS screen reader software. Live regions are also supported by NVDA with Firefox, and VoiceOver with Safari.

### ARIA for Scripted Widgets

- [Keyboard Navigation and Focus for JavaScript Widgets](/pl/docs/Accessibility/Keyboard-navigable_JavaScript_widgets)
  - : The first step in developing an accessible JavaScript widget is to make it keyboard navigable. This article steps through the process. The [Yahoo! focus management article](http://www.yuiblog.com/blog/2009/02/23/managing-focus/) is a great resource as well.
- [Style Guide for Keyboard Navigation](http://access.aol.com/dhtml-style-guide-working-group/)
  - : A challenge with ARIA is getting developers to implement consistent behavior — clearly best for users. This style guide describes the keyboard interface for common widgets.

### ARIA Resources

- [Widget Techniques, Tutorials, and Examples](/pl/docs/Accessibility/ARIA/widgets/overview)
  - : Need a slider, a menu, or another kind of widget? Find resources here.
- [ARIA-Enabled JavaScript UI Libraries](http://www.paciellogroup.com/blog/2009/07/wai-aria-implementation-in-javascript-ui-libraries/)
  - : If you're starting a new project, choose a UI widget library with ARIA support already built-in. Warning: this is from 2009 — content should be moved to an MDN page where it can be updated.

### Mailing List

- [Free ARIA Google Group](https://groups.google.com/forum/#!forum/free-aria)
  - : A place to ask questions about ARIA, as well as make suggestions for improving the ARIA documentation found on these pages.

### Blogs

ARIA information on blogs tends to get out of date quickly. Still, there is some great info out there from other developers making ARIA work today.

[Paciello Group](https://www.paciellogroup.com/blog/archive/)

[Accessible Culture](http://www.accessibleculture.org/tag/wai-aria/)

### Filing Bugs

[File ARIA bugs on browsers, screen readers, and JavaScript libraries.](/en/Accessibility/ARIA/How_to_file_ARIA-related_bugs "https://developer.mozilla.org/en/ARIA/How_to_file_ARIA-related_bugs")

### Examples

- [ARIA Examples Library](/pl/docs/Accessibility/ARIA/ARIA_Test_Cases)
  - : A set of barebones example files which are easy to learn from.
- Accessible JS Widget Library Demos
  - : [jQuery](http://hanshillen.github.com/jqtest/), [YUI](http://yuilibrary.com/gallery/)
- [Yahoo! Mail](http://mail.yahoo.com)
  - : Yahoo! puts it all together with Yahoo! Mail, a web app that almost looks like a native app. It works very well. As a [review of Yahoo! Mail](http://www.marcozehe.de/2011/09/21/review-the-all-new-yahoo-mail-web-application/) by screen reader Marco Zehe says, "Keep up the good work!".
- [Yahoo! Search](http://search.yahoo.com)
  - : Yahoo! has done an amazing job of advancing ARIA here, by exercising ARIA's full capabilities and [sharing their techniques](http://ycorpblog.com/2011/03/23/searchdirect/). Yahoo! Search uses a combination of ARIA landmarks, live regions, and widgets.

### Standardization Efforts

- [WAI-ARIA Activities Overview at W3C](http://www.w3.org/WAI/intro/aria.php)
  - : Authoritative Overview of WAI-ARIA Standardization efforts by the Web Accessibility Initiative (WAI)
- [WAI-ARIA Specification](http://www.w3.org/TR/wai-aria/)
  - : The W3C specification itself, useful as a reference. Note that, at this stage, it is important to test compatibility, as implementations are still inconsistent.
- [WAI-ARIA Authoring Practices](http://www.w3.org/WAI/PF/aria-practices/)
  - : Like the W3C WAI-ARIA specification, the official best practices represents a future ideal — a day when authors can rely on consistent ARIA support across browsers and screen readers. The W3C documents provide an in-depth view of ARIA.For now, web developers implementing ARIA should maximize compatibility. Use best practices docs and examples based on current implementations.
- [Open AJAX Accessibility Task Force](http://www.openajax.org/member/wiki/Accessibility)
  - : The Open AJAX effort centers around developing tools, sample files, and automated tests for ARIA.
- [Under Construction: WCAG 2.0 ARIA Techniques](/pl/docs/Accessibility/ARIA/ARIA_Techniques "ARIA Techniques")
  - : The community needs a complete set of WCAG techniques for WAI-ARIA + HTML, so that organizations can be comfortable claiming their ARIA-enabled content is WCAG compliant. This is important when regulations or policies are based on WCAG.

### Related Topics

[Accessibility](/pl/docs/Accessibility), [AJAX](/pl/docs/AJAX), [JavaScript](/pl/docs/JavaScript)
