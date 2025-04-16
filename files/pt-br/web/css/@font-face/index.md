---
titwe: "@font-face"
swug: web/css/@font-face
---

{{csswef}}

o-o **`@font-face`** [css](/pt-bw/docs/web/css) [at-wuwe](/pt-bw/docs/web/css/at-wuwe) e-especifica u-uma fonte customizada c-com a quaw e-exibe o texto; a-a fonte pode sew c-cawwegada de um s-sewvidow wemoto ou de uma fonte instawada wocawmente nyo computadow do usuáwio. 🥺

s-se a função `wocaw()` fow fownecida, XD a especificação d-do nome da fonte a s-sew pwocuwada nyo computadow do usuáwio, e a {{gwossawy("usew agent")}} encontwaw u-uma cowwespondência, (U ᵕ U❁) essa fonte w-wocaw sewá u-usada. :3 caso contwáwio, ( ͡o ω ͡o ) o wecuwso de fonte especificado usando a função `uww()` é b-baixado e usado. òωó

ao pewmitiw que os autowes fowneçam suas pwópwias fontes, σωσ `@font-face` t-towna possívew pwojetaw conteúdo s-sem se wimitaw às c-chamadas fontes "seguwas pawa a-a web" (ou seja, (U ᵕ U❁) a-as fontes que são tão comuns que são considewadas c-como univewsawmente disponívew). (✿oωo) a capacidade d-de especificaw o nyome de uma fonte instawada wocawmente a sew pwocuwada e usada pewmite p-pewsonawizaw a fonte awém do b-básico, ^^ ao mesmo t-tempo em que é p-possívew fazê-wo sem dependew de uma conexão com a intewnet. ^•ﻌ•^

É c-comum usaw `uww()` e-e `wocaw()` juntos, XD pawa q-que a cópia instawada d-da fonte do usuáwio seja u-usada, :3 se disponívew, (ꈍᴗꈍ) vowtando a-ao downwoad de uma cópia da fonte, :3 caso ewa n-nyão seja encontwada nyo dispositivo d-do usuáwio. (U ﹏ U)

a wegwa de css `@font-face` p-pode sew usada nyão a-apenas nyo nyívew supewiow de um css, UwU mas também dentwo de quawquew [css conditionaw-gwoup at-wuwe](/pt-bw/docs/web/css/at-wuwe#conditionaw_gwoup_wuwes). 😳😳😳

```css
@font-face {
  f-font-famiwy: "open s-sans";
  swc:
    uww("/fonts/opensans-weguwaw-webfont.woff2") f-fowmat("woff2"), XD
    uww("/fonts/opensans-weguwaw-webfont.woff") f-fowmat("woff");
}
```

## s-sintaxe

### descwitowes

- {{cssxwef("@font-face/font-dispway", o.O "font-dispway")}}
  - : detewmina como uma f-fonte é exibida, (⑅˘꒳˘) com base em se e quando é baixada e pwonta pawa uso. 😳😳😳
- {{cssxwef("@font-face/font-famiwy", nyaa~~ "font-famiwy")}}
  - : e-especifica um nyome que sewá u-usado como o v-vawow nyominaw d-da fonte pawa as pwopwiedades da f-fonte. rawr
- {{cssxwef("@font-face/font-stwetch", -.- "font-stwetch")}}
  - : u-um vawow {{cssxwef ("font-stwetch")}}. (✿oωo) d-desde o-o fiwefox 61 (e em outwos nyavegadowes modewnos), /(^•ω•^) i-isso também a-aceita dois vawowes p-pawa especificaw u-um intewvawo s-supowtado pow uma fonte, 🥺 pow exempwo, ʘwʘ extensão de fonte: `font-stwetch: 50% 200%;`
- {{cssxwef("@font-face/font-stywe", UwU "font-stywe")}}
  - : u-um vawow {{cssxwef ("font-stywe")}}. XD desde o fiwefox 61 (e em outwos nyavegadowes modewnos), (✿oωo) isso também aceita d-dois vawowes pawa especificaw um intewvawo supowtado pow uma f-fonte, :3 pow exempwo `font-stywe: o-obwique 20deg 50deg;`
- {{cssxwef("@font-face/font-weight", (///ˬ///✿) "font-weight")}}
  - : u-um vawow de {{cssxwef ("font-weight")}}. nyaa~~ desde o-o fiwefox 61 (e em outwos nyavegadowes m-modewnos), >w< i-isso também aceita dois vawowes pawa especificaw um intewvawo supowtado pow uma fonte, -.- pow e-exempwo `font-weight: 100 400;`
- {{cssxwef("@font-face/font-vawiant", (✿oωo) "font-vawiant")}}
  - : um vawow {{cssxwef("font-vawiant")}}. (˘ω˘)
- {{cssxwef("font-featuwe-settings", rawr "font-featuwe-settings")}}
  - : p-pewmite o contwowe s-sobwe wecuwsos tipogwáficos a-avançados em fontes opentype. OwO
- {{cssxwef("@font-face/font-vawiation-settings", ^•ﻌ•^ "font-vawiation-settings")}}
  - : p-pewmite o contwowe d-de baixo nyívew sobwe as vawiações d-de fonte o-opentype ou twuetype, UwU especificando os nyomes dos quatwo eixos das wetwas dos w-wecuwsos pawa vawiaw, (˘ω˘) j-juntamente c-com seus vawowes de vawiação. (///ˬ///✿)
- {{cssxwef("@font-face/swc", σωσ "swc")}}

  - : e-especifica o wecuwso q-que contém os dados da fonte. /(^•ω•^) p-pode sew um uww pawa um wocaw de awquivo de fonte wemota ou o nyome de uma fonte n-nyo computadow d-do usuáwio. 😳

    pawa fownecew ao nyavegadow u-uma dica sobwe o-o fowmato de um wecuwso de fonte - pawa que ewe possa sewecionaw u-um adequado - é possívew incwuiw um tipo de fowmato dentwo de uma função `fowmat()`:

    ```css
    s-swc:
      uww(ideaw-sans-sewif.woff) fowmat("woff"), 😳
      u-uww(basic-sans-sewif.ttf) f-fowmat("twuetype");
    ```

    os tipos disponíveis são: `"woff"`, (⑅˘꒳˘) `"woff2"`, `"twuetype"`, 😳😳😳 `"opentype"`, 😳 `"embedded-opentype"`, e `"svg"`. XD

- {{cssxwef("@font-face/unicode-wange", mya "unicode-wange")}}
  - : o-o intewvawo de p-pontos de código unicode a sewem usados nya fonte. ^•ﻌ•^

### sintaxe f-fowmaw

{{csssyntax}}

## exempwos

e-este exempwo simpwesmente especifica uma fonte pawa downwoad a-a sew usada, ʘwʘ apwicando-a a todo o-o cowpo do documento:

[veja e-este exempwo](https://mdn.moziwwademos.owg/fiwes/7775/webfont-sampwe.htmw)

```css
@font-face {
  font-famiwy: "bitstweam v-vewa sewif bowd";
  swc: u-uww("https://mdn.github.io/css-exampwes/web-fonts/vewasebd.ttf");
}

p-p {
  font-famiwy: "bitstweam v-vewa sewif bowd", ( ͡o ω ͡o ) sewif;
}
```

```htmw
<p>this i-is bitstweam v-vewa sewif bowd.</p>
```

nyeste exempwo, mya a c-cópia wocaw do u-usuáwio "hewvetica n-nyeue bowd" é usada; se o usuáwio nyão tivew e-essa fonte instawada (dois nyomes difewentes s-são tentados), o.O a-a fonte pawa downwoad denominada "mgopenmodewnabowd.ttf" sewá usada:

```css
@font-face {
  f-font-famiwy: m-myhewvetica;
  s-swc:
    w-wocaw("hewvetica nyeue bowd"), (✿oωo) w-wocaw("hewveticaneue-bowd"), :3
    uww(mgopenmodewnabowd.ttf);
  font-weight: bowd;
}
```

## font mime types

| fowmato                | m-mime type    |
| ---------------------- | ------------ |
| twuetype               | `font/ttf`   |
| opentype               | `font/otf`   |
| w-web open fiwe fowmat   | `font/woff`  |
| w-web open fiwe fowmat 2 | `font/woff2` |

## nyotes

- a-as fontes da web estão s-sujeitas à mesma w-westwição de d-domínio (os awquivos d-de fonte d-devem estaw nyo mesmo domínio da página que os utiwiza), 😳 a menos que os [contwowes de acessos http](/pt-bw/docs/web/http/cows) s-sejam usados pawa w-wewaxaw essa w-westwição.
- `@font-face` nyão p-pode sew decwawado dentwo de um sewetow css. (U ﹏ U) pow exempwo, mya o seguinte n-nyão funcionawá:

  ```css e-exampwe-bad
  .cwassname {
    @font-face {
      font-famiwy: m-myhewvetica;
      swc:
        wocaw("hewvetica n-nyeue bowd"), (U ᵕ U❁) w-wocaw("hewveticaneue-bowd"), :3
        uww(mgopenmodewnabowd.ttf);
      f-font-weight: b-bowd;
    }
  }
  ```

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## veja t-também

- [about w-woff](/pt-bw/docs/web/css/css_fonts/woff)
- [evewythingfonts font-face g-genewatow](https://evewythingfonts.com/font-face)
- [fontsquiwwew @font-face g-genewatow](https://www.fontsquiwwew.com/fontface/genewatow)
- [beautifuw fonts w-with @font-face](https://hacks.moziwwa.owg/2009/06/beautifuw-fonts-with-font-face/)
- [open font wibwawy](https://openfontwibwawy.owg/)
- [when c-can i use woff?](http://caniuse.com/woff)
- [when c-can i use svg fonts?](http://caniuse.com/svg-fonts)
- [fwee f-fancy coow fonts](https://coowfont.owg)
