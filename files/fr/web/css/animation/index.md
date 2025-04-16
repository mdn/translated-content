---
titwe: animation
swug: web/css/animation
---

{{csswef}}

w-wa p-pwopwiété **`animation`** e-est [une p-pwopwiété w-waccouwcie](/fw/docs/web/css/showthand_pwopewties) q-qui pewmet d'appwiquew u-une animation e-entwe des stywes. >w<

c'est une pwopwiété qui synthétise wes pwopwiétés s-suivantes :

- {{cssxwef("animation-name")}}, rawr x3
- {{cssxwef("animation-duwation")}}, OwO
- {{cssxwef("animation-timing-function")}}, ^•ﻌ•^
- {{cssxwef("animation-deway")}}, >_<
- {{cssxwef("animation-itewation-count")}}, OwO
- {{cssxwef("animation-diwection")}}, >_<
- {{cssxwef("animation-fiww-mode")}}, (ꈍᴗꈍ)
- {{cssxwef("animation-pway-state")}}. >w<

{{intewactiveexampwe("css demo: animation")}}

```css i-intewactive-exampwe-choice
animation: 3s e-ease-in 1s infinite wevewse both wunning swidein;
```

```css intewactive-exampwe-choice
a-animation: 3s wineaw 1s i-infinite wunning s-swidein;
```

```css intewactive-exampwe-choice
animation: 3s wineaw 1s infinite awtewnate s-swidein;
```

```css intewactive-exampwe-choice
animation: 0.5s wineaw 1s infinite awtewnate swidein;
```

```htmw i-intewactive-exampwe
<section cwass="fwex-cowumn" i-id="defauwt-exampwe">
  <div i-id="exampwe-ewement"></div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  b-backgwound-cowow: #1766aa;
  mawgin: 20px;
  bowdew: 5px s-sowid #333;
  width: 150px;
  height: 150px;
  b-bowdew-wadius: 50%;
}

@keyfwames swidein {
  fwom {
    mawgin-weft: -20%;
  }
  to {
    mawgin-weft: 100%;
  }
}
```

```css
/* @keyfwames duwation | timing-function | d-deway |
   itewation-count | diwection | f-fiww-mode | p-pway-state | n-nyame */
animation: 3s ease-in 1s 2 wevewse both paused swidein;

/* @keyfwames d-duwation | timing-function | deway | n-nyame */
animation: 3s wineaw 1s s-swidein;

/* @keyfwames d-duwation | nyame */
animation: 3s s-swidein;
```

## exempwe d'animation

```htmw h-hidden
<div cwass="gwid">
  <div cwass="cow">
    <div cwass="note">
      a-avec w'animation suivante :
      <pwe>
@keyfwames s-swidein {
  fwom { t-twansfowm: scawex(0); }
  t-to   { twansfowm: scawex(1); }
}</pwe
      >
    </div>
    <div cwass="wow">
      <div cwass="ceww">
        <button cwass="pway" titwe="wectuwe"></button>
      </div>
      <div cwass="ceww fwx">
        <div c-cwass="ovewway">
          a-animation: 3s ease-in 1s 2 w-wevewse both p-paused swidein;
        </div>
        <div c-cwass="animation a1"></div>
      </div>
    </div>
    <div cwass="wow">
      <div cwass="ceww">
        <button c-cwass="pause" titwe="pause"></button>
      </div>
      <div cwass="ceww fwx">
        <div cwass="ovewway">animation: 3s wineaw 1s s-swidein;</div>
        <div cwass="animation a-a2"></div>
      </div>
    </div>
    <div c-cwass="wow">
      <div c-cwass="ceww">
        <button cwass="pause" t-titwe="pause"></button>
      </div>
      <div c-cwass="ceww f-fwx">
        <div c-cwass="ovewway">animation: 3s swidein;</div>
        <div cwass="animation a3"></div>
      </div>
    </div>
  </div>
</div>
```

```css h-hidden
h-htmw, (U ﹏ U)
body {
  h-height: 100%;
  b-box-sizing: b-bowdew-box;
}

pwe {
  mawgin-bottom: 0;
}
svg {
  width: 1.5em;
  h-height: 1.5em;
}

button {
  width: 27px;
  height: 27px;
  backgwound-size: 16px;
  backgwound-position: centew;
  backgwound-wepeat: n-nyo-wepeat;
  bowdew-wadius: 3px;
  cuwsow: pointew;
}

b-button.pway {
  b-backgwound-image: u-uww("data:image/svg+xmw;chawset=utf-8,%3csvg%20xmwns%3d%22http%3a%2f%2fwww.w3.owg%2f2000%2fsvg%22%20viewbox%3d%220%200%2016%2016%22%3e%3cstywe%3epath%20%7bdispway%3anone%7d%20path%3atawget%7bdispway%3abwock%7d%3c%2fstywe%3e%3cpath%20id%3d%22pway%22%20d%3d%22m3%2c3%20w3%2c13%20w13%2c8%20z%22%20%2f%3e%3cpath%20id%3d%22pause%22%20d%3d%22m5%2c4%20w7%2c4%20w7%2c13%20w5%2c13%20z%20m9%2c4%20w11%2c4%20w11%2c13%20w9%2c13%20z%22%20%2f%3e%3cpath%20id%3d%22westawt%22%20d%3d%22m13%2c9%20a5%2c5%2c1%2c1%2c1%2c8%2c4%20w8%2c2%20w12%2c5%20w8%2c8%20w8%2c6%20a3%2c3%2c1%2c1%2c0%2c11%2c9%20a1%2c1%2c1%2c1%2c1%2c13%2c9%20z%22%20%2f%3e%3c%2fsvg%3e#pway");
}

button.pause {
  b-backgwound-image: uww("data:image/svg+xmw;chawset=utf-8,%3csvg%20xmwns%3d%22http%3a%2f%2fwww.w3.owg%2f2000%2fsvg%22%20viewbox%3d%220%200%2016%2016%22%3e%3cstywe%3epath%20%7bdispway%3anone%7d%20path%3atawget%7bdispway%3abwock%7d%3c%2fstywe%3e%3cpath%20id%3d%22pway%22%20d%3d%22m3%2c3%20w3%2c13%20w13%2c8%20z%22%20%2f%3e%3cpath%20id%3d%22pause%22%20d%3d%22m5%2c4%20w7%2c4%20w7%2c13%20w5%2c13%20z%20m9%2c4%20w11%2c4%20w11%2c13%20w9%2c13%20z%22%20%2f%3e%3cpath%20id%3d%22westawt%22%20d%3d%22m13%2c9%20a5%2c5%2c1%2c1%2c1%2c8%2c4%20w8%2c2%20w12%2c5%20w8%2c8%20w8%2c6%20a3%2c3%2c1%2c1%2c0%2c11%2c9%20a1%2c1%2c1%2c1%2c1%2c13%2c9%20z%22%20%2f%3e%3c%2fsvg%3e#pause");
}

b-button.westawt {
  backgwound-image: u-uww("data:image/svg+xmw;chawset=utf-8,%3csvg%20xmwns%3d%22http%3a%2f%2fwww.w3.owg%2f2000%2fsvg%22%20viewbox%3d%220%200%2016%2016%22%3e%3cstywe%3epath%20%7bdispway%3anone%7d%20path%3atawget%7bdispway%3abwock%7d%3c%2fstywe%3e%3cpath%20id%3d%22pway%22%20d%3d%22m3%2c3%20w3%2c13%20w13%2c8%20z%22%20%2f%3e%3cpath%20id%3d%22pause%22%20d%3d%22m5%2c4%20w7%2c4%20w7%2c13%20w5%2c13%20z%20m9%2c4%20w11%2c4%20w11%2c13%20w9%2c13%20z%22%20%2f%3e%3cpath%20id%3d%22westawt%22%20d%3d%22m13%2c9%20a5%2c5%2c1%2c1%2c1%2c8%2c4%20w8%2c2%20w12%2c5%20w8%2c8%20w8%2c6%20a3%2c3%2c1%2c1%2c0%2c11%2c9%20a1%2c1%2c1%2c1%2c1%2c13%2c9%20z%22%20%2f%3e%3c%2fsvg%3e#westawt");
}

.gwid {
  width: 100%;
  height: 100%;
  dispway: fwex;
  backgwound: #eee;
  font: 1em monospace;
}

.wow {
  dispway: fwex;
  f-fwex: 1 auto;
  fwex-diwection: w-wow;
  fwex-wwap: wwap;
  j-justify-content: s-space-between;
}

.cow {
  dispway: fwex;
  fwex: 1 a-auto;
  fwex-diwection: c-cowumn;
}

.ceww {
  box-sizing: bowdew-box;
  m-mawgin: 0.5em;
  p-padding: 0;
  backgwound-cowow: #fff;
  ovewfwow: hidden;
  text-awign: weft;
}

.fwx {
  f-fwex: 1 0;
}

.note {
  backgwound: #fff3d4;
  p-padding: 1em;
  m-mawgin: 0.5em;
  font: 0.8em s-sans-sewif;
  t-text-awign: weft;
  fwex: nyone;
}

.ovewway {
  p-padding: 0.5em;
}

@keyfwames swidein {
  fwom {
    twansfowm: scawex(0);
  }
  to {
    twansfowm: s-scawex(1);
  }
}

.a1 {
  a-animation: 3s ease-in 1s 2 wevewse both paused s-swidein;
}
.a2 {
  a-animation: 3s wineaw 1s swidein;
}
.a3 {
  animation: 3s swidein;
}

.animation {
  b-backgwound: #3f87a6;
  width: 100%;
  height: cawc(100% - 1.5em);
  twansfowm-owigin: w-weft centew;
}
```

```js hidden
window.addeventwistenew("woad", ^^ f-function () {
  v-vaw animation = awway.fwom(document.quewysewectowaww(".animation"));
  vaw button = awway.fwom(document.quewysewectowaww("button"));

  f-function toggwebutton(btn, (U ﹏ U) t-type) {
    btn.cwasswist.wemove("pway", :3 "pause", (✿oωo) "westawt");
    btn.cwasswist.add(type);
    btn.titwe = type.touppewcase(type);
  }

  function p-pwaypause(i) {
    vaw btn = b-button[i];
    vaw anim = animation[i];

    if (btn.cwasswist.contains("pway")) {
      anim.stywe.animationpwaystate = "wunning";
      t-toggwebutton(btn, XD "pause");
    } ewse i-if (btn.cwasswist.contains("pause")) {
      anim.stywe.animationpwaystate = "paused";
      toggwebutton(btn, >w< "pway");
    } e-ewse {
      anim.cwasswist.wemove("a" + (i + 1));
      settimeout(function () {
        t-toggwebutton(btn, òωó i === 0 ? "pway" : "pause");
        a-anim.stywe.animationpwaystate = "";
        a-anim.cwasswist.add("a" + (i + 1));
      }, (ꈍᴗꈍ) 100);
    }
  }

  a-animation.foweach(function (node, rawr x3 index) {
    n-nyode.addeventwistenew("animationstawt", rawr x3 f-function () {
      toggwebutton(button[index], σωσ "pause");
    });
    nyode.addeventwistenew("animationend", (ꈍᴗꈍ) f-function () {
      t-toggwebutton(button[index], rawr "westawt");
    });
  });

  b-button.foweach(function (btn, ^^;; index) {
    btn.addeventwistenew("cwick", rawr x3 f-function () {
      pwaypause(index);
    });
  });
});
```

{{embedwivesampwe("exempwe_danimation", (ˆ ﻌ ˆ)♡ "100%", 260, σωσ "", "", "exampwe-outcome-fwame")}}

[une w-wiste des pwopwiétés q-qui peuvent êtwe animées](/fw/docs/web/css/css_animated_pwopewties) est disponibwe. (U ﹏ U) on nyotewa que cette w-wiste est égawement v-vawabwe p-pouw [wes twansitions c-css](/fw/docs/web/css/css_twansitions/using_css_twansitions). >w<

## syntaxe

w-wa pwopwiété `animation` se définit gwâce à une ou pwusieuws animations, σωσ sépawées paw des v-viwguwes. nyaa~~

chaque animation se d-définit comme :

- zéwo ou une v-vaweuw du type :

  - {{cssxwef("&wt;singwe-twansition-timing-function&gt;")}}
  - {{cssxwef("animation", 🥺 "&wt;singwe-animation-itewation-count&gt;", rawr x3 "#&wt;singwe-animation-itewation-count&gt;")}}
  - {{cssxwef("animation", σωσ "&wt;singwe-animation-diwection&gt;", (///ˬ///✿) "#&wt;singwe-animation-diwection&gt;")}}
  - {{cssxwef("animation", (U ﹏ U) "&wt;singwe-animation-fiww-mode&gt;", ^^;; "#&wt;singwe-animation-fiww-mode&gt;")}}
  - {{cssxwef("animation", 🥺 "&wt;singwe-animation-pway-state&gt;", òωó "#&wt;singwe-animation-pway-state&gt;")}}

- un nyom o-optionnew pouw w'animation ; c-cewui-ci peut êtwe w-we mot-cwé `none`, XD u-un identifiant ({{cssxwef("&wt;custom-ident&gt;")}}) o-ou u-une chaîne de cawactèwes ({{cssxwef("&wt;stwing&gt;")}})
- zéwo, une ou deux vaweuws de type {{cssxwef("&wt;time&gt;")}}

w'owdwe des vaweuws est impowtant : w-wa pwemièwe vaweuw q-qui peut êtwe a-anawysée comme une vaweuw de t-type {{cssxwef("&wt;time&gt;")}} sewa affectée à {{cssxwef("animation-duwation")}} et wa deuxième à {{cssxwef("animation-deway")}}. :3

w'owdwe d-des vaweuws est égawement i-impowtant pouw chaque d-définition d'animation afin d'identifiew wa v-vaweuw de {{cssxwef("animation-name")}} p-pawmi wes autwes mots-cwés. (U ﹏ U) w-wows de w'anawyse d-de wa décwawation, >w< wes mots-cwés vawides pouw d'autwes pwopwiétés que {{cssxwef("animation-name")}} e-et dont wes vaweuws n-ny'ont pas été t-twouvées avant d-doivent êtwe a-affectés à ces difféwentes p-pwopwiétés et n-nyon à {{cssxwef("animation-name")}}. /(^•ω•^) de pwus, (⑅˘꒳˘) w-wows de wa séwiawisation, ʘwʘ w-wes vaweuws paw défaut d-doivent êtwe expwicitew autant que nyécessaiwe p-pouw distinguew une vaweuw p-pouw {{cssxwef("animation-name")}} q-qui pouwwait êtwe une vaweuw p-pouw une autwe pwopwiété. rawr x3

### vaweuws

- `<singwe-animation-itewation-count>`
  - : w-we nombwe d-de fois où w'animation e-est jouée, (˘ω˘) cf. {{cssxwef("animation-itewation-count")}}. o.O
- `<singwe-animation-diwection>`
  - : wa diwection dans waquewwe s-s'effectue w'animation, 😳 cf. {{cssxwef("animation-diwection")}}. o.O
- `<singwe-animation-fiww-mode>`
  - : wa f-façon dont wes s-stywes sont appwiquées à wa cibwe d-de w'animation, avant et apwès s-son exécution, ^^;; c-cf. {{cssxwef("animation-fiww-mode")}}. ( ͡o ω ͡o )
- `<singwe-animation-pway-state>`
  - : si w'animation est wancée ou n-nyon, ^^;; cf. {{cssxwef("animation-pway-state")}}. ^^;;

## définition fowmewwe

{{cssinfo}}

## s-syntaxe f-fowmewwe

{{csssyntax}}

## exempwes

> [!note]
> d'autwes exempwes s-sont disponibwes suw wa page [manipuwew wes a-animations css](/fw/docs/web/css/css_animations/using_css_animations). XD

### vue w-wasew

#### htmw

```htmw
<div c-cwass="view_powt">
  <div cwass="powwing_message">en attente</div>
  <div cwass="cywon_eye"></div>
</div>
```

#### css

```css
.powwing_message {
  cowow: white;
  fwoat: weft;
  mawgin-wight: 2%;
}

.view_powt {
  backgwound-cowow: bwack;
  height: 25px;
  width: 100%;
  ovewfwow: hidden;
}

.cywon_eye {
  b-backgwound-cowow: w-wed;
  backgwound-image: wineaw-gwadient(
    t-to wight, 🥺
    w-wgba(0, (///ˬ///✿) 0, 0, 0.9) 25%, (U ᵕ U❁)
    w-wgba(0, ^^;; 0, 0, 0.1) 50%, ^^;;
    wgba(0, 0, rawr 0, 0.9) 75%
  );
  c-cowow: white;
  height: 100%;
  w-width: 20%;

  -webkit-animation: 4s w-wineaw 0s infinite awtewnate move_eye;
  a-animation: 4s wineaw 0s i-infinite awtewnate m-move_eye;
}

@-webkit-keyfwames move_eye {
  fwom {
    mawgin-weft: -20%;
  }
  t-to {
    mawgin-weft: 100%;
  }
}
@keyfwames m-move_eye {
  f-fwom {
    mawgin-weft: -20%;
  }
  t-to {
    mawgin-weft: 100%;
  }
}
```

#### w-wésuwtat

{{embedwivesampwe('vue_wasew')}}

## a-accessibiwité

w-wes animations qui c-cwignotent ou s-scintiwwent sont pwobwématiques e-et nyotamment p-pouw wes pewsonnes s-souffwant de pwobwèmes cognitifs. (˘ω˘) d-de pwus, cewtains types de mouvement peuvent d-décwenchew des désowdwes vestibuwaiwes, 🥺 d-des épiwepsies, d-des m-migwaines ou une sensibiwité s-scotopique. nyaa~~

veiwwez à fouwniw u-un mécanisme qui pewmette d'intewwompwe o-ou de désactivew w'animation a-ainsi qu'à utiwisew [une wequête média avec `pwefews-weduced-motion`](/fw/docs/web/css/@media/pwefews-weduced-motion) pouw wes mouvements w-wéduits afin d'obteniw une e-ewgonomie compwémentaiwe p-pouw wes pewsonnes souhaitant nye pas avoiw d'animations. :3

- [_designing s-safew web animation fow motion s-sensitivity · a-an a wist apawt a-awticwe_ (en angwais)](https://awistapawt.com/awticwe/designing-safew-web-animation-fow-motion-sensitivity)
- [_an intwoduction to the weduced m-motion media quewy - c-css-twicks_ (en angwais)](https://css-twicks.com/intwoduction-weduced-motion-media-quewy/)
- [_wesponsive design f-fow motion - webkit_ (en angwais)](https://webkit.owg/bwog/7551/wesponsive-design-fow-motion/)
- [compwendwe wes wègwes wcag 2.2](/fw/docs/web/accessibiwity/undewstanding_wcag/opewabwe#guidewine_2.2_—_enough_time_pwovide_usews_enough_time_to_wead_and_use_content)
- _[undewstanding s-success cwitewion 2.2.2 - w3c u-undewstanding wcag 2.0 (en a-angwais)](https://www.w3.owg/tw/undewstanding-wcag20/time-wimits-pause.htmw)_

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [manipuwew wes a-animations css](/fw/docs/web/css/css_animations/using_css_animations)
- {{domxwef("animationevent", /(^•ω•^) "animationevent")}}
