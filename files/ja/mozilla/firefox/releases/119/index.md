---
title: Firefox 119 for developers
slug: Mozilla/Firefox/Releases/119
l10n:
  sourceCommit: 7c6b02283df15120126fd174f91519c9a76d81c9
---

{{FirefoxSidebar}}

このページでは、開発者に影響する Firefox 119 の変更点をまとめています。Firefox 119 は、2023 年 10 月 24 日にリリースされました。

## ウェブ開発者向けの変更点一覧

### HTML

#### 廃止

- {{HTMLElement('input')}} 要素で、非標準の `mozactionhint` 属性のサポートを廃止しました。代わりに [`enterkeyhint`](/ja/docs/Web/HTML/Global_attributes/enterkeyhint) を使用してください (詳しくは [Firefox bug 1735980](https://bugzil.la/1735980) をご覧ください)。

### CSS

- {{cssxref("attr")}} CSS 関数の代替値をサポートしました。これは [グローバル属性](/ja/docs/Web/HTML/Global_attributes) が見つからない場合に、代替値の設定を使用することができます ([Firefox bug 1448248](https://bugzil.la/1448248))。

### JavaScript

- 反復可能な要素をグループ化するための {{jsxref("Object.groupBy()")}} および {{jsxref("Map.groupBy()")}} 静的メソッドをサポートしました (詳しくは [Firefox bug 1792650](https://bugzil.la/1792650) をご覧ください)。
- 文字列が適格な Unicode 文字を含んでいる (すなわち、[孤立サロゲート](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) がない) ことを確認できる {{jsxref("String.prototype.isWellFormed()")}} メソッドと、不適格な文字列を適格な Unicode 文字に修正できる {{jsxref("String.prototype.toWellFormed()")}} メソッドをサポートしました (詳しくは [Firefox bug 1850755](https://bugzil.la/1850755) をご覧ください)。

### SVG

- すべての SVG 要素で、[`<length>`](/ja/docs/Web/SVG/Content_type#length) の値を受け入れる [SVG 属性](/ja/docs/Web/SVG/Attribute) が [level 3](https://www.w3.org/TR/css-values-3/#lengths) [length](/ja/docs/Web/CSS/length) [CSS データ型](/ja/docs/Web/CSS/CSS_Types) をサポートしました。これはフォントサイズ (`cap`、`rem` など) やビューポート (`vh`、`vw`、`vmin` など) に基づくサイズや、絶対的な長さ (`px`、`cm` など) で SVG 要素のサイズを決めることを可能にします。例: `<line x1="10vw" y1="10vh" x2="50vw" y2="50vh"/>` (詳しくは [Firefox bug 1287054](https://bugzil.la/1287054) をご覧ください)

### HTTP

- {{HTTPHeader("Cross-Origin-Embedder-Policy")}} HTTP レスポンスヘッダーの [`credentialless`](/ja/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy#credentialless) をデスクトッププラットフォーム (および Android を除くモバイルプラットフォーム) でサポートしました。Cookie やほかの資格情報がない場合でも、明示的に許可していない外部オリジンのサーバーへリソースの `no-cors` 要求を行えます ([Firefox bug 1851467](https://bugzil.la/1851467))。

### API

- [`WebTransport.createBidirectionalStream()`](/ja/docs/Web/API/WebTransport/createBidirectionalStream) および [`WebTransport.createUnidirectionalStream()`](/ja/docs/Web/API/WebTransport/createUnidirectionalStream) に渡す options 引数に `sendOrder` プロパティを含めることで、送信ストリームの相対的な優先度を指定できるようになりました ([Firefox bug 1816925](https://bugzil.la/1816925))。
- [`AuthenticatorAttestationResponse`](/ja/docs/Web/API/AuthenticatorAttestationResponse) インターフェイスの [`getAuthenticatorData()`](/ja/docs/Web/API/AuthenticatorAttestationResponse/getAuthenticatorData)、[`getPublicKeyAlgorithm()`](/ja/docs/Web/API/AuthenticatorAttestationResponse/getPublicKeyAlgorithm)、[`getPublicKey()`](/ja/docs/Web/API/AuthenticatorAttestationResponse/getPublicKey) メソッドをサポートしました ([Firefox bug 1816519](https://bugzil.la/1816519)、[Firefox bug 1816520](https://bugzil.la/1816520))。
- [Web Authentication API](/ja/docs/Web/API/Web_Authentication_API) の [Credential Properties Extension (`credProps`)](/ja/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#credprops) をサポートしました。資格情報を生成または登録した後に検出可能かを、ユーザーが確認できます ([Firefox bug 1844437](https://bugzil.la/1844437))。
- [`SubtleCrypto.deriveKey()`](/ja/docs/Web/API/SubtleCrypto/deriveKey) メソッドで、引数 [`derivedKeyAlgorithm`](/ja/docs/Web/API/SubtleCrypto/deriveKey#derivedkeyalgorithm) のオプションとして [HKDF](/ja/docs/Web/API/SubtleCrypto/deriveKey#hkdf) アルゴリズムをサポートしました ([Firefox bug 1851928](https://bugzil.la/1851928))。
- {{domxref("PublicKeyCredential")}} インターフェイスの {{domxref("PublicKeyCredential.parseCreationOptionsFromJSON_static", "parseCreationOptionsFromJSON()")}}、{{domxref("PublicKeyCredential.parseRequestOptionsFromJSON_static", "parseRequestOptionsFromJSON()")}}、{{domxref("PublicKeyCredential.toJSON", "toJSON()")}} メソッドをサポートしました。
  これらは資格情報の生成や共有に使用するオブジェクトを、シリアライズやデシリアライズやサーバーとの共有に使用できる JSON 表現に変換するのに便利なメソッドです ([Firefox bug 1823782](https://bugzil.la/1823782))。

#### DOM

- ほかの要素を参照しない属性に対して、[ARIA](/ja/docs/Web/Accessibility/ARIA) reflection をデフォルトでサポートしました。IDREF 型でない属性だけが反映されます。`setAttribute` や `getAttribute` を使用せずに、JavaScript API を通して DOM 要素の ARIA 属性を直接設定および取得できるようになりました。たとえば、`buttonElement.setAttribute("aria-pressed", "true");` に加えて `buttonElement.ariaPressed = "true";` もサポートしました ([Firefox bug 1785412](https://bugzil.la/1785412))。

### WebDriver conformance (WebDriver BiDi, Marionette)

#### 一般

- 中央または右のマウスボタンを押して `pointerDown` アクションを実行するとき、関連する HTML 要素から発生する `mousedown` イベントの `buttons` プロパティの値が入れ替わっていた不具合を修正しました ([Firefox bug 1850086](https://bugzil.la/1850086))。

- `pointer` を基準に設定して入力タイプが `wheel` の `scroll` アクションを実行すると、不適切な `invalid argument` エラーが発生していた不具合を修正しました。現在の WebDriver 仕様ではこの組み合わせがサポートされていません ([Firefox bug 1850166](https://bugzil.la/1850166))。

#### WebDriver BiDi

- 指定した閲覧コンテキストで現在表示されているページまたはフレームを再読み込みできるコマンド [`browsingContext.reload`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-reload) を追加しました ([Firefox bug 1830859](https://bugzil.la/1830859))。

- `alert`、`confirm`、`prompt` 型のユーザープロンプトが閉じられたときに発生するイベント [`browsingContext.userPromptClosed`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-userPromptClosed) を追加しました ([Firefox bug 1824221](https://bugzil.la/1824221))。

- Firefox によって新しいナビゲーションが開始されたときに発生するイベント [`browsingContext.navigationStarted`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-navigationStarted) を追加しました ([Firefox bug 1756595](https://bugzil.la/1756595))。

- 指定した閲覧コンテキストで JavaScript Realm のライフタイムを監視できるイベント [`script.realmCreated`](https://w3c.github.io/webdriver-bidi/#event-script-realmCreated) および [`script.realmDestroyed`](https://w3c.github.io/webdriver-bidi/#event-script-realmDestroyed) を追加しました。Realm は基本的に、独自のグローバルオブジェクト (window) を持つ分離された実行環境 (`sandbox`) です ([Firefox bug 1788657](https://bugzil.la/1788657)、[Firefox bug 1788659](https://bugzil.la/1788659))。

- HTTP 認証のダイアログボックスが表示されたときに、`browsingContext.userPromptOpened` イベントが誤って発生していた不具合を修正しました ([Firefox bug 1853302](https://bugzil.la/1853302))。

- `context` フィールドが `null` に設定された不必要なイベントが発生しないようになりました。基礎となる閲覧コンテキストが閉じられたため、このようなイベントは有効ではありません ([Firefox bug 1847563](https://bugzil.la/1847563))。

#### Marionette

- `Addon:Install` コマンドを使用して WebExtension のインスストールを試みたときに発生する可能性があるエラーコードのリストを、最新の Firefox のエラーコードに合うように更新しました ([Firefox bug 1852537](https://bugzil.la/1852537))。

## 過去のバージョン

{{Firefox_for_developers(118)}}
