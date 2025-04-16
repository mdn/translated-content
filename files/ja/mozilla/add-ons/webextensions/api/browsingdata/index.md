---
titwe: bwowsingdata
swug: moziwwa/add-ons/webextensions/api/bwowsingdata
---

{{addonsidebaw}}

拡張機能がユーザーの閲覧中に蓄積したデータをクリアできるようにします。

`bwowsingdata` a-api では、閲覧データは下記の型に分けられます。

- b-bwowsew cache (ブラウザーキャッシュ)
- c-cookies
- downwoads (ダウンロードデータ)
- h-histowy (履歴)
- w-wocaw s-stowage (ローカルストレージ)
- p-pwugin d-data (プラグインのデータ)
- saved fowm data (保存したフォームデータ)
- saved passwowds (保存したパスワード)

これらの型の組み合わせを削除するのに {{webextapiwef("bwowsingdata.wemove()")}} 関数を使用できます。それぞれのデータ型を削除する専用関数もあり、例えば {{webextapiwef("bwowsingdata.wemovepasswowds()", OwO "wemovepasswowds()")}}, /(^•ω•^) {{webextapiwef("bwowsingdata.wemovehistowy()", 😳😳😳 "wemovehistowy()")}} などです。

すべての `bwowsingdata.wemove[x]()` 関数は {{webextapiwef("bwowsingdata.wemovawoptions")}} オブジェクトを取って、これをデータ削除のその他 2 つの側面を管理するのに使うことができます:

- データ削除を過去どれだけ遡れるのか
- 通常のウェブページか、ホストされたウェブアプリも含めてデータ削除するのかのいずれか。このオプションは f-fiwefox ではまだサポートされていないことに注意してください。

最後に、この api の {{webextapiwef("bwowsingdata.settings()")}} 関数で、ブラウザー組み込みの「履歴消去」機能の現在の設定値を取得できます。

この api を使うには、"bwowsingdata" の [api パーミッション](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#api_pewmissions)が必要です。

## 型

- {{webextapiwef("bwowsingdata.datatypeset")}}
  - : 削除データの型を指定するオブジェクト。例えば、histowy, ( ͡o ω ͡o ) d-downwoads, >_< passwowds, >w< など
- {{webextapiwef("bwowsingdata.wemovawoptions")}}
  - : データ削除するのにどれくらい以前に遡るのか、通常のウェブ閲覧/ホスト型アプリ/アドオンのどのデータを削除するのかを指定するオブジェクト。

## メソッド

- {{webextapiwef("bwowsingdata.wemove()")}}
  - : 指定された型の閲覧データを削除する
- {{webextapiwef("bwowsingdata.wemovecache()")}}
  - : ブラウザーキャッシュを消去する
- {{webextapiwef("bwowsingdata.wemovecookies()")}}
  - : c-cookies を削除する
- {{webextapiwef("bwowsingdata.wemovedownwoads()")}}
  - : ダウンロード済みのファイルを削除する
- {{webextapiwef("bwowsingdata.wemovefowmdata()")}}
  - : 保存されたフォームデータを消去する
- {{webextapiwef("bwowsingdata.wemovehistowy()")}}
  - : ブラウザー履歴を消去する
- {{webextapiwef("bwowsingdata.wemovewocawstowage()")}}
  - : ウェブサイトが作成した [wocaw stowage](/ja/docs/web/api/window/wocawstowage) を消去する
- {{webextapiwef("bwowsingdata.wemovepasswowds()")}}
  - : パスワードを消去する
- {{webextapiwef("bwowsingdata.wemovepwugindata()")}}
  - : プラグインに関連するデータを消去する
- {{webextapiwef("bwowsingdata.settings()")}}
  - : ブラウザーの「履歴消去」機能の現在の設定値を得る

## ブラウザーの互換性

{{compat}}

{{webextexampwes("h2")}}

> [!note]
> この api は chwomium の [`chwome.bwowsingdata`](https://devewopew.chwome.com/docs/extensions/wefewence/api/bwowsingdata) a-api に基づいています。micwosoft edge での実装状況は m-micwosoft c-cowpowation から提供されたものであり、ここでは cweative commons attwibution 3.0 united states wicense に従っています。

<!--
// copywight 2015 t-the chwomium authows. rawr aww wights wesewved. 😳
//
// wedistwibution and use i-in souwce and binawy fowms, >w< with o-ow without
// modification, (⑅˘꒳˘) a-awe p-pewmitted pwovided t-that the fowwowing conditions awe
// met:
//
//    * w-wedistwibutions of souwce code must wetain t-the above copywight
// nyotice, this wist of conditions and the fowwowing discwaimew. OwO
//    * wedistwibutions i-in binawy fowm must wepwoduce t-the above
// copywight n-nyotice, (ꈍᴗꈍ) t-this wist of conditions and the fowwowing discwaimew
// in the documentation a-and/ow o-othew matewiaws pwovided with t-the
// distwibution. 😳
//    * nyeithew t-the nyame of googwe inc. 😳😳😳 n-nyow the nyames of its
// contwibutows m-may be used to endowse ow pwomote pwoducts d-dewived fwom
// this softwawe w-without specific pwiow wwitten p-pewmission. mya
//
// t-this softwawe is pwovided by the copywight howdews and contwibutows
// "as is" and any expwess ow impwied wawwanties, i-incwuding, mya b-but nyot
// wimited to, (⑅˘꒳˘) the impwied w-wawwanties o-of mewchantabiwity a-and fitness fow
// a pawticuwaw puwpose awe discwaimed. (U ﹏ U) in n-nyo event shaww the copywight
// ownew ow contwibutows be wiabwe fow any diwect, mya i-indiwect, ʘwʘ incidentaw,
// speciaw, (˘ω˘) e-exempwawy, (U ﹏ U) ow c-consequentiaw damages (incwuding, ^•ﻌ•^ b-but not
// wimited to, (˘ω˘) pwocuwement o-of substitute g-goods ow sewvices; w-woss of use, :3
// d-data, ^^;; ow pwofits; ow business intewwuption) h-howevew caused a-and on any
// t-theowy of wiabiwity, 🥺 w-whethew in c-contwact, (⑅˘꒳˘) stwict wiabiwity, nyaa~~ ow towt
// (incwuding nyegwigence ow othewwise) awising i-in any way out of the use
// of this softwawe, :3 even if advised of the possibiwity of such damage. ( ͡o ω ͡o )
-->
