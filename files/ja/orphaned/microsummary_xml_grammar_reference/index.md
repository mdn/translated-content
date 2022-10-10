---
title: Microsummary XML grammar reference
slug: orphaned/Microsummary_XML_grammar_reference
original_slug: Microsummary_XML_grammar_reference
---

## はじめに

マイクロサマリジェネレータとは、ウェブページから特定の情報を抜き出し、そのページの内容に基づいてそのタイトルが変わるブックマークとして概要を表示するための方法を記述した XML 文書のことです。

この記事では各要素とその属性について説明しつつ、マイクロサマリジェネレータの組み立てに使用する XML の文法に関する詳細情報を提供します。マイクロサマリの作成方法についての入門記事は [マイクロサマリの作成](ja/Creating_a_Microsummary) です。

## 例

[マイクロサマリの作成](ja/Creating_a_Microsummary) のチュートリアルで作成したマイクロサマリジェネレータは次のものです。

```
<?xml version="1.0" encoding="UTF-8"?>
<generator xmlns="http://www.mozilla.org/microsummaries/0.1" name="Firefox Download Count">
  <template>
    <transform xmlns="http://www.w3.org/1999/XSL/Transform" version="1.0">
      <output method="text"/>
      <template match="/">
        <value-of select="id('download-count')"/>
        <text> Fx downloads</text>
      </template>
    </transform>
  </template>
  <pages>
    <include>http://(www\.)?spreadfirefox\.com/(index\.php)?</include>
  </pages>
</generator>
```

## 名前空間

マイクロサマリジェネレータの XML 文書で使用する名前空間 URI は次のものです。

```
http://www.mozilla.org/microsummaries/0.1
```

マイクロサマリジェネレータ文書におけるすべての要素はこの名前空間内になければなりません。ただし [`<template>`](#.3Ctemplate.3E_.E8.A6.81.E7.B4.A0) 要素の子孫は例外であり、次の XSLT 名前空間内になければなりません。

```
http://www.w3.org/1999/XSL/Transform
```

## `<generator>` 要素

`<generator>` 要素は全マイクロサマリジェネレータのルートタグであり、ジェネレータを記述する XML コードの残りを格納していなければなりません。

**属性：**

- `name`（必須）
  - : ジェネレータによって作成されるマイクロサマリに付ける、説明的かつ人間が読める名前。
- `uri`（オプション）
  - : ジェネレータを一意的に識別する妥当な URI。Firefox のコードおよび拡張機能によって動的に作成されるジェネレータにのみ該当。`nsSidebar::addMicrosummaryGenerator` を通じてウェブからインストールされるジェネレータはそれがダウンロードされたリモート URL で識別される。また、そのような動作のために Firefox はこの属性の値を無視する。

**子要素：**

- [`<template>`](#.3Ctemplate.3E_.E8.A6.81.E7.B4.A0)（必須）
  - : ページをマイクロサマリに変換する方法を定義する。
- [`<pages>`](#.3Cpages.3E_.E8.A6.81.E7.B4.A0)（必須）
  - : ジェネレータがサマリを作成できるページの集合を指定する。
- [`<update>`](#.3Cupdate.3E_.E8.A6.81.E7.B4.A0)（オプション）
  - : Firefox がマイクロサマリを更新する頻度を指定する。

## `<template>` 要素

`<template>` 要素にはウェブページをマイクロサマリに変換する XSLT スタイルシートを格納します。

**属性：**

_なし。_

**子要素：**

- `<stylesheet>` または `<transform>`（必須）
  - : 変換を行う XSLT スタイルシート。

各 [XSLT](ja/XSLT) について、`<stylesheet>` あるいは `<transform>` タグのどちらかを用いたスタイルシート子要素を指定します。これらはどちらも同じ機能を果たします。

> **メモ:** \<template> 要素は必ずマイクロサマリ名前空間 (`http://www.mozilla.org/microsummaries/0.1`) 内になければなりませんが、その `<stylesheet>`/`<transform>` 子要素は必ず XSLT 名前空間 (`http://www.w3.org/1999/XSL/Transform`) 内になければなりません。

## `<pages>` 要素

`<pages>` 要素はジェネレータがサマリを作成できるページの集合を指定します。

**属性：**

_なし。_

**子要素：**

- [`<include>`](#.3Cinclude.3E_.E8.A6.81.E7.B4.A0)（オプション）
  - : ジェネレータがサマリを作成できるページの URL にマッチする正規表現。
- [`<exclude>`](#.3Cexclude.3E_.E8.A6.81.E7.B4.A0)（オプション）
  - : ジェネレータがサマリを作成できないページの URL にマッチする正規表現。

`<pages>` 要素にはゼロ個以上の `<include>` および `<exclude>` 子要素を含めることができます。そのそれぞれは JavaScript と互換性のある妥当な正規表現を含んでいなければなりません。また、他のどんな要素も含んではなりません。属性は全くありません。

ページからサマリを作成できるかどうかを決定するためにジェネレータがチェックされる際、子要素で指定された正規表現がそのページの URL に対して評価されます。少なくとも 1 つの `<include>` の正規表現がページの URL にマッチし、かつ `<exclude>` の正規表現がページの URL にマッチしなかった場合、ジェネレータはそのページのサマリを作成可能であると判断されます。

`<pages>` 要素内に子要素が現れる順番には特に重要ではありません。子要素のタグとその中の正規表現の間のホワイトスペースも特に重要ではありません。つまり、それは正規表現の一部とは見なされず、その正規表現の評価には影響を及ぼしません。

次の例では `www.example.com` のウェブサイトにおいて `about.html` という名前のページ以外の全ページのサマリを作成できるジェネレータができます。

```
<pages>
  <include>
    ^http://www\.example\.com/
  </include>
  <exclude>/about\.html</exclude>
</pages>
```

> **メモ:** マッチさせたい URL をただ含んでいるだけの URL にマッチしてしまわないようにするためにも、ページの URL の先頭にマッチさせたい正規表現はキャレット (^) から始めなければなりません。例えば、`http://www\.example\.com/` という正規表現は `http://www.example.com/` という URL にも `http://www.evil.com/http://www.example.com/` という URL にもマッチします。しかし、`^http://www\.example\.com/` という正規表現は前者の URL にしかマッチしません。

ジェネレータにとって妥当な正規表現の構文の詳細については [Core_JavaScript_1.5_Reference:Global_Objects:RegExp](ja/Core_JavaScript_1.5_Reference/Global_Objects/RegExp) のリファレンスを参照してください。また、[マイクロサマリジェネレータ用正規表現の作成](ja/Creating_regular_expressions_for_a_microsummary_generator) では URL にマッチする正規表現の書き方を一歩一歩解説しています。

## `<include>` 要素

`<include>` 要素はジェネレータがサマリを作成できるページの集合を指定します。これは `<pages>` 要素の子でなければなりません。また、JavaScript 互換の正規表現を含んでいなければなりません。

この要素の使用についての詳細は [\<pages> 要素](#.3Cpages.3E_.E8.A6.81.E7.B4.A0) を参照してください。

## `<exclude>` 要素

`<exclude>` 要素はジェネレータがサマリを作成できないページの集合を指定します。これは `<pages>` 要素の子でなければなりません。また、JavaScript 互換の正規表現を含んでいなければなりません。

この要素の使用についての詳細は [\<pages> 要素](#.3Cpages.3E_.E8.A6.81.E7.B4.A0) を参照してください。

## `<update>` 要素

オプションである `<update>` 要素はジェネレータによって作成されるマイクロサマリを Firefox が更新する頻度を指定します。この要素には絶対的な更新間隔を指定することも、サマリを作成するページの内容に基づいた一連の条件付きの間隔を指定することもできます。

**属性：**

- `interval`（オプション）
  - : 更新間で経過しなければならない絶対的な時間間隔。単位は分。

**子要素：**

- [`<condition>`](#.3Ccondition.3E_.E8.A6.81.E7.B4.A0)（オプション）
  - : XPath の論理式、およびその式が true に評価された場合に更新間で経過しなければならない分単位の条件付き時間間隔。

`interval` 属性は絶対的な間隔を分単位で定義します。その値は 1 以上の数でなければなりません。あまり実用的ではないでしょうが、小数値（例：5.5 分）も使えます。

`<update>` 要素には `<condition>` 子要素をいくつでも含めることができます。

以下のルールに従って、ジェネレータが作成するマイクロサマリにどの間隔を適用すべきかを Firefox は決定します。

1. Firefox は文書での順番どおりに各 `<condition>` 子要素を処理する。各要素について、サマリを作成するページに対してその要素の XPath の論理式を Firefox は評価する。その式が `true` に評価されれば Firefox はその要素の間隔を適用し、子要素の処理を停止する。このようにして、最初にマッチした `<condition>` によって更新間隔が決まる。
2. `<condition>` 子要素がない場合、あるいは `true` に評価される式がない場合、Firefox は `<update>` 要素の `interval` 属性の値を適用する。
3. `<update>` 要素に `interval` 属性が含まれていない場合、Firefox は browser.microsummary.updateInterval という設定項目で指定された間隔を適用する。
4. その設定項目が未設定の場合、Firefox はそのデフォルトの更新間隔である 30 分を適用する。

**注意：**

- この要素で指定された更新間隔が絶対的なものか条件付きのものかにかかわらず、Firefox は 1 分で 1 回より多くマイクロサマリを更新することはない。
- Firefox は期限切れのマイクロサマリを 15 秒ごとにチェックするため、指示された間隔から 15 秒後にマイクロサマリの更新が行われることもあり得る。
- マイクロサマリ更新の際、Firefox はブラウザキャッシュを尊重するため、キャッシュにそのページのまだ新しいコピーが含まれていればそのマイクロサマリを更新するためにページをリロードするということはない。

## `<condition>` 要素

オプションである `<condition>` 要素は XPath の論理式、およびサマリを作成するページに対してその式が true に評価された場合に更新間で経過しなければならない分単位の条件付き時間間隔を指定します。`<update>` 要素の子でなければなりません。

**属性：**

- `expression`（必須）
  - : サマリを作成するページに対して評価する XPath の論理式。
- `interval`（必須）
  - : 式が `true` に評価された場合に更新間で経過しなければならない時間間隔。単位は分。

**子要素：**

_なし。_

この要素の使用についての詳細は [`<update>` 要素](#.3Cupdate.3E_.E8.A6.81.E7.B4.A0) を参照してください。

## 関連項目

- [マイクロサマリの作成](ja/Creating_a_Microsummary)
- [XSLT](ja/XSLT)
