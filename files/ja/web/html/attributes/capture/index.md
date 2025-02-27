---
title: "HTML 属性: capture"
slug: Web/HTML/Attributes/capture
l10n:
  sourceCommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{HTMLSidebar}}

**`capture`** 属性は、オプションとして、新しいファイルをキャプチャすることと、 [`accept`](accept) 属性で定義された種類の新しいメディアをどの機器でキャプチャするかを指定します。

値としては、 `user` と `environment` があります。 capture 属性は {{HTMLElement("input/file", "file")}} 入力型が対応しています。

`capture` 属性は、[accept](accept) 属性が入力の種類を示す場合、画像やビデオデータの取り込みに使用するカメラを指定する文字列をその値として受け取ります。

| 値            | 説明                                     |
| ------------- | ---------------------------------------- |
| `user`        | ユーザー側のカメラやマイクを使用します。 |
| `environment` | 外向きのカメラやマイクを使用します。     |

> [!NOTE]
> capture は、以前は論理属性で、存在する場合、ファイル入力を要求する代わりに、カメラやマイクなどの機器のメディアキャプチャ機器を使用するように要求していました。

{{EmbedInteractiveExample("pages/tabbed/attribute-capture.html", "tabbed-standard")}}

## 例

ファイル入力型に設定すると、マイクやカメラを搭載した OS では、既存のファイルから選択したり、新規にファイルを作成したりできるユーザーインターフェイスが表示されます。

```html
<p>
  <label for="soundFile">What does your voice sound like?:</label>
  <input type="file" id="soundFile" capture="user" accept="audio/*" />
</p>
<p>
  <label for="videoFile">Upload a video:</label>
  <input type="file" id="videoFile" capture="environment" accept="video/*" />
</p>
<p>
  <label for="imageFile">Upload a photo of yourself:</label>
  <input type="file" id="imageFile" capture="user" accept="image/*" />
</p>
```

{{EmbedLiveSample('Examples', '100%', 200)}}

なお、これらはモバイル端末でより効果的に機能します。お使いの端末がデスクトップコンピューターの場合、一般的なファイルピッカーが表示されるでしょう。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアプリケーションからのファイルの使用](/ja/docs/Web/API/File_API/Using_files_from_web_applications)
- [ファイル API](/ja/docs/Web/API/File)
- {{domxref('HTMLInputElement.files')}}
