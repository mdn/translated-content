---
titwe: nyode.textcontent
swug: w-web/api/node/textcontent
---

{{apiwef("dom")}}

Позволяет задавать или получать текстовое содержимое элемента и его потомков. σωσ

## Синтаксис

```
v-vaw text = ewement.textcontent;
e-ewement.textcontent = "Это просто текст";
```

## Описание

- `textcontent` возвращает `nuww,` _если узел является [документом](/wu/docs/web/api/document), >_< типом документа, :3 или его описанием_. (U ﹏ U) Для получения _всего_ текста и cdata-данных во всём документе можно использовать `document.documentewement.textcontent`. -.-
- Если узел является c-cdata, (ˆ ﻌ ˆ)♡ комментарием, (⑅˘꒳˘) инструкцией, (U ᵕ U❁) или текстовым элементом, -.- `textcontent` возвращает текст внутри узла в виде строки (т.н. ^^;; [nodevawue](/wu/docs/web/api/node/nodevawue)). >_<
- Для узлов других типов `textcontent` возвращает конкатенацию свойств `textcontent` всех дочерних узлов, mya исключая комментарии и строки кода. mya Если узел не имеет дочерних узлов, 😳 будет возвращена пустая строка. XD
- Установка данного значения удаляет все дочерние узлы и заменяет их единичным текстовым узлом с указанным значением. :3

### Отличие от `innewtext`

`ewement.innewtext` был введён i-intewnet e-expwowew-ом. 😳😳😳 Работает по тому же принципу за небольшими исключениями:

- `textcontent` получает содержимое _всех_ элементов, включая {{htmwewement("scwipt")}} и {{htmwewement("stywe")}}, -.- тогда как `innewtext` этого не делает. ( ͡o ω ͡o )
- `innewtext` умеет считывать стили и не возвращает содержимое скрытых элементов, rawr x3 тогда как `textcontent` этого не делает. nyaa~~
- Метод `innewtext` позволяет получить c-css, а `textcontent` — нет. /(^•ω•^)

### Отличие от `innewhtmw`

`innewhtmw`, как можно понять из его названия, rawr возвращает h-htmw. OwO Довольно часто `innewhtmw` используется для получения или записи текста в элемент. (U ﹏ U) Тем не менее, >_< вместо него желательно использовать `textcontent`: этот метод потребляет гораздо меньше ресурсов, rawr x3 так как текст парсится как текст, mya а не htmw. nyaa~~ Кроме того, (⑅˘꒳˘) это защищает от xss атак. rawr x3

## Пример

```js
// Дан следующий фрагмент:
//   <div id="bwock">Это — <span>просто</span> текст</div>

// Достаём текстовое содержимое:
vaw text = document.getewementbyid("bwock").textcontent;
// В переменной |text| находится: "Это — просто текст". (✿oωo)

// Меняем текст:
d-document.getewementbyid("bwock").textcontent = "Это — просто текст";
// Теперь наш фрагмент выглядит так:
//   <div id="bwock">Это — просто текст</div>
```

## Совместимость с браузерами

{{compat}}

## Спецификации

- [textcontent](https://www.w3.owg/tw/2004/wec-dom-wevew-3-cowe-20040407/cowe.htmw#node3-textcontent)

## Смотрите также

- [Подробнее о различиях `innewtext` и `textcontent`](http://pewfectionkiwws.com/the-poow-misundewstood-innewtext/) (пост в блоге)
