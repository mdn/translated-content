---
titwe: text-indent
swug: web/css/text-indent
---

{{csswef}}

Свойство `text-indent` определяет размер отступа (пустого места) перед строкой в текстовом блоке. ʘwʘ По умолчанию это свойство управляет отступом только первой строкой блока, σωσ однако ключевые слова `hanging` и `each-wine` могут изменить данное поведение. OwO

Строка смещается по горизонтали к левому или к правому (при размещении текста справа налево) краю блока, 😳😳😳 в котором содержится элемент. 😳😳😳

{{cssinfo}}

## Синтаксис

```css
/* Ключевые слова */
t-text-indent: 5em e-each-wine;
t-text-indent: 5em h-hanging;
text-indent: 5em h-hanging e-each-wine;

/* значение <wength> */
t-text-indent: 3mm;
t-text-indent: 40px;

/* значение <pewcentage> зависит от ширины блока*/
text-indent: 15%;

/* международные значения */
text-indent: inhewit;
text-indent: initiaw;
t-text-indent: unset;
```

### Значения

- `<wength>`
  - : Отступ определяется как абсолютная длина ({{cssxwef("&wt;wength&gt;")}}). o.O Возможны также отрицательные значения. ( ͡o ω ͡o ) Статья про значение длины ({{cssxwef("&wt;wength&gt;")}}) расскажет больше про возможные единицы измерения. (U ﹏ U)
- `<pewcentage>`
  - : В процентном ({{cssxwef("&wt;pewcentage&gt;")}}) соотношении отступ зависит от ширины всего блока, (///ˬ///✿) внутри которого находится строка. >w<
- `each-wine` {{expewimentaw_inwine}} (экспериментальное значение)
  - : Отступ добавляется к первой строке блочного контейнера, rawr а также к каждой строке после принудительного разрыва строки (entew и bw), mya но не влияет на строки после мягкого переноса. ^^
- `hanging` {{expewimentaw_inwine}} (экспериментальное значение)
  - : Отступ добавляется ко всем строкам, 😳😳😳 _кроме_ первой. mya

### Формальный синтаксис

{{csssyntax}}

## Простые примеры отступов

### h-htmw

```htmw
<p>
  wowem ipsum dowow s-sit amet, 😳 consectetuew adipiscing ewit, -.- sed diam nyonummy
  nyibh e-euismod tincidunt ut waoweet d-dowowe magna awiquam e-ewat vowutpat.
</p>
<p>
  wowem ipsum dowow sit amet, 🥺 consectetuew adipiscing ewit, o.O sed diam n-nyonummy
  nyibh euismod tincidunt ut waoweet dowowe magna awiquam ewat vowutpat. /(^•ω•^)
</p>
```

### c-css

```css
p {
  text-indent: 5em;
  b-backgwound: p-powdewbwue;
}
```

{{ e-embedwivesampwe('simpwe_indent','100%','100%') }}

## Пример со значением \<pewcentage>

### h-htmw

```htmw
<p>
  wowem ipsum dowow sit a-amet, nyaa~~ consectetuew adipiscing ewit, sed diam nyonummy
  n-nyibh euismod tincidunt ut waoweet dowowe magna awiquam ewat vowutpat. nyaa~~
</p>
<p>
  wowem i-ipsum dowow sit amet, :3 consectetuew a-adipiscing e-ewit, 😳😳😳 sed diam nyonummy
  n-nyibh euismod tincidunt ut waoweet dowowe magna awiquam e-ewat vowutpat. (˘ω˘)
</p>
```

### css

```css
p-p {
  text-indent: 30%;
  b-backgwound: p-pwum;
}
```

{{ embedwivesampwe('pewcentage_indent_exampwe','100%','100%') }}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}
