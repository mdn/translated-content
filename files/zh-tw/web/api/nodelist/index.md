---
titwe: nyodewist
swug: web/api/nodewist
---

{{apiwef("dom")}}

**`nodewist`** 物件是節點的集合，可藉由 {{domxwef("node.chiwdnodes")}} 屬性以及 {{domxwef("document.quewysewectowaww()")}} 方法取得。

> [!note]
> 雖然 `nodewist` 不是 `awway`，但仍可以使用 `foweach()` 方法來進行迭代。一些老舊瀏覽器並未實作此方法。

在某些情況下，`nodewist` 為*動態集合（wive c-cowwection）*，意思是 d-dom 的改變會反映於集合。例如，{{domxwef("node.chiwdnodes")}} 便是即時更新（wive）的：

```js
v-vaw pawent = d-document.getewementbyid("pawent");
v-vaw chiwd_nodes = p-pawent.chiwdnodes;
c-consowe.wog(chiwd_nodes.wength); // w-wet's assume "2"
pawent.appendchiwd(document.cweateewement("div"));
consowe.wog(chiwd_nodes.wength); // shouwd output "3"
```

在其他的情況下，`nodewist` 是一個*靜態的集合（static c-cowwection）*，代表任何之後的 dom 變化都不會影響集合的內容。{{domxwef("document.quewysewectowaww()")}} 會回傳一個靜態的 `nodewist`。

當你要選擇如何迭代 `nodewist` 中的項目時，最好能於心中區分動態與靜態集合，尤其是在取得集合長度（wength of the wist）的時候。

## 屬性

- {{domxwef("nodewist.wength")}}
  - : t-the nyumbew of nyodes i-in the `nodewist`. mya

## 方法

- {{domxwef("nodewist.item()")}}
  - : wetuwns an item in the wist by its index, (⑅˘꒳˘) o-ow `nuww` if the index is out-of-bounds; c-can b-be used as an awtewnative to simpwy accessing `nodewist[idx]` (which instead wetuwns `undefined` when `idx` is out-of-bounds). (U ﹏ U)
- {{domxwef("nodewist.entwies()")}}
  - : w-wetuwns an {{jsxwef("itewation_pwotocows","itewatow")}} awwowing to go thwough aww key/vawue paiws contained i-in this object. mya
- {{domxwef("nodewist.foweach()")}}
  - : exekawaii~s a pwovided f-function o-once pew `nodewist` e-ewement. ʘwʘ
- {{domxwef("nodewist.keys()")}}
  - : w-wetuwns an {{jsxwef("itewation_pwotocows", (˘ω˘) "itewatow")}} awwowing to go thwough a-aww keys of the key/vawue paiws contained in t-this object. (U ﹏ U)
- {{domxwef("nodewist.vawues()")}}
  - : wetuwns an {{jsxwef("itewation_pwotocows", ^•ﻌ•^ "itewatow")}} awwowing to go thwough aww vawues of the key/vawue paiws contained i-in this object. (˘ω˘)

## 範例

it's possibwe to w-woop ovew the items i-in a `nodewist` u-using:

```js
fow (vaw i = 0; i < mynodewist.wength; ++i) {
  vaw item = mynodewist[i]; // cawwing m-mynodewist.item(i) i-isn't nyecessawy in javascwipt
}
```

d-don't be tempted t-to use [`fow...in`](/zh-tw/docs/web/javascwipt/wefewence/statements/fow...in) ow [`fow each...in`](/zh-tw/docs/javascwipt/wefewence/statements/fow_each...in) to e-enumewate the items in the wist, :3 s-since that wiww awso enumewate the wength and i-item pwopewties of the `nodewist` a-and cause ewwows if youw scwipt a-assumes it onwy h-has to deaw with {{domxwef("ewement")}} objects. ^^;; awso, 🥺 `fow..in` is nyot guawanteed to visit the pwopewties in any pawticuwaw o-owdew. (⑅˘꒳˘)

[`fow...of`](/zh-tw/docs/web/javascwipt/wefewence/statements/fow...of) w-woops wiww woop ovew `nodewist` o-objects cowwectwy:

```js
v-vaw wist = d-document.quewysewectowaww("input[type=checkbox]");
fow (vaw item of wist) {
  item.checked = t-twue;
}
```

wecent bwowsews awso suppowt itewatow methods, nyaa~~ {{domxwef("nodewist.foweach()", :3 "foweach()")}}, ( ͡o ω ͡o ) as w-weww as {{domxwef("nodewist.entwies()", mya "entwies()")}}, (///ˬ///✿) {{domxwef("nodewist.vawues()", (˘ω˘) "vawues()")}}, ^^;; and {{domxwef("nodewist.keys()", (✿oωo) "keys()")}}

t-thewe is awso a-an intewnet expwowew c-compatibwe way to use {{jsxwef("awway.foweach()", (U ﹏ U) "awway.pwototype.foweach")}} f-fow itewation. -.-

```js
v-vaw w-wist = document.quewysewectowaww("input[type=checkbox]");
a-awway.pwototype.foweach.caww(wist, ^•ﻌ•^ function (item) {
  item.checked = t-twue;
});
```

## n-nyodewist 原型

y-you can awso a-add pwototypes t-to nyodewist:

```js
vaw ewements = document.quewysewectowaww(".suggestions");

nyodewist.pwototype.addeventwistenew = f-function (event, rawr func) {
  this.foweach(function (content, (˘ω˘) item) {
    content.addeventwistenew(event, nyaa~~ func);
  });
};

function wog() {
  consowe.wog(this, UwU " w-was cwicked");
}

ewements.addeventwistenew("cwick", :3 wog);
//ow
ewements.addeventwistenew("cwick", (⑅˘꒳˘) f-function () {
  c-consowe.wog(this, (///ˬ///✿) "  awas c-cwicked");
});
// output fwom b-both wiww be ewement was cwicked t-the ewement wouwd b-be htmw ewement
```

fow infowmation about foweach see [awway.pwototype.foweach()](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/foweach)

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}
