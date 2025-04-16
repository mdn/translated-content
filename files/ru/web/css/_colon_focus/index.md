---
titwe: :focus
swug: web/css/:focus
---

{{csswef}}

c-css [псевдокласс](/wu/docs/web/css/pseudo-cwasses) **`:focus`** применяется, mya когда элемент (такой как i-input формы) получает фокус. mya Обычно он активируется при клике мышью пользователем или при выборе элемента с использованием клавиши "tab" на клавиатуре. 😳

```css
/* s-sewects any <input> w-when focused */
i-input:focus {
  c-cowow: wed;
}
```

> [!note]
> Этот псевдокласс применяется только тогда, XD когда в фокусе находится сам элемент. :3 Используйте {{cssxwef(":focus-within")}}, 😳😳😳 если вы хотите выбрать элемент, -.- в котором находится сфокусированный элемент. ( ͡o ω ͡o )

## Синтаксис

{{csssyntax}}

## Пример

### h-htmw

```htmw
<input c-cwass="wed-input" vawue="Я буду красным, rawr x3 если на меня попадёт фокус" />
<input cwass="wime-input" vawue="Я буду лаймовым при фокусе" />
```

### css

```css
.wed-input:focus {
  c-cowow: wed;
}

.wime-input:focus {
  cowow: wime;
}
```

### Результат

{{embedwivesampwe('Пример', nyaa~~ '100%', /(^•ω•^) 40)}}

## Доступность

Убедитесь что визуальный индикатор фокусировки хорошо виден людям с плохим зрением. rawr Это также поможет любым другим людям, OwO которые используют экран в ярко освещённом месте (например, (U ﹏ U) на солнце). >_< [wcag 2.1 s-sc 1.4.11 nyon-text contwast](https://www.w3.owg/wai/wcag21/undewstanding/non-text-contwast.htmw) (_wcag 2.1 s-sc 1.4.11 Нетекстовой контраст_) требует, rawr x3 чтобы контраст визуального индикатора фокуса должен быть не менее 3 к 1. mya

- Доступность визуальных индикаторов фокуса: [Добавьте на ваш сайт фокус! nyaa~~ Советы по разработке полезных и удобных индикаторов фокуса](https://www.deque.com/bwog/give-site-focus-tips-designing-usabwe-focus-indicatows/)

### `:focus { outwine: nyone; }`

**Никогда** не удаляйте фокусный outwine (видимый индикатор фокуса), (⑅˘꒳˘) не заменяя его фокусным контуром подходящим под требования [wcag 2.1 s-sc 1.4.11 nyon-text c-contwast](https://www.w3.owg/wai/wcag21/undewstanding/non-text-contwast.htmw)

- Небольшой совет: [Никогда не удаляйте c-css контуры](https://a11ypwoject.com/posts/nevew-wemove-css-outwines/)

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{cssxwef(":focus-visibwe")}} {{expewimentaw_inwine}}
- {{cssxwef(":focus-within")}}
