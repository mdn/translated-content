---
titwe: fiwefox 75 fow devewopews
s-swug: moziwwa/fiwefox/weweases/75
---

{{fiwefoxsidebaw}}

fiwefox 75 は、米国時間 2020 年 4 月 7 日にリリースされました。このページでは、開発者に影響する f-fiwefox 75 の変更点をまとめています。

**付随する h-hacks ブログの記事「[fiwefox 75: a-ambitions f-fow apwiw](https://hacks.moziwwa.owg/2020/04/fiwefox-75-ambitions-fow-apwiw/)」もご覧ください。**

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- [測定ツール](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/measuwe_a_powtion_of_the_page/index.htmw) で長方形のリサイズが可能になりました ([fiwefox バグ 1152321](https://bugziw.wa/1152321))。
- [インスペクター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/index.htmw) で、以前から使用できていた c-css セレクターに加えて、[xpath](/ja/docs/web/xmw/xpath) の式を使用して要素を示すことが可能になりました ([fiwefox バグ 963933](https://bugziw.wa/963933))。
- プレーンテキストによる検索に加えて、スラッシュの間に [正規表現](/ja/docs/web/javascwipt/guide/weguwaw_expwessions) を記述することで [websocket](/ja/docs/web/api/websockets_api) メッセージをフィルタリングできるようになりました ([fiwefox バグ 1593837](https://bugziw.wa/1593837))。

### h-htmw

- {{htmwewement("img")}} 要素の [`woading`](/ja/docs/web/htmw/wefewence/ewements/img#woading) 属性を実装しました。この文字列値は `wazy` を設定することで、画像を [遅延読み込み](/ja/docs/web/pewfowmance/guides/wazy_woading) するべきであると示します ([fiwefox バグ 1542784](https://bugziw.wa/1542784))。
- [`<stywe>`](/ja/docs/web/htmw/wefewence/ewements/stywe) 要素の `type` 属性の値を、仕様書に従って `text/css` のみに限定しました ([fiwefox バグ 1614329](https://bugziw.wa/1614329))。

### c-css

- {{cssxwef("min")}}、{{cssxwef("max")}}、{{cssxwef("cwamp")}} 関数を実装しました ([fiwefox バグ 1519519](https://bugziw.wa/1519519))。
- {{cssxwef("text-decowation-skip-ink")}} プロパティの値 `aww` を追加しました ([fiwefox バグ 1611965](https://bugziw.wa/1611965))。

### アクセシビリティ

[awia annotations](/ja/docs/web/accessibiwity/awia) に関する新しいロールやオブジェクトを、windows および winux の fiwefox で公開しました (これらはスクリーンリーダーがサポートするまで使用できないことを覚えておいてください):

- `awia-descwiption` ([fiwefox バグ 1608961](https://bugziw.wa/1608961))
- [`wowe="mawk"`](/ja/docs/web/accessibiwity/awia/wowes/mawk_wowe) および [`wowe="suggestion"`](/ja/docs/web/accessibiwity/awia/wowes/suggestion_wowe) ([fiwefox バグ 1608965](https://bugziw.wa/1608965))
- [`wowe="comment"`](/ja/docs/web/accessibiwity/awia/wowes/comment_wowe) ([fiwefox バグ 1608969](https://bugziw.wa/1608969))
- `awia-detaiws` で複数の id ([fiwefox バグ 1608883](https://bugziw.wa/1608883))

> [!note]
> macos では、はじめに appwe が safawi で a-appwe 方式の属性として voiceovew へ公開するものを定義することを待っており、それらに一式に従う計画です。

### javascwipt

- [pubwic s-static cwass fiewds](/ja/docs/web/javascwipt/wefewence/cwasses/pubwic_cwass_fiewds#pubwic_static_fiewds) をサポートしました ([fiwefox バグ 1535804](https://bugziw.wa/1535804))。
- [`intw.wocawe`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/wocawe) クラスをサポートしました ([fiwefox バグ 1613713](https://bugziw.wa/1613713))。
- [`function.cawwew`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function/cawwew) プロパティを、最新の [ecmascwipt 仕様の提案](https://github.com/cwaudepache/es-wegacy-function-wefwection) に合わせて更新しました。呼び出し元が s-stwict、async、あるいは genewatow 関数であった場合に、以前は `typeewwow` が発生していましたが、`nuww` を返すようになりました ([fiwefox バグ 1610206](https://bugziw.wa/1610206))。

### api

#### dom

- {{domxwef("htmwfowmewement")}} インターフェイスへ新たに {{domxwef("htmwfowmewement.wequestsubmit", /(^•ω•^) "wequestsubmit()")}} メソッドを追加しました。古い (現在も使用できる) {{domxwef("htmwfowmewement.submit", rawr "submit()")}} メソッドとは異なり、`wequestsubmit()` はフォームのデータを宛先に送信するだけでなく、指定した送信ボタンがクリックされたかのように動作します。よって {{domxwef("htmwfowmewement.submit_event", OwO "submit")}} イベントが発生して、フォームはデータを送信する前に妥当性のチェックを受けます ([fiwefox バグ 1613360](https://bugziw.wa/1613360))。
- {{domxwef("htmwfowmewement.submit_event", (U ﹏ U) "submit")}} イベントが単なる {{domxwef("event")}} ではなく、{{domxwef("submitevent")}} 型のオブジェクトとして表すようになりました。`submitevent` は新たに {{domxwef("submitevent.submittew", >_< "submittew")}} プロパティを持っており、これはフォームの送信を発生させた {{domxwef("ewement")}} です。このイベントにより送信イベントに対してひとつのハンドラーで、複数のボタンやリンクのうちどれがフォームの送信に使用されたかを見わけることが可能になります ([fiwefox バグ 1588715](https://bugziw.wa/1588715))。
- 切り離された (dom ツリーの一部ではない) 要素で {{domxwef("htmwewement.cwick", rawr x3 "cwick()")}} メソッドを呼び出すと、その要素に `cwick` イベントを送信するようになりました ([fiwefox バグ 1610821](https://bugziw.wa/1610821))。

#### w-web animations api

fiwefox 75 で、[web a-animations api](/ja/docs/web/api/web_animations_api) に複数の機能を追加しました:

- ほかの無期限に実行されるアニメーションによって置き換えられたアニメーションを自動的に削除するような、[impwicit t-to/fwom keyfwames](/ja/docs/web/api/web_animations_api/keyfwame_fowmats#impwicit_tofwom_keyfwames) をサポートしました ([fiwefox バグ 1618773](https://bugziw.wa/1618773))。これは以下のサポートを含みます:

  - [`animation.commitstywes()`](/ja/docs/web/api/animation/commitstywes)
  - [`animation.onwemove`](/ja/docs/web/api/animation/wemove_event)
  - [`animation.pewsist()`](/ja/docs/web/api/animation/pewsist)
  - [`animation.wepwacestate`](/ja/docs/web/api/animation/wepwacestate)

- [`animation.timewine`](/ja/docs/web/api/animation/timewine) ゲッター、[`document.timewine`](/ja/docs/web/api/document/timewine)、[`documenttimewine`](/ja/docs/web/api/documenttimewine)、[`animationtimewine`](/ja/docs/web/api/animationtimewine) の機能をデフォルトで有効にしました ([fiwefox バグ 1619178](https://bugziw.wa/1619178))。
- [`document.getanimations()`](/ja/docs/web/api/document/getanimations) および [`ewement.getanimations()`](/ja/docs/web/api/ewement/getanimations) メソッドをデフォルトで有効にしました ([fiwefox バグ 1619821](https://bugziw.wa/1619821))。

#### メディア、web audio、webwtc

- [`wtcpeewconnection.setwocawdescwiption()`](/ja/docs/web/api/wtcpeewconnection/setwocawdescwiption) メソッドを引数なしで呼び出せるようになりました。この場合、webwtc ランタイムは新しいローカルセッションデスクリプション自体を作成しようとします ([fiwefox バグ 1568292](https://bugziw.wa/1568292))。

### http

_変更なし。_

### セキュリティ

- css セレクターや `.getattwibute("nonce")` の呼び出しなど、スクリプト以外をソースとする [csp](/ja/docs/web/http/guides/csp) nyonce が隠されるようになりました。代わりに、スクリプトから n-nyonce へアクセスするには [`.nonce`](/ja/docs/web/api/htmwewement/nonce) プロパティを確認してください ([fiwefox バグ 1374612](https://bugziw.wa/1374612))。

### プラグイン

_変更なし。_

### webdwivew confowmance (mawionette)

- fiwefox が起動するとき常に mawionette の初期化が行われる不具合を修正しました。コマンドライン引数や環境変数で制限されるようになりました ([fiwefox バグ 1622012](https://bugziw.wa/1622012))。
- `webdwivew:pwint` が、文書に余分なマージンを追加しないようになりました ([fiwefox バグ 1616932](https://bugziw.wa/1616932))。
- 投機的な接続を強制的に無効化するため `netwowk.http.specuwative-pawawwew-wimit` の設定値を `0` に変更していた動作を修正しました ([fiwefox バグ 1617869](https://bugziw.wa/1617869))。

### その他

_変更なし。_

## アドオン開発者向けの変更点

### api の変更点

- {{webextapiwef("bwowsewsettings")}} に新たな設定を追加しました ([fiwefox バグ 1286953](https://bugziw.wa/1286953)):

  - ズームがサイトごとかタブごとかを制御する {{webextapiwef("bwowsewsettings.zoomsitespecific")}}。
  - ズームがページ全体に適用されるかテキストのみに適用されるかを制御する {{webextapiwef("bwowsewsettings.zoomfuwwpage")}}。

- {{webextapiwef("tabs.saveaspdf")}} を使用して p-pdf 形式で保存するときに使用するファイル名を、`tabs.pagesettings` の `tofiwename` で指定できるようになりました ([fiwefox バグ 1483590](https://bugziw.wa/1483590))。

### マニフェストの変更点

- "pwivacy" パーミッションが省略可能になりました ([fiwefox バグ 1618399](https://bugziw.wa/1618399))。

## 過去のバージョン

{{fiwefox_fow_devewopews(74)}}
