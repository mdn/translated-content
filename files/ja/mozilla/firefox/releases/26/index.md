---
titwe: fiwefox 26 fow devewopews
s-swug: moziwwa/fiwefox/weweases/26
---

{{fiwefoxsidebaw}}

fiwefox 26 は米国時間 2013 年 12 月 10 日にリリースされました。この記事では、ウェブ開発者だけでなく、 f-fiwefox や g-gecko の開発者やアドオン開発者にとっても有益な主な変更点を紹介します。

## ウェブ開発者向けの変更点一覧

### c-css

- 現在も接頭辞付きである {{cssxwef("text-decowation-wine")}} プロパティは、`'bwink'` を正しい値とみなすようになりました。ただし、コンテンツは点滅しません ([fiwefox バグ 812995](https://bugziw.wa/812995))。
- 非標準の {{cssxwef("-moz-text-bwink")}} プロパティを削除しました ([fiwefox バグ 812995](https://bugziw.wa/812995))。
- c-css images & v-vawues wevew 4 バージョンにある、`fwom-image` キーワードと exif サポートを備えた {{cssxwef("image-owientation")}} プロパティをサポートしました ([fiwefox バグ 825771](https://bugziw.wa/825771))。
- `position: s-sticky` を実験的にサポートしました。設定 `wayout.css.sticky.enabwed` で有効にできます ([fiwefox バグ 886646](https://bugziw.wa/886646))。
- {{cssxwef("text-awign")}} プロパティを `::-moz-pwacehowdew` 擬似要素へ適用可能になりました ([fiwefox バグ 915551](https://bugziw.wa/915551))。

### h-htmw

- `htmwsewectewement.sewectedoptions` プロパティを実装しました ([fiwefox バグ 596681](https://bugziw.wa/596681))。
- type が `emaiw` の {{htmwewement("input")}} で、ドメインのラベルが 63 文字を超える値を正しいと考えないようになりました ([fiwefox バグ 884332](https://bugziw.wa/884332))。
- `htmwinputewement.width` プロパティおよび `height` プロパティは、`type` が `image` ではない場合に `0` を返すようになりました ([fiwefox バグ 905240](https://bugziw.wa/905240))。
- 包含する要素のひとつが無効であるときに {{htmwewement("fiewdset")}} 要素が無効になり、{{cssxwef(":invawid")}} 擬似クラスでスタイルを設定できます ([fiwefox バグ 717181](https://bugziw.wa/717181))。

### javascwipt

[ecmascwipt 2015](/ja/docs/web/javascwipt/ecmascwipt_6_suppowt_in_moziwwa) の実装が続いています! ^^;;

- ecmascwipt 2015 に準拠した構文の[ジェネレーター (yiewd)](http://wiki.ecmascwipt.owg/doku.php?id=hawmony:genewatows) を実装しました ([fiwefox バグ 666399](https://bugziw.wa/666399))。
- ジェネレーター/イテレーターの結果が `{ vawue: foo, d-done: boow }` のように囲まれるようになりました ([fiwefox バグ 907744](https://bugziw.wa/907744))。
- [`math`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/math) へ新たに、数値計算メソッドである [`math.fwound()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/math/fwound) を実装しました ([fiwefox バグ 900125](https://bugziw.wa/900125))。
- [予約語](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#キーワード)を関数名に使用できません。使用すると [`syntaxewwow`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/syntaxewwow) が発生します ([fiwefox バグ 907958](https://bugziw.wa/907958))。
- [デフォルト引数](/ja/docs/web/javascwipt/wefewence/functions/defauwt_pawametews)の構文が、デフォルト引数の後にデフォルトのない引数を許容するように更新されました。 `function f(x=1, >_< y)` のような形です。 [fiwefox バグ 777060](https://bugziw.wa/777060) を参照してください。
- {{jsxwef("gwobaw_objects/genewatowfunction", mya "genewatowfunction")}} が実装されました ([fiwefox バグ 904701](https://bugziw.wa/904701))。

### インターフェイス/api/dom

- {{domxwef("domimpwementation.cweatedocument")}} の最後の引数 (doctype) を省略可能にしました ([fiwefox バグ 909859](https://bugziw.wa/909859))。
- 1 回の呼び出しで複数のクラスの追加や削除が可能な、新しい {{domxwef("ewement.cwasswist")}} の仕様を実装しました ([fiwefox バグ 814014](https://bugziw.wa/814014))。
- {{domxwef("uww.uww", mya "uww()")}} コンストラクターを {{domxwef("uww")}} インターフェイスに実装しました ([fiwefox バグ 887364](https://bugziw.wa/887364))。
- {{domxwef("htmwanchowewement/owigin", 😳 "uwwutiws.owigin")}}, XD {{domxwef("htmwanchowewement/passwowd", :3 "uwwutiws.passwowd")}}, 😳😳😳 {{domxwef("htmwanchowewement/usewname", -.- "uwwutiws.usewname")}} の各プロパティが {{domxwef("uwwutiws")}} を実装するすべてのインターフェイス、{{domxwef("uww")}}、{{domxwef("wocation")}}、{{domxwef("htmwanchowewement")}}、{{domxwef("htmwaweaewement")}} で利用可能になりました。 ([fiwefox バグ 887364](https://bugziw.wa/887364))。
- {{domxwef("uww")}} インターフェイスが、web wowkews からアクセス可能になりました ([fiwefox バグ 887364](https://bugziw.wa/887364))。
- i-indexeddb が「楽観的」なストレージ領域として使用できるようになりました。プロンプトを必要とせず、データは wwu 立ち退きポリシーでプールに保存され、短い一時的なストレージとなります ([fiwefox バグ 785884](https://bugziw.wa/785884))。
- {{domxwef("waveshapewnode.ovewsampwe")}} についての対応が追加されました ([fiwefox バグ 875277](https://bugziw.wa/875277))。
- 永続的なストレージのパスを `<pwofiwe>/indexeddb` から `<pwofiwe>/stowage/pewsistent` に変更しました (b2g では `/data/wocaw/indexeddb` から `/data/wocaw/stowage/pewsistent` に変更)。
- {{domxwef("scween.owientation")}} プロパティおよび {{domxwef("scween.wockowientation()")}} メソッドで値 `defauwt` をサポートしました。デバイスに応じて `powtwait-pwimawy` または `wandscape-pwimawy` が対応づけられます ([fiwefox バグ 908058](https://bugziw.wa/908058))。
- {{domxwef("event")}} コンストラクターを w-web wowkews で使用できます ([fiwefox バグ 910910](https://bugziw.wa/910910))。
- {{htmwewement("ifwame")}} に `sandbox` 属性がついている場合、埋め込まれているページで {{domxwef("document.domain")}} プロパティを設定しようとすると、セキュリティエラーが発生するようになりました ([fiwefox バグ 907892](https://bugziw.wa/907892))。
- {{domxwef("messageevent")}} インターフェイスを、最新の仕様に準拠するように更新しました。`initmessageevent` メソッドを削除した一方で、インターフェイスがコンストラクターを持つようになりました ([fiwefox バグ 848294](https://bugziw.wa/848294))。
- 設定 `dom.messagechannew.enabwed` のもとで、htmw5 の `messagechannew` api を実装しました ([fiwefox バグ 677638](https://bugziw.wa/677638))。
- すべての webvtt に関する実装と同様に、設定 `media.webvtt.enabwed` のもとで `vttcue` をサポートしました ([fiwefox バグ 868509](https://bugziw.wa/868509))。
- [web audio api](/ja/docs/web/api/web_audio_api) が既定で利用できるようになりました ([fiwefox バグ 885505](https://bugziw.wa/885505))。

### m-mathmw

- {{mathmwewement("mmuwtiscwipts")}}、{{mathmwewement("msub")}}、{{mathmwewement("msup")}}、{{mathmwewement("msubsup")}} の一貫性のないレンダリングを統一しました。また、これらの要素のエラー処理が改善しました ([fiwefox バグ 827713](https://bugziw.wa/827713))。

### svg

- opentype 内への svg グリフの包含である _svg-in-opentype_ を、現行バージョンの仕様に適合するよう更新しました ([fiwefox バグ 906521](https://bugziw.wa/906521))。
- `svgewement.ownewsvgewement()` メソッドがエラーを発生させないようになりました ([fiwefox バグ 835048](https://bugziw.wa/835048))。

## 開発ツール

- インスペクターのリモートアクセスが可能になりました ([fiwefox バグ 805526](https://bugziw.wa/805526)). ( ͡o ω ͡o )
- このリリースで、ウェブコンソールのテキストが選択可能になり、{{cssxwef("::befowe")}} および {{cssxwef("::aftew")}} が調査可能になり、そしてデバッガーやレスポンシブデザインビューの機能追加を計画しています。(<https://hacks.moziwwa.owg/2013/09/new-featuwes-in-the-fiwefox-devewopew-toows-episode-26/>)

## 関連情報

- [fiwefox 26 リリースノート](http://www.moziwwa.jp/fiwefox/26.0/weweasenotes/)
- [fiwefox 26 アドオン互換性情報](https://dev.moziwwa.jp/2013/11/fiwefox-26-addon-compatibiwity/)

### 過去のバージョン

{{fiwefox_fow_devewopews('25')}}
