---
title: Firefox 32 для разработчиков
slug: Mozilla/Firefox/Releases/32
---

{{FirefoxSidebar}}

Хотите помочь с документированием Firefox 32? Взгляните на [список ошибок, о которых нужно написать](http://beta.elchi3.de/doctracker/#list=fx&version=32.0) и приступайте!

## Изменения для Web Разработчиков

### Инструментарий разработчика

Основные изменения:

- [Редактор Web Audio](/ru/docs/Tools/Web_Audio_Editor)
- [Автоподстановка и подсказки в Блокноте](/ru/docs/Tools/Scratchpad#Code_completion_and_inline_documentation)
- [Стили User agent в представлении Inspector Rules](/ru/docs/Tools/Page_Inspector#Rules_view)
- [Кнопка выбора элемента со страницы перемещена](/ru/docs/Tools/Page_Inspector#Firefox_32_onwards_2)
- [Добавлено отображение размеров узла в информационную панель Инспектора](/ru/docs/Tools/Page_Inspector#Firefox_32_onwards)
- [Добавлена кнопка снятия снимка всей страницы](/ru/docs/Tools/Tools_Toolbox#Extra_tools)
- Добавлены HiDPI изображения в инструменты
- Узлы, содержащие `display:none` в Инспекторе отображаются иначе

[Все ошибки исправленные между версиями Firefox 31 и Firefox 32](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2014-06-09&chfield=resolution&query_format=advanced&chfieldfrom=2014-04-28&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20App%20Manager&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Profiler&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&product=Firefox).

### CSS

- {{domxref("mix-blend-mode")}} включено по умолчанию ({{Bug(952643)}}).
- `position:sticky` включено по умолчанию в Release сборках (раньше было только в Nightly и Aurora) ({{Bug(916315)}}).
- реализовано box-decoration-break: Левая/правая часть box-shadow должна быть отрисована только на первом/последнем элементе inline контейнера ({{Bug(613659)}}).
- Реализация flex-grow/flex-shrink для преобразования между нулевыми и не нулевыми значениями ({{Bug(996945)}}).

### HTML

- Экспериментальная реализация свойства (включается параметром) {{HTMLElement("img")}} [`srcset`](/ru/docs/Web/HTML/Element/img#srcset). Чтобы включить его, установите значение `dom.image.srcset.enable` в `true` ({{Bug(870021)}}).

### JavaScript

- Реализованы новые встроенные методы ECMAScript 6:

  - {{jsxref("Array.from()")}} ({{bug(904723)}})
  - {{jsxref("Array.prototype.copyWithin()")}}
  - {{jsxref("Number.isSafeInteger()")}}

### Интерфейсы/APIs/DOM

- Реализованы свойство {{domxref("NavigatorLanguage.languages", "navigator.languages")}} и событие {{event("languagechange")}} ({{Bug(889335)}}).
- В методы {{domxref("KeyboardEvent.getModifierState")}}() и {{domxref("MouseEvent.getModifierState")}}() добавлена поддержка виртуального модификатора `Accel` ({{Bug(1009388)}}).
- Добавлена экспериментальная реализация свойства {{domxref("KeyboardEvent.code")}}: она отключена в Release сборках ({{Bug(865649)}}).

### MathML

- Добавлена поддержка для {{MathMLElement("menclose")}} notation `phasorangle`.

### SVG

_Без изменений._

### Audio/Video

\__Без изменений_.\_

## Безопасность

- [Привилегированный код теперь обладает рентгеновским зрением относительно экземпляров `Object` и `Array` в](/ru/docs/Xray_vision#Xray_semantics_for_Object_and_Array) [JavaScript](/ru/docs/Xray_vision#Xray_semantics_for_Object_and_Array).

## Изменения для разработчиков дополнений и разработчиков Mozilla

### Add-on SDK

#### Основные изменения

- Добавлено свойство [`exclude`](/en-US/Add-ons/SDK/High-Level_APIs/page-mod#PageMod%28options%29) в `PageMod`.
- Добавлено свойство [`anonymous`](/en-US/Add-ons/SDK/High-Level_APIs/request#Request%28options%29) в `Request`.
- [Add-on Debugger](/en-US/Add-ons/Add-on_Debugger) теперь содержит Консоль и Блокнот.

#### Подробнее

[Коммиты GitHub между версиями Firefox 31 и Firefox 32](https://github.com/mozilla/addon-sdk/compare/firefox31...firefox32). Не будут включать никаких поднятий, сделанных после того, как этот выпуск войдёт в Aurora.

[Ошибки исправленные Firefox 31 и Firefox 32](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&chfieldto=2014-06-09&chfield=resolution&query_format=advanced&chfieldfrom=2014-04-28&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&bug_status=CLOSED&product=Add-on%20SDK&list_id=10493962). Сюда не включены изменения, сделанные после того, как этот релиз был перемещён в стадию Aurora.

## Смотрите также

- [Совместимость сайтов с Firefox 32](/ru/docs/Mozilla/Firefox/Releases/32/Site_Compatibility)

### Предыдущие версии

{{Firefox_for_developers('31')}}
