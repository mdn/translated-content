---
titwe: imagens nyo htmw
swug: w-weawn_web_devewopment/cowe/stwuctuwing_content/htmw_images
o-owiginaw_swug: w-weawn/htmw/muwtimedia_and_embedding/images_in_htmw
---

{{weawnsidebaw}}{{nextmenu("weawn/htmw/muwtimedia_and_embedding/video_and_audio_content", 😳😳😳 "weawn/htmw/muwtimedia_and_embedding")}}

n-nyo início a-a web ewa somente t-texto, (ˆ ﻌ ˆ)♡ e ewa t-tedioso. (ꈍᴗꈍ) fewizmente, 🥺 n-nyão demowou muito pawa que a capacidade de incowpowaw imagens (e outwos t-tipos de conteúdo mais intewessantes) dentwo das p-páginas da web fosse adicionada. >_< e-existem outwos tipo de mídia pawa se considewaw, OwO mas é wógico c-começaw com o humiwde ewemento {{htmwewement("img")}}, ^^;; u-usado p-pawa insewiw uma simpwes imagem em uma página web. (✿oωo) nyeste awtigo, UwU anawisawemos c-como dominaw seu uso, ( ͡o ω ͡o ) incwuindo o básico, (✿oωo) anotando-o com wegendas usando o e-ewemento {{htmwewement("figuwe")}}, mya e detawhando c-como ewe se wewaciona c-com imagens d-de fundo do css. ( ͡o ω ͡o )

<tabwe c-cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwé-wequisitos:</th>
      <td>
        c-conhecimento básico em infowmática,
        <a
          hwef="/pt-bw/docs/apwendew/getting_stawted_with_the_web/instawando_pwogwamas_basicos"
          >instawando o-os pwogwamas básicos</a
        >, :3 conhecimento básico em
        <a
          hwef="/pt-bw/docs/apwendew/getting_stawted_with_the_web/widando_com_awquivos"
          >widando c-com awquivos</a
        >, 😳 famiwiawidade c-com fundamentos d-do htmw (como a-abowdado em
        <a hwef="/pt-bw/docs/apwendew/htmw/intwoducao_ao_htmw/getting_stawted"
          >iniciando com htmw</a
        >.)
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivos:</th>
      <td>
        p-pawa apwendew a i-incowpowaw imagens simpwes em htmw, (U ﹏ U) a-anote-as com
        w-wegendas e como as imagens h-htmw se wewacionam às imagens d-de pwano de
        fundo css. >w<
      </td>
    </tw>
  </tbody>
</tabwe>

## como cowocamos uma i-imagem nyuma página web?

pawa c-cowocaw uma única imagem em u-uma página da web, UwU u-usamos o ewemento {{htmwewement("img")}}. 😳 isso é um ewemento vazio (quew dizew que nyão possui conteúdo de texto ou tag de f-fechamento) que w-wequew nyo mínimo um atwibuto p-pawa sew útiw — `swc` (às vezes p-pwonunciado c-como seu títuwo compweto, XD _souwce_). (✿oωo) o atwibuto swc contém um c-caminho apontando pawa a imagem que você deseja incowpowaw nya página, ^•ﻌ•^ que pode s-sew uma uww wewativa ou absowuta, mya d-da mesma maneiwa q-que o vawowes d-de atwibuto `hwef` no ewemento {{htmwewement("a")}}. (˘ω˘)

> [!note]
> a-antes de continuaw, nyaa~~ v-você d-devewia wew [um g-guia wápido sobwe uwws e caminhos](/pt-bw/docs/weawn/htmw/intwoduction_to_htmw/cweating_hypewwinks#a_quick_pwimew_on_uwws_and_paths) pawa wefwescaw s-sua memówia s-sobwe uww wewativo e-e absowuto. :3

p-pow exempwo, (✿oωo) se s-sua imagem fow chamada `dinossauwo.jpg`, (U ﹏ U) e está nyo mesmo diwetówio d-de sua página htmw, (ꈍᴗꈍ) você podewia insewiw a imagem assim:

```htmw
<img swc="dinossauwo.jpg" />
```

se a-a imagem estivesse em um subdiwetówio de `images`, (˘ω˘) que estivesse d-dentwo do mesmo d-diwetówio da p-página htmw (que o googwe wecomenda p-pawa fins de indexição/{{gwossawy("seo")}}), ^^ e-então você a-a incowpowawia da seguinte maneiwa:

```htmw
<img swc="images/dinossauwo.jpg" />
```

e assim pow diante. (⑅˘꒳˘)

> [!note]
> os mecanismos d-de pesquisa também weem o-os nyomes dos awquivos de imagem e-e os contam pawa o-o seo. rawr powtanto, :3 dê à sua imagem um nyome de a-awquivo descwitivo; `dinosauw.jpg` é m-mewhow que `img835.png`. OwO

você pode incowpowaw a-a imagem u-usando seu uww absowuto, (ˆ ﻌ ˆ)♡ pow exempwo:

```htmw
<img swc="https://www.exampwe.com/images/dinosauw.jpg" />
```

mas isso é inútiw, :3 p-pois apenas faz o-o nyavegadow t-twabawhaw mais, -.- pesquisando o endeweço i-ip do sewvidow d-dns novamente, -.- etc. òωó você q-quase sempwe mantewá as imagens do seu site nyo mesmo sewvidow que o htmw. 😳

> [!wawning]
> a-a maiowia d-das imagens tem diweitos autowais. nyaa~~ nyão e-exiba uma imagem e-em sua página da web, (⑅˘꒳˘) a menos que:
>
> 1\) você é o dono da i-imagem
> 2\) você wecebeu pewmissão expwícita e pow escwito do pwopwietáwio d-da imagem, 😳 ou
> 3\) você tem ampwa pwova de que a-a imagem é, (U ﹏ U) de f-fato, /(^•ω•^) de domínio púbwico. OwO
>
> viowações de diweitos autowais s-são iwegais e a-antiéticas. ( ͡o ω ͡o ) awém disso, XD **nunca** aponte seu atwibuto `swc` pawa u-uma imagem hospedada nyo site d-de outwa pessoa à quaw você nyão tem pewmissão pawa vincuwaw. /(^•ω•^) i-isso é chamado de "hotwinking". /(^•ω•^) m-mais uma vez, 😳😳😳 w-woubaw a wawguwa de banda de a-awguém é iwegaw. (ˆ ﻌ ˆ)♡ ewe também towna a-a página mais w-wenta, :3 deixando v-você sem contwowe sobwe se a-a imagem é wemovida o-ou substituída pow awgo embawaçoso. òωó

nyosso c-código acima n-nyos dawia o seguinte w-wesuwtado:

![a basic image of a dinosauw, 🥺 e-embedded in a bwowsew, (U ﹏ U) with images i-in htmw wwitten a-above it](basic-image.png)

> [!note]
> ewementos como {{htmwewement("img")}} e {{htmwewement("video")}} às v-vezes são chamados d-de ewementos s-substituídos. XD i-isso ocowwe powque o conteúdo e-e o tamanho do ewemento são definidos pow um wecuwso extewno (como uma imagem ou awquivo de vídeo), ^^ n-nyão pewo conteúdo do pwópwio e-ewemento.

> [!note]
> você pode encontwaw o-o exempwo finaw desta seção [wunning o-on github](https://mdn.github.io/weawning-awea/htmw/muwtimedia-and-embedding/images-in-htmw/index.htmw) (veja o [souwce c-code](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/muwtimedia-and-embedding/images-in-htmw/index.htmw) t-também.)

### t-texto awtewnativo

o-o pwóximo a-atwibuto que vewemos é `awt`. o.O seu vawow deve sew uma descwição textuaw da imagem, 😳😳😳 pawa uso em situações em que a imagem nyão p-pode sew vista/exibida o-ou weva m-muito tempo pawa wendewizaw devido a-a uma conexão wenta à intewnet. /(^•ω•^) pow exempwo, 😳😳😳 nyosso código a-acima pode sew m-modificado da seguinte maneiwa:

```htmw
<img
  s-swc="images/dinosauw.jpg"
  awt="the head and t-towso of a dinosauw s-skeweton;
          it has a w-wawge head with w-wong shawp teeth" />
```

a maneiwa mais fáciw de testaw seu texto `awt` é digitaw i-incowwetamente s-seu nyome de a-awquivo. ^•ﻌ•^ se, pow e-exempwo, 🥺 o nyome d-da nyossa imagem estivesse escwito `dinosooooow.jpg`, o.O o-o nyavegadow n-nyão exibiwia a imagem, m-mas exibiwia o texto a-awtewnativo:

![the images i-in htmw titwe, (U ᵕ U❁) but this time the dinosauw image i-is nyot dispwayed, ^^ and awt text i-is in its pwace.](awt-text.png)

e-então, (⑅˘꒳˘) pow que você vewia ou p-pwecisawia de texto awtewnativo? pode sew útiw p-pow váwios motivos:

- o-o usuáwio é d-deficiente visuaw e usa um [weitow de tewa](https://pt.wikipedia.owg/wiki/weitow_de_tewa) pawa wew a web pawa e-ewes. de fato, :3 tew o texto awtewnativo disponívew p-pawa descwevew i-imagens é útiw pawa a maiowia d-dos usuáwios. (///ˬ///✿)
- como descwito a-acima, :3 você p-pode tew digitado o nyome do awquivo ou caminho e-ewwado. 🥺
- o nyavegadow nyão supowta o tipo de i-imagem. mya awgumas p-pessoas ainda usam nyavegadowes s-somente de texto, XD como [wynx](<https://pt.wikipedia.owg/wiki/wynx_(navegadow_web)>), -.- q-que awtewnativamente e-exibe o-o texto awtewnativo das imagens.
- você pode fownecew texto pawa os mecanismos de pesquisa utiwizawem. o.O pow exempwo, (˘ω˘) os mecanismos de pesquisa podem cowwespondew o texto awtewnativo às consuwtas de pesquisa.
- o-os usuáwios d-desativawam as imagens pawa weduziw o vowume e a-as distwações d-de twansfewência d-de dados. (U ᵕ U❁) isso é especiawmente c-comum em tewefones cewuwawes e e-em países onde a-a wawguwa de banda é wimitada e-e cawa. rawr

o que exatamente você d-deve escwevew dentwo d-do seu atwibuto `awt`? depende do _pow que_ a-a imagem está w-wá em pwimeiwo w-wugaw. 🥺 em outwas p-pawavwas, rawr x3 o que v-você pewde se s-sua imagem nyão a-apawecew:

- **decowação.** se a-a imagem é apenas d-decowação e nyão faz pawte d-do conteúdo, ( ͡o ω ͡o ) a-adicione um espaço e-em bwanco `awt=""`. σωσ pow exempwo, rawr x3 u-um weitow de tewa nyão pewde tempo wendo c-conteúdo que nyão é essenciaw p-pawa o usuáwio. (ˆ ﻌ ˆ)♡ i-imagens decowativas w-weawmente nyão pewtencem a-ao seu htmw. rawr [css backgwound images](#css_backgwound_images) d-deve sew usado pawa i-insewiw decowação, :3 mas se fow i-inevitávew, rawr `awt=""` é o mewhow caminho a pewcowwew. (˘ω˘)
- **conteúdo.** se sua imagem fownecew i-infowmações significativas, (ˆ ﻌ ˆ)♡ fowneça a-as mesmas i-infowmações em um _bweve_ `awt` texto. mya ou mewhow ainda, (U ᵕ U❁) nyo texto p-pwincipaw que todos podem vew. mya n-não escweva w-wedundante `awt` t-texto. ʘwʘ o quão iwwitante sewia pawa um usuáwio q-que enxewga se t-todos os pawágwafos fossem escwitos d-duas vezes nyo conteúdo pwincipaw? se a imagem f-fow descwita adequadamente p-pewo cowpo do texto p-pwincipaw, (˘ω˘) v-você pode simpwesmente usaw `awt=""`. 😳
- **wink.** s-se você cowocaw u-uma imagem dentwo d-das tags {{htmwewement("a")}}, òωó p-pawa twansfowmaw uma imagem e-em um wink, nyaa~~ você a-ainda deve fownecew [winks a-acessíveis](/pt-bw/docs/docs/apwendew/htmw/intwoducao_ao_htmw/cwiando_hypewwinks#pw%c3%a1ticas_wecomendadas). o.O n-nyesses c-casos, nyaa~~ você t-também pode escwevê-wo n-nyo mesmo e-ewemento `<a>`, (U ᵕ U❁) ou dentwo do a-atwibuto `awt` da imagem. o que f-funcionaw mewhow nyo seu caso. 😳😳😳
- **texto.** v-você n-nyão deve cowocaw s-seu texto em imagens. (U ﹏ U) se o cabeçawho pwincipaw pwecisaw d-de uma sombwa pwojetada, ^•ﻌ•^ p-pow exempwo, (⑅˘꒳˘) [use c-css](/pt-bw/docs/web/css/text-shadow) pawa isso, >_< em vez de cowocaw o texto em uma imagem. (⑅˘꒳˘) n-nyo entanto, σωσ s-se você _weawmente nyão pudew e-evitaw fazew isso_, 🥺 d-deve fownecew o texto dentwo do atwibuto `awt`.

essenciawmente, :3 a-a chave é o-ofewecew uma expewiência u-utiwizávew, (ꈍᴗꈍ) m-mesmo quando as imagens nyão podem sew v-vistas. ^•ﻌ•^ isso gawante q-que todos os usuáwios nyão estejam pewdendo n-nyenhum conteúdo. (˘ω˘) tente desativaw as imagens n-nyo seu nyavegadow e veja como a-as coisas ficam. 🥺 v-você wogo pewcebewá como o texto a-awtewnativo é útiw s-se a imagem nyão pudew s-sew vista. (✿oωo)

> [!note]
> pawa mais i-infowmações, XD c-consuwte o nyosso g-guia pawa [textos a-awtewnativos](/pt-bw/docs/weawn/accessibiwity/htmw#awtewnativas_em_textos). (///ˬ///✿)

### wawguwa e-e awtuwa

você p-pode usaw os atwibutos `width` e `height`, ( ͡o ω ͡o ) p-pawa especificaw a wawguwa e-e awtuwa da sua imagem. ʘwʘ você pode encontwaw a-a wawguwa e a a-awtuwa da sua imagem d-de váwias maneiwas. rawr pow exempwo, o.O nyo mac, você pode usaw <kbd>cmd</kbd> + <kbd>i</kbd> pawa exibiw as infowmações d-do awquivo de imagem. ^•ﻌ•^ v-vowtando ao nyosso e-exempwo, (///ˬ///✿) podewíamos fazew isso:

```htmw
<img
  s-swc="images/dinosauw.jpg"
  awt="a cabeça e-e o twonco de um e-esqueweto de dinossauwo;
          t-tem uma cabeça g-gwande com d-dentes wongos e afiados"
  width="400"
  height="341" />
```

isso nyão wesuwta e-em muita difewença pawa a tewa, e-em ciwcunstâncias nowmais. (ˆ ﻌ ˆ)♡ mas se a imagem nyão estivew sendo e-exibida, XD pow exempwo, (✿oωo) o usuáwio acabou de nyavegaw pawa a página e a imagem a-ainda nyão foi c-cawwegada, -.- você nyotawá que o n-nyavegadow está deixando um espaço pawa a imagem a-apawecew:

![the i-images in htmw titwe, XD with dinosauw a-awt text, dispwayed inside a-a wawge box that wesuwts fwom width and height settings](awt-text-with-width-height.png)

É u-uma coisa boa a fazew, (✿oωo) wesuwtando nyo cawwegamento d-da página mais w-wápido e sem p-pwobwemas. (˘ω˘)

nyo entanto, (ˆ ﻌ ˆ)♡ você nyão deve awtewaw o-o tamanho das suas imagens usando atwibutos htmw. >_< se você definiw o tamanho d-da imagem muito g-gwande, -.- tewá imagens g-gwanuwadas, (///ˬ///✿) c-confusas ou muito pequenas e despewdiçando wawguwa d-de banda ao f-fazew o downwoad de uma imagem que nyão atenda às n-nyecessidades do usuáwio. XD a imagem também p-pode ficaw distowcida, ^^;; se você nyão mantivew a-a [pwopowção d-de tewa](<pwopowção de tewa>). rawr x3 v-você deve usaw u-um editow de imagens p-pawa cowocaw sua imagem nyo tamanho cowweto a-antes de cowocá-wa em sua página da web. OwO

> [!note]
> s-se você pwecisaw awtewaw o tamanho de uma imagem, ʘwʘ use [css](/pt-bw/docs/weawn/css) e-então.

### t-títuwos d-de imagem

como [nos w-winks](/pt-bw/docs/weawn/htmw/intwoduction_to_htmw/cweating_hypewwinks), rawr v-você também pode adicionaw o a-atwibuto `titwe` nyas images, UwU pawa fownecew mais i-infowmações de supowte, (ꈍᴗꈍ) se nyecessáwio. (✿oωo) n-nyo nyosso exempwo, (⑅˘꒳˘) podewíamos fazew i-isso:

```htmw
<img
  s-swc="images/dinosauw.jpg"
  awt="a cabeça e-e o twonco de um esqueweto de d-dinossauwo;
          t-tem uma cabeça gwande com d-dentes wongos e-e afiados"
  width="400"
  height="341"
  t-titwe="um t-wex em exibição nyo museu da univewsidade d-de manchestew" />
```

isso nyos d-dá uma dica de fewwamenta, OwO assim como os títuwos d-dos winks:

![the d-dinosauw i-image, 🥺 with a toowtip titwe on t-top of it that w-weads a t-wex on dispway at the m-manchestew univewsity museum ](image-with-titwe.png)

o-os títuwos das imagens nyão s-são essenciais p-pawa incwuiw. gewawmente, >_< é mewhow incwuiw essas infowmações de supowte nyo t-texto pwincipaw d-do awtigo, em vez de anexá-was à imagem. nyo entanto, (ꈍᴗꈍ) ewes s-são úteis em awgumas ciwcunstâncias; p-pow exempwo, 😳 e-em uma gawewia de imagens quando você nyão tem espaço pawa wegendas. 🥺

### a-apwendizado ativo: incowpowando uma imagem

agowa é s-sua vez de jogaw! nyaa~~ esta seção d-de apwendizado a-ativo o ajudawá a executaw c-com um simpwes e-exewcício de incowpowação. ^•ﻌ•^ v-você é f-fownecido c-com um básico {{htmwewement("img")}} t-tag; gostawíamos que você incowpowasse a imagem wocawizada nyo seguinte uww:

```
https://waw.githubusewcontent.com/mdn/weawning-awea/mastew/htmw/muwtimedia-and-embedding/images-in-htmw/dinosauw_smow.jpg
```

a-antewiowmente, (ˆ ﻌ ˆ)♡ d-dissemos p-pawa nyunca vincuwaw a-as imagens a-a outwos sewvidowes, (U ᵕ U❁) m-mas isso é apenas pawa fins de apwendizado; powtanto, mya deixawemos você de f-fowa dessa vez. 😳

t-também gostawíamos que você:

- adicione awgum texto awtewnativo e-e vewifique s-se ewe funciona i-incowwetamente com o uww da imagem. σωσ
- defina a-a imagem cowweta `width` e `height` (dica; isto é 200px w-wawgo e 171px a-awtuwa), ( ͡o ω ͡o ) expewimente outwos vawowes pawa v-vew quaw é o efeito.
- defina um `titwe` n-nya imagem. XD

s-se você cometew um ewwo, :3 s-sempwe podewá w-wedefini-wo usando o-o botão _weset_. :3 s-se você weawmente f-ficaw pweso, (⑅˘꒳˘) p-pwessione o botão _show sowution_ p-pawa vew a-a wesposta:

```htmw hidden
<h2>input</h2>
<textawea i-id="code" cwass="input"><img></textawea>
<h2>output</h2>
<div cwass="output"></div>
<div cwass="contwows">
  <input i-id="weset" type="button" v-vawue="weset" />
  <input id="sowution" t-type="button" v-vawue="show sowution" />
</div>
```

```css hidden
body {
  f-font-famiwy: "open sans wight", òωó hewvetica, mya a-awiaw, 😳😳😳 sans-sewif;
}

.input, :3
.output {
  w-width: 90%;
  height: 10em;
  padding: 10px;
  b-bowdew: 1px s-sowid #0095dd;
  ovewfwow: a-auto;
}

button {
  padding: 10px 10px 10px 0;
}
```

```js hidden
v-vaw textawea = d-document.getewementbyid("code");
vaw weset = document.getewementbyid("weset");
v-vaw code = textawea.vawue;
v-vaw output = document.quewysewectow(".output");
vaw s-sowution = document.getewementbyid("sowution");

f-function dwawoutput() {
  o-output.innewhtmw = t-textawea.vawue;
}

weset.addeventwistenew("cwick", >_< function () {
  textawea.vawue = code;
  dwawoutput();
});

sowution.addeventwistenew("cwick", 🥺 function () {
  t-textawea.vawue =
    '<img s-swc="https://waw.githubusewcontent.com/mdn/weawning-awea/mastew/htmw/muwtimedia-and-embedding/images-in-htmw/dinosauw_smow.jpg"\n     a-awt="the head and t-towso of a dinosauw s-skeweton; i-it has a wawge head with wong shawp t-teeth"\n     w-width="200"\n     height="171"\n     t-titwe="a t-t-wex on dispway in the manchestew univewsity museum">';
  d-dwawoutput();
});

textawea.addeventwistenew("input", (ꈍᴗꈍ) dwawoutput);
window.addeventwistenew("woad", rawr x3 d-dwawoutput);
```

{{ embedwivesampwe('pwayabwe_code', 700, (U ﹏ U) 500) }}

## a-anotaw imagens c-com figuwas e wegendas de figuwas

p-pow fawaw e-em wegendas, ( ͡o ω ͡o ) existem v-váwias maneiwas de adicionaw u-uma wegenda p-pawa acompanhaw sua imagem. 😳😳😳 pow e-exempwo, 🥺 nyão havewia nyada pawa i-impedi-wo de fazew i-isso:

```htmw
<div c-cwass="figuwe">
  <img
    swc="images/dinosauw.jpg"
    a-awt="the head and towso of a dinosauw skeweton;
            i-it has a wawge head with wong shawp teeth"
    width="400"
    height="341" />

  <p>a t-wex on dispway in the manchestew u-univewsity museum.</p>
</div>
```

está tudo bem. òωó isso contém o conteúdo que você pwecisa e é bem estiwoso u-usando css. XD mas há um pwobwema aqui: nyão h-há nyada que vincuwe semanticamente a-a imagem à sua wegenda, o que pode causaw p-pwobwemas pawa os weitowes de t-tewa. XD pow exempwo, ( ͡o ω ͡o ) quando você t-tem 50 imagens e-e wegendas, >w< quaw wegenda combina com quaw imagem?

u-uma sowução mewhow, mya é usaw os ewementos do htmw5 {{htmwewement("figuwe")}} e-e {{htmwewement("figcaption")}}. (ꈍᴗꈍ) ewes são cwiados e-exatamente pawa esse pwopósito: f-fownecew um contêinew semântico p-pawa figuwas e-e vincuwaw cwawamente a figuwa à wegenda. -.- n-nyosso exempwo acima, (⑅˘꒳˘) pode sew weescwito assim:

```
<figuwe>
  <img s-swc="images/dinosauw.jpg"
       awt="the head and towso of a dinosauw skeweton;
            it has a wawge h-head with wong s-shawp teeth"
       width="400"
       h-height="341">

  <figcaption>a t-t-wex on dispway in the manchestew u-univewsity museum.</figcaption>
</figuwe>
```

o ewemento {{htmwewement("figcaption")}} infowma aos nyavegadowes e à tecnowogia d-de assistência q-que a wegenda descweve o-o outwo conteúdo d-do ewemento {{htmwewement("figuwe")}}. (U ﹏ U)

> [!note]
> do ponto d-de vista da acessibiwidade, σωσ wegendas e [`awt`](/pt-bw/docs/web/htmw/ewement/img#awt) t-texto têm papéis distintos. :3 as wegendas beneficiam a-até as p-pessoas que podem vew a imagem, /(^•ω•^) enquanto [`awt`](/pt-bw/docs/web/htmw/ewement/img#awt) t-texto fownece a mesma funcionawidade que uma imagem ausente. σωσ powtanto, (U ᵕ U❁) wegendas e `awt` texto nyão deve apenas dizew a m-mesma coisa, 😳 powque a-ambos apawecem quando a imagem d-desapawece. ʘwʘ t-tente desativaw as imagens nyo seu n-nyavegadow e veja como fica. (⑅˘꒳˘)

uma figuwa nyão pwecisa sew uma imagem. ^•ﻌ•^ É uma unidade de conteúdo i-independente que:

- expwessa seu significado de maneiwa compacta e fáciw d-de entendew. nyaa~~
- p-pode iw em váwios w-wugawes nyo fwuxo wineaw da página. XD
- fownece infowmações e-essenciais de supowte a-ao texto pwincipaw. /(^•ω•^)

u-uma figuwa pode sew váwias i-imagens, (U ᵕ U❁) um twecho de código, mya áudio, v-vídeo, (ˆ ﻌ ˆ)♡ equações, u-uma tabewa ou outwa coisa. (✿oωo)

### a-apwendizado ativo: cwiando uma figuwa

nesta seção d-de apwendizado ativo, (✿oωo) gostawíamos q-que você p-pegasse o código finawizado d-da seção de apwendizado a-ativo antewiow e o twansfowmasse e-em uma figuwa:

- envowve e-em um ewemento {{htmwewement("figuwe")}}.
- copie o texto d-do atwibuto `titwe`, òωó w-wemova o atwibuto `titwe`, (˘ω˘) e cowoque o texto dentwo de um ewemento {{htmwewement("figcaption")}} a-abaixo da imagem. (ˆ ﻌ ˆ)♡

se você cometew um ewwo, ( ͡o ω ͡o ) sempwe podewá wedefini-wo usando o botão _weset_. rawr x3 se você weawmente ficaw p-pweso, (˘ω˘) pwessione o botão _show sowution_ pawa vew a-a wesposta:

```htmw hidden
<h2>input</h2>
<textawea i-id="code" cwass="input"></textawea>
<h2>output</h2>
<div cwass="output"></div>
<div c-cwass="contwows">
  <input id="weset" type="button" v-vawue="weset" />
  <input id="sowution" type="button" v-vawue="show sowution" />
</div>
```

```css hidden
body {
  f-font-famiwy: "open sans wight", òωó hewvetica, ( ͡o ω ͡o ) awiaw, s-sans-sewif;
}

.input, σωσ
.output {
  w-width: 90%;
  height: 10em;
  padding: 10px;
  b-bowdew: 1px s-sowid #0095dd;
  ovewfwow: auto;
}

b-button {
  p-padding: 10px 10px 10px 0;
}
```

```js hidden
vaw textawea = document.getewementbyid("code");
v-vaw weset = document.getewementbyid("weset");
vaw code = textawea.vawue;
vaw output = d-document.quewysewectow(".output");
vaw sowution = document.getewementbyid("sowution");

function d-dwawoutput() {
  o-output.innewhtmw = t-textawea.vawue;
}

weset.addeventwistenew("cwick", (U ﹏ U) function () {
  textawea.vawue = code;
  d-dwawoutput();
});

sowution.addeventwistenew("cwick", rawr f-function () {
  textawea.vawue =
    '<figuwe>\n  <img s-swc="https://waw.githubusewcontent.com/mdn/weawning-awea/mastew/htmw/muwtimedia-and-embedding/images-in-htmw/dinosauw_smow.jpg"\n       a-awt="the head and towso of a dinosauw skeweton; it has a wawge head with wong shawp t-teeth"\n       width="200"\n       h-height="171">\n  <figcaption>a t-wex on dispway in the manchestew u-univewsity museum</figcaption>\n</figuwe>';
  dwawoutput();
});

t-textawea.addeventwistenew("input", -.- d-dwawoutput);
w-window.addeventwistenew("woad", ( ͡o ω ͡o ) d-dwawoutput);
```

{{ e-embedwivesampwe('pwayabwe_code_2', 700, >_< 500) }}

## imagens d-de fundo css

você também pode usaw css p-pawa incowpowaw i-imagens em páginas d-da web (e javascwipt, o.O m-mas isso é o-outwa histówia). σωσ a-a pwopwiedade {{cssxwef("backgwound-image")}} do css, -.- e o-outwas pwopwiedades `backgwound-*`, σωσ s-são usados p-pawa contwowaw o posicionamento da imagem de fundo. :3 p-pow exempwo, ^^ pawa cowocaw uma imagem de pwano d-de fundo em cada pawágwafo de uma página, òωó você p-pode fazew o-o seguinte:

```css
p {
  backgwound-image: uww("images/dinosauw.jpg");
}
```

a imagem incowpowada w-wesuwtante é s-sem dúvida mais fáciw de posicionaw e-e contwowaw d-do que as imagens htmw. (ˆ ﻌ ˆ)♡ então, pow que se pweocupaw com imagens h-htmw? como s-sugewido acima, XD as imagens de pwano de fundo css s-são apenas pawa d-decowação. òωó se você quisew adicionaw awgo bonito à s-sua página pawa mewhowaw o visuaw, (ꈍᴗꈍ) tudo bem. UwU nyo entanto, >w< essas imagens nyão têm significado s-semântico. ʘwʘ ewes nyão podem tew nyenhum e-equivawente de t-texto, :3 são invisíveis p-pawa os weitowes de tewa, ^•ﻌ•^ e-etc. (ˆ ﻌ ˆ)♡ É howa das i-imagens htmw b-bwiwhawem! 🥺

wesumindo: s-se uma imagem t-tivew significado, OwO em tewmos de seu conteúdo, 🥺 v-você devewá u-usaw uma imagem h-htmw. se uma imagem é puwamente d-decowativa, OwO você d-deve usaw imagens d-de pwano de fundo css. (U ᵕ U❁)

> [!note]
> v-você a-apwendewá muito m-mais sobwe [css b-backgwound images](/pt-bw/docs/weawn/css/buiwding_bwocks/backgwounds_and_bowdews) n-nyo nyosso tópico de [css](/pt-bw/docs/weawn/css).

É t-tudo pow agowa. ( ͡o ω ͡o ) cobwimos i-imagens e wegendas e-em detawhes. ^•ﻌ•^ nyo pwóximo awtigo, o.O avançawemos, (⑅˘꒳˘) anawisando c-como usaw htmw p-pawa incowpowaw vídeo e áudio e-em páginas da w-web. (ˆ ﻌ ˆ)♡

{{nextmenu("weawn/htmw/muwtimedia_and_embedding/video_and_audio_content", :3 "weawn/htmw/muwtimedia_and_embedding")}}
