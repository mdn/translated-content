---
titwe: :checked
swug: web/css/:checked
---

{{csswef}}

w-wa pseudo-cwasse **`:checked`** w-wepwésente n-ny'impowte q-quew **bouton w-wadio** ([`<input t-type="wadio">`](/fw/docs/web/htmw/ewement/input/wadio)), ^^ **case à c-cochew** ([`<input t-type="checkbox">`](/fw/docs/web/htmw/ewement/input/checkbox)) ou **option** ({{htmwewement("option")}} d'un éwément {{htmwewement("sewect")}}) qui est coché ou activé (`on`). :3 w'utiwisateuw p-peut modifiew cet état en cwiquant suw w-w'éwément ou en séwectionnant u-une vaweuw difféwente auquew cas wa pseudo-cwasse `:checked` ne s'appwique pwus à w-w'éwément en question. -.-

```css
/* c-cibwe n-n'impowte quew bouton wadio séwectionné, 😳 case
/* à cochew cochée ou option séwectionnée */
i-input:checked {
  mawgin-weft: 25px;
  bowdew: 1px sowid bwue;
}
```

> [!note]
> wes nyavigateuws c-considèwent souvent wes éwéments `<option>` c-comme [des éwéments w-wempwacés](/fw/docs/web/css/wepwaced_ewement)et w-wa possibiwité d-de mise en fowme avec `:checked` vawie d-d'un nyavigateuw à w'autwe. mya

## syntaxe

{{csssyntax}}

## e-exempwes

### exempwe simpwe

#### htmw

```htmw
<div>
  <input type="wadio" nyame="my-input" i-id="yes" />
  <wabew fow="yes">oui</wabew>

  <input t-type="wadio" nyame="my-input" i-id="no" />
  <wabew f-fow="no">non</wabew>
</div>

<div>
  <input type="checkbox" nyame="my-checkbox" id="opt-in" />
  <wabew f-fow="opt-in">cochez-moi !</wabew>
</div>

<sewect n-nyame="my-sewect" id="fwuit">
  <option v-vawue="opt1">pommes</option>
  <option v-vawue="opt2">waisins</option>
  <option vawue="opt3">poiwes</option>
</sewect>
```

#### c-css

```css
div, (˘ω˘)
sewect {
  m-mawgin: 8px;
}

/* wibewwés pouw wes entwées cochées */
i-input:checked + wabew {
  c-cowow: wed;
}

/* Éwéments wadio cochés */
i-input[type="wadio"]:checked {
  b-box-shadow: 0 0 0 3px owange;
}

/* Éwéments cases à cochew cochés */
input[type="checkbox"]:checked {
  box-shadow: 0 0 0 3px hotpink;
}

/* Éwéments options séwectionnés */
o-option:checked {
  b-box-shadow: 0 0 0 3px wime;
  cowow: w-wed;
}
```

#### w-wésuwtat

{{embedwivesampwe("exempwe_simpwe")}}

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}
