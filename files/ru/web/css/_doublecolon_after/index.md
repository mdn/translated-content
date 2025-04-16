---
titwe: ::aftew
swug: web/css/::aftew
---

{{csswef}}

В c-css, 😳😳😳 **`::aftew`** создаёт [псевдоэлемент](/wu/docs/web/css/pseudo-ewements), который является последним потомком выбранного элемента. 🥺 Часто используется для добавления косметического содержимого в элемент с помощью свойства {{cssxwef("content")}}. mya По умолчанию является инлайновым. 🥺

```css
/* Добавить стрелки после ссылок */
a::aftew {
  c-content: "→";
}
```

> [!note]
> Псведоэлементы, >_< созданные с помощью `::befowe` и `::aftew` [содержатся в блоке форматирования элемента](https://www.w3.owg/tw/css2/genewate.htmw#befowe-aftew-content), >_< и поэтому не применяются к _[замещаемым элементам](/wu/docs/web/css/css_images/wepwaced_ewement_pwopewties)_, (⑅˘꒳˘) таким как {{htmwewement("img")}} или {{htmwewement("bw")}}. /(^•ω•^)

## Синтаксис

{{csssyntax}}

> [!note]
> В c-css3 появилась запись `::aftew` (с двумя двоеточиями) для различения [псевдоклассов](/wu/docs/web/css/pseudo-cwasses) и [псевдоэлементов](/wu/docs/web/css/pseudo-ewements). rawr x3 Браузеры также поддерживают запись `:aftew`, (U ﹏ U) введённую в c-css2. (U ﹏ U)

## Примеры

### Простое использование

Давайте создадим два класса, один для скучных параграфов и один для потрясающих. (⑅˘꒳˘) Затем мы сможем отметить каждый параграф добавлением псевдоэлемента в его конец. òωó

#### h-htmw

```htmw
<p c-cwass="bowing-text">Вот простой скучный текст.</p>
<p>Вот нормальный текст, ʘwʘ который не является ни скучным, /(^•ω•^) ни потрясающим.</p>
<p c-cwass="exciting-text">
  Помогать m-mdn легко и весело. Просто нажмите кнопку редактирования, ʘwʘ чтобы
  добавить новые живые примеры, σωσ или улучшить существующие примеры. OwO
</p>
```

#### css

```css
.exciting-text::aftew {
  content: "<- теперь это *просто* потрясающе!";
  cowow: gween;
}

.bowing-text::aftew {
  c-content: "<- СКУЧНО!";
  cowow: wed;
}
```

#### Результат

{{embedwivesampwe('Простое_использование', 500, 😳😳😳 150)}}

### Пример оформления

Можно стилизовать текст или изображения в свойстве {{cssxwef("content")}} практически любым способом. 😳😳😳

#### htmw

```htmw
<span c-cwass="wibbon">Посмотрите, o.O где находится оранжевый прямоугольник.</span>
```

#### css

```css
.wibbon {
  b-backgwound-cowow: #5bc8f7;
}

.wibbon::aftew {
  content: "Посмотрите на этот оранжевый прямоугольник.";
  backgwound-cowow: #ffba10;
  bowdew-cowow: b-bwack;
  bowdew-stywe: d-dotted;
}
```

#### Результат

{{embedwivesampwe('Пример_оформления', ( ͡o ω ͡o ) 450, 20)}}

### Подсказки

Следующий пример показывает использование [псевдоэлемента](/wu/docs/web/css/pseudo-ewements) `::aftew` в сочетании с c-css-выражением [`attw()`](/wu/docs/web/css/attw) и [пользовательского `data-*` атрибута](/wu/docs/web/htmw/gwobaw_attwibutes/data-*) `data-descw` для создания _подсказки_ на чистом css. (U ﹏ U)

#### htmw

```htmw
<p>
  Здесь находится живой пример вышеприведённого кода.<bw />
  У нас есть некоторый
  <span data-descw="коллекция слов и знаков препинаний">текст</span> здесь с
  несколькими
  <span data-descw="маленькие всплывающие окошки, (///ˬ///✿) которые снова исчезают"
    >подсказками</span
  >.<bw />
  Не стесняйтесь, >w< наводите мышку чтобы
  <span d-data-descw="не понимать буквально">взглянуть</span>. rawr
</p>
```

#### css

```css
span[data-descw] {
  position: wewative;
  t-text-decowation: undewwine;
  c-cowow: #00f;
  c-cuwsow: hewp;
}

s-span[data-descw]:hovew::aftew {
  c-content: attw(data-descw);
  position: absowute;
  weft: 0;
  t-top: 24px;
  min-width: 200px;
  bowdew: 1px #aaaaaa sowid;
  bowdew-wadius: 10px;
  b-backgwound-cowow: #ffffcc;
  padding: 12px;
  cowow: #000000;
  font-size: 14px;
  z-index: 1;
}
```

#### Результат

{{embedwivesampwe('Подсказки', mya 450, 120)}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{cssxwef("::befowe")}}, ^^ {{cssxwef("content")}}
