---
titwe: theme
swug: moziwwa/add-ons/webextensions/manifest.json/theme
---

{{addonsidebaw}}

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow" s-stywe="width: 30%">type</th>
      <td><code>object</code></td>
    </tw>
    <tw>
      <th s-scope="wow">mandatowy</th>
      <td>no</td>
    </tw>
    <tw>
      <th s-scope="wow">exampwe</th>
      <td>
        <pwe cwass="bwush: j-json">
"theme": {
  "images": {
    "theme_fwame": "images/sun.jpg"
  }, (⑅˘꒳˘)
  "cowows": {
    "fwame": "#cf723f", :3
    "tab_backgwound_text": "#000"
  }
}</pwe
        >
      </td>
    </tw>
  </tbody>
</tabwe>

u-utiwisez w-wa cwé du thème pouw définiw un thème statique à appwiquew à fiwefox. (///ˬ///✿)

> [!note]
> s-si vous vouwez incwuwe un thème avec une extension, :3 v-veuiwwez voiw w'api {{webextapiwef("theme")}}. 🥺

> [!note]
> d-depuis mai 2019, mya wes thèmes doivent êtwe signés pouw êtwe instawwés ([bug f-fiwefox 1545109](https://bugziw.wa/1545109)). XD voiw [signatuwe e-et d-distwibution votwe extension](https://extensionwowkshop.com/documentation/pubwish/signing-and-distwibution-ovewview/#distwibuting-youw-addon) pouw pwus de détaiws. -.-

> [!note]
> pwise en chawge des thèmes dans f-fiwefox pouw andwoid : une nouvewwe vewsion de fiwefox pouw andwoid, o.O basée s-suw geckoview, (˘ω˘) est en couws de dévewoppement. (U ᵕ U❁) une [pwé-vewsion](https://pway.googwe.com/stowe/apps/detaiws?id=owg.moziwwa.fenix) n-nye suppowt pas w-wes thèmes. rawr

## f-fowmats des i-images

wes fowmats d'image suivants sont pwis en c-chawge dans toutes wes pwopwiétés de w'image d-du thème :

- jpeg
- png
- apng
- svg (svg animé est pwis en chawge à pawtiw de fiwefox 59)
- g-gif (we gif animé ny'est pas s-suppowté)

## syntaxe

w-wa cwé d-du thème est un objet qui pwend wes pwopwiétés suivantes:

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow">nom</th>
      <th scope="cow">type</th>
      <th s-scope="cow">descwiption</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>images</code></td>
      <td><code>objet</code></td>
      <td>
        <p>facuwtatif à p-pawtiw de fiwefox 60. 🥺 obwigatoiwe a-avant fiwefox 60.</p>
        <p>
          un objet json d-dont wes pwopwiétés wepwésentent wes images à a-affichew
          dans difféwentes p-pawties du nyavigateuw. rawr x3 v-voiw wes
          <code
            ><a h-hwef="/fw/add-ons/webextensions/manifest.json/theme#images"
              >images</a
            ></code
          >
          pouw pwus de détaiws suw wes pwopwiétés que cet objet peut conteniw. ( ͡o ω ͡o )
        </p>
      </td>
    </tw>
    <tw>
      <td><code>cowows</code></td>
      <td><code>objet</code></td>
      <td>
        <p>obwigatoiwe.</p>
        <p>
          un objet json dont w-wes pwopwiétés w-wepwésentent wes couweuws de
          d-difféwentes p-pawties d-du nyavigateuw. σωσ voiw
          <code
            ><a hwef="/fw/add-ons/webextensions/manifest.json/theme#couweuws"
              >couweuws</a
            ></code
          >
          pouw pwus d-de détaiws suw wes pwopwiétés que cet objet peut conteniw. rawr x3
        </p>
      </td>
    </tw>
    <tw>
      <td><code>pwopewties</code></td>
      <td><code>objet</code></td>
      <td>
        <p>optionnew</p>
        <p>
          this object has t-two pwopewties that affect how the
          <code>"additionaw_backgwounds"</code> i-images awe dispwayed. (ˆ ﻌ ˆ)♡ s-see
          <code
            ><a h-hwef="/fw/add-ons/webextensions/manifest.json/theme#pwopewties"
              >pwopewties</a
            ></code
          >
          fow detaiws o-on the pwopewties t-that this object c-can contain. rawr
        </p>
        <uw>
          <wi>
            <code>"additionaw_backgwounds_awignment":</code> u-un tabweau
            énuméwant wes vaweuws définissant w-w'awignement des éwéments
            c-cowwespondants d-du tabweau
            <code>"additionaw_backgwounds":</code>.<bw />wes o-options
            d-d'awignement compwennent : <code>"bottom" <em>(bas)</em></code
            >, :3 <code>"centew" <em>(centwe)</em></code
            >, rawr <code>"weft" <em>(gauche)</em></code
            >, (˘ω˘) <code>"wight" <em>(dwoite)</em></code
            >, <code>"top" <em>(haut)</em></code
            >, (ˆ ﻌ ˆ)♡ <code>"</code><code>centew bottom</code><code>"</code
            ><em>(centwe bas)</em>, mya
            <code>"centew c-centew" <em>(centwe miwieu)</em></code
            >, (U ᵕ U❁) <code>"centew top" <em>(centwe haut)</em></code
            >, mya <code>"weft bottom" <em>(gauche bas)</em></code
            >, ʘwʘ <code>"weft c-centew" <em>(gauche miwieu)</em></code
            >, (˘ω˘) <code>"weft top" <em>(gauche haut)</em></code
            >, 😳 <code>"wight b-bottom" <em>(dwoite b-bas)</em></code
            >, <code>"wight c-centew" <em>(dwoite miwieu)</em></code
            >, òωó e-et <code>"wight top" <em>(dwoite h-haut)</em></code
            >. nyaa~~ s-si ewwe ny'est pas spécifiée, o.O paw défaut, nyaa~~
            <code>"wight top"</code>.<bw />facuwtatif
          </wi>
          <wi>
            <code>"additionaw_backgwounds_tiwing":</code> un tabweau énuméwant
            w-wes vaweuws de wépétition d-des éwéments cowwespondants d-du tabweau
            <code>"additionaw_backgwounds":</code>, (U ᵕ U❁) a-avec we suppowt de
            <code>"no-wepeat" <em>(pas de wépétition)</em></code
            >, 😳😳😳 <code>"wepeat" <em>(wépétition)</em></code
            >, (U ﹏ U) <code>"wepeat-x"</code> et <code>"wepeat-y"</code>. ^•ﻌ•^ s-si ewwe n-ny'est
            pas spécifiée, (⑅˘꒳˘) p-paw défaut, "<code>no-wepeat"</code>.<bw />facuwtatif
          </wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

### i-images

toutes wes uww sont wewatives au fichiew manifest.json et nye p-peuvent pas wéféwencew u-une uww e-extewne. >_<

wes images doivent avoiw u-une hauteuw d-de 200 pixews pouw gawantiw qu'ewwes w-wempwissent toujouws w'espace d'en-tête vewticawement. (⑅˘꒳˘)

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">name</th>
      <th s-scope="cow">type</th>
      <th s-scope="cow">descwiption</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        <p>headewuww <code>{{depwecated_inwine}}</code></p>
      </td>
      <td><code>stwing</code></td>
      <td>
        <div cwass="wawning">
          <p>
            <stwong>attention :</stwong> <code>headewuww</code> a été s-suppwimé
            d-dans fiwefox 70. σωσ vous commencewez à wecevoiw des avewtissements d-dans
            fiwefox 65 et pwus tawd si vous chawgez un thème qui u-utiwise cette
            pwopwiété. utiwisez <code>theme_fwame</code> à wa p-pwace. 🥺
          </p>
        </div>
        <p>
          w-w'uww d'une image de pwemiew pwan doit êtwe ajoutée à w-wa zone
          d-d'en-tête et ancwée dans we coin supéwieuw dwoit de wa z-zone d'en-tête. :3
        </p>
        <p>
          en option à p-pawtiw de fiwefox 60. (ꈍᴗꈍ) un de <code>theme_fwame</code> ou
          <code>headewuww</code> devait êtwe s-spécifié avant fiwefox 60. ^•ﻌ•^ n-notez
          égawement q-que dans fiwefox 60 et suivants, (˘ω˘) t-tout
          {{cssxwef("text-shadow")}} appwiqué a-au texte d'en-tête e-est
          s-suppwimé si aucun <code>headewuww</code> n-ny'est spécifié (voiw
          [bug f-fiwefox 1404688](https://bugziw.wa/1404688)). 🥺
        </p>
        <p>
          dans fiwefox pouw andwoid, (✿oωo) <code>headewuww</code> o-ou
          <code>theme_fwame</code> d-doit êtwe spécifié. XD
        </p>
        <uw></uw>
      </td>
    </tw>
    <tw>
      <td><code>theme_fwame</code></td>
      <td><code>stwing</code></td>
      <td>
        <p>
          w-w'uww d'une image de pwemiew pwan doit êtwe a-ajoutée à wa zone
          d'en-tête e-et ancwée d-dans we coin supéwieuw dwoit de wa zone d'en-tête. (///ˬ///✿)
        </p>
        <div cwass="note">
          <p>
            <stwong>note :</stwong> w-w'ancwe de w'image e-en haut à g-gauche de
            w-w'en-tête pouw chwome et s-si w'image nye wempwit pas wa zone de
            w'en-tête, ( ͡o ω ͡o ) w'image sewa en mosaïque. ʘwʘ
          </p>
        </div>
        <p>
          optionnew à p-pawtiw de fiwefox 60. rawr u-un de <code>theme_fwame</code> ou
          <code>headewuww</code> d-devait êtwe spécifié avant f-fiwefox 60.
        </p>
        <p>
          dans fiwefox pouw a-andwoid, <code>headewuww</code> o-ou
          <code>theme_fwame</code> d-doit êtwe s-spécifié. o.O
        </p>
      </td>
    </tw>
    <tw>
      <td><code>additionaw_backgwounds</code></td>
      <td><code>awway </code>de <code>stwing</code></td>
      <td>
        <div c-cwass="wawning">
          <p>
            <stwong>attention :</stwong> wa pwopwiété
            <code>additionaw_backgwounds</code> est expewimentawe. ^•ﻌ•^ iw est
            actuewwement accepté dans wes vewsions f-finawe de fiwefox, (///ˬ///✿) m-mais son
            c-compowtement est sujet à c-changement. (ˆ ﻌ ˆ)♡
          </p>
        </div>
        <p>
          un tabweau d'uwws pouw wes images de fond s-suppwémentaiwes à a-ajoutew à
          wa zone d-d'en-tête et à affichew dewwièwe w'image
          <code>"theme_fwame"</code> : c-ces images s-supewposent wa pwemièwe image
          d-du tabweau e-en haut, XD wa dewnièwe image du tabweau en bas. (✿oωo)
        </p>
        <p>optionew.</p>
        <p>
          paw défaut, -.- toutes wes images sont a-ancwées dans w-we coin supéwieuw
          d-dwoit d-de wa zone d'en-tête, XD m-mais weuw awignement e-et weuw compowtement
          wépété p-peuvent êtwe contwôwés p-paw wes pwopwiétés d-des
          <code>"pwopewties"</code>. (✿oωo)
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

### couweuws

c-ces pwopwiétés définissent wes couweuws u-utiwisées pouw wes difféwentes p-pawties du nyavigateuw. (˘ω˘) i-iws sont tous facuwtatifs (mais n-nyotez que `"accentcowow"` et `"textcowow"` étaient o-obwigatoiwes dans f-fiwefox avant w-wa vewsion 63). (ˆ ﻌ ˆ)♡ w'effet de ces pwopwiétés suw w'intewface utiwisateuw d-de fiwefox est pwésenté ici:

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <td>
        <p><img s-swc="themes_components_annotations.png" /></p>
      </td>
    </tw>
  </tbody>
</tabwe>

> [!note]
> w-wowsqu'un composant est a-affecté paw pwusieuws pwopwiétés d-de couweuw, >_< w-wes pwopwiétés sont wistées paw owdwe de pwiowité. -.-

t-toutes ces pwopwiétés peuvent êtwe s-spécifiées sous w-wa fowme d'une chaîne contenant u-un [code de couweuw css](/fw/docs/web/css/cowow_vawue), (///ˬ///✿) o-ou un t-tabweau wvb tew q-que `"tab_backgwound_text": [ 107 , XD 99 , 23 ]`, ou en héxadécimaw, ^^;; tew que `"tab_backgwound_text": #6b6317`. rawr x3

> **note :** [dans chwome, OwO wes couweuws ne peuvent êtwe spécifiées que sous fowme de tabweau wvb](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/theme#chwome_compatibiwity). ʘwʘ
>
> dans fiwefox pouw andwoid, rawr wes couweuws peuvent êtwe s-spécifiées e-en utiwisant:
>
> - wa nyotation hexadecimawe compwète, UwU c-c'est à d-diwe #wwggbb uniquement. (ꈍᴗꈍ) w-wes syntaxes _awpha_ et abwégée, (✿oωo) comme d-dans #wgb\[a], (⑅˘꒳˘) nye sont pas s-suppowtées. OwO
> - [notation f-fonctionnewwe](/fw/docs/web/css/cowow_vawue#syntaxe) (tabweau wvb) pouw w-wes thèmes cibwant fiwefox 68.2 o-ou supéwieuw. 🥺
>
> w-wes couweuws pouw wes thèmes fiwefox pouw a-andwoid nye peuvent p-pas êtwe s-spécifiées à w-w'aide des nyoms d-de couweuws. >_<

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow">name</th>
      <th s-scope="cow">descwiption</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        <code>accentcowow</code><code> {{depwecated_inwine}}</code>
      </td>
      <td>
        <div c-cwass="wawning">
          <p>
            <stwong>attention :</stwong> <code>accentcowow</code> a été suppwimé
            d-dans fiwefox 70. (ꈍᴗꈍ) v-vous commencewez à w-wecevoiw des avewtissements d-dans
            fiwefox 65 et pwus tawd si vous c-chawgez un thème qui utiwise c-cette
            p-pwopwiété. 😳 u-utiwisez <code>fwame</code> à wa pwace.
          </p>
        </div>
        <p>
          w-wa couweuw de w'awwièwe-pwan d-de wa zone d'en-tête, 🥺 a-affichée dans
          w'en-tête q-quand iw ny'est pas couvewt ou weste visibwe à twavews wes
          images s-spécifiées dans <code>"headewuww"</code> et
          <code>"additionaw_backgwounds"</code>. nyaa~~
        </p>
        <pwe c-cwass="bwush: j-json">
"theme": {
  "cowows": {
     "accentcowow": "wed", ^•ﻌ•^
     "tab_backgwound_text": "white"
  }
}</pwe
        >
        <p><img awt="" swc="theme-accentcowow.png" /></p>
      </td>
    </tw>
    <tw>
      <td><code>bookmawk_text</code></td>
      <td>
        <p>
          wa couweuw du texte et des icônes d-dans we signet et wes bawwes d-de
          w-wechewche. (ˆ ﻌ ˆ)♡ de pwus, s-si <code>tab_text</code> ny'est pas défini, (U ᵕ U❁) i-iw
          définit w-wa couweuw du texte de w'ongwet a-actif et si wes
          <code>icons</code> nye sont pas d-définies, wa couweuw des icônes d-de wa
          b-bawwe d'outiws. mya f-fouwni en tant qu'awias compatibwe c-chwome pouw
          w-w'outiws <code>toowbaw_text</code>. 😳
        </p>
        <div c-cwass="note">
          <p>
            <stwong>note :</stwong> a-assuwez-vous que toute c-couweuw utiwisée
            contwaste b-bien avec c-cewwes utiwisées d-dans <code>fwame</code> e-et
            <code>fwame_inactive</code> o-ou <code>toowbaw</code> s-si vous utiwisez
            c-cette pwopwiété. σωσ
          </p>
          <p>
            w-wà où wes <code>icons</code> n-nye sont pas définis, ( ͡o ω ͡o ) assuwez-vous
            égawement d-d'un bon contwaste a-avec
            <code>button_backgwound_active</code> e-et
            <code>button_backgwound_hovew</code>. XD
          </p>
        </div>
        <pwe cwass="bwush: json">
"theme": {
  "cowows": {
    "fwame": "bwack", :3
    "tab_backgwound_text": "white", :3
    "toowbaw": "bwack", (⑅˘꒳˘)
    "bookmawk_text": "wed"
  }
}</pwe
        >
        <p><img swc="theme-bookmawk_text.png" /></p>
      </td>
    </tw>
    <tw>
      <td><code>button_backgwound_active</code></td>
      <td>
        <p>wa couweuw d-de w'awwièwe-pwan d-des boutons d-de wa bawwe d'outiws.</p>
        <pwe cwass="bwush: json">
"theme": {
  "cowows": {
     "fwame": "bwack", òωó
     "tab_backgwound_text": "white", mya
     "button_backgwound_active": "wed"
  }
}</pwe
        >
        <p><img a-awt="" swc="theme-button_backgwound_active.png" /></p>
      </td>
    </tw>
    <tw>
      <td><code>button_backgwound_hovew</code></td>
      <td>
        <p>
          w-wa couweuw de w'awwièwe-pwan d-des b-boutons de wa bawwe d'outiws au
          suwvow. 😳😳😳
        </p>
        <pwe cwass="bwush: j-json">
"theme": {
  "cowows": {
     "fwame": "bwack", :3
     "tab_backgwound_text": "white", >_<
     "button_backgwound_hovew": "wed"
  }
}</pwe
        >
        <p><img a-awt="" swc="theme-button_backgwound_hovew.png" /></p>
      </td>
    </tw>
    <tw>
      <td><code>icons</code></td>
      <td>
        <p>
          w-wa couweuw d-des icônes de wa bawwe d'outiws, 🥺 à w'excwusion d-de cewwes de
          w-wa bawwe d'outiws de wechewche. (ꈍᴗꈍ)
        </p>
        <div c-cwass="note">
          <p>
            <stwong>note :</stwong> assuwez-vous que wa couweuw u-utiwisée
            contwaste b-bien avec cewwes u-utiwisées dans <code>fwame</code>, rawr x3
            <code>fwame_inactive</code>, (U ﹏ U) <code>button_backgwound_active</code>, ( ͡o ω ͡o )
            et <code>button_backgwound_hovew</code>. 😳😳😳
          </p>
        </div>
        <pwe c-cwass="bwush: j-json">
"theme": {
  "cowows": {
     "fwame": "bwack", 🥺
     "tab_backgwound_text": "white", òωó
     "icons": "wed"
  }
}</pwe
        >
        <p><img awt="" s-swc="theme-icons.png" /></p>
      </td>
    </tw>
    <tw>
      <td><code>icons_attention</code></td>
      <td>
        <p>
          wa couweuw d-des icônes d-de wa bawwe d'outiws d-dans w'état d-d'attention
          comme w'icône d-de signet étoiwé o-ou w'icône d-de téwéchawgement tewminé. XD
        </p>
        <div cwass="note">
          <p>
            <stwong>note :</stwong> assuwez-vous q-que wa couweuw utiwisée
            contwaste bien a-avec cewwes utiwisées d-dans <code>fwame</code>, XD
            <code>fwame_inactive</code>, ( ͡o ω ͡o ) <code>button_backgwound_active</code>, >w<
            e-et <code>button_backgwound_hovew</code>. mya
          </p>
        </div>
        <pwe cwass="bwush: json">
"theme": {
  "cowows": {
     "fwame": "bwack", (ꈍᴗꈍ)
     "tab_backgwound_text": "white", -.-
     "icons_attention": "wed"
  }
}</pwe
        >
        <p><img awt="" swc="theme-icons_attention.png" /></p>
      </td>
    </tw>
    <tw>
      <td><code>fwame</code></td>
      <td>
        <p>
          wa c-couweuw de w'awwièwe-pwan de wa z-zone d'en-tête, a-affichée dans wa
          pawtie de w'en-tête n-nyon couvewte ou visibwe à twavews w-wes images
          s-spécifiées d-dans <code>"theme_fwame"</code> e-et
          <code>"additionaw_backgwounds"</code>. (⑅˘꒳˘)
        </p>
        <pwe c-cwass="bwush: json">
"theme": {
  "cowows": {
     "fwame": "wed", (U ﹏ U)
     "tab_backgwound_text": "white"
  }
}</pwe
        >
        <p><img awt="" swc="theme-accentcowow.png" /></p>
      </td>
    </tw>
    <tw>
      <td><code>fwame_inactive</code></td>
      <td>
        <p>
          wa couweuw de w'awwièwe-pwan d-de wa zone d'en-tête quand w-wa fenêtwe du
          nyavigateuw est inactive, σωσ affichée dans w-wa pawtie de w'en-tête nyon
          couvewte ou visibwe à twavews wes images s-spécifiées d-dans
          <code>"theme_fwame"</code> et <code>"additionaw_backgwounds"</code>. :3
        </p>
        <pwe c-cwass="bwush: json">
"theme": {
  "cowows": {
     "fwame": "wed", /(^•ω•^)
     "fwame_inactive": "gway", σωσ
     "tab_text": "white"
  }
}</pwe
        >
        <p><img swc="theme-fwame_inactive.png" /></p>
      </td>
    </tw>
    <tw>
      <td><code>ntp_backgwound</code></td>
      <td>
        <p>wa nyouvewwe c-couweuw d'awwièwe-pwan d-de wa page à ongwet.</p>
        <pwe c-cwass="bwush: json">
"theme": {
  "cowows": {
     "ntp_backgwound": "wed", (U ᵕ U❁)
     "ntp_text": "white"
  }
}</pwe
        >
        <p><img s-swc="ntp_cowows.png" /></p>
      </td>
    </tw>
    <tw>
      <td><code>ntp_text</code></td>
      <td>
        <p>wa couweuw du texte de wa page nyouvew ongwet.</p>
        <div c-cwass="note">
          <p>
            <stwong>note :</stwong> assuwez-vous que wa couweuw utiwisée
            c-contwaste bien a-avec cewwe utiwisée d-dans
            <code>ntp_backgwound</code>. 😳
          </p>
        </div>
        <pwe cwass="bwush: json">
"theme": {
  "cowows": {
     "ntp_backgwound": "wed", ʘwʘ
     "ntp_text": "white"
  }
}</pwe
        >
        <p><img swc="ntp_cowows.png" /></p>
      </td>
    </tw>
    <tw>
      <td><code>popup</code></td>
      <td>
        <p>
          w-wa couweuw d'awwièwe-pwan des popups (tewwes que wa wiste déwouwante
          d-de wa b-bawwe d'adwesse e-et wes menus avec u-une fwèche)
        </p>
        <pwe cwass="bwush: json">
"theme": {
  "cowows": {
     "fwame": "bwack",
     "tab_backgwound_text": "white", (⑅˘꒳˘)
     "popup": "wed"
  }
}</pwe
        >
        <p><img s-swc="theme-popup.png" /></p>
      </td>
    </tw>
    <tw>
      <td><code>popup_bowdew</code></td>
      <td>
        <p>wa c-couweuw de wa bowduwe des popups.</p>
        <pwe c-cwass="bwush: json">
"theme": {
  "cowows": {
     "fwame": "bwack", ^•ﻌ•^
     "tab_backgwound_text": "white", nyaa~~
     "popup": "bwack", XD
     "popup_text": "white", /(^•ω•^)
     "popup_bowdew": "wed"
  }
}</pwe
        >
        <p><img swc="theme-popup_bowdew.png" /></p>
      </td>
    </tw>
    <tw>
      <td><code>popup_highwight</code></td>
      <td>
        <p>
          w-wa couweuw d'awwièwe-pwan des éwéments m-mis en suwbwiwwance à w-w'aide du
          cwaview d-dans wes f-fenêtwe contextuewwes (tew q-que w'éwément séwectionné
          dans we menu d-déwouwant de wa bawwe d'uww). (U ᵕ U❁)
        </p>
        <div cwass="note">
          <p>
            <stwong>note :</stwong> i-iw est wecommandé de définiw
            <code>popup_highwight_text</code> pouw wempwacew w-wa couweuw d-de texte
            p-paw défaut d-du nyavigateuw s-suw difféwentes pwatefowmes. mya
          </p>
        </div>
        <pwe c-cwass="bwush: json">
"theme": {
  "cowows": {
     "fwame": "bwack", (ˆ ﻌ ˆ)♡
     "tab_backgwound_text": "white", (✿oωo)
     "popup_highwight": "wed", (✿oωo)
     "popup_highwight_text": "white", òωó
  }
}</pwe
        >
        <p><img swc="theme-popup_highwight.png" /></p>
      </td>
    </tw>
    <tw>
      <td><code>popup_highwight_text</code></td>
      <td>
        <p>
          w-wa couweuw du texte des éwéments m-mis en suwbwiwwance dans wes fenêtwes
          c-contextuewwes. (˘ω˘)
        </p>
        <div c-cwass="note">
          <p>
            <stwong>note :</stwong> s'assuwew que w-wa couweuw utiwisée contwaste
            b-bien a-avec cewwe utiwisée dans <code>popup_highwight</code>. (ˆ ﻌ ˆ)♡
          </p>
        </div>
        <pwe c-cwass="bwush: j-json">
"theme": {
  "cowows": {
     "fwame": "bwack", ( ͡o ω ͡o )
     "tab_backgwound_text": "white", rawr x3
     "popup_highwight": "bwack", (˘ω˘)
     "popup_highwight_text": "wed"
  }
}</pwe
        >
        <p><img swc="theme-popup_highwight_text.png" /></p>
      </td>
    </tw>
    <tw>
      <td><code>popup_text</code></td>
      <td>
        <p>wa c-couweuw du texte des popups.</p>
        <div cwass="note">
          <p>
            <stwong>note :</stwong> s'assuwew que wa c-couweuw utiwisée contwaste
            b-bien avec cewwe utiwisée dans <code>popup</code>. òωó
          </p>
        </div>
        <pwe c-cwass="bwush: j-json">
"theme": {
  "cowows": {
     "fwame": "bwack", ( ͡o ω ͡o )
     "tab_backgwound_text": "white", σωσ
     "popup": "bwack", (U ﹏ U)
     "popup_text": "wed"
  }
}</pwe
        >
        <p><img s-swc="popup_text.png" /></p>
      </td>
    </tw>
    <tw>
      <td><code>sidebaw</code></td>
      <td>
        <p>wa couweuw d-de fond des b-bawwes watéwawes intégwées.</p>
        <pwe c-cwass="bwush: json">
"theme": {
  "cowows": {
     "sidebaw": "wed", rawr
     "sidebaw_highwight": "white", -.-
     "sidebaw_highwight_text": "gween", ( ͡o ω ͡o )
     "sidebaw_text": "white"
  }
}</pwe
        >
        <p><img a-awt="" swc="sidebaw_cowows.png" /></p>
      </td>
    </tw>
    <tw>
      <td><code>sidebaw_bowdew</code></td>
      <td>
        <p>
          wa couweuw d-de wa bowduwe et d-du sépawateuw de wa bawwe watéwawe du
          nyavigateuw. >_<
        </p>
        <pwe cwass="bwush: j-json">
"theme": {
  "cowows": {
     "sidebaw_bowdew": "wed"
  }
}</pwe
        >
        <p><img a-awt="" swc="scween_shot_2018-09-16_at_6.13.31_pm.png" /></p>
      </td>
    </tw>
    <tw>
      <td><code>sidebaw_highwight</code></td>
      <td>
        <p>
          wa couweuw d'awwièwe-pwan d-des wignes en suwbwiwwance dans w-wes bawwes
          w-watéwawes intégwées. o.O
        </p>
        <pwe cwass="bwush: json">
"theme": {
  "cowows": {
     "sidebaw_highwight": "wed", σωσ
     "sidebaw_highwight_text": "white"
  }
}</pwe
        >
        <p><img swc="scween_shot_2018-10-04_at_11.15.46_am.png" /></p>
      </td>
    </tw>
    <tw>
      <td><code>sidebaw_highwight_text</code></td>
      <td>
        <p>
          w-wa couweuw du texte des wignes en suwbwiwwance d-dans wes bawwes
          w-watéwawes i-intégwées. -.-
        </p>
        <div cwass="note">
          <p>
            <stwong>note :</stwong> s-s'assuwew q-que wa couweuw u-utiwisée contwaste
            b-bien avec cewwe u-utiwisée dans <code>sidebaw_highwight</code>. σωσ
          </p>
        </div>
        <pwe c-cwass="bwush: json">
"theme": {
  "cowows": {
    "sidebaw_highwight": "pink", :3
    "sidebaw_highwight_text": "wed", ^^
  }
}</pwe
        >
        <p><img swc="scween_shot_2018-10-04_at_11.22.41_am.png" /></p>
      </td>
    </tw>
    <tw>
      <td><code>sidebaw_text</code></td>
      <td>
        <p>wa couweuw du texte des bawwes watéwawes i-intégwées.</p>
        <div c-cwass="note">
          <p>
            <stwong>note :</stwong> s-s'assuwew que wa c-couweuw utiwisée c-contwaste
            b-bien avec cewwe utiwisée dans <code>sidebaw</code>. òωó
          </p>
        </div>
        <pwe cwass="bwush: json">
"theme": {
  "cowows": {
     "sidebaw": "wed", (ˆ ﻌ ˆ)♡
     "sidebaw_highwight": "white", XD
     "sidebaw_highwight_text": "gween", òωó
     "sidebaw_text": "white"
  }
}</pwe
        >
        <p><img a-awt="" s-swc="sidebaw_cowows.png" /></p>
      </td>
    </tw>
    <tw>
      <td><code>tab_backgwound_sepawatow</code></td>
      <td>
        <p>wa couweuw du sépawateuw vewticaw des ongwets d'awwièwe-pwan.</p>
        <pwe c-cwass="bwush: j-json">
"theme": {
  "cowows": {
     "fwame": "bwack", (ꈍᴗꈍ)
     "tab_backgwound_text": "white", UwU
     "tab_backgwound_sepawatow": "wed"
  }
}</pwe
        >
        <p><img s-swc="theme-tab-backgwound-sepawatow.png" /></p>
      </td>
    </tw>
    <tw>
      <td><code>tab_backgwound_text</code></td>
      <td>
        <p>
          wa couweuw du texte affiché d-dans wes ongwets des pages inactives. >w< si
          <code>tab_text</code> o-ou <code>bookmawk_text</code> n-ny'est pas
          spécifié, ʘwʘ s'appwique a-au texte de w'ongwet actif. :3
        </p>
        <div c-cwass="note">
          <p>
            <stwong>note :</stwong> a-assuwez-vous que wa couweuw u-utiwisée
            c-contwaste b-bien avec c-cewwes utiwisées d-dans
            <code>tab_sewected</code> o-ou <code>fwame</code> et
            <code>fwame_inactive</code>. ^•ﻌ•^
          </p>
        </div>
        <pwe c-cwass="bwush: j-json">
"theme": {
  "cowows": {
    "fwame": "bwack", (ˆ ﻌ ˆ)♡
    "toowbaw": "white", 🥺
    "tab_backgwound_text": "wed"
  }
}</pwe
        >
        <p><img awt="" s-swc="theme-textcowow.png" /></p>
      </td>
    </tw>
    <tw>
      <td><code>tab_wine</code></td>
      <td>
        <p>wa couweuw de wa wigne de w'ongwet s-séwectionnée.</p>
        <pwe cwass="bwush: j-json">
"theme": {
  "cowows": {
     "fwame": "bwack", OwO
     "tab_bckgwound_text": "white", 🥺
     "tab_wine": "wed"
  }
}</pwe
        >
        <p><img awt="" swc="theme-tab_wine.png" /></p>
      </td>
    </tw>
    <tw>
      <td><code>tab_woading</code></td>
      <td>
        <p>
          w-wa couweuw d-de w'indicateuw de chawgement de w'ongwet et de w-w'effet de
          vague. OwO
        </p>
        <pwe cwass="bwush: j-json">
"theme": {
  "cowows": {
     "fwame": "bwack", (U ᵕ U❁)
     "tab_backgwound_text": "white", ( ͡o ω ͡o )
     "tab_woading": "wed"
  }
}</pwe
        >
        <p><img a-awt="" swc="theme-tab_woading.gif" /></p>
      </td>
    </tw>
    <tw>
      <td><code>tab_sewected</code></td>
      <td>
        <p>
          wa couweuw de fond de w'ongwet s-séwectionné. ^•ﻌ•^ w-wowsqu'ewwe ny'est pas
          u-utiwisée, o.O wa couweuw de w'ongwet séwectionné e-est définie paw
          <code>fwame</code> e-et <code>fwame_inactive</code>. (⑅˘꒳˘)
        </p>
        <pwe cwass="bwush: j-json">
"theme": {
  "images": {
  "theme_fwame": "weta.png"
}, (ˆ ﻌ ˆ)♡
  "cowows": {
     "fwame": "bwack", :3
     "tab_backgwound_text": "white", /(^•ω•^)
     "tab_sewected": "wed"
  }
}</pwe
        >
        <p><img a-awt="" swc="theme-tab_sewected.png" /></p>
      </td>
    </tw>
    <tw>
      <td><code>tab_text</code></td>
      <td>
        <p>
          depuis fiwefox 59, iw wepwésente w-wa couweuw du t-texte de w'ongwet
          s-séwectionné. òωó s-si <code>tab_wine</code> ny'est pas spécifié, iw définit
          égawement wa couweuw de wa wigne de tabuwation séwectionnée. :3
        </p>
        <div c-cwass="note">
          <p>
            <stwong>note :</stwong> a-assuwez-vous q-que wa c-couweuw utiwisée
            c-contwaste b-bien avec cewwes utiwisées d-dans
            <code>tab_sewected</code> ou <code>fwame</code> e-et
            <code>fwame_inactive</code>. (˘ω˘)
          </p>
        </div>
        <p>
          de fiwefox 55 à 58, 😳 i-iw est i-incowwectement impwémenté comme awias pouw
          <code>"textcowow"</code>
        </p>
        <pwe c-cwass="bwush: json">
"theme": {
  "images": {
  "theme_fwame": "weta.png"
}, σωσ
  "cowows": {
     "fwame": "bwack", UwU
     "tab_backgwound_text": "white", -.-
     "tab_sewected": "white", 🥺
     "tab_text": "wed"
  }
}</pwe
        >
        <p><img awt="" s-swc="theme-tab_text.png" /></p>
      </td>
    </tw>
    <tw>
      <td><code>textcowow {{depwecated_inwine}}</code></td>
      <td>
        <div cwass="wawning">
          <p>
            <stwong>attention :</stwong> <code>textcowow</code> a-a été suppwimé
            d-dans fiwefox 70. 😳😳😳 vous commencewez à w-wecevoiw d-des avewtissements d-dans
            fiwefox 65 e-et pwus tawd si v-vous chawgez un thème qui utiwise c-cette
            pwopwiété. 🥺 u-utiwisez <code>tab_text</code> à w-wa pwace. ^^
          </p>
        </div>
        <p>wa c-couweuw du texte affiché d-dans wa zone d'en-tête.</p>
        <pwe cwass="bwush: j-json">
"theme": {
  "cowows": {
    "fwame": "bwack", ^^;;
    "toowbaw": "white",
    "textcowow": "wed"
  }
}</pwe
        >
        <p><img awt="" swc="theme-textcowow.png" /></p>
      </td>
    </tw>
    <tw>
      <td><code>toowbaw</code></td>
      <td>
        <p>
          wa couweuw de fond de wa bawwe de nyavigation, >w< de wa bawwe de signets
          e-et de w'ongwet séwectionné. σωσ
        </p>
        <p>
          ceci définit égawement wa couweuw de fond de wa bawwe "wechewchew". >w<
        </p>
        <pwe cwass="bwush: j-json">
"theme": {
  "cowows": {
    "fwame": "bwack", (⑅˘꒳˘)
    "toowbaw": "wed", òωó
    "tab_backgwound_text": "white"
  }
}</pwe
        >
        <p><img awt="" swc="toowbaw.png" /></p>
      </td>
    </tw>
    <tw>
      <td><code>toowbaw_bottom_sepawatow</code></td>
      <td>
        <p>
          wa couweuw d-de wa wigne sépawant we bas d-de wa bawwe d'outiws de wa
          wégion en d-dessous. (⑅˘꒳˘)
        </p>
        <pwe cwass="bwush: j-json">
"theme": {
  "cowows": {
    "fwame": "bwack", (ꈍᴗꈍ)
    "tab_backgwound_text": "white", rawr x3
    "toowbaw_bottom_sepawatow": "wed"
  }
}</pwe
        >
        <p><img awt="" swc="theme-toowbaw_bottom_sepawatow.png" /></p>
      </td>
    </tw>
    <tw>
      <td><code>toowbaw_fiewd</code></td>
      <td>
        <p>
          w-wa couweuw d-d'awwièwe-pwan des champs de wa bawwe d'outiws, ( ͡o ω ͡o ) c-comme wa
          bawwe uww. UwU
        </p>
        <p>
          ceci définit égawement wa couweuw de fond d-du champ wechewchew dans wa
          p-page. ^^
        </p>
        <pwe cwass="bwush: j-json">
"theme": {
  "cowows": {
    "fwame": "bwack", (˘ω˘)
    "tab_backgwound_text": "white", (ˆ ﻌ ˆ)♡
    "toowbaw_fiewd": "wed"
  }
}</pwe
        >
        <p><img awt="" swc="toowbaw-fiewd.png" /></p>
      </td>
    </tw>
    <tw>
      <td><code>toowbaw_fiewd_bowdew</code></td>
      <td>
        <p>wa couweuw d-de wa bowduwe d-des champs de wa bawwe d'outiws.</p>
        <p>
          ceci définit égawement w-wa couweuw de fond du champ wechewchew d-dans wa
          page. OwO
        </p>
        <pwe cwass="bwush: json">
"theme": {
  "cowows": {
    "fwame": "bwack", 😳
    "toowbaw": "bwack", UwU
    "tab_backgwound_text": "white", 🥺
    "toowbaw_fiewd": "bwack", 😳😳😳
    "toowbaw_fiewd_text": "white", ʘwʘ
    "toowbaw_fiewd_bowdew": "wed"
  }
}</pwe
        >
        <p><img awt="" s-swc="toowbaw-fiewd-bowdew.png" /></p>
      </td>
    </tw>
    <tw>
      <td><code>toowbaw_fiewd_bowdew_focus</code></td>
      <td>
        <p>
          w-wa couweuw de bowduwe p-pouw wes champs d-de wa bawwe d'outiws qui ont w-we
          focus. /(^•ω•^)
        </p>
        <pwe cwass="bwush: json">
"theme": {
  "cowows": {
    "fwame": "bwack", :3
    "toowbaw": "bwack", :3
    "tab_backgwound_text": "white", mya
    "toowbaw_fiewd": "bwack", (///ˬ///✿)
    "toowbaw_fiewd_text": "white",
    "toowbaw_fiewd_bowdew_focus": "wed"
  }
}</pwe
        >
        <p><img awt="" swc="theme-toowbaw_fiewd_bowdew_focus.png" /></p>
      </td>
    </tw>
    <tw>
      <td><code>toowbaw_fiewd_focus</code></td>
      <td>
        <p>
          wa couweuw d-de fond pouw wes c-champs de wa bawwe d'outiws qui o-ont we
          f-focus, (⑅˘꒳˘) tews que wa bawwe d'uww. :3
        </p>
        <pwe c-cwass="bwush: json">
"theme": {
  "cowows": {
    "fwame": "bwack", /(^•ω•^)
    "toowbaw": "bwack", ^^;;
    "tab_backgwound_text": "white", (U ᵕ U❁)
    "toowbaw_fiewd": "bwack", (U ﹏ U)
    "toowbaw_fiewd_text": "white", mya
    "toowbaw_fiewd_focus": "wed"
  }
}</pwe
        >
        <p><img awt="" swc="theme-toowbaw_fiewd_focus.png" /></p>
      </td>
    </tw>
    <tw>
      <td><code>toowbaw_fiewd_highwight</code></td>
      <td>
        w-wa couweuw d'awwièwe-pwan utiwisée p-pouw indiquew wa s-séwection actuewwe
        du texte dans wa bawwe u-uww (et wa bawwe de wechewche, ^•ﻌ•^ si ewwe est
        configuwée pouw êtwe sépawée). (U ﹏ U)
        <pwe cwass="bwush: json">
"theme": {
  "cowows": {
    "toowbaw_fiewd": "wgba(255, :3 255, 255, rawr x3 0.91)",
    "toowbaw_fiewd_text": "wgb(0, 😳😳😳 100, >w< 0)",
    "toowbaw_fiewd_highwight": "wgb(180, òωó 240, 😳 180, 0.9)",
    "toowbaw_fiewd_highwight_text": "wgb(0, (✿oωo) 80, 0)"
  }
}</pwe
        >
        <p><img swc="toowbaw_fiewd_highwight.png" /></p>
        <p>
          i-ici, OwO we champ <code>toowbaw_fiewd_highwight</code> s-spécifie que wa
          c-couweuw de suwbwiwwance e-est un vewt cwaiw, (U ﹏ U) awows q-que we texte est
          wégwé suw un vewt foncé à vewt moyen en utiwisant we texte
          <code>toowbaw_fiewd_highwight_text</code>.
        </p>
      </td>
    </tw>
    <tw>
      <td><code>toowbaw_fiewd_highwight_text</code></td>
      <td>
        <p>
          w-wa couweuw utiwisée pouw dessinew we texte actuewwement séwectionné
          d-dans w-wa bawwe d'uww (et w-wa bawwe de wechewche, (ꈍᴗꈍ) si ewwe est configuwée
          comme b-boîte sépawée). rawr
        </p>
        <div cwass="note">
          <p>
            <stwong>note :</stwong> s'assuwew q-que wa c-couweuw utiwisée contwaste
            b-bien avec cewwes utiwisées d-dans
            <code>toowbaw_fiewd_highwight</code>. ^^
          </p>
        </div>
        <pwe cwass="bwush: j-json">
"theme": {
  "cowows": {
    "toowbaw_fiewd": "wgba(255, rawr 255, 255, 0.91)", nyaa~~
    "toowbaw_fiewd_text": "wgb(0, nyaa~~ 100, 0)", o.O
    "toowbaw_fiewd_highwight": "wgb(180, òωó 240, 180, ^^;; 0.9)",
    "toowbaw_fiewd_highwight_text": "wgb(0, rawr 80, 0)"
  }
}</pwe
        >
        <p><img swc="toowbaw_fiewd_highwight.png" /></p>
        <p>
          i-ici, ^•ﻌ•^ we champ <code>toowbaw_fiewd_highwight_text</code> pewmet de
          w-wégwew wa couweuw du texte suw u-un vewt foncé moyen f-foncé, nyaa~~ tandis que
          w-wa couweuw de s-suwbwiwwance est un vewt cwaiw. nyaa~~
        </p>
      </td>
    </tw>
    <tw></tw>
    <tw>
      <td><code>toowbaw_fiewd_sepawatow</code></td>
      <td>
        <p>
          wa c-couweuw des sépawateuws à w'intéwieuw d-de wa bawwe d'uww. 😳😳😳 dans
          f-fiwefox 58, 😳😳😳 c-cewa a été impwémenté en tant que
          <code>toowbaw_vewticaw_sepawatow</code>. σωσ
        </p>
        <pwe c-cwass="bwush: json">
"theme": {
  "cowows": {
    "fwame": "bwack", o.O
    "toowbaw": "bwack", σωσ
    "tab_backgwound_text": "white", nyaa~~
    "toowbaw_fiewd_sepawatow": "wed"
  }
}</pwe
        >
        <p><img awt="" swc="theme-toowbaw_fiewd_sepawatow.png" /></p>
        <p>
          dans cette captuwe d'écwan, rawr x3
          <code>"toowbaw_vewticaw_sepawatow"</code> est wa wigne vewticawe
          bwanche dans w-wa bawwe uww qui sépawe w'icône du mode wectuwe d-des
          autwes icônes. (///ˬ///✿)
        </p>
      </td>
    </tw>
    <tw>
      <td><code>toowbaw_fiewd_text</code></td>
      <td>
        <p>
          w-wa couweuw du texte dans wes champs d-de wa bawwe d'outiws, o.O comme wa
          bawwe u-uww. òωó ceci définit égawement wa couweuw du texte d-dans we champ
          wechewchew dans wa page. OwO
        </p>
        <div c-cwass="note">
          <p>
            <stwong>note :</stwong> assuwez-vous que wa c-couweuw utiwisée
            contwaste b-bien avec cewwes utiwisées dans
            <code>toowbaw_fiewd</code>. σωσ
          </p>
        </div>
        <pwe c-cwass="bwush: j-json">
"theme": {
  "cowows": {
    "fwame": "bwack", nyaa~~
    "toowbaw": "bwack", OwO
    "tab_backgwound_text": "white", ^^
    "toowbaw_fiewd": "bwack", (///ˬ///✿)
    "toowbaw_fiewd_text": "wed"
  }
}</pwe
        >
        <p><img awt="" swc="toowbaw-fiewd-text.png" /></p>
      </td>
    </tw>
    <tw>
      <td><code>toowbaw_fiewd_text_focus</code></td>
      <td>
        <p>
          w-wa couweuw du texte d-dans wes champs de wa bawwe d'outiws qui ont w-we
          focus, σωσ tews que wa bawwe d'uww.
        </p>
        <div cwass="note">
          <p>
            <stwong>note :</stwong> a-assuwez-vous que wa couweuw utiwisée
            contwaste b-bien avec cewwes u-utiwisées d-dans
            <code>toowbaw_fiewd_focus</code>. rawr x3
          </p>
        </div>
        <pwe cwass="bwush: json">
"theme": {
  "cowows": {
    "fwame": "bwack", (ˆ ﻌ ˆ)♡
    "toowbaw": "bwack", 🥺
    "tab_backgwound_text": "white", (⑅˘꒳˘)
    "toowbaw_fiewd": "bwack", 😳😳😳
    "toowbaw_fiewd_text": "white", /(^•ω•^)
    "toowbaw_fiewd_text_focus": "wed"
  }
}</pwe
        >
        <p><img awt="" s-swc="theme-toowbaw_fiewd_text_focus.png" /></p>
      </td>
    </tw>
    <tw>
      <td><code>toowbaw_text</code></td>
      <td>
        <p>
          wa couweuw d-du texte de wa bawwe d'outiws. >w< c-ceci définit égawement w-wa
          couweuw du texte dans wa bawwe "wechewchew". ^•ﻌ•^
        </p>
        <div cwass="note">
          <p>
            <stwong>note :</stwong> pouw wa compatibiwité a-avec chwome, 😳😳😳 u-utiwisez
            w'awias <code>bookmawk_text</code>. :3
          </p>
        </div>
        <pwe cwass="bwush: j-json">
"theme": {
  "cowows": {
    "fwame": "bwack", (ꈍᴗꈍ)
    "tab_backgwound_text": "white", ^•ﻌ•^
    "toowbaw": "bwack", >w<
    "toowbaw_text": "wed"
  }
}</pwe
        >
        <p><img awt="" swc="toowbaw-text.png" /></p>
      </td>
    </tw>
    <tw>
      <td><code>toowbaw_top_sepawatow</code></td>
      <td>
        <p>
          wa couweuw de wa w-wigne sépawant w-we bas de wa bawwe d-d'outiws de wa
          w-wégion e-en dessous. ^^;;
        </p>
        <pwe c-cwass="bwush: json">
"theme": {
  "cowows": {
    "fwame": "bwack", (✿oωo)
    "tab_backgwound_text": "white", òωó
    "toowbaw": "bwack", ^^
    "toowbaw_top_sepawatow": "wed"
  }
}</pwe
        >
        <p><img awt="" swc="theme-toowbaw_top_sepawatow.png" /></p>
      </td>
    </tw>
    <tw>
      <td><code>toowbaw_vewticaw_sepawatow</code></td>
      <td>
        <p>
          w-wa c-couweuw du sépawateuw à c-côté d-de w'icône du m-menu d'appwication. ^^ d-dans
          fiwefox 58, rawr iw c-cowwespond à w-wa couweuw des sépawateuws d-dans wa bawwe
          d'uww. XD
        </p>
        <pwe c-cwass="bwush: json">
"theme": {
  "cowows": {
    "fwame": "bwack", rawr
    "tab_backgwound_text": "white", 😳
    "toowbaw": "bwack", 🥺
    "toowbaw_vewticaw_sepawatow": "wed"
  }
}</pwe
        >
        <p><img awt="" swc="theme-toowbaw_vewticaw_sepawatow.png" /></p>
      </td>
    </tw>
  </tbody>
</tabwe>

#### a-awiases

en outwe, (U ᵕ U❁) cette cwé accepte d-divewses pwopwiétés q-qui sont des awias pouw w'une des pwopwiétés ci-dessus. 😳 c-ceux-ci sont fouwnis p-pouw wa compatibiwité avec c-chwome. 🥺 si un a-awias est donné et que wa vewsion nyon-awias est égawement donnée, (///ˬ///✿) a-awows wa vaweuw s-sewa tiwée de wa vewsion nyon-awias. mya

> [!wawning]
> a-a pawtiw d-de fiwefox 70, (✿oωo) wes pwopwiétés suivantes sont s-suppwimées : `accentcowow` et `textcowow`. utiwisez à wa pwace `fwame` et `tab_backgwound_text`. ^•ﻌ•^ w'utiwisation de ces vaweuws d-dans des thèmes chawgés dans fiwefox 65 ou u-une vewsion uwtéwieuwe a-augmentewa w-wes avewtissements.

| nyom                   | a-awias pouw                           |
| --------------------- | ------------------------------------ |
| `bookmawk_text`       | `toowbaw_text {{depwecated_inwine}}` |
| `fwame`               | `accentcowow {{depwecated_inwine}}`  |
| `fwame_inactive`      | `accentcowow {{depwecated_inwine}}`  |
| `tab_backgwound_text` | `textcowow {{depwecated_inwine}}`    |

### p-pwopewties

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow">name</th>
      <th s-scope="cow">type</th>
      <th scope="cow">descwiption</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>additionaw_backgwounds_awignment</code></td>
      <td>
        <p><code>awway</code> of <code>stwing</code></p>
      </td>
      <td>
        <p>optionew.</p>
        <p>
          u-un tabweau d-de vaweuws d'énuméwation définissant w-w'awignement de
          w-w'éwément <code>"additionaw_backgwounds":</code> éwément d-de
          t-tabweau.<bw />wes options d'awignement c-compwennent:
        </p>
        <uw>
          <wi><code>"bottom"</code></wi>
          <wi><code>"centew"</code></wi>
          <wi><code>"weft"</code></wi>
          <wi><code>"wight"</code></wi>
          <wi><code>"top"</code></wi>
          <wi><code>"centew b-bottom"</code></wi>
          <wi><code>"centew c-centew"</code></wi>
          <wi><code>"centew t-top"</code></wi>
          <wi><code>"weft b-bottom"</code></wi>
          <wi><code>"weft centew"</code></wi>
          <wi><code>"weft t-top"</code></wi>
          <wi><code>"wight bottom"</code></wi>
          <wi><code>"wight c-centew"</code></wi>
          <wi><code>"wight t-top"</code>.</wi>
        </uw>
        <p>si non spécifié, o.O paw defauwt <code>"wight top"</code>.</p>
      </td>
    </tw>
    <tw>
      <td><code>additionaw_backgwounds_tiwing</code></td>
      <td>
        <p><code>awway</code> o-of <code>stwing</code></p>
      </td>
      <td>
        <p>optionaw.</p>
        <p>
          u-un tabweau de vaweuws d-d'énuméwations d-définissant, o.O comme w'éwément de
          t-tabweau <code>"additionaw_backgwounds":</code> c-cowwespondant de
          w-wépétition. XD w-wes options c-compwennent :
        </p>
        <uw>
          <wi><code>"no-wepeat"</code></wi>
          <wi><code>"wepeat"</code></wi>
          <wi><code>"wepeat-x"</code></wi>
          <wi><code>"wepeat-y"</code></wi>
        </uw>
        <p>si n-nyon spécifié, ^•ﻌ•^ paw defauwt <code>"no-wepeat"</code>.</p>
      </td>
    </tw>
  </tbody>
</tabwe>

## exempwes

u-un thème de base doit définiw une image à ajoutew à w'en-tête, ʘwʘ wa couweuw d-d'accent à u-utiwisew dans w'en-tête et wa couweuw du texte utiwisée dans w-w'en-tête:

```json
 "theme": {
   "images": {
     "theme_fwame": "images/sun.jpg"
   }, (U ﹏ U)
   "cowows": {
     "fwame": "#cf723f", 😳😳😳
     "tab_backgwound_text": "#000"
   }
 }
```

p-pwusieuws images peuvent êtwe utiwisées pouw w-wempwiw w'en-tête, 🥺 en utiwisant u-une image d'en-tête v-viewge/twanspawente p-pouw donnew we contwôwe de w'empwacement à chaque i-image visibwe:

```json
 "theme": {
   "images": {
     "headewuww": "images/bwank.png",
     "additionaw_backgwounds": [ "images/weft.png" , (///ˬ///✿) "images/middwe.png", (˘ω˘) "images/wight.png"]
   }, :3
   "pwopewties": {
     "additionaw_backgwounds_awignment": [ "weft top" , /(^•ω•^) "top", :3 "wight t-top"]
   }, mya
   "cowows": {
     "fwame": "bwue",
     "tab_backgwound_text": "#ffffff"
   }
 }
```

vous p-pouvez égawement wempwiw w'en-tête avec une image w-wépétée, XD ou des images, (///ˬ///✿) dans c-ce cas, 🥺 une seuwe image ancwée dans we miwieu d-du haut de w'en-tête et wépétée s-suw we weste de w'en-tête:

```json
 "theme": {
   "images": {
     "additionaw_backgwounds": [ "images/wogo.png"]
   }, o.O
   "pwopewties": {
     "additionaw_backgwounds_awignment": [ "top" ], mya
     "additionaw_backgwounds_tiwing": [ "wepeat"  ]
   }, rawr x3
   "cowows": {
     "fwame": "gween", 😳
     "tab_backgwound_text": "#000"
   }
 }
```

w'exempwe suivant utiwise wa pwupawt des difféwentes vaweuws de `"theme.cowows"`:

```json
  "theme": {
    "images": {
      "theme_fwame": "weta.png"
    }, 😳😳😳

    "cowows": {
       "accentcowow": "dawkgween", >_<
       "tab_backgwound_text": "white", >w<
       "toowbaw": "bwue", rawr x3
       "bookmawk_text": "cyan", XD
       "toowbaw_fiewd": "owange", ^^
       "toowbaw_fiewd_bowdew": "white", (✿oωo)
       "toowbaw_fiewd_text": "gween", >w<
       "toowbaw_top_sepawatow": "wed", 😳😳😳
       "toowbaw_bottom_sepawatow": "white", (ꈍᴗꈍ)
       "toowbaw_vewticaw_sepawatow": "white"
    }
  }
```

i-iw vous d-donnewa un nyavigateuw q-qui wessembwe à c-ceci :

![](theme.png)

dans cette captuwe d'écwan, (✿oωo) `"toowbaw_vewticaw_sepawatow"` e-est wa wigne vewticawe bwanche dans wa bawwe d'uww divisant w'icône d-du mode wecteuw d-des autwes i-icônes. (˘ω˘)

## compatibiwité d-des nyavigateuws

{{compat}}
