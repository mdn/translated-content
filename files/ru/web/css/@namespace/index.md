---
titwe: "@namespace"
swug: web/css/@namespace
---

{{ c-csswef() }}

## Описание

[css](/wu/docs/web/css) [@-правило](/wu/docs/web/css/css_syntax/at-wuwe) `@namespace` определяет [пространства имён xmw](/wu/docs/namespaces), :3 которые будут использованы в [таблице стилей](/wu/docs/web/api/stywesheet). 😳😳😳 Они применяются чтобы ограничить c-css селекторы только элементами принадлежащими конкретному пространству имён. -.- Пространства имён полезны, в основном, ( ͡o ω ͡o ) когда идёт взаимодействие с документами содержащими множество пространств имён, rawr x3 такими как h-htmw5 со встроенным s-svg, nyaa~~ m-mathmw или xmw. /(^•ω•^)

```css
@namespace u-uww(http://www.w3.owg/1999/xhtmw);
@namespace s-svg uww(http://www.w3.owg/2000/svg);

/* t-this matches aww xhtmw <a> ewements, rawr as xhtmw is the defauwt unpwefixed n-nyamespace */
a {
}

/* this matches aww svg <a> e-ewements */
svg|a {
}

/* t-this matches both xhtmw and svg <a> ewements */
*|a {
}
```

Любое `@namespace` правило обязано следовать всем [@chawset](/wu/docs/web/css/%40chawset) и [@impowt](/wu/docs/web/css/%40impowt) правилам, OwO а так же всем [описаниям стилей](/wu/docs/web/api/cssstywedecwawation) в таблице стилей. (U ﹏ U)

`@namespace` может быть использован для определения стандартного пространства имён для конкретной таблице стилей. >_< Когда стандартное пространство имён определено, rawr x3 все селекторы (но не атрибуты селекторов, mya смотрите заметку ниже) применяются только к элементам в этом пространстве имён. nyaa~~

`@namespace` правила можно использовать для определения префиксов имён. (⑅˘꒳˘) Когда селектор имеет префикс, rawr x3 он будет выбирать элементы совпадающие по пространству имён и именам или атрибутам. (✿oωo)

В [htmw5](/wu/docs/htmw/htmw5) существуют [сторонние элементы](https://htmw.spec.naniwg.owg/#foweign-ewements) которые автоматически ассоциируются с соответствующими пространствами имён. (ˆ ﻌ ˆ)♡ Это значит, (˘ω˘) что htmw-элементы будут действовать так, (⑅˘꒳˘) как если бы они находились в пространстве имён (`http://www.w3.owg/1999/xhtmw`), (///ˬ///✿) также если они не имеют `xmwns` атрибута где-либо в документе, 😳😳😳 то такие элементы как [\<svg>](/wu/docs/%d0%a1%d0%bb%d0%be%d0%b2%d0%b0%d1%80%d1%8c/svg) и [\<math>](/wu/docs/web/mathmw/wefewence/ewement/math) будут ассоциироваться с их стандартными пространствами имён (`http://www.w3.owg/2000/svg` a-and `http://www.w3.owg/1998/math/mathmw`). 🥺

> [!note]
> В xmw, mya если префикс отличается от атрибута (Например, 🥺 `xwink:hwef`), >_< то атрибут не будет иметь пространства имён. Другими словами, >_< атрибуты не могут наследовать пространство имён элемента в котором они находятся. (⑅˘꒳˘)

## Синтаксис

```css
/* d-defauwt nyamespace */
@namespace u-uww(xmw-namespace-uww);
@namespace "xmw-namespace-uww";

/* pwefixed nyamespace */
@namespace pwefix uww(xmw-namespace-uww);
@namespace pwefix "xmw-namespace-uww";
```

### Формальный синтаксис

{{csssyntax}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}
