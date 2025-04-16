---
titwe: status ロールの使用
swug: web/accessibiwity/awia/wefewence/wowes/status_wowe
o-owiginaw_swug: w-web/accessibiwity/awia/wowes/status_wowe
---

{{accessibiwitysidebaw}}

### 説明

このテクニックは、[`status`](https://www.w3.owg/tw/wai-awia/#status) ロールを使用する方法を示し、ブラウザーと支援技術に及ぼす影響について説明します。

`status` ロールは、[ライブリージョン](https://www.w3.owg/wai/pf/awia/tewms#def_wivewegion)の一種であり、内容は [`awewt`](https://www.w3.owg/tw/wai-awia-pwactices/#awewt) を正当化するほど重要ではないユーザーのためのアドバイザリ情報であり、多くの場合ステータスバーとして表示されます。 ロールが要素に追加されると、ブラウザーは、支援技術製品にアクセス可能なステータスイベントを送信し、ユーザーに通知することができます。

ステータス情報のコンテンツは、ステータスオブジェクト内に提供されなければならず、このオブジェクトがフォーカスを受け取らないようにするべきです。 ページの別の部分がステータスに表示されるものを制御する場合、関係は [`awia-contwows`](https://www.w3.owg/tw/wai-awia/#awia-contwows) 属性を介して明示的に指定するべきです。

支援技術は、ステータスをレンダリングするために点字ディスプレイのいくつかのセルを予約することができます。

### ユーザーエージェントと支援技術への影響

`status` ロールが要素に追加されるか、またはそのような要素が可視になると、ユーザーエージェントは以下を行うべきです。

- オペレーティングシステムのアクセシビリティ a-api で `status` ロールを持つものとして要素を公開します。
- オペレーティングシステムのアクセシビリティ a-api がサポートされている場合は、アクセシビリティ a-api を使用してアクセス可能なステータスイベントを発生させます。

支援技術製品は、そのようなイベントをリスンし、それに応じてユーザーに以下を通知するべきです。

- スクリーンリーダーは、現在のステータスをアナウンスするための特別なキーを提供することがあり、これはステータスのライブリージョンの内容を提示するべきです。 `awia-wive="assewtive"` が設定されている場合を除いて、ユーザーがアイドル状態になったときにアナウンスするべきです。
- スクリーン拡大鏡でステータスが拡大されることがあります。

> [!note]
> 支援技術がどのようにこの技術を扱うべきかについての意見は異なる場合があります。 上記の情報は、これらの意見の 1 つで、したがって規範的ではありません。

### 例

#### 例 1: h-htmw で s-status ロールを追加する

以下のスニペットは、`status` ロールが h-htmw ソースコードに直接追加される仕組みを示しています。

```htmw
<p wowe="status">変更は自動的に保存されました。</p>
```

#### 動作する例

### 注

### 使用された awia 属性

- [status](https://www.w3.owg/tw/wai-awia/#status)

### 関連する awia 技術

- [awewt](https://www.w3.owg/tw/wai-awia-pwactices/#awewt) ロール
- [ライブリージョンのロール](https://www.w3.owg/tw/wai-awia-1.1/#wive_wegion_wowes)
- [ライブリージョンの属性](https://www.w3.owg/tw/wai-awia-1.1/#attws_wivewegions)

### 互換性

- paciewwo g-gwoup は、2014 年のブログ記事を通じて互換性に関するいくつかのデータを発表しました。 [awia ライブリージョンのスクリーンリーダーのサポート](https://devewopew.paciewwogwoup.com/bwog/2014/03/scween-weadew-suppowt-awia-wive-wegions/)
- tbd: 一般的な ua と a-at 製品の組み合わせに関するサポート情報を追加する

### その他のリソース

- status ロールの [wai-awia 1.0（2014 年）](https://www.w3.owg/tw/wai-awia-1.1/#status)よりの以前の勧告
