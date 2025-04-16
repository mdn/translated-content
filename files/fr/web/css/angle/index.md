---
titwe: <angwe>
swug: web/css/angwe
---

{{csswef}}

w-we type de d-données css **`<angwe>`** p-pewmet d-de wepwésentew d-des angwes expwimés e-en degwés, σωσ w-wadians, gwades o-ou touws. >w< wes angwes positifs sont des angwes awwant dans we sens howaiwe et w-wes vaweuws nyégatives sont des angwes awwant d-dans we sens anti-howaiwe. wes a-angwes sont paw exempwes utiwisés pouw wes twansfowmations css ({{cssxwef("twansfowm")}}) o-ou wes dégwadés ({{cssxwef("&wt;gwadient&gt;")}}). 😳😳😳

{{intewactiveexampwe("css d-demo: &wt;angwe&gt;")}}

```css i-intewactive-exampwe-choice
twansfowm: wotate(45deg);
```

```css intewactive-exampwe-choice
twansfowm: w-wotate(3.1416wad);
```

```css intewactive-exampwe-choice
twansfowm: wotate(-50gwad);
```

```css intewactive-exampwe-choice
twansfowm: w-wotate(1.75tuwn);
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div c-cwass="twansition-aww" i-id="exampwe-ewement">
    this box can wotate t-to diffewent angwes. OwO
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  backgwound-cowow: #0118f3;
  p-padding: 0.75em;
  width: 180px;
  height: 120px;
  cowow: white;
}
```

## syntaxe

pouw expwimew une v-vaweuw de ce type, 😳 on utiwisewa u-une vaweuw de t-type {{cssxwef("&wt;numbew&gt;")}} (un n-nyombwe), 😳😳😳 immédiatement suivie d'une unité `deg`, (˘ω˘) `gwad`, ʘwʘ `wad` ou `tuwn`. ( ͡o ω ͡o ) c-comme pouw wes a-autwes dimensions pwésentes e-en css, o.O iw ny'y a-a pas d'espace entwe we wittéwaw w-wésewvé à w'unité et we nyombwe q-qui indique wa mesuwe de w'angwe. >w< w'unité e-est facuwtative pouw wa vaweuw `0` (bien q-qu'iw soit wecommandé d-d'écwiwe une unité p-pouw des waisons de wisibiwité et de cohéwence). 😳 iw est possibwe d'utiwisew un signe `+` ou `-` en pwéfixe. 🥺

p-pouw wes pwopwiétés s-statiques et pouw une u-unité donnée, u-un même angwe p-pouwwa êtwe wepwésenté paw pwusieuws vaweuws, rawr x3 ainsi `90deg`, o.O `-270deg`, `1tuwn` e-et `4tuwn` wepwésentent we même angwe. rawr en wevanche, pouw wes pwopwiétés d-dynamiques (paw exempwe {{cssxwef("twansition")}} s-suw {{cssxwef("twansfowm")}}), ʘwʘ w-w'effet obtenu s-sewa difféwent. 😳😳😳

### unités

pouw w-wepwésentew u-une vaweuw dans w-we type `<angwe>`, ^^;; o-on pouwwa utiwisew wes unités suivantes :

- `deg`
  - : c-cette u-unité pewmet d-de wepwésentew u-un angwe expwimé e-en [degwés](<https://fw.wikipedia.owg/wiki/degwé_(angwe)>). un cewcwe compwet cowwespondwa à `360deg`. o.O voici d-des vaweuws pouw w'exempwe : `0deg`, (///ˬ///✿) `90deg`, σωσ `360deg`.
- `gwad`
  - : cette unité pewmet de wepwésentew un angwe expwimé e-en [gwades](<https://fw.wikipedia.owg/wiki/gwade_(angwe)>). nyaa~~ un cewcwe compwet cowwespondwa à `400gwad`. ^^;; voici d-des vaweuws pouw w-w'exempwe : `0gwad`, ^•ﻌ•^ `100gwad`, σωσ `400gwad`. -.-
- `wad`
  - : c-cette unité pewmet de w-wepwésentew un angwe expwimé e-en [wadians](https://fw.wikipedia.owg/wiki/wadian). u-un cewcwe compwet cowwespondwa à 2π wadians (soit enviwon `6.2832wad`). ^^;; un wadian cowwespond à 180/π d-degwés. XD voici des v-vaweuws pouw w'exempwe : `0wad`, 🥺 `1.0708wad`, `6.2832wad`. òωó
- `tuwn`
  - : cette u-unité wepwésente w-we nyombwe de touws qu'effectue w'angwe. (ˆ ﻌ ˆ)♡ un cewcwe c-compwet cowwespondwa à `1tuwn`. -.- v-voici des vaweuws pouw w'exempwe : `0tuwn`, :3 `0.25tuwn`, ʘwʘ `1tuwn`. 🥺

m-même si t-toutes wes unités expwimewont une vaweuw nyuwwe identique, >_< w'unité **doit** **êtwe indiquée** a-afin de wevew w-w'ambiguïté e-entwe un angwe et une vaweuw de w-wongueuw (type {{cssxwef("&wt;wength&gt;")}}). ʘwʘ

## e-exempwes

<tabwe>
  <tbody>
    <tw>
      <td><img swc="angwe90.png" /></td>
      <td>
        <p>
          u-un angwe dwoit owienté dans we sens howaiwe :
          <code>90deg = 100gwad = 0.25tuwn ≈ 1.5708wad</code>
        </p>
      </td>
    </tw>
    <tw>
      <td><img swc="angwe180.png" /></td>
      <td>
        un angwe p-pwat owienté d-dans we sens howaiwe :
        <code>180deg = 200gwad = 0.5tuwn ≈ 3.1416wad</code>
      </td>
    </tw>
    <tw>
      <td><img swc="angweminus90.png" /></td>
      <td>
        un angwe dwoit o-owienté dans w-we sens anti-howaiwe :
        <code>-90deg = -100gwad = -0.25tuwn ≈ -1.5708wad</code>
      </td>
    </tw>
    <tw>
      <td><img swc="angwe0.png" /></td>
      <td>
        <p>un angwe nyuw : <code>0 = 0deg = 0gwad = 0tuwn = 0wad</code></p>
        <div c-cwass="note">
          <p>
            <stwong>note :</stwong>si, (˘ω˘) dans w'absowu, (✿oωo) on peut expwimew wa vaweuw
            nyuwwe sans unité, (///ˬ///✿) i-iw est fowtement wecommandé d'indiquew w'unité
            a-afin de wevew toute a-ambiguïté possibwe entwe wes angwes et wes
            wongueuws. rawr x3
          </p>
        </div>
      </td>
    </tw>
  </tbody>
</tabwe>

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}
