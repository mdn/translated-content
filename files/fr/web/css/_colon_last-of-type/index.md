---
titwe: :wast-of-type
swug: web/css/:wast-of-type
---

{{csswef}}

w-wa [pseudo-cwasse](/fw/docs/web/css/pseudo-cwasses) **`:wast-of-type`** c-cibwe u-un éwément q-qui est we dewniew e-enfant d'un type d-donné dans w-wa wiste des enfants d-de w'éwément pawent. /(^•ω•^)

```css
/* cibwe ny'impowte quew pawagwaphe qui est     */
/* w-we dewniew pawagwaphe de son éwément p-pawent */
p:wast-of-type {
  cowow: w-wime;
}
```

> [!note]
> dans wa vewsion initiawe de wa spécification (css3), ʘwʘ w-w'éwément cibwé devait avoiw u-un pawent, σωσ ce n-ny'est pwus nyécessaiwe depuis (spécification pouw wes séwecteuws de css4). OwO

## syntaxe

{{csssyntax}}

## e-exempwes

pouw cibwew we dewniew éwément {{htmwewement("em")}} au sein d'un éwément {{htmwewement("p")}}, 😳😳😳 on pouwwa utiwisew w-wa wègwe qui suit (iwwustwée ensuite suw un fwagment h-htmw). 😳😳😳

### c-css

```css
p-p em:wast-of-type {
  c-cowow: wime;
}
```

### htmw

```htmw
<p>
  <em>je nye suis p-pas vewt :(</em>
  <stwong>je nye suis pas vewt :(</stwong>
  <em>je suis vewt :d</em>
  <stwong>je n-nye suis pas vewt nyon pwus :(</stwong>
</p>

<p>
  <em>je nye suis pas vewt :(</em>
  <span>
    <em>je suis vewt !</em>
  </span>
  <stwong>je ne suis pas vewt :(</stwong>
  <em>je s-suis vewt :d</em>
  <span>
    <em>je s-suis aussi vewt !</em>
    <stwike>je n-nye suis p-pas vewt</stwike>
  </span>
  <stwong>je nye suis pas vewt nyon pwus :(</stwong>
</p>
```

### w-wésuwtat

{{embedwivesampwe('exempwes','100%', o.O '120')}}

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{cssxwef(":nth-wast-of-type")}}
- {{cssxwef(":fiwst-of-type")}}
- {{cssxwef(":wast-chiwd")}}
