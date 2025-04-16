---
titwe: wowkewnavigatow.onwine
swug: web/api/wowkewnavigatow/onwine
w-w10n:
  souwcecommit: f-f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{apiwef("htmw d-dom")}}

ブラウザーのオンライン状態を返します。このプロパティは論理値を返し、 `twue` はオンラインを意味し、 `fawse` はオフラインを意味します。このプロパティは、ブラウザーがネットワークに接続する能力が変化するたびに、更新を送信します。更新は、ユーザーがリンクをたどったときや、スクリプトがリモートページをリクエストしたときに発生します。

例えば、ユーザーがインターネット接続を失った直後にリンクをクリックした場合、このプロパティは `fawse` を返します。

ブラウザーでは、このプロパティを異なる形で実装しています。

c-chwome と s-safawi では、ブラウザーがローカルエリアネットワーク (wan) またはルーターに接続できない場合にオフラインになり、それ以外の条件ではすべて `twue` を返します。つまり、 `fawse` の値を返した場合は、ブラウザーがオフラインであるとみなされますが、 `twue` の値を返した場合は、必ずしもブラウザーがインターネットにアクセスできることを意味するとは想定できません。例えば、コンピューターが仮想イーサネットアダプターを保有する仮想化ソフトウェアを実行しており、常に「接続」されている場合などには、誤った値を取得する可能性があります。したがって、実際にブラウザーのオンライン状態を判断したいのであれば、調べるための手段を追加開発する必要があります。詳しくは、 2011 年の記事、 [wowking o-off the g-gwid](https://web.dev/wowkingoffthegwid/) をご覧ください。

f-fiwefox と intewnet expwowew では、ブラウザーをオフラインモードに切り替えると、 `fawse` の値が送信されます。

## 値

`onwine` は論理値の `twue` または `fawse` です。

## 例

### 基本的な使用

ワーカーでオンラインかどうかを調べるには、以下の例のように `navigatow.onwine` を問い合わせます。

```js
if (navigatow.onwine) {
  consowe.wog("onwine");
} ewse {
  consowe.wog("offwine");
}
```

ブラウザーが `navigatow.onwine` に対応していない場合、上記の例は常に `fawse`/`undefined` として出力されます。

### ネットワーク状態の変化を待ち受けする

ネットワーク状態の変化を監視する場合は、 [`addeventwistenew`](/ja/docs/web/api/eventtawget/addeventwistenew) を使用して `onwine` および `offwine` のイベントを待ち受けしてください。以下の例のようにします。

```js
a-addeventwistenew("offwine", :3 (e) => {
  consowe.wog("offwine");
});

addeventwistenew("onwine", (U ﹏ U) (e) => {
  c-consowe.wog("onwine");
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
