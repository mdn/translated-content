---
title: <frame>
slug: Web/HTML/Element/frame
---

{{HTMLRef}}{{Deprecated_header}}

`<frame>` は、別の HTML 文書を表示できる個々の領域を定義する HTML 要素です。 frame 要素は {{HTMLElement("frameset")}} の内部で使用します。

パフォーマンスの問題やスクリーンリーダーを使用するユーザへのアクセシビリティの欠如といった欠点があるため、 `<frame>` 要素の使用は推奨されません。 `<frame>` 要素に代わり、 {{HTMLElement("iframe")}} を推奨します。

## 属性

他のすべての HTML 要素と同様に、この要素は[グローバル属性](/ja/docs/HTML/Global_attributes)を持ちます。

- {{htmlattrdef("src")}}
  - : この属性は、フレームに表示する文書を指定します。
- {{htmlattrdef("name")}}
  - : この属性は、フレームに名前をつけます。名前がなければ、すべてのリンクは自身が存在するフレーム – 直近の親フレームで開きます。詳しくは {{htmlattrxref("target","a")}} 属性を参照してください。
- {{htmlattrdef("noresize")}}
  - : この属性は、ユーザによるフレームのリサイズを抑止します。
- {{htmlattrdef("scrolling")}}
  - : この属性は、スクロールバーの存在の有無を定義します。この属性を指定しない場合、ブラウザは必要なときにスクロールバーを表示します。設定できる値は二つです。 "yes" は不要なときでもスクロールバーを表示します。 "no" は必要なとき*でも*スクロールバーを表示しません。
- {{htmlattrdef("marginheight")}}
  - : この属性は、フレーム間のマージンの高さを定義します。
- {{htmlattrdef("marginwidth")}}
  - : この属性は、フレーム間のマージンの幅を定義します。
- {{htmlattrdef("frameborder")}}
  - : この属性で、フレームにボーダーを設定できます。

## 例

```html
<frameset cols="50%,50%">
  <frame src="https://developer.mozilla.org/en/HTML/Element/iframe" />
  <frame src="https://developer.mozilla.org/en/HTML/Element/frame" />
</frameset>
```

## ブラウザーの互換性

{{Compat("html.elements.frame")}}

## 関連情報

- {{HTMLElement("frameset")}}
- {{HTMLElement("iframe")}}
