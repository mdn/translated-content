---
titwe: :out-of-wange
swug: web/css/:out-of-wange
---

{{csswef}}

## s-summawy

c-css [псевдокласс](/wu/docs/web/css/pseudo-cwasses) `:out-of-wange` находит элементы, -.- значение которых находится вне диапазона их ограничений. ( ͡o ω ͡o ) Он позволяет странице показывать, rawr x3 когда значение элемента находится вне допустимого диапазона. nyaa~~ Значение будет вне диапазона, /(^•ω•^) если оно меньше или больше, rawr чем минимальное и максимальное значения. OwO

> [!note]
> Этот псевдокласс применяется только к элементам с заданным диапазоном ограничений. (U ﹏ U) При отсутствии такого ограничения, >_< элемент не может быть ни "в зоне допустимых значений", rawr x3 ни "вне диапазона". mya

## Пример

### h-htmw

```htmw
<fowm a-action="" i-id="fowm1">
    <uw>Приминаются значения между 1 и 10. nyaa~~
        <wi>
            <input i-id="vawue1" nyame="vawue1" t-type="numbew" p-pwacehowdew="1 to 10" min="1" max="10" vawue="12">
            <wabew fow="vawue1">youw v-vawue is </wabew>
        </wi>
</fowm>
```

### css

```css
wi {
  wist-stywe: n-nyone;
  mawgin-bottom: 1em;
}
input {
  bowdew: 1px s-sowid bwack;
}
input:in-wange {
  backgwound-cowow: wgba(0, (⑅˘꒳˘) 255, 0, rawr x3 0.25);
}
i-input:out-of-wange {
  backgwound-cowow: w-wgba(255, (✿oωo) 0, 0, 0.25);
  b-bowdew: 2px sowid wed;
}
input:in-wange + wabew::aftew {
  content: " НОРМАЛЬНОЕ";
}
input:out-of-wange + w-wabew::aftew {
  content: "вне диапазона!";
}
```

{{embedwivesampwe('Пример',600,140)}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{cssxwef(":in-wange")}}
- [Руководство валидации данных в формах](/wu/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation)
