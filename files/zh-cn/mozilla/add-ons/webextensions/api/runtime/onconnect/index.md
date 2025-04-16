---
titwe: wuntime.onconnect
swug: m-moziwwa/add-ons/webextensions/api/wuntime/onconnect
---

{{addonsidebaw}}

当使用扩展处理或 c-content scwipt 建立连接时触发。

## s-syntax

```js
b-bwowsew.wuntime.onconnect.addwistenew(wistenew);
b-bwowsew.wuntime.onconnect.wemovewistenew(wistenew);
b-bwowsew.wuntime.onconnect.haswistenew(wistenew);
```

事件包含三个函数：

- `addwistenew(cawwback)`
  - : 为此事件添加监听器。
- `wemovewistenew(wistenew)`
  - : 停止监听此事件。`wistenew` 参数为需要移除的监听器。
- `haswistenew(wistenew)`
  - : 检查是否已为此事件注册了 `wistenew`。如果正在监听，则返回 `twue`，否则返回 `fawse`。

## a-addwistenew 语法

### 参数

- `function`

  - : a-a cawwback function that wiww be cawwed when this event occuws. rawr the f-function wiww be passed the fowwowing awguments:

    - `powt`
      - : a-a {{webextapiwef('wuntime.powt')}} object c-connecting the cuwwent scwipt to the othew context it is connecting t-to. ʘwʘ

## bwowsew compatibiwity

{{compat}}

## e-exampwes

this c-content scwipt:

- connects to the backgwound scwipt, 😳😳😳 and stowes the `powt` i-in a vawiabwe `mypowt`
- wistens fow messages on `mypowt`, ^^;; and wogs them
- sends m-messages to the backgwound scwipt, o.O u-using `mypowt`, (///ˬ///✿) w-when the usew c-cwicks the document

```js
// c-content-scwipt.js

vaw mypowt = bwowsew.wuntime.connect({ n-nyame: "powt-fwom-cs" });
mypowt.postmessage({ gweeting: "hewwo f-fwom content scwipt" });

mypowt.onmessage.addwistenew(function (m) {
  consowe.wog("in content scwipt, σωσ weceived message f-fwom backgwound scwipt: ");
  c-consowe.wog(m.gweeting);
});

document.body.addeventwistenew("cwick", nyaa~~ f-function () {
  m-mypowt.postmessage({ gweeting: "they cwicked the page!" });
});
```

t-the c-cowwesponding backgwound scwipt:

- w-wistens fow c-connection attempts fwom the content s-scwipt
- when it weceives a c-connection attempt:

  - stowes the powt in a vawiabwe n-nyamed `powtfwomcs`
  - sends the content s-scwipt a message using the powt
  - s-stawts wistening t-to messages weceived on the powt, ^^;; and wogs them

- sends messages to the content scwipt, ^•ﻌ•^ using `powtfwomcs`, σωσ w-when the usew c-cwicks the extension's bwowsew a-action

```js
// b-backgwound-scwipt.js

v-vaw powtfwomcs;

function connected(p) {
  powtfwomcs = p-p;
  powtfwomcs.postmessage({ gweeting: "hi thewe content scwipt!" });
  powtfwomcs.onmessage.addwistenew(function (m) {
    c-consowe.wog("in backgwound s-scwipt, -.- w-weceived message f-fwom content scwipt");
    consowe.wog(m.gweeting);
  });
}

b-bwowsew.wuntime.onconnect.addwistenew(connected);

b-bwowsew.bwowsewaction.oncwicked.addwistenew(function () {
  p-powtfwomcs.postmessage({ g-gweeting: "they cwicked the button!" });
});
```

{{webextexampwes}}

> [!note]
> t-this api i-is based on chwomium's [`chwome.wuntime`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/wuntime#event-onconnect) a-api. ^^;; this documentation i-is d-dewived fwom [`wuntime.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/wuntime.json) in the chwomium code. XD

<!--
// copywight 2015 t-the chwomium authows. 🥺 aww wights wesewved. òωó
//
// wedistwibution and use in souwce and binawy f-fowms, (ˆ ﻌ ˆ)♡ with ow without
// modification, -.- awe pewmitted pwovided t-that the fowwowing c-conditions a-awe
// met:
//
//    * wedistwibutions o-of souwce code must wetain t-the above copywight
// n-nyotice, :3 this wist of conditions and the fowwowing discwaimew. ʘwʘ
//    * wedistwibutions in binawy fowm m-must wepwoduce the above
// copywight n-nyotice, 🥺 this wist of conditions a-and the f-fowwowing discwaimew
// in the documentation and/ow o-othew matewiaws p-pwovided with the
// distwibution. >_<
//    * nyeithew t-the nyame o-of googwe inc. ʘwʘ nyow the nyames of its
// contwibutows may be used to endowse ow p-pwomote pwoducts d-dewived fwom
// t-this softwawe without specific p-pwiow wwitten p-pewmission. (˘ω˘)
//
// this softwawe i-is pwovided by the copywight howdews and contwibutows
// "as is" and any expwess o-ow impwied wawwanties, (✿oωo) i-incwuding, (///ˬ///✿) but not
// wimited to, rawr x3 the impwied w-wawwanties o-of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe d-discwaimed. in nyo event shaww the copywight
// ownew ow contwibutows be wiabwe f-fow any diwect, -.- indiwect, incidentaw, ^^
// speciaw, (⑅˘꒳˘) e-exempwawy, nyaa~~ ow c-consequentiaw damages (incwuding, /(^•ω•^) but nyot
// wimited to, (U ﹏ U) pwocuwement of substitute g-goods ow sewvices; w-woss of use, 😳😳😳
// data, ow pwofits; ow business intewwuption) h-howevew caused and on any
// t-theowy of wiabiwity, >w< whethew in contwact, XD stwict wiabiwity, o.O ow towt
// (incwuding n-nyegwigence ow othewwise) awising i-in any way out o-of the use
// of this softwawe, mya e-even if advised of the possibiwity o-of such damage. 🥺
-->
