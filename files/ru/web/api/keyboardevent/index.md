---
title: KeyboardEvent
slug: Web/API/KeyboardEvent
---

{{APIRef("UI Events")}}

Объекты **`KeyboardEvent`** описывают работу пользователя с клавиатурой. Каждое событие описывает клавишу; тип события (`keydown`, `keypress` или `keyup`) определяет произведённый тип действия.

> **Примечание:** `KeyboardEvent` сообщит только о том, что на клавише произошло событие. Когда вам нужно обрабатывать ввод текста, то вместо него используйте "[`HTML5 input"`](/ru/docs/DOM/DOM_event_reference/input)-событие. Например, если пользователь вводит текст рукописным способом, предположим с планшета, то события клавиш могут не возникать.

## Конструктор

- {{domxref("KeyboardEvent.KeyboardEvent", "KeyboardEvent()")}}
  - : Создаёт объект `KeyboardEvent`.

## Методы

_Этот интерфейс также наследует методы от своих родителей: {{domxref("UIEvent")}} и {{domxref("Event")}}._

- {{domxref("KeyboardEvent.getModifierState()")}}

  - : Возвращает {{jsxref("Boolean")}}, показывающий, что использовалась клавиша-модификатор, такая как&#x20;

    <kbd>Alt</kbd>

    ,&#x20;

    <kbd>Shift</kbd>

    ,&#x20;

    <kbd>Ctrl</kbd>

    &#x20;или&#x20;

    <kbd>Meta</kbd>

    , которая была нажата, когда создалось событие.

- {{domxref("KeyboardEvent.initKeyEvent()")}}{{deprecated_inline}}
  - : Инициализирует объект `KeyboardEvent`. Этот метод реализован только в движке Gecko (остальные использовали метод {{domxref("KeyboardEvent.initKeyboardEvent()")}}), и он не должен в дальнейшем использоваться. Новый стандартный способ - это использование конструктора {{domxref("KeyboardEvent.KeyboardEvent", "KeyboardEvent()")}}.
- {{domxref("KeyboardEvent.initKeyboardEvent()")}}{{deprecated_inline}}
  - : Инициализирует объект `KeyboardEvent`. Этот метод никогда не был реализован в движке Gecko (вместо него использовался {{domxref("KeyboardEvent.initKeyEvent()")}}), и он не должен в дальнейшем использоваться. Новый стандартный способ - это использование конструктора {{domxref("KeyboardEvent.KeyboardEvent", "KeyboardEvent()")}}.

## Свойства

_Этот интерфейс также наследует свойства от своих родителей: {{domxref("UIEvent")}} and {{domxref("Event")}}._

- {{domxref("KeyboardEvent.altKey")}} {{Readonlyinline}}

  - : Возвращает {{jsxref("Boolean")}}, которое `true`, если клавиша&#x20;

    <kbd>Alt</kbd>

    &#x20;(&#x20;

    <kbd>Option</kbd>

    &#x20;или&#x20;

    <kbd>⌥</kbd>

    &#x20;в OS X) была активна, когда возникло событие.

- {{domxref("KeyboardEvent.char")}} {{Non-standard_inline}}{{Deprecated_inline}}{{Readonlyinline}}

  - : Возвращает {{domxref("DOMString")}}, представляющий символьное значение клавиши. Если клавиша соответствует печатному символу, то это значение будет непустой Unicode-строкой, содержащей этот символ. Если клавиша не имеет печатного представления, то значение будет пустой строкой.

- {{domxref("KeyboardEvent.charCode")}} {{Deprecated_inline}}{{Readonlyinline}}

  - : Возвращает {{jsxref("Number")}}, представляющий Unicode-номер клавиши; этот атрибут использовался только с событием `keypress`. Для клавиш, чей `char`-атрибут содержит несколько символов, то значением этого атрибута будет Unicode-значение первого символа. В Firefox 26 этот атрибут возвращал коды для печатных символов.

- {{domxref("KeyboardEvent.code")}} {{Readonlyinline}}
  - : Возвращает {{domxref("DOMString")}} с кодом клавиши, представленного события.
- {{domxref("KeyboardEvent.ctrlKey")}} {{Readonlyinline}}

  - : Возвращает {{jsxref("Boolean")}}, которое `true`, если клавиша&#x20;

    <kbd>Ctrl</kbd>

    &#x20;была активна, когда возникло событие.

- {{domxref("KeyboardEvent.isComposing")}} {{Readonlyinline}}
  - : Возвращает {{jsxref("Boolean")}}, которое `true`, если событие возникло между "после-`compositionstart`" и "до-`compositionend`".
- {{domxref("KeyboardEvent.key")}} {{Readonlyinline}}
  - : Возвращает {{domxref("DOMString")}}, представляющее значение клавиши, на которой возникло событие.
- {{domxref("KeyboardEvent.keyCode")}} {{deprecated_inline}} {{Readonlyinline}}

  - : Возвращает {{jsxref("Number")}}, представляющее системный и зависящий от конкретной реализации числовой код, идентифицирующий немодифицированное значение нажатой клавиши.

- {{domxref("KeyboardEvent.keyIdentifier")}} {{Non-standard_inline}}{{deprecated_inline}}{{Readonlyinline}}
  - : Это свойство нестандартное, и его использование не рекомендуется в пользу {{domxref("KeyboardEvent.key")}}. Это часть устаревшего "DOM Level 3 Events".
- {{domxref("KeyboardEvent.keyLocation")}} {{Non-standard_inline}}{{deprecated_inline}}{{Readonlyinline}}
  - : Это нестандартный нерекомендуемый синоним для {{domxref("KeyboardEvent.location")}}. Это часть устаревшего "DOM Level 3 Events".
- {{domxref("KeyboardEvent.locale")}} {{Readonlyinline}}

  - : Возвращает {{domxref("DOMString")}}, представляет строку-локаль, которая показывает текущую конфигурацию локали клавиатуры. Это может быть пустая строка, если браузер или устройство не имеют понятия о локали клавиатуры.

- {{domxref("KeyboardEvent.location")}} {{Readonlyinline}}
  - : Возвращает {{jsxref("Number")}}, представляющее расположение клавиши на клавиатуре или другом устройстве ввода.
- {{domxref("KeyboardEvent.metaKey")}} {{Readonlyinline}}

  - : Возвращает {{jsxref("Boolean")}}, которое `true`, если клавиша&#x20;

    <kbd>Meta</kbd>

    &#x20;(на клавиатуре Mac - клавиша&#x20;

    <kbd>⌘ Command</kbd>

    ; на Windows-клавиатуре - клавиша "Windows"&#x20;

    <kbd>⊞</kbd>

    ) была активна, когда возникло событие.

- {{domxref("KeyboardEvent.repeat")}} {{Readonlyinline}}
  - : Возвращает {{jsxref("Boolean")}}, которое `true`, если клавиша была нажата до тех пор, пока её ввод не начал автоматически повторяться.
- {{domxref("KeyboardEvent.shiftKey")}} {{Readonlyinline}}

  - : Возвращает {{jsxref("Boolean")}}, которое `true`, если клавиша&#x20;

    <kbd>Shift</kbd>

    &#x20;была активна, когда возникло событие.

- {{domxref("KeyboardEvent.which")}} {{deprecated_inline}} {{Readonlyinline}}

  - : Возвращает {{jsxref("Number")}}, представляющее зависящее от конкретной реализации значение системного кода нажатой клавиши, который представляет собой немодифицируемое значение; это обычно то же, что свойство `keyCode`.

## Примечания

Особенности событий `keydown`, `keypress` и `keyup`. Для большинства клавиш Gecko обрабатывает последовательность событий так:

1. Когда клавиша сначала нажата, то отправляется событие `keydown`.
2. Если клавиша не является [модификатором](#getModifierState), то отправляется событие `keypress`.
3. Когда пользователь отпускает клавишу, то отправляется событие `keyup`.

### Особые случаи

Некоторые клавиши переключают подсветку индикаторов, такие как <kbd>Caps Lock</kbd>, <kbd>Num Lock</kbd> и <kbd>Scroll Lock</kbd>. На Windows и Linux эти клавиши создают только лишь события `keydown` и `keyup`.

> [!NOTE]
> В Linux Firefox 12 и более ранних также обрабатывается событие `keypress`.

Но в связи с ограничениями Mac OS X модель событий клавиши <kbd>Caps Lock</kbd> включает в себя только `keydown`. События <kbd>Num Lock</kbd> поддерживались на старых ноутбуках (2007 года и старше), но затем Mac OS X их перестала поддерживать, даже на внешних клавиатурах. На совсем старых MacBooks клавиша <kbd>Num Lock</kbd> вообще не генерирует никаких событий. Движок Gecko не поддерживает клавишу <kbd>Scroll Lock</kbd>, если это внешняя клавиатура с клавишей <kbd>F14</kbd>. В некоторых старых версиях Firefox эта клавиша генерирует событие `keypress`; это являлось нестабильным поведением и описано в [Firefox bug 602812](https://bugzil.la/602812).

### Обработка автоповтора нажатой клавиши

Когда клавиша нажата и удерживается, то начинается автоповтор. Результатом этого будет последовательность событий аналогичная следующей:

1. `keydown`
2. `keypress`
3. `keydown`
4. `keypress`
5. <<повтор до тех пор, пока пользователь не отпустит клавишу>>
6. `keyup`

Это то, что должно произойти в соответствии со спецификацией DOM Level 3. Однако, есть несколько предостережений относительно этого, описанных ниже.

#### Автоповтор на некоторых GTK-средах, таких как Ubuntu 9.4

В некоторых GTK-средах автоповтор обрабатывается автоматически нативными функциями как событие key-up, и у Gecko нет способа отличить серию одиночных нажатий от автоповтора. На таких платформах автоповтор генерирует следующую последовательность событий:

1. `keydown`
2. `keypress`
3. `keyup`
4. `keydown`
5. `keypress`
6. `keyup`
7. <<повтор, пока пользователь не отпустит клавишу>>
8. `keyup`

В этих средах, к сожалению, нет возможности сказать веб-контенту, произошёл автоповтор или клавиша была нажата несколько раз.

#### Обработка автоповтора на системах до Gecko 5.0

До Gecko 5.0 обработка событий клавиатуры была различна на разных платформах.

- Windows
  - : Поведение автоповтора такое же как в Gecko 4.0 и более поздних.
- Mac
  - : После первого события `keydown` только отправляются события `keypress` до тех пор, пока не произойдёт событие `keyup`; внутриинтервальные события `keydown` не отправляются.
- Linux
  - : Поведение событий зависит от конкретной платформы. Они могут иметь как Windows-тип и Mac-тип, так и свои собственные модели поведения.

## Пример

```html
<!doctype html>
<html>
  <head>
    <script>
      "use strict";

      document.addEventListener(
        "keydown",
        (event) => {
          const keyName = event.key;

          if (keyName === "Control") {
            // not alert when only Control key is pressed.
            return;
          }

          if (event.ctrlKey) {
            // Хотя event.key это не 'Control' (например, нажата клавиша 'a'),
            // то всё же event.ctrlKey может быть true, если ударживается клавиша Ctrl.
            alert(`Combination of ctrlKey + ${keyName}`);
          } else {
            alert(`Key pressed ${keyName}`);
          }
        },
        false,
      );

      document.addEventListener(
        "keyup",
        (event) => {
          const keyName = event.key;

          // Как только пользователь отпустит клавишу Ctrl, то она больше не будет активной.
          // Поэтому event.ctrlKey = false.
          if (keyName === "Control") {
            alert("Control key was released");
          }
        },
        false,
      );
    </script>
  </head>

  <body></body>
</html>
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("KeyboardEvent.code")}}.
- {{domxref("KeyboardEvent.key")}}.
- {{domxref("KeyboardEvent.getModifierState")}}
