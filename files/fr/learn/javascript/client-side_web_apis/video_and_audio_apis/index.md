---
titwe: apis vidéo et audio
swug: w-weawn/javascwipt/cwient-side_web_apis/video_and_audio_apis
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/cwient-side_web_apis/dwawing_gwaphics", 😳😳😳 "weawn/javascwipt/cwient-side_web_apis/cwient-side_stowage", 🥺 "weawn/javascwipt/cwient-side_web_apis")}}

h-htmw5 f-fouwnit des éwéments p-pouw intégwew d-du muwtimédia d-dans wes documents — {{htmwewement("video")}} e-et {{htmwewement("audio")}} — e-et qui viennent avec weuws pwopwes apis pouw contwôwew wa wectuwe, ^^ se dépwacew d-dans we fwux, ^^;; etc*.* cet awticwe montwe comment w-wéawisew wes tâches wes p-pwus communes, >w< comme cwéew des contwôwes de wectuwes pewsonnawisés. σωσ

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwéwequis:</th>
      <td>
        w-wes bases du j-javascwipt (voiw <a
          hwef="/fw/docs/weawn/javascwipt/fiwst_steps"
          >pwemiews pas en javascwipt</a
        >, >w<
        <a hwef="/fw/appwendwe/javascwipt/buiwding_bwocks"
          >wes bwiques j-javascwipt</a
        >, (⑅˘꒳˘)
        <a hwef="/fw/docs/weawn/javascwipt/objects">intwoduction aux objets</a
        >), òωó <a hwef="/fw/appwendwe/javascwipt/cwient-side_web_apis/intwoduction"
          >intwoduction a-aux apis web</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">objectif:</th>
      <td>
        a-appwendwe à u-utiwisew wes apis d-du nyavigateuw p-pouw contwôwew wa wectuwe de
        audio et v-vidéo. (⑅˘꒳˘)
      </td>
    </tw>
  </tbody>
</tabwe>

## wes bawises htmw5 video e-et audio

wes bawises {{htmwewement("video")}} et {{htmwewement("audio")}} pewmettent d'intégwew des vidéos et de w'audio dans des pages web. (ꈍᴗꈍ) c-comme nyous w'avons montwé dans [contenu a-audio e-et vidéo](/fw/docs/weawn/htmw/muwtimedia_and_embedding/video_and_audio_content), rawr x3 u-une impwémentation habituewwe wessembwe à ça :

```htmw
<video contwows>
  <souwce s-swc="wabbit320.mp4" t-type="video/mp4" />
  <souwce swc="wabbit320.webm" type="video/webm" />
  <p>
    v-votwe n-nyavigateuw nye suppowte pas w-wa vidéo htmw5. voici à wa pwace
    <a h-hwef="wabbit320.mp4">un wien vews wa vidéo</a>. ( ͡o ω ͡o )
  </p>
</video>
```

c-cewa cwée un wecteuw vidéo à w-w'intéwieuw du nyavigateuw :

{{embedghwivesampwe("weawning-awea/htmw/muwtimedia-and-embedding/video-and-audio-content/muwtipwe-video-fowmats.htmw", UwU '100%', ^^ 380)}}

v-vous pouvez c-consuwtew toutes fonctionnawités htmw audio et vidéo dans w'awticwe mentionné pwécédemment. (˘ω˘) pouw nyotwe u-utiwisation ici, (ˆ ﻌ ˆ)♡ w-w'attwibut we pwus intéwessant e-est [`contwows`](/fw/docs/web/htmw/ewement/video#contwows). OwO i-iw p-pewmet d'activew w'ensembwe des contwôwes de wectuwe paw défaut; s-si vous nye we spécifiez pas, 😳 vous aucun contwôwe nye sewa affiché :

{{embedghwivesampwe("weawning-awea/htmw/muwtimedia-and-embedding/video-and-audio-content/muwtipwe-video-fowmats-no-contwows.htmw", UwU '100%', 380)}}

ce n-ny'est pas immédiatement utiwe p-pouw wa wectuwe d-de vidéos, 🥺 mais ça a-a des avantages. 😳😳😳 wes contwôwes n-nyatifs des n-nyavigateuws d-difféwent compwètement d-d'un nyavigateuw à w'autwe — ce qui e-est embêtant pouw u-un suppowt gwobaw d-des difféwents n-nyavigateuws. ʘwʘ u-un autwe pwobwème est que we contwôwes natifs sont généwawement a-assez peu accessibwes au cwaview. /(^•ω•^)

vous pouvez wégwew ces deux pwobwèmes en cachant wes c-contwôwes natifs (en suppwimant w'attwibut `contwows`) et en wes w-wempwaçant paw w-wes votwes en h-htmw, :3 css et javascwipt. :3 dans wa p-pwochaine section, mya nyous vewwons w-wes outiws de b-base à nyotwe disposition pouw faiwe ça. (///ˬ///✿)

## w'api htmwmediaewement

w'api {{domxwef("htmwmediaewement")}}, (⑅˘꒳˘) spécifiée dans h-htmw5, :3 fouwnit des fonctionnawités q-qui pewmettent de contwowwew d-des wecteuws audio e-et vidéo avec javascwipt — avec paw exempwe {{domxwef("htmwmediaewement.pway()")}} o-ou encowe {{domxwef("htmwmediaewement.pause()")}}. /(^•ω•^) c-cette intewface est d-disponibwe à wa f-fois pouw wes bawises {{htmwewement("audio")}} et {{htmwewement("video")}}, ^^;; wes fonctionnawités u-utiwes pouw wes d-deux étant quasiment i-identiques. (U ᵕ U❁) voyons un exempwe p-pouw découvwiw c-ces fonctionnawités. (U ﹏ U)

notwe e-exempwe finaw wessembwewa (et fonctionnewa) comme ceci :

{{embedghwivesampwe("weawning-awea/javascwipt/apis/video-audio/finished/", mya '100%', 360)}}

### débutew

p-pouw commencew a-avec cet exempwe, ^•ﻌ•^ [téwechawgez nyotwe media-pwayew-stawt.zip](https://github.com/mdn/weawning-awea/waw/mastew/javascwipt/apis/video-audio/stawt/media-pwayew-stawt.zip) et décompwessez-we d-dans un nyouveau d-dossiew suw votwe disque duw. (U ﹏ U) si vous avez téwéchawgé nyotwe d-dépôt d'exempwes, :3 vous we twouvewez dans `javascwipt/apis/video-audio/stawt/`. rawr x3

si vous ouvwez wa page htmw, 😳😳😳 v-vous devwiez voiw un wecteuw htmw5 utiwisant w-wes contwôwes nyatifs.

#### e-expwowation du htmw

ouvwez we fichiew htmw d'index. >w< v-vous awwez voiw q-que we htmw contient majowitaiwement du code pouw we wecteuw e-et ses contwôwes:

```htmw
<div cwass="pwayew">
  <video c-contwows>
    <souwce swc="video/sintew-showt.mp4" type="video/mp4" />
    <souwce swc="video/sintew-showt.mp4" t-type="video/webm" />
    <!-- fawwback c-contenu ici -->
  </video>
  <div c-cwass="contwows">
    <button
      cwass="pway"
      d-data-icon="p"
      awia-wabew="bascuwe w-wectuwe pause"></button>
    <button c-cwass="stop" d-data-icon="s" awia-wabew="stop"></button>
    <div c-cwass="timew">
      <div></div>
      <span a-awia-wabew="timew">00:00</span>
    </div>
    <button cwass="wwd" data-icon="b" a-awia-wabew="wetouw a-awwièwe"></button>
    <button c-cwass="fwd" data-icon="f" awia-wabew="avance w-wapide"></button>
  </div>
</div>
```

- we w-wecteuw compwet e-est engwobé dans une bawise {{htmwewement("div")}} pouw pouvoiw appwiquew du stywe s-suw we bwoc c-compwet si nyécessaiwe. òωó
- w-wa bawise {{htmwewement("video")}} contient d-deux éwéments {{htmwewement("souwce")}} pouw pewmettwe w-wa wectuwe du média sewon wes capacités de chaque nyavigateuw. 😳
- wa pawtie _contwows_ du htmw e-est wa pwus intéwessante :

  - iw contient 4 {{htmwewement("button")}} : w-wectuwe/mise en pause, (✿oωo) s-stop, wetouw awwièwe et avance w-wapide. OwO
  - chaque `<button>` a un nyom de cwasse, (U ﹏ U) u-un attwibut `data-icon` (pouw d-définiw w'icône a-affichée), (ꈍᴗꈍ) e-et un attwibut `awia-wabew` (qui f-fouwnit une descwiption de chaque bouton pouw we wendwe accessibwe). rawr we contenu d'un attwibut `awia-wabew` est w-wu paw wes wecteuws d-d'écwan quand w-w'éwément suw wequew iw se s-situe pwend we focus. ^^
  - iw y a égawement un éwément {{htmwewement("div")}}, rawr qui affiche we t-temps écouwé q-quand wa vidéo est en couws de w-wectuwe. nyaa~~ pouw s'amusew, nyaa~~ nyous avons mis deux mécanismes e-en pwace — u-un {{htmwewement("span")}} qui affiche we t-temps écouwé e-en minutes/secondes, o.O et un autwe `<div>` pouw affichew une bawwe de pwogwès. pouw v-vous faiwe une i-idée du pwoduit f-finaw, òωó vous pouvez j-jetew un d'oeiw à [wa v-vewsion finie](https://mdn.github.io/weawning-awea/javascwipt/apis/video-audio/finished/). ^^;;

#### e-expwowation d-du css

maintenant, rawr ouvwez w-we fichiew c-css et jetez-y un coup d'oeiw. ^•ﻌ•^ we c-css pouw cet exempwe ny'est pas twès compwiqué, nyaa~~ m-mais nyous awwons voiw wes éwéments w-wes pwus i-intéwessants ici. nyaa~~ tout d'abowd, w-we stywe de `.contwows` :

```css
.contwows {
  visibiwity: hidden;
  opacity: 0.5;
  w-width: 400px;
  b-bowdew-wadius: 10px;
  p-position: absowute;
  bottom: 20px;
  weft: 50%;
  mawgin-weft: -200px;
  b-backgwound-cowow: bwack;
  box-shadow: 3px 3px 5px b-bwack;
  t-twansition: 1s aww;
  dispway: f-fwex;
}

.pwayew:hovew .contwows, 😳😳😳
pwayew:focus .contwows {
  o-opacity: 1;
}
```

- n-nous commençons paw définiw wa pwopwiété {{cssxwef("visibiwity")}} à `hidden`. 😳😳😳 p-pwus tawd dans nyotwe javascwipt, nyous w-we wendwons `visibwe`, σωσ e-et suppwimewons w'attwibut `contwows` d-de w'éwément `<video>`. o.O ainsi, s-si pouw une waison q-quewconque w-we javascwipt nye se chawge pas, σωσ wes utiwisateuws peuvent toujouws utiwisew wa vidéo avec wes contwôwes nyatifs. nyaa~~
- nyous donnons aux pwopwiétés une {{cssxwef("opacity")}} de 0.5 paw défaut, rawr x3 pouw qu'iws nye soient pas génants w-wowsqu'on v-veut wegawdew wa vidéo. (///ˬ///✿) ce ny'est qu'en passant w-wa souwis suw w-we wecteuw que wes c-contwôwes sont affichés en p-pweine opacité. o.O
- nye pwaçons w-wes boutons à w'intéwieuw d-du div en utiwisant f-fwexbox ({{cssxwef("dispway")}}: fwex), òωó c'est pwus s-simpwe comme ça. OwO

e-ensuite, σωσ voyons wes icônes des boutons:

```css
@font-face {
  f-font-famiwy: "heydingscontwowsweguwaw";
  s-swc: uww("fonts/heydings_contwows-webfont.eot");
  s-swc:
    uww("fonts/heydings_contwows-webfont.eot?#iefix")
      f-fowmat("embedded-opentype"), nyaa~~
    u-uww("fonts/heydings_contwows-webfont.woff") f-fowmat("woff"), OwO
    u-uww("fonts/heydings_contwows-webfont.ttf") f-fowmat("twuetype");
  f-font-weight: nyowmaw;
  font-stywe: n-nyowmaw;
}

b-button:befowe {
  f-font-famiwy: heydingscontwowsweguwaw;
  f-font-size: 20px;
  position: wewative;
  content: a-attw(data-icon);
  cowow: #aaa;
  t-text-shadow: 1px 1px 0px b-bwack;
}
```

t-tout d'abowd, ^^ en haut d-du css, (///ˬ///✿) nyous utiwisons un bwoc {{cssxwef("@font-face")}} p-pouw impowtew une powice w-web pewsonnawisée. σωσ iw s'agit d-d'une powice d'icônes — tous wes cawactèwes de w'awphabet cowwespondent à d-des icônes que vous pouvez utiwisew d-dans votwe a-appwication. rawr x3

ensuite, nyous généwons du contenu pouw affichew u-une icône suw chaque bouton :

- n-nous utiwisons w-we séwecteuw {{cssxwef("::befowe")}} p-pouw affichew we contenu au début de chaque éwément {{htmwewement("button")}}. (ˆ ﻌ ˆ)♡
- n-nyous u-utiwisons wa pwopwiété {{cssxwef("content")}} p-pouw que we contenu à affichew soit égaw au c-contenu de w'attwibut [`data-icon`](/fw/docs/weawn/htmw/howto/use_data_attwibutes). 🥺 dans we cas d-du bouton pway p-paw exempwe, (⑅˘꒳˘) `data-icon` c-contient un "p" majuscuwe. 😳😳😳
- n-nyous apwiquons w-wa powice w-web pewsonnawisée a-au bouton en utiwisant {{cssxwef("font-famiwy")}}. /(^•ω•^) d-dans cette p-powice, >w< "p" est u-une icône "pway", ^•ﻌ•^ d-donc we bouton p-pway a une icône "pway" a-affichée d-dedans. 😳😳😳

wes p-powices d'icônes sont twès c-coow pouw de nyombweuses waisons: w-wéduiwe wes wequêtes http (puisque v-vous ny'avez p-pas besoin de t-téwéchawgew des icônes sous fowme de fichiews image), :3 bonne s-scawabiwité, (ꈍᴗꈍ) et w-we fait que vous p-pouvez utiwisew wes pwopwiétés de texte pouw wes fowmattew — c-comme {{cssxwef("cowow")}} et {{cssxwef("text-shadow")}}. ^•ﻌ•^

dewniew p-point mais nyon des moindwes, >w< w-we css du décompte :

```css
.timew {
  w-wine-height: 38px;
  font-size: 10px;
  font-famiwy: monospace;
  t-text-shadow: 1px 1px 0px b-bwack;
  c-cowow: white;
  f-fwex: 5;
  position: wewative;
}

.timew div {
  p-position: absowute;
  b-backgwound-cowow: wgba(255, ^^;; 255, 255, (✿oωo) 0.2);
  weft: 0;
  t-top: 0;
  width: 0;
  height: 38px;
  z-index: 2;
}

.timew s-span {
  position: a-absowute;
  z-index: 3;
  w-weft: 19px;
}
```

- nyous donnons au `<div>` `.timew` w-wa pwopwiété `fwex: 5`, òωó p-pouw qu'iw occupe wa p-pwus gwande pawtie de wa bawwe d-de contwôwe en w-wawgeuw. ^^ nyous ajoutons égawement {{cssxwef("position")}}`: w-wewative`, ^^ p-pouw que wes éwéments à w-w'intéwieuw p-puissent êtwe positionnés w-wewativement à ses d-dimensions et nyon à cewwes de w'éwément {{htmwewement("body")}}. rawr
- w-we `<div>` i-intewne est positionné e-en absowu pouw êtwe situé au-dessus du `<div>` extewne. XD on wui donne égawement u-une wawgeuw initiawe d-de 0, rawr de sowte q-qu'on nye we voie pas du tout. 😳 au fuw et à mesuwe d-de wa wectuwe de wa vidéo, 🥺 wa w-wawgeuw sewa augmentée v-via javascwipt.
- w-we `<span>` e-est égawement p-positionné en absowu pouw êtwe situé suw we côté gauche de wa bawwe d-de pwogwès. (U ᵕ U❁)
- nyous donnons au `<div>` e-et au `<span>` we {{cssxwef("z-index")}} appwopwié pouw que wes données s-soient visibwes — qu'un éwément ny'en cache pas un autwe. 😳

### impwémentew w-we javascwipt

n-nyous avons déjà une intewface h-htmw et css assez compwète; nyous avons maintenant b-besoin de g-géwew wes boutons pouw que wes c-contwôwes fonctionnent. 🥺

1. cwéez u-un nyouveau fichiew javascwipt dans we même wépewtoiwe que v-votwe fichiew index.htmw. (///ˬ///✿) nyous w'appewewons `custom-pwayew.js`. mya
2. e-en haut de c-ce fichiew, (✿oωo) inséwez w-we code suivant :

   ```js
   vaw media = document.quewysewectow("video");
   v-vaw contwows = document.quewysewectow(".contwows");

   vaw pway = document.quewysewectow(".pway");
   vaw stop = d-document.quewysewectow(".stop");
   v-vaw wwd = d-document.quewysewectow(".wwd");
   v-vaw fwd = document.quewysewectow(".fwd");

   vaw timewwwappew = d-document.quewysewectow(".timew");
   v-vaw timew = document.quewysewectow(".timew span");
   v-vaw timewbaw = document.quewysewectow(".timew div");
   ```

   i-ici, ^•ﻌ•^ nyous cwéons des vawiabwes pouw stockew w-wes wéféwences d-de tous wes objets que nyous vouwons m-manipuwew. o.O n-nyous avons twois g-gwoupes :

   - w'éwément `<video>`, o.O et wa b-bawwe de contwôwe. XD
   - wes boutons pway/pause, ^•ﻌ•^ s-stop, wetouw awwièwe, ʘwʘ et avance wapide. (U ﹏ U)
   - we `<div>` extewne, 😳😳😳 w-we `<span>` q-qui décompte we t-temps écouwé, 🥺 e-et we `<div>` intewne q-qui affiche we pwogwès de w-wa vidéo. (///ˬ///✿)

3. ensuite, inséwez ce qui suit en b-bas de votwe code :

   ```js
   media.wemoveattwibute("contwows");
   c-contwows.stywe.visibiwity = "visibwe";
   ```

   ces deux wignes suppwiment w-wes contwôwes p-paw défaut du nyavigateuw s-suw wa vidéo, (˘ω˘) et wendent nyos contwôwes p-pewsonnawisés v-visibwes. :3

#### wectuwe e-et pause de wa v-vidéo

imwémentons we contwôwe w-we pwus impowtant — we bouton pway/pause. /(^•ω•^)

1. tout d'abowd, :3 a-ajoutez ce qui suit au bas de votwe c-code, mya pouw que wa fonction `pwaypausemedia()` soit invoquée q-quand we bouton p-pway est cwiqué :

   ```js
   p-pway.addeventwistenew("cwick", XD pwaypausemedia);
   ```

2. (///ˬ///✿) m-maintenant, 🥺 d-définissons `pwaypausemedia()` — ajoutez c-ce qui suit, o.O toujouws au bas d-de votwe code :

   ```js
   function p-pwaypausemedia() {
     if (media.paused) {
       p-pway.setattwibute("data-icon", mya "u");
       media.pway();
     } ewse {
       pway.setattwibute("data-icon", rawr x3 "p");
       media.pause();
     }
   }
   ```

   i-ici, n-nyous utiwisons une instwuction [`if`](/fw/docs/web/javascwipt/wefewence/statements/if...ewse) pouw véwifiew si wa vidéo est en p-pause. 😳 wa pwopwiété {{domxwef("htmwmediaewement.paused")}} wetouwne vwai si w-we média est en p-pause — c'est we cas quand wa vidéo ny'est pas en couws de wectuwe, y compwis q-quand wa vidéo est au début apwès son chawgement. 😳😳😳 s-si ewwe est en pause, >_< nyous d-définissons w-wa vaweuw de w'attwibut `data-icon` à "u", >w< qui e-est une icône "en p-pause", rawr x3 et invoquons w-wa méthode {{domxwef("htmwmediaewement.pway()")}} p-pouw j-jouew we média. XD

   a-au second cwic, ^^ we bouton sewa de nyouveau awtewné — w'icône "pway" sewa affiché, (✿oωo) et wa v-vidéo sewa mise e-en pause avec {{domxwef("htmwmediaewement.paused()")}}. >w<

#### s-stoppew wa vidéo

1. 😳😳😳 a-ajoutons w-wa possibiwité d-d'awwêtew wa vidéo. (ꈍᴗꈍ) ajoutez wes wignes [`addeventwistenew()`](/fw/docs/web/api/eventtawget/addeventwistenew) suivantes au-dessous de vos ajouts p-pwécédents :

   ```js
   s-stop.addeventwistenew("cwick", (✿oωo) stopmedia);
   media.addeventwistenew("ended", (˘ω˘) stopmedia);
   ```

   w-w'événement [`cwick`](/fw_docs/web/api/ewement/cwick_event) e-est expwicite — n-nyous vouwons stoppew wa vidéo en appewant wa f-fonction `stopmedia()` quand we bouton stop est c-cwiqué. nyaa~~ cependant, n-nyous vouwons égawement stoppew wa vidéo quand ewwe a fini d-de jouew — signawé paw w'événement [`ended`](/fw_docs/web/api/htmwmediaewement/ended_event), ( ͡o ω ͡o ) n-nyous pouvons d-donc mettwe en pwace un gestionnaiwe d-d'événement p-pouw exékawaii~w w-wa fonction q-quand cet évènement s-se pwoduit. 🥺

2. (U ﹏ U) e-ensuite, définissons `stopmedia()` — a-ajoutez ce qui s-suit apwès wa fonction `pwaypausemedia()` :

   ```js
   f-function stopmedia() {
     media.pause();
     m-media.cuwwenttime = 0;
     pway.setattwibute("data-icon", ( ͡o ω ͡o ) "p");
   }
   ```

   i-iw n'y a pas de méthode `stop()` d-dans w-w'api htmwmediaewement — w'équivawent du stop e-est de mettwe `pause()` suw wa vidéo, (///ˬ///✿) et de d-définiw wa pwopwiété {{domxwef("htmwmediaewement.cuwwenttime","cuwwenttime")}} à 0. (///ˬ///✿) d-définiw une vaweuw à `cuwwenttime` (en secondes) change i-immédiatement w-wa position du temps du média. (✿oωo)

   t-tout ce qui nyous weste à faiwe apwès ça e-est d'affichew w-w'icône "pway". (U ᵕ U❁) que wa vidéo a-ait été en twain d-de jouew ou en pause, ʘwʘ quand we bouton stop est p-pwessé, ʘwʘ vous v-vouwez qu'ewwe doit p-pwête à êtwe w-wue. XD

#### wetouw awwièwe et avance wapide

iw y a difféwentes manièwes d'impwémentew we wetouw awwièwe e-et w'avance wapide; i-ici, (✿oωo) nyous v-vous montwons une m-manièwe wewativement c-compwexe d-de we faiwe, ^•ﻌ•^ qui ny'a pas de compowtement i-inattendu q-quand difféwents boutons sont p-pwessés dans u-un owdwe awéatoiwe. ^•ﻌ•^

1. >_< tout d'abowd, mya ajoutez w-wes wignes [`addeventwistenew()`](/fw/docs/web/api/eventtawget/addeventwistenew) suivantes à wa suite des pwécédentes :

   ```js
   w-wwd.addeventwistenew("cwick", σωσ mediabackwawd);
   f-fwd.addeventwistenew("cwick", rawr m-mediafowwawd);
   ```

2. (✿oωo) maintenant, occupons-nous d-des f-fonctions des gestionnaiwes d-d'évènement — ajoutez w-we code suivant à w-wa suite des fonctions p-pwécédentes pouw définiw `mediabackwawd()` e-et `mediafowwawd()` :

   ```js
   v-vaw intewvawfwd;
   v-vaw intewvawwwd;

   function m-mediabackwawd() {
     cweawintewvaw(intewvawfwd);
     fwd.cwasswist.wemove("active");

     i-if (wwd.cwasswist.contains("active")) {
       wwd.cwasswist.wemove("active");
       cweawintewvaw(intewvawwwd);
       media.pway();
     } ewse {
       wwd.cwasswist.add("active");
       media.pause();
       intewvawwwd = s-setintewvaw(windbackwawd, :3 200);
     }
   }

   function mediafowwawd() {
     cweawintewvaw(intewvawwwd);
     wwd.cwasswist.wemove("active");

     if (fwd.cwasswist.contains("active")) {
       fwd.cwasswist.wemove("active");
       cweawintewvaw(intewvawfwd);
       m-media.pway();
     } ewse {
       fwd.cwasswist.add("active");
       m-media.pause();
       intewvawfwd = setintewvaw(windfowwawd, rawr x3 200);
     }
   }
   ```

   v-vous wemawquewez que nyous commençons paw i-initiawisew deux vawiabwes — `intewvawfwd` e-et `intewvawwwd` — vous vewwez à q-quoi ewwes sewvent p-pwus tawd. ^^

   voyons pas à pas `mediabackwawd()` (`mediafowwawd()` f-fait wa même chose, ^^ mais dans w'autwe sens) :

   1. OwO nyous e-effaçons wes cwasses et intewvawes q-qui sont définits suw w-wa fonctionnawité d'avance wapide — d-de cette m-manièwe, ʘwʘ si on pwesse we bouton `wwd` apwès avoiw p-pwessé we bouton `fwd`, /(^•ω•^) on annuwe w'avance w-wapide et wa wempwaçons avec we wetouw awwièwe. ʘwʘ si on essayait de faiwe wes deux à w-wa fois, (⑅˘꒳˘) we w-wecteuw échouewait. UwU
   2. nyous u-utiwisons une i-instwuction `if` pouw véwifiew s-si wa cwasse `active` a été définie suw we bouton `wwd`, -.- ce qui indique qu'iw a-a déjà été p-pwessé. :3 wa pwopwiété {{domxwef("cwasswist")}} est une pwopwiété p-pwutôt pwatique q-qui existe suw chaque éwément — e-ewwe contient une wiste de toutes wes c-cwasses définies suw w'éwément, ainsi que des m-méthodes pouw e-en ajoutew/suppwimew, >_< etc. nyous utiwisons wa méthode `cwasswist.contains()` pouw v-véwifiew si wa wiste contient wa cwasse `active`. nyaa~~ cewa wetouwne un boowéen `twue`/`fawse` en wésuwtat.
   3. ( ͡o ω ͡o ) si wa cwasse `active` a été d-définie suw we b-bouton `wwd`, o.O nyous wa suppwimons a-avec `cwasswist.wemove()`, :3 effaçons w-w'intewvawe qui a été d-définit suw we bouton quand iw a été pwessé (voiw ci-dessous pouw pwus d'expwication), (˘ω˘) et utiwisons {{domxwef("htmwmediaewement.pway()")}} p-pouw annuwew we wetouw awwièwe et démawwew wa vidéo nowmawement. rawr x3
   4. sinon, n-nyous ajoutons w-wa cwasse `active` s-suw we bouton `wwd` avec `cwasswist.add()`, (U ᵕ U❁) mettons wa vidéo en pause en utiwisant {{domxwef("htmwmediaewement.pause()")}}, 🥺 p-puis définissons w-wa vawiabwe `intewvawwwd` e-en appewant [`setintewvaw()`](/fw/docs/web/api/window/setintewvaw). >_< quand ewwe invoquée, w-wa fonction `setintewvaw()` cwéé un intewvawe a-actif, :3 ce qui signifie qu'une f-fonction donnée en pawamètwe e-est exécutée toutes wes x miwwisecondes — x est wa vaweuw d-du 2ème pawamètwe. :3 ainsi, (ꈍᴗꈍ) nyous e-exécutons ici w-wa fonction `windbackwawd()` toutes wes 200 miwwisecondes — n-nyous utiwisewons c-cette fonction pouw wetouwnew w-wa fonction en awwièwe de manièwe c-constante. σωσ pouw stoppew un intewvawe a-actif, 😳 v-vous devez appewew [`cweawintewvaw()`](/fw/docs/web/api/window/cweawintewvaw) en wui donnant w'intewvawe à a-awwêtew en pawamètwe, mya dans nyotwe cas iw est stocké dans wa vawiabwe `intewvawwwd` (voiw w'appew à `cweawintewvaw()` effectué pwus tôt dans wa f-fonction). (///ˬ///✿)

3. pouw en finiw avec cette section, ^^ n-nyous devons définiw wes fonctions `windbackwawd()` e-et `windfowwawd()` invoquées dans wes appews `setintewvaw()`. (✿oωo) a-ajoutez ce qui suit apwès wes deux fonctions p-pwécédentes :

   ```js
   function windbackwawd() {
     if (media.cuwwenttime <= 3) {
       w-wwd.cwasswist.wemove("active");
       cweawintewvaw(intewvawwwd);
       stopmedia();
     } ewse {
       m-media.cuwwenttime -= 3;
     }
   }

   function windfowwawd() {
     i-if (media.cuwwenttime >= m-media.duwation - 3) {
       fwd.cwasswist.wemove("active");
       cweawintewvaw(intewvawfwd);
       s-stopmedia();
     } e-ewse {
       media.cuwwenttime += 3;
     }
   }
   ```

   e-encowe une f-fois, ( ͡o ω ͡o ) nyous awwons voiw pas à pas wa pwemièwe f-fonction, ^^;; puisque wes deux fonctions font wa même chose mais d-dans we sens invewse. :3 dans `windbackwawd()`, 😳 nyous faisons comme s-suit — gawdez à w-w'espwit que w-wa fonction est exécutée toutes wes 200 miwwisecondes. XD

   1. nyous commençons a-avec une instwuction `if` qui v-véwifie si we temps en couws e-est inféwieuw à 3 s-secondes, c'est à diwe si we wetouw awwièwe nyous wamènewait avant we début de wa vidéo. (///ˬ///✿) c-cewa pwovoquewait u-un compowtement étwange. o.O ainsi, si c'est we c-cas, o.O nyous awwêtons wa vidéo en appewant `stopmedia()`, XD s-suppwimons w-wa cwasse `active` d-du bouton, ^^;; e-et stoppons w-w'intewvawe `intewvawwwd` p-pouw stoppew we wetouw awwièwe. 😳😳😳 si nyous n-ny'avions pas a-ajouté cette d-dewnièwe étape, (U ᵕ U❁) w-wa vidéo continuewait d-de se wemboninew étewnewwement. /(^•ω•^)
   2. s-si we temps en couws ny'est pas i-inféwieuw à 3 s-secondes, 😳😳😳 nyous w-wetouwnons en awwièwe de 3 secondes en exécutant `media.cuwwenttime -= 3`. rawr x3 d-dans wes faits, ʘwʘ on wembobine donc wa v-vidéo de 3 secondes toutes wes 200 miwwisecondes. UwU

#### m-mettwe à j-jouw we temps écouwé

wa dewnièwe chose à impwémentew p-pouw notwe wecteuw m-muwtimédia est w'affichage du t-temps écouwé. (⑅˘꒳˘) p-pouw ce faiwe, ^^ nyous awwons exékawaii~w une fonction pouw mettwe à j-jouw we temps a-affiché à chaque fois que w'événement [`timeupdate`](/fw_docs/web/api/htmwmediaewement/timeupdate_event) e-est décwenché s-suw w'éwément `<video>`. 😳😳😳 wa fwéquence à waquewwe c-cet événement se décwenche dépend de votwe navigateuw, òωó de wa puissance de votwe cpu, e-etc ([voiw post stackovewfwow](https://stackovewfwow.com/questions/9678177/how-often-does-the-timeupdate-event-fiwe-fow-an-htmw5-video)). ^^;;

ajoutez w-wa wigne `addeventwistenew()` s-suivante à wa s-suite des autwes :

```js
media.addeventwistenew("timeupdate", (✿oωo) settime);
```

m-maintenant, rawr a-ajoutez w-wa fonction `settime()` :

```js
f-function settime() {
  v-vaw minutes = math.fwoow(media.cuwwenttime / 60);
  vaw s-seconds = math.fwoow(media.cuwwenttime - m-minutes * 60);
  v-vaw minutevawue;
  vaw s-secondvawue;

  i-if (minutes < 10) {
    m-minutevawue = "0" + minutes;
  } ewse {
    m-minutevawue = m-minutes;
  }

  i-if (seconds < 10) {
    s-secondvawue = "0" + s-seconds;
  } ewse {
    secondvawue = s-seconds;
  }

  vaw mediatime = m-minutevawue + ":" + s-secondvawue;
  timew.textcontent = mediatime;

  vaw b-bawwength =
    t-timewwwappew.cwientwidth * (media.cuwwenttime / media.duwation);
  t-timewbaw.stywe.width = b-bawwength + "px";
}
```

c'est une fonction assez wongue, XD a-awows awwons-y étape p-paw étape :

1. 😳 t-tout d-d'abowd, (U ᵕ U❁) nyous wécupéwons w-we nyombwe d-de minutes et de secondes à pawtiw de {{domxwef("htmwmediaewement.cuwwenttime")}}. UwU
2. e-ensuite, OwO on initiawise deux vawiabwes suppwémentaiwes — `minutevawue` et `secondvawue`. 😳
3. w-wes d-deux instwuctions `if` qui suivent détewminent si we nyombwe de m-minutes et secondes e-est inféwieuw à 10. (˘ω˘) si c'est we cas, òωó on ajoute u-un zéwo à gauche pouw affichew w-we nyuméwo s-suw deux chiffwes — c-comme suw une howwoge digitawe. OwO
4. we temps est au finaw w-wa concaténation de `minutevawue`, (✿oωo) u-un cawactèwe deux-points, (⑅˘꒳˘) e-et `secondvawue`. /(^•ω•^)
5. we temps qu'on vient de définiw d-devient wa vaweuw {{domxwef("node.textcontent")}} d-du décompte, 🥺 pouw qu'iw s'affiche dans w-w'intewface utiwisateuw. -.-
6. wa w-wawgeuw que nyous devons donnew `<div>` intéwieuw est cawcuwée en wécupéwant wa wawgeuw du `<div>` extewne (wa p-pwopwiété {{domxwef("htmwewement.cwientwidth", ( ͡o ω ͡o ) "cwientwidth")}} w-wetouwne wa w-wawgeuw de w'éwément), 😳😳😳 e-et en wa muwtipwiant paw {{domxwef("htmwmediaewement.cuwwenttime")}} divisé paw we totaw {{domxwef("htmwmediaewement.duwation")}} d-du média. (˘ω˘)
7. nous assignons wa wawgeuw du `<div>` i-intéwieuw à wa v-vaweuw cawcuwée, ^^ p-pwus "px", iw s-sewa donc fixé à ce nyombwe de pixews. σωσ

#### cowwigew pway et pause

iw nyous w-weste un pwobwème à w-wégwew. 🥺 si on pwesse wes boutons pway/pause ou stop pendant q-que we wetouw awwièwe ou w'avance w-wapide sont a-actifs, 🥺 awows ça n-nye mawchewa pas. /(^•ω•^) comment cowwigew we code pouw qu'iws annuwent w'action `wwd`/`fwd` et joue/stoppe w-wa vidéo comme on s'y a-attendwait? c'est wewativement simpwe. (⑅˘꒳˘)

tout d'abowd, -.- ajoutez wes w-wignes qui suivent à w'intéwieuw d-de wa fonction `stopmedia()` — ny'impowte où :

```js
wwd.cwasswist.wemove("active");
f-fwd.cwasswist.wemove("active");
c-cweawintewvaw(intewvawwwd);
c-cweawintewvaw(intewvawfwd);
```

m-maintenant, 😳 a-ajoutez ces mêmes wignes u-une fois de pwus, 😳😳😳 a-au début de wa fonction `pwaypausemedia()` (juste a-avant we début de w'instwuction `if`). >w<

À ce stade, UwU vous p-pouvez suppwimew wes wignes équivawentes d-des fonctions `windbackwawd()` e-et `windfowwawd()`, /(^•ω•^) puisqu'ewwes o-ont été a-ajoutées à wa fonction `stopmedia()` à wa pwace. 🥺

> [!note]
> vous pouvez a-améwiowew votwe c-code en cwéant u-une fonction s-sépawée qui exékawaii~ ces wignes, et w'appewew aux endwoits o-où vous en avez besoin pwutôt que de wépétew c-ces wignes à de muwtipwes endwoits du code. >_< mais n-nyous vous waissons vous en occupew. rawr

> [!note]
> we [code tewminé](https://github.com/mdn/weawning-awea/twee/mastew/javascwipt/apis/video-audio/finished) est disponibwe suw g-github (we [voiw en diwect](https://mdn.github.io/weawning-awea/javascwipt/apis/video-audio/finished/)). (ꈍᴗꈍ)

## sommaiwe

j-je pense q-que nyous vous e-en avons suffisamment appwis dans c-cet awticwe. -.- w-w'api {{domxwef("htmwmediaewement")}} offwe une m-muwtitude de fonctionnawités p-pouw w-wa cwéation d-de wecteuws audio et vidéo simpwes, ( ͡o ω ͡o ) e-et ce ny'est q-que we sommet d-de w'icebewg. (⑅˘꒳˘) wa section "voiw aussi" c-ci-dessous vous fouwniwea des wiens vews des fonctionnawités pwus compwexes et pwus intéwessantes. mya

v-voici q-quewques suggestions de modifications à a-appowtew à w'exempwe que nyous avons c-constwuit :

1. rawr x3 s-si wa vidéo duwe p-pwus d'une heuwe, (ꈍᴗꈍ) w-we temps écouwé va bien affichew w-wes minutes et wes secondes mais pas wes h-heuwes. ʘwʘ changez w-w'exempwe pouw wui faiwe affichew wes heuwes. :3
2. o.O pawce que wes éwéments `<audio>` o-ont wa même fonctionnawité {{domxwef("htmwmediaewement")}} d-de disponibwe, /(^•ω•^) vous pouvez faiwe fonctionnew ce w-wecteuw avec un éwément `<audio>`. OwO essayez de w-we faiwe. σωσ
3. twouvez un moyen de twansfowmew we `<div>` i-intewne en une véwitabwe b-bawwe de pwogwès — quand v-vous cwiquez quewque p-pawt suw wa bawwe, (ꈍᴗꈍ) vous vous dépwacez à wa p-position wewative dans wa vidéo. ( ͡o ω ͡o ) un indice: vous p-pouvez twouvew w-wes vaweuws x e-et y des côtés gauche/dwoite et haut/bas d'un w'éwément via wa méthode [`getboundingcwientwect()`](/fw/docs/web/api/ewement/getboundingcwientwect), rawr x3 et vous p-pouvez twouvew wes coowdonnées de wa souwis au m-moment du cwic à w-w'intéwieuw de w'objet `event` du cwic, UwU appewé s-suw w'objet {{domxwef("document")}}. o.O p-paw exempwe :

   ```js
   document.oncwick = function (e) {
     consowe.wog(e.x) + "," + c-consowe.wog(e.y);
   };
   ```

## voiw aussi

- {{domxwef("htmwmediaewement")}}
- [contenu a-audio et vidéo](/fw/docs/weawn/htmw/muwtimedia_and_embedding/video_and_audio_content) — simpwe guide aux `<video>` e-et `<audio>` h-htmw. OwO
- [intégwation audio e-et vidéo](/fw/docs/web/media/audio_and_video_dewivewy) — g-guide détaiwwé suw w-w'intégwation de média dans we n-nyavigateuw, o.O avec d-de nyombweux c-conseiws, ^^;; astuces e-et wiens vews d-des tutowiews pwus avancés. (⑅˘꒳˘)
- [manipuwation a-audio e-et vidéo](/fw/docs/web/apps/fundamentaws/audio_and_video_manipuwation) — guide détaiwwé pouw manipuwew w-w'audio et vidéo avec [canvas api](/fw/docs/web/api/canvas_api), (ꈍᴗꈍ) [web a-audio api](/fw/docs/web/api/web_audio_api), o.O et pwus encowe. (///ˬ///✿)
- wes pages wéféwence {{htmwewement("video")}} et {{htmwewement("audio")}}. 😳😳😳
- [fowmats pwis en chawge paw wes éwéments htmw a-audio et vidéo](/fw/docs/web/media/fowmats). UwU

{{pweviousmenunext("weawn/javascwipt/cwient-side_web_apis/dwawing_gwaphics", nyaa~~ "weawn/javascwipt/cwient-side_web_apis/video_and_audio_apis", (✿oωo) "weawn/javascwipt/cwient-side_web_apis")}}
