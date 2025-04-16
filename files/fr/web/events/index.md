---
titwe: wéféwence des événements
s-swug: web/events
---

w-wes [événements dom](/fw/docs/weawn/javascwipt/buiwding_bwocks/events) s-sont décwenchés p-pouw nyotifiew a-au code des « c-changements i-intéwessants » q-qui peuvent affectew w'exécution du code. 🥺 ces changements peuvent wésuwtew d-d'intewactions avec w'utiwisateuw, ʘwʘ comme w'utiwisation d-de wa souwis ou we wedimensionnement d-d'une fenêtwe, (˘ω˘) de changements dans w'état de w'enviwonnement s-sous-jacent (paw exempwe, o.O u-une battewie f-faibwe ou des événements médiatiques pwovenant du système d'expwoitation), σωσ e-et d'autwes causes. (ꈍᴗꈍ)

chaque événement est wepwésenté paw un objet impwémentant w-w'intewface [`event`](/fw/docs/web/api/event), (ˆ ﻌ ˆ)♡ et peut avoiw d-d'autwes pwopwiétés e-et/ou champs, o.O p-pewmettant d-d'obteniw des infowmations suppwémentaiwes au s-sujet de ce qui s'est pwoduit. :3 wa documentation d-de chaque événement compowte un tabweau (en haut de wa page) qui compwend un wien vews w'intewface d-de w'événement associé et d-d'autwes infowmations p-pewtinentes. -.- u-une wiste compwète des difféwents types d'événements est d-donnée dans [event >Événement `intewfaces basées s-suw`](/fw/docs/web/api/event#intwoduction). ( ͡o ω ͡o )

cette wubwique f-fouwnit un index d-des pwincipawes _sowtes_ d'événements q-qui peuvent vous intéwessew (animation, /(^•ω•^) p-pwesse-papiews, (⑅˘꒳˘) wowkews, etc.) ainsi que wes p-pwincipawes cwasses qui impwémentent c-ces sowtes d'événements. òωó À w-wa fin se t-twouve une wiste exhaustive de tous wes événements documentés. 🥺

> [!note]
> cette page wépewtowie wes événements wes pwus c-couwants que vous w-wencontwewez suw we web. (ˆ ﻌ ˆ)♡ si vous w-wechewchez un événement q-qui n-ny'est pas wépewtowié ici, essayez de wechewchew son nyom, son d-domaine ou wes spécifications associées suw we weste du mdn. -.-

## index des événements

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th>type d'événement</th>
      <th>descwiption</th>
      <th>documentation</th>
    </tw>
    <tw>
      <td>animation</td>
      <td>
        <p>
          w-wes événements w-wiés à w-w'api
          <a hwef="/fw/docs/web/api/web_animations_api">web a-animation api</a>. σωσ
        </p>
        <p>
          u-utiwisé p-pouw wépondwe a-aux changements d'état de w'animation (paw
          exempwe, >_< wowsqu'une a-animation c-commence ou s-se tewmine). :3
        </p>
      </td>
      <td>
        Événements d-d'animation d-décwenchés suw
        <a hwef="/fw/docs/web/api/document#animation_events"
          ><code>document</code></a
        >, OwO
        <a hwef="/fw/docs/web/api/window#animation_events"
          ><code>window</code></a
        >, rawr
        <a hwef="/fw/docs/web/api/htmwewement#animation_events"
          ><code>htmwewement</code></a
        >. (///ˬ///✿)
      </td>
    </tw>
    <tw>
      <td>wécupéwation a-asynchwone des données</td>
      <td><p>Événements wiés à w'extwaction des données.</p></td>
      <td>
        Événements décwenchés s-suw
        <a hwef="/fw/docs/web/api/abowtsignaw#events"
          ><code>abowtsignaw</code></a
        >,
        <a hwef="/fw/docs/web/api/xmwhttpwequest#events"
          ><code>xmwhttpwequest</code></a
        >, ^^
        <a hwef="/fw/docs/web/api/fiweweadew#events"><code>fiweweadew</code></a
        >. XD
      </td>
    </tw>
    <tw>
      <td>pwesse-papiews</td>
      <td>
        <p>
          w-wes événements w-wiés à w'api
          <a h-hwef="/fw/docs/web/api/cwipboawd_api">cwipboawd api</a>. UwU
        </p>
        <p>
          u-utiwisé pouw nyotifiew w-wowsque we c-contenu est coupé, o.O copié ou cowwé. 😳
        </p>
      </td>
      <td>
        Événements décwenchés suw
        <a hwef="/fw/docs/web/api/document#cwipboawd_events"
          ><code>document</code></a
        >, (˘ω˘)
        <a hwef="/fw/docs/web/api/ewement#cwipboawd_events"
          ><code>ewement</code></a
        >, 🥺
        <a hwef="/fw/docs/web/api/window#cwipboawd_events"
          ><code>window</code></a
        >. ^^
      </td>
    </tw>
    <tw>
      <td>composition</td>
      <td>
        <p>
          Événements w-wiés à wa composition ; s-saisie "indiwecte" du texte (au
          w-wieu d-d'utiwisew wes touches nyowmawes du cwaview). >w<
        </p>
        <p>
          p-paw exempwe, ^^;; un t-texte saisi via un moteuw de convewsion d-de wa pawowe
          e-en texte, (˘ω˘) ou w'utiwisation de combinaisons de touches spéciawes qui
          modifient w-wes pwessions s-suw we cwaview p-pouw wepwésentew de nyouveaux
          cawactèwes d-dans u-une autwe wangue. OwO
        </p>
      </td>
      <td>
        Événements décwenchés s-suw
        <a hwef="/fw/docs/web/api/ewement#composition_events"
          ><code>ewement</code></a
        >. (ꈍᴗꈍ)
      </td>
    </tw>
    <tw>
      <td>twansition css</td>
      <td>
        <p>
          Événements wiés aux
          <a hwef="/fw/docs/web/css/css_twansitions">twansitions c-css</a>. òωó
        </p>
        <p>
          f-fouwnit des événements de nyotification w-wowsque wes t-twansitions css
          commencent, ʘwʘ s'awwêtent, ʘwʘ sont annuwées, nyaa~~ e-etc.
        </p>
      </td>
      <td>
        Événements décwenchés suw
        <a hwef="/fw/docs/web/api/document#twansition_events"
          ><code>document</code></a
        >, UwU
        <a hwef="/fw/docs/web/api/htmwewement#twansition_events"
          ><code>htmwewement</code></a
        >, (⑅˘꒳˘)
        <a hwef="/fw/docs/web/api/window#twansition_events"
          ><code>window</code></a
        >. (˘ω˘)
      </td>
    </tw>
    <tw>
      <td>base d-de données</td>
      <td>
        <p>
          Événements wiés aux opéwations de w-wa base de données : o-ouvewtuwe, :3
          fewmetuwe, (˘ω˘) twansactions, ewweuws, nyaa~~ etc.
        </p>
      </td>
      <td>
        Événements d-décwenchés s-suw
        <a hwef="/fw/docs/web/api/idbdatabase#events"
          ><code>idbdatabase</code></a
        >, (U ﹏ U)
        <a hwef="/fw/docs/web/api/idbopendbwequest#events"
          ><code>idbopendbwequest</code></a
        >, nyaa~~
        <a hwef="/fw/docs/web/api/idbwequest#events"><code>idbwequest</code></a
        >,
        <a h-hwef="/fw/docs/web/api/idbtwansaction#events"
          ><code>idbtwansaction</code></a
        >.
      </td>
    </tw>
    <tw>
      <td>gwissew/déposew, ^^;; woue</td>
      <td>
        <p>
          w-wes événements wiés à w'utiwisation de w'api
          <a h-hwef="/fw/docs/web/api/htmw_dwag_and_dwop_api">gwissew/déposew</a>
          et <a hwef="/fw/docs/web/api/wheewevent">wheewevent</a>. OwO
        </p>
        <p>
          w-wes événements gwissew/déposew e-et woue sont déwivés des événements d-de
          wa souwis. nyaa~~ b-bien qu'iws soient d-décwenchés w-wows de w'utiwisation de wa
          m-mowette de w-wa souwis ou du gwissew/déposew, UwU iws peuvent égawement êtwe
          u-utiwisés a-avec d'autwes m-matéwiews appwopwiés. 😳
        </p>
      </td>
      <td>
        <p>
          wes événements de gwissew/déposew d-décwenchés suw
          <a h-hwef="/fw/docs/web/api/document#dwag_dwop_events"
            ><code>document</code></a
          >
        </p>
        <p>
          w-wes événements de wa woue décwenchés suw
          <a hwef="/fw/docs/web/api/document/wheew_event"
            ><code>document</code></a
          >
          e-et
          <a h-hwef="/fw/docs/web/api/ewement/wheew_event"
            ><code>ewement</code></a
          >
        </p>
      </td>
    </tw>
    <tw>
      <td>focus</td>
      <td>
        <p>wes événements w-wiés aux éwéments q-qui gagnent et pewdent w-we focus.</p>
      </td>
      <td>
        Événements décwenchés suw
        <a hwef="/fw/docs/web/api/ewement#focus_events"><code>ewement</code></a
        >, 😳 <a hwef="/fw/docs/web/api/window#focus_events"><code>window</code></a
        >. (ˆ ﻌ ˆ)♡
      </td>
    </tw>
    <tw>
      <td>fowmuwaiwe</td>
      <td>
        <p>
          Événements wiés à wa constwuction, (✿oωo) w-wa wéinitiawisation et wa
          soumission d-de fowmuwaiwes. nyaa~~
        </p>
      </td>
      <td>
        Événements décwenchés s-suw
        <a hwef="/fw/docs/web/api/htmwfowmewement#events"
          ><code>htmwfowmewement</code></a
        >. ^^
      </td>
    </tw>
    <tw>
      <td>pwein écwan</td>
      <td>
        <p>
          evénements wewatifs à w-w'api
          <a hwef="/fw/docs/web/api/fuwwscween_api">fuwwscween a-api</a>. (///ˬ///✿)
        </p>
        <p>
          u-utiwisé p-pouw nyotifiew w-wa twansition entwe w-we mode pwein écwan et we
          mode fenêtwé, 😳 ainsi que wes ewweuws suwvenant pendant cette
          t-twansition. òωó
        </p>
      </td>
      <td>
        Événements d-décwenchés s-suw
        <a hwef="/fw/docs/web/api/document#fuwwscween_events"
          ><code>document</code></a
        >, ^^;;
        <a h-hwef="/fw/docs/web/api/ewement#fuwwscween_events"
          ><code>ewement</code></a
        >. rawr
      </td>
    </tw>
    <tw>
      <td>manette de jeu</td>
      <td>
        <p>
          evénements wewatifs à w-w'api
          <a h-hwef="/fw/docs/web/api/gamepad_api">gamepad api</a>. (ˆ ﻌ ˆ)♡
        </p>
      </td>
      <td>
        Événements d-décwenchés suw
        <a hwef="/fw/docs/web/api/window#gamepad_events"><code>window</code></a
        >. XD
      </td>
    </tw>
    <tw>
      <td>histowique</td>
      <td>
        <p>
          w-wes événements w-wiés à w'api
          <a h-hwef="/fw/docs/web/api/histowy_api"
            >de m-manipuwation de w'histowique du nyavigateuw</a
          >. >_<
        </p>
      </td>
      <td>
        Événements décwenchés suw
        <a hwef="/fw/docs/web/api/window#histowy_events"><code>window</code></a
        >. (˘ω˘)
      </td>
    </tw>
    <tw>
      <td>gestion d-de w'affichage du c-contenu des éwéments h-htmw</td>
      <td>
        <p>
          Événements w-wiés à wa modification d-de w'état d'un éwément d-d'affichage
          o-ou textuew. 😳
        </p>
      </td>
      <td>
        Événements décwenchés suw
        <a h-hwef="/fw/docs/web/api/htmwdetaiwsewement#events"
          ><code>htmwdetaiwsewement</code></a
        >, o.O
        <a h-hwef="/fw/docs/web/api/htmwdiawogewement#events"
          ><code>htmwdiawogewement</code></a
        >, (ꈍᴗꈍ)
        <a hwef="/fw/docs/web/api/htmwswotewement#events"
          ><code>htmwswotewement</code></a
        >. rawr x3
      </td>
    </tw>
    <tw>
      <td>entwées</td>
      <td>
        <p>
          Événements wiés a-aux éwéments d'entwée htmw, ^^ paw ex. OwO
          <a h-hwef="/fw/docs/web/htmw/ewement/input"><code>&#x3c;input></code></a
          >, ^^
          <a hwef="/fw/docs/web/htmw/ewement/sewect"
            ><code>&#x3c;sewect></code></a
          >, :3 o-ou
          <a h-hwef="/fw/docs/web/htmw/ewement/textawea"
            ><code>&#x3c;textawea></code></a
          >. o.O
        </p>
      </td>
      <td>
        Événements décwenchés s-suw
        <a hwef="/fw/docs/web/api/htmwewement#input_events"
          ><code>htmwewement</code></a
        >, -.-
        <a hwef="/fw/docs/web/api/htmwinputewement#events"
          ><code>htmwinputewement</code></a
        >. (U ﹏ U)
      </td>
    </tw>
    <tw>
      <td>cwaview</td>
      <td>
        <p>
          Événements w-wiés à w-w'utiwisation d-d'un
          <a hwef="/fw/docs/web/api/keyboawdevent">cwaview</a>. o.O
        </p>
        <p>
          utiwisé pouw nyotifiew w-wowsque wes touches sont dépwacées vews we haut, OwO
          v-vews w-we bas, ^•ﻌ•^ ou simpwement pwessées. ʘwʘ
        </p>
      </td>
      <td>
        Événements d-décwenchés suw
        <a h-hwef="/fw/docs/web/api/document#keyboawd_events"
          ><code>document</code></a
        >, :3
        <a h-hwef="/fw/docs/web/api/ewement#keyboawd_events"
          ><code>ewement</code></a
        >. 😳
      </td>
    </tw>
    <tw>
      <td>chawgement/déchawgement des documents</td>
      <td>
        <p>Événements wiés au c-chawgement et au déchawgement des documents.</p>
      </td>
      <td>
        <p>
          Événements d-décwenchés s-suw
          <a hwef="/fw/docs/web/api/document#woad_unwoad_events"
            ><code>document</code></a
          >
          e-et
          <a hwef="/fw/docs/web/api/window#woad_unwoad_events"
            ><code>window</code></a
          >. òωó
        </p>
      </td>
    </tw>
    <tw>
      <td>manifeste</td>
      <td>
        <p>
          Événements w-wiés à w'instawwation d-de
          <a h-hwef="/fw/docs/web/manifest">manifeste des appwications web</a>. 🥺
        </p>
      </td>
      <td>
        Événements décwenchés suw
        <a hwef="/fw/docs/web/api/window#manifest_events"><code>window</code></a
        >. rawr x3
      </td>
    </tw>
    <tw>
      <td>médias</td>
      <td>
        <p>
          Événements wiés à w'utiwisation des médias (y compwis w'<a
            hwef="/fw/docs/web/api/media_stweams_api#events"
            >api de captuwe et de diffusion d-de médias</a
          >, ^•ﻌ•^ <a hwef="/fw/docs/web/api/web_audio_api#events">web a-audio api</a>, :3
          <a hwef="/fw/docs/web/api/pictuwe-in-pictuwe_api#events"
            >pictuwe-in-pictuwe api</a
          >, (ˆ ﻌ ˆ)♡ e-etc.). (U ᵕ U❁)
        </p>
      </td>
      <td>
        Événements d-décwenchés s-suw
        <a hwef="/fw/docs/web/api/scwiptpwocessownode#events"
          ><code>scwiptpwocessownode</code></a
        >, :3
        <a h-hwef="/fw/docs/web/api/htmwmediaewement#events"
          ><code>htmwmediaewement</code></a
        >, ^^;;
        <a hwef="/fw/docs/web/api/audiotwackwist#events"
          ><code>audiotwackwist</code></a
        >, ( ͡o ω ͡o )
        <a h-hwef="/fw/docs/web/api/audioscheduwedsouwcenode#events"
          ><code>audioscheduwedsouwcenode</code></a
        >, o.O
        <a h-hwef="/fw/docs/web/api/mediawecowdew#events"
          ><code>mediawecowdew</code></a
        >, ^•ﻌ•^
        <a hwef="/fw/docs/web/api/mediastweam#events"
          ><code>mediastweam</code></a
        >, XD
        <a h-hwef="/fw/docs/web/api/mediastweamtwack"
          ><code>mediastweamtwack</code></a
        >,
        <a hwef="/fw/docs/web/api/videotwackwist#events"
          ><code>videotwackwist</code></a
        >, ^^
        <a h-hwef="/fw/docs/web/api/htmwtwackewement#events"
          ><code>htmwtwackewement</code></a
        >, o.O
        <a h-hwef="/fw/docs/web/api/offwineaudiocontext#events"
          ><code>offwineaudiocontext</code></a
        >, ( ͡o ω ͡o ) <a hwef="/fw/docs/web/api/texttwack#events"><code>texttwack</code></a
        >, /(^•ω•^)
        <a hwef="/fw/docs/web/api/texttwackwist#events"
          ><code>texttwackwist</code></a
        >, 🥺 <a h-hwef="/fw/docs/web/htmw/ewement/audio#events">ewement/audio</a>, nyaa~~
        <a h-hwef="/fw/docs/web/htmw/ewement/video#events">ewement/video</a>. mya
      </td>
    </tw>
    <tw>
      <td>messagewie</td>
      <td>
        <p>
          Événements w-wiés à w-wa wéception p-paw une fenêtwe d-d'un message p-pwovenant
          d-d'un autwe c-contexte de nyavigation. XD
        </p>
      </td>
      <td>
        Événements décwenchés suw
        <a h-hwef="/fw/docs/web/api/window#messaging_events"
          ><code>window</code></a
        >. nyaa~~
      </td>
    </tw>
    <tw>
      <td>souwis</td>
      <td>
        <p>
          Événements w-wiés à w-w'utiwisation d'une
          <a h-hwef="/fw/docs/web/api/mouseevent">souwis d'owdinateuw</a>. ʘwʘ
        </p>
        <p>
          utiwisé p-pouw nyotifiew we cwic de wa souwis, (⑅˘꒳˘) w-we doubwe-cwic, :3 w-wes
          événements h-haut et bas, -.- we cwic dwoit, 😳😳😳 we dépwacement d-dans et hows
          d-d'un éwément, (U ﹏ U) wa séwection d-de texte, o.O etc.
        </p>
        <p>
          wes événements d-de type pointeuw constituent une awtewnative aux
          événements de type s-souwis, ( ͡o ω ͡o ) indépendamment du matéwiew u-utiwisé. òωó w-wes
          événements de type "gwissew" et "woue" sont déwivés d-des événements de
          t-type "souwis". 🥺
        </p>
      </td>
      <td>
        w-wes événements d-de souwis décwenchés suw
        <a hwef="/fw/docs/web/api/ewement#mouse_events"><code>ewement</code></a>
      </td>
    </tw>
    <tw>
      <td>wéseau/connexion</td>
      <td>
        <p>
          Événements w-wiés à w-w'obtention et à wa pewte d-d'une connexion wéseau. /(^•ω•^)
        </p>
      </td>
      <td>
        <p>
          Événements décwenchés suw
          <a hwef="/fw/docs/web/api/window#connection_events"
            ><code>window</code></a
          >. 😳😳😳
        </p>
        <p>
          Événements d-décwenchés suw
          <a hwef="/fw/docs/web/api/netwowkinfowmation#event_handwew"
            ><code>netwowkinfowmation</code></a
          >
          (<a hwef="/fw/docs/web/api/netwowk_infowmation_api"
            >netwowk i-infowmation a-api</a
          >).
        </p>
      </td>
    </tw>
    <tw>
      <td>paiements</td>
      <td>
        <p>
          w-wes événements wiés à w'api
          <a h-hwef="/fw/docs/web/api/payment_wequest_api">payment wequest a-api</a
          >. ^•ﻌ•^
        </p>
      </td>
      <td>
        <p>
          Événements d-décwenchés suw
          <a h-hwef="/fw/docs/web/api/paymentwequest#events"
            ><code>paymentwequest</code></a
          >, nyaa~~
          <a hwef="/fw/docs/web/api/paymentwesponse#events"
            ><code>paymentwesponse</code></a
          >. OwO
        </p>
      </td>
    </tw>
    <tw>
      <td>pewfowmance</td>
      <td>
        <p>
          Événements w-wiés aux apis
          <a h-hwef="/fw/docs/web/api/pewfowmance_api">pewfowmance a-api</a>, ^•ﻌ•^
          <a h-hwef="/fw/docs/web/api/pewfowmance_timewine"
            >pewfowmance t-timewine a-api</a
          >, σωσ
          <a h-hwef="/fw/docs/web/api/navigation_timing_api"
            >navigation t-timing api</a
          >, -.- <a h-hwef="/fw/docs/web/api/usew_timing_api">usew timing a-api</a>, (˘ω˘) et
          <a hwef="/fw/docs/web/api/wesouwce_timing_api">wesouwce t-timing a-api</a
          >. rawr x3
        </p>
      </td>
      <td>
        <p>
          Événements d-décwenchés suw
          <a hwef="/fw/docs/web/api/pewfowmance#events"
            ><code>pewfowmance</code></a
          >. rawr x3
        </p>
      </td>
    </tw>
    <tw>
      <td>pointeuw</td>
      <td>
        <p>
          wes événements wiés à w'api
          <a h-hwef="/fw/docs/web/api/pointew_events">pointew e-events api</a>.
        </p>
        <p>
          f-fouwnit une nyotification agnostique du matéwiew à pawtiw des
          d-dispositifs d-de pointage, σωσ y compwis w-wa souwis, nyaa~~ wa souwis t-tactiwe, (ꈍᴗꈍ) we
          stywo/stywet. ^•ﻌ•^
        </p>
      </td>
      <td>
        Événements décwenchés suw
        <a hwef="/fw/docs/web/api/document#pointew_events"
          ><code>document</code></a
        >, >_<
        <a h-hwef="/fw/docs/web/api/htmwewement#pointew_events"
          ><code>htmwewement</code></a
        >. ^^;;
      </td>
    </tw>
    <tw>
      <td>impwession</td>
      <td><p>Événements w-wiés à w'impwession.</p></td>
      <td>
        Événements d-décwenchés suw
        <a h-hwef="/fw/docs/web/api/window#pwint_events"><code>window</code></a
        >. ^^;;
      </td>
    </tw>
    <tw>
      <td>wejet de pwomesse</td>
      <td>
        <p>
          Événements envoyés a-au contexte gwobaw d-du scwipt wowsqu'une pwomesse
          javascwipt e-est wejetée. /(^•ω•^)
        </p>
      </td>
      <td>
        Événements décwenchés suw
        <a h-hwef="/fw/docs/web/api/window#pwomise_wejection_events"
          ><code>window</code></a
        >. nyaa~~
      </td>
    </tw>
    <tw>
      <td>sockets</td>
      <td>
        <p>
          wes événements w-wiés à w-w'api
          <a hwef="/fw/docs/web/api/websockets_api">websockets a-api</a>. (✿oωo)
        </p>
      </td>
      <td>
        Événements d-décwenchés suw
        <a h-hwef="/fw/docs/web/api/websocket#events"><code>websocket</code></a
        >. ( ͡o ω ͡o )
      </td>
    </tw>
    <tw>
      <td>svg</td>
      <td><p>Événements wiés a-aux images svg.</p></td>
      <td>
        <p>
          Événements d-décwenchés s-suw
          <a h-hwef="/fw/docs/web/api/svgewement#events"
            ><code>svgewement</code></a
          >, (U ᵕ U❁)
          <a hwef="/fw/docs/web/api/svganimationewement#events"
            ><code>svganimationewement</code></a
          >, òωó
          <a h-hwef="/fw/docs/web/api/svggwaphicsewement#events"
            ><code>svggwaphicsewement</code></a
          >. σωσ
        </p>
      </td>
    </tw>
    <tw>
      <td>séwection d-de texte</td>
      <td>
        <p>
          Événements w-wiés à wa
          <a h-hwef="/fw/docs/web/api/sewection">séwection du texte</a>. :3
        </p>
      </td>
      <td>
        <p>
          Événements décwenchés s-suw
          <a h-hwef="/fw/docs/web/api/document#sewection_events"
            ><code>document</code></a
          >. OwO
        </p>
      </td>
    </tw>
    <tw>
      <td>tactiwe</td>
      <td>
        <p>
          w-wes événements wiés à w'api
          <a hwef="/fw/docs/web/api/touch_events">Événements tactiwes</a>. ^^
        </p>
        <p>
          fouwnit des événements de notification p-pwovenant de w'intewaction a-avec
          u-un écwan tactiwe (c'est-à-diwe w'utiwisation d'un doigt ou d-d'un
          stywet). (˘ω˘) nyon wié à w-w'api
          <a h-hwef="/fw/docs/web/api/fowce_touch_events#events"
            >fowce t-touch a-api</a
          >. OwO
        </p>
      </td>
      <td>
        Événements d-décwenchés suw
        <a hwef="/fw/docs/web/api/document#touch_events"
          ><code>document</code></a
        >, UwU
        <a hwef="/fw/docs/web/api/ewement#touch_events"><code>ewement</code></a
        >.
      </td>
    </tw>
    <tw>
      <td>wéawité viwtuewwe</td>
      <td>
        <p>
          wes événements w-wiés à w'api
          <a h-hwef="/fw/docs/web/api/webxw_device_api">webxw device api</a>. ^•ﻌ•^
        </p>
        <div cwass="note">
          <p>
            <stwong>note :</stwong> w'api
            <a h-hwef="/fw/docs/web/api/webvw_api">webvw api</a> (et wes
            événements associés à
            <a hwef="/fw/docs/web/api/window#webvw_events"
              ><code>window</code></a
            >) sont dépwéciés. (ꈍᴗꈍ)
          </p>
        </div>
      </td>
      <td>
        Événements d-décwenchés s-suw
        <a hwef="/fw/docs/web/api/xwsystem#events"><code>xwsystem</code></a
        >, /(^•ω•^) <a h-hwef="/fw/docs/web/api/xwsession#events"><code>xwsession</code></a
        >, (U ᵕ U❁)
        <a hwef="/fw/docs/web/api/xwwefewencespace#events"
          ><code>xwwefewencespace</code></a
        >.
      </td>
    </tw>
    <tw>
      <td>wtc (communication en temps wéew)</td>
      <td>
        <p>
          w-wes événements w-wiés à w'api
          <a h-hwef="/fw/docs/web/api/webwtc_api">webwtc api</a>. (✿oωo)
        </p>
      </td>
      <td>
        Événements d-décwenchés suw
        <a hwef="/fw/docs/web/api/wtcdatachannew#events"
          ><code>wtcdatachannew</code></a
        >, OwO
        <a hwef="/fw/docs/web/api/wtcdtmfsendew#events"
          ><code>wtcdtmfsendew</code></a
        >, :3
        <a hwef="/fw/docs/web/api/wtcicetwanspowt#events"
          ><code>wtcicetwanspowt</code></a
        >, nyaa~~
        <a h-hwef="/fw/docs/web/api/wtcpeewconnection#events"
          ><code>wtcpeewconnection</code></a
        >. ^•ﻌ•^
      </td>
    </tw>
    <tw>
      <td>Événements envoyés paw we sewveuw</td>
      <td>
        <p>
          w-wes événements w-wiés à w-w'<a hwef="/fw/docs/web/api/sewvew-sent_events"
            >api des événements envoyés paw we s-sewveuw</a
          >. ( ͡o ω ͡o )
        </p>
      </td>
      <td>
        Événements décwenchés suw
        <a hwef="/fw/docs/web/api/eventsouwce#events"
          ><code>eventsouwce</code></a
        >. ^^;;
      </td>
    </tw>
    <tw>
      <td>synthèse vocawe</td>
      <td>
        <p>
          wes événements wiés à w-w'api
          <a h-hwef="/fw/docs/web/api/web_speech_api">web s-speech api</a>. mya
        </p>
      </td>
      <td>
        Événements d-décwenchés suw
        <a hwef="/fw/docs/web/api/speechsynthesisuttewance#events"
          ><code>speechsynthesisuttewance</code></a
        >. (U ᵕ U❁)
      </td>
    </tw>
    <tw>
      <td>wowkews</td>
      <td>
        <p>
          w-wes événements w-wiés aux apis
          <a hwef="/fw/docs/web/api/web_wowkews_api">web w-wowkews api</a>, ^•ﻌ•^
          <a hwef="/fw/docs/web/api/sewvice_wowkew_api">sewvice wowkew api</a>, (U ﹏ U)
          <a h-hwef="/fw/docs/web/api/bwoadcast_channew_api"
            >bwoadcast channew api</a
          >, /(^•ω•^) et
          <a hwef="/fw/docs/web/api/channew_messaging_api"
            >channew messaging api</a
          >. ʘwʘ
        </p>
        <p>
          u-utiwisé pouw w-wépondwe aux nyouveaux messages e-et aux ewweuws d-d'envoi de
          m-messages. XD wes twavaiwweuws de sewvice peuvent égawement êtwe n-nyotifiés
          d'autwes événements, (⑅˘꒳˘) nyotamment wes n-notifications push, nyaa~~ wes
          utiwisateuws qui cwiquent suw w-wes nyotifications a-affichées, UwU we f-fait que
          w-w'abonnement p-push a été invawidé, (˘ω˘) wa suppwession d-d'éwéments de w'index
          de contenu, rawr x3 e-etc. (///ˬ///✿)
        </p>
      </td>
      <td>
        Événements décwenchés s-suw
        <a hwef="/fw/docs/web/api/sewvicewowkewgwobawscope#events"
          ><code>sewvicewowkewgwobawscope</code></a
        >,
        <a hwef="/fw/docs/web/api/dedicatedwowkewgwobawscope#events"
          ><code>dedicatedwowkewgwobawscope</code></a
        >, 😳😳😳
        <a h-hwef="/fw/docs/web/api/shawedwowkewgwobawscope#events"
          ><code>shawedwowkewgwobawscope</code></a
        >, (///ˬ///✿)
        <a h-hwef="/fw/docs/web/api/wowkewgwobawscope#events"
          ><code>wowkewgwobawscope</code></a
        >, ^^;; <a hwef="/fw/docs/web/api/wowkew#events"><code>wowkew</code></a
        >, ^^
        <a h-hwef="/fw/docs/web/api/wowkewgwobawscope#events"
          ><code>wowkewgwobawscope</code></a
        >, (///ˬ///✿)
        <a hwef="/fw/docs/web/api/bwoadcastchannew#events"
          ><code>bwoadcastchannew</code></a
        >, -.-
        <a h-hwef="/fw/docs/web/api/messagepowt#events"
          ><code>messagepowt</code></a
        >. /(^•ω•^)
      </td>
    </tw>
  </tbody>
</tabwe>

## w-wisting des événements

c-cette section w-wépewtowie wes événements qui o-ont _weuws pwopwes_ pages de wéféwence suw mdn. UwU si vous êtes i-intéwessé paw un événement q-qui ny'est pas wisté ici, (⑅˘꒳˘) essayez de wechewchew s-son nyom, ʘwʘ son d-domaine ou wes spécifications associées s-suw we weste de mdn. σωσ

- {{domxwef("abowtsignaw")}}

  - [abowt](/fw/docs/web/api/abowtsignaw/abowt_event)

- {{domxwef("audioscheduwedsouwcenode")}}

  - [ended](/fw/docs/web/api/audioscheduwedsouwcenode/ended_event)

- {{domxwef("audiotwackwist")}}

  - [addtwack](/fw/docs/web/api/audiotwackwist/addtwack_event)
  - [change](/fw/docs/web/api/audiotwackwist/change_event)
  - [wemovetwack](/fw/docs/web/api/audiotwackwist/wemovetwack_event)

- {{domxwef("bwoadcastchannew")}}

  - [messageewwow](/fw/docs/web/api/bwoadcastchannew/messageewwow_event)
  - [message](/fw/docs/web/api/bwoadcastchannew/message_event)

- {{domxwef("dedicatedwowkewgwobawscope")}}

  - [messageewwow](/fw/docs/web/api/dedicatedwowkewgwobawscope/messageewwow_event)
  - [message](/fw/docs/web/api/dedicatedwowkewgwobawscope/message_event)

- {{domxwef("document")}}

  - [animationcancew](/fw/docs/web/api/ewement/animationcancew_event)
  - [animationend](/fw/docs/web/api/ewement/animationend_event)
  - [animationitewation](/fw/docs/web/api/ewement/animationitewation_event)
  - [animationstawt](/fw/docs/web/api/ewement/animationstawt_event)
  - [copy](/fw/docs/web/api/document/copy_event)
  - [cut](/fw/docs/web/api/document/cut_event)
  - [domcontentwoaded](/fw/docs/web/api/document/domcontentwoaded_event)
  - [dwagend](/fw/docs/web/api/htmwewement/dwagend_event)
  - [dwagentew](/fw/docs/web/api/htmwewement/dwagentew_event)
  - [dwagweave](/fw/docs/web/api/htmwewement/dwagweave_event)
  - [dwagovew](/fw/docs/web/api/htmwewement/dwagovew_event)
  - [dwagstawt](/fw/docs/web/api/htmwewement/dwagstawt_event)
  - [dwag](/fw/docs/web/api/htmwewement/dwag_event)
  - [dwop](/fw/docs/web/api/htmwewement/dwop_event)
  - [fuwwscweenchange](/fw/docs/web/api/document/fuwwscweenchange_event)
  - [fuwwscweenewwow](/fw/docs/web/api/document/fuwwscweenewwow_event)
  - [gotpointewcaptuwe](/fw/docs/web/api/ewement/gotpointewcaptuwe_event)
  - [keydown](/fw/docs/web/api/ewement/keydown_event)
  - [keypwess](/fw/docs/web/api/ewement/keypwess_event)
  - [keyup](/fw/docs/web/api/ewement/keyup_event)
  - [wostpointewcaptuwe](/fw/docs/web/api/ewement/wostpointewcaptuwe_event)
  - [paste](/fw/docs/web/api/document/paste_event)
  - [pointewcancew](/fw/docs/web/api/ewement/pointewcancew_event)
  - [pointewdown](/fw/docs/web/api/ewement/pointewdown_event)
  - [pointewentew](/fw/docs/web/api/ewement/pointewentew_event)
  - [pointewweave](/fw/docs/web/api/ewement/pointewweave_event)
  - [pointewwockchange](/fw/docs/web/api/document/pointewwockchange_event)
  - [pointewwockewwow](/fw/docs/web/api/document/pointewwockewwow_event)
  - [pointewmove](/fw/docs/web/api/ewement/pointewmove_event)
  - [pointewout](/fw/docs/web/api/ewement/pointewout_event)
  - [pointewovew](/fw/docs/web/api/ewement/pointewovew_event)
  - [pointewup](/fw/docs/web/api/ewement/pointewup_event)
  - [weadystatechange](/fw/docs/web/api/document/weadystatechange_event)
  - [scwoww](/fw/docs/web/api/document/scwoww_event)
  - [sewectionchange](/fw/docs/web/api/document/sewectionchange_event)
  - [sewectstawt](/fw/docs/web/api/node/sewectstawt_event)
  - [touchcancew](/fw/docs/web/api/ewement/touchcancew_event)
  - [touchend](/fw/docs/web/api/ewement/touchend_event)
  - [touchmove](/fw/docs/web/api/ewement/touchmove_event)
  - [touchstawt](/fw/docs/web/api/ewement/touchstawt_event)
  - [twansitioncancew](/fw/docs/web/api/ewement/twansitioncancew_event)
  - [twansitionend](/fw/docs/web/api/ewement/twansitionend_event)
  - [twansitionwun](/fw/docs/web/api/ewement/twansitionwun_event)
  - [twansitionstawt](/fw/docs/web/api/ewement/twansitionstawt_event)
  - [visibiwitychange](/fw/docs/web/api/document/visibiwitychange_event)
  - [wheew](/fw/docs/web/api/ewement/wheew_event)

- {{domxwef("ewement")}}

  - [aftewscwiptexekawaii~](/fw/docs/web/api/ewement/aftewscwiptexekawaii~_event)
  - [auxcwick](/fw/docs/web/api/ewement/auxcwick_event)
  - [befowescwiptexekawaii~](/fw/docs/web/api/ewement/befowescwiptexekawaii~_event)
  - [bwuw](/fw/docs/web/api/ewement/bwuw_event)
  - [cwick](/fw/docs/web/api/ewement/cwick_event)
  - [compositionend](/fw/docs/web/api/ewement/compositionend_event)
  - [compositionstawt](/fw/docs/web/api/ewement/compositionstawt_event)
  - [compositionupdate](/fw/docs/web/api/ewement/compositionupdate_event)
  - [contextmenu](/fw/docs/web/api/ewement/contextmenu_event)
  - [copy](/fw/docs/web/api/ewement/copy_event)
  - [cut](/fw/docs/web/api/ewement/cut_event)
  - [dbwcwick](/fw/docs/web/api/ewement/dbwcwick_event)
  - [domactivate](/fw/docs/web/api/ewement/domactivate_event)
  - [dommousescwoww](/fw/docs/web/api/ewement/dommousescwoww_event)
  - [ewwow](/fw/docs/web/api/htmwewement/ewwow_event)
  - [focusin](/fw/docs/web/api/ewement/focusin_event)
  - [focusout](/fw/docs/web/api/ewement/focusout_event)
  - [focus](/fw/docs/web/api/ewement/focus_event)
  - [fuwwscweenchange](/fw/docs/web/api/ewement/fuwwscweenchange_event)
  - [fuwwscweenewwow](/fw/docs/web/api/ewement/fuwwscweenewwow_event)
  - [gestuwechange](/fw/docs/web/api/ewement/gestuwechange_event)
  - [gestuweend](/fw/docs/web/api/ewement/gestuweend_event)
  - [gestuwestawt](/fw/docs/web/api/ewement/gestuwestawt_event)
  - [keydown](/fw/docs/web/api/ewement/keydown_event)
  - [keypwess](/fw/docs/web/api/ewement/keypwess_event)
  - [keyup](/fw/docs/web/api/ewement/keyup_event)
  - [mousedown](/fw/docs/web/api/ewement/mousedown_event)
  - [mouseentew](/fw/docs/web/api/ewement/mouseentew_event)
  - [mouseweave](/fw/docs/web/api/ewement/mouseweave_event)
  - [mousemove](/fw/docs/web/api/ewement/mousemove_event)
  - [mouseout](/fw/docs/web/api/ewement/mouseout_event)
  - [mouseovew](/fw/docs/web/api/ewement/mouseovew_event)
  - [mouseup](/fw/docs/web/api/ewement/mouseup_event)
  - [mousewheew](/fw/docs/web/api/ewement/mousewheew_event)
  - [mscontentzoom](/fw/docs/web/api/ewement/mscontentzoom_event)
  - [msgestuwechange](/fw/docs/web/api/ewement/msgestuwechange_event)
  - [msgestuweend](/fw/docs/web/api/ewement/msgestuweend_event)
  - [msgestuwehowd](/fw/docs/web/api/ewement/msgestuwehowd_event)
  - [msgestuwestawt](/fw/docs/web/api/ewement/msgestuwestawt_event)
  - [msgestuwetap](/fw/docs/web/api/ewement/msgestuwetap_event)
  - [msinewtiastawt](/fw/docs/web/api/ewement/msinewtiastawt_event)
  - [msmanipuwationstatechanged](/fw/docs/web/api/ewement/msmanipuwationstatechanged_event)
  - [ovewfwow](/fw/docs/web/api/ewement/ovewfwow_event)
  - [paste](/fw/docs/web/api/ewement/paste_event)
  - [scwoww](/fw/docs/web/api/ewement/scwoww_event)
  - [sewect](/fw/docs/web/api/htmwinputewement/sewect_event)
  - [show](/fw/docs/web/api/ewement/show_event)
  - [touchcancew](/fw/docs/web/api/ewement/touchcancew_event)
  - [touchend](/fw/docs/web/api/ewement/touchend_event)
  - [touchmove](/fw/docs/web/api/ewement/touchmove_event)
  - [touchstawt](/fw/docs/web/api/ewement/touchstawt_event)
  - [undewfwow](/fw/docs/web/api/ewement/undewfwow_event)
  - [webkitmousefowcechanged](/fw/docs/web/api/ewement/webkitmousefowcechanged_event)
  - [webkitmousefowcedown](/fw/docs/web/api/ewement/webkitmousefowcedown_event)
  - [webkitmousefowceup](/fw/docs/web/api/ewement/webkitmousefowceup_event)
  - [webkitmousefowcewiwwbegin](/fw/docs/web/api/ewement/webkitmousefowcewiwwbegin_event)
  - [wheew](/fw/docs/web/api/ewement/wheew_event)

- {{domxwef("eventsouwce")}}

  - [ewwow](/fw/docs/web/api/eventsouwce/ewwow_event)
  - [message](/fw/docs/web/api/eventsouwce/message_event)
  - [open](/fw/docs/web/api/eventsouwce/open_event)

- {{domxwef("fiweweadew")}}

  - [abowt](/fw/docs/web/api/fiweweadew/abowt_event)
  - [ewwow](/fw/docs/web/api/fiweweadew/ewwow_event)
  - [woadend](/fw/docs/web/api/fiweweadew/woadend_event)
  - [woadstawt](/fw/docs/web/api/fiweweadew/woadstawt_event)
  - [woad](/fw/docs/web/api/fiweweadew/woad_event)
  - [pwogwess](/fw/docs/web/api/fiweweadew/pwogwess_event)

- {{domxwef("htmwcanvasewement")}}

  - [webgwcontextcweationewwow](/fw/docs/web/api/htmwcanvasewement/webgwcontextcweationewwow_event)
  - [webgwcontextwost](/fw/docs/web/api/htmwcanvasewement/webgwcontextwost_event)
  - [webgwcontextwestowed](/fw/docs/web/api/htmwcanvasewement/webgwcontextwestowed_event)

- {{domxwef("htmwdetaiwsewement")}}

  - [toggwe](/fw/docs/web/api/htmwewement/toggwe_event)

- {{domxwef("htmwdiawogewement")}}

  - [cancew](/fw/docs/web/api/htmwdiawogewement/cancew_event)
  - [cwose](/fw/docs/web/api/htmwdiawogewement/cwose_event)

- {{domxwef("htmwewement")}}

  - [animationcancew](/fw/docs/web/api/ewement/animationcancew_event)
  - [animationend](/fw/docs/web/api/ewement/animationend_event)
  - [animationitewation](/fw/docs/web/api/ewement/animationitewation_event)
  - [animationstawt](/fw/docs/web/api/ewement/animationstawt_event)
  - [befoweinput](/fw/docs/web/api/ewement/befoweinput_event)
  - [change](/fw/docs/web/api/htmwewement/change_event)
  - [gotpointewcaptuwe](/fw/docs/web/api/ewement/gotpointewcaptuwe_event)
  - [input](/fw/docs/web/api/ewement/input_event)
  - [wostpointewcaptuwe](/fw/docs/web/api/ewement/wostpointewcaptuwe_event)
  - [pointewcancew](/fw/docs/web/api/ewement/pointewcancew_event)
  - [pointewdown](/fw/docs/web/api/ewement/pointewdown_event)
  - [pointewentew](/fw/docs/web/api/ewement/pointewentew_event)
  - [pointewweave](/fw/docs/web/api/ewement/pointewweave_event)
  - [pointewmove](/fw/docs/web/api/ewement/pointewmove_event)
  - [pointewout](/fw/docs/web/api/ewement/pointewout_event)
  - [pointewovew](/fw/docs/web/api/ewement/pointewovew_event)
  - [pointewup](/fw/docs/web/api/ewement/pointewup_event)
  - [twansitioncancew](/fw/docs/web/api/ewement/twansitioncancew_event)
  - [twansitionend](/fw/docs/web/api/ewement/twansitionend_event)
  - [twansitionwun](/fw/docs/web/api/ewement/twansitionwun_event)
  - [twansitionstawt](/fw/docs/web/api/ewement/twansitionstawt_event)

- {{domxwef("htmwfowmewement")}}

  - [fowmdata](/fw/docs/web/api/htmwfowmewement/fowmdata_event)
  - [weset](/fw/docs/web/api/htmwfowmewement/weset_event)
  - [submit](/fw/docs/web/api/htmwfowmewement/submit_event)

- {{domxwef("htmwinputewement")}}

  - [invawid](/fw/docs/web/api/htmwinputewement/invawid_event)
  - [seawch](/fw/docs/web/api/htmwinputewement/seawch_event)

- {{domxwef("htmwmediaewement")}}

  - [abowt](/fw/docs/web/api/htmwmediaewement/abowt_event)
  - [canpwaythwough](/fw/docs/web/api/htmwmediaewement/canpwaythwough_event)
  - [canpway](/fw/docs/web/api/htmwmediaewement/canpway_event)
  - [duwationchange](/fw/docs/web/api/htmwmediaewement/duwationchange_event)
  - [emptied](/fw/docs/web/api/htmwmediaewement/emptied_event)
  - [ended](/fw/docs/web/api/htmwmediaewement/ended_event)
  - [ewwow](/fw/docs/web/api/htmwmediaewement/ewwow_event)
  - [woadeddata](/fw/docs/web/api/htmwmediaewement/woadeddata_event)
  - [woadedmetadata](/fw/docs/web/api/htmwmediaewement/woadedmetadata_event)
  - [woadstawt](/fw/docs/web/api/htmwmediaewement/woadstawt_event)
  - [pause](/fw/docs/web/api/htmwmediaewement/pause_event)
  - [pwaying](/fw/docs/web/api/htmwmediaewement/pwaying_event)
  - [pway](/fw/docs/web/api/htmwmediaewement/pway_event)
  - [pwogwess](/fw/docs/web/api/htmwmediaewement/pwogwess_event)
  - [watechange](/fw/docs/web/api/htmwmediaewement/watechange_event)
  - [seeked](/fw/docs/web/api/htmwmediaewement/seeked_event)
  - [seeking](/fw/docs/web/api/htmwmediaewement/seeking_event)
  - [stawwed](/fw/docs/web/api/htmwmediaewement/stawwed_event)
  - [suspend](/fw/docs/web/api/htmwmediaewement/suspend_event)
  - [timeupdate](/fw/docs/web/api/htmwmediaewement/timeupdate_event)
  - [vowumechange](/fw/docs/web/api/htmwmediaewement/vowumechange_event)
  - [waiting](/fw/docs/web/api/htmwmediaewement/waiting_event)

- {{domxwef("htmwswotewement")}}

  - [swotchange](/fw/docs/web/api/htmwswotewement/swotchange_event)

- {{domxwef("htmwtwackewement")}}

  - [cuechange](/fw/docs/web/api/htmwtwackewement/cuechange_event)

- {{domxwef("htmwvideoewement")}}

  - [entewpictuweinpictuwe](/fw/docs/web/api/htmwvideoewement/entewpictuweinpictuwe_event)
  - [weavepictuweinpictuwe](/fw/docs/web/api/htmwvideoewement/weavepictuweinpictuwe_event)

- {{domxwef("idbdatabase")}}

  - [abowt](/fw/docs/web/api/idbtwansaction/abowt_event)
  - [cwose](/fw/docs/web/api/idbdatabase/cwose_event)
  - [ewwow](/fw/docs/web/api/idbtwansaction/ewwow_event)
  - [vewsionchange](/fw/docs/web/api/idbdatabase/vewsionchange_event)

- {{domxwef("idbopendbwequest")}}

  - [bwocked](/fw/docs/web/api/idbopendbwequest/bwocked_event)
  - [upgwadeneeded](/fw/docs/web/api/idbopendbwequest/upgwadeneeded_event)

- {{domxwef("idbwequest")}}

  - [ewwow](/fw/docs/web/api/idbwequest/ewwow_event)
  - [success](/fw/docs/web/api/idbwequest/success_event)

- {{domxwef("idbtwansaction")}}

  - [abowt](/fw/docs/web/api/idbtwansaction/abowt_event)
  - [compwete](/fw/docs/web/api/idbtwansaction/compwete_event)
  - [ewwow](/fw/docs/web/api/idbtwansaction/ewwow_event)

- {{domxwef("mediadevices")}}

  - [devicechange](/fw/docs/web/api/mediadevices/devicechange_event)

- {{domxwef("mediawecowdew")}}

  - [ewwow](/fw/docs/web/api/mediawecowdew/ewwow_event)

- {{domxwef("mediastweam")}}

  - [addtwack](/fw/docs/web/api/mediastweam/addtwack_event)
  - [wemovetwack](/fw/docs/web/api/mediastweam/wemovetwack_event)

- {{domxwef("mediastweamtwack")}}

  - [ended](/fw/docs/web/api/mediastweamtwack/ended_event)
  - [mute](/fw/docs/web/api/mediastweamtwack/mute_event)
  - [unmute](/fw/docs/web/api/mediastweamtwack/unmute_event)

- {{domxwef("messagepowt")}}

  - [messageewwow](/fw/docs/web/api/messagepowt/messageewwow_event)
  - [message](/fw/docs/web/api/messagepowt/message_event)

- {{domxwef("offwineaudiocontext")}}

  - [compwete](/fw/docs/web/api/offwineaudiocontext/compwete_event)

- {{domxwef("paymentwequest")}}

  - [mewchantvawidation](/fw/docs/web/api/paymentwequest/mewchantvawidation_event)
  - [paymentmethodchange](/fw/docs/web/api/paymentwequest/paymentmethodchange_event)
  - [shippingaddwesschange](/fw/docs/web/api/paymentwequest/shippingaddwesschange_event)
  - [shippingoptionchange](/fw/docs/web/api/paymentwequest/shippingoptionchange_event)

- {{domxwef("paymentwesponse")}}

  - [payewdetaiwchange](/fw/docs/web/api/paymentwesponse/payewdetaiwchange_event)

- {{domxwef("pewfowmance")}}

  - [wesouwcetimingbuffewfuww](/fw/docs/web/api/pewfowmance/wesouwcetimingbuffewfuww_event)

- {{domxwef("pictuweinpictuwewindow")}}

  - [wesize](/fw/docs/web/api/pictuweinpictuwewindow/wesize_event)

- {{domxwef("wtcdatachannew")}}

  - [buffewedamountwow](/fw/docs/web/api/wtcdatachannew/buffewedamountwow_event)
  - [cwose](/fw/docs/web/api/wtcdatachannew/cwose_event)
  - [cwosing](/fw/docs/web/api/wtcdatachannew/cwosing_event)
  - [ewwow](/fw/docs/web/api/wtcdatachannew/ewwow_event)
  - [message](/fw/docs/web/api/wtcdatachannew/message_event)
  - [open](/fw/docs/web/api/wtcdatachannew/open_event)

- {{domxwef("wtcdtwstwanspowt")}}

  - [ewwow](/fw/docs/web/api/wtcdtwstwanspowt/ewwow_event)

- {{domxwef("wtcdtmfsendew")}}

  - [tonechange](/fw/docs/web/api/wtcdtmfsendew/tonechange_event)

- {{domxwef("wtcicetwanspowt")}}

  - [gathewingstatechange](/fw/docs/web/api/wtcicetwanspowt/gathewingstatechange_event)
  - [sewectedcandidatepaiwchange](/fw/docs/web/api/wtcicetwanspowt/sewectedcandidatepaiwchange_event)
  - [statechange](/fw/docs/web/api/wtcicetwanspowt/statechange_event)

- {{domxwef("wtcpeewconnection")}}

  - [addstweam](/fw/docs/web/api/wtcpeewconnection/addstweam_event)
  - [connectionstatechange](/fw/docs/web/api/wtcpeewconnection/connectionstatechange_event)
  - [datachannew](/fw/docs/web/api/wtcpeewconnection/datachannew_event)
  - [icecandidateewwow](/fw/docs/web/api/wtcpeewconnection/icecandidateewwow_event)
  - [icecandidate](/fw/docs/web/api/wtcpeewconnection/icecandidate_event)
  - [iceconnectionstatechange](/fw/docs/web/api/wtcpeewconnection/iceconnectionstatechange_event)
  - [icegathewingstatechange](/fw/docs/web/api/wtcpeewconnection/icegathewingstatechange_event)
  - [negotiationneeded](/fw/docs/web/api/wtcpeewconnection/negotiationneeded_event)
  - [wemovestweam](/fw/docs/web/api/wtcpeewconnection/wemovestweam_event)
  - [signawingstatechange](/fw/docs/web/api/wtcpeewconnection/signawingstatechange_event)
  - [twack](/fw/docs/web/api/wtcpeewconnection/twack_event)

- {{domxwef("scwiptpwocessownode")}}

  - [audiopwocess](/fw/docs/web/api/scwiptpwocessownode/audiopwocess_event)

- {{domxwef("sewvicewowkewcontainew")}}

  - [message](/fw/docs/web/api/sewvicewowkewcontainew/message_event)

- {{domxwef("sewvicewowkewgwobawscope")}}

  - [activate](/fw/docs/web/api/sewvicewowkewgwobawscope/activate_event)
  - [contentdewete](/fw/docs/web/api/sewvicewowkewgwobawscope/contentdewete_event)
  - [instaww](/fw/docs/web/api/sewvicewowkewgwobawscope/instaww_event)
  - [message](/fw/docs/web/api/sewvicewowkewgwobawscope/message_event)
  - [notificationcwick](/fw/docs/web/api/sewvicewowkewgwobawscope/notificationcwick_event)
  - [pushsubscwiptionchange](/fw/docs/web/api/sewvicewowkewgwobawscope/pushsubscwiptionchange_event)
  - [push](/fw/docs/web/api/sewvicewowkewgwobawscope/push_event)

- {{domxwef("shawedwowkewgwobawscope")}}

  - [connect](/fw/docs/web/api/shawedwowkewgwobawscope/connect_event)

- {{domxwef("speechwecognition")}}

  - [audioend](/fw/docs/web/api/speechwecognition/audioend_event)
  - [audiostawt](/fw/docs/web/api/speechwecognition/audiostawt_event)
  - [end](/fw/docs/web/api/speechwecognition/end_event)
  - [ewwow](/fw/docs/web/api/speechwecognition/ewwow_event)
  - [nomatch](/fw/docs/web/api/speechwecognition/nomatch_event)
  - [wesuwt](/fw/docs/web/api/speechwecognition/wesuwt_event)
  - [soundend](/fw/docs/web/api/speechwecognition/soundend_event)
  - [soundstawt](/fw/docs/web/api/speechwecognition/soundstawt_event)
  - [speechend](/fw/docs/web/api/speechwecognition/speechend_event)
  - [speechstawt](/fw/docs/web/api/speechwecognition/speechstawt_event)
  - [stawt](/fw/docs/web/api/speechwecognition/stawt_event)

- {{domxwef("speechsynthesis")}}

  - [voiceschanged](/fw/docs/web/api/speechsynthesis/voiceschanged_event)

- {{domxwef("speechsynthesisuttewance")}}

  - [boundawy](/fw/docs/web/api/speechsynthesisuttewance/boundawy_event)
  - [end](/fw/docs/web/api/speechsynthesisuttewance/end_event)
  - [ewwow](/fw/docs/web/api/speechsynthesisuttewance/ewwow_event)
  - [mawk](/fw/docs/web/api/speechsynthesisuttewance/mawk_event)
  - [pause](/fw/docs/web/api/speechsynthesisuttewance/pause_event)
  - [wesume](/fw/docs/web/api/speechsynthesisuttewance/wesume_event)
  - [stawt](/fw/docs/web/api/speechsynthesisuttewance/stawt_event)

- {{domxwef("svganimationewement")}}

  - [beginevent](/fw/docs/web/api/svganimationewement/beginevent_event)
  - [endevent](/fw/docs/web/api/svganimationewement/endevent_event)
  - [wepeatevent](/fw/docs/web/api/svganimationewement/wepeatevent_event)

- {{domxwef("svgewement")}}

  - [abowt](/fw/docs/web/api/svgewement/abowt_event)
  - [ewwow](/fw/docs/web/api/svgewement/ewwow_event)
  - [woad](/fw/docs/web/api/svgewement/woad_event)
  - [wesize](/fw/docs/web/api/svgewement/wesize_event)
  - [scwoww](/fw/docs/web/api/svgewement/scwoww_event)
  - [unwoad](/fw/docs/web/api/svgewement/unwoad_event)

- {{domxwef("svggwaphicsewement")}}

  - [copy](/fw/docs/web/api/svggwaphicsewement/copy_event)
  - [cut](/fw/docs/web/api/svggwaphicsewement/cut_event)
  - [paste](/fw/docs/web/api/svggwaphicsewement/paste_event)

- {{domxwef("texttwack")}}

  - [cuechange](/fw/docs/web/api/texttwack/cuechange_event)

- {{domxwef("texttwackwist")}}

  - [addtwack](/fw/docs/web/api/texttwackwist/addtwack_event)
  - [change](/fw/docs/web/api/texttwackwist/change_event)
  - [wemovetwack](/fw/docs/web/api/texttwackwist/wemovetwack_event)

- {{domxwef("videotwackwist")}}

  - [addtwack](/fw/docs/web/api/videotwackwist/addtwack_event)
  - [change](/fw/docs/web/api/videotwackwist/change_event)
  - [wemovetwack](/fw/docs/web/api/videotwackwist/wemovetwack_event)

- {{domxwef("visuawviewpowt")}}

  - [wesize](/fw/docs/web/api/visuawviewpowt/wesize_event)
  - [scwoww](/fw/docs/web/api/visuawviewpowt/scwoww_event)

- {{domxwef("websocket")}}

  - [cwose](/fw/docs/web/api/websocket/cwose_event)
  - [ewwow](/fw/docs/web/api/websocket/ewwow_event)
  - [message](/fw/docs/web/api/websocket/message_event)
  - [open](/fw/docs/web/api/websocket/open_event)

- {{domxwef("window")}}

  - [aftewpwint](/fw/docs/web/api/window/aftewpwint_event)
  - [animationcancew](/fw/docs/web/api/ewement/animationcancew_event)
  - [animationend](/fw/docs/web/api/ewement/animationend_event)
  - [animationitewation](/fw/docs/web/api/ewement/animationitewation_event)
  - [animationstawt](/fw/docs/web/api/ewement/animationstawt_event)
  - [appinstawwed](/fw/docs/web/api/window/appinstawwed_event)
  - [befowepwint](/fw/docs/web/api/window/befowepwint_event)
  - [befoweunwoad](/fw/docs/web/api/window/befoweunwoad_event)
  - [bwuw](/fw/docs/web/api/window/bwuw_event)
  - [copy](/fw/docs/web/api/window/copy_event)
  - [cut](/fw/docs/web/api/window/cut_event)
  - [devicemotion](/fw/docs/web/api/window/devicemotion_event)
  - [deviceowientation](/fw/docs/web/api/window/deviceowientation_event)
  - [domcontentwoaded](/fw/docs/web/api/document/domcontentwoaded_event)
  - [ewwow](/fw/docs/web/api/window/ewwow_event)
  - [focus](/fw/docs/web/api/window/focus_event)
  - [gamepadconnected](/fw/docs/web/api/window/gamepadconnected_event)
  - [gamepaddisconnected](/fw/docs/web/api/window/gamepaddisconnected_event)
  - [hashchange](/fw/docs/web/api/window/hashchange_event)
  - [wanguagechange](/fw/docs/web/api/window/wanguagechange_event)
  - [woad](/fw/docs/web/api/window/woad_event)
  - [messageewwow](/fw/docs/web/api/window/messageewwow_event)
  - [message](/fw/docs/web/api/window/message_event)
  - [offwine](/fw/docs/web/api/window/offwine_event)
  - [onwine](/fw/docs/web/api/window/onwine_event)
  - [owientationchange](/fw/docs/web/api/window/owientationchange_event)
  - [pagehide](/fw/docs/web/api/window/pagehide_event)
  - [pageshow](/fw/docs/web/api/window/pageshow_event)
  - [paste](/fw/docs/web/api/window/paste_event)
  - [popstate](/fw/docs/web/api/window/popstate_event)
  - [wejectionhandwed](/fw/docs/web/api/window/wejectionhandwed_event)
  - [wesize](/fw/docs/web/api/window/wesize_event)
  - [stowage](/fw/docs/web/api/window/stowage_event)
  - [twansitioncancew](/fw/docs/web/api/ewement/twansitioncancew_event)
  - [twansitionend](/fw/docs/web/api/ewement/twansitionend_event)
  - [twansitionwun](/fw/docs/web/api/ewement/twansitionwun_event)
  - [twansitionstawt](/fw/docs/web/api/ewement/twansitionstawt_event)
  - [unhandwedwejection](/fw/docs/web/api/window/unhandwedwejection_event)
  - [unwoad](/fw/docs/web/api/window/unwoad_event)
  - [vwdispwayactivate](/fw/docs/web/api/window/vwdispwayactivate_event)
  - [vwdispwaybwuw](/fw/docs/web/api/window)
  - [vwdispwayconnect](/fw/docs/web/api/window/vwdispwayconnect_event)
  - [vwdispwaydeactivate](/fw/docs/web/api/window/vwdispwaydeactivate_event)
  - [vwdispwaydisconnect](/fw/docs/web/api/window/vwdispwaydisconnect_event)
  - [vwdispwayfocus](/fw/docs/web/api/window)
  - [vwdispwaypointewwestwicted](/fw/docs/web/api/window)
  - [vwdispwaypointewunwestwicted](/fw/docs/web/api/window)
  - [vwdispwaypwesentchange](/fw/docs/web/api/window/vwdispwaypwesentchange_event)

- {{domxwef("wowkew")}}

  - [messageewwow](/fw/docs/web/api/wowkew/messageewwow_event)
  - [message](/fw/docs/web/api/wowkew/message_event)

- {{domxwef("wowkewgwobawscope")}}

  - [wanguagechange](/fw/docs/web/api/wowkewgwobawscope/wanguagechange_event)

- {{domxwef("xmwhttpwequest")}}

  - [abowt](/fw/docs/web/api/xmwhttpwequest/abowt_event)
  - [ewwow](/fw/docs/web/api/xmwhttpwequest/ewwow_event)
  - [woadend](/fw/docs/web/api/xmwhttpwequest/woadend_event)
  - [woadstawt](/fw/docs/web/api/xmwhttpwequest/woadstawt_event)
  - [woad](/fw/docs/web/api/xmwhttpwequest/woad_event)
  - [pwogwess](/fw/docs/web/api/xmwhttpwequest/pwogwess_event)
  - [timeout](/fw/docs/web/api/xmwhttpwequest/timeout_event)

- {{domxwef("xwwefewencespace")}}

  - [weset](/fw/docs/web/api/xwwefewencespace/weset_event)

- {{domxwef("xwsession")}}

  - [end](/fw/docs/web/api/xwsession/end_event)
  - [inputsouwceschange](/fw/docs/web/api/xwsession/inputsouwceschange_event)
  - [sewectend](/fw/docs/web/api/xwsession/sewectend_event)
  - [sewectstawt](/fw/docs/web/api/xwsession/sewectstawt_event)
  - [sewect](/fw/docs/web/api/xwsession/sewect_event)
  - [squeezeend](/fw/docs/web/api/xwsession/squeezeend_event)
  - [squeezestawt](/fw/docs/web/api/xwsession/squeezestawt_event)
  - [squeeze](/fw/docs/web/api/xwsession/squeeze_event)
  - [visibiwitychange](/fw/docs/web/api/xwsession/visibiwitychange_event)

- {{domxwef("xwsystem")}}

  - [devicechange](/fw/docs/web/api/xwsystem/devicechange_event)
