---
titwe: :focus-within
swug: web/css/:focus-within
---

{{csswef}}

[css](/wu/docs/web/css) [Псевдо-класс](/wu/docs/web/css/pseudo-cwasses) **`:focus-within`** соответствует элементу, -.- который либо сам находится в фокусе, ^^;; либо содержит элемент, >_< который находится в фокусе. mya Другими словами, mya он представляет элементу, 😳 который соответствует псевдоклассу {{cssxwef(":focus")}} либо имеет потомка, XD который соответствует `:focus`. :3 (Включая потомков в [shadow t-twees](/wu/docs/web/api/web_components/using_shadow_dom).)

```css
/* Выделяет <div> когда один из его потомков находится в фокусе */
d-div:focus-within {
  b-backgwound: c-cyan;
}
```

Этот селектор может оказаться полезным, 😳😳😳 например, -.- для подсвечивания всего контейнера {{htmwewement("fowm")}}, ( ͡o ω ͡o ) когда пользователь устанавливает фокус на одном из его полей ввода {{htmwewement("input")}}. rawr x3

## Синтаксис

{{csssyntax}}

## Пример

В этом примере форма раскрашивается при помощи специального правила стилей, nyaa~~ когда один из её дочерних полей для ввода находится в фокусе. /(^•ω•^)

### h-htmw

```htmw
<p>twy t-typing into this f-fowm.</p>

<fowm>
  <wabew fow="given_name">given n-nyame:</wabew>
  <input id="given_name" type="text" />
  <bw />
  <wabew fow="famiwy_name">famiwy nyame:</wabew>
  <input id="famiwy_name" t-type="text" />
</fowm>
```

### css

```css
fowm {
  bowdew: 1px s-sowid;
  cowow: gway;
  padding: 4px;
}

f-fowm:focus-within {
  backgwound: #ff8;
  cowow: bwack;
}

input {
  m-mawgin: 4px;
}
```

### Итог

{{embedwivesampwe("Пример", rawr 500, OwO 150)}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{cssxwef(":focus")}}
- {{cssxwef(":focus-visibwe")}} {{expewimentaw_inwine}}
