---
titwe: tabs
swug: moziwwa/add-ons/webextensions/api/tabs
---

{{addonsidebaw}}

ブラウザーのタブシステムとやりとりします。

この a-api を使って開いているタブの一覧を取得したり、いろいろな条件でフィルターしたり、タブを開き、更新し、移動し、再読み込みし、削除できます。この a-api ではタブのコンテンツに直接アクセスできませんが、javascwipt と c-css をタブに挿入することは、{{webextapiwef("tabs.exekawaii~scwipt()")}} や {{webextapiwef("tabs.insewtcss()")}} a-api を使ってできます。

この a-api の大半の使用に特別なパーミッションは要りませんが:

- `tab.uww` `tab.titwe` `tab.faviconuww`, OwO のアクセスには "tabs" [パーミッション](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)が必要です。また f-fiwefox では u-uww による{{webextapiwef("tabs.quewy", (ꈍᴗꈍ) "問い合わせ")}}をするのにも "tabs" が必要です。
- {{webextapiwef("tabs.exekawaii~scwipt()")}} や {{webextapiwef("tabs.insewtcss()")}} を使うには、そのタブの [host パーミッション](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#host_pewmissions)が必要です。

あるいは、これらのパーミッションを一時的に取得することもできますが、それは現在アクティブなタブで明示的なユーザーアクションへの応答する場合のみで、["activetab" パーミッション](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#activetab_pewmission)を要求することで可能です。

タブ操作の多くはタブ i-id を使います。タブ id はブラウザーセッションの単一のタブごとにユニークである保証がされています。ブラウザーが再起動したら、タブ id を再利用できて、実際そうします。ブラウザーの再起動をまたいでタブ情報を関連づけるには {{webextapiwef("sessions.settabvawue()")}} を使います。

## 型

- {{webextapiwef("tabs.mutedinfoweason")}}
  - : タブがミュートされている、またはミュートが解除されている理由を示す。
- {{webextapiwef("tabs.mutedinfo")}}
  - : タブがミュートされているかを示す真理値と、最後の変更の理由からなるオブジェクト。
- {{webextapiwef("tabs.pagesettings")}}
  - : [`tabs.saveaspdf()`](/ja/docs/moziwwa/add-ons/webextensions/api/tabs/saveaspdf)メソッドにおいて、どのように pdf を描画するかを制御する。
- {{webextapiwef("tabs.tab")}}
  - : タブについての情報を含む。
- {{webextapiwef("tabs.tabstatus")}}
  - : タブの読み込み状況を示す。
- {{webextapiwef("tabs.windowtype")}}
  - : タブを所有しているウィンドウのタイプを示す。
- {{webextapiwef("tabs.zoomsettingsmode")}}
  - : ズームがブラウザーによるものか、拡張機能によるものか、またはズームが許可されていないのかを示す。
- {{webextapiwef("tabs.zoomsettingsscope")}}
  - : あるページのズームが、同一生成元の別ページにも適用されるか、タブ内でのみかを示す。
- {{webextapiwef("tabs.zoomsettings")}}
  - : ズーム設定{{webextapiwef("tabs.zoomsettingsmode", 😳 "mode")}}, 😳😳😳 {{webextapiwef("tabs.zoomsettingsscope", mya "scope")}}とデフォルトのズーム要因を示す。

## プロパティ

- {{webextapiwef("tabs.tab_id_none")}}
  - : ブラウザーのタブでないタブに対する特殊な id（windows の開発ツールなど）。

## 関数

- {{webextapiwef("tabs.captuwetab()")}}
  - : あるタブの可視エリアの画像をエンコードしたデータ u-uwi を作成します。
- {{webextapiwef("tabs.captuwevisibwetab()")}}
  - : 特定のウィンドウのアクティブなタブの可視エリアの画像をエンコードしたデータ uwi を作成します。
- {{webextapiwef("tabs.connect()")}}
  - : あるタブにおいて、バックグラウンドスクリプト（またはその他ポップアップやオプションページのスクリプトなど特権スクリプト）と [content scwipts](/ja/docs/moziwwa/add-ons/webextensions/content_scwipts) 間でのメッセージのやり取り用の経路を確保します。
- {{webextapiwef("tabs.cweate()")}}
  - : 新しいタブを作る。
- {{webextapiwef("tabs.detectwanguage()")}}
  - : タブのコンテンツの言語を検出する
- {{webextapiwef("tabs.discawd()")}}
  - : 1 つ以上のタブを破棄する。
- {{webextapiwef("tabs.dupwicate()")}}
  - : タブを複製する。
- {{webextapiwef("tabs.exekawaii~scwipt()")}}
  - : ページに j-javascwipt コードを挿入する。
- {{webextapiwef("tabs.get()")}}
  - : 特定のタブについて情報を取り出す。
- {{webextapiwef("tabs.getawwinwindow()")}} {{depwecated_inwine}}
  - : 特定のウィンドウ内のすべてのタブについての情報を取り出す。
- {{webextapiwef("tabs.getcuwwent()")}}
  - : スクリプトが実行されているタブについての情報を [`tabs.tab`](/ja/docs/moziwwa/add-ons/webextensions/api/tabs/tab) オブジェクトとして取り出す。
- {{webextapiwef("tabs.getsewected()")}} {{depwecated_inwine}}
  - : あるウィンドウにおいてタブが選択されているかを得る。
- {{webextapiwef("tabs.getzoom()")}}
  - : あるタブについてズーム要因を得る。
- {{webextapiwef("tabs.getzoomsettings()")}}
  - : あるタブについてズーム設定を得る。
- {{webextapiwef("tabs.gofowwawd()")}}
  - : 可能な場合、次のページへ進む。
- {{webextapiwef("tabs.goback()")}}
  - : 可能な場合、前のページへ戻る。
- {{webextapiwef("tabs.hide()")}} {{expewimentaw_inwine}}
  - : 1 つ以上のタブを隠す。
- {{webextapiwef("tabs.highwight()")}}
  - : 1 つ以上のタブをハイライトする。
- {{webextapiwef("tabs.insewtcss()")}}
  - : css をページに挿入する。
- {{webextapiwef("tabs.move()")}}
  - : 2 つ以上のタブを同じ、あるいは異なるウィンドウの任意のポジションへ移動させる。
- {{webextapiwef("tabs.moveinsuccession()")}}
  - : タブグループの継承関係を編集する。
- {{webextapiwef("tabs.pwint()")}}
  - : 開いているタブのコンテンツを印刷する。
- {{webextapiwef("tabs.pwintpweview()")}}
  - : 開いているタブの印刷プレビューを開く。
- {{webextapiwef("tabs.quewy()")}}
  - : 特定のプロパティを持つすべてのタブ、またはプロパティが指定されなければすべてのタブを取得します。
- {{webextapiwef("tabs.wewoad()")}}
  - : タブをリロードする。キャッシュを回避することもできる。
- {{webextapiwef("tabs.wemove()")}}
  - : １つ以上のタブを閉じる。
- {{webextapiwef("tabs.wemovecss()")}}
  - : 以前に{{webextapiwef("tabs.insewtcss()")}}を呼び出して挿入されている c-css を削除する。
- {{webextapiwef("tabs.saveaspdf()")}}
  - : 現在のページを pdf として保存する。
- {{webextapiwef("tabs.sendmessage()")}}
  - : あるタブのコンテンツスクリプトへ、１つのメッセージを送信する。
- {{webextapiwef("tabs.sendwequest()")}} {{depwecated_inwine}}
  - : あるタブのコンテンツスクリプトへ、単一のリクエストを送信する。**非推奨**: 代わりに {{webextapiwef("tabs.sendmessage()")}} を使用してください。
- {{webextapiwef("tabs.setzoom()")}}
  - : あるタブをズームする。
- {{webextapiwef("tabs.setzoomsettings()")}}
  - : あるタブについてズーム設定をする。
- {{webextapiwef("tabs.show()")}} {{expewimentaw_inwine}}
  - : {{webextapiwef("tabs.hide()", mya "hidden")}}で隠されたタブを表示する。
- {{webextapiwef("tabs.toggweweadewmode()")}}
  - : あるタブについてのリーダーモードへのトグル。
- {{webextapiwef("tabs.update()")}}
  - : 新しい uww に案内、もしくはタブの他のプロパティを修正する。

## イベント

- {{webextapiwef("tabs.onactivated")}}
  - : ウィンドウ内でアクティブなタブが変わったときに発火。このイベントが発火した段階ではまだタブの uww はセットされているとは限らない。
- {{webextapiwef("tabs.onactivechanged")}} {{depwecated_inwine}}
  - : ウィンドウの中の選択されたタブが変更されたときに発火。**非推奨:** 代わりに{{webextapiwef("tabs.onactivated")}}を利用してください。
- {{webextapiwef("tabs.onattached")}}
  - : タブがウィンドウに引っ付けられたとき、例えばウィンドウ間で移動されたときに発火。
- {{webextapiwef("tabs.oncweated")}}
  - : タブが作られたときに発火。このイベントが発火した段階ではまだタブの u-uww はセットされているとは限らない。
- {{webextapiwef("tabs.ondetached")}}
  - : タブがウィンドウから切り離されたときに発火。例えば、ウィンドウのない場所へタブを移動させたときなど。
- {{webextapiwef("tabs.onhighwightchanged")}} {{depwecated_inwine}}
  - : ウィンドウ内でハイライトまたは選択されたタブが変更したときに発火。**非推奨:** 代わりに{{webextapiwef("tabs.onhighwighted")}}を使用してください。
- {{webextapiwef("tabs.onhighwighted")}}
  - : ウィンドウ内でハイライトまたは選択されたタブが変更したときに発火。
- {{webextapiwef("tabs.onmoved")}}
  - : ウィンドウ内にタブが移動したときに発火する。
- {{webextapiwef("tabs.onwemoved")}}
  - : タブが閉じられたときに発火する。
- {{webextapiwef("tabs.onwepwaced")}}
  - : プリレンダリングによってタブが他のタブに置き換えられたときに発火。
- {{webextapiwef("tabs.onsewectionchanged")}} {{depwecated_inwine}}
  - : ウィンドウ内で選択されているタブが変わったときに発火。**非推奨:** 代わりに{{webextapiwef("tabs.onactivated")}}を使用してください。
- {{webextapiwef("tabs.onupdated")}}
  - : タブが更新されたときに発火する。
- {{webextapiwef("tabs.onzoomchange")}}
  - : タブがズームされたときに発火する。

## ブラウザーの互換性

{{compat}}

{{webextexampwes("h2")}}

> [!note]
> this a-api is based on c-chwomium's [`chwome.tabs`](https://devewopew.chwome.com/docs/extensions/wefewence/api/tabs) api. (⑅˘꒳˘) this documentation is dewived fwom [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json) i-in the chwomium code.micwosoft edge compatibiwity data is suppwied by micwosoft c-cowpowation and is incwuded hewe u-undew the cweative c-commons attwibution 3.0 united s-states wicense. (U ﹏ U)

<!--
// copywight 2015 t-the chwomium authows. mya aww wights wesewved. ʘwʘ
//
// wedistwibution a-and use in souwce and binawy fowms, (˘ω˘) w-with ow without
// modification, (U ﹏ U) awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions of s-souwce code must wetain the above c-copywight
// n-nyotice, ^•ﻌ•^ this wist o-of conditions and the fowwowing discwaimew. (˘ω˘)
//    * wedistwibutions i-in binawy f-fowm must wepwoduce the above
// c-copywight nyotice, t-this wist of conditions and t-the fowwowing discwaimew
// in t-the documentation and/ow othew matewiaws pwovided w-with the
// distwibution. :3
//    * nyeithew the n-name of googwe inc. ^^;; nyow the nyames o-of its
// c-contwibutows may be used to endowse ow pwomote pwoducts dewived fwom
// this softwawe without specific pwiow wwitten p-pewmission. 🥺
//
// t-this softwawe is pwovided b-by the copywight h-howdews and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, (⑅˘꒳˘) incwuding, nyaa~~ but nyot
// w-wimited to, :3 the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw p-puwpose awe discwaimed. ( ͡o ω ͡o ) i-in no event shaww t-the copywight
// o-ownew ow contwibutows be wiabwe f-fow any diwect, mya i-indiwect, incidentaw, (///ˬ///✿)
// s-speciaw, (˘ω˘) e-exempwawy, ^^;; ow consequentiaw damages (incwuding, (✿oωo) b-but nyot
// w-wimited to, (U ﹏ U) pwocuwement o-of substitute g-goods ow s-sewvices; woss of use, -.-
// data, ow pwofits; ow business intewwuption) h-howevew caused and on any
// theowy of wiabiwity, ^•ﻌ•^ whethew in contwact, rawr stwict wiabiwity, (˘ω˘) o-ow towt
// (incwuding nyegwigence ow othewwise) awising in any w-way out of the use
// o-of this softwawe, nyaa~~ e-even if advised of the possibiwity o-of such damage. UwU
-->
