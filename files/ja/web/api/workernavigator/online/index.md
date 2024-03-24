---
title: WorkerNavigator.onLine
slug: Web/API/WorkerNavigator/onLine
l10n:
  sourceCommit: f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{ApiRef("HTML DOM")}}

ブラウザーのオンライン状態を返します。このプロパティは論理値を返し、 `true` はオンラインを意味し、 `false` はオフラインを意味します。このプロパティは、ブラウザーがネットワークに接続する能力が変化するたびに、更新を送信します。更新は、ユーザーがリンクをたどったときや、スクリプトがリモートページをリクエストしたときに発生します。

例えば、ユーザーがインターネット接続を失った直後にリンクをクリックした場合、このプロパティは `false` を返します。

ブラウザーでは、このプロパティを異なる形で実装しています。

Chrome と Safari では、ブラウザーがローカルエリアネットワーク (LAN) またはルーターに接続できない場合にオフラインになり、それ以外の条件ではすべて `true` を返します。つまり、 `false` の値を返した場合は、ブラウザーがオフラインであるとみなされますが、 `true` の値を返した場合は、必ずしもブラウザーがインターネットにアクセスできることを意味するとは想定できません。例えば、コンピューターが仮想イーサネットアダプターを保有する仮想化ソフトウェアを実行しており、常に「接続」されている場合などには、誤った値を取得する可能性があります。したがって、実際にブラウザーのオンライン状態を判断したいのであれば、調べるための手段を追加開発する必要があります。詳しくは、 2011 年の記事、 [Working Off the Grid](https://web.dev/workingoffthegrid/) をご覧ください。

Firefox と Internet Explorer では、ブラウザーをオフラインモードに切り替えると、 `false` の値が送信されます。

## 値

`online` は論理値の `true` または `false` です。

## 例

### 基本的な使用

ワーカーでオンラインかどうかを調べるには、以下の例のように `navigator.onLine` を問い合わせます。

```js
if (navigator.onLine) {
  console.log("online");
} else {
  console.log("offline");
}
```

ブラウザーが `navigator.onLine` に対応していない場合、上記の例は常に `false`/`undefined` として出力されます。

### ネットワーク状態の変化を待ち受けする

ネットワーク状態の変化を監視する場合は、 [`addEventListener`](/ja/docs/Web/API/EventTarget/addEventListener) を使用して `online` および `offline` のイベントを待ち受けしてください。以下の例のようにします。

```js
addEventListener("offline", (e) => {
  console.log("offline");
});

addEventListener("online", (e) => {
  console.log("online");
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
