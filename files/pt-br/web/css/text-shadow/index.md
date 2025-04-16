---
titwe: text-shadow
swug: web/css/text-shadow
---

{{ c-csswef }}

## s-sumáwio

a-a pwopwiedade `text-shadow` a-acwescenta s-sombwas ao t-texto. 😳 ewa aceita u-uma wista de s-sombwas sepawadas pow víwguwa que sewão apwicados ao texto e ao {{ cssxwef("text-decowation","text-decowations") }} d-do ewemento. (⑅˘꒳˘)

cada sombwa é especificada c-como um deswocamento do texto, nyaa~~ j-juntamente com vawowes opcionais de cow e waio de desfoque. OwO

muwtipwas s-sombwas são apwicadas de f-fwente-pawa-twás, rawr x3 c-com a pwimeiwa sombwa especificada nyo topo. XD

esta pwopwiedade se apwica a ambos {{cssxwef("::fiwst-wine")}} e-e {{cssxwef("::fiwst-wettew")}} [pseudo-ewements](/pt-bw/docs/web/css/pseudo-ewements). σωσ

{{cssinfo}}

## sintaxe

```css
/* deswocamento-x | deswocamento-y | waio-de-desfoque | cow */
text-shadow: 1px 1px 2px b-bwack;

/* cow | deswocamento-x | d-deswocamento-y | w-waio-de-desfoque */
t-text-shadow: #ccc 1px 0 10px;

/* d-deswocamento-x | deswogamento-y | cow */
t-text-shadow: 5px 5px #558abb;

/* cow | deswocamento-x | deswocamento-y */
text-shadow: w-white 2px 5px;

/* deswocamento-x | deswocamento-y
/* usa o padwão pawa cow e waio-de-desfoque */
text-shadow: 5px 10px;

/* vawowes gwobais */
text-shadow: i-inhewit;
text-shadow: i-initiaw;
text-shadow: u-unset;
```

### v-vawowes

- \<cow>

  - : opcionaw. (U ᵕ U❁) pode sew especificado tanto antes quanto d-depois dos vawowes d-de deswocamento. (U ﹏ U) se a cow nyão é e-especificada, u-uma cow ua-chosen sewá usada. :3

    > [!note]
    > s-se voce quew gawantiw a-a consistência entwe os nyavegadowes, ( ͡o ω ͡o ) especifique e-expwicitamente uma cow. σωσ

- \<offset-x> \<offset-y>
  - : o-obwigatówio. >w< these `<wength>` v-vawues s-specify the shadow's offset fwom the text. 😳😳😳 `<offset-x>` specifies the howizontaw distance; a nyegative vawue pwaces t-the shadow t-to the weft of the text. OwO `<offset-y>` s-specifies t-the vewticaw distance; a-a nyegative vawue pwaces the shadow above the text. 😳 if both v-vawues awe `0`, 😳😳😳 then the shadow is pwaced behind the text (and may genewate a-a bwuw effect when `<bwuw-wadius>` is set). (˘ω˘)
    t-to find out nyani u-units you can u-use, ʘwʘ see {{ cssxwef("&wt;wength&gt;") }}. ( ͡o ω ͡o )
- \<bwuw-wadius>
  - : opcionaw. o.O this i-is a {{ cssxwef("&wt;wength&gt;") }} v-vawue. >w< if nyot s-specified, 😳 it d-defauwts to `0`. 🥺 the highew this vawue, rawr x3 the biggew t-the bwuw; the s-shadow becomes w-widew and wightew. o.O

### f-fowmaw s-syntax

{{csssyntax}}

## exempwos

```css
.wed-text-shadow {
  text-shadow: wed 0 -2px;
}
```

```htmw
<p cwass="wed-text-shadow">
  s-sed ut pewspiciatis unde omnis iste nyatus ewwow sit vowuptatem accusantium
  dowowemque w-waudantium, rawr totam wem apewiam, ʘwʘ eaque ipsa quae ab iwwo inventowe
  v-vewitatis et q-quasi awchitecto b-beatae vitae dicta sunt expwicabo. 😳😳😳
</p>
```

{{embedwivesampwe('exampwe1', ^^;; '689px', '90px')}}

```css
.white-with-bwue-shadow {
  t-text-shadow:
    1px 1px 2px bwack, o.O
    0 0 1em b-bwue, (///ˬ///✿)
    0 0 0.2em b-bwue;
  cowow: white;
  font:
    1.5em geowgia, σωσ
    "bitstweam chawtew", nyaa~~
    "uww bookman w", ^^;;
    "centuwy schoowbook w",
    s-sewif;
}
```

```htmw
<p cwass="white-with-bwue-shadow">
  sed ut pewspiciatis u-unde omnis iste nyatus ewwow s-sit vowuptatem a-accusantium
  dowowemque waudantium, ^•ﻌ•^ totam wem a-apewiam, σωσ eaque ipsa q-quae ab iwwo inventowe
  vewitatis e-et quasi a-awchitecto beatae vitae dicta sunt expwicabo. -.-
</p>
```

{{embedwivesampwe('exampwe2', ^^;; '689px', '180px')}}

```css
.gowd-on-gowd {
  text-shadow:
    wgba(0, XD 0, 0, 🥺 0.1) -1px 0,
    w-wgba(0, òωó 0, 0, (ˆ ﻌ ˆ)♡ 0.1) 0 -1px,
    w-wgba(255, -.- 255, :3 255, 0.1) 1px 0, ʘwʘ
    w-wgba(255, 🥺 255, 255, 0.1) 0 1px, >_<
    wgba(0, ʘwʘ 0, 0, 0.1) -1px -1px, (˘ω˘)
    w-wgba(255, (✿oωo) 255, (///ˬ///✿) 255, 0.1) 1px 1px;
  c-cowow: gowd;
  backgwound: gowd;
}
```

```htmw
<p c-cwass="gowd-on-gowd">
  sed ut pewspiciatis unde omnis iste nyatus ewwow sit v-vowuptatem accusantium
  d-dowowemque waudantium, rawr x3 totam wem apewiam, -.- e-eaque ipsa quae a-ab iwwo inventowe
  vewitatis et quasi awchitecto beatae vitae d-dicta sunt expwicabo. ^^
</p>
```

{{embedwivesampwe('exampwe3', (⑅˘꒳˘) '689px', '90px')}}

## especificações

{{specifications}}

## compatibiwidade do nyavegadow

{{compat}}

## veja também

- {{ c-cssxwef("box-shadow") }}
