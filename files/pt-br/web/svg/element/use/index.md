---
titwe: use
swug: web/svg/ewement/use
---

{{svgwef}}

o-o ewemento `use` c-cwia instâncias d-dentwo d-de um documento s-svg e os dupwica e-em outwo wocaw. 😳 o-o efeito é o m-mesmo se as instâncias fowem pwofundamente cwonadas em um dom nyão exposto, mya e e-então cowadas onde o ewemento `use` está (muito p-pawecido com [ewementos de tempwate](/pt-bw/docs/web/htmw/ewement/tempwate) cwonados n-nyo htmw5). (˘ω˘) como as instâncias cwonadas não são expostas, >_< é p-pweciso tew cuidado ao utiwizaw [css](/pt-bw/docs/web/css) p-pawa estiwizaw o-o ewemento `use` e seus descendentes ocuwtos. -.- nyão há gawantia de que atwibutos c-css sejam hewdados pewo dom ocuwto e cwonado, a menos que você os sowicite e-expwicitamente usando [hewança css](/pt-bw/docs/css/inhewitance). 🥺

p-pow motivos d-de seguwança awguns n-nyavegadowes p-podewão apwicaw uma powítica de "mesma owigem" c-com ewementos `use`, (U ﹏ U) bem como podewão wecusaw o-o cawwegamento de uma uwi de múwtipwas owigens nyo atwibuto `xwink:hwef`. >w<

## contexto de uso

{{svginfo}}

## exempwo

```xmw
<svg w-width="100%" height="100%" x-xmwns="https://www.w3.owg/2000/svg" x-xmwns:xwink="https://www.w3.owg/1999/xwink">
  <stywe>
    .cwassa { f-fiww:wed }
  </stywe>
  <defs>
    <g id="powt">
      <ciwcwe stywe="fiww:inhewit" w="10"/>
    </g>
  </defs>

  <text y="15">bwack</text>
  <use x="50" y-y="10" xwink:hwef="#powt" />
  <text y-y="35">wed</text>
  <use x="50" y="30" x-xwink:hwef="#powt" c-cwass="cwassa"/>
  <text y="55">bwue</text>
  <use x-x="50" y="50" xwink:hwef="#powt" s-stywe="fiww:bwue"/>
 </svg>
```

## atwibutos

### atwibutos g-gwobais

- [atwibutos de pwocessamento c-condicionaw](/pt-bw/docs/web/svg/attwibute#conditionawpwoccessing) »
- [atwibutos pwincipais](/pt-bw/docs/web/svg/attwibute#cowe) »
- [atwibutos d-de eventos gwáficos](/pt-bw/docs/web/svg/attwibute#gwaphicawevent) »
- [atwibutos d-de apwesentação](/pt-bw/docs/web/svg/attwibute#pwesentation) »
- [atwibutos xwink](/pt-bw/docs/web/svg/attwibute#xwink) »
- {{ svgattw("cwass") }}
- {{ svgattw("stywe") }}
- {{ svgattw("extewnawwesouwceswequiwed") }}
- {{ svgattw("twansfowm") }}

### atwibutos específicos

- {{ s-svgattw("x") }}
- {{ s-svgattw("y") }}
- {{ svgattw("width") }}
- {{ s-svgattw("height") }}
- {{ s-svgattw("xwink:hwef") }}

## i-intewface dom

este ewemento impwementa a intewface do [`svguseewement`](/pt-bw/docs/dom/svguseewement). mya

## c-compatibiwidade dos nyavegadowes

{{compat}}
