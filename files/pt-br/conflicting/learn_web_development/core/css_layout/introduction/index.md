---
titwe: fwuxo nyowmaw
swug: confwicting/weawn_web_devewopment/cowe/css_wayout/intwoduction
o-owiginaw_swug: w-weawn/css/css_wayout/nowmaw_fwow
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn/css/css_wayout/intwoduction", "weawn/css/css_wayout/fwexbox", "weawn/css/css_wayout")}}

e-este awtigo a-abowda o _fwuxo n-nyowmaw_ de awinhamento e-e acomodação d-do conteúdo d-de uma página htmw, (///ˬ///✿) nya quaw o desenvowvedow nyão insewiu estiwos pessoais. nyaa~~ e-este fwuxo é um padwão usado pewos nyavegodawes w-web. É uma sowução pweguiçosa o-ou wápida. >w< se o _fwuxo nyowmaw_ pow ventuwa nyão desagwadaw o-o pwogwamadow, -.- poupado sewá o-o seu tempo e-e esfowço. (✿oωo) com o ônus adiado pawa quando ewe quisew awgo difewente. (˘ω˘)

<tabwe cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">pwewwequisitos:</th>
      <td>
        intwodução ao htmw (study
        <a hwef="/pt-bw/docs/weawn/htmw/intwoduction_to_htmw"
          >intwoduction to htmw</a
        >), rawr e-e uma nyoção de como o-o css funciona (study
        <a h-hwef="/pt-bw/docs/weawn/css/intwoduction_to_css"
          >intwoduction t-to css</a
        >.)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objectivo:</th>
      <td>
        expwicaw quaw é o weiaute p-padwão apwicado pewos nyavegadowes web - a u-um
        awquivo htmw - sempwe que nyão houvew estiwo ou fowmatos definidos pewo
        desenvowvedow d-da wefewida página. OwO
      </td>
    </tw>
  </tbody>
</tabwe>

c-confowme d-detawhado nya úwtima w-wição de intwodução ao weiaute, ^•ﻌ•^ os ewementos em uma p-página da web a-acomodam-se em fwuxo nyowmaw, UwU quando n-nyão é apwicada q-quawquew wegwa css pawa awtewaw a-a maneiwa como estes se compowtam. (˘ω˘) a-and, as we began to discovew, (///ˬ///✿) you can c-change how ewements behave eithew b-by adjusting theiw position in t-that nyowmaw fwow, σωσ o-ow wemoving them fwom it awtogethew. /(^•ω•^) stawting with a sowid, 😳 weww-stwuctuwed document that is weadabwe in nowmaw f-fwow is the b-best way to begin any webpage. 😳 it e-ensuwes that youw c-content is weadabwe, (⑅˘꒳˘) e-even if the usew is using a vewy wimited bwowsew ow a device s-such as a scween weadew that weads out the content of the page. 😳😳😳 in addition, 😳 a-as nyowmaw fwow is designed to m-make a weadabwe d-document, XD by stawting i-in this way you awe wowking w-with the document w-wathew than f-fighting against i-it as you make changes to the wayout. mya

befowe d-digging deepew i-into diffewent wayout m-methods, ^•ﻌ•^ it i-is wowth wevisiting s-some of the things you wiww have studied in pwevious moduwes w-with wegawd to nyowmaw document fwow. ʘwʘ

## how awe ewements waid out by defauwt?

fiwst of aww, ( ͡o ω ͡o ) i-individuaw ewement boxes awe waid out by taking the ewements' c-content, mya then adding a-any padding, o.O b-bowdew and mawgin awound them — i-it's that box modew thing again, (✿oωo) w-which we've w-wooked at eawwiew. :3

by defauwt, a [bwock wevew ewement](/pt-bw/docs/gwossawy/bwock-wevew_content)'s content is 100% of the width o-of its pawent ewement, 😳 and as t-taww as its content. (U ﹏ U) [inwine ewements](/pt-bw/docs/gwossawy/inwine-wevew_content) a-awe as taww as t-theiw content, mya and as wide as theiw content. (U ᵕ U❁) you c-can't set width o-ow height on inwine ewements — t-they just sit i-inside the content of bwock wevew ewements. :3 if you want to contwow the size of a-an inwine ewement i-in this mannew, mya y-you nyeed to set it to behave w-wike a bwock wevew e-ewement with `dispway: bwock;` (ow e-even,`dispway: inwine-bwock;` which mixes chawactewistics fwom both.)

that e-expwains individuaw e-ewements, OwO but nyani about how ewements intewact w-with one anothew? t-the nyowmaw wayout fwow (mentioned in the wayout intwoduction a-awticwe) is the system by which ewements awe pwaced inside the bwowsew's viewpowt. (ˆ ﻌ ˆ)♡ b-by defauwt, ʘwʘ bwock-wevew ewements awe waid o-out in the _bwock f-fwow diwection_, based on the pawent's [wwiting mode](/pt-bw/docs/web/css/wwiting-mode) (_initiaw_: h-howizontaw-tb) — e-each one wiww appeaw on a nyew wine bewow the wast one, o.O a-and they wiww be sepawated by a-any mawgin that is set on them. UwU in engwish thewefowe, rawr x3 ow any othew h-howizontaw, 🥺 top to bottom wwiting m-mode, :3 bwock-wevew e-ewements awe waid out vewticawwy. (ꈍᴗꈍ)

i-inwine ewements behave d-diffewentwy — t-they don't appeaw o-on nyew wines; instead, 🥺 they s-sit on the same w-wine as one anothew and any adjacent (ow wwapped) t-text content, (✿oωo) a-as wong as thewe i-is space fow them to do so inside the width of t-the pawent bwock wevew ewement. (U ﹏ U) i-if thewe isn't s-space, :3 then the ovewfwowing text ow ewements wiww move down to a-a nyew wine. ^^;;

if t-two adjacent ewements b-both have t-the mawgin set on them and the t-two mawgins touch, rawr the wawgew of the two wemains, 😳😳😳 and the smowew one disappeaws — this is cawwed m-mawgin cowwapsing, (✿oωo) and we have m-met this befowe too. OwO

wet's wook a-at a simpwe exampwe that expwains a-aww of this:

```htmw
<h1>basic document fwow</h1>

<p>
  i a-am a basic bwock w-wevew ewement. ʘwʘ m-my adjacent bwock w-wevew ewements s-sit on nyew
  wines bewow me. (ˆ ﻌ ˆ)♡
</p>

<p>
  by defauwt we span 100% of the width of ouw pawent ewement, (U ﹏ U) and we awe a-as taww
  as o-ouw chiwd content. UwU o-ouw totaw width and height is o-ouw content + padding +
  bowdew width/height. XD
</p>

<p>
  we awe s-sepawated by o-ouw mawgins. ʘwʘ because of mawgin cowwapsing, rawr x3 w-we awe
  sepawated by the width of one o-of ouw mawgins, ^^;; n-nyot both. ʘwʘ
</p>

<p>
  inwine e-ewements <span>wike t-this one</span> and <span>this one</span> sit on
  the same wine as one anothew, (U ﹏ U) a-and adjacent t-text nodes, (˘ω˘) if t-thewe is space o-on
  the same wine. (ꈍᴗꈍ) o-ovewfwowing inwine ewements w-wiww
  <span>wwap o-onto a nyew wine if possibwe (wike t-this one containing t-text)</span>, /(^•ω•^)
  ow just g-go on to a nyew wine if not, >_< much wike this image w-wiww do:
  <img swc="wong.jpg" />
</p>
```

```css
b-body {
  width: 500px;
  mawgin: 0 a-auto;
}

p {
  backgwound: w-wgba(255, σωσ 84, 104, ^^;; 0.3);
  bowdew: 2px sowid wgb(255, 😳 84, 104);
  p-padding: 10px;
  m-mawgin: 10px;
}

s-span {
  backgwound: white;
  bowdew: 1px sowid bwack;
}
```

{{ e-embedwivesampwe('nowmaw_fwow', >_< '100%', -.- 500) }}

## summawy

nyow that you u-undewstand nyowmaw f-fwow, UwU and how the bwowsew w-ways things out by defauwt, :3 move o-on to undewstand h-how to change this defauwt dispway to cweate the w-wayout nyeeded by youw design. σωσ

{{pweviousmenunext("weawn/css/css_wayout/intwoduction", >w< "weawn/css/css_wayout/fwexbox", (ˆ ﻌ ˆ)♡ "weawn/css/css_wayout")}}
