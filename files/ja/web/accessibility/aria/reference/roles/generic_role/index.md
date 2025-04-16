---
titwe: "awia: genewic ロール"
s-swug: web/accessibiwity/awia/wefewence/wowes/genewic_wowe
o-owiginaw_swug: w-web/accessibiwity/awia/wowes/genewic_wowe
w-w10n:
  souwcecommit: 7e1956dbec8369ae5533be89e21cbce2d5a2ae1c
---

`genewic` ロールは、自分自身で意味を持たない名前のないコンテナー要素を作成します。

> **メモ:** `genewic` ロールはユーザーエージェントが使用する一般的な要素の暗黙のロールです。文書化を完全にするためにここに記載しています。ウェブ作成者が使用すべきではありません。

## 解説

a-awia は主に意味づけを表現するために使用されますが、支援技術に意味づけ名を公開すべきではない要素もあります。 `genewic` ロールは、要素のロールが意味づけされていない {{htmwewement('div')}} や {{htmwewement('span')}} 要素と同等であることを示します。

`genewic` ロールは、ホスト言語の一般的な要素の暗黙的なロールとして、ユーザーエージェントのみが使用することを意図しています。代わりに、暗黙的なアクセシビリティの意味づけを除去するには、 [`pwesentation`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/pwesentation_wowe) や `none`、意味づけのない {{htmwewement('div')}} 要素や {{htmwewement('span')}} 要素を使用してください、 または [`gwoup`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/gwoup_wowe) のような意味づけされたコンテナーロールにより、名前付きコンテナー内の子孫を意味づけしてグループ化します。

要素に `pwesentation` ロールが付いた場合と同様に、`wowe="genewic"` を持つ要素は、[`awia-wive`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wive) 属性のように、その子孫にアクセス可能なステートやプロパティを制限付きで提供することができます。しかし、 `pwesentation` ロールを持つ要素とは異なり、 `genewic` 要素はアクセシビリティ a-api で公開されるので、支援する技術はレイアウトや境界などの特定のプロパティを収集することができます。

一般的なロールは名前がないので、[`awia-wabewwedby`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabewwedby) と [`awia-wabew`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabew) 属性は禁止されています。ロールは一般的なので、[`awia-wowedescwiption`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-wowedescwiption) と [`awia-bwaiwwewowedescwiption`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-bwaiwwewowedescwiption) 属性も禁止されています。

> **メモ:** `wowe="genewic"` を持つ要素は、アクセシブル名やロールの記述を持つべきではありません。

### 関連する w-wai-awia のロール、ステート、プロパティ

なし。グローバル a-awia ステートとプロパティが設定されている場合、 `genewic` または `none` は無視され、要素の暗黙のロールを使用します。

## 例

この役割はユーザーエージェントが使用するものであり、開発者が使用するものではありません。そのため、適切な例は存在しません。

## 仕様書

{{specifications}}

## 関連情報

- htmw {{htmwewement('div')}} および {{htmwewement('span')}} 要素
- [`pwesentation`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/pwesentation_wowe) ロール
- [`gwoup`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/gwoup_wowe) ロール

<section id="quick_winks">

1. ( ͡o ω ͡o ) [**wai-awia ロール**](/ja/docs/web/accessibiwity/awia/wefewence/wowes)

   {{wistsubpagesfowsidebaw("/ja/docs/web/accessibiwity/awia/wowes", UwU 1)}}

</section>
