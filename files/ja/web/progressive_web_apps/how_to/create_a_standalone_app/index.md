---
title: スタンドアロンアプリを作成する
slug: Web/Progressive_web_apps/How_to/Create_a_standalone_app
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{PWASidebar}}

[プログレッシブウェブアプリ](/ja/docs/Web/Progressive_web_apps) (PWA) は、ユーザーの端末にインストールするされ、ユーザーが起動するときの表示方法を定義することができます。ウェブサイトと同じようにウェブブラウザーで表示するか、 OS ネイティブのアプリケーションと同じように専用のウィンドウを表示するかを選択できます。

ユーザーは、インストールされたアプリケーションが端末上でどのように動作するかについて、特定の期待を持っている傾向があります。そのひとつが、アプリケーションに専用のウィンドウが用意されていることです。

[ウェブアプリマニフェスト](/ja/docs/Web/Progressive_web_apps/Manifest)の [`display`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/display) メンバーを使用することで、インストールされた PWA がユーザーの端末で起動されたときに、ブラウザーで表示されるか、独自の専用のウインドウで表示されるかを定義することができます。

## standalone 画面モード

standalone 画面モードを使用して、 PWA を独自の専用のウィンドウを与えるには、 [`display`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/display) メンバーを[ウェブアプリマニフェスト](/ja/docs/Web/Progressive_web_apps/Manifest)に設定し、値を `standalone` に設定します。

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

なお、表示モードは他にも `browser`, `minimal-ui`, `fullscreen` などがあります。選択した表示モードによって、ブラウザーのユーザーインターフェイスがユーザーに表示される範囲が変わります。利用可能なすべての表示モードと、対応していない場合にどのように代替されるかについては、 [`display`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/display) メンバーに関するドキュメントを参照してください。

## ベストプラクティス

### 複数ページナビゲーションの扱い

ナビゲーション可能な複数の HTML ページを使用してアプリケーションを構築する場合は、アプリケーション内のナビゲーションを制御するための UI 要素を含めるようにしてください。

独自のナビゲーション要素を持っていない場合は、 `minimal-ui` 表示モードを使用して、ユーザーがアプリのタイトルバーにあるブラウザーによってレンダリングされた「前へ」と「次へ」のボタンを使ってページ間を移動できるようにしてください。

## 表示モードに応じてアプリをカスタマイズ

ウェブアプリのマニフェストで `browser` 以外の表示モードを定義した場合、それはアプリケーションがインストールされているときにのみ適用されます。他のウェブページと同様に、マニフェストの `display` メンバーは、 PWA がインストールされていないときには何の効果もありません。アプリがインストールされているかどうかを検出するために、実行時に表示モードをチェックすることができます。

CSS の {{cssxref("@media/display-mode", "display-mode")}} メディア機能または JavaScript の {{domxref("Window.matchMedia()")}} 機能を使用すると、表示モードに基づいて選択的に CSS スタイルを適用したり、アプリで JavaScript コードを実行したりできます。

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

この例では、`.app-button` 要素は、表示モードが `standalone` に設定されない限り、既定で非表示になります。これは、 `display` マニフェストメンバーが `standalone` に設定され、アプリがユーザーの端末にインストールされている場合に発生します。

次の例は、 {{domxref("window.matchMedia()")}} メソッドを使って、 `standalone` 表示モードが有効かどうかを検出する方法を示す別の例です。

```js
function isStandaloneApp() {
  return window.matchMedia("(display-mode: standalone)").matches;
}
```

## 関連情報

- [ウェブアプリマニフェスト](/ja/docs/Web/Progressive_web_apps/Manifest).
- [Display modes](https://web.dev/learn/pwa/app-design/#display_modes).
- [ウィンドウコントロールオーバーレイ API](/ja/docs/Web/API/Window_Controls_Overlay_API) を使用して、デスクトップ OS 上のアプリのタイトルバーをカスタマイズできます。
