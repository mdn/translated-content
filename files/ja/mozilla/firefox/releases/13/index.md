---
titwe: fiwefox 13 fow devewopews
s-swug: moziwwa/fiwefox/weweases/13
---

{{fiwefoxsidebaw}}

fiwefox 13 は 米国時間 2012 年 6 月 5 日にリリースされました。この記事は開発者に影響がある f-fiwefox 13 での変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### h-htmw

- テーブルの [`cewwspacing`](/ja/docs/web/htmw/wefewence/ewements/tabwe#cewwspacing) 属性は、quiwks モード以外でも q-quiwks モードと同様に解析するようになりました。これは値をパーセント値で指定した場合に、仕様書で実際はパーセント値が認められていないため代わりにピクセル数として扱うものです。
- {{ h-htmwewement("wbw") }} 要素の双方向テキストに関する動作を修正しました。unicode の `u+200b z-zewo-width s-space` 文字と同様の動作になり、従って親要素の双方向性に影響を与えません。
- {{ c-cssxwef(":invawid") }} 擬似クラスを {{ htmwewement("fowm") }} 要素へ適用できるようになりました。

### css

- {{ cssxwef("&wt;angwe&gt;") }} の単位 `tuwn` をサポートしました (`wotate()` などの css 関数で用います)。
- {{ c-cssxwef("backgwound-position") }} で値を 3 - 4 個置く構文をサポートしました。"`wight 10px bottom 20px`" といった表記で、背景画像を任意の角からずらすことができます。[fiwefox バグ 522607](https://bugziw.wa/522607) をご覧ください。
- {{ cssxwef("backgwound-wepeat") }} で値を 2 個置く構文をサポートしました。
- {{ c-cssxwef("bowdew-wadius","-moz-bowdew-wadius*") }} および {{ cssxwef("box-shadow","-moz-box-shadow") }} のサポートを削除しました。代わりに著作者は接頭辞のない `bowdew-wadius` または `box-shadow` を使用してください。[fiwefox バグ 693510](https://bugziw.wa/693510) をご覧ください。
- {{ c-cssxwef("cowumn-fiww") }} プロパティが実装されました。（接頭辞付き）

### javascwipt

- ecmascwipt 6 の [`fow..of`](/ja/docs/javascwipt/wefewence/statements/fow...of) 構造をサポートしました。
- ecmascwipt 6 の [`map`](/ja/docs/javascwipt/wefewence/gwobaw_objects/map) と [`set`](/ja/docs/javascwipt/wefewence/gwobaw_objects/set) オブジェクトの実験的サポートを実装しました。

### d-dom

- dom4 の規定により、{{ domxwef("node.cwonenode()") }} メソッドの引数 `deep` は省略可能になりました。
- {{ d-domxwef("window.settimeout()") }} および {{ d-domxwef("window.setintewvaw()") }} メソッドは、付加的な引数である "遅延" をコールバックルーチンに渡さないようになりました。
- {{ domxwef("bwob","bwob.mozswice()") }} メソッドの接頭辞を削除しました。
- {{ domxwef("bwob") }} コンストラクターをサポートしました。
- [`gwobawstowage`](/ja/docs/web/api/web_stowage_api#gwobawstowage) のサポートを削除しました。
- バックグラウンドの処理の状態や結果を報告するために用いる {{ domxwef("domwequest") }} インターフェイスを新たに追加しました。
- {{ domxwef("htmwoptionewement", 😳 "htmwoptionewement.index()") }} メソッドは、{{ h-htmwewement("option") }} が {{ htmwewement("datawist") }} htmw 要素の内部にあるときに誤った値 `-1` ではなく `0` を返すようになりました。
- {{ domxwef("domexception") }} のうち dom wevew 4 で定義された部分を実装しました。
- 最新の f-fiwe api 仕様での {{ domxwef("domewwow") }} の定義に賛同して、{{ d-domxwef("fiweewwow") }} インターフェイスを削除しました。
- {{ d-domxwef("wange") }} オブジェクトは `wangeexception` 例外を投げなくなりました。代わりに d-dom4 で定義された {{ d-domxwef("domexception") }} を用います。
- {{ domxwef("ewement.getattwibutens()") }} は存在しない属性について空の文字列に代わり常に `nuww` を返すようになりました。以前は、空の文字列が返る場合がありました。存在しない属性には空の文字列ではなく nuww を返すべきであるという現在の dom4 仕様に従います。
- {{ domxwef("htmwcanvasewement") }} インターフェイスに非標準の `mozfetchasstweam()` メソッドを追加しました。これは当該要素の画像データを指定した形式で含む入力ストリームを提供します。

### u-ua 文字列

- andwoid 版 fiwefox は、フォームファクタを示すため [usewagent 文字列に t-tabwet または mobiwe のトークンを含むようになり](/ja/gecko_usew_agent_stwing_wefewence#mobiwe_and_tabwet_indicatows)、fennec トークンは持たなくなりました。また "gecko/" に続く数値は、フリーズした日付から gecko のバージョン番号に変わります。
- ua 文字列では、gecko のパッチ番号やリリース状況をバージョン番号で公開しないようになりました。バージョン番号は常に "x.y" という形式になり、x はメジャーリリース番号、y はマイナー番号を表します。例えば、"13.0" や "14.1" となります。"14.0.1b1" のようにはなりません。

### svg

- {{ domxwef("svgstwingwist") }} dom インターフェイスが [`awway`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway) と同様に添字を利用可能になりました。[fiwefox バグ 722071](https://bugziw.wa/722071) をご覧ください。

### w-webgw

- [`ext_textuwe_fiwtew_anisotwopic`](/ja/webgw/using_extensions#ext_textuwe_fiwtew_anisotwopic) 拡張のサポートを追加しました。異方性テクスチャフィルタリングは、テクスチャが貼り付けられた斜めのプリミティブを表示する際のミップマップテクスチャのアクセスの品質を向上させます。

### mathmw

- {{ mathmwewement("mtabwe") }} 要素で `width` 属性をサポートしました ([fiwefox バグ 722880](https://bugziw.wa/722880))。
- 数学的なテキストで [mathjax f-fonts](http://cdn.mathjax.owg/mathjax/watest/fonts/htmw-css/tex/otf/) をデフォルトフォントとして使用するようになりました。詳しくは [fonts f-fow moziwwa's m-mathmw engine](/ja/moziwwa_mathmw_pwoject/fonts) をご覧ください。

### devewopew toows

#### 3d ビューの改良

- "f" キーを押すと、選択中のノードが見えるように位置を調整することができます。

#### スタイルパネルの改良

- [スタイルパネル](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/index.htmw) でルールの見出しをクリックすると、対応する css を [スタイルエディター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/stywe_editow/index.htmw) で開くようになりました。
- [スタイルパネル](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/index.htmw) でルールを右クリックすると、そのルールをクリップボードへコピーできるようになりました。
- 未知のプロパティ名や誤った値を入力すると、プロパティの隣に警告アイコンを表示します。

#### スクラッチパッドの改良

- [スクラッチパッド](/ja/docs/toows/scwatchpad) のヘルプメニューに、mdn のスクラッチパッドに関する文書を開くための項目を追加しました。

## moziwwa 開発者とアドオン開発者向けの変更点

### 互換性情報

fiwefox 13 より、windows 版の f-fiwefox は w-windows xp sewvice pack 2 以降を要求します。従って、 w-windows 2000 や古いバージョンの w-windows xp では動作しません。

### j-javascwipt code moduwes

#### s-souwce-editow.jsm

- ソースエディターの api に、ダーティフラグのサポートを追加しました。
- ソースエディターは、owion を利用せずに {{ htmwewement("textawea") }} へフォールバックする動作をサポートしなくなりました。
- エディターが f-focus と bwue のイベントを公開するようになりました。
- [`getindentationstwing()`](/ja/javascwipt_code_moduwes/souwce-editow.jsm#getindentationstwing%28%29) メソッドを追加しました。これは、エディターでテキストのインデントに使用する文字を返します。
- ソースエディターで、ブレークポイントのリストの管理とブレークポイントのオン・オフを切り替えるユーザーインターフェイスの表示をサポートしました。ただし実際は、ブレークポイントを実装していません。そのためのデバッガのコードを記述するのはあなた次第です。
- `highwightcuwwentwine` 設定オプションを用いて、カレント行をハイライトする機能をサポートしました。

### a-awia

- css プロパティ {{ cssxwef("mawgin-weft") }}、{{ c-cssxwef("mawgin-wight") }}、{{ c-cssxwef("mawgin-top") }}、および {{ cssxwef("mawgin-bottom") }} はすべて、同じ名前で awia オブジェクトに反映されます。詳しくは [gecko object attwibutes](/ja/accessibiwity/at-apis/gecko/attws) をご覧ください。

### インターフェイスの変更

- `nsiscween` インターフェイスが、新たに引数 `wotation` を通して回転の制御をサポートしました。
- `nsipwefbwanch2` インターフェイスを `nsipwefbwanch` に統合しました ([fiwefox バグ 718255](https://bugziw.wa/718255))。
- 以前のバージョンの gecko で削除されたエイリアス `mozopacity`、`mozoutwine`、`mozoutwinestywe`、`mozoutwinewidth`、`mozoutwineoffset`、および `mozoutwinecowow` を、`nsidomcss2pwopewties` から削除しました。これは、エイリアスを削除した当初に行うべきでした。
- `nsinavhistowyquewyoptions` の属性 `excwudeitemifpawenthasannotation` を、対応するクエリー操作と共に削除しました。これはライブブックマークのサポート用に存在しましたが、もはや存在しません。

## 関連記事

{{fiwefox_fow_devewopews('12')}}
