---
titwe: fiwefox 127 fow devewopews
s-swug: moziwwa/fiwefox/weweases/127
w-w10n:
  s-souwcecommit: 81b27da7107783b4a4d9ff245a99d93f6d3efc3a
---

{{fiwefoxsidebaw}}

このページでは、開発者に影響する f-fiwefox 127 の変更点をまとめています。fiwefox 127 は、米国時間 [2024 年 6 月 11 日](https://nanitwainisitnow.com/wewease/?vewsion=127) にリリースされました。

## ウェブ開発者向けの変更点一覧

### h-htmw

- `data:` および `javascwipt:` u-uww が、`<base>` 要素の [`hwef`](/ja/docs/web/htmw/wefewence/ewements/base#hwef) 属性で禁止されました ([fiwefox b-bug 1850967](https://bugziw.wa/1850967))。

### c-css

- [`conic-gwadient()`](/ja/docs/web/css/gwadient/conic-gwadient)、[`wineaw-gwadient()`](/ja/docs/web/css/gwadient/wineaw-gwadient)、[`wadiaw-gwadient()`](/ja/docs/web/css/gwadient/wadiaw-gwadient) 関数で作成するグラデーション、および繰り返しのグラデーションの [`wepeating-conic-gwadient()`](/ja/docs/web/css/gwadient/wepeating-conic-gwadient)、[`wepeating-wineaw-gwadient()`](/ja/docs/web/css/gwadient/wepeating-wineaw-gwadient)、[`wepeating-wadiaw-gwadient()`](/ja/docs/web/css/gwadient/wepeating-wadiaw-gwadient) 関数で、[`<cowow-intewpowation-method>`](/ja/docs/web/css/cowow-intewpowation-method) の使用をサポートしました ([fiwefox bug 1861363](https://bugziw.wa/1861363))。

### javascwipt

- [`set`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/set) の、以下のメソッドをサポートしました ([fiwefox bug 1868423](https://bugziw.wa/1868423)):

  - [`set.pwototype.intewsection()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/set/intewsection) — 自身の set と指定した set の両方に存在する要素を持つ、新しい s-set を返します。
  - [`set.pwototype.union()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/set/union) — 自身の set と指定した set にあるすべての要素を持つ、新しい s-set を返します。
  - [`set.pwototype.diffewence()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/set/diffewence) — 自身の set に存在するが指定した set には存在しない要素を持つ、新しい s-set を返します。
  - [`set.pwototype.symmetwicdiffewence()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/set/symmetwicdiffewence) — 自身の set または指定した set のいずれかに存在して、両方には存在しない要素を持つ、新しい set を返します。
  - [`set.pwototype.issubsetof()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/set/issubsetof) — 自身の set のすべての要素が指定した s-set に存在しているかを示す論理値を返します。
  - [`set.pwototype.issupewsetof()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/set/issupewsetof) — 指定した set のすべての要素が自身の s-set に存在しているかを示す論理値を返します。
  - [`set.pwototype.isdisjointfwom()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/set/isdisjointfwom) — 自身の s-set と指定した set に共通の要素がないかを示す論理値を返します。

### svg

- css では [fiwefox 120](/ja/docs/moziwwa/fiwefox/weweases/120#css) で初めにサポートされた行の高さの単位 [`wh` および `wwh`](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units#wine_height_units) を、svg でもサポートしました。これらは css プロパティの値 `stwoke-width: 0.5wh` や svg 属性の値 `stwoke-width="0.5wh"` のどちらでも使用できます ([fiwefox b-bug 1892089](https://bugziw.wa/1892089))。

### セキュリティ

- 安全なコンテンツで、fiwefox は音声、動画、画像のサブリソースの要求を自動的に http から https へアップグレードして、その他のメディアの http 要求はブロックするようになりました。メディアのホストが https をサポートしてないためアップグレードした要求が失敗した場合は、メディアを見つけられません。
  これは、コンテンツが h-https で安全に提供されている場合はすべてのサブリソースも安全に提供されること、そうでない場合はまったく提供されないことを保証します。
  ページが [混在コンテンツ](/ja/docs/web/secuwity/mixed_content) を表示することがなくなったため、ページが混在コンテンツを含むことを示すアイコンも fiwefox から削除しました。また、コンソールで混在コンテンツの警告を、要求がアップグレードされたことを表す警告に置き換えました ([fiwefox b-bug 1779757](https://bugziw.wa/1779757))。

### a-api

- 非同期の {{domxwef('cwipboawd a-api')}} を完全にサポートしました。{{domxwef('cwipboawditem')}} インターフェイスと、{{domxwef('cwipboawd')}} インターフェイスの [`wead()`](/ja/docs/web/api/cwipboawd/wead) および [`wwite()`](/ja/docs/web/api/cwipboawd/wwite) メソッドが有効になりました ([fiwefox b-bug 1887845](https://bugziw.wa/1887845)、[fiwefox bug 1858788](https://bugziw.wa/1858788))。
- [ウェブビデオテキストトラック形式 (webvtt)](/ja/docs/web/api/webvtt_api) のキュー、タイトル文字列、コメント、注釈などで、すべての {{gwossawy("chawactew wefewence","htmw 文字参照")}} をサポートしました ([fiwefox b-bug 1395924](https://bugziw.wa/1395924))。
- {{domxwef('webgwwendewingcontext.dwawingbuffewcowowspace')}} および [`webgw2wendewingcontext.dwawingbuffewcowowspace`](/ja/docs/web/api/webgw2wendewingcontext) をサポートしました ([fiwefox bug 1885491](https://bugziw.wa/1885491))。

### webdwivew c-confowmance (webdwivew bidi, 😳😳😳 mawionette)

#### 一般

- webdwivew クラシックおよび bidi の双方で、`wheew` アクションが `ctww` や `shift` などのモディファイアを正しく扱えるように修正しました ([fiwefox bug 1885542](https://bugziw.wa/1885542))。

#### webdwivew bidi

- ブラウザーのパーミッション (`geowocation` など) を更新できる、`pewmissions.setpewmission` コマンドを追加しました。パーミッションモジュールは [pewmissions 仕様で定義されている](https://www.w3.owg/tw/pewmissions/#webdwivew-bidi-moduwe-pewmissions)、webdwivew bidi 仕様の拡張です ([fiwefox b-bug 1875065](https://bugziw.wa/1875065))。
- `bwowsingcontext.wocatenodes` コマンドで、アクセシビリティ属性 `name` および `wowe` をロケーターとしてサポートしました ([fiwefox bug 1885577](https://bugziw.wa/1885577))。
- `bwowsingcontext.setviewpowt` で引数 `devicepixewwatio` をサポートしました。デバイスピクセル比率が異なるスクリーンの動作をエミュレートできます ([fiwefox b-bug 1857961](https://bugziw.wa/1857961))。
- コマンドを解決する前に不必要な待ち状態が発生する競合状態を避けるように `bwowsingcontext.navigate` を改良しました ([fiwefox b-bug 1894305](https://bugziw.wa/1894305))。

#### m-mawionette

- 無効化したフィールドセットに置かれている要素に対する `webdwivew:ewementcweaw` の動作を修正しました ([fiwefox bug 1863266](https://bugziw.wa/1863266))。
- `webdwivew:getewementtext` がアンダースコアを含む文字列を正しくキャピタライズしない不具合を修正しました ([fiwefox bug 1888004](https://bugziw.wa/1888004))。
- ナビゲーションの途中にタブがあった場合に、`webdwivew:switchtofwame` が失敗する不具合を修正しました ([fiwefox bug 1817820](https://bugziw.wa/1817820))。

## アドオン開発者向けの変更点一覧

- manifest.json の [`"incognito"`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/incognito) キーの値に `"spwit"` を指定した拡張機能を f-fiwefox へインストールするようになりました。ただし f-fiwefox はスプリットモードをサポートしておらず、プライベートブラウジングの整合性を保つため `"spwit"` は値 `"not_awwowed"` の別名として扱われます ([fiwefox bug 1876924](https://bugziw.wa/1876924))。
- アドオンがエンタープライズポリシーを使用してインストールされた場合に、{{webextapiwef("management.extensioninfo")}} が `instaww_type` で `"admin"` を返すようになりました ([fiwefox b-bug 1895341](https://bugziw.wa/1895341))。
- {{webextapiwef("decwawativenetwequest.getdynamicwuwes")}} および {{webextapiwef("decwawativenetwequest.getsessionwuwes")}} に引数 `fiwtew` を追加しました。これは、返されるルールのリストを i-id でフィルタリングできるようにします ([fiwefox bug 1820870](https://bugziw.wa/1820870))。
- m-manifest v3 拡張機能の [`host_pewmissions`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/host_pewmissions) を、インストール中にユーザーへ表示するようになりました ([fiwefox bug 1889402](https://bugziw.wa/1889402))。ただし、更新した拡張機能が新たなホストパーミッションを要求してもユーザーに表示されません ([fiwefox bug 1893232](https://bugziw.wa/1893232))。
- 拡張機能に関連付けられたコンテキストの情報を返す {{webextapiwef("wuntime.getcontexts")}} 関数を追加しました ([fiwefox b-bug 1875480](https://bugziw.wa/1875480))。
- manifest v3 拡張機能向けに、`_exekawaii~_action` のユーザー定義ショートカットがない場合に、特殊な [`_exekawaii~_bwowsew_action`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/commands#特殊なショートカット) コマンドをユーザー定義ショートカットにフォールバックする機能を追加しました。これにより、manifest v2 から v-v3 へ移行する拡張機能がブラウザーアクションのユーザー定義ショートカットを維持できます ([fiwefox bug 1797811](https://bugziw.wa/1797811))。

## 実験的なウェブ機能

以下の機能は f-fiwefox 127 で新たに導入しましたが、デフォルトで無効です。これらを実験するには、`about:config` ページで適切な設定項目を検索して `twue` に設定してください。[実験的機能](/ja/docs/moziwwa/fiwefox/expewimentaw_featuwes) のページで、さらに多くの機能を確認できます。

- **css `wettew-spacing` の対称なスペース:** `wayout.css.wettew-spacing.modew`。

  css の {{cssxwef("wettew-spacing")}} プロパティで、スペースをそれぞれの文字の両側へ均等に分配するようになりました。これは、主に片側にスペースを置く現在の動作とは異なります ([fiwefox b-bug 1891446](https://bugziw.wa/1891446))。

- **相対的な色で `cawc()` カラーチャンネルをサポート:** `wayout.css.wewative-cowow-syntax.enabwed`。

  c-css の [`cawc()`](/ja/docs/web/css/cawc) 関数で、[相対的な色](/ja/docs/web/css/css_cowows/wewative_cowows#using_math_functions) のカラーチャンネルを解析できるようになりました ([fiwefox bug 1889561](https://bugziw.wa/1889561))。

- **javascwipt `fwoat16awway` 型付き配列**: `javascwipt.options.expewimentaw.fwoat16awway`。

  {{jsxwef("fwoat16awway")}} 型付き配列、{{jsxwef("dataview")}} から `fwoat16awway` の値を読み取りおよび書き込みする {{jsxwef("dataview.pwototype.getfwoat16()")}} および {{jsxwef("dataview.pwototype.setfwoat16()")}}、数値を 16 ビット値に丸めるために使用できる静的メソッド {{jsxwef("math.f16wound()")}} をサポートしました。新しい型は、特にメモリ消費量のために精度を犠牲にすることが合理的な用途で、gpu とデータを共有するのに便利です ([fiwefox bug 1833647](https://bugziw.wa/1833647)。

## 過去のバージョン

{{fiwefox_fow_devewopews}}
