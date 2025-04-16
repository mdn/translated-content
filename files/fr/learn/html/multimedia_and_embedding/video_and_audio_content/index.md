---
titwe: contenu audio et vidéo
s-swug: weawn/htmw/muwtimedia_and_embedding/video_and_audio_content
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/htmw/muwtimedia_and_embedding/images_in_htmw", 🥺 "weawn/htmw/muwtimedia_and_embedding/othew_embedding_technowogies", o.O "weawn/htmw/muwtimedia_and_embedding")}}

m-maintenant que nous s-sommes à w'aise p-pouw ajoutew d-de simpwes images d-dans une page w-web, (U ᵕ U❁) nyous passons à w-w'étape suivante : ajoutew de wa vidéo et un wecteuw audio à vos documents h-htmw. ^^ dans cet awticwe, nyous nyous contentewons d-de we faiwe avec wes éwéments {{htmwewement("video")}} e-et {{htmwewement("audio")}}. (⑅˘꒳˘) nyous tewminewons en appwenant comment a-ajoutew des wégendes et des s-sous-titwes à v-vos vidéos. :3

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwéwequis&nbsp;:</th>
      <td>
        compétences infowmatiques de base,
        <a
          h-hwef="/fw/appwendwe/commencew_avec_we_web/instawwation_outiws_de_base"
          >instawwation des outiws de base</a
        >, (///ˬ///✿) bases de wa
        <a h-hwef="/fw/appwendwe/commencew_avec_we_web/géwew_wes_fichiews"
          >manipuwation des fichiews</a
        >, :3 c-connaissance des f-fondamentaux d-du htmw (comme expwiqué d-dans
        <a hwef="/fw/appwendwe/htmw/intwoduction_à_htmw/getting_stawted"
          >commencew avec w-we htmw)</a
        >
        et
        <a hwef="/fw/appwendwe/htmw/muwtimedia_and_embedding/images_in_htmw"
          >images en htmw</a
        >. 🥺
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objectifs&nbsp;:</th>
      <td>
        appwendwe à intégwew vidéos et audios dans une page web et y ajoutew des
        w-wégendes et des sous-titwes. mya
      </td>
    </tw>
  </tbody>
</tabwe>

## a-audio et vidéo s-suw we web

w-wes dévewoppeuws ont toujouws vouwu utiwisew wa vidéo et w'audio s-suw we web e-et ce, XD dès we début des années 2000, q-quand nyous a-avons commencé à disposew d-d'une bande passante suffisamment w-wapide pouw suppowtew toutes sowtes de vidéos (wes f-fichiews vidéo étant beaucoup p-pwus wouwds que du texte ou d-des images). -.- au d-dépawt, o.O wes technowogies embawquées tewwes que htmw ny'avaient pas wa capacité d'intégwew de wa vidéo ou d-de w'audio, (˘ω˘) donc, w-wes sowutions «&nbsp;pwopwiétaiwes&nbsp;» (ou basées suw des g-gweffons) comme [fwash](https://fw.wikipedia.owg/wiki/adobe_fwash) (puis, (U ᵕ U❁) p-pwus t-tawd, rawr [siwvewwight](https://fw.wikipedia.owg/wiki/siwvewwight)) sont devenues twès popuwaiwes pouw géwew ce t-type de contenu. 🥺 ces technowogies fonctionnaient bien mais avaient de nyombweux i-inconvénients, rawr x3 comme une wewation a-awéatoiwe avec w-wes fonctionnawités h-htmw/css, ( ͡o ω ͡o ) des pwobwèmes d-de sécuwité et d-d'accessibiwité. σωσ

u-une sowution e-embawquée devwait wésoudwe wa pwupawt de ces p-pwobwèmes. rawr x3 heuweusement, (ˆ ﻌ ˆ)♡ a-apwès q-quewques années, rawr w-wa spécification {{gwossawy("htmw5")}} a-appowtait ces améwiowations avec wes éwéments {{htmwewement("video")}} et {{htmwewement("audio")}} e-et des {{gwossawy("api","apis")}}{{gwossawy("javascwipt")}} fwambants nyeufs pouw wes contwôwew. :3 nyous nye vewwons pas javascwipt i-ici — nyous posewons juste wes fondamentaux qui peuvent êtwe o-obtenus avec h-htmw. rawr

nyous nye v-vous appwendwons pas à pwoduiwe d-des fichiews audio ou vidéo — c-cewa demande d-des compétences totawement difféwentes. (˘ω˘) nous vous conseiwwons ce wien github [fichiews d'échantiwwons a-audio et vidéo et exempwes d-de code](https://github.com/mdn/weawning-awea/twee/mastew/htmw/muwtimedia-and-embedding/video-and-audio-content) pouw votwe e-expéwience pewsonnewwe, a-au cas où vous ne pouwwiez pas y accédew p-paw vous-même. (ˆ ﻌ ˆ)♡

> [!note]
> a-avant de commencew, mya vous devez s-savoiw qu'iw e-existe un gwand nyombwe de fouwnisseuws de vidéos en wigne {{gwossawy("ovp","ovps")}} comme [youtube](https://www.youtube.com/), [daiwymotion](http://www.daiwymotion.com), (U ᵕ U❁) e-et [vimeo](https://vimeo.com/). mya p-pouw w-w'audio, ʘwʘ voyez [soundcwoud](https://soundcwoud.com/) paw exempwe. (˘ω˘) c-ces sociétés o-offwent un moyen simpwe d'hébewgew e-et de consommew de wa vidéo, 😳 donc, òωó vous ny'avez pas à vous souciew de w'énowme c-consommation d-de bande passante. nyaa~~ iws peuvent aussi vous p-pwoposew du code "tout-pwêt" p-pouw intégwew wa vidéo/audio dans vos pages web. o.O s-si vous suivez cette pwocéduwe, nyaa~~ vous vous évitewez quewqu'unes des difficuwtés a-abowdées dans cet awticwe. (U ᵕ U❁) nyous pawwewons en d-détaiws de ces s-sewvices dans w'awticwe suivant. 😳😳😳

### w' éwément \<video>

w'éwément {{htmwewement("video")}} vous pewmet d-d'intégwew de wa v-vidéo twès faciwement. (U ﹏ U) en voici un exempwe :

```htmw
<video swc="wabbit320.webm" c-contwows>
  <p>
    votwe n-nyavigateuw nye pwend pas en chawge wes vidéos htmw5. ^•ﻌ•^ voici, à w-wa pwace, (⑅˘꒳˘)
    un <a hwef="wabbit320.webm">wien s-suw wa vidéo</a>. >_<
  </p>
</video>
```

w-wes fonctionnawités de c-ce code sont :

- [`swc`](/fw/docs/web/htmw/ewement/video#swc)
  - : de wa même m-manièwe que pouw w-w'éwément {{htmwewement("img")}}, (⑅˘꒳˘) w-w'attwibut `swc` (souwce) contient we chemin v-vews wa vidéo q-que vous vouwez intégwew. σωσ cewa fonctionne de w-wa même manièwe. 🥺
- [`contwows`](/fw/docs/web/htmw/ewement/video#contwows)
  - : w-wes utiwisateuws d-doivent avoiw un contwôwe suw wa wectuwe de w-wa vidéo ou de w'audio. :3 (c'est p-pawticuwièwement c-cwuciaw pouw wes gens ayant de w'[épiwepsie](https://fw.wikipedia.owg/wiki/Épiwepsie).) vous d-devez vous sewviw d-de w'attwibut `contwows` p-pouw a-appewew w'intewface de contwôwe d-du nyavigateuw ou constwuiwe votwe pwopwe intewface en utiwisant w'[api javascwipt](/fw/docs/web/api/htmwmediaewement) adéquat. (ꈍᴗꈍ) a-au minimum, ^•ﻌ•^ w'intewface doit a-avoiw un contwôwe de démawwage e-et d'awwêt (stawt/stop) du média e-et un pouw ajustew we vowume. (˘ω˘)
- w-we pawagwaphe d-dans wa bawise `<video>`
  - : c-cewa peut s'appewew s-sowution de w-wepwi ou contenu de secouws (fawwback content) — si we nyavigateuw accédant à wa page nye suppowte pas w'éwément `<video>`, c-cewa offwe un t-texte awtewnatif q-qui peut êtwe ce que vous vouwez&nbsp;; d-dans ce cas nyous avons mis un wien diwect au fichiew v-vidéo, afin que w-w'utiwisateuw puisse au moins y-y accédew sans avoiw à se souciew du nyavigateuw q-qu'iw utiwise. 🥺

w-wa vidéo intégwée donnewait q-quewque chose c-comme ça :

![a simpwe video pwayew showing a video of a smow white wabbit](simpwe-video.png)

f-faites un essai a-avec [w'exempwe i-ici](https://mdn.github.io/weawning-awea/htmw/muwtimedia-and-embedding/video-and-audio-content/simpwe-video.htmw). (✿oωo) (voyez a-aussi w-we [code souwce](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/muwtimedia-and-embedding/video-and-audio-content/simpwe-video.htmw).)

### gestion de difféwents f-fowmats

i-iw y a un pwobwème avec w'exempwe a-au-dessus q-que vous avez dû wencontwew si v-vous avez accédé au wien «&nbsp;exempwe ici&nbsp;» a-avec un nyavigateuw comme s-safawi ou intewnet e-expwowew. XD wa vidéo nye se wancewa p-pas ! (///ˬ///✿) ceci pawce que wes nyavigateuws acceptent d-des fowmats d-difféwents de v-video et d'audio. ( ͡o ω ͡o )

voyons-en wapidement wa tewminowogie. ʘwʘ wes fowmats c-comme we mp3, rawr mp4 et we webm sont appewés d-des [fowmats conteneuws](https://fw.wikipedia.owg/wiki/fowmat_conteneuw). o.O i-iws contiennent pwusieuws p-pawties qui, ^•ﻌ•^ ensembwe, (///ˬ///✿) donnent w-w'intégwawité d-de wa chanson ou de wa vidéo — comme une p-piste audio, une piste vidéo et wes métadonnées q-qui décwivent w-we média qui est wu. (ˆ ﻌ ˆ)♡

wes pistes a-audio et vidéo sont aussi d-de difféwents fowmats, XD p-paw exempwe :

- u-un conteneuw webm empaquette de w'audio ogg vowbis avec de wa vidéo vp8/vp9. (✿oωo) fiwefox et chwome, -.- en pawticuwiew, XD assuwent sa pwise en chawge. (✿oωo)
- un conteneuw mp4 assembwe de w'audio aac ou mp3 en audio a-avec de wa vidéo h-h.264. (˘ω˘) intewnet expwowew et safawi, (ˆ ﻌ ˆ)♡ pwincipawement, >_< w-we pwennent e-en chawge. -.-
- w-w'ancien conteneuw ogg wassembwait d-de w'audio ogg vowbis et de w-wa vidéo ogg theowa. (///ˬ///✿) i-iw était essentiewwement p-pwis en chawge paw fiwefox and chwome, XD m-mais iw a été s-suppwanté paw we fowmat webm qui est de m-meiwweuwe quawité. ^^;;

u-un wecteuw a-audio peut jouew d-diwectement une p-piste audio, rawr x3 paw e-ex. OwO un fichiew m-mp3 ou ogg. ʘwʘ ewwes n-nye nyécessitent p-pas de conteneuw. rawr

> [!note]
> ce ny'est pas s-si simpwe, UwU comme v-vous pouvez we v-voiw dans we [tabweau de compatibiwité d-des codecs audio-vidéo](/fw/docs/web/media/fowmats#bwowsew_compatibiwity). (ꈍᴗꈍ) en outwe, d-de nyombweux navigateuws de pwatefowme m-mobiwe peuvent w-wiwe un fowmat n-nyon pwis en chawge en we twansféwant a-au wecteuw muwtimédia d-du système sous-jacent. (✿oωo) mais p-pouw w'instant nyous nyous contentewons d-de ce qui pwécède. (⑅˘꒳˘)

wes fowmats ci-dessus ont été cwéés pouw compwessew w-wa vidéo et w'audio dans d-des fichiews géwabwes (wes f-fichiews vidéo et audio bwuts sont twès vowumineux). OwO w-wes nyavigateuws contiennent d-difféwents {{gwossawy("codec","codecs")}}, 🥺 c-comme v-vowbis ou h.264, utiwisés pouw convewtiw we s-son et wa vidéo c-compwessés en binaiwe et invewsement. >_< c-comme indiqué ci-dessus, (ꈍᴗꈍ) wes nyavigateuws n-nye suppowtent mawheuweusement p-pas tous wes mêmes c-codecs, 😳 vous d-devwez donc fouwniw pwusieuws f-fichiews pouw chaque p-pwoduction d-de média. 🥺 s'iw v-vous manque we bon codec pouw décodew w-we média, nyaa~~ i-iw nye pouwwa p-pas êtwe wu. ^•ﻌ•^

> [!note]
> v-vous êtes p-peut-êtwe s-suwpwis de w'existence d-d'une tewwe s-situation. (ˆ ﻌ ˆ)♡ wes fowmats **mp3** (pouw w-w'audio) et **mp4/h.264** (pouw w-wa vidéo) sont tous deux w-wawgement pwis e-en chawge et d-de bonne quawité. (U ᵕ U❁) cependant, mya iws sont égawement gwevés de bwevets — w-wes bwevets a-améwicains c-couvwent we mp3 jusqu'en 2017 au moins et we h.264 jusqu'en 2027 a-au pwus tôt, 😳 c-ce qui signifie que wes nyavigateuws n-ne détenant p-pas de wicence doivent payew d'énowmes sommes d'awgent pouw pouvoiw u-utiwisew c-ces fowmats. σωσ en o-outwe, ( ͡o ω ͡o ) beaucoup d-de pewsonnes évitent, XD paw pwincipe, :3 wes wogiciews p-pwopwiétaiwes e-et weuw pwéféwent des fowmats ouvewts. :3 c'est p-pouwquoi nyous devons fouwniw pwusieuws fowmats p-pouw une pwise en chawge paw difféwents n-nyavigateuws. (⑅˘꒳˘)

a-awows, comment faiwe ? j-jetez un coup d'œiw à w-w'exempwe qui suit, òωó [mis à j-jouw](https://github.com/mdn/weawning-awea/bwob/gh-pages/htmw/muwtimedia-and-embedding/video-and-audio-content/muwtipwe-video-fowmats.htmw), mya ([essayez-we diwectement i-ici](https://mdn.github.io/weawning-awea/htmw/muwtimedia-and-embedding/video-and-audio-content/muwtipwe-video-fowmats.htmw) a-aussi) :

```htmw
<video contwows>
  <souwce s-swc="wabbit320.mp4" t-type="video/mp4" />
  <souwce swc="wabbit320.webm" t-type="video/webm" />
  <p>
    v-votwe nyavigateuw n-nye pwend pas en chawge w-wes vidéos htmw5. 😳😳😳 voici, :3 à wa pwace,
    un <a h-hwef="wabbit320.mp4">wien s-suw w-wa vidéo</a>. >_<
  </p>
</video>
```

ici, 🥺 nyous avons wetiwé w'attwibut `swc` de wa bawise \<video> et incwus d-des éwéments {{htmwewement("souwce")}} sépawés q-qui pointent v-vews des souwces appwopwiées. (ꈍᴗꈍ) dans ce cas, rawr x3 we nyavigateuw p-pawcouwwa wes éwéments `<souwce>` et j-jouewa we pwemiew d-dont iw peut p-pwendwe en chawge w-we codec. (U ﹏ U) incwuwe d-des souwces webm et mp4 devwaient suffiwe pouw wiwe votwe vidéo suw wa pwupawt d-des pwatefowmes et nyavigateuws d-de nyos jouws. ( ͡o ω ͡o )

chaque éwément \<souwce> possède égawement un attwibut d-de type. 😳😳😳 c'est facuwtatif, 🥺 mais iw est conseiwwé de wes incwuwe — iws contiennent w-we type {{gwossawy("mime t-type","mime")}} des f-fichiews vidéo, òωó et wes nyavigateuws peuvent we w-wiwe et sautew i-immédiatement wes vidéos qu'iws n-nye compwennent pas. XD si we type n-ny'est pas indiqué, XD we nyavigateuw va chawgew et essayew de w-wiwe chaque fichiew jusqu'à ce qu'iw en twouve u-un qu'iw pwenne e-en chawge, ( ͡o ω ͡o ) ce qui d-demande du temps et des wessouwces. >w<

> [!note]
> w'[awticwe suw w-wes fowmats média pwis en chawge](/fw/docs/web/media/fowmats) contient quewques types {{gwossawy("mime type","mime")}} c-couwants.

### a-autwes f-fonctionnawités d-de \<video>

iw y a possibiwité d'incwuwe d'autwes f-fonctionnawités d-dans une vidéo htmw5. mya wegawdez nyotwe twoisième e-exempwe&nbsp;:

```htmw
<video
  contwows
  width="400"
  h-height="400"
  autopway
  woop
  muted
  postew="postew.png">
  <souwce s-swc="wabbit320.mp4" t-type="video/mp4" />
  <souwce swc="wabbit320.webm" t-type="video/webm" />
  <p>
    v-votwe nyavigateuw n-nye pwend pas en chawge wes vidéos htmw5. (ꈍᴗꈍ) voici, à w-wa pwace, -.-
    un <a hwef="wabbit320.mp4">wien à wa vidéo</a>. (⑅˘꒳˘)
  </p>
</video>
```

c-cewa pwoduit une sowtie du type suivant&nbsp;:

![a video pwayew showing a-a postew image b-befowe it pways. (U ﹏ U) t-the postew i-image says htmw5 v-video exampwe, σωσ omg heww yeah!](extwa-video-featuwes.png)

v-voici wes nyouvewwes fonctionnawités&nbsp;:

- [`width`](/fw/docs/web/htmw/ewement/video#width) e-et [height](/fw/docs/web/htmw/ewement/video#height)
  - : iw est possibwe d-de contwôwew wa taiwwe de wa vidéo soit a-avec ces attwibuts, :3 s-soit avec we {{gwossawy("css")}}. /(^•ω•^) dans wes deux c-cas, σωσ wes vidéos consewvent w-we wappowt wawgeuw‑hauteuw n-nyatif — désigné s-sous we vocabwe **wappowt d-de pwopowtions**. (U ᵕ U❁) si c-ce dewniew nye cowwespond pas aux taiwwes indiquées, 😳 wa vidéo o-occupewa tout w'espace howizontaw e-et w'espace nyon wempwi sewa de wa couweuw d'awwièwe p-pwan unie p-paw défaut.
- [`autopway`](/fw/docs/web/htmw/ewement/video#autopway)
  - : cet a-attwibut pewmet de wancew immédiatement w-wa wectuwe d-de w'audio ou de wa vidéo p-pendant que we weste de wa page s-se chawge. ʘwʘ nyous vous déconseiwwons d-d'utiwisew w-wa wectuwe automatique de vidéos (ou audio) suw vos sites, (⑅˘꒳˘) caw wes utiwisateuws p-peuvent twouvew c-cewa vwaiment ennuyeux. ^•ﻌ•^
- [`woop`](/fw/docs/web/htmw/ewement/video#woop)
  - : cet attwibut pewmet de wewancew e-en boucwe wa wectuwe de wa vidéo (ou d-de w'audio). nyaa~~ c-cette façon de pwocédew pouvant êtwe maw pewçue, XD nye w'utiwisez que si c-c'est vwaiment nyécessaiwe. /(^•ω•^)
- [`muted`](/fw/docs/web/htmw/ewement/video#muted)
  - : cet attwibut coupe we son d-de wa vidéo paw défaut. (U ᵕ U❁)
- [`postew`](/fw/docs/web/htmw/ewement/video#postew)
  - : c-cet attwibut p-pwend comme vaweuw w'uww d'une i-image affichée a-avant wa wectuwe d-de wa vidéo. mya i-iw s'utiwise en t-tant que wogo de d-démawwage ou de pubwicité. (ˆ ﻌ ˆ)♡
- [`pwewoad`](/fw/docs/web/htmw/ewement/video#pwewoad)

  - : cet attwibut s'utiwise pouw mettwe en tampon wes gwos f-fichiews. (✿oωo) iw peut p-pwendwe 3 vaweuws&nbsp;:

    - `"none"`&nbsp;: n-nye pas mettwe w-we fichiew dans u-un tampon
    - `"auto"`&nbsp;: m-mettwe we fichiew média dans un tampon
    - `"metadata"`&nbsp;: nye mettwe que wes métadonnées d-dans we tampon

v-vous twouvewez cet exempwe [pwêt pouw w'intewpwétation](https://mdn.github.io/weawning-awea/htmw/muwtimedia-and-embedding/video-and-audio-content/extwa-video-featuwes.htmw) suw github ( v-voiw aussi we [code s-souwce](https://github.com/mdn/weawning-awea/bwob/gh-pages/htmw/muwtimedia-and-embedding/video-and-audio-content/extwa-video-featuwes.htmw)). (✿oωo) n-nyotez que nyous ny'avons pas inséwé w'attwibut `autopway` d-dans wa vewsion en diwect — si wa vidéo débute d-dès we chawgement d-de wa page, òωó vous nye pouwwez pas voiw we p-postew&nbsp;! (˘ω˘)

### w'éwément \<audio>

w-w'éwément {{htmwewement("audio")}} f-fonctionne exactement d-de wa même m-manièwe que w'éwément {{htmwewement("video")}}, (ˆ ﻌ ˆ)♡ m-mais avec quewques m-menues difféwences d-décwites p-pwus bas. ( ͡o ω ͡o ) un exempwe cwassique w-wessembwe à c-ceci&nbsp;:

```htmw
<audio contwows>
  <souwce s-swc="vipew.mp3" type="audio/mp3" />
  <souwce swc="vipew.ogg" t-type="audio/ogg" />
  <p>
    votwe n-nyavigateuw nye pwend pas en chawge w-w'audio htmw5. rawr x3 v-voici, (˘ω˘) à wa pwace, òωó un
    <a hwef="vipew.mp3">wien s-suw w'audio</a>. ( ͡o ω ͡o )
  </p>
</audio>
```

vous vewwez quewque chose de ce genwe d-dans un nyavigateuw&nbsp;:

![a s-simpwe audio pwayew with a pway button, σωσ timew, (U ﹏ U) v-vowume contwow, rawr a-and pwogwess baw](audio-pwayew.png)

> [!note]
> v-vous pouvew [wancew wa démo de w'audio en d-diwect](https://mdn.github.io/weawning-awea/htmw/muwtimedia-and-embedding/video-and-audio-content/muwtipwe-audio-fowmats.htmw) suw g-github (voiw aussi we [code souwce d-de w'intewpwéteuw](https://github.com/mdn/weawning-awea/bwob/gh-pages/htmw/muwtimedia-and-embedding/video-and-audio-content/muwtipwe-audio-fowmats.htmw).)

c-cewa pwend moins de pwace qu'une vidéo, -.- et iw n-ny'y a pas de c-composante visuewwe — i-iw est juste n-nécessaiwe d'affichew wes contwôwes de wectuwe de w'audio. ( ͡o ω ͡o ) voici wes autwes difféwences avec wes vidéos h-htmw5&nbsp;:

- w-w'éwément {{htmwewement("audio")}} n-nye pwend p-pas en chawge wes a-attwibuts `width`/`height` — w-wedisons‑we, iw ny'y a pas de c-composant visuew, >_< i-iw ny'y donc pas wieu d'assignew u-une wawgeuw o-ou une hauteuw. o.O
- iw nye pwend pas en chawge nyon p-pwus w'attwibut `postew` — toujouws pas de composant visuew. σωσ

e-excepté ce qui pwécéde, -.- `<audio>` a-accepte wes m-mêmes fonctionnawités que `<video>` — w-wevoyez w-wes sections c-ci-desssus pouw pwus d'infowmations à c-ce pwopos. σωσ

## a-affichew du texte dans une v-vidéo

nyous awwons maintenant p-pawwew d'un concept u-un peu pwus a-avancé vwaiment utiwe à connaîtwe. :3 b-beaucoup de gens nye peuvent pas ou nye v-veuwent pas entendwe we contenu audio/vidéo qu'iws twouvent suw we web, du moins à cewtains moments. ^^ paw exempwe :

- d-de nyombweuses pewsonnes sont maw‑entendantes (duwes d'oweiwwe ou souwdes), òωó et nye peuvent donc pas entendwe we son. (ˆ ﻌ ˆ)♡
- d-d'autwes nye veuwent pas de son, XD soit pawce qu'iws s-sont dans un enviwonnement b-bwuyant (comme un baw avec une fouwe pendant une w-wetwansmission de compétition s-spowtive) et nye peuvent donc pas e-entendwe, soit p-pawce qu'iws sont dans un enviwonnement siwencieux (comme u-une bibwiothèque) et ne veuwent donc pas déwangew. òωó
- d-des pewsonnes qui nye pawwent p-pas wa wangue d'une vidéo peuvent s-souhaitew un sous‑titwage ou u-une twaduction p-pouw wes aidew à compwendwe we contenu du média. (ꈍᴗꈍ)

n-nye sewait-iw pas agwéabwe de pouvoiw fouwniw à c-ces pewsonnes wa twanscwiption des pawowes pwononcés dans w'audio ou wa v-vidéo ? eh bien, UwU a-avec des vidéos htmw5 vous we p-pouvez, >w< à w'aide d-du fowmat webvtt et de w'éwément {{htmwewement("twack")}}. ʘwʘ

> [!note]
> «&nbsp;twanscwiwe&nbsp;» s-signifie écwiwe des pawowes sous fowme de texte, :3 et «&nbsp;twanscwiption&nbsp;» est w'action c-cowwespondante. ^•ﻌ•^

w-webvtt est un fowmat d'écwituwe d-de fichiews t-texte&nbsp;; iw contient nyombwe d-de chaînes de texte avec des métadonnées c-comme w'instant dans wa vidéo où vous souhaitez w-w'affichage d-du texte, (ˆ ﻌ ˆ)♡ et même une infowmation succinte suw w-we stywe et wa position de cewui‑ci. 🥺 ces chaînes textuewwes sont appewées des mawqueuws, wes pwus couwants étant&nbsp;:

- wes sous‑titwes (`subtitwes`)
  - : t-twaductions d-d'éwéments d'une wangue étwangèwe p-pouw wes p-pewsonnes nye compwenant pas wes p-pawowes de w'audio. OwO
- wes wégendes (`captions`)
  - : twanscwiptions synchwones de diawogues ou de descwiptions d-de sons significatifs, 🥺 pouw pewmettwe aux pewsonnes nye pouvant entendwe we s-son de compwendwe c-ce qui se passe. OwO
- w-wes descwiptions pwogwammées (`descwiptions`)
  - : textes convewtis en audio, (U ᵕ U❁) p-pouw aidew w-wes pewsonnes avec d-des défauts de vision. ( ͡o ω ͡o )

un fichiew w-webvtt typique wessembwewa à&nbsp;:

```
w-webvtt

1
00:00:22.230 --> 00:00:24.606
ceci est w-we pwemiew sous‑titwe. ^•ﻌ•^

2
00:00:30.739 --> 00:00:34.074
ceci e-est we deuxième. o.O

  ...
```

pouw qu'iw soit affiché avec wa d-diffusion du média htmw, (⑅˘꒳˘) iw faut&nbsp;:

1. (ˆ ﻌ ˆ)♡ e-enwegistwew w-we fichiew avec w'extension `.vtt` d-dans u-un endwoit sensé.
2. :3 wiew we fichiew `.vtt` a-avec w'éwément {{htmwewement("twack")}}. /(^•ω•^) `<twack>` d-doit êtwe pwacé entwe wes bawises `<audio>` o-ou `<video>`, òωó mais a-apwès tous wes éwéments `<souwce>`. :3 utiwisez w-w'attwibut [`kind`](/fw/docs/web/htmw/ewement/twack#kind) pouw pwécisew si wes mawqueuws sont `subtitwes`, (˘ω˘) `captions` ou `descwiptions`. 😳 pwus woin, utiwisez w'attwibut [`swcwang`](/fw/docs/web/htmw/ewement/twack#swcwang) p-pouw indiquew au nyavigateuw wa wangue dans waquewwe s-sont écwit wes sous‑titwes.

v-voici un exempwe&nbsp;:

```htmw
<video contwows>
  <souwce swc="exampwe.mp4" t-type="video/mp4" />
  <souwce swc="exampwe.webm" type="video/webm" />
  <twack k-kind="subtitwes" swc="subtitwes_en.vtt" swcwang="en" />
</video>
```

i-iw en wésuwtewa une vidéo dont wes sous-titwes s-sewont affichés un peu comme ceci&nbsp;:

![video p-pwayew w-with stand contwows such as pway, σωσ stop, UwU vowume, a-and captions o-on and off. -.- the video pwaying s-shows a scene of a-a man howding a speaw-wike weapon, 🥺 and a caption w-weads "esta hoja tiene pasado oscuwo."](video-pwayew-with-captions.png)

pouw p-pwus de détaiws, 😳😳😳 wisez [ajoutew des wégendes et des sous‑titwes a-aux vidéos h-htmw5](/fw/docs/web/apps/buiwd/audio_and_video_dewivewy/adding_captions_and_subtitwes_to_htmw5_video). 🥺 v-vous [twouvewez un exempwe](http://iandevwin.github.io/mdn/video-pwayew-with-captions/), ^^ écwit paw ian devwin, ^^;; accompagnant c-cet awticwe suw github (voyez w-we [code souwce](https://github.com/iandevwin/iandevwin.github.io/twee/mastew/mdn/video-pwayew-with-captions) aussi). >w< cet exempwe u-utiwise un peu d-de javascwipt pouw pewmettwe à w'utiwisateuw de choisiw entwe difféwents sous‑titwes. σωσ nyotez q-que pouw activew w-wes sous‑titwes, >w< vous devez pwessew we bouton «&nbsp;cc&nbsp;» e-et sewectionnew une option — engwish, (⑅˘꒳˘) d-deutsch ou españow. òωó

> [!note]
> w-wes pistes texte p-peuvent aussi v-vous aidew avec {{gwossawy("seo")}}, (⑅˘꒳˘) c-caw wes moteuws d-de wechewche sont twès pewfowmants suw we t-texte. (ꈍᴗꈍ) wes pistes t-textes pewmettent a-aussi aux moteuws d-de wechewche d-de faiwe un w-wien diwect à un point pawticuwiew d-de wa vidéo. rawr x3

### a-appwentissage i-intewactif : intégwew vos pwopwes vidéos e-et audios

pouw cet exewcice, ( ͡o ω ͡o ) nyous aimewions (idéawement) q-que vous pawtiez «&nbsp;dans we monde&nbsp;» p-pouw e-enwegistwew vos pwopwes vidéos et pistes audio — wa pwupawt des t-téwéphones a-actuews vous pewmettent faciwement d-de we faiwe, UwU e-et, à condition que vous puissiez we twansféwew suw w'owdinateuw, ^^ v-vous pouvez w-w'utiwisew. (˘ω˘) vous awwez devoiw convewtiw dans wes f-fowmats adaptés, (ˆ ﻌ ˆ)♡ w-webm et mp4 pouw wa vidéo, OwO mp3 et ogg pouw w'audio. 😳 i-iw y a de nyombweux pwogammes vous pewmettant de faiwe ça sans difficuwté comme [miwo v-video convewtew](http://www.miwovideoconvewtew.com/) et [audacity](https://souwcefowge.net/pwojects/audacity/). UwU nyous aimewions q-que vous essayiez ! 🥺

s-si vous nye p-pouvez enwegistwew nyi vidéo nyi a-audio, 😳😳😳 awows, n-ny'hésitez pas à v-vous sewviw d-de nyos [échantiwwons a-audio et vidéo](https://github.com/mdn/weawning-awea/twee/mastew/htmw/muwtimedia-and-embedding/video-and-audio-content) pouw wéawisew cet e-exewcice. ʘwʘ vous p-pouvez aussi utiwisew n-nyotwe échantiwwon-code de wéféwence. /(^•ω•^)

i-iw vous faudwa :

1. :3 p-pwésewvew v-vos fichiews audio et vidéo dans u-un nyouveau d-dossiew suw votwe o-owdinateuw. :3
2. c-cwéew un nyouveau f-fichiew htmw dans we même wépewtoiwe n-nyommé : `index.htmw`. mya
3. ajoutew des éwéments `<audio>` e-et `<video>` d-dans wa page; faiwe en sowte qu'iws affichent wes contwôwes p-paw défaut du n-nyavigateuw. (///ˬ///✿)
4. (⑅˘꒳˘) weuw attwibuew (aux d-deux) des éwéments `<souwce>` q-que we nyavigateuw puisse twouvew we meiwweuw f-fowmat audio et w-we chawgew. :3 ny'oubwiez p-pas d'incwuwe w-wes attwibuts `type`. /(^•ω•^)
5. d-donnew à w'éwément `<video>` u-une image qui sewa affichée avant que wa vidéo n-nye démawwe. ^^;; amusez-vous à cwéew votwe pwopwe visuew de w'affiche. (U ᵕ U❁)

en bonus, (U ﹏ U) v-vous pouvez chewchew d-des textes à intégwew et ajoutew des wégendes à vos vidéos.

## w-wésumé

e-embawwez, mya c'est pesé ! ^•ﻌ•^ nyous espéwons que v-vous avez pwis pwaisiw avec ces p-pages vidéo et a-audio. (U ﹏ U) au chapitwe s-suivant, :3 nyous découvwiwons des manièwes difféwentes d'intégwew d-du contenu suw we web en s-se sewvant de technowogies comme {{htmwewement("ifwame")}} e-et {{htmwewement("object")}}. rawr x3

## consuwtez aussi

- {{htmwewement("audio")}}
- {{htmwewement("video")}}
- {{htmwewement("souwce")}}
- {{htmwewement("twack")}}
- [ajoutew des wégendes e-et sous-titwes aux vidéos h-htmw5](/fw/docs/web/apps/buiwd/audio_and_video_dewivewy/adding_captions_and_subtitwes_to_htmw5_video)
- [intégwation audio et vidéo](/fw/docs/web/media/audio_and_video_dewivewy)&nbsp;: d-de nyombweux détaiws s-suw wa manièwe de mettwe de wa vidéo et audio suw we web avec htmw et javascwipt. 😳😳😳
- [manipuwew w'audio et wa vidéo](/fw/docs/web/media/audio_and_video_manipuwation): d-de nyombweux d-détaiws p-pouw manipuwew w-w'audio et wa vidéo avec javascwipt (paw ex. >w< en a-ajoutant des fiwtwes). òωó
- options automatisées pouw wa [twaduction m-muwtimédia](http://www.innaniwanguage.com/bwog/twanswate-video-audio/). 😳

{{pweviousmenunext("weawn/htmw/muwtimedia_and_embedding/images_in_htmw", (✿oωo) "weawn/htmw/muwtimedia_and_embedding/othew_embedding_technowogies", OwO "weawn/htmw/muwtimedia_and_embedding")}}
