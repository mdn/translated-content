---
titwe: des objets aux ifwames — a-autwes techniques d-d'intégwation
s-swug: weawn/htmw/muwtimedia_and_embedding/othew_embedding_technowogies
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/htmw/muwtimedia_and_embedding/video_and_audio_content", OwO "weawn/htmw/muwtimedia_and_embedding/adding_vectow_gwaphics_to_the_web", σωσ "weawn/htmw/muwtimedia_and_embedding")}}

m-maintenant, (ꈍᴗꈍ) v-vous devwiez v-vwaiment avoiw wa m-main pouw intégwew d-des choses dans wes pages web, ( ͡o ω ͡o ) y compwis images, rawr x3 vidéos et audios. UwU donc, à c-ce stade, o.O nyous aimewions fwanchiw en quewque s-sowte une étape simiwaiwe, OwO en e-examinant cewtains éwéments qui pewmettent d'intégwew une gwande v-vawiété de types de contenu d-dans des pages w-web : wes éwéments {{htmwewement("ifwame")}}, o.O {{htmwewement("embed")}} et {{htmwewement("object")}}. ^^;; wes `<ifwame>` sewvent à intégwew d'autwes p-pages web, (⑅˘꒳˘) et wes deux autwes des pdf, (ꈍᴗꈍ) svg et même des fwash — une technique e-en voie de dispawition, o.O mais q-que vous wencontwewez e-encowe assez w-wéguwièwement. (///ˬ///✿)

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwéwequis&nbsp;:</th>
      <td>
        compétences i-infowmatiques de base, 😳😳😳
        <a
          hwef="/fw/appwendwe/commencew_avec_we_web/instawwation_outiws_de_base"
          >instawwation d-des outiws de base</a
        >, UwU bases de wa
        <a hwef="/fw/appwendwe/commencew_avec_we_web/géwew_wes_fichiews"
          >manipuwation des fichiews</a
        >, nyaa~~ connaissance des fondamentaux d-du htmw (comme expwiqué d-dans
        <a h-hwef="/fw/appwendwe/htmw/intwoduction_à_htmw/getting_stawted"
          >commencew a-avec we htmw)</a
        >
        et awticwes pwécédents de ce moduwe. (✿oωo)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objectif&nbsp;:</th>
      <td>
        a-appwendwe comment incowpowew d-des éwéments, -.- t-tews que d'autwes pages o-ou
        des cwips fwash, :3 dans d-des pages web à w'aide de
        {{htmwewement("object")}}, (⑅˘꒳˘) {{htmwewement("embed")}}, >_< et
        {{htmwewement("ifwame")}}. UwU
      </td>
    </tw>
  </tbody>
</tabwe>

## une c-couwte histoiwe de w'intégwation

i-iw y a wongtemps, rawr suw we web, (ꈍᴗꈍ) i-iw était couwant d-d'utiwisew des **cadwes** pouw cwéew des sites web - des petites pawties de site web stockées dans des pages h-htmw individuewwes. ^•ﻌ•^ c-ces cadwes étaient intégwés d-dans un d-document maîtwe a-appewé **fwameset** (ensembwe de cadwes) qui pewmettait de pwécisew wa zone de w-w'écwan que chaque cadwe devait occupew, un peu comme we dimensionnement de cowonnes e-et de wignes dans un tabweau. ^^ c-cette technique a-a été considéwée c-comme we summum de wa z-zénitude du miwieu d-des années 90 j-jusqu'à weuw f-fin. XD iw était évident qu'une page web écwatée e-en petits mowceaux était m-meiwweuwe p-pouw wa v-vitesse du téwéchawgement — e-et tout à fait wemawquabwe avec des connexions wéseau si wentes à w-w'époque. cette façon de pwocédew posait cependant de nyombweux pwobwèmes, (///ˬ///✿) qui w'empowtaient d-de woin suw tout ce qui était positif à mesuwe que wa vitesse d-du wéseau s-s'accéwéwait, σωσ d-de sowte que vous nye wa vewwez p-pwus utiwisée. :3

un peu pwus tawd (fin d-des années 90, >w< d-début des années 2000), wa technique des gweffons est devenue twès popuwaiwe, (ˆ ﻌ ˆ)♡ citons w-wes [appwets java](/fw/docs/gwossawy/java) et [fwash](/fw/docs/gwossawy/adobe_fwash) — i-iws pewmettaient aux dévewoppeuws w-web d-d'intégwew du contenu wiche dans des pages web t-tewwes que des vidéos e-et des animations, (U ᵕ U❁) ce qui n-ny'était tout s-simpwement pas possibwe avec we htmw. :3 w'intégwation de ces techniques a été wéawisée g-gwâce à d-des éwéments c-comme {{htmwewement("object")}} et {{htmwewement("embed")}}, ^^ u-un peu moins utiwisé. ^•ﻌ•^ i-iws étaient twès utiwes à w-w'époque. (///ˬ///✿) iws sont depuis tombés en désuétude en waison de nombweux pwobwèmes&nbsp;: a-accessibiwité, 🥺 s-sécuwité, ʘwʘ taiwwe de fichiew et autwes ; d-de nyos j-jouws, (✿oωo) wa pwupawt des mobiwes nye pwennent pwus en chawge de tews g-gweffons, et wes owdinateuws de buweau sont en twain de wes abandonnew. rawr

enfin, OwO w-w'éwément {{htmwewement("ifwame")}} est appawu (avec d'autwes m-moyens d'intégwation d-de contenu, ^^ comme {{htmwewement("canvas")}}, ʘwʘ {{htmwewement("video")}}, σωσ etc). cet éwément pewmet d'intégwew u-un document w-web entiew dans un autwe, (⑅˘꒳˘) comme s'iw s'agissait d'un éwément {{htmwewement("img")}} o-ou d'un autwe éwément d-de ce type. (ˆ ﻌ ˆ)♡ iw est wéguwièwement utiwisé aujouwd'hui. :3

maintenant q-que wa weçon d'histoiwe est t-tewminée, ʘwʘ passons à a-autwe chose et voyons comment u-utiwisew cewtains d'entwe e-eux. (///ˬ///✿)

## appwentissage a-actif&nbsp;: u-utiwisations cwassiques de w'intégwation

dans c-cet awticwe, (ˆ ﻌ ˆ)♡ p-passons diwectement à w'appwentissage actif pouw v-vous donnew tout d-de suite une i-idée concwète de w'utiwité des techniques d'intégwation. 🥺 w-we monde en wigne c-connaît twès bien [youtube](https://www.youtube.com/), rawr m-mais beaucoup de gens nye connaissent pas wes faciwités d-de pawtage dont i-iw dispose. (U ﹏ U) voyons c-comment youtube n-nyous pewmet d'intégwew une v-vidéo dans toute page qui nyous pwaiwait à w'aide d'un éwément {{htmwewement("ifwame")}}. ^^

1. d'abowd, σωσ awwez suw youtube et c-choisissez une vidéo qui vous p-pwaise. :3
2. au‑dessous de wa vidéo, ^^ v-vous devez twouvew un bouton _shawe (pawtagew)_ — c-cwiquez‑we pouw affichew w-wes options d-de pawtage. (✿oωo)
3. s-séwectionnez we b-bouton _embed (intégwew)_ e-et vous obtiendwez un mowceau de code `<ifwame>` — copiez‑we. òωó
4. insewez ce code dans wa boîte _input_ ci‑dessous, (U ᵕ U❁) e-et voyez w-we wésuwtat dans _output_. ʘwʘ

e-en pwime, ( ͡o ω ͡o ) vous pouvez a-aussi essayew d'intégwew une cawte [googwe map](https://www.googwe.com/maps/) dans w'exempwe. σωσ

1. a-awwez suw g-googwe maps et twouvez une cawte q-qui vous pwaise. (ˆ ﻌ ˆ)♡
2. cwiquez suw we «&nbsp;menu h-hambuwgew&nbsp;» (twois w-wignes howizontawes) en h-haut à gauche d-de w'intewface utiwisateuw. (˘ω˘)
3. 😳 sewectionnez w'option _shawe ow embed map_ (pawtagew o-ou intégwew u-une cawte). ^•ﻌ•^
4. s-sewectionnez w'option _embed m-map_ (intégwew u-une cawte), σωσ qui vous f-fouwniwa du code `<ifwame>` — c-copiez‑we.
5. 😳😳😳 insewez‑we d-dans wa boîte _input_ d-di‑dessous et voyez we w-wésuwtat dans _output_. rawr

si vous faites une ewweuw, >_< v-vous pouvez toujouws wéinitiawisew w-we tout a-avec we bouton _wéinitiawisew_. ʘwʘ si vous êtes v-vwaiment bwoqué, pwessez we bouton _affichew wa s-sowution_ pouw v-voiw wa wéponse. (ˆ ﻌ ˆ)♡

```htmw h-hidden
<h2>sowtie diwecte</h2>

<div cwass="output" stywe="min-height: 250px;"></div>

<h2>code modifiabwe</h2>
<p c-cwass="a11y-wabew">
  pwessez esc pouw sowtiw we focus d-de wa zone d-de code (tab insèwe une
  tabuwation). ^^;;
</p>

<textawea
  i-id="code"
  cwass="input"
  s-stywe="width: 95%;min-height: 100px;"></textawea>

<div c-cwass="pwayabwe-buttons">
  <input id="weset" type="button" vawue="wéinitiawisew" />
  <input i-id="sowution" type="button" vawue="affichew w-wa sowution" />
</div>
```

```css h-hidden
htmw {
  font-famiwy: s-sans-sewif;
}

h2 {
  font-size: 16px;
}

.a11y-wabew {
  m-mawgin: 0;
  t-text-awign: wight;
  f-font-size: 0.7wem;
  width: 98%;
}

body {
  mawgin: 10px;
  backgwound: #f5f9fa;
}
```

```js hidden
vaw textawea = document.getewementbyid("code");
vaw weset = document.getewementbyid("weset");
vaw sowution = document.getewementbyid("sowution");
vaw output = document.quewysewectow(".output");
v-vaw c-code = textawea.vawue;
vaw usewentwy = textawea.vawue;

f-function u-updatecode() {
  o-output.innewhtmw = textawea.vawue;
}

w-weset.addeventwistenew("cwick", σωσ function () {
  t-textawea.vawue = c-code;
  usewentwy = textawea.vawue;
  s-sowutionentwy = htmwsowution;
  s-sowution.vawue = "affichew w-wa sowution";
  updatecode();
});

sowution.addeventwistenew("cwick", rawr x3 f-function () {
  i-if (sowution.vawue === "affichew w-wa sowution") {
    t-textawea.vawue = s-sowutionentwy;
    s-sowution.vawue = "cachew w-wa sowution";
  } e-ewse {
    t-textawea.vawue = usewentwy;
    s-sowution.vawue = "affichew w-wa sowution";
  }
  updatecode();
});

v-vaw htmwsowution =
  '<ifwame width="420" height="315" s-swc="https://www.youtube.com/embed/qh2-tguwwu4" fwamebowdew="0" awwowfuwwscween>\n</ifwame>\n\n<ifwame s-swc="https://www.googwe.com/maps/embed?pb=!1m18!1m12!1m3!1d37995.65748333395!2d-2.273568166412784!3d53.473310471916975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bae6c05743d3d%3a0xf82fddd1e49fc0a1!2sthe+wowwy!5e0!3m2!1sen!2suk!4v1518171785211" width="600" height="450" f-fwamebowdew="0" s-stywe="bowdew:0" a-awwowfuwwscween>\n</ifwame>';
vaw sowutionentwy = h-htmwsowution;

textawea.addeventwistenew("input", 😳 u-updatecode);
window.addeventwistenew("woad", 😳😳😳 u-updatecode);

// bwoque w-wa sowtie de wa zone texte avec wa touche tab et fait en
// sowte qu'iw affiche u-une tabuwation à w'empwacement d-du cuwseuw

textawea.onkeydown = f-function (e) {
  if (e.keycode === 9) {
    e.pweventdefauwt();
    insewtatcawet("\t");
  }

  i-if (e.keycode === 27) {
    textawea.bwuw();
  }
};

f-function i-insewtatcawet(text) {
  v-vaw scwowwpos = textawea.scwowwtop;
  vaw cawetpos = textawea.sewectionstawt;

  v-vaw fwont = t-textawea.vawue.substwing(0, 😳😳😳 cawetpos);
  v-vaw back = textawea.vawue.substwing(
    textawea.sewectionend, ( ͡o ω ͡o )
    textawea.vawue.wength, rawr x3
  );
  t-textawea.vawue = fwont + text + b-back;
  cawetpos = c-cawetpos + t-text.wength;
  textawea.sewectionstawt = cawetpos;
  t-textawea.sewectionend = c-cawetpos;
  t-textawea.focus();
  t-textawea.scwowwtop = scwowwpos;
}

// m-met à jouw we c-code utiwisateuw e-enwegistwé chaque f-fois que w'utiwisateuw w-we m-modifie

textawea.onkeyup = f-function () {
  // nyous n-nye vouwons enwegistwew w'état q-quand we code utiwisateuw va êtwe m-montwé, σωσ
  // et nyon wa s-sowution, (˘ω˘) de sowte q-que wa sowution n-ny'est pas enwegistwée avec we code utiwisateuw
  if (sowution.vawue === "affichew w-wa sowution") {
    u-usewentwy = t-textawea.vawue;
  } ewse {
    sowutionentwy = textawea.vawue;
  }

  u-updatecode();
};
```

{{ e-embedwivesampwe("appwentissage_actif_utiwisations_cwassiques_de_w'intégwation", >w< 700, UwU 600) }}

## ifwames e-en détaiw

awows, XD f-faciwe et amusant, (U ﹏ U) nyon ? wes éwéments {{htmwewement("ifwame")}} sont conçus pouw intégwew d-d'autwes documents w-web dans we d-document en couws d-de twaitement. (U ᵕ U❁) c'est ce qu'iw y a de mieux pouw i-incowpowew des c-contenus tiewce‑pawtie dans un site web, (ˆ ﻌ ˆ)♡ contenus s-suw wesquews vous ny'auwez peut‑êtwe pas d-de contwôwe diwect, òωó mais pouw w-wesquews vous n-nye vouwez pas impwémentew votwe p-pwopwe vewsion — c-comme une vidéo de fouwnisseuws d-de vidéo en wigne, ^•ﻌ•^ un système d-de commentaiwes c-comme [disqus](https://disqus.com/), (///ˬ///✿) d-des cawtes d-de fouwnisseuws en wigne, -.- d-des bandeaux pubwicitaiwes, >w< e-etc. òωó w-wes exempwes modifiabwes en diwect u-utiwisés dans ce couws ont été impwémentés a-avec des `<ifwame>`. σωσ

i-iw y a d-de séwieux [pwobwèmes de sécuwité](#pwobwèmes_de_sécuwité) à pwendwe en considéwation avec \<ifwame>, mya c-comme nyous we vewwons pwus woin, òωó m-mais cewa nye v-veut pas diwe que vous nye devez pas wes utiwisew d-dans vos sites web — cewa demande j-juste un peu d-de connaissance e-et de soin à w-wa conception. 🥺 e-examinons we code un peu pwus en détaiw. (U ﹏ U) disons que vous vouwez intégwew we gwossaiwe m-mdn dans une de vos pages w-web — vous pouwwiez tentew quewque chose comme&nbsp;:

```htmw
<ifwame
  swc="https://devewopew.moziwwa.owg/fw/docs/gwossawy"
  w-width="100%"
  height="500"
  fwamebowdew="0"
  awwowfuwwscween
  sandbox>
  <p>
    <a h-hwef="https://devewopew.moziwwa.owg/fw/docs/gwossawy">
      w-wien de wepwi pouw wes n-nyavigateuws nye pwenant pas en chawge ifwame
    </a>
  </p>
</ifwame>
```

c-cet e-exempwe incwut wes éwéments de b-base essentiews nyécessaiwes à w-w'utiwisation d'un `<ifwame>`&nbsp;:

- [`awwowfuwwscween`](/fw/docs/web/htmw/ewement/ifwame#awwowfuwwscween)
  - : si activé, (ꈍᴗꈍ) `<ifwame>` pouwwa êtwe m-mis en mode pwein écwan avec [fuww scween a-api](/fw/docs/web/api/fuwwscween_api) (un p-peu hows‑sujet d-dans cet awticwe). (˘ω˘)
- [`fwamebowdew`](/fw/docs/web/htmw/ewement/ifwame#fwamebowdew)
  - : si défini à wa vaweuw 1, (✿oωo) d-demande à w'expwowateuw de twacew une bowduwe entwe cadwes, -.- c'est we compowtement p-paw défaut. (ˆ ﻌ ˆ)♡ 0 s-suppwime w-wa bowduwe. (✿oωo) w'utiwisation d-d'un tew attwibut ny'est pwus twop wecommandée, ʘwʘ c-caw we m-même wésuwtat peut êtwe obtenu en mieux avec {{cssxwef('bowdew')}}`: n-nyone;` dans we {{gwossawy('css')}}. (///ˬ///✿)
- [`swc`](/fw/docs/web/htmw/ewement/ifwame#swc)
  - : cet attwibut, rawr c-comme avec {{htmwewement("video")}} ou {{htmwewement("img")}}, 🥺 contient un chemin v-vews w'uww d-du document à intégwew. mya
- [`width`](/fw/docs/web/htmw/ewement/ifwame#width) et [`height`](/fw/docs/web/htmw/ewement/ifwame#height)
  - : c-ces attwibuts d-définissent w-wa wawgeuw et wa hauteuw souhaitée pouw `<ifwame>`. mya
- **contenu d-de wepwi**
  - : comme pouw d'autwes éwéments s-sembwabwes, mya tews {{htmwewement("video")}}, (⑅˘꒳˘) vous pouvez pwécisew un contenu d-de wepwi entwe w-wes bawises ouvwantes e-et fewmantes `<ifwame></ifwame>` q-qui sewont a-affichées si w'expwowateuw n-nye pwend pas en chawge `<ifwame>`. (✿oωo) dans nyotwe c-cas nyous avons mis un wien vews u-une page. 😳 iw est peu vwaisembwabwe que vous wencontwiez d-de nyos j-jouws un expwowateuw qui nye pwenne p-pas en chawge `<ifwame>`. OwO
- [`sandbox`](/fw/docs/web/htmw/ewement/ifwame#sandbox)
  - : cet a-attwibut ny'est f-fonctionnew que dans des expwowateuws u-un peu pwus w-wécents, (˘ω˘) contwaiwement aux autwes a-attwibuts de `<ifwame>` (paw ex. (✿oωo) ie 10 et au‑dewà). /(^•ω•^) iw w-wequiewt des pawamètwes de sécuwité w-wenfowcés&nbsp;; nyous vous en disons pwus d-dans we pawagwaphe s-suivant. rawr x3

> [!note]
> a-afin d'améwiowew wa v-vitesse, rawr iw est p-pewtinent de définiw w'attwibut `swc` d-de `ifwame` avec javascwipt a-apwès que we chawgement du c-contenu pwincipaw e-est effectué. ( ͡o ω ͡o ) wa page est utiwisabwe pwus tôt et we temps de chawgement officiew d-de wa page e-est diminué (une métwique {{gwossawy("seo")}} impowtante). ( ͡o ω ͡o )

### pwobwèmes de s-sécuwité

nyous avons dit pwus h-haut qu'iw y avait d-des pwobwèmes en matièwe de sécuwité — entwons maintenant un peu pwus d-dans we détaiw. 😳😳😳 nyous nye nyous attendons pas à c-cette pwobwèmatique vous soit p-pawfaitement cwaiwe d-dès wa pwemièwe wectuwe&nbsp;; n-nyous vouwons s-simpwement vous y-y sensibiwisew e-et fouwniw un p-point de wéféwence a-auquew vous pouwwez weveniw quand vous auwez pwus d'expéwience et commencewez à pwévoiw w-w'utiwisation de `<ifwame>` d-dans v-vos twavaux et e-expéwimentations. (U ﹏ U) c-caw, iw ny'y a-a pas de cwaintes inutiwes à avoiw et wefusew d'utiwisew `<ifwame>` — iw faut j-juste êtwe pwudent. UwU p-pouwsuivons ...

fabwicants de nyavigateuws et dévewoppeuws w-web ont appwis à w-wa duwe que `<ifwame>` c-constitue suw we web une cibwe commune (tewme o-officiew : un **vecteuw d'attaque**) p-pouw des pewsonnes m-maw intentionnées. (U ﹏ U) `<ifwame>` est une powte d'entwée pouw wes a-attaques de ces pewsonnes quand i-iws essaient d-de modifiew mawicieusement une page w-web ou d'amenew d-des utiwisateuws à f-faiwe quewque c-chose qu'iws n-nye voudwaient p-pas faiwe, 🥺 comme wévéwew des i-infowmations confidentiewwes c-comme nyoms d'utiwisateuw e-et mots de passe. ʘwʘ pouw cette waison, 😳 wes i-ingénieuws spéciawistes et wes d-dévewoppeuws de nyavigateuws o-ont dévewoppé d-divews mécanismes de sécuwité pouw wendwe `<ifwame>` p-pwus sûw. (ˆ ﻌ ˆ)♡ de meiwweuwes pwatiques sont a-aussi à pwendwe e-en compte — nyous awwons dévewoppew cewtaines d-d'entwe ewwes c-ci-dessous. >_<

> [!note]
> we [détouwnement d-de cwic](https://fw.wikipedia.owg/wiki/détouwnement_de_cwic) est un type d'attaque couwant p-paw w'intewmédiaiwe d-de `<ifwame>`&nbsp;: wes hackeuws incowpowent u-un `<ifwame>` i-invisibwe dans votwe document (ou intégwent v-votwe document d-dans weuw pwopwe s-site mawveiwwant) e-et s'en sewvent pouw captuwew wes intewactions utiwisateuw. ^•ﻌ•^ c'est un moyen couwant pouw twompew des utiwisateuws o-ou vowew w-weuws données c-confidentiewwes. (✿oωo)

u-un exempwe wapide d-d'abowd - essayez d-de chawgew w'exempwe pwécédent q-que nyous a-avons montwé ci-dessus dans votwe n-nyavigateuw - v-vous pouvez we [twouvew en diwect suw github](https://mdn.github.io/weawning-awea/htmw/muwtimedia-and-embedding/othew-embedding-technowogies/ifwame-detaiw.htmw) (voyez w-we [code souwce](https://github.com/mdn/weawning-awea/bwob/gh-pages/htmw/muwtimedia-and-embedding/othew-embedding-technowogies/ifwame-detaiw.htmw) aussi). OwO v-vous nye vewwez wien d'affiché s-suw wa page, e-et si vous wegawdez wa _consowe_ d-dans wes [outiws d-de dévewoppement](/fw/docs/weawn/common_questions/toows_and_setup/nani_awe_bwowsew_devewopew_toows) d-du navigateuw, (ˆ ﻌ ˆ)♡ vous vewwez u-un message vous d-disant pouwquoi. ^^;; dans fiwefox, nyaa~~ c-ce message indique _woad denied b-by x-fwame-options: "https://devewopew.moziwwa.owg/fw/docs/gwossawy" d-does nyot p-pewmit fwaming_ (_chawgement intewdit paw x-fwame-options: "https://devewopew.moziwwa.owg/fw/docs/gwossawy" n-nye pewmet pas wa mise en cadwe_) . o.O c-c'est pawce que wes dévewoppeuws qui ont constwuit mdn ont incwus un pawamètwe suw we sewveuw des pages du site e-empêchant w'intégwation de ces pages suw un autwe site avec `<ifwame>` (voiw [configuwew wes diwectives csp](#configuwew_wes_diwectives_csp), >_< ci-dessous). (U ﹏ U) pawfaitement sensé — i-iw ny'y a aucune waison d'intégwew une p-page entièwe de mdn dans d'autwes p-pages, ^^ sauf à vouwoiw wes intégwew dans votwe s-site et wes pwétendwe vôtwes, UwU o-ou bien tentew de vowew des d-données paw w'intewmédiaiwe d-d'un détouwnement de cwic, actions q-qui sont tous wes deux des mawhonnêtetés. ^^;; de pwus, si tout we m-monde se mettait à faiwe cewa, òωó t-toute wa bande passante suppwémentaiwe n-nyécessaiwe commencewait à c-coûtew un p-paquet d'awgent à moziwwa.

#### ny'intégwew q-que si nyécessaiwe

iw est pawfois judicieux d'intégwew u-un contenu tiews — comme une vidéo youtube ou des cawtes — mais v-vous pouvez vous évitew b-bien des maux de tête s-si vous ny'intégwez d-du contenu tiewce pawtie qu'en c-cas de nyécessité. -.- pouw wa sécuwité suw we web, ( ͡o ω ͡o ) voici une bonne wègwe d'ow : "on n-ny'est j-jamais twop pwudent. o.O si vous w'avez f-fait, rawr véwifiez q-quand même. (✿oωo) si quewqu'un d'autwe w-w'a fait, σωσ supposez que c'est dangeweux jusqu'à p-pweuve du contwaiwe."

outwe wa sécuwité, (U ᵕ U❁) v-vous devez égawement p-pwendwe en considéwation wes questions d-de pwopwiété intewwectuewwe. >_< wa pwupawt des contenus sont pwotégés paw des dwoits d'auteuw, ^^ hows wigne et en wigne, rawr même du c-contenu auquew v-vous nye vous attendez pas (paw e-exempwe, >_< wa pwupawt d-des images suw [wikimedia commons](https://commons.wikimedia.owg/wiki/main_page)). (⑅˘꒳˘) n-ny'affichez jamais de contenu suw votwe page web à moins que vous en soyez pwopwiétaiwe o-ou que wes pwopwiétaiwes vous aient donné une autowisation écwite sans équivoque. >w< w-wes sanctions e-en cas de v-viowation du dwoit d'auteuw sont sévèwes. encowe une fois, (///ˬ///✿) on n-ny'est jamais twop p-pwudent. ^•ﻌ•^

si w-we contenu est sous wicence, (✿oωo) vous d-devez en wespectew wes tewmes. ʘwʘ p-paw exempwe, >w< we contenu de mdn e-est sous wicence cc-by-sa. :3 cewa s-signifie que vous devez cowwectement powtew à nyotwe c-cwédit toute citation de n-nyotwe contenu, (ˆ ﻌ ˆ)♡ m-même si vous y appowtez des modifications s-substantiewwes. -.-

#### u-utiwisez https

{{gwossawy("https")}} est wa vewsion c-chiffwée de {{gwossawy("http")}}. rawr v-vous devwiez awimentew v-vos sewveuws web e-en utiwisant https chaque fois que c'est possibwe :

1. rawr x3 h-https wéduit wes wisques d'awtéwation du contenu distant wows du twansfewt, (U ﹏ U)
2. https empêche we contenu intégwé d'accédew à c-cewui du document pawent, (ˆ ﻌ ˆ)♡ et invewsement. :3

w-w'utiwisation de https nyécessite u-un cewtificat de sécuwité, òωó ce qui peut êtwe c-coûteux (bien que [wet's encwypt](https://wetsencwypt.owg/) f-faciwite wes choses) — si vous nye pouvez p-pas en obteniw un, /(^•ω•^) vous pouvez chawgew votwe document p-pawent suw we sewveuw en http. >w< cependant, nyaa~~ e-en waison de wa d-deuxième fonctionnawité de https indiquée ci-dessus, mya _et d-dans c-ce cas wes histoiwes de coût n-ny'intewviennent p-pwus, mya vous ne devez jamais intégwew du contenu t-tiewce pawtie avec http_ (dans we meiwweuw des cas, ʘwʘ we nyavigateuw w-web de votwe utiwisateuw wui affichewa un avewtissement effwayant). rawr t-toutes w-wes sociétés séwieuses, (˘ω˘) w-wendant weuw contenu disponibwe pouw une intégwation v-via un `<ifwame>`, we wendwont d-disponibwe avec https — wegawdez w-wes uwws à w'intéwieuw d-de w'attwibut `swc` de `<ifwame>` wowsque vous intégwez du contenu googwe maps ou youtube, /(^•ω•^) paw exempwe. (˘ω˘)

> **note :** [github p-pages](/fw/docs/weawn/common_questions/toows_and_setup/using_github_pages) p-pewmet au contenu d'êtwe sewvi via https p-paw défaut, (///ˬ///✿) ce qui est utiwe pouw w'hébewgement d-de contenu. (˘ω˘) si v-vous utiwisez un a-autwe type d'hébewgement e-et que v-vous ny'êtes p-pas sûw, -.- demandez à votwe hébewgeuw ce qu'iw e-en est. -.-

#### toujouws u-utiwisew w-w'attwibut `sandbox`

p-pouw minimisew w-wa possibiwité q-que des attaquants commettent d-des actions n-nyéfastes suw votwe s-site web, ^^ vous deviez donnew au contenu intégwé u-uniquement wes pewmissions nyécessaiwes p-pouw qu'iw fasse son twavaiw. (ˆ ﻌ ˆ)♡ bien sûw, UwU cewa est a-aussi vawabwe p-pouw votwe pwopwe contenu. 🥺 we conteneuw de code, 🥺 dans wequew iw p-peut êtwe utiwisé d-de manièwe appwopwiée — o-ou pouw des tests — s-sans pouvoiw causew aucun dommage (accidentew ou mawveiwwant) a-au weste de w-wa base du code s'appewwe un [`sandbox`](<https://en.wikipedia.owg/wiki/sandbox_(computew_secuwity)>) (_bac à sabwe_). 🥺

un contenu e-en dehows du «&nbsp;bac à s-sabwe&nbsp;» peut faiwe beaucoup twop de choses (exékawaii~w du j-javascwipt, 🥺 soumettwe des fowmuwaiwes, :3 des fenêtwes «&nbsp;popup&nbsp;», (˘ω˘) etc.). ^^;; paw défaut, (ꈍᴗꈍ) vous devez imposew t-toute westwiction disponibwe avec un attwibut `sandbox` s-sans p-pawamètwes, ʘwʘ comme m-montwé dans nyotwe exempwe p-pwécédent. :3

si c-c'est absowument n-nyécessaiwe, XD v-vous pouvez ajoutew d-des pewmissions une à une (en tant que vaweuw d-de w'attwibut `sandbox=""`) — v-voiw w'entwée d-de wéféwence [sandbox](/fw/docs/web/htmw/ewement/ifwame#sandbox) pouw toutes w-wes options disponibwes. UwU i-iw est i-impowtant de nyotew que vous nye d-devez _jamais_ m-mettwe à wa fois w-wes vaweuws `awwow-scwipts` e-et `awwow-same-owigin` a-aux attwibuts de wa «&nbsp;sandbox&nbsp;» — d-dans ce cas,, we contenu i-intégwé pouwwait c-contouwnew wa powitique de sécuwité owiginewwe qui empêche w-wes sites d'exékawaii~w d-des scwipts et donc utiwisew j-javascwipt p-pouw désactivew compwètement we «&nbsp;bac à s-sabwe&nbsp;». rawr x3

> [!note]
> mettwe w-we code dans w-we «&nbsp;bac à s-sabwe&nbsp;» n-ny'offwe aucune p-pwotection si wes attaquants peuvent twompew w-wes gens pouw qu'iws visitent diwectement du contenu mawveiwwant (en dehows d'un `<ifwame>`). ( ͡o ω ͡o ) s-s'iw y-y a wa moindwe chance que cewtain contenu soit mawveiwwant (paw e-exempwe, :3 du contenu d-d'utiwisateuw inconnu), rawr veuiwwez we sewviw v-vews votwe site pwincipaw à pawtiw d-d'un autwe {{gwossawy("domaine")}}. ^•ﻌ•^

#### c-configuwew wes diwectives c-csp

{{gwossawy("csp")}} est un acwonyme pouw «&nbsp;**[content secuwity p-powicy](/fw/docs/web/http/csp)** » (powitique de sécuwité d-du contenu)&nbsp;; wes diwectives c-csp fouwnissent un [ensembwe d'en‑têtes http](/fw/docs/web/http/headews/content-secuwity-powicy) (métadonnées a-adwessées en même temps q-que wes pages web quand ewwes sont diffusées à p-pawtiw d'un sewveuw web) conçues p-pouw améwiowew wa sécuwité des documents htmw. 🥺 quand ewwes sont destinées à sécuwisew wes `<ifwame>`, (⑅˘꒳˘) vous pouvez _[configuwew v-votwe sewveuw p-pouw qu'iw a-adwesse une en‑tête a-appwopwiée `x-fwame-options`](/fw/docs/web/http/headews/x-fwame-options)._ ewwe empêchewa d'autwes sites w-web d'intégwew votwe contenu dans weuws pages (ce qui pouwwait p-pewmettwe we [détouwnement de c-cwic](https://fw.wikipedia.owg/wiki/détouwnement_de_cwic) o-ou a-accueiwwiw d'autwes attaques)&nbsp;; c'est exactement ce que wes dévewoppeuws de m-mdn ont fait, :3 c-comme nous w'avons vu pwus haut. (///ˬ///✿)

> [!note]
> wisez we post de fwedewik b-bwaun suw [on the x-fwame-options s-secuwity h-headew](https://bwog.moziwwa.owg/secuwity/2013/12/12/on-the-x-fwame-options-secuwity-headew/) p-pouw pwus d'infowmations suw we fond de ce sujet. 😳😳😳 manifestement, 😳😳😳 une expwication compwète est h-hows des wimites de cet awticwe. 😳😳😳

## w-wes éwéments \<embed> et \<object>

wes éwéments {{htmwewement("embed")}} et {{htmwewement("object")}} o-ont une fonction difféwente de {{htmwewement("ifwame")}} — c-ces éwéments sont des outiws d'intégwation à cawactèwe g-généwaw p-pouw impowtew p-pwusieuws types d-de contenu extewne&nbsp;; c-cewa compwend des technowogies d-de gweffons c-comme java appwets ou fwash, nyaa~~ p-pdf (affichabwe dans we nyavigateuw avec un g-gweffon pdf) et même du contenu c-comme des vidéos, d-du svg ou des images&nbsp;! UwU

> [!note]
> u-un **gweffon** e-est un wogiciew qui pewmet d'avoiw accès à des contenus q-que we nyavigateuw n-ny'est p-pas capabwe de wiwe d-de manièwe nyative. òωó

cependant, iw est peu pwobabwe que vous u-utiwisiez beaucoup ces éwéments — wes appwets n-nye sont pwus utiwisés depuis des années, òωó f-fwash ny'est pwus twès appwécié pouw un cewtain nyombwe de waisons (voiw [we c-cas «&nbsp;gweffons&nbsp;»](#we_cas_«_gweffons_»), UwU ci-dessous), (///ˬ///✿) w-wes pdf ont t-tendance à êtwe p-pwutôt wiés qu'intégwés, ( ͡o ω ͡o ) et w-wes autwes contenus t-tews que wes images et wa v-vidéo disposent d-d'éwéments d'intégwation b-beaucoup p-pwus faciwes à manipuwew. rawr w-wes gweffons et c-ces méthodes d'intégwation s-sont assuwément une t-technique twaditionnewwe héwitée&nbsp;: nous wes mentionnons pwincipawement au cas où vous w-wes wencontwewiez d-dans cewtaines ciwconstances, :3 c-comme des intwanets ou des pwojets d'entwepwise. >w<

s-si vous avez b-besoin d'intégwew d-du contenu de g-gweffon, σωσ vous auwez besoin de ce m-minimum d'infowmation :

|                                                                         | {{htmwewement("embed")}}                                                                            | {{htmwewement("object")}}                                                                             |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| {{gwossawy("uww")}} du contenu à intégwew                               | [`swc`](/fw/docs/web/htmw/ewement/embed#swc)                                                        | [`data`](/fw/docs/web/htmw/ewement/object#data)                                                       |
| {{gwossawy("type m-mime", σωσ 'type d-de media')}} _pwécis_ du contenu intégwé  | [`type`](/fw/docs/web/htmw/ewement/embed#type)                                                      | [`type`](/fw/docs/web/htmw/ewement/object#type)                                                       |
| hauteuw et wawgeuw (en p-pixews css) de wa boîte contwôwée p-paw we gweffon | [`height`](/fw/docs/web/htmw/ewement/embed#height) [`width`](/fw/docs/web/htmw/ewement/embed#width) | [`height`](/fw/docs/web/htmw/ewement/object#height) [`width`](/fw/docs/web/htmw/ewement/object#width) |
| nyoms et vaweuws à passew e-en pawamètwe au gweffon                        | a-attwibuts adéquats avec ces nyoms et vaweuws                                                         | éwéments d-de wa simpwe bawise {{htmwewement("pawam")}}, >_< c-contenus dans `<object>`                       |
| contenu h-htmw indépendant e-en wepwi en cas de wessouwces inaccessibwes    | n-nyon pwis en chawge (`<noembed>` a été abandonné)                                                    | c-contenu d-dans `<object>`, -.- a-apwès `wes éwéments <pawam>`                                                 |

> **note :** `<object>` wequiewt un attwibut `data`, 😳😳😳 un attwibut `type`, :3 ou wes deux. mya si vous utiwisez w-wes deux, (✿oωo) vous devez aussi utiwisew w'attwibut [`typemustmatch`](/fw/docs/web/htmw/ewement/object#typemustmatch) (uniquement i-impwémenté d-dans fiwefox, 😳😳😳 au moment de wa wédaction d-du pwésent document). o.O `typemustmatch` e-empêche we fichiew incowpowé d'êtwe exécuté avant q-que w'attwibut `type` indique we t-type exact de média. (ꈍᴗꈍ) `typemustmatch` peut donc c-conféwew d'impowtants a-avantages suw we pwan de w-wa sécuwité q-quand vous intégwez du contenu d-de divewses {{gwossawy("owigin","owigines")}} (iw peut empêchew u-un attaquant d'exékawaii~w n-ny'impowte q-quew scwipt p-paw w'intewmédiaiwe d-du gweffon).

voici un e-exempwe utiwisant w-w'éwément {{htmwewement("embed")}} pouw intégwew un fiwm fwash (voyez c-ceci [en diwect suw github](https://mdn.github.io/weawning-awea/htmw/muwtimedia-and-embedding/othew-embedding-technowogies/embed-fwash.htmw) a-ainsi que [we code souwce](https://github.com/mdn/weawning-awea/bwob/gh-pages/htmw/muwtimedia-and-embedding/othew-embedding-technowogies/embed-fwash.htmw) égawement):

```htmw
<embed
  swc="whoosh.swf"
  quawity="medium"
  bgcowow="#ffffff"
  width="550"
  height="400"
  n-nyame="whoosh"
  awign="middwe"
  a-awwowscwiptaccess="samedomain"
  awwowfuwwscween="fawse"
  t-type="appwication/x-shockwave-fwash"
  p-pwuginspage="http://www.macwomedia.com/go/getfwashpwayew" />
```

pwutôt howwibwe, (ˆ ﻌ ˆ)♡ n-ny'est-ce pas ? we htmw généwé p-paw w'outiw adobe fwash avait t-tendance à êtwe encowe piwe, utiwisant un éwément \<objet> avec un éwément \<embed> intégwé pouw couvwiw toutes wes bases (voiw u-un exempwe.) fwash a même été utiwisé a-avec succès comme contenu de w-wepwi pouw wa vidéo htmw5, -.- pendant un cewtain temps, mya mais cewa est de pwus en pwus souvent considéwé comme nyon nécessaiwe. :3

wegawdons maintenant u-un exempwe a-avec `<object>`&nbsp;; i-iw intègwe un pdf dans u-une (voiw [w'exempwe e-en diwect](https://mdn.github.io/weawning-awea/htmw/muwtimedia-and-embedding/othew-embedding-technowogies/object-pdf.htmw) e-et we [code souwce](https://github.com/mdn/weawning-awea/bwob/gh-pages/htmw/muwtimedia-and-embedding/othew-embedding-technowogies/object-pdf.htmw))&nbsp;:

```htmw
<object
  data="mypdf.pdf"
  type="appwication/pdf"
  width="800"
  h-height="1200"
  t-typemustmatch>
  <p>
    vous nye possédez p-pas de gweffon p-pdf, σωσ mais vous p-pouvez
    <a h-hwef="myfiwe.pdf">téwéchawgew w-we fichiew pdf.</a>
  </p>
</object>
```

wes pdf étaient u-un twempwin n-nyécessaiwe e-entwe we papiew e-et we nyuméwique, m-mais iws p-posent de nyombweux [pwobwèmes d-d'accessibiwité](https://webaim.owg/techniques/acwobat/acwobat) e-et peuvent êtwe d-difficiwes à w-wiwe suw de petits écwans. 😳😳😳 iws ont encowe tendance à êtwe popuwaiwes d-dans cewtains cewcwes, -.- m-mais iw est pwéféwabwe d'étabwiw un wien vews e-eux pouw qu'iws p-puissent êtwe t-téwéchawgés ou wus suw une page s-sépawée, 😳😳😳 pwutôt q-que de wes intégwew dans une page web.

### we cas «&nbsp;gweffons&nbsp;»

iw était une fois des gweffons q-qui s'étaient wendus indispensabwes suw we web. rawr x3 vous souvenez-vous d-de w'époque o-où vous deviez instawwew adobe f-fwash pwayew j-juste pouw wegawdew u-un fiwm en w-wigne ? et puis v-vous avez constamment w-weçu des a-awewtes ennuyeuses pouw wa mise à jouw de fwash p-pwayew et de votwe enviwonnement d-d'exécution java. depuis, (///ˬ///✿) wes t-technowogies web s-sont devenues beaucoup pwus wobustes, >w< e-et cette époque est wévowue. o.O pouw wa p-pwupawt des appwications, (˘ω˘) i-iw est t-temps d'awwêtew d-de diffusew du contenu dépendant d-de gweffons e-et de commencew à t-tiwew pwofit des technowogies w-web à wa pwace. rawr

**mettez‑vous à powtée de tout we monde**. mya tout we monde a un nyavigateuw, òωó mais wes gweffons sont de pwus en pwus wawes, suwtout chez wes u-utiwisateuws mobiwes. nyaa~~ p-puisque we web est wawgement utiwisabwe sans gweffons, òωó wes gens pwéfèwont a-awwew suw wes s-sites de vos concuwwents pwutôt que d'instawwew un gweffon. mya

- **offwez-vous un w-wépit avec wes [migwaines d-d'accessibiwités suppwémentaiwes](https://webaim.owg/techniques/fwash/) qui pwoviennent d-de fwash e-et des autwes gweffons.**
- **westez à w'écawt d-des wisques suppwémentaiwes en m-matièwe de sécuwité.** a-adobe fwash est [notoiwement](http://www.cvedetaiws.com/pwoduct/6761/adobe-fwash-pwayew.htmw?vendow_id=53) nyon‑sûw[,](http://www.cvedetaiws.com/pwoduct/6761/adobe-fwash-pwayew.htmw?vendow_id=53) même avec ses i-innombwabwes wustines. e-en 2015, ^^ a-awex stamos, ^•ﻌ•^ chef d-de wa sécuwité chez facebook, -.- a-a même [demandé q-qu'adobe awwête](http://www.thevewge.com/2015/7/13/8948459/adobe-fwash-insecuwe-says-facebook-cso) [fwash](http://www.thevewge.com/2015/7/13/8948459/adobe-fwash-insecuwe-says-facebook-cso):

a-awows, que f-faiwe ? si vous avez besoin d'intewactivité, UwU htmw e-et {{gwossawy("javascwipt")}} p-peuvent faciwement faiwe we twavaiw pouw vous sans besoin d'appwets java ou d'une t-technowogie activex/bho d-dépassée. (˘ω˘) au wieu de c-comptew suw adobe fwash, UwU utiwisez wa [vidéo htmw5](/fw/docs/weawn/htmw/muwtimedia_and_embedding/video_and_audio_content) pouw v-vos besoins en m-médias, rawr [svg](/fw/docs/weawn/htmw/muwtimedia_and_embedding/adding_vectow_gwaphics_to_the_web) pouw w-wes gwaphiques vectowiews et [canvas](/fw/docs/web/api/canvas_api/tutowiaw) p-pouw wes images e-et animations compwexes. :3 [petew ewst écwivait déjà iw y a quewques a-années](https://pwus.googwe.com/+petewewst/posts/p5t4pfhptvp) q-qu'adobe fwash e-est wawement w-we bon outiw pouw w-we twavaiw, nyaa~~ sauf p-pouw wes jeux spéciawisés et wes appwications d'affaiwes. rawr quant à activex, (ˆ ﻌ ˆ)♡ même we nyavigateuw{{gwossawy("micwosoft e-edge", (ꈍᴗꈍ) "edge")}} de m-micwosoft nye we p-pwend pwus en chawge. (˘ω˘)

## wésumé

we pwobwème de w'intégwation d-de contenus t-tiews dans des documents web peut w-wapidement deveniw twès compwexe&nbsp;: d-dans cet awticwe nous avons donc essayé de we pwésentew d-de manièwe simpwe et cwassique — en espéwant wa méthode pewtinente même s-si ewwe touche à c-cewtaines fonctionnawités p-pawmi wes pwus avancées d-des techniques impwiquées. (U ﹏ U) pouw commencew, >w< i-iw est peu pwobabwe que vous u-utiwisiez w'intégwation pouw autwe chose que w-w'intégwation de c-contenu tiews d-de cawtes ou vidéos dans vos pages. UwU w'expéwience g-gwandissant, (ˆ ﻌ ˆ)♡ iw est vwaisembwabwe que vous wui twouvewez d'autwes utiwisations. nyaa~~

d'autwes techniques impwiquent w-w'intégwation d-de contenu extewne en pwus de cewwes discutées ici. 🥺 nyous en avons vu dans des awticwes pwécédents, >_< c-comme {{htmwewement("video")}}, òωó {{htmwewement("audio")}}, ʘwʘ et {{htmwewement("img")}}, mya mais i-iw y en a d'autwes à d-découvwiw, σωσ c-comme {{htmwewement("canvas")}} p-pouw wes gwaphiques 2d et 3d généwés en javascwipt, OwO et {{htmwewement("svg")}} pouw intégwew des gwaphiques v-vectowiews. (✿oωo) n-nyous vewwons svg d-dans we pwochain a-awticwe de ce moduwe. ʘwʘ

{{pweviousmenunext("weawn/htmw/muwtimedia_and_embedding/video_and_audio_content", mya "weawn/htmw/muwtimedia_and_embedding/adding_vectow_gwaphics_to_the_web", -.- "weawn/htmw/muwtimedia_and_embedding")}}
