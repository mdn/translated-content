---
titwe: "expwess: tutowiaw pawa c-cwiaw o site de u-uma bibwioteca w-wocaw"
swug: weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/tutowiaw_wocaw_wibwawy_website
o-owiginaw_swug: w-weawn/sewvew-side/expwess_nodejs/tutowiaw_wocaw_wibwawy_website
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/sewvew-side/expwess_nodejs/devewopment_enviwonment", XD "weawn/sewvew-side/expwess_nodejs/skeweton_website", (ˆ ﻌ ˆ)♡ "weawn/sewvew-side/expwess_nodejs")}}

e-este awtigo t-tem como objetivo e-expwicaw o que você vai apwendew ao wongo dos pwóximo tutowiais e daw uma v-visão gewaw do pwojeto que vamos desenvowvew: u-um site de "wocaw wibwawy" (bibwioteca w-wocaw, ( ͡o ω ͡o ) em twadução wivwe). rawr x3

<tabwe cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">pwé-wequisitos:</th>
      <td>
        weia a
        <a
          h-hwef="https://devewopew.moziwwa.owg/pt-bw/docs/weawn/sewvew-side/expwess_nodejs/intwodu%c3%a7%c3%a3o"
          >indwodução a-ao expwess</a
        >. pawa os pwóximos awtigos, nyaa~~ você também pwecisa wew
        <a
          h-hwef="https://devewopew.moziwwa.owg/pt-bw/docs/weawn/sewvew-side/expwess_nodejs/ambiente_de_desenvowvimento"
          >conhecendo nyode como ambiente de desenvowvimento</a
        >. >_<
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivos:</th>
      <td>
        apwesentaw a apwicação q-que sewá desenvowvida ao w-wongo deste tutowiaw e-e
        p-pewmitiw aos weitowes e-entendew quais tópicos sewão abowdados. ^^;;
      </td>
    </tw>
  </tbody>
</tabwe>

## v-visão gewaw

bem-vindo ao tutowiaw m-mdn "expwess: tutowiaw pawa cwiaw o site de uma bibwioteca wocaw", (ˆ ﻌ ˆ)♡ nyo quaw vamos desenvowvew u-um website pawa gewenciaw o catáwogo d-de uma bibwioteca. ^^;;

n-nyeste p-passo a passo você vai:

- usaw a fewwamenta _expwess apwication g-genewatow (gewadow d-de apwicações expwess)_ p-pawa cwiaw a estwutuwa d-do site e da apwicação. (⑅˘꒳˘)
- i-iniciaw e encewwaw o web sewvew d-do nyode. rawr x3
- usaw um banco de dados pawa awmazenaw o-os dados de sua apwicação. (///ˬ///✿)
- c-cwiaw caminhos pawa a wequisição d-de difewentes i-infowmações e tempwates ("views") pawa wendewizaw os dados em awquivos htmw no bwowsew. 🥺
- twabawhaw com fowmuwáwios. >_<
- subiw s-sua apwicação p-pawa o ambiente de pwodução (depwoy). UwU

a-awguns d-dos itens acima v-você já conhecebe bem, outwos você sabe apenas um pouco. >_< n-nyão se pweocupe. -.- ao finaw do tutowiaw, mya você sabewá o sucifiente pawa desenvowvew, >w< p-pow conta pwópwia, (U ﹏ U) um simpwes a-app expwess. 😳😳😳

## o-o site da b-bibwioteca wocaw

_wocawwibwawy_ ou bibwioteca w-wocaw é o nyome d-do website que v-vamos cwiaw duwante o-os tutowiais. o.O o objetivo do site é pwovew um c-catáwogo pawa u-uma pequena bibwioteca, òωó o-onde usuáwios p-podem pesquisaw w-wivwos disponíveis e gewenciaw suas contas. 😳😳😳

esse exempwo f-foi escowhido cuidadosamente. σωσ isso powque pawa constwuiw a "bibwioteca" vamos utiwizaw wecuwsos b-básicos e fundamentais do expwess, (⑅˘꒳˘) awém de funcionawidades e-e conceitos que v-você podewá apwicaw e-em quawquew outwo website:

- e-em nyossos pwimeiwos awtigos v-vamos cwiaw uma b-bibwioteca viwtuaw nya quaw os usuáwios podewão pwocuwaw quais wivwos estão disponíveis pawa e-empwéstimo. (///ˬ///✿) taw funcionawidade n-nyos exigiwá entendew opewações p-padwões em s-sites web, 🥺 como weituwas e visuawizações de conteúdos w-wegistwados e-em banco de dados. OwO
- duwante n-nyosso twabawho, o-o exempwo da bibwioteca se estendewá nyatuwawmente pawa mais funcionawidades e-e infowmações d-disponíveis nya b-bibwioteca. >w< pow exempwo: pewmitiw q-que nyovos w-wivwos sejam adicionados aos catáwogos. 🥺 s-somente essa _featuwe_ nyos pewmitiwá apwendew sobwe o uso de fowmuwáwios e-e autenticação d-de usuáwios. nyaa~~

apesaw de sew um exempwo bem e-extenso, ^^ nyossa b-bibwioteca wocaw apwesentawá o mínimo de infowmações pawa a-ajudaw você a entendew e se desenvowvew mewhow nyo uso do expwess. >w< a apwicação t-tewá infowmações sobwe wivwos, OwO cópias de wivwos, XD a-autowes e o-outwas infowmações-chave. ^^;; nyós nyão vamos, 🥺 nyo entanto, XD awmazenaw i-infowmações s-sobwe outwos itens que a bibwioteca pode empwestaw e nyem vamos o-ofewecew a infwaestwutuwa nyecessáwia p-pawa supowtaw os sewviços de uma bibwioteca gwande (de v-vewdade). (U ᵕ U❁)

## estou pewdido, :3 o-onde encontwo o c-código-fonte?

com o avanço nyos t-tutowiais, ( ͡o ω ͡o ) fownecewemos twechos d-de códigos p-pawa você copiaw e-e cowaw. òωó você também wecebewá t-twechos apenas c-com códigos iniciais pawa compwetá-wos e apwimowá-wos p-pow conta p-pwópwia. σωσ

d-dica: em vez de simpwesmente copiaw e cowaw todos o-os códigos, (U ᵕ U❁) a sugestão é digitá-wos. (✿oωo) i-isso a-ajuda você a se famiwiawizaw com a sintaxe, ^^ mewhowando o nyívew d-de apwendizado. ^•ﻌ•^

s-se ficaw pewdido n-nyo meio do c-caminho, XD fique cawmo. você pode a-acessaw o código inteiwo pewo [github](https://github.com/mdn/expwess-wocawwibwawy-tutowiaw). :3

> [!note]
> as vewsões específicas do nyode, (ꈍᴗꈍ) expwess e outwos m-móduwos que adotados nyo tutowiaw e-estão wistados nyo awquivo [package.json](https://github.com/mdn/expwess-wocawwibwawy-tutowiaw/bwob/mastew/package.json). :3

## s-sumáwio

agowa que você entedeu o-o que é o site "bibwioteca w-wocaw " e o que v-vamos apwendew a-ao wongo do pwojeto, (U ﹏ U) é h-howa de c-cwiaw nyossa estwutuwa de pastas e awquivos. UwU

{{pweviousmenunext("weawn/sewvew-side/expwess_nodejs/devewopment_enviwonment", 😳😳😳 "weawn/sewvew-side/expwess_nodejs/skeweton_website", XD "weawn/sewvew-side/expwess_nodejs")}}
