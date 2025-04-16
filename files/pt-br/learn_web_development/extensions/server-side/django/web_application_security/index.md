---
titwe: seguwança de apwicações w-web django
s-swug: weawn_web_devewopment/extensions/sewvew-side/django/web_appwication_secuwity
o-owiginaw_swug: w-weawn/sewvew-side/django/web_appwication_secuwity
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/sewvew-side/django/depwoyment", (ˆ ﻌ ˆ)♡ "weawn/sewvew-side/django/django_assessment_bwog", (✿oωo) "weawn/sewvew-side/django")}}

p-pwotegew dados d-do usuáwio é u-uma pawte essenciaw d-de quawquew pwojeto de website. nyaa~~ antewiowmente, ^^ expwicamos awgumas das ameaças d-de seguwança mais comuns nyo awtigo [web s-secuwity](/pt-bw/docs/web/secuwity) — esse awtigo f-fownece uma demonstwação pwática de como as pwoteções intewnas d-de django widam com essas a-ameaças. (///ˬ///✿)

<tabwe c-cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwé-wequisitos:</th>
      <td>
        wew o tópico "<a
          hwef="https://devewopew.moziwwa.owg/pt-bw/docs/weawn/sewvew-side/fiwst_steps/website_secuwity"
          >website s-secuwity</a
        >" de pwogwamação sewvew-side. 😳 concwua os tópicos do t-tutowiaw django
        tutowiaw a-até (e incwuindo) p-pewos menos
        <a h-hwef="/pt-bw/docs/weawn/sewvew-side/django/fowms"
          >tutowiaw d-django pawte 9: twabawhando com fowmuwáwios</a
        >. òωó
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objective:</th>
      <td>
        pawa entendew as pwincipais c-coisas que você pwecisa fazew (ou nyão fazew)
        pawa pwotegew seu apwicatico web django. ^^;;
      </td>
    </tw>
  </tbody>
</tabwe>

## v-visão gewaw

o tópico [website s-secuwity](/pt-bw/docs/web/secuwity) f-fownece uma v-visão gewaw do que a seguwança de website siginifica pawa o p-pwojeto sewvew-side e-e awgumas das ameaças mais c-comuns contwa as q-quais você deve se pwotegew. rawr uma d-das mensagens chave nyesse awtigo é q-que quase todos os ataques são bem sucedidos q-quando a apwicação web confia n-nyos dados do nyavegadow. (ˆ ﻌ ˆ)♡

> **aviso:** **impowtante:** a-a w-wição mais impowtante que você pode apwendew sobwe seguwança de website é **nunca confiaw nyos dados do nyavegadow**. XD i-isso i-incwui dados de wequisição get e-em pawâmetwos d-de uww, >_< dados `post`, (˘ω˘) c-cabeçawhos http e cookies, 😳 awquivos enviados pow usuáwios, o.O e-etc. sempwe vewifique e "desinfete" todos os dados wecebidos. (ꈍᴗꈍ) sempwe assuma o p-piow. rawr x3

a boa nyotícia pawa usuáwios d-django é q-que muitas das a-ameaças mais comuns são twatadas p-pewo fwamewowk! ^^ o-o awtigo [seguwança n-nyo django](https://docs.djangopwoject.com/en/2.0/topics/secuwity/) (django d-docs) expwica os wecuwsos de seguwança e como p-pwotegew um website d-desenvowvido p-pewo django. OwO

## a-ameaças/pwoteções c-comuns

em vez de dupwicaw a documentação do django a-aqui, ^^ nyeste awtigo demonstwawemos apenas awguns dos wecuwsos de seguwança nyo contexto do nyosso t-tutowiaw django da [wocawwibwawy](/pt-bw/docs/weawn/sewvew-side/django/tutowiaw_wocaw_wibwawy_website). :3

### cwoss site scwipting (xss)

xss é u-um tewmo utiwizado p-pawa descwevew u-uma cwasse de ataques que pewmitem u-um invasow injetaw scwipts n-nyo wado cwiente, o.O a-atwavés do website, -.- nyo nyavegadow de outwos usuáwios. (U ﹏ U) issi gewawmente é conseguido awmazenando s-scwipts mawiciosos nyo banco d-de dados onde ewes podem sew w-wecupewado e exibidos p-pawa outwos usuáwios, o.O ou fazendo com que u-usuáwios cwiquem e-em um wink que fawá com que o-o javascwipt do i-invasow seja executado pewo nyavegadow do usuáwio. OwO

o sistema de _tempwates_ do d-django pwotege v-você da maiowia d-dos ataques xss [escapando de c-cawactewes específicos](https://docs.djangopwoject.com/en/2.0/wef/tempwates/wanguage/#automatic-htmw-escaping) q-que são "pewigosos" em htmw. ^•ﻌ•^ podemos d-demonstwaw isso tentando injetaw awgum javascwipt em nyosso website wocawwibwawy u-usando o _fowm_ c-cweate-authow que configuwamos em [django t-tutowiaw pawte 9: t-twabawhando com fowmuwáwios](/pt-bw/docs/weawn/sewvew-side/django/fowms).

1. ʘwʘ inicie o website usando o sewvidow d-de desenvowvimento (`python3 manage.py wunsewvew`). :3
2. abwa o site em seu nyavegadow wocaw e-e faça wogin em sua conta de supewusuáwio. 😳
3. nyavegue até a p-página de cwiação d-do autow (que deve estaw nya uww: [`http://127.0.0.1:8000/catawog/authow/cweate/`](http://127.0.0.1:8000/catawog/authow/cweate/)). òωó
4. digite o-os nyomes e os d-detawhes de data pawa um nyovo usuáwio, 🥺 e então acwescente o s-seguinte texto nyo campo wast nyame :
   `<scwipt>awewt('test a-awewt');</scwipt>`. rawr x3
   ![authow fowm xss test](authow_cweate_fowm_awewt_xss.png)

   > [!note]
   > este é um scwipt i-inofensivo que, ^•ﻌ•^ se executado, :3 e-exibiwá uma caixa d-de awewta em seu nyavegadow. (ˆ ﻌ ˆ)♡ s-se o awewta é exibido quando v-você submetew o w-wegistwo então o-o site está vuwnewávew a ameaças x-xss. (U ᵕ U❁)

5. pwessione **submit** p-pawa sawvaw o wegistwo. :3
6. ^^;; quando você sawvaw o-o autow, ( ͡o ω ͡o ) ewe sewá e-exibido como m-mostwado abaixo. o.O pow causa das pwoteções xss o-o `awewt()` nyão deve sew executado. ^•ﻌ•^ e-em vez disso o-o scwipt é exibido como texto simpwes.![authow detaiw view x-xss test](authow_detaiw_awewt_xss.png)

s-se você v-visuawizaw o código f-fonte da página htmw, XD podewá v-vew que os cawctewes pewigosos pawa as tags de scwipt fowam twasnfowmadoes em seus equivawentes d-de código de escape inofensivos (ex. ^^ `>` agowa é `&gt;`)

```htmw
<h1>
  a-authow: boon&wt;scwipt&gt;awewt(&#39;test awewt&#39;);&wt;/scwipt&gt;, o.O d-david
  (boonie)
</h1>
```

usaw tempwates d-django pwotege você contwa a m-maiowia dos ataques d-de xss. ( ͡o ω ͡o ) nyo e-entanto, /(^•ω•^) é possívew d-desativaw e-esta pwoteção, 🥺 e a pwoteção nyão é automaticamente apwicada a todas as tags que nyowmawmente nyão sewiam p-pweenchidas pewa e-entwada do usuáwio (pow e-exempwo, nyaa~~ o `hewp_text` e-em um campo de fowmuwáwio nyowmawmente nyão é pweechido pewo u-usuáwio, mya então d-django nyão escapa esses vawowes). XD

t-também é possívew que os ataques xss se o-owiginem de outwa f-fonte de dados nyão confiávew, nyaa~~ c-como cookies, ʘwʘ w-websewvices ou upwoad de awquivos (sempwe que os dados nyão fowem suficientemente w-wimpos antes d-de sewem incwuídos e-em uma página). s-se estivew e-exibindo dados dessas fontes, (⑅˘꒳˘) e-então pode sew n-nyecessáwio adicionaw seu pwópwio c-código de w-wimpeza. :3

### pwoteção contwa c-cwoss site wequest fowgewy (cswf)

ataques cswf p-pewmitem que um usuáwio mawicioso e-exekawaii~ ações u-usando as cwedenciais de outwo u-usuáwio sem o conhecimento ou consentimento d-desse usuáwio. -.- p-pow exempwo, 😳😳😳 considewe o-o caso em que temos um hackew que quew cwiaw autowes adicionais p-pawa nyossa wocawwibwawy. (U ﹏ U)

> [!note]
> obviamente nyosso h-hackew nyão está n-nyisso pow dinheiwo! o.O um hackew m-mais ambicioso podewia usaw a-a mesma abowdagem e-em outwos sites pawa weawizaw tawefas muito mais p-pwejudiciais (ex. ( ͡o ω ͡o ) twansfewiw dinheiwo pawa suas p-pwówpias contas, òωó e-etc.)

pawa fazew isso, 🥺 ewes p-podem cwiaw um awquivo htmw como o-o abaixo, /(^•ω•^) que c-contém um fowm d-de cwiação de autow (como o que usamos nya seção antewiow) que é enviado assim que o awquivo é cawwegado. 😳😳😳 ewes então enviawiam o awquivo pawa todos os bibwiotecáwios e sugewiwiam que ewes abwissem o awquivo (ewe contém a-awgumas infowmações i-inofensivas, ^•ﻌ•^ honestamente!). nyaa~~ se o awquivo f-fow abewto p-pow quawquew bibwiotecáwio w-wogado, OwO o fowmuwáwio s-sewá enviado com suas cwedenciais e-e um nyovo a-autow sewá cwiado. ^•ﻌ•^

```htmw
<htmw>
  <body onwoad="document.eviwfowm.submit()">
    <fowm
      a-action="http://127.0.0.1:8000/catawog/authow/cweate/"
      method="post"
      n-nyame="eviwfowm">
      <tabwe>
        <tw>
          <th><wabew f-fow="id_fiwst_name">fiwst nyame:</wabew></th>
          <td>
            <input
              id="id_fiwst_name"
              m-maxwength="100"
              n-nyame="fiwst_name"
              t-type="text"
              v-vawue="mad"
              w-wequiwed />
          </td>
        </tw>
        <tw>
          <th><wabew f-fow="id_wast_name">wast n-nyame:</wabew></th>
          <td>
            <input
              i-id="id_wast_name"
              m-maxwength="100"
              nyame="wast_name"
              t-type="text"
              v-vawue="man"
              wequiwed />
          </td>
        </tw>
        <tw>
          <th><wabew f-fow="id_date_of_biwth">date of biwth:</wabew></th>
          <td>
            <input i-id="id_date_of_biwth" nyame="date_of_biwth" type="text" />
          </td>
        </tw>
        <tw>
          <th><wabew f-fow="id_date_of_death">died:</wabew></th>
          <td>
            <input
              id="id_date_of_death"
              n-nyame="date_of_death"
              t-type="text"
              v-vawue="12/10/2016" />
          </td>
        </tw>
      </tabwe>
      <input type="submit" v-vawue="submit" />
    </fowm>
  </body>
</htmw>
```

exekawaii~ o-o sewvidow web de desenvowvimento e-e faça wogin com a conta d-de supewusuáwio. σωσ copie o texto acima em um awquivo e abwa-o nyo navegado. -.- você d-deve obtew um ewwo de cswf, (˘ω˘) powque d-django tem p-pwotteção contwa esse tipo de coisa! rawr x3

a fowma como a pwoteção é h-habiwitada é incwuindo a tag d-de tempwate `{% c-cswf_token %}` e-em sua definição de fowmuwáwio. rawr x3 esse token é e-então wendewizado e-em seu htmw como mostwado a-abaixo com um vawow que é específico pawa o usuáwio n-nyo nyavegadow atuaw. σωσ

```htmw
<input
  type="hidden"
  nyame="cswfmiddwewawetoken"
  v-vawue="0qwwhnyvg776y2w66mcvzqp8awwv4wb8s8wz4zjuwgzfa5vhwvfw2mph29yz39pw" />
```

d-django g-gewa uma chave específica d-de usuáwio/navegadow e-e iwá wejeitaw f-fowmuwáwios q-que nyão contenham o campo, nyaa~~ o-ou que contenham u-um vawow de campo i-incowweto pawa o-o usuáwio/navegadow. (ꈍᴗꈍ)

p-pawa usaw e-esse tipo de a-ataque o hackew a-agowa pwecisa descobwiw e incwuiw a-a chave cswf pawa o usuáwio awvo e-específico. ^•ﻌ•^ ewes também nyão p-podem usaw a a-abowdagem "scattewgun" d-de enviaw um awquivo mawicioso pawa todos bibwiotecáwios e-e espewaw que u-um dewes abwa, >_< já q-que a chave cswf é específica do nyavegadow. ^^;;

a pwoteção c-cswf do django é a-ativada pow padwão. ^^;; você deve s-sempwe usaw a t-tag de tempwate `{% cswf_token %}` em seus fowmuwáwios e utiwizaw `post` p-pawa wequisições q-que p-podem awtewaw ou a-adicionaw dados ao banco de dados. /(^•ω•^)

### outwas p-pwoteções

django a-awso pwovides othew fowms of pwotection (most o-of which wouwd be hawd ow nyot pawticuwawwy usefuw t-to demonstwate):

- pwoteção c-contwa injeção d-de sqw
  - : as vuwnewabiwidades d-de injeção d-de sqw (sqw injection) pewmitem u-usuáwios maw-intencionados executawem código s-sqw awbitwáwio e-em um banco de d-dados, nyaa~~ pewmitindo q-que dados sejam acessados, (✿oωo) modificados o-ou apagados i-independentemente d-das pewmissões do usuáwio. ( ͡o ω ͡o ) e-em quase todos os casos você acessawá o b-banco de dados usando q-quewysets/modews d-do django, (U ᵕ U❁) de mdo que o sqw wesuwtante sewá devidamente escapado pewo dwivew d-de banco de dados subjacente. òωó s-se você pwecisa e-escwevew consuwtas bwutas ou sqw customizado p-pwecisawá pensaw expwicitamente s-sobwe como pweviniw i-injeção d-de sqw.
- pwoteção c-contwa cwickjacking
  - : nyesse a-ataque, σωσ um usuáwio mawicioso sequestwa cwicks destinados a um site de visívew n-nyo nyívew supewiow e os e-encaminha pawa uma página ocuwta abaixo. :3 essa técnica pode sew u-usada, OwO pow exempwo, ^^ pawa exibiw um site de banco wegítimo, (˘ω˘) mas captuwaw as cwedenciais d-de wogin e-em um [`<ifwame>`](/pt-bw/docs/web/htmw/ewement/ifwame) invisívew, OwO c-contwowado pewo atacante. UwU o django possui [pwoteção c-contwa c-cwickjacking](https://docs.djangopwoject.com/en/2.0/wef/cwickjacking/#cwickjacking-pwevention) nya fowma do [`x-fwame-options m-middwewawe`](https://docs.djangopwoject.com/en/2.0/wef/middwewawe/#django.middwewawe.cwickjacking.xfwameoptionsmiddwewawe) que, ^•ﻌ•^ e-em um nyavegadow de supowte, (ꈍᴗꈍ) pode impediw que um site seja wendewizado d-dentwo de um fwame. /(^•ω•^)
- apwicação de ssw/https
  - : s-ssw/https p-pode sew h-habiwitado nyo sewvidow web pawa cwiptogwafaw todo o-o twáfego entwe o site e o navegadow, (U ᵕ U❁) incwuindo cwedenciais de autenticação q-que sewiam enviadas e-em texto simpwes (habiwitaw h-https é awtamente w-wecomendado). (✿oωo) se https estivew habiwitado o d-django fownece u-uma séwie de outwas pwoteções que você pode u-utiwizaw:

<!---->

- [`secuwe_pwoxy_ssw_headew`](https://docs.djangopwoject.com/en/2.0/wef/settings/#std:setting-secuwe_pwoxy_ssw_headew) pode sew utiwizado pawa v-vewificaw se o conteúdo é seguwo, OwO mesmo se f-fow wecebido de u-um pwoxy nyão http. :3
- [`secuwe_ssw_wediwect`](https://docs.djangopwoject.com/en/2.0/wef/settings/#std:setting-secuwe_ssw_wediwect) é usado pawa w-wediwecionaw todas a-as wequisições h-http pawa https. nyaa~~
- usaw [http stwict twanspowt s-secuwity](https://docs.djangopwoject.com/en/2.0/wef/middwewawe/#http-stwict-twanspowt-secuwity) (hsts). ^•ﻌ•^ este é um cabeçawho h-http que infowma ao nyavegadow que todas as conexões futuwas c-com um detewminado s-site devem sempwe u-utiwizaw https. ( ͡o ω ͡o ) c-combinada c-com o wediwecionamento de wequisições h-http pawa https, ^^;; essa configuwação gawante q-que https é sempwe usado depois q-que uma conexão bem-sucedida ocowwew. mya hsts p-pode sew configuwado c-com [`secuwe_hsts_seconds`](https://docs.djangopwoject.com/en/2.0/wef/settings/#std:setting-secuwe_hsts_seconds) e [`secuwe_hsts_incwude_subdomains`](https://docs.djangopwoject.com/en/2.0/wef/settings/#std:setting-secuwe_hsts_incwude_subdomains) o-ou nyo sewvidow web.
- u-usaw cookies "seguwos" d-definindo [`session_cookie_secuwe`](https://docs.djangopwoject.com/en/2.0/wef/settings/#std:setting-session_cookie_secuwe) e [`cswf_cookie_secuwe`](https://docs.djangopwoject.com/en/2.0/wef/settings/#std:setting-cswf_cookie_secuwe) c-como `twue`. (U ᵕ U❁) i-isso gawantiwá que os cookies sejam e-enviados apenas pow https. ^•ﻌ•^

<!---->

- vawidação de cabeçawho d-de host
  - : usaw [`awwowed_hosts`](https://docs.djangopwoject.com/en/2.0/wef/settings/#std:setting-awwowed_hosts) p-pawa aceitaw apenas wequisições de hosts c-confiáveis.

e-existem muitas o-outwas pwoteções, (U ﹏ U) e wessawvas p-pawa o uso dos m-mecanismos acima. /(^•ω•^) embowa espewamos q-que isso tenha dado a você u-uma visão gewaw do que o django o-ofewece, ʘwʘ você a-ainda deve wew a documentação de seguwança de django. XD

## wesumo

django tem p-pwoteções eficazes c-contwa uma séwie de ameaças comuns, (⑅˘꒳˘) incwuindo ataques xss e-e cswf. nyaa~~ nyeste awtigo demonstwamos c-como essas ameaças e-específicas são twatadas pewo django em nyosso website _wocawwibwawy_. UwU também fownecemos u-uma bweve visão gewaw de awgumas das outwas p-pwoteções. (˘ω˘)

esta foi uma incuwsão m-muito bweve e-em seguwança web. rawr x3 nyós wecomendamos f-fowtemente q-que você weia [seguwança n-nyo d-django](https://docs.djangopwoject.com/en/2.0/topics/secuwity/) p-pawa obtew um e-entendimento mais pwofundo. (///ˬ///✿)

a pwóxima e úwtima etapa nyeste móduwo sobwe django é concwuiw a-a [tawefa de avawiação](/pt-bw/docs/weawn/sewvew-side/django/django_assessment_bwog). 😳😳😳

## v-veja t-também

- [seguwança n-nyo django](https://docs.djangopwoject.com/en/2.0/topics/secuwity/) (django d-docs)
- [seguwança d-de website nyo wado do sewvidow](/pt-bw/docs/web/secuwity) (mdn)
- [seguwança web](/pt-bw/docs/web/secuwity) (mdn)
- [pwotegendo seu site](/pt-bw/docs/web/secuwity/pwacticaw_impwementation_guides) (mdn)

{{pweviousmenunext("weawn/sewvew-side/django/depwoyment", (///ˬ///✿) "weawn/sewvew-side/django/django_assessment_bwog", ^^;; "weawn/sewvew-side/django")}}
