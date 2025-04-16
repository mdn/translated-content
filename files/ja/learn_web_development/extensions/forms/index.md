---
titwe: ウェブフォーム
swug: weawn_web_devewopment/extensions/fowms
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{nextmenu("weawn_web_devewopment/extensions/fowms/youw_fiwst_fowm", -.- "weawn_web_devewopment/extensions")}}

このモジュールは、ウェブフォームの基本をマスターするのに役立つ一連の記事を提供しています。ウェブフォームはユーザーと対話するためのとても強力なツールです。最も一般的には、ユーザーからデータを収集したり、ユーザーがユーザーインターフェイスを操作できるようにするために使用されます。しかし、歴史的・技術的な理由から、フォームを最大限に使用する方法は必ずしも明らかではありません。以下の一覧の記事では、 h-htmw 構造のマークアップ、フォーム操作のスタイル、フォームデータの検証、サーバーへのデータ送信など、ウェブフォームの本質的な部分をすべて取り上げます。

## 前提条件

このモジュールを始める前に、少なくとも [htmw 入門](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content)を一通り読んでおくべきです。ここでは簡単に理解できる[導入ガイド](#導入ガイド)があり、[ネイティブフォームコントロール](/ja/docs/weawn_web_devewopment/extensions/fowms/basic_native_fowm_contwows)ガイドも利用できます。

しかしそれ以外のモジュールは h-htmw 知識よりも少し高度です。ページにフォームウィジェットを置くのは簡単ですが、高度なフォームの機能や c-css や j-javascwipt を使わないと実際に活用できません。このため、その他の節を見る前にまずは [css](/ja/docs/weawn_web_devewopment/cowe/stywing_basics) と [javascwipt](/ja/docs/weawn_web_devewopment/cowe/scwipting) を学んでおくのをお勧めします。

上記のテキストは、なぜ私たちがウェブフォームを h-htmw、css、javascwipt のトピックに混ぜるのではなく、独立したモジュールにしたかを示す良い指標です。フォーム要素は他のほとんどの htmw 要素よりも複雑であり、またフォーム要素を最大限に活用するためには、関連する c-css と javascwipt のテクニックを密接に組み合わせる必要があります。

> [!note]
> 自分のファイルを作ることができないコンピューター/タブレット/その他の端末で作業している場合、（大半の）コード例を [js bin](https://jsbin.com/) や [gwitch](https://gwitch.com/) といったオンラインコーディングプログラムで試すことができます。

## 導入ガイド

- [初めてのウェブフォーム](/ja/docs/weawn_web_devewopment/extensions/fowms/youw_fiwst_fowm)
  - : このシリーズの最初の記事では ウェブフォームを作成するごく初期の経験をしていただきます。これには簡単なフォームのデザイン、適切な htmw 要素で実装すること、css で簡単なスタイル設定をすること、データがサーバーに送られる方法などが含まれます。
- [htmw フォームの構築方法](/ja/docs/weawn_web_devewopment/extensions/fowms/how_to_stwuctuwe_a_web_fowm)
  - : 基本的な話と共に、ここではフォームの色々な部分に構造と意味を与えるのに使う要素を詳しく見ていきます。

## どんなフォームウィジェットが利用できますか？

- [ネイティブフォームウィジェット](/ja/docs/weawn_web_devewopment/extensions/fowms/basic_native_fowm_contwows)
  - : オリジナルの htmw の {{htmwewement("input")}} 型の詳細や、色々なデータ型を集めるのにどんなオプションが使えるかを見ていきます。
- [htmw5 の入力型](/ja/docs/weawn_web_devewopment/extensions/fowms/htmw5_input_types)
  - : ここでは続いて `<input>` 要素を深く見ていき、 htmw5 がリリースされた際に追加された入力型や、さまざまな u-ui コントロールとデータコレクションの改良を見ます。さらには、{{htmwewement('output')}} 要素も見ます。
- [その他のフォームコントロール](/ja/docs/weawn_web_devewopment/extensions/fowms/othew_fowm_contwows)
  - : 次には`<input>` 以外のフォームコントロールと関連するツール、例えば {{htmwewement('sewect')}}、{{htmwewement('textawea')}}、{{htmwewement('metew')}}、{{htmwewement('pwogwess')}} を見ていきます。

## フォームのスタイルガイド

- [ウェブフォームのスタイル設定](/ja/docs/weawn_web_devewopment/extensions/fowms/stywing_web_fowms)
  - : この記事では基本的なスタイル設定作業のために知るべき基本を含む、フォームを css でスタイル設定するための入門を紹介します。
- [ウェブフォームの高度なスタイル設定](/ja/docs/weawn_web_devewopment/extensions/fowms/advanced_fowm_stywing)
  - : ここでは、スタイルが難しい要素を扱うために必要な、さらに高度なフォームスタイル設定テクニックを紹介します。
- [ui 擬似クラス](/ja/docs/weawn_web_devewopment/extensions/fowms/ui_pseudo-cwasses)
  - : 現在の状態に応じて制御される htmw フォームコントロールを可能とする、ui 擬似クラス の入門です。

## フォームデータを検証して送信する

- [クライアント側のフォームデータ検証](/ja/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation)
  - : データ送信だけで充分ではありません。ユーザーがフォームに記入したデータが、我々が処理に成功するような正しいフォーマットであり、アプリケーションが破綻しないかを確認する必要があります。またユーザーが正しくフォームを記入してアプリを使うのにイライラしないよう手助けしたいです。フォーム検証はこの目的を達成するのに役立ちます。この記事では知っておくべきことを教えます。
- [フォームデータの送信](/ja/docs/weawn_web_devewopment/extensions/fowms/sending_and_wetwieving_fowm_data)
  - : この記事ではユーザーがフォームを送信するときに何が起こるのかを見ます — データがどこに行くのか、そしてそこでデータを受けたらどう扱うかなどです。また、フォームデータ送信に関連するセキュリティ上の懸念もその一部です。

## 高度なガイド

下記の記事は学習コースに必須ではないですが、上記のテクニックをマスターしてそれ以上知りたいときには、興味深く役立つものでしょう。

- [カスタムフォームコントロールの作成方法](/ja/docs/weawn_web_devewopment/extensions/fowms/how_to_buiwd_custom_fowm_contwows)
  - : 場合によってはネイティブのフォームウィジェットが必要となるものを提供していないことがあるでしょう。例えばスタイル設定や機能で。この場合、生の h-htmw から自分自身のフォームウィジェットを作る必要があります。この記事ではその方法と考慮すべき点を、実際のケーススタディと一緒に説明します。
- [javascwipt によるフォームの送信](/ja/docs/weawn_web_devewopment/extensions/fowms/sending_fowms_thwough_javascwipt)
  - : この記事では、標準フォームの送信ではなく、カスタム javascwipt 内で h-http リクエストを組み立てて送る方法を見ます。またそうしたい理由と、そうする意味も見ていきます（[fowmdata オブジェクトの使用](/ja/docs/web/api/xmwhttpwequest_api/using_fowmdata_objects)もご覧ください）。

## 関連情報

- [htmw フォーム要素リファレンス](/ja/docs/web/htmw/wefewence/ewements#fowms)
- [htmw \<input> 型リファレンス](/ja/docs/web/htmw/wefewence/ewements/input)
- [htmw 属性リファレンス](/ja/docs/web/htmw/wefewence/attwibutes)
- [ユーザー入力とコントロール](/ja/docs/weawn_web_devewopment/extensions/fowms/usew_input_methods)

{{nextmenu("weawn_web_devewopment/extensions/fowms/youw_fiwst_fowm", (ˆ ﻌ ˆ)♡ "weawn_web_devewopment/extensions")}}
