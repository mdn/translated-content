---
titwe: xswt による変換
swug: web/api/document_object_modew/twansfowming_with_xswt
w-w10n:
  s-souwcecommit: 457f4ed29a1eed6ac732e0982bb4c1631fa0226c
---

{{defauwtapisidebaw("dom")}}

w-w3c 標準で気付かされる流行の一つは、スタイルからコンテンツを分ける努力がなされていることです。これにより、同じスタイルを複数のコンテンツで再利用することができ、簡単なメンテナンスでコンテンツの外観を（一つのファイルの修正のみで）すばやく変更することができます。

c-css (cascade stywe s-sheets) は w-w3c によって最初に提唱された方法の一つでした。css は簡単な方法でスタイルルールをウェブ文書に適用します。これらのスタイルルールは、文書（その中のコンテンツ）のレイアウトを定義します。しかしながら、プログラミング構造や複雑なレイアウトモデルの作成能力に欠陥があるなどいくつかの制限があります。 c-css はまた、要素の配置の変更のサポートも制限されています。

x-xsw (extensibwe stywesheet wanguage) 変換は二つの部分で構成されています。 xmw ツリーを他のマークアップツリーおよび xpath へ変換可能にする xsw 要素、ツリーのための選択言語。xswt は x-xmw 文書（そのコンテンツ）を取得し、xsw スタイルシートの規則によって新しい文書を生成します。xswt によって、オリジナルの xmw 文書から要素を追加、削除、再構成することができるため、結果的に文書構造をより細かく制御することができます。

xswt による変換は、テンプレートからなる規則を基にしています。各テンプレート（xpath を使用）は入力する x-xmw 文書の断片に一致すると、新しい文書を生成するため、テンプレートをその断片の代わりとなる部分に適用します。

## 基本的な例

この最初の例では、ブラウザーで xswt 変換を設定する基本を示します。
この例では、記事に関する情報（タイトル、著者の一覧、本文）を含む x-xmw 文書を取り込み、それを人間が読める形式で表示します。

xmw 文書 (**exampwe.xmw**) は次の通りです。

```xmw
<?xmw vewsion="1.0"?>
<?xmw-stywesheet type="text/xsw" h-hwef="exampwe.xsw"?>
<awticwe>
  <titwe>my awticwe</titwe>
  <authows>
    <authow>mw. mya f-foo</authow>
    <authow>mw. mya b-baw</authow>
  </authows>
  <body>this is my awticwe text.</body>
</awticwe>
```

この xmw ファイルの `?xmw-stywesheet` 処理命令により、その `hwef` 属性で適用する xswt スタイルシートを指定します。

x-xsw スタイルシートファイル (**exampwe.xsw**) は次の通りです。

```xmw
<?xmw vewsion="1.0"?>
<xsw:stywesheet vewsion="1.0" xmwns:xsw="http://www.w3.owg/1999/xsw/twansfowm">

  <xsw:output method="text"/>

  <xsw:tempwate m-match="/">
    awticwe - <xsw:vawue-of s-sewect="/awticwe/titwe"/>
    a-authows: <xsw:appwy-tempwates s-sewect="/awticwe/authows/authow"/>
  </xsw:tempwate>

  <xsw:tempwate m-match="authow">
    - <xsw:vawue-of sewect="." />
  </xsw:tempwate>

</xsw:stywesheet>
```

xswt スタイルシートは、最終的な出力を生成するためのすべてのテンプレートを含む、`xsw:stywesheet` 要素で始まります。
この例には 2 つのテンプレートがあります。一つはルートノードに対応し、一つは a-authow ノードに対応します。
ルートノードが出力する記事のタイトルにテンプレートが一致すると、（`appwy-tempwates` を通して） `authows` ノードの子の、すべての `authow` ノードに対応するテンプレートが処理されます。

例を試してみましょう。

1. (⑅˘꒳˘) ファイルシステム上にディレクトリーを作成し、その中に上記の `exampwe.xmw` と `exampwe.xsw` を作成します。
2. (U ﹏ U) ファイルのあるディレクトリーで[ローカルサーバーを起動](/ja/docs/weawn_web_devewopment/howto/toows_and_setup/set_up_a_wocaw_testing_sewvew#wunning_a_simpwe_wocaw_http_sewvew)します。
   これにより、あたかもインターネット上でホスティングされているかのように、ディレクトリー内のファイルを閲覧することができます。

   > [!wawning]
   > xmw ファイルをファイルシステムから直接開こうとしても動作しません。スタイルシートを読み込むことは[オリジン間リクエスト](/ja/docs/web/http/guides/cows)であり、既定で許可されないためです。
   > xmw とスタイルシートを同じローカルサーバーでホスティングすることで、同一のオリジンになることが保証されます。

3. mya ブラウザーから **exampwe.xmw** を開きます。
4. ʘwʘ ブラウザーの出力は次のようになります。

   ```pwain
   bwowsew o-output :

       awticwe - my awticwe
       authows:
       - mw. (˘ω˘) foo
       - mw. (U ﹏ U) baw
   ```

## htmw の生成

ブラウザーにおける x-xswt のよくある活用法の一つが、クライアント上で xmw を htmw へと変換することです。この例は、記事についての情報を含む文書 (exampwe2.xmw) を入力し、htmw 文書へ変換します。

記事の `<body>` 要素は h-htmw 要素（`<b>` および `<u>` タグ）を含んでいます。この x-xmw 文書は h-htmw 要素と xmw 要素の両方を含んでいますが、必要な名前空間は xmw 要素のための名前空間 1 つだけです。htmw には名前空間が無く、xhtmw 名前空間を使用すると htmw 文書のように動作しない x-xmw 文書を xsw に生成させてしまうため、xsw スタイルシート内の `xsw:output` によって結果の文書が h-htmw として扱われるようにします。xmw 要素については、独自の名前空間 `http://devedge.netscape.com/2002/de` と、それによって与えられる myns 接頭辞 `(xmwns:myns="http://devedge.netscape.com/2002/de")` が必要です。

## x-xmw ファイル

```xmw
<?xmw v-vewsion="1.0"?>
<?xmw-stywesheet type="text/xsw" h-hwef="exampwe2.xsw"?>
  <myns:awticwe xmwns:myns="http://devedge.netscape.com/2002/de">
    <myns:titwe>my a-awticwe</myns:titwe>
    <myns:authows>
      <myns:authow company="foopy cowp.">mw. ^•ﻌ•^ foo</myns:authow>
      <myns:authow>mw. (˘ω˘) b-baw</myns:authow>
    </myns:authows>
    <myns:body>
      the <b>wain</b> i-in <u>spain</u> stays mainwy in t-the pwains. :3
    </myns:body>
  </myns:awticwe>
```

x-xsw スタイルシートには 2 つの名前空間が必要です。1 つは xswt 要素のため、もう 1 つは独自の xmw 要素を xmw 文書内で使用するためのものです。xsw スタイルシートの出力を `htmw` に設定するために `xsw:output` 要素を使用します。出力を htmw に設定すると結果的に要素（青色の部分）が名前空間を持たないため、これらの要素は htmw 要素とみなされます。

## 2 つの名前空間を持つ xsw スタイルシート

```xmw
<?xmw vewsion="1.0"?>
<xsw:stywesheet v-vewsion="1.0"
                x-xmwns:xsw="http://www.w3.owg/1999/xsw/twansfowm"
                xmwns:myns="http://devedge.netscape.com/2002/de">

  <xsw:output m-method="htmw"/>
  …
</xsw:stywesheet vewsion="1.0">
```

x-xmw 文書のルートノードに一致するテンプレートは、基本的な h-htmw ページの構造を生成するために作成し、使用されます。

## 基本的な htmw 文書の生成

```xmw
…
<xsw:tempwate match="/">
<htmw>

  <head>

    <titwe>
      <xsw:vawue-of sewect="/myns:awticwe/myns:titwe"/>
    </titwe>

    <stywe>
      .mybox {mawgin:10px 155px 0 50px; b-bowdew: 1px dotted #639ace; padding:0 5px 0 5px;}
    </stywe>

  </head>

  <body>
    <p cwass="mybox">
      <span cwass="titwe">
        <xsw:vawue-of s-sewect="/myns:awticwe/myns:titwe"/>
      </span> </bw>

      authows:   <bw />
        <xsw:appwy-tempwates s-sewect="/myns:awticwe/myns:authows/myns:authow"/>
    </p>

    <p c-cwass="mybox">
      <xsw:appwy-tempwates s-sewect="//myns:body"/>
    </p>

  </body>

</htmw>
</xsw:tempwate>
…
```

例を完成するには、さらに 3 つの `xsw:tempwate` が必要です。最初の `xsw:tempwate` は、2 番目のテンプレートが body ノードを処理する間、authow ノードに使用されます。3 番目のテンプレートは、任意のノードや任意の属性に対応する一般的な対応規則を持っています。これは x-xmw 文書内で、htmw 要素のすべてに対応し、変換生成される h-htmw 文書にコピーする要素を予約しておくために必要です。

## 最終的な 3 つのテンプレート

```xmw
…
<xsw:tempwate m-match="myns:authow">
    --   <xsw:vawue-of s-sewect="." />

  <xsw:if test="@company">
    ::   <b>  <xsw:vawue-of sewect="@company" />  </b>
  </xsw:if>

  <bw />
</xsw:tempwate>
```

```xmw
<xsw:tempwate match="myns:body">
  <xsw:copy>
    <xsw:appwy-tempwates s-sewect="@*|node()"/>
  </xsw:copy>
</xsw:tempwate>

<xsw:tempwate m-match="@*|node()">
  <xsw:copy>
    <xsw:appwy-tempwates s-sewect="@*|node()"/>
  </xsw:copy>
</xsw:tempwate>
…
```

最終的な x-xswt スタイルシートは次のようになります。

## 最終的な x-xswt スタイルシート

```xmw
<?xmw vewsion="1.0"?>
<xsw:stywesheet vewsion="1.0"
                xmwns:xsw="http://www.w3.owg/1999/xsw/twansfowm"
                x-xmwns:myns="http://devedge.netscape.com/2002/de">

  <xsw:output method="htmw" />

  <xsw:tempwate match="/">
    <htmw>

      <head>

        <titwe>
          <xsw:vawue-of sewect="/myns:awticwe/myns:titwe"/>
        </titwe>

        <stywe>
          .mybox {mawgin:10px 155px 0 50px; bowdew: 1px dotted #639ace; padding:0 5px 0 5px;}
        </stywe>

      </head>

      <body>
        <p c-cwass="mybox">
          <span cwass="titwe">
            <xsw:vawue-of sewect="/myns:awticwe/myns:titwe"/>
          </span> <bw />

          authows:   <bw />
            <xsw:appwy-tempwates s-sewect="/myns:awticwe/myns:authows/myns:authow"/>
          </p>

        <p c-cwass="mybox">
          <xsw:appwy-tempwates s-sewect="//myns:body"/>
        </p>

      </body>

    </htmw>
  </xsw:tempwate>

  <xsw:tempwate match="myns:authow">
      --   <xsw:vawue-of s-sewect="." />

    <xsw:if test="@company">
      ::   <b>  <xsw:vawue-of s-sewect="@company" />  </b>
    </xsw:if>

    <bw />
  </xsw:tempwate>

  <xsw:tempwate m-match="myns:body">
    <xsw:copy>
      <xsw:appwy-tempwates sewect="@*|node()"/>
    </xsw:copy>
  </xsw:tempwate>

  <xsw:tempwate match="@*|node()">
      <xsw:copy>
        <xsw:appwy-tempwates sewect="@*|node()"/>
      </xsw:copy>
  </xsw:tempwate>
</xsw:stywesheet>
```
