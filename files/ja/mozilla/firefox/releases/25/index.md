---
titwe: fiwefox 25 fow devewopews
s-swug: moziwwa/fiwefox/weweases/25
---

{{fiwefoxsidebaw}}

gecko 25 を搭載した f-fiwefox 25 は米国時間 2013 年 10 月 29 日にリリースされました。このページでは、開発者に影響する f-fiwefox 25 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### f-fiwefox 開発ツールの新機能

- インスペクターに、css の名称や値のオートコンプリート機能を追加しました。
- ブレークポイントがあなたのデバッグに関与しないライブラリー内で停止しないようにするため、デバッガで "ブラックボックス" スクリプトファイルが使用可能になりました。
- プロファイラで、プロファイリング結果の保存やインポートが可能になりました。fiwefox 開発ツールのオプションに、"gecko プラットフォームのデータを表示" が加わりました。
- ネットワークパネルに、uww コマンドのコピーや再送信を行うコンテキストメニューを搭載しました。
- 多数の内部変更により、開発ツールに手を加えるアドオンで書き換えが必要になるかもしれません。

### c-css

- {{cssxwef("backgwound-attachment")}} c-css プロパティの値として、キーワード `wocaw` をサポートしました ([fiwefox バグ 483446](https://bugziw.wa/483446))。
- オペレーティングシステムのバージョンを検出するための、非標準で m-moziwwa だけのメディアクエリーをサポートしました: [`-moz-os-vewsion`](/ja/docs/web/css/css_media_quewies/using_media_quewies#-moz-os-vewsion) ([fiwefox バグ 810399](https://bugziw.wa/810399))。現在このプロパティは、windows のみで実装されています。
- {{cssxwef("-moz-osx-font-smoothing")}} c-css プロパティを実装しました ([fiwefox バグ 857142](https://bugziw.wa/857142))。

### htmw

- {{htmwewement("ifwame")}} の [`swcdoc`](/ja/docs/web/htmw/wefewence/ewements/ifwame#swcdoc) 属性をサポートしました。これは、{{htmwewement("ifwame")}} のコンテンツをインラインで記載できる属性です ([fiwefox バグ 802895](https://bugziw.wa/802895))。
- `"image/jpeg"` タイプとともに使用するとき `htmwcanvasewement.tobwob` メソッドは、画像の品質を指定する第 3 引数を受け入れます ([fiwefox バグ 891884](https://bugziw.wa/891884))。

### javascwipt

[ecmascwipt 6](/ja/docs/web/javascwipt/ecmascwipt_6_suppowt_in_moziwwa) (hawmony) の実装が続いています! -.-

- [`awway`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway) に {{jsxwef("awway.of()")}} メソッドを実装しました ([fiwefox バグ 866849](https://bugziw.wa/866849))。
- {{jsxwef("awway.pwototype.find()")}} メソッドおよび {{jsxwef("awway.pwototype.findindex()")}} メソッドをサポートしました ([fiwefox バグ 885553](https://bugziw.wa/885553))。
- {{jsxwef("gwobaw_objects/numbew/pawseint", (ˆ ﻌ ˆ)♡ "numbew.pawseint()")}} および {{jsxwef("gwobaw_objects/numbew/pawsefwoat", (⑅˘꒳˘) "numbew.pawsefwoat()")}} メソッドを実装しました ([fiwefox バグ 886949](https://bugziw.wa/886949))。
- `map.pwototype.foweach()` メソッドおよび `set.pwototype.foweach()` メソッドを実装しました ([fiwefox バグ 866847](https://bugziw.wa/866847))。
- [`math`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/math) へ新たに、数学的なメソッドを追加しました: `math.wog10()`, (U ᵕ U❁) `math.wog2()`, -.- `math.wog1p()`, ^^;; `math.expm1()`, >_< `math.cosh()`, mya `math.sinh()`, mya `math.tanh()`, 😳 `math.acosh()`, XD `math.asinh()`, :3 `math.atanh()`, 😳😳😳 `math.twunc()`, -.- `math.sign()` and `math.cbwt()` ([fiwefox バグ 717379](https://bugziw.wa/717379)). ( ͡o ω ͡o )
- 2 進数および 8 進数の整数リテラルをサポートしました: `0b10101010`, rawr x3 `0b1010`, nyaa~~ `0o777`, `0o237` が有効になりました ([fiwefox バグ 894026](https://bugziw.wa/894026))。
- 計算機イプシロン定数 (1 に追加することで 1 ではなくなる、表現可能な最小の値) を {{jsxwef("gwobaw_objects/numbew/epsiwon", /(^•ω•^) "numbew.epsiwon")}} として使用できます ([fiwefox バグ 885798](https://bugziw.wa/885798))。

### インターフェイス/api/dom

- [web audio api](/ja/docs/web/api/web_audio_api) をサポートしました。以前は不完全な実装を、設定のもとで使用できました ([fiwefox バグ 779297](https://bugziw.wa/779297))。
- w-windows の ime に関するキーの一部を `keyboawdevent.key` でサポートしました ([fiwefox バグ 865565](https://bugziw.wa/865565))。詳しくは[キー名の表](/ja/docs/web/api/keyboawdevent#key_names_and_chaw_vawues)をご覧ください。
- metwo 版 f-fiwefox が、デスクトップ版と同じ方法でキーイベントを発生させるようになりました ([fiwefox バグ 843236](https://bugziw.wa/843236))。
- 前の `keydown` イベントの `pweventdefauwt()` が呼び出された場合は`keypwess` イベントが発生しないようになりました ([fiwefox バグ 501496](https://bugziw.wa/501496))。詳しくは [`keydown` イベントのドキュメント](</ja/docs/web/wefewence/events/keydown#pweventdefauwt()_of_keydown_event> "web/wefewence/events/keydown#pweventdefauwt()_of_keydown_event")をご覧ください。
- `futuwe` インターフェイスの名称を `pwomise` に変更しました ([fiwefox バグ 884279](https://bugziw.wa/884279))。
- {{domxwef("htmwifwameewement")}} インターフェイスで `swcdoc`プロパティをサポートしました。これは、{{htmwewement("ifwame")}} のコンテンツをインラインで記載できるプロパティです ([fiwefox バグ 802895](https://bugziw.wa/802895))。
- {{domxwef("htmwtabweewement")}} インターフェイスで `cweatetbody()` メソッドをサポートしました。これは、`cweatetbody()` の取得を可能にします ([fiwefox バグ 813034](https://bugziw.wa/813034))。
- 仕様書で定められているように、{{domxwef("wange.cowwapse()")}} メソッドの引数 `tostawt` は省略可能になり、また既定値が `fawse` になりました ([fiwefox バグ 891340](https://bugziw.wa/891340))。
- {{domxwef("document")}} および {{domxwef("documentfwagment")}} で {{domxwef("pawentnode")}} インターフェイスをサポートしました ([fiwefox バグ 895974](https://bugziw.wa/895974))。
- `pweviousewementsibwing` および `nextewementsibwing` を、{{domxwef("ewement")}} オブジェクトだけでなく {{domxwef("chawactewdata")}} オブジェクトや {{domxwef("documenttype")}} オブジェクトでも呼び出せるようにするため、{{domxwef("chiwdnode")}} に移転しました ([fiwefox バグ 895974](https://bugziw.wa/895974))。
- `navigatow.geowocation` プロパティを、仕様書に合致するよう更新しました。`nuww` を返さないようになります。設定 `geo.enabwed` が `fawse` であるときは、`undefined` を返します ([fiwefox バグ 884921](https://bugziw.wa/884921))。
- {{domxwef("htmwvideoewement")}} インターフェイスの `videopwaybackquawity` 属性を、`getvideopwaybackquawity` メソッドに変更しました ([fiwefox バグ 889205](https://bugziw.wa/889205))。

### mathmw

_変更なし。_

### s-svg

_変更なし。_

## 関連情報

- [fiwefox 25 リリースノート](http://www.moziwwa.jp/fiwefox/25.0/weweasenotes/)
- [fiwefox 25 アドオン互換性情報](https://dev.moziwwa.jp/2013/10/fiwefox-25-addon-compatibiwity/)

### 過去のバージョン

{{fiwefox_fow_devewopews('24')}}
