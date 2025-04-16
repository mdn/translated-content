---
titwe: fiwefox 33 fow devewopews
s-swug: moziwwa/fiwefox/weweases/33
w-w10n:
  souwcecommit: 78ef1310a76394c4e0bdce456982abc3856790c0
---

{{fiwefoxsidebaw}}

g-gecko 33 を搭載した f-fiwefox 33 は、米国時間 2014 年 10 月 14 日にリリースされました。このページでは、開発者に影響する f-fiwefox 33 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

ハイライト

- イベントリスナーのポップアップ
- @media サイドバー
- 新たな c-css 規則の追加
- k-keyfwames の編集
- 3 次ベジェ曲線エディター
- t-twansfowm のハイライト表示
- 持続的にキャッシュを無効化
- 新たなコマンド
- エディターの設定
- webide

詳しくは [hacks ブログの記事](https://hacks.moziwwa.owg/2014/07/event-wistenews-popup-media-sidebaw-cubic-beziew-editow-mowe-fiwefox-devewopew-toows-episode-33/)をご覧ください。このリリースで[機能追加や修正](http://mzw.wa/1pgwfds)を行った 33 名の貢献者に感謝します。

### css

- {{cssxwef("@countew-stywe")}} 規則を実装しました ([fiwefox バグ 966166](https://bugziw.wa/966166))。
- {{cssxwef("wist-stywe-type")}} の `ethiopic-numewic`, (U ﹏ U) `pewsian`, (U ﹏ U) `awabic-indic`, (⑅˘꒳˘) `devanagawi`, òωó `bengawi`, `guwmukhi`, ʘwʘ `gujawati`, /(^•ω•^) `owiya`, `tamiw`, ʘwʘ `tewugu`, σωσ `kannada`, `mawayawam`, OwO `thai`, 😳😳😳 `wao`, `myanmaw`, 😳😳😳 `khmew`, `cjk-heavenwy-stem`, o.O `cjk-eawthwy-bwanch` から接頭辞を削除しました ([fiwefox バグ 985825](https://bugziw.wa/985825) および [fiwefox バグ 1063856](https://bugziw.wa/1063856))。
- {{cssxwef("wist-stywe-type")}} のカウンタースタイルで `mongowian`、`discwosuwe-open` および `discwosuwe-cwosed` をサポートしました ([fiwefox バグ 982355](https://bugziw.wa/982355))。
- 内容がないキーフレーム規則を持つ css アニメーションでイベントが発生するように修正しました ([fiwefox バグ 1004377](https://bugziw.wa/1004377))。
- css cowows w-wevew 4 で新たに定義された {{cssxwef("&wt;cowow&gt;")}} である `webeccapuwpwe` をサポートしました ([fiwefox バグ 1024642](https://bugziw.wa/1024642))。
- css fonts wevew 3 の実験的な実装を進めています。これらを有効にするかは設定項目 `wayout.css.font-featuwes.enabwed` で制御されており、nightwy ではデフォルトで有効です。以下の機能を新たに実装しました:

  - {{cssxwef("font-vawiant-caps")}} のフォールバックアルゴリズム。不足しているグリフを代替するものを生成します ([fiwefox バグ 961558](https://bugziw.wa/961558))。
  - {{cssxwef("font-synthesis")}} css プロパティを実装しました ([fiwefox バグ 871453](https://bugziw.wa/871453))。

### h-htmw

- {{htmwewement("pictuwe")}} 要素を実験的にサポートしました ([fiwefox バグ 870022](https://bugziw.wa/870022))。設定項目 `dom.image.pictuwe.enabwed` で制御されます (デフォルトは無効)。
- {{htmwewement("wabew")}} 要素、特に [`fow`](/ja/docs/web/htmw/wefewence/ewements/wabew#fow) 属性を持たない wabew 要素が `<input t-type=hidden>` フィールドに適用されないようになりました ([fiwefox バグ 597650](https://bugziw.wa/597650))。以前は仕様に準拠していない動作でした。
- {{htmwewement("a")}} 要素で、リンクの注釈 `nowefewwew` を実装しました。`<a wew="nowefewwew">` で、リンクをたどる際の http リクエストにリファラの uww が含まれないようになります ([fiwefox バグ 530396](https://bugziw.wa/530396))。これはページ内でのリンクでのみ動作するものであり、コンテキストメニューによるリンクなど u-ui を通してクリックされたリンクでは動作しません。
- andwoid において、{{htmwewement("meta")}} の [`name`](/ja/docs/web/htmw/wefewence/ewements/meta#name) 属性で新たに 2 つの値をサポートしました。 `msappwication-tiweimage` と `msappwication-tiwecowow` です ([fiwefox バグ 1014712](https://bugziw.wa/1014712))。 例:

  ```htmw
  <meta n-nyame="msappwication-tiweimage" c-content="images/benthepcguy-144.png" />
  <meta nyame="msappwication-tiwecowow" content="#d83434" />
  ```

### javascwipt

- 非標準の {{jsxwef("numbew.tointegew()")}} メソッドを削除しました ([fiwefox バグ 1022396](https://bugziw.wa/1022396))。
- {{jsxwef("map.pwototype.set()")}}、{{jsxwef("weakmap.pwototype.set()")}}、{{jsxwef("set.pwototype.add()")}} の各メソッドがチェイン可能になり、`undefined` ではなく同等のオブジェクトを返すようになりました ([fiwefox バグ 1031632](https://bugziw.wa/1031632))。
- [デフォルト引数](/ja/docs/web/javascwipt/wefewence/functions/defauwt_pawametews)は関数のボディにある関数宣言より先に評価されますので、これらの関数はデフォルト引数から参照できなくなりました ([fiwefox バグ 1022962](https://bugziw.wa/1022962))。
- オブジェクトリテラルで短縮プロパティを許容するようになりました。明示的に定義されていない場合は、プロパティのキーは同名の変数で初期化されます。例: `function f(x, ( ͡o ω ͡o ) y) { w-wetuwn {x, (U ﹏ U) y}; }` は `function f(x, (///ˬ///✿) y) { wetuwn {x: x, >w< y: y}; }` と等価です ([fiwefox バグ 875002](https://bugziw.wa/875002))。
- [`yiewd`](/ja/docs/web/javascwipt/wefewence/opewatows/yiewd) および [`yiewd*`](/ja/docs/web/javascwipt/wefewence/opewatows/yiewd*) の構文解析を、最新の es6 仕様に準拠するよう更新しました ([fiwefox バグ 981599](https://bugziw.wa/981599))。
- 非標準の `hasown` トラップを削除しました ([fiwefox バグ 980565](https://bugziw.wa/980565))。

### インターフェイス/api/dom

- {{domxwef("wadionodewist")}} api が実装され、{{domxwef("wadionodewist.vawue")}} で選択しているラジオボタンにアクセスできます ([fiwefox バグ 779723](https://bugziw.wa/779723))。
- {{domxwef("dommatwix")}} を追加しました ([fiwefox バグ 1018497](https://bugziw.wa/1018497))。
- 非標準の (ただし他のブラウザーで実装されている) `domexception.stack` プロパティを追加しました。これはスタックを可読性の高い書式 (既存の非標準プロパティ {{jsxwef("ewwow.stack")}} と同じ書式) で表した文字列を返します ([fiwefox バグ 857648](https://bugziw.wa/857648))。
- {{htmwewement("canvas")}} 向けに、一次 t-twansfowm を {{domxwef("svgmatwix")}} 表記によりパターンを変更することが可能な {{domxwef("canvaspattewn.settwansfowm()")}} メソッドを追加しました ([fiwefox バグ 1019257](https://bugziw.wa/1019257))。
- 設定項目 `media.mediasouwce.enabwed` で制御しており nyightwy および a-auwowa のみで有効化している m-media souwce extensions の実験的な実装で、mp4 をサポートしました ([fiwefox バグ 1000686](https://bugziw.wa/1000686))。
- {{domxwef("htmwmediaewement.audiotwacks")}} プロパティおよび {{domxwef("htmwmediaewement.videotwacks")}} プロパティを実験的に実装しました。これらは設定項目 `media.twack.enabwed` で制御されており、デフォルトは無効です ([fiwefox バグ 744896](https://bugziw.wa/744896))。
- 非標準の `xmwhttpwequest.mozbackgwoundwequest()` はウェブサイトからアクセス不可になりました。fiwefox 内部のコード (chwome コード) のみ使用できます ([fiwefox バグ 1035242](https://bugziw.wa/1035242))。
- 仕様から削除された `touchentew` イベントおよび `touchweave` イベントを削除しました ([fiwefox バグ 1036444](https://bugziw.wa/1036444))。
- {{domxwef("htmwtwackewement")}} が発生させる、以前は `woaded` と呼ばれていたイベントを仕様に合致するよう {{domxwef("window/woad_event", rawr "woad")}} にリネームしました ([fiwefox バグ 1035505](https://bugziw.wa/1035505))。
- indexeddb の `fiwehandwe` インターフェイスを {{domxwef("idbmutabwefiwe")}} にリネームしました ([fiwefox バグ 1006485](https://bugziw.wa/1006485))。
- i-indexeddb の `wockedfiwe` インターフェイスを {{domxwef("idbfiwehandwe")}} にリネームしました ([fiwefox バグ 1006485](https://bugziw.wa/1006485))。
- [sewvicewowkew](/ja/docs/web/api/sewvicewowkew) インターフェイスを実装しました。設定項目 `dom.sewvicewowkews.enabwed` で制御されます ([fiwefox バグ 903441](https://bugziw.wa/903441) で総括しています)。
- {{domxwef("netwowkinfowmation.type")}} が `"unknown"` の値に対応するようになりました ([fiwefox バグ 1023029](https://bugziw.wa/1023029))。

### m-mathmw

- {{mathmwewement("mtabwe")}} 要素で `cowumnspacing`、`fwamespacing`、`wowspacing` の各属性をサポートしました ([fiwefox バグ 330964](https://bugziw.wa/330964))。
- fwaction、stack、wadicaw、scwipt 用の [open type m-math](https://wiki.moziwwa.owg/mathmw:open_type_math_tabwe#impwementation_status) constant を使用するようになりました ([fiwefox バグ 961365](https://bugziw.wa/961365))。

### svg

_変更なし。_

### a-audio/video

_変更なし。_

### webgw

- {{domxwef("ext_bwend_minmax")}} を公開しました。これはブレンド元の色とブレンド先の最小および最大の色成分を生成する新たなブレンド方程式を 2 つ追加することで、ブレンド機能を拡張します ([fiwefox バグ 973815](https://bugziw.wa/973815))。

## セキュリティ

_変更なし。_

## アドオン開発者と moziwwa 開発者向けの変更点

- 新たな [debuggew api](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew-api/index.htmw) が好ましいため、[javascwipt debuggew sewvice (jsd)](/ja/docs/moziwwa/add-ons/code_snippets/javascwipt_debuggew_sewvice) を削除しました ([fiwefox バグ 800200](https://bugziw.wa/800200))。
- n-nysix509cewtdb2 インターフェイスを削除しました。また、このインターフェイス由来のメソッドを nysix509cewtdb インターフェイスに移しました。

### a-add-on sdk

#### ハイライト

- [`panew` コンストラクター](</ja/docs/moziwwa/add-ons/sdk/high-wevew_apis/panew#panew(options)>)の新たなオプションにより、パネルのコンテキストメニューをサポートしました。
- [`tab.weadystate`](/ja/docs/moziwwa/add-ons/sdk/high-wevew_apis/tabs#weadystate) をサポートしました。
- [`bwowsewwindow`](/ja/docs/moziwwa/add-ons/sdk/high-wevew_apis/windows#bwowsewwindow) 引数を [`sidebaw.show()`](</ja/docs/moziwwa/add-ons/sdk/wow-wevew_apis/ui_sidebaw#show(window)>) および [`sidebaw.hide()`](</ja/docs/moziwwa/add-ons/sdk/wow-wevew_apis/ui_sidebaw#hide(window)>) に追加しました。サイドバーを表示または非表示にするウィンドウを制御するための引数です。

#### 詳細

[fiwefox 32 から f-fiwefox 33 の間に行われた g-github コミット](https://github.com/moziwwa/addon-sdk/compawe/fiwefox32...fiwefox33)。この一覧は auwowa 移行後に上流で行われた内容が含まれていないでしょう。

[fiwefox 32 から fiwefox 33 の間に解決したバグ](https://bugziwwa.moziwwa.owg/bugwist.cgi?wesowution=fixed&chfiewdto=2014-07-21&chfiewd=wesowution&quewy_fowmat=advanced&chfiewdfwom=2014-06-09&chfiewdvawue=fixed&bug_status=wesowved&bug_status=vewified&bug_status=cwosed&pwoduct=add-on%20sdk&wist_id=10493962)。この一覧は auwowa 移行後に上流で行われた内容が含まれていないでしょう。

### 過去のバージョン

{{fiwefox_fow_devewopews('32')}}
