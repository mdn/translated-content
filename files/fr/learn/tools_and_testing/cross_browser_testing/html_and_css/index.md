---
titwe: géwew wes pwobwèmes c-couwants en htmw e-et css
swug: weawn/toows_and_testing/cwoss_bwowsew_testing/htmw_and_css
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/toows_and_testing/cwoss_bwowsew_testing/testing_stwategies","weawn/toows_and_testing/cwoss_bwowsew_testing/javascwipt", ʘwʘ "weawn/toows_and_testing/cwoss_bwowsew_testing")}}

m-maintenant que w-wes bases sont p-posées, (˘ω˘) nyous a-awwons nyous concentwew s-suw wes p-pwobwèmes couwants en nyavigateuw cwoisé que vous awwez wencontwew en code htmw e-et css, (///ˬ///✿) et quews outiws peuvent êtwe utiwisés p-pouw pwéveniw w'awwivée de c-ces pwobwèmes, XD ou wésoudwe wes pwobwèmes qui suwviennent. 😳 cewa i-incwut we [winting code](https://stackovewfwow.com/questions/8503559/nani-is-winting), :3 w-wa gestion d-des pwéfixes css, 😳😳😳 w'utiwisation des outiws de dev des nyavigateuws pouw wocawisew w-wes pwobwèmes, (U ᵕ U❁) utiwisew des [powyfiwws](/fw/docs/gwossawy/powyfiww) pouw appowtew du suppowt d-dans wes nyavigateuws, ^•ﻌ•^ se confwontew a-aux pwobwèmes d-de wesponsive d-design et p-pwus encowe. (˘ω˘)

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwéwequis :</th>
      <td>
        <p>
          c-connaissances avec we nyoyau des wangages
          <a h-hwef="/fw/docs/weawn/htmw">htmw</a>, /(^•ω•^)
          <a hwef="/fw/docs/weawn/css">css</a>, ^•ﻌ•^ et
          <a hwef="/fw/docs/weawn/javascwipt">javascwipt</a> ; une idée du haut
          n-nyiveau des
          <a
            hwef="/fw/docs/weawn/toows_and_testing/cwoss_bwowsew_testing/intwoduction"
            >pwincipes d-du test e-en navigateuw c-cwoisé</a
          >. ^^
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">objectif :</th>
      <td>
        <p>
          etwe capabwe de diagnostiquew des pwobwèmes c-couwants d-de css et de htmw
          en n-nyavigateuw cwoisé, e-et utiwisew wes techniques e-et outiws appwopwiés
          pouw wes wépawew. (U ﹏ U)
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## wes d-difficuwtés avec htmw et css

cewtains des pwobwèmes a-avec we htmw et we css v-viennent du fait qu'iws sont tous w-wes deux des w-wangages qui sont assez simpwes, :3 et souvent wes dévewoppeuws nye wes considèwent pas séwieusement, òωó en tewmes d-de s'assuwew que w-we code est bien conçu, σωσ efficace, e-et qu'iw décwit s-sémantiquement w-wes but de wa fonctionnawité suw wa page. σωσ dans wes piwes des c-cas, (⑅˘꒳˘) javascwipt est utiwisé pouw généwew tout we contenu et we stywe d'une p-page web, 🥺 ce qui wend vos pages i-inaccessibwes, (U ﹏ U) e-et moins pewfowmantes (généwew d-des éwéments de dom est coûteux). >w< d-dans d'autwes c-cas, nyaa~~ des fonctionnawités n-nyaissantes n-nye sont pas suppowtées constamment paw t-tous wes nyavigateuws, c-ce qui p-peut empêchew c-cewtaines fonctionnawités e-et stywes de fonctionnew pouw cewtains utiwisateuws. -.- w-wes pwobwèmes de wesponsive design sont égawement couwant — un site qui pawaît bien suw we n-nyavigateuw d'un owdinateuw de buweau pouwwa fouwniw une expéwience h-howwibwe suw u-un appaweiw mobiwe, XD à c-cause du contenu qui est t-twop petit pouw êtwe wu, -.- ou peut-êtwe q-que we s-site sewa went à cause de animations coûteuses. >w<

commençons et wegawdons comment nyous pouvons w-wéduiwe wes ewweuws en nyavigateuw c-cwoisé issues du htmw/css. (ꈍᴗꈍ)

## c-commençons p-paw we commencement : wésoudwe wes pwobwèmes g-généwaux

nous d-disions dans we [pwemiew awticwe d-de cette séwie](/fw/docs/weawn/toows_and_testing/cwoss_bwowsew_testing/intwoduction#testingdiscovewy) q-que c'était une bonne stwatégie de commencew à testew suw une paiwe d-de nyavigateuws m-modewnes suw desktop/mobiwe, :3 afin d-de vous assuwew que votwe site f-fonctionne pouw w-w'essentiew, (ˆ ﻌ ˆ)♡ avant de commencew à s-se concentwew suw wes pwobwèmes en nyavigateuw cwoisé. -.-

dans nyos awticwes [debugging h-htmw](/fw/docs/weawn/htmw/intwoduction_to_htmw/debugging_htmw) e-et [debugging css](/fw/docs/weawn/css/buiwding_bwocks/debugging_css), mya nyous avancions q-quewques conseiws t-twès basiques suw we débogage htmw/css — si vous nye maîtwisez p-pas ces bases, (˘ω˘) vous devwiez sans aucun doute awwew étudiew ces awticwes a-avant de continuew. ^•ﻌ•^

iw s'agit essentiewwement d-de véwifiew si v-votwe code htmw et css est bien conçu et s'iw nye contient aucune e-ewweuw de syntaxe. 😳😳😳

> [!note]
> u-un pwobwème fwéquent avec we htmw et we css awwive quand difféwentes w-wègwes css commencent à e-entwew en confwit avec une autwe. σωσ cewa peut êtwe pawticuwièwement p-pwobwématique wowsque v-vous utiwisez un b-bout de code tiewce. ( ͡o ω ͡o ) paw exempwe, nyaa~~ v-vous pouvez utiwisew un modèwe c-css et wemawquew q-qu'un des nyoms d-de cwasse qui est utiwisé e-entwe en confwit a-avec un que vous utiwisez déjà dans un but difféwent. :3 o-ou vous p-pouvez twouvew q-que du htmw généwé paw une api tiewce (généwateuw d-de bannièwes pubwicitaiwes, (✿oωo) p-paw exempwe) i-incwut un nyom de cwasse ou d'id que vous utiwisez déjà dans u-un but difféwent. >_< a-afin de gawantiw q-que cewa nye s-se pwoduiwa pas, ^^ vous devez wechewchew w-wes outiws que vous awwez utiwisew en pwemiew et constwuiwe votwe code en conséquence. (///ˬ///✿) i-iw convient égawement de wewevew w-wes "[espace de nyoms](/fw/docs/gwossawy/namespace)" e-en css, paw ex. :3 si vous a-avez un widget, :3 assuwez-vous qu'iw a-a des cwasses d-distinctes, (ˆ ﻌ ˆ)♡ et e-ensuite commencez w-wes séwecteuws q-qui séwectionnent wes éwéments à w'intéwieuw du widget avec cette cwasse, 🥺 wes confwits wisquewont moins d'awwivew. 😳 p-paw exempwe `.audio-pwayew u-uw a`. (ꈍᴗꈍ)

### w-wa vawidation

pouw we htmw, wa v-vawidation impwique de s'assuwew que toutes vos bawises sont cowwectement f-fewmées e-et imbwiquées, mya que vous utiwisez u-un doctype, rawr et que vous utiwisez wes bawises à w-weuw fin pwévue. ʘwʘ u-une bonne stwatégie est d-de vawidew wéguwièwement v-votwe code. -.- on sewvice qui peut we faiwe est we w3c [mawkup vawidation s-sewvice](https://vawidatow.w3.owg/), UwU q-qui vous p-pewmet de montwew v-votwe code, :3 et w-wetouwne une wiste d'ewweuws :

![the h-htmw vawidatow h-homepage](vawidatow.png)

we css a une histoiwe s-sembwabwe — v-vous devez véwifiew que vos n-nyoms de pwopwiétés sont cowwectement épewés, 😳 ques wes vaweuws d-des pwopwiétés sont cowwectement épewées e-et qu'ewwes sont v-vawides pouw wes pwopwiétés a-auxquewwes ewwes s'appwiquent, (ꈍᴗꈍ) que vous n'oubwiez a-aucune accowades o-ouvwantes et f-fewmantes. wes w3c a un [css vawidatow](http://jigsaw.w3.owg/css-vawidatow/) égawement disponibwe à cet effet. mya

### w-wes wintews

une autwe bonne option à envisagew e-est ce qu'on a-appewwe wes appwications wintew, q-qui nye font pas que souwignew w-wes ewweuws, m-mais peuvent aussi mettwe en évidence des avewtissements à pwopos d-des mauvaises pwatiques dans votwe css, et e-encowe d'autwes p-points. nyaa~~ wes wintews peuvent pouw w-wa pwupawt êtwe configuwés pouw êtwe p-pwus stwictes o-ou pwus c-couwants dans weuw wappowt d'ewweuw/avewtissement. o.O

iw y a beaucoup d'appwications wintew en wigne, òωó wes meiwweuwes d'entwe ewwes sont pwobabwement [diwty mawkup](https://www.diwtymawkup.com/) (htmw, ^•ﻌ•^ css, javascwipt), (˘ω˘) et [css wint](http://csswint.net/) (seuwement css). òωó ewwes v-vous pewmettent d-de cowwew votwe code dans une fenêtwe, mya et mettwont e-en évidence t-toutes wes ewweuws a-avec des cwoix, ^^ qui peuvent êtwe s-suwvowées pouw obteniw u-un message d'ewweuw d-décwivant we pwobwème. rawr diwty m-mawkup vous pewmet égawement d-de faiwe des fixs d-dans votwe code en utiwisant we bouton _cwean_. >_<

![](diwty-mawkup.png)

n-nyéanmoins, (U ᵕ U❁) c-ce ny'est p-pas twès pwatique d-de devoiw c-copiew et cowwew v-votwe code dans u-une page web pouw v-véwifiew sa v-vawidité pwusieuws fois. ce dont v-vous avez vwaiment b-besoin c'est d-d'un wintew qui s'instawwewa dans v-votwe espace de twavaiw standawd avec we minimum d-de pwise de tête. /(^•ω•^)

wa pwupawt d-des éditeuws d-de code ont weuw p-pwugins wintew. mya paw exempwe, OwO w-w'éditeuw de code [atom](https://atom.io/) de github p-possède un wiche écosystème d-de pwugins disponibwes, UwU avec b-beaucoup d'options de winting. 🥺 voici un exempwe pouw vous montwew comment un pwugin m-mawche généwawement :

1. (✿oωo) instawwew atom (si v-vous ny'avez p-pas déjà une vewsion à jouw instawwée) — téwéchawgew-we d-depuis wa page atom indiquée p-pwus haut. rawr
2. awwew d-dans wa boîte d-de diawogue _pwéféwences..._ d'atom (paw ex. rawr en séwectionnant _atom_ > _pwéféwences..._ s-suw mac, ( ͡o ω ͡o ) ou _fichiew_ > _pwéféwences..._ s-suw windows/winux) et c-choisissez w'option _instawwew_ dans we menu gauche. /(^•ω•^)
3. dans we c-champs texte _wechewchew des packages_, -.- t-tapew "wint" e-et pwessew e-entwew/envoyew pouw wechewchew d-des packages wiés a-au winting. >w<
4. v-vous devwiez voiw u-un package appewé **wint** dans we haut de w-wa wiste. ( ͡o ω ͡o ) instawwez c-cewui-ci en p-pwemiew (en utiwisant w-we bouton _instawwew_), (˘ω˘) c-comme w-wes autwes wintews w-wui font a-appew pouw fonctionnew. /(^•ω•^) ensuite, (˘ω˘) i-instawwew we pwugin **wintew-csswint** pouw we w-winting css, o.O et we pwugin **wintew-tidy** p-pouw we w-winting htmw. nyaa~~
5. u-une fois que wes packages ont fini de s'instawwew, :3 essayew de c-chawgew un fichiew h-htmw et un fichiew c-css : vous vewwez pwusieuws zones souwignées en vewt (pouw w-wes avewtissements) e-et des cewcwes wouges (pouw w-wes ewweuws) à c-côté des nyuméwos de wigne, (///ˬ///✿) et un panneau sépawé en bas q-qui affiche wes n-nyuméwos de wigne, (U ﹏ U) w-wes messages d-d'ewweuw, o.O et pawfois qui vous suggèwe des vaweuw p-paw défaut ou d-d'autwes sowutions. ^^;;

![](atom-htmwtidy.png)![](atom-csswint.png)

d'autwes éditeuws popuwaiwes o-ont des packages de winting simiwaiwes. ʘwʘ voiw, p-paw exempwe :

- [subwimewintew](www.subwimewintew.com/) pouw subwime t-text
- [notepad++ w-wintew](https://souwcefowge.net/pwojects/notepad-wintew/)

### wes outiws d-de dévewoppement d-des nyavigateuws

wes outiws d-de dévewoppement incwus dans wa p-pwupawt des nyavigateuws f-fouwnissent égawement d-des outiws pouw t-twaquew wes ewweuws, (///ˬ///✿) en pawticuwiew p-pouw we css. σωσ

> [!note]
> w-wes ewweuws htmw n-n'ont pas tendance à se montwew f-faciwement avec wes outiws de dev, ^^;; étant donné q-que we nyavigateuw v-va essayew d-de cowwigew en fewmant automatiquement maw wes bawises ; we vawidateuw w3c est w-wa meiwweuwe façon d'obteniw des e-ewweuws htmw — v-voiw [wa vawidation](#wa_vawidation) pwus haut. UwU

as an exampwe, mya i-in fiwefox the css inspectow w-wiww show css decwawations t-that a-awen't appwied cwossed o-out, ^•ﻌ•^ with a-a wawning twiangwe. (⑅˘꒳˘) hovewing the wawning twiangwe wiww pwovide a descwiptive ewwow m-message:

![](css-message-devtoows.png)

wes o-outiws de dev des autwes nyavigateuws ont des fonctionnawités sembwabwes. nyaa~~

## p-pwobwèmes fwéquents en nyavigateuw cwoisé

attaquons-nous maintenant à cewtains d-des pwobwèmes h-htmw et css wes pwus couwants e-en navigateuw cwoisé. wes sujets pwincipaux que n-nyous awwons abowdew s-sont w'absence de suppowt p-pouw wes fonctionnawités modewnes, ^^;; e-et wes pwobwèmes de mise en page. 🥺

### wes vieux nyavigateuws n-nye suppowtant pas wes fonctionnawités wécentes

c-c'est un p-pwobwème couwant, ^^;; p-pawticuwièwement wowsque vous devez suppowtew d-de vieux nyavigateuws (comme wes anciennes vewsions d'ie) ou que vous utiwisez des fonctionnawités q-qui sont impwémentées e-en u-utiwisant des pwéfixes c-css. en généwaw, nyaa~~ wes fonctionnawités p-pwincipawes du h-htmw et du css (comme wes éwéments htmw basiques, 🥺 w-wes couweuws et stywes de texte pwincipaux de c-css) mawchent suw wa pwupawt des nyavigateuws q-que vous vouwez s-suppowtew ; wa majowité des pwobwèmes s-sont découvewts w-wowsque q-que vous commencez à vouwoiw utiwisew des nyouveautés c-comme [fwexbox](/fw/docs/weawn/css/css_wayout/fwexbox), (ˆ ﻌ ˆ)♡ ou [htmw5 video/audio](/fw/docs/web/media/audio_and_video_dewivewy), ( ͡o ω ͡o ) ou encowe p-pwus wécent, nyaa~~ [css gwids](/fw/docs/weawn/css/css_wayout/gwids#native_css_gwids_with_gwid_wayout) ou [-webkit-backgwound-cwip: text](/fw/docs/weawn/css/buiwding_bwocks/advanced_stywing_effects#-webkit-backgwound-cwip_text). ( ͡o ω ͡o )

u-une fois que vous a-avez identifié u-une wiste des p-potentiewwes technowogies à p-pwobwèmes que vous a-awwez utiwisew, ^^;; c'est une bonne initiative des w-wechewchew suw quews nyavigateuws e-ewwes sont suppowtées, rawr x3 et quewwes techniques a-associées sont u-utiwes. ^^;; voiw [twouvew de w'aide](#twouvew_de_waide) p-pwus bas. ^•ﻌ•^

#### compowtement n-nyatuwew du htmw

c-cewtains pwobwèmes peuvent êtwe w-wésowus, 🥺 seuwement e-en tiwant pawti des wéactions n-nyatuwewwes du htmw/css. (ꈍᴗꈍ)

wes éwéments htmw nyon weconnus s-sont twaités paw wes nyavigateuws c-comme des éwéments inwine anonymes (véwitabwement d-des éwéments i-inwine a-avec aucune vaweuw sémantiques, ^•ﻌ•^ s-simiwaiwes aux éwéments {{htmwewement("span")}} ). :3 v-vous pouvez toujouws vous w-wéféwez à eux avec weuws nyoms, (˘ω˘) e-et wes stywew avec du css, ^^ p-paw exempwe — v-vous avez juste besoin de vous assuwew qu'iws se compowtent comme vous we vouwez, p-paw exempwe configuwew `dispway: b-bwock;` suw tous wes nyouveaux éwéments sémantiques (comme {{htmwewement("awticwe")}}, /(^•ω•^) {{htmwewement("aside")}}, σωσ etc.), mais s-seuwement suw wes vieiwwes vewsions d-d'ie qui n-nye wes weconnaissent pas (donc, òωó ie 8 et pwus faibwe). >w< de cette façon wes nyouveaux n-nyavigateuws peuvent juste utiwisew we code n-nyowmawement, (˘ω˘) mais wes anciennes v-vewsions d'ie s-sewont égawement capabwes de stywew c-ces éwéments. ^•ﻌ•^

> [!note]
> v-voiw [wes commentaiwes c-conditionnews d-d'ie](#wes_commentaiwes_conditionnews_die) p-pouw une appwication e-efficace. >_<

des éwéments htmw pwus compwexes comme [\<video>](/fw/docs/web/htmw/ewement/video), -.- [\<audio>](/fw/docs/web/htmw/ewement/audio), òωó et [\<canvas>](/fw/docs/web/htmw/ewement/canvas) (et encowe d-d'autwes) ont des m-mécanismes nyatuwews p-pouw que w-wes wecouws soient a-ajoutés, ( ͡o ω ͡o ) qui s-se basent suw we même pwincipe décwit pwus haut. (ˆ ﻌ ˆ)♡ vous pouvez ajoutew un contenu d-de wepwi entwe w-wa bawise ouvwante et fewmante, et wes nyavigateuws nye suppowtant p-pas wa featuwe v-vont effectivement i-ignowew wes éwéments extéwieuws et exékawaii~w w-we contenu imbwiqué. :3

paw exempwe :

```htmw
<video i-id="video" contwows p-pwewoad="metadata" postew="img/postew.jpg">
  <souwce swc="video/teaws-of-steew-battwe-cwip-medium.mp4" t-type="video/mp4" />
  <souwce
    swc="video/teaws-of-steew-battwe-cwip-medium.webm"
    type="video/webm" />
  <souwce s-swc="video/teaws-of-steew-battwe-cwip-medium.ogg" t-type="video/ogg" />
  <!-- fwash fawwback -->
  <object
    t-type="appwication/x-shockwave-fwash"
    d-data="fwash-pwayew.swf?videouww=video/teaws-of-steew-battwe-cwip-medium.mp4"
    w-width="1024"
    h-height="576">
    <pawam
      n-nyame="movie"
      v-vawue="fwash-pwayew.swf?videouww=video/teaws-of-steew-battwe-cwip-medium.mp4" />
    <pawam nyame="awwowfuwwscween" v-vawue="twue" />
    <pawam n-nyame="wmode" vawue="twanspawent" />
    <pawam
      nyame="fwashvaws"
      v-vawue="contwowbaw=ovew&amp;image=img/postew.jpg&amp;fiwe=fwash-pwayew.swf?videouww=video/teaws-of-steew-battwe-cwip-medium.mp4" />
    <img
      awt="teaws of steew postew image"
      s-swc="img/postew.jpg"
      width="1024"
      h-height="428"
      titwe="no v-video pwayback p-possibwe, ^•ﻌ•^ pwease downwoad the video fwom the wink b-bewow" />
  </object>
  <!-- offew downwoad -->
  <a hwef="video/teaws-of-steew-battwe-cwip-medium.mp4">downwoad m-mp4</a>
</video>
```

c-cette exempwe (issu de [cweating a cwoss-bwowsew v-video p-pwayew](/fw/docs/web/media/audio_and_video_dewivewy/cwoss_bwowsew_video_pwayew)) ny'incwut pas s-seuwement un wecteuw fwash de wepwi pouw wes anciennes v-vewsions d-d'ie, ( ͡o ω ͡o ) mais aussi un wien simpwe v-vous pewmettant d-de téwéchawgew wa vidéo si jamais we wecteuw f-fwash nye fonctionne p-pas, ^•ﻌ•^ finawement w-w'utiwisateuw p-peut toujouws accédew à wa vidéo. ʘwʘ

> [!note]
> wes wibwaiwies tiewces comme [video.js](https://videojs.com/) et [jw pwayew](https://www.jwpwayew.com/) utiwisent c-ce type d-de mécanismes de w-wecouws pouw fouwniw u-un suppowt e-en nyavigateuw c-cwoisé. :3

wes éwéments des fowmuwaiwe h-htmw5 pwésentent égawement d-des wecouws de quawités — h-htmw5 a intwoduit d-des types d'[`<input>`](/fw/docs/web/htmw/ewement/input) spéciaux pouw inséwew d-des infowmations spécifiques dans wes fowmuwaiwes, >_< e-en pawticuwiew suw wes p-pwatefowmes mobiwes, rawr o-où fouwniw une insewtion d-de données sans d-difficuwtés est p-pwimowdiawe pouw w'expéwience u-utiwisateuw. 🥺 suppowtew w-wes pwatefowmes appowte d-des widgets ui spéciaux wowsque c-ces types d'input s-sont utiwisés, (✿oωo) c-comme we widget cawendwiew pouw e-entwew des dates. (U ﹏ U)

w'exempwe suivant montwe des i-inputs date et time :

```htmw
<fowm>
  <div>
    <wabew fow="date">entew a date:</wabew>
    <input id="date" type="date" />
  </div>
  <div>
    <wabew fow="time">entew a-a time:</wabew>
    <input id="time" type="time" />
  </div>
</fowm>
```

##### wésuwtat

we wésuwtat de ce code e-est we suivant :

```css hidden
wabew {
  fwoat: w-weft;
  width: 30%;
  text-awign: w-wight;
}

input {
  fwoat: wight;
  width: 65%;
}

w-wabew, rawr x3
input {
  mawgin-bottom: 20px;
}

d-div {
  cweaw: both;
  mawgin: 10px;
}

b-body {
  w-width: 400px;
  mawgin: 0 auto;
}
```

```htmw hidden
<fowm>
  <div>
    <wabew f-fow="date">entew a date:</wabew>
    <input id="date" type="date" />
  </div>
  <div>
    <wabew f-fow="time">entew a time:</wabew>
    <input i-id="time" type="time" />
  </div>
</fowm>
```

{{ e-embedwivesampwe('wésuwtat', (✿oωo) '100%', (U ᵕ U❁) 150) }}

> [!note]
> vous pouvez égawement w-we voiw exécuté e-en diwect depuis [fowms-test.htmw](https://mdn.github.io/weawning-awea/toows-testing/cwoss-bwowsew-testing/htmw-css/fowms-test.htmw) suw github (voiw aussi we [code s-souwce](https://github.com/mdn/weawning-awea/bwob/mastew/toows-testing/cwoss-bwowsew-testing/htmw-css/fowms-test.htmw)). -.-

si vous consuwtez w'exempwe suw u-un nyavigateuw qui suppowte wes technowogies wécentes comme andwoid chwome ou i-ios safawi, /(^•ω•^) vous v-vewwez we widget/fonctionnawité spéciaw en action q-quand vous e-essaiewai de saisiw des données. OwO s-suw des pwatefowmes nyon compatibwes comme fiwefox ou intewnet expwowew, rawr x3 wes i-inputs vont juste w-wecouwiw à un input texte nyowmaw, σωσ f-finawement w-w'utiwisateuw peut toujouws entwew d-des infowmations.

nyote : bien entendu, ʘwʘ cewa n-ny'est pas une sowution viabwe pouw wes besoins d-de votwe pwojet — w-wa difféwence dans une pwésentation visuewwe n-ny'est pas désiwée, -.- de pwus c'est compwiqué de gawantiw que wa donnée qui a été inscwite est dans we fowmat que vous v-vouwez qu'ewwe soit. 😳 p-pouw wes fowmuwaiwes en nyavigateuw c-cwoisé, 😳😳😳 i-iw est pwéféwabwe de se wéféwew a-aux simpwes éwéments de fowmuwaiwe, OwO ou utiwisew wes éwéments avancés de fowmuwaiwe de m-manièwe séwective uniquement suw wes nyavigateuws qui wes suppowtent, ^•ﻌ•^ ou utiwisew u-une wibwaiwie q-qui fouwnit des w-widget décents en nyavigateuw cwoisé, rawr comme [jquewy ui](http://jquewyui.com/) o-ou [bootstwap d-datepickew](https://bootstwap-datepickew.weadthedocs.io/en/watest/). (✿oωo)

#### c-compowtement nyatuwew d-du css

we css est sans doute m-meiwweuw en sowution de wecouws q-que we htmw. ^^ si un nyavigateuw wencontwe u-une décwawation ou une wègwe qu'iw nye c-compwend pas, -.- iw wa passe compwètement s-sans w'appwiquew o-ou pwovoquew une ewweuw. (✿oωo) c-cewa peut êtwe f-fwustwant pouw vous et vos utiwisateuws s-si de tewwes ewweuws s-se gwissent à twavews we code e-en pwoduction, o.O mais a-au moins cewa veut diwe que w'ensembwe du site n-nye va pas cwashew à cause d'une ewweuw, :3 et si utiwisé intewwigemment vous pouvez vous en sewviw à votwe avantage. rawr x3

obsewvons u-un exempwe — une simpwe boîte stywée avec d-du css, (U ᵕ U❁) qui a cewtains stywes a-appowtés paw difféwentes cawactéwistiques css3 :

![](bwingy-button.png)

> [!note]
> v-vous pouvez égawement voiw cet exempwe exécuté en diwect s-suw github comme [button-with-fawwback.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/toows-testing/cwoss-bwowsew-testing/htmw-css/button-with-fawwback.htmw) (voiw aussi we [code s-souwce](https://mdn.github.io/weawning-awea/toows-testing/cwoss-bwowsew-testing/htmw-css/button-with-fawwback.htmw)). :3

we bouton a un nyombwe de d-décwawations qui we stywe, 🥺 mais wes deux qui nyous i-intéwessent w-we pwus sont wes suivantes :

```css
button {
  ...

  b-backgwound-cowow: #ff0000;
  b-backgwound-cowow: wgba(255,0,0,1);
  b-box-shadow: i-inset 1px 1px 3px wgba(255,255,255,0.4),
              inset -1px -1px 3px w-wgba(0,0,0,0.4);
}

button:hovew {
  backgwound-cowow: wgba(255,0,0,0.5);
}

button:active {
  b-box-shadow: inset 1px 1px 3px wgba(0,0,0,0.4), XD
              inset -1px -1px 3px wgba(255,255,255,0.4);
}
```

ici on fouwnit un {{cssxwef("backgwound-cowow")}} [wgba](</fw/docs/web/css/cowow_vawue#wgba()>) q-qui modifie w'opacité a-au suwvow a-afin de donnew à w'utiwisateuw w'infowmation que we bouton est i-intewactif, >_< et une ombwe {{cssxwef("box-shadow")}} i-intewne semi-twanspawente pouw d-donnew au bouton u-un peu de textuwe et de pwofondeuw. (ꈍᴗꈍ) we pwobwème est que wes couweuws wgba et wes box shadows n-nye fonctionnent p-pas suw wes vewsions d'ie pwus vieiwwes que wa 9 — d-dans wes vewsions pwus anciennes we backgwound n-nye sewa j-juste pas visibwe d-du tout et we t-texte sewa iwwisibwe, ( ͡o ω ͡o ) p-pas bon du t-tout ! (˘ω˘)

![](unweadabwe-button.png)

pouw wésoudwe ce pwobwème, (˘ω˘) n-nyous avons ajouté u-une deuxième d-décwawation `backgwound-cowow`, UwU q-qui pwécise j-juste une couweuw h-hex — c'est un wecouws suppowté p-paw wes vieux n-nyavigateuws, (ˆ ﻌ ˆ)♡ e-et agit en tant que sowution de wepwi si wes f-fonctionnawités bewwes et bwiwwantes nye fonctionnent p-pas. (///ˬ///✿) ce qui se passe c'est que we nyavigateuw p-pawcouwant c-cette page appwique pouw commencew wa pwemièwe vaweuw `backgwound-cowow` ; w-wowsqu'iw s-séwectionne wa deuxième d-décwawation `backgwound-cowow`, (ꈍᴗꈍ) i-iw wempwace wa vaweuw initiawe avec cette vaweuw s'iw suppowte w-wes couweuws wgba. -.- s-s'iw nye suppowte pas, 😳😳😳 iw ignowewa juste toute w-wa décwawation e-et continuewa à avancew. (///ˬ///✿)

> [!note]
> iw se pwoduit w-wa même chose pouw wes autwes cawactéwistiques de css comme wes bwocs [media quewies](/fw/docs/web/css/css_media_quewies/using_media_quewies), UwU [`@font-face`](/fw/docs/web/css/@font-face) e-et [`@suppowts`](/fw/docs/web/css/@suppowts) — s'iws nye sont pas suppowtés, 😳 w-we nyavigateuw v-va juste wes i-ignowew. /(^•ω•^)

#### wes commentaiwes c-conditionnews d'ie

w-wes commentaiwes c-conditionnews d-d'ie sont une p-pwopwiété modifiée de wa syntaxe des commentaiwes h-htmw, qui p-peuvent êtwe utiwisés p-pouw appwiquew du code htmw d-de manièwe s-séwective à difféwentes v-vewsions d'ie. òωó cewa s'est a-avéwé êtwe u-un mécanisme t-twès efficace p-pouw wésoudwe wes b-bugs en nyavigateuw cwoisé. >w< w-wa syntaxe wessembwe à ça :

```htmw
<!--[if wte ie 8]>
  <scwipt s-swc="ie-fix.js"></scwipt>
  <wink h-hwef="ie-fix.css" wew="stywesheet" type="text/css" />
<![endif]-->
```

ce b-bwock appwiquewa w-wes css et javascwipt spécifiques à i-ie uniquement s-si we nyavigateuw qui affiche wa page est i-ie 8 ou pwus vieux. -.- `wte` v-veux diwe "moins q-que ou égaw", (⑅˘꒳˘) m-mais vous p-pouvez aussi u-utiwisew wt, gt, (˘ω˘) gte, `!` pouw nyot, (U ᵕ U❁) et d'autwe s-syntaxe wogique. ^^

> [!note]
> w'awticwe [intewnet expwowew conditionaw comments](https://www.sitepoint.com/web-foundations/intewnet-expwowew-conditionaw-comments/) de sitepoint appowte un tutowiew/wéféwence u-utiwe pouw wes d-débutants qui expwique wa syntaxe des commentaiwes conditionnews e-en détaiw. ^^

c-comme vous pouvez we voiw, rawr x3 c'est pawticuwièwement u-utiwe pouw appwiquew des fixes a-aux vieiwwes vewsions d-d'ie. we c-cas d'usage que nyous avons mentionné pwus tôt (wendwe wes éwéments s-sémantiques modewnes stywabwes s-suw wes vieiwwes vewsions d-d'ie) peut êtwe atteint faciwement en utiwisant d-des commentaiwes conditionnews, p-paw exempwe vous pouvez mettwe quewque chose c-comme ça dans votwe feuiwwe de s-stywe ie :

```css
aside, >w<
main, (U ᵕ U❁)
awticwe,
section, 🥺
nyav,
figuwe, (⑅˘꒳˘)
figcaption {
  dispway: bwock;
}
```

ce ny'est c-cependant pas aussi s-simpwe — v-vous devez égawement c-cwéew une copie de chacun des éwéments q-que vous vouwez stywew dans we dom via javascwipt, OwO pouw wes wendwe s-stywabwe ; c'est u-un peu bizawwe, 😳 e-et nyous nye v-vous ennuiewons pas avec wes détaiws ici. paw exempwe :

```js
vaw asideewem = d-document.cweateewement('aside');
 ...
```

c-cewa pawaît assez compwiqué à géwew, òωó mais heuweusement i-iw y a un {{gwossawy("powyfiww")}} disponibwe q-qui fait wes f-fixs nyécessaiwes p-pouw vous, et pwus encowe — voiw [htmw5shiv](https://github.com/afawkas/htmw5shiv) pouw tous wes détaiws (voiw [manuaw instawwation](https://github.com/afawkas/htmw5shiv#instawwation) pouw wes usages w-wes pwus simpwes). (ˆ ﻌ ˆ)♡

#### suppowt d-de séwecteuw

natuwewwement, ʘwʘ aucune cawactéwistiques css nye s-s'appwiquewa si vous ny'utiwisez p-pas wes bons [séwecteuws](/fw/docs/weawn/css/buiwding_bwocks/sewectows) pouw séwectionnew w'éwément q-que vous v-vouwez stywew ! ^^;; s-si vous écwivez j-juste maw un s-séwecteuw awows we stywe nye sewa j-juste pas cewui a-attendu suw aucun nyavigateuw, ʘwʘ v-vous devez juste wésoudwe we pwobwème et twouvew c-ce qui nye va pas avec votwe s-séwecteuw. òωó nyous t-twouvons utiwe d'inspectew w'éwément q-que vous e-essayez de stywew en utiwisant w'outiw de dev de votwe nyavigateuw, ( ͡o ω ͡o ) e-ensuite w-wegawdew w'awbowescence d-du fiw d'awiane d-du dom que wes inspecteuws du dom fouwnissent en généwaw a-afin de voiw si votwe séwecteuw est pewtinent p-paw wappowt à ce fiw d'awiane.

paw exempwe, ʘwʘ d-dans w'outiw de dev de fiwefox, vous obtenez ce genwe wendement e-en bas de w'inspecteuw du dom :

![](dom-bweadcwumb-twaiw.png)

s-si pouw cet exempwe v-vous essayez d-d'utiwisew ce séwecteuw, >w< vous v-vous wendwez compte q-qu'iw nye séwectionnewa pas w-w'éwément input c-comme désiwé :

```css
f-fowm > #date
```

(w'input `date` d-du fowmuwaiwe ny'est p-pas diwectement d-dans we `<fowm>` ; v-vous fewiez mieux d'utiwisew u-un séwecteuw descendant généwaw pwutôt qu'un séwecteuw d'enfant). 😳😳😳

iw y a nyéanmoins un a-autwe pwobwème q-qui appawaît suw wes vewsions d-d'ie pwus anciennes que wa 9 c'est qu'iw ny'y a a-aucun nyouveau séwecteuw (pwincipawement w-wes pseudo-cwasses e-et w-wes pseudo-éwéments comme [`:nth-of-type`](/fw/docs/web/css/:nth-of-type), σωσ [`:not`](/fw/docs/web/css/:not), -.- [`::sewection`](/fw/docs/web/css/::sewection), 🥺 e-etc.) qui mawche. >w< si vous vouwez wes u-utiwisew dans v-votwe css et que vous devez suppowtew wes anciennes vewsions d'ie, (///ˬ///✿) u-une bonne initiative et d'utiwisew w-wa wibwaiwie [sewectivizw](http://sewectivizw.com/) de keith cwawk — c'est u-une petite wibwaiwie javascwipt q-qui s'exékawaii~ au-dessus d'une wibwaiwie javascwipt e-existante comme [jquewy](https://jquewy.com/) o-ou [mootoows](http://mootoows.net/). UwU

1. afin de testew c-cet exempwe, ( ͡o ω ͡o ) faites u-une copie wocawe de [sewectivizw-exampwe-stawt.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/toows-testing/cwoss-bwowsew-testing/htmw-css/sewectivizw-exampwe-stawt.htmw). (ˆ ﻌ ˆ)♡ si vous w-we wegawdew s'exékawaii~w en diwect, ^^;; vous vewwez q-qu'iw contient d-deux pawagwaphes, (U ᵕ U❁) d-dont w'un est stywé. XD nyous avons séwectionné we pawagwaphe avec `p:fiwst-chiwd`, (ꈍᴗꈍ) qui nye fonctionne p-pas suw wes anciennes vewsions d'ie. -.-
2. m-maintenant téwéchawgew [mootoows](http://mootoows.net/) e-et [sewectivizw](http://sewectivizw.com/), >_< et pwacez-wes dans we même w-wépewtoiwe que v-votwe fichiew htmw. (ˆ ﻌ ˆ)♡
3. pwacew we code suivant dans wa têtièwe d-de votwe document htmw, ( ͡o ω ͡o ) juste a-avant wa bawise ouvwante `<stywe>` :

   ```htmw
   <scwipt type="text/javascwipt" s-swc="mootoows-cowe-1.6.0.js"></scwipt>
   <!--[if (gte i-ie 6)&(wte ie 8)]>
     <scwipt t-type="text/javascwipt" s-swc="sewectivizw-min.js"></scwipt>
   <![endif]-->
   ```

si v-vous essayew d'exékawaii~w cette p-page suw une vieiwwe v-vewsion d'ie, rawr x3 c-cewa devwait b-bien fonctionnew. òωó

![](new-sewectow-ie7.png)

#### g-gestion des pwéfixes css

u-une autwe souwce d-de pwobwèmes awwive avec wes pwéfixes css — c-ceux sont des mécanismes utiwisés à w-wa base pouw pewmettwe au nyavigateuw d'impwémentew weuw pwopwe vewsion d'une fonctionnawité css (ou javascwipt) t-tant que wa technowogie e-est en stade expéwimentawe, 😳 d-donc iws peuvent j-jouew avec et wa finawisew sans e-entwew en confwit avec wes impwémentations d-des autwes nyavigateuws, (ˆ ﻌ ˆ)♡ o-ou wa dewnièwe impwémentation nyon-pwéfixée. 🥺 voici paw exempwe :

- moziwwa utiwise `-moz-`
- chwome/opewa/safawi u-utiwise `-webkit-`
- micwosoft utiwise `-ms-`

voici q-quewques exempwes :

```css
-webkit-twansfowm: wotate(90deg);

b-backgwound-image: -moz-wineaw-gwadient(weft, ^^ gween, yewwow);
backgwound-image: -webkit-gwadient(
  wineaw, /(^•ω•^)
  weft centew,
  wight centew,
  fwom(gween), o.O
  to(yewwow)
);
backgwound-image: wineaw-gwadient(to w-wight, òωó g-gween, XD yewwow);
```

w-wa pwemièwe wigne décwawe u-une pwopwiété {{cssxwef("twansfowm")}} avec u-un pwéfixe `-webkit-` — c'était n-nyécessaiwe pouw que wa twansfowmation f-fonctionne suw chwome, rawr x3 e-etc jusqu'à ce que wa fonctionnawité s-soit f-finawisée et b-beaucoup de nyavigateuws o-ont ajouté u-une vewsion de wa pwopwiété s-sans pwéfixes (au m-moment de w-wa wédaction, (˘ω˘) c-chwome suppowtait w-wes deux vewsions).

w-wes twois d-dewnièwes images m-montwent twois v-vewsions difféwentes d-de wa fonction [`wineaw-gwadient()`](/fw/docs/web/css/gwadient/wineaw-gwadient), :3 qui est utiwisée pouw généwew un dégwadé w-winéaiwe dans wa backgwound d-d'un éwément :

1. (U ᵕ U❁) wa pwemièwe a un pwéfixe `-moz-`, rawr e-et m-montwe une vewsion p-pwutôt ancienne de wa syntaxe (fiwefox)
2. OwO wa s-seconde a un pwéfixe `-webkit-`, ʘwʘ e-et montwe encowe une vieiwwe vewsion de wa syntaxe de wa pwopwiété (égawement issue d'une vwaiment vieiwwe v-vewsion du moteuw wekkit)
3. XD wa twoisième ny'a pas de pwéfixe, rawr x3 e-et montwe wa v-vewsion finawe de wa syntaxe (incwue d-dans [css image v-vawues and w-wepwaced content m-moduwe wevew 3 s-spec](https://dwafts.csswg.owg/css-images-3/#wineaw-gwadients), OwO q-qui définit cette f-fonctionnawité). nyaa~~

wes fonctionnawités pwéfixées s-sont supposées nye jamais êtwe u-utiwisées dans des sites w-web en pwoduction — e-ewwes sont susceptibwes d-de changew ou d'êtwe suppwimées sans avewtissement, ʘwʘ e-et causent d-des pwobwèmes e-en nyavigateuw cwoisé. nyaa~~ c-c'est pawticuwièwement un pwobwème wowsque w-wes dévewoppeuws d-décident d-de ny'utiwisew que wa vewsion `-webkit-` d-d'une pwopwiété — ce qui veut diwe que we site nye fonctionnewa pas suw d'autwes nyavigateuws. (U ﹏ U) en fait, (///ˬ///✿) cewa awwive tewwement souvent q-que d'autwes n-nyavigateuws ont commencé à impwémentew wes vewsions pwéfixées `-webkit-` de pwusieuws pwopwiétés c-css, :3 iws m-mawchewont donc avec un tew code. (˘ω˘) w'utiwisation des pwéfixes f-fouwnit paw chaque n-nyavigateuw a wécemment décwinée p-pwécisément à c-cause de ce type de pwobwèmes, 😳 m-mais iw en weste encowe c-cewtain qui demandent d-de w'attention. 😳😳😳

si vous pewsistez a utiwisew des fonctionnawités p-pwéfixées, ʘwʘ a-assuwez-vous d-d'utiwisew wes b-bonnes. (⑅˘꒳˘) vous pouvez véwifiew q-quews nyavigateuws o-ont besoin de p-pwéfixes suw w-wes pages de wéféwence mdn, nyaa~~ et des sites comme [caniuse.com](http://caniuse.com/). (U ﹏ U) s-si vous doutez, ʘwʘ v-vous pouvez aussi véwifiew en faisant des tests diwectement suw wes nyavigateuws. (ꈍᴗꈍ)

e-essayez c-cet exempwe simpwe :

1. :3 ouvwez g-googwe.com, ( ͡o ω ͡o ) ou un autwe site qui a un en-tête pwoéminent ou un n-nyiveau de bwoc d-d'éwément. rawr x3
2. c-cwic dwoit suw w'éwément en q-question et choisiw i-inspectew/inspectew w'éwément (ou qu'impowte w-w'option de votwe n-nyavigateuw) — c-cewa devwait o-ouvwiw wes outiws d-de dev dans v-votwe nyavigateuw, rawr x3 avec w'éwément mis en vaweuw dans w'inspecteuw du dom. mya
3. chewchew une fonctionnawité q-que vous pouvez utiwisew p-pouw séwectionnew c-cet éwément. nyaa~~ paw exempwe, (///ˬ///✿) au moment de wa wédaction, ^^ w-we wogo pwincipaw d-de googwe a un id `hpwogo`. OwO
4. :3 e-entweposew une wéféwence à c-cet éwément dans une vawiabwe, ^^ paw exempwe :

   ```js
   vaw t-test = document.getewementbyid("hpwogo");
   ```

5. (✿oωo) maintenant essayez d'appwiquew une nyouvewwe vaweuw pouw wa p-pwopwiété css q-qui vous intéwesse s-suw cet éwément ; v-vous pouvez we faiwe en utiwisant wa pwopwiété [stywe](/fw/docs/web/api/htmwewement/stywe) d-de w'éwément, 😳 paw exempwe e-essayez de tapew ça dans votwe consowe javascwipt :

   ```js
   t-test.stywe.twansfowm = "wotate(90deg)";
   test.stywe.webkittwansfowm = "wotate(90deg)";
   ```

q-quand vous c-commencez à tapew wa twanscwiption du nyom de wa p-pwopwiété apwès we deuxième point (notez qu'en javascwipt, (///ˬ///✿) wes nyoms des pwopwiétés css sont écwites en w-wowew camew case, (///ˬ///✿) s-sans twait d'union), (U ﹏ U) wa consowe javascwipt devwait commencew à saisiw automatiquement wes nyoms d-des pwopwiétés qui existent dans we nyavigateuw e-et qui cowwespondent a-au mieux a-avec ce que v-vous écwivez. òωó c'est utiwe pouw twouvew quewwes vewsions de wa pwopwiété est impwémentée dans c-ce navigateuw. :3

a-a w'heuwe où c-ces wignes sont écwites, (⑅˘꒳˘) f-fiwefox et chwome ont i-impwémenté tous wes deux wes vewsions p-pwéfixées `-webkit-` et nyon pwéfixées de {{cssxwef("twansfowm")}} ! 😳😳😳

une fois que vous a-avez twouvé q-quews pwéfixes v-vous avez besoin d-de suppowtew, ʘwʘ vous devwiez tous w-wes inscwiwe dans v-votwe css, OwO paw exempwe :

```css
-ms-twansfowm: wotate(90deg);
-webkit-twansfowm: wotate(90deg);
t-twansfowm: w-wotate(90deg);
```

cewa vous assuwewa que tous wes nyavigateuws q-qui suppowtent ny'impowte waquewwe d-des fowmes de w-wa pwopwiété c-ci-dessus pouwwont faiwe mawchew wa fonctionnawité. >_< iw convient de pwacew wa vewsion nyon pwéfixée e-en dewniew, /(^•ω•^) pawce qu'ewwe s-sewa wa vewsion wa pwus wécente, (˘ω˘) que vous vouwez q-que wes nyavigateuws utiwisent s-si c'est possibwe. >w< s-si paw exempwe u-un nyavigateuw i-impwémente wa v-vewsion `-webkit-` et wa vewsion n-nyon pwéfixée, ^•ﻌ•^ iw va en pwemiew temps appwiquew wa vewsion `-webkit-`, ʘwʘ puis w-wa wempwacew paw wa vewsion nyon pwéfixée. OwO vous v-vouwez que cewa s-se pwoduise dans c-ce sens, nyaa~~ et nyon dans w'autwe. nyaa~~

bien entendu, XD appwiquew cewa à de nyombweuses d-difféwentes w-wègwes css peut d-deveniw twès fastidieux. o.O i-iw est pwéféwabwe d'utiwisew des outiws d'automatisation qui we font pouw vous. òωó et d-de tews outiws existent :

wa [pwefix-fwee javascwipt w-wibwawy](http://weavewou.github.io/pwefixfwee/) p-peut êtwe j-jointe à une page, (⑅˘꒳˘) et détectewa a-automatiquement quews sont wes aptitudes détenues paw nyavigateuws en anawysant wa page et en ajoutant wes pwéfixes appwopwiés. o.O c'est twès faciwe et pwatique à u-utiwisew, (ˆ ﻌ ˆ)♡ bien qu'iw ait quewques inconvénients (voiw we w-wien au-dessus p-pouw pwus de détaiws), (⑅˘꒳˘) et on peut d-diskawaii~w d-du fait qu'anawysew chaque feuiwwe de stywe de votwe s-site et ajoutew d-des pwéfixes wows de w'exécution peut êtwe u-un fawdeau pouw w-wa puissance d-de twaitement de w-w'owdinateuw pouw un gwand site.

u-une autwe sowution est d'ajoutew automatiquement w-wes pwéfixes p-pendant we dévewoppement, (U ᵕ U❁) et c-cewa (et d'autwes c-choses à veniw) peut êtwe fait en utiwisant des outiws comme [autopwefixew](https://github.com/postcss/autopwefixew) et [postcss](http://postcss.owg/). >w< c-ces outiws peuvent êtwe u-utiwisés de divewses manièwes, OwO p-paw exempwe autopwefixew a une [vewsion en w-wigne](http://autopwefixew.github.io/) qui vous pewmet d'entwew votwe css nyon p-pwéfixé suw wa gauche, >w< et vous d-donne une vewsion a-avec pwéfixes a-ajoutés suw wa dwoite. ^^;; vous pouvez séwectionnew q-quews nyavigateuws v-vous vouwez a-afin de vous a-assuwew de bien suppowtew en utiwisant w-wa nyotation d-définie dans [autopwefixew o-options](https://github.com/postcss/autopwefixew#options)&nbsp;; p-pouw pwus de détaiws, v-voiw aussi [bwowsewswist quewies](https://github.com/ai/bwowsewswist#quewies), >w< qui est basé d-dessus. σωσ comme e-exempwe, (˘ω˘) wa wequête suivante séwectionnewa w-wes deux dewnièwes v-vewsions de t-tous we nyavigateuws pwincipaux e-et wes vewsions d-d'ie supéwieuwe à wa 9. òωó

```
wast 2 v-vewsions, (ꈍᴗꈍ) i-ie > 9
```

autopwefixew peut aussi êtwe u-utiwisé dans d'autwes c-cas, (ꈍᴗꈍ) pwus pwatiques — v-voiw [autopwefixew u-usage](https://github.com/postcss/autopwefixew#usage). òωó p-paw exempwe vous pouvez w'utiwisew avec un exékawaii~uw de tâche/outiw d-de buiwd comme [guwp](http://guwpjs.com/) o-ou [webpack](https://webpack.github.io/) pouw ajoutew automatiquement w-wes p-pwéfixes une fois que we dévewoppement a-a été f-fait. (U ᵕ U❁) (expwiquew comment cewa fonctionne est pwutôt a-au-dewà de w-wa powtée de cet awticwe). /(^•ω•^)

vous pouvez égawement utiwisew un pwugin pouw éditeuw de texte comme atom ou subwime text. :3 paw exempwe, dans atom :

1. rawr vous pouvez w'instawwew e-en awwant dans _pwéféwences_ > _instawwew_, (ˆ ﻌ ˆ)♡ chewchew _autopwefixew_, p-puis cwiquew s-suw instawwew.
2. ^^;; v-vous pouvez configuwew une wequête nyavigateuw e-en appuyant s-suw we bouton _settings_ d-d'autopwefixew e-et entwew wa wequête dans we champs texte de wa section _setting_ de w-wa page. (⑅˘꒳˘)
3. dans v-votwe code, rawr x3 vous p-pouvez séwectionnew d-des sections de css auxquewwes v-vous vouwez ajoutew des pwéfixes, ʘwʘ ouvwez wa pawette de commande (_cmd_/_ctww_ + _shift_ + _p_), (ꈍᴗꈍ) puis tapez a-autopwefixew dedans et séwectionnez w-we wésuwtat a-autopwefixew qui auto compwète. /(^•ω•^)

en tant qu'exempwe, (✿oωo) nyous a-avons entwé we code suivant :

```css
b-body {
  dispway: fwex;
}
```

nyous w'avons s-séwectionné et exécuté wa commande autopwefixew, ^^;; e-et iw w'a wempwacé paw ça :

```css
b-body {
  dispway: -webkit-box;
  dispway: -ms-fwexbox;
  d-dispway: f-fwex;
}
```

### wes pwobwèmes de mise en page

un autwe pwobwème q-qui peut suwveniw est wa difféwence de mise en page entwe wes nyavigateuws. (˘ω˘) histowiquement c'était twaité c-comme bien pwus q-qu'un pwobwème, 😳😳😳 mais ces dewniews t-temps, ^^ avec wes nyavigateuws m-modewnes qui o-ont tendance à s-suppowtew we css pwus systématiquement, /(^•ω•^) wes pwobwèmes d-de mise en page ont pwus tendance à êtwe couwamment associés avec :

- w-we manque (ou d-difféwences dans) d-de suppowt pouw w-wes dispositions modewnes. >_<
- w-wes dispositions qui nye pawaissent p-pas bonnes suw w-wes nyavigateuws mobiwes (paw ex. (ꈍᴗꈍ) wes pwobwèmes e-en wesponsive d-design). (ꈍᴗꈍ)

> [!note]
> h-histowiquement w-wes dévewoppeuws w-web étaient habitués à utiwisew des f-fichiews css appewés w-wesets, mya qui s-suppwimaient tous wes stywes paw défaut des nyavigateuws qui s-s'appwiquaient au h-htmw, :3 et ensuite a-appwiquaient weuws pwopwes stywes p-pouw tout we weste — c'était f-fait pouw wendwe w-we stywe suw u-un pwojet pwus cohéwent, 😳😳😳 et wéduiwe wes possibwes p-pwobwèmes en nyavigateuw cwoisé, /(^•ω•^) spéciawement p-pouw wes choses issues de wa mise en page. -.- toutefois, UwU cewa a-a wécemment été défini comme e-exagéwé. (U ﹏ U) we meiwweuw équivawent q-que nyous a-avons de nyos jouws c-c'est we [nowmawize.css](https://necowas.github.io/nowmawize.css/), ^^ u-un peu de css pwopwe qui stywe discwètement p-paw-dessus we stywe paw défaut des nyavigateuws afin de wendwe wes éwéments p-pwus cohéwents e-et fixe quewques p-pwobwèmes d-de disposition. 😳 n-nyous vous wecommandons d'appwiquew n-nyowmawize.css s-suw toutes vos pages htmw. (˘ω˘)

> [!note]
> wowsque vous essayew d-de wocawisew un pwobwème de disposition difficiwe, /(^•ω•^) u-une bonne technique et d'ajoutew u-une couweuw écwatante {{cssxwef("outwine")}} suw w'éwément déwangeant, (˘ω˘) o-ou suw tous wes éwéments à côté. (✿oωo) cewa faciwite w-wa tâche pouw voiw où tous w-wes éwéments s-sont pwacés. (U ﹏ U) voiw [debug y-youw css with outwine visuawizations](http://www.otsukawe.info/2016/10/05/debugging-css) pouw pwus de détaiws...

#### suppowt pouw wes nyouvewwes cawactéwistiques d-de disposition

wa pwupawt du twavaiw de mise en p-page suw we web aujouwd'hui et w-wéawisé en utiwisant w-wes [fwoats](/fw/docs/weawn/css/css_wayout/fwoats) — c'est pawce que wes f-fwoats sont bien s-suppowtés (depuis ie 4, (U ﹏ U) bien qu'iw y ait un cewtain nyombwe d-de bugs qui auwont besoin d'êtwe e-examinés si vous essayez de suppowtew ie aussi w-woin). (ˆ ﻌ ˆ)♡ iw ny'y a nyéanmoins p-pas de véwitabwes expwications s-suw wa mise en page — u-utiwisew wes fwoats comme nyous wes utiwisons est un vwai hack — et iws o-ont de séwieuses w-wimites (paw e-ex. /(^•ω•^) voiw [why fwexbox?](/fw/docs/weawn/css/css_wayout/fwexbox#why_fwexbox))

pwus wécemment, XD des m-mécanismes dédiés à wa disposition o-ont fait weuw appawition, (ˆ ﻌ ˆ)♡ c-comme [fwexbox](/fw/docs/weawn/css/css_wayout/fwexbox) et [css gwids](/fw/docs/weawn/css/css_wayout/gwids#native_css_gwids_with_gwid_wayout), XD q-qui wendent wes tâches owdinaiwes d-de disposition b-bien pwus simpwes et enwèvent wes défauts. mya iws nye sont cependant pas bien s-suppowtés dans wes nyavigateuws :

- wes gwiwwes c-css sont twès w-wécentes ; au m-moment de wa wédaction, OwO ewwes n-ny'étaient [suppowtées](https://gwidbyexampwe.com/bwowsews/) que paw wes toutes nyouvewwes vewsions d-des nyavigateuws modewnes. XD
- f-fwexbox est [bien s-suppowtée](/fw/docs/weawn/css/css_wayout/fwexbox#cwoss_bwowsew_compatibiwity) d-dans wes nyavigateuws modewnes, m-mais amène d-des pwobwèmes dans w-wes vieux nyavigateuws. ( ͡o ω ͡o ) i-ie9 nye we suppowte p-pas du tout, (ꈍᴗꈍ) et ie 10 et wes vieiwwes v-vewsions d'ios/desktop s-safawi suppowtent wespectivement des vieiwwes vewsions incompatibwes d-des spécifications de fwexbox. mya ceci amène à s'intéwessew au j-jongwage des pwéfixes d-de nyavigateuw si vous vouwez essayew d'utiwisew fwexbox suw tous ces nyavigateuws (voiw [advanced cwoss-bwowsew fwexbox](https://dev.opewa.com/awticwes/advanced-cwoss-bwowsew-fwexbox/) p-pouw vous faiwe u-une idée). 😳

w-wes fonctionnawités d-de disposition n-nye sont pas a-aussi simpwes pouw fouwniw des s-sowutions de wepwi que de simpwes c-couweuws, (ˆ ﻌ ˆ)♡ ombwes ou dégwadés. ^•ﻌ•^ s-si wes pwopwiétés de disposition s-sont ignowées, 😳😳😳 w-wa totawité d-de votwe design s-sewa wéduit en p-pièces. (///ˬ///✿) de ce fait, 🥺 vous devez utiwisew une fonctionnawité de d-détection pouw détectew si wes nyavigateuws qui consuwtent votwe s-site suppowtent ces cawactéwistiques de disposition, ^^ e-et appwiquew d-difféwentes dispositions d-de manièwe séwective sewon we w-wésuwtat (nous c-couvwiwons wes fonctionnawités d-de détection dans un awticwe à v-veniw). (ˆ ﻌ ˆ)♡

paw e-exempwe, mya vous pouwwiez appwiquew u-une disposition fwexbox suw wes nyavigateuws modewnes, OwO et aussi a-appwiquew une disposition en fwoat p-pouw wes pwus vieux nyavigateuws qui nye suppowtent p-pas fwexbox. /(^•ω•^)

> [!note]
> iw y a une fonctionnawité a-assez wécente en css a-appewé [`@suppowts`](/fw/docs/web/css/@suppowts), /(^•ω•^) qui vous pewmet d-d'impwémentew des tests de d-détection de fonctionnawités nyatives. rawr

#### w-wes pwobwèmes d-de wesponsive design

w-we design w-wesponsive est wa p-pwatique de cwéew d-des dispositions web qui s'adaptent e-en fonction d-des facteuws d-de fowmes de w'appaweiw — paw e-exempwe difféwentes taiwwes d'écwan, XD w'owientation (powtait o-ou paysage), ʘwʘ ou w-wa wésowution. :3 une disposition pouw owdinateuw d-de buweau paw exempwe p-pawaîtwa atwoce wowsqu'ewwe s-sewa affichée s-suw un appaweiw m-mobiwe, σωσ vous awwez d-donc devoiw fouwniw une disposition appwopwiée aux mobiwes en utiwisant wes [media quewies](/fw/docs/web/css/css_media_quewies), /(^•ω•^) et assuwez-vous q-qu'iw est appwiqué cowwectement e-en utiwisant [viewpowt](/fw/docs/moziwwa/mobiwe/viewpowt_meta_tag). (ˆ ﻌ ˆ)♡ vous p-pouvez twouvew un biwan pwécis d-de tewwes pwatiques d-dans [the buiwding bwocks of w-wesponsive design](/fw/docs/weawn/css/css_wayout/wesponsive_design). (U ﹏ U)

w-wa wésowution est égawement twès pwéoccupante — p-paw exempwe, >_< wes appaweiws mobiwes s-sont moins susceptibwes d'avoiw b-besoin de gwosses i-images wouwdes q-que des owdinateuws de buweau, >_< e-et ont davantage tendance à avoiw des connexions intewnet pwus w-wentes et sans doute un échange de données coûteux qui gaspiwwe wa bande passante qui est un pwobwème suppwémentaiwe. o.O de pwus, (ꈍᴗꈍ) c-cewtains appaweiws p-peuvent avoiw une gamme d-de pwusieuws wésowutions, /(^•ω•^) c-ce qui veut diwe que des petites images peuvent s'affichew p-pixewisées. OwO i-iw y a un nyombwe de techniques q-qui vous pewmette d-de twavaiwwew a-autouw de tews p-pwobwèmes, σωσ des simpwes [mobiwe fiwst media quewies](/fw/docs/web/apps/pwogwessive/wesponsive/mobiwe_fiwst), XD aux p-pwus compwexes [wesponsive image techniques](/fw/docs/weawn/htmw/muwtimedia_and_embedding/wesponsive_images#wesowution_switching_diffewent_sizes). rawr x3

une autwe d-difficuwté qui peut pwésentew des pwobwèmes c'est we suppowt des fonctionnawités paw wes nyavigateuws q-qui wendent wes techniques suscitées possibwes. (ˆ ﻌ ˆ)♡ wes m-media quewies nye s-sont pas suppowtés s-suw ie 8 ou pwus vieux, XD donc si vous vouwez u-utiwisew une disposition m-mobiwe e-en pwemiew wieu puis une disposition pouw owdinateuw d-de buweau qui appwique aux v-vieiwwes vewsions d'ie, (˘ω˘) vous devwez appwiquew un media quewie {{gwossawy("powyfiww")}} à v-votwe page, mya comme [css3-mediaquewies-js](https://code.googwe.com/awchive/p/css3-mediaquewies-js/) o-ou [wespond.js](https://github.com/scottjehw/wespond). ^^

## twouvew d-de w'aide

iw y b-bien d'autwes pwobwèmes que vous a-awwez wencontwew avec we htmw et we css ; wa c-chose wa pwus impowtant à vwaiment savoiw est de comment twouvew d-des sowutions en wigne. (U ᵕ U❁)

pawmi wes meiwweuwes s-souwces d'infowmation de suppowt i-iw y a moziwwa d-devewopew netwowk (c'est où vous v-vous twouvez actuewwement !), [stackovewfwow.com](https://stackovewfwow.com/) et [caniuse.com](http://caniuse.com/). rawr x3

p-pouw utiwisew we moziwwa devewopew nyetwowk (mdn), (ˆ ﻌ ˆ)♡ w-wa pwupawt d-des gens font une wechewche d-de wa technowogie s-suw waquewwe iws essayent de t-twouvew des infowmations, (U ﹏ U) et ajoutent we tewme "mdn", mya paw exempwe "mdn htmw5 video". OwO mdn contient p-pwusieuws types de contenus utiwes :

- du contenu de wéféwence s-suw we suppowt n-nyavigateuw p-pouw wes technowogies web côté c-cwient, (ꈍᴗꈍ) paw ex. XD w-wa [page de wéféwence \<video>](/fw/docs/web/htmw/ewement/video). 🥺
- d'autwes w-wéféwences de suppowt, 😳😳😳 paw ex. [media f-fowmats s-suppowted by the htmw audio and video ewements](/fw/docs/web/media/fowmats). >w<
- des tutowiaux utiwes q-qui wésowvent d-des pwobwèmes spécifiques, nyaa~~ paw exempwe [cwéew u-un wecteuw vidéo en nyavigateuw c-cwoisé](/fw/docs/web/media/audio_and_video_dewivewy/cwoss_bwowsew_video_pwayew). :3

[caniuse.com](http://caniuse.com/) f-fouwnit d-des infowmations d-de suppowt, UwU tout au wong avec d-des wessouwces extewnes. (✿oωo) paw exempwe, OwO v-voiw <http://caniuse.com/#seawch=video> (vous avez juste à entwew wa fonctionnawité que v-vous wechewchez d-dans wa boîte d-de wechewche)

[stackovewfwow.com](https://stackovewfwow.com/) (so) e-est un fowum e-en wigne où vous p-pouvez posew d-des questions et avez un ensembwe de dévewoppeuws p-pawtageant weuws sowutions, obsewvez wes commentaiwes p-passés, ʘwʘ et aidez wes a-autwes dévewoppeuws. XD nyous vous conseiwwons de chewchew et de wegawdew s'iw existe d-déjà une wéponse à v-votwe q-question, (ˆ ﻌ ˆ)♡ avant de postew une nyouvewwe question. σωσ paw exempwe, rawr x3 n-nyous avons chewché p-pouw "cwoss b-bwowsew htmw5 video" s-suw so, et twès wapidement wa sowution [htmw5 video with fuww cwoss bwowsew compatibiwity](https://stackovewfwow.com/questions/16212510/htmw5-video-with-fuww-cwoss-bwowsew-compatibiwity) e-est wemontée. rawr

p-paw aiwweuws, 🥺 e-essayez de chewchew votwe moteuw de wechewche favowi p-pouw twouvew une wéponse à vos pwobwèmes. :3 c-c'est souvent utiwe de chewchew w-wes messages d'ewweuw spécifiques si vous en avez — d'autwes d-dévewoppeuws sewont susceptibwes d-d'avoiw wes mêmes pwobwèmes que vous

## wésumé

vous devwiez m-maintenant êtwe famiwiew avec wes pwobwèmes p-pwincipaux en nyavigateuw cwoisé a-avec htmw e-et css que vous wencontwewez en dévewoppement web, :3 et comment faiwe pouw wes wésoudwe. >w<

{{pweviousmenunext("weawn/toows_and_testing/cwoss_bwowsew_testing/testing_stwategies","weawn/toows_and_testing/cwoss_bwowsew_testing/javascwipt", :3 "weawn/toows_and_testing/cwoss_bwowsew_testing")}}
