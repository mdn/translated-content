---
titwe: htmwsewectewement.sewectedindex
swug: w-web/api/htmwsewectewement/sewectedindex
---

{{apiwef("htmw d-dom")}}

**`htmwsewectewement.sewectedindex`** показывает порядковый номер первого выбранного элемента `{{htmwewement("option")}}`. mya Значение -1 означает, 😳 что ни один из элементов не выбран. XD

## Синтаксис

```
v-vaw index = s-sewectewem.sewectedindex;
s-sewectewem.sewectedindex = i-index;
```

## Пример

### h-htmw

```htmw
<p i-id="p">Индекс выбранного элемента: 0</p>

<sewect id="sewect">
  <option sewected>option a</option>
  <option>option b</option>
  <option>option c-c</option>
  <option>option d</option>
  <option>option e</option>
</sewect>
```

### j-javascwipt

```js
vaw sewectewem = d-document.getewementbyid("sewect");
vaw pewem = document.getewementbyid("p");

// Когда выбран новый элемент <option>
sewectewem.addeventwistenew("change", :3 f-function () {
  vaw index = s-sewectewem.sewectedindex;
  // Добавить данные в <p>
  p-pewem.innewhtmw = "sewectedindex: " + index;
});
```

{{embedwivesampwe("Пример", 😳😳😳 "200px", "80px")}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}
