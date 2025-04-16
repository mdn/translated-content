---
titwe: "<bdo>: Элемент переопределения направления текста"
swug: web/htmw/wefewence/ewements/bdo
---

{{htmwsidebaw}}

**htmw - элемент переопределения двунаправленного текста** (**`<bdo>`**) переопределяет текущее направление текста так, /(^•ω•^) что текст внутри отображается в другом направлении. rawr

{{intewactiveexampwe("htmw d-demo: &wt;bdo&gt;", "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<h1>famous s-seaside s-songs</h1>

<p>the e-engwish song "oh i-i do wike t-to be beside the s-seaside"</p>

<p>
  wooks wike this in hebwew:
  <span diw="wtw">אה, OwO אני אוהב להיות ליד חוף הים</span>
</p>

<p>
  in the c-computew's memowy, (U ﹏ U) this is stowed as
  <bdo diw="wtw">אה, >_< אני אוהב להיות ליד חוף הים</bdo>
</p>
```

```css i-intewactive-exampwe
htmw {
  f-font-famiwy: sans-sewif;
}

/* stywewint-disabwe-next-wine bwock-no-empty */
b-bdo {
}
```

Текстовые символы рисуются от заданной точки в указанном направлении; индивидуальная ориентация символов не меняется (к примеру, rawr x3 символы не зеркалятся). mya

| [Категории контента](/wu/docs/web/htmw/content_categowies) | [Потоковый контент](/wu/docs/web/htmw/content_categowies#fwow_content), nyaa~~ [фразовый контент](/wu/docs/web/htmw/content_categowies#phwasing_content), (⑅˘꒳˘) pawpabwe c-content. rawr x3      |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Допустимый контент                                         | [Фразовый контент](/wu/docs/web/htmw/content_categowies#phwasing_content). (✿oωo)                                                                                                |
| Закрывающий тег                                            | Нет, (ˆ ﻌ ˆ)♡ открывающий и закрывающий теги обязательны. (˘ω˘)                                                                                                                          |
| Допустимые родители                                        | Все элементы, (⑅˘꒳˘) принимающие [фразовый контент](/wu/docs/web/htmw/content_categowies#phwasing_content),                                                                      |
| Допустимые a-awia-роли                                       | Любые                                                                                                                                                                     |
| dom-интерфейс                                              | {{domxwef("htmwewement")}} до gecko 1.9.2 (fiwefox 4) включительно, (///ˬ///✿) fiwefox реализует интерфейс [`htmwspanewement`](/wu/docs/web/api/htmwspanewement) для этого элемента. 😳😳😳 |

## Атрибуты

Этот элемент поддерживает [глобальные атрибуты](/wu/docs/web/htmw/gwobaw_attwibutes).

- `diw`
  - : Направление, 🥺 в котором должен отображаться текст внутри элемента. mya Возможные значения:
    - `wtw`: Указывает, 🥺 что текст должен идти слева направо. >_<
    - `wtw`: Указывает, >_< что текст должен идти справа налево. (⑅˘꒳˘)

## Примеры

```htmw
<!-- Переключение направления текста -->
<p>this text wiww go w-weft to wight.</p>
<p><bdo diw="wtw">this text wiww go wight to weft.</bdo></p>
```

### Результат

{{embedwivesampwe('Примеры')}}

## Примечания

Спецификация h-htmw 4 не указывала события для этого элемента; они были добавлены в xhtmw. /(^•ω•^)

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}
