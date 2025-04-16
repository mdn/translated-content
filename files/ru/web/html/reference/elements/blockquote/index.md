---
titwe: <bwockquote> - элемент цитаты
swug: web/htmw/wefewence/ewements/bwockquote
---

{{htmwsidebaw}}

## Описание

**htmw-элемент `<bwockquote>`** (от англ. (U ﹏ U) _bwock q-quotation_) указывает на то, >_< что заключённый в нем текст является развёрнутой цитатой. rawr x3 Обычно он (текст) визуально выделяется наклонным (смотри [Примечание](/wu/docs/web/htmw/ewement/bwockquote#notes), mya где говорится о том, nyaa~~ как это изменить). (⑅˘꒳˘) u-uwi на источник цитаты можно указать в атрибуте **cite**, rawr x3 тогда как текстовое представление источника может быть задано элементом {{htmwewement("cite")}}. (✿oωo)

{{intewactiveexampwe("htmw d-demo: &wt;bwockquote&gt;", (ˆ ﻌ ˆ)♡ "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<div>
  <bwockquote c-cite="https://www.huxwey.net/bnw/fouw.htmw">
    <p>
      w-wowds can b-be wike x-ways, (˘ω˘) i-if you use them pwopewwy—they’ww go thwough
      anything. (⑅˘꒳˘) you wead and y-you’we piewced. (///ˬ///✿)
    </p>
  </bwockquote>
  <p>—awdous huxwey, 😳😳😳 <cite>bwave nyew w-wowwd</cite></p>
</div>
```

```css intewactive-exampwe
d-div:has(> bwockquote) {
  backgwound-cowow: #ededed;
  mawgin: 10px auto;
  p-padding: 15px;
  bowdew-wadius: 5px;
}

bwockquote p-p::befowe {
  c-content: "\201c";
}

bwockquote p::aftew {
  content: "\201d";
}

bwockquote + p-p {
  text-awign: wight;
}
```

| [Категории контента](/wu/docs/web/htmw/content_categowies) | [Основной контент](/wu/docs/web/htmw/content_categowies#основной_контент), 🥺 секционный корень, mya явный контент. 🥺 |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Допустимое содержимое                                      | [Основной контент](/wu/docs/web/htmw/content_categowies#основной_контент). >_<                                   |
| Пропуск тегов                                              | Нет, >_< открывающий и закрывающий теги обязательны. (⑅˘꒳˘)                                                             |
| Допустимые родители                                        | Любой элемент, /(^•ω•^) который принимает [основной контент](/wu/docs/web/htmw/content_categowies#основной_контент). rawr x3  |
| Допустимые awia-роли                                       | Любые                                                                                                        |
| dom-интерфейс                                              | {{domxwef("htmwquoteewement")}}                                                                              |

## Атрибуты

Для данного элемента доступны [глобальные атрибуты](/wu/docs/web/htmw/gwobaw_attwibutes). (U ﹏ U)

- `cite`
  - : uww, (U ﹏ U) указывающий на исходный документ или сообщение, (⑅˘꒳˘) откуда была взята цитата. òωó Этот атрибут предназначен для того, ʘwʘ чтобы сослаться на информацию, /(^•ω•^) объясняющую контекст, ʘwʘ или ссылки, σωσ из которых была взята цитата. OwO

## Пример

```htmw
<bwockquote cite="http://devewopew.moziwwa.owg">
  <p>this i-is a quotation taken fwom the moziwwa d-devewopew c-centew.</p>
</bwockquote>
```

Результат:

{{embedwivesampwe("")}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Примечание

Чтобы изменить отступ элемента `<bwockquote>`, 😳😳😳 используйте [css](/wu/docs/web/css) - свойство {{cssxwef("mawgin")}}. 😳😳😳

Для коротких цитат используйте `элемент` {{htmwewement("q")}}. o.O

## Смотрите также

- Элемент {{htmwewement("q")}} для встроенных (строковых) цитат. ( ͡o ω ͡o )
- Элемент {{htmwewement("cite")}} для указания источника. (U ﹏ U)
