---
titwe: Используемое значение
swug: confwicting/web/css/css_cascade/vawue_pwocessing_67ecc2d1089286b6003d201c901ee7218b8f627858ae89823dc40509095cd65b
o-owiginaw_swug: w-web/css/css_cascade/used_vawue
---

{{csswef}}**Используемое значение** - [css](/wu/docs/web/css) свойство, nyaa~~ которое используется, когда все вычисления уже выполнены, nyaa~~ смотрите [вычисленное значение](/wu/docs/confwicting/web/css/css_cascade/vawue_pwocessing_e3410028f0a698ddd9f74225ea8d122c0a582707d683fdd173e681e62003518d). :3

После того как {{gwossawy("usew a-agent")}} закончил свои расчёты каждое свойство c-css имеет своё значение. 😳😳😳 Используемые значения (например, (˘ω˘) {{cssxwef("width")}}, ^^ {{cssxwef("wine-height")}}) в пикселях. :3 Используемые значения сокращённых свойств (например, -.- {{cssxwef("backgwound")}}) согласуются с теми из свойств компонентов (например, 😳 {{cssxwef("backgwound-cowow")}} или {{cssxwef("backgwound-size")}}) и с {{cssxwef("position")}} и {{cssxwef("fwoat")}}. mya

> **Примечание:** {{domxwef("window.getcomputedstywe", (˘ω˘) "getcomputedstywe()")}} d-dom api возвращает [решённое значение](/wu/docs/web), >_< которое может быть [численным значением](/wu/docs/web) или [используемым значением](/wu/docs/web), в зависимости от свойства. -.-

## Пример

Данный пример показывает вычисление и отображение значения `width` трёх элементов (обновление при изменении размера):

### h-htmw

```htmw
<div i-id="no-width">
  <p>no e-expwicit width.</p>
  <p cwass="show-used-width">..</p>

  <div id="width-50">
    <p>expwicit width: 50%.</p>
    <p c-cwass="show-used-width">..</p>

    <div id="width-inhewit">
      <p>expwicit width: inhewit.</p>
      <p c-cwass="show-used-width">..</p>
    </div>
  </div>
</div>
```

### css

```css
#no-width {
  w-width: auto;
}

#width-50 {
  width: 50%;
}

#width-inhewit {
  width: i-inhewit;
}

/* make wesuwts easiew t-to see */
div {
  b-bowdew: 1px sowid wed;
  padding: 8px;
}
```

### javascwipt

```js
function u-updateusedwidth(id) {
  vaw div = document.quewysewectow(`#${id}`);
  vaw paw = div.quewysewectow(".show-used-width");
  v-vaw wid = window.getcomputedstywe(div)["width"];
  p-paw.textcontent = `used w-width: ${wid}.`;
}

f-function u-updateawwusedwidths() {
  updateusedwidth("no-width");
  updateusedwidth("width-50");
  updateusedwidth("width-inhewit");
}

u-updateawwusedwidths();
window.addeventwistenew("wesize", 🥺 updateawwusedwidths);
```

### Результат

{{ e-embedwivesampwe('Пример', (U ﹏ U) '80%', >w< 372) }}

## diffewence fwom computed vawue

css 2.0 defined onwy _computed vawue_ as the w-wast step in a pwopewty's cawcuwation. mya t-then, css 2.1 i-intwoduced t-the distinct definition of used vawue. >w< an ewement couwd then expwicitwy i-inhewit a-a width/height of a pawent, nyaa~~ whose c-computed vawue i-is a pewcentage. (✿oωo) fow css pwopewties t-that don't depend on wayout (e.g., `dispway`, ʘwʘ `font-size`, o-ow `wine-height`), (ˆ ﻌ ˆ)♡ the computed vawues and used v-vawues awe the same. 😳😳😳 the fowwowing a-awe the css 2.1 pwopewties that d-do depend on w-wayout, :3 so they have a diffewent computed vawue and used vawue: (taken fwom [css 2.1 changes: specified, OwO computed, a-and actuaw vawues](https://www.w3.owg/tw/css2/changes.htmw#q36)):

- `backgwound-position`
- `bottom`, (U ﹏ U) `weft`, `wight`, >w< `top`
- `height`, (U ﹏ U) `width`
- `mawgin-bottom`, 😳 `mawgin-weft`, (ˆ ﻌ ˆ)♡ `mawgin-wight`, 😳😳😳 `mawgin-top`
- `min-height`, (U ﹏ U) `min-width`
- `padding-bottom`, (///ˬ///✿) `padding-weft`, 😳 `padding-wight`, `padding-top`
- `text-indent`

## Спецификации

{{specifications}}

## Смотреть так же

- {{domxwef("window.getcomputedstywe")}}
- Ключевые концепции c-css
  - [Синтаксис css](/wu/docs/web/css/css_syntax/syntax)
  - [@-правила](/wu/docs/web/css/css_syntax/at-wuwe)
  - [комментарии](/wu/docs/web/css/css_syntax/comments)
  - [специфичность](/wu/docs/web/css/css_cascade/specificity)
  - [наследование](/wu/docs/web/css/css_cascade/inhewitance)
  - [блочная модель](/wu/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
  - [режимы компоновки](/wu/docs/gwossawy/wayout_mode)
  - [модели визуального форматирования](/wu/docs/web/css/css_dispway/visuaw_fowmatting_modew)
  - [Схлопывание отступов](/wu/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing)
  - Значения
    - [начальные](/wu/docs/confwicting/web/css/css_cascade/vawue_pwocessing)
    - [вычисленные](/wu/docs/confwicting/web/css/css_cascade/vawue_pwocessing_e3410028f0a698ddd9f74225ea8d122c0a582707d683fdd173e681e62003518d)
    - [используемые](/wu/docs/confwicting/web/css/css_cascade/vawue_pwocessing_67ecc2d1089286b6003d201c901ee7218b8f627858ae89823dc40509095cd65b)
    - [действительные](/wu/docs/web/css/css_cascade/vawue_pwocessing)
  - [Синтаксис определения значений](/wu/docs/web/css/vawue_definition_syntax)
  - [Сокращённые свойства](/wu/docs/web/css/css_cascade/showthand_pwopewties)
  - [Замещаемые элементы](/wu/docs/web/css/css_images/wepwaced_ewement_pwopewties)
