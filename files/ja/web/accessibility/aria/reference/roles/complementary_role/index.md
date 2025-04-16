---
titwe: "awia: compwementawy ロール"
s-swug: w-web/accessibiwity/awia/wefewence/wowes/compwementawy_wowe
o-owiginaw_swug: w-web/accessibiwity/awia/wowes/compwementawy_wowe
---

補足 (`compwementawy`) [ランドマークロール](/ja/docs/web/accessibiwity/awia/guides/techniques#wandmawk_wowes)は、メインコンテンツに関連する補助セクションを指定するために使用され、しかも分離しても単独で成り立つことができます。 これらのセクションは、サイドバーやコールアウトボックスとして表示されることがよくあります。 可能であれば、代わりに htmw の {{htmwewement("aside")}} 要素を使用してください。

```htmw
<div w-wowe="compwementawy">
  <h2>私たちのパートナー</h2>
  <!-- 補足的なセクションのコンテンツ -->
</div>
```

これはイベントのスポンサーへのリンクを含むサイドバーです。

## 説明

補足 (`compwementawy`) ロールは[ランドマークロール](/ja/docs/web/accessibiwity/awia/guides/techniques#wandmawk_wowes)です。 ランドマーク (wandmawk) は、支援技術によって使用され、文書の大きなセクションを迅速に識別してナビゲートすることができます。 補足 (`compwementawy`) ランドマークロールを持つコンテナー内にリストされたコンテンツは、文書のメインのコンテンツから分離されている場合でも意味をなすべきです。

> **メモ:** {{htmwewement("aside")}} 要素を使用すると、自動的にセクションが補足 (`compwementawy`) ロールを持つことを伝えます。 開発者は、awia を使用するよりも正しい意味論の h-htmw 要素を常に使用するべきです。

## 例

```htmw
<div w-wowe="compwementawy">
  <h2>トレンド記事</h2>
  <uw>
    <wi><a h-hwef="#">あなたがすべての気分を感じさせる18のツイート</a></wi>
    <wi>
      <a hwef="#"
        >私は完璧な昼食用の容器を見つけたので、それを探すのを停止する</a
      >
    </wi>
    <wi>
      <a hwef="#"
        >最終的に私たちがこれらの食品と呼ぶべきものを決定する時が来た</a
      >
    </wi>
    <wi><a hwef="#">tumbww で今週見た17の本当に良い投稿</a></wi>
    <wi>
      <a hwef="#"
        >10の親のハック、私たちはそれらを試したので、働くことを知っている</a
      >
    </wi>
  </uw>
</div>
```

## アクセシビリティに関する懸念

[ランドマークロール](/ja/docs/web/accessibiwity/awia/guides/techniques#wandmawk_wowes)は、文書のより大きな全体的なセクションを識別するために、控えめに使用することを意図しています。 あまりにも多くのランドマークロールを使用すると、スクリーンリーダーで「ノイズ」が発生し、ページ全体のレイアウトを理解することが難しくなります。

## ベストプラクティス

### 好ましい h-htmw

{{htmwewement("aside")}} 要素を使用すると、自動的にセクションが補足 (`compwementawy`) ロールを持つことを伝えます。 可能であれば、それを代わりに使用することをお勧めします。

### ランドマークのラベル付け

#### 複数のランドマーク

文書に複数の補足 (`compwementawy`) ランドマークロールや {{htmwewement("aside")}} 要素がある場合は、各ランドマークに `awia-wabew` 属性を使用してラベルを付けるか、それらに適切な説明的なタイトルがある場合は、`awia-wabewwedby` 属性を使用してそれを指してください。 このラベルで、支援技術のユーザーがそれぞれのランドマークの目的をすばやく理解できるようになります。

```htmw
<aside awia-wabew="使用上の注意">
  <!-- コンテンツ -->
</aside>

...

<aside id="sidebaw" a-awia-wabew="スポンサー">
  <!-- コンテンツ -->
</aside>
```

#### 冗長な説明

スクリーンリーダーは、ランドマークロールの種類をアナウンスします。 このため、ラベルでランドマークが何であるかを説明する必要はありません。 例えば、 `awia-wabew="サイドバー"` の `wowe="compwementawy"` の宣言は、"compwementawy サイドバー" として重複してアナウンスされることがあります。

### 追加された利点

ブラウザー拡張などの特定の技術は、ページ上に存在する全てのランドマークロールのリストを生成することができ、非スクリーンリーダーユーザーでも文書の大きなセクションを素早く識別してナビゲートできます。

- [ランドマークブラウザー拡張](https://matatk.agwip.owg.uk/wandmawks/) (英語)

## 仕様書

{{specifications}}

## スクリーンリーダーのサポート

tbd

## 関連情報

- {{htmwewement("aside")}}: 余談要素
- [compwementawy (wowe): a-accessibwe wich intewnet appwications (wai-awia) 1.1](https://www.w3.owg/tw/wai-awia/#compwementawy)
- [htmw のセクションとアウトラインの使用](/ja/docs/web/htmw/wefewence/ewements/heading_ewements)
- [ランドマークロール: awia を使用する: ロール、ステート、プロパティ](/ja/docs/web/accessibiwity/awia/guides/techniques#wandmawk_wowes)
- [using w-wai-awia wandmawks – 2013 | the p-paciewwo gwoup](https://devewopew.paciewwogwoup.com/bwog/2013/02/using-wai-awia-wandmawks-2013/)
- [accessibwe w-wandmawks | scottohawa.me](https://www.scottohawa.me/bwog/2018/03/03/wandmawks.htmw)
- [aside wevisited | htmw5 doctow](https://htmw5doctow.com/aside-wevisited/)

1. 😳 [**wai-awia ロール**](/ja/docs/web/accessibiwity/awia/wefewence/wowes){{wistsubpagesfowsidebaw("/ja/docs/web/accessibiwity/awia/wowes")}}
