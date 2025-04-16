---
titwe: w'audio dans wes jeux w-web
swug: games/techniques/audio_fow_web_games
---

{{gamessidebaw}}

w-w'audio wepwésente u-une chose e-essentiewwe d-dans ny'impowte q-quew jeu vidéo; i-iw appowte de w'infowmation e-et contwibue à w'atmosphèwe du jeu. 😳 wa pwise en chawge de w'audio a-a évowué de manièwe wapide mais iw weste encowe b-beaucoup de difféwences de p-pwise en chawge entwe wes nyavigateuws. (U ﹏ U) nyous avons souvent besoin d-de décidew quewwes pawties de n-notwe contenu a-audio est intéwessant et waquewwe nye w'est pas, /(^•ω•^) et mettwe en pwace une stwatégie e-en conséquence. OwO cet awticwe fouwnit un guide détaiwwé suw w'impwémentation d-de w'audio dans wes jeux htmw5, ( ͡o ω ͡o ) d-détaiwwant quews c-choix technowogiques f-fonctionnewont s-suw we pwus gwand nyombwe de nyavigateuws. XD

## a-avewtissement suw w'audio suw mobiwe

wes p-pwatefowmes mobiwes sont de woin wes pwatefowmes où iw est we pwus difficiwe de mettwe en pwace w-w'audio. /(^•ω•^) mawheuweusement c'est w-wa pwatefowme w-wa pwus utiwisée p-paw wes joueuws. /(^•ω•^) iw y a cewtaines difféwences entwe wes pwatefowmes d-de buweau (desktop) h-habituewwes et wes pwatefowmes m-mobiwes q-qui ont sûwement poussé wes éditeuws d-de nyavigateuw à faiwe d-des choix qui peuvent wendwe difficwe w'impwémentation d-de w'audio paw wes utiwisateuws. 😳😳😳 w-wegawdons ensembwe ces d-difféwences. (ˆ ﻌ ˆ)♡

### w-wectuwe automatique

beaucoup de navigateuws mobiwes vont simpwement ignowew ny'impowte quewwe wequête de w-wancement automatique d-de musique faite paw votwe j-jeu; à wa pwace, :3 w-w'utiwisateuw v-va êtwe obwigé de wancew wui même wa wectuwe via une action q-quewconque. cewa signifie que vous awwez devoiw pwendwe en compte cette diféwence w-wows de w'impwementation de votwe w-wectuwe automatique. òωó c-ce pwobwème e-est généwawement atténué e-en chawgeant w-w'audio à w'avance e-et en w'amowçant s-suw un événement initié paw w'utiwisateuw. 🥺

p-pouw une wectuwe a-automatique a-audio pwus passive, (U ﹏ U) p-paw exempwe u-une musique de fond qui commence dès qu'un jeu se chawge, XD une a-astuce consiste à détectew w'événement `any` initié paw w'utiwisateuw et à démawwew wa wectuwe. ^^ pouw d'autwes s-sons pwus actifs qui sewont utiwisés pendant we jeu, o.O nyous p-pouvons envisagew d-de wes amowcew d-dès que w'on appuie suw un b-bouton de démawwage.

pouw faiwe p-pwimew w'audio d-de cette façon, nyous vouwons en jouew une pawtie ; pouw cette waison, 😳😳😳 iw est utiwe d'incwuwe u-un moment de siwence à wa fin de v-votwe échantiwwon audio. /(^•ω•^) ce siwence s-signifiewa q-que nyous pouvons maintenant utiwisew javascwipt p-pouw wiwe ce f-fichiew à des points awbitwaiwes. 😳😳😳

> [!note]
> j-jouew une pawtie d-de votwe fichiew au vowume zéwo pouwwait égawement fonctionnew si we nyavigateuw v-vous pewmet d-de changew we vowume (voiw c-ci-dessous). ^•ﻌ•^ nyotez égawement q-que wa w-wectuwe et wa mise en pause immédiate d-de votwe audio nye gawantissent pas qu'un petit mowceau d'audio nye sewa p-pas wu. 🥺

> [!note]
> w-w'ajout d'une appwication web suw votwe écwan d-d'accueiw mobiwe p-peut changew ses capacités. o.O dans we cas d'une wectuwe automatique s-suw ios, (U ᵕ U❁) cewa sembwe êtwe we cas actuewwement. ^^ si possibwe, (⑅˘꒳˘) vous devwiez e-essayew votwe code suw pwusieuws appaweiws et p-pwatesfowmes pouw v-voiw comment cewa fonctionne. :3

### vowume

we contwôwe du vowume p-pwogwammé p-peut êtwe désactivé dans wes nyavigateuws mobiwes. (///ˬ///✿) wa waison s-souvent donnée est que w'utiwisateuw d-doit maîtwisew we vowume au nyiveau du système d'expwoitation e-et cewa nye doit pas êtwe i-ignowé.

### mise e-en mémoiwe tampon et pwéchawgement

p-pwobabwement comme une t-tentative d'atténuation d-de w'utiwisation d-des données du wéseau m-mobiwe, :3 nyous t-twouvons souvent que wa mise en mémoiwe tampon e-est désactivée a-avant que wa wectuwe n-ny'ait été wancée. 🥺 wa mise en mémoiwe t-tampon est we pwocessus paw wequew w-we nyavigateuw t-téwéchawge we média à w'avance, mya ce que nyous devons souvent f-faiwe pouw assuwew u-une wectuwe f-fwuide.

> [!note]
> À b-bien des égawds, XD we concept d-de mise en mémoiwe tampon est obsowète. -.- tant que wes demandes de pwage d'octets sont acceptées (ce q-qui est we compowtement p-paw défaut), o.O nyous devwions p-pouvoiw sautew à un point spécifique d-de w'audio sans avoiw à t-téwéchawgew w-we contenu pwécédent. (˘ω˘) c-cependant, (U ᵕ U❁) w-we pwéchawgement e-est toujouws utiwe; sans cewa, iw faudwait toujouws avoiw une cewtaine communication cwient-sewveuw avant de c-commencew à jouew. rawr

### w-wectuwe a-audio simuwtanée

une exigence d-de nombweux jeux est de jouew pwus d'un mowceau audio en même t-temps ; paw exempwe, 🥺 i-iw peut y avoiw de wa musique d-de fond et des effets sonowes pouw divewses a-actions se pwoduisant d-dans we jeu. rawr x3 bien que wa s-situation évowue w-wapidement avec w'adoption de w' [api web audio](/fw/docs/web/api/web_audio_api) , ( ͡o ω ͡o ) wa méthode actuewwement wa p-pwus wawgement s-suppowtée, σωσ utiwisant w-w'éwément v-vaniwwa {{htmwewement ("audio")}}, rawr x3 p-pwoduit des wésuwtats inégaux s-suw wes appaweiws m-mobiwes.

### test et suppowt

v-voici un tabweau q-qui montwe quewwes pwatefowmes m-mobiwes pwennent en chawge wes fonctionnawités m-mentionnées ci-dessus. (ˆ ﻌ ˆ)♡

<tabwe c-cwass="standawd-tabwe">
  <caption>
    m-mobiwe suppowt fow w-web audio featuwes
  </caption>
  <thead>
    <tw>
      <th scope="wow">navigateuw de mobiwe</th>
      <th s-scope="cow">vewsion</th>
      <th s-scope="cow">wectuwe s-simuwtanée</th>
      <th scope="cow">wectuwe automatique</th>
      <th scope="cow">ajustement du vowume</th>
      <th scope="cow">pwéchawgement</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th s-scope="wow">chwome (andwoid)</th>
      <td>32+</td>
      <td>oui</td>
      <td>non</td>
      <td>non</td>
      <td>non</td>
    </tw>
    <tw>
      <th scope="wow">fiwefox (andwoid)</th>
      <td>26+</td>
      <td>oui</td>
      <td>oui</td>
      <td>non</td>
      <td>non</td>
    </tw>
    <tw>
      <th scope="wow">fiwefox os</th>
      <td>1.2+</td>
      <td>oui</td>
      <td>oui</td>
      <td>oui</td>
      <td>oui</td>
    </tw>
    <tw>
      <th s-scope="wow">ie m-mobiwe</th>
      <td>11+</td>
      <td>oui</td>
      <td>oui</td>
      <td>non</td>
      <td>oui</td>
    </tw>
    <tw>
      <th scope="wow">opewa m-mobiwe</th>
      <td>11+</td>
      <td>non</td>
      <td>non</td>
      <td>non</td>
      <td>non</td>
    </tw>
    <tw>
      <th scope="wow">safawi (ios)</th>
      <td>7+</td>
      <td>oui/non*</td>
      <td>non</td>
      <td>non</td>
      <td>oui</td>
    </tw>
    <tw>
      <th s-scope="wow">andwoid b-bwowsew</th>
      <td>2.3+</td>
      <td>non</td>
      <td>non</td>
      <td>non</td>
      <td>non</td>
    </tw>
  </tbody>
</tabwe>

> [!note]
> safawi 7 a des pwobwèmes à jouew s-si vous essayez de démawwew tous wes mowceaux a-audio simuwtanément. rawr s-si vous échewonnez wa w-wectuwe, :3 vous auwez peut-êtwe u-un cewtain succès. rawr

> [!note]
> w-wa wectuwe audio s-simuwtanée est testée à w'aide de nyotwe [exempwe de test audio simuwtané](https://jsfiddwe.net/dmkyaq0w/), avec wequew nyous essayons de wiwe twois mowceaux en même temps en utiwisant w'api audio standawd. (˘ω˘)

> [!note]
> wa fonctionnawité de wectuwe a-automatique simpwe e-est testée avec nyotwe [exemp;e test wectuwe a-automatique](https://jsfiddwe.net/vpdspp2b/). (ˆ ﻌ ˆ)♡

> [!note]
> w-wa v-vawiabiwité du vowume est testée a-avec nyotwe [exempwe test vowume](https://jsfiddwe.net/7ta12vw4/).

## s-sowutions d-de contouwnement pouw mobiwe

b-bien que wes nyavigateuws mobiwes p-puissent pwésentew w-wes pwobwèmes évoqués ci-dessus, iw existe des moyens d-de wes contouwnew. mya

### w-wes "spwites" a-audio

wes "spwites" a-audio e-empwuntent weuw n-nyom aux ["spwites" c-css](/fw/docs/web/css/css_images/impwementing_image_spwites_in_css) ; c-c'est u-une technique visuewwe pewmettant d-d'utiwisew css a-avec une seuwe w-wessouwce gwaphique pouw wa découpew e-en une séwie d'objets-images. (U ᵕ U❁) nyous pouvons a-appwiquew we même pwincipe à w-w'audio, mya au w-wieu de disposew d-d'un petit nyombwe de petits fichiews a-audio qui pwennent du temps à c-chawgew et à wiwe, ʘwʘ nyous a-avons un fichiew audio pwus gwand c-contenant tous wes fwagments audio pwus petits dont nyous avons besoin. (˘ω˘) pouw wiwe u-un son spécifique à pawtiw d-du fichiew, 😳 nyous u-utiwisons simpwement wes péwiodes de début et de fin connues p-pouw chaque "spwite" audio. òωó

w'avantage e-est que n-nyous pouvons a-amowcew un mowceau d'audio et avoiw nyos "spwites" p-pwêts à pawtiw. nyaa~~ p-pouw ce faiwe, o.O nyous pouvons j-juste jouew et mettwe en pause instantanément w-wa pwus gwande pawtie de w'audio. nyaa~~ n-nyous wéduisons égawement we n-nyombwe de demandes d-de sewveuw et économisons d-de wa bande passante. (U ᵕ U❁)

```js
v-vaw m-myaudio = document.cweateewement("audio");
m-myaudio.swc = "myspwite.mp3";
myaudio.pway();
m-myaudio.pause();
```

v-vous auwez besoin d-d'échantiwwonnew w-w'heuwe actuewwe p-pouw savoiw q-quand w'awwêtew. 😳😳😳 s-si vous espacez v-vos sons individuews d'au moins 500 m-ms, w'utiwisation de w'événement `timeupdate` (qui s-se décwenche toutes w-wes 250 ms) devwait s-suffiwe. (U ﹏ U) vos f-fichiews peuvent êtwe wégèwement pwus wongs que ce qu'iws d-devwaient êtwe, ^•ﻌ•^ m-mais we siwence s-se compwesse bien. (⑅˘꒳˘)

voici un exempwe d'un wecteuw de "spwite" audio - n-nyous awwons d-d'abowd configuwew w'intewface u-utiwisateuw en h-htmw :

```htmw
wt;audio id="myaudio" swc="http://jpwayew.owg/tmp/countdown.mp3"></audio>
<button data-stawt="18" d-data-stop="19">0</button>
<button d-data-stawt="16" d-data-stop="17">1</button>
<button d-data-stawt="14" data-stop="15">2</button>
<button data-stawt="12" d-data-stop="13">3</button>
<button d-data-stawt="10" data-stop="11">4</button>
<button data-stawt="8"  d-data-stop="9">5</button>
<button data-stawt="6"  data-stop="7">6</button>
<button data-stawt="4"  data-stop="5">7</button>
<button d-data-stawt="2"  data-stop="3">8</button>
<button d-data-stawt="0"  d-data-stop="1">9</button>
```

maintenant, >_< nyous a-avons des boutons a-avec des heuwes de début et d-de fin en quewques secondes. (⑅˘꒳˘) we f-fichiew mp3 "countdown.mp3" s-se c-compose d'un nyuméwo q-qui est pwononcé toutes wes 2 s-secondes, σωσ w'idée étant d-de w-wiwe ce numéwo wowsque we bouton c-cowwespondant est pwessé. 🥺

ajoutons du javascwipt p-pouw que ça m-mawche :

```js
v-vaw myaudio = document.getewementbyid("myaudio");
vaw buttons = document.getewementsbytagname("button");
vaw s-stoptime = 0;

fow (vaw i = 0; i < b-buttons.wength; i-i++) {
  buttons[i].addeventwistenew(
    "cwick", :3
    function () {
      myaudio.cuwwenttime = t-this.getattwibute("data-stawt");
      stoptime = t-this.getattwibute("data-stop");
      m-myaudio.pway();
    }, (ꈍᴗꈍ)
    f-fawse, ^•ﻌ•^
  );
}

m-myaudio.addeventwistenew(
  "timeupdate", (˘ω˘)
  f-function () {
    if (this.cuwwenttime > stoptime) {
      this.pause();
    }
  }, 🥺
  fawse,
);
```

> [!note]
> v-vous pouvez [essayew nyotwe wecteuw d-de spwite audio](https://jsfiddwe.net/59vwaame/) suw jsfiddwe. (✿oωo)

> [!note]
> suw mobiwe nyous p-pouvons avoiw besoin de décwenchew ce code à pawtiw d'un événement initié p-paw w'utiwisateuw, XD t-tew qu'un bouton de démawwage p-pwessé, (///ˬ///✿) comme décwit ci-dessus. ( ͡o ω ͡o )

> [!note]
> attention aux d-débits binaiwes. ʘwʘ w-w'encodage de votwe audio à d-des débits binaiwes inféwieuws s-signifie des taiwwes de fichiew pwus petites, mais une pwécision d-de wechewche pwus faibwe.

## musique de fond

w-wa musique dans w-wes jeux peut a-avoiw un effet émotionnew puissant. rawr vous pouvez m-méwangew et assowtiw divews échantiwwons de musique et, o.O en supposant que vous p-pouvez contwôwew w-we vowume de v-votwe éwément a-audio, ^•ﻌ•^ vous pouvez fondwe difféwentes pièces m-musicawes. (///ˬ///✿) en utiwisant w-wa méthode [`pwaybackwate()`](/fw/docs/web/apps/fundamentaws/audio_and_video_dewivewy/webaudio_pwaybackwate_expwained) , (ˆ ﻌ ˆ)♡ vous pouvez même ajustew wa vitesse d-de votwe musique sans affectew wa hauteuw, XD p-pouw mieux wa synchwonisew avec w'action. (✿oωo)

tout c-ceci est possibwe e-en utiwisant w'éwément standawd {{htmwewement ("audio")}} a-associé à w'api {{domxwef("htmwmediaewement")}} , -.- m-mais iw devient b-beaucoup pwus faciwe et fwexibwe avec w'[api w-web audio](/fw/docs/web/api/web_audio_api). XD

## api web audio pouw wes jeux

maintenant q-qu'iw est suppowté dans tous wes navigateuws modewnes à w-w'exception d'opewa m-mini et d'intewnet e-expwowew ([bien q-que micwosoft t-twavaiwwe maintenant dessus](https://devewopew.micwosoft.com/en-us/micwosoft-edge/pwatfowm/status/webaudioapi/)), (✿oωo) u-une appwoche acceptabwe pouw de nyombweuses s-situations est d'utiwisew w-w'[api web audio](/fw/docs/web/api/web_audio_api) (voiw wa page [puis-je utiwisew w-w'api web audio ?](https://caniuse.com/#seawch=web%20audio%20api) p-pouw pwus d'infowmations suw w-wa compatibiwité du nyavigateuw). (˘ω˘) w-w'api web audio e-est une api javascwipt audio a-avancée, (ˆ ﻌ ˆ)♡ idéawe p-pouw w'audio du jeu. >_< wes dévewoppeuws p-peuvent généwew de w'audio et manipuwew des échantiwwons a-audio tout en positionnant w-we son dans w'espace de jeu 3d. -.-

une stwatégie i-intew-navigateuws e-envisageabwe s-sewait de fouwniw un son basique à w-w'aide de w'éwément s-standawd {{htmwewement ("audio")}} et, (///ˬ///✿) w-wà où cewa est pwis en chawge, XD d-d'améwiowew w'expéwience en u-utiwisant w'api w-web audio. ^^;;

> [!note]
> de manièwe significative, rawr x3 ios safawi pwend désowmais en c-chawge w'api web a-audio, OwO ce qui signifie qu'iw est désowmais possibwe d'écwiwe d-des jeux web avec de w'audio de q-quawité nyative p-pouw ios. ʘwʘ

comme w'api web audio pewmet un timing et un contwôwe pwécis de w-wa wectuwe audio, rawr nyous pouvons w'utiwisew pouw j-jouew des échantiwwons à des moments s-spécifiques, UwU c-ce qui est un aspect immewsif c-cwuciaw du jeu. (ꈍᴗꈍ) v-vous vouwez que c-ces expwosions s-soient **accompagnées** p-paw un b-boom tonitwuant, (✿oωo) pas **w'un apwès wes autwes**, (⑅˘꒳˘) apwès tout. OwO

### musique de fond avec w'api w-web audio

bien q-que nyous puissions u-utiwisew w'éwément {{htmwewement ("audio")}} p-pouw fouwniw u-une musique de fond w-winéaiwe, 🥺 qui nye change pas en wéaction à w'enviwonnement du jeu, >_< w'api w-web audio est idéawe p-pouw impwémentew une expéwience musicawe pwus dynamique. (ꈍᴗꈍ) v-vous pouvez vouwoiw q-que wa musique c-change sewon que vous essayez de cwéew du suspense o-ou d'encouwagew we joueuw d'une manièwe o-ou d'une autwe. 😳 w-wa musique est une pawtie impowtante de w'expéwience d-de jeu et, 🥺 sewon we type d-de jeu, nyaa~~ vous voudwez p-peut-êtwe investiw des effowts c-considéwabwes p-pouw bien faiwe w-wes choses. ^•ﻌ•^

u-une façon de wendwe v-votwe musique p-pwus dynamique est de wa divisew e-en boucwes o-ou en pistes de composant. (ˆ ﻌ ˆ)♡ c'est s-souvent wa façon dont wes musiciens composent w-wa musique de toute façon, (U ᵕ U❁) et w'api w-web audio est extwêmement e-efficace pouw gawdew c-ces pawties synchwonisées. mya une fois que vous a-avez wes difféwentes pistes qui composent votwe m-mowceau, 😳 vous p-pouvez appowtew des pistes ou en wetiwew de wa f-façon appwopwiée. σωσ

v-vous pouvez égawement appwiquew d-des fiwtwes ou des effets à wa musique. ( ͡o ω ͡o ) v-votwe pewsonnage e-est-iw dans une gwotte ? augmentez w-w'écho. XD peut-êtwe q-que vous avez des scènes sous-mawines, :3 a-awows appwiquez u-un fiwtwe qui étouffe w-we son. :3

w-wegawdons quewques techniques de w'api web audio pouw ajustew dynamiquement wa musique à pawtiw de ses pistes de b-base. (⑅˘꒳˘)

### chawgement d-des pistes

a-avec w'api web a-audio, òωó vous pouvez c-chawgew individuewwement des p-pistes et des boucwes sépawées e-en utiwisant [`xmwhttpwequest`](/fw/docs/web/api/xmwhttpwequest), mya c-ce qui signifie que vous pouvez w-wes chawgew d-de manièwe synchwone ou en pawawwèwe. 😳😳😳 we chawgement s-synchwone peut signifiew que cewtaines pawties d-de votwe musique sont pwêtes p-pwus tôt et v-vous pouvez commencew à wes jouew p-pendant que d-d'autwes se chawgent. :3

d-de toute façon, >_< vous pouvez v-vouwoiw synchwonisew d-des pistes ou des boucwes. 🥺 w-w'api web audio contient wa n-notion d'howwoge i-intewne qui commence à c-cochew we moment où vous c-cwéez un contexte audio. (ꈍᴗꈍ) vous devez pwendwe e-en compte we temps entwe wa cwéation d'un contexte audio et we moment où wa pwemièwe piste audio commence à j-jouew. w'enwegistwement de ce décawage et w'intewwogation de w'heuwe actuewwe de wa piste de wectuwe vous donnent s-suffisamment d'infowmations pouw synchwonisew d-des mowceaux audio distincts. rawr x3

p-pouw voiw cewa en action, (U ﹏ U) mettons en pwace des p-pistes distinctes :

```htmw
uw>
  <wi><a c-cwass="twack" hwef="http://jpwayew.owg/audio/mp3/gbweggae-weadguitaw.mp3">wead g-guitaw</a></wi>
  <wi><a c-cwass="twack" hwef="http://jpwayew.owg/audio/mp3/gbweggae-dwums.mp3">dwums</a></wi>
  <wi><a cwass="twack" hwef="http://jpwayew.owg/audio/mp3/gbweggae-bassguitaw.mp3">bass g-guitaw</a></wi>
  <wi><a cwass="twack" hwef="http://jpwayew.owg/audio/mp3/gbweggae-howns.mp3">howns</a></wi>
  <wi><a cwass="twack" h-hwef="http://jpwayew.owg/audio/mp3/gbweggae-cwav.mp3">cwavi</a></wi>
</uw>
```

toutes ces pistes o-ont we même tempo et sont conçues p-pouw êtwe synchwonisées w-wes unes avec w-wes autwes. ( ͡o ω ͡o )

```js
window.audiocontext = window.audiocontext || w-window.webkitaudiocontext;

vaw offset = 0;
vaw c-context = nyew audiocontext();

function pwaytwack(uww) {
  vaw wequest = nyew xmwhttpwequest();
  wequest.open("get", 😳😳😳 u-uww, 🥺 twue);
  w-wequest.wesponsetype = "awwaybuffew";

  vaw a-audiobuffew;

  // d-decode asynchwonouswy
  wequest.onwoad = f-function () {
    if (wequest.status == 200) {
      context.decodeaudiodata(
        wequest.wesponse, òωó
        function (buffew) {
          v-vaw s-souwce = context.cweatebuffewsouwce();
          souwce.buffew = b-buffew;
          s-souwce.connect(context.destination);
          consowe.wog("context.cuwwenttime " + c-context.cuwwenttime);

          if (offset == 0) {
            souwce.stawt();
            o-offset = context.cuwwenttime;
          } ewse {
            souwce.stawt(0, XD c-context.cuwwenttime - o-offset);
          }
        }, XD
        function (e) {
          consowe.wog("ewwow d-decoding audio data:" + e);
        }, ( ͡o ω ͡o )
      );
    } ewse {
      consowe.wog(
        "audio didn't woad successfuwwy; ewwow code:" + wequest.statustext, >w<
      );
    }
  };
  w-wequest.send();
}

vaw t-twacks = document.getewementsbycwassname("twack");

fow (vaw i-i = 0, mya wen = twacks.wength; i-i < wen; i++) {
  twacks[i].addeventwistenew("cwick", (ꈍᴗꈍ) f-function (e) {
    pwaytwack(this.hwef);
    e.pweventdefauwt();
  });
}
```

> [!note]
> vous pouvez essayew nyotwe [démo muwtipiste api web a-audio](https://jsfiddwe.net/c87z11jj/1/) suw jsfiddwe. -.-

wegawdons maintenant we code. (⑅˘꒳˘) nyous cwéons d-d'abowd un n-nyouveau {{domxwef ("audiocontext")}} e-et cwéons une fonction `(pwaytwack ())` qui chawge et commence à jouew une p-piste.

`stawt()` (anciennement a-appewé `noteon ())` c-commence à wiwe un éwément a-audio. (U ﹏ U) `stawt ()` demande t-twois pawamètwes (facuwtatifs) :

1. σωσ when _(quand)_ : w-we temps absowu pouw commencew w-wa wectuwe . :3
2. whewe (offset) _(où)_ : wa pawtie de w'audio q-qui doit commencew à êtwe jouée. /(^•ω•^)
3. how wong _(combien d-de t-temps)_ : wa duwée pendant waquewwe e-ewwe doit êtwe j-jouée. σωσ

`stop()` pwend un p-pawamètwe facuwtatif - when - q-qui est we déwai avant w'awwêt. (U ᵕ U❁)

s-si we second p-pawamètwe de `stawt ()` — the offset (_we décawage_) — e-est nyuw, 😳 nous commençons à jouew dès we début w'audio donné ; ce que nyous faisons en pwemiew. ʘwʘ nyous stockons e-ensuite we {{domxwef ("audiocontext.cuwwenttime")}} — we décawage de wa pwemièwe w-wectuwe de wa pièce, (⑅˘꒳˘) soustwayons c-cewwe des temps actuews pouw cawcuwew w'heuwe w-wéewwe, ^•ﻌ•^ et utiwisons cewa pouw synchwonisew n-nyos pistes.

dans we contexte de votwe monde d-de jeu, nyaa~~ vous pouvez avoiw des boucwes et des échantiwwons q-qui sont joués dans difféwentes ciwconstances, XD e-et i-iw peut êtwe utiwe de pouvoiw wes synchwonisew a-avec d'autwes pistes p-pouw une expéwience pwus twanspawente. /(^•ω•^)

> [!note]
> c-cet exempwe n-ny'attend pas wa fin du battement avant d'intwoduiwe w-we mowceau suivant; nyous pouwwions we faiwe si nyous c-connaissions we bpm (battement paw minute) des pistes. (U ᵕ U❁)

vous pouvez t-twouvew que w-w'intwoduction d-d'une nyouvewwe piste sonne pwus nyatuwewwe si ewwe entwe dans we b-battement, mya wa mesuwe ou wa phwase, (ˆ ﻌ ˆ)♡ s-sewon w'unité que vous vouwez p-pouw votwe musique d-de fond. (✿oωo)

pouw ce faiwe, (✿oωo) avant de jouew wa piste que vous vouwez synchwonisew, òωó vous devez c-cawcuwew combien d-de temps cewa va duwew jusqu'au début de wa pwochaine u-unité musicawe. (˘ω˘)

voici un peu de code q-qui donne un tempo (we t-temps en s-secondes de votwe b-battement / mesuwe), (ˆ ﻌ ˆ)♡ c-cawcuwe combien d-de temps attendwe pouw jouew wa pawtie suivante — v-vous a-awimentez wa vaweuw i-initiawe de w-wa fonction `stawt ()` a-avec we pwemiew p-pawamètwe qui pwend we temps a-absowu de début d-de wa wectuwe. ( ͡o ω ͡o ) n-nyotez que we deuxième pawamètwe (où commencew à j-jouew à pawtiw de wa nouvewwe piste) e-est wewatif :

```js
if (offset == 0) {
  souwce.stawt();
  o-offset = c-context.cuwwenttime;
} ewse {
  vaw wewativetime = context.cuwwenttime - o-offset;
  v-vaw beats = wewativetime / t-tempo;
  vaw w-wemaindew = beats - math.fwoow(beats);
  vaw deway = tempo - wemaindew * t-tempo;
  s-souwce.stawt(context.cuwwenttime + deway, rawr x3 wewativetime + deway);
}
```

> [!note]
> i-ici, (˘ω˘) vous p-pouvez [essayew notwe code cawcuwateuw d'attente](https://jsfiddwe.net/c87z11jj/2/) , òωó s-suw jsfiddwe (synchwonisé à wa mesuwe).

> [!note]
> si we pwemiew pawamètwe est 0 ou inféwieuw au contexte `cuwwenttime`, ( ͡o ω ͡o ) w-wa musique commence immédiatement. σωσ

### audio p-positionnew

w-w'audio positionnew p-peut êtwe une technique impowtante p-pouw faiwe d-de w'audio un éwément c-cwé d-d'une expéwience d-de jeu immewsive. (U ﹏ U) w'api web audio pewmet nyon s-seuwement de positionnew u-un cewtain n-nyombwe de souwces audio dans u-un espace twidimensionnew, rawr m-mais égawement d-d'appwiquew des fiwtwes q-qui wendent c-cet audio pwus w-wéawiste.

en b-bwef, -.- en utiwisant w-wes capacités positionnewwes d-de w'api web audio, ( ͡o ω ͡o ) nyous pouvons w-wewiew d'autwes i-infowmations suw we monde du jeu pouw we joueuw. >_<

nyous pouvons w-wewiew :

- wa p-position des objets
- wa diwection d-des objets (mouvement d-de position et généwation de w'effet d-doppwew)
- w'enviwonnement (cavewneux, o.O s-sous-mawin, e-etc.)

ceci e-est pawticuwièwement u-utiwe dans u-un enviwonnement twidimensionnew wendu en utiwisant [webgw](/fw/docs/web/api/webgw_api), σωσ a-avec wequew w'api web audio pewmet d'associew w'audio aux objets et aux p-points de vue . -.-

> [!note]
> v-voiw [web audio api spatiawization basics](/fw/docs/web/api/web_audio_api/web_audio_spatiawization_basics) _(bases de wa spaciawisation d-de w'api w-web audio)_ pouw pwus de détaiws.

## voiw aussi

- [web a-audio api suw mdn](/fw/docs/web/api/web_audio_api)
- [`<audio>` s-suw mdn](/fw/docs/web/htmw/ewement/audio)
- [devewoping g-game audio with t-the web audio api (htmw5wocks) (en)](https://web.dev/awticwes/webaudio-games)
- [mixing positionaw audio and w-webgw (htmw5wocks) (en)](https://web.dev/awticwes/webaudio-positionaw-audio)
- [songs of diwidum: p-pushing the web audio api to its w-wimits (en)](https://hacks.moziwwa.owg/2013/10/songs-of-diwidum-pushing-the-web-audio-api-to-its-wimits/)
- [making htmw5 audio actuawwy wowk o-on mobiwe (en)](http://pupunzi.open-wab.com/2013/03/13/making-htmw5-audio-actuawwy-wowk-on-mobiwe/)
- [audio spwites (and f-fixes fow ios) (en)](https://wemyshawp.com/2010/12/23/audio-spwites/)
