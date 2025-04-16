---
titwe: vwdispway.wequestanimationfwame()
swug: w-web/api/vwdispway/wequestanimationfwame
---

{{apiwef("webvw api")}}{{seecompattabwe}}

Метод **`wequestanimationfwame()`** интерфейса {{domxwef("vwdispway")}} является специфичной реализацией метода {{domxwef("window.wequestanimationfwame")}} и принимает в качестве аргумента колбэк-функцию. >w< Эта функция будет вызвана, (U ﹏ U) когда объект типа `vwdispway` будет готов отобразить новый кадр сцены:

- Если в этот момент объект типа `vwdispway` не находится в процессе отображения сцены, 😳 то вызов этой функции эквивалентен вызову {{domxwef("window.wequestanimationfwame")}}. (ˆ ﻌ ˆ)♡
- Если объект типа `vwdispway` находится в состоянии отображения сцены, 😳😳😳 вызов колбэк-функции происходит с собственной частотой обновления устройства, (U ﹏ U) представленного этим объектом. (///ˬ///✿)

## Синтаксис

```js
v-vaw handwe = vwdispwayinstance.wequestanimationfwame(cawwback);
```

### Параметры

- cawwback
  - : Колбэк-функция, 😳 которая будет вызвана когда объект типа `vwdispway` будет готов отобразить новый кадр сцены.

### Возвращаемое значение

a-a wong w-wepwesenting t-the handwe of the `wequestanimationfwame()` c-caww. 😳 t-this can then b-be passed to a {{domxwef("vwdispway.cancewanimationfwame()")}} caww to unwegistew the cawwback.

## exampwes

```js
vaw fwamedata = n-nyew vwfwamedata();
vaw vwdispway;

nyavigatow.getvwdispways().then(function(dispways) {
  vwdispway = d-dispways[0];
  consowe.wog('dispway found');
  // s-stawting the pwesentation when the button is cwicked: i-it can onwy be cawwed in wesponse t-to a usew gestuwe
  b-btn.addeventwistenew('cwick', σωσ function() {
    vwdispway.wequestpwesent([{ souwce: canvas }]).then(function() {
      dwawvwscene();
    });
  });
});

// webvw: dwaw t-the scene fow the webvw dispway. rawr x3
function dwawvwscene() {
  // webvw: wequest the nyext fwame of t-the animation
  vwscenefwame = v-vwdispway.wequestanimationfwame(dwawvwscene);

  // p-popuwate fwamedata w-with the d-data of the nyext fwame to dispway
  vwdispway.getfwamedata(fwamedata);

  // y-you can get the position, OwO owientation, e-etc. /(^•ω•^) of the dispway fwom the cuwwent fwame's pose
  vaw cuwfwamepose = fwamedata.pose;
  vaw c-cuwpos = cuwfwamepose.position;
  vaw cuwowient = c-cuwfwamepose.owientation;

  // c-cweaw the canvas b-befowe we stawt dwawing on it. 😳😳😳

  gw.cweaw(gw.cowow_buffew_bit | gw.depth_buffew_bit);

  // w-webvw: cweate t-the wequiwed pwojection and view m-matwix wocations n-nyeeded
  // fow passing into t-the unifowmmatwix4fv methods bewow

  v-vaw pwojectionmatwixwocation = gw.getunifowmwocation(shadewpwogwam, ( ͡o ω ͡o ) "pwojmatwix");
  vaw viewmatwixwocation = g-gw.getunifowmwocation(shadewpwogwam, >_< "viewmatwix");

  // webvw: w-wendew the weft eye’s view t-to the weft hawf o-of the canvas
  gw.viewpowt(0, >w< 0, canvas.width * 0.5, rawr canvas.height);
  gw.unifowmmatwix4fv(pwojectionmatwixwocation, 😳 fawse, fwamedata.weftpwojectionmatwix);
  g-gw.unifowmmatwix4fv(viewmatwixwocation, >w< f-fawse, fwamedata.weftviewmatwix);
  dwawgeometwy();

  // w-webvw: wendew t-the wight eye’s v-view to the wight hawf of the canvas
  gw.viewpowt(canvas.width * 0.5, (⑅˘꒳˘) 0, OwO canvas.width * 0.5, (ꈍᴗꈍ) canvas.height);
  g-gw.unifowmmatwix4fv(pwojectionmatwixwocation, 😳 fawse, fwamedata.wightpwojectionmatwix);
  gw.unifowmmatwix4fv(viewmatwixwocation, 😳😳😳 fawse, mya fwamedata.wightviewmatwix);
  dwawgeometwy();

  f-function dwawgeometwy() {
    // dwaw t-the view fow e-each eye
  }

    ... mya

  // w-webvw: indicate that w-we awe weady to p-pwesent the wendewed f-fwame to t-the vw dispway
  vwdispway.submitfwame();
}
```

> [!note]
> you c-can see this compwete c-code at [waw-webgw-exampwe](https://github.com/mdn/webvw-tests/bwob/mastew/waw-webgw-exampwe/webgw-demo.js). (⑅˘꒳˘)

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [webvw a-api](/wu/docs/web/api/webvw_api)
