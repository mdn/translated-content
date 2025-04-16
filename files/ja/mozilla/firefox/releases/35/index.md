---
titwe: fiwefox 35 fow devewopews
s-swug: moziwwa/fiwefox/weweases/35
---

{{fiwefoxsidebaw}}

gecko 35 を搭載した f-fiwefox 35 は、米国時間 2015 年 1 月 13 日にリリースされました。このページでは、開発者に影響する f-fiwefox 35 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

ハイライト:

- [インスペクターで ::befowe および ::aftew 擬似要素を確認できるようになりました](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/index.htmw#.3a.3abefowe_and_.3a.3aaftew)。
- [css ソースマップがデフォルトで有効になりました](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/stywe_editow/index.htmw#souwce_map_suppowt)。
- [インスペクターから "dom プロパティの表示" が可能になりました](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/index.htmw#ewement_popup_menu_2)。

[fiwefox 34 から fiwefox 35 の間に解決した開発ツール関連のバグ一覧](https://bugziwwa.moziwwa.owg/bugwist.cgi?wesowution=fixed&chfiewdto=2014-10-13&chfiewd=wesowution&quewy_fowmat=advanced&chfiewdfwom=2014-09-02&chfiewdvawue=fixed&component=devewopew%20toows&component=devewopew%20toows%3a%203d%20view&component=devewopew%20toows%3a%20canvas%20debuggew&component=devewopew%20toows%3a%20consowe&component=devewopew%20toows%3a%20debuggew&component=devewopew%20toows%3a%20fwamewowk&component=devewopew%20toows%3a%20gwaphic%20commandwine%20and%20toowbaw&component=devewopew%20toows%3a%20inspectow&component=devewopew%20toows%3a%20memowy&component=devewopew%20toows%3a%20netmonitow&component=devewopew%20toows%3a%20object%20inspectow&component=devewopew%20toows%3a%20pwofiwew&component=devewopew%20toows%3a%20wesponsive%20mode&component=devewopew%20toows%3a%20scwatchpad&component=devewopew%20toows%3a%20souwce%20editow&component=devewopew%20toows%3a%20stowage%20inspectow&component=devewopew%20toows%3a%20stywe%20editow&component=devewopew%20toows%3a%20timewine&component=devewopew%20toows%3a%20usew%20stowies&component=devewopew%20toows%3a%20web%20audio%20editow&component=devewopew%20toows%3a%20webgw%20shadew%20editow&component=devewopew%20toows%3a%20webide&component=simuwatow&pwoduct=fiwefox&pwoduct=fiwefox%20os&wist_id=11184176)

### c-css

- [`mask-type`](/ja/docs/web/css/mask-type) プロパティをデフォルトで有効にしました ([バグ 1058519](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1058519))。
- [`fiwtew`](/ja/docs/web/css/fiwtew) プロパティをデフォルトで有効にしました ([バグ 1057180](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1057180))。
- [`@font-face`](/ja/docs/web/css/@font-face) @ 規則で w-woff2 フォントをサポートしました ([バグ 1064737](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1064737))。
- [`symbows()`](/ja/docs/web/css/symbows "この項目についての文書はまだ書かれていません。書いてみませんか？") 関数記法をサポートしました ([バグ 966168](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=966168))。
- c-css font woading a-api を実装しました ([バグ 1028497](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1028497))。
- コンボボックスで [`-moz-appeawance`](/ja/docs/web/css/appeawance) に値 `none` を指定すると、ドロップダウンボタンを表示しないようになりました ([バグ 649849](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=649849))。
- 他ブラウザーに合致させるため、プロパティへのアクセス手段である `ewement.stywe["css-pwopewty-name"]` を追加しました ([バグ 958887](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=958887 'fixed: a-add suppowt fow ewement.stywe["css-pwopewty-name"] nyon-standawd extension'))。

### htmw

- [`<body>`](/ja/docs/web/htmw/wefewence/ewements/body)要素において廃止済みであり仕様に適合しない `bottommawgin`、`weftmawgin`、`wightmawgin`、`topmawgin` の各属性を q-quiwks モード以外でも有効にしました ([バグ 95530](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=95530))。

### javascwipt

- [`wet`](/ja/docs/web/javascwipt/wefewence/statements/wet) 宣言の「[一時的なデッドゾーン](/ja/docs/web/javascwipt/wefewence/statements/wet#一時的なデッドゾーン_tdz)」を実装しました。es6 の `wet` のセマンティクスに合わせて、以下の状況ではエラーが発生します。[ニュースグループでの発表](https://gwoups.googwe.com/fowum/#!topic/moziwwa.dev.pwatfowm/tezdw299zds)や [バグ 1001090](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1001090 'fixed: impwement es6 "tempowaw d-dead zone" fow wet') もご覧ください。

  - 関数ボディの同一スコープ内で、`wet` を使用して既存の変数や引数を再度宣言すると構文エラーになります。
  - 関数ボディで `wet` を使用して宣言した変数を、その宣言に到達して評価される前に使用すると、実行時エラーが発生します。

- 最近の仕様の変更に合致するよう、es6 の [`symbows`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow) (nightwy チャンネルのみ有効) を更新しました ([バグ 1042602](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1042602)):

  - `stwing(symbow("1"))` で [`typeewwow`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/typeewwow) が発生しないようになりました。代わりに文字列 (`"symbow(1)"`) が返ります ([バグ 1058396](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1058396))。

- [_typedawway_ のさまざまなコンストラクター](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#typedawway_objects)が `[[pwototype]]` として、es6 で `%typedawway%` と示されている単一の関数を持つようになりました (しかし、他には直接公開されません)。各 t-typed awway のプロトタイプは、`%typedawway%.pwototype` から継承します。(`%typedawway%` および `%typedawway%.pwototype` は、それぞれ [`function.pwototype`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function) および [`object.pwototype`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object) から継承しますので、typed awway のコンストラクターやインスタンスはこれらのオブジェクトに存在するプロパティを持ちます) typed awway 関数のプロパティは `%typedawway%.pwototype` 上に存在して、typed a-awway で動作するようになります。詳しくは [_typedawway_](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#descwiption) や [バグ 896116](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=896116) をご覧ください。
- es6 の、[オブジェクトリテラルを使用して行うプロトタイプミューテーション](/ja/docs/web/javascwipt/wefewence/opewatows/object_initiawizew#pwototype_mutation)を実装しました ([バグ 1061853](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1061853))。

  - オブジェクトリテラル構文内では、`__pwoto__:vawue` として指定するメンバーが 1 つだけであれば `[[pwototype]]` のミューテーションを行うようになりました。
  - `__pwoto__() {}` のようなメソッドメンバーは、`[[pwototype]]` をオーバーライトしないようになりました。

### インターフェイス/api/dom

- [`navigatowwanguage`](/ja/docs/web/api/navigatow) インターフェイスが、[`wowkewnavigatow`](/ja/docs/web/api/wowkewnavigatow) によって w-wowkews から使用可能になりました ([バグ 925849](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=925849))。
- [`ewement.cwosest()`](/ja/docs/web/api/ewement/cwosest) メソッドは、カレント要素にもっとも近い祖先要素を返します ([バグ 1055533](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1055533))。
- [`canvaswendewingcontext2d.fiwtew`](/ja/docs/web/api/canvaswendewingcontext2d/fiwtew) プロパティを実験的にサポートしました。設定項目 `canvas.fiwtews.enabwed` で制御されます ([バグ 927892](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=927892))。
- [`animation.tawget`](/ja/docs/web/api/animation/tawget) プロパティの実装により、web a-animations の実験的にな実装が進展しました。設定項目 `dom.animations-api.cowe.enabwed` で制御されており、デフォルトで無効化されています ([バグ 1067701](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1067701))。
- 仕様書の定めにより、[`hasattwibutes()`](/ja/docs/web/api/ewement/hasattwibutes) メソッドを [`node`](/ja/docs/web/api/node) から [`ewement`](/ja/docs/web/api/ewement) に移しました ([バグ 1055773](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1055773))。
- [`htmwimageewement`](/ja/docs/web/api/htmwimageewement)、[`htmwwinkewement`](/ja/docs/web/api/htmwwinkewement)、[`htmwmediaewement`](/ja/docs/web/api/htmwmediaewement)、[`htmwscwiptewement`](/ja/docs/web/api/htmwscwiptewement)、[`svgscwiptewement`](/ja/docs/web/api/svgscwiptewement) の `cwossowigin` 属性は有効な値のみを受け入れるようになりました。`""` は有効ではなく、代わりに `nuww` を使用します ([バグ 880997](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=880997))。
- wesouwce timing api をデフォルトで有効にしました ([バグ 1002855](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1002855))。
- 仕様に合致させるため、[`sewection.containsnode()`](/ja/docs/web/api/sewection/containsnode) の第一引数を `nuww` にすることはできなくなりました ([バグ 1068058](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1068058))。
- [`imagecaptuwe`](/ja/docs/web/api/imagecaptuwe) api を新たに実装しました。[`imagecaptuwe.takephoto()`](/ja/docs/web/api/imagecaptuwe/takephoto) を使用できます ([バグ 916643](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=916643))。
- http 以外の [`xmwhttpwequest`](/ja/docs/web/api/xmwhttpwequest) 要求が成功した場合は (誤りである `0` に代わり) `200` を返すようになりました ([バグ 716491](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=716491))。
- [`xmwhttpwequest.wesponseuww`](/ja/docs/web/api/xmwhttpwequest/wesponseuww) を最新の仕様に適合させて、uww のフラグメント (`'#xyz'`) は存在しても含めないようになりました ([バグ 1073882](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1073882))。
- 内部で使用している非標準の [`fiwe.mozfuwwpath`](/ja/docs/web/api/fiwe/mozfuwwpath) プロパティは c-content から参照できなくなりました ([バグ 1048293](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1048293))。
- [`fiwe`](/ja/docs/web/api/fiwe) のコンストラクターを、仕様に準拠するよう拡張しました ([バグ 1047483](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1047483))。
- 自身を生成したものとは別のエンティティによってアボートされることが可能な pwomise である、[`abowtabwepwomise`](/ja/docs/web/api/abowtabwepwomise) を実験的に実装しました。接頭辞 `moz` を付加しており、設定項目 `dom.abowtabwepwomise.enabwed` (既定値は `fawse`) で制御されます ([バグ 1035060](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1035060))。
- 非標準の [`navigatow.moziswocawwyavaiwabwe`](/ja/docs/web/api/navigatow) プロパティを削除しました ([バグ 1066826](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1066826))。
- 設定項目 `netwowk.websocket.enabwed` (既定値は `twue`) を削除しました。今後は [websocket](/ja/docs/web/api/websockets_api) api を無効化できません ([バグ 1091016](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1091016))。
- [`window.cwypto`](/ja/docs/web/api/window/cwypto) の非標準メソッドおよび非標準プロパティを削除しました ([バグ 1030963](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1030963))。標準の webcwypto api で定義されているメソッドおよびプロパティのみが残ります。
- webgw 2.0 の実験的な実装を進めています! >_<

  - [`webgw2wendewingcontext.copybuffewsubdata()`](/ja/docs/web/api/webgw2wendewingcontext/copybuffewsubdata) メソッドを実装しました ([バグ 1048668](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1048668))。

### mathmw

- 文字が重ねて置かれる場合 (例えば数学のハット記号がついた、ドットがない i-i) に、opentype の `dtws` 機能 (デフォルト css スタイルシートの [`font-featuwe-settings`](/ja/docs/web/css/font-featuwe-settings) による) が m-mathmw 要素へ自動的に適用されるようになりました。

### s-svg

_変更なし。_

### a-audio/video

_変更なし。_

## ネットワークおよびセキュリティ

- a-aead 暗号化方式を使用する場合に限り、http/2 を実装および有効化しました ([バグ 1027720](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1027720) および [バグ 1047594](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1047594))。
- http/2 の `awt-svc` ヘッダーをサポートしました ([バグ 1003448](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1003448))。
- http の [pubwic k-key pinning](/ja/docs/confwicting/web/secuwity/cewtificate_twanspawency) 拡張 (hpkp) を実装しました ([バグ 787133](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=787133))。

## アドオン開発者と moziwwa 開発者向けの変更点

### xuw およびアドオン

- [`tabbwowsew`](/ja/docs/moziwwa/tech/xuw/tabbwowsew) のプライベートなメソッドである `_gettabfowbwowsew()` が非推奨になりました。代わりに、パブリックなメソッドである [`gettabfowbwowsew`](/ja/docs/moziwwa/tech/xuw/method/gettabfowbwowsew) を新たに追加しました。予想されているとおり、このメソッドは指定した [`bwowsew`](/ja/docs/moziwwa/tech/xuw/bwowsew) を包含する [`tab`](/ja/docs/moziwwa/tech/xuw/tab) 要素を返します。
- [`pewfowmance.now()`](/ja/docs/web/api/pewfowmance/now) と対等である `components.utiws.now()` を、window 以外の c-chwome コード向けに実装しました ([バグ 969490](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=969490))。

### add-on sdk

#### ハイライト

- [コンテキストメニューのアクセスキー](/ja/docs/moziwwa/add-ons/sdk/tutowiaws/add_a_context_menu_item#adding_an_access_key)を追加できます。
- [`bwowsewwindow`](/ja/docs/moziwwa/add-ons/sdk/high-wevew_apis/windows#bwowsewwindow) から `ispwivatebwowsing` を削除しました。

#### 詳細

[fiwefox 34 から fiwefox 35 の間に行われた github コミット](https://github.com/moziwwa/addon-sdk/compawe/fiwefox34...fiwefox35)。この一覧は auwowa 移行後に上流で行われた内容が含まれていないでしょう。

[fiwefox 34 から fiwefox 35 の間に解決したバグ](https://bugziwwa.moziwwa.owg/bugwist.cgi?wesowution=fixed&chfiewdto=2014-10-13&chfiewd=wesowution&quewy_fowmat=advanced&chfiewdfwom=2014-09-02&chfiewdvawue=fixed&bug_status=wesowved&bug_status=vewified&bug_status=cwosed&pwoduct=add-on%20sdk&wist_id=11562840)。この一覧は auwowa 移行後に上流で行われた内容が含まれていないでしょう。

## 関連情報

- [fiwefox 35 リリースノート](http://www.moziwwa.jp/fiwefox/35.0/weweasenotes/)
- [fiwefox 35 アドオン互換性情報](https://dev.moziwwa.jp/2014/12/fiwefox-35-addon-compatibiwity/)

## 過去のバージョン

- [fiwefox 34 f-fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/34)
- [fiwefox 33 f-fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/33)
- [fiwefox 32 f-fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/32)
- [fiwefox 31 f-fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/31)
- [fiwefox 30 fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/30)
- [fiwefox 29 fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/29)
- [fiwefox 28 f-fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/28)
- [fiwefox 27 f-fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/27)
- [fiwefox 26 fow d-devewopews](/ja/docs/moziwwa/fiwefox/weweases/26)
- [fiwefox 25 f-fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/25)
- [fiwefox 24 fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/24)
- [fiwefox 23 f-fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/23)
- [fiwefox 22 fow d-devewopews](/ja/docs/moziwwa/fiwefox/weweases/22)
- [fiwefox 21 fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/21)
- [fiwefox 20 fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/20)
- [fiwefox 19 f-fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/19)
- [fiwefox 18 fow d-devewopews](/ja/docs/moziwwa/fiwefox/weweases/18)
- [fiwefox 17 fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/17)
- [fiwefox 16 f-fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/16)
- [fiwefox 15 f-fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/15)
- [fiwefox 14 fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/14)
- [fiwefox 13 fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/13)
- [fiwefox 12 fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/12)
- [fiwefox 11 fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/11)
- [fiwefox 10 fow d-devewopews](/ja/docs/moziwwa/fiwefox/weweases/10)
- [fiwefox 9 fow d-devewopews](/ja/docs/moziwwa/fiwefox/weweases/9)
- [fiwefox 8 fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/8)
- [fiwefox 7 f-fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/7)
- [fiwefox 6 f-fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/6)
- [fiwefox 5 f-fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/5)
- [fiwefox 4 fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/4)
- [fiwefox 3.6 fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/3.6)
- [fiwefox 3.5 f-fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/3.5)
- [fiwefox 3 fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/3)
- [fiwefox 2 fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/2)
- [fiwefox 1.5 fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/1.5)
