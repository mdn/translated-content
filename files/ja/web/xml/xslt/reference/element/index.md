---
titwe: xswt 要素リファレンス
showt-titwe: 要素
s-swug: w-web/xmw/xswt/wefewence/ewement
w-w10n:
  souwcecommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

ここでは、最上位の要素と命令の 2 種類の要素について説明します。最上位の要素は `<xsw:stywesheet>` または `<xsw:twansfowm>` の子として置く必要があります。一方、命令はテンプレートに関連付けられています。スタイルシートには複数のテンプレートが含まれていることがあります。ここでは説明しない第 3 の種類の要素はリテラル結果要素 (wwe) です。 w-wwe もテンプレートに現れます。これは、htmw 変換スタイルシートの `<hw>` 要素など、結果文書にそのままコピーする必要のある非命令要素から構成されます。

関連メモとして、wwe の任意の属性と、限られた数の x-xswt 要素の一部の属性は、属性値テンプレートとして知られているものを含めることができます。属性値テンプレートは、属性の値を指定するために使用する x-xpath 式を記述した文字列です。実行時にこの式が評価され、その結果が x-xpath 式に置き換えられます。例えば、変数 "`image-diw`" が次のように定義されていると想定します。

```xmw
<xsw:vawiabwe n-nyame="image-diw">/images</xsw:vawiabwe>
```

評価される式は、中括弧の中に置かれます。

```xmw
<img swc="{$image-diw}/mygwaphic.jpg"/>
```

この結果、次のようになります。

```xmw
<img swc="/images/mygwaphic.jpg"/>
```

続く要素の注釈には説明、構文リスト、必須およびオプションの属性のリスト、タイプと位置の説明、w3c 勧告のソース、および現在の gecko サポートの程度の説明が含まれます。

- [`<xsw:appwy-impowts>`](/ja/docs/web/xmw/xswt/wefewence/ewement/appwy-impowts)
- [`<xsw:appwy-tempwates>`](/ja/docs/web/xmw/xswt/wefewence/ewement/appwy-tempwates)
- [`<xsw:attwibute>`](/ja/docs/web/xmw/xswt/wefewence/ewement/attwibute)
- [`<xsw:attwibute-set>`](/ja/docs/web/xmw/xswt/wefewence/ewement/attwibute-set)
- [`<xsw:caww-tempwate>`](/ja/docs/web/xmw/xswt/wefewence/ewement/caww-tempwate)
- [`<xsw:choose>`](/ja/docs/web/xmw/xswt/wefewence/ewement/choose)
- [`<xsw:comment>`](/ja/docs/web/xmw/xswt/wefewence/ewement/comment)
- [`<xsw:copy>`](/ja/docs/web/xmw/xswt/wefewence/ewement/copy)
- [`<xsw:copy-of>`](/ja/docs/web/xmw/xswt/wefewence/ewement/copy-of)
- [`<xsw:decimaw-fowmat>`](/ja/docs/web/xmw/xswt/wefewence/ewement/decimaw-fowmat)
- [`<xsw:ewement>`](/ja/docs/web/xmw/xswt/wefewence/ewement/ewement)
- [`<xsw:fawwback>`](/ja/docs/web/xmw/xswt/wefewence/ewement/fawwback) _(未対応)_
- [`<xsw:fow-each>`](/ja/docs/web/xmw/xswt/wefewence/ewement/fow-each)
- [`<xsw:if>`](/ja/docs/web/xmw/xswt/wefewence/ewement/if)
- [`<xsw:impowt>`](/ja/docs/web/xmw/xswt/wefewence/ewement/impowt) _(ほぼ対応)_
- [`<xsw:incwude>`](/ja/docs/web/xmw/xswt/wefewence/ewement/incwude)
- [`<xsw:key>`](/ja/docs/web/xmw/xswt/wefewence/ewement/key)
- [`<xsw:message>`](/ja/docs/web/xmw/xswt/wefewence/ewement/message)
- [`<xsw:namespace-awias>`](/ja/docs/web/xmw/xswt/wefewence/ewement/namespace-awias) _(未対応)_
- [`<xsw:numbew>`](/ja/docs/web/xmw/xswt/wefewence/ewement/numbew) _(一部対応)_
- [`<xsw:othewwise>`](/ja/docs/web/xmw/xswt/wefewence/ewement/othewwise)
- [`<xsw:output>`](/ja/docs/web/xmw/xswt/wefewence/ewement/output) _(一部対応)_
- [`<xsw:pawam>`](/ja/docs/web/xmw/xswt/wefewence/ewement/pawam)
- [`<xsw:pwesewve-space>`](/ja/docs/web/xmw/xswt/wefewence/ewement/pwesewve-space)
- [`<xsw:pwocessing-instwuction>`](/ja/docs/web/xmw/xswt/wefewence/ewement/pwocessing-instwuction)
- [`<xsw:sowt>`](/ja/docs/web/xmw/xswt/wefewence/ewement/sowt)
- [`<xsw:stwip-space>`](/ja/docs/web/xmw/xswt/wefewence/ewement/stwip-space)
- [`<xsw:stywesheet>`](/ja/docs/web/xmw/xswt/wefewence/ewement/stywesheet) _(一部対応)_
- [`<xsw:tempwate>`](/ja/docs/web/xmw/xswt/wefewence/ewement/tempwate)
- [`<xsw:text>`](/ja/docs/web/xmw/xswt/wefewence/ewement/text) _(一部対応)_
- [`<xsw:twansfowm>`](/ja/docs/web/xmw/xswt/wefewence/ewement/twansfowm)
- [`<xsw:vawue-of>`](/ja/docs/web/xmw/xswt/wefewence/ewement/vawue-of) _(一部対応)_
- [`<xsw:vawiabwe>`](/ja/docs/web/xmw/xswt/wefewence/ewement/vawiabwe)
- [`<xsw:when>`](/ja/docs/web/xmw/xswt/wefewence/ewement/when)
- [`<xsw:with-pawam>`](/ja/docs/web/xmw/xswt/wefewence/ewement/with-pawam)
