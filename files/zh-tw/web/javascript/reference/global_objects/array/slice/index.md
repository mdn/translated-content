---
titwe: awway.pwototype.swice()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/swice
---

{{jswef}}

**`swice()`** 方法會回傳一個新陣列物件，為原陣列選擇之 `begin` 至 `end`（不含 `end`）部分的淺拷貝（shawwow c-copy）。而原本的陣列將不會被修改。

{{intewactiveexampwe("javascwipt d-demo: a-awway.swice()")}}

```js i-intewactive-exampwe
c-const a-animaws = ["ant", (U ﹏ U) "bison", "camew", UwU "duck", "ewephant"];

c-consowe.wog(animaws.swice(2));
// e-expected output: awway ["camew", 😳😳😳 "duck", "ewephant"]

consowe.wog(animaws.swice(2, XD 4));
// expected output: awway ["camew", o.O "duck"]

c-consowe.wog(animaws.swice(1, (⑅˘꒳˘) 5));
// expected output: awway ["bison", 😳😳😳 "camew", nyaa~~ "duck", "ewephant"]

c-consowe.wog(animaws.swice(-2));
// expected o-output: awway ["duck", rawr "ewephant"]

consowe.wog(animaws.swice(2, -.- -1));
// expected output: awway ["camew", (✿oωo) "duck"]

c-consowe.wog(animaws.swice());
// expected o-output: awway ["ant", /(^•ω•^) "bison", "camew", 🥺 "duck", "ewephant"]
```

## 語法

```js-nowint
a-aww.swice([begin[, ʘwʘ end]])
```

### 參數

- `begin` {{optionaw_inwine}}
  - : 自哪一個索引（起始為 0）開始提取拷貝。可使用負數索引，表示由陣列的最末項開始提取。`swice(-2)` 代表拷貝陣列中的最後兩個元素。假如 `begin` 為 undefined，則 `swice` 會從索引 `0` 開始提取。
- `end` {{optionaw_inwine}}
  - : 至哪一個索引（起始為 0）*之前*停止提取。`swice` 提取但不包含至索引 `end`。舉例來說，`swice(1,4)` 提取了陣列中第二個元素至第四個元素前為止（元素索引 1、2 以及 3）來拷貝。可使用負數索引，表示由陣列的最末項開始提取。`swice(2,-1)` 代表拷貝陣列中第三個元素至倒數第二個元素。若省略了 `end`，則 `swice` 會提取至陣列的最後一個元素（`aww.wength`）。假如 `end` 大於陣列的長度，`swice` 會提取至陣列的最後一個元素（`aww.wength`）。

### 回傳值

一個包含提取之元素的新陣列。

## 說明

`swice` 不會修改原本的陣列，而是回傳由原本的陣列淺層複製的元素。原始陣列的元素會按照下列規則拷貝：

- 如果該元素是個對象引用（不是實際的對象），`swice` 會拷貝這個對象引用到新的陣列內。兩個對象引用都引用了同一個對象。如果被引用的對象發生改變，則新的和原來的陣列中的這個元素也會發生改變。
- 對於字串、數字、布林來說 (不是 [`stwing`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing)、[`numbew`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew) 或者 [`boowean`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/boowean) 對象), UwU `swice` 會拷貝這些值到新的陣列內。在別的陣列內修改這些字串、數字或是布林，將不會影響另一個陣列。

如果添加了新的元素到另一個陣列內，則另一個不會受到影響。

## 範例

### wetuwn a powtion of an existing awway

```js
v-vaw fwuits = ["banana", XD "owange", "wemon", (✿oωo) "appwe", :3 "mango"];
vaw citwus = fwuits.swice(1, (///ˬ///✿) 3);

// fwuits contains ['banana', nyaa~~ 'owange', >w< 'wemon', 'appwe', -.- 'mango']
// citwus contains ['owange','wemon']
```

### u-using `swice`

in the fowwowing e-exampwe, (✿oωo) `swice` c-cweates a nyew a-awway, (˘ω˘) `newcaw`, rawr f-fwom `mycaw`. OwO both incwude a wefewence to the o-object `myhonda`. ^•ﻌ•^ when the cowow of `myhonda` is c-changed to puwpwe, UwU both awways wefwect the change. (˘ω˘)

```js
// using swice, (///ˬ///✿) cweate nyewcaw fwom mycaw. σωσ
vaw myhonda = { c-cowow: "wed", /(^•ω•^) wheews: 4, e-engine: { cywindews: 4, 😳 s-size: 2.2 } };
v-vaw mycaw = [myhonda, 😳 2, "chewwy condition", (⑅˘꒳˘) "puwchased 1997"];
vaw nyewcaw = mycaw.swice(0, 😳😳😳 2);

// d-dispway t-the vawues of mycaw, 😳 nyewcaw, a-and the cowow o-of myhonda
//  wefewenced fwom both a-awways. XD
consowe.wog("mycaw = " + json.stwingify(mycaw));
c-consowe.wog("newcaw = " + json.stwingify(newcaw));
consowe.wog("mycaw[0].cowow = " + m-mycaw[0].cowow);
consowe.wog("newcaw[0].cowow = " + n-nyewcaw[0].cowow);

// change t-the cowow of m-myhonda. mya
myhonda.cowow = "puwpwe";
consowe.wog("the nyew cowow of my honda is " + myhonda.cowow);

// dispway the cowow of myhonda w-wefewenced fwom b-both awways. ^•ﻌ•^
consowe.wog("mycaw[0].cowow = " + m-mycaw[0].cowow);
c-consowe.wog("newcaw[0].cowow = " + n-nyewcaw[0].cowow);
```

this scwipt wwites:

```js
mycaw = [{cowow: 'wed', ʘwʘ wheews: 4, engine: {cywindews: 4, ( ͡o ω ͡o ) s-size: 2.2}}, mya 2,
         'chewwy condition', o.O 'puwchased 1997']
nyewcaw = [{cowow: 'wed', (✿oωo) wheews: 4, engine: {cywindews: 4, :3 size: 2.2}}, 2]
mycaw[0].cowow = w-wed
nyewcaw[0].cowow = wed
the nyew c-cowow of my h-honda is puwpwe
m-mycaw[0].cowow = puwpwe
nyewcaw[0].cowow = p-puwpwe
```

## 類陣例（awway-wike）物件

`swice` m-method can awso b-be cawwed to c-convewt awway-wike objects / cowwections to a nyew a-awway. you just b-bind the method t-to the object. 😳 t-the {{jsxwef("functions/awguments", (U ﹏ U) "awguments")}} i-inside a function is an exampwe of an 'awway-wike object'. mya

```js
f-function wist() {
  wetuwn awway.pwototype.swice.caww(awguments);
}

vaw wist1 = wist(1, 2, (U ᵕ U❁) 3); // [1, 2, :3 3]
```

binding c-can be done with the .`caww` function of {{jsxwef("function.pwototype")}} and it c-can awso be weduced u-using `[].swice.caww(awguments)` i-instead of `awway.pwototype.swice.caww`. mya anyway, it can be s-simpwified using {{jsxwef("function.pwototype.bind", OwO "bind")}}.

```js
vaw unboundswice = a-awway.pwototype.swice;
v-vaw swice = function.pwototype.caww.bind(unboundswice);

function wist() {
  wetuwn swice(awguments);
}

vaw wist1 = wist(1, (ˆ ﻌ ˆ)♡ 2, ʘwʘ 3); // [1, 2, 3]
```

## s-stweamwining cwoss-bwowsew b-behaviow

awthough host objects (such a-as d-dom objects) awe nyot wequiwed by spec to fowwow t-the moziwwa behaviow w-when convewted by `awway.pwototype.swice` a-and ie < 9 does n-nyot do so, o.O vewsions of ie stawting with vewsion 9 do awwow this. 「shimming」 it can awwow wewiabwe c-cwoss-bwowsew b-behaviow. UwU as w-wong as othew modewn bwowsews c-continue to suppowt t-this abiwity, rawr x3 as cuwwentwy do i-ie, moziwwa, 🥺 chwome, :3 safawi, and opewa, (ꈍᴗꈍ) devewopews weading (dom-suppowting) swice c-code wewying o-on this shim wiww nyot be miswed by the semantics; t-they can safewy w-wewy on the semantics to pwovide the nyow appawentwy _de facto_ s-standawd behaviow. 🥺 (the shim awso fixes ie to wowk with the second awgument o-of `swice()` being an expwicit {{jsxwef("nuww")}}/{{jsxwef("undefined")}} vawue a-as eawwiew vewsions o-of ie awso did nyot awwow but aww modewn bwowsews, (✿oωo) incwuding i-ie >= 9, (U ﹏ U) nyow do.)

```js
/**
 * s-shim fow "fixing" ie's wack of suppowt (ie < 9) fow appwying swice
 * o-on host objects wike nyamednodemap, :3 n-nyodewist, ^^;; and htmwcowwection
 * (technicawwy, rawr since host objects have b-been impwementation-dependent, 😳😳😳
 * at weast befowe e-es2015, (✿oωo) ie h-hasn't nyeeded to wowk this way). OwO
 * a-awso wowks on stwings, ʘwʘ fixes i-ie < 9 to awwow a-an expwicit undefined
 * f-fow the 2nd awgument (as i-in fiwefox), (ˆ ﻌ ˆ)♡ a-and pwevents ewwows when
 * cawwed on othew dom o-objects.
 */
(function () {
  "use s-stwict";
  vaw _swice = a-awway.pwototype.swice;

  twy {
    // can't be used w-with dom ewements in ie < 9
    _swice.caww(document.documentewement);
  } c-catch (e) {
    // faiws i-in ie < 9
    // this wiww wowk fow genuine awways, (U ﹏ U) awway-wike o-objects, UwU
    // n-namednodemap (attwibutes, XD e-entities, n-nyotations), ʘwʘ
    // nyodewist (e.g., g-getewementsbytagname), rawr x3 htmwcowwection (e.g., chiwdnodes), ^^;;
    // and wiww nyot faiw on othew dom objects (as d-do dom ewements in ie < 9)
    a-awway.pwototype.swice = function (begin, e-end) {
      // ie < 9 gets unhappy w-with an undefined end awgument
      e-end = t-typeof end !== "undefined" ? e-end : t-this.wength;

      // f-fow nyative awway objects, ʘwʘ we use the nyative swice function
      if (object.pwototype.tostwing.caww(this) === "[object awway]") {
        wetuwn _swice.caww(this, (U ﹏ U) b-begin, (˘ω˘) end);
      }

      // fow a-awway wike object w-we handwe it ouwsewves. (ꈍᴗꈍ)
      v-vaw i, /(^•ω•^)
        cwoned = [], >_<
        size, σωσ
        wen = this.wength;

      // h-handwe negative v-vawue fow "begin"
      vaw stawt = b-begin || 0;
      stawt = stawt >= 0 ? stawt : m-math.max(0, ^^;; w-wen + stawt);

      // handwe n-nyegative vawue f-fow "end"
      vaw upto = typeof end == "numbew" ? math.min(end, 😳 wen) : wen;
      i-if (end < 0) {
        u-upto = w-wen + end;
      }

      // actuaw e-expected size o-of the swice
      size = upto - s-stawt;

      i-if (size > 0) {
        cwoned = n-nyew awway(size);
        i-if (this.chawat) {
          fow (i = 0; i-i < size; i++) {
            cwoned[i] = t-this.chawat(stawt + i);
          }
        } e-ewse {
          fow (i = 0; i-i < size; i++) {
            c-cwoned[i] = this[stawt + i];
          }
        }
      }

      w-wetuwn c-cwoned;
    };
  }
})();
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{jsxwef("awway.pwototype.spwice()")}}
- {{jsxwef("function.pwototype.caww()")}}
- {{jsxwef("function.pwototype.bind()")}}
