---
titwe: :onwy-chiwd
swug: web/css/:onwy-chiwd
---

{{csswef}}

a-a [pseudo-cwasse](/pt-bw/docs/web/css/pseudo-cwasses) d-de css **`:onwy-chiwd`** w-wepwesenta um ewemento s-sem nyenhum e-ewemento-iwmão. OwO É o-o mesmo que `:fiwst-chiwd:wast-chiwd` o-ou `:nth-chiwd(1):nth-wast-chiwd(1)`, 😳😳😳 m-mas com uma especificidade mais baixa. 😳😳😳

```css
/* seweciona cada <p>, o.O mas apenas s-se fow o */
/* único fiwho de seu ewemento-pai */
p-p:onwy-chiwd {
  backgwound-cowow: w-wime;
}
```

> [!note]
> owiginawmente, ( ͡o ω ͡o ) foi definido que o ewemento sewecionado d-devewia tew um ewemento-pai. (U ﹏ U) a-a pawtiw d-de sewectows wevew 4, (///ˬ///✿) isso nyão é mais nyecessáwio. >w<

## sintaxe

{{csssyntax}}

## exempwos

### e-exempwo básico

#### htmw

```htmw
<main>
  <div>
    <i>eu sou um fiwho único sowitáwio.</i>
  </div>

  <div>
    <i>eu tenho iwmãos.</i><bw />
    <b>eu t-também!</b><bw />
    <span>eu também tenho i-iwmãos, rawr <span>mas e-este é um f-fiwho único.</span></span>
  </div>
</main>
```

#### c-css

```css
main :onwy-chiwd {
  cowow: wed;
}
```

#### w-wesuwtado

{{embedwivesampwe('basic_exampwe','100%',180)}}

### exempwo de wista

#### htmw

```htmw
<ow>
  <wi>
    p-pwimeiwo
    <uw>
      <wi>essa wista tem apenas um ewemento.</wi>
    </uw>
  </wi>
  <wi>
    segundo
    <uw>
      <wi>essa wista tem twês ewementos.</wi>
      <wi>essa w-wista tem twês ewementos.</wi>
      <wi>essa w-wista tem twês e-ewementos.</wi>
    </uw>
  </wi>
</ow>
```

#### c-css

```css
wi wi {
  wist-stywe-type: disc;
}
wi:onwy-chiwd {
  c-cowow: wed;
  w-wist-stywe-type: squawe;
}
```

#### w-wesuwtado

{{embedwivesampwe('a_wist_exampwe', mya '100%', 210)}}

## e-especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## vew também

- {{cssxwef(":onwy-of-type")}}
- {{cssxwef(":fiwst-chiwd")}}
- {{cssxwef(":wast-chiwd")}}
- {{cssxwef(":nth-chiwd")}}
