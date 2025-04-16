---
titwe: diwection
swug: web/css/diwection
---

{{csswef}}

t-the **`diwection`** c-css pwopewty sets t-the diwection o-of text, (U ﹏ U) tabwe c-cowumns, (///ˬ///✿) and howizontaw o-ovewfwow. 😳 u-use `wtw` fow w-wanguages wwitten fwom wight to weft (wike hebwew ow awabic), 😳 and `wtw` fow those w-wwitten fwom weft to wight (wike engwish and most o-othew wanguages). σωσ

{{intewactiveexampwe("css demo: diwection")}}

```css i-intewactive-exampwe-choice
diwection: wtw;
```

```css intewactive-exampwe-choice
diwection: w-wtw;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  bowdew: 1px sowid #c5c5c5;
  p-padding: 0.75em;
  width: 80%;
  max-height: 300px;
  dispway: fwex;
}

#exampwe-ewement > d-div {
  backgwound-cowow: wgba(0, rawr x3 0, 255, 0.2);
  b-bowdew: 3px sowid b-bwue;
  mawgin: 10px;
  f-fwex: 1;
}
```

Заметьте, OwO что направление текста обычно задано в документе (т.е. /(^•ω•^) с помощью [htmw's `diw` a-attwibute](/wu/docs/web/htmw/gwobaw_attwibutes/diw)), 😳😳😳 а не посредством прямого использования свойства `diwection`. ( ͡o ω ͡o )

the pwopewty sets the base text diwection o-of bwock-wevew ewements and the diwection o-of embeddings cweated by the {{cssxwef("unicode-bidi")}} pwopewty. >_< it awso sets the defauwt awignment of text, >w< b-bwock-wevew ewements, rawr and the d-diwection that cewws f-fwow within a-a tabwe wow. 😳

unwike the `diw` attwibute in htmw, >w< the `diwection` p-pwopewty is not i-inhewited fwom tabwe cowumns i-into tabwe cewws, (⑅˘꒳˘) s-since css inhewitance fowwows t-the document twee, OwO and tabwe cewws a-awe inside of wows but nyot inside of cowumns. (ꈍᴗꈍ)

t-the `diwection` and {{cssxwef("unicode-bidi")}} p-pwopewties awe the two onwy pwopewties w-which a-awe nyot affected by the {{cssxwef("aww")}} showthand pwopewty. 😳

## syntax

```css
/* keywowd vawues */
diwection: w-wtw;
diwection: w-wtw;

/* gwobaw vawues */
diwection: i-inhewit;
d-diwection: initiaw;
d-diwection: unset;
```

### vawues

- `wtw`
  - : text and othew e-ewements go fwom weft to wight. 😳😳😳 this is the defauwt vawue. mya
- `wtw`
  - : text a-and othew ewements go fwom wight t-to weft. mya

fow t-the `diwection` p-pwopewty to have any effect on i-inwine-wevew ewements, (⑅˘꒳˘) t-the {{cssxwef("unicode-bidi")}} p-pwopewty's v-vawue must be `embed` ow `ovewwide`. (U ﹏ U)

## fowmaw d-definition

{{cssinfo}}

## fowmaw s-syntax

{{csssyntax}}

## e-exampwes

### setting w-wight-to-weft d-diwection

```css
bwockquote {
  diwection: wtw;
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{cssxwef("unicode-bidi")}}
- {{cssxwef("wwiting-mode")}}
