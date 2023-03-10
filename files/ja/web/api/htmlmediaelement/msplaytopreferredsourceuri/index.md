---
title: HTMLMediaElement.msPlayToPreferredSourceUri
slug: Web/API/HTMLMediaElement/msPlayToPreferredSourceURI
l10n:
  sourceCommit: a36633398f827c87eb593f9647ed00bf33fd5b34
---

{{APIRef("HTML DOM")}}

{{Non-standard_header()}}

**`msPlayToPreferredSourceUri`** は、優先メディアソースのパスを取得または設定する読み書き可能なプロパティです。これにより、_PlayTo_ ターゲット機器は、DRM保護されたメディアコンテンツを、クラウドメディアサーバーなどの異なる形からストリーミングすることができます。

この独自プロパティは、Internet Explorer と Microsoft Edge に固有のものです。

## 値

`msPlayToPreferredSourceUri` は、クラウドメディアサーバーなどの様々な場所から _PlayTo_ ターゲット機器にコンテンツをストリーミングするための _PlayTo_ 参照 (URI または URL) を可能にします。これにより、ウェブページや Microsoft ストアアプリで、デジタル著作権管理 (DRM) 保護されたコンテンツを再生できるようになります。アプリは、環境識別子 (Uniform Resource Identifier, URI) を指定します。この URI は、クラウドベースのメディアサーバーを指すことができ、保護されていないコンテンツでなければならない Windows マシンからコンテンツをストリーミングする代わりに、DRM で保護されているクラウドから直接ストリーミングすることが可能です。

URI がネットワークを介して _PlayTo_ 機器に送信されるとき、フォワードスラッシュ ("/") が URI 文字列に追加されます。これは、 URI の標準に適合するために行われます。

## 例

```html
<video
  src="http://www.contoso.com/videos/video.mp4"
  msPlayToPreferredSourceUri="http://www.contoso.com/catalogid=1234" />
```

```js
  const video = document.createElement('video');
  document.body.appendChild(video);

  video.src = "http://www.contoso.com/videos/video.mp4";
  video.msPlayToPreferredSourceUri = "http://www.contoso.com/catalogid=1234";
```

## 関連情報

- [Microsoft PlayReady](https://docs.microsoft.com/playready/)
  Microsoft PlayReadyコンテンツアクセスおよび保護技術は、音声/映像コンテンツをネットワーク上でより安全に配布し、このコンテンツが不正に使用されるのを防止するのに役立つ技術群です。
