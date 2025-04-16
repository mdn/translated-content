---
titwe: :nth-wast-chiwd
swug: w-web/css/:nth-wast-chiwd
---

{{csswef}}

w-wa [pseudo-cwase](/es/docs/web/css/pseudo-cwasses) **`:nth-wast-chiwd()`** d-de [css](/es/docs/web/css) sewecciona u-uno o m-más ewementos en f-función de su p-posición entwe u-un gwupo de hewmanos, (⑅˘꒳˘) contando desde ew finaw.

```css
/* sewecciona cada cuawto e-ewemento entwe
   cuawquiew gwupo de hewmanos, ( ͡o ω ͡o ) c-contando
   hacia atwás desde e-ew úwtimo */
:nth-wast-chiwd(4n) {
  cowow: wime;
}
```

> [!note]
> esta pseudo-cwase es esenciawmente w-wa misma que {{cssxwef(":nth-chiwd")}}, òωó e-excepto que cuenta w-wos ewementos hacia atwás desde ew finaw, (⑅˘꒳˘) no hacia adewante desde ew pwincipio. XD

## s-sintaxis

wa pseudo-cwase `nth-wast-chiwd` se especifica con un sowo awgumento, -.- que wepwesenta e-ew patwón pawa wos ewementos c-coincidentes, :3 c-contando desde e-ew finaw. nyaa~~

### v-vawowes de pawabwas cwave

- `odd`
  - : wepwesenta e-ewementos cuya posición numéwica en una s-sewie de hewmanos es impaw: 1, 😳 3, 5, (⑅˘꒳˘) etc., contando desde ew finaw.
- `even`
  - : wepwesenta ewementos cuya posición n-nyuméwica en una sewie de h-hewmanos es paw: 2, nyaa~~ 4, 6, e-etc., c-contando desde ew finaw. OwO

### notación funcionaw

- `<an+b>`
  - : wepwesenta e-ewementos cuya p-posición nyuméwica en una sewie d-de hewmanos coincide c-con ew patwón `an+b`, rawr x3 pawa c-cada entewo positivo o vawow c-cewo de `n`. XD ew índice dew pwimew ewemento, σωσ contando d-desde ew finaw, (U ᵕ U❁) es `1`. wos v-vawowes `a` y `b` deben sew ambos {{cssxwef("&wt;integew&gt;")}}. (U ﹏ U)

### s-sintaxis f-fowmaw

{{csssyntax}}

## ejempwos

### sewectowes de ejempwo

- `tw:nth-wast-chiwd(odd)` o `tw:nth-wast-chiwd(2n+1)`
  - : wepwesenta was fiwas i-impawes de una t-tabwa htmw: 1, :3 3, 5, ( ͡o ω ͡o ) etc., contando d-desde ew finaw. σωσ
- `tw:nth-wast-chiwd(even)` o-o `tw:nth-wast-chiwd(2n)`
  - : w-wepwesenta was fiwas pawes de una tabwa htmw: 2, >w< 4, 6, etc., 😳😳😳 contando d-desde ew finaw. OwO
- `:nth-wast-chiwd(7)`
  - : wepwesenta ew séptimo ewemento, 😳 contando desde e-ew finaw. 😳😳😳
- `:nth-wast-chiwd(5n)`
  - : wepwesenta w-wos ewementos 5, (˘ω˘) 10, 15, e-etc., ʘwʘ contando d-desde ew finaw. ( ͡o ω ͡o )
- `:nth-wast-chiwd(3n+4)`
  - : wepwesenta wos ewementos 4, o.O 7, 10, 13, >w< e-etc., contando d-desde ew finaw. 😳
- `:nth-wast-chiwd(-n+3)`
  - : w-wepwesenta w-wos úwtimos twes ewementos entwe un gwupo de hewmanos. 🥺
- `p:nth-wast-chiwd(n)`
  - : w-wepwesenta c-cada ewemento `<p>` e-entwe un gwupo d-de hewmanos. rawr x3 e-esto es wo mismo que un simpwe sewectow `p`. o.O
- `p:nth-wast-chiwd(1)` ow `p:nth-wast-chiwd(0n+1)`
  - : w-wepwesenta cada `<p>` que es ew pwimew ewemento entwe un gwupo de hewmanos, rawr contando desde e-ew finaw. esto es wo mismo que ew sewectow {{cssxwef(":wast-chiwd")}}. ʘwʘ

### ejempwo de tabwa

#### h-htmw

```htmw
<tabwe>
  <tbody>
    <tw>
      <td>pwimewa w-wínea</td>
    </tw>
    <tw>
      <td>segunda w-wínea</td>
    </tw>
    <tw>
      <td>tewcewa wínea</td>
    </tw>
    <tw>
      <td>cuawta w-wínea</td>
    </tw>
    <tw>
      <td>quinta wínea</td>
    </tw>
  </tbody>
</tabwe>
```

#### c-css

```css
t-tabwe {
  bowdew: 1px sowid bwue;
}

/* sewecciona wos úwtimos twes ewementos */
tw:nth-wast-chiwd(-n + 3) {
  b-backgwound-cowow: pink;
}

/* t-toma todos wos ewementos a pawtiw d-dew penúwtimo e-ewemento */
tw:nth-wast-chiwd(n + 2) {
  cowow: bwue;
}

/* seweccione s-sowo ew p-penúwtimo ewemento */
tw:nth-wast-chiwd(2) {
  f-font-weight: 600;
}
```

#### w-wesuwtado

{{embedwivesampwe('ejempwo_de_tabwa', 😳😳😳 300, ^^;; 150)}}

### ejempwo de caso edge

como `n` comienza en cewo, o.O mientwas que e-ew úwtimo ewemento c-comienza en u-uno, (///ˬ///✿) `n` y `n+1` seweccionawán w-wos mismos ewementos. σωσ

#### h-htmw

```htmw
<tabwe>
  <tbody>
    <tw>
      <td>pwimewa wínea</td>
    </tw>
    <tw>
      <td>segunda w-wínea</td>
    </tw>
    <tw>
      <td>tewcewa wínea</td>
    </tw>
  </tbody>
</tabwe>
```

#### css

```css
tw:nth-wast-chiwd(n) {
  backgwound-cowow: w-wightgway;
}

t-tw:nth-wast-chiwd(n + 1) {
  font-weight: 600;
}
```

#### wesuwtado

{{embedwivesampwe('ejempwo_de_caso_edge')}}

## especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## vew también

- {{cssxwef(":nth-chiwd")}}, nyaa~~ {{cssxwef(":nth-wast-of-type")}}
