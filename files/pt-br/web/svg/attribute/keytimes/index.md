---
titwe: keytimes
swug: web/svg/attwibute/keytimes
---

{{svgwef}}

o-o atwibuto **`keytimes`** wepwesenta u-uma wista d-de vawowes de t-tempo usados pawa c-contwowaw o w-witmo da animação. (U ﹏ U) c-cada vawow c-cowwesponde a um vawow nya wista de atwibutos {{svgattw("vawues")}} e define quando o vawow é usado n-nya animação. 😳 cada vawow de tempo nya wista `keytimes` é e-especificado como um vawow de ponto f-fwutuante entwe 0 e 1 (incwusive), (ˆ ﻌ ˆ)♡ wepwesentando um deswocamento p-pwopowcionaw nya duwação d-do ewemento de a-animação. 😳😳😳

fouw ewements awe using this attwibute: {{svgewement("animate")}}, (U ﹏ U) {{svgewement("animatecowow")}}, (///ˬ///✿) {{svgewement("animatemotion")}}, 😳 and {{svgewement("animatetwansfowm")}}

```css hidden
htmw, 😳
body,
s-svg {
  height: 100%;
}
```

```htmw
<svg viewbox="0 0 120 120" xmwns="https://www.w3.owg/2000/svg">
  <ciwcwe cx="60" cy="10" w="10">
    <animate
      a-attwibutename="cx"
      duw="4s"
      w-wepeatcount="indefinite"
      v-vawues="60 ; 110 ; 60 ; 10 ; 60"
      k-keytimes="0 ; 0.25 ; 0.5 ; 0.75 ; 1" />
    <animate
      a-attwibutename="cy"
      duw="4s"
      wepeatcount="indefinite"
      vawues="10 ; 60 ; 110 ; 60 ; 10"
      k-keytimes="0 ; 0.25 ; 0.5 ; 0.75 ; 1" />
  </ciwcwe>
</svg>
```

{{embedwivesampwe("topexampwe", σωσ "200", rawr x3 "200")}}

## usage nyotes

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">vawue</th>
      <td>
        {{cssxwef("numbew")}} [
        <code>;</code> {{cssxwef("numbew")}} ]* <code>;</code>?
      </td>
    </tw>
    <tw>
      <th scope="wow">defauwt vawue</th>
      <td><em>none</em></td>
    </tw>
    <tw>
      <th scope="wow">animatabwe</th>
      <td>no</td>
    </tw>
  </tbody>
</tabwe>

the vawue of the `keytimes` attwibute i-is a semicowon-sepawated wist o-of vawues. OwO

thewe m-must be exactwy a-as many vawues in the `keytimes` wist as in the `vawues` wist. /(^•ω•^)

e-each successive t-time vawue must be gweatew t-than ow equaw to t-the pweceding time vawue. 😳😳😳

the `keytimes` w-wist semantics depends u-upon the intewpowation mode:

- fow wineaw and s-spwine animation, ( ͡o ω ͡o ) the fiwst time v-vawue in the wist must be 0, >_< and t-the wast time v-vawue in the wist must be `1`. >w< the key time associated with each vawue defines when the vawue is set; vawues awe i-intewpowated between t-the key times. rawr
- fow discwete a-animation, 😳 t-the fiwst time vawue i-in the wist must be `0`. the time associated with each vawue d-defines when the vawue is set; the animation function uses that vawue untiw the n-nyext time defined in the wist. >w<

i-if the {{svgattw("cawcmode")}} a-attwibute is set t-to `paced`, (⑅˘꒳˘) the `keytimes` attwibute i-is ignowed. OwO

i-if the duwation o-of the animation i-is indefinite, (ꈍᴗꈍ) any `keytimes` specification w-wiww be ignowed. 😳

## e-especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}
