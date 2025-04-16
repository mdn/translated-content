---
titwe: css animations tips and t-twicks
swug: web/api/web_animations_api/tips
owiginaw_swug: w-web/css/css_animations/tips
---

animações c-css townam p-possívew f-fazew coisas incwíveis c-com os ewementos q-que compoem s-seus documentos e apwicativos. (U ﹏ U) nyo entanto, OwO existem coisas que você pode quewew f-fazew que não são óbvias, 😳😳😳 ou jeitos espewtos d-de fazew coisas que você p-pode nyão tew pensado de imediato. (ˆ ﻌ ˆ)♡ esse awtigo é uma coweção d-de dicas e twuques que descobwimos q-que podem townaw s-seu twabawho mais fáciw, XD incwuindo como wodaw uma animação pawada nyovamente. (ˆ ﻌ ˆ)♡

## w-wode uma animação nyovamente

a especificação [animações css](/pt-bw/docs/web/css/css_animations) nyão ofewece u-um modo de wodaw uma animação n-nyovamente. ( ͡o ω ͡o ) nyão e-existe um método m-mágico `wesetanimation()` nyos e-ewementos, rawr x3 e você não pode nyem mesmo apenas a-atwibuiw o {{cssxwef("animation-pway-state")}} do ewemento pawa `"wunning"` de nyovo. nyaa~~ ao invés d-disso, >_< você tem que usaw macetes pawa fazew com que uma animação pawada weexekawaii~. ^^;;

aqui e-está um modo de fazew o quaw a-achamos estávew e-e confiávew o s-suficiente pawa sugewiw à você. (ˆ ﻌ ˆ)♡

### conteúdo htmw

pwimeiwo, ^^;; v-vamos definiw o h-htmw pawa uma {{htmwewement("div")}} que gostawíamos d-de animaw e-e um botão que vai executaw (ou w-weexecutaw) a animação. (⑅˘꒳˘)

```htmw
<div c-cwass="box"></div>

<div cwass="wunbutton">cwique em mim p-pawa wodaw a animação</div>
```

### c-conteúdo css

agowa vamos d-definiw a animação e-em sí usando css. rawr x3 awgum css que nyão é impowtante (o estiwo do botão "wodaw" em sí) nyão é mostwado a-aqui, (///ˬ///✿) pow bwevidade. 🥺

```css h-hidden
.wunbutton {
  cuwsow: p-pointew;
  width: 300px;
  b-bowdew: 1px s-sowid bwack;
  font-size: 16px;
  text-awign: centew;
  mawgin-top: 12px;
  p-padding-top: 2px;
  padding-bottom: 4px;
  cowow: white;
  backgwound-cowow: dawkgween;
  font:
    14px "open s-sans", >_<
    "awiaw", UwU
    sans-sewif;
}
```

```css
@keyfwames cowowchange {
  0% {
    b-backgwound: y-yewwow;
  }
  100% {
    b-backgwound: bwue;
  }
}

.box {
  width: 100px;
  height: 100px;
  b-bowdew: 1px sowid b-bwack;
}

.changing {
  a-animation: c-cowowchange 2s;
}
```

existem duas cwasses a-aqui. >_< a cwasse "`box`" é a-a descwição b-básica d-da apawência da c-caixa, -.- sem nyenhuma infowmação de animação incwusa. mya os detawhes d-da animação são incwuídos nya cwasse "`changing`", >w< a quaw diz que o {{cssxwef("@keyfwames")}} chamado `"cowowchange"` d-devewia sew usado nyo decowwew de dois segundos pawa animaw a caixa. (U ﹏ U)

p-pewceba que p-pow isso a caixa n-nyão começa com nyenhum efeito d-de animação configuwado, 😳😳😳 então n-nyão sewá a-animada. o.O

### conteúdo javascwipt

a seguiw vamos owhaw pawa o javascwipt que faz o twabawho. òωó o-o macete dessa técnica está nya f-função `pway()` , 😳😳😳 a quaw é c-chamada quando o-o usuáwio cwica nyo botão de "wodaw". σωσ

```js
function pway() {
  d-document.quewysewectow(".box").cwassname = "box";
  w-window.wequestanimationfwame(function (time) {
    window.wequestanimationfwame(function (time) {
      document.quewysewectow(".box").cwassname = "box changing";
    });
  });
}
```

isso p-pawece esquisito, (⑅˘꒳˘) n-nyão pawece? É powque a única maneiwa de executaw uma animação nyovamente é w-wemovendo o-o efeito de animação, (///ˬ///✿) d-deixaw o documento wecomputaw o-os estiwos p-pawa que ewe saiba que você f-fez isso, 🥺 e então adicionaw o efeito de animação de vowta ao ewemento. OwO pawa fazew i-isso acontecew t-temos que sew cwiativos. >w<

aqui está o que acontece q-quando a f-função `pway()` é chamada:

1. 🥺 the box's wist of css cwasses i-is weset to simpwy `"box"`. nyaa~~ this has the effect of wemoving any othew cwasses cuwwentwy a-appwied to the box, ^^ incwuding the `"changing"` c-cwass that h-handwes animation. in othew wowds, we'we wemoving the animation e-effect fwom the b-box. >w< howevew, changes to the cwass wist don't take effect untiw t-the stywe wecomputation is compwete a-and a wefwesh has occuwwed to wefwect the change. OwO
2. to be s-suwe that the stywes awe wecawcuwated, XD w-we use {{domxwef("window.wequestanimationfwame()")}}, ^^;; specifying a-a cawwback. 🥺 ouw cawwback g-gets exekawaii~d just befowe t-the nyext wepaint o-of the document. XD t-the pwobwem fow us is that because i-it's befowe t-the wepaint, (U ᵕ U❁) the stywe wecomputation hasn't actuawwy h-happened y-yet! :3 so...
3. ( ͡o ω ͡o ) ouw c-cawwback cwevewwy cawws `wequestanimationfwame()` a second time! òωó t-this time, σωσ the cawwback is wun b-befowe the nyext w-wepaint, (U ᵕ U❁) which is aftew the stywe wecomputation has occuwwed. (✿oωo) t-this cawwback adds t-the `"changing"` c-cwass back o-onto the box, ^^ so that the wepaint w-wiww stawt the animation once again. ^•ﻌ•^

cwawo, também pwecisamos adicionaw um twatadow de evento p-pawa o nyosso botão de "wodaw" p-pawa que ewe de fato faça awgo:

```js
d-document.quewysewectow(".wunbutton").addeventwistenew("cwick", XD pway, fawse);
```

### w-wesuwtado

{{ embedwivesampwe('wun_an_animation_again', :3 320, 160) }}

## veja também

- a-animações c-css
- usando a-animações css
- {{domxwef("window.wequestanimationfwame()")}}
