---
title: ARIA
slug: Web/Accessibility/ARIA
---

Accessible Rich Internet Applications **(ARIA)** определяет способ сделать веб контент и веб приложения (особенно те, которые разработаны с помощью Ajax и JavaScript) более доступными для людей с ограниченными возможностями. Например, ARIA делает доступным навигационные маркеры, JavaScript виджеты, подсказки на форме, сообщения об ошибках, автоматические обновления и многое другое.

ARIA - это набор специальных атрибутов, которые могут быть добавлены в любую разметку, но особенно подходят для HTML. Атрибут `role` определяет тип объекта (такие как статья, оповещение или ползунок). Дополнительные ARIA атрибуты предоставляют другие полезные возможности, такие как описания для форм или текущее значение индикатора выполнения.

Поддержка ARIA реализована в большинстве современных браузеров и программах экранного доступа. Конечно, реализации различаются, и старые технологии не поддерживают их полностью (либо вообще не поддерживают). Используйте постепенно деградирующий "щадящий" ARIA, или просите пользователей использовать новые технологии.

> **Примечание:** Пожалуйста, примите участие в написании и/или переводе статей чтобы сделать ARIA понятнее и доступнее для тех, кто только начинает изучать материал! Не хватает на это времени? Тогда отправьте свои предложения в [список рассылки Mozilla по теме accessibility](https://lists.mozilla.org/listinfo/accessibility), или на [IRC канал](https://wiki.mozilla.org/IRC)с тэгом #accessibility.

### Начало работы с ARIA

- [Введение в ARIA](/ru/docs/Accessibility/An_overview_of_accessible_web_applications_and_widgets)
  - : Быстрое введение в превращение динамического контента в доступный с помощью ARIA. Смотрите также классическую статью [ARIA intro by Gez Lemon](http://dev.opera.com/articles/view/introduction-to-wai-aria/), from 2008.
- [Web Applications and ARIA FAQ](/ru/docs/Accessibility/ARIA/Web_applications_and_ARIA_FAQ)
  - : Ответы на часто задаваемые вопросы о том как и почему нужно использовать ARIA в разработке интерфейсов веб-приложений.
- [Записи использования экранных читалок с ARIA.](http://zomigi.com/blog/videos-of-screen-readers-using-aria-updated/)
  - : На этих видео можно увидеть реальные и учебные примеры того ARIA улучшает доступность.
- [Использование ARIA в HTML](http://w3c.github.io/aria-in-html/)
  - : Практическое руководство для разработчиков. Содержит рекомендации по использованию ARIA-атрибутов при разметке.

### Простое улучшение ARIA

- [Улучшение навигации по странице с помощью ARIA Landmarks](https://www.paciellogroup.com/blog/2013/02/using-wai-aria-landmarks-2013/)
  - : Хорошее введение в использование ARIA landmarks для улучшения навигации для пользователей с экранными читалками. [Стоит также заглянуть в заметки по поддержке ARIA landmarks читалками](http://www.paciellogroup.com/blog/2011/07/html5-accessibility-chops-aria-landmark-support/) и примеры использования на реальных сайтах (опубликовано в Июле 2011).
- [Улучшение доступности форм](/ru/docs/ARIA/forms)
  - : ARIA используется не только для обозначения динамического контента! Узнайте, как улучшить доступность форм HTML используя дополнительные ARIA-атрибуты.
- [Live regions (в процессе написания)](/ru/docs/Accessibility/ARIA/ARIA_Live_Regions)
  - : Live regions подсказывают экранным читалкам как правильно обрабатывать изменения контента на странице.
- [Использование ARIA Live Regions для оповещения об изменении контента страницы](http://www.freedomscientific.com/Training/Surfs-up/AriaLiveRegions.htm)
  - : Краткая сводка об использовании live regions от создателей JAWS screen reader software. Live regions также поддерживаются NVDA в Firefox и VoiceOver в Safari.

### ARIA для виджетов на JavaScript

- [Навигация с помощью клавиатуры и фокус в виджетах на JavaScript](/ru/docs/Accessibility/Keyboard-navigable_JavaScript_widgets)
  - : Первый шаг в создании доступных JavaScript виджетов, позволяющих производить навигацию с помощью клавиатуры. Статья описывает последовательные шаги по достижению цели. Ещё один хороший ресурс - [статья Yahoo! об управлении фокусом.](http://www.yuiblog.com/blog/2009/02/23/managing-focus/)
- [Style Guide for Keyboard Navigation](http://access.aol.com/dhtml-style-guide-working-group/)
  - : В этом руководстве описываются способы управления самыми распространёнными виджетами с клавиатуры.

### Дополнительные ресурсы по ARIA

- [Виджеты. Техники, руководства, примеры.](/ru/docs/Accessibility/ARIA/widgets/overview)
  - : Нужен слайдер, меню или другой виджет? здесь вы можете найти все, что нужно
- [JavaScript UI библиотеки со встроенной поддержкой ARIA.](http://www.paciellogroup.com/blog/2009/07/wai-aria-implementation-in-javascript-ui-libraries/)
  - : Если вы начинаете новый проект, то вам стоит обратить внимание на UI библиотеки, имеющие встроенную поддержку ARIA. Внимание: статья 2009 года — то, что она описывает, стоит вынести в отдельную статью на MDN, которая будет поддерживаться в актуальном состоянии.

### Список рассылки

- [Открытая Google Group, посвящённая ARIA](https://groups.google.com/forum/#!forum/free-aria)
  - : Здесь можно задать вопрос об ARIA, а также предложить улучшение существующей документации, которая находится там же.

### Блоги

Хотя информация в блогах быстро теряет актуальность, всё же в них можно почерпнуть ценную информацию из первых рук - разработчиков, развивающих ARIA.

[Paciello Group](https://www.paciellogroup.com/blog/archive/)

[Accessible Culture](http://www.accessibleculture.org/tag/wai-aria/)

### Обнаружение багов

[Сообщайте об ошибках ARIA в браузерах, экранных читалках и библиотеках JavaScript.](/en/Accessibility/ARIA/How_to_file_ARIA-related_bugs)

### Примеры

- [ARIA. Библиотека примеров.](/ru/docs/Accessibility/ARIA/ARIA_Test_Cases)
  - : Набор примеров по которым можно многому научиться.
- Различные демки библиотек с доступными JS виджетами.
  - : [jQuery](http://hanshillen.github.com/jqtest/), [YUI](http://yuilibrary.com/gallery/)
- [Yahoo! Mail](http://mail.yahoo.com)
  - : Детище Yahoo! - Yahoo! Mail, веб-приложение, выглядящее практически как нативное и вполне доступное. После [обзора Yahoo! Mail](http://www.marcozehe.de/2011/09/21/review-the-all-new-yahoo-mail-web-application/) с использованием экранной читалки Marco Zehe сказал: "Хорошая работа, не сбавляйте обороты!".
- [Yahoo! Search](http://search.yahoo.com)
  - : Yahoo! проделали невероятную работу по продвижению ARIA в своём поисковике, используя все возможности и [делясь своим опытом](http://ycorpblog.com/2011/03/23/searchdirect/). Yahoo! Search использует одновременно ARIA landmarks, live regions, и widgets.

### Стандартизация

- [WAI-ARIA Activities Overview at W3C](http://www.w3.org/WAI/intro/aria.php)
  - : Authoritative Overview of WAI-ARIA Standardization efforts by the Web Accessibility Initiative (WAI)
- [WAI-ARIA Specification](http://www.w3.org/TR/wai-aria/)
  - : The W3C specification itself, useful as a reference. Note that, at this stage, it is important to test compatibility, as implementations are still inconsistent.
- [WAI-ARIA Authoring Practices](http://www.w3.org/WAI/PF/aria-practices/)

  - : Like the W3C WAI-ARIA specification, the official best practices represents a future ideal — a day when authors can rely on consistent ARIA support across browsers and screen readers. The W3C documents provide an in-depth view of ARIA.

    For now, web developers implementing ARIA should maximize compatibility. Use best practices docs and examples based on current implementations.

- [Open AJAX Accessibility Task Force](http://www.openajax.org/member/wiki/Accessibility)
  - : The Open AJAX effort centers around developing tools, sample files, and automated tests for ARIA.
- [Under Construction: WCAG 2.0 ARIA Techniques](/ru/docs/Accessibility/ARIA/ARIA_Techniques)
  - : The community needs a complete set of WCAG techniques for WAI-ARIA + HTML, so that organizations can be comfortable claiming their ARIA-enabled content is WCAG compliant. This is important when regulations or policies are based on WCAG.

### Related Topics

[Accessibility](/ru/docs/Accessibility), [AJAX](/ru/docs/AJAX), [JavaScript](/ru/docs/JavaScript)
