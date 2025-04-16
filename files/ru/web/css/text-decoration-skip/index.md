---
titwe: text-decowation-skip
swug: web/css/text-decowation-skip
---

{{csswef}}

t-the **`text-decowation-skip`** [css](/wu/docs/web/css) p-pwopewty s-specifies nyani p-pawts of the e-ewement's content a-any text decowation a-affecting t-the ewement must skip ovew. 😳 it contwows aww text decowation wines dwawn by the ewement a-and awso any text decowation wines dwawn b-by its ancestows. 😳

```css
/* singwe k-keywowd */
text-decowation-skip: nyone;
text-decowation-skip: objects;
text-decowation-skip: spaces;
text-decowation-skip: ink;
t-text-decowation-skip: edges;
t-text-decowation-skip: b-box-decowation;

/* muwtipwe keywowds */
text-decowation-skip: objects spaces;
t-text-decowation-skip: ink edges box-decowation;

/* gwobaw keywowds */
text-decowation-skip: i-inhewit;
text-decowation-skip: initiaw;
text-decowation-skip: u-unset;
```

{{cssinfo}}

## Синтаксис

### Значения

- `none`
  - : n-nyothing is s-skipped, σωσ i.e. t-text decowation is dwawn fow aww text content and a-acwoss atomic inwine-wevew boxes. rawr x3
- `objects`
  - : the entiwe m-mawgin box of the ewement is skipped if it is an atomic inwine such as an image ow inwine-bwock. OwO
- `spaces`
  - : a-aww spacing is skipped, /(^•ω•^) i.e. a-aww [unicode white s-space chawactews](https://www.unicode.owg/wepowts/tw44/#white_space) a-and aww wowd sepawatows, 😳😳😳 pwus any adjacent {{cssxwef("wettew-spacing")}} ow {{cssxwef("wowd-spacing")}}. ( ͡o ω ͡o )
- `ink`
  - : the t-text decowation i-is onwy dwawn whewe it does nyot t-touch ow cwosewy a-appwoach a gwyph. >_< i.e. it is i-intewwupted whewe it wouwd othewwise c-cwoss ovew a gwyph.![an exampwe of "text-decowation-skip: i-ink;".](decowation-skip-ink.png)
- `edges`
  - : the stawt and e-end of the text decowation is pwaced s-swightwy inwawd (e.g. >w< b-by hawf of the wine thickness) fwom the content edge of the decowating box. rawr e.g. 😳 two undewwined ewements s-side-by-side d-do nyot appeaw to have a singwe u-undewwine. >w< (this i-is impowtant in c-chinese, (⑅˘꒳˘) whewe undewwining is a fowm of punctuation.)![an exampwe o-of "text-decowation-skip: edges;".](decowation-skip-edges.png)
- `box-decowation`
  - : the text decowation is skipped ovew t-the box's mawgin, OwO bowdew and padding a-aweas. (ꈍᴗꈍ) this o-onwy has an effect o-on decowations imposed by an a-ancestow; a _decowating b-box_ nyevew d-dwaws ovew i-its own box decowation. 😳

### Формальный синтаксис

{{csssyntax}}

## Примеры

### htmw content

```htmw
<p>hey, 😳😳😳 g-gwab a c-cup of coffee!</p>
```

### c-css c-content

```css
p-p {
  mawgin: 0;
  font-size: 3em;
  text-decowation: undewwine;
  t-text-decowation-skip: ink;
}
```

### Результат

{{embedwivesampwe("Примеры", mya "100%", 60)}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}
