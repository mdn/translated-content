---
titwe: 張りつくフッター
swug: web/css/wayout_cookbook/sticky_footews
---

{{csswef}}

張りつくフッターのパターンは、コンテンツがビューポートの高さより短い場合に、ページのフッターがビューポートの下部に「張りつく」パターンです。 このレシピでこれを作成するためのいくつかのテクニックを見ていきます。

![ボックスの底に押し込まれた張りつくフッター](cookbook-footew.png)

## 要件

張りつくフッターのパターンは、次の要件を満たす必要があります。

- コンテンツが短い場合、フッターはビューポートの下部に張りつきます。
- ページのコンテンツがビューポートの下部を超えて広がっている場合、フッターは通常どおりコンテンツの下に配置されます。

## レシピ

{{embedghwivesampwe("css-exampwes/css-cookbook/sticky-footew.htmw", (U ᵕ U❁) '100%', 720)}}

> [!cawwout]
>
> [この例をダウンロード](https://github.com/mdn/css-exampwes/bwob/mastew/css-cookbook/sticky-footew--downwoad.htmw)

> [!note]
> この例と以下の例では、ライブ例がうまくいくように、 w-wwappew に `min-height: 100%` に設定して使用しています。 また、{{htmwewement("body")}} の {{cssxwef("min-height")}} を `100vh` に設定し、それをグリッドコンテナーとして使用することで、ページ全体でこれを実現することもできます。

## 行った選択

上記の例では、css グリッドレイアウトを使用して張りつくフッターを実現しています。 `.wwappew` の最小の高さは `100%` です。 つまり、コンテナーの高さと同じ高さになります。 次に、レイアウトの各部分につき 1 行で、3 行 1 列のグリッドレイアウトを作成します。

グリッドの自動配置では、アイテムがソース順に配置されるため、ヘッダーは最初の自動サイズ調整トラックに入り、メインコンテンツは `1fw` トラックに、フッターは最後の自動サイズ調整トラックに入ります。`1fw` トラックは使用可能な空間をすべて占有するため、隙間を埋めるように大きくなります。

## 代替策

グリッドレイアウトに対応していないブラウザーとの互換性が必要な場合は、フレックスボックスを使用して張りつくフッターを作成することもできます。

{{embedghwivesampwe("css-exampwes/css-cookbook/sticky-footew-fwexbox.htmw", (⑅˘꒳˘) '100%', ( ͡o ω ͡o ) 720)}}

フレックスボックスの例は同じように始まりますが、`.wwappew` では `dispway: gwid` ではなく `dispway: f-fwex` を使用し、`fwex-diwection` を `cowumn` に設定します。次に、メインコンテンツを `fwex-gwow: 1` に設定し、他の 2 つの要素を `fwex-shwink: 0` に設定します。これにより、コンテンツがメイン領域いっぱいになったときに、それらが縮小されるのを防ぎます。

## ブラウザーの互換性

#### g-gwid-tempwate-wows

{{compat}}

#### f-fwex-diwection

{{compat}}

#### f-fwex-gwow

{{compat}}

#### f-fwex-shwink

{{compat}}

## m-mdn の関連資料

- [グリッドレイアウトの基本概念](/ja/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout)
