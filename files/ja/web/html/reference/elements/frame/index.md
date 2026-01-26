---
title: <frame>
slug: Web/HTML/Reference/Elements/frame
original_slug: Web/HTML/Element/frame
l10n:
  sourceCommit: 8536cae9363a37725f9a5dcca4e064addbcc9506
---

{{HTMLSidebar}}{{Deprecated_Header}}

**`<frame>`** は [HTML](/ja/docs/Web/HTML) の要素で、別の HTML 文書を表示できる特定の領域を定義します。 frame 要素は {{HTMLElement("frameset")}} の内部で使用してください。

`<frame>` 要素の使用は、パフォーマンスの問題やスクリーンリーダーを使用するユーザーへのアクセシビリティの欠如といった欠点があるため推奨されません。`<frame>` 要素に代わり、 {{HTMLElement("iframe")}} を推奨します。

## 属性

他のすべての HTML 要素と同様に、この要素には[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)があります。

- `src` {{Deprecated_Inline}}
  - : この属性は、フレームに表示する文書を指定します。
- `name` {{Deprecated_Inline}}
  - : この属性は、フレームに名前をつけます。名前がなければ、すべてのリンクは自身が存在するフレーム – 直近の親フレームで開きます。詳しくは [`target`](/ja/docs/Web/HTML/Reference/Elements/a#target) 属性を参照してください。
- `noresize` {{Deprecated_Inline}}
  - : この属性は、ユーザによるフレームのリサイズを抑止します。
- `scrolling` {{Deprecated_Inline}}
  - : この属性は、スクロールバーの存在の有無を定義します。この属性を指定しない場合、ブラウザーは必要なときにスクロールバーを表示します。設定できる値は 2 つです。 "yes" は不要なときでもスクロールバーを表示します。"no" は必要なとき*でも*スクロールバーを表示しません。
- `marginheight` {{Deprecated_Inline}}
  - : この属性は、フレーム間のマージンの高さを定義します。
- `marginwidth` {{Deprecated_Inline}}
  - : この属性は、フレーム間のマージンの幅を定義します。
- `frameborder` {{Deprecated_Inline}}
  - : この属性で、フレームにボーダーを設定できます。

## 例

### フレームセット文書

フレームセット文書では、{{HTMLElement("body")}} 要素の代わりに {{HTMLElement("frameset")}} 要素があります。`<frame>` 要素は `<frameset>` の中に配置されます。

```html
<!doctype html>
<html lang="en-US">
  <head>
    <!-- Document metadata goes here -->
  </head>
  <frameset cols="400, 500">
    <frame src="https://developer.mozilla.org/en/HTML/Element/iframe" />
    <frame src="https://developer.mozilla.org/en/HTML/Element/frame" />
  </frameset>
</html>
```

文書の {{HTMLElement("body")}} 内に別の HTML ページを埋め込みたい場合は、{{HTMLElement("iframe")}} 要素を使用してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("frameset")}}
- {{HTMLElement("iframe")}}
