---
title: "Navigator: share() メソッド"
short-title: share()
slug: Web/API/Navigator/share
l10n:
  sourceCommit: 91907f1383139ec2bd1d309d02ffac30b4eee757
---

{{APIRef("Web Share API")}}{{securecontext_header}}

**`share()`** は {{domxref("Navigator")}} インターフェイスのメソッドで、テキスト、URL、ファイルなどのデータを共有するために、端末のネイティブ共有メカニズムを呼び出します。利用できる共有ターゲットは機器によって異なりますが、クリップボード、連絡先やメールアプリケーション、ウェブサイト、Bluetooth などが含まれる場合があります。

このメソッドは {{jsxref("Promise")}} を `undefined` で解決します。
Windows では、これは共有ポップアップが起動されたときに発生し、Android では、データが共有ターゲットに正常に渡されたときにプロミスが解決されます。

[ウェブ共有 API](/ja/docs/Web/API/Web_Share_API) は、[web-share](/ja/docs/Web/HTTP/Headers/Permissions-Policy/web-share) 権限ポリシーで制限されます。
`share()` メソッドは、その権限に対応してはいるが許可されていない場合に例外を発生させます。

## 構文

```js-nolint
navigator.share(data)
```

### 引数

- `data` {{optional_inline}}

  - : 共有するデータを含むオブジェクト。

    ユーザーエージェントにとって未知のプロパティは無視され、共有データはユーザーエージェントが理解するプロパティにのみ評価されます。
    すべてのプロパティは任意であるが，少なくとも一つの既知のデータプロパティを指定しなければならない。

    使用可能な値は以下の通りです。

    - `url` {{optional_inline}}
      - : 共有される URL を表す文字列。
    - `text` {{optional_inline}}
      - : 共有されるテキストを表す文字列。
    - `title` {{optional_inline}}
      - : 共有されるタイトルを表す文字列。
    - `files` {{optional_inline}}
      - : 共有されるファイルを表す {{domxref("File")}} オブジェクトの配列。共有可能なファイルの種類については、[下記](#共有可能なファイル形式)を参照してください。

### 返値

{{jsxref("Promise")}} で、 `undefined` で解決するか、下記の[例外](#例外)のいずれかで拒否されるかします。

### 例外

{{jsxref("Promise")}} は以下の `DOMException` 値のいずれかで拒否される可能性がある。

- `InvalidStateError` {{domxref("DOMException")}}
  - : 文書が完全にアクティブになっていない、または他にも共有操作が進行中です。
- `NotAllowedError` {{domxref("DOMException")}}
  - : `web-share` [権限ポリシー](/ja/docs/Web/HTTP/Permissions_Policy)によってこの機能の使用がブロックされているか、ウィンドウが{{Glossary("transient activation", "一時的な有効化")}}されていないか、セキュリティ上の配慮からファイル共有がブロックされているかです。
- {{jsxref("TypeError")}}

  - : 指定した共有データを検証することができません。想定される理由は以下の通りです。

    - `data` 引数が除外されているか、不明な値を持つプロパティしかない場合。ユーザーエージェントが認識できないプロパティは無視されることに注意してください。
    - URL の形式が正しくない場合。
    - ファイルが指定されているが、実装がファイル共有に対応していない場合。
    - 指定したデータを共有すると、ユーザーエージェントから「敵対的な共有」と見なされる場合。

- `AbortError` {{domxref("DOMException")}}
  - : ユーザーが共有処理を取り消したか、利用できる共有対象がない場合。
- `DataError` {{domxref("DOMException")}}
  - : 共有対象を開始する、またはデータを送信する際に問題が発生した場合。

## 共有可能なファイル形式

以下は、通常共有できるファイル形式の一覧です。ただし、共有が成功するかどうかは常に {{domxref("navigator.canShare()")}} でテストしてください。

- アプリケーション
  - `.pdf` - `application/pdf`
- 音声
  - `.flac` - `audio/flac`
  - `.m4a` - `audio/x-m4a`
  - `.mp3` - `audio/mpeg` (`audio/mp3` も受け付ける)
  - `.oga` - `audio/ogg`
  - `.ogg` - `audio/ogg`
  - `.opus` - `audio/ogg`
  - `.wav` - `audio/wav`
  - `.weba` - `audio/webm`
- 画像
  - `.avif` - `image/avif`
  - `.bmp` - `image/bmp`
  - `.gif` - `image/gif`
  - `.ico` - `image/x-icon`
  - `.jfif` - `image/jpeg`
  - `.jpeg` - `image/jpeg`
  - `.jpg` - `image/jpeg`
  - `.pjp` - `image/jpeg`
  - `.pjpeg` - `image/jpeg`
  - `.png` - `image/png`
  - `.svg` - `image/svg+xml`
  - `.svgz` - `image/svg+xml`
  - `.tif` - `image/tiff`
  - `.tiff` - `image/tiff`
  - `.webp` - `image/webp`
  - `.xbm` - `image/x-xbitmap`
- テキスト
  - `.css` - `text/css`
  - `.csv` - `text/csv`
  - `.ehtml` - `text/html`
  - `.htm` - `text/html`
  - `.html` - `text/html`
  - `.shtm` - `text/html`
  - `.shtml` - `text/html`
  - `.text` - `text/plain`
  - `.txt` - `text/plain`
- 動画
  - `.m4v` - `video/mp4`
  - `.mp4` - `video/mp4`
  - `.mpeg` - `video/mpeg`
  - `.mpg` - `video/mpeg`
  - `.ogm` - `video/ogg`
  - `.ogv` - `video/ogg`
  - `.webm` - `video/webm`

## セキュリティ

このメソッドは、現在の文書が [web-share](/ja/docs/Web/HTTP/Headers/Permissions-Policy/web-share) 権限ポリシーと{{Glossary("transient activation", "一時的な有効化")}}を持っていることが必要です（ボタンクリックなどのUIイベントをきっかけに起動しなければならず、スクリプトによって任意の時点で起動させることはできない）。さらに、このメソッドでは、ネイティブ実装で共有に対応している有効なデータを指定する必要があります。

## 例

### URL の共有

[ウェブ共有テスト](https://mdn.github.io/dom-examples/web-share/) ([ソースコードを参照](https://github.com/mdn/dom-examples/blob/main/web-share/index.html)) では、ボタンが一つあり、クリックすると Web Share API を呼び出して MDN の URL をシェアします。 JavaScript は以下のようになります。

#### HTML

HTML は、共有を発生させるためのボタンと、テストの結果を表示するための段落を作成するだけです。

```html
<p><button>MDN を共有!</button></p>
<p class="result"></p>
```

#### JavaScript

```js
const shareData = {
  title: "MDN",
  text: "MDN でウェブ開発を学びましょう。",
  url: "https://developer.mozilla.org",
};

const btn = document.querySelector("button");
const resultPara = document.querySelector(".result");

// 共有は「ユーザーによる有効化」で発生させること。
btn.addEventListener("click", async () => {
  try {
    await navigator.share(shareData);
    resultPara.textContent = "MDN の共有に成功しました";
  } catch (err) {
    resultPara.textContent = `Error: ${err}`;
  }
});
```

#### 結果

ボタンをクリックすると、お使いのプラットフォームで共有ダイアログが起動します。ボタンの下に、共有が成功したかどうか、またはエラーコードを提供するためのテキストが表示されます。

{{EmbedLiveSample('Sharing a URL','','','','','','web-share')}}

### ファイルの共有

ファイルを共有するには、まず {{domxref("navigator.canShare()")}} をテストして呼び出します。次に、`navigator.share()`の呼び出しにファイルのリストを記載してください。

#### HTML

```html
<div>
  <label for="files">共有する画像を選択:</label>
  <input id="files" type="file" accept="image/*" multiple />
</div>
<button id="share" type="button">画像を共有</button>
<output id="output"></output>
```

#### JavaScript

`navigator.canShare()` に渡されるデータオブジェクトには、 `title` と `text` は重要ではないので、`files`プロパティのみが記載されます。

```js
const input = document.getElementById("files");
const output = document.getElementById("output");

document.getElementById("share").addEventListener("click", async () => {
  const files = input.files;

  if (files.length === 0) {
    output.textContent = "ファイルが選択されていません。";
    return;
  }

  // navigator.canShare() による機能検出は、navigator.share() についても
  // 同じことを意味します。
  if (!navigator.canShare) {
    output.textContent = `このブラウザーはウェブ共有 API に対応していません。`;
    return;
  }

  if (navigator.canShare({ files })) {
    try {
      await navigator.share({
        files,
        title: "Images",
        text: "美しい画像",
      });
      output.textContent = "共有しました!";
    } catch (error) {
      output.textContent = `エラー: ${error.message}`;
    }
  } else {
    output.textContent = `このシステムはこのファイルの共有に対応していません。`;
  }
});
```

#### 結果

{{EmbedLiveSample('Sharing files')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("navigator.canShare()")}}
- <https://wpt.live/web-share/> （ウェブプラットフォームのテスト）
