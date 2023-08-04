---
title: План поддержки плагинов в Firefox
slug: Glossary/Plugin
---

Плагины — проблема безопасности и производительности для пользователей Firefox. NPAPI плагины являются устаревшей технологией, и Mozilla движется к Вебу, в котором они не нужны. Последний оставшийся NPAPI плагин — Adobe Flash, который [выпустил](http://blogs.adobe.com/conversations/2017/07/adobe-flash-update.html) план по окончанию срока поддержки. Для поддержки воздержания от использования Flash, Firefox, вместе с другими браузерами, работает над тем, чтобы постепенно и аккуратно избавиться от использования и зависимости от Flash. Ниже представлен план, рассказывающий о том, что будет происходить с поддержкой плагинов в Firefox.

### План

- Июнь 2016
  - : Начиная с Firefox 47 в Июне 2016, все плагины, отличные от Adobe Flash, теперь [активируются только по клику](/ru/docs/Plugins/Flash_Activation:_Browser_Comparison). Пользователи сами выбирают, каким сайта разрешено активировать каждый плагин. К тому же, в 64-битной версии Firefox для Windows поддерживается только Flash плагин.
- Март 2017
  - : Начиная с Firefox 52 в Марте 2017, плагины, отличные от Adobe Flash, больше не поддерживаются в Firefox. Версия Firefox [Extended Support Release 52](https://www.mozilla.org/en-US/firefox/organizations/faq/) продолжит поддерживать все плагины, включая Flash, до начала 2018.
- Август 2017

  - : Начиная с Firefox 55 в Августе 2017, пользователи смогут [выбрать](/ru/docs/Plugins/Flash_Activation:_Browser_Comparison), каким сайта разрешено активировать Flash плагин. У пользователей появится надстройка, разрешающая запуск Flash, для каждого сайта отдельно. _Это изменение будет вводится постепенно, начиная с Августа и Сентября 2017._

    В целях повышения безопасности и улучшения производительности, Mozilla будет вести [список сайтов](/ru/docs/Plugins/Blocking_By_Domain), которые не могу использовать никакие плагины.

- Сентябрь 2017
  - : Начиная с Firefox 56 в Сентябре 2017, в Firefox для Android будет удалена поддержка всех плагинов ({{bug(1381916)}}).
- 2019
  - : В Сентябре 2019, в Firefox 69 будет удалена надстройка во Flash под названием "Всегда включён", теперь мы будет всегда спрашивать ваше разрешение, прежде чем запустить плагин на сайте.
- 2020
  - : В начале 2020, поддержка Flash будет полностью удалена из обычной версии Firefox. Firefox Extended Support Release (ESR) будет поддерживать Flash до конца 2020.
- 2021
  - : Когда Adobe прекратит выпускать обновления безопасности для Flash, в конце 2020, Firefox больше не будет поддерживать этот плагин.

### Смотрите также

#### Mozilla Firefox

- Октябрь 2015 - [NPAPI Плагины в Firefox](https://blog.mozilla.org/futurereleases/2015/10/08/npapi-plugins-in-firefox/)
- Июль 2016 - [Уменьшение использования Adobe Flash в Firefox](https://blog.mozilla.org/futurereleases/2016/07/20/reducing-adobe-flash-usage-in-firefox/)
- Июль 2017 - [План Firefox по окончательному отказу от Flash](https://blog.mozilla.org/futurereleases/2017/07/25/firefox-roadmap-flash-end-life/)

#### Adobe Flash

- Ноябрь 2015 - [Flash, HTML5 и Открытые Веб Стандарты](https://blogs.adobe.com/conversations/2015/11/flash-html5-and-open-web-standards.html)
- Июль 2017 - [Flash & будущее интерактивного контента](http://blogs.adobe.com/conversations/2017/07/adobe-flash-update.html)

#### Google Chrome

- [План действий Flash](https://sites.google.com/a/chromium.org/dev/flash-roadmap)
- Сентябрь 2013 - [Скажем прощай нашему старому другу NPAPI](https://blog.chromium.org/2013/09/saying-goodbye-to-our-old-friend-npapi.html)
- Май 2014 - [Отказ от обновлений NPAPI](https://blog.chromium.org/2014/05/update-on-npapi-deprecation.html)
- Ноябрь 2014 - [Финальный отсчёт по отказу от NPAPI](https://blog.chromium.org/2014/11/the-final-countdown-for-npapi.html)
- Август 2016 - [Flash и Chrome](https://blog.google/products/chrome/flash-and-chrome/)
- Декабрь 2016 - [План развёртывания HTML5 по умолчанию](https://blog.chromium.org/2016/12/roll-out-plan-for-html5-by-default.html)
- Июль 2017 - [Скажем прощай Flash в Chrome](https://www.blog.google/products/chrome/saying-goodbye-flash-chrome/)

#### Microsoft Edge и Internet Explorer

- Апрель 2016 - [Предоставление пользователям возможности контроля над Flash](https://blogs.windows.com/msedgedev/2016/04/07/putting-users-in-control-of-flash/)
- Декабрь 2016 - [Extending User Control of Flash with Click-to-Run](https://blogs.windows.com/msedgedev/2016/12/14/edge-flash-click-run/)
- Июль 2017 - [Flash на Windows Timeline](https://blogs.windows.com/msedgedev/2017/07/25/flash-on-windows-timeline/)

#### Apple Safari

- Июнь 2016 - [Следующие шаги для устаревших плагинов](https://webkit.org/blog/6589/next-steps-for-legacy-plug-ins/)
- Июль 2017 - [Adobe анонсирует распространение Flash и дату конца поддержки](https://webkit.org/blog/7839/adobe-announces-flash-distribution-and-updates-to-end/)
