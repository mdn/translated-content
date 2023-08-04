---
title: 標準メタデータ名
slug: Web/HTML/Element/meta/name
---

{{HTMLSidebar}}

{{htmlelement("meta")}} 要素を使用すると、文書のメタデータを名前と値の組み合わせで提供することができます。 [`name`](/ja/docs/Web/HTML/Element/meta#name) 属性でメタデータ名を指定し、 [`content`](/ja/docs/Web/HTML/Element/meta#content) 属性で値を指定します。

### HTML 仕様書で定義されている標準メタデータ名

HTML 仕様書は、以下の一連の標準メタデータ名を定義しています。

- `application-name`: ウェブページで動作しているアプリケーションの名前です。

  > **メモ:** ブラウザーはアプリケーションを識別するためにこれを使用することがあります。これはふつうアプリケーション名が含まれるものの、文書名や状態などの情報も含まれる {{HTMLElement("title")}} 要素とは異なります。
  >
  > - 単なるウェブサイトにはアプリケーション名を定義するべきではありません。

- `author`: この文書の著者です。
- `description`: ページの内容を短く正確に要約したものです。 Firefox や Opera など一部のブラウザーは、これをブックマークされたページの既定の説明として使用します。
- `generator`: このページを生成したソフトウェアの識別子です。
- `keywords`: ページのコンテンツに関連する語句で、カンマ区切りです。
- `referrer`: この文書からリクエストを送信するための HTTP の {{httpheader("Referer")}} ヘッダーの内容です。

  | `no-referrer`                     | HTTP の {{httpheader("Referer")}} ヘッダーを送信しません。                                                                                                                                    |
  | --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `origin`                          | 文書の{{glossary("origin", "オリジン")}}を送信します。                                                                                                                             |
  | `no-referrer-when-downgrade`      | 現在のページと同等の安全性の URL (HTTP(S)→HTTPS) にはリファラーとして URL 全体を送信しますが、安全性が低い URL (HTTPS→HTTP) には送信しません。これは既定の動作です。                                 |
  | `origin-when-cross-origin`        | 同一オリジンへのリクエストでは URL 全体 (引数を除く) を送信しますが、他の場合はオリジンのみ送信します。                                                                                              |
  | `same-origin`                     | 同一オリジンにはリファラーを送信しますが、オリジン間リクエストにはリファラーを含めません。                                                                                                           |
  | `strict-origin`                   | 安全性が同等とみられる宛先 (HTTP(S)→HTTPS) に対しては、リファラーとして文書のオリジンのみを送信しますが、安全性が劣る宛先 (HTTPS→HTTP) には送信しません。                                            |
  | `strict-origin-when-cross-origin` | 同一オリジンへのリクエストでは、 URL 全体 (引数を除く) を送信します。現在のページと安全性が同等であると見られる宛先 (HTTP(S)→HTTPS) にはオリジンを送信します。それ以外は、リファラーを送信しません。 |
  | `unsafe-URL`                      | 同一オリジンまたはオリジン間リクエストで、 URL 全体 (引数を除く) を送信します。                                                                                                                      |

  > **メモ:** `<meta name="referrer">` を ({{domxref("Document.write", "document.write()")}} または {{domxref("Node.appendChild", "appendChild()")}} で) 動的に挿入すると、リファラーの動作が予測不能になります。
  >
  > - 相反する複数のポリシーが定義されている場合は、 `no-referrer` ポリシーが適用されます。

- [`theme-color`](/ja/docs/Web/HTML/Element/meta/name/theme-color): ユーザーエージェントがページの表示や周辺のユーザーインターフェースをカスタマイズするために使用すべき推奨色を示します。 `content` 属性には、有効な CSS の {{cssxref("&lt;color&gt;")}} が含まれます。
- `color-scheme`: 文書と互換性のある 1 つ以上の複数のカラースキームを指定します。

  ブラウザーは、この情報をユーザーのブラウザーや端末の設定と合わせて使用し、背景や前景、フォームコントロールやスクロールバーなど、あらゆるものに使用する色を決定します。 `<meta name="color-scheme">` の主な用途は、ライトモードとダークモードの互換性と優先順位を示すことです。

  `color-scheme` の [`content`](/ja/docs/Web/HTML/Element/meta#content)nt/meta#content) プロパティは次のうちの一つになります。

  - `normal`
    - : この文書は配色を意識していないので、既定のカラーパレットを使って描画する必要があります。
  - \[`light` | `dark`]+
    - : この文書で対応している 1 つ以上の配色。同じ配色を 2 回以上指定しても、 1 回だけ指定した場合と同じ効果が得られる。複数の配色を指定すると、この文書では最初の配色が優先されるが、ユーザーが好む場合は 2 番目に指定された配色でもよいことを示す。
  - `only light`
    - : この文書がライトモード*のみ*に対応していることを示します。背景色が明るく、前景色が暗い色です。仕様書によれば、 `only dark` は有効ではありません。ダークモードに対応していない文書を強制的にダークモードで描画すると、コンテンツが読めなくなる可能性があるからです。主要なブラウザーは、特に設定されていなければ既定でライトモードになります。

  例えば、この文書はダークモードを推奨するが、ライトモードでも機能的にはレンダリングできることを示すためには、次のようにします。

  ```html
  <meta name="color-scheme" content="dark light">
  ```

  これは、CSS の {{cssxref("color-scheme")}} プロパティで個々の要素が好みの配色と受け入れられる配色を指定できるのと同じように、文書レベルで機能します。スタイルは、 {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} という CSS メディア機能を使って、現在の配色に合わせることができます。

### 他の仕様書で定義されている標準メタデータ

CSS Device Adaptation 仕様書は、以下のメタデータ名を定義しています。

- `viewport`: この{{glossary("viewport", "ビューポート")}}の初期の寸法の大きさについてのヒントを指定します。モバイル端末でのみ使用されます。

  | 値              | 使用可能なサブ値                              | 解説                                                                                                                                                                                                                                                                                                                                                                                                                                            |
  | --------------- | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `width`         | 正の整数値、または `device-width` のテキスト  | ウェブサイトを表示させるビューポートのピクセル単位の幅を定義します。                                                                                                                                                                                                                                                                                                                                                                            |
  | `height`        | 正の整数値、または `device-height` のテキスト | ビューポートの高さを定義します。どのブラウザーでも使用されていません。                                                                                                                                                                                                                                                                                                                                                                          |
  | `initial-scale` | `0.0` と `10.0` の間の正の実数                | 端末の幅 (縦長画面で `device-width`、横長画面で `device-height`) とビューポートの寸法の比率を定義します。                                                                                                                                                                                                                                                                                                                                       |
  | `maximum-scale` | `0.0` と `10.0` の間の正の実数                | 拡大縮小インする最大値を定義します。 `minimum-scale` 以上でなければ、動作は未定義です。ブラウザーの設定でこの規則を無視することができ、iOS 10 以降では既定で無視されます。                                                                                                                                                                                                                                                                      |
  | `minimum-scale` | `0.0` と `10.0` の間の正の実数                | 拡大縮小レベルの最小値を定義します。 `maximum-scale` 以下でなければ、動作は未定義です。ブラウザーの設定でこの規則を無視することができ、iOS 10 以降では既定で無視されます。                                                                                                                                                                                                                                                                      |
  | `user-scalable` | `yes` または `no`                             | `no` に設定された場合は、ユーザーがウェブページを拡大縮小することができなくなります。既定値は `yes` です。ブラウザーの設定でこの規則を無視することができ、iOS 10 以降では既定で無視されます。                                                                                                                                                                                                                                                   |
  | `viewport-fit`  | `auto`, `contain`, `cover`                    | `auto` の値は、初期レイアウトのビューポートに影響を与えず、ウェブページ全体が表示されます。`contain` の値は、ディスプレイに内接する最大の長方形に合わせてビューポートが拡大されることを意味します。`cover` の値は、ビューポートが端末のディスプレイいっぱいになるように縮小されることを意味します。重要なコンテンツがディスプレイの外に出てしまわないように、 [safe-area-inset-\*](/ja/docs/Web/CSS/env) 変数を使用することを強くお勧めします。 |

  > **メモ:** この宣言は標準化されていませんが、事実上の優位性から、ほとんどのモバイルブラウザーで尊重されています。
  >
  > - 既定値は、端末やブラウザーによって異なる場合があります。
  > - Firefox for Mobile でのこの宣言については、[こちらの記事](/ja/docs/Mobile/Viewport_meta_tag)を参照してください。

##### ビューポートの拡大縮小についてのアクセシビリティの考慮

`user-scalable` を `no` に設定して拡大縮小機能を無効にすると、弱視の人がページの内容を読んだり理解したりすることができなくなります。

- [MDN WCAG を理解する、ガイドライン 1.4 の説明](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

### その他のメタデータ名

[WHATWG Wiki の MetaExtensions のページ](https://wiki.whatwg.org/wiki/MetaExtensions)には、まだ正式に受け入れられていない標準外のメタデータの名前が多数掲載されています。しかし、ここに掲載されている名前の中には、以下のように、すでに実際によく使われているものもあります。

- `creator`: この文書の作成者の名前で、組織や機関などです。複数ある場合は、複数の {{HTMLElement("meta")}} 要素を使用する必要があります。
- `googlebot`: `robots` と同様ですが、Googlebot (Google のインデックス作成用クローラー) のみが従います。
- `publisher`: この文書の発行者の名前です。
- `robots`: 協力的なクローラー、つまり「ロボット」がページに対して使用すべき動作です。以下の値をカンマで区切ったリストです。

  | 値             | 解説                                                                           | 使用者                                                                                                                                                                                                                                                                                           |
  | -------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
  | `index`        | ロボットがこのページをインデックスすることを許可します (既定値)。              | すべて                                                                                                                                                                                                                                                                                           |
  | `noindex`      | ロボットにこのページをインデックスしないよう要求します。                       | すべて                                                                                                                                                                                                                                                                                           |
  | `follow`       | ロボットがこのページ上のリンクをたどることを許可します (既定値)。              | すべて                                                                                                                                                                                                                                                                                           |
  | `nofollow`     | ロボットにこのページ上のリンクをたどらないよう要求します。                     | すべて                                                                                                                                                                                                                                                                                           |
  | `all`          | `index, follow` と同等です。                                                   | [Google](https://support.google.com/webmasters/answer/79812)                                                                                                                                                                                                                                     |
  | `none`         | `noindex, nofollow` と同等です。                                               | [Google](https://support.google.com/webmasters/answer/79812)                                                                                                                                                                                                                                     |
  | `noarchive`    | 検索エンジンにこのページの内容をキャッシュしないよう要求します。               | [Google](https://developers.google.com/webmasters/control-crawl-index/docs/robots_meta_tag#valid-indexing--serving-directives), [Yahoo](https://help.yahoo.com/kb/search-for-desktop/SLN2213.html), [Bing](https://www.bing.com/webmaster/help/which-robots-metatags-does-bing-support-5198d240) |
  | `nosnippet`    | 検索エンジンの結果でこのページの説明の表示を抑制します。                       | [Google](https://developers.google.com/webmasters/control-crawl-index/docs/robots_meta_tag#valid-indexing--serving-directives), [Bing](https://www.bing.com/webmaster/help/which-robots-metatags-does-bing-support-5198d240)                                                                     |
  | `noimageindex` | このページをインデックスされた画像の参照ページとして表示しないよう要求します。 | [Google](https://developers.google.com/webmasters/control-crawl-index/docs/robots_meta_tag#valid-indexing--serving-directives)                                                                                                                                                                   |
  | `nocache`      | `noarchive` と同等です。                                                       | [Bing](https://www.bing.com/webmaster/help/which-robots-metatags-does-bing-support-5198d240)                                                                                                                                                                                                     |

  > **メモ:** 協力的なロボットだけがこのルールに従っています。メールアドレスの自動収集プログラムを抑制できるとは期待しないでください。
  >
  > - ロボットがこれらのルールを読むためには、ページにアクセスする必要があります。帯域幅の消費を防ぐには、 _{{Glossary("robots.txt")}}_ ファイルを使用してください。
  > - ページを削除したい場合、 `noindex` で行うことができますが、ロボットがそのページに再びアクセスした後のことになります。 `robots.txt` ファイルが再訪問を妨害していないことを確認してください。
  > - 値によっては互いに排他的なものがあります。例えば `index` と `noindex`、 `follow` と `nofollow` などです。このような場合、ロボットの動作は未定義であり、ロボット間で異なる可能性があります。
  > - Google、Yahoo、Bing など一部のクローラーロボットでは、 HTTP ヘッダーの X-Robots-Tag で提供された同じ値に対応しているものがあります。これにより、画像などの HTML 以外の文書でもこれらの規則を使用することができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
