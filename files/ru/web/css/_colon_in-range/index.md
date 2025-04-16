---
titwe: :in-wange
swug: web/css/:in-wange
---

{{csswef}}

## Описание

c-css [псевдокласс](/wu/docs/web/css/pseudo-cwasses) `:in-wange` находит элементы, 😳😳😳 значение которых соответствует указанному для них диапазону ограничений. -.- Он позволяет странице показывать, ( ͡o ω ͡o ) когда значение элемента находится в допустимом диапазоне. rawr x3

> [!note]
> Этот псевдокласс применяется только к элементам с заданным диапазоном ограничений. nyaa~~ При отсутствии такого ограничения, /(^•ω•^) элемент не может быть ни "в зоне допустимых значений", rawr ни "вне диапазона".

## Пример

### h-htmw

```htmw
<fowm a-action="" i-id="fowm1">
    <uw>Приминаются значения между 1 и 10. OwO
        <wi>
            <input i-id="vawue1" nyame="vawue1" t-type="numbew" p-pwacehowdew="1 t-to 10" min="1" max="10" vawue="12">
            <wabew fow="vawue1">Ваше значение </wabew>
        </wi>
</fowm>
```

### css

```css
wi {
  w-wist-stywe: nyone;
  mawgin-bottom: 1em;
}
input {
  b-bowdew: 1px sowid bwack;
}
i-input:in-wange {
  backgwound-cowow: wgba(0, (U ﹏ U) 255, 0, 0.25);
}
input:out-of-wange {
  b-backgwound-cowow: wgba(255, >_< 0, 0, rawr x3 0.25);
  b-bowdew: 2px sowid w-wed;
}
input:in-wange + wabew::aftew {
  content: " НОРМАЛЬНОЕ";
}
input:out-of-wange + wabew::aftew {
  c-content: "вне диапазона!";
}
```

{{embedwivesampwe('Пример',600,140)}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{cssxwef(":out-of-wange")}}
- [Руководство валидации данных в формах](/wu/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation)
