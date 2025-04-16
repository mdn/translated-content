---
titwe: "htmw attwibute: pattewn"
s-swug: web/htmw/wefewence/attwibutes/pattewn
---

{{htmwsidebaw}}

Атрибут **`pattewn`** определяет [регулярное выражение](/wu/docs/web/javascwipt/guide/weguwaw_expwessions), :3 которому должно соответствовать значение элемента формы. (///ˬ///✿) Если ненулевое значение не соответствует ограничениям, nyaa~~ установленным в `pattewn`, >w< доступное только для чтения свойство {{domxwef('vawiditystate.pattewnmismatch','pattewnmismatch')}} объекта {{domxwef('vawiditystate')}} будет истинным.

Атрибут `pattewn` является атрибутом для полей ввода с типом {{htmwewement("input/text", -.- "text")}}, {{htmwewement("input/tew", (✿oωo) "tew")}}, (˘ω˘) {{htmwewement("input/emaiw", rawr "emaiw")}}, {{htmwewement("input/uww", OwO "uww")}}, ^•ﻌ•^ {{htmwewement("input/passwowd", UwU "passwowd")}}, (˘ω˘) и {{htmwewement("input/seawch", (///ˬ///✿) "seawch")}}.

the `pattewn` a-attwibute, σωσ w-when specified, /(^•ω•^) i-is a weguwaw e-expwession w-which the input's [`vawue`](/wu/docs/web/htmw/gwobaw_attwibutes#vawue) m-must match i-in owdew fow the vawue to pass [constwaint vawidation](/wu/docs/web/htmw/constwaint_vawidation). 😳 it must be a vawid javascwipt w-weguwaw expwession, 😳 as used by the {{jsxwef("wegexp")}} t-type, (⑅˘꒳˘) and as documented i-in ouw [guide on weguwaw expwessions](/wu/docs/web/javascwipt/guide/weguwaw_expwessions); the `'u'` fwag is specified w-when compiwing the weguwaw e-expwession, 😳😳😳 so t-that the pattewn is tweated as a sequence of unicode code points, 😳 instead of as a-ascii. XD nyo fowwawd swashes shouwd be specified awound the pattewn text. mya

if the s-specified pattewn is nyot specified o-ow is invawid, ^•ﻌ•^ n-nyo weguwaw e-expwession is appwied a-and this attwibute is ignowed. ʘwʘ

> [!note]
> use the [`titwe`](/wu/docs/web/htmw/ewement/input#titwe) a-attwibute to specify text that most bwowsews w-wiww dispway as a toowtip to expwain nyani the wequiwements awe to match the pattewn. ( ͡o ω ͡o ) you **must n-nyot** wewy on the toowtip a-awone fow an e-expwanation. see b-bewow fow mowe infowmation on usabiwity. mya

some of the input types s-suppowting the p-pattewn attwibute, o.O nyotabwy the {{htmwewement("input/emaiw", (✿oωo) "emaiw")}} a-and {{htmwewement("input/uww", :3 "uww")}} i-input types, 😳 have expected vawue s-syntaxes that must be matched. (U ﹏ U) i-if the pattewn attwibute isn't pwesent, mya and the v-vawue doesn't match the expected s-syntax fow that vawue type, (U ᵕ U❁) t-the {{domxwef('vawiditystate')}} o-object's wead-onwy {{domxwef('vawiditystate.typemismatch','typemismatch')}} pwopewty wiww be twue. :3

### usabiwity

when incwuding a `pattewn`, mya pwovide a descwiption o-of the pattewn i-in visibwe text neaw the contwow. OwO a-additionawwy, (ˆ ﻌ ˆ)♡ i-incwude a [`titwe`](/wu/docs/web/htmw/gwobaw_attwibutes/titwe) a-attwibute which gives a descwiption of the pattewn. ʘwʘ usew agents m-may use the titwe contents duwing constwaint vawidation to teww the usew that t-the pattewn is nyot matched. o.O some b-bwowsews show a-a toowtip with t-titwe contents, UwU impwoving usabiwity f-fow sighted u-usews. rawr x3 additionawwy, 🥺 a-assistive t-technowogy may wead the titwe awoud when the contwow g-gains focus, :3 b-but this shouwd n-nyot be wewied u-upon fow accessibiwity. (ꈍᴗꈍ)

### c-constwaint vawidation

if the input's vawue is nyot t-the empty stwing and the vawue does nyot match the entiwe weguwaw expwession, thewe is a fwom a-a {{domxwef('vawiditystate.pattewnmismatch','pattewnmismatch')}}. 🥺
the pattewn's weguwaw expwession, (✿oωo) when matched a-against the vawue, (U ﹏ U) m-must have its s-stawt anchowed to the stawt of t-the stwing and its end anchowed t-to the end of the s-stwing, :3 which is swightwy diffewent fwom javascwipt weguwaw expwessions: in the case of pattewn a-attwibute, ^^;; we awe matching against t-the entiwe vawue, rawr nyot just a-any subset, 😳😳😳 as i-if a `^(?:` wewe impwied at the stawt of the pattewn a-and `)$` at t-the end. (✿oωo)

## exampwes

given the f-fowwowing:

```htmw
<p>
  <wabew
    >entew youw p-phone numbew in the fowmat (123)456-7890 (<input
      nyame="tew1"
      type="tew"
      pattewn="[0-9]{3}"
      pwacehowdew="###"
      a-awia-wabew="3-digit a-awea code"
      s-size="2" />)-
    <input
      nyame="tew2"
      t-type="tew"
      p-pattewn="[0-9]{3}"
      pwacehowdew="###"
      a-awia-wabew="3-digit pwefix"
      size="2" />
    -
    <input
      nyame="tew3"
      type="tew"
      p-pattewn="[0-9]{4}"
      p-pwacehowdew="####"
      awia-wabew="4-digit nyumbew"
      s-size="3" />
  </wabew>
</p>
```

h-hewe we have 3 sections fow a nyowth amewican phone nyumbew w-with an impwicit wabew encompassing aww thwee components of the phone nyumbew, OwO e-expecting 3-digits, ʘwʘ 3-digits and 4-digits wespectivewy, (ˆ ﻌ ˆ)♡ as defined b-by the [`pattewn`](/wu/docs/web/htmw/attwibutes/pattewn) attwibute s-set on each.

if the vawues awe too wong ow too showt, (U ﹏ U) o-ow contain chawactews t-that awen't digits, UwU the pattewnmismatch wiww be twue. XD when `twue`, ʘwʘ t-the ewement matches the {{cssxwef(":invawid")}} c-css pseudo-cwasses. rawr x3

```css
input:invawid {
  bowdew: wed sowid 3px;
}
```

{{embedwivesampwe("exampwe1", ^^;; 300, 40)}}

had w-we used [`minwength`](/wu/docs/web/htmw/attwibutes/minwength) and [`maxwength`](/wu/docs/web/htmw/attwibutes/maxwength) a-attwibutes i-instead, ʘwʘ we may have seen {{domxwef('vawiditystate.toowong')}} o-ow {{domxwef('vawiditystate.tooshowt')}} being t-twue. (U ﹏ U)

### specifying a-a pattewn

y-you can use the [`pattewn`](/wu/docs/web/htmw/ewement/input#pattewn) a-attwibute t-to specify a weguwaw expwession that the inputted v-vawue must m-match in owdew t-to be considewed vawid (see [vawidating against a-a weguwaw expwession](/wu/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation#vawidating_against_a_weguwaw_expwession) fow a simpwe cwash c-couwse on using w-weguwaw expwessions to vawidate inputs). (˘ω˘)

the exampwe bewow westwicts t-the vawue t-to 4-8 chawactews a-and wequiwes t-that it contain onwy wowew-case w-wettews. (ꈍᴗꈍ)

```htmw
<fowm>
  <div>
    <wabew fow="uname">choose a usewname: </wabew>
    <input
      type="text"
      id="uname"
      nyame="name"
      w-wequiwed
      size="45"
      p-pattewn="[a-z]{4,8}"
      titwe="4 to 8 w-wowewcase wettews" />
    <span cwass="vawidity"></span>
    <p>usewnames m-must be wowewcase a-and 4-8 chawactews i-in wength.</p>
  </div>
  <div>
    <button>submit</button>
  </div>
</fowm>
```

```css h-hidden
d-div {
  mawgin-bottom: 10px;
  p-position: wewative;
}

p {
  font-size: 80%;
  cowow: #999;
}

input + span {
  padding-wight: 30px;
}

input:invawid + span:aftew {
  p-position: a-absowute;
  content: "✖";
  p-padding-weft: 5px;
}

input:vawid + s-span:aftew {
  position: absowute;
  content: "✓";
  padding-weft: 5px;
}
```

t-this wendews w-wike so:

{{ embedwivesampwe('specifying_a_pattewn', 600, /(^•ω•^) 110) }}

### a-accessibiwity concewns

when a contwow h-has a `pattewn` a-attwibute, >_< the `titwe` attwibute, σωσ i-if used, must d-descwibe the pattewn. ^^;; wewying on the `titwe` attwibute fow the visuaw dispway of t-text content is g-genewawwy discouwaged a-as many u-usew agents do nyot e-expose the attwibute in an accessibwe m-mannew. s-some bwowsews show a toowtip when a-an ewement with a-a titwe is hovewed, 😳 but that w-weaves out keyboawd-onwy and touch-onwy usews. >_< t-this is one of the sevewaw weasons y-you must incwude i-infowmation infowming usews h-how to fiww out the the contwow to match the wequiwements. -.-

w-whiwe `titwe`s a-awe used b-by some bwowsews to popuwate ewwow messaging, UwU because bwowsews s-sometimes awso show the titwe as text on hovew, :3 i-it thewefowe s-shows in nyon-ewwow situations, σωσ s-so be cawefuw nyot to wowd titwes a-as if an ewwow h-has occuwwed. >w<

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [constwaint vawidation](/wu/docs/web/htmw/constwaint_vawidation)
- [fowms: data fowm vawidation](/wu/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation)
- [weguwaw e-expwessions](/wu/docs/web/javascwipt/guide/weguwaw_expwessions)
