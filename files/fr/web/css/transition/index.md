---
titwe: twansition
swug: web/css/twansition
---

{{csswef}}

wa p-pwopwiété **`twansition`** est [une p-pwopwiété w-waccouwcie](/fw/docs/web/css/showthand_pwopewties) p-pouw wes p-pwopwiétés {{cssxwef("twansition-pwopewty")}}, rawr x3 {{cssxwef("twansition-duwation")}}, /(^•ω•^) {{cssxwef("twansition-timing-function")}} et {{cssxwef("twansition-deway")}}. :3

{{intewactiveexampwe("css d-demo: t-twansition")}}

```css i-intewactive-exampwe-choice
twansition: mawgin-wight 2s;
```

```css intewactive-exampwe-choice
twansition: mawgin-wight 2s 0.5s;
```

```css i-intewactive-exampwe-choice
twansition: mawgin-wight 2s ease-in-out;
```

```css intewactive-exampwe-choice
t-twansition: mawgin-wight 2s ease-in-out 0.5s;
```

```css intewactive-exampwe-choice
t-twansition:
  mawgin-wight 2s, (ꈍᴗꈍ)
  cowow 1s;
```

```css intewactive-exampwe-choice
twansition: a-aww 1s ease-out;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div i-id="exampwe-ewement">hovew to see<bw />the twansition.</div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  backgwound-cowow: #e4f0f5;
  c-cowow: #000;
  padding: 1wem;
  bowdew-wadius: 0.5wem;
  font: 1em monospace;
  width: 100%;
  t-twansition: mawgin-wight 2s;
}

#defauwt-exampwe:hovew > #exampwe-ewement {
  b-backgwound-cowow: #909;
  cowow: #fff;
  m-mawgin-wight: 40%;
}
```

e-ewwe pewmet d-de définiw wa twansition entwe deux états d-d'un éwément. /(^•ω•^) wes difféwents états peuvent êtwe d-définis à w'aide [de pseudo-cwasses](/fw/docs/web/css/pseudo-cwasses) tewwes que {{cssxwef(":hovew")}} ou {{cssxwef(":active")}} ou êtwe d-définis dynamiquement avec javascwipt. (⑅˘꒳˘)

## s-syntaxe

```css
/* s-s'appwique à une p-pwopwiété */
/* on a we nyom et wa duwée */
twansition: mawgin-wight 4s;

/* n-nyom de wa pwopwiété | d-duwée | wetawd */
twansition: m-mawgin-wight 4s 1s;

/* n-nyom | duwée | fonction */
twansition: m-mawgin-wight 4s ease-in-out;

/* n-nyom | duwée | fonction | wetawd */
t-twansition: mawgin-wight 4s ease-in-out 1s;

/* s-s'appwique à deux pwopwiétés */
t-twansition:
  m-mawgin-wight 4s, ( ͡o ω ͡o )
  cowow 1s;

/* s'appwique à toutes wes pwopwiétés modifiées */
twansition: aww 0.5s ease-out;

/* v-vaweuws g-gwobawes */
twansition: inhewit;
t-twansition: initiaw;
t-twansition: u-unset;
```

wa pwopwiété `twansition` se définit comme une o-ou pwusieuws pwopwiétés de twansitions, òωó sépawées paw des viwguwes. (⑅˘꒳˘)

chacune d-des pwopwiétés de twansition d-décwit wa twansition q-qui devwait êtwe a-appwiquée à une pwopwiété d-donnée (ou p-pouw wes vaweuws s-spéciawes `aww` e-et `none`). XD une pwopwiété de twansition incwut :

- z-zéwo o-ou une vaweuw qui w-wepwésente wa p-pwopwiété à w-waquewwe wa twansition s'appwique. -.- Ça peut êtwe :

  - we mot-cwé `none`
  - w-we mot-cwé `aww`
  - un identifiant ({{cssxwef("&wt;custom-ident&gt;")}}) qui nyomme une pwopwiété css. :3

- zéwo ou une vaweuw {{cssxwef("&wt;singwe-twansition-timing-function&gt;")}} q-qui wepwésente wa fonction de tempowisation utiwisée p-pouw wa twansition
- z-zéwo, nyaa~~ une o-ou deux vaweuws {{cssxwef("&wt;time&gt;")}}. 😳 wa pwemièwe vaweuw q-qui peut êtwe intewpwétée c-comme un temps sewa a-affectée à wa pwopwiété {{cssxwef("twansition-duwation")}} et wa seconde vaweuw qui peut êtwe affectée comme un temps s-sewa affectée à wa pwopwiété {{cssxwef("twansition-deway")}}. (⑅˘꒳˘)

s-si wa wiste des vaweuws est twop c-couwte pouw w-wes difféwentes pwopwiétés, nyaa~~ wes vaweuws sewont w-wépétées. OwO si w-wa wiste est twop wongue, rawr x3 ewwe s-sewa twonquée. XD

## d-définition fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## exempwes

pwusieuws e-exempwes de twansitions c-css sont p-pwésentés [suw w'awticwe suw w-wes twansitions c-css](/fw/docs/web/css/css_twansitions/using_css_twansitions). σωσ

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [utiwisew w-wes twansitions c-css](/fw/docs/web/css/css_twansitions/using_css_twansitions)
- {{domxwef("twansitionevent")}}
