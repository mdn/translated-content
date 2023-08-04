---
title: Значения клавиш
slug: Web/API/UI_Events/Keyboard_event_key_values
---

В таблицах ниже перечислены стандартные значения различных категорий клавиш с объяснением того, для чего этот клавиша обычно используется. Соответствующие виртуальные коды клавиш для распространённых платформ включены там, где они доступны.

Узнайте, как использовать эти пары "ключ-значение" в JavaScript с помощью [KeyboardEvent.key](/docs/Web/API/KeyboardEvent/key)

[Special Values](#Special_values) | [Modifier Keys](#Modifier_keys) | [Whitespace Keys](#Whitespace_keys) | [Navigation Keys](#Navigation_keys) | [Editing Keys](#Editing_keys) | [UI Keys](#UI_keys) | [Device Keys](#Device_keys) | [IME and Composition Keys](#IME_and_composition_keys) | [Function Keys](#Function_keys) | [Phone Keys](#Phone_keys) | [Multimedia Keys](#Multimedia_keys) | [Audio Control Keys](#Audio_control_keys) | [TV Control Keys](#TV_control_keys) | [Media Controller Keys](#Media_controller_keys) | [Speech Recognition Keys](#Speech_recognition_keys) | [Document Keys](#Document_keys) | [Application Selector Keys](#Application_selector_keys) | [Browser Control Keys](#Browser_control_keys) | [Numeric Keypad Keys](#Numeric_keypad_keys)

## Специальные значения

Значения клавиш имеющих особое значение, кроме идентификации определённой клавиши или символа.

<table class="standard-table">
  <thead>
    <tr>
      <th rowspan="2" scope="col" style="text-align: left">
        Значение <code>KeyboardEvent.key</code>
      </th>
      <th rowspan="2" scope="col" style="text-align: left">Описание</th>
      <th colspan="4" scope="col" style="text-align: center">
        Виртуальный код клавиши
      </th>
    </tr>
    <tr>
      <th scope="col" style="text-align: left">Windows</th>
      <th scope="col" style="text-align: left">Mac</th>
      <th scope="col" style="text-align: left">Linux</th>
      <th scope="col" style="text-align: left">Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"Unidentified"</code></td>
      <td>
        <p>
          Пользовательский агент не смог сопоставить виртуальный клавиатурный
          код события с определённым значением клавиши.
        </p>
        <p>
          Это может произойти из-за аппаратных или программных ограничений или
          из-за ограничений платформы, на которой работает пользовательский
          агент.
        </p>
      </td>
      <td><em>разное</em></td>
      <td><em>разное</em></td>
      <td><em>разное</em></td>
      <td><em>разное</em></td>
    </tr>
  </tbody>
</table>

## Клавиши-модификаторы

Специальные клавиши-модификаторы, которые используются для генерации специальных символов или вызывают особые действия при использовании в сочетании с другими клавишами. Например: <kbd>Shift</kbd> и <kbd>Control</kbd> , или lock-клавиши, такие как <kbd>Caps Lock</kbd> и <kbd>NumLock</kbd>.

<table class="standard-table">
  <thead>
    <tr>
      <th rowspan="2" scope="col" style="text-align: left">
        Значение <code>KeyboardEvent.key</code>
      </th>
      <th rowspan="2" scope="col" style="text-align: left">Описание</th>
      <th colspan="4" scope="col" style="text-align: center">
        Виртуальный код клавиши
      </th>
    </tr>
    <tr>
      <th scope="col" style="text-align: left">Windows</th>
      <th scope="col" style="text-align: left">Mac</th>
      <th scope="col" style="text-align: left">Linux</th>
      <th scope="col" style="text-align: left">Android</th>
    </tr>
    <tr>
      <td><code>"Alt"</code> [5]</td>
      <td><kbd>Клавиша Alt</kbd> (Alternative) .</td>
      <td>
        <code>VK_MENU</code> (0x12)<br /><code>VK_LMENU</code> (0xA4)<br /><code
          >VK_RMENU</code
        >
        (0xA5)
      </td>
      <td>
        <code>kVK_Option</code> (0x3A)<br /><code>kVK_RightOption</code> (0x3D)
      </td>
      <td>
        <code>GDK_KEY_Alt_L</code> (0xFFE9)<br /><code>GDK_KEY_Alt_R</code>
        (0xFFEA)<br /><code>Qt::Key_Alt</code> (0x01000023)
      </td>
      <td>
        <code>KEYCODE_ALT_LEFT</code> (57)<br /><code>KEYCODE_ALT_RIGHT</code>
        (58)
      </td>
    </tr>
    <tr>
      <td><code>"AltGraph"</code> [5]</td>
      <td>
        Клавиша<kbd>AltGr</kbd> или <kbd>AltGraph</kbd> (Альтернативная
        графика). Enables the ISO Level 3 shift modifier (where
        <kbd>Shift</kbd> is the level 2 modifier).
      </td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Mode_switch</code> (0xFF7E)<br /><code
          >GDK_KEY_ISO_Level3_Shift</code
        >
        (0xFE03)<br /><code>GDK_KEY_ISO_Level3_Latch</code> (0xFE04)<br /><code
          >GDK_KEY_ISO_Level3_Lock</code
        >
        (0xFE05)<br /><code>GDK_KEY_ISO_Level5_Shift</code> (0xFE11)<br /><code
          >GDK_KEY_ISO_Level5_Latch</code
        >
        (0xFE12)<br /><code>GDK_KEY_ISO_Level5_Lock</code> (0xFE13)<br /><code
          >Qt::Key_AltGr</code
        >
        (0x01001103<br /><code>Qt::Key_Mode_switch</code> (0x0100117E)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"CapsLock"</code></td>
      <td>
        Клавиша <kbd>Caps Lock</kbd> . Включает и выключает блокировку заглавных
        букв для последующего ввода.
      </td>
      <td><code>VK_CAPITAL</code> (0x14)</td>
      <td><code>kVK_CapsLock</code> (0x39)</td>
      <td>
        <code>GDK_KEY_Caps_Lock</code> (0xFFE5)<br /><code
          >Qt::Key_CapsLock</code
        >
        (0x01000024)
      </td>
      <td><code>KEYCODE_CAPS_LOCK</code> (115)</td>
    </tr>
    <tr>
      <td><code>"Control"</code></td>
      <td>
        Клавиша <kbd>Control</kbd>, <kbd>Ctrl</kbd>, или <kbd>Ctl</kbd> .
        Позволяет вводить управляющие символы.
      </td>
      <td>
        <code>VK_CONTROL</code> (0x11)<br /><code>VK_LCONTROL</code>
        (0xA2)<br /><code>VK_RCONTROL</code> (0xA3)
      </td>
      <td>
        <code>kVK_Control</code> (0x3B)<br /><code>kVK_RightControl</code>
        (0x3E)
      </td>
      <td>
        <code>GDK_KEY_Control_L</code> (0xFFE3)<br /><code
          >GDK_KEY_Control_R</code
        >
        (0xFFE4)<br /><code>Qt::Key_Control</code> (0x01000021)
      </td>
      <td>
        <code>KEYCODE_CTRL_LEFT</code> (113)<br /><code
          >KEYCODE_CTRL_RIGHT</code
        >
        (114)
      </td>
    </tr>
    <tr>
      <td><code>"Fn"</code></td>
      <td>
        <kbd>Fn</kbd> (Function modifier) key. Используется для создания
        функциональной клавиши (<kbd>F1</kbd>–<kbd>F15</kbd>, например) символы
        на клавиатуре без выделенной области функциональных клавиш.Часто
        обрабатывается аппаратно, поэтому для этой клавиши не создаются события.
      </td>
      <td></td>
      <td><code>kVK_Function</code> (0x3F)</td>
      <td></td>
      <td><code>KEYCODE_FUNCTION</code> (119)</td>
    </tr>
    <tr>
      <td><code>"FnLock"</code></td>
      <td>
        Клавиша <kbd>FnLock</kbd> или <kbd>F-Lock</kbd> (Function Lock)
        .Переключает режим функциональных клавиш, описанный<code>"Fn"</code>
        вкл. и выкл. Часто обрабатывается аппаратно, поэтому для этой клавиши не
        создаются события.
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Hyper"</code> [4]</td>
      <td>Клавиша <kbd>Hyper</kbd> .</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Hyper_L</code> (0xFFED)<br /><code>GDK_KEY_Hyper_R</code>
        (0xFFEE)<br /><code>Qt::Key_Hyper_L</code> (0x01000056)<br /><code
          >Qt::Key_Hyper_R</code
        >
        (0x01000057)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Meta"</code> [1]</td>
      <td>
        Клавиша <kbd>Meta</kbd> . Позволяет вводить специальные команды. Это
        клавиши с лого <kbd>Windows</kbd> , или<kbd>Command</kbd> или
        <kbd>⌘</kbd> на клавиатуре Mac .
      </td>
      <td><code>VK_LWIN</code> (0x5B)<br /><code>VK_RWIN</code> (0x5C)</td>
      <td>
        <code>kVK_Command</code> (0x37)<br /><code>kVK_RightCommand</code>
        (0x36)
      </td>
      <td>
        <code>GDK_KEY_Meta_L</code> (0xFFE7)<br /><code>GDK_KEY_Meta_R</code>
        (0xFFE8)<br /><code>Qt::Key_Meta</code> (0x01000022)
      </td>
      <td>
        <code>KEYCODE_META_LEFT</code> (117)<br /><code
          >KEYCODE_META_RIGHT</code
        >
        (118)
      </td>
    </tr>
    <tr>
      <td><code>"NumLock"</code></td>
      <td>
        Клавиша <kbd>NumLock</kbd> (Number Lock). Переключает цифровую
        клавиатуру между вводом номера и другим режимом (часто стрелки
        направления).
      </td>
      <td><code>VK_NUMLOCK</code> (0x90)</td>
      <td></td>
      <td>
        <code>GDK_KEY_Num_Lock</code> (0xFF7F)<br /><code>Qt::Key_NumLock</code>
        (0x01000025)
      </td>
      <td><code>KEYCODE_NUM_LOCK</code> (143)</td>
    </tr>
    <tr>
      <td><code>"ScrollLock"</code> [2]</td>
      <td>
        Клавиша<kbd>Scroll Lock</kbd> Переключает между режимами прокрутки и
        перемещения курсора.
      </td>
      <td><code>VK_SCROLL</code> (0x91)</td>
      <td></td>
      <td>
        <code>GDK_KEY_Scroll_Lock</code> (0xFF14)<br /><code
          >Qt::Key_ScrollLock</code
        >
        (0x01000026)
      </td>
      <td><code>KEYCODE_SCROLL_LOCK</code> (116)</td>
    </tr>
    <tr>
      <td><code>"Shift"</code></td>
      <td>
        Клавиша <kbd>Shift</kbd>. Изменяет нажатия клавиш, чтобы разрешить ввод
        букв в верхнем (или другом) регистре, а также для поддержки ввода знаков
        препинания и других специальных символов.
      </td>
      <td>
        <code>VK_SHIFT</code> (0x10)<br /><code>VK_LSHIFT</code>
        (0xA0)<br /><code>VK_RSHIFT</code> (0xA1)
      </td>
      <td>
        <code>kVK_Shift</code> (0x38)<br /><code>kVK_RightShift</code> (0x3C)
      </td>
      <td>
        <code>GDK_KEY_Shift_L</code> (0xFFE1)<br /><code>GDK_KEY_Shift_R</code>
        (0xFFE2)<br /><code>Qt::Key_Shift</code> (0x01000020)
      </td>
      <td>
        <code>KEYCODE_SHIFT_LEFT</code> (59)<br /><code
          >KEYCODE_SHIFT_RIGHT</code
        >
        (60)
      </td>
    </tr>
    <tr>
      <td><code>"Super"</code> [4]</td>
      <td>Клавиша <kbd>Super</kbd>.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Super_L</code> (0xFFEB)<br /><code>GDK_KEY_Super_R</code>
        (0xFFEC)<br /><code>Qt::Key_Super_L</code> (0x01000053)<br /><code
          >Qt::Key_Super_R</code
        >
        (0x01000054)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Symbol"</code></td>
      <td>
        Клавиша-модификатор <kbd>Symbol</kbd> (есть на некоторых виртуальных
        клавиатурах).
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_SYM</code> (63) [3]</td>
    </tr>
    <tr>
      <td><code>"SymbolLock"</code></td>
      <td>Клавиша <kbd>Symbol Lock</kbd></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </thead>
</table>

\[1] В Internet Explorer (проверено на релизах 9 и 11), а также во всех версиях Firefox, клавиша <kbd>Windows</kbd> сообщается как `"OS"` а не `"Meta"`. Это будет изменено в Firefox в {{bug(1232918)}}. Пока это не будет исправлено, эти ключи возвращаются как `"OS"` в Firefox: `VK_LWIN` (0x5B) и `VK_RWIN` (0x5C) в Windows, и `GDK_KEY_Super_L (0xFFEB)`, `GDK_KEY_Super_R (0xFFEC)`, `GDK_KEY_Hyper_L (0xFFED)`, и `GDK_KEY_Hyper_R (0xFFEE)` в Linux.

\[2] Internet Explorer (проверено на релизах 9 и 11) сообщает `"Scroll"` вместо `"ScrollLock"` для клавиши <kbd>Scroll Lock</kbd>.

\[3] Firefox не поддерживает клавишу <kbd>Symbol</kbd> до версии Firefox 37.

\[4] Firefox генерирует значение ключа `"OS`" для клавиш <kbd>Super</kbd> и <kbd>Hyper</kbd> вместо `"Super"` и `"Hyper"`.

\[5] Chrome 67 и Firefox 63 теперь правильно интерпретируют правую клавишу <kbd>Alt</kbd> для раскладок клавиатуры, которые сопоставляют эту клавишу с <kbd>AltGr</kbd>. См. Дополнительные сведения об ошибке {{bug(900750)}} и [Chrome bug 25503](https://bugs.chromium.org/p/chromium/issues/detail?id=25503) для подробных деталей.

## Пробельные клавиши

<table class="standard-table">
  <thead>
    <tr>
      <th rowspan="2" scope="col" style="text-align: left">
        Значение <code>KeyboardEvent.key</code>
      </th>
      <th rowspan="2" scope="col" style="text-align: left">Описание</th>
      <th colspan="4" scope="col" style="text-align: center">
        Виртуальный код клавиши
      </th>
    </tr>
    <tr>
      <th scope="col" style="text-align: left">Windows</th>
      <th scope="col" style="text-align: left">Mac</th>
      <th scope="col" style="text-align: left">Linux</th>
      <th scope="col" style="text-align: left">Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"Enter"</code></td>
      <td>
        Клавиша <kbd>Enter</kbd> или<kbd>↵</kbd> (иногда помечается как
        <kbd>Return</kbd>).
      </td>
      <td><code>VK_RETURN</code> (0x0D)</td>
      <td>
        <code>kVK_Return</code> (0x24)<br /><code>kVK_ANSI_KeypadEnter</code>
        (0x4C)<br /><code>kVK_Powerbook_KeypadEnter</code> (0x34)
      </td>
      <td>
        <code><code>GDK_KEY_Return</code> (0xFF0D)</code><br /><code
          ><code>GDK_KEY_KP_Enter</code> (0xFF8D)</code
        ><br /><code><code>GDK_KEY_ISO_Enter</code> (0xFE34)</code><br /><code
          ><code>GDK_KEY_3270_Enter</code> (0xFD1E)</code
        ><br /><code>Qt::Key_Return</code> (0x01000004)<br /><code
          >Qt::Key_Enter</code
        >
        (0x01000005)
      </td>
      <td>
        <code>KEYCODE_ENTER</code> (66)<br /><code>KEYCODE_NUMPAD_ENTER</code>
        (160)<br /><code>KEYCODE_DPAD_CENTER</code> (23)
      </td>
    </tr>
    <tr>
      <td><code>"Tab"</code></td>
      <td>Горизонтальная табуляция, <kbd>Tab</kbd>.</td>
      <td><code>VK_TAB</code> (0x09)</td>
      <td><code>kVK_Tab</code> (0x30)</td>
      <td>
        <code><code>GDK_KEY_Tab</code> (0xFF09)</code><br /><code
          ><code>GDK_KEY_KP_Tab</code> (0xFF89)<br />GDK_KEY_ISO_Left_Tab</code
        >
        (0xFE20)<br /><code>Qt::Key_Tab</code> (0x01000001)
      </td>
      <td><code>KEYCODE_TAB</code> (61)</td>
    </tr>
    <tr>
      <td><code>" "</code> [1]</td>
      <td>Пробел, <kbd>Space Bar</kbd>.</td>
      <td><code>VK_SPACE</code> (0x20)</td>
      <td><code>kVK_Space</code> (0x31)</td>
      <td>
        <p>
          <code>GDK_KEY_space</code> (0x20)<br /><code>GDK_KEY_KP_Space</code>
          (0xFF80)<br /><code>Qt::Key_Space</code> (0x20)
        </p>
      </td>
      <td><code>KEYCODE_SPACE</code> (62)</td>
    </tr>
  </tbody>
</table>

\[1] Старые браузеры могут вернуть `"Spacebar"` вместо `" "` для клавиши <kbd>Space Bar</kbd> . Firefox делал это до версии 37, как в Internet Explorer 9, 10, и 11.

## Навигационные клавиши

<table class="standard-table">
  <thead>
    <tr>
      <th rowspan="2" scope="col" style="text-align: left">
        Значение <code>KeyboardEvent.key</code>
      </th>
      <th rowspan="2" scope="col" style="text-align: left">Описание</th>
      <th colspan="4" scope="col" style="text-align: center">
        Виртуальный код клавиши
      </th>
    </tr>
    <tr>
      <th scope="col" style="text-align: left">Windows</th>
      <th scope="col" style="text-align: left">Mac</th>
      <th scope="col" style="text-align: left">Linux</th>
      <th scope="col" style="text-align: left">Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"ArrowDown"</code> [1]</td>
      <td>Клавиша со стрелкой "вниз".</td>
      <td><code>VK_DOWN</code> (0x28)</td>
      <td><code>kVK_DownArrow</code> (0x7D)</td>
      <td>
        <code>GDK_KEY_Down</code> (0xFF54)<br /><code>GDK_KEY_KP_Down</code>
        (0xFF99)<br /><code>Qt::Key_Down</code> (0x01000015)
      </td>
      <td><code>KEYCODE_DPAD_DOWN</code> (20)</td>
    </tr>
    <tr>
      <td><code>"ArrowLeft"</code> [1]</td>
      <td>Клавиша со стрелкой "влево" .</td>
      <td><code>VK_LEFT</code> (0x25)</td>
      <td><code>kVK_LeftArrow</code> (0x7B)</td>
      <td>
        <code>GDK_KEY_Left</code> (0xFF51)<br /><code>GDK_KEY_KP_Left</code>
        (0xFF96)<br /><code>Qt::Key_Left</code> (0x01000012)
      </td>
      <td><code>KEYCODE_DPAD_LEFT</code> (21)</td>
    </tr>
    <tr>
      <td><code>"ArrowRight"</code> [1]</td>
      <td>Клавиша со стрелкой "вправо".</td>
      <td><code>VK_RIGHT</code> (0x27)</td>
      <td><code>kVK_RightArrow</code> (0x7C)</td>
      <td>
        <code>GDK_KEY_Right</code> (0xFF53)<br /><code>GDK_KEY_KP_Right</code>
        (0xFF98)<br /><code>Qt::Key_Right</code> (0x01000014)
      </td>
      <td><code>KEYCODE_DPAD_RIGHT</code> (22)</td>
    </tr>
    <tr>
      <td><code>"ArrowUp"</code> [1]</td>
      <td>Клавиша со стрелкой "вверх".</td>
      <td><code>VK_UP</code><code> (0x26)</code></td>
      <td><code>kVK_UpArrow</code> (0x7E)</td>
      <td>
        <code>GDK_KEY_Up</code> (0xFF52)<br /><code>GDK_KEY_KP_Up</code>
        (0xFF97)<br /><code>Qt::Key_Up</code> (0x01000013)
      </td>
      <td><code>KEYCODE_DPAD_UP</code> (19)</td>
    </tr>
    <tr>
      <td><code>"End"</code></td>
      <td>Клавиша <kbd>End</kbd> . Перемещает в конец контента.</td>
      <td><code>VK_END</code> (0x23)</td>
      <td><code>kVK_End</code> (0x77)</td>
      <td>
        <code>GDK_KEY_End</code> (0xFF57)<br /><code>GDK_KEY_KP_End</code>
        (0xFF9C)<br /><code>Qt::Key_End</code> (0x01000011)
      </td>
      <td><code>KEYCODE_MOVE_END</code> (123)</td>
    </tr>
    <tr>
      <td><code>"Home"</code></td>
      <td>Клавиша <kbd>Home</kbd> . В начало контента.</td>
      <td><code>VK_HOME</code> (0x24)</td>
      <td><code>kVK_Home</code> (0x73)</td>
      <td>
        <code>GDK_KEY_Home</code> (0xFF50)<br /><code>GDK_KEY_KP_Home</code>
        (0xFF95)<br /><code>Qt::Key_Home</code> (0x01000010)
      </td>
      <td><code>KEYCODE_MOVE_HOME</code> (122)</td>
    </tr>
    <tr>
      <td><code>"PageDown"</code></td>
      <td>
        Клавиша <kbd>Page Down</kbd> (или <kbd>PgDn</kbd>). Прокручивает вниз
        или отображает следующую страницу содержимого.
      </td>
      <td><code>VK_NEXT</code> (0x22)</td>
      <td><code>kVK_PageDown</code><code> (0x79)</code></td>
      <td>
        <code>GDK_KEY_Page_Down</code> (0xFF56)<br /><code
          >GDK_KEY_KP_Page_Down</code
        >
        (0xFF9B)<br /><code>Qt::Key_PageDown</code> (0x01000017)
      </td>
      <td><code>KEYCODE_PAGE_DOWN</code> (93)</td>
    </tr>
    <tr>
      <td><code>"PageUp"</code></td>
      <td>
        Клавиша <kbd>Page Up</kbd> (или <kbd>PgUp</kbd>). Прокручивает вверх или
        отображает предыдущую страницу содержимого.
      </td>
      <td><code>VK_PRIOR</code> (0x21)</td>
      <td><code>kVK_PageUp</code> (0x74)</td>
      <td>
        <code>GDK_KEY_Page_Up</code> (0xFF55)<br /><code
          >GDK_KEY_KP_Page_Up</code
        >
        (0xFF9A)<br /><code>Qt::Key_PageUp</code> (0x01000016)
      </td>
      <td><code>KEYCODE_PAGE_UP</code> (92)</td>
    </tr>
  </tbody>
</table>

\[1] Internet Explorer, Edge (16 и ранее), и Firefox (36 и ранее) используют `"Left"`, `"Right"`, `"Up"`, и `"Down"` вместо `"ArrowLeft"`, `"ArrowRight"`, `"ArrowUp"`, и `"ArrowDown"`.

## Клавиши редактирования

<table class="standard-table">
  <thead>
    <tr>
      <th rowspan="2" scope="col" style="text-align: left">
        Значение <code>KeyboardEvent.key</code>
      </th>
      <th rowspan="2" scope="col" style="text-align: left">Описание</th>
      <th colspan="4" scope="col" style="text-align: center">
        Виртуальный код клавиши
      </th>
    </tr>
    <tr>
      <th scope="col" style="text-align: left">Windows</th>
      <th scope="col" style="text-align: left">Mac</th>
      <th scope="col" style="text-align: left">Linux</th>
      <th scope="col" style="text-align: left">Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"Backspace"</code></td>
      <td>
        The <kbd>Backspace</kbd> key. This key is labeled <kbd>Delete</kbd> on
        Mac keyboards.
      </td>
      <td><code>VK_BACK</code> (0x08)</td>
      <td><code>kVK_Delete</code> (0x33)</td>
      <td>
        <code>GDK_KEY_BackSpace</code> (0xFF08)<br /><code
          >Qt::Key_Backspace</code
        >
        (0x01000003)
      </td>
      <td><code>KEYCODE_DEL</code> (67)</td>
    </tr>
    <tr>
      <td><code>"Clear"</code></td>
      <td>The <kbd>Clear</kbd> key. Removes the currently selected input.</td>
      <td>
        <code>VK_CLEAR</code> (0x0C)<br /><code>VK_OEM_CLEAR</code> (0xFE)
      </td>
      <td><code>kVK_ANSI_KeypadClear</code> (0x47)</td>
      <td>
        <code>GDK_KEY_Clear</code> (0xFF0B)<br /><code>Qt::Key_Clear</code>
        (0x0100000B)
      </td>
      <td><code>KEYCODE_CLEAR</code> (28)</td>
    </tr>
    <tr>
      <td><code>"Copy"</code></td>
      <td>The <kbd>Copy</kbd> key (on certain extended keyboards).</td>
      <td><code>APPCOMMAND_COPY</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_Copy</code> (0x1008FF57)<br /><code>Qt::Key_Copy</code>
        (0x010000CF)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"CrSel"</code> [3]</td>
      <td>The Cursor Select key, <kbd>CrSel</kbd>.</td>
      <td><code>VK_CRSEL</code> (0xF7)</td>
      <td></td>
      <td><code>GDK_KEY_3270_CursorSelect</code> (0xFD1C)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Cut"</code></td>
      <td>The <kbd>Cut</kbd> key (on certain extended keyboards).</td>
      <td><code>APPCOMMAND_CUT</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_Cut</code> (0x1008FF58)<br /><code>Qt::Key_Cut</code>
        (0x010000D0)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Delete"</code> [2]</td>
      <td>Клавиша Delete, <kbd>Del</kbd>.</td>
      <td><code>VK_DELETE</code> (0x2E)</td>
      <td><code>kVK_ForwardDelete</code> (0x75) [1]</td>
      <td>
        <code>GDK_KEY_Delete</code> (0xFFFF)<br /><code>GDK_KEY_KP_Delete</code>
        (0xFF9F)<br /><code>Qt::Key_Delete</code> (0x01000007)
      </td>
      <td><code>KEYCODE_FORWARD_DEL</code> (112)</td>
    </tr>
    <tr>
      <td><code>"EraseEof"</code></td>
      <td>
        Erase to End of Field. Deletes all characters from the current cursor
        position to the end of the current field.
      </td>
      <td><code>VK_EREOF</code> (0xF9)</td>
      <td></td>
      <td><code>GDK_KEY_3270_ExSelect</code> (0xFD1B)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"ExSel"</code> [4]</td>
      <td>The <kbd>ExSel</kbd> (Extend Selection) key.</td>
      <td><code>VK_EXSEL</code> (0xF8)</td>
      <td></td>
      <td><code>GDK_KEY_3270_ExSelect</code> (0xFD1B)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Insert"</code></td>
      <td>
        The Insert key, <kbd>Ins</kbd>. Toggles between inserting and
        overwriting text.
      </td>
      <td><code>VK_INSERT</code> (0x2D)</td>
      <td></td>
      <td>
        <code>GDK_KEY_Insert</code> (0xFF63)<br /><code>GDK_KEY_KP_Insert</code>
        (0xFF9E)<br /><code>Qt::Key_Insert</code> (0x01000006)
      </td>
      <td><code>KEYCODE_INSERT</code> (124)</td>
    </tr>
    <tr>
      <td><code>"Paste"</code></td>
      <td>Paste from the clipboard.</td>
      <td><code>APPCOMMAND_PASTE</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_Paste</code> (0x1008FF6D)<br /><code>Qt::Key_Paste</code>
        (0x010000E2)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Redo"</code></td>
      <td>Redo the last action.</td>
      <td><code>APPCOMMAND_REDO</code></td>
      <td></td>
      <td><code>GDK_KEY_Redo</code> (0xFF66)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Undo"</code></td>
      <td>Undo the last action.</td>
      <td><code>APPCOMMAND_UNDO</code></td>
      <td></td>
      <td><code>GDK_KEY_Undo</code> (0xFF65)</td>
      <td></td>
    </tr>
  </tbody>
</table>

\[1] On keyboards without a dedicated <kbd>Del</kbd> key, the Mac generates the `"Delete"` value when <kbd>Fn</kbd> is pressed in tandem with <kbd>Delete</kbd> (which is <kbd>Backspace</kbd> on other platforms).

\[2] Internet Explorer (tested on release 9 and 11) and Firefox 36 and earlier use `"Del"` instead of `"Delete"` for the <kbd>Del</kbd> key.

\[3] Internet Explorer (tested on release 9 and 11) and Firefox 36 and earlier generate the value `"Crsel"` instead of `"CrSel"` when the <kbd>CrSel</kbd> key is pressed.

\[4] Internet Explorer (tested on release 9 and 11) and Firefox 36 and earlier generate the value `"Exsel"` instead of `"ExSel"` when the <kbd>ExSel</kbd> key is pressed.

## Клавиши интерфейса пользователя (UI)

<table class="standard-table">
  <thead>
    <tr>
      <th rowspan="2" scope="col" style="text-align: left">
        Значение <code>KeyboardEvent.key</code>
      </th>
      <th rowspan="2" scope="col" style="text-align: left">Описание</th>
      <th colspan="4" scope="col" style="text-align: center">
        Виртуальный код клавиши
      </th>
    </tr>
    <tr>
      <th scope="col" style="text-align: left">Windows</th>
      <th scope="col" style="text-align: left">Mac</th>
      <th scope="col" style="text-align: left">Linux</th>
      <th scope="col" style="text-align: left">Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"Accept"</code></td>
      <td>
        Клавиша или кнопка <kbd>Accept</kbd>, <kbd>Commit</kbd>, или
        <kbd>OK</kbd>. Accepts the currently selected option or input method
        sequence conversion.
      </td>
      <td><code>VK_ACCEPT</code> (0x1E)</td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_DPAD_CENTER</code> (23)</td>
    </tr>
    <tr>
      <td><code>"Again"</code></td>
      <td>
        The <kbd>Again</kbd> key. Перевыполняет или повторяет предыдущее
        действие.
      </td>
      <td></td>
      <td></td>
      <td><code>GDK_KEY_Redo</code> (0xFF66)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Attn"</code> [4]</td>
      <td>Клавиша "Внимание" <kbd>Attn</kbd>.</td>
      <td><code>VK_OEM_ATTN</code> (0xF0)</td>
      <td></td>
      <td><code>GDK_KEY_3270_Attn</code> (0xFD0E)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Cancel"</code> [1]</td>
      <td>Клавиша отмены <kbd>Cancel</kbd>.</td>
      <td></td>
      <td></td>
      <td><code>GDK_KEY_Cancel</code> (0xFF69)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"ContextMenu"</code> [3]</td>
      <td>
        Отображает контекстное меню. Обычно находится между клавишами
        <kbd>Windows</kbd> (или <kbd>OS</kbd>) и <kbd>Control</kbd> на правой
        стороне клавиатуры.
      </td>
      <td><code>VK_APPS</code> (0x5D)</td>
      <td><code>kVK_PC_ContextMenu</code> (0x6E)</td>
      <td>
        <code>GDK_KEY_Menu</code> (0xFF67)<br /><code>Qt::Key_Menu</code>
        (0x01000055)
      </td>
      <td><code>KEYCODE_MENU</code> (82)</td>
    </tr>
    <tr>
      <td><code>"Escape"</code> [2]</td>
      <td>
        Клавиша отмены <kbd>Esc</kbd>. Обычно используется для выходы, отмены,
        ил выхода из текущей операции. Исторически Escape-символ использовался
        для подачи сигнала о начале специальной управляющей последовательности
        символов, называемой "escape-последовательностью".
      </td>
      <td><code>VK_ESCAPE</code> (0x1B)</td>
      <td><code>kVK_Escape</code> (0x35)</td>
      <td>
        <code>GDK_KEY_Escape</code> (0xFF1B)<br /><code>Qt::Key_Escape</code>
        (0x01000000)
      </td>
      <td><code>KEYCODE_ESCAPE</code> (111)</td>
    </tr>
    <tr>
      <td><code>"Execute"</code></td>
      <td>Клавиша "Выполнить" <kbd>Execute</kbd>.</td>
      <td><code>VK_EXECUTE</code> (0x2B)</td>
      <td></td>
      <td><code>Qt::Key_Execute</code> (0x01020003)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Find"</code></td>
      <td>
        Клавиша "Найти" <kbd>Find</kbd>. Открывает интерфейс (обычно диалоговое
        окно) для выполнения операции поиска.
      </td>
      <td><code>APPCOMMAND_FIND</code></td>
      <td></td>
      <td><code>GDK_KEY_Find</code> (0xFF68)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Finish"</code> [5]</td>
      <td>Клавиша завершения <kbd>Finish</kbd>.</td>
      <td><code>VK_OEM_FINISH</code> (0xF1)</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Help"</code></td>
      <td>
        Клавиша помощи <kbd>Help</kbd>. Открывает или переключает отображение
        справочной информации.
      </td>
      <td><code>VK_HELP</code> (0x2F)<br /><code>APPCOMMAND_HELP</code></td>
      <td><code>kVK_Help</code> (0x72)</td>
      <td>
        <code>GDK_KEY_Help</code> (0xFF6A)<br /><code>Qt::Key_Help</code>
        (0x01000058)
      </td>
      <td><code>KEYCODE_HELP</code> (259)</td>
    </tr>
    <tr>
      <td><code>"Pause"</code></td>
      <td>
        Клавиша паузы <kbd>Pause</kbd>. Приостанавливает текущее приложение или
        состояние, если это применимо.
        <div class="note">
          <strong>Примечание:</strong> Не следует путать с клавишей
          <code>"MediaPause"</code> , которая используется для
          медиа-контроллеров, а не для управления приложениями и процессами.
        </div>
      </td>
      <td><code>VK_PAUSE</code> (0x13)</td>
      <td></td>
      <td>
        <code>GDK_KEY_Pause</code> (0xFF13)<br /><code>GDK_KEY_Break</code>
        (0xFF6B)<br /><code>Qt::Key_Pause</code> (0x01000008)
      </td>
      <td><code>KEYCODE_BREAK</code> (121)</td>
    </tr>
    <tr>
      <td><code>"Play"</code></td>
      <td>
        Клавиша <kbd>Play</kbd> . Если применимо, возобновляет ранее
        приостановленное приложение.
        <div class="note">
          <strong>Примечание:</strong> Не следует путать с клавишей<code
            >"MediaPlay"</code
          >
          которая используется для медиа-контроллеров, а не для управления
          приложениями и процессами.
        </div>
      </td>
      <td><code>VK_PLAY</code> (0xFA)</td>
      <td></td>
      <td>
        <code>GDK_KEY_3270_Play</code> (0xFD16)<br /><code>Qt::Key_Play</code>
        (0x01020005)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Props"</code></td>
      <td>Клавиша "Свойства" <kbd>Props</kbd>.</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Select"</code></td>
      <td>Клавиша выбора/выделения <kbd>Select</kbd>.</td>
      <td><code>VK_SELECT</code> (0x29)</td>
      <td></td>
      <td><code>GDK_KEY_Select</code> (0xFF60)</td>
      <td><code>KEYCODE_BUTTON_SELECT</code> (109)</td>
    </tr>
    <tr>
      <td><code>"ZoomIn"</code> [6]</td>
      <td>Клавиша увеличения масштаба <kbd>ZoomIn</kbd>.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_ZoomIn</code> (0x1008FF8B)<br /><code
          >Qt::Key_ZoomIn</code
        >
        (0x010000F6)
      </td>
      <td><code>KEYCODE_ZOOM_IN</code> (168)</td>
    </tr>
    <tr>
      <td><code>"ZoomOut"</code> [6]</td>
      <td>Клавиша уменьшения масштаба <kbd>ZoomOut</kbd>.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_ZoomOut</code> (0x1008FF8C)<br /><code
          >Qt::Key_ZoomOut</code
        >
        (0x010000F7)
      </td>
      <td><code>KEYCODE_ZOOM_OUT</code> (169)</td>
    </tr>
  </tbody>
</table>

\[1] В Google Chrome 52, клавиша <kbd>Cancel</kbd> ошибочно возвращает значение `"Pause"`. Исправлено в Chrome 53. (Смотри подробно в [Chrome bug 612749](https://bugs.chromium.org/p/chromium/issues/detail?id=612749).)

\[2] В Internet Explorer (проверено в версиях 9 и 11) и Firefox 36 и более ранних, клавиша <kbd>Esc</kbd> возвращает значение `"Esc"` вместо `"Escape"`.

\[3] Internet Explorer (проверено в версиях 9 и 11) и Firefox 36 и более ранних, клавиша контекстного меню возвращает значение `"Apps"` вместо `"ContextMenu"`.

\[4] Клавиша <kbd>Attn</kbd> генерирует значение `"Unidentified"` в Internet Explorer (проверено в версиях 9 и 11). В Firefox и Google Chrome происходит то же, если только не действует японская раскладка клавиатуры, то в этом случае она генерирует вместо неё `"KanaMode"`.

\[5] Клавиша <kbd>Finish</kbd> генерирует значение `"Unidentified"` в Internet Explorer (проверено в версиях 9 и 11). В Firefox происходит то же, если только не действует японская раскладка клавиатуры, то в этом случае она генерирует вместо неё `"Katakana"`.

\[6] Firefox не поддерживал клавиши `"ZoomIn"` и `"ZoomOut"` до Firefox 37.

## Клавиши устройства

<table class="standard-table">
  <thead>
    <tr>
      <th rowspan="2" scope="col" style="text-align: left">
        Значение <code>KeyboardEvent.key</code>
      </th>
      <th rowspan="2" scope="col" style="text-align: left">Описание</th>
      <th colspan="4" scope="col" style="text-align: center">
        Виртуальный код клавиши
      </th>
    </tr>
    <tr>
      <th scope="col" style="text-align: left">Windows</th>
      <th scope="col" style="text-align: left">Mac</th>
      <th scope="col" style="text-align: left">Linux</th>
      <th scope="col" style="text-align: left">Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"BrightnessDown"</code></td>
      <td>
        Клавиша уменьшения яркости. Обычно используется для уменьшения яркости
        дисплея.
      </td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_MonBrightnessDown</code> (0x1008FF03)<br /><code
          >Qt::Key_MonBrightnessDown</code
        >
        (0x010000B3)
      </td>
      <td><code>KEYCODE_BRIGHTNESS_DOWN</code> (220)</td>
    </tr>
    <tr>
      <td><code>"BrightnessUp"</code></td>
      <td>Клавиша увеличения яркости. Обычно увеличивает яркость дисплея.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_MonBrightnessUp</code> (0x1008FF02)<br /><code
          >Qt::Key_MonBrightnessUp</code
        >
        (0x010000B2)
      </td>
      <td><code>KEYCODE_BRIGHTNESS_UP</code> (221)</td>
    </tr>
    <tr>
      <td><code>"Eject"</code></td>
      <td>
        Клавиша извлечения <kbd>Eject</kbd>. Извлекает съёмный носитель (или
        переключает лоток оптического дисковода, открывая и закрывая его).
      </td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Eject</code> (0x1008FF2C)<br /><code>Qt::Key_Eject</code>
        (0x010000B9)
      </td>
      <td><code>KEYCODE_MEDIA_EJECT</code> (129)</td>
    </tr>
    <tr>
      <td><code>"LogOff"</code> [2]</td>
      <td>Клавиша выход из системы <kbd>LogOff</kbd>.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_LogOff</code> (0x1008FF61)<br /><code
          >Qt::Key_LogOff</code
        >
        (0x010000D9)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Power"</code></td>
      <td>
        Кнопка или клавиша питания <kbd>Power</kbd> для включения и выключения
        питания.
        <div class="note">
          <strong>Примечание:</strong> Не все системы передают этот ключ агенту
          пользователя.
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_POWER</code> (26)</td>
    </tr>
    <tr>
      <td><code>"PowerOff"</code></td>
      <td>
        Кнопка выключения компьютера <kbd>PowerOff</kbd> или
        <kbd>PowerDown</kbd>.
      </td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_PowerDown</code> (0x1008FF21)<br /><code
          >GDK_KEY_PowerOff</code
        >
        (0x1008FF2A)<br /><code>Qt::Key_PowerDown</code> (0x0100010B)<br /><code
          >Qt::Key_PowerOff</code
        >
        (0x010000B7)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"PrintScreen"</code></td>
      <td>
        Клавиша <kbd>PrintScreen</kbd> или <kbd>PrtScr</kbd>. Иногда
        <kbd>SnapShot</kbd>. Делает снимок экрана.
      </td>
      <td><code>VK_SNAPSHOT</code> (0x2C)</td>
      <td></td>
      <td>
        <code>GDK_KEY_3270_PrintScreen</code> (0xFD1D)<br /><code
          >GDK_KEY_Print</code
        >
        (0xFF61)<br /><code>GDK_KEY_Sys_Req</code> (0xFF15)<br /><code
          >Qt::Key_Print</code
        >
        (0x01000009)<br /><code>Qt::Key_SysReq</code> (0x0100000A)
      </td>
      <td><code>KEYCODE_SYSRQ</code> (120)</td>
    </tr>
    <tr>
      <td><code>"Hibernate"</code> [2]</td>
      <td>
        Клавиша гибернации <kbd>Hibernate</kbd>. Состояние компьютера
        сохраняется на диске, а затем выключается; компьютер может быть
        возвращён в предыдущее состояние путём восстановления сохранённой
        информации о состоянии.
      </td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Hibernate</code> (0x1008FFA8)<br /><code
          >Qt::Key_Hibernate</code
        >
        (0x01000108)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Standby"</code> [1]</td>
      <td>
        Клавиша сна <kbd>Standby</kbd>. (Также известна как
        <kbd>Suspend</kbd> или <kbd>Sleep</kbd>.) Выключает дисплей и переводит
        компьютер в режим низкого энергопотребления, не выключая его полностью.
      </td>
      <td><code>VK_SLEEP</code> (0x5F)</td>
      <td></td>
      <td>
        <code>GDK_KEY_Standby</code> (0x1008FF10)<br /><code
          >GDK_KEY_Suspend</code
        >
        (0x1008FFA7)<br /><code>GDK_KEY_Sleep</code> (0x1008FF2F)<br /><code
          >Qt::Key_Standby</code
        >
        (0x01000093)<br /><code>Qt::Key_Suspend</code> (0x0100010C)<br /><code
          >Qt::Key_Sleep</code
        >
        (0x01020004)
      </td>
      <td><code>KEYCODE_SLEEP</code> (223)</td>
    </tr>
    <tr>
      <td><code>"WakeUp"</code> [2]</td>
      <td>
        Клавиша пробуждения <kbd>WakeUp</kbd>. Используется для вывода
        компьютера из режима гибернации или ожидания.
      </td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_WakeUp</code> (0x1008FF2B)<br /><code
          >Qt::Key_WakeUp</code
        >
        (0x010000B8)
      </td>
      <td><code>KEYCODE_WAKEUP</code> (224)</td>
    </tr>
  </tbody>
</table>

\[1] Клавиша <kbd>Standby</kbd> не поддерживается Internet Explorer (проверено в версиях 9 и 11) и Firefox 36 и более ранних, поэтому возвращала `"Unidentified"`.

\[2] До Firefox 37, эта клавиша генерировала значение `"Unidentified"`.

## IME и клавиши композиции

Клавиши, используемые при использовании редактора метода ввода ([IME](https://ru.wikipedia.org/wiki/IME)) для ввода текста, который не может быть легко введён с помощью простых нажатий клавиш, например текста на языках, которые имеют больше графем, чем клавиш ввода символов на клавиатуре. Общие примеры включают китайский, японский, корейский и хинди.

Некоторые клавиши являются общими для нескольких языков, в то время как другие существуют только на клавиатурах, ориентированных на определённые языки. Кроме того, не все клавиатуры имеют все эти клавиши.

#### Обычные IME клавиши

<table class="standard-table">
  <thead>
    <tr>
      <th rowspan="2" scope="col" style="text-align: left">
        Значение <code>KeyboardEvent.key</code>
      </th>
      <th rowspan="2" scope="col" style="text-align: left">Описание</th>
      <th colspan="4" scope="col" style="text-align: center">
        Виртуальный код клавиши
      </th>
    </tr>
    <tr>
      <th scope="col" style="text-align: left">Windows</th>
      <th scope="col" style="text-align: left">Mac</th>
      <th scope="col" style="text-align: left">Linux</th>
      <th scope="col" style="text-align: left">Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"AllCandidates"</code></td>
      <td>
        The <kbd>All Candidates</kbd> key, which starts multi-candidate mode, in
        which multiple candidates are displayed for the ongoing input.
      </td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_MultipleCandidate</code> (0xFF3D<br /><code
          >Qt::Key_MultipleCandidate</code
        >
        (0x0100113D)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Alphanumeric"</code></td>
      <td>The <kbd>Alphanumeric</kbd> key.</td>
      <td><code>VK_OEM_ATTN</code> (0xF0)</td>
      <td></td>
      <td>
        <code>GDK_KEY_Eisu_Shift</code> (0xFF2F)<br /><code
          >GDK_KEY_Eisu_toggle</code
        >
        (0xFF30)<br /><code>Qt::Key_Eisu_Shift</code> (0x0100112f)<br /><code
          >Qt::Key_Eisu_toggle</code
        >
        (0x01001130)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"CodeInput"</code></td>
      <td>
        The <kbd>Code Input</kbd> key, which enables code input mode, which lets
        the user enter characters by typing their code points (their Unicode
        character numbers, typically).
      </td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Codeinput</code> (0xFF37)<br /><code
          >Qt::Key_Codeinput</code
        >
        (0x01001137)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Compose"</code></td>
      <td>The <kbd>Compose</kbd> key.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Multi_key</code> (0xFF20) [1]<br /><code
          >Qt::Key_Multi_key</code
        >
        (0x01001120)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Convert"</code> [4]</td>
      <td>
        The <kbd>Convert</kbd> key, which instructs the IME to convert the
        current input method sequence into the resulting character.
      </td>
      <td><code>VK_CONVERT</code> (0x1C)</td>
      <td></td>
      <td>
        <code>GDK_KEY_Henkan</code> (0xFF23)<br /><code>Qt::Key_Henkan</code>
        (0x01001123)
      </td>
      <td><code>KEYCODE_HENKAN</code> (214)</td>
    </tr>
    <tr>
      <td><code>"Dead"</code></td>
      <td>
        <p>
          A dead "combining" key; that is, a key which is used in tandem with
          other keys to generate accented and other modified characters. If
          pressed by itself, it doesn't generate a character.
        </p>
        <p>
          If you wish to identify which specific dead key was pressed (in cases
          where more than one exists), you can do so by examining the
          {{domxref("KeyboardEvent")}}'s associated
          {{event("compositionupdate")}} event's
          {{domxref("CompositionEvent.data", "data")}} property.
        </p>
      </td>
      <td></td>
      <td></td>
      <td>
        See <a href="#dead_keycodes_for_linux">Dead keycodes for Linux</a> below
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FinalMode"</code></td>
      <td>
        The <kbd>Final</kbd> (Final Mode) key is used on some Asian keyboards to
        enter final mode when using IMEs.
      </td>
      <td><code>VK_FINAL</code> (0x18)</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"GroupFirst"</code></td>
      <td>
        Switches to the first character group on an
        <a href="https://en.wikipedia.org/wiki/ISO/IEC_9995"
          >ISO/IEC 9995 keyboard</a
        >. Each key may have multiple groups of characters, each in its own
        column. Pressing this key instructs the device to interpret keypresses
        as coming from the first column on subsequent keystrokes.
      </td>
      <td></td>
      <td></td>
      <td><code>GDK_KEY_ISO_First_Group</code> (0xFE0C)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"GroupLast"</code></td>
      <td>
        Switches to the last character group on an
        <a href="https://en.wikipedia.org/wiki/ISO/IEC_9995"
          >ISO/IEC 9995 keyboard</a
        >.
      </td>
      <td></td>
      <td></td>
      <td><code>GDK_KEY_ISO_Last_Group</code> (0xFE0E)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"GroupNext"</code> [4]</td>
      <td>
        Switches to the next character group on an
        <a href="https://en.wikipedia.org/wiki/ISO/IEC_9995"
          >ISO/IEC 9995 keyboard</a
        >.
      </td>
      <td></td>
      <td></td>
      <td><code>GDK_KEY_ISO_Next_Group</code> (0xFE08)</td>
      <td><code>KEYCODE_LANGUAGE_SWITCH</code> (204)</td>
    </tr>
    <tr>
      <td><code>"GroupPrevious"</code></td>
      <td>
        Switches to the previous character group on an
        <a href="https://en.wikipedia.org/wiki/ISO/IEC_9995"
          >ISO/IEC 9995 keyboard</a
        >.
      </td>
      <td></td>
      <td></td>
      <td><code>GDK_KEY_ISO_Prev_Group</code> (0xFE0A)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"ModeChange"</code> [5]</td>
      <td>The Mode Change key. Toggles or cycles among input modes of IMEs.</td>
      <td><code>VK_MODECHANGE</code> (0x1F)</td>
      <td></td>
      <td>
        <code>GDK_KEY_Mode_switch</code> (0xFF7E)<br /><code
          >GDK_KEY_script_switch</code
        >
        (0xFF7E)<br /><code>Qt::Key_Mode_switch</code> (0x0100117E)
      </td>
      <td><code>KEYCODE_SWITCH_CHARSET</code> (95)</td>
    </tr>
    <tr>
      <td><code>"NextCandidate"</code></td>
      <td>
        The Next Candidate function key. Selects the next possible match for the
        ongoing input.
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"NonConvert"</code> [2]</td>
      <td>
        The <kbd>NonConvert</kbd> ("Don't convert") key. This accepts the
        current input method sequence without running conversion when using an
        IME.
      </td>
      <td><code>VK_NONCONVERT</code> (0x1D)</td>
      <td></td>
      <td>
        <code>GDK_KEY_Muhenkan</code> (0xFF22)<br /><code
          >Qt::Key_Muhenkan</code
        >
        (0x01001122)<br />
      </td>
      <td><code>KEYCODE_MUHENKAN</code> (213)</td>
    </tr>
    <tr>
      <td><code>"PreviousCandidate"</code></td>
      <td>
        The Previous Candidate key. Selects the previous possible match for the
        ongoing input.
      </td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_PreviousCandidate</code> (0xFF3E)<br /><code
          >Qt::Key_PreviousCandidate</code
        >
        (0x0100113E)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Process"</code> [3]</td>
      <td>
        The <kbd>Process</kbd> key. Instructs the IME to process the conversion.
      </td>
      <td><code>VK_PROCESSKEY</code> (0xE5)</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"SingleCandidate"</code> [4]</td>
      <td>
        The Single Candidate key. Enables single candidate mode (as opposed to
        multi-candidate mode); in this mode, only one candidate is displayed at
        a time.
      </td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_SingleCandidate</code> (0xFF3C)<br /><code
          >Qt::Key_SingleCandidate</code
        >
        (0x0100113C)
      </td>
      <td></td>
    </tr>
  </tbody>
</table>

\[1] В _X Window System_, клавиша <kbd>Compose</kbd> называется <kbd>Multi</kbd>.

\[2] Клавиша <kbd>NonConvert</kbd> возвращает значение `"Nonconvert"` вместо корректного `"NonConvert"` в Internet Explorer (проверено в версиях 9 и 11) и Firefox версии 36 и более ранних.

\[3] Клавиша <kbd>Process</kbd> в настоящее время возвращает `"Unidentified"` в Firefox и Internet Explorer. Google Chrome возвращает значение клавиши так, как если бы IME не использовался.

\[4] До Firefox 37, эта клавиша возвращала `"Unidentified"`.

\[5] Firefox генерирует значение `"AltGraph"` вместо `"ModeChange"`.

### Только корейские клавиатуры

Эти клавиши доступны только на корейских клавиатурах. Существуют и другие клавиши, определённые различными платформами для корейских клавиатур, но они являются наиболее распространёнными и идентифицируются спецификацией событий пользовательского интерфейса.

<table class="standard-table">
  <thead>
    <tr>
      <th rowspan="2" scope="col" style="text-align: left">
        Значение <code>KeyboardEvent.key</code>
      </th>
      <th rowspan="2" scope="col" style="text-align: left">Описание</th>
      <th colspan="4" scope="col" style="text-align: center">
        Виртуальный код клавиши
      </th>
    </tr>
    <tr>
      <th scope="col" style="text-align: left">Windows</th>
      <th scope="col" style="text-align: left">Mac</th>
      <th scope="col" style="text-align: left">Linux</th>
      <th scope="col" style="text-align: left">Android</th>
    </tr>
    <tr>
      <td><code>"HangulMode"</code></td>
      <td>
        The <kbd>Hangul</kbd> (Korean character set) mode key, which toggles
        between Hangul and English entry modes.
      </td>
      <td><code>VK_HANGUL</code> (0x15) [1]</td>
      <td></td>
      <td>
        <code>GDK_KEY_Hangul</code> (0xFF31)<br /><code>Qt::Key_Hangul</code>
        (0x01001131)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"HanjaMode"</code></td>
      <td>
        Selects the Hanja mode, for converting Hangul characters to the more
        specific Hanja characters.
      </td>
      <td><code>VK_HANJA</code> (0x19) [1]</td>
      <td></td>
      <td>
        <code>GDK_KEY_Hangul_Hanja</code> (0xFF34)<br /><code
          >Qt::Key_Hangul_Hanja</code
        >
        (0x01001134)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"JunjaMode"</code></td>
      <td>
        Selects the Junja mode, in which Korean is represented using single-byte
        Latin characters.
      </td>
      <td><code>VK_JUNJA</code> (0x17)</td>
      <td></td>
      <td>
        <code>GDK_KEY_Hangul_Jeonja</code> (0xFF38)<br /><code
          >Qt::Key_Hangul_Jeonja</code
        >
        (0x01001138)
      </td>
      <td></td>
    </tr>
  </thead>
</table>

\[1] `VK_HANGUL` и `VK_KANA` используют один и тот же числовой код клавиши в Windows, также как `VK_HANJA` и `VK_KANJI`.

### Только японские клавиатуры

Эти клавиши доступны только на японских клавиатурах.

<table class="standard-table">
  <thead>
    <tr>
      <th rowspan="2" scope="col" style="text-align: left">
        Значение <code>KeyboardEvent.key</code>
      </th>
      <th rowspan="2" scope="col" style="text-align: left">Описание</th>
      <th colspan="4" scope="col" style="text-align: center">
        Виртуальный код клавиши
      </th>
    </tr>
    <tr>
      <th scope="col" style="text-align: left">Windows</th>
      <th scope="col" style="text-align: left">Mac</th>
      <th scope="col" style="text-align: left">Linux</th>
      <th scope="col" style="text-align: left">Android</th>
    </tr>
    <tr>
      <td><code>"Eisu"</code> [1]</td>
      <td>
        The <kbd>Eisu</kbd> key. This key's purpose is defined by the IME, but
        may be used to close the IME.
      </td>
      <td></td>
      <td><code>kVK_JIS_Eisu</code> (0x66)</td>
      <td>
        <code>GDK_KEY_Eisu_toggle</code> (0xFF2F)<br /><code
          >Qt::Key_Eisu_toggle</code
        >
        (0x01001130)
      </td>
      <td><code>KEYCODE_EISU</code> (212)</td>
    </tr>
    <tr>
      <td><code>"Hankaku"</code> [3]</td>
      <td>The <kbd>Hankaku</kbd> (half-width characters) key.</td>
      <td><code>VK_OEM_AUTO</code> (0xF3)</td>
      <td></td>
      <td>
        <code>GDK_KEY_Hankaku</code> (0xFF29)<br /><code>Qt::Key_Hankaku</code>
        (0x01001129)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Hiragana"</code></td>
      <td>The <kbd>Hiragana</kbd> key; selects Kana characters mode.</td>
      <td><code>VK_OEM_COPY</code> (0xF2)</td>
      <td></td>
      <td>
        <code>GDK_KEY_Hiragana</code> (0xFF25)<br /><code
          >Qt::Key_Hiragana</code
        >
        (0x01001125)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"HiraganaKatakana"</code> [6]</td>
      <td>Toggles between the Hiragana and Katakana writing systems.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Hiragana_Katakana</code> (0xFF27)<br /><code
          >Qt::Key_Hiragana_Katakana</code
        >
        (0x01001127)
      </td>
      <td><code>KEYCODE_KATAKANA_HIRAGANA</code> (215)</td>
    </tr>
    <tr>
      <td><code>"KanaMode"</code></td>
      <td>The <kbd>Kana Mode</kbd> (Kana Lock) key.</td>
      <td><code>VK_KANA</code> (0x15) [2]<br /><code>VK_ATTN</code> (0xF6)</td>
      <td></td>
      <td>
        <code>GDK_KEY_Kana_Lock</code> (0xFF2D)<br /><code
          >GDK_KEY_Kana_Shift</code
        >
        (0xFF2E)<br /><code>Qt::Key_Kana_Lock</code> (0x0100112D)<br /><code
          >Qt::Key_Kana_Shift</code
        >
        (0x0100112E)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"KanjiMode"</code></td>
      <td>
        The <kbd>Kanji Mode</kbd> key. Enables entering Japanese text using the
        ideographic characters of Chinese origin.
      </td>
      <td><code>VK_KANJI</code>(0x19) [2]</td>
      <td><code>kVK_JIS_Kana</code> (0x68)</td>
      <td>
        <code>GDK_KEY_Kanji</code> (0xFF21)<br /><code>Qt::Key_Kanji</code>
        (0x01001121)
      </td>
      <td><code>KEYCODE_KANA</code> (218)</td>
    </tr>
    <tr>
      <td><code>"Katakana"</code></td>
      <td>The <kbd>Katakana</kbd> key.</td>
      <td><code>VK_OEM_FINISH</code> (0xF1)</td>
      <td></td>
      <td>
        <code>GDK_KEY_Katakana</code> (0xFF26)<br /><code
          >Qt::Key_Katakana</code
        >
        (0x01001126)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Romaji"</code> [5]</td>
      <td>The <kbd>Romaji</kbd> key; selects the Roman character set.</td>
      <td><code>VK_OEM_BACKTAB</code> (0xF5)</td>
      <td></td>
      <td>
        <code>GDK_KEY_Romaji</code> (0xFF24)<br /><code>Qt::Key_Romaji</code>
        (0x01001124)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Zenkaku"</code> [4]</td>
      <td>The <kbd>Zenkaku</kbd> (full width) characters key.</td>
      <td><code>VK_OEM_ENLW</code> (0xF4)</td>
      <td></td>
      <td>
        <code>GDK_KEY_Zenkaku</code> (0xFF28)<br /><code>Qt::Key_Zenkaku</code>
        (0x01001128)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"ZenkakuHanaku"</code> [6]</td>
      <td>
        The <kbd>Zenkaku/Hankaku</kbd> (full width/half width) toggle key.
      </td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Zenkaku_Hankaku</code> (0xFF2A)<br /><code
          >Qt::Zenkaku_Hankaku</code
        >
        (0x0100112A)
      </td>
      <td>
        <p><code>KEYCODE_ZENKAKU_HANKAKU</code> (211)</p>
      </td>
    </tr>
  </thead>
</table>

\[1] До Firefox 37, клавиша <kbd>Eisu</kbd> ошибочно сопоставлялась `"RomanCharacters"`.

\[2] `VK_HANGUL` и `VK_KANA` используют один и тот же числовой код клавиши в Windows, также как `VK_HANJA` и `VK_KANJI`.

\[3] До Firefox 37, клавиша <kbd>Hankaku</kbd> (half-width) генерировала значение `"HalfWidth"` в Firefox. Также, этак клавиша генерировала значение `"Unidentified"` в Internet Explorer (проверено в версиях 9 и 11).

\[4] Internet Explorer (проверено в версиях 9 и 11) возвращал `"Unidentified"` для клавиши <kbd>Zenkaku</kbd>; Firefox 36 и более ранние определяли эту клавишу как `"FullWidth"` на японских раскладках клавиатуры и `"Unidentified"` на всех остальных раскладках клавиатуры. Firefox 37 и выше, а также все версии Google Chrome, корректно возвращают `"Zenkaku"`.

\[5] `"Unidentified"` в Internet Explorer (проверено в версиях 9 и 11). Firefox 36 и более ранние определяли клавишу <kbd>Romaji</kbd> как `"RomanCharacters"` на японских клавиатурах и `"Unidentified"` для остальных клавиатур; исправлено на значение `"Romaji"` в Firefox 37 и выше.

\[6] Эта клавиша возвращала `"Unidentified"` до Firefox 37.

### Dead keycodes for Linux

Linux generates accented characters using special **dead keys**. _Dead keys_ are keys which are pressed in combination with character keys to generate accented forms of those characters. You can identify which specific dead key was used (if more than one exists) by examining the {{domxref("KeyboardEvent")}}'s associated {{event("compositionupdate")}} event's {{domxref("CompositionEvent.data", "data")}} property.

You can find a table of the dead keys and the characters they can be used with to generate accented or otherwise special characters on Linux using GTK.

The value of {{domxref("CompositionEvent.data", "data")}} will be one of the following:

| **Значение `CompositionEvent.data`**                                                  | Символ | Комментарии                                               |
| ------------------------------------------------------------------------------------- | ------ | --------------------------------------------------------- |
| `GDK_KEY_dead_grave` (0xFE50) `Qt::Key_Dead_Grave` (0x01001250)                       | \`     |                                                           |
| `GDK_KEY_dead_acute` (0xFE51) `Qt::Key_Dead_Acute` (0x01001251)                       | ´      |                                                           |
| `GDK_KEY_dead_circumflex` (0xFE52) `Qt::Key_Dead_Circumflex` (0x01001252)             | ˆ      |                                                           |
| `GDK_KEY_dead_tilde` (0xFE53) `Qt::Key_Dead_Tilde` (0x01001253)                       | ˜      |                                                           |
| `GDK_KEY_dead_perispomeni` (0xFE53)                                                   | ͂       |                                                           |
| `GDK_KEY_dead_macron` (0xFE54) `Qt::Key_Dead_Macron` (0x01001254)                     | ¯      |                                                           |
| `GDK_KEY_dead_breve` (0xFE55) `Qt::Key_Dead_Breve` (0x01001255)                       | ˘      |                                                           |
| `GDK_KEY_dead_abovedot` (0xFE56) `Qt::Key_Dead_Abovedot` (0x01001256)                 | ˙      |                                                           |
| `GDK_KEY_dead_diaeresis` (0xFE57) `Qt::Key_Dead_Diaeresis` (0x01001257)               | ¨      | Also called an umlaut.                                    |
| `GDK_KEY_dead_abovering` (0xFE58) `Qt::Key_Dead_Abovering` (0x01001258)               | ˚      |                                                           |
| `GDK_KEY_dead_doubleacute` (0xFE59) `Qt::Key_Dead_Doubleacute` (0x01001259)           | ˝      |                                                           |
| `GDK_KEY_dead_caron` (0xFE5A) `Qt::Key_Dead_Caron` (0x0100125A)                       | ˇ      | Also called a háček; used in Czech among other languages. |
| `GDK_KEY_dead_cedilla` (0xFE5B) `Qt::Key_Dead_Cedilla` (0x0100125B)                   | ¸      |                                                           |
| `GDK_KEY_dead_ogonek` (0xFE5C) `Qt::Key_Dead_Ogonek` (0x0100125C)                     | ˛      | Also called a nosinė; used in Polish and Old Irish.       |
| `GDK_KEY_dead_iota` (0xFE5D) `Qt::Key_Dead_Iota` (0x0100125D)                         | ͅ       | Iota subscript.                                           |
| `GDK_KEY_dead_voiced_sound` (0xFE5E) `Qt::Key_Dead_Voiced_Sound` (0x0100125E)         | ゙     |                                                           |
| `GDK_KEY_dead_semivoiced_sound` (0xFE5F) `Qt::Key_Dead_Semivoiced_Sound` (0x0100125F) | ゚     |                                                           |
| `GDK_KEY_dead_belowdot` (0xFE60) `Qt::Key_Dead_Belowdot` (0x01001260)                 | ̣̣       |                                                           |
| `GDK_KEY_dead_hook` (0xFE61) `Qt::Key_Dead_Hook` (0x01001261)                         | ̡       |                                                           |
| `GDK_KEY_dead_horn` (0xFE62) `Qt::Key_Dead_Horn` (0x01001262)                         | ̛       |                                                           |
| `GDK_KEY_dead_stroke` (0xFE63)                                                        | ̶̶       |                                                           |
| `GDK_KEY_dead_abovecomma` (0xFE64)                                                    | ̓̓       |                                                           |
| `GDK_KEY_dead_psili` (0xFE64)                                                         | ᾿      |                                                           |
| `GDK_KEY_dead_abovereversedcomma` (0xFE65)                                            | ʽ      |                                                           |
| `GDK_KEY_dead_dasia` (0xFE65)                                                         | ῾      |                                                           |
| `GDK_KEY_dead_doublegrave` (0xFE66)                                                   | ̏       |                                                           |
| `GDK_KEY_dead_belowring` (0xFE67)                                                     | ˳      |                                                           |
| `GDK_KEY_dead_belowmacron` (0xFE68)                                                   | ̱       |                                                           |
| `GDK_KEY_dead_belowcircumflex` (0xFE69)                                               | ꞈ      |                                                           |
| `GDK_KEY_dead_belowtilde` (0xFE6A)                                                    | ̰       |                                                           |
| `GDK_KEY_dead_belowbreve` (0xFE6B)                                                    | ̮       |                                                           |
| `GDK_KEY_dead_belowdiaeresis` (0xFE6C)                                                | ̤       |                                                           |
| `GDK_KEY_dead_invertedbreve` (0xFE6D)                                                 | ̯       |                                                           |
| `GDK_KEY_dead_belowcomma` (0xFE6E)                                                    | ̦       |                                                           |
| `GDK_KEY_dead_currency` (0xFE6F)                                                      |        |                                                           |
| `GDK_KEY_dead_a` (0xFE80)                                                             |        |                                                           |
| `GDK_KEY_dead_A` (0xFE81)                                                             |        |                                                           |
| `GDK_KEY_dead_e` (0xFE82)                                                             |        |                                                           |
| `GDK_KEY_dead_E` (0xFE83)                                                             |        |                                                           |
| `GDK_KEY_dead_i` (0xFE84)                                                             |        |                                                           |
| `GDK_KEY_dead_I` (0xFE85)                                                             |        |                                                           |
| `GDK_KEY_dead_o` (0xFE86)                                                             |        |                                                           |
| `GDK_KEY_dead_O` (0xFE87)                                                             |        |                                                           |
| `GDK_KEY_dead_u` (0xFE88)                                                             |        |                                                           |
| `GDK_KEY_dead_U` (0xFE89)                                                             |        |                                                           |
| `GDK_KEY_dead_small_schwa` (0xFE8A)                                                   | ə      |                                                           |
| `GDK_KEY_dead_capital_schwa` (0xFE8B)                                                 | Ə      |                                                           |
| `GDK_KEY_dead_greek` (0xFE8C)                                                         |        |                                                           |

## Функциональные клавиши

Хотя разные платформы поддерживают разное количество функциональных клавиш общего назначения, таких как <kbd>F1</kbd>–<kbd>F12</kbd> (or <kbd>F1</kbd>–<kbd>F10</kbd>, or <kbd>F1</kbd>–<kbd>F15</kbd>, etc.), первые несколько конкретно определены следующим образом.

Если доступно больше функциональных клавиш, их имена продолжают представленный шаблон, продолжая увеличивать числовую часть имени каждой клавиши, так что, например, `"F24"` это валидное значение клавиши.

<table class="standard-table">
  <thead>
    <tr>
      <th rowspan="2" scope="col" style="text-align: left">
        Значение <code>KeyboardEvent.key</code>
      </th>
      <th rowspan="2" scope="col" style="text-align: left">Описание</th>
      <th colspan="4" scope="col" style="text-align: center">
        Виртуальный код клавиши
      </th>
    </tr>
    <tr>
      <th scope="col" style="text-align: left">Windows</th>
      <th scope="col" style="text-align: left">Mac</th>
      <th scope="col" style="text-align: left">Linux</th>
      <th scope="col" style="text-align: left">Android</th>
    </tr>
    <tr>
      <td><code>"F1"</code></td>
      <td>Клавиша <kbd>F1</kbd>.</td>
      <td><code>VK_F1</code> (0x70)</td>
      <td><code>kVK_F1</code> (0x7A)</td>
      <td>
        <code>GDK_KEY_F1</code> (0xFFBE)<br /><code>GDK_KEY_KP_F1</code>
        (0xFF91)<br /><code>Qt::Key_F1</code> (0x01000030)
      </td>
      <td><code>KEYCODE_F1</code> (131)</td>
    </tr>
    <tr>
      <td><code>"F2"</code></td>
      <td>Клавиша <kbd>F2</kbd>.</td>
      <td><code>VK_F2</code> (0x71)</td>
      <td><code>kVK_F2</code> (0x78)</td>
      <td>
        <code>GDK_KEY_F2</code> (0xFFBF)<br /><code>GDK_KEY_KP_F2</code>
        (0xFF92)<br /><code>Qt::Key_F2</code> (0x01000031)
      </td>
      <td><code>KEYCODE_F2</code> (132)</td>
    </tr>
    <tr>
      <td><code>"F3"</code></td>
      <td>Клавиша <kbd>F3</kbd>.</td>
      <td><code>VK_F3</code> (0x72)</td>
      <td><code>kVK_F3</code> (0x63)</td>
      <td>
        <code>GDK_KEY_F3</code> (0xFFC0)<br /><code>GDK_KEY_KP_F3</code>
        (0xFF93)<br /><code>Qt::Key_F3</code> (0x01000032)
      </td>
      <td><code>KEYCODE_F3</code> (133)</td>
    </tr>
    <tr>
      <td><code>"F4"</code></td>
      <td>Клавиша <kbd>F4</kbd>.</td>
      <td><code>VK_F4</code> (0x73)</td>
      <td><code>kVK_F4</code> (0x76)</td>
      <td>
        <code>GDK_KEY_F4</code> (0xFFC1)<br /><code>GDK_KEY_KP_F4</code>
        (0xFF94)<br /><code>Qt::Key_F4</code> (0x01000033)
      </td>
      <td><code>KEYCODE_F4</code> (134)</td>
    </tr>
    <tr>
      <td><code>"F5"</code></td>
      <td>Клавиша <kbd>F5</kbd>.</td>
      <td><code>VK_F5</code> (0x74)</td>
      <td><code>kVK_F5</code> (0x60)</td>
      <td>
        <code>GDK_KEY_F5</code> (0xFFC2)<br /><code>Qt::Key_F5</code>
        (0x01000034)
      </td>
      <td><code>KEYCODE_F5</code> (135)</td>
    </tr>
    <tr>
      <td><code>"F6"</code></td>
      <td>Клавиша <kbd>F6</kbd>.</td>
      <td><code>VK_F6</code> (0x75)</td>
      <td><code>kVK_F6</code> (0x61)</td>
      <td>
        <code>GDK_KEY_F6</code> (0xFFC3)<br /><code>Qt::Key_F6</code>
        (0x01000035)
      </td>
      <td><code>KEYCODE_F6</code> (136)</td>
    </tr>
    <tr>
      <td><code>"F7"</code></td>
      <td>Клавиша <kbd>F7</kbd>.</td>
      <td><code>VK_F7</code> (0x76)</td>
      <td><code>kVK_F7</code> (0x62)</td>
      <td>
        <code>GDK_KEY_F7</code> (0xFFC4)<br /><code>Qt::Key_F7</code>
        (0x01000036)
      </td>
      <td><code>KEYCODE_F7</code> (137)</td>
    </tr>
    <tr>
      <td><code>"F8"</code></td>
      <td>Клавиша <kbd>F8</kbd>.</td>
      <td><code>VK_F8</code> (0x77)</td>
      <td><code>kVK_F8</code> (0x64)</td>
      <td>
        <code>GDK_KEY_F8</code> (0xFFC5)<br /><code>Qt::Key_F8</code>
        (0x01000037)
      </td>
      <td><code>KEYCODE_F8</code> (138)</td>
    </tr>
    <tr>
      <td><code>"F9"</code></td>
      <td>Клавиша <kbd>F9</kbd>.</td>
      <td><code>VK_F9</code> (0x78)</td>
      <td><code>kVK_F9</code> (0x65)</td>
      <td>
        <code>GDK_KEY_F9</code> (0xFFC6)<br /><code>Qt::Key_F9</code>
        (0x01000038)
      </td>
      <td><code>KEYCODE_F9</code> (139)</td>
    </tr>
    <tr>
      <td><code>"F10"</code></td>
      <td>Клавиша <kbd>F10</kbd>.</td>
      <td><code>VK_F10</code> (0x79)</td>
      <td><code>kVK_F10</code> (0x6D)</td>
      <td>
        <code>GDK_KEY_F10</code> (0xFFC7)<br /><code>Qt::Key_F10</code>
        (0x01000039)
      </td>
      <td><code>KEYCODE_F10</code> (140)</td>
    </tr>
    <tr>
      <td><code>"F11"</code></td>
      <td>Клавиша <kbd>F11</kbd>.</td>
      <td><code>VK_F11</code> (0x7A)</td>
      <td><code>kVK_F11</code> (0x67)</td>
      <td>
        <code>GDK_KEY_F11</code> (0xFFC8)<br /><code>Qt::Key_F11</code>
        (0x0100003A)
      </td>
      <td><code>KEYCODE_F11</code> (141)</td>
    </tr>
    <tr>
      <td><code>"F12"</code></td>
      <td>Клавиша <kbd>F12</kbd>.</td>
      <td><code>VK_F12</code> (0x7B)</td>
      <td><code>kVK_F12</code> (0x6F)</td>
      <td>
        <code>GDK_KEY_F12</code> (0xFFC9)<br /><code>Qt::Key_F12</code>
        (0x0100003B)
      </td>
      <td><code>KEYCODE_F12</code> (142)</td>
    </tr>
    <tr>
      <td><code>"F13"</code></td>
      <td>Клавиша <kbd>F13</kbd>.</td>
      <td><code>VK_F13</code> (0x7C)</td>
      <td><code>kVK_F13</code> (0x69)</td>
      <td>
        <code>GDK_KEY_F13</code> (0xFFCA)<br /><code>Qt::Key_F13</code>
        (0x0100003C)
      </td>
      <td><code>KEYCODE_F13</code></td>
    </tr>
    <tr>
      <td><code>"F14"</code></td>
      <td>Клавиша <kbd>F14</kbd>.</td>
      <td><code>VK_F14</code> (0x7D)</td>
      <td><code>kVK_F14</code> (0x6B)</td>
      <td>
        <code>GDK_KEY_F14</code> (0xFFCB)<br /><code>Qt::Key_F1</code>4
        (0x0100003D)
      </td>
      <td><code>KEYCODE_F14</code></td>
    </tr>
    <tr>
      <td><code>"F15"</code></td>
      <td>Клавиша <kbd>F15</kbd>.</td>
      <td><code>VK_F15</code> (0x7E)</td>
      <td><code>kVK_F15</code> (0x71)</td>
      <td>
        <code>GDK_KEY_F15</code> (0xFFCC)<br /><code>Qt::Key_F1</code>5
        (0x0100003E)
      </td>
      <td><code>KEYCODE_F15</code></td>
    </tr>
    <tr>
      <td><code>"F16"</code></td>
      <td>Клавиша <kbd>F16</kbd>.</td>
      <td><code>VK_F16</code> (0x7F)</td>
      <td><code>kVK_F16</code> (0x6A)</td>
      <td>
        <code>GDK_KEY_F16</code> (0xFFCD)<br /><code>Qt::Key_F1</code>6
        (0x0100003F)
      </td>
      <td><code>KEYCODE_F16</code></td>
    </tr>
    <tr>
      <td><code>"F17"</code></td>
      <td>Клавиша <kbd>F17</kbd>.</td>
      <td><code>VK_F17</code> (0x80)</td>
      <td><code>kVK_F17</code> (0x40)</td>
      <td>
        <code>GDK_KEY_F17</code> (0xFFCE)<br /><code>Qt::Key_F1</code>7
        (0x01000040)
      </td>
      <td><code>KEYCODE_F17</code></td>
    </tr>
    <tr>
      <td><code>"F18"</code></td>
      <td>Клавиша <kbd>F18</kbd>.</td>
      <td><code>VK_F18</code> (0x81)</td>
      <td><code>kVK_F18</code> (0x4F)</td>
      <td>
        <code>GDK_KEY_F18</code> (0xFFCF)<br /><code>Qt::Key_F1</code>8
        (0x01000041)
      </td>
      <td><code>KEYCODE_F18</code></td>
    </tr>
    <tr>
      <td><code>"F19"</code></td>
      <td>Клавиша <kbd>F19</kbd>.</td>
      <td><code>VK_F19</code> (0x82)</td>
      <td><code>kVK_F19</code> (0x50)</td>
      <td>
        <code>GDK_KEY_F19</code> (0xFFD0)<br /><code>Qt::Key_F1</code>9
        (0x01000042)
      </td>
      <td><code>KEYCODE_F19</code></td>
    </tr>
    <tr>
      <td><code>"F20"</code></td>
      <td>Клавиша <kbd>F20</kbd>.</td>
      <td><code>VK_F20</code> (0x83)</td>
      <td><code>kVK_F20</code> (0x5A)</td>
      <td>
        <code>GDK_KEY_F20</code> (0xFFD1)<br /><code>Qt::Key_F20</code>
        (0x01000043)
      </td>
      <td><code>KEYCODE_F20</code></td>
    </tr>
    <tr>
      <td><code>"Soft1"</code></td>
      <td>Первая функциональная клавиша общего назначения.</td>
      <td></td>
      <td></td>
      <td><code>Qt::Key_Context1</code> (0x01100000)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Soft2"</code></td>
      <td>Вторая функциональная клавиша общего назначения.</td>
      <td></td>
      <td></td>
      <td><code>Qt::Key_Context2</code> (0x01100001)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Soft3"</code></td>
      <td>Третья функциональная клавиша общего назначения.</td>
      <td></td>
      <td></td>
      <td><code>Qt::Key_Context3</code> (0x01100002)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Soft4"</code></td>
      <td>Четвёртая функциональная клавиша общего назначения.</td>
      <td></td>
      <td></td>
      <td><code>Qt::Key_Context4</code> (0x01100003)</td>
      <td></td>
    </tr>
  </thead>
</table>

## Телефонные клавиши

Эти клавиши представляют собой кнопки, которые обычно существуют на современных смартфонах.

<table class="standard-table">
  <thead>
    <tr>
      <th rowspan="2" scope="col" style="text-align: left">
        Значение <code>KeyboardEvent.key</code>
      </th>
      <th rowspan="2" scope="col" style="text-align: left">Описание</th>
      <th colspan="4" scope="col" style="text-align: center">
        Виртуальный код клавиши
      </th>
    </tr>
    <tr>
      <th scope="col" style="text-align: left">Windows</th>
      <th scope="col" style="text-align: left">Mac</th>
      <th scope="col" style="text-align: left">Linux</th>
      <th scope="col" style="text-align: left">Android</th>
    </tr>
    <tr>
      <td><code>"AppSwitch"</code></td>
      <td>
        Представляет список недавно использованных приложений, который позволяет
        пользователю быстро переключаться между приложениями.
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_APP_SWITCH</code> (181)</td>
    </tr>
    <tr>
      <td><code>"Call"</code></td>
      <td>
        Кнопка вызова <kbd>Call</kbd>. Набирает номер, который был введён.
      </td>
      <td></td>
      <td></td>
      <td><code>Qt::Key_Call</code> (0x01100004)</td>
      <td><code>KEYCODE_CALL</code> (5)</td>
    </tr>
    <tr>
      <td><code>"Camera"</code></td>
      <td>Кнопка камеры <kbd>Camera</kbd>. Включает камеру.</td>
      <td></td>
      <td></td>
      <td><code>Qt::Key_Camera</code> (0x01100020)</td>
      <td><code>KEYCODE_CAMERA</code> (27)</td>
    </tr>
    <tr>
      <td><code>"CameraFocus"</code></td>
      <td>Кнопка фокусировки <kbd>Focus</kbd>. Фокусирует камеру.</td>
      <td></td>
      <td></td>
      <td><code>Qt::Key_CameraFocus</code> (0x01100021)</td>
      <td><code>KEYCODE_FOCUS</code> (80)</td>
    </tr>
    <tr>
      <td><code>"EndCall"</code></td>
      <td>
        Кнопка завершения вызова <kbd>End Call</kbd> или <kbd>Hang Up</kbd>.
      </td>
      <td></td>
      <td></td>
      <td><code>Qt::Key_Hangup</code> (0x01100005)</td>
      <td><code>KEYCODE_ENDCALL</code> (6)</td>
    </tr>
    <tr>
      <td><code>"GoBack"</code></td>
      <td>Кнопка "Назад" <kbd>Back</kbd>.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_BACK</code> (4)</td>
    </tr>
    <tr>
      <td><code>"GoHome"</code> [1]</td>
      <td>
        Кнопка <kbd>Home</kbd>. Возвращает пользователя на главный экран
        телефона (обычно это средство запуска приложений).
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_HOME</code> (3)</td>
    </tr>
    <tr>
      <td><code>"HeadsetHook"</code></td>
      <td>
        Клавиша гарнитуры<kbd>Headset Hook</kbd>. Обычно это кнопка на
        гарнитуре, которая используется для отбоя вызовов и воспроизведения или
        приостановки мультимедиа.
      </td>
      <td></td>
      <td></td>
      <td><code>Qt::Key_ToggleCallHangup</code> (0x01100007)</td>
      <td><code>KEYCODE_HEADSETHOOK</code> (79)</td>
    </tr>
    <tr>
      <td><code>"LastNumberRedial"</code></td>
      <td>
        Клавиша перенабора номера <kbd>Redial</kbd>. Набирает последний
        набранный номер.
      </td>
      <td></td>
      <td></td>
      <td><code>Qt::Key_LastNumberRedial</code> (0x01100009)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Notification"</code></td>
      <td>Клавиша уведомления<kbd>Notification</kbd>.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_NOTIFICATION</code> (83)</td>
    </tr>
    <tr>
      <td><code>"MannerMode"</code></td>
      <td>
        Кнопка, которая циклически переключается между режимами уведомлений:
        бесшумный, вибрировать, звонить и так далее.
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_MANNER_MODE</code> (205)</td>
    </tr>
    <tr>
      <td><code>"VoiceDial"</code></td>
      <td>Клавиша<kbd>Voice Dial</kbd>. Запускает голосовой набор.</td>
      <td></td>
      <td></td>
      <td><code>Qt::Key_VoiceDial</code> (0x01100008)</td>
      <td><code>KEYCODE_VOICE_ASSIST</code> (231)</td>
    </tr>
  </thead>
</table>

\[1] До Firefox 37, кнопка Home генерирует значение `"Exit"`. Начиная с Firefox 37, генерирует `"MozHomeScreen"`.

## Мультимедийные клавиши

Мультимедийные клавиши - это дополнительные кнопки или клавиши для управления мультимедийными устройствами, которые есть на некоторых клавиатурах.

<table class="standard-table">
  <thead>
    <tr>
      <th rowspan="2" scope="col" style="text-align: left">
        Значение <code>KeyboardEvent.key</code>
      </th>
      <th rowspan="2" scope="col" style="text-align: left">Описание</th>
      <th colspan="4" scope="col" style="text-align: center">
        Виртуальный код клавиши
      </th>
    </tr>
    <tr>
      <th scope="col" style="text-align: left">Windows</th>
      <th scope="col" style="text-align: left">Mac</th>
      <th scope="col" style="text-align: left">Linux</th>
      <th scope="col" style="text-align: left">Android</th>
    </tr>
    <tr>
      <td><code>"ChannelDown"</code></td>
      <td>Переключается на предыдущий канал.</td>
      <td><code>APPCOMMAND_MEDIA_CHANNEL_DOWN</code></td>
      <td></td>
      <td><code>Qt::Key_ChannelDown</code> (0x01000119)</td>
      <td><code>KEYCODE_CHANNEL_DOWN</code> (167)</td>
    </tr>
    <tr>
      <td><code>"ChannelUp"</code></td>
      <td>Переключается на следующий канал.</td>
      <td><code>APPCOMMAND_MEDIA_CHANNEL_UP</code></td>
      <td></td>
      <td><code>Qt::Key_ChannelUp</code> (0x01000118)</td>
      <td><code>KEYCODE_CHANNEL_UP</code> (166)</td>
    </tr>
    <tr>
      <td><code>"MediaFastForward"</code> [2]</td>
      <td>
        Запускает, продолжает или увеличивает скорость быстрой перемотки
        мультимедиа вперёд.
      </td>
      <td><code>APPCOMMAND_MEDIA_FAST_FORWARD</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_AudioForward (0x1008FF97)<br />Qt:Key_AudioForward</code>
        (0x01000102)
      </td>
      <td><code>KEYCODE_MEDIA_FAST_FORWARD</code> (90)</td>
    </tr>
    <tr>
      <td><code>"MediaPause"</code></td>
      <td>
        <p>Приостанавливает воспроизведение текущего медиафайла.</p>
        <div class="note">
          <p>
            <strong>Примечание:</strong> Некоторые старые приложения используют
            просто "паузу", но это неверно.
          </p>
        </div>
      </td>
      <td><code>APPCOMMAND_MEDIA_PAUSE</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_AudioPause</code> (0x1008FF31)<br /><code
          >Qt::Key_MediaPause</code
        >
        (0x1000085)
      </td>
      <td><code>KEYCODE_MEDIA_PAUSE</code> (127)</td>
    </tr>
    <tr>
      <td><code>"MediaPlay"</code></td>
      <td>
        Запускает или продолжает воспроизведение мультимедиа с нормальной
        скоростью, если ещё не делает этого. В противном случае не имеет
        эффекта.
      </td>
      <td><code>APPCOMMAND_MEDIA_PLAY</code></td>
      <td></td>
      <td><code>GDK_KEY_AudioPlay</code> (0x1008FF14)</td>
      <td><code>KEYCODE_MEDIA_PLAY</code><code> (126)</code></td>
    </tr>
    <tr>
      <td><code>"MediaPlayPause"</code></td>
      <td>
        Переключение между воспроизведением и приостановкой текущего медиафайла.
      </td>
      <td>
        <code>VK_MEDIA_PLAY_PAUSE</code> (0xB3)<br /><code
          >APPCOMMAND_MEDIA_PLAY_PAUSE</code
        >
      </td>
      <td></td>
      <td><code>Qt::Key_MediaTogglePlayPause</code> (0x1000086)</td>
      <td><code>KEYCODE_MEDIA_PLAY_PAUSE</code> (85)</td>
    </tr>
    <tr>
      <td><code>"MediaRecord"</code></td>
      <td>Запуск или возобновление записи медиафайла.</td>
      <td><code>APPCOMMAND_MEDIA_RECORD</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_AudioRecord</code> (0x1008FF1C)<br /><code
          >Qt::Key_MediaRecord</code
        >
        (0x01000084)
      </td>
      <td><code>KEYCODE_MEDIA_RECORD</code><code> (130)</code></td>
    </tr>
    <tr>
      <td><code>"MediaRewind"</code></td>
      <td>Запуск, продолжение или увеличение скорости перемотки медиафайла.</td>
      <td><code>APPCOMMAND_MEDIA_REWIND</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_AudioRewind</code> (0x1008FF3E)<br /><code
          >Qt::Key_AudioRewind</code
        >
        (0x010000C5)
      </td>
      <td><code>KEYCODE_MEDIA_REWIND</code><code> (89)</code></td>
    </tr>
    <tr>
      <td><code>"MediaStop"</code></td>
      <td>
        Останавливает текущую медиа-активность (такую как воспроизведение,
        запись, пауза, перемотка вперёд или назад). Не действует, если медиафайл
        уже остановлен.
      </td>
      <td>
        <code>VK_MEDIA_STOP</code> (0xB2)<br /><code
          >APPCOMMAND_MEDIA_STOP</code
        >
      </td>
      <td></td>
      <td>
        <code>GDK_KEY_AudioStop</code> (0x1008FF15)<br /><code
          >Qt::Key_MediaStop</code
        >
        (0x01000081)
      </td>
      <td><code>KEYCODE_MEDIA_STOP</code> (86)</td>
    </tr>
    <tr>
      <td><code>"MediaTrackNext"</code> [1]</td>
      <td>Seeks to the next media or program track.</td>
      <td>
        <code>VK_MEDIA_NEXT_TRACK</code> (0xB0)<br /><code
          >APPCOMMAND_MEDIA_NEXTTRACK</code
        >
      </td>
      <td></td>
      <td>
        <code>GDK_KEY_AudioNext</code> (0x1008FF17)<br /><code
          >Qt::Key_MediaNext</code
        >
        (0x01000083)
      </td>
      <td><code>KEYCODE_MEDIA_NEXT</code> (87)</td>
    </tr>
    <tr>
      <td><code>"MediaTrackPrevious"</code> [1]</td>
      <td>Seeks to the previous media or program track.</td>
      <td>
        <code>VK_MEDIA_PREV_TRACK</code> (0xB1)<br /><code
          >APPCOMMAND_MEDIA_PREVIOUSTRACK</code
        >
      </td>
      <td></td>
      <td>
        <code>GDK_KEY_AudioPrev</code> (0x1008FF16)<br /><code
          >Qt::Key_MediaPrevious</code
        >
        (0x01000082)
      </td>
      <td><code>KEYCODE_MEDIA_PREVIOUS</code> (88)</td>
    </tr>
  </thead>
</table>

\[1] Internet Explorer, Edge, и Firefox (36 и более ранние) используют `"MediaNextTrack"` и `"MediaPreviousTrack"` вместо `"MediaTrackNext"` и `"MediaTrackPrevious"`.

\[2] До Firefox 37, Firefox генерировал значение `"FastFwd"` на некоторых платформах и `"Unidentified"` на других вместо `"MediaFastForward"`.

## Клавиши управления звуком

Эти мультимедийные клавиши используются специально для управления звуком.

<table class="standard-table">
  <thead>
    <tr>
      <th rowspan="2" scope="col" style="text-align: left">
        Значение <code>KeyboardEvent.key</code>
      </th>
      <th rowspan="2" scope="col" style="text-align: left">Описание</th>
      <th colspan="4" scope="col" style="text-align: center">
        Виртуальный код клавиши
      </th>
    </tr>
    <tr>
      <th scope="col" style="text-align: left">Windows</th>
      <th scope="col" style="text-align: left">Mac</th>
      <th scope="col" style="text-align: left">Linux</th>
      <th scope="col" style="text-align: left">Android</th>
    </tr>
    <tr>
      <td><code>"AudioBalanceLeft"</code></td>
      <td>Регулирует баланс звука влево.</td>
      <td><code>VK_AUDIO_BALANCE_LEFT</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"AudioBalanceRight"</code></td>
      <td>Регулирует баланс звука вправо.</td>
      <td><code>VK_AUDIO_BALANCE_RIGHT</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"AudioBassDown"</code></td>
      <td>Уменьшает количество басов.</td>
      <td><code>APPCOMMAND_BASS_DOWN</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"AudioBassBoostDown"</code></td>
      <td>
        Уменьшает степень усиления басов или циклически перемещается вниз по
        набору режимов или состояний усиления басов.
      </td>
      <td><code>VK_BASS_BOOST_DOWN</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"AudioBassBoostToggle"</code></td>
      <td>Включает и выключает усиление басов.</td>
      <td><code>APPCOMMAND_BASS_BOOST</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"AudioBassBoostUp"</code></td>
      <td>
        Увеличивает степень усиления басов или циклически перемещается вверх по
        набору режимов или состояний усиления басов.
      </td>
      <td><code>VK_BASS_BOOST_UP</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"AudioBassUp"</code></td>
      <td>Увеличивает количество басов.</td>
      <td><code>APPCOMMAND_BASS_UP</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"AudioFaderFront"</code></td>
      <td>Смещает регулятор уровня сигнала вперёд.</td>
      <td><code>VK_FADER_FRONT</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"AudioFaderRear"</code></td>
      <td>Смещает регулятор уровня сигнала назад.</td>
      <td><code>VK_FADER_REAR</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"AudioSurroundModeNext"</code></td>
      <td>Выбор следующего доступного режима объёмного звучания.</td>
      <td><code>VK_SURROUND_MODE_NEXT</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"AudioTrebleDown"</code></td>
      <td>Уменьшает количество высоких частот.</td>
      <td><code>APPCOMMAND_TREBLE_DOWN</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"AudioTrebleUp"</code></td>
      <td>Отключает звук.</td>
      <td><code>APPCOMMAND_TREBLE_UP</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"AudioVolumeDown" [1]</code></td>
      <td>Уменьшает громкость звука.</td>
      <td>
        <code>VK_VOLUME_DOWN</code> (0xAE)<br /><code
          >APPCOMMAND_VOLUME_DOWN</code
        >
      </td>
      <td><code>kVK_VolumeDown</code> (0x49)</td>
      <td>
        <code>GDK_KEY_AudioLowerVolume</code> (0x1008FF11)<br /><code
          >Qt::Key_VolumeDown</code
        >
        (0x01000070)
      </td>
      <td><code>KEYCODE_VOLUME_DOWN</code> (25)</td>
    </tr>
    <tr>
      <td><code>"AudioVolumeMute" [1]</code></td>
      <td>Отключает звук.</td>
      <td>
        <code>VK_VOLUME_MUTE</code> (0xAD)<br /><code
          >APPCOMMAND_VOLUME_MUTE</code
        >
      </td>
      <td><code>kVK_Mute</code> (0x4A)</td>
      <td>
        <code>GDK_KEY_AudioMute</code> (0x1008FF12)<br /><code
          >Qt::Key_VolumeMute</code
        >
        (0x01000071)
      </td>
      <td><code>KEYCODE_VOLUME_MUTE</code> (164)</td>
    </tr>
    <tr>
      <td><code>"AudioVolumeUp" [1]</code></td>
      <td>Увеличивает громкость звука.</td>
      <td>
        <code>VK_VOLUME_UP</code> (0xAF)<br /><code>APPCOMMAND_VOLUME_UP</code>
      </td>
      <td><code>kVK_VolumeUp</code> (0x48)</td>
      <td>
        <code>GDK_KEY_AudioRaiseVolume</code> (0x1008FF13)<br /><code
          >Qt::Key_VolumeUp</code
        >
        (0x01000072)
      </td>
      <td><code>KEYCODE_VOLUME_UP</code> (24)</td>
    </tr>
    <tr>
      <td><code>"MicrophoneToggle"</code></td>
      <td>Включает и выключает микрофон.</td>
      <td><code>APPCOMMAND_MIC_ON_OFF_TOGGLE</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"MicrophoneVolumeDown"</code></td>
      <td>Уменьшает громкость входного сигнала микрофона.</td>
      <td><code>APPCOMMAND_MICROPHONE_VOLUME_DOWN</code></td>
      <td></td>
      <td><code>Qt::Key_MicVolumeDown</code> (0x0100011E)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"MicrophoneVolumeMute"</code></td>
      <td>Отключает микрофонный вход.</td>
      <td><code>APPCOMMAND_MICROPHONE_VOLUME_MUTE</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_AudioMicMute</code> (0x1008FFB2)<br /><code
          >Qt::Key_MicMute</code
        >
        (0x01000113)
      </td>
      <td><code>KEYCODE_MUTE</code> (91)</td>
    </tr>
    <tr>
      <td><code>"MicrophoneVolumeUp"</code></td>
      <td>Увеличивает громкость входного сигнала микрофона.</td>
      <td><code>APPCOMMAND_MICROPHONE_VOLUME_UP</code></td>
      <td></td>
      <td><code>Qt::Key_MicVolumeUp</code> (0x0100011D)</td>
      <td></td>
    </tr>
  </thead>
</table>

\[1] Internet Explorer, Edge, и Firefox (48 и более ранние) используют `"VolumeUp"`, `"VolumeDown"`, и `"VolumeMute"` вместо `"AudioVolumeUp"`, `"AudioVolumeDown"`, и `"AudioVolumeMute"`. В Firefox 49 они были обновлены в соответствии с последней спецификацией. Старые имена все ещё используются в [Boot to Gecko](/ru/docs/Mozilla/B2G_OS).

## Клавиши управления ТВ

Эти ключевые значения представляют собой кнопки или клавиши на телевизионных устройствах, компьютерах или телефонах с поддержкой телевидения.

<table class="standard-table">
  <thead>
    <tr>
      <th rowspan="2" scope="col" style="text-align: left">
        Значение <code>KeyboardEvent.key</code>
      </th>
      <th rowspan="2" scope="col" style="text-align: left">Описание</th>
      <th colspan="4" scope="col" style="text-align: center">
        Виртуальный код клавиши
      </th>
    </tr>
    <tr>
      <th scope="col" style="text-align: left">Windows</th>
      <th scope="col" style="text-align: left">Mac</th>
      <th scope="col" style="text-align: left">Linux</th>
      <th scope="col" style="text-align: left">Android</th>
    </tr>
    <tr>
      <td><code>"TV"</code> [1]</td>
      <td>Переключает в режим просмотра ТВ.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV</code> (170)</td>
    </tr>
    <tr>
      <td><code>"TV3DMode"</code></td>
      <td>Включает и выключает режим 3D TV.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_3D_MODE</code> (206)</td>
    </tr>
    <tr>
      <td><code>"TVAntennaCable"</code></td>
      <td>Переключение между антенным и кабельным входами.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_ANTENNA_CABLE</code> (242)</td>
    </tr>
    <tr>
      <td><code>"TVAudioDescription"</code></td>
      <td>Включает и выключает режим описания звука.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_AUDIO_DESCRIPTION</code> (252)</td>
    </tr>
    <tr>
      <td><code>"TVAudioDescriptionMixDown"</code></td>
      <td>
        Уменьшает громкость микширования аудиоописаний; уменьшает громкость
        аудиоописаний относительно звука программы.
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_AUDIO_DESCRIPTION_MIX_DOWN</code> (254)</td>
    </tr>
    <tr>
      <td><code>"TVAudioDescriptionMixUp"</code></td>
      <td>
        Увеличивает громкость микширования аудиоописаний; увеличивает громкость
        аудиоописаний относительно звука программы.
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_AUDIO_DESCRIPTION_MIX_UP</code> (253)</td>
    </tr>
    <tr>
      <td><code>"TVContentsMenu"</code></td>
      <td>
        Отображает или скрывает мультимедийное содержимое, доступное для
        воспроизведения (это может быть руководство по каналам, показывающее
        программы, транслируемые в данный момент, или список мультимедийных
        файлов для воспроизведения).
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_CONTENTS_MENU</code> (256)</td>
    </tr>
    <tr>
      <td><code>"TVDataService"</code></td>
      <td>Отображает или скрывает сервисное меню данных телевизора.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_DATA_SERVICE</code> (230)</td>
    </tr>
    <tr>
      <td><code>"TVInput"</code> [2]</td>
      <td>Переключает источник сигнала на внешнем телевизоре.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_INPUT</code> (178)</td>
    </tr>
    <tr>
      <td><code>"TVInputComponent1"</code></td>
      <td>Переключает на вход «Компонент 1».</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_INPUT_COMPONENT_1</code> (249)</td>
    </tr>
    <tr>
      <td><code>"TVInputComponent2"</code></td>
      <td>Переключает на вход «Компонент 2."</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_INPUT_COMPONENT_2</code> (250)</td>
    </tr>
    <tr>
      <td><code>"TVInputComposite1"</code></td>
      <td>Переключает на вход «Композитный 1».</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_INPUT_COMPOSITE_1</code> (247)</td>
    </tr>
    <tr>
      <td><code>"TVInputComposite2"</code></td>
      <td>Переключает на вход «Композитный 2."</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_INPUT_COMPOSITE_2</code> (248)</td>
    </tr>
    <tr>
      <td><code>"TVInputHDMI1"</code></td>
      <td>Переключает на вход «HDMI 1».</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_INPUT_HDMI_1</code> (243)</td>
    </tr>
    <tr>
      <td><code>"TVInputHDMI2"</code></td>
      <td>Переключает на вход "HDMI 2."</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_INPUT_HDMI_2</code> (244)</td>
    </tr>
    <tr>
      <td><code>"TVInputHDMI3"</code></td>
      <td>Переключает на вход "HDMI 3."</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_INPUT_HDMI_3</code> (245)</td>
    </tr>
    <tr>
      <td><code>"TVInputHDMI4"</code></td>
      <td>Переключает на вход "HDMI 4."</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_INPUT_HDMI_4</code> (246)</td>
    </tr>
    <tr>
      <td><code>"TVInputVGA1"</code></td>
      <td>Переключает на вход "VGA 1."</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_INPUT_VGA_1</code> (251)</td>
    </tr>
    <tr>
      <td><code>"TVMediaContext"</code></td>
      <td>Клавиша контекстного меню мультимедиа.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_MEDIA_CONTEXT_MENU</code> (257)</td>
    </tr>
    <tr>
      <td><code>"TVNetwork"</code></td>
      <td>Включение и выключение сетевого подключения телевизора.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_NETWORK</code> (241)</td>
    </tr>
    <tr>
      <td><code>"TVNumberEntry"</code></td>
      <td>Переведите телевизор в режим ввода номера.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_NUMBER_ENTRY</code> (234)</td>
    </tr>
    <tr>
      <td><code>"TVPower"</code> [2]</td>
      <td>Кнопка питания устройства.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_POWER</code> (177)</td>
    </tr>
    <tr>
      <td><code>"TVRadioService"</code></td>
      <td>Кнопка радио</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_RADIO_SERVICE</code> (232)</td>
    </tr>
    <tr>
      <td><code>"TVSatellite"</code></td>
      <td>Кнопка спутника</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_SATELLITE</code> (237)</td>
    </tr>
    <tr>
      <td><code>"TVSatelliteBS"</code></td>
      <td>Broadcast Satellite button.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_SATELLITE_BS</code> (238)</td>
    </tr>
    <tr>
      <td><code>"TVSatelliteCS"</code></td>
      <td>Communication Satellite button.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_SATELLITE_CS</code> (239)</td>
    </tr>
    <tr>
      <td><code>"TVSatelliteToggle"</code></td>
      <td>Переключение между доступными спутниками.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_SATELLITE_SERVICE</code> (240)</td>
    </tr>
    <tr>
      <td><code>"TVTerrestrialAnalog"</code></td>
      <td>
        Выбирает услугу аналогового наземного телевидения (аналоговый кабельный
        или антенный приём).
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_TERRESTRIAL_ANALOG</code> (235)</td>
    </tr>
    <tr>
      <td><code>"TVTerrestrialDigital"</code></td>
      <td>
        Выбирает услугу цифрового наземного телевидения (цифровой кабельный или
        антенный приём).
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_TERRESTRIAL_DIGITAL</code> (236)</td>
    </tr>
    <tr>
      <td><code>"TVTimer"</code></td>
      <td>Кнопка программирования таймера.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_TIMER_PROGRAMMING</code> (258)</td>
    </tr>
  </thead>
</table>

\[1] В Firefox добавлена надлежащая поддержка для клавиши `"TV"` в Firefox 37; до этого, эта клавиша генерировала значение `"Live"`.

\[2] Эти клавиши возвращали `"Unidentified"` до Firefox 37.

## Клавиши медиа-контроллера

Поскольку современные пульты дистанционного управления для мультимедийных устройств часто включают кнопки, помимо базовых элементов управления, описанных в другом месте в этом документе, ключевые значения определены для широкого набора этих дополнительных кнопок.

Приведённые ниже значения частично получены из ряда технических характеристик бытовой электроники:

- [DTV Application Software Environment](http://atsc.org/standard/a100-dtv-application-software-environment-level-1-dase-1/) (часть спецификации [ATSC](https://ru.wikipedia.org/wiki/ATSC))
- [Open Cable Application Platform 1.1.3](http://www.cablelabs.com/specifications/OC-SP-OCAP1.1.3-100603.pdf)
- [ANSI/CEA-2014-B](<http://www.ce.org/Standards/Standard-Listings/R7-Home-Network-Committee/CEA-2014-B-(ANSI).aspx>): Веб-протокол и фреймворк для удалённого пользовательского интерфейса в сетях UPnP ™ и Интернете
- [Android KeyEvent key code values](http://developer.android.com/reference/android/view/KeyEvent.html)

> **Примечание:** Пульт дистанционного управления обычно содержит кнопки, значения которых уже определены где-то ещё, например _Мультимедийные клавиши_ или _Клавиши управления звуком_. Значения этих кнопок будут соответствовать тому, что задокументировано в этих таблицах.

<table class="standard-table">
  <thead>
    <tr>
      <th rowspan="2" scope="col" style="text-align: left">
        Значение <code>KeyboardEvent.key</code>
      </th>
      <th rowspan="2" scope="col" style="text-align: left">Описание</th>
      <th colspan="4" scope="col" style="text-align: center">
        Виртуальный код клавиши
      </th>
    </tr>
    <tr>
      <th scope="col" style="text-align: left">Windows</th>
      <th scope="col" style="text-align: left">Mac</th>
      <th scope="col" style="text-align: left">Linux</th>
      <th scope="col" style="text-align: left">Android</th>
    </tr>
    <tr>
      <td><code>"AVRInput"</code> [3]</td>
      <td>
        Изменяет источник сигнала на внешнем аудио / видео ресивере (AVR).
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_AVR_INPUT</code> (182)</td>
    </tr>
    <tr>
      <td><code>"AVRPower"</code> [3]</td>
      <td>Переключает питание внешнего блока AVR.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_AVR_POWER</code> (181)</td>
    </tr>
    <tr>
      <td><code>"ColorF0Red"</code> [3]</td>
      <td>
        Универсальная функциональная клавиша мультимедиа красного цвета. Она
        имеет индекс 0 среди цветных клавиш.
      </td>
      <td><code>VK_COLORED_KEY_0</code></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_PROG_RED</code> (183)</td>
    </tr>
    <tr>
      <td><code>"ColorF1Green"</code> [3]</td>
      <td>
        Универсальная функциональная клавиша мультимедиа зелёного цвета. Она
        имеет индекс 1 среди цветных клавиш.
      </td>
      <td><code>VK_COLORED_KEY_1</code></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_PROG_GREEN</code> (184)</td>
    </tr>
    <tr>
      <td><code>"ColorF2Yellow"</code> [3]</td>
      <td>
        Универсальная функциональная клавиша мультимедиа жёлтого цвета. Она
        имеет индекс 2 среди цветных клавиш.
      </td>
      <td><code>VK_COLORED_KEY_2</code></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_PROG_YELLOW</code> (185)</td>
    </tr>
    <tr>
      <td><code>"ColorF3Blue"</code> [3]</td>
      <td>
        Универсальная функциональная клавиша мультимедиа синего цвет. Она имеет
        индекс 3 среди цветных клавиш.
      </td>
      <td><code>VK_COLORED_KEY_3</code></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_PROG_BLUE</code> (186)</td>
    </tr>
    <tr>
      <td><code>"ColorF4Grey"</code></td>
      <td>
        Универсальная функциональная клавиша мультимедиа серого цвета. Она имеет
        индекс 4 среди цветных клавиш.
      </td>
      <td><code>VK_COLORED_KEY_4</code></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_PROG_GREY</code></td>
    </tr>
    <tr>
      <td><code>"ColorF5Brown"</code></td>
      <td>
        Универсальная функциональная клавиша мультимедиа коричневого цвета. Она
        имеет индекс 5 среди цветных клавиш.
      </td>
      <td><code>VK_COLORED_KEY_5</code></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_PROG_BROWN</code></td>
    </tr>
    <tr>
      <td><code>"ClosedCaptionToggle"</code></td>
      <td>Включает и выключает скрытые субтитры.</td>
      <td><code>VK_CC</code></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_CAPTIONS</code> (175)</td>
    </tr>
    <tr>
      <td><code>"Dimmer"</code></td>
      <td>
        Регулирует яркость устройства, переключаясь между двумя уровнями яркости
        или переключаясь между несколькими уровнями яркости.
      </td>
      <td><code>VK_DIMMER</code></td>
      <td></td>
      <td><code>GDK_KEY_BrightnessAdjust</code> (0x1008FF3B)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"DisplaySwap"</code></td>
      <td>Циклически переключает источники видео</td>
      <td><code>VK_DISPLAY_SWAP</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"DVR"</code></td>
      <td>
        Переключает источник входного сигнала на цифровой видеорегистратор
        (DVR).
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_DVR</code> (173)</td>
    </tr>
    <tr>
      <td><code>"Exit"</code></td>
      <td>Кнопка «Выход» для выхода из текущего приложения или меню.</td>
      <td><code>VK_EXIT</code></td>
      <td></td>
      <td><code>Qt::Key_Exit</code> (0x0102000a)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FavoriteClear0"</code></td>
      <td>Очищает первый слот списка избранного.</td>
      <td><code>VK_CLEAR_FAVORITE_0</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FavoriteClear1"</code></td>
      <td>Очищает второй слот списка избранного.</td>
      <td><code>VK_CLEAR_FAVORITE_1</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FavoriteClear2"</code></td>
      <td>Очищает третий слот списка избранного.</td>
      <td><code>VK_CLEAR_FAVORITE_2</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FavoriteClear3"</code></td>
      <td>Очищает четвёртый слот списка избранного.</td>
      <td><code>VK_CLEAR_FAVORITE_3</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FavoriteRecall0"</code></td>
      <td>
        Выбирает (вызывает) программу или содержимое, хранящееся в первом слоте
        списка избранного.
      </td>
      <td><code>VK_RECALL_FAVORITE_0</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FavoriteRecall1"</code></td>
      <td>
        Выбирает (вызывает) программу или содержимое, хранящееся во втором слоте
        списка избранного.
      </td>
      <td><code>VK_RECALL_FAVORITE_1</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FavoriteRecall2"</code></td>
      <td>
        Выбирает (вызывает) программу или содержимое, хранящееся в третьем слоте
        списка избранного.
      </td>
      <td><code>VK_RECALL_FAVORITE_2</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FavoriteRecall3"</code></td>
      <td>
        Выбирает (вызывает) программу или содержимое, хранящееся в четвёртом
        слоте списка избранного.
      </td>
      <td><code>VK_RECALL_FAVORITE_3</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FavoriteStore0"</code></td>
      <td>
        Сохраняет текущую программу или контент в первый слот списка избранного.
      </td>
      <td><code>VK_STORE_FAVORITE_0</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FavoriteStore1"</code></td>
      <td>
        Сохраняет текущую программу или контент во второй слот списка
        избранного.
      </td>
      <td><code>VK_STORE_FAVORITE_1</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FavoriteStore2"</code></td>
      <td>
        Сохраняет текущую программу или контент в третий слот списка избранного.
      </td>
      <td><code>VK_STORE_FAVORITE_2</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FavoriteStore3"</code></td>
      <td>
        Сохраняет текущую программу или контент в четвёртый слот списка
        избранного.
      </td>
      <td><code>VK_STORE_FAVORITE_3</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Guide"</code></td>
      <td>
        Переключает отображение программы или содержимого, содержащего
        руководство.
      </td>
      <td><code>VK_GUIDE</code></td>
      <td></td>
      <td><code>Qt::Key_Guide</code> (0x0100011A)</td>
      <td><code>KEYCODE_GUIDE</code> (172)</td>
    </tr>
    <tr>
      <td><code>"GuideNextDay"</code></td>
      <td>
        Если руководство отображается в данный момент, эта кнопка указывает
        руководству отобразить содержимое на следующий день.
      </td>
      <td><code>VK_NEXT_DAY</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"GuidePreviousDay"</code></td>
      <td>
        Если руководство отображается в данный момент, эта кнопка указывает
        руководству отобразить содержимое предыдущего дня.
      </td>
      <td><code>VK_PREV_DAY</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Info"</code></td>
      <td>
        Переключает отображение информации о текущем выбранном содержимом,
        программе или медиа.
      </td>
      <td><code>VK_INFO</code></td>
      <td></td>
      <td><code>Qt::Key_Info</code> (0x0100011B)</td>
      <td><code>KEYCODE_INFO</code> (165)</td>
    </tr>
    <tr>
      <td><code>"InstantReplay"</code></td>
      <td>
        Указывает устройству выполнить мгновенное перевоспроизведение (обычно
        это некоторая форма возврата на короткий промежуток времени с
        последующим воспроизведением, возможно, но обычно не в замедленном
        режиме).
      </td>
      <td><code>VK_INSTANT_REPLAY</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Link"</code></td>
      <td>
        Открывает содержимое, связанное с текущей программой, если это возможно
        и доступно.
      </td>
      <td><code>VK_LINK</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"ListProgram"</code></td>
      <td>Список текущей программы.</td>
      <td><code>VK_LIST</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LiveContent"</code></td>
      <td>
        Переключает отображение списка доступного в данный момент
        live-содержимого или программ.
      </td>
      <td><code>VK_LIVE</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Lock"</code></td>
      <td>
        Блокирует и разблокирует текущее выбранное содержимое или программу.
      </td>
      <td><code>VK_LOCK</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"MediaApps"</code></td>
      <td>
        Представляет список мультимедийных приложений, таких как программы
        просмотра фотографий, аудио- и видеоплееры, а также игры. [1]
      </td>
      <td><code>VK_APPS</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"MediaAudioTrack"</code></td>
      <td>Клавиша звуковой дорожки.</td>
      <td></td>
      <td></td>
      <td>
        GDK_KEY_AudioCycleTrack (0x1008FF9B)<br /><code
          >Qt::Key_AudioCycleTrack</code
        >
        (0x01000106)
      </td>
      <td><code>KEYCODE_MEDIA_AUDIO_TRACK</code> (222)</td>
    </tr>
    <tr>
      <td><code>"MediaLast"</code></td>
      <td>
        Возврат к последнему просмотренному содержимому, программе или другому
        медиафайлу.
      </td>
      <td><code>VK_LAST</code></td>
      <td></td>
      <td><code>Qt::Key_MediaLast</code> (0x0100FFFF)</td>
      <td><code>KEYCODE_LAST_CHANNEL</code> (229)</td>
    </tr>
    <tr>
      <td><code>"MediaSkipBackward"</code></td>
      <td>Переход назад к предыдущему содержимому или программе.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_MEDIA_SKIP_BACKWARD</code></td>
    </tr>
    <tr>
      <td><code>"MediaSkipForward"</code></td>
      <td>Переход к следующему содержимому или программе.</td>
      <td><code>VK_SKIP</code></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_MEDIA_SKIP_FORWARD</code></td>
    </tr>
    <tr>
      <td><code>"MediaStepBackward"</code></td>
      <td>Переход назад к предыдущему содержимому или программе.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_MEDIA_STEP_BACKWARD</code></td>
    </tr>
    <tr>
      <td><code>"MediaStepForward"</code></td>
      <td>Переход к следующему содержимому или программе.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_MEDIA_SKIP_FORWARD</code></td>
    </tr>
    <tr>
      <td><code>"MediaTopMenu"</code></td>
      <td>
        Кнопка верхнего меню. Открывает главное меню носителя (например, для
        диска DVD или Blu-Ray).
      </td>
      <td></td>
      <td></td>
      <td><code>Qt::Key_TopMenu</code> (0x0100010A)</td>
      <td><code>KEYCODE_MEDIA_TOP_MENU</code></td>
    </tr>
    <tr>
      <td><code>"NavigateIn"</code></td>
      <td>Переход в подменю или параметр.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_NAVIGATE_IN</code></td>
    </tr>
    <tr>
      <td><code>"NavigateNext"</code></td>
      <td>Переход к следующему элементу.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_NAVIGATE_NEXT</code></td>
    </tr>
    <tr>
      <td><code>"NavigateOut"</code></td>
      <td>Переход из текущего экрана или меню.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_NAVIGATE_OUT</code></td>
    </tr>
    <tr>
      <td><code>"NavigatePrevious"</code></td>
      <td>Переход к предыдущему элементу.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_NAVIGATE_PREVIOUS</code></td>
    </tr>
    <tr>
      <td><code>"NextFavoriteChannel"</code></td>
      <td>Циклически переходит на следующий канал в списке избранного.</td>
      <td><code>VK_NEXT_FAVORITE_CHANNEL</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"NextUserProfile"</code></td>
      <td>
        Циклически переходит к следующему сохранённому профилю пользователя,
        если эта функция поддерживается и существует несколько профилей.
      </td>
      <td><code>VK_USER</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"OnDemand"</code></td>
      <td>
        Открывает пользовательский интерфейс для выбора содержимого или программ
        по запросу для просмотра.
      </td>
      <td><code>VK_ON_DEMAND</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Pairing"</code></td>
      <td>
        Запускает процесс сопряжения пульта дистанционного управления с
        управляемым устройством.
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_PAIRING</code> (225)</td>
    </tr>
    <tr>
      <td><code>"PinPDown"</code></td>
      <td>Кнопка для перемещения изображения «картинка в картинке» вниз.</td>
      <td><code>VK_PINP_DOWN</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"PinPMove"</code></td>
      <td>
        Кнопка для управления перемещением изображения «картинка в картинке».
      </td>
      <td><code>VK_PINP_MOVE</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"PinPToggle"</code></td>
      <td>
        Включает и выключает отображение изображения в «картинка в картинке».
      </td>
      <td><code>VK_PINP_TOGGLE</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"PinPUp"</code></td>
      <td>Кнопка для перемещения изображения «картинка в картинке» вверх.</td>
      <td><code>VK_PINP_UP</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"PlaySpeedDown"</code></td>
      <td>Уменьшает скорость воспроизведения мультимедиа.</td>
      <td><code>VK_PLAY_SPEED_DOWN</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"PlaySpeedReset"</code></td>
      <td>Возвращает нормальную скорость воспроизведения мультимедиа.</td>
      <td><code>VK_PLAY_SPEED_RESET</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"PlaySpeedUp"</code></td>
      <td>Увеличивает скорость воспроизведения мультимедиа.</td>
      <td><code>VK_PLAY_SPEED_UP</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"RandomToggle"</code></td>
      <td>
        Включает и выключает случайные медиафайлы (также известно как «режим
        случайного воспроизведения»).
      </td>
      <td><code>VK_RANDOM_TOGGLE</code></td>
      <td></td>
      <td><code>GDK_KEY_AudioRandomPlay</code> (0x1008FF99)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"RcLowBattery"</code></td>
      <td>
        Код, отправляемый при низком заряде батареи пульта ДУ. Это вообще не
        соответствует физической кнопке/клавише.
      </td>
      <td><code>VK_RC_LOW_BATTERY</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"RecordSpeedNext"</code></td>
      <td>Циклически переключает доступные скорости записи на носитель.</td>
      <td><code>VK_RECORD_SPEED_NEXT</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"RfBypass"</code></td>
      <td>
        Включает и выключает режим пропуска радиочастотного (RF) входа. В режиме
        пропуска РЧ входной сигнал передаётся непосредственно на выход РЧ без
        какой-либо обработки или фильтрации.
      </td>
      <td><code>VK_RF_BYPASS</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"ScanChannelsToggle"</code></td>
      <td>
        Включает и выключает режим сканирования каналов. Это режим, который
        автоматически переключает каналы, пока пользователь не остановит
        сканирование.
      </td>
      <td><code>VK_SCAN_CHANNELS_TOGGLE</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"ScreenModeNext"</code></td>
      <td>Циклически переключает доступные режимы отображения экрана.</td>
      <td><code>VK_SCREEN_MODE_NEXT</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Settings"</code></td>
      <td>Включает и выключает отображение экрана настроек устройства.</td>
      <td><code>VK_SETTINGS</code></td>
      <td></td>
      <td><code>Qt::Key_Settings</code> (0x0100011C)</td>
      <td><code>KEYCODE_SETTINGS</code></td>
    </tr>
    <tr>
      <td><code>"SplitScreenToggle"</code></td>
      <td>Включает и выключает режим разделения экрана.</td>
      <td><code>VK_SPLIT_SCREEN_TOGGLE</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_SplitScreen (</code>0x1008FF7D)<br /><code
          >Qt::Key_SplitScreen</code
        >
        (0x010000ED)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"STBInput"</code> [3]</td>
      <td>
        Переключение между источниками сигнала на внешней приставке (STB).
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_STB_INPUT</code> (180)</td>
    </tr>
    <tr>
      <td><code>"STBPower"</code> [3]</td>
      <td>Включает и выключает внешний STB.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_STB_POWER</code> (179)</td>
    </tr>
    <tr>
      <td><code>"Subtitle"</code></td>
      <td>Включает и выключает отображение субтитров, если они доступны.</td>
      <td><code>VK_SUBTITLE</code></td>
      <td></td>
      <td><code>GDK_KEY_Subtitle</code> (0x1008FF9A)</td>
      <td><code>KEYCODE_CAPTIONS</code> (175)</td>
    </tr>
    <tr>
      <td><code>"Teletext"</code></td>
      <td>
        Включает и выключает отображение [телетекста](https://ru.wikipedia.org/wiki/%D0%A2%D0%B5%D0%BB%D0%B5%D1%82%D0%B5%D0%BA%D1%81%D1%82), если
        доступно.
      </td>
      <td><code>VK_TELETEXT</code></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_TELETEXT</code> (233)</td>
    </tr>
    <tr>
      <td><code>"VideoModeNext"</code> [3]</td>
      <td>Перебирает доступные видеорежимы.</td>
      <td><code>VK_VIDEO_MODE_NEXT</code></td>
      <td></td>
      <td><code>GDK_KEY_Next_VMode</code> (0x1008FE22)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Wink"</code></td>
      <td>
        Заставляет устройство идентифицировать себя каким-либо образом,
        например, мигает светом, на короткое время меняет яркость световых
        индикаторов или издаёт звуковой сигнал.
      </td>
      <td><code>VK_WINK</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"ZoomToggle"</code> [2]</td>
      <td>
        Переключает между полноэкранным и масштабированным отображением
        содержимого или иным образом изменяет уровень увеличения.
      </td>
      <td><code>VK_ZOOM</code> (0xFB)</td>
      <td></td>
      <td><code>Qt::Key_Zoom</code> (0x01020006)</td>
      <td><code>KEYCODE_TV_ZOOM_MODE</code> (255)</td>
    </tr>
  </thead>
</table>

\[1] Не путайте клавишу медиа-контроллера `VK_APPS` с клавишей Windows `VK_APPS`, которая также известна как `VK_CONTEXT_MENU`. Эта клавиша возвращает значение `"ContextMenu"`.

\[2] Internet Explorer (проверено в версиях 9 и 11) и Firefox 36 и более ранние определяли кнопку переключения масштаба как `"Zoom"`. В Firefox 37 исправлено на `"ZoomToggle"`.

\[3] Эти клавиши возвращали `"Unidentified"` до Firefox 37.

## Клавиши распознавания речи

Эти специальные мультимедийные клавиши используются для управления функциями распознавания речи.

<table class="standard-table">
  <thead>
    <tr>
      <th rowspan="2" scope="col" style="text-align: left">
        Значение <code>KeyboardEvent.key</code>
      </th>
      <th rowspan="2" scope="col" style="text-align: left">Описание</th>
      <th colspan="4" scope="col" style="text-align: center">
        Виртуальный код клавиши
      </th>
    </tr>
    <tr>
      <th scope="col" style="text-align: left">Windows</th>
      <th scope="col" style="text-align: left">Mac</th>
      <th scope="col" style="text-align: left">Linux</th>
      <th scope="col" style="text-align: left">Android</th>
    </tr>
    <tr>
      <td><code>"SpeechCorrectionList"</code> [1]</td>
      <td>
        Представляет список возможных исправлений неверно определённого слова.
      </td>
      <td><code>APPCOMMAND_CORRECTION_LIST</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"SpeechInputToggle"</code> [2]</td>
      <td>
        Переключение между режимом диктовки и режимом команд/управления. Это
        позволяет механизму обработки речи знать, интерпретировать ли
        произносимые слова как вводимый текст или как команды.
      </td>
      <td><code>APPCOMMAND_DICTATE_OR_COMMAND_CONTROL_TOGGLE</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </thead>
</table>

\[1] В Windows команда `APPCOMMAND_CORRECTION_LIST` генерирует значение `"Unidentified"` в Firefox.

\[2] В Windows команда `APPCOMMAND_DICTATE_OR_COMMAND_CONTROL_TOGGLE` генерирует значение `"Unidentified"` в Firefox.

## Клавиши документа

Эти клавиши управляют документами. В спецификации они включены в другие наборы клавиш(например, мультимедийные), но разумнее выделять их в собственную категорию.

<table class="standard-table">
  <thead>
    <tr>
      <th rowspan="2" scope="col" style="text-align: left">
        Значение <code>KeyboardEvent.key</code>
      </th>
      <th rowspan="2" scope="col" style="text-align: left">Описание</th>
      <th colspan="4" scope="col" style="text-align: center">
        Виртуальный код клавиши
      </th>
    </tr>
    <tr>
      <th scope="col" style="text-align: left">Windows</th>
      <th scope="col" style="text-align: left">Mac</th>
      <th scope="col" style="text-align: left">Linux</th>
      <th scope="col" style="text-align: left">Android</th>
    </tr>
    <tr>
      <td><code>"Close"</code> [1]</td>
      <td>
        Закрывает текущий документ или сообщение. Не должен выходить из
        приложения.
      </td>
      <td><code>APPCOMMAND_CLOSE</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_Close</code> (0x1008FF56)<br /><code>Qt::Key_Close</code>
        (0x010000CE)
      </td>
      <td><code>KEYCODE_MEDIA_CLOSE</code> (128)</td>
    </tr>
    <tr>
      <td><code>"New"</code> [1]</td>
      <td>Создаёт новый документ или сообщение.</td>
      <td><code>APPCOMMAND_NEW</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_New</code> (0x1008FF68)<br /><code>Qt::Key_New</code>
        (0x01000120)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Open"</code> [1]</td>
      <td>Открывает существующий документ или сообщение.</td>
      <td><code>APPCOMMAND_OPEN</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_Open</code> (0x1008FF6B)<br /><code>Qt::Key_Open</code>
        (0x01000121)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Print"</code></td>
      <td>Печатает текущий документ или сообщение.</td>
      <td><code>APPCOMMAND_PRINT</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_Print</code> (0xFF61)<br /><code>Qt::Print</code>
        (0x01000009)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Save"</code> [1]</td>
      <td>Сохраняет текущий документ или сообщение.</td>
      <td><code>APPCOMMAND_SAVE</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_Save</code> (0x1008FF77)<br /><code>Qt::Key_Save</code>
        (0x010000EA)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"SpellCheck"</code> [1]</td>
      <td>Запускает проверку орфографии в текущем документе.</td>
      <td><code>APPCOMMAND_SPELL_CHECK</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_Spell</code> (0x1008FF7C)<br /><code>Qt::Key_Spell</code>
        (0x010000EC)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"MailForward"</code> [1]</td>
      <td>Открывает пользовательский интерфейс для пересылки сообщения.</td>
      <td><code>APPCOMMAND_FORWARD_MAIL</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_MailForward</code> (0x1008FF90)<br /><code
          >Qt::Key_MailForward</code
        >
        (0x010000FB)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"MailReply"</code> [1]</td>
      <td>Открывает пользовательский интерфейс для ответа на сообщение.</td>
      <td><code>APPCOMMAND_REPLY_TO_MAIL</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_Reply</code> (0x1008FF72)<br /><code>Qt::Key_Reply</code>
        (0x010000E5)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"MailSend"</code> [1]</td>
      <td>Отправляет текущее сообщение.</td>
      <td><code>APPCOMMAND_SEND_MAIL</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_Send</code> (0x1008FF7B)<br /><code>Qt::Key_Send</code>
        (0x010000EB)
      </td>
      <td></td>
    </tr>
  </thead>
</table>

\[1] До Firefox 37, эта клавиша генерировала значение `"Unidentified"`.

## Клавиши приложений

На некоторых клавиатурах есть специальные клавиши для запуска определённых распространённых приложений или переключения на них. Значения клавиш для них перечислены здесь.

<table class="standard-table">
  <thead>
    <tr>
      <th rowspan="2" scope="col" style="text-align: left">
        Значение <code>KeyboardEvent.key</code>
      </th>
      <th rowspan="2" scope="col" style="text-align: left">Описание</th>
      <th colspan="4" scope="col" style="text-align: center">
        Виртуальный код клавиши
      </th>
    </tr>
    <tr>
      <th scope="col" style="text-align: left">Windows</th>
      <th scope="col" style="text-align: left">Mac</th>
      <th scope="col" style="text-align: left">Linux</th>
      <th scope="col" style="text-align: left">Android</th>
    </tr>
    <tr>
      <td><code>"LaunchCalculator"</code> [5]</td>
      <td>
        Клавиша запуска калькулятора <kbd>Calculator</kbd>, часто помечается
        значком. Часто используется в качестве общей клавиши запуска приложений
        (<code>APPCOMMAND_LAUNCH_APP2</code>).
      </td>
      <td><code>APPCOMMAND_LAUNCH_APP2</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_Calculator</code> (0x1008FF1D)<br /><code
          >Qt::Key_Calculator</code
        >
        (0x010000CB)
      </td>
      <td><code>KEYCODE_CALCULATOR</code> (210)</td>
    </tr>
    <tr>
      <td><code>"LaunchCalendar"</code> [5]</td>
      <td>Клавиша календаря <kbd>Calendar</kbd>. Часто помечается значком.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Calendar</code> (0x1008FF20)<br /><code
          >Qt::Key_Calendar</code
        >
        (0x010000E4)
      </td>
      <td><code>KEYCODE_CALENDAR</code> (208)</td>
    </tr>
    <tr>
      <td><code>"LaunchContacts"</code></td>
      <td>Клавиша "Контакты" <kbd>Contacts</kbd>.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_CONTACTS</code> (207)</td>
    </tr>
    <tr>
      <td><code>"LaunchMail"</code></td>
      <td>
        Клавиша электронной почты <kbd>Mail</kbd>. Часто помечается значком.
      </td>
      <td>
        <code>VK_LAUNCH_MAIL</code> (0xB4)<br /><code
          >APPCOMMAND_LAUNCH_MAIL</code
        >
      </td>
      <td></td>
      <td>
        <code>GDK_KEY_Mail</code> (0x1008FF19)<br /><code
          >Qt::Key_LaunchMail</code
        >
        (0x010000A0)
      </td>
      <td><code>KEYCODE_ENVELOPE</code> (65)</td>
    </tr>
    <tr>
      <td><code>"LaunchMediaPlayer"</code> [1]</td>
      <td>
        Клавиша медиаплеера <kbd>Media Player</kbd>. Часто помечается значком.
      </td>
      <td>
        <code>VK_LAUNCH_MEDIA_SELECT</code> (0xB5)<br /><code
          >APPCOMMAND_LAUNCH_MEDIA_SELECT</code
        >
      </td>
      <td></td>
      <td>
        <code>GDK_KEY_CD</code> (0x1008FF53)<br /><code>GDK_KEY_Video</code>
        (0x1008FF87)<br /><code>GDK_KEY_AudioMedia</code>
        (0x1008FF32)<br /><code>Qt::Key_LaunchMedia</code> (0x010000A1)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchMusicPlayer"</code> [5]</td>
      <td>
        Клавиша музыкального проигрывателя <kbd>Music Player</kbd>. Часто
        помечается значком.
      </td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Music</code> (0x1008FF92)<br /><code>Qt::Key_Music</code>
        (0x010000FD)
      </td>
      <td><code>KEYCODE_MUSIC</code> (209)</td>
    </tr>
    <tr>
      <td><code>"LaunchMyComputer"</code> [5]</td>
      <td>
        Клавиша "Мой компьютер" <kbd>My Computer</kbd> на клавиатурах Windows.
        Часто используется в качестве общей клавиши запуска приложений
        (<code>APPCOMMAND_LAUNCH_APP1</code>).
      </td>
      <td><code>APPCOMMAND_LAUNCH_APP1</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_MyComputer</code> (0x1008FF33)<br /><code
          >GDK_KEY_Explorer</code
        >
        (0x1008FF5D)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchPhone"</code></td>
      <td>
        Клавиша телефонии <kbd>Phone</kbd>. Открывает приложение для набора
        номера телефона (если таковое имеется).
      </td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Phone</code> (0x1008FF6E)<br /><code>Qt::Key_Phone</code>
        (0x010000E3)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchScreenSaver"</code> [5]</td>
      <td>Клавиша заставки <kbd>Screen Saver</kbd>.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_ScreenSaver</code> (0x1008FF2D)<br /><code
          >Qt::Key_ScreenSaver</code
        >
        (0x010000BA)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchSpreadsheet"</code> [4]</td>
      <td>
        Клавиша табличного процессора <kbd>Spreadsheet</kbd>. Эта клавиша часто
        помечается значком.
      </td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Excel</code> (0x1008FF5C)<br /><code>Qt::Key_Excel</code>
        (0x010000D4)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchWebBrowser"</code> [4]</td>
      <td>
        Клавиша веб-браузера <kbd>Web Browser</kbd>. Эта клавиша часто
        помечается значком.
      </td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_WWW</code> (0x1008FF2E)<br /><code>Qt::Key_WWW</code>
        (0x010000BB)
      </td>
      <td><code>KEYCODE_EXPLORER</code> (64)</td>
    </tr>
    <tr>
      <td><code>"LaunchWebCam"</code> [5]</td>
      <td>Клавиша <kbd>WebCam</kbd>. Открывает приложение веб-камеры.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_WebCam</code> (0x1008FF8F)<br /><code
          >Qt::Key_WebCam</code
        >
        (0x010000FA)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchWordProcessor"</code> [5]</td>
      <td>
        Клавиша текстового процессора <kbd>Word Processor</kbd>. Это может быть
        значок конкретного приложения текстового процессора или общий значок
        документа.
      </td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Word</code> (0x1008FF89)<br /><code>Qt::Key_Word</code>
        (0x010000F4)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication1"</code> [2]</td>
      <td>1-я общая кнопка запуска приложений.</td>
      <td>
        <code>VK_LAUNCH_APP1</code> (0xB6)<br /><code
          >APPCOMMAND_LAUNCH_APP1</code
        >
      </td>
      <td></td>
      <td>
        <code>GDK_KEY_Launch0</code> (0x1008FF40)<br /><code
          >Qt::Key_Launch0</code
        >
        (0x010000A2)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication2"</code> [3]</td>
      <td>2-я общая кнопка запуска приложений.</td>
      <td>
        <code>VK_LAUNCH_APP2</code> (0xB7)<br /><code
          >APPCOMMAND_LAUNCH_APP2</code
        >
      </td>
      <td></td>
      <td>
        <code>GDK_KEY_Launch1</code> (0x1008FF41)<br /><code
          >Qt::Key_Launch1</code
        >
        (0x010000A3)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication3"</code></td>
      <td>3-я общая кнопка запуска приложений.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Launch2</code> (0x1008FF42)<br /><code
          >Qt::Key_Launch2</code
        >
        (0x010000A4)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication4"</code></td>
      <td>4-я общая кнопка запуска приложений.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Launch3</code> (0x1008FF43)<br /><code
          >Qt::Key_Launch3</code
        >
        (0x010000A5)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication5"</code></td>
      <td>5-я общая кнопка запуска приложений.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Launch4</code> (0x1008FF44)<br /><code
          >Qt::Key_Launch4</code
        >
        (0x010000A6)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication6"</code></td>
      <td>6-я общая кнопка запуска приложений.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Launch5</code> (0x1008FF45)<br /><code
          >Qt::Key_Launch5</code
        >
        (0x010000A7)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication7"</code></td>
      <td>7-я общая кнопка запуска приложений.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Launch6</code> (0x1008FF46)<br /><code
          >Qt::Key_Launch6</code
        >
        (0x010000A8)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication8"</code></td>
      <td>8-я общая кнопка запуска приложений.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Launch7</code> (0x1008FF47)<br /><code
          >Qt::Key_Launch7</code
        >
        (0x010000A9)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication9"</code></td>
      <td>9-я общая кнопка запуска приложений.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Launch8</code> (0x1008FF48)<br /><code
          >Qt::Key_Launch8</code
        >
        (0x010000AA)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication10"</code></td>
      <td>10-я общая кнопка запуска приложений.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Launch9</code> (0x1008FF49)<br /><code
          >Qt::Key_Launch9</code
        >
        (0x010000AB)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication11"</code></td>
      <td>11-я общая кнопка запуска приложений.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_LaunchA</code> (0x1008FF4A)<br /><code
          >Qt::Key_LaunchA</code
        >
        (0x010000AC)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication12"</code></td>
      <td>12-я общая кнопка запуска приложений.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_LaunchB</code> (0x1008FF4B)<br /><code
          >Qt::Key_LaunchB</code
        >
        (0x010000AD)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication13"</code></td>
      <td>13-я общая кнопка запуска приложений.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_LaunchC</code> (0x1008FF4C)<br /><code
          >Qt::Key_LaunchC</code
        >
        (0x010000AE)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication14"</code></td>
      <td>14-я общая кнопка запуска приложений.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_LaunchD</code> (0x1008FF4D)<br /><code
          >Qt::Key_LaunchD</code
        >
        (0x010000AF)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication15"</code></td>
      <td>15-я общая кнопка запуска приложений.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_LaunchE</code> (0x1008FF4E)<br /><code
          >Qt::Key_LaunchE</code
        >
        (0x010000B0)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication16"</code></td>
      <td>16-я общая кнопка запуска приложений.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_LaunchF</code> (0x1008FF4F)<br /><code
          >Qt::Key_LaunchF</code
        >
        (0x010000B1)
      </td>
      <td></td>
    </tr>
  </thead>
</table>

\[1] Internet Explorer, Edge, и Firefox (36 и ранее) используют `"SelectMedia"` вместо `"LaunchMediaPlayer"`. Firefox 37 и Firefox 48 используют `"MediaSelect"`. Firefox 49 был обновлён в соответствии с последней спецификацией и теперь возвращает `"LaunchMediaPlayer"`.

\[2] Google Chrome 57 и ранние возвращают `"LaunchMyComputer"` вместо `"LaunchApplication1"`. Смотри [Chrome Bug 612743](https://bugs.chromium.org/p/chromium/issues/detail?id=612743) для дополнительной информации.

\[3] Google Chrome 57 и ранние возвращают `"LaunchCalculator"` вместо `"LaunchApplication2"`. Смотри [Chrome Bug 612743](https://bugs.chromium.org/p/chromium/issues/detail?id=612743) для дополнительной информации.

\[4] До Firefox 37, Firefox возвращал the key code `"LaunchApplication1"` вместо "`LaunchWebBrowser"`для клавиши Веб-браузера.

\[5] Firefox ввёл поддержку этой клавиши в Firefox 37. До этого, эта клавиша возвращала значение `"Unidentified"`.

## Клавиши управления браузером

На некоторых клавиатурах есть специальные клавиши для управления веб-браузерами. Это следующие клавиши.

<table class="standard-table">
  <thead>
    <tr>
      <th rowspan="2" scope="col" style="text-align: left">
        Значение <code>KeyboardEvent.key</code>
      </th>
      <th rowspan="2" scope="col" style="text-align: left">Описание</th>
      <th colspan="4" scope="col" style="text-align: center">
        Виртуальный код клавиши
      </th>
    </tr>
    <tr>
      <th scope="col" style="text-align: left">Windows</th>
      <th scope="col" style="text-align: left">Mac</th>
      <th scope="col" style="text-align: left">Linux</th>
      <th scope="col" style="text-align: left">Android</th>
    </tr>
    <tr>
      <td><code>"BrowserBack"</code></td>
      <td>
        Переход к предыдущему содержимому или странице в истории текущего
        веб-представления.
      </td>
      <td>
        <code>VK_BROWSER_BACK</code> (0xA6)<br /><code
          >APPCOMMAND_BROWSER_BACKWARD</code
        >
      </td>
      <td></td>
      <td>
        <code>GDK_KEY_Back</code> (0x1008FF26)<br /><code>Qt::Key_Back</code>
        (0x01000061)
      </td>
      <td><code>KEYCODE_BACK</code> (4)</td>
    </tr>
    <tr>
      <td><code>"BrowserFavorites"</code> [1]</td>
      <td>Открывает список закладок/избранного пользователя.</td>
      <td>
        <code>VK_BROWSER_FAVORITES</code> (0xAB)<br /><code
          >APPCOMMAND_BROWSER_FAVORITES</code
        >
      </td>
      <td></td>
      <td>
        <code>GDK_KEY_Favorites</code> (0x1008FF30)<br /><code
          >GDK_KEY_MySites</code
        >
        (0x1008FF67)<br /><code>Qt::Favorites</code> (0x01000091)
      </td>
      <td><code>KEYCODE_BOOKMARK</code> (174)</td>
    </tr>
    <tr>
      <td><code>"BrowserForward"</code></td>
      <td>
        Переход к следующему содержимому или странице в истории текущего
        веб-представления.
      </td>
      <td>
        <code>VK_BROWSER_FORWARD</code> (0xA7)<br /><code
          >APPCOMMAND_BROWSER_FORWARD</code
        >
      </td>
      <td></td>
      <td>
        <code>GDK_KEY_Forward</code> (0x1008FF27)<br /><code
          >Qt::Key_Forward</code
        >
        (0x01000062)
      </td>
      <td><code>KEYCODE_FORWARD</code> (125)</td>
    </tr>
    <tr>
      <td><code>"BrowserHome"</code></td>
      <td>Переход к домашней странице, установленной пользователем.</td>
      <td>
        <code>VK_BROWSER_HOME</code> (0xAC)<br /><code
          >APPCOMMAND_BROWSER_HOME</code
        >
      </td>
      <td></td>
      <td>
        <code>GDK_KEY_HomePage</code> (0x1008FF18)<br /><code
          >Qt::Key_HomePage</code
        >
        (0x01000090)
      </td>
      <td><code>KEYCODE_HOME</code> (3)</td>
    </tr>
    <tr>
      <td><code>"BrowserRefresh"</code></td>
      <td>Обновление текущей страницы или содержимого.</td>
      <td>
        <code>VK_BROWSER_REFRESH</code> (0xA8)<br /><code
          >APPCOMMAND_BROWSER_REFRESH</code
        >
      </td>
      <td></td>
      <td>
        <code>GDK_KEY_Refresh</code> (0x1008FF29)<br /><code
          >GDK_KEY_Reload</code
        >
        (0x1008FF73)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"BrowserSearch"</code></td>
      <td>
        Активирует предпочтительную поисковую систему пользователя или интерфейс
        поиска в его браузере.
      </td>
      <td>
        <code>VK_BROWSER_SEARCH</code> (0xAA)<br /><code
          >APPCOMMAND_BROWSER_SEARCH</code
        >
      </td>
      <td></td>
      <td>
        <code>GDK_KEY_Search</code> (0x1008FF1B)<br /><code
          >Qt::Key_Search</code
        >
        (0x01000092)
      </td>
      <td><code>KEYCODE_SEARCH</code> (84)</td>
    </tr>
    <tr>
      <td><code>"BrowserStop"</code></td>
      <td>
        Останавливает загрузку текущего веб-представления или содержимого.
      </td>
      <td>
        <code>VK_BROWSER_STOP</code> (0xA9)<br /><code
          >APPCOMMAND_BROWSER_STOP</code
        >
      </td>
      <td></td>
      <td>
        <code>GDK_KEY_Stop</code> (0x1008FF28)<br /><code>Qt::Key_Search</code>
        (0x01000063)
      </td>
      <td></td>
    </tr>
  </thead>
</table>

\[1] До Firefox 37, эта клавиша возвращала значение `"Unidentified"`.

## Клавиши цифрового блока

Эти клавиши находятся на цифровой панели клавиатуры. Однако не все они присутствуют на каждой клавиатуре. Хотя типичные цифровые панели имеют цифровые клавиши от <kbd>0</kbd> до <kbd>9</kbd> (кодируются как `"0"` - `"9"`), некоторые мультимедийные клавиатуры включают дополнительные цифровые клавиши для более высоких чисел.

> **Примечание:** Клавиша <kbd>10</kbd>, если она присутствует, генерирует события со значением ключа `"0"`.

<table class="standard-table">
  <thead>
    <tr>
      <th rowspan="2" scope="col" style="text-align: left">
        Значение <code>KeyboardEvent.key</code>
      </th>
      <th rowspan="2" scope="col" style="text-align: left">Описание</th>
      <th colspan="4" scope="col" style="text-align: center">
        Виртуальный код клавиши
      </th>
    </tr>
    <tr>
      <th scope="col" style="text-align: left">Windows</th>
      <th scope="col" style="text-align: left">Mac</th>
      <th scope="col" style="text-align: left">Linux</th>
      <th scope="col" style="text-align: left">Android</th>
    </tr>
    <tr>
      <td><code>"Decimal"</code> [1]</td>
      <td>
        <p>
          Клавиша десятичной точки (обычно <kbd>.</kbd> или <kbd>,</kbd> в
          зависимости от региона).
        </p>
        <p>
          В новых браузерах это значение должно быть просто символом,
          сгенерированным клавишей десятичной точки (одним из этих двух
          символов). [1]
        </p>
      </td>
      <td><code>VK_DECIMAL</code> (0x6E)</td>
      <td><code>kVK_ANSI_KeypadDecimal</code> (0x41)</td>
      <td><code>GDK_KEY_KP_Decimal</code> (0xFFAE)<br /></td>
      <td><code>KEYCODE_NUMPAD_DOT</code> (158)</td>
    </tr>
    <tr>
      <td><code>"Key11"</code></td>
      <td>
        Клавиша <kbd>11</kbd> встречается на некоторых цифровых мультимедиа
        клавиатурах.
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Key12"</code></td>
      <td>
        Клавиша <kbd>12</kbd> встречается на некоторых цифровых мультимедиа
        клавиатурах..
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Multiply"</code> [1]</td>
      <td>Клавиша умножения на цифровой панели, <kbd>*</kbd>.</td>
      <td><code>VK_MULTIPLY</code> (0x6A)</td>
      <td><code>kVK_ANSI_KeypadMultiply</code> (0x43)</td>
      <td>
        <code>GDK_KEY_KP_Multiply</code> (0xFFAA)<br /><code
          >Qt::Key_Multiply</code
        >
        (0x0D7)
      </td>
      <td><code>KEYCODE_NUMPAD_MULTIPLY</code> (155)</td>
    </tr>
    <tr>
      <td><code>"Add"</code> [1]</td>
      <td>Клавиша сложения на цифровой панели, <kbd>+</kbd>.</td>
      <td><code>VK_ADD</code> (0x6B)</td>
      <td><code>kVK_ANSI_KeypadPlus</code> (0x45)</td>
      <td><code>GDK_KEY_KP_Add</code> (0xFFAB)</td>
      <td><code>KEYCODE_NUMPAD_ADD</code> (157)</td>
    </tr>
    <tr>
      <td><code>"Clear"</code></td>
      <td>Клавиша очистки на цифровой панели, <kbd>Clear</kbd>.</td>
      <td></td>
      <td><code>kVK_ANSI_KeypadClear</code> (0x47)</td>
      <td>
        <code>GDK_KEY_Clear</code> (0xFF0B)<br /><code>Qt::Key_Clear</code>
        (0x0100000B)
      </td>
      <td><code>KEYCODE_CLEAR</code> (28)</td>
    </tr>
    <tr>
      <td><code>"Divide"</code> [1]</td>
      <td>Клавиша деления на цифровой панели, <kbd>/</kbd>.</td>
      <td><code>VK_DIVIDE</code> (0x6F)</td>
      <td><code>kVK_ANSI_KeypadDivide</code> (0x4B)</td>
      <td>
        <code>GDK_KEY_KP_Divide</code> (0xFFAF)<br /><code>Qt::Key_Slash</code>
        (0x2F)
      </td>
      <td><code>KEYCODE_NUMPAD_DIVIDE</code> (154)</td>
    </tr>
    <tr>
      <td><code>"Subtract"</code> [1]</td>
      <td>Клавиша вычитания на цифровой панели, <kbd>-</kbd>.</td>
      <td><code>VK_SUBTRACT</code> (0x6D)</td>
      <td><code>kVK_ANSI_KeypadMinus</code> (0x4E)</td>
      <td><code>GDK_KEY_KP_Subtract</code> (0xFFAD)</td>
      <td><code>KEYCODE_NUMPAD_SUBTRACT</code> (156)</td>
    </tr>
    <tr>
      <td><code>"Separator"</code> [1]</td>
      <td>
        <p>Символ разделителя позиций на цифровой клавиатуре.</p>
        <p>(В США это запятая, но в других странах это часто точка.)</p>
      </td>
      <td><code>VK_SEPARATOR</code> (0x6C)</td>
      <td><code>kVK_JIS_KeypadComma</code> (0x5F)</td>
      <td><code>GDK_KEY_KP_Separator</code> (0xFFAC)<br /></td>
      <td><code>KEYCODE_NUMPAD_COMMA</code> (159)</td>
    </tr>
    <tr>
      <td><code>От "0"</code> до <code>"9"</code></td>
      <td>Фактические цифровые клавиши на цифровой панели.</td>
      <td><code>VK_NUMPAD0</code> (0x60) - <code>VK_NUMPAD9</code> (0x69)</td>
      <td><code>kVK_Keypad0</code> (0x52) - <code>kVK_Keypad9</code> (0x5C)</td>
      <td>
        <code>GDK_KEY_KP_0</code> (0xFFB0) - <code>GDK_KEY_KP_9</code> (0xFFB9)
      </td>
      <td>
        <code>KEYCODE_NUMPAD_0</code> (144) -
        <code>KEYCODE_NUMPAD_9</code> (153)
      </td>
    </tr>
  </thead>
</table>

\[1] В то время как старые браузеры использовали такие слова, как «Добавить», «Десятичное число», «Умножить» и т. д., современные браузеры идентифицируют их по фактическому символу («+», «.», «\*» и т. д.).
