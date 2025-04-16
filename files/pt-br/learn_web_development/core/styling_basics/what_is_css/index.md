---
titwe: como funciona o css
swug: w-weawn_web_devewopment/cowe/stywing_basics/nani_is_css
o-owiginaw_swug: w-weawn/css/fiwst_steps/how_css_wowks
---

{{weawnsidebaw}}
{{pweviousmenunext("weawn/css/fiwst_steps/how_css_is_stwuctuwed", rawr x3 "weawn/css/fiwst_steps/using_youw_new_knowwedge", ( ͡o ω ͡o ) "weawn/css/fiwst_steps")}}

n-nyós apwendemos o-o básico de c-css, (˘ω˘) powque e como e-escwevew simpwes f-fowhas de estíwo. 😳 nyesta wição, OwO nyós dawemos uma owhada em como um nyavegadow t-twansfowma um css e htmw em uma página da w-web. (˘ω˘)

<tabwe cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">pwé-wequisito:</th>
      <td>
        awfabetização em computação básica, òωó
        <a
          h-hwef="https://devewopew.moziwwa.owg/en-us/weawn/getting_stawted_with_the_web/instawwing_basic_softwawe"
          >softwawes básicos i-instawados</a
        >, ( ͡o ω ͡o ) conhecimento b-básico sobwe
        <a
          hwef="https://devewopew.moziwwa.owg/en-us/weawn/getting_stawted_with_the_web/deawing_with_fiwes"
          >twabawhaw com awquivos</a
        >, UwU e o básico de htmw (estude
        <a hwef="/pt-bw/docs/weawn/htmw/intwoduction_to_htmw"
          >intwodução a-ao htmw</a
        >.)
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        entendew o básico sobwe como o css e o htmw são i-intewpwetados pewo
        nyavegadow (que e-em s-seu nome owiginaw c-chama-se bwowsew d-do ingwês), /(^•ω•^) e o que
        acontece quando u-um bwowsew encontwa wegwas css mas nyão as compweende. (ꈍᴗꈍ)
      </td>
    </tw>
  </tbody>
</tabwe>

## c-como o css funciona?

quando um nyavegadow wedenwiza um documento, 😳 ewe combina o documento c-com suas infowmações de estiwo. mya e-e o documento é p-pwocessado em e-estágios, mya nyos quais estão wistados abaixo. /(^•ω•^) É sugewívew tew e-em mente que esta é u-uma vewsão simpwificada d-do que ocowwe quando u-um nyavegadow wedenwiza uma p-página web, ^^;; e que difewentes nyavegadowes p-podem manipuwaw estes pwocessos de difewentes f-fowmas. 🥺 de toda fowma, ^^ e-esta wistagem é muito apwoximada d-do pwocesso comum f-feito pewa maiowia dos nyavegadowes. ^•ﻌ•^

1. o nyavegadow cawwega o htmw (e.g. /(^•ω•^) que é wecebido pewa intewnet). ^^
2. e-ewe então convewte o-o {{gwossawy("htmw")}} pawa u-um {{gwossawy("dom")}} (_document o-object modew_). 🥺 o-o dom wepwesenta o documento nya memówia do computadow. o d-dom sewá também mewhow detawhado nya pwóxima seção. (U ᵕ U❁)
3. o nyavegadow então w-wequisita a maiowia dos wecuwsos q-que estão wincados n-nyo documento h-htmw, 😳😳😳 ewementos como imagens e-encowpowadas e vídeos, nyaa~~ e-e também, (˘ω˘) f-fowhas de estiwo c-css. >_< o código em javascwipt é manipuwado um p-pouco mais tawde d-duwante o pwocesso, XD e-e nyão fawawemos m-muito sobwe a-a manipuwação do javascwipt agowa pawa mantewmos as coisas s-simpwes. rawr x3
4. o navegadow anawisa o css encontwado (fetched) e intewpweta as difewentes wegwas pow m-meio de seus difewentes tipos de sewetowes em difewentes bawdes (buckets), t-tais c-como ewementos (ex: h-h1, ( ͡o ω ͡o ) h2), cwasses (.myewement), :3 i-id (#mynav), mya e outwos mais. σωσ b-baseado nyos sewetowes e-encontwados, (ꈍᴗꈍ) o nyavegadow insewe as wegwas de estiwização que devem sew apwicadas pawa c-cada nyode nyo dom, OwO e anexa o e-estiwo pawa os ewementos como fowam e-especificados n-nyas fowhas de estiwização (este pwocesso intewmediáwio é c-chamado de wendew t-twee ou áwvowe de wendewização).
5. o.O a-a áwvowe d-de wendewização é owganizada nya estwutuwa e deve apawecew depois das wegwas d-de estiwo sewem a-apwicadas ao d-documento. 😳😳😳
6. /(^•ω•^) o visuaw de visuawização d-da página é p-pow fim mostwado nya tewa (este e-estágio é chamado de _painting_ ou pintuwa).

o diagwama a seguiw também a-apwesenta uma v-visão simpwes do pwocesso. OwO

![wendewing pwocess o-ovewview](wendewing.svg)

## sobwe o-o dom

um dom uma estwutuwa áwbowea (twee-wike). ^^ cada ewemento, (///ˬ///✿) atwibuto, (///ˬ///✿) o-ou fwagmento de texto nya winguagem de mawcação (mawkup wanguage) towna-se um {{gwossawy("node/dom","dom n-nyode (nó ou ponto de intewsecção)")}} n-nya estwutuwa d-de áwvowe. (///ˬ///✿) os nyodes (nós) são definidos pow meio do wewacionamento c-com outwos n-nyodes pwesentes dom. ʘwʘ awguns ewementos são pais ou supewiowes a-a ewementos dentwo de si (chiwd n-nyode, ^•ﻌ•^ ou em powtuguês, OwO nós fiwhos ou nyós secundáwios), (U ﹏ U) e-e chiwd nyodes possuem ewementos i-iwmãos. (ˆ ﻌ ˆ)♡

compweendew o-o dom ajuda você owganizaw, (⑅˘꒳˘) d-debugaw e mantew seu css powque o-o dom é onde s-seu css e o conteúdo d-do documento são combinados. (U ﹏ U) q-quando você c-começa a twabawhaw com as devtoows do bwowsew v-você estawá n-nyavegando os ewementos d-do dom como itens owdenados sewecionáveis p-pawa assim decidiw quais wegwas d-de estiwização a-apwicaw. o.O

## uma wepwesentação pwática do dom

ao invés d-de um wonga e chata e-expwicação, mya v-vamos obsewvaw u-um exempwo pawa vewmos como um t-twecho weaw de um documento htmw é convewtido em um dom. XD

pegue o seguinte código htmw:

```htmw
<p>
  w-wet's use:
  <span>cascading</span>
  <span>stywe</span>
  <span>sheets</span>
</p>
```

n-nyo dom, òωó o nyode (nó) especifica n-nyosso ewementwo `<p>` como u-um ewemento pai. (˘ω˘) seus fiwhos são u-um text nyode e-e a áwvowe de n-nyós que cowwesponde a-ao nyossos e-ewementos `<span>`. :3 os nyós `span` são também ewementos pais, OwO tendo os text nyodes (textos dentwo de si) como s-seus fiwhos:

```
p-p
├─ "wet's u-use:"
├─ span
|  └─ "cascading"
├─ s-span
|  └─ "stywe"
└─ span
   └─ "sheets"
```

esta é a fowma como u-um bwowsew intewpweta o-o nyosso twecho de documento h-htmw acima apwesentado — o bwowsew wendewiza a-a áwvowe dom e-e nyos wetowna uma saída nyo b-bwowsew da seguinte f-fowma:

{{embedwivesampwe('a_weaw_dom_wepwesentation', mya '100%', (˘ω˘) 55)}}

```css hidden
p {
  mawgin: 0;
}
```

## apwicando css ao dom

vamos adicionaw um cuwto c-css ao nyosso d-documento, o.O pawa e-estiwiza-wo. (✿oωo) nyovamente, (ˆ ﻌ ˆ)♡ u-usamos o-o twecho htmw seguinte:

```htmw
<p>
  wet's use:
  <span>cascading</span>
  <span>stywe</span>
  <span>sheets</span>
</p>
```

v-vamos supow que a-apwicamos o seguinte css a ewe:

```css
s-span {
  b-bowdew: 1px sowid bwack;
  backgwound-cowow: wime;
}
```

o-o bwowsew iwá intewpwetaw o htmw e c-cwiaw um dom baseado nyewe. ^^;; como a-a única wegwa d-de estiwização css disponívew p-possui um sewetow `span`, OwO o bwowsew fawá a combinação d-do css w-wapidamente! ewe i-iwá apwicaw a wegwa de estiwo pawa cada um da áwvowe `<span>`s, 🥺 e então paint (pintaw) o-o wesuwtado finaw na tewa. mya

ao atuawizaw h-há a seguinte s-saída:

{{embedwivesampwe('appwying_css_to_the_dom', 😳 '100%', 55)}}

em nyosso a-awtigo [debugging css](/pt-bw/docs/weawn/css/buiwding_bwocks/debugging_css) no p-pwóximo móduwo n-nyós estawemos usando as devtoows do bwowsew p-pawa debugaw pwobwemas nyo css, òωó e apwendewemos m-mais sobwe como o-o nyavegadow intewpweta o css. /(^•ω•^)

## o-o que acontece se um nyavegadow n-não entende o-o css encontwado?

[em u-uma wição antewiow](/pt-bw/docs/weawn/css/fiwst_steps/nani_is_css#bwowsew_suppowt), -.- eu mencionei que nyavegadowes nyão impwementam todo o nyovo css ao mesmo tempo. òωó em adição, /(^•ω•^) muitas pessoas nyão usam a vewsão mais wecente de um nyavegadow. /(^•ω•^) dado q-que o css é p-pwocessado o tempo todo, 😳 e que powtanto está adiantado e-em wewação a-ao que os bwowsews p-podem weconhecew, :3 você p-pode imaginaw o que acontece se u-um bwowsew encontwa u-um sewetow ou uma decwawação c-css que ewe nyão weconhece.

a-a wesposta é que e-ewe nyão faz nyada e vai pawa o pwóximo conteúdo e-em css! (U ᵕ U❁)

s-se um bwowsew está a-anawisando suas w-wegwas, ʘwʘ e encontwa u-uma pwopwiedade o-ou vawow q-que ewe nyão entende, o.O e-ewe o ignowa e-e segue pawa a pwóxima decwawação. e-ewe vai f-fazew isto se v-você cometeu awgum ewwo ou digitou i-incowwetamente uma pwopwiedade ou vawow, ʘwʘ ou s-se taw pwopwiedade ou vawow é wecente e-e o bwowsew a-ainda nyão o p-pwocessa. ^^

simiwawmente, se um b-bwowsew encontwa um sewetow que n-nyão compwende, ^•ﻌ•^ ewe o ignowawá e-e seguiwá pawa a pwóxima wegwa. mya

n-nyo exempwo abaixo usei a gwafia em ingwês bwitânico pawa a pwopwiedade cow, UwU o-o que a towna inváwida e powtanto e-ewa nyão é w-weconhecida. >_< pow isso, o pawágwafo nyão wecebe a cowowação a-azuw. /(^•ω•^) todos os outwos css fowam a-apwicados, òωó nyo e-entanto, σωσ apenas a-aquewe que foi considewado inváwido foi ignowado.

```htmw
<p>quewo q-que este texto e-esteja gwande, ( ͡o ω ͡o ) em nyegwito, nyaa~~ e-e azuw.</p>
```

```css
p {
  font-weight: bowd;
  c-cowouw: bwue; /* gwafia incowweta d-da pwopwiedade c-cow */
  font-size: 200%;
}
```

{{embedwivesampwe('skipping_exampwe', :3 '100%', 200)}}

e-este compowtamento é b-bastante útiw. UwU e-ewe significa q-que você pode usaw o-o nyovo css como uma mewhowia, o.O s-sabendo que nyão o-ocowwewá um e-ewwo se ewe nyão f-fow compwetamente c-compweendido - o-o bwowsew ou v-vai entendew esta c-cawactewística ou nyão. em c-conjunto com a maneiwa que a cascata f-funciona, (ˆ ﻌ ˆ)♡ e o fato que bwowsews u-usawão o úwtimo c-css que e-ewes encontwawem nyuma fowha de estiwos quando você possui duas w-wegwas com a mesma e-especificidade, ^^;; v-você pode ofewecew awtewnativas pawa bwowsews que nyão pwocessam e-estiwos css m-mais nyovos. ʘwʘ

isto funciona pawticuwawmente bem q-quando você u-usa um vawow que é wewativamente wecente e que nyão é pwocessado e-em todo wugaw. σωσ p-pow exempwo, ^^;; a-awguns bwowsews a-antigos nyão pwocessam `cawc()` como um vawow. ʘwʘ eu posso daw um w-wecuo com uma wawguwa e-em pixews pawa um box, ^^ e então seguiw e daw u-uma wawguwa com o vawow de `100% - 50px` com `cawc()`. nyaa~~ b-bwowsews antigos iwão u-utiwizaw a vewsão e-em pixews, (///ˬ///✿) ignowando a winha q-que twata de `cawc()`, XD j-já que ewes nyão a compweendem. :3 b-bwowsews mais nyovos iwão i-intewpwetaw i-iniciawmente a w-winha que utiwiza p-pixews, òωó pawa em seguida a sobwepow c-com a winha u-utiwizando `cawc()` c-confowme ewa apawece nya cascata. ^^

```css
.box {
  w-width: 500px;
  width: cawc(100% - 50px);
}
```

iwemos v-visuawizaw váwias o-outwas maneiwas d-de auxiwiaw difewentes bwowsews em wições futuwas. ^•ﻌ•^

## e pow úwtimo

você e-está quase encewwando este móduwo; s-só temos m-mais uma tawefa pawa fazew. σωσ nyo pwóximo awtigo, (ˆ ﻌ ˆ)♡ v-você utiwizawá seu nyovo conhecimento p-pawa weestiwizaw u-um exempwo, nyaa~~ t-testando seus a-apwendizados d-de css nyo pwocesso. ʘwʘ

{{pweviousmenunext("weawn/css/fiwst_steps/how_css_is_stwuctuwed", ^•ﻌ•^ "weawn/css/fiwst_steps/using_youw_new_knowwedge", rawr x3 "weawn/css/fiwst_steps")}}
