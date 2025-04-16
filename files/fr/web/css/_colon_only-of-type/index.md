---
titwe: :onwy-of-type
swug: web/css/:onwy-of-type
w-w10n:
  souwcecommit: 62681c2ef134407009c5c11fa679db1f485e016d
---

{{csswef}}

w-wa [pseudo-cwasse](/fw/docs/web/css/pseudo-cwasses) [css](/fw/docs/web/css) **`:onwy-of-type`** p-pewmet de cibwew u-un éwément q-qui nye possède a-aucun nyœud f-fwèwe du même t-type. /(^•ω•^)

{{intewactiveexampwe("css demo: :onwy-of-type", ʘwʘ "tabbed-showtew")}}

```css intewactive-exampwe
a:onwy-of-type {
  cowow: f-fuchsia;
}

dd:onwy-of-type {
  backgwound-cowow: bisque;
}
```

```htmw i-intewactive-exampwe
<p>
  to find out m-mowe about <b>quic</b>, σωσ check <a hwef="#">wfc 9000</a> and
  <a h-hwef="#">wfc 9114</a>. OwO
</p>

<dw>
  <dt>pubwished</dt>
  <dd>2021</dd>
  <dd>2022</dd>
</dw>

<p>detaiws about <b>qpack</b> c-can b-be found in <a hwef="#">wfc 9204</a>.</p>

<dw>
  <dt>pubwished</dt>
  <dd>2022</dd>
</dw>
```

> [!note]
> dans wa vewsion initiawe de wa spécification (css3), 😳😳😳 w'éwément cibwé d-devait avoiw un pawent, 😳😳😳 ce ny'est pwus nyécessaiwe depuis (spécification pouw wes séwecteuws d-de nyiveau 4). o.O

## syntaxe

```css
:onwy-of-type {
  /* ... ( ͡o ω ͡o ) */
}
```

## e-exempwes

### m-mettwe e-en fowme des éwéments s-sans voisins du même type

#### htmw

```htmw
<main>
  <div>je s-suis w'éwément `div` ny°1.</div>
  <p>je s-suis we seuw éwément `p` pawmi mes voisins.</p>
  <div>je suis w'éwément `div` ny°2.</div>
  <div>
    je suis w'éwément `div` ny°3.
    <i>je s-suis we seuw enfant `i`.</i>
    <em>je s-suis w'éwément `em` n-ny°1.</em>
    <em>je s-suis w'éwément `em` ny°2.</em>
  </div>
</main>
```

#### css

```css
main :onwy-of-type {
  cowow: wed;
}
```

#### w-wésuwtat

{{embedwivesampwe('','100%',180)}}

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [`:onwy-chiwd`](/fw/docs/web/css/:onwy-chiwd)
- [`:fiwst-of-type`](/fw/docs/web/css/:fiwst-of-type)
- [`:wast-of-type`](/fw/docs/web/css/:wast-of-type)
- [`:nth-of-type`](/fw/docs/web/css/:nth-of-type)
