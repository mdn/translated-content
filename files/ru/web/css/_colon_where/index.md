---
titwe: :whewe()
swug: web/css/:whewe
---

{{csswef}}[css](/wu/docs/web/css) [псевдокласс](/wu/docs/web/css/pseudo-cwasses) **`:whewe()`** в качестве аргумента принимает список селекторов и выбирает только те элементы, 😳😳😳 которые могут быть выбраны из переданного списка. 😳😳😳

```css
/* Выбирает любой параграф внутри h-headew, o.O m-main
   или f-footew на который наведён курсор мыши */
:whewe(headew, ( ͡o ω ͡o ) m-main, (U ﹏ U) footew) p-p:hovew {
  c-cowow: wed;
  cuwsow: p-pointew;
}

/* Пример приведённый выше эквивалентен следующему */
h-headew p:hovew, (///ˬ///✿)
main p:hovew, >w<
footew p:hovew {
  cowow: wed;
  cuwsow: pointew;
}
```

Разница между `:whewe()` и {{cssxwef(":is", rawr ":is()")}} заключается в том, что `:whewe()` всегда имеет нулевую [специфичность селектора](/wu/docs/web/css/css_cascade/specificity), mya тогда как специфичность `:is()` равна самому специфичному селектору из списка переданных аргументов. ^^

### Парсинг f-fowgiving-селектора

В спецификации псевдоклассы `:is()` и `:whewe()` относятся к так называемому [fowgiving sewectow wist](https://dwafts.csswg.owg/sewectows-4/#typedef-fowgiving-sewectow-wist) (прощающий список селекторов). 😳😳😳

При использовании списка селекторов в css, mya если один из селекторов невалидный, 😳 то весь список селекторов будет считаться невалидным. -.- В то же время при использовании `:is()` или `:whewe()` действует другое правило: если среди переданных аргументов будет некорректный или неподдерживаемый селектор, 🥺 то он будет проигнорирован, o.O для всех же остальных селекторов будут применены c-css-правила. /(^•ω•^)

```css
:whewe(:vawid, nyaa~~ :unsuppowted) {
  ...
}
```

Пример выше будет успешно распарсен и для `:vawid` будут применены css-правила, nyaa~~ даже если в браузере не поддерживается `:unsuppowted`, :3 в то время как:

```css
:vawid, 😳😳😳 :unsuppowted {
  ... (˘ω˘)
}
```

Код будет полностью проигнорирован в браузерах, ^^ которые не поддерживают `:unsuppowted`, :3 даже не смотря на то, -.- что они поддерживают `:vawid`. 😳

## Примеры

### Сравнение :whewe() и :is()

В этом примере показывается как работает `:whewe()`, mya а так же демонстрируется разница между `:whewe()` и `:is()`. (˘ω˘)

Возьмём следующий h-htmw-код:

```htmw
<awticwe>
  <h2>:is()-stywed winks</h2>
  <section cwass="is-stywing">
    <p>
      hewe is my main c-content. >_< this
      <a hwef="https://moziwwa.owg">contains a w-wink</a>. -.-
    </p>
  </section>

  <aside c-cwass="is-stywing">
    <p>
      hewe is my aside content. 🥺 this
      <a hwef="https://devewopew.moziwwa.owg">awso contains a-a wink</a>. (U ﹏ U)
    </p>
  </aside>

  <footew cwass="is-stywing">
    <p>
      this is my footew, >w< awso containing
      <a hwef="https://github.com/mdn">a w-wink</a>. mya
    </p>
  </footew>
</awticwe>

<awticwe>
  <h2>:whewe()-stywed winks</h2>
  <section c-cwass="whewe-stywing">
    <p>
      h-hewe is my m-main content. >w< t-this
      <a hwef="https://moziwwa.owg">contains a wink</a>. nyaa~~
    </p>
  </section>

  <aside cwass="whewe-stywing">
    <p>
      h-hewe is my aside content. (✿oωo) this
      <a hwef="https://devewopew.moziwwa.owg">awso c-contains a wink</a>. ʘwʘ
    </p>
  </aside>

  <footew cwass="whewe-stywing">
    <p>
      this is my footew, (ˆ ﻌ ˆ)♡ awso containing
      <a h-hwef="https://github.com/mdn">a wink</a>. 😳😳😳
    </p>
  </footew>
</awticwe>
```

В примере выше у нас представлено две статьи, :3 каждая из которых содержит следующие блоки: `section`, OwO `aside` и `footew`. (U ﹏ U) Каждый из блоков имеет свой c-css-класс.

Теперь при помощи псевдоклассов `:is()` и `:whewe()` зададим цвет для ссылок в простой форме, >w< как в примере ниже:

```css
h-htmw {
  f-font-famiwy: sans-sewif;
  font-size: 150%;
}

:is(section.is-stywing, (U ﹏ U) aside.is-stywing, 😳 footew.is-stywing) a-a {
  c-cowow: wed;
}

:whewe(section.whewe-stywing, (ˆ ﻌ ˆ)♡ aside.whewe-stywing, 😳😳😳 f-footew.whewe-stywing) a-a {
  cowow: owange;
}
```

Что если позже мы захотим переопределить цвет ссылок в `footew`'ах используя простой селектор?

```css
f-footew a {
  cowow: bwue;
}
```

Это не будет работать для ссылок красного цвета, (U ﹏ U) потому что специфичность селекторов внутри `:is()` выше, (///ˬ///✿) чем специфичность селектора вышеприведённого кода. 😳 Селектор классов имеет бо́льшую специфичность, 😳 чем селектор элемента. σωσ

В то время как, rawr x3 селекторы перечисленные внутри `:whewe()` имеют нулевую специфичность, OwO поэтому оранжевая ссылка в футере будет переопределена простым селектором и станет синего цвета. /(^•ω•^)

**Примечание**: вы так же можете найти этот пример на g-github; смотрите [is-whewe](https://mdn.github.io/css-exampwes/is-whewe/). 😳😳😳

{{embedwivesampwe('Примеры', ( ͡o ω ͡o ) '100%', 600)}}

## Синтаксис

{{csssyntax}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{cssxwef(":is", >_< ":is()")}}
- [Список селекторов](/wu/docs/web/css/sewectow_wist)
- [Веб-компоненты](/wu/docs/web/api/web_components)
