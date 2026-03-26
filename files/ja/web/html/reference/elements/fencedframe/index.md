---
title: "<fencedframe>: フェンスドフレーム要素"
slug: Web/HTML/Reference/Elements/fencedframe
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

{{SeeCompatTable}}

**`<fencedframe>`** は [HTML](/ja/docs/Web/HTML) の要素で、現在の HTML ページに別のページを埋め込む、ネストされた{{Glossary("browsing context", "閲覧コンテキスト")}}を表します。`<fencedframe>` は、見た目や機能の点では {{htmlelement("iframe")}} 要素と非常によく似ていますが、次の点が異なります。

- `<fencedframe>` の内容と埋め込み元サイトの間の通信は制限されます。
- `<fencedframe>` はクロスサイトのデータにアクセスできますが、ユーザーのプライバシーを保護するために厳密に制御された特定の条件下に限られます。
- `<fencedframe>` は通常のスクリプト（例えば、ソース URL の取得や設定）によって操作したり、データにアクセスしたりできません。`<fencedframe>` の内容は、[特定の API](/ja/docs/Web/API/Fenced_frame_API#用途) を通じてのみ埋め込めます。
- `<fencedframe>` は埋め込み元コンテキストの DOM にアクセスできず、逆に埋め込み元コンテキストも `<fencedframe>` の DOM にアクセスできません。

`<fencedframe>` 要素は、より高度なプライバシー保護機能を組み込んだ {{htmlelement("iframe")}} の一種です。サードパーティ Cookie への依存やその他のプライバシー上のリスクといった、`<iframe>` の問題点に対処することを目的としています。詳しくは [Fenced frame API](/ja/docs/Web/API/Fenced_frame_API) を参照してください。

## 属性

この要素には、[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)に加えて、次の属性があります。

- `allow` {{experimental_inline}}
  - : `<fencedframe>` に対する [権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy) を指定します。これにより、リクエスト元のオリジンに基づいて `<fencedframe>` で利用可能な機能が定義されます。どの機能を制御できるかについては、後述の[フェンスドフレームで利用可能な権限ポリシー](#permissions_policies_available_to_fenced_frames)を参照してください。

- `height` {{experimental_inline}}
  - : フェンスドフレームの高さを CSS ピクセル単位で表す整数値です。既定値は `150` です。
- `width` {{experimental_inline}}
  - : フェンスドフレームの幅を CSS ピクセル単位で表す整数値です。既定値は `300` です。

## フェンスドフレームで利用可能な権限ポリシー

トップレベルコンテキストからフェンスドフレームへ機能の許可・拒否を委譲すると、それ自体が通信チャネルとなり得るため、プライバシー上のリスクになります。そのため、[Permissions Policy](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy) (例: [`camera`](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy/camera)、[`geolocation`](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy/geolocation)) は、フェンスドフレーム内では**利用できません**。

フェンスドフレーム内でポリシーにより有効化できるのは、フェンスドフレーム専用に設計された次の機能のみです。

- [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience)
  - `attribution-reporting`
  - `private-aggregation`
  - `shared-storage`
  - `shared-storage-select-url`
- [Shared Storage API](/ja/docs/Web/API/Shared_Storage_API)
  - `attribution-reporting`
  - `private-aggregation`
  - `shared-storage`
  - `shared-storage-select-url`

現時点では、これらの機能は常に有効です。将来的には `<fencedframe>` の `allow` 属性を使って制御できるようになる予定です。なお、この方法で Privacy Sandbox の機能をブロックすると、フェンスドフレーム自体も読み込まれなくなり、通信チャネルは完全に遮断されます。

## フェンスドフレーム境界をまたぐフォーカス

ドキュメントのフォーカスをフェンスドフレームの境界をまたいで移動すること（外部から内部、またはその逆）は制限されています。クリックや Tab キーなどのユーザー操作による移動は許可されます（フィンガープリントのリスクがないため）。

一方で、{{domxref("HTMLElement.focus()")}} のような API 呼び出しによる移動は禁止されています。これは、悪意のあるスクリプトが連続した呼び出しを使って情報を推測・漏洩する可能性があるためです。

## 配置とスケーリング

`<fencedframe>` は {{glossary("replaced elements", "置換要素")}} であるため、{{cssxref("object-position")}} プロパティを使って埋め込みコンテンツの位置を調整できます。

> [!NOTE]
> {{cssxref("object-fit")}} プロパティは `<fencedframe>` 要素には影響しません。

埋め込みコンテンツのサイズは、`<fencedframe>` の {{domxref("HTMLFencedFrameElement.config", "config")}} オブジェクトの `contentWidth` および `contentHeight` プロパティによって設定される場合があります。この場合、`width` や `height` を変更するとページ上のコンテナーサイズは変わりますが、内部の文書はそれに合わせて拡大・縮小表示されます。埋め込み文書の {{domxref("Window.innerWidth")}} および {{domxref("Window.innerHeight")}} の値は変わりません。

## アクセシビリティ

スクリーンリーダーなどの支援技術を利用するユーザーは、`<fencedframe>` の [`title` グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes/title) を使って内容を識別できます。`title` には、埋め込みコンテンツを簡潔に説明する値を指定してください。

```html
<fencedframe
  title="新しい Log の広告（Blammo 提供）"
  width="640"
  height="320"></fencedframe>
```

`title` がない場合、ユーザーは内容を把握するために `<fencedframe>` 内へ移動する必要があります。これは文脈の切り替えを伴うため、特に複数の `<fencedframe>` や動画・音声などのインタラクティブなコンテンツが含まれる場合、混乱や負担の原因となります。

## 例

`<fencedframe>` に表示されるコンテンツを設定するには、[Protected Audience](https://privacysandbox.google.com/private-advertising/protected-audience) や [Shared Storage](https://privacysandbox.google.com/private-advertising/shared-storage) などの API によって生成される {{domxref("FencedFrameConfig")}} オブジェクトを、`<fencedframe>` の `config` プロパティに設定することで指定します。

以下の例では、Protected Audience API の広告オークションの結果として得られた `FencedFrameConfig` を使って、当選した広告を `<fencedframe>` に表示します。

```html
<fencedframe width="640" height="320"></fencedframe>
```

```js
const frameConfig = await navigator.runAdAuction({
  // … オークションの設定
  resolveToConfig: true,
});

const frame = document.querySelector("fencedframe");
frame.config = frameConfig;
```

> [!NOTE]
> `runAdAuction()` 呼び出しで `resolveToConfig: true` を指定しない場合、返される {{jsxref("Promise")}} は `FencedFrameConfig` ではなく URN を返し、{{htmlelement("iframe")}} でのみ使用可能です。

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Guides/Content_categories"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >,
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >、埋め込みコンテンツ、対話型コンテンツ、知覚可能コンテンツ
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>埋め込みコンテンツを受け入れるすべての要素。</td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >対応するロールなし</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>
        <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/application_role"><code>application</code></a>, <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/document_role"><code>document</code></a>,
        <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/img_role"><code>img</code></a>, <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>,
        <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLFencedFrameElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [フェンスドフレーム API](/ja/docs/Web/API/Fenced_frame_API)
- [Fenced frames](https://privacysandbox.google.com/private-advertising/fenced-frame) on privacysandbox.google.com
- [The Privacy Sandbox](https://privacysandbox.google.com/) on privacysandbox.google.com
