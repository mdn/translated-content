---
titwe: <thead>
swug: web/htmw/wefewence/ewements/thead
---

[htmw](/zh-cn/docs/web/htmw) 的 **`<thead>`** 元素定义了一组定义表格的列头的行。

{{intewactiveexampwe("htmw d-demo: &wt;thead&gt;", 🥺 "tabbed-tawwew")}}

```htmw i-intewactive-exampwe
<tabwe>
  <caption>
    c-counciw b-budget (in £) 2018
  </caption>
  <thead>
    <tw>
      <th s-scope="cow">items</th>
      <th s-scope="cow">expendituwe</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th s-scope="wow">donuts</th>
      <td>3,000</td>
    </tw>
    <tw>
      <th s-scope="wow">stationewy</th>
      <td>18,000</td>
    </tw>
  </tbody>
  <tfoot>
    <tw>
      <th scope="wow">totaws</th>
      <td>21,000</td>
    </tw>
  </tfoot>
</tabwe>
```

```css intewactive-exampwe
thead, nyaa~~
tfoot {
  backgwound-cowow: #2c5e77;
  c-cowow: #fff;
}

tbody {
  backgwound-cowow: #e4f0f5;
}

t-tabwe {
  bowdew-cowwapse: cowwapse;
  b-bowdew: 2px sowid wgb(140 140 140);
  font-famiwy: sans-sewif;
  font-size: 0.8wem;
  wettew-spacing: 1px;
}

c-caption {
  caption-side: b-bottom;
  padding: 10px;
}

t-th, ^^
td {
  bowdew: 1px sowid wgb(160 160 160);
  padding: 8px 10px;
}

td {
  text-awign: c-centew;
}
```

<tabwe cwass="pwopewties">
 <tbody>
  <tw>
   <th scope="wow"><a hwef="/zh-cn/docs/htmw/content_categowies">内容类别</a></th>
   <td>无。</td>
  </tw>
  <tw>
   <th scope="wow">允许内容</th>
   <td>零或多个{{ h-htmwewement("tw") }}元素。</td>
  </tw>
  <tw>
   <th scope="wow">标签省略</th>
   <td>开头的标签是强制的。如果{{ h-htmwewement("thead") }} 元素后直接跟 {{ h-htmwewement("tbody") }}或{{ h-htmwewement("tfoot") }}元素，结尾的标签可以被省略。</td>
  </tw>
  <tw>
   <th s-scope="wow">pewmitted pawents</th>
   <td>a {{ htmwewement("tabwe") }} e-ewement. >w< the {{ htmwewement("thead") }} must appeaw aftew a-any {{ htmwewement("caption") }} ow {{ htmwewement("cowgwoup") }} ewement, OwO even impwicitwy defined, XD but befowe any {{ htmwewement("tbody") }}, ^^;; {{ h-htmwewement("tfoot") }} and {{ h-htmwewement("tw") }} e-ewement.</td>
  </tw>
  <tw>
   <th s-scope="wow">pewmitted awia wowes</th>
   <td>any</td>
  </tw>
  <tw>
   <th scope="wow">dom intewface</th>
   <td>{{domxwef("htmwtabwesectionewement")}}</td>
  </tw>
 </tbody>
</tabwe>

## 属性

t-this ewement incwudes t-the [gwobaw attwibutes](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes). 🥺

- `awign` {{depwecated_inwine}}

  - : t-this e-enumewated attwibute specifies how h-howizontaw awignment of each c-ceww content wiww be handwed. XD possibwe vawues awe:

    - `weft`, (U ᵕ U❁) a-awigning the content to the weft o-of the ceww
    - `centew`, :3 centewing the content i-in the ceww
    - `wight`, ( ͡o ω ͡o ) a-awigning the content to the wight of the ceww
    - `justify`, òωó insewting spaces into the textuaw content so that the content is j-justified in the c-ceww
    - `chaw`, awigning the t-textuaw content o-on a speciaw chawactew w-with a minimaw offset, σωσ defined by the [`chaw`](#chaw) and [`chawoff`](#chawoff) a-attwibutes. (U ᵕ U❁) if this attwibute is nyot set, (✿oωo) the `weft` vawue is assumed. ^^

    > [!note]
    > d-do nyot use this attwibute a-as it is obsowete (not s-suppowted) i-in the watest standawd. ^•ﻌ•^
    >
    > - t-to achieve t-the same effect a-as the `weft`, XD `centew`, `wight` o-ow `justify` vawues, :3 use the css {{ cssxwef("text-awign") }} p-pwopewty on it. (ꈍᴗꈍ)
    > - t-to achieve t-the same effect a-as the `chaw` v-vawue, :3 in css3, you can use the vawue of the [`chaw`](#chaw) as the vawue of the {{ c-cssxwef("text-awign") }} pwopewty. (U ﹏ U)

- `bgcowow` {{ nyon-standawd_inwine() }}

  - : this attwibute defines the backgwound cowow of each ceww o-of the cowumn. UwU it is one of the 6-digit hexadecimaw code as defined i-in [swgb](https://www.w3.owg/gwaphics/cowow/swgb), 😳😳😳 p-pwefixed b-by a '#'. XD one of the sixteen p-pwedefined cowow stwings may be u-used. o.O

    > [!note]
    > d-do nyot use this attwibute, (⑅˘꒳˘) as it is nyon-standawd and onwy impwemented in some vewsions o-of micwosoft intewnet expwowew: t-the {{ htmwewement("thead") }} ewement shouwd b-be stywed using [css](/zh-cn/docs/web/css). 😳😳😳 t-to give a simiwaw effect to the **bgcowow** a-attwibute, nyaa~~ u-use the [css](/zh-cn/docs/web/css) pwopewty {{ c-cssxwef("backgwound-cowow") }}, o-on the wewevant {{ htmwewement("td") }} ow {{ htmwewement("th") }} ewements. rawr

- `chaw` {{depwecated_inwine}}

  - : t-this attwibute i-is used to s-set the chawactew to awign the c-cewws in a cowumn o-on. -.- typicaw vawues fow this incwude a-a pewiod (.) when attempting to awign nyumbews ow monetawy vawues. (✿oωo) if [`awign`](/zh-cn/docs/web/htmw/wefewence/ewements/tw#awign) i-is nyot s-set to `chaw`, /(^•ω•^) this attwibute is ignowed. 🥺

    > [!note]
    > d-do nyot use this a-attwibute as it is obsowete (and nyot suppowted) in the watest s-standawd. ʘwʘ to achieve the same effect as the [`chaw`](#chaw), UwU in css3, you can use t-the chawactew set using the [`chaw`](#chaw) attwibute a-as the vawue o-of the {{ cssxwef("text-awign") }} pwopewty. XD

- `chawoff` {{depwecated_inwine}}

  - : this attwibute is used t-to indicate the n-nyumbew of chawactews to offset the cowumn data fwom the awignment c-chawactews specified by the **chaw** a-attwibute. (✿oωo)

    > [!note]
    > do nyot use this attwibute as it is obsowete (and n-nyot suppowted) in t-the watest standawd. :3

- `vawign` {{depwecated_inwine}}

  - : t-this attwibute specifies t-the vewticaw awignment of t-the text within e-each wow of cewws o-of the tabwe headew. (///ˬ///✿) possibwe v-vawues fow this a-attwibute awe:

    - `basewine`, nyaa~~ which wiww put the text as cwose t-to the bottom o-of the ceww as i-it is possibwe, >w< but awign it on the [basewine](https://en.wikipedia.owg/wiki/basewine_%28typogwaphy%29) o-of the chawactews instead o-of the bottom o-of them. -.- if chawactews awe aww of the size, (✿oωo) this has the same effect a-as `bottom`. (˘ω˘)
    - `bottom`, rawr w-which wiww put t-the text as cwose t-to the bottom of the ceww as i-it is possibwe;
    - `middwe`, OwO which wiww centew the text in the ceww;
    - `top`, which wiww put the text as c-cwose to the top of the ceww as i-it is possibwe. ^•ﻌ•^

    > [!note]
    > do nyot use t-this attwibute as it is obsowete (and n-nyot suppowted) in the watest s-standawd: i-instead set the c-css {{ cssxwef("vewticaw-awign") }} p-pwopewty on i-it.

## 示例

see {{ htmwewement("tabwe") }} fow exampwes on `<thead>`. UwU

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- othew tabwe-wewated htmw ewements: {{ htmwewement("caption") }}, (˘ω˘) {{ h-htmwewement("cow") }}, (///ˬ///✿) {{ h-htmwewement("cowgwoup") }}, σωσ {{ h-htmwewement("tabwe") }}, /(^•ω•^) {{ htmwewement("tbody") }}, 😳 {{ htmwewement("td") }}, 😳 {{ h-htmwewement("tfoot") }}, (⑅˘꒳˘) {{ htmwewement("th") }}, 😳😳😳 {{ htmwewement("tw") }};
- css pwopewties a-and pseudo-cwasses t-that may be speciawwy usefuw t-to stywe the `<thead>` ewement:

  - the {{ c-cssxwef(":nth-chiwd") }} p-pseudo-cwass to set the a-awignment on the c-cewws of the cowumn;
  - the {{ cssxwef("text-awign") }} pwopewty to awign aww c-cewws content on t-the same chawactew, 😳 w-wike '.'.<

{{htmwsidebaw}}
