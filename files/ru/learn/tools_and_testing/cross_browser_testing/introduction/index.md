---
title: Введение в кросс-браузерное тестирование
slug: Learn/Tools_and_testing/Cross_browser_testing/Introduction
---

{{LearnSidebar}}{{NextMenu("Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies", "Learn/Tools_and_testing/Cross_browser_testing")}}

Эта статья начинает модуль с обзора темы кросс-браузерного тестирования, отвечая на такие вопросы как "что такое кросс-браузерное тестирование?", "с какими распространёнными проблемами можно столкнуться?" и "какие основные подходы для тестирования, обнаружения и исправления проблем существуют?"

| Необходимые условия: | Знакомство с основами [HTML](/ru/docs/Learn/HTML), [CSS](/ru/docs/Learn/CSS), и [JavaScript](/ru/docs/Learn/JavaScript). |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Цель:                | Улучшить понимание идей кроссбраузерного тестирования.                                                                   |

## Что такое кросс-браузерное тестирование?

Кросс-браузерное тестирование - это практика обеспечения уверенности в том, что веб-сайты и веб-приложения, которые вы создаёте, работают в приемлемом количестве браузеров. Обязанность веб-разработчика быть уверенным, что проект работает не только у вас, а у всех ваших пользователей, независимо от браузера, устройства, или других вспомогательных инструментов, которые они используют. Вы должны думать о:

- Других браузерах. Не тех нескольких, которые вы регулярно используете, а о довольно старых, которые некоторые люди могут использовать до сих пор, и которые не поддерживают современные возможности CSS и JavaScript.
- Разных устройствах с разными возможностями, начиная от последних лучших планшетов, смартфонов и "умных" телевизоров, до дешёвых устройств и самых старых смартфонов, в которых браузеры могут работать с ограниченными возможностями.
- Людях с инвалидностью, которые используют Web с помощью вспомогательных технологий, таких как скринридеры, или не используют мышь (некоторые используют только клавиатуру).

Поймите, что вы - не ваши пользователи — если ваш сайт работает на Macbook Pro или Galaxy Nexus, это не значит, что он будет работать так для всех пользователей — нужно сделать много тестов!

> **Примечание:** Статья [сделаем веб доступным для всех](https://hacks.mozilla.org/2016/07/make-the-web-work-for-everyone/) предоставляет более полезную информацию о различных браузерах, которые используют люди, их доле рынка и связанных с этим проблемах совместимости браузеров.

Мы должны поговорить немного о терминологии. Для начала, когда мы говорим о сайтах, "работающих кросс-браузерной", на самом деле мы говорим о том, что они должны обеспечивать приемлемое удобство использования в разных браузерах. Это нормально, если сайт выглядит немного по-разному в разных браузерах, главное он должен обеспечивать полную функциональность.В современных браузерах вы можете сделать что-то анимированным или использовать 3D, тогда как в старых браузерах вы можете лишь показать плоскую картинку, предоставляющую ту же информацию. Если владелец сайта доволен, вы сделали своё дело.

С другой стороны, плохо, когда сайт полноценно работает для обычных людей, но может быть совершенно недоступен для людей, имеющих проблемы со зрением, т.к. их приложения для чтения экрана не могут распознать информацию на сайте.

Когда мы говорим "приемлемое количество браузеров", мы не говорим, что это должно быть 100% всех браузеров в мире — это почти невозможно. Вы можете собрать информацию о том, какими браузеры и устройства используют ваши пользователи (это мы обсудим во второй статье — см. [Gotta test 'em all?](/ru/docs/Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies#Gotta_test_%27em_all)), но это ничего не гарантирует. Как веб-разработчик, вы должны определить для себя несколько браузеров и устройств, на которых код должен работать полностью, но кроме этого, вы должны писать код так, чтобы и другие браузеры были способны максимально использовать ваш сайт (defensive coding). Это одна из самых больших проблем веб-разработки.

> **Примечание:** Мы разберём defensive coding позже в этом модуле.

## Почему возникают кросс-браузерные проблемы?

Есть множество причин, почему возникают кросс-браузерные проблемы, и, заметьте, что сейчас мы говорим о проблемах, при которых некоторые вещи ведут себя по-разному в разных браузерах / устройствах / настройках просмотра. Прежде чем вы столкнётесь с проблемами браузера, вы должны исправить все ошибки в коде (см. [Отладка HTML](/ru/docs/Learn/HTML/Введение_в_HTML/Debugging_HTML), [Отладка CSS](/ru/docs/Learn/CSS/Introduction_to_CSS/Отладка_CSS), and [Что пошло не так? Устранение ошибок JavaScript](/ru/docs/Learn/JavaScript/Первые_шаги/Что_пошло_не_так) из предыдущего раздела).

Кросс-браузерные проблемы возникают потому-что:

- иногда браузеры содержат баги, или реализуют возможности по-разному. В настоящее время это не такая частая проблема, но когда IE4 и Netscape 4 конкурировали за право быть доминирующим браузером в 90-е, компании-разработчики браузеров умышленно реализовывали возможности по-своему в попытке получить конкурентное преимущество, что делало жизнь веб-разработчикам адом. Сейчас же браузеры гораздо жёстче соблюдают стандарты, но различия и баги всё же иногда возникают.
- браузеры имеют разную степень поддержи современных технологий. Это неизбежно, когда вы имеете дело с новейшими функциями, которые браузеры только начинают осваивать, или если вы вынуждены поддерживать очень старые браузеры, которые более не дорабатываются или которые могли быть заморожены (то есть в них не добавляют новый функционал) задолго до того, как придумали новые возможности. Например, если вы хотите использовать передовые возможности JavaScript на вашем сайте, то они могут не работать в старых браузерах. Если вам нужна поддержка старых браузеров, вы можете конвертировать ваш код под старый синтаксис, используя специальные компиляторы.
- некоторые устройства могут иметь ограничения, из-за которых сайт работает медленно или отображается неверно. Например, если сайт был спроектирован для просмотра на десктопных устройствах, он возможно будет выглядеть мелко и трудночитаемо на мобильных устройствах. Если ваш сайт содержит множество больших анимаций, это может быть хорошо на высокопроизводительных планшетах, но может быть вялым или резким на устройствах меньшей производительности.

а также другие причины.

В статьях далее, мы выясним основные проблемы кросс-браузерности и посмотрим на их решения.

## Инструменты для кросс-браузерного тестирования

Может показаться, что тестирование - это затратно и страшно, но это важно — вы должны спланировать и убедиться, что вы делаете тесты в нужных местах, чтобы не было неожиданных проблем. Если вы работаете над большим проектом, вы должны тестировать его регулярно, чтобы убеждаться, что новые возможности работают корректно для вашей целевой аудитории, и что новый код не ломает старый функционал.

Если вы будете тестировать в конце проекта, любые не обнаруженные баги будут гораздо более затратными по времени для исправления, если бы вы их тестировали и обнаруживали своевременно.

Рабочий процесс над тестированием и исправлением ошибок может быть разбит на следующие четыре фазы (очень грубое разделение - у разных людей этот процесс может очень сильно отличаться):

**Начальное планирование > Разработка > Тестирование > Исправление ошибок**

Шаги 2-4 будут повторяться до тех пор, пока не будут реализованы все возможности. Мы рассмотрим различные элементы процесса тестирования более детально в следующих статьях, но пока давайте соберём то, что может происходить на каждом этапе.

### Начальное планирование

На этом этапе у вас, возможно, будет несколько встреч с владельцем/заказчиком сайта (это может быть ваш босс или кто-то из другой компании, для кого вы пишете сайт), чтобы точно определить, каким должен быть сайт - какой контент и функциональность должны быть на сайте, как сайт должен выглядеть и т.д. На этом этапе вы также хотите знать сколько времени у вас есть на разработку и цену работы. Не хочется углубляться в детали, но такое планирование оказывает большое влияние на кросс-браузерное тестирование.

Once you've got an idea of the required featureset, and what technologies you will likely build these features with, you should start exploring the target audience — what browsers, devices, etc. will the target audience for this site be using? The client might already have data about this from previous research they've done, e.g. from other web sites they own, or from previous versions of the web site you are now working on. If not, you will be able to get a good idea by looking at other sources, such as usage stats for competitors, or countries the site will be serving. You can also use a bit of intuition.

So for example, you might be building an e-commerce site that serves customers in North America. The site should work entirely in the last few versions of the most popular desktop and mobile (iOS, Android, Windows phone) browsers — this should include Chrome (and Opera as it is based on the same rendering engine as Chrome), Firefox, IE/Edge, and Safari. It should also provide an acceptable experience on IE 8 and 9, and be accessible with WCAG AA compliance.

Now you know your target testing platforms, you should go back and review the required featureset and what technologies you are going to use. For example, if the e-commerce site owner wants a WebGL-powered 3D tour of each product built into the product pages, they will need to accept that this just won't work in IE versions before 11. You'd have to agree to provide a version of the site without this feature to users of older IE versions.

You should compile a list of the potential problem areas.

> **Примечание:** You can find browser support information for technologies by looking up the different features on MDN — the site you're on! You should also consult [caniuse.com](http://caniuse.com/), for some further useful details.

Once you've agreed on these details, you can go ahead and start developing the site.

### Development

Now on to the development of the site. You should split the different parts of the development into modules, for example you might split the different site areas up — home page, product page, shopping cart, payment workflow, etc. You might then further subdivide these — implement common site header and footer, implement product page detail view, implement persistent shopping cart widget, etc.

There are multiple general strategies to cross browser development, for example:

- Get all the functionality working as closely as possible in all target browsers. This may involve writing different code paths that reproduce functionality in different ways aimed at different browsers, or using a {{glossary("Polyfill")}} to mimic any missing support using JavaScript or other technologies, or using a library that allows you to write a single bit of code and then does different things in the background depending on what the browser supports.
- Accept that some things aren't going to work the same on all browsers, and provide different (acceptable) solutions in browsers that don't support the full functionality. Sometimes this is inevitable due to device constraints — a cinema widescreen isn't going to give the same visual experience as a 4" mobile screen, regardless of how you program your site.
- Accept that your site just isn't going to work in some older browsers, and move on. This is OK, provided your client/userbase is OK with it.

Normally your development will involve a combination of the above three approaches. The most important thing is that you test each small part before committing it — don't leave all the testing till the end!

### Testing/discovery

After each implementation phase, you will need to test the new functionality. To start with, you should make sure there are no general issues with your code that are stopping your feature from working:

1. Test it in a couple of stable browsers on your system, like Firefox, Safari, Chrome, or IE/Edge.
2. Do some low fi accessibility testing, such as trying to use your site with only the keyboard, or using your site via a screen reader to see if it is navigable.
3. Test on a mobile platform, such as Android or iOS.

At this point, fix any problems you find with your new code.

Next, you should try expanding your list of test browsers to a full list of target audience browsers and start concentrating on weeding out cross browser issues (see the next article for more information on [determining your target browsers](/ru/docs/Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies#Gotta_test_%27em_all)). For example:

- Try to test the latest change on all the modern desktop browsers you can — including Firefox, Chrome, Opera, IE, Edge, and Safari on desktop (Mac, Windows, and Linux, ideally).
- Test it in common phone and tablet browsers (e.g. iOS Safari on iPhone/iPad, Chrome and Firefox on iPhone/iPad/Android),
- Also do tests in any other browsers you have included inside your target list.

The most low fi option is to just do all the testing you can by yourself (pulling in team mates to help out if you are working in a team). You should try to test it on real physical devices where possible.

If you haven't got the means to test all those different browser, operating system, and device combinations on physical hardware, you can also make use of emulators (emulate a device using software on your desktop computer) and virtual machines (software that allows you to emulate multiple operating system/software combinations on your desktop computer). This is a very popular choice, especially in some circumstances — for example, Windows doesn't let you have multiple versions of Windows installed simulataneously on the same machine, so using multiple virtual machines is often the only option here.

Another option is user groups — using a group of people outside your development team to test your site. This could be a group of friends or family, a group of other employees, a class at a local university, or a professional user testing setup, where people are paid to test out your site and provide results.

Finally, you can get smarter with your testing using auditing or automation tools; this is a sensible choice as your projects get bigger, as doing all this testing by hand can start to take a really long time. You can set up your own testing automation system ([Selenium](http://www.seleniumhq.org/) being the popular app of choice) that could for example load your site in a number of different browsers, and:

- see if a button click causes something to happen successfully (like for example, a map displaying), displaying the results once the tests are completed
- take a screenshot of each, allowing you to see if a layout is consistent across the different browsers.

You can also go further than this, if wished. There are commercial tools available such as [Sauce Labs](https://saucelabs.com/), [Browser Stack](https://www.browserstack.com/), [LambdaTest](https://www.lambdatest.com/), [TestingBot](https://testingbot.com), and [CrossBrowserTesting](https://crossbrowsertesting.com) that do this kind of thing for you, without you having to worry about the setup, if you wish to invest some money in your testing. It is also possible to set up an environment that automatically runs tests for you, and then only lets you check in your changes to the central code repository if the tests still pass.

#### Testing on prerelease browsers

It is often a good idea to test on prerelease versions of browsers; see the following links:

- [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/)
- [Edge Insider Preview](https://insider.windows.com/)
- [Safari Technology Preview](https://developer.apple.com/safari/technology-preview/)
- [Chrome Canary](https://www.google.com/chrome/browser/canary.html)
- [Opera Developer](http://www.opera.com/computer/beta)

This is especially prevalent if you are using very new technologies in your site, and you want to test against the latest implementations, or if you are coming across a bug in the latest release version of a browser, and you want to see if the browser's developers have fixed the bug in a newer version.

### Fixes/iteration

Once you've discovered a bug, you need to try to fix it.

The first thing to do is to narrow down where the bug occurs as much as possible. Get as much information as you can from the person reporting the bug — what platform(s), device(s), browser version(s), etc. Try it on similar configurations (e.g. the same browser version on different desktop platforms, or a few different versions of the same browser on the same platform) to see how widely the bug persists.

It might not be your fault — if a bug exists in a browser, then hopefully the vendor will rapidly fix it. It might have already been fixed — for example if a bug is present in Firefox release 49, but it is no longer there in Firefox Nightly (version 52), then they have fixed it. If it is not fixed, then you may want to file a bug (see [Reporting bugs](#reporting_bugs), below).

If it is your fault, you need to fix it! Finding out the cause of the bug involves the same strategy as any web development bug (again, see [Debugging HTML](/ru/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML), [Debugging CSS](/ru/docs/Learn/CSS/Introduction_to_CSS/Debugging_CSS), and [What went wrong? Troubleshooting JavaScript](/ru/docs/Learn/JavaScript/First_steps/What_went_wrong)). Once you've discovered what is causing your bug, you need to decide how to work around it in the particular browser it is causing problems in — you can't just change the problem code outright, as this may break the code in other browsers. The general approach is usually to fork the code in some way, for example use JavaScript feature detection code to detect situations in which a problem feature doesn't work, and run some different code in those cases that does work.

Once a fix has been made, you'll want to repeat your testing process to make sure your fix is working OK, and hasn't caused the site to break in other places or in other browsers.

## Reporting bugs

Just to reiterate on what was said above, if you discover bugs in browsers, you should report them:

- [Firefox Bugzilla](https://bugzilla.mozilla.org/)
- [EdgeHTML issue tracker](https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/)
- [Safari](https://bugs.webkit.org/)
- [Chrome](https://bugs.chromium.org/p/chromium/issues/list)
- [Opera](https://bugs.opera.com/wizard/desktop)

## Summary

This article should have given you a high-level understanding of the most important concepts you need to know about cross browser testing. Armed with this knowledge, you are now ready to move on and start learning about Cross browser testing strategies.

{{NextMenu("Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies", "Learn/Tools_and_testing/Cross_browser_testing")}}

## In this module

- [Introduction to cross browser testing](/ru/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction)
- [Strategies for carrying out testing](/ru/docs/Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies)
- [Handling common HTML and CSS problems](/ru/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS)
- [Handling common JavaScript problems](/ru/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript)
- [Handling common accessibility problems](/ru/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility)
- [Implementing feature detection](/ru/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection)
- [Introduction to automated testing](/ru/docs/Learn/Tools_and_testing/Cross_browser_testing/Automated_testing)
- [Setting up your own test automation environment](/ru/docs/Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment)
