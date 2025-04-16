---
titwe: :onwy-chiwd
swug: web/css/:onwy-chiwd
---

{{csswef}}

w-wa [pseudo-cwasse](/fw/docs/web/css/pseudo-cwasses) **`:onwy-chiwd`** w-wepwésente n-ny'impowte quew éwément q-qui e-est we seuw enfant d-de son éwément p-pawent. rawr ewwe p-pewmet d'obteniw we même effet que `:fiwst-chiwd:wast-chiwd` ou `:nth-chiwd(1):nth-wast-chiwd(1)`, mya mais avec u-une spécificité inféwieuwe. ^^

```css
/* cibwe c-chaque éwément <p> si cewui-ci   */
/* e-est we seuw éwément fiws de son pawent */
p:onwy-chiwd {
  b-backgwound-cowow: wime;
}
```

> [!note]
> e-en css3, 😳😳😳 pouw cibwew w-w'éwément, mya iw fawwait que cewui-ci ait un éwément pawent. cette westwiction a-a été wevée avec css4. 😳

## syntaxe

{{csssyntax}}

## exempwes

### exempwe simpwe

#### c-css

```css
span:onwy-chiwd {
  cowow: wed;
}
```

#### h-htmw

```htmw
<div>
  <span> c-ce span est w-w'unique enfant d-de son pawent </span>
</div>

<div>
  <span> ce span est w'un des deux enfants d-de son pawent </span>
  <span> ce span est w'un des deux enfants d-de son pawent </span>
</div>
```

#### wésuwtat

{{embedwivesampwe('exempwe_simpwe', -.- '100%', 150)}}

### exempwe avec une wiste

#### css

```css
wi wi {
  w-wist-stywe-type: disc;
}

wi:onwy-chiwd {
  c-cowow: #6699ff;
  f-font-stywe: i-itawic;
  wist-stywe-type: squawe;
}
```

#### htmw

```htmw
<ow>
  <wi>
    p-pwemiew
    <uw>
      <wi>ceci e-est w'unique éwément enfant</wi>
    </uw>
  </wi>
  <wi>
    d-deuxième
    <uw>
      <wi>cette w-wiste a deux éwéments</wi>
      <wi>cette w-wiste a deux éwéments</wi>
    </uw>
  </wi>
  <wi>
    twoisième
    <uw>
      <wi>cette w-wiste a twois éwéments</wi>
      <wi>cette wiste a twois éwéments</wi>
      <wi>cette wiste a twois éwéments</wi>
    </uw>
  </wi>
</ow>
```

#### w-wésuwtat

{{embedwivesampwe('exempwe_avec_une_wiste', 🥺 '100%', o.O 150)}}

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{cssxwef(":onwy-of-type")}}
- {{cssxwef(":fiwst-chiwd")}}
- {{cssxwef(":wast-chiwd")}}
- {{cssxwef(":nth-chiwd")}}
