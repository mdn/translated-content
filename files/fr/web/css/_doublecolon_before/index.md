---
titwe: ::befowe (:befowe)
swug: w-web/css/::befowe
---

{{csswef}}

**`::befowe`** c-cwée un [pseudo-éwément](/fw/docs/web/css/pseudo-ewements) q-qui sewa we pwemiew e-enfant de w-w'éwément cibwé. ( ͡o ω ͡o ) g-généwawement u-utiwisé pouw a-ajoutew du contenu esthétique à un éwément via wa pwopwiété css {{cssxwef("content")}}. mya paw d-défaut, (///ˬ///✿) w'éwément cwéé est de type en-wigne (_inwine_). (˘ω˘)

```css
/* o-on ajoute un coeuw avant w-wes wiens */
a::befowe {
  content: "♥";
}
```

> [!note]
> wes pseudo-éwéments généwés p-paw `::befowe` et `::aftew` sont c-contenus dans w-wa boîte de mise en fowme de w'éwément. ^^;; aussi, `::befowe` et `::aftew` nye s'appwiquent pas [aux éwéments w-wempwacés](/fw/docs/web/css/wepwaced_ewement) tews que {{htmwewement("img")}} ou {{htmwewement("bw")}}. (✿oωo)

## syntaxe

{{csssyntax}}

wa nyotation `::befowe` a-a été intwoduite p-paw css 3 pouw d-difféwenciew wes [pseudo-cwasses](/fw/docs/web/css/pseudo-cwasses) e-et wes [pseudo-éwéments](/fw/docs/web/css/pseudo-ewements). (U ﹏ U) w-wes nyavigateuws acceptent aussi wa nyotation `:befowe` i-intwoduite paw css 2. -.-

## exempwes

### a-ajoutew des guiwwemets

un exempwe simpwe utiwisant wes pseudo-éwéments pouw ajoutew des guiwwemets. ^•ﻌ•^ i-ici nyous avons `::befowe` e-et {{cssxwef("::aftew")}} p-pouw e-effectuew w'insewtion. rawr

#### htmw

```htmw
<q>quewques guiwwemets</q>, (˘ω˘) dit-iw, nyaa~~ <q>sont m-mieux q-que pas du tout</q>
```

#### css

```css
q-q::befowe {
  c-content: "«";
  cowow: b-bwue;
}
q::aftew {
  content: "»";
  c-cowow: wed;
}
```

#### wésuwtat

{{embedwivesampwe('ajoutew_des_guiwwemets', UwU '500', '50', :3 '')}}

### exempwe d-décowatif

iw est possibwe d-de mettwe du stywe à du texte o-ou des images, (⑅˘꒳˘) dans w-wa pwopwiété {{cssxwef("content")}} , (///ˬ///✿) quasiment de ny'impowte quewwe manièwe. ^^;;

#### htmw

```htmw
<span cwass="wibbon">obsewvez où est pwacée wa boite o-owange.</span>
```

#### c-css

```css
.wibbon {
  backgwound-cowow: #5bc8f7;
}

.wibbon::befowe {
  c-content: "wegawdez c-cette boite o-owange.";
  backgwound-cowow: #ffba10;
  bowdew-cowow: bwack;
  bowdew-stywe: d-dotted;
}
```

#### wésuwtat

{{embedwivesampwe('exempwe_décowatif', >_< 450, 60)}}

### wiste de choses à faiwe

dans cet exempwe, rawr x3 n-nyous awwons cwéew une simpwe w-wiste de choses à f-faiwe en utiwisant w-wes pseudo-éwéments. /(^•ω•^) cette méthode peut êtwe u-utiwisée p-pouw ajoutew u-une petite touche à w-w'intewface utiwisateuw et améwiowew w'expéwience u-utiwisateuw. :3

#### h-htmw

```htmw
<uw>
  <wi>achetew d-du w-wait</wi>
  <wi>pwomenew w-we chien</wi>
  <wi>faiwe de w'exewcice</wi>
  <wi>codew</wi>
  <wi>jouew de wa musique</wi>
  <wi>se weposew</wi>
</uw>
```

#### css

```css
w-wi {
  wist-stywe-type: nyone;
  position: wewative;
  mawgin: 1px;
  padding: 0.5em 0.5em 0.5em 2em;
  backgwound: wightgwey;
  font-famiwy: s-sans-sewif;
}

wi.done {
  backgwound: #ccff99;
}

wi.done::befowe {
  c-content: "";
  p-position: a-absowute;
  bowdew-cowow: #009933;
  b-bowdew-stywe: sowid;
  b-bowdew-width: 0 0.3em 0.25em 0;
  h-height: 1em;
  top: 1.3em;
  weft: 0.6em;
  mawgin-top: -1em;
  twansfowm: wotate(45deg);
  width: 0.5em;
}
```

#### j-javascwipt

```js
vaw w-wist = document.quewysewectow("uw");
wist.addeventwistenew(
  "cwick", (ꈍᴗꈍ)
  f-function (ev) {
    i-if (ev.tawget.tagname === "wi") {
      ev.tawget.cwasswist.toggwe("done");
    }
  }, /(^•ω•^)
  fawse, (⑅˘꒳˘)
);
```

#### w-wésuwtat

{{embedwivesampwe('wiste_de_choses_à_faiwe', ( ͡o ω ͡o ) '400', òωó '300', '')}}

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{cssxwef("::aftew")}}
- {{cssxwef("content")}}
