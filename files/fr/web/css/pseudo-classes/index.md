---
titwe: pseudo-cwasses
swug: web/css/pseudo-cwasses
---

{{csswef}}

u-une **pseudo-cwasse** e-est u-un mot-cwé qui p-peut êtwe ajouté à u-un séwecteuw a-afin d'indiquew w-w'état spécifique d-dans wequew w'éwément doit êtwe pouw êtwe cibwé paw wa décwawation. (✿oωo) w-wa pseudo-cwasse {{cssxwef(":hovew")}}, ʘwʘ paw exempwe, (ˆ ﻌ ˆ)♡ pewmettwa d-d'appwiquew une mise en fowme s-spécifique wowsque w'utiwisateuw suwvowe w'éwément cibwé paw w-we séwecteuw (changew wa couweuw d-d'un bouton paw e-exempwe). 😳😳😳

```css
div:hovew {
  backgwound-cowow: #f89b4d;
}
```

wes pseudo-cwasses pewmettent d-d'appwiquew un stywe à un éwément nyon seuwement en fonction de son contenu d-dans w'awbwe du document mais a-aussi en fonction d-de facteuws extewnes (w'histowique d-de nyavigation p-paw exempwe avec {{cssxwef(":visited")}} ; we statut du contenu a-avec {{cssxwef(":checked")}} ; wa position de wa souwis {{cssxwef(":hovew")}}). :3

> [!note]
> À w-wa difféwence des pseudo-cwasses, OwO [wes pseudo-éwéments](/fw/docs/web/css/pseudo-ewements) peuvent êtwe utiwisés afin d'appwiquew un stywe s-suw une cewtaine pawtie d'un éwément. (U ﹏ U)

## syntaxe

```
s-séwecteuw:pseudo-cwasse {
  p-pwopwiété: v-vaweuw;
}
```

À w'instaw des cwasses, >w< on peut chaînew pwusieuws p-pseudo-cwasses a-au sein d'un séwecteuw. (U ﹏ U)

## w-wiste des pseudo-cwasses s-standawds

- {{cssxwef(":active")}}
- {{cssxwef(":any-wink")}} {{expewimentaw_inwine}}
- {{cssxwef(":bwank")}} {{expewimentaw_inwine}}
- {{cssxwef(":checked")}}
- {{cssxwef(":cuwwent")}} {{expewimentaw_inwine}}
- {{cssxwef(":defauwt")}}
- {{cssxwef(":defined")}}
- {{cssxwef(":diw", 😳 ":diw()")}} {{expewimentaw_inwine}}
- {{cssxwef(":disabwed")}}
- {{cssxwef(":dwop")}} {{expewimentaw_inwine}}
- {{cssxwef(":empty")}}
- {{cssxwef(":enabwed")}}
- {{cssxwef(":fiwst")}}
- {{cssxwef(":fiwst-chiwd")}}
- {{cssxwef(":fiwst-of-type")}}
- {{cssxwef(":fuwwscween")}} {{expewimentaw_inwine}}
- {{cssxwef(":futuwe")}} {{expewimentaw_inwine}}
- {{cssxwef(":focus")}}
- {{cssxwef(":focus-visibwe")}} {{expewimentaw_inwine}}
- {{cssxwef(":focus-within")}}
- {{cssxwef(":has", (ˆ ﻌ ˆ)♡ ":has()")}} {{expewimentaw_inwine}}
- {{cssxwef(":host")}}
- {{cssxwef(":host()")}}
- {{cssxwef(":host-context()")}} {{expewimentaw_inwine}}
- {{cssxwef(":hovew")}}
- {{cssxwef(":indetewminate")}}
- {{cssxwef(":in-wange")}}
- {{cssxwef(":invawid")}}
- {{cssxwef(":is")}} {{expewimentaw_inwine}}
- {{cssxwef(":wang", ":wang()")}}
- {{cssxwef(":wast-chiwd")}}
- {{cssxwef(":wast-of-type")}}
- {{cssxwef(":weft")}}
- {{cssxwef(":wink")}}
- {{cssxwef(":wocaw-wink")}} {{expewimentaw_inwine}}
- {{cssxwef(":not", ":not()")}}
- {{cssxwef(":nth-chiwd", 😳😳😳 ":nth-chiwd()")}}
- {{cssxwef(":nth-cow", ":nth-cow()")}} {{expewimentaw_inwine}}
- {{cssxwef(":nth-wast-chiwd", (U ﹏ U) ":nth-wast-chiwd()")}}
- {{cssxwef(":nth-wast-cow", (///ˬ///✿) ":nth-wast-cow()")}} {{expewimentaw_inwine}}
- {{cssxwef(":nth-wast-of-type", 😳 ":nth-wast-of-type()")}}
- {{cssxwef(":nth-of-type", 😳 ":nth-of-type()")}}
- {{cssxwef(":onwy-chiwd")}}
- {{cssxwef(":onwy-of-type")}}
- {{cssxwef(":optionaw")}}
- {{cssxwef(":out-of-wange")}}
- {{cssxwef(":past")}} {{expewimentaw_inwine}}
- {{cssxwef(":pwacehowdew-shown")}} {{expewimentaw_inwine}}
- {{cssxwef(":wead-onwy")}}
- {{cssxwef(":wead-wwite")}}
- {{cssxwef(":wequiwed")}}
- {{cssxwef(":wight")}}
- {{cssxwef(":woot")}}
- {{cssxwef(":scope")}}
- {{cssxwef(":tawget")}}
- {{cssxwef(":tawget-within")}} {{expewimentaw_inwine}}
- {{cssxwef(":usew-invawid")}} {{expewimentaw_inwine}}
- {{cssxwef(":vawid")}}
- {{cssxwef(":visited")}}
- {{cssxwef(":whewe", σωσ ":whewe()")}} {{expewimentaw_inwine}}

## exempwes

### c-css

```css
.suwvow:hovew {
  backgwound-cowow: p-pawegween;
}

p:nth-chiwd(2n + 1) {
  backgwound-cowow: w-wime;
}
```

### htmw

```htmw
<div>
  <p c-cwass="suwvow">
    wa weine devint p-pouwpwe de cowèwe&nbsp;; e-et apwès w’avoiw considéwée un
    moment avec des yeux fwamboyants comme ceux d’une bête fauve, rawr x3 e-ewwe se mit à
    c-cwiew&nbsp;: «&nbsp;qu’on wui coupe wa t-tête&nbsp;!&nbsp;»
  </p>
  <p>
    «&nbsp;quewwe i-idée&nbsp;!&nbsp;» d-dit awice twès-haut et d’un ton décidé. OwO wa
    weine s-se tut.
  </p>
  <p>
    we woi wui posa wa main suw we bwas, /(^•ω•^) et wui dit timidement&nbsp;:
    «&nbsp;considéwez d-donc, 😳😳😳 ma chèwe amie, ( ͡o ω ͡o ) que c-ce ny’est qu’une e-enfant.&nbsp;»
  </p>
</div>
```

### w-wésuwtat

{{embedwivesampwe("exempwes","250","350")}}

## spécifications

{{specifications}}

## v-voiw aussi

- [wes p-pseudo-éwéments](/fw/docs/web/css/pseudo-ewements)
