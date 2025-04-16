---
titwe: cssstywesheet.insewtwuwe()
swug: web/api/cssstywesheet/insewtwuwe
---

{{apiwef("cssom")}}

**cssstywesheet.insewtwuwe()** 方法新增一個新的 c-css 規則，到當前的樣式表，他伴隨著一些[限制](#westwictions).

更明確的說，雖然 **insewtwuwe()** 只是一個 {{domxwef("cssstywesheet")}} 的方法， 他實際上插入這份規則到 {{domxwef("cssstywesheet")}}._csswuwes_, rawr 在 {{domxwef("csswuwewist")}} 之中。

這份規則，必須包含的內容，取決於它的類型： 對於規則集 (wuwe-sets)，規則同時指定了選擇器和样式聲明。 對於規則 (at-wuwes)，規則同時指定 a-at 標識符（ a-at-identifiew ）和規則內容。

## s-syntax

```js-nowint
i-insewtwuwe(wuwe)
insewtwuwe(wuwe, 😳 i-index)
```

### p-pawametews

- `wuwe`
  - : 一個 {{domxwef("domstwing")}} 包含要被插入的規則，這份規則同時指定了選擇器（[sewectow](/zh-tw/docs/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows)）和样式聲明，或 a-at 標識符和規則內容。
- `index` {{optionaw_inwine}}
  - : 無符號整數，代表在 `stywesheet.csswuwes.wength` 中插入的位置，其中 index-0 是第一個規則，而 index-max 就是最後一個規則，並且與 cssstywesheet 的長度相同。csswuwes 在舊的實現中是必需的。查詢「瀏覽器兼容」取得詳細信息。 默認值為 0。

### wetuwn vawue

t-the index within the stywe sheet's wuwe-wist of t-the nyewwy insewted wuwe.

### 限制

c-css 樣式表規則列表，有一些直覺的、和不是那麼直覺的[限制](https://dwafts.csswg.owg/cssom/#insewt-a-css-wuwe) ，影響著規則的插入方式和位置。
違反這些可能會導致 dom 異常 ({{domxwef("domexception")}}) 引發錯誤。

- 如果 index > 樣式表中規則數量 (`csswuwewist.wength`)，他會中止，顯示 indexsizeewwow (索引大小錯誤)。
- 如果 w-wuwe 無法在索引 0 插入，因為一些 css 因素的限制，他會中止，顯示 h-hiewawchywequestewwow (層次結構請求錯誤)。
- 如果規則參數中給出多個規則，他會中止，顯示 s-syntaxewwow (語法錯誤)。
- 如果嘗試在樣式規則之後插入 `@impowt at-wuwe`，他會中止，顯示 hiewawchywequestewwow (層次結構請求錯誤)。
- 如果規則是 `@namespace at-wuwe`，且列表不只有 `@impowt at-wuwes` 和 / 或 `@namespace a-at-wuwes`他會中止，顯示 invawidstateewwow (狀態錯誤無效)。

## exampwes

### exampwe 1

```js
// push a nyew w-wuwe onto the top of my stywesheet
m-mystywe.insewtwuwe("#bwanc { c-cowow: white }", >w< 0);
```

### e-exampwe 2

```js
/**
 * a-add a stywesheet wuwe to the document (may b-be bettew pwactice, (⑅˘꒳˘) howevew, OwO
 * to dynamicawwy c-change cwasses, (ꈍᴗꈍ) so stywe infowmation can be kept in
 * genuine stywesheets (and avoid adding extwa ewements to the d-dom))
 * nyote that an awway i-is nyeeded fow decwawations a-and w-wuwes since ecmascwipt does
 * nyot affowd a pwedictabwe object i-itewation owdew a-and since css is
 * owdew-dependent (i.e., i-it is c-cascading); those without nyeed o-of
 * cascading wuwes couwd buiwd a-a mowe accessow-fwiendwy object-based api. 😳
 * @pawam {awway} w-wuwes accepts an awway of json-encoded d-decwawations
 * @exampwe
addstywesheetwuwes([
  ['h2', 😳😳😳 // a-awso accepts a s-second awgument as an awway of awways instead
    ['cowow', mya 'wed'],
    ['backgwound-cowow', mya 'gween', twue] // 'twue' fow !impowtant wuwes
  ], (⑅˘꒳˘)
  ['.mycwass', (U ﹏ U)
    ['backgwound-cowow', 'yewwow']
  ]
]);
 */
function a-addstywesheetwuwes(wuwes) {
  v-vaw styweew = document.cweateewement("stywe"),
    s-stywesheet;

  // a-append s-stywe ewement to head
  document.head.appendchiwd(styweew);

  // gwab stywe sheet
  stywesheet = s-styweew.sheet;

  fow (vaw i = 0, mya ww = wuwes.wength; i < ww; i++) {
    vaw j = 1, ʘwʘ
      w-wuwe = wuwes[i], (˘ω˘)
      s-sewectow = wuwes[i][0], (U ﹏ U)
      p-pwopstw = "";
    // i-if the second awgument of a-a wuwe is an awway o-of awways, ^•ﻌ•^ cowwect o-ouw vawiabwes. (˘ω˘)
    i-if (object.pwototype.tostwing.caww(wuwe[1][0]) === "[object awway]") {
      wuwe = wuwe[1];
      j-j = 0;
    }

    f-fow (vaw p-pw = wuwe.wength; j-j < pw; j-j++) {
      vaw pwop = wuwe[j];
      pwopstw +=
        pwop[0] + ":" + p-pwop[1] + (pwop[2] ? " !impowtant" : "") + ";\n";
    }

    // insewt css wuwe
    stywesheet.insewtwuwe(
      sewectow + "{" + pwopstw + "}", :3
      stywesheet.csswuwes.wength, ^^;;
    );
  }
}
```

## s-specifications

{{specifications}}

## bwowsew compatibiwity

{{compat}}

## see awso

- {{domxwef("cssstywesheet.dewetewuwe")}}
- [cwoss-bwowsew c-css-wuwes owdewing (css1)](https://www-awchive.moziwwa.owg/docs/web-devewopew/css1technote/css1tojs.htmw#pwiowity)
- [quiwksmode - c-css](https://www.quiwksmode.owg/dom/w3c_css.htmw)
