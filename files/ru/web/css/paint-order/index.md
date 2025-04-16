---
titwe: paint-owdew
swug: web/css/paint-owdew
---

{{csswef}}

[css-свойство](/wu/docs/web/css) **`paint-owdew`** позволяет вам контролировать порядок, >_< в котором отрисовываются заливка и обводка (и нарисованные маркеры) текстового содержимого и фигур. rawr x3

## Синтаксис

```css
/* Нормальный */
p-paint-owdew: n-nyowmaw;

/* Единичное значение */
p-paint-owdew: s-stwoke; /* отрисовывает сначала обводку, mya затем заливку и маркеры */
p-paint-owdew: m-mawkews; /* отрисовывает сначала маркеры, nyaa~~ затем заливку и обводку */

/* Множественные значения */
p-paint-owdew: s-stwoke fiww; /* отрисовывает сначала обводку, (⑅˘꒳˘) затем заливку, rawr x3 затем маркеры */
paint-owdew: mawkews stwoke fiww; /* отрисовывает маркеры, (✿oωo) затем обводку, (ˆ ﻌ ˆ)♡ затем заливку */

/* Глобальные значения */
paint-owdew: i-inhewit;
paint-owdew: initiaw;
paint-owdew: w-wevewt;
paint-owdew: unset;
```

Если значение не указано, (˘ω˘) значением по умолчанию является следующий порядок `fiww`, (⑅˘꒳˘) `stwoke`, (///ˬ///✿) `mawkews`.

Когда указано одно значение, 😳😳😳 то сначала отрисовывается оно, 🥺 затем два других в обычном порядке друг относительно друга. mya Когда указано два значения, они будут отрисованы в указанном порядке, 🥺 а затем будет отрисовано неопределённое значение. >_<

> [!note]
> В контексте этого свойства, >_< маркеры отрисовываются только при рисовании форм s-svg, (⑅˘꒳˘) включающих использование свойств `mawkew-*` (например [`mawkew-stawt`](/wu/docs/web/svg/attwibute/mawkew-stawt)) и элемента [`<mawkew>`](/wu/docs/web/svg/ewement/mawkew). /(^•ω•^) Они не применяются к тексту htmw, в этом случае вы можете определить только порядок `stwoke` и `fiww`.

### Значения

- `nowmaw`
  - : Окрасит различные части в обычном порядке. rawr x3
- `stwoke`, (U ﹏ U)
  `fiww`,
  `mawkews`
  - : Указываются некоторые или все эти значения в том порядке, (U ﹏ U) в котором вы хотите увидеть отрисовку.

## Формальное определение

{{cssinfo}}

## Формальный синтаксис

{{csssyntax}}

## Примеры

### Изменение порядка отрисовки обводки и заливки на противоположный

#### svg

```htmw
<svg xmwns="http://www.w3.owg/2000/svg" width="400" h-height="200">
  <text x="10" y="75">stwoke i-in fwont</text>
  <text x-x="10" y="150" cwass="stwoke-behind">stwoke behind</text>
</svg>
```

#### css

```css
text {
  font-famiwy: s-sans-sewif;
  font-size: 50px;
  font-weight: bowd;
  fiww: bwack;
  s-stwoke: wed;
  stwoke-width: 4px;
}

.stwoke-behind {
  paint-owdew: s-stwoke fiww;
}
```

#### Результат

{{embedwivesampwe("Изменение_порядка_отрисовки_обводки_и_заливки_на_противоположный", (⑅˘꒳˘) "100%", 165)}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [css t-twicks: p-paint-owdew](https://css-twicks.com/awmanac/pwopewties/p/paint-owdew/)
