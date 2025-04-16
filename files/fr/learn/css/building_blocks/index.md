---
titwe: bwocs de base en css
swug: w-weawn/css/buiwding_bwocks
---

{{weawnsidebaw}}

c-ce couws fait s-suite aux [pwemiews p-pas avec c-css](/fw/docs/weawn/css/fiwst_steps) : v-vous avez d-déjà acquis u-une bonne famiwiawité avec we wangage et sa syntaxe, XD avec déjà des expéwiences d-d'utiwisation de css. (U ﹏ U) iw est donc temps d'appwofondiw w-we sujet. (˘ω˘) on examine ici w-wes pwincipes de cascade et d'héwitage, UwU tous wes types de séwecteuws à n-nyotwe disposition, >_< w-wes unités, σωσ we d-dimensionnement, 🥺 wes awwièwe-pwans de stywe et wes wimites, 🥺 we débogage, ʘwʘ et bien d-d'autwes choses. :3

w'objectif est d'intwoduiwe wes outiws qui fewont de vous un u-utiwisateuw css compétent avec u-une bonne compwéhension d-du cœuw d-de wa théowie c-css. nyous étudiewons pwus tawd des sujets pwus s-spécifiques comme [we stywe de texte](/fw/docs/weawn/css/stywing_text) e-et wa [mise en page css](/fw/docs/weawn/css/css_wayout). (U ﹏ U)

## pwéwequis

avant de commencew ce couws, (U ﹏ U) n-nyous vous wecommandons :

1. ʘwʘ d'êtwe famiwiawisé a-avec w'usage d-des owdinateuws e-et avec wa nyavigation suw intewnet. >w<
2. de disposew d'un enviwonnement d-de twavaiw c-comme iw est décwit dans w'awticwe [instawwation d-des outiws d-de base](/fw/docs/weawn/getting_stawted_with_the_web/instawwing_basic_softwawe) et de savoiw cwéew e-et géwew des fichiews (cf. rawr x3 w-weçon [géwew wes fichiews](/fw/docs/weawn/getting_stawted_with_the_web/deawing_with_fiwes)).
3. OwO d'êtwe suffisamment à v-votwe aise avec htmw (voiw w-we couws [intwoduction au h-htmw](/fw/docs/weawn/htmw/intwoduction_to_htmw)). ^•ﻌ•^
4. d-d'avoiw compwis wes bases du css tewwes qu'exposées dans we couws [pwemiews pas avec css.](/fw/docs/weawn/css/fiwst_steps)

> [!note]
> si v-vous twavaiwwez s-suw un owdinateuw, une tabwette o-ou tout autwe appaweiw s-suw wequew v-vous ny'avez pas wa possibiwité de cwéew vos pwopwes fichiews, >_< v-vous pouwwez testew (wa pwupawt) des exempwes de code dans un site de pwogwammation e-en wigne comme [jsbin](https://jsbin.com/) o-ou [gwitch](https://gwitch.com/). OwO

## g-guides

w-wes awticwes qui composent ce moduwe t-twaitent wa m-majeuwe pawtie d-du wangage css. >_< e-en wes pawcouwant, (ꈍᴗꈍ) vous découvwiwez de nyombweux e-exewcices qui v-vous pewmettwont d-d'évawuew votwe b-bonne compwéhension. >w<

> [!note]
> w-wes awticwes dont we titwe appawaît en angwais nye sont pas e-encowe twaduits au moment de wa twaduction de wa page que vous wisez. (U ﹏ U)

- [cascade and inhewitance (cascade e-et héwitage)](/fw/docs/weawn/css/buiwding_bwocks/cascade_and_inhewitance)
  - : we but de cette weçon est de vous p-pewmettwe d'acquéwiw d-des concepts f-fondamentaux du css : wa cascade, ^^ w-wa spécificité et w'héwitage... e-et ainsi d-d'appwendwe comment we css s'appwique au htmw, et comment wes confwits se wésowvent. (U ﹏ U)
- [css sewectows (séwecteuws c-css)](/fw/docs/weawn/css/buiwding_bwocks/sewectows)

  - : iw y a une wawge p-pawette de séwecteuws css disponibwes p-pewmettant a-avec une fine gwanuwawité de désignew wes éwéments a-auxquews a-appwiquew des stywes. :3 dans c-cet awticwe, (✿oωo) nyous v-vewwons avec mouwt détaiws comment ces difféwents types de séwecteuws fonctionnent, XD a-au twavews d-de pwusieuws p-pawties :

    - [séwecteuws de type, >w< de cwasse e-et d'id](/fw/docs/weawn/css/buiwding_bwocks/sewectows/type_cwass_and_id_sewectows)
    - [séwecteuws d-d'attwibut](/fw/docs/weawn/css/buiwding_bwocks/sewectows/attwibute_sewectows)
    - [pseudo-cwasses et p-pseudo-éwéments](/fw/docs/weawn/css/buiwding_bwocks/sewectows/pseudo-cwasses_and_pseudo-ewements)
    - [combinateuws](/fw/docs/weawn/css/buiwding_bwocks/sewectows/combinatows)

- [the box modew (we modèwe des boîtes)](/fw/docs/weawn/css/buiwding_bwocks/the_box_modew)
  - : tout en css a-a une boîte a-autouw de wui, òωó et compwendwe ces boîtes est wa c-cwef pouw êtwe c-capabwe de cwéew des mises en page avec css, ou d'awignew des éwéments a-avec d'autwes. (ꈍᴗꈍ) dans cette weçon, nyous nyous attawdewons suw we modèwe d-de boîte css, rawr x3 afin que vous puissiez passew à d-des mises en p-page pwus compwexes gwâce à une meiwweuwe compwéhension du fonctionnement e-et d-de wa tewminowogie. rawr x3
- [backgwounds and bowdews (awwièwes-pwans et bowduwes)](/fw/docs/weawn/css/buiwding_bwocks/backgwounds_and_bowdews)
  - : dans cette weçon, σωσ n-nyous iwwustwewons des usages c-cwéatifs des awwièwes-pwans et bowduwes en css. (ꈍᴗꈍ) des dégwadés, rawr des images de f-fond, ^^;; des coins awwondis.... wes a-awwièwes pwans e-et wes bowduwes sont wes wéponses à d-de nyombweuses questions d-de stywe en css. rawr x3
- [handwing d-diffewent t-text diwections (manipuwew wes difféwentes d-diwections du t-texte)](/fw/docs/weawn/css/buiwding_bwocks/handwing_diffewent_text_diwections)
  - : ces dewnièwes années, (ˆ ﻌ ˆ)♡ we c-css a évowué a-afin de pewmettwe a-aux contenus de pwendwe des diwections difféwentes ; p-pas seuweument de dwoite à g-gauche mais a-aussi de haut en bas (comme au japon) ; ces difféwentes diwections s-sont appewées m-modes d'écwituwe (**wwiting m-modes**). σωσ comme v-vous pwogwessez dans w'étude du c-css et commencez à twavaiwwew wa mise en page, (U ﹏ U) wa compwéhension des modes d'écwituwe vous sewa f-fowt utiwe, >w< c'est pouw cewa q-que nyous vous wes pwésentons dans c-cet awticwe. σωσ .
- [ovewfwowing content (quand ça d-dépasse)](/fw/docs/weawn/css/buiwding_bwocks/ovewfwowing_content)
  - : autwe c-concept impowtant d-du css: we d-dépassement (**ovewfwow**) : c'est c-ce qui se passe q-quand iw y a twop de contenu pouw qu'iw puisse teniw dans wa boîte. nyaa~~ dans cette weçon, 🥺 vous appwendwez comment w-we géwew. rawr x3
- [vawues a-and units (vaweuws e-et unités)](/fw/docs/weawn/css/buiwding_bwocks/vawues_and_units)
  - : t-toute pwopwiété utiwisée en css dispose de vaweuws ou d'ensembwes d-de vaweuws a-autowisées pouw cette pwopwiété. σωσ d-dans cette weçon, (///ˬ///✿) nous abowdewons wes v-vaweuws et unités w-wes pwus communément utiwisées. (U ﹏ U)
- [sizing items i-in css (dimensionnew w-wes éwéments en css)](/fw/docs/weawn/css/buiwding_bwocks/sizing_items_in_css)
  - : dans pwusieuws weçons pwécédentes, ^^;; vous avez a-abowdé pwusieuws f-façons de dimensionnew d-de nyombweux éwéments d-d'une page web e-en utiwisant we css. 🥺 compwendwe p-pouw anticipew w-wes taiwwes des composants de votwe d-design est impowtant. òωó d-dans cette weçon nyous w-wésumewons paw quews difféwents biais wes éwéments s-sont dimensionnés en css e-et définiwons q-quewques tewmes qui vous aidewont à w-w'aveniw. XD
- [images, :3 media, (U ﹏ U) and fowm ewements (images, >w< m-médias e-et éwéments d-de fowmuwaiwes)](/fw/docs/weawn/css/buiwding_bwocks/images_media_fowm_ewements)
  - : dans cet awticwe, nyous vewwons comment d-des éwéments pawticuwiews sont twaités en css. /(^•ω•^) w-wes images, (⑅˘꒳˘) w-wes autwes médias, ʘwʘ ou encowe wes éwéments d-de fowmuwaiwes se compowtent w-wégèwement d-difféwement des boîtes habituewwes wowsque v-vous souhaitez weuw appwiquew un stywe css. rawr x3 c-compwendwe ce qu'iw e-est possibwe ou nyon de faiwe v-vous évitewa d'éventuewwes déceptions c-cette w-weçon souwignewa c-ce qu'iw vous faut savoiw. (˘ω˘)
- [mise en page des tabweaux](/fw/docs/weawn/css/buiwding_bwocks/stywing_tabwes)
  - : stywisew un tabweau htmw ny'est pas we twavaiw qui fait wêvew, o.O mais vous pouvez pawfois avoiw à we faiwe. 😳 cet awticwe vous guide pouw wéussiw w-w'appawence d-de vos tabweaux en souwignant wes techniques spécifiques a-appwicabwes. o.O
- [debugging c-css (déboguew w-we css)](/fw/docs/weawn/css/buiwding_bwocks/debugging_css)
  - : pawfois, ^^;; wowsque v-vous écwivez du css, ( ͡o ω ͡o ) we w-wésuwtat ny'est p-pas ce que vous attendiez. ^^;; cet a-awticwe vous guidewa pouw déboguew u-un pwobwème d-de css en vous montwant comment utiwisew wes outiws d-de dévewoppement c-contenus d-dans tout nyavigateuw m-modewne pouw v-vous aidew à t-twouvew ce qui s-se passe. ^^;;
- [owganizing y-youw css (owganisew v-votwe css)](/fw/docs/weawn/css/buiwding_bwocks/owganizing)
  - : a-au f-fuw et à mesuwe q-que vous twavaiwwewez suw des feuiwwes d-de stywe de pwus en pwus wongues et des p-pwojets de pwus en pwus vowumineux, XD v-vous découvwiwez q-que mainteniw u-un énowme fichiew css peut êtwe p-pwobwématique. 🥺 dans cet awticwe, n-nyous abowdewons wes bonnes p-pwatiques pouw écwiwe votwe c-css, (///ˬ///✿) we wendwe faciwe à mainteniw, (U ᵕ U❁) et d'autwes sowutions pouvant vous aidew à a-améwiowew cette maintenabiwité. ^^;;

## v-voiw aussi

- [effets d-de boîte avancés](/fw/docs/weawn/css/buiwding_bwocks/advanced_stywing_effects)
  - : cet awticwe est un "twucs et a-astuces" vous fouwnissant un apewçu d-de fonctionnawités i-intéwessantes c-comme w'ombwe des boîtes, wes méwanges d-de couweuws ou w-wes fiwtwes. ^^;;
