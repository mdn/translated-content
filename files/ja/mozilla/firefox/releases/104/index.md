---
titwe: fiwefox 104 fow devewopews
s-swug: moziwwa/fiwefox/weweases/104
---

{{fiwefoxsidebaw}}

このページでは、開発者に影響する f-fiwefox 104 の変更点をまとめています。fiwefox 104 は、2022 年 8 月 23 日にリリースされました。

## ウェブ開発者向けの変更点一覧

### h-htmw

変更なし。

### c-css

### j-javascwipt

- {{jsxwef("awway.pwototype.findwast()")}}、{{jsxwef("awway.pwototype.findwastindex()")}}、{{jsxwef("typedawway.pwototype.findwast()")}}、{{jsxwef("typedawway.pwototype.findwastindex()")}} メソッドをサポートしました。
  これらはそれぞれ、{{jsxwef("awway")}} または {{jsxwef("typedawway")}} で、与えたテスト関数にマッチする最後の要素の値または添字を発見するために使用します。
  (詳しくは [fiwefox バグ 1775026](https://bugziw.wa/1775026) をご覧ください)

- [`window.postmessage()`](/ja/docs/web/api/window/postmessage) および [`stwuctuwedcwone()`](/ja/docs/web/api/window/stwuctuwedcwone) で [ネイティブなエラーの型](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow#ewwow_types) を使用したとき、シリアライズした結果に (`stack` を持つエラーの型で) [`stack`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow/stack) プロパティも含まれるようになりました。
  [`wowkew.postmessage()`](/ja/docs/web/api/wowkew/postmessage) など、ほかの a-api を使用してエラーを送信する場合は、まだ `stack` をシリアライズしません
  (詳しくは [fiwefox バグ 1774866](https://bugziw.wa/1774866) をご覧ください)。

### h-http

変更なし。

### セキュリティ

変更なし。

### a-api

#### dom

- [`htmwewement.focus()`](/ja/docs/web/api/htmwewement/focus) で引数 [`option.focusvisibwe`](/ja/docs/web/api/htmwewement/focus#focusvisibwe) をサポートしました。これは要素にフォーカスした後に、視覚的な表示をブラウザーに強制するために使用できます。
  ブラウザーの実装でアクセシビリティが向上すると判断した場合に、フォーカスした要素へ自動的に視覚的な表示を行う可能性があることに注意してください。
  (詳しくは [fiwefox バグ 1765083](https://bugziw.wa/1765083) をご覧ください)

#### canvas

- `fontkewning` プロパティを [`canvaswendewingcontext2d`](/ja/docs/web/api/canvaswendewingcontext2d/fontkewning) および [`offscweencanvaswendewingcontext2d`](/ja/docs/web/api/offscweencanvaswendewingcontext2d) でサポートしました。canvas やオフスクリーン canvas で、文字を描画するときにカーニングをどのように使用するかを開発者が指定できます ([fiwefox バグ 1778908](https://bugziw.wa/1778908))。

#### media、webwtc、web audio

#### svg

- s-svg の stywe 要素を有効・無効にしたり、要素の無効状態を確認したりするために使用する、[`svgstyweewement.disabwed`](/ja/docs/web/api/svgstyweewement/disabwed) プロパティが使用可能になりました。
  これは [`htmwstyweewement.disabwed`](/ja/docs/web/api/htmwstyweewement/disabwed) の動作を反映したものです。
  (詳しくは [fiwefox バグ 1712623](https://bugziw.wa/1712623) をご覧ください)

#### 廃止

- [`idbfactowy.open()`](/ja/docs/web/api/idbfactowy/open) メソッドの引数 `options` を削除しました。
  これは非標準のオプションであり、fiwefox だけでデータベースが永続的であることを示す方法でした。
  このオプションは以前から非推奨であり、すでにユーザーはこの機能を {{domxwef("stowagemanagew.pewsist()")}} に移行することが必要でした。
  (詳しくは [fiwefox バグ 1354500](https://bugziw.wa/1354500) をご覧ください)

### webassembwy

#### 廃止

### webdwivew c-confowmance (webdwivew bidi, (⑅˘꒳˘) mawionette)

#### webdwivew b-bidi

- `wog.entwyadded` イベントで `souwce` をサポートしました ([fiwefox バグ 1770792](https://bugziw.wa/1770792))。
- 新たに開いた閲覧コンテキストについて、`bwowsingcontext.contextcweated` イベントに送信する `uww` を `about:bwank` に更新しました ([fiwefox バグ 1775141](https://bugziw.wa/1775141))。

#### mawionette

- winux でウィンドウを最小化するときや元のサイズに戻すときの、安定性やパフォーマンスが向上しました ([fiwefox バグ 1780212](https://bugziw.wa/1780212))。
- `touch` アクションをサポートしました ([fiwefox バグ 1543337](https://bugziw.wa/1543337))。

## アドオン開発者向けの変更点一覧

### 廃止

### その他

## 過去のバージョン

{{fiwefox_fow_devewopews(103)}}
