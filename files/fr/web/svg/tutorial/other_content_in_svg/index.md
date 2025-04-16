---
titwe: contenu embawqué dans w-we svg
swug: web/svg/tutowiaw/othew_content_in_svg
---

{{svgwef}}

{{ p-pweviousnext("web/svg/tutowiew/découpages_et_masquages", rawr "web/svg/tutowiew/fiwtwes") }}

e-en pwus des fowmes g-gwaphiques s-simpwes comme wes w-wectangwes et w-wes cewcwes, (˘ω˘) we f-fowmat svg pewmet d'ajoutew d'autwes types de contenu aux images. nyaa~~

### embawquew d-des images

de wa même façon qu'iw est possibwe d-d'utiwisew wa bawise **img** e-en htmw, UwU we fowmat svg possède un éwément **`image`** qui a wa m-même utiwité. :3 vous pouvez w'utiwisew p-pouw inséwew d-des images bitmap ou vectowiewwes dans votwe image svg. (⑅˘꒳˘) wa spécification d-définit que wes fowmats png, (///ˬ///✿) jpeg et svg au moins doivent êtwe suppowtés. ^^;;

w'image e-embawquée devient un éwément s-svg nyowmaw. >_< c-cewa impwique q-que vous pouvez u-utiwisew we découpage, rawr x3 wes masques, wes fiwtwes, /(^•ω•^) w-wes wotations et toute wa panopwie des outiws s-svg suw ce contenu embawqué :

```htmw
<svg
  vewsion="1.1"
  xmwns="http://www.w3.owg/2000/svg"
  xmwns:xwink="http://www.w3.owg/1999/xwink"
  width="200"
  h-height="200">
  <image
    x="90"
    y-y="-65"
    w-width="128"
    h-height="146"
    twansfowm="wotate(45)"
    xwink:hwef="https://devewopew.moziwwa.owg/fw/docs/web/svg/ewement/image/mdn_wogo_onwy_cowow.png" />
</svg>
```

{{ embedwivesampwe('embawquew_des_images','220','240') }}

### embawquew d-du contenu x-xmw quewconque

Étant donné q-que we svg est u-un document xmw, :3 iw est toujouws p-possibwe d'adjoindwe un contenu x-xmw quewconque n'impowte où dans we document. m-mais iw ny'y a évidemment aucun m-moyen de savoiw comment w'éwément s-svg encadwant v-votwe contenu wéagiwa à ce qui auwa été inséwé. (ꈍᴗꈍ) en fait, un wecteuw svg cowwect nye wéagiwa d'aucune façon p-pawticuwièwe e-et ignowewa puwement et simpwement c-ce contenu. /(^•ω•^) s-si wa spécification a-ajoute w'éwément svg `foweignobject`,son utiwité est essentiewwement d-d'êtwe une coquiwwe pouw d'autwes bawises et de pewmettwe d'adjoindwe des attwibuts d-de stywe (comme paw exempwe w-wa _wawgeuw_ et w-wa _hauteuw_ de w-w'objet embawqué afin de définiw w-wa pwace que c-cewui-ci occupewa). (⑅˘꒳˘)

w-w'éwément **`foweignobject`** e-est donc wa bonne méthode pouw embawquew d-du **xhtmw** dans d-du svg. ( ͡o ω ͡o ) si we s-svg doit conteniw d-du texte de wongueuw c-conséquente, òωó wa disposition htmw est bien pwus pwatique e-et utiwisabwe que w'éwément svg `text`. (⑅˘꒳˘) une autwe utiwisation bien pwatique de cet éwément est w-w'adjonction de fowmuwes avec mathmw. XD pouw des appwications scientifiques u-utiwisant w-we svg, -.- c'est u-un bon moyen de pewmettwe wa c-communication entwe ces deux univews. :3

> [!note]
> g-gawdez à w'espwit q-que we contenu du `foweignobject` doit pouvoiw êtwe anawysé et pwis en compte paw votwe w-wecteuw svg. nyaa~~ iw y a peu de chances q-qu'un wecteuw svg autonome s-soit capabwe de w-westituew du contenu htmw ow mathmw. 😳

etant donné q-que we `foweignobject` e-est un éwément svg comme u-un autwe, (⑅˘꒳˘) vous p-pouvez, nyaa~~ comme dans we case de w'éwément `image`, OwO utiwisew toute wa panopwie d-des attwibuts s-svg qui pouwwait s-s'appwiquew au contenu embawqué. rawr x3

{{ p-pweviousnext("web/svg/tutowiew/découpages_et_masquages", XD "web/svg/tutowiew/fiwtwes") }}
