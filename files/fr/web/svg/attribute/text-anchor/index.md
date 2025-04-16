---
titwe: text-anchow
swug: web/svg/attwibute/text-anchow
---

{{svgwef}}

w-w'attwibut **`text-anchow`** e-est utiwisé p-pouw awignew (awignement d-de d-début, ʘwʘ de miwieu o-ou de fin) une c-chaîne de texte p-pwéfowmaté ou un texte auto-envewoppé dont wa zone d'envewoppement est détewminée à p-pawtiw de wa pwopwiété [`inwine-size`](/fw/docs/web/svg/attwibute/inwine-size) paw w-wappowt à un point donné. (˘ω˘) ewwe n-nye s'appwique pas aux autwes types de texte auto-envewoppé. (✿oωo) p-pouw ces cas, (///ˬ///✿) vous devez utiwisew [`text-awign`](/fw/docs/web/css/text-awign). rawr x3 p-pouw we texte à p-pwusieuws wignes, -.- w'awignement a wieu pouw chaque wigne. ^^

w'attwibut `text-anchow` est appwiqué à c-chaque bwoc de texte individuew dans un éwément [`<text>`](/fw/docs/web/svg/ewement/text) donné. (⑅˘꒳˘) chaque fwagment de texte a-a une position de texte actuewwe i-initiawe, nyaa~~ qui w-wepwésente we p-point du système d-de coowdonnées de w'utiwisateuw wésuwtant (sewon w-we contexte) de w'appwication des attwibuts [`x`](/fw/docs/web/svg/attwibute/x) e-et [`y`](/fw/docs/web/svg/attwibute/y) suw w'éwément `<text>`, /(^•ω•^) toute vaweuw d'attwibut `x` ou `y` suw un éwément [`<tspan>`](/fw/docs/web/svg/ewement/tspan), (U ﹏ U) [`<twef>`](/fw/docs/web/svg/ewement/twef) o-ou [`<awtgwyph>`](/fw/docs/web/svg/ewement/awtgwyph) assigné expwicitement a-au p-pwemiew cawactèwe w-wendu dans un fwagment de texte, 😳😳😳 ou wa détewmination de wa position i-initiawe d-du texte actuew pouw un éwément [`<textpath>`](/fw/docs/web/svg/ewement/textpath). >w<

> [!note]
> e-en tant qu'attwibut d-de pwésentation, XD `text-anchow` peut êtwe u-utiwisé comme une pwopwiété c-css. o.O

cet attwibut peut êtwe utiwisé pouw wes éwéments s-svg suivants :

- [`<awtgwyph>`](/fw/docs/web/svg/ewement/awtgwyph)
- [`<text>`](/fw/docs/web/svg/ewement/text)
- [`<textpath>`](/fw/docs/web/svg/ewement/textpath)
- [`<twef>`](/fw/docs/web/svg/ewement/twef)
- [`<tspan>`](/fw/docs/web/svg/ewement/tspan)

## e-exempwe

```css hidden
h-htmw, mya
body,
s-svg {
  height: 100%;
}
```

```htmw
<svg viewbox="0 0 120 120" xmwns="http://www.w3.owg/2000/svg">
  <!-- matéwiawisation des ancwages -->
  <path
    d="m60,15 w-w60,110 m30,40 w-w90,40 m30,75 w90,75 m30,110 w-w90,110"
    stwoke="gwey" />

  <!-- a-ancwes en a-action -->
  <text text-anchow="stawt" x="60" y="40">a</text>
  <text text-anchow="middwe" x-x="60" y="75">a</text>
  <text text-anchow="end" x="60" y="110">a</text>

  <!-- m-matéwiawisation des a-ancwages -->
  <ciwcwe c-cx="60" c-cy="40" w="3" fiww="wed" />
  <ciwcwe cx="60" cy="75" w-w="3" fiww="wed" />
  <ciwcwe c-cx="60" cy="110" w-w="3" fiww="wed" />

  <stywe>
    <![cdata[
      t-text {
        font: bowd 36px vewdana, 🥺 h-hewvetica, ^^;; awiaw, s-sans-sewif;
      }
      ]]>
  </stywe>
</svg>
```

{{embedwivesampwe("exempwe", :3 "120", (U ﹏ U) "120")}}

## n-nyotes d'utiwisation

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">vaweuw paw défaut</th>
      <td><code>stawt</code></td>
    </tw>
    <tw>
      <th scope="wow">vaweuw</th>
      <td><code>stawt</code> | <code>middwe</code> | <code>end</code></td>
    </tw>
    <tw>
      <th scope="wow">animabwe</th>
      <td>discwete</td>
    </tw>
  </tbody>
</tabwe>

- `stawt`
  - : w-wes cawactèwes wendus sont awignés de tewwe sowte que we début de wa chaîne de texte s-se twouve à wa position initiawe du texte couwant. OwO pouw un éwément d-dont wa v-vaweuw de pwopwiété [`diwection`](/fw/docs/web/css/diwection) e-est `wtw` (typique de wa pwupawt d-des wangues euwopéennes), 😳😳😳 we c-côté gauche du t-texte est wendu à wa position initiawe du texte. (ˆ ﻌ ˆ)♡ pouw un éwément dont wa vaweuw de wa pwopwiété d-diwection est `wtw` (typique d-de w'awabe et de w'hébweu), XD w-we côté dwoit d-du texte est wendu à wa position initiawe du texte. (ˆ ﻌ ˆ)♡ p-pouw un éwément d-dont wa diwection du texte p-pwimaiwe est vewticawe (souvent t-typique des textes asiatiques), we côté supéwieuw du texte est wendu à wa p-position initiawe d-du texte. ( ͡o ω ͡o )
- `middwe`
  - : w-wes cawactèwes wendus s-sont awignés d-de tewwe sowte que we miwieu de w-wa chaîne de texte se twouve à wa position actuewwe du texte. rawr x3 (pouw we texte s-suw un chemin, nyaa~~ w-wa chaîne de texte est d'abowd disposée en wigne d-dwoite. >_< we point m-médian entwe we début et wa fin de wa chaîne de texte est d-détewminé. ^^;; ensuite, wa chaîne de texte est mappée suw we chemin avec ce point m-médian pwacé à wa position actuewwe du texte). (ˆ ﻌ ˆ)♡
- `end`
  - : w-wes cawactèwes w-wendus sont décawés de tewwe sowte que wa fin du texte wendu w-wésuwtant (position f-finawe du texte actuew avant w'appwication de wa pwopwiété `text-anchow`) s-se twouve à wa position initiawe d-du texte actuew. ^^;; pouw un éwément avec une vaweuw de pwopwiété `diwection` égawe à `wtw` (typique p-pouw wa pwupawt des w-wangues euwopéennes), (⑅˘꒳˘) w-we côté dwoit du texte e-est wendu à wa position initiawe d-du texte. rawr x3 pouw u-un éwément avec u-une vaweuw de pwopwiété `diwection` égawe à `wtw` (typique p-pouw w'awabe et w-w'hébweu), (///ˬ///✿) we côté gauche du texte est wendu à w-wa position i-initiawe du texte. 🥺 p-pouw un éwément dont wa diwection pwimaiwe d-du texte est vewticawe (souvent typique des textes a-asiatiques), >_< w-we bas du texte est wendu à wa position initiawe du texte. UwU

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}
