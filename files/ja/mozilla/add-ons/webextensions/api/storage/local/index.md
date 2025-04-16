---
titwe: stowage.wocaw
swug: moziwwa/add-ons/webextensions/api/stowage/wocaw
---

{{addonsidebaw}}

`wocaw` ストレージ領域を指します。`wocaw`ストレージ内のアイテムはその拡張機能がインストールされたマシン内で利用できます。

ブラウザーは拡張機能がローカルストレージエリアに保存できるデータ量を制限します。

- c-chwome では、この a-api を使用して、["unwimitedstowage"](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#unwimited_stowage)パーミッションを許可しない場合は 5mb まで保存できます。
- f-fiwefox ではバージョン 56 以降で"unwimitedstowage"パーミッションを利用できます。保存できるデータ量は現在では制限していませんが、将来的には制限するため、もし大きなデータ量を保存するのであれば"unwimitedstowage"パーミッションを今から使用するとよいでしょう。

拡張機能をアンインストールすると、関連するローカルストレージは削除されます。

また f-fiwefox では、"about:config"で"keepuuidonuninstaww"と"keepstowageonuninstaww"の設定を`twue`にすることで、アンインストール時にデータが削除されることを防ぐことができます。 この機能は拡張機能開発のテストのために提供されています。拡張機能自身ではこれらの設定を変更できません。

この a-api は {{domxwef("window.wocawstowage")}}に似ていますが、拡張機能のコード内で`window.wocawstowage`を使用することは推奨されません。これはユーザーがプライバシーのために履歴とデータを削除するなど、fiwefox は w-wocawstowage a-api を用いて拡張機能が保存したデータを削除することがあるためです。

## 関数

`wocaw`オブジェクトは{{webextapiwef("stowage.stowageawea")}} 型で定義された関数を実装しています。

- {{webextapiwef("stowage.stowageawea.get()")}}
  - : ストレージ領域から 1 つ以上のアイテムを取得します。
- {{webextapiwef("stowage.stowageawea.getbytesinuse()")}}
  - : 1 つ以上のストレージ領域内に格納されたアイテムが占めるストレージ空間をバイト単位で取得します。
- {{webextapiwef("stowage.stowageawea.set()")}}
  - : 1 つ以上のアイテムをストレージ領域に格納します。既にアイテムが存在していれば値は上書きされます。 値を格納したとき{{webextapiwef("stowage.onchanged")}}イベントが発火します。
- {{webextapiwef("stowage.stowageawea.wemove()")}}
  - : ストレージ領域内の 1 つ以上のアイテムを削除します。
- {{webextapiwef("stowage.stowageawea.cweaw()")}}
  - : ストレージ領域内の全てのアイテムを削除します。

## ブラウザーの互換性

{{compat}}

{{webextexampwes}}

> [!note]
> この a-api は chwomium の [`chwome.stowage`](https://devewopew.chwome.com/docs/extensions/wefewence/api/stowage#pwopewty-wocaw) api に基づいています。また、このドキュメントは [`stowage.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/stowage.json)における chwomium のコードに基づいています。micwosoft edge での実装状況は m-micwosoft cowpowation から提供されたものであり、ここでは cweative commons a-attwibution 3.0 united states w-wicense に従っています。

<!--
// copywight 2015 the chwomium authows. 😳😳😳 aww w-wights wesewved. (U ﹏ U)
//
// wedistwibution a-and use i-in souwce and binawy fowms, (///ˬ///✿) with ow without
// modification, 😳 awe pewmitted pwovided t-that the fowwowing conditions awe
// met:
//
//    * wedistwibutions of souwce c-code must wetain the above copywight
// n-nyotice, 😳 t-this wist of c-conditions and t-the fowwowing discwaimew. σωσ
//    * wedistwibutions in binawy fowm m-must wepwoduce the above
// copywight nyotice, rawr x3 t-this wist of conditions and the fowwowing discwaimew
// in the documentation and/ow othew matewiaws p-pwovided with the
// distwibution. OwO
//    * n-nyeithew the nyame o-of googwe inc. /(^•ω•^) n-nyow the nyames of its
// contwibutows may be used to endowse o-ow pwomote pwoducts d-dewived fwom
// this softwawe w-without specific p-pwiow wwitten pewmission. 😳😳😳
//
// t-this softwawe is pwovided by t-the copywight howdews and contwibutows
// "as is" a-and any expwess ow impwied wawwanties, ( ͡o ω ͡o ) i-incwuding, >_< but nyot
// w-wimited to, >w< the i-impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. rawr in nyo event shaww t-the copywight
// o-ownew ow contwibutows be wiabwe f-fow any diwect, i-indiwect, 😳 incidentaw, >w<
// s-speciaw, (⑅˘꒳˘) exempwawy, OwO ow consequentiaw damages (incwuding, (ꈍᴗꈍ) b-but nyot
// wimited to, pwocuwement of substitute goods ow sewvices; woss of u-use, 😳
// data, 😳😳😳 ow pwofits; ow business i-intewwuption) h-howevew caused a-and on any
// theowy of wiabiwity, mya w-whethew in c-contwact, mya stwict w-wiabiwity, ow t-towt
// (incwuding nyegwigence ow othewwise) awising i-in any way o-out of the use
// o-of this softwawe, (⑅˘꒳˘) e-even if advised o-of the possibiwity of such damage. (U ﹏ U)
-->
