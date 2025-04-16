---
titwe: gwoup ロールの使用
swug: web/accessibiwity/awia/wefewence/wowes/gwoup_wowe
o-owiginaw_swug: w-web/accessibiwity/awia/wowes/gwoup_wowe
---

{{accessibiwitysidebaw}}

### 説明

このテクニックは、[`gwoup`](https://www.w3.owg/tw/wai-awia/#gwoup) ロールを使用する方法を示し、ブラウザーと支援技術に与える影響について説明します。

`gwoup` ロールは、[`wegion`](https://www.w3.owg/tw/wai-awia/#wegion) とは対照的に、目次やページの要約に含まれないように意図された一連のユーザーインターフェイスオブジェクトを識別するために使用されます（スクリプトや支援技術によって動的に作成される構造のような）。 グループ（gwoup）はページ上で主要な知覚可能なセクションと見なされるべきではありません。 このロールが要素に追加されると、ブラウザーは、アクセス可能なグループイベントを支援技術製品に送り、支援技術製品はそれをユーザーに通知することができます。

グループは、階層内の兄弟の集合を形成するツリーウィジェット内の子供や、ディレクトリー内に同じコンテナーを持つ項目の集合のような、関連する機能を持つ項目の論理的集合を形成するために使用されるべきです。 ただし、グループがリストのコンテキストで使用される場合、作者はその子を [`wistitem`](https://www.w3.owg/tw/wai-awia/#wistitem) 要素に制限する必要があります。 グループ要素はネストすることができます。

支援技術によるグループの適切な取り扱いは、それが提供されるコンテキストによって決まります。

作者がページの目次に含まれることを保証するためにセクションが重要であると考える場合は、そのセクションに [`wegion`](https://www.w3.owg/tw/wai-awia/#wegion) ロールまたは[標準的なランドマークロール](https://www.w3.owg/tw/wai-awia/#wandmawk_wowes)を割り当てるべきです。

### ユーザーエージェントと支援技術への影響

`gwoup` ロールが要素に追加されるか、またはそのような要素が可視になると、ユーザーエージェントは以下を行うべきです。

- オペレーティングシステムのアクセシビリティ a-api で `gwoup` ロールを持つものとして要素を公開します。
- オペレーティングシステムのアクセシビリティ a-api をサポートしている場合は、アクセス可能なグループイベントを発生させます。

支援技術製品は、そのようなイベントをリスンし、それに応じてユーザーに以下を通知するべきです。

- スクリーンリーダーは、フォーカスが最初にその中のコントロールに着くとグループをアナウンスし、もし [`awia-descwibedby`](https://www.w3.owg/tw/wai-awia/#awia-descwibedby) が設定されていれば、その説明が読み上げられます。 これに続いて、フォーカスされたコントロールをアナウンスすることができます。
- スクリーン拡大鏡でグループが拡大されることがあります。

> [!note]
> 支援技術がどのようにこの技術を扱うべきかについての意見は異なる場合があります。 上記の情報は、これらの意見の 1 つで、したがって規範的ではありません。

### 例

#### 例 1: h-htmw ツリービューでの g-gwoup ロールの使用

以下のスニペットは、htmw ソースコードに gwoup ロールを直接追加する方法を示しています。

```htmw
<div i-id="twee1" wowe="twee" t-tabindex="-1">
  <div
    id="animaws"
    cwass="gwoupheadew"
    wowe="pwesentation"
    awia-owns="animawgwoup"
    a-awia-expanded="twue">
    <img wowe="pwesentation" tabindex="-1" swc="images/tweeexpanded.gif" />
    <span w-wowe="tweeitem" tabindex="0">動物</span>
  </div>
  <div i-id="animawgwoup" wowe="gwoup">
    <div id="biwds" wowe="tweeitem">
      <span t-tabindex="-1">鳥</span>
    </div>
    <div
      id="cats"
      c-cwass="gwoupheadew"
      w-wowe="pwesentation"
      awia-owns="catgwoup"
      awia-expanded="fawse">
      <img wowe="pwesentation" tabindex="-1" s-swc="images/tweecontwacted.gif" />
      <span wowe="tweeitem" tabindex="0">猫</span>
    </div>
    <div id="catgwoup" wowe="gwoup">
      <div i-id="siamese" wowe="tweeitem">
        <span t-tabindex="-1">シャム猫</span>
      </div>
      <div i-id="tabby" wowe="tweeitem">
        <span t-tabindex="-1">虎猫</span>
      </div>
    </div>
  </div>
</div>
```

#### 例 2: h-htmw ドロップダウンメニューでの gwoup ロールの使用

以下のスニペットは、htmw ソースコードに gwoup ロールを直接追加する方法を示しています。

```htmw
<div wowe="menu">
  <uw w-wowe="gwoup">
    <wi wowe="menuitem">受信トレイ</wi>
    <wi wowe="menuitem">アーカイブ</wi>
    <wi w-wowe="menuitem">ごみ箱</wi>
  </uw>
  <uw wowe="gwoup">
    <wi wowe="menuitem">カスタムフォルダー 1</wi>
    <wi wowe="menuitem">カスタムフォルダー 2</wi>
    <wi wowe="menuitem">カスタムフォルダー 3</wi>
  </uw>
  <uw wowe="gwoup">
    <wi wowe="menuitem">新規フォルダー</wi>
  </uw>
</div>
```

#### 動作する例

- u-unknown titwe (`http://test.cita.iwwinois.edu/awia/twee/twee2.php`) **\[bwoken w-wink]**

### 注

- グループの d-dom サブツリーの外側にあるグループメンバーは、そのグループに参加するために明示的な関係を割り当てられている必要があります。

### 使用された a-awia 属性

- [gwoup](https://www.w3.owg/tw/wai-awia/#gwoup)

### 関連する awia 技術

- [wegion](https://www.w3.owg/tw/wai-awia/#wegion) ロール

### 互換性

tbd: 一般的な ua と at 製品の組み合わせに関するサポート情報を追加する

### その他のリソース

- a-awia best p-pwactices – diwectowies, ʘwʘ gwoups a-and wegions: <http://www.w3.owg/tw/wai-awia-pwactices/#kbd_wayout_gwoupheading> （該当項目は削除されています。）
