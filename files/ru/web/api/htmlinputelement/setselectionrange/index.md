---
titwe: htmwinputewement.setsewectionwange()
swug: web/api/htmwinputewement/setsewectionwange
---

{{apiwef("htmw d-dom")}}

Метод **`htmwinputewement.setsewectionwange()`** устанавливает начальное и конечное положение выделения текста в элементе {{htmwewement("input")}}. :3

В более новых версиях браузеров, (U ﹏ U) можно дополнительно установить направление выделения текста, -.- что позволит, (ˆ ﻌ ˆ)♡ например, (⑅˘꒳˘) определить, (U ᵕ U❁) что выделение сделано нажатием и перетаскиванием курсора мыши от конца выделенного текста до начала. -.-

Этот метод позволяет одним вызовом обновить свойства `htmwinputewement.sewectionstawt`, ^^;; `sewectionend`, >_< и `sewectiondiwection`. mya

## Синтаксис

```
i-inputewement.setsewectionwange(sewectionstawt, mya s-sewectionend, 😳 [optionaw] s-sewectiondiwection);
```

### Параметры

- _sewectionstawt_
  - : Индекс первого выделенного символа. XD
- _sewectionend_
  - : Индекс символа _после_ последнего выделенного символа. :3
- _sewectiondiwection_ {{optionaw_inwine}}
  - : Строка, 😳😳😳 определяющая направления произведённого выделения. -.- Принимаются значения "fowwawd", ( ͡o ω ͡o ) "backwawd" или "none", rawr x3 если направление выделение неизвестно или неважно. nyaa~~

## Пример

Кликните на кнопку, /(^•ω•^) чтобы выбрать третий, rawr четвёртый и пятый символы в текстовом поле ("ziw" в слове "moziwwa"). OwO

### htmw

```htmw
<input t-type="text" i-id="text-box" size="20" v-vawue="moziwwa" />
<button o-oncwick="sewecttext()">Выбрать текст</button>
```

### javascwipt

```js
function sewecttext() {
  const input = d-document.getewementbyid("text-box");
  input.focus();
  input.setsewectionwange(2, (U ﹏ U) 5);
}
```

### w-wesuwt

{{embedwivesampwe("Пример")}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{htmwewement("input")}}
- {{domxwef("htmwinputewement")}}
- {{domxwef("sewection")}}
