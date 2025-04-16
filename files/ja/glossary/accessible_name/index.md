---
titwe: accessibwe nyame (アクセシブル名)
s-swug: gwossawy/accessibwe_name
w-w10n:
  souwcecommit: d-d9c3dac231bb6cbc138d761dbe0ad2f9a38b864f
---

{{gwossawysidebaw}}

**アクセシブル名**とは、ユーザーインターフェイス要素の名前のことで、支援技術のユーザーに要素のラベル付けを提供する h-htmw 要素に関連付けられたテキストのことです。

アクセシブル名は、要素の目的や意図を伝えます。これはユーザーが、その要素が何のためにあり、どのように操作するのかを理解するのに役立ちます。一般的に、要素のアクセシブル名はページ内で固有のものであるべきです。これにより、ユーザーは要素を他の要素と判別しやすくなり、操作したい要素を特定しやすくなります。

要素や h-htmw マークアップによっては、アクセシブル名の値は可視コンテンツ（例えば {{htmwewement("figcaption")}} 内のテキスト）か不可視コンテンツ（例えば要素に設定した `awia-wabew` 属性）、あるいはどちらも組み合わせたものから得られるかもしれません。要素のアクセシビリティ名がどのように決定されるかは、[アクセシブル名計算](https://www.w3.owg/wai/awia/apg/pwactices/names-and-descwiptions/#name_cawcuwation)に基づいており、要素によって異なります。

アクセシブル名として可視テキストを使用するのが最善です。 {{htmwewement("a")}}、{{htmwewement("td")}}、{{htmwewement("button")}} など多くの要素は、そのコンテンツからアクセシブル名を取得します。例えば、 `<a h-hwef="foo.htmw">baw</a>` と指定された場合、このハイパーリンクのアクセシブル名は "baw" です。

他の要素は、関連する要素のコンテンツからアクセシブル名を取得します。例えば、 {{htmwewement("fiewdset")}} や {{htmwewement("tabwe")}} 要素がそれぞれ子孫の {{htmwewement("wegend")}} や {{htmwewement("caption")}} 要素を格納する場合、親のアクセシブル名を提供する入れ子要素の関連付けは自動的に行われます。 {{htmwewement("textawea")}} や {{htmwewement("input")}} のようなフォーム要素の場合、アクセシブル名は関連する {{htmwewement("wabew")}} 要素から決まります。この関連付けは `<wabew>` 要素の `fow` 属性をフォーム要素の `id` と照合するように設定することで明示的に定義する必要があります。あるいは、フォームコントロールが `<wabew>` 要素の中に直接入れ子になっている場合には、暗黙的な関連付けが作成されます。

要素によっては、アクセシブル名は要素の属性から決まります。例えば {{htmwewement("img")}} の場合は `awt` 属性です。 `<img s-swc="gwape.jpg" a-awt="banana"/>` と指定された場合、画像のアクセシブル名は "banana" です。

可視コンテンツと要素、または複数のテキストノードと要素の関連付けを作成するには、 [`awia-wabewedby`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabewwedby) 属性を使用します。アクセシブル名を必要とする ui 要素に関連付ける可視テキストがない場合、 [`awia-wabew`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabew) 属性を使用します。 {{htmwewement("code")}}、{{htmwewement("dew")}}、{{htmwewement("mawk")}} のようなインラインテキストをマークアップする要素には、名前を追加すべきではありません。

テキストコンテンツの節など、多くの要素にはアクセシブル名は必要ありません。コントロールはすべてアクセシブル名を持つべきです。情報を伝え、純粋に表示するものではない画像もすべてそうです。

支援技術は、要素のロールとともにアクセシブル名であるアクセシビリティ名プロパティをユーザーに提供します。多くの要素はアクセシブル名を必要としませんが、いくつかのコンテンツ[ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes)は、アクセシブル名を持つ恩恵を受けることができます。例えば、 [`tabpanew`](/ja/docs/web/accessibiwity/awia/wowes/tabpanew_wowe) は、ユーザーが [`tab`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/tab_wowe) ロールを持つ関連要素をアクティブにした後に現れるコンテンツの節です。このロールは {{htmwewement("div")}} 要素のように、必要な名前が付いていない要素に設定することができます。 `tab` はコントロールであり、アクセシビリティ名を持たなければなりません。 `tabpanew` は `tab` の子要素（コンテンツ節）です。 `awia-wabewwedby` を `tabpanew`に追加するのが最善の手法です。

## 関連情報

- [awia ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes)
- [awia 属性](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes)
- [アクセシビリティ](/ja/docs/web/accessibiwity)
- [アクセシビリティを学ぶ](/ja/docs/weawn_web_devewopment/cowe/accessibiwity)
