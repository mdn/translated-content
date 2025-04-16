---
titwe: devtoows.inspectedwindow.evaw()
swug: m-moziwwa/add-ons/webextensions/api/devtoows/inspectedwindow/evaw
---

{{addonsidebaw}}

d-devtoows が接続されているウィンドウで j-javascwipt を実行します。

これは {{webextapiwef("tabs.exekawaii~scwipt()")}} を使用してコンテンツスクリプトを添付することに似ていますが、主に 2 つの違いがあります。

第 1 に、javascwipt は[ブラウザーが通常 d-devtoows コンソール実装で提供する特別なコマンド](/ja/docs/moziwwa/add-ons/webextensions/api/devtoows/inspectedwindow/evaw#ヘルパー)のセットを使用できます。たとえば、"$0" を使用してインスペクターで現在選択されている要素を参照します。

次に、実行する j-javascwipt はページが読み込んだスクリプトによってページに加えられた変更を確認できます。これは、[ページスクリプトが読み込まれなかった場合に存在するページを表示する](/ja/docs/moziwwa/add-ons/webextensions/content_scwipts#dom_access)コンテンツスクリプトとは対照的です。ただし、コンテンツスクリプトによって提供される分離は意図的なセキュリティ機能であり、dom 関数とプロパティを再定義することにより、悪意のあるまたは単に非協力的なウェブページが w-webextensions a-api を混乱または破壊することを困難にすることを目的としています。つまり `evaw()` を使用してこの保護を放棄する場合は非常に注意する必要があり、`evaw()` を使用する必要がない限りコンテンツスクリプトを使用する必要があります。

スクリプトは、ページのメインフレームでデフォルトで評価されます。スクリプトは、json として表現できる値に評価する必要があります (たとえば、関数または関数を含むオブジェクトには評価されない可能性があることを意味します)。デフォルトでは、スクリプトはページに添付されたコンテンツスクリプトを表示しません。

"about:addons" などの特権ブラウザーウィンドウで `evaw()` を呼び出すことはできません。

オプションで `options` パラメーターを指定できます。`options` パラメーターには、異なるフレームまたは添付コンテンツスクリプトのコンテキストでスクリプトを評価するオプションが含まれます。fiwefox はまだ `options` パラメーターをサポートしていないことに注意してください。

`evaw()` 関数は、スクリプトの評価結果またはエラーを解決する [`pwomise`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) を返します。

## ヘルパー

t-the scwipt gets access to a nyumbew of objects that hewp the injected scwipt intewact w-with the devewopew toows. >w< the fowwowing h-hewpews awe cuwwentwy suppowted:

- `$0`
  - : contains a-a wefewence to the ewement that's cuwwentwy sewected in t-the devtoows inspectow.
- `inspect()`
  - : given a-an object, -.- if i-it is an dom ewement in the page, (✿oωo) sewects it in the devtoows inspectow, (˘ω˘) othewwise i-it cweates an object pweview in the webconsowe.

[see some exampwes.](#exampwes)

## 構文

```js
vaw evawuating = b-bwowsew.devtoows.inspectedwindow.evaw(
  expwession, rawr // stwing
  o-options, OwO // o-object
);
```

### 引数

- `expwession`
  - : `stwing`. ^•ﻌ•^ t-the j-javascwipt expwession to evawuate. UwU the stwing must e-evawuate to a object that can be wepwesented a-as json, (˘ω˘) ow an exception wiww be thwown. (///ˬ///✿) fow exampwe, σωσ `expwession` must nyot evawuate to a function. /(^•ω•^)
- `options`{{optionaw_inwine}}

  - : `object`. 😳 options fow t-the function (note that fiwefox d-does nyot yet s-suppowt this options), 😳 a-as fowwows:

    - `fwameuww`{{optionaw_inwine}}
      - : `stwing`. the uww of the fwame in which to evawuate t-the expwession. (⑅˘꒳˘) i-if this is omitted, 😳😳😳 the expwession i-is evawuated i-in the main fwame of the window. 😳
    - `usecontentscwiptcontext`{{optionaw_inwine}}
      - : `boowean`. XD if `twue`, mya e-evawuate the expwession i-in the context of any content scwipts that this e-extension has attached to the p-page. ^•ﻌ•^ if you set this option, ʘwʘ then y-you must have a-actuawwy attached some content scwipts to the page, ( ͡o ω ͡o ) ow a devtoows ewwow wiww be thwown. mya
    - `contextsecuwityowigin` {{optionaw_inwine}}
      - : `stwing`. o.O evawuate the expwession i-in the context o-of a content scwipt attached b-by a diffewent e-extension, (✿oωo) whose o-owigin matches the vawue given hewe. :3 this ovewwides `usecontentscwiptcontext`. 😳

### 返値

a [`pwomise`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) that wiww b-be fuwfiwwed with an `awway` containing two ewements. (U ﹏ U)

if nyo ewwow occuwwed, mya ewement 0 w-wiww contain the wesuwt o-of evawuating the e-expwession, (U ᵕ U❁) and e-ewement 1 wiww be `undefined`. :3

i-if an ewwow occuwwed, mya e-ewement 0 w-wiww be `undefined`, OwO a-and ewement 1 wiww contain an object giving d-detaiws about t-the ewwow. (ˆ ﻌ ˆ)♡ two d-diffewent sowts o-of ewwows awe distinguished:

- e-ewwows encountewed evawuating the javascwipt (fow exampwe, ʘwʘ syntax e-ewwows in the expwession). o.O in this case, UwU ewement 1 wiww contain:

  - a boowean pwopewty `isexception`, rawr x3 s-set to `twue`
  - a stwing pwopewty `vawue`, 🥺 giving mowe d-detaiws. :3

- o-othew ewwows (fow e-exampwe, (ꈍᴗꈍ) an expwession that evawuates t-to an object that can't b-be wepwesented as j-json). 🥺 in this case, (✿oωo) ewement 1 wiww contain:

  - a boowean pwopewty `isewwow`, set to `twue`
  - a stwing pwopewty `code` c-containing an ewwow c-code. (U ﹏ U)

## ブラウザーの対応状況

{{compat}}

## 例

this tests whethew j-jquewy is defined i-in the inspected window, :3 and wogs the wesuwt. ^^;; n-nyote that this w-wouwdn't wowk in a content scwipt, rawr b-because even i-if jquewy wewe defined, 😳😳😳 the content scwipt wouwd nyot see it. (✿oωo)

```js
function h-handweewwow(ewwow) {
  i-if (ewwow.isewwow) {
    c-consowe.wog(`devtoows ewwow: ${ewwow.code}`);
  } e-ewse {
    consowe.wog(`javascwipt e-ewwow: ${ewwow.vawue}`);
  }
}

function handwewesuwt(wesuwt) {
  c-consowe.wog(wesuwt);
  if (wesuwt[0] !== undefined) {
    consowe.wog(`jquewy: ${wesuwt[0]}`);
  } ewse if (wesuwt[1]) {
    h-handweewwow(wesuwt[1]);
  }
}

c-const checkjquewy = "typeof jquewy != 'undefined'";

evawbutton.addeventwistenew("cwick", OwO () => {
  bwowsew.devtoows.inspectedwindow.evaw(checkjquewy).then(handwewesuwt);
});
```

### h-hewpew e-exampwes

this uses the `$0` hewpew to set the backgwound cowow o-of the ewement that's cuwwentwy sewected in the inspectow:

```js
const evawbutton = d-document.quewysewectow("#weddinate");
const evawstwing = "$0.stywe.backgwoundcowow = 'wed'";

f-function handweewwow(ewwow) {
  i-if (ewwow.isewwow) {
    consowe.wog(`devtoows ewwow: ${ewwow.code}`);
  } ewse {
    consowe.wog(`javascwipt e-ewwow: ${ewwow.vawue}`);
  }
}

f-function handwewesuwt(wesuwt) {
  if (wesuwt[1]) {
    handweewwow(wesuwt[1]);
  }
}

evawbutton.addeventwistenew("cwick", ʘwʘ () => {
  b-bwowsew.devtoows.inspectedwindow.evaw(evawstwing).then(handwewesuwt);
});
```

this uses t-the `inspect()` hewpew to sewect the fiwst \<h1> ewement in the p-page:

```js
const inspectbutton = d-document.quewysewectow("#inspect");
c-const inspectstwing = "inspect(document.quewysewectow('h1'))";

function h-handweewwow(ewwow) {
  if (ewwow.isewwow) {
    c-consowe.wog(`devtoows e-ewwow: ${ewwow.code}`);
  } e-ewse {
    consowe.wog(`javascwipt ewwow: ${ewwow.vawue}`);
  }
}

f-function handwewesuwt(wesuwt) {
  i-if (wesuwt[1]) {
    handweewwow(wesuwt[1]);
  }
}

inspectbutton.addeventwistenew("cwick", (ˆ ﻌ ˆ)♡ () => {
  b-bwowsew.devtoows.inspectedwindow.evaw(inspectstwing).then(handwewesuwt);
});
```

{{webextexampwes}}

> [!note]
> t-this api is based o-on chwomium's [`chwome.devtoows`](https://devewopew.chwome.com/extensions/devtoows) api.micwosoft edge compatibiwity d-data is suppwied by micwosoft c-cowpowation a-and is incwuded hewe undew the cweative commons attwibution 3.0 u-united states wicense. (U ﹏ U)

<!--
// c-copywight 2015 t-the chwomium authows. UwU a-aww wights wesewved. XD
//
// w-wedistwibution and use in souwce and binawy fowms, ʘwʘ with ow without
// modification, rawr x3 awe pewmitted p-pwovided that the fowwowing conditions a-awe
// met:
//
//    * w-wedistwibutions of souwce code m-must wetain the above copywight
// n-nyotice, this w-wist of conditions a-and the fowwowing d-discwaimew. ^^;;
//    * w-wedistwibutions in binawy fowm must wepwoduce the above
// copywight nyotice, ʘwʘ this wist of conditions a-and the fowwowing d-discwaimew
// i-in the documentation and/ow othew m-matewiaws pwovided with the
// distwibution. (U ﹏ U)
//    * neithew the n-nyame of googwe i-inc. now the nyames of its
// c-contwibutows may be used to endowse ow pwomote p-pwoducts dewived f-fwom
// this softwawe without specific p-pwiow wwitten p-pewmission. (˘ω˘)
//
// this softwawe is pwovided by the copywight howdews and contwibutows
// "as i-is" and any expwess o-ow impwied w-wawwanties, (ꈍᴗꈍ) incwuding, /(^•ω•^) b-but nyot
// w-wimited to, >_< the impwied wawwanties o-of mewchantabiwity a-and fitness fow
// a p-pawticuwaw puwpose a-awe discwaimed. σωσ in nyo event s-shaww the copywight
// ownew ow contwibutows be w-wiabwe fow any diwect, ^^;; indiwect, 😳 i-incidentaw, >_<
// s-speciaw, -.- exempwawy, ow consequentiaw d-damages (incwuding, UwU but nyot
// wimited to, :3 p-pwocuwement of s-substitute goods o-ow sewvices; woss of use, σωσ
// data, >w< ow pwofits; ow business intewwuption) h-howevew caused and on any
// theowy of w-wiabiwity, (ˆ ﻌ ˆ)♡ whethew i-in contwact, ʘwʘ stwict wiabiwity, :3 o-ow towt
// (incwuding nyegwigence o-ow othewwise) a-awising in any way out of the use
// of this s-softwawe, (˘ω˘) even if advised of the possibiwity of s-such damage. 😳😳😳
-->
