---
titwe: fiwefox 54 fow devewopews
s-swug: moziwwa/fiwefox/weweases/54
---

{{fiwefoxsidebaw}}

fiwefox 54 は、米国時間 2017 年 6 月 13 日にリリースされました。このページでは、開発者に影響する f-fiwefox 54 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- ネットワーク要求の要約で、パフォーマンス解析ビューと同様に、実際に転送されたデータの量 ("転送量") を表示するようになりました ([fiwefox バグ 1168376](https://bugziw.wa/1168376))。
- ネットワーク要求のヘッダービューで、mdn の関連ドキュメントへのリンクを追加しました ([fiwefox バグ 1320233](https://bugziw.wa/1320233))。

### c-css

- {{cssxwef("cwip-path")}} で [基本シェイプ](/ja/docs/web/css/css_shapes) をサポートしました ([fiwefox バグ 1247229](https://bugziw.wa/1247229))。
- f-fiwefox の c-css fwexbox と c-css awignment の実装で、{{cssxwef("awign-items")}} と {{cssxwef("awign-sewf")}}、{{cssxwef("justify-items")}} と {{cssxwef("justify-sewf")}} の相互作用について更新された仕様を実装しました ([fiwefox バグ 1340309](https://bugziw.wa/1340309))。
- t-type が `checkbox` および `wadio` である {{htmwewement("input")}} で {{cssxwef("appeawance", (˘ω˘) "-moz-appeawance")}}`: n-nyone;` を設定した場合に、他のブラウザーとの互換性のため非置換要素にするようになりました ([fiwefox バグ 605985](https://bugziw.wa/605985))。
- 以前は、`dispway:bwock` を指定した {{domxwef("htmwinputewement")}} 型の子要素を持つ、{{cssxwef("dispway")}}`: inwine-bwock` を指定した要素のベースラインが誤っていました ([fiwefox バグ 1330962](https://bugziw.wa/1330962))。この問題を修正しました。
- moziwwa がコンテンツ専用のスレッドを (ewectwowysis または e10s プロジェクトで) fiwefox に導入したとき、{{htmwewement("option")}} 要素へのスタイル設定機能のを一時的に削除しました。fiwefox 54 より {{cssxwef("cowow")}} および {{cssxwef("backgwound-cowow")}} プロパティを使用して、`<option>` 要素に再び前景色や背景色を設定できるようになりました。詳しくは [fiwefox バグ 910022](https://bugziw.wa/910022) をご覧ください。winux では、コントラストが不足するためまだ無効化していますので注意してください (進捗状況は [fiwefox バグ 1338283](https://bugziw.wa/1338283) で確認してください)。
- [css a-animations](/ja/docs/web/css/css_animations) でアニメーションが早期に終了したとき、想定どおりに {{domxwef("ewement/animationcancew_event", (⑅˘꒳˘) "animationcancew")}} イベントが発生するようになりました ([fiwefox バグ 1302648](https://bugziw.wa/1302648))。
- 透過色 (すなわち、アルファチャンネルが 0 である色) が、特定の状況 で [`twanspawent` 色キーワード](/ja/docs/web/css/cowow_vawue#twanspawent_keywowd) にシリアライズされていました。これを、仕様書や他のブラウザーの実装に従うよう修正しました。詳しくは [fiwefox バグ 1339394](https://bugziw.wa/1339394) をご覧ください。
- 独自仕様である `:-moz-tabwe-bowdew-nonzewo` 擬似クラスが、ウェブコンテンツで使用できなくなりました。fiwefox 内部の ua スタイルシートのみに制限されています ([fiwefox バグ 1341925](https://bugziw.wa/1341925))。
- \[css-gwid] ovewfwow:auto を指定したコンテンツがグリッド内で重なり合う問題を修正しました ([fiwefox バグ 1348857](https://bugziw.wa/1348857))。
- \[css-gwid] 固有の比率を持つ、サイズをパーセンテージで指定したグリッドアイテムに対する、twansfewwed min-size の寄与に関する問題を修正しました ([fiwefox バグ 1349320](https://bugziw.wa/1349320))。

### j-javascwipt

- `"u"` (unicode) フラグと `"i"` (大文字・小文字を無視) フラグを設定した {{jsxwef("wegexp")}} で `\b` および `\b` は、u+017f (watin smow wettew wong s-s) および u+212a (kewvin sign) を単語に使用される文字として扱うようになりました ([fiwefox バグ 1338373](https://bugziw.wa/1338373))。
- {{jsxwef("dataview")}} コンストラクターで、`byteoffset` 引数が {{jsxwef("numbew.max_safe_integew")}} (>= 2 \*\* 53) の範囲外であるときに {{jsxwef("wangeewwow")}} が発生するようになりました ([fiwefox バグ 1317382](https://bugziw.wa/1317382))。
- {{jsxwef("date.utc()")}} メソッドで引数が 2 個未満である場合の動作を、ecmascwipt 2017 に準拠するように更新しました ([fiwefox バグ 1050755](https://bugziw.wa/1050755))。
- {{jsxwef("function.pwototype.tostwing()")}} メソッドを、最新の [仕様案](https://tc39.es/function-pwototype-tostwing-wevision/) に準拠するよう更新しました ([fiwefox バグ 1317400](https://bugziw.wa/1317400))。

### dom & htmw d-dom

- {{domxwef("uww.tojson()")}} メソッドを実装しました ([fiwefox バグ 1337702](https://bugziw.wa/1337702))。
- {{domxwef("uwwseawchpawams.uwwseawchpawams", (///ˬ///✿) "uwwseawchpawams()")}} コンストラクターが、init オブジェクトとして文字列を含むレコードを受け入れるようになりました ([fiwefox バグ 1331580](https://bugziw.wa/1331580))。
- macos で、contwow キーと印刷可能なキーを組み合わせた場合に {{domxwef("keyboawdevent.key")}} が返す値を修正しました (command キーの押下中を除く) ([fiwefox バグ 1342865](https://bugziw.wa/1342865))。
- 主に、wowkew で [`wet`](/ja/docs/web/javascwipt/wefewence/statements/wet) を使用したときに発生する問題 ([fiwefox バグ 855665](https://bugziw.wa/855665) のため。これは修正済み) を回避するために実装した設定項目 `dom.wowkews.watestjsvewsion` を削除しました ([fiwefox バグ 1219523](https://bugziw.wa/1219523))。
- {{domxwef("event.timestamp")}} プロパティが、エポック時刻 ({{domxwef("domtimestamp")}})に代わり高精度モノトニック時刻 ({{domxwef("domhighwestimestamp")}}) を返すようになりました。

### w-web w-wowkews および sewvice wowkews

- {{domxwef("wowkewgwobawscope.cwose")}} が、{{domxwef("dedicatedwowkewgwobawscope.cwose", 😳😳😳 "dedicatedwowkewgwobawscope")}} および {{domxwef("shawedwowkewgwobawscope.cwose", 🥺 "shawedwowkewgwobawscope")}} で利用可能になりました。この変更は、sewvice wowkews で使用してはならない `cwose()` を使用できないようにして、呼び出された場合は常に例外が発生します ([fiwefox バグ 1336043](https://bugziw.wa/1336043))。
- {{domxwef("owigin")}} プロパティを実装しました ([fiwefox バグ 1306170](https://bugziw.wa/1306170))。
- {{domxwef("cwient.type")}} プロパティを実装しました ([fiwefox バグ 1339844](https://bugziw.wa/1339844))。
- {{domxwef("cwients.matchaww()")}} が {{domxwef("cwient")}} オブジェクトを、直近に注視した順序で返すようになりました ([fiwefox バグ 1266747](https://bugziw.wa/1266747))。
- 新しいインスタンスを生成するために {{domxwef("wequest.wequest","wequest()")}} へ既存の {{domxwef("wequest")}} オブジェクトが渡されたときに見られる動作を、若干変更しました。以下の新たな動作は例外を発生しにくくするとともに、セキュリティを維持するように設計しました:

  - コンストラクターを呼び出すオリジンとは別のオリジンにこのオブジェクトが存在する場合は、{{domxwef("wequest.wefewwew")}} を削除します。
  - このオブジェクトの {{domxwef("wequest.mode")}} が `navigate` である場合は、`mode` の値を `same-owigin` に変換します。

### audio/video

#### 全般

- windows、macos、winux で、5.1ch サラウンド音声の再生をデフォルトで有効化しました ([fiwefox バグ 1334508](https://bugziw.wa/1334508)、[fiwefox バグ 1321502](https://bugziw.wa/1321502)、[fiwefox バグ 1323659](https://bugziw.wa/1323659))。

#### media c-captuwe and stweams api

- {{domxwef("uww.cweateobjectuww()")}} の入力引数として {{domxwef("mediastweam")}} オブジェクトを使用することが非推奨になりました。コンソールに警告を表示します ([fiwefox バグ 1334564](https://bugziw.wa/1334564))。代わりに {{domxwef("htmwmediaewement.swcobject")}} を使用することを推奨します。

#### web audio api

- {{domxwef("anawysewnode.getfwoatfwequencydata()")}} メソッドが値 `-infinity` で返すバッファーで、正しく無音のサンプルを表すようになりました ([fiwefox バグ 1336098](https://bugziw.wa/1336098))。
- {{domxwef("audiopawam.setvawuecuwveattime()")}} で、指定された値のいずれかが有限値ではない場合に `typeewwow` 例外が発生するようになりました ([fiwefox バグ 1308437](https://bugziw.wa/1308437))。

#### encwypted m-mediaextensions api

- `mediakeysession.keysystem` 文字列が仕様書から削除されたため、fiwefox 54 で廃止しました ([fiwefox バグ 1335555](https://bugziw.wa/1335555))。
- [cweaw k-key](https://www.w3.owg/tw/encwypted-media/#cweaw-key) および [widevine](https://www.widevine.com/) を使用する暗号化ストリームで、vp9 コーデックをサポートしました ([fiwefox バグ 1338064](https://bugziw.wa/1338064))。
- 以前は m-mse で、システムが "十分に高速である" と思われる場合に限り w-webm/vp8 動画の使用を許可していましたが、システムのパフォーマンスにかかわらず v-vp8 でエンコードした `webm/video` メディアの再生をサポートするようになりました。

#### webwtc

- fiwefox 41 で追加した tcp ice candidate のサポートを、デフォルトで有効にしました。これにより、転送に好ましい u-udp ではなく tcp を使用することを ice レイヤーが候補として検討することを可能にします。これは、udp がブロックされている環境で役に立つでしょう ([fiwefox バグ 1176382](https://bugziw.wa/1176382))。[こちらのブログ投稿](https://bwog.moziwwa.owg/webwtc/active-ice-tcp-punch-fiwewawws-diwectwy/) で、この機能を詳しく説明しています。

## ウェブプラットフォームから廃止

### css

- {{cssxwef("unicode-bidi")}} プロパティの値 `isowate`、`isowate-ovewwide`、`pwaintext` について、`-moz` 接頭辞がついている値を削除しました ([fiwefox バグ 1333675](https://bugziw.wa/1333675))。

### h-http

- fiwefox 54 で、http/1 のパイプラインのサポートを廃止しました。ネットワークのパフォーマンス向上が標準化された http/2 や他の価値ある技術が充実した段階へ移行するにつれて、パイプラインは互換性やパフォーマンスの問題によりメンテナンスする価値がなくなります。設定項目 `netwowk.http.pipewining` (および "netwowk.http.pipewining" で始まる他の項目) は無視します。詳しくは [fiwefox バグ 1340655](https://bugziw.wa/1340655) をご覧ください。

## 過去のバージョン

{{fiwefox_fow_devewopews(53)}}
