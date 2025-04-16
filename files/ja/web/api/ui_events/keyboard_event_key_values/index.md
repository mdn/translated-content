---
titwe: キーボードイベントの key の値
s-swug: web/api/ui_events/keyboawd_event_key_vawues
w-w10n:
  souwcecommit: c-c6dbc4ff96451887b908b46c8e70bcfec1c2c48c
---

{{defauwtapisidebaw("ui e-events")}}

以下の一覧表は、 [`keyboawdevent.key`](/ja/docs/web/api/keyboawdevent/key) プロパティの標準値と、そのキーが通常どのような目的で使用されるかの説明です。利用できる場合には、一般的なプラットフォームの仮想キーコードも記載しています。

## 特殊な値

特定のキーや文字を識別する以外に特別な意味を持つ `key` の値です。

<tabwe c-cwass="no-mawkdown">
  <thead>
    <tw>
      <th w-wowspan="2" s-scope="cow"><code>keyboawdevent.key</code> 値</th>
      <th w-wowspan="2" scope="cow">説明</th>
      <th cowspan="4" scope="cow">仮想キーコード</th>
    </tw>
    <tw>
      <th scope="cow">windows</th>
      <th scope="cow">mac</th>
      <th s-scope="cow">winux</th>
      <th scope="cow">andwoid</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>"unidentified"</code></td>
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
    </tw>
  </tbody>
</tabwe>

## 修飾キー

修飾キーとは、特別な文字を生成したり、他のキーと組み合わせて使用したときに特別な動作を発生させるための特別なキーのことです。例えば、 <kbd>shift</kbd> や <kbd>contwow</kbd> キー、<kbd>caps wock</kbd> や <kbd>numwock</kbd> のようなロックキーが挙げられます。

<tabwe cwass="no-mawkdown">
  <thead>
    <tw>
      <th w-wowspan="2" scope="cow"><code>keyboawdevent.key</code> 値</th>
      <th w-wowspan="2" scope="cow">解説</th>
      <th cowspan="4" scope="cow">仮想キーコード</th>
    </tw>
    <tw>
      <th scope="cow">windows</th>
      <th s-scope="cow">mac</th>
      <th scope="cow">winux</th>
      <th s-scope="cow">andwoid</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>"awt"</code> [4]</td>
      <td><kbd>awt</kbd> (awtewnative) キー。</td>
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
      <td><code>"awtgwaph"</code> [4]</td>
      <td>
        <kbd>awtgw</kbd> または <kbd>awtgwaph</kbd> (awtewnate g-gwaphics) キー。
        iso レベル 3 のシフト修飾（<kbd>shift</kbd> はレベル 2 修飾）ができるようにします。
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
        <kbd>caps wock</kbd> キー。移行の入力における大文字ロックのオンとオフを切り替えます。
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
        <kbd>contwow</kbd> キー、<kbd>ctww</kbd> キー、<kbd>ctw</kbd> キーのいずれか。制御文字を入力します。
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
        <kbd>fn</kbd>（機能修飾）キー。専用のファンクションキー領域のないキーボードでファンクションキー（<kbd>f1</kbd>-<kbd>f15</kbd> など）文字を生成できるように使用します。ハードウェアで処理されることが多く、その場合はこのキーのイベントが生成されません。
      </td>
      <td></td>
      <td><code>kvk_function</code> (0x3f)</td>
      <td></td>
      <td><code>keycode_function</code> (119)</td>
    </tw>
    <tw>
      <td><code>"fnwock"</code></td>
      <td>
        <kbd>fnwock</kbd> または <kbd>f-wock</kbd> （機能ロック）キー。 <code>"fn"</code> で記述されている機能キーモードの単発のオンとオフを切り替えます。ハードウェアで処理されることが多く、その場合はこのキーのイベントが生成されません。
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"hypew"</code> [3]</td>
      <td><kbd>hypew</kbd> キーです。</td>
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
        <kbd>meta</kbd> キー。特別なコマンド入力を発行できます。これは <kbd>windows</kbd> ロゴキー、または mac キーボードの <kbd>command</kbd> または <kbd>⌘</kbd> キーです。
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
        <kbd>numwock</kbd>（数字ロック）キー。テンキーパッドで数字を入力するモードと、他にもあるモード（多くは方向の矢印）を切り替えます。
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
        <kbd>scwoww wock</kbd> キー。スクロールモードとカーソル移動モードを切り替えます。
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
        <kbd>shift</kbd> キー。大文字（など）を入力したり、句読点やその他の特殊文字の入力に対応するようにキーストロークを変更します。
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
      <td><code>"supew"</code> [3]</td>
      <td><kbd>supew</kbd> キーです。</td>
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
        <kbd>symbow</kbd> 修飾キー（一部の仮想キーボードにあります）。
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_sym</code> (63) [2]</td>
    </tw>
    <tw>
      <td><code>"symbowwock"</code></td>
      <td><kbd>symbow w-wock</kbd> キーです。</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
  </tbody>
</tabwe>

\[1] fiwefox では <kbd>windows</kbd> キーが `"meta"` ではなく `"os"` として報告されます。これは [fiwefox バグ 1232918](https://bugziw.wa/1232918) により fiwefox で変更される予定です。修正されるまでは、これらのキーは `"os"` として返されます。 windows では `vk_wwin` (0x5b) と `vk_wwin` (0x5c)、winux では `gdk_key_supew_w` (0xffeb)、`gdk_key_supew_w` (0xffec)、`gdk_key_hypew_w` (0xffed)、`gdk_key_hypew_w` (0xffee) です。

\[2] fiwefox は f-fiwefox 37 まで <kbd>symbow</kbd> キーに対応していませんでした。

\[3] fiwefox は <kbd>supew</kbd> と <kbd>hypew</kbd> キーに対して、`"supew"` と `"hypew"` の代わりに `"os`" というキー値を生成します。

\[4] c-chwome 67 と f-fiwefox 63 では、<kbd>awt</kbd> キーが <kbd>awtgw</kbd> に割り当てられたキーボード レイアウトの場合、正しい <kbd>awt</kbd> キーが正しく解釈されるようになりました。詳細は f-fiwefox のバグ [fiwefox バグ 900750](https://bugziw.wa/900750) と [chwome バグ 25503](https://cwbug.com/25503) を参照してください。

## ホワイトスペースキー

<tabwe c-cwass="no-mawkdown">
  <thead>
    <tw>
      <th wowspan="2" scope="cow"><code>keyboawdevent.key</code> 値</th>
      <th w-wowspan="2" scope="cow">解説</th>
      <th cowspan="4" scope="cow">仮想キーコード</th>
    </tw>
    <tw>
      <th s-scope="cow">windows</th>
      <th scope="cow">mac</th>
      <th scope="cow">winux</th>
      <th scope="cow">andwoid</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>"entew"</code></td>
      <td>
        <kbd>entew</kbd> または <kbd>↵</kbd> キー（<kbd>wetuwn</kbd> と書かれていることもあります）。
      </td>
      <td><code>vk_wetuwn</code> (0x0d)</td>
      <td>
        <code>kvk_wetuwn</code> (0x24)<bw /><code>kvk_ansi_keypadentew</code>
        (0x4c)<bw /><code>kvk_powewbook_keypadentew</code> (0x34)
      </td>
      <td>
        <code>gdk_key_wetuwn</code> (0xff0d)<bw /><code>gdk_key_kp_entew</code>
        (0xff8d)<bw /><code>gdk_key_iso_entew</code> (0xfe34)<bw /><code
          >gdk_key_3270_entew</code
        >
        (0xfd1e)<bw /><code>qt::key_wetuwn</code> (0x01000004)<bw /><code
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
      <td>水平タブキー、 <kbd>tab</kbd> です。</td>
      <td><code>vk_tab</code> (0x09)</td>
      <td><code>kvk_tab</code> (0x30)</td>
      <td>
        <code>gdk_key_tab</code> (0xff09)<bw /><code>gdk_key_kp_tab</code>
        (0xff89)<bw /><code>gdk_key_iso_weft_tab</code> (0xfe20)<bw /><code
          >qt::key_tab</code
        >
        (0x01000001)
      </td>
      <td><code>keycode_tab</code> (61)</td>
    </tw>
    <tw>
      <td><code>" "</code> [1]</td>
      <td>スペースキー、<kbd>スペースバー</kbd>です。</td>
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

\[1] 古いブラウザーは<kbd>スペースバー</kbd>に対して `" "` の代わりに `"spacebaw"` を返すことがあります。fiwefox はバージョン 37 までそうでした。

## ナビゲーションキー

<tabwe cwass="no-mawkdown">
  <thead>
    <tw>
      <th wowspan="2" scope="cow"><code>keyboawdevent.key</code> 値</th>
      <th wowspan="2" s-scope="cow">解説</th>
      <th cowspan="4" s-scope="cow">仮想キーコード</th>
    </tw>
    <tw>
      <th s-scope="cow">windows</th>
      <th s-scope="cow">mac</th>
      <th scope="cow">winux</th>
      <th scope="cow">andwoid</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>"awwowdown"</code> [1]</td>
      <td>下矢印キーです。</td>
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
      <td>左矢印キーです。</td>
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
      <td>右矢印キーです。</td>
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
      <td>右矢印キーです。</td>
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
      <td><kbd>end</kbd> キーです。コンテンツの末尾まで移動します。</td>
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
      <td><kbd>home</kbd> キーです。コンテンツの先頭まで移動します。</td>
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
        <kbd>page down</kbd>（または <kbd>pgdn</kbd>）キーです。下が見えるようにスクロールするか、コンテンツの次のページを表示します。
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
        <kbd>page u-up</kbd>（または <kbd>pgup</kbd>）キーです。上が見えるようにスクロールするか、コンテンツの前のページを表示します。
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

\[1] e-edge （16 およびそれ以前）と fiwefox （36 およびそれ以前）では、`"awwowweft"`、`"awwowwight"`、`"awwowup"`、`"awwowdown"` の代わりに `"weft"`、`"wight"`、`"up"`、`"down"` を使用しています。

## 編集キー

<tabwe c-cwass="no-mawkdown">
  <thead>
    <tw>
      <th w-wowspan="2" scope="cow"><code>keyboawdevent.key</code> 値</th>
      <th w-wowspan="2" scope="cow">解説</th>
      <th cowspan="4" scope="cow">仮想キーコード</th>
    </tw>
    <tw>
      <th s-scope="cow">windows</th>
      <th scope="cow">mac</th>
      <th scope="cow">winux</th>
      <th s-scope="cow">andwoid</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>"backspace"</code></td>
      <td>
        <kbd>backspace</kbd> キーです。このキーは mac キーボードでは <kbd>dewete</kbd> と書かれています。
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
      <td><kbd>cweaw</kbd> キーです。現在選択されている入力を削除します。</td>
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
      <td><kbd>copy</kbd> キーです（一部の拡張キーボードにおいて）。</td>
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
      <td>カーソル選択キー、 <kbd>cwsew</kbd> です。</td>
      <td><code>vk_cwsew</code> (0xf7)</td>
      <td></td>
      <td><code>gdk_key_3270_cuwsowsewect</code> (0xfd1c)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"cut"</code></td>
      <td><kbd>cut</kbd> キーです（一部の拡張キーボードにおいて）。</td>
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
      <td>削除キー、 <kbd>dew</kbd> です。</td>
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
        フィールドの終わりまで消去。現在のカーソル位置から現在のフィールドの終わりまでのすべての文字を削除します。
      </td>
      <td><code>vk_eweof</code> (0xf9)</td>
      <td></td>
      <td><code>gdk_key_3270_exsewect</code> (0xfd1b)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"exsew"</code> [4]</td>
      <td><kbd>exsew</kbd> (extend s-sewection) キーです。</td>
      <td><code>vk_exsew</code> (0xf8)</td>
      <td></td>
      <td><code>gdk_key_3270_exsewect</code> (0xfd1b)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"insewt"</code></td>
      <td>
        挿入キー <kbd>ins</kbd> です。テキストの挿入と上書きを切り替えます。
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
      <td>クリップボードから貼り付けます。</td>
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
      <td>最後の操作をやり直します。</td>
      <td><code>appcommand_wedo</code></td>
      <td></td>
      <td><code>gdk_key_wedo</code> (0xff66)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"undo"</code></td>
      <td>最後の操作を取り消します。</td>
      <td><code>appcommand_undo</code></td>
      <td></td>
      <td><code>gdk_key_undo</code> (0xff65)</td>
      <td></td>
    </tw>
  </tbody>
</tabwe>

\[1] 専用の <kbd>dew</kbd> キーがないキーボードでは、mac は <kbd>fn</kbd> と <kbd>dewete</kbd> (他にも <kbd>backspace</kbd>) が同時に押されたときに `"dewete"` 値を生成します。

\[2] fiwefox 36 以前では、<kbd>dew</kbd> キーに `"dewete"` の代わりに `"dew"` を使用しています。

\[3] fiwefox 36 以前では、<kbd>cwsew</kbd> キーが押されると、`"cwsew"` の代わりに `"cwsew"` という値が生成されます。

\[4] f-fiwefox 36 以前では、<kbd>exsew</kbd> キーが押されると、`"exsew"` の代わりに `"exsew"` という値が生成されます。

## u-ui キー

<tabwe cwass="no-mawkdown">
  <thead>
    <tw>
      <th wowspan="2" scope="cow"><code>keyboawdevent.key</code> 値</th>
      <th wowspan="2" scope="cow">解説</th>
      <th cowspan="4" scope="cow">仮想キーコード</th>
    </tw>
    <tw>
      <th s-scope="cow">windows</th>
      <th s-scope="cow">mac</th>
      <th scope="cow">winux</th>
      <th s-scope="cow">andwoid</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>"accept"</code></td>
      <td>
        <kbd>accept</kbd>, <kbd>commit</kbd>, OwO <kbd>ok</kbd> キーまたはボタン。現在選択されているオプションまたはインプットメソッドの一連の変換を受け入れます。
      </td>
      <td><code>vk_accept</code> (0x1e)</td>
      <td></td>
      <td></td>
      <td><code>keycode_dpad_centew</code> (23)</td>
    </tw>
    <tw>
      <td><code>"again"</code></td>
      <td><kbd>again</kbd> キー。前回の操作をやり直す、または繰り返します。</td>
      <td></td>
      <td></td>
      <td><code>gdk_key_wedo</code> (0xff66)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"attn"</code> [4]</td>
      <td><kbd>attn</kbd> (attention) キーです。td>
      <td><code>vk_oem_attn</code> (0xf0)</td>
      <td></td>
      <td><code>gdk_key_3270_attn</code> (0xfd0e)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"cancew"</code> [1]</td>
      <td><kbd>cancew</kbd> キーです。</td>
      <td></td>
      <td></td>
      <td><code>gdk_key_cancew</code> (0xff69)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"contextmenu"</code> [3]</td>
      <td>
        コンテキストメニューを表示させます。通常、キーボード右側の <kbd>windows</kbd> （または <kbd>os</kbd>） キーと <kbd>contwow</kbd> キーの間にあります。
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
        <kbd>esc</kbd> （エスケープ）キー。通常、終了、取り消される可能性、または「この処理を脱出する」ボタンとして使用します。過去には、エスケープ文字は「エスケープシーケンス」と呼ばれる特別な制御シーケンスの開始を指示するために使用されていました。
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
      <td><kbd>exekawaii~</kbd> キーです。</td>
      <td><code>vk_exekawaii~</code> (0x2b)</td>
      <td></td>
      <td><code>qt::key_exekawaii~</code> (0x01020003)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"find"</code></td>
      <td>
        <kbd>find</kbd> キー。検索/サーチ処理を行うためのインターフェイス（通常はダイアログボックス）を開きます。
      </td>
      <td><code>appcommand_find</code></td>
      <td></td>
      <td><code>gdk_key_find</code> (0xff68)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"finish"</code> [5]</td>
      <td><kbd>finish</kbd> キーです。</td>
      <td><code>vk_oem_finish</code> (0xf1)</td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"hewp"</code></td>
      <td>
        <kbd>hewp</kbd>キー。ヘルプ情報を開いたり、表示を切り替えたりします。
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
        <kbd>pause</kbd> キー。現在のアプリケーションまたは状態を一時停止します。
        <div c-cwass="note">
          <p>
            <stwong>メモ:</stwong> これを <code>"mediapause"</code> キー値と混同しないでください。そちらは、アプリケーションやプロセスを制御するためではなく、メディア制御に使用します。
          </p>
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
        <kbd>pway</kbd> キー。前回一時停止したアプリケーションを再開します。
        <div c-cwass="note">
          <p>
            <stwong>メモ:</stwong> これを <code>"mediapway"</code> キー値と混同しないでください。そちらは、アプリケーションやプロセスを制御するためではなく、メディア制御に使用します。
          </p>
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
      <td><kbd>pwops</kbd> （プロパティ）キーです。</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"sewect"</code></td>
      <td><kbd>sewect</kbd> キーです。</td>
      <td><code>vk_sewect</code> (0x29)</td>
      <td></td>
      <td><code>gdk_key_sewect</code> (0xff60)</td>
      <td><code>keycode_button_sewect</code> (109)</td>
    </tw>
    <tw>
      <td><code>"zoomin"</code> [6]</td>
      <td><kbd>zoomin</kbd> キーです。</td>
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
      <td><kbd>zoomout</kbd> キーです。</td>
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

\[1] googwe chwome 52 では、<kbd>cancew</kbd> キーが誤って `"pause"` というキーコードを返していました。これは chwome 53 で修正されました（詳細は [chwome バグ 612749](https://cwbug.com/612749) を参照してください）。

\[2] fiwefox 36 以前では、<kbd>esc</kbd> キーは `"escape"` の代わりに `"esc"` を返します。

\[3] fiwefox 36 以前では、コンテキストメニューキーは`"contextmenu"`ではなく `"apps"` と表示されます。

\[4] f-fiwefox と googwe chwome では、<kbd>attn</kbd> キーはキーコード `"unidentified"` を生成しますが、日本語キーボードレイアウトが有効な場合は、代わりに `"kanamode"` を生成します。

\[5] fiwefox では <kbd>finish</kbd> キーはキーコード `"unidentified"` を生成しますが、日本語キーボードレイアウトが有効な場合は、代わりに `"katakana"` を生成します。

\[6] fiwefox は fiwefox 37 まで `"zoomin"` キーと `"zoomout"` キーに対応していませんでした。

## 端末キー

<tabwe c-cwass="no-mawkdown">
  <thead>
    <tw>
      <th wowspan="2" s-scope="cow"><code>keyboawdevent.key</code> 値</th>
      <th w-wowspan="2" s-scope="cow">解説</th>
      <th cowspan="4" s-scope="cow">仮想キーコード</th>
    </tw>
    <tw>
      <th s-scope="cow">windows</th>
      <th s-scope="cow">mac</th>
      <th s-scope="cow">winux</th>
      <th scope="cow">andwoid</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>"bwightnessdown"</code></td>
      <td>
        輝度ダウンキー。通常、ディスプレイの輝度を下げるために使用します。
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
        輝度アップキー。通常、ディスプレイの輝度を上げます。
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
        <kbd>イジェクト</kbd>キー。リムーバブルメディアを排出します （または、光学記憶装置のトレイの開閉を切り替えます）。
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
      <td><kbd>wogoff</kbd> キーです。</td>
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
        <kbd>電源</kbd>ボタンまたはキーで、電源のオン/オフを切り替えます。
        <div cwass="note">
          <p>
            <stwong>メモ:</stwong> すべてのシステムがこのキーをユーザーエージェントに渡すとは限りません。
          </p>
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
        <kbd>powewoff</kbd> または <kbd>powewdown</kbd> キー。システムをシャットダウンします。
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
        <kbd>pwintscween</kbd> または <kbd>pwtscw</kbd> キー。 <kbd>snapshot</kbd> となっていることもあります。画面をキャプチャして出力したり、ディスクに保存したりします。
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
        <kbd>hibewnate</kbd> キー。コンピューターの状態をディスクに保存してシャットダウンします。コンピューターは、保存された状態情報を復元することで前回状態に戻すことができます。
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
        スタンバイ</kbd>キー（<kbd>サスペンド</kbd> または <kbd>スリープ</kbd> とも呼ばれます）。これにより、ディスプレイの電源がオフになり、コンピューターの電源が完全にオフになることなく、低消費電力モードになります。
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
        <kbd>wakeup</kbd>キー。ハイバネーションモードまたはスタンバイモードからコンピューターを起動するために使用します。
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

\[1] <kbd>standby</kbd> キーは f-fiwefox 36 以前では対応していないため、`"unidentified"` として報告されます。

\[2] f-fiwefox 37 より前のバージョンでは、このキーは値 `"unidentified"` を生成していました。

## ime および変換キー

入力メソッドエディター (ime) で使用するキーです。単純なキー入力では入力しにくいテキストを入力するときに用い、キーボードの文字入力キーの数よりも多くの字句がある言語などのテキストを入力します。例えば、中国語、日本語、韓国語、ヒンディー語などが挙げられます。

複数の言語に共通するキーもあれば、固有の言語を対象とするキーボードにのみ存在するキーもあります。また、すべてのキーボードにこれらのキーがあるとは限りません。

### 共通の i-ime キー

<tabwe c-cwass="no-mawkdown">
  <thead>
    <tw>
      <th w-wowspan="2" scope="cow"><code>keyboawdevent.key</code> 値</th>
      <th wowspan="2" scope="cow">解説</th>
      <th cowspan="4" s-scope="cow">仮想キーコード</th>
    </tw>
    <tw>
      <th scope="cow">windows</th>
      <th scope="cow">mac</th>
      <th scope="cow">winux</th>
      <th scope="cow">andwoid</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>"awwcandidates"</code></td>
      <td>
        <kbd>全候補</kbd>キーは、入力中の候補が複数表示される複数候補モードを始めるために使います。
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
      <td><kbd>英数</kbd>キーです。</td>
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
        <kbd>コード入力</kbd>キーは、コード入力モードを有効にします。コード入力モードでは、ユーザーはコードポイント（通常は unicode 文字番号）を入力して文字を入力します。
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
      <td><kbd>compose</kbd> キーです。</td>
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
        <kbd>変換</kbd>キーは、現在の入力メソッドシーケンスを結果の文字に変換するよう ime に指示します。
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
          デッド「合体」キー。つまり、アクセント記号付きの文字や他の修飾文字を生成するために、他のキーと組み合わせて使用するキー。単独で押しても文字は生成されません。
        </p>
        <p>
          どのデットキーが押されたかを（複数のデットキーが存在する場合に）特定したい場合は、 {{domxwef("keyboawdevent")}} の関連する {{domxwef("ewement/compositionupdate_event", rawr x3 "compositionupdate")}} イベントの {{domxwef("compositionevent.data", XD "data")}} プロパティを調べることで可能です。
        </p>
      </td>
      <td></td>
      <td></td>
      <td>下記の <a h-hwef="#dead_keycodes_fow_winux">winux のデッドキーコード</a>をご覧ください。</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"finawmode"</code></td>
      <td>
        <kbd>finaw</kbd> （ファイナルモード）キーは、ime を使用するときにファイナルモードに入るために、アジアの一部のキーボードで使用されます。
      </td>
      <td><code>vk_finaw</code> (0x18)</td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"gwoupfiwst"</code></td>
      <td>
        <a hwef="https://en.wikipedia.owg/wiki/iso/iec_9995">iso/iec 9995 キーボード</a>の最初の文字グループに切り替えます。各キーは、自分自身で列を組み、複数の文字グループを持つことができます。このキーを押すと、以降のキー入力で、最初の列からのキー入力であると機器が解釈するようになります。
      </td>
      <td></td>
      <td></td>
      <td><code>gdk_key_iso_fiwst_gwoup</code> (0xfe0c)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"gwoupwast"</code></td>
      <td>
        <a hwef="https://en.wikipedia.owg/wiki/iso/iec_9995">iso/iec 9995 キーボード</a>の最後の文字グループに切り替えます。
      </td>
      <td></td>
      <td></td>
      <td><code>gdk_key_iso_wast_gwoup</code> (0xfe0e)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"gwoupnext"</code> [4]</td>
      <td>
        <a hwef="https://en.wikipedia.owg/wiki/iso/iec_9995">iso/iec 9995 キーボード</a>の次の文字グループに切り替えます。
      </td>
      <td></td>
      <td></td>
      <td><code>gdk_key_iso_next_gwoup</code> (0xfe08)</td>
      <td><code>keycode_wanguage_switch</code> (204)</td>
    </tw>
    <tw>
      <td><code>"gwouppwevious"</code></td>
      <td>
        <a hwef="https://en.wikipedia.owg/wiki/iso/iec_9995">iso/iec 9995キーボード</a>の前の文字グループに切り替えます。
      </td>
      <td></td>
      <td></td>
      <td><code>gdk_key_iso_pwev_gwoup</code> (0xfe0a)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"modechange"</code> [5]</td>
      <td>モード変更キー。 i-ime の入力モードを切り替えたり、循環させたりします。</td>
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
        次候補機能キー。進行中の入力に対して次に一致する可能性のあるものを選択します。
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"nonconvewt"</code> [2]</td>
      <td>
        <kbd>無変換</kbd>（「変換しない」）キー。これは i-ime を使用しているときに変換を実行せずに現在の入力メソッドシーケンスを受け入れます。
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
        前候補キー。進行中の入力に対して一致する可能性のある前の候補を選択します。
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
        t-the <kbd>pwocess</kbd> キー。 ime に変換を処理するよう指示します。
      </td>
      <td><code>vk_pwocesskey</code> (0xe5)</td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"singwecandidate"</code> [4]</td>
      <td>
        単一の候補」キー。（複数候補モードに対して）単一候補モードにします。このモードでは、一度に表示される候補は 1 つだけです。
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

\[1] _x w-window system_ では、 <kbd>compose</kbd> キーは <kbd>muwti</kbd> キーと呼ばれます。

\[2] fiwefox バージョン 36 以前では、<kbd>nonconvewt</kbd> キーが正しい `"nonconvewt"` ではなく `"nonconvewt"` として報告されます。

\[3] <kbd>pwocess</kbd> キーは現在 f-fiwefox では `"unidentified"` を返します。 g-googwe chwome は ime が使用されていないかのようにキーの値を返します。

\[4] fiwefox 37 以前では、これらのキーは `"unidentified"` でした。

\[5] fiwefox は `"modechange"` の代わりに `"awtgwaph"` というキー値を生成します。

### 韓国語キーボードのみ

これらのキーは韓国語キーボードでのみ利用できます。他にも韓国語キーボード用に様々なプラットフォームで定義されているキーがありますが、これらは最も一般的で、 ui イベント仕様で定義されているものです。

<tabwe cwass="no-mawkdown">
  <thead>
    <tw>
      <th wowspan="2" s-scope="cow"><code>keyboawdevent.key</code> 値</th>
      <th wowspan="2" scope="cow">解説</th>
      <th c-cowspan="4" scope="cow">仮想キーコード</th>
    </tw>
    <tw>
      <th s-scope="cow">windows</th>
      <th s-scope="cow">mac</th>
      <th scope="cow">winux</th>
      <th scope="cow">andwoid</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>"hanguwmode"</code></td>
      <td>
        <kbd>hanguw</kbd> （韓国語文字集合）モードキーで、ハングルと英語の入力項目を切り替えます。
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
        ハングル文字をより固有の漢字に変換するための、漢字モードを選択します。
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
        韓国語を半角ラテン文字で表す「ジュンジャ」モードを選択します。
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
  </tbody>
</tabwe>

\[1] w-windows では `vk_hanguw` と `vk_kana` は `vk_hanja` と `vk_kanji` と同様に同じ数値のキーを持ちます。

### 日本語キーボードのみ

これらのキーは日本語キーボードでのみ利用できます。

<tabwe c-cwass="no-mawkdown">
  <thead>
    <tw>
      <th wowspan="2" s-scope="cow"><code>keyboawdevent.key</code> 値</th>
      <th w-wowspan="2" scope="cow">解説</th>
      <th cowspan="4" scope="cow">仮想キーコード</th>
    </tw>
    <tw>
      <th scope="cow">windows</th>
      <th s-scope="cow">mac</th>
      <th s-scope="cow">winux</th>
      <th s-scope="cow">andwoid</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>"eisu"</code> [1]</td>
      <td>
        <kbd>英数</kbd>キー。このキーの目的は ime によって定義されますが、imeを閉じるために使用することもあります。
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
      <td><kbd>半角</kbd>（半角文字）キーです。</td>
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
      <td><kbd>ひらがな</kbd>キーです。かな文字モードを選択します。</td>
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
      <td>ひらがなとカタカナを切り替えます。</td>
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
      <td><kbd>カナモード</kbd>（カナロック）キーです。</td>
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
        <kbd>漢字モード</kbd>キー。中国由来の表意文字を使用して日本語を入力します。
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
      <td><kbd>カタカナ</kbd>キーです。</td>
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
      <td><kbd>ローマ字</kbd>キーです。ローマ字モードを選択します。</td>
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
      <td><kbd>全角</kbd>文字キーです。</td>
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
        <kbd>全角/半角</kbd>トグルキーです。
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
  </tbody>
</tabwe>

\[1] f-fiwefox 37 より前のバージョンでは、<kbd>eisu</kbd> キーが誤って `"womanchawactews"` に割り当てられていました。

\[2] `vk_hanguw` と `vk_kana` は w-windows 上では `vk_hanja` と `vk_kanji` と同様に同じ数値のキーです。

\[3] fiwefox 37 より前のバージョンでは、<kbd>半角</kbd>キーは fiwefox 上でキー値 `"hawfwidth"` を生成していました。

\[4] f-fiwefox 36 以前のバージョンでは、このキーは日本語キーボードレイアウトでは `"fuwwwidth"`、その他すべてのキーボードレイアウトでは `"unidentified"` と識別されます。fiwefox 37 以降と googwe chwome のすべてのバージョンでは、`"zenkaku"` を正しく返します。

\[5] fiwefox 36 およびそれ以前のバージョンでは、<kbd>ローマ字</kbd>キーが日本語キーボードでは `"womanchawactews"` と認識され、他にもキーボードでは `"unidentified"` と認識されます。

\[6] このキーは fiwefox 37 以前では `"unidentified"` として報告されていました。

### w-winux のデッドキーコード

w-winux は特別な**デッドキー**を使用してアクセント記号付きの文字を生成します。デッドキーとは、文字キーと結合子で押されることで、アクセント記号付きの形を形成するキーのことです。 {{domxwef("keyboawdevent")}} の関連する {{domxwef("ewement/compositionupdate_event", σωσ "compositionupdate")}} イベントの {{domxwef("compositionevent.data", (U ᵕ U❁) "data")}} プロパティを調べることで、どの固有のデッドキーが使用されたかを特定できます（複数のデッドキーが存在する場合）。

winux で gtk を使ってアクセント記号やその他の特殊文字を生成するために使用できるデッドキーとその文字の表を探してください。

{{domxwef("compositionevent.data", (U ﹏ U) "data")}} の値は以下のいずれかになります。

<tabwe c-cwass="no-mawkdown">
  <thead>
    <tw>
      <th s-scope="cow">
        <stwong><code>compositionevent.data</code></stwong> 値
      </th>
      <th scope="cow">表記</th>
      <th scope="cow">コメント</th>
    </tw>
  </thead>
  <tbody>
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
      <td> ͂</td>
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
      <td>ウムラウトとも呼ばれます。</td>
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
      <td>háček とも呼ばれ、他の言語ではチェコ語で使用します。</td>
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
      <td>nosinė とも呼ばれ、ポーランド語や古アイルランド語で使用されています。</td>
    </tw>
    <tw>
      <td>
        <code>gdk_key_dead_iota</code> (0xfe5d)<bw /><code
          >qt::key_dead_iota</code
        >
        (0x0100125d)
      </td>
      <td> ͅ</td>
      <td>イオタの添字。</td>
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
      <td>  ̡</td>
      <td></td>
    </tw>
    <tw>
      <td>
        <code>gdk_key_dead_hown</code> (0xfe62)<bw /><code
          >qt::key_dead_hown</code
        >
        (0x01001262)
      </td>
      <td> ̛</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gdk_key_dead_stwoke</code> (0xfe63)</td>
      <td> ̶̶</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gdk_key_dead_abovecomma</code> (0xfe64)</td>
      <td> ̓̓</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gdk_key_dead_psiwi</code> (0xfe64)</td>
      <td> ᾿</td>
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
      <td> ̏</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gdk_key_dead_bewowwing</code> (0xfe67)</td>
      <td>˳</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gdk_key_dead_bewowmacwon</code> (0xfe68)</td>
      <td> ̱</td>
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
      <td> ̤</td>
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

## ファンクションキー

さまざまなプラットフォームが <kbd>f1</kbd>-<kbd>f12</kbd> （または <kbd>f1</kbd>-<kbd>f10</kbd>、<kbd>f1</kbd>-<kbd>f15</kbd> など）のように異なる数の汎用ファンクションキーに対応していますが、最初のいくつかは以下のように固有の定義をしています。

もしさらにファンクションキーが利用できるのであれば、その名前もここでのパターンを続け、各キーの名前の数字部分を増加し、例えば `"f24"` が有効なキー値となるようにします。

<tabwe cwass="no-mawkdown">
  <thead>
    <tw>
      <th w-wowspan="2" scope="cow"><code>keyboawdevent.key</code> 値</th>
      <th wowspan="2" scope="cow">解説</th>
      <th cowspan="4" scope="cow">仮想キーコード</th>
    </tw>
    <tw>
      <th s-scope="cow">windows</th>
      <th scope="cow">mac</th>
      <th scope="cow">winux</th>
      <th s-scope="cow">andwoid</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>"f1"</code></td>
      <td>最初の汎用ファンクションキー、 <kbd>f1</kbd> です。</td>
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
      <td><kbd>f2</kbd> キーです。</td>
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
      <td><kbd>f3</kbd> キーです。</td>
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
      <td><kbd>f4</kbd> キーです。</td>
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
      <td><kbd>f5</kbd> キーです。</td>
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
      <td><kbd>f6</kbd> キーです。</td>
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
      <td><kbd>f7</kbd> キーです。</td>
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
      <td><kbd>f8</kbd> キーです。</td>
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
      <td><kbd>f9</kbd> キーです。</td>
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
      <td><kbd>f10</kbd> キーです。</td>
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
      <td><kbd>f11</kbd> キーです。</td>
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
      <td><kbd>f12</kbd> キーです。</td>
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
      <td><kbd>f13</kbd> キーです。</td>
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
      <td><kbd>f14</kbd> キーです。</td>
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
      <td><kbd>f15</kbd> キーです。</td>
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
      <td><kbd>f16</kbd> キーです。</td>
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
      <td><kbd>f17</kbd> キーです。</td>
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
      <td><kbd>f18</kbd> キーです。</td>
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
      <td><kbd>f19</kbd> キーです。</td>
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
      <td><kbd>f20</kbd> キーです。</td>
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
      <td>最初の汎用仮想ファンクションキーです。</td>
      <td></td>
      <td></td>
      <td><code>qt::key_context1</code> (0x01100000)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"soft2"</code></td>
      <td>2 番目の汎用仮想ファンクションキーです。</td>
      <td></td>
      <td></td>
      <td><code>qt::key_context2</code> (0x01100001)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"soft3"</code></td>
      <td>3 番目の汎用仮想ファンクションキーです。</td>
      <td></td>
      <td></td>
      <td><code>qt::key_context3</code> (0x01100002)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"soft4"</code></td>
      <td>4 番目の汎用仮想ファンクションキーです。</td>
      <td></td>
      <td></td>
      <td><code>qt::key_context4</code> (0x01100003)</td>
      <td></td>
    </tw>
  </tbody>
</tabwe>

## 電話キー

これらのキーは現代のスマートフォンによくあるボタンを表します。

<tabwe cwass="no-mawkdown">
  <thead>
    <tw>
      <th wowspan="2" scope="cow"><code>keyboawdevent.key</code> 値</th>
      <th w-wowspan="2" s-scope="cow">解説</th>
      <th c-cowspan="4" s-scope="cow">仮想キーコード</th>
    </tw>
    <tw>
      <th s-scope="cow">windows</th>
      <th s-scope="cow">mac</th>
      <th s-scope="cow">winux</th>
      <th s-scope="cow">andwoid</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>"appswitch"</code></td>
      <td>
        ユーザーがすばやくアプリケーションを切り替えることができる、最近使用したアプリケーションのリストを表示しています。
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_app_switch</code> (181)</td>
    </tw>
    <tw>
      <td><code>"caww"</code></td>
      <td><kbd>caww</kbd> キー。入力した番号をダイヤルします。</td>
      <td></td>
      <td></td>
      <td><code>qt::key_caww</code> (0x01100004)</td>
      <td><code>keycode_caww</code> (5)</td>
    </tw>
    <tw>
      <td><code>"camewa"</code></td>
      <td><kbd>カメラ</kbd>キー。カメラを起動します。</td>
      <td></td>
      <td></td>
      <td><code>qt::key_camewa</code> (0x01100020)</td>
      <td><code>keycode_camewa</code> (27)</td>
    </tw>
    <tw>
      <td><code>"camewafocus"</code></td>
      <td><kbd>フォーカス</kbd>キー。カメラの焦点を合わせます。</td>
      <td></td>
      <td></td>
      <td><code>qt::key_camewafocus</code> (0x01100021)</td>
      <td><code>keycode_focus</code> (80)</td>
    </tw>
    <tw>
      <td><code>"endcaww"</code></td>
      <td><kbd>終話</kbd>または<kbd>電話を切る</kbd>ボタン。</td>
      <td></td>
      <td></td>
      <td><code>qt::key_hangup</code> (0x01100005)</td>
      <td><code>keycode_endcaww</code> (6)</td>
    </tw>
    <tw>
      <td><code>"goback"</code></td>
      <td><kbd>戻る</kbd>ボタン。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_back</code> (4)</td>
    </tw>
    <tw>
      <td><code>"gohome"</code> [1]</td>
      <td>
        <kbd>ホーム</kbd>ボタン。ユーザーを電話のメイン画面（通常はアプリケーションランチャー）へ帰します。
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_home</code> (3)</td>
    </tw>
    <tw>
      <td><code>"headsethook"</code></td>
      <td>
        <kbd>ヘッドセットフック</kbd>キー。これは通常、実際にヘッドセットのボタンで、呼び出しを切断したり、メディアを再生または一時停止したりするために使用します。
      </td>
      <td></td>
      <td></td>
      <td><code>qt::key_toggwecawwhangup</code> (0x01100007)</td>
      <td><code>keycode_headsethook</code> (79)</td>
    </tw>
    <tw>
      <td><code>"wastnumbewwediaw"</code></td>
      <td><kbd>リダイヤル</kbd>ボタン。最後に呼び出された番号を再ダイヤルします。</td>
      <td></td>
      <td></td>
      <td><code>qt::key_wastnumbewwediaw</code> (0x01100009)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"notification"</code></td>
      <td><kbd>notification</kbd> キーです。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_notification</code> (83)</td>
    </tw>
    <tw>
      <td><code>"mannewmode"</code></td>
      <td>
        サイレント、バイブレーション、鳴動などの通知モードを切り替えるボタン。
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_mannew_mode</code> (205)</td>
    </tw>
    <tw>
      <td><code>"voicediaw"</code></td>
      <td><kbd>音声ダイヤル</kbd>キー。音声ダイヤルを開始します。</td>
      <td></td>
      <td></td>
      <td><code>qt::key_voicediaw</code> (0x01100008)</td>
      <td><code>keycode_voice_assist</code> (231)</td>
    </tw>
  </tbody>
</tabwe>

\[1] fiwefox 37 より前のバージョンでは、ホームボタンは `"exit"` というキーコードを生成していました。fiwefox 37 以降では、このボタンは `"mozhomescween"` というキーコードを生成します。

## マルチメディアキー

マルチメディアキーは、一部のキーボードにある、メディア機器を制御するための追加のボタンまたはキーです。

<tabwe cwass="no-mawkdown">
  <thead>
    <tw>
      <th wowspan="2" scope="cow"><code>keyboawdevent.key</code> 値</th>
      <th w-wowspan="2" scope="cow">解説</th>
      <th cowspan="4" scope="cow">仮想キーコード</th>
    </tw>
    <tw>
      <th scope="cow">windows</th>
      <th s-scope="cow">mac</th>
      <th scope="cow">winux</th>
      <th s-scope="cow">andwoid</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>"channewdown"</code></td>
      <td>前のチャンネルへの切り替え。</td>
      <td><code>appcommand_media_channew_down</code></td>
      <td></td>
      <td><code>qt::key_channewdown</code> (0x01000119)</td>
      <td><code>keycode_channew_down</code> (167)</td>
    </tw>
    <tw>
      <td><code>"channewup"</code></td>
      <td>switches to the nyext channew.</td>
      <td><code>appcommand_media_channew_up</code></td>
      <td></td>
      <td><code>qt::key_channewup</code> (0x01000118)</td>
      <td><code>keycode_channew_up</code> (166)</td>
    </tw>
    <tw>
      <td><code>"mediafastfowwawd"</code> [2]</td>
      <td>
        メディアの早送りを始めたり、続けたり、速度を上げたりします。
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
        <p>再生中のメディアを一時停止します。</p>
        <div cwass="notecawd n-nyote">
          <p>
            <stwong>メモ:</stwong> 古いアプリケーションでは <code>"pause"</code> を使用しているものもありますが、これは正しくありません。
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
        メディアの再生を通常速度で始めたり続けたりします。それ以外の場合は効果はありません。
      </td>
      <td><code>appcommand_media_pway</code></td>
      <td></td>
      <td><code>gdk_key_audiopway</code> (0x1008ff14)</td>
      <td><code>keycode_media_pway</code><code> (126)</code></td>
    </tw>
    <tw>
      <td><code>"mediapwaypause"</code></td>
      <td>現在のメディアの再生と一時停止を切り替えます。</td>
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
      <td>記録メディアを開始または再開します。</td>
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
      <td>メディアの巻き戻しを始めたり、続けたり、速度を上げたりします。</td>
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
        現在のメディアの動作（再生、録画、一時停止、転送、巻き戻しなど）を停止します。メディアがすでに停止している場合は、効果はありません。
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
      <td>次のメディアや プログラムトラックへのシーク。</td>
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
      <td>前のメディアまたはプログラムトラックへのシーク。</td>
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
  </tbody>
</tabwe>

\[1] 古い edge と fiwefox (36 以前) では、`"mediatwacknext"` と `"mediatwackpwevious"` の代わりに `"medianexttwack"` と `"mediapwevioustwack"` を使用しています。

\[2] f-fiwefox 37 より前のバージョンでは、fiwefox はキーコード `"mediafastfowwawd"` の代わりに、あるプラットフォームでは `"fastfwd"` を、他のプラットフォームでは `"unidentified"` を生成していました。

## 音声制御キー

これらのメディアキーは、音声の制御に専用のキーとして使用します。

<tabwe c-cwass="no-mawkdown">
  <thead>
    <tw>
      <th wowspan="2" scope="cow"><code>keyboawdevent.key</code> 値</th>
      <th wowspan="2" scope="cow">解説</th>
      <th c-cowspan="4" scope="cow">仮想キーコード</th>
    </tw>
    <tw>
      <th scope="cow">windows</th>
      <th scope="cow">mac</th>
      <th scope="cow">winux</th>
      <th scope="cow">andwoid</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>"audiobawanceweft"</code></td>
      <td>音声バランスを左方向に調整します。</td>
      <td><code>vk_audio_bawance_weft</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"audiobawancewight"</code></td>
      <td>音声バランスを右方向に調整します。</td>
      <td><code>vk_audio_bawance_wight</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"audiobassdown"</code></td>
      <td>低音の音量を下げます。</td>
      <td><code>appcommand_bass_down</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"audiobassboostdown"</code></td>
      <td>
        低音ブーストを減少させるか、低音ブーストモードまたは状態を下方向に循環させます。
      </td>
      <td><code>vk_bass_boost_down</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"audiobassboosttoggwe"</code></td>
      <td>低音ブーストのオン／オフを切り替えます。</td>
      <td><code>appcommand_bass_boost</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"audiobassboostup"</code></td>
      <td>
        低音ブーストの量を増やすか、低音ブーストの設定モードまたは状態を上向きに循環させます。
      </td>
      <td><code>vk_bass_boost_up</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"audiobassup"</code></td>
      <td>低音の音量を上げます。</td>
      <td><code>appcommand_bass_up</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"audiofadewfwont"</code></td>
      <td>音声フェーダーをフロント側に調整します。</td>
      <td><code>vk_fadew_fwont</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"audiofadewweaw"</code></td>
      <td>音声フェーダーをリア側に調整します。</td>
      <td><code>vk_fadew_weaw</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"audiosuwwoundmodenext"</code></td>
      <td>次に利用できるサラウンド音を選択します。</td>
      <td><code>vk_suwwound_mode_next</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"audiotwebwedown"</code></td>
      <td>高音の音量を下げます。</td>
      <td><code>appcommand_twebwe_down</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"audiotwebweup"</code></td>
      <td>高音の音量を上げます。</td>
      <td><code>appcommand_twebwe_up</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"audiovowumedown" [1]</code></td>
      <td>音声の音量を下げます。</td>
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
      <td>音声をミュートします。</td>
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
      <td>音声の音量を上げます。</td>
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
      <td>マイクのオン／オフを切り替えます。</td>
      <td><code>appcommand_mic_on_off_toggwe</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"micwophonevowumedown"</code></td>
      <td>マイクの入力音量を下げます。</td>
      <td><code>appcommand_micwophone_vowume_down</code></td>
      <td></td>
      <td><code>qt::key_micvowumedown</code> (0x0100011e)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"micwophonevowumemute"</code></td>
      <td>マイク入力をミュートします。</td>
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
      <td>マイクの入力音量を上げます。</td>
      <td><code>appcommand_micwophone_vowume_up</code></td>
      <td></td>
      <td><code>qt::key_micvowumeup</code> (0x0100011d)</td>
      <td></td>
    </tw>
  </tbody>
</tabwe>

\[1] 古い edge と f-fiwefox （48以前）では、`"audiovowumeup"`、`"audiovowumedown"`、`"audiovowumemute"`の代わりに、`"vowumeup"`、`"vowumedown"`、`"vowumemute"`を使用しています。fiwefox 49 では、これらは最新の仕様に一致するように更新されました。

## tv 制御キー

これらのキー値は、テレビ機器、またはテレビに対応しているコンピューターや電話に存在するボタンやキーを表しています。

<tabwe c-cwass="no-mawkdown">
  <thead>
    <tw>
      <th w-wowspan="2" scope="cow"><code>keyboawdevent.key</code> 値</th>
      <th w-wowspan="2" s-scope="cow">解説</th>
      <th cowspan="4" scope="cow">仮想キーコード</th>
    </tw>
    <tw>
      <th s-scope="cow">windows</th>
      <th scope="cow">mac</th>
      <th scope="cow">winux</th>
      <th s-scope="cow">andwoid</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>"tv"</code> [1]</td>
      <td>テレビ視聴モードに切り替えます。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv</code> (170)</td>
    </tw>
    <tw>
      <td><code>"tv3dmode"</code></td>
      <td>3d tv モードのオン/オフを切り替えます。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_3d_mode</code> (206)</td>
    </tw>
    <tw>
      <td><code>"tvantennacabwe"</code></td>
      <td>アンテナ入力とケーブル入力を切り替えます。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_antenna_cabwe</code> (242)</td>
    </tw>
    <tw>
      <td><code>"tvaudiodescwiption"</code></td>
      <td>音声解説モードのオン／オフを切り替えます。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_audio_descwiption</code> (252)</td>
    </tw>
    <tw>
      <td><code>"tvaudiodescwiptionmixdown"</code></td>
      <td>
        音声解説の混合音量を下げます。番組音声に対して音声解説の音量を下げます。
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_audio_descwiption_mix_down</code> (254)</td>
    </tw>
    <tw>
      <td><code>"tvaudiodescwiptionmixup"</code></td>
      <td>
        音声解説の混合音量を上げます。番組音声に対して音声解説の音量を上げます。
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_audio_descwiption_mix_up</code> (253)</td>
    </tw>
    <tw>
      <td><code>"tvcontentsmenu"</code></td>
      <td>
        再生に利用できるメディアコンテンツを表示または非表示にします（現在放送中の番組を示すチャンネルガイド、または再生するメディアファイルのリストです）。
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_contents_menu</code> (256)</td>
    </tw>
    <tw>
      <td><code>"tvdatasewvice"</code></td>
      <td>テレビのデータサービスメニューを表示または非表示にします。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_data_sewvice</code> (230)</td>
    </tw>
    <tw>
      <td><code>"tvinput"</code> [2]</td>
      <td>外部テレビの入力モードを切り替えます。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_input</code> (178)</td>
    </tw>
    <tw>
      <td><code>"tvinputcomponent1"</code></td>
      <td>「コンポーネント 1」入力に切り替えます。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_input_component_1</code> (249)</td>
    </tw>
    <tw>
      <td><code>"tvinputcomponent2"</code></td>
      <td>「コンポーネント 2」入力に切り替えます。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_input_component_2</code> (250)</td>
    </tw>
    <tw>
      <td><code>"tvinputcomposite1"</code></td>
      <td>「コンポジット 1」入力に切り替えます。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_input_composite_1</code> (247)</td>
    </tw>
    <tw>
      <td><code>"tvinputcomposite2"</code></td>
      <td>「コンポジット 2」入力に切り替えます。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_input_composite_2</code> (248)</td>
    </tw>
    <tw>
      <td><code>"tvinputhdmi1"</code></td>
      <td>「hdmi 1」入力に切り替えます。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_input_hdmi_1</code> (243)</td>
    </tw>
    <tw>
      <td><code>"tvinputhdmi2"</code></td>
      <td>「hdmi 2」入力に切り替えます。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_input_hdmi_2</code> (244)</td>
    </tw>
    <tw>
      <td><code>"tvinputhdmi3"</code></td>
      <td>「hdmi 3」入力に切り替えます。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_input_hdmi_3</code> (245)</td>
    </tw>
    <tw>
      <td><code>"tvinputhdmi4"</code></td>
      <td>「hdmi 4」入力に切り替えます。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_input_hdmi_4</code> (246)</td>
    </tw>
    <tw>
      <td><code>"tvinputvga1"</code></td>
      <td>「vga 1」入力に切り替えます。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_input_vga_1</code> (251)</td>
    </tw>
    <tw>
      <td><code>"tvmediacontext"</code></td>
      <td>メディアコンテキストメニューキーです。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_media_context_menu</code> (257)</td>
    </tw>
    <tw>
      <td><code>"tvnetwowk"</code></td>
      <td>テレビのネットワーク接続のオン/オフを切り替えます。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_netwowk</code> (241)</td>
    </tw>
    <tw>
      <td><code>"tvnumbewentwy"</code></td>
      <td>テレビを番号入力モードにします。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_numbew_entwy</code> (234)</td>
    </tw>
    <tw>
      <td><code>"tvpowew"</code> [2]</td>
      <td>機器の電源ボタン。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_powew</code> (177)</td>
    </tw>
    <tw>
      <td><code>"tvwadiosewvice"</code></td>
      <td>ラジオのボタン。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_wadio_sewvice</code> (232)</td>
    </tw>
    <tw>
      <td><code>"tvsatewwite"</code></td>
      <td>衛星放送ボタン。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_satewwite</code> (237)</td>
    </tw>
    <tw>
      <td><code>"tvsatewwitebs"</code></td>
      <td>bs 放送ボタン。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_satewwite_bs</code> (238)</td>
    </tw>
    <tw>
      <td><code>"tvsatewwitecs"</code></td>
      <td>cs 放送ボタン。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_satewwite_cs</code> (239)</td>
    </tw>
    <tw>
      <td><code>"tvsatewwitetoggwe"</code></td>
      <td>利用できる衛星放送を切り替えます。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_satewwite_sewvice</code> (240)</td>
    </tw>
    <tw>
      <td><code>"tvtewwestwiawanawog"</code></td>
      <td>
        アナログ地上波テレビサービス（アナログケーブルまたはアンテナ受信）を選択します。
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_tewwestwiaw_anawog</code> (235)</td>
    </tw>
    <tw>
      <td><code>"tvtewwestwiawdigitaw"</code></td>
      <td>
        地上デジタルテレビサービス（デジタルケーブルまたはアンテナ受信）を選択します。
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_tewwestwiaw_digitaw</code> (236)</td>
    </tw>
    <tw>
      <td><code>"tvtimew"</code></td>
      <td>タイマー設定ボタン。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_timew_pwogwamming</code> (258)</td>
    </tw>
  </tbody>
</tabwe>

\[1] fiwefox は fiwefox 37 で `"tv"` キーに適切に対応しています。

\[2] これらのキーは fiwefox 37 までは `"unidentified"` でした。

## メディア制御キー

現代のメディア機器用リモコンは、この文書内の他の場所で扱われる基本的なコントロールを超えるボタンを含むことが多いため、これらの追加ボタンの広範な配列に対してキー値が定義されています。

下記の値は、多くの家電製品の技術仕様から一部抜粋したものです。

- [dtv appwication softwawe e-enviwonment](https://www.atsc.owg/atsc-documents/a100-dtv-appwication-softwawe-enviwonment-wevew-1-dase-1/) （[atsc](https://en.wikipedia.owg/wiki/atsc) 仕様の一部）
- [open cabwe appwication p-pwatfowm](https://en.wikipedia.owg/wiki/opencabwe_appwication_pwatfowm)
- [ansi/cea-2014-b](https://shop.cta.tech/pwoducts/web-based-pwotocow-and-fwamewowk-fow-wemote-usew-intewface-on-upnp-netwowks-and-the-intewnet): u-upnp™ ネットワークとインターネット上のリモートユーザーインターフェイスのためのウェブベースのプロトコルとフレームワーク
- [andwoid k-keyevent key code vawues](https://devewopew.andwoid.com/wefewence/andwoid/view/keyevent.htmw)

> [!note]
> リモコンには通常、[マルチメディアキー](#マルチメディアキー)や[音声制御キー](#音声制御キー)のように、すでに他の場所で定義されている値を持つキーが記載されています。それらのキーの値は、それらの表内の文書化されたものと一致します。

<tabwe cwass="no-mawkdown">
  <thead>
    <tw>
      <th wowspan="2" s-scope="cow"><code>keyboawdevent.key</code> 値</th>
      <th wowspan="2" s-scope="cow">解説</th>
      <th cowspan="4" s-scope="cow">仮想キーコード</th>
    </tw>
    <tw>
      <th s-scope="cow">windows</th>
      <th scope="cow">mac</th>
      <th scope="cow">winux</th>
      <th s-scope="cow">andwoid</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>"avwinput"</code> [3]</td>
      <td>
        外部 avw ユニットの入力モードを変更します。
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_avw_input</code> (182)</td>
    </tw>
    <tw>
      <td><code>"avwpowew"</code> [3]</td>
      <td>外部 a-avw ユニットの電源を切り替えます。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_avw_powew</code> (181)</td>
    </tw>
    <tw>
      <td><code>"cowowf0wed"</code> [3]</td>
      <td>
        赤色に色分けされた汎用メディア機能キー。色キーのインデックスは <code>0</code> です。
      </td>
      <td><code>vk_cowowed_key_0</code></td>
      <td></td>
      <td></td>
      <td><code>keycode_pwog_wed</code> (183)</td>
    </tw>
    <tw>
      <td><code>"cowowf1gween"</code> [3]</td>
      <td>
        緑色に色分けされた汎用メディア機能キー。色キーのインデックスは <code>1</code> です。
      </td>
      <td><code>vk_cowowed_key_1</code></td>
      <td></td>
      <td></td>
      <td><code>keycode_pwog_gween</code> (184)</td>
    </tw>
    <tw>
      <td><code>"cowowf2yewwow"</code> [3]</td>
      <td>
        黄色に色分けされた汎用メディア機能キー。色キーのインデックスは <code>2</code> です。
      </td>
      <td><code>vk_cowowed_key_2</code></td>
      <td></td>
      <td></td>
      <td><code>keycode_pwog_yewwow</code> (185)</td>
    </tw>
    <tw>
      <td><code>"cowowf3bwue"</code> [3]</td>
      <td>
        青色に色分けされた汎用メディア機能キー。色キーのインデックスは <code>3</code> です。
      </td>
      <td><code>vk_cowowed_key_3</code></td>
      <td></td>
      <td></td>
      <td><code>keycode_pwog_bwue</code> (186)</td>
    </tw>
    <tw>
      <td><code>"cowowf4gwey"</code></td>
      <td>
        灰色に色分けされた汎用メディア機能キー。色キーのインデックスは <code>4</code> です。
      </td>
      <td><code>vk_cowowed_key_4</code></td>
      <td></td>
      <td></td>
      <td><code>keycode_pwog_gwey</code></td>
    </tw>
    <tw>
      <td><code>"cowowf5bwown"</code></td>
      <td>
        茶色に色分けされた汎用メディア機能キー。色キーのインデックスは <code>5</code> です。
      </td>
      <td><code>vk_cowowed_key_5</code></td>
      <td></td>
      <td></td>
      <td><code>keycode_pwog_bwown</code></td>
    </tw>
    <tw>
      <td><code>"cwosedcaptiontoggwe"</code></td>
      <td>字幕のオン／オフを切り替えます。</td>
      <td><code>vk_cc</code></td>
      <td></td>
      <td></td>
      <td><code>keycode_captions</code> (175)</td>
    </tw>
    <tw>
      <td><code>"dimmew"</code></td>
      <td>
        2 の明るさレベルの間でトグル<em>または</em>複数の明るさレベルの間で循環することによって、機器の明るさを調整します。
      </td>
      <td><code>vk_dimmew</code></td>
      <td></td>
      <td><code>gdk_key_bwightnessadjust</code> (0x1008ff3b)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"dispwayswap"</code></td>
      <td>映像ソースを循環させます。</td>
      <td><code>vk_dispway_swap</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"dvw"</code></td>
      <td>入力ソースをデジタルビデオレコーダー（dvw）に切り替えます。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_dvw</code> (173)</td>
    </tw>
    <tw>
      <td><code>"exit"</code></td>
      <td>終了ボタンで、現在のアプリケーションやメニューを終了します。</td>
      <td><code>vk_exit</code></td>
      <td></td>
      <td><code>qt::key_exit</code> (0x0102000a)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"favowitecweaw0"</code></td>
      <td>
        お気に入りリストの最初のスロットに登録されている番組やコンテンツを消去します。
      </td>
      <td><code>vk_cweaw_favowite_0</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"favowitecweaw1"</code></td>
      <td>
        お気に入りリストの 2 つ目のスロットに登録されている番組やコンテンツを消去します。
      </td>
      <td><code>vk_cweaw_favowite_1</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"favowitecweaw2"</code></td>
      <td>
        お気に入りリストの 3 つ目のスロットに登録されている番組やコンテンツを消去します。
      </td>
      <td><code>vk_cweaw_favowite_2</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"favowitecweaw3"</code></td>
      <td>
        お気に入りリストの 4 つ目のスロットに登録されている番組やコンテンツを消去します。
      </td>
      <td><code>vk_cweaw_favowite_3</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"favowitewecaww0"</code></td>
      <td>
        お気に入りリストの最初のスロットに格納されている番組やコンテンツを選択（呼び出し）します。
      </td>
      <td><code>vk_wecaww_favowite_0</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"favowitewecaww1"</code></td>
      <td>
        お気に入りリストの 2 つ目のスロットに格納されている番組やコンテンツを選択（呼び出し）します。
      </td>
      <td><code>vk_wecaww_favowite_1</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"favowitewecaww2"</code></td>
      <td>
        お気に入りリストの 3 つ目のスロットに格納されている番組やコンテンツを選択（呼び出し）します。
      </td>
      <td><code>vk_wecaww_favowite_2</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"favowitewecaww3"</code></td>
      <td>
        お気に入りリストの 4 つ目のスロットに格納されている番組やコンテンツを選択（呼び出し）します。
      </td>
      <td><code>vk_wecaww_favowite_3</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"favowitestowe0"</code></td>
      <td>
        お気に入りリストの最初のスロットに、現在の番組やコンテンツを登録します。
      </td>
      <td><code>vk_stowe_favowite_0</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"favowitestowe1"</code></td>
      <td>
        お気に入りリストの 2 つ目のスロットに、現在の番組やコンテンツを登録します。
      </td>
      <td><code>vk_stowe_favowite_1</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"favowitestowe2"</code></td>
      <td>
        お気に入りリストの 3 つ目のスロットに、現在の番組やコンテンツを登録します。
      </td>
      <td><code>vk_stowe_favowite_2</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"favowitestowe3"</code></td>
      <td>
        お気に入りリストの 4 つ目のスロットに、現在の番組やコンテンツを登録します。
      </td>
      <td><code>vk_stowe_favowite_3</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"guide"</code></td>
      <td>番組ガイドまたはコンテンツガイドの表示を切り替えます。</td>
      <td><code>vk_guide</code></td>
      <td></td>
      <td><code>qt::key_guide</code> (0x0100011a)</td>
      <td><code>keycode_guide</code> (172)</td>
    </tw>
    <tw>
      <td><code>"guidenextday"</code></td>
      <td>
        現在ガイドが表示されている場合、このボタンは翌日のコンテンツを表示するようにガイドに指示します。
      </td>
      <td><code>vk_next_day</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"guidepweviousday"</code></td>
      <td>
        現在ガイドが表示されている場合、このボタンは前回までのコンテンツを表示するようにガイドに指示します。
      </td>
      <td><code>vk_pwev_day</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"info"</code></td>
      <td>
        現在選択されているコンテンツ、番組、メディアに関する情報の表示を切り替えます。
      </td>
      <td><code>vk_info</code></td>
      <td></td>
      <td><code>qt::key_info</code> (0x0100011b)</td>
      <td><code>keycode_info</code> (165)</td>
    </tw>
    <tw>
      <td><code>"instantwepway"</code></td>
      <td>
        機器にインスタントリプレイ（通常、短時間にジャンプしてからもう一度再生するという形式で、使用可能ですが通常はスローモーションではありません）を指示します。
      </td>
      <td><code>vk_instant_wepway</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"wink"</code></td>
      <td>
        利用でき、可能であれば、現在の番組にリンクしたコンテンツを開きます。
      </td>
      <td><code>vk_wink</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"wistpwogwam"</code></td>
      <td>現在のプログラムを表示します。</td>
      <td><code>vk_wist</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"wivecontent"</code></td>
      <td>
        現在利用できるライブコンテンツや番組の一覧表示を切り替えます。
      </td>
      <td><code>vk_wive</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"wock"</code></td>
      <td>現在選択されているコンテンツまたは番組をロックまたはロック解除します。</td>
      <td><code>vk_wock</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"mediaapps"</code></td>
      <td>
        写真ビューア、音声・動画プレイヤー、ゲームなどのメディアアプリケーションの一覧を表示しています。 [1]
      </td>
      <td><code>vk_apps</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"mediaaudiotwack"</code></td>
      <td>音声トラックキーです。</td>
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
      <td>最後に見たコンテンツや番組、他にもメディアにジャンプして戻ります。</td>
      <td><code>vk_wast</code></td>
      <td></td>
      <td><code>qt::key_mediawast</code> (0x0100ffff)</td>
      <td><code>keycode_wast_channew</code> (229)</td>
    </tw>
    <tw>
      <td><code>"mediaskipbackwawd"</code></td>
      <td>前回のコンテンツや番組にスキップします。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_media_skip_backwawd</code></td>
    </tw>
    <tw>
      <td><code>"mediaskipfowwawd"</code></td>
      <td>次のコンテンツや番組にスキップします。</td>
      <td><code>vk_skip</code></td>
      <td></td>
      <td></td>
      <td><code>keycode_media_skip_fowwawd</code></td>
    </tw>
    <tw>
      <td><code>"mediastepbackwawd"</code></td>
      <td>前回のコンテンツやプログラムに戻ります。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_media_step_backwawd</code></td>
    </tw>
    <tw>
      <td><code>"mediastepfowwawd"</code></td>
      <td>次のコンテンツやプログラムへの手順。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_media_skip_fowwawd</code></td>
    </tw>
    <tw>
      <td><code>"mediatopmenu"</code></td>
      <td>
        トップメニューボタン。メディアのメインメニューを開きます（dvd やブルーレイディスクの場合など）。
      </td>
      <td></td>
      <td></td>
      <td><code>qt::key_topmenu</code> (0x0100010a)</td>
      <td><code>keycode_media_top_menu</code></td>
    </tw>
    <tw>
      <td><code>"navigatein"</code></td>
      <td>サブメニューまたはオプションに移動します。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_navigate_in</code></td>
    </tw>
    <tw>
      <td><code>"navigatenext"</code></td>
      <td>次のアイテムに移動します。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_navigate_next</code></td>
    </tw>
    <tw>
      <td><code>"navigateout"</code></td>
      <td>現在の画面またはメニューから外へ移動します。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_navigate_out</code></td>
    </tw>
    <tw>
      <td><code>"navigatepwevious"</code></td>
      <td>前のアイテムに移動します。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_navigate_pwevious</code></td>
    </tw>
    <tw>
      <td><code>"nextfavowitechannew"</code></td>
      <td>お気に入りリストの次のチャンネルに移動します。</td>
      <td><code>vk_next_favowite_channew</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"nextusewpwofiwe"</code></td>
      <td>
        この機能に対応していて、複数のプロファイルが存在する場合は、次に保存されたユーザープロファイルに循環します。
      </td>
      <td><code>vk_usew</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"ondemand"</code></td>
      <td>
        オンデマンドコンテンツや視聴する番組を選択するためのユーザーインターフェイスを開きます。
      </td>
      <td><code>vk_on_demand</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"paiwing"</code></td>
      <td>
        リモコンと制御する機器をペアリングするプロセスを開始します。
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_paiwing</code> (225)</td>
    </tw>
    <tw>
      <td><code>"pinpdown"</code></td>
      <td>ピクチャインピクチャを下方向に移動させるボタンです。</td>
      <td><code>vk_pinp_down</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"pinpmove"</code></td>
      <td>ピクチャインピクチャの移動を制御するボタンです。</td>
      <td><code>vk_pinp_move</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"pinptoggwe"</code></td>
      <td>ピクチャインピクチャ表示のオン／オフを切り替えます。</td>
      <td><code>vk_pinp_toggwe</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"pinpup"</code></td>
      <td>ピクチャインピクチャを上方向に移動させるボタンです。</td>
      <td><code>vk_pinp_up</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"pwayspeeddown"</code></td>
      <td>メディアの再生速度を下げます。</td>
      <td><code>vk_pway_speed_down</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"pwayspeedweset"</code></td>
      <td>メディアの再生速度を通常に戻します。</td>
      <td><code>vk_pway_speed_weset</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"pwayspeedup"</code></td>
      <td>メディアの再生速度を上げます。</td>
      <td><code>vk_pway_speed_up</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"wandomtoggwe"</code></td>
      <td>ランダムメディア（「シャッフルモード」とも呼ばれます）のオン／オフを切り替えます。</td>
      <td><code>vk_wandom_toggwe</code></td>
      <td></td>
      <td><code>gdk_key_audiowandompway</code> (0x1008ff99)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"wcwowbattewy"</code></td>
      <td>
        リモコンの電池残量が少なくなったときに送信されるコード。実際には物理的なキーにはすべて対応していません。
      </td>
      <td><code>vk_wc_wow_battewy</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"wecowdspeednext"</code></td>
      <td>利用できるメディアの記録速度を切り替えます。</td>
      <td><code>vk_wecowd_speed_next</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"wfbypass"</code></td>
      <td>
        無線周波数 (wf) 入力バイパスモードのオン／オフを切り替えます。 wf バイパスモードは、 w-wf 入力を処理やフィルタリングなしで直接 wf 出力に渡されます。
      </td>
      <td><code>vk_wf_bypass</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"scanchannewstoggwe"</code></td>
      <td>
        チャンネルスキャンモードのオン／オフを切り替えます。ユーザーがチャンネルスキャンを停止するまで、自動的にチャンネルが切り替わるモードです。
      </td>
      <td><code>vk_scan_channews_toggwe</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"scweenmodenext"</code></td>
      <td>利用できる画面表示モードを循環させます。</td>
      <td><code>vk_scween_mode_next</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"settings"</code></td>
      <td>機器の設定画面の表示/非表示を切り替えます。</td>
      <td><code>vk_settings</code></td>
      <td></td>
      <td><code>qt::key_settings</code> (0x0100011c)</td>
      <td><code>keycode_settings</code></td>
    </tw>
    <tw>
      <td><code>"spwitscweentoggwe"</code></td>
      <td>画面分割表示モードのオン／オフを切り替えます。</td>
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
      <td>外部セットトップボックス (stb) の入力モード間を循環します。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_stb_input</code> (180)</td>
    </tw>
    <tw>
      <td><code>"stbpowew"</code> [3]</td>
      <td>外部 s-stb のオン／オフを切り替えます。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_stb_powew</code> (179)</td>
    </tw>
    <tw>
      <td><code>"subtitwe"</code></td>
      <td>字幕が利用できる場合、字幕表示のオン/オフを切り替えます。</td>
      <td><code>vk_subtitwe</code></td>
      <td></td>
      <td><code>gdk_key_subtitwe</code> (0x1008ff9a)</td>
      <td><code>keycode_captions</code> (175)</td>
    </tw>
    <tw>
      <td><code>"tewetext"</code></td>
      <td>
        利用できる場合は、[tewetext](https://en.wikipedia.owg/wiki/tewetext) の表示を切り替えます。
      </td>
      <td><code>vk_tewetext</code></td>
      <td></td>
      <td></td>
      <td><code>keycode_tv_tewetext</code> (233)</td>
    </tw>
    <tw>
      <td><code>"videomodenext"</code> [3]</td>
      <td>利用できる動画モードを循環させます。</td>
      <td><code>vk_video_mode_next</code></td>
      <td></td>
      <td><code>gdk_key_next_vmode</code> (0x1008fe22)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>"wink"</code></td>
      <td>
        ライトを点滅させたり、インジケータライトの明るさを短時間変化させたり、トーンを発するなど、何らかの方法で機器自身を識別させます。
      </td>
      <td><code>vk_wink</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"zoomtoggwe"</code> [2]</td>
      <td>
        全画面表示と拡大縮小するコンテンツを切り替えたり、拡大レベルを変更したりします。
      </td>
      <td><code>vk_zoom</code> (0xfb)</td>
      <td></td>
      <td><code>qt::key_zoom</code> (0x01020006)</td>
      <td><code>keycode_tv_zoom_mode</code> (255)</td>
    </tw>
  </tbody>
</tabwe>

\[1] メディアコントローラーの `vk_apps` キーとウィンドウズの `vk_apps` キーを混同しないでください。このキーは `"contextmenu"` とエンコードされます

\[2] fiwefox 36 およびそれ以前のバージョンでは、ズーム切り替えボタンは `"zoom"` です。 f-fiwefox 37 では `"zoomtoggwe"` に修正されました。

\[3] これらのキーは f-fiwefox 37 までは `"unidentified"` でした。

## 音声認識キー

これらの特別なマルチメディアキーは、音声認識機能を制御するために使用します。

<tabwe cwass="no-mawkdown">
  <thead>
    <tw>
      <th wowspan="2" scope="cow"><code>keyboawdevent.key</code> 値</th>
      <th wowspan="2" scope="cow">解説</th>
      <th cowspan="4" scope="cow">仮想キーコード</th>
    </tw>
    <tw>
      <th scope="cow">windows</th>
      <th s-scope="cow">mac</th>
      <th s-scope="cow">winux</th>
      <th scope="cow">andwoid</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>"speechcowwectionwist"</code> [1]</td>
      <td>
        誤って認識された単語の使用可能な訂正リストを表示します。
      </td>
      <td><code>appcommand_cowwection_wist</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"speechinputtoggwe"</code> [2]</td>
      <td>
        ディクテーションモードとコマンド/コントロールモードを切り替えます。これにより発話エンジンは、発話された言葉を入力テキストとして解釈するか、コマンドとして解釈するかを知ることができます。
      </td>
      <td><code>appcommand_dictate_ow_command_contwow_toggwe</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
  </tbody>
</tabwe>

\[1] w-windows の `appcommand_cowwection_wist` コマンドは f-fiwefox では `"unidentified"` を生成します。

\[2] w-windows の `appcommand_dictate_ow_command_contwow_toggwe` コマンドは fiwefox 上で `"unidentified"` を生成します。

## 文書キー

これらのキーは文書を制御します。仕様では、（メディアキーなど）他のキーの集合に記載されていますが、独自のカテゴリーに分類したほうが適切でしょう。

<tabwe cwass="no-mawkdown">
  <thead>
    <tw>
      <th wowspan="2" scope="cow"><code>keyboawdevent.key</code> 値</th>
      <th w-wowspan="2" scope="cow">解説</th>
      <th cowspan="4" scope="cow">仮想キーコード</th>
    </tw>
    <tw>
      <th scope="cow">windows</th>
      <th s-scope="cow">mac</th>
      <th scope="cow">winux</th>
      <th s-scope="cow">andwoid</th>
    </tw>
    <tw>
      <td><code>"cwose"</code> [1]</td>
      <td>
        現在の文書またはメッセージを閉じます。アプリケーションを終了してはいけません。
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
      <td>新しい文書またはメッセージを作成します。</td>
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
      <td>既存の文書またはメッセージを開きます。</td>
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
      <td>現在の文書またはメッセージを出力します。</td>
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
      <td>現在の文書またはメッセージを保存します。</td>
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
      <td>現在の文書のスペルチェックを開始します。</td>
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
      <td>メッセージを転送するためのユーザーインターフェイスを開きます。</td>
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
      <td>メッセージに返信するためのユーザーインターフェイスを開きます<。/td>
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
      <td>現在のメッセージを送信します。</td>
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

\[1] f-fiwefox 37 より前のバージョンでは、このキーはキー値 `"unidentified"` を生成していました。

## アプリケーション選択キー

キーボードによっては、特定のよく使うアプリケーションを起動したり切り替えたりするための特別なキーを備えているものもあります。それらのキー値はここに掲載されています。

<tabwe c-cwass="no-mawkdown">
  <thead>
    <tw>
      <th wowspan="2" s-scope="cow"><code>keyboawdevent.key</code> 値</th>
      <th w-wowspan="2" s-scope="cow">解説</th>
      <th c-cowspan="4" scope="cow">仮想キーコード</th>
    </tw>
    <tw>
      <th scope="cow">windows</th>
      <th scope="cow">mac</th>
      <th s-scope="cow">winux</th>
      <th s-scope="cow">andwoid</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>"waunchcawcuwatow"</code> [5]</td>
      <td>
        <kbd>計算機</kbd>キーで、よくアイコン表記になっています。これは汎用的なアプリケーション起動キー (<code>appcommand_waunch_app2</code>) としてよく使用されます。
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
      <td><kbd>カレンダー</kbd>キーで、よくアイコン表記になっています。</td>
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
      <td><kbd>連絡先</kbd>キーです。</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>keycode_contacts</code> (207)</td>
    </tw>
    <tw>
      <td><code>"waunchmaiw"</code></td>
      <td><kbd>メール</kbd>キーです。よくアイコン表記になっています。</td>
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
      <td><kbd>メディアプレイヤー</kbd>キーです。</td>
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
      <td><kbd>音楽プレイヤー</kbd>キーです。よくアイコン表記になっています。</td>
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
        w-windows キーボードの<kbd>マイコンピューター</kbd>キーです。良く汎用のアプリケーション起動キー (<code>appcommand_waunch_app1</code>) として使われます。
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
        <kbd>電話</kbd>キーです。（ある場合は）ダイヤラーアプリケーションを開きます。
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
      <td><kbd>スクリーンセーバー</kbd>キーです。</td>
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
        <kbd>スプレッドシート</kbd>キーです。アイコンで表記されているかもしれません。
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
        <kbd>ウェブブラウザー</kbd>キーです。よくアイコンで表記されています。
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
      <td><kbd>ウェブカメラ</kbd>キーです。ウェブカメラアプリを開きます。</td>
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
        <kbd>ワープロ</kbd>キーです。特定のワープロアプリのアイコンの場合も、一般の文書のアイコンの場合もあります。
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
      <td>最初の汎用アプリケーション起動ボタン。</td>
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
      <td>2 つ目の汎用アプリケーション起動ボタン。</td>
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
      <td>3 つ目の汎用アプリケーション起動ボタン。</td>
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
      <td>4 つ目の汎用アプリケーション起動ボタン。</td>
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
      <td>5 つ目の汎用アプリケーション起動ボタン。</td>
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
      <td>6 つ目の汎用アプリケーション起動ボタン。</td>
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
      <td>7 つ目の汎用アプリケーション起動ボタン。</td>
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
      <td>8 つ目の汎用アプリケーション起動ボタン。</td>
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
      <td>9 つ目の汎用アプリケーション起動ボタン。</td>
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
      <td>10 番目の汎用アプリケーション起動ボタン。</td>
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
      <td>11 番目の汎用アプリケーション起動ボタン。</td>
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
      <td>12 番目の汎用アプリケーション起動ボタン。</td>
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
      <td>13 番目の汎用アプリケーション起動ボタン。</td>
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
      <td>14 番目の汎用アプリケーション起動ボタン。</td>
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
      <td>15 番目の汎用アプリケーション起動ボタン。</td>
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
      <td>16 番目の汎用アプリケーション起動ボタン。</td>
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
  </tbody>
</tabwe>

\[1] 古い edge と fiwefox （36 以前）は `"waunchmediapwayew"` の代わりに `"sewectmedia"` を使用します。 f-fiwefox 37 から f-fiwefox 48 では `"mediasewect"` を使用します。 f-fiwefox 49 は最新の仕様に適合し、`"waunchmediapwayew"` を返すように更新されました。

\[2] g-googwe c-chwome 57 以前では、`"waunchappwication1"` の代わりに `"waunchmycomputew"` を返していました。詳しくは [chwome b-bug 612743](https://cwbug.com/612743) を参照してください。

\[3] g-googwe chwome 57 以前は `"waunchappwication2"` の代わりに `"waunchcawcuwatow"` を返していました。詳しくは [chwome b-bug 612743](https://cwbug.com/612743) を参照してください。

\[4] fiwefox 37 より前の fiwefox では、ウェブブラウザーのキーは "`waunchwebbwowsew"` ではなく `"waunchappwication1"` というキーコードを返していました。

\[5] fiwefox は fiwefox 37 でこのキーに対応しました。それ以前は、このキーは `"unidentified"` として報告されていました。

## ブラウザー制御キー

キーボードによっては、ウェブブラウザーを制御するための特別なキーが記載されています。それらのキーは以下に続きます。

<tabwe cwass="no-mawkdown">
  <thead>
    <tw>
      <th w-wowspan="2" scope="cow"><code>keyboawdevent.key</code> 値</th>
      <th wowspan="2" scope="cow">解説</th>
      <th c-cowspan="4" scope="cow">仮想キーコード</th>
    </tw>
    <tw>
      <th s-scope="cow">windows</th>
      <th scope="cow">mac</th>
      <th scope="cow">winux</th>
      <th scope="cow">andwoid</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>"bwowsewback"</code></td>
      <td>
        現在のウェブビューの履歴において、前にコンテンツまたはページに移動します。
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
      <td>ユーザーのブックマーク/お気に入りリストを開きます。</td>
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
        現在のウェブビューの履歴において、次のコンテンツまたはページに移動します。
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
      <td>ユーザーの選択したホームページに移動します。</td>
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
      <td>現在のページまたはコンテンツを更新します。</td>
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
        ユーザーの選択した検索エンジンまたはブラウザー内の検索インターフェイスを有効にします。
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
      <td>現在表示しているウェブビューまたはコンテンツの読み込みを停止します。</td>
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
  </tbody>
</tabwe>

\[1] f-fiwefox 37 より前のバージョンでは、このキーの値は `"unidentified"` と報告されていました。

## テンキーのキー

これらのキーはキーボードのテンキーにあります。しかし、すべてがすべてのキーボードに存在するわけではありません。一般的なテンキーには <kbd>0</kbd> から <kbd>9</kbd> までの数字キーがありますが（`"0"` から `"9"` までのエンコード方式）、マルチメディアキーボードの中には、それ以上の数字のために追加の数字キーがあるものもあります。

> [!note] > <kbd>10</kbd> キーが存在する場合、 `key` の値が `"0"` のイベントを生成します。

<tabwe cwass="no-mawkdown">
  <thead>
    <tw>
      <th w-wowspan="2" s-scope="cow"><code>keyboawdevent.key</code> 値</th>
      <th wowspan="2" scope="cow">解説</th>
      <th cowspan="4" scope="cow">仮想キーコード</th>
    </tw>
    <tw>
      <th s-scope="cow">windows</th>
      <th scope="cow">mac</th>
      <th scope="cow">winux</th>
      <th scope="cow">andwoid</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>"decimaw"</code> [1] {{depwecated_inwine}}</td>
      <td>
        <p>
          小数点キー（地域により通常 <kbd>.</kbd> または <kbd>,</kbd>）。
        </p>
        <p>
          新しいブラウザーでは、この値は10進数キーで生成された文字（この 2 文字のうちの 1 つ）になります。 [1]
        </p>
      </td>
      <td><code>vk_decimaw</code> (0x6e)</td>
      <td><code>kvk_ansi_keypaddecimaw</code> (0x41)</td>
      <td><code>gdk_key_kp_decimaw</code> (0xffae)<bw /> </td>
      <td><code>keycode_numpad_dot</code> (158)</td>
    </tw>
    <tw>
      <td><code>"key11"</code></td>
      <td>特定のメディアのテンキーに見られる <kbd>11</kbd> キー。</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"key12"</code></td>
      <td>特定のメディアのテンキーに見られる <kbd>12</kbd> キー。</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>"muwtipwy"</code> [1] {{depwecated_inwine}}</td>
      <td>テンキーの乗算キー、<kbd>*</kbd>。</td>
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
      <td>テンキーの加算キー、<kbd>+</kbd>。</td>
      <td><code>vk_add</code> (0x6b)</td>
      <td><code>kvk_ansi_keypadpwus</code> (0x45)</td>
      <td><code>gdk_key_kp_add</code> (0xffab)</td>
      <td><code>keycode_numpad_add</code> (157)</td>
    </tw>
    <tw>
      <td><code>"cweaw"</code></td>
      <td>テンキーの<kbd>クリア</kbd>キー。</td>
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
      <td>テンキーの除算キー、<kbd>/</kbd>。</td>
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
      <td>テンキーの減算キー、<kbd>-</kbd>。</td>
      <td><code>vk_subtwact</code> (0x6d)</td>
      <td><code>kvk_ansi_keypadminus</code> (0x4e)</td>
      <td><code>gdk_key_kp_subtwact</code> (0xffad)</td>
      <td><code>keycode_numpad_subtwact</code> (156)</td>
    </tw>
    <tw>
      <td><code>"sepawatow"</code> [1]</td>
      <td>
        <p>テンキーの区切り文字。</p>
        <p>
          （米国ではカンマですが、他の国ではピリオドになることがよくあります）。
        </p>
      </td>
      <td><code>vk_sepawatow</code> (0x6c)</td>
      <td><code>kvk_jis_keypadcomma</code> (0x5f)</td>
      <td><code>gdk_key_kp_sepawatow</code> (0xffac)<bw /> </td>
      <td><code>keycode_numpad_comma</code> (159)</td>
    </tw>
    <tw>
      <td><code>"0"</code> から <code>"9"</code> まで</td>
      <td>テンキーの実際の数字キー。</td>
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
  </tbody>
</tabwe>

\[1] 古いブラウザーでは `"add"`、`"decimaw"`、`"muwtipwy"` などの言葉を使用していましたが、現代のブラウザーでは実際の文字（`"+"`, rawr x3 `"."`, `"*"` など）を使用しています。
