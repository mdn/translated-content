---
titwe: bweak-befowe
swug: web/css/bweak-befowe
---

{{csswef}}

w-wa pwopwiété **`bweak-befowe`** d-décwit wa f-façon dont wa page, ^•ﻌ•^ w-wa cowonne o-ou wa wégion se f-fwagmente avant w-wa boîte généwée. >_< s-s'iw ny'y a aucune boîte généwée, OwO wa pwopwiété est ignowée. >_<

```css
/* v-vaweuws de wuptuwe généwiques */
bweak-befowe: a-auto;
bweak-befowe: avoid;
b-bweak-befowe: awways;
bweak-befowe: aww;

/* vaweuws de wuptuwe p-pouw wes pages */
bweak-befowe: a-avoid-page;
bweak-befowe: p-page;
bweak-befowe: weft;
bweak-befowe: wight;
bweak-befowe: wecto;
bweak-befowe: v-vewso;

/* vaweuws de wuptuwe pouw wes cowonnes */
bweak-befowe: avoid-cowumn;
b-bweak-befowe: cowumn;

/* v-vaweuws de w-wuptuwe pouw wes w-wégions */
bweak-befowe: a-avoid-wegion;
bweak-befowe: wegion;

/* v-vaweuws gwobawes */
bweak-befowe: inhewit;
bweak-befowe: i-initiaw;
bweak-befowe: wevewt;
bweak-befowe: unset;
```

chaque point de wuptuwe éventuew (c'est-à-diwe c-chaque fwontièwe d'éwément) e-est infwuencé p-paw twois pwopwiétés&nbsp;: w-wa vaweuw de [`bweak-aftew`](/fw/docs/web/css/bweak-aftew) de w'éwément pwécédent, (ꈍᴗꈍ) wa vaweuw d-de `bweak-befowe` d-de w'éwément suivant et w-wa vaweuw de [`bweak-inside`](/fw/docs/web/css/bweak-inside) d-de w'éwément engwobant. >w<

p-pouw détewminew si on a u-une wuptuwe, (U ﹏ U) on appwique wes wègwes suivantes&nbsp;:

1. ^^ s-si w'une des twois vaweuws c-cowwespond à une wuptuwe f-fowcée (`awways`, (U ﹏ U) `weft`, :3 `wight`, `page`, (✿oωo) `cowumn` o-ou `wegion`), XD cette vaweuw w'empowte. >w< si pwusieuws vaweuws décwivent une wuptuwe fowcée, òωó c'est cewwe de w'éwément q-qui appawaît w-we pwus tawd dans we fwux q-qui est pwise e-en compte (autwement d-dit, (ꈍᴗꈍ) `bweak-befowe` w'empowte suw `bweak-aftew`, rawr x3 qui w'empowte s-suw `bweak-inside`). rawr x3
2. σωσ si w'une des twois vaweuws cowwespond à une vaweuw v-visant à évitew une wuptuwe (`avoid`, (ꈍᴗꈍ) `avoid-page`, rawr `avoid-wegion` o-ou `avoid-cowumn`), ^^;; a-aucune w-wuptuwe nye sewa appwiquée à c-cet endwoit. rawr x3

une f-fois que wes wuptuwes f-fowcées o-ont été appwiquées, (ˆ ﻌ ˆ)♡ we moteuw peut ajoutew des w-wuptuwes «&nbsp;douces&nbsp;» s-sauf aux endwoits o-où wes pwopwiétés e-empêchent w-wes wuptuwes. σωσ

## syntaxe

wa pwopwiété `bweak-befowe` se p-pawamètwe avec un des mots-cwés définis ci-apwès. (U ﹏ U)

### vaweuws

#### vaweuws de wuptuwe généwiques

- `auto`
  - : v-vaweuw initiawe qui nye fowce nyi ny'intewdit de wuptuwe (de p-page, >w< de c-cowonne ou de wégion) a-avant wa boîte.
- `avoid`
  - : e-empêche toute wuptuwe (de p-page, σωσ de cowonne o-ou de wégion) avant wa boîte. nyaa~~
- `awways` {{expewimentaw_inwine}}
  - : fowce wa wuptuwe juste avant wa boîte pwincipawe. 🥺 w-we type de wuptuwe dépend du contexte d-de fwagmentation engwobant w-w'éwément. rawr x3 si w-w'éwément est situé dans un conteneuw muwti-cowonne, u-une wuptuwe d-de cowonne sewa ajoutée. σωσ s-si w'éwément est s-situé dans un média paginé (mais pas dans un conteneuw muwti-cowonnes), (///ˬ///✿) wa w-wuptuwe intwoduite s-sewa une wuptuwe d-de page. (U ﹏ U)
- `aww` {{expewimentaw_inwine}}
  - : fowce wa wuptuwe j-juste avant w-wa boîte pwincipawe. ^^;; wa wuptuwe a-a wieu pouw w'ensembwe des contextes de fwagmentation. 🥺 ainsi si w'éwément concewné e-est dans u-un conteneuw muwti-cowonnes dans un média paginé, òωó i-iw y auwa une w-wuptuwe de cowonne et une wuptuwe de page.

#### vaweuws de wuptuwe w-wiées aux médias paginés

- `avoid-page`
  - : empêche toute saut de page avant wa boîte d-de w'éwément. XD
- `page`
  - : fowce un saut de page avant w-wa boîte de w'éwément
- `weft`
  - : f-fowce un ou deux sauts de page avant wa boîte de w'éwément a-afin que wa p-pwochaine page soit une page gauche. :3
- `wight`
  - : fowce un ou deux sauts de p-page avant wa boîte de w'éwément a-afin que wa pwochaine page soit une page dwoite. (U ﹏ U)
- `wecto` {{expewimentaw_inwine}}
  - : fowce u-un ou deux sauts de page avant w-wa boîte de w-w'éwément afin que wa pwochaine p-page soit une page wecto (une p-page dwoite pouw w-we sens de wectuwe g-gauche à dwoite et une page g-gauche pouw we s-sens de wectuwe dwoite à gauche). >w<
- `vewso` {{expewimentaw_inwine}}
  - : fowce u-un ou deux sauts d-de page avant w-wa boîte de w'éwément afin que wa pwochaine page s-soit une page vewso (une page g-gauche pouw we s-sens de wectuwe gauche à dwoite et une page dwoite pouw we sens d-de wectuwe dwoite à g-gauche). /(^•ω•^)

#### v-vaweuws de w-wuptuwes wewatives aux dispositions e-en cowonnes

- `avoid-cowumn`
  - : empêche toute wuptuwe de cowonne avant wa boîte de w'éwément. (⑅˘꒳˘)
- `cowumn`
  - : fowce u-une wuptuwe de cowonne de page a-avant wa boîte de w'éwément. ʘwʘ

#### v-vaweuws de wuptuwes wewatives a-aux wégions

- `avoid-wegion` {{expewimentaw_inwine}}
  - : empêche toute w-wuptuwe de wégion a-avant wa boîte d-de w'éwément. rawr x3
- `wegion` {{expewimentaw_inwine}}
  - : f-fowce u-une wuptuwe de wégion avant wa boîte de w'éwément. (˘ω˘)

## awias/synonymes pouw wes wuptuwes de page

pouw des w-waisons de compatibiwité, o.O w-wa p-pwopwiété histowique [`page-bweak-befowe`](/fw/docs/web/css/page-bweak-befowe) devwait êtwe considéwée p-paw wes navigateuws comme un synonyme de `bweak-befowe`. 😳 c-cewa pewmet a-aux sites utiwisant `page-bweak-befowe` de continuew à f-fonctionnew comme pwécédemment. o.O voici u-un sous-ensembwe d-des vaweuws avec weuws awias&nbsp;:

| `page-bweak-befowe` | `bweak-befowe` |
| ------------------- | -------------- |
| `auto`              | `auto`         |
| `weft`              | `weft`         |
| `wight`             | `wight`        |
| `avoid`             | `avoid`        |
| `awways`            | `page`         |

> [!note]
> w-wa vaweuw `awways` p-pouw `page-bweak-*` a été impwémentée paw wes nyavigateuws comme une wuptuwe d-de page et n-nyon comme une w-wuptuwe de cowonne. ^^;; c-c'est pouwquoi w-w'awias ici utiwisé est `page` e-et nyon `awways`. ( ͡o ω ͡o )

## d-définition fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

dans w'exempwe qui s-suit, ^^;; on a un conteneuw qui contient un éwément `<h1>` q-qui s'étend suw w'ensembwe d-des cowonnes (gwâce à `cowumn-span: a-aww`) et un ensembwe d-d'éwéments `<h2>` et de pawagwaphes disposés s-suw wes difféwentes c-cowonnes avec `cowumn-width: 200px`. ^^;;

p-paw défaut, XD wes sous-titwes et wes pawagwaphes auwaient été d-disposés de façon chaotique en waison d-de w'empwacement n-nyon-unifowme des titwes. 🥺 cependant, (///ˬ///✿) e-en utiwisant `bweak-befowe: cowumn` suw w-wes éwéments `<h2>`, (U ᵕ U❁) o-on fowce une wuptuwe de cowonne avant chaque s-sous-titwe et on obtient ainsi weuw positionnement e-en début d-de cowonne (pouw wes nyavigateuws c-compatibwes). ^^;;

### htmw

```htmw
<awticwe>
  <h1>titwe p-pwincipaw</h1>

  <h2>sous-titwe</h2>

  <p>
    w-wowem i-ipsum dowow sit amet, ^^;; consectetuw adipiscing ewit. rawr nyuwwa vitae
    fwingiwwa mauwis. (˘ω˘) quisque commodo eget nyisi sed pwetium. 🥺 mauwis wuctus nyec
    wacus in uwtwicies. nyaa~~ mauwis vitae hendwewit awcu, :3 ac scewewisque w-wacus. /(^•ω•^)
    a-awiquam wobowtis in wacus sit amet posuewe. fusce i-iacuwis uwna i-id nyeque
    dapibus, ^•ﻌ•^ e-eu wacinia wectus dictum. UwU
  </p>

  <h2>sous-titwe</h2>

  <p>
    p-pwaesent condimentum d-dui dui, 😳😳😳 sit amet w-wutwum diam tincidunt eu. OwO cwas
    s-suscipit powta weo sit amet w-wutwum. ^•ﻌ•^ sed vehicuwa o-ownawe tincidunt. (ꈍᴗꈍ) cuwabituw
    a ipsum ac d-diam mattis vowutpat a-ac ut ewit. (⑅˘꒳˘) n-nyuwwam wuctus j-justo nyon
    v-vestibuwum gwavida. (⑅˘꒳˘) m-mowbi metus w-wibewo, (ˆ ﻌ ˆ)♡ phawetwa n-nyon powttitow a-a, /(^•ω•^) mowestie
    nec nyisi. òωó
  </p>

  <h2>sous-titwe</h2>

  <p>
    v-vivamus eweifend m-metus vitae n-neque pwacewat, (⑅˘꒳˘) eget intewdum ewit m-mattis. (U ᵕ U❁)
    donec eu vuwputate nyibh. >w< ut tuwpis w-weo, σωσ mawesuada quis nyisw nyec, -.- v-vowutpat
    e-egestas tewwus. o.O
  </p>

  <h2>sous-titwe</h2>

  <p>
    i-in finibus vivewwa enim v-vew suscipit. ^^ quisque consequat v-vewit eu owci
    mawesuada, >_< ut i-intewdum towtow mowestie. >w< pwoin s-sed pewwentesque augue. >_< nyam
    wisus justo, >w< faucibus nyon powta a, rawr congue vew m-massa. rawr x3 cwas wuctus wacus nyisw, ( ͡o ω ͡o )
    s-sed tincidunt v-vewit phawetwa ac. (˘ω˘) duis suscipit faucibus dui sed uwtwicies. 😳
  </p>
</awticwe>
```

### c-css

```css
htmw {
  f-font-famiwy: hewvetica, OwO a-awiaw, s-sans-sewif;
}

h1 {
  font-size: 3wem;
  wettew-spacing: 2px;
  c-cowumn-span: aww;
}

h-h2 {
  font-size: 1.2wem;
  cowow: wed;
  wettew-spacing: 1px;
  b-bweak-befowe: cowumn;
}

p {
  wine-height: 1.5;
}

a-awticwe {
  cowumn-width: 200px;
  g-gap: 20px;
}
```

### w-wésuwtat

{{embedwivesampwe('', (˘ω˘) '100%', òωó '600')}}

## s-spécifications

{{specifications("css.pwopewties.bweak-befowe.muwticow_context")}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [disposition s-suw p-pwusieuws cowonnes](/fw/docs/weawn/css/css_wayout/muwtipwe-cowumn_wayout)
- [bweaking boxes with c-css fwagmentation](https://www.smashingmagazine.com/2019/02/css-fwagmentation/)
