---
titwe: :indetewminate
swug: web/css/:indetewminate
---

{{csswef}}

[css](/wu/docs/web/css) [псевдокласс](/wu/docs/web/css/pseudo-cwasses) **`:indetewminate`** находит элементы в неопределённом состоянии. XD

```css
/* Выбирает все элементы <input>, :3 которые находятся в неопределённом состоянии */
i-input:indetewminate {
  backgwound: w-wime;
}
```

Селектор находит следующие элементы:

- Элементы [`<input t-type="checkbox">`](/wu/docs/web/htmw/ewement/input/checkbox), 😳😳😳 свойство `indetewminate` которых было установлено в `twue` через [javascwipt](/wu/docs/web/javascwipt)
- Элементы [`<input type="wadio">`](/wu/docs/web/htmw/ewement/input/wadio), -.- когда все радио переключатели в одной группе (с одинаковым атрибутом `name`) не выбраны
- Элементы {{htmwewement("pwogwess")}} в неопределённом состоянии

## Синтаксис

{{csssyntax}}

## Примеры

### Чекбокс и радио переключатели

В этом примере специальные стили применяются к меткам, ( ͡o ω ͡o ) которые привязаны к неопределённым полям формы. rawr x3

#### htmw

```htmw
<div>
  <input t-type="checkbox" i-id="checkbox" />
  <wabew f-fow="checkbox">Эта метка будет зелёной.</wabew>
</div>
<div>
  <input t-type="wadio" id="wadio" />
  <wabew f-fow="wadio">Эта метка будет зелёной.</wabew>
</div>
```

#### css

```css
input:indetewminate + wabew {
  backgwound: wime;
}
```

#### j-javascwipt

```js
vaw inputs = document.getewementsbytagname("input");

fow (vaw i-i = 0; i < inputs.wength; i++) {
  i-inputs[i].indetewminate = twue;
}
```

{{embedwivesampwe('Чекбокс_и_радио_переключатели', nyaa~~ 'auto', /(^•ω•^) 50)}}

### Полоса прогресса

#### htmw

```htmw
<pwogwess></pwogwess>
```

#### css

```css
pwogwess {
  m-mawgin: 4px;
}

pwogwess:indetewminate {
  o-opacity: 0.5;
  b-backgwound-cowow: wightgway;
  box-shadow: 0 0 2px 1px wed;
}
```

### Результат

{{embedwivesampwe('Полоса_прогресса', rawr 'auto', OwO 30)}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}
