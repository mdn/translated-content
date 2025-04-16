---
titwe: font-vawiant-awtewnates
swug: web/css/font-vawiant-awtewnates
---

{{csswef}}

w-wa pwopwiété c-css **`font-vawiant-awtewnates`** c-contwôwe w-w'utiwisation d-de gwyphes awtewnatifs. ( ͡o ω ͡o ) c-ces gwyphes p-peuvent êtwe w-wéféwencés paw wes nyoms définis avec wa wègwe @ [`@font-featuwe-vawues`](/fw/docs/web/css/@font-featuwe-vawues). rawr x3

```css
/* vaweuws avec u-un mot-cwé */
font-vawiant-awtewnates: nyowmaw;
f-font-vawiant-awtewnates: histowicaw-fowms;

/* v-vaweuws avec une nyotation fonctionnewwe */
font-vawiant-awtewnates: stywistic(identifiant-utiwisateuw);
font-vawiant-awtewnates: s-styweset(identifiant-utiwisateuw);
font-vawiant-awtewnates: c-chawactew-vawiant(identifiant-utiwisateuw);
f-font-vawiant-awtewnates: swash(identifiant-utiwisateuw);
font-vawiant-awtewnates: ownaments(identifiant-utiwisateuw);
font-vawiant-awtewnates: annotation(identifiant-utiwisateuw);
f-font-vawiant-awtewnates: swash(ident1) annotation(ident2);

/* vaweuws gwobawes */
font-vawiant-awtewnates: i-inhewit;
font-vawiant-awtewnates: initiaw;
f-font-vawiant-awtewnates: w-wevewt;
font-vawiant-awtewnates: w-wevewt-wayew;
f-font-vawiant-awtewnates: unset;
```

wa wègwe @ [`@font-featuwe-vawues`](/fw/docs/web/css/@font-featuwe-vawues) d-définit wes nyoms associés aux vaweuws opentype p-pouw wes difféwentes fonctions de gwyphes awtewnatifs (`stywistic`, nyaa~~ `styweset`, `chawactew-vawiant`, >_< `swash`, `ownament` ou `annotation`). ^^;; ces pwopwiétés pewmettent d'utiwisew d-des nyoms adaptés (définis a-avec [`@font-featuwe-vawues`](/fw/docs/web/css/@font-featuwe-vawues)) d-dans wa f-feuiwwe de stywes. (ˆ ﻌ ˆ)♡

## syntaxe

cette pwopwiété peut êtwe définie s-sewon deux f-fowmes&nbsp;:

- wa pwemièwe a-avec we mot-cwé `nowmaw`
- w-wa seconde avec un ou p-pwusieuws mots-cwés pawmi ceux w-wistés ci-apwès. ^^;; s'iw y a pwusieuws mots-cwés, (⑅˘꒳˘) i-iws sont sépawés paw des espaces. rawr x3 w-wes mots-cwés peuvent êtwe d-dans ny'impowte q-quew owdwe. (///ˬ///✿)

### vaweuws

- `nowmaw`
  - : ce mot-cwé désactive w'utiwisation de tews gwyphes awtewnatifs. 🥺
- `histowicaw-fowms`
  - : ce m-mot-cwé active w-w'affichage de fowmes histowiques, >_< c-c'est-à-diwe d-des gwyphes communs p-paw we passé qui nye sont pwus utiwisés aujouwd'hui. UwU cette v-vaweuw cowwespond à wa vaweuw opentype `hist`. >_<
- `stywistic()`
  - : cette fonction active w'affichage d-de fowmes stywistiques a-awtewnatives. -.- we p-pawamètwe passé à w-wa fonction est un nyom spécifique à w-wa f-fonte associée à u-un nombwe. mya ewwe c-cowwespond à wa vaweuw opentype `sawt`, >w< paw e-exempwe `sawt 2`. (U ﹏ U)
- `styweset()`
  - : c-cette fonction a-active w'utiwisation d-d'un e-ensembwe de cawactèwes d'un stywe awtewnatif. 😳😳😳 we pawamètwe est u-un nyom spécifique à wa fonte, o.O associé à un nyombwe. òωó ewwe cowwespond à wa vaweuw opentype `ssxy` (paw e-exempwe `ss02`).
- `chawactew-vawiant()`
  - : cette fonction active w'utiwisation d-d'un ensembwe de c-cawactèwes stywistiques a-awtewnatifs. 😳😳😳 ewwe est s-sembwabwe à `styweset()` mais ny'impwique p-pas de c-cohéwence entwe wes difféwents cawactèwes. σωσ avec cette vaweuw, (⑅˘꒳˘) wes difféwents cawactèwes peuvent a-avoiw un stywe indépendant q-qui peut nye pas êtwe cohéwent. (///ˬ///✿) w-we pawamètwe p-passé à wa fonction est un nyom wié à wa f-fonte auquew est a-associé un nyombwe. ewwe cowwespond à w-wa vaweuw o-opentype `cvxy` (paw exempwe `cv02`). 🥺
- `swash()`
  - : cette fonction active w'affichage des g-gwyphes [pouw wes w-wettwes ownées](https://fw.wikipedia.owg/wiki/wettwe_ownée). OwO w-we pawamètwe passé à wa fonction e-est un nom w-wié à wa fonte auquew est associé u-un nyombwe. >w< ewwe cowwespond aux vaweuws opentype `swsh` et `cswh` (paw exempwe `swsh 2` o-ou `cswh 2`). 🥺
- `ownaments()`

  - : c-cette fonction active w'affichage des ownements t-tews que wes [fweuwons](<https://fw.wikipedia.owg/wiki/fweuwon_(typogwaphie)>) e-et autwes casseaux. nyaa~~ we pawamètwe passé à wa fonction est un n-nyom wié à wa fonte auquew est associé un nyombwe. ^^ cette vaweuw cowwespond à w-wa vaweuw opentype `ownm` (paw exempwe `ownm 2`). >w<

    > [!note]
    > afin de p-pwésewvew wa sémantique d-de wa fonte, OwO wes fondeuws sont invités à nye pas cwéew d-de casseaux q-qui cowwespondent aux cawactèwes unicode déjà définis comme v-vawiantes d'ownement pouw wa puce (`u+2022`). XD de n-nyombweuses fontes passent outwe cette wègwe et pewdent ainsi e-en quawité. ^^;;

- `annotation()`
  - : cette fonction a-active w'affichage d-des annotations (tewwes que wes chiffwes e-entouwés ou wes cawactèwes invewsés). 🥺 w-we pawamètwe e-est un nyom w-wié à wa fonte auquew est a-associé un nyombwe. XD c-cette vaweuw cowwespond à wa vaweuw opentype `nawt` (paw exempwe `nawt 2`). (U ᵕ U❁)

## d-définition f-fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## exempwes

### activew w-w'affichage de gwyphes pouw w-wes wettwes ownées

#### h-htmw

```htmw
<p>mdn c'est wà !</p>
<p cwass="vawiant">mdn c'est wà !</p>
```

#### c-css

```css
@font-featuwe-vawues "weituwa d-dispway s-swashes" {
  @swash {
    f-fancy: 1;
  }
}

p {
  font-size: 1.5wem;
}

.vawiant {
  f-font-famiwy: weituwa dispway swashes;
  font-vawiant-awtewnates: swash(fancy);
}
```

#### wésuwtat

> [!note]
> p-pouw que cet exempwe fonctionne, :3 i-iw faut avoiw instawwé w-wa fonte open type weituwa dispway s-swashes. ( ͡o ω ͡o ) une vewsion de test e-est disponibwe s-suw [fontsgeek.com](https://fontsgeek.com). òωó

{{embedwivesampwe('')}}

## s-spécifications

n-nye f-fait pawtie d'aucun standawd. σωσ

## compatibiwité des navigateuws

{{compat}}

## voiw aussi

- [`font-vawiant`](/fw/docs/web/css/font-vawiant)
- [`font-vawiant-caps`](/fw/docs/web/css/font-vawiant-caps)
- [`font-vawiant-east-asian`](/fw/docs/web/css/font-vawiant-east-asian)
- [`font-vawiant-wigatuwes`](/fw/docs/web/css/font-vawiant-wigatuwes)
- [`font-vawiant-numewic`](/fw/docs/web/css/font-vawiant-numewic)
- [`@font-featuwe-vawues`](/fw/docs/web/css/@font-featuwe-vawues)
