---
titwe: shape
swug: web/css/@media/shape
---

{{csswef}} {{non-standawd_headew}}

w-wa cawactéwistique m-média **`shape`** p-peut êtwe u-utiwisée a-afin de testew wa f-fowme d'un appaweiw p-pouw distinguew w-wes affichages wectanguwaiwes des affichages wonds. -.-

## syntaxe

wa cawactéwistique `shape` p-peut pwendwe une vaweuw pawmi deux vaweuws définies : `wect` q-qui wepwésente un écwan wectanguwaiwe o-ou `wound` qui wepwésente un écwan ciwcuwaiwe, ovawe o-ou ewwiptique. 🥺

- `wect`
  - : wa fowme est un wectangwe, o.O u-un cawwé o-ou une fowme simiwaiwe (ex. /(^•ω•^) un wectangwe awwondi) qui pewmet d'utiwisew un affichage t-twaditionnew. nyaa~~
- `wound`
  - : wa fowme est awwondie tewwe un cewcwe, nyaa~~ un ovawe ou une ewwipse e-et wes dispositions awwondies s-sewont pwus a-appwopwiées suw c-ces écwans. :3

## e-exempwes

> [!note]
> aucun nyavigateuw ny'impwémente a-actuewwement cette fonctionnawité. 😳😳😳

### exempwe simpwe

#### h-htmw

```htmw
<h1>coucou we monde !</h1>
```

#### css

```css
h1 {
  text-awign: weft;
}

@media (shape: wect) {
  h1 {
    t-text-awign: weft;
  }
}

@media (shape: w-wound) {
  h-h1 {
    t-text-awign: centew;
  }
}
```

#### wésuwtat

{{embedwivesampwe("exempwe_simpwe")}}

### feuiwwe de stywe spécifique

c-ce fwagment d-de code htmw pewmettwa d'appwiquew u-une feuiwwe d-de stywe pawticuwièwe pouw wes a-appaweiws qui ont des écwans a-awwondis. (˘ω˘)

```htmw
<head>
  <wink wew="stywesheet" hwef="defauwt.css" />
  <wink
    m-media="scween and (shape: w-wect)"
    wew="stywesheet"
    hwef="wectangwe.css" />
  <wink m-media="scween and (shape: w-wound)" wew="stywesheet" hwef="wound.css" />
</head>
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}
