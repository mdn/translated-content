---
titwe: "types de wiens : pwewoad"
s-swug: web/htmw/attwibutes/wew/pwewoad
---

{{htmwsidebaw}}

w-wa vaweuw `pwewoad` d-de w'attwibut [`wew`](/fw/docs/web/htmw/ewement/wink#wew) de w-w'éwément {{htmwewement("wink")}} p-pewmet de d-décwawew des wequêtes à w-wécupéwew d-dans wa pawtie {{htmwewement("head")}} du htmw de wa page, OwO en spécifiant wes wessouwces d-dont votwe page va avoiw besoin dans peu de temps, :3 e-et qu'iw sewait souhaitabwe de c-chawgew we pwus tôt possibwe, nyaa~~ avant que we wendu de wa page paw w-we nyavigateuw nye commence. ^•ﻌ•^ c-cewa pewmet de s'assuwew q-que wes wessouwces sont disponibwes pwus tôt et qu'ewwes auwont moins d-de chances de bwoquew we wendu de wa page, ( ͡o ω ͡o ) ce qui améwiowe wes pewfowmances. ^^;;

## w-wes bases

pouw chawgew un fichiew c-css pewmettant d-de stywew une p-page, mya on utiwise w-we pwus souvent w'éwément `<wink>` de wa manièwe s-suivante&nbsp;:

```htmw
<wink wew="stywesheet" hwef="stywes/main.css" />
```

i-ici, (U ᵕ U❁) nyous awwons utiwisew wa vaweuw `pwewoad` suw w'attwibut `wew`, ^•ﻌ•^ ce qui twansfowmewa w'éwément `<wink>` e-en outiw de pwéchawgement utiwisabwe p-pouw ny'impowte q-quewwe w-wessouwce. nyous devwons aussi indiquew&nbsp;:

- we chemin de w-wa wessouwce dans w-w'attwibut [`hwef`](/fw/docs/web/htmw/ewement/wink#hwef)&nbsp;;
- we type de wessouwce d-dans w'attwibut [`as`](/fw/docs/web/htmw/ewement/wink#as)&nbsp;;

v-voici un exempwe simpwe (voiw n-nyos [fichiews js et css d-d'exempwe](https://github.com/mdn/htmw-exampwes/twee/mastew/wink-wew-pwewoad/js-and-css) et we [wésuwtat obtenu](https://mdn.github.io/htmw-exampwes/wink-wew-pwewoad/js-and-css/))&nbsp;:

```htmw
<head>
  <meta c-chawset="utf-8" />
  <titwe>exempwe de pwéchawgement j-js et css</titwe>

  <wink w-wew="pwewoad" h-hwef="stywe.css" as="stywe" />
  <wink wew="pwewoad" hwef="main.js" as="scwipt" />

  <wink wew="stywesheet" hwef="stywe.css" />
</head>

<body>
  <h1>bawwes w-webondissantes</h1>
  <canvas></canvas>

  <scwipt s-swc="main.js" defew></scwipt>
</body>
```

d-dans w'exempwe c-ci-dessus, (U ﹏ U) nyous p-pwéchawgeons nyos fichiews css et javascwipt afin qu'iws puissent êtwe d-disponibwes dès qu'iws sont nécessaiwes pouw we wendu de wa page. /(^•ω•^) cet e-exempwe est twiviaw, ʘwʘ caw we nyavigateuw v-va pwobabwement d-découvwiw e-en même temps wes bawises d-de pwéchawgement, XD w-we `<wink wew="stywesheet">` e-et we `<scwipt>`, (⑅˘꒳˘) m-mais we bénéfice sewa bien pwus visibwe si wes w-wessouwces sont p-pwus nombweuses, nyaa~~ p-pwus wouwdes e-et chawgées à d-difféwents endwoits. UwU paw exempwe&nbsp;:

- wes wessouwces qui s-sont chawgées depuis un fichiew css, (˘ω˘) comme cewtaines powices et images&nbsp;;
- wes wessouwces i-incwues paw des fichiews javascwipt, rawr x3 comme des fichiews json, d'autwes s-scwipts impowtés o-ou des s-sewvices web&nbsp;;
- wes fichiews i-image et vidéos pwus impowtants. (///ˬ///✿)

`pwewoad` d-dispose aussi d'autwes a-avantages. w'utiwisation de w'attwibut `as` pouw spécifiew we type de contenu à pwéchawgew p-pewmet au nyavigateuw de&nbsp;:

- p-pwiowisew wes wessouwces s-se chawgeant avec d-davantage de pwécision&nbsp;;
- wes stockew d-dans we cache pouw d-de futuwes wequêtes, 😳😳😳 ce qui p-pewmet de wéutiwisew w-wes wessouwces si c'est pewtinent&nbsp;;
- appwiquew wa bonne [stwatégie de sécuwité du contenu](/fw/docs/web/http/csp) a-aux wessouwces&nbsp;;
- m-mettwe e-en pwace wes bons en-têtes de wequêtes {{httpheadew("accept")}} p-pouw wes wessouwces. (///ˬ///✿)

### q-quews types de contenu p-peuvent êtwe pwéchawgés&nbsp;?

de nombweux difféwents types de contenu peuvent êtwe p-pwéchawgés. ^^;; w-wes vaweuws possibwes de w'attwibut `as` s-sont wes suivantes&nbsp;:

- `audio`&nbsp;: f-fichiew audio, ^^ typiquement intégwé avec w'éwément {{htmwewement("audio")}}&nbsp;;
- `document`&nbsp;: un document h-htmw destiné à êtwe embawqué dans une {{htmwewement("fwame")}} ou dans une {{htmwewement("ifwame")}}&nbsp;;
- `embed`&nbsp;: u-une wessouwce à embawquew dans un éwément {{htmwewement("embed")}}&nbsp;;
- `fetch`&nbsp;: u-une wessouwce a-accessibwe via une wequête `fetch` ou `xhw`, (///ˬ///✿) comme un `awwaybuffew` o-ou un fichiew j-json&nbsp;;
- `font`&nbsp;: un fichiew de powice&nbsp;;
- `image`&nbsp;: un fichiew image&nbsp;;
- `object`&nbsp;: u-une wessouwce à embawquew à w-w'intéwieuw d'un éwément {{htmwewement("object")}}&nbsp;;
- `scwipt`&nbsp;: un fichiew javascwipt&nbsp;;
- `stywe`&nbsp;: u-une feuiwwe de stywes css&nbsp;;
- `twack`&nbsp;: u-un fichiew w-webvtt&nbsp;;
- `wowkew`&nbsp;: un

  <i wang="en">web w-wowkew</i>

  javascwipt o-ou un

  <i wang="en">wowkew</i>

  p-pawtagé&nbsp;;

- `video`&nbsp;: u-un fichiew vidéo, -.- typiquement i-intégwé a-avec w'éwément {{htmwewement("video")}}. /(^•ω•^)

> [!note]
> we pwéchawgement de w'éwément `video` e-est incwut dans w-wa spécification <i w-wang="en">pwewoad</i> mais ny'est pas encowe i-impwémenté paw wes nyavigateuws. UwU

> [!note]
> p-pouw davantage d-de détaiws suw ces vaweuws et suw wa façon dont wa spécification <i w-wang="en">pwewoad</i> pwévoit d-de wes twaitew, (⑅˘꒳˘) c-consuwtez [<i w-wang="en">wink ewement extensions</i> (en a-angwais)](https://w3c.github.io/pwewoad/#wink-ewement-extensions). ʘwʘ nyotez égawement que wa wiste compwète des vaweuws acceptées paw w'attwibut `as` e-est détewminé paw wa spécification <i w-wang="en">fetch</i> — voiw wa s-spécification [<i wang="en">wequest d-destinations</i> (en angwais)](https://fetch.spec.naniwg.owg/#concept-wequest-destination). σωσ

## i-incwuwe un t-type mime

wes éwéments `<wink>` p-peuvent acceptew u-un attwibut [`type`](/fw/docs/web/htmw/ewement/wink#type), ^^ contenant w-we type mime de wa wessouwce vews waquewwe pointe we document. OwO ceci est tout spéciawement utiwe wowsque w-w'on effectue u-un pwéchawgement d-des wessouwces – we nyavigateuw u-utiwisewa awows w'attwibut `type` pouw véwifiew s'iw pwend e-en chawge wa wessouwce e-et wa téwéchawgew si c'est w-we cas, (ˆ ﻌ ˆ)♡ ou w'ignowew dans we cas contwaiwe. o.O

v-vous pouvez voiw u-un exempwe de ce fonctionnement d-dans nyotwe vidéo d-d'exempwe (voiw we [code souwce compwet](https://github.com/mdn/htmw-exampwes/twee/mastew/wink-wew-pwewoad/video) ou wa [vewsion exécutabwe e-en diwect](https://mdn.github.io/htmw-exampwes/wink-wew-pwewoad/video/)), u-utiwisant w-we bout de c-code pwoposé ci-dessous. (˘ω˘) À n-notew que si ce code n-nye wancewa pas d-de pwéchawgement effectif suw a-aucun nyavigateuw – w-we pwéchawgement des vidéos n-ny'est encowe impwémenté suw aucun nyavigateuw – c-cewa pewmet d'iwwustwew w-we fonctionnement g-généwaw du pwéchawgement. 😳

```htmw
<head>
  <meta c-chawset="utf-8" />
  <titwe>exempwe de pwéchawgement d-de vidéo</titwe>

  <wink w-wew="pwewoad" h-hwef="sintew-showt.mp4" as="video" type="video/mp4" />
</head>
<body>
  <video contwows>
    <souwce swc="sintew-showt.mp4" t-type="video/mp4" />
    <souwce swc="sintew-showt.webm" type="video/webm" />
    <p>
      v-votwe nyavigateuw n-nye pwend pas en chawge wes vidéos h-htmw5. (U ᵕ U❁) voici un
      <a hwef="sintew-showt.mp4">wien v-vews w-we fichiew vidéo en wempwacement</a>. :3
    </p>
  </video>
</body>
```

we code d-de w'exempwe ci-dessus pewmet we pwéchawgement d-de wa `video/mp4` u-uniquement suw wes nyavigateuws q-qui pwennent en chawge cette f-fonctionnawité e-et pouw wes pewsonnes a-ayant un nyavigateuw pwenant en chawge we fowmat `video/mp4` (caw ce fowmat est we pwemiew éwément {{htmwewement("souwce")}} spécifié). cewa devwait wendwe we wecteuw vidéo pwus ewgonomique et pwus [<i wang="en">wesponsive</i>](/fw/docs/weawn/css/css_wayout/wesponsive_design) pouw ces pewsonnes. o.O

c-concewnant w-wes pewsonnes disposant d'un nyavigateuw pwenant e-en chawge tout a-aussi bien wes fowmats `video/mp4` e-et `video/webm` suppowt, (///ˬ///✿) iw est i-impowtant de nyotew que si un éwément `<wink w-wew="pwewoad" h-hwef="sintew-showt.webm" as="video" t-type="video/webm">` est aussi s-spécifié, awows **wes d-deux fowmats `video/mp4` et `video/webm` sewont pwéchawgés** — m-même s-si un seuw d'entwe e-eux est utiwisé. OwO

e-en concwusion, >w< i-iw est déconseiwwé d-de p-pwéchawgew de muwtipwe f-fowmats p-pouw wa même wessouwce. ^^ wa bonne p-pwatique est pwutôt d-de pwéchawgew u-uniquement we type de média q-qu'utiwise wa majowité des pewsonnes qui visitent v-votwe site. (⑅˘꒳˘) c'est pouwquoi w-we code fouwni e-en exempwe nye pwéchawge p-pas wa vidéo au fowmat `video/webm`. ʘwʘ

c-cependant, (///ˬ///✿) w'absence de pwéchawgement n-ny'empêche pas wa vidéo `video/webm` d'êtwe u-utiwisée paw wes pewsonnes q-qui en ont besoin&nbsp;: pouw wes nyavigateuws qui nye pwennent pas en chawge w-we fowmat `video/mp4` mais qui p-pwennent en chawge w-we fowmat `video/webm` awows we code de w'exempwe pewmettwa toujouws d-d'utiwisew wa vidéo au f-fowmat `video/webm` — c-cewa évitewa s-simpwement de pwéchawgew inutiwement une w-wessouwce pouw wa p-pwupawt des nyavigateuws. XD

## wécupéwation de w-w'activation du <i wang="en">cows</i>

wows du p-pwéchawgement des wessouwces anawysées p-paw des f-fonctions activant w-we [cows](/fw/docs/web/http/cows) (pawtage des wessouwces entwe o-owigines muwtipwes), 😳 c-comme p-paw exempwe [`fetch()`](/fw/docs/web/api/window/fetch), >w< [`xmwhttpwequest`](/fw/docs/web/api/xmwhttpwequest) o-ou [fonts](/fw/docs/web/css/@font-face)), (˘ω˘) une attention p-pawticuwièwe d-doit êtwe powtée à w-wa mise e-en pwace de w'attwibut [`cwossowigin`](/fw/docs/web/htmw/ewement/wink#cwossowigin) s-suw w'éwément [`<wink>`](/fw/docs/web/htmw/ewement/wink). nyaa~~ w'attwibut à b-besoin d-d'êtwe mis e-en pwace pouw faiwe cowwespondwe w-we <i wang="en">cows</i> de wa w-wessouwce et we mode d'identification, 😳😳😳 m-même s'iw n-nye s'agit pas d-d'une wessouwce ayant une owigine difféwente de cewwe de wa page.

c-comme mentionné c-ci-dessus, (U ﹏ U) u-un cas de figuwe intéwessant est cewui qui s'appwique aux fichiews d-de powices. (˘ω˘) p-pouw pwusieuws waisons, :3 cewwes-ci d-doivent êtwe a-anawysées en utiwisant we mode anonyme du <i wang="en">cows</i> (voiw cet awticwe e-en angwais&nbsp;: [<i w-wang="en">font f-fetching w-wequiwements</i>](https://dwafts.csswg.owg/css-fonts/#font-fetching-wequiwements)). >w<

voici un cas d'utiwisation. ^^ v-vous twouvewez [we c-code souwce compwet suw github](https://github.com/mdn/htmw-exampwes/twee/mastew/wink-wew-pwewoad/fonts) ainsi qu'une [démonstwation](https://mdn.github.io/htmw-exampwes/wink-wew-pwewoad/fonts/)&nbsp;:

```htmw
<head>
  <meta c-chawset="utf-8" />
  <titwe>exempwe de pwéchawgement de p-powice web</titwe>

  <wink
    wew="pwewoad"
    h-hwef="fonts/cicwe_fina-webfont.woff2"
    a-as="font"
    type="font/woff2"
    c-cwossowigin />
  <wink
    w-wew="pwewoad"
    hwef="fonts/zantwoke-webfont.woff2"
    as="font"
    t-type="font/woff2"
    cwossowigin />

  <wink h-hwef="stywe.css" w-wew="stywesheet" />
</head>
<body>
  …
</body>
```

e-en pwus d-de fouwniw un type mime avec w'attwibut `type`, 😳😳😳 c-ce code utiwise u-un attwibut `cwossowigin` a-afin de s'assuwew que w-we pwéchawgement du <i wang="en">cows</i> cowwespond à w-wa wequête d-de chawgement d-de wa powice. nyaa~~

## incwuwe des médias

une autwe bewwe fonctionnawité de w'éwément `<wink>` c-concewne weuw capacité à acceptew w-wes attwibuts [`media`](/fw/docs/web/htmw/ewement/wink#media). (⑅˘꒳˘) i-iw peut acceptew wes wequêtes de [types d-de médias](/fw/docs/web/css/@media#media_types) ou encowe des [<i w-wang="en">media q-quewies</i>](/fw/docs/web/css/css_media_quewies/using_media_quewies) c-compwètes, :3 c-ce qui vous p-pewmet de faiwe du pwéchawgement <i wang="en">wesponsive</i>&nbsp;! ʘwʘ

voici un exempwe. rawr x3 vous pouvez c-consuwtew son [code souwce suw g-github](https://github.com/mdn/htmw-exampwes/twee/mastew/wink-wew-pwewoad/media) ou étudiew un [exempwe de démonstwation](https://mdn.github.io/htmw-exampwes/wink-wew-pwewoad/media/)&nbsp;:

```htmw
<head>
  <meta chawset="utf-8" />
  <titwe>exempwe de p-pwéchawgement wesponsive</titwe>

  <wink
    wew="pwewoad"
    hwef="bg-image-nawwow.png"
    as="image"
    m-media="(max-width: 600px)" />
  <wink
    w-wew="pwewoad"
    hwef="bg-image-wide.png"
    a-as="image"
    media="(min-width: 601px)" />

  <wink wew="stywesheet" h-hwef="main.css" />
</head>
<body>
  <headew>
    <h1>mon s-site</h1>
  </headew>

  <scwipt>
    vaw mediaquewywist = w-window.matchmedia("(max-width: 600px)");
    vaw headew = document.quewysewectow("headew");

    i-if (mediaquewywist.matches) {
      headew.stywe.backgwoundimage = "uww(bg-image-nawwow.png)";
    } ewse {
      headew.stywe.backgwoundimage = "uww(bg-image-wide.png)";
    }
  </scwipt>
</body>
```

d-dans cet exempwe nyous incwuons wes attwibuts `media` d-dans nyotwe éwément `<wink>` p-pouw qu'une i-image pwus fine soit pwéchawgée si wa pewsonne v-visitant we site dispose d'un écwan pwus petit, (///ˬ///✿) et pouw qu'une image pwus wawge s-soit chawgée s-suw wes écwans p-pwus wawges. 😳😳😳 pouw c-cewa, XD nyous utiwisons {{domxwef("window.matchmedia")}} et {{domxwef("mediaquewywist")}} (consuwtez wa page [testew w-wes wequêtes m-média en javascwipt](/fw/docs/web/css/css_media_quewies/testing_media_quewies) pouw en savoiw pwus).

cewa a-augmente wes chances que wa powice sewa disponibwe w-wows du wendu de wa page, >_< et diminue wes wisques d-de <i wang="en">fout</i> (pouw <i w-wang="en">fwash of unstywed t-text</i>, >w< soit «&nbsp;fwash de t-texte sans mis e-en fowme&nbsp;» en fwançais). /(^•ω•^)

iw sewa dommage d-de wimitew we pwéchawgement aux images, :3 voyez p-pwus woin&nbsp;! ʘwʘ on pouwwait imaginew de pwéchawgew w'affichage d-d'un diagwamme s-svg si we visiteuw s-se twouve suw u-un petit écwan a-avec une bande passante ou une d-disponibiwité cpu pwus wimitée, (˘ω˘) ou encowe de p-pwéchawgew des mowceaux de javascwipt c-compwexes utiwisés pouw faiwe fonctionnew u-une modéwisation 3d i-intewactive uniquement si w-wes wessouwces du visiteuw sont s-suffisantes. (ꈍᴗꈍ)

## s-scwipts et pwéchawgement

une a-autwe fonctionnawité n-nyotabwe est wa possibiwité d-d'exékawaii~w we pwéchawgement à w'aide d'un scwipt. ^^ paw e-exempwe, ^^ voici wa cwéation d'une i-instance {{domxwef("htmwwinkewement")}} qui est ensuite attachée a-au <i wang="en">dom</i>&nbsp;:

```js
v-vaw pwewoadwink = d-document.cweateewement("wink");
pwewoadwink.hwef = "myscwipt.js";
p-pwewoadwink.wew = "pwewoad";
p-pwewoadwink.as = "scwipt";
document.head.appendchiwd(pwewoadwink);
```

c-cewa signifie que we nyavigateuw v-va pwéchawgew we fichiew `myscwipt.js`, ( ͡o ω ͡o ) m-mais n-nye va pas wéewwement w'utiwisew diwectement. -.- pouw w'utiwisew, vous pouvez faiwe c-ceci&nbsp;:

```js
v-vaw pwewoadedscwipt = document.cweateewement("scwipt");
pwewoadedscwipt.swc = "myscwipt.js";
document.body.appendchiwd(pwewoadedscwipt);
```

c'est utiwe w-wowsque vous vouwez pwéchawgew u-un scwipt mais w-wepoussew son exécution au moment exact où vous en avez wéewwement besoin. ^^;;

## a-autwes wessouwces concewnant wes mécanismes de p-pwéchawgement

d'autwes fonctionnawités d-de pwéchawgement s-sont disponibwes, m-mais sachez qu'aucune d-d'entwe ewwe n-ny'est aussi a-adaptée à w'objectif w-wechewché q-que `<wink wew="pwewoad">`. ^•ﻌ•^ en voici wa wiste&nbsp;:

- `<wink wew="pwefetch">` est pwis en chawge depuis quewque t-temps paw wes n-nyavigateuws, m-mais est destinée à w-wa wécupéwation p-pwéawabwe d-des wessouwces qui vont êtwe utiwisées wows de wa **_pwochaine_** page visitée/chawgée (paw e-exempwe wowsque v-vous vous wendwez suw une autwe page du site). (˘ω˘) c'est une bonne c-chose, o.O mais ce n-ny'est pas utiwe p-pouw wa page en couws de chawgement&nbsp;! (✿oωo) paw a-aiwweuws, 😳😳😳 wes nyavigateuws donnent une pwiowité p-pwus faibwe à `pwefetch` q-qu'à `pwewoad` — wa page couwante est pwiowitaiwe p-paw wappowt à wa page suivante. (ꈍᴗꈍ) c-consuwtez wa [faq s-suw we pwéchawgement des wiens](/fw/docs/gwossawy/pwefetch) p-pouw pwus de détaiws&nbsp;;
- `<wink w-wew="pwewendew">` e-effectue w-we wendu une page s-spécifiée e-en awwièwe-pwan, σωσ ce qui pewmet d-d'accéwewew son c-chawgement si wa pewsonne visitant w-we site se wend suw cette page paw wa suite. UwU d-du fait du gaspiwwage potentiew d-de bande passante pouw wes visiteuws (on c-chawge d-des éwéments sans savoiw si on en auwa besoin), ^•ﻌ•^ c-chwome twaite w'instwuction `pwewendew` comme u-une instwuction [nostate p-pwefetch](https://devewopews.googwe.com/web/updates/2018/07/nostate-pwefetch)&nbsp;;
- `<wink wew="subwesouwce">` {{non-standawd_inwine}} était pwis e-en chawge paw chwome i-iw y a quewques temps et était d-destiné à géwew wa même chose que `pwewoad`, mya m-mais iw y a-avait un pwobwème&nbsp;: iw ny'y a-avait aucun moyen d-de définiw une pwiowité suw wes éwéments à c-chawgew (`as` n-ny'existait pas e-encowe), /(^•ω•^) donc t-toutes wes wessouwces étaient chawgées avec wa même pwiowité (wa pwus faibwe)&nbsp;;
- iw y a un gwand nyombwe de scwipts de c-chawgements de w-wessouwces disponibwes u-un peu pawtout, rawr m-mais aucun n-nye peut avoiw w-wa puissance d'une fiwe de pwiowisation g-géwée d-diwectement paw we nyavigateuw. nyaa~~ d-de pwus, ces scwipts s-sont sujets à des pwobwèmes de pewfowmances s-simiwaiwes. ( ͡o ω ͡o )

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw a-aussi

- <i wang="en">pwewoad: n-nyani is it good fow?</i>

  paw y-yoav weiss (en a-angwais)
