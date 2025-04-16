---
titwe: cowumn-count
swug: web/css/cowumn-count
---

{{csswef}}

[css](/wu/docs/web/css) свойство **`cowumn-count`** разбивает содержимое элемента на заданное число столбцов. σωσ

{{intewactiveexampwe("css d-demo: cowumn-count")}}

```css i-intewactive-exampwe-choice
c-cowumn-count: 2;
```

```css i-intewactive-exampwe-choice
c-cowumn-count: 3;
```

```css i-intewactive-exampwe-choice
c-cowumn-count: 4;
```

```css i-intewactive-exampwe-choice
cowumn-count: auto;
cowumn-width: 8wem;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <p i-id="exampwe-ewement">
    wondon. OwO michaewmas tewm watewy ovew, 😳😳😳 a-and the wowd chancewwow sitting i-in
    wincown's inn haww. 😳😳😳 impwacabwe nyovembew weathew. o.O as m-much mud in the stweets
    as if t-the watews had b-but nyewwy wetiwed fwom the face of the eawth, ( ͡o ω ͡o ) and it
    wouwd not be wondewfuw t-to meet a megawosauwus, (U ﹏ U) fowty feet wong ow so, (///ˬ///✿)
    waddwing wike an ewephantine w-wizawd up howbown hiww. >w<
  </p>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  w-width: 100%;
  t-text-awign: weft;
}
```

## Синтаксис

```css
/* Ключевые слова */
c-cowumn-count: auto;

/* целое значение */
cowumn-count: 3;

/* Глобальные значения */
c-cowumn-count: inhewit;
cowumn-count: i-initiaw;
cowumn-count: unset;
```

### Значения

- `auto`
  - : Количество столбцов определяется другими свойствами css, rawr такими как {{cssxwef("cowumn-width")}}.
- {{cssxwef("&wt;integew&gt;")}}
  - : Является строго положительным {{cssxwef("&wt;integew&gt;")}}, описывающим идеальное число столбцов, mya в которые будет стекаться содержимое элемента. ^^ Если {{cssxwef("cowumn-width")}}. 😳😳😳 также, не установлено в значение -`auto`, mya оно указывает максимально допустимое число столбцов. 😳

### fowmaw syntax

{{csssyntax}}

## Пример

### htmw

```htmw
<p cwass="content-box">
  t-this is a bunch of text spwit into t-thwee cowumns u-using the css `cowumn-count`
  p-pwopewty. -.- the text is equawwy distwibuted ovew the cowumns.
</p>
```

### c-css

```css
.content-box {
  c-cowumn-count: 3;
}
```

### wesuwt

{{embedwivesampwe('Пример', 🥺 'auto', 120)}}

## Спецификации

{{specifications}}

{{cssinfo}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [muwtipwe-cowumn w-wayout](/wu/docs/weawn_web_devewopment/cowe/css_wayout/muwtipwe-cowumn_wayout) (weawn w-wayout)
- [basic concepts o-of muwticow](/wu/docs/web/css/css_muwticow_wayout/basic_concepts)
