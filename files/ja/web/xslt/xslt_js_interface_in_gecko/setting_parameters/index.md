---
title: XSLT - パラメータの設定
slug: Web/XSLT/XSLT_JS_interface_in_Gecko/Setting_Parameters
---

## パラメータの設定

プリコードされた .xsl ファイルと .xml ファイルを使用して変換を実行するのは非常に便利ですが、JavaScript から .xsl ファイルを構成する方がさらに便利です。たとえば、JavaScript と XSLT を使用して XML データをソートして表示することができます。並べ替えは昇順ソートと降順ソートの間で交互に行わなければなりません。

XSLT は `xsl:stylesheet` 要素の子である `xsl:param` 要素を提供します。{{domxref('XSLTProcessor')}} は、これらのパラメータと対話する 3 つの JavaScript メソッドを提供します：{{domxref('XSLTProcessor.setParameter()')}}、{{domxref('XSLTProcessor.getParameter()')}} および {{domxref('XSLTProcessor.removeParameter()')}} です。それらはすべて、最初の引数として `xsl:param` の名前空間 URI をとります (通常 param はデフォルトの名前空間に入るため、`null` を渡すだけで十分です)。`xsl:param` のローカル名は 2 番目の引数です。setParameter には 3 番目の引数、つまりパラメータが設定される値が必要です。

**Figure 7 : パラメータ**

```js
/* XSLT:

<xsl:param name="myOrder" />

*/

// JavaScript:

var sortVal = xsltProcessor.getParameter(null, "myOrder");

if (sortVal == "" || sortVal == "descending")
  xsltProcessor.setParameter(null, "myOrder", "ascending");
else xsltProcessor.setParameter(null, "myOrder", "descending");
```
