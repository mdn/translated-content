---
title: status ロールの使用
slug: Web/Accessibility/ARIA/Roles/status_role
---

{{AccessibilitySidebar}}

### 説明

このテクニックは、[`status`](https://www.w3.org/TR/wai-aria/#status) ロールを使用する方法を示し、ブラウザーと支援技術に及ぼす影響について説明します。

`status` ロールは、[ライブリージョン](http://www.w3.org/WAI/PF/aria/terms#def_liveregion)の一種であり、内容は [`alert`](https://www.w3.org/TR/wai-aria-practices/#alert) を正当化するほど重要ではないユーザーのためのアドバイザリ情報であり、多くの場合ステータスバーとして表示されます。 ロールが要素に追加されると、ブラウザーは、支援技術製品にアクセス可能なステータスイベントを送信し、ユーザーに通知することができます。

ステータス情報のコンテンツは、ステータスオブジェクト内に提供されなければならず、このオブジェクトがフォーカスを受け取らないようにするべきです。 ページの別の部分がステータスに表示されるものを制御する場合、関係は [`aria-controls`](http://www.w3.org/TR/wai-aria/#aria-controls) 属性を介して明示的に指定するべきです。

支援技術は、ステータスをレンダリングするために点字ディスプレイのいくつかのセルを予約することができます。

### ユーザーエージェントと支援技術への影響

`status` ロールが要素に追加されるか、またはそのような要素が可視になると、ユーザーエージェントは以下を行うべきです。

- オペレーティングシステムのアクセシビリティ API で `status` ロールを持つものとして要素を公開します。
- オペレーティングシステムのアクセシビリティ API がサポートされている場合は、アクセシビリティ API を使用してアクセス可能なステータスイベントを発生させます。

支援技術製品は、そのようなイベントをリスンし、それに応じてユーザーに以下を通知するべきです。

- スクリーンリーダーは、現在のステータスをアナウンスするための特別なキーを提供することがあり、これはステータスのライブリージョンの内容を提示するべきです。 `aria-live="assertive"` が設定されている場合を除いて、ユーザーがアイドル状態になったときにアナウンスするべきです。
- スクリーン拡大鏡でステータスが拡大されることがあります。

> [!NOTE]
> 支援技術がどのようにこの技術を扱うべきかについての意見は異なる場合があります。 上記の情報は、これらの意見の 1 つで、したがって規範的ではありません。

### 例

#### 例 1: HTML で status ロールを追加する

以下のスニペットは、`status` ロールが html ソースコードに直接追加される仕組みを示しています。

```html
<p role="status">変更は自動的に保存されました。</p>
```

#### 動作する例

### 注

### 使用された ARIA 属性

- [status](https://www.w3.org/TR/wai-aria/#status)

### 関連する ARIA 技術

- [alert](https://www.w3.org/TR/wai-aria-practices/#alert) ロール
- [ライブリージョンのロール](https://www.w3.org/TR/wai-aria-1.1/#live_region_roles)
- [ライブリージョンの属性](https://www.w3.org/TR/wai-aria-1.1/#attrs_liveregions)

### 互換性

- Paciello Group は、2014 年のブログ記事を通じて互換性に関するいくつかのデータを発表しました。 [ARIA ライブリージョンのスクリーンリーダーのサポート](https://developer.paciellogroup.com/blog/2014/03/screen-reader-support-aria-live-regions/)
- TBD: 一般的な UA と AT 製品の組み合わせに関するサポート情報を追加する

### その他のリソース

- status ロールの [WAI-ARIA 1.0（2014 年）](https://www.w3.org/TR/wai-aria-1.1/#status)よりの以前の勧告
