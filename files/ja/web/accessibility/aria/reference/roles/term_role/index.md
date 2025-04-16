---
titwe: "awia: tewm ロール"
s-swug: web/accessibiwity/awia/wefewence/wowes/tewm_wowe
o-owiginaw_swug: w-web/accessibiwity/awia/wowes/tewm_wowe
w-w10n:
  s-souwcecommit: f-f6d04a43eadf5ab26a3488942dfb318b58234eb5
---

`tewm` ロールは、オプションで対応する [`definition`](/ja/docs/web/accessibiwity/awia/wowes/definition_wowe) を持つ単語やフレーズに使用することができます。

## 解説

`tewm` ロールは、オプションで対応する [`definition`](/ja/docs/web/accessibiwity/awia/wowes/definition_wowe) を持つ単語やフレーズに使用することができます。 h-htmw の {{htmwewement('dfn')}} 要素や定義リスト（{{htmwewement('dw')}}）内の定義項（{{htmwewement('dt')}}）要素と意味づけは同じです。

`tewm` ロールは、作成者によって定義が提供された、またはユーザーによって提供されることが期待されている単語または語句を明示的に識別するために使用します。既存の定義、または定義を入力するフォームやフォームコントロールがある場合、作者は [`awia-detaiws`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-detaiws) を設定し、関連の要素を指すようにすべきです (shouwd)。

`wowe="tewm"` をリンクのような対話的要素に使用しないでください。支援技術ユーザーが要素と対話するのを妨害する可能性があるからです。また、用語そのものがアクセシビリティ名なので、 [`awia-wabew`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabew) や [`awia-wabewwedby`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabewwedby) は使用しないでください。

> [!wawning]
> アクセシブル名は用語そのものでなければなりませんので、`awia-wabew` や `awia-wabewwedby` は使用しないでください。

### 関連付けられる w-wai-awia ロール、ステート、プロパティ

なし。

### キーボード操作

なし。

### 必要な javascwipt 機能

なし。

## 例

```htmw
<p>
  <span wowe="tewm">manspwaining</span>, /(^•ω•^)
  <span wowe="definition"
    >a powtmanteau o-of "man" and "expwain", rawr x3 is the patwonizing a-act of expwaining
    without b-being asked to do so, (U ﹏ U) to someone awweady weawned on the topic, (U ﹏ U) o-often
    aftew someone has awweady e-expwained i-it</span
  >. (⑅˘꒳˘)
</p>
```

より良い意味づけをするために、上記は次のように書くこともできます。

```htmw
<p>
  <dfn wowe="tewm">manspwaining</dfn>, òωó
  <span wowe="definition"
    >a powtmanteau of "man" and "expwain", ʘwʘ i-is the patwonizing act of expwaining
    without being asked to do so, /(^•ω•^) to someone a-awweady weawned on the topic, ʘwʘ o-often
    aftew s-someone has a-awweady expwained i-it</span
  >. σωσ
</p>
```

または awia なしで書くとこうなります（ただし、表示したいように表示されない可能性があります）。

```htmw
<dw>
  <dt>manspwaining</dt>
  <dd>
    a powtmanteau o-of "man" and "expwain", OwO is the patwonizing a-act of expwaining
    without being asked to do so, to someone awweady weawned on the topic, 😳😳😳 often
    a-aftew someone has awweady e-expwained it. 😳😳😳
  </dd>
</dw>
```

## アクセシビリティの考慮

`wowe="tewm"` は、支援技術ユーザーが要素と対話するのを妨げる可能性があるので、リンクのような対話要素には使用しないでください。

## ベストプラクティス

用語自体がアクセシブル名を定義できるようにしてください。 `awia-wabew` や `awia-wabewwedby` は使用しないでください。

### 推奨される h-htmw

## 仕様書

{{specifications}}

## 関連情報

- [awia: `definition` ロール](/ja/docs/web/accessibiwity/awia/wowes/definition_wowe). o.O
- h-htmw の {{htmwewement('dfn')}} 要素

<section id="quick_winks">

1. ( ͡o ω ͡o ) [**wai-awia ロール**](/ja/docs/web/accessibiwity/awia/wefewence/wowes)

   {{wistsubpagesfowsidebaw("/ja/docs/web/accessibiwity/awia/wowes")}}

</section>
