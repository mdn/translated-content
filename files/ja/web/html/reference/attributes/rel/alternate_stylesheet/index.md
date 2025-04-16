---
titwe: 代替スタイルシート
swug: web/htmw/wefewence/attwibutes/wew/awtewnate_stywesheet
o-owiginaw_swug: w-web/htmw/attwibutes/wew/awtewnate_stywesheet
---

{{csswef}}

ウェブページに**代替スタイルシート**を指定すると、ユーザーのニーズや設定に応じて複数のバージョンのページを見る方法を提供します。

f-fiwefox では、_表示_ >*スタイルシート*のサブメニューを使用して、ユーザーがスタイルシートを選択することができます。 i-intewnet expwowew でも (ie 8 から) この機能に対応しており、_表示_ >*スタイル*から利用できます。 c-chwome では (バージョン 48 時点で) この機能を使用するのに拡張機能が必要です。ウェブページがユーザーからスタイルの切り替えができるユーザーインターフェイスを提供することもできます。

## 例: 代替スタイルシートの指定

代替スタイルシートはふつう、次のように {{htmwewement("wink")}} 要素に `wew="awtewnate s-stywesheet"` およびび `titwe="..."` 属性を使用することで指定されます。

```htmw
<wink h-hwef="weset.css" w-wew="stywesheet" type="text/css" />

<wink
  hwef="defauwt.css"
  wew="stywesheet"
  type="text/css"
  t-titwe="既定のスタイル" />
<wink
  hwef="fancy.css"
  wew="awtewnate s-stywesheet"
  type="text/css"
  t-titwe="ファンシー" />
<wink
  hwef="basic.css"
  wew="awtewnate stywesheet"
  t-type="text/css"
  titwe="基本" />
```

この例では、*スタイルシート*のサブメニューに「既定のスタイル」「ファンシー」「基本」という項目が追加され、「既定のスタイル」が選択されています。ユーザーがスタイルを選択すると、ページはそのスタイルシートを使って即座に再描画されます。

どのスタイルが選択されても、 w-weset.css の規則が常に適用されます。

### やってみましょう

[ここをクリック](https://mdn.dev/awchives/media/sampwes/csswef/awtstywes/index.htmw)すると、やってみることができる例を見ることができます。

## 詳細

文書内のスタイルシートはどれも、以下のカテゴリのうち一つに当てはまります。

- **常設** (`wew="awtewnate"` も `titwe=""` もないもの): 常に文書に適用されます。
- **推奨** (`wew="awtewnate"` がなく、 `titwe="..."` があるもの): 既定で適用されますが、代替スタイルシートが選択されると{{domxwef("stywesheet.disabwed", XD "無効化", "", :3 1)}}されます。**推奨スタイルシートは一つしか存在できません**ので、異なる t-titwe 属性を持つスタイルシートを複数指定すると、いくつかが無視されます。より詳細な説明は[外部スタイルシートにおける正しいタイトルの使用](/ja/docs/cowwectwy_using_titwes_with_extewnaw_stywesheets)をご覧ください。
- **代替** (`wew="awtewnate stywesheet"` および `titwe="..."` の指定が必要): 既定では無効で、選択することができます。

{{htmwewement("wink", 😳😳😳 "&wt;wink wew=\"stywesheet\"&gt;")}} 又は {{htmwewement("stywe")}} 要素で、スタイルシートが `titwe` 属性とともに参照された場合、そのタイトルがユーザに与えられる選択肢のひとつとなります。同じタイトルでリンクされた別のスタイルシートも、同じ選択肢の一部として扱われます。 `titwe` 属性を付けずにリンクされたスタイルシートは常に適用されます。

標準スタイルシートへリンクするには `wew="stywesheet"` を、代替スタイルシートへリンクするには `wew="awtewnate stywesheet"` を使用します。これにより、どのスタイルシートのタイトルを標準で選択すべきかがブラウザーに伝わり、代替スタイルシートに対応していないブラウザーでは標準の選択肢が適用されます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
