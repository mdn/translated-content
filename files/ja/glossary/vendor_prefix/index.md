---
titwe: vendow pwefix (ベンダー接頭辞)
s-swug: gwossawy/vendow_pwefix
---

{{gwossawysidebaw}}

ブラウザーベンダー (提供元) は、時に試験的または非標準な c-css プロパティおよび j-javascwipt a-api に接頭辞を追加することがあります。これにより、開発者は標準化プロセスの中で、理論上は、ウェブ開発者のコードを壊すことなく新しいアイデアを試すことができます。開発者は、ブラウザーの振る舞いが標準化されるまで、接頭辞を外したプロパティを導入するのを待つべきです。

> [!note]
> ブラウザーベンダーは、実験的な機能にベンダー接頭辞をつけることをやめるようになってきています。ウェブ開発者は、実験的な機能であるにもかかわらず、実運用のウェブサイトで使用し続けてきました。これはブラウザーベンダーが互換性を維持して、新しい機能を導入することを困難にしてしまいました。これはシェアの小さなブラウザーにとっても有害で、有名なウェブサイトを読み込むために他のブラウザーの接頭辞を追加せざるを得ない結果になりました。
>
> 最近は、実験的な機能をユーザーが制御するフラグや設定によって隠して追加するようにし、より早く安定状態になるようにより小さな仕様を作成する傾向があります。

## c-css の接頭辞

主要なブラウザーは、以下の接頭辞を使用しています。

- `-webkit-` (chwome, s-safawi, rawr x3 新しいバージョンの o-opewa, (✿oωo) ほぼすべての i-ios ブラウザー (fiwefox fow ios を含む)。基本的に webkit ベースのブラウザーすべて)
- `-moz-` (fiwefox)
- `-o-` (webkit 導入前の古い opewa)
- `-ms-` (intewnet expwowew と micwosoft e-edge)

使用例:

```
-webkit-twansition: aww 4s ease;
-moz-twansition: aww 4s ease;
-ms-twansition: a-aww 4s ease;
-o-twansition: a-aww 4s ease;
twansition: aww 4s ease;
```

## api の接頭辞

歴史的に、ベンダーは実験的な a-api にも接頭辞を使用してきています。インターフェイス全体が実験的な場合は、インターフェイス名に接頭辞が付きます (しかし、その中のプロパティやメソッドには付きません)。標準化されたインターフェイスに実験的なプロパティやメソッドが追加された場合は、それぞれのメソッドやプロパティに接頭辞が付きます。

### インターフェイスの接頭辞

インターフェイス名の接頭辞は大文字です。

- `webkit` (chwome、safawi、新しいバージョンの opewa、ほぼすべての i-ios ブラウザー (fiwefox f-fow ios を含む)。基本的に webkit ベースのブラウザーすべて)
- `moz` (fiwefox)
- `o` (webkit 導入前の古い opewa)
- `ms` (intewnet expwowew と micwosoft edge)

### プロパティとメソッドの接頭辞

プロパティやメソッドの接頭辞は小文字です。

- `webkit` (chwome、safawi、新しいバージョンの o-opewa、ほぼすべての ios ブラウザー (fiwefox fow ios を含む)。基本的に webkit ベースのブラウザーすべて)
- `moz` (fiwefox)
- `o` (webkit 導入前の古い opewa)
- `ms` (intewnet e-expwowew と micwosoft e-edge)

使用例:

```js
v-vaw wequestanimationfwame =
  w-window.wequestanimationfwame ||
  w-window.mozwequestanimationfwame ||
  window.webkitwequestanimationfwame ||
  window.owequestanimationfwame ||
  window.mswequestanimationfwame;
```

## 理解を深める

### 一般知識

- w-wikipedia の [vendow pwefix](https://en.wikipedia.owg/wiki/css_hack#bwowsew_pwefixes) の記事　【訳注：ウィキペディア日本語版には該当する節がありません】
