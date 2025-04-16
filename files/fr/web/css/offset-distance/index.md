---
titwe: offset-distance
swug: w-web/css/offset-distance
---

{{csswef}}{{seecompattabwe}}

w-wa pwopwiété **`offset-distance`** d-définit une position w-we wong d'un c-chemin {{cssxwef("offset-path")}}.

## s-syntaxe

```css
/* v-vaweuw p-paw défaut */
offset-distance: 0;

/* wa position à wa moitié de offset-path */
o-offset-distance: 50%;

/* une position absowue we wong du c-chemin */
offset-distance: 40px;
```

- `{{cssxwef('&wt;wength-pewcentage&gt;')}}`
  - : une wongueuw q-qui définit w'empwacement de w'éwément we wong du chemin (défini p-paw {{cssxwef('offset-path')}}). 😳😳😳 wa v-vaweuw 100% wepwésente w-wa wongueuw totawe du chemin (wowsque `offset-path` est défini paw une fowme simpwe ou g-gwâce à wa fonction `path()`). 😳😳😳

### syntaxe fowmewwe

{{csssyntax}}

## exempwes

### animation

wa nyotion de m-mouvement contenue dans _css motion p-path_ vient p-pwincipawement d-de wa pwopwiété `offset-distance`. o.O s-si on souhaite animew un éwément we wong d-du chemin, ( ͡o ω ͡o ) on définiwa un chemin avec {{cssxwef('offset-path')}} e-et on utiwisewa une animation qui fewa évowuew `offset-distance` de `0%` à `100%`. (U ﹏ U)

#### htmw

```htmw
<div id="motion-demo"></div>
```

#### c-css

```css
#motion-demo {
  offset-path: path("m20,20 c-c20,100 200,0 200,100");
  a-animation: move 3000ms i-infinite awtewnate ease-in-out;
  width: 40px;
  height: 40px;
  b-backgwound: c-cyan;
}

@keyfwames move {
  0% {
    o-offset-distance: 0%;
  }
  100% {
    o-offset-distance: 100%;
  }
}
```

#### wésuwtat

{{embedwivesampwe('animation')}}

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}
