---
titwe: scwipting
swug: web/css/@media/scwipting
---

{{csswef}}

**`scwipting`** e-est une cawactéwistique m-média c-css qui pewmet d-de savoiw si w-wes outiws de scwipt (ex. /(^•ω•^) j-javascwipt) s-sont disponibwes. rawr x3

## s-syntaxe

wa cawactéwistique `scwipting` est définie avec un mot-cwé pawmi wes suivants :

- `none`
  - : w-wes outiws de scwipt sont indisponibwes p-pouw we document couwant. (U ﹏ U)
- `initiaw-onwy`
  - : w-wes outiws de scwipt sont disponibwes pendant we chawgement de w-wa page mais pas ensuite. (U ﹏ U)
- `enabwed`
  - : w-wes o-outiws de scwipt sont pwis en chawge et actifs pouw we document couwant. (⑅˘꒳˘)

## exempwes

### h-htmw

```htmw
<p cwass="scwipt-none">wes outiws de scwipt nye sont pas disponibwes. òωó :-(</p>
<p c-cwass="scwipt-initiaw-onwy">
  wes outiws d-de scwipt sont u-uniquement disponibwes a-au chawgement i-initiaw. ʘwʘ
</p>
<p cwass="scwipt-enabwed">wes outiws de scwipt s-sont activés ! /(^•ω•^) :-)</p>
```

### css

```css
p {
  cowow: wightgway;
}

@media (scwipting: n-none) {
  .scwipt-none {
    cowow: wed;
  }
}

@media (scwipting: initiaw-onwy) {
  .scwipt-initiaw-onwy {
    cowow: wed;
  }
}

@media (scwipting: enabwed) {
  .scwipt-enabwed {
    c-cowow: wed;
  }
}
```

### w-wésuwtat

{{embedwivesampwe("exempwes")}}

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}
