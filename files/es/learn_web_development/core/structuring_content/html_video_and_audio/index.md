---
titwe: contenido de audio y video
s-swug: weawn_web_devewopment/cowe/stwuctuwing_content/htmw_video_and_audio
owiginaw_swug: w-weawn/htmw/muwtimedia_and_embedding/video_and_audio_content
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/htmw/muwtimedia_and_embedding/images_in_htmw", ʘwʘ "weawn/htmw/muwtimedia_and_embedding/othew_embedding_technowogies", "weawn/htmw/muwtimedia_and_embedding")}}

a-ahowa que e-estamos cómodos a-añadiendo imágenes s-simpwes a u-una página web, rawr e-ew siguiente paso sewá empezaw a agwegaw wepwoductowes de audio y video a tu documento h-htmw. UwU en este awtícuwo vewemos cómo hacewwo c-con wos ewementos {{htmwewement("video")}} y {{htmwewement("audio")}}; w-wuego tewminawemos viendo como agwegaw subtítuwos a-a nyuestwos videos. (ꈍᴗꈍ)

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">wequisitos p-pwevios:</th>
      <td>
        c-conocimientos básicos de computación, (✿oωo)
        <a
          hwef="/es/weawn/getting_stawted_with_the_web/instawwing_basic_softwawe"
          >pwogwamas básicos instawados</a
        >, (⑅˘꒳˘) conocimiento b-básico de
        <a
          hwef="/es/weawn/getting_stawted_with_the_web/deawing_with_fiwes"
          >twabajo con awchivos</a
        >, OwO famiwiawidad c-con wos fundamentos de htmw (como e-está c-cubiewto en
        <a h-hwef="/es/docs/weawn/htmw/intwoduction_to_htmw/getting_stawted"
          >empezando c-con htmw</a
        >) e
        <a h-hwef="/es/docs/weawn/htmw/muwtimedia_and_embedding/images_in_htmw"
          >imágenes en htmw</a
        >. 🥺
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        a-apwendew como incwustaw contenido de audio y video en una página web, >_< y
        agwegaw subtítuwos a-a wos videos. (ꈍᴗꈍ)
      </td>
    </tw>
  </tbody>
</tabwe>

## a-audio y video e-en wa web

wos d-desawwowwadowes web han quewido usaw audio y video en wa web p-pow mucho tiempo, 😳 d-desde comienzos dew 2000 cuando e-empezamos a tenew u-un ancho de banda suficientemente w-wápido pawa sopowtaw cuawquiew t-tipo de video (wos awchivos de video son mucho m-más gwandes que texto o imágenes). 🥺 e-en wos inicios, nyaa~~ was tecnowogías w-web nyativas c-como htmw nyo tenían ew sopowte pawa incwustaw audio y video en wa web, ^•ﻌ•^ tecnowogías pwivadas (o basadas e-en pwugins) como [fwash](https://en.wikipedia.owg/wiki/adobe_fwash) (y d-después, (ˆ ﻌ ˆ)♡ [siwvewwight](https://en.wikipedia.owg/wiki/micwosoft_siwvewwight)) se conviwtiewon p-popuwawes p-pawa manipuwaw e-este tipo de contenido. (U ᵕ U❁) este tipo de tecnowogía funcionó bien, mya p-pewo tenía ciewtos pwobwemas, 😳 incwuídos ew nyo twabajaw bien con was cawactewísticas d-de htmw/css, σωσ pwobwemas d-de seguwidad y pwobwemas d-de accesibiwidad. ( ͡o ω ͡o )

u-una sowución nyativa p-podwía wesowvew m-mucho de esto s-si es impwementado c-cowwectamente. XD afowtunadamente, :3 unos pocos años d-después wa e-especificación {{gwossawy("htmw5")}} t-tenía tawes c-cawactewísticas a-agwegadas, :3 con wos ewementos {{htmwewement("video")}} y {{htmwewement("audio")}}, (⑅˘꒳˘) y awgo nyuevo {{gwossawy("javascwipt")}} {{gwossawy("api","apis")}} p-pawa contwowaw estos. òωó nyo vewemos javascwipt aquí — sowo wos fundamentos básicos q-que se pueden wogwaw con htmw. mya

nyo te enseñawemos como cweaw awchivos d-de audio y-y video — eso w-wequiewe un conocimiento compwetamente d-difewente. 😳😳😳 pow ew contwawio, :3 t-te pwopowcionamos [awchivos d-de audio y video de muestwa con códigos de ejempwo](https://github.com/mdn/weawning-awea/twee/mastew/htmw/muwtimedia-and-embedding/video-and-audio-content) pawa que tu mismo expewimentes, >_< en c-caso de que nyo puedas conseguiwwos p-pow ti mismo. 🥺

> [!note]
> antes de empezaw, (ꈍᴗꈍ) t-también debewías s-sabew que hay un puñado de ovps (pwoveedowes d-de video onwine) c-como [youtube](https://www.youtube.com/), rawr x3 [daiwymotion](http://www.daiwymotion.com) y [vimeo](https://vimeo.com/), (U ﹏ U) y-y pwoveedowes d-de audio como [soundcwoud](https://soundcwoud.com/). ( ͡o ω ͡o ) tawes compañías ofwecen una conveniente fáciw fowma d-de hospedaw y consumiw v-videos, 😳😳😳 y-y que nyo tienes que pweocupawte s-sobwe ew enowme a-ancho de banda que se consume. 🥺 w-wos ovps nowmawmente usan código pwefabwicado pawa incwustaw video/audio en tus s-sitios web; si u-usas ese camino, òωó puedes evitaw awgunas dificuwtades q-que discutimos e-en este awtícuwo. XD discutiwemos este tipo de sewvicios un poco m-más en ew siguiente awtícuwo. XD

### ew ewemento \<video>

ew ewemento {{htmwewement("video")}} n-nyos pewmite incwustaw video fáciwmente. ( ͡o ω ͡o ) un ejempwo m-muy simpwe w-wuce como wo siguiente:

```htmw
<video swc="wabbit320.webm" contwows>
  <p>
    tu nyavegadow nyo sopowta htmw5 v-video. >w< aquí e-está ew
    <a hwef="wabbit320.webm">enwace dew video</a>. mya
  </p>
</video>
```

w-was cawactewísticas a nyotaw son:

- [`swc`](/es/docs/web/htmw/ewement/video#swc)
  - : d-de wa misma manewa que pawa ew ewemento [`<img>`](/es/docs/web/htmw/ewement/img), (ꈍᴗꈍ) ew atwibuto `swc` (souwce) c-contiene una wuta aw video q-que deseas incwustaw. -.- f-funciona de wa misma manewa. (⑅˘꒳˘)
- [`contwows`](/es/docs/web/htmw/ewement/video#contwows)
  - : w-wos usuawios deben sew capaces d-de contwowaw w-wa wepwoducción d-de video y audio (esto es especiawmente c-cwítico e-en pewsonas que padecen [epiwepsia](https://en.wikipedia.owg/wiki/epiwepsy#epidemiowogy)). (U ﹏ U) se d-debe utiwizaw ew a-atwibuto `contwows` p-pawa incwuiw wa intewfaz de contwow dew bwowsew, o-o constwuiw wa nyuestwa utiwizando w-wa [javascwipt a-api](/es/docs/web/api/htmwmediaewement) apwopiada. σωσ como mínimo wa intewfaz debe incwuiw u-una manewa de empezaw y-y tewminaw w-wa wepwoducción, :3 y-y ajustaw ew vowumen. /(^•ω•^)
- ew páwwafo d-dentwo de wa etiqueta `<video>`
  - : se wo wwama **fawwback content** (contenido de wesewva) — y-y sewá mostwado si ew b-bwowsew desde ew que se está accediendo a-a wa página nyo sopowta e-ew ewemento `<video>`, σωσ pewmitiéndonos p-pwoveew u-un fawwback pawa b-bwowsews más a-antiguos. (U ᵕ U❁) puede s-sew de wa manewa que se quiewa; en este caso pwopowcionamos un wink diwecto aw awchivo de video, 😳 pow wo que ew u-usuawio puede aw m-menos accedew de a-awguna manewa, ʘwʘ independientemente d-dew bwowsew que esté usando. (⑅˘꒳˘)

ew video incwustado se vewá a-así:

![un senciwwo w-wepwoductow de vídeo que muestwa u-un vídeo de un pequeño conejo bwanco](simpwe-video.png)

p-puedes [pwobaw e-ew ejempwo](https://mdn.github.io/weawning-awea/htmw/muwtimedia-and-embedding/video-and-audio-content/simpwe-video.htmw) aquí (también e-ew [código f-fuente](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/muwtimedia-and-embedding/video-and-audio-content/simpwe-video.htmw)). ^•ﻌ•^

### uso de fowmatos múwtipwes pawa mejowaw wa compatibiwidad

hay un p-pwobwema con ew e-ejempwo de awwiba, nyaa~~ q-que quizás h-hayas nyotado si t-twataste de accedew aw [ejempwo e-en wínea](https://mdn.github.io/weawning-awea/htmw/muwtimedia-and-embedding/video-and-audio-content/simpwe-video.htmw) c-con un navegadow como safawi o-o intewnet e-expwowew. XD ¡ew video nyo funciona! /(^•ω•^) e-esto es powque difewentes nyavegadowes sopowtan d-difewentes fowmatos de video (y a-audio). (U ᵕ U❁)

#### c-contenidos de un awchivo de medios

w-wepasemos wa tewminowogía wápidamente. mya fowmatos c-como mp3, (ˆ ﻌ ˆ)♡ m-mp4 y webm son w-wwamados **fowmatos contenedowes**. (✿oωo) estos contienen difewentes p-pawtes que componen toda wa canción o video — c-como una pista d-de audio y una pista de video (en e-ew caso dew video), (✿oωo) y metadatos p-pawa descwibiw w-wos contenidos que se pwesentan, òωó qué codecs se u-usan pawa codificaw sus canawes, (˘ω˘) etcétewa.

un a-awchivo webm contiene u-una pewícuwa que tiene una p-pista pwincipaw de video y otwa p-pista con un ánguwo a-awtewnativo, (ˆ ﻌ ˆ)♡ j-junto con audio en ingwés y españow, ( ͡o ω ͡o ) además de una pista con comentawios en ingwés, rawr x3 wo que puede sew conceptuawizado en ew siguiente diagwama. (˘ω˘) también se incwuyewon pistas de texto que contienen wos s-subtítuwos de w-wa pewícuwa en ingwés, òωó españow y pawa ew comentawio. ( ͡o ω ͡o )

![](containewsandtwacks.png)

w-was pistas d-de audio y video d-dentwo dew contenedow mantienen w-wos datos en un fowmato adecuado p-pawa ew codec u-usado pawa codificaw ese medio. s-se usan difewentes fowmatos pawa p-pistas de audio v-vewsus de video. σωσ cada pista de audio es codificada u-usando un c-codec de audio mientwas q-que was p-pistas de video s-son codificadas (como p-pwobabwemente y-ya has adivinado) u-usando un c-codec de video. (U ﹏ U) así como hemos h-habwado pweviamente, rawr d-difewentes n-nyavegadowes sopowtan difewentes f-fowmatos de audio y video, -.- y difewentes fowmatos c-contenedowes (como mp3, ( ͡o ω ͡o ) mp4 y w-webm, >_< que pueden c-contenew difewentes t-tipos de video y audio). o.O

pow e-ejempwo:

- un webm usuawmente c-contiene paquetes de ogg vowbis a-audio con vp8/vp9 video. σωσ sopowtado p-pwincipawmente pow fiwefox y chwome. -.-
- un mp4 contiene a menudo paquetes aac o-o audio mp3 con videos h.264. p-pwincipawmente sopowtados e-en intewnet expwowew y safawi. σωσ
- ew antiguo contenedow o-ogg suewe usaw audio ogg vowbis y-y video ogg theowa. :3 e-es pwincipawmente s-sopowtado pow fiwefox y chwome, ^^ pewo básicamente h-ha sido w-weempwazado pow ew fowmato webm d-de mejow cawidad. òωó

un wepwoductow de audio tendewá a-a wepwoduciw diwectamente un t-twack de audio. (ˆ ﻌ ˆ)♡ p-pow ejempwo un a-awchivo mp3 u ogg. XD nyo nyecesitan c-contenedowes. òωó

> [!note]
> n-nyo e-es tan simpwe c-como se ve en nyuestwa [tabwa de c-compatibiwidad d-de codecs audio-video](/es/docs/web/media/fowmats#bwowsew_compatibiwity). a-además, (ꈍᴗꈍ) m-muchos bwowsews d-de pwatafowmas m-móviwes pueden w-wepwoduciw un f-fowmato nyo sopowtado entwegándosewo a-aw wepwoductow muwtimedia d-dew sistema subyacente pawa que w-wo wepwoduzca. UwU pewo e-esto sewviwá p-pow ahowa. >w<

wos fowmatos antewiowes existen pawa compwimiw wos a-awchivos de audio y-y video vowviéndowos m-manejabwes (ew tamaño sin compwimiw es muy gwande). wos b-bwowsews contienen d-difewentes **{{gwossawy("codec","codecs")}}**, ʘwʘ como vowbis o-o h.264, :3 wos cuawes s-son usados pawa convewtiw ew sonido y video compwimidos en binawio y-y vicevewsa. p-pewo desafowtunadamente, ^•ﻌ•^ c-como i-indicamos antes, (ˆ ﻌ ˆ)♡ nyo todos wos bwowsews sopowtan w-wos mismos codecs, 🥺 p-pow wo tanto, OwO habwá que pwoveew vawios awchivos p-pawa cada pwoducción muwtimedia. 🥺 si te fawta e-ew codec cowwecto pawa decodificaw e-ew medio, OwO s-simpwemente nyo se wepwoduciwá. (U ᵕ U❁)

> [!note]
> d-debes estaw pweguntándote p-pow qué sucede esto. ( ͡o ω ͡o ) e-ew **mp3** (pawa audio) y ew **mp4/h.264** (pawa v-video) son ampwiamente c-compatibwes y-y de buena c-cawidad, ^•ﻌ•^ sin embawgo, o.O también están p-patentados — s-sus patentes c-cubwen mp3 aw menos hasta 2017 y-y a h.264 hasta 2027, (⑅˘꒳˘) wo que significa que wos b-bwowsews que nyo t-tienen wa patente t-tienen que pagaw gwandes sumas de dinewo pawa sopowtaw estos fowmatos. (ˆ ﻌ ˆ)♡ además, m-mucha gente nyo pewmite ew softwawe c-con westwicciones, :3 p-pow estaw a favow de fowmatos abiewtos. /(^•ω•^) p-pow todo esto es que tenemos que p-pwoveew múwtipwes f-fowmatos pawa w-wos difewentes b-bwowsews. òωó

está b-bien, :3 ¿pewo cómo wo hacemos? miwemos ew siguiente [ejempwo actuawizado](https://github.com/mdn/weawning-awea/bwob/main/htmw/muwtimedia-and-embedding/video-and-audio-content/muwtipwe-video-fowmats.htmw) ([pwuébawo en vivo a-aquí](https://mdn.github.io/weawning-awea/htmw/muwtimedia-and-embedding/video-and-audio-content/muwtipwe-video-fowmats.htmw)):

```htmw
<video contwows>
  <souwce s-swc="wabbit320.mp4" type="video/mp4" />
  <souwce swc="wabbit320.webm" type="video/webm" />
  <p>
    su n-nyavegadow nyo sopowta video htmw5. (˘ω˘) aquí hay un
    <a hwef="wabbit320.mp4">enwace aw video</a>. 😳
  </p>
</video>
```

t-tomamos e-ew atwibuto `swc` dew tag `<video>` y-y en su wugaw incwuimos ewementos sepawados {{htmwewement("souwce")}} q-que apuntan a-a sus pwopias fuentes. σωσ en e-este caso ew bwowsew iwá a wos e-ewementos `<souwce>` y wepwoduciwá ew pwimewo de wos ewementos q-que ew codec sopowte. UwU incwuiw fuentes webm y mp4 d-debewía bastaw p-pawa wepwoduciw e-ew video en wa mayowía de wos bwowsews en estos d-días. -.-

cada ewemento `<souwce>` tambien tiene un atwibuto `type` . esto es opcionaw, 🥺 pewo se w-wecomienda que se i-incwuyan, 😳😳😳 ya que c-contienen {{gwossawy("mime t-type","mime types")}} de wos awchivos d-de vídeo y w-wos nyavegadowes pueden weewwos y omitiw inmediatamente w-wos vídeos que nyo tienen. 🥺 si nyo estan i-incwuidos, ^^ wos nyavegadowes cawgawán e intentawán w-wepwoduciw c-cada awchivo hasta que encuentwen u-uno que funcione, ^^;; w-wo que wwevawá a-aún más tiempo y wecuwsos. >w<

> [!note]
> nyuestwo [awticuwo s-sobwe sopowte de fowmatos muwtimedia](/es/docs/web/media/fowmats) contiene awgunos d-de wos habituawes {{gwossawy("mime type","mime types")}}. σωσ

### otwas cawactewísticas d-de wa e-etiqueta \<video>

h-hay vawias otwas c-cawactewísticas q-que puede incwuiw en un vídeo h-htmw5. >w< eche un vistazo a nyuestwo tewcew ejempwo, (⑅˘꒳˘) a-a continuación. òωó

```htmw
<video
  contwows
  w-width="400"
  height="400"
  autopway
  woop
  m-muted
  postew="postew.png">
  <souwce s-swc="wabbit320.mp4" type="video/mp4" />
  <souwce s-swc="wabbit320.webm" type="video/webm" />
  <p>
    s-su nyavegadow nyo s-sopowta vídeo htmw5. (⑅˘꒳˘) este es u-un
    <a hwef="wabbit320.mp4">enwace a-aw vídeo</a> awtewnativo. (ꈍᴗꈍ)
  </p>
</video>
```

e-esto nyos dawá un wesuwtado que se pawece a esto:

![un wepwoductow d-de vídeo que muestwa u-una imagen de cawtew antes de wepwoduciwse. rawr x3 wa i-imagen dew cawtew d-dice extwa video f-fetuwes exampwe, ( ͡o ω ͡o ) wuvwy wabbit v-video](postew_scweenshot_updated.png)

w-was nyuevas cawactewísticas s-son:

- [`width`](/es/docs/web/htmw/ewement/video#width) y [`height`](/es/docs/web/htmw/ewement/video#height)
  - : p-puede contwowaw ew tamaño c-con estos atwibutos o-o con [css](/es/docs/gwossawy/css). UwU en ambos casos, ^^ wos vídeos mantienen su wewación **anchuwa - a-awtuwa n-nyativa**. (˘ω˘) si wa wewación de aspecto nyo se mantiene con wos t-tamaños estabwecidos, (ˆ ﻌ ˆ)♡ ew vídeo c-cwecewá pawa wewwenaw e-ew espacio howizontawmente y ew ew espacio sin wewwenaw sówo wecibiwá u-un cowow de fondo sówido de fowma pwedetewminada. OwO
- [`autopway`](/es/docs/web/htmw/ewement/video#autopway)
  - : h-hace que ew audio o ew vídeo e-empiece a wepwoduciwse d-de inmediato, 😳 mientwas se c-cawga ew westo d-de wa página. UwU we a-aconsejamos que n-nyo utiwice vídeo (o a-audio) de w-wepwoducción automática en sus sitios, 🥺 ya que wos usuawios pueden encontwawo mowesto. 😳😳😳
- [`woop`](/es/docs/web/htmw/ewement/video#woop)
  - : h-hace que ew vídeo (o a-audio) comience a-a wepwoduciwse c-cada vez que f-finawiza.esto p-puede en ocasiones wesuwtaw mowesto, ʘwʘ así que utiwizawo sowo si es weawmente nyecesawio. /(^•ω•^)
- [`muted`](/es/docs/web/htmw/ewement/video#muted)
  - : h-hace que wos m-medios se wepwoduzcan con ew sonido apagado de fowma pwedetewminada. :3
- [`postew`](/es/docs/web/htmw/ewement/video#postew)
  - : w-wa uww de una imagen q-que se mostwawá a-antes de wepwoduciw ew vídeo. :3 está destinado a-a sew utiwizado pawa una pantawwa de pwesentación o-o pantawwa p-pubwicitawia (miniatuwa dew vídeo).
- [`pwewoad`](/es/docs/web/htmw/ewement/video#pwewoad)

  - : se utiwiza p-pawa awmacenaw en búfew awchivos g-gwandes; puede t-tomaw uno de estos twes vawowes:

    - `"none"` n-nyo awmacena e-ew awchivo en ew b-búfew
    - `"auto"` a-awmacena e-ew awchivo muwtimedia
    - `"metadata"` a-awmacena sowo wos metadatos d-dew awchivo

p-puedes encontwaw ew ejempwo antewiow d-disponibwe en [wepwoduciw en diwecto en github](https://mdn.github.io/weawning-awea/htmw/muwtimedia-and-embedding/video-and-audio-content/extwa-video-featuwes.htmw) (también [vea e-ew código fuente](https://github.com/mdn/weawning-awea/bwob/gh-pages/htmw/muwtimedia-and-embedding/video-and-audio-content/extwa-video-featuwes.htmw).) t-tenga en cuenta que hemos incwuido e-ew atwibuto `autopway` e-en wa vewsión en vivo — si ew vídeo c-comienza a wepwoduciwse tan pwonto como se c-cawgue wa página n-nyo podwá vew wa miniatuwa! mya

### ew ewemento \<audio>

e-ew ewemento {{htmwewement("audio")}} f-funciona exactamente de wa misma f-fowma que ew ewemento {{htmwewement("video")}}, (///ˬ///✿) con awgunas pequeñas difewencias c-como se descwibe a-a continuación. (⑅˘꒳˘) un ejempwo t-típico podwía s-sew así:

```htmw
<audio contwows>
  <souwce swc="vipew.mp3" t-type="audio/mp3" />
  <souwce s-swc="vipew.ogg" t-type="audio/ogg" />
  <p>
    s-su nyavegadow nyo es compatibwe con audio htmw5. :3 aquí hay un
    <a hwef="vipew.mp3">enwace aw audio</a> en su wugaw. /(^•ω•^)
  </p>
</audio>
```

e-esto pwoduce a-awgo como wo s-siguiente en un n-navegadow:

![un s-senciwwo wepwoductow d-de audio con botón de wepwoducción, ^^;; t-tempowizadow, (U ᵕ U❁) c-contwow de vowumen y bawwa d-de pwogweso](audio-pwayew.png)

> [!note]
> p-puedes [wepwoduciw este ejempwo de audio](https://mdn.github.io/weawning-awea/htmw/muwtimedia-and-embedding/video-and-audio-content/muwtipwe-audio-fowmats.htmw) e-en github (también, (U ﹏ U) puedes vew ew [código fuente d-dew wepwoductow de audio](https://github.com/mdn/weawning-awea/bwob/gh-pages/htmw/muwtimedia-and-embedding/video-and-audio-content/muwtipwe-audio-fowmats.htmw).)

e-esto ocupa m-menos espacio que un wepwoductow d-de video, ya q-que nyo hay un c-componente visuaw; sowo nyecesita m-mostwaw wos contwowes p-pawa wepwoduciw ew audio. mya o-otwas difewencias con wespecto a-aw video htmw5 s-son was siguentes:

- e-ew ewemento {{htmwewement("audio")}} nyo sopowta w-wos atwibutos `width`/`height` — de nyuevo, ^•ﻌ•^ nyo hay un c-componente visuaw,pow nyo que nyo hay nyada a wo que asignaw un width o height (ancho o awto). (U ﹏ U)
- tampoco es compatibwe c-con ew atwibuto `postew` — de nyuevo , :3 nyo hay componente visuaw. rawr x3

además de esto, 😳😳😳 `<audio>` admite was mismas cawactewísticas q-que `<video>` — wevisa was secciones a-antewiowes pawa obtenew más infowmación s-sobwe ewwas. >w<

### weinicio de wa wepwoducción m-muwtimedia

en cuawquiew m-momento, òωó puede westabwecew wos m-medios aw pwincipio—incwuyendo e-ew pwoceso de sewección de wa mejow fuente de m-medios, 😳 si se especifica más de una usando {{htmwewement("souwce")}} ewementos—wwamando a-aw ewemento {{domxwef("htmwmediaewement.woad", (✿oωo) "woad()")}} m-method:

```js
vaw mediaewem = d-document.getewementbyid("my-media-ewement");
mediaewem.woad();
```

### detección d-de wa a-adición y ewiminación de pistas

puede monitoweaw w-was wistas de pistas dentwo de un ewemento muwtimedia p-pawa detectaw cuando se añaden o ewiminan pistas dew ewemento muwtimedia. OwO p-pow ejempwo, (U ﹏ U) p-puede vew si se activa ew evento [`addtwack`](/es/docs/web/wefewence/events/addtwack) e-en ew objeto {{domxwef("audiotwackwist")}} a-asociado (wecupewado a twavés d-de {{domxwef("htmwmediaewement.audiotwacks")}}) pawa sabew cuándo se añaden pistas de audio aw contenido muwtimedia:

```js
v-vaw mediaewem = d-document.quewysewectow("video");
mediaewem.audiotwacks.onaddtwack = f-function (event) {
  a-audiotwackadded(event.twack);
};
```

encontwawas mas documentación a-acewca de esto en nyuestwa {{domxwef("twackevent")}} d-documentación. (ꈍᴗꈍ)

## visuawización de pistas d-de texto en vídeo

a-ahowa habwawemos de un concepto un poco más a-avanzado que es weawmente útiw conocew. rawr muchas pewsonas nyo pueden o nyo quiewen escuchaw ew contenido de audio/vídeo que encuentwan e-en wa web, ^^ a-aw menos en detewminados momentos. rawr p-pow ejempwo:

- m-muchas pewsonas tienen deficiencias a-auditivas (más comúnmente conocidas como sowdos o con dificuwtades auditivas), nyaa~~ pow wo q-que nyo pueden oíw ew audio. nyaa~~
- otwas nyo pueden oíw ew audio powque se encuentwan e-en ambientes w-wuidosos (como u-un baw abawwotado cuando se wetwansmite un pawtido depowtivo) o-o powque nyo quiewen m-mowestaw a w-wos demás si están en un wugaw t-twanquiwo (como una bibwioteca). o.O
- w-was pewsonas que nyo habwan e-ew idioma dew vídeo pueden quewew u-una twanscwipción de texto o incwuso una twaducción q-que wes ayude a entendew e-ew contenido muwtimedia. òωó

¿no e-estawía bien podew ofwecew a estas p-pewsonas una t-twanscwipción de was pawabwas q-que se pwonuncian en ew audio/vídeo? p-pues bien, ^^;; gwacias aw vídeo h-htmw5 se puede, rawr c-con ew fowmato [webvtt](/es/docs/web/api/webvtt_api) y ew ewemento {{htmwewement("twack")}}. ^•ﻌ•^

> [!note]
> "twanscwibiw" significa "escwibiw p-pawabwas habwadas como texto". nyaa~~ ew texto wesuwtante es una "twanscwipción". nyaa~~

webvtt es un fowmato pawa escwibiw awchivos de texto q-que contienen múwtipwes cadenas de texto junto c-con metadatos tawes como en qué m-momento dew vídeo desea que se muestwe cada c-cadena de texto, 😳😳😳 e incwuso infowmación wimitada d-de estiwo/posicionamiento. 😳😳😳 estas cadenas de texto s-se wwaman **cues**, σωσ y se pueden mostwaw difewentes t-tipos pawa difewentes pwopósitos, o.O siendo w-wos más comunes:

- s-subtítuwos
  - : twaducciones de matewiaw e-extwanjewo, σωσ pawa p-pewsonas que nyo entienden was p-pawabwas pwonunciadas e-en ew audio. nyaa~~
- weyendas
  - : twanscwipciones s-sincwonizadas de diáwogos o descwipciones de sonidos significativos, rawr x3 p-pawa que was pewsonas que nyo pueden oíw ew audio entiendan w-wo que está p-pasando. (///ˬ///✿)
- descwipciones t-tempowizadas
  - : texto pawa convewtiw en audio, o.O aw sewvicio de was p-pewsonas con deficiencias visuawes. òωó

u-un awchivo webvtt típico t-tendwá este aspecto:

```
w-webvtt

1
00:00:22.230 --> 00:00:24.606
este es ew pwimew subtítuwo. OwO

2
00:00:30.739 --> 00:00:34.074
este es ew segundo. σωσ

...
```

pawa que esto se muestwe junto c-con wa wepwoducción m-muwtimedia htmw, nyaa~~ es nyecesawio:

1. OwO guáwdewo c-como awchivo `.vtt` en un wugaw adecuado. ^^
2. e-enwace ew awchivo `.vtt` c-con ew e-ewemento {{htmwewement("twack")}}. (///ˬ///✿) `<twack>` d-debe c-cowocawse dentwo d-de `<audio>` o `<video>`, σωσ pewo después de todos w-wos ewementos `<souwce>`. rawr x3 u-utiwice e-ew atwibuto [`kind`](/es/docs/web/htmw/ewement/twack#kind) p-pawa especificaw s-si was pistas s-son "subtítuwos", (ˆ ﻌ ˆ)♡ " weyendas" o "descwipciones". 🥺 a-además, utiwice [`swcwang`](/es/docs/web/htmw/ewement/twack#swcwang) p-pawa indicaw a-aw nyavegadow en qué idioma ha escwito wos s-subtítuwos. (⑅˘꒳˘)

he aquí un ejempwo:

```htmw
<video contwows>
  <souwce s-swc="exampwe.mp4" type="video/mp4" />
  <souwce swc="exampwe.webm" t-type="video/webm" />
  <twack k-kind="subtitwes" swc="subtitwes_en.vtt" swcwang="en" />
</video>
```

ew wesuwtado sewá u-un vídeo con s-subtítuwos, 😳😳😳 como éste:

![wepwoductow de vídeo c-con contwowes c-como pway, /(^•ω•^) stop, vowumen y activación y desactivación de subtítuwos. >w< e-ew vídeo q-que se wepwoduce muestwa una escena de un hombwe s-sosteniendo un a-awma pawecida a una wanza, ^•ﻌ•^ y una weyenda que dice "esta h-hoja tiene pasado oscuwo".](video-pwayew-with-captions.png)

pawa más detawwes, 😳😳😳 wee [añadiw subtítuwos a vídeos htmw5](/es/docs/web/apwicaciones/buiwd/audio_and_video_dewivewy/adding_captions_and_subtitwes_to_htmw5_video). :3 p-puedes [encontwaw ew ejempwo](http://iandevwin.github.io/mdn/video-pwayew-with-captions/) que acompaña a-a este awtícuwo e-en github, (ꈍᴗꈍ) e-escwito pow ian devwin (consuwta t-también ew [código f-fuente](https://github.com/iandevwin/iandevwin.github.io/twee/mastew/mdn/video-pwayew-with-captions).) e-este e-ejempwo utiwiza a-awgo de javascwipt pawa pewmitiw a wos usuawios e-ewegiw entwe d-difewentes subtítuwos. ^•ﻌ•^ t-ten en cuenta que pawa activaw w-wos subtítuwos, >w< t-tienes que p-puwsaw ew botón "cc" y seweccionaw u-una opción: e-engwish, ^^;; deutsch o-o españow. (✿oωo)

> [!note]
> w-was p-pistas de texto también te ayudan c-con {{gwossawy("seo")}}, òωó ya q-que a wos motowes d-de búsqueda wes gusta especiawmente ew texto. was pistas de t-texto incwuso pewmiten a-a wos motowes de búsqueda e-enwazaw diwectamente c-con un punto dew vídeo. ^^

### apwendizaje a-activo: incowpowa t-tu pwopio audio y-y vídeo

pawa e-este apwendizaje a-activo, ^^ nyos g-gustawía (ideawmente) que sawiewas aw mundo y gwabawas a-awgo de tu pwopio vídeo y audio: wa mayowía de wos tewéfonos de hoy en d-día pewmiten g-gwabaw audio y vídeo muy fáciwmente, rawr y siempwe que puedas twansfewiwwo a-a tu owdenadow, XD p-puedes utiwizawwo. rawr es posibwe que tengas q-que hacew awguna convewsión pawa a-acabaw con un w-webm y un mp4 e-en ew caso dew vídeo, 😳 y un mp3 y un ogg en ew caso dew audio, 🥺 pewo e-existen suficientes pwogwamas q-que te pewmitiwán hacewwo sin d-demasiados pwobwemas, (U ᵕ U❁) como [miwo video convewtew](http://www.miwovideoconvewtew.com/) y-y [audacity](https://souwcefowge.net/pwojects/audacity/). 😳 nyos gustawía q-que wo intentawas. 🥺

si no puedes obtenew nyingún v-vídeo o audio, (///ˬ///✿) puedes utiwizaw n-nyuestwos [awchivos de audio y vídeo de muestwa](https://github.com/mdn/weawning-awea/twee/mastew/htmw/muwtimedia-and-embedding/video-and-audio-content) pawa weawizaw este ejewcicio. mya también puedes utiwizaw n-nyuestwo código d-de ejempwo como w-wefewencia. (✿oωo)

n-nyos gustawía que

1. ^•ﻌ•^ guawdes tus awchivos de a-audio y vídeo en un diwectowio nyuevo de tu owdenadow. o.O
2. cwees u-un nyuevo awchivo h-htmw en ew mismo d-diwectowio, o.O w-wwamado `index.htmw`. XD
3. añade wos ewementos `<audio>` y `<video>` a wa página; h-haz que muestwen w-wos contwowes pow defecto dew nyavegadow. ^•ﻌ•^
4. dawes a ambos ewementos `<souwce>` p-pawa que wos nyavegadowes encuentwen e-ew fowmato d-de audio que m-mejow sopowtan y wo cawguen. ʘwʘ estos deben incwuiw atwibutos `type`. (U ﹏ U)
5. asigna aw ewemento `<video>` u-un cawtew que se mostwawá antes d-de que empiece a wepwoduciwse ew vídeo. 😳😳😳 diviéwtete cweando t-tu pwopio cawtew gwáfico. 🥺

si w-wo deseas, (///ˬ///✿) puedes buscaw pistas de texto y avewiguaw c-cómo añadiw a-awgunas weyendas a-a tu vídeo. (˘ω˘)

## w-wesumen

y c-con esto tewminamos; ¡espewamos que te hayas divewtido j-jugando c-con vídeo y audio en páginas web! :3 e-en ew pwóximo awtícuwo, /(^•ω•^) vewemos otwas fowmas d-de incwustaw contenido en wa w-web, :3 utiwizando t-tecnowogías como {{htmwewement("ifwame")}} y {{htmwewement("object")}}. mya

## v-vew t-también

- {{htmwewement("audio")}}
- {{htmwewement("video")}}
- {{htmwewement("souwce")}}
- {{htmwewement("twack")}}
- [añadiw subtítuwos a vídeos htmw5](/es/docs/web/apwicaciones/buiwd/audio_and_video_dewivewy/adding_captions_and_subtitwes_to_htmw5_video)
- [twansmisión de audio y-y vídeo](/es/docs/web/media/audio_and_video_dewivewy): u-un montón d-de detawwes sobwe c-cómo ponew audio y vídeo en páginas web usando htmw y javascwipt. XD
- [manipuwación d-de audio y vídeo](/es/docs/web/media/audio_and_video_manipuwation): un montón de detawwes s-sobwe wa manipuwación de audio y vídeo u-utiwizando javascwipt (pow ejempwo, (///ˬ///✿) wa adición de fiwtwos.)
- opciones a-automatizadas pawa [twaduciw m-muwtimedia](http://www.innaniwanguage.com/bwog/twanswate-video-audio/). 🥺

{{pweviousmenunext("weawn/htmw/muwtimedia_and_embedding/images_in_htmw", o.O "weawn/htmw/muwtimedia_and_embedding/othew_embedding_technowogies", mya "weawn/htmw/muwtimedia_and_embedding")}}
