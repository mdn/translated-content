---
title: Vendor prefix (ベンダー接頭辞)
slug: Glossary/Vendor_Prefix
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

かつて、ブラウザーベンダーは、開発者が新しいアイディアを試せるように、実験的または標準外の CSS プロパティや JavaScript API に接頭辞を追加していました。これにより、理論上は、標準化の過程で、そうした実験的な機能が信頼され、結果としてウェブ開発者のコードが動作しなくなる事態を防ぐことができました。

ウェブ開発者たちは、実験的な性質があるにもかかわらず、接頭辞付きの機能を本番環境のウェブサイトに組み込みました。これにより、ブラウザーベンダーは新しい機能を開発する中で、互換性を確保することがより困難になりました。また、接頭辞付きの機能を含むことは、小規模なブラウザーベンダーにとっても不利益となりました。彼らは、人気のあるウェブサイトを表示するために、他のブラウザーの接頭辞を追加せざるを得なくなったからです。

現在、ブラウザーの実験的機能は「フラグによって制御される」ようになっています。これにより、開発者はブラウザーの設定を変更して、今後導入される機能をテストできるようになります。現在、ブラウザーでは、ユーザーが制御できるフラグや環境設定を通じて実験的機能が提供されています。小規模な仕様に対してフラグを設定できるため、安定した状態への移行がはるかにすばやく行えるようになります。

## CSS の接頭辞

主要なブラウザーは、以下の接頭辞を使用しています。

- `-webkit-` (Chrome, Safari, 新しいバージョンの Opera と Edge、ほぼすべての iOS ブラウザー (Firefox for iOS を含む)。基本的に WebKit ベースのブラウザーすべて)
- `-moz-` (Firefox)
- `-o-` (WebKit 導入前の古い Opera)
- `-ms-` (Internet Explorer と Microsoft Edge)

使用例:

```css
-webkit-transition: all 4s ease;
-moz-transition: all 4s ease;
-ms-transition: all 4s ease;
-o-transition: all 4s ease;
transition: all 4s ease;
```

コードベースで上記のコードを見つけた場合、最後の行以外はすべて除去しても問題ありません。すべてのブラウザーが、ベンダー接頭辞なしで[トランジション](/ja/docs/Web/CSS/Reference/Properties/transition#ブラウザーの互換性)に対応しています。

```css
transition: all 4s ease;
```

## API の接頭辞

歴史的に、ベンダーは実験的な API にも接頭辞を使用してきています。インターフェイス全体が実験的な場合は、インターフェイス名に接頭辞が付きます（しかし、その中のプロパティやメソッドには付きません）。標準化されたインターフェイスに実験的なプロパティやメソッドが追加された場合は、それぞれのメソッドやプロパティに接頭辞が付きます。

### インターフェイスの接頭辞

インターフェイス名の接頭辞は大文字です。

- `WebKit` (Chrome, Safari, 新しいバージョンの Opera と Edge、ほぼすべての iOS ブラウザー (Firefox for iOS を含む)。基本的に WebKit ベースのブラウザーすべて)
- `Moz` (Firefox)
- `O` (WebKit 導入前の古い Opera)
- `MS` (Internet Explorer と Microsoft Edge)

### プロパティとメソッドの接頭辞

プロパティやメソッドの接頭辞は小文字です。

- `webkit` (Chrome, Safari, 新しいバージョンの Opera と Edge、ほぼすべての iOS ブラウザー (Firefox for iOS を含む)。基本的に WebKit ベースのブラウザーすべて)
- `moz` (Firefox)
- `o` (WebKit 導入前の古い Opera)
- `ms` (Internet Explorer と Microsoft Edge)

使用例:

```js
window.requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  window.msRequestAnimationFrame;
```

コードベースで上記のコードを見かけた場合、1行目以外はすべて除去しても問題ありません。すべてのブラウザーが、ベンダー接頭辞や `window` なしでも [`requestAnimationFrame`](/ja/docs/Web/API/Window/requestAnimationFrame#browser_compatibility) に対応しています。

```js
requestAnimationFrame(callback);
```

## 関連情報

- [`-moz-` ベンダー接頭辞付き CSS 拡張機能](/ja/docs/Web/CSS/Reference/Mozilla_extensions)
- [`-webkit-` ベンダー接頭辞付き CSS 拡張機能](/ja/docs/Web/CSS/Reference/Webkit_extensions)
- [Vendor prefix](https://en.wikipedia.org/wiki/CSS_hack#Browser_prefixes) - Wikipedia 【訳注：ウィキペディア日本語版には該当する節がありません】
