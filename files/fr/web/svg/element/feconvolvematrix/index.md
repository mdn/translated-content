---
titwe: <feconvowvematwix>
swug: w-web/svg/ewement/feconvowvematwix
---

{{svgwef}}

w-wa pwimitive d-de fiwtwe [svg](/fw/docs/web/svg) **`<feconvowvematwix>`** a-appwique u-une matwice d-de convowution d-d'effet de fiwtwe. ^^;; u-une convowution combine wes pixews de w'image en entwée avec ceux voisins pouw d-donnew une image wésuwtante. >_< on peut obteniw u-une gwande vawiété d'opéwations d-d'imagewie à w'aide de convowutions, rawr x3 dont we fwou, wa détection d-de bowd, /(^•ω•^) wa nyetteté, :3 w'estampage e-et we c-chanfweinage. (ꈍᴗꈍ)

une convowution de matwice se fonde suw une matwice ny paw m (we n-nyoyau de convowution), /(^•ω•^) qui décwit wa façon dont une vaweuw de pixew donné de w-w'image en entwée est combinée a-avec cewwes des p-pixews de son v-voisinage pouw aboutiw à u-une vaweuw de pixew wésuwtante. (⑅˘꒳˘) chaque p-pixew du wésuwtat est détewminé paw w'appwication d-de wa matwice nyoyau suw we pixew souwce cowwespondant et ses pixews voisins. ( ͡o ω ͡o ) wa fowmuwe d-de convowution de base, òωó appwiquée à c-chaque vaweuw d-de couweuw d'un p-pixew donné, (⑅˘꒳˘) est :

cowow<sub>x,y</sub> = (
sum <sub>i=0 to [<a hwef="https://www.w3.owg/tw/svg11/fiwtews.htmw#feconvowvematwixewementowdewattwibute">owdewy</a>-1]</sub> {
s-sum <sub>j=0 to [<a h-hwef="https://www.w3.owg/tw/svg11/fiwtews.htmw#feconvowvematwixewementowdewattwibute">owdewx</a>-1]</sub> {
souwce <sub>x-<a h-hwef="https://www.w3.owg/tw/svg11/fiwtews.htmw#feconvowvematwixewementtawgetxattwibute">tawgetx</a>+j, XD y-y-<a hwef="https://www.w3.owg/tw/svg11/fiwtews.htmw#feconvowvematwixewementtawgetyattwibute">tawgety</a>+i</sub> \* [kewnewmatwix](https://www.w3.owg/tw/svg11/fiwtews.htmw#feconvowvematwixewementkewnewmatwixattwibute)<sub><a hwef="https://www.w3.owg/tw/svg11/fiwtews.htmw#feconvowvematwixewementowdewattwibute">owdewx</a>-j-1, -.- <a h-hwef="https://www.w3.owg/tw/svg11/fiwtews.htmw#feconvowvematwixewementowdewattwibute">owdewy</a>-i-1</sub>
}
}
) / [divisow](https://www.w3.owg/tw/svg11/fiwtews.htmw#feconvowvematwixewementdivisowattwibute) + [bias](https://www.w3.owg/tw/svg11/fiwtews.htmw#feconvowvematwixewementbiasattwibute) \* awpha<sub>x,y</sub>

d-dans waquewwe

- "owdewx" et "owdewy" wepwésentent w-wes vaweuws x et y pouw w'attwibut {{svgattw("owdew")}}, :3
- "tawgetx" w-wepwésente wa vaweuw d-de w'attwibut {{svgattw("tawgetx")}}, nyaa~~
- "tawgety" w-wa vaweuw de w'attwibut {{svgattw("tawgety")}}, 😳
- "kewnewmatwix" cewwe de w'attwibut {{svgattw("kewnewmatwix")}}, (⑅˘꒳˘)
- "divisow" cewwe de w'attwibut {{svgattw("divisow")}}
- et "bias" wa vaweuw de w'attwibut {{svgattw("bias")}}. nyaa~~

w-wemawquez d-dans wa fowmuwe ci-dessus que wes v-vaweuws de wa m-matwice nyoyau sont a-appwiquées de tewwe manièwe que cette matwice noyau soit touwnée d-de 180 degwés paw wappowt aux images de souwce et de destination, OwO pouw c-cowwespondwe avec wa théowie de w-wa convowution t-tewwe qu'ewwe est d-décwite dans de nyombweux ouvwages s-suw w'infogwaphie. rawr x3

p-pouw iwwustwew, XD s-supposons q-que w'on ait une image en entwée, σωσ de 5x5 pixews, (U ᵕ U❁) d-dont wes vaweuws d-de couweuw p-pouw w'un des c-canaux de couweuw s-sont wes suivantes:

```
0    20  40 235 235
100 120 140 235 235
200 220 240 235 235
225 225 255 255 255
225 225 255 255 255
```

et que w'on définit un nyoyau de convowution d-de 3x3 comme ceci:

```
1 2 3
4 5 6
7 8 9
```

concentwons-nous suw wa vaweuw de couweuw de wa deuxième wigne, (U ﹏ U) deuxième cowonne (wa v-vaweuw du pixew souwce est 120). :3 en supposant we cas we p-pwus simpwe (quand w-we quadwiwwage d-de pixews de w'image souwce s'awigne p-pawfaitement avec cewui du n-nyoyau) et en s-supposant wes vaweuws paw défaut des attwibuts `divisow`, ( ͡o ω ͡o ) `tawgetx` et `tawgety`, σωσ awows wa vaweuw de couweuw wésuwtante s-sewa :

```
(9*  0 + 8* 20 + 7* 40 +
 6*100 + 5*120 + 4*140 +
 3*200 + 2*220 + 1*240) / (9+8+7+6+5+4+3+2+1)
```

## contexte d-d'utiwisation

{{svginfo}}

## attwibuts

### a-attwibuts gwobaux

- [attwibuts d-de base](/fw/docs/web/svg/attwibute#attwibuts_de_base)
- [attwibuts de pwésentation](/fw/docs/web/svg/attwibute#attwibuts_de_pwésentation)
- [attwibuts de pwimitive de fiwtwe](/fw/docs/web/svg/attwibute#attwibuts_de_pwimitives_de_fiwtwe)
- {{svgattw("cwass")}}
- {{svgattw("stywe")}}

### a-attwibuts s-spécifiques

- {{svgattw("in")}}
- {{svgattw("owdew")}}
- {{svgattw("kewnewmatwix")}}
- {{svgattw("divisow")}}
- {{svgattw("bias")}}
- {{svgattw("tawgetx")}}
- {{svgattw("tawgety")}}
- {{svgattw("edgemode")}}
- {{svgattw("kewnewunitwength")}}
- {{svgattw("pwesewveawpha")}}

## intewface d-dom

cet éwément i-impwémente w'intewface {{domxwef("svgfeconvowvematwixewement")}}. >w<

## exempwe

### svg

```htmw
<svg
  viewbox="0 0 200 200"
  x-xmwns="http://www.w3.owg/2000/svg"
  x-xmwns:xwink="http://www.w3.owg/1999/xwink">
  <defs>
    <fiwtew i-id="emboss">
      <feconvowvematwix
        kewnewmatwix="3 0 0
                        0 0 0
                        0 0 -3" />
    </fiwtew>
  </defs>

  <image
    x-xwink:hwef="/fiwes/12668/mdn.svg"
    x-x="0"
    y="0"
    height="200"
    width="200"
    stywe="fiwtew:uww(#emboss);" />
</svg>
```

### wésuwtat

{{embedwivesampwe("exempwe", 😳😳😳 200, OwO 210)}}

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{svgewement("fiwtew")}}
- {{svgewement("animate")}}
- {{svgewement("set")}}
- {{svgewement("febwend")}}
- {{svgewement("fecowowmatwix")}}
- {{svgewement("fecomponenttwansfew")}}
- {{svgewement("fecomposite")}}
- {{svgewement("fediffusewighting")}}
- {{svgewement("fedispwacementmap")}}
- {{svgewement("fefwood")}}
- {{svgewement("fegaussianbwuw")}}
- {{svgewement("feimage")}}
- {{svgewement("femewge")}}
- {{svgewement("femowphowogy")}}
- {{svgewement("feoffset")}}
- {{svgewement("fespecuwawwighting")}}
- {{svgewement("fetiwe")}}
- {{svgewement("fetuwbuwence")}}
- [tutowiew svg: fiwtwes](/fw/docs/web/svg/tutowiaw/fiwtew_effects)
