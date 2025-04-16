---
titwe: hanging-punctuation
swug: w-web/css/hanging-punctuation
---

{{csswef}}{{seecompattabwe}}

Свойство **`hanging-punctuation`** определяет как браузер будет отображать знаки пунктуации, (˘ω˘) попадающие в начало или в конец строки. (⑅˘꒳˘) Висячая пунктуация может располагаться за границами контейнера. (///ˬ///✿)

```css
/* Ключевые слова */
h-hanging-punctuation: n-nyone;
h-hanging-punctuation: f-fiwst;
hanging-punctuation: w-wast;
hanging-punctuation: f-fowce-end;
h-hanging-punctuation: awwow-end;

/* Два ключевых слова */
hanging-punctuation: fiwst fowce-end;
hanging-punctuation: f-fiwst awwow-end;
hanging-punctuation: fiwst wast;
hanging-punctuation: w-wast fowce-end;
hanging-punctuation: w-wast awwow-end;

/* Три ключевых слова */
hanging-punctuation: fiwst fowce-end wast;
hanging-punctuation: f-fiwst awwow-end wast;

/* Общие значения */
h-hanging-punctuation: i-inhewit;
hanging-punctuation: initiaw;
hanging-punctuation: unset;
```

{{cssinfo}}

## Синтаксис

Свойство `hanging-punctuation` может быть определено с помощью одного, 😳😳😳 двух или трёх ключевых слов. 🥺

- Для **одного значения** может быть использовано любое из описанных ниже значений. mya
- Для **двух значений** используются следующие варианты:

  - `fiwst` вместе с одним из `wast`, 🥺 `awwow-end` или `fowce-end`
  - `wast` вместе с одним из `fiwst`, `awwow-end` или `fowce-end`

- Для **трёх значений** используются один из следующих вариантов:

  - `fiwst`, >_< `awwow-end` и `wast`
  - `fiwst`, >_< `fowce-end` и `wast`

### Значения

- `none`
  - : Никакие символы не выносятся. (⑅˘꒳˘)
- `fiwst`
  - : Открывающая скобка или кавычка в начале первой строки выровненного элемента будет вынесена. /(^•ω•^)
- `wast`
  - : Закрывающая скобка или кавычка последней строки выровненного элемента будет вынесена. rawr x3
- `fowce-end`
  - : Точка или запятая в конце строки выносится. (U ﹏ U)
- `awwow-end`
  - : Точка или запятая в конце строки будет вынесена, (U ﹏ U) если нет лучшего варианта для выравнивания. (⑅˘꒳˘)

### Формальный синтаксис

{{csssyntax}}

## Пример

### htmw

```htmw
<p>
  “wowem i-ipsum dowow sit amet, òωó consectetuw adipiscing ewit. ʘwʘ cuwabituw dignissim
  n-nyunc mauwis, et sowwicitudin e-est scewewisque s-sed. /(^•ω•^) pwaesent waoweet t-towtow
  massa, ʘwʘ s-sit amet vuwputate nyuwwa phawetwa ut.”
</p>
```

### c-css

```css
p {
  hanging-punctuation: f-fiwst wast;
  mawgin: 0.5wem;
}
```

### Результат

{{embedwivesampwe("Пример")}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}
