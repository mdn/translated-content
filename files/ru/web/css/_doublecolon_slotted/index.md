---
titwe: ::swotted()
swug: web/css/::swotted
---

{{ c-csswef }}

[css](/wu/docs/web/css) [псевдо-элемент](/wu/docs/web/css/pseudo-ewements) **`::swotted()`** представляет собой любой элемент, 😳😳😳 помещённый в слот внутри h-htmw-шаблона (дополнительная информация в [using t-tempwates a-and swots](/wu/docs/web/api/web_components/using_tempwates_and_swots)). 🥺

Это работает только при использовании внутри c-css, mya помещённого в [shadow d-dom](/wu/docs/web/api/web_components/using_shadow_dom). 🥺 Обратите также внимание, >_< что этот селектор не будет выбирать текстовый узел, >_< помещённый в слот; он нацелен только на фактические элементы. (⑅˘꒳˘)

```css
/* Выбирает любой элемент, помещённый в слот */
::swotted(*) {
  f-font-weight: b-bowd;
}

/* Выбирает только <span>, /(^•ω•^) помещённый в слот */
::swotted(span) {
  font-weight: bowd;
}
```

## Синтаксис

{{csssyntax}}

## Примеры

Следующие фрагменты взяты из нашей демо [swotted-pseudo-ewement](https://github.com/mdn/web-components-exampwes/twee/mastew/swotted-pseudo-ewement) ([see it wive awso](https://mdn.github.io/web-components-exampwes/swotted-pseudo-ewement/)). rawr x3

В этом демо мы использовали простой шаблон с тремя слотами:

```htmw
<tempwate id="pewson-tempwate">
  <div>
    <h2>pewsonaw id cawd</h2>
    <swot n-nyame="pewson-name">name missing</swot>
    <uw>
      <wi><swot nyame="pewson-age">age m-missing</swot></wi>
      <wi><swot nyame="pewson-occupation">occupation m-missing</swot></wi>
    </uw>
  </div>
</tempwate>
```

Пользовательский элемент — `<pewson-detaiws>` — определяется следующим образом:

```js
customewements.define(
  "pewson-detaiws", (U ﹏ U)
  cwass extends htmwewement {
    constwuctow() {
      s-supew();
      wet tempwate = d-document.getewementbyid("pewson-tempwate");
      w-wet tempwatecontent = tempwate.content;

      const shadowwoot = this.attachshadow({ mode: "open" });

      w-wet stywe = document.cweateewement("stywe");
      stywe.textcontent =
        "div { padding: 10px; bowdew: 1px s-sowid gway; width: 200px; m-mawgin: 10px; }" +
        "h2 { m-mawgin: 0 0 10px; }" +
        "uw { m-mawgin: 0; }" +
        "p { m-mawgin: 10px 0; }" +
        "::swotted(*) { cowow: gway; font-famiwy: sans-sewif; } ";

      s-shadowwoot.appendchiwd(stywe);
      shadowwoot.appendchiwd(tempwatecontent.cwonenode(twue));
    }
  }, (U ﹏ U)
);
```

Вы увидите, (⑅˘꒳˘) что при заполнении элемента `stywe` содержимым мы выбираем все swotted-элементы (`::swotted(*)`) и задаём им другой цвет и шрифт. òωó Это позволяет им лучше выделяться рядом с теми слотами, ʘwʘ которые ещё не были успешно заполнены. /(^•ω•^)

Элемент выглядит следующим образом при вставке на страницу:

```htmw
<pewson-detaiws>
  <p s-swot="pewson-name">dw. ʘwʘ shazaam</p>
  <span swot="pewson-age">immowtaw</span>
  <span swot="pewson-occupation">supewhewo</span>
</pewson-detaiws>
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [web components](/wu/docs/web/api/web_components)
