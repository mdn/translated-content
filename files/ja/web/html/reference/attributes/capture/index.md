---
title: "HTML 属性: capture"
short-title: capture
slug: Web/HTML/Reference/Attributes/capture
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

**`capture`** 属性は、オプションとして、新しいファイルをキャプチャすることと、 [`accept`](/ja/docs/Web/HTML/Reference/Attributes/accept) 属性で定義された種類の新しいメディアをどの機器でキャプチャするかを指定します。

値としては、 `user` と `environment` があります。 capture 属性は {{HTMLElement("input/file", "file")}} 入力型が対応しています。

`capture` 属性は、[accept](/ja/docs/Web/HTML/Reference/Attributes/accept) 属性が入力の種類を示す場合、画像やビデオデータの取り込みに使用するカメラを指定する文字列をその値として受け取ります。

| 値            | 説明                                     |
| ------------- | ---------------------------------------- |
| `user`        | ユーザー側のカメラやマイクを使用します。 |
| `environment` | 外向きのカメラやマイクを使用します。     |

> [!NOTE]
> capture は、以前は論理属性で、存在する場合、ファイル入力を要求する代わりに、カメラやマイクなどの機器のメディアキャプチャ機器を使用するように要求していました。

{{InteractiveExample("HTML デモ: capture", "tabbed-standard")}}

```html interactive-example
<label for="selfie">あなたの顔の写真を撮りましょう:</label>

<input type="file" id="selfie" name="selfie" accept="image/*" capture="user" />

<label for="picture">背面カメラを使って写真を取りましょう:</label>

<input
  type="file"
  id="picture"
  name="picture"
  accept="image/*"
  capture="environment" />
```

```css interactive-example
label {
  display: block;
  margin-top: 1rem;
}

input {
  margin-bottom: 1rem;
}
```

## 例

ファイル入力型に設定すると、マイクやカメラを搭載した OS では、既存のファイルから選択したり、新規にファイルを作成したりできるユーザーインターフェイスが表示されます。

```html
<p>
  <label for="soundFile">あなたの声はどのような音ですか？:</label>
  <input type="file" id="soundFile" capture="user" accept="audio/*" />
</p>
<p>
  <label for="videoFile">動画をアップロード:</label>
  <input type="file" id="videoFile" capture="environment" accept="video/*" />
</p>
<p>
  <label for="imageFile">自分の写真をアップロードしてください:</label>
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
