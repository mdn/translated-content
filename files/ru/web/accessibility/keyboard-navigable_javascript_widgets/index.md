---
title: Навигация с клавиатуры в JavaScript
slug: Web/Accessibility/Keyboard-navigable_JavaScript_widgets
---

Как сделать для JavaScript-виджетов на основе span или div возможность навигации с клавиатуры.

### Обзор

Веб-приложения часто используют JavaScript, чтобы имитировать работу различных элементов, перешедших в веб с десктопных приложений: динамические меню, закладки, нестандартные элементы форм. Все эти элементы можно назвать виджетами. В вёрстке виджеты обычно состоят из набора HTML-элементов {{HTMLElement("div")}} и {{HTMLElement("span")}}, которые по умолчанию не предоставляют возможности работать с ними, используя клавиатуру. В данной статье описывается техника, позволяющая сделать JS-виджеты управляемыми с клавиатуры.

### Использование tabindex

Атрибут `tabindex` был представлен в спецификации HTML 4. Он позволяет задать порядок, в котором элементы будут получать фокус при навигации с клавиатуры. Текущая реализация, описанная в HTML 5 draft specs, довольно сильно отличается от первоначальной. Все распространённые браузеры теперь придерживаются новой спецификации.

В данной таблице описано поведение элементов в зависимости от значения атрибута `tabindex`:

| Атрибут `tabindex`                    | Фокус при помощи мыши или программно через `element.focus()`                                               | Фокус при навигации с клавиатуры (Tab)                                                                                                                                                                                                                                                                                                                                           |
| ------------------------------------- | ---------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Отсутствует                           | Работает согласно правилам платформы для конкретного элемента (возможен для элементов форм, ссылок и т.п.) | Работает согласно правилам платформы для конкретного элемента                                                                                                                                                                                                                                                                                                                    |
| Менее нуля (`tabindex="-1"`)          | Возможен                                                                                                   | Невозможен. Разработчик должен использовать [`focus()`](/ru/DOM/Element.focus) при нажатии стрелочек на клавиатуре и других клавиш.                                                                                                                                                                                                                                              |
| Нуль (`tabindex="0"`)                 | Возможен                                                                                                   | Происходит поочерёдно, исходя из позиции элемента внутри документа                                                                                                                                                                                                                                                                                                               |
| Более нуля (например `tabindex="33"`) | Возможен                                                                                                   | Значение атрибута `tabindex` указывает очерёдность, в которой элемент получит фокус. Чем меньше значение атрибута, тем раньше элемент получит фокус. В любом случае, фокус придёт на такие элементы раньше, чем на элементы с `tabindex="0"` и элементы, которые способны получить фокус без атрибута `tabindex` (например, `tabindex="7"` получит фокус раньше `tabindex="11"`) |

#### Простые контролы

Чтобы сделать простой виджет доступным через клавишу Tab, задайте `tabindex="0"` на HTML-элементах {{HTMLElement("div")}} или {{HTMLElement("span")}}, из которых он состоит. Ниже представлен пример эмулирования чекбоксов. Вместо элементов input в примере используется {{HTMLElement("span")}}.

_Пример 1: Простой виджет, эмулирующий работу чекбосов путём смены изображений. Виджет использует tabindex, чтобы обеспечить доступ с клавиатуры._

```html
<!-- Без атрибута tabindex, элементы <span> не смогут принимать фокус с клавиатуры -->
<div>
  <span role="checkbox" aria-checked="true" tabindex="0">
    <img src="checked.gif" role="presentation" alt="" />
    Добавить декоративную корзину с фруктами
  </span>
</div>
<div>
  <span role="checkbox" aria-checked="true" tabindex="0">
    <img src="checked.gif" role="presentation" alt="" />
    Добавить поющую телеграмму
  </span>
</div>
<div>
  <span role="checkbox" aria-checked="false" tabindex="0">
    <img src="unchecked.gif" role="presentation" alt="" />
    С предоплатой
  </span>
</div>
```

#### Сгруппированные контролы

Безусловно есть необходимость создания более сложных виджетов. В качестве примеров можно привести меню, панели табов, различные динамические таблицы, представления для информации, имеющей древовидную структуру. Для таких контролов родительский элемент должен иметь атрибут `tabindex="0"`. В таком случае он сможет попасть в фокус с клавиатуры. Все дочерние элементы (пункты меню, отдельные табы, ячейки, строки) должны иметь `tabindex="-1"`, чтобы не попадать в фокус при нажатии tab. Пользователи должны иметь возможность путешествовать по дочерним элементам при помощи стрелочек на клавиатуре.

Ниже приведён пример, который демонстрирует использование этой техники для реализации вложенного меню. После того, как в фокус попадает основной элемент меню ({{HTMLElement("ul")}}), разработчик должен программно управлять фокусом, реагируя на нажатия клавиш со стрелочками. Для описания техники управления фокусом внутри виджета смотрите раздел «Управление фокусом внутри виджета» ниже в данной статье.

_Пример 2: Меню, использующее атрибут tabindex для осуществления доступа с клавиатуры_

```html
<ul id="mb1" tabindex="0">
  <li id="mb1_menu1" tabindex="-1">
    Шрифт
    <ul id="fontMenu" title="Шрифт" tabindex="-1">
      <li id="sans-serif" tabindex="-1">Sans-serif</li>
      <li id="serif" tabindex="-1">Serif</li>
      <li id="monospace" tabindex="-1">Monospace</li>
      <li id="fantasy" tabindex="-1">Fantasy</li>
    </ul>
  </li>
  <li id="mb1_menu2" tabindex="-1">
    Стиль
    <ul id="styleMenu" title="Стиль" tabindex="-1">
      <li id="italic" tabindex="-1">Наклонный</li>
      <li id="bold" tabindex="-1">Жирный</li>
      <li id="underline" tabindex="-1">Подчёркнутый</li>
    </ul>
  </li>
  <li id="mb1_menu3" tabindex="-1">
    Выравнивание
    <ul id="justificationMenu" title="Выравнивание" tabindex="-1">
      <li id="left" tabindex="-1">Слева</li>
      <li id="center" tabindex="-1">По центру</li>
      <li id="right" tabindex="-1">Справа</li>
      <li id="justify" tabindex="-1">По ширине</li>
    </ul>
  </li>
</ul>
```

#### Неактивные (disabled) контролы

Когда элемент управления становится неактивным, он должен не попадать в фокус при нажатии на tab, что обеспечивается выставлением у элемента атрибута `tabindex="-1"`. Обратите внимание, что неактивные элементы в пределах сгруппированного виджета (такие как, подпункты меню ) должны иметь возможность быть выбранными при помощи стрелочек на клавиатуре.

### Управление фокусом внутри виджета

Когда пользователь уходит с виджета, а потом возвращается обратно, фокус должен вернутся на определённый элемент, у которого был фокус раньше. Например, на конкретный элемент дерева или ячейку. Есть два варианта, которыми этого можно добиться:

1. Переходящий `tabindex`: программное перемещение фокуса
2. `aria-activedescendant`: управление «виртуальным» фокусом

#### Техника первая: Переходящий tabindex

Идея данной техники заключается в выставлении атрибута `tabindex` в нулевое значение для элемента, который последним находился в фокусе. При этом если пользователь уйдёт табом с виджета, а потом вернётся обратно, элемент восстановит фокус правильно. Заметьте, что выставляя `tabindex` в "0", необходимо выставлять `tabindex="-1"` для предыдущего выделенного элемента. Эта техника требует выставлять фокус элементам программно, реагируя на нажатие клавиш.

Для этого необходимо обрабатывать событие keydown для каждого дочернего элемента виджета. Когда пользователь нажимает на стрелочки на клавиатуре, чтобы переместиться на другой элемент следует:

1. программно применить фокус к другому элементу
2. изменить tabindex элемента в фокусе на 0
3. изменить tabindex предыдущего элемента на -1

По ссылке вы можете увидеть пример [WAI-ARIA tree view](https://files.paciellogroup.com/training/WWW2012/samples/Samples/aria/tree/index.html), использующий эту технику.

##### Советы

###### Используйте element.focus() чтобы задать фокус элементу

Не используйте `createEvent()`, `initEvent()` and `dispatchEvent()` чтобы задать фокус. Событие DOM focus должно использовать только для получения информации о том, что произошёл фокус на элемент, оно генерируется системой, когда какой-либо элемент попал в фокус. Оно не должно использовать для того, чтобы задать фокус. Вместо этого используйте `element.focus()`.

###### Используйте событие onfocus чтобы отслеживать фокус

При разработке не стоит рассчитывать, что фокус будет меняться только в следствие манипуляций пользователя с клавиатурой и мышью. Вспомогательные программы, такие как screen readers могут задавать фокус элементам. Отслеживайте события `onfocus` и `onblur`, вместо событий мыши и клавиатуры.

`onfocus` и `onblur могут быть использованы с любыми елементами.` Сейчас в стандартах не описано метода для получения элемента, находящегося в фокусе. Поэтому если вам потребуется отслеживать элемент с фокусом, его надо будет запоминать в переменную.

#### Техника вторая: aria-activedescendant

Эта техника позволяет объединить каждый отдельно взятый обработчик событий в контейнер графического элемента и использовать `aria-activedescendent` для слежения за "виртуальным" фокусом . (Для получения более подробной информации относительно ARIA обратите внимание на [обзор доступных веб-приложений и виджетов](/ru/docs/Web/Accessibility/An_overview_of_accessible_web_applications_and_widgets).)

The `aria-activedescendant` property identifies the ID of the descendent element that currently has the virtual focus. The event handler on the container must respond to key and mouse events by updating the value of `aria-activedescendant` and ensuring that the current item is styled appropriately (for example, with a border or background color).

##### Tips

###### scrollIntoView

Note that the use of this pattern requires the author to ensure that the current _focused_ widget is scrolled into view. You should be able to use the {{domxref("element.scrollIntoView()")}} function, but we recommend confirming this works for you in your target browsers using the [quirksmode test](https://www.quirksmode.org/dom/tests/scrollintoview.html).

###### Issues

- [quirksmode reports problems in Opera, and Konqueror](https://www.quirksmode.org/dom/w3c_cssom.html)
- [Firefox 3.0.1 introduced bug](https://bugzilla.mozilla.org/show_bug.cgi?id=450405)

### Рекомендации

#### Используйте onkeydown для отлова событий вместо onkeypress

В IE событие `keypress` срабатывает только для буквенно-цифровых клавиш. Используйте `onkeydown` вместо этого.

#### Убедитесь, что клавиатура и мышь производят одинаковое действие

Чтобы обеспечить независимый от устройства ввода механизм взаимодействия с пользователем, обработчики событий мыши и клавиатуры должны совместно использовать код там, где это необходимо. Например, код, который обновляет значение `tabindex` или стили, когда пользователь переключается между элементами c помощью стрелок, должен выполняться и обработчиками клика мыши, чтобы применить те же самые изменения.

#### Убедитесь, что можно использовать клавиатуру для активации элемента

Чтобы обеспечить использование клавиатуры для активации элемента, любые обработчики событий мыши должны быть также связаны с событиями клавиатуры. Например, чтобы клавиша Enter активировала элемент, если у вас есть `onclick="doSomething()"`, вам необходимо также связать `doSomething()` с событием нажатия клавиши: `onkeydown="return event.keyCode != 13 || doSomething();"`.

#### Не используйте :focus для стилизации фокусировки (если вы поддерживаете IE 7 и более ранние)

IE 7 и более ранние версии не поддерживают `:focus` псевдо-селектор; не используйте его для стилизации фокуса. Вместо этого, установите стили с помощью обработчика событий `onfocus`, например, добавив название CSS стиля атрибуту `class`.

#### Always draw the focus for tabindex="-1" items and elements that receive focus programatically

IE will not automatically draw the focus outline for items that programatically receive focus. Choose between changing the background color via something like `this.style.backgroundColor = "gray";` or add a dotted border via `this.style.border = "1px dotted invert"`. In the dotted border case you will need to make sure those elements have an invisible 1px border to start with, so that the element doesn't grow when the border style is applied (borders take up space, and IE doesn't implement CSS outlines).

#### Prevent used key events from performing browser functions

If your widget handles a key event, prevent the browser from also handling it (for example, scrolling in response to the arrow keys) by using your event handler's return code. If your event handler returns `false`, the event will not be propagated beyond your handler.

For example:

```html
<span tabindex="-1" onkeydown="return handleKeyDown();"></span>
```

If `handleKeyDown()` returns `false`, the event will be consumed, preventing the browser from performing any action based on the keystroke.

#### Don't rely on consistent behavior for key repeat, at this point

Unfortunately `onkeydown` may or may not repeat depending on what browser and OS you're running on.
