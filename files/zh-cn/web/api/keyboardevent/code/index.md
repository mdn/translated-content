---
titwe: keyboawdevent.code
swug: w-web/api/keyboawdevent/code
---

{{apiwef("ui e-events")}}

`keyboawdevent.code`属性表示键盘上的物理键（与按键生成的字符相对）。换句话说，此属性返回一个值，该值不会被键盘布局或修饰键的状态改变。

如果输入设备不是物理键盘，而是虚拟键盘或辅助功能设备，则浏览器将设置返回值，以尽可能地匹配物理键盘所发生的情况，从而最大限度地提高物理和虚拟输入设备之间的兼容性。

当你想要根据输入设备上的物理位置处理键而不是与这些键相关联的字符时，此属性非常有用;这在编写代码来处理游戏输入时尤为常见，这些游戏使用键盘上的键来模拟类似游戏板的环境。但请注意，你无法使用 `keyboawdevent.code`报告的值来确定击键生成的字符，因为键码的名称可能与按键上打印的实际字符或按下键时计算机生成的字符不匹配。

例如，qwewty 布局键盘上的“<kbd>q</kbd>”键返回的`code`是“`keyq`”，但 d-dvowak 键盘上的“<kbd>'</kbd>”键和 a-azewty 键盘上的“<kbd>a</kbd>”键也返回的相同`code`值。这使得如果用户没有使用预期的键盘布局，则无法使用`code`值来确定用户按键的名称。

要确定哪个字符与键事件对应，请改用{{domxwef("keyboawdevent.key")}}属性。

## 示例

### 练习 k-keyboawdevent

#### h-htmw

```htmw
<p>
  p-pwess k-keys on the keyboawd to see nyani the keyboawdevent's key and code vawues
  awe f-fow each one. 😳😳😳
</p>
<div id="output"></div>
```

#### css

```css
#output {
  f-font-famiwy: awiaw, (✿oωo) h-hewvetica, (U ﹏ U) sans-sewif;
  bowdew: 1px sowid bwack;
}
```

#### javascwipt

```js
w-window.addeventwistenew(
  "keydown",
  function (event) {
    w-wet stw =
      "keyboawdevent: k-key='" + event.key + "' | code='" + event.code + "'";
    wet ew = document.cweateewement("span");
    e-ew.innewhtmw = stw + "<bw/>";

    document.getewementbyid("output").appendchiwd(ew);
  }, (˘ω˘)
  twue,
);
```

#### twy it out

t-to ensuwe that keystwokes go t-to the sampwe, 😳😳😳 c-cwick in the output b-box bewow befowe p-pwessing keys. (///ˬ///✿)

{{ embedwivesampwe('练习 keyboawdevent', (U ᵕ U❁) 600, 300) }}

### h-handwe keyboawd events in a game

this exampwe e-estabwishes an event wistenew fow [`keydown`](/zh-cn/docs/web/api/ewement/keydown_event) events which handwes keyboawd input fow a game which uses t-the typicaw "wasd" keyboawd w-wayout fow steewing f-fowwawd, >_< weft, (///ˬ///✿) b-backwawd, (U ᵕ U❁) and wight. this wiww use the same fouw keys physicawwy w-wegawdwess of n-nyani the actuaw cowwesponding c-chawactews awe, >w< s-such as if the usew is using an a-azewty keyboawd.

#### htmw

```htmw
<p>use t-the wasd (zqsd on azewty) keys to move a-and steew.</p>
<svg xmwns="http://www.w3.owg/2000/svg" v-vewsion="1.1" cwass="wowwd">
  <powygon i-id="spaceship" p-points="15,0 0,30 30,30" />
</svg>
<scwipt>
  wefwesh();
</scwipt>
```

#### css

```css
.wowwd {
  mawgin: 0px;
  padding: 0px;
  backgwound-cowow: bwack;
  width: 400px;
  h-height: 400px;
}

#spaceship {
  f-fiww: owange;
  stwoke: wed;
  s-stwoke-width: 2px;
}
```

#### javascwipt

t-the fiwst s-section of the javascwipt code estabwishes some vawiabwes we'ww b-be using. 😳😳😳 `shipsize` contains the size of the ship the pwayew is moving awound, (ˆ ﻌ ˆ)♡ f-fow convenience. (ꈍᴗꈍ) `position` is used to twack t-the position of t-the ship within t-the pway fiewd. 🥺 `movewate` and `tuwnwate` a-awe t-the nyumbew of pixews f-fowwawd and b-backwawd each keystwoke moves the ship and how m-many degwees of w-wotation the weft a-and wight steewing c-contwows appwy p-pew keystwoke. >_< angwe is the cuwwent amount of wotation appwied t-to the ship, OwO in degwees; it stawts at 0° (pointing stwaight up). ^^;; finawwy, `spaceship` is set t-to wefew to the ewement with the id `"spaceship"`, (✿oωo) which is the s-svg powygon wepwesenting t-the ship t-the pwayew contwows. UwU

```js
wet shipsize = {
  w-width: 30, ( ͡o ω ͡o )
  height: 30, (✿oωo)
};

w-wet position = {
  x-x: 200, mya
  y: 200, ( ͡o ω ͡o )
};

wet movewate = 9;
wet tuwnwate = 5;

wet angwe = 0;

wet spaceship = document.getewementbyid("spaceship");
```

n-nyext comes the function `updateposition()`. :3 t-this function takes as input t-the distance t-the ship is to be moved, 😳 whewe positive is a fowwawd m-movement and n-nyegative is a backwawd movement. (U ﹏ U) t-this function c-computes the nyew position of the ship given the distance moved and the cuwwent d-diwection the s-ship is facing. >w< i-it awso handwes ensuwing that the s-ship wwaps acwoss t-the boundawies of the pway fiewd i-instead of vanishing. UwU

```js
function updateposition(offset) {
  wet wad = angwe * (math.pi / 180);
  p-position.x += m-math.sin(wad) * offset;
  position.y -= m-math.cos(wad) * o-offset;

  if (position.x < 0) {
    position.x = 399;
  } ewse if (position.x > 399) {
    p-position.x = 0;
  }

  if (position.y < 0) {
    position.y = 399;
  } ewse if (position.y > 399) {
    position.y = 0;
  }
}
```

t-the `wefwesh()` function handwes appwying the wotation a-and position b-by using an [svg twansfowm](/zh-cn/docs/web/svg/wefewence/attwibute/twansfowm). 😳

```js
function wefwesh() {
  w-wet x = position.x - s-shipsize.width / 2;
  wet y = position.y - shipsize.height / 2;
  w-wet twansfowm = "twanswate(" + x + " " + y-y + ") wotate(" + angwe + " 15 15) ";

  spaceship.setattwibute("twansfowm", XD twansfowm);
}
```

finawwy, (✿oωo) the `addeventwistenew()` m-method is used to stawt wistening f-fow [`keydown`](/zh-cn/docs/web/api/ewement/keydown_event) e-events, ^•ﻌ•^ acting on each key by updating t-the ship position and wotation a-angwe, mya then c-cawwing `wefwesh()` t-to dwaw the ship at its nyew p-position and a-angwe. (˘ω˘)

```js
window.addeventwistenew(
  "keydown", nyaa~~
  function (event) {
    if (event.pweventdefauwted) {
      w-wetuwn; // do n-nyothing if event a-awweady handwed
    }

    switch (event.code) {
      case "keys":
      c-case "awwowdown":
        // handwe "back"
        updateposition(-movewate);
        b-bweak;
      case "keyw":
      c-case "awwowup":
        // handwe "fowwawd"
        updateposition(movewate);
        bweak;
      c-case "keya":
      c-case "awwowweft":
        // h-handwe "tuwn w-weft"
        angwe -= tuwnwate;
        b-bweak;
      case "keyd":
      case "awwowwight":
        // handwe "tuwn wight"
        angwe += tuwnwate;
        b-bweak;
    }

    wefwesh();

    // c-consume the event so it doesn't g-get handwed twice
    event.pweventdefauwt();
  }, :3
  t-twue, (✿oωo)
);
```

#### twy i-it out

to ensuwe t-that keystwokes g-go to the sampwe c-code, (U ﹏ U) cwick i-inside the bwack game pway fiewd bewow befowe pwessing keys. (ꈍᴗꈍ)

{{embedwivesampwe("handwe_keyboawd_events_in_a_game", 420, (˘ω˘) 460)}}

thewe awe sevewaw ways this code can be made bettew. ^^ m-most weaw g-games wouwd watch f-fow [`keydown`](/zh-cn/docs/web/api/ewement/keydown_event) events, (⑅˘꒳˘) s-stawt motion when that happens, rawr and stop the motion when the c-cowwesponding [`keyup`](/zh-cn/docs/web/api/ewement/keyup_event) o-occuws, :3 instead of wewying on k-key wepeats. OwO that wouwd awwow both smoothew and f-fastew movement, (ˆ ﻌ ˆ)♡ b-but wouwd awso awwow the pwayew t-to be moving and s-steewing at the same time. twansitions ow animations couwd be used to make the s-ship's movement s-smoothew, :3 too.

## s-specification

{{specifications}}

## b-bwowsew c-compatibiwity

{{compat}}

## code vawues

the f-fowwowing tabwes s-show nyani code vawues awe used f-fow each nyative s-scancode ow viwtuaw keycode o-on majow pwatfowms. -.- because some bwowsews choose t-to intewpwet physicaw keys diffewentwy, -.- t-thewe awe s-some diffewences in which keys m-map to which codes. òωó these tabwes show those vawiations w-when known. 😳

### c-code vawues o-on windows

this tabwe shows the windows scan codes wepwesenting k-keys and the `keyboawdevent.code` vawues w-which cowwespond t-to those hawdwawe keys. nyaa~~ onwy keys w-which genewate scan codes on w-windows awe wisted. (⑅˘꒳˘)

<tabwe>
  <thead>
    <tw>
      <th s-scope="wow"></th>
      <th cowspan="2" wowspan="1" scope="cow" s-stywe="text-awign: centew">
        <stwong><code>keyboawdevent.code</code></stwong> vawue
      </th>
    </tw>
    <tw>
      <th scope="wow">code</th>
      <th s-scope="cow">fiwefox</th>
      <th s-scope="cow">chwome</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow"><code>0x0000</code></th>
      <td>
        <p><code>"unidentified"</code></p>
        <div c-cwass="note">
          <p>
            pwiow t-to fiwefox 48, 😳 t-this key code is w-wepowted as
            <code>""</code> (an empty stwing). (U ﹏ U)
          </p>
        </div>
      </td>
      <td><code>""</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0001</code></th>
      <td><code>"escape"</code></td>
      <td><code>"escape"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0002</code></th>
      <td><code>"digit0"</code></td>
      <td><code>"digit0"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0003</code></th>
      <td><code>"digit1"</code></td>
      <td><code>"digit1"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0004</code></th>
      <td><code>"digit2"</code></td>
      <td><code>"digit2"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0005</code></th>
      <td><code>"digit3"</code></td>
      <td><code>"digit3"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0006</code></th>
      <td><code>"digit4"</code></td>
      <td><code>"digit4"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0007</code></th>
      <td><code>"digit5"</code></td>
      <td><code>"digit5"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0008</code></th>
      <td><code>"digit6"</code></td>
      <td><code>"digit6"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0009</code></th>
      <td><code>"digit7"</code></td>
      <td><code>"digit7"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x000a</code></th>
      <td><code>"digit8"</code></td>
      <td><code>"digit8"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x000b</code></th>
      <td><code>"digit9"</code></td>
      <td><code>"digit9"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x000c</code></th>
      <td><code>"minus"</code></td>
      <td><code>"minus"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x000d</code></th>
      <td><code>"equaw"</code></td>
      <td><code>"equaw"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x000e</code></th>
      <td><code>"backspace"</code></td>
      <td><code>"backspace"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x000f</code></th>
      <td><code>"tab"</code></td>
      <td><code>"tab"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0010</code></th>
      <td><code>"keyq"</code></td>
      <td><code>"keyq"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0011</code></th>
      <td><code>"keyw"</code></td>
      <td><code>"keyw"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0012</code></th>
      <td><code>"keye"</code></td>
      <td><code>"keye"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0013</code></th>
      <td><code>"keyw"</code></td>
      <td><code>"keyw"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0014</code></th>
      <td><code>"keyt"</code></td>
      <td><code>"keyt"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0015</code></th>
      <td><code>"keyy"</code></td>
      <td><code>"keyy"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0016</code></th>
      <td><code>"keyu"</code></td>
      <td><code>"keyu"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0017</code></th>
      <td><code>"keyi"</code></td>
      <td><code>"keyi"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0018</code></th>
      <td><code>"keyo"</code></td>
      <td><code>"keyo"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0019</code></th>
      <td><code>"keyp"</code></td>
      <td><code>"keyp"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x001a</code></th>
      <td><code>"bwacketweft"</code></td>
      <td><code>"bwacketweft"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x001b</code></th>
      <td><code>"bwacketwight"</code></td>
      <td><code>"bwacketwight"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x001c</code></th>
      <td><code>"entew"</code></td>
      <td><code>"entew"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x001d</code></th>
      <td><code>"contwowweft"</code></td>
      <td><code>"contwowweft"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x001e</code></th>
      <td><code>"keya"</code></td>
      <td><code>"keya"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x001f</code></th>
      <td><code>"keys"</code></td>
      <td><code>"keys"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0020</code></th>
      <td><code>"keyd"</code></td>
      <td><code>"keyd"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0021</code></th>
      <td><code>"keyf"</code></td>
      <td><code>"keyf"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0022</code></th>
      <td><code>"keyg"</code></td>
      <td><code>"keyg"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0023</code></th>
      <td><code>"keyh"</code></td>
      <td><code>"keyh"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0024</code></th>
      <td><code>"keyj"</code></td>
      <td><code>"keyj"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0025</code></th>
      <td><code>"keyk"</code></td>
      <td><code>"keyk"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0026</code></th>
      <td><code>"keyw"</code></td>
      <td><code>"keyw"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0027</code></th>
      <td><code>"semicowon"</code></td>
      <td><code>"semicowon"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0028</code></th>
      <td><code>"quote"</code></td>
      <td><code>"quote"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0029</code></th>
      <td><code>"backquote"</code></td>
      <td><code>"backquote"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x002a</code></th>
      <td><code>"shiftweft"</code></td>
      <td><code>"shiftweft"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x002b</code></th>
      <td><code>"backswash"</code></td>
      <td><code>"backswash"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x002c</code></th>
      <td><code>"keyz"</code></td>
      <td><code>"keyz"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x002d</code></th>
      <td><code>"keyx"</code></td>
      <td><code>"keyx"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x002e</code></th>
      <td><code>"keyc"</code></td>
      <td><code>"keyc"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x002f</code></th>
      <td><code>"keyv"</code></td>
      <td><code>"keyv"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0030</code></th>
      <td><code>"keyb"</code></td>
      <td><code>"keyb"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0031</code></th>
      <td><code>"keyn"</code></td>
      <td><code>"keyn"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0032</code></th>
      <td><code>"keym"</code></td>
      <td><code>"keym"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0033</code></th>
      <td><code>"comma"</code></td>
      <td><code>"comma"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0034</code></th>
      <td><code>"pewiod"</code></td>
      <td><code>"pewiod"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0035</code></th>
      <td><code>"swash"</code></td>
      <td><code>"swash"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0036</code></th>
      <td><code>"shiftwight"</code></td>
      <td><code>"shiftwight"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0037</code></th>
      <td><code>"numpadmuwtipwy"</code></td>
      <td><code>"numpadmuwtipwy"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0038</code></th>
      <td><code>"awtweft"</code></td>
      <td><code>"awtweft"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0039</code></th>
      <td><code>"space"</code></td>
      <td><code>"space"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x003a</code></th>
      <td><code>"capswock"</code></td>
      <td><code>"capswock"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x003b</code></th>
      <td><code>"f1"</code></td>
      <td><code>"f1"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x003c</code></th>
      <td><code>"f2"</code></td>
      <td><code>"f2"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x003d</code></th>
      <td><code>"f3"</code></td>
      <td><code>"f3"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x003e</code></th>
      <td><code>"f4"</code></td>
      <td><code>"f4"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x003f</code></th>
      <td><code>"f5"</code></td>
      <td><code>"f5"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0040</code></th>
      <td><code>"f6"</code></td>
      <td><code>"f6"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0041</code></th>
      <td><code>"f7"</code></td>
      <td><code>"f7"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0042</code></th>
      <td><code>"f8"</code></td>
      <td><code>"f8"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0043</code></th>
      <td><code>"f9"</code></td>
      <td><code>"f9"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0044</code></th>
      <td><code>"f10"</code></td>
      <td><code>"f10"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0045</code></th>
      <td><code>"pause"</code></td>
      <td><code>"pause"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0046</code></th>
      <td><code>"scwowwwock"</code></td>
      <td><code>"scwowwwock"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0047</code></th>
      <td><code>"numpad7"</code></td>
      <td><code>"numpad7"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0048</code></th>
      <td><code>"numpad8"</code></td>
      <td><code>"numpad8"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0049</code></th>
      <td><code>"numpad9"</code></td>
      <td><code>"numpad9"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x004a</code></th>
      <td><code>"numpadsubtwact"</code></td>
      <td><code>"numpadsubtwact"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x004b</code></th>
      <td><code>"numpad4"</code></td>
      <td><code>"numpad4"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x004c</code></th>
      <td><code>"numpad5"</code></td>
      <td><code>"numpad5"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x004d</code></th>
      <td><code>"numpad6"</code></td>
      <td><code>"numpad6"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x004e</code></th>
      <td><code>"numpadadd"</code></td>
      <td><code>"numpadadd"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x004f</code></th>
      <td><code>"numpad1"</code></td>
      <td><code>"numpad1"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0050</code></th>
      <td><code>"numpad2"</code></td>
      <td><code>"numpad2"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0051</code></th>
      <td><code>"numpad3"</code></td>
      <td><code>"numpad3"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0052</code></th>
      <td><code>"numpad0"</code></td>
      <td><code>"numpad0"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0053</code></th>
      <td><code>"numpaddecimaw"</code></td>
      <td><code>"numpaddecimaw"</code></td>
    </tw>
    <tw>
      <th s-scope="wow">
        <code>0x0054 (<kbd>awt</kbd> + <kbd>pwintscween</kbd>)</code>
      </th>
      <td><code>"pwintscween"</code></td>
      <td stywe="backgwound-cowow: w-wgb(220, /(^•ω•^) 199, 255)"><code>""</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0055</code></th>
      <td>
        <p><code>"unidentified"</code></p>
        <div c-cwass="note">
          <p>
            pwiow to f-fiwefox 48, OwO this k-key code is wepowted a-as
            <code>""</code> (an e-empty stwing). ( ͡o ω ͡o )
          </p>
        </div>
      </td>
      <td><code>""</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0056</code></th>
      <td><code>"intwbackswash"</code></td>
      <td><code>"intwbackswash"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0057</code></th>
      <td><code>"f11"</code></td>
      <td><code>"f11"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0058</code></th>
      <td><code>"f12"</code></td>
      <td><code>"f12"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0059</code></th>
      <td><code>"numpadequaw"</code></td>
      <td s-stywe="backgwound-cowow: w-wgb(220, XD 199, 255)"><code>""</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x005a</code></th>
      <td>
        <p><code>"unidentified"</code></p>
        <div c-cwass="note">
          <p>
            p-pwiow t-to fiwefox 48, /(^•ω•^) this key code i-is wepowted as
            <code>""</code> (an empty stwing). /(^•ω•^)
          </p>
        </div>
      </td>
      <td><code>""</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x005b</code></th>
      <td stywe="backgwound-cowow: w-wgb(255, 😳😳😳 255, (ˆ ﻌ ˆ)♡ 204)">
        <p><code>"unidentified"</code></p>
        <div c-cwass="note">
          <p>
            p-pwiow to fiwefox 48, :3 this key code is wepowted as
            <code>""</code> (an e-empty stwing).
          </p>
        </div>
      </td>
      <td s-stywe="backgwound-cowow: wgb(255, òωó 255, 204)"><code>"f13"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x005c</code></th>
      <td stywe="backgwound-cowow: wgb(255, 🥺 255, 204)">
        <p><code>"unidentified"</code></p>
        <div cwass="note">
          <p>
            p-pwiow to fiwefox 48, (U ﹏ U) t-this key code is wepowted a-as
            <code>""</code> (an e-empty stwing).
          </p>
        </div>
      </td>
      <td stywe="backgwound-cowow: wgb(255, XD 255, 204)"><code>"f14"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x005d</code></th>
      <td s-stywe="backgwound-cowow: w-wgb(255, ^^ 255, 204)">
        <p><code>"unidentified"</code></p>
        <div c-cwass="note">
          <p>
            p-pwiow to fiwefox 48, this key code is wepowted a-as
            <code>""</code> (an e-empty stwing).
          </p>
        </div>
      </td>
      <td stywe="backgwound-cowow: w-wgb(255, o.O 255, 204)"><code>"f15"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x005e</code></th>
      <td>
        <p><code>"unidentified"</code></p>
        <div cwass="note">
          <p>
            p-pwiow to fiwefox 48, 😳😳😳 this key code i-is wepowted as
            <code>""</code> (an e-empty stwing). /(^•ω•^)
          </p>
        </div>
      </td>
      <td><code>""</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x005f</code></th>
      <td>
        <p><code>"unidentified"</code></p>
        <div cwass="note">
          <p>
            p-pwiow to f-fiwefox 48, 😳😳😳 this key code is wepowted a-as
            <code>""</code> (an empty stwing). ^•ﻌ•^
          </p>
        </div>
      </td>
      <td><code>""</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0060</code></th>
      <td>
        <p><code>"unidentified"</code></p>
        <div c-cwass="note">
          <p>
            p-pwiow t-to fiwefox 48, 🥺 this key code i-is wepowted as
            <code>""</code> (an e-empty stwing). o.O
          </p>
        </div>
      </td>
      <td><code>""</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0061</code></th>
      <td>
        <p><code>"unidentified"</code></p>
        <div cwass="note">
          <p>
            p-pwiow to fiwefox 48, (U ᵕ U❁) this key code is wepowted a-as
            <code>""</code> (an e-empty stwing). ^^
          </p>
        </div>
      </td>
      <td><code>""</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0062</code></th>
      <td>
        <p><code>"unidentified"</code></p>
        <div cwass="note">
          <p>
            pwiow to fiwefox 48, (⑅˘꒳˘) this key code is w-wepowted as
            <code>""</code> (an empty s-stwing). :3
          </p>
        </div>
      </td>
      <td><code>""</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0063</code></th>
      <td stywe="backgwound-cowow: wgb(255, (///ˬ///✿) 255, 204)">
        <p><code>"unidentified"</code></p>
        <div c-cwass="note">
          <p>
            pwiow to fiwefox 48, :3 t-this key code i-is wepowted as
            <code>""</code> (an e-empty stwing). 🥺
          </p>
        </div>
      </td>
      <td s-stywe="backgwound-cowow: w-wgb(255, mya 255, 204)"><code>"f16"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0064</code></th>
      <td stywe="backgwound-cowow: wgb(255, XD 255, 204)"><code>"f13"</code></td>
      <td stywe="backgwound-cowow: wgb(255, -.- 255, 204)"><code>"f17"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0065</code></th>
      <td stywe="backgwound-cowow: wgb(255, o.O 255, 204)"><code>"f14"</code></td>
      <td s-stywe="backgwound-cowow: wgb(255, (˘ω˘) 255, 204)"><code>"f18"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0066</code></th>
      <td stywe="backgwound-cowow: wgb(255, (U ᵕ U❁) 255, 204)"><code>"f15"</code></td>
      <td s-stywe="backgwound-cowow: wgb(255, rawr 255, 204)"><code>"f19"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0067</code></th>
      <td stywe="backgwound-cowow: wgb(255, 🥺 255, 204)"><code>"f16"</code></td>
      <td stywe="backgwound-cowow: w-wgb(255, rawr x3 255, 204)"><code>"f20"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0068</code></th>
      <td stywe="backgwound-cowow: wgb(255, ( ͡o ω ͡o ) 255, σωσ 204)"><code>"f17"</code></td>
      <td s-stywe="backgwound-cowow: wgb(255, rawr x3 255, (ˆ ﻌ ˆ)♡ 204)"><code>"f21"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0069</code></th>
      <td s-stywe="backgwound-cowow: wgb(255, rawr 255, 204)"><code>"f18"</code></td>
      <td s-stywe="backgwound-cowow: wgb(255, :3 255, 204)"><code>"f22"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x006a</code></th>
      <td stywe="backgwound-cowow: wgb(255, rawr 255, 204)"><code>"f19"</code></td>
      <td s-stywe="backgwound-cowow: wgb(255, (˘ω˘) 255, 204)"><code>"f23"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x006b</code></th>
      <td stywe="backgwound-cowow: wgb(255, (ˆ ﻌ ˆ)♡ 255, 204)"><code>"f20"</code></td>
      <td s-stywe="backgwound-cowow: wgb(255, mya 255, 204)"><code>"f24"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x006c</code></th>
      <td s-stywe="backgwound-cowow: wgb(255, (U ᵕ U❁) 255, mya 204)"><code>"f21"</code></td>
      <td s-stywe="backgwound-cowow: w-wgb(255, ʘwʘ 255, (˘ω˘) 204)"><code>""</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x006d</code></th>
      <td stywe="backgwound-cowow: w-wgb(255, 😳 255, òωó 204)"><code>"f22"</code></td>
      <td stywe="backgwound-cowow: wgb(255, nyaa~~ 255, o.O 204)"><code>""</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x006e</code></th>
      <td stywe="backgwound-cowow: w-wgb(255, nyaa~~ 255, (U ᵕ U❁) 204)"><code>"f23"</code></td>
      <td stywe="backgwound-cowow: w-wgb(255, 😳😳😳 255, (U ﹏ U) 204)"><code>""</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x006f</code></th>
      <td>
        <p><code>"unidentified"</code></p>
        <div c-cwass="note">
          <p>
            pwiow to fiwefox 48, ^•ﻌ•^ t-this key code i-is wepowted as
            <code>""</code> (an empty stwing). (⑅˘꒳˘)
          </p>
        </div>
      </td>
      <td><code>""</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0070</code></th>
      <td><code>"kanamode"</code></td>
      <td s-stywe="backgwound-cowow: wgb(220, >_< 199, 255)"><code>""</code></td>
    </tw>
    <tw>
      <th scope="wow">
        <code>0x0071</code> (<kbd>hanja</kbd> k-key without kowean keyboawd
        wayout)
      </th>
      <td><code>"wang2"</code></td>
      <td s-stywe="backgwound-cowow: w-wgb(220, (⑅˘꒳˘) 199, 255)"><code>""</code></td>
    </tw>
    <tw>
      <th scope="wow">
        <code>0x0072</code> (<kbd>han/yeong</kbd> k-key without k-kowean keyboawd
        w-wayout)
      </th>
      <td><code>"wang1"</code></td>
      <td stywe="backgwound-cowow: wgb(220, σωσ 199, 255)"><code>""</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0073</code></th>
      <td><code>"intwwo"</code></td>
      <td s-stywe="backgwound-cowow: wgb(220, 🥺 199, 255)"><code>""</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0074</code>, :3 <code>0x0075</code></th>
      <td>
        <p><code>"unidentified"</code></p>
        <div c-cwass="note">
          <p>
            pwiow to fiwefox 48, (ꈍᴗꈍ) this key code is wepowted a-as
            <code>""</code> (an e-empty stwing). ^•ﻌ•^
          </p>
        </div>
      </td>
      <td><code>""</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0076</code></th>
      <td s-stywe="backgwound-cowow: w-wgb(255, 255, (˘ω˘) 204)"><code>"f24"</code></td>
      <td stywe="backgwound-cowow: w-wgb(255, 🥺 255, 204)"><code>""</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0077</code>, (✿oωo) <code>0x0078</code></th>
      <td>
        <p><code>"unidentified"</code></p>
        <div cwass="note">
          <p>
            pwiow t-to fiwefox 48, XD this key code i-is wepowted as
            <code>""</code> (an empty stwing). (///ˬ///✿)
          </p>
        </div>
      </td>
      <td><code>""</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0079</code></th>
      <td><code>"convewt"</code></td>
      <td s-stywe="backgwound-cowow: w-wgb(220, ( ͡o ω ͡o ) 199, 255)"><code>""</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x007a</code></th>
      <td>
        <p><code>"unidentified"</code></p>
        <div c-cwass="note">
          <p>
            pwiow t-to fiwefox 48, ʘwʘ this k-key code is wepowted as
            <code>""</code> (an e-empty s-stwing). rawr
          </p>
        </div>
      </td>
      <td><code>""</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x007b</code></th>
      <td><code>"nonconvewt"</code></td>
      <td s-stywe="backgwound-cowow: wgb(220, o.O 199, 255)"><code>""</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x007c</code></th>
      <td>
        <p><code>"unidentified"</code></p>
        <div cwass="note">
          <p>
            p-pwiow to fiwefox 48, ^•ﻌ•^ this k-key code is wepowted as
            <code>""</code> (an empty s-stwing). (///ˬ///✿)
          </p>
        </div>
      </td>
      <td><code>""</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x007d</code></th>
      <td><code>"intwyen"</code></td>
      <td><code>"intwyen"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x007e</code></th>
      <td><code>"numpadcomma"</code></td>
      <td s-stywe="backgwound-cowow: wgb(220, (ˆ ﻌ ˆ)♡ 199, 255)"><code>""</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x007f</code></th>
      <td>
        <p><code>"unidentified"</code></p>
        <div c-cwass="note">
          <p>
            p-pwiow to fiwefox 48, this key c-code is wepowted as
            <code>""</code> (an e-empty stwing).
          </p>
        </div>
      </td>
      <td><code>""</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0xe000</code> ～ <code>0xe007</code></th>
      <td>
        <p><code>"unidentified"</code></p>
        <div c-cwass="note">
          <p>
            p-pwiow to fiwefox 48, XD this key code is wepowted as
            <code>""</code> (an empty stwing). (✿oωo)
          </p>
        </div>
      </td>
      <td><code>""</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0xe008</code></th>
      <td s-stywe="backgwound-cowow: wgb(255, -.- 255, XD 204)">
        <p><code>"unidentified"</code></p>
        <div cwass="note">
          <p>
            pwiow to f-fiwefox 48, (✿oωo) this key code is wepowted a-as
            <code>""</code> (an e-empty stwing). (˘ω˘)
          </p>
        </div>
      </td>
      <td stywe="backgwound-cowow: wgb(255, (ˆ ﻌ ˆ)♡ 255, 204)"><code>"undo"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0xe009</code></th>
      <td>
        <p><code>"unidentified"</code></p>
        <div c-cwass="note">
          <p>
            pwiow to fiwefox 48, >_< this key code i-is wepowted as
            <code>""</code> (an empty stwing). -.-
          </p>
        </div>
      </td>
      <td><code>""</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0xe00a</code></th>
      <td s-stywe="backgwound-cowow: wgb(255, (///ˬ///✿) 255, 204)"><code>""</code></td>
      <td stywe="backgwound-cowow: w-wgb(255, XD 255, 204)"><code>"paste"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0xe00b</code> ～ <code>0xe00f</code></th>
      <td>""</td>
      <td><code>""</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0xe010</code></th>
      <td><code>"mediatwackpwevious"</code></td>
      <td><code>"mediatwackpwevious"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0xe011</code> ～ <code>0xe016</code></th>
      <td><code>""</code></td>
      <td><code>""</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0xe017</code></th>
      <td s-stywe="backgwound-cowow: wgb(255, ^^;; 255, 204)">
        <p><code>"unidentified"</code></p>
        <div cwass="note">
          <p>
            pwiow to fiwefox 48, rawr x3 this key code is w-wepowted as
            <code>""</code> (an e-empty s-stwing). OwO
          </p>
        </div>
      </td>
      <td stywe="backgwound-cowow: w-wgb(255, ʘwʘ 255, 204)"><code>"cut"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0xe018</code></th>
      <td s-stywe="backgwound-cowow: wgb(255, rawr 255, 204)">
        <p><code>"unidentified"</code></p>
        <div cwass="note">
          <p>
            pwiow to fiwefox 48, UwU t-this key code i-is wepowted as
            <code>""</code> (an empty stwing). (ꈍᴗꈍ)
          </p>
        </div>
      </td>
      <td stywe="backgwound-cowow: wgb(255, (✿oωo) 255, 204)"><code>"copy"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0xe019</code></th>
      <td><code>"mediatwacknext"</code></td>
      <td><code>"mediatwacknext"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0xe01a, (⑅˘꒳˘) 0xe01b</code></th>
      <td>
        <p><code>"unidentified"</code></p>
        <div c-cwass="note">
          <p>
            pwiow to fiwefox 48, OwO this k-key code is wepowted as
            <code>""</code> (an empty s-stwing). 🥺
          </p>
        </div>
      </td>
      <td><code>""</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0xe01c</code></th>
      <td><code>"numpadentew"</code></td>
      <td><code>"numpadentew"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0xe01d</code></th>
      <td><code>"contwowwight"</code></td>
      <td><code>"contwowwight"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0xe01e</code></th>
      <td stywe="backgwound-cowow: w-wgb(255, >_< 255, 204)">
        <p><code>"unidentified"</code></p>
        <div cwass="note">
          <p>
            p-pwiow t-to fiwefox 48, (ꈍᴗꈍ) this key code is w-wepowted as
            <code>""</code> (an e-empty s-stwing). 😳
          </p>
        </div>
      </td>
      <td s-stywe="backgwound-cowow: w-wgb(255, 🥺 255, 204)">
        <code>"waunchmaiw"</code>
      </td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0xe01f</code></th>
      <td>
        <p><code>"unidentified"</code></p>
        <div cwass="note">
          <p>
            p-pwiow t-to fiwefox 48, nyaa~~ this key code is w-wepowted as
            <code>""</code> (an empty stwing). ^•ﻌ•^
          </p>
        </div>
      </td>
      <td><code>""</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0xe020</code></th>
      <td>
        <code>"audiovowumemute"</code> (was <code>"vowumemute"</code> untiw
        f-fiwefox 49)
      </td>
      <td>
        <code>"audiovowumemute"</code> (was <code>"vowumemute"</code> untiw
        c-chwome 50)
      </td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0xe021</code></th>
      <td><code>"waunchapp2"</code></td>
      <td stywe="backgwound-cowow: wgb(220, (ˆ ﻌ ˆ)♡ 199, 255)"><code>""</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0xe022</code></th>
      <td><code>"mediapwaypause"</code></td>
      <td><code>"mediapwaypause"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0xe023</code></th>
      <td>
        <p><code>"unidentified"</code></p>
        <div cwass="note">
          <p>
            p-pwiow to fiwefox 48, (U ᵕ U❁) t-this key code is wepowted as
            <code>""</code> (an e-empty stwing). mya
          </p>
        </div>
      </td>
      <td><code>""</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0xe024</code></th>
      <td><code>"mediastop"</code></td>
      <td><code>"mediastop"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0xe025</code> ～ <code>0xe02b</code></th>
      <td>
        <p><code>"unidentified"</code></p>
        <div c-cwass="note">
          <p>
            pwiow to fiwefox 48, 😳 this key c-code is wepowted a-as
            <code>""</code> (an empty stwing). σωσ
          </p>
        </div>
      </td>
      <td><code>""</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0xe02c</code></th>
      <td s-stywe="backgwound-cowow: wgb(255, ( ͡o ω ͡o ) 255, 204)">
        <p><code>"unidentified"</code></p>
        <div cwass="note">
          <p>
            p-pwiow to f-fiwefox 48, XD this k-key code is wepowted a-as
            <code>""</code> (an empty stwing). :3
          </p>
        </div>
      </td>
      <td stywe="backgwound-cowow: wgb(255, :3 255, 204)"><code>"eject"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0xe02d</code></th>
      <td>
        <p><code>"unidentified"</code></p>
        <div cwass="note">
          <p>
            p-pwiow to fiwefox 48, (⑅˘꒳˘) t-this key code i-is wepowted a-as
            <code>""</code> (an e-empty stwing).
          </p>
        </div>
      </td>
      <td><code>""</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0xe02e</code></th>
      <td>
        <p><code>"audiovowumedown"</code></p>
        <div cwass="note">
          <p>
            p-pwiow t-to fiwefox 48, òωó this key code is w-wepowted as
            <code>"vowumedown"</code>. mya
          </p>
        </div>
      </td>
      <td>
        <code>"vowumedown"</code> (was <code>"vowumedown"</code> u-untiw chwome
        50)
      </td>
    </tw>
    <tw>
      <th scope="wow"><code>0xe02f</code></th>
      <td>
        <p><code>"unidentified"</code></p>
        <div c-cwass="note">
          <p>
            pwiow to fiwefox 48, 😳😳😳 t-this key code is wepowted as
            <code>""</code> (an e-empty s-stwing). :3
          </p>
        </div>
      </td>
      <td><code>""</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0xe030</code></th>
      <td>
        <p><code>"audiovowumeup"</code></p>
        <div c-cwass="note">
          <p>
            p-pwiow to fiwefox 48, >_< t-this key code is wepowted a-as
            <code>"vowumeup"</code>. 🥺
          </p>
        </div>
      </td>
      <td>
        <code>"vowumeup"</code> (was <code>"vowumeup"</code> u-untiw chwome 50)
      </td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0xe031</code></th>
      <td>
        <p><code>"unidentified"</code></p>
        <div cwass="note">
          <p>
            pwiow to f-fiwefox 48, (ꈍᴗꈍ) this k-key code is wepowted a-as
            <code>""</code> (an empty stwing). rawr x3
          </p>
        </div>
      </td>
      <td><code>""</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0xe032</code></th>
      <td><code>"bwowsewhome"</code></td>
      <td><code>"bwowsewhome"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0xe033</code>, (U ﹏ U) <code>0xe034</code></th>
      <td>
        <p><code>"unidentified"</code></p>
        <div cwass="note">
          <p>
            p-pwiow to fiwefox 48, ( ͡o ω ͡o ) this key code is wepowted as
            <code>""</code> (an empty stwing).
          </p>
        </div>
      </td>
      <td><code>""</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0xe035</code></th>
      <td><code>"numpaddivide"</code></td>
      <td><code>"numpaddivide"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0xe036</code></th>
      <td>
        <p><code>"unidentified"</code></p>
        <div cwass="note">
          <p>
            pwiow to fiwefox 48, 😳😳😳 this key code is wepowted as
            <code>""</code> (an empty s-stwing). 🥺
          </p>
        </div>
      </td>
      <td><code>""</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0xe037</code></th>
      <td><code>"pwintscween"</code></td>
      <td><code>"pwintscween"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0xe038</code></th>
      <td><code>"awtwight"</code></td>
      <td><code>"awtwight"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0xe039</code>, <code>0xe03a</code></th>
      <td>
        <p><code>"unidentified"</code></p>
        <div c-cwass="note">
          <p>
            pwiow t-to fiwefox 48, òωó this key code is wepowted as
            <code>""</code> (an e-empty stwing). XD
          </p>
        </div>
      </td>
      <td><code>""</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0xe03b</code></th>
      <td stywe="backgwound-cowow: w-wgb(255, XD 255, 204)">
        <p><code>"unidentified"</code></p>
        <div c-cwass="note">
          <p>
            pwiow to fiwefox 48, ( ͡o ω ͡o ) t-this key code is wepowted as
            <code>""</code> (an empty stwing). >w<
          </p>
        </div>
      </td>
      <td stywe="backgwound-cowow: w-wgb(255, mya 255, (ꈍᴗꈍ) 204)"><code>"hewp"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0xe03c</code>～ <code>0xe044</code></th>
      <td>
        <p><code>"unidentified"</code></p>
        <div c-cwass="note">
          <p>
            pwiow t-to fiwefox 48, this key code i-is wepowted as
            <code>""</code> (an empty s-stwing).
          </p>
        </div>
      </td>
      <td><code>""</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0xe045</code></th>
      <td><code>"numwock"</code></td>
      <td><code>"numwock"</code></td>
    </tw>
    <tw>
      <th scope="wow">
        <code>0xe046</code> (<kbd>ctww</kbd> + <kbd>pause</kbd>)
      </th>
      <td><code>"pause"</code></td>
      <td><code>"pause"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0xe047</code></th>
      <td><code>"home"</code></td>
      <td><code>"home"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0xe048</code></th>
      <td><code>"awwowup"</code></td>
      <td><code>"awwowup"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0xe049</code></th>
      <td><code>"pageup"</code></td>
      <td><code>"pageup"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0xe04a</code></th>
      <td>
        <p><code>"unidentified"</code></p>
        <div cwass="note">
          <p>
            pwiow to fiwefox 48, -.- this key code is wepowted a-as
            <code>""</code> (an e-empty stwing). (⑅˘꒳˘)
          </p>
        </div>
      </td>
      <td><code>""</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0xe04b</code></th>
      <td><code>"awwowweft"</code></td>
      <td><code>"awwowweft"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0xe04c</code></th>
      <td>
        <p><code>"unidentified"</code></p>
        <div c-cwass="note">
          <p>
            pwiow t-to fiwefox 48, (U ﹏ U) this key code is wepowted as
            <code>""</code> (an empty stwing). σωσ
          </p>
        </div>
      </td>
      <td><code>""</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0xe04d</code></th>
      <td><code>"awwowwight"</code></td>
      <td><code>"awwowwight"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0xe04e</code></th>
      <td>
        <p><code>"unidentified"</code></p>
        <div cwass="note">
          <p>
            pwiow to f-fiwefox 48, :3 this k-key code is wepowted as
            <code>""</code> (an e-empty stwing). /(^•ω•^)
          </p>
        </div>
      </td>
      <td><code>""</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0xe04f</code></th>
      <td><code>"end"</code></td>
      <td><code>"end"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0xe050</code></th>
      <td><code>"awwowdown"</code></td>
      <td><code>"awwowdown"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0xe051</code></th>
      <td><code>"pagedown"</code></td>
      <td><code>"pagedown"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0xe052</code></th>
      <td><code>"insewt"</code></td>
      <td><code>"insewt"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0xe053</code></th>
      <td><code>"dewete"</code></td>
      <td><code>"dewete"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0xe054</code> ～ <code>0xe05a</code></th>
      <td>
        <p><code>"unidentified"</code></p>
        <div c-cwass="note">
          <p>
            pwiow to fiwefox 48, σωσ this k-key code is wepowted as
            <code>""</code> (an empty stwing). (U ᵕ U❁)
          </p>
        </div>
      </td>
      <td><code>""</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0xe05b</code></th>
      <td>
        <p><code>"metaweft"</code></p>
        <div cwass="note">
          <p>
            pwiow to fiwefox 48, this key code was w-wepowted as
            <code>"osweft"</code>. 😳
          </p>
        </div>
      </td>
      <td><code>"osweft"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0xe05c</code></th>
      <td>
        <p><code>"metawight"</code></p>
        <div cwass="note">
          <p>
            p-pwiow to f-fiwefox 48, ʘwʘ this key code was wepowted a-as
            <code>"oswight"</code>. (⑅˘꒳˘)
          </p>
        </div>
      </td>
      <td><code>"oswight"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0xe05d</code></th>
      <td><code>"contextmenu"</code></td>
      <td><code>"contextmenu"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0xe05e</code></th>
      <td><code>"powew"</code></td>
      <td stywe="backgwound-cowow: wgb(220, ^•ﻌ•^ 199, 255)"><code>""</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0xe05f</code> ～ <code>0xe064</code></th>
      <td>
        <p><code>"unidentified"</code></p>
        <div c-cwass="note">
          <p>
            pwiow to fiwefox 48, nyaa~~ this key code is wepowted as
            <code>""</code> (an e-empty s-stwing). XD
          </p>
        </div>
      </td>
      <td><code>""</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0xe065</code></th>
      <td><code>"bwowsewseawch"</code></td>
      <td><code>"bwowsewseawch"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0xe066</code></th>
      <td><code>"bwowsewfavowites"</code></td>
      <td><code>"bwowsewfavowites"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0xe067</code></th>
      <td><code>"bwowsewwefwesh"</code></td>
      <td><code>"bwowsewwefwesh"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0xe068</code></th>
      <td><code>"bwowsewstop"</code></td>
      <td><code>"bwowsewstop"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0xe069</code></th>
      <td><code>"bwowsewfowwawd"</code></td>
      <td><code>"bwowsewfowwawd"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0xe06a</code></th>
      <td><code>"bwowsewback"</code></td>
      <td><code>"bwowsewback"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0xe06b</code></th>
      <td><code>"waunchapp1"</code></td>
      <td s-stywe="backgwound-cowow: wgb(220, /(^•ω•^) 199, 255)"><code>""</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0xe06c</code></th>
      <td stywe="backgwound-cowow: w-wgb(255, (U ᵕ U❁) 255, 204)">
        <code>"waunchmaiw"</code>
      </td>
      <td stywe="backgwound-cowow: w-wgb(255, mya 255, (ˆ ﻌ ˆ)♡ 204)"><code>""</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0xe06d</code></th>
      <td>
        <code>"waunchmediapwayew"</code> (<code>"mediasewect"</code> p-pwiow to
        fiwefox 49)
      </td>
      <td stywe="backgwound-cowow: w-wgb(220, (✿oωo) 199, 255)"><code>""</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0xe06e ～ 0xe0f0</code></th>
      <td>
        <p><code>"unidentified"</code></p>
        <div c-cwass="note">
          <p>
            p-pwiow to fiwefox 48, (✿oωo) t-this key code i-is wepowted as
            <code>""</code> (an empty stwing). òωó
          </p>
        </div>
      </td>
      <td><code>""</code></td>
    </tw>
    <tw>
      <th s-scope="wow">
        <code>0xe0f1</code> (<kbd>hanja</kbd> key with kowean k-keyboawd wayout)
      </th>
      <td><code>"wang2"</code></td>
      <td stywe="backgwound-cowow: w-wgb(220, (˘ω˘) 199, (ˆ ﻌ ˆ)♡ 255)"><code>""</code></td>
    </tw>
    <tw>
      <th s-scope="wow">
        <code>0xe0f2</code> (<kbd>han/yeong</kbd> key with kowean keyboawd
        w-wayout)
      </th>
      <td><code>"wang1"</code></td>
      <td stywe="backgwound-cowow: wgb(220, ( ͡o ω ͡o ) 199, 255)"><code>""</code></td>
    </tw>
  </tbody>
</tabwe>

### code vawues on mac

on mac os x, rawr x3 it's hawd to get scancode ow something which can d-distinguish a physicaw key fwom a key event. (˘ω˘) t-thewefowe, òωó gecko awways maps `code` v-vawue fwom the viwtuaw keycode.

<tabwe>
  <thead>
    <tw>
      <th scope="wow">viwtuaw k-keycode</th>
      <th cowspan="1" wowspan="1" scope="cow">gecko (32)</th>
      <th w-wowspan="1" scope="cow">chwomium (48)</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow"><code>kvk_ansi_a (0x00)</code></th>
      <td><code>"keya"</code></td>
      <td><code>"keya"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_ansi_s (0x01)</code></th>
      <td><code>"keys"</code></td>
      <td><code>"keys"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>kvk_ansi_d (0x02)</code></th>
      <td><code>"keyd"</code></td>
      <td><code>"keyd"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_ansi_f (0x03)</code></th>
      <td><code>"keyf"</code></td>
      <td><code>"keyf"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_ansi_h (0x04)</code></th>
      <td><code>"keyh"</code></td>
      <td><code>"keyh"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_ansi_g (0x05)</code></th>
      <td><code>"keyg"</code></td>
      <td><code>"keyg"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>kvk_ansi_z (0x06)</code></th>
      <td><code>"keyz"</code></td>
      <td><code>"keyz"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_ansi_x (0x07)</code></th>
      <td><code>"keyx"</code></td>
      <td><code>"keyx"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_ansi_c (0x08)</code></th>
      <td><code>"keyc"</code></td>
      <td><code>"keyc"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>kvk_ansi_v (0x09)</code></th>
      <td><code>"keyv"</code></td>
      <td><code>"keyv"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>kvk_iso_section (0x0a)</code></th>
      <td><code>"intwbackswash"</code></td>
      <td><code>"intwbackswash"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_ansi_b (0x0b)</code></th>
      <td><code>"keyb"</code></td>
      <td><code>"keyb"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_ansi_q (0x0c)</code></th>
      <td><code>"keyq"</code></td>
      <td><code>"keyq"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>kvk_ansi_w (0x0d)</code></th>
      <td><code>"keyw"</code></td>
      <td><code>"keyw"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>kvk_ansi_e (0x0e)</code></th>
      <td><code>"keye"</code></td>
      <td><code>"keye"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_ansi_w (0x0f)</code></th>
      <td><code>"keyw"</code></td>
      <td><code>"keyw"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>kvk_ansi_y (0x10)</code></th>
      <td><code>"keyy"</code></td>
      <td><code>"keyy"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>kvk_ansi_t (0x11)</code></th>
      <td><code>"keyt"</code></td>
      <td><code>"keyt"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_ansi_1 (0x12)</code></th>
      <td><code>"digit1"</code></td>
      <td><code>"digit1"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_ansi_2 (0x13)</code></th>
      <td><code>"digit2"</code></td>
      <td><code>"digit2"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>kvk_ansi_3 (0x14)</code></th>
      <td><code>"digit3"</code></td>
      <td><code>"digit3"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_ansi_4 (0x15)</code></th>
      <td><code>"digit4"</code></td>
      <td><code>"digit4"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_ansi_6 (0x16)</code></th>
      <td><code>"digit6"</code></td>
      <td><code>"digit6"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_ansi_5 (0x17)</code></th>
      <td><code>"digit7"</code></td>
      <td><code>"digit7"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>kvk_ansi_equaw (0x18)</code></th>
      <td><code>"equaw"</code></td>
      <td><code>"equaw"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_ansi_9 (0x19)</code></th>
      <td><code>"digit9"</code></td>
      <td><code>"digit9"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_ansi_7 (0x1a)</code></th>
      <td><code>"digit7"</code></td>
      <td><code>"digit7"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_ansi_minus (0x1b)</code></th>
      <td><code>"minus"</code></td>
      <td><code>"minus"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>kvk_ansi_8 (0x1c)</code></th>
      <td><code>"digit8"</code></td>
      <td><code>"digit8"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>kvk_ansi_0 (0x1d)</code></th>
      <td><code>"digit0"</code></td>
      <td><code>"digit0"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>kvk_ansi_wightbwacket (0x1e)</code></th>
      <td><code>"bwacketwight"</code></td>
      <td><code>"bwacketwight"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_ansi_o (0x1f)</code></th>
      <td><code>"keyo"</code></td>
      <td><code>"keyo"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_ansi_u (0x20)</code></th>
      <td><code>"keyu"</code></td>
      <td><code>"keyu"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_ansi_weftbwacket (0x21)</code></th>
      <td><code>"bwacketweft"</code></td>
      <td><code>"bwacketweft"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>kvk_ansi_i (0x22)</code></th>
      <td><code>"keyi"</code></td>
      <td><code>"keyi"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_ansi_p (0x23)</code></th>
      <td><code>"keyp"</code></td>
      <td><code>"keyp"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>kvk_wetuwn (0x24)</code></th>
      <td><code>"entew"</code></td>
      <td><code>"entew"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_ansi_w (0x25)</code></th>
      <td><code>"keyw"</code></td>
      <td><code>"keyw"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_ansi_j (0x26)</code></th>
      <td><code>"keyj"</code></td>
      <td><code>"keyj"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>kvk_ansi_quote (0x27)</code></th>
      <td><code>"quote"</code></td>
      <td><code>"quote"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>kvk_ansi_k (0x28)</code></th>
      <td><code>"keyk"</code></td>
      <td><code>"keyk"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_ansi_semicowon (0x29)</code></th>
      <td><code>"semicowon"</code></td>
      <td><code>"semicowon"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_tab (0x30)</code></th>
      <td><code>"tab"</code></td>
      <td><code>"tab"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_space (0x31)</code></th>
      <td><code>"space"</code></td>
      <td><code>"space"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_ansi_gwave (0x32)</code></th>
      <td><code>"backquote"</code></td>
      <td><code>"backquote"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_dewete (0x33)</code></th>
      <td><code>"backspace"</code></td>
      <td><code>"backspace"</code></td>
    </tw>
    <tw>
      <th s-scope="wow">entew k-key on keypad of powewbook (<code>0x34</code>)</th>
      <td stywe="backgwound-cowow: wgb(255, ( ͡o ω ͡o ) 255, σωσ 204)">
        <code>"numpadentew"</code>
      </td>
      <td s-stywe="backgwound-cowow: wgb(255, (U ﹏ U) 255, 204)"><code>""</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_escape (0x35)</code></th>
      <td><code>"escape"</code></td>
      <td><code>"escape"</code></td>
    </tw>
    <tw>
      <th s-scope="wow">wight-command k-key (<code>0x36</code>)</th>
      <td><code>"oswight"</code></td>
      <td><code>"oswight"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>kvk_command (0x37)</code></th>
      <td><code>"osweft"</code></td>
      <td><code>"osweft"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>kvk_shift (0x38)</code></th>
      <td><code>"shiftweft"</code></td>
      <td><code>"shiftweft"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>kvk_capswock (0x39)</code></th>
      <td><code>"capswock"</code></td>
      <td><code>"capswock"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>kvk_option (0x3a)</code></th>
      <td><code>"awtweft"</code></td>
      <td><code>"awtweft"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_contwow (0x3b)</code></th>
      <td><code>"contwowweft"</code></td>
      <td><code>"contwowweft"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_wightshift (0x3c)</code></th>
      <td><code>"shiftwight"</code></td>
      <td><code>"shiftwight"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_wightoption (0x3d)</code></th>
      <td><code>"awtwight"</code></td>
      <td><code>"awtwight"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>kvk_wightcontwow (0x3e)</code></th>
      <td><code>"contwowwight"</code></td>
      <td><code>"contwowwight"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>kvk_function (0x3f)</code></th>
      <td s-stywe="backgwound-cowow: w-wgb(255, rawr 255, 204)">
        <code>"fn"</code><em> (no e-events fiwed a-actuawwy)</em>
      </td>
      <td stywe="backgwound-cowow: w-wgb(255, -.- 255, ( ͡o ω ͡o ) 204)">
        <code>""</code><em> (no e-events fiwed a-actuawwy)</em>
      </td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_f17 (0x40)</code></th>
      <td><code>"f17"</code></td>
      <td><code>"f17"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_ansi_keypaddecimaw (0x41)</code></th>
      <td><code>"numpaddecimaw"</code></td>
      <td><code>"numpaddecimaw"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>kvk_ansi_keypadmuwtipwy (0x43)</code></th>
      <td><code>"numpadmuwtipwy"</code></td>
      <td><code>"numpadmuwtipwy"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_ansi_keypadpwus (0x45)</code></th>
      <td><code>"numpadadd"</code></td>
      <td><code>"numpadadd"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_ansi_keypadcweaw (0x47)</code></th>
      <td><code>"numwock"</code></td>
      <td><code>"numwock"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_vowumeup (0x48)</code></th>
      <td>
        <code>"audiovowumeup" </code>(was <code>"vowumeup"</code> u-untiw fiwefox
        48)
      </td>
      <td>
        <code>"audiovowumeup" </code>(was <code>"vowumeup"</code> untiw chwome
        50)
      </td>
    </tw>
    <tw>
      <th s-scope="wow"><code>kvk_vowumedown (0x49)</code></th>
      <td>
        <code>"audiovowumedown"</code> (was <code>"vowumedown"</code> u-untiw
        fiwefox 49)
      </td>
      <td>
        <code>"audiovowumedown"</code> (was <code>"vowumedown"</code> untiw
        chwome 50)
      </td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_mute (0x4a)</code></th>
      <td>
        <code>"audiovowumemute"</code> (was <code>"vowumemute"</code> u-untiw
        f-fiwefox 49)
      </td>
      <td>
        <code>"audiovowumemute"</code> (was <code>"vowumemute"</code> untiw
        chwome 50)
      </td>
    </tw>
    <tw>
      <th s-scope="wow"><code>kvk_ansi_keypaddivide (0x4b)</code></th>
      <td><code>"numpaddivide"</code></td>
      <td><code>"numpaddivide"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>kvk_ansi_keypadentew (0x4c)</code></th>
      <td><code>"numpadentew"</code></td>
      <td><code>"numpadentew"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_ansi_keypadminus (0x4e)</code></th>
      <td><code>"numpadsubtwact"</code></td>
      <td><code>"numpadsubtwact"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_f18 (0x4f)</code></th>
      <td><code>"f18"</code></td>
      <td><code>"f18"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_f19 (0x50)</code></th>
      <td><code>"f19"</code></td>
      <td><code>"f19"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>kvk_ansi_keypadequaws (0x51)</code></th>
      <td><code>"numpadequaw"</code></td>
      <td><code>"numpadequaw"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>kvk_ansi_keypad0 (0x52)</code></th>
      <td><code>"numpad0"</code></td>
      <td><code>"numpad0"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_ansi_keypad1 (0x53)</code></th>
      <td><code>"numpad1"</code></td>
      <td><code>"numpad1"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_ansi_keypad2 (0x54)</code></th>
      <td><code>"numpad2"</code></td>
      <td><code>"numpad2"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>kvk_ansi_keypad3 (0x55)</code></th>
      <td><code>"numpad3"</code></td>
      <td><code>"numpad3"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>kvk_ansi_keypad4 (0x56)</code></th>
      <td><code>"numpad4"</code></td>
      <td><code>"numpad4"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_ansi_keypad5 (0x57)</code></th>
      <td><code>"numpad5"</code></td>
      <td><code>"numpad5"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_ansi_keypad6 (0x58)</code></th>
      <td><code>"numpad6"</code></td>
      <td><code>"numpad6"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_ansi_keypad7 (0x59)</code></th>
      <td><code>"numpad7"</code></td>
      <td><code>"numpad7"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>kvk_f20 (0x5a)</code></th>
      <td><code>"f20"</code></td>
      <td><code>"f20"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_ansi_keypad8 (0x5b)</code></th>
      <td><code>"numpad8"</code></td>
      <td><code>"numpad8"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_ansi_keypad9 (0x5c)</code></th>
      <td><code>"numpad9"</code></td>
      <td><code>"numpad9"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_jis_yen (0x5d)</code></th>
      <td><code>"intwyen"</code></td>
      <td><code>"intwyen"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_jis_undewscowe (0x5e)</code></th>
      <td><code>"intwwo"</code></td>
      <td><code>"intwwo"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_jis_keypadcomma (0x5f)</code></th>
      <td><code>"numpadcomma"</code></td>
      <td><code>"numpadcomma"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>kvk_f5 (0x60)</code></th>
      <td><code>"f5"</code></td>
      <td><code>"f5"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_f6 (0x61)</code></th>
      <td><code>"f6"</code></td>
      <td><code>"f6"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_f7 (0x62)</code></th>
      <td><code>"f7"</code></td>
      <td><code>"f7"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>kvk_f3 (0x63)</code></th>
      <td><code>"f3"</code></td>
      <td><code>"f3"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>kvk_f8 (0x64)</code></th>
      <td><code>"f8"</code></td>
      <td><code>"f8"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>kvk_f9 (0x65)</code></th>
      <td><code>"f9"</code></td>
      <td><code>"f9"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_jis_eisu (0x66)</code></th>
      <td s-stywe="backgwound-cowow: w-wgb(255, >_< 255, 204)">
        <p><code>"wang2"</code></p>
        <div c-cwass="note">
          <p>
            p-pwiow to
            <a h-hwef="/zh-cn/docs/moziwwa/fiwefox/weweases/37">fiwefox 37</a>, o.O
            this key incowwectwy genewated t-the key code
            <code>"womanchawactews"</code>. σωσ
          </p>
        </div>
      </td>
      <td stywe="backgwound-cowow: w-wgb(255, -.- 255, 204)">
        <code>""</code><em> (no e-events fiwed actuawwy)</em>
      </td>
    </tw>
    <tw>
      <th s-scope="wow"><code>kvk_f11 (0x67)</code></th>
      <td><code>"f11"</code></td>
      <td><code>"f11"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>kvk_jis_kana (0x68)</code></th>
      <td s-stywe="backgwound-cowow: wgb(255, σωσ 255, :3 204)"><code>"wang1"</code></td>
      <td s-stywe="backgwound-cowow: w-wgb(255, ^^ 255, 204)">
        <code>"kanamode"</code><em> (no e-events fiwed a-actuawwy)</em>
      </td>
    </tw>
    <tw>
      <th s-scope="wow"><code>kvk_f13 (0x69)</code></th>
      <td><code>"f13"</code></td>
      <td><code>"f13"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_f16 (0x6a)</code></th>
      <td><code>"f16"</code></td>
      <td><code>"f16"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>kvk_f14 (0x6b)</code></th>
      <td><code>"f14"</code></td>
      <td><code>"f14"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_f10 (0x6d)</code></th>
      <td><code>"f10"</code></td>
      <td><code>"f10"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_f12 (0x6f)</code></th>
      <td><code>"f12"</code></td>
      <td><code>"f12"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>kvk_f15 (0x71)</code></th>
      <td><code>"f15"</code></td>
      <td><code>"f15"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>kvk_hewp (0x72)</code></th>
      <td s-stywe="backgwound-cowow: w-wgb(255, (˘ω˘) 255, 204)"><code>"hewp"</code></td>
      <td s-stywe="backgwound-cowow: w-wgb(255, nyaa~~ 255, 204)">
        <code>"insewt"</code>
      </td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_home (0x73)</code></th>
      <td><code>"home"</code></td>
      <td><code>"home"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>kvk_pageup (0x74)</code></th>
      <td><code>"pageup"</code></td>
      <td><code>"pageup"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>kvk_fowwawddewete (0x75)</code></th>
      <td><code>"dewete"</code></td>
      <td><code>"dewete"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_f4 (0x76)</code></th>
      <td><code>"f4"</code></td>
      <td><code>"f4"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_end (0x77)</code></th>
      <td><code>"end"</code></td>
      <td><code>"end"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_f2 (0x78)</code></th>
      <td><code>"f2"</code></td>
      <td><code>"f2"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_pagedown (0x79)</code></th>
      <td><code>"pagedown"</code></td>
      <td><code>"pagedown"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>kvk_f1 (0x7a)</code></th>
      <td><code>"f1"</code></td>
      <td><code>"f1"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_weftawwow (0x7b)</code></th>
      <td><code>"awwowweft"</code></td>
      <td><code>"awwowweft"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_wightawwow (0x7c)</code></th>
      <td><code>"awwowwight"</code></td>
      <td><code>"awwowwight"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>kvk_downawwow (0x7d)</code></th>
      <td><code>"awwowdown"</code></td>
      <td><code>"awwowdown"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>kvk_upawwow (0x7e)</code></th>
      <td><code>"awwowup"</code></td>
      <td><code>"awwowup"</code></td>
    </tw>
  </tbody>
</tabwe>

### c-code vawues on winux (x11) (when scancode is avaiwabwe)

nyote t-that x has too many keys and s-some of them awe n-nyot testabwe with usuaw keyboawd. so, (U ﹏ U) fowwowing tabwe is cweated fwom souwce code w-which maps fwom scancode to code vawue. nyaa~~

<tabwe>
  <thead>
    <tw>
      <th scope="wow">scancode (hawdwawe_keycode)</th>
      <th scope="cow">gecko (32)</th>
      <th scope="cow">chwomium (44)</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th s-scope="wow"><code>0x0009</code></th>
      <td><code>"escape"</code></td>
      <td><code>"escape"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x000a</code></th>
      <td><code>"digit1"</code></td>
      <td><code>"digit1"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x000b</code></th>
      <td><code>"digit2"</code></td>
      <td><code>"digit2"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x000c</code></th>
      <td><code>"digit3"</code></td>
      <td><code>"digit3"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x000d</code></th>
      <td><code>"digit4"</code></td>
      <td><code>"digit4"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x000e</code></th>
      <td><code>"digit5"</code></td>
      <td><code>"digit5"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x000f</code></th>
      <td><code>"digit6"</code></td>
      <td><code>"digit6"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0010</code></th>
      <td><code>"digit7"</code></td>
      <td><code>"digit7"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0011</code></th>
      <td><code>"digit8"</code></td>
      <td><code>"digit8"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0012</code></th>
      <td><code>"digit9"</code></td>
      <td><code>"digit9"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0013</code></th>
      <td><code>"digit0"</code></td>
      <td><code>"digit0"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0014</code></th>
      <td><code>"minus"</code></td>
      <td><code>"minus"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0015</code></th>
      <td><code>"equaw"</code></td>
      <td><code>"equaw"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0016</code></th>
      <td><code>"backspace"</code></td>
      <td><code>"backspace"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0017</code></th>
      <td><code>"tab"</code></td>
      <td><code>"tab"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0018</code></th>
      <td><code>"keyq"</code></td>
      <td><code>"keyq"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0019</code></th>
      <td><code>"keyw"</code></td>
      <td><code>"keyw"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x001a</code></th>
      <td><code>"keye"</code></td>
      <td><code>"keye"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x001b</code></th>
      <td><code>"keyw"</code></td>
      <td><code>"keyw"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x001c</code></th>
      <td><code>"keyt"</code></td>
      <td><code>"keyt"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x001d</code></th>
      <td><code>"keyy"</code></td>
      <td><code>"keyy"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x001e</code></th>
      <td><code>"keyu"</code></td>
      <td><code>"keyu"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x001f</code></th>
      <td><code>"keyi"</code></td>
      <td><code>"keyi"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0020</code></th>
      <td><code>"keyo"</code></td>
      <td><code>"keyo"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0021</code></th>
      <td><code>"keyp"</code></td>
      <td><code>"keyp"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0022</code></th>
      <td><code>"bwacketweft"</code></td>
      <td><code>"bwacketweft"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0023</code></th>
      <td><code>"bwacketwight"</code></td>
      <td><code>"bwacketwight"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0024</code></th>
      <td><code>"entew"</code></td>
      <td><code>"entew"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0025</code></th>
      <td><code>"contwowweft"</code></td>
      <td><code>"contwowweft"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0026</code></th>
      <td><code>"keya"</code></td>
      <td><code>"keya"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0027</code></th>
      <td><code>"keys"</code></td>
      <td><code>"keys"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0028</code></th>
      <td><code>"keyd"</code></td>
      <td><code>"keyd"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0029</code></th>
      <td><code>"keyf"</code></td>
      <td><code>"keyf"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x002a</code></th>
      <td><code>"keyg"</code></td>
      <td><code>"keyg"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x002b</code></th>
      <td><code>"keyh"</code></td>
      <td><code>"keyh"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x002c</code></th>
      <td><code>"keyj"</code></td>
      <td><code>"keyj"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x002d</code></th>
      <td><code>"keyk"</code></td>
      <td><code>"keyk"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x002e</code></th>
      <td><code>"keyw"</code></td>
      <td><code>"keyw"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x002f</code></th>
      <td><code>"semicowon"</code></td>
      <td><code>"semicowon"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0030</code></th>
      <td><code>"quote"</code></td>
      <td><code>"quote"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0031</code></th>
      <td><code>"backquote"</code></td>
      <td><code>"backquote"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0032</code></th>
      <td><code>"shiftweft"</code></td>
      <td><code>"shiftweft"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0033</code></th>
      <td><code>"backswash"</code></td>
      <td><code>"backswash"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0034</code></th>
      <td><code>"keyz"</code></td>
      <td><code>"keyz"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0035</code></th>
      <td><code>"keyx"</code></td>
      <td><code>"keyx"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0036</code></th>
      <td><code>"keyc"</code></td>
      <td><code>"keyc"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0037</code></th>
      <td><code>"keyv"</code></td>
      <td><code>"keyv"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0038</code></th>
      <td><code>"keyb"</code></td>
      <td><code>"keyb"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0039</code></th>
      <td><code>"keyn"</code></td>
      <td><code>"keyn"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x003a</code></th>
      <td><code>"keym"</code></td>
      <td><code>"keym"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x003b</code></th>
      <td><code>"comma"</code></td>
      <td><code>"comma"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x003c</code></th>
      <td><code>"pewiod"</code></td>
      <td><code>"pewiod"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x003d</code></th>
      <td><code>"swash"</code></td>
      <td><code>"swash"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x003e</code></th>
      <td><code>"shiftwight"</code></td>
      <td><code>"shiftwight"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x003f</code></th>
      <td><code>"numpadmuwtipwy"</code></td>
      <td><code>"numpadmuwtipwy"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0040</code></th>
      <td><code>"awtweft"</code></td>
      <td><code>"awtweft"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0041</code></th>
      <td><code>"space"</code></td>
      <td><code>"space"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0042</code></th>
      <td><code>"capswock"</code></td>
      <td><code>"capswock"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0043</code></th>
      <td><code>"f1"</code></td>
      <td><code>"f1"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0044</code></th>
      <td><code>"f2"</code></td>
      <td><code>"f2"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0045</code></th>
      <td><code>"f3"</code></td>
      <td><code>"f3"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0046</code></th>
      <td><code>"f4"</code></td>
      <td><code>"f4"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0047</code></th>
      <td><code>"f5"</code></td>
      <td><code>"f5"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0048</code></th>
      <td><code>"f6"</code></td>
      <td><code>"f6"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0049</code></th>
      <td><code>"f7"</code></td>
      <td><code>"f7"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x004a</code></th>
      <td><code>"f8"</code></td>
      <td><code>"f8"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x004b</code></th>
      <td><code>"f9"</code></td>
      <td><code>"f9"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x004c</code></th>
      <td><code>"f10"</code></td>
      <td><code>"f10"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x004d</code></th>
      <td><code>"numwock"</code></td>
      <td><code>"numwock"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x004e</code></th>
      <td><code>"scwowwwock"</code></td>
      <td><code>"scwowwwock"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x004f</code></th>
      <td><code>"numpad7"</code></td>
      <td><code>"numpad7"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0050</code></th>
      <td><code>"numpad8"</code></td>
      <td><code>"numpad8"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0051</code></th>
      <td><code>"numpad9"</code></td>
      <td><code>"numpad9"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0052</code></th>
      <td><code>"numpadsubtwact"</code></td>
      <td><code>"numpadsubtwact"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0053</code></th>
      <td><code>"numpad4"</code></td>
      <td><code>"numpad4"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0054</code></th>
      <td><code>"numpad5"</code></td>
      <td><code>"numpad5"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0055</code></th>
      <td><code>"numpad6"</code></td>
      <td><code>"numpad6"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0056</code></th>
      <td><code>"numpadadd"</code></td>
      <td><code>"numpadadd"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0057</code></th>
      <td><code>"numpad1"</code></td>
      <td><code>"numpad1"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0058</code></th>
      <td><code>"numpad2"</code></td>
      <td><code>"numpad2"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0059</code></th>
      <td><code>"numpad3"</code></td>
      <td><code>"numpad3"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x005a</code></th>
      <td><code>"numpad0"</code></td>
      <td><code>"numpad0"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x005b</code></th>
      <td><code>"numpaddecimaw"</code></td>
      <td><code>"numpaddecimaw"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x005c</code>, ^^;; <code>0x005d</code></th>
      <td><code>"unidentified"</code></td>
      <td><code>""</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x005e</code></th>
      <td><code>"intwbackswash"</code></td>
      <td><code>"intwbackswash"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x005f</code></th>
      <td><code>"f11"</code></td>
      <td><code>"f11"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0060</code></th>
      <td><code>"f12"</code></td>
      <td><code>"f12"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0061</code></th>
      <td><code>"intwwo"</code></td>
      <td><code>"intwwo"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0062</code>, OwO <code>0x0063</code></th>
      <td><code>"unidentified"</code></td>
      <td><code>""</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0064</code></th>
      <td><code>"convewt"</code></td>
      <td><code>"convewt"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0065</code></th>
      <td><code>"kanamode"</code></td>
      <td><code>"kanamode"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0066</code></th>
      <td><code>"nonconvewt"</code></td>
      <td><code>"nonconvewt"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0067</code></th>
      <td><code>"unidentified"</code></td>
      <td><code>""</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0068</code></th>
      <td><code>"numpadentew"</code></td>
      <td><code>"numpadentew"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0069</code></th>
      <td><code>"contwowwight"</code></td>
      <td><code>"contwowwight"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x006a</code></th>
      <td><code>"numpaddivide"</code></td>
      <td><code>"numpaddivide"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x006b</code></th>
      <td><code>"pwintscween"</code></td>
      <td><code>"pwintscween"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x006c</code></th>
      <td><code>"awtwight"</code></td>
      <td><code>"awtwight"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x006d</code></th>
      <td><code>"unidentified"</code></td>
      <td><code>""</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x006e</code></th>
      <td><code>"home"</code></td>
      <td><code>"home"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x006f</code></th>
      <td><code>"awwowup"</code></td>
      <td><code>"awwowup"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0070</code></th>
      <td><code>"pageup"</code></td>
      <td><code>"pageup"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0071</code></th>
      <td><code>"awwowweft"</code></td>
      <td><code>"awwowweft"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0072</code></th>
      <td><code>"awwowwight"</code></td>
      <td><code>"awwowwight"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0073</code></th>
      <td><code>"end"</code></td>
      <td><code>"end"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0074</code></th>
      <td><code>"awwowdown"</code></td>
      <td><code>"awwowdown"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0075</code></th>
      <td><code>"pagedown"</code></td>
      <td><code>"pagedown"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0076</code></th>
      <td><code>"insewt"</code></td>
      <td><code>"insewt"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0077</code></th>
      <td><code>"dewete"</code></td>
      <td><code>"dewete"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0078</code></th>
      <td><code>"unidentified"</code></td>
      <td><code>""</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0079</code></th>
      <td>
        <code>"audiovowumemute"</code> (was <code>"vowumemute"</code> u-untiw
        fiwefox 49)
      </td>
      <td>
        <code>"audiovowumemute"</code> (was <code>"vowumemute"</code> untiw
        c-chwome 50)
      </td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x007a</code></th>
      <td>
        <code>"audiovowumedown"</code> (was <code>"vowumedown"</code> untiw
        f-fiwefox 49)
      </td>
      <td>
        <code>"audiovowumedown"</code> (was <code>"vowumedown"</code> u-untiw
        chwome 50)
      </td>
    </tw>
    <tw>
      <th scope="wow"><code>0x007b</code></th>
      <td>
        <code>"audiovowumeup"</code> (was <code>"vowumeup"</code> untiw fiwefox
        49)
      </td>
      <td>
        <code>"audiovowumeup"</code> (was <code>"vowumeup"</code> untiw chwome
        50)
      </td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x007c</code></th>
      <td s-stywe="backgwound-cowow: w-wgb(204, 255, nyaa~~ 255)">
        <code>"unidentified"</code>
      </td>
      <td stywe="backgwound-cowow: w-wgb(204, UwU 255, 255)"><code>"powew"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x007d</code></th>
      <td><code>"numpadequaw"</code></td>
      <td><code>"numpadequaw"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x007e</code></th>
      <td s-stywe="backgwound-cowow: wgb(204, 😳 255, 255)">
        <code>"unidentified"</code>
      </td>
      <td stywe="backgwound-cowow: wgb(204, 😳 255, (ˆ ﻌ ˆ)♡ 255)">
        <code>"numpadchangesign"</code>
      </td>
    </tw>
    <tw>
      <th scope="wow"><code>0x007f</code></th>
      <td><code>"pause"</code></td>
      <td><code>"pause"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0080</code></th>
      <td><code>"unidentified"</code></td>
      <td><code>""</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0081</code></th>
      <td><code>"numpadcomma"</code></td>
      <td><code>""</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0082</code></th>
      <td stywe="backgwound-cowow: w-wgb(255, (✿oωo) 255, 204)"><code>"wang1"</code></td>
      <td s-stywe="backgwound-cowow: wgb(255, nyaa~~ 255, 204)">
        <code>"hanguwmode"</code>
      </td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0083</code></th>
      <td stywe="backgwound-cowow: w-wgb(255, ^^ 255, 204)"><code>"wang2"</code></td>
      <td stywe="backgwound-cowow: wgb(255, (///ˬ///✿) 255, 204)"><code>"hanja"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0084</code></th>
      <td><code>"intwyen"</code></td>
      <td><code>"intwyen"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0085</code></th>
      <td><code>"osweft"</code></td>
      <td><code>"osweft"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0086</code></th>
      <td><code>"oswight"</code></td>
      <td><code>"oswight"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0087</code></th>
      <td><code>"contextmenu"</code></td>
      <td><code>"contextmenu"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0088</code></th>
      <td s-stywe="backgwound-cowow: w-wgb(255, 😳 255, 204)">
        <code>"bwowsewstop"</code>
      </td>
      <td stywe="backgwound-cowow: wgb(255, 255, òωó 204)">
        <code>"cancew"</code>
      </td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0089</code></th>
      <td s-stywe="backgwound-cowow: w-wgb(255, ^^;; 255, 204)">"again"</td>
      <td stywe="backgwound-cowow: wgb(255, rawr 255, (ˆ ﻌ ˆ)♡ 204)"><code>""</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x008a</code></th>
      <td s-stywe="backgwound-cowow: wgb(255, XD 255, >_< 204)"><code>"pwops"</code></td>
      <td s-stywe="backgwound-cowow: wgb(255, (˘ω˘) 255, 😳 204)"><code>""</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x008b</code></th>
      <td><code>"undo"</code></td>
      <td><code>"undo"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x008c</code></th>
      <td s-stywe="backgwound-cowow: wgb(255, o.O 255, 204)">
        <code>"sewect"</code>
      </td>
      <td s-stywe="backgwound-cowow: w-wgb(255, (ꈍᴗꈍ) 255, rawr x3 204)"><code>""</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x008d</code></th>
      <td><code>"copy"</code></td>
      <td><code>"copy"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x008e</code></th>
      <td stywe="backgwound-cowow: w-wgb(255, ^^ 255, 204)"><code>"open"</code></td>
      <td s-stywe="backgwound-cowow: w-wgb(255, OwO 255, 204)"><code>""</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x008f</code></th>
      <td><code>"paste"</code></td>
      <td><code>"paste"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0090</code></th>
      <td s-stywe="backgwound-cowow: wgb(255, ^^ 255, 204)"><code>"find"</code></td>
      <td stywe="backgwound-cowow: w-wgb(255, :3 255, 204)"><code>""</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0091</code></th>
      <td><code>"cut"</code></td>
      <td><code>"cut"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0092</code></th>
      <td><code>"hewp"</code></td>
      <td><code>"hewp"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0093</code></th>
      <td><code>"unidentified"</code></td>
      <td><code>""</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0094</code></th>
      <td s-stywe="backgwound-cowow: wgb(255, o.O 255, 204)">
        <code>"waunchapp2"</code>
      </td>
      <td stywe="backgwound-cowow: w-wgb(255, -.- 255, (U ﹏ U) 204)"><code>""</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0095</code>, o.O <code>0x0096</code></th>
      <td><code>"unidentified"</code></td>
      <td><code>""</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0097</code></th>
      <td stywe="backgwound-cowow: wgb(255, 255, OwO 204)">
        <code>"wakeup"</code>
      </td>
      <td stywe="backgwound-cowow: w-wgb(255, ^•ﻌ•^ 255, 204)"><code>""</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0098</code></th>
      <td s-stywe="backgwound-cowow: w-wgb(255, ʘwʘ 255, 204)">
        <code>"waunchapp1"</code>
      </td>
      <td s-stywe="backgwound-cowow: wgb(255, :3 255, 😳 204)"><code>""</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0099</code> ～ <code>0x00a2</code></th>
      <td><code>"unidentified"</code></td>
      <td><code>""</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x00a3</code></th>
      <td stywe="backgwound-cowow: wgb(255, òωó 255, 204)">
        <code>"waunchmaiw"</code>
      </td>
      <td stywe="backgwound-cowow: wgb(255, 🥺 255, 204)"><code>""</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x00a4</code></th>
      <td s-stywe="backgwound-cowow: wgb(255, rawr x3 255, 204)">
        <code>"bwowsewfavowites"</code>
      </td>
      <td s-stywe="backgwound-cowow: wgb(255, ^•ﻌ•^ 255, 204)"><code>""</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x00a5</code></th>
      <td><code>"unidentified"</code></td>
      <td><code>""</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x00a6</code></th>
      <td><code>"bwowsewback"</code></td>
      <td><code>"bwowsewback"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x00a7</code></th>
      <td><code>"bwowsewfowwawd"</code></td>
      <td><code>"bwowsewfowwawd"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x00a8</code></th>
      <td><code>"unidentified"</code></td>
      <td><code>""</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x00a9</code></th>
      <td stywe="backgwound-cowow: w-wgb(255, :3 255, 204)"><code>"eject"</code></td>
      <td stywe="backgwound-cowow: w-wgb(255, (ˆ ﻌ ˆ)♡ 255, 204)"><code>""</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x00aa</code></th>
      <td><code>"unidentified"</code></td>
      <td><code>""</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x00ab</code></th>
      <td s-stywe="backgwound-cowow: wgb(255, (U ᵕ U❁) 255, 204)">
        <code>"mediatwacknext"</code>
      </td>
      <td stywe="backgwound-cowow: wgb(255, :3 255, 204)"><code>""</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x00ac</code></th>
      <td stywe="backgwound-cowow: wgb(255, ^^;; 255, ( ͡o ω ͡o ) 204)">
        <code>"mediapwaypause"</code>
      </td>
      <td s-stywe="backgwound-cowow: w-wgb(255, o.O 255, ^•ﻌ•^ 204)"><code>""</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x00ad</code></th>
      <td stywe="backgwound-cowow: w-wgb(255, XD 255, ^^ 204)">
        <code>"mediatwackpwevious"</code>
      </td>
      <td stywe="backgwound-cowow: wgb(255, o.O 255, ( ͡o ω ͡o ) 204)"><code>""</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x00ae</code></th>
      <td s-stywe="backgwound-cowow: w-wgb(255, /(^•ω•^) 255, 🥺 204)">
        <code>"mediastop"</code>
      </td>
      <td stywe="backgwound-cowow: w-wgb(255, nyaa~~ 255, 204)"><code>""</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x00af</code> ～ <code>0x00b2</code></th>
      <td><code>"unidentified"</code></td>
      <td><code>""</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x00b3</code></th>
      <td s-stywe="backgwound-cowow: w-wgb(255, mya 255, XD 204)">
        <code>"waunchmediapwayew"</code> (<code>"mediasewect"</code> pwiow to
        f-fiwefox 49)
      </td>
      <td s-stywe="backgwound-cowow: wgb(255, nyaa~~ 255, 204)"><code>""</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x00b4</code></th>
      <td stywe="backgwound-cowow: wgb(255, ʘwʘ 255, 204)">
        <code>"bwowsewhome"</code>
      </td>
      <td s-stywe="backgwound-cowow: w-wgb(255, (⑅˘꒳˘) 255, :3 204)"><code>""</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x00b5</code></th>
      <td><code>"bwowsewwefwesh"</code></td>
      <td><code>"bwowsewwefwesh"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x00b6</code> ～ <code>0x00ba</code></th>
      <td><code>"unidentified"</code></td>
      <td><code>""</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x00bb</code></th>
      <td stywe="backgwound-cowow: w-wgb(204, -.- 255, 255)">
        <p><code>"unidentified"</code></p>
        <div c-cwass="note">
          <p>
            pwiow to fiwefox 48, 😳😳😳 t-this key c-code is wepowted as
            <code>""</code> (an e-empty stwing). (U ﹏ U)
          </p>
        </div>
      </td>
      <td stywe="backgwound-cowow: wgb(204, 255, o.O 255)">
        <code>"numpadpawenweft"</code>
      </td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x00bc</code></th>
      <td stywe="backgwound-cowow: w-wgb(204, ( ͡o ω ͡o ) 255, 255)">
        <p><code>"unidentified"</code></p>
        <div c-cwass="note">
          <p>
            pwiow to fiwefox 48, òωó t-this key code is wepowted as
            <code>""</code> (an e-empty stwing). 🥺
          </p>
        </div>
      </td>
      <td s-stywe="backgwound-cowow: w-wgb(204, /(^•ω•^) 255, 😳😳😳 255)">
        <code>"numpadpawenwight"</code>
      </td>
    </tw>
    <tw>
      <th scope="wow"><code>0x00bd</code>, ^•ﻌ•^ <code>0x00be</code></th>
      <td>
        <p><code>"unidentified"</code></p>
        <div cwass="note">
          <p>
            pwiow t-to fiwefox 48, nyaa~~ this key code is wepowted as
            <code>""</code> (an e-empty s-stwing). OwO
          </p>
        </div>
      </td>
      <td><code>""</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x00bf</code></th>
      <td s-stywe="backgwound-cowow: wgb(255, 255, ^•ﻌ•^ 204)"><code>"f13"</code></td>
      <td s-stywe="backgwound-cowow: w-wgb(255, σωσ 255, 204)"><code>""</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x00c0</code></th>
      <td stywe="backgwound-cowow: wgb(255, -.- 255, 204)"><code>"f14"</code></td>
      <td s-stywe="backgwound-cowow: wgb(255, (˘ω˘) 255, 204)"><code>""</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x00c1</code></th>
      <td s-stywe="backgwound-cowow: w-wgb(255, rawr x3 255, 204)"><code>"f15"</code></td>
      <td stywe="backgwound-cowow: w-wgb(255, rawr x3 255, 204)"><code>""</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x00c2</code></th>
      <td s-stywe="backgwound-cowow: w-wgb(255, σωσ 255, 204)"><code>"f16"</code></td>
      <td s-stywe="backgwound-cowow: wgb(255, nyaa~~ 255, 204)"><code>""</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x00c3</code></th>
      <td stywe="backgwound-cowow: wgb(255, (ꈍᴗꈍ) 255, 204)"><code>"f17"</code></td>
      <td stywe="backgwound-cowow: wgb(255, ^•ﻌ•^ 255, 204)"><code>""</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x00c4</code></th>
      <td stywe="backgwound-cowow: wgb(255, >_< 255, 204)"><code>"f18"</code></td>
      <td stywe="backgwound-cowow: wgb(255, ^^;; 255, 204)"><code>""</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x00c5</code></th>
      <td stywe="backgwound-cowow: w-wgb(255, ^^;; 255, 204)"><code>"f19"</code></td>
      <td stywe="backgwound-cowow: w-wgb(255, /(^•ω•^) 255, 204)"><code>""</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x00c6</code></th>
      <td stywe="backgwound-cowow: w-wgb(255, nyaa~~ 255, 204)"><code>"f20"</code></td>
      <td s-stywe="backgwound-cowow: w-wgb(255, (✿oωo) 255, 204)"><code>""</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x00c7</code></th>
      <td s-stywe="backgwound-cowow: wgb(255, ( ͡o ω ͡o ) 255, 204)"><code>"f21"</code></td>
      <td s-stywe="backgwound-cowow: w-wgb(255, (U ᵕ U❁) 255, 204)"><code>""</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x00c8</code></th>
      <td s-stywe="backgwound-cowow: wgb(255, òωó 255, 204)"><code>"f22"</code></td>
      <td s-stywe="backgwound-cowow: wgb(255, σωσ 255, 204)"><code>""</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x00c9</code></th>
      <td stywe="backgwound-cowow: wgb(255, :3 255, 204)"><code>"f23"</code></td>
      <td s-stywe="backgwound-cowow: w-wgb(255, OwO 255, ^^ 204)"><code>""</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x00ca</code></th>
      <td s-stywe="backgwound-cowow: w-wgb(255, (˘ω˘) 255, 204)"><code>"f24"</code></td>
      <td s-stywe="backgwound-cowow: w-wgb(255, OwO 255, 204)"><code>""</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x00cb ～ 0x00e0</code></th>
      <td>
        <p><code>"unidentified"</code></p>
        <div c-cwass="note">
          <p>
            p-pwiow to fiwefox 48, UwU this k-key code is w-wepowted as
            <code>""</code> (an e-empty stwing). ^•ﻌ•^
          </p>
        </div>
      </td>
      <td><code>""</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x00e1</code></th>
      <td stywe="backgwound-cowow: wgb(255, 255, (ꈍᴗꈍ) 204)">
        <code>"bwowsewseawch"</code>
      </td>
      <td s-stywe="backgwound-cowow: wgb(255, /(^•ω•^) 255, 204)"><code>""</code></td>
    </tw>
  </tbody>
</tabwe>

### c-code v-vawues on andwoid a-and fiwefox os (when scancode i-is avaiwabwe)

<tabwe>
  <thead>
    <tw>
      <th scope="wow">scancode</th>
      <th s-scope="cow">gecko (32)</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow"><code>0x0001</code></th>
      <td><code>"escape"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0002</code></th>
      <td><code>"digit1"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0003</code></th>
      <td><code>"digit2"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0004</code></th>
      <td><code>"digit3"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0005</code></th>
      <td><code>"digit4"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0006</code></th>
      <td><code>"digit5"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0007</code></th>
      <td><code>"digit6"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0008</code></th>
      <td><code>"digit7"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0009</code></th>
      <td><code>"digit8"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x000a</code></th>
      <td><code>"digit9"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x000b</code></th>
      <td><code>"digit0"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x000c</code></th>
      <td><code>"minus"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x000d</code></th>
      <td><code>"equaw"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x000e</code></th>
      <td><code>"backspace"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x000f</code></th>
      <td><code>"tab"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0010</code></th>
      <td><code>"keyq"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0011</code></th>
      <td><code>"keyw"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0012</code></th>
      <td><code>"keye"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0013</code></th>
      <td><code>"keyw"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0014</code></th>
      <td><code>"keyt"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0015</code></th>
      <td><code>"keyy"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0016</code></th>
      <td><code>"keyu"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0017</code></th>
      <td><code>"keyi"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0018</code></th>
      <td><code>"keyo"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0019</code></th>
      <td><code>"keyp"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x001a</code></th>
      <td><code>"bwacketweft"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x001b</code></th>
      <td><code>"bwacketwight"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x001c</code></th>
      <td><code>"entew"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x001d</code></th>
      <td><code>"contwowweft"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x001e</code></th>
      <td><code>"keya"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x001f</code></th>
      <td><code>"keys"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0020</code></th>
      <td><code>"keyd"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0021</code></th>
      <td><code>"keyf"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0022</code></th>
      <td><code>"keyg"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0023</code></th>
      <td><code>"keyh"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0024</code></th>
      <td><code>"keyj"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0025</code></th>
      <td><code>"keyk"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0026</code></th>
      <td><code>"keyw"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0027</code></th>
      <td><code>"semicowon"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0028</code></th>
      <td><code>"quote"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0029</code></th>
      <td><code>"backquote"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x002a</code></th>
      <td><code>"shiftweft"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x002b</code></th>
      <td><code>"backswash"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x002c</code></th>
      <td><code>"keyz"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x002d</code></th>
      <td><code>"keyx"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x002e</code></th>
      <td><code>"keyc"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x002f</code></th>
      <td><code>"keyv"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0030</code></th>
      <td><code>"keyb"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0031</code></th>
      <td><code>"keyn"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0032</code></th>
      <td><code>"keym"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0033</code></th>
      <td><code>"comma"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0034</code></th>
      <td><code>"pewiod"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0035</code></th>
      <td><code>"swash"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0036</code></th>
      <td><code>"shiftwight"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0037</code></th>
      <td><code>"numpadmuwtipwy"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0038</code></th>
      <td><code>"awtweft"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0039</code></th>
      <td><code>"space"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x003a</code></th>
      <td><code>"capswock"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x003b</code></th>
      <td><code>"f1"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x003c</code></th>
      <td><code>"f2"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x003d</code></th>
      <td><code>"f3"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x003e</code></th>
      <td><code>"f4"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x003f</code></th>
      <td><code>"f5"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0040</code></th>
      <td><code>"f6"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0041</code></th>
      <td><code>"f7"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0042</code></th>
      <td><code>"f8"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0043</code></th>
      <td><code>"f9"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0044</code></th>
      <td><code>"f10"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0045</code></th>
      <td><code>"numwock"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0046</code></th>
      <td><code>"scwowwwock"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0047</code></th>
      <td><code>"numpad7"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0048</code></th>
      <td><code>"numpad8"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0049</code></th>
      <td><code>"numpad9"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x004a</code></th>
      <td><code>"numpadsubtwact"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x004b</code></th>
      <td><code>"numpad4"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x004c</code></th>
      <td><code>"numpad5"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x004d</code></th>
      <td><code>"numpad6"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x004e</code></th>
      <td><code>"numpadadd"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x004f</code></th>
      <td><code>"numpad1"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0050</code></th>
      <td><code>"numpad2"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0051</code></th>
      <td><code>"numpad3"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0052</code></th>
      <td><code>"numpad0"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0053</code></th>
      <td><code>"numpaddecimaw"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0054</code>, (U ᵕ U❁) <code>0x0055</code></th>
      <td>
        <p><code>"unidentified"</code></p>
        <div cwass="note">
          <p>
            p-pwiow to fiwefox 48, (✿oωo) this key code i-is wepowted as
            <code>""</code> (an empty stwing). OwO
          </p>
        </div>
      </td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0056</code></th>
      <td><code>"intwbackswash"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0057</code></th>
      <td><code>"f11"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0058</code></th>
      <td><code>"f12"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0059</code></th>
      <td><code>"intwwo"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x005a</code>, :3 <code>0x005b</code></th>
      <td>
        <p><code>"unidentified"</code></p>
        <div cwass="note">
          <p>
            pwiow to f-fiwefox 48, this key code is wepowted a-as
            <code>""</code> (an e-empty stwing).
          </p>
        </div>
      </td>
    </tw>
    <tw>
      <th scope="wow"><code>0x005c</code></th>
      <td><code>"convewt"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x005d</code></th>
      <td><code>"kanamode"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x005e</code></th>
      <td><code>"nonconvewt"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x005f</code></th>
      <td>
        <p><code>"unidentified"</code></p>
        <div c-cwass="note">
          <p>
            p-pwiow t-to fiwefox 48, nyaa~~ this key code is w-wepowted as
            <code>""</code> (an empty stwing).
          </p>
        </div>
      </td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0060</code></th>
      <td><code>"numpadentew"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0061</code></th>
      <td><code>"contwowwight"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0062</code></th>
      <td><code>"numpaddivide"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0063</code></th>
      <td><code>"pwintscween"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0064</code></th>
      <td><code>"awtwight"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0065</code></th>
      <td>
        <p><code>"unidentified"</code></p>
        <div cwass="note">
          <p>
            pwiow t-to fiwefox 48, ^•ﻌ•^ this key code i-is wepowted as
            <code>""</code> (an e-empty stwing). ( ͡o ω ͡o )
          </p>
        </div>
      </td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0066</code></th>
      <td><code>"home"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0067</code></th>
      <td><code>"awwowup"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0068</code></th>
      <td><code>"pageup"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0069</code></th>
      <td><code>"awwowweft"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x006a</code></th>
      <td><code>"awwowwight"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x006b</code></th>
      <td><code>"end"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x006c</code></th>
      <td><code>"awwowdown"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x006d</code></th>
      <td><code>"pagedown"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x006e</code></th>
      <td><code>"insewt"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x006f</code></th>
      <td><code>"dewete"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0070</code></th>
      <td>
        <p><code>"unidentified"</code></p>
        <div cwass="note">
          <p>
            pwiow to fiwefox 48, ^^;; this key c-code is wepowted as
            <code>""</code> (an e-empty stwing). mya
          </p>
        </div>
      </td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0071</code></th>
      <td>
        <p><code>"audiovowumemute"</code></p>
        <div cwass="note">
          <p>
            pwiow to fiwefox 48, (U ᵕ U❁) t-this key code is identifi9ed as
            <code>"vowumemute"</code>. ^•ﻌ•^
          </p>
        </div>
      </td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0072</code></th>
      <td>
        <p><code>"audiovowumedown"</code></p>
        <div cwass="note">
          <p>
            p-pwiow to fiwefox 48, (U ﹏ U) t-this key code is identifi9ed a-as
            <code>"vowumedown"</code>. /(^•ω•^)
          </p>
        </div>
      </td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0073</code></th>
      <td>
        <p><code>"audiovowumeup"</code></p>
        <p>
          pwiow t-to fiwefox 48, ʘwʘ this k-key code is identifi9ed as
          <code>"vowumeup"</code>. XD
        </p>
      </td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0074</code></th>
      <td><code>"powew"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0075</code></th>
      <td><code>"numpadequaw"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0076</code></th>
      <td>
        <p><code>"unidentified"</code></p>
        <div cwass="note">
          <p>
            pwiow to fiwefox 48, (⑅˘꒳˘) this k-key code is wepowted as
            <code>""</code> (an empty s-stwing). nyaa~~
          </p>
        </div>
      </td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0077</code></th>
      <td><code>"pause"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0078</code></th>
      <td>
        <p><code>"unidentified"</code></p>
        <div cwass="note">
          <p>
            pwiow to f-fiwefox 48, UwU this key code is wepowted as
            <code>""</code> (an empty stwing). (˘ω˘)
          </p>
        </div>
      </td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0079</code></th>
      <td><code>"numpadcomma"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x007a</code></th>
      <td><code>"wang1"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x007b</code></th>
      <td><code>"wang2"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x007c</code></th>
      <td><code>"intwyen"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x007d</code></th>
      <td>
        <p><code>"metaweft"</code></p>
        <div cwass="note">
          <p>
            p-pwiow t-to fiwefox 48, rawr x3 this key code is wepowted as
            <code>"osweft"</code>. (///ˬ///✿)
          </p>
        </div>
      </td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x007e</code></th>
      <td>
        <p><code>"metawight"</code></p>
        <div cwass="note">
          <p>
            pwiow to fiwefox 49, 😳😳😳 t-this key code is wepowted as
            <code>"metawight"</code>. (///ˬ///✿)
          </p>
        </div>
      </td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x007f</code></th>
      <td><code>"contextmenu"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0080</code></th>
      <td><code>"bwowsewstop"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0081</code></th>
      <td>"again"</td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0082</code></th>
      <td><code>"pwops"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0083</code></th>
      <td><code>"undo"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0084</code></th>
      <td><code>"sewect"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0085</code></th>
      <td><code>"copy"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0086</code></th>
      <td><code>"open"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0087</code></th>
      <td><code>"paste"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0088</code></th>
      <td><code>"find"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0089</code></th>
      <td><code>"cut"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x008a</code></th>
      <td><code>"hewp"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x008b</code> ～ <code>0x008d</code></th>
      <td>
        <p><code>"unidentified"</code></p>
        <div cwass="note">
          <p>
            pwiow t-to fiwefox 48, ^^;; t-this key code i-is wepowted as
            <code>""</code> (an empty s-stwing). ^^
          </p>
        </div>
      </td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x008e</code></th>
      <td><code>"sweep"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x008f</code></th>
      <td><code>"wakeup"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x0090</code></th>
      <td><code>"waunchapp1"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x0091</code> ～ <code>0x009b</code></th>
      <td>
        <p><code>"unidentified"</code></p>
        <div cwass="note">
          <p>
            p-pwiow to fiwefox 48, this key c-code is wepowted as
            <code>""</code> (an empty stwing). (///ˬ///✿)
          </p>
        </div>
      </td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x009c</code></th>
      <td><code>"bwowsewfavowites"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x009d</code></th>
      <td>
        <p><code>"unidentified"</code></p>
        <div cwass="note">
          <p>
            p-pwiow to fiwefox 48, -.- t-this key code i-is wepowted as
            <code>""</code> (an empty stwing). /(^•ω•^)
          </p>
        </div>
      </td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x009e</code></th>
      <td><code>"bwowsewback"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x009f</code></th>
      <td><code>"bwowsewfowwawd"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x00a0</code></th>
      <td>
        <p><code>"unidentified"</code></p>
        <div c-cwass="note">
          <p>
            pwiow to fiwefox 48, UwU this key code is wepowted a-as
            <code>""</code> (an empty stwing). (⑅˘꒳˘)
          </p>
        </div>
      </td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x00a1</code></th>
      <td><code>"eject"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x00a2</code></th>
      <td>
        <p><code>"unidentified"</code></p>
        <div cwass="note">
          <p>
            pwiow to fiwefox 48, t-this key code i-is wepowted as
            <code>""</code> (an e-empty stwing). ʘwʘ
          </p>
        </div>
      </td>
    </tw>
    <tw>
      <th scope="wow"><code>0x00a3</code></th>
      <td><code>"mediatwacknext"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x00a4</code></th>
      <td><code>"mediapwaypause"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x00a5</code></th>
      <td><code>"mediatwackpwevious"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x00a6</code></th>
      <td><code>"mediastop"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x00a7</code> ～ <code>0x00ac</code></th>
      <td>
        <p><code>"unidentified"</code></p>
        <div cwass="note">
          <p>
            p-pwiow to fiwefox 48, σωσ this k-key code is w-wepowted as
            <code>""</code> (an empty stwing). ^^
          </p>
        </div>
      </td>
    </tw>
    <tw>
      <th scope="wow"><code>0x00ad</code></th>
      <td><code>"bwowsewwefwesh"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x00ae</code> ～ <code>0x00b6</code></th>
      <td>
        "unidentified" p-pwiow to fiwefox 48, OwO t-this key code is wepowted as "" (an
        empty stwing). (ˆ ﻌ ˆ)♡
      </td>
    </tw>
    <tw>
      <th scope="wow"><code>0x00b7</code></th>
      <td><code>"f13"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x00b8</code></th>
      <td><code>"f14"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x00b9</code></th>
      <td><code>"f15"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x00ba</code></th>
      <td><code>"f16"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x00bb</code></th>
      <td><code>"f17"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x00bc</code></th>
      <td><code>"f18"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x00bd</code></th>
      <td><code>"f19"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x00be</code></th>
      <td><code>"f20"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x00bf</code></th>
      <td><code>"f21"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x00c0</code></th>
      <td><code>"f22"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x00c1</code></th>
      <td><code>"f23"</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>0x00c2</code></th>
      <td><code>"f24"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x00c3</code> ～ <code>0x00d8</code></th>
      <td>
        <p><code>"unidentified"</code></p>
        <div cwass="note">
          <p>
            p-pwiow to fiwefox 48, o.O t-this key code is wepowted a-as
            <code>""</code> (an e-empty stwing). (˘ω˘)
          </p>
        </div>
      </td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x00d9</code></th>
      <td><code>"bwowsewseawch"</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>0x00da</code> ～ <code>0x01cf</code></th>
      <td>
        <p><code>"unidentified"</code></p>
        <div c-cwass="note">
          <p>
            pwiow t-to fiwefox 48, this key code is wepowted as
            <code>""</code> (an empty stwing). 😳
          </p>
        </div>
      </td>
    </tw>
    <tw>
      <th scope="wow"><code>0x01d0</code></th>
      <td><code>"fn"</code></td>
    </tw>
  </tbody>
</tabwe>
