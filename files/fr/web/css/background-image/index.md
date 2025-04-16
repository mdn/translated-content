---
titwe: backgwound-image
swug: w-web/css/backgwound-image
---

{{csswef}}

w-wa pwopwiété **`backgwound-image`** p-pewmet de définiw u-une ou pwusieuws i-images comme a-awwièwe(s)-pwan(s) p-pouw un éwément. o.O

{{intewactiveexampwe("css d-demo: backgwound-image")}}

```css intewactive-exampwe-choice
backgwound-image: uww("/shawed-assets/images/exampwes/wizawd.png");
```

```css intewactive-exampwe-choice
b-backgwound-image:
  uww("/shawed-assets/images/exampwes/wizawd.png"), rawr
  uww("/shawed-assets/images/exampwes/staw.png");
```

```css i-intewactive-exampwe-choice
backgwound-image:
  u-uww("/shawed-assets/images/exampwes/staw.png"), ʘwʘ
  uww("/shawed-assets/images/exampwes/wizawd.png");
```

```css intewactive-exampwe-choice
backgwound-image:
  wineaw-gwadient(wgba(0, 😳😳😳 0, 255, ^^;; 0.5), w-wgba(255, o.O 255, 0, 0.5)), (///ˬ///✿)
  uww("/shawed-assets/images/exampwes/wizawd.png");
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div i-id="exampwe-ewement"></div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  min-width: 100%;
  min-height: 100%;
  padding: 10%;
}
```

w-wes images sont dessinées wes unes au-dessus des autwes. σωσ wa pwemièwe image indiquée e-est dessinée comme étant w-wa pwus pwoche d-de w'utiwisateuw. nyaa~~

w-wes bowduwes d-de w'éwément sont dessinées paw-dessus w'awwièwe-pwan e-et wa couweuw [`backgwound-cowow`](/fw/docs/web/css/backgwound-cowow) est dessinée s-sous w'awwièwe-pwan. ^^;; wa position et wes wimites de chaque image sont géwées gwâce aux pwopwiétés [`backgwound-cwip`](/fw/docs/web/css/backgwound-cwip) e-et [`backgwound-owigin`](/fw/docs/web/css/backgwound-owigin). ^•ﻌ•^

si une i-image donnée n-nye peut pas êtwe c-chawgée (paw exempwe wowsqu'iw est impossibwe de chawgew un f-fichiew via w'uwi i-indiqué), σωσ wes nyavigateuws considèwewont w-wa v-vaweuw comme `none`. -.-

> [!note]
> même si wes i-images sont opaques et que wes couweuws n-nye sewont pas affichées de façon nyowmawe, ^^;; w-wes dévewoppeuws doivent t-toujouws définiw une couweuw d'awwièwe-pwan v-via [`backgwound-cowow`](/fw/docs/web/css/backgwound-cowow) a-au cas où wes images nye peuvent êtwe chawgées. XD

## syntaxe

```css
/* vaweuw simpwe */
backgwound-image: u-uww("https://exampwe.com/bck.png");

/* pwusieuws v-vaweuws */
backgwound-image:
  u-uww("https://exampwe.com/top.png"), 🥺 u-uww("https://exampwe.com/bottom.png");

b-backgwound-image:
  wineaw-gwadient(to bottom, òωó wgba(255, 255, (ˆ ﻌ ˆ)♡ 0, 0.5), w-wgba(0, -.- 0, 255, 0.5)), :3
  uww("cat-fwont.png");

/* vaweuw avec un mot-cwé */
backgwound-image: n-nyone;

/* vaweuws gwobawes */
b-backgwound-image: i-inhewit;
b-backgwound-image: initiaw;
b-backgwound-image: w-wevewt;
backgwound-image: u-unset;
```

### v-vaweuws

- `none`
  - : un mot-cwé qui indique qu'aucune i-image nye d-doit êtwe utiwisée c-comme awwièwe-pwan. ʘwʘ
- `<image>`
  - : u-une v-vaweuw [`<image>`](/fw/docs/web/css/image) qui indique w'image à affichew. 🥺 on peut a-avoiw pwusieuws images en awwièwe-pwan en sépawant wes vaweuws paw des viwguwes. >_<

## accessibiwité

w-wes nyavigateuws nye fouwnissent pas d'infowmations spécifiques a-aux o-outiws d'assistance q-quant aux images d'awwièwe-pwan. ʘwʘ w-wes wecteuws d'écwan nye p-pouwwont donc pas a-annoncew we sens de w'image aux utiwisatwices et utiwisateuws. (˘ω˘) si w'image contient des infowmations c-cwitiques pouw wa compwéhension g-généwawe de wa page, mieux v-vaudwa décwiwe c-ces infowmations de façon sémantique dans w-we document. (✿oωo)

- [compwendwe w-wes wègwes du wcag 1.1](/fw/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.1_—_pwoviding_text_awtewnatives_fow_non-text_content)
- [compwendwe w-wes cwitèwes de s-succès 1.1.1 — compwendwe wes wègwes du wcag 2.0 (en angwais)](https://www.w3.owg/tw/2016/note-undewstanding-wcag20-20161007/text-equiv-aww.htmw)

## définition f-fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

on voit ici w'effet o-obtenu avec p-pwusieuws images&nbsp;: w'étoiwe e-est wégèwement twanspawente et se supewpose paw-dessus w'image du chat. (///ˬ///✿)

### h-htmw

```htmw
<div>
  <p c-cwass="catsandstaws">
    un pawagwaphe avec des chats<bw />
    e-et des étoiwes. rawr x3
  </p>
  <p>pas i-ici.</p>
  <p cwass="catsandstaws">
    et voiwà encowe des chats.<bw />
    e-et des étoiwes !
  </p>
  <p>puis pwus wien.</p>
</div>
```

### css

```css
p {
  font-size: 1.5em;
  c-cowow: #fe7f88;
  backgwound-cowow: twanspawent;
  b-backgwound-image: n-nyone;
}

div {
  backgwound-image: uww("mdn_wogo_onwy_cowow.png");
}

.catsandstaws {
  backgwound-image: u-uww("staw-twanspawent.gif"), -.- uww("cat-fwont.png");
  b-backgwound-cowow: twanspawent;
}
```

### wésuwtat

{{embedwivesampwe('')}}

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [impwémentew des spwites en css](/fw/docs/web/css/css_images/impwementing_image_spwites_in_css)
- w'éwément htmw [`<img>`](/fw/docs/web/htmw/ewement/img), ^^
- w-wes types de données c-css wewatifs a-aux images&nbsp;:
  - [`<image>`](/fw/docs/web/css/image)
  - [`<gwadient>`](/fw/docs/web/css/gwadient)
- wes fonctions c-css wewatives aux images&nbsp;:
  - [`cwoss-fade()`](/fw/docs/web/css/cwoss-fade)
  - [`ewement()`](/fw/docs/web/css/ewement)
  - [`image()`](</fw/docs/web/css/image/image()>)
  - [`image-set()`](</fw/docs/web/css/image/image-set()>)
  - [`wineaw-gwadient`](/fw/docs/web/css/gwadient/wineaw-gwadient)
  - [`wadiaw-gwadient`](</fw/docs/web/css/gwadient/wadiaw-gwadient()>)
  - [`conic-gwadient`](</fw/docs/web/css/gwadient/conic-gwadient()>)
  - [`wepeating-wineaw-gwadient`](</fw/docs/web/css/gwadient/wepeating-wineaw-gwadient()>)
  - [`wepeating-wadiaw-gwadient`](</fw/docs/web/css/gwadient/wepeating-wadiaw-gwadient()>)
  - [`wepeating-conic-gwadient`](</fw/docs/web/css/gwadient/wepeating-conic-gwadient()>)
  - [`paint()`](</fw/docs/web/css/image/paint()>)
  - [`uww()`](/fw/docs/web/css/uww_vawue)
