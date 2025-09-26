---
title: Firefox 31 for developers
slug: Mozilla/Firefox/Releases/31
---

Хотите помочь документировать Firefox 31? См. [список багов, требующих описания](http://beta.elchi3.de/doctracker/#list=fx&version=31.0), и беритесь за дело!

## Изменения для Web-разработчиков

### Инструменты разработчика

Важные моменты:

- [«пипетка» для выбора цветов на web-страницах](https://firefox-source-docs.mozilla.org/devtools-user/eyedropper/index.html)
- [полное отслеживание стека для консольных сообщений об ошибках](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#error_messages)
- [редактируемое Box Model View](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#box_model_view)
- [%c-форматирование для стилизации консольных сообщений](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#styling_messages)
- [команда «copy as cURL» в Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#copy_as_curl)
- [клавишные привязки Sublime Text в редакторе источника](https://firefox-source-docs.mozilla.org/devtools-user/keyboard_shortcuts/index.html#source_editor)
- [возможность сделать логи Network Monitor персистентными](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#network_request_list)
- [JavaScript-предупреждения включены по умолчанию в Web-консоли](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#javascript_errors_and_warnings)
- [Alt+клик раскрывает всех потомков узла](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#html_pane_2)

[Все баги инструментов разработчика, исправленные с Firefox 30 по Firefox 31](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2014-04-28&chfield=resolution&query_format=advanced&chfieldfrom=2014-03-17&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20App%20Manager&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Profiler&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&product=Firefox&list_id=10022921).

### CSS

- Префикс «var-» у CSS-переменных изменён на «--» ([Firefox bug 985838](https://bugzil.la/985838)).
- Исправлен нежелательный пробел для кратного 10 000 в корейских стилях счётчика ([Firefox bug 985186](https://bugzil.la/985186)).
- Исправлены переходы CSS-прозрачности при псевдоклассе родителя :before и значении auto свойства overflow ([Firefox bug 990340](https://bugzil.la/990340)).
- Псевдоэлемент ::-moz-math-stretchy удалён ([Firefox bug 1000879](https://bugzil.la/1000879)).

### HTML

- Реализован элемент \<track> ([Firefox bug 629350](https://bugzil.la/629350)).

### JavaScript

Реализована новая функциональность ECMAScript 6:

- Новый метод экземпляров `Array`: {{jsxref("Array.prototype.fill()")}} ([Firefox bug 911147](https://bugzil.la/911147))
- Новая `Math`-функция: {{jsxref("Math.clz32()")}} ([Firefox bug 925123](https://bugzil.la/925123))
- Новый метод экземпляров `String`: {{jsxref("String.prototype.normalize()")}} доступен в Firefox Desktop ([Firefox bug 918987](https://bugzil.la/918987)).
- Новый метод `Object` {{jsxref("Object.setPrototypeOf()")}}.
- Новые константы `Number`: {{jsxref("Number.MAX_SAFE_INTEGER")}} and {{jsxref("Number.MIN_SAFE_INTEGER")}}.

### Интерфейсы/API/DOM

- Реализован конструктор для `KeyboardEvent` ([Firefox bug 930893](https://bugzil.la/930893)).
- Реализован атрибут `KeyboardEvent.isComposing` ([Firefox bug 993234](https://bugzil.la/993234)).
- Реализован интерфейс `InputEvent` ([Firefox bug 993253](https://bugzil.la/993253)).
- Реализован атрибут `InputEvent.isComposing` ([Firefox bug 993253](https://bugzil.la/993253)).
- Реализован {{domxref("CSS.escape", "CSS.escape()")}} ([Firefox bug 955860](https://bugzil.la/955860)).
- Событие `mousemove` теперь отменяемое, как в других браузерах ([Firefox bug 704423](https://bugzil.la/704423)). Вызов `preventDefault()` только выставляет атрибут `defaultPrevented` в `true`. То есть остальное поведение не изменилось. Например, это не может предотвратить выставление состояния `:hover`.

### MathML

- Частичная реализация [OpenType MATH table](http://mpeg.chiariglione.org/standards/mpeg-4/open-font-format/text-isoiec-cd-14496-22-3rd-edition), раздел 6.3.6 ([Firefox bug 407059](https://bugzil.la/407059)). Подробнее см. [шрифты для Mozilla-всякого движка MathML](/ru/docs/Web/MathML/Fonts) и [MathML torture test](/ru/docs/Mozilla/MathML_Project/MathML_Torture_Test) .
- Псевдоэлемент `::-moz-math-stretchy` удалён ([Firefox bug 1000879](https://bugzil.la/1000879)).
- Если они доступны, юникодовские математические буквенно-цифровые символы используются для полужирных, курсивных и полужирно-курсивных mathvariants ([Firefox bug 930504](https://bugzil.la/930504)).

### SVG

_Нет изменений._

### Аудио/видео

_Нет изменений._

## Безопасность

- [Привилегированный код теперь получает Xray vision для экземпляров `Date`](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/xray_vision.html#xrays_for_javascript_objects).

## Изменения для аддонов и разработчиков Mozilla

- Атрибут «`align`» для `urlbar-wrapper` (ранее для `urlbar-container`), который был установлен в «`center`» со [времён незапамятных](http://bonsai.mozilla.org/cvsview2.cgi?diff_mode=context&whitespace_mode=show&root=/cvsroot&subdir=mozilla/browser/base/content&command=DIFF_FRAMESET&file=browser.xul&rev2=1.10&rev1=1.9), удалён. Это, как известно, влияет на сторонние темы. Вам следует внимательно посмотреть, какое исправление будет правильным для вашей темы, но для поддержания эквивалентного эффекта вы можете добавить в свою тему следующее CSS-правило:
  `#urlbar-wrapper { -moz-box-align: center; }`
- [`nsIDOMWindowUtils.sendQueryContentEvent()`](</ru/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDOMWindowUtils#sendQueryContentEvent()>) и [`nsIDOMWindowUtils.sendSelectionSetEvent()`](/ru/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDOMWindowUtils#sendSelectionSetEvent%28%29) имеют `aAdditionalFlags` как необязательный аргумент. Если вы вызываете `nsIDOMWindowUtils.sendSelectionSetEvent()` со значением `true` для `aReverse`, поведение может быть сломано этим изменением. См. подробности о `aAdditionalFlags` в [объяснении каждого флага](/ru/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDOMWindowUtils#Constants) (`QUERY_CONTENT_FLAG_*` and `SELECTION_SET_FLAG_*`).

### Add-on SDK

Важные моменты:

- [Add-on Debugger](/ru/docs/Mozilla/Add-ons/Add-on_Debugger)
- Добавлена возможность преобразования [между высокоуровневыми объектами BrowserWindow и окнами DOM](/ru/docs/Mozilla/Add-ons/SDK/High-Level_APIs/windows#converting_to_dom_windows) и [между высокоуровневыми объектами Tab и вкладками XUL](/ru/docs/Mozilla/Add-ons/SDK/High-Level_APIs/tabs#converting_to_xul_tabs).
- Обновлена тема по умолчанию, используемая для панелей в Mac OS X.
- Добавлены опции панели [contentStyle и contentStyleFile](/ru/docs/Mozilla/Add-ons/SDK/High-Level_APIs/panel#styling_panel_content).

[GitHub-коммиты, выполненные с Firefox 30 по Firefox 31](https://github.com/mozilla/addon-sdk/compare/firefox30...firefox31). Это не включает никакие uplifts, сделанные после того, как этот релиз вступил в фазу Aurora.

[Исправления багов с Firefox 30 по Firefox 31](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&chfieldto=2014-04-29&chfield=resolution&query_format=advanced&chfieldfrom=2014-03-18&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&bug_status=CLOSED&product=Add-on%20SDK&list_id=10493962). Это не включает никакие uplifts, сделанные после того, как этот релиз вступил в фазу Aurora.

## Смотрите также

- [Совместимость сайтов для Firefox 31](/ru/docs/Mozilla/Firefox/Releases/31/Site_Compatibility)

### Старшие версии

{{Firefox_for_developers('30')}}
