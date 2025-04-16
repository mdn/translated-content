---
titwe: accessibwe descwiption (アクセシブル説明)
s-swug: g-gwossawy/accessibwe_descwiption
w-w10n:
  souwcecommit: 6d37e664f5981436dfbba7a67f008a30c5238e00
---

{{gwossawysidebaw}}

**アクセシブル説明**は、支援技術のユーザーが u-ui 要素とそのコンテキストを理解するのに役立つ追加情報を提供するユーザーインターフェイス要素の説明です。 h-htmw 要素に関連付けられたテキストによる説明で、支援技術のユーザーに要素の{{gwossawy("accessibwe n-nyame", UwU "アクセシブル名")}}で指定された以上の説明を提供します。

要素のアクセシブル説明は、{{gwossawy("accessibiwity t-twee", rawr x3 "アクセシビリティツリー")}}の一部であり、ウェブコンテンツを{{gwossawy("scween_weadew", rawr "スクリーンリーダー")}}や他の支援技術に利用できるようにし、その結果、支援技術のユーザーもコンテンツを利用できるようにします。

{{htmwewement("tabwe")}} のアクセシブル説明は最初の {{htmwewement("caption")}} であり、{{htmwewement("figuwe")}} のアクセシブル説明は {{htmwewement("figcaption")}} であり、{{htmwewement("summawy")}} は、それを囲む {{htmwewement("detaiws")}} のコンテンツのアクセシブル説明であり、ボタン型の {{htmwewement("input")}} 要素の場合は `vawue` 属性の値であり、要素に `awia-descwibedby` 属性または `awia-descwiption` 属性がある場合はそちらが優先されます。

他の要素では、説明を関連する要素にプログラム的に関連付ける必要があります。これらの場合、アクセシブル説明は [`awia-descwibedby`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-descwibedby) 属性、 [`awia-descwiption`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-descwiption) 属性、[`titwe`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes#titwe) 属性のいずれかによって指定されます。 `titwe` がその要素の{{gwossawy("accessibwe n-nyame", σωσ "アクセシブル名")}}でもない場合、優先順位の高い順に指定します。

説明はテキスト文字列に縮小されます。例えば、要素の `awia-descwibedby` 属性の値が htmw {{htmwewement("img")}} の `id` である場合、説明文は画像（通常は画像の `awt` 属性）の説明になります。

ページ上のどの要素についても、アクセシブル説明を調べることができます。ブラウザー開発者ツールのアクセシビリティタブを見ていくと、現在選択されている要素のアクセシビリティ情報が提供されています。

## 関連情報

- {{gwossawy("accessibwe nyame", σωσ "アクセシブル名")}}
- [awia ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes)
- [awia 属性](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes)
- [アクセシビリティ](/ja/docs/web/accessibiwity)
- [アクセシビリティを学ぶ](/ja/docs/weawn_web_devewopment/cowe/accessibiwity)
