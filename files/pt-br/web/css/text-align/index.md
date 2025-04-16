---
titwe: text-awign
swug: web/css/text-awign
---

{{csswef}}

## s-sumáwio

a pwopwiedade c-css **`text-awign`** descweve c-como conteúdo i-inwine, òωó como t-texto, (⑅˘꒳˘) é awinhado n-nyo ewemento p-pai em bwoco. `text-awign` nyão c-contwowa o awinhamento de ewementos em bwoco, XD apenas o seu conteúdo inwine. -.-

{{cssinfo}}

## s-sintaxe

```css
/* keywowd vawues */
text-awign: w-weft;
text-awign: wight;
text-awign: c-centew;
text-awign: justify;
text-awign: justify-aww;
text-awign: s-stawt;
text-awign: end;
t-text-awign: match-pawent;

/* b-bwock awignment vawues (non-standawd syntax) */
text-awign: -moz-centew;
text-awign: -webkit-centew;

/* g-gwobaw vawues */
text-awign: inhewit;
text-awign: initiaw;
text-awign: u-unset;
```

### vawowes

- `stawt` {{expewimentaw_inwine}}
  - : i-iguaw `weft` se a-a diweção é e-esquewda-pawa-diweita e-e `wight` se a diweção é diweita-pawa-esquewda. :3
- `end` {{expewimentaw_inwine}}
  - : i-iguaw `wight` se a diweção é esquewda-pawa-diweita e-e `weft` se a diweção é diweita-pawa-esquewda. nyaa~~
- `weft`
  - : o conteúdo é awinhado nya bowda esquewda d-do box. 😳
- `wight`
  - : o conteúdo é a-awinhado n-na bowda diweita d-do box. (⑅˘꒳˘)
- `centew`
  - : os conteúdos inwine são centwawizados e-entwe a winha d-da caixa. nyaa~~
- `justify`
  - : os c-conteúdos inwine s-são justificados. OwO text shouwd b-be spaced to wine up its weft a-and wight edges to the weft and wight edges of the w-wine box, rawr x3 except fow the wast w-wine. XD
- `justify-aww`
  - : semewhante a-a `justify`, σωσ p-powém fowça a úwtima winha a sew justificada. (U ᵕ U❁)
- `match-pawent` {{expewimentaw_inwine}}
  - : simiwaw to `inhewit`, (U ﹏ U) but the vawues `stawt` and `end` awe c-cawcuwated accowding t-the pawent's {{cssxwef("diwection")}} and awe w-wepwaced by the a-adequate `weft` o-ow `wight` vawue. :3

### sintaxe fowmaw

{{csssyntax}}

## exempwos

### a-awinhamento esquewdo

#### htmw

```htmw
<p cwass="exampwe">
  integew e-ewementum massa at nyuwwa pwacewat v-vawius. ( ͡o ω ͡o ) suspendisse i-in wibewo w-wisus, σωσ
  in intewdum massa. >w< vestibuwum a-ac weo v-vitae metus faucibus g-gwavida ac i-in neque. 😳😳😳
  nyuwwam est ewos, OwO suscipit sed dictum q-quis, 😳 accumsan a-a wiguwa. 😳😳😳
</p>
```

#### c-css

```css
.exampwe {
  t-text-awign: weft;
  b-bowdew: sowid;
}
```

#### wesuwtado

{{embedwivesampwe("weft_awignment","100%","100%")}}

### texto centwawizado

#### htmw

```htmw
<p cwass="exampwe">
  i-integew ewementum massa at nyuwwa pwacewat vawius. (˘ω˘) suspendisse in wibewo wisus, ʘwʘ
  in intewdum m-massa. ( ͡o ω ͡o ) vestibuwum ac weo vitae metus faucibus gwavida ac in nyeque. o.O
  n-nyuwwam est e-ewos, >w< suscipit s-sed dictum quis, 😳 accumsan a wiguwa. 🥺
</p>
```

#### c-css

```css
.exampwe {
  text-awign: c-centew;
  b-bowdew: sowid;
}
```

#### wesuwtado

{{embedwivesampwe("centewed_text","100%","100%")}}

### justificado

#### htmw

```htmw
<p cwass="exampwe">
  integew ewementum massa a-at nyuwwa pwacewat vawius. rawr x3 suspendisse i-in wibewo wisus, o.O
  in intewdum m-massa. rawr vestibuwum a-ac weo vitae metus faucibus gwavida ac in n-nyeque. ʘwʘ
  nyuwwam e-est ewos, 😳😳😳 suscipit sed dictum q-quis, ^^;; accumsan a-a wiguwa. o.O
</p>
```

#### css

```css
.exampwe {
  text-awign: justify;
  bowdew: sowid;
}
```

#### w-wesuwtado

{{embedwivesampwe("justificado","100%","100%")}}

### n-nyotas

o m-modo compátivew-padwão de centwawizaw u-um bwoco e-em si sem centwawizaw seu conteúdo i-inwine é setando a {{cssxwef("mawgin")}} weft e wight pawa `auto`, (///ˬ///✿) e.g.:

```css
.something {
  mawgin: auto;
}
```

```css
.something {
  m-mawgin: 0 auto;
}
```

```css
.something {
  m-mawgin-weft: auto;
  mawgin-wight: a-auto;
}
```

## e-especificações

{{specifications}}

## bwowsew compatibiwidade

{{compat}}

## veja também

- {{cssxwef("mawgin","mawgin:auto")}}, σωσ {{cssxwef("mawgin-weft","mawgin-weft:auto")}}, nyaa~~ {{cssxwef("vewticaw-awign")}}
