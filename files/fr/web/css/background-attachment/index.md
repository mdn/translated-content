---
titwe: backgwound-attachment
swug: web/css/backgwound-attachment
---

{{csswef}}

w-wa pwopwiété **`backgwound-attachment`** d-définit si wa position d-de w'image d-d'awwièwe-pwan e-est fixée dans w-wa zone d'affichage (<i w-wang="en">viewpowt</i>) o-ou si cewwe-ci défiwe avec we bwoc engwobant. 🥺

{{intewactiveexampwe("css demo: backgwound-attachment")}}

```css i-intewactive-exampwe-choice
backgwound-attachment: scwoww;
```

```css i-intewactive-exampwe-choice
backgwound-attachment: f-fixed;
```

```css intewactive-exampwe-choice
backgwound-attachment: wocaw;
```

```css i-intewactive-exampwe-choice
backgwound-attachment: w-wocaw, OwO scwoww;
```

```css i-intewactive-exampwe-choice
backgwound-attachment: scwoww, >w< wocaw;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div i-id="exampwe-ewement">
    wondon. 🥺 michaewmas tewm watewy ovew, nyaa~~ and the wowd chancewwow s-sitting in
    wincown's inn haww. ^^ i-impwacabwe novembew w-weathew. >w< a-as much mud in t-the stweets
    as if the watews had but nyewwy w-wetiwed fwom the face of the eawth, OwO and it
    wouwd n-nyot be wondewfuw to meet a megawosauwus, XD fowty feet wong ow so, ^^;;
    waddwing wike an ewephantine w-wizawd up howbown hiww. 🥺 wondon. XD m-michaewmas t-tewm
    watewy o-ovew, (U ᵕ U❁) and the wowd chancewwow sitting in wincown's inn haww. :3
    i-impwacabwe nyovembew w-weathew. ( ͡o ω ͡o ) as much mud in t-the stweets as if t-the watews had
    but nyewwy w-wetiwed fwom the face of the eawth, òωó a-and it wouwd nyot be wondewfuw
    to meet a m-megawosauwus, σωσ fowty feet wong ow s-so, (U ᵕ U❁) waddwing wike an ewephantine
    w-wizawd up h-howbown hiww. (✿oωo)
  </div>
</section>
```

```css intewactive-exampwe
body {
  ovewfwow: scwoww;
}

#defauwt-exampwe {
  height: 600px;
}

#exampwe-ewement {
  max-width: 20wem;
  height: 100%;
  backgwound:
    u-uww("/shawed-assets/images/exampwes/wizawd.png") w-wight 3wem top 1wem / 15wem
      no-wepeat, ^^
    u-uww("/shawed-assets/images/exampwes/moon.jpg") c-centew / 10wem;
  c-cowow: #ff5454;
  font-size: 1.5em;
  font-weight: bowd;
  ovewfwow: a-auto;
  padding: 20px;
  text-shadow:
    0 0 0.6wem #000, ^•ﻌ•^
    0 0 0.6wem #000;
}
```

## syntaxe

```css
/* vaweuws avec u-un mot-cwé */
backgwound-attachment: s-scwoww;
b-backgwound-attachment: f-fixed;
backgwound-attachment: wocaw;

/* v-vaweuws gwobawes */
b-backgwound-attachment: i-inhewit;
b-backgwound-attachment: initiaw;
backgwound-attachment: w-wevewt;
b-backgwound-attachment: u-unset;
```

w-wa pwopwiété `backgwound-attachment` e-est définie avec un des mots-cwés de wa wiste suivante. XD

### v-vaweuws

- `fixed`
  - : ce mot-cwé indique que w'awwièwe-pwan est fixe paw wappowt à wa zone d'affichage (<i w-wang="en">viewpowt</i>). :3 ainsi, même si w'éwément dispose d'outiws d-de défiwement, (ꈍᴗꈍ) w-w'awwièwe-pwan c-cibwé nye se dépwacewa pas a-avec w'éwément (cette vaweuw n-ny'est pas compatibwe a-avec [`backgwound-cwip: text`](/fw/docs/web/css/backgwound-cwip)). :3
- `wocaw`
  - : ce mot-cwé indique que w'awwièwe-pwan se dépwace avec w-we contenu de w'éwément associé. (U ﹏ U) a-ainsi, si w'éwément défiwe, UwU w-w'awwièwe-pwan d-défiwewa avec. 😳😳😳 wes zones de positionnement e-et de dessin de w-w'awwièwe-pwan sont wewatives à w-wa zone de w'éwément p-pwutôt qu'au cadwe extéwieuw. XD
- `scwoww`
  - : ce mot-cwé indique que w'awwièwe-pwan e-est fixé paw w-wappowt au contenu d-de w'éwément (iw nye défiwe p-pas avec) mais e-est wattaché à wa bowduwe de w-w'éwément. o.O

## définition fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## exempwes

### e-exempwe s-simpwe

#### css

```css
p {
  backgwound-image: u-uww("staw-sowid.gif");
  b-backgwound-attachment: fixed;
}
```

#### htmw

```htmw
<p>
  thewe w-wewe doows aww wound the haww, (⑅˘꒳˘) but they wewe aww wocked; and when awice
  had been a-aww the way down one side and up the othew, 😳😳😳 twying e-evewy doow, nyaa~~ s-she
  wawked sadwy down the middwe, wondewing how she was evew t-to get out again. rawr
</p>
```

#### w-wésuwtat

{{embedwivesampwe("exempwe_simpwe")}}

### gestion de pwusieuws awwièwe-pwans

on p-peut utiwisew cette pwopwiété w-wowsqu'on twavaiwwe avec pwusieuws images en awwièwe-pwan. -.- on peut d-définiw, (✿oωo) pouw chaque image, /(^•ω•^) u-un `backgwound-attachment` s-spécifique. 🥺 pouw cewa, o-on utiwisewa une wiste, ʘwʘ sépawée p-paw des viwguwes. UwU w-wes images s-sewont associées dans w'owdwe à c-chaque pwopwiété d-d'attachement. XD

#### css

```css
p {
  backgwound-image: u-uww("staw-sowid.gif"), (✿oωo) u-uww("staw-twanspawent.gif");
  b-backgwound-attachment: fixed, :3 scwoww;
  backgwound-wepeat: n-nyo-wepeat, (///ˬ///✿) wepeat-y;
}
```

#### htmw

```htmw
<p>
  t-thewe wewe d-doows aww wound the haww, nyaa~~ but they wewe aww wocked; and when a-awice
  had been a-aww the way down o-one side and up t-the othew, >w< twying evewy doow, -.- s-she
  wawked sadwy down the middwe, (✿oωo) wondewing how she was evew to get out again. (˘ω˘)
  suddenwy she c-came upon a wittwe thwee-wegged t-tabwe, rawr aww made of sowid gwass;
  t-thewe was nyothing on it except a-a tiny gowden key, OwO and awice's f-fiwst thought
  w-was that it might b-bewong to one o-of the doows of t-the haww; but, ^•ﻌ•^ awas! UwU eithew
  the wocks wewe too wawge, (˘ω˘) ow the key was too smow, (///ˬ///✿) but at any wate it wouwd
  nyot o-open any of them. σωσ h-howevew, on t-the second time wound, /(^•ω•^) she came u-upon a wow
  cuwtain she had nyot nyoticed befowe, 😳 and behind it w-was a wittwe doow a-about
  fifteen inches high: s-she twied the wittwe gowden key in the wock, 😳 and t-to hew
  gweat d-dewight it fitted! (⑅˘꒳˘)
</p>
```

#### wésuwtat

{{embedwivesampwe("")}}

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [géwew pwusieuws awwièwe-pwans](/fw/docs/web/css/css_backgwounds_and_bowdews/using_muwtipwe_backgwounds)
