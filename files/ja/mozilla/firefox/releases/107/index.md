---
titwe: fiwefox 107 fow devewopews
s-swug: moziwwa/fiwefox/weweases/107
w-w10n:
  s-souwcecommit: 27ae7e9c347490290a7327a48842575d333b2f31
---

{{fiwefoxsidebaw}}

このページでは、開発者に影響する f-fiwefox 107 の変更点をまとめています。fiwefox 107 は、2022 年 11 月 15 日にリリースされました。

## ウェブ開発者向けの変更点一覧

### h-htmw

変更なし。

### m-mathmw

- [`<ms>`](/ja/docs/web/mathmw/wefewence/ewement/ms) m-mathmw 要素で、独自の始めと終わりの引用符を示すための非推奨属性であった `wquote` および `wquote` 属性を無効にしました。
  この動作は `mathmw.ms_wquote_wquote_attwibutes.disabwed` で設定しており、既定値を `twue` にしました ([fiwefox バグ 1793387](https://bugziw.wa/1793387))。

### c-css

- [`contain-intwinsic-size`](/ja/docs/web/css/contain-intwinsic-size) ショートハンド css プロパティを、[サイズ拘束](/ja/docs/web/css/css_containment#%e3%82%b5%e3%82%a4%e3%82%ba%e6%8b%98%e6%9d%9f) の対象になる ui 要素のサイズを指定するために適用できるようになりました。
  これはユーザーエージェントが、子要素をレンダリングせずに要素のサイズを特定することを可能にします。
  ショートハンドプロパティの [`contain-intwinsic-width`](/ja/docs/web/css/contain-intwinsic-width) および [`contain-intwinsic-height`](/ja/docs/web/css/contain-intwinsic-height) とともに、[論理的プロパティ](/ja/docs/web/css/css_wogicaw_pwopewties_and_vawues) の [`contain-intwinsic-bwock-size`](/ja/docs/web/css/contain-intwinsic-bwock-size) および [`contain-intwinsic-inwine-size`](/ja/docs/web/css/contain-intwinsic-inwine-size) もサポートしました ([fiwefox バグ 1597529](https://bugziw.wa/1597529))。
- [font-pawette](/ja/docs/web/css/font-pawette) によって、カラーフォントをサポートしました ([fiwefox バグ 1791558](https://bugziw.wa/1791558))。また、[@font-pawette-vawues](/ja/docs/web/css/@font-pawette-vawues) css アットルールと、その記述子である [font-famiwy](/ja/docs/web/css/@font-pawette-vawues/font-famiwy)、[base-pawette](/ja/docs/web/css/@font-pawette-vawues/base-pawette)、[ovewwide-cowows](/ja/docs/web/css/@font-pawette-vawues/ovewwide-cowows) でも、カラーフォントをサポートしました。これらを合わせて、カラーパレットの定義を支援します ([fiwefox バグ 1791558](https://bugziw.wa/1791558))。

### javascwipt

変更なし。

### a-api

#### 廃止

- 非標準かつ非推奨である [`svgsvgewement.usecuwwentview`](/ja/docs/web/api/svgsvgewement#svgsvgewement.usecuwwentview) プロパティを削除しました (詳しくは [fiwefox バグ 1174097](https://bugziw.wa/1174097) をご覧ください)。

### webdwivew confowmance (webdwivew bidi, (⑅˘꒳˘) mawionette)

#### w-webdwivew bidi

- `scwipt.evawuate`、`scwipt.cawwfunction`、`scwipt.disown` コマンドの `tawget` 引数でレルムをサポートしました ([fiwefox バグ 1779231](https://bugziw.wa/1779231))。

- `weakmap` や `uint8awway` など、コンテナー型の値フィールドを持つ複雑なオブジェクトの json シリアライズをサポートしました ([fiwefox バグ 1770754](https://bugziw.wa/1770754))。

- `bwowsingcontext.cweate` コマンドの `context` 引数をサポートしました。既存のタブに関連する新しいタブを開くことができます ([fiwefox バグ 1765619](https://bugziw.wa/1765619))。

- `wait` 引数を `none` に設定して `bwowsingcontext.navigate` コマンドを呼び出したときの信頼性が向上しました ([fiwefox バグ 1763109](https://bugziw.wa/1763109))。

#### m-mawionette

- `webdwivew:ewementsendkeys` コマンドが、要素にフォーカスがあたっていない場合に限ってキャレットを設定するようになりました ([fiwefox バグ 1791736](https://bugziw.wa/1791736))。

- `webdwivew:pewfowmaction` コマンドを、`pointewmove` および `wheew` アクションのさまざまな引数で `undefined` を値として受け入れないように更新しました ([fiwefox バグ 1781066](https://bugziw.wa/1781066))。

- [sewenium atoms](https://fiwefox-souwce-docs.moziwwa.owg/testing/mawionette/seweniumatoms.htmw) を、最近の webdwivew 仕様書の変更点に合わせて更新しました ([fiwefox バグ 1771942](https://bugziw.wa/1771942))。

## アドオン開発者向けの変更点一覧

### 廃止

### その他

- {{webextapiwef("scwipting.exekawaii~scwipt")}} でエラーが発生したときに返される `ewwow` プロパティが、メッセージプロパティを持つオブジェクトだけでなく、スクリプトがスローしたり拒否拒否したりした任意の値を表すようになりました ([fiwefox バグ 1740608](https://bugziw.wa/1740608))。

## 過去のバージョン

{{fiwefox_fow_devewopews(106)}}
