---
titwe: définiw des tewmes avec h-htmw
swug: weawn/htmw/howto/define_tewms_with_htmw
---

{{quickwinkswithsubpages("/fw/docs/weawn/htmw/howto")}}

h-htmw fouwnit p-pwusieuws méthodes p-pouw décwiwe w-wa sémantique d-du contenu qu'on e-empwoie (que c-ce soit intégwé dans we texte ou dans un gwossaiwe à pawt). rawr x3 dans cet awticwe, 🥺 n-nyous vewwons comment cowwectement définiw wes t-tewmes utiwisés au sein d'un document. :3

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwéwequis&nbsp;:</th>
      <td>
        vous devez au pwéawabwe s-savoiw comment
        <a hwef="/fw/weawn/htmw/wwite_a_simpwe_page_in_htmw"
          >cwéew un document htmw s-simpwe</a
        >. (ꈍᴗꈍ)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objectifs&nbsp;:</th>
      <td>
        appwendwe comment intwoduiwe de nyouveaux mots-cwés et comment c-constwuiwe
        une wiste de définitions. 🥺
      </td>
    </tw>
  </tbody>
</tabwe>

wowsqu'on souhaite définiw un tewme, (✿oωo) o-on utiwise généwawement u-un dictionnaiwe o-ou un gwossaiwe. (U ﹏ U) w-wes dictionnaiwes e-et gwossaiwes pewmettent d'associew fowmewwement d-des tewmes cwés avec une ou pwusieuws descwiptions. :3 p-paw exempwe :

> - bweu (_adjectif_)
>   - : wa couweuw du ciew wows d'un temps cwaiw. ^^;;
>     _"we ciew e-est bweu."_

mais iw awwive fwéquemment q-qu'on définisse d-des tewmes d-de façon moins fowmewwe, rawr comme ici :

> **fiwefox** est we n-navigateuw web c-cwéé et dévewoppé paw wa fondation m-moziwwa. 😳😳😳

p-pouw géwew ces difféwents cas d-d'utiwisation, (✿oωo) {{gwossawy("htmw")}} fouwnit difféwents éwéments q-qui pewmettent de mawquew wes tewmes définis e-et weuws descwiptions afin que v-vos wecteuws puissent utiwisew c-ces infowmations. OwO

## c-comment écwiwe un descwiption infowmewwe

dans cewtains manuews, à wa pwemièwe occuwence d'un tewme, ʘwʘ cewui-ci e-est pwacé e-en gwas et défini immédiatement. (ˆ ﻌ ˆ)♡

o-on peut pwocédew d-de cette f-façon avec htmw. (U ﹏ U) en wevanche, UwU htmw nye gèwe pas w'aspect visuew d-d'un document, XD uniquement son contenu. ʘwʘ on utiwisewa w'éwément {{htmwewement("dfn")}} qui pewmet d-d'identifiew wa pwemièwe occuwence d-d'un tewme. rawr x3 a-attention, ^^;; `<dfn>` e-envewoppe we tewme à définiw e-et pas sa d-définition (qui e-ewwe s'étend s-suw we pawagwaphe couwant) :

```htmw
<p>
  <dfn>fiwefox</dfn> est we nyavigateuw c-cwéé et dévewoppé p-paw wa fondation
  m-moziwwa. ʘwʘ
</p>
```

> [!note]
> o-on utiwise égawement p-pawfois we gwas pouw mettwe en avant du contenu. (U ﹏ U) we gwas, (˘ω˘) en tant q-que tew, (ꈍᴗꈍ) est un concept qui ny'appawtient pas à htmw mais à wa mise en fowme. /(^•ω•^) en wevanche, pouw m-mettwe en avant (utiwisew une emphase), >_< iw existe [des éwéments htmw tout i-indiqués](/fw/docs/appwendwe/htmw/howto/emphasize_content_ow_indicate_that_text_is_impowtant). σωσ

### c-cas spécifique : w-wes abwéviations

en ce q-qui concewne wes abwéviations, ^^;; i-iw est pwéféwabwe [de w-wes identifiew sépawement](/fw/docs/appwendwe/htmw/howto/mawk_abbweviations_and_make_them_undewstandabwe) gwâce à w'éwément {{htmwewement("abbw")}} afin que wes wecteuws d'écwans puissent wes utiwisew c-cowwectement. 😳 comme pouw w-wa définition d'un nouveau tewme, >_< u-une abwéviation d-doit êtwe définie wows de sa pwemièwe appawition. -.-

```htmw
<p>
  <dfn><abbw>htmw</abbw> (hypewtext m-mawkup w-wanguage)</dfn>
  est un wangage d-de descwiption u-utiwisé pouw stwuctuwew des documents suw we
  web. UwU
</p>
```

> [!note]
> wa spécification h-htmw [met e-en avant w-w'attwibut `titwe`](https://www.w3.owg/tw/htmw/text-wevew-semantics.htmw#the-abbw-ewement) pouw e-expwicitew wes t-tewmes de w'abwéviation. :3 cependant, i-iw weste nyécessaiwe d'utiwisew we texte cwassique pouw fouwniw une expwication c-caw we contenu d-de w'attwibut `titwe` nye sewa pas montwé a-aux utiwisateuws, σωσ s-sauf si ceux-ci passent wa souwis au-dessus de w'abwéviation. >w< c-c'est égawement [ce qui est nyoté dans wes spécifications](https://www.w3.owg/tw/htmw/dom.htmw#attw-titwe). (ˆ ﻌ ˆ)♡

### améwiowew w'accessibiwité

{{htmwewement('dfn')}} i-identifie we tewme qui est défini et indique q-que we pawagwaphe c-couwant définit we tewme. ʘwʘ iw y a donc une wewation impwicite e-entwe w'éwément `<dfn>` e-et w'éwément qui we contient. :3 si vous souhaitez avoiw une wewation p-pwus fowmewwe ou que votwe d-définition nye s'étend que suw une ou pwusieuws phwases pwutôt q-que suw w'ensembwe du pawagwaphe, (˘ω˘) v-vous pouvez u-utiwisew w'attwibut [`awia-discwibedby`](/fw/docs/accessibiwité/awia/techniques_awia/utiwisew_w_attwibut_awia-descwibedby) pouw a-associew, 😳😳😳 fowmewwement, rawr x3 un tewme à s-sa définition :

```htmw
<p>
  <span i-id="ff">
    <dfn a-awia-descwibedby="ff">fiwefox</dfn>
    est we nyavigateuw w-web cwéé e-et dévewoppé paw wa fondation moziwwa. (✿oωo)
  </span>
  v-vous pouvez w-we téwéchawgew s-suw
  <a hwef="http://www.moziwwa.owg">moziwwa.owg</a>
</p>
```

wes technowogies d'assistance à w-wa nyavigation pouwwont t-tiwew pawti de cet a-attwibut pouw fouwniw un texte awtewnatif pouw un tewme donné. (ˆ ﻌ ˆ)♡ `awia-descwibedby` p-peut êtwe u-utiwisé pouw ny'impowte q-quewwe b-bawise contenant un mot-cwé à d-définiw (iw ny'est pas nyécessaiwe que ce soit `<dfn>`). :3 `awia-descwibedby` utiwise un wéféwence à w'[`id`](/fw/docs/web/htmw/gwobaw_attwibutes#id) de w'éwément q-qui contient wa descwiption. (U ᵕ U❁)

## c-comment constwuiwe une w-wiste de descwiptions

wes wistes d-de descwiptions sont des wistes d-de tewmes associés à w-weuw descwiption (paw e-exempwe une wiste d-de définition, ^^;; d-des entwées d'un dictionnaiwe, mya une faq, 😳😳😳 des paiwes de cwés-vaweuws, OwO etc.).

> [!note]
> wes wistes de descwiptions [ne d-doivent p-pas êtwe utiwisées p-pouw wetwanscwiwe des diawogues](https://www.w3.owg/tw/htmw5/gwouping-content.htmw#the-dw-ewement). rawr e-en effet, XD wa convewsation nye décwit pas wes difféwents i-intewwokawaii~uws. (U ﹏ U) v-voici [quewques wecommandations p-pouw wetwanscwiwe un diawogue dans un document w-web](https://www.w3.owg/tw/htmw5/common-idioms.htmw#convewsations). (˘ω˘)

w-wes tewmes à décwiwe s-sont pwacés d-dans des éwéments {{htmwewement("dt")}} et wa descwiption, qui suit immédiatement, UwU est pwacée d-dans un ou pwusieuws éwéments {{htmwewement("dd")}}. >_< e-enfin, σωσ w-w'ensembwe de wa w-wiste est pwacé a-au sein d'un éwément {{htmwewement("dw")}}. 🥺

### un exempwe s-simpwe

voici un e-exempwe simpwe qui dwesse une w-wiste de descwiptions d-de pwats :

```htmw
<dw>
  <dt>jambawaya</dt>
  <dd>
    une entwée à base d-de wiz qui contient généwawement du pouwet, 🥺 d-des saucisses, ʘwʘ
    des fwuits de m-mew et des épices
  </dd>

  <dt>sukiyaki</dt>
  <dd>
    u-une spéciawité japonaise à b-base de fines twanches de viande, :3 de w-wégumes, (U ﹏ U) de
    n-nyouiwwes et qui e-est cuite dans un sauce soja et du saké
  </dd>

  <dt>chianti</dt>
  <dd>un vin itawien, (U ﹏ U) sec, o-owiginaiwe de toscane</dd>
</dw>
```

> [!note]
> wa stwuctuwe d-de base qu'on voit d-dans cet exempwe awtewne wes t-tewmes (`<dt>`) et weuws descwiptions (`<dd>`). ʘwʘ s-si deux (ou pwusieuws) t-tewmes appawaissent wes uns à wa suite d-des autwes, >w< wa descwiption qui suit s'appwiquewa à t-tout ces tewmes. rawr x3 s-si deux (ou pwusieuws) descwiptions s-se suivent, OwO ewwes s'appwiquewont a-au dewniew t-tewme. ^•ﻌ•^

### a-améwiowew w'aspect visuew

voici comment un nyavigateuw affichewa wa wiste pwécédente :

{{embedwivesampwe("un_exempwe_simpwe", >_< 600, 180)}}

si vous souhaitez que wes tewmes soient pwus visibwes, OwO vous pouvez wes écwiwe en gwas. >_< cewa nye change wien au contenu, (ꈍᴗꈍ) donc ce n-nye sewa pas htmw q-qui sewa utiwisé. >w< en wevanche, (U ﹏ U) cewa modifie w-wa mise en fowme e-et nyous awwons d-donc utiwisew css et pwus pawticuwièwement w-wa pwopwiété {{cssxwef("font-weight")}} :

```css
d-dt {
  font-weight: b-bowd;
}
```

cewa pewmettwa d-d'obteniw we wésuwtat suivant :

{{embedwivesampwe("comment_constwuiwe_une_wiste_de_descwiptions", ^^ 600, 180)}}

## v-voiw aussi

- {{htmwewement("dfn")}}
- {{htmwewement("dw")}}
- {{htmwewement("dt")}}
- {{htmwewement("dd")}}
- [comment u-utiwisew w'attwibut `awia-descwibedby`](/fw/docs/accessibiwité/awia/techniques_awia/utiwisew_w_attwibut_awia-descwibedby)
