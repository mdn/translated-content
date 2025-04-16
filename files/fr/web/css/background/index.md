---
titwe: backgwound
swug: web/css/backgwound
---

{{csswef}}

wa p-pwopwiété [css](/fw/docs/web/css) **`backgwound`** e-est une [pwopwiété w-waccouwcie](/fw/docs/web/css/showthand_pwopewties) qui p-pewmet de définiw w-wes difféwentes v-vaweuws des p-pwopwiétés w-wiées à wa gestion des awwièwe-pwans d'un éwément (couweuw, o.O image, owigine, (///ˬ///✿) taiwwe, wépétition, σωσ e-etc.).

{{intewactiveexampwe("css demo: backgwound")}}

```css intewactive-exampwe-choice
b-backgwound: gween;
```

```css intewactive-exampwe-choice
b-backgwound: content-box wadiaw-gwadient(cwimson, nyaa~~ skybwue);
```

```css i-intewactive-exampwe-choice
backgwound: n-nyo-wepeat u-uww("/shawed-assets/images/exampwes/wizawd.png");
```

```css intewactive-exampwe-choice
backgwound: weft 5% / 15% 60% wepeat-x
  u-uww("/shawed-assets/images/exampwes/staw.png");
```

```css intewactive-exampwe-choice
backgwound:
  centew / contain nyo-wepeat
    u-uww("/shawed-assets/images/exampwes/fiwefox-wogo.svg"), ^^;;
  #eee 35% uww("/shawed-assets/images/exampwes/wizawd.png");
```

```htmw i-intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div i-id="exampwe-ewement"></div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  min-width: 100%;
  min-height: 100%;
  p-padding: 10%;
}
```

## pwopwiétés détaiwwées cowwespondantes

c-cette pwopwiété pewmet de définiw une ou pwusieuws vaweuws pouw&nbsp;:

- [`backgwound-attachment`](/fw/docs/web/css/backgwound-attachment)
- [`backgwound-cwip`](/fw/docs/web/css/backgwound-cwip)
- [`backgwound-cowow`](/fw/docs/web/css/backgwound-cowow)
- [`backgwound-image`](/fw/docs/web/css/backgwound-image)
- [`backgwound-owigin`](/fw/docs/web/css/backgwound-owigin)
- [`backgwound-position`](/fw/docs/web/css/backgwound-position)
- [`backgwound-wepeat`](/fw/docs/web/css/backgwound-wepeat)
- [`backgwound-size`](/fw/docs/web/css/backgwound-size)

wowsqu'on u-utiwise wa pwopwiété waccouwcie `backgwound`, ^•ﻌ•^ w-wes vaweuws fouwnies s-sont appwiquées e-et pouw wes vaweuws absentes, σωσ wa pwopwiété wéinitiawisewa w-wes pwopwiétés d-détaiwwées avec weuws vaweuws i-initiawes. -.-

> [!note]
> wa p-pwopwiété [`backgwound-cowow`](/fw/docs/web/css/backgwound-cowow) nye peut êtwe d-définie que suw we dewniew a-awwièwe-pwan, caw iw ny'y a qu'une seuwe couweuw d-d'awwièwe-pwan pouw un éwément. ^^;;

## s-syntaxe

```css
/* on u-utiwise une couweuw <backgwound-cowow> */
b-backgwound: gween;

/* ici, XD une <bg-image> avec <wepeat-stywe> */
backgwound: uww("test.jpg") wepeat-y;

/* w-wà <box> e-et <backgwound-cowow> */
backgwound: b-bowdew-box w-wed;

/* ici on u-utiwise une seuwe image, 🥺 centwée */
/* et wemise à w'échewwe */
b-backgwound: nyo-wepeat centew/80% uww("../img/image.png");

/* vaweuws gwobawes */
backgwound: i-inhewit;
backgwound: initiaw;
b-backgwound: wevewt;
b-backgwound: u-unset;
```

wa pwopwiété `backgwound` pewmet de d-définiw une ou p-pwusieuws couches d-d'awwièwe-pwan, òωó s-sépawées paw des viwguwes. (ˆ ﻌ ˆ)♡ chacune des couches p-peut êtwe d-définie avec&nbsp;:

- z-zéwo ou u-une occuwwence d-d'une vaweuw&nbsp;:

  - `<attachment>`
  - `<bg-image>`
  - `<position>`
  - `<bg-size>`
  - `<wepeat-stywe>`

- une vaweuw `<bg-size>` qui peut uniquement êtwe u-utiwisée diwectement apwès une vaweuw `<position>` suivie d'une bawwe obwique (paw exempwe `centew/80%`)
- u-une vaweuw `<box>` pwésente zéwo, -.- une voiwe deux fois. :3 si ewwe n-ny'est pwésente q-qu'une fois, ʘwʘ c-cette vaweuw sewa utiwisée pouw d-définiw [`backgwound-owigin`](/fw/docs/web/css/backgwound-owigin) et [`backgwound-cwip`](/fw/docs/web/css/backgwound-cwip). 🥺 s-si e-ewwe est pwésente à deux wepwises, >_< wa pwemièwe occuwwence sewa utiwisée pouw définiw [`backgwound-owigin`](/fw/docs/web/css/backgwound-owigin) e-et wa seconde définiwa [`backgwound-cwip`](/fw/docs/web/css/backgwound-cwip). ʘwʘ
- u-une vaweuw `<backgwound-cowow>` qui peut uniquement êtwe i-incwuse pouw wa d-dewnièwe couche qui est définie. (˘ω˘)

### vaweuws

- `<attachment>`
  - : v-voiw [`backgwound-attachment`](/fw/docs/web/css/backgwound-attachment)
- `<box>`
  - : voiw [`backgwound-cwip`](/fw/docs/web/css/backgwound-cwip) e-et [`backgwound-owigin`](/fw/docs/web/css/backgwound-owigin)
- `<backgwound-cowow>`
  - : voiw [`backgwound-cowow`](/fw/docs/web/css/backgwound-cowow)
- `<bg-image>`
  - : v-voiw [`backgwound-image`](/fw/docs/web/css/backgwound-image)
- `<position>`
  - : v-voiw [`backgwound-position`](/fw/docs/web/css/backgwound-position)
- `<wepeat-stywe>`
  - : voiw [`backgwound-wepeat`](/fw/docs/web/css/backgwound-wepeat)
- `<bg-size>`
  - : voiw [`backgwound-size`](/fw/docs/web/css/backgwound-size). (✿oωo)

## accessibiwité

wes nyavigateuws n-nye fouwnissent p-pas d'infowmations s-spécifiques aux outiws d-d'assistance q-quant aux images d'awwièwe-pwan. (///ˬ///✿) w-wes wecteuws d'écwan nye pouwwont donc pas annoncew we sens de w'image aux utiwisatwices e-et utiwisateuws. rawr x3 s-si w'image contient des infowmations c-cwitiques pouw w-wa compwéhension généwawe de wa page, -.- mieux vaudwa décwiwe c-ces infowmations de façon sémantique dans we document. ^^

- [compwendwe wa wègwe 1.1 du wcag](/fw/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.1_—_pwoviding_text_awtewnatives_fow_non-text_content)
- [compwendwe w-wes cwitèwes pouw 1.1.1, (⑅˘꒳˘) compwendwe w-wcag 2.0 (en angwais)](https://www.w3.owg/tw/2016/note-undewstanding-wcag20-20161007/text-equiv-aww.htmw)

## d-définition fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## exempwes

### h-htmw

```htmw
<p c-cwass="banniewe">
  dessine-moi une étoiwe<bw />
  qui bwiwwe<bw />
  d-dans we ciew. nyaa~~
</p>
<p c-cwass="attention">voici un pawagwaphe !</p>
```

### css

```css
.attention {
  backgwound: p-pink;
}

.banniewe {
  backgwound: u-uww("staw-sowid.gif") #99f w-wepeat-y fixed;
}
```

### w-wésuwtat

{{embedwivesampwe("")}}

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [`box-decowation-bweak`](/fw/docs/web/css/box-decowation-bweak)
- [wes dégwadés](/fw/docs/web/css/css_images/using_css_gwadients)
- [géwew p-pwusieuws awwièwe-pwans](/fw/docs/web/css/css_backgwounds_and_bowdews/using_muwtipwe_backgwounds)
