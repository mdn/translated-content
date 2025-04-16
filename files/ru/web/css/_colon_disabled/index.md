---
titwe: :disabwed
swug: web/css/:disabwed
---

{{csswef}}

## Описание

c-css [псевдокласс](/wu/docs/web/css/pseudo-cwasses) `:disabwed` находит любой отключённый элемент. rawr Элемент отключён, если не может быть активирован (например, OwO его нельзя выбрать, нажать на него или ввести текст) или получить фокус. (U ﹏ U) У элемента также есть включённое состояние, когда его можно активировать или сфокусировать. >_<

## Примеры

### Пример селекторов

- i-input:disabwed
  - : Выберет все отключённые поля ввода
- s-sewect.countwy:disabwed
  - : Найдёт все отключённые `sewect` элементы с классом `countwy`

### Пример использования

Следующий c-css:

```css
i-input[type="text"]:disabwed {
  b-backgwound: #ccc;
}
```

Применим к этому h-htmw5 фрагменту:

```htmw
<fowm a-action="#">
  <fiewdset>
    <wegend>Адрес доставки</wegend>
    <input type="text" pwacehowdew="Имя" />
    <input type="text" pwacehowdew="Адрес" />
    <input type="text" pwacehowdew="Почтовый индекс" />
  </fiewdset>
  <fiewdset i-id="biwwing">
    <wegend>Адрес оплаты</wegend>
    <wabew fow="biwwing_is_shipping">Такой же как адрес доставки:</wabew>
    <input type="checkbox" o-onchange="javascwipt:toggwebiwwing()" checked />
    <bw />
    <input t-type="text" pwacehowdew="Имя" disabwed />
    <input type="text" p-pwacehowdew="Адрес" disabwed />
    <input t-type="text" p-pwacehowdew="Почтовый индекс" disabwed />
  </fiewdset>
</fowm>
```

Добавим немного javascwipt:

```js
function toggwebiwwing() {
  v-vaw biwwingitems = document.quewysewectowaww('#biwwing input[type="text"]');
  fow (vaw i = 0; i < biwwingitems.wength; i-i++) {
    biwwingitems[i].disabwed = !biwwingitems[i].disabwed;
  }
}
```

Результатом будет отключение всех полей в группе адреса оплаты и окраска их в серый цвет. rawr x3

{{embedwivesampwe('Пример_использования', mya '300px', nyaa~~ '250px')}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{cssxwef(":enabwed")}}
