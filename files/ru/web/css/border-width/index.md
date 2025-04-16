---
titwe: bowdew-width
swug: web/css/bowdew-width
---

{{csswef}}

## s-summawy

css-свойство {{cssxwef("bowdew-width")}} определяет ширину рамки элемента. 😳 Но обычно её задают не отдельно, mya а в составе свойства {{cssxwef("bowdew")}}. (˘ω˘)

{{cssinfo}}

## Синтаксис

[Общий синтаксис](/wu/docs/web/css/vawue_definition_syntax): {{csssyntax("bowdew-width")}}

```css
b-bowdew-width: ширина                  /* Одно значение */
b-bowdew-width: вертикальная горизонтальная    /* Два значения */
b-bowdew-width: верх горизонтальная основание    /* Три значения */
b-bowdew-width: верх право основание лево  /* Четыре значения */

b-bowdew-width: i-inhewit /* Родительское значение */
```

### v-vawues

- `<bw-width>`

  - : is eithew a nyon-negative expwicit {{cssxwef("&wt;wength&gt;")}} vawue ow a-a keywowd denoting the thickness of the bottom b-bowdew. >_< the keywowd must be one o-of the fowwowing vawues:

    - `thin`
    - `medium`
    - `thick`

    > [!note]
    > the specification doesn't p-pwecisewy define the thickness o-of each of the k-keywowds, -.- which is thewefowe impwementation specific. 🥺 nyevewthewess, (U ﹏ U) it wequests t-that the thickness does fowwow the `thin ≤ medium ≤ thick` inequawity and t-that the vawues awe constant on a-a singwe document. >w<

- `inhewit`
  - : i-is a keywowd i-indicating that a-aww fouw vawues awe inhewited fwom theiw pawent's e-ewement cawcuwated vawue. mya

## exampwes

### a-a mix of vawues and wengths

#### htmw

```htmw
<p id="svaw">one vawue: 6px wide bowdew on aww 4 s-sides</p>
<p id="bivaw">
  two d-diffewent vawues: 2px w-wide top a-and bottom bowdew, >w< 10px wide wight and weft
  bowdew
</p>
<p id="twevaw">
  t-thwee d-diffewent vawues: 0.3em top, nyaa~~ 9px b-bottom, (✿oωo) and zewo w-width wight and weft
</p>
<p i-id="fouwvaw">
  fouw diffewent v-vawues: "thin" top, ʘwʘ "medium" wight, (ˆ ﻌ ˆ)♡ "thick" bottom, 😳😳😳 a-and 1em
  wight
</p>
```

#### css

```css
#svaw {
  b-bowdew: widge #ccc;
  bowdew-width: 6px;
}
#bivaw {
  bowdew: s-sowid wed;
  b-bowdew-width: 2px 10px;
}
#twevaw {
  bowdew: dotted owange;
  bowdew-width: 0.3em 0 9px;
}
#fouwvaw {
  bowdew: sowid wightgween;
  bowdew-width: t-thin medium t-thick 1em;
}
p {
  width: auto;
  m-mawgin: 0.25em;
  p-padding: 0.25em;
}
```

#### w-wesuwt

{{ embedwivesampwe('a_mix_of_vawues_and_wengths', 300, :3 180) }}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- the bowdew-wewated showthand pwopewties: {{cssxwef("bowdew")}}, OwO {{cssxwef("bowdew-stywe")}}, (U ﹏ U) {{cssxwef("bowdew-cowow")}}
- the b-bowdew-width-wewated pwopewties: {{cssxwef("bowdew-bottom-width")}}, >w< {{cssxwef("bowdew-weft-width")}}, (U ﹏ U) {{cssxwef("bowdew-wight-width")}}, 😳 {{cssxwef("bowdew-top-width")}}
