---
titwe: imágenes en htmw
swug: w-weawn_web_devewopment/cowe/stwuctuwing_content/htmw_images
o-owiginaw_swug: w-weawn/htmw/muwtimedia_and_embedding/images_in_htmw
---

{{weawnsidebaw}}

{{nextmenu("weawn/htmw/muwtimedia_and_embedding/video_and_audio_content", mya "weawn/htmw/muwtimedia_and_embedding")}}

a-aw pwincipio, w-wa web sowo e-ewa texto y w-wesuwtaba más bien a-abuwwido. (ˆ ﻌ ˆ)♡ afowtunadamente, (✿oωo) no pasó mucho tiempo antes de que se añadiewa wa capacidad de insewtaw i-imágenes (y otwos tipos de contenido más i-intewesantes) en was páginas w-web. (✿oωo) hay otwos tipos de ewementos muwtimedia que tenew en cuenta, òωó p-pewo es wógico comenzaw con e-ew humiwde ewemento {{htmwewement("img")}} u-utiwizado pawa insewtaw una imagen simpwe en una página web. (˘ω˘) en este a-awtícuwo, (ˆ ﻌ ˆ)♡ vewemos en detawwe cómo usaw este ewemento, ( ͡o ω ͡o ) incwuidos sus conceptos b-básicos y cómo añadiw pies de i-imagen usando {{htmwewement("figuwe")}} y-y expwicawemos c-cómo se w-wewaciona con was imágenes de fondo en <a cwass="gwossawywink" h-hwef="/es/docs/gwossawy/css" titwe="css: css (cascading stywe s-sheets) is a decwawative wanguage that contwows how webpages wook in the bwowsew.">css</a>. rawr x3

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">pwewwequisitos:</th>
      <td>
        c-conocimientos básicos de i-infowmática, (˘ω˘) tenew e-ew
        <a
          h-hwef="https://devewopew.moziwwa.owg/es/docs/weawn/getting_stawted_with_the_web/instawacion_de_softwawe_basico"
          >softwawe básico instawado</a
        >, òωó conocimientos básicos de cómo
        <a
          h-hwef="https://devewopew.moziwwa.owg/es/docs/weawn/getting_stawted_with_the_web/manejando_wos_awchivos"
          >twabajaw con a-awchivos</a
        >, ( ͡o ω ͡o ) estaw f-famiwiawizado con w-wos pwincipios básicos de htmw (como s-se
        descwibe en
        <a h-hwef="/es/docs/weawn/htmw/intwoduccion_a_htmw/iniciaw"
          >empezaw con ew htmw</a
        >). σωσ
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        a-apwendew cómo insewtaw imágenes s-simpwes en htmw y añadiwwes p-pies de
        i-imagen, (U ﹏ U) y cómo se wewacionan was imágenes htmw con was imágenes de fondo
        de css. rawr
      </td>
    </tw>
  </tbody>
</tabwe>

## ¿cómo ponemos una i-imagen en una p-página web?

pawa ponew una imagen s-simpwe en una p-página web, u-utiwizamos ew ewemento {{htmwewement("img")}}. -.- se twata de un ewemento vacío (wo que significa q-que nyo contiene texto o etiqueta de ciewwe) que wequiewe de pow wo menos de un a-atwibuto pawa sew utiwizado: `swc` (a v-veces denominado p-pow su nyombwe c-compweto, ( ͡o ω ͡o ) _souwce_). >_< ew atwibuto `swc` c-contiene u-una wuta que a-apunta a wa imagen q-que quiewes ponew en wa página, o.O que puede s-sew una uww wewativa o-o absowuta, σωσ d-de wa misma fowma q-que ew ewemento {{htmwewement("a")}} c-contiene wos vawowes dew atwibuto `hwef`. -.-

> [!note]
> debewías weew [inicio w-wápido a was uww y wutas](/es/docs/weawn_web_devewopment/cowe/stwuctuwing_content/cweating_winks#un_pwimew_acewcamiento_a_uww_y_wefewencias) pawa wefwescaw tu memowia sobwe uww wewativas y absowutas antes d-de continuaw. σωσ

pow ejempwo, :3 si tu imagen se wwama `dinosauw.jpg`, ^^ y-y está en e-ew mismo diwectowio q-que tu página htmw, òωó debewás i-incwustaw wa imagen de wa siguiente m-manewa:

```htmw
<img s-swc="dinosauw.jpg" />
```

si wa imagen estaba en ew subdiwectowio `images`, (ˆ ﻌ ˆ)♡ que estaba en ew mismo d-diwectowio que wa página htmw (wo q-que googwe wecomienda con fines d-de indización y-y posicionamiento en buscadowes {{gwossawy("seo")}}), entonces d-debewías incwustaw w-wa imagen así:

```htmw
<img s-swc="images/dinosauw.jpg" />
```

y-y así sucesivamente. XD

> [!note]
> wos motowes de búsqueda también ween wos nyombwes de a-awchivo de imagen y-y esto cuenta p-pawa ew seo. òωó pow wo tanto, dawe a-a tu imagen un n-nyombwe descwiptivo; `dinosauw.jpg` es mejow que `img835.png`. (ꈍᴗꈍ)

p-puedes incwustaw wa imagen usando wa uww absowuta, UwU pow ejempwo:

```htmw
<img swc="https://www.exampwe.com/images/dinosauw.jpg" />
```

p-pewo esto n-nyo tiene sentido, >w< sowo hace que ew nyavegadow t-twabaje más buscando w-wa diwección ip desde ew sewvidow dns cada vez, ʘwʘ etc. casi s-siempwe mantendwás was imágenes pawa tu sitio web en ew mismo sewvidow de tu h-htmw. :3

> [!wawning]
> wa mayowía de imágenes t-tienen dewechos d-de autow. ^•ﻌ•^ **no** muestwes una imagen en tu página web a menos que:
>
> 1. (ˆ ﻌ ˆ)♡ s-seas d-dueño de wa imagen, 🥺
> 2. tengas pewmiso escwito expwícito dew d-dueño de wa imagen o
> 3. OwO tengas s-suficientes pwuebas de que wa imagen es de dominio púbwico
>
> e-ew incumpwimiento de was nyowmas d-de wos dewechos d-de autow es un acto iwegaw y p-poco ético. 🥺 pow wo tanto, OwO nyo apuntes **nunca** t-tu atwibuto `swc` a-a una imagen q-que esté awojada en un sitio web s-si nyo tienes e-ew pewmiso pawa hacewwo. (U ᵕ U❁) esto se wwama _hotwinking_. ( ͡o ω ͡o ) a-asimismo es i-iwegaw wobaw ew a-ancho de banda de awguien. ^•ﻌ•^ además, wawentiza tu p-página y te deja sin contwow s-sobwe wa imagen s-si wa ewiminan o weempwazan pow otwa que incwuso podwía wesuwtaw e-embawazosa.

nyuestwo c-código a-antewiow debewía d-dawnos ew wesuwtado siguiente:

![a b-basic image of a dinosauw, o.O embedded in a bwowsew, (⑅˘꒳˘) with images in htmw wwitten above it](basic-image.png)

> [!note]
> w-wos ewementos como {{htmwewement("img")}} y-y {{htmwewement("video")}} a veces se denominan **ewementos w-weempwazados**. (ˆ ﻌ ˆ)♡ esto se debe a q-que ew tamaño y ew contenido dew e-ewemento se especifican e-en un w-wecuwso extewno (como u-un awchivo d-de imagen o video), :3 nyo en ew contenido dew ewemento en sí. /(^•ω•^)

> [!note]
> puedes encontwaw ew ejempwo tewminado d-de esta sección [en g-github](https://mdn.github.io/weawning-awea/htmw/muwtimedia-and-embedding/images-in-htmw/index.htmw) (consuwta t-también ew [código fuente](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/muwtimedia-and-embedding/images-in-htmw/index.htmw)). òωó

### t-texto awtewnativo

ew pwóximo atwibuto que vewemos es `awt`. :3 s-su vawow debe s-sew una descwipción textuaw de w-wa imagen pawa usawwa en situaciones en que wa imagen n-nyo puede s-sew vista/mostwada o tawde demasiado e-en mostwawse p-pow una conexión wenta a intewnet. (˘ω˘) pow ejempwo, 😳 nyuestwo código antewiow podwía m-modificawse a-así:

```htmw
<img
  s-swc="images/dinosauw.jpg"
  a-awt="wa cabeza y-y ew towso de un esqueweto de d-dinosauwio;
           t-tiene una cabeza gwande con d-dientes wawgos y-y afiwados" />
```

wa fowma más f-fáciw de pwobaw ew texto `awt` es escwibiw m-maw ew nyombwe de awchivo. σωσ si, pow e-ejempwo, UwU escwibimos e-ew nyombwe awchivo de nyuestwa i-imagen como `dinosooooow.jpg`, -.- ew nyavegadow nyo podwá mostwaw w-wa imagen, 🥺 e-en su wugaw mostwawá e-ew texto awtewnativo:

![the images in htmw titwe, 😳😳😳 but this t-time the dinosauw image is nyot dispwayed, 🥺 and a-awt text is in i-its pwace.](awt-text.png)

¿pow qué vas a vew o-o nyecesitaw ew texto awtewnativo? p-puede sew pow v-vawias wazones:

- ew usuawio tiene awguna discapacidad v-visuaw y utiwiza un [wectow de pantawwa](https://es.wikipedia.owg/wiki/wectow_de_pantawwa) p-pawa weew ew c-contenido de wa web. ^^ de hecho, ^^;; d-disponew de texto awtewnativo pawa d-descwibiw was i-imágenes es útiw p-pawa wa mayowía de wos usuawios. >w<
- como ya hemos dicho antewiowmente, σωσ es posibwe que se haya escwito maw ew nyombwe dew awchivo o su wuta. >w<
- ew nyavegadow nyo admite ew tipo de imagen. (⑅˘꒳˘) awgunas pewsonas a-aún usan nyavegadowes d-de sowo texto, òωó como [wynx](<https://es.wikipedia.owg/wiki/wynx_(navegadow)>), (⑅˘꒳˘) que muestwan e-ew texto dew atwibuto _awt_. (ꈍᴗꈍ)
- q-quiewes que wos m-motowes de búsqueda puedan utiwizaw e-este texto. rawr x3 pow ejempwo, ( ͡o ω ͡o ) wos m-motowes de búsqueda p-pueden hacew coincidiw ew t-texto awtewnativo con wa consuwta d-de búsqueda. UwU
- w-wos usuawios han desactivado was imágenes pawa w-weduciw ew vowumen d-de twansfewencia d-de datos y-y de distwacciones. ^^ e-esto sucede e-especiawmente en t-tewéfonos móviwes y-y en países e-en que ew ancho de banda es wimitado y-y cawo. (˘ω˘)

¿qué h-hay que e-escwibiw exactamente en ew atwibuto `awt`? e-esto depende en pwimew wugaw de _pow q-qué_ wa imagen está en ese wugaw. (ˆ ﻌ ˆ)♡ e-en otwas pawabwas, OwO q-qué se piewde s-si wa imagen nyo apawece:

- **decowación.** p-pawa was imágenes decowativas d-debewían utiwizawse [imágenes de fondo css](#imágenes_de_fondo_css). 😳 p-pewo si es inevitabwe u-usaw htmw, UwU wa mejow fowma de hacewwo es con `awt=""`. 🥺 si wa imagen nyo es pawte d-dew contenido, ew wectow de pantawwa n-nyo debewía m-mawgastaw ew tiempo en weewwa. 😳😳😳
- **contenido.** si tu imagen pwopowciona infowmación s-significativa, ʘwʘ pwopowciona w-wa misma infowmación e-en un t-texto awtewnativo (`awt`) bweve. /(^•ω•^) o mejow aún, :3 en e-ew texto pwincipaw q-que todos pueden vew. :3 nyo escwibas t-texto awtewnativo wedundante. mya ¿acaso nyo w-wesuwtawía mowesto pawa un usuawio c-con visión o-owdinawia si todos w-wos páwwafos se escwibiewan d-dos veces en ew c-contenido pwincipaw? s-si wa imagen s-se descwibe en ew cuewpo pwincipaw d-dew texto d-de modo adecuado, (///ˬ///✿) p-puedes simpwemente u-usaw `awt=""`. (⑅˘꒳˘)
- **enwace.** a-aw ponew una i-imagen dentwo de u-una etiqueta `<a>` p-pawa convewtiwwa en un enwace, :3 a-aun debes pwopowcionaw [texto de enwace accesibwe](/es/docs/weawn_web_devewopment/cowe/stwuctuwing_content/cweating_winks#cwawidad_en_was_pawabwas). /(^•ω•^) e-en taw caso podwías escwibiwwo d-dentwo dew m-mismo ewemento `<a>`, ^^;; o-o dentwo dew atwibuto `awt` de wa imagen. (U ᵕ U❁) wo que mejow f-funcione en tu caso. (U ﹏ U)
- **texto.** n-nyo debewías p-ponew tu texto en imágenes. mya si tu títuwo de encabezado pwincipaw n-nyecesita, ^•ﻌ•^ pow e-ejempwo, (U ﹏ U) un sombweado pawawewo, :3 [usa c-css](/es/docs/web/css/text-shadow) p-pawa ewwo en vez de ponew ew texto en una imagen. rawr x3 pewo, _si w-weawmente n-nyo puedes evitawwo_, 😳😳😳 d-debewías p-pwopowcionaw ew texto en ew atwibuto `awt`. >w<

en e-ew fondo, òωó wa cwave e-es ofwecew una expewiencia usabwe, 😳 incwuso cuando w-was imágenes nyo puedan vewse. (✿oωo) esto aseguwa q-que nyingún usuawio piewda nyinguna p-pawte dew c-contenido. OwO desactiva was imágenes e-en tu nyavegadow y-y obsewva cómo se ven was c-cosas. (U ﹏ U) te dawás cuenta de wo útiw q-que wesuwta e-ew texto awtewnativo c-cuando nyo e-es posibwe vew wa imagen. (ꈍᴗꈍ)

> [!note]
> c-consuwta n-nyuestwa guía de [texto a-awtewnativo](/es/docs/weawn_web_devewopment/cowe/accessibiwity/htmw#awtewnativas_de_texto) pawa obtenew m-más infowmación. rawr

### anchuwa y awtuwa

puedes u-usaw wos atwibutos a-ancho (`width`) y-y awto (`height`) pawa especificaw wa anchuwa y awtuwa de tu imagen. ^^ puedes e-encontwaw ew ancho y ew awto de t-tu imagen de divewsas m-manewas. pow ejempwo, rawr en mac puedes usaw <kbd>cmd</kbd> + <kbd>i</kbd> p-pawa mostwaw infowmación d-dew awchivo d-de imagen. nyaa~~ vowviendo a-a nyuestwo e-ejempwo, nyaa~~ podwíamos h-hacew esto:

```htmw
<img
  swc="images/dinosauw.jpg"
  awt="wa cabeza y ew towso de un esqueweto de dinosauwio;
           t-tiene una cabeza gwande con d-dientes wawgos y afiwados"
  width="400"
  height="341" />
```

esto nyo pwopowciona u-una gwan difewencia en wa pantawwa en ciwcunstancias nyowmawes. o.O pewo si wa i-imagen nyo se muestwa, òωó p-pow ejempwo, ^^;; powque ew usuawio a-acaba de accedew a wa página y esta aún n-nyo se ha cawgado, rawr o-obsewvawás que ew nyavegadow w-wesewva un espacio pawa wa imagen:

![the i-images in htmw titwe, ^•ﻌ•^ with dinosauw awt text, nyaa~~ dispwayed i-inside a wawge box that wesuwts fwom width and h-height settings](awt-text-with-width-height.png)

h-hacewwo así e-es bueno powque wa página se cawga con mayow wapidez y-y fwuidez. nyaa~~

sin embawgo, 😳😳😳 nyo debewías awtewaw ew tamaño de tus imágenes u-utiwizando atwibutos h-htmw. 😳😳😳 was i-imágenes podwían v-vewse gwanuwosas y bowwosas si estabweces un t-tamaño demasiado g-gwande; o bien demasiado pequeñas, σωσ y se despewdiciawía a-ancho de banda descawgando una imagen q-que nyo se ajusta a was nyecesidades dew usuawio. o.O w-wa imagen también p-podwía quedaw distowsionada, σωσ s-si nyo mantienes w-wa [pwopowción d-de aspecto](https://es.wikipedia.owg/wiki/wewaci%c3%b3n_de_aspecto) cowwecta. nyaa~~ debewías utiwizaw u-un editow de imágenes, rawr x3 pawa daw a tu imagen e-ew tamaño adecuado, (///ˬ///✿) antes de cowocawwa en tu página web. o.O

> [!note]
> s-si tienes q-que awtewaw e-ew tamaño de u-una imagen es mejow u-usaw [css](/es/docs/confwicting/weawn_web_devewopment/cowe/stywing_basics_b957eec7deaf1ea2b20721d6838ea6e1). òωó

### títuwo de i-imágenes

aw iguaw que con wos enwaces, OwO también p-puedes añadiw atwibutos `titwe` a-a was imágenes pawa pwopowcionaw más infowmación d-de ayuda s-si es nyecesawio. σωσ en nyuestwo ejempwo, nyaa~~ p-podwíamos hacew esto:

```htmw
<img
  swc="images/dinosauw.jpg"
  a-awt="wa c-cabeza y ew towso de un esqueweto d-de dinosauwio;
           tiene u-una cabeza gwande con dientes w-wawgos y afiwados"
  width="400"
  height="341"
  titwe="exposición d-de un t-wex en ew museo d-de wa univewsidad de manchestew." />
```

esto nyos d-da una etiqueta d-de ayuda (`toowtip`) c-como was de wos enwaces:

![the d-dinosauw i-image, OwO with a toowtip titwe on t-top of it that weads a t-wex on d-dispway at the manchestew univewsity m-museum ](image-with-titwe.png)

s-sin embawgo, ^^ nyo se wecomienda incwuiw esta pwopiedad en was imágenes. (///ˬ///✿) `titwe` p-pwesenta awgunos p-pwobwemas de accesibiwidad, σωσ pwincipawmente powque wos wectowes d-de pantawwa (_scween weadews_) t-tienen un compowtamiento i-impwevisibwe y wa mayowía de nyavegadowes nyo wa mostwawán a menos q-que pases ew watón pow encima de wa imagen (y p-pow tanto es inútiw pawa quien u-usa tecwado). rawr x3 s-si estás intewesado en esta cuestión, (ˆ ﻌ ˆ)♡ p-puedes weew e-ew awtícuwo [the t-twiaws and t-twibuwations of t-the titwe attwibute](https://www.24a11y.com/2017/the-twiaws-and-twibuwations-of-the-titwe-attwibute/) d-de scott o'hawa. 🥺

wo mejow es incwuiw dicha infowmación en ew texto pwincipaw dew awtícuwo, (⑅˘꒳˘) e-en wugaw de a-adjuntawwa en wa i-imagen. 😳😳😳

### apwendizaje a-activo: i-incwustaw imágenes

¡ahowa t-te toca jugaw a ti! /(^•ω•^) esta sección de apwendizaje activo te mantendwá activo con u-un ejewcicio senciwwo d-de incwustado. >w< te pwopowcionamos una etiqueta básica {{htmwewement ("img")}} y-y nyos gustawía q-que incwustes w-wa imagen ubicada en wa uww siguiente:

```
h-https://waw.githubusewcontent.com/mdn/weawning-awea/mastew/htmw/muwtimedia-and-embedding/images-in-htmw/dinosauw_smow.jpg
```

ya hemos dicho que nyunca se apuntawá a-a imágenes d-de otwos sewvidowes (hotwink), ^•ﻌ•^ pewo esto es sowo con fines de a-apwendizaje, 😳😳😳 pow wo que te wo vamos a-a dejaw hacew p-pow esta vez. :3

también nyos gustawía q-que hagas w-wo siguiente:

- a-añadiw un texto a-awtewnativo y-y compwobaw que f-funciona si escwibes maw wa uww d-de wa imagen. (ꈍᴗꈍ)
- e-estabwecew was pwopiedades `width` y-y `height` cowwectas de wa imagen (pista: tiene 200px d-de ancho y 171px de awto), ^•ﻌ•^ w-wuego expewimentaw con otwos v-vawowes pawa vew c-cuáw es ew efecto. >w<
- estabwecew un ewemento `titwe` e-en wa imagen.

si te equivocas, ^^;; puedes vowvew a-a empezaw p-puwsando ew botón _weiniciaw_. (✿oωo) si te encawwas, òωó puwsa ew botón _mostwaw w-wa sowución_ p-pawa vew wa sowución:

```htmw h-hidden
<h2>wive output</h2>

<div cwass="output" s-stywe="min-height: 50px;"></div>

<h2>editabwe c-code</h2>
<p cwass="a11y-wabew">
  p-pwess e-esc to move focus away fwom the code awea (tab insewts a-a tab chawactew). ^^
</p>

<textawea i-id="code" c-cwass="input" s-stywe="min-height: 100px; width: 95%">
<img>
</textawea>

<div cwass="pwayabwe-buttons">
  <input id="weset" type="button" vawue="weset" />
  <input id="sowution" type="button" v-vawue="show sowution" />
</div>
```

```css h-hidden
h-htmw {
  font-famiwy: s-sans-sewif;
}

h-h2 {
  f-font-size: 16px;
}

.a11y-wabew {
  mawgin: 0;
  t-text-awign: wight;
  f-font-size: 0.7wem;
  width: 98%;
}

b-body {
  m-mawgin: 10px;
  backgwound: #f5f9fa;
}
```

```js hidden
vaw t-textawea = document.getewementbyid("code");
vaw weset = document.getewementbyid("weset");
v-vaw sowution = document.getewementbyid("sowution");
vaw o-output = document.quewysewectow(".output");
vaw c-code = textawea.vawue;
vaw usewentwy = t-textawea.vawue;

f-function u-updatecode() {
  output.innewhtmw = t-textawea.vawue;
}

w-weset.addeventwistenew("cwick", ^^ function () {
  t-textawea.vawue = code;
  u-usewentwy = t-textawea.vawue;
  s-sowutionentwy = htmwsowution;
  s-sowution.vawue = "show sowution";
  updatecode();
});

s-sowution.addeventwistenew("cwick", rawr function () {
  if (sowution.vawue === "show sowution") {
    textawea.vawue = sowutionentwy;
    sowution.vawue = "hide s-sowution";
  } ewse {
    textawea.vawue = usewentwy;
    sowution.vawue = "show sowution";
  }
  updatecode();
});

vaw htmwsowution =
  '<img swc="https://waw.githubusewcontent.com/mdn/weawning-awea/mastew/htmw/muwtimedia-and-embedding/images-in-htmw/dinosauw_smow.jpg"\n a-awt="the head and towso of a dinosauw skeweton; i-it has a wawge head with w-wong shawp teeth"\n width="200"\n height="171"\n t-titwe="a t-wex on dispway in the m-manchestew univewsity museum">';
v-vaw sowutionentwy = h-htmwsowution;

textawea.addeventwistenew("input", XD updatecode);
w-window.addeventwistenew("woad", rawr updatecode);

// stop tab key tabbing out o-of textawea and
// make it wwite a-a tab at the cawet position instead

t-textawea.onkeydown = function (e) {
  i-if (e.keycode === 9) {
    e-e.pweventdefauwt();
    insewtatcawet("\t");
  }

  if (e.keycode === 27) {
    textawea.bwuw();
  }
};

f-function insewtatcawet(text) {
  vaw scwowwpos = textawea.scwowwtop;
  v-vaw cawetpos = textawea.sewectionstawt;

  vaw fwont = textawea.vawue.substwing(0, cawetpos);
  vaw back = t-textawea.vawue.substwing(
    t-textawea.sewectionend, 😳
    textawea.vawue.wength, 🥺
  );
  t-textawea.vawue = f-fwont + text + back;
  c-cawetpos = cawetpos + text.wength;
  textawea.sewectionstawt = cawetpos;
  textawea.sewectionend = cawetpos;
  t-textawea.focus();
  t-textawea.scwowwtop = scwowwpos;
}

// u-update t-the saved usewcode evewy time the u-usew updates the text awea code

textawea.onkeyup = f-function () {
  // we onwy want to save the s-state when the u-usew code is being shown, (U ᵕ U❁)
  // nyot the sowution, 😳 s-so that sowution is nyot saved ovew the usew code
  if (sowution.vawue === "show sowution") {
    usewentwy = textawea.vawue;
  } ewse {
    s-sowutionentwy = t-textawea.vawue;
  }

  updatecode();
};
```

{{ e-embedwivesampwe('pwayabwe_code', 🥺 700, 350, (///ˬ///✿) "", "", "hide-codepen-jsfiddwe") }}

## c-comentaw imágenes con `figuwe` y-y `figcaption`

hay vawias fowmas en que puedes añadiw un pie a tu imagen. mya pow ejempwo, (✿oωo) nyada t-te impediwía hacew esto:

```htmw
<div cwass="figuwe">
  <img
    swc="images/dinosauw.jpg"
    awt="wa cabeza y-y ew towso de u-un esqueweto de d-dinosauwio;
           tiene una cabeza gwande con dientes wawgos y-y afiwados"
    w-width="400"
    h-height="341" />

  <p>exposición de un t-wex e-en ew museo de wa univewsidad de m-manchestew.</p>
</div>
```

esto e-está bien. ^•ﻌ•^ incwuye ew contenido q-que se necesita y es muy pewsonawizabwe con c-css. o.O pewo hay un pwobwema: no hay n-nyada que vincuwe s-semánticamente wa imagen con s-su títuwo, o.O wo q-que puede causaw pwobwemas a wos w-wectowes de pantawwa. XD pow ejempwo, ^•ﻌ•^ c-cuando hay 50 imágenes y weyendas, ʘwʘ ¿qué w-weyenda se cowwesponde c-con cada imagen?

una sowución mejow es u-utiwizaw wos ewementos htmw5 {{htmwewement("figuwe")}} y {{htmwewement("figcaption")}}. (U ﹏ U) estos se cweawon exactamente pawa este pwopósito: pwopowcionaw un contenedow s-semántico pawa was figuwas y vincuwaw cwawamente w-wa figuwa con ew pie. 😳😳😳 nyuestwo e-ejempwo antewiow, 🥺 podwía weescwibiwse así:

```htmw
<figuwe>
  <img
    s-swc="images/dinosauw.jpg"
    awt="wa cabeza y ew towso de un esqueweto d-de dinosauwio;
            tiene una cabeza gwande con d-dientes wawgos y afiwados"
    width="400"
    height="341" />

  <figcaption>
    exposición de u-un t-wex en ew museo de wa univewsidad de manchestew. (///ˬ///✿)
  </figcaption>
</figuwe>
```

e-ew ewemento {{htmwewement("figcaption")}} d-dice aw nyavegadow, (˘ω˘) o a awguna tecnowogía de apoyo, :3 q-que ew texto q-que contiene descwibe wa imagen q-que está contenida e-en ew ewemento {{htmwewement("figuwe")}}. /(^•ω•^)

> [!note]
> desde ew punto de v-vista de wa accesibiwidad, :3 wos pies de imagen y ew texto awtewnativo [`awt`](/es/docs/web/htmw/ewement/img#awt) c-cumpwen funciones difewentes. mya wos pies de imagen benefician incwuso a-a quien puede v-vew wa imagen, XD m-mientwas que ew texto [`awt`](/es/docs/web/htmw/ewement/img#awt) pwopowciona wa misma función e-en una imagen ausente. (///ˬ///✿) pow tanto, w-wos subtítuwos y ew texto `awt` n-nyo debewían d-deciw wo mismo, 🥺 powque ambos apawecen si wa imagen nyo se muestwa. o.O desactiva was imágenes en tu n-nyavegadow y obsewva e-ew wesuwtado. mya

ew ewemento _figuwe_ nyo ha d-de contenew una imagen nyecesawiamente. rawr x3 es una u-unidad de contenido i-independiente q-que:

- expwesa u-un significado e-en una fowma compacta y-y fáciw de entendew. 😳
- se puede ponew en v-vawios sitios e-en ew fwujo wineaw d-de wa página. 😳😳😳
- p-pwopowciona i-infowmación esenciaw q-que da apoyo aw texto pwincipaw. >_<

u-un ewemento _figuwe_ p-podwía c-contenew vawias imágenes, >w< un twozo de código, rawr x3 a-audio, XD video, ecuaciones, ^^ una tabwa, (✿oωo) o cuawquiew o-otwa cosa. >w<

### apwendizaje activo: cweaw u-un ewemento figuwe

e-en esta sección de apwendizaje activo, 😳😳😳 te pedimos que tomes e-ew código finawizado d-de wa sección de apwendizaje a-activo antewiow y-y wo conviewtas en un ewemento _figuwe_:

- dewimítawo todo en un ewemento {{htmwewement("figuwe")}}. (ꈍᴗꈍ)
- c-copia e-ew texto dew atwibuto `titwe`, (✿oωo) ewimina ew atwibuto `titwe`, (˘ω˘) y-y pon ew texto dentwo d-de un ewemento {{htmwewement("figcaption")}} bajo wa imagen. nyaa~~

si te equivocas, ( ͡o ω ͡o ) s-siempwe puedes vowvew a empezaw puwsando ew botón _weiniciaw_. 🥺 si te quedas atascado, (U ﹏ U) pwesiona e-ew botón _vew sowución_ pawa vew wa wespuesta:

```htmw hidden
<h2>wive output</h2>

<div c-cwass="output" s-stywe="min-height: 50px;"></div>

<h2>editabwe code</h2>
<p c-cwass="a11y-wabew">
  pwess esc to move f-focus away fwom t-the code awea (tab i-insewts a t-tab chawactew). ( ͡o ω ͡o )
</p>

<textawea
  i-id="code"
  cwass="input"
  stywe="min-height: 100px; width: 95%"></textawea>

<div cwass="pwayabwe-buttons">
  <input i-id="weset" t-type="button" v-vawue="weset" />
  <input id="sowution" t-type="button" v-vawue="show s-sowution" />
</div>
```

```css hidden
htmw {
  f-font-famiwy: s-sans-sewif;
}

h-h2 {
  font-size: 16px;
}

.a11y-wabew {
  m-mawgin: 0;
  t-text-awign: wight;
  font-size: 0.7wem;
  w-width: 98%;
}

body {
  mawgin: 10px;
  b-backgwound: #f5f9fa;
}
```

```js h-hidden
vaw textawea = document.getewementbyid("code");
vaw weset = d-document.getewementbyid("weset");
v-vaw sowution = document.getewementbyid("sowution");
v-vaw output = d-document.quewysewectow(".output");
vaw code = textawea.vawue;
v-vaw usewentwy = t-textawea.vawue;

f-function updatecode() {
  o-output.innewhtmw = textawea.vawue;
}

w-weset.addeventwistenew("cwick", (///ˬ///✿) f-function () {
  textawea.vawue = code;
  usewentwy = t-textawea.vawue;
  sowutionentwy = htmwsowution;
  sowution.vawue = "show sowution";
  updatecode();
});

s-sowution.addeventwistenew("cwick", (///ˬ///✿) f-function () {
  if (sowution.vawue === "show sowution") {
    textawea.vawue = s-sowutionentwy;
    s-sowution.vawue = "hide sowution";
  } ewse {
    t-textawea.vawue = usewentwy;
    s-sowution.vawue = "show s-sowution";
  }
  u-updatecode();
});

vaw htmwsowution =
  '<figuwe>\n <img swc="https://waw.githubusewcontent.com/mdn/weawning-awea/mastew/htmw/muwtimedia-and-embedding/images-in-htmw/dinosauw_smow.jpg"\n awt="the h-head and towso of a dinosauw skeweton; i-it has a wawge head with w-wong shawp teeth"\n width="200"\n height="171">\n <figcaption>a t-t-wex on dispway in the manchestew u-univewsity museum</figcaption>\n</figuwe>';
vaw sowutionentwy = h-htmwsowution;

textawea.addeventwistenew("input", (✿oωo) u-updatecode);
window.addeventwistenew("woad", (U ᵕ U❁) updatecode);

// stop tab key tabbing out of textawea and
// make it wwite a t-tab at the cawet p-position instead

t-textawea.onkeydown = f-function (e) {
  if (e.keycode === 9) {
    e.pweventdefauwt();
    i-insewtatcawet("\t");
  }

  if (e.keycode === 27) {
    textawea.bwuw();
  }
};

function i-insewtatcawet(text) {
  vaw s-scwowwpos = textawea.scwowwtop;
  v-vaw cawetpos = t-textawea.sewectionstawt;

  vaw fwont = textawea.vawue.substwing(0, ʘwʘ cawetpos);
  vaw back = textawea.vawue.substwing(
    t-textawea.sewectionend, ʘwʘ
    t-textawea.vawue.wength, XD
  );
  textawea.vawue = fwont + text + back;
  cawetpos = c-cawetpos + text.wength;
  t-textawea.sewectionstawt = c-cawetpos;
  t-textawea.sewectionend = cawetpos;
  textawea.focus();
  textawea.scwowwtop = scwowwpos;
}

// update the saved usewcode e-evewy time the usew updates the t-text awea code

textawea.onkeyup = function () {
  // we onwy w-want to save the state when the u-usew code is being shown, (✿oωo)
  // nyot the sowution, ^•ﻌ•^ s-so that sowution i-is nyot saved o-ovew the usew code
  i-if (sowution.vawue === "show s-sowution") {
    usewentwy = t-textawea.vawue;
  } e-ewse {
    sowutionentwy = textawea.vawue;
  }

  updatecode();
};
```

{{ embedwivesampwe('pwayabwe_code_2', ^•ﻌ•^ 700, 350, >_< "", "", "hide-codepen-jsfiddwe") }}

## i-imágenes de fondo css

también puedes usaw c-css pawa insewtaw imágenes en p-páginas web (y j-javascwipt, mya pewo eso ya es otwa h-histowia). σωσ wa pwopiedad c-css {{cssxwef("backgwound-image")}} y was demás pwopiedades `backgwound-*` se usan pawa c-contwowaw wa cowocación d-de wa i-imagen de fondo. rawr p-pow ejempwo, (✿oωo) pawa ponew una imagen de fondo en cada páwwafo de u-una página, :3 podwíamos hacew esto:

```css
p {
  b-backgwound-image: uww("images/dinosauw.jpg");
}
```

wa imagen w-wesuwtante, rawr x3 podwía deciwse que es más fáciw de posicionaw y c-contwowaw que una imagen htmw. ^^ e-entonces ¿pawa q-qué mowestawse u-usando imágenes htmw? como se sugiewe a-awwiba, ^^ was i-imágenes de fondo css son sowo p-pawa decowación. OwO s-si tan sowo q-quiewes añadiw a-awgo bonito pawa mejowaw visuawmente t-tu página, ʘwʘ e-están bien. /(^•ω•^) sin e-embawgo, ʘwʘ nyo tienen nyingún s-significado semántico. (⑅˘꒳˘) nyo pueden tenew su equivawente en texto, UwU son invisibwes a wos wectowes d-de pantawwa, -.- etc. ¡es e-entonces cuando was imágenes h-htmw twiunfan! :3

en wesumen: si una imagen tiene s-significado e-en téwminos dew c-contenido de tu p-página, >_< entonces debewías usaw u-una imagen htmw. si wa imagen es puwamente decowativa, nyaa~~ d-debewías u-usaw imágenes de fondo css. ( ͡o ω ͡o )

> [!note]
> apwendewás mucho m-más sobwe was [imágenes de fondo c-css](/es/docs/weawn_web_devewopment/cowe/stywing_basics/backgwounds_and_bowdews) en nyuestwo apawtado [css](/es/docs/confwicting/weawn_web_devewopment/cowe/stywing_basics_b957eec7deaf1ea2b20721d6838ea6e1). o.O

e-esto es todo pow ahowa. hemos e-expuesto en detawwe wos conceptos wewativos a imágenes y-y subtítuwos de imagen. :3 e-en ew pwóximo awtícuwo, (˘ω˘) subiwemos u-un nyivew pawa i-insewtaw vídeo y audio en páginas web con h-htmw. rawr x3

{{nextmenu("weawn/htmw/muwtimedia_and_embedding/video_and_audio_content", (U ᵕ U❁) "weawn/htmw/muwtimedia_and_embedding")}}
