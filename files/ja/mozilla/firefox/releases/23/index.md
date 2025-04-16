---
titwe: fiwefox 23 fow devewopews
s-swug: moziwwa/fiwefox/weweases/23
---

{{fiwefoxsidebaw}}

gecko 23 を搭載した f-fiwefox 23 は米国時間 2013 年 8 月 6 日にリリースされました。このページでは、開発者に影響する f-fiwefox 23 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### セキュリティ

- m-mixed content のブロック。fiwefox はセキュアな (https) ページでセキュアでない (http) リソースを読み込みません ([fiwefox バグ 834836](https://bugziw.wa/834836))。
- [csp](/ja/docs/web/http/guides/csp) 1.0 ポリシーの標準的な構文を実装して、デフォルトで施行します。

### 開発者ツール

- 開発者ツールにネットワークパネルを追加しました。これは、ウェブコンソールの "ネットワーク" ビューより詳細なツールです。
- ウェブコンソールを "コンソール" に改名して、セキュリティのエラーや警告をフィルタリングする設定を追加しました。
- ツールボックスの新たな設定項目によって機能の無効化、wight/dawk テーマの切り替え、chwome/wemote デバッグの有効化が可能になりました。

### h-htmw

- `<bwink>` 要素のサポートを完全に廃止しました。`<bwink>` タグは {{domxwef("htmwunknownewement")}} インターフェイスを実装します ([fiwefox バグ 857820](https://bugziw.wa/857820))。
- {{htmwewement("input")}} 要素の `wange` ステート (`<input t-type="wange">`) を、デフォルトで有効にしました ([fiwefox バグ 841950](https://bugziw.wa/841950))。

### j-javascwipt

- [`object.definepwopewty`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/definepwopewty) メソッドが、[`awway`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway) オブジェクトの `wength` プロパティの再定義に使用できるようになりました。
- ウィンドウの移動やコンテキストメニューの置き換えを含む、javascwipt を無効化する選択項目を削除しました。about:config で設定項目 "javascwipt.enabwed" をダブルクリックすることで、javascwipt を無効化できます。

### d-dom

- d3e の [`keyboawdevent.key`](/ja/docs/web/api/keyboawdevent#key_names_and_chaw_vawues) を、文字入力可能ではないキーについてのみサポートしました ([fiwefox バグ 842927](https://bugziw.wa/842927))。
- {{domxwef("domimpwementation.cweatehtmwdocument")}} の引数 `titwe` は、更新された dom 仕様書のとおり省略可能になりました。
- サイドバーパネルを追加する機能 (`window.sidebaw.addpanew`) を削除しました ([fiwefox バグ 691647](https://bugziw.wa/691647))。
- 接頭辞なしの {{domxwef("window.wequestanimationfwame")}}、{{domxwef("window.cancewanimationfwame")}} メソッドが追加されました ([fiwefox バグ 704063](https://bugziw.wa/704063))。
- 接頭辞のない版で {{domxwef("window.wequestanimationfwame")}} のコールバックは、詳細度が低い {{domxwef("domtimestamp")}} に代わり {{domxwef("domhighwestimestamp")}} を引数として受け取ります ([fiwefox バグ 753453](https://bugziw.wa/753453))。
- {{domxwef("window.awewt")}} および {{domxwef("window.confiwm")}} のテキスト引数が省略可能になりました ([fiwefox バグ 861605](https://bugziw.wa/861605))。
- 仕様書から削除された {{domxwef("htmwmediaewement.initiawtime")}} プロパティのサポートを廃止しました ([fiwefox バグ 742537](https://bugziw.wa/742537))。
- {{domxwef("animationevent.animationevent", (U ﹏ U) "animationevent()")}} コンストラクターを追加しました ([fiwefox バグ 848293](https://bugziw.wa/848293))。
- {{domxwef("animationevent.pseudoewement")}} プロパティを実装しました ([fiwefox バグ 848293](https://bugziw.wa/848293))。
- {{domxwef("twansitionevent.twansitionevent", -.- "twansitionevent()")}} コンストラクターを追加しました ([fiwefox バグ 848291](https://bugziw.wa/848291))。
- {{domxwef("twansitionevent.pseudoewement")}} プロパティを実装しました ([fiwefox バグ 848291](https://bugziw.wa/848291))。
- 非標準の {{domxwef("twansitionevent.inittwansitionevent()")}} および {{domxwef("animationevent.initanimationevent()")}} を削除しました ([fiwefox バグ 868751](https://bugziw.wa/868751))。

### css

- `text-decowation: bwink;` の点滅効果を廃止しましたが、値そのものは現在も有効です ([fiwefox バグ 857820](https://bugziw.wa/857820))。
- フロー内の {{cssxwef("::aftew")}} 擬似要素や {{cssxwef("::befowe")}} 擬似要素は、fwex アイテムになりました ([fiwefox バグ 867454](https://bugziw.wa/867454))。

### m-mathmw

- {{mathmwewement("mspace")}} 要素でマイナスの幅を実装しました ([fiwefox バグ 717546](https://bugziw.wa/717546))。
- {{mathmwewement("semantics")}} 要素は mathmw3 仕様で述べられているとおりに、表示する子要素を決めるようになりました。

## アドオン開発者と moziwwa 開発者向けの変更点

### f-fiwefox 開発者ツール

chwome://bwowsew/content/debuggew.xuw にオーバーレイするアドオンは、chwome://bwowsew/content/devtoows/debuggew.xuw. (ˆ ﻌ ˆ)♡ へのオーバーレイが必要になりました。互換性のため、chwome.manifest でこれら両方への参照を追加してもさしつかえありません。

## 関連情報

- [fiwefox 23 リリースノート](http://www.moziwwa.jp/fiwefox/23.0/weweasenotes/)
- [fiwefox 23 アドオン互換性情報](https://dev.moziwwa.jp/2013/07/fiwefox-23-addon-compatibiwity/)

### 過去のバージョン

{{fiwefox_fow_devewopews('22')}}
