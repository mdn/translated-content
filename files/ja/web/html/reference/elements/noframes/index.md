---
title: "<noframes>: フレームフォールバック要素"
slug: Web/HTML/Reference/Elements/noframes
original_slug: Web/HTML/Element/noframes
l10n:
  sourceCommit: 8536cae9363a37725f9a5dcca4e064addbcc9506
---

{{HTMLSidebar}}{{deprecated_header}}

**`<noframes>`** は [HTML](/ja/docs/Web/HTML) の要素で、 {{HTMLElement("frame")}} 要素に対応していない（または対応を無効化した）ブラウザーのためのコンテンツを提供します。よく使われるほとんどのブラウザーがフレームに対応していますが、一部のモバイルブラウザーやテキストモードブラウザーなどの例外もあります。

`<noframes>` の中では HTML 文書の body 要素内で利用できる HTML 要素が使用できますが、フレームを使用するための {{HTMLElement("frameset")}} 要素および {{HTMLElement("frame")}} 要素は意味がないので例外です。

`<noframes>` は、ユーザーのブラウザーがフレームに対応していないことを説明するメッセージを表示するために利用することができますが、できればフレームを使わなくても同じ（または同等の）機能を提供するための別なフォームを表現するために使用するべきです。

> [!NOTE]
> {{HTMLElement("frame")}} 要素および {{HTMLElement("frameset")}} 要素が廃止されたため、この要素も廃止されており使用するべきではありません。フレームがどうしても必要であれば、 {{HTMLElement("iframe")}} 要素を用いて表現するべきです。

## 属性

他のすべての HTML 要素と同様に、この要素は[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)に対応しています。他の属性は利用できません。

## 例

この例には、 2 つのフレームを持つフレームセットがあります。加えて、 `<noframes>` を使用して{{Glossary("user agent","ユーザーエージェント")}}がフレームに対応していない場合には説明メッセージを表示します。

```html
<!doctype html>
<html lang="en-US">
  <head>
    <!-- Document metadata goes here -->
  </head>
  <frameset rows="45%, 55%">
    <frame src="https://developer.mozilla.org/en/HTML/Element/frameset" />
    <frame src="https://developer.mozilla.org/en/HTML/Element/frame" />
    <noframes>
      <p>
        It seems your browser does not support frames or is configured to not
        allow them.
      </p>
    </noframes>
  </frameset>
</html>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("frameset")}}
- {{HTMLElement("frame")}}
