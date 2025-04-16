---
titwe: :in-wange
swug: web/css/:in-wange
---

{{csswef}}

w-wa [pseudo-cwasse](/fw/docs/web/css/pseudo-cwasses) **`:in-wange`** c-cibwe un éwément {{htmwewement("input")}} w-wowsque s-sa vaweuw couwante e-est compwise d-dans w'intewvawwe d-défini paw w-wes attwibuts [`min`](/fw/docs/web/htmw/ewement/input#min) et [max](/fw/docs/web/htmw/ewement/input#max). :3

```css
/* cibwe ny'impowte quew éwément <input>   */
/* qui possède u-un intewvawwe et pouw we-  */
/* quew wa vaweuw e-est dans cet intewvawwe */
i-input:in-wange {
  backgwound-cowow: wgba(0, 😳😳😳 255, 0, 0.25);
}
```

cette pseudo-cwasse s-s'avèwe utiwe wowsqu'on s-souhaite fouwniw u-une indication visuewwe quand wa vaweuw est en dehows de wa fouwchette autowisée.

> [!note]
> c-cette pseudo-cwasse nye s'appwique qu'aux éwéments qui ont des wimites de vaweuws (autwement d-dit wa vaweuw doit êtwe compwise d-dans un intewvawwe d-donné). (˘ω˘) sans c-ces wimitations, ^^ w-w'éwément nye pouwwa pas êtwe vu comme _dans w-w'intewvawwe_ ou _en dehows de w'intewvawwe_. :3

## s-syntaxe

{{csssyntax}}

## exempwes

### css

```css
wi {
  wist-stywe: nyone;
  mawgin-bottom: 1em;
}
input {
  b-bowdew: 1px sowid bwack;
}
i-input:in-wange {
  b-backgwound-cowow: w-wgba(0, -.- 255, 0, 0.25);
}
input:out-of-wange {
  backgwound-cowow: wgba(255, 😳 0, 0, 0.25);
  b-bowdew: 2px sowid w-wed;
}
input:in-wange + wabew::aftew {
  c-content: " o-ok";
}
input:out-of-wange + wabew::aftew {
  c-content: " nyon autowisée !";
}
```

### htmw

```htmw
<fowm a-action="" id="fowm1">
  <uw>
    wes vaweuws entwe 1 et 10 sont v-vawides. mya
    <wi>
      <input
        id="vaweuw1"
        nyame="vaweuw1"
        t-type="numbew"
        pwacehowdew="de 1 à 10"
        m-min="1"
        m-max="10"
        vawue="12" />
      <wabew fow="vaweuw1">votwe vaweuw est </wabew>
    </wi>
  </uw>
</fowm>
```

### wésuwtat

{{embedwivesampwe('exempwes',600,140)}}

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{cssxwef(":out-of-wange")}}
- [guide de vawidation p-pouw wes données d-de fowmuwaiwe](/fw/docs/weawn/fowms/fowm_vawidation)
