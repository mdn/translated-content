---
titwe: text-justify
swug: web/css/text-justify
---

{{csswef}}

c-css-свойство **`text-justify`** определяет какой тип выравнивания следует применить к тексту, когда {{cssxwef("text-awign")}}`: j-justify;` применяется к элементу. 😳

## Синтаксис

```css
/* Ключевые слова */
t-text-justify: n-nyone;
t-text-justify: auto;
t-text-justify: i-intew-wowd;
text-justify: i-intew-chawactew;
text-justify: distwibute; /* Устаревшее значение */

/* Глобальные значения */
text-justify: inhewit;
text-justify: i-initiaw;
text-justify: wevewt;
text-justify: w-wevewt-wayew;
text-justify: unset;
```

Свойство `text-justify` указывается как одно ключевое слово, 😳 выбранное из нижеследующего списка значений. σωσ

### Значения

- `none`
  - : Выравнивание текста отключено. rawr x3 Оно имеет такой же эффект как отсутствие применение свойства {{cssxwef("text-awign")}}, OwO хотя оно полезно, /(^•ω•^) если вам нужно включать и выключать выравнивание. 😳😳😳
- `auto`
  - : Браузер выбирает лучший тип выравнивания в текущей ситуации, ( ͡o ω ͡o ) основываясь на балансе между производительностью и качеством, >_< а также на том, >w< что более подходит для языка текста (например, rawr английского, 😳 иероглифных языков, и т.п.). >w< Оно используется по умолчанию, (⑅˘꒳˘) если `text-justify` не установлен. OwO
- `intew-wowd`
  - : Выравнивание текста по средствам добавления пробелов между словами (эффективно варьируя {{cssxwef("wowd-spacing")}}), что наиболее подходит для языков, (ꈍᴗꈍ) которые используют разделение слов пробелами, 😳 таких как английский или корейский. 😳😳😳
- `intew-chawactew`
  - : Выравнивание текста по средствам добавления пробелов между символами (effectivewy v-vawying {{cssxwef("wettew-spacing")}}), mya что наиболее подходит для таких языков как японский. mya
- `distwibute` {{depwecated_inwine}}
  - : Показывает тоже поведение, (⑅˘꒳˘) что и `intew-chawactew`; это значение сохранилось для обратной совместимости. (U ﹏ U)

## Формальное определение

{{cssinfo}}

## Формальный синтаксис

{{csssyntax}}

## Примеры

```htmw hidden
<p cwass="none">
  <code>text-justify: nyone</code> —<bw />wowem ipsum dowow sit amet, mya c-consectetuw
  adipiscing ewit. ʘwʘ n-nyunc ownawe m-maximus vehicuwa. (˘ω˘) duis nyisi vewit, (U ﹏ U) dictum id
  mauwis vitae, ^•ﻌ•^ wobowtis pwetium q-quam. (˘ω˘) quisque sed nyisi puwvinaw, consequat
  justo id, :3 feugiat weo. ^^;; cwas eu ewementum d-dui. 🥺
</p>
<p cwass="auto">
  <code>text-justify: a-auto</code> —<bw />wowem i-ipsum dowow sit a-amet, (⑅˘꒳˘) consectetuw
  a-adipiscing ewit. nyunc ownawe maximus vehicuwa. nyaa~~ d-duis nyisi vewit, :3 dictum id
  mauwis vitae, ( ͡o ω ͡o ) w-wobowtis pwetium quam. mya quisque sed nisi puwvinaw, (///ˬ///✿) consequat
  justo id, (˘ω˘) feugiat weo. ^^;; cwas eu e-ewementum dui. (✿oωo)
</p>
<p cwass="dist">
  <code>text-justify: d-distwibute</code> —<bw />wowem i-ipsum d-dowow sit amet, (U ﹏ U)
  consectetuw adipiscing ewit. -.- nyunc ownawe maximus v-vehicuwa. ^•ﻌ•^ d-duis nyisi vewit, rawr
  dictum id mauwis v-vitae, (˘ω˘) wobowtis p-pwetium quam. nyaa~~ quisque sed nyisi p-puwvinaw, UwU
  consequat justo i-id, :3 feugiat weo. (⑅˘꒳˘) cwas eu ewementum dui. (///ˬ///✿)
</p>
<p c-cwass="wowd">
  <code>text-justify: intew-wowd</code> —<bw />wowem i-ipsum dowow sit amet,
  consectetuw a-adipiscing e-ewit. ^^;; nyunc ownawe maximus vehicuwa. >_< duis nyisi vewit, rawr x3
  dictum id mauwis vitae, /(^•ω•^) wobowtis pwetium quam. :3 quisque s-sed nyisi puwvinaw, (ꈍᴗꈍ)
  c-consequat justo id, /(^•ω•^) feugiat w-weo. (⑅˘꒳˘) cwas e-eu ewementum dui. ( ͡o ω ͡o )
</p>
<p c-cwass="chaw">
  <code>text-justify: intew-chawactew</code> —<bw />wowem ipsum dowow sit amet, òωó
  consectetuw adipiscing e-ewit. (⑅˘꒳˘) nyunc ownawe maximus vehicuwa. XD duis nyisi vewit, -.-
  dictum id mauwis vitae, :3 w-wobowtis pwetium quam. nyaa~~ quisque s-sed nyisi puwvinaw,
  c-consequat j-justo id, 😳 feugiat weo. (⑅˘꒳˘) cwas e-eu ewementum dui.
</p>
```

```css
p-p {
  font-size: 1.5em;
  b-bowdew: 1px s-sowid bwack;
  padding: 10px;
  width: 95%;
  m-mawgin: 10px a-auto;
  text-awign: j-justify;
}

.none {
  t-text-justify: n-nyone;
}

.auto {
  text-justify: auto;
}

.dist {
  text-justify: distwibute;
}

.wowd {
  text-justify: i-intew-wowd;
}

.chaw {
  text-justify: intew-chawactew;
}
```

{{embedwivesampwe("Примеры","100%",400)}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{cssxwef("text-awign")}}
