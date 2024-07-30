---
title: キーボードイベントの key の値
slug: Web/API/UI_Events/Keyboard_event_key_values
l10n:
  sourceCommit: c6dbc4ff96451887b908b46c8e70bcfec1c2c48c
---

{{DefaultAPISidebar("UI Events")}}

以下の一覧表は、 [`KeyboardEvent.key`](/ja/docs/Web/API/KeyboardEvent/key) プロパティの標準値と、そのキーが通常どのような目的で使用されるかの説明です。利用できる場合には、一般的なプラットフォームの仮想キーコードも記載しています。

## 特殊な値

特定のキーや文字を識別する以外に特別な意味を持つ `key` の値です。

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> 値</th>
      <th rowspan="2" scope="col">説明</th>
      <th colspan="4" scope="col">仮想キーコード</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Mac</th>
      <th scope="col">Linux</th>
      <th scope="col">Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"Unidentified"</code></td>
      <td>
        <p>
          ユーザーエージェントは、イベントの仮想キーコードを特定のキー値に割り当てることができませんでした。
        </p>
        <p>
          これは、ハードウェアやソフトウェアの制約、あるいはユーザーエージェントが動作しているプラットフォームの制約によって起こる可能性があります。
        </p>
      </td>
      <td><em>様々</em></td>
      <td><em>様々</em></td>
      <td><em>様々</em></td>
      <td><em>様々</em></td>
    </tr>
  </tbody>
</table>

## 修飾キー

修飾キーとは、特別な文字を生成したり、他のキーと組み合わせて使用したときに特別な動作を発生させるための特別なキーのことです。例えば、 <kbd>Shift</kbd> や <kbd>Control</kbd> キー、<kbd>Caps Lock</kbd> や <kbd>NumLock</kbd> のようなロックキーが挙げられます。

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> 値</th>
      <th rowspan="2" scope="col">解説</th>
      <th colspan="4" scope="col">仮想キーコード</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Mac</th>
      <th scope="col">Linux</th>
      <th scope="col">Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"Alt"</code> [4]</td>
      <td><kbd>Alt</kbd> (Alternative) キー。</td>
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
      <td><code>"AltGraph"</code> [4]</td>
      <td>
        <kbd>AltGr</kbd> または <kbd>AltGraph</kbd> (Alternate Graphics) キー。
        ISO レベル 3 のシフト修飾（<kbd>Shift</kbd> はレベル 2 修飾）ができるようにします。
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
        <kbd>Caps Lock</kbd> キー。移行の入力における大文字ロックのオンとオフを切り替えます。
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
        <kbd>Control</kbd> キー、<kbd>Ctrl</kbd> キー、<kbd>Ctl</kbd> キーのいずれか。制御文字を入力します。
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
        <kbd>Fn</kbd>（機能修飾）キー。専用のファンクションキー領域のないキーボードでファンクションキー（<kbd>F1</kbd>-<kbd>F15</kbd> など）文字を生成できるように使用します。ハードウェアで処理されることが多く、その場合はこのキーのイベントが生成されません。
      </td>
      <td></td>
      <td><code>kVK_Function</code> (0x3F)</td>
      <td></td>
      <td><code>KEYCODE_FUNCTION</code> (119)</td>
    </tr>
    <tr>
      <td><code>"FnLock"</code></td>
      <td>
        <kbd>FnLock</kbd> または <kbd>F-Lock</kbd> （機能ロック）キー。 <code>"Fn"</code> で記述されている機能キーモードの単発のオンとオフを切り替えます。ハードウェアで処理されることが多く、その場合はこのキーのイベントが生成されません。
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Hyper"</code> [3]</td>
      <td><kbd>Hyper</kbd> キーです。</td>
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
        <kbd>Meta</kbd> キー。特別なコマンド入力を発行できます。これは <kbd>Windows</kbd> ロゴキー、または Mac キーボードの <kbd>Command</kbd> または <kbd>⌘</kbd> キーです。
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
        <kbd>NumLock</kbd>（数字ロック）キー。テンキーパッドで数字を入力するモードと、他にもあるモード（多くは方向の矢印）を切り替えます。
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
        <kbd>Scroll Lock</kbd> キー。スクロールモードとカーソル移動モードを切り替えます。
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
        <kbd>Shift</kbd> キー。大文字（など）を入力したり、句読点やその他の特殊文字の入力に対応するようにキーストロークを変更します。
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
      <td><code>"Super"</code> [3]</td>
      <td><kbd>Super</kbd> キーです。</td>
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
        <kbd>Symbol</kbd> 修飾キー（一部の仮想キーボードにあります）。
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_SYM</code> (63) [2]</td>
    </tr>
    <tr>
      <td><code>"SymbolLock"</code></td>
      <td><kbd>Symbol Lock</kbd> キーです。</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

\[1] Firefox では <kbd>Windows</kbd> キーが `"Meta"` ではなく `"OS"` として報告されます。これは [Firefox バグ 1232918](https://bugzil.la/1232918) により Firefox で変更される予定です。修正されるまでは、これらのキーは `"OS"` として返されます。 Windows では `VK_LWIN` (0x5B) と `VK_RWIN` (0x5C)、Linux では `GDK_KEY_Super_L` (0xFFEB)、`GDK_KEY_Super_R` (0xFFEC)、`GDK_KEY_Hyper_L` (0xFFED)、`GDK_KEY_Hyper_R` (0xFFEE) です。

\[2] Firefox は Firefox 37 まで <kbd>Symbol</kbd> キーに対応していませんでした。

\[3] Firefox は <kbd>Super</kbd> と <kbd>Hyper</kbd> キーに対して、`"Super"` と `"Hyper"` の代わりに `"OS`" というキー値を生成します。

\[4] Chrome 67 と Firefox 63 では、<kbd>Alt</kbd> キーが <kbd>AltGr</kbd> に割り当てられたキーボード レイアウトの場合、正しい <kbd>Alt</kbd> キーが正しく解釈されるようになりました。詳細は Firefox のバグ [Firefox バグ 900750](https://bugzil.la/900750) と [Chrome バグ 25503](https://crbug.com/25503) を参照してください。

## ホワイトスペースキー

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> 値</th>
      <th rowspan="2" scope="col">解説</th>
      <th colspan="4" scope="col">仮想キーコード</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Mac</th>
      <th scope="col">Linux</th>
      <th scope="col">Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"Enter"</code></td>
      <td>
        <kbd>Enter</kbd> または <kbd>↵</kbd> キー（<kbd>Return</kbd> と書かれていることもあります）。
      </td>
      <td><code>VK_RETURN</code> (0x0D)</td>
      <td>
        <code>kVK_Return</code> (0x24)<br /><code>kVK_ANSI_KeypadEnter</code>
        (0x4C)<br /><code>kVK_Powerbook_KeypadEnter</code> (0x34)
      </td>
      <td>
        <code>GDK_KEY_Return</code> (0xFF0D)<br /><code>GDK_KEY_KP_Enter</code>
        (0xFF8D)<br /><code>GDK_KEY_ISO_Enter</code> (0xFE34)<br /><code
          >GDK_KEY_3270_Enter</code
        >
        (0xFD1E)<br /><code>Qt::Key_Return</code> (0x01000004)<br /><code
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
      <td>水平タブキー、 <kbd>Tab</kbd> です。</td>
      <td><code>VK_TAB</code> (0x09)</td>
      <td><code>kVK_Tab</code> (0x30)</td>
      <td>
        <code>GDK_KEY_Tab</code> (0xFF09)<br /><code>GDK_KEY_KP_Tab</code>
        (0xFF89)<br /><code>GDK_KEY_ISO_Left_Tab</code> (0xFE20)<br /><code
          >Qt::Key_Tab</code
        >
        (0x01000001)
      </td>
      <td><code>KEYCODE_TAB</code> (61)</td>
    </tr>
    <tr>
      <td><code>" "</code> [1]</td>
      <td>スペースキー、<kbd>スペースバー</kbd>です。</td>
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

\[1] 古いブラウザーは<kbd>スペースバー</kbd>に対して `" "` の代わりに `"Spacebar"` を返すことがあります。Firefox はバージョン 37 までそうでした。

## ナビゲーションキー

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> 値</th>
      <th rowspan="2" scope="col">解説</th>
      <th colspan="4" scope="col">仮想キーコード</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Mac</th>
      <th scope="col">Linux</th>
      <th scope="col">Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"ArrowDown"</code> [1]</td>
      <td>下矢印キーです。</td>
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
      <td>左矢印キーです。</td>
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
      <td>右矢印キーです。</td>
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
      <td>右矢印キーです。</td>
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
      <td><kbd>End</kbd> キーです。コンテンツの末尾まで移動します。</td>
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
      <td><kbd>Home</kbd> キーです。コンテンツの先頭まで移動します。</td>
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
        <kbd>Page Down</kbd>（または <kbd>PgDn</kbd>）キーです。下が見えるようにスクロールするか、コンテンツの次のページを表示します。
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
        <kbd>Page Up</kbd>（または <kbd>PgUp</kbd>）キーです。上が見えるようにスクロールするか、コンテンツの前のページを表示します。
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

\[1] Edge （16 およびそれ以前）と Firefox （36 およびそれ以前）では、`"ArrowLeft"`、`"ArrowRight"`、`"ArrowUp"`、`"ArrowDown"` の代わりに `"Left"`、`"Right"`、`"Up"`、`"Down"` を使用しています。

## 編集キー

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> 値</th>
      <th rowspan="2" scope="col">解説</th>
      <th colspan="4" scope="col">仮想キーコード</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Mac</th>
      <th scope="col">Linux</th>
      <th scope="col">Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"Backspace"</code></td>
      <td>
        <kbd>Backspace</kbd> キーです。このキーは Mac キーボードでは <kbd>Delete</kbd> と書かれています。
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
      <td><kbd>Clear</kbd> キーです。現在選択されている入力を削除します。</td>
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
      <td><kbd>Copy</kbd> キーです（一部の拡張キーボードにおいて）。</td>
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
      <td>カーソル選択キー、 <kbd>CrSel</kbd> です。</td>
      <td><code>VK_CRSEL</code> (0xF7)</td>
      <td></td>
      <td><code>GDK_KEY_3270_CursorSelect</code> (0xFD1C)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Cut"</code></td>
      <td><kbd>Cut</kbd> キーです（一部の拡張キーボードにおいて）。</td>
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
      <td>削除キー、 <kbd>Del</kbd> です。</td>
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
        フィールドの終わりまで消去。現在のカーソル位置から現在のフィールドの終わりまでのすべての文字を削除します。
      </td>
      <td><code>VK_EREOF</code> (0xF9)</td>
      <td></td>
      <td><code>GDK_KEY_3270_ExSelect</code> (0xFD1B)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"ExSel"</code> [4]</td>
      <td><kbd>ExSel</kbd> (Extend Selection) キーです。</td>
      <td><code>VK_EXSEL</code> (0xF8)</td>
      <td></td>
      <td><code>GDK_KEY_3270_ExSelect</code> (0xFD1B)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Insert"</code></td>
      <td>
        挿入キー <kbd>Ins</kbd> です。テキストの挿入と上書きを切り替えます。
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
      <td>クリップボードから貼り付けます。</td>
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
      <td>最後の操作をやり直します。</td>
      <td><code>APPCOMMAND_REDO</code></td>
      <td></td>
      <td><code>GDK_KEY_Redo</code> (0xFF66)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Undo"</code></td>
      <td>最後の操作を取り消します。</td>
      <td><code>APPCOMMAND_UNDO</code></td>
      <td></td>
      <td><code>GDK_KEY_Undo</code> (0xFF65)</td>
      <td></td>
    </tr>
  </tbody>
</table>

\[1] 専用の <kbd>Del</kbd> キーがないキーボードでは、Mac は <kbd>Fn</kbd> と <kbd>Delete</kbd> (他にも <kbd>Backspace</kbd>) が同時に押されたときに `"Delete"` 値を生成します。

\[2] Firefox 36 以前では、<kbd>Del</kbd> キーに `"Delete"` の代わりに `"Del"` を使用しています。

\[3] Firefox 36 以前では、<kbd>CrSel</kbd> キーが押されると、`"CrSel"` の代わりに `"Crsel"` という値が生成されます。

\[4] Firefox 36 以前では、<kbd>ExSel</kbd> キーが押されると、`"ExSel"` の代わりに `"Exsel"` という値が生成されます。

## UI キー

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> 値</th>
      <th rowspan="2" scope="col">解説</th>
      <th colspan="4" scope="col">仮想キーコード</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Mac</th>
      <th scope="col">Linux</th>
      <th scope="col">Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"Accept"</code></td>
      <td>
        <kbd>Accept</kbd>, <kbd>Commit</kbd>, <kbd>OK</kbd> キーまたはボタン。現在選択されているオプションまたはインプットメソッドの一連の変換を受け入れます。
      </td>
      <td><code>VK_ACCEPT</code> (0x1E)</td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_DPAD_CENTER</code> (23)</td>
    </tr>
    <tr>
      <td><code>"Again"</code></td>
      <td><kbd>Again</kbd> キー。前回の操作をやり直す、または繰り返します。</td>
      <td></td>
      <td></td>
      <td><code>GDK_KEY_Redo</code> (0xFF66)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Attn"</code> [4]</td>
      <td><kbd>Attn</kbd> (Attention) キーです。td>
      <td><code>VK_OEM_ATTN</code> (0xF0)</td>
      <td></td>
      <td><code>GDK_KEY_3270_Attn</code> (0xFD0E)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Cancel"</code> [1]</td>
      <td><kbd>Cancel</kbd> キーです。</td>
      <td></td>
      <td></td>
      <td><code>GDK_KEY_Cancel</code> (0xFF69)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"ContextMenu"</code> [3]</td>
      <td>
        コンテキストメニューを表示させます。通常、キーボード右側の <kbd>Windows</kbd> （または <kbd>OS</kbd>） キーと <kbd>Control</kbd> キーの間にあります。
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
        <kbd>Esc</kbd> （エスケープ）キー。通常、終了、取り消される可能性、または「この処理を脱出する」ボタンとして使用します。過去には、エスケープ文字は「エスケープシーケンス」と呼ばれる特別な制御シーケンスの開始を指示するために使用されていました。
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
      <td><kbd>Execute</kbd> キーです。</td>
      <td><code>VK_EXECUTE</code> (0x2B)</td>
      <td></td>
      <td><code>Qt::Key_Execute</code> (0x01020003)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Find"</code></td>
      <td>
        <kbd>Find</kbd> キー。検索/サーチ処理を行うためのインターフェイス（通常はダイアログボックス）を開きます。
      </td>
      <td><code>APPCOMMAND_FIND</code></td>
      <td></td>
      <td><code>GDK_KEY_Find</code> (0xFF68)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Finish"</code> [5]</td>
      <td><kbd>Finish</kbd> キーです。</td>
      <td><code>VK_OEM_FINISH</code> (0xF1)</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Help"</code></td>
      <td>
        <kbd>Help</kbd>キー。ヘルプ情報を開いたり、表示を切り替えたりします。
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
        <kbd>Pause</kbd> キー。現在のアプリケーションまたは状態を一時停止します。
        <div class="note">
          <p>
            <strong>メモ:</strong> これを <code>"MediaPause"</code> キー値と混同しないでください。そちらは、アプリケーションやプロセスを制御するためではなく、メディア制御に使用します。
          </p>
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
        <kbd>Play</kbd> キー。前回一時停止したアプリケーションを再開します。
        <div class="note">
          <p>
            <strong>メモ:</strong> これを <code>"MediaPlay"</code> キー値と混同しないでください。そちらは、アプリケーションやプロセスを制御するためではなく、メディア制御に使用します。
          </p>
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
      <td><kbd>Props</kbd> （プロパティ）キーです。</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Select"</code></td>
      <td><kbd>Select</kbd> キーです。</td>
      <td><code>VK_SELECT</code> (0x29)</td>
      <td></td>
      <td><code>GDK_KEY_Select</code> (0xFF60)</td>
      <td><code>KEYCODE_BUTTON_SELECT</code> (109)</td>
    </tr>
    <tr>
      <td><code>"ZoomIn"</code> [6]</td>
      <td><kbd>ZoomIn</kbd> キーです。</td>
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
      <td><kbd>ZoomOut</kbd> キーです。</td>
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

\[1] Google Chrome 52 では、<kbd>Cancel</kbd> キーが誤って `"Pause"` というキーコードを返していました。これは Chrome 53 で修正されました（詳細は [Chrome バグ 612749](https://crbug.com/612749) を参照してください）。

\[2] Firefox 36 以前では、<kbd>Esc</kbd> キーは `"Escape"` の代わりに `"Esc"` を返します。

\[3] Firefox 36 以前では、コンテキストメニューキーは`"ContextMenu"`ではなく `"Apps"` と表示されます。

\[4] Firefox と Google Chrome では、<kbd>Attn</kbd> キーはキーコード `"Unidentified"` を生成しますが、日本語キーボードレイアウトが有効な場合は、代わりに `"KanaMode"` を生成します。

\[5] Firefox では <kbd>Finish</kbd> キーはキーコード `"Unidentified"` を生成しますが、日本語キーボードレイアウトが有効な場合は、代わりに `"Katakana"` を生成します。

\[6] Firefox は Firefox 37 まで `"ZoomIn"` キーと `"ZoomOut"` キーに対応していませんでした。

## 端末キー

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> 値</th>
      <th rowspan="2" scope="col">解説</th>
      <th colspan="4" scope="col">仮想キーコード</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Mac</th>
      <th scope="col">Linux</th>
      <th scope="col">Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"BrightnessDown"</code></td>
      <td>
        輝度ダウンキー。通常、ディスプレイの輝度を下げるために使用します。
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
      <td>
        輝度アップキー。通常、ディスプレイの輝度を上げます。
      </td>
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
        <kbd>イジェクト</kbd>キー。リムーバブルメディアを排出します （または、光学記憶装置のトレイの開閉を切り替えます）。
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
      <td><kbd>LogOff</kbd> キーです。</td>
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
        <kbd>電源</kbd>ボタンまたはキーで、電源のオン/オフを切り替えます。
        <div class="note">
          <p>
            <strong>メモ:</strong> すべてのシステムがこのキーをユーザーエージェントに渡すとは限りません。
          </p>
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
        <kbd>PowerOff</kbd> または <kbd>PowerDown</kbd> キー。システムをシャットダウンします。
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
        <kbd>PrintScreen</kbd> または <kbd>PrtScr</kbd> キー。 <kbd>SnapShot</kbd> となっていることもあります。画面をキャプチャして出力したり、ディスクに保存したりします。
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
        <kbd>Hibernate</kbd> キー。コンピューターの状態をディスクに保存してシャットダウンします。コンピューターは、保存された状態情報を復元することで前回状態に戻すことができます。
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
        スタンバイ</kbd>キー（<kbd>サスペンド</kbd> または <kbd>スリープ</kbd> とも呼ばれます）。これにより、ディスプレイの電源がオフになり、コンピューターの電源が完全にオフになることなく、低消費電力モードになります。
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
        <kbd>WakeUp</kbd>キー。ハイバネーションモードまたはスタンバイモードからコンピューターを起動するために使用します。
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

\[1] <kbd>Standby</kbd> キーは Firefox 36 以前では対応していないため、`"Unidentified"` として報告されます。

\[2] Firefox 37 より前のバージョンでは、このキーは値 `"Unidentified"` を生成していました。

## IME および変換キー

入力メソッドエディター (IME) で使用するキーです。単純なキー入力では入力しにくいテキストを入力するときに用い、キーボードの文字入力キーの数よりも多くの字句がある言語などのテキストを入力します。例えば、中国語、日本語、韓国語、ヒンディー語などが挙げられます。

複数の言語に共通するキーもあれば、固有の言語を対象とするキーボードにのみ存在するキーもあります。また、すべてのキーボードにこれらのキーがあるとは限りません。

### 共通の IME キー

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> 値</th>
      <th rowspan="2" scope="col">解説</th>
      <th colspan="4" scope="col">仮想キーコード</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Mac</th>
      <th scope="col">Linux</th>
      <th scope="col">Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"AllCandidates"</code></td>
      <td>
        <kbd>全候補</kbd>キーは、入力中の候補が複数表示される複数候補モードを始めるために使います。
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
      <td><kbd>英数</kbd>キーです。</td>
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
        <kbd>コード入力</kbd>キーは、コード入力モードを有効にします。コード入力モードでは、ユーザーはコードポイント（通常は Unicode 文字番号）を入力して文字を入力します。
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
      <td><kbd>Compose</kbd> キーです。</td>
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
        <kbd>変換</kbd>キーは、現在の入力メソッドシーケンスを結果の文字に変換するよう IME に指示します。
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
          デッド「合体」キー。つまり、アクセント記号付きの文字や他の修飾文字を生成するために、他のキーと組み合わせて使用するキー。単独で押しても文字は生成されません。
        </p>
        <p>
          どのデットキーが押されたかを（複数のデットキーが存在する場合に）特定したい場合は、 {{domxref("KeyboardEvent")}} の関連する {{domxref("Element/compositionupdate_event", "compositionupdate")}} イベントの {{domxref("CompositionEvent.data", "data")}} プロパティを調べることで可能です。
        </p>
      </td>
      <td></td>
      <td></td>
      <td>下記の <a href="#dead_keycodes_for_linux">Linux のデッドキーコード</a>をご覧ください。</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FinalMode"</code></td>
      <td>
        <kbd>Final</kbd> （ファイナルモード）キーは、IME を使用するときにファイナルモードに入るために、アジアの一部のキーボードで使用されます。
      </td>
      <td><code>VK_FINAL</code> (0x18)</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"GroupFirst"</code></td>
      <td>
        <a href="https://en.wikipedia.org/wiki/ISO/IEC_9995">ISO/IEC 9995 キーボード</a>の最初の文字グループに切り替えます。各キーは、自分自身で列を組み、複数の文字グループを持つことができます。このキーを押すと、以降のキー入力で、最初の列からのキー入力であると機器が解釈するようになります。
      </td>
      <td></td>
      <td></td>
      <td><code>GDK_KEY_ISO_First_Group</code> (0xFE0C)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"GroupLast"</code></td>
      <td>
        <a href="https://en.wikipedia.org/wiki/ISO/IEC_9995">ISO/IEC 9995 キーボード</a>の最後の文字グループに切り替えます。
      </td>
      <td></td>
      <td></td>
      <td><code>GDK_KEY_ISO_Last_Group</code> (0xFE0E)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"GroupNext"</code> [4]</td>
      <td>
        <a href="https://en.wikipedia.org/wiki/ISO/IEC_9995">ISO/IEC 9995 キーボード</a>の次の文字グループに切り替えます。
      </td>
      <td></td>
      <td></td>
      <td><code>GDK_KEY_ISO_Next_Group</code> (0xFE08)</td>
      <td><code>KEYCODE_LANGUAGE_SWITCH</code> (204)</td>
    </tr>
    <tr>
      <td><code>"GroupPrevious"</code></td>
      <td>
        <a href="https://en.wikipedia.org/wiki/ISO/IEC_9995">ISO/IEC 9995キーボード</a>の前の文字グループに切り替えます。
      </td>
      <td></td>
      <td></td>
      <td><code>GDK_KEY_ISO_Prev_Group</code> (0xFE0A)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"ModeChange"</code> [5]</td>
      <td>モード変更キー。 IME の入力モードを切り替えたり、循環させたりします。</td>
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
        次候補機能キー。進行中の入力に対して次に一致する可能性のあるものを選択します。
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"NonConvert"</code> [2]</td>
      <td>
        <kbd>無変換</kbd>（「変換しない」）キー。これは IME を使用しているときに変換を実行せずに現在の入力メソッドシーケンスを受け入れます。
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
        前候補キー。進行中の入力に対して一致する可能性のある前の候補を選択します。
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
        The <kbd>Process</kbd> キー。 IME に変換を処理するよう指示します。
      </td>
      <td><code>VK_PROCESSKEY</code> (0xE5)</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"SingleCandidate"</code> [4]</td>
      <td>
        単一の候補」キー。（複数候補モードに対して）単一候補モードにします。このモードでは、一度に表示される候補は 1 つだけです。
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

\[1] _X Window System_ では、 <kbd>Compose</kbd> キーは <kbd>Multi</kbd> キーと呼ばれます。

\[2] Firefox バージョン 36 以前では、<kbd>NonConvert</kbd> キーが正しい `"NonConvert"` ではなく `"Nonconvert"` として報告されます。

\[3] <kbd>Process</kbd> キーは現在 Firefox では `"Unidentified"` を返します。 Google Chrome は IME が使用されていないかのようにキーの値を返します。

\[4] Firefox 37 以前では、これらのキーは `"Unidentified"` でした。

\[5] Firefox は `"ModeChange"` の代わりに `"AltGraph"` というキー値を生成します。

### 韓国語キーボードのみ

これらのキーは韓国語キーボードでのみ利用できます。他にも韓国語キーボード用に様々なプラットフォームで定義されているキーがありますが、これらは最も一般的で、 UI イベント仕様で定義されているものです。

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> 値</th>
      <th rowspan="2" scope="col">解説</th>
      <th colspan="4" scope="col">仮想キーコード</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Mac</th>
      <th scope="col">Linux</th>
      <th scope="col">Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"HangulMode"</code></td>
      <td>
        <kbd>Hangul</kbd> （韓国語文字集合）モードキーで、ハングルと英語の入力項目を切り替えます。
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
        ハングル文字をより固有の漢字に変換するための、漢字モードを選択します。
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
        韓国語を半角ラテン文字で表す「ジュンジャ」モードを選択します。
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
  </tbody>
</table>

\[1] Windows では `VK_HANGUL` と `VK_KANA` は `VK_HANJA` と `VK_KANJI` と同様に同じ数値のキーを持ちます。

### 日本語キーボードのみ

これらのキーは日本語キーボードでのみ利用できます。

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> 値</th>
      <th rowspan="2" scope="col">解説</th>
      <th colspan="4" scope="col">仮想キーコード</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Mac</th>
      <th scope="col">Linux</th>
      <th scope="col">Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"Eisu"</code> [1]</td>
      <td>
        <kbd>英数</kbd>キー。このキーの目的は IME によって定義されますが、IMEを閉じるために使用することもあります。
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
      <td><kbd>半角</kbd>（半角文字）キーです。</td>
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
      <td><kbd>ひらがな</kbd>キーです。かな文字モードを選択します。</td>
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
      <td>ひらがなとカタカナを切り替えます。</td>
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
      <td><kbd>カナモード</kbd>（カナロック）キーです。</td>
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
        <kbd>漢字モード</kbd>キー。中国由来の表意文字を使用して日本語を入力します。
      </td>
      <td><code>VK_KANJI</code> [2]</td>
      <td><code>kVK_JIS_Kana</code> (0x68)</td>
      <td>
        <code>GDK_KEY_Kanji</code> (0xFF21)<br /><code>Qt::Key_Kanji</code>
        (0x01001121)
      </td>
      <td><code>KEYCODE_KANA</code> (218)</td>
    </tr>
    <tr>
      <td><code>"Katakana"</code></td>
      <td><kbd>カタカナ</kbd>キーです。</td>
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
      <td><kbd>ローマ字</kbd>キーです。ローマ字モードを選択します。</td>
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
      <td><kbd>全角</kbd>文字キーです。</td>
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
        <kbd>全角/半角</kbd>トグルキーです。
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
  </tbody>
</table>

\[1] Firefox 37 より前のバージョンでは、<kbd>Eisu</kbd> キーが誤って `"RomanCharacters"` に割り当てられていました。

\[2] `VK_HANGUL` と `VK_KANA` は Windows 上では `VK_HANJA` と `VK_KANJI` と同様に同じ数値のキーです。

\[3] Firefox 37 より前のバージョンでは、<kbd>半角</kbd>キーは Firefox 上でキー値 `"HalfWidth"` を生成していました。

\[4] Firefox 36 以前のバージョンでは、このキーは日本語キーボードレイアウトでは `"FullWidth"`、その他すべてのキーボードレイアウトでは `"Unidentified"` と識別されます。Firefox 37 以降と Google Chrome のすべてのバージョンでは、`"Zenkaku"` を正しく返します。

\[5] Firefox 36 およびそれ以前のバージョンでは、<kbd>ローマ字</kbd>キーが日本語キーボードでは `"RomanCharacters"` と認識され、他にもキーボードでは `"Unidentified"` と認識されます。

\[6] このキーは Firefox 37 以前では `"Unidentified"` として報告されていました。

### Linux のデッドキーコード

Linux は特別な**デッドキー**を使用してアクセント記号付きの文字を生成します。デッドキーとは、文字キーと結合子で押されることで、アクセント記号付きの形を形成するキーのことです。 {{domxref("KeyboardEvent")}} の関連する {{domxref("Element/compositionupdate_event", "compositionupdate")}} イベントの {{domxref("CompositionEvent.data", "data")}} プロパティを調べることで、どの固有のデッドキーが使用されたかを特定できます（複数のデッドキーが存在する場合）。

Linux で GTK を使ってアクセント記号やその他の特殊文字を生成するために使用できるデッドキーとその文字の表を探してください。

{{domxref("CompositionEvent.data", "data")}} の値は以下のいずれかになります。

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">
        <strong><code>CompositionEvent.data</code></strong> 値
      </th>
      <th scope="col">表記</th>
      <th scope="col">コメント</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>GDK_KEY_dead_grave</code> (0xFE50)<br /><code
          >Qt::Key_Dead_Grave</code
        >
        (0x01001250)
      </td>
      <td>`</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code>GDK_KEY_dead_acute</code> (0xFE51)<br /><code
          >Qt::Key_Dead_Acute</code
        >
        (0x01001251)
      </td>
      <td>´</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code>GDK_KEY_dead_circumflex</code> (0xFE52)<br /><code
          >Qt::Key_Dead_Circumflex</code
        >
        (0x01001252)
      </td>
      <td>ˆ</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code>GDK_KEY_dead_tilde</code> (0xFE53)<br /><code
          >Qt::Key_Dead_Tilde</code
        >
        (0x01001253)
      </td>
      <td>˜</td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_perispomeni</code> (0xFE53)</td>
      <td> ͂</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code>GDK_KEY_dead_macron</code> (0xFE54)<br /><code
          >Qt::Key_Dead_Macron</code
        >
        (0x01001254)
      </td>
      <td>¯</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code>GDK_KEY_dead_breve</code> (0xFE55)<br /><code
          >Qt::Key_Dead_Breve</code
        >
        (0x01001255)
      </td>
      <td>˘</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code>GDK_KEY_dead_abovedot</code> (0xFE56)<br /><code
          >Qt::Key_Dead_Abovedot</code
        >
        (0x01001256)
      </td>
      <td>˙</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code>GDK_KEY_dead_diaeresis</code> (0xFE57)<br /><code
          >Qt::Key_Dead_Diaeresis</code
        >
        (0x01001257)
      </td>
      <td>¨</td>
      <td>ウムラウトとも呼ばれます。</td>
    </tr>
    <tr>
      <td>
        <code>GDK_KEY_dead_abovering</code> (0xFE58)<br /><code
          >Qt::Key_Dead_Abovering</code
        >
        (0x01001258)
      </td>
      <td>˚</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code>GDK_KEY_dead_doubleacute</code> (0xFE59)<br /><code
          >Qt::Key_Dead_Doubleacute</code
        >
        (0x01001259)
      </td>
      <td>˝</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code>GDK_KEY_dead_caron</code> (0xFE5A)<br /><code
          >Qt::Key_Dead_Caron</code
        >
        (0x0100125A)
      </td>
      <td>ˇ</td>
      <td>háček とも呼ばれ、他の言語ではチェコ語で使用します。</td>
    </tr>
    <tr>
      <td>
        <code>GDK_KEY_dead_cedilla</code> (0xFE5B)<br /><code
          >Qt::Key_Dead_Cedilla</code
        >
        (0x0100125B)
      </td>
      <td>¸</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code>GDK_KEY_dead_ogonek</code> (0xFE5C)<br /><code
          >Qt::Key_Dead_Ogonek</code
        >
        (0x0100125C)
      </td>
      <td>˛</td>
      <td>nosinė とも呼ばれ、ポーランド語や古アイルランド語で使用されています。</td>
    </tr>
    <tr>
      <td>
        <code>GDK_KEY_dead_iota</code> (0xFE5D)<br /><code
          >Qt::Key_Dead_Iota</code
        >
        (0x0100125D)
      </td>
      <td> ͅ</td>
      <td>イオタの添字。</td>
    </tr>
    <tr>
      <td>
        <code>GDK_KEY_dead_voiced_sound</code> (0xFE5E)<br /><code
          >Qt::Key_Dead_Voiced_Sound</code
        >
        (0x0100125E)
      </td>
      <td>゙</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code>GDK_KEY_dead_semivoiced_sound</code> (0xFE5F)<br /><code
          >Qt::Key_Dead_Semivoiced_Sound</code
        >
        (0x0100125F)
      </td>
      <td>゚</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code>GDK_KEY_dead_belowdot</code> (0xFE60)<br /><code
          >Qt::Key_Dead_Belowdot</code
        >
        (0x01001260)
      </td>
      <td>̣̣</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code>GDK_KEY_dead_hook</code> (0xFE61)<br /><code
          >Qt::Key_Dead_Hook</code
        >
        (0x01001261)
      </td>
      <td>  ̡</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code>GDK_KEY_dead_horn</code> (0xFE62)<br /><code
          >Qt::Key_Dead_Horn</code
        >
        (0x01001262)
      </td>
      <td> ̛</td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_stroke</code> (0xFE63)</td>
      <td> ̶̶</td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_abovecomma</code> (0xFE64)</td>
      <td> ̓̓</td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_psili</code> (0xFE64)</td>
      <td> ᾿</td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_abovereversedcomma</code> (0xFE65)</td>
      <td>ʽ</td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_dasia</code> (0xFE65)</td>
      <td>῾</td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_doublegrave</code> (0xFE66)</td>
      <td> ̏</td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_belowring</code> (0xFE67)</td>
      <td>˳</td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_belowmacron</code> (0xFE68)</td>
      <td> ̱</td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_belowcircumflex</code> (0xFE69)</td>
      <td>ꞈ</td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_belowtilde</code> (0xFE6A)</td>
      <td>̰</td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_belowbreve</code> (0xFE6B)</td>
      <td>̮</td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_belowdiaeresis</code> (0xFE6C)</td>
      <td> ̤</td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_invertedbreve</code> (0xFE6D)</td>
      <td>̯</td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_belowcomma</code> (0xFE6E)</td>
      <td>̦</td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_currency</code> (0xFE6F)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_a</code> (0xFE80)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_A</code> (0xFE81)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_e</code> (0xFE82)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_E</code> (0xFE83)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_i</code> (0xFE84)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_I</code> (0xFE85)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_o</code> (0xFE86)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_O</code> (0xFE87)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_u</code> (0xFE88)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_U</code> (0xFE89)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_small_schwa</code> (0xFE8A)</td>
      <td>ə</td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_capital_schwa</code> (0xFE8B)</td>
      <td>Ə</td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_greek</code> (0xFE8C)</td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

## ファンクションキー

さまざまなプラットフォームが <kbd>F1</kbd>-<kbd>F12</kbd> （または <kbd>F1</kbd>-<kbd>F10</kbd>、<kbd>F1</kbd>-<kbd>F15</kbd> など）のように異なる数の汎用ファンクションキーに対応していますが、最初のいくつかは以下のように固有の定義をしています。

もしさらにファンクションキーが利用できるのであれば、その名前もここでのパターンを続け、各キーの名前の数字部分を増加し、例えば `"F24"` が有効なキー値となるようにします。

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> 値</th>
      <th rowspan="2" scope="col">解説</th>
      <th colspan="4" scope="col">仮想キーコード</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Mac</th>
      <th scope="col">Linux</th>
      <th scope="col">Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"F1"</code></td>
      <td>最初の汎用ファンクションキー、 <kbd>F1</kbd> です。</td>
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
      <td><kbd>F2</kbd> キーです。</td>
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
      <td><kbd>F3</kbd> キーです。</td>
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
      <td><kbd>F4</kbd> キーです。</td>
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
      <td><kbd>F5</kbd> キーです。</td>
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
      <td><kbd>F6</kbd> キーです。</td>
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
      <td><kbd>F7</kbd> キーです。</td>
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
      <td><kbd>F8</kbd> キーです。</td>
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
      <td><kbd>F9</kbd> キーです。</td>
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
      <td><kbd>F10</kbd> キーです。</td>
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
      <td><kbd>F11</kbd> キーです。</td>
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
      <td><kbd>F12</kbd> キーです。</td>
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
      <td><kbd>F13</kbd> キーです。</td>
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
      <td><kbd>F14</kbd> キーです。</td>
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
      <td><kbd>F15</kbd> キーです。</td>
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
      <td><kbd>F16</kbd> キーです。</td>
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
      <td><kbd>F17</kbd> キーです。</td>
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
      <td><kbd>F18</kbd> キーです。</td>
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
      <td><kbd>F19</kbd> キーです。</td>
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
      <td><kbd>F20</kbd> キーです。</td>
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
      <td>最初の汎用仮想ファンクションキーです。</td>
      <td></td>
      <td></td>
      <td><code>Qt::Key_Context1</code> (0x01100000)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Soft2"</code></td>
      <td>2 番目の汎用仮想ファンクションキーです。</td>
      <td></td>
      <td></td>
      <td><code>Qt::Key_Context2</code> (0x01100001)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Soft3"</code></td>
      <td>3 番目の汎用仮想ファンクションキーです。</td>
      <td></td>
      <td></td>
      <td><code>Qt::Key_Context3</code> (0x01100002)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Soft4"</code></td>
      <td>4 番目の汎用仮想ファンクションキーです。</td>
      <td></td>
      <td></td>
      <td><code>Qt::Key_Context4</code> (0x01100003)</td>
      <td></td>
    </tr>
  </tbody>
</table>

## 電話キー

これらのキーは現代のスマートフォンによくあるボタンを表します。

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> 値</th>
      <th rowspan="2" scope="col">解説</th>
      <th colspan="4" scope="col">仮想キーコード</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Mac</th>
      <th scope="col">Linux</th>
      <th scope="col">Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"AppSwitch"</code></td>
      <td>
        ユーザーがすばやくアプリケーションを切り替えることができる、最近使用したアプリケーションのリストを表示しています。
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_APP_SWITCH</code> (181)</td>
    </tr>
    <tr>
      <td><code>"Call"</code></td>
      <td><kbd>Call</kbd> キー。入力した番号をダイヤルします。</td>
      <td></td>
      <td></td>
      <td><code>Qt::Key_Call</code> (0x01100004)</td>
      <td><code>KEYCODE_CALL</code> (5)</td>
    </tr>
    <tr>
      <td><code>"Camera"</code></td>
      <td><kbd>カメラ</kbd>キー。カメラを起動します。</td>
      <td></td>
      <td></td>
      <td><code>Qt::Key_Camera</code> (0x01100020)</td>
      <td><code>KEYCODE_CAMERA</code> (27)</td>
    </tr>
    <tr>
      <td><code>"CameraFocus"</code></td>
      <td><kbd>フォーカス</kbd>キー。カメラの焦点を合わせます。</td>
      <td></td>
      <td></td>
      <td><code>Qt::Key_CameraFocus</code> (0x01100021)</td>
      <td><code>KEYCODE_FOCUS</code> (80)</td>
    </tr>
    <tr>
      <td><code>"EndCall"</code></td>
      <td><kbd>終話</kbd>または<kbd>電話を切る</kbd>ボタン。</td>
      <td></td>
      <td></td>
      <td><code>Qt::Key_Hangup</code> (0x01100005)</td>
      <td><code>KEYCODE_ENDCALL</code> (6)</td>
    </tr>
    <tr>
      <td><code>"GoBack"</code></td>
      <td><kbd>戻る</kbd>ボタン。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_BACK</code> (4)</td>
    </tr>
    <tr>
      <td><code>"GoHome"</code> [1]</td>
      <td>
        <kbd>ホーム</kbd>ボタン。ユーザーを電話のメイン画面（通常はアプリケーションランチャー）へ帰します。
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_HOME</code> (3)</td>
    </tr>
    <tr>
      <td><code>"HeadsetHook"</code></td>
      <td>
        <kbd>ヘッドセットフック</kbd>キー。これは通常、実際にヘッドセットのボタンで、呼び出しを切断したり、メディアを再生または一時停止したりするために使用します。
      </td>
      <td></td>
      <td></td>
      <td><code>Qt::Key_ToggleCallHangup</code> (0x01100007)</td>
      <td><code>KEYCODE_HEADSETHOOK</code> (79)</td>
    </tr>
    <tr>
      <td><code>"LastNumberRedial"</code></td>
      <td><kbd>リダイヤル</kbd>ボタン。最後に呼び出された番号を再ダイヤルします。</td>
      <td></td>
      <td></td>
      <td><code>Qt::Key_LastNumberRedial</code> (0x01100009)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Notification"</code></td>
      <td><kbd>Notification</kbd> キーです。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_NOTIFICATION</code> (83)</td>
    </tr>
    <tr>
      <td><code>"MannerMode"</code></td>
      <td>
        サイレント、バイブレーション、鳴動などの通知モードを切り替えるボタン。
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_MANNER_MODE</code> (205)</td>
    </tr>
    <tr>
      <td><code>"VoiceDial"</code></td>
      <td><kbd>音声ダイヤル</kbd>キー。音声ダイヤルを開始します。</td>
      <td></td>
      <td></td>
      <td><code>Qt::Key_VoiceDial</code> (0x01100008)</td>
      <td><code>KEYCODE_VOICE_ASSIST</code> (231)</td>
    </tr>
  </tbody>
</table>

\[1] Firefox 37 より前のバージョンでは、ホームボタンは `"Exit"` というキーコードを生成していました。Firefox 37 以降では、このボタンは `"MozHomeScreen"` というキーコードを生成します。

## マルチメディアキー

マルチメディアキーは、一部のキーボードにある、メディア機器を制御するための追加のボタンまたはキーです。

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> 値</th>
      <th rowspan="2" scope="col">解説</th>
      <th colspan="4" scope="col">仮想キーコード</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Mac</th>
      <th scope="col">Linux</th>
      <th scope="col">Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"ChannelDown"</code></td>
      <td>前のチャンネルへの切り替え。</td>
      <td><code>APPCOMMAND_MEDIA_CHANNEL_DOWN</code></td>
      <td></td>
      <td><code>Qt::Key_ChannelDown</code> (0x01000119)</td>
      <td><code>KEYCODE_CHANNEL_DOWN</code> (167)</td>
    </tr>
    <tr>
      <td><code>"ChannelUp"</code></td>
      <td>Switches to the next channel.</td>
      <td><code>APPCOMMAND_MEDIA_CHANNEL_UP</code></td>
      <td></td>
      <td><code>Qt::Key_ChannelUp</code> (0x01000118)</td>
      <td><code>KEYCODE_CHANNEL_UP</code> (166)</td>
    </tr>
    <tr>
      <td><code>"MediaFastForward"</code> [2]</td>
      <td>
        メディアの早送りを始めたり、続けたり、速度を上げたりします。
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
        <p>再生中のメディアを一時停止します。</p>
        <div class="notecard note">
          <p>
            <strong>メモ:</strong> 古いアプリケーションでは <code>"Pause"</code> を使用しているものもありますが、これは正しくありません。
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
        メディアの再生を通常速度で始めたり続けたりします。それ以外の場合は効果はありません。
      </td>
      <td><code>APPCOMMAND_MEDIA_PLAY</code></td>
      <td></td>
      <td><code>GDK_KEY_AudioPlay</code> (0x1008FF14)</td>
      <td><code>KEYCODE_MEDIA_PLAY</code><code> (126)</code></td>
    </tr>
    <tr>
      <td><code>"MediaPlayPause"</code></td>
      <td>現在のメディアの再生と一時停止を切り替えます。</td>
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
      <td>記録メディアを開始または再開します。</td>
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
      <td>メディアの巻き戻しを始めたり、続けたり、速度を上げたりします。</td>
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
        現在のメディアの動作（再生、録画、一時停止、転送、巻き戻しなど）を停止します。メディアがすでに停止している場合は、効果はありません。
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
      <td>次のメディアや プログラムトラックへのシーク。</td>
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
      <td>前のメディアまたはプログラムトラックへのシーク。</td>
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
  </tbody>
</table>

\[1] 古い Edge と Firefox (36 以前) では、`"MediaTrackNext"` と `"MediaTrackPrevious"` の代わりに `"MediaNextTrack"` と `"MediaPreviousTrack"` を使用しています。

\[2] Firefox 37 より前のバージョンでは、Firefox はキーコード `"MediaFastForward"` の代わりに、あるプラットフォームでは `"FastFwd"` を、他のプラットフォームでは `"Unidentified"` を生成していました。

## 音声制御キー

これらのメディアキーは、音声の制御に専用のキーとして使用します。

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> 値</th>
      <th rowspan="2" scope="col">解説</th>
      <th colspan="4" scope="col">仮想キーコード</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Mac</th>
      <th scope="col">Linux</th>
      <th scope="col">Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"AudioBalanceLeft"</code></td>
      <td>音声バランスを左方向に調整します。</td>
      <td><code>VK_AUDIO_BALANCE_LEFT</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"AudioBalanceRight"</code></td>
      <td>音声バランスを右方向に調整します。</td>
      <td><code>VK_AUDIO_BALANCE_RIGHT</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"AudioBassDown"</code></td>
      <td>低音の音量を下げます。</td>
      <td><code>APPCOMMAND_BASS_DOWN</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"AudioBassBoostDown"</code></td>
      <td>
        低音ブーストを減少させるか、低音ブーストモードまたは状態を下方向に循環させます。
      </td>
      <td><code>VK_BASS_BOOST_DOWN</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"AudioBassBoostToggle"</code></td>
      <td>低音ブーストのオン／オフを切り替えます。</td>
      <td><code>APPCOMMAND_BASS_BOOST</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"AudioBassBoostUp"</code></td>
      <td>
        低音ブーストの量を増やすか、低音ブーストの設定モードまたは状態を上向きに循環させます。
      </td>
      <td><code>VK_BASS_BOOST_UP</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"AudioBassUp"</code></td>
      <td>低音の音量を上げます。</td>
      <td><code>APPCOMMAND_BASS_UP</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"AudioFaderFront"</code></td>
      <td>音声フェーダーをフロント側に調整します。</td>
      <td><code>VK_FADER_FRONT</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"AudioFaderRear"</code></td>
      <td>音声フェーダーをリア側に調整します。</td>
      <td><code>VK_FADER_REAR</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"AudioSurroundModeNext"</code></td>
      <td>次に利用できるサラウンド音を選択します。</td>
      <td><code>VK_SURROUND_MODE_NEXT</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"AudioTrebleDown"</code></td>
      <td>高音の音量を下げます。</td>
      <td><code>APPCOMMAND_TREBLE_DOWN</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"AudioTrebleUp"</code></td>
      <td>高音の音量を上げます。</td>
      <td><code>APPCOMMAND_TREBLE_UP</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"AudioVolumeDown" [1]</code></td>
      <td>音声の音量を下げます。</td>
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
      <td>音声をミュートします。</td>
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
      <td>音声の音量を上げます。</td>
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
      <td>マイクのオン／オフを切り替えます。</td>
      <td><code>APPCOMMAND_MIC_ON_OFF_TOGGLE</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"MicrophoneVolumeDown"</code></td>
      <td>マイクの入力音量を下げます。</td>
      <td><code>APPCOMMAND_MICROPHONE_VOLUME_DOWN</code></td>
      <td></td>
      <td><code>Qt::Key_MicVolumeDown</code> (0x0100011E)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"MicrophoneVolumeMute"</code></td>
      <td>マイク入力をミュートします。</td>
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
      <td>マイクの入力音量を上げます。</td>
      <td><code>APPCOMMAND_MICROPHONE_VOLUME_UP</code></td>
      <td></td>
      <td><code>Qt::Key_MicVolumeUp</code> (0x0100011D)</td>
      <td></td>
    </tr>
  </tbody>
</table>

\[1] 古い Edge と Firefox （48以前）では、`"AudioVolumeUp"`、`"AudioVolumeDown"`、`"AudioVolumeMute"`の代わりに、`"VolumeUp"`、`"VolumeDown"`、`"VolumeMute"`を使用しています。Firefox 49 では、これらは最新の仕様に一致するように更新されました。

## TV 制御キー

これらのキー値は、テレビ機器、またはテレビに対応しているコンピューターや電話に存在するボタンやキーを表しています。

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> 値</th>
      <th rowspan="2" scope="col">解説</th>
      <th colspan="4" scope="col">仮想キーコード</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Mac</th>
      <th scope="col">Linux</th>
      <th scope="col">Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"TV"</code> [1]</td>
      <td>テレビ視聴モードに切り替えます。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV</code> (170)</td>
    </tr>
    <tr>
      <td><code>"TV3DMode"</code></td>
      <td>3D TV モードのオン/オフを切り替えます。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_3D_MODE</code> (206)</td>
    </tr>
    <tr>
      <td><code>"TVAntennaCable"</code></td>
      <td>アンテナ入力とケーブル入力を切り替えます。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_ANTENNA_CABLE</code> (242)</td>
    </tr>
    <tr>
      <td><code>"TVAudioDescription"</code></td>
      <td>音声解説モードのオン／オフを切り替えます。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_AUDIO_DESCRIPTION</code> (252)</td>
    </tr>
    <tr>
      <td><code>"TVAudioDescriptionMixDown"</code></td>
      <td>
        音声解説の混合音量を下げます。番組音声に対して音声解説の音量を下げます。
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_AUDIO_DESCRIPTION_MIX_DOWN</code> (254)</td>
    </tr>
    <tr>
      <td><code>"TVAudioDescriptionMixUp"</code></td>
      <td>
        音声解説の混合音量を上げます。番組音声に対して音声解説の音量を上げます。
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_AUDIO_DESCRIPTION_MIX_UP</code> (253)</td>
    </tr>
    <tr>
      <td><code>"TVContentsMenu"</code></td>
      <td>
        再生に利用できるメディアコンテンツを表示または非表示にします（現在放送中の番組を示すチャンネルガイド、または再生するメディアファイルのリストです）。
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_CONTENTS_MENU</code> (256)</td>
    </tr>
    <tr>
      <td><code>"TVDataService"</code></td>
      <td>テレビのデータサービスメニューを表示または非表示にします。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_DATA_SERVICE</code> (230)</td>
    </tr>
    <tr>
      <td><code>"TVInput"</code> [2]</td>
      <td>外部テレビの入力モードを切り替えます。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_INPUT</code> (178)</td>
    </tr>
    <tr>
      <td><code>"TVInputComponent1"</code></td>
      <td>「コンポーネント 1」入力に切り替えます。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_INPUT_COMPONENT_1</code> (249)</td>
    </tr>
    <tr>
      <td><code>"TVInputComponent2"</code></td>
      <td>「コンポーネント 2」入力に切り替えます。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_INPUT_COMPONENT_2</code> (250)</td>
    </tr>
    <tr>
      <td><code>"TVInputComposite1"</code></td>
      <td>「コンポジット 1」入力に切り替えます。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_INPUT_COMPOSITE_1</code> (247)</td>
    </tr>
    <tr>
      <td><code>"TVInputComposite2"</code></td>
      <td>「コンポジット 2」入力に切り替えます。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_INPUT_COMPOSITE_2</code> (248)</td>
    </tr>
    <tr>
      <td><code>"TVInputHDMI1"</code></td>
      <td>「HDMI 1」入力に切り替えます。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_INPUT_HDMI_1</code> (243)</td>
    </tr>
    <tr>
      <td><code>"TVInputHDMI2"</code></td>
      <td>「HDMI 2」入力に切り替えます。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_INPUT_HDMI_2</code> (244)</td>
    </tr>
    <tr>
      <td><code>"TVInputHDMI3"</code></td>
      <td>「HDMI 3」入力に切り替えます。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_INPUT_HDMI_3</code> (245)</td>
    </tr>
    <tr>
      <td><code>"TVInputHDMI4"</code></td>
      <td>「HDMI 4」入力に切り替えます。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_INPUT_HDMI_4</code> (246)</td>
    </tr>
    <tr>
      <td><code>"TVInputVGA1"</code></td>
      <td>「VGA 1」入力に切り替えます。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_INPUT_VGA_1</code> (251)</td>
    </tr>
    <tr>
      <td><code>"TVMediaContext"</code></td>
      <td>メディアコンテキストメニューキーです。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_MEDIA_CONTEXT_MENU</code> (257)</td>
    </tr>
    <tr>
      <td><code>"TVNetwork"</code></td>
      <td>テレビのネットワーク接続のオン/オフを切り替えます。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_NETWORK</code> (241)</td>
    </tr>
    <tr>
      <td><code>"TVNumberEntry"</code></td>
      <td>テレビを番号入力モードにします。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_NUMBER_ENTRY</code> (234)</td>
    </tr>
    <tr>
      <td><code>"TVPower"</code> [2]</td>
      <td>機器の電源ボタン。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_POWER</code> (177)</td>
    </tr>
    <tr>
      <td><code>"TVRadioService"</code></td>
      <td>ラジオのボタン。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_RADIO_SERVICE</code> (232)</td>
    </tr>
    <tr>
      <td><code>"TVSatellite"</code></td>
      <td>衛星放送ボタン。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_SATELLITE</code> (237)</td>
    </tr>
    <tr>
      <td><code>"TVSatelliteBS"</code></td>
      <td>BS 放送ボタン。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_SATELLITE_BS</code> (238)</td>
    </tr>
    <tr>
      <td><code>"TVSatelliteCS"</code></td>
      <td>CS 放送ボタン。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_SATELLITE_CS</code> (239)</td>
    </tr>
    <tr>
      <td><code>"TVSatelliteToggle"</code></td>
      <td>利用できる衛星放送を切り替えます。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_SATELLITE_SERVICE</code> (240)</td>
    </tr>
    <tr>
      <td><code>"TVTerrestrialAnalog"</code></td>
      <td>
        アナログ地上波テレビサービス（アナログケーブルまたはアンテナ受信）を選択します。
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_TERRESTRIAL_ANALOG</code> (235)</td>
    </tr>
    <tr>
      <td><code>"TVTerrestrialDigital"</code></td>
      <td>
        地上デジタルテレビサービス（デジタルケーブルまたはアンテナ受信）を選択します。
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_TERRESTRIAL_DIGITAL</code> (236)</td>
    </tr>
    <tr>
      <td><code>"TVTimer"</code></td>
      <td>タイマー設定ボタン。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_TIMER_PROGRAMMING</code> (258)</td>
    </tr>
  </tbody>
</table>

\[1] Firefox は Firefox 37 で `"TV"` キーに適切に対応しています。

\[2] これらのキーは Firefox 37 までは `"Unidentified"` でした。

## メディア制御キー

現代のメディア機器用リモコンは、この文書内の他の場所で扱われる基本的なコントロールを超えるボタンを含むことが多いため、これらの追加ボタンの広範な配列に対してキー値が定義されています。

下記の値は、多くの家電製品の技術仕様から一部抜粋したものです。

- [DTV Application Software Environment](https://www.atsc.org/atsc-documents/a100-dtv-application-software-environment-level-1-dase-1/) （[ATSC](https://en.wikipedia.org/wiki/ATSC) 仕様の一部）
- [Open Cable Application Platform](https://en.wikipedia.org/wiki/OpenCable_Application_Platform)
- [ANSI/CEA-2014-B](https://shop.cta.tech/products/web-based-protocol-and-framework-for-remote-user-interface-on-upnp-networks-and-the-internet): UPnP™ ネットワークとインターネット上のリモートユーザーインターフェイスのためのウェブベースのプロトコルとフレームワーク
- [Android KeyEvent key code values](https://developer.android.com/reference/android/view/KeyEvent.html)

> [!NOTE]
> リモコンには通常、[マルチメディアキー](#マルチメディアキー)や[音声制御キー](#音声制御キー)のように、すでに他の場所で定義されている値を持つキーが記載されています。それらのキーの値は、それらの表内の文書化されたものと一致します。

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> 値</th>
      <th rowspan="2" scope="col">解説</th>
      <th colspan="4" scope="col">仮想キーコード</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Mac</th>
      <th scope="col">Linux</th>
      <th scope="col">Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"AVRInput"</code> [3]</td>
      <td>
        外部 AVR ユニットの入力モードを変更します。
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_AVR_INPUT</code> (182)</td>
    </tr>
    <tr>
      <td><code>"AVRPower"</code> [3]</td>
      <td>外部 AVR ユニットの電源を切り替えます。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_AVR_POWER</code> (181)</td>
    </tr>
    <tr>
      <td><code>"ColorF0Red"</code> [3]</td>
      <td>
        赤色に色分けされた汎用メディア機能キー。色キーのインデックスは <code>0</code> です。
      </td>
      <td><code>VK_COLORED_KEY_0</code></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_PROG_RED</code> (183)</td>
    </tr>
    <tr>
      <td><code>"ColorF1Green"</code> [3]</td>
      <td>
        緑色に色分けされた汎用メディア機能キー。色キーのインデックスは <code>1</code> です。
      </td>
      <td><code>VK_COLORED_KEY_1</code></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_PROG_GREEN</code> (184)</td>
    </tr>
    <tr>
      <td><code>"ColorF2Yellow"</code> [3]</td>
      <td>
        黄色に色分けされた汎用メディア機能キー。色キーのインデックスは <code>2</code> です。
      </td>
      <td><code>VK_COLORED_KEY_2</code></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_PROG_YELLOW</code> (185)</td>
    </tr>
    <tr>
      <td><code>"ColorF3Blue"</code> [3]</td>
      <td>
        青色に色分けされた汎用メディア機能キー。色キーのインデックスは <code>3</code> です。
      </td>
      <td><code>VK_COLORED_KEY_3</code></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_PROG_BLUE</code> (186)</td>
    </tr>
    <tr>
      <td><code>"ColorF4Grey"</code></td>
      <td>
        灰色に色分けされた汎用メディア機能キー。色キーのインデックスは <code>4</code> です。
      </td>
      <td><code>VK_COLORED_KEY_4</code></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_PROG_GREY</code></td>
    </tr>
    <tr>
      <td><code>"ColorF5Brown"</code></td>
      <td>
        茶色に色分けされた汎用メディア機能キー。色キーのインデックスは <code>5</code> です。
      </td>
      <td><code>VK_COLORED_KEY_5</code></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_PROG_BROWN</code></td>
    </tr>
    <tr>
      <td><code>"ClosedCaptionToggle"</code></td>
      <td>字幕のオン／オフを切り替えます。</td>
      <td><code>VK_CC</code></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_CAPTIONS</code> (175)</td>
    </tr>
    <tr>
      <td><code>"Dimmer"</code></td>
      <td>
        2 の明るさレベルの間でトグル<em>または</em>複数の明るさレベルの間で循環することによって、機器の明るさを調整します。
      </td>
      <td><code>VK_DIMMER</code></td>
      <td></td>
      <td><code>GDK_KEY_BrightnessAdjust</code> (0x1008FF3B)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"DisplaySwap"</code></td>
      <td>映像ソースを循環させます。</td>
      <td><code>VK_DISPLAY_SWAP</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"DVR"</code></td>
      <td>入力ソースをデジタルビデオレコーダー（DVR）に切り替えます。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_DVR</code> (173)</td>
    </tr>
    <tr>
      <td><code>"Exit"</code></td>
      <td>終了ボタンで、現在のアプリケーションやメニューを終了します。</td>
      <td><code>VK_EXIT</code></td>
      <td></td>
      <td><code>Qt::Key_Exit</code> (0x0102000a)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FavoriteClear0"</code></td>
      <td>
        お気に入りリストの最初のスロットに登録されている番組やコンテンツを消去します。
      </td>
      <td><code>VK_CLEAR_FAVORITE_0</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FavoriteClear1"</code></td>
      <td>
        お気に入りリストの 2 つ目のスロットに登録されている番組やコンテンツを消去します。
      </td>
      <td><code>VK_CLEAR_FAVORITE_1</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FavoriteClear2"</code></td>
      <td>
        お気に入りリストの 3 つ目のスロットに登録されている番組やコンテンツを消去します。
      </td>
      <td><code>VK_CLEAR_FAVORITE_2</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FavoriteClear3"</code></td>
      <td>
        お気に入りリストの 4 つ目のスロットに登録されている番組やコンテンツを消去します。
      </td>
      <td><code>VK_CLEAR_FAVORITE_3</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FavoriteRecall0"</code></td>
      <td>
        お気に入りリストの最初のスロットに格納されている番組やコンテンツを選択（呼び出し）します。
      </td>
      <td><code>VK_RECALL_FAVORITE_0</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FavoriteRecall1"</code></td>
      <td>
        お気に入りリストの 2 つ目のスロットに格納されている番組やコンテンツを選択（呼び出し）します。
      </td>
      <td><code>VK_RECALL_FAVORITE_1</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FavoriteRecall2"</code></td>
      <td>
        お気に入りリストの 3 つ目のスロットに格納されている番組やコンテンツを選択（呼び出し）します。
      </td>
      <td><code>VK_RECALL_FAVORITE_2</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FavoriteRecall3"</code></td>
      <td>
        お気に入りリストの 4 つ目のスロットに格納されている番組やコンテンツを選択（呼び出し）します。
      </td>
      <td><code>VK_RECALL_FAVORITE_3</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FavoriteStore0"</code></td>
      <td>
        お気に入りリストの最初のスロットに、現在の番組やコンテンツを登録します。
      </td>
      <td><code>VK_STORE_FAVORITE_0</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FavoriteStore1"</code></td>
      <td>
        お気に入りリストの 2 つ目のスロットに、現在の番組やコンテンツを登録します。
      </td>
      <td><code>VK_STORE_FAVORITE_1</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FavoriteStore2"</code></td>
      <td>
        お気に入りリストの 3 つ目のスロットに、現在の番組やコンテンツを登録します。
      </td>
      <td><code>VK_STORE_FAVORITE_2</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FavoriteStore3"</code></td>
      <td>
        お気に入りリストの 4 つ目のスロットに、現在の番組やコンテンツを登録します。
      </td>
      <td><code>VK_STORE_FAVORITE_3</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Guide"</code></td>
      <td>番組ガイドまたはコンテンツガイドの表示を切り替えます。</td>
      <td><code>VK_GUIDE</code></td>
      <td></td>
      <td><code>Qt::Key_Guide</code> (0x0100011A)</td>
      <td><code>KEYCODE_GUIDE</code> (172)</td>
    </tr>
    <tr>
      <td><code>"GuideNextDay"</code></td>
      <td>
        現在ガイドが表示されている場合、このボタンは翌日のコンテンツを表示するようにガイドに指示します。
      </td>
      <td><code>VK_NEXT_DAY</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"GuidePreviousDay"</code></td>
      <td>
        現在ガイドが表示されている場合、このボタンは前回までのコンテンツを表示するようにガイドに指示します。
      </td>
      <td><code>VK_PREV_DAY</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Info"</code></td>
      <td>
        現在選択されているコンテンツ、番組、メディアに関する情報の表示を切り替えます。
      </td>
      <td><code>VK_INFO</code></td>
      <td></td>
      <td><code>Qt::Key_Info</code> (0x0100011B)</td>
      <td><code>KEYCODE_INFO</code> (165)</td>
    </tr>
    <tr>
      <td><code>"InstantReplay"</code></td>
      <td>
        機器にインスタントリプレイ（通常、短時間にジャンプしてからもう一度再生するという形式で、使用可能ですが通常はスローモーションではありません）を指示します。
      </td>
      <td><code>VK_INSTANT_REPLAY</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Link"</code></td>
      <td>
        利用でき、可能であれば、現在の番組にリンクしたコンテンツを開きます。
      </td>
      <td><code>VK_LINK</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"ListProgram"</code></td>
      <td>現在のプログラムを表示します。</td>
      <td><code>VK_LIST</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LiveContent"</code></td>
      <td>
        現在利用できるライブコンテンツや番組の一覧表示を切り替えます。
      </td>
      <td><code>VK_LIVE</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Lock"</code></td>
      <td>現在選択されているコンテンツまたは番組をロックまたはロック解除します。</td>
      <td><code>VK_LOCK</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"MediaApps"</code></td>
      <td>
        写真ビューア、音声・動画プレイヤー、ゲームなどのメディアアプリケーションの一覧を表示しています。 [1]
      </td>
      <td><code>VK_APPS</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"MediaAudioTrack"</code></td>
      <td>音声トラックキーです。</td>
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
      <td>最後に見たコンテンツや番組、他にもメディアにジャンプして戻ります。</td>
      <td><code>VK_LAST</code></td>
      <td></td>
      <td><code>Qt::Key_MediaLast</code> (0x0100FFFF)</td>
      <td><code>KEYCODE_LAST_CHANNEL</code> (229)</td>
    </tr>
    <tr>
      <td><code>"MediaSkipBackward"</code></td>
      <td>前回のコンテンツや番組にスキップします。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_MEDIA_SKIP_BACKWARD</code></td>
    </tr>
    <tr>
      <td><code>"MediaSkipForward"</code></td>
      <td>次のコンテンツや番組にスキップします。</td>
      <td><code>VK_SKIP</code></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_MEDIA_SKIP_FORWARD</code></td>
    </tr>
    <tr>
      <td><code>"MediaStepBackward"</code></td>
      <td>前回のコンテンツやプログラムに戻ります。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_MEDIA_STEP_BACKWARD</code></td>
    </tr>
    <tr>
      <td><code>"MediaStepForward"</code></td>
      <td>次のコンテンツやプログラムへの手順。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_MEDIA_SKIP_FORWARD</code></td>
    </tr>
    <tr>
      <td><code>"MediaTopMenu"</code></td>
      <td>
        トップメニューボタン。メディアのメインメニューを開きます（DVD やブルーレイディスクの場合など）。
      </td>
      <td></td>
      <td></td>
      <td><code>Qt::Key_TopMenu</code> (0x0100010A)</td>
      <td><code>KEYCODE_MEDIA_TOP_MENU</code></td>
    </tr>
    <tr>
      <td><code>"NavigateIn"</code></td>
      <td>サブメニューまたはオプションに移動します。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_NAVIGATE_IN</code></td>
    </tr>
    <tr>
      <td><code>"NavigateNext"</code></td>
      <td>次のアイテムに移動します。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_NAVIGATE_NEXT</code></td>
    </tr>
    <tr>
      <td><code>"NavigateOut"</code></td>
      <td>現在の画面またはメニューから外へ移動します。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_NAVIGATE_OUT</code></td>
    </tr>
    <tr>
      <td><code>"NavigatePrevious"</code></td>
      <td>前のアイテムに移動します。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_NAVIGATE_PREVIOUS</code></td>
    </tr>
    <tr>
      <td><code>"NextFavoriteChannel"</code></td>
      <td>お気に入りリストの次のチャンネルに移動します。</td>
      <td><code>VK_NEXT_FAVORITE_CHANNEL</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"NextUserProfile"</code></td>
      <td>
        この機能に対応していて、複数のプロファイルが存在する場合は、次に保存されたユーザープロファイルに循環します。
      </td>
      <td><code>VK_USER</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"OnDemand"</code></td>
      <td>
        オンデマンドコンテンツや視聴する番組を選択するためのユーザーインターフェイスを開きます。
      </td>
      <td><code>VK_ON_DEMAND</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Pairing"</code></td>
      <td>
        リモコンと制御する機器をペアリングするプロセスを開始します。
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_PAIRING</code> (225)</td>
    </tr>
    <tr>
      <td><code>"PinPDown"</code></td>
      <td>ピクチャインピクチャを下方向に移動させるボタンです。</td>
      <td><code>VK_PINP_DOWN</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"PinPMove"</code></td>
      <td>ピクチャインピクチャの移動を制御するボタンです。</td>
      <td><code>VK_PINP_MOVE</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"PinPToggle"</code></td>
      <td>ピクチャインピクチャ表示のオン／オフを切り替えます。</td>
      <td><code>VK_PINP_TOGGLE</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"PinPUp"</code></td>
      <td>ピクチャインピクチャを上方向に移動させるボタンです。</td>
      <td><code>VK_PINP_UP</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"PlaySpeedDown"</code></td>
      <td>メディアの再生速度を下げます。</td>
      <td><code>VK_PLAY_SPEED_DOWN</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"PlaySpeedReset"</code></td>
      <td>メディアの再生速度を通常に戻します。</td>
      <td><code>VK_PLAY_SPEED_RESET</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"PlaySpeedUp"</code></td>
      <td>メディアの再生速度を上げます。</td>
      <td><code>VK_PLAY_SPEED_UP</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"RandomToggle"</code></td>
      <td>ランダムメディア（「シャッフルモード」とも呼ばれます）のオン／オフを切り替えます。</td>
      <td><code>VK_RANDOM_TOGGLE</code></td>
      <td></td>
      <td><code>GDK_KEY_AudioRandomPlay</code> (0x1008FF99)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"RcLowBattery"</code></td>
      <td>
        リモコンの電池残量が少なくなったときに送信されるコード。実際には物理的なキーにはすべて対応していません。
      </td>
      <td><code>VK_RC_LOW_BATTERY</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"RecordSpeedNext"</code></td>
      <td>利用できるメディアの記録速度を切り替えます。</td>
      <td><code>VK_RECORD_SPEED_NEXT</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"RfBypass"</code></td>
      <td>
        無線周波数 (RF) 入力バイパスモードのオン／オフを切り替えます。 RF バイパスモードは、 RF 入力を処理やフィルタリングなしで直接 RF 出力に渡されます。
      </td>
      <td><code>VK_RF_BYPASS</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"ScanChannelsToggle"</code></td>
      <td>
        チャンネルスキャンモードのオン／オフを切り替えます。ユーザーがチャンネルスキャンを停止するまで、自動的にチャンネルが切り替わるモードです。
      </td>
      <td><code>VK_SCAN_CHANNELS_TOGGLE</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"ScreenModeNext"</code></td>
      <td>利用できる画面表示モードを循環させます。</td>
      <td><code>VK_SCREEN_MODE_NEXT</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Settings"</code></td>
      <td>機器の設定画面の表示/非表示を切り替えます。</td>
      <td><code>VK_SETTINGS</code></td>
      <td></td>
      <td><code>Qt::Key_Settings</code> (0x0100011C)</td>
      <td><code>KEYCODE_SETTINGS</code></td>
    </tr>
    <tr>
      <td><code>"SplitScreenToggle"</code></td>
      <td>画面分割表示モードのオン／オフを切り替えます。</td>
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
      <td>外部セットトップボックス (STB) の入力モード間を循環します。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_STB_INPUT</code> (180)</td>
    </tr>
    <tr>
      <td><code>"STBPower"</code> [3]</td>
      <td>外部 STB のオン／オフを切り替えます。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_STB_POWER</code> (179)</td>
    </tr>
    <tr>
      <td><code>"Subtitle"</code></td>
      <td>字幕が利用できる場合、字幕表示のオン/オフを切り替えます。</td>
      <td><code>VK_SUBTITLE</code></td>
      <td></td>
      <td><code>GDK_KEY_Subtitle</code> (0x1008FF9A)</td>
      <td><code>KEYCODE_CAPTIONS</code> (175)</td>
    </tr>
    <tr>
      <td><code>"Teletext"</code></td>
      <td>
        利用できる場合は、[teletext](https://en.wikipedia.org/wiki/Teletext) の表示を切り替えます。
      </td>
      <td><code>VK_TELETEXT</code></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_TELETEXT</code> (233)</td>
    </tr>
    <tr>
      <td><code>"VideoModeNext"</code> [3]</td>
      <td>利用できる動画モードを循環させます。</td>
      <td><code>VK_VIDEO_MODE_NEXT</code></td>
      <td></td>
      <td><code>GDK_KEY_Next_VMode</code> (0x1008FE22)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Wink"</code></td>
      <td>
        ライトを点滅させたり、インジケータライトの明るさを短時間変化させたり、トーンを発するなど、何らかの方法で機器自身を識別させます。
      </td>
      <td><code>VK_WINK</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"ZoomToggle"</code> [2]</td>
      <td>
        全画面表示と拡大縮小するコンテンツを切り替えたり、拡大レベルを変更したりします。
      </td>
      <td><code>VK_ZOOM</code> (0xFB)</td>
      <td></td>
      <td><code>Qt::Key_Zoom</code> (0x01020006)</td>
      <td><code>KEYCODE_TV_ZOOM_MODE</code> (255)</td>
    </tr>
  </tbody>
</table>

\[1] メディアコントローラーの `VK_APPS` キーとウィンドウズの `VK_APPS` キーを混同しないでください。このキーは `"ContextMenu"` とエンコードされます

\[2] Firefox 36 およびそれ以前のバージョンでは、ズーム切り替えボタンは `"Zoom"` です。 Firefox 37 では `"ZoomToggle"` に修正されました。

\[3] これらのキーは Firefox 37 までは `"Unidentified"` でした。

## 音声認識キー

これらの特別なマルチメディアキーは、音声認識機能を制御するために使用します。

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> 値</th>
      <th rowspan="2" scope="col">解説</th>
      <th colspan="4" scope="col">仮想キーコード</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Mac</th>
      <th scope="col">Linux</th>
      <th scope="col">Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"SpeechCorrectionList"</code> [1]</td>
      <td>
        誤って認識された単語の使用可能な訂正リストを表示します。
      </td>
      <td><code>APPCOMMAND_CORRECTION_LIST</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"SpeechInputToggle"</code> [2]</td>
      <td>
        ディクテーションモードとコマンド/コントロールモードを切り替えます。これにより発話エンジンは、発話された言葉を入力テキストとして解釈するか、コマンドとして解釈するかを知ることができます。
      </td>
      <td><code>APPCOMMAND_DICTATE_OR_COMMAND_CONTROL_TOGGLE</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

\[1] Windows の `APPCOMMAND_CORRECTION_LIST` コマンドは Firefox では `"Unidentified"` を生成します。

\[2] Windows の `APPCOMMAND_DICTATE_OR_COMMAND_CONTROL_TOGGLE` コマンドは Firefox 上で `"Unidentified"` を生成します。

## 文書キー

これらのキーは文書を制御します。仕様では、（メディアキーなど）他のキーの集合に記載されていますが、独自のカテゴリーに分類したほうが適切でしょう。

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> 値</th>
      <th rowspan="2" scope="col">解説</th>
      <th colspan="4" scope="col">仮想キーコード</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Mac</th>
      <th scope="col">Linux</th>
      <th scope="col">Android</th>
    </tr>
    <tr>
      <td><code>"Close"</code> [1]</td>
      <td>
        現在の文書またはメッセージを閉じます。アプリケーションを終了してはいけません。
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
      <td>新しい文書またはメッセージを作成します。</td>
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
      <td>既存の文書またはメッセージを開きます。</td>
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
      <td>現在の文書またはメッセージを出力します。</td>
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
      <td>現在の文書またはメッセージを保存します。</td>
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
      <td>現在の文書のスペルチェックを開始します。</td>
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
      <td>メッセージを転送するためのユーザーインターフェイスを開きます。</td>
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
      <td>メッセージに返信するためのユーザーインターフェイスを開きます<。/td>
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
      <td>現在のメッセージを送信します。</td>
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

\[1] Firefox 37 より前のバージョンでは、このキーはキー値 `"Unidentified"` を生成していました。

## アプリケーション選択キー

キーボードによっては、特定のよく使うアプリケーションを起動したり切り替えたりするための特別なキーを備えているものもあります。それらのキー値はここに掲載されています。

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> 値</th>
      <th rowspan="2" scope="col">解説</th>
      <th colspan="4" scope="col">仮想キーコード</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Mac</th>
      <th scope="col">Linux</th>
      <th scope="col">Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"LaunchCalculator"</code> [5]</td>
      <td>
        <kbd>計算機</kbd>キーで、よくアイコン表記になっています。これは汎用的なアプリケーション起動キー (<code>APPCOMMAND_LAUNCH_APP2</code>) としてよく使用されます。
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
      <td><kbd>カレンダー</kbd>キーで、よくアイコン表記になっています。</td>
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
      <td><kbd>連絡先</kbd>キーです。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_CONTACTS</code> (207)</td>
    </tr>
    <tr>
      <td><code>"LaunchMail"</code></td>
      <td><kbd>メール</kbd>キーです。よくアイコン表記になっています。</td>
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
      <td><kbd>メディアプレイヤー</kbd>キーです。</td>
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
      <td><kbd>音楽プレイヤー</kbd>キーです。よくアイコン表記になっています。</td>
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
        Windows キーボードの<kbd>マイコンピューター</kbd>キーです。良く汎用のアプリケーション起動キー (<code>APPCOMMAND_LAUNCH_APP1</code>) として使われます。
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
        <kbd>電話</kbd>キーです。（ある場合は）ダイヤラーアプリケーションを開きます。
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
      <td><kbd>スクリーンセーバー</kbd>キーです。</td>
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
        <kbd>スプレッドシート</kbd>キーです。アイコンで表記されているかもしれません。
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
        <kbd>ウェブブラウザー</kbd>キーです。よくアイコンで表記されています。
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
      <td><kbd>ウェブカメラ</kbd>キーです。ウェブカメラアプリを開きます。</td>
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
        <kbd>ワープロ</kbd>キーです。特定のワープロアプリのアイコンの場合も、一般の文書のアイコンの場合もあります。
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
      <td>最初の汎用アプリケーション起動ボタン。</td>
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
      <td>2 つ目の汎用アプリケーション起動ボタン。</td>
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
      <td>3 つ目の汎用アプリケーション起動ボタン。</td>
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
      <td>4 つ目の汎用アプリケーション起動ボタン。</td>
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
      <td>5 つ目の汎用アプリケーション起動ボタン。</td>
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
      <td>6 つ目の汎用アプリケーション起動ボタン。</td>
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
      <td>7 つ目の汎用アプリケーション起動ボタン。</td>
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
      <td>8 つ目の汎用アプリケーション起動ボタン。</td>
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
      <td>9 つ目の汎用アプリケーション起動ボタン。</td>
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
      <td>10 番目の汎用アプリケーション起動ボタン。</td>
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
      <td>11 番目の汎用アプリケーション起動ボタン。</td>
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
      <td>12 番目の汎用アプリケーション起動ボタン。</td>
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
      <td>13 番目の汎用アプリケーション起動ボタン。</td>
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
      <td>14 番目の汎用アプリケーション起動ボタン。</td>
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
      <td>15 番目の汎用アプリケーション起動ボタン。</td>
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
      <td>16 番目の汎用アプリケーション起動ボタン。</td>
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
  </tbody>
</table>

\[1] 古い Edge と Firefox （36 以前）は `"LaunchMediaPlayer"` の代わりに `"SelectMedia"` を使用します。 Firefox 37 から Firefox 48 では `"MediaSelect"` を使用します。 Firefox 49 は最新の仕様に適合し、`"LaunchMediaPlayer"` を返すように更新されました。

\[2] Google Chrome 57 以前では、`"LaunchApplication1"` の代わりに `"LaunchMyComputer"` を返していました。詳しくは [Chrome Bug 612743](https://crbug.com/612743) を参照してください。

\[3] Google Chrome 57 以前は `"LaunchApplication2"` の代わりに `"LaunchCalculator"` を返していました。詳しくは [Chrome Bug 612743](https://crbug.com/612743) を参照してください。

\[4] Firefox 37 より前の Firefox では、ウェブブラウザのキーは "`LaunchWebBrowser"` ではなく `"LaunchApplication1"` というキーコードを返していました。

\[5] Firefox は Firefox 37 でこのキーに対応しました。それ以前は、このキーは `"Unidentified"` として報告されていました。

## ブラウザー制御キー

キーボードによっては、ウェブブラウザを制御するための特別なキーが記載されています。それらのキーは以下に続きます。

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> 値</th>
      <th rowspan="2" scope="col">解説</th>
      <th colspan="4" scope="col">仮想キーコード</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Mac</th>
      <th scope="col">Linux</th>
      <th scope="col">Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"BrowserBack"</code></td>
      <td>
        現在のウェブビューの履歴において、前にコンテンツまたはページに移動します。
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
      <td>ユーザーのブックマーク/お気に入りリストを開きます。</td>
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
        現在のウェブビューの履歴において、次のコンテンツまたはページに移動します。
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
      <td>ユーザーの選択したホームページに移動します。</td>
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
      <td>現在のページまたはコンテンツを更新します。</td>
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
        ユーザーの選択した検索エンジンまたはブラウザー内の検索インターフェイスを有効にします。
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
      <td>現在表示しているウェブビューまたはコンテンツの読み込みを停止します。</td>
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
  </tbody>
</table>

\[1] Firefox 37 より前のバージョンでは、このキーの値は `"Unidentified"` と報告されていました。

## テンキーのキー

これらのキーはキーボードのテンキーにあります。しかし、すべてがすべてのキーボードに存在するわけではありません。一般的なテンキーには <kbd>0</kbd> から <kbd>9</kbd> までの数字キーがありますが（`"0"` から `"9"` までのエンコード方式）、マルチメディアキーボードの中には、それ以上の数字のために追加の数字キーがあるものもあります。

> [!NOTE] > <kbd>10</kbd> キーが存在する場合、 `key` の値が `"0"` のイベントを生成します。

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> 値</th>
      <th rowspan="2" scope="col">解説</th>
      <th colspan="4" scope="col">仮想キーコード</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Mac</th>
      <th scope="col">Linux</th>
      <th scope="col">Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"Decimal"</code> [1] {{deprecated_inline}}</td>
      <td>
        <p>
          小数点キー（地域により通常 <kbd>.</kbd> または <kbd>,</kbd>）。
        </p>
        <p>
          新しいブラウザーでは、この値は10進数キーで生成された文字（この 2 文字のうちの 1 つ）になります。 [1]
        </p>
      </td>
      <td><code>VK_DECIMAL</code> (0x6E)</td>
      <td><code>kVK_ANSI_KeypadDecimal</code> (0x41)</td>
      <td><code>GDK_KEY_KP_Decimal</code> (0xFFAE)<br /> </td>
      <td><code>KEYCODE_NUMPAD_DOT</code> (158)</td>
    </tr>
    <tr>
      <td><code>"Key11"</code></td>
      <td>特定のメディアのテンキーに見られる <kbd>11</kbd> キー。</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Key12"</code></td>
      <td>特定のメディアのテンキーに見られる <kbd>12</kbd> キー。</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Multiply"</code> [1] {{deprecated_inline}}</td>
      <td>テンキーの乗算キー、<kbd>*</kbd>。</td>
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
      <td><code>"Add"</code> [1] {{deprecated_inline}}</td>
      <td>テンキーの加算キー、<kbd>+</kbd>。</td>
      <td><code>VK_ADD</code> (0x6B)</td>
      <td><code>kVK_ANSI_KeypadPlus</code> (0x45)</td>
      <td><code>GDK_KEY_KP_Add</code> (0xFFAB)</td>
      <td><code>KEYCODE_NUMPAD_ADD</code> (157)</td>
    </tr>
    <tr>
      <td><code>"Clear"</code></td>
      <td>テンキーの<kbd>クリア</kbd>キー。</td>
      <td></td>
      <td><code>kVK_ANSI_KeypadClear</code> (0x47)</td>
      <td>
        <code>GDK_KEY_Clear</code> (0xFF0B)<br /><code>Qt::Key_Clear</code>
        (0x0100000B)
      </td>
      <td><code>KEYCODE_CLEAR</code> (28)</td>
    </tr>
    <tr>
      <td><code>"Divide"</code> [1] {{deprecated_inline}}</td>
      <td>テンキーの除算キー、<kbd>/</kbd>。</td>
      <td><code>VK_DIVIDE</code> (0x6F)</td>
      <td><code>kVK_ANSI_KeypadDivide</code> (0x4B)</td>
      <td>
        <code>GDK_KEY_KP_Divide</code> (0xFFAF)<br /><code>Qt::Key_Slash</code>
        (0x2F)
      </td>
      <td><code>KEYCODE_NUMPAD_DIVIDE</code> (154)</td>
    </tr>
    <tr>
      <td><code>"Subtract"</code> [1] {{deprecated_inline}}</td>
      <td>テンキーの減算キー、<kbd>-</kbd>。</td>
      <td><code>VK_SUBTRACT</code> (0x6D)</td>
      <td><code>kVK_ANSI_KeypadMinus</code> (0x4E)</td>
      <td><code>GDK_KEY_KP_Subtract</code> (0xFFAD)</td>
      <td><code>KEYCODE_NUMPAD_SUBTRACT</code> (156)</td>
    </tr>
    <tr>
      <td><code>"Separator"</code> [1]</td>
      <td>
        <p>テンキーの区切り文字。</p>
        <p>
          （米国ではカンマですが、他の国ではピリオドになることがよくあります）。
        </p>
      </td>
      <td><code>VK_SEPARATOR</code> (0x6C)</td>
      <td><code>kVK_JIS_KeypadComma</code> (0x5F)</td>
      <td><code>GDK_KEY_KP_Separator</code> (0xFFAC)<br /> </td>
      <td><code>KEYCODE_NUMPAD_COMMA</code> (159)</td>
    </tr>
    <tr>
      <td><code>"0"</code> から <code>"9"</code> まで</td>
      <td>テンキーの実際の数字キー。</td>
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
  </tbody>
</table>

\[1] 古いブラウザーでは `"Add"`、`"Decimal"`、`"Multiply"` などの言葉を使用していましたが、現代のブラウザーでは実際の文字（`"+"`, `"."`, `"*"` など）を使用しています。
