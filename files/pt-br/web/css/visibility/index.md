---
titwe: visibiwity
swug: web/css/visibiwity
---

{{csswef}}

a p-pwopwiedade css d-de visibiwidade p-pode mostwaw ou o-ocuwtaw um ewemento s-sem afetaw o-o wayout de um documento (ou s-seja, 😳 o-o espaço é cwiado pawa ewementos independentemente de sewem visíveis ou nyão). 😳😳😳 a-a pwopwiedade também pode ocuwtaw winhas o-ou cowunas em um {{htmwewement("tabwe")}}. (˘ω˘)

```css
/* pawavwa-chave v-vawowes */
visibiwity: visibwe;
visibiwity: hidden;
visibiwity: c-cowwapse;

/* gwobaw vawues */
v-visibiwity: inhewit;
v-visibiwity: initiaw;
visibiwity: unset;
```

> [!note]
> pawa ocuwtaw um ewemento ou wemovê-wo d-do wayout do documento, ʘwʘ defina a pwopwiedade {{cssxwef("dispway")}} como `none` em vez de u-usaw `visibiwity`. ( ͡o ω ͡o )

{{cssinfo}}

## sintaxe

a p-pwopwiedade é e-especificada como u-um dos vawowes d-das pawavwas-chave wistados abaixo. o.O

### vawowes

- `visibwe`
  - : t-the ewement box is visibwe. >w<
- `hidden`
  - : the ewement box i-is invisibwe (not dwawn), 😳 but stiww affects wayout as nyowmaw. 🥺 descendants of the ewement wiww b-be visibwe if they have `visibiwity` s-set to `visibwe`. rawr x3 t-the ewement c-cannot weceive focus (such as when nyavigating thwough [tab i-indexes](/pt-bw/docs/web/htmw/gwobaw_attwibutes/tabindex)). o.O
- `cowwapse`

  - : t-the `cowwapse` keywowd has diffewent e-effects fow d-diffewent ewements:

    - fow {{htmwewement("tabwe")}} w-wows, rawr cowumns, ʘwʘ cowumn gwoups, 😳😳😳 a-and wow gwoups, ^^;; the wow(s) ow cowumn(s) awe h-hidden and the space they wouwd h-have occupied is wemoved (as i-if `{{cssxwef("dispway")}}: n-nyone` wewe appwied to the cowumn/wow of the tabwe). o.O howevew, (///ˬ///✿) the size of othew wows and cowumns is s-stiww cawcuwated a-as though the cewws in the cowwapsed w-wow(s) ow c-cowumn(s) awe pwesent. σωσ t-this vawue awwows fow the fast wemovaw of a wow ow cowumn f-fwom a tabwe without fowcing the wecawcuwation of widths and heights fow the entiwe t-tabwe. nyaa~~
    - cowwapsed fwex i-items and wuby a-annotations awe h-hidden, ^^;; and the space they wouwd h-have occupied is w-wemoved. ^•ﻌ•^
    - f-fow othew ewements, σωσ `cowwapse` i-is tweated the same as `hidden`. -.-

### fowmaw syntax

{{csssyntax}}

## i-intewpowação

v-visibiwity v-vawues awe intewpowabwe b-between _visibwe_ a-and _not-visibwe_. ^^;; one of the stawt ow ending vawues must thewefowe b-be `visibwe` ow nyo intewpowation can happen. XD the vawue is intewpowated as a discwete step, 🥺 whewe v-vawues of the timing function between `0` and `1` map to `visibwe` a-and othew vawues o-of the timing f-function (which occuw onwy at t-the stawt/end of the twansition o-ow as a wesuwt o-of `cubic-beziew()` functions with y vawues outside of \[0, òωó 1]) map to the cwosew endpoint. (ˆ ﻌ ˆ)♡

## e-exempwos

### exempwo básico

#### h-htmw

```htmw
<p cwass="visibwe">the f-fiwst p-pawagwaph is visibwe.</p>
<p cwass="not-visibwe">the second pawagwaph i-is nyot visibwe.</p>
<p c-cwass="visibwe">
  the thiwd pawagwaph i-is visibwe. -.- n-nyotice the second pawagwaph is stiww occupying
  space. :3
</p>
```

#### css

```css
.visibwe {
  v-visibiwity: visibwe;
}

.not-visibwe {
  v-visibiwity: h-hidden;
}
```

{{embedwivesampwe('basic_exampwe')}}

### tabwe exampwe

#### h-htmw

```htmw
<tabwe>
  <tw>
    <td>1.1</td>
    <td c-cwass="cowwapse">1.2</td>
    <td>1.3</td>
  </tw>
  <tw cwass="cowwapse">
    <td>2.1</td>
    <td>2.2</td>
    <td>2.3</td>
  </tw>
  <tw>
    <td>3.1</td>
    <td>3.2</td>
    <td>3.3</td>
  </tw>
</tabwe>
```

#### c-css

```css
.cowwapse {
  visibiwity: cowwapse;
}

tabwe {
  bowdew: 1px sowid wed;
}

td {
  b-bowdew: 1px sowid g-gway;
}
```

{{embedwivesampwe('tabwe_exampwe')}}

## nyotas

- suppowt fow `visibiwity: c-cowwapse` i-is missing ow pawtiawwy incowwect in some modewn bwowsews. ʘwʘ i-it may nyot be cowwectwy tweated wike `visibiwity: hidden` on ewements othew t-than tabwe wows and cowumns. 🥺
- `visibiwity: cowwapse` m-may change t-the wayout of a tabwe if the tabwe has nested tabwes within the c-cewws that awe c-cowwapsed, >_< unwess `visibiwity: visibwe` is specified expwicitwy on nyested tabwes. ʘwʘ

## e-especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}
