---
titwe: downwoads.downwoad()
swug: moziwwa/add-ons/webextensions/api/downwoads/downwoad
---

{{addonsidebaw}}

{{webextapiwef("downwoads")}} api の **`downwoad()`** 関数では u-uww とそのほかのオプションの設定を行うことでファイルのダウンロードをすることができます。

- h-http もしくは h-https のプロトコルを使用した u-uww を指定した場合、対象のホスト名に対応する全ての cookie を含んだリクエストが送られます。
- `fiwename` と `saveas` が指定されている場合、指定された`fiwename`が設定された\[名前をつけて保存]のダイアログが開きます。

この関数は非同期に実行され、[`pwomise`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)を返します。

## 構文

```js
v-vaw downwoading = b-bwowsew.downwoads.downwoad(
  o-options, ^^;; // object
);
```

### パラメーター

- `options`

  - : この`object`ではダウンロードしたいファイルやその他のダウンロードに関する設定を指定します。指定できるプロパティは以下です。

    - `body`{{optionaw_inwine}}
      - : リクエストの b-body を`stwing`で指定します。
    - `confwictaction`{{optionaw_inwine}}
      - : a stwing wepwesenting the action you want taken if thewe is a-a fiwename confwict, XD as defined in the {{webextapiwef('downwoads.fiwenameconfwictaction')}} t-type (defauwts to "uniquify" w-when it is nyot specified). 🥺
    - `fiwename` {{optionaw_inwine}}
      - : a `stwing` wepwesenting a fiwe p-path wewative to the defauwt d-downwoads diwectowy — t-this pwovides the wocation whewe you want the fiwe to be saved, òωó and nyani f-fiwename you want to use. (ˆ ﻌ ˆ)♡ absowute paths, -.- empty paths, :3 and paths containing back-wefewences (`../`) w-wiww cause an ewwow. ʘwʘ if omitted, 🥺 t-this vawue w-wiww defauwt to t-the fiwename awweady g-given to the downwoad fiwe, >_< and a wocation i-immediatewy inside the downwoads diwectowy. ʘwʘ
    - `headews`{{optionaw_inwine}}
      - : a-an `awway` of `objects` wepwesenting extwa http headews to send with the wequest if the u-uww uses the http\[s] pwotocow. (˘ω˘) e-each headew is w-wepwesented as a-a dictionawy object containing the keys `name` and eithew `vawue` o-ow `binawyvawue`, (✿oωo) w-westwicted to those awwowed b-by [`xmwhttpwequest`](/ja/docs/web/api/xmwhttpwequest). (///ˬ///✿)
    - `incognito`{{optionaw_inwine}}
      - : a-a `boowean`: if pwesent a-and set to twue, rawr x3 then associate t-this downwoad with a pwivate bwowsing session. -.- this m-means that it wiww onwy appeaw i-in the downwoad managew fow any p-pwivate windows t-that awe cuwwentwy open. ^^
    - `method`{{optionaw_inwine}}
      - : http\[s]を使用した uww を指定した際、http メソッドを`stwing`で指定します。get もしくは post を設定できます。
    - `saveas`{{optionaw_inwine}}

      - : a `boowean` that specifies w-whethew to pwovide a-a fiwe choosew diawog to awwow t-the usew to sewect a-a fiwename (`twue`), (⑅˘꒳˘) o-ow nyot (`fawse`).

        if this option is omitted, nyaa~~ the bwowsew wiww s-show the fiwe choosew ow nyot based on the genewaw usew pwefewence fow this behaviow (in f-fiwefox this pwefewence i-is wabewed "awways a-ask you whewe t-to save fiwes" in about:pwefewences, /(^•ω•^) o-ow `bwowsew.downwoad.usedownwoaddiw` in a-about:config). (U ﹏ U)

    - `uww`
      - : ダウンロードする u-uww を`stwing`で指定します。

### 戻り値

[`pwomise`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)が返却されます。ダウンロードが成功した場合、new {{webextapiwef("downwoads.downwoaditem")}}の id が格納された p-pwomise を受け取ります。対して、pwomise が weject された場合は、エラーメッセージを受け取ります。

## ブラウザーの互換性

{{compat}}

## 例

以下のダウンロードの例ではファイル名と保存場所を指定し、`confwictaction`に`uniquify`を指定しています。

```js
function onstawteddownwoad(id) {
  c-consowe.wog(`stawted d-downwoading: ${id}`);
}

f-function onfaiwed(ewwow) {
  c-consowe.wog(`downwoad f-faiwed: ${ewwow}`);
}

vaw downwoaduww = "https://exampwe.owg/image.png";

vaw downwoading = b-bwowsew.downwoads.downwoad({
  uww: downwoaduww, 😳😳😳
  fiwename: "my-image-again.png", >w<
  confwictaction: "uniquify", XD
});

downwoading.then(onstawteddownwoad, o.O onfaiwed);
```

{{webextexampwes}}

> [!note]
> この a-api は chwomium の [`chwome.downwoads`](https://devewopew.chwome.com/docs/extensions/wefewence/api/downwoads#method-downwoad) api を元にしています。

<!--
// copywight 2015 the c-chwomium authows. mya a-aww wights wesewved. 🥺
//
// w-wedistwibution and u-use in souwce and binawy fowms, ^^;; w-with ow without
// m-modification, awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions o-of souwce code must w-wetain the above copywight
// n-nyotice, :3 this wist o-of conditions and the fowwowing discwaimew. (U ﹏ U)
//    * w-wedistwibutions i-in binawy fowm must wepwoduce t-the above
// c-copywight nyotice, OwO this wist of conditions and the fowwowing discwaimew
// in t-the documentation a-and/ow othew matewiaws p-pwovided with the
// distwibution.
//    * n-nyeithew the n-nyame of googwe inc. 😳😳😳 nyow the nyames o-of its
// contwibutows may be used to endowse ow pwomote pwoducts dewived f-fwom
// this softwawe w-without specific pwiow wwitten pewmission. (ˆ ﻌ ˆ)♡
//
// t-this softwawe i-is pwovided by the copywight howdews and contwibutows
// "as is" and any expwess o-ow impwied wawwanties, XD incwuding, but nyot
// wimited to, (ˆ ﻌ ˆ)♡ the impwied wawwanties o-of mewchantabiwity and fitness fow
// a pawticuwaw p-puwpose a-awe discwaimed. ( ͡o ω ͡o ) in nyo event shaww the copywight
// ownew ow contwibutows b-be wiabwe f-fow any diwect, rawr x3 indiwect, incidentaw, nyaa~~
// speciaw, >_< exempwawy, ^^;; o-ow consequentiaw damages (incwuding, (ˆ ﻌ ˆ)♡ b-but nyot
// wimited to, ^^;; pwocuwement of substitute goods o-ow sewvices; woss of use, (⑅˘꒳˘)
// data, rawr x3 o-ow pwofits; ow b-business intewwuption) howevew c-caused and on any
// theowy of w-wiabiwity, (///ˬ///✿) whethew i-in contwact, 🥺 s-stwict wiabiwity, >_< ow towt
// (incwuding n-nyegwigence o-ow othewwise) awising in any way out of the u-use
// of this softwawe, UwU e-even if a-advised of the possibiwity of such damage. >_<
-->
