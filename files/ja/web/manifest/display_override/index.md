---
title: display_override
slug: Web/Manifest/display_override
---

{{QuickLinksWithSubpages("/ja/docs/Web/Manifest")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">型</th>
      <td><code>Array</code></td>
    </tr>
    <tr>
      <th scope="row">必須</th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

[`display`](/ja/docs/Web/Manifest/display) メンバーは、開発者が推奨するウェブサイトの表示モードを決定するために使用されます。これは、要求された表示モードに対応していない場合に、ブラウザーが事次善の表示モードに代替するプロセスに従います。高度な用途では、この代替プロセスでは十分でない場合があります。

`display_override` メンバーは、 `display` メンバーを使用する前にブラウザーが考慮する一連の表示モードを開発者に提供することで、これを解決しています。この値は表示モードの配列であり、順番に考慮され、最初にサポートされた表示モードが適用されます。

## 値

表示上書きオブジェクトは表示モード文字列の集合で、利用可能な値は以下の通りです。

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">表示モード</th>
      <th scope="col">説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>fullscreen</code></td>
      <td>
        利用可能な画面の領域をすべて使用し、ユーザーエージェントの{{Glossary("chrome", "クローム")}}は表示されなくなります。
      </td>
    </tr>
    <tr>
      <td><code>standalone</code></td>
      <td>
        アプリケーションの外見は、単独のアプリケーションのようになります。これは、アプリケーションに別のウィンドウを持たせたり、アプリケーションランチャーに独自のアイコンを追加したりすることができるようになります。このモードでは、ユーザーエージェントはナビゲーションを制御するための UI 要素を除外しますが、ステータスバーなどの他の UI 要素を含めることはできます。
      </td>
    </tr>
    <tr>
      <td><code>minimal-ui</code></td>
      <td>
        アプリケーションの外見は、単独のアプリケーションのようになりますが、ナビゲーションを制御するために最小限の UI 要素が表示されます。要素はブラウザーによって異なります。
      </td>
    </tr>
    <tr>
      <td><code>browser</code></td>
      <td>
        アプリケーションはブラウザーやプラットフォームに応じた一般的なブラウザータブや新しいウインドウで表示されます。これが既定値です。
      </td>
    </tr>
    <tr>
      <td><code>window-controls-overlay</code></td>
      <td>
        この表示モードは、アプリケーションが別の PWA ウィンドウにあり、デスクトップ OS 上にある場合にのみ適用されます。この場合、ウィンドウ制御のオーバーレイ機能が利用できるようにします。これは、ウィンドウの全領域がアプリのウェブコンテンツに使用され、ウィンドウの制御ボタン（最大化、最小化、閉じる、およびその他の PWA 固有のボタン）がウェブコンテンツの上にオーバーレイとして表示されるものです。
      </td>
    </tr>
  </tbody>
</table>

## 例

以下の例では、ブラウザーは以下の表示モード代替チェーンを `fullscreen` → `minimal-ui` → `standalone` の順番で考慮します。

```json
{
  "display_override": ["fullscreen", "minimal-ui"],
  "display": "standalone"
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Preparing for the display modes of tomorrow](https://web.dev/display-override/)
- [Customize the window controls overlay of your PWA's title bar](https://web.dev/window-controls-overlay/)
