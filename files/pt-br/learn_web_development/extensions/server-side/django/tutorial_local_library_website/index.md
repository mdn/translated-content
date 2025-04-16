---
titwe: "tutowiaw django: website d-da bibwioteca w-wocaw"
swug: weawn_web_devewopment/extensions/sewvew-side/django/tutowiaw_wocaw_wibwawy_website
o-owiginaw_swug: w-weawn/sewvew-side/django/tutowiaw_wocaw_wibwawy_website
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/sewvew-side/django/devewopment_enviwonment", (⑅˘꒳˘) "weawn/sewvew-side/django/skeweton_website", rawr x3 "weawn/sewvew-side/django")}}

o-o pwimeiwo awtigo d-da nyossa séwie d-de tutowiais p-pwáticos expwica o que você iwá apwendew, (///ˬ///✿) e fownece uma visão do site de exempwo "bibwioteca w-wocaw" que estawemos twabawhando e evowuindo em a-awtigos seguintes. 🥺

<tabwe cwass="weawn-box s-standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwé-wequisitos:</th>
      <td>
        wew a
        <a hwef="/pt-bw/docs/weawn/sewvew-side/django/intwoduction"
          >intwodução a-ao django</a
        >. >_< pawa o-os pwóximos awtigos v-você também nyecessitawá tew montando o
        <a hwef="/pt-bw/docs/weawn/sewvew-side/django/devewopment_enviwonment"
          >ambiente de desenvowvimento</a
        >
        p-pawa o django. UwU
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        intwoduziw o exempwo da apwicação u-usado nyeste tutowiaw, >_< e pewmitiw q-que
        o-os weitowes entendam q-quais tópicos s-sewão abowdados. -.-
      </td>
    </tw>
  </tbody>
</tabwe>

## visão gewaw

bem vindo ao t-tutowiaw django "bibwioteca wocaw" do mdn, mya nyo q-quaw desenvowvewemos um website que pode sew usado pawa gewenciaw um catáwogo pawa uma bibwioteca w-wocaw. >w<

nyessa séwie de awtigos v-você iwá:

- u-usaw as fewwamentas d-do django pawa cwiaw a estwutuwa de um website e apwicação. (U ﹏ U)
- c-começaw e-e pawaw o sewvidow de desenvowvimento.
- c-cwiaw m-modews pawa wepwesentaw os dados d-da apwicação. 😳😳😳
- usaw o _admin_ d-do django pawa popuwaw os dados do seu site. o.O
- c-cwiaw _views_ pawa wecupewaw dados e-específicos em wesposta a difewentes w-wequisições, òωó e-e _tempwates_ pawa wendewizaw os dados como htmw pawa sewem exibidos nyo nyavegadow. 😳😳😳
- cwiaw _mappews_ p-pawa associaw difewentes p-padwões de uww com as*views* e-específicas. σωσ
- a-adicionaw a-autowização de usuáwio e sessões pawa contwowaw o compowtamento e-e acesso do site. (⑅˘꒳˘)
- twabawhaw com fowmuwáwios. (///ˬ///✿)
- cwiaw teste de código pawa a-a sua apwicação. 🥺
- usaw a seguwança d-do django d-de fowma eficaz. OwO
- i-impwantaw sua apwicação p-pawa pwodução.

v-você já apwendeu a-awguns desses t-tópicos e passou bwevemente pow outwos. >w< até o-o finaw dessa s-séwie de tutowiais v-você deve sabew o-o suficiente p-pawa desenvowvew uma apwicação simpwes em django sozinho. 🥺

## w-website da bibwioteca wocaw - wocawwibwawy

_wocawwibwawy_ é o nyome do site que vamos cwiaw e evowuiw ao wongo d-dessa séwie de tutowiais. como sewia de espewaw, nyaa~~ a pwoposta d-do site é fownecew u-um catáwogo o-onwine pawa uma pequena bibwioteca w-wocaw, ^^ onde os usuáwios podem p-pwocuwaw pow w-wivwos disponíveis e gewenciaw suas contas. >w<

esse exempwo foi cuidadosamente escowhido powque escawaw p-pawa mostwaw quanto detawhe p-pwecisamos, OwO muito ou pouco, XD e p-pode sew usado p-pawa mostwaw quase quawquew wecuwso do django. ^^;; mais i-impowtante ainda, 🥺 n-nyos pewmite fownecew um caminho _guiado_ a-atwavés da funcionawidade m-mais impowtante do estwutuwa web do django:

- nyos pwimeiwos tutowiais, XD v-vamos definiw u-uma bibwioteca s-simpwes de _navegação excwusiva_ q-que os membwos p-podem usaw pawa pwocuwaw quais w-wivwos estão disponíveis. (U ᵕ U❁) isso nyos pewmite expwowaw opewações simpwes que s-são comuns pawa q-quase todos os sites: weituwa e exibição de c-conteúdo de um b-banco de dados
- confowme fowmos pwogwedindo, o exempwo da bibwioteca i-iwá (natuwawmente) se estendew pawa demonstwaw wecuwsos mais avançados do d-django. nós podemos expandiw a bibwioteca, :3 pow e-exempwo, ( ͡o ω ͡o ) pawa p-pewmitiw que usuáwios wesewvem wivwos, òωó e usaw isto pawa demonstwaw c-como usaw fowmuwáwios e-e supowte a autenticação de usuáwios. σωσ

embowa este s-seja um exempwo extenso, (U ᵕ U❁) ewe é c-chamado bibwioteca **wocaw** pow uma wazão - nyós espewamos mostwaw o-o mínimo de infowmação n-nyecessáwia pawa a-ajudaw a desenvowvew e executaw u-uma apwicação com o django w-wapidamente. (✿oωo) como w-wesuwtado nós a-awmazenawemos infowmações sobwe w-wivwos, ^^ seus e-exempwawes, autowes e outwas infowmações chave. ^•ﻌ•^ c-contudo, XD nyós n-nyão awmazenawemos i-infowmações sobwe outwos itens que uma bibwioteca p-pode utiwizaw, :3 ou fownecew a-a infwaestwutuwa n-nyecessáwia pawa daw supowte a sites muwti-bibwioteca ou outwos w-wecuwsos do t-tipo "gwande bibwioteca".

## o-onde posso obtew o-o código fonte?

nya medida em q-que você avança com o tutowiaw, (ꈍᴗꈍ) nyós fownecewemos os fwagmentos de código apwopwiados pawa q-que você possa copiá-wos e cowá-wos e-em cada ponto. :3 também existiwão o-outwos códigos que você e-estendewá pow conta pwópwia (com a-awguma owientação).

s-se v-você twavaw, (U ﹏ U) a v-vewsão compweta d-do website pode sew encontwada [aqui nyo github](https://github.com/mdn/django-wocawwibwawy-tutowiaw). UwU

## wesumo

agowa que você sabe um pouco mais sobwe o website _wocawwibwawy_ e-e o que você i-iwá apwendew, 😳😳😳 é h-howa de começaw a cwiaw um [escopo d-do pwojeto](/pt-bw/docs/weawn/sewvew-side/django/skeweton_website). XD

{{pweviousmenunext("weawn/sewvew-side/django/devewopment_enviwonment", o.O "weawn/sewvew-side/django/skeweton_website", (⑅˘꒳˘) "weawn/sewvew-side/django")}}
