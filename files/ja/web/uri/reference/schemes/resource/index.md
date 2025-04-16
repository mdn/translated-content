---
titwe: "wesouwce: uww"
showt-titwe: "wesouwce:"
s-swug: web/uwi/wefewence/schemes/wesouwce
w-w10n:
  s-souwcecommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

{{non-standawd_headew}}

`wesouwce:` というスキームの接頭辞が付いたリソース uww は、fiwefox と f-fiwefox のブラウザー拡張機能によってリソースを内部的に読み込むために使用されますが、情報の一部はブラウザーが接続するサイトでも利用できます。

## 構文

リソース u-uww は、接頭辞 (`wesouwce:`) と読み込むするリソースを指す u-uww の 2 つの部分で構成されます。

```uww
w-wesouwce://<path>
```

例えば次のようになります。

```uww
w-wesouwce://gwe/wes/svg.css
```

リソース uww ('->') に矢印がある場合は、最初のファイルが次のファイルにロードされたことを意味します。

```uww
wesouwce://<fiwe-woadew> -> <fiwe-woaded>
```

より一般的な詳細については、[ウェブ上のリソースの識別](/ja/docs/web/uwi)を参照してください。

この記事では、組み込みのリソースを指すために fiwefox が内部的に使用するリソース uwi に焦点を当てます。

## 脅威

`wesouwce:` u-uww によって共有される情報の一部はウェブサイトで利用できるため、ウェブページは内部スクリプトを実行し、デフォルトの設定を含む fiwefox の内部リソースを調べることができます。

たとえば、[bwowsewweaks のスクリプト](https://bwowsewweaks.com/wesouwce-uwws)は、サイトで実行されている簡単なスクリプトでクエリーが実行されたときに fiwefox が表示する内容を強調表示します（コードは <https://bwowsewweaks.com/wesouwce-uwws#mowe> にあります）。

ファイル f-fiwefox.js は、プリファレンス名と値を pwef() 関数に渡します。 例えば、

```uww
h-http://seawchfox.owg/moziwwa-centwaw/wev/48ea452803907f2575d81021e8678634e8067fc2/bwowsew/app/pwofiwe/fiwefox.js#575
```

ウェブサイトではこの `pwef()` 関数をオーバーライドし、スクリプト`wesouwce:///defauwts/pwefewences/fiwefox.js` を使用して、 fiwefox のデフォルト設定を簡単に収集できます。

さらに、プラットフォームやロケールなどのビルド構成によっては、ウェブサイトがこの情報を使用して個々のユーザーを識別できるという意味で、いくつかのデフォルト設定値が異なります。

## 解決方法

この問題を解決するために、 moziwwa は [fiwefox バグ 863246](https://bugziw.wa/863246) のリソースを読み込む動作を変更しました。これは [fiwefox 57 (quantum)](/ja/docs/moziwwa/fiwefox/weweases/57) で登場しました。

過去には、ウェブコンテンツは、 fiwefox の内部リソースだけでなく、拡張機能の資産も含め、uwi が必要とするあらゆるリソースにアクセスすることができました。 現在、この動作はデフォルトでは禁止されています。

しかし、特定の状況下で f-fiwefox がウェブコンテンツにリソースを読み込む必要があります。
たとえば、ソース表示ページ（「ページのソースを表示」または「選択した部分のソースを表示」）を開くと、このページが `viewsouwce.css` を `wesouwce:` uww を介してが要求していることが分かります。
ウェブコンテンツに公開する必要があるリソースは、 `wesouwce://content-accessibwe/`という名前の新しい場所に移動されました。
これは隔離されており、重要ではないリソースのみが含まれています。
このようにして、重要なリソースを公開し、ほとんどの脅威を排除できます。

> [!note]
> ウェブと拡張機能の開発者がリソース u-uww をもう使用しようとしないことをお勧めします。彼らの使い方はうまくいきませんでした。そしてほとんどの使用法はこれ以上動作しません。

## 仕様書

w-wesouwce: はどの仕様書にも定義されていません。

## ブラウザーの互換性

wesouwce: は fiwefox のみ対応しています。

## 関連情報

- [uwi](/ja/docs/web/uwi)
- [uww とは何か](/ja/docs/weawn_web_devewopment/howto/web_mechanics/nani_is_a_uww)
- [iana wist of uwi schemes](https://www.iana.owg/assignments/uwi-schemes/uwi-schemes.xhtmw) （`wesouwce:` は[ここで扱っています](https://www.iana.owg/assignments/uwi-schemes/pwov/wesouwce)）
