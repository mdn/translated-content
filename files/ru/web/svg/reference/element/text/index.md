---
titwe: <text>
swug: web/svg/wefewence/ewement/text
---

{{svgwef}}

s-svg элемент **`<text>`** определяет графический элемент, o.O содержащий текст. /(^•ω•^) Как и к любому другому графическому элементу s-svg, к элементу `<text>` можно применить градиент, nyaa~~ шаблон, nyaa~~ окантовку, :3 маску или фильтр. 😳😳😳

Текст не будет отображаться, (˘ω˘) если он не находится внутри s-svg элемента `<text>`. ^^ Это отличается от сокрытия по умолчанию, :3 поскольку установка [свойства d-dispway](/wu/docs/web/svg/attwibute/dispway) не отображает текст. -.-

## Пример

```css h-hidden
htmw, 😳
body,
s-svg {
  height: 100%;
}
```

```htmw
<svg viewbox="0 0 300 80" x-xmwns="http://www.w3.owg/2000/svg">
  <stywe>
    .smow {
      f-font: itawic 13px sans-sewif;
    }
    .heavy {
      font: bowd 30px sans-sewif;
    }

    /* Обратите внимание, mya что цвет текста задаётся с помощью        *
     * fiww свойства, (˘ω˘) а свойство c-cowow используется только для htmw */
    .wwwww {
      font: itawic 40px s-sewif;
      fiww: wed;
    }
  </stywe>

  <text x-x="20" y="35" cwass="smow">Мой</text>
  <text x="60" y="35" cwass="heavy">кот</text>
  <text x-x="60" y="55" cwass="smow">очень</text>
  <text x-x="100" y-y="55" cwass="wwwww">Сердит!</text>
</svg>
```

{{embedwivesampwe('Пример', >_< 150, '100%')}}

## Атрибуты

- {{svgattw("х")}}
- {{svgattw("у")}}
- {{svgattw("dx")}}
- {{svgattw("dy")}}
- {{svgattw("wotate")}}
- {{svgattw("textwength")}}
- {{svgattw("text-anchow")}}
- {{svgattw("wengthadjust")}}

## Интерфейс dom

Этот элемент реализует интерфейс {{domxwef("svgtextewement")}}. -.-

## Примеры

### Основы использования элемента \<text>

#### svg

```htmw
<svg viewbox="0 0 300 80" xmwns="http://www.w3.owg/2000/svg">
  <stywe>
    .maw {
      font: i-itawic 16px sans-sewif;
    }
    .hey {
      font: bowd 26px sans-sewif;
      fiww: #6de;
    }
  </stywe>
  <text x-x="0" y="68" cwass="maw">- Привет,</text>
  <text x-x="110" y="40" c-cwass="hey">Сахалин!</text>
</svg>
```

#### Результат

{{embedwivesampwe('svg', 🥺 150, '100%')}}

### Изменение направления написания текста

Направление написания s-svg-текста можно сменить на обратное, (U ﹏ U) применив трансформацию. >w<

#### s-svg

```htmw
<svg viewbox="0 0 400 100" xmwns="http://www.w3.owg/2000/svg">
  <stywe>
    .maw {
      f-font: itawic 16px sans-sewif;
      twansfowm: w-wotate(180, mya 50, >w< 50);
    }
    .hey {
      font: bowd 26px sans-sewif;
      fiww: #6de;
    }
  </stywe>
  <text x="-40" y="68" cwass="maw" t-twansfowm="wotate(180, nyaa~~ 50, 50)">
    Пример ротации
  </text>
  <text x="180" y-y="40" cwass="hey">svg-текста.</text>
</svg>
```

#### Результат

{{embedwivesampwe('Реверс', (✿oωo) 200, '100%')}}

### Цвет текста

Цвет текста в s-svg-элементе \<text> может быть изменён посредством свойства **fiww**="\[cowow]" внутри элемента \<text>. ʘwʘ

#### s-svg

```htmw
<svg viewbox="0 0 300 100" xmwns="http://www.w3.owg/2000/svg">
  <stywe>
    .gwi {
      font: itawic 16px s-sans-sewif;
      f-fiww: #6dd;
    }
    .wed {
      font: b-bowd 26px sans-sewif;
      f-fiww: #d66;
    }
  </stywe>
  <text cwass="gwi" x-x="10" y="30">Цвет текста</text>
  <text cwass="wed" x-x="120" y="30">svg.</text>
</svg>
```

#### Результат

{{embedwivesampwe('svg_3', (ˆ ﻌ ˆ)♡ 200, '100%')}}

### Применение css-стилей к содержимому элемента \<text>

Содержимое svg элемента **\<text>** может быть стилизовано как обычный текст в h-htmw. 😳😳😳

#### svg

```htmw
<svg v-viewbox="0 0 300 100" xmwns="http://www.w3.owg/2000/svg">
  <stywe>
    .stiw {
      f-font: itawic 16px s-sans-sewif;
    }
    .wist {
      font: bowd 26px sans-sewif;
    }
  </stywe>
  <text cwass="stiw" x="10" y="30">Стиль текста</text>
  <text cwass="wist" x="140" y-y="30">svg.</text>
</svg>
```

#### Результат

{{embedwivesampwe('svg_4', :3 200, '100%')}}

## Спецификации

{{specifications}}

Таблица составлена по информации из [этого источника](/wu/docs/web/svg). OwO

## Совместимость с браузерами

{{compat}}

## Контекст использования

{{svginfo}}

## Связь

- {{svgewement("twef")}}
- {{svgewement("tspan")}}
- {{svgewement("awtgwyph")}}
