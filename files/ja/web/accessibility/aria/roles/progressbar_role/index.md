---
title: progressbar ロールの使用
slug: Web/Accessibility/ARIA/Roles/progressbar_role
---

このテクニックは、[`progressbar`](http://www.w3.org/TR/wai-aria/#progressbar) ロールの使い方を示し、ブラウザーや支援技術への影響について説明します。

`progressbar` ロールは、長い時間がかかったり、いくつかの手順で構成されるタスクの進捗状況を表示する要素に使用するべきです。

プログレスバーは、ユーザーの要求を受けて、アプリケーションが要求された操作を完了に向かって進捗していることを示します。 プログレスバーの実際の値が決定できる場合、開発者は [`aria-valuenow`](http://www.w3.org/TR/wai-aria/#aria-valuenow)、[`aria-valuemin`](http://www.w3.org/TR/wai-aria/#aria-valuemin)、[`aria-valuemax`](http://www.w3.org/TR/wai-aria/#aria-valuemax) 属性を使用してこの進捗状況を示す必要があります。 進捗値が不確定な場合、開発者は `aria-valuenow` 属性を省略するべきです。

タスクが進捗するにつれて、`aria-valuenow` 値は、この進捗を支援技術製品に示すために動的に更新されなければならない。

プログレスバーがページの特定の領域のロード進捗状況を説明している場合、作者は、[aria-describedby](http://www.w3.org/TR/wai-aria/#aria-describedby) を使用してステータスを指し示すべきであり、ロードが完了するまで領域の [aria-busy](http://www.w3.org/TR/wai-aria/#aria-busy) 属性を `true` に設定する**べき**です（SHOULD）。 これは常に読み取り専用なので、ユーザーはプログレスバーの値を変更することはできません。

> **メモ:** 支援技術は、[aria-valuetext](http://www.w3.org/TR/wai-aria/#aria-valuetext) が指定されていない限り、`aria-valuemin` の値と `aria-valuemax` の値の間の範囲のパーセントとして、`aria-valuenow` の値を一般にレンダリングします。 この計算に適した方法で、`aria-valuemin`、`aria-valuemax`、`aria-valuenow` の値を設定することをお勧めします。

> **メモ:** `progressbar` ロールを持つ要素の暗黙の [`aria-readonly`](http://www.w3.org/TR/wai-aria/#aria-readonly) の値は `true` です。

## ユーザーエージェントと支援技術への影響

スクリーンリーダーは進捗状況の更新が発生したときにアナウンスするべきです。 プログレスバーにラベルが付いている場合は、ラベルテキストも同様に述べるべきです。

> **メモ:** 支援技術がどのようにこの技術を扱うべきかについての意見は異なる場合があります。 上記の情報は、これらの意見の 1 つで、したがって規範的ではありません。

## 例

### 例 1: パーセンテージ値を持つ基本的なプログレスバー

```html
<div
  role="progressbar"
  aria-valuenow="20"
  aria-valuemin="0"
  aria-valuemax="100">
  20 %
</div>
```

### 例 2: aria-valuetext の使用

```html
<div
  role="progressbar"
  aria-valuenow="20"
  aria-valuemin="0"
  aria-valuetext="ステップ 2: ファイルをコピーしています... "
  aria-valuemax="100">
  ステップ 2: ファイルをコピーしています...
</div>
```

### 動作する例

## 注

## 使用された ARIA 属性

- [progressbar](http://www.w3.org/TR/wai-aria/#progressbar)
- [aria-valuenow](http://www.w3.org/TR/wai-aria/#aria-valuenow)
- [aria-valuemin](http://www.w3.org/TR/wai-aria/#aria-valuemin)
- [aria-valuemax](http://www.w3.org/TR/wai-aria/#aria-valuemax)
- [aria-valuetext](http://www.w3.org/TR/wai-aria/#aria-valuetext)

## 関連する ARIA 技術

## 互換性

TBD: 一般的な UA と AT 製品の組み合わせに関するサポート情報を追加する

## その他のリソース
