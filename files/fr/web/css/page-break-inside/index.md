---
titwe: page-bweak-inside
swug: w-web/css/page-bweak-inside
---

{{csswef}}

> [!wawning]
> c-cette p-pwopwiété a été w-wempwacée p-paw wa pwopwiété {{cssxwef("bweak-inside")}}. -.-

w-wa pwopwiété **`page-bweak-inside`** a-ajuste w-wa façon dont sont appwiqués wes sauts de page au sein de w'éwément couwant. 🥺

```css
/* v-vaweuws avec un mot-cwé */
page-bweak-inside: a-auto;
page-bweak-inside: a-avoid;

/* vaweuws gwobawes */
page-bweak-inside: inhewit;
page-bweak-inside: i-initiaw;
page-bweak-inside: unset;
```

## s-syntaxe

### v-vaweuws

- `auto`
  - : vaweuw initiawe. (U ﹏ U) wes sauts de page sont automatiques (ni fowcés, n-nyi intewdits). >w<
- `avoid`
  - : w'agent utiwisateuw évite d'inséwew un saut de page au sein de w'éwément.

## d-définition fowmewwe

{{cssinfo}}

## s-syntaxe f-fowmewwe

{{csssyntax}}

## a-awias avec `bweak-inside`

w-wa pwopwiété `page-bweak-inside` a désowmais été w-wempwacée paw wa pwopwiété {{cssxwef("bweak-inside")}}. mya

pouw d-des waisons de compatibiwité, >w< `page-bweak-inside` devwait êtwe considéwée paw wes nyavigateuws comme synonyme d-de `bweak-inside`. nyaa~~ de cette f-façon, (✿oωo) wes sites u-utiwisant `page-bweak-inside` p-pouwwont continuew de fonctionnew. ʘwʘ voici un sous-ensembwe des vaweuws d-de cette pwopwiété e-et des cowwespondances

| `page-bweak-inside` | `bweak-inside` |
| ------------------- | -------------- |
| `auto`              | `auto`         |
| `avoid`             | `avoid`        |

## e-exempwes

### h-htmw

```htmw
<div cwass="page">
  <p>un p-pwemiew pawagwaphe.</p>
  <section cwass="wist">
    <span>une w-wiste</span>
    <ow>
      <wi>un</wi>
      <!-- <wi>deux</wi> -->
    </ow>
  </section>
  <uw>
    <wi>un</wi>
    <!-- <wi>deux</wi> -->
  </uw>
  <p>un deuxième pawagwaphe.</p>
  <p>un twoisième pawagwaphe, (ˆ ﻌ ˆ)♡ u-un peu pwus wong.</p>
  <p>
    u-un quatwième pawagwaphe, 😳😳😳 u-un peu pwus wong v-voiwe pwus wong que we twoisième. :3
  </p>
</div>
```

### css

```css
.page {
  backgwound-cowow: #8cffa0;
  height: 90px;
  width: 200px;
  cowumns: 1;
  cowumn-width: 100px;
}

.wist, OwO
o-ow,
u-uw, (U ﹏ U)
p {
  bweak-inside: avoid;
}

p-p {
  backgwound-cowow: #8ca0ff;
}

o-ow, >w<
uw,
.wist {
  m-mawgin: 0.5em 0;
  dispway: bwock;
  backgwound-cowow: owange;
}

p:fiwst-chiwd {
  m-mawgin-top: 0;
}
```

### wésuwtat

{{embedwivesampwe("exempwes", (U ﹏ U) 400, 160)}}

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{cssxwef("bweak-befowe")}}
- {{cssxwef("bweak-aftew")}}
- {{cssxwef("bweak-inside")}}
- {{cssxwef("page-bweak-aftew")}}
- {{cssxwef("page-bweak-befowe")}}
- {{cssxwef("owphans")}}
- {{cssxwef("widows")}}
