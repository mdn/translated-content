---
title: CSS layout
slug: Learn/CSS/CSS_layout
tags:
  - Beginner
  - CSS
  - Floating
  - Grids
  - Guide
  - Landing
  - Layout
  - Learn
  - Module
  - Multiple column
  - NeedsTranslation
  - Positioning
  - TopicStub
  - flexbox
  - float
translation_of: Learn/CSS/CSS_layout
---
{{LearnSidebar}}

At this point we've already looked at CSS fundamentals, how to style text, and how to style and manipulate the boxes that your content sits inside. Now it's time to look at how to place your boxes in the right place in relation to the viewport, and one another. We have covered the necessary prerequisites so we can now dive deep into CSS layout, looking at different display settings, traditional layout methods involving float and positioning, and modern layout tools like flexbox.

## Prerequisites

Before starting this module, you should already:

1.  Have basic familiarity with HTML, as discussed in the [Introduction to HTML](/pl/docs/Learn/HTML/Introduction_to_HTML) module.
2.  Be comfortable with CSS fundamentals, as discussed in [Introduction to CSS](/pl/docs/Learn/CSS/Introduction_to_CSS).
3.  Understand how to [style boxes](/pl/docs/Learn/CSS/Styling_boxes).

> **Note:** If you are working on a computer/tablet/other device where you don't have the ability to create your own files, you could try out (most of) the code examples in an online coding program such as [JSBin](http://jsbin.com/) or [Thimble](https://thimble.mozilla.org/).

## Guides

These articles will provide instruction on the fundamental layout tools and techniques available in CSS.

- [Introduction to CSS layout](/pl/docs/Learn/CSS/CSS_layout/Introduction)
  - : This article will recap some of the CSS layout features we've already touched upon in previous modules — such as different {{cssxref("display")}} values — and introduce some of the concepts we'll be covering throughout this module.
- [Floats](/pl/docs/Learn/CSS/CSS_layout/Floats)
  - : Originally for floating images inside blocks of text, the {{cssxref("float")}} property has become one of the most commonly used tools for creating multiple column layouts on webpages. This article explains all.
- [Positioning](/pl/docs/Learn/CSS/CSS_layout/Positioning)
  - : Positioning allows you to take elements out of the normal document layout flow, and make them behave differently, for example sitting on top of one another, or always remaining in the same place inside the browser viewport. This article explains the different {{cssxref("position")}} values, and how to use them.
- [Practical positioning examples](/pl/docs/Learn/CSS/CSS_layout/Practical_positioning_examples)
  - : With the basics of positioning covered in the last article, we will now look at building a couple of real world examples, to illustrate what kinds of things you can do with positioning.
- [Flexbox](/pl/docs/Learn/CSS/CSS_layout/Flexbox)
  - : A new technology, but with support now fairly widespread across browsers, [Flexbox](/pl/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_flexbox_to_lay_out_web_applications) is starting to become ready for widespread use. Flexbox provides tools to allow rapid creation of complex, flexible layouts, and features that historically proved difficult with CSS. This articles explains all the fundamentals.
- [Grids](/pl/docs/Learn/CSS/CSS_layout/Grids)
  - : Grid systems are another very common feature used in CSS layouts, which tend to be implemented using floats or other layout features. You imagine your layout as a set number of columns (e.g. 4, 6, or 12), and then fit your content columns inside these imaginary columns. In this article we'll explore the basic idea behind creating a grid system, look at using a ready-made grid system provided by a grid framework, and end by experimenting with CSS Grids — a nascent new browser feature that makes implementing grid design on the Web a lot easier.
