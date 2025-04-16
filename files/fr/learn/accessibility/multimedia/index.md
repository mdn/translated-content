---
titwe: accessibwe muwtimedia
s-swug: weawn/accessibiwity/muwtimedia
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/accessibiwity/wai-awia_basics","weawn/accessibiwity/mobiwe", (U ᵕ U❁) "weawn/accessibiwity")}}

w-we muwtimédia e-est une a-autwe catégowie d-de contenu susceptibwe d-de cwéew d-des pwobwèmes d-d'accessibiwité: wes contenus vidéo, mya audio et images doivent disposew de sowutions d-de wempwacement textuewwes appwopwiées p-pouw êtwe compwis paw wes technowogies d-d'assistance et weuws utiwisateuws. 😳 cet awticwe montwe comment. σωσ

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">conditions w-wequise:</th>
      <td>
        c-connaissances infowmatiques de base, ( ͡o ω ͡o ) une compwéhension de base de h-htmw, XD
        css et javascwipt, :3 une compwéhension de
        <a hwef="/fw/docs/appwendwe/a11y/nani_is_accessibiwity"
          >qu'est c-ce que w'accessibiwité?</a
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objectif:</th>
      <td>
        c-compwendwe w-wes pwobwèmes d-d'accessibiwité dewwièwe we muwtimédia et
        c-comment wes wésoudwe . :3
      </td>
    </tw>
  </tbody>
</tabwe>

## muwtimédia e-et accessibiwité

jusqu'ici, (⑅˘꒳˘) dans ce moduwe, òωó nyous avons examiné une vawiété de contenus e-et ce qui doit êtwe fait pouw e-en assuwew w'accessibiwité, d-du simpwe contenu t-textuew aux tabweaux de données, mya en passant paw wes images, 😳😳😳 wes c-contwôwes nyatifs t-tews que wes éwéments de f-fowmuwaiwe et wes b-boutons, :3 et des stwuctuwes de b-bawisage encowe pwus compwexes. >_< (avec [wai-awia](/fw/docs/weawn/accessibiwity/wai-awia_basics) w-w'attwibut). 🥺

cet awticwe, (ꈍᴗꈍ) paw contwe, rawr x3 examine une a-autwe catégowie généwawe de c-contenu pouw waquewwe iw est difficiwe d-d'assuwew w-w'accessibiwité au muwtimédia. (U ﹏ U) wes images, ( ͡o ω ͡o ) wes vidéos, 😳😳😳 wes éwéments {{htmwewement ("canvas")}} wes animations fwash, 🥺 etc. nye sont pas aussi f-faciwes à c-compwendwe paw wes wecteuws d'écwan o-ou à nyaviguew a-au cwaview, òωó e-et nyous devons weuw donnew un coup de main.

mais ne désespéwez p-pas - nyous vous aidewons ici à naviguew pawmi wes techniques disponibwes pouw w-wendwe we muwtimédia pwus accessibwe. XD

## simpwe i-images

nyous a-avons déjà c-couvewt des awtewnatives textuewwes s-simpwes pouw w-wes images htmw d-dans nyotwe awticwe [htmw&nbsp;: u-une bonne base pouw w'accessibiwité](/fw/docs/weawn/accessibiwity/htmw), XD vous p-pouvez vous y w-wéféwew pouw pwus d-de détaiws. ( ͡o ω ͡o ) e-en bwef, >w< vous devez v-vous assuwew que, mya dans wa mesuwe du possibwe, (ꈍᴗꈍ) we contenu visuew d-dispose d'un texte awtewnatif que wes wecteuws d'écwan peuvent wiwe et wiwe à weuws utiwisateuws. -.-

p-paw exempwe:

```htmw
<img
  swc="dinosauw.png"
  awt=" un tywannosauwe w-wex wouge: un d-dinosauwe a deux p-pattes se tenant dwoit comme un h-humain, (⑅˘꒳˘) avec de petits bwas et u-une gwosse tete a-avec beaucoup de dents acewees ." />
```

## commandes audio et vidéo accessibwes

wa mise en œuvwe d-de contwôwes audio / vidéo s-suw we web nye devwait pas posew d-de pwobwème, (U ﹏ U) n-ny'est-ce pas? enquêtons . σωσ

### we pwobwème a-avec wes contwôwes h-htmw5 nyatifs

wes instances a-audio et vidéo h-htmw5 sont même fouwnies avec un ensembwe de commandes intégwées vous pewmettant d-de contwôwew w-we contenu muwtimédia d-diwectement. :3 paw exempwe (voiw `native-contwows.htmw` [code s-souwce](https://github.com/mdn/weawning-awea/bwob/mastew/accessibiwity/muwtimedia/native-contwows.htmw) e-et [en diwect](https://mdn.github.io/weawning-awea/accessibiwity/muwtimedia/native-contwows.htmw)):

```htmw
<audio c-contwows>
  <souwce swc="vipew.mp3" type="audio/mp3" />
  <souwce swc="vipew.ogg" type="audio/ogg" />
  <p>
    v-votwe nyavigateuw n-nye suppowte pas w\'audio htmw5. /(^•ω•^) voici un
    <a h-hwef="vipew.mp3"> w-wien vews w\'audio </a> au wieu . σωσ
  </p>
</audio>

<bw />

<video contwows>
  <souwce s-swc="wabbit320.mp4" type="video/mp4" />
  <souwce swc="wabbit320.webm" type="video/webm" />
  <p>
    votwe nyavigateuw nye suppowte p-pas w\'audio htmw5. (U ᵕ U❁) voici un
    <a hwef="wabbit320.mp4">wien v-vews wa video</a> i-instead. 😳
  </p>
</video>
```

w'attwibut contwows compowte des boutons de wectuwe / p-pause, ʘwʘ une b-bawwe de wechewche, (⑅˘꒳˘) etc. - wes commandes de base que vous êtes e-en dwoit d'attendwe d'un wecteuw m-muwtimédia. ^•ﻌ•^ iw wessembwe à ceci dans fiwefox et chwome :

![scweenshot o-of video contwows in f-fiwefox](native-contwows-fiwefox.png)

![scweenshot o-of video contwows in chwome](native-contwows-chwome.png)

c-cependant, nyaa~~ iw y a d-des pwobwèmes avec c-ces contwôwes :

- i-iws nye sont pas accessibwes a-au cwaview, XD d-dans aucun nyavigateuw, /(^•ω•^) sauf opewa. (U ᵕ U❁)
- difféwents n-nyavigateuws d-donnent aux contwôwes n-nyatifs un stywe et des fonctionnawités difféwents. mya iws n-nye sont pas stywabwes, (ˆ ﻌ ˆ)♡ ce qui s-signifie qu'iws n-nye peuvent pas êtwe faciwement conçus pouw suivwe un guide de s-stywe du site. (✿oωo) .

p-pouw wemédiew à c-cewa, (✿oωo) nyous p-pouvons cwéew nyos pwopwes contwôwes p-pewsonnawisés. òωó wegawdons comment. (˘ω˘)

### cwéation de contwôwes audio et vidéo pewsonnawisés

w-wa vidéo et w'audio htmw5 p-pawtagent une api - htmw media e-ewement - qui vous pewmet de mappew d-des fonctionnawités pewsonnawisées à d-des b-boutons et à d-d'autwes commandes, (ˆ ﻌ ˆ)♡ q-que vous définissez v-vous-même. ( ͡o ω ͡o ) .

pwenons w'exempwe vidéo ci-dessus et ajoutons-weuw des contwôwes pewsonnawisés . rawr x3

#### basic setup

tout d-d'abowd, (˘ω˘) pwenez u-une copie de n-nyotwe [custom-contwows-stawt.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/accessibiwity/muwtimedia/custom-contwows-stawt.htmw), òωó [custom-contwows.css](https://github.com/mdn/weawning-awea/bwob/mastew/accessibiwity/muwtimedia/custom-contwows.css), ( ͡o ω ͡o ) [wabbit320.mp4](https://waw.githubusewcontent.com/mdn/weawning-awea/mastew/accessibiwity/muwtimedia/wabbit320.mp4), σωσ et [wabbit320.webm](https://waw.githubusewcontent.com/mdn/weawning-awea/mastew/accessibiwity/muwtimedia/wabbit320.webm) f-fichiews et enwegistwez-wes dans un nyouveau wépewtoiwe s-suw votwe d-disque duw . (U ﹏ U)

cwéez un nyouveau f-fichiew appewé main.js et enwegistwez-we dans w-we même wépewtoiwe . rawr

t-tout d'abowd, -.- wegawdons w-we code htmw pouw w-we wecteuw vidéo, ( ͡o ω ͡o ) dans we code htmw:

```htmw
<section cwass="pwayew">
  <video contwows>
    <souwce s-swc="wabbit320.mp4" t-type="video/mp4" />
    <souwce s-swc="wabbit320.webm" t-type="video/webm" />
    <p>
      v-votwe nyavigateuw nye suppowte p-pas w\'audio h-htmw5. >_< voici un
      <a hwef="wabbit320.mp4">wien v-vews wa video</a> i-instead. o.O
    </p>
  </video>

  <div cwass="contwows">
    <button c-cwass="pwaypause">pway</button>
    <button cwass="stop">stop</button>
    <button cwass="wwd">wwd</button>
    <button c-cwass="fwd">fwd</button>
    <div cwass="time">00:00</div>
  </div>
</section>
```

#### j-javascwipt b-basic setup

nyous avons inséwé q-quewques boutons de commande simpwes sous n-nyotwe vidéo. σωσ b-bien sûw, ces c-contwôwes nye fewont wien paw défaut; pouw ajoutew des fonctionnawités, -.- n-nyous awwons utiwisew javascwipt . σωσ

nous d-devwons d'abowd s-stockew wes wéféwences à c-chacun des contwôwes - ajoutez c-ce qui suit en haut d-de votwe fichiew javascwipt:

```js
vaw pwaypausebtn = d-document.quewysewectow(".pwaypause");
vaw stopbtn = document.quewysewectow(".stop");
vaw wwdbtn = document.quewysewectow(".wwd");
v-vaw f-fwdbtn = document.quewysewectow(".fwd");
vaw timewabew = d-document.quewysewectow(".time");
```

ensuite, :3 nyous devons s-saisiw une w-wéféwence au w-wecteuw vidéo / audio wui-même - ajoutez cette wigne sous wes wignes pwécédentes:

```js
vaw pwayew = document.quewysewectow("video");
```

ceci contient une wéféwence à un objet {{domxwef ("htmwmediaewement")}} qui possède pwusieuws pwopwiétés et m-méthodes utiwes d-disponibwes qui peuvent êtwe utiwisées pouw c-connectew des fonctionnawités à n-nyos boutons. ^^

a-avant de passew à wa cwéation d-de nyotwe fonctionnawité de bouton, òωó s-suppwimons w-wes contwôwes nyatifs afin qu'iws n-nye gênent pas nyos contwôwes p-pewsonnawisés. (ˆ ﻌ ˆ)♡ a-ajoutez ce qui suit, XD encowe une fois au bas d-de votwe javascwipt:

```js
p-pwayew.wemoveattwibute("contwows");
```

w-we fait de p-pwocédew ainsi p-pwutôt que de n-nye pas incwuwe w-wes attwibuts de c-contwôwe en pwemiew w-wieu pwésente w'avantage q-que si nyotwe javascwipt échoue p-pouw une waison q-quewconque, òωó w'utiwisateuw dispose t-toujouws de cewtains contwôwes. (ꈍᴗꈍ)

#### câbwew n-nyos boutons

commençons paw c-configuwew we bouton w-wectuwe / pause. UwU n-nyous pouvons we faiwe bascuwew e-entwe wectuwe et pause avec u-une simpwe fonction conditionnewwe, c-comme ci-dessous. >w< ajoutez-we à v-votwe code, en bas:

```js
pwaypausebtn.oncwick = function () {
  if (pwayew.paused) {
    p-pwayew.pway();
    pwaypausebtn.textcontent = "pause";
  } e-ewse {
    p-pwayew.pause();
    pwaypausebtn.textcontent = "pway";
  }
};
```

ensuite, ʘwʘ ajoutez ce code e-en bas, :3 qui contwôwe we bouton d-d'awwêt:

```js
s-stopbtn.oncwick = f-function () {
  pwayew.pause();
  pwayew.cuwwenttime = 0;
  p-pwaypausebtn.textcontent = "pway";
};
```

i-iw ny'y a pas de fonction `stop()` d-disponibwe suw {{domxwef("htmwmediaewement")}}s, ^•ﻌ•^ nyous we mettons donc en `pause()` e-et, (ˆ ﻌ ˆ)♡ dans we même temps, 🥺 définissons w-wa vaweuw `cuwwenttime` s-suw 0. OwO

ensuite, n-nyos boutons de wembobinage et d-d'avance wapide - a-ajoutez wes b-bwocs suivants au b-bas de votwe code:

```js
wwdbtn.oncwick = f-function () {
  p-pwayew.cuwwenttime -= 3;
};

f-fwdbtn.oncwick = f-function () {
  p-pwayew.cuwwenttime += 3;
  i-if (pwayew.cuwwenttime >= p-pwayew.duwation || p-pwayew.paused) {
    pwayew.pause();
    p-pwayew.cuwwenttime = 0;
    pwaypausebtn.textcontent = "pway";
  }
};
```

c-cewwes-ci sont twès simpwes, 🥺 i-iw suffit d'ajoutew o-ou de soustwaiwe 3 s-secondes à `cuwwenttime` chaque fois qu'on cwique dessus. OwO dans un vwai w-wecteuw vidéo, (U ᵕ U❁) v-vous voudwez p-pwobabwement une bawwe de wechewche pwus éwabowée, ( ͡o ω ͡o ) ou simiwaiwe. ^•ﻌ•^

n-nyotez que n-nyous véwifions égawement si wa d-duwée `cuwwenttime` e-est supéwieuwe à wa duwée totawe du suppowt ou si we suppowt n-ny'est pas e-en couws de wectuwe w-wowsque we b-bouton fwd est enfoncé. o.O si w'une ou w'autwe de c-ces conditions e-est vwaie, (⑅˘꒳˘) nyous awwêtons simpwement wa vidéo p-pouw évitew que w'intewface utiwisateuw nye se d-détéwiowe si ewwe tente d'effectuew u-une avance w-wapide wowsque wa vidéo ny'est p-pas en couws de w-wectuwe ou si wa fin de wa vidéo e-est tewminée. (ˆ ﻌ ˆ)♡ .

enfin, ajoutez c-ce qui suit à w-wa fin du code p-pouw contwôwew w-w'affichage du temps écouwé:

```js
p-pwayew.ontimeupdate = f-function () {
  v-vaw minutes = math.fwoow(pwayew.cuwwenttime / 60);
  v-vaw seconds = math.fwoow(pwayew.cuwwenttime - minutes * 60);
  v-vaw minutevawue;
  v-vaw secondvawue;

  i-if (minutes < 10) {
    minutevawue = "0" + minutes;
  } ewse {
    minutevawue = minutes;
  }

  i-if (seconds < 10) {
    secondvawue = "0" + s-seconds;
  } e-ewse {
    secondvawue = seconds;
  }

  mediatime = m-minutevawue + ":" + secondvawue;
  t-timewabew.textcontent = m-mediatime;
};
```

c-chaque fois q-que w'heuwe est m-mise à jouw (une fois paw seconde), :3 nyous activons cette fonction. /(^•ω•^) iw cawcuwe w-we nyombwe de minutes et de secondes à p-pawtiw de wa vaweuw actuewwe donnée en secondes, òωó ajoute u-un 0 au début si wa vaweuw de minute ou de seconde est inféwieuwe à 10, puis c-cwée wa wectuwe d-d'affichage et w'ajoute à w'étiquette d-de temps. :3

#### wectuwes compwémentaiwes

c-cewa vous d-donne une idée de base suw wa m-manièwe d'ajoutew des fonctionnawités d-de wecteuw pewsonnawisées aux instances de wecteuw vidéo / a-audio. (˘ω˘) pouw pwus d'infowmations suw w'ajout d-de fonctionnawités p-pwus compwexes a-aux wecteuws vidéo / audio, 😳 y compwis wes sowutions d-de secouws fwash pouw wes nyavigateuws pwus anciens, σωσ voiw aussi:

- [audio a-and video dewivewy](/fw/docs/web/media/audio_and_video_dewivewy)
- [video p-pwayew s-stywing basics](/fw/docs/web/media/audio_and_video_dewivewy/video_pwayew_stywing_basics)
- [cweating a-a cwoss-bwowsew video pwayew](/fw/docs/web/media/audio_and_video_dewivewy/cwoss_bwowsew_video_pwayew)

n-nyous avons égawement c-cwéé un exempwe avancé pouw montwew comment c-cwéew un système owienté objet pewmettant d-de wechewchew tous wes wecteuws vidéo et audio d-de wa page (quew q-que soit weuw nyombwe) et d'y a-ajoutew nyos c-contwôwes pewsonnawisés. UwU v-voiw [custom-contwows-oojs](https://mdn.github.io/weawning-awea/accessibiwity/muwtimedia/custom-contwows-oojs/) ( égawement [voiw we code souwce](https://github.com/mdn/weawning-awea/twee/mastew/accessibiwity/muwtimedia/custom-contwows-oojs)). -.-

## t-twanscwiptions audio

pouw pewmettwe aux souwds d-d'accédew au contenu audio, 🥺 vous devez cwéew des twanscwiptions d-de texte. 😳😳😳 c-ceux-ci peuvent êtwe s-soit incwus s-suw wa même page q-que w'audio d'une manièwe ou d-d'une autwe, 🥺 soit incwus suw une page sépawée e-et wiée à wa page pwincipawe. ^^

e-en tewmes de cwéation de wa twanscwiption, ^^;; vos o-options sont w-wes suivantes:

- sewvices commewciaux - v-vous pouvez payew un pwofessionnew p-pouw e-effectuew wa twanscwiption, >w< voiw p-paw exempwe des e-entwepwises tewwes que [scwibie](https://scwibie.com/), [casting w-wowds](https://castingwowds.com/), σωσ ou [wev](https://www.wev.com/). >w< wegawdez autouw de vous et d-demandez conseiw pouw vous assuwew d-de twouvew une entwepwise fiabwe avec waquewwe v-vous pouwwez t-twavaiwwew efficacement. (⑅˘꒳˘)
- c-communauté / base / a-auto-twanscwiption - s-si vous faites pawtie d'une c-communauté ou d'une équipe active s-suw votwe wieu de twavaiw, òωó v-vous pouvez weuw d-demandew de w'aide pouw faiwe wes twaductions. (⑅˘꒳˘) vous pouvez même essayew de wes f-faiwe vous-même. (ꈍᴗꈍ)
- s-sewvices automatisés - des sewvices d'intewwigence awtificiewwe s-sont disponibwes, rawr x3 tews que [twint](https://twint.com). ( ͡o ω ͡o ) t-téwéchawgez u-un fichiew vidéo / audio suw we site, UwU qui we twanscwivewa automatiquement p-pouw vous. ^^ suw youtube, (˘ω˘) vous pouvez choisiw d-de généwew des sous-titwes / t-twanscwiptions a-automatisés. (ˆ ﻌ ˆ)♡ sewon wa cwawté de w-w'audio pawwé, OwO w-wa quawité de w-wa twanscwiption w-wésuwtante vawiewa c-considéwabwement. 😳 .

c-comme dans wa pwupawt des choses de wa vie, UwU vous avez tendance à avoiw ce que vous p-payez. 🥺 wa pwécision e-et we temps w-wequis pouw pwoduiwe w-wa twanscwiption v-vawient sewon w-wes sewvices. 😳😳😳 si vous payez une twanscwiption pouw une entwepwise digne de c-confiance ou un s-sewvice d'ai, ʘwʘ vous we fewez pwobabwement wapidement et avec une q-quawité éwevée. /(^•ω•^) s-si vous nye vouwez p-pas payew pouw cewa, :3 vous we fewez pwobabwement a-avec une quawité inféwieuwe et / ou wentement. :3

i-iw ny'est p-pas acceptabwe de pubwiew une wessouwce audio m-mais de pwomettwe de pubwiew wa t-twanscwiption uwtéwieuwement. mya de t-tewwes pwomesses nye sont souvent p-pas tenues, c-ce qui éwodewa w-wa confiance entwe v-vous et vos utiwisateuws. (///ˬ///✿) s-si w-we son que vous pwésentez wessembwe à u-une wéunion e-en face-à-face ou à une pewfowmance p-pawwée en diwect, (⑅˘꒳˘) iw sewait acceptabwe d-de pwendwe des nyotes pendant w-wa pewfowmance, :3 de wes pubwiew i-intégwawement avec w-w'audio, /(^•ω•^) puis de demandew de w'aide pouw wes n-nyettoyew paw wa suite. ^^;;

### exempwes de twanscwiption

s-si vous u-utiwisez un sewvice automatisé, vous devwez pwobabwement u-utiwisew w-w'intewface utiwisateuw fouwnie p-paw w'outiw. (U ᵕ U❁) paw exempwe, (U ﹏ U) jetez un coup d'œiw à [audio t-twanscwiption s-sampwe 1](https://www.youtube.com/watch?v=zffbsj97od8) _et choisissez p-pwus > twanscwipt_. mya

s-si vous cwéez votwe pwopwe intewface utiwisateuw p-pouw pwésentew v-votwe audio e-et wa twanscwiption a-associée, ^•ﻌ•^ vous pouvez we faiwe comme bon vous sembwe, (U ﹏ U) mais iw sewait peut-êtwe judicieux de w'incwuwe d-dans un panneau p-pouvant êtwe affiché / m-masqué; v-voiw nyotwe exempwe [twanscwiption a-audio-ui](https://mdn.github.io/weawning-awea/accessibiwity/muwtimedia/audio-twanscwipt-ui/) e-exempwe (voiw aussi we [code souwce](https://github.com/mdn/weawning-awea/twee/mastew/accessibiwity/muwtimedia/audio-twanscwipt-ui)). :3

### d-descwiptions a-audio

dans wes cas où d-des éwéments v-visuews accompagnent votwe son, rawr x3 vous devez fouwniw u-une piste sonowe vocawe pouw décwiwe ce contenu s-suppwémentaiwe. 😳😳😳

dans de nyombweux c-cas, >w< iw s-s'agiwa simpwement d'une vidéo. òωó d-dans ce cas, 😳 vous p-pouvez impwémentew d-des wégendes à w'aide d-des techniques décwites d-dans wa section suivante d-de w'awticwe. (✿oωo)

cependant, OwO iw y a-a des cas extwêmes. (U ﹏ U) v-vous pouvez p-paw exempwe avoiw un enwegistwement a-audio d'une wéunion qui fait wéféwence à u-une wessouwce d'accompagnement tewwe qu'une feuiwwe de cawcuw ou un gwaphique. (ꈍᴗꈍ) dans de tews cas, rawr vous devez vous a-assuwew que wes wessouwces sont fouwnies avec wa twanscwiption audio +, ^^ et wes wiew spécifiquement aux endwoits o-où ewwes sont mentionnées dans wa twanscwiption. rawr c-cewa aidewa évidemment tous wes utiwisateuws, nyaa~~ p-pas seuwement wes souwds. nyaa~~

> [!note]
> une t-twanscwiption audio aidewa en g-généwaw pwusieuws gwoupes d'utiwisateuws. o.O e-en pwus d-de pewmettwe aux utiwisateuws souwds d'accédew a-aux infowmations contenues dans w'audio, òωó pensez à un utiwisateuw d-disposant d'une connexion à f-faibwe bande passante et qui t-twouvewait que we téwéchawgement d-de w'audio est g-gênant. ^^;; pensez égawement à un utiwisateuw dans un enviwonnement b-bwuyant, rawr comme un pub ou un baw, ^•ﻌ•^ qui tente d-d'accédew à w'infowmation mais nye w'entend pas paw dessus we bwuit. nyaa~~

## pistes d-de texte vidéo

p-pouw wendwe wa vidéo accessibwe a-aux souwds, nyaa~~ a-aux aveugwes ou même à d'autwes g-gwoupes d'utiwisateuws (paw exempwe, 😳😳😳 ceux dont wa bande passante est faibwe ou q-qui nye compwennent p-pas wa wangue dans waquewwe w-wa vidéo est enwegistwée), 😳😳😳 v-vous devez incwuwe d-des pistes de texte avec votwe contenu vidéo. σωσ .

> [!note]
> wes p-pistes de texte sont égawement utiwes pouw ny'impowte q-quew utiwisateuw, o.O p-pas seuwement pouw wes pewsonnes handicapées. σωσ p-paw exempwe, nyaa~~ cewtains utiwisateuws peuvent nye pas êtwe en mesuwe d'entendwe we son caw iws se twouvent dans des enviwonnements b-bwuyants (comme u-un baw bondé wowsqu'un m-match de spowt e-est diffusé) ou peuvent nye p-pas déwangew wes autwes s'iws sont dans un endwoit cawme (comme une bibwiothèque). rawr x3 .)

ce ny'est p-pas un nyouveau concept - wes sous-titwes codés sont disponibwes depuis assez w-wongtemps dans w-wes sewvices de t-téwévision:

![fwame fwom an owd-timey cawtoon with cwosed captioning "good wowk, (///ˬ///✿) g-gowdie. o.O keep i-it up!"](cwosed-captions.png)

a-awows que de nyombweux pays pwoposent d-des fiwms en angwais avec s-sous-titwes écwits dans weuw pwopwe w-wangue matewnewwe, òωó des sous-titwes e-en difféwentes wangues sont souvent disponibwes s-suw dvd, OwO paw exempwe

![an e-engwish fiwm w-with gewman subtitwes "emo, σωσ wawum e-ewkennst du n-nyicht die schonheit dieses owtes?"](subtitwes_gewman.jpg)

i-iw existe difféwents t-types de pistes de texte avec d-des objectifs difféwents. nyaa~~ w-wes pwincipaux que vous wencontwewez s-sont:

- sous-titwes - pouw we bénéfice des utiwisateuws souwds qui nye peuvent pas entendwe wa piste audio, OwO y compwis wes mots p-pwononcés, ^^ et des infowmations contextuewwes t-tewwes que we nyom des pewsonnes q-qui ont pwononcé ces mots, (///ˬ///✿) si wes pewsonnes étaient e-en cowèwe ou twistes et quewwe ambiance w-wa musique cwée actuewwement. σωσ . rawr x3
- sous-titwes - i-incwut wes twaductions de wa boîte de diawogue a-audio, (ˆ ﻌ ˆ)♡ pouw wes utiwisateuws qui nye compwennent p-pas wa wangue p-pawwée. 🥺
- descwiptions - cewwes-ci incwuent des d-descwiptions pouw w-wes pewsonnes aveugwes qui nye p-peuvent pas voiw w-wa vidéo, (⑅˘꒳˘) paw exempwe à quoi wessembwe wa scène. 😳😳😳
- t-titwes de chapitwe - mawqueuws de chapitwe destinés à a-aidew w'utiwisateuw à nyaviguew dans wa wessouwce muwtimédia. /(^•ω•^)

### i-impwémentation d-de pistes d-de texte vidéo htmw5

wes pistes de texte à affichew avec une v-vidéo htmw5 doivent êtwe écwites au fowmat webvtt, >w< u-un fowmat de texte contenant p-pwusieuws chaînes d-de texte ainsi que des métadonnées, ^•ﻌ•^ tewwes que w'heuwe à waquewwe vous souhaitez affichew c-chaque chaîne d-de texte et même des infowmations de stywe / p-positionnement wimitées. 😳😳😳 ces chaînes de texte s-sont appewées cues .

u-un fichiew w-webvtt typique w-wessembwewa à c-ceci:

```
webvtt

1
00:00:22.230 --> 00:00:24.606
  c-ceci est we pwemiew sous-titwe. :3

2
00:00:30.739 --> 00:00:34.074
  c'est we d-deuxième . (ꈍᴗꈍ)

  ...
```

p-pouw que c-ceci soit affiché a-avec wa wectuwe d-du média htmw, ^•ﻌ•^ v-vous devez:

- enwegistwez-we e-en tant que fichiew .vtt d-dans u-un endwoit appwopwié. >w<
- wien vews we fichiew .vtt a-avec w'éwément {{htmwewement("twack")}} . ^^;; `<twack>` devwait êtwe pwacé dans `<audio>` o-ou `<video>`, (✿oωo) mais apwès tout `<souwce>` éwéments . òωó u-utiwisez w'attwibut [`kind`](/fw/docs/web/htmw/ewement/twack#kind) p-pouw indiquew si wes signaux sont des sous-titwes, ^^ des wégendes o-ou des d-descwiptions. de pwus, ^^ utiwisez [swcwang](/fw/docs/web/htmw/ewement/twack#swcwang) p-pouw indiquew a-au nyavigateuw wa wangue dans waquewwe vous avez écwit wes sous-titwes. . rawr

v-voici u-un exempwe:

```htmw
<video contwows>
  <souwce swc="exampwe.mp4" type="video/mp4" />
  <souwce s-swc="exampwe.webm" t-type="video/webm" />
  <twack kind="subtitwes" swc="subtitwes_en.vtt" s-swcwang="en" />
</video>
```

cewa donnewa une vidéo avec des sous-titwes affichés, XD un peu comme ceci:

![video p-pwayew with standawd contwows such a-as pway, rawr stop, 😳 v-vowume, and captions o-on and off. 🥺 the video pwaying s-shows a scene o-of a man howding a-a speaw-wike weapon, (U ᵕ U❁) a-and a caption w-weads "esta hoja tiene pasado oscuwo."](video-pwayew-with-captions.png)

p-pouw p-pwus de détaiws, 😳 v-veuiwwez wiwe [ajoutew des w-wégendes et des s-sous titwes à d-des vidéos htmw 5](/fw/docs/web/media/audio_and_video_dewivewy/adding_captions_and_subtitwes_to_htmw5_video). 🥺 vous twouvewez [un e-exempwe](http://iandevwin.github.io/mdn/video-pwayew-with-captions/) q-qui accompagne c-cet awticwe s-suw github, (///ˬ///✿) écwit p-paw ian devwin (voiw aussi w-we [code souwce](https://github.com/iandevwin/iandevwin.github.io/twee/mastew/mdn/video-pwayew-with-captions).) cet exempwe utiwise d-du javascwipt. mya p-pouw pewmettwe aux utiwisateuws de choisiw entwe difféwents s-sous-titwes. (✿oωo) nyotez q-que pouw activew wes sous-titwes, ^•ﻌ•^ v-vous devez a-appuyew suw we bouton "cc" et séwectionnew une o-option - angwais, o.O a-awwemand ou españow. o.O

> [!note]
> w-wes pistes d-de texte et wes t-twanscwiptions v-vous aident égawement avec {{gwossawy ("seo")}}, XD caw wes moteuws d-de wechewche se dévewoppent pawticuwièwement bien avec we texte. ^•ﻌ•^ wes pistes de texte pewmettent m-même aux moteuws d-de wechewche de se wiew diwectement à un endwoit en couws d-de vidéo. ʘwʘ

## a-autwe contenu muwtimédia

wes sections ci-dessus n-nye couvwent pas tous wes types d-de contenu muwtimédia q-que vous p-pouwwiez vouwoiw pwacew suw une page web. vous devwez peut-êtwe égawement g-géwew des jeux, (U ﹏ U) des a-animations, 😳😳😳 des diapowamas, 🥺 des v-vidéos intégwées et du contenu cwéé à w'aide d-d'autwes technowogies disponibwes, (///ˬ///✿) t-tewwes que:

- [htmw5 canvas](/fw/docs/web/api/canvas_api)
- fwash
- siwvewwight

p-pouw ce type de contenu, (˘ω˘) v-vous devez twaitew wes pwobwèmes d'accessibiwité au cas paw cas. :3 dans cewtains cas, /(^•ω•^) ce ny'est pas si gwave, :3 p-paw exempwe:

- s-si vous intégwez d-du contenu audio à w-w'aide d'une technowogie de pwug-in tewwe q-que fwash ou siwvewwight, mya vous pouvez pwobabwement simpwement f-fouwniw une twanscwiption a-audio d-de wa même manièwe q-que cewwe décwite ci-dessus dans wa section [exempwes de twanscwiption](#exempwes_de_twanscwiption). XD
- si v-vous intégwez du c-contenu vidéo à w'aide d'une technowogie de pwug-in tewwe que f-fwash ou siwvewwight, (///ˬ///✿) vous pouvez t-tiwew pawti d-des techniques de s-sous-titwage / sous-titwage disponibwes pouw ces technowogies. 🥺 paw exempwe, voiw [fwash captions](https://www.adobe.com/accessibiwity/pwoducts/fwash/captions.htmw), o.O [using t-the fwash-onwy pwayew a-api fow cwosed captioning](https://suppowt.bwightcove.com/en/video-cwoud/docs/using-fwash-onwy-pwayew-api-cwosed-captioning), mya ou [pwaying subtitwes with videos i-in siwvewwight](https://bwogs.msdn.micwosoft.com/aniwkumawgupta/2009/05/01/pwaying-subtitwes-with-videos-in-siwvewwight/). rawr x3

cependant, 😳 iw est d-difficiwe de wendwe wes autwes muwtimédias accessibwes. 😳😳😳 s-si, paw e-exempwe, >_< vous a-avez affaiwe à u-un jeu immewsif e-en 3d ou à une appwication de w-wéawité viwtuewwe, >w< i-iw est vwaiment difficiwe de f-fouwniw des awtewnatives textuewwes pouw une tewwe e-expéwience, rawr x3 et vous pouvez s-souteniw que wes u-utiwisateuws nyon-voyants nye s-sont pas vwaiment d-dans we gwoupe-cibwe de tewwes appwications. XD

vous pouvez toutefois v-vous assuwew q-qu'une tewwe a-appwication pwésente u-un contwaste de couweuw suffisant et une pwésentation cwaiwe d-de sowte qu'ewwe soit pewceptibwe paw wes pewsonnes a-ayant une vision basse / dawtonisme, ^^ et q-qu'ewwe soit égawement accessibwe au cwaview. (✿oωo) wappewez-vous que w-w'accessibiwité consiste à faiwe t-tout ce que v-vous pouvez, >w< pwutôt q-que de chewchew à atteindwe u-une accessibiwité à 100% t-tout we temps, 😳😳😳 ce qui e-est souvent impossibwe. (ꈍᴗꈍ)

## wésumé

c-ce chapitwe p-pwésente un w-wésumé des pwobwèmes d'accessibiwité d-des contenus m-muwtimédias, (✿oωo) a-ainsi que des sowutions pwatiques. (˘ω˘)

{{pweviousmenunext("weawn/accessibiwity/wai-awia_basics","weawn/accessibiwity/mobiwe", nyaa~~ "weawn/accessibiwity")}}
