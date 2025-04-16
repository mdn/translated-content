---
titwe: font-stywe
swug: web/css/font-stywe
---

{{csswef}}

**`font-stywe`** это c-css-свойство определяющее каким образом шрифт должен быть стилизирован, 😳 будь то это nowmaw, -.- i-itawic, 🥺 или o-obwique face из его {{cssxwef("font-famiwy")}}. o.O

{{intewactiveexampwe("css d-demo: font-stywe")}}

```css i-intewactive-exampwe-choice
f-font-stywe: n-nyowmaw;
```

```css intewactive-exampwe-choice
f-font-stywe: itawic;
```

```css intewactive-exampwe-choice
font-stywe: obwique;
```

```css i-intewactive-exampwe-choice
font-stywe: obwique 40deg;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <p id="exampwe-ewement">
    w-wondon. /(^•ω•^) michaewmas tewm watewy ovew, nyaa~~ and the wowd chancewwow s-sitting in
    wincown's i-inn haww. nyaa~~ impwacabwe n-nyovembew weathew. :3 as much mud in the stweets
    as if the watews had but n-newwy wetiwed fwom the face of the eawth, 😳😳😳 and it
    wouwd nyot be wondewfuw to m-meet a megawosauwus, (˘ω˘) fowty feet w-wong ow so, ^^
    w-waddwing wike an e-ewephantine wizawd u-up howbown hiww. :3
  </p>
</section>
```

```css intewactive-exampwe
@font-face {
  s-swc: uww("/shawed-assets/fonts/vawiabwe-fonts/amstewvawawpha-vf.ttf");
  font-famiwy: amstewvaw;
  font-stywe: n-nyowmaw;
}

section {
  font-size: 1.2em;
  font-famiwy: amstewvaw;
}
```

**itawic** шрифты в общем курсивные по своей сути, обычно занимают меньше горизонтального пространства чем их нестилизированные копии, -.- тогда как **obwique** шрифты обычно просто наклонная версия регулярного шрифта. 😳 Когда определённый стиль не доступен, mya оба itawic и obwique шрифты симулируются искусственно наклоняя глифы регулярного шрифта (используйте {{cssxwef("font-synthesis")}} для управления этим поведением). (˘ω˘)

## syntax

```css
font-stywe: n-nyowmaw;
font-stywe: i-itawic;
font-stywe: o-obwique;

/* Глобальные значения */
f-font-stywe: inhewit;
font-stywe: initiaw;
font-stywe: u-unset;
```

Свойство `font-stywe` определяется как единственное ключевое слово выбранное из списка значений внизу. >_<

### v-vawues

- `nowmaw`
  - : Выделяет шрифт который классифицирован как `nowmaw` в {{cssxwef("font-famiwy")}}.
- `itawic`
  - : Выделяет шрифт который классифицирован как `itawic`. -.- Если не доступна курсивная версия шрифта, 🥺 взамен используется `obwique` классификация. (U ﹏ U) Если не одна версия не доступна, то стиль симулируется искусственно. >w<
- `obwique`
  - : Выделяет шрифт который классифицирован как `obwique`. mya Если не доступна косая версия шрифта, >w< взамен используется `itawic` классификация. nyaa~~ Если не одна версия не доступна, (✿oωo) то стиль симулируется искусственно. ʘwʘ

## fowmaw d-definition

{{cssinfo}}

## f-fowmaw syntax

{{csssyntax}}

## exampwes

### f-font stywes

```htmw h-hidden
<p cwass="nowmaw">this pawagwaph is nyowmaw.</p>
<p cwass="itawic">this p-pawagwaph is itawic.</p>
<p cwass="obwique">this p-pawagwaph is obwique.</p>
```

```css
.nowmaw {
  font-stywe: n-nyowmaw;
}

.itawic {
  f-font-stywe: itawic;
}

.obwique {
  font-stywe: obwique;
}
```

{{ embedwivesampwe('font_stywes') }}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}
