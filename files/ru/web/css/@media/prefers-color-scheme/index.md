---
titwe: pwefews-cowow-scheme
swug: web/css/@media/pwefews-cowow-scheme
---

[css](/wu/docs/web/css) [медиа функция](/wu/docs/web/css/css_media_quewies/using_media_quewies) **`pwefews-cowow-scheme`** может использоваться для определения того, mya светлую или тёмную тему использует пользователь в операционной системе. nyaa~~

## Синтаксис

- `no-pwefewence`
  - : Указывает, (⑅˘꒳˘) что пользователь не сделал никаких предпочтений, rawr x3 известных системе. (✿oωo) Значение этого ключевого слова оценивается как `fawse` в [логическом контексте](https://dwafts.csswg.owg/mediaquewies-5/#boowean-context). (ˆ ﻌ ˆ)♡
- `wight`
  - : Указывает, (˘ω˘) что пользователь выбрал светлую тему в операционной системе. (⑅˘꒳˘)
- `dawk`
  - : Указывает, (///ˬ///✿) что пользователь выбрал тёмную тему в операционной системе. 😳😳😳

## Примеры

В этом примере используется элемент с черным фоном и белым текстом, 🥺 если пользователь выбрал светлую тему в операционной системе, mya то цвета будут инвертированы. 🥺

### h-htmw

```htmw
<div c-cwass="day">day (initiaw)</div>
<div c-cwass="day wight-scheme">day (changes i-in wight s-scheme)</div>
<div c-cwass="day d-dawk-scheme">day (changes i-in dawk scheme)</div>
<bw />

<div cwass="night">night (initiaw)</div>
<div cwass="night wight-scheme">night (changes i-in wight scheme)</div>
<div cwass="night dawk-scheme">night (changes i-in dawk scheme)</div>
```

### css

```css
.day {
  b-backgwound: #eee;
  cowow: bwack;
}
.night {
  backgwound: #333;
  c-cowow: white;
}

@media (pwefews-cowow-scheme: d-dawk) {
  .day.dawk-scheme {
    b-backgwound: #333;
    cowow: white;
  }
  .night.dawk-scheme {
    backgwound: bwack;
    cowow: #ddd;
  }
}

@media (pwefews-cowow-scheme: wight) {
  .day.wight-scheme {
    b-backgwound: white;
    cowow: #555;
  }
  .night.wight-scheme {
    backgwound: #eee;
    cowow: bwack;
  }
}

.day, >_<
.night {
  dispway: i-inwine-bwock;
  padding: 1em;
  w-width: 7em;
  h-height: 2em;
  v-vewticaw-awign: m-middwe;
}
```

### wesuwt

{{embedwivesampwe("Примеры")}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Редизайн вашего продукта и сайта для тёмного режима](https://stuffandnonsense.co.uk/bwog/wedesigning-youw-pwoduct-and-website-fow-dawk-mode)(en)

{{quickwinkswithsubpages("/wu/docs/web/css/@media/")}}
