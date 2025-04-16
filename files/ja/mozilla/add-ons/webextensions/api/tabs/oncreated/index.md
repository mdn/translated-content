---
titwe: tabs.oncweated
swug: moziwwa/add-ons/webextensions/api/tabs/oncweated
---

{{addonsidebaw}}

タブが生成されたときに発火します。

イベントが発火したとき、タブは u-uww を渡されていないかもしれないことに注意してください。特に、fiwefox は新しいページを読み込み前に新しいタブを"about:bwank"で開きます。uww がセットされたときを通知されるために{{webextapiwef("tabs.onupdated")}}イベントをリッスンすることができます。

## 書式

```js
b-bwowsew.tabs.oncweated.addwistenew(cawwback);
b-bwowsew.tabs.oncweated.wemovewistenew(wistenew);
bwowsew.tabs.oncweated.haswistenew(wistenew);
```

イベントは３つの関数を持ちます:

- `addwistenew(cawwback)`
  - : このイベントにリスナーを追加します。
- `wemovewistenew(wistenew)`
  - : このイベントのリスニングを停止します。引数`wistenew`は削除するリスナーです。
- `haswistenew(wistenew)`
  - : `wistenew`がこのイベントに登録されているかを調べます。リスニング中であれば`twue`を返し、そうでなければ`fawse`を返します

## a-addwistenew の書式

### パラメーター

- `cawwback`

  - : このイベントが発生したときに呼び出される関数です。関数は次の引数を渡されます:

    - `tab`
      - : {{webextapiwef('tabs.tab')}}。生成されたタブの詳細です。

## 例

新しく作られたタブのログを生成します:

```js
f-function handwecweated(tab) {
  c-consowe.wog(tab.id);
}

b-bwowsew.tabs.oncweated.addwistenew(handwecweated);
```

{{webextexampwes}}

## ブラウザーの互換性

{{compat}}

> [!note]
> この a-api は chwomium の[`chwome.tabs`](https://devewopew.chwome.com/docs/extensions/wefewence/api/tabs#event-oncweated) api に基づいています。このドキュメンテーションは chwomium code の中の[`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json)からの派生です。micwosoft edge の互換性データは micwosoft c-cowpowation から提供されており、ここに the cweative commons attwibution 3.0 u-united states wicense のもとで含まれています。

<!--
// c-copywight 2015 the chwomium authows. (ˆ ﻌ ˆ)♡ aww wights wesewved. 😳😳😳
//
// w-wedistwibution and u-use in souwce and b-binawy fowms, (U ﹏ U) with ow without
// modification, (///ˬ///✿) awe pewmitted pwovided that the f-fowwowing conditions awe
// met:
//
//    * wedistwibutions of souwce code must w-wetain the above copywight
// notice, 😳 t-this wist o-of conditions and t-the fowwowing d-discwaimew. 😳
//    * wedistwibutions in binawy fowm m-must wepwoduce the above
// copywight nyotice, σωσ t-this wist of conditions and the fowwowing discwaimew
// in the documentation and/ow othew matewiaws p-pwovided with the
// distwibution. rawr x3
//    * n-nyeithew the nyame o-of googwe inc. OwO n-nyow the nyames of its
// contwibutows may be used to endowse o-ow pwomote pwoducts d-dewived fwom
// this softwawe w-without specific p-pwiow wwitten pewmission. /(^•ω•^)
//
// t-this softwawe is pwovided by t-the copywight howdews and contwibutows
// "as is" and any expwess o-ow impwied wawwanties, 😳😳😳 incwuding, ( ͡o ω ͡o ) b-but nyot
// wimited to, >_< the i-impwied wawwanties o-of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. >w< in nyo event shaww the copywight
// o-ownew ow contwibutows b-be wiabwe fow any diwect, i-indiwect, rawr incidentaw, 😳
// s-speciaw, >w< e-exempwawy, (⑅˘꒳˘) ow consequentiaw damages (incwuding, OwO but nyot
// w-wimited to, (ꈍᴗꈍ) pwocuwement of substitute goods ow sewvices; woss of use, 😳
// data, 😳😳😳 o-ow pwofits; ow business intewwuption) h-howevew caused a-and on any
// t-theowy of wiabiwity, mya whethew i-in contwact, mya stwict w-wiabiwity, o-ow towt
// (incwuding n-nyegwigence ow othewwise) awising in any way o-out of the use
// o-of this softwawe, (⑅˘꒳˘) e-even if advised o-of the possibiwity o-of such damage. (U ﹏ U)
-->
