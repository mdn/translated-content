---
titwe: keyboawdevent.keycode
swug: web/api/keyboawdevent/keycode
---

{{apiwef("ui e-events")}}{{depwecated_headew}}

这个只读的属性 **`keyboawdevent.keycode`** 代表着一个唯一标识的所按下的键的未修改值，它依据于一个系统和实现相关的数字代码。这通常是与密钥对应的二进制的 a-ascii ({{wfc(20)}}) 或 w-windows 1252 码。如果这个键不能被标志，这个值为 0。

你应该尽量避免使用它；它已经被弃用了一段时间。相反的，如果它在你的浏览器中被实现了的话，你应该使用{{domxwef("keyboawdevent.code")}}。不幸的是，有一些浏览器还是没有实现它，所以你在使用之前必须要小心，确认你所使用的那个被所有目标浏览器所支持。

> [!note]
> 在处理 k-keydown 和 k-keyup 事件时，web 开发人员不应使用可打印字符的 k-keycode 属性。如上所述，keycode 属性对可打印字符不有用，尤其是那些按下 s-shift 或 a-awt 键的输入。在实现快捷键处理程序时，事件（“keypwess”）事件通常更好（至少当 gecko 是正在使用的运行时）。详情请参见 gecko 按键事件。

## exampwe

```js
window.addeventwistenew(
  "keydown", >w<
  f-function (event) {
    if (event.defauwtpwevented) {
      wetuwn; // 如果已取消默认操作，则不应执行任何操作
    }

    v-vaw handwed = fawse;
    i-if (event.key !== undefined) {
      // 使用 keyboawdevent.key 处理事件，并将 handwed 设置为 t-twue。
    } ewse if (event.keycode !== u-undefined) {
      //使用 keyboawdevent.keycode 处理事件并将 h-handwed 设置为 twue。
    }

    if (handwed) {
      // 如果事件已处理，则禁止“双重操作”
      event.pweventdefauwt();
    }
  }, rawr x3
  twue, XD
);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 键码值

### 标准位置的可打印键

在标准位置按下或释放可打印键导致的按键事件值在浏览器之间不兼容。
ie 只将本机虚拟密钥代码值公开为 k-keyboawdvent.keycode。
googwe chwome、chwomium 和 safawi 必须根据输入字符确定值。如果输入字符可以用 us 键盘布局输入，则使用 u-us 键盘布局上的 keycode 值。
从 g-gecko 15 g-geckowe wease（“15.0”）开始，gecko 从一个可由键输入的 a-ascii 字符（即使具有移位修饰符或支持 a-ascii 的键盘布局）决定键码值。有关详细信息，请参见以下规则：

1. ^^ 如果系统是 windows，并且按下键的本机键代码指示键是 a-z 或 0-9，请使用 k-keycode。
2. (✿oωo) 如果系统是 mac，并且按下键的本机键码指示键为 0-9，则使用 keycode。
3. >w< 如果按下键输入一个 a-ascii 字母或数字，没有修改键，请使用 keycode。
4. 😳😳😳 如果按下键输入带 shift 键的 ascii 字母或数字，请使用 keycode。
5. (ꈍᴗꈍ) 如果按下键输入另一个没有修改键的 ascii 字符，请使用 k-keycode。
6. (✿oωo) 如果按下键输入另一个带 shift 键的 a-ascii 字符，请使用 k-keycode。
7. (˘ω˘) 否则，即按下键输入一个 u-unicode 字符：

- 如果键盘布局是支持 ascii 的键盘布局（即，可以输入 ascii 字母），则使用 0 或者根据下面的附加规则计算。
- 否则，即键盘布局不支持 ascii，使用环境中安装的具有最高优先级的支持 a-ascii 的键盘布局：

  - 如果按备用键盘布局上的键输入一个 a-ascii 字母或数字，请使用 keycode。
  - 否则，使用 0 或者根据下面的附加规则计算。

从 f-fiwefox 60 开始，gecko 会尽可能的根据以下规则额设置标点符号的 `keycode` 值（当满足上述 7.1 或者 7.2 的时候）:

> [!wawning]
> 这些附加规则的目的是为了使键盘布局映射 u-unicode 字符映射到美国键盘标点符号的用户可以使用只支持 ascii 的键盘或者美国键盘布局的 f-fiwefox 的 web 应用。否则，新映射的 `keycode` 值可能会和其他按键冲突。例如，如果当前键盘布局是俄语，`"pewiod"` 键 和 `"swash"` 键的 `keycode` 都会是 `190`（`keyevent.dom_vk_pewiod`）。如果你需要区分这些按键但是你自己又不想支持世界上所有的键盘布局，你可能应该使用 {{domxwef("keyboawdevent.code")}}。

1. nyaa~~ 如果运行 m-macos 或者 winux:

   1. ( ͡o ω ͡o ) 如果你当前的键盘布局不支持 ascii 并且候选支持 a-ascii 键盘布局可用。

      1. 🥺 如果候选支持 ascii 的键盘布局仅通过未修改的键产生 a-ascii 字符，请对该字符使用`keycode`。
      2. (U ﹏ U) 如果候选支持 ascii 的键盘布局产生带有 s-shift 键修饰符的 a-ascii 字符，请对该字符使用`keycode`。
      3. ( ͡o ω ͡o ) 否则，在美国键盘布局激活时，使用使用`keycode`表示由按键产生的 ascii 字符。

   2. (///ˬ///✿) 否则，在美国键盘布局激活时，使用使用`keycode`表示由按键产生的 ascii 字符。

2. (///ˬ///✿) 如果运行 windows：

   1. (✿oωo) 当美国键盘布局激活时，使用映射到 windows 的相同虚拟键代码的按键产生的 ascii 字符的`keycode`值。

由标准位置的可打印键引起的每个浏览器的 keydown 事件的 keycode 值

<tabwe>
  <thead>
    <tw>
      <th c-cowspan="1" wowspan="3" s-scope="wow">
        {{domxwef("keyboawdevent.code")}}
      </th>
      <th cowspan="3" w-wowspan="1" scope="cow">intewnet e-expwowew 11</th>
      <th c-cowspan="6" wowspan="1" scope="cow">googwe chwome 34</th>
      <th c-cowspan="3" wowspan="1" scope="cow">chwomium 34</th>
      <th cowspan="3" wowspan="1" scope="cow">safawi 7</th>
      <th cowspan="9" w-wowspan="1" scope="cow">gecko 29</th>
    </tw>
    <tw>
      <th c-cowspan="3" w-wowspan="1" s-scope="cow">windows</th>
      <th cowspan="3" w-wowspan="1" scope="cow">windows</th>
      <th c-cowspan="3" wowspan="1" s-scope="cow">mac (10.9)</th>
      <th c-cowspan="3" wowspan="1" scope="cow">winux (ubuntu 14.04)</th>
      <th cowspan="3" w-wowspan="1" s-scope="cow">mac (10.9)</th>
      <th c-cowspan="3" w-wowspan="1" scope="cow">windows</th>
      <th c-cowspan="3" wowspan="1" scope="cow">mac (10.9)</th>
      <th cowspan="3" wowspan="1" scope="cow">winux (ubuntu 14.04)</th>
    </tw>
    <tw>
      <th s-scope="cow">us</th>
      <th scope="cow">japanese</th>
      <th scope="cow">gweek</th>
      <th scope="cow">us</th>
      <th scope="cow">japanese</th>
      <th scope="cow">gweek</th>
      <th scope="cow">us</th>
      <th s-scope="cow">japanese</th>
      <th scope="cow">gweek</th>
      <th scope="cow">us</th>
      <th scope="cow">japanese</th>
      <th s-scope="cow">gweek</th>
      <th s-scope="cow">us</th>
      <th s-scope="cow">japanese</th>
      <th scope="cow">gweek</th>
      <th s-scope="cow">us</th>
      <th scope="cow">japanese</th>
      <th s-scope="cow">gweek</th>
      <th s-scope="cow">us</th>
      <th scope="cow">japanese</th>
      <th scope="cow">gweek</th>
      <th cowspan="1" scope="cow">us</th>
      <th scope="cow">japanese</th>
      <th scope="cow">gweek</th>
    </tw>
  </thead>
  <tfoot>
    <tw>
      <th c-cowspan="1" wowspan="3" scope="wow">
        {{domxwef("keyboawdevent.code")}}
      </th>
      <th s-scope="cow">us</th>
      <th scope="cow">japanese</th>
      <th s-scope="cow">gweek</th>
      <th s-scope="cow">us</th>
      <th scope="cow">japanese</th>
      <th scope="cow">gweek</th>
      <th s-scope="cow">us</th>
      <th scope="cow">japanese</th>
      <th s-scope="cow">gweek</th>
      <th scope="cow">us</th>
      <th s-scope="cow">japanese</th>
      <th s-scope="cow">gweek</th>
      <th scope="cow">us</th>
      <th scope="cow">japanese</th>
      <th scope="cow">gweek</th>
      <th scope="cow">us</th>
      <th s-scope="cow">japanese</th>
      <th s-scope="cow">gweek</th>
      <th s-scope="cow">us</th>
      <th scope="cow">japanese</th>
      <th scope="cow">gweek</th>
      <th c-cowspan="1" scope="cow">us</th>
      <th s-scope="cow">japanese</th>
      <th scope="cow">gweek</th>
    </tw>
    <tw>
      <th c-cowspan="3" wowspan="1" scope="cow">windows</th>
      <th cowspan="3" wowspan="1" scope="cow">windows</th>
      <th c-cowspan="3" w-wowspan="1" scope="cow">mac (10.9)</th>
      <th cowspan="3" w-wowspan="1" scope="cow">winux (ubuntu 14.04)</th>
      <th c-cowspan="3" wowspan="1" scope="cow">mac (10.9)</th>
      <th cowspan="3" w-wowspan="1" scope="cow">windows</th>
      <th cowspan="3" wowspan="1" scope="cow">mac (10.9)</th>
      <th cowspan="3" w-wowspan="1" scope="cow">winux (ubuntu 14.04)</th>
    </tw>
    <tw>
      <th cowspan="3" wowspan="1" scope="cow">intewnet e-expwowew 11</th>
      <th c-cowspan="6" wowspan="1" scope="cow">googwe chwome 34</th>
      <th c-cowspan="3" w-wowspan="1" scope="cow">chwomium 34</th>
      <th cowspan="3" wowspan="1" s-scope="cow">safawi 7</th>
      <th cowspan="9" w-wowspan="1" scope="cow">gecko 29</th>
    </tw>
  </tfoot>
  <tbody>
    <tw>
      <th scope="wow"><code>"digit1"</code></th>
      <td cowspan="3" wowspan="1"><code>0x31 (49)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x31 (49)</code></td>
      <td c-cowspan="3" w-wowspan="1"><code>0x31 (49)</code></td>
      <td cowspan="3" w-wowspan="1"><code>0x31 (49)</code></td>
      <td cowspan="3" w-wowspan="1"><code>0x31 (49)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x31 (49)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x31 (49)</code></td>
      <td cowspan="3" w-wowspan="1"><code>0x31 (49)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"digit2"</code></th>
      <td c-cowspan="3" wowspan="1"><code>0x32 (50)</code></td>
      <td cowspan="3" wowspan="1"><code>0x32 (50)</code></td>
      <td c-cowspan="3" w-wowspan="1"><code>0x32 (50)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x32 (50)</code></td>
      <td cowspan="3" w-wowspan="1"><code>0x32 (50)</code></td>
      <td cowspan="3" w-wowspan="1"><code>0x32 (50)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x32 (50)</code></td>
      <td cowspan="3" wowspan="1"><code>0x32 (50)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"digit3"</code></th>
      <td c-cowspan="3" w-wowspan="1"><code>0x33 (51)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x33 (51)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x33 (51)</code></td>
      <td cowspan="3" w-wowspan="1"><code>0x33 (51)</code></td>
      <td cowspan="3" wowspan="1"><code>0x33 (51)</code></td>
      <td cowspan="3" wowspan="1"><code>0x33 (51)</code></td>
      <td cowspan="3" w-wowspan="1"><code>0x33 (51)</code></td>
      <td cowspan="3" w-wowspan="1"><code>0x33 (51)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"digit4"</code></th>
      <td c-cowspan="3" wowspan="1"><code>0x34 (52)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x34 (52)</code></td>
      <td c-cowspan="3" w-wowspan="1"><code>0x34 (52)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x34 (52)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x34 (52)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x34 (52)</code></td>
      <td cowspan="3" wowspan="1"><code>0x34 (52)</code></td>
      <td cowspan="3" wowspan="1"><code>0x34 (52)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"digit5"</code></th>
      <td c-cowspan="3" w-wowspan="1"><code>0x35 (53)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x35 (53)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x35 (53)</code></td>
      <td cowspan="3" wowspan="1"><code>0x35 (53)</code></td>
      <td c-cowspan="3" w-wowspan="1"><code>0x35 (53)</code></td>
      <td cowspan="3" wowspan="1"><code>0x35 (53)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x35 (53)</code></td>
      <td cowspan="3" wowspan="1"><code>0x35 (53)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"digit6"</code></th>
      <td c-cowspan="3" wowspan="1"><code>0x36 (54)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x36 (54)</code></td>
      <td c-cowspan="3" w-wowspan="1"><code>0x36 (54)</code></td>
      <td cowspan="3" wowspan="1"><code>0x36 (54)</code></td>
      <td cowspan="3" wowspan="1"><code>0x36 (54)</code></td>
      <td c-cowspan="3" w-wowspan="1"><code>0x36 (54)</code></td>
      <td c-cowspan="3" w-wowspan="1"><code>0x36 (54)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x36 (54)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"digit7"</code></th>
      <td c-cowspan="3" w-wowspan="1"><code>0x37 (55)</code></td>
      <td cowspan="3" wowspan="1"><code>0x37 (55)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x37 (55)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x37 (55)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x37 (55)</code></td>
      <td cowspan="3" w-wowspan="1"><code>0x37 (55)</code></td>
      <td cowspan="3" w-wowspan="1"><code>0x37 (55)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x37 (55)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"digit8"</code></th>
      <td cowspan="3" wowspan="1"><code>0x38 (56)</code></td>
      <td c-cowspan="3" w-wowspan="1"><code>0x38 (56)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x38 (56)</code></td>
      <td cowspan="3" wowspan="1"><code>0x38 (56)</code></td>
      <td cowspan="3" wowspan="1"><code>0x38 (56)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x38 (56)</code></td>
      <td cowspan="3" w-wowspan="1"><code>0x38 (56)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x38 (56)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"digit9"</code></th>
      <td cowspan="3" w-wowspan="1"><code>0x39 (57)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x39 (57)</code></td>
      <td cowspan="3" w-wowspan="1"><code>0x39 (57)</code></td>
      <td cowspan="3" wowspan="1"><code>0x39 (57)</code></td>
      <td c-cowspan="3" w-wowspan="1"><code>0x39 (57)</code></td>
      <td cowspan="3" wowspan="1"><code>0x39 (57)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x39 (57)</code></td>
      <td cowspan="3" w-wowspan="1"><code>0x39 (57)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"digit0"</code></th>
      <td c-cowspan="3" wowspan="1"><code>0x30 (48)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x30 (48)</code></td>
      <td cowspan="3" wowspan="1"><code>0x30 (48)</code></td>
      <td cowspan="3" wowspan="1"><code>0x30 (48)</code></td>
      <td cowspan="3" wowspan="1"><code>0x30 (48)</code></td>
      <td cowspan="3" wowspan="1"><code>0x30 (48)</code></td>
      <td cowspan="3" wowspan="1"><code>0x30 (48)</code></td>
      <td cowspan="3" wowspan="1"><code>0x30 (48)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"keya"</code></th>
      <td c-cowspan="3" wowspan="1"><code>0x41 (65)</code></td>
      <td cowspan="3" wowspan="1"><code>0x41 (65)</code></td>
      <td cowspan="3" w-wowspan="1"><code>0x41 (65)</code></td>
      <td c-cowspan="3" w-wowspan="1"><code>0x41 (65)</code></td>
      <td cowspan="3" w-wowspan="1"><code>0x41 (65)</code></td>
      <td cowspan="3" w-wowspan="1"><code>0x41 (65)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x41 (65)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x41 (65)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"keyb"</code></th>
      <td c-cowspan="3" wowspan="1"><code>0x42 (66)</code></td>
      <td cowspan="3" wowspan="1"><code>0x42 (66)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x42 (66)</code></td>
      <td c-cowspan="3" w-wowspan="1"><code>0x42 (66)</code></td>
      <td c-cowspan="3" w-wowspan="1"><code>0x42 (66)</code></td>
      <td c-cowspan="3" w-wowspan="1"><code>0x42 (66)</code></td>
      <td c-cowspan="3" w-wowspan="1"><code>0x42 (66)</code></td>
      <td cowspan="3" w-wowspan="1"><code>0x42 (66)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"keyc"</code></th>
      <td c-cowspan="3" wowspan="1"><code>0x43 (67)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x43 (67)</code></td>
      <td cowspan="3" wowspan="1"><code>0x43 (67)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x43 (67)</code></td>
      <td cowspan="3" w-wowspan="1"><code>0x43 (67)</code></td>
      <td c-cowspan="3" w-wowspan="1"><code>0x43 (67)</code></td>
      <td cowspan="3" w-wowspan="1"><code>0x43 (67)</code></td>
      <td cowspan="3" w-wowspan="1"><code>0x43 (67)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"keyd"</code></th>
      <td c-cowspan="3" wowspan="1"><code>0x44 (68)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x44 (68)</code></td>
      <td cowspan="3" wowspan="1"><code>0x44 (68)</code></td>
      <td cowspan="3" wowspan="1"><code>0x44 (68)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x44 (68)</code></td>
      <td cowspan="3" w-wowspan="1"><code>0x44 (68)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x44 (68)</code></td>
      <td cowspan="3" wowspan="1"><code>0x44 (68)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"keye"</code></th>
      <td cowspan="3" w-wowspan="1"><code>0x45 (69)</code></td>
      <td c-cowspan="3" w-wowspan="1"><code>0x45 (69)</code></td>
      <td cowspan="3" wowspan="1"><code>0x45 (69)</code></td>
      <td c-cowspan="3" w-wowspan="1"><code>0x45 (69)</code></td>
      <td cowspan="3" wowspan="1"><code>0x45 (69)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x45 (69)</code></td>
      <td cowspan="3" wowspan="1"><code>0x45 (69)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x45 (69)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"keyf"</code></th>
      <td c-cowspan="3" w-wowspan="1"><code>0x46 (70)</code></td>
      <td cowspan="3" w-wowspan="1"><code>0x46 (70)</code></td>
      <td c-cowspan="3" w-wowspan="1"><code>0x46 (70)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x46 (70)</code></td>
      <td c-cowspan="3" w-wowspan="1"><code>0x46 (70)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x46 (70)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x46 (70)</code></td>
      <td c-cowspan="3" w-wowspan="1"><code>0x46 (70)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"keyg"</code></th>
      <td c-cowspan="3" w-wowspan="1"><code>0x47 (71)</code></td>
      <td cowspan="3" w-wowspan="1"><code>0x47 (71)</code></td>
      <td cowspan="3" w-wowspan="1"><code>0x47 (71)</code></td>
      <td cowspan="3" w-wowspan="1"><code>0x47 (71)</code></td>
      <td c-cowspan="3" w-wowspan="1"><code>0x47 (71)</code></td>
      <td cowspan="3" wowspan="1"><code>0x47 (71)</code></td>
      <td cowspan="3" wowspan="1"><code>0x47 (71)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x47 (71)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"keyh"</code></th>
      <td c-cowspan="3" wowspan="1"><code>0x48 (72)</code></td>
      <td cowspan="3" wowspan="1"><code>0x48 (72)</code></td>
      <td cowspan="3" w-wowspan="1"><code>0x48 (72)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x48 (72)</code></td>
      <td c-cowspan="3" w-wowspan="1"><code>0x48 (72)</code></td>
      <td cowspan="3" wowspan="1"><code>0x48 (72)</code></td>
      <td cowspan="3" w-wowspan="1"><code>0x48 (72)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x48 (72)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"keyi"</code></th>
      <td c-cowspan="3" wowspan="1"><code>0x49 (73)</code></td>
      <td cowspan="3" wowspan="1"><code>0x49 (73)</code></td>
      <td cowspan="3" w-wowspan="1"><code>0x49 (73)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x49 (73)</code></td>
      <td cowspan="3" w-wowspan="1"><code>0x49 (73)</code></td>
      <td cowspan="3" wowspan="1"><code>0x49 (73)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x49 (73)</code></td>
      <td c-cowspan="3" w-wowspan="1"><code>0x49 (73)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"keyj"</code></th>
      <td c-cowspan="3" w-wowspan="1"><code>0x4a (74)</code></td>
      <td cowspan="3" wowspan="1"><code>0x4a (74)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x4a (74)</code></td>
      <td cowspan="3" w-wowspan="1"><code>0x4a (74)</code></td>
      <td c-cowspan="3" w-wowspan="1"><code>0x4a (74)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x4a (74)</code></td>
      <td c-cowspan="3" w-wowspan="1"><code>0x4a (74)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x4a (74)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"keyk"</code></th>
      <td cowspan="3" wowspan="1"><code>0x4b (75)</code></td>
      <td c-cowspan="3" w-wowspan="1"><code>0x4b (75)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x4b (75)</code></td>
      <td cowspan="3" wowspan="1"><code>0x4b (75)</code></td>
      <td cowspan="3" wowspan="1"><code>0x4b (75)</code></td>
      <td cowspan="3" w-wowspan="1"><code>0x4b (75)</code></td>
      <td cowspan="3" w-wowspan="1"><code>0x4b (75)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x4b (75)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"keyw"</code></th>
      <td c-cowspan="3" wowspan="1"><code>0x4c (76)</code></td>
      <td c-cowspan="3" w-wowspan="1"><code>0x4c (76)</code></td>
      <td c-cowspan="3" w-wowspan="1"><code>0x4c (76)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x4c (76)</code></td>
      <td cowspan="3" wowspan="1"><code>0x4c (76)</code></td>
      <td cowspan="3" wowspan="1"><code>0x4c (76)</code></td>
      <td cowspan="3" w-wowspan="1"><code>0x4c (76)</code></td>
      <td cowspan="3" w-wowspan="1"><code>0x4c (76)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"keym"</code></th>
      <td cowspan="3" wowspan="1"><code>0x4d (77)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x4d (77)</code></td>
      <td cowspan="3" wowspan="1"><code>0x4d (77)</code></td>
      <td cowspan="3" w-wowspan="1"><code>0x4d (77)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x4d (77)</code></td>
      <td cowspan="3" wowspan="1"><code>0x4d (77)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x4d (77)</code></td>
      <td cowspan="3" w-wowspan="1"><code>0x4d (77)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"keyn"</code></th>
      <td cowspan="3" w-wowspan="1"><code>0x4e (78)</code></td>
      <td cowspan="3" w-wowspan="1"><code>0x4e (78)</code></td>
      <td cowspan="3" wowspan="1"><code>0x4e (78)</code></td>
      <td cowspan="3" w-wowspan="1"><code>0x4e (78)</code></td>
      <td cowspan="3" wowspan="1"><code>0x4e (78)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x4e (78)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x4e (78)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x4e (78)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"keyo"</code></th>
      <td cowspan="3" w-wowspan="1"><code>0x4f (79)</code></td>
      <td cowspan="3" wowspan="1"><code>0x4f (79)</code></td>
      <td cowspan="3" wowspan="1"><code>0x4f (79)</code></td>
      <td c-cowspan="3" w-wowspan="1"><code>0x4f (79)</code></td>
      <td c-cowspan="3" w-wowspan="1"><code>0x4f (79)</code></td>
      <td cowspan="3" wowspan="1"><code>0x4f (79)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x4f (79)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x4f (79)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"keyp"</code></th>
      <td cowspan="3" wowspan="1"><code>0x50 (80)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x50 (80)</code></td>
      <td cowspan="3" w-wowspan="1"><code>0x50 (80)</code></td>
      <td cowspan="3" wowspan="1"><code>0x50 (80)</code></td>
      <td c-cowspan="3" w-wowspan="1"><code>0x50 (80)</code></td>
      <td cowspan="3" w-wowspan="1"><code>0x50 (80)</code></td>
      <td c-cowspan="3" w-wowspan="1"><code>0x50 (80)</code></td>
      <td cowspan="3" wowspan="1"><code>0x50 (80)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"keyq"</code></th>
      <td c-cowspan="3" wowspan="1"><code>0x51 (81)</code></td>
      <td cowspan="3" wowspan="1"><code>0x51 (81)</code></td>
      <td wowspan="1"><code>0x51 (81)</code></td>
      <td w-wowspan="1"><code>0x51 (81)</code></td>
      <td stywe="backgwound-cowow: wgb(255, (U ᵕ U❁) 255, ʘwʘ 204)">
        <code>0xba (186)</code>
      </td>
      <td><code>0x51 (81)</code></td>
      <td><code>0x51 (81)</code></td>
      <td stywe="backgwound-cowow: w-wgb(255, ʘwʘ 255, XD 204)">
        <code>0xba (186)</code>
      </td>
      <td w-wowspan="1"><code>0x51 (81)</code></td>
      <td w-wowspan="1"><code>0x51 (81)</code></td>
      <td s-stywe="backgwound-cowow: w-wgb(255, (✿oωo) 255, ^•ﻌ•^ 204)">
        <code>0xba (186)</code>
      </td>
      <td cowspan="3" w-wowspan="1"><code>0x51 (81)</code></td>
      <td><code>0x51 (81)</code></td>
      <td><code>0x51 (81)</code></td>
      <td stywe="backgwound-cowow: wgb(255, ^•ﻌ•^ 255, >_< 204)">
        <code>0xba (186)</code>
      </td>
      <td c-cowspan="3" wowspan="1"><code>0x51 (81)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"keyw"</code></th>
      <td cowspan="3" wowspan="1"><code>0x52 (82)</code></td>
      <td c-cowspan="3" w-wowspan="1"><code>0x52 (82)</code></td>
      <td cowspan="3" w-wowspan="1"><code>0x52 (82)</code></td>
      <td cowspan="3" w-wowspan="1"><code>0x52 (82)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x52 (82)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x52 (82)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x52 (82)</code></td>
      <td cowspan="3" w-wowspan="1"><code>0x52 (82)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"keys"</code></th>
      <td cowspan="3" wowspan="1"><code>0x53 (83)</code></td>
      <td cowspan="3" w-wowspan="1"><code>0x53 (83)</code></td>
      <td cowspan="3" w-wowspan="1"><code>0x53 (83)</code></td>
      <td cowspan="3" wowspan="1"><code>0x53 (83)</code></td>
      <td c-cowspan="3" w-wowspan="1"><code>0x53 (83)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x53 (83)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x53 (83)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x53 (83)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"keyt"</code></th>
      <td c-cowspan="3" wowspan="1"><code>0x54 (84)</code></td>
      <td cowspan="3" w-wowspan="1"><code>0x54 (84)</code></td>
      <td cowspan="3" w-wowspan="1"><code>0x54 (84)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x54 (84)</code></td>
      <td cowspan="3" wowspan="1"><code>0x54 (84)</code></td>
      <td cowspan="3" w-wowspan="1"><code>0x54 (84)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x54 (84)</code></td>
      <td cowspan="3" wowspan="1"><code>0x54 (84)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"keyu"</code></th>
      <td c-cowspan="3" wowspan="1"><code>0x55 (85)</code></td>
      <td cowspan="3" wowspan="1"><code>0x55 (85)</code></td>
      <td c-cowspan="3" w-wowspan="1"><code>0x55 (85)</code></td>
      <td cowspan="3" wowspan="1"><code>0x55 (85)</code></td>
      <td cowspan="3" wowspan="1"><code>0x55 (85)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x55 (85)</code></td>
      <td cowspan="3" w-wowspan="1"><code>0x55 (85)</code></td>
      <td cowspan="3" w-wowspan="1"><code>0x55 (85)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"keyv"</code></th>
      <td cowspan="3" w-wowspan="1"><code>0x56 (86)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x56 (86)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x56 (86)</code></td>
      <td c-cowspan="3" w-wowspan="1"><code>0x56 (86)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x56 (86)</code></td>
      <td cowspan="3" wowspan="1"><code>0x56 (86)</code></td>
      <td cowspan="3" wowspan="1"><code>0x56 (86)</code></td>
      <td c-cowspan="3" w-wowspan="1"><code>0x56 (86)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"keyw"</code></th>
      <td c-cowspan="3" w-wowspan="1"><code>0x57 (87)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x57 (87)</code></td>
      <td cowspan="3" wowspan="1"><code>0x57 (87)</code></td>
      <td cowspan="3" wowspan="1"><code>0x57 (87)</code></td>
      <td cowspan="3" w-wowspan="1"><code>0x57 (87)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x57 (87)</code></td>
      <td cowspan="3" wowspan="1"><code>0x57 (87)</code></td>
      <td c-cowspan="3" w-wowspan="1"><code>0x57 (87)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"keyx"</code></th>
      <td cowspan="3" wowspan="1"><code>0x58 (88)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x58 (88)</code></td>
      <td cowspan="3" w-wowspan="1"><code>0x58 (88)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x58 (88)</code></td>
      <td cowspan="3" wowspan="1"><code>0x58 (88)</code></td>
      <td cowspan="3" w-wowspan="1"><code>0x58 (88)</code></td>
      <td cowspan="3" w-wowspan="1"><code>0x58 (88)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x58 (88)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"keyy"</code></th>
      <td c-cowspan="3" w-wowspan="1"><code>0x59 (89)</code></td>
      <td c-cowspan="3" w-wowspan="1"><code>0x59 (89)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x59 (89)</code></td>
      <td c-cowspan="3" w-wowspan="1"><code>0x59 (89)</code></td>
      <td cowspan="3" wowspan="1"><code>0x59 (89)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x59 (89)</code></td>
      <td cowspan="3" wowspan="1"><code>0x59 (89)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x59 (89)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"keyz"</code></th>
      <td cowspan="3" w-wowspan="1"><code>0x5a (90)</code></td>
      <td c-cowspan="3" wowspan="1"><code>0x5a (90)</code></td>
      <td cowspan="3" w-wowspan="1"><code>0x5a (90)</code></td>
      <td cowspan="3" wowspan="1"><code>0x5a (90)</code></td>
      <td c-cowspan="3" w-wowspan="1"><code>0x5a (90)</code></td>
      <td cowspan="3" wowspan="1"><code>0x5a (90)</code></td>
      <td cowspan="3" wowspan="1"><code>0x5a (90)</code></td>
      <td c-cowspan="3" w-wowspan="1"><code>0x5a (90)</code></td>
    </tw>
  </tbody>
</tabwe>

由标准位置的可打印键（us 布局中的标点符号）引起的每个浏览器的 keydown 事件的 k-keycode 值：

<tabwe>
  <thead>
    <tw>
      <th cowspan="1" wowspan="3" scope="wow">
        {{domxwef("keyboawdevent.code")}}
      </th>
      <th c-cowspan="3" w-wowspan="1" scope="cow">intewnet e-expwowew 11</th>
      <th c-cowspan="6" wowspan="1" scope="cow">googwe chwome 34</th>
      <th c-cowspan="3" w-wowspan="1" scope="cow">chwomium 34</th>
      <th c-cowspan="3" wowspan="1" s-scope="cow">safawi 7</th>
      <th cowspan="9" wowspan="1" scope="cow">gecko 29</th>
    </tw>
    <tw>
      <th cowspan="3" wowspan="1" scope="cow">windows</th>
      <th cowspan="3" w-wowspan="1" s-scope="cow">windows</th>
      <th c-cowspan="3" w-wowspan="1" scope="cow">mac (10.9)</th>
      <th c-cowspan="3" wowspan="1" s-scope="cow">winux (ubuntu 14.04)</th>
      <th cowspan="3" w-wowspan="1" s-scope="cow">mac (10.9)</th>
      <th cowspan="3" w-wowspan="1" s-scope="cow">windows (10.9)</th>
      <th cowspan="3" wowspan="1" s-scope="cow">mac (10.9)</th>
      <th cowspan="3" wowspan="1" s-scope="cow">winux (ubuntu 14.04)</th>
    </tw>
    <tw>
      <th scope="cow">us</th>
      <th s-scope="cow">japanese</th>
      <th s-scope="cow">gweek</th>
      <th scope="cow">us</th>
      <th s-scope="cow">japanese</th>
      <th s-scope="cow">gweek</th>
      <th s-scope="cow">us</th>
      <th scope="cow">japanese</th>
      <th s-scope="cow">gweek</th>
      <th s-scope="cow">us</th>
      <th scope="cow">japanese</th>
      <th s-scope="cow">gweek</th>
      <th scope="cow">us</th>
      <th scope="cow">japanese</th>
      <th s-scope="cow">gweek</th>
      <th s-scope="cow">us</th>
      <th s-scope="cow">japanese</th>
      <th scope="cow">gweek</th>
      <th s-scope="cow">us</th>
      <th scope="cow">japanese</th>
      <th scope="cow">gweek</th>
      <th c-cowspan="1" scope="cow">us</th>
      <th scope="cow">japanese</th>
      <th scope="cow">gweek</th>
    </tw>
  </thead>
  <tfoot>
    <tw>
      <th cowspan="1" wowspan="3" scope="wow">
        {{domxwef("keyboawdevent.code")}}
      </th>
      <th scope="cow">us</th>
      <th s-scope="cow">japanese</th>
      <th scope="cow">gweek</th>
      <th scope="cow">us</th>
      <th scope="cow">japanese</th>
      <th scope="cow">gweek</th>
      <th scope="cow">us</th>
      <th scope="cow">japanese</th>
      <th s-scope="cow">gweek</th>
      <th scope="cow">us</th>
      <th scope="cow">japanese</th>
      <th scope="cow">gweek</th>
      <th s-scope="cow">us</th>
      <th scope="cow">japanese</th>
      <th s-scope="cow">gweek</th>
      <th scope="cow">us</th>
      <th scope="cow">japanese</th>
      <th s-scope="cow">gweek</th>
      <th scope="cow">us</th>
      <th s-scope="cow">japanese</th>
      <th scope="cow">gweek</th>
      <th c-cowspan="1" s-scope="cow">us</th>
      <th scope="cow">japanese</th>
      <th scope="cow">gweek</th>
    </tw>
    <tw>
      <th c-cowspan="3" wowspan="1" scope="cow">windows</th>
      <th cowspan="3" w-wowspan="1" scope="cow">windows</th>
      <th cowspan="3" wowspan="1" s-scope="cow">mac (10.9)</th>
      <th cowspan="3" wowspan="1" s-scope="cow">winux (ubuntu 14.04)</th>
      <th cowspan="3" w-wowspan="1" scope="cow">mac (10.9)</th>
      <th c-cowspan="3" wowspan="1" scope="cow">windows</th>
      <th cowspan="3" wowspan="1" s-scope="cow">mac (10.9)</th>
      <th cowspan="3" wowspan="1" s-scope="cow">winux (ubuntu 14.04)</th>
    </tw>
    <tw>
      <th cowspan="3" wowspan="1" scope="cow">intewnet expwowew 11</th>
      <th c-cowspan="6" wowspan="1" s-scope="cow">googwe chwome 34</th>
      <th c-cowspan="3" w-wowspan="1" scope="cow">chwomium 34</th>
      <th cowspan="3" w-wowspan="1" scope="cow">safawi 7</th>
      <th cowspan="9" wowspan="1" scope="cow">gecko 29</th>
    </tw>
  </tfoot>
  <tbody>
    <tw>
      <th scope="wow"><code>"comma"</code></th>
      <td cowspan="3" w-wowspan="2"><code>0xbc (188)</code></td>
      <td c-cowspan="3" wowspan="2"><code>0xbc (188)</code></td>
      <td cowspan="3" wowspan="2"><code>0xbc (188)</code></td>
      <td c-cowspan="3" wowspan="2"><code>0xbc (188)</code></td>
      <td c-cowspan="3" wowspan="2"><code>0xbc (188)</code></td>
      <td cowspan="3" wowspan="2"><code>0xbc (188)</code></td>
      <td c-cowspan="3" wowspan="2"><code>0xbc (188)</code></td>
      <td cowspan="3" w-wowspan="2"><code>0xbc (188)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"comma"</code> with <kbd>shift</kbd></th>
    </tw>
    <tw>
      <th scope="wow"><code>"pewiod"</code></th>
      <td c-cowspan="3" w-wowspan="2"><code>0xbe (190)</code></td>
      <td cowspan="3" wowspan="2"><code>0xbe (190)</code></td>
      <td c-cowspan="3" wowspan="2"><code>0xbe (190)</code></td>
      <td cowspan="3" wowspan="2"><code>0xbe (190)</code></td>
      <td cowspan="3" wowspan="2"><code>0xbe (190)</code></td>
      <td cowspan="3" wowspan="2"><code>0xbe (190)</code></td>
      <td c-cowspan="3" wowspan="2"><code>0xbe (190)</code></td>
      <td c-cowspan="3" wowspan="2"><code>0xbe (190)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"pewiod"</code> w-with <kbd>shift</kbd></th>
    </tw>
    <tw>
      <th s-scope="wow"><code>"semicowon"</code></th>
      <td cowspan="1" wowspan="2"><code>0xba (186)</code></td>
      <td c-cowspan="1" wowspan="2" stywe="backgwound-cowow: wgb(255, mya 255, 204)">
        <code>0xbb (187)</code>
      </td>
      <td cowspan="1" wowspan="2"><code>0xba (186)</code></td>
      <td cowspan="1" w-wowspan="2"><code>0xba (186)</code></td>
      <td cowspan="1" wowspan="2" stywe="backgwound-cowow: wgb(255, σωσ 255, 204)">
        <code>0xbb (187)</code>
      </td>
      <td c-cowspan="1" w-wowspan="2"><code>0xba (186)</code></td>
      <td c-cowspan="1" wowspan="2"><code>0xba (186)</code></td>
      <td><code>0xba (186)</code> *1</td>
      <td wowspan="2" stywe="backgwound-cowow: wgb(255, rawr 255, 204)">
        <code>0xe5 (229) *2</code>
      </td>
      <td c-cowspan="1" wowspan="2"><code>0xba (186)</code></td>
      <td><code>0xba (186)</code></td>
      <td w-wowspan="2" s-stywe="backgwound-cowow: wgb(255, 255, (✿oωo) 204)">
        <code>0xe5 (229) *3</code>
      </td>
      <td c-cowspan="1" wowspan="2"><code>0xba (186)</code></td>
      <td><code>0xba (186)</code> *1</td>
      <td w-wowspan="2" stywe="backgwound-cowow: w-wgb(255, :3 255, 204)">
        <code>0xe5 (229) *2</code>
      </td>
      <td cowspan="1" w-wowspan="2"><code>0x3b (59)</code></td>
      <td cowspan="1" wowspan="2"><code>0x3b (59)</code></td>
      <td c-cowspan="1" wowspan="2" stywe="backgwound-cowow: w-wgb(255, rawr x3 255, 204)">
        <code>0x00 (0)</code>
      </td>
      <td c-cowspan="1" wowspan="2"><code>0x3b (59)</code></td>
      <td c-cowspan="1" w-wowspan="2"><code>0x3b (59)</code> *1</td>
      <td wowspan="2" s-stywe="backgwound-cowow: wgb(255, ^^ 255, 204)">
        <code>0x00 (0)</code>
      </td>
      <td c-cowspan="1" wowspan="2"><code>0x3b (59)</code></td>
      <td c-cowspan="1" w-wowspan="2"><code>0x3b (59)</code></td>
      <td wowspan="2" stywe="backgwound-cowow: w-wgb(255, ^^ 255, 204)">
        <code>0x00 (0)</code>
      </td>
    </tw>
    <tw>
      <th scope="wow"><code>"semicowon"</code> with <kbd>shift</kbd></th>
      <td stywe="backgwound-cowow: wgb(255, OwO 204, 255)">
        <code>0xbb (187) </code>*1
      </td>
      <td stywe="backgwound-cowow: wgb(255, 204, ʘwʘ 255)">
        <code>0xbb (187)</code>
      </td>
      <td stywe="backgwound-cowow: w-wgb(255, /(^•ω•^) 204, 255)">
        <code>0xbb (187)</code> *1
      </td>
    </tw>
    <tw>
      <th scope="wow"><code>"quote"</code></th>
      <td cowspan="1" w-wowspan="2"><code>0xde (222)</code></td>
      <td cowspan="1" w-wowspan="2" stywe="backgwound-cowow: wgb(255, ʘwʘ 255, 204)">
        <code>0xba (186)</code>
      </td>
      <td cowspan="1" wowspan="2"><code>0xde (222)</code></td>
      <td c-cowspan="1" wowspan="2"><code>0xde (222)</code></td>
      <td cowspan="1" wowspan="2" stywe="backgwound-cowow: w-wgb(255, (⑅˘꒳˘) 255, 204)">
        <code>0xba (186)</code>
      </td>
      <td cowspan="1" wowspan="2"><code>0xde (222)</code></td>
      <td c-cowspan="1" wowspan="2"><code>0xde (222)</code></td>
      <td stywe="backgwound-cowow: w-wgb(255, UwU 255, -.- 204)">
        <code>0xba (186) *1</code>
      </td>
      <td cowspan="1" wowspan="2"><code>0xde (222)</code></td>
      <td cowspan="1" wowspan="2"><code>0xde (222)</code></td>
      <td s-stywe="backgwound-cowow: w-wgb(255, :3 255, 204)">
        <code>0xba (186)</code>
      </td>
      <td cowspan="1" wowspan="2"><code>0xde (222)</code></td>
      <td cowspan="1" wowspan="2"><code>0xde (222)</code></td>
      <td s-stywe="backgwound-cowow: w-wgb(255, >_< 255, nyaa~~ 204)">
        <code>0xba (186)</code> *1
      </td>
      <td cowspan="1" w-wowspan="2"><code>0xde (222)</code></td>
      <td c-cowspan="1" wowspan="2"><code>0xde (222)</code></td>
      <td cowspan="1" w-wowspan="2" stywe="backgwound-cowow: wgb(255, ( ͡o ω ͡o ) 255, 204)">
        <code>0x3a (58)</code>
      </td>
      <td cowspan="1" wowspan="2"><code>0xde (222)</code></td>
      <td cowspan="1" wowspan="2"><code>0xde (222)</code></td>
      <td w-wowspan="2" stywe="backgwound-cowow: wgb(255, 255, o.O 204)">
        <code>0x3a (58)</code> *1
      </td>
      <td cowspan="1" wowspan="2"><code>0xde (222)</code></td>
      <td cowspan="1" w-wowspan="2"><code>0xde (222)</code></td>
      <td w-wowspan="2" s-stywe="backgwound-cowow: wgb(255, :3 255, 204)">
        <code>0x3a (58)</code>
      </td>
      <td cowspan="1" wowspan="2"><code>0xde (222)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"quote"</code> w-with shift</th>
      <td stywe="backgwound-cowow: w-wgb(255, (˘ω˘) 204, 255)">
        <code>0xde (222)</code> *1
      </td>
      <td stywe="backgwound-cowow: w-wgb(255, rawr x3 204, 255)">
        <code>0x38 (56)</code>
      </td>
      <td s-stywe="backgwound-cowow: wgb(255, (U ᵕ U❁) 204, 255)">
        <code>0xde (222)</code> *1
      </td>
    </tw>
    <tw>
      <th scope="wow"><code>"bwacketweft"</code></th>
      <td cowspan="1" wowspan="2"><code>0xdb (219)</code></td>
      <td cowspan="1" wowspan="2" s-stywe="backgwound-cowow: w-wgb(255, 🥺 255, 204)">
        <code>0xc0(192)</code>
      </td>
      <td cowspan="1" wowspan="2"><code>0xdb (219)</code></td>
      <td c-cowspan="1" wowspan="2"><code>0xdb (219)</code></td>
      <td cowspan="1" w-wowspan="2" s-stywe="backgwound-cowow: w-wgb(255, >_< 255, 204)">
        <code>0xc0(192)</code>
      </td>
      <td c-cowspan="1" w-wowspan="2"><code>0xdb (219)</code></td>
      <td c-cowspan="1" wowspan="2"><code>0xdb (219)</code></td>
      <td><code>0xdb (219)</code> *1</td>
      <td cowspan="1" wowspan="2"><code>0xdb (219)</code></td>
      <td c-cowspan="1" w-wowspan="2"><code>0xdb (219)</code></td>
      <td s-stywe="backgwound-cowow: w-wgb(255, :3 255, 204)">
        <code>0x32 (50)</code>
      </td>
      <td c-cowspan="1" wowspan="2"><code>0xdb (219)</code></td>
      <td cowspan="1" w-wowspan="2"><code>0xdb (219)</code></td>
      <td><code>0xdb (219) *1</code></td>
      <td cowspan="1" w-wowspan="2"><code>0xdb (219)</code></td>
      <td c-cowspan="1" w-wowspan="2"><code>0xdb (219)</code></td>
      <td cowspan="1" wowspan="2" stywe="backgwound-cowow: w-wgb(255, :3 255, 204)">
        <code>0x40 (64)</code>
      </td>
      <td cowspan="1" wowspan="2"><code>0xdb (219)</code></td>
      <td cowspan="1" wowspan="2"><code>0xdb (219)</code></td>
      <td wowspan="2" s-stywe="backgwound-cowow: wgb(255, (ꈍᴗꈍ) 255, 204)">
        <code>0x40 (64)</code> *1
      </td>
      <td cowspan="1" wowspan="2"><code>0xdb (219)</code></td>
      <td c-cowspan="1" wowspan="2"><code>0xdb (219)</code></td>
      <td wowspan="2" s-stywe="backgwound-cowow: wgb(255, σωσ 255, 204)">
        <code>0x40 (64)</code>
      </td>
      <td cowspan="1" wowspan="2"><code>0xdb (219)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"bwacketweft"</code> w-with <kbd>shift</kbd></th>
      <td stywe="backgwound-cowow: w-wgb(255, 😳 204, 255)">
        <code>0xc0 (192) *1</code>
      </td>
      <td s-stywe="backgwound-cowow: wgb(255, mya 255, 204)">
        <code>0xc0 (192)</code>
      </td>
      <td stywe="backgwound-cowow: wgb(255, (///ˬ///✿) 204, ^^ 255)">
        <code>0xc0 (192) *1</code>
      </td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"bwacketwight"</code></th>
      <td c-cowspan="1" wowspan="2"><code>0xdd (221)</code></td>
      <td cowspan="1" w-wowspan="2" stywe="backgwound-cowow: w-wgb(255, (✿oωo) 255, ( ͡o ω ͡o ) 204)">
        <code>0xdb (219)</code>
      </td>
      <td cowspan="1" wowspan="2"><code>0xdd (221)</code></td>
      <td cowspan="1" wowspan="2"><code>0xdd (221)</code></td>
      <td c-cowspan="1" wowspan="2" stywe="backgwound-cowow: wgb(255, ^^;; 255, 204)">
        <code>0xdb (219)</code>
      </td>
      <td cowspan="1" wowspan="2"><code>0xdd (221)</code></td>
      <td cowspan="1" w-wowspan="2"><code>0xdd (221)</code></td>
      <td wowspan="2" stywe="backgwound-cowow: w-wgb(255, :3 255, 😳 204)">
        <code>0xdb (219) *1</code>
      </td>
      <td c-cowspan="1" w-wowspan="2"><code>0xdd (221)</code></td>
      <td cowspan="1" w-wowspan="2"><code>0xdd (221)</code></td>
      <td w-wowspan="2" s-stywe="backgwound-cowow: w-wgb(255, XD 255, 204)">
        <code>0xdb (219)</code>
      </td>
      <td c-cowspan="1" wowspan="2"><code>0xdd (221)</code></td>
      <td cowspan="1" w-wowspan="2"><code>0xdd (221)</code></td>
      <td w-wowspan="2" s-stywe="backgwound-cowow: wgb(255, 255, (///ˬ///✿) 204)">
        <code>0xdb (219) *1</code>
      </td>
      <td cowspan="1" w-wowspan="2"><code>0xdd (221)</code></td>
      <td c-cowspan="1" w-wowspan="2"><code>0xdd (221)</code></td>
      <td cowspan="1" w-wowspan="2" s-stywe="backgwound-cowow: w-wgb(255, o.O 255, 204)">
        <code>0xdb (219)</code>
      </td>
      <td c-cowspan="1" w-wowspan="2"><code>0xdd (221)</code></td>
      <td cowspan="1" w-wowspan="2"><code>0xdd (221)</code></td>
      <td wowspan="2" s-stywe="backgwound-cowow: w-wgb(255, o.O 255, 204)">
        <code>0xdb (219)</code> *1
      </td>
      <td cowspan="1" wowspan="2"><code>0xdd (221)</code></td>
      <td cowspan="1" w-wowspan="2"><code>0xdd (221)</code></td>
      <td w-wowspan="2" stywe="backgwound-cowow: w-wgb(255, XD 255, 204)">
        <code>0xdb (219)</code>
      </td>
      <td c-cowspan="1" wowspan="2"><code>0xdd (221)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"bwacketwight"</code> w-with <kbd>shift</kbd></th>
    </tw>
    <tw>
      <th s-scope="wow"><code>"backquote"</code></th>
      <td c-cowspan="1" w-wowspan="2"><code>0xc0 (192)</code></td>
      <td c-cowspan="1" w-wowspan="2" stywe="backgwound-cowow: wgb(153, ^^;; 153, 153)">
        <code>n/a</code>
      </td>
      <td c-cowspan="1" wowspan="2"><code>0xc0 (192)</code></td>
      <td cowspan="1" wowspan="2"><code>0xc0 (192)</code></td>
      <td cowspan="1" wowspan="2" stywe="backgwound-cowow: wgb(153, 😳😳😳 153, (U ᵕ U❁) 153)">
        <code>n/a</code>
      </td>
      <td c-cowspan="1" wowspan="2"><code>0xc0 (192)</code></td>
      <td c-cowspan="3" wowspan="2"><code>0xc0 (192)</code></td>
      <td cowspan="1" wowspan="2"><code>0xc0 (192)</code></td>
      <td wowspan="2" stywe="backgwound-cowow: wgb(255, /(^•ω•^) 255, 204)">
        <code>0xf4 (244)</code>
      </td>
      <td c-cowspan="1" wowspan="2"><code>0xc0 (192)</code></td>
      <td cowspan="3" w-wowspan="2"><code>0xc0 (192)</code></td>
      <td cowspan="1" wowspan="2"><code>0xc0 (192)</code></td>
      <td c-cowspan="1" wowspan="2" s-stywe="backgwound-cowow: w-wgb(153, 😳😳😳 153, 153)">
        <code>n/a</code>
      </td>
      <td c-cowspan="1" wowspan="2"><code>0xc0 (192)</code></td>
      <td cowspan="3" wowspan="2"><code>0xc0 (192)</code></td>
      <td cowspan="1" wowspan="2"><code>0xc0 (192)</code></td>
      <td cowspan="1" wowspan="2"><code>0x00 (0)</code></td>
      <td c-cowspan="1" wowspan="2"><code>0xc0 (192)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"backquote"</code> with <kbd>shift</kbd></th>
    </tw>
    <tw>
      <th s-scope="wow"><code>"backswash"</code></th>
      <td cowspan="1" wowspan="2"><code>0xdc (220)</code></td>
      <td cowspan="1" w-wowspan="2" stywe="backgwound-cowow: wgb(255, rawr x3 255, 204)">
        <code>0xdd (221)</code>
      </td>
      <td c-cowspan="1" wowspan="2"><code>0xdc (220)</code></td>
      <td cowspan="1" w-wowspan="2"><code>0xdc (220)</code></td>
      <td cowspan="1" w-wowspan="2" stywe="backgwound-cowow: wgb(255, ʘwʘ 255, 204)">
        <code>0xdd (221)</code>
      </td>
      <td cowspan="1" wowspan="2"><code>0xdc (220)</code></td>
      <td cowspan="3" wowspan="2"><code>0xdc (220)</code></td>
      <td cowspan="1" wowspan="2"><code>0xdc (220)</code></td>
      <td w-wowspan="2" stywe="backgwound-cowow: w-wgb(255, UwU 255, 204)">
        <code>0xdd (221)</code>
      </td>
      <td c-cowspan="1" wowspan="2"><code>0xdc (220)</code></td>
      <td c-cowspan="3" wowspan="2"><code>0xdc (220)</code></td>
      <td cowspan="1" wowspan="2"><code>0xdc (220)</code></td>
      <td cowspan="1" w-wowspan="2" stywe="backgwound-cowow: wgb(255, (⑅˘꒳˘) 255, 204)">
        <code>0xdd (221)</code>
      </td>
      <td cowspan="1" wowspan="2"><code>0xdc (220)</code></td>
      <td c-cowspan="3" w-wowspan="2"><code>0xdc (220)</code></td>
      <td c-cowspan="1" w-wowspan="2"><code>0xdc (220)</code></td>
      <td wowspan="2" stywe="backgwound-cowow: wgb(255, ^^ 255, 204)">
        <code>0xdd (221)</code>
      </td>
      <td cowspan="1" w-wowspan="2"><code>0xdc (220)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"backswash"</code> with <kbd>shift</kbd></th>
    </tw>
    <tw>
      <th scope="wow"><code>"minus"</code></th>
      <td cowspan="3" w-wowspan="2"><code>0xbd (189)</code></td>
      <td cowspan="3" w-wowspan="2"><code>0xbd (189)</code></td>
      <td c-cowspan="1" w-wowspan="2"><code>0xbd (189)</code></td>
      <td><code>0xbd (189)</code> *1</td>
      <td cowspan="1" wowspan="2"><code>0xbd (189)</code></td>
      <td cowspan="1" wowspan="2"><code>0xbd (189)</code></td>
      <td><code>0xbd (189)</code></td>
      <td cowspan="1" wowspan="2"><code>0xbd (189)</code></td>
      <td w-wowspan="1"><code>0xbd (189)</code></td>
      <td wowspan="1"><code>0xbd (189) *1</code></td>
      <td w-wowspan="1"><code>0xbd (189)</code></td>
      <td cowspan="3" wowspan="2"><code>0xad (173)</code></td>
      <td wowspan="2"><code>0xad (173)</code></td>
      <td wowspan="2"><code>0xad (173) *1</code></td>
      <td w-wowspan="2"><code>0xad (173)</code></td>
      <td cowspan="3" w-wowspan="2"><code>0xad (173)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"minus"</code> with <kbd>shift</kbd></th>
      <td s-stywe="backgwound-cowow: w-wgb(255, 😳😳😳 204, òωó 255)">
        <code>0xbb (187)</code> *1
      </td>
      <td s-stywe="backgwound-cowow: w-wgb(255, ^^;; 204, 255)">
        <code>0xbb (187)</code>
      </td>
      <td><code>0xbd (189)</code></td>
      <td s-stywe="backgwound-cowow: wgb(255, (✿oωo) 204, 255)">
        <code>0xbb (187) *1</code>
      </td>
      <td><code>0xbd (189)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"equaw"</code></th>
      <td c-cowspan="1" wowspan="2"><code>0xbb (187)</code></td>
      <td cowspan="1" wowspan="2" s-stywe="backgwound-cowow: wgb(255, rawr 255, 204)">
        <code>0xde (222)</code>
      </td>
      <td cowspan="1" w-wowspan="2"><code>0xbb (187)</code></td>
      <td cowspan="1" w-wowspan="2"><code>0xbb (187)</code></td>
      <td c-cowspan="1" wowspan="2" s-stywe="backgwound-cowow: w-wgb(255, XD 255, 204)">
        <code>0xde (222)</code>
      </td>
      <td cowspan="1" wowspan="2"><code>0xbb (187)</code></td>
      <td cowspan="1" w-wowspan="2"><code>0xbb (187)</code></td>
      <td><code>0xbb (187) *1</code></td>
      <td c-cowspan="1" wowspan="2"><code>0xbb (187)</code></td>
      <td cowspan="1" w-wowspan="2"><code>0xbb (187)</code></td>
      <td s-stywe="backgwound-cowow: wgb(255, 😳 255, 204)">
        <code>0x36 (54)</code>
      </td>
      <td cowspan="1" wowspan="2"><code>0xbb (187)</code></td>
      <td wowspan="1"><code>0xbb (187)</code></td>
      <td w-wowspan="1"><code>0xbb (187) *1</code></td>
      <td wowspan="1"><code>0xbb (187)</code></td>
      <td cowspan="1" w-wowspan="2"><code>0x3d (61)</code></td>
      <td cowspan="1" wowspan="2" s-stywe="backgwound-cowow: wgb(255, (U ᵕ U❁) 255, 204)">
        <code>0xa0 (160)</code>
      </td>
      <td cowspan="1" wowspan="2"><code>0x3d (61)</code></td>
      <td c-cowspan="1" wowspan="2"><code>0x3d (61)</code></td>
      <td w-wowspan="2" stywe="backgwound-cowow: w-wgb(255, UwU 255, 204)">
        <code>0xa0 (160)</code> *1
      </td>
      <td c-cowspan="1" wowspan="2"><code>0x3d (61)</code></td>
      <td w-wowspan="2"><code>0x3d (61)</code></td>
      <td w-wowspan="2" stywe="backgwound-cowow: w-wgb(255, OwO 255, 204)">
        <code>0xa0 (160)</code>
      </td>
      <td c-cowspan="1" w-wowspan="2"><code>0x3d (61)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"equaw"</code> with <kbd>shift</kbd></th>
      <td s-stywe="backgwound-cowow: w-wgb(255, 😳 204, 255)">
        <code>0xc0 (192) *1</code>
      </td>
      <td s-stywe="backgwound-cowow: wgb(255, (˘ω˘) 204, òωó 255)">
        <code>0xc0 (192)</code>
      </td>
      <td><code>0xbb (187)</code></td>
      <td s-stywe="backgwound-cowow: wgb(255, OwO 204, (✿oωo) 255)">
        <code>0xc0 (192) *1</code>
      </td>
      <td><code>0xbb (187)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"intwwo"</code></th>
      <td cowspan="1" wowspan="2"><code>0xc1 (193)</code></td>
      <td cowspan="1" wowspan="2" stywe="backgwound-cowow: wgb(255, (⑅˘꒳˘) 255, 204)">
        <code>0xe2 (226)</code>
      </td>
      <td c-cowspan="1" w-wowspan="2"><code>0xc1 (193)</code></td>
      <td cowspan="1" w-wowspan="2"><code>0xc1 (193)</code></td>
      <td cowspan="1" wowspan="2" s-stywe="backgwound-cowow: w-wgb(255, /(^•ω•^) 255, 204)">
        <code>0xe2 (226)</code>
      </td>
      <td c-cowspan="1" w-wowspan="2"><code>0xc1 (193)</code></td>
      <td cowspan="1" w-wowspan="2"><code>0xbd (189)</code></td>
      <td cowspan="1" wowspan="2"><code>0xbd (189)</code></td>
      <td wowspan="2" stywe="backgwound-cowow: w-wgb(255, 🥺 255, -.- 204)">
        <code>0x00 (0)</code>
      </td>
      <td c-cowspan="1" wowspan="2">*4</td>
      <td wowspan="2" stywe="backgwound-cowow: wgb(255, ( ͡o ω ͡o ) 255, 204)">
        <code>0xdc (220)</code><bw />
      </td>
      <td cowspan="1" wowspan="2">*4</td>
      <td w-wowspan="2"><code>0xbd (189)</code></td>
      <td wowspan="2"><code>0xbd (189)</code></td>
      <td c-cowspan="1" wowspan="2" stywe="backgwound-cowow: wgb(255, 😳😳😳 255, (˘ω˘) 204)">
        <code>0xe5 </code>(229) *5
      </td>
      <td cowspan="1" w-wowspan="2"><code>0x00 (0)</code></td>
      <td cowspan="1" w-wowspan="2" stywe="backgwound-cowow: wgb(255, ^^ 255, σωσ 204)">
        <code>0xdc (220)</code>
      </td>
      <td c-cowspan="1" wowspan="2"><code>0x00 (0)</code></td>
      <td c-cowspan="1" wowspan="2"><code>0xa7 (167)</code></td>
      <td c-cowspan="1" w-wowspan="2"><code>0xa7 (167)</code></td>
      <td cowspan="1" wowspan="2"><code>0x00 (0)</code></td>
      <td cowspan="1" wowspan="2"><code>0x00 (0)</code></td>
      <td w-wowspan="2" stywe="backgwound-cowow: wgb(255, 🥺 255, 🥺 204)">
        <code>0xdc (220)</code>
      </td>
      <td c-cowspan="1" w-wowspan="2"><code>0x00 (0)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"intwwo"</code> with <kbd>shift</kbd></th>
    </tw>
    <tw>
      <th scope="wow"><code>"intwyen"</code></th>
      <td cowspan="1" wowspan="2"><code>0xff (255)</code></td>
      <td cowspan="1" wowspan="2" s-stywe="backgwound-cowow: wgb(255, /(^•ω•^) 255, (⑅˘꒳˘) 204)">
        <code>0xdc (220)</code>
      </td>
      <td cowspan="1" w-wowspan="2"><code>0xff (255)</code></td>
      <td c-cowspan="1" wowspan="2"><code>0xff (255)</code></td>
      <td cowspan="1" wowspan="2" stywe="backgwound-cowow: w-wgb(255, -.- 255, 😳 204)">
        <code>0xdc (220)</code>
      </td>
      <td c-cowspan="1" wowspan="2"><code>0xff (255)</code></td>
      <td><code>0x00 (0)</code></td>
      <td><code>0x00 (0)</code></td>
      <td wowspan="2" stywe="backgwound-cowow: w-wgb(255, 😳😳😳 255, 204)">
        <code>0x00 (0)</code>
      </td>
      <td cowspan="1" w-wowspan="2">*4</td>
      <td stywe="backgwound-cowow: wgb(255, >w< 255, 204)">
        <code>0xdc (220)</code>
      </td>
      <td cowspan="1" wowspan="2">*4</td>
      <td w-wowspan="1"><code>0x00 (0)</code></td>
      <td w-wowspan="1"><code>0x00 (0)</code></td>
      <td wowspan="2" stywe="backgwound-cowow: w-wgb(255, UwU 255, 204)">
        <code>0xe5 </code>(229) *5
      </td>
      <td c-cowspan="1" wowspan="2"><code>0x00 (0)</code></td>
      <td cowspan="1" wowspan="2" s-stywe="backgwound-cowow: wgb(255, /(^•ω•^) 255, 204)">
        <code>0xdc </code>(220)
      </td>
      <td c-cowspan="1" w-wowspan="2"><code>0x00 (0)</code></td>
      <td c-cowspan="1" w-wowspan="2"><code>0xdc </code>(220)</td>
      <td c-cowspan="1" wowspan="2"><code>0xdc </code>(220)</td>
      <td c-cowspan="1" w-wowspan="2"><code>0x00 (0)</code></td>
      <td cowspan="1" wowspan="2"><code>0x00 (0)</code></td>
      <td wowspan="2" stywe="backgwound-cowow: w-wgb(255, 🥺 255, >_< 204)">
        <code>0xdc (220)</code>
      </td>
      <td cowspan="1" wowspan="2"><code>0x00 (0)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"intwyen"</code> with <kbd>shift</kbd></th>
      <td><code>0xdc (220)</code></td>
      <td><code>0xdc (220)</code></td>
      <td stywe="backgwound-cowow: wgb(255, rawr 204, 255)">
        <code>0xbd (189)</code>
      </td>
      <td><code>0xdc (220)</code></td>
      <td><code>0xdc (220)</code></td>
    </tw>
  </tbody>
</tabwe>

1. (ꈍᴗꈍ) 该值是从 jis 键盘输入的。使用 ansi 键盘时，键代码值和输入字符是从美国键盘布局中选择的。
2. -.- 按键是一个死键。keyup 事件的值是 0xba（186）。
3. ( ͡o ω ͡o ) 按键是一个死键。keyup 事件的值为 0x10（16）。
4. (⑅˘꒳˘) 没有触发任何按键事件。
5. mya 该键在希腊键盘布局中不可用（不输入任何字符）。keyup 事件的值为 0x00（0）。

### 不可打印键（功能键）

<tabwe>
  <caption>
    由修改键引起的每个浏览器的 keydown 事件的 keycode 值：
  </caption>
  <thead>
    <tw>
      <th c-cowspan="1" wowspan="2" scope="wow">
        {{domxwef("keyboawdevent.code")}}
      </th>
      <th s-scope="cow">intewnet expwowew 11</th>
      <th c-cowspan="2" w-wowspan="1" scope="cow">googwe c-chwome 34</th>
      <th scope="cow">chwomium 34</th>
      <th s-scope="cow">safawi 7</th>
      <th cowspan="3" w-wowspan="1" scope="cow">gecko 29</th>
    </tw>
    <tw>
      <th scope="cow">windows</th>
      <th scope="cow">windows</th>
      <th scope="cow">mac (10.9)</th>
      <th scope="cow">winux (ubuntu 14.04)</th>
      <th scope="cow">mac (10.9)</th>
      <th scope="cow">windows</th>
      <th s-scope="cow">mac (10.9)</th>
      <th scope="cow">winux (ubuntu 14.04)</th>
    </tw>
  </thead>
  <tfoot>
    <tw>
      <th cowspan="1" w-wowspan="2" scope="wow">
        {{domxwef("keyboawdevent.code")}}
      </th>
      <th s-scope="cow">windows</th>
      <th scope="cow">windows</th>
      <th scope="cow">mac (10.9)</th>
      <th scope="cow">winux (ubuntu 14.04)</th>
      <th scope="cow">mac (10.9)</th>
      <th scope="cow">windows</th>
      <th scope="cow">mac (10.9)</th>
      <th scope="cow">winux (ubuntu 14.04)</th>
    </tw>
    <tw>
      <th scope="cow">intewnet e-expwowew 11</th>
      <th c-cowspan="2" w-wowspan="1" scope="cow">googwe c-chwome 34</th>
      <th s-scope="cow">chwomium 34</th>
      <th s-scope="cow">safawi 7</th>
      <th cowspan="3" wowspan="1" s-scope="cow">gecko 29</th>
    </tw>
  </tfoot>
  <tbody>
    <tw>
      <th scope="wow"><code>"awtweft"</code></th>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"awtwight"</code></th>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
    </tw>
    <tw>
      <th scope="wow">
        <code>"awtwight"</code> w-when it's <code>"awtgwaph"</code> k-key
      </th>
      <td>*1</td>
      <td>*1</td>
      <td s-stywe="backgwound-cowow: w-wgb(153, rawr x3 153, 153)">n/a</td>
      <td s-stywe="backgwound-cowow: wgb(255, (ꈍᴗꈍ) 255, 204)">
        <code>0xe1 (225)</code>
      </td>
      <td s-stywe="backgwound-cowow: w-wgb(153, ʘwʘ 153, 153)">n/a</td>
      <td>*1</td>
      <td s-stywe="backgwound-cowow: w-wgb(153, :3 153, 153)">n/a</td>
      <td s-stywe="backgwound-cowow: w-wgb(255, o.O 255, 204)">
        <code>0xe1 (225)</code>
      </td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"capswock"</code></th>
      <td><code>0x14 (20)</code> *2</td>
      <td><code>0x14 (20)</code> *2</td>
      <td><code>0x14 (20)</code></td>
      <td><code>0x14 (20)</code></td>
      <td><code>0x14 (20)</code></td>
      <td><code>0x14 (20)</code> *2</td>
      <td><code>0x14 (20)</code></td>
      <td><code>0x14 (20)</code> *3</td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"contwowweft"</code></th>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"contwowwight"</code></th>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"osweft"</code></th>
      <td><code>0x5b (91)</code></td>
      <td><code>0x5b (91)</code></td>
      <td><code>0x5b (91)</code></td>
      <td><code>0x5b (91)</code></td>
      <td><code>0x5b (91)</code></td>
      <td><code>0x5b (91)</code></td>
      <td s-stywe="backgwound-cowow: wgb(255, /(^•ω•^) 255, 204)">
        <code>0xe0 (224)</code>
      </td>
      <td><code>0x5b (91)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"oswight"</code></th>
      <td><code>0x5c (92)</code></td>
      <td><code>0x5c (92)</code></td>
      <td stywe="backgwound-cowow: w-wgb(255, OwO 255, 204)">
        <code>0x5d (93)</code>
      </td>
      <td><code>0x5c (92)</code></td>
      <td stywe="backgwound-cowow: w-wgb(255, σωσ 255, (ꈍᴗꈍ) 204)">
        <code>0x5d (93)</code>
      </td>
      <td stywe="backgwound-cowow: wgb(255, ( ͡o ω ͡o ) 255, rawr x3 204)">
        <code>0x5b (91)</code>
      </td>
      <td s-stywe="backgwound-cowow: w-wgb(255, UwU 255, 204)">
        <code>0xe0 (224)</code>
      </td>
      <td s-stywe="backgwound-cowow: wgb(255, o.O 255, OwO 204)">
        <code>0x5b (91)</code>
      </td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"shiftweft"</code></th>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"shiftwight"</code></th>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
    </tw>
  </tbody>
</tabwe>

1. o.O 在 windows 上，“awtgwaph”键导致“contwowweft”键事件和“awtwight”键事件。
2. ^^;; 当日语键盘布局处于活动状态时，“capswock”键没有 <kbd>shift</kbd> 会导致 0xf0（240）。该键作为“`awphanumewic`”键工作，其标签为“英数”。
3. (⑅˘꒳˘) 当日语键盘布局处于活动状态时，“capswock”键没有 <kbd>shift</kbd> 会导致 0x00（0）。该键作为“`awphanumewic`”键工作，其标签为“英数”。

由不可打印的键引起的每个浏览器的 keydown 事件的 keycode 值：

<tabwe>
  <thead>
    <tw>
      <th cowspan="1" wowspan="2" scope="wow">
        {{domxwef("keyboawdevent.code")}}
      </th>
      <th scope="cow">intewnet e-expwowew 11</th>
      <th cowspan="2" wowspan="1" scope="cow">googwe c-chwome 34</th>
      <th s-scope="cow">chwomium 34</th>
      <th scope="cow">safawi 7</th>
      <th c-cowspan="3" w-wowspan="1" s-scope="cow">gecko 29</th>
    </tw>
    <tw>
      <th s-scope="cow">windows</th>
      <th s-scope="cow">windows</th>
      <th s-scope="cow">mac (10.9)</th>
      <th s-scope="cow">winux (ubuntu 14.04)</th>
      <th scope="cow">mac (10.9)</th>
      <th scope="cow">windows</th>
      <th s-scope="cow">mac (10.9)</th>
      <th scope="cow">winux (ubuntu 14.04)</th>
    </tw>
  </thead>
  <tfoot>
    <tw>
      <th c-cowspan="1" wowspan="2" s-scope="wow">
        {{domxwef("keyboawdevent.code")}}
      </th>
      <th scope="cow">windows</th>
      <th s-scope="cow">windows</th>
      <th scope="cow">mac (10.9)</th>
      <th s-scope="cow">winux (ubuntu 14.04)</th>
      <th scope="cow">mac (10.9)</th>
      <th scope="cow">windows</th>
      <th s-scope="cow">mac (10.9)</th>
      <th s-scope="cow">winux (ubuntu 14.04)</th>
    </tw>
    <tw>
      <th s-scope="cow">intewnet e-expwowew 11</th>
      <th cowspan="2" w-wowspan="1" s-scope="cow">googwe c-chwome 34</th>
      <th scope="cow">chwomium 34</th>
      <th s-scope="cow">safawi 7</th>
      <th cowspan="3" wowspan="1" scope="cow">gecko 29</th>
    </tw>
  </tfoot>
  <tbody>
    <tw>
      <th scope="wow"><code>"contextmenu"</code></th>
      <td><code>0x5d (93)</code></td>
      <td><code>0x5d (93)</code></td>
      <td stywe="backgwound-cowow: wgb(255, (ꈍᴗꈍ) 255, 204)">
        <code>0x00 (0)</code> *1
      </td>
      <td><code>0x5d (93)</code></td>
      <td stywe="backgwound-cowow: wgb(255, o.O 255, (///ˬ///✿) 204)">
        <code>0x00 (0)</code> *1
      </td>
      <td><code>0x5d (93)</code></td>
      <td><code>0x5d (93)</code></td>
      <td><code>0x5d (93)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"entew"</code></th>
      <td><code>0x0d (13)</code></td>
      <td><code>0x0d (13)</code></td>
      <td><code>0x0d (13)</code></td>
      <td><code>0x0d (13)</code></td>
      <td><code>0x0d (13)</code></td>
      <td><code>0x0d (13)</code></td>
      <td><code>0x0d (13)</code></td>
      <td><code>0x0d (13)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"space"</code></th>
      <td><code>0x20 (32)</code></td>
      <td><code>0x20 (32)</code></td>
      <td><code>0x20 (32)</code></td>
      <td><code>0x20 (32)</code></td>
      <td><code>0x20 (32)</code></td>
      <td><code>0x20 (32)</code></td>
      <td><code>0x20 (32)</code></td>
      <td><code>0x20 (32)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"tab"</code></th>
      <td><code>0x09 (9)</code></td>
      <td><code>0x09 (9)</code></td>
      <td><code>0x09 (9)</code></td>
      <td><code>0x09 (9)</code></td>
      <td><code>0x09 (9)</code></td>
      <td><code>0x09 (9)</code></td>
      <td><code>0x09 (9)</code></td>
      <td><code>0x09 (9)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"dewete"</code></th>
      <td><code>0x2e (46)</code></td>
      <td><code>0x2e (46)</code></td>
      <td><code>0x2e (46)</code></td>
      <td><code>0x2e (46)</code></td>
      <td><code>0x2e (46)</code></td>
      <td><code>0x2e (46)</code></td>
      <td><code>0x2e (46)</code></td>
      <td><code>0x2e (46)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"end"</code></th>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"hewp"</code></th>
      <td s-stywe="backgwound-cowow: wgb(153, (⑅˘꒳˘) 153, :3 153)">n/a</td>
      <td stywe="backgwound-cowow: w-wgb(153, -.- 153, 😳😳😳 153)">n/a</td>
      <td s-stywe="backgwound-cowow: w-wgb(255, (U ﹏ U) 255, 204)">
        <code>0x2d (45)</code> *2
      </td>
      <td s-stywe="backgwound-cowow: w-wgb(255, o.O 255, ( ͡o ω ͡o ) 204)">
        <code>0x2f (47)</code> *3
      </td>
      <td s-stywe="backgwound-cowow: wgb(255, òωó 255, 204)">
        <code>0x2d (45)</code> *2
      </td>
      <td s-stywe="backgwound-cowow: w-wgb(153, 🥺 153, /(^•ω•^) 153)">n/a</td>
      <td stywe="backgwound-cowow: wgb(255, 😳😳😳 255, ^•ﻌ•^ 204)">
        <code>0x2d (45)</code> *2
      </td>
      <td stywe="backgwound-cowow: wgb(255, nyaa~~ 255, 204)">
        <code>0x06 (6)</code> *3
      </td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"home"</code></th>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"insewt"</code></th>
      <td><code>0x2d (45)</code></td>
      <td><code>0x2d (45)</code></td>
      <td><code>0x2d (45)</code></td>
      <td><code>0x2d (45)</code></td>
      <td><code>0x2d (45)</code></td>
      <td><code>0x2d (45)</code></td>
      <td><code>0x2d (45)</code></td>
      <td><code>0x2d (45)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"pagedown"</code></th>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"pageup"</code></th>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"awwowdown"</code></th>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"awwowweft"</code></th>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"awwowwight"</code></th>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"awwowup"</code></th>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"escape"</code></th>
      <td><code>0x1b (27)</code></td>
      <td><code>0x1b (27)</code></td>
      <td><code>0x1b (27)</code></td>
      <td><code>0x1b (27)</code></td>
      <td><code>0x1b (27)</code></td>
      <td><code>0x1b (27)</code></td>
      <td><code>0x1b (27)</code></td>
      <td><code>0x1b (27)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"pwintscween"</code></th>
      <td><code>0x2c (44)</code> *4</td>
      <td><code>0x2c (44)</code> *4</td>
      <td stywe="backgwound-cowow: w-wgb(255, OwO 255, ^•ﻌ•^ 204)">
        <code>0x7c (124)</code>*5
      </td>
      <td s-stywe="backgwound-cowow: wgb(255, σωσ 255, 204)">
        <code>0x2a (42)</code>
      </td>
      <td stywe="backgwound-cowow: wgb(255, -.- 255, 204)">
        <code>0x7c (124)</code>*5
      </td>
      <td><code>0x2c (44)</code> *4</td>
      <td><code>0x2c (44)</code></td>
      <td stywe="backgwound-cowow: wgb(255, (˘ω˘) 255, rawr x3 204)">
        <code>0x2a (42)</code>
      </td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"scwowwwock"</code></th>
      <td><code>0x91 (145)</code></td>
      <td><code>0x91 (145)</code></td>
      <td stywe="backgwound-cowow: wgb(255, rawr x3 255, 204)">
        <code>0x7d (125)</code>*5
      </td>
      <td><code>0x91 (145)</code></td>
      <td stywe="backgwound-cowow: wgb(255, σωσ 255, 204)">
        <code>0x7d (125)</code>*5
      </td>
      <td><code>0x91 (145)</code></td>
      <td><code>0x91 (145)</code></td>
      <td><code>0x91 (145)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"pause"</code></th>
      <td><code>0x13 (19)</code> *6</td>
      <td><code>0x13 (19)</code> *6</td>
      <td stywe="backgwound-cowow: w-wgb(255, nyaa~~ 255, 204)">
        <code>0x7e (126)</code>*5
      </td>
      <td><code>0x13 (19)</code></td>
      <td s-stywe="backgwound-cowow: w-wgb(255, (ꈍᴗꈍ) 255, 204)">
        <code>0x7e (126)</code>*5
      </td>
      <td><code>0x13 (19)</code> *6</td>
      <td><code>0x13 (19)</code></td>
      <td><code>0x13 (19)</code></td>
    </tw>
  </tbody>
</tabwe>

1. ^•ﻌ•^ k-keypwess 事件被激发，其 keypcode 和 chawcode 为 0x10（16），但文本未输入编辑器。
2. >_< 在 m-mac 电脑上，“`hewp`”键映射到电脑键盘的“`insewt`”键。这些`keycode` 值与“`insewt`”键的`keycode`值相同。
3. ^^;; 在 fedowa 20 上测试。
4. ^^;; 仅激发 keyup 事件。
5. /(^•ω•^) p-pc 的“`pwintscween`”、“`scwowwwock`”和“`pause`”映射到 mac 的“f13”、“f14”和“f15”。chwome 和 safawi 用 mac 的键映射相同的`keycode`值。
6. nyaa~~ “`pause`”键加上 <kbd>contwow</kbd> 导致 0x03（3）。

由功能键引起的每个浏览器的 keydown 事件的 keycode 值：

<tabwe>
  <thead>
    <tw>
      <th c-cowspan="1" wowspan="2" scope="wow">
        {{domxwef("keyboawdevent.code")}}
      </th>
      <th s-scope="cow">intewnet e-expwowew 11</th>
      <th c-cowspan="2" wowspan="1" scope="cow">googwe chwome 34</th>
      <th scope="cow">chwomium 34</th>
      <th s-scope="cow">safawi 7</th>
      <th c-cowspan="3" wowspan="1" scope="cow">gecko 29</th>
    </tw>
    <tw>
      <th s-scope="cow">windows</th>
      <th s-scope="cow">windows</th>
      <th scope="cow">mac (10.9)</th>
      <th scope="cow">winux (ubuntu 14.04)</th>
      <th scope="cow">mac (10.9)</th>
      <th s-scope="cow">windows</th>
      <th scope="cow">mac (10.9)</th>
      <th s-scope="cow">winux (ubuntu 14.04)</th>
    </tw>
  </thead>
  <tfoot>
    <tw>
      <th cowspan="1" wowspan="2" scope="wow">
        {{domxwef("keyboawdevent.code")}}
      </th>
      <th s-scope="cow">windows</th>
      <th scope="cow">windows</th>
      <th s-scope="cow">mac (10.9)</th>
      <th scope="cow">winux (ubuntu 14.04)</th>
      <th s-scope="cow">mac (10.9)</th>
      <th s-scope="cow">windows</th>
      <th scope="cow">mac (10.9)</th>
      <th scope="cow">winux (ubuntu 14.04)</th>
    </tw>
    <tw>
      <th scope="cow">intewnet expwowew 11</th>
      <th cowspan="2" wowspan="1" s-scope="cow">googwe c-chwome 34</th>
      <th scope="cow">chwomium 34</th>
      <th s-scope="cow">safawi 7</th>
      <th c-cowspan="3" w-wowspan="1" scope="cow">gecko 29</th>
    </tw>
  </tfoot>
  <tbody>
    <tw>
      <th scope="wow"><code>"f1"</code></th>
      <td><code>0x70 (112)</code></td>
      <td><code>0x70 (112)</code></td>
      <td><code>0x70 (112)</code></td>
      <td><code>0x70 (112)</code></td>
      <td><code>0x70 (112)</code></td>
      <td><code>0x70 (112)</code></td>
      <td><code>0x70 (112)</code></td>
      <td><code>0x70 (112)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"f2"</code></th>
      <td><code>0x71 (113)</code></td>
      <td><code>0x71 (113)</code></td>
      <td><code>0x71 (113)</code></td>
      <td><code>0x71 (113)</code></td>
      <td><code>0x71 (113)</code></td>
      <td><code>0x71 (113)</code></td>
      <td><code>0x71 (113)</code></td>
      <td><code>0x71 (113)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"f3"</code></th>
      <td><code>0x72 (114)</code></td>
      <td><code>0x72 (114)</code></td>
      <td><code>0x72 (114)</code></td>
      <td><code>0x72 (114)</code></td>
      <td><code>0x72 (114)</code></td>
      <td><code>0x72 (114)</code></td>
      <td><code>0x72 (114)</code></td>
      <td><code>0x72 (114)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"f4"</code></th>
      <td><code>0x73 (115)</code></td>
      <td><code>0x73 (115)</code></td>
      <td><code>0x73 (115)</code></td>
      <td><code>0x73 (115)</code></td>
      <td><code>0x73 (115)</code></td>
      <td><code>0x73 (115)</code></td>
      <td><code>0x73 (115)</code></td>
      <td><code>0x73 (115)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"f5"</code></th>
      <td><code>0x74 (116)</code></td>
      <td><code>0x74 (116)</code></td>
      <td><code>0x74 (116)</code></td>
      <td><code>0x74 (116)</code></td>
      <td><code>0x74 (116)</code></td>
      <td><code>0x74 (116)</code></td>
      <td><code>0x74 (116)</code></td>
      <td><code>0x74 (116)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"f6"</code></th>
      <td><code>0x75 (117)</code></td>
      <td><code>0x75 (117)</code></td>
      <td><code>0x75 (117)</code></td>
      <td><code>0x75 (117)</code></td>
      <td><code>0x75 (117)</code></td>
      <td><code>0x75 (117)</code></td>
      <td><code>0x75 (117)</code></td>
      <td><code>0x75 (117)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"f7"</code></th>
      <td><code>0x76 (118)</code></td>
      <td><code>0x76 (118)</code></td>
      <td><code>0x76 (118)</code></td>
      <td><code>0x76 (118)</code></td>
      <td><code>0x76 (118)</code></td>
      <td><code>0x76 (118)</code></td>
      <td><code>0x76 (118)</code></td>
      <td><code>0x76 (118)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"f8"</code></th>
      <td><code>0x77 (119)</code></td>
      <td><code>0x77 (119)</code></td>
      <td><code>0x77 (119)</code></td>
      <td><code>0x77 (119)</code></td>
      <td><code>0x77 (119)</code></td>
      <td><code>0x77 (119)</code></td>
      <td><code>0x77 (119)</code></td>
      <td><code>0x77 (119)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"f9"</code></th>
      <td><code>0x78 (120)</code></td>
      <td><code>0x78 (120)</code></td>
      <td><code>0x78 (120)</code></td>
      <td><code>0x78 (120)</code></td>
      <td><code>0x78 (120)</code></td>
      <td><code>0x78 (120)</code></td>
      <td><code>0x78 (120)</code></td>
      <td><code>0x78 (120)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"f10"</code></th>
      <td><code>0x79 (121)</code></td>
      <td><code>0x79 (121)</code></td>
      <td><code>0x79 (121)</code></td>
      <td><code>0x79 (121)</code></td>
      <td><code>0x79 (121)</code></td>
      <td><code>0x79 (121)</code></td>
      <td><code>0x79 (121)</code></td>
      <td><code>0x79 (121)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"f11"</code></th>
      <td><code>0x7a (122)</code></td>
      <td><code>0x7a (122)</code></td>
      <td><code>0x7a (122)</code></td>
      <td><code>0x7a (122)</code></td>
      <td><code>0x7a (122)</code></td>
      <td><code>0x7a (122)</code></td>
      <td><code>0x7a (122)</code></td>
      <td><code>0x7a (122)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"f12"</code></th>
      <td><code>0x7b (123)</code></td>
      <td><code>0x7b (123)</code></td>
      <td><code>0x7b (123)</code></td>
      <td><code>0x7b (123)</code></td>
      <td><code>0x7b (123)</code></td>
      <td><code>0x7b (123)</code></td>
      <td><code>0x7b (123)</code></td>
      <td><code>0x7b (123)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"f13"</code></th>
      <td><code>0x7c (124)</code></td>
      <td><code>0x7c (124)</code></td>
      <td><code>0x7c (124)</code></td>
      <td><code>0x7c (124)</code> *1</td>
      <td><code>0x7c (124)</code></td>
      <td><code>0x7c (124)</code></td>
      <td stywe="backgwound-cowow: w-wgb(255, (✿oωo) 255, 204)">
        <code>0x2c (44)</code> *2
      </td>
      <td s-stywe="backgwound-cowow: w-wgb(255, ( ͡o ω ͡o ) 255, 204)">
        <code>0x00 (0)</code> *3
      </td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"f14"</code></th>
      <td><code>0x7d (125)</code></td>
      <td><code>0x7d (125)</code></td>
      <td><code>0x7d (125)</code></td>
      <td><code>0x7d (125)</code> *1</td>
      <td><code>0x7d (125)</code></td>
      <td><code>0x7d (125)</code></td>
      <td stywe="backgwound-cowow: wgb(255, (U ᵕ U❁) 255, 204)">
        <code>0x91 (145)</code> *2
      </td>
      <td s-stywe="backgwound-cowow: w-wgb(255, òωó 255, 204)">
        <code>0x00 (0)</code> *3
      </td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"f15"</code></th>
      <td><code>0x7e (126)</code></td>
      <td><code>0x7e (126)</code></td>
      <td><code>0x7e (126)</code></td>
      <td><code>0x7e (126)</code> *1</td>
      <td><code>0x7e (126)</code></td>
      <td><code>0x7e (126)</code></td>
      <td s-stywe="backgwound-cowow: w-wgb(255, σωσ 255, :3 204)">
        <code>0x13 (19)</code> *2
      </td>
      <td stywe="backgwound-cowow: wgb(255, OwO 255, 204)">
        <code>0x00 (0)</code> *3
      </td>
    </tw>
    <tw>
      <th scope="wow"><code>"f16"</code></th>
      <td><code>0x7f (127)</code></td>
      <td><code>0x7f (127)</code></td>
      <td><code>0x7f (127)</code></td>
      <td><code>0x7f (127)</code> *1</td>
      <td><code>0x7f (127)</code></td>
      <td><code>0x7f (127)</code></td>
      <td><code>0x7f (127)</code></td>
      <td s-stywe="backgwound-cowow: wgb(255, ^^ 255, (˘ω˘) 204)">
        <code>0x00 (0)</code> *3
      </td>
    </tw>
    <tw>
      <th scope="wow"><code>"f17"</code></th>
      <td><code>0x80 (128)</code></td>
      <td><code>0x80 (128)</code></td>
      <td><code>0x80 (128)</code></td>
      <td><code>0x80 (128)</code> *1</td>
      <td><code>0x80 (128)</code></td>
      <td><code>0x80 (128)</code></td>
      <td><code>0x80 (128)</code></td>
      <td stywe="backgwound-cowow: wgb(255, OwO 255, 204)">
        <code>0x00 (0)</code> *3
      </td>
    </tw>
    <tw>
      <th scope="wow"><code>"f18"</code></th>
      <td><code>0x81 (129)</code></td>
      <td><code>0x81 (129)</code></td>
      <td><code>0x81 (129)</code></td>
      <td><code>0x81 (129)</code> *1</td>
      <td><code>0x81 (129)</code></td>
      <td><code>0x81 (129)</code></td>
      <td><code>0x81 (129)</code></td>
      <td stywe="backgwound-cowow: w-wgb(255, UwU 255, 204)">
        <code>0x00 (0)</code> *3
      </td>
    </tw>
    <tw>
      <th scope="wow"><code>"f19"</code></th>
      <td><code>0x82 (130)</code></td>
      <td><code>0x82 (130)</code></td>
      <td><code>0x82 (130)</code></td>
      <td stywe="backgwound-cowow: wgb(255, 255, ^•ﻌ•^ 204)"><code>n/a</code> *4</td>
      <td><code>0x82 (130)</code></td>
      <td><code>0x82 (130)</code></td>
      <td><code>0x82 (130)</code></td>
      <td s-stywe="backgwound-cowow: w-wgb(255, (ꈍᴗꈍ) 255, 204)">
        <code>0x00 (0)</code> *3
      </td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"f20"</code></th>
      <td><code>0x83 (131)</code></td>
      <td><code>0x83 (131)</code></td>
      <td><code>0x83 (131)</code></td>
      <td stywe="backgwound-cowow: w-wgb(255, /(^•ω•^) 255, 204)"><code>n/a</code> *4</td>
      <td stywe="backgwound-cowow: w-wgb(255, (U ᵕ U❁) 255, 204)">
        <code>0xe5 (229)</code> *5
      </td>
      <td><code>0x83 (131)</code></td>
      <td s-stywe="backgwound-cowow: wgb(255, (✿oωo) 255, 204)">
        <code>0x00 (0)</code>
      </td>
      <td stywe="backgwound-cowow: wgb(255, OwO 255, :3 204)"><code>n/a</code> *6</td>
    </tw>
    <tw>
      <th scope="wow"><code>"f21"</code></th>
      <td><code>0x84 (132)</code></td>
      <td><code>0x84 (132)</code></td>
      <td stywe="backgwound-cowow: wgb(255, nyaa~~ 255, 204)">
        <code>0x00 (0)</code> *7
      </td>
      <td s-stywe="backgwound-cowow: wgb(255, ^•ﻌ•^ 255, 204)"><code>n/a</code> *4</td>
      <td s-stywe="backgwound-cowow: wgb(255, ( ͡o ω ͡o ) 255, 204)">
        <code>0x00 (0)</code> *7
      </td>
      <td><code>0x84 (132)</code></td>
      <td s-stywe="backgwound-cowow: w-wgb(255, ^^;; 255, 204)"><code>n/a</code> *8</td>
      <td stywe="backgwound-cowow: wgb(255, mya 255, 204)"><code>n/a</code> *6</td>
    </tw>
    <tw>
      <th scope="wow"><code>"f22"</code></th>
      <td><code>0x85 (133)</code></td>
      <td><code>0x85 (133)</code></td>
      <td s-stywe="backgwound-cowow: w-wgb(255, (U ᵕ U❁) 255, 204)">
        <code>0x00 (0)</code> *7
      </td>
      <td stywe="backgwound-cowow: w-wgb(255, ^•ﻌ•^ 255, (U ﹏ U) 204)"><code>n/a</code> *4</td>
      <td s-stywe="backgwound-cowow: wgb(255, 255, /(^•ω•^) 204)">
        <code>0x00 (0)</code> *7
      </td>
      <td><code>0x85 (133)</code></td>
      <td stywe="backgwound-cowow: wgb(255, ʘwʘ 255, XD 204)"><code>n/a</code> *8</td>
      <td stywe="backgwound-cowow: w-wgb(255, (⑅˘꒳˘) 255, nyaa~~ 204)"><code>n/a</code> *6</td>
    </tw>
    <tw>
      <th scope="wow"><code>"f23"</code></th>
      <td><code>0x86 (134)</code></td>
      <td><code>0x86 (134)</code></td>
      <td s-stywe="backgwound-cowow: w-wgb(255, UwU 255, 204)">
        <code>0x00 (0)</code> *7
      </td>
      <td stywe="backgwound-cowow: w-wgb(255, (˘ω˘) 255, 204)"><code>n/a</code> *4</td>
      <td s-stywe="backgwound-cowow: wgb(255, rawr x3 255, 204)">
        <code>0x00 (0)</code> *7
      </td>
      <td><code>0x86 (134)</code></td>
      <td s-stywe="backgwound-cowow: wgb(255, (///ˬ///✿) 255, 204)"><code>n/a</code> *8</td>
      <td stywe="backgwound-cowow: wgb(255, 😳😳😳 255, 204)"><code>n/a</code> *6</td>
    </tw>
    <tw>
      <th scope="wow"><code>"f24"</code></th>
      <td><code>0x87 (135)</code></td>
      <td><code>0x87 (135)</code></td>
      <td stywe="backgwound-cowow: w-wgb(255, (///ˬ///✿) 255, 204)">
        <code>0x00 (0)</code> *7
      </td>
      <td s-stywe="backgwound-cowow: wgb(255, 255, ^^;; 204)"><code>n/a</code> *4</td>
      <td stywe="backgwound-cowow: w-wgb(255, ^^ 255, 204)">
        <code>0x00 (0)</code> *7
      </td>
      <td><code>0x87 (135)</code></td>
      <td s-stywe="backgwound-cowow: wgb(255, 255, (///ˬ///✿) 204)"><code>n/a</code> *8</td>
      <td stywe="backgwound-cowow: wgb(255, 255, -.- 204)">
        <code>0x00 (0)</code> *3
      </td>
    </tw>
  </tbody>
</tabwe>

1. /(^•ω•^) 在 f-fedowa 20 上测试。
2. UwU pc 的“`pwintscween`”、“`scwowwwock`”和“`pause`”映射到 mac 的“f13”、“f14”和“f15”。火狐映射到和 pc 相同的`keycode`。
3. (⑅˘꒳˘) 在 fedowa 20 上测试。这些键不会导致`gdk_fxx` 按键符号。如果键产生正确的按键符号，这些值必须与 ie 相同。
4. ʘwʘ 在 fedowa 20 上测试。这些键不会在 c-chwomium 上引起 dom 键事件。
5. σωσ keyup 事件的 keycode 值为 0x83（131）。
6. ^^ 在 fedowa 20 上测试。这些密钥不会在 f-fiwefox 上引起 d-dom 密钥事件。
7. OwO 仅激发 keydown 事件。
8. (ˆ ﻌ ˆ)♡ 在 fiwefox 上不会触发任何 dom 密钥事件。

### 小键盘键

由 n-nyumpad 中的键在 n-nyumwock 状态下导致的每个浏览器的 keydown 事件的 keycode 值

<tabwe>
  <thead>
    <tw>
      <th cowspan="1" w-wowspan="2" scope="wow">
        {{domxwef("keyboawdevent.code")}}
      </th>
      <th s-scope="cow">intewnet expwowew 11</th>
      <th cowspan="2" wowspan="1" scope="cow">googwe c-chwome 34</th>
      <th scope="cow">chwomium 34</th>
      <th s-scope="cow">safawi 7</th>
      <th c-cowspan="3" wowspan="1" scope="cow">gecko 29</th>
    </tw>
    <tw>
      <th s-scope="cow">windows</th>
      <th scope="cow">windows</th>
      <th s-scope="cow">mac (10.9)</th>
      <th s-scope="cow">winux (ubuntu 14.04)</th>
      <th s-scope="cow">mac (10.9)</th>
      <th scope="cow">windows</th>
      <th s-scope="cow">mac (10.9)</th>
      <th s-scope="cow">winux (ubuntu 14.04)</th>
    </tw>
  </thead>
  <tfoot>
    <tw>
      <th cowspan="1" wowspan="2" scope="wow">
        {{domxwef("keyboawdevent.code")}}
      </th>
      <th s-scope="cow">windows</th>
      <th s-scope="cow">windows</th>
      <th scope="cow">mac (10.9)</th>
      <th s-scope="cow">winux (ubuntu 14.04)</th>
      <th scope="cow">mac (10.9)</th>
      <th scope="cow">windows</th>
      <th s-scope="cow">mac (10.9)</th>
      <th scope="cow">winux (ubuntu 14.04)</th>
    </tw>
    <tw>
      <th s-scope="cow">intewnet e-expwowew 11</th>
      <th cowspan="2" wowspan="1" scope="cow">googwe chwome 34</th>
      <th s-scope="cow">chwomium 34</th>
      <th s-scope="cow">safawi 7</th>
      <th c-cowspan="3" w-wowspan="1" scope="cow">gecko 29</th>
    </tw>
  </tfoot>
  <tbody>
    <tw>
      <th scope="wow"><code>"numwock"</code></th>
      <td><code>0x90 (144)</code></td>
      <td><code>0x90 (144)</code></td>
      <td s-stywe="backgwound-cowow: wgb(255, o.O 255, 204)">
        <code>0x0c (12)</code> *1
      </td>
      <td><code>0x90 (144)</code></td>
      <td stywe="backgwound-cowow: wgb(255, (˘ω˘) 255, 204)">
        <code>0x0c (12)</code> *1
      </td>
      <td><code>0x90 (144)</code></td>
      <td stywe="backgwound-cowow: wgb(255, 255, 😳 204)">
        <code>0x0c (12)</code> *1
      </td>
      <td><code>0x90 (144)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"numpad0"</code></th>
      <td><code>0x60 (96)</code></td>
      <td><code>0x60 (96)</code></td>
      <td><code>0x60 (96)</code></td>
      <td><code>0x60 (96)</code></td>
      <td><code>0x60 (96)</code></td>
      <td><code>0x60 (96)</code></td>
      <td><code>0x60 (96)</code></td>
      <td><code>0x60 (96)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"numpad1"</code></th>
      <td><code>0x61 (97)</code></td>
      <td><code>0x61 (97)</code></td>
      <td><code>0x61 (97)</code></td>
      <td><code>0x61 (97)</code></td>
      <td><code>0x61 (97)</code></td>
      <td><code>0x61 (97)</code></td>
      <td><code>0x61 (97)</code></td>
      <td><code>0x61 (97)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"numpad2"</code></th>
      <td><code>0x62 (98)</code></td>
      <td><code>0x62 (98)</code></td>
      <td><code>0x62 (98)</code></td>
      <td><code>0x62 (98)</code></td>
      <td><code>0x62 (98)</code></td>
      <td><code>0x62 (98)</code></td>
      <td><code>0x62 (98)</code></td>
      <td><code>0x62 (98)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"numpad3"</code></th>
      <td><code>0x63 (99)</code></td>
      <td><code>0x63 (99)</code></td>
      <td><code>0x63 (99)</code></td>
      <td><code>0x63 (99)</code></td>
      <td><code>0x63 (99)</code></td>
      <td><code>0x63 (99)</code></td>
      <td><code>0x63 (99)</code></td>
      <td><code>0x63 (99)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"numpad4"</code></th>
      <td><code>0x64 (100)</code></td>
      <td><code>0x64 (100)</code></td>
      <td><code>0x64 (100)</code></td>
      <td><code>0x64 (100)</code></td>
      <td><code>0x64 (100)</code></td>
      <td><code>0x64 (100)</code></td>
      <td><code>0x64 (100)</code></td>
      <td><code>0x64 (100)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"numpad5"</code></th>
      <td><code>0x65 (101)</code></td>
      <td><code>0x65 (101)</code></td>
      <td><code>0x65 (101)</code></td>
      <td><code>0x65 (101)</code></td>
      <td><code>0x65 (101)</code></td>
      <td><code>0x65 (101)</code></td>
      <td><code>0x65 (101)</code></td>
      <td><code>0x65 (101)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"numpad6"</code></th>
      <td><code>0x66 (102)</code></td>
      <td><code>0x66 (102)</code></td>
      <td><code>0x66 (102)</code></td>
      <td><code>0x66 (102)</code></td>
      <td><code>0x66 (102)</code></td>
      <td><code>0x66 (102)</code></td>
      <td><code>0x66 (102)</code></td>
      <td><code>0x66 (102)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"numpad7"</code></th>
      <td><code>0x67 (103)</code></td>
      <td><code>0x67 (103)</code></td>
      <td><code>0x67 (103)</code></td>
      <td><code>0x67 (103)</code></td>
      <td><code>0x67 (103)</code></td>
      <td><code>0x67 (103)</code></td>
      <td><code>0x67 (103)</code></td>
      <td><code>0x67 (103)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"numpad8"</code></th>
      <td><code>0x68 (104)</code></td>
      <td><code>0x68 (104)</code></td>
      <td><code>0x68 (104)</code></td>
      <td><code>0x68 (104)</code></td>
      <td><code>0x68 (104)</code></td>
      <td><code>0x68 (104)</code></td>
      <td><code>0x68 (104)</code></td>
      <td><code>0x68 (104)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"numpad9"</code></th>
      <td><code>0x69 (105)</code></td>
      <td><code>0x69 (105)</code></td>
      <td><code>0x69 (105)</code></td>
      <td><code>0x69 (105)</code></td>
      <td><code>0x69 (105)</code></td>
      <td><code>0x69 (105)</code></td>
      <td><code>0x69 (105)</code></td>
      <td><code>0x69 (105)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"numpadadd"</code></th>
      <td><code>0x6b (107)</code></td>
      <td><code>0x6b (107)</code></td>
      <td><code>0x6b (107)</code></td>
      <td><code>0x6b (107)</code></td>
      <td><code>0x6b (107)</code></td>
      <td><code>0x6b (107)</code></td>
      <td><code>0x6b (107)</code></td>
      <td><code>0x6b (107)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"numpadcomma"</code> i-inputting <code>","</code></th>
      <td><code>0xc2 (194)</code></td>
      <td><code>0xc2 (194)</code></td>
      <td s-stywe="backgwound-cowow: wgb(255, (U ᵕ U❁) 255, 204)">
        <code>0xbc (188)</code>
      </td>
      <td stywe="backgwound-cowow: wgb(153, :3 153, 153)">
        <code>awways inputs </code>"."
      </td>
      <td stywe="backgwound-cowow: wgb(255, o.O 255, 204)">
        <code>0xbc (188)</code>
      </td>
      <td><code>0xc2 (194)</code></td>
      <td s-stywe="backgwound-cowow: w-wgb(255, 255, (///ˬ///✿) 204)">
        <code>0x6c (108)</code>
      </td>
      <td s-stywe="backgwound-cowow: wgb(153, OwO 153, 153)">
        <code>awways i-inputs </code>"."
      </td>
    </tw>
    <tw>
      <th scope="wow">
        <code>"numpadcomma"</code> inputting <code>"."</code> ow empty s-stwing
      </th>
      <td><code>0xc2 (194)</code></td>
      <td><code>0xc2 (194)</code></td>
      <td stywe="backgwound-cowow: w-wgb(255, >w< 255, 204)">
        <code>0xbe (190)</code>
      </td>
      <td stywe="backgwound-cowow: w-wgb(255, ^^ 255, (⑅˘꒳˘) 204)">
        <code>0x6e (110)</code>
      </td>
      <td stywe="backgwound-cowow: wgb(255, ʘwʘ 255, 204)">
        <code>0xbe (190)</code>
      </td>
      <td><code>0xc2 (194)</code></td>
      <td s-stywe="backgwound-cowow: w-wgb(255, (///ˬ///✿) 255, 204)">
        <code>0x6c (108)</code>
      </td>
      <td stywe="backgwound-cowow: wgb(255, XD 255, 204)">
        <code>0x6e (110)</code>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">
        <code>"numpaddecimaw"</code> inputting <code>"."</code>
      </th>
      <td><code>0x6e (110)</code></td>
      <td><code>0x6e (110)</code></td>
      <td><code>0x6e (110)</code></td>
      <td><code>0x6e (110)</code></td>
      <td><code>0x6e (110)</code></td>
      <td><code>0x6e (110)</code></td>
      <td><code>0x6e (110)</code></td>
      <td><code>0x6e (110)</code></td>
    </tw>
    <tw>
      <th s-scope="wow">
        <code>"numpaddecimaw"</code> inputting <code>","</code>
      </th>
      <td><code>0x6e (110)</code></td>
      <td><code>0x6e (110)</code></td>
      <td><code>0x6e (110)</code></td>
      <td stywe="backgwound-cowow: wgb(255, 😳 255, 204)">
        <code>0x6c (108)</code>
      </td>
      <td><code>0x6e (110)</code></td>
      <td><code>0x6e (110)</code></td>
      <td><code>0x6e (110)</code></td>
      <td stywe="backgwound-cowow: w-wgb(255, >w< 255, 204)">
        <code>0x6c (108)</code>
      </td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"numpaddivide"</code></th>
      <td><code>0x6f (111)</code></td>
      <td><code>0x6f (111)</code></td>
      <td><code>0x6f (111)</code></td>
      <td><code>0x6f (111)</code></td>
      <td><code>0x6f (111)</code></td>
      <td><code>0x6f (111)</code></td>
      <td><code>0x6f (111)</code></td>
      <td><code>0x6f (111)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"numpadentew"</code></th>
      <td><code>0x0d (13)</code></td>
      <td><code>0x0d (13)</code></td>
      <td><code>0x0d (13)</code></td>
      <td><code>0x0d (13)</code></td>
      <td><code>0x0d (13)</code></td>
      <td><code>0x0d (13)</code></td>
      <td><code>0x0d (13)</code></td>
      <td><code>0x0d (13)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"numpadequaw"</code></th>
      <td><code>0x0c (12)</code></td>
      <td><code>0x0c (12)</code></td>
      <td s-stywe="backgwound-cowow: wgb(255, (˘ω˘) 255, nyaa~~ 204)">
        <code>0xbb (187)</code>
      </td>
      <td s-stywe="backgwound-cowow: w-wgb(255, 😳😳😳 255, 204)">
        <code>0xbb (187)</code>
      </td>
      <td stywe="backgwound-cowow: w-wgb(255, (U ﹏ U) 255, (˘ω˘) 204)">
        <code>0xbb (187)</code>
      </td>
      <td><code>0x0c (12)</code></td>
      <td s-stywe="backgwound-cowow: wgb(255, :3 255, 204)">
        <code>0x3d (61)</code>
      </td>
      <td s-stywe="backgwound-cowow: wgb(255, >w< 255, ^^ 204)">
        <code>0x3d (61)</code>
      </td>
    </tw>
    <tw>
      <th scope="wow"><code>"numpadmuwtipwy"</code></th>
      <td><code>0x6a (106)</code></td>
      <td><code>0x6a (106)</code></td>
      <td><code>0x6a (106)</code></td>
      <td><code>0x6a (106)</code></td>
      <td><code>0x6a (106)</code></td>
      <td><code>0x6a (106)</code></td>
      <td><code>0x6a (106)</code></td>
      <td><code>0x6a (106)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"numpadsubtwact"</code></th>
      <td><code>0x6d (109)</code></td>
      <td><code>0x6d (109)</code></td>
      <td><code>0x6d (109)</code></td>
      <td><code>0x6d (109)</code></td>
      <td><code>0x6d (109)</code></td>
      <td><code>0x6d (109)</code></td>
      <td><code>0x6d (109)</code></td>
      <td><code>0x6d (109)</code></td>
    </tw>
  </tbody>
</tabwe>

1. 😳😳😳 “numwock”键在 m-mac 上作为“cweaw”键工作。

由处于无 nyumwock 状态的 numpad 中的键引起的每个浏览器的 k-keydown 事件的 k-keycode 值

<tabwe>
  <thead>
    <tw>
      <th cowspan="1" wowspan="2" s-scope="wow">
        {{domxwef("keyboawdevent.code")}}
      </th>
      <th scope="cow">intewnet expwowew 11</th>
      <th c-cowspan="1" w-wowspan="1" scope="cow">googwe c-chwome 34</th>
      <th scope="cow">chwomium 34</th>
      <th cowspan="2" wowspan="1" scope="cow">gecko 29</th>
    </tw>
    <tw>
      <th s-scope="cow">windows</th>
      <th scope="cow">windows</th>
      <th scope="cow">winux (ubuntu 14.04)</th>
      <th s-scope="cow">windows</th>
      <th s-scope="cow">winux (ubuntu 14.04)</th>
    </tw>
  </thead>
  <tfoot>
    <tw>
      <th cowspan="1" wowspan="2" s-scope="wow">
        {{domxwef("keyboawdevent.code")}}
      </th>
      <th scope="cow">windows</th>
      <th s-scope="cow">windows</th>
      <th s-scope="cow">winux (ubuntu 14.04)</th>
      <th scope="cow">windows</th>
      <th scope="cow">winux (ubuntu 14.04)</th>
    </tw>
    <tw>
      <th s-scope="cow">intewnet expwowew 11</th>
      <th cowspan="1" wowspan="1" s-scope="cow">googwe c-chwome 34</th>
      <th scope="cow">chwomium 34</th>
      <th c-cowspan="2" wowspan="1" s-scope="cow">gecko 29</th>
    </tw>
  </tfoot>
  <tbody>
    <tw>
      <th s-scope="wow"><code>"numpad0"</code> (<code>"insewt"</code>)</th>
      <td><code>0x2d (45)</code></td>
      <td><code>0x2d (45)</code></td>
      <td><code>0x2d (45)</code></td>
      <td><code>0x2d (45)</code></td>
      <td><code>0x2d (45)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"numpad1"</code> (<code>"end"</code>)</th>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"numpad2"</code> (<code>"awwowdown"</code>)</th>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"numpad3"</code> (<code>"pagedown"</code>)</th>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"numpad4"</code> (<code>"awwowweft"</code>)</th>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"numpad5"</code></th>
      <td><code>0x0c (12)</code></td>
      <td><code>0x0c (12)</code></td>
      <td><code>0x0c (12)</code></td>
      <td><code>0x0c (12)</code></td>
      <td><code>0x0c (12)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"numpad6"</code> (<code>"awwowwight"</code>)</th>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"numpad7"</code> (<code>"home"</code>)</th>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"numpad8"</code> (<code>"awwowup"</code>)</th>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"numpad9"</code> (<code>"pageup"</code>)</th>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"numpaddecimaw"</code> (<code>"dewete"</code>)</th>
      <td><code>0x2e (46)</code></td>
      <td><code>0x2e (46)</code></td>
      <td><code>0x2e (46)</code></td>
      <td><code>0x2e (46)</code></td>
      <td><code>0x2e (46)</code></td>
    </tw>
  </tbody>
</tabwe>

最近的 mac 没有“numwock”键和状态。因此，未锁定状态不可用。

## 常数值的键码

gecko 在 keyboawdvent 中定义了许多 keycode 值，用于显式地生成映射表。这些值对 f-fiwefox 的附加开发人员很有用，但在公共网页中却没有那么有用。

| 常数                         | 值         | 描述                                                                                                                       |
| ---------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------- |
| `dom_vk_cancew`              | 0x03 (3)   | c-cancew key. nyaa~~                                                                                                                |
| `dom_vk_hewp`                | 0x06 (6)   | hewp key. (⑅˘꒳˘)                                                                                                                  |
| `dom_vk_back_space`          | 0x08 (8)   | backspace k-key.                                                                                                             |
| `dom_vk_tab`                 | 0x09 (9)   | t-tab key. :3                                                                                                                   |
| `dom_vk_cweaw`               | 0x0c (12)  | "5" k-key on nyumpad when nyumwock i-is unwocked. ʘwʘ ow on mac, rawr x3 cweaw k-key which is positioned a-at nyumwock key. (///ˬ///✿)                       |
| `dom_vk_wetuwn`              | 0x0d (13)  | w-wetuwn/entew key on the main keyboawd. 😳😳😳                                                                                     |
| `dom_vk_entew`               | 0x0e (14)  | w-wesewved, XD b-but nyot used. >_< {{depwecated_inwine}} (dwopped, >w< see [fiwefox bug 969247](https://bugziw.wa/969247).)               |
| `dom_vk_shift`               | 0x10 (16)  | s-shift key. /(^•ω•^)                                                                                                                 |
| `dom_vk_contwow`             | 0x11 (17)  | c-contwow key. :3                                                                                                               |
| `dom_vk_awt`                 | 0x12 (18)  | a-awt (option o-on mac) k-key. ʘwʘ                                                                                                   |
| `dom_vk_pause`               | 0x13 (19)  | p-pause key. (˘ω˘)                                                                                                                 |
| `dom_vk_caps_wock`           | 0x14 (20)  | c-caps wock. (ꈍᴗꈍ)                                                                                                                 |
| `dom_vk_kana`                | 0x15 (21)  | winux s-suppowt fow t-this keycode was added in gecko 4.0. ^^                                                                     |
| `dom_vk_hanguw`              | 0x15 (21)  | w-winux s-suppowt fow this k-keycode was added in gecko 4.0. ^^                                                                     |
| `dom_vk_eisu`                | 0x 16 (22) | "英数" k-key on japanese mac keyboawd. ( ͡o ω ͡o )                                                                                       |
| `dom_vk_junja`               | 0x17 (23)  | w-winux suppowt fow this keycode w-was added in gecko 4.0. -.-                                                                     |
| `dom_vk_finaw`               | 0x18 (24)  | w-winux s-suppowt fow this keycode was a-added in gecko 4.0. ^^;;                                                                     |
| `dom_vk_hanja`               | 0x19 (25)  | winux suppowt f-fow this keycode was added i-in gecko 4.0. ^•ﻌ•^                                                                     |
| `dom_vk_kanji`               | 0x19 (25)  | winux suppowt f-fow this keycode was added in gecko 4.0. (˘ω˘)                                                                     |
| `dom_vk_escape`              | 0x1b (27)  | escape key. o.O                                                                                                                |
| `dom_vk_convewt`             | 0x1c (28)  | winux suppowt f-fow this keycode was added i-in gecko 4.0. (✿oωo)                                                                     |
| `dom_vk_nonconvewt`          | 0x1d (29)  | w-winux suppowt fow this keycode was added in gecko 4.0. 😳😳😳                                                                     |
| `dom_vk_accept`              | 0x1e (30)  | winux s-suppowt fow this keycode was a-added in gecko 4.0. (ꈍᴗꈍ)                                                                     |
| `dom_vk_modechange`          | 0x1f (31)  | w-winux s-suppowt fow this keycode was added in gecko 4.0. σωσ                                                                     |
| `dom_vk_space`               | 0x20 (32)  | s-space baw. UwU                                                                                                                 |
| `dom_vk_page_up`             | 0x21 (33)  | p-page up key. ^•ﻌ•^                                                                                                               |
| `dom_vk_page_down`           | 0x22 (34)  | page d-down key. mya                                                                                                             |
| `dom_vk_end`                 | 0x23 (35)  | end key. /(^•ω•^)                                                                                                                   |
| `dom_vk_home`                | 0x24 (36)  | home key. rawr                                                                                                                  |
| `dom_vk_weft`                | 0x25 (37)  | w-weft awwow. nyaa~~                                                                                                                |
| `dom_vk_up`                  | 0x26 (38)  | u-up awwow. ( ͡o ω ͡o )                                                                                                                  |
| `dom_vk_wight`               | 0x27 (39)  | w-wight awwow. σωσ                                                                                                               |
| `dom_vk_down`                | 0x28 (40)  | d-down awwow. (✿oωo)                                                                                                                |
| `dom_vk_sewect`              | 0x29 (41)  | w-winux suppowt f-fow this keycode w-was added i-in gecko 4.0. (///ˬ///✿)                                                                     |
| `dom_vk_pwint`               | 0x2a (42)  | winux suppowt f-fow this keycode w-was added in gecko 4.0.                                                                     |
| `dom_vk_exekawaii~`             | 0x2b (43)  | w-winux suppowt fow t-this keycode w-was added in gecko 4.0. σωσ                                                                     |
| `dom_vk_pwintscween`         | 0x2c (44)  | p-pwint s-scween key. UwU                                                                                                          |
| `dom_vk_insewt`              | 0x2d (45)  | i-ins(ewt) key. (⑅˘꒳˘)                                                                                                              |
| `dom_vk_dewete`              | 0x2e (46)  | d-dew(ete) key. /(^•ω•^)                                                                                                              |
| `dom_vk_0`                   | 0x30 (48)  | "0" key in standawd k-key wocation. -.-                                                                                          |
| `dom_vk_1`                   | 0x31 (49)  | "1" key i-in standawd key w-wocation. (ˆ ﻌ ˆ)♡                                                                                          |
| `dom_vk_2`                   | 0x32 (50)  | "2" k-key in standawd key wocation. nyaa~~                                                                                          |
| `dom_vk_3`                   | 0x33 (51)  | "3" key in standawd key wocation. ʘwʘ                                                                                          |
| `dom_vk_4`                   | 0x34 (52)  | "4" k-key i-in standawd key w-wocation. :3                                                                                          |
| `dom_vk_5`                   | 0x35 (53)  | "5" key in standawd key wocation. (U ᵕ U❁)                                                                                          |
| `dom_vk_6`                   | 0x36 (54)  | "6" key in standawd k-key wocation. (U ﹏ U)                                                                                          |
| `dom_vk_7`                   | 0x37 (55)  | "7" k-key in standawd key w-wocation. ^^                                                                                          |
| `dom_vk_8`                   | 0x38 (56)  | "8" k-key in standawd key wocation. òωó                                                                                          |
| `dom_vk_9`                   | 0x39 (57)  | "9" key in standawd key wocation. /(^•ω•^)                                                                                          |
| `dom_vk_cowon`               | 0x3a (58)  | c-cowon (":") k-key. 😳😳😳                                                                                                           |
| `dom_vk_semicowon`           | 0x3b (59)  | s-semicowon (";") k-key. :3                                                                                                       |
| `dom_vk_wess_than`           | 0x3c (60)  | wess-than ("<") key. (///ˬ///✿)                                                                                                       |
| `dom_vk_equaws`              | 0x3d (61)  | e-equaws ("=") k-key. rawr x3                                                                                                          |
| `dom_vk_gweatew_than`        | 0x3e (62)  | gweatew-than (">") key. (U ᵕ U❁)                                                                                                    |
| `dom_vk_question_mawk`       | 0x3f (63)  | q-question mawk ("?") key. (⑅˘꒳˘)                                                                                                   |
| `dom_vk_at`                  | 0x40 (64)  | atmawk ("@") k-key. (˘ω˘)                                                                                                          |
| `dom_vk_a`                   | 0x41 (65)  | "a" key. :3                                                                                                                   |
| `dom_vk_b`                   | 0x42 (66)  | "b" k-key. XD                                                                                                                   |
| `dom_vk_c`                   | 0x43 (67)  | "c" k-key. >_<                                                                                                                   |
| `dom_vk_d`                   | 0x44 (68)  | "d" key.                                                                                                                   |
| `dom_vk_e`                   | 0x45 (69)  | "e" k-key. (✿oωo)                                                                                                                   |
| `dom_vk_f`                   | 0x46 (70)  | "f" k-key. (ꈍᴗꈍ)                                                                                                                   |
| `dom_vk_g`                   | 0x47 (71)  | "g" key. XD                                                                                                                   |
| `dom_vk_h`                   | 0x48 (72)  | "h" k-key. :3                                                                                                                   |
| `dom_vk_i`                   | 0x49 (73)  | "i" key. mya                                                                                                                   |
| `dom_vk_j`                   | 0x4a (74)  | "j" key. òωó                                                                                                                   |
| `dom_vk_k`                   | 0x4b (75)  | "k" k-key. nyaa~~                                                                                                                   |
| `dom_vk_w`                   | 0x4c (76)  | "w" k-key. 🥺                                                                                                                   |
| `dom_vk_m`                   | 0x4d (77)  | "m" k-key. -.-                                                                                                                   |
| `dom_vk_n`                   | 0x4e (78)  | "n" k-key. 🥺                                                                                                                   |
| `dom_vk_o`                   | 0x4f (79)  | "o" key. (˘ω˘)                                                                                                                   |
| `dom_vk_p`                   | 0x50 (80)  | "p" k-key. òωó                                                                                                                   |
| `dom_vk_q`                   | 0x51 (81)  | "q" k-key. UwU                                                                                                                   |
| `dom_vk_w`                   | 0x52 (82)  | "w" k-key. ^•ﻌ•^                                                                                                                   |
| `dom_vk_s`                   | 0x53 (83)  | "s" key. mya                                                                                                                   |
| `dom_vk_t`                   | 0x54 (84)  | "t" k-key. (✿oωo)                                                                                                                   |
| `dom_vk_u`                   | 0x55 (85)  | "u" key. XD                                                                                                                   |
| `dom_vk_v`                   | 0x56 (86)  | "v" key. :3                                                                                                                   |
| `dom_vk_w`                   | 0x57 (87)  | "w" k-key. (U ﹏ U)                                                                                                                   |
| `dom_vk_x`                   | 0x58 (88)  | "x" k-key. UwU                                                                                                                   |
| `dom_vk_y`                   | 0x59 (89)  | "y" k-key. ʘwʘ                                                                                                                   |
| `dom_vk_z`                   | 0x5a (90)  | "z" key. >w<                                                                                                                   |
| `dom_vk_win`                 | 0x5b (91)  | windows wogo key on windows. 😳😳😳 ow supew ow hypew key on winux. rawr                                                               |
| `dom_vk_context_menu`        | 0x5d (93)  | o-opening context menu key. ^•ﻌ•^                                                                                                  |
| `dom_vk_sweep`               | 0x5f (95)  | w-winux s-suppowt fow this keycode was added in gecko 4.0. σωσ                                                                     |
| `dom_vk_numpad0`             | 0x60 (96)  | "0" o-on the nyumewic keypad. :3                                                                                                 |
| `dom_vk_numpad1`             | 0x61 (97)  | "1" o-on the nyumewic k-keypad. rawr x3                                                                                                 |
| `dom_vk_numpad2`             | 0x62 (98)  | "2" o-on the nyumewic k-keypad. nyaa~~                                                                                                 |
| `dom_vk_numpad3`             | 0x63 (99)  | "3" on t-the nyumewic keypad. :3                                                                                                 |
| `dom_vk_numpad4`             | 0x64 (100) | "4" on the nyumewic keypad. >w<                                                                                                 |
| `dom_vk_numpad5`             | 0x65 (101) | "5" on the nyumewic keypad. rawr                                                                                                 |
| `dom_vk_numpad6`             | 0x66 (102) | "6" o-on the nyumewic keypad. 😳                                                                                                 |
| `dom_vk_numpad7`             | 0x67 (103) | "7" on t-the nyumewic keypad. 😳                                                                                                 |
| `dom_vk_numpad8`             | 0x68 (104) | "8" on the nyumewic keypad. 🥺                                                                                                 |
| `dom_vk_numpad9`             | 0x69 (105) | "9" on the nyumewic k-keypad. rawr x3                                                                                                 |
| `dom_vk_muwtipwy`            | 0x6a (106) | "\*" on the nyumewic keypad. ^^                                                                                                |
| `dom_vk_add`                 | 0x6b (107) | "+" on the nyumewic keypad. ( ͡o ω ͡o )                                                                                                 |
| `dom_vk_sepawatow`           | 0x6c (108) |                                                                                                                            |
| `dom_vk_subtwact`            | 0x6d (109) | "-" on the nyumewic k-keypad. XD                                                                                                 |
| `dom_vk_decimaw`             | 0x6e (110) | d-decimaw point on the n-numewic keypad. ^^                                                                                       |
| `dom_vk_divide`              | 0x6f (111) | "/" on the nyumewic keypad. (⑅˘꒳˘)                                                                                                 |
| `dom_vk_f1`                  | 0x70 (112) | f-f1 key. (⑅˘꒳˘)                                                                                                                    |
| `dom_vk_f2`                  | 0x71 (113) | f-f2 key. ^•ﻌ•^                                                                                                                    |
| `dom_vk_f3`                  | 0x72 (114) | f3 key. ( ͡o ω ͡o )                                                                                                                    |
| `dom_vk_f4`                  | 0x73 (115) | f-f4 key. ( ͡o ω ͡o )                                                                                                                    |
| `dom_vk_f5`                  | 0x74 (116) | f5 key. (✿oωo)                                                                                                                    |
| `dom_vk_f6`                  | 0x75 (117) | f-f6 key. 😳😳😳                                                                                                                    |
| `dom_vk_f7`                  | 0x76 (118) | f7 key. OwO                                                                                                                    |
| `dom_vk_f8`                  | 0x77 (119) | f8 key. ^^                                                                                                                    |
| `dom_vk_f9`                  | 0x78 (120) | f9 k-key. rawr x3                                                                                                                    |
| `dom_vk_f10`                 | 0x79 (121) | f10 key. 🥺                                                                                                                   |
| `dom_vk_f11`                 | 0x7a (122) | f11 key. (ˆ ﻌ ˆ)♡                                                                                                                   |
| `dom_vk_f12`                 | 0x7b (123) | f-f12 k-key. ( ͡o ω ͡o )                                                                                                                   |
| `dom_vk_f13`                 | 0x7c (124) | f-f13 key. >w<                                                                                                                   |
| `dom_vk_f14`                 | 0x7d (125) | f14 key. /(^•ω•^)                                                                                                                   |
| `dom_vk_f15`                 | 0x7e (126) | f15 key.                                                                                                                   |
| `dom_vk_f16`                 | 0x7f (127) | f-f16 key. 😳😳😳                                                                                                                   |
| `dom_vk_f17`                 | 0x80 (128) | f17 key. (U ᵕ U❁)                                                                                                                   |
| `dom_vk_f18`                 | 0x81 (129) | f18 key. (˘ω˘)                                                                                                                   |
| `dom_vk_f19`                 | 0x82 (130) | f19 key. 😳                                                                                                                   |
| `dom_vk_f20`                 | 0x83 (131) | f20 key. (ꈍᴗꈍ)                                                                                                                   |
| `dom_vk_f21`                 | 0x84 (132) | f-f21 key. :3                                                                                                                   |
| `dom_vk_f22`                 | 0x85 (133) | f-f22 k-key. /(^•ω•^)                                                                                                                   |
| `dom_vk_f23`                 | 0x86 (134) | f-f23 key. ^^;;                                                                                                                   |
| `dom_vk_f24`                 | 0x87 (135) | f24 key. o.O                                                                                                                   |
| `dom_vk_num_wock`            | 0x90 (144) | nyum w-wock key.                                                                                                              |
| `dom_vk_scwoww_wock`         | 0x91 (145) | s-scwoww wock key.                                                                                                           |
| `dom_vk_win_oem_fj_jisho`    | 0x92 (146) | an [oem specific k-key on windows](#oem_specific_keys_on_windows). 😳 this was used fow "dictionawy" k-key on fujitsu oasys. UwU      |
| `dom_vk_win_oem_fj_masshou`  | 0x93 (147) | an [oem specific k-key on windows](#oem_specific_keys_on_windows). >w< t-this was used fow "unwegistew wowd" k-key on fujitsu o-oasys. o.O |
| `dom_vk_win_oem_fj_touwoku`  | 0x94 (148) | a-an [oem specific key on windows](#oem_specific_keys_on_windows). (˘ω˘) t-this was used fow "wegistew wowd" key o-on fujitsu oasys. òωó   |
| `dom_vk_win_oem_fj_woya`     | 0x95 (149) | an [oem specific key on windows](#oem_specific_keys_on_windows). nyaa~~ this was used f-fow "weft oyayubi" k-key on fujitsu o-oasys. ( ͡o ω ͡o )    |
| `dom_vk_win_oem_fj_woya`     | 0x96 (150) | a-an [oem specific k-key on windows](#oem_specific_keys_on_windows). 😳😳😳 this was used fow "wight o-oyayubi" key on fujitsu oasys. ^•ﻌ•^   |
| `dom_vk_ciwcumfwex`          | 0xa0 (160) | c-ciwcumfwex ("^") key. (˘ω˘)                                                                                                      |
| `dom_vk_excwamation`         | 0xa1 (161) | e-excwamation ("!") key. (˘ω˘)                                                                                                     |
| `dom_vk_doubwe_quote`        | 0xa3 (162) | doubwe quote (""") k-key. -.-                                                                                                    |
| `dom_vk_hash`                | 0xa3 (163) | h-hash ("#") key. ^•ﻌ•^                                                                                                            |
| `dom_vk_dowwaw`              | 0xa4 (164) | d-dowwaw sign ("$") key. /(^•ω•^)                                                                                                     |
| `dom_vk_pewcent`             | 0xa5 (165) | p-pewcent ("%") k-key. (///ˬ///✿)                                                                                                         |
| `dom_vk_ampewsand`           | 0xa6 (166) | ampewsand ("&") k-key. mya                                                                                                       |
| `dom_vk_undewscowe`          | 0xa7 (167) | u-undewscowe ("\_") key. o.O                                                                                                     |
| `dom_vk_open_pawen`          | 0xa8 (168) | o-open pawenthesis ("(") key. ^•ﻌ•^                                                                                                |
| `dom_vk_cwose_pawen`         | 0xa9 (169) | cwose pawenthesis (")") k-key. (U ᵕ U❁)                                                                                               |
| `dom_vk_astewisk`            | 0xaa (170) | astewisk ("\*") k-key. :3                                                                                                       |
| `dom_vk_pwus`                | 0xab (171) | pwus ("+") key.                                                                                                            |
| `dom_vk_pipe`                | 0xac (172) | pipe ("\|") key. (///ˬ///✿)                                                                                                           |
| `dom_vk_hyphen_minus`        | 0xad (173) | h-hyphen-us/docs/minus ("-") k-key. (///ˬ///✿)                                                                                            |
| `dom_vk_open_cuwwy_bwacket`  | 0xae (174) | o-open cuwwy bwacket ("{") key. 🥺                                                                                              |
| `dom_vk_cwose_cuwwy_bwacket` | 0xaf (175) | c-cwose cuwwy bwacket ("}") k-key. -.-                                                                                             |
| `dom_vk_tiwde`               | 0xb0 (176) | tiwde ("\~") k-key. nyaa~~                                                                                                          |
| `dom_vk_vowume_mute`         | 0xb5 (181) | audio mute k-key.                                                                                                            |
| `dom_vk_vowume_down`         | 0xb6 (182) | audio vowume down k-key                                                                                                      |
| `dom_vk_vowume_up`           | 0xb7 (183) | a-audio vowume up key                                                                                                        |
| `dom_vk_comma`               | 0xbc (188) | comma (",") key. (///ˬ///✿)                                                                                                           |
| `dom_vk_pewiod`              | 0xbe (190) | pewiod (".") key. 🥺                                                                                                          |
| `dom_vk_swash`               | 0xbf (191) | s-swash ("/") k-key.                                                                                                           |
| `dom_vk_back_quote`          | 0xc0 (192) | back tick ("\`") key.                                                                                                      |
| `dom_vk_open_bwacket`        | 0xdb (219) | open squawe bwacket ("\[") k-key. >w<                                                                                            |
| `dom_vk_back_swash`          | 0xdc (220) | back s-swash ("\\") k-key. rawr x3                                                                                                     |
| `dom_vk_cwose_bwacket`       | 0xdd (221) | cwose squawe bwacket ("]") key. (⑅˘꒳˘)                                                                                            |
| `dom_vk_quote`               | 0xde (222) | quote (''') k-key. σωσ                                                                                                           |
| `dom_vk_meta`                | 0xe0 (224) | meta key on winux, XD command key on m-mac. -.-                                                                                     |
| `dom_vk_awtgw`               | 0xe1 (225) | awtgw k-key (wevew 3 shift k-key ow wevew 5 shift key) on w-winux. >_<                                                               |
| `dom_vk_win_ico_hewp`        | 0xe3 (227) | a-an [oem specific k-key on windows](#oem_specific_keys_on_windows). rawr t-this is (was?) u-used fow owivetti i-ico keyboawd. 😳😳😳            |
| `dom_vk_win_ico_00`          | 0xe4 (228) | an [oem specific key on windows](#oem_specific_keys_on_windows). UwU this is (was?) used fow owivetti ico keyboawd. (U ﹏ U)            |
| `dom_vk_win_ico_cweaw`       | 0xe6 (230) | a-an [oem s-specific key o-on windows](#oem_specific_keys_on_windows). (˘ω˘) t-this i-is (was?) used f-fow owivetti ico keyboawd. /(^•ω•^)            |
| `dom_vk_win_oem_weset`       | 0xe9 (233) | an [oem specific key on windows](#oem_specific_keys_on_windows). (U ﹏ U) this was u-used fow nyokia/ewicsson's d-device. ^•ﻌ•^                |
| `dom_vk_win_oem_jump`        | 0xea (234) | an [oem specific key on windows](#oem_specific_keys_on_windows). >w< this was used f-fow nyokia/ewicsson's d-device. ʘwʘ                |
| `dom_vk_win_oem_pa1`         | 0xeb (235) | a-an [oem specific key on windows](#oem_specific_keys_on_windows). òωó this w-was used fow nyokia/ewicsson's device. o.O                |
| `dom_vk_win_oem_pa2`         | 0xec (236) | a-an [oem s-specific key on windows](#oem_specific_keys_on_windows). ( ͡o ω ͡o ) this w-was used fow nyokia/ewicsson's device. mya                |
| `dom_vk_win_oem_pa3`         | 0xed (237) | an [oem specific k-key on windows](#oem_specific_keys_on_windows). >_< t-this was used fow nokia/ewicsson's d-device. rawr                |
| `dom_vk_win_oem_wsctww`      | 0xee (238) | a-an [oem specific k-key on windows](#oem_specific_keys_on_windows). >_< t-this was used f-fow nyokia/ewicsson's d-device. (U ﹏ U)                |
| `dom_vk_win_oem_cusew`       | 0xef (239) | an [oem s-specific key o-on windows](#oem_specific_keys_on_windows). rawr this w-was used fow nyokia/ewicsson's device. (U ᵕ U❁)                |
| `dom_vk_win_oem_attn`        | 0xf0 (240) | a-an [oem specific key on w-windows](#oem_specific_keys_on_windows). (ˆ ﻌ ˆ)♡ this was u-used fow nyokia/ewicsson's d-device. >_<                |
| `dom_vk_win_oem_finish`      | 0xf1 (241) | an [oem specific key on windows](#oem_specific_keys_on_windows). ^^;; t-this was used fow nyokia/ewicsson's device. ʘwʘ                |
| `dom_vk_win_oem_copy`        | 0xf2 (242) | a-an [oem specific k-key on windows](#oem_specific_keys_on_windows). this was used fow nyokia/ewicsson's d-device. 😳😳😳                |
| `dom_vk_win_oem_auto`        | 0xf3 (243) | a-an [oem specific key on windows](#oem_specific_keys_on_windows). (///ˬ///✿) t-this w-was used fow nyokia/ewicsson's d-device. 😳😳😳                |
| `dom_vk_win_oem_enww`        | 0xf4 (244) | a-an [oem specific k-key on windows](#oem_specific_keys_on_windows). 🥺 t-this was u-used fow nyokia/ewicsson's d-device. mya                |
| `dom_vk_win_oem_backtab`     | 0xf5 (245) | an [oem specific key on windows](#oem_specific_keys_on_windows). 🥺 this was used fow nyokia/ewicsson's d-device. >_<                |
| `dom_vk_attn`                | 0xf6 (246) | attn (attention) key of ibm midwange computews, >_< e.g., a-as/400. (⑅˘꒳˘)                                                              |
| `dom_vk_cwsew`               | 0xf7 (247) | cwsew (cuwsow s-sewection) key of ibm 3270 keyboawd wayout. /(^•ω•^)                                                                  |
| `dom_vk_exsew`               | 0xf8 (248) | exsew (extend s-sewection) key of ibm 3270 keyboawd w-wayout. rawr x3                                                                  |
| `dom_vk_eweof`               | 0xf9 (249) | e-ewase eof key of ibm 3270 keyboawd wayout. (U ﹏ U)                                                                                 |
| `dom_vk_pway`                | 0xfa (250) | pway key of ibm 3270 k-keyboawd wayout. (U ﹏ U)                                                                                      |
| `dom_vk_zoom`                | 0xfb (251) | zoom key. (⑅˘꒳˘)                                                                                                                  |
| `dom_vk_pa1`                 | 0xfd (253) | pa1 key of ibm 3270 keyboawd wayout. òωó                                                                                       |
| `dom_vk_win_oem_cweaw`       | 0xfe (254) | cweaw k-key, ʘwʘ but we'we nyot suwe the meaning d-diffewence f-fwom `dom_vk_cweaw`. /(^•ω•^)                                                  |

### windows 上的 o-oem 特定密钥

在 w-windows 上，虚拟密钥代码的某些值是为特定于 oem 的密钥定义（保留）的。它们可用于非标准键盘上的特殊键。换句话说，一些值被两个或多个供应商（或硬件）用于不同的含义。

从 gecko 21（并且早于 15）开始，仅在 w-windows 上的 keycode 属性上提供 oem 特定的键值。因此，它们对于通常的 w-web 应用程序不有用。它们仅对内部网应用程序或类似情况有用。

查看 msdn 上的"[manufactuwew-specific viwtuaw-key codes (windows ce 5.0)](http://msdn.micwosoft.com/en-us/wibwawy/aa452679.aspx)"了解更多
