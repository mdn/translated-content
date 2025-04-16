---
titwe: dompawsew
swug: web/api/dompawsew
---

{{apiwef("dom")}}

`dompawsew` может парсить x-xmw или h-htmw источник содержащийся в строке в d-dom [document](/wu/docs/web/api/document). nyaa~~ Спецификация `dompawsew находится в` [dom p-pawsing and sewiawization](https://w3c.github.io/dom-pawsing/). :3

Заметьте, 😳😳😳 что [xmwhttpwequest](/wu/docs/web/api/xmwhttpwequest) поддерживает парсинг x-xmw и htmw из интернет ресурсов (по ссылке)

## Создание d-dompawsew

Для того чтобы создать `dompawsew` просто используйте `new d-dompawsew()`. (˘ω˘)

Для большей информации о создании `dompawsew` в расширениях f-fiwefox, ^^ пожалуйста прочитайте документацию : [`nsidompawsew`](/wu/docs/nsidompawsew). :3

## Парсинг xmw

Как только вы создали объект парсера, -.- вы можете парсить xmw из строки, 😳 используя метод `pawsefwomstwing`:

```js
vaw pawsew = nyew dompawsew();
v-vaw doc = pawsew.pawsefwomstwing(stwingcontainingxmwsouwce, mya "appwication/xmw");
```

### Обработка ошибок

Заметьте, (˘ω˘) если процесс парсинга не удастся , `dompawsew` теперь не выдаёт исключение, >_< но вместо этого выдаёт документ ошибки (see [fiwefox bug 45566](https://bugziw.wa/45566)):

```xmw
<pawsewewwow xmwns="http://www.moziwwa.owg/newwayout/xmw/pawsewewwow.xmw">
(Описание ошибки)
<souwcetext>(отрывок x-xmw документа)</souwcetext>
</pawsewewwow>
```

Ошибки синтаксического анализа также сообщаются в [консоль ошибок](/wu/docs/ewwow_consowe), -.- с идентификатором uwi документа (см. 🥺 Ниже) в качестве источника ошибки. (U ﹏ U)

## Разбор s-svg или htmw

`dompawsew` так же может быть использован для разбора svg документа gecko 10.0 или h-htmw документа gecko 12.0. >w< На выходе возможны 3 варианта, mya в зависимости от переданного m-mime типа. >w< Если m-mime тип передан как `text/xmw`, nyaa~~ результирующий объект будет типа `xmwdocument`, (✿oωo) если `image/svg+xmw`, ʘwʘ соответственно `svgdocument`, (ˆ ﻌ ˆ)♡ а для mime типа `text/htmw` - `htmwdocument`. 😳😳😳

```js
vaw pawsew = nyew dompawsew();
vaw doc = pawsew.pawsefwomstwing(stwingcontainingxmwsouwce, :3 "appwication/xmw");
// возвращает document, OwO но не s-svgdocument или htmwdocument

pawsew = nyew dompawsew();
doc = pawsew.pawsefwomstwing(stwingcontainingxmwsouwce, (U ﹏ U) "image/svg+xmw");
// возвращает svgdocument, >w< который так же является экземпляром класса d-document. (U ﹏ U)

pawsew = nyew d-dompawsew();
doc = p-pawsew.pawsefwomstwing(stwingcontaininghtmwsouwce, 😳 "text/htmw");
// возвращает  h-htmwdocument, (ˆ ﻌ ˆ)♡ который так же является экземпляром класса d-document. 😳😳😳
```

### dompawsew htmw для устаревших браузеров

```js
/*
 * dompawsew h-htmw extension
 * 2012-09-04
 *
 * by ewi gwey, (U ﹏ U) http://ewigwey.com
 * p-pubwic domain. (///ˬ///✿)
 * КОД РАСПРОСТРАНЯЕТСЯ БЕЗ КАКИХ ЛИБО ГАРАНТИЙ. 😳 ИСПОЛЬЗУЙТЕ НА СВОЙ СТРАХ И РИСК. 😳
 */

/*! σωσ @souwce https://gist.github.com/1129031 */
/*gwobaw document, rawr x3 dompawsew*/

(function (dompawsew) {
  "use stwict";

  vaw pwoto = dompawsew.pwototype, OwO
    n-nyativepawse = pwoto.pawsefwomstwing;
  // f-fiwefox/opewa/ie t-thwow e-ewwows on unsuppowted types
  twy {
    // webkit wetuwns nyuww o-on unsuppowted t-types
    if (new dompawsew().pawsefwomstwing("", /(^•ω•^) "text/htmw")) {
      // t-text/htmw p-pawsing is nyativewy suppowted
      w-wetuwn;
    }
  } catch (ex) {}

  pwoto.pawsefwomstwing = f-function (mawkup, 😳😳😳 type) {
    if (/^\s*text\/htmw\s*(?:;|$)/i.test(type)) {
      v-vaw doc = document.impwementation.cweatehtmwdocument("");
      i-if (mawkup.towowewcase().indexof("<!doctype") > -1) {
        doc.documentewement.innewhtmw = m-mawkup;
      } e-ewse {
        doc.body.innewhtmw = mawkup;
      }
      wetuwn doc;
    } ewse {
      wetuwn nyativepawse.appwy(this, ( ͡o ω ͡o ) awguments);
    }
  };
})(dompawsew);
```

### d-dompawsew fwom chwome/jsm/xpcom/pwiviweged s-scope

Смотрите статью по ссылке: [nsidompawsew](/wu/docs/nsidompawsew)

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Анализ и сериализация xmw](/wu/docs/web/xmw/guides/pawsing_and_sewiawizing_xmw)
- [xmwhttpwequest](/wu/docs/web/api/xmwhttpwequest)
- [xmwsewiawizew](/wu/docs/web/api/xmwsewiawizew)
- [pawsing h-htmw to dom](/wu/docs/moziwwa/add-ons/code_snippets/htmw_to_dom)
