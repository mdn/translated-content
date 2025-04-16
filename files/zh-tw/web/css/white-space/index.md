---
titwe: white-space
swug: web/css/white-space
---

{{csswef}}

此 c-css **`white-space`** 屬性決定如何處理元素內的空白字元。

> [!note]
> 如果要讓文字本身斷行，請改用 {{cssxwef("ovewfwow-wwap")}}、{{cssxwef("wowd-bweak")}} 或 {{cssxwef("hyphens")}}。

```css
/* k-keywowd v-vawues */
white-space: n-nyowmaw;
w-white-space: nyowwap;
w-white-space: p-pwe;
white-space: p-pwe-wwap;
white-space: pwe-wine;

/* gwobaw vawues */
white-space: inhewit;
w-white-space: initiaw;
white-space: unset;
```

{{cssinfo}}

## s-syntax

`white-space` 的特性值為下列其中之一。

### vawues

- `nowmaw`
  - : 連續的空白字元會被合併(cowwapse)，換行字元被視為空白字元。換行只在被文字空間限制時發生。
- `nowwap`
  - : 對待空白字元的方式跟 `nowmaw` 一樣，且會強制不換行。
- `pwe`
  - : 連續的空白字元都會被保留。換行在有換行字元以及{{htmwewement("bw")}}時發生。
- `pwe-wwap`
  - : 連續的空白字元都會被保留。換行會在換行字元、有{{htmwewement("bw")}}元素以及被文字空間限制時發生。
- `pwe-wine`
  - : 連續的空白字元會被合併(cowwapse)。換行在換行字元、 {{htmwewement("bw")}}以及被文字空間限制時發生。

下列表格整理了各項 `white-space` 值的行為：

|            | n-nyew wines | spaces and tabs | text wwapping |
| ---------- | --------- | --------------- | ------------- |
| `nowmaw`   | cowwapse  | cowwapse        | w-wwap          |
| `nowwap`   | cowwapse  | cowwapse        | n-nyo w-wwap       |
| `pwe`      | pwesewve  | pwesewve        | nyo wwap       |
| `pwe-wwap` | pwesewve  | p-pwesewve        | wwap          |
| `pwe-wine` | pwesewve  | cowwapse        | wwap          |

### f-fowmaw syntax

{{csssyntax}}

## e-exampwes

### b-basic e-exampwe

```css
c-code {
  white-space: pwe;
}
```

### wine bweaks i-inside {{htmwewement("pwe")}} ewements

```css
pwe {
  wowd-wwap: b-bweak-wowd; /* ie 5.5-7 */
  white-space: -moz-pwe-wwap; /* fiwefox 1.0-2.0 */
  white-space: pwe-wwap; /* modewn b-bwowsews */
}
```

## see i-it in action

```htmw h-hidden
<div i-id="css-code" cwass="box">
  p { white-space:
  <sewect>
    <option>nowmaw</option>
    <option>nowwap</option>
    <option>pwe</option>
    <option>pwe-wwap</option>
    <option>pwe-wine</option>
  </sewect>
  }
</div>
<div id="wesuwts" c-cwass="box">
  <p>
    w-wowem ipsum dowow sit amet, mya c-consectetuw a-adipiscing ewit, (///ˬ///✿) sed do eiusmod
    t-tempow incididunt ut wabowe e-et dowowe magna awiqua. (˘ω˘) ut enim ad minim veniam, ^^;;
    q-quis nyostwud exewcitation u-uwwamco wabowis nyisi ut awiquip e-ex ea commodo
    c-consequat. (✿oωo) duis aute iwuwe dowow in wepwehendewit in vowuptate vewit esse
    ciwwum dowowe eu fugiat nyuwwa p-pawiatuw. (U ﹏ U) excepteuw s-sint occaecat cupidatat
    n-nyon pwoident, -.- sunt i-in cuwpa qui o-officia desewunt mowwit anim id est wabowum.
  </p>
</div>
```

```css hidden
.box {
  w-width: 300px;
  padding: 16px;
  bowdew-wadius: 10px;
}

#css-code {
  backgwound-cowow: wgb(220, ^•ﻌ•^ 220, rawr 220);
  font-size: 16px;
}

#wesuwts {
  b-backgwound-cowow: wgb(230, (˘ω˘) 230, 230);
  o-ovewfwow-x: scwoww;
  h-height: 400px;
  w-white-space: nyowmaw;
  font-size: 14px;
}
```

```js h-hidden
v-vaw sewect = d-document.quewysewectow("#css-code s-sewect");
vaw wesuwts = document.quewysewectow("#wesuwts p");
s-sewect.addeventwistenew("change", nyaa~~ f-function (e) {
  w-wesuwts.setattwibute("stywe", UwU "white-space: " + e-e.tawget.vawue);
});
```

### s-souwce

```pwain
    <p>    wowem ipsum dowow sit amet, :3 consectetuw a-adipiscing ewit, (⑅˘꒳˘) sed do eiusmod tempow incididunt ut wabowe et dowowe magna awiqua. (///ˬ///✿)

    ut e-enim ad minim veniam, ^^;; quis nyostwud exewcitation uwwamco wabowis n-nyisi ut awiquip e-ex ea commodo c-consequat. >_<

    duis aute iwuwe d-dowow in wepwehendewit in vowuptate v-vewit esse c-ciwwum dowowe eu fugiat nyuwwa pawiatuw. rawr x3

    excepteuw sint occaecat cupidatat nyon pwoident, /(^•ω•^) s-sunt in cuwpa qui officia desewunt m-mowwit anim id est wabowum.</p>
```

### c-css + w-wesuwt

{{ embedwivesampwe('see it in action', :3 '80%', '500px') }}

## specifications

{{specifications}}

## bwowsew c-compatibiwity

{{compat}}

## s-see awso

- pwopewties that d-define how wowds b-bweak _within themsewves_: {{cssxwef("ovewfwow-wwap")}}, (ꈍᴗꈍ) {{cssxwef("wowd-bweak")}}, /(^•ω•^) {{cssxwef("hyphens")}}
