---
title: ARIA
slug: Web/Accessibility/ARIA
---

Accessible Rich Internet Applications **(ARIA)** defines ways to make Web content and Web applications (especially those developed with Ajax and JavaScript) more accessible to people with disabilities. For example, ARIA enables accessible navigation landmarks, JavaScript widgets, form hints and error messages, live content updates, and more.

ARIA is a set of special accessibility attributes which can be added to any markup, but is especially suited to HTML. The `role` attribute defines what the general type of object is (such as an article, alert, or slider). Additional ARIA attributes provide other useful properties, such as a description for a form or the current value of a progressbar.

ARIA is implemented in most popular browsers and screen readers. However, implementations vary and older technologies don't support it well (if at all). Use either "safe" ARIA that degrades gracefully, or ask users to upgrade to newer technology.

> **備註：** Please contribute and make ARIA better for the next person! Not enough time? Send suggestions to Mozilla's [accessibility mailing list](https://lists.mozilla.org/listinfo/accessibility), or #accessibility [IRC channel](https://wiki.mozilla.org/IRC).

### Getting Started with ARIA

- [Introduction to ARIA](/zh-TW/docs/Accessibility/An_overview_of_accessible_web_applications_and_widgets)
  - : A quick introduction to making dynamic content accessible with ARIA. See also the classic [ARIA intro by Gez Lemon](http://dev.opera.com/articles/view/introduction-to-wai-aria/), from 2008.
- [Web Applications and ARIA FAQ](/zh-TW/docs/Accessibility/ARIA/Web_applications_and_ARIA_FAQ)
  - : Answers common questions about WAI-ARIA and why it's needed to make web applications accessible.
- [Videos of Screen Readers Using ARIA](http://zomigi.com/blog/videos-of-screen-readers-using-aria-updated/)
  - : See both real and simplfied examples from around the web, including "before" and "after" ARIA videos.
- [Using ARIA in HTML](http://w3c.github.io/aria-in-html/)
  - : A practical guide for developers. It suggests what ARIA attributes to use on HTML elements. Suggestions are based on implementation realities.

### Simple ARIA Enhancements

- [Enhancing Page Navigation with ARIA Landmarks](http://www.paciellogroup.com/blog/2010/10/using-wai-aria-landmark-roles/)
  - : A nice intro to using ARIA landmarks to improve web page navigation for screen reader users. [See also, ARIA landmark implementation notes](http://www.paciellogroup.com/blog/2011/07/html5-accessibility-chops-aria-landmark-support/) and examples on real sites (updated as of July '11).
- [Improving Form Accessibility](/zh-TW/docs/ARIA/forms)
  - : ARIA is not just for dynamic content! Learn how to improve accessibility of HTML forms using additional ARIA attributes.
- [Live regions (work-in-progress)](/zh-TW/docs/Accessibility/ARIA/ARIA_Live_Regions)
  - : Live regions provide suggestions to screen readers about how to handle changes to the contents of a page.
- [Using ARIA Live Regions to Announce Content Changes](http://www.freedomscientific.com/Training/Surfs-up/AriaLiveRegions.htm)
  - : A quick summary of live regions, by the makers of JAWS screen reader software. Note that live regions are also supported by NVDA in Firefox, and VoiceOver with Safari (as of OS X Lion and iOS 5).

### ARIA for Scripted Widgets

- [Keyboard Navigation and Focus for JavaScript Widgets](/zh-TW/docs/Accessibility/Keyboard-navigable_JavaScript_widgets)
  - : The first step in developing an accessible JavaScript widget is to make it keyboard navigable. This article steps through the process. The [Yahoo! focus management article](http://www.yuiblog.com/blog/2009/02/23/managing-focus/) is a great resource as well.
- [Style Guide for Keyboard Navigation](http://access.aol.com/dhtml-style-guide-working-group/)
  - : A challenge with ARIA is getting developers to implement consistent behavior -- clearly best for users. This style guide describes the keyboard interface for common widgets.

### ARIA Resources

- [Widget Techniques, Tutorials, and Examples](/zh-TW/docs/Accessibility/ARIA/widgets/overview)
  - : Need a slider, a menu, or another kind of widget? Find resources here.
- [ARIA-Enabled JavaScript UI Libraries](http://www.paciellogroup.com/blog/2009/07/wai-aria-implementation-in-javascript-ui-libraries/)
  - : If you're starting a new project, choose a UI widget library with ARIA support already built-in. Warning: this is from 2009 -- content should be moved to an MDN page where it can be updated.
- [Accessibility of HTML5 and Rich Internet Applications - CSUN 2012 Workshop Materials](http://dl.dropbox.com/u/573324/CSUN2012/index.html)
  - : Includes slide presentations and examples.

### Mailing List

- [Free ARIA Google Group](https://groups.google.com/forum/#!forum/free-aria)
  - : A place to ask questions about ARIA, as well as make suggestions for improving the ARIA documentation found on these pages.

### Blogs

ARIA information on blogs tends to get out of date quickly. Still, there is some great info out there from other developers making ARIA work today.

[Paciello Group](http://www.paciellogroup.com/blog/category/wai-aria/)

[Accessible Culture](http://www.accessibleculture.org/tag/wai-aria/)

### Filing Bugs

[File ARIA bugs on browsers, screen readers, and JavaScript libraries](/zh-TW/Accessibility/ARIA/How_to_file_ARIA-related_bugs).

### Examples

- [ARIA Examples Library](/zh-TW/docs/Accessibility/ARIA/ARIA_Test_Cases)
  - : A set of barebones example files which are easy to learn from.
- Accessible JS Widget Library Demos
  - : [Dojo](http://dojotoolkit.org/widgets), [jQuery](http://hanshillen.github.com/jqtest/), [Fluid](http://wiki.fluidproject.org/display/fluid/Components), [YUI](http://yuilibrary.com/gallery/)
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

  - : Like the W3C WAI-ARIA specification, the official best practices represents a future ideal -- a day when authors can rely on consistent ARIA support across browsers and screen readers. The W3C documents provide an in-depth view of ARIA.

    For now, web developers implementing ARIA should maximize compatibility. Use best practices docs and examples based on current implementations.

- [Open AJAX Accessibility Task Force](http://www.openajax.org/member/wiki/Accessibility)
  - : The Open AJAX effort centers around developing tools, sample files, and automated tests for ARIA.
- [Under Construction: WCAG 2.0 ARIA Techniques](/zh-TW/docs/Accessibility/ARIA/ARIA_Techniques)
  - : The community needs a complete set of WCAG techniques for WAI-ARIA + HTML, so that organizations can be comfortable claiming their ARIA-enabled content is WCAG compliant. This is mostly important when regulations or policies are based on WCAG.

### Related Topics

- [Accessibility](/zh-TW/docs/Accessibility)
- [AJAX](/zh-TW/docs/AJAX)
- [JavaScript](/zh-TW/docs/JavaScript)
