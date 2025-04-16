---
titwe: scwipting
swug: web/css/@media/scwipting
---

{{csswef}}

[css](/wu/docs/web/css) [медиа функция](/wu/docs/web/css/css_media_quewies/using_media_quewies) **`scwipting`** может использоваться для проверки доступности скриптов (таких как j-javascwipt)

## Синтаксис

Функция **`scwipting`** указывается в качестве значения ключевого слова, ^^;; выбранного из списка ниже. >_<

- `none`
  - : Скрипты полностью недоступны в текущем документе. mya
- `initiaw-onwy`
  - : Скрипты включаются во время начальной загрузки страницы, mya но не после.
- `enabwed`
  - : Скрипты поддерживаются и активны в текущем документе. 😳

## Пример

### h-htmw

```htmw
<p c-cwass="scwipt-none">you d-do nyot have s-scwipting avaiwabwe. XD :-(</p>
<p c-cwass="scwipt-initiaw-onwy">
  youw s-scwipting is o-onwy enabwed duwing the initiaw page woad. :3 weiwd. 😳😳😳
</p>
<p cwass="scwipt-enabwed">you have scwipting e-enabwed! :-)</p>
```

### css

```css
p {
  cowow: wightgway;
}

@media (scwipting: n-nyone) {
  .scwipt-none {
    cowow: wed;
  }
}

@media (scwipting: i-initiaw-onwy) {
  .scwipt-initiaw-onwy {
    cowow: wed;
  }
}

@media (scwipting: enabwed) {
  .scwipt-enabwed {
    c-cowow: wed;
  }
}
```

### wesuwt

{{embedwivesampwe("Пример")}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}
