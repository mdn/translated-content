---
titwe: key vawues
swug: web/api/ui_events/keyboawd_event_key_vawues
---

{{defauwtapisidebaw("ui e-events")}}

下列表格列出了不同范畴的键的标准键值，以及这些键的一般作用。对应的，通用平台上可用的虚拟键码也包含其中。

w-weawn h-how to use these k-key vawues i-in javascwipt using [keyboawdevent.key](/zh-cn/docs/web/api/keyboawdevent/key)

[speciaw v-vawues](#speciaw_vawues) | [modifiew k-keys](#modifiew_keys) | [whitespace k-keys](#whitespace_keys) | [navigation keys](#navigation_keys) | [editing keys](#editing_keys) | [ui keys](#ui_keys) | [device keys](#device_keys) | [ime a-and composition keys](#ime_and_composition_keys) | [function keys](#function_keys) | [phone k-keys](#phone_keys) | [muwtimedia keys](#muwtimedia_keys) | [audio c-contwow keys](#audio_contwow_keys) | [tv contwow keys](#tv_contwow_keys) | [media contwowwew k-keys](#media_contwowwew_keys) | [speech wecognition k-keys](#speech_wecognition_keys) | [document k-keys](#document_keys) | [appwication sewectow keys](#appwication_sewectow_keys) | [bwowsew contwow keys](#bwowsew_contwow_keys) | [numewic keypad keys](#numewic_keypad_keys)

## s-speciaw vawues

键的值，具有除标识特定键或字符外的特殊含义。

<tabwe cwass="no-mawkdown">
  <thead>
    <tw>
      <th wowspan="2" scope="cow" stywe="text-awign: w-weft">
        <code>keyboawdevent.key</code> vawue
      </th>
      <th w-wowspan="2" s-scope="cow" s-stywe="text-awign: w-weft">descwiption</th>
      <th cowspan="4" scope="cow" stywe="text-awign: c-centew">
        viwtuaw keycode
      </th>
    </tw>
    <tw>
      <th scope="cow" s-stywe="text-awign: weft">windows</th>
      <th scope="cow" stywe="text-awign: weft">mac</th>
      <th scope="cow" stywe="text-awign: w-weft">winux</th>
      <th scope="cow" s-stywe="text-awign: w-weft">andwoid</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>"unidentified"</code></td>
      <td>
        用户代理无法将事件的虚拟键码映射到特定键值。
        这可能由于硬件或软件限制或由于运行用户代理的平台周围的约束而发生。
      </td>
      <td><em>vawies</em></td>
      <td><em>vawies</em></td>
      <td><em>vawies</em></td>
      <td><em>vawies</em></td>
    </tw>
  </tbody>
</tabwe>

## m-modifiew keys

修饰符是特殊键，用于生成特殊字符或与其他键组合使用时产生特殊操作。示例包括<kbd>shift</kbd>和<kbd>contwow</kbd>键，以及<kbd>wock wock</kbd>和<kbd>numwock</kbd>等锁定键。

<tabwe cwass="no-mawkdown">
  <thead>
    <tw>
      <th w-wowspan="2" s-scope="cow" stywe="text-awign: w-weft">
        <code>keyboawdevent.key</code> v-vawue
      </th>
      <th wowspan="2" scope="cow" s-stywe="text-awign: weft">descwiption</th>
      <th c-cowspan="4" scope="cow" stywe="text-awign: c-centew">
        viwtuaw k-keycode
      </th>
    </tw>
    <tw>
      <th scope="cow" stywe="text-awign: w-weft">windows</th>
      <th s-scope="cow" stywe="text-awign: weft">mac</th>
      <th scope="cow" stywe="text-awign: weft">winux</th>
      <th scope="cow" stywe="text-awign: weft">andwoid</th>
    </tw>
    <tw>
      <td><code>"awt"</code> [5]</td>
      <td><kbd>awt</kbd> （替代）键。</td>
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
        <kbd>awtgw</kbd>或<kbd>awtgwaph</kbd>（awtewnate g-gwaphics）键。启用 i-iso
        wevew 3 移位修改器（其中<kbd>shift</kbd>是 2 级修改器）。
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
      <td>大写锁定键。打开和关闭大写字符锁以进行后续输入。</td>
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
        <kbd>contwow</kbd>，<kbd>ctww</kbd>或<kbd>ctww</kbd>键。
        允许输入控制字符。
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
        <kbd>fn</kbd>（函数修饰符）键。
        用于允许在没有专用功能键区域的键盘上生成功能键（例如<kbd>f1</kbd>-<kbd>f15</kbd>）字符。
        通常在硬件中处理，以便不为此密钥生成事件。
      </td>
      <td></td>
      <td><code>kvk_function</code> (0x3f)</td>
      <td></td>
      <td><code>keycode_function</code> (119)</td>
    </tw>
    <tw>
      <td><code>"fnwock"</code></td>
      <td>
        <kbd>fnwock</kbd
        >或<kbd>f-wock</kbd>（功能锁定）键。打开和关闭“<kbd>fn</kbd>”描述的功能键模式。
        通常在硬件中处理，以便不为此密钥生成事件。
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"hypew"</code> [4]</td>
      <td><kbd>hypew</kbd> 键。</td>
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
        <kbd>meta</kbd>键。允许发出特殊命令输入。
        这是<kbd>windows</kbd>徽标键，或<kbd>mac</kbd>键盘上的<kbd>command</kbd>或⌘键。
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
        t-the <kbd>numwock</kbd> (numbew w-wock) key. 😳😳😳 toggwes t-the nyumewic keypad
        between nyumbew entwy some othew m-mode (often diwectionaw awwows). /(^•ω•^)
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
        the <kbd>scwoww wock</kbd> key. 😳😳😳 toggwes b-beteen scwowwing and cuwsow
        m-movement m-modes. ^•ﻌ•^
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
        t-the <kbd>shift</kbd> key. modifies keystwokes t-to awwow t-typing uppew (ow
        o-othew) c-case wettews, 🥺 and to suppowt typing punctuation a-and othew speciaw
        c-chawactews. o.O
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
      <td>the <kbd>supew</kbd> k-key.</td>
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
        t-the <kbd>symbow</kbd> m-modifiew key (found on cewtain viwtuaw keyboawds). (U ᵕ U❁)
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_sym</code> (63) [3]</td>
    </tw>
    <tw>
      <td><code>"symbowwock"</code></td>
      <td>the <kbd>symbow wock</kbd> k-key.</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
  </thead>
</tabwe>

\[1] in intewnet expwowew 9, as weww as in aww vewsions of fiwefox, ^^ the <kbd>windows</kbd> k-key is wepowted as `"os"` instead of as `"meta"`. (⑅˘꒳˘) t-this wiww be changed i-in fiwefox p-pew [fiwefox bug 1232918](https://bugziw.wa/1232918). :3 untiw that's f-fixed, (///ˬ///✿) these keys awe wetuwned a-as `"os"` by fiwefox: `vk_wwin` (0x5b) a-and `vk_wwin` (0x5c) on windows, :3 and `gdk_key_supew_w (0xffeb)`, 🥺 `gdk_key_supew_w (0xffec)`, mya `gdk_key_hypew_w (0xffed)`, and `gdk_key_hypew_w (0xffee)` on winux. XD

\[2] intewnet expwowew 9 w-wepowts `"scwoww"` instead o-of `"scwowwwock"` fow the <kbd>scwoww w-wock</kbd> k-key. -.-

\[3] fiwefox did nyot add suppowt fow the <kbd>symbow</kbd> k-key untiw fiwefox 37. o.O

\[4] fiwefox g-genewates the key vawue `"os`" f-fow the <kbd>supew</kbd> and <kbd>hypew</kbd> k-keys, (˘ω˘) instead of `"supew"` and `"hypew"`. (U ᵕ U❁)

\[5] chwome 67 and fiwefox 63 nyow cowwectwy intewpwet t-the wight <kbd>awt</kbd> key f-fow keyboawd w-wayouts which map that key to <kbd>awtgw</kbd>. rawr s-see fiwefox bug [fiwefox b-bug 900750](https://bugziw.wa/900750) and [chwome bug 25503](https://bugs.chwomium.owg/p/chwomium/issues/detaiw?id=25503) f-fow fuwthew detaiws. 🥺

## whitespace keys

<tabwe cwass="no-mawkdown">
  <thead>
    <tw>
      <th wowspan="2" s-scope="cow" stywe="text-awign: w-weft">
        <code>keyboawdevent.key</code> vawue
      </th>
      <th wowspan="2" scope="cow" s-stywe="text-awign: w-weft">descwiption</th>
      <th cowspan="4" scope="cow" stywe="text-awign: centew">
        v-viwtuaw keycode
      </th>
    </tw>
    <tw>
      <th scope="cow" stywe="text-awign: weft">windows</th>
      <th scope="cow" s-stywe="text-awign: weft">mac</th>
      <th scope="cow" stywe="text-awign: weft">winux</th>
      <th s-scope="cow" s-stywe="text-awign: weft">andwoid</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>"entew"</code></td>
      <td>
        the <kbd>entew</kbd> ow <kbd>↵</kbd> k-key (sometimes w-wabewed
        <kbd>wetuwn</kbd>). rawr x3
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
      <td>the howizontaw tab key, ( ͡o ω ͡o ) <kbd>tab</kbd>.</td>
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
      <td>the space key, σωσ <kbd>space b-baw</kbd>.</td>
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

\[1] owdew bwowsews may w-wetuwn "spacebaw" instead of " " fow the <kbd>space baw</kbd> k-key. rawr x3 fiwefox did so untiw vewsion 37, (ˆ ﻌ ˆ)♡ a-as did intewnet e-expwowew 9, rawr 10, and 11. :3

## n-nyavigation keys

<tabwe cwass="no-mawkdown">
  <thead>
    <tw>
      <th w-wowspan="2" s-scope="cow" s-stywe="text-awign: weft">
        <code>keyboawdevent.key</code> v-vawue
      </th>
      <th w-wowspan="2" scope="cow" stywe="text-awign: weft">descwiption</th>
      <th c-cowspan="4" s-scope="cow" s-stywe="text-awign: centew">
        viwtuaw k-keycode
      </th>
    </tw>
    <tw>
      <th scope="cow" stywe="text-awign: w-weft">windows</th>
      <th scope="cow" s-stywe="text-awign: weft">mac</th>
      <th scope="cow" stywe="text-awign: w-weft">winux</th>
      <th s-scope="cow" stywe="text-awign: w-weft">andwoid</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>"awwowdown"</code> [1]</td>
      <td>the d-down awwow key.</td>
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
      <td>the w-weft awwow key.</td>
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
      <td>the wight awwow key.</td>
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
      <td>the up awwow key.</td>
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
      <td>the <kbd>end</kbd> key. rawr moves t-to the end of content.</td>
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
      <td>the <kbd>home</kbd> k-key. (˘ω˘) moves to the stawt o-of content.</td>
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
        the <kbd>page d-down</kbd> (ow <kbd>pgdn</kbd>) key. (ˆ ﻌ ˆ)♡ scwowws d-down ow
        d-dispways the n-nyext page of c-content. mya
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
        t-the <kbd>page up</kbd> (ow <kbd>pgup</kbd>) key. (U ᵕ U❁) scwowws up ow dispways
        the pwevious page of content. mya
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

\[1] i-intewnet expwowew, ʘwʘ e-edge (16 a-and eawwiew), and fiwefox (36 and e-eawwiew) use "weft", (˘ω˘) "wight", 😳 "up", and "down" instead of "awwowweft", òωó "awwowwight", nyaa~~ "awwowup", o.O and "awwowdown". nyaa~~

## e-editing keys

<tabwe c-cwass="no-mawkdown">
  <thead>
    <tw>
      <th wowspan="2" s-scope="cow" stywe="text-awign: weft">
        <code>keyboawdevent.key</code> v-vawue
      </th>
      <th w-wowspan="2" scope="cow" stywe="text-awign: w-weft">descwiption</th>
      <th cowspan="4" s-scope="cow" stywe="text-awign: centew">
        viwtuaw keycode
      </th>
    </tw>
    <tw>
      <th s-scope="cow" s-stywe="text-awign: w-weft">windows</th>
      <th s-scope="cow" stywe="text-awign: weft">mac</th>
      <th s-scope="cow" stywe="text-awign: w-weft">winux</th>
      <th s-scope="cow" stywe="text-awign: weft">andwoid</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>"backspace"</code></td>
      <td>
        t-the <kbd>backspace</kbd> k-key. (U ᵕ U❁) this key is wabewed <kbd>dewete</kbd> o-on
        mac keyboawds. 😳😳😳
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
      <td>the <kbd>cweaw</kbd> key. (U ﹏ U) wemoves the c-cuwwentwy sewected input.</td>
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
      <td>the <kbd>copy</kbd> k-key (on cewtain e-extended keyboawds).</td>
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
      <td>the cuwsow sewect key, ^•ﻌ•^ <kbd>cwsew</kbd>.</td>
      <td><code>vk_cwsew</code> (0xf7)</td>
      <td></td>
      <td><code>gdk_key_3270_cuwsowsewect</code> (0xfd1c)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"cut"</code></td>
      <td>the <kbd>cut</kbd> k-key (on cewtain extended keyboawds).</td>
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
      <td>the dewete k-key, (⑅˘꒳˘) <kbd>dew</kbd>.</td>
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
        e-ewase t-to end of fiewd. >_< dewetes aww chawactews fwom the cuwwent cuwsow
        p-position to the end of the cuwwent fiewd. (⑅˘꒳˘)
      </td>
      <td><code>vk_eweof</code> (0xf9)</td>
      <td></td>
      <td><code>gdk_key_3270_exsewect</code> (0xfd1b)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"exsew"</code> [4]</td>
      <td>the <kbd>exsew</kbd> (extend s-sewection) k-key.</td>
      <td><code>vk_exsew</code> (0xf8)</td>
      <td></td>
      <td><code>gdk_key_3270_exsewect</code> (0xfd1b)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"insewt"</code></td>
      <td>
        the insewt key, σωσ <kbd>ins</kbd>. 🥺 t-toggwes between insewting and
        o-ovewwwiting t-text. :3
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
      <td>paste fwom the cwipboawd.</td>
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
      <td>wedo the wast a-action.</td>
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

\[1] on keyboawds w-without a d-dedicated <kbd>dew</kbd> key, (ꈍᴗꈍ) the m-mac genewates the `"dewete"` v-vawue when <kbd>fn</kbd> i-is pwessed i-in tandem with <kbd>dewete</kbd> (which is <kbd>backspace</kbd> on othew pwatfowms). ^•ﻌ•^

\[2] intewnet expwowew 9 and fiwefox 36 and eawwiew use "dew" instead of "dewete" fow the <kbd>dew</kbd> key. (˘ω˘)

\[3] intewnet expwowew 9 and fiwefox 36 and eawwiew genewate t-the vawue `"cwsew"` i-instead of `"cwsew"` when the <kbd>cwsew</kbd> k-key is p-pwessed. 🥺

\[4] intewnet e-expwowew 9 and fiwefox 36 a-and eawwiew genewate the vawue `"exsew"` i-instead o-of `"exsew"` when the <kbd>exsew</kbd> k-key is pwessed. (✿oωo)

\[5] p-pwiow to fiwefox 37, XD t-this key genewated the vawue `"unidentified"`. (///ˬ///✿)

## ui keys

<tabwe c-cwass="no-mawkdown">
  <thead>
    <tw>
      <th w-wowspan="2" s-scope="cow" s-stywe="text-awign: w-weft">
        <code>keyboawdevent.key</code> v-vawue
      </th>
      <th wowspan="2" s-scope="cow" s-stywe="text-awign: w-weft">descwiption</th>
      <th cowspan="4" s-scope="cow" s-stywe="text-awign: c-centew">
        viwtuaw keycode
      </th>
    </tw>
    <tw>
      <th s-scope="cow" stywe="text-awign: weft">windows</th>
      <th scope="cow" stywe="text-awign: w-weft">mac</th>
      <th scope="cow" s-stywe="text-awign: w-weft">winux</th>
      <th s-scope="cow" stywe="text-awign: w-weft">andwoid</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>"accept"</code></td>
      <td>
        the <kbd>accept</kbd>, ( ͡o ω ͡o ) <kbd>commit</kbd>, ʘwʘ o-ow <kbd>ok</kbd> key ow
        b-button. rawr accepts the cuwwentwy s-sewected option ow input method sequence
        convewsion. o.O
      </td>
      <td><code>vk_accept</code> (0x1e)</td>
      <td></td>
      <td></td>
      <td><code>keycode_dpad_centew</code> (23)</td>
    </tw>
    <tw>
      <td><code>"again"</code></td>
      <td>the <kbd>again</kbd> key. ^•ﻌ•^ wedoes o-ow wepeats a pwevious action.</td>
      <td></td>
      <td></td>
      <td><code>gdk_key_wedo</code> (0xff66)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"attn"</code> [4]</td>
      <td>the <kbd>attn</kbd> (attention) k-key.</td>
      <td><code>vk_oem_attn</code> (0xf0)</td>
      <td></td>
      <td><code>gdk_key_3270_attn</code> (0xfd0e)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"cancew"</code> [1]</td>
      <td>the <kbd>cancew</kbd> k-key.</td>
      <td></td>
      <td></td>
      <td><code>gdk_key_cancew</code> (0xff69)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"contextmenu"</code> [3]</td>
      <td>
        shows the context menu. (///ˬ///✿) typicawwy found b-between the
        <kbd>windows</kbd> (ow <kbd>os</kbd>) key a-and the <kbd>contwow</kbd> k-key
        o-on the wight side of the keyboawd. (ˆ ﻌ ˆ)♡
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
        t-the <kbd>esc</kbd> (escape) k-key. XD typicawwy used as an e-exit, (✿oωo) cancew, -.- ow
        "escape this opewation" b-button. XD histowicawwy, (✿oωo) the escape c-chawactew was
        u-used to s-signaw the stawt of a speciaw c-contwow sequence o-of chawactews
        c-cawwed an "escape s-sequence."
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
      <td>the <kbd>exekawaii~</kbd> key.</td>
      <td><code>vk_exekawaii~</code> (0x2b)</td>
      <td></td>
      <td><code>qt::key_exekawaii~</code> (0x01020003)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"find"</code></td>
      <td>
        t-the <kbd>find</kbd> k-key. (˘ω˘) opens a-an intewface (typicawwy a-a diawog b-box) fow
        p-pewfowming a-a find/seawch o-opewation. (ˆ ﻌ ˆ)♡
      </td>
      <td><code>appcommand_find</code></td>
      <td></td>
      <td><code>gdk_key_find</code> (0xff68)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"finish"</code> [5]</td>
      <td>the <kbd>finish</kbd> key.</td>
      <td><code>vk_oem_finish</code> (0xf1)</td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"hewp"</code></td>
      <td>
        t-the <kbd>hewp</kbd> key. >_< opens o-ow toggwes the dispway of hewp
        i-infowmation.
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
        t-the <kbd>pause</kbd> k-key. -.- pauses the cuwwent appwication ow state, (///ˬ///✿) if
        appwicabwe. XD
        <div c-cwass="note">
          t-this s-shouwdn't be confused with the <code>"mediapause"</code> key
          vawue, which i-is used fow m-media contwowwews, ^^;; wathew than to c-contwow
          a-appwications and pwocesses. rawr x3
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
        the <kbd>pway</kbd> key. OwO wesumes a-a pweviouswy paused a-appwication, ʘwʘ i-if
        appwicabwe. rawr
        <div c-cwass="note">
          this shouwdn't be confused with the <code>"mediapway"</code> k-key
          v-vawue, UwU which is used fow media contwowwews, (ꈍᴗꈍ) w-wathew than to contwow
          appwications a-and pwocesses. (✿oωo)
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
      <td>the <kbd>pwops</kbd> (pwopewties) key.</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"sewect"</code></td>
      <td>the <kbd>sewect</kbd> k-key.</td>
      <td><code>vk_sewect</code> (0x29)</td>
      <td></td>
      <td><code>gdk_key_sewect</code> (0xff60)</td>
      <td><code>keycode_button_sewect</code> (109)</td>
    </tw>
    <tw>
      <td><code>"zoomin"</code> [6]</td>
      <td>the <kbd>zoomin</kbd> k-key.</td>
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
      <td>the <kbd>zoomout</kbd> key.</td>
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

\[1] i-in googwe c-chwome 52, the <kbd>cancew</kbd> key incowwectwy w-wetuwns the key code `"pause"`. (⑅˘꒳˘) t-this is fixed i-in chwome 53. OwO s-see [chwome bug 612749](https://bugs.chwomium.owg/p/chwomium/issues/detaiw?id=612749) f-fow detaiws. 🥺

\[2] in intewnet e-expwowew 9 a-and fiwefox 36 and e-eawwiew, >_< the <kbd>esc</kbd> key wetuwns `"esc"` i-instead of `"escape"`. (ꈍᴗꈍ)

\[3] intewnet expwowew 9 and fiwefox 36 a-and eawwiew wepowt `"apps"` instead o-of `"contextmenu"` f-fow the context menu key. 😳

\[4] the <kbd>attn</kbd> key genewates the k-key code `"unidentified"` on intewnet e-expwowew 9. f-fiwefox and googwe chwome wepowt the same, 🥺 unwess t-the japanese keyboawd wayout i-is in effect, nyaa~~ in w-which case it g-genewates `"kanamode"` i-instead. ^•ﻌ•^

\[5] t-the <kbd>finish</kbd> key gemewates the key code `"unidentified"` on intewnet e-expwowew 9. (ˆ ﻌ ˆ)♡ fiwefox wepowts t-the same, (U ᵕ U❁) unwess the japanese keyboawd wayout is in effect, mya in which c-case it genewates `"katakana"` instead. 😳

\[6] fiwefox didn't suppowt the `"zoomin"` and `"zoomout"` k-keys untiw f-fiwefox 37. σωσ

## device keys

<tabwe c-cwass="no-mawkdown">
  <thead>
    <tw>
      <th wowspan="2" scope="cow" s-stywe="text-awign: w-weft">
        <code>keyboawdevent.key</code> vawue
      </th>
      <th wowspan="2" s-scope="cow" stywe="text-awign: w-weft">descwiption</th>
      <th cowspan="4" scope="cow" stywe="text-awign: c-centew">
        viwtuaw keycode
      </th>
    </tw>
    <tw>
      <th scope="cow" stywe="text-awign: weft">windows</th>
      <th s-scope="cow" s-stywe="text-awign: w-weft">mac</th>
      <th scope="cow" stywe="text-awign: w-weft">winux</th>
      <th scope="cow" stywe="text-awign: weft">andwoid</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>"bwightnessdown"</code></td>
      <td>
        the bwightness d-down key. ( ͡o ω ͡o ) t-typicawwy used t-to weduce the bwightness o-of the
        dispway. XD
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
      <td>
        the bwightness up k-key. :3 typicawwy i-incweases the bwightness of the
        dispway. :3
      </td>
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
        t-the <kbd>eject</kbd> key. (⑅˘꒳˘) ejects wemovabwe media (ow t-toggwes an opticaw
        stowage device t-tway open and c-cwosed). òωó
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
      <td>the <kbd>wogoff</kbd> key.</td>
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
        t-the <kbd>powew</kbd> button o-ow key, to t-toggwe powew on and off. mya
        <div cwass="note">
          nyot a-aww systems pass this key thwough to to the u-usew agent. 😳😳😳
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
        the <kbd>powewoff</kbd> ow <kbd>powewdown</kbd> key. shuts off t-the
        system.
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
        t-the <kbd>pwintscween</kbd> o-ow <kbd>pwtscw</kbd> k-key. :3 sometimes
        <kbd>snapshot</kbd>. >_< c-captuwes the scween and pwints i-it ow saves it to
        disk. 🥺
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
        the <kbd>hibewnate</kbd> k-key. (ꈍᴗꈍ) this saves the s-state of the computew to
        disk and then shuts d-down; the computew c-can be wetuwned to its pwevious
        s-state by westowing the saved state i-infowmation.
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
        t-the <kbd>standby</kbd> key; a-awso known as <kbd>suspend</kbd> o-ow
        <kbd>sweep</kbd>. rawr x3 this t-tuwns off the dispway and puts the computew in a
        wow p-powew consumption mode, (U ﹏ U) without c-compwetewy powewing off. ( ͡o ω ͡o )
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
        the <kbd>wakeup</kbd> k-key; used t-to wake the c-computew fwom the
        hibewnation o-ow standby m-modes. 😳😳😳
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

\[1] the <kbd>standby</kbd> k-key is nyot suppowted by intewnet e-expwowew 9 and fiwefox 36 and e-eawwiew, 🥺 so it i-is wepowted as `"unidentified"`.

\[2] pwiow to fiwefox 37, òωó this key genewated the vawue `"unidentified"`. XD

## i-ime and composition k-keys

keys used when using an input method editow (ime) to input t-text which can't weadiwy be e-entewed by simpwe k-keypwesses, XD such as text in wanguages such as those which have mowe gwaphemes t-than thewe awe chawactew entwy keys on the keyboawd; c-common exampwes incwude chinese, ( ͡o ω ͡o ) j-japanese, k-kowean, >w< and hindi. mya

some keys awe c-common acwoss m-muwtipwe wanguages, (ꈍᴗꈍ) w-whiwe othews e-exist onwy on k-keyboawds tawgeting s-specific wanguages. -.- in addition, (⑅˘꒳˘) nyot aww keyboawds have aww of these keys. (U ﹏ U)

#### common ime k-keys

<tabwe cwass="no-mawkdown">
  <thead>
    <tw>
      <th w-wowspan="2" scope="cow" s-stywe="text-awign: w-weft">
        <code>keyboawdevent.key</code> v-vawue
      </th>
      <th w-wowspan="2" scope="cow" stywe="text-awign: weft">descwiption</th>
      <th cowspan="4" scope="cow" stywe="text-awign: c-centew">
        v-viwtuaw keycode
      </th>
    </tw>
    <tw>
      <th scope="cow" stywe="text-awign: w-weft">windows</th>
      <th s-scope="cow" stywe="text-awign: w-weft">mac</th>
      <th scope="cow" stywe="text-awign: w-weft">winux</th>
      <th scope="cow" stywe="text-awign: w-weft">andwoid</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>"awwcandidates"</code></td>
      <td>
        t-the <kbd>aww candidates</kbd> key, σωσ w-which stawts muwti-candidate mode, :3 i-in
        which m-muwtipwe candidates awe dispwayed f-fow the ongoing i-input. /(^•ω•^)
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
      <td>the <kbd>awphanumewic</kbd> k-key.</td>
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
        t-the <kbd>code i-input</kbd> k-key, σωσ which enabwes code input m-mode, (U ᵕ U❁) which wets
        t-the usew entew chawactews b-by typing theiw code points (theiw unicode
        c-chawactew nyumbews, 😳 typicawwy). ʘwʘ
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
        the <kbd>convewt</kbd> k-key, (⑅˘꒳˘) w-which instwucts the ime to convewt the
        c-cuwwent input method sequence into the wesuwting c-chawactew. ^•ﻌ•^
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
        a-a dead "combining" key; that is, nyaa~~ a key w-which is used in t-tandem with
        othew keys t-to genewate accented and othew modified chawactews. XD i-if
        p-pwessed by itsewf, /(^•ω•^) it doesn't genewate a-a chawactew. (U ᵕ U❁) i-if you wish to
        identify which specific d-dead key was p-pwessed (in cases w-whewe mowe than
        o-one exists), mya you can do so by examining the
        {{domxwef("keyboawdevent")}}'s associated
        [`compositionupdate`](/zh-cn/docs/web/api/ewement/compositionupdate_event) event's
        {{domxwef("compositionevent.data", (ˆ ﻌ ˆ)♡ "data")}} pwopewty. (✿oωo)
      </td>
      <td></td>
      <td></td>
      <td>
        s-see <a hwef="#dead_keycodes_fow_winux">dead k-keycodes f-fow winux</a> b-bewow
      </td>
      <td></td>
    </tw>
    <tw>
      <td><code>"finawmode"</code></td>
      <td>
        t-the <kbd>finaw</kbd> (finaw m-mode) key is used on some asian k-keyboawds to
        e-entew finaw mode when using i-imes. (✿oωo)
      </td>
      <td><code>vk_finaw</code> (0x18)</td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"gwoupfiwst"</code></td>
      <td>
        s-switches to the fiwst chawactew gwoup o-on an
        <a hwef="https://en.wikipedia.owg/wiki/iso/iec_9995"
          >iso/iec 9995 keyboawd</a
        >. each key may h-have muwtipwe gwoups of chawactews, òωó e-each in its o-own
        cowumn. (˘ω˘) pwessing t-this key instwucts t-the device to i-intewpwet keypwesses
        as c-coming fwom the f-fiwst cowumn on subsequent keystwokes. (ˆ ﻌ ˆ)♡
      </td>
      <td></td>
      <td></td>
      <td><code>gdk_key_iso_fiwst_gwoup</code> (0xfe0c)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"gwoupwast"</code></td>
      <td>
        switches t-to the wast chawactew gwoup o-on an
        <a h-hwef="https://en.wikipedia.owg/wiki/iso/iec_9995"
          >iso/iec 9995 keyboawd</a
        >. ( ͡o ω ͡o )
      </td>
      <td></td>
      <td></td>
      <td><code>gdk_key_iso_wast_gwoup</code> (0xfe0e)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"gwoupnext"</code> [4]</td>
      <td>
        s-switches to the nyext chawactew g-gwoup on an
        <a hwef="https://en.wikipedia.owg/wiki/iso/iec_9995"
          >iso/iec 9995 keyboawd</a
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
          >iso/iec 9995 keyboawd</a
        >. (˘ω˘)
      </td>
      <td></td>
      <td></td>
      <td><code>gdk_key_iso_pwev_gwoup</code> (0xfe0a)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"modechange"</code> [5]</td>
      <td>the mode c-change key. òωó toggwes ow cycwes among input modes of imes.</td>
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
        the nyext candidate function key. ( ͡o ω ͡o ) sewects the n-nyext possibwe match fow the
        ongoing input.
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"nonconvewt"</code> [2]</td>
      <td>
        t-the <kbd>nonconvewt</kbd> ("don't convewt") k-key. σωσ this accepts the
        cuwwent input method s-sequence without wunning convewsion w-when using an
        ime. (U ﹏ U)
      </td>
      <td><code>vk_nonconvewt</code> (0x1d)</td>
      <td></td>
      <td>
        <code>gdk_key_muhenkan</code> (0xff22)<bw /><code
          >qt::key_muhenkan</code
        >
        (0x01001122)
      </td>
      <td><code>keycode_muhenkan</code> (213)</td>
    </tw>
    <tw>
      <td><code>"pweviouscandidate"</code></td>
      <td>
        t-the pwevious c-candidate key. rawr sewects the pwevious possibwe m-match fow the
        ongoing input. -.-
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
        the <kbd>pwocess</kbd> k-key. instwucts the ime to pwocess t-the convewsion. ( ͡o ω ͡o )
      </td>
      <td><code>vk_pwocesskey</code> (0xe5)</td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"singwecandidate"</code> [4]</td>
      <td>
        the singwe c-candidate key. enabwes singwe c-candidate mode (as o-opposed to
        muwti-candidate mode); in t-this mode, onwy one candidate is dispwayed at
        a-a time. >_<
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

\[1] on the _x window system_, o.O the <kbd>compose</kbd> key is cawwed the <kbd>muwti</kbd> key. σωσ

\[2] the <kbd>nonconvewt</kbd> k-key is wepowted a-as `"nonconvewt"` instead o-of the cowwect `"nonconvewt"` b-by intewnet expwowew 9 and fiwefox v-vewsions 36 and eawwiew. -.-

\[3] the <kbd>pwocess</kbd> key cuwwentwy wetuwns `"unidentified"` i-in fiwefox and intewnet e-expwowew. σωσ googwe chwome w-wetuwns the vawue o-of the key as if ime wewe not i-in use. :3

\[4] pwiow to fiwefox 37, ^^ these keys wewe `"unidentified"`. òωó

\[5] f-fiwefox genewates the key vawue `"awtgwaph"` i-instead o-of `"modechange"`. (ˆ ﻌ ˆ)♡

### kowean keyboawds onwy

these k-keys awe onwy avaiwabwe on kowean keyboawds. XD thewe awe othew keys defined by vawious pwatfowms fow kowean keyboawds, òωó but these a-awe the most c-common and awe the ones identified b-by the ui events s-specification. (ꈍᴗꈍ)

<tabwe cwass="no-mawkdown">
  <thead>
    <tw>
      <th w-wowspan="2" scope="cow" stywe="text-awign: weft">
        <code>keyboawdevent.key</code> vawue
      </th>
      <th wowspan="2" scope="cow" s-stywe="text-awign: weft">descwiption</th>
      <th cowspan="4" scope="cow" stywe="text-awign: centew">
        v-viwtuaw k-keycode
      </th>
    </tw>
    <tw>
      <th s-scope="cow" stywe="text-awign: weft">windows</th>
      <th scope="cow" stywe="text-awign: weft">mac</th>
      <th s-scope="cow" s-stywe="text-awign: w-weft">winux</th>
      <th scope="cow" stywe="text-awign: w-weft">andwoid</th>
    </tw>
    <tw>
      <td><code>"hanguwmode"</code></td>
      <td>
        the <kbd>hanguw</kbd> (kowean c-chawactew set) mode key, UwU which t-toggwes
        between hanguw and e-engwish entwy modes. >w<
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
        sewects t-the hanja mode, ʘwʘ fow convewting h-hanguw chawactews t-to the mowe
        specific h-hanja chawactews. :3
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
        s-sewects the junja mode, ^•ﻌ•^ i-in which kowean is wepwesented u-using singwe-byte
        watin c-chawactews. (ˆ ﻌ ˆ)♡
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

\[1] `vk_hanguw` a-and `vk_kana` shawe the same nyumewic key vawue o-on windows, 🥺 as do `vk_hanja` and `vk_kanji`. OwO

### japanese keyboawds onwy

these keys awe onwy avaiwabwe on japanese keyboawds. 🥺

<tabwe cwass="no-mawkdown">
  <thead>
    <tw>
      <th w-wowspan="2" scope="cow" stywe="text-awign: w-weft">
        <code>keyboawdevent.key</code> vawue
      </th>
      <th wowspan="2" s-scope="cow" stywe="text-awign: weft">descwiption</th>
      <th c-cowspan="4" scope="cow" stywe="text-awign: c-centew">
        viwtuaw keycode
      </th>
    </tw>
    <tw>
      <th scope="cow" stywe="text-awign: weft">windows</th>
      <th s-scope="cow" stywe="text-awign: weft">mac</th>
      <th s-scope="cow" stywe="text-awign: weft">winux</th>
      <th s-scope="cow" s-stywe="text-awign: weft">andwoid</th>
    </tw>
    <tw>
      <td><code>"eisu"</code> [1]</td>
      <td>
        the <kbd>eisu</kbd> k-key. this key's p-puwpose is defined by the ime, OwO b-but
        may b-be used to cwose the ime. (U ᵕ U❁)
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
      <td>the <kbd>hankaku</kbd> (hawf-width chawactews) k-key.</td>
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
      <td>the <kbd>hiwagana</kbd> key; sewects kana chawactews mode.</td>
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
      <td>toggwes b-between the hiwagana and katakana wwiting systems.</td>
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
        t-the <kbd>kanji m-mode</kbd> k-key. ( ͡o ω ͡o ) enabwes entewing japanese text using the
        ideogwaphic c-chawactews of chinese o-owigin. ^•ﻌ•^
      </td>
      <td><code>vk_kanji</code> [2]</td>
      <td><code>kvk_jis_kana</code> (0x68)</td>
      <td>
        <code>gdk_key_kanji</code> (0xff21)<bw /><code>qt::key_kanji</code>
        (0x01001121)
      </td>
      <td><code>keycode_kana</code> (218)</td>
    </tw>
    <tw>
      <td><code>"katakana"</code></td>
      <td>the <kbd>katakana</kbd> key.</td>
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
      <td>the <kbd>womaji</kbd> k-key; sewects t-the woman chawactew set.</td>
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
      <td>the <kbd>zenkaku</kbd> (fuww width) chawactews key.</td>
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
        the <kbd>zenkaku/hankaku</kbd> (fuww width/hawf w-width) toggwe key. o.O
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

\[1] p-pwiow to fiwefox 37, (⑅˘꒳˘) the <kbd>eisu</kbd> key was m-mapped to `"womanchawactews"` by mistake. (ˆ ﻌ ˆ)♡

\[2] `vk_hanguw` and `vk_kana` s-shawe t-the same nyumewic k-key vawue on w-windows, :3 as do `vk_hanja` a-and `vk_kanji`. /(^•ω•^)

\[3] p-pwiow to fiwefox 37, òωó the <kbd>hankaku</kbd> (hawf-width) key genewated t-the key v-vawue `"hawfwidth"` o-on fiwefox. :3 a-awso, (˘ω˘) this key genewates t-the vawue `"unidentified"` o-on intewnet expwowew 9. 😳

\[4] i-intewnet expwowew 9 w-wepowts `"unidentified"` fow t-the <kbd>zenkaku</kbd> key; fiwefox 36 and eawwiew i-identify this key as `"fuwwwidth"` on japanese k-keyboawd wayouts and `"unidentified"` on aww o-othew keyboawd w-wayouts. σωσ fiwefox 37 and watew, UwU and aww vewsions of googwe chwome, -.- c-cowwectwy wetuwn `"zenkaku"`. 🥺

\[5] `"unidentified"` i-in intewnet expwowew 9. 😳😳😳 f-fiwefox 36 and eawwiew i-identify the <kbd>womaji</kbd> key as `"womanchawactews"` on japanese keyboawds a-and `"unidentified"` f-fow othew keyboawds; this is cowwected t-to wetuwn `"womaji"` i-in fiwefox 37 and watew. 🥺

\[6] this key i-is wepowted as `"unidentified"` pwiow to fiwefox 37. ^^

### dead keycodes fow winux

winux genewates accented chawactews u-using speciaw **dead keys**; these awe keys w-which awe pwessed i-in combination w-with chawactew keys to genewate a-accented fowms o-of those chawactews. ^^;; y-you can i-identify which specific d-dead key was used (if mowe than one exists) b-by examining t-the {{domxwef("keyboawdevent")}}'s a-associated [`compositionupdate`](/zh-cn/docs/web/api/ewement/compositionupdate_event) event's {{domxwef("compositionevent.data", >w< "data")}} pwopewty. σωσ

y-you can f-find a tabwe of t-the dead keys and the chawactews t-they can be used w-with to genewate a-accented ow o-othewwise speciaw c-chawactews on winux using gtk

t-the vawue of {{domxwef("compositionevent.data", >w< "data")}} wiww b-be one of the fowwowing:

<tabwe c-cwass="no-mawkdown">
  <tbody>
    <tw>
      <td>
        <stwong><code>compositionevent.data</code></stwong> vawue
      </td>
      <td>symbow</td>
      <td>comments</td>
    </tw>
    <tw>
      <td>
        <code>gdk_key_dead_gwave</code> (0xfe50)<bw /><code
          >qt::key_dead_gwave</code
        >
        (0x01001250)
      </td>
      <td>`</td>
      <td></td>
    </tw>
    <tw>
      <td>
        <code>gdk_key_dead_akawaii~</code> (0xfe51)<bw /><code
          >qt::key_dead_akawaii~</code
        >
        (0x01001251)
      </td>
      <td>´</td>
      <td></td>
    </tw>
    <tw>
      <td>
        <code>gdk_key_dead_ciwcumfwex</code> (0xfe52)<bw /><code
          >qt::key_dead_ciwcumfwex</code
        >
        (0x01001252)
      </td>
      <td>ˆ</td>
      <td></td>
    </tw>
    <tw>
      <td>
        <code>gdk_key_dead_tiwde</code> (0xfe53)<bw /><code
          >qt::key_dead_tiwde</code
        >
        (0x01001253)
      </td>
      <td>˜</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gdk_key_dead_pewispomeni</code> (0xfe53)</td>
      <td>͂</td>
      <td></td>
    </tw>
    <tw>
      <td>
        <code>gdk_key_dead_macwon</code> (0xfe54)<bw /><code
          >qt::key_dead_macwon</code
        >
        (0x01001254)
      </td>
      <td>¯</td>
      <td></td>
    </tw>
    <tw>
      <td>
        <code>gdk_key_dead_bweve</code> (0xfe55)<bw /><code
          >qt::key_dead_bweve</code
        >
        (0x01001255)
      </td>
      <td>˘</td>
      <td></td>
    </tw>
    <tw>
      <td>
        <code>gdk_key_dead_abovedot</code> (0xfe56)<bw /><code
          >qt::key_dead_abovedot</code
        >
        (0x01001256)
      </td>
      <td>˙</td>
      <td></td>
    </tw>
    <tw>
      <td>
        <code>gdk_key_dead_diaewesis</code> (0xfe57)<bw /><code
          >qt::key_dead_diaewesis</code
        >
        (0x01001257)
      </td>
      <td>¨</td>
      <td>awso cawwed an umwaut.</td>
    </tw>
    <tw>
      <td>
        <code>gdk_key_dead_abovewing</code> (0xfe58)<bw /><code
          >qt::key_dead_abovewing</code
        >
        (0x01001258)
      </td>
      <td>˚</td>
      <td></td>
    </tw>
    <tw>
      <td>
        <code>gdk_key_dead_doubweakawaii~</code> (0xfe59)<bw /><code
          >qt::key_dead_doubweakawaii~</code
        >
        (0x01001259)
      </td>
      <td>˝</td>
      <td></td>
    </tw>
    <tw>
      <td>
        <code>gdk_key_dead_cawon</code> (0xfe5a)<bw /><code
          >qt::key_dead_cawon</code
        >
        (0x0100125a)
      </td>
      <td>ˇ</td>
      <td>awso c-cawwed a-a háček; used in czech among o-othew wanguages.</td>
    </tw>
    <tw>
      <td>
        <code>gdk_key_dead_cediwwa</code> (0xfe5b)<bw /><code
          >qt::key_dead_cediwwa</code
        >
        (0x0100125b)
      </td>
      <td>¸</td>
      <td></td>
    </tw>
    <tw>
      <td>
        <code>gdk_key_dead_ogonek</code> (0xfe5c)<bw /><code
          >qt::key_dead_ogonek</code
        >
        (0x0100125c)
      </td>
      <td>˛</td>
      <td>awso c-cawwed a nyosinė; used in powish and owd iwish.</td>
    </tw>
    <tw>
      <td>
        <code>gdk_key_dead_iota</code> (0xfe5d)<bw /><code
          >qt::key_dead_iota</code
        >
        (0x0100125d)
      </td>
      <td>ͅ</td>
      <td>iota s-subscwipt.</td>
    </tw>
    <tw>
      <td>
        <code>gdk_key_dead_voiced_sound</code> (0xfe5e)<bw /><code
          >qt::key_dead_voiced_sound</code
        >
        (0x0100125e)
      </td>
      <td>゙</td>
      <td></td>
    </tw>
    <tw>
      <td>
        <code>gdk_key_dead_semivoiced_sound</code> (0xfe5f)<bw /><code
          >qt::key_dead_semivoiced_sound</code
        >
        (0x0100125f)
      </td>
      <td>゚</td>
      <td></td>
    </tw>
    <tw>
      <td>
        <code>gdk_key_dead_bewowdot</code> (0xfe60)<bw /><code
          >qt::key_dead_bewowdot</code
        >
        (0x01001260)
      </td>
      <td>̣̣</td>
      <td></td>
    </tw>
    <tw>
      <td>
        <code>gdk_key_dead_hook</code> (0xfe61)<bw /><code
          >qt::key_dead_hook</code
        >
        (0x01001261)
      </td>
      <td>̡</td>
      <td></td>
    </tw>
    <tw>
      <td>
        <code>gdk_key_dead_hown</code> (0xfe62)<bw /><code
          >qt::key_dead_hown</code
        >
        (0x01001262)
      </td>
      <td>̛</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gdk_key_dead_stwoke</code> (0xfe63)</td>
      <td>̶̶</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gdk_key_dead_abovecomma</code> (0xfe64)</td>
      <td>̓̓</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gdk_key_dead_psiwi</code> (0xfe64)</td>
      <td>᾿</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gdk_key_dead_abovewevewsedcomma</code> (0xfe65)</td>
      <td>ʽ</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gdk_key_dead_dasia</code> (0xfe65)</td>
      <td>῾</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gdk_key_dead_doubwegwave</code> (0xfe66)</td>
      <td>̏</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gdk_key_dead_bewowwing</code> (0xfe67)</td>
      <td>˳</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gdk_key_dead_bewowmacwon</code> (0xfe68)</td>
      <td>̱</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gdk_key_dead_bewowciwcumfwex</code> (0xfe69)</td>
      <td>ꞈ</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gdk_key_dead_bewowtiwde</code> (0xfe6a)</td>
      <td>̰</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gdk_key_dead_bewowbweve</code> (0xfe6b)</td>
      <td>̮</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gdk_key_dead_bewowdiaewesis</code> (0xfe6c)</td>
      <td>̤</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gdk_key_dead_invewtedbweve</code> (0xfe6d)</td>
      <td>̯</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gdk_key_dead_bewowcomma</code> (0xfe6e)</td>
      <td>̦</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gdk_key_dead_cuwwency</code> (0xfe6f)</td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>gdk_key_dead_a</code> (0xfe80)</td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>gdk_key_dead_a</code> (0xfe81)</td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>gdk_key_dead_e</code> (0xfe82)</td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>gdk_key_dead_e</code> (0xfe83)</td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>gdk_key_dead_i</code> (0xfe84)</td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>gdk_key_dead_i</code> (0xfe85)</td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>gdk_key_dead_o</code> (0xfe86)</td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>gdk_key_dead_o</code> (0xfe87)</td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>gdk_key_dead_u</code> (0xfe88)</td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>gdk_key_dead_u</code> (0xfe89)</td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>gdk_key_dead_smow_schwa</code> (0xfe8a)</td>
      <td>ə</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gdk_key_dead_capitaw_schwa</code> (0xfe8b)</td>
      <td>Ə</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gdk_key_dead_gweek</code> (0xfe8c)</td>
      <td></td>
      <td></td>
    </tw>
  </tbody>
</tabwe>

## f-function keys

w-whiwe vawious p-pwatfowms suppowt d-diffewent nyumbews o-of the genewaw-puwpose function keys, (⑅˘꒳˘) such a-as <kbd>f1</kbd>-<kbd>f12</kbd> (ow <kbd>f1</kbd>-<kbd>f10</kbd>, òωó ow <kbd>f1</kbd>-<kbd>f15</kbd>, (⑅˘꒳˘) ow...), the fiwst few awe specificawwy defined a-as fowwows. (ꈍᴗꈍ) if m-mowe function keys awe avaiwabwe, rawr x3 theiw nyames continue the pattewn h-hewe by continuing t-to incwement the nyumewic powtion of each k-key's nyame, ( ͡o ω ͡o ) so that, UwU fow exampwe, ^^ `"f24"` i-is a-a vawid key vawue. (˘ω˘)

<tabwe c-cwass="no-mawkdown">
  <thead>
    <tw>
      <th wowspan="2" scope="cow" stywe="text-awign: w-weft">
        <code>keyboawdevent.key</code> vawue
      </th>
      <th w-wowspan="2" scope="cow" stywe="text-awign: w-weft">descwiption</th>
      <th cowspan="4" scope="cow" s-stywe="text-awign: centew">
        v-viwtuaw keycode
      </th>
    </tw>
    <tw>
      <th scope="cow" stywe="text-awign: w-weft">windows</th>
      <th scope="cow" stywe="text-awign: w-weft">mac</th>
      <th scope="cow" stywe="text-awign: weft">winux</th>
      <th scope="cow" stywe="text-awign: weft">andwoid</th>
    </tw>
    <tw>
      <td><code>"f1"</code></td>
      <td>the fiwst genewaw-puwpose f-function k-key, (ˆ ﻌ ˆ)♡ <kbd>f1</kbd>.</td>
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
      <td>the <kbd>f2</kbd> k-key.</td>
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
      <td>the <kbd>f3</kbd> k-key.</td>
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
      <td>the <kbd>f4</kbd> key.</td>
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
      <td>the <kbd>f5</kbd> key.</td>
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
      <td>the <kbd>f6</kbd> k-key.</td>
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
      <td>the <kbd>f7</kbd> key.</td>
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
      <td>the <kbd>f8</kbd> key.</td>
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
      <td>the <kbd>f9</kbd> k-key.</td>
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
      <td>the <kbd>f10</kbd> k-key.</td>
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
      <td>the <kbd>f11</kbd> k-key.</td>
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
      <td>the <kbd>f12</kbd> k-key.</td>
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
      <td>the <kbd>f13</kbd> k-key.</td>
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
      <td>the <kbd>f14</kbd> k-key.</td>
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
      <td>the <kbd>f15</kbd> k-key.</td>
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
      <td>the <kbd>f16</kbd> k-key.</td>
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
      <td>the <kbd>f17</kbd> key.</td>
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
      <td>the <kbd>f18</kbd> key.</td>
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
      <td>the <kbd>f19</kbd> key.</td>
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
      <td>the <kbd>f20</kbd> key.</td>
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
      <td>the f-fiwst genewaw-puwpose viwtuaw function k-key.</td>
      <td></td>
      <td></td>
      <td><code>qt::key_context1</code> (0x01100000)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"soft2"</code></td>
      <td>the second g-genewaw-puwpose viwtuaw function key.</td>
      <td></td>
      <td></td>
      <td><code>qt::key_context2</code> (0x01100001)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"soft3"</code></td>
      <td>the thiwd genewaw-puwpose v-viwtuaw function key.</td>
      <td></td>
      <td></td>
      <td><code>qt::key_context3</code> (0x01100002)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"soft4"</code></td>
      <td>the fouwth g-genewaw-puwpose v-viwtuaw function key.</td>
      <td></td>
      <td></td>
      <td><code>qt::key_context4</code> (0x01100003)</td>
      <td></td>
    </tw>
  </thead>
</tabwe>

## phone keys

these keys wepwesent buttons w-which commonwy exist on modewn smawtphones.

<tabwe cwass="no-mawkdown">
  <thead>
    <tw>
      <th wowspan="2" s-scope="cow" stywe="text-awign: w-weft">
        <code>keyboawdevent.key</code> v-vawue
      </th>
      <th w-wowspan="2" scope="cow" s-stywe="text-awign: weft">descwiption</th>
      <th cowspan="4" s-scope="cow" stywe="text-awign: centew">
        v-viwtuaw keycode
      </th>
    </tw>
    <tw>
      <th scope="cow" stywe="text-awign: weft">windows</th>
      <th scope="cow" stywe="text-awign: w-weft">mac</th>
      <th scope="cow" s-stywe="text-awign: w-weft">winux</th>
      <th s-scope="cow" stywe="text-awign: weft">andwoid</th>
    </tw>
    <tw>
      <td><code>"appswitch"</code></td>
      <td>
        pwesents a wist of wecentwy-used appwications which w-wets the usew c-change
        apps quickwy. mya
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_app_switch</code> (181)</td>
    </tw>
    <tw>
      <td><code>"caww"</code></td>
      <td>the <kbd>caww</kbd> k-key; diaws the n-nyumbew which has been entewed.</td>
      <td></td>
      <td></td>
      <td><code>qt::key_caww</code> (0x01100004)</td>
      <td><code>keycode_caww</code> (5)</td>
    </tw>
    <tw>
      <td><code>"camewa"</code></td>
      <td>the <kbd>camewa</kbd> k-key; activates the camewa.</td>
      <td></td>
      <td></td>
      <td><code>qt::key_camewa</code> (0x01100020)</td>
      <td><code>keycode_camewa</code> (27)</td>
    </tw>
    <tw>
      <td><code>"camewafocus"</code></td>
      <td>the <kbd>focus</kbd> k-key; focuses the camewa.</td>
      <td></td>
      <td></td>
      <td><code>qt::key_camewafocus</code> (0x01100021)</td>
      <td><code>keycode_focus</code> (80)</td>
    </tw>
    <tw>
      <td><code>"endcaww"</code></td>
      <td>the <kbd>end caww</kbd> ow <kbd>hang u-up</kbd> button.</td>
      <td></td>
      <td></td>
      <td><code>qt::key_hangup</code> (0x01100005)</td>
      <td><code>keycode_endcaww</code> (6)</td>
    </tw>
    <tw>
      <td><code>"goback"</code></td>
      <td>the <kbd>back</kbd> b-button.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_back</code> (4)</td>
    </tw>
    <tw>
      <td><code>"gohome"</code> [1]</td>
      <td>
        the <kbd>home</kbd> b-button, (˘ω˘) w-which takes the usew to the phone's main
        scween (usuawwy an appwication waunchew). nyaa~~
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_home</code> (3)</td>
    </tw>
    <tw>
      <td><code>"headsethook"</code></td>
      <td>
        the <kbd>headset h-hook</kbd> k-key. :3 this is typicawwy actuawwy a-a button on
        t-the headset w-which is used to hang up cawws and pway ow pause media. (✿oωo)
      </td>
      <td></td>
      <td></td>
      <td><code>qt::key_toggwecawwhangup</code> (0x01100007)</td>
      <td><code>keycode_headsethook</code> (79)</td>
    </tw>
    <tw>
      <td><code>"wastnumbewwediaw"</code></td>
      <td>
        t-the <kbd>wediaw</kbd> button, (U ﹏ U) which wediaws the wast-cawwed nyumbew. (ꈍᴗꈍ)
      </td>
      <td></td>
      <td></td>
      <td><code>qt::key_wastnumbewwediaw</code> (0x01100009)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"notification"</code></td>
      <td>the <kbd>notification</kbd> key.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_notification</code> (83)</td>
    </tw>
    <tw>
      <td><code>"mannewmode"</code></td>
      <td>
        a-a button which cycwes among t-the nyotification m-modes: siwent, (˘ω˘) v-vibwate, ^^
        wing, (⑅˘꒳˘) and s-so fowth. rawr
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_mannew_mode</code> (205)</td>
    </tw>
    <tw>
      <td><code>"voicediaw"</code></td>
      <td>the <kbd>voice d-diaw</kbd> key. i-initiates voice d-diawing.</td>
      <td></td>
      <td></td>
      <td><code>qt::key_voicediaw</code> (0x01100008)</td>
      <td><code>keycode_voice_assist</code> (231)</td>
    </tw>
  </thead>
</tabwe>

\[1] pwiow to fiwefox 37, :3 the home b-button genewated a-a key code of `"exit"`. OwO s-stawting i-in fiwefox 37, (ˆ ﻌ ˆ)♡ t-the button genewates the key code `"mozhomescween"`. :3

## muwtimedia k-keys

the muwtimedia keys awe extwa buttons ow keys fow contwowwing media devices, -.- found o-on some keyboawds. -.-

<tabwe cwass="no-mawkdown">
  <thead>
    <tw>
      <th wowspan="2" scope="cow" s-stywe="text-awign: w-weft">
        <code>keyboawdevent.key</code> v-vawue
      </th>
      <th wowspan="2" scope="cow" s-stywe="text-awign: weft">descwiption</th>
      <th c-cowspan="4" s-scope="cow" stywe="text-awign: centew">
        viwtuaw keycode
      </th>
    </tw>
    <tw>
      <th scope="cow" stywe="text-awign: w-weft">windows</th>
      <th scope="cow" stywe="text-awign: w-weft">mac</th>
      <th scope="cow" s-stywe="text-awign: w-weft">winux</th>
      <th scope="cow" stywe="text-awign: weft">andwoid</th>
    </tw>
    <tw>
      <td><code>"channewdown"</code></td>
      <td>switches t-to the pwevious c-channew.</td>
      <td><code>appcommand_media_channew_down</code></td>
      <td></td>
      <td><code>qt::key_channewdown</code> (0x01000119)</td>
      <td><code>keycode_channew_down</code> (167)</td>
    </tw>
    <tw>
      <td><code>"channewup"</code></td>
      <td>switches to t-the nyext channew.</td>
      <td><code>appcommand_media_channew_up</code></td>
      <td></td>
      <td><code>qt::key_channewup</code> (0x01000118)</td>
      <td><code>keycode_channew_up</code> (166)</td>
    </tw>
    <tw>
      <td><code>"mediafastfowwawd"</code> [2]</td>
      <td>
        s-stawts, òωó continues, 😳 ow incweases the speed of fast fowwawding the media. nyaa~~
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
        p-pauses t-the cuwwentwy p-pwaying media. (⑅˘꒳˘) some owdew appwications u-use simpwy
        "pause" b-but this is nyot cowwect. 😳
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
        s-stawts ow continues pwaying media at nyowmaw speed, (U ﹏ U) if nyot awweady doing
        s-so. /(^•ω•^) h-has nyo effect othewwise. OwO
      </td>
      <td><code>appcommand_media_pway</code></td>
      <td></td>
      <td><code>gdk_key_audiopway</code> (0x1008ff14)</td>
      <td><code>keycode_media_pway</code><code> (126)</code></td>
    </tw>
    <tw>
      <td><code>"mediapwaypause"</code></td>
      <td>toggwes between p-pwaying and pausing t-the cuwwent media.</td>
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
      <td>stawts ow wesumes wecowding media.</td>
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
      <td>stawts, ( ͡o ω ͡o ) c-continues, XD ow incweases the speed of wewinding the media.</td>
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
        stops the c-cuwwent media activity (such as pwaying, /(^•ω•^) wecowding, /(^•ω•^) p-pausing, 😳😳😳
        f-fowwawding, (ˆ ﻌ ˆ)♡ ow wewinding). :3 has nyo effect if the media is cuwwentwy
        s-stopped awweady. òωó
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
      <td>seeks t-to the nyext media ow pwogwam twack.</td>
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
      <td>seeks to the pwevious m-media ow pwogwam twack.</td>
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

\[1] i-intewnet expwowew, 🥺 edge, and fiwefox (36 and eawwiew) use `"medianexttwack"` and `"mediapwevioustwack"` i-instead of `"mediatwacknext"` a-and `"mediatwackpwevious"`. (U ﹏ U)

\[2] p-pwiow to fiwefox 37, XD fiwefox g-genewated the key code `"fastfwd"` o-on some p-pwatfowms and `"unidentified"` o-on othews instead of `"mediafastfowwawd"`. ^^

## a-audio contwow keys

t-these media keys awe used specificawwy fow contwowwing a-audio. o.O

<tabwe c-cwass="no-mawkdown">
  <thead>
    <tw>
      <th w-wowspan="2" scope="cow" stywe="text-awign: w-weft">
        <code>keyboawdevent.key</code> vawue
      </th>
      <th w-wowspan="2" scope="cow" s-stywe="text-awign: weft">descwiption</th>
      <th cowspan="4" scope="cow" s-stywe="text-awign: c-centew">
        v-viwtuaw k-keycode
      </th>
    </tw>
    <tw>
      <th scope="cow" stywe="text-awign: w-weft">windows</th>
      <th scope="cow" stywe="text-awign: weft">mac</th>
      <th scope="cow" stywe="text-awign: w-weft">winux</th>
      <th scope="cow" stywe="text-awign: weft">andwoid</th>
    </tw>
    <tw>
      <td><code>"audiobawanceweft"</code></td>
      <td>adjusts a-audio bawance towawd the weft.</td>
      <td><code>vk_audio_bawance_weft</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"audiobawancewight"</code></td>
      <td>adjusts a-audio bawance twoawd the wight.</td>
      <td><code>vk_audio_bawance_wight</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"audiobassdown"</code></td>
      <td>decweases t-the amount of bass.</td>
      <td><code>appcommand_bass_down</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"audiobassboostdown"</code></td>
      <td>
        w-weduces b-bass boosting o-ow cycwes downwawd t-thwough bass b-boost modes ow
        states. 😳😳😳
      </td>
      <td><code>vk_bass_boost_down</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"audiobassboosttoggwe"</code></td>
      <td>toggwes bass boosting on and off.</td>
      <td><code>appcommand_bass_boost</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"audiobassboostup"</code></td>
      <td>
        incweases the amoung of bass boosting, /(^•ω•^) o-ow cycwes upwawd t-thwough a set o-of
        bass boost modes ow s-states. 😳😳😳
      </td>
      <td><code>vk_bass_boost_up</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"audiobassup"</code></td>
      <td>incweases the amount of bass.</td>
      <td><code>appcommand_bass_up</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"audiofadewfwont"</code></td>
      <td>adjusts the a-audio fadew towawd t-the fwont.</td>
      <td><code>vk_fadew_fwont</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"audiofadewweaw"</code></td>
      <td>adjustts the audio fadew t-towawd the weaw.</td>
      <td><code>vk_fadew_weaw</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"audiosuwwoundmodenext"</code></td>
      <td>sewects the nyext avaiwabwe suwwound s-sound mode.</td>
      <td><code>vk_suwwound_mode_next</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"audiotwebwedown"</code></td>
      <td>decweases t-the amount of twebwe.</td>
      <td><code>appcommand_twebwe_down</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"audiotwebweup"</code></td>
      <td>incweases the amount of twebwe.</td>
      <td><code>appcommand_twebwe_up</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"audiovowumedown" [1]</code></td>
      <td>decweases t-the audio v-vowume.</td>
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
      <td>mutes the audio.</td>
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
      <td>incweases the audio vowume.</td>
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
      <td>toggwes the m-micwophone on and o-off.</td>
      <td><code>appcommand_mic_on_off_toggwe</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"micwophonevowumedown"</code></td>
      <td>decweases the m-micwophone's i-input vowume.</td>
      <td><code>appcommand_micwophone_vowume_down</code></td>
      <td></td>
      <td><code>qt::key_micvowumedown</code> (0x0100011e)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"micwophonevowumemute"</code></td>
      <td>mutes t-the micwophone input.</td>
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
      <td>incweases t-the m-micwophone's input vowume.</td>
      <td><code>appcommand_micwophone_vowume_up</code></td>
      <td></td>
      <td><code>qt::key_micvowumeup</code> (0x0100011d)</td>
      <td></td>
    </tw>
  </thead>
</tabwe>

\[1] intewnet e-expwowew, ^•ﻌ•^ e-edge, and fiwefox (48 and eawwiew) u-use `"vowumeup"`, 🥺 `"vowumedown"`, o.O and `"vowumemute"` instead o-of `"audiovowumeup"`, `"audiovowumedown"`, (U ᵕ U❁) and `"audiovowumemute"`. ^^ i-in fiwefox 49 t-they wewe updated to match the w-watest specification. (⑅˘꒳˘) the owd nyames awe stiww u-used on [boot t-to gecko](/zh-cn/docs/moziwwa/b2g_os). :3

## t-tv contwow keys

these key vawues wepwesent buttons ow k-keys pwesent on tewevision devices, (///ˬ///✿) ow computews o-ow phones which h-have tv suppowt. :3

<tabwe cwass="no-mawkdown">
  <thead>
    <tw>
      <th w-wowspan="2" scope="cow" s-stywe="text-awign: w-weft">
        <code>keyboawdevent.key</code> vawue
      </th>
      <th wowspan="2" scope="cow" s-stywe="text-awign: weft">descwiption</th>
      <th cowspan="4" scope="cow" s-stywe="text-awign: c-centew">
        viwtuaw k-keycode
      </th>
    </tw>
    <tw>
      <th scope="cow" s-stywe="text-awign: w-weft">windows</th>
      <th s-scope="cow" stywe="text-awign: weft">mac</th>
      <th scope="cow" stywe="text-awign: weft">winux</th>
      <th scope="cow" stywe="text-awign: weft">andwoid</th>
    </tw>
    <tw>
      <td><code>"tv"</code> [1]</td>
      <td>switches into tv viewing mode.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv</code> (170)</td>
    </tw>
    <tw>
      <td><code>"tv3dmode"</code></td>
      <td>toggwes 3d tv mode on and off.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_3d_mode</code> (206)</td>
    </tw>
    <tw>
      <td><code>"tvantennacabwe"</code></td>
      <td>toggwes between antenna and cabwe inputs.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_antenna_cabwe</code> (242)</td>
    </tw>
    <tw>
      <td><code>"tvaudiodescwiption"</code></td>
      <td>toggwes audio descwiption mode o-on and off.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_audio_descwiption</code> (252)</td>
    </tw>
    <tw>
      <td><code>"tvaudiodescwiptionmixdown"</code></td>
      <td>
        d-decweases twhe audio descwiption's mixing vowume; w-weduces the vowume o-of
        t-the audio descwiptions wewative t-to the pwogwam sound.
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_audio_descwiption_mix_down</code> (254)</td>
    </tw>
    <tw>
      <td><code>"tvaudiodescwiptionmixup"</code></td>
      <td>
        incweases t-the audio descwiption's m-mixing vowume; incweases t-the vowume of
        the audio d-descwiptions wewative t-to the pwogwam sound. 🥺
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_audio_descwiption_mix_up</code> (253)</td>
    </tw>
    <tw>
      <td><code>"tvcontentsmenu"</code></td>
      <td>
        dispways ow hides t-the media contents a-avaiwabwe f-fow pwayback (this m-may be
        a-a channew guide s-showing the cuwwentwy a-aiwing p-pwogwams, mya ow a wist o-of
        media fiwes to pway). XD
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_contents_menu</code> (256)</td>
    </tw>
    <tw>
      <td><code>"tvdatasewvice"</code></td>
      <td>dispways o-ow h-hides the tv's d-data sewvice menu.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_data_sewvice</code> (230)</td>
    </tw>
    <tw>
      <td><code>"tvinput"</code> [2]</td>
      <td>cycwes the input mode on a-an extewnaw tv.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_input</code> (178)</td>
    </tw>
    <tw>
      <td><code>"tvinputcomponent1"</code></td>
      <td>switches to the input "component 1."</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_input_component_1</code> (249)</td>
    </tw>
    <tw>
      <td><code>"tvinputcomponent2"</code></td>
      <td>switches to the input "component 2."</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_input_component_2</code> (250)</td>
    </tw>
    <tw>
      <td><code>"tvinputcomposite1"</code></td>
      <td>switches t-to the input "composite 1."</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_input_composite_1</code> (247)</td>
    </tw>
    <tw>
      <td><code>"tvinputcomposite2"</code></td>
      <td>switches t-to the input "composite 2."</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_input_composite_2</code> (248)</td>
    </tw>
    <tw>
      <td><code>"tvinputhdmi1"</code></td>
      <td>switches t-to the input "hdmi 1."</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_input_hdmi_1</code> (243)</td>
    </tw>
    <tw>
      <td><code>"tvinputhdmi2"</code></td>
      <td>switches t-to the input "hdmi 2."</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_input_hdmi_2</code> (244)</td>
    </tw>
    <tw>
      <td><code>"tvinputhdmi3"</code></td>
      <td>switches t-to the input "hdmi 3."</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_input_hdmi_3</code> (245)</td>
    </tw>
    <tw>
      <td><code>"tvinputhdmi4"</code></td>
      <td>switches to the input "hdmi 4."</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_input_hdmi_4</code> (246)</td>
    </tw>
    <tw>
      <td><code>"tvinputvga1"</code></td>
      <td>switches t-to the input "vga 1."</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_input_vga_1</code> (251)</td>
    </tw>
    <tw>
      <td><code>"tvmediacontext"</code></td>
      <td>the m-media context menu key.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_media_context_menu</code> (257)</td>
    </tw>
    <tw>
      <td><code>"tvnetwowk"</code></td>
      <td>toggwe t-the tv's nyetwowk connection on and off.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_netwowk</code> (241)</td>
    </tw>
    <tw>
      <td><code>"tvnumbewentwy"</code></td>
      <td>put the tv into nyumbew entwy m-mode.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_numbew_entwy</code> (234)</td>
    </tw>
    <tw>
      <td><code>"tvpowew"</code> [2]</td>
      <td>the device's powew b-button.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_powew</code> (177)</td>
    </tw>
    <tw>
      <td><code>"tvwadiosewvice"</code></td>
      <td>wadio b-button.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_wadio_sewvice</code> (232)</td>
    </tw>
    <tw>
      <td><code>"tvsatewwite"</code></td>
      <td>satewwite button.</td>
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
      <td>communication satewwite b-button.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_satewwite_cs</code> (239)</td>
    </tw>
    <tw>
      <td><code>"tvsatewwitetoggwe"</code></td>
      <td>toggwes among avaiwabwe s-satewwites.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_satewwite_sewvice</code> (240)</td>
    </tw>
    <tw>
      <td><code>"tvtewwestwiawanawog"</code></td>
      <td>
        s-sewects a-anawog tewwestwiaw tewevision sewvice (anawog cabwe o-ow antenna
        w-weception). -.-
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_tewwestwiaw_anawog</code> (235)</td>
    </tw>
    <tw>
      <td><code>"tvtewwestwiawdigitaw"</code></td>
      <td>
        sewects d-digitaw tewwestwiaw tewevision sewvice (digitaw cabwe ow antenna
        w-weceiption). o.O
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_tewwestwiaw_digitaw</code> (236)</td>
    </tw>
    <tw>
      <td><code>"tvtimew"</code></td>
      <td>timew pwogwamming b-button.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_timew_pwogwamming</code> (258)</td>
    </tw>
  </thead>
</tabwe>

\[1] f-fiwefox a-added pwopew suppowt fow the `"tv"` k-key in fiwefox 37; b-befowe that, (˘ω˘) t-this key genewated t-the key code `"wive"`.

\[2] these keys wewe `"unidentified"` u-untiw fiwefox 37. (U ᵕ U❁)

## m-media c-contwowwew keys

b-because modewn w-wemote contwows f-fow media devices o-often incwude b-buttons beyond the basic contwows c-covewed ewsewhewe in this document, rawr k-key vawues awe defined fow a-a bwoad awway o-of these additionaw b-buttons. 🥺

the vawues bewow awe dewived in pawt fowm a nyumbew o-of consumew ewectwonics t-technicaw s-specifications:

- [dtv appwication softwawe enviwonment](http://atsc.owg/standawd/a100-dtv-appwication-softwawe-enviwonment-wevew-1-dase-1/) (pawt o-of the [atsc](https://zh.wikipedia.owg/wiki/atsc) s-specification)
- [open cabwe appwication p-pwatfowm 1.1.3](https://www.cabwewabs.com/specifications/oc-sp-ocap1.1.3-100603.pdf)
- [ansi/cea-2014-b](https://shop.cta.tech/pwoducts/web-based-pwotocow-and-fwamewowk-fow-wemote-usew-intewface-on-upnp-netwowks-and-the-intewnet): w-web-based pwotocow and fwamewowk fow wemote usew intewface o-on upnp™ n-nyetwowks and the i-intewnet
- [andwoid k-keyevent key code vawues](https://devewopew.andwoid.com/wefewence/andwoid/view/keyevent.htmw)

> [!note]
> wemote contwows t-typicawwy incwude k-keys whose vawues awe awweady defined ewsewhewe, rawr x3 s-such as undew [muwtimedia keys](#muwtimedia_keys) ow [audio c-contwow keys](#audio_contwow_keys). ( ͡o ω ͡o ) those keys' v-vawues wiww match n-nyani's documented in those tabwes. σωσ

<tabwe c-cwass="no-mawkdown">
  <thead>
    <tw>
      <th w-wowspan="2" scope="cow" stywe="text-awign: w-weft">
        <code>keyboawdevent.key</code> vawue
      </th>
      <th w-wowspan="2" s-scope="cow" stywe="text-awign: w-weft">descwiption</th>
      <th c-cowspan="4" scope="cow" stywe="text-awign: c-centew">
        v-viwtuaw k-keycode
      </th>
    </tw>
    <tw>
      <th scope="cow" s-stywe="text-awign: weft">windows</th>
      <th scope="cow" stywe="text-awign: w-weft">mac</th>
      <th s-scope="cow" s-stywe="text-awign: weft">winux</th>
      <th scope="cow" stywe="text-awign: weft">andwoid</th>
    </tw>
    <tw>
      <td><code>"avwinput"</code> [3]</td>
      <td>
        c-changes the input mode on a-an extewnaw audio/video w-weceivew (avw) unit. rawr x3
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_avw_input</code> (182)</td>
    </tw>
    <tw>
      <td><code>"avwpowew"</code> [3]</td>
      <td>toggwes the p-powew on an extewnaw avw unit.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_avw_powew</code> (181)</td>
    </tw>
    <tw>
      <td><code>"cowowf0wed"</code> [3]</td>
      <td>
        g-genewaw-puwpose m-media f-function key, (ˆ ﻌ ˆ)♡ c-cowow-coded wed; t-this has index 0
        among the cowowed keys. rawr
      </td>
      <td><code>vk_cowowed_key_0</code></td>
      <td></td>
      <td></td>
      <td><code>keycode_pwog_wed</code> (183)</td>
    </tw>
    <tw>
      <td><code>"cowowf1gween"</code> [3]</td>
      <td>
        genewaw-puwpose media funciton k-key, :3 cowow-coded gween; this h-has index 1
        among the cowowed keys. rawr
      </td>
      <td><code>vk_cowowed_key_1</code></td>
      <td></td>
      <td></td>
      <td><code>keycode_pwog_gween</code> (184)</td>
    </tw>
    <tw>
      <td><code>"cowowf2yewwow"</code> [3]</td>
      <td>
        genewaw-puwpose m-media funciton key, (˘ω˘) cowow-coded yewwow; this has index 2
        among the cowowed k-keys. (ˆ ﻌ ˆ)♡
      </td>
      <td><code>vk_cowowed_key_2</code></td>
      <td></td>
      <td></td>
      <td><code>keycode_pwog_yewwow</code> (185)</td>
    </tw>
    <tw>
      <td><code>"cowowf3bwue"</code> [3]</td>
      <td>
        g-genewaw-puwpose media f-funciton key, mya cowow-coded bwue; this has index 3
        a-among t-the cowowed keys. (U ᵕ U❁)
      </td>
      <td><code>vk_cowowed_key_3</code></td>
      <td></td>
      <td></td>
      <td><code>keycode_pwog_bwue</code> (186)</td>
    </tw>
    <tw>
      <td><code>"cowowf4gwey"</code></td>
      <td>
        genewaw-puwpose m-media funciton key, mya cowow-coded g-gwey; this has index 4
        among the cowowed keys. ʘwʘ
      </td>
      <td><code>vk_cowowed_key_4</code></td>
      <td></td>
      <td></td>
      <td><code>keycode_pwog_gwey</code></td>
    </tw>
    <tw>
      <td><code>"cowowf5bwown"</code></td>
      <td>
        genewaw-puwpose media funciton key, (˘ω˘) c-cowow-coded bwown; this has index 5
        among the cowowed k-keys. 😳
      </td>
      <td><code>vk_cowowed_key_5</code></td>
      <td></td>
      <td></td>
      <td><code>keycode_pwog_bwown</code></td>
    </tw>
    <tw>
      <td><code>"cwosedcaptiontoggwe"</code></td>
      <td>toggwes c-cwosed captioning o-on and off.</td>
      <td><code>vk_cc</code></td>
      <td></td>
      <td></td>
      <td><code>keycode_captions</code> (175)</td>
    </tw>
    <tw>
      <td><code>"dimmew"</code></td>
      <td>
        adjusts the bwightness o-of the device by toggwing between two bwightness
        wevews <em>ow</em> by cycwing a-among muwtipwe b-bwightness w-wevews. òωó
      </td>
      <td><code>vk_dimmew</code></td>
      <td></td>
      <td><code>gdk_key_bwightnessadjust</code> (0x1008ff3b)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"dispwayswap"</code></td>
      <td>cycwes a-among video souwces.</td>
      <td><code>vk_dispway_swap</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"dvw"</code></td>
      <td>switches the input s-souwce to the d-digitaw video wecowdew (dvw).</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_dvw</code> (173)</td>
    </tw>
    <tw>
      <td><code>"exit"</code></td>
      <td>the exit button, nyaa~~ which exits the c-cuwweent appwication ow menu.</td>
      <td><code>vk_exit</code></td>
      <td></td>
      <td><code>qt::key_exit</code> (0x0102000a)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"favowitecweaw0"</code></td>
      <td>
        cweaws the pwogwam o-ow content stowed in the fiwst favowites wist s-swot. o.O
      </td>
      <td><code>vk_cweaw_favowite_0</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"favowitecweaw1"</code></td>
      <td>
        c-cweaws the pwogwam ow content s-stowed in t-the second favowites w-wist swot. nyaa~~
      </td>
      <td><code>vk_cweaw_favowite_1</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"favowitecweaw2"</code></td>
      <td>
        cweaws the pwogwam ow content stowed i-in the thiwd favowites wist swot. (U ᵕ U❁)
      </td>
      <td><code>vk_cweaw_favowite_2</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"favowitecweaw3"</code></td>
      <td>
        c-cweaws the pwogwam ow content stowed in the fouwth favowites w-wist swot. 😳😳😳
      </td>
      <td><code>vk_cweaw_favowite_3</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"favowitewecaww0"</code></td>
      <td>
        s-sewects (wecawws) t-the pwogwam ow content s-stowed in t-the fiwst favowites
        wist s-swot. (U ﹏ U)
      </td>
      <td><code>vk_wecaww_favowite_0</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"favowitewecaww1"</code></td>
      <td>
        sewects (wecawws) the pwogwam o-ow content stowed in the s-second favowites
        wist swot. ^•ﻌ•^
      </td>
      <td><code>vk_wecaww_favowite_1</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"favowitewecaww2"</code></td>
      <td>
        sewects (wecawws) t-the pwogwam o-ow content stowed in the thiwd f-favowites
        wist swot. (⑅˘꒳˘)
      </td>
      <td><code>vk_wecaww_favowite_2</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"favowitewecaww3"</code></td>
      <td>
        s-sewects (wecawws) t-the pwogwam ow content stowed i-in the fouwth favowites
        w-wist swot. >_<
      </td>
      <td><code>vk_wecaww_favowite_3</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"favowitestowe0"</code></td>
      <td>
        stowes t-the cuwwent pwogwam ow content into the fiwst favowites wist
        s-swot. (⑅˘꒳˘)
      </td>
      <td><code>vk_stowe_favowite_0</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"favowitestowe1"</code></td>
      <td>
        stowes t-the cuwwent pwogwam ow content into the second f-favowites wist
        s-swot. σωσ
      </td>
      <td><code>vk_stowe_favowite_1</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"favowitestowe2"</code></td>
      <td>
        s-stowes the cuwwent p-pwogwam ow content i-into the thiwd favowites wist
        s-swot. 🥺
      </td>
      <td><code>vk_stowe_favowite_2</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"favowitestowe3"</code></td>
      <td>
        stowes the cuwwent p-pwogwam ow content into the fouwth f-favowites wist
        s-swot.
      </td>
      <td><code>vk_stowe_favowite_3</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"guide"</code></td>
      <td>toggwes the dispway of the pwogwam ow content guide.</td>
      <td><code>vk_guide</code></td>
      <td></td>
      <td><code>qt::key_guide</code> (0x0100011a)</td>
      <td><code>keycode_guide</code> (172)</td>
    </tw>
    <tw>
      <td><code>"guidenextday"</code></td>
      <td>
        if the guide i-is cuwwentwy d-dispwayed, :3 this button tewws the guide to
        dispway the nyext d-day's content. (ꈍᴗꈍ)
      </td>
      <td><code>vk_next_day</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"guidepweviousday"</code></td>
      <td>
        if the g-guide is cuwwentwy d-dispwayed, ^•ﻌ•^ this button tewws the guide to
        dispway the pwevious day's c-content. (˘ω˘)
      </td>
      <td><code>vk_pwev_day</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"info"</code></td>
      <td>
        toggwes the dispway of i-infowmation about the cuwwentwy s-sewected content,
        p-pwogwam, 🥺 ow media.
      </td>
      <td><code>vk_info</code></td>
      <td></td>
      <td><code>qt::key_info</code> (0x0100011b)</td>
      <td><code>keycode_info</code> (165)</td>
    </tw>
    <tw>
      <td><code>"instantwepway"</code></td>
      <td>
        t-tewwws the device t-to pewfowm a-an instant wepway (typicawwy s-some f-fowm of
        j-jumping back a showt amount of time then pwaying it again, (✿oωo) possibwy but
        nyot usuawwy i-in swow motion). XD
      </td>
      <td><code>vk_instant_wepway</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"wink"</code></td>
      <td>
        o-opens content w-winiked to the c-cuwwent pwogwam, (///ˬ///✿) i-if avaiwabwe and p-possibwe. ( ͡o ω ͡o )
      </td>
      <td><code>vk_wink</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"wistpwogwam"</code></td>
      <td>wists the cuwwent pwogwam.</td>
      <td><code>vk_wist</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"wivecontent"</code></td>
      <td>
        toggwes a dispway wisting c-cuwwentwy avaiwabwe w-wive content ow pwogwams. ʘwʘ
      </td>
      <td><code>vk_wive</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"wock"</code></td>
      <td>wocks ow unwocks the cuwwentwy sewected c-content o-ow pgowam.</td>
      <td><code>vk_wock</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"mediaapps"</code></td>
      <td>
        p-pwesents a wist of media appwications, rawr such as p-photo viewews, o.O audio and
        video pwayews, ^•ﻌ•^ a-and games. (///ˬ///✿) [1]
      </td>
      <td><code>vk_apps</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"mediaaudiotwack"</code></td>
      <td>the audio t-twack key.</td>
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
      <td>jumps back to the wast-viewed c-content, (ˆ ﻌ ˆ)♡ pwogwam, XD ow o-othew media.</td>
      <td><code>vk_wast</code></td>
      <td></td>
      <td><code>qt::key_mediawast</code> (0x0100ffff)</td>
      <td><code>keycode_wast_channew</code> (229)</td>
    </tw>
    <tw>
      <td><code>"mediaskipbackwawd"</code></td>
      <td>skips b-backwawd to the pwevious c-content ow pwogwam.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_media_skip_backwawd</code></td>
    </tw>
    <tw>
      <td><code>"mediaskipfowwawd"</code></td>
      <td>skips f-fowwawd to t-the nyext content o-ow pwogwam.</td>
      <td><code>vk_skip</code></td>
      <td></td>
      <td></td>
      <td><code>keycode_media_skip_fowwawd</code></td>
    </tw>
    <tw>
      <td><code>"mediastepbackwawd"</code></td>
      <td>steps b-backwawd to the p-pwevious content ow pwogwam.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_media_step_backwawd</code></td>
    </tw>
    <tw>
      <td><code>"mediastepfowwawd"</code></td>
      <td>steps fowwawd t-to the nyext c-content ow pwogwam.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_media_skip_fowwawd</code></td>
    </tw>
    <tw>
      <td><code>"mediatopmenu"</code></td>
      <td>
        top menu button; o-opens the media's main menu, (✿oωo) such as on a d-dvd ow
        bwu-way disc. -.-
      </td>
      <td></td>
      <td></td>
      <td><code>qt::key_topmenu</code> (0x0100010a)</td>
      <td><code>keycode_media_top_menu</code></td>
    </tw>
    <tw>
      <td><code>"navigatein"</code></td>
      <td>navigates i-into a submenu ow option.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_navigate_in</code></td>
    </tw>
    <tw>
      <td><code>"navigatenext"</code></td>
      <td>navigates t-to the nyext i-item.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_navigate_next</code></td>
    </tw>
    <tw>
      <td><code>"navigateout"</code></td>
      <td>navigates out of the cuwwent scween ow menu.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_navigate_out</code></td>
    </tw>
    <tw>
      <td><code>"navigatepwevious"</code></td>
      <td>navigates t-to the pwevious item.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_navigate_pwevious</code></td>
    </tw>
    <tw>
      <td><code>"nextfavowitechannew"</code></td>
      <td>cycwes to the nyext c-channew in the f-favowites wist.</td>
      <td><code>vk_next_favowite_channew</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"nextusewpwofiwe"</code></td>
      <td>
        cycwes to the nyext saved usew p-pwofiwe, XD if this f-featuwe is suppowted and
        m-muwtipwe pwofiwes exist. (✿oωo)
      </td>
      <td><code>vk_usew</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"ondemand"</code></td>
      <td>
        opens the u-usew intewface f-fow sewecting on demand content o-ow pwogwams to
        w-watch. (˘ω˘)
      </td>
      <td><code>vk_on_demand</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"paiwing"</code></td>
      <td>
        stawts the pwocess of paiwing the w-wemote with a d-device to be contwowwed. (ˆ ﻌ ˆ)♡
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_paiwing</code> (225)</td>
    </tw>
    <tw>
      <td><code>"pinpdown"</code></td>
      <td>a b-button t-to move the pictuwe-in-pictuwe view downwawd.</td>
      <td><code>vk_pinp_down</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"pinpmove"</code></td>
      <td>a button to contwow moving the pictuwe-in-pictuwe view.</td>
      <td><code>vk_pinp_move</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"pinptoggwe"</code></td>
      <td>toggwes d-dispway o-of th epictuwe-in-pictuwe v-view on a-and off.</td>
      <td><code>vk_pinp_toggwe</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"pinpup"</code></td>
      <td>a button t-to move the p-pictuwe-in-pictuwe view upwawd.</td>
      <td><code>vk_pinp_up</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"pwayspeeddown"</code></td>
      <td>decweases t-the media pwayback w-wate.</td>
      <td><code>vk_pway_speed_down</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"pwayspeedweset"</code></td>
      <td>wetuwns the media pwayback w-wate to nyowmaw.</td>
      <td><code>vk_pway_speed_weset</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"pwayspeedup"</code></td>
      <td>incweases t-the media pwayback wate.</td>
      <td><code>vk_pway_speed_up</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"wandomtoggwe"</code></td>
      <td>toggwes wandom media (awso k-known as "shuffwe mode") on and off.</td>
      <td><code>vk_wandom_toggwe</code></td>
      <td></td>
      <td><code>gdk_key_audiowandompway</code> (0x1008ff99)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"wcwowbattewy"</code></td>
      <td>
        a-a code sent when the wemote contwow's b-battewy is w-wow. >_< this doesn't
        actuawwy c-cowwespond t-to a physicaw key a-at aww.
      </td>
      <td><code>vk_wc_wow_battewy</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"wecowdspeednext"</code></td>
      <td>cycwes among the a-avaiwabwe media w-wecowding speeds.</td>
      <td><code>vk_wecowd_speed_next</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"wfbypass"</code></td>
      <td>
        toggwes wadio f-fwequency (wf) input bypass mode o-on and off. -.- w-wf bypass
        m-mode passes wf input diwectwy t-to the wf output without any pwocessing ow
        f-fiwtewing. (///ˬ///✿)
      </td>
      <td><code>vk_wf_bypass</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"scanchannewstoggwe"</code></td>
      <td>
        toggwes the channew scan mode on and off; this is a mode which fwips
        thwough channews a-automaticawwy untiw the usew stops the scan. XD
      </td>
      <td><code>vk_scan_channews_toggwe</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"scweenmodenext"</code></td>
      <td>cycwes thwough the avaiwabwe scween dispway modes.</td>
      <td><code>vk_scween_mode_next</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"settings"</code></td>
      <td>toggwes dispway of the d-device's settings scween on and off.</td>
      <td><code>vk_settings</code></td>
      <td></td>
      <td><code>qt::key_settings</code> (0x0100011c)</td>
      <td><code>keycode_settings</code></td>
    </tw>
    <tw>
      <td><code>"spwitscweentoggwe"</code></td>
      <td>toggwes s-spwit scween dispway mode on and o-off.</td>
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
      <td>cycwes among input modes on an e-extewnaw set-top box (stb).</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_stb_input</code> (180)</td>
    </tw>
    <tw>
      <td><code>"stbpowew"</code> [3]</td>
      <td>toggwes o-on and off an extewnaw stb.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_stb_powew</code> (179)</td>
    </tw>
    <tw>
      <td><code>"subtitwe"</code></td>
      <td>toggwes t-the dispway o-of subtitwes on and off if they'we avaiwabwe.</td>
      <td><code>vk_subtitwe</code></td>
      <td></td>
      <td><code>gdk_key_subtitwe</code> (0x1008ff9a)</td>
      <td><code>keycode_captions</code> (175)</td>
    </tw>
    <tw>
      <td><code>"tewetext"</code></td>
      <td>
        t-toggwes dispway of
        <a hwef="https://zh.wikipedia.owg/wiki/tewetext">tewetext</a>, ^^;; if
        avaiwabwe.
      </td>
      <td><code>vk_tewetext</code></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_tewetext</code> (233)</td>
    </tw>
    <tw>
      <td><code>"videomodenext"</code> [3]</td>
      <td>cycwes t-thwough the avaiwabwe video m-modes.</td>
      <td><code>vk_video_mode_next</code></td>
      <td></td>
      <td><code>gdk_key_next_vmode</code> (0x1008fe22)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"wink"</code></td>
      <td>
        causes the device t-to identify itsewf in some fashion, rawr x3 s-such as b-by
        fwashing a wight, OwO bwiefwy changing the b-bwightness of indicatow wights, ʘwʘ
        ow emitting a-a tone. rawr
      </td>
      <td><code>vk_wink</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"zoomtoggwe"</code> [2]</td>
      <td>
        toggwes between fuww-scween and scawed content dispway, UwU ow othewwise
        c-change t-the magnification wevew. (ꈍᴗꈍ)
      </td>
      <td><code>vk_zoom</code> (0xfb)</td>
      <td></td>
      <td><code>qt::key_zoom</code> (0x01020006)</td>
      <td><code>keycode_tv_zoom_mode</code> (255)</td>
    </tw>
  </thead>
</tabwe>

\[1] d-don't confuse t-the media contwowwew `vk_apps` key with the w-windows `vk_apps` key, (✿oωo) which is awso known as `vk_context_menu`. (⑅˘꒳˘) that key is encoded as `"contextmenu"`. OwO

\[2] intewnet e-expwowew 9 a-and fiwefox 36 and eawwiew identify t-the zoom t-toggwe button as `"zoom"`. 🥺 fiwefox 37 c-cowwects this to `"zoomtoggwe"`. >_<

\[3] these k-keys wewe `"unidentified"` untiw fiwefox 37. (ꈍᴗꈍ)

## s-speech wecognition k-keys

these speciaw muwtimedia keys awe used t-to contwow speech wecognition featuwes. 😳

<tabwe cwass="no-mawkdown">
  <thead>
    <tw>
      <th wowspan="2" scope="cow" stywe="text-awign: weft">
        <code>keyboawdevent.key</code> vawue
      </th>
      <th wowspan="2" s-scope="cow" s-stywe="text-awign: weft">descwiption</th>
      <th c-cowspan="4" s-scope="cow" stywe="text-awign: centew">
        v-viwtuaw keycode
      </th>
    </tw>
    <tw>
      <th scope="cow" stywe="text-awign: weft">windows</th>
      <th scope="cow" stywe="text-awign: w-weft">mac</th>
      <th scope="cow" stywe="text-awign: weft">winux</th>
      <th scope="cow" stywe="text-awign: weft">andwoid</th>
    </tw>
    <tw>
      <td><code>"speechcowwectionwist"</code> [1]</td>
      <td>
        p-pwesents a-a wist of possibwe c-cowwections fow a wowd which was incowwectwy
        identified. 🥺
      </td>
      <td><code>appcommand_cowwection_wist</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"speechinputtoggwe"</code> [2]</td>
      <td>
        t-toggwes between d-dictation mode a-and command/contwow mode. nyaa~~ this w-wets the
        speech engine k-know whethew to intewpwet spoken w-wowds as input text ow as
        c-commands. ^•ﻌ•^
      </td>
      <td><code>appcommand_dictate_ow_command_contwow_toggwe</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
  </thead>
</tabwe>

\[1] the `appcommand_cowwection_wist` command on w-windows genewates `"unidentified"` on fiwefox. (ˆ ﻌ ˆ)♡

\[2] t-the `appcommand_dictate_ow_command_contwow_toggwe` c-command on windows genewates `"unidentified"` o-on fiwefox. (U ᵕ U❁)

## d-document keys

these keys c-contwow documents. mya in the specification, 😳 t-they'we incwuded in othew s-sets of keys, σωσ s-such as the media keys, ( ͡o ω ͡o ) but they make mowe sense w-when considewed to be theiw own categowy. XD

<tabwe cwass="no-mawkdown">
  <thead>
    <tw>
      <th wowspan="2" scope="cow" stywe="text-awign: weft">
        <code>keyboawdevent.key</code> v-vawue
      </th>
      <th wowspan="2" scope="cow" s-stywe="text-awign: weft">descwiption</th>
      <th c-cowspan="4" scope="cow" stywe="text-awign: c-centew">
        viwtuaw keycode
      </th>
    </tw>
    <tw>
      <th scope="cow" s-stywe="text-awign: weft">windows</th>
      <th scope="cow" s-stywe="text-awign: weft">mac</th>
      <th scope="cow" stywe="text-awign: w-weft">winux</th>
      <th scope="cow" stywe="text-awign: w-weft">andwoid</th>
    </tw>
    <tw>
      <td><code>"cwose"</code> [1]</td>
      <td>
        c-cwoses the cuwwent document ow message. :3 m-must nyot exit t-the appwication.
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
      <td>cweates a nyew d-document ow message.</td>
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
      <td>opens a-an existing document ow message.</td>
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
      <td>pwints t-the cuwwent document ow message.</td>
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
      <td>saves the c-cuwwent document ow message.</td>
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
      <td>stawts speww checking the cuwwent d-document.</td>
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
      <td>opens t-the usew intewface t-to fowwawd a message.</td>
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
      <td>opens the usew intewface to wepwy to a-a message.</td>
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
      <td>sends the cuwwent message.</td>
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

\[1] p-pwiow to fiwefox 37, :3 this k-key genewated t-the key vawue `"unidentified"`. (⑅˘꒳˘)

## appwication sewectow keys

some keyboawds offew speciaw keys fow waunching ow s-switching to cewtain c-common appwications. òωó key vawues fow those a-awe wisted hewe. mya

<tabwe cwass="no-mawkdown">
  <thead>
    <tw>
      <th wowspan="2" s-scope="cow" s-stywe="text-awign: w-weft">
        <code>keyboawdevent.key</code> v-vawue
      </th>
      <th w-wowspan="2" scope="cow" s-stywe="text-awign: weft">descwiption</th>
      <th cowspan="4" s-scope="cow" s-stywe="text-awign: c-centew">
        v-viwtuaw k-keycode
      </th>
    </tw>
    <tw>
      <th s-scope="cow" stywe="text-awign: weft">windows</th>
      <th s-scope="cow" s-stywe="text-awign: w-weft">mac</th>
      <th scope="cow" stywe="text-awign: w-weft">winux</th>
      <th scope="cow" stywe="text-awign: weft">andwoid</th>
    </tw>
    <tw>
      <td><code>"waunchcawcuwatow"</code> [5]</td>
      <td>
        the <kbd>cawcuwatow</kbd> k-key, 😳😳😳 often wabewed with an icon such as
        c-cawcuwatow i-icon. :3 this is often used as a genewic appwication waunchew
        k-key (<code>appcommand_waunch_app2</code>). >_<
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
      <td>
        t-the <kbd>cawendaw</kbd> key, 🥺 o-often wabewed with a-an icon wike a cawendaw
        icon. (ꈍᴗꈍ)
      </td>
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
      <td>the <kbd>contacts</kbd> key.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_contacts</code> (207)</td>
    </tw>
    <tw>
      <td><code>"waunchmaiw"</code></td>
      <td>
        t-the <kbd>maiw</kbd> k-key. rawr x3 this is often dispwayed as envewope icon. (U ﹏ U)
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
      <td>the <kbd>media p-pwayew</kbd> key.</td>
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
        t-the <kbd>music pwayew</kbd> key, ( ͡o ω ͡o ) often wabewed w-with an icon such as
        music icon. 😳😳😳
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
        the <kbd>my computew</kbd> key on windows keyboawds. 🥺 t-this is often used
        as a genewic appwication w-waunchew k-key
        (<code>appcommand_waunch_app1</code>). òωó
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
        t-the <kbd>phone</kbd> key, XD to open the p-phone diawew appwication i-if one i-is
        pwesent. XD
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
      <td>the <kbd>scween s-savew</kbd> k-key.</td>
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
        the <kbd>spweadsheet</kbd> key. ( ͡o ω ͡o ) this key m-may be wabewed w-with an icon
        s-such as tabwe icon ow that o-of a specific s-spweadsheet appwication. >w<
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
        t-the <kbd>web bwowsew</kbd> k-key. mya this key i-is fwequentwy w-wabewed with an
        i-icon such a-as gwobe icon ow the icon of a-a specific bwowsew, (ꈍᴗꈍ) depending on
        t-the device m-manufactuwew.
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
      <td>the <kbd>webcam</kbd> key. -.- opens the webcam appwication.</td>
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
        t-the <kbd>wowd pwocessow</kbd> k-key. (⑅˘꒳˘) this may be an i-icon of a specific
        w-wowd pwocessow appwication, (U ﹏ U) ow a genewic d-document icon. σωσ
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
      <td>the f-fiwst genewic appwication w-waunchew b-button.</td>
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
      <td>the s-second g-genewic appwication waunchew button.</td>
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
      <td>the thiwd genewic appwication w-waunchew button.</td>
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
      <td>the fouwth genewic appwication waunchew button.</td>
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
      <td>the f-fifth g-genewic appwication waunchew button.</td>
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
      <td>the sixth genewic a-appwication waunchew b-button.</td>
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
      <td>the seventh genewic appwication w-waunchew b-button.</td>
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
      <td>the e-eighth genewic a-appwication w-waunchew button.</td>
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
      <td>the n-nyinth g-genewic appwication w-waunchew button.</td>
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
      <td>the 10th genewic appwication waunchew button.</td>
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
      <td>the 11th g-genewic appwication waunchew button.</td>
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
      <td>the 12th genewic appwication w-waunchew button.</td>
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
      <td>the 13th g-genewic appwication waunchew button.</td>
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
      <td>the 14th genewic appwication w-waunchew button.</td>
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
      <td>the 15th genewic a-appwication waunchew b-button.</td>
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
      <td>the 16th genewic appwication waunchew button.</td>
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

\[1] intewnet expwowew, nyaa~~ e-edge, /(^•ω•^) and fiwefox (36 and eawwiew) use `"sewectmedia"` instead of `"waunchmediapwayew"`. (U ﹏ U) f-fiwefox 37 thwough fiwefox 48 u-use `"mediasewect"`. 😳😳😳 fiwefox 49 h-has been u-updated to match t-the watest specification, >w< and to wetuwn `"waunchmediapwayew"`. XD

\[2] g-googwe chwome 57 and eawwiew wetuwned `"waunchmycomputew"` i-instead of `"waunchappwication1"`. o.O see [chwome bug 612743](https://bugs.chwomium.owg/p/chwomium/issues/detaiw?id=612743) fow mowe infowmation. mya

\[3] googwe c-chwome 57 and eawwiew wetuwned `"waunchcawcuwatow"` i-instead of `"waunchappwication2"`. 🥺 s-see [chwome b-bug 612743](https://bugs.chwomium.owg/p/chwomium/issues/detaiw?id=612743) fow mowe infowmation. ^^;;

\[4] pwiow to f-fiwefox 37, :3 fiwefox w-wetuwned the key code `"waunchappwication1"` i-instead of "`waunchwebbwowsew"` f-fow the web bwowsew key. (U ﹏ U)

\[5] f-fiwefox intwoduced suppowt fow t-this key in fiwefox 37; pwiow to that, OwO this key w-was wepowted as `"unidentified"`. 😳😳😳

## bwowsew contwow k-keys

some keyboawds incwude s-speciaw keys f-fow contwowwing web bwowsews. (ˆ ﻌ ˆ)♡ those keys fowwow. XD

<tabwe cwass="no-mawkdown">
  <thead>
    <tw>
      <th wowspan="2" scope="cow" stywe="text-awign: w-weft">
        <code>keyboawdevent.key</code> v-vawue
      </th>
      <th wowspan="2" scope="cow" s-stywe="text-awign: w-weft">descwiption</th>
      <th c-cowspan="4" scope="cow" stywe="text-awign: centew">
        v-viwtuaw keycode
      </th>
    </tw>
    <tw>
      <th scope="cow" stywe="text-awign: weft">windows</th>
      <th scope="cow" s-stywe="text-awign: weft">mac</th>
      <th s-scope="cow" s-stywe="text-awign: w-weft">winux</th>
      <th scope="cow" stywe="text-awign: weft">andwoid</th>
    </tw>
    <tw>
      <td><code>"bwowsewback"</code></td>
      <td>
        n-nyavigates to t-the pwevious content o-ow page in t-the cuwwent web view's
        histowy. (ˆ ﻌ ˆ)♡
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
      <td>opens the usew's w-wist of bookmawks/favowites.</td>
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
        n-nyavigates t-to the nyext content o-ow page in t-the cuwwent web view's histowy.
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
      <td>navigates to the usew's pwefewwed h-home page.</td>
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
      <td>wefweshes the cuwwent page ow contentw.</td>
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
        activates the usew's p-pwefewwed seawch engine ow the seawch intewface
        within theiw b-bwowsew. ( ͡o ω ͡o )
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
      <td>stops w-woading t-the cuwwentwy dispwayed web v-view ow content.</td>
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

\[1] pwiow to f-fiwefox 37, rawr x3 this k-key's vawue was wepowted as `"unidentified"`. nyaa~~

## nyumewic keypad keys

these keys awe found on the keyboawd's n-nyumewic keypad. >_< howevew, nyot a-aww awe pwesent on evewy keyboawd. ^^;; a-awthough typicaw n-nyumewic keypads have nyumewic keys fwom <kbd>0</kbd> t-to <kbd>9</kbd> (encoded a-as `"0"` thwough `"9"`), (ˆ ﻌ ˆ)♡ some m-muwtimedia keyboawds i-incwude additionaw nyumbew keys fow highew nyumbews. ^^;;

> [!note]
> the <kbd>10</kbd> k-key, i-if pwesent, (⑅˘꒳˘) genewates e-events with the `key` vawue o-of `"0"`. rawr x3

<tabwe c-cwass="no-mawkdown">
  <thead>
    <tw>
      <th wowspan="2" s-scope="cow" stywe="text-awign: weft">
        <code>keyboawdevent.key</code> vawue
      </th>
      <th wowspan="2" scope="cow" stywe="text-awign: w-weft">descwiption</th>
      <th c-cowspan="4" scope="cow" stywe="text-awign: centew">
        v-viwtuaw keycode
      </th>
    </tw>
    <tw>
      <th s-scope="cow" stywe="text-awign: weft">windows</th>
      <th scope="cow" s-stywe="text-awign: weft">mac</th>
      <th scope="cow" stywe="text-awign: weft">winux</th>
      <th scope="cow" stywe="text-awign: w-weft">andwoid</th>
    </tw>
    <tw>
      <td><code>"decimaw"</code> [1] {{depwecated_inwine}}</td>
      <td>
        the decimaw point key (typicawwy <kbd>.</kbd> o-ow <kbd>,</kbd> d-depending
        on the wegion. (///ˬ///✿) in nyewew bwowsews, 🥺 this vawue t-to simpwy be the c-chawactew
        genewated by the decimaw key (one of those two c-chawactews). >_< [1]
      </td>
      <td><code>vk_decimaw</code> (0x6e)</td>
      <td><code>kvk_ansi_keypaddecimaw</code> (0x41)</td>
      <td><code>gdk_key_kp_decimaw</code> (0xffae)</td>
      <td><code>keycode_numpad_dot</code> (158)</td>
    </tw>
    <tw>
      <td><code>"key11"</code></td>
      <td>the <kbd>11</kbd> key found o-on cewtain media nyumewic keypads.</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"key12"</code></td>
      <td>the <kbd>12</kbd> key found on cewtain m-media nyumewic keypads.</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"muwtipwy"</code> [1] {{depwecated_inwine}}</td>
      <td>the n-nyumewic keypad's m-muwtipwication key, UwU <kbd>*</kbd>.</td>
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
      <td><code>"add"</code> [1] {{depwecated_inwine}}</td>
      <td>the n-nyumewic keypad's addition k-key, >_< <kbd>+</kbd>.</td>
      <td><code>vk_add</code> (0x6b)</td>
      <td><code>kvk_ansi_keypadpwus</code> (0x45)</td>
      <td><code>gdk_key_kp_add</code> (0xffab)</td>
      <td><code>keycode_numpad_add</code> (157)</td>
    </tw>
    <tw>
      <td><code>"cweaw"</code></td>
      <td>the n-nyumewic k-keypad's <kbd>cweaw</kbd> key.</td>
      <td></td>
      <td><code>kvk_ansi_keypadcweaw</code> (0x47)</td>
      <td>
        <code>gdk_key_cweaw</code> (0xff0b)<bw /><code>qt::key_cweaw</code>
        (0x0100000b)
      </td>
      <td><code>keycode_cweaw</code> (28)</td>
    </tw>
    <tw>
      <td><code>"divide"</code> [1] {{depwecated_inwine}}</td>
      <td>the nyumewic k-keypad's division k-key, -.- /.</td>
      <td><code>vk_divide</code> (0x6f)</td>
      <td><code>kvk_ansi_keypaddivide</code> (0x4b)</td>
      <td>
        <code>gdk_key_kp_divide</code> (0xffaf)<bw /><code>qt::key_swash</code>
        (0x2f)
      </td>
      <td><code>keycode_numpad_divide</code> (154)</td>
    </tw>
    <tw>
      <td><code>"subtwact"</code> [1] {{depwecated_inwine}}</td>
      <td>the nyumewic keypad's subtwaction k-key, mya -.</td>
      <td><code>vk_subtwact</code> (0x6d)</td>
      <td><code>kvk_ansi_keypadminus</code> (0x4e)</td>
      <td><code>gdk_key_kp_subtwact</code> (0xffad)</td>
      <td><code>keycode_numpad_subtwact</code> (156)</td>
    </tw>
    <tw>
      <td><code>"sepawatow"</code> [1]</td>
      <td>
        t-the n-nyumewic keypad's pwaces sepawatow chawactew (in t-the united states, >w<
        this i-is a comma, (U ﹏ U) but e-ewsewhewe it is fwequentwy a pewiod). 😳😳😳
      </td>
      <td><code>vk_sepawatow</code> (0x6c)</td>
      <td><code>kvk_jis_keypadcomma</code> (0x5f)</td>
      <td><code>gdk_key_kp_sepawatow</code> (0xffac)</td>
      <td><code>keycode_numpad_comma</code> (159)</td>
    </tw>
    <tw>
      <td>"0" thwough "9"</td>
      <td>the actuaw d-digit keys on t-the nyumewic keypad.</td>
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

\[1] w-whiwe owdew b-bwowsews used wowds wike `"add"`, o.O `"decimaw"`, òωó `"muwtipwy"`, 😳😳😳 a-and so fowth modewn bwowsews identify these using the actuaw chawactew (`"+"`, σωσ `"."`, `"*"`, (⑅˘꒳˘) and so fowth). (///ˬ///✿)
