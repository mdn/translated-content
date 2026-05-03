---
title: HTML 属性ページテンプレート
slug: MDN/Writing_guidelines/Page_structures/Page_types/HTML_attribute_page_template
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

HTML属性は、特定の要素にのみ適用される**要素固有の属性**（例：`<input type="file">` の `accept` 属性）と、どの HTML 要素にも使用できる**グローバル属性**（例：`class`、`id`）の 2 つのカテゴリーに分類されます。前者は `HTML/Reference/Attributes` に、後者は `HTML/Reference/Global_attributes` に配置すべきです。

なお、要素固有の属性のほとんどは、その要素の参照に記載されている属性リストだけで動作を十分に記述できる場合、個別の記事を作成する必要はありません。
その属性に独自の例を挙げるほど微妙なニュアンスがある場合、またはグローバル属性である場合にのみ、記事を作成してください。

> [!NOTE]
> _この説明文全体を削除してから公開してください。_
>
> **訳注:** このテンプレートは翻訳記事用です。新たな記事を執筆する場合は、英語版を参照してください。日本語の単独記事を立項することはできません。）
>
> ---
>
> **ページのフロントマター:**
>
> ページ上部のフロントマターは「ページのメタデータ」を定義するために使用します。
> 値は、個々の要素に応じて適切に書き換える必要があります。
>
> ```md
> ---
> title: name-of-the-attribute
> slug: Web/HTML/Reference/Global_attributes/name-of-the-attribute
> l10n:
>   sourceCommit: 翻訳元コミットID
> ---
> ```
>
> - **title**
>   - : タイトルの見出しで、ページの最上部に表示されます。
>     書式は `name-of-the-attribute` (just the attribute name itself).
>     例えば、[`class`](/ja/docs/Web/HTML/Reference/Global_attributes/class) 属性は _title_ が `class` となります。
> - **slug**
>   - : `https://developer.mozilla.org/ja/docs/` の後にくる URL の末尾です。
>     これは `Web/HTML/Reference/Global_attributes/name-of-the-attribute` または `Web/HTML/Reference/Attributes/name-of-the-attribute` のような形式となり、属性名は小文字で書きます。
>     例えば、[`class`](/ja/docs/Web/HTML/Reference/Global_attributes/class) 属性の _slug_ は `Web/HTML/Reference/Global_attributes/class` です。
> - **sourceCommit**
>   - : （翻訳記事のみ）この記事の翻訳元となる英語版記事を GitHub にコミットした際のコミット ID を記述します。 GitHub 上で英語版記事のコミット ID を確認してください。
>
> ---
>
> **ページ先頭のマクロ**
>
> コンテンツセクションの先頭、ページヘッダーの直後に複数のマクロが現れます。
> **訳注:** 英語版では以下のマクロは自動的に更新されますが、翻訳記事では更新されませんので、翻訳時に手動で英語版のマクロに合わせてください。
>
> - `\{{SeeCompatTable}}` — これは **これは実験的な機能です。** のバナーを生成し、この技術が[実験的](/ja/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#実験的)であることを示します。
>   実験的なもので、その技術が Firefox の設定で隠されている場合は、 [Firefox での実験的な機能](/ja/docs/Mozilla/Firefox/Experimental_features) ページにもそのためのエントリーを記入する必要があります。
> - `\{{Deprecated_Header}}` — これは **非推奨** バナーを生成し、この技術の使用を[避けるべき](/ja/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#非推奨)であることを示します。
> - `\{{Non-standard_Header}}` — これは **標準外** バナーを生成し、この機能がどの仕様書にもないことを示します。
>
> 詳しくは「[機能の状態を追加または更新する方法](/ja/docs/MDN/Writing_guidelines/Page_structures/Feature_status#機能の状態を追加または更新する方法)」を参照してください。
>
> **実験的**、**非推奨**、**標準外** の各バナーの例は、このメモブロックの直後に表示しています。
>
> _公開する前に、この説明文全体を削除することを忘れないでください。_
>
> {{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}
>
> まず、その属性と、その使い方について読者に説明します。
> 例えば、**`name-of-the-attribute`** [グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes) describes or manipulates [insert usage description].

## 試してみましょう

この節は `InteractiveExample` マクロによって生成されます。
これには「試してみましょう」という節の見出しとコードエディターが含まれます。
詳細は、執筆ガイドラインの[インタラクティブサンプル](/ja/docs/MDN/Writing_guidelines/Page_structures/Code_examples#インタラクティブサンプル)の節を参照してください。
記載する場合は、その後に 1～2 段落の簡単な説明を加え、実装された動作について説明してください。必要に応じて、JavaScript、CSS、または他の属性との連携についても触れてください。内容は簡潔にまとめ、ドキュメント全体の重複は避けることができます。必要な情報は外部リンクで参照するようにしてください。繰り返しになりますが、 `class` 属性のページをご参照ください。

## 値

該当する場合、その属性の取り得る値の一覧を記載してください（該当しない場合は削除してください）。デフォルト値がある場合はそれを含め、それぞれの値について簡単な説明を記載してください。

- `"value1"`
  - : 値 1 の説明。 これがデフォルト値です。
- `"value2"`
  - : 値 2 の説明。
- `"value3"`
  - : 値 3 の説明。

## アクセシビリティ

この要素の使用に伴うアクセシビリティ上の懸念事項がある場合は警告し、その回避方法を説明してください。記載すべきものがない場合は、この節を削除してください。

## 例

この属性に関連する例と、実際の HTML のコンテキストでこの属性をどのように使用するかを示します。
ページに例が 1 つしか含まれていない場合でも、複数形の「例」を使用している点にご注意ください。

### 説明的な見出し

それぞれの例には、その例を説明する H3 見出し (`###`) がなければなりません。見出しは例が何を行っているかを説明するものであるべきです。例えば、「単純な例」というのは例について何も説明していないので、良い見出しとは言えません。見出しは簡潔であるべきです。より詳しい説明をする場合は、見出しの後の段落を使用してください。

詳しくは、[サンプルコード](/ja/docs/MDN/Writing_guidelines/Page_structures/Code_examples)を追加する方法のガイドをご覧ください。

> [!NOTE]
> 他のページで紹介されている例にリンクしたい場合もあるでしょう。
>
> **シナリオ 1:** このページにいくつかの例があり、別のページにさらにいくつかの例がある場合。
>
> このページのそれぞれの例に H3 見出し (`###`) を記載し、最後に H3 見出し (`###`) に「その他の例」というテキストを入れ、その下に他のページの例へのリンクを貼ることができます。例えば次のようにします。
>
> ```md
> ## 例
>
> ### `for` 属性の使用
>
> `for` 属性の例
>
> ### その他の例
>
> 他のページのその他の例へのリンク
> ```
>
> **シナリオ 2:** このページには何も例がなく、他のページに*だけ*ある場合。
>
> H3 の見出しは追加せず、 H2 の見出し「例」の下に直接リンクを追加してください。例えば次のようにします。
>
> ```md
> ## 例
>
> この属性の例は、[`for` 属性のページ](https://example.org/)を参照してください。
> ```

## 仕様書

`\{{Specifications}}`

_このマクロを使用するには、マークダウンファイルの逆引用符とバックスラッシュを除去してください。_

## ブラウザーの互換性

`\{{Compat}}`

_このマクロを使用するには、マークダウンファイルの逆引用符とバックスラッシュを除去してください。_

## 関連情報

現在の要素に関連するリファレンスページやガイドへのリンクを記述してください。その他のガイドラインについては、スタイル設定ガイドの[「関連情報」の節](/ja/docs/MDN/Writing_guidelines/Writing_style_guide#関連情報)を参照してください。

- リンク1
- リンク2
- 外部リンク (年)
