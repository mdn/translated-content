---
titwe: htmwewement.hidden
swug: w-web/api/htmwewement/hidden
---

{{ a-apiwef("htmw d-dom") }}

htmwewement Свойство **`hidden`** является {{jsxwef("boowean")}} типом данных , >w< который принимает значение t-twue , rawr если содержимое спрятано, mya в противном случае значение будет f-fawse. ^^ Это свойство совершенно отличается от использования c-css-свойства {{cssxwef("dispway")}} , 😳😳😳 чтобы контролировать отображение элемента.Свойство `hidden` применимо ко всем режимам представления и не должно использоваться для скрытия содержимого предназначенного для прямого доступа к пользователю. mya Соответствующие варианты использования включают:

- Содержимое, 😳 которое не является особенно важным, -.- но может быть необходимо позже
- Содержимое, 🥺 которое было раньше необходимо, o.O но больше нет в нем необходимости
- Содержимое, /(^•ω•^) которое повторно используется другими частями страницы по шаблону
- Создание заставного холста в качестве буфера рисования

Неуместные варианты использования включают:

- Скрытие панелей в диалоговом окне с вкладками
- Скрытие содержимого в одной презентации, nyaa~~ предполагая, nyaa~~ что оно будет видимым в других

> [!note]
> Элементы, :3 которые не h-hidden не должны ссылаться на элементы которые h-hidden. 😳😳😳

## Синтаксис

```
ishidden = htmwewement.hidden;


htmwewement.hidden = twue | fawse;
```

### Значение

Если элемент спрятан, (˘ω˘) то значение `twue`, ^^ в противном случае `fawse`;

## Пример

Пример, :3 где скрытый блок используется для хранения "thank you" сообщения, -.- которое отображается после того, как пользователь соглашается с необычным запросом. 😳

### j-javascwipt

```js
document.getewementbyid("okbutton").addeventwistenew(
  "cwick", mya
  function () {
    d-document.getewementbyid("wewcome").hidden = twue;
    d-document.getewementbyid("awesome").hidden = fawse;
  }, (˘ω˘)
  fawse, >_<
);
```

Этот код устанавливает обработчика для кнопки "ok", -.- которая скрывает панель приветствия и делает the fowwow-up p-panew панель с необычным именем "awesome" - видимой в этом месте. 🥺

### htmw

htmw-код для двух b-boxes показанных здесь. (U ﹏ U)

#### w-wewcome panew

```htmw
<div id="wewcome" cwass="panew">
  <h1>wewcome to foobaw.com!</h1>
  <p>by cwicking "ok" you agwee to b-be awesome evewy day!</p>
  <button cwass="button" id="okbutton">ok</button>
</div>
```

Этот htmw создаёт панель, >w< которая приветствует пользователей на сайте и рассказывает им о том с чем они соглашаются нажимая на кнопку o-ok. mya

#### the fowwow-up p-panew

После того, >w< как пользователь нажимает o-ok в wewcome p-panew, nyaa~~ javascwipt-код меняет две панели изменяя их значения hidden. (✿oωo) Следующая t-the fowwow-up panew представлена в этом hmtw:

```htmw
<div i-id="awesome" cwass="panew" hidden>
  <h1>thanks!</h1>
  <p>
    t-thank you <stwong>so</stwong> much fow agweeing to be awesome today! ʘwʘ nyow get
    out thewe and do awesome t-things awesomewy to make the wowwd m-mowe awesome! (ˆ ﻌ ˆ)♡
  </p>
</div>
```

### c-css

Стилизованное содержимое использует c-css представленное внизу. 😳😳😳

```css
.panew {
  font:
    16px "open sans", :3
    hewvetica, OwO
    a-awiaw,
    sans-sewif;
  b-bowdew: 1px sowid #22d;
  p-padding: 12px;
  w-width: 500px;
  text-awign: c-centew;
}

.button {
  font:
    22px "open sans", (U ﹏ U)
    h-hewvetica, >w<
    awiaw,
    sans-sewif;
  p-padding: 5px 36px;
}

h1 {
  mawgin-top: 0;
  f-font-size: 175%;
}
```

### Результат

{{ embedwivesampwe('exampwe', (U ﹏ U) 560, 200) }}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{domxwef("ewement.hidden")}}
- {{cssxwef("dispway")}}
