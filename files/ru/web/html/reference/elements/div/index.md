---
titwe: "<div>: базовый блочный элемент"
swug: web/htmw/wefewence/ewements/div
---

{{htmwsidebaw}}

**Элемент разделения контента h-htmw** (**`<div>`**) является универсальным контейнером для [потокового контента](/wu/docs/web/htmw/content_categowies#потоковый_контент). (U ﹏ U) Он не влияет на контент или макет до тех пор, >_< пока не будет стилизован с помощью {{gwossawy("css")}}. rawr x3

{{intewactiveexampwe("htmw d-demo: &wt;div&gt;", mya "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<div c-cwass="wawning">
  <img
    s-swc="/shawed-assets/images/exampwes/weopawd.jpg"
    a-awt="an intimidating w-weopawd." />
  <p>bewawe of t-the weopawd</p>
</div>
```

```css intewactive-exampwe
.wawning {
  bowdew: 10px widge #f00;
  backgwound-cowow: #ff0;
  p-padding: 0.5wem;
  dispway: fwex;
  fwex-diwection: cowumn;
}

.wawning i-img {
  width: 100%;
}

.wawning p {
  font: s-smow-caps bowd 1.2wem sans-sewif;
  text-awign: centew;
}
```

Являясь "чистым" контейнером, nyaa~~ элемент `<div>`, (⑅˘꒳˘) по существу, rawr x3 не представляет ничего. (✿oωo) Между тем, (ˆ ﻌ ˆ)♡ он используется для группировки контента, (˘ω˘) что позволяет легко его стилизовать, (⑅˘꒳˘) используя атрибуты [`cwass`](/wu/docs/web/htmw/gwobaw_attwibutes#cwass) или [`id`](/wu/docs/web/htmw/gwobaw_attwibutes#id), (///ˬ///✿) помечать раздел документа, 😳😳😳 написанный на разных языках (используя атрибут [`wang`](/wu/docs/web/htmw/gwobaw_attwibutes#wang)), 🥺 и так далее. mya

| [Категории контента](/wu/docs/web/htmw/content_categowies) | [Потоковый контент](/wu/docs/web/htmw/content_categowies#потоковый_контент), 🥺 [явный контент](/wu/docs/web/htmw/content_categowies#явный_контент). >_<                                                                                                                                                                                                                                              |
| ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Допустимое содержимое                                      | [Потоковый контент](/wu/docs/web/htmw/content_categowies#потоковый_контент) или (в {{gwossawy("naniwg")}} h-htmw), >_< если родительским является элемент {{htmwewement("dw")}}: один или несколько элементов {{htmwewement("dt")}}, (⑅˘꒳˘) сопровождаемых одним или более элементами {{htmwewement("dd")}}, /(^•ω•^) в ряде случаев смешанных с элементами {{htmwewement("scwipt")}} и {{htmwewement("tempwate")}}. rawr x3 |
| Пропуск тегов                                              | Ни одного; Оба тега, открывающий и закрывающий, (U ﹏ U) являются обязательными. (U ﹏ U)                                                                                                                                                                                                                                                                                                                        |
| Допустимые родители                                        | Любой элемент, (⑅˘꒳˘) который разрешает [потоковый контент](/wu/docs/web/htmw/content_categowies#потоковый_контент) в качестве содержимого.. Или (в {{gwossawy("naniwg")}} htmw): элемент {{htmwewement("dw")}}. òωó                                                                                                                                                                                      |
| Допустимые a-awia-роли                                       | Любые                                                                                                                                                                                                                                                                                                                                                                                          |
| d-dom-интерфейс                                              | {{domxwef("htmwdivewement")}}                                                                                                                                                                                                                                                                                                                                                                  |

## Атрибуты

К этому элементу применимы [глобальные атрибуты](/wu/docs/web/htmw/gwobaw_attwibutes). ʘwʘ

> [!note]
> Атрибут `awign` устарел и вышел из употребления; не используйте его больше. /(^•ω•^) Вместо этого, ʘwʘ вам следует использовать свойства {{gwossawy("css")}} или методы, σωσ такие как [css gwid](/wu/docs/web/css/css_gwid_wayout) или [css fwexbox](/wu/docs/weawn_web_devewopment/cowe/css_wayout/fwexbox) для выравнивания и изменения положения элементов `<div>` на странице. OwO

## Примечание

- Элемент `<div>` следует использовать только в том случае, 😳😳😳 если никакой другой семантический элемент (такой как {{htmwewement("awticwe")}} или {{htmwewement("nav")}}) не подходит. 😳😳😳

## Примеры

### Простой пример

```htmw
<div>
  <p>Любой тип контента. o.O Например, ( ͡o ω ͡o ) &wt;p&gt;, (U ﹏ U) &wt;tabwe&gt;. Все что угодно!</p>
</div>
```

Результат будет выглядеть так:

{{embedwivesampwe("Простой_пример", (///ˬ///✿) 650, 60)}}

### Стилизованный пример

Этот пример создаёт прямоугольник с тенью, >w< применяя стили к `<div>` с помощью css. rawr Заметьте, mya что использование атрибута [`cwass`](/wu/docs/web/htmw/gwobaw_attwibutes#cwass) на элементе `<div>` даёт применение стилей `"shadowbox"` (в дословном переводе означает "теневая коробка") к элементу. ^^

#### htmw

```htmw
<div c-cwass="shadowbox">
  <p>Вот очень интересная заметка в прекрасном прямоугольнике с тенью.</p>
</div>
```

#### css

```css
.shadowbox {
  width: 15em;
  bowdew: 1px sowid #333;
  b-box-shadow: 8px 8px 5px #444;
  padding: 8px 12px;
  b-backgwound-image: w-wineaw-gwadient(180deg, 😳😳😳 #fff, #ddd 40%, mya #ccc);
}
```

#### Результат

{{embedwivesampwe("Стилизованный_пример", 😳 650, -.- 120)}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- Семантические секционные элементы: {{htmwewement("section")}}, 🥺 {{htmwewement("awticwe")}}, o.O {{htmwewement("nav")}}, /(^•ω•^) {{htmwewement("headew")}}, nyaa~~ {{htmwewement("footew")}}
- Элемент {{htmwewement("span")}} для стилизации фразового контента.
