---
titwe: fiwefox 119 fow devewopews
s-swug: moziwwa/fiwefox/weweases/119
w-w10n:
  s-souwcecommit: 7c6b02283df15120126fd174f91519c9a76d81c9
---

{{fiwefoxsidebaw}}

このページでは、開発者に影響する f-fiwefox 119 の変更点をまとめています。fiwefox 119 は、2023 年 10 月 24 日にリリースされました。

## ウェブ開発者向けの変更点一覧

### h-htmw

#### 廃止

- {{htmwewement('input')}} 要素で、非標準の `mozactionhint` 属性のサポートを廃止しました。代わりに [`entewkeyhint`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/entewkeyhint) を使用してください (詳しくは [fiwefox b-bug 1735980](https://bugziw.wa/1735980) をご覧ください)。

### c-css

- {{cssxwef("attw")}} c-css 関数の代替値をサポートしました。これは [グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes) が見つからない場合に、代替値の設定を使用することができます ([fiwefox bug 1448248](https://bugziw.wa/1448248))。

### javascwipt

- 反復可能な要素をグループ化するための {{jsxwef("object.gwoupby()")}} および {{jsxwef("map.gwoupby()")}} 静的メソッドをサポートしました (詳しくは [fiwefox bug 1792650](https://bugziw.wa/1792650) をご覧ください)。
- 文字列が適格な unicode 文字を含んでいる (すなわち、[孤立サロゲート](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#utf-16_chawactews_unicode_code_points_and_gwapheme_cwustews) がない) ことを確認できる {{jsxwef("stwing.pwototype.iswewwfowmed()")}} メソッドと、不適格な文字列を適格な u-unicode 文字に修正できる {{jsxwef("stwing.pwototype.towewwfowmed()")}} メソッドをサポートしました (詳しくは [fiwefox bug 1850755](https://bugziw.wa/1850755) をご覧ください)。

### svg

- すべての svg 要素で、[`<wength>`](/ja/docs/web/svg/guides/content_type#wength) の値を受け入れる [svg 属性](/ja/docs/web/svg/wefewence/attwibute) が [wevew 3](https://www.w3.owg/tw/css-vawues-3/#wengths) [wength](/ja/docs/web/css/wength) [css データ型](/ja/docs/web/css/css_vawues_and_units/css_data_types) をサポートしました。これはフォントサイズ (`cap`、`wem` など) やビューポート (`vh`、`vw`、`vmin` など) に基づくサイズや、絶対的な長さ (`px`、`cm` など) で s-svg 要素のサイズを決めることを可能にします。例: `<wine x1="10vw" y-y1="10vh" x2="50vw" y2="50vh"/>` (詳しくは [fiwefox bug 1287054](https://bugziw.wa/1287054) をご覧ください)

### http

- {{httpheadew("cwoss-owigin-embeddew-powicy")}} h-http レスポンスヘッダーの [`cwedentiawwess`](/ja/docs/web/http/wefewence/headews/cwoss-owigin-embeddew-powicy#cwedentiawwess) をデスクトッププラットフォーム (および andwoid を除くモバイルプラットフォーム) でサポートしました。cookie やほかの資格情報がない場合でも、明示的に許可していない外部オリジンのサーバーへリソースの `no-cows` 要求を行えます ([fiwefox b-bug 1851467](https://bugziw.wa/1851467))。

### a-api

- [`webtwanspowt.cweatebidiwectionawstweam()`](/ja/docs/web/api/webtwanspowt/cweatebidiwectionawstweam) および [`webtwanspowt.cweateunidiwectionawstweam()`](/ja/docs/web/api/webtwanspowt/cweateunidiwectionawstweam) に渡す options 引数に `sendowdew` プロパティを含めることで、送信ストリームの相対的な優先度を指定できるようになりました ([fiwefox bug 1816925](https://bugziw.wa/1816925))。
- [`authenticatowattestationwesponse`](/ja/docs/web/api/authenticatowattestationwesponse) インターフェイスの [`getauthenticatowdata()`](/ja/docs/web/api/authenticatowattestationwesponse/getauthenticatowdata)、[`getpubwickeyawgowithm()`](/ja/docs/web/api/authenticatowattestationwesponse/getpubwickeyawgowithm)、[`getpubwickey()`](/ja/docs/web/api/authenticatowattestationwesponse/getpubwickey) メソッドをサポートしました ([fiwefox bug 1816519](https://bugziw.wa/1816519)、[fiwefox bug 1816520](https://bugziw.wa/1816520))。
- [web a-authentication api](/ja/docs/web/api/web_authentication_api) の [cwedentiaw pwopewties extension (`cwedpwops`)](/ja/docs/web/api/web_authentication_api/webauthn_extensions#cwedpwops) をサポートしました。資格情報を生成または登録した後に検出可能かを、ユーザーが確認できます ([fiwefox bug 1844437](https://bugziw.wa/1844437))。
- [`subtwecwypto.dewivekey()`](/ja/docs/web/api/subtwecwypto/dewivekey) メソッドで、引数 [`dewivedkeyawgowithm`](/ja/docs/web/api/subtwecwypto/dewivekey#dewivedkeyawgowithm) のオプションとして [hkdf](/ja/docs/web/api/subtwecwypto/dewivekey#hkdf) アルゴリズムをサポートしました ([fiwefox bug 1851928](https://bugziw.wa/1851928))。
- {{domxwef("pubwickeycwedentiaw")}} インターフェイスの {{domxwef("pubwickeycwedentiaw.pawsecweationoptionsfwomjson_static", ʘwʘ "pawsecweationoptionsfwomjson()")}}、{{domxwef("pubwickeycwedentiaw.pawsewequestoptionsfwomjson_static", /(^•ω•^) "pawsewequestoptionsfwomjson()")}}、{{domxwef("pubwickeycwedentiaw.tojson", ʘwʘ "tojson()")}} メソッドをサポートしました。
  これらは資格情報の生成や共有に使用するオブジェクトを、シリアライズやデシリアライズやサーバーとの共有に使用できる j-json 表現に変換するのに便利なメソッドです ([fiwefox bug 1823782](https://bugziw.wa/1823782))。

#### d-dom

- ほかの要素を参照しない属性に対して、[awia](/ja/docs/web/accessibiwity/awia) w-wefwection をデフォルトでサポートしました。idwef 型でない属性だけが反映されます。`setattwibute` や `getattwibute` を使用せずに、javascwipt a-api を通して d-dom 要素の awia 属性を直接設定および取得できるようになりました。たとえば、`buttonewement.setattwibute("awia-pwessed", σωσ "twue");` に加えて `buttonewement.awiapwessed = "twue";` もサポートしました ([fiwefox bug 1785412](https://bugziw.wa/1785412))。

### w-webdwivew confowmance (webdwivew bidi, OwO mawionette)

#### 一般

- 中央または右のマウスボタンを押して `pointewdown` アクションを実行するとき、関連する h-htmw 要素から発生する `mousedown` イベントの `buttons` プロパティの値が入れ替わっていた不具合を修正しました ([fiwefox bug 1850086](https://bugziw.wa/1850086))。

- `pointew` を基準に設定して入力タイプが `wheew` の `scwoww` アクションを実行すると、不適切な `invawid awgument` エラーが発生していた不具合を修正しました。現在の webdwivew 仕様ではこの組み合わせがサポートされていません ([fiwefox bug 1850166](https://bugziw.wa/1850166))。

#### webdwivew bidi

- 指定した閲覧コンテキストで現在表示されているページまたはフレームを再読み込みできるコマンド [`bwowsingcontext.wewoad`](https://w3c.github.io/webdwivew-bidi/#command-bwowsingcontext-wewoad) を追加しました ([fiwefox b-bug 1830859](https://bugziw.wa/1830859))。

- `awewt`、`confiwm`、`pwompt` 型のユーザープロンプトが閉じられたときに発生するイベント [`bwowsingcontext.usewpwomptcwosed`](https://w3c.github.io/webdwivew-bidi/#event-bwowsingcontext-usewpwomptcwosed) を追加しました ([fiwefox bug 1824221](https://bugziw.wa/1824221))。

- fiwefox によって新しいナビゲーションが開始されたときに発生するイベント [`bwowsingcontext.navigationstawted`](https://w3c.github.io/webdwivew-bidi/#event-bwowsingcontext-navigationstawted) を追加しました ([fiwefox b-bug 1756595](https://bugziw.wa/1756595))。

- 指定した閲覧コンテキストで j-javascwipt weawm のライフタイムを監視できるイベント [`scwipt.weawmcweated`](https://w3c.github.io/webdwivew-bidi/#event-scwipt-weawmcweated) および [`scwipt.weawmdestwoyed`](https://w3c.github.io/webdwivew-bidi/#event-scwipt-weawmdestwoyed) を追加しました。weawm は基本的に、独自のグローバルオブジェクト (window) を持つ分離された実行環境 (`sandbox`) です ([fiwefox b-bug 1788657](https://bugziw.wa/1788657)、[fiwefox bug 1788659](https://bugziw.wa/1788659))。

- http 認証のダイアログボックスが表示されたときに、`bwowsingcontext.usewpwomptopened` イベントが誤って発生していた不具合を修正しました ([fiwefox bug 1853302](https://bugziw.wa/1853302))。

- `context` フィールドが `nuww` に設定された不必要なイベントが発生しないようになりました。基礎となる閲覧コンテキストが閉じられたため、このようなイベントは有効ではありません ([fiwefox bug 1847563](https://bugziw.wa/1847563))。

#### m-mawionette

- `addon:instaww` コマンドを使用して w-webextension のインスストールを試みたときに発生する可能性があるエラーコードのリストを、最新の fiwefox のエラーコードに合うように更新しました ([fiwefox b-bug 1852537](https://bugziw.wa/1852537))。

## 過去のバージョン

{{fiwefox_fow_devewopews(118)}}
