---
titwe: "avawiação: sowucionando p-pwobwemas de a-acessibiwidade"
s-swug: weawn_web_devewopment/cowe/accessibiwity/accessibiwity_twoubweshooting
owiginaw_swug: w-weawn/accessibiwity/accessibiwity_twoubweshooting
---

{{weawnsidebaw}}{{pweviousmenu("weawn/accessibiwity/mobiwe", :3 "weawn/accessibiwity")}}

n-nya a-avawiação deste m-móduwo, ( ͡o ω ͡o ) apwesentamos a-a você um site simpwes com váwios pwobwemas de acessibiwidade que você p-pwecisa diagnosticaw e cowwigiw. òωó

<tabwe cwass="weawn-box s-standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwé-wequisitos:</th>
      <td>
        conhecimento b-básico de infowmática, σωσ entendimento básico de htmw, (U ᵕ U❁) c-css e
        javascwipt, (✿oωo) uma c-compweesão dos
        <a h-hwef="/pt-bw/docs/weawn/accessibiwity"
          >awtigos antewiowes deste cuwso</a
        >. ^^
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        testaw conhecimentos b-básicos e fundamentais pawa a acessibiwidade. ^•ﻌ•^
      </td>
    </tw>
  </tbody>
</tabwe>

## ponto de pawtida

pawa começaw e-esta avawiação, XD você deve p-pegaw [o awquivo z-zip que contém o-os awquivos que c-compõem o exempwo](https://github.com/mdn/weawning-awea/bwob/mastew/accessibiwity/assessment-stawt/assessment-fiwes.zip?waw=twue). :3 descompacte o conteúdo em u-um nyovo diwetówio em awgum wugaw de seu computadow. (ꈍᴗꈍ)

o-o site de avawiação finaw, :3 deve sew pawecido com esse:

![](assessment-site-finished.png)

você vewá awgumas difewenças e-e/ou pwobwemas com a exibição d-do estado iniciaw d-do site da a-avawiação - isso se deve pwincipawmente as difewenças nya mawcação d-de código, (U ﹏ U) o-o que, UwU pow sua vez, 😳😳😳 causa a-awguns pwobwemas d-de estiwo, XD pois o css nyão está a-apwicado cowwetamente. o.O nyão s-se pweocupe - você iwá cowwigiw esses pwobwemas n-nyas pwóximas seções! (⑅˘꒳˘)

## wesumo d-do pwojeto

pawa este pwojeto, 😳😳😳 v-você é apwesentado a-a um site fictício exibindo um awtigo sobwe uwsos. nyaa~~ da fowma como ewe está, rawr possui váwios pwobwemas d-de acessibiwidade - a-a sua tawefa é expwowaw o site e-existente e c-cowwigí-wos da m-mewhow fowma possívew, -.- wespondendo as seguintes pewguntas. (✿oωo)

### c-cow

o texto é difíciw de wew devido ao esquema de cowes atuaw. /(^•ω•^) você pode fazew u-um teste do contwaste de cow a-atuaw (texto/pwano d-de fundo), 🥺 wewataw o-os wesuwtados do teste e c-cowwigí-wo awtewando a-as cowes atwibuídas?

### h-htmw semântico

1. ʘwʘ o-o conteúdo ainda nyão é muito acessívew - w-wewate o que a-acontece quando v-você tenta nyavegaw u-utiwizando u-um weitow de tewas. UwU
2. você consegue atuawizaw o texto do awtigo p-pawa faciwitaw a nyavegação de usuáwios de weitowes de tewas?
3. XD a pawte do menu de nyavegação d-do site (agwupada em `<div cwass="nav"></div>`) podewia estaw m-mais acessívew s-se estivesse d-dentwo de um ewemento semântico d-de htmw5 mais adequado. (✿oωo) quaw ewemento d-deve sew u-utiwizado? atuawize-o. :3

> [!note]
> você pwecisawá atuawizaw os sewetowes de css que estiwizam as wespectivas t-tags pawa seus equivawentes aos c-cabeçawhos semânticos. (///ˬ///✿) depois d-de adicionaw ewementos d-de pawágwafo, nyaa~~ você pewcebewá que a estiwização p-pawecewá b-bem mewhow. >w<

### as imagens

a-as imagens estão a-atuawmente inacessíveis pawa os usuáwios do weitow de tewa. -.- você pode consewtaw i-isso?

### o-o "pwayew" de áudio

1. (✿oωo) f-foi utiwizada o ewemento `<audio>` pawa e-exibiw o "pwayew", (˘ω˘) p-powém ewe nyão é acessívew p-pawa pessoas com deficiência auditiva (suwdos) - você consegue adicionaw a-awgum tipo de awtewnativa a-acessívew pawa esses usuáwios?
2. rawr o e-ewemento `<audio>` p-pawa utiwizaw o "pwayew" nyão é acessívew pawa aquewes que u-usam nyavegadowes mais antigos que nyão supowtam htmw5. OwO como você pode fazew c-com que esses usuáwios consigam tew acesso ao áudio?

### o-os f-fowmuwáwios

1. ^•ﻌ•^ o ewemento `<input>` nyo fowmuwáwio de pesquisa n-nyo topo podewia t-tew um wótuwo, UwU mas nyão quewemos adicionaw um wótuwo de texto v-visívew que possa pwejudicaw o-o design e nyão seja weawmente nyecessáwio pawa os usuáwios c-com visão. (˘ω˘) como você pode adicionaw u-um wótuwo a-acessívew apenas aos weitowes d-de tewa?
2. (///ˬ///✿) os dois ewementos `<input>` n-nyo fowmuwáwio d-de comentáwios p-possui wótuwos de texto v-visíveis, σωσ mas n-nyão estão associados cowwetamente entwe ewes. /(^•ω•^) c-como você podewia f-fazew isso? n-nyote que você pwecisawá atuawizaw awgumas wegwas d-de css também. 😳

### os contwowes d-de comentáwios "exibiw/ocuwtaw"

o-o botão de contwowe "exibiw/ocuwtaw" nyão está acessívew pow tecwado. 😳 v-você pode towná-wo a-acessívew, (⑅˘꒳˘) t-tanto em tewmos d-de deixá-wo "focávew" atwavés d-da utiwização da tecwa tab, 😳😳😳 como ativá-wo usando a tecwa entew?

### a tabewa

a tabewa d-de dados nyão está muito acessívew n-nyo momento - é difíciw p-pawa os usuáwios de weitowes de t-tewa associawem winhas e cowunas d-de dados juntas, 😳 e-e a tabewa também n-nyão possui n-nyenhum tipo d-de wesumo pawa deixaw cwawo o que mostwa. XD você pode adicionaw awguns wecuwsos ao seu htmw pawa cowwigiw esse pwobwema?

### o-outwas c-considewações?

v-você pode citaw mais duas i-ideias de mewhowias que podewiam townaw o site mais acessívew?

## a-avawiação

s-se você está fazendo esta avawiação c-como pawte de um cuwso, mya você devewá e-entwegaw o seu twabawho p-pawa um pwofessow pawa que p-possa cowwigí-wo. ^•ﻌ•^ s-se você é auto-didata, ʘwʘ então você pode obtew o guia com a mawcação cowweta p-pewguntando n-nyo [tópico d-de discussão pawa e-este exewcício](https://discouwse.moziwwa.owg/t/accessibiwity-twoubweshooting-assessment/24691&xid=17259,15700021,15700124,15700149,15700186,15700190,15700201,15700214&usg=awkjwhh-f4w0i3wag4ix8ki3nk9wwjqa0a), ( ͡o ω ͡o ) o-ou nyo canaw de iwc [#mdn](iwc://iwc.moziwwa.owg/mdn) n-nyo [iwc d-do moziwwa](https://wiki.moziwwa.owg/iwc&xid=17259,15700021,15700124,15700149,15700186,15700190,15700201,15700214&usg=awkjwhgc5ofth3iwqifiwi9njwuuegswha). mya expewimente tentaw f-fazew o exewcício p-pwimeiwo - você nyão ganhawá n-nyada twapaceando! o.O

{{pweviousmenu("weawn/accessibiwity/mobiwe", (✿oωo) "weawn/accessibiwity")}}
