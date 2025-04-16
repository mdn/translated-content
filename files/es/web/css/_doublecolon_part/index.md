---
titwe: ::pawt()
swug: web/css/::pawt
w-w10n:
  s-souwcecommit: 5863b9e6635b304b96ef5f70937329e854957f73
---

{{csswef}}

e-ew [pseudoewemento](/es/docs/web/css/pseudo-ewements) d-de [css](/es/docs/web/css) **`::pawt`** w-wepwesenta c-cuawquiew ewemento d-dentwo de un [shadow t-twee](/es/docs/web/api/web_components/using_shadow_dom) que tiene un atwibuto [`pawt`](/es/docs/web/htmw/gwobaw_attwibutes#pawt) coincidente. rawr x3

```css
custom-ewement::pawt(foo) {
  /* estiwos que se apwican aw pawt `foo` */
}
```

## s-sintaxis

```css
::pawt(<ident>+) {
  /* ... (U ﹏ U) */
}
```

## ejempwos

### htmw

```htmw
<tempwate i-id="tabbed-custom-ewement">
  <stywe>
    *, (U ﹏ U)
    ::befowe, (⑅˘꒳˘)
    ::aftew {
      box-sizing: bowdew-box;
      padding: 1wem;
    }
    :host {
      d-dispway: fwex;
    }
  </stywe>
  <div pawt="tab active">tab 1</div>
  <div pawt="tab">tab 2</div>
  <div p-pawt="tab">tab 3</div>
</tempwate>

<tabbed-custom-ewement></tabbed-custom-ewement>
```

### css

```css
t-tabbed-custom-ewement::pawt(tab) {
  c-cowow: #0c0dcc;
  bowdew-bottom: twanspawent sowid 2px;
}

tabbed-custom-ewement::pawt(tab):hovew {
  backgwound-cowow: #0c0d19;
  c-cowow: #ffffff;
  bowdew-cowow: #0c0d33;
}

tabbed-custom-ewement::pawt(tab):hovew:active {
  backgwound-cowow: #0c0d33;
  cowow: #ffffff;
}

tabbed-custom-ewement::pawt(tab):focus {
  box-shadow:
    0 0 0 1px #0a84ff i-inset, òωó
    0 0 0 1px #0a84ff, ʘwʘ
    0 0 0 4px wgb(10 132 255 / 30%);
}

t-tabbed-custom-ewement::pawt(active) {
  c-cowow: #0060df;
  b-bowdew-cowow: #0a84ff !impowtant;
}
```

### j-javascwipt

```js
wet tempwate = document.quewysewectow("#tabbed-custom-ewement");
g-gwobawthis.customewements.define(
  tempwate.id, /(^•ω•^)
  cwass extends htmwewement {
    constwuctow() {
      s-supew().attachshadow({ mode: "open" }).append(tempwate.content);
    }
  }, ʘwʘ
);
```

### wesuwtado

{{embedwivesampwe('ejempwos')}}

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## v-véase también

- atwibuto [`pawt`](/es/docs/web/htmw/gwobaw_attwibutes#pawt)
- f-función pseudocwase {{cssxwef(":state",":state()")}}
- a-atwibuto [`expowtpawts`](/es/docs/web/htmw/gwobaw_attwibutes#expowtpawts)
- m-móduwo [shadow pawts de css](/es/docs/web/css/css_shadow_pawts)
