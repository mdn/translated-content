---
title: display-mode
slug: Web/CSS/Reference/At-rules/@media/display-mode
original_slug: Web/CSS/@media/display-mode
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

**`display-mode`** は [CSS](/ja/docs/Web/CSS) の[メディア特性](/ja/docs/Web/CSS/Reference/At-rules/@media#メディア特性)で、ウェブアプリが通常のブラウザータブで表示されているか、スタンドアロンアプリや全画面モードなどの別の方法で表示されているかを検査することができます。

例えば、

- [プログレッシブウェブアプリ](/ja/docs/Web/Progressive_web_apps)は、マニフェストで [`display`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/display) メンバーを設定することで、[表示モードを設定することができます](/ja/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app)。この場合、 `display-mode` の値は、設定された値を識別します（ただし、リクエストされたモードにブラウザーが対応していない場合があるため、マニフェストでリクエストされた値と同じではない場合があることに注意してください）。

- どのウェブアプリも、[全画面 API](/ja/docs/Web/API/Fullscreen_API) または[文書ピクチャインピクチャ API](/ja/docs/Web/API/Document_Picture-in-Picture_API) を使用して表示モードを設定することができます。この場合、 `display-mode` の値が設定されたモードを識別します。

`display-mode` の値は、最上位の閲覧コンテキストおよびすべての子閲覧コンテキストに適用されます。

## 構文

`display-mode` 特性は、以下の一覧のうち一つのキーワード値で指定します。

- `browser`
  - : アプリケーションは、ブラウザーとプラットフォームに応じて、従来のブラウザータブまたは新しいウィンドウで開きます。
- `fullscreen`
  - : 利用可能な表示領域がすべて使用され、ユーザーエージェントの{{glossary("chrome", "クローム")}}は表示されません。これは、アプリが[全画面 API](/ja/docs/Web/API/Fullscreen_API) によって、またはウェブアプリマニフェストで `fullscreen` 値を [`display`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/display) メンバーに使用して全画面モードになった場合にのみ CSS を適用するために使用できます。
- `minimal-ui`
  - : アプリケーションはスタンドアロンアプリケーションのような外観や操作感になりますが、ナビゲーション制御のための最小限の UI 要素を持ちます。要素はブラウザーによって異なります。
- `picture-in-picture`
  - : このモードでは、ユーザーは、端末上の他のサイトやアプリケーションを操作しながら、特定のコンテンツの利用を続けることができます。アプリは、浮かんだ状態で常に最前面に表示されます。これは、[文書ピクチャインピクチャ API](/ja/docs/Web/API/Document_Picture-in-Picture_API) によってアプリがピクチャインピクチャモードになった場合にのみ CSS を適用するために使用できます。
- `standalone`
  - : アプリケーションはスタンドアロンアプリケーションのような外観や操作感になります。これは、アプリケーションが個別のウィンドウを持ったり、アプリケーションランチャーに独自のアイコンを持ったりすることを含みます。このモードでは、ユーザーエージェントはナビゲーション制御のための UI 要素を除外しますが、ステータスバーなどその他の UI を含めることができます。
- `window-controls-overlay`
  - : このモードでは、アプリケーションはスタンドアロンのデスクトップアプリケーションのように見え、[ウィンドウコントロールオーバーレイ](/ja/docs/Web/API/Window_Controls_Overlay_API)機能も有効になります。

## 例

### 端末が全画面モード時に使用される CSS

```css
@media all and (display-mode: fullscreen) {
  body {
    margin: 0;
    border: 5px solid black;
  }
}
```

### ピクチャインピクチャコンテンツに明るい色と暗い色の配色を提供

この例では、 `display-mode: picture-in-picture` 値と {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} メディア特性を組み合わせて、ピクチャインピクチャモードでアプリが表示されている場合にのみ、ユーザーの色設定の環境設定に基づいて、明るい色と暗い色の配色を作成しています。

```css
@media (display-mode: picture-in-picture) and (prefers-color-scheme: light) {
  body {
    background: antiquewhite;
  }
}

@media (display-mode: picture-in-picture) and (prefers-color-scheme: dark) {
  body {
    background: #333;
  }

  a {
    color: antiquewhite;
  }
}
```

詳細および完全な例については、「[文書ピクチャインピクチャ API の使用](/ja/docs/Web/API/Document_Picture-in-Picture_API/Using)」をご覧ください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [メディアクエリーの使用](/ja/docs/Web/CSS/Guides/Media_queries/Using)
- [@media](/ja/docs/Web/CSS/Reference/At-rules/@media)
