---
title: スタンドアロンアプリを作成する
slug: Web/Progressive_web_apps/How_to/Create_a_standalone_app
l10n:
  sourceCommit: 1b6ddc3ab1356aabfe2cd5a19875cdaf35220590
---

[プログレッシブウェブアプリ](/ja/docs/Web/Progressive_web_apps) (PWA) は、ユーザーの端末にインストールされ、ユーザーが起動したときの表示方法を定義できます。ウェブサイトと同じようにウェブブラウザーで表示するか、 OS ネイティブのアプリケーションと同じように専用のウィンドウを表示するかを選択できます。

ユーザーは、インストールされたアプリケーションが端末上でどのように動作するかについて、一定の期待を持っています。そのひとつが、アプリケーションに専用のウィンドウが用意されていることです。

[ウェブアプリマニフェスト](/ja/docs/Web/Progressive_web_apps/Manifest)の [`display`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/display) メンバーを使用すると、インストールされた PWA をユーザーの端末で起動したときに、ブラウザー内に表示するか、専用のウィンドウに表示するかを定義できます。

## standalone 表示モード

standalone 表示モードを使用して PWA を専用のウィンドウに表示するには、[ウェブアプリマニフェスト](/ja/docs/Web/Progressive_web_apps/Manifest)の [`display`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/display) メンバーを `standalone` に設定します。

```json
{
  "name": "My app",
  "start_url": "/",
  "icons": [
    {
      "src": "icon.webp",
      "sizes": "48x48",
      "type": "image/webp"
    }
  ],
  "display": "standalone"
}
```

なお、表示モードには `browser`、`minimal-ui`、`fullscreen` などもあります。選択した表示モードによって、ユーザーに表示されるブラウザー UI の範囲が変わります。利用可能なすべての表示モードと、対応していない場合にどのように代替されるかについては、[`display`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/display) メンバーのドキュメントを参照してください。

## ベストプラクティス

### 複数ページナビゲーションの扱い

ナビゲーション可能な複数の HTML ページを使用してアプリケーションを構築する場合は、アプリケーション内のナビゲーションを制御するための UI 要素を含めるようにしてください。

独自のナビゲーション要素を持っていない場合は、 `minimal-ui` 表示モードを使用して、ユーザーがアプリのタイトルバーにあるブラウザーによってレンダリングされた「前へ」と「次へ」のボタンを使ってページ間を移動できるようにしてください。

## 表示モードに応じてアプリをカスタマイズ

ウェブアプリのマニフェストで `browser` 以外の表示モードを定義した場合、それはアプリケーションがインストールされているときにのみ適用されます。他のウェブページと同様に、マニフェストの `display` メンバーは、 PWA がインストールされていないときには何の効果もありません。

CSS の {{cssxref("@media/display-mode", "display-mode")}} メディア特性または JavaScript の {{domxref("Window.matchMedia()")}} メソッドを使用すると、表示モードに基づいて CSS スタイルを選択的に適用したり、アプリで JavaScript コードを実行したりできます。

以下は、 CSS の {{cssxref("@media")}} アットルールを使用して、 `standalone` 表示モードが有効な場合にのみウェブページ上の要素を表示する方法を示す例です。

```css
.app-button {
  display: none;
}

@media (display-mode: standalone) {
  .app-button {
    display: block;
  }
}
```

この例では、`.app-button` 要素は、アプリが現在 `standalone` モードで表示されていない限り、デフォルトで非表示になります。

次の例は、 {{domxref("window.matchMedia()")}} メソッドを使って、 `standalone` 表示モードが有効かどうかを検出する方法を示す別の例です。

```js
function isStandaloneApp() {
  return window.matchMedia("(display-mode: standalone)").matches;
}
```

> [!NOTE]
> PWA がインストール済みかどうかを確実に判断する、ブラウザー間で共通の方法はありません。また、表示モードとインストール状態は単純には対応しません。
>
> - インストール済みの PWA でもブラウザーのタブで開けるため、`standalone` にはならないことがあります。
> - PWA が代わりに `fullscreen` で表示されることもあります（ステータスバーが隠れ、バッテリー残量やネットワーク接続などが表示されません）。
> - 通常のウェブページも `fullscreen` で表示できます。

## 関連情報

- [ウェブアプリマニフェスト](/ja/docs/Web/Progressive_web_apps/Manifest).
- [Display modes](https://web.dev/learn/pwa/app-design/#display_modes).
- [ウィンドウコントロールオーバーレイ API](/ja/docs/Web/API/Window_Controls_Overlay_API) を使用して、デスクトップ OS 上のアプリのタイトルバーをカスタマイズできます。
