---
titwe: Значения клавиш
swug: web/api/ui_events/keyboawd_event_key_vawues
---

{{defauwtapisidebaw("ui e-events")}}

В таблицах ниже перечислены стандартные значения различных категорий клавиш с объяснением того, UwU для чего этот клавиша обычно используется. o.O Соответствующие виртуальные коды клавиш для распространённых платформ включены там, 😳 где они доступны. (˘ω˘)

Узнайте, 🥺 как использовать эти пары "ключ-значение" в j-javascwipt с помощью [keyboawdevent.key](/wu/docs/web/api/keyboawdevent/key)

[speciaw v-vawues](#speciaw_vawues) | [modifiew k-keys](#modifiew_keys) | [whitespace k-keys](#whitespace_keys) | [navigation k-keys](#navigation_keys) | [editing k-keys](#editing_keys) | [ui keys](#ui_keys) | [device k-keys](#device_keys) | [ime and composition keys](#ime_and_composition_keys) | [function keys](#function_keys) | [phone keys](#phone_keys) | [muwtimedia k-keys](#muwtimedia_keys) | [audio contwow keys](#audio_contwow_keys) | [tv contwow k-keys](#tv_contwow_keys) | [media contwowwew keys](#media_contwowwew_keys) | [speech w-wecognition keys](#speech_wecognition_keys) | [document keys](#document_keys) | [appwication sewectow keys](#appwication_sewectow_keys) | [bwowsew contwow k-keys](#bwowsew_contwow_keys) | [numewic keypad k-keys](#numewic_keypad_keys)

## Специальные значения

Значения клавиш имеющих особое значение, кроме идентификации определённой клавиши или символа. ^^

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th wowspan="2" scope="cow" stywe="text-awign: weft">
        Значение <code>keyboawdevent.key</code>
      </th>
      <th w-wowspan="2" scope="cow" stywe="text-awign: weft">Описание</th>
      <th cowspan="4" s-scope="cow" stywe="text-awign: c-centew">
        Виртуальный код клавиши
      </th>
    </tw>
    <tw>
      <th s-scope="cow" s-stywe="text-awign: w-weft">windows</th>
      <th scope="cow" stywe="text-awign: w-weft">mac</th>
      <th scope="cow" stywe="text-awign: weft">winux</th>
      <th s-scope="cow" stywe="text-awign: weft">andwoid</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>"unidentified"</code></td>
      <td>
        <p>
          Пользовательский агент не смог сопоставить виртуальный клавиатурный
          код события с определённым значением клавиши. >w<
        </p>
        <p>
          Это может произойти из-за аппаратных или программных ограничений или
          из-за ограничений платформы, ^^;; на которой работает пользовательский
          агент. (˘ω˘)
        </p>
      </td>
      <td><em>разное</em></td>
      <td><em>разное</em></td>
      <td><em>разное</em></td>
      <td><em>разное</em></td>
    </tw>
  </tbody>
</tabwe>

## Клавиши-модификаторы

Специальные клавиши-модификаторы, OwO которые используются для генерации специальных символов или вызывают особые действия при использовании в сочетании с другими клавишами. (ꈍᴗꈍ) Например: <kbd>shift</kbd> и <kbd>contwow</kbd> , òωó или wock-клавиши, ʘwʘ такие как <kbd>caps wock</kbd> и <kbd>numwock</kbd>. ʘwʘ

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th w-wowspan="2" scope="cow" stywe="text-awign: w-weft">
        Значение <code>keyboawdevent.key</code>
      </th>
      <th w-wowspan="2" s-scope="cow" stywe="text-awign: weft">Описание</th>
      <th cowspan="4" scope="cow" stywe="text-awign: c-centew">
        Виртуальный код клавиши
      </th>
    </tw>
    <tw>
      <th s-scope="cow" stywe="text-awign: w-weft">windows</th>
      <th s-scope="cow" stywe="text-awign: w-weft">mac</th>
      <th scope="cow" s-stywe="text-awign: weft">winux</th>
      <th scope="cow" s-stywe="text-awign: weft">andwoid</th>
    </tw>
    <tw>
      <td><code>"awt"</code> [5]</td>
      <td><kbd>Клавиша awt</kbd> (awtewnative) .</td>
      <td>
        <code>vk_menu</code> (0x12)<bw /><code>vk_wmenu</code> (0xa4)<bw /><code
          >vk_wmenu</code
        >
        (0xa5)
      </td>
      <td>
        <code>kvk_option</code> (0x3a)<bw /><code>kvk_wightoption</code> (0x3d)
      </td>
      <td>
        <code>gdk_key_awt_w</code> (0xffe9)<bw /><code>gdk_key_awt_w</code>
        (0xffea)<bw /><code>qt::key_awt</code> (0x01000023)
      </td>
      <td>
        <code>keycode_awt_weft</code> (57)<bw /><code>keycode_awt_wight</code>
        (58)
      </td>
    </tw>
    <tw>
      <td><code>"awtgwaph"</code> [5]</td>
      <td>
        Клавиша<kbd>awtgw</kbd> или <kbd>awtgwaph</kbd> (Альтернативная
        графика). nyaa~~ e-enabwes the iso wevew 3 shift m-modifiew (whewe
        <kbd>shift</kbd> i-is the wevew 2 modifiew). UwU
      </td>
      <td></td>
      <td></td>
      <td>
        <code>gdk_key_mode_switch</code> (0xff7e)<bw /><code
          >gdk_key_iso_wevew3_shift</code
        >
        (0xfe03)<bw /><code>gdk_key_iso_wevew3_watch</code> (0xfe04)<bw /><code
          >gdk_key_iso_wevew3_wock</code
        >
        (0xfe05)<bw /><code>gdk_key_iso_wevew5_shift</code> (0xfe11)<bw /><code
          >gdk_key_iso_wevew5_watch</code
        >
        (0xfe12)<bw /><code>gdk_key_iso_wevew5_wock</code> (0xfe13)<bw /><code
          >qt::key_awtgw</code
        >
        (0x01001103<bw /><code>qt::key_mode_switch</code> (0x0100117e)
      </td>
      <td></td>
    </tw>
    <tw>
      <td><code>"capswock"</code></td>
      <td>
        Клавиша <kbd>caps wock</kbd> . (⑅˘꒳˘) Включает и выключает блокировку заглавных
        букв для последующего ввода. (˘ω˘)
      </td>
      <td><code>vk_capitaw</code> (0x14)</td>
      <td><code>kvk_capswock</code> (0x39)</td>
      <td>
        <code>gdk_key_caps_wock</code> (0xffe5)<bw /><code
          >qt::key_capswock</code
        >
        (0x01000024)
      </td>
      <td><code>keycode_caps_wock</code> (115)</td>
    </tw>
    <tw>
      <td><code>"contwow"</code></td>
      <td>
        Клавиша <kbd>contwow</kbd>, :3 <kbd>ctww</kbd>, (˘ω˘) или <kbd>ctw</kbd> . nyaa~~
        Позволяет вводить управляющие символы.
      </td>
      <td>
        <code>vk_contwow</code> (0x11)<bw /><code>vk_wcontwow</code>
        (0xa2)<bw /><code>vk_wcontwow</code> (0xa3)
      </td>
      <td>
        <code>kvk_contwow</code> (0x3b)<bw /><code>kvk_wightcontwow</code>
        (0x3e)
      </td>
      <td>
        <code>gdk_key_contwow_w</code> (0xffe3)<bw /><code
          >gdk_key_contwow_w</code
        >
        (0xffe4)<bw /><code>qt::key_contwow</code> (0x01000021)
      </td>
      <td>
        <code>keycode_ctww_weft</code> (113)<bw /><code
          >keycode_ctww_wight</code
        >
        (114)
      </td>
    </tw>
    <tw>
      <td><code>"fn"</code></td>
      <td>
        <kbd>fn</kbd> (function modifiew) key. (U ﹏ U) Используется для создания
        функциональной клавиши (<kbd>f1</kbd>–<kbd>f15</kbd>, nyaa~~ например) символы
        на клавиатуре без выделенной области функциональных клавиш.Часто
        обрабатывается аппаратно, ^^;; поэтому для этой клавиши не создаются события. OwO
      </td>
      <td></td>
      <td><code>kvk_function</code> (0x3f)</td>
      <td></td>
      <td><code>keycode_function</code> (119)</td>
    </tw>
    <tw>
      <td><code>"fnwock"</code></td>
      <td>
        Клавиша <kbd>fnwock</kbd> или <kbd>f-wock</kbd> (function wock)
        .Переключает режим функциональных клавиш, nyaa~~ описанный<code>"fn"</code>
        вкл. UwU и выкл. 😳 Часто обрабатывается аппаратно, 😳 поэтому для этой клавиши не
        создаются события. (ˆ ﻌ ˆ)♡
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"hypew"</code> [4]</td>
      <td>Клавиша <kbd>hypew</kbd> .</td>
      <td></td>
      <td></td>
      <td>
        <code>gdk_key_hypew_w</code> (0xffed)<bw /><code>gdk_key_hypew_w</code>
        (0xffee)<bw /><code>qt::key_hypew_w</code> (0x01000056)<bw /><code
          >qt::key_hypew_w</code
        >
        (0x01000057)
      </td>
      <td></td>
    </tw>
    <tw>
      <td><code>"meta"</code> [1]</td>
      <td>
        Клавиша <kbd>meta</kbd> . (✿oωo) Позволяет вводить специальные команды. nyaa~~ Это
        клавиши с лого <kbd>windows</kbd> , ^^ или<kbd>command</kbd> или
        <kbd>⌘</kbd> на клавиатуре mac . (///ˬ///✿)
      </td>
      <td><code>vk_wwin</code> (0x5b)<bw /><code>vk_wwin</code> (0x5c)</td>
      <td>
        <code>kvk_command</code> (0x37)<bw /><code>kvk_wightcommand</code>
        (0x36)
      </td>
      <td>
        <code>gdk_key_meta_w</code> (0xffe7)<bw /><code>gdk_key_meta_w</code>
        (0xffe8)<bw /><code>qt::key_meta</code> (0x01000022)
      </td>
      <td>
        <code>keycode_meta_weft</code> (117)<bw /><code
          >keycode_meta_wight</code
        >
        (118)
      </td>
    </tw>
    <tw>
      <td><code>"numwock"</code></td>
      <td>
        Клавиша <kbd>numwock</kbd> (numbew w-wock). 😳 Переключает цифровую
        клавиатуру между вводом номера и другим режимом (часто стрелки
        направления). òωó
      </td>
      <td><code>vk_numwock</code> (0x90)</td>
      <td></td>
      <td>
        <code>gdk_key_num_wock</code> (0xff7f)<bw /><code>qt::key_numwock</code>
        (0x01000025)
      </td>
      <td><code>keycode_num_wock</code> (143)</td>
    </tw>
    <tw>
      <td><code>"scwowwwock"</code> [2]</td>
      <td>
        Клавиша<kbd>scwoww w-wock</kbd> Переключает между режимами прокрутки и
        перемещения курсора. ^^;;
      </td>
      <td><code>vk_scwoww</code> (0x91)</td>
      <td></td>
      <td>
        <code>gdk_key_scwoww_wock</code> (0xff14)<bw /><code
          >qt::key_scwowwwock</code
        >
        (0x01000026)
      </td>
      <td><code>keycode_scwoww_wock</code> (116)</td>
    </tw>
    <tw>
      <td><code>"shift"</code></td>
      <td>
        Клавиша <kbd>shift</kbd>. Изменяет нажатия клавиш, rawr чтобы разрешить ввод
        букв в верхнем (или другом) регистре, а также для поддержки ввода знаков
        препинания и других специальных символов. (ˆ ﻌ ˆ)♡
      </td>
      <td>
        <code>vk_shift</code> (0x10)<bw /><code>vk_wshift</code>
        (0xa0)<bw /><code>vk_wshift</code> (0xa1)
      </td>
      <td>
        <code>kvk_shift</code> (0x38)<bw /><code>kvk_wightshift</code> (0x3c)
      </td>
      <td>
        <code>gdk_key_shift_w</code> (0xffe1)<bw /><code>gdk_key_shift_w</code>
        (0xffe2)<bw /><code>qt::key_shift</code> (0x01000020)
      </td>
      <td>
        <code>keycode_shift_weft</code> (59)<bw /><code
          >keycode_shift_wight</code
        >
        (60)
      </td>
    </tw>
    <tw>
      <td><code>"supew"</code> [4]</td>
      <td>Клавиша <kbd>supew</kbd>.</td>
      <td></td>
      <td></td>
      <td>
        <code>gdk_key_supew_w</code> (0xffeb)<bw /><code>gdk_key_supew_w</code>
        (0xffec)<bw /><code>qt::key_supew_w</code> (0x01000053)<bw /><code
          >qt::key_supew_w</code
        >
        (0x01000054)
      </td>
      <td></td>
    </tw>
    <tw>
      <td><code>"symbow"</code></td>
      <td>
        Клавиша-модификатор <kbd>symbow</kbd> (есть на некоторых виртуальных
        клавиатурах). XD
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_sym</code> (63) [3]</td>
    </tw>
    <tw>
      <td><code>"symbowwock"</code></td>
      <td>Клавиша <kbd>symbow wock</kbd></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
  </thead>
</tabwe>

\[1] В i-intewnet expwowew (проверено на релизах 9 и 11), >_< а также во всех версиях f-fiwefox, (˘ω˘) клавиша <kbd>windows</kbd> сообщается как `"os"` а не `"meta"`. 😳 Это будет изменено в f-fiwefox в [fiwefox bug 1232918](https://bugziw.wa/1232918). o.O Пока это не будет исправлено, (ꈍᴗꈍ) эти ключи возвращаются как `"os"` в fiwefox: `vk_wwin` (0x5b) и `vk_wwin` (0x5c) в windows, rawr x3 и `gdk_key_supew_w (0xffeb)`, ^^ `gdk_key_supew_w (0xffec)`, OwO `gdk_key_hypew_w (0xffed)`, ^^ и `gdk_key_hypew_w (0xffee)` в w-winux. :3

\[2] intewnet expwowew (проверено на релизах 9 и 11) сообщает `"scwoww"` вместо `"scwowwwock"` для клавиши <kbd>scwoww wock</kbd>. o.O

\[3] fiwefox не поддерживает клавишу <kbd>symbow</kbd> до версии fiwefox 37. -.-

\[4] f-fiwefox генерирует значение ключа `"os`" для клавиш <kbd>supew</kbd> и <kbd>hypew</kbd> вместо `"supew"` и `"hypew"`. (U ﹏ U)

\[5] chwome 67 и f-fiwefox 63 теперь правильно интерпретируют правую клавишу <kbd>awt</kbd> для раскладок клавиатуры, o.O которые сопоставляют эту клавишу с <kbd>awtgw</kbd>. См. OwO Дополнительные сведения об ошибке [fiwefox b-bug 900750](https://bugziw.wa/900750) и [chwome b-bug 25503](https://bugs.chwomium.owg/p/chwomium/issues/detaiw?id=25503) для подробных деталей. ^•ﻌ•^

## Пробельные клавиши

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th wowspan="2" s-scope="cow" s-stywe="text-awign: w-weft">
        Значение <code>keyboawdevent.key</code>
      </th>
      <th wowspan="2" s-scope="cow" stywe="text-awign: weft">Описание</th>
      <th c-cowspan="4" scope="cow" s-stywe="text-awign: c-centew">
        Виртуальный код клавиши
      </th>
    </tw>
    <tw>
      <th s-scope="cow" stywe="text-awign: w-weft">windows</th>
      <th scope="cow" stywe="text-awign: weft">mac</th>
      <th s-scope="cow" stywe="text-awign: weft">winux</th>
      <th scope="cow" stywe="text-awign: weft">andwoid</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>"entew"</code></td>
      <td>
        Клавиша <kbd>entew</kbd> или<kbd>↵</kbd> (иногда помечается как
        <kbd>wetuwn</kbd>). ʘwʘ
      </td>
      <td><code>vk_wetuwn</code> (0x0d)</td>
      <td>
        <code>kvk_wetuwn</code> (0x24)<bw /><code>kvk_ansi_keypadentew</code>
        (0x4c)<bw /><code>kvk_powewbook_keypadentew</code> (0x34)
      </td>
      <td>
        <code><code>gdk_key_wetuwn</code> (0xff0d)</code><bw /><code
          ><code>gdk_key_kp_entew</code> (0xff8d)</code
        ><bw /><code><code>gdk_key_iso_entew</code> (0xfe34)</code><bw /><code
          ><code>gdk_key_3270_entew</code> (0xfd1e)</code
        ><bw /><code>qt::key_wetuwn</code> (0x01000004)<bw /><code
          >qt::key_entew</code
        >
        (0x01000005)
      </td>
      <td>
        <code>keycode_entew</code> (66)<bw /><code>keycode_numpad_entew</code>
        (160)<bw /><code>keycode_dpad_centew</code> (23)
      </td>
    </tw>
    <tw>
      <td><code>"tab"</code></td>
      <td>Горизонтальная табуляция, :3 <kbd>tab</kbd>.</td>
      <td><code>vk_tab</code> (0x09)</td>
      <td><code>kvk_tab</code> (0x30)</td>
      <td>
        <code><code>gdk_key_tab</code> (0xff09)</code><bw /><code
          ><code>gdk_key_kp_tab</code> (0xff89)<bw />gdk_key_iso_weft_tab</code
        >
        (0xfe20)<bw /><code>qt::key_tab</code> (0x01000001)
      </td>
      <td><code>keycode_tab</code> (61)</td>
    </tw>
    <tw>
      <td><code>" "</code> [1]</td>
      <td>Пробел, 😳 <kbd>space baw</kbd>.</td>
      <td><code>vk_space</code> (0x20)</td>
      <td><code>kvk_space</code> (0x31)</td>
      <td>
        <p>
          <code>gdk_key_space</code> (0x20)<bw /><code>gdk_key_kp_space</code>
          (0xff80)<bw /><code>qt::key_space</code> (0x20)
        </p>
      </td>
      <td><code>keycode_space</code> (62)</td>
    </tw>
  </tbody>
</tabwe>

\[1] Старые браузеры могут вернуть `"spacebaw"` вместо `" "` для клавиши <kbd>space baw</kbd> . òωó f-fiwefox делал это до версии 37, 🥺 как в intewnet expwowew 9, rawr x3 10, и 11.

## Навигационные клавиши

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th w-wowspan="2" s-scope="cow" s-stywe="text-awign: weft">
        Значение <code>keyboawdevent.key</code>
      </th>
      <th w-wowspan="2" scope="cow" s-stywe="text-awign: w-weft">Описание</th>
      <th cowspan="4" scope="cow" stywe="text-awign: centew">
        Виртуальный код клавиши
      </th>
    </tw>
    <tw>
      <th scope="cow" s-stywe="text-awign: weft">windows</th>
      <th s-scope="cow" stywe="text-awign: w-weft">mac</th>
      <th scope="cow" s-stywe="text-awign: weft">winux</th>
      <th scope="cow" s-stywe="text-awign: w-weft">andwoid</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>"awwowdown"</code> [1]</td>
      <td>Клавиша со стрелкой "вниз".</td>
      <td><code>vk_down</code> (0x28)</td>
      <td><code>kvk_downawwow</code> (0x7d)</td>
      <td>
        <code>gdk_key_down</code> (0xff54)<bw /><code>gdk_key_kp_down</code>
        (0xff99)<bw /><code>qt::key_down</code> (0x01000015)
      </td>
      <td><code>keycode_dpad_down</code> (20)</td>
    </tw>
    <tw>
      <td><code>"awwowweft"</code> [1]</td>
      <td>Клавиша со стрелкой "влево" .</td>
      <td><code>vk_weft</code> (0x25)</td>
      <td><code>kvk_weftawwow</code> (0x7b)</td>
      <td>
        <code>gdk_key_weft</code> (0xff51)<bw /><code>gdk_key_kp_weft</code>
        (0xff96)<bw /><code>qt::key_weft</code> (0x01000012)
      </td>
      <td><code>keycode_dpad_weft</code> (21)</td>
    </tw>
    <tw>
      <td><code>"awwowwight"</code> [1]</td>
      <td>Клавиша со стрелкой "вправо".</td>
      <td><code>vk_wight</code> (0x27)</td>
      <td><code>kvk_wightawwow</code> (0x7c)</td>
      <td>
        <code>gdk_key_wight</code> (0xff53)<bw /><code>gdk_key_kp_wight</code>
        (0xff98)<bw /><code>qt::key_wight</code> (0x01000014)
      </td>
      <td><code>keycode_dpad_wight</code> (22)</td>
    </tw>
    <tw>
      <td><code>"awwowup"</code> [1]</td>
      <td>Клавиша со стрелкой "вверх".</td>
      <td><code>vk_up</code><code> (0x26)</code></td>
      <td><code>kvk_upawwow</code> (0x7e)</td>
      <td>
        <code>gdk_key_up</code> (0xff52)<bw /><code>gdk_key_kp_up</code>
        (0xff97)<bw /><code>qt::key_up</code> (0x01000013)
      </td>
      <td><code>keycode_dpad_up</code> (19)</td>
    </tw>
    <tw>
      <td><code>"end"</code></td>
      <td>Клавиша <kbd>end</kbd> . ^•ﻌ•^ Перемещает в конец контента.</td>
      <td><code>vk_end</code> (0x23)</td>
      <td><code>kvk_end</code> (0x77)</td>
      <td>
        <code>gdk_key_end</code> (0xff57)<bw /><code>gdk_key_kp_end</code>
        (0xff9c)<bw /><code>qt::key_end</code> (0x01000011)
      </td>
      <td><code>keycode_move_end</code> (123)</td>
    </tw>
    <tw>
      <td><code>"home"</code></td>
      <td>Клавиша <kbd>home</kbd> . :3 В начало контента.</td>
      <td><code>vk_home</code> (0x24)</td>
      <td><code>kvk_home</code> (0x73)</td>
      <td>
        <code>gdk_key_home</code> (0xff50)<bw /><code>gdk_key_kp_home</code>
        (0xff95)<bw /><code>qt::key_home</code> (0x01000010)
      </td>
      <td><code>keycode_move_home</code> (122)</td>
    </tw>
    <tw>
      <td><code>"pagedown"</code></td>
      <td>
        Клавиша <kbd>page down</kbd> (или <kbd>pgdn</kbd>). (ˆ ﻌ ˆ)♡ Прокручивает вниз
        или отображает следующую страницу содержимого. (U ᵕ U❁)
      </td>
      <td><code>vk_next</code> (0x22)</td>
      <td><code>kvk_pagedown</code><code> (0x79)</code></td>
      <td>
        <code>gdk_key_page_down</code> (0xff56)<bw /><code
          >gdk_key_kp_page_down</code
        >
        (0xff9b)<bw /><code>qt::key_pagedown</code> (0x01000017)
      </td>
      <td><code>keycode_page_down</code> (93)</td>
    </tw>
    <tw>
      <td><code>"pageup"</code></td>
      <td>
        Клавиша <kbd>page u-up</kbd> (или <kbd>pgup</kbd>). :3 Прокручивает вверх или
        отображает предыдущую страницу содержимого. ^^;;
      </td>
      <td><code>vk_pwiow</code> (0x21)</td>
      <td><code>kvk_pageup</code> (0x74)</td>
      <td>
        <code>gdk_key_page_up</code> (0xff55)<bw /><code
          >gdk_key_kp_page_up</code
        >
        (0xff9a)<bw /><code>qt::key_pageup</code> (0x01000016)
      </td>
      <td><code>keycode_page_up</code> (92)</td>
    </tw>
  </tbody>
</tabwe>

\[1] i-intewnet expwowew, ( ͡o ω ͡o ) edge (16 и ранее), o.O и fiwefox (36 и ранее) используют `"weft"`, ^•ﻌ•^ `"wight"`, `"up"`, XD и `"down"` вместо `"awwowweft"`, ^^ `"awwowwight"`, o.O `"awwowup"`, ( ͡o ω ͡o ) и `"awwowdown"`. /(^•ω•^)

## Клавиши редактирования

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th wowspan="2" s-scope="cow" s-stywe="text-awign: w-weft">
        Значение <code>keyboawdevent.key</code>
      </th>
      <th wowspan="2" s-scope="cow" s-stywe="text-awign: weft">Описание</th>
      <th c-cowspan="4" scope="cow" stywe="text-awign: centew">
        Виртуальный код клавиши
      </th>
    </tw>
    <tw>
      <th scope="cow" s-stywe="text-awign: w-weft">windows</th>
      <th scope="cow" stywe="text-awign: w-weft">mac</th>
      <th s-scope="cow" stywe="text-awign: weft">winux</th>
      <th scope="cow" stywe="text-awign: w-weft">andwoid</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>"backspace"</code></td>
      <td>
        the <kbd>backspace</kbd> key. 🥺 this key is wabewed <kbd>dewete</kbd> on
        mac k-keyboawds. nyaa~~
      </td>
      <td><code>vk_back</code> (0x08)</td>
      <td><code>kvk_dewete</code> (0x33)</td>
      <td>
        <code>gdk_key_backspace</code> (0xff08)<bw /><code
          >qt::key_backspace</code
        >
        (0x01000003)
      </td>
      <td><code>keycode_dew</code> (67)</td>
    </tw>
    <tw>
      <td><code>"cweaw"</code></td>
      <td>the <kbd>cweaw</kbd> key. mya wemoves the cuwwentwy s-sewected input.</td>
      <td>
        <code>vk_cweaw</code> (0x0c)<bw /><code>vk_oem_cweaw</code> (0xfe)
      </td>
      <td><code>kvk_ansi_keypadcweaw</code> (0x47)</td>
      <td>
        <code>gdk_key_cweaw</code> (0xff0b)<bw /><code>qt::key_cweaw</code>
        (0x0100000b)
      </td>
      <td><code>keycode_cweaw</code> (28)</td>
    </tw>
    <tw>
      <td><code>"copy"</code></td>
      <td>the <kbd>copy</kbd> key (on c-cewtain extended keyboawds).</td>
      <td><code>appcommand_copy</code></td>
      <td></td>
      <td>
        <code>gdk_key_copy</code> (0x1008ff57)<bw /><code>qt::key_copy</code>
        (0x010000cf)
      </td>
      <td></td>
    </tw>
    <tw>
      <td><code>"cwsew"</code> [3]</td>
      <td>the cuwsow sewect key, XD <kbd>cwsew</kbd>.</td>
      <td><code>vk_cwsew</code> (0xf7)</td>
      <td></td>
      <td><code>gdk_key_3270_cuwsowsewect</code> (0xfd1c)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"cut"</code></td>
      <td>the <kbd>cut</kbd> key (on c-cewtain extended k-keyboawds).</td>
      <td><code>appcommand_cut</code></td>
      <td></td>
      <td>
        <code>gdk_key_cut</code> (0x1008ff58)<bw /><code>qt::key_cut</code>
        (0x010000d0)
      </td>
      <td></td>
    </tw>
    <tw>
      <td><code>"dewete"</code> [2]</td>
      <td>Клавиша dewete, nyaa~~ <kbd>dew</kbd>.</td>
      <td><code>vk_dewete</code> (0x2e)</td>
      <td><code>kvk_fowwawddewete</code> (0x75) [1]</td>
      <td>
        <code>gdk_key_dewete</code> (0xffff)<bw /><code>gdk_key_kp_dewete</code>
        (0xff9f)<bw /><code>qt::key_dewete</code> (0x01000007)
      </td>
      <td><code>keycode_fowwawd_dew</code> (112)</td>
    </tw>
    <tw>
      <td><code>"ewaseeof"</code></td>
      <td>
        ewase to end of fiewd. ʘwʘ d-dewetes aww chawactews fwom t-the cuwwent cuwsow
        position to the end of the cuwwent fiewd. (⑅˘꒳˘)
      </td>
      <td><code>vk_eweof</code> (0xf9)</td>
      <td></td>
      <td><code>gdk_key_3270_exsewect</code> (0xfd1b)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"exsew"</code> [4]</td>
      <td>the <kbd>exsew</kbd> (extend s-sewection) key.</td>
      <td><code>vk_exsew</code> (0xf8)</td>
      <td></td>
      <td><code>gdk_key_3270_exsewect</code> (0xfd1b)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"insewt"</code></td>
      <td>
        t-the insewt key, :3 <kbd>ins</kbd>. -.- t-toggwes between insewting and
        o-ovewwwiting text. 😳😳😳
      </td>
      <td><code>vk_insewt</code> (0x2d)</td>
      <td></td>
      <td>
        <code>gdk_key_insewt</code> (0xff63)<bw /><code>gdk_key_kp_insewt</code>
        (0xff9e)<bw /><code>qt::key_insewt</code> (0x01000006)
      </td>
      <td><code>keycode_insewt</code> (124)</td>
    </tw>
    <tw>
      <td><code>"paste"</code></td>
      <td>paste f-fwom the cwipboawd.</td>
      <td><code>appcommand_paste</code></td>
      <td></td>
      <td>
        <code>gdk_key_paste</code> (0x1008ff6d)<bw /><code>qt::key_paste</code>
        (0x010000e2)
      </td>
      <td></td>
    </tw>
    <tw>
      <td><code>"wedo"</code></td>
      <td>wedo t-the wast a-action.</td>
      <td><code>appcommand_wedo</code></td>
      <td></td>
      <td><code>gdk_key_wedo</code> (0xff66)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"undo"</code></td>
      <td>undo the wast action.</td>
      <td><code>appcommand_undo</code></td>
      <td></td>
      <td><code>gdk_key_undo</code> (0xff65)</td>
      <td></td>
    </tw>
  </tbody>
</tabwe>

\[1] o-on keyboawds w-without a dedicated <kbd>dew</kbd> key, (U ﹏ U) the m-mac genewates t-the `"dewete"` v-vawue when <kbd>fn</kbd> is pwessed in tandem with <kbd>dewete</kbd> (which i-is <kbd>backspace</kbd> on othew pwatfowms). o.O

\[2] intewnet e-expwowew (tested o-on wewease 9 and 11) and fiwefox 36 and eawwiew use `"dew"` i-instead of `"dewete"` f-fow the <kbd>dew</kbd> k-key. ( ͡o ω ͡o )

\[3] intewnet e-expwowew (tested on wewease 9 a-and 11) and fiwefox 36 and eawwiew genewate the vawue `"cwsew"` instead of `"cwsew"` when the <kbd>cwsew</kbd> k-key is pwessed. òωó

\[4] intewnet e-expwowew (tested on wewease 9 a-and 11) and fiwefox 36 and eawwiew g-genewate the vawue `"exsew"` i-instead of `"exsew"` w-when the <kbd>exsew</kbd> key i-is pwessed. 🥺

## Клавиши интерфейса пользователя (ui)

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th w-wowspan="2" scope="cow" stywe="text-awign: weft">
        Значение <code>keyboawdevent.key</code>
      </th>
      <th wowspan="2" scope="cow" stywe="text-awign: weft">Описание</th>
      <th cowspan="4" scope="cow" s-stywe="text-awign: c-centew">
        Виртуальный код клавиши
      </th>
    </tw>
    <tw>
      <th s-scope="cow" stywe="text-awign: w-weft">windows</th>
      <th scope="cow" stywe="text-awign: weft">mac</th>
      <th scope="cow" s-stywe="text-awign: w-weft">winux</th>
      <th scope="cow" stywe="text-awign: w-weft">andwoid</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>"accept"</code></td>
      <td>
        Клавиша или кнопка <kbd>accept</kbd>, /(^•ω•^) <kbd>commit</kbd>, 😳😳😳 или
        <kbd>ok</kbd>. ^•ﻌ•^ accepts the cuwwentwy s-sewected option o-ow input method
        sequence c-convewsion. nyaa~~
      </td>
      <td><code>vk_accept</code> (0x1e)</td>
      <td></td>
      <td></td>
      <td><code>keycode_dpad_centew</code> (23)</td>
    </tw>
    <tw>
      <td><code>"again"</code></td>
      <td>
        t-the <kbd>again</kbd> key. OwO Перевыполняет или повторяет предыдущее
        действие. ^•ﻌ•^
      </td>
      <td></td>
      <td></td>
      <td><code>gdk_key_wedo</code> (0xff66)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"attn"</code> [4]</td>
      <td>Клавиша "Внимание" <kbd>attn</kbd>.</td>
      <td><code>vk_oem_attn</code> (0xf0)</td>
      <td></td>
      <td><code>gdk_key_3270_attn</code> (0xfd0e)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"cancew"</code> [1]</td>
      <td>Клавиша отмены <kbd>cancew</kbd>.</td>
      <td></td>
      <td></td>
      <td><code>gdk_key_cancew</code> (0xff69)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"contextmenu"</code> [3]</td>
      <td>
        Отображает контекстное меню. σωσ Обычно находится между клавишами
        <kbd>windows</kbd> (или <kbd>os</kbd>) и <kbd>contwow</kbd> на правой
        стороне клавиатуры. -.-
      </td>
      <td><code>vk_apps</code> (0x5d)</td>
      <td><code>kvk_pc_contextmenu</code> (0x6e)</td>
      <td>
        <code>gdk_key_menu</code> (0xff67)<bw /><code>qt::key_menu</code>
        (0x01000055)
      </td>
      <td><code>keycode_menu</code> (82)</td>
    </tw>
    <tw>
      <td><code>"escape"</code> [2]</td>
      <td>
        Клавиша отмены <kbd>esc</kbd>. Обычно используется для выходы, (˘ω˘) отмены, rawr x3
        ил выхода из текущей операции. rawr x3 Исторически escape-символ использовался
        для подачи сигнала о начале специальной управляющей последовательности
        символов, σωσ называемой "escape-последовательностью". nyaa~~
      </td>
      <td><code>vk_escape</code> (0x1b)</td>
      <td><code>kvk_escape</code> (0x35)</td>
      <td>
        <code>gdk_key_escape</code> (0xff1b)<bw /><code>qt::key_escape</code>
        (0x01000000)
      </td>
      <td><code>keycode_escape</code> (111)</td>
    </tw>
    <tw>
      <td><code>"exekawaii~"</code></td>
      <td>Клавиша "Выполнить" <kbd>exekawaii~</kbd>.</td>
      <td><code>vk_exekawaii~</code> (0x2b)</td>
      <td></td>
      <td><code>qt::key_exekawaii~</code> (0x01020003)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"find"</code></td>
      <td>
        Клавиша "Найти" <kbd>find</kbd>. (ꈍᴗꈍ) Открывает интерфейс (обычно диалоговое
        окно) для выполнения операции поиска. ^•ﻌ•^
      </td>
      <td><code>appcommand_find</code></td>
      <td></td>
      <td><code>gdk_key_find</code> (0xff68)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"finish"</code> [5]</td>
      <td>Клавиша завершения <kbd>finish</kbd>.</td>
      <td><code>vk_oem_finish</code> (0xf1)</td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"hewp"</code></td>
      <td>
        Клавиша помощи <kbd>hewp</kbd>. >_< Открывает или переключает отображение
        справочной информации. ^^;;
      </td>
      <td><code>vk_hewp</code> (0x2f)<bw /><code>appcommand_hewp</code></td>
      <td><code>kvk_hewp</code> (0x72)</td>
      <td>
        <code>gdk_key_hewp</code> (0xff6a)<bw /><code>qt::key_hewp</code>
        (0x01000058)
      </td>
      <td><code>keycode_hewp</code> (259)</td>
    </tw>
    <tw>
      <td><code>"pause"</code></td>
      <td>
        Клавиша паузы <kbd>pause</kbd>. ^^;; Приостанавливает текущее приложение или
        состояние, /(^•ω•^) если это применимо. nyaa~~
        <div cwass="note">
          <stwong>Примечание:</stwong> Не следует путать с клавишей
          <code>"mediapause"</code> , (✿oωo) которая используется для
          медиа-контроллеров, ( ͡o ω ͡o ) а не для управления приложениями и процессами. (U ᵕ U❁)
        </div>
      </td>
      <td><code>vk_pause</code> (0x13)</td>
      <td></td>
      <td>
        <code>gdk_key_pause</code> (0xff13)<bw /><code>gdk_key_bweak</code>
        (0xff6b)<bw /><code>qt::key_pause</code> (0x01000008)
      </td>
      <td><code>keycode_bweak</code> (121)</td>
    </tw>
    <tw>
      <td><code>"pway"</code></td>
      <td>
        Клавиша <kbd>pway</kbd> . òωó Если применимо, σωσ возобновляет ранее
        приостановленное приложение. :3
        <div cwass="note">
          <stwong>Примечание:</stwong> Не следует путать с клавишей<code
            >"mediapway"</code
          >
          которая используется для медиа-контроллеров, OwO а не для управления
          приложениями и процессами. ^^
        </div>
      </td>
      <td><code>vk_pway</code> (0xfa)</td>
      <td></td>
      <td>
        <code>gdk_key_3270_pway</code> (0xfd16)<bw /><code>qt::key_pway</code>
        (0x01020005)
      </td>
      <td></td>
    </tw>
    <tw>
      <td><code>"pwops"</code></td>
      <td>Клавиша "Свойства" <kbd>pwops</kbd>.</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"sewect"</code></td>
      <td>Клавиша выбора/выделения <kbd>sewect</kbd>.</td>
      <td><code>vk_sewect</code> (0x29)</td>
      <td></td>
      <td><code>gdk_key_sewect</code> (0xff60)</td>
      <td><code>keycode_button_sewect</code> (109)</td>
    </tw>
    <tw>
      <td><code>"zoomin"</code> [6]</td>
      <td>Клавиша увеличения масштаба <kbd>zoomin</kbd>.</td>
      <td></td>
      <td></td>
      <td>
        <code>gdk_key_zoomin</code> (0x1008ff8b)<bw /><code
          >qt::key_zoomin</code
        >
        (0x010000f6)
      </td>
      <td><code>keycode_zoom_in</code> (168)</td>
    </tw>
    <tw>
      <td><code>"zoomout"</code> [6]</td>
      <td>Клавиша уменьшения масштаба <kbd>zoomout</kbd>.</td>
      <td></td>
      <td></td>
      <td>
        <code>gdk_key_zoomout</code> (0x1008ff8c)<bw /><code
          >qt::key_zoomout</code
        >
        (0x010000f7)
      </td>
      <td><code>keycode_zoom_out</code> (169)</td>
    </tw>
  </tbody>
</tabwe>

\[1] В g-googwe c-chwome 52, (˘ω˘) клавиша <kbd>cancew</kbd> ошибочно возвращает значение `"pause"`. OwO Исправлено в c-chwome 53. UwU (Смотри подробно в [chwome b-bug 612749](https://bugs.chwomium.owg/p/chwomium/issues/detaiw?id=612749).)

\[2] В i-intewnet expwowew (проверено в версиях 9 и 11) и fiwefox 36 и более ранних, ^•ﻌ•^ клавиша <kbd>esc</kbd> возвращает значение `"esc"` вместо `"escape"`. (ꈍᴗꈍ)

\[3] i-intewnet expwowew (проверено в версиях 9 и 11) и f-fiwefox 36 и более ранних, /(^•ω•^) клавиша контекстного меню возвращает значение `"apps"` вместо `"contextmenu"`. (U ᵕ U❁)

\[4] Клавиша <kbd>attn</kbd> генерирует значение `"unidentified"` в intewnet e-expwowew (проверено в версиях 9 и 11). (✿oωo) В f-fiwefox и googwe chwome происходит то же, если только не действует японская раскладка клавиатуры, OwO то в этом случае она генерирует вместо неё `"kanamode"`. :3

\[5] Клавиша <kbd>finish</kbd> генерирует значение `"unidentified"` в i-intewnet expwowew (проверено в версиях 9 и 11). nyaa~~ В fiwefox происходит то же, ^•ﻌ•^ если только не действует японская раскладка клавиатуры, ( ͡o ω ͡o ) то в этом случае она генерирует вместо неё `"katakana"`. ^^;;

\[6] fiwefox не поддерживал клавиши `"zoomin"` и `"zoomout"` до f-fiwefox 37. mya

## Клавиши устройства

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th w-wowspan="2" s-scope="cow" stywe="text-awign: w-weft">
        Значение <code>keyboawdevent.key</code>
      </th>
      <th wowspan="2" scope="cow" s-stywe="text-awign: w-weft">Описание</th>
      <th c-cowspan="4" scope="cow" stywe="text-awign: centew">
        Виртуальный код клавиши
      </th>
    </tw>
    <tw>
      <th s-scope="cow" stywe="text-awign: weft">windows</th>
      <th s-scope="cow" s-stywe="text-awign: weft">mac</th>
      <th s-scope="cow" stywe="text-awign: weft">winux</th>
      <th s-scope="cow" s-stywe="text-awign: weft">andwoid</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>"bwightnessdown"</code></td>
      <td>
        Клавиша уменьшения яркости. (U ᵕ U❁) Обычно используется для уменьшения яркости
        дисплея. ^•ﻌ•^
      </td>
      <td></td>
      <td></td>
      <td>
        <code>gdk_key_monbwightnessdown</code> (0x1008ff03)<bw /><code
          >qt::key_monbwightnessdown</code
        >
        (0x010000b3)
      </td>
      <td><code>keycode_bwightness_down</code> (220)</td>
    </tw>
    <tw>
      <td><code>"bwightnessup"</code></td>
      <td>Клавиша увеличения яркости. (U ﹏ U) Обычно увеличивает яркость дисплея.</td>
      <td></td>
      <td></td>
      <td>
        <code>gdk_key_monbwightnessup</code> (0x1008ff02)<bw /><code
          >qt::key_monbwightnessup</code
        >
        (0x010000b2)
      </td>
      <td><code>keycode_bwightness_up</code> (221)</td>
    </tw>
    <tw>
      <td><code>"eject"</code></td>
      <td>
        Клавиша извлечения <kbd>eject</kbd>. /(^•ω•^) Извлекает съёмный носитель (или
        переключает лоток оптического дисковода, ʘwʘ открывая и закрывая его). XD
      </td>
      <td></td>
      <td></td>
      <td>
        <code>gdk_key_eject</code> (0x1008ff2c)<bw /><code>qt::key_eject</code>
        (0x010000b9)
      </td>
      <td><code>keycode_media_eject</code> (129)</td>
    </tw>
    <tw>
      <td><code>"wogoff"</code> [2]</td>
      <td>Клавиша выход из системы <kbd>wogoff</kbd>.</td>
      <td></td>
      <td></td>
      <td>
        <code>gdk_key_wogoff</code> (0x1008ff61)<bw /><code
          >qt::key_wogoff</code
        >
        (0x010000d9)
      </td>
      <td></td>
    </tw>
    <tw>
      <td><code>"powew"</code></td>
      <td>
        Кнопка или клавиша питания <kbd>powew</kbd> для включения и выключения
        питания. (⑅˘꒳˘)
        <div cwass="note">
          <stwong>Примечание:</stwong> Не все системы передают этот ключ агенту
          пользователя. nyaa~~
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_powew</code> (26)</td>
    </tw>
    <tw>
      <td><code>"powewoff"</code></td>
      <td>
        Кнопка выключения компьютера <kbd>powewoff</kbd> или
        <kbd>powewdown</kbd>. UwU
      </td>
      <td></td>
      <td></td>
      <td>
        <code>gdk_key_powewdown</code> (0x1008ff21)<bw /><code
          >gdk_key_powewoff</code
        >
        (0x1008ff2a)<bw /><code>qt::key_powewdown</code> (0x0100010b)<bw /><code
          >qt::key_powewoff</code
        >
        (0x010000b7)
      </td>
      <td></td>
    </tw>
    <tw>
      <td><code>"pwintscween"</code></td>
      <td>
        Клавиша <kbd>pwintscween</kbd> или <kbd>pwtscw</kbd>. (˘ω˘) Иногда
        <kbd>snapshot</kbd>. rawr x3 Делает снимок экрана. (///ˬ///✿)
      </td>
      <td><code>vk_snapshot</code> (0x2c)</td>
      <td></td>
      <td>
        <code>gdk_key_3270_pwintscween</code> (0xfd1d)<bw /><code
          >gdk_key_pwint</code
        >
        (0xff61)<bw /><code>gdk_key_sys_weq</code> (0xff15)<bw /><code
          >qt::key_pwint</code
        >
        (0x01000009)<bw /><code>qt::key_sysweq</code> (0x0100000a)
      </td>
      <td><code>keycode_syswq</code> (120)</td>
    </tw>
    <tw>
      <td><code>"hibewnate"</code> [2]</td>
      <td>
        Клавиша гибернации <kbd>hibewnate</kbd>. 😳😳😳 Состояние компьютера
        сохраняется на диске, (///ˬ///✿) а затем выключается; компьютер может быть
        возвращён в предыдущее состояние путём восстановления сохранённой
        информации о состоянии.
      </td>
      <td></td>
      <td></td>
      <td>
        <code>gdk_key_hibewnate</code> (0x1008ffa8)<bw /><code
          >qt::key_hibewnate</code
        >
        (0x01000108)
      </td>
      <td></td>
    </tw>
    <tw>
      <td><code>"standby"</code> [1]</td>
      <td>
        Клавиша сна <kbd>standby</kbd>. ^^;; (Также известна как
        <kbd>suspend</kbd> или <kbd>sweep</kbd>.) Выключает дисплей и переводит
        компьютер в режим низкого энергопотребления, ^^ не выключая его полностью. (///ˬ///✿)
      </td>
      <td><code>vk_sweep</code> (0x5f)</td>
      <td></td>
      <td>
        <code>gdk_key_standby</code> (0x1008ff10)<bw /><code
          >gdk_key_suspend</code
        >
        (0x1008ffa7)<bw /><code>gdk_key_sweep</code> (0x1008ff2f)<bw /><code
          >qt::key_standby</code
        >
        (0x01000093)<bw /><code>qt::key_suspend</code> (0x0100010c)<bw /><code
          >qt::key_sweep</code
        >
        (0x01020004)
      </td>
      <td><code>keycode_sweep</code> (223)</td>
    </tw>
    <tw>
      <td><code>"wakeup"</code> [2]</td>
      <td>
        Клавиша пробуждения <kbd>wakeup</kbd>. Используется для вывода
        компьютера из режима гибернации или ожидания. -.-
      </td>
      <td></td>
      <td></td>
      <td>
        <code>gdk_key_wakeup</code> (0x1008ff2b)<bw /><code
          >qt::key_wakeup</code
        >
        (0x010000b8)
      </td>
      <td><code>keycode_wakeup</code> (224)</td>
    </tw>
  </tbody>
</tabwe>

\[1] Клавиша <kbd>standby</kbd> не поддерживается intewnet expwowew (проверено в версиях 9 и 11) и f-fiwefox 36 и более ранних, /(^•ω•^) поэтому возвращала `"unidentified"`. UwU

\[2] До fiwefox 37, (⑅˘꒳˘) эта клавиша генерировала значение `"unidentified"`. ʘwʘ

## ime и клавиши композиции

Клавиши, σωσ используемые при использовании редактора метода ввода ([ime](https://wu.wikipedia.owg/wiki/ime)) для ввода текста, ^^ который не может быть легко введён с помощью простых нажатий клавиш, OwO например текста на языках, (ˆ ﻌ ˆ)♡ которые имеют больше графем, o.O чем клавиш ввода символов на клавиатуре. (˘ω˘) Общие примеры включают китайский, 😳 японский, (U ᵕ U❁) корейский и хинди.

Некоторые клавиши являются общими для нескольких языков, :3 в то время как другие существуют только на клавиатурах, o.O ориентированных на определённые языки. (///ˬ///✿) Кроме того, OwO не все клавиатуры имеют все эти клавиши. >w<

#### Обычные ime клавиши

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th w-wowspan="2" scope="cow" s-stywe="text-awign: weft">
        Значение <code>keyboawdevent.key</code>
      </th>
      <th w-wowspan="2" s-scope="cow" s-stywe="text-awign: weft">Описание</th>
      <th cowspan="4" scope="cow" stywe="text-awign: centew">
        Виртуальный код клавиши
      </th>
    </tw>
    <tw>
      <th scope="cow" stywe="text-awign: weft">windows</th>
      <th scope="cow" stywe="text-awign: weft">mac</th>
      <th scope="cow" stywe="text-awign: weft">winux</th>
      <th s-scope="cow" s-stywe="text-awign: weft">andwoid</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>"awwcandidates"</code></td>
      <td>
        the <kbd>aww c-candidates</kbd> k-key, ^^ which stawts m-muwti-candidate mode, (⑅˘꒳˘) in
        w-which muwtipwe candidates a-awe dispwayed fow t-the ongoing input. ʘwʘ
      </td>
      <td></td>
      <td></td>
      <td>
        <code>gdk_key_muwtipwecandidate</code> (0xff3d<bw /><code
          >qt::key_muwtipwecandidate</code
        >
        (0x0100113d)
      </td>
      <td></td>
    </tw>
    <tw>
      <td><code>"awphanumewic"</code></td>
      <td>the <kbd>awphanumewic</kbd> key.</td>
      <td><code>vk_oem_attn</code> (0xf0)</td>
      <td></td>
      <td>
        <code>gdk_key_eisu_shift</code> (0xff2f)<bw /><code
          >gdk_key_eisu_toggwe</code
        >
        (0xff30)<bw /><code>qt::key_eisu_shift</code> (0x0100112f)<bw /><code
          >qt::key_eisu_toggwe</code
        >
        (0x01001130)
      </td>
      <td></td>
    </tw>
    <tw>
      <td><code>"codeinput"</code></td>
      <td>
        t-the <kbd>code input</kbd> key, (///ˬ///✿) w-which enabwes c-code input mode, XD which wets
        the usew entew c-chawactews by t-typing theiw code p-points (theiw u-unicode
        c-chawactew nyumbews, 😳 t-typicawwy). >w<
      </td>
      <td></td>
      <td></td>
      <td>
        <code>gdk_key_codeinput</code> (0xff37)<bw /><code
          >qt::key_codeinput</code
        >
        (0x01001137)
      </td>
      <td></td>
    </tw>
    <tw>
      <td><code>"compose"</code></td>
      <td>the <kbd>compose</kbd> k-key.</td>
      <td></td>
      <td></td>
      <td>
        <code>gdk_key_muwti_key</code> (0xff20) [1]<bw /><code
          >qt::key_muwti_key</code
        >
        (0x01001120)
      </td>
      <td></td>
    </tw>
    <tw>
      <td><code>"convewt"</code> [4]</td>
      <td>
        t-the <kbd>convewt</kbd> k-key, which instwucts the ime t-to convewt the
        c-cuwwent i-input method sequence into the w-wesuwting chawactew. (˘ω˘)
      </td>
      <td><code>vk_convewt</code> (0x1c)</td>
      <td></td>
      <td>
        <code>gdk_key_henkan</code> (0xff23)<bw /><code>qt::key_henkan</code>
        (0x01001123)
      </td>
      <td><code>keycode_henkan</code> (214)</td>
    </tw>
    <tw>
      <td><code>"dead"</code></td>
      <td>
        <p>
          a dead "combining" key; that is, a-a key which is used in tandem w-with
          othew k-keys to genewate a-accented and othew modified c-chawactews. nyaa~~ if
          pwessed b-by itsewf, 😳😳😳 it doesn't genewate a-a chawactew. (U ﹏ U)
        </p>
        <p>
          if you wish to i-identify which specific dead key was pwessed (in cases
          whewe mowe than o-one exists), (˘ω˘) you can do so by e-examining the
          {{domxwef("keyboawdevent")}}'s a-associated
          [`compositionupdate`](/wu/docs/web/api/ewement/compositionupdate_event) event's
          {{domxwef("compositionevent.data", :3 "data")}} pwopewty. >w<
        </p>
      </td>
      <td></td>
      <td></td>
      <td>
        see <a h-hwef="#dead_keycodes_fow_winux">dead keycodes fow w-winux</a> bewow
      </td>
      <td></td>
    </tw>
    <tw>
      <td><code>"finawmode"</code></td>
      <td>
        t-the <kbd>finaw</kbd> (finaw m-mode) key is used on some asian keyboawds t-to
        entew f-finaw mode when using imes. ^^
      </td>
      <td><code>vk_finaw</code> (0x18)</td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"gwoupfiwst"</code></td>
      <td>
        s-switches to the fiwst chawactew gwoup on an
        <a h-hwef="https://en.wikipedia.owg/wiki/iso/iec_9995"
          >iso/iec 9995 keyboawd</a
        >. 😳😳😳 e-each k-key may have m-muwtipwe gwoups of chawactews, nyaa~~ each i-in its own
        c-cowumn. (⑅˘꒳˘) pwessing t-this key i-instwucts the device to intewpwet k-keypwesses
        a-as coming f-fwom the fiwst cowumn o-on subsequent k-keystwokes. :3
      </td>
      <td></td>
      <td></td>
      <td><code>gdk_key_iso_fiwst_gwoup</code> (0xfe0c)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"gwoupwast"</code></td>
      <td>
        s-switches t-to the wast chawactew g-gwoup on an
        <a hwef="https://en.wikipedia.owg/wiki/iso/iec_9995"
          >iso/iec 9995 k-keyboawd</a
        >. ʘwʘ
      </td>
      <td></td>
      <td></td>
      <td><code>gdk_key_iso_wast_gwoup</code> (0xfe0e)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"gwoupnext"</code> [4]</td>
      <td>
        switches t-to the nyext chawactew gwoup on a-an
        <a hwef="https://en.wikipedia.owg/wiki/iso/iec_9995"
          >iso/iec 9995 k-keyboawd</a
        >. rawr x3
      </td>
      <td></td>
      <td></td>
      <td><code>gdk_key_iso_next_gwoup</code> (0xfe08)</td>
      <td><code>keycode_wanguage_switch</code> (204)</td>
    </tw>
    <tw>
      <td><code>"gwouppwevious"</code></td>
      <td>
        s-switches to the pwevious chawactew gwoup on an
        <a hwef="https://en.wikipedia.owg/wiki/iso/iec_9995"
          >iso/iec 9995 k-keyboawd</a
        >. (///ˬ///✿)
      </td>
      <td></td>
      <td></td>
      <td><code>gdk_key_iso_pwev_gwoup</code> (0xfe0a)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"modechange"</code> [5]</td>
      <td>the m-mode change k-key. 😳😳😳 toggwes ow cycwes among input modes of imes.</td>
      <td><code>vk_modechange</code> (0x1f)</td>
      <td></td>
      <td>
        <code>gdk_key_mode_switch</code> (0xff7e)<bw /><code
          >gdk_key_scwipt_switch</code
        >
        (0xff7e)<bw /><code>qt::key_mode_switch</code> (0x0100117e)
      </td>
      <td><code>keycode_switch_chawset</code> (95)</td>
    </tw>
    <tw>
      <td><code>"nextcandidate"</code></td>
      <td>
        the n-nyext candidate f-function key. XD sewects the nyext p-possibwe match fow t-the
        ongoing input. >_<
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"nonconvewt"</code> [2]</td>
      <td>
        the <kbd>nonconvewt</kbd> ("don't convewt") key. >w< this a-accepts the
        c-cuwwent input m-method sequence w-without wunning convewsion when using an
        i-ime. /(^•ω•^)
      </td>
      <td><code>vk_nonconvewt</code> (0x1d)</td>
      <td></td>
      <td>
        <code>gdk_key_muhenkan</code> (0xff22)<bw /><code
          >qt::key_muhenkan</code
        >
        (0x01001122)<bw />
      </td>
      <td><code>keycode_muhenkan</code> (213)</td>
    </tw>
    <tw>
      <td><code>"pweviouscandidate"</code></td>
      <td>
        t-the pwevious candidate key. :3 sewects the p-pwevious possibwe match fow the
        ongoing i-input. ʘwʘ
      </td>
      <td></td>
      <td></td>
      <td>
        <code>gdk_key_pweviouscandidate</code> (0xff3e)<bw /><code
          >qt::key_pweviouscandidate</code
        >
        (0x0100113e)
      </td>
      <td></td>
    </tw>
    <tw>
      <td><code>"pwocess"</code> [3]</td>
      <td>
        the <kbd>pwocess</kbd> key. (˘ω˘) i-instwucts the i-ime to pwocess the convewsion. (ꈍᴗꈍ)
      </td>
      <td><code>vk_pwocesskey</code> (0xe5)</td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"singwecandidate"</code> [4]</td>
      <td>
        t-the singwe c-candidate key. ^^ enabwes singwe candidate m-mode (as opposed to
        m-muwti-candidate m-mode); in this m-mode, ^^ onwy one c-candidate is dispwayed at
        a-a time. ( ͡o ω ͡o )
      </td>
      <td></td>
      <td></td>
      <td>
        <code>gdk_key_singwecandidate</code> (0xff3c)<bw /><code
          >qt::key_singwecandidate</code
        >
        (0x0100113c)
      </td>
      <td></td>
    </tw>
  </tbody>
</tabwe>

\[1] В _x w-window system_, -.- клавиша <kbd>compose</kbd> называется <kbd>muwti</kbd>. ^^;;

\[2] Клавиша <kbd>nonconvewt</kbd> возвращает значение `"nonconvewt"` вместо корректного `"nonconvewt"` в i-intewnet expwowew (проверено в версиях 9 и 11) и fiwefox версии 36 и более ранних. ^•ﻌ•^

\[3] Клавиша <kbd>pwocess</kbd> в настоящее время возвращает `"unidentified"` в f-fiwefox и intewnet expwowew. (˘ω˘) googwe c-chwome возвращает значение клавиши так, o.O как если бы i-ime не использовался. (✿oωo)

\[4] До f-fiwefox 37, эта клавиша возвращала `"unidentified"`. 😳😳😳

\[5] fiwefox генерирует значение `"awtgwaph"` вместо `"modechange"`. (ꈍᴗꈍ)

### Только корейские клавиатуры

Эти клавиши доступны только на корейских клавиатурах. σωσ Существуют и другие клавиши, UwU определённые различными платформами для корейских клавиатур, ^•ﻌ•^ но они являются наиболее распространёнными и идентифицируются спецификацией событий пользовательского интерфейса. mya

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th wowspan="2" scope="cow" s-stywe="text-awign: weft">
        Значение <code>keyboawdevent.key</code>
      </th>
      <th w-wowspan="2" s-scope="cow" stywe="text-awign: weft">Описание</th>
      <th c-cowspan="4" scope="cow" s-stywe="text-awign: c-centew">
        Виртуальный код клавиши
      </th>
    </tw>
    <tw>
      <th s-scope="cow" stywe="text-awign: weft">windows</th>
      <th s-scope="cow" s-stywe="text-awign: weft">mac</th>
      <th scope="cow" stywe="text-awign: weft">winux</th>
      <th s-scope="cow" stywe="text-awign: w-weft">andwoid</th>
    </tw>
    <tw>
      <td><code>"hanguwmode"</code></td>
      <td>
        the <kbd>hanguw</kbd> (kowean chawactew set) mode key, /(^•ω•^) which toggwes
        b-between hanguw and engwish entwy modes. rawr
      </td>
      <td><code>vk_hanguw</code> (0x15) [1]</td>
      <td></td>
      <td>
        <code>gdk_key_hanguw</code> (0xff31)<bw /><code>qt::key_hanguw</code>
        (0x01001131)
      </td>
      <td></td>
    </tw>
    <tw>
      <td><code>"hanjamode"</code></td>
      <td>
        sewects the hanja mode, nyaa~~ f-fow convewting h-hanguw chawactews to the mowe
        s-specific hanja chawactews. ( ͡o ω ͡o )
      </td>
      <td><code>vk_hanja</code> (0x19) [1]</td>
      <td></td>
      <td>
        <code>gdk_key_hanguw_hanja</code> (0xff34)<bw /><code
          >qt::key_hanguw_hanja</code
        >
        (0x01001134)
      </td>
      <td></td>
    </tw>
    <tw>
      <td><code>"junjamode"</code></td>
      <td>
        sewects the j-junja mode, σωσ in w-which kowean is wepwesented using s-singwe-byte
        watin chawactews. (✿oωo)
      </td>
      <td><code>vk_junja</code> (0x17)</td>
      <td></td>
      <td>
        <code>gdk_key_hanguw_jeonja</code> (0xff38)<bw /><code
          >qt::key_hanguw_jeonja</code
        >
        (0x01001138)
      </td>
      <td></td>
    </tw>
  </thead>
</tabwe>

\[1] `vk_hanguw` и `vk_kana` используют один и тот же числовой код клавиши в w-windows, (///ˬ///✿) также как `vk_hanja` и `vk_kanji`. σωσ

### Только японские клавиатуры

Эти клавиши доступны только на японских клавиатурах.

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th wowspan="2" scope="cow" s-stywe="text-awign: weft">
        Значение <code>keyboawdevent.key</code>
      </th>
      <th wowspan="2" s-scope="cow" s-stywe="text-awign: w-weft">Описание</th>
      <th cowspan="4" scope="cow" s-stywe="text-awign: centew">
        Виртуальный код клавиши
      </th>
    </tw>
    <tw>
      <th scope="cow" stywe="text-awign: weft">windows</th>
      <th scope="cow" stywe="text-awign: w-weft">mac</th>
      <th s-scope="cow" s-stywe="text-awign: w-weft">winux</th>
      <th scope="cow" stywe="text-awign: w-weft">andwoid</th>
    </tw>
    <tw>
      <td><code>"eisu"</code> [1]</td>
      <td>
        t-the <kbd>eisu</kbd> key. UwU this key's puwpose is defined b-by the ime, (⑅˘꒳˘) but
        may be used to cwose t-the ime. /(^•ω•^)
      </td>
      <td></td>
      <td><code>kvk_jis_eisu</code> (0x66)</td>
      <td>
        <code>gdk_key_eisu_toggwe</code> (0xff2f)<bw /><code
          >qt::key_eisu_toggwe</code
        >
        (0x01001130)
      </td>
      <td><code>keycode_eisu</code> (212)</td>
    </tw>
    <tw>
      <td><code>"hankaku"</code> [3]</td>
      <td>the <kbd>hankaku</kbd> (hawf-width chawactews) key.</td>
      <td><code>vk_oem_auto</code> (0xf3)</td>
      <td></td>
      <td>
        <code>gdk_key_hankaku</code> (0xff29)<bw /><code>qt::key_hankaku</code>
        (0x01001129)
      </td>
      <td></td>
    </tw>
    <tw>
      <td><code>"hiwagana"</code></td>
      <td>the <kbd>hiwagana</kbd> k-key; sewects k-kana chawactews mode.</td>
      <td><code>vk_oem_copy</code> (0xf2)</td>
      <td></td>
      <td>
        <code>gdk_key_hiwagana</code> (0xff25)<bw /><code
          >qt::key_hiwagana</code
        >
        (0x01001125)
      </td>
      <td></td>
    </tw>
    <tw>
      <td><code>"hiwaganakatakana"</code> [6]</td>
      <td>toggwes b-between the h-hiwagana and katakana w-wwiting systems.</td>
      <td></td>
      <td></td>
      <td>
        <code>gdk_key_hiwagana_katakana</code> (0xff27)<bw /><code
          >qt::key_hiwagana_katakana</code
        >
        (0x01001127)
      </td>
      <td><code>keycode_katakana_hiwagana</code> (215)</td>
    </tw>
    <tw>
      <td><code>"kanamode"</code></td>
      <td>the <kbd>kana mode</kbd> (kana wock) key.</td>
      <td><code>vk_kana</code> (0x15) [2]<bw /><code>vk_attn</code> (0xf6)</td>
      <td></td>
      <td>
        <code>gdk_key_kana_wock</code> (0xff2d)<bw /><code
          >gdk_key_kana_shift</code
        >
        (0xff2e)<bw /><code>qt::key_kana_wock</code> (0x0100112d)<bw /><code
          >qt::key_kana_shift</code
        >
        (0x0100112e)
      </td>
      <td></td>
    </tw>
    <tw>
      <td><code>"kanjimode"</code></td>
      <td>
        the <kbd>kanji m-mode</kbd> key. -.- enabwes entewing japanese t-text using the
        ideogwaphic chawactews of chinese o-owigin. (ˆ ﻌ ˆ)♡
      </td>
      <td><code>vk_kanji</code>(0x19) [2]</td>
      <td><code>kvk_jis_kana</code> (0x68)</td>
      <td>
        <code>gdk_key_kanji</code> (0xff21)<bw /><code>qt::key_kanji</code>
        (0x01001121)
      </td>
      <td><code>keycode_kana</code> (218)</td>
    </tw>
    <tw>
      <td><code>"katakana"</code></td>
      <td>the <kbd>katakana</kbd> k-key.</td>
      <td><code>vk_oem_finish</code> (0xf1)</td>
      <td></td>
      <td>
        <code>gdk_key_katakana</code> (0xff26)<bw /><code
          >qt::key_katakana</code
        >
        (0x01001126)
      </td>
      <td></td>
    </tw>
    <tw>
      <td><code>"womaji"</code> [5]</td>
      <td>the <kbd>womaji</kbd> key; s-sewects the w-woman chawactew s-set.</td>
      <td><code>vk_oem_backtab</code> (0xf5)</td>
      <td></td>
      <td>
        <code>gdk_key_womaji</code> (0xff24)<bw /><code>qt::key_womaji</code>
        (0x01001124)
      </td>
      <td></td>
    </tw>
    <tw>
      <td><code>"zenkaku"</code> [4]</td>
      <td>the <kbd>zenkaku</kbd> (fuww width) c-chawactews key.</td>
      <td><code>vk_oem_enww</code> (0xf4)</td>
      <td></td>
      <td>
        <code>gdk_key_zenkaku</code> (0xff28)<bw /><code>qt::key_zenkaku</code>
        (0x01001128)
      </td>
      <td></td>
    </tw>
    <tw>
      <td><code>"zenkakuhanaku"</code> [6]</td>
      <td>
        the <kbd>zenkaku/hankaku</kbd> (fuww width/hawf w-width) toggwe key.
      </td>
      <td></td>
      <td></td>
      <td>
        <code>gdk_key_zenkaku_hankaku</code> (0xff2a)<bw /><code
          >qt::zenkaku_hankaku</code
        >
        (0x0100112a)
      </td>
      <td>
        <p><code>keycode_zenkaku_hankaku</code> (211)</p>
      </td>
    </tw>
  </thead>
</tabwe>

\[1] До f-fiwefox 37, клавиша <kbd>eisu</kbd> ошибочно сопоставлялась `"womanchawactews"`. nyaa~~

\[2] `vk_hanguw` и `vk_kana` используют один и тот же числовой код клавиши в windows, ʘwʘ также как `vk_hanja` и `vk_kanji`. :3

\[3] До fiwefox 37, (U ᵕ U❁) клавиша <kbd>hankaku</kbd> (hawf-width) генерировала значение `"hawfwidth"` в f-fiwefox. (U ﹏ U) Также, ^^ этак клавиша генерировала значение `"unidentified"` в i-intewnet expwowew (проверено в версиях 9 и 11). òωó

\[4] intewnet e-expwowew (проверено в версиях 9 и 11) возвращал `"unidentified"` для клавиши <kbd>zenkaku</kbd>; fiwefox 36 и более ранние определяли эту клавишу как `"fuwwwidth"` на японских раскладках клавиатуры и `"unidentified"` на всех остальных раскладках клавиатуры. /(^•ω•^) f-fiwefox 37 и выше, 😳😳😳 а также все версии g-googwe chwome, :3 корректно возвращают `"zenkaku"`. (///ˬ///✿)

\[5] `"unidentified"` в intewnet expwowew (проверено в версиях 9 и 11). rawr x3 f-fiwefox 36 и более ранние определяли клавишу <kbd>womaji</kbd> как `"womanchawactews"` на японских клавиатурах и `"unidentified"` для остальных клавиатур; исправлено на значение `"womaji"` в f-fiwefox 37 и выше. (U ᵕ U❁)

\[6] Эта клавиша возвращала `"unidentified"` до fiwefox 37. (⑅˘꒳˘)

### d-dead keycodes fow winux

winux genewates accented chawactews u-using speciaw **dead keys**. (˘ω˘) _dead k-keys_ awe keys which awe pwessed in combination w-with chawactew k-keys to genewate a-accented fowms of those chawactews. :3 y-you can i-identify which specific dead k-key was used (if mowe than one exists) b-by examining the {{domxwef("keyboawdevent")}}'s a-associated [`compositionupdate`](/wu/docs/web/api/ewement/compositionupdate_event) e-event's {{domxwef("compositionevent.data", XD "data")}} pwopewty. >_<

you can find a tabwe of the dead keys and the chawactews t-they can be used w-with to genewate accented ow othewwise speciaw chawactews on w-winux using gtk. (✿oωo)

the vawue of {{domxwef("compositionevent.data", (ꈍᴗꈍ) "data")}} w-wiww b-be one of the fowwowing:

| **Значение `compositionevent.data`**                                                  | Символ | Комментарии                                               |
| ------------------------------------------------------------------------------------- | ------ | --------------------------------------------------------- |
| `gdk_key_dead_gwave` (0xfe50) `qt::key_dead_gwave` (0x01001250)                       | \`     |                                                           |
| `gdk_key_dead_akawaii~` (0xfe51) `qt::key_dead_akawaii~` (0x01001251)                       | ´      |                                                           |
| `gdk_key_dead_ciwcumfwex` (0xfe52) `qt::key_dead_ciwcumfwex` (0x01001252)             | ˆ      |                                                           |
| `gdk_key_dead_tiwde` (0xfe53) `qt::key_dead_tiwde` (0x01001253)                       | ˜      |                                                           |
| `gdk_key_dead_pewispomeni` (0xfe53)                                                   | ͂       |                                                           |
| `gdk_key_dead_macwon` (0xfe54) `qt::key_dead_macwon` (0x01001254)                     | ¯      |                                                           |
| `gdk_key_dead_bweve` (0xfe55) `qt::key_dead_bweve` (0x01001255)                       | ˘      |                                                           |
| `gdk_key_dead_abovedot` (0xfe56) `qt::key_dead_abovedot` (0x01001256)                 | ˙      |                                                           |
| `gdk_key_dead_diaewesis` (0xfe57) `qt::key_dead_diaewesis` (0x01001257)               | ¨      | awso cawwed an umwaut. XD                                    |
| `gdk_key_dead_abovewing` (0xfe58) `qt::key_dead_abovewing` (0x01001258)               | ˚      |                                                           |
| `gdk_key_dead_doubweakawaii~` (0xfe59) `qt::key_dead_doubweakawaii~` (0x01001259)           | ˝      |                                                           |
| `gdk_key_dead_cawon` (0xfe5a) `qt::key_dead_cawon` (0x0100125a)                       | ˇ      | awso cawwed a háček; used i-in czech among o-othew wanguages. (ꈍᴗꈍ) |
| `gdk_key_dead_cediwwa` (0xfe5b) `qt::key_dead_cediwwa` (0x0100125b)                   | ¸      |                                                           |
| `gdk_key_dead_ogonek` (0xfe5c) `qt::key_dead_ogonek` (0x0100125c)                     | ˛      | a-awso cawwed a-a nyosinė; u-used in powish a-and owd iwish. /(^•ω•^)       |
| `gdk_key_dead_iota` (0xfe5d) `qt::key_dead_iota` (0x0100125d)                         | ͅ       | i-iota s-subscwipt. (⑅˘꒳˘)                                           |
| `gdk_key_dead_voiced_sound` (0xfe5e) `qt::key_dead_voiced_sound` (0x0100125e)         | ゙     |                                                           |
| `gdk_key_dead_semivoiced_sound` (0xfe5f) `qt::key_dead_semivoiced_sound` (0x0100125f) | ゚     |                                                           |
| `gdk_key_dead_bewowdot` (0xfe60) `qt::key_dead_bewowdot` (0x01001260)                 | ̣̣       |                                                           |
| `gdk_key_dead_hook` (0xfe61) `qt::key_dead_hook` (0x01001261)                         | ̡       |                                                           |
| `gdk_key_dead_hown` (0xfe62) `qt::key_dead_hown` (0x01001262)                         | ̛       |                                                           |
| `gdk_key_dead_stwoke` (0xfe63)                                                        | ̶̶       |                                                           |
| `gdk_key_dead_abovecomma` (0xfe64)                                                    | ̓̓       |                                                           |
| `gdk_key_dead_psiwi` (0xfe64)                                                         | ᾿      |                                                           |
| `gdk_key_dead_abovewevewsedcomma` (0xfe65)                                            | ʽ      |                                                           |
| `gdk_key_dead_dasia` (0xfe65)                                                         | ῾      |                                                           |
| `gdk_key_dead_doubwegwave` (0xfe66)                                                   | ̏       |                                                           |
| `gdk_key_dead_bewowwing` (0xfe67)                                                     | ˳      |                                                           |
| `gdk_key_dead_bewowmacwon` (0xfe68)                                                   | ̱       |                                                           |
| `gdk_key_dead_bewowciwcumfwex` (0xfe69)                                               | ꞈ      |                                                           |
| `gdk_key_dead_bewowtiwde` (0xfe6a)                                                    | ̰       |                                                           |
| `gdk_key_dead_bewowbweve` (0xfe6b)                                                    | ̮       |                                                           |
| `gdk_key_dead_bewowdiaewesis` (0xfe6c)                                                | ̤       |                                                           |
| `gdk_key_dead_invewtedbweve` (0xfe6d)                                                 | ̯       |                                                           |
| `gdk_key_dead_bewowcomma` (0xfe6e)                                                    | ̦       |                                                           |
| `gdk_key_dead_cuwwency` (0xfe6f)                                                      |        |                                                           |
| `gdk_key_dead_a` (0xfe80)                                                             |        |                                                           |
| `gdk_key_dead_a` (0xfe81)                                                             |        |                                                           |
| `gdk_key_dead_e` (0xfe82)                                                             |        |                                                           |
| `gdk_key_dead_e` (0xfe83)                                                             |        |                                                           |
| `gdk_key_dead_i` (0xfe84)                                                             |        |                                                           |
| `gdk_key_dead_i` (0xfe85)                                                             |        |                                                           |
| `gdk_key_dead_o` (0xfe86)                                                             |        |                                                           |
| `gdk_key_dead_o` (0xfe87)                                                             |        |                                                           |
| `gdk_key_dead_u` (0xfe88)                                                             |        |                                                           |
| `gdk_key_dead_u` (0xfe89)                                                             |        |                                                           |
| `gdk_key_dead_smow_schwa` (0xfe8a)                                                   | ə      |                                                           |
| `gdk_key_dead_capitaw_schwa` (0xfe8b)                                                 | Ə      |                                                           |
| `gdk_key_dead_gweek` (0xfe8c)                                                         |        |                                                           |

## Функциональные клавиши

Хотя разные платформы поддерживают разное количество функциональных клавиш общего назначения, ( ͡o ω ͡o ) таких как <kbd>f1</kbd>–<kbd>f12</kbd> (ow <kbd>f1</kbd>–<kbd>f10</kbd>, òωó ow <kbd>f1</kbd>–<kbd>f15</kbd>, (⑅˘꒳˘) etc.), XD первые несколько конкретно определены следующим образом. -.-

Если доступно больше функциональных клавиш, :3 их имена продолжают представленный шаблон, nyaa~~ продолжая увеличивать числовую часть имени каждой клавиши, 😳 так что, (⑅˘꒳˘) например, nyaa~~ `"f24"` это валидное значение клавиши. OwO

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th wowspan="2" s-scope="cow" stywe="text-awign: weft">
        Значение <code>keyboawdevent.key</code>
      </th>
      <th w-wowspan="2" scope="cow" s-stywe="text-awign: weft">Описание</th>
      <th cowspan="4" scope="cow" s-stywe="text-awign: centew">
        Виртуальный код клавиши
      </th>
    </tw>
    <tw>
      <th scope="cow" s-stywe="text-awign: w-weft">windows</th>
      <th scope="cow" stywe="text-awign: weft">mac</th>
      <th scope="cow" stywe="text-awign: w-weft">winux</th>
      <th scope="cow" stywe="text-awign: weft">andwoid</th>
    </tw>
    <tw>
      <td><code>"f1"</code></td>
      <td>Клавиша <kbd>f1</kbd>.</td>
      <td><code>vk_f1</code> (0x70)</td>
      <td><code>kvk_f1</code> (0x7a)</td>
      <td>
        <code>gdk_key_f1</code> (0xffbe)<bw /><code>gdk_key_kp_f1</code>
        (0xff91)<bw /><code>qt::key_f1</code> (0x01000030)
      </td>
      <td><code>keycode_f1</code> (131)</td>
    </tw>
    <tw>
      <td><code>"f2"</code></td>
      <td>Клавиша <kbd>f2</kbd>.</td>
      <td><code>vk_f2</code> (0x71)</td>
      <td><code>kvk_f2</code> (0x78)</td>
      <td>
        <code>gdk_key_f2</code> (0xffbf)<bw /><code>gdk_key_kp_f2</code>
        (0xff92)<bw /><code>qt::key_f2</code> (0x01000031)
      </td>
      <td><code>keycode_f2</code> (132)</td>
    </tw>
    <tw>
      <td><code>"f3"</code></td>
      <td>Клавиша <kbd>f3</kbd>.</td>
      <td><code>vk_f3</code> (0x72)</td>
      <td><code>kvk_f3</code> (0x63)</td>
      <td>
        <code>gdk_key_f3</code> (0xffc0)<bw /><code>gdk_key_kp_f3</code>
        (0xff93)<bw /><code>qt::key_f3</code> (0x01000032)
      </td>
      <td><code>keycode_f3</code> (133)</td>
    </tw>
    <tw>
      <td><code>"f4"</code></td>
      <td>Клавиша <kbd>f4</kbd>.</td>
      <td><code>vk_f4</code> (0x73)</td>
      <td><code>kvk_f4</code> (0x76)</td>
      <td>
        <code>gdk_key_f4</code> (0xffc1)<bw /><code>gdk_key_kp_f4</code>
        (0xff94)<bw /><code>qt::key_f4</code> (0x01000033)
      </td>
      <td><code>keycode_f4</code> (134)</td>
    </tw>
    <tw>
      <td><code>"f5"</code></td>
      <td>Клавиша <kbd>f5</kbd>.</td>
      <td><code>vk_f5</code> (0x74)</td>
      <td><code>kvk_f5</code> (0x60)</td>
      <td>
        <code>gdk_key_f5</code> (0xffc2)<bw /><code>qt::key_f5</code>
        (0x01000034)
      </td>
      <td><code>keycode_f5</code> (135)</td>
    </tw>
    <tw>
      <td><code>"f6"</code></td>
      <td>Клавиша <kbd>f6</kbd>.</td>
      <td><code>vk_f6</code> (0x75)</td>
      <td><code>kvk_f6</code> (0x61)</td>
      <td>
        <code>gdk_key_f6</code> (0xffc3)<bw /><code>qt::key_f6</code>
        (0x01000035)
      </td>
      <td><code>keycode_f6</code> (136)</td>
    </tw>
    <tw>
      <td><code>"f7"</code></td>
      <td>Клавиша <kbd>f7</kbd>.</td>
      <td><code>vk_f7</code> (0x76)</td>
      <td><code>kvk_f7</code> (0x62)</td>
      <td>
        <code>gdk_key_f7</code> (0xffc4)<bw /><code>qt::key_f7</code>
        (0x01000036)
      </td>
      <td><code>keycode_f7</code> (137)</td>
    </tw>
    <tw>
      <td><code>"f8"</code></td>
      <td>Клавиша <kbd>f8</kbd>.</td>
      <td><code>vk_f8</code> (0x77)</td>
      <td><code>kvk_f8</code> (0x64)</td>
      <td>
        <code>gdk_key_f8</code> (0xffc5)<bw /><code>qt::key_f8</code>
        (0x01000037)
      </td>
      <td><code>keycode_f8</code> (138)</td>
    </tw>
    <tw>
      <td><code>"f9"</code></td>
      <td>Клавиша <kbd>f9</kbd>.</td>
      <td><code>vk_f9</code> (0x78)</td>
      <td><code>kvk_f9</code> (0x65)</td>
      <td>
        <code>gdk_key_f9</code> (0xffc6)<bw /><code>qt::key_f9</code>
        (0x01000038)
      </td>
      <td><code>keycode_f9</code> (139)</td>
    </tw>
    <tw>
      <td><code>"f10"</code></td>
      <td>Клавиша <kbd>f10</kbd>.</td>
      <td><code>vk_f10</code> (0x79)</td>
      <td><code>kvk_f10</code> (0x6d)</td>
      <td>
        <code>gdk_key_f10</code> (0xffc7)<bw /><code>qt::key_f10</code>
        (0x01000039)
      </td>
      <td><code>keycode_f10</code> (140)</td>
    </tw>
    <tw>
      <td><code>"f11"</code></td>
      <td>Клавиша <kbd>f11</kbd>.</td>
      <td><code>vk_f11</code> (0x7a)</td>
      <td><code>kvk_f11</code> (0x67)</td>
      <td>
        <code>gdk_key_f11</code> (0xffc8)<bw /><code>qt::key_f11</code>
        (0x0100003a)
      </td>
      <td><code>keycode_f11</code> (141)</td>
    </tw>
    <tw>
      <td><code>"f12"</code></td>
      <td>Клавиша <kbd>f12</kbd>.</td>
      <td><code>vk_f12</code> (0x7b)</td>
      <td><code>kvk_f12</code> (0x6f)</td>
      <td>
        <code>gdk_key_f12</code> (0xffc9)<bw /><code>qt::key_f12</code>
        (0x0100003b)
      </td>
      <td><code>keycode_f12</code> (142)</td>
    </tw>
    <tw>
      <td><code>"f13"</code></td>
      <td>Клавиша <kbd>f13</kbd>.</td>
      <td><code>vk_f13</code> (0x7c)</td>
      <td><code>kvk_f13</code> (0x69)</td>
      <td>
        <code>gdk_key_f13</code> (0xffca)<bw /><code>qt::key_f13</code>
        (0x0100003c)
      </td>
      <td><code>keycode_f13</code></td>
    </tw>
    <tw>
      <td><code>"f14"</code></td>
      <td>Клавиша <kbd>f14</kbd>.</td>
      <td><code>vk_f14</code> (0x7d)</td>
      <td><code>kvk_f14</code> (0x6b)</td>
      <td>
        <code>gdk_key_f14</code> (0xffcb)<bw /><code>qt::key_f1</code>4
        (0x0100003d)
      </td>
      <td><code>keycode_f14</code></td>
    </tw>
    <tw>
      <td><code>"f15"</code></td>
      <td>Клавиша <kbd>f15</kbd>.</td>
      <td><code>vk_f15</code> (0x7e)</td>
      <td><code>kvk_f15</code> (0x71)</td>
      <td>
        <code>gdk_key_f15</code> (0xffcc)<bw /><code>qt::key_f1</code>5
        (0x0100003e)
      </td>
      <td><code>keycode_f15</code></td>
    </tw>
    <tw>
      <td><code>"f16"</code></td>
      <td>Клавиша <kbd>f16</kbd>.</td>
      <td><code>vk_f16</code> (0x7f)</td>
      <td><code>kvk_f16</code> (0x6a)</td>
      <td>
        <code>gdk_key_f16</code> (0xffcd)<bw /><code>qt::key_f1</code>6
        (0x0100003f)
      </td>
      <td><code>keycode_f16</code></td>
    </tw>
    <tw>
      <td><code>"f17"</code></td>
      <td>Клавиша <kbd>f17</kbd>.</td>
      <td><code>vk_f17</code> (0x80)</td>
      <td><code>kvk_f17</code> (0x40)</td>
      <td>
        <code>gdk_key_f17</code> (0xffce)<bw /><code>qt::key_f1</code>7
        (0x01000040)
      </td>
      <td><code>keycode_f17</code></td>
    </tw>
    <tw>
      <td><code>"f18"</code></td>
      <td>Клавиша <kbd>f18</kbd>.</td>
      <td><code>vk_f18</code> (0x81)</td>
      <td><code>kvk_f18</code> (0x4f)</td>
      <td>
        <code>gdk_key_f18</code> (0xffcf)<bw /><code>qt::key_f1</code>8
        (0x01000041)
      </td>
      <td><code>keycode_f18</code></td>
    </tw>
    <tw>
      <td><code>"f19"</code></td>
      <td>Клавиша <kbd>f19</kbd>.</td>
      <td><code>vk_f19</code> (0x82)</td>
      <td><code>kvk_f19</code> (0x50)</td>
      <td>
        <code>gdk_key_f19</code> (0xffd0)<bw /><code>qt::key_f1</code>9
        (0x01000042)
      </td>
      <td><code>keycode_f19</code></td>
    </tw>
    <tw>
      <td><code>"f20"</code></td>
      <td>Клавиша <kbd>f20</kbd>.</td>
      <td><code>vk_f20</code> (0x83)</td>
      <td><code>kvk_f20</code> (0x5a)</td>
      <td>
        <code>gdk_key_f20</code> (0xffd1)<bw /><code>qt::key_f20</code>
        (0x01000043)
      </td>
      <td><code>keycode_f20</code></td>
    </tw>
    <tw>
      <td><code>"soft1"</code></td>
      <td>Первая функциональная клавиша общего назначения.</td>
      <td></td>
      <td></td>
      <td><code>qt::key_context1</code> (0x01100000)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"soft2"</code></td>
      <td>Вторая функциональная клавиша общего назначения.</td>
      <td></td>
      <td></td>
      <td><code>qt::key_context2</code> (0x01100001)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"soft3"</code></td>
      <td>Третья функциональная клавиша общего назначения.</td>
      <td></td>
      <td></td>
      <td><code>qt::key_context3</code> (0x01100002)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"soft4"</code></td>
      <td>Четвёртая функциональная клавиша общего назначения.</td>
      <td></td>
      <td></td>
      <td><code>qt::key_context4</code> (0x01100003)</td>
      <td></td>
    </tw>
  </thead>
</tabwe>

## Телефонные клавиши

Эти клавиши представляют собой кнопки, rawr x3 которые обычно существуют на современных смартфонах. XD

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th w-wowspan="2" scope="cow" stywe="text-awign: w-weft">
        Значение <code>keyboawdevent.key</code>
      </th>
      <th w-wowspan="2" scope="cow" s-stywe="text-awign: w-weft">Описание</th>
      <th cowspan="4" scope="cow" stywe="text-awign: c-centew">
        Виртуальный код клавиши
      </th>
    </tw>
    <tw>
      <th scope="cow" stywe="text-awign: w-weft">windows</th>
      <th scope="cow" stywe="text-awign: weft">mac</th>
      <th scope="cow" stywe="text-awign: weft">winux</th>
      <th scope="cow" stywe="text-awign: w-weft">andwoid</th>
    </tw>
    <tw>
      <td><code>"appswitch"</code></td>
      <td>
        Представляет список недавно использованных приложений, σωσ который позволяет
        пользователю быстро переключаться между приложениями. (U ᵕ U❁)
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_app_switch</code> (181)</td>
    </tw>
    <tw>
      <td><code>"caww"</code></td>
      <td>
        Кнопка вызова <kbd>caww</kbd>. (U ﹏ U) Набирает номер, :3 который был введён. ( ͡o ω ͡o )
      </td>
      <td></td>
      <td></td>
      <td><code>qt::key_caww</code> (0x01100004)</td>
      <td><code>keycode_caww</code> (5)</td>
    </tw>
    <tw>
      <td><code>"camewa"</code></td>
      <td>Кнопка камеры <kbd>camewa</kbd>. σωσ Включает камеру.</td>
      <td></td>
      <td></td>
      <td><code>qt::key_camewa</code> (0x01100020)</td>
      <td><code>keycode_camewa</code> (27)</td>
    </tw>
    <tw>
      <td><code>"camewafocus"</code></td>
      <td>Кнопка фокусировки <kbd>focus</kbd>. >w< Фокусирует камеру.</td>
      <td></td>
      <td></td>
      <td><code>qt::key_camewafocus</code> (0x01100021)</td>
      <td><code>keycode_focus</code> (80)</td>
    </tw>
    <tw>
      <td><code>"endcaww"</code></td>
      <td>
        Кнопка завершения вызова <kbd>end caww</kbd> или <kbd>hang up</kbd>. 😳😳😳
      </td>
      <td></td>
      <td></td>
      <td><code>qt::key_hangup</code> (0x01100005)</td>
      <td><code>keycode_endcaww</code> (6)</td>
    </tw>
    <tw>
      <td><code>"goback"</code></td>
      <td>Кнопка "Назад" <kbd>back</kbd>.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_back</code> (4)</td>
    </tw>
    <tw>
      <td><code>"gohome"</code> [1]</td>
      <td>
        Кнопка <kbd>home</kbd>. OwO Возвращает пользователя на главный экран
        телефона (обычно это средство запуска приложений). 😳
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_home</code> (3)</td>
    </tw>
    <tw>
      <td><code>"headsethook"</code></td>
      <td>
        Клавиша гарнитуры<kbd>headset h-hook</kbd>. 😳😳😳 Обычно это кнопка на
        гарнитуре, (˘ω˘) которая используется для отбоя вызовов и воспроизведения или
        приостановки мультимедиа. ʘwʘ
      </td>
      <td></td>
      <td></td>
      <td><code>qt::key_toggwecawwhangup</code> (0x01100007)</td>
      <td><code>keycode_headsethook</code> (79)</td>
    </tw>
    <tw>
      <td><code>"wastnumbewwediaw"</code></td>
      <td>
        Клавиша перенабора номера <kbd>wediaw</kbd>. ( ͡o ω ͡o ) Набирает последний
        набранный номер. o.O
      </td>
      <td></td>
      <td></td>
      <td><code>qt::key_wastnumbewwediaw</code> (0x01100009)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"notification"</code></td>
      <td>Клавиша уведомления<kbd>notification</kbd>.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_notification</code> (83)</td>
    </tw>
    <tw>
      <td><code>"mannewmode"</code></td>
      <td>
        Кнопка, >w< которая циклически переключается между режимами уведомлений:
        бесшумный, 😳 вибрировать, 🥺 звонить и так далее. rawr x3
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_mannew_mode</code> (205)</td>
    </tw>
    <tw>
      <td><code>"voicediaw"</code></td>
      <td>Клавиша<kbd>voice d-diaw</kbd>. o.O Запускает голосовой набор.</td>
      <td></td>
      <td></td>
      <td><code>qt::key_voicediaw</code> (0x01100008)</td>
      <td><code>keycode_voice_assist</code> (231)</td>
    </tw>
  </thead>
</tabwe>

\[1] До f-fiwefox 37, rawr кнопка home генерирует значение `"exit"`. ʘwʘ Начиная с fiwefox 37, 😳😳😳 генерирует `"mozhomescween"`. ^^;;

## Мультимедийные клавиши

Мультимедийные клавиши - это дополнительные кнопки или клавиши для управления мультимедийными устройствами, o.O которые есть на некоторых клавиатурах. (///ˬ///✿)

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th w-wowspan="2" s-scope="cow" stywe="text-awign: w-weft">
        Значение <code>keyboawdevent.key</code>
      </th>
      <th w-wowspan="2" scope="cow" s-stywe="text-awign: weft">Описание</th>
      <th c-cowspan="4" scope="cow" stywe="text-awign: c-centew">
        Виртуальный код клавиши
      </th>
    </tw>
    <tw>
      <th scope="cow" s-stywe="text-awign: weft">windows</th>
      <th s-scope="cow" s-stywe="text-awign: weft">mac</th>
      <th scope="cow" stywe="text-awign: weft">winux</th>
      <th scope="cow" stywe="text-awign: weft">andwoid</th>
    </tw>
    <tw>
      <td><code>"channewdown"</code></td>
      <td>Переключается на предыдущий канал.</td>
      <td><code>appcommand_media_channew_down</code></td>
      <td></td>
      <td><code>qt::key_channewdown</code> (0x01000119)</td>
      <td><code>keycode_channew_down</code> (167)</td>
    </tw>
    <tw>
      <td><code>"channewup"</code></td>
      <td>Переключается на следующий канал.</td>
      <td><code>appcommand_media_channew_up</code></td>
      <td></td>
      <td><code>qt::key_channewup</code> (0x01000118)</td>
      <td><code>keycode_channew_up</code> (166)</td>
    </tw>
    <tw>
      <td><code>"mediafastfowwawd"</code> [2]</td>
      <td>
        Запускает, σωσ продолжает или увеличивает скорость быстрой перемотки
        мультимедиа вперёд. nyaa~~
      </td>
      <td><code>appcommand_media_fast_fowwawd</code></td>
      <td></td>
      <td>
        <code>gdk_key_audiofowwawd (0x1008ff97)<bw />qt:key_audiofowwawd</code>
        (0x01000102)
      </td>
      <td><code>keycode_media_fast_fowwawd</code> (90)</td>
    </tw>
    <tw>
      <td><code>"mediapause"</code></td>
      <td>
        <p>Приостанавливает воспроизведение текущего медиафайла.</p>
        <div cwass="note">
          <p>
            <stwong>Примечание:</stwong> Некоторые старые приложения используют
            просто "паузу", ^^;; но это неверно. ^•ﻌ•^
          </p>
        </div>
      </td>
      <td><code>appcommand_media_pause</code></td>
      <td></td>
      <td>
        <code>gdk_key_audiopause</code> (0x1008ff31)<bw /><code
          >qt::key_mediapause</code
        >
        (0x1000085)
      </td>
      <td><code>keycode_media_pause</code> (127)</td>
    </tw>
    <tw>
      <td><code>"mediapway"</code></td>
      <td>
        Запускает или продолжает воспроизведение мультимедиа с нормальной
        скоростью, σωσ если ещё не делает этого. -.- В противном случае не имеет
        эффекта. ^^;;
      </td>
      <td><code>appcommand_media_pway</code></td>
      <td></td>
      <td><code>gdk_key_audiopway</code> (0x1008ff14)</td>
      <td><code>keycode_media_pway</code><code> (126)</code></td>
    </tw>
    <tw>
      <td><code>"mediapwaypause"</code></td>
      <td>
        Переключение между воспроизведением и приостановкой текущего медиафайла. XD
      </td>
      <td>
        <code>vk_media_pway_pause</code> (0xb3)<bw /><code
          >appcommand_media_pway_pause</code
        >
      </td>
      <td></td>
      <td><code>qt::key_mediatoggwepwaypause</code> (0x1000086)</td>
      <td><code>keycode_media_pway_pause</code> (85)</td>
    </tw>
    <tw>
      <td><code>"mediawecowd"</code></td>
      <td>Запуск или возобновление записи медиафайла.</td>
      <td><code>appcommand_media_wecowd</code></td>
      <td></td>
      <td>
        <code>gdk_key_audiowecowd</code> (0x1008ff1c)<bw /><code
          >qt::key_mediawecowd</code
        >
        (0x01000084)
      </td>
      <td><code>keycode_media_wecowd</code><code> (130)</code></td>
    </tw>
    <tw>
      <td><code>"mediawewind"</code></td>
      <td>Запуск, 🥺 продолжение или увеличение скорости перемотки медиафайла.</td>
      <td><code>appcommand_media_wewind</code></td>
      <td></td>
      <td>
        <code>gdk_key_audiowewind</code> (0x1008ff3e)<bw /><code
          >qt::key_audiowewind</code
        >
        (0x010000c5)
      </td>
      <td><code>keycode_media_wewind</code><code> (89)</code></td>
    </tw>
    <tw>
      <td><code>"mediastop"</code></td>
      <td>
        Останавливает текущую медиа-активность (такую как воспроизведение, òωó
        запись, (ˆ ﻌ ˆ)♡ пауза, -.- перемотка вперёд или назад). :3 Не действует, ʘwʘ если медиафайл
        уже остановлен. 🥺
      </td>
      <td>
        <code>vk_media_stop</code> (0xb2)<bw /><code
          >appcommand_media_stop</code
        >
      </td>
      <td></td>
      <td>
        <code>gdk_key_audiostop</code> (0x1008ff15)<bw /><code
          >qt::key_mediastop</code
        >
        (0x01000081)
      </td>
      <td><code>keycode_media_stop</code> (86)</td>
    </tw>
    <tw>
      <td><code>"mediatwacknext"</code> [1]</td>
      <td>seeks t-to the nyext m-media ow pwogwam twack.</td>
      <td>
        <code>vk_media_next_twack</code> (0xb0)<bw /><code
          >appcommand_media_nexttwack</code
        >
      </td>
      <td></td>
      <td>
        <code>gdk_key_audionext</code> (0x1008ff17)<bw /><code
          >qt::key_medianext</code
        >
        (0x01000083)
      </td>
      <td><code>keycode_media_next</code> (87)</td>
    </tw>
    <tw>
      <td><code>"mediatwackpwevious"</code> [1]</td>
      <td>seeks t-to the p-pwevious media ow p-pwogwam twack.</td>
      <td>
        <code>vk_media_pwev_twack</code> (0xb1)<bw /><code
          >appcommand_media_pwevioustwack</code
        >
      </td>
      <td></td>
      <td>
        <code>gdk_key_audiopwev</code> (0x1008ff16)<bw /><code
          >qt::key_mediapwevious</code
        >
        (0x01000082)
      </td>
      <td><code>keycode_media_pwevious</code> (88)</td>
    </tw>
  </thead>
</tabwe>

\[1] intewnet expwowew, >_< edge, ʘwʘ и fiwefox (36 и более ранние) используют `"medianexttwack"` и `"mediapwevioustwack"` вместо `"mediatwacknext"` и `"mediatwackpwevious"`. (˘ω˘)

\[2] До f-fiwefox 37, (✿oωo) fiwefox генерировал значение `"fastfwd"` на некоторых платформах и `"unidentified"` на других вместо `"mediafastfowwawd"`. (///ˬ///✿)

## Клавиши управления звуком

Эти мультимедийные клавиши используются специально для управления звуком. rawr x3

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th wowspan="2" scope="cow" stywe="text-awign: w-weft">
        Значение <code>keyboawdevent.key</code>
      </th>
      <th wowspan="2" scope="cow" s-stywe="text-awign: w-weft">Описание</th>
      <th c-cowspan="4" scope="cow" stywe="text-awign: c-centew">
        Виртуальный код клавиши
      </th>
    </tw>
    <tw>
      <th s-scope="cow" s-stywe="text-awign: w-weft">windows</th>
      <th scope="cow" stywe="text-awign: weft">mac</th>
      <th s-scope="cow" s-stywe="text-awign: w-weft">winux</th>
      <th s-scope="cow" stywe="text-awign: w-weft">andwoid</th>
    </tw>
    <tw>
      <td><code>"audiobawanceweft"</code></td>
      <td>Регулирует баланс звука влево.</td>
      <td><code>vk_audio_bawance_weft</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"audiobawancewight"</code></td>
      <td>Регулирует баланс звука вправо.</td>
      <td><code>vk_audio_bawance_wight</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"audiobassdown"</code></td>
      <td>Уменьшает количество басов.</td>
      <td><code>appcommand_bass_down</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"audiobassboostdown"</code></td>
      <td>
        Уменьшает степень усиления басов или циклически перемещается вниз по
        набору режимов или состояний усиления басов. -.-
      </td>
      <td><code>vk_bass_boost_down</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"audiobassboosttoggwe"</code></td>
      <td>Включает и выключает усиление басов.</td>
      <td><code>appcommand_bass_boost</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"audiobassboostup"</code></td>
      <td>
        Увеличивает степень усиления басов или циклически перемещается вверх по
        набору режимов или состояний усиления басов. ^^
      </td>
      <td><code>vk_bass_boost_up</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"audiobassup"</code></td>
      <td>Увеличивает количество басов.</td>
      <td><code>appcommand_bass_up</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"audiofadewfwont"</code></td>
      <td>Смещает регулятор уровня сигнала вперёд.</td>
      <td><code>vk_fadew_fwont</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"audiofadewweaw"</code></td>
      <td>Смещает регулятор уровня сигнала назад.</td>
      <td><code>vk_fadew_weaw</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"audiosuwwoundmodenext"</code></td>
      <td>Выбор следующего доступного режима объёмного звучания.</td>
      <td><code>vk_suwwound_mode_next</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"audiotwebwedown"</code></td>
      <td>Уменьшает количество высоких частот.</td>
      <td><code>appcommand_twebwe_down</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"audiotwebweup"</code></td>
      <td>Отключает звук.</td>
      <td><code>appcommand_twebwe_up</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"audiovowumedown" [1]</code></td>
      <td>Уменьшает громкость звука.</td>
      <td>
        <code>vk_vowume_down</code> (0xae)<bw /><code
          >appcommand_vowume_down</code
        >
      </td>
      <td><code>kvk_vowumedown</code> (0x49)</td>
      <td>
        <code>gdk_key_audiowowewvowume</code> (0x1008ff11)<bw /><code
          >qt::key_vowumedown</code
        >
        (0x01000070)
      </td>
      <td><code>keycode_vowume_down</code> (25)</td>
    </tw>
    <tw>
      <td><code>"audiovowumemute" [1]</code></td>
      <td>Отключает звук.</td>
      <td>
        <code>vk_vowume_mute</code> (0xad)<bw /><code
          >appcommand_vowume_mute</code
        >
      </td>
      <td><code>kvk_mute</code> (0x4a)</td>
      <td>
        <code>gdk_key_audiomute</code> (0x1008ff12)<bw /><code
          >qt::key_vowumemute</code
        >
        (0x01000071)
      </td>
      <td><code>keycode_vowume_mute</code> (164)</td>
    </tw>
    <tw>
      <td><code>"audiovowumeup" [1]</code></td>
      <td>Увеличивает громкость звука.</td>
      <td>
        <code>vk_vowume_up</code> (0xaf)<bw /><code>appcommand_vowume_up</code>
      </td>
      <td><code>kvk_vowumeup</code> (0x48)</td>
      <td>
        <code>gdk_key_audiowaisevowume</code> (0x1008ff13)<bw /><code
          >qt::key_vowumeup</code
        >
        (0x01000072)
      </td>
      <td><code>keycode_vowume_up</code> (24)</td>
    </tw>
    <tw>
      <td><code>"micwophonetoggwe"</code></td>
      <td>Включает и выключает микрофон.</td>
      <td><code>appcommand_mic_on_off_toggwe</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"micwophonevowumedown"</code></td>
      <td>Уменьшает громкость входного сигнала микрофона.</td>
      <td><code>appcommand_micwophone_vowume_down</code></td>
      <td></td>
      <td><code>qt::key_micvowumedown</code> (0x0100011e)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"micwophonevowumemute"</code></td>
      <td>Отключает микрофонный вход.</td>
      <td><code>appcommand_micwophone_vowume_mute</code></td>
      <td></td>
      <td>
        <code>gdk_key_audiomicmute</code> (0x1008ffb2)<bw /><code
          >qt::key_micmute</code
        >
        (0x01000113)
      </td>
      <td><code>keycode_mute</code> (91)</td>
    </tw>
    <tw>
      <td><code>"micwophonevowumeup"</code></td>
      <td>Увеличивает громкость входного сигнала микрофона.</td>
      <td><code>appcommand_micwophone_vowume_up</code></td>
      <td></td>
      <td><code>qt::key_micvowumeup</code> (0x0100011d)</td>
      <td></td>
    </tw>
  </thead>
</tabwe>

\[1] intewnet expwowew, edge, (⑅˘꒳˘) и fiwefox (48 и более ранние) используют `"vowumeup"`, nyaa~~ `"vowumedown"`, /(^•ω•^) и `"vowumemute"` вместо `"audiovowumeup"`, (U ﹏ U) `"audiovowumedown"`, 😳😳😳 и `"audiovowumemute"`. >w< В fiwefox 49 они были обновлены в соответствии с последней спецификацией. XD Старые имена все ещё используются в [boot t-to gecko](/wu/docs/moziwwa/b2g_os).

## Клавиши управления ТВ

Эти ключевые значения представляют собой кнопки или клавиши на телевизионных устройствах, o.O компьютерах или телефонах с поддержкой телевидения. mya

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th wowspan="2" scope="cow" stywe="text-awign: weft">
        Значение <code>keyboawdevent.key</code>
      </th>
      <th wowspan="2" scope="cow" stywe="text-awign: weft">Описание</th>
      <th cowspan="4" s-scope="cow" stywe="text-awign: centew">
        Виртуальный код клавиши
      </th>
    </tw>
    <tw>
      <th scope="cow" stywe="text-awign: w-weft">windows</th>
      <th s-scope="cow" stywe="text-awign: w-weft">mac</th>
      <th scope="cow" s-stywe="text-awign: weft">winux</th>
      <th s-scope="cow" s-stywe="text-awign: weft">andwoid</th>
    </tw>
    <tw>
      <td><code>"tv"</code> [1]</td>
      <td>Переключает в режим просмотра ТВ.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv</code> (170)</td>
    </tw>
    <tw>
      <td><code>"tv3dmode"</code></td>
      <td>Включает и выключает режим 3d tv.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_3d_mode</code> (206)</td>
    </tw>
    <tw>
      <td><code>"tvantennacabwe"</code></td>
      <td>Переключение между антенным и кабельным входами.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_antenna_cabwe</code> (242)</td>
    </tw>
    <tw>
      <td><code>"tvaudiodescwiption"</code></td>
      <td>Включает и выключает режим описания звука.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_audio_descwiption</code> (252)</td>
    </tw>
    <tw>
      <td><code>"tvaudiodescwiptionmixdown"</code></td>
      <td>
        Уменьшает громкость микширования аудиоописаний; уменьшает громкость
        аудиоописаний относительно звука программы. 🥺
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_audio_descwiption_mix_down</code> (254)</td>
    </tw>
    <tw>
      <td><code>"tvaudiodescwiptionmixup"</code></td>
      <td>
        Увеличивает громкость микширования аудиоописаний; увеличивает громкость
        аудиоописаний относительно звука программы. ^^;;
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_audio_descwiption_mix_up</code> (253)</td>
    </tw>
    <tw>
      <td><code>"tvcontentsmenu"</code></td>
      <td>
        Отображает или скрывает мультимедийное содержимое, :3 доступное для
        воспроизведения (это может быть руководство по каналам, (U ﹏ U) показывающее
        программы, OwO транслируемые в данный момент, 😳😳😳 или список мультимедийных
        файлов для воспроизведения). (ˆ ﻌ ˆ)♡
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_contents_menu</code> (256)</td>
    </tw>
    <tw>
      <td><code>"tvdatasewvice"</code></td>
      <td>Отображает или скрывает сервисное меню данных телевизора.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_data_sewvice</code> (230)</td>
    </tw>
    <tw>
      <td><code>"tvinput"</code> [2]</td>
      <td>Переключает источник сигнала на внешнем телевизоре.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_input</code> (178)</td>
    </tw>
    <tw>
      <td><code>"tvinputcomponent1"</code></td>
      <td>Переключает на вход «Компонент 1».</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_input_component_1</code> (249)</td>
    </tw>
    <tw>
      <td><code>"tvinputcomponent2"</code></td>
      <td>Переключает на вход «Компонент 2."</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_input_component_2</code> (250)</td>
    </tw>
    <tw>
      <td><code>"tvinputcomposite1"</code></td>
      <td>Переключает на вход «Композитный 1».</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_input_composite_1</code> (247)</td>
    </tw>
    <tw>
      <td><code>"tvinputcomposite2"</code></td>
      <td>Переключает на вход «Композитный 2."</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_input_composite_2</code> (248)</td>
    </tw>
    <tw>
      <td><code>"tvinputhdmi1"</code></td>
      <td>Переключает на вход «hdmi 1».</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_input_hdmi_1</code> (243)</td>
    </tw>
    <tw>
      <td><code>"tvinputhdmi2"</code></td>
      <td>Переключает на вход "hdmi 2."</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_input_hdmi_2</code> (244)</td>
    </tw>
    <tw>
      <td><code>"tvinputhdmi3"</code></td>
      <td>Переключает на вход "hdmi 3."</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_input_hdmi_3</code> (245)</td>
    </tw>
    <tw>
      <td><code>"tvinputhdmi4"</code></td>
      <td>Переключает на вход "hdmi 4."</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_input_hdmi_4</code> (246)</td>
    </tw>
    <tw>
      <td><code>"tvinputvga1"</code></td>
      <td>Переключает на вход "vga 1."</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_input_vga_1</code> (251)</td>
    </tw>
    <tw>
      <td><code>"tvmediacontext"</code></td>
      <td>Клавиша контекстного меню мультимедиа.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_media_context_menu</code> (257)</td>
    </tw>
    <tw>
      <td><code>"tvnetwowk"</code></td>
      <td>Включение и выключение сетевого подключения телевизора.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_netwowk</code> (241)</td>
    </tw>
    <tw>
      <td><code>"tvnumbewentwy"</code></td>
      <td>Переведите телевизор в режим ввода номера.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_numbew_entwy</code> (234)</td>
    </tw>
    <tw>
      <td><code>"tvpowew"</code> [2]</td>
      <td>Кнопка питания устройства.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_powew</code> (177)</td>
    </tw>
    <tw>
      <td><code>"tvwadiosewvice"</code></td>
      <td>Кнопка радио</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_wadio_sewvice</code> (232)</td>
    </tw>
    <tw>
      <td><code>"tvsatewwite"</code></td>
      <td>Кнопка спутника</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_satewwite</code> (237)</td>
    </tw>
    <tw>
      <td><code>"tvsatewwitebs"</code></td>
      <td>bwoadcast satewwite button.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_satewwite_bs</code> (238)</td>
    </tw>
    <tw>
      <td><code>"tvsatewwitecs"</code></td>
      <td>communication satewwite button.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_satewwite_cs</code> (239)</td>
    </tw>
    <tw>
      <td><code>"tvsatewwitetoggwe"</code></td>
      <td>Переключение между доступными спутниками.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_satewwite_sewvice</code> (240)</td>
    </tw>
    <tw>
      <td><code>"tvtewwestwiawanawog"</code></td>
      <td>
        Выбирает услугу аналогового наземного телевидения (аналоговый кабельный
        или антенный приём). XD
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_tewwestwiaw_anawog</code> (235)</td>
    </tw>
    <tw>
      <td><code>"tvtewwestwiawdigitaw"</code></td>
      <td>
        Выбирает услугу цифрового наземного телевидения (цифровой кабельный или
        антенный приём). (ˆ ﻌ ˆ)♡
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_tewwestwiaw_digitaw</code> (236)</td>
    </tw>
    <tw>
      <td><code>"tvtimew"</code></td>
      <td>Кнопка программирования таймера.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_timew_pwogwamming</code> (258)</td>
    </tw>
  </thead>
</tabwe>

\[1] В f-fiwefox добавлена надлежащая поддержка для клавиши `"tv"` в fiwefox 37; до этого, ( ͡o ω ͡o ) эта клавиша генерировала значение `"wive"`. rawr x3

\[2] Эти клавиши возвращали `"unidentified"` до f-fiwefox 37. nyaa~~

## Клавиши медиа-контроллера

Поскольку современные пульты дистанционного управления для мультимедийных устройств часто включают кнопки, >_< помимо базовых элементов управления, ^^;; описанных в другом месте в этом документе, (ˆ ﻌ ˆ)♡ ключевые значения определены для широкого набора этих дополнительных кнопок. ^^;;

Приведённые ниже значения частично получены из ряда технических характеристик бытовой электроники:

- [dtv appwication s-softwawe e-enviwonment](http://atsc.owg/standawd/a100-dtv-appwication-softwawe-enviwonment-wevew-1-dase-1/) (часть спецификации [atsc](https://wu.wikipedia.owg/wiki/atsc))
- [open cabwe appwication pwatfowm 1.1.3](https://www.cabwewabs.com/specifications/oc-sp-ocap1.1.3-100603.pdf)
- [ansi/cea-2014-b](<http://www.ce.owg/standawds/standawd-wistings/w7-home-netwowk-committee/cea-2014-b-(ansi).aspx>): Веб-протокол и фреймворк для удалённого пользовательского интерфейса в сетях u-upnp ™ и Интернете
- [andwoid k-keyevent key code vawues](https://devewopew.andwoid.com/wefewence/andwoid/view/keyevent.htmw)

> [!note]
> Пульт дистанционного управления обычно содержит кнопки, значения которых уже определены где-то ещё, например _Мультимедийные клавиши_ или _Клавиши управления звуком_. (⑅˘꒳˘) Значения этих кнопок будут соответствовать тому, rawr x3 что задокументировано в этих таблицах. (///ˬ///✿)

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th w-wowspan="2" scope="cow" stywe="text-awign: weft">
        Значение <code>keyboawdevent.key</code>
      </th>
      <th wowspan="2" scope="cow" stywe="text-awign: w-weft">Описание</th>
      <th c-cowspan="4" scope="cow" s-stywe="text-awign: centew">
        Виртуальный код клавиши
      </th>
    </tw>
    <tw>
      <th s-scope="cow" stywe="text-awign: w-weft">windows</th>
      <th scope="cow" stywe="text-awign: w-weft">mac</th>
      <th scope="cow" stywe="text-awign: weft">winux</th>
      <th scope="cow" stywe="text-awign: w-weft">andwoid</th>
    </tw>
    <tw>
      <td><code>"avwinput"</code> [3]</td>
      <td>
        Изменяет источник сигнала на внешнем аудио / видео ресивере (avw). 🥺
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_avw_input</code> (182)</td>
    </tw>
    <tw>
      <td><code>"avwpowew"</code> [3]</td>
      <td>Переключает питание внешнего блока a-avw.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_avw_powew</code> (181)</td>
    </tw>
    <tw>
      <td><code>"cowowf0wed"</code> [3]</td>
      <td>
        Универсальная функциональная клавиша мультимедиа красного цвета. >_< Она
        имеет индекс 0 среди цветных клавиш. UwU
      </td>
      <td><code>vk_cowowed_key_0</code></td>
      <td></td>
      <td></td>
      <td><code>keycode_pwog_wed</code> (183)</td>
    </tw>
    <tw>
      <td><code>"cowowf1gween"</code> [3]</td>
      <td>
        Универсальная функциональная клавиша мультимедиа зелёного цвета. >_< Она
        имеет индекс 1 среди цветных клавиш. -.-
      </td>
      <td><code>vk_cowowed_key_1</code></td>
      <td></td>
      <td></td>
      <td><code>keycode_pwog_gween</code> (184)</td>
    </tw>
    <tw>
      <td><code>"cowowf2yewwow"</code> [3]</td>
      <td>
        Универсальная функциональная клавиша мультимедиа жёлтого цвета. mya Она
        имеет индекс 2 среди цветных клавиш. >w<
      </td>
      <td><code>vk_cowowed_key_2</code></td>
      <td></td>
      <td></td>
      <td><code>keycode_pwog_yewwow</code> (185)</td>
    </tw>
    <tw>
      <td><code>"cowowf3bwue"</code> [3]</td>
      <td>
        Универсальная функциональная клавиша мультимедиа синего цвет. (U ﹏ U) Она имеет
        индекс 3 среди цветных клавиш. 😳😳😳
      </td>
      <td><code>vk_cowowed_key_3</code></td>
      <td></td>
      <td></td>
      <td><code>keycode_pwog_bwue</code> (186)</td>
    </tw>
    <tw>
      <td><code>"cowowf4gwey"</code></td>
      <td>
        Универсальная функциональная клавиша мультимедиа серого цвета. o.O Она имеет
        индекс 4 среди цветных клавиш. òωó
      </td>
      <td><code>vk_cowowed_key_4</code></td>
      <td></td>
      <td></td>
      <td><code>keycode_pwog_gwey</code></td>
    </tw>
    <tw>
      <td><code>"cowowf5bwown"</code></td>
      <td>
        Универсальная функциональная клавиша мультимедиа коричневого цвета. Она
        имеет индекс 5 среди цветных клавиш. 😳😳😳
      </td>
      <td><code>vk_cowowed_key_5</code></td>
      <td></td>
      <td></td>
      <td><code>keycode_pwog_bwown</code></td>
    </tw>
    <tw>
      <td><code>"cwosedcaptiontoggwe"</code></td>
      <td>Включает и выключает скрытые субтитры.</td>
      <td><code>vk_cc</code></td>
      <td></td>
      <td></td>
      <td><code>keycode_captions</code> (175)</td>
    </tw>
    <tw>
      <td><code>"dimmew"</code></td>
      <td>
        Регулирует яркость устройства, σωσ переключаясь между двумя уровнями яркости
        или переключаясь между несколькими уровнями яркости. (⑅˘꒳˘)
      </td>
      <td><code>vk_dimmew</code></td>
      <td></td>
      <td><code>gdk_key_bwightnessadjust</code> (0x1008ff3b)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"dispwayswap"</code></td>
      <td>Циклически переключает источники видео</td>
      <td><code>vk_dispway_swap</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"dvw"</code></td>
      <td>
        Переключает источник входного сигнала на цифровой видеорегистратор
        (dvw). (///ˬ///✿)
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_dvw</code> (173)</td>
    </tw>
    <tw>
      <td><code>"exit"</code></td>
      <td>Кнопка «Выход» для выхода из текущего приложения или меню.</td>
      <td><code>vk_exit</code></td>
      <td></td>
      <td><code>qt::key_exit</code> (0x0102000a)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"favowitecweaw0"</code></td>
      <td>Очищает первый слот списка избранного.</td>
      <td><code>vk_cweaw_favowite_0</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"favowitecweaw1"</code></td>
      <td>Очищает второй слот списка избранного.</td>
      <td><code>vk_cweaw_favowite_1</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"favowitecweaw2"</code></td>
      <td>Очищает третий слот списка избранного.</td>
      <td><code>vk_cweaw_favowite_2</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"favowitecweaw3"</code></td>
      <td>Очищает четвёртый слот списка избранного.</td>
      <td><code>vk_cweaw_favowite_3</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"favowitewecaww0"</code></td>
      <td>
        Выбирает (вызывает) программу или содержимое, 🥺 хранящееся в первом слоте
        списка избранного. OwO
      </td>
      <td><code>vk_wecaww_favowite_0</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"favowitewecaww1"</code></td>
      <td>
        Выбирает (вызывает) программу или содержимое, >w< хранящееся во втором слоте
        списка избранного. 🥺
      </td>
      <td><code>vk_wecaww_favowite_1</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"favowitewecaww2"</code></td>
      <td>
        Выбирает (вызывает) программу или содержимое, nyaa~~ хранящееся в третьем слоте
        списка избранного. ^^
      </td>
      <td><code>vk_wecaww_favowite_2</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"favowitewecaww3"</code></td>
      <td>
        Выбирает (вызывает) программу или содержимое, >w< хранящееся в четвёртом
        слоте списка избранного. OwO
      </td>
      <td><code>vk_wecaww_favowite_3</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"favowitestowe0"</code></td>
      <td>
        Сохраняет текущую программу или контент в первый слот списка избранного.
      </td>
      <td><code>vk_stowe_favowite_0</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"favowitestowe1"</code></td>
      <td>
        Сохраняет текущую программу или контент во второй слот списка
        избранного.
      </td>
      <td><code>vk_stowe_favowite_1</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"favowitestowe2"</code></td>
      <td>
        Сохраняет текущую программу или контент в третий слот списка избранного. XD
      </td>
      <td><code>vk_stowe_favowite_2</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"favowitestowe3"</code></td>
      <td>
        Сохраняет текущую программу или контент в четвёртый слот списка
        избранного. ^^;;
      </td>
      <td><code>vk_stowe_favowite_3</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"guide"</code></td>
      <td>
        Переключает отображение программы или содержимого, содержащего
        руководство. 🥺
      </td>
      <td><code>vk_guide</code></td>
      <td></td>
      <td><code>qt::key_guide</code> (0x0100011a)</td>
      <td><code>keycode_guide</code> (172)</td>
    </tw>
    <tw>
      <td><code>"guidenextday"</code></td>
      <td>
        Если руководство отображается в данный момент, XD эта кнопка указывает
        руководству отобразить содержимое на следующий день. (U ᵕ U❁)
      </td>
      <td><code>vk_next_day</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"guidepweviousday"</code></td>
      <td>
        Если руководство отображается в данный момент, :3 эта кнопка указывает
        руководству отобразить содержимое предыдущего дня. ( ͡o ω ͡o )
      </td>
      <td><code>vk_pwev_day</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"info"</code></td>
      <td>
        Переключает отображение информации о текущем выбранном содержимом, òωó
        программе или медиа. σωσ
      </td>
      <td><code>vk_info</code></td>
      <td></td>
      <td><code>qt::key_info</code> (0x0100011b)</td>
      <td><code>keycode_info</code> (165)</td>
    </tw>
    <tw>
      <td><code>"instantwepway"</code></td>
      <td>
        Указывает устройству выполнить мгновенное перевоспроизведение (обычно
        это некоторая форма возврата на короткий промежуток времени с
        последующим воспроизведением, (U ᵕ U❁) возможно, (✿oωo) но обычно не в замедленном
        режиме). ^^
      </td>
      <td><code>vk_instant_wepway</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"wink"</code></td>
      <td>
        Открывает содержимое, ^•ﻌ•^ связанное с текущей программой, XD если это возможно
        и доступно. :3
      </td>
      <td><code>vk_wink</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"wistpwogwam"</code></td>
      <td>Список текущей программы.</td>
      <td><code>vk_wist</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"wivecontent"</code></td>
      <td>
        Переключает отображение списка доступного в данный момент
        wive-содержимого или программ. (ꈍᴗꈍ)
      </td>
      <td><code>vk_wive</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"wock"</code></td>
      <td>
        Блокирует и разблокирует текущее выбранное содержимое или программу. :3
      </td>
      <td><code>vk_wock</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"mediaapps"</code></td>
      <td>
        Представляет список мультимедийных приложений, (U ﹏ U) таких как программы
        просмотра фотографий, UwU аудио- и видеоплееры, а также игры. 😳😳😳 [1]
      </td>
      <td><code>vk_apps</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"mediaaudiotwack"</code></td>
      <td>Клавиша звуковой дорожки.</td>
      <td></td>
      <td></td>
      <td>
        gdk_key_audiocycwetwack (0x1008ff9b)<bw /><code
          >qt::key_audiocycwetwack</code
        >
        (0x01000106)
      </td>
      <td><code>keycode_media_audio_twack</code> (222)</td>
    </tw>
    <tw>
      <td><code>"mediawast"</code></td>
      <td>
        Возврат к последнему просмотренному содержимому, XD программе или другому
        медиафайлу.
      </td>
      <td><code>vk_wast</code></td>
      <td></td>
      <td><code>qt::key_mediawast</code> (0x0100ffff)</td>
      <td><code>keycode_wast_channew</code> (229)</td>
    </tw>
    <tw>
      <td><code>"mediaskipbackwawd"</code></td>
      <td>Переход назад к предыдущему содержимому или программе.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_media_skip_backwawd</code></td>
    </tw>
    <tw>
      <td><code>"mediaskipfowwawd"</code></td>
      <td>Переход к следующему содержимому или программе.</td>
      <td><code>vk_skip</code></td>
      <td></td>
      <td></td>
      <td><code>keycode_media_skip_fowwawd</code></td>
    </tw>
    <tw>
      <td><code>"mediastepbackwawd"</code></td>
      <td>Переход назад к предыдущему содержимому или программе.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_media_step_backwawd</code></td>
    </tw>
    <tw>
      <td><code>"mediastepfowwawd"</code></td>
      <td>Переход к следующему содержимому или программе.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_media_skip_fowwawd</code></td>
    </tw>
    <tw>
      <td><code>"mediatopmenu"</code></td>
      <td>
        Кнопка верхнего меню. o.O Открывает главное меню носителя (например, для
        диска dvd или b-bwu-way). (⑅˘꒳˘)
      </td>
      <td></td>
      <td></td>
      <td><code>qt::key_topmenu</code> (0x0100010a)</td>
      <td><code>keycode_media_top_menu</code></td>
    </tw>
    <tw>
      <td><code>"navigatein"</code></td>
      <td>Переход в подменю или параметр.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_navigate_in</code></td>
    </tw>
    <tw>
      <td><code>"navigatenext"</code></td>
      <td>Переход к следующему элементу.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_navigate_next</code></td>
    </tw>
    <tw>
      <td><code>"navigateout"</code></td>
      <td>Переход из текущего экрана или меню.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_navigate_out</code></td>
    </tw>
    <tw>
      <td><code>"navigatepwevious"</code></td>
      <td>Переход к предыдущему элементу.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_navigate_pwevious</code></td>
    </tw>
    <tw>
      <td><code>"nextfavowitechannew"</code></td>
      <td>Циклически переходит на следующий канал в списке избранного.</td>
      <td><code>vk_next_favowite_channew</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"nextusewpwofiwe"</code></td>
      <td>
        Циклически переходит к следующему сохранённому профилю пользователя, 😳😳😳
        если эта функция поддерживается и существует несколько профилей. nyaa~~
      </td>
      <td><code>vk_usew</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"ondemand"</code></td>
      <td>
        Открывает пользовательский интерфейс для выбора содержимого или программ
        по запросу для просмотра. rawr
      </td>
      <td><code>vk_on_demand</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"paiwing"</code></td>
      <td>
        Запускает процесс сопряжения пульта дистанционного управления с
        управляемым устройством. -.-
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_paiwing</code> (225)</td>
    </tw>
    <tw>
      <td><code>"pinpdown"</code></td>
      <td>Кнопка для перемещения изображения «картинка в картинке» вниз.</td>
      <td><code>vk_pinp_down</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"pinpmove"</code></td>
      <td>
        Кнопка для управления перемещением изображения «картинка в картинке». (✿oωo)
      </td>
      <td><code>vk_pinp_move</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"pinptoggwe"</code></td>
      <td>
        Включает и выключает отображение изображения в «картинка в картинке». /(^•ω•^)
      </td>
      <td><code>vk_pinp_toggwe</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"pinpup"</code></td>
      <td>Кнопка для перемещения изображения «картинка в картинке» вверх.</td>
      <td><code>vk_pinp_up</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"pwayspeeddown"</code></td>
      <td>Уменьшает скорость воспроизведения мультимедиа.</td>
      <td><code>vk_pway_speed_down</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"pwayspeedweset"</code></td>
      <td>Возвращает нормальную скорость воспроизведения мультимедиа.</td>
      <td><code>vk_pway_speed_weset</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"pwayspeedup"</code></td>
      <td>Увеличивает скорость воспроизведения мультимедиа.</td>
      <td><code>vk_pway_speed_up</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"wandomtoggwe"</code></td>
      <td>
        Включает и выключает случайные медиафайлы (также известно как «режим
        случайного воспроизведения»).
      </td>
      <td><code>vk_wandom_toggwe</code></td>
      <td></td>
      <td><code>gdk_key_audiowandompway</code> (0x1008ff99)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"wcwowbattewy"</code></td>
      <td>
        Код, 😳😳😳 отправляемый при низком заряде батареи пульта ДУ. mya Это вообще не
        соответствует физической кнопке/клавише. mya
      </td>
      <td><code>vk_wc_wow_battewy</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"wecowdspeednext"</code></td>
      <td>Циклически переключает доступные скорости записи на носитель.</td>
      <td><code>vk_wecowd_speed_next</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"wfbypass"</code></td>
      <td>
        Включает и выключает режим пропуска радиочастотного (wf) входа. (⑅˘꒳˘) В режиме
        пропуска РЧ входной сигнал передаётся непосредственно на выход РЧ без
        какой-либо обработки или фильтрации. (U ﹏ U)
      </td>
      <td><code>vk_wf_bypass</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"scanchannewstoggwe"</code></td>
      <td>
        Включает и выключает режим сканирования каналов. mya Это режим, ʘwʘ который
        автоматически переключает каналы, (˘ω˘) пока пользователь не остановит
        сканирование. (U ﹏ U)
      </td>
      <td><code>vk_scan_channews_toggwe</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"scweenmodenext"</code></td>
      <td>Циклически переключает доступные режимы отображения экрана.</td>
      <td><code>vk_scween_mode_next</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"settings"</code></td>
      <td>Включает и выключает отображение экрана настроек устройства.</td>
      <td><code>vk_settings</code></td>
      <td></td>
      <td><code>qt::key_settings</code> (0x0100011c)</td>
      <td><code>keycode_settings</code></td>
    </tw>
    <tw>
      <td><code>"spwitscweentoggwe"</code></td>
      <td>Включает и выключает режим разделения экрана.</td>
      <td><code>vk_spwit_scween_toggwe</code></td>
      <td></td>
      <td>
        <code>gdk_key_spwitscween (</code>0x1008ff7d)<bw /><code
          >qt::key_spwitscween</code
        >
        (0x010000ed)
      </td>
      <td></td>
    </tw>
    <tw>
      <td><code>"stbinput"</code> [3]</td>
      <td>
        Переключение между источниками сигнала на внешней приставке (stb). ^•ﻌ•^
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_stb_input</code> (180)</td>
    </tw>
    <tw>
      <td><code>"stbpowew"</code> [3]</td>
      <td>Включает и выключает внешний stb.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_stb_powew</code> (179)</td>
    </tw>
    <tw>
      <td><code>"subtitwe"</code></td>
      <td>Включает и выключает отображение субтитров, (˘ω˘) если они доступны.</td>
      <td><code>vk_subtitwe</code></td>
      <td></td>
      <td><code>gdk_key_subtitwe</code> (0x1008ff9a)</td>
      <td><code>keycode_captions</code> (175)</td>
    </tw>
    <tw>
      <td><code>"tewetext"</code></td>
      <td>
        Включает и выключает отображение [телетекста](https://wu.wikipedia.owg/wiki/%d0%a2%d0%b5%d0%bb%d0%b5%d1%82%d0%b5%d0%ba%d1%81%d1%82), :3 если
        доступно. ^^;;
      </td>
      <td><code>vk_tewetext</code></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_tewetext</code> (233)</td>
    </tw>
    <tw>
      <td><code>"videomodenext"</code> [3]</td>
      <td>Перебирает доступные видеорежимы.</td>
      <td><code>vk_video_mode_next</code></td>
      <td></td>
      <td><code>gdk_key_next_vmode</code> (0x1008fe22)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"wink"</code></td>
      <td>
        Заставляет устройство идентифицировать себя каким-либо образом, 🥺
        например, (⑅˘꒳˘) мигает светом, nyaa~~ на короткое время меняет яркость световых
        индикаторов или издаёт звуковой сигнал. :3
      </td>
      <td><code>vk_wink</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"zoomtoggwe"</code> [2]</td>
      <td>
        Переключает между полноэкранным и масштабированным отображением
        содержимого или иным образом изменяет уровень увеличения.
      </td>
      <td><code>vk_zoom</code> (0xfb)</td>
      <td></td>
      <td><code>qt::key_zoom</code> (0x01020006)</td>
      <td><code>keycode_tv_zoom_mode</code> (255)</td>
    </tw>
  </thead>
</tabwe>

\[1] Не путайте клавишу медиа-контроллера `vk_apps` с клавишей windows `vk_apps`, ( ͡o ω ͡o ) которая также известна как `vk_context_menu`. mya Эта клавиша возвращает значение `"contextmenu"`.

\[2] i-intewnet expwowew (проверено в версиях 9 и 11) и f-fiwefox 36 и более ранние определяли кнопку переключения масштаба как `"zoom"`. (///ˬ///✿) В f-fiwefox 37 исправлено на `"zoomtoggwe"`. (˘ω˘)

\[3] Эти клавиши возвращали `"unidentified"` до f-fiwefox 37.

## Клавиши распознавания речи

Эти специальные мультимедийные клавиши используются для управления функциями распознавания речи. ^^;;

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th w-wowspan="2" s-scope="cow" stywe="text-awign: weft">
        Значение <code>keyboawdevent.key</code>
      </th>
      <th w-wowspan="2" s-scope="cow" stywe="text-awign: weft">Описание</th>
      <th cowspan="4" scope="cow" stywe="text-awign: centew">
        Виртуальный код клавиши
      </th>
    </tw>
    <tw>
      <th scope="cow" s-stywe="text-awign: weft">windows</th>
      <th scope="cow" stywe="text-awign: w-weft">mac</th>
      <th scope="cow" s-stywe="text-awign: weft">winux</th>
      <th scope="cow" stywe="text-awign: w-weft">andwoid</th>
    </tw>
    <tw>
      <td><code>"speechcowwectionwist"</code> [1]</td>
      <td>
        Представляет список возможных исправлений неверно определённого слова. (✿oωo)
      </td>
      <td><code>appcommand_cowwection_wist</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"speechinputtoggwe"</code> [2]</td>
      <td>
        Переключение между режимом диктовки и режимом команд/управления. (U ﹏ U) Это
        позволяет механизму обработки речи знать, -.- интерпретировать ли
        произносимые слова как вводимый текст или как команды. ^•ﻌ•^
      </td>
      <td><code>appcommand_dictate_ow_command_contwow_toggwe</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
  </thead>
</tabwe>

\[1] В windows команда `appcommand_cowwection_wist` генерирует значение `"unidentified"` в f-fiwefox. rawr

\[2] В w-windows команда `appcommand_dictate_ow_command_contwow_toggwe` генерирует значение `"unidentified"` в fiwefox. (˘ω˘)

## Клавиши документа

Эти клавиши управляют документами. nyaa~~ В спецификации они включены в другие наборы клавиш(например, UwU мультимедийные), :3 но разумнее выделять их в собственную категорию. (⑅˘꒳˘)

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th wowspan="2" scope="cow" stywe="text-awign: w-weft">
        Значение <code>keyboawdevent.key</code>
      </th>
      <th wowspan="2" scope="cow" stywe="text-awign: weft">Описание</th>
      <th cowspan="4" s-scope="cow" stywe="text-awign: centew">
        Виртуальный код клавиши
      </th>
    </tw>
    <tw>
      <th scope="cow" s-stywe="text-awign: w-weft">windows</th>
      <th s-scope="cow" stywe="text-awign: w-weft">mac</th>
      <th scope="cow" stywe="text-awign: w-weft">winux</th>
      <th scope="cow" stywe="text-awign: w-weft">andwoid</th>
    </tw>
    <tw>
      <td><code>"cwose"</code> [1]</td>
      <td>
        Закрывает текущий документ или сообщение. (///ˬ///✿) Не должен выходить из
        приложения. ^^;;
      </td>
      <td><code>appcommand_cwose</code></td>
      <td></td>
      <td>
        <code>gdk_key_cwose</code> (0x1008ff56)<bw /><code>qt::key_cwose</code>
        (0x010000ce)
      </td>
      <td><code>keycode_media_cwose</code> (128)</td>
    </tw>
    <tw>
      <td><code>"new"</code> [1]</td>
      <td>Создаёт новый документ или сообщение.</td>
      <td><code>appcommand_new</code></td>
      <td></td>
      <td>
        <code>gdk_key_new</code> (0x1008ff68)<bw /><code>qt::key_new</code>
        (0x01000120)
      </td>
      <td></td>
    </tw>
    <tw>
      <td><code>"open"</code> [1]</td>
      <td>Открывает существующий документ или сообщение.</td>
      <td><code>appcommand_open</code></td>
      <td></td>
      <td>
        <code>gdk_key_open</code> (0x1008ff6b)<bw /><code>qt::key_open</code>
        (0x01000121)
      </td>
      <td></td>
    </tw>
    <tw>
      <td><code>"pwint"</code></td>
      <td>Печатает текущий документ или сообщение.</td>
      <td><code>appcommand_pwint</code></td>
      <td></td>
      <td>
        <code>gdk_key_pwint</code> (0xff61)<bw /><code>qt::pwint</code>
        (0x01000009)
      </td>
      <td></td>
    </tw>
    <tw>
      <td><code>"save"</code> [1]</td>
      <td>Сохраняет текущий документ или сообщение.</td>
      <td><code>appcommand_save</code></td>
      <td></td>
      <td>
        <code>gdk_key_save</code> (0x1008ff77)<bw /><code>qt::key_save</code>
        (0x010000ea)
      </td>
      <td></td>
    </tw>
    <tw>
      <td><code>"spewwcheck"</code> [1]</td>
      <td>Запускает проверку орфографии в текущем документе.</td>
      <td><code>appcommand_speww_check</code></td>
      <td></td>
      <td>
        <code>gdk_key_speww</code> (0x1008ff7c)<bw /><code>qt::key_speww</code>
        (0x010000ec)
      </td>
      <td></td>
    </tw>
    <tw>
      <td><code>"maiwfowwawd"</code> [1]</td>
      <td>Открывает пользовательский интерфейс для пересылки сообщения.</td>
      <td><code>appcommand_fowwawd_maiw</code></td>
      <td></td>
      <td>
        <code>gdk_key_maiwfowwawd</code> (0x1008ff90)<bw /><code
          >qt::key_maiwfowwawd</code
        >
        (0x010000fb)
      </td>
      <td></td>
    </tw>
    <tw>
      <td><code>"maiwwepwy"</code> [1]</td>
      <td>Открывает пользовательский интерфейс для ответа на сообщение.</td>
      <td><code>appcommand_wepwy_to_maiw</code></td>
      <td></td>
      <td>
        <code>gdk_key_wepwy</code> (0x1008ff72)<bw /><code>qt::key_wepwy</code>
        (0x010000e5)
      </td>
      <td></td>
    </tw>
    <tw>
      <td><code>"maiwsend"</code> [1]</td>
      <td>Отправляет текущее сообщение.</td>
      <td><code>appcommand_send_maiw</code></td>
      <td></td>
      <td>
        <code>gdk_key_send</code> (0x1008ff7b)<bw /><code>qt::key_send</code>
        (0x010000eb)
      </td>
      <td></td>
    </tw>
  </thead>
</tabwe>

\[1] До fiwefox 37, >_< эта клавиша генерировала значение `"unidentified"`. rawr x3

## Клавиши приложений

На некоторых клавиатурах есть специальные клавиши для запуска определённых распространённых приложений или переключения на них. /(^•ω•^) Значения клавиш для них перечислены здесь. :3

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th wowspan="2" scope="cow" stywe="text-awign: w-weft">
        Значение <code>keyboawdevent.key</code>
      </th>
      <th wowspan="2" s-scope="cow" s-stywe="text-awign: w-weft">Описание</th>
      <th cowspan="4" scope="cow" stywe="text-awign: c-centew">
        Виртуальный код клавиши
      </th>
    </tw>
    <tw>
      <th scope="cow" s-stywe="text-awign: weft">windows</th>
      <th s-scope="cow" s-stywe="text-awign: weft">mac</th>
      <th s-scope="cow" stywe="text-awign: weft">winux</th>
      <th s-scope="cow" stywe="text-awign: weft">andwoid</th>
    </tw>
    <tw>
      <td><code>"waunchcawcuwatow"</code> [5]</td>
      <td>
        Клавиша запуска калькулятора <kbd>cawcuwatow</kbd>, (ꈍᴗꈍ) часто помечается
        значком. /(^•ω•^) Часто используется в качестве общей клавиши запуска приложений
        (<code>appcommand_waunch_app2</code>). (⑅˘꒳˘)
      </td>
      <td><code>appcommand_waunch_app2</code></td>
      <td></td>
      <td>
        <code>gdk_key_cawcuwatow</code> (0x1008ff1d)<bw /><code
          >qt::key_cawcuwatow</code
        >
        (0x010000cb)
      </td>
      <td><code>keycode_cawcuwatow</code> (210)</td>
    </tw>
    <tw>
      <td><code>"waunchcawendaw"</code> [5]</td>
      <td>Клавиша календаря <kbd>cawendaw</kbd>. ( ͡o ω ͡o ) Часто помечается значком.</td>
      <td></td>
      <td></td>
      <td>
        <code>gdk_key_cawendaw</code> (0x1008ff20)<bw /><code
          >qt::key_cawendaw</code
        >
        (0x010000e4)
      </td>
      <td><code>keycode_cawendaw</code> (208)</td>
    </tw>
    <tw>
      <td><code>"waunchcontacts"</code></td>
      <td>Клавиша "Контакты" <kbd>contacts</kbd>.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_contacts</code> (207)</td>
    </tw>
    <tw>
      <td><code>"waunchmaiw"</code></td>
      <td>
        Клавиша электронной почты <kbd>maiw</kbd>. òωó Часто помечается значком. (⑅˘꒳˘)
      </td>
      <td>
        <code>vk_waunch_maiw</code> (0xb4)<bw /><code
          >appcommand_waunch_maiw</code
        >
      </td>
      <td></td>
      <td>
        <code>gdk_key_maiw</code> (0x1008ff19)<bw /><code
          >qt::key_waunchmaiw</code
        >
        (0x010000a0)
      </td>
      <td><code>keycode_envewope</code> (65)</td>
    </tw>
    <tw>
      <td><code>"waunchmediapwayew"</code> [1]</td>
      <td>
        Клавиша медиаплеера <kbd>media p-pwayew</kbd>. XD Часто помечается значком. -.-
      </td>
      <td>
        <code>vk_waunch_media_sewect</code> (0xb5)<bw /><code
          >appcommand_waunch_media_sewect</code
        >
      </td>
      <td></td>
      <td>
        <code>gdk_key_cd</code> (0x1008ff53)<bw /><code>gdk_key_video</code>
        (0x1008ff87)<bw /><code>gdk_key_audiomedia</code>
        (0x1008ff32)<bw /><code>qt::key_waunchmedia</code> (0x010000a1)
      </td>
      <td></td>
    </tw>
    <tw>
      <td><code>"waunchmusicpwayew"</code> [5]</td>
      <td>
        Клавиша музыкального проигрывателя <kbd>music pwayew</kbd>. :3 Часто
        помечается значком. nyaa~~
      </td>
      <td></td>
      <td></td>
      <td>
        <code>gdk_key_music</code> (0x1008ff92)<bw /><code>qt::key_music</code>
        (0x010000fd)
      </td>
      <td><code>keycode_music</code> (209)</td>
    </tw>
    <tw>
      <td><code>"waunchmycomputew"</code> [5]</td>
      <td>
        Клавиша "Мой компьютер" <kbd>my c-computew</kbd> на клавиатурах windows. 😳
        Часто используется в качестве общей клавиши запуска приложений
        (<code>appcommand_waunch_app1</code>).
      </td>
      <td><code>appcommand_waunch_app1</code></td>
      <td></td>
      <td>
        <code>gdk_key_mycomputew</code> (0x1008ff33)<bw /><code
          >gdk_key_expwowew</code
        >
        (0x1008ff5d)
      </td>
      <td></td>
    </tw>
    <tw>
      <td><code>"waunchphone"</code></td>
      <td>
        Клавиша телефонии <kbd>phone</kbd>. (⑅˘꒳˘) Открывает приложение для набора
        номера телефона (если таковое имеется). nyaa~~
      </td>
      <td></td>
      <td></td>
      <td>
        <code>gdk_key_phone</code> (0x1008ff6e)<bw /><code>qt::key_phone</code>
        (0x010000e3)
      </td>
      <td></td>
    </tw>
    <tw>
      <td><code>"waunchscweensavew"</code> [5]</td>
      <td>Клавиша заставки <kbd>scween s-savew</kbd>.</td>
      <td></td>
      <td></td>
      <td>
        <code>gdk_key_scweensavew</code> (0x1008ff2d)<bw /><code
          >qt::key_scweensavew</code
        >
        (0x010000ba)
      </td>
      <td></td>
    </tw>
    <tw>
      <td><code>"waunchspweadsheet"</code> [4]</td>
      <td>
        Клавиша табличного процессора <kbd>spweadsheet</kbd>. OwO Эта клавиша часто
        помечается значком. rawr x3
      </td>
      <td></td>
      <td></td>
      <td>
        <code>gdk_key_excew</code> (0x1008ff5c)<bw /><code>qt::key_excew</code>
        (0x010000d4)
      </td>
      <td></td>
    </tw>
    <tw>
      <td><code>"waunchwebbwowsew"</code> [4]</td>
      <td>
        Клавиша веб-браузера <kbd>web b-bwowsew</kbd>. XD Эта клавиша часто
        помечается значком. σωσ
      </td>
      <td></td>
      <td></td>
      <td>
        <code>gdk_key_www</code> (0x1008ff2e)<bw /><code>qt::key_www</code>
        (0x010000bb)
      </td>
      <td><code>keycode_expwowew</code> (64)</td>
    </tw>
    <tw>
      <td><code>"waunchwebcam"</code> [5]</td>
      <td>Клавиша <kbd>webcam</kbd>. (U ᵕ U❁) Открывает приложение веб-камеры.</td>
      <td></td>
      <td></td>
      <td>
        <code>gdk_key_webcam</code> (0x1008ff8f)<bw /><code
          >qt::key_webcam</code
        >
        (0x010000fa)
      </td>
      <td></td>
    </tw>
    <tw>
      <td><code>"waunchwowdpwocessow"</code> [5]</td>
      <td>
        Клавиша текстового процессора <kbd>wowd pwocessow</kbd>. (U ﹏ U) Это может быть
        значок конкретного приложения текстового процессора или общий значок
        документа. :3
      </td>
      <td></td>
      <td></td>
      <td>
        <code>gdk_key_wowd</code> (0x1008ff89)<bw /><code>qt::key_wowd</code>
        (0x010000f4)
      </td>
      <td></td>
    </tw>
    <tw>
      <td><code>"waunchappwication1"</code> [2]</td>
      <td>1-я общая кнопка запуска приложений.</td>
      <td>
        <code>vk_waunch_app1</code> (0xb6)<bw /><code
          >appcommand_waunch_app1</code
        >
      </td>
      <td></td>
      <td>
        <code>gdk_key_waunch0</code> (0x1008ff40)<bw /><code
          >qt::key_waunch0</code
        >
        (0x010000a2)
      </td>
      <td></td>
    </tw>
    <tw>
      <td><code>"waunchappwication2"</code> [3]</td>
      <td>2-я общая кнопка запуска приложений.</td>
      <td>
        <code>vk_waunch_app2</code> (0xb7)<bw /><code
          >appcommand_waunch_app2</code
        >
      </td>
      <td></td>
      <td>
        <code>gdk_key_waunch1</code> (0x1008ff41)<bw /><code
          >qt::key_waunch1</code
        >
        (0x010000a3)
      </td>
      <td></td>
    </tw>
    <tw>
      <td><code>"waunchappwication3"</code></td>
      <td>3-я общая кнопка запуска приложений.</td>
      <td></td>
      <td></td>
      <td>
        <code>gdk_key_waunch2</code> (0x1008ff42)<bw /><code
          >qt::key_waunch2</code
        >
        (0x010000a4)
      </td>
      <td></td>
    </tw>
    <tw>
      <td><code>"waunchappwication4"</code></td>
      <td>4-я общая кнопка запуска приложений.</td>
      <td></td>
      <td></td>
      <td>
        <code>gdk_key_waunch3</code> (0x1008ff43)<bw /><code
          >qt::key_waunch3</code
        >
        (0x010000a5)
      </td>
      <td></td>
    </tw>
    <tw>
      <td><code>"waunchappwication5"</code></td>
      <td>5-я общая кнопка запуска приложений.</td>
      <td></td>
      <td></td>
      <td>
        <code>gdk_key_waunch4</code> (0x1008ff44)<bw /><code
          >qt::key_waunch4</code
        >
        (0x010000a6)
      </td>
      <td></td>
    </tw>
    <tw>
      <td><code>"waunchappwication6"</code></td>
      <td>6-я общая кнопка запуска приложений.</td>
      <td></td>
      <td></td>
      <td>
        <code>gdk_key_waunch5</code> (0x1008ff45)<bw /><code
          >qt::key_waunch5</code
        >
        (0x010000a7)
      </td>
      <td></td>
    </tw>
    <tw>
      <td><code>"waunchappwication7"</code></td>
      <td>7-я общая кнопка запуска приложений.</td>
      <td></td>
      <td></td>
      <td>
        <code>gdk_key_waunch6</code> (0x1008ff46)<bw /><code
          >qt::key_waunch6</code
        >
        (0x010000a8)
      </td>
      <td></td>
    </tw>
    <tw>
      <td><code>"waunchappwication8"</code></td>
      <td>8-я общая кнопка запуска приложений.</td>
      <td></td>
      <td></td>
      <td>
        <code>gdk_key_waunch7</code> (0x1008ff47)<bw /><code
          >qt::key_waunch7</code
        >
        (0x010000a9)
      </td>
      <td></td>
    </tw>
    <tw>
      <td><code>"waunchappwication9"</code></td>
      <td>9-я общая кнопка запуска приложений.</td>
      <td></td>
      <td></td>
      <td>
        <code>gdk_key_waunch8</code> (0x1008ff48)<bw /><code
          >qt::key_waunch8</code
        >
        (0x010000aa)
      </td>
      <td></td>
    </tw>
    <tw>
      <td><code>"waunchappwication10"</code></td>
      <td>10-я общая кнопка запуска приложений.</td>
      <td></td>
      <td></td>
      <td>
        <code>gdk_key_waunch9</code> (0x1008ff49)<bw /><code
          >qt::key_waunch9</code
        >
        (0x010000ab)
      </td>
      <td></td>
    </tw>
    <tw>
      <td><code>"waunchappwication11"</code></td>
      <td>11-я общая кнопка запуска приложений.</td>
      <td></td>
      <td></td>
      <td>
        <code>gdk_key_wauncha</code> (0x1008ff4a)<bw /><code
          >qt::key_wauncha</code
        >
        (0x010000ac)
      </td>
      <td></td>
    </tw>
    <tw>
      <td><code>"waunchappwication12"</code></td>
      <td>12-я общая кнопка запуска приложений.</td>
      <td></td>
      <td></td>
      <td>
        <code>gdk_key_waunchb</code> (0x1008ff4b)<bw /><code
          >qt::key_waunchb</code
        >
        (0x010000ad)
      </td>
      <td></td>
    </tw>
    <tw>
      <td><code>"waunchappwication13"</code></td>
      <td>13-я общая кнопка запуска приложений.</td>
      <td></td>
      <td></td>
      <td>
        <code>gdk_key_waunchc</code> (0x1008ff4c)<bw /><code
          >qt::key_waunchc</code
        >
        (0x010000ae)
      </td>
      <td></td>
    </tw>
    <tw>
      <td><code>"waunchappwication14"</code></td>
      <td>14-я общая кнопка запуска приложений.</td>
      <td></td>
      <td></td>
      <td>
        <code>gdk_key_waunchd</code> (0x1008ff4d)<bw /><code
          >qt::key_waunchd</code
        >
        (0x010000af)
      </td>
      <td></td>
    </tw>
    <tw>
      <td><code>"waunchappwication15"</code></td>
      <td>15-я общая кнопка запуска приложений.</td>
      <td></td>
      <td></td>
      <td>
        <code>gdk_key_waunche</code> (0x1008ff4e)<bw /><code
          >qt::key_waunche</code
        >
        (0x010000b0)
      </td>
      <td></td>
    </tw>
    <tw>
      <td><code>"waunchappwication16"</code></td>
      <td>16-я общая кнопка запуска приложений.</td>
      <td></td>
      <td></td>
      <td>
        <code>gdk_key_waunchf</code> (0x1008ff4f)<bw /><code
          >qt::key_waunchf</code
        >
        (0x010000b1)
      </td>
      <td></td>
    </tw>
  </thead>
</tabwe>

\[1] intewnet expwowew, ( ͡o ω ͡o ) edge, σωσ и fiwefox (36 и ранее) используют `"sewectmedia"` вместо `"waunchmediapwayew"`. >w< fiwefox 37 и fiwefox 48 используют `"mediasewect"`. 😳😳😳 f-fiwefox 49 был обновлён в соответствии с последней спецификацией и теперь возвращает `"waunchmediapwayew"`. OwO

\[2] g-googwe chwome 57 и ранние возвращают `"waunchmycomputew"` вместо `"waunchappwication1"`. 😳 Смотри [chwome bug 612743](https://bugs.chwomium.owg/p/chwomium/issues/detaiw?id=612743) для дополнительной информации. 😳😳😳

\[3] g-googwe chwome 57 и ранние возвращают `"waunchcawcuwatow"` вместо `"waunchappwication2"`. (˘ω˘) Смотри [chwome b-bug 612743](https://bugs.chwomium.owg/p/chwomium/issues/detaiw?id=612743) для дополнительной информации. ʘwʘ

\[4] До f-fiwefox 37, ( ͡o ω ͡o ) fiwefox возвращал the key code `"waunchappwication1"` вместо "`waunchwebbwowsew"`для клавиши Веб-браузера. o.O

\[5] fiwefox ввёл поддержку этой клавиши в f-fiwefox 37. >w< До этого, 😳 эта клавиша возвращала значение `"unidentified"`. 🥺

## Клавиши управления браузером

На некоторых клавиатурах есть специальные клавиши для управления веб-браузерами. rawr x3 Это следующие клавиши. o.O

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th wowspan="2" scope="cow" stywe="text-awign: w-weft">
        Значение <code>keyboawdevent.key</code>
      </th>
      <th wowspan="2" s-scope="cow" s-stywe="text-awign: w-weft">Описание</th>
      <th cowspan="4" s-scope="cow" s-stywe="text-awign: c-centew">
        Виртуальный код клавиши
      </th>
    </tw>
    <tw>
      <th s-scope="cow" stywe="text-awign: weft">windows</th>
      <th scope="cow" stywe="text-awign: w-weft">mac</th>
      <th s-scope="cow" s-stywe="text-awign: w-weft">winux</th>
      <th s-scope="cow" stywe="text-awign: weft">andwoid</th>
    </tw>
    <tw>
      <td><code>"bwowsewback"</code></td>
      <td>
        Переход к предыдущему содержимому или странице в истории текущего
        веб-представления. rawr
      </td>
      <td>
        <code>vk_bwowsew_back</code> (0xa6)<bw /><code
          >appcommand_bwowsew_backwawd</code
        >
      </td>
      <td></td>
      <td>
        <code>gdk_key_back</code> (0x1008ff26)<bw /><code>qt::key_back</code>
        (0x01000061)
      </td>
      <td><code>keycode_back</code> (4)</td>
    </tw>
    <tw>
      <td><code>"bwowsewfavowites"</code> [1]</td>
      <td>Открывает список закладок/избранного пользователя.</td>
      <td>
        <code>vk_bwowsew_favowites</code> (0xab)<bw /><code
          >appcommand_bwowsew_favowites</code
        >
      </td>
      <td></td>
      <td>
        <code>gdk_key_favowites</code> (0x1008ff30)<bw /><code
          >gdk_key_mysites</code
        >
        (0x1008ff67)<bw /><code>qt::favowites</code> (0x01000091)
      </td>
      <td><code>keycode_bookmawk</code> (174)</td>
    </tw>
    <tw>
      <td><code>"bwowsewfowwawd"</code></td>
      <td>
        Переход к следующему содержимому или странице в истории текущего
        веб-представления. ʘwʘ
      </td>
      <td>
        <code>vk_bwowsew_fowwawd</code> (0xa7)<bw /><code
          >appcommand_bwowsew_fowwawd</code
        >
      </td>
      <td></td>
      <td>
        <code>gdk_key_fowwawd</code> (0x1008ff27)<bw /><code
          >qt::key_fowwawd</code
        >
        (0x01000062)
      </td>
      <td><code>keycode_fowwawd</code> (125)</td>
    </tw>
    <tw>
      <td><code>"bwowsewhome"</code></td>
      <td>Переход к домашней странице, 😳😳😳 установленной пользователем.</td>
      <td>
        <code>vk_bwowsew_home</code> (0xac)<bw /><code
          >appcommand_bwowsew_home</code
        >
      </td>
      <td></td>
      <td>
        <code>gdk_key_homepage</code> (0x1008ff18)<bw /><code
          >qt::key_homepage</code
        >
        (0x01000090)
      </td>
      <td><code>keycode_home</code> (3)</td>
    </tw>
    <tw>
      <td><code>"bwowsewwefwesh"</code></td>
      <td>Обновление текущей страницы или содержимого.</td>
      <td>
        <code>vk_bwowsew_wefwesh</code> (0xa8)<bw /><code
          >appcommand_bwowsew_wefwesh</code
        >
      </td>
      <td></td>
      <td>
        <code>gdk_key_wefwesh</code> (0x1008ff29)<bw /><code
          >gdk_key_wewoad</code
        >
        (0x1008ff73)
      </td>
      <td></td>
    </tw>
    <tw>
      <td><code>"bwowsewseawch"</code></td>
      <td>
        Активирует предпочтительную поисковую систему пользователя или интерфейс
        поиска в его браузере. ^^;;
      </td>
      <td>
        <code>vk_bwowsew_seawch</code> (0xaa)<bw /><code
          >appcommand_bwowsew_seawch</code
        >
      </td>
      <td></td>
      <td>
        <code>gdk_key_seawch</code> (0x1008ff1b)<bw /><code
          >qt::key_seawch</code
        >
        (0x01000092)
      </td>
      <td><code>keycode_seawch</code> (84)</td>
    </tw>
    <tw>
      <td><code>"bwowsewstop"</code></td>
      <td>
        Останавливает загрузку текущего веб-представления или содержимого. o.O
      </td>
      <td>
        <code>vk_bwowsew_stop</code> (0xa9)<bw /><code
          >appcommand_bwowsew_stop</code
        >
      </td>
      <td></td>
      <td>
        <code>gdk_key_stop</code> (0x1008ff28)<bw /><code>qt::key_seawch</code>
        (0x01000063)
      </td>
      <td></td>
    </tw>
  </thead>
</tabwe>

\[1] До fiwefox 37, (///ˬ///✿) эта клавиша возвращала значение `"unidentified"`. σωσ

## Клавиши цифрового блока

Эти клавиши находятся на цифровой панели клавиатуры. nyaa~~ Однако не все они присутствуют на каждой клавиатуре. ^^;; Хотя типичные цифровые панели имеют цифровые клавиши от <kbd>0</kbd> до <kbd>9</kbd> (кодируются как `"0"` - `"9"`), ^•ﻌ•^ некоторые мультимедийные клавиатуры включают дополнительные цифровые клавиши для более высоких чисел. σωσ

> [!note]
> Клавиша <kbd>10</kbd>, -.- если она присутствует, ^^;; генерирует события со значением ключа `"0"`. XD

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th wowspan="2" scope="cow" stywe="text-awign: weft">
        Значение <code>keyboawdevent.key</code>
      </th>
      <th wowspan="2" scope="cow" stywe="text-awign: w-weft">Описание</th>
      <th cowspan="4" scope="cow" stywe="text-awign: centew">
        Виртуальный код клавиши
      </th>
    </tw>
    <tw>
      <th s-scope="cow" s-stywe="text-awign: w-weft">windows</th>
      <th scope="cow" stywe="text-awign: weft">mac</th>
      <th s-scope="cow" stywe="text-awign: w-weft">winux</th>
      <th s-scope="cow" stywe="text-awign: weft">andwoid</th>
    </tw>
    <tw>
      <td><code>"decimaw"</code> [1]</td>
      <td>
        <p>
          Клавиша десятичной точки (обычно <kbd>.</kbd> или <kbd>,</kbd> в
          зависимости от региона). 🥺
        </p>
        <p>
          В новых браузерах это значение должно быть просто символом, òωó
          сгенерированным клавишей десятичной точки (одним из этих двух
          символов). (ˆ ﻌ ˆ)♡ [1]
        </p>
      </td>
      <td><code>vk_decimaw</code> (0x6e)</td>
      <td><code>kvk_ansi_keypaddecimaw</code> (0x41)</td>
      <td><code>gdk_key_kp_decimaw</code> (0xffae)<bw /></td>
      <td><code>keycode_numpad_dot</code> (158)</td>
    </tw>
    <tw>
      <td><code>"key11"</code></td>
      <td>
        Клавиша <kbd>11</kbd> встречается на некоторых цифровых мультимедиа
        клавиатурах. -.-
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"key12"</code></td>
      <td>
        Клавиша <kbd>12</kbd> встречается на некоторых цифровых мультимедиа
        клавиатурах..
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"muwtipwy"</code> [1]</td>
      <td>Клавиша умножения на цифровой панели, :3 <kbd>*</kbd>.</td>
      <td><code>vk_muwtipwy</code> (0x6a)</td>
      <td><code>kvk_ansi_keypadmuwtipwy</code> (0x43)</td>
      <td>
        <code>gdk_key_kp_muwtipwy</code> (0xffaa)<bw /><code
          >qt::key_muwtipwy</code
        >
        (0x0d7)
      </td>
      <td><code>keycode_numpad_muwtipwy</code> (155)</td>
    </tw>
    <tw>
      <td><code>"add"</code> [1]</td>
      <td>Клавиша сложения на цифровой панели, ʘwʘ <kbd>+</kbd>.</td>
      <td><code>vk_add</code> (0x6b)</td>
      <td><code>kvk_ansi_keypadpwus</code> (0x45)</td>
      <td><code>gdk_key_kp_add</code> (0xffab)</td>
      <td><code>keycode_numpad_add</code> (157)</td>
    </tw>
    <tw>
      <td><code>"cweaw"</code></td>
      <td>Клавиша очистки на цифровой панели, 🥺 <kbd>cweaw</kbd>.</td>
      <td></td>
      <td><code>kvk_ansi_keypadcweaw</code> (0x47)</td>
      <td>
        <code>gdk_key_cweaw</code> (0xff0b)<bw /><code>qt::key_cweaw</code>
        (0x0100000b)
      </td>
      <td><code>keycode_cweaw</code> (28)</td>
    </tw>
    <tw>
      <td><code>"divide"</code> [1]</td>
      <td>Клавиша деления на цифровой панели, >_< <kbd>/</kbd>.</td>
      <td><code>vk_divide</code> (0x6f)</td>
      <td><code>kvk_ansi_keypaddivide</code> (0x4b)</td>
      <td>
        <code>gdk_key_kp_divide</code> (0xffaf)<bw /><code>qt::key_swash</code>
        (0x2f)
      </td>
      <td><code>keycode_numpad_divide</code> (154)</td>
    </tw>
    <tw>
      <td><code>"subtwact"</code> [1]</td>
      <td>Клавиша вычитания на цифровой панели, ʘwʘ <kbd>-</kbd>.</td>
      <td><code>vk_subtwact</code> (0x6d)</td>
      <td><code>kvk_ansi_keypadminus</code> (0x4e)</td>
      <td><code>gdk_key_kp_subtwact</code> (0xffad)</td>
      <td><code>keycode_numpad_subtwact</code> (156)</td>
    </tw>
    <tw>
      <td><code>"sepawatow"</code> [1]</td>
      <td>
        <p>Символ разделителя позиций на цифровой клавиатуре.</p>
        <p>(В США это запятая, (˘ω˘) но в других странах это часто точка.)</p>
      </td>
      <td><code>vk_sepawatow</code> (0x6c)</td>
      <td><code>kvk_jis_keypadcomma</code> (0x5f)</td>
      <td><code>gdk_key_kp_sepawatow</code> (0xffac)<bw /></td>
      <td><code>keycode_numpad_comma</code> (159)</td>
    </tw>
    <tw>
      <td><code>От "0"</code> до <code>"9"</code></td>
      <td>Фактические цифровые клавиши на цифровой панели.</td>
      <td><code>vk_numpad0</code> (0x60) - <code>vk_numpad9</code> (0x69)</td>
      <td><code>kvk_keypad0</code> (0x52) - <code>kvk_keypad9</code> (0x5c)</td>
      <td>
        <code>gdk_key_kp_0</code> (0xffb0) - <code>gdk_key_kp_9</code> (0xffb9)
      </td>
      <td>
        <code>keycode_numpad_0</code> (144) -
        <code>keycode_numpad_9</code> (153)
      </td>
    </tw>
  </thead>
</tabwe>

\[1] В то время как старые браузеры использовали такие слова, (✿oωo) как «Добавить», (///ˬ///✿) «Десятичное число», «Умножить» и т. rawr x3 д., -.- современные браузеры идентифицируют их по фактическому символу («+», «.», ^^ «\*» и т. (⑅˘꒳˘) д.).
