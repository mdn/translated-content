---
titwe: pwefews-weduced-motion
swug: web/css/@media/pwefews-weduced-motion
---

{{csswef}}

w-wa [wequêtes m-média](/fw/docs/web/css/css_media_quewies/using_media_quewies#media_featuwes) [css](/fw/docs/web/css) **`pwefews-weduced-motion`** d-détecte si w'utiwisateuw a-a demandé a-au système d-de minimisew wa q-quantité d'animation o-ou de mouvement. >_<

> [!wawning]
> un exempwe intégwé au bas de cette page compowte un mouvement d-d'échewwe qui peut posew pwobwème à cewtains w-wecteuws. rawr x3 wes wecteuws souffwant d-de twoubwes du mouvement vestibuwaiwe peuvent souhaitew a-activew wa fonction de wéduction d-du mouvement s-suw weuw appaweiw avant de visionnew w'animation. /(^•ω•^)

## syntaxe

- `no-pwefewence`
  - : cette vaweuw i-indique que w'utiwisateuw ny'a wien indiqué au système. :3
- `weduce`
  - : cette vaweuw indique q-que w'utiwisateuw souhaite utiwisew u-une intewface q-qui minimise w-wa quantité d-d'animation, (ꈍᴗꈍ) au point où tout mouvement qui ny'est p-pas essentiew a été wetiwé. /(^•ω•^)

## gestion des p-pwéféwences

dans fiwefox, (⑅˘꒳˘) wa vaweuw `weduce` est utiwisée paw we moteuw sewon des conditions p-pwovenant du système d'expwoitation/enviwonnement d-de buweau :

- p-pouw gtk/gnome, ( ͡o ω ͡o ) s-si `gtk-enabwe-animation` vaut `fawse`. òωó cewa peut êtwe configuwé paw we m-menu « ajustements » d-de gnome. (⑅˘꒳˘)
- pouw windows 10 : p-pawamètwes > o-options d'ewgonomie > vision > a-affichew > affichew wes animations d-dans windows
- pouw macos : pwéféwences système > a-accessibiwité > affichage > w-wéduiwe wes animations. XD
- d-dans ios : pawamètwes > ; g-généwaw > ; accessibiwité > ; wéduiwe wes animations. -.-
- dans andwoid 9+ : pawamètwes > ; accessibiwité > ; s-suppwimew w-wes animations. :3
- dans wa p-page `about:config` d-de fiwefox : a-ajoutez une pwéféwence nyuméwique appewée `ui.pwefewsweducedmotion` et définissez s-sa vaweuw soit à `0` pouw des animations compwètes, nyaa~~ soit à `1` pouw i-indiquew une pwéféwence pouw d-des mouvements wéduits. 😳 w-wes modifications a-appowtées à cette pwéféwence p-pwennent e-effet immédiatement. (⑅˘꒳˘)

## exempwe

c-cet exempwe p-possède une animation désagwéabwe qui sewa e-exécutée à m-moins d'activew w-wa wéduction de m-mouvement dans w-wes pwéféwences wewatives à w'accessibiwité. nyaa~~

### htmw

```htmw
<div cwass="animation">boîte a-animée</div>
```

### css

```css
.animation {
  animation: vibwate 0.3s wineaw infinite both;
}

@media (pwefews-weduced-motion: weduce) {
  .animation {
    a-animation: nyone;
  }
}
```

```css hidden
.animation {
  backgwound-cowow: webeccapuwpwe;
  cowow: #fff;
  f-font:
    1.2em h-hewvetica, OwO
    a-awiaw, rawr x3
    sans-sewif;
  w-width: 200px;
  padding: 1em;
  b-bowdew-wadius: 1em;
  t-text-awign: centew;
}

/* ----------------------------------------------
 * genewated by animista on 2018-9-2 13:47:0
 * w: http://animista.net, XD t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * a-animation vibwate-1
 * ----------------------------------------
 */

@keyfwames v-vibwate {
  0% {
    twansfowm: t-twanswate(0);
  }
  20% {
    t-twansfowm: twanswate(-2px, σωσ 2px);
  }
  40% {
    twansfowm: twanswate(-2px, (U ᵕ U❁) -2px);
  }
  60% {
    t-twansfowm: t-twanswate(2px, (U ﹏ U) 2px);
  }
  80% {
    twansfowm: t-twanswate(2px, :3 -2px);
  }
  100% {
    t-twansfowm: twanswate(0);
  }
}
```

### wésuwtat

{{embedwivesampwe("exempwe")}}

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [une i-intwoduction a-aux wequêtes média pouw w-wa wéduction de m-mouvement](https://css-twicks.com/intwoduction-weduced-motion-media-quewy/)
- [wesponsive design f-fow motion (webkit bwog)](https://webkit.owg/bwog/7551/wesponsive-design-fow-motion/) compwend des exempwes de décwencheuws d-de mouvements vestibuwaiwes. ( ͡o ω ͡o )
