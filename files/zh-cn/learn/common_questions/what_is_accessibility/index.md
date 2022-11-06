---
title: 何为无障碍？
slug: Learn/Common_questions/What_is_accessibility
---

本文介绍了 Web 无障碍背后的一些基本概念。

<table class="learn-box nostripe standard-table">
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>无</td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>学习无障碍，了解其重要性</td>
    </tr>
  </tbody>
</table>

## 概述

由于身体或技术上的限制，你的访客也许无法以像你期望的方式体验网站。本文中，我们给出了无障碍的一般原则，并解释了其中的一些规则。

## 自主学习

_还没有可用的资料。 [Please, consider contributing](/zh-CN/docs/MDN/Getting_started)._

## 深入探索

### 无障碍：一般原则

We might associate accessibility at first with negative limitations. This building has to be accessible, so it must follow these regulations for door width and toilet size and elevator placement.

That's a narrow way to think of accessibility. Think of it as a wonderful way to empower people and serve more customers. What can the people in Brazil do with your English website? Can the people with smartphones browse a heavy, cluttered website designed for a large desktop monitor and unlimited bandwidth? They'll go somewhere else. In general, _we must think about our product from the viewpoints of all our target customers, and adapt accordingly._ Hence accessibility.

### Web 无障碍

In the specific context of the web, accessibility means that anyone can benefit from your content, regardless of disability, location, technical limitations, or other circumstances.

Let's consider video:

- 听力障碍
  - : How does a hearing-impaired person benefit from a video? You have to provide subtitles —or even better, a full text transcript.
    Also, make sure people can adjust the volume to accommodate their unique needs.
- 视觉障碍
  - : Again, provide a text transcript that a user can consult without needing to play the video, and an audio-description (an off-screen voice that describes what is happening in the video).
- 暂停功能
  - : Users may have trouble understanding someone in a video. Let them pause the video to read the subtitles or process the information.
- 键盘功能
  - : Let the user tab into/out of a video, play it, and pause it without being trapped in it.

#### Web 无障碍基础

A few necessities for basic Web accessibility include:

- Whenever your site needs an image to convey meaning, include text as an alternative for visually-challenged users or those with slow connections.
- Make sure all users can operate graphical interfaces (like unfolding menus) solely with a keyboard (e.g., with Tab and the Return key).
- Provide an attribute explicitly specifying your content's language, so that screen readers read your text properly.
- Make sure that a user can navigate to all widgets on a page solely with the keyboard, without getting trapped. (At least let them Tab in and out.)

而这只是个开始。

### 无障碍的拥护者

Since 1999, the {{Glossary("W3C")}} has operated a working group called the {{Glossary("WAI","Web Accessibility Initiative")}} (WAI) promoting accessibility through guidelines, support material, and international resources.

## 更多细节

请参阅

- 关于无障碍的[维基百科文章](https://en.wikipedia.org/wiki/Accessibility)
- [WAI (W3C's Web Accessibility Initiative)](http://www.w3.org/WAI/)

## 下一步

Accessibility can impact both a website's design and technical structure.

- From a design point of view, we suggest learning about [designing for all types of users](/zh-CN/docs/Learn/Design_for_all_types_of_users_101).
- If the technical side interests you more, you could learn how to [embed images in webpages](/zh-CN/docs/Learn/Using_images).
